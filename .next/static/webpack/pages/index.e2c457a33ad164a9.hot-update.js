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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context_CrowdFunding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/CrowdFunding */ \"./Context/CrowdFunding.js\");\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components */ \"./Components/index.js\");\n\nvar _s = $RefreshSig$();\n\n// INTERNAL import\n\n\nconst index = ()=>{\n    _s();\n    const { titleData , getCampaigns , createCampaign , donate , getUserCampaigns , getDonations  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_CrowdFunding__WEBPACK_IMPORTED_MODULE_2__.CrowdFundingContext);\n    const [allcampaign, setAllcampaign] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [usercampaign, setUsercampaign] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getCampaignsData = getCampaigns();\n        const userCampaignsData = getUserCampaigns();\n        return async ()=>{\n            const allData = await getCampaignsData;\n            const userData = await userCampaignsData;\n            // console.log(allData)\n            setAllcampaign(allData);\n            setUsercampaign(userData);\n        };\n    }, []);\n    // Donate PupUp Model\n    const [openModal, setOpenModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [donateCampaign, setDonateCampaign] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    console.log(donateCampaign);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            console.log(\"okos1\" + usercampaign),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Hero, {\n                titleData: titleData,\n                createCampaign: createCampaign\n            }, void 0, false, {\n                fileName: \"G:\\\\Croud-funding-starter-file-main\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                title: \"All Listed Campaign\",\n                allcampaign: allcampaign,\n                setOpenModel: setOpenModal,\n                setDonate: setDonateCampaign\n            }, void 0, false, {\n                fileName: \"G:\\\\Croud-funding-starter-file-main\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                title: \"Your Created Campaign\",\n                allcampaign: usercampaign,\n                setOpenModel: setOpenModal,\n                setDonate: setDonateCampaign\n            }, void 0, false, {\n                fileName: \"G:\\\\Croud-funding-starter-file-main\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            openModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components__WEBPACK_IMPORTED_MODULE_3__.PupUp, {\n                setOpenModal: setOpenModal,\n                getDonations: getDonations,\n                donate: donateCampaign,\n                donateFunction: donate\n            }, void 0, false, {\n                fileName: \"G:\\\\Croud-funding-starter-file-main\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(index, \"+B5mOs9usE2db3aYo/JaozS5SPM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkQ7QUFFM0Qsa0JBQWtCO0FBRTRDO0FBQ2hCO0FBRTlDLE1BQU1RLFFBQVEsSUFBSTs7SUFDaEIsTUFBTSxFQUNKQyxVQUFTLEVBQ1RDLGFBQVksRUFDWkMsZUFBYyxFQUNkQyxPQUFNLEVBQ05DLGlCQUFnQixFQUNoQkMsYUFBWSxFQUNiLEdBQUdaLGlEQUFVQSxDQUFDRSxzRUFBbUJBO0lBQ2xDLE1BQU0sQ0FBQ1csYUFBWUMsZUFBZSxHQUFHYiwrQ0FBUUE7SUFDN0MsTUFBTSxDQUFDYyxjQUFhQyxnQkFBZ0IsR0FBR2YsK0NBQVFBO0lBRS9DRixnREFBU0EsQ0FBQyxJQUFJO1FBQ1osTUFBTWtCLG1CQUFtQlQ7UUFDekIsTUFBTVUsb0JBQW9CUDtRQUMxQixPQUFPLFVBQVU7WUFDZixNQUFNUSxVQUFVLE1BQU1GO1lBQ3RCLE1BQU1HLFdBQVcsTUFBTUY7WUFDdkIsdUJBQXVCO1lBQ3ZCSixlQUFlSztZQUNmSCxnQkFBZ0JJO1FBQ2xCO0lBQ0YsR0FBRSxFQUFFO0lBRUoscUJBQXFCO0lBQ3JCLE1BQU0sQ0FBQ0MsV0FBVUMsYUFBYSxHQUFHckIsK0NBQVFBLENBQUMsS0FBSztJQUMvQyxNQUFNLENBQUNzQixnQkFBZUMsa0JBQWtCLEdBQUd2QiwrQ0FBUUE7SUFFbkR3QixRQUFRQyxHQUFHLENBQUNIO0lBRVoscUJBQ0U7O1lBQ0NFLFFBQVFDLEdBQUcsQ0FBQyxVQUFTWDswQkFFcEIsOERBQUNaLDZDQUFJQTtnQkFBQ0ksV0FBYUE7Z0JBQVdFLGdCQUFrQkE7Ozs7OzswQkFDaEQsOERBQUNMLDZDQUFJQTtnQkFDSHVCLE9BQVE7Z0JBQ1JkLGFBQWVBO2dCQUNmZSxjQUFnQk47Z0JBQ2hCTyxXQUFhTDs7Ozs7OzBCQUVmLDhEQUFDcEIsNkNBQUlBO2dCQUNIdUIsT0FBUTtnQkFDUmQsYUFBZUU7Z0JBQ2ZhLGNBQWdCTjtnQkFDaEJPLFdBQWFMOzs7Ozs7WUFFZEgsMkJBQ0MsOERBQUNoQiw4Q0FBS0E7Z0JBQ0xpQixjQUFnQkE7Z0JBQ2hCVixjQUFnQkE7Z0JBQ2hCRixRQUFVYTtnQkFDVk8sZ0JBQWtCcEI7Ozs7Ozs7O0FBSzNCO0dBekRNSjtBQTBETiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCx1c2VDb250ZXh0LHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gSU5URVJOQUwgaW1wb3J0XG5cbmltcG9ydCB7IENyb3dkRnVuZGluZ0NvbnRleHQgfSBmcm9tIFwiLi4vQ29udGV4dC9Dcm93ZEZ1bmRpbmdcIjtcbmltcG9ydCB7SGVybyxDYXJkLFB1cFVwfSBmcm9tIFwiLi4vQ29tcG9uZW50c1wiO1xuXG5jb25zdCBpbmRleCA9ICgpPT57XG4gIGNvbnN0IHtcbiAgICB0aXRsZURhdGEsXG4gICAgZ2V0Q2FtcGFpZ25zLFxuICAgIGNyZWF0ZUNhbXBhaWduLFxuICAgIGRvbmF0ZSxcbiAgICBnZXRVc2VyQ2FtcGFpZ25zLFxuICAgIGdldERvbmF0aW9uc1xuICB9ID0gdXNlQ29udGV4dChDcm93ZEZ1bmRpbmdDb250ZXh0KVxuICBjb25zdCBbYWxsY2FtcGFpZ24sc2V0QWxsY2FtcGFpZ25dID0gdXNlU3RhdGUoKVxuICBjb25zdCBbdXNlcmNhbXBhaWduLHNldFVzZXJjYW1wYWlnbl0gPSB1c2VTdGF0ZSgpXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3QgZ2V0Q2FtcGFpZ25zRGF0YSA9IGdldENhbXBhaWducygpO1xuICAgIGNvbnN0IHVzZXJDYW1wYWlnbnNEYXRhID0gZ2V0VXNlckNhbXBhaWducygpO1xuICAgIHJldHVybiBhc3luYygpID0+e1xuICAgICAgY29uc3QgYWxsRGF0YSA9IGF3YWl0IGdldENhbXBhaWduc0RhdGE7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHVzZXJDYW1wYWlnbnNEYXRhO1xuICAgICAgLy8gY29uc29sZS5sb2coYWxsRGF0YSlcbiAgICAgIHNldEFsbGNhbXBhaWduKGFsbERhdGEpO1xuICAgICAgc2V0VXNlcmNhbXBhaWduKHVzZXJEYXRhKVxuICAgIH1cbiAgfSxbXSk7XG5cbiAgLy8gRG9uYXRlIFB1cFVwIE1vZGVsXG4gIGNvbnN0IFtvcGVuTW9kYWwsc2V0T3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZG9uYXRlQ2FtcGFpZ24sc2V0RG9uYXRlQ2FtcGFpZ25dID0gdXNlU3RhdGUoKVxuXG4gIGNvbnNvbGUubG9nKGRvbmF0ZUNhbXBhaWduKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAge2NvbnNvbGUubG9nKFwib2tvczFcIisgdXNlcmNhbXBhaWduKX1cbiAgICBcbiAgICAgIDxIZXJvIHRpdGxlRGF0YSA9IHt0aXRsZURhdGF9IGNyZWF0ZUNhbXBhaWduID0ge2NyZWF0ZUNhbXBhaWdufS8+XG4gICAgICA8Q2FyZCBcbiAgICAgICAgdGl0bGUgPSBcIkFsbCBMaXN0ZWQgQ2FtcGFpZ25cIlxuICAgICAgICBhbGxjYW1wYWlnbiA9IHthbGxjYW1wYWlnbn1cbiAgICAgICAgc2V0T3Blbk1vZGVsID0ge3NldE9wZW5Nb2RhbH1cbiAgICAgICAgc2V0RG9uYXRlID0ge3NldERvbmF0ZUNhbXBhaWdufVxuICAgICAgLz5cbiAgICAgIDxDYXJkIFxuICAgICAgICB0aXRsZSA9IFwiWW91ciBDcmVhdGVkIENhbXBhaWduXCJcbiAgICAgICAgYWxsY2FtcGFpZ24gPSB7dXNlcmNhbXBhaWdufVxuICAgICAgICBzZXRPcGVuTW9kZWwgPSB7c2V0T3Blbk1vZGFsfVxuICAgICAgICBzZXREb25hdGUgPSB7c2V0RG9uYXRlQ2FtcGFpZ259XG4gICAgICAvPlxuICAgICAge29wZW5Nb2RhbCAmJiAoXG4gICAgICAgIDxQdXBVcFxuICAgICAgICAgc2V0T3Blbk1vZGFsID0ge3NldE9wZW5Nb2RhbH1cbiAgICAgICAgIGdldERvbmF0aW9ucyA9IHtnZXREb25hdGlvbnN9XG4gICAgICAgICBkb25hdGUgPSB7ZG9uYXRlQ2FtcGFpZ259XG4gICAgICAgICBkb25hdGVGdW5jdGlvbiA9IHtkb25hdGV9XG4gICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQ3Jvd2RGdW5kaW5nQ29udGV4dCIsIkhlcm8iLCJDYXJkIiwiUHVwVXAiLCJpbmRleCIsInRpdGxlRGF0YSIsImdldENhbXBhaWducyIsImNyZWF0ZUNhbXBhaWduIiwiZG9uYXRlIiwiZ2V0VXNlckNhbXBhaWducyIsImdldERvbmF0aW9ucyIsImFsbGNhbXBhaWduIiwic2V0QWxsY2FtcGFpZ24iLCJ1c2VyY2FtcGFpZ24iLCJzZXRVc2VyY2FtcGFpZ24iLCJnZXRDYW1wYWlnbnNEYXRhIiwidXNlckNhbXBhaWduc0RhdGEiLCJhbGxEYXRhIiwidXNlckRhdGEiLCJvcGVuTW9kYWwiLCJzZXRPcGVuTW9kYWwiLCJkb25hdGVDYW1wYWlnbiIsInNldERvbmF0ZUNhbXBhaWduIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwic2V0T3Blbk1vZGVsIiwic2V0RG9uYXRlIiwiZG9uYXRlRnVuY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});