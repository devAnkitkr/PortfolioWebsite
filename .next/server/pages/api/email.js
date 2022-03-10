"use strict";
(() => {
var exports = {};
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 8251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/email.js
// import emailjs from "@emailjs/browser";

// import { init } from "@emailjs/browser";
// init("user_Seh9J6JIf4oYoVkwaaUqk");
async function handler(req, res) {
    const { name , email , message  } = req.body;
    console.log("req. body", name, email, message);
    const template_params = {
        user_name: name,
        user_email: email,
        message: message
    };
    var formData = {
        service_id: "service_avb7shg",
        template_id: "template_syhwxtl",
        user_id: "user_Seh9J6JIf4oYoVkwaaUqk",
        template_params: {
            user_name: name,
            user_email: email,
            message
        }
    };
    try {
        const data = await external_axios_default().post("https://api.emailjs.com/api/v1.0/email/send", formData, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function(response) {
            console.log("SUCCESS!", response);
            res.status(200).end(JSON.stringify({
                msg: "Message has been sent!"
            }));
        }, function(error) {
            console.log("FAILED...", error);
            res.status(400).end(JSON.stringify({
                msg: "Message not sent!"
            }));
        });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8251));
module.exports = __webpack_exports__;

})();