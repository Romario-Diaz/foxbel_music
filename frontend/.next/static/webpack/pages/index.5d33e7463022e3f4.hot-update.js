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

/***/ "./components/ItemTrack.js":
/*!*********************************!*\
  !*** ./components/ItemTrack.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_FOOTLOOSE_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_FOOTLOOSE_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_FOOTLOOSE_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_tracks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tracks.service */ \"./services/tracks.service.js\");\n/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ \"./services/user.service.js\");\n\n\nvar _this = undefined;\n\n\n\nvar ItemTrack = function(param) {\n    var track = param.track, setFrontPage = param.setFrontPage, setPlayMp3 = param.setPlayMp3, isUserLogged = param.isUserLogged;\n    var sendToPlayer = function() {\n        setFrontPage(track.album.cover_xl);\n        setPlayMp3(track.preview);\n    };\n    var addFavorite = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_FOOTLOOSE_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var id_users, dataFav;\n            return C_FOOTLOOSE_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return _services_user_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getIdUser();\n                    case 2:\n                        id_users = _ctx.sent;\n                        console.log(\"el id baby\", id_users.data[0]);\n                        dataFav = {\n                            title: track.title,\n                            album_cover: track.album.cover_xl,\n                            preview: track.preview,\n                            artist_name: track.artist.name,\n                            album_name: track.album.title,\n                            id_user: id_users\n                        };\n                        _services_tracks_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addFavorite(dataFav).then(function(data) {\n                            console.log(data);\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addFavorite() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"foxbel__result-item-content\",\n            onClick: sendToPlayer,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"foxbel__banner-img2\",\n                    children: [\n                        isUserLogged ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: addFavorite,\n                            className: \"foxbel__result-item-button\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                className: \"fa-solid fa-heart\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                                lineNumber: 36,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: track.album.cover_xl,\n                            alt: \"Adele\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-play\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"foxbel__result-text\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: track.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: track.artist.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_c = ItemTrack;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemTrack);\nvar _c;\n$RefreshReg$(_c, \"ItemTrack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0l0ZW1UcmFjay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQThDO0FBQ0g7QUFFM0MsSUFBTUUsU0FBUyxHQUFHLGdCQUF1RDtRQUFwREMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLFlBQVksU0FBWkEsWUFBWSxFQUFFQyxVQUFVLFNBQVZBLFVBQVUsRUFBRUMsWUFBWSxTQUFaQSxZQUFZO0lBSTlELElBQU1DLFlBQVksR0FBRyxXQUFNO1FBQ3ZCSCxZQUFZLENBQUNELEtBQUssQ0FBQ0ssS0FBSyxDQUFDQyxRQUFRLENBQUM7UUFDbENKLFVBQVUsQ0FBQ0YsS0FBSyxDQUFDTyxPQUFPLENBQUM7S0FDNUI7SUFFRCxJQUFNQyxXQUFXO21CQUFHLHVPQUFXO2dCQUV2QkMsUUFBUSxFQUVSQyxPQUFPOzs7OzsrQkFGVVosd0VBQWMsRUFBRTs7d0JBQWpDVyxRQUFRLFlBQXlCO3dCQUNyQ0csT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFDSixRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2Q0osT0FBTyxHQUFHOzRCQUNWSyxLQUFLLEVBQUVmLEtBQUssQ0FBQ2UsS0FBSzs0QkFDbEJDLFdBQVcsRUFBRWhCLEtBQUssQ0FBQ0ssS0FBSyxDQUFDQyxRQUFROzRCQUNqQ0MsT0FBTyxFQUFFUCxLQUFLLENBQUNPLE9BQU87NEJBQ3RCVSxXQUFXLEVBQUVqQixLQUFLLENBQUNrQixNQUFNLENBQUNDLElBQUk7NEJBQzlCQyxVQUFVLEVBQUVwQixLQUFLLENBQUNLLEtBQUssQ0FBQ1UsS0FBSzs0QkFDN0JNLE9BQU8sRUFBR1osUUFBUTt5QkFDckI7d0JBQ0RaLDRFQUFpQixDQUFDYSxPQUFPLENBQUMsQ0FBQ1ksSUFBSSxDQUFDUixTQUFBQSxJQUFJLEVBQUk7NEJBQ3BDRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO3lCQUNwQixDQUFDOzs7Ozs7U0FDTDt3QkFmS04sV0FBVzs7O09BZWhCO0lBRUQscUJBQ0k7a0JBQ0ksNEVBQUNlLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLDZCQUE2QjtZQUFDQyxPQUFPLEVBQUVyQixZQUFZOzs4QkFDOUQsOERBQUNtQixLQUFHO29CQUFDQyxTQUFTLEVBQUMscUJBQXFCOzt3QkFDL0JyQixZQUFZLGlCQUNULDhEQUFDdUIsUUFBTTs0QkFBQ0QsT0FBTyxFQUFFakIsV0FBVzs0QkFBRWdCLFNBQVMsRUFBQyw0QkFBNEI7c0NBQ2hFLDRFQUFDRyxHQUFDO2dDQUFDSCxTQUFTLEVBQUMsbUJBQW1COzs7OztxQ0FBSzs7Ozs7aUNBQ2hDLGlCQUVULDZJQUFLO3NDQUdULDhEQUFDSSxLQUFHOzRCQUNBQyxHQUFHLEVBQUU3QixLQUFLLENBQUNLLEtBQUssQ0FBQ0MsUUFBUTs0QkFDekJ3QixHQUFHLEVBQUMsT0FBTzs7Ozs7aUNBQ2I7c0NBQ0YsOERBQUNILEdBQUM7NEJBQUNILFNBQVMsRUFBQyxrQkFBa0I7Ozs7O2lDQUFLOzs7Ozs7eUJBQ2xDOzhCQUNOLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMscUJBQXFCOztzQ0FDaEMsOERBQUNPLFFBQU07c0NBQUUvQixLQUFLLENBQUNlLEtBQUs7Ozs7O2lDQUFVO3NDQUM5Qiw4REFBQ2lCLE1BQUk7c0NBQUVoQyxLQUFLLENBQUNrQixNQUFNLENBQUNDLElBQUk7Ozs7O2lDQUFROzs7Ozs7eUJBQzlCOzs7Ozs7aUJBQ0o7cUJBQ1AsQ0FDTjtDQUNKO0FBbkRLcEIsS0FBQUEsU0FBUztBQXFEZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0l0ZW1UcmFjay5qcz8yNDVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFjayBmcm9tICcuLi9zZXJ2aWNlcy90cmFja3Muc2VydmljZSdcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJ1xyXG5cclxuY29uc3QgSXRlbVRyYWNrID0gKHsgdHJhY2ssIHNldEZyb250UGFnZSwgc2V0UGxheU1wMywgaXNVc2VyTG9nZ2VkIH0pID0+IHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHNlbmRUb1BsYXllciA9ICgpID0+IHtcclxuICAgICAgICBzZXRGcm9udFBhZ2UodHJhY2suYWxidW0uY292ZXJfeGwpXHJcbiAgICAgICAgc2V0UGxheU1wMyh0cmFjay5wcmV2aWV3KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZEZhdm9yaXRlID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0cmFja2trayA6IFwiLCB0cmFjaylcclxuICAgICAgICBsZXQgaWRfdXNlcnMgPSBhd2FpdCBVc2VyLmdldElkVXNlcigpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbCBpZCBiYWJ5XCIsaWRfdXNlcnMuZGF0YVswXSk7XHJcbiAgICAgICAgbGV0IGRhdGFGYXYgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0cmFjay50aXRsZSwgXHJcbiAgICAgICAgICAgIGFsYnVtX2NvdmVyOiB0cmFjay5hbGJ1bS5jb3Zlcl94bCwgXHJcbiAgICAgICAgICAgIHByZXZpZXc6IHRyYWNrLnByZXZpZXcsIFxyXG4gICAgICAgICAgICBhcnRpc3RfbmFtZTogdHJhY2suYXJ0aXN0Lm5hbWUsIFxyXG4gICAgICAgICAgICBhbGJ1bV9uYW1lOiB0cmFjay5hbGJ1bS50aXRsZSxcclxuICAgICAgICAgICAgaWRfdXNlciA6IGlkX3VzZXJzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFRyYWNrLmFkZEZhdm9yaXRlKGRhdGFGYXYpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm94YmVsX19yZXN1bHQtaXRlbS1jb250ZW50XCIgb25DbGljaz17c2VuZFRvUGxheWVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm94YmVsX19iYW5uZXItaW1nMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1VzZXJMb2dnZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEZhdm9yaXRlfSBjbGFzc05hbWU9XCJmb3hiZWxfX3Jlc3VsdC1pdGVtLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtaGVhcnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dHJhY2suYWxidW0uY292ZXJfeGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkFkZWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXBsYXlcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm94YmVsX19yZXN1bHQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RyYWNrLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0cmFjay5hcnRpc3QubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1UcmFjayJdLCJuYW1lcyI6WyJUcmFjayIsIlVzZXIiLCJJdGVtVHJhY2siLCJ0cmFjayIsInNldEZyb250UGFnZSIsInNldFBsYXlNcDMiLCJpc1VzZXJMb2dnZWQiLCJzZW5kVG9QbGF5ZXIiLCJhbGJ1bSIsImNvdmVyX3hsIiwicHJldmlldyIsImFkZEZhdm9yaXRlIiwiaWRfdXNlcnMiLCJkYXRhRmF2IiwiZ2V0SWRVc2VyIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0aXRsZSIsImFsYnVtX2NvdmVyIiwiYXJ0aXN0X25hbWUiLCJhcnRpc3QiLCJuYW1lIiwiYWxidW1fbmFtZSIsImlkX3VzZXIiLCJ0aGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImJ1dHRvbiIsImkiLCJpbWciLCJzcmMiLCJhbHQiLCJzdHJvbmciLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ItemTrack.js\n"));

/***/ })

});