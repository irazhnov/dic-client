# dic-client

DicClient - JavaScript client for dic-client
Move your app forward with the diabetesincontrol API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build date: 2017-06-09T23:47:42.361+03:00
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install dic-client --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var DicClient = require('dic-client');

var api = new DicClient.DefaultApi()

var slug = "slug_example"; // {String} 

var page = 1.2; // {Number} what page number we ask.

var count = 1.2; // {Number} number per page

api.getCategoryPostsGet(slug, page, count).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://diabetesincontrol.com/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DicClient.DefaultApi* | [**getCategoryPostsGet**](docs/DefaultApi.md#getCategoryPostsGet) | **GET** /get_category_posts/ | Categories
*DicClient.DefaultApi* | [**getRecentPostsGet**](docs/DefaultApi.md#getRecentPostsGet) | **GET** /get_recent_posts/ | Pagination Categories
*DicClient.DefaultApi* | [**getSearchResultsGet**](docs/DefaultApi.md#getSearchResultsGet) | **GET** /get_search_results/ | Free search


## Documentation for Models

 - [DicClient.Category](docs/Category.md)
 - [DicClient.Error](docs/Error.md)
 - [DicClient.Feed](docs/Feed.md)
 - [DicClient.FeedCategory](docs/FeedCategory.md)
 - [DicClient.Post](docs/Post.md)
 - [DicClient.PostAuthor](docs/PostAuthor.md)
 - [DicClient.SearchFeed](docs/SearchFeed.md)


## Documentation for Authorization

 All endpoints do not require authorization.

