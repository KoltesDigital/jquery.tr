/**
 * @file jquery.tr.min.js
 * @brief Support for internationalization.
 * @author Jonathan Giroux (Bloutiouf)
 * @site https://github.com/Bloutiouf/jquery.tr
 * @version 1.1
 * @license MIT license <http://www.opensource.org/licenses/MIT>
 */

(function(a){var b="en";var c="language";var d;var e=function(a,b){var c=typeof b==="object"&&b!=null?b:arguments;return a.replace(/&(\w+)/g,function(a,b){var d=c[b];if(d===undefined){return a}return d})};var f=function(a,b){var c=typeof b==="object"&&b!=null?b:arguments;return e(a,c)};if(a.cookie){b=a.cookie(c)||b}a.tr={dictionary:function(a){if(a!==undefined){d=a}return d},language:function(d,e){if(d!==undefined){if(e&&a.cookie){var f=a.cookie(c);if(f){return f}}b=d;if(a.cookie){a.cookie(c,b)}}return b},translator:function(c){var g=a.makeArray(arguments);var h=d;if(typeof c=="object"){g.shift();h=c}if(!h){return f}var i=h;for(var j in g){i=i[g[j]];if(!i){return f}}var k=i[b];if(typeof k=="function"){k=k()}if(!k){return f}return function(a,b){var c=k[a];var d=typeof b==="object"&&b!=null?b:arguments;if(typeof c==="string"){return e(c,d)}else if(typeof c==="function"){return c(d,e)}else if(typeof c==="number"){return c}else{return e(a,d)}}}}})(jQuery)