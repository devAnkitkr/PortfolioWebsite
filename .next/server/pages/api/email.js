"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/email";
exports.ids = ["pages/api/email"];
exports.modules = {

/***/ "emailjs":
/*!**************************!*\
  !*** external "emailjs" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("emailjs");;

/***/ }),

/***/ "(api)/./pages/api/email.js":
/*!****************************!*\
  !*** ./pages/api/email.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var emailjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs */ \"emailjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([emailjs__WEBPACK_IMPORTED_MODULE_0__]);\nemailjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    const { name , email , message  } = req.body;\n    const user = process.env.EMAIL;\n    const password = process.env.PASSWORD;\n    console.log(\"mesasge\", message);\n    const client = new emailjs__WEBPACK_IMPORTED_MODULE_0__.SMTPClient({\n        user,\n        password,\n        host: \"smtp.gmail.com\",\n        ssl: true\n    });\n    console.log(\"user email id\", email);\n    try {\n        const data = await client.sendAsync({\n            text: \"name: \" + name + \"\\n\" + \"email: \" + email + \"\\n\" + \"message: \" + message,\n            from: email,\n            to: user,\n            subject: \"www.devankitkr.com\"\n        });\n        console.log(data);\n        res.status(200).end(JSON.stringify({\n            msg: \"Message has been sent!\"\n        }));\n    } catch (error) {\n        console.log(error);\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1haWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0M7QUFFckIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxPQUFPLEVBQUMsQ0FBQyxHQUFHSixHQUFHLENBQUNLLElBQUk7SUFFekMsS0FBSyxDQUFDQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLO0lBQzlCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csUUFBUTtJQUVyQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUyxVQUFFVCxPQUFPO0lBRTlCLEtBQUssQ0FBQ1UsTUFBTSxHQUFHLEdBQUcsQ0FBQ2hCLCtDQUFVLENBQUMsQ0FBQztRQUM3QlEsSUFBSTtRQUNKSSxRQUFRO1FBQ1JLLElBQUksRUFBRSxDQUFnQjtRQUN0QkMsR0FBRyxFQUFFLElBQUk7SUFDWCxDQUFDO0lBQ0RKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWUsZ0JBQUVWLEtBQUs7SUFDbEMsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNjLElBQUksR0FBRyxLQUFLLENBQUNILE1BQU0sQ0FBQ0ksU0FBUyxDQUFDLENBQUM7WUFDbkNDLElBQUksRUFDRixDQUFRLFVBQ1JqQixJQUFJLEdBQ0osQ0FBSSxNQUNKLENBQVMsV0FDVEMsS0FBSyxHQUNMLENBQUksTUFDSixDQUFXLGFBQ1hDLE9BQU87WUFDVGdCLElBQUksRUFBRWpCLEtBQUs7WUFDWGtCLEVBQUUsRUFBRWYsSUFBSTtZQUNSZ0IsT0FBTyxFQUFFLENBQW9CO1FBQy9CLENBQUM7UUFDRFYsT0FBTyxDQUFDQyxHQUFHLENBQUNJLElBQUk7UUFDaEJoQixHQUFHLENBQUNzQixNQUFNLENBQUMsR0FBRyxFQUFFQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7WUFBQ0MsR0FBRyxFQUFFLENBQXdCO1FBQUMsQ0FBQztJQUN0RSxDQUFDLENBQUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUNmaEIsT0FBTyxDQUFDQyxHQUFHLENBQUNlLEtBQUs7SUFDbkIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZhbmtpdGtyLy4vcGFnZXMvYXBpL2VtYWlsLmpzPzg5MjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU01UUENsaWVudCB9IGZyb20gXCJlbWFpbGpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgbWVzc2FnZSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBwcm9jZXNzLmVudi5FTUFJTDtcclxuICBjb25zdCBwYXNzd29yZCA9IHByb2Nlc3MuZW52LlBBU1NXT1JEO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIm1lc2FzZ2VcIiwgbWVzc2FnZSk7XHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBTTVRQQ2xpZW50KHtcclxuICAgIHVzZXIsXHJcbiAgICBwYXNzd29yZCxcclxuICAgIGhvc3Q6IFwic210cC5nbWFpbC5jb21cIixcclxuICAgIHNzbDogdHJ1ZSxcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhcInVzZXIgZW1haWwgaWRcIiwgZW1haWwpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50LnNlbmRBc3luYyh7XHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgXCJuYW1lOiBcIiArXHJcbiAgICAgICAgbmFtZSArXHJcbiAgICAgICAgXCJcXG5cIiArXHJcbiAgICAgICAgXCJlbWFpbDogXCIgK1xyXG4gICAgICAgIGVtYWlsICtcclxuICAgICAgICBcIlxcblwiICtcclxuICAgICAgICBcIm1lc3NhZ2U6IFwiICtcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICBmcm9tOiBlbWFpbCxcclxuICAgICAgdG86IHVzZXIsXHJcbiAgICAgIHN1YmplY3Q6IFwid3d3LmRldmFua2l0a3IuY29tXCIsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmVuZChKU09OLnN0cmluZ2lmeSh7IG1zZzogXCJNZXNzYWdlIGhhcyBiZWVuIHNlbnQhXCIgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJTTVRQQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJib2R5IiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTCIsInBhc3N3b3JkIiwiUEFTU1dPUkQiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwiaG9zdCIsInNzbCIsImRhdGEiLCJzZW5kQXN5bmMiLCJ0ZXh0IiwiZnJvbSIsInRvIiwic3ViamVjdCIsInN0YXR1cyIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtc2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/email.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/email.js"));
module.exports = __webpack_exports__;

})();