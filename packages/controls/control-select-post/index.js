import React from 'react';

/* WordPress*/
import { useMemo, useState } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { useSelect } from '@wordpress/data';

import { store as coreStore } from '@wordpress/core-data';

/*Library*/
import { clone, debounce, isArray, isNumber, isString } from 'lodash';

import classnames from 'classnames';

/*Controls */
import { AtrcDynamicSelect } from '../control-select';

/* Molecules */
import AtrcNotice from '../../molecules/notice';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/* API */
import AtrcGetPosts from '../../api/get-posts';

/* Local*/
const perPage = 100;

const getPostsOptions = async ({
    postType,
    restBase,
    restNamespace,
    queryArgs = null,
}) => {
    const getPostTypesPosts = await AtrcGetPosts({
        postType,
        restBase,
        restNamespace,
        queryArgs,
    });

    let options = [];
    if (getPostTypesPosts) {
        options = getPostTypesPosts.map((item) => ({
            value: item.id,
            label: item.title.rendered || __('Untitled', 'atrc-prefix-atrc'),
        }));
    }

    return options;
};

/*Select Post*/
function AtrcControlSelectPost(props) {
    const {
        label = __('Posts', 'atrc-prefix-atrc'),
        variant = '',
        value,
        onChange,
        showOptionNone = true,
        optionNoneValue = 0,
        postType = '',
        className = '',
        relation = '' /* postChild or  postParent*/,
        relationId = 0 /* It is post id */,
        tax = '',
        termId = '',
        userId = 0,
        ...defaultProps
    } = props;

    const [hasFixNotice, setHasFixNotice] = useState(true);

    const queryArgs = useSelect(
        (select) => {
            const newQueryArgs = {
                per_page: perPage,
                order: 'asc',
                _fields: 'id,title',
                context: 'view',
            };
            const { getEntityRecord, getTaxonomy } = select(coreStore);

            /* Post child and parent */
            if (relation) {
                if ('postChild' === relation && relationId) {
                    /*get children by relation id*/
                    newQueryArgs.parent = [relationId];
                } else if ('postParent' === relation) {
                    /*get parent by relation id*/
                    const gotItem = getEntityRecord('postType', postType, relationId);
                    if (gotItem && gotItem.parent) {
                        newQueryArgs.include = [gotItem.parent];
                    }
                }
            }

            /* Get posts types in taxonomy terms */
            if (tax && termId) {
                const taxonomy = getTaxonomy('category');
                if (taxonomy && taxonomy.rest_base) {
                    newQueryArgs[taxonomy.rest_base] = [termId];
                }
            }

            /* Post author */
            if (userId) {
                newQueryArgs.author = [userId];
            }
            return newQueryArgs;
        },
        [postType, relation, relationId, userId]
    );

    const { posts, totalItems } = useSelect(
        (select) => {
            const { getEntityRecords } = select(coreStore);

            const gotItems = getEntityRecords('postType', postType, queryArgs);

            return { posts: gotItems, totalItems: gotItems && gotItems.length };
        },
        [queryArgs, postType]
    );

    const options = useMemo(() => {
        return (posts ?? []).map((post) => {
            return {
                value: post.id,
                label:
                    post.title.rendered ||
                    post.title.raw ||
                    __('Untitled', 'atrc-prefix-atrc'),
            };
        });
    }, [posts]);

    const isAsync = useMemo(() => {
        return totalItems && totalItems >= perPage;
    }, [totalItems]);

    const defaultValue = useSelect(
        (select) => {
            const newQueryArgs = {
                _fields: 'id,title',
                context: 'view',
            };
            if (isAsync && value) {
                if (isArray(value)) {
                    newQueryArgs.include = value;
                } else if (isNumber(value)) {
                    newQueryArgs.include = [value];
                } else if (isString(value)) {
                    const valArray = value.split(',');
                    newQueryArgs.include = [valArray];
                }
                if (newQueryArgs.include) {
                    const { getEntityRecords } = select(coreStore);

                    const gotItems = getEntityRecords('postType', postType, newQueryArgs);

                    if (gotItems && isArray(gotItems) && gotItems.length) {
                        if (gotItems.length > 1) {
                            return gotItems.map((post) => {
                                return {
                                    value: post.id,
                                    label:
                                        post.title.rendered || __('Untitled', 'atrc-prefix-atrc'),
                                };
                            });
                        }
                        return {
                            value: gotItems[0].id,
                            label: gotItems[0].title.rendered,
                        };
                    }
                }
            }
            return null;
        },
        [isAsync, value]
    );

    if (isAsync) {
        if (hasFixNotice) {
            return (
                <AtrcNotice
                    autoDismiss={5000}
                    isDismissible={false}
                    onAutoRemove={() => {
                        setHasFixNotice(false);
                    }}>
                    {__('Loading…', 'atrc-prefix-atrc')}
                </AtrcNotice>
            );
        }
        const asyncOptions = async (inputValue) => {
            try {
                const query = {
                    postType,
                };
                const newQueryArgs = clone(queryArgs);
                query.queryArgs = newQueryArgs;

                if (inputValue) {
                    query.queryArgs.search = inputValue;
                }

                return await getPostsOptions(query);
            } catch (error) {
                console.error('Error fetching WordPress posts:', error);
                return [];
            }
        };
        // Debounce the loadOptions function with a 300ms delay
        const debouncedLoadOptions = debounce(asyncOptions, 300);
        return (
            <AtrcDynamicSelect
                label={label}
                className={classnames(
                    AtrcPrefix('ctrl-select-post'),
                    className,
                    variant ? AtrcPrefix('ctrl-select-post') + '-' + variant : ''
                )}
                defaultValue={defaultValue}
                onChange={onChange}
                showOptionNone={showOptionNone}
                optionNoneValue={optionNoneValue}
                options={options}
                loadOptions={debouncedLoadOptions}
                isAsync={isAsync}
                {...defaultProps}
            />
        );
    }

    return (
        <AtrcDynamicSelect
            label={label}
            className={classnames(
                AtrcPrefix('ctrl-select-post'),
                className,
                variant ? AtrcPrefix('ctrl-select-post') + '-' + variant : ''
            )}
            value={value}
            onChange={onChange}
            showOptionNone={showOptionNone}
            optionNoneValue={optionNoneValue}
            options={options}
            {...defaultProps}
        />
    );
}

export default AtrcControlSelectPost;
