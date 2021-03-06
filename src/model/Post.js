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
    define(['ApiClient', 'model/Category', 'model/PostAuthor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Category'), require('./PostAuthor'));
  } else {
    // Browser globals (root is window)
    if (!root.DicClient) {
      root.DicClient = {};
    }
    root.DicClient.Post = factory(root.DicClient.ApiClient, root.DicClient.Category, root.DicClient.PostAuthor);
  }
}(this, function(ApiClient, Category, PostAuthor) {
  'use strict';




  /**
   * The Post model module.
   * @module model/Post
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Post</code>.
   * @alias module:model/Post
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>Post</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Post} obj Optional instance to populate.
   * @return {module:model/Post} The populated <code>Post</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('title_plain')) {
        obj['title_plain'] = ApiClient.convertToType(data['title_plain'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('thumbnail')) {
        obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], 'String');
      }
      if (data.hasOwnProperty('excerpt')) {
        obj['excerpt'] = ApiClient.convertToType(data['excerpt'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('categories')) {
        obj['categories'] = ApiClient.convertToType(data['categories'], [Category]);
      }
      if (data.hasOwnProperty('author')) {
        obj['author'] = PostAuthor.constructFromObject(data['author']);
      }
    }
    return obj;
  }

  /**
   * id.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * slug.
   * @member {String} slug
   */
  exports.prototype['slug'] = undefined;
  /**
   * title.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * title_plain.
   * @member {String} title_plain
   */
  exports.prototype['title_plain'] = undefined;
  /**
   * content.
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {String} thumbnail
   */
  exports.prototype['thumbnail'] = undefined;
  /**
   * @member {String} excerpt
   */
  exports.prototype['excerpt'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {String} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Array.<module:model/Category>} categories
   */
  exports.prototype['categories'] = undefined;
  /**
   * @member {module:model/PostAuthor} author
   */
  exports.prototype['author'] = undefined;



  return exports;
}));


