The AtrcApis class is a utility class that can be used to register different types of APIs and perform CRUD operations on them. It utilizes the @wordpress/api-fetch and @wordpress/url libraries to handle the API calls and add query arguments to the URLs. Additionally, the class uses a local AtrcStore class to add default values to a store using the @wordpress/data library. The class has the following methods:

constructor() : Initializes an empty array "types" that will be used to store the registered APIs.

register(key, path, callbacks = {}, filterResult = () => {}, addStore = true) : This method is used to register different types of APIs for a particular data type (e.g. posts, pages, custom types). The method takes the following arguments:

"key" : a string that represents the data type of the API (e.g. post, page, custom type, custom table, etc)
"path" : a string that represents the REST API endpoint or the full path of the API (e.g. '/wp/v2/posts/' or 'http://example.com/wp-json/wp/v2/posts/')
"callbacks" : (optional) an object that can contain functions for different types of CRUD operations, such as getData, getItem, insertItem, updateItem, and deleteItem. These functions can be used to perform additional actions before or after the actual API call is made.
"filterResult" : (optional) a function that can be used to perform additional actions on the result before it is returned.
"addStore" : (optional) a boolean value, which if set to true, will add store using @wordpress/data
registerType({key, path, type, callback}) : This method is used to register a custom type of API for a particular data type (e.g. posts, pages, custom types). The method takes the following arguments:

"key" : a string that represents the data type of the API (e.g. post, page, custom type, custom table, etc)
"path" : a string that represents the REST API endpoint or the full path of the API (e.g. '/wp/v2/posts/' or 'http://example.com/wp-json/wp/v2/posts/')
"type" : a string that represents the custom type of the API.
"callback" : a function that will be called when the custom type API is invoked.
async doApi({key, type, data, rowId = 0}) : This method is used to perform the actual API call based on the key and type provided. The method takes the following arguments:

"key" : a string that represents the data type of the API (e.g. post, page, custom type, custom table, etc)
"type" : a string that represents the type of API call to be made (e.g. getData, getItem, insertItem, updateItem, deleteItem, customType)
"data" : (optional) an object that can contain either query arguments or data to be inserted/updated
"rowId" : (optional) the id of the item that is being operated on.
The AtrcApis class allows you to register multiple types of APIs and perform CRUD operations on them.
========================================================
To use the AtrcApis class, you will first need to import it in your code. You can do this by adding the following line at the top of your file:

import AtrcApis from './path/to/atrc-apis';

Once you have imported the class, you can create a new instance of it and start registering different types of APIs. Here is an example of how to register an API for the "post" data type:

const atrcApis = new AtrcApis();

atrcApis.register('post', '/wp/v2/posts/', {
getData: (items) => {
// Perform some action on the items before returning them
items.forEach((item) => {
item.customField = 'Custom Value';
});
return items;
},
getItem: (item) => {
// Perform some action on the item before returning it
item.customField = 'Custom Value';
return item;
},
insertItem: (item) => {
// Perform some action on the item before inserting it
item.customField = 'Custom Value';
return item;
},
updateItem: (item) => {
// Perform some action on the item before updating it
item.customField = 'Custom Value';
return item;
},
deleteItem: (item) => {
// Perform some action on the item before deleting it
item.customField = 'Custom Value';
return item;
},
},
(result) => {
// Perform some action on the result before returning it
result.customField = 'Custom Value';
return result;
},
true);

ou can also register custom types of APIs using the registerType method. Here is an example of how to register a custom type "doSomething" for the "post" data type:

atrcApis.registerType({
key: 'post',
path: '/wp/v2/posts/',
type: 'doSomething',
callback :(data) => {
// Perform some action with the data
console.log(data);
}
});

Once you have registered the APIs, you can use the doApi method to perform the actual API call. Here is an example of how to get all the items for the "post" data type:

const items = await atrcApis.doApi({key:'post', type:'getData'});
console.log(items);

And here is an example of how to insert a new item for the "post" data type:

const item = {
title: 'My new post',
content: 'This is the content of my new post',
};
const newItem = await atrcApis.doApi({key: 'post', type:'insertItem', data: item});
console.log(newItem);

You can also use the doApi method to perform custom types of APIs that you have registered using the registerType method. Here is an example of how to perform the "doSomething" custom type for the "post" data type:

const data = {
someData: 'Data for the custom type',
};
await atrcApis.doApi({key:'post', type:'doSomething', data:data});
