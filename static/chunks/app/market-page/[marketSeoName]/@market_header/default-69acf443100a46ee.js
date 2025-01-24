(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6646], {
        22818: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 68289)), Promise.resolve().then(r.t.bind(r, 34918, 23)), Promise.resolve().then(r.t.bind(r, 7865, 23)), Promise.resolve().then(r.t.bind(r, 91768, 23))
        },
        90442: function(e) {
            var t = {
                utf8: {
                    stringToBytes: function(e) {
                        return t.bin.stringToBytes(unescape(encodeURIComponent(e)))
                    },
                    bytesToString: function(e) {
                        return decodeURIComponent(escape(t.bin.bytesToString(e)))
                    }
                },
                bin: {
                    stringToBytes: function(e) {
                        for (var t = [], r = 0; r < e.length; r++) t.push(255 & e.charCodeAt(r));
                        return t
                    },
                    bytesToString: function(e) {
                        for (var t = [], r = 0; r < e.length; r++) t.push(String.fromCharCode(e[r]));
                        return t.join("")
                    }
                }
            };
            e.exports = t
        },
        79625: function(e) {
            var t, r;
            t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {
                rotl: function(e, t) {
                    return e << t | e >>> 32 - t
                },
                rotr: function(e, t) {
                    return e << 32 - t | e >>> t
                },
                endian: function(e) {
                    if (e.constructor == Number) return 16711935 & r.rotl(e, 8) | 4278255360 & r.rotl(e, 24);
                    for (var t = 0; t < e.length; t++) e[t] = r.endian(e[t]);
                    return e
                },
                randomBytes: function(e) {
                    for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                    return t
                },
                bytesToWords: function(e) {
                    for (var t = [], r = 0, n = 0; r < e.length; r++, n += 8) t[n >>> 5] |= e[r] << 24 - n % 32;
                    return t
                },
                wordsToBytes: function(e) {
                    for (var t = [], r = 0; r < 32 * e.length; r += 8) t.push(e[r >>> 5] >>> 24 - r % 32 & 255);
                    return t
                },
                bytesToHex: function(e) {
                    for (var t = [], r = 0; r < e.length; r++) t.push((e[r] >>> 4).toString(16)), t.push((15 & e[r]).toString(16));
                    return t.join("")
                },
                hexToBytes: function(e) {
                    for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));
                    return t
                },
                bytesToBase64: function(e) {
                    for (var r = [], n = 0; n < e.length; n += 3)
                        for (var o = e[n] << 16 | e[n + 1] << 8 | e[n + 2], a = 0; a < 4; a++) 8 * n + 6 * a <= 8 * e.length ? r.push(t.charAt(o >>> 6 * (3 - a) & 63)) : r.push("=");
                    return r.join("")
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/ig, "");
                    for (var r = [], n = 0, o = 0; n < e.length; o = ++n % 4) 0 != o && r.push((t.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(n)) >>> 6 - 2 * o);
                    return r
                }
            }, e.exports = r
        },
        29985: function(e) {
            function t(e) {
                return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
            e.exports = function(e) {
                return null != e && (t(e) || "function" == typeof e.readFloatLE && "function" == typeof e.slice && t(e.slice(0, 0)) || !!e._isBuffer)
            }
        },
        90684: function(e, t, r) {
            var n, o, a, i, s;
            n = r(79625), o = r(90442).utf8, a = r(29985), i = r(90442).bin, (s = function(e, t) {
                e.constructor == String ? e = t && "binary" === t.encoding ? i.stringToBytes(e) : o.stringToBytes(e) : a(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
                for (var r = n.bytesToWords(e), u = 8 * e.length, c = 1732584193, l = -271733879, p = -1732584194, d = 271733878, f = 0; f < r.length; f++) r[f] = (r[f] << 8 | r[f] >>> 24) & 16711935 | (r[f] << 24 | r[f] >>> 8) & 4278255360;
                r[u >>> 5] |= 128 << u % 32, r[(u + 64 >>> 9 << 4) + 14] = u;
                for (var h = s._ff, v = s._gg, g = s._hh, m = s._ii, f = 0; f < r.length; f += 16) {
                    var w = c,
                        y = l,
                        b = p,
                        _ = d;
                    c = h(c, l, p, d, r[f + 0], 7, -680876936), d = h(d, c, l, p, r[f + 1], 12, -389564586), p = h(p, d, c, l, r[f + 2], 17, 606105819), l = h(l, p, d, c, r[f + 3], 22, -1044525330), c = h(c, l, p, d, r[f + 4], 7, -176418897), d = h(d, c, l, p, r[f + 5], 12, 1200080426), p = h(p, d, c, l, r[f + 6], 17, -1473231341), l = h(l, p, d, c, r[f + 7], 22, -45705983), c = h(c, l, p, d, r[f + 8], 7, 1770035416), d = h(d, c, l, p, r[f + 9], 12, -1958414417), p = h(p, d, c, l, r[f + 10], 17, -42063), l = h(l, p, d, c, r[f + 11], 22, -1990404162), c = h(c, l, p, d, r[f + 12], 7, 1804603682), d = h(d, c, l, p, r[f + 13], 12, -40341101), p = h(p, d, c, l, r[f + 14], 17, -1502002290), l = h(l, p, d, c, r[f + 15], 22, 1236535329), c = v(c, l, p, d, r[f + 1], 5, -165796510), d = v(d, c, l, p, r[f + 6], 9, -1069501632), p = v(p, d, c, l, r[f + 11], 14, 643717713), l = v(l, p, d, c, r[f + 0], 20, -373897302), c = v(c, l, p, d, r[f + 5], 5, -701558691), d = v(d, c, l, p, r[f + 10], 9, 38016083), p = v(p, d, c, l, r[f + 15], 14, -660478335), l = v(l, p, d, c, r[f + 4], 20, -405537848), c = v(c, l, p, d, r[f + 9], 5, 568446438), d = v(d, c, l, p, r[f + 14], 9, -1019803690), p = v(p, d, c, l, r[f + 3], 14, -187363961), l = v(l, p, d, c, r[f + 8], 20, 1163531501), c = v(c, l, p, d, r[f + 13], 5, -1444681467), d = v(d, c, l, p, r[f + 2], 9, -51403784), p = v(p, d, c, l, r[f + 7], 14, 1735328473), l = v(l, p, d, c, r[f + 12], 20, -1926607734), c = g(c, l, p, d, r[f + 5], 4, -378558), d = g(d, c, l, p, r[f + 8], 11, -2022574463), p = g(p, d, c, l, r[f + 11], 16, 1839030562), l = g(l, p, d, c, r[f + 14], 23, -35309556), c = g(c, l, p, d, r[f + 1], 4, -1530992060), d = g(d, c, l, p, r[f + 4], 11, 1272893353), p = g(p, d, c, l, r[f + 7], 16, -155497632), l = g(l, p, d, c, r[f + 10], 23, -1094730640), c = g(c, l, p, d, r[f + 13], 4, 681279174), d = g(d, c, l, p, r[f + 0], 11, -358537222), p = g(p, d, c, l, r[f + 3], 16, -722521979), l = g(l, p, d, c, r[f + 6], 23, 76029189), c = g(c, l, p, d, r[f + 9], 4, -640364487), d = g(d, c, l, p, r[f + 12], 11, -421815835), p = g(p, d, c, l, r[f + 15], 16, 530742520), l = g(l, p, d, c, r[f + 2], 23, -995338651), c = m(c, l, p, d, r[f + 0], 6, -198630844), d = m(d, c, l, p, r[f + 7], 10, 1126891415), p = m(p, d, c, l, r[f + 14], 15, -1416354905), l = m(l, p, d, c, r[f + 5], 21, -57434055), c = m(c, l, p, d, r[f + 12], 6, 1700485571), d = m(d, c, l, p, r[f + 3], 10, -1894986606), p = m(p, d, c, l, r[f + 10], 15, -1051523), l = m(l, p, d, c, r[f + 1], 21, -2054922799), c = m(c, l, p, d, r[f + 8], 6, 1873313359), d = m(d, c, l, p, r[f + 15], 10, -30611744), p = m(p, d, c, l, r[f + 6], 15, -1560198380), l = m(l, p, d, c, r[f + 13], 21, 1309151649), c = m(c, l, p, d, r[f + 4], 6, -145523070), d = m(d, c, l, p, r[f + 11], 10, -1120210379), p = m(p, d, c, l, r[f + 2], 15, 718787259), l = m(l, p, d, c, r[f + 9], 21, -343485551), c = c + w >>> 0, l = l + y >>> 0, p = p + b >>> 0, d = d + _ >>> 0
                }
                return n.endian([c, l, p, d])
            })._ff = function(e, t, r, n, o, a, i) {
                var s = e + (t & r | ~t & n) + (o >>> 0) + i;
                return (s << a | s >>> 32 - a) + t
            }, s._gg = function(e, t, r, n, o, a, i) {
                var s = e + (t & n | r & ~n) + (o >>> 0) + i;
                return (s << a | s >>> 32 - a) + t
            }, s._hh = function(e, t, r, n, o, a, i) {
                var s = e + (t ^ r ^ n) + (o >>> 0) + i;
                return (s << a | s >>> 32 - a) + t
            }, s._ii = function(e, t, r, n, o, a, i) {
                var s = e + (r ^ (t | ~n)) + (o >>> 0) + i;
                return (s << a | s >>> 32 - a) + t
            }, s._blocksize = 16, s._digestsize = 16, e.exports = function(e, t) {
                if (null == e) throw Error("Illegal argument " + e);
                var r = n.wordsToBytes(s(e, t));
                return t && t.asBytes ? r : t && t.asString ? i.bytesToString(r) : n.bytesToHex(r)
            }
        },
        12119: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "$", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let n = r(83079);

            function o(e) {
                let {
                    createServerReference: t
                } = r(6671);
                return t(e, n.callServer)
            }
        },
        71811: function(e, t, r) {
            "use strict";
            r.d(t, {
                EU: function() {
                    return u
                },
                EW: function() {
                    return n
                },
                H4: function() {
                    return l
                },
                H5: function() {
                    return s
                },
                I5: function() {
                    return a
                },
                N$: function() {
                    return c
                },
                zQ: function() {
                    return i
                }
            });
            let n = "https://static.gartner.com",
                o = e => {
                    for (let t in e) {
                        let r = new URL(e[t]).pathname;
                        if (r.length > 1 && r.endsWith("/")) throw Error("BasePath must not end with trailing slash")
                    }
                    return e
                },
                a = o({
                    prod: "https://www.gartner.com",
                    dev: "https://gcom.pdodev.aws.gartner.com",
                    devb: "https://gcom.pdodevb.aws.gartner.com",
                    qa: "https://gcom.pdoqa.aws.gartner.com",
                    local: "http://developer.fe.gartner.com:3000",
                    test: "http://developer.fe.gartner.com:3000"
                }).prod,
                i = o({
                    prod: "http://gpi-reviews-api/reviews-api",
                    dev: "http://gpi-reviews-api/reviews-api",
                    devb: "http://gpi-reviews-api/reviews-api",
                    qa: "http://gpi-reviews-api/reviews-api",
                    local: "http://developer.fe.gartner.com:3000/reviews/api2-proxy",
                    test: "http://developer.fe.gartner.com:3000/reviews/api2-proxy"
                }).prod,
                s = o({
                    prod: "https://external.pi.gpi.aws.gartner.com/reviews-api",
                    dev: "https://external.pi.gpidev.aws.gartner.com/reviews-api",
                    devb: "https://external.pi.gpidevb.aws.gartner.com/reviews-api",
                    qa: "https://external.pi.gpiqa.aws.gartner.com/reviews-api",
                    local: "http://developer.fe.gartner.com:3000/reviews/api2-proxy",
                    test: "http://developer.fe.gartner.com:3000/reviews/api2-proxy"
                }).prod,
                u = o({
                    prod: "http://gpi-user-api/user-api",
                    dev: "http://gpi-user-api/user-api",
                    devb: "http://gpi-user-api/user-api",
                    qa: "http://gpi-user-api/user-api",
                    local: "http://developer.fe.gartner.com:3000/reviews/user-proxy",
                    test: "http://developer.fe.gartner.com:3000/reviews/user-proxy"
                }).prod,
                c = o({
                    prod: "http://gpi-survey-api/survey-api",
                    dev: "http://gpi-survey-api/survey-api",
                    devb: "http://gpi-survey-api/survey-api",
                    qa: "http://gpi-survey-api/survey-api",
                    local: "http://developer.fe.gartner.com:3000/reviews/survey-proxy",
                    test: "http://developer.fe.gartner.com:3000/reviews/survey-proxy"
                }).prod,
                l = o({
                    prod: "https://internal.pi.gpi.aws.gartner.com/pi/admin/api",
                    dev: "https://internal.pi.gpidev.aws.gartner.com/pi/admin/api",
                    devb: "https://internal.pi.gpidev.aws.gartner.com/pi/admin/api",
                    qa: "https://internal.pi.gpiqa.aws.gartner.com/pi/admin/api",
                    local: "http://developer.fe.gartner.com:3000/reviews/admin-proxy",
                    test: "http://developer.fe.gartner.com:3000/reviews/admin-proxy"
                }).prod
        },
        91454: function(e, t, r) {
            "use strict";
            r.d(t, {
                e4: function() {
                    return i
                }
            });
            var n = r(71811);
            class o extends Error {
                constructor(e, t) {
                    super(e), Object.defineProperty(this, "response", {
                        value: t,
                        writable: !1,
                        enumerable: !1
                    })
                }
            }
            let a = (e, t) => {
                    let r = async (t, r) => {
                        let n = new URL("".concat(e).concat(t));
                        if ("" !== n.search) throw Error("Invariant Violation, pathname must not have search params, use init.searchParams");
                        n.search = new URLSearchParams(null == r ? void 0 : r.searchParams).toString();
                        let a = await fetch(n, r);
                        if (!a.ok) {
                            var i;
                            let e = new o("".concat(null !== (i = null == r ? void 0 : r.method) && void 0 !== i ? i : "GET", " ").concat(n, " (").concat(a.status, ")"), a);
                            throw console.error(e.message), e
                        }
                        return a
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
                i = a(n.I5, "gpiFetch");
            a(n.zQ, "gpiInternalReviewsFetch"), a(n.H5, "gpiExternalReviewsFetch"), a(n.EU, "gpiInternalUserFetch"), a(n.N$, "gpiInternalSurveyFetch"), a(n.H4, "gpiInternalAdminFetch")
        },
        60753: function(e, t, r) {
            "use strict";
            r.d(t, {
                cX: function() {
                    return v
                },
                x$: function() {
                    return h
                }
            });
            var n = r(57437),
                o = r(2265),
                a = r(33284),
                i = r.n(a),
                s = r(27789),
                u = e => {
                    let {
                        activityType: t,
                        onResolve: r,
                        onReject: a
                    } = e, u = (0, o.useRef)(null), c = (0, o.useRef)(null), l = (0, o.useRef)(null), p = new URLSearchParams({
                        returnTo: window.location.toString(),
                        modal: "true",
                        activityType: t
                    });
                    return (0, o.useEffect)(() => {
                        let e = l.current,
                            t = t => {
                                if (t.source === e.contentWindow) {
                                    if ("LOGIN_SUCCESS" === t.data.message || "REGISTRATION_SUCCESS" === t.data.message) {
                                        let {
                                            state: e,
                                            code: n
                                        } = t.data.value;
                                        r({
                                            state: e,
                                            code: n
                                        })
                                    }
                                    "LINKEDIN_CLICK" === t.data.message && (window.location.replace(t.data.value.url), a(new DOMException("Login Interrupted")))
                                }
                            };
                        return window.addEventListener("message", t, !1), () => {
                            window.removeEventListener("message", t, !1)
                        }
                    }, [r]), (0, n.jsx)("div", {
                        className: i().overlay,
                        ref: u,
                        onClick: e => {
                            if (e.target === e.currentTarget) return a(new DOMException("Login Interrupted"))
                        },
                        children: (0, n.jsxs)("div", {
                            role: "dialog",
                            className: i().container,
                            ref: c,
                            children: [(0, n.jsx)("div", {
                                className: i().popupHead,
                                children: (0, n.jsx)(s.Z, {
                                    className: i().closeIcon,
                                    role: "button",
                                    "aria-label": "Close Login Form",
                                    onClick: () => {
                                        a(new DOMException("Login Interrupted"))
                                    }
                                })
                            }), (0, n.jsx)("iframe", {
                                ref: l,
                                id: "document-preview-iframe",
                                title: "Login",
                                scrolling: "yes",
                                src: "/reviews/auth/authorize?".concat(p.toString()),
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    border: "none"
                                }
                            })]
                        })
                    })
                },
                c = r(91454);
            r(83079);
            var l = (0, r(12119).$)("d0d15470e2ba5ab1cbbd081824cd6c25db83019a");
            let p = (0, o.createContext)(void 0),
                d = (0, o.createContext)(void 0),
                f = () => {
                    let e = (0, o.useContext)(p);
                    if (void 0 === e) throw Error("InvariantViolation: UserSessionContext.Provider not in tree");
                    return e
                },
                h = e => {
                    let {
                        activityType: t
                    } = e, r = f(), a = (0, o.useContext)(d), i = (0, o.useRef)(new Set), s = (0, o.useRef)(r);
                    s.current = r;
                    let p = (0, o.useRef)(t);
                    p.current = t, (0, o.useEffect)(() => {
                        "logged-in" === r.status && (i.current.forEach(e => e(r.data)), i.current.clear())
                    }, [r]);
                    let [h] = (0, o.useState)(() => async e => "logged-in" === s.current.status ? Promise.resolve(s.current.data) : new Promise((t, r) => {
                        null == e || e.addEventListener("abort", r), a((0, n.jsx)(u, {
                            activityType: p.current,
                            onReject: r,
                            onResolve: t
                        }))
                    }).finally(() => a(null)).then(t => (0, c.e4)("/reviews/auth/authorize-modal-completed", {
                        searchParams: t,
                        signal: e
                    })).then(() => l()).then(() => new Promise(e => i.current.add(e))));
                    return h
                },
                v = e => {
                    let {
                        value: t,
                        children: r
                    } = e, [a, i] = (0, o.useState)(null);
                    return (0, n.jsxs)(d.Provider, {
                        value: i,
                        children: [a, (0, n.jsx)(p.Provider, {
                            value: t,
                            children: r
                        })]
                    })
                }
        },
        68289: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return v
                }
            });
            var n = r(57437),
                o = r(60753),
                a = r(2265),
                i = r(99330),
                s = r.n(i),
                u = r(91454);
            let c = async (e, t) => {
                let r = {
                        token: {
                            "buying-guide": "kpMm6AEFhW"
                        }[e.type],
                        looseIdleBehavior: "true",
                        pathObj: JSON.stringify(e.query),
                        filename: e.filename,
                        loadsonpagescroll: "false"
                    },
                    n = await (0, u.e4)("/reviews/static-reviews/generate-pdf", {
                        searchParams: r,
                        signal: t
                    }),
                    o = await n.blob();
                return {
                    blob: o,
                    download: () => {
                        let t = document.createElement("a");
                        t.href = URL.createObjectURL(o), t.download = e.filename, t.click(), URL.revokeObjectURL(t.href)
                    }
                }
            };
            var l = r(90684),
                p = r.n(l),
                d = (e, t) => {
                    let r = {
                        elqFormName: "PEER_GB_YOY_UNV_SU",
                        elqSiteID: String(1849907385),
                        emailAddress: e.userData.userProfile.user.emailText,
                        country: e.userData.userProfile.user.countryCode,
                        engagementSource: "GCOM",
                        campaignName: e.campaign,
                        firstName: e.userData.userProfile.user.firstName,
                        lastName: e.userData.userProfile.user.lastName,
                        "URL-Hidden": window.location.href,
                        "MarketName-Hidden": e.marketName,
                        "VendorName-Hidden": "",
                        ActivityIdHidden: p()("Market-".concat(e.userData.userProfile.user.emailText)),
                        "ActivityType-Hidden": e.activityType
                    };
                    return (0, u.e4)("/reviews/eloqua/e/f2", {
                        signal: t,
                        method: "POST",
                        headers: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        body: new URLSearchParams(r).toString()
                    })
                },
                f = (e, t) => {
                    let r = {
                        url: window.location.href,
                        activityType: e.activityType,
                        pageType: e.pageType,
                        ref: "pi",
                        email: e.userData.userProfile.user.emailText,
                        dataMap: JSON.stringify({
                            markets: [e.marketSeoName],
                            vendors: null
                        })
                    };
                    return (0, u.e4)("/reviews/survey-proxy/reviews/api/activity", {
                        signal: t,
                        method: "POST",
                        headers: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        body: new URLSearchParams(r).toString()
                    })
                },
                h = r(19138),
                v = e => {
                    let {
                        marketSeoName: t,
                        marketName: r
                    } = e, [i, u] = (0, a.useState)({
                        status: "idle"
                    }), l = (0, o.x$)({
                        activityType: "download_pdf"
                    }), p = (0, h.p)();
                    return (0, a.useEffect)(() => {
                        if ("loading" === i.status) {
                            let e = new AbortController,
                                n = "Markets_".concat(r, ".pdf");
                            return l(e.signal).then(async o => {
                                let a = await c({
                                    type: "buying-guide",
                                    filename: n,
                                    query: {
                                        marketSeoName: t
                                    }
                                }, e.signal);
                                e.signal.aborted || (a.download(), d({
                                    userData: o,
                                    campaign: "Market PDF Email Capture",
                                    marketName: r,
                                    activityType: "Buying Guide PDF Email Capture"
                                }), f({
                                    userData: o,
                                    marketSeoName: t,
                                    pageType: "market",
                                    activityType: "PDF Download"
                                }))
                            }).then(() => {
                                u({
                                    status: "done"
                                })
                            }).catch(t => {
                                if (e.signal.aborted || t instanceof DOMException && "Login Interrupted" === t.message) {
                                    u({
                                        status: "idle"
                                    });
                                    return
                                }
                                p({
                                    content: "Unable to download the PDF. Try again.",
                                    type: "error"
                                }), u({
                                    status: "failed"
                                })
                            }), () => {
                                e.abort()
                            }
                        }
                        if ("failed" === i.status || "done" === i.status) {
                            let e = window.setTimeout(() => u({
                                status: "idle"
                            }), 2e3);
                            return () => {
                                window.clearInterval(e)
                            }
                        }
                    }, [i, t, r, l, p]), (0, n.jsx)("button", {
                        className: s().button,
                        "aria-busy": "loading" === i.status,
                        disabled: "idle" !== i.status,
                        onClick: () => u({
                            status: "loading"
                        }),
                        children: "loading" === i.status ? "Preparing PDF..." : "Download PDF"
                    })
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
        19138: function(e, t, r) {
            "use strict";
            r.d(t, {
                ToastProvider: function() {
                    return h
                },
                p: function() {
                    return f
                }
            });
            var n = r(57437),
                o = r(2265),
                a = r(58964),
                i = r(81928),
                s = r.n(i),
                u = r(61994);
            let c = {
                    error: function(e) {
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
                                d: "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"
                            })
                        })
                    }
                },
                l = {
                    error: "Error"
                };
            var p = e => {
                let t = c[e.type];
                return (0, o.useEffect)(() => {
                    let t = window.setTimeout(e.onClose, 1e4);
                    return () => window.clearTimeout(t)
                }, []), (0, n.jsxs)("div", {
                    className: (0, u.Z)(s().toast, s().error),
                    role: "alert",
                    children: [(0, n.jsx)(t, {
                        className: s().icon,
                        "aria-label": l[e.type]
                    }), (0, n.jsx)("div", {
                        children: e.content
                    }), (0, n.jsx)(a.Z, {
                        role: "button",
                        className: s().close,
                        onClick: e.onClose
                    })]
                })
            };
            let d = o.createContext(void 0),
                f = () => {
                    let {
                        addToast: e
                    } = (0, o.useContext)(d), t = (0, o.useRef)([]), [r] = (0, o.useState)({
                        addToast: r => {
                            let n = e(r);
                            t.current.push(n)
                        }
                    });
                    return (0, o.useEffect)(() => {
                        let e = t.current;
                        return () => e.forEach(e => e.onClose())
                    }, []), r.addToast
                },
                h = e => {
                    let [t, r] = (0, o.useState)(0), a = (0, o.useRef)([]), [i] = (0, o.useState)(() => {
                        let e = e => {
                            let t = a.current.findIndex(t => t.id === e); - 1 !== t && (a.current.splice(t, 1), r(e => e + 1))
                        };
                        return {
                            addToast: t => {
                                let n = Math.random().toString(36).slice(4),
                                    o = { ...t,
                                        id: n,
                                        onClose: () => e(n)
                                    };
                                return a.current.push(o), r(e => e + 1), o
                            },
                            removeToast: e
                        }
                    });
                    return (0, n.jsxs)(d.Provider, {
                        value: i,
                        children: [e.children, (0, n.jsx)("div", {
                            className: (0, u.Z)(s().toastContainer),
                            children: a.current.map(e => (0, n.jsx)(p, { ...e
                            }, e.id))
                        })]
                    })
                }
        },
        33284: function(e) {
            e.exports = {
                container: "login-popup_container__VDWVf",
                overlay: "login-popup_overlay__0EK8i",
                closeIcon: "login-popup_closeIcon__PPGYj",
                popupHead: "login-popup_popupHead__BymZM"
            }
        },
        7865: function(e) {
            e.exports = {
                breadcrumb: "breadcrumb_breadcrumb__5otph",
                previous: "breadcrumb_previous__UwBiS",
                current: "breadcrumb_current__1I67l",
                separator: "breadcrumb_separator__vbmnm"
            }
        },
        91768: function(e) {
            e.exports = {
                link: "buysmart-button_link__ng3g9",
                button: "buysmart-button_button__3oBCb"
            }
        },
        99330: function(e) {
            e.exports = {
                button: "download-pdf_button__S7cSK"
            }
        },
        34918: function(e) {
            e.exports = {
                headerContainer: "header_headerContainer___29SB",
                headerContent: "header_headerContent___okKf",
                breadcrumb: "header_breadcrumb__REcLJ",
                titleSection: "header_titleSection__3vUe9",
                ctaSection: "header_ctaSection__KFemC",
                headerTitle: "header_headerTitle__rd_Tf"
            }
        },
        81928: function(e) {
            e.exports = {
                toastContainer: "toast_toastContainer___IrRx",
                toast: "toast_toast__zhSlo",
                close: "toast_close__iwAGl",
                error: "toast_error__N3KOE",
                icon: "toast_icon__kx0pj"
            }
        },
        61994: function(e, t, r) {
            "use strict";

            function n() {
                for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)(e = arguments[r]) && (t = function e(t) {
                    var r, n, o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var a = t.length;
                            for (r = 0; r < a; r++) t[r] && (n = e(t[r])) && (o && (o += " "), o += n)
                        } else
                            for (n in t) t[n] && (o && (o += " "), o += n)
                    }
                    return o
                }(e)) && (n && (n += " "), n += t);
                return n
            }
            r.d(t, {
                W: function() {
                    return n
                }
            }), t.Z = n
        }
    },
    function(e) {
        e.O(0, [6225, 627, 2971, 2117, 1744], function() {
            return e(e.s = 22818)
        }), _N_E = e.O()
    }
]);