"use strict";function lodash(a,b){var c;switch(a){case"arc4":c=require(min+"arc4.js");break;case"rc4a":c=require(min+"rc4a.js");break;case"vmpc":c=require(min+"vmpc.js");break;case"rc4+":c=require(min+"rc4+.js");break;default:throw new TypeError("algorithm required")}if(!b)throw new TypeError("password required");return new c(b)}var min=__dirname+"/";module.exports=lodash;
