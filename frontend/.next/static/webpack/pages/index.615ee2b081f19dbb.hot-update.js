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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_tracks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tracks.service */ \"./services/tracks.service.js\");\n/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ \"./services/user.service.js\");\nvar _this = undefined;\n\n\n\nvar ItemTrack = function(param) {\n    var track = param.track, setFrontPage = param.setFrontPage, setPlayMp3 = param.setPlayMp3, isUserLogged = param.isUserLogged;\n    var sendToPlayer = function() {\n        setFrontPage(track.album.cover_xl);\n        setPlayMp3(track.preview);\n    };\n    var addFavorite = function() {\n        console.log(\"trackkkk : \", track);\n        var dataFav = {\n            title: track.title,\n            album_cover: track.album.cover_xl,\n            preview: track.preview,\n            artist_name: track.artist.name,\n            album_name: track.album.title,\n            id_user: _services_user_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getIdUser()\n        };\n        _services_tracks_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addFavorite(dataFav).then(function(data) {\n            console.log(data);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"foxbel__result-item-content\",\n            onClick: sendToPlayer,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"foxbel__banner-img2\",\n                    children: [\n                        isUserLogged ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: addFavorite,\n                            className: \"foxbel__result-item-button\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa-solid fa-heart\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                                lineNumber: 34,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                            lineNumber: 33,\n                            columnNumber: 25\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: track.album.cover_xl,\n                            alt: \"Adele\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-play\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"foxbel__result-text\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: track.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: track.artist.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\FOOTLOOSE\\\\frontend\\\\components\\\\ItemTrack.js\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false);\n};\n_c = ItemTrack;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemTrack);\nvar _c;\n$RefreshReg$(_c, \"ItemTrack\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0l0ZW1UcmFjay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUE4QztBQUNIO0FBRTNDLElBQU1FLFNBQVMsR0FBRyxnQkFBdUQ7UUFBcERDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxZQUFZLFNBQVpBLFlBQVksRUFBRUMsVUFBVSxTQUFWQSxVQUFVLEVBQUVDLFlBQVksU0FBWkEsWUFBWTtJQUk5RCxJQUFNQyxZQUFZLEdBQUcsV0FBTTtRQUN2QkgsWUFBWSxDQUFDRCxLQUFLLENBQUNLLEtBQUssQ0FBQ0MsUUFBUSxDQUFDO1FBQ2xDSixVQUFVLENBQUNGLEtBQUssQ0FBQ08sT0FBTyxDQUFDO0tBQzVCO0lBRUQsSUFBTUMsV0FBVyxHQUFHLFdBQU07UUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRVYsS0FBSyxDQUFDO1FBQ2pDLElBQUlXLE9BQU8sR0FBRztZQUNWQyxLQUFLLEVBQUVaLEtBQUssQ0FBQ1ksS0FBSztZQUNsQkMsV0FBVyxFQUFFYixLQUFLLENBQUNLLEtBQUssQ0FBQ0MsUUFBUTtZQUNqQ0MsT0FBTyxFQUFFUCxLQUFLLENBQUNPLE9BQU87WUFDdEJPLFdBQVcsRUFBRWQsS0FBSyxDQUFDZSxNQUFNLENBQUNDLElBQUk7WUFDOUJDLFVBQVUsRUFBRWpCLEtBQUssQ0FBQ0ssS0FBSyxDQUFDTyxLQUFLO1lBQzdCTSxPQUFPLEVBQUdwQix3RUFBYyxFQUFFO1NBQzdCO1FBQ0RELDRFQUFpQixDQUFDYyxPQUFPLENBQUMsQ0FBQ1MsSUFBSSxDQUFDQyxTQUFBQSxJQUFJLEVBQUk7WUFDcENaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxJQUFJLENBQUM7U0FDcEIsQ0FBQztLQUNMO0lBRUQscUJBQ0k7a0JBQ0ksNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLDZCQUE2QjtZQUFDQyxPQUFPLEVBQUVwQixZQUFZOzs4QkFDOUQsOERBQUNrQixLQUFHO29CQUFDQyxTQUFTLEVBQUMscUJBQXFCOzt3QkFDL0JwQixZQUFZLGlCQUNULDhEQUFDc0IsUUFBTTs0QkFBQ0QsT0FBTyxFQUFFaEIsV0FBVzs0QkFBRWUsU0FBUyxFQUFDLDRCQUE0QjtzQ0FDaEUsNEVBQUNHLEdBQUM7Z0NBQUNILFNBQVMsRUFBQyxtQkFBbUI7Ozs7O3FDQUFLOzs7OztpQ0FDaEMsaUJBRVQsNklBQUs7c0NBR1QsOERBQUNJLEtBQUc7NEJBQ0FDLEdBQUcsRUFBRTVCLEtBQUssQ0FBQ0ssS0FBSyxDQUFDQyxRQUFROzRCQUN6QnVCLEdBQUcsRUFBQyxPQUFPOzs7OztpQ0FDYjtzQ0FDRiw4REFBQ0gsR0FBQzs0QkFBQ0gsU0FBUyxFQUFDLGtCQUFrQjs7Ozs7aUNBQUs7Ozs7Ozt5QkFDbEM7OEJBQ04sOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7O3NDQUNoQyw4REFBQ08sUUFBTTtzQ0FBRTlCLEtBQUssQ0FBQ1ksS0FBSzs7Ozs7aUNBQVU7c0NBQzlCLDhEQUFDbUIsTUFBSTtzQ0FBRS9CLEtBQUssQ0FBQ2UsTUFBTSxDQUFDQyxJQUFJOzs7OztpQ0FBUTs7Ozs7O3lCQUM5Qjs7Ozs7O2lCQUNKO3FCQUNQLENBQ047Q0FDSjtBQWpES2pCLEtBQUFBLFNBQVM7QUFtRGYsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JdGVtVHJhY2suanM/MjQ1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhY2sgZnJvbSAnLi4vc2VydmljZXMvdHJhY2tzLnNlcnZpY2UnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSdcclxuXHJcbmNvbnN0IEl0ZW1UcmFjayA9ICh7IHRyYWNrLCBzZXRGcm9udFBhZ2UsIHNldFBsYXlNcDMsIGlzVXNlckxvZ2dlZCB9KSA9PiB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBzZW5kVG9QbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RnJvbnRQYWdlKHRyYWNrLmFsYnVtLmNvdmVyX3hsKVxyXG4gICAgICAgIHNldFBsYXlNcDModHJhY2sucHJldmlldylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRGYXZvcml0ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRyYWNra2trIDogXCIsIHRyYWNrKVxyXG4gICAgICAgIGxldCBkYXRhRmF2ID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogdHJhY2sudGl0bGUsIFxyXG4gICAgICAgICAgICBhbGJ1bV9jb3ZlcjogdHJhY2suYWxidW0uY292ZXJfeGwsIFxyXG4gICAgICAgICAgICBwcmV2aWV3OiB0cmFjay5wcmV2aWV3LCBcclxuICAgICAgICAgICAgYXJ0aXN0X25hbWU6IHRyYWNrLmFydGlzdC5uYW1lLCBcclxuICAgICAgICAgICAgYWxidW1fbmFtZTogdHJhY2suYWxidW0udGl0bGUsXHJcbiAgICAgICAgICAgIGlkX3VzZXIgOiBVc2VyLmdldElkVXNlcigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFRyYWNrLmFkZEZhdm9yaXRlKGRhdGFGYXYpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm94YmVsX19yZXN1bHQtaXRlbS1jb250ZW50XCIgb25DbGljaz17c2VuZFRvUGxheWVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm94YmVsX19iYW5uZXItaW1nMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1VzZXJMb2dnZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZEZhdm9yaXRlfSBjbGFzc05hbWU9XCJmb3hiZWxfX3Jlc3VsdC1pdGVtLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtaGVhcnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dHJhY2suYWxidW0uY292ZXJfeGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkFkZWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXBsYXlcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm94YmVsX19yZXN1bHQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RyYWNrLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0cmFjay5hcnRpc3QubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1UcmFjayJdLCJuYW1lcyI6WyJUcmFjayIsIlVzZXIiLCJJdGVtVHJhY2siLCJ0cmFjayIsInNldEZyb250UGFnZSIsInNldFBsYXlNcDMiLCJpc1VzZXJMb2dnZWQiLCJzZW5kVG9QbGF5ZXIiLCJhbGJ1bSIsImNvdmVyX3hsIiwicHJldmlldyIsImFkZEZhdm9yaXRlIiwiY29uc29sZSIsImxvZyIsImRhdGFGYXYiLCJ0aXRsZSIsImFsYnVtX2NvdmVyIiwiYXJ0aXN0X25hbWUiLCJhcnRpc3QiLCJuYW1lIiwiYWxidW1fbmFtZSIsImlkX3VzZXIiLCJnZXRJZFVzZXIiLCJ0aGVuIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJidXR0b24iLCJpIiwiaW1nIiwic3JjIiwiYWx0Iiwic3Ryb25nIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ItemTrack.js\n"));

/***/ })

});