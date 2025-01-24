! function() {
    "use strict";
    var e, t, n, r, o, c, i, u, a, f, d, s, l = {},
        b = {};

    function p(e) {
        var t = b[e];
        if (void 0 !== t) return t.exports;
        var n = b[e] = {
                id: e,
                loaded: !1,
                exports: {}
            },
            r = !0;
        try {
            l[e].call(n.exports, n, n.exports, p), r = !1
        } finally {
            r && delete b[e]
        }
        return n.loaded = !0, n.exports
    }
    p.m = l, e = [], p.O = function(t, n, r, o) {
        if (n) {
            o = o || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
            e[c] = [n, r, o];
            return
        }
        for (var i = 1 / 0, c = 0; c < e.length; c++) {
            for (var n = e[c][0], r = e[c][1], o = e[c][2], u = !0, a = 0; a < n.length; a++) i >= o && Object.keys(p.O).every(function(e) {
                return p.O[e](n[a])
            }) ? n.splice(a--, 1) : (u = !1, o < i && (i = o));
            if (u) {
                e.splice(c--, 1);
                var f = r();
                void 0 !== f && (t = f)
            }
        }
        return t
    }, p.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return p.d(t, {
            a: t
        }), t
    }, n = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    } : function(e) {
        return e.__proto__
    }, p.t = function(e, r) {
        if (1 & r && (e = this(e)), 8 & r || "object" == typeof e && e && (4 & r && e.__esModule || 16 & r && "function" == typeof e.then)) return e;
        var o = Object.create(null);
        p.r(o);
        var c = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var i = 2 & r && e;
            "object" == typeof i && !~t.indexOf(i); i = n(i)) Object.getOwnPropertyNames(i).forEach(function(t) {
            c[t] = function() {
                return e[t]
            }
        });
        return c.default = function() {
            return e
        }, p.d(o, c), o
    }, p.d = function(e, t) {
        for (var n in t) p.o(t, n) && !p.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, p.f = {}, p.e = function(e) {
        return Promise.all(Object.keys(p.f).reduce(function(t, n) {
            return p.f[n](e, t), t
        }, []))
    }, p.u = function(e) {
        return 1646 === e ? "static/chunks/1646-48ea7d3ddd3ad6f0.js" : 8038 === e ? "static/chunks/7ce798d6-6f49095c2056e431.js" : 6990 === e ? "static/chunks/13b76428-62a6e4bbed6f1919.js" : 8003 === e ? "static/chunks/8003-cbab282c280a7376.js" : 2717 === e ? "static/chunks/2717-10c9eee49684a107.js" : 4732 === e ? "static/chunks/4732-1af8215c7e981ac8.js" : 917 === e ? "static/chunks/917-7684b2b14424d499.js" : "static/chunks/" + (1815 === e ? "99fd8b2c" : e) + "." + ({
            348: "8d2059178fb1f594",
            1743: "882cc94f9c9db6fc",
            1815: "114d6b8524740d32",
            2391: "815192d1e3aa3401",
            4093: "c69d508db78ef0cb",
            4450: "1cc82f1c4ce23cad",
            5302: "88703e6a0f3cd1ca",
            5609: "8a561e3b048e60ed",
            5677: "a11a4251bff64e02",
            5771: "7b222dd93f8dd141",
            6178: "c4b7d23e47f7eb35",
            6179: "bdd4038bf0c3d2c7",
            6306: "82baf20cf3c93794",
            6648: "fa36433cd4b65659",
            9872: "ed6bb65fb95a6447"
        })[e] + ".js"
    }, p.miniCssF = function(e) {
        return "static/css/" + ({
            348: "758594dfe2e3db28",
            1646: "1496f72990cda007",
            4093: "298deda5b5d6707e",
            5677: "74c2cdad091fb875",
            6178: "ebbdba8f9d98f2e9",
            6179: "ee123fa79ceb8ad6",
            6306: "99d861d2b85168eb",
            6648: "79633b39b45d200b",
            9872: "0fa421bc1238558b"
        })[e] + ".css"
    }, p.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), p.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r = {}, o = "_N_E:", p.l = function(e, t, n, c) {
        if (r[e]) {
            r[e].push(t);
            return
        }
        if (void 0 !== n)
            for (var i, u, a = document.getElementsByTagName("script"), f = 0; f < a.length; f++) {
                var d = a[f];
                if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == o + n) {
                    i = d;
                    break
                }
            }
        i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, p.nc && i.setAttribute("nonce", p.nc), i.setAttribute("data-webpack", o + n), i.src = p.tu(e), 0 === i.src.indexOf(window.location.origin + "/") || (i.crossOrigin = "anonymous")), r[e] = [t];
        var s = function(t, n) {
                i.onerror = i.onload = null, clearTimeout(l);
                var o = r[e];
                if (delete r[e], i.parentNode && i.parentNode.removeChild(i), o && o.forEach(function(e) {
                        return e(n)
                    }), t) return t(n)
            },
            l = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: i
            }), 12e4);
        i.onerror = s.bind(null, i.onerror), i.onload = s.bind(null, i.onload), u && document.head.appendChild(i)
    }, p.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, p.nmd = function(e) {
        return e.paths = [], e.children || (e.children = []), e
    }, p.tt = function() {
        return void 0 === c && (c = {
            createScriptURL: function(e) {
                return e
            }
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (c = trustedTypes.createPolicy("nextjs#bundler", c))), c
    }, p.tu = function(e) {
        return p.tt().createScriptURL(e)
    }, p.p = "https://reviews.static.gartner.com/_next/", i = function(e, t, n, r) {
        var o = document.createElement("link");
        return o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = function(c) {
            if (o.onerror = o.onload = null, "load" === c.type) n();
            else {
                var i = c && ("load" === c.type ? "missing" : c.type),
                    u = c && c.target && c.target.href || t,
                    a = Error("Loading CSS chunk " + e + " failed.\n(" + u + ")");
                a.code = "CSS_CHUNK_LOAD_FAILED", a.type = i, a.request = u, o.parentNode.removeChild(o), r(a)
            }
        }, o.href = t, 0 !== o.href.indexOf(window.location.origin + "/") && (o.crossOrigin = "anonymous"), document.head.appendChild(o), o
    }, u = function(e, t) {
        for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
            var o = n[r],
                c = o.getAttribute("data-href") || o.getAttribute("href");
            if ("stylesheet" === o.rel && (c === e || c === t)) return o
        }
        for (var i = document.getElementsByTagName("style"), r = 0; r < i.length; r++) {
            var o = i[r],
                c = o.getAttribute("data-href");
            if (c === e || c === t) return o
        }
    }, a = {
        2272: 0
    }, p.f.miniCss = function(e, t) {
        a[e] ? t.push(a[e]) : 0 !== a[e] && ({
            348: 1,
            1646: 1,
            4093: 1,
            5677: 1,
            6178: 1,
            6179: 1,
            6306: 1,
            6648: 1,
            9872: 1
        })[e] && t.push(a[e] = new Promise(function(t, n) {
            var r = p.miniCssF(e),
                o = p.p + r;
            if (u(r, o)) return t();
            i(e, o, t, n)
        }).then(function() {
            a[e] = 0
        }, function(t) {
            throw delete a[e], t
        }))
    }, f = {
        2272: 0,
        5492: 0,
        1646: 0,
        2653: 0,
        6225: 0,
        627: 0,
        7033: 0,
        7593: 0,
        4792: 0,
        7146: 0,
        1526: 0,
        7987: 0,
        8241: 0,
        4335: 0,
        9362: 0,
        2743: 0,
        7214: 0,
        3792: 0,
        400: 0,
        1940: 0,
        8110: 0,
        283: 0,
        9857: 0,
        9294: 0,
        3446: 0,
        2025: 0,
        8484: 0,
        3076: 0,
        2170: 0,
        1813: 0,
        2314: 0,
        9967: 0,
        3299: 0,
        7698: 0
    }, p.f.j = function(e, t) {
        var n = p.o(f, e) ? f[e] : void 0;
        if (0 !== n) {
            if (n) t.push(n[2]);
            else if (/^(1(526|646|813|940)|2((65|74|8)3|025|170|272|314)|3(076|299|446|48|792)|4(00|093|335|792)|6(17[89]|225|27|306|648)|7(033|146|214|593|698|987)|8(110|241|484)|9(294|362|857|872|967)|5492|5677)$/.test(e)) f[e] = 0;
            else {
                var r = new Promise(function(t, r) {
                    n = f[e] = [t, r]
                });
                t.push(n[2] = r);
                var o = p.p + p.u(e),
                    c = Error();
                p.l(o, function(t) {
                    if (p.o(f, e) && (0 !== (n = f[e]) && (f[e] = void 0), n)) {
                        var r = t && ("load" === t.type ? "missing" : t.type),
                            o = t && t.target && t.target.src;
                        c.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")", c.name = "ChunkLoadError", c.type = r, c.request = o, n[1](c)
                    }
                }, "chunk-" + e, e)
            }
        }
    }, p.O.j = function(e) {
        return 0 === f[e]
    }, d = function(e, t) {
        var n, r, o = t[0],
            c = t[1],
            i = t[2],
            u = 0;
        if (o.some(function(e) {
                return 0 !== f[e]
            })) {
            for (n in c) p.o(c, n) && (p.m[n] = c[n]);
            if (i) var a = i(p)
        }
        for (e && e(t); u < o.length; u++) r = o[u], p.o(f, r) && f[r] && f[r][0](), f[r] = 0;
        return p.O(a)
    }, (s = self.webpackChunk_N_E = self.webpackChunk_N_E || []).forEach(d.bind(null, 0)), s.push = d.bind(null, s.push.bind(s))
}();