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


import ApiClient from './ApiClient';
import Access from './model/Access';
import AccessPagination from './model/AccessPagination';
import Error from './model/Error';
import Group from './model/Group';
import GroupOut from './model/GroupOut';
import GroupPagination from './model/GroupPagination';
import GroupPrincipalIn from './model/GroupPrincipalIn';
import GroupWithPrincipals from './model/GroupWithPrincipals';
import ListPagination from './model/ListPagination';
import PaginationLinks from './model/PaginationLinks';
import PaginationMeta from './model/PaginationMeta';
import Policy from './model/Policy';
import PolicyExtended from './model/PolicyExtended';
import PolicyIn from './model/PolicyIn';
import PolicyOut from './model/PolicyOut';
import PolicyPagination from './model/PolicyPagination';
import Principal from './model/Principal';
import PrincipalIn from './model/PrincipalIn';
import PrincipalOut from './model/PrincipalOut';
import PrincipalPagination from './model/PrincipalPagination';
import ResourceDefinition from './model/ResourceDefinition';
import ResourceDefinitionFilter from './model/ResourceDefinitionFilter';
import Role from './model/Role';
import RoleIn from './model/RoleIn';
import RoleOut from './model/RoleOut';
import RolePagination from './model/RolePagination';
import RoleWithAccess from './model/RoleWithAccess';
import Status from './model/Status';
import UUID from './model/UUID';
import AccessApi from './api/AccessApi';
import GroupApi from './api/GroupApi';
import PolicyApi from './api/PolicyApi';
import PrincipalApi from './api/PrincipalApi';
import RoleApi from './api/RoleApi';
import StatusApi from './api/StatusApi';


/**
* The_API_for_Role_Based_Access_Control_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var RoleBasedAccessControl = require('index'); // See note below*.
* var xxxSvc = new RoleBasedAccessControl.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new RoleBasedAccessControl.Yyy(); // Construct a model instance.
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
* var xxxSvc = new RoleBasedAccessControl.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new RoleBasedAccessControl.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Access model constructor.
     * @property {module:model/Access}
     */
    Access,

    /**
     * The AccessPagination model constructor.
     * @property {module:model/AccessPagination}
     */
    AccessPagination,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group,

    /**
     * The GroupOut model constructor.
     * @property {module:model/GroupOut}
     */
    GroupOut,

    /**
     * The GroupPagination model constructor.
     * @property {module:model/GroupPagination}
     */
    GroupPagination,

    /**
     * The GroupPrincipalIn model constructor.
     * @property {module:model/GroupPrincipalIn}
     */
    GroupPrincipalIn,

    /**
     * The GroupWithPrincipals model constructor.
     * @property {module:model/GroupWithPrincipals}
     */
    GroupWithPrincipals,

    /**
     * The ListPagination model constructor.
     * @property {module:model/ListPagination}
     */
    ListPagination,

    /**
     * The PaginationLinks model constructor.
     * @property {module:model/PaginationLinks}
     */
    PaginationLinks,

    /**
     * The PaginationMeta model constructor.
     * @property {module:model/PaginationMeta}
     */
    PaginationMeta,

    /**
     * The Policy model constructor.
     * @property {module:model/Policy}
     */
    Policy,

    /**
     * The PolicyExtended model constructor.
     * @property {module:model/PolicyExtended}
     */
    PolicyExtended,

    /**
     * The PolicyIn model constructor.
     * @property {module:model/PolicyIn}
     */
    PolicyIn,

    /**
     * The PolicyOut model constructor.
     * @property {module:model/PolicyOut}
     */
    PolicyOut,

    /**
     * The PolicyPagination model constructor.
     * @property {module:model/PolicyPagination}
     */
    PolicyPagination,

    /**
     * The Principal model constructor.
     * @property {module:model/Principal}
     */
    Principal,

    /**
     * The PrincipalIn model constructor.
     * @property {module:model/PrincipalIn}
     */
    PrincipalIn,

    /**
     * The PrincipalOut model constructor.
     * @property {module:model/PrincipalOut}
     */
    PrincipalOut,

    /**
     * The PrincipalPagination model constructor.
     * @property {module:model/PrincipalPagination}
     */
    PrincipalPagination,

    /**
     * The ResourceDefinition model constructor.
     * @property {module:model/ResourceDefinition}
     */
    ResourceDefinition,

    /**
     * The ResourceDefinitionFilter model constructor.
     * @property {module:model/ResourceDefinitionFilter}
     */
    ResourceDefinitionFilter,

    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role,

    /**
     * The RoleIn model constructor.
     * @property {module:model/RoleIn}
     */
    RoleIn,

    /**
     * The RoleOut model constructor.
     * @property {module:model/RoleOut}
     */
    RoleOut,

    /**
     * The RolePagination model constructor.
     * @property {module:model/RolePagination}
     */
    RolePagination,

    /**
     * The RoleWithAccess model constructor.
     * @property {module:model/RoleWithAccess}
     */
    RoleWithAccess,

    /**
     * The Status model constructor.
     * @property {module:model/Status}
     */
    Status,

    /**
     * The UUID model constructor.
     * @property {module:model/UUID}
     */
    UUID,

    /**
    * The AccessApi service constructor.
    * @property {module:api/AccessApi}
    */
    AccessApi,

    /**
    * The GroupApi service constructor.
    * @property {module:api/GroupApi}
    */
    GroupApi,

    /**
    * The PolicyApi service constructor.
    * @property {module:api/PolicyApi}
    */
    PolicyApi,

    /**
    * The PrincipalApi service constructor.
    * @property {module:api/PrincipalApi}
    */
    PrincipalApi,

    /**
    * The RoleApi service constructor.
    * @property {module:api/RoleApi}
    */
    RoleApi,

    /**
    * The StatusApi service constructor.
    * @property {module:api/StatusApi}
    */
    StatusApi
};