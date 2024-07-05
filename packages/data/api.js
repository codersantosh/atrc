/* WordPress */
import { addQueryArgs } from '@wordpress/url';

/* Library */
import axios from 'axios';

/* Internal */
import { AtrcStore } from './store';

/* Local */
/* AtrcApis is a utility class that can be used to register and perform CRUD operations on different types of APIs. It allows for registering different types of APIs for a particular data type, such as posts, pages, and custom types, and also allows for registering custom types of APIs. The class utilizes the @wordpress/api-fetch and @wordpress/url libraries to handle the API calls and add query arguments to the URLs, and it allows for additional actions to be performed on the data before or after the API call is made. It also allows for adding store using @wordpress/data library.*/

function axiosFetch(options) {
    let { key, path, data, method } = options;
    if (!path.startsWith('http')) {
        if (!path.startsWith('wp-json')) {
            path = `wp-json/${path}`;
        }
        if (AtrcApis.baseUrls[key]) {
            path = AtrcApis.baseUrls[key] + `/${path}`;
        } else if (AtrcApis.baseUrls['atrc-global-api-base-url']) {
            path = AtrcApis.baseUrls['atrc-global-api-base-url'] + `/${path}`;
        }
        path = path.replace(/([^:]\/)\/+/g, '$1');
        path = path.replace(/wp-json\/wp-json\//, 'wp-json/');
    }

    let axiosConfig = {};

    if (AtrcApis.axiosConfig[key]) {
        axiosConfig = AtrcApis.axiosConfig[key];
    } else if (AtrcApis.axiosConfig['atrc-global-axios-config']) {
        axiosConfig = AtrcApis.axiosConfig['atrc-global-axios-config'];
    }

    return axios({
        url: path,
        method,
        data,
        ...axiosConfig,
    });
}

class ClassAtrcApis {
    constructor() {
        if (!ClassAtrcApis.instance) {
            ClassAtrcApis.instance = this;
            this.types = [];
            this.baseUrls = {};
            this.XWPNonce = '';
            this.axiosConfig = {};
        }
        return ClassAtrcApis.instance;
    }

    xWpNonce(val) {
        this.XWPNonce = val;
    }

    baseUrl({ key, url }) {
        this.baseUrls[key] = url;
    }

    /* https://www.npmjs.com/package/axios#request-config */
    setAxiosConfig({ key, config }) {
        this.axiosConfig[key] = config;
    }

    register(props) {
        /**
         * @param {string}        key             key data type eg: post, page, custom type, custom table etc
         * @param {string}        path            rest api respective or full path eg:/wp/v2/posts/ or http://example.com/wp-json/wp/v2/posts/
         * @param {Object}        callbacks       a set of callback function for respective type or types eg: { getItems: () => {}, getItem: () => {}, insertItem: () => {}, deleteItem: () => {}}
         * @param {function(...)} filterQueryArgs optional filter query args to filter/add additional queries.
         * @param {function(...)} filterResult    optional filter result to add additional data on result
         * @param {boolean}       addStore        add store using @wordpress/data
         */
        const {
            key,
            path,
            callbacks = {},
            filterQueryArgs = null,
            filterResult = null,
            filterData = null,
            addStore = true,
            type,
            optionName,
            queryArgs,
            allowedParams,
            queryParams,
        } = props;
        if ('settings' === type) {
            this.types.push({
                key,
                path,
                type: 'getSettings',
                callbacks: callbacks.getSettings || null,
                filterResult,
                filterData,
                optionName,
            });
            this.types.push({
                key,
                path,
                type: 'saveSettings',
                callbacks: callbacks.saveSettings || null,
                filterResult,
                filterData,
                optionName,
            });
            this.types.push({
                key,
                path,
                type: 'deleteSettings',
                callbacks: callbacks.deleteSettings || null,
                filterResult,
                filterData,
                optionName,
            });
        } else {
            // Register all methods for the key and path
            this.types.push({
                key,
                path,
                type: 'getItems',
                callbacks: callbacks.getItems || null,
                filterResult,
                filterData,
                filterQueryArgs,
            });
            this.types.push({
                key,
                path,
                type: 'getItem',
                callbacks: callbacks.getItem || null,
                filterResult,
                filterData,
            });
            this.types.push({
                key,
                path,
                type: 'insertItem',
                callbacks: callbacks.insertItem || null,
                filterResult,
                filterData,
            });
            this.types.push({
                key,
                path,
                type: 'updateItem',
                callbacks: callbacks.updateItem || null,
                filterResult,
                filterData,
            });
            this.types.push({
                key,
                path,
                type: 'deleteItem',
                callbacks: callbacks.deleteItem || null,
                filterResult,
                filterData,
            });
        }

        if (addStore) {
            AtrcStore.register({
                key,
                type,
                queryArgs,
                allowedParams,
                queryParams,
            });
        }
    }

    /**
     *
     * @param {string}        key      key data type eg: post, page, custom type, custom table etc
     * @param {string}        path     rest api respective or full path eg:/wp/v2/posts/ or http://example.com/wp-json/wp/v2/posts/
     * @param {string}        type     custom type expect CURD operations
     * @param {function(...)} callback custom type callback function eg: doSomething: () => {}
     */
    registerType({ key, path, type, callback }) {
        this.types.push({ key, path, type, callback });
    }

    /**
     *
     * @param {string} key   key data type eg: post, page, custom type, custom table etc
     * @param {string} type  type of api
     * @param {Object} data  optional either query args or insert/update data
     * @param {number} rowId optional either query args or insert/update data
     */
    async doApi({ key, type, data, rowId = 0, hiddenQueryArgsData }) {
        // Find the API endpoint based on the key and type provided
        const api = this.types.find(
            (item) => item.key === key && item.type === type
        );
        if (!api) {
            console.error(`API for key ${key} and type ${type} not found.`);
            return;
        }

        // Perform the API call based on the type
        let result = {};
        let response = {};
        try {
            if (this.XWPNonce) {
                axios.defaults.headers.common['X-WP-Nonce'] = this.XWPNonce;
            }

            switch (api.type) {
                case 'getItems': {
                    let { path } = api;
                    if (api.filterQueryArgs) {
                        data = api.filterQueryArgs({ data, api, hiddenQueryArgsData });
                    }
                    if (data) {
                        path = addQueryArgs(path, data);
                    }

                    response = await axiosFetch({
                        key,
                        path,
                        method: 'GET',
                    });

                    if (response.headers) {
                        if (response.headers.get('X-WP-Count-All')) {
                            result.countAllItems = parseInt(
                                response.headers.get('X-WP-Count-All')
                            );
                        }
                        if (response.headers.get('X-WP-TotalPages')) {
                            result.totalPages = parseInt(
                                response.headers.get('X-WP-TotalPages')
                            );
                        }
                        if (response.headers.get('X-WP-Total')) {
                            result.countQueryItems = parseInt(
                                response.headers.get('X-WP-Total')
                            );
                        }
                    }

                    result.items = response.data;
                    break;
                }
                case 'getItem': {
                    response = await axiosFetch({
                        key,
                        path: `${api.path}/${rowId}`,
                        method: 'GET',
                    });
                    result = response.data;

                    break;
                }
                case 'insertItem':
                    if (api.filterData) {
                        data = api.filterData({ data, api });
                    }
                    response = await axiosFetch({
                        key,
                        path: api.path,
                        method: 'POST',
                        data,
                    });
                    result = response.data;
                    break;
                case 'updateItem':
                    if (api.filterData) {
                        data = api.filterData({ data, api });
                    }

                    response = await axiosFetch({
                        key,
                        path: `${api.path}/${rowId}`,
                        method: 'POST',
                        data,
                    });
                    result = response.data;
                    break;
                case 'deleteItem':
                    response = await axiosFetch({
                        key,
                        path: `${api.path}/${rowId}`,
                        method: 'DELETE',
                    });
                    result = response.data;
                    break;

                /* Settings */
                case 'getSettings': {
                    response = await axiosFetch({
                        key,
                        path: api.path,
                        method: 'GET',
                    });
                    if (api.optionName) {
                        if (response.data[api.optionName]) {
                            result.settings = response.data[api.optionName];
                        } else {
                            result.settings = null;
                        }
                    } else {
                        result.settings = response.data;
                    }
                    break;
                }

                case 'saveSettings': {
                    let newData;
                    if (api.optionName) {
                        newData = {};
                        newData[api.optionName] = data;
                    } else {
                        newData = data;
                    }

                    response = await axiosFetch({
                        key,
                        path: api.path,
                        method: 'POST',
                        data: newData,
                    });

                    if (api.optionName) {
                        if (response.data[api.optionName]) {
                            result.settings = response.data[api.optionName];
                        } else {
                            result.settings = null;
                        }
                    } else {
                        result.settings = response.data;
                    }
                    break;
                }

                case 'deleteSettings': {
                    response = await axiosFetch({
                        key,
                        path: api.path,
                        method: 'DELETE',
                        data: data,
                    });

                    if (api.optionName) {
                        if (response.data[api.optionName]) {
                            result.settings = response.data[api.optionName];
                        } else {
                            result.settings = null;
                        }
                    } else {
                        result.settings = response.data;
                    }
                    break;
                }

                default:
                    if (api.callbacks) {
                        result = api.callbacks(key, type, data, rowId);
                    } else {
                        console.error(`Invalid type ${api.type} provided.`);
                    }
                    break;
            }
            if (api.filterResult) {
                result = api.filterResult({ result, response });
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(
                `Error while performing AtrcApis call. API details :${api}  Error: ${error}`
            );
            result.error = error;
        }
        return result;
    }
}
const AtrcApis = new ClassAtrcApis();

export default AtrcApis;
