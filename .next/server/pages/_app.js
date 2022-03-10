"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./IconSvg/iconsvg.js
var iconsvg = __webpack_require__(6072);
;// CONCATENATED MODULE: ./components/toggleTheme.jsx



function ToggleTheme() {
    const { 0: isDark , 1: setIsDark  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const root = window.document.documentElement;
        root.classList.remove(isDark ? "light" : "dark");
        root.classList.add(isDark ? "dark" : "light");
    }, [
        isDark,
        setIsDark
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("label", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "cursor-pointer",
            onClick: ()=>setIsDark(!isDark)
            ,
            children: isDark ? iconsvg/* IconSvg.DarkThemeIcon */.e.DarkThemeIcon : iconsvg/* IconSvg.LightThemeIcon */.e.LightThemeIcon
        })
    }));
};

;// CONCATENATED MODULE: ./components/header.jsx





const Header = ()=>{
    const { 0: toggleMenu , 1: setToggleMenu  } = (0,external_react_.useState)(false);
    const toggleNavMenu = ()=>{
        setToggleMenu(!toggleMenu);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("header", {
        id: "header",
        className: "w-full min-h-[60px] flex items-center fixed bottom-0 left-0 z-10 bg-secondary shadow-[0_1px_20px_5px_rgba(0,0,0,0.2)] lg:top-0 lg:h-20",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "w-full max-w-screen-lg text-primary mx-auto flex justify-between items-center px-6 py-1 lg:px-0 lg:py-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "cursor-pointer text-2xl font-bold",
                        children: " DevAnkitKr"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center text-primary",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: `md:transition-[bottom] md:ease-in md:duration-300 shadow-[0_35px_60px_1px_rgba(0,0,0,0.5)] bg-secondary rounded-2xl p-2 pt-10 pb-14 rounded-b-none w-full fixed ${toggleMenu ? "bottom-0 " : "bottom-[-100%]"} left-0 z-50 grid gap-4 grid-cols-3 grid-rows-2 col-end-3 lg:relative lg:grid-cols-6 lg:grid-rows-1 lg:gap-6 lg:shadow-none lg:p-4`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#home",
                                    className: "flex flex-col items-center ease-in duration-150 hover:scale-110",
                                    onClick: ()=>setToggleMenu(false)
                                    ,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-5",
                                            children: iconsvg/* IconSvg.HomeIcon */.e.HomeIcon
                                        }),
                                        "Home"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#about",
                                    className: "flex flex-col items-center ease-in duration-150 hover:scale-110",
                                    onClick: ()=>setToggleMenu(false)
                                    ,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-5",
                                            children: iconsvg/* IconSvg.AboutIcon */.e.AboutIcon
                                        }),
                                        "About"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#skills",
                                    className: "flex flex-col items-center ease-in duration-150 hover:scale-110",
                                    onClick: ()=>setToggleMenu(false)
                                    ,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-5",
                                            children: iconsvg/* IconSvg.SkillIcon */.e.SkillIcon
                                        }),
                                        "Skills"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#service",
                                    className: "flex flex-col items-center ease-in duration-150 hover:scale-110",
                                    onClick: ()=>setToggleMenu(false)
                                    ,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-5",
                                            children: iconsvg/* IconSvg.ServiceIcon */.e.ServiceIcon
                                        }),
                                        "Services"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#portfolio",
                                    className: "flex flex-col items-center ease-in duration-150 hover:scale-110",
                                    onClick: ()=>setToggleMenu(false)
                                    ,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-5",
                                            children: iconsvg/* IconSvg.PortfolioIcon */.e.PortfolioIcon
                                        }),
                                        "Portfolio"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: "#contact",
                                    className: "flex flex-col items-center ease-in duration-150 hover:scale-110",
                                    onClick: ()=>setToggleMenu(false)
                                    ,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-5",
                                            children: iconsvg/* IconSvg.ContactIcon */.e.ContactIcon
                                        }),
                                        "Contact"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "flex flex-col items-center absolute right-[1.2rem] bottom-[0.4rem] lg:hidden",
                                onClick: toggleNavMenu,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-6 hover:text-red-400 cursor-pointer",
                                    children: iconsvg/* IconSvg.MenuClose */.e.MenuClose
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-fit flex flex-row ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "pr-3 lg:pr-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ToggleTheme, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            onClick: toggleNavMenu,
                            className: "cursor-pointer lg:hidden",
                            children: iconsvg/* IconSvg.MenuIcon */.e.MenuIcon
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./components/footer.jsx


const Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        id: "footer",
        className: "bg-secondary text-secondary",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-start justify-start min-h-[100px] max-w-screen-lg mb-[60px] p-6 lg:mb-0 lg:px-0 mx-auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-lg font-semibold",
                    children: "Devankitkr"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Web Developer"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-between w-[100px] my-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: iconsvg/* IconSvg.LinkedinIcon */.e.LinkedinIcon
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: iconsvg/* IconSvg.GithubIcon */.e.GithubIcon
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: iconsvg/* IconSvg.WhatsappIcon */.e.WhatsappIcon
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./components/layout.jsx



const Layout = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "bg-primary",
                children: [
                    " ",
                    children
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    }));
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,72], () => (__webpack_exec__(5795)));
module.exports = __webpack_exports__;

})();