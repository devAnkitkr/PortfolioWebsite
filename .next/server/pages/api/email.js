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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var emailjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs */ \"emailjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([emailjs__WEBPACK_IMPORTED_MODULE_0__]);\nemailjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    const { name , email , message  } = req.body;\n    const user = process.env.EMAIL;\n    const password = process.env.PASSWORD;\n    console.log(\"request data\", name, email, message);\n    console.log(\"env user and pass\", user, password);\n    const client = new emailjs__WEBPACK_IMPORTED_MODULE_0__.SMTPClient({\n        user,\n        password,\n        host: \"smtp.gmail.com\",\n        ssl: true\n    });\n    try {\n        const data = await client.sendAsync({\n            text: \"name: \" + name + \"\\n\" + \"email: \" + email + \"\\n\" + \"message: \" + message,\n            from: email,\n            to: user,\n            subject: \"www.devankitkr.com\"\n        });\n        console.log(data);\n        res.status(200).end(JSON.stringify({\n            msg: \"Message has been sent!\"\n        }));\n    } catch (error) {\n        console.log(error);\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1haWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0M7QUFFckIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksR0FBRUMsS0FBSyxHQUFFQyxPQUFPLEVBQUMsQ0FBQyxHQUFHSixHQUFHLENBQUNLLElBQUk7SUFFekMsS0FBSyxDQUFDQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLO0lBQzlCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csUUFBUTtJQUVyQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBYyxlQUFFWCxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTztJQUNoRFEsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBbUIsb0JBQUVQLElBQUksRUFBRUksUUFBUTtJQUUvQyxLQUFLLENBQUNJLE1BQU0sR0FBRyxHQUFHLENBQUNoQiwrQ0FBVSxDQUFDLENBQUM7UUFDN0JRLElBQUk7UUFDSkksUUFBUTtRQUNSSyxJQUFJLEVBQUUsQ0FBZ0I7UUFDdEJDLEdBQUcsRUFBRSxJQUFJO0lBQ1gsQ0FBQztJQUVELEdBQUcsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDSCxNQUFNLENBQUNJLFNBQVMsQ0FBQyxDQUFDO1lBQ25DQyxJQUFJLEVBQ0YsQ0FBUSxVQUNSakIsSUFBSSxHQUNKLENBQUksTUFDSixDQUFTLFdBQ1RDLEtBQUssR0FDTCxDQUFJLE1BQ0osQ0FBVyxhQUNYQyxPQUFPO1lBQ1RnQixJQUFJLEVBQUVqQixLQUFLO1lBQ1hrQixFQUFFLEVBQUVmLElBQUk7WUFDUmdCLE9BQU8sRUFBRSxDQUFvQjtRQUMvQixDQUFDO1FBQ0RWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxJQUFJO1FBQ2hCaEIsR0FBRyxDQUFDc0IsTUFBTSxDQUFDLEdBQUcsRUFBRUMsR0FBRyxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1lBQUNDLEdBQUcsRUFBRSxDQUF3QjtRQUFDLENBQUM7SUFDdEUsQ0FBQyxDQUFDLEtBQUssRUFBRUMsS0FBSyxFQUFFLENBQUM7UUFDZmhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZSxLQUFLO0lBQ25CLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2YW5raXRrci8uL3BhZ2VzL2FwaS9lbWFpbC5qcz84OTIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNNVFBDbGllbnQgfSBmcm9tIFwiZW1haWxqc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5O1xyXG5cclxuICBjb25zdCB1c2VyID0gcHJvY2Vzcy5lbnYuRU1BSUw7XHJcbiAgY29uc3QgcGFzc3dvcmQgPSBwcm9jZXNzLmVudi5QQVNTV09SRDtcclxuXHJcbiAgY29uc29sZS5sb2coXCJyZXF1ZXN0IGRhdGFcIiwgbmFtZSwgZW1haWwsIG1lc3NhZ2UpO1xyXG4gIGNvbnNvbGUubG9nKFwiZW52IHVzZXIgYW5kIHBhc3NcIiwgdXNlciwgcGFzc3dvcmQpO1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBuZXcgU01UUENsaWVudCh7XHJcbiAgICB1c2VyLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgICBob3N0OiBcInNtdHAuZ21haWwuY29tXCIsXHJcbiAgICBzc2w6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50LnNlbmRBc3luYyh7XHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgXCJuYW1lOiBcIiArXHJcbiAgICAgICAgbmFtZSArXHJcbiAgICAgICAgXCJcXG5cIiArXHJcbiAgICAgICAgXCJlbWFpbDogXCIgK1xyXG4gICAgICAgIGVtYWlsICtcclxuICAgICAgICBcIlxcblwiICtcclxuICAgICAgICBcIm1lc3NhZ2U6IFwiICtcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICBmcm9tOiBlbWFpbCxcclxuICAgICAgdG86IHVzZXIsXHJcbiAgICAgIHN1YmplY3Q6IFwid3d3LmRldmFua2l0a3IuY29tXCIsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmVuZChKU09OLnN0cmluZ2lmeSh7IG1zZzogXCJNZXNzYWdlIGhhcyBiZWVuIHNlbnQhXCIgfSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJTTVRQQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJib2R5IiwidXNlciIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTCIsInBhc3N3b3JkIiwiUEFTU1dPUkQiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwiaG9zdCIsInNzbCIsImRhdGEiLCJzZW5kQXN5bmMiLCJ0ZXh0IiwiZnJvbSIsInRvIiwic3ViamVjdCIsInN0YXR1cyIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtc2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/email.js\n");

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