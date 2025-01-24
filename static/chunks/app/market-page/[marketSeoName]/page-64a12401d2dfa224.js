(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5191], {
        49758: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 95117)), Promise.resolve().then(r.bind(r, 20824)), Promise.resolve().then(r.bind(r, 71172)), Promise.resolve().then(r.t.bind(r, 80527, 23)), Promise.resolve().then(r.t.bind(r, 70714, 23))
        },
        33145: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return a.a
                }
            });
            var n = r(48461),
                a = r.n(n)
        },
        27648: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return a.a
                }
            });
            var n = r(72972),
                a = r.n(n)
        },
        99376: function(e, t, r) {
            "use strict";
            var n = r(35475);
            r.o(n, "usePathname") && r.d(t, {
                usePathname: function() {
                    return n.usePathname
                }
            }), r.o(n, "useSearchParams") && r.d(t, {
                useSearchParams: function() {
                    return n.useSearchParams
                }
            })
        },
        48461: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    default: function() {
                        return l
                    },
                    getImageProps: function() {
                        return i
                    }
                });
            let n = r(47043),
                a = r(55346),
                o = r(65878),
                s = n._(r(5084));

            function i(e) {
                let {
                    props: t
                } = (0, a.getImgProps)(e, {
                    defaultLoader: s.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        path: "/reviews/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                return {
                    props: t
                }
            }
            let l = o.Image
        },
        95117: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return y
                }
            });
            var n = r(57437),
                a = r(2265),
                o = r(36164),
                s = r.n(o),
                i = r(46007),
                l = r.n(i),
                c = r(79443);
            let d = e => (0, n.jsx)("g", {
                    transform: "translate(".concat((19.562 * e).toPrecision(3), ",0)"),
                    children: (0, n.jsx)("path", {
                        d: "m9.78 0-.003.006-2.416 6.957L0 7.11l5.867 4.452-2.13 7.052 6.04-4.205.002-.002 6.045 4.207-2.13-7.053 5.867-4.449-7.362-.15z",
                        fill: "#f6f7f9"
                    })
                }, e),
                u = e => (0, n.jsx)("g", {
                    transform: "translate(".concat((19.562 * e).toPrecision(3), ",0)"),
                    children: (0, n.jsx)("path", {
                        d: "m9.78 0-.003.006-2.416 6.957L0 7.11l5.867 4.452-2.13 7.052 6.04-4.205.002-.002 6.045 4.207-2.13-7.053 5.867-4.449-7.362-.15z",
                        fill: "#ffad1a"
                    })
                }, e),
                p = e => (0, n.jsxs)("g", {
                    transform: "translate(".concat((19.562 * e).toPrecision(3), ",0)"),
                    children: [(0, n.jsx)("path", {
                        d: "m9.78 0-.003.006-2.416 6.957L0 7.11l5.867 4.452-2.13 7.052 6.04-4.205.002-.002 6.045 4.207-2.13-7.053 5.867-4.449-7.362-.15z",
                        fill: "#f6f7f9"
                    }), (0, n.jsx)("path", {
                        d: "m9.779 14.409-6.042 4.206 2.13-7.052L0 7.112l7.362-.15L9.78.005",
                        fill: "#ffad1a"
                    })]
                }, e);
            var h = e => {
                    let {
                        rating: t
                    } = e, r = Array.from({
                        length: 5
                    }, (e, t) => d(t));
                    for (let e = 0; e < Math.ceil(Math.round(2 * t) / 2); e++) r[e] = p(e);
                    for (let e = 0; e < Math.floor(Math.round(2 * t) / 2); e++) r[e] = u(e);
                    return (0, n.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "".concat(97.81),
                        height: 18.615,
                        children: r
                    })
                },
                v = r(47904),
                m = r(71811),
                _ = e => {
                    let {
                        marketSeoName: t,
                        product: r,
                        vendorSeoName: a
                    } = e, o = new URL("".concat(m.I5, "/reviews/").concat(t, "/form"));
                    return o.searchParams.append("vid", r.vendor.seqId.toString()), o.searchParams.append("pid", r.seqId.toString()), (0, n.jsx)("div", {
                        className: l().productCards,
                        children: (0, n.jsxs)("div", {
                            className: l().productCard,
                            children: [0 != r.reviewCount ? (0, n.jsx)("a", {
                                href: "".concat(t, "/vendor/").concat(a, "/product/").concat(r.seoName),
                                className: l().logo,
                                children: (0, n.jsx)(c.Z, {
                                    product: r,
                                    size: 55
                                })
                            }) : (0, n.jsx)(c.Z, {
                                product: r,
                                size: 55
                            }), (0, n.jsxs)("div", {
                                className: l().product,
                                children: [0 != r.reviewCount ? (0, n.jsx)("a", {
                                    href: "".concat(t, "/vendor/").concat(a, "/product/").concat(r.seoName),
                                    className: l().name,
                                    onClick: () => {
                                        (0, v.Z)({
                                            action: "Vendor Link Clicked",
                                            category: "Market Page",
                                            label: r.name
                                        })
                                    },
                                    children: r.name
                                }) : (0, n.jsx)("div", {
                                    children: r.name
                                }), 0 != r.reviewCount ? (0, n.jsxs)("div", {
                                    className: l().starRating,
                                    children: [r.averageRating, " ", (0, n.jsx)(h, {
                                        rating: r.averageRating
                                    }), (0, n.jsxs)("a", {
                                        href: "".concat(t, "/vendor/").concat(a, "/product/").concat(r.seoName, "#most-helpful-reviews"),
                                        className: l().rating,
                                        children: ["(", (0, n.jsx)("span", {
                                            children: r.reviewCount
                                        }), (0, n.jsx)("span", {
                                            className: l().countLabel,
                                            children: 1 == r.reviewCount ? " Rating" : " Ratings"
                                        }), ")"]
                                    })]
                                }) : (0, n.jsxs)("div", {
                                    children: ["Be the first to", " ", (0, n.jsx)("a", {
                                        href: o.href,
                                        className: l().writeAReviewLink,
                                        children: "write a review"
                                    }), "."]
                                })]
                            })]
                        })
                    })
                },
                g = r(21873),
                f = r(42952),
                w = r.n(f),
                x = e => {
                    let {
                        overallRatings: t,
                        productCount: r
                    } = e, a = e => Math.round(e / r * 100), o = Array.from({
                        length: 5
                    }, (e, r) => ({
                        num: r + 1,
                        percent: a(t[r])
                    })).reverse();
                    return (0, n.jsx)("dl", {
                        className: w().histogram,
                        children: o.map(e => {
                            let {
                                num: t,
                                percent: r
                            } = e;
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsxs)("dt", {
                                    className: w().desc,
                                    children: [t, " ", 1 === t ? "Star" : "Stars"]
                                }), (0, n.jsx)("div", {
                                    "aria-hidden": "true",
                                    className: w().bar,
                                    children: (0, n.jsx)("div", {
                                        className: w().bluebar,
                                        style: {
                                            width: "".concat(r, "%")
                                        }
                                    })
                                }), (0, n.jsxs)("dd", {
                                    className: w().val,
                                    children: [r, "%"]
                                })]
                            })
                        })
                    })
                },
                j = {
                    src: "https://reviews.static.gartner.com/_next/static/media/CustomerChoiceBadgeIcon.0a53282b.png"
                },
                b = r(61994),
                y = e => {
                    var t, r, o, i, l, d, u, p;
                    let {
                        marketSeoName: f,
                        product: w,
                        overallRatings: y
                    } = e, [N, C] = (0, a.useState)("overview"), [k, S] = (0, a.useState)(!0), P = w.vendors[0].description, L = 0 !== y.length && w.ratingsCount > 0, R = new URL("".concat(m.I5, "/reviews/").concat(f, "/form"));
                    R.searchParams.append("vid", w.vendors[0].seqId.toString()), R.searchParams.append("pid", w.seqId.toString());
                    let {
                        legacy: Z
                    } = w;
                    return (0, a.useEffect)(() => {
                        (0, v.Z)({
                            action: "Product Card Tab toggled",
                            category: "Market Page",
                            value: N
                        })
                    }, [N]), (0, a.useEffect)(() => {
                        (0, v.Z)({
                            action: "Product Card Show more toggled",
                            category: "Market Page",
                            value: k
                        })
                    }, [k]), (0, n.jsxs)("div", {
                        className: "overview" == N ? s().productCard : s().alternateProduct,
                        children: [(0, n.jsxs)("div", {
                            className: s().header,
                            children: [(0, n.jsxs)("div", {
                                className: s().productHeader,
                                children: [(0, n.jsx)("a", {
                                    href: "".concat(f, "/vendor/").concat(null === (t = w.vendors[0]) || void 0 === t ? void 0 : t.seoName, "/product/").concat(w.seoName),
                                    className: (0, b.Z)(s().logoContainer),
                                    children: (0, n.jsx)(c.Z, {
                                        product: w,
                                        size: 120,
                                        className: (0, b.Z)(s().logo)
                                    })
                                }), (0, n.jsx)("h3", {
                                    className: s().productTitle,
                                    children: (0, n.jsx)("a", {
                                        href: "".concat(f, "/vendor/").concat(null === (r = w.vendors[0]) || void 0 === r ? void 0 : r.seoName, "/product/").concat(w.seoName),
                                        children: w.name
                                    })
                                }), (0, n.jsx)("p", {
                                    className: s().vendor,
                                    children: (0, n.jsxs)("a", {
                                        href: "".concat(f, "/vendor/").concat(null === (o = w.vendors[0]) || void 0 === o ? void 0 : o.seoName),
                                        children: ["By ", w.vendors[0].name]
                                    })
                                }), L ? (0, n.jsxs)("div", {
                                    className: s().rating,
                                    children: [(0, n.jsx)("div", {
                                        children: w.averageRating
                                    }), (0, n.jsx)(h, {
                                        rating: w.averageRating
                                    }), (0, n.jsxs)("a", {
                                        href: "".concat(f, "/vendor/").concat(null === (i = w.vendors[0]) || void 0 === i ? void 0 : i.seoName, "/product/").concat(w.seoName, "#most-helpful-reviews"),
                                        className: s().ratingsCount,
                                        children: ["(", w.ratingsCount, " ", 1 == w.ratingsCount ? "Rating" : "Ratings", ")"]
                                    })]
                                }) : null]
                            }), (null === (l = w.vendors[0]) || void 0 === l ? void 0 : l.award) && (0, n.jsx)("div", {
                                role: "none",
                                className: s().cchoiceRow,
                                children: (0, n.jsxs)("a", {
                                    className: s().cchoice,
                                    href: "/reviews/customers-choice-landing-page",
                                    target: "_blank",
                                    children: [(0, n.jsx)("img", {
                                        role: "none",
                                        src: j.src,
                                        alt: "",
                                        height: 25
                                    }), (0, n.jsxs)("span", {
                                        children: [((null === (u = w.vendors[0]) || void 0 === u ? void 0 : null === (d = u.award) || void 0 === d ? void 0 : d.awardType) || "").split("-").join(" "), " ", null === (p = w.vendors[0]) || void 0 === p ? void 0 : p.award.year]
                                    })]
                                })
                            })]
                        }), void 0 !== w.alternateProducts ? (0, n.jsxs)("div", {
                            className: s().tabs,
                            children: [(0, n.jsx)("button", {
                                onClick: () => C("overview"),
                                className: s().tab,
                                "aria-selected": "overview" === N,
                                children: "OVERVIEW"
                            }), (0, n.jsx)("button", {
                                onClick: () => C("alternatives"),
                                className: s().tab,
                                "aria-selected": "alternatives" === N,
                                children: "ALTERNATIVES"
                            })]
                        }) : null, "overview" == N ? (0, n.jsxs)("div", {
                            className: s().content,
                            children: [P ? (0, n.jsx)(g.Z, {
                                text: P,
                                maxWords: 35
                            }) : null, L ? (0, n.jsxs)("div", {
                                className: s().showMore,
                                onClick: () => S(!k),
                                children: ["Show ", k ? "More" : "Less", " Details", " ", k ? (0, n.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    height: "24px",
                                    viewBox: "0 -960 960 960",
                                    width: "24px",
                                    fill: "#0000A9",
                                    children: (0, n.jsx)("path", {
                                        d: "M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
                                    })
                                }) : (0, n.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    height: "24px",
                                    viewBox: "0 -960 960 960",
                                    width: "24px",
                                    fill: "#0000A9",
                                    children: (0, n.jsx)("path", {
                                        d: "M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"
                                    })
                                })]
                            }) : !Z && (0, n.jsxs)("div", {
                                children: ["Be the first to", " ", (0, n.jsx)("a", {
                                    href: R.href,
                                    className: s().writeAReviewLink,
                                    children: "write a review"
                                }), "."]
                            }), !k && (0, n.jsxs)("div", {
                                className: s().moreContent,
                                children: [(0, n.jsxs)("div", {
                                    className: s().subsection,
                                    children: [(0, n.jsx)("h4", {
                                        className: s().subsectionTitle,
                                        children: "Ratings Breakdown"
                                    }), 0 != y.length && (0, n.jsx)(x, {
                                        overallRatings: y,
                                        productCount: w.ratingsCount
                                    })]
                                }), w.reviewSummary && (0, n.jsxs)("div", {
                                    className: s().subsection,
                                    children: [(0, n.jsx)("h4", {
                                        className: s().subsectionTitle,
                                        children: "From Our Reviewers"
                                    }), (0, n.jsx)("ul", {
                                        className: s().reviews,
                                        children: w.reviewSummary.map(e => (0, n.jsxs)("li", {
                                            className: s().reviewItem,
                                            children: ["“", e, "”"]
                                        }))
                                    }), (0, n.jsx)("a", {
                                        href: "".concat(f, "/vendor/").concat(w.vendors[0].seoName, "/product/").concat(w.seoName, "#most-helpful-reviews"),
                                        className: s().readmore,
                                        onClick: () => {
                                            (0, v.Z)({
                                                action: "Read All Reviews Link Clicked",
                                                category: "Market Page",
                                                label: w.name
                                            })
                                        },
                                        children: "Read All Reviews"
                                    })]
                                })]
                            })]
                        }) : (0, n.jsxs)("div", {
                            className: s().content,
                            children: [(0, n.jsx)("div", {
                                className: s().cards,
                                children: w.alternateProducts && w.alternateProducts.length > 0 && w.alternateProducts.map((e, t) => {
                                    if (t < 2) return (0, n.jsx)(_, {
                                        marketSeoName: f,
                                        vendorSeoName: e.vendor.seoName,
                                        product: e
                                    }, e.seoName)
                                })
                            }), (0, n.jsx)("a", {
                                href: "".concat(f, "/vendor/").concat(w.vendors[0].seoName, "/product/").concat(w.seoName, "/alternatives"),
                                className: s().readmore,
                                onClick: () => {
                                    (0, v.Z)({
                                        action: "See All Alternatives Link Clicked",
                                        category: "Market Page",
                                        label: w.name
                                    })
                                },
                                children: "See All Alternatives"
                            })]
                        })]
                    })
                }
        },
        20824: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return H
                }
            });
            var n = r(57437),
                a = r(2265),
                o = r(27648),
                s = r(38391),
                i = r.n(s),
                l = r(72935),
                c = r.n(l),
                d = r(47904),
                u = r(99376),
                p = () => {
                    let e = (0, u.useSearchParams)(),
                        t = (0, u.usePathname)();
                    return r => {
                        let n = new URLSearchParams(e);
                        for (let e in r) {
                            n.delete(e);
                            let t = r[e];
                            if (null !== t) {
                                if ("string" == typeof t) {
                                    n.set(e, t);
                                    continue
                                }
                                for (let r of t) n.append(e, r)
                            }
                        }
                        return {
                            query: n.toString(),
                            pathname: t
                        }
                    }
                },
                h = r(18663),
                v = r.n(h),
                m = r(61994),
                _ = r(27789),
                g = function(e) {
                    let {
                        size: t = 24,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", { ...r,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t,
                        height: t,
                        fill: "currentColor",
                        viewBox: "0 -960 960 960",
                        children: (0, n.jsx)("path", {
                            d: "M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"
                        })
                    })
                },
                f = r(9573),
                w = r.n(f),
                x = e => {
                    let {
                        checked: t
                    } = e;
                    return (0, n.jsxs)("div", {
                        role: "none",
                        className: (0, m.Z)(w().toggleSwitch, t && w().checked),
                        children: [(0, n.jsx)("div", {
                            className: w().track
                        }), (0, n.jsx)("div", {
                            className: w().base
                        })]
                    })
                },
                j = r(45952),
                b = r.n(j),
                y = r(10440),
                N = e => {
                    let {
                        checked: t,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: 20,
                        width: 20,
                        viewBox: "0 -960 960 960",
                        fill: "currentColor",
                        ...r,
                        children: t ? (0, n.jsx)("path", {
                            d: "m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM120-120v-720h720v720H120Z"
                        }) : (0, n.jsx)("path", {
                            d: "M120-120v-720h720v720H120Zm80-80h560v-560H200v560Z"
                        })
                    })
                };
            let C = e => {
                let {
                    onCollapse: t
                } = e, [r, s] = (0, a.useState)(null), i = (0, a.useRef)(r), l = (0, a.useId)(), [c, d] = (0, a.useState)(Math.min(5, e.options.length)), u = !r && e.options.length > 5, p = c <= 5, h = (0, a.useRef)(null);
                return (0, a.useLayoutEffect)(() => {
                    let e = h.current,
                        t = new ResizeObserver(() => {
                            r || e.style.setProperty("--h", String(e.scrollHeight))
                        });
                    return t.observe(e), () => t.disconnect()
                }, [r]), (0, a.useLayoutEffect)(() => {
                    let e = h.current;
                    e.style.setProperty("--h", String(e.scrollHeight))
                }, [c, e.values, e.options]), (0, a.useEffect)(() => {
                    "boolean" == typeof r && (null == t || t(r))
                }, [r, t]), (0, a.useLayoutEffect)(() => {
                    if (i.current === r || null === r) return;
                    let e = r ? b().collapsing : b().expanding;
                    i.current = r;
                    let t = h.current,
                        n = () => {
                            console.log("animationeneded"), t.classList.remove(e)
                        };
                    return t.addEventListener("animationend", n), t.classList.add(e), () => {
                        t.removeEventListener("animationend", n)
                    }
                }, [r]), (0, n.jsxs)("div", {
                    role: "none",
                    className: (0, m.Z)(r && b().collapsed),
                    children: [(0, n.jsxs)("button", {
                        className: b().heading,
                        "aria-description": "Collapse filters",
                        "aria-controls": l,
                        "aria-expanded": !r,
                        onClick: () => s(e => !e),
                        children: [(0, n.jsx)("div", {
                            role: "none",
                            children: e.label
                        }), (0, n.jsx)(y.Z, {
                            role: "none",
                            className: b().chevron
                        })]
                    }), (0, n.jsx)("div", {
                        ref: h,
                        className: b().checkboxGroup,
                        role: "listbox",
                        id: l,
                        children: e.options.slice(0, Math.max(5, c)).map(t => {
                            let [r, a] = t, s = e.values.includes(r);
                            return (0, n.jsxs)(o.default, {
                                replace: !0,
                                rel: "nofollow",
                                scroll: !1,
                                href: a.href,
                                prefetch: !1,
                                className: b().link,
                                "aria-selected": s,
                                onClick: () => {
                                    var t;
                                    return null === (t = e.onChange) || void 0 === t ? void 0 : t.call(e, {
                                        value: r,
                                        label: a.label,
                                        type: s ? "off" : "on"
                                    })
                                },
                                children: [(0, n.jsx)(N, {
                                    checked: s,
                                    className: b().icon,
                                    role: "none"
                                }), (0, n.jsx)("div", {
                                    role: "none",
                                    children: a.label
                                })]
                            }, r)
                        })
                    }), u ? (0, n.jsx)("button", {
                        className: b().showMoreLess,
                        onClick: () => d(p ? e.options.length : 5),
                        children: p ? "Show More" : "Show Less"
                    }) : null]
                })
            };
            var k = e => 0 === e.options.length ? (0, n.jsx)(n.Fragment, {}) : (0, n.jsx)(C, { ...e
            });
            let S = (e, t) => {
                let r = new Set(e);
                return e.includes(t) ? r.delete(t) : r.add(t), [...r]
            };
            var P = e => {
                    let {
                        filters: t,
                        availableFilters: r,
                        monthsParam: s,
                        className: i,
                        marketReviewCount: l
                    } = e, c = p(), [u, h] = (0, a.useState)(!1), f = e => {
                        let n = r[e];
                        return ("companySize" === e ? n.sort((e, t) => e.id > t.id ? 1 : -1) : n).map(r => {
                            let n = c({
                                    [e]: S(t[e], r.id),
                                    page: []
                                }),
                                a = {
                                    label: r.description,
                                    href: n
                                };
                            return [r.id, a]
                        })
                    }, w = e => t => {
                        let {
                            label: r,
                            type: n
                        } = t;
                        (0, d.Z)({
                            action: "".concat(e, " filter toggled"),
                            category: "Market Page",
                            label: r,
                            value: n
                        })
                    }, j = e => t => {
                        (0, d.Z)({
                            action: "".concat(e, " filter collapsed"),
                            category: "Market Page",
                            value: t
                        })
                    }, b = Object.values(t).reduce((e, t) => e + t.length, 0);
                    return (0, n.jsxs)("div", {
                        role: "none",
                        className: (0, m.Z)(i),
                        children: [(0, n.jsxs)("button", {
                            className: v().filterToggleButton,
                            onClick: () => {
                                h(e => !e), (0, d.Z)({
                                    action: "Filter Drawer toggled",
                                    category: "Market Page",
                                    value: !u
                                })
                            },
                            children: [(0, n.jsx)(g, {
                                role: "none"
                            }), (0, n.jsx)("div", {
                                children: "Filters"
                            })]
                        }), (0, n.jsx)("div", {
                            role: "none",
                            className: (0, m.Z)(v().filterBackdrop, u && v().openedDrawer),
                            onClick: e => {
                                if (e.target === e.currentTarget) return h(!1)
                            },
                            children: (0, n.jsx)("div", {
                                role: "none",
                                className: v().filterDrawer,
                                children: (0, n.jsxs)("div", {
                                    role: "none",
                                    children: [l > 0 ? (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsxs)("div", {
                                            role: "none",
                                            className: v().filterHeader,
                                            children: [(0, n.jsx)("h3", {
                                                className: v().filterTitle,
                                                children: "Filter by".concat(b > 0 ? " (".concat(b, ")") : "")
                                            }), (0, n.jsx)("button", {
                                                className: v().closeDrawerButton,
                                                "aria-label": "Close filter drawer",
                                                onClick: () => h(!1),
                                                children: (0, n.jsx)(_.Z, {
                                                    role: "none"
                                                })
                                            })]
                                        }), (0, n.jsxs)(o.default, {
                                            className: (0, m.Z)(v().twelveMonthSwitch),
                                            replace: !0,
                                            rel: "nofollow",
                                            scroll: !1,
                                            prefetch: !1,
                                            "aria-checked": "12" === s,
                                            role: "checkbox",
                                            onClick: () => {
                                                (0, d.Z)({
                                                    action: "12 Months Filter toggled",
                                                    category: "Market Page",
                                                    value: s
                                                })
                                            },
                                            href: c({
                                                months: "12" === s ? null : "12",
                                                page: null
                                            }),
                                            children: [(0, n.jsx)(x, {
                                                checked: "12" === s
                                            }), (0, n.jsx)("div", {
                                                className: v().monthToggleLabel,
                                                children: "Reviewed in Last 12 Months"
                                            })]
                                        })]
                                    }) : (0, n.jsx)("div", {
                                        role: "none",
                                        className: v().filterHeader,
                                        children: (0, n.jsx)("h3", {
                                            className: v().filterTitle,
                                            children: "No filters available"
                                        })
                                    }), (0, n.jsxs)("div", {
                                        children: [(0, n.jsx)(k, {
                                            label: "Reviewer's Company Size Revenue",
                                            values: t.companySize,
                                            options: f("companySize"),
                                            onChange: w("Reviewer's Company Size"),
                                            onCollapse: j("Reviewer's Company Size")
                                        }), (0, n.jsx)(k, {
                                            label: "Reviewer's Industry",
                                            values: t.industry,
                                            options: f("industry"),
                                            onChange: w("Reviewer's Industry"),
                                            onCollapse: j("Reviewer's Industry")
                                        }), (0, n.jsx)(k, {
                                            label: "Reviewer's Region",
                                            values: t.deploymentRegion,
                                            options: f("deploymentRegion"),
                                            onChange: w("Reviewer's Region"),
                                            onCollapse: j("Reviewer's Region")
                                        }), (0, n.jsx)(k, {
                                            label: "Vendors",
                                            values: t.vendors,
                                            options: f("vendors"),
                                            onChange: w("Vendors"),
                                            onCollapse: j("Vendor")
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                },
                L = r(74071),
                R = r(91454);
            let Z = async (e, t, r) => await R.e4.json("/reviews/reviews-api-post-proxy/user/page-view", {
                signal: r,
                method: "POST",
                body: JSON.stringify({
                    uri: "/reviews/market/".concat(e),
                    viewType: "MARKET"
                }),
                headers: {
                    "Content-Type": "application/json",
                    cookie: t
                },
                next: {
                    revalidate: 500
                }
            });
            var E = r(60865),
                M = r.n(E),
                T = r(11147),
                I = r.n(T),
                A = r(58964),
                B = e => {
                    let {
                        href: t,
                        filter: r
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: I().filterpill,
                        children: [(0, n.jsx)("div", {
                            children: r
                        }), (0, n.jsx)(o.default, {
                            rel: "nofollow",
                            replace: !0,
                            prefetch: !1,
                            href: t,
                            className: I().close,
                            children: (0, n.jsx)(A.Z, {
                                size: 20
                            })
                        })]
                    })
                },
                z = e => {
                    let {
                        filters: t,
                        filterMap: r
                    } = e, s = (0, u.useSearchParams)(), i = (null == s ? void 0 : s.toString()) !== "" && ((null == s ? void 0 : s.has("companySize")) || (null == s ? void 0 : s.has("industry")) || (null == s ? void 0 : s.has("deploymentRegion")) || (null == s ? void 0 : s.has("vendors"))), l = p(), c = l({
                        companySize: [],
                        industry: [],
                        deploymentRegion: [],
                        vendors: [],
                        page: []
                    }), d = (0, a.useCallback)(e => void 0 !== r[e], [r]), h = (e, r) => {
                        let n = [];
                        switch (r) {
                            case "companySize":
                                n = t.companySize.filter(t => t != e);
                                break;
                            case "industry":
                                n = t.industry.filter(t => t != e);
                                break;
                            case "deploymentRegion":
                                n = t.deploymentRegion.filter(t => t != e);
                                break;
                            case "vendors":
                                n = t.vendors.filter(t => t != e);
                                break;
                            default:
                                n = []
                        }
                        return n
                    };
                    return (0, n.jsxs)("div", {
                        className: M().pills,
                        children: [t.companySize.filter(d).map(e => (0, n.jsx)(B, {
                            href: l({
                                companySize: h(e, "companySize"),
                                page: []
                            }),
                            filter: r[e]
                        }, e)), t.industry.filter(d).map(e => (0, n.jsx)(B, {
                            href: l({
                                industry: h(e, "industry"),
                                page: []
                            }),
                            filter: r[e]
                        }, e)), t.deploymentRegion.filter(d).map(e => (0, n.jsx)(B, {
                            href: l({
                                deploymentRegion: h(e, "deploymentRegion"),
                                page: []
                            }),
                            filter: r[e]
                        }, e)), t.vendors.filter(d).map(e => (0, n.jsx)(B, {
                            href: l({
                                vendors: h(e, "vendors"),
                                page: []
                            }),
                            filter: r[e]
                        }, e)), i && (0, n.jsx)(o.default, {
                            rel: "nofollow",
                            className: "".concat(M().clear),
                            href: c,
                            prefetch: !1,
                            children: "Clear All"
                        })]
                    })
                },
                H = e => {
                    let {
                        children: t,
                        page: r,
                        productCount: s,
                        monthsParam: l,
                        filters: u,
                        sort: h,
                        sortOptions: v,
                        availableFilters: m,
                        searchParams: _,
                        marketSeoName: g,
                        filterMap: f,
                        authCookie: w,
                        marketReviewCount: x
                    } = e, [j, b] = (0, a.useOptimistic)(h, (e, t) => t), y = { ..._,
                        filters: JSON.stringify({
                            companySize: [],
                            industry: [],
                            deploymentRegion: [],
                            vendors: []
                        })
                    }, [N, C] = (0, a.useOptimistic)(y, (e, t) => t), [k, S] = (0, a.useOptimistic)(r, (e, t) => t), R = j !== h, E = !R && a.Children.count(t) < s, M = p();
                    return (0, a.useEffect)(() => {
                        let e = new AbortController,
                            t = setTimeout(() => Z(g, w, e.signal).catch(t => {
                                if (e.signal.aborted) return
                            }), 500);
                        return () => {
                            window.clearTimeout(t), e.abort()
                        }
                    }, []), (0, n.jsx)("section", {
                        className: c().section,
                        "aria-label": "Products and Services to review",
                        children: (0, n.jsxs)("div", {
                            role: "none",
                            className: c().sectionContent,
                            children: [(0, n.jsx)("h2", {
                                className: i().productHeading,
                                children: "Product Listings"
                            }), (0, n.jsxs)("div", {
                                role: "none",
                                className: "".concat(i().tabPanel),
                                children: [(0, n.jsx)(P, {
                                    className: "".concat(i().filters),
                                    monthsParam: l,
                                    filters: u,
                                    availableFilters: m,
                                    marketReviewCount: x
                                }), (0, n.jsx)("div", {
                                    className: i().resultCountIndicator,
                                    "aria-label": "Result Count",
                                    children: R || "number" != typeof s ? null : "Products 1 - ".concat(a.Children.count(t), " of ").concat(s)
                                }), (0, n.jsx)(L.Z, {
                                    label: "Sort by",
                                    value: j,
                                    onChange: e => {
                                        b(e), (0, d.Z)({
                                            action: "Sort changed",
                                            category: "Market Page",
                                            value: v[e]
                                        })
                                    },
                                    className: i().sort,
                                    disabled: R,
                                    options: v
                                }), (0, n.jsx)("div", {
                                    className: i().filterpills,
                                    children: (0, n.jsx)(z, {
                                        filterMap: f,
                                        filters: u
                                    })
                                }), (0, n.jsx)("div", {
                                    className: i().products,
                                    role: "none",
                                    children: t
                                }), (0, n.jsx)("div", {
                                    className: i().morebutton,
                                    children: E && (0, n.jsxs)(o.default, {
                                        rel: "nofollow",
                                        className: "".concat(i().viewmore),
                                        scroll: !1,
                                        replace: !0,
                                        "aria-disabled": R,
                                        prefetch: !1,
                                        onClickCapture: e => {
                                            if (R) return e.preventDefault();
                                            (0, d.Z)({
                                                action: "Load New Page",
                                                category: "Market Page",
                                                value: r + 1
                                            }), (0, a.startTransition)(() => S(r + 1))
                                        },
                                        "aria-description": "Load more products",
                                        href: M({
                                            page: (r + 1).toString()
                                        }),
                                        children: ["View More Products (", s - a.Children.count(t), ")"]
                                    })
                                })]
                            })]
                        })
                    })
                }
        },
        96299: function(e, t, r) {
            "use strict";
            class n extends Error {
                constructor(e, t) {
                    super(e, t), this.name = "AssertionError"
                }
            }
            t.Z = (e, t, r) => {
                if (!t(e)) throw new n(r);
                return e
            }
        },
        71811: function(e, t, r) {
            "use strict";
            r.d(t, {
                EU: function() {
                    return l
                },
                EW: function() {
                    return n
                },
                H4: function() {
                    return d
                },
                H5: function() {
                    return i
                },
                I5: function() {
                    return o
                },
                N$: function() {
                    return c
                },
                zQ: function() {
                    return s
                }
            });
            let n = "https://static.gartner.com",
                a = e => {
                    for (let t in e) {
                        let r = new URL(e[t]).pathname;
                        if (r.length > 1 && r.endsWith("/")) throw Error("BasePath must not end with trailing slash")
                    }
                    return e
                },
                o = a({
                    prod: "https://www.gartner.com",
                    dev: "https://gcom.pdodev.aws.gartner.com",
                    devb: "https://gcom.pdodevb.aws.gartner.com",
                    qa: "https://gcom.pdoqa.aws.gartner.com",
                    local: "http://developer.fe.gartner.com:3000",
                    test: "http://developer.fe.gartner.com:3000"
                }).prod,
                s = a({
                    prod: "http://gpi-reviews-api/reviews-api",
                    dev: "http://gpi-reviews-api/reviews-api",
                    devb: "http://gpi-reviews-api/reviews-api",
                    qa: "http://gpi-reviews-api/reviews-api",
                    local: "http://developer.fe.gartner.com:3000/reviews/api2-proxy",
                    test: "http://developer.fe.gartner.com:3000/reviews/api2-proxy"
                }).prod,
                i = a({
                    prod: "https://external.pi.gpi.aws.gartner.com/reviews-api",
                    dev: "https://external.pi.gpidev.aws.gartner.com/reviews-api",
                    devb: "https://external.pi.gpidevb.aws.gartner.com/reviews-api",
                    qa: "https://external.pi.gpiqa.aws.gartner.com/reviews-api",
                    local: "http://developer.fe.gartner.com:3000/reviews/api2-proxy",
                    test: "http://developer.fe.gartner.com:3000/reviews/api2-proxy"
                }).prod,
                l = a({
                    prod: "http://gpi-user-api/user-api",
                    dev: "http://gpi-user-api/user-api",
                    devb: "http://gpi-user-api/user-api",
                    qa: "http://gpi-user-api/user-api",
                    local: "http://developer.fe.gartner.com:3000/reviews/user-proxy",
                    test: "http://developer.fe.gartner.com:3000/reviews/user-proxy"
                }).prod,
                c = a({
                    prod: "http://gpi-survey-api/survey-api",
                    dev: "http://gpi-survey-api/survey-api",
                    devb: "http://gpi-survey-api/survey-api",
                    qa: "http://gpi-survey-api/survey-api",
                    local: "http://developer.fe.gartner.com:3000/reviews/survey-proxy",
                    test: "http://developer.fe.gartner.com:3000/reviews/survey-proxy"
                }).prod,
                d = a({
                    prod: "https://internal.pi.gpi.aws.gartner.com/pi/admin/api",
                    dev: "https://internal.pi.gpidev.aws.gartner.com/pi/admin/api",
                    devb: "https://internal.pi.gpidev.aws.gartner.com/pi/admin/api",
                    qa: "https://internal.pi.gpiqa.aws.gartner.com/pi/admin/api",
                    local: "http://developer.fe.gartner.com:3000/reviews/admin-proxy",
                    test: "http://developer.fe.gartner.com:3000/reviews/admin-proxy"
                }).prod
        },
        47904: function(e, t) {
            "use strict";
            t.Z = e => {
                let {
                    category: t,
                    action: r,
                    label: n,
                    value: a
                } = e;
                window.dataLayer.push({
                    event: "gaEvent",
                    gaEventCategory: t,
                    gaEventAction: r,
                    gaEventLabel: n,
                    gaEventValue: a,
                    gaEventNonInteraction: !0
                })
            }
        },
        91454: function(e, t, r) {
            "use strict";
            r.d(t, {
                e4: function() {
                    return s
                }
            });
            var n = r(71811);
            class a extends Error {
                constructor(e, t) {
                    super(e), Object.defineProperty(this, "response", {
                        value: t,
                        writable: !1,
                        enumerable: !1
                    })
                }
            }
            let o = (e, t) => {
                    let r = async (t, r) => {
                        let n = new URL("".concat(e).concat(t));
                        if ("" !== n.search) throw Error("Invariant Violation, pathname must not have search params, use init.searchParams");
                        n.search = new URLSearchParams(null == r ? void 0 : r.searchParams).toString();
                        let o = await fetch(n, r);
                        if (!o.ok) {
                            var s;
                            let e = new a("".concat(null !== (s = null == r ? void 0 : r.method) && void 0 !== s ? s : "GET", " ").concat(n, " (").concat(o.status, ")"), o);
                            throw console.error(e.message), e
                        }
                        return o
                    };
                    return r.json = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = await r(e, t);
                        return await n.json()
                    }, Object.defineProperty(r, "name", {
                        value: t,
                        writable: !1
                    }), r
                },
                s = o(n.I5, "gpiFetch");
            o(n.zQ, "gpiInternalReviewsFetch"), o(n.H5, "gpiExternalReviewsFetch"), o(n.EU, "gpiInternalUserFetch"), o(n.N$, "gpiInternalSurveyFetch"), o(n.H4, "gpiInternalAdminFetch")
        },
        71172: function(e, t, r) {
            "use strict";
            var n = r(57437);
            r(2265);
            var a = r(98338),
                o = r.n(a),
                s = r(72935),
                i = r.n(s),
                l = r(61994),
                c = r(21873);
            t.default = e => {
                let {
                    heading: t,
                    description: r,
                    linkText: a
                } = e;
                return (0, n.jsxs)("section", {
                    className: i().section,
                    children: [(0, n.jsxs)("div", {
                        role: "none",
                        className: (0, l.Z)(i().sectionContent, o().content),
                        children: [(0, n.jsx)("h2", {
                            className: o().heading,
                            children: t
                        }), (0, n.jsx)(c.Z, {
                            className: o().description,
                            text: r,
                            maxWords: 50
                        }), (0, n.jsx)("div", {
                            role: "none",
                            children: (0, n.jsx)("a", {
                                href: "/reviews/faq#rq20",
                                className: o().faqLink,
                                children: a
                            })
                        })]
                    }), (0, n.jsx)("script", {
                        id: "faq-structured-data",
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                mainEntity: {
                                    "@type": "Question",
                                    name: t,
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: r
                                    }
                                }
                            })
                        }
                    })]
                })
            }
        },
        74071: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return d
                }
            });
            var n = r(57437),
                a = r(2265),
                o = r(27648),
                s = r(74400),
                i = r.n(s),
                l = r(96299),
                c = r(10440),
                d = e => {
                    let {
                        value: t,
                        label: r,
                        options: s,
                        disabled: d,
                        onChange: u,
                        className: p
                    } = e, h = (0, a.useId)(), v = (0, a.useId)(), m = Object.entries(s), [_, g] = (0, a.useState)(!1), f = (0, a.useRef)(null);
                    return (0, a.useEffect)(() => {
                        if (!_) return;
                        let e = f.current,
                            t = t => {
                                let r = (0, l.Z)(t.target, e => e instanceof Element, "expected evt.target to be an Element");
                                e.contains(r) || g(!1)
                            };
                        return document.addEventListener("click", t, {
                            capture: !0
                        }), document.addEventListener("focus", t, {
                            capture: !0
                        }), () => {
                            document.removeEventListener("focus", t), document.removeEventListener("click", t)
                        }
                    }, [_]), (0, n.jsxs)("div", {
                        role: "none",
                        className: "".concat(i().dropdownTrigger, " ").concat(p),
                        children: [(0, n.jsx)("div", {
                            className: i().label,
                            id: h,
                            children: r
                        }), (0, n.jsxs)("div", {
                            role: "none",
                            ref: f,
                            className: "".concat(i().dropdownFloatContainer, " ").concat(_ ? i().expanded : ""),
                            children: [(0, n.jsxs)("button", {
                                role: "combobox",
                                className: i().button,
                                "aria-disabled": d,
                                "aria-labelledby": h,
                                "aria-expanded": _,
                                "aria-controls": v,
                                "aria-activedescendant": "".concat(v, ":").concat(t),
                                "aria-haspopup": "listbox",
                                onClick: () => !d && g(e => !e),
                                children: [(0, n.jsx)("div", {
                                    role: "none",
                                    className: i().current,
                                    children: s[t].label
                                }), (0, n.jsx)(c.Z, {
                                    role: "none",
                                    size: 24,
                                    className: i().icon
                                })]
                            }), (0, n.jsx)("div", {
                                id: v,
                                "aria-labelledby": h,
                                className: "".concat(i().listbox, " ").concat(_ ? i().expanded : ""),
                                role: "listbox",
                                children: m.map(e => {
                                    let [r, {
                                        label: s,
                                        href: l
                                    }] = e;
                                    return (0, n.jsx)(o.default, {
                                        rel: "nofollow",
                                        id: "".concat(v, ":").concat(r),
                                        href: l,
                                        prefetch: !1,
                                        scroll: !1,
                                        className: i().option,
                                        role: "option",
                                        "aria-selected": r === t,
                                        "aria-disabled": d,
                                        onClickCapture: () => {
                                            g(!1), (0, a.startTransition)(() => u(r))
                                        },
                                        children: s
                                    }, s)
                                })
                            })]
                        })]
                    })
                }
        },
        79443: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = r(57437),
                a = r(2265),
                o = r(33145),
                s = {
                    src: "https://reviews.static.gartner.com/_next/static/media/product-logo-placeholder.2a473811.svg",
                    height: 55,
                    width: 55,
                    blurWidth: 0,
                    blurHeight: 0
                },
                i = e => {
                    let {
                        product: t,
                        size: r,
                        className: i
                    } = e, l = (0, a.useRef)(null);
                    return (0, a.useLayoutEffect)(() => {
                        let e = l.current,
                            t = () => {
                                e.setAttribute("src", s.src)
                            },
                            r = () => {
                                e.removeAttribute("srcset"), e.style.removeProperty("visibility")
                            };
                        return e.addEventListener("error", t), e.addEventListener("load", r), e.complete && e.dispatchEvent(new Event(e.naturalHeight > 0 ? "load" : "error")), () => {
                            e.removeEventListener("error", t), e.removeEventListener("load", r)
                        }
                    }, [t.logoUrl]), (0, n.jsx)(o.default, {
                        className: i,
                        ref: l,
                        unoptimized: !0,
                        width: r,
                        height: r,
                        style: {
                            objectFit: "contain",
                            visibility: "hidden"
                        },
                        src: t.logoUrl ? t.logoUrl : s,
                        alt: "Logo of ".concat(t.name)
                    }, t.logoUrl)
                }
        },
        27789: function(e, t, r) {
            "use strict";
            var n = r(57437);
            r(2265), t.Z = function(e) {
                let {
                    size: t = 24,
                    ...r
                } = e;
                return (0, n.jsx)("svg", { ...r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: t,
                    fill: "currentColor",
                    viewBox: "0 -960 960 960",
                    children: (0, n.jsx)("path", {
                        d: "M252-176l-74-76 227-228-227-230 74-76 229 230 227-230 74 76-227 230 227 228-74 76-227-230-229 230z"
                    })
                })
            }
        },
        58964: function(e, t, r) {
            "use strict";
            var n = r(57437);
            r(2265), t.Z = function(e) {
                let {
                    size: t = 24,
                    ...r
                } = e;
                return (0, n.jsx)("svg", { ...r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: t,
                    fill: "currentColor",
                    viewBox: "0 -960 960 960",
                    children: (0, n.jsx)("path", {
                        d: "M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z"
                    })
                })
            }
        },
        10440: function(e, t, r) {
            "use strict";
            var n = r(57437);
            r(2265), t.Z = function(e) {
                let {
                    size: t = 24,
                    ...r
                } = e;
                return (0, n.jsx)("svg", { ...r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: t,
                    fill: "currentColor",
                    viewBox: "0 -960 960 960",
                    children: (0, n.jsx)("path", {
                        d: "M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
                    })
                })
            }
        },
        21873: function(e, t, r) {
            "use strict";
            var n = r(57437),
                a = r(2265),
                o = r(25479),
                s = r.n(o),
                i = r(61994);
            t.Z = e => {
                let {
                    text: t,
                    maxWords: r,
                    className: o
                } = e, [l, c] = (0, a.useState)(!1), d = (0, a.useMemo)(() => t.split(" "), [t]), u = d.length > r, p = (0, a.useMemo)(() => "".concat(d.slice(0, r).join(" "), "..."), [d, r]);
                return (0, n.jsxs)("div", {
                    className: (0, i.Z)(s().truncatedText, o),
                    children: [(0, n.jsx)("span", {
                        children: !u || l ? t : p
                    }), u ? (0, n.jsx)("button", {
                        onClick: () => c(e => !e),
                        className: s().fullTextToggle,
                        children: l ? "Show Less" : "Show More"
                    }) : null]
                })
            }
        },
        11147: function(e) {
            e.exports = {
                filterpill: "filter-pills_filterpill__KUR5B",
                close: "filter-pills_close__aSB6w"
            }
        },
        60865: function(e) {
            e.exports = {
                pills: "filters_pills__2iQUi",
                clear: "filters_clear__ZS5j_"
            }
        },
        45952: function(e) {
            e.exports = {
                heading: "collapsible-filter_heading__wsoPm",
                collapsed: "collapsible-filter_collapsed__IBQEC",
                chevron: "collapsible-filter_chevron__cZ5gP",
                showMoreLess: "collapsible-filter_showMoreLess__nZnkH",
                checkboxGroup: "collapsible-filter_checkboxGroup__AUss2",
                expanding: "collapsible-filter_expanding__z42sg",
                expand: "collapsible-filter_expand__qDaxM",
                collapsing: "collapsible-filter_collapsing__FBD6z",
                collapse: "collapsible-filter_collapse__czSho",
                link: "collapsible-filter_link__tV_r_",
                icon: "collapsible-filter_icon__z1tQs"
            }
        },
        18663: function(e) {
            e.exports = {
                filterSection: "filter-sidebar_filterSection__tB2P3",
                twelveMonthSwitch: "filter-sidebar_twelveMonthSwitch__nh0Rq",
                filterTitle: "filter-sidebar_filterTitle__3OL3R",
                filterHeader: "filter-sidebar_filterHeader__1dVVe",
                filterToggleButton: "filter-sidebar_filterToggleButton__20ZJh",
                closeDrawerButton: "filter-sidebar_closeDrawerButton__F0iGl",
                filterBackdrop: "filter-sidebar_filterBackdrop__SNP3Y",
                filterDrawer: "filter-sidebar_filterDrawer__BHRVj",
                openedDrawer: "filter-sidebar_openedDrawer__LgoPZ"
            }
        },
        46007: function(e) {
            e.exports = {
                productCard: "product-card-alternate_productCard__NXJ2T",
                logo: "product-card-alternate_logo__gRiy4",
                product: "product-card-alternate_product__W55Fx",
                name: "product-card-alternate_name__Ya_5A",
                rating: "product-card-alternate_rating__v37GM",
                starRating: "product-card-alternate_starRating__AmcEY",
                writeAReviewLink: "product-card-alternate_writeAReviewLink__ZjqtV",
                countLabel: "product-card-alternate_countLabel__9JNLb"
            }
        },
        36164: function(e) {
            e.exports = {
                productCard: "product-card_productCard__ycxaH",
                content: "product-card_content__xuXh7",
                ratings: "product-card_ratings__kDL2V",
                titles: "product-card_titles__5woon",
                showMore: "product-card_showMore__W7IqJ",
                header: "product-card_header__KqXhv",
                tabs: "product-card_tabs__yOl0A",
                tab: "product-card_tab__VNOQM",
                moreContent: "product-card_moreContent__1_T3V",
                subsectionTitle: "product-card_subsectionTitle__eJB3d",
                subsection: "product-card_subsection__F7lSz",
                readmore: "product-card_readmore__9Wl8l",
                reviews: "product-card_reviews__ZqSnI",
                reviewItem: "product-card_reviewItem__HdDY_",
                cchoiceRow: "product-card_cchoiceRow__wb2Xa",
                cchoice: "product-card_cchoice__yf87e",
                fullSummaryToggle: "product-card_fullSummaryToggle__ysWYP",
                summaryContainer: "product-card_summaryContainer__98rsW",
                writeAReviewLink: "product-card_writeAReviewLink__s4N59",
                logo: "product-card_logo__XjXPQ",
                productHeader: "product-card_productHeader__kcYiF",
                productTitle: "product-card_productTitle__Q1UiA",
                vendor: "product-card_vendor__cxPip",
                rating: "product-card_rating__FxMfl",
                logoContainer: "product-card_logoContainer__ntJci",
                ratingsCount: "product-card_ratingsCount__pj7eB",
                alternateProduct: "product-card_alternateProduct__SVIVu",
                cards: "product-card_cards__NEMjL"
            }
        },
        38391: function(e) {
            e.exports = {
                productHeading: "products-section_productHeading__hQMum",
                tabPanel: "products-section_tabPanel__Dg6KW",
                filters: "products-section_filters__0JOUx",
                products: "products-section_products__l18WQ",
                resultCountIndicator: "products-section_resultCountIndicator__Fm_DB",
                sort: "products-section_sort__xXoPL",
                filterpills: "products-section_filterpills__hvEOb",
                morebutton: "products-section_morebutton__qFSAc",
                navigation: "products-section_navigation__0CJ99",
                categoryPanel: "products-section_categoryPanel__rGWPV",
                title: "products-section_title__L5Af9",
                mobileCategories: "products-section_mobileCategories__x7thy",
                topBar: "products-section_topBar__I3R2L",
                category: "products-section_category__5JVCs",
                buttonLink: "products-section_buttonLink__sLL05",
                buttonBar: "products-section_buttonBar__TJ_Li",
                productsResults: "products-section_productsResults__5rgIq",
                viewmore: "products-section_viewmore__B5m6J"
            }
        },
        42952: function(e) {
            e.exports = {
                histogram: "ratings-histogram_histogram__jGoWZ",
                desc: "ratings-histogram_desc__EZBba",
                val: "ratings-histogram_val__lMSXP",
                bar: "ratings-histogram_bar__Ny2FA",
                bluebar: "ratings-histogram_bluebar__Ni_e8"
            }
        },
        9573: function(e) {
            e.exports = {
                toggleSwitch: "switch-indicator_toggleSwitch__LpJ9A",
                track: "switch-indicator_track__ZXDS6",
                checked: "switch-indicator_checked__tRzQt",
                base: "switch-indicator_base__xnT7l"
            }
        },
        72935: function(e) {
            e.exports = {
                section: "shared-layout_section__3b61m",
                sectionContent: "shared-layout_sectionContent__3Vwkd"
            }
        },
        98338: function(e) {
            e.exports = {
                content: "overview_content__OHUpQ",
                heading: "overview_heading__WPHw9",
                description: "overview_description__PQHWo",
                fullSummaryToggle: "overview_fullSummaryToggle__6UX0o",
                faqLink: "overview_faqLink___1QNR"
            }
        },
        80527: function(e) {
            e.exports = {
                researchSection: "research-section_researchSection__gZETx",
                heading: "research-section_heading__H6hyG",
                linkList: "research-section_linkList__o58oQ",
                linkColum: "research-section_linkColum__8__rV",
                link: "research-section_link__DD56l"
            }
        },
        70714: function(e) {
            e.exports = {
                trendingSection: "trending-section_trendingSection__WTkwv",
                heading: "trending-section_heading__NHQIg",
                linkList: "trending-section_linkList__ljqjh",
                link: "trending-section_link__dTrX9"
            }
        },
        74400: function(e) {
            e.exports = {
                dropdownFloatContainer: "dropdown-menu_dropdownFloatContainer__WVOZ_",
                expanded: "dropdown-menu_expanded__O7nb9",
                dropdownTrigger: "dropdown-menu_dropdownTrigger__c5rkC",
                listbox: "dropdown-menu_listbox___AJuW",
                label: "dropdown-menu_label__xwoTP",
                option: "dropdown-menu_option__E6IpH",
                button: "dropdown-menu_button__FtET4",
                current: "dropdown-menu_current___UGBz",
                icon: "dropdown-menu_icon__rBGGP"
            }
        },
        25479: function(e) {
            e.exports = {
                fullTextToggle: "truncated-text_fullTextToggle__3_gmx",
                truncatedText: "truncated-text_truncatedText__Yttoh"
            }
        }
    },
    function(e) {
        e.O(0, [7593, 7033, 5878, 7709, 2971, 2117, 1744], function() {
            return e(e.s = 49758)
        }), _N_E = e.O()
    }
]);