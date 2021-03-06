/**
 * Role Based Access Control
 * The API for Role Based Access Control.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import Status from '../model/Status';

/**
* Status service.
* @module api/StatusApi
* @version 1.0.0
*/
export default class StatusApi {

    /**
    * Constructs a new StatusApi. 
    * @alias module:api/StatusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Obtain server status
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Status} and HTTP response
     */
    getStatusWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basic_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Status;

      return this.apiClient.callApi(
        '/status/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Obtain server status
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Status}
     */
    getStatus() {
      return this.getStatusWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
