/**
 * dic-client
 * Move your app forward with the diabetesincontrol API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/Feed', 'model/SearchFeed'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Feed'), require('../model/SearchFeed'));
  } else {
    // Browser globals (root is window)
    if (!root.DicClient) {
      root.DicClient = {};
    }
    root.DicClient.DefaultApi = factory(root.DicClient.ApiClient, root.DicClient.Error, root.DicClient.Feed, root.DicClient.SearchFeed);
  }
}(this, function(ApiClient, Error, Feed, SearchFeed) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Categories
     * Categories
     * @param {String} slug 
     * @param {Number} page what page number we ask.
     * @param {Number} count number per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Feed}
     */
    this.getCategoryPostsGet = function(slug, page, count) {
      var postBody = null;

      // verify the required parameter 'slug' is set
      if (slug == undefined || slug == null) {
        throw "Missing the required parameter 'slug' when calling getCategoryPostsGet";
      }

      // verify the required parameter 'page' is set
      if (page == undefined || page == null) {
        throw "Missing the required parameter 'page' when calling getCategoryPostsGet";
      }

      // verify the required parameter 'count' is set
      if (count == undefined || count == null) {
        throw "Missing the required parameter 'count' when calling getCategoryPostsGet";
      }


      var pathParams = {
      };
      var queryParams = {
        'slug': slug,
        'page': page,
        'count': count
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Feed;

      return this.apiClient.callApi(
        '/get_category_posts/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Pagination Categories
     * Pagination Categories
     * @param {Number} page what page number we ask.
     * @param {Number} count number per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Feed}
     */
    this.getRecentPostsGet = function(page, count) {
      var postBody = null;

      // verify the required parameter 'page' is set
      if (page == undefined || page == null) {
        throw "Missing the required parameter 'page' when calling getRecentPostsGet";
      }

      // verify the required parameter 'count' is set
      if (count == undefined || count == null) {
        throw "Missing the required parameter 'count' when calling getRecentPostsGet";
      }


      var pathParams = {
      };
      var queryParams = {
        'page': page,
        'count': count
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Feed;

      return this.apiClient.callApi(
        '/get_recent_posts/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Free search
     * free search posts list
     * @param {String} search Free search query.
     * @param {Number} page what page number we ask.
     * @param {Number} count number per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchFeed}
     */
    this.getSearchResultsGet = function(search, page, count) {
      var postBody = null;

      // verify the required parameter 'search' is set
      if (search == undefined || search == null) {
        throw "Missing the required parameter 'search' when calling getSearchResultsGet";
      }

      // verify the required parameter 'page' is set
      if (page == undefined || page == null) {
        throw "Missing the required parameter 'page' when calling getSearchResultsGet";
      }

      // verify the required parameter 'count' is set
      if (count == undefined || count == null) {
        throw "Missing the required parameter 'count' when calling getSearchResultsGet";
      }


      var pathParams = {
      };
      var queryParams = {
        'search': search,
        'page': page,
        'count': count
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SearchFeed;

      return this.apiClient.callApi(
        '/get_search_results/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
