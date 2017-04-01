# dic-client

DicClient - JavaScript client for dic-client
Move your app forward with the diabetesincontrol API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build date: 2017-04-01T17:10:17.753+03:00
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

var api = new DicClient.CategoriesApi()

var category = "category_example"; // {String} 

var subcategories = "subcategories_example"; // {String} 

var json = 1.2; // {Number} 1 menu

api.categorySubcategoriesGet(category, subcategories, json).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *http://diabetesincontrol.com/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DicClient.CategoriesApi* | [**categorySubcategoriesGet**](docs/CategoriesApi.md#categorySubcategoriesGet) | **GET** /{category}/{subcategories}/ | Categories
*DicClient.TherapiesApi* | [**diabetesTherapiesBloodGlucoseControlGet**](docs/TherapiesApi.md#diabetesTherapiesBloodGlucoseControlGet) | **GET** /diabetes-therapies/blood-glucose-control/ | Blood Glucose Control
*DicClient.TherapiesApi* | [**diabetesTherapiesDietNutritionGet**](docs/TherapiesApi.md#diabetesTherapiesDietNutritionGet) | **GET** /diabetes-therapies/diet-nutrition/ | Diet &amp; Nutrition
*DicClient.TherapiesApi* | [**diabetesTherapiesGet**](docs/TherapiesApi.md#diabetesTherapiesGet) | **GET** /diabetes-therapies | List Posts
*DicClient.TherapiesApi* | [**diabetesTherapiesGlp1Get**](docs/TherapiesApi.md#diabetesTherapiesGlp1Get) | **GET** /diabetes-therapies/glp-1/ | GLP1 Agonist
*DicClient.TherapiesApi* | [**diabetesTherapiesInsulinGet**](docs/TherapiesApi.md#diabetesTherapiesInsulinGet) | **GET** /diabetes-therapies/insulin/ | Insulin
*DicClient.TherapiesApi* | [**diabetesTherapiesMetforminGet**](docs/TherapiesApi.md#diabetesTherapiesMetforminGet) | **GET** /diabetes-therapies/metformin/ | metformin
*DicClient.TherapiesApi* | [**diabetesTherapiesSglt2Get**](docs/TherapiesApi.md#diabetesTherapiesSglt2Get) | **GET** /diabetes-therapies/sglt-2/ | SGLT2
*DicClient.TherapiesApi* | [**diabetesTherapiesSulfonylureaGet**](docs/TherapiesApi.md#diabetesTherapiesSulfonylureaGet) | **GET** /diabetes-therapies/sulfonylurea/ | Sulfonylurea


## Documentation for Models

 - [DicClient.Category](docs/Category.md)
 - [DicClient.Error](docs/Error.md)
 - [DicClient.Feed](docs/Feed.md)
 - [DicClient.FeedCategory](docs/FeedCategory.md)
 - [DicClient.Post](docs/Post.md)
 - [DicClient.PostAuthor](docs/PostAuthor.md)


## Documentation for Authorization

 All endpoints do not require authorization.

