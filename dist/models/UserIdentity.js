Object.defineProperty(exports,"__esModule",{value:true});exports.UserIdentityFromJSON=UserIdentityFromJSON;exports.UserIdentityFromJSONTyped=UserIdentityFromJSONTyped;exports.UserIdentityToJSON=UserIdentityToJSON;exports.instanceOfUserIdentity=instanceOfUserIdentity;var _ApiClient=require("../ApiClient");var _UserIdentityResult=require("./UserIdentityResult");function instanceOfUserIdentity(value){var isInstance=true;return isInstance;}function UserIdentityFromJSON(json){return UserIdentityFromJSONTyped(json,false);}function UserIdentityFromJSONTyped(json,ignoreDiscriminator){if(json===undefined||json===null){return json;}return{type:!(0,_ApiClient.exists)(json,'type')?undefined:json['type'],result:!(0,_ApiClient.exists)(json,'result')?undefined:(0,_UserIdentityResult.UserIdentityResultFromJSON)(json['result'])};}function UserIdentityToJSON(value){if(value===undefined){return undefined;}if(value===null){return null;}return{type:value.type,result:(0,_UserIdentityResult.UserIdentityResultToJSON)(value.result)};}