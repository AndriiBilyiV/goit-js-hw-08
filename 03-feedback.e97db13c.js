function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("8zd4h");const n=document.querySelector(".feedback-form"),s=n.querySelector('input[name="email"]'),d=n.querySelector('textarea[name="message"]');try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));s.value=e.email,d.value=e.message}catch(e){console.log(e)}n.addEventListener("input",e(l)((()=>{const e={email:s.value,message:d.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),n.addEventListener("submit",(e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),s.value="",d.value=""}));
//# sourceMappingURL=03-feedback.e97db13c.js.map
