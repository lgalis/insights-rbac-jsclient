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

import ApiClient from '../ApiClient';
import GroupOut from './GroupOut';
import PrincipalOut from './PrincipalOut';
import UUID from './UUID';

/**
 * The GroupWithPrincipals model module.
 * @module model/GroupWithPrincipals
 * @version 1.0.0
 */
class GroupWithPrincipals {
    /**
     * Constructs a new <code>GroupWithPrincipals</code>.
     * @alias module:model/GroupWithPrincipals
     * @extends module:model/GroupOut
     * @implements module:model/GroupOut
     * @implements module:model/UUID
     * @param name {} 
     * @param uuid {} 
     * @param principals {} 
     */
    constructor(name, uuid, principals) { 
        GroupOut.initialize(this, name, uuid);UUID.initialize(this, uuid);
        GroupWithPrincipals.initialize(this, name, uuid, principals);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, uuid, principals) { 
        obj['principals'] = principals;
    }

    /**
     * Constructs a <code>GroupWithPrincipals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupWithPrincipals} obj Optional instance to populate.
     * @return {module:model/GroupWithPrincipals} The populated <code>GroupWithPrincipals</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupWithPrincipals();
            GroupOut.constructFromObject(data, obj);
            GroupOut.constructFromObject(data, obj);
            UUID.constructFromObject(data, obj);

            if (data.hasOwnProperty('principals')) {
                obj['principals'] = ApiClient.convertToType(data['principals'], [PrincipalOut]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/PrincipalOut>} principals
 */
GroupWithPrincipals.prototype['principals'] = undefined;


// Implement GroupOut interface:
/**
 * @member {} name
 */
GroupOut.prototype['name'] = undefined;
/**
 * @member {} description
 */
GroupOut.prototype['description'] = undefined;
/**
 * @member {} uuid
 */
GroupOut.prototype['uuid'] = undefined;
// Implement UUID interface:
/**
 * @member {String} uuid
 */
UUID.prototype['uuid'] = undefined;




export default GroupWithPrincipals;

