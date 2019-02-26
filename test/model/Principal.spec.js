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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RoleBasedAccessControl);
  }
}(this, function(expect, RoleBasedAccessControl) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RoleBasedAccessControl.Principal();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Principal', function() {
    it('should create an instance of Principal', function() {
      // uncomment below and update the code to test Principal
      //var instane = new RoleBasedAccessControl.Principal();
      //expect(instance).to.be.a(RoleBasedAccessControl.Principal);
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new RoleBasedAccessControl.Principal();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new RoleBasedAccessControl.Principal();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new RoleBasedAccessControl.Principal();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new RoleBasedAccessControl.Principal();
      //expect(instance).to.be();
    });

    it('should have the property isOrgAdmin (base name: "is_org_admin")', function() {
      // uncomment below and update the code to test the property isOrgAdmin
      //var instane = new RoleBasedAccessControl.Principal();
      //expect(instance).to.be();
    });

  });

}));