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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Author', 'model/Category', 'model/Error', 'model/Feed', 'model/FeedCategory', 'model/Post', 'model/PostAuthor', 'api/PostsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Author'), require('./model/Category'), require('./model/Error'), require('./model/Feed'), require('./model/FeedCategory'), require('./model/Post'), require('./model/PostAuthor'), require('./api/PostsApi'));
  }
}(function(ApiClient, Author, Category, Error, Feed, FeedCategory, Post, PostAuthor, PostsApi) {
  'use strict';

  /**
   * Move_your_app_forward_with_the_diabetesincontrol_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SomeClient = require('index'); // See note below*.
   * var xxxSvc = new SomeClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SomeClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SomeClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SomeClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Author model constructor.
     * @property {module:model/Author}
     */
    Author: Author,
    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category: Category,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The Feed model constructor.
     * @property {module:model/Feed}
     */
    Feed: Feed,
    /**
     * The FeedCategory model constructor.
     * @property {module:model/FeedCategory}
     */
    FeedCategory: FeedCategory,
    /**
     * The Post model constructor.
     * @property {module:model/Post}
     */
    Post: Post,
    /**
     * The PostAuthor model constructor.
     * @property {module:model/PostAuthor}
     */
    PostAuthor: PostAuthor,
    /**
     * The PostsApi service constructor.
     * @property {module:api/PostsApi}
     */
    PostsApi: PostsApi
  };

  return exports;
}));
