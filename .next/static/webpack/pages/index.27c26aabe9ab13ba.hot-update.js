"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context_CrowdFunding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/CrowdFunding */ \"./Context/CrowdFunding.js\");\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n\nvar _s = $RefreshSig$();\n\n// INTERNAL import\n\n\nconst index = ()=>{\n    _s();\n    const { titleData , getCampaigns , createCampaign , donate , getUserCampaigns , getDonations  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_CrowdFunding__WEBPACK_IMPORTED_MODULE_2__.CrowdFundingContext);\n    const [allcampaign, setAllcampaign] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [usercampaign, setUsercampaign] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getCampaignsData = getCampaigns();\n        const userCampaignsData = getUserCampaigns();\n        return async ()=>{\n            const allData = await getCampaignsData;\n            const userData = await userCampaignsData;\n            setAllcampaign(allData);\n            setUsercampaign(userData);\n        };\n    }, []);\n    // Donate PupUp Model\n    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [donateCampaign, setDonateCampaign] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    console.log(donateCampaign);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Hero, {\n                titleData: titleData,\n                createCampaign: createCampaign\n            }, void 0, false, {\n                fileName: \"G:\\\\Croud-funding-starter-file-main\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                title: \"All Listed Campaign\",\n                allcampaign: allcampaign,\n                setOpenModel: setOpenModal,\n                setDonate: setDonateCampaign\n            }, void 0, false, {\n                fileName: \"G:\\\\Croud-funding-starter-file-main\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                title: \"Your Created Campaign\",\n                allcampaign: usercampaign,\n                setOpenModel: setOpenModal,\n                setDonate: setDonateCampaign\n            }, void 0, false, {\n                fileName: \"G:\\\\Croud-funding-starter-file-main\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            openModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.PupUp, {\n                setOpenModal: setOpenModal,\n                getDonations: getDonations,\n                donate: donateCampaign,\n                donateFunction: donate\n            }, void 0, false, {\n                fileName: \"G:\\\\Croud-funding-starter-file-main\\\\pages\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(index, \"+B5mOs9usE2db3aYo/JaozS5SPM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkQ7QUFFM0Qsa0JBQWtCO0FBRTRDO0FBQ2hCO0FBRTlDLE1BQU1RLFFBQVEsSUFBSTs7SUFDaEIsTUFBTSxFQUNKQyxVQUFTLEVBQ1RDLGFBQVksRUFDWkMsZUFBYyxFQUNkQyxPQUFNLEVBQ05DLGlCQUFnQixFQUNoQkMsYUFBWSxFQUNiLEdBQUdaLGlEQUFVQSxDQUFDRSxzRUFBbUJBO0lBQ2xDLE1BQU0sQ0FBQ1csYUFBWUMsZUFBZSxHQUFHYiwrQ0FBUUE7SUFDN0MsTUFBTSxDQUFDYyxjQUFhQyxnQkFBZ0IsR0FBR2YsK0NBQVFBO0lBRS9DRixnREFBU0EsQ0FBQyxJQUFJO1FBQ1osTUFBTWtCLG1CQUFtQlQ7UUFDekIsTUFBTVUsb0JBQW9CUDtRQUMxQixPQUFPLFVBQVU7WUFDZixNQUFNUSxVQUFVLE1BQU1GO1lBQ3RCLE1BQU1HLFdBQVcsTUFBTUY7WUFDdkJKLGVBQWVLO1lBQ2ZILGdCQUFnQkk7UUFDbEI7SUFDRixHQUFFLEVBQUU7SUFFSixxQkFBcUI7SUFDckIsTUFBTSxDQUFDQyxXQUFVQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQy9DLE1BQU0sQ0FBQ3NCLGdCQUFlQyxrQkFBa0IsR0FBR3ZCLCtDQUFRQTtJQUVuRHdCLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWixxQkFDRTs7MEJBQ0UsOERBQUNwQiw2Q0FBSUE7Z0JBQUNJLFdBQWFBO2dCQUFXRSxnQkFBa0JBOzs7Ozs7MEJBQ2hELDhEQUFDTCw2Q0FBSUE7Z0JBQ0h1QixPQUFRO2dCQUNSZCxhQUFlQTtnQkFDZmUsY0FBZ0JOO2dCQUNoQk8sV0FBYUw7Ozs7OzswQkFFZiw4REFBQ3BCLDZDQUFJQTtnQkFDSHVCLE9BQVE7Z0JBQ1JkLGFBQWVFO2dCQUNmYSxjQUFnQk47Z0JBQ2hCTyxXQUFhTDs7Ozs7O1lBRWRILDJCQUNDLDhEQUFDaEIsOENBQUtBO2dCQUNMaUIsY0FBZ0JBO2dCQUNoQlYsY0FBZ0JBO2dCQUNoQkYsUUFBVWE7Z0JBQ1ZPLGdCQUFrQnBCOzs7Ozs7OztBQUszQjtHQXRETUo7QUF1RE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlQ29udGV4dCx1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIElOVEVSTkFMIGltcG9ydFxuXG5pbXBvcnQgeyBDcm93ZEZ1bmRpbmdDb250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHQvQ3Jvd2RGdW5kaW5nXCI7XG5pbXBvcnQge0hlcm8sQ2FyZCxQdXBVcH0gZnJvbSBcIi4uL0NvbXBvbmVudHNcIjtcblxuY29uc3QgaW5kZXggPSAoKT0+e1xuICBjb25zdCB7XG4gICAgdGl0bGVEYXRhLFxuICAgIGdldENhbXBhaWducyxcbiAgICBjcmVhdGVDYW1wYWlnbixcbiAgICBkb25hdGUsXG4gICAgZ2V0VXNlckNhbXBhaWducyxcbiAgICBnZXREb25hdGlvbnNcbiAgfSA9IHVzZUNvbnRleHQoQ3Jvd2RGdW5kaW5nQ29udGV4dClcbiAgY29uc3QgW2FsbGNhbXBhaWduLHNldEFsbGNhbXBhaWduXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW3VzZXJjYW1wYWlnbixzZXRVc2VyY2FtcGFpZ25dID0gdXNlU3RhdGUoKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IGdldENhbXBhaWduc0RhdGEgPSBnZXRDYW1wYWlnbnMoKTtcbiAgICBjb25zdCB1c2VyQ2FtcGFpZ25zRGF0YSA9IGdldFVzZXJDYW1wYWlnbnMoKTtcbiAgICByZXR1cm4gYXN5bmMoKSA9PntcbiAgICAgIGNvbnN0IGFsbERhdGEgPSBhd2FpdCBnZXRDYW1wYWlnbnNEYXRhO1xuICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCB1c2VyQ2FtcGFpZ25zRGF0YTtcbiAgICAgIHNldEFsbGNhbXBhaWduKGFsbERhdGEpO1xuICAgICAgc2V0VXNlcmNhbXBhaWduKHVzZXJEYXRhKVxuICAgIH1cbiAgfSxbXSk7XG5cbiAgLy8gRG9uYXRlIFB1cFVwIE1vZGVsXG4gIGNvbnN0IFtvcGVuTW9kYWwsc2V0T3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZG9uYXRlQ2FtcGFpZ24sc2V0RG9uYXRlQ2FtcGFpZ25dID0gdXNlU3RhdGUoKVxuXG4gIGNvbnNvbGUubG9nKGRvbmF0ZUNhbXBhaWduKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVybyB0aXRsZURhdGEgPSB7dGl0bGVEYXRhfSBjcmVhdGVDYW1wYWlnbiA9IHtjcmVhdGVDYW1wYWlnbn0vPlxuICAgICAgPENhcmQgXG4gICAgICAgIHRpdGxlID0gXCJBbGwgTGlzdGVkIENhbXBhaWduXCJcbiAgICAgICAgYWxsY2FtcGFpZ24gPSB7YWxsY2FtcGFpZ259XG4gICAgICAgIHNldE9wZW5Nb2RlbCA9IHtzZXRPcGVuTW9kYWx9XG4gICAgICAgIHNldERvbmF0ZSA9IHtzZXREb25hdGVDYW1wYWlnbn1cbiAgICAgIC8+XG4gICAgICA8Q2FyZCBcbiAgICAgICAgdGl0bGUgPSBcIllvdXIgQ3JlYXRlZCBDYW1wYWlnblwiXG4gICAgICAgIGFsbGNhbXBhaWduID0ge3VzZXJjYW1wYWlnbn1cbiAgICAgICAgc2V0T3Blbk1vZGVsID0ge3NldE9wZW5Nb2RhbH1cbiAgICAgICAgc2V0RG9uYXRlID0ge3NldERvbmF0ZUNhbXBhaWdufVxuICAgICAgLz5cbiAgICAgIHtvcGVuTW9kYWwgJiYgKFxuICAgICAgICA8UHVwVXBcbiAgICAgICAgIHNldE9wZW5Nb2RhbCA9IHtzZXRPcGVuTW9kYWx9XG4gICAgICAgICBnZXREb25hdGlvbnMgPSB7Z2V0RG9uYXRpb25zfVxuICAgICAgICAgZG9uYXRlID0ge2RvbmF0ZUNhbXBhaWdufVxuICAgICAgICAgZG9uYXRlRnVuY3Rpb24gPSB7ZG9uYXRlfVxuICAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IGluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNyb3dkRnVuZGluZ0NvbnRleHQiLCJIZXJvIiwiQ2FyZCIsIlB1cFVwIiwiaW5kZXgiLCJ0aXRsZURhdGEiLCJnZXRDYW1wYWlnbnMiLCJjcmVhdGVDYW1wYWlnbiIsImRvbmF0ZSIsImdldFVzZXJDYW1wYWlnbnMiLCJnZXREb25hdGlvbnMiLCJhbGxjYW1wYWlnbiIsInNldEFsbGNhbXBhaWduIiwidXNlcmNhbXBhaWduIiwic2V0VXNlcmNhbXBhaWduIiwiZ2V0Q2FtcGFpZ25zRGF0YSIsInVzZXJDYW1wYWlnbnNEYXRhIiwiYWxsRGF0YSIsInVzZXJEYXRhIiwib3Blbk1vZGFsIiwic2V0T3Blbk1vZGFsIiwiZG9uYXRlQ2FtcGFpZ24iLCJzZXREb25hdGVDYW1wYWlnbiIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInNldE9wZW5Nb2RlbCIsInNldERvbmF0ZSIsImRvbmF0ZUZ1bmN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});