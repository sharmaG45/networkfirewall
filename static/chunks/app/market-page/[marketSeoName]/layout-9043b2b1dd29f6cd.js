(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1424], {
        37552: function(e, t, o) {
            Promise.resolve().then(o.t.bind(o, 65878, 23)), Promise.resolve().then(o.bind(o, 81523)), Promise.resolve().then(o.bind(o, 70049)), Promise.resolve().then(o.t.bind(o, 92704, 23)), Promise.resolve().then(o.t.bind(o, 72935, 23)), Promise.resolve().then(o.bind(o, 4788)), Promise.resolve().then(o.bind(o, 65582)), Promise.resolve().then(o.bind(o, 28916)), Promise.resolve().then(o.bind(o, 39906)), Promise.resolve().then(o.t.bind(o, 27233, 23)), Promise.resolve().then(o.bind(o, 45344))
        },
        81523: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let n = o(18993);

            function r(e) {
                let {
                    reason: t,
                    children: o
                } = e;
                if ("undefined" == typeof window) throw new n.BailoutToCSRError(t);
                return o
            }
        },
        70049: function(e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadCss", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let n = o(57437),
                r = o(20544);

            function i(e) {
                let {
                    moduleIds: t
                } = e;
                if ("undefined" != typeof window) return null;
                let o = (0, r.getExpectedRequestStore)("next/dynamic css"),
                    i = [];
                if (o.reactLoadableManifest && t) {
                    let e = o.reactLoadableManifest;
                    for (let o of t) {
                        if (!e[o]) continue;
                        let t = e[o].files.filter(e => e.endsWith(".css"));
                        i.push(...t)
                    }
                }
                return 0 === i.length ? null : (0, n.jsx)(n.Fragment, {
                    children: i.map(e => (0, n.jsx)("link", {
                        precedence: "dynamic",
                        rel: "stylesheet",
                        href: o.assetPrefix + "/_next/" + encodeURI(e),
                        as: "style"
                    }, e))
                })
            }
        },
        39906: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o(57437);
            o(2265);
            var r = o(83327),
                i = o.n(r);
            t.default = e => (0, n.jsx)(i(), { ...e
            })
        },
        45344: function(e, t, o) {
            "use strict";
            o.d(t, {
                default: function() {
                    return l
                }
            });
            var n = o(57437),
                r = o(2265),
                i = o(82475),
                s = o.n(i),
                A = function(e) {
                    let {
                        size: t = 24,
                        ...o
                    } = e;
                    return (0, n.jsx)("svg", { ...o,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t,
                        height: t,
                        fill: "currentColor",
                        viewBox: "0 -960 960 960",
                        children: (0, n.jsx)("path", {
                            d: "M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z"
                        })
                    })
                },
                l = () => {
                    let [e, t] = (0, r.useState)(!1);
                    return (0, r.useEffect)(() => {
                        let e = 0,
                            o = () => {
                                let o = window.scrollY,
                                    n = .3 * document.documentElement.scrollHeight,
                                    r = e > o;
                                t(o >= n && r), e = o
                            };
                        return o(), window.addEventListener("scroll", o), () => window.removeEventListener("scroll", o)
                    }, []), (0, n.jsxs)("button", {
                        onClick: () => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        },
                        className: "".concat(s().scrollToTopBtn, " ").concat(e ? "" : s().hideScrollBtn),
                        children: [(0, n.jsx)("div", {
                            children: "Back to Top"
                        }), (0, n.jsx)(A, {
                            role: "none",
                            size: 16
                        })]
                    })
                }
        },
        72935: function(e) {
            e.exports = {
                section: "shared-layout_section__3b61m",
                sectionContent: "shared-layout_sectionContent__3Vwkd"
            }
        },
        92704: function(e) {
            e.exports = {
                section: "footer_section__jhdgK",
                content: "footer_content__C_uiz",
                linkList: "footer_linkList__nMCHG",
                iconLinks: "footer_iconLinks__ku9se",
                home: "footer_home__i38GT",
                linkedin: "footer_linkedin__Wakqw",
                twitter: "footer_twitter__dpZB3",
                secondRow: "footer_secondRow__qYg8_",
                copyright: "footer_copyright__dtYhr",
                disclaimer: "footer_disclaimer__IANgF",
                separator: "footer_separator__052IT"
            }
        },
        27233: function(e) {
            e.exports = {
                placeholder: "header_placeholder__GUj0_",
                header: "header_header__w2BOs"
            }
        },
        82475: function(e) {
            e.exports = {
                scrollToTopBtn: "scroll-to-top_scrollToTopBtn__Ow2cB",
                hideScrollBtn: "scroll-to-top_hideScrollBtn__OGxRS"
            }
        },
        4788: function(e, t, o) {
            "use strict";
            o.r(t), t.default = {
                src: "https://reviews.static.gartner.com/_next/static/media/GPI-logo.dc3a3fbc.svg",
                height: 36,
                width: 102,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        65582: function(e, t, o) {
            "use strict";
            o.r(t), t.default = {
                src: "https://reviews.static.gartner.com/_next/static/media/linkedin.8a021c69.png",
                height: 32,
                width: 32,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAl0lEQVR42k2PTQ4BURCEKySIxDHoZ+vNRRjzZkb8LG0QrOxsuA6nsHUmn8mb5FVSXV1d3YtWAyu8XHGAFX2JntFMApgM7jTJ+2oxrTsyZo5Dykku76E32XKoFGSihGgesnBHX1w/46wSpozmzcIHf4FfOGC2EOWo8byLrln4hzO5sKcfycgIPNwKpGC2ST/xmCtc0dfpmz8dkCeT9spo/AAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        28916: function(e, t, o) {
            "use strict";
            o.r(t), t.default = {
                src: "https://reviews.static.gartner.com/_next/static/media/twitter.da5127ac.png",
                height: 32,
                width: 32,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAhFBMVEUAK1UAKVcAKFYAJ1sAKFUAJ1kAJ1YAJ1UAJ1MAI1UAKFQAJE0AJ1gAJ1QAJ1UAJ1UAKFUAKFYAKFUAJ1UAJ1UAJ1UAJ1UAKFUAKFUAKFUAJ1UAKFUAJ1UAJ1UAKFUAKFUAJ1UAKFUAKFUAKFUAJ1UAKFUAJ1UAJ1UAJ1UAJ1UAJ1UAKFUTgSnvAAAAK3RSTlMAAAAAAAAAAAAAAQECExQiMDMzMzQ2TVhZWlpbW1xeX19ub3BwcXFyf5T5WuqKVAAAAEZJREFUeNoFQIcRQDAAfDzRS6L36GT//RyE0k1/lkQxg/RXiT1yvDwJNAZer7k5YGRtvky02Kz0qez4gFxcMpwVKK+p00r8sG4E97CDpG4AAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        }
    },
    function(e) {
        e.O(0, [7033, 7593, 8369, 5878, 2971, 2117, 1744], function() {
            return e(e.s = 37552)
        }), _N_E = e.O()
    }
]);