Object.defineProperty(exports,"__esModule",{value:true});exports.CreateUserRequestProfileFromJSON=CreateUserRequestProfileFromJSON;exports.CreateUserRequestProfileFromJSONTyped=CreateUserRequestProfileFromJSONTyped;exports.CreateUserRequestProfileToJSON=CreateUserRequestProfileToJSON;exports.instanceOfCreateUserRequestProfile=instanceOfCreateUserRequestProfile;var _ApiClient=require("../ApiClient");function instanceOfCreateUserRequestProfile(value){var isInstance=true;return isInstance;}function CreateUserRequestProfileFromJSON(json){return CreateUserRequestProfileFromJSONTyped(json,false);}function CreateUserRequestProfileFromJSONTyped(json,ignoreDiscriminator){if(json===undefined||json===null){return json;}return{givenName:!(0,_ApiClient.exists)(json,'given_name')?undefined:json['given_name'],familyName:!(0,_ApiClient.exists)(json,'family_name')?undefined:json['family_name']};}function CreateUserRequestProfileToJSON(value){if(value===undefined){return undefined;}if(value===null){return null;}return{given_name:value.givenName,family_name:value.familyName};}