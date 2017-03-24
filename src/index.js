/**
 * DIC API
 * Move your app forward with the diabetesincontrol API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Activities', 'model/Activity', 'model/Author', 'model/Category', 'model/Error', 'model/Feed', 'model/FeedCategory', 'model/Post', 'model/PriceEstimate', 'model/Product', 'model/Profile', 'api/EstimatesApi', 'api/PostsApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Activities'), require('./model/Activity'), require('./model/Author'), require('./model/Category'), require('./model/Error'), require('./model/Feed'), require('./model/FeedCategory'), require('./model/Post'), require('./model/PriceEstimate'), require('./model/Product'), require('./model/Profile'), require('./api/EstimatesApi'), require('./api/PostsApi'), require('./api/UserApi'));
  }
}(function(ApiClient, Activities, Activity, Author, Category, Error, Feed, FeedCategory, Post, PriceEstimate, Product, Profile, EstimatesApi, PostsApi, UserApi) {
  'use strict';

  /**
   * Move_your_app_forward_with_the_diabetesincontrol_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var DicApi = require('index'); // See note below*.
   * var xxxSvc = new DicApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new DicApi.Yyy(); // Construct a model instance.
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
   * var xxxSvc = new DicApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new DicApi.Yyy(); // Construct a model instance.
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
     * The Activities model constructor.
     * @property {module:model/Activities}
     */
    Activities: Activities,
    /**
     * The Activity model constructor.
     * @property {module:model/Activity}
     */
    Activity: Activity,
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
     * The PriceEstimate model constructor.
     * @property {module:model/PriceEstimate}
     */
    PriceEstimate: PriceEstimate,
    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product: Product,
    /**
     * The Profile model constructor.
     * @property {module:model/Profile}
     */
    Profile: Profile,
    /**
     * The EstimatesApi service constructor.
     * @property {module:api/EstimatesApi}
     */
    EstimatesApi: EstimatesApi,
    /**
     * The PostsApi service constructor.
     * @property {module:api/PostsApi}
     */
    PostsApi: PostsApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));