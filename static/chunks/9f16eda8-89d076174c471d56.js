(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8369], {
        83327: function(e, t, n) {
            e.exports = function(e) {
                var t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var a = t[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
                }
                return n.m = e, n.c = t, n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t || 4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var a in e) n.d(r, a, (function(t) {
                            return e[t]
                        }).bind(null, a));
                    return r
                }, n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 237)
            }([function(e, t) {
                e.exports = n(2265)
            }, , , , , , , , function(e, t, n) {
                "use strict";
                n.d(t, "a", function() {
                    return r
                }), n.d(t, "b", function() {
                    return a
                });
                var r = function() {
                    return (r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                };

                function a(e, t, n) {
                    if (n || 2 == arguments.length)
                        for (var r, a = 0, o = t.length; a < o; a++) !r && a in t || (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
                    return e.concat(r || Array.prototype.slice.call(t))
                }
                "function" == typeof SuppressedError && SuppressedError
            }, , , function(e, t, n) {
                "use strict";
                var r = n(24),
                    a = Object.prototype.toString;

                function o(e) {
                    return "[object Array]" === a.call(e)
                }

                function i(e) {
                    return void 0 === e
                }

                function s(e) {
                    return null !== e && "object" == typeof e
                }

                function l(e) {
                    return "[object Function]" === a.call(e)
                }

                function c(e, t) {
                    if (null != e) {
                        if ("object" != typeof e && (e = [e]), o(e))
                            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                        else
                            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
                    }
                }
                e.exports = {
                    isArray: o,
                    isArrayBuffer: function(e) {
                        return "[object ArrayBuffer]" === a.call(e)
                    },
                    isBuffer: function(e) {
                        return null !== e && !i(e) && null !== e.constructor && !i(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                    },
                    isFormData: function(e) {
                        return "undefined" != typeof FormData && e instanceof FormData
                    },
                    isArrayBufferView: function(e) {
                        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isNumber: function(e) {
                        return "number" == typeof e
                    },
                    isObject: s,
                    isUndefined: i,
                    isDate: function(e) {
                        return "[object Date]" === a.call(e)
                    },
                    isFile: function(e) {
                        return "[object File]" === a.call(e)
                    },
                    isBlob: function(e) {
                        return "[object Blob]" === a.call(e)
                    },
                    isFunction: l,
                    isStream: function(e) {
                        return s(e) && l(e.pipe)
                    },
                    isURLSearchParams: function(e) {
                        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                    },
                    isStandardBrowserEnv: function() {
                        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                    },
                    forEach: c,
                    merge: function e() {
                        var t = {};

                        function n(n, r) {
                            "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
                        }
                        for (var r = 0, a = arguments.length; r < a; r++) c(arguments[r], n);
                        return t
                    },
                    deepMerge: function e() {
                        var t = {};

                        function n(n, r) {
                            "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = "object" == typeof n ? e({}, n) : n
                        }
                        for (var r = 0, a = arguments.length; r < a; r++) c(arguments[r], n);
                        return t
                    },
                    extend: function(e, t, n) {
                        return c(t, function(t, a) {
                            e[a] = n && "function" == typeof t ? r(t, n) : t
                        }), e
                    },
                    trim: function(e) {
                        return e.replace(/^\s*/, "").replace(/\s*$/, "")
                    }
                }
            }, , , , function(e, t, n) {
                "use strict";
                n.d(t, "a", function() {
                    return s
                }), n.d(t, "b", function() {
                    return I
                }), n.d(t, "c", function() {
                    return U
                }), n.d(t, "d", function() {
                    return G
                }), n.d(t, "e", function() {
                    return D
                }), n.d(t, "f", function() {
                    return N
                }), n.d(t, "g", function() {
                    return j
                });
                var r = "-ms-",
                    a = "-moz-",
                    o = "-webkit-",
                    i = "comm",
                    s = "rule",
                    l = "decl",
                    c = "@keyframes",
                    u = Math.abs,
                    d = String.fromCharCode,
                    p = Object.assign;

                function f(e, t) {
                    return (e = t.exec(e)) ? e[0] : e
                }

                function h(e, t, n) {
                    return e.replace(t, n)
                }

                function m(e, t, n) {
                    return e.indexOf(t, n)
                }

                function g(e, t) {
                    return 0 | e.charCodeAt(t)
                }

                function v(e, t, n) {
                    return e.slice(t, n)
                }

                function y(e) {
                    return e.length
                }

                function b(e, t) {
                    return t.push(e), e
                }

                function w(e, t) {
                    return e.filter(function(e) {
                        return !f(e, t)
                    })
                }
                var x = 1,
                    C = 1,
                    E = 0,
                    k = 0,
                    _ = 0,
                    S = "";

                function R(e, t, n, r, a, o, i, s) {
                    return {
                        value: e,
                        root: t,
                        parent: n,
                        type: r,
                        props: a,
                        children: o,
                        line: x,
                        column: C,
                        length: i,
                        return: "",
                        siblings: s
                    }
                }

                function O(e, t) {
                    return p(R("", null, null, "", null, null, 0, e.siblings), e, {
                        length: -e.length
                    }, t)
                }

                function P(e) {
                    for (; e.root;) e = O(e.root, {
                        children: [e]
                    });
                    b(e, e.siblings)
                }

                function M() {
                    return _ = k < E ? g(S, k++) : 0, C++, 10 === _ && (C = 1, x++), _
                }

                function L() {
                    return g(S, k)
                }

                function A(e) {
                    switch (e) {
                        case 0:
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            return 5;
                        case 33:
                        case 43:
                        case 44:
                        case 47:
                        case 62:
                        case 64:
                        case 126:
                        case 59:
                        case 123:
                        case 125:
                            return 4;
                        case 58:
                            return 3;
                        case 34:
                        case 39:
                        case 40:
                        case 91:
                            return 2;
                        case 41:
                        case 93:
                            return 1
                    }
                    return 0
                }

                function H(e) {
                    var t, n;
                    return (t = k - 1, n = function e(t) {
                        for (; M();) switch (_) {
                            case t:
                                return k;
                            case 34:
                            case 39:
                                34 !== t && 39 !== t && e(_);
                                break;
                            case 40:
                                41 === t && e(t);
                                break;
                            case 92:
                                M()
                        }
                        return k
                    }(91 === e ? e + 2 : 40 === e ? e + 1 : e), v(S, t, n)).trim()
                }

                function I(e) {
                    var t, n;
                    return n = function e(t, n, r, a, o, s, l, c, p) {
                        for (var f, w = 0, E = 0, O = l, P = 0, I = 0, N = 0, j = 1, U = 1, D = 1, G = 0, B = "", Z = o, z = s, F = a, W = B; U;) switch (N = G, G = M()) {
                            case 40:
                                if (108 != N && 58 == g(W, O - 1)) {
                                    -1 != m(W += h(H(G), "&", "&\f"), "&\f", u(w ? c[w - 1] : 0)) && (D = -1);
                                    break
                                }
                            case 34:
                            case 39:
                            case 91:
                                W += H(G);
                                break;
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                W += function(e) {
                                    for (;
                                        (_ = L()) && _ < 33;) M();
                                    return A(e) > 2 || A(_) > 3 ? "" : " "
                                }(N);
                                break;
                            case 92:
                                W += function(e, t) {
                                    for (var n; --t && M() && !(_ < 48 || _ > 102 || _ > 57 && _ < 65 || _ > 70 && _ < 97););
                                    return n = k + (t < 6 && 32 == L() && 32 == M()), v(S, e, n)
                                }(k - 1, 7);
                                continue;
                            case 47:
                                switch (L()) {
                                    case 42:
                                    case 47:
                                        b(R(f = function(e, t) {
                                            for (; M() && e + _ !== 57 && (e + _ !== 84 || 47 !== L()););
                                            return "/*" + v(S, t, k - 1) + "*" + d(47 === e ? e : M())
                                        }(M(), k), n, r, i, d(_), v(f, 2, -2), 0, p), p);
                                        break;
                                    default:
                                        W += "/"
                                }
                                break;
                            case 123 * j:
                                c[w++] = y(W) * D;
                            case 125 * j:
                            case 59:
                            case 0:
                                switch (G) {
                                    case 0:
                                    case 125:
                                        U = 0;
                                    case 59 + E:
                                        -1 == D && (W = h(W, /\f/g, "")), I > 0 && y(W) - O && b(I > 32 ? V(W + ";", a, r, O - 1, p) : V(h(W, " ", "") + ";", a, r, O - 2, p), p);
                                        break;
                                    case 59:
                                        W += ";";
                                    default:
                                        if (b(F = T(W, n, r, w, E, o, c, B, Z = [], z = [], O, s), s), 123 === G) {
                                            if (0 === E) e(W, n, F, F, Z, s, O, c, z);
                                            else switch (99 === P && 110 === g(W, 3) ? 100 : P) {
                                                case 100:
                                                case 108:
                                                case 109:
                                                case 115:
                                                    e(t, F, F, a && b(T(t, F, F, 0, 0, o, c, B, o, Z = [], O, z), z), o, z, O, c, a ? Z : z);
                                                    break;
                                                default:
                                                    e(W, F, F, F, [""], z, 0, c, z)
                                            }
                                        }
                                }
                                w = E = I = 0, j = D = 1, B = W = "", O = l;
                                break;
                            case 58:
                                O = 1 + y(W), I = N;
                            default:
                                if (j < 1) {
                                    if (123 == G) --j;
                                    else if (125 == G && 0 == j++ && 125 == (_ = k > 0 ? g(S, --k) : 0, C--, 10 === _ && (C = 1, x--), _)) continue
                                }
                                switch (W += d(G), G * j) {
                                    case 38:
                                        D = E > 0 ? 1 : (W += "\f", -1);
                                        break;
                                    case 44:
                                        c[w++] = (y(W) - 1) * D, D = 1;
                                        break;
                                    case 64:
                                        45 === L() && (W += H(M())), P = L(), E = O = y(B = W += function(e) {
                                            for (; !A(L());) M();
                                            return v(S, e, k)
                                        }(k)), G++;
                                        break;
                                    case 45:
                                        45 === N && 2 == y(W) && (j = 0)
                                }
                        }
                        return s
                    }("", null, null, null, [""], (t = e, x = C = 1, E = y(S = t), k = 0, e = []), 0, [0], e), S = "", n
                }

                function T(e, t, n, r, a, o, i, l, c, d, p, f) {
                    for (var m = a - 1, g = 0 === a ? o : [""], y = g.length, b = 0, w = 0, x = 0; b < r; ++b)
                        for (var C = 0, E = v(e, m + 1, m = u(w = i[b])), k = e; C < y; ++C)(k = (w > 0 ? g[C] + " " + E : h(E, /&\f/g, g[C])).trim()) && (c[x++] = k);
                    return R(e, t, n, 0 === a ? s : l, c, d, p, f)
                }

                function V(e, t, n, r, a) {
                    return R(e, t, n, l, v(e, 0, r), v(e, r + 1, -1), r, a)
                }

                function N(e, t) {
                    for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
                    return n
                }

                function j(e, t, n, r) {
                    switch (e.type) {
                        case "@layer":
                            if (e.children.length) break;
                        case "@import":
                        case l:
                            return e.return = e.return || e.value;
                        case i:
                            return "";
                        case c:
                            return e.return = e.value + "{" + N(e.children, r) + "}";
                        case s:
                            if (!y(e.value = e.props.join(","))) return ""
                    }
                    return y(n = N(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
                }

                function U(e) {
                    var t = e.length;
                    return function(n, r, a, o) {
                        for (var i = "", s = 0; s < t; s++) i += e[s](n, r, a, o) || "";
                        return i
                    }
                }

                function D(e) {
                    return function(t) {
                        t.root || (t = t.return) && e(t)
                    }
                }

                function G(e, t, n, i) {
                    if (e.length > -1 && !e.return) switch (e.type) {
                        case l:
                            return void(e.return = function e(t, n, i) {
                                var s;
                                switch (s = n, 45 ^ g(t, 0) ? (((s << 2 ^ g(t, 0)) << 2 ^ g(t, 1)) << 2 ^ g(t, 2)) << 2 ^ g(t, 3) : 0) {
                                    case 5103:
                                        return o + "print-" + t + t;
                                    case 5737:
                                    case 4201:
                                    case 3177:
                                    case 3433:
                                    case 1641:
                                    case 4457:
                                    case 2921:
                                    case 5572:
                                    case 6356:
                                    case 5844:
                                    case 3191:
                                    case 6645:
                                    case 3005:
                                    case 6391:
                                    case 5879:
                                    case 5623:
                                    case 6135:
                                    case 4599:
                                    case 4855:
                                    case 4215:
                                    case 6389:
                                    case 5109:
                                    case 5365:
                                    case 5621:
                                    case 3829:
                                        return o + t + t;
                                    case 4789:
                                        return a + t + t;
                                    case 5349:
                                    case 4246:
                                    case 4810:
                                    case 6968:
                                    case 2756:
                                        return o + t + a + t + r + t + t;
                                    case 5936:
                                        switch (g(t, n + 11)) {
                                            case 114:
                                                return o + t + r + h(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                                            case 108:
                                                return o + t + r + h(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
                                            case 45:
                                                return o + t + r + h(t, /[svh]\w+-[tblr]{2}/, "lr") + t
                                        }
                                    case 6828:
                                    case 4268:
                                    case 2903:
                                        return o + t + r + t + t;
                                    case 6165:
                                        return o + t + r + "flex-" + t + t;
                                    case 5187:
                                        return o + t + h(t, /(\w+).+(:[^]+)/, o + "box-$1$2" + r + "flex-$1$2") + t;
                                    case 5443:
                                        return o + t + r + "flex-item-" + h(t, /flex-|-self/g, "") + (f(t, /flex-|baseline/) ? "" : r + "grid-row-" + h(t, /flex-|-self/g, "")) + t;
                                    case 4675:
                                        return o + t + r + "flex-line-pack" + h(t, /align-content|flex-|-self/g, "") + t;
                                    case 5548:
                                        return o + t + r + h(t, "shrink", "negative") + t;
                                    case 5292:
                                        return o + t + r + h(t, "basis", "preferred-size") + t;
                                    case 6060:
                                        return o + "box-" + h(t, "-grow", "") + o + t + r + h(t, "grow", "positive") + t;
                                    case 4554:
                                        return o + h(t, /([^-])(transform)/g, "$1" + o + "$2") + t;
                                    case 6187:
                                        return h(h(h(t, /(zoom-|grab)/, o + "$1"), /(image-set)/, o + "$1"), t, "") + t;
                                    case 5495:
                                    case 3959:
                                        return h(t, /(image-set\([^]*)/, o + "$1$`$1");
                                    case 4968:
                                        return h(h(t, /(.+:)(flex-)?(.*)/, o + "box-pack:$3" + r + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + o + t + t;
                                    case 4200:
                                        if (!f(t, /flex-|baseline/)) return r + "grid-column-align" + v(t, n) + t;
                                        break;
                                    case 2592:
                                    case 3360:
                                        return r + h(t, "template-", "") + t;
                                    case 4384:
                                    case 3616:
                                        return i && i.some(function(e, t) {
                                            return n = t, f(e.props, /grid-\w+-end/)
                                        }) ? ~m(t + (i = i[n].value), "span", 0) ? t : r + h(t, "-start", "") + t + r + "grid-row-span:" + (~m(i, "span", 0) ? f(i, /\d+/) : +f(i, /\d+/) - +f(t, /\d+/)) + ";" : r + h(t, "-start", "") + t;
                                    case 4896:
                                    case 4128:
                                        return i && i.some(function(e) {
                                            return f(e.props, /grid-\w+-start/)
                                        }) ? t : r + h(h(t, "-end", "-span"), "span ", "") + t;
                                    case 4095:
                                    case 3583:
                                    case 4068:
                                    case 2532:
                                        return h(t, /(.+)-inline(.+)/, o + "$1$2") + t;
                                    case 8116:
                                    case 7059:
                                    case 5753:
                                    case 5535:
                                    case 5445:
                                    case 5701:
                                    case 4933:
                                    case 4677:
                                    case 5533:
                                    case 5789:
                                    case 5021:
                                    case 4765:
                                        if (y(t) - 1 - n > 6) switch (g(t, n + 1)) {
                                            case 109:
                                                if (45 !== g(t, n + 4)) break;
                                            case 102:
                                                return h(t, /(.+:)(.+)-([^]+)/, "$1" + o + "$2-$3$1" + a + (108 == g(t, n + 3) ? "$3" : "$2-$3")) + t;
                                            case 115:
                                                return ~m(t, "stretch", 0) ? e(h(t, "stretch", "fill-available"), n, i) + t : t
                                        }
                                        break;
                                    case 5152:
                                    case 5920:
                                        return h(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, a, o, i, s, l) {
                                            return r + n + ":" + a + l + (o ? r + n + "-span:" + (i ? s : +s - +a) + l : "") + t
                                        });
                                    case 4949:
                                        if (121 === g(t, n + 6)) return h(t, ":", ":" + o) + t;
                                        break;
                                    case 6444:
                                        switch (g(t, 45 === g(t, 14) ? 18 : 11)) {
                                            case 120:
                                                return h(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + o + (45 === g(t, 14) ? "inline-" : "") + "box$3$1" + o + "$2$3$1" + r + "$2box$3") + t;
                                            case 100:
                                                return h(t, ":", ":" + r) + t
                                        }
                                        break;
                                    case 5719:
                                    case 2647:
                                    case 2135:
                                    case 3927:
                                    case 2391:
                                        return h(t, "scroll-", "scroll-snap-") + t
                                }
                                return t
                            }(e.value, e.length, n));
                        case c:
                            return N([O(e, {
                                value: h(e.value, "@", "@" + o)
                            })], i);
                        case s:
                            if (e.length) {
                                var u, d;
                                return u = n = e.props, d = function(t) {
                                    switch (f(t, i = /(::plac\w+|:read-\w+)/)) {
                                        case ":read-only":
                                        case ":read-write":
                                            P(O(e, {
                                                props: [h(t, /:(read-\w+)/, ":-moz-$1")]
                                            })), P(O(e, {
                                                props: [t]
                                            })), p(e, {
                                                props: w(n, i)
                                            });
                                            break;
                                        case "::placeholder":
                                            P(O(e, {
                                                props: [h(t, /:(plac\w+)/, ":" + o + "input-$1")]
                                            })), P(O(e, {
                                                props: [h(t, /:(plac\w+)/, ":-moz-$1")]
                                            })), P(O(e, {
                                                props: [h(t, /:(plac\w+)/, r + "input-$1")]
                                            })), P(O(e, {
                                                props: [t]
                                            })), p(e, {
                                                props: w(n, i)
                                            })
                                    }
                                    return ""
                                }, u.map(d).join("")
                            }
                    }
                }
            }, , , function(e, t, n) {
                e.exports = n(57)()
            }, , function(e, t, n) {
                "use strict";
                n.r(t), (function(e) {
                    n.d(t, "ServerStyleSheet", function() {
                        return eJ
                    }), n.d(t, "StyleSheetConsumer", function() {
                        return eS
                    }), n.d(t, "StyleSheetContext", function() {
                        return e_
                    }), n.d(t, "StyleSheetManager", function() {
                        return eP
                    }), n.d(t, "ThemeConsumer", function() {
                        return eU
                    }), n.d(t, "ThemeContext", function() {
                        return ej
                    }), n.d(t, "ThemeProvider", function() {
                        return eG
                    }), n.d(t, "__PRIVATE__", function() {
                        return e1
                    }), n.d(t, "createGlobalStyle", function() {
                        return eX
                    }), n.d(t, "css", function() {
                        return eW
                    }), n.d(t, "default", function() {
                        return e$
                    }), n.d(t, "isStyledComponent", function() {
                        return X
                    }), n.d(t, "keyframes", function() {
                        return eK
                    }), n.d(t, "styled", function() {
                        return e$
                    }), n.d(t, "useTheme", function() {
                        return eD
                    }), n.d(t, "version", function() {
                        return f
                    }), n.d(t, "withTheme", function() {
                        return eQ
                    });
                    var r = n(8),
                        a = (n(32), n(0)),
                        o = n.n(a),
                        i = n(37),
                        s = n.n(i),
                        l = n(15),
                        c = n(35),
                        u = void 0 !== e && void 0 !== e.env && (e.env.REACT_APP_SC_ATTR || e.env.SC_ATTR) || "data-styled",
                        d = "active",
                        p = "data-styled-version",
                        f = "6.1.13",
                        h = "/*!sc*/\n",
                        m = "undefined" != typeof window && "HTMLElement" in window,
                        g = !!("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : void 0 !== e && void 0 !== e.env && void 0 !== e.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== e.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== e.env.REACT_APP_SC_DISABLE_SPEEDY && e.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== e && void 0 !== e.env && void 0 !== e.env.SC_DISABLE_SPEEDY && "" !== e.env.SC_DISABLE_SPEEDY && "false" !== e.env.SC_DISABLE_SPEEDY && e.env.SC_DISABLE_SPEEDY),
                        v = {},
                        y = Object.freeze([]),
                        b = Object.freeze({});

                    function w(e, t, n) {
                        return void 0 === n && (n = b), e.theme !== n.theme && e.theme || t || n.theme
                    }
                    var x = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]),
                        C = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
                        E = /(^-|-$)/g;

                    function k(e) {
                        return e.replace(C, "-").replace(E, "")
                    }
                    var _ = /(a)(d)/gi,
                        S = function(e) {
                            return String.fromCharCode(e + (e > 25 ? 39 : 97))
                        };

                    function R(e) {
                        var t, n = "";
                        for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = S(t % 52) + n;
                        return (S(t % 52) + n).replace(_, "$1-$2")
                    }
                    var O, P = function(e, t) {
                            for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
                            return e
                        },
                        M = function(e) {
                            return P(5381, e)
                        };

                    function L(e) {
                        return R(M(e) >>> 0)
                    }

                    function A(e) {
                        return e.displayName || e.name || "Component"
                    }

                    function H(e) {
                        return "string" == typeof e
                    }
                    var I = "function" == typeof Symbol && Symbol.for,
                        T = I ? Symbol.for("react.memo") : 60115,
                        V = I ? Symbol.for("react.forward_ref") : 60112,
                        N = {
                            childContextTypes: !0,
                            contextType: !0,
                            contextTypes: !0,
                            defaultProps: !0,
                            displayName: !0,
                            getDefaultProps: !0,
                            getDerivedStateFromError: !0,
                            getDerivedStateFromProps: !0,
                            mixins: !0,
                            propTypes: !0,
                            type: !0
                        },
                        j = {
                            name: !0,
                            length: !0,
                            prototype: !0,
                            caller: !0,
                            callee: !0,
                            arguments: !0,
                            arity: !0
                        },
                        U = {
                            $$typeof: !0,
                            compare: !0,
                            defaultProps: !0,
                            displayName: !0,
                            propTypes: !0,
                            type: !0
                        },
                        D = ((O = {})[V] = {
                            $$typeof: !0,
                            render: !0,
                            defaultProps: !0,
                            displayName: !0,
                            propTypes: !0
                        }, O[T] = U, O);

                    function G(e) {
                        return ("type" in e && e.type.$$typeof) === T ? U : "$$typeof" in e ? D[e.$$typeof] : N
                    }
                    var B = Object.defineProperty,
                        Z = Object.getOwnPropertyNames,
                        z = Object.getOwnPropertySymbols,
                        F = Object.getOwnPropertyDescriptor,
                        W = Object.getPrototypeOf,
                        q = Object.prototype;

                    function $(e, t, n) {
                        if ("string" != typeof t) {
                            if (q) {
                                var r = W(t);
                                r && r !== q && $(e, r, n)
                            }
                            var a = Z(t);
                            z && (a = a.concat(z(t)));
                            for (var o = G(e), i = G(t), s = 0; s < a.length; ++s) {
                                var l = a[s];
                                if (!(l in j || n && n[l] || i && l in i || o && l in o)) {
                                    var c = F(t, l);
                                    try {
                                        B(e, l, c)
                                    } catch (e) {}
                                }
                            }
                        }
                        return e
                    }

                    function Y(e) {
                        return "function" == typeof e
                    }

                    function X(e) {
                        return "object" == typeof e && "styledComponentId" in e
                    }

                    function K(e, t) {
                        return e && t ? "".concat(e, " ").concat(t) : e || t || ""
                    }

                    function Q(e, t) {
                        if (0 === e.length) return "";
                        for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
                        return n
                    }

                    function J(e) {
                        return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof)
                    }

                    function ee(e, t) {
                        Object.defineProperty(e, "toString", {
                            value: t
                        })
                    }

                    function et(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""))
                    }
                    var en = function() {
                            function e(e) {
                                this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
                            }
                            return e.prototype.indexOfGroup = function(e) {
                                for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                                return t
                            }, e.prototype.insertRules = function(e, t) {
                                if (e >= this.groupSizes.length) {
                                    for (var n = this.groupSizes, r = n.length, a = r; e >= a;)
                                        if ((a <<= 1) < 0) throw et(16, "".concat(e));
                                    this.groupSizes = new Uint32Array(a), this.groupSizes.set(n), this.length = a;
                                    for (var o = r; o < a; o++) this.groupSizes[o] = 0
                                }
                                for (var i = this.indexOfGroup(e + 1), s = (o = 0, t.length); o < s; o++) this.tag.insertRule(i, t[o]) && (this.groupSizes[e]++, i++)
                            }, e.prototype.clearGroup = function(e) {
                                if (e < this.length) {
                                    var t = this.groupSizes[e],
                                        n = this.indexOfGroup(e),
                                        r = n + t;
                                    this.groupSizes[e] = 0;
                                    for (var a = n; a < r; a++) this.tag.deleteRule(n)
                                }
                            }, e.prototype.getGroup = function(e) {
                                var t = "";
                                if (e >= this.length || 0 === this.groupSizes[e]) return t;
                                for (var n = this.groupSizes[e], r = this.indexOfGroup(e), a = r + n, o = r; o < a; o++) t += "".concat(this.tag.getRule(o)).concat(h);
                                return t
                            }, e
                        }(),
                        er = new Map,
                        ea = new Map,
                        eo = 1,
                        ei = function(e) {
                            if (er.has(e)) return er.get(e);
                            for (; ea.has(eo);) eo++;
                            var t = eo++;
                            return er.set(e, t), ea.set(t, e), t
                        },
                        es = function(e, t) {
                            eo = t + 1, er.set(e, t), ea.set(t, e)
                        },
                        el = "style[".concat(u, "][").concat(p, '="').concat(f, '"]'),
                        ec = new RegExp("^".concat(u, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
                        eu = function(e, t, n) {
                            for (var r, a = n.split(","), o = 0, i = a.length; o < i; o++)(r = a[o]) && e.registerName(t, r)
                        },
                        ed = function(e, t) {
                            for (var n, r = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(h), a = [], o = 0, i = r.length; o < i; o++) {
                                var s = r[o].trim();
                                if (s) {
                                    var l = s.match(ec);
                                    if (l) {
                                        var c = 0 | parseInt(l[1], 10),
                                            u = l[2];
                                        0 !== c && (es(u, c), eu(e, u, l[3]), e.getTag().insertRules(c, a)), a.length = 0
                                    } else a.push(s)
                                }
                            }
                        },
                        ep = function(e) {
                            for (var t = document.querySelectorAll(el), n = 0, r = t.length; n < r; n++) {
                                var a = t[n];
                                a && a.getAttribute(u) !== d && (ed(e, a), a.parentNode && a.parentNode.removeChild(a))
                            }
                        },
                        ef = function(e) {
                            var t, r = document.head,
                                a = e || r,
                                o = document.createElement("style"),
                                i = (t = Array.from(a.querySelectorAll("style[".concat(u, "]"))))[t.length - 1],
                                s = void 0 !== i ? i.nextSibling : null;
                            o.setAttribute(u, d), o.setAttribute(p, f);
                            var l = n.nc;
                            return l && o.setAttribute("nonce", l), a.insertBefore(o, s), o
                        },
                        eh = function() {
                            function e(e) {
                                this.element = ef(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
                                    if (e.sheet) return e.sheet;
                                    for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                                        var a = t[n];
                                        if (a.ownerNode === e) return a
                                    }
                                    throw et(17)
                                }(this.element), this.length = 0
                            }
                            return e.prototype.insertRule = function(e, t) {
                                try {
                                    return this.sheet.insertRule(t, e), this.length++, !0
                                } catch (e) {
                                    return !1
                                }
                            }, e.prototype.deleteRule = function(e) {
                                this.sheet.deleteRule(e), this.length--
                            }, e.prototype.getRule = function(e) {
                                var t = this.sheet.cssRules[e];
                                return t && t.cssText ? t.cssText : ""
                            }, e
                        }(),
                        em = function() {
                            function e(e) {
                                this.element = ef(e), this.nodes = this.element.childNodes, this.length = 0
                            }
                            return e.prototype.insertRule = function(e, t) {
                                if (e <= this.length && e >= 0) {
                                    var n = document.createTextNode(t);
                                    return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0
                                }
                                return !1
                            }, e.prototype.deleteRule = function(e) {
                                this.element.removeChild(this.nodes[e]), this.length--
                            }, e.prototype.getRule = function(e) {
                                return e < this.length ? this.nodes[e].textContent : ""
                            }, e
                        }(),
                        eg = function() {
                            function e(e) {
                                this.rules = [], this.length = 0
                            }
                            return e.prototype.insertRule = function(e, t) {
                                return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
                            }, e.prototype.deleteRule = function(e) {
                                this.rules.splice(e, 1), this.length--
                            }, e.prototype.getRule = function(e) {
                                return e < this.length ? this.rules[e] : ""
                            }, e
                        }(),
                        ev = m,
                        ey = {
                            isServer: !m,
                            useCSSOMInjection: !g
                        },
                        eb = function() {
                            function e(e, t, n) {
                                void 0 === e && (e = b), void 0 === t && (t = {});
                                var a = this;
                                this.options = Object(r.a)(Object(r.a)({}, ey), e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && m && ev && (ev = !1, ep(this)), ee(this, function() {
                                    return function(e) {
                                        for (var t = e.getTag(), n = t.length, r = "", a = 0; a < n; a++)(function(n) {
                                            var a = ea.get(n);
                                            if (void 0 !== a) {
                                                var o = e.names.get(a),
                                                    i = t.getGroup(n);
                                                if (void 0 !== o && o.size && 0 !== i.length) {
                                                    var s = "".concat(u, ".g").concat(n, '[id="').concat(a, '"]'),
                                                        l = "";
                                                    void 0 !== o && o.forEach(function(e) {
                                                        e.length > 0 && (l += "".concat(e, ","))
                                                    }), r += "".concat(i).concat(s, '{content:"').concat(l, '"}').concat(h)
                                                }
                                            }
                                        })(a);
                                        return r
                                    }(a)
                                })
                            }
                            return e.registerId = function(e) {
                                return ei(e)
                            }, e.prototype.rehydrate = function() {
                                !this.server && m && ep(this)
                            }, e.prototype.reconstructWithOptions = function(t, n) {
                                return void 0 === n && (n = !0), new e(Object(r.a)(Object(r.a)({}, this.options), t), this.gs, n && this.names || void 0)
                            }, e.prototype.allocateGSInstance = function(e) {
                                return this.gs[e] = (this.gs[e] || 0) + 1
                            }, e.prototype.getTag = function() {
                                var e, t, n;
                                return this.tag || (this.tag = (t = (e = this.options).useCSSOMInjection, n = e.target, new en(e.isServer ? new eg(n) : t ? new eh(n) : new em(n))))
                            }, e.prototype.hasNameForId = function(e, t) {
                                return this.names.has(e) && this.names.get(e).has(t)
                            }, e.prototype.registerName = function(e, t) {
                                if (ei(e), this.names.has(e)) this.names.get(e).add(t);
                                else {
                                    var n = new Set;
                                    n.add(t), this.names.set(e, n)
                                }
                            }, e.prototype.insertRules = function(e, t, n) {
                                this.registerName(e, t), this.getTag().insertRules(ei(e), n)
                            }, e.prototype.clearNames = function(e) {
                                this.names.has(e) && this.names.get(e).clear()
                            }, e.prototype.clearRules = function(e) {
                                this.getTag().clearGroup(ei(e)), this.clearNames(e)
                            }, e.prototype.clearTag = function() {
                                this.tag = void 0
                            }, e
                        }(),
                        ew = /&/g,
                        ex = /^\s*\/\/.*$/gm;

                    function eC(e) {
                        var t, n, r, a = void 0 === e ? b : e,
                            o = a.options,
                            i = void 0 === o ? b : o,
                            s = a.plugins,
                            c = void 0 === s ? y : s,
                            u = function(e, r, a) {
                                return a.startsWith(n) && a.endsWith(n) && a.replaceAll(n, "").length > 0 ? ".".concat(t) : e
                            },
                            d = c.slice();
                        d.push(function(e) {
                            e.type === l.a && e.value.includes("&") && (e.props[0] = e.props[0].replace(ew, n).replace(r, u))
                        }), i.prefix && d.push(l.d), d.push(l.g);
                        var p = function(e, a, o, s) {
                            void 0 === a && (a = ""), void 0 === o && (o = ""), void 0 === s && (s = "&"), t = s, n = a, r = RegExp("\\".concat(n, "\\b"), "g");
                            var c = e.replace(ex, ""),
                                u = l.b(o || a ? "".concat(o, " ").concat(a, " { ").concat(c, " }") : c);
                            i.namespace && (u = function e(t, n) {
                                return t.map(function(t) {
                                    return "rule" === t.type && (t.value = "".concat(n, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(n, " ")), t.props = t.props.map(function(e) {
                                        return "".concat(n, " ").concat(e)
                                    })), Array.isArray(t.children) && "@keyframes" !== t.type && (t.children = e(t.children, n)), t
                                })
                            }(u, i.namespace));
                            var p = [];
                            return l.f(u, l.c(d.concat(l.e(function(e) {
                                return p.push(e)
                            })))), p
                        };
                        return p.hash = c.length ? c.reduce(function(e, t) {
                            return t.name || et(15), P(e, t.name)
                        }, 5381).toString() : "", p
                    }
                    var eE = new eb,
                        ek = eC(),
                        e_ = o.a.createContext({
                            shouldForwardProp: void 0,
                            styleSheet: eE,
                            stylis: ek
                        }),
                        eS = e_.Consumer,
                        eR = o.a.createContext(void 0);

                    function eO() {
                        return Object(a.useContext)(e_)
                    }

                    function eP(e) {
                        var t = Object(a.useState)(e.stylisPlugins),
                            n = t[0],
                            r = t[1],
                            i = eO().styleSheet,
                            l = Object(a.useMemo)(function() {
                                var t = i;
                                return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
                                    target: e.target
                                }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
                                    useCSSOMInjection: !1
                                })), t
                            }, [e.disableCSSOMInjection, e.sheet, e.target, i]),
                            c = Object(a.useMemo)(function() {
                                return eC({
                                    options: {
                                        namespace: e.namespace,
                                        prefix: e.enableVendorPrefixes
                                    },
                                    plugins: n
                                })
                            }, [e.enableVendorPrefixes, e.namespace, n]);
                        Object(a.useEffect)(function() {
                            s()(n, e.stylisPlugins) || r(e.stylisPlugins)
                        }, [e.stylisPlugins]);
                        var u = Object(a.useMemo)(function() {
                            return {
                                shouldForwardProp: e.shouldForwardProp,
                                styleSheet: l,
                                stylis: c
                            }
                        }, [e.shouldForwardProp, l, c]);
                        return o.a.createElement(e_.Provider, {
                            value: u
                        }, o.a.createElement(eR.Provider, {
                            value: c
                        }, e.children))
                    }
                    var eM = function() {
                        function e(e, t) {
                            var n = this;
                            this.inject = function(e, t) {
                                void 0 === t && (t = ek);
                                var r = n.name + t.hash;
                                e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
                            }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, ee(this, function() {
                                throw et(12, String(n.name))
                            })
                        }
                        return e.prototype.getName = function(e) {
                            return void 0 === e && (e = ek), this.name + e.hash
                        }, e
                    }();

                    function eL(e) {
                        for (var t = "", n = 0; n < e.length; n++) {
                            var r = e[n];
                            if (1 === n && "-" === r && "-" === e[0]) return e;
                            r >= "A" && r <= "Z" ? t += "-" + r.toLowerCase() : t += r
                        }
                        return t.startsWith("ms-") ? "-" + t : t
                    }
                    var eA = function(e) {
                            return null == e || !1 === e || "" === e
                        },
                        eH = function(e) {
                            var t = [];
                            for (var n in e) {
                                var a = e[n];
                                e.hasOwnProperty(n) && !eA(a) && (Array.isArray(a) && a.isCss || Y(a) ? t.push("".concat(eL(n), ":"), a, ";") : J(a) ? t.push.apply(t, Object(r.b)(Object(r.b)(["".concat(n, " {")], eH(a), !1), ["}"], !1)) : t.push("".concat(eL(n), ": ").concat(null == a || "boolean" == typeof a || "" === a ? "" : "number" != typeof a || 0 === a || n in c.a || n.startsWith("--") ? String(a).trim() : "".concat(a, "px"), ";")))
                            }
                            return t
                        };

                    function eI(e, t, n, r) {
                        return eA(e) ? [] : X(e) ? [".".concat(e.styledComponentId)] : Y(e) ? !Y(e) || e.prototype && e.prototype.isReactComponent || !t ? [e] : eI(e(t), t, n, r) : e instanceof eM ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : J(e) ? eH(e) : Array.isArray(e) ? Array.prototype.concat.apply(y, e.map(function(e) {
                            return eI(e, t, n, r)
                        })) : [e.toString()]
                    }

                    function eT(e) {
                        for (var t = 0; t < e.length; t += 1) {
                            var n = e[t];
                            if (Y(n) && !X(n)) return !1
                        }
                        return !0
                    }
                    var eV = M(f),
                        eN = function() {
                            function e(e, t, n) {
                                this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && eT(e), this.componentId = t, this.baseHash = P(eV, t), this.baseStyle = n, eb.registerId(t)
                            }
                            return e.prototype.generateAndInjectStyles = function(e, t, n) {
                                var r = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
                                if (this.isStatic && !n.hash) {
                                    if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) r = K(r, this.staticRulesId);
                                    else {
                                        var a = Q(eI(this.rules, e, t, n)),
                                            o = R(P(this.baseHash, a) >>> 0);
                                        if (!t.hasNameForId(this.componentId, o)) {
                                            var i = n(a, ".".concat(o), void 0, this.componentId);
                                            t.insertRules(this.componentId, o, i)
                                        }
                                        r = K(r, o), this.staticRulesId = o
                                    }
                                } else {
                                    for (var s = P(this.baseHash, n.hash), l = "", c = 0; c < this.rules.length; c++) {
                                        var u = this.rules[c];
                                        if ("string" == typeof u) l += u;
                                        else if (u) {
                                            var d = Q(eI(u, e, t, n));
                                            s = P(s, d + c), l += d
                                        }
                                    }
                                    if (l) {
                                        var p = R(s >>> 0);
                                        t.hasNameForId(this.componentId, p) || t.insertRules(this.componentId, p, n(l, ".".concat(p), void 0, this.componentId)), r = K(r, p)
                                    }
                                }
                                return r
                            }, e
                        }(),
                        ej = o.a.createContext(void 0),
                        eU = ej.Consumer;

                    function eD() {
                        var e = Object(a.useContext)(ej);
                        if (!e) throw et(18);
                        return e
                    }

                    function eG(e) {
                        var t = o.a.useContext(ej),
                            n = Object(a.useMemo)(function() {
                                return function(e, t) {
                                    if (!e) throw et(14);
                                    if (Y(e)) return e(t);
                                    if (Array.isArray(e) || "object" != typeof e) throw et(8);
                                    return t ? Object(r.a)(Object(r.a)({}, t), e) : e
                                }(e.theme, t)
                            }, [e.theme, t]);
                        return e.children ? o.a.createElement(ej.Provider, {
                            value: n
                        }, e.children) : null
                    }
                    var eB = {};

                    function eZ(e, t, n) {
                        var i, s, l, c, u = X(e),
                            d = !H(e),
                            p = t.attrs,
                            h = void 0 === p ? y : p,
                            m = t.componentId,
                            g = void 0 === m ? (i = t.displayName, s = t.parentComponentId, eB[l = "string" != typeof i ? "sc" : k(i)] = (eB[l] || 0) + 1, c = "".concat(l, "-").concat(L(f + l + eB[l])), s ? "".concat(s, "-").concat(c) : c) : m,
                            v = t.displayName,
                            C = void 0 === v ? H(e) ? "styled.".concat(e) : "Styled(".concat(A(e), ")") : v,
                            E = t.displayName && t.componentId ? "".concat(k(t.displayName), "-").concat(t.componentId) : t.componentId || g,
                            _ = u && e.attrs ? e.attrs.concat(h).filter(Boolean) : h,
                            S = t.shouldForwardProp;
                        if (u && e.shouldForwardProp) {
                            var R = e.shouldForwardProp;
                            if (t.shouldForwardProp) {
                                var O = t.shouldForwardProp;
                                S = function(e, t) {
                                    return R(e, t) && O(e, t)
                                }
                            } else S = R
                        }
                        var P = new eN(n, E, u ? e.componentStyle : void 0);

                        function M(e, t) {
                            return function(e, t, n) {
                                var i, s = e.attrs,
                                    l = e.componentStyle,
                                    c = e.defaultProps,
                                    u = e.foldedComponentIds,
                                    d = e.styledComponentId,
                                    p = e.target,
                                    f = o.a.useContext(ej),
                                    h = eO(),
                                    m = e.shouldForwardProp || h.shouldForwardProp,
                                    g = w(t, f, c) || b,
                                    v = function(e, t, n) {
                                        for (var a, o = Object(r.a)(Object(r.a)({}, t), {
                                                className: void 0,
                                                theme: n
                                            }), i = 0; i < e.length; i += 1) {
                                            var s = Y(a = e[i]) ? a(o) : a;
                                            for (var l in s) o[l] = "className" === l ? K(o[l], s[l]) : "style" === l ? Object(r.a)(Object(r.a)({}, o[l]), s[l]) : s[l]
                                        }
                                        return t.className && (o.className = K(o.className, t.className)), o
                                    }(s, t, g),
                                    y = v.as || p,
                                    C = {};
                                for (var E in v) void 0 === v[E] || "$" === E[0] || "as" === E || "theme" === E && v.theme === g || ("forwardedAs" === E ? C.as = v.forwardedAs : m && !m(E, y) || (C[E] = v[E]));
                                var k = (i = eO(), l.generateAndInjectStyles(v, i.styleSheet, i.stylis)),
                                    _ = K(u, d);
                                return k && (_ += " " + k), v.className && (_ += " " + v.className), C[H(y) && !x.has(y) ? "class" : "className"] = _, C.ref = n, Object(a.createElement)(y, C)
                            }(I, e, t)
                        }
                        M.displayName = C;
                        var I = o.a.forwardRef(M);
                        return I.attrs = _, I.componentStyle = P, I.displayName = C, I.shouldForwardProp = S, I.foldedComponentIds = u ? K(e.foldedComponentIds, e.styledComponentId) : "", I.styledComponentId = E, I.target = u ? e.target : e, Object.defineProperty(I, "defaultProps", {
                            get: function() {
                                return this._foldedDefaultProps
                            },
                            set: function(t) {
                                this._foldedDefaultProps = u ? function(e) {
                                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                    for (var r = 0; r < t.length; r++)(function e(t, n, r) {
                                        if (void 0 === r && (r = !1), !r && !J(t) && !Array.isArray(t)) return n;
                                        if (Array.isArray(n))
                                            for (var a = 0; a < n.length; a++) t[a] = e(t[a], n[a]);
                                        else if (J(n))
                                            for (var a in n) t[a] = e(t[a], n[a]);
                                        return t
                                    })(e, t[r], !0);
                                    return e
                                }({}, e.defaultProps, t) : t
                            }
                        }), ee(I, function() {
                            return ".".concat(I.styledComponentId)
                        }), d && $(I, e, {
                            attrs: !0,
                            componentStyle: !0,
                            displayName: !0,
                            foldedComponentIds: !0,
                            shouldForwardProp: !0,
                            styledComponentId: !0,
                            target: !0
                        }), I
                    }

                    function ez(e, t) {
                        for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1) n.push(t[r], e[r + 1]);
                        return n
                    }
                    var eF = function(e) {
                        return Object.assign(e, {
                            isCss: !0
                        })
                    };

                    function eW(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        return Y(e) || J(e) ? eF(eI(ez(y, Object(r.b)([e], t, !0)))) : 0 === t.length && 1 === e.length && "string" == typeof e[0] ? eI(e) : eF(eI(ez(e, t)))
                    }
                    var eq = function(e) {
                            return function e(t, n, a) {
                                if (void 0 === a && (a = b), !n) throw et(1, n);
                                var o = function(e) {
                                    for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
                                    return t(n, a, eW.apply(void 0, Object(r.b)([e], o, !1)))
                                };
                                return o.attrs = function(o) {
                                    return e(t, n, Object(r.a)(Object(r.a)({}, a), {
                                        attrs: Array.prototype.concat(a.attrs, o).filter(Boolean)
                                    }))
                                }, o.withConfig = function(o) {
                                    return e(t, n, Object(r.a)(Object(r.a)({}, a), o))
                                }, o
                            }(eZ, e)
                        },
                        e$ = eq;
                    x.forEach(function(e) {
                        e$[e] = eq(e)
                    });
                    var eY = function() {
                        function e(e, t) {
                            this.rules = e, this.componentId = t, this.isStatic = eT(e), eb.registerId(this.componentId + 1)
                        }
                        return e.prototype.createStyles = function(e, t, n, r) {
                            var a = r(Q(eI(this.rules, t, n, r)), ""),
                                o = this.componentId + e;
                            n.insertRules(o, o, a)
                        }, e.prototype.removeStyles = function(e, t) {
                            t.clearRules(this.componentId + e)
                        }, e.prototype.renderStyles = function(e, t, n, r) {
                            e > 2 && eb.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r)
                        }, e
                    }();

                    function eX(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        var a = eW.apply(void 0, Object(r.b)([e], t, !1)),
                            i = "sc-global-".concat(L(JSON.stringify(a))),
                            s = new eY(a, i),
                            l = function(e) {
                                var t = eO(),
                                    n = o.a.useContext(ej),
                                    r = o.a.useRef(t.styleSheet.allocateGSInstance(i)).current;
                                return t.styleSheet.server && c(r, e, t.styleSheet, n, t.stylis), o.a.useLayoutEffect(function() {
                                    if (!t.styleSheet.server) return c(r, e, t.styleSheet, n, t.stylis),
                                        function() {
                                            return s.removeStyles(r, t.styleSheet)
                                        }
                                }, [r, e, t.styleSheet, n, t.stylis]), null
                            };

                        function c(e, t, n, a, o) {
                            if (s.isStatic) s.renderStyles(e, v, n, o);
                            else {
                                var i = Object(r.a)(Object(r.a)({}, t), {
                                    theme: w(t, a, l.defaultProps)
                                });
                                s.renderStyles(e, i, n, o)
                            }
                        }
                        return o.a.memo(l)
                    }

                    function eK(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        var a = Q(eW.apply(void 0, Object(r.b)([e], t, !1)));
                        return new eM(L(a), a)
                    }

                    function eQ(e) {
                        var t = o.a.forwardRef(function(t, n) {
                            var a = w(t, o.a.useContext(ej), e.defaultProps);
                            return o.a.createElement(e, Object(r.a)({}, t, {
                                theme: a,
                                ref: n
                            }))
                        });
                        return t.displayName = "WithTheme(".concat(A(e), ")"), $(t, e)
                    }
                    var eJ = function() {
                            function e() {
                                var e = this;
                                this._emitSheetCSS = function() {
                                    var t = e.instance.toString();
                                    if (!t) return "";
                                    var r = n.nc,
                                        a = Q([r && 'nonce="'.concat(r, '"'), "".concat(u, '="true"'), "".concat(p, '="').concat(f, '"')].filter(Boolean), " ");
                                    return "<style ".concat(a, ">").concat(t, "</style>")
                                }, this.getStyleTags = function() {
                                    if (e.sealed) throw et(2);
                                    return e._emitSheetCSS()
                                }, this.getStyleElement = function() {
                                    if (e.sealed) throw et(2);
                                    var t, a = e.instance.toString();
                                    if (!a) return [];
                                    var i = ((t = {})[u] = "", t[p] = f, t.dangerouslySetInnerHTML = {
                                            __html: a
                                        }, t),
                                        s = n.nc;
                                    return s && (i.nonce = s), [o.a.createElement("style", Object(r.a)({}, i, {
                                        key: "sc-0-0"
                                    }))]
                                }, this.seal = function() {
                                    e.sealed = !0
                                }, this.instance = new eb({
                                    isServer: !0
                                }), this.sealed = !1
                            }
                            return e.prototype.collectStyles = function(e) {
                                if (this.sealed) throw et(2);
                                return o.a.createElement(eP, {
                                    sheet: this.instance
                                }, e)
                            }, e.prototype.interleaveWithNodeStream = function(e) {
                                throw et(3)
                            }, e
                        }(),
                        e1 = {
                            StyleSheet: eb,
                            mainSheet: eE
                        }
                }).call(this, n(23))
            }, function(e, t, n) {
                "use strict";
                e.exports = {
                    getApiEnvName: function() {
                        var e = "";
                        if ("undefined" != typeof window) {
                            var t = window.location.origin;
                            e = /developer\.gartner\.com/.test(t) || /pdodev/.test(t) || /localhost/.test(t) || /dev06\.internal\.pulse\.qa/.test(t) ? "dev" : /gcom\.pdoqa/.test(t) ? "qa" : /gcomuat\.pdoqa/.test(t) ? "uat" : "prod"
                        }
                        return e
                    },
                    stringToBoolean: function(e) {
                        switch (e.toLowerCase().trim()) {
                            case "true":
                            case "yes":
                            case "1":
                                return !0;
                            case "false":
                            case "no":
                            case "0":
                            case null:
                                return !1;
                            default:
                                return !!e
                        }
                    },
                    pushGAEvent: function(e) {
                        "undefined" != typeof window && void 0 !== window.dataLayer && window.dataLayer.push(e)
                    },
                    numberFormatter: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        if (isNaN(e)) return null;
                        var n = Intl.NumberFormat("en-US", {
                            notation: "compact",
                            maximumFractionDigits: 1,
                            minimumFractionDigits: t
                        });
                        return n ? n.format(e).toLowerCase() : Math.abs(e) > 999999 ? Math.sign(e) * (Math.abs(e) / 1e6).toFixed(1) + "m" : Math.abs(e) > 999 ? Math.sign(e) * (Math.abs(e) / 1e3).toFixed(1) + "k" : Math.sign(e) * Math.abs(e)
                    },
                    numberFormatter2: function(e) {
                        return isNaN(e) ? null : Math.abs(e) > 999999 ? Math.sign(e) * (Math.abs(e) / 1e6).toFixed(1) + "m" : Math.sign(e) * Math.abs(e)
                    },
                    maybePluralize: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "s";
                        return e + " " + t + (1 !== e ? n : "")
                    },
                    capitalizeFirstLetter: function(e) {
                        return e ? e.charAt(0).toUpperCase() + e.slice(1) : null
                    }
                }
            }, , function(e, t) {
                var n, r, a = e.exports = {};

                function o() {
                    throw Error("setTimeout has not been defined")
                }

                function i() {
                    throw Error("clearTimeout has not been defined")
                }

                function s(e) {
                    if (n === setTimeout) return setTimeout(e, 0);
                    if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
                    try {
                        return n(e, 0)
                    } catch (t) {
                        try {
                            return n.call(null, e, 0)
                        } catch (t) {
                            return n.call(this, e, 0)
                        }
                    }
                }! function() {
                    try {
                        n = "function" == typeof setTimeout ? setTimeout : o
                    } catch (e) {
                        n = o
                    }
                    try {
                        r = "function" == typeof clearTimeout ? clearTimeout : i
                    } catch (e) {
                        r = i
                    }
                }();
                var l, c = [],
                    u = !1,
                    d = -1;

                function p() {
                    u && l && (u = !1, l.length ? c = l.concat(c) : d = -1, c.length && f())
                }

                function f() {
                    if (!u) {
                        var e = s(p);
                        u = !0;
                        for (var t = c.length; t;) {
                            for (l = c, c = []; ++d < t;) l && l[d].run();
                            d = -1, t = c.length
                        }
                        l = null, u = !1,
                            function(e) {
                                if (r === clearTimeout) return clearTimeout(e);
                                if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                                try {
                                    r(e)
                                } catch (t) {
                                    try {
                                        return r.call(null, e)
                                    } catch (t) {
                                        return r.call(this, e)
                                    }
                                }
                            }(e)
                    }
                }

                function h(e, t) {
                    this.fun = e, this.array = t
                }

                function m() {}
                a.nextTick = function(e) {
                    var t = Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    c.push(new h(e, t)), 1 !== c.length || u || s(f)
                }, h.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = m, a.addListener = m, a.once = m, a.off = m, a.removeListener = m, a.removeAllListeners = m, a.emit = m, a.prependListener = m, a.prependOnceListener = m, a.listeners = function(e) {
                    return []
                }, a.binding = function(e) {
                    throw Error("process.binding is not supported")
                }, a.cwd = function() {
                    return "/"
                }, a.chdir = function(e) {
                    throw Error("process.chdir is not supported")
                }, a.umask = function() {
                    return 0
                }
            }, function(e, t, n) {
                "use strict";
                e.exports = function(e, t) {
                    return function() {
                        for (var n = Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                        return e.apply(t, n)
                    }
                }
            }, function(e, t, n) {
                "use strict";
                var r = n(11);

                function a(e) {
                    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }
                e.exports = function(e, t, n) {
                    if (!t) return e;
                    if (n) o = n(t);
                    else if (r.isURLSearchParams(t)) o = t.toString();
                    else {
                        var o, i = [];
                        r.forEach(t, function(e, t) {
                            null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function(e) {
                                r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(a(t) + "=" + a(e))
                            }))
                        }), o = i.join("&")
                    }
                    if (o) {
                        var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + o
                    }
                    return e
                }
            }, function(e, t, n) {
                "use strict";
                e.exports = function(e) {
                    return !(!e || !e.__CANCEL__)
                }
            }, function(e, t, n) {
                "use strict";
                (function(t) {
                    var r = n(11),
                        a = n(46),
                        o = {
                            "Content-Type": "application/x-www-form-urlencoded"
                        };

                    function i(e, t) {
                        !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                    }
                    var s, l = {
                        adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== t && "[object process]" === Object.prototype.toString.call(t)) && (s = n(28)), s),
                        transformRequest: [function(e, t) {
                            return a(t, "Accept"), a(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                        }],
                        transformResponse: [function(e) {
                            if ("string" == typeof e) try {
                                e = JSON.parse(e)
                            } catch (e) {}
                            return e
                        }],
                        timeout: 0,
                        xsrfCookieName: "XSRF-TOKEN",
                        xsrfHeaderName: "X-XSRF-TOKEN",
                        maxContentLength: -1,
                        validateStatus: function(e) {
                            return e >= 200 && e < 300
                        }
                    };
                    l.headers = {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }, r.forEach(["delete", "get", "head"], function(e) {
                        l.headers[e] = {}
                    }), r.forEach(["post", "put", "patch"], function(e) {
                        l.headers[e] = r.merge(o)
                    }), e.exports = l
                }).call(this, n(23))
            }, function(e, t, n) {
                "use strict";
                var r = n(11),
                    a = n(47),
                    o = n(25),
                    i = n(49),
                    s = n(52),
                    l = n(53),
                    c = n(29);
                e.exports = function(e) {
                    return new Promise(function(t, u) {
                        var d = e.data,
                            p = e.headers;
                        r.isFormData(d) && delete p["Content-Type"];
                        var f = new XMLHttpRequest;
                        if (e.auth) {
                            var h = e.auth.username || "",
                                m = e.auth.password || "";
                            p.Authorization = "Basic " + btoa(h + ":" + m)
                        }
                        var g = i(e.baseURL, e.url);
                        if (f.open(e.method.toUpperCase(), o(g, e.params, e.paramsSerializer), !0), f.timeout = e.timeout, f.onreadystatechange = function() {
                                if (f && 4 === f.readyState && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
                                    var n = "getAllResponseHeaders" in f ? s(f.getAllResponseHeaders()) : null;
                                    a(t, u, {
                                        data: e.responseType && "text" !== e.responseType ? f.response : f.responseText,
                                        status: f.status,
                                        statusText: f.statusText,
                                        headers: n,
                                        config: e,
                                        request: f
                                    }), f = null
                                }
                            }, f.onabort = function() {
                                f && (u(c("Request aborted", e, "ECONNABORTED", f)), f = null)
                            }, f.onerror = function() {
                                u(c("Network Error", e, null, f)), f = null
                            }, f.ontimeout = function() {
                                var t = "timeout of " + e.timeout + "ms exceeded";
                                e.timeoutErrorMessage && (t = e.timeoutErrorMessage), u(c(t, e, "ECONNABORTED", f)), f = null
                            }, r.isStandardBrowserEnv()) {
                            var v = n(54),
                                y = (e.withCredentials || l(g)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
                            y && (p[e.xsrfHeaderName] = y)
                        }
                        if ("setRequestHeader" in f && r.forEach(p, function(e, t) {
                                void 0 === d && "content-type" === t.toLowerCase() ? delete p[t] : f.setRequestHeader(t, e)
                            }), r.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), e.responseType) try {
                            f.responseType = e.responseType
                        } catch (t) {
                            if ("json" !== e.responseType) throw t
                        }
                        "function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                            f && (f.abort(), u(e), f = null)
                        }), void 0 === d && (d = null), f.send(d)
                    })
                }
            }, function(e, t, n) {
                "use strict";
                var r = n(48);
                e.exports = function(e, t, n, a, o) {
                    return r(Error(e), t, n, a, o)
                }
            }, function(e, t, n) {
                "use strict";
                var r = n(11);
                e.exports = function(e, t) {
                    t = t || {};
                    var n = {},
                        a = ["url", "method", "params", "data"],
                        o = ["headers", "auth", "proxy"],
                        i = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
                    r.forEach(a, function(e) {
                        void 0 !== t[e] && (n[e] = t[e])
                    }), r.forEach(o, function(a) {
                        r.isObject(t[a]) ? n[a] = r.deepMerge(e[a], t[a]) : void 0 !== t[a] ? n[a] = t[a] : r.isObject(e[a]) ? n[a] = r.deepMerge(e[a]) : void 0 !== e[a] && (n[a] = e[a])
                    }), r.forEach(i, function(r) {
                        void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
                    });
                    var s = a.concat(o).concat(i),
                        l = Object.keys(t).filter(function(e) {
                            return -1 === s.indexOf(e)
                        });
                    return r.forEach(l, function(r) {
                        void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
                    }), n
                }
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    this.message = e
                }
                r.prototype.toString = function() {
                    return "Cancel" + (this.message ? ": " + this.message : "")
                }, r.prototype.__CANCEL__ = !0, e.exports = r
            }, function(e, t, n) {
                "use strict";
                n.d(t, "a", function() {
                    return o
                });
                var r = n(33),
                    a = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                    o = Object(r.a)(function(e) {
                        return a.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && 91 > e.charCodeAt(2)
                    })
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    var t = Object.create(null);
                    return function(n) {
                        return void 0 === t[n] && (t[n] = e(n)), t[n]
                    }
                }
                n.d(t, "a", function() {
                    return r
                })
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.FeedTypes = t.getParamsForPulse = t.getParams = t.getGlobals = void 0;
                var r = n(21);
                t.getGlobals = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.getApiEnvName)(),
                        t = {};
                    switch (e) {
                        case "local":
                        case "qa":
                            t = {
                                API_HOST_NAME: "https://gcom.pdoqa.aws.gartner.com",
                                PULSE_HOST_NAME: "https://dev03.api.internal.pulse.qa"
                            };
                            break;
                        case "test":
                            t = {
                                API_HOST_NAME: "https://dev06.internal.pulse.qa",
                                PULSE_HOST_NAME: "https://dev03.api.internal.pulse.qa"
                            };
                            break;
                        case "dev":
                        default:
                            t = {
                                API_HOST_NAME: "https://gcom.pdodev.aws.gartner.com",
                                PULSE_HOST_NAME: "https://dev07.api.internal.pulse.qa"
                            };
                            break;
                        case "devb":
                            t = {
                                API_HOST_NAME: "https://gcomdevb.pdodev.aws.gartner.com",
                                PULSE_HOST_NAME: "https://dev07.api.internal.pulse.qa"
                            };
                            break;
                        case "uat":
                            t = {
                                API_HOST_NAME: "https://gcomuat.pdoqa.aws.gartner.com",
                                PULSE_HOST_NAME: "https://dev03.api.internal.pulse.qa"
                            };
                            break;
                        case "prod":
                            t = {
                                API_HOST_NAME: "https://www.gartner.com",
                                PULSE_HOST_NAME: "https://api.pulse.qa"
                            }
                    }
                    return t
                }, t.getParams = function() {
                    return {
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Headers": "X-Requested-With",
                            "Content-type": "application/json",
                            "X-Requested-With": "XMLHttpRequest",
                            "pi-pathname": "peer-insights"
                        },
                        withCredentials: !0,
                        crossdomain: !0
                    }
                }, t.getParamsForPulse = function(e) {
                    return {
                        headers: {
                            authorization: e,
                            "group-name": "pulse",
                            "profile-type": "user",
                            "token-type": "gartner"
                        }
                    }
                }, t.FeedTypes = {
                    LongForm: 7,
                    ProductPost: 200,
                    Poll: 4,
                    Text: 3,
                    Rank: 6,
                    Slider: 2,
                    RatingScale: 1,
                    MultiSelect: 5,
                    AutoComplete: 8,
                    Report: 100,
                    ProductReport: 101,
                    AssessmentReport: 102
                }
            }, function(e, t, n) {
                "use strict";
                n.d(t, "a", function() {
                    return r
                });
                var r = {
                    animationIterationCount: 1,
                    aspectRatio: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                }
            }, , function(e, t) {
                e.exports = function(e, t, n, r) {
                    var a = n ? n.call(r, e, t) : void 0;
                    if (void 0 !== a) return !!a;
                    if (e === t) return !0;
                    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                    var o = Object.keys(e),
                        i = Object.keys(t);
                    if (o.length !== i.length) return !1;
                    for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < o.length; l++) {
                        var c = o[l];
                        if (!s(c)) return !1;
                        var u = e[c],
                            d = t[c];
                        if (!1 === (a = n ? n.call(r, u, d, c) : void 0) || void 0 === a && u !== d) return !1
                    }
                    return !0
                }
            }, function(e, t, n) {
                e.exports = n(41)
            }, , , function(e, t, n) {
                "use strict";
                var r = n(11),
                    a = n(24),
                    o = n(42),
                    i = n(30);

                function s(e) {
                    var t = new o(e),
                        n = a(o.prototype.request, t);
                    return r.extend(n, o.prototype, t), r.extend(n, t), n
                }
                var l = s(n(27));
                l.Axios = o, l.create = function(e) {
                    return s(i(l.defaults, e))
                }, l.Cancel = n(31), l.CancelToken = n(55), l.isCancel = n(26), l.all = function(e) {
                    return Promise.all(e)
                }, l.spread = n(56), e.exports = l, e.exports.default = l
            }, function(e, t, n) {
                "use strict";
                var r = n(11),
                    a = n(25),
                    o = n(43),
                    i = n(44),
                    s = n(30);

                function l(e) {
                    this.defaults = e, this.interceptors = {
                        request: new o,
                        response: new o
                    }
                }
                l.prototype.request = function(e) {
                    "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                    var t = [i, void 0],
                        n = Promise.resolve(e);
                    for (this.interceptors.request.forEach(function(e) {
                            t.unshift(e.fulfilled, e.rejected)
                        }), this.interceptors.response.forEach(function(e) {
                            t.push(e.fulfilled, e.rejected)
                        }); t.length;) n = n.then(t.shift(), t.shift());
                    return n
                }, l.prototype.getUri = function(e) {
                    return a((e = s(this.defaults, e)).url, e.params, e.paramsSerializer).replace(/^\?/, "")
                }, r.forEach(["delete", "get", "head", "options"], function(e) {
                    l.prototype[e] = function(t, n) {
                        return this.request(r.merge(n || {}, {
                            method: e,
                            url: t
                        }))
                    }
                }), r.forEach(["post", "put", "patch"], function(e) {
                    l.prototype[e] = function(t, n, a) {
                        return this.request(r.merge(a || {}, {
                            method: e,
                            url: t,
                            data: n
                        }))
                    }
                }), e.exports = l
            }, function(e, t, n) {
                "use strict";
                var r = n(11);

                function a() {
                    this.handlers = []
                }
                a.prototype.use = function(e, t) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t
                    }), this.handlers.length - 1
                }, a.prototype.eject = function(e) {
                    this.handlers[e] && (this.handlers[e] = null)
                }, a.prototype.forEach = function(e) {
                    r.forEach(this.handlers, function(t) {
                        null !== t && e(t)
                    })
                }, e.exports = a
            }, function(e, t, n) {
                "use strict";
                var r = n(11),
                    a = n(45),
                    o = n(26),
                    i = n(27);

                function s(e) {
                    e.cancelToken && e.cancelToken.throwIfRequested()
                }
                e.exports = function(e) {
                    return s(e), e.headers = e.headers || {}, e.data = a(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
                        delete e.headers[t]
                    }), (e.adapter || i.adapter)(e).then(function(t) {
                        return s(e), t.data = a(t.data, t.headers, e.transformResponse), t
                    }, function(t) {
                        return o(t) || (s(e), t && t.response && (t.response.data = a(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                    })
                }
            }, function(e, t, n) {
                "use strict";
                var r = n(11);
                e.exports = function(e, t, n) {
                    return r.forEach(n, function(n) {
                        e = n(e, t)
                    }), e
                }
            }, function(e, t, n) {
                "use strict";
                var r = n(11);
                e.exports = function(e, t) {
                    r.forEach(e, function(n, r) {
                        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
                    })
                }
            }, function(e, t, n) {
                "use strict";
                var r = n(29);
                e.exports = function(e, t, n) {
                    var a = n.config.validateStatus;
                    !a || a(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
                }
            }, function(e, t, n) {
                "use strict";
                e.exports = function(e, t, n, r, a) {
                    return e.config = t, n && (e.code = n), e.request = r, e.response = a, e.isAxiosError = !0, e.toJSON = function() {
                        return {
                            message: this.message,
                            name: this.name,
                            description: this.description,
                            number: this.number,
                            fileName: this.fileName,
                            lineNumber: this.lineNumber,
                            columnNumber: this.columnNumber,
                            stack: this.stack,
                            config: this.config,
                            code: this.code
                        }
                    }, e
                }
            }, function(e, t, n) {
                "use strict";
                var r = n(50),
                    a = n(51);
                e.exports = function(e, t) {
                    return e && !r(t) ? a(e, t) : t
                }
            }, function(e, t, n) {
                "use strict";
                e.exports = function(e) {
                    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
                }
            }, function(e, t, n) {
                "use strict";
                e.exports = function(e, t) {
                    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                }
            }, function(e, t, n) {
                "use strict";
                var r = n(11),
                    a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                e.exports = function(e) {
                    var t, n, o, i = {};
                    return e && r.forEach(e.split("\n"), function(e) {
                        o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t && !(i[t] && a.indexOf(t) >= 0) && (i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n)
                    }), i
                }
            }, function(e, t, n) {
                "use strict";
                var r = n(11);
                e.exports = r.isStandardBrowserEnv() ? function() {
                    var e, t = /(msie|trident)/i.test(navigator.userAgent),
                        n = document.createElement("a");

                    function a(e) {
                        var r = e;
                        return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                            href: n.href,
                            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                            host: n.host,
                            search: n.search ? n.search.replace(/^\?/, "") : "",
                            hash: n.hash ? n.hash.replace(/^#/, "") : "",
                            hostname: n.hostname,
                            port: n.port,
                            pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                        }
                    }
                    return e = a(window.location.href),
                        function(t) {
                            var n = r.isString(t) ? a(t) : t;
                            return n.protocol === e.protocol && n.host === e.host
                        }
                }() : function() {
                    return !0
                }
            }, function(e, t, n) {
                "use strict";
                var r = n(11);
                e.exports = r.isStandardBrowserEnv() ? {
                    write: function(e, t, n, a, o, i) {
                        var s = [];
                        s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(a) && s.push("path=" + a), r.isString(o) && s.push("domain=" + o), !0 === i && s.push("secure"), document.cookie = s.join("; ")
                    },
                    read: function(e) {
                        var t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null
                    },
                    remove: function(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write: function() {},
                    read: function() {
                        return null
                    },
                    remove: function() {}
                }
            }, function(e, t, n) {
                "use strict";
                var r = n(31);

                function a(e) {
                    if ("function" != typeof e) throw TypeError("executor must be a function.");
                    this.promise = new Promise(function(e) {
                        t = e
                    });
                    var t, n = this;
                    e(function(e) {
                        n.reason || (n.reason = new r(e), t(n.reason))
                    })
                }
                a.prototype.throwIfRequested = function() {
                    if (this.reason) throw this.reason
                }, a.source = function() {
                    var e;
                    return {
                        token: new a(function(t) {
                            e = t
                        }),
                        cancel: e
                    }
                }, e.exports = a
            }, function(e, t, n) {
                "use strict";
                e.exports = function(e) {
                    return function(t) {
                        return e.apply(null, t)
                    }
                }
            }, function(e, t, n) {
                "use strict";
                var r = n(58);

                function a() {}

                function o() {}
                o.resetWarningCache = a, e.exports = function() {
                    function e(e, t, n, a, o, i) {
                        if (i !== r) {
                            var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw s.name = "Invariant Violation", s
                        }
                    }

                    function t() {
                        return e
                    }
                    e.isRequired = e;
                    var n = {
                        array: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: o,
                        resetWarningCache: a
                    };
                    return n.PropTypes = n, n
                }
            }, function(e, t, n) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            }, , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = t.GARTNER_DOMAIN = "https://www.gartner.com",
                    a = t.IMAGES_LOC = r + "/imagesrv/apps/peerinsights/images",
                    o = (t.PI_LOGO = a + "/logo-2022.svg", t.PI_HOME_PAGE = "/peer-insights/home", t.COMMUNITY_HOME_PAGE = "/peer-community/home");
                t.COMMUNITY_HOME_PAGE_WITH_PREFER_LOGIN = o + "?prefer_login=true", t.FOR_VENDORS = "/peer-insights/vendor-portal/company-selection", t.PRODUCT_REVIEWS_URL = "/reviews/markets", t.BENCHMARK_SURVEYS_URL = "/peer-insights/reports/industry/unanswered", t.ONE_MINUTE_INSIGHTS_URL = "/peer-insights/reports/industry/oneminuteinsights", t.PEER_FINDER_URL = "/peer-insights/peer-finder", t.VENDOR_DIRECTORY_URL = "/reviews/vendors", t.AMBASSADOR_PGM_URL = "/ambassador", t.EVANTA_URL = "https://www.evanta.com/", t.DESTINATION_CONFERENCES_URL = r + "/en/conferences/calendar", t.GARTNER_COM = r + "/myhomepage", t.WRITE_REVIEW = "/reviews/survey/vendor-product", t.WRITE_REVIEW_HAMBURGER = "/reviews/survey/vendor-product?source=hamburger-war", t.WRITE_REVIEW_HEADER = "/reviews/survey/vendor-product?source=header-war", t.PLUS_LINK = "/peer-insights", t.MY_PROFILE_DETAILS = "/reviews/account/profile", t.MY_CONTENT = "/peer-insights/my-content", t.MY_REVIEWS = "/reviews/account/reviews", t.MY_BADGES = "/reviews/account/dashboard", t.MY_REWARDS = "/peer-insights/redeem", t.MY_EMAIL_PREFERENCES = "/reviews/account/profile#emailPref", t.MANAGE_MY_PASSWORD = "/reviews/account/profile#password", t.PLUS_RESOURCE_CENTER = "/reviews/resources/research", t.NOTIFICATIONS_URL = "/peer-insights/notifications", t.ADD_POLL = "/peer-insights/home#add-a-poll", t.ASK_A_QUESTION = "/peer-insights/home#ask-a-question", t.VENDOR_PORTAL_URL = "/peer-insights/vendor-portal/login", t.GPI_PLUS_URL = "/reviews/resources/research", t.REFER_PEERS_URL = "/reviews/account/referpeers", t.GET_STARTED_URL = "/peer-insights/vendor-portal/overview", t.GET_LISTED_URL = "https://gpivendorresources.gartner.com/en/articles/6750363-getting-started-with-peer-insights", t.LEARN_MORE_URL = "https://www.gartner.com/reviews-pages/technology-provider-info", t.getCommunityProfile = function(e) {
                    return "/peer-insights/profile/" + e
                }, t.LOGOFF_URL = "/reviews/logout/redirect", t.getLoginUrl = function(e) {
                    return "/reviews/auth/authorize?step=login&activityType=eu_sign_up&returnTo=" + encodeURIComponent(e)
                }, t.getSearchUrl = function(e) {
                    return "/peer-insights/search?text=" + e
                }
            }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(e) {
                    var t = e.app,
                        n = e.isLoggedIn,
                        s = "Community" === t ? n ? a.COMMUNITY_HOME_PAGE_WITH_PREFER_LOGIN : a.COMMUNITY_HOME_PAGE : a.PI_HOME_PAGE;
                    return r.default.createElement("a", {
                        href: s,
                        className: "logo",
                        "data-interaction": "navigation",
                        "data-navbar": "true",
                        "data-logo": "true",
                        "aria-label": "GPI or GPC Logo Icon"
                    }, "Community" === t ? r.default.createElement(o.LogoIconForCommunity, null) : r.default.createElement(i.default, null))
                };
                var r = s(n(0)),
                    a = n(86),
                    o = n(179),
                    i = s(o);

                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    a = i(n(0)),
                    o = i(n(18));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var s = function(e) {
                    function t(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function(e, t) {
                            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t && ("object" == typeof t || "function" == typeof t) ? t : e
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.node = void 0, n.handleClickAway = function(e) {
                            n.node.contains(e.target) || n.props.nodeRef && n.props.nodeRef.contains(e.target) || n.props.onClickAway()
                        }, n.handleClickAway = n.handleClickAway.bind(n), n
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), r(t, [{
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("click", this.handleClickAway, !0)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("click", this.handleClickAway, !0)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.className,
                                r = t.children,
                                o = t.onClick;
                            return t.inlineStyle, a.default.createElement("div", {
                                className: n,
                                onClick: o,
                                ref: function(t) {
                                    return e.node = t
                                }
                            }, r)
                        }
                    }]), t
                }(a.default.Component);
                s.propTypes = {
                    className: o.default.string,
                    onClick: o.default.func,
                    onClickAway: o.default.func
                }, s.defaultProps = {
                    id: void 0,
                    className: "",
                    onClick: function() {},
                    onClickAway: function() {}
                }, t.default = s
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return function(e, t) {
                            var n = [],
                                r = !0,
                                a = !1,
                                o = void 0;
                            try {
                                for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                            } catch (e) {
                                a = !0, o = e
                            } finally {
                                try {
                                    !r && s.return && s.return()
                                } finally {
                                    if (a) throw o
                                }
                            }
                            return n
                        }(e, t);
                        throw TypeError("Invalid attempt to destructure non-iterable instance")
                    },
                    a = (t.colors = {
                        lightBackgroundColor: "#F6FBFC",
                        lightBorderColor: " #D3D3D3",
                        primaryGartnerColor: "#002856",
                        secondaryGartnerColor: "#40B3E1",
                        tertiaryGartnerColor: "#ED6926",
                        interactionLinkColor: "#0000A9",
                        interactionBtnColor: "#0000A9",
                        actuallyWhite: "#ffffff",
                        tabHoverBgColor: "#E9F5F8",
                        interactionColor: "#0000A9",
                        tabUnderline: "#40B3E1",
                        neutralColor: "#3E3E3E"
                    }, t.fonts = {
                        mainFontFamily: "Graphik Regular",
                        formalSans: "Roboto, Arial, sans-serif",
                        weightBold: "700",
                        normalOrange: "#ff6f1c"
                    }, t.offsets = {
                        unificationHeaderOffsetXS: "23px",
                        unificationHeaderOffsetSM: "90px",
                        unificationHeaderOffsetMD: "130px",
                        unificationHeaderOffsetLG: "153px",
                        unificationHeaderOffsetXL: "176px",
                        unificationHeaderOffsetXXL: "217px"
                    }, t.responsive = {
                        forXsMobileAndDown: function(e) {
                            return "@media (max-width: 320px) { " + a(e) + " }"
                        },
                        forMobileAndDown: function(e) {
                            return "@media (max-width: 415px) { " + a(e) + " }"
                        },
                        forXxsAndDown: function(e) {
                            return "@media (max-width: 599px) { " + a(e) + " }"
                        },
                        forXsAndUp: function(e) {
                            return "" + a(e)
                        },
                        forXsAndDown: function(e) {
                            return "@media (max-width: 768px) { " + a(e) + " }"
                        },
                        forSmAndUp: function(e) {
                            return "@media (min-width: 768px) { " + a(e) + " }"
                        },
                        forSmAndDown: function(e) {
                            return "@media (max-width: 991.98px) { " + a(e) + " }"
                        },
                        forMdAndUp: function(e) {
                            return "@media (min-width: 992px) { " + a(e) + " }"
                        },
                        forMdAndDown: function(e) {
                            return "@media (max-width: 1199.98px) { " + a(e) + " }"
                        },
                        forLgAndUp: function(e) {
                            return "@media (min-width: 1200px) { " + a(e) + " }"
                        },
                        forLgAndDown: function(e) {
                            return " " + a(e)
                        }
                    }, function(e) {
                        return Object.entries(e).map(function(e) {
                            var t = r(e, 2);
                            return t[0] + ":" + t[1]
                        }).join(";")
                    })
            }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.LogoIconForCommunity = void 0;
                var r = n(0),
                    a = r && r.__esModule ? r : {
                        default: r
                    };
                t.LogoIconForCommunity = function() {
                    return a.default.createElement("svg", {
                        width: "160",
                        height: "44",
                        viewBox: "0 0 160 44",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.default.createElement("path", {
                        d: "M10.9034 28.5856V28.6752C10.9034 32.0807 8.37379 33.4026 5.35602 33.4026H2.78205V39.9224H0.851562V23.903H5.35602C8.39598 23.903 10.9034 25.2473 10.9034 28.5856ZM8.9729 28.6752V28.5856C8.9729 26.3227 7.64154 25.4713 5.48916 25.4713H2.78205V31.8567H5.48916C7.75248 31.8567 8.9729 30.7364 8.9729 28.6752Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M11.325 34.1867V34.0075C11.325 30.4676 13.5661 28.0031 16.7614 28.0031C19.4463 28.0031 21.9759 29.6386 21.9759 33.8283V34.4332H13.2332C13.322 37.0994 14.5868 38.5781 16.9611 38.5781C18.7584 38.5781 19.8013 37.9059 20.0454 36.5392H21.8871C21.4877 38.8917 19.5572 40.124 16.9389 40.124C13.6548 40.124 11.325 37.7939 11.325 34.1867ZM16.7614 29.549C14.8753 29.549 13.6105 30.8484 13.2998 32.9321H20.0898C19.9123 30.5124 18.6697 29.549 16.7614 29.549Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M23.4987 34.1867V34.0075C23.4987 30.4676 25.7398 28.0031 28.9351 28.0031C31.62 28.0031 34.1496 29.6386 34.1496 33.8283V34.4332H25.4069C25.4957 37.0994 26.7605 38.5781 29.1348 38.5781C30.9321 38.5781 31.975 37.9059 32.2191 36.5392H34.0608C33.6614 38.8917 31.7309 40.124 29.1126 40.124C25.8285 40.124 23.4987 37.7939 23.4987 34.1867ZM28.9351 29.549C27.049 29.549 25.7842 30.8484 25.4735 32.9321H32.2635C32.086 30.5124 30.8434 29.549 28.9351 29.549Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M38.2214 30.3107C38.9536 28.9889 39.9521 28.0703 42.0379 28.0031V29.7506C39.7081 29.8626 38.2214 30.602 38.2214 33.4922V39.9223H36.3796V28.2047H38.2214V30.3107Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M48.1844 32.0135V31.8343C48.1844 27.0845 51.3354 23.6566 55.6401 23.6566C58.9463 23.6566 61.7422 25.4265 62.0751 28.8993H60.1668C59.7673 26.4571 58.3694 25.2025 55.6623 25.2025C52.3783 25.2025 50.1815 27.779 50.1815 31.8119V31.9911C50.1815 36.0688 52.2229 38.5333 55.6401 38.5333C58.2363 38.5333 60.0336 37.2114 60.433 34.6124H62.2304C61.6756 38.3092 59.146 40.124 55.5957 40.124C51.0025 40.124 48.1844 36.9425 48.1844 32.0135Z",
                        fill: "#ED6926"
                    }), a.default.createElement("path", {
                        d: "M63.4397 34.1643V33.9851C63.4397 30.4676 65.8583 28.0031 69.1424 28.0031C72.4264 28.0031 74.8451 30.4452 74.8451 33.9627V34.1419C74.8451 37.6819 72.4264 40.124 69.1202 40.124C65.814 40.124 63.4397 37.5923 63.4397 34.1643ZM72.9368 34.1643V34.0075C72.9368 31.2965 71.4501 29.549 69.1424 29.549C66.8347 29.549 65.348 31.2965 65.348 33.9851V34.1643C65.348 36.8305 66.7903 38.5781 69.1424 38.5781C71.4945 38.5781 72.9368 36.8081 72.9368 34.1643Z",
                        fill: "#ED6926"
                    }), a.default.createElement("path", {
                        d: "M78.5424 29.9971C79.075 28.8992 80.3398 28.0031 82.004 28.0031C83.4907 28.0031 84.7998 28.6304 85.399 30.1987C86.1978 28.6752 87.9285 28.0031 89.3709 28.0031C91.4567 28.0031 93.2762 29.2577 93.2762 32.6632V39.9223H91.4345V32.5288C91.4345 30.4676 90.5691 29.6162 88.9715 29.6162C87.4626 29.6162 85.9093 30.6468 85.9093 32.7528V39.9223H84.0676V32.5288C84.0676 30.4676 83.2022 29.6162 81.6046 29.6162C80.0957 29.6162 78.5424 30.6468 78.5424 32.7528V39.9223H76.7007V28.2047H78.5424V29.9971Z",
                        fill: "#ED6926"
                    }), a.default.createElement("path", {
                        d: "M97.6309 29.9971C98.1635 28.8992 99.4283 28.0031 101.092 28.0031C102.579 28.0031 103.888 28.6304 104.487 30.1987C105.286 28.6752 107.017 28.0031 108.459 28.0031C110.545 28.0031 112.365 29.2577 112.365 32.6632V39.9223H110.523V32.5288C110.523 30.4676 109.658 29.6162 108.06 29.6162C106.551 29.6162 104.998 30.6468 104.998 32.7528V39.9223H103.156V32.5288C103.156 30.4676 102.291 29.6162 100.693 29.6162C99.1842 29.6162 97.6309 30.6468 97.6309 32.7528V39.9223H95.7892V28.2047H97.6309V29.9971Z",
                        fill: "#ED6926"
                    }), a.default.createElement("path", {
                        d: "M114.539 35.6207V28.2047H116.381V35.531C116.381 37.5923 117.246 38.5109 119.066 38.5109C120.708 38.5109 122.261 37.413 122.261 35.307V28.2047H124.103V39.9224H122.261V38.0628C121.729 39.1606 120.442 40.124 118.578 40.124C116.27 40.124 114.539 38.8469 114.539 35.6207Z",
                        fill: "#ED6926"
                    }), a.default.createElement("path", {
                        d: "M128.341 30.0643C128.874 28.9665 130.161 28.0031 132.069 28.0031C134.465 28.0031 136.152 29.3249 136.152 32.7304V39.9223H134.31V32.596C134.31 30.5348 133.445 29.6162 131.581 29.6162C129.872 29.6162 128.341 30.714 128.341 32.8201V39.9223H126.499V28.2047H128.341V30.0643Z",
                        fill: "#ED6926"
                    }), a.default.createElement("path", {
                        d: "M137.927 24.5304C137.927 23.8582 138.482 23.2981 139.147 23.2981C139.813 23.2981 140.368 23.8582 140.368 24.5304C140.368 25.2025 139.813 25.7626 139.147 25.7626C138.482 25.7626 137.927 25.2025 137.927 24.5304ZM140.102 39.9224H138.26V28.2047H140.102V39.9224Z",
                        fill: "#ED6926"
                    }), a.default.createElement("path", {
                        d: "M143.386 36.9874V29.7731H141.721V28.2047H143.386V25.5386H145.227V28.2047H147.934V29.7731H145.227V36.8081C145.227 37.9508 145.738 38.5109 146.67 38.5109C147.246 38.5109 147.69 38.4213 148.09 38.2644V39.8328C147.712 39.9672 147.269 40.0792 146.514 40.0792C144.406 40.0792 143.386 38.8246 143.386 36.9874Z",
                        fill: "#ED6926"
                    }), a.default.createElement("path", {
                        d: "M151.085 28.2047L154.636 36.6065L157.853 28.2047H159.739L153.326 44H151.463L153.659 38.7125L149.11 28.2047H151.085Z",
                        fill: "#ED6926"
                    }), a.default.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M58.827 6.50017H57.9894C56.6553 6.50017 55.9591 7.58399 55.9591 8.62021V13.3028H53.5903V4.42773H55.8342L55.8814 5.53677C56.3529 4.77781 57.1767 4.42773 58.1919 4.42773H58.9962L58.8243 6.50017H58.827Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M42.576 13.3057H40.2045V8.61468C40.2045 7.63167 40.1213 6.39662 38.7539 6.39662C37.3864 6.39662 36.9121 7.35442 36.9121 8.47465V13.3057H34.5406V4.4278H36.7374L36.7873 5.56204C37.2589 4.80308 38.1353 4.21216 39.4307 4.21216C41.8188 4.21216 42.5732 5.93732 42.5732 7.73249V13.3057",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M33.5088 11.2304L33.3424 13.2496C32.7738 13.4065 32.269 13.4597 31.6588 13.4597C29.426 13.4597 28.7742 12.4235 28.7742 10.3426V1.92688H31.1457V4.4278H33.5061L33.3397 6.50024H31.1457V10.1634C31.1457 10.998 31.3703 11.4489 32.2219 11.4489C32.588 11.4489 32.9985 11.4041 33.5061 11.2304",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M27.8172 6.50017H27.1737C25.8396 6.50017 25.1739 7.58399 25.1739 8.62021V13.3028H22.8052V4.42773H25.0491L25.0962 5.53677C25.5678 4.77781 26.3915 4.42773 27.4095 4.42773H28.0003L27.8172 6.50017Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12.1043 12.3224C10.4984 13.1934 8.89242 13.6919 6.77056 13.6303C2.83748 13.5071 0 11.0398 0 6.86969C0 2.69962 2.86521 0.0614672 6.77056 -0.000145637C8.75374 -0.0309521 10.5234 0.475954 11.9074 1.71381L10.2377 3.41937C9.38059 2.68001 8.12134 2.24872 6.61246 2.31874C4.1522 2.43356 2.67106 4.24274 2.63777 6.72406C2.60449 9.41542 4.23819 11.2694 6.78997 11.3394C7.99098 11.3702 8.85082 11.2078 9.59694 10.8689V8.11875H6.9453L7.12282 5.86148H12.1016V12.3224",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M52.5308 9.70971H46.0321C46.2179 10.844 47.0972 11.5245 48.1955 11.5581C49.2634 11.5889 49.8597 11.2584 50.6391 10.4603L52.1869 11.6533C51.0885 13.0228 49.771 13.5241 48.2676 13.5241C45.6243 13.5241 43.6439 11.6533 43.6439 8.86674C43.6439 6.08016 45.6132 4.21497 48.1678 4.21497C50.9831 4.21497 52.5308 5.94013 52.5308 9.00117V9.70971ZM50.1538 7.85573C50.0816 6.73549 49.2495 6.02694 48.1068 6.07175C46.9557 6.11656 46.1874 6.87272 46.0293 7.85573H50.1538Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M21.3129 7.49164V13.3029H19.2216L19.1717 12.4263C18.5309 13.23 17.488 13.5213 16.4174 13.5213C14.8031 13.5213 13.2776 12.7147 13.2471 10.8411C13.1999 7.89493 16.5256 7.68488 18.6142 7.68488H19.033V7.57006C19.033 6.59546 18.395 6.06895 17.194 6.06895C16.3314 6.06895 15.4799 6.41902 14.853 7.01554L13.4856 5.60965C14.7282 4.59304 16.0208 4.21216 17.3965 4.21216C20.1147 4.21216 21.3129 5.48362 21.3129 7.49164ZM19.033 9.42965H18.7001C17.5796 9.43525 15.6075 9.49126 15.613 10.6787C15.6241 12.3479 19.0302 11.8213 19.0302 9.80213V9.43245L19.033 9.42965Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M57.2127 12.6194C57.2127 11.8885 57.7508 11.3368 58.4414 11.3368C59.1321 11.3368 59.6591 11.8885 59.6591 12.6194C59.6591 13.3504 59.121 13.9105 58.4414 13.9105C57.7619 13.9105 57.2127 13.3616 57.2127 12.6194ZM58.4414 14.1654C59.2597 14.1654 59.9614 13.5128 59.9614 12.6194C59.9614 11.726 59.2597 11.0819 58.4414 11.0819C57.6232 11.0819 56.9076 11.7344 56.9076 12.6194C56.9076 13.5044 57.6093 14.1654 58.4414 14.1654ZM58.1225 12.7427H58.4248L58.8852 13.5128H59.1792L58.6855 12.7287C58.9407 12.695 59.1376 12.5578 59.1376 12.2386C59.1376 11.8885 58.9324 11.7344 58.5219 11.7344H57.8617V13.5128H58.1252V12.7427H58.1225ZM58.1225 12.5102V11.9613H58.483C58.6661 11.9613 58.863 12.0005 58.863 12.2217C58.863 12.4962 58.6606 12.5102 58.4414 12.5102H58.1252H58.1225Z",
                        fill: "#002856"
                    }))
                }, t.default = function() {
                    return a.default.createElement("svg", {
                        width: "127",
                        height: "44",
                        viewBox: "0 0 127 44",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.default.createElement("g", {
                        clipPath: "url(#clip0_1204_31953)"
                    }, a.default.createElement("path", {
                        d: "M59.467 4.41113L59.2995 6.47712H58.4619C57.1218 6.47712 56.4238 7.56595 56.4238 8.59895V13.2614H54.0508V4.41113H56.3122L56.368 5.52788C56.8426 4.77408 57.6802 4.41113 58.6853 4.41113H59.467Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M42.9112 13.2334H40.5101V8.57099C40.5101 7.59384 40.4264 6.36541 39.0584 6.36541C37.7462 6.36541 37.2157 7.31465 37.2157 8.4314V13.2334H34.8147V4.41109H37.0203L37.0761 5.52785C37.5508 4.77404 38.4442 4.18774 39.7284 4.18774C42.1294 4.18774 42.8832 5.91871 42.8832 7.70551V13.2334H42.9112Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M33.7817 11.1675L33.6142 13.1776C33.0279 13.3451 32.5254 13.3731 31.9112 13.3731C29.6497 13.3731 29.0076 12.3401 29.0076 10.2741V1.89844H31.4086V4.38321H33.7817L33.6142 6.4492H31.4086V10.1066C31.4086 10.9441 31.632 11.3908 32.4975 11.3908C32.8604 11.3908 33.2792 11.3629 33.7817 11.1675Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M28.2259 4.41113L28.0305 6.47712H27.3883C26.0482 6.47712 25.3782 7.56595 25.3782 8.59895V13.2614H22.9772V4.41113H25.2386L25.2944 5.52788C25.769 4.77408 26.6066 4.41113 27.6396 4.41113H28.2259Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M12.2005 12.2563C10.5812 13.1218 8.96193 13.6243 6.81218 13.5685C2.87563 13.4568 0.027916 10.9999 0.027916 6.84005C0.027916 2.68015 2.90355 0.0557857 6.8401 -5.18998e-05C8.82233 -0.0558895 10.6091 0.474567 12.0051 1.70299L10.3299 3.40604C9.46446 2.65223 8.20812 2.23345 6.67259 2.28929C4.21573 2.40096 2.70812 4.21568 2.6802 6.70046C2.65228 9.38066 4.29949 11.2233 6.86802 11.3071C8.06852 11.335 8.93401 11.1675 9.68781 10.8324V8.09639H7.00761L7.17512 5.83497H12.2005V12.2563Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M50.5609 7.81722C50.4771 6.70047 49.6396 6.0025 48.4949 6.03042C47.3223 6.08626 46.5685 6.84006 46.401 7.81722H50.5609ZM52.934 9.65986H46.3731C46.5685 10.7766 47.4619 11.4746 48.5508 11.5025C49.6396 11.5304 50.2259 11.1954 51.0076 10.4137L52.5711 11.6142C51.4543 12.9822 50.1421 13.4847 48.6066 13.4847C45.9543 13.4847 43.9442 11.6142 43.9442 8.85022C43.9442 6.08626 45.9264 4.2157 48.4949 4.2157C51.3426 4.2157 52.8782 5.94666 52.8782 8.98981V9.65986H52.934Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M19.1802 9.38064H18.8452C17.7284 9.38064 15.7183 9.43647 15.7462 10.6091C15.7462 12.2842 19.1802 11.7537 19.1802 9.74358V9.38064ZM21.4975 7.45424V13.2334H19.4036L19.3477 12.3679C18.7056 13.1776 17.6447 13.4568 16.5838 13.4568C14.9645 13.4568 13.4289 12.6471 13.401 10.7766C13.3452 7.8451 16.6954 7.62175 18.8173 7.62175H19.236V7.538C19.236 6.56084 18.5939 6.03038 17.3934 6.03038C16.5279 6.03038 15.6624 6.36541 15.0482 6.97962L13.6802 5.58368C14.9366 4.57861 16.2208 4.18774 17.6168 4.18774C20.269 4.18774 21.4975 5.44409 21.4975 7.45424Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M58.3223 12.1446V11.7258H58.6015C58.7411 11.7258 58.9086 11.7537 58.9086 11.9212C58.9086 12.1446 58.7411 12.1446 58.5736 12.1446H58.3223ZM58.3223 12.3121H58.5736L58.9365 12.8984H59.1599L58.769 12.2842C58.9645 12.2563 59.132 12.1446 59.132 11.8933C59.132 11.6141 58.9645 11.5025 58.6574 11.5025H58.1269V12.8705H58.3223V12.3121ZM58.5736 13.4009C59.2157 13.4009 59.7741 12.8984 59.7741 12.2004C59.7741 11.5304 59.2157 11.0278 58.5736 11.0278C57.9315 11.0278 57.3731 11.5304 57.3731 12.2004C57.3452 12.8984 57.9035 13.4009 58.5736 13.4009ZM57.5964 12.2283C57.5964 11.67 58.0152 11.2512 58.5736 11.2512C59.1041 11.2512 59.5508 11.67 59.5508 12.2283C59.5508 12.8146 59.132 13.2334 58.5736 13.2334C58.0152 13.2055 57.5964 12.7867 57.5964 12.2283Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M10.9721 28.5609V28.6447C10.9721 31.995 8.45939 33.3071 5.44416 33.3071H2.87563V39.7285H0.977158V23.9543H5.47208C8.48731 23.9543 10.9721 25.2944 10.9721 28.5609ZM9.0736 28.6726V28.5889C9.0736 26.3554 7.7335 25.5178 5.61168 25.5178H2.90355V31.8274H5.58376C7.84518 31.7995 9.0736 30.7107 9.0736 28.6726Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M11.5025 34.1167V33.9492C11.5025 30.4593 13.736 28.0304 16.9188 28.0304C19.599 28.0304 22.1117 29.6497 22.1117 33.7817V34.368H13.4289C13.5127 36.9923 14.769 38.4441 17.1421 38.4441C18.9289 38.4441 19.9619 37.7741 20.2132 36.4339H22.0558C21.665 38.7512 19.7386 39.9796 17.1142 39.9796C13.8477 39.9517 11.5025 37.6624 11.5025 34.1167ZM16.9467 29.538C15.0761 29.538 13.8198 30.8223 13.5127 32.8883H20.269C20.0736 30.4872 18.8452 29.538 16.9467 29.538Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M23.731 34.1167V33.9492C23.731 30.4593 25.9645 28.0304 29.1472 28.0304C31.8274 28.0304 34.3401 29.6497 34.3401 33.7817V34.368H25.6294C25.7132 36.9923 26.9695 38.4441 29.3426 38.4441C31.1294 38.4441 32.1624 37.7741 32.4137 36.4339H34.2563C33.8655 38.7512 31.9391 39.9796 29.3147 39.9796C26.0482 39.9517 23.731 37.6624 23.731 34.1167ZM29.1472 29.538C27.2766 29.538 26.0203 30.8223 25.6853 32.8883H32.4416C32.302 30.4872 31.0457 29.538 29.1472 29.538Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M38.5 30.264C39.2259 28.9518 40.231 28.0584 42.297 27.9746V29.7056C39.9797 29.8172 38.5 30.5431 38.5 33.3909V39.7284H36.6574V28.198H38.5V30.264Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M50.3376 39.7564H48.4112V23.9543H50.3376V39.7564Z",
                        fill: "#40B3E1"
                    }), a.default.createElement("path", {
                        d: "M54.8604 30.0406C55.3909 28.9518 56.6751 28.0026 58.5736 28.0026C60.9746 28.0026 62.6497 29.3147 62.6497 32.665V39.7564H60.8071V32.5254C60.8071 30.4873 59.9416 29.5939 58.099 29.5939C56.3959 29.5939 54.8604 30.6828 54.8604 32.7488V39.7564H53.0178V28.198H54.8604V30.0406Z",
                        fill: "#40B3E1"
                    }), a.default.createElement("path", {
                        d: "M64.1294 36.2107H65.9162C66.0558 37.5787 66.7817 38.4442 68.6523 38.4442C70.3832 38.4442 71.165 37.8579 71.165 36.6015C71.165 35.3452 70.2716 34.9823 68.4568 34.6472C65.4416 34.0889 64.4365 33.2513 64.4365 31.2411C64.4365 29.0914 66.5305 28.0026 68.3452 28.0026C70.4112 28.0026 72.2259 28.8401 72.533 31.3528H70.7741C70.5228 30.0965 69.797 29.5381 68.3452 29.5381C67.0051 29.5381 66.1675 30.2081 66.1675 31.1853C66.1675 32.2183 66.7538 32.6371 68.8756 33.0279C71.2766 33.4746 72.9518 34.0051 72.9518 36.462C72.9518 38.5559 71.5279 39.9797 68.7081 39.9797C65.9162 39.9518 64.2411 38.5559 64.1294 36.2107Z",
                        fill: "#40B3E1"
                    }), a.default.createElement("path", {
                        d: "M74.6548 24.5685C74.6548 23.8985 75.1853 23.3401 75.8832 23.3401C76.5812 23.3401 77.1117 23.8705 77.1117 24.5406C77.1117 25.2106 76.5812 25.769 75.8832 25.769C75.2132 25.769 74.6548 25.2386 74.6548 24.5685ZM76.8325 39.7563H74.9898V28.198H76.8325V39.7563Z",
                        fill: "#40B3E1"
                    }), a.default.createElement("path", {
                        d: "M79.1218 40.4264H80.9924C81.2716 41.7665 82.3604 42.4365 84.3426 42.4365C86.604 42.4365 88.0558 41.3477 88.0558 38.8629V37.1878C87.1903 38.5279 85.7386 39.3376 84.1472 39.3655C81.104 39.3655 78.8705 37.0761 78.8705 33.8934V33.7259C78.8705 30.599 81.0761 27.9746 84.2589 27.9746C86.1853 27.9746 87.3858 28.8959 88.0279 30.0406V28.198H89.8426V38.9746C89.8147 42.3249 87.5533 43.9721 84.3147 43.9721C80.9365 44 79.4289 42.3807 79.1218 40.4264ZM88.1117 33.7817V33.6142C88.1117 31.0178 86.6878 29.5101 84.4543 29.5101C82.165 29.5101 80.7969 31.2132 80.7969 33.6421V33.8096C80.7969 36.3223 82.4162 37.8299 84.3705 37.8299C86.4924 37.8579 88.1117 36.3502 88.1117 33.7817Z",
                        fill: "#40B3E1"
                    }), a.default.createElement("path", {
                        d: "M94.6168 30.0406C95.1472 28.9518 96.4315 28.0025 98.33 28.0025C100.703 28.0025 102.406 29.3147 102.406 32.665V39.7563H100.563V32.5254C100.563 30.4873 99.698 29.5939 97.8553 29.5939C96.1523 29.5939 94.6168 30.6827 94.6168 32.7487V39.7563H92.7741V22.67H94.6168V30.0406Z",
                        fill: "#40B3E1"
                    }), a.default.createElement("path", {
                        d: "M105.365 36.8807V29.7614H103.718V28.198H105.365V25.5736H107.208V28.198H109.916V29.7614H107.208V36.7132C107.208 37.83 107.711 38.3883 108.632 38.3883C109.107 38.3883 109.609 38.3046 110.056 38.1371V39.6726C109.553 39.8401 109.023 39.9239 108.492 39.9239C106.371 39.9239 105.365 38.6675 105.365 36.8807Z",
                        fill: "#40B3E1"
                    }), a.default.createElement("path", {
                        d: "M110.949 36.2107H112.736C112.876 37.5787 113.602 38.4442 115.444 38.4442C117.203 38.4442 117.957 37.8579 117.957 36.6015C117.957 35.3452 117.063 34.9823 115.249 34.6472C112.233 34.0889 111.228 33.2513 111.228 31.2411C111.228 29.0914 113.322 28.0026 115.137 28.0026C117.203 28.0026 119.018 28.8401 119.325 31.3528H117.566C117.287 30.0965 116.589 29.5381 115.137 29.5381C113.797 29.5381 112.959 30.2081 112.959 31.1853C112.959 32.2183 113.546 32.6371 115.668 33.0279C118.069 33.4746 119.744 34.0051 119.744 36.462C119.744 38.5559 118.32 39.9797 115.5 39.9797C112.708 39.9518 111.061 38.5559 110.949 36.2107Z",
                        fill: "#40B3E1"
                    }), a.default.createElement("path", {
                        d: "M121.279 37.2716H123.373V37.6904H122.591V40.0635H122.061V37.6904H121.279V37.2716Z",
                        fill: "#002856"
                    }), a.default.createElement("path", {
                        d: "M125.16 39.1979L125.886 37.2994H126.584V40.0913H126.053V37.9695L125.216 40.0913H125.048L124.211 37.9695V40.0913H123.736V37.2994H124.434L125.16 39.1979Z",
                        fill: "#002856"
                    })), a.default.createElement("defs", null, a.default.createElement("clipPath", {
                        id: "clip0_1204_31953"
                    }, a.default.createElement("rect", {
                        width: "126.584",
                        height: "44",
                        fill: "white"
                    }))))
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(0),
                    a = r && r.__esModule ? r : {
                        default: r
                    };
                t.default = function() {
                    return a.default.createElement("svg", {
                        className: "backArrowBtn",
                        width: "18",
                        height: "18",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.default.createElement("g", {
                        clipPath: "url(#clip0_1177_34919)"
                    }, a.default.createElement("path", {
                        className: "backArrowBtn",
                        d: "M26.6667 14.6669H10.44L17.8933 7.21353L16 5.33353L5.33334 16.0002L16 26.6669L17.88 24.7869L10.44 17.3335H26.6667V14.6669Z",
                        fill: "#002856"
                    })), a.default.createElement("defs", null, a.default.createElement("clipPath", {
                        id: "clip0_1177_34919"
                    }, a.default.createElement("rect", {
                        width: "32",
                        height: "32",
                        fill: "white"
                    }))))
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(0),
                    a = r && r.__esModule ? r : {
                        default: r
                    };
                t.default = function() {
                    return a.default.createElement("svg", {
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.default.createElement("g", {
                        clipPath: "url(#clip0_1319_28402)"
                    }, a.default.createElement("path", {
                        d: "M25.3334 8.54663L23.4534 6.66663L16.0001 14.12L8.54675 6.66663L6.66675 8.54663L14.1201 16L6.66675 23.4533L8.54675 25.3333L16.0001 17.88L23.4534 25.3333L25.3334 23.4533L17.8801 16L25.3334 8.54663Z",
                        fill: "#323232"
                    })), a.default.createElement("defs", null, a.default.createElement("clipPath", {
                        id: "clip0_1319_28402"
                    }, a.default.createElement("rect", {
                        width: "32",
                        height: "32",
                        fill: "white"
                    }))))
                }
            }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    a = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = v(n(0)),
                    i = v(n(18)),
                    s = v(n(38)),
                    l = v(n(147)),
                    c = v(n(238)),
                    u = v(n(239)),
                    d = v(n(243)),
                    p = v(n(245)),
                    f = v(n(248)),
                    h = v(n(259)),
                    m = n(86),
                    g = n(34);

                function v(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var y = void 0,
                    b = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t && ("object" == typeof t || "function" == typeof t) ? t : e
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return n.handleSearchClose = function() {
                                n.setState({
                                    searchOpen: !1
                                })
                            }, n.handleSearchOpen = function() {
                                n.setState({
                                    searchOpen: !0
                                })
                            }, n.handleLoginClick = function() {
                                var e = n.props.joinLoginClickCB;
                                e ? e() : window.location.href = (0, m.getLoginUrl)(window.location.href)
                            }, n.handleVendorClick = function() {
                                window.location.href = m.FOR_VENDORS
                            }, n.getSearchResults = function(e) {
                                clearTimeout(y), y = setTimeout(function() {
                                    n.setState({
                                        searchTerm: e,
                                        searchOpen: !0
                                    }, function() {
                                        var e = "/reviews/api2-proxy/reviews/market/vendor/product/search?searchTerm=" + n.state.searchTerm;
                                        s.default.get(e, (0, g.getParams)()).then(function(e) {
                                            e && n.setState({
                                                searchResults: e.data
                                            })
                                        }).catch(function(e) {
                                            console.log("Error while fetching search results:", e)
                                        })
                                    })
                                })
                            }, n.getUserProfile = n.getUserProfile.bind(n), n.state = {
                                searchOpen: !1,
                                userProfile: n.props.userProfile,
                                searchTerm: "",
                                isResultsOpen: !1,
                                searchResults: {},
                                userPermissions: n.props.userPermissions,
                                isClient: !1
                            }, n.handleSearchClose = n.handleSearchClose.bind(n), n.handleSearchOpen = n.handleSearchOpen.bind(n), n.handleLoginClick = n.handleLoginClick.bind(n), n.handleVendorClick = n.handleVendorClick.bind(n), n.backgroundClick = n.backgroundClick.bind(n), n.globals = (0, g.getGlobals)(e.env), n.node = void 0, n.backArrowRef = void 0, n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), a(t, [{
                            key: "componentDidMount",
                            value: function() {
                                this.setState({
                                    isClient: !0
                                }), void 0 !== ("undefined" == typeof window ? "undefined" : r(window)) && window.document.addEventListener("click", this.backgroundClick), (void 0 === this.props.isLoggedIn || 1 == this.props.isLoggedIn && void 0 === this.props.userProfile) && this.getUserProfile()
                            }
                        }, {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                this.props.isLoggedIn != e.isLoggedIn && void 0 === e.userProfile && this.getUserProfile()
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                void 0 !== ("undefined" == typeof window ? "undefined" : r(window)) && window.document.removeEventListener("click", this.backgroundClick)
                            }
                        }, {
                            key: "backgroundClick",
                            value: function(e) {
                                if (e.target.className && "backArrowBtn" === e.target.className.baseVal) this.setState({
                                    searchTerm: "",
                                    searchOpen: !1
                                });
                                else {
                                    if (this.node && this.node.contains(e.target)) return;
                                    var t = window.document.getElementById("universalSearchBox");
                                    t && t.value && t.value.length > 0 ? this.setState({
                                        searchTerm: "",
                                        searchOpen: !0
                                    }) : this.setState({
                                        searchTerm: "",
                                        searchOpen: !1
                                    })
                                }
                            }
                        }, {
                            key: "getUserProfile",
                            value: function() {
                                var e = this;
                                s.default.get("/reviews/user-proxy/pi/reviews/v1/userProfileData", (0, g.getParams)()).then(function(t) {
                                    if (t) {
                                        var n = (t || {}).data;
                                        e.setState({
                                            userProfile: n
                                        })
                                    }
                                }).catch(function(e) {
                                    console.log("Error while getting userprofile:", e)
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = (t.showNavLinks, t.app),
                                    r = t.hideAllNavigation,
                                    a = (t.results, t.includeSearch),
                                    i = t.userProfile,
                                    s = this.props.isLoggedIn;
                                i && i.userProfile && i.userProfile.user && (i.userProfile.user, s = !0);
                                var m = o.default.createElement(c.default, {
                                        isLoggedIn: s,
                                        addPollUrl: this.props.addPollUrl,
                                        askQuestionUrl: this.props.askQuestionUrl,
                                        isReviews: !0
                                    }),
                                    g = null;
                                if (s) {
                                    var v = this.state,
                                        y = v.userProfile,
                                        b = v.userPermissions,
                                        w = y || {},
                                        x = w.vendorAccess,
                                        C = w.isPlusMember,
                                        E = void 0 !== x ? x.status : "";
                                    g = o.default.createElement("div", null, o.default.createElement(p.default, {
                                        key: "profile",
                                        vendorUserStatus: E,
                                        isPlusMember: C,
                                        userPermissions: b,
                                        userProfile: y
                                    }))
                                }
                                var k = null;
                                return s || (k = o.default.createElement("div", {
                                    className: "login-button",
                                    onClick: this.handleLoginClick
                                }, "Join / Sign In")), o.default.createElement("div", {
                                    id: "universal-header",
                                    className: this.props.className + " unification-header",
                                    style: {
                                        display: "none"
                                    }
                                }, o.default.createElement("div", {
                                    className: "universal-unification-wrapper external-header"
                                }, o.default.createElement("div", {
                                    id: "pi-unification-header-main",
                                    "data-active": "Community",
                                    "data-headertype": "main",
                                    "data-showsubheader": "false"
                                }, o.default.createElement("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "center"
                                    }
                                }, o.default.createElement("nav", {
                                    className: "universal-navbar",
                                    style: {
                                        maxWidth: this.props.width
                                    }
                                }, o.default.createElement("div", {
                                    className: this.state.searchOpen ? "hide-logo-ham" : ""
                                }, !r && o.default.createElement(f.default, {
                                    key: "drawer-button",
                                    isLoggedIn: s,
                                    addPollUrl: this.props.addPollUrl,
                                    askQuestionUrl: this.props.askQuestionUrl,
                                    app: this.props.app
                                }), o.default.createElement("div", {
                                    key: "home-link",
                                    className: "logo-block"
                                }, o.default.createElement(l.default, {
                                    app: n,
                                    isLoggedIn: s
                                }))), a && o.default.createElement("div", {
                                    className: this.state.searchOpen ? "search-block open" : "search-results-block",
                                    ref: function(t) {
                                        return e.node = t
                                    }
                                }, o.default.createElement(u.default, {
                                    key: "search",
                                    searchOpen: this.state.searchOpen,
                                    closeSearch: this.handleSearchClose,
                                    openSearch: this.handleSearchOpen,
                                    getSearchTerm: this.getSearchResults
                                }), this.state.searchTerm && o.default.createElement(d.default, {
                                    searchResults: this.state.searchResults,
                                    searchTerm: this.state.searchTerm
                                })), !r && o.default.createElement("div", null, o.default.createElement("div", null, m), o.default.createElement("div", {
                                    className: "profile-container"
                                }, g, k)), this.state.isClient ? o.default.createElement("style", {
                                    jsx: !0
                                }, " ", h.default, " ") : "")))))
                            }
                        }]), t
                    }(o.default.Component);
                b.propTypes = {
                    user: i.default.shape({
                        data: i.default.shape({
                            profile: i.default.object
                        }),
                        points: i.default.number
                    }),
                    notifications: i.default.shape({
                        data: i.default.shape({
                            entries: i.default.object
                        })
                    }),
                    showNavLinks: i.default.bool,
                    addPollUrl: i.default.string,
                    askQuestionUrl: i.default.string,
                    joinLoginClickCB: i.default.func,
                    isLoggedIn: i.default.bool,
                    app: i.default.string,
                    hideAllNavigation: i.default.bool,
                    width: i.default.string,
                    includeSearch: i.default.bool
                }, b.defaultProps = {
                    showNavLinks: !0,
                    user: void 0,
                    app: "Insights",
                    hideAllNavigation: !1,
                    width: "1268px",
                    includeSearch: !1
                }, t.default = b
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    a = n(0),
                    o = a && a.__esModule ? a : {
                        default: a
                    },
                    i = n(86),
                    s = ["Write a Review", "Categories", "For Vendors"],
                    l = ["Reviews", "Community", "Events"],
                    c = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t && ("object" == typeof t || "function" == typeof t) ? t : e
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return n.prepareNavChild = n.prepareNavChild.bind(n), n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), r(t, [{
                            key: "prepareNavChild",
                            value: function() {
                                var e = this;
                                this.navLinks = [{
                                    descr: "Reviews",
                                    dropdownList: [{
                                        descr: "Write a Review",
                                        dataInteraction: "write-a-review",
                                        url: i.WRITE_REVIEW_HAMBURGER
                                    }, {
                                        descr: "Product Reviews",
                                        dataInteraction: "product-reviews",
                                        url: i.PRODUCT_REVIEWS_URL
                                    }, {
                                        descr: "Vendor Directory",
                                        dataInteraction: "vendor-directory",
                                        url: i.VENDOR_DIRECTORY_URL
                                    }, {
                                        descr: "Product Comparisons",
                                        dataInteraction: "product-reviews",
                                        url: i.PRODUCT_REVIEWS_URL
                                    }]
                                }, {
                                    descr: "Community",
                                    dropdownList: [{
                                        descr: "Ask a Question",
                                        dataInteraction: "ask-a-question",
                                        url: this.props.askQuestionUrl || i.ASK_A_QUESTION,
                                        hideLoggedOut: !0
                                    }, {
                                        descr: "Add a Poll",
                                        dataInteraction: "add-a-poll",
                                        url: this.props.addPollUrl || i.ADD_POLL,
                                        hideLoggedOut: !0
                                    }, {
                                        descr: "Ambassador",
                                        dataInteraction: "Ambassador",
                                        url: i.AMBASSADOR_PGM_URL,
                                        newTab: !0
                                    }, {
                                        descr: "Benchmark Surveys",
                                        dataInteraction: "benchmark-surveys",
                                        url: i.BENCHMARK_SURVEYS_URL,
                                        hideLoggedOut: !0
                                    }, {
                                        descr: "One-Minute Insights",
                                        dataInteraction: "one-minute-insights",
                                        url: i.ONE_MINUTE_INSIGHTS_URL,
                                        hideLoggedOut: !0
                                    }, {
                                        descr: "Peer Finder",
                                        dataInteraction: "peer-finder",
                                        url: i.PEER_FINDER_URL,
                                        hideLoggedOut: !0
                                    }, {
                                        id: "vendor-directory",
                                        descr: "Member Directory",
                                        sub: "COMING SOON!",
                                        disabled: !0,
                                        dataInteraction: "Member Directory"
                                    }]
                                }, {
                                    descr: "Events",
                                    dropdownList: [{
                                        descr: "Evanta",
                                        dataInteraction: "evanta",
                                        url: i.EVANTA_URL,
                                        newTab: !0
                                    }, {
                                        descr: "Destination Conferences",
                                        dataInteraction: "destination-conferences",
                                        url: i.DESTINATION_CONFERENCES_URL,
                                        newTab: !0
                                    }]
                                }, {
                                    descr: "Write a Review",
                                    dataInteraction: "write-a-review",
                                    url: i.WRITE_REVIEW_HEADER
                                }, {
                                    descr: "Categories",
                                    dataInteraction: "product-reviews",
                                    url: i.PRODUCT_REVIEWS_URL
                                }], this.props.isLoggedIn || (l.push("For Vendors"), this.navLinks.push({
                                    descr: "For Vendors",
                                    dropdownList: [{
                                        descr: "Log In to Vendor Portal",
                                        dataInteraction: "login-to-vendor-Portal",
                                        url: i.VENDOR_PORTAL_URL
                                    }, {
                                        descr: "Get Started",
                                        dataInteraction: "get-started",
                                        url: i.GET_STARTED_URL,
                                        newTab: !0
                                    }]
                                }));
                                var t = this.props.isReviews ? s : l;
                                return this.navLinks.filter(function(e) {
                                    return t.includes(e.descr)
                                }).map(function(t) {
                                    var n = t.dropdownList && t.dropdownList.map(function(t) {
                                        var n = t.disabled ? "not-clickable" : "clickable";
                                        return e.props.isLoggedIn || !t.hideLoggedOut ? o.default.createElement("li", {
                                            key: t.dataInteraction
                                        }, o.default.createElement("a", {
                                            id: t.id ? t.id : void 0,
                                            className: n,
                                            key: t.dataInteraction,
                                            target: t.newTab ? "_blank" : "",
                                            href: t.url,
                                            "data-interaction": t.dataInteraction
                                        }, o.default.createElement("p", null, t.descr, "\xa0", t.sub ? o.default.createElement("span", {
                                            className: "sub-text"
                                        }, t.sub) : null))) : null
                                    });
                                    return o.default.createElement("li", null, o.default.createElement("a", {
                                        key: t.descr,
                                        "data-interaction": t.dataInteraction,
                                        href: e.props.isReviews && t.url ? t.url : "#"
                                    }, o.default.createElement("p", null, t.descr, t.dropdownList && o.default.createElement("span", {
                                        className: "arrow-down"
                                    }))), t.dropdownList && o.default.createElement("ul", {
                                        className: "dropdown-links " + t.descr
                                    }, n))
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return o.default.createElement("div", {
                                    key: "nav-links",
                                    className: "links-container"
                                }, o.default.createElement("ul", {
                                    className: "nav-links"
                                }, this.prepareNavChild()))
                            }
                        }]), t
                    }(o.default.Component);
                t.default = c
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    a = c(n(0)),
                    o = c(n(180)),
                    i = c(n(240)),
                    s = c(n(241)),
                    l = (n(86), n(242));

                function c(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var u = void 0,
                    d = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t && ("object" == typeof t || "function" == typeof t) ? t : e
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return n.handleChange = function(e) {
                                n.setState({
                                    value: e.target.value
                                }, function() {
                                    clearTimeout(u), u = setTimeout(function() {
                                        n.props.getSearchTerm(n.state.value)
                                    }, 500)
                                })
                            }, n.handleClear = function() {
                                n.setState({
                                    value: ""
                                }, function() {
                                    return n.props.getSearchTerm(n.state.value)
                                }), n.searchInput && n.searchInput.focus()
                            }, n.handleKeyUp = function(e) {
                                n.characterCount++, n.characterCount >= 3 && !1 === n.sentCharacterCountMessage && (l.UniversalHeaderGA.generalGADataLayerPush("ThreeCharactersTyped", n.state.value), n.sentCharacterCountMessage = !0)
                            }, n.handleBackClick = function() {
                                n.setState({
                                    value: ""
                                }), n.props.closeSearch()
                            }, n.handleMagnifierClick = function() {
                                n.props.openSearch(), n.searchInput && n.searchInput.focus()
                            }, n.state = {
                                value: ""
                            }, n.characterCount = 0, n.sentCharacterCountMessage = !1, n.handleChange = n.handleChange.bind(n), n.handleClear = n.handleClear.bind(n), n.handleKeyUp = n.handleKeyUp.bind(n), n.handleBackClick = n.handleBackClick.bind(n), n.handleMagnifierClick = n.handleMagnifierClick.bind(n), n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), r(t, [{
                            key: "componentDidMount",
                            value: function() {
                                var e = new URLSearchParams(window.location.search);
                                e.has("text") && e.get("text") && "" !== e.get("text") && this.setState({
                                    value: e.get("text")
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.state.value;
                                return a.default.createElement("div", {
                                    className: "search-block " + (this.props.searchOpen ? "open" : "")
                                }, a.default.createElement("button", {
                                    className: "icon-button back-button",
                                    onClick: this.handleBackClick
                                }, a.default.createElement(o.default, null)), a.default.createElement("input", {
                                    autoComplete: "off",
                                    ref: function(t) {
                                        e.searchInput = t
                                    },
                                    className: "universal-search-box " + (t ? "active" : ""),
                                    id: "universalSearchBox",
                                    type: "text",
                                    name: "universalSearchBox",
                                    placeholder: "Search vendors, products or markets",
                                    "aria-hidden": "false",
                                    value: t,
                                    onChange: this.handleChange
                                }), a.default.createElement("button", {
                                    className: "icon-button magnifier-button",
                                    onClick: this.handleMagnifierClick
                                }, a.default.createElement(i.default, null)), t && a.default.createElement("button", {
                                    className: "clear-button",
                                    onClick: this.handleClear
                                }, a.default.createElement(s.default, null)))
                            }
                        }]), t
                    }(a.default.Component);
                t.default = d
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(0),
                    a = r && r.__esModule ? r : {
                        default: r
                    };
                t.default = function() {
                    return a.default.createElement("svg", {
                        width: "21",
                        height: "21",
                        viewBox: "0 0 21 21",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.default.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.6671 13.3334H13.7337L13.3837 12.9834C14.5504 11.7 15.2504 9.95003 15.2504 8.08336C15.2504 3.88336 11.8671 0.500031 7.66707 0.500031C3.46707 0.500031 0.0837402 3.88336 0.0837402 8.08336C0.0837402 12.2834 3.46707 15.6667 7.66707 15.6667C9.53374 15.6667 11.2837 14.9667 12.5671 13.8L12.9171 14.15V15.0834L18.7504 20.9167L20.5004 19.1667L14.6671 13.3334ZM7.66707 13.3334C4.75041 13.3334 2.41707 11 2.41707 8.08336C2.41707 5.1667 4.75041 2.83336 7.66707 2.83336C10.5837 2.83336 12.9171 5.1667 12.9171 8.08336C12.9171 11 10.5837 13.3334 7.66707 13.3334Z",
                        fill: "#002856"
                    }))
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(0),
                    a = r && r.__esModule ? r : {
                        default: r
                    };
                t.default = function() {
                    return a.default.createElement("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.default.createElement("path", {
                        d: "M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z",
                        fill: "#757575"
                    }))
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    a = function() {
                        function e(t) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                            }(this, e), this.category = t
                        }
                        return r(e, [{
                            key: "getEventCategory",
                            value: function() {
                                return this.category
                            }
                        }, {
                            key: "generalGADataLayerPush",
                            value: function(e, t, n) {
                                window.dataLayer && window.dataLayer.push({
                                    event: "gaEvent",
                                    gaEventCategory: this.category,
                                    gaEventAction: e,
                                    gaEventLabel: t,
                                    gaEventValue: n,
                                    gaEventNonInteraction: !1
                                })
                            }
                        }, {
                            key: "pushToDataLayer",
                            value: function(e, t, n, r, a) {
                                window && window.dataLayer && window.dataLayer.push({
                                    event: "gaEvent",
                                    gaEventCategory: this.category,
                                    gaEventLabel: e,
                                    gaEventAction: t,
                                    gaEventValue: n,
                                    gaEventNonInteraction: r,
                                    gaPagePath: a
                                })
                            }
                        }]), e
                    }();
                t.UniversalHeaderGA = new a("universal-header")
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(0),
                    a = i(r),
                    o = i(n(244));

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                i(n(18));
                var s = function(e) {
                    var t = e.searchResults,
                        n = (e.styles, e.searchTerm);
                    (0, r.useEffect)(function() {
                        i(n, ".resultProduct"), i(n, ".resultVendor"), i(n, ".resultMarket")
                    }, [n]);
                    var i = function(e, t) {
                        if (e && e.includes(n)) {
                            var r = document.querySelectorAll(t),
                                a = RegExp(n, "gi"),
                                o = "<b>" + n + "</b>",
                                i = void 0;
                            r && r.length > 0 && r.forEach(function(e) {
                                i = e && e.textContent.replace(a, o), e.innerHTML = i
                            })
                        }
                    };
                    return a.default.createElement("div", {
                        className: "searchResultsBox"
                    }, a.default.createElement("ul", null, 0 === Object.keys(t).length ? a.default.createElement("div", {
                        className: "noResults"
                    }, a.default.createElement(o.default, {
                        className: "glyphiconTriangleTop",
                        iconType: "arrowUp"
                    }), a.default.createElement("div", {
                        className: "noResultsText"
                    }, " We could not find a matching vendor or product")) : t && t.results && t.results.map(function(e) {
                        var t = "/reviews/market/" + e.market.seoName,
                            n = "Be the first to write a review";
                        return "market" == e.piType && 2 === e.market.status && (t = "/reviews/" + e.market.seoName + "/form?source=homepage-search", n = "Write a review"), "market-vendor-product" == e.piType && (t += "/vendor/" + e.vendor.seoName + "/product/" + e.product.seoName), 0 != e.reviewCount || e.hasProfile || "market" == e.piType || (t = "/reviews/" + e.market.seoName + "/form?mid=" + e.market.seqId + "&pid=" + e.product.seqId + "&vid=" + e.vendor.seqId + "&source=header-search"), a.default.createElement("li", {
                            key: e.id,
                            className: "searchResultItem"
                        }, a.default.createElement("a", {
                            href: t
                        }, "market" != e.piType ? a.default.createElement("div", {
                            className: "resultLabel"
                        }, a.default.createElement("p", {
                            className: "resultProduct"
                        }, " ", e.product.name, " ", a.default.createElement("span", null, "by"), " "), a.default.createElement("p", {
                            className: "resultVendor"
                        }, e.vendor.name), a.default.createElement("p", {
                            className: "resultMarket"
                        }, " in " + e.market.name), 0 != e.reviewCount || e.hasProfile ? a.default.createElement("div", null) : a.default.createElement("div", {
                            className: "firstReview"
                        }, a.default.createElement("span", {
                            className: "header-search-vp-label-no-reviews"
                        }, a.default.createElement("i", {
                            className: "material-icons hidden-xs"
                        }, "rate_review"), n))) : a.default.createElement(a.default.Fragment, null, a.default.createElement("p", {
                            className: "resultMarket"
                        }, e.market.name), "market" == e.piType && 2 === e.market.status && a.default.createElement("div", {
                            className: "firstReview"
                        }, a.default.createElement("span", {
                            className: "header-search-vp-label-no-reviews"
                        }, a.default.createElement("i", {
                            className: "material-icons hidden-xs"
                        }, "rate_review"), n)))))
                    })))
                };
                s.propTypes = {}, t.default = s
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    a = n(0),
                    o = a && a.__esModule ? a : {
                        default: a
                    },
                    i = function(e) {
                        function t() {
                            return function(e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                }(this, t),
                                function(e, t) {
                                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e
                                }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), r(t, [{
                            key: "_getType",
                            value: function(e) {
                                switch (e) {
                                    case "rightArrow":
                                        return " glyphicon-triangle-right";
                                    case "greenCheckmark":
                                        return " withCheckmark";
                                    case "filterCheckbox":
                                        return " icons-icon-checkmark-checked";
                                    case "filterCheckbox-unchecked":
                                        return " ";
                                    case "errorIcon":
                                        return " icons-icon-alert-white";
                                    case "info":
                                        return " icons-info_outline_gray";
                                    case "downArrow":
                                        return " glyphicon-menu-down";
                                    case "upArrow":
                                        return " glyphicon-menu-up";
                                    case "searchMagnifyingGlass":
                                        return " material-icons";
                                    case "downArrowSprite":
                                        return " icons-icon-arrow-drop-down-white";
                                    case "thumbsUp":
                                        return " icons-icon-thumbs-up";
                                    case "mobileDown":
                                        return " icons-icon-profile-mobile-down";
                                    case "mobileUp":
                                        return " icons-icon-profile-mobile-up";
                                    case "magnifyingGlass":
                                        return " glyphicon-search";
                                    case "x":
                                        return " glyphicon-remove";
                                    case "arrowUp":
                                        return " glyphicon-triangle-top";
                                    case "arrowLeft":
                                        return " glyphicon-arrow-left";
                                    case "backArrow":
                                        return " icons-back-arrow"
                                }
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this.props.isSprite ? "icon-sprite " : "glyphicon",
                                    t = "",
                                    n = "",
                                    r = this.props.id || "";
                                e += this._getType(this.props.iconType), this.props.className && (e = e.concat(" ").concat(this.props.className)), "openInNewSqArrow" === this.props.iconType && (gaMarkup = "View Published Reviews"), this.props.tooltip && (t = this.props.tooltip), this.props.materialIconsText && (n = this.props.materialIconsText);
                                var a = this.props.alt ? this.props.alt : "";
                                return o.default.createElement("span", {
                                    id: r,
                                    alt: a,
                                    title: t,
                                    className: e
                                }, n)
                            }
                        }]), t
                    }(o.default.Component);
                t.default = i
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    a = Object.freeze(Object.defineProperties(["\n  ", "\n"], {
                        raw: {
                            value: Object.freeze(["\n  ", "\n"])
                        }
                    })),
                    o = p(n(0)),
                    i = p(n(18)),
                    s = p(n(148)),
                    l = n(86),
                    c = p(n(20)),
                    u = p(n(246)),
                    d = n(247);

                function p(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var f = [{
                        label: "Vendor Portal",
                        href: l.GET_STARTED_URL,
                        key: "VENDOR_PORTAL"
                    }, {
                        label: "GPI Plus",
                        href: l.GPI_PLUS_URL,
                        key: "GPI_PLUS"
                    }, {
                        label: "Refer Peers",
                        href: l.REFER_PEERS_URL,
                        key: "REFER_PEERS"
                    }, {
                        label: "My Profile",
                        href: l.MY_PROFILE_DETAILS,
                        key: "MY_PROFILE_DETAILS"
                    }, {
                        label: "My Reviews",
                        href: l.MY_REVIEWS,
                        key: "MY_REVIEWS"
                    }, {
                        label: "My Email Preferences",
                        href: l.MY_EMAIL_PREFERENCES,
                        key: "MY_EMAIL_PREFERENCES"
                    }],
                    h = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t && ("object" == typeof t || "function" == typeof t) ? t : e
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return n.handleClick = function() {
                                n.setState(function(e) {
                                    return {
                                        open: !e.open
                                    }
                                })
                            }, n.handleClickAway = function() {
                                n.setState({
                                    open: !1
                                })
                            }, n.state = {
                                open: !1,
                                imageError: !1
                            }, n.userPermissions = n.props.userPermissions || (0, d.readCookie)("permissions") || {}, n.handleClick = n.handleClick.bind(n), n.handleClickAway = n.handleClickAway.bind(n), n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), r(t, [{
                            key: "componentDidUpdate",
                            value: function(e, t) {
                                this.userPermissions = this.props.userPermissions || (0, d.readCookie)("permissions") || {}
                            }
                        }, {
                            key: "profilePic",
                            value: function(e) {
                                return o.default.createElement("div", {
                                    className: "first-initial"
                                }, e)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.userProfile,
                                    r = (n = void 0 === n ? {} : n).userProfile,
                                    a = (r = void 0 === r ? {} : r).user,
                                    i = void 0 === a ? {} : a,
                                    c = t.vendorUserStatus,
                                    u = t.isPlusMember,
                                    d = this.state.open;
                                if (i && i.firstName) {
                                    var p = i.firstName.charAt(0),
                                        h = f.map(function(t) {
                                            if ("VENDOR_PORTAL" !== t.key || "approved" === c) {
                                                if (!u && "GPI_PLUS" === t.key) return !1;
                                                if ("REFER_PEERS" !== t.key || e.userPermissions.Referral && "Y" == e.userPermissions.Referral) return o.default.createElement("li", {
                                                    key: t.key
                                                }, o.default.createElement("a", {
                                                    href: t.href
                                                }, o.default.createElement("p", null, t.label)))
                                            }
                                        });
                                    return o.default.createElement("div", {
                                        className: this.props.className
                                    }, o.default.createElement(s.default, {
                                        className: "avatar-block",
                                        onClick: this.handleClick,
                                        onClickAway: this.handleClickAway
                                    }, this.profilePic(p), o.default.createElement("ul", {
                                        className: "dropdown-links profile-links " + (d ? "open" : ""),
                                        style: {
                                            width: 272
                                        }
                                    }, o.default.createElement("li", {
                                        className: "hero",
                                        key: "basic-profile-data"
                                    }, o.default.createElement("h5", {
                                        className: "profile-name"
                                    }, i.firstName + " " + i.lastName), o.default.createElement("p", {
                                        className: "profile-email"
                                    }, i.emailText)), h, o.default.createElement("li", {
                                        key: "logout"
                                    }, o.default.createElement("a", {
                                        href: l.LOGOFF_URL
                                    }, o.default.createElement("p", null, "Sign Out"))))))
                                }
                                return o.default.createElement(s.default, {
                                    className: "avatar-block",
                                    onClick: this.handleClick,
                                    onClickAway: this.handleClickAway
                                }, this.profilePic(""))
                            }
                        }]), t
                    }(o.default.Component);
                h.propTypes = {
                    profile: i.default.shape({
                        firstname: i.default.string
                    })
                }, h.defaultProps = {
                    profile: {}
                }, t.default = (0, c.default)(h)(a, u.default)
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = Object.freeze(Object.defineProperties(["\n    .profile-container {\n        width: 272px;\n    }\n    .hide {\n        display: none;\n    }\n    .profile-name {\n        font-family: inherit;\n        font-weight: 500;\n        font-size: 18px;\n        line-height: 22px;\n        color: #002856;\n    }\n    .hero {\n        padding-bottom: 14px;\n    }\n    .hero > h5 {\n        margin-top: 20px;\n    }\n    .profile-email {\n        font-family: 'Graphik-Web-Regular', 'Graphik Regular', 'Graphik';\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 20px;\n        color: #3e3e3e;\n        margin: 12px 0 !important;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n    }\n\n    .first-initial {\n        color: #fff;\n        text-transform: uppercase;\n        font-family: 'Graphik Medium', 'Graphik', Graphik-Web-Medium;\n        font-weight: 500;\n        line-height: 18px;\n        @media (min-width: 960px) {\n            font-size: 20px;\n        }\n        @media (max-width: 959px) {\n            font-size: 18px;\n        }\n    }\n"], {
                        raw: {
                            value: Object.freeze(["\n    .profile-container {\n        width: 272px;\n    }\n    .hide {\n        display: none;\n    }\n    .profile-name {\n        font-family: inherit;\n        font-weight: 500;\n        font-size: 18px;\n        line-height: 22px;\n        color: #002856;\n    }\n    .hero {\n        padding-bottom: 14px;\n    }\n    .hero > h5 {\n        margin-top: 20px;\n    }\n    .profile-email {\n        font-family: 'Graphik-Web-Regular', 'Graphik Regular', 'Graphik';\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 20px;\n        color: #3e3e3e;\n        margin: 12px 0 !important;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n    }\n\n    .first-initial {\n        color: #fff;\n        text-transform: uppercase;\n        font-family: 'Graphik Medium', 'Graphik', Graphik-Web-Medium;\n        font-weight: 500;\n        line-height: 18px;\n        @media (min-width: 960px) {\n            font-size: 20px;\n        }\n        @media (max-width: 959px) {\n            font-size: 18px;\n        }\n    }\n"])
                        }
                    })),
                    a = (0, n(20).css)(r);
                t.default = a
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.readCookie = function(e, t) {
                    var n = t ? t.split(";") : "undefined" != typeof document ? document.cookie.split(";") : [],
                        r = null;
                    return n.length && n.forEach(function(t) {
                        var n = t.split("=");
                        if (n[0].trim() === e.trim()) try {
                            r = JSON.parse(JSON.parse(n[1]))
                        } catch (e) {
                            r = n[1]
                        }
                    }), r
                }, t.getCookiesMap = function() {
                    var e = document.cookie.split(";"),
                        t = {};
                    return e.length && e.forEach(function(e) {
                        var n = e.split("=");
                        t[n[0].trim()] = n[1]
                    }), t
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    a = Object.freeze(Object.defineProperties(["\n  ", "\n"], {
                        raw: {
                            value: Object.freeze(["\n  ", "\n"])
                        }
                    })),
                    o = x(n(0)),
                    i = x(n(18)),
                    s = x(n(249)),
                    l = x(n(148)),
                    c = x(n(250)),
                    u = x(n(251)),
                    d = x(n(252)),
                    p = (x(n(179)), x(n(253))),
                    f = x(n(254)),
                    h = n(86),
                    m = x(n(20)),
                    g = x(n(256)),
                    v = x(n(181)),
                    y = x(n(257)),
                    b = x(n(258)),
                    w = x(n(147));

                function x(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var C = function(e) {
                        var t = e.onClick,
                            n = e.open;
                        return o.default.createElement("div", {
                            className: "modal-mask " + (n ? "open" : ""),
                            onClick: t
                        })
                    },
                    E = function(e) {
                        var t = e.app;
                        return o.default.createElement("div", {
                            className: "drawer-footer"
                        }, o.default.createElement("div", {
                            className: "footer-link-wrapper",
                            style: {
                                flexWrap: "wrap"
                            }
                        }, [{
                            name: "Community Guidelines",
                            link: "/reviews/guidelines",
                            platform: !0
                        }, {
                            name: "Listing Guidelines",
                            link: "/reviews/listing-guidelines",
                            platform: "Community" !== t
                        }, {
                            name: "Browse Vendors",
                            link: "/reviews/vendors",
                            platform: "Community" !== t
                        }, {
                            name: "Rules of Engagement",
                            link: "/reviews/faq/rules-of-engagement",
                            platform: !0
                        }, {
                            name: "FAQ",
                            link: "/reviews/faq",
                            platform: !0
                        }, {
                            name: "Privacy",
                            link: "https://www.gartner.com/en/about/policies/privacy",
                            target: "_blank",
                            platform: !0
                        }, {
                            name: "Terms of Service",
                            link: "https://www.gartner.com/en/about/policies/terms-of-use",
                            target: "_blank",
                            platform: !0
                        }].filter(function(e) {
                            return !0 === e.platform
                        }).map(function(e, t) {
                            return o.default.createElement("a", {
                                rel: "nofollow",
                                key: e.link + t,
                                href: e.link,
                                target: e.target,
                                style: {
                                    marginBottom: 12
                                }
                            }, e.name)
                        })), o.default.createElement("div", {
                            className: "footer-social-links"
                        }, o.default.createElement("a", {
                            href: "https://www.linkedin.com/showcase/gartner-peer-insights",
                            target: "_blank"
                        }, o.default.createElement(y.default, null)), o.default.createElement("a", {
                            href: "https://twitter.com/Gartner_PI",
                            target: "_blank"
                        }, o.default.createElement(b.default, null))), o.default.createElement("div", {
                            className: "footer-link-wrapper"
                        }, "\xa9", (new Date).getFullYear(), " Gartner, Inc. and/or its affiliates.", o.default.createElement("br", null), "All rights reserved."))
                    },
                    k = function(e) {
                        function t(e) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                            }(this, t);
                            var n = function(e, t) {
                                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t && ("object" == typeof t || "function" == typeof t) ? t : e
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return n.handleClick = function(e) {
                                n.state.open && n._subMenuClose(), n.setState(function(e) {
                                    return {
                                        open: !e.open
                                    }
                                })
                            }, n.handleClickAway = function() {
                                n._subMenuClose(), n.setState({
                                    open: !1
                                })
                            }, n.handleClick = n.handleClick.bind(n), n.handleClickAway = n.handleClickAway.bind(n), n.menuLinks = {
                                home: {
                                    descr: "HOME",
                                    icon: o.default.createElement(c.default, null),
                                    url: h.PI_HOME_PAGE
                                },
                                "for-vendors": {
                                    descr: "FOR VENDORS",
                                    icon: n.props.isLoggedIn ? o.default.createElement(u.default, null) : o.default.createElement(p.default, null),
                                    url: n.props.isLoggedIn ? h.FOR_VENDORS : null,
                                    newTab: !!n.props.isLoggedIn,
                                    dropDownClassName: n.props.isLoggedIn ? null : "forVendors-dropdownlist",
                                    dropdownList: n.props.isLoggedIn ? null : [{
                                        descr: "Log In to Vendor Portal",
                                        dataInteraction: "login-to-vendor-Portal",
                                        url: h.VENDOR_PORTAL_URL
                                    }, {
                                        descr: "Get Started",
                                        dataInteraction: "get-started",
                                        url: h.GET_STARTED_URL,
                                        newTab: !0
                                    }]
                                },
                                insights: {
                                    descr: "REVIEWS",
                                    icon: o.default.createElement(p.default, null),
                                    dropDownClassName: "insights-dropdownlist",
                                    dropdownList: [{
                                        descr: "Write a Review",
                                        dataInteraction: "write-a-review",
                                        url: h.WRITE_REVIEW_HAMBURGER
                                    }, {
                                        descr: "Product Reviews",
                                        dataInteraction: "product-reviews",
                                        url: h.PRODUCT_REVIEWS_URL
                                    }, {
                                        descr: "Vendor Directory",
                                        dataInteraction: "vendor-directory",
                                        url: h.VENDOR_DIRECTORY_URL
                                    }, {
                                        descr: "Product Comparisons",
                                        dataInteraction: "product-reviews",
                                        url: h.PRODUCT_REVIEWS_URL
                                    }]
                                },
                                community: {
                                    descr: "GARTNER PEER COMMUNITY™",
                                    icon: o.default.createElement(d.default, null),
                                    url: n.props.isLoggedIn ? h.COMMUNITY_HOME_PAGE_WITH_PREFER_LOGIN : h.COMMUNITY_HOME_PAGE,
                                    newTab: !0
                                },
                                "gartner-com": {
                                    descr: "GARTNER.COM",
                                    icon: o.default.createElement(d.default, null),
                                    url: h.GARTNER_COM,
                                    newTab: !0,
                                    key: "gartner-com"
                                }
                            }, n.state = {
                                open: !1,
                                openedMenu: null,
                                menuItems: n._setMenuItems()
                            }, n
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), r(t, [{
                            key: "_setMenuItems",
                            value: function(e) {
                                var t = this;
                                return Object.keys(this.menuLinks).map(function(n) {
                                    var r = t.menuLinks[n],
                                        a = void 0;
                                    if (r.dropdownList) {
                                        var i = e === n;
                                        a = o.default.createElement("li", {
                                            onClick: function(e) {
                                                t._subMenuOpen(e, n)
                                            }
                                        }, o.default.createElement("div", null, o.default.createElement("div", {
                                            className: "drawer-links-container"
                                        }, o.default.createElement("div", null, o.default.createElement("p", null, r.descr)), r.icon), o.default.createElement(f.default, {
                                            isLoggedIn: t.props.isLoggedIn,
                                            title: r.descr,
                                            dropdownList: r.dropdownList,
                                            clazz: r.dropDownClassName,
                                            open: i,
                                            closeSub: function() {
                                                t._subMenuClose()
                                            }
                                        })))
                                    } else a = o.default.createElement("li", null, o.default.createElement("div", {
                                        className: "drawer-links-container"
                                    }, o.default.createElement("a", {
                                        key: n,
                                        href: r.url,
                                        target: r.newTab ? "_blank" : "",
                                        "data-interaction": r.key
                                    }, r.descr), r.icon));
                                    return a
                                })
                            }
                        }, {
                            key: "_subMenuOpen",
                            value: function(e, t) {
                                this.setState({
                                    openedMenu: t,
                                    menuItems: this._setMenuItems(t)
                                }), e.stopPropagation(), e.preventDefault()
                            }
                        }, {
                            key: "_subMenuClose",
                            value: function() {
                                this.setState({
                                    openedMenu: null,
                                    menuItems: this._setMenuItems()
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e, t = this.state,
                                    n = t.open,
                                    r = t.menuItems;
                                return e = o.default.createElement("ul", {
                                    className: "dropdown-links drawer-links " + (n ? "open" : "closed")
                                }, o.default.createElement("div", {
                                    className: "drawer-header"
                                }, o.default.createElement(w.default, {
                                    app: this.props.app,
                                    isLoggedIn: this.props.isLoggedIn
                                }), o.default.createElement("button", {
                                    onClick: this.handleClick
                                }, o.default.createElement(v.default, null))), r, o.default.createElement(E, {
                                    app: this.props.app
                                })), o.default.createElement("div", {
                                    className: this.props.className
                                }, o.default.createElement(l.default, {
                                    className: "hamburger-block",
                                    onClickAway: this.handleClickAway
                                }, o.default.createElement("button", {
                                    onClick: this.handleClick,
                                    "aria-label": "drawer icon"
                                }, o.default.createElement(s.default, null)), o.default.createElement(C, {
                                    onClick: this.handleClickAway,
                                    open: n
                                }), e))
                            }
                        }]), t
                    }(o.default.Component);
                k.propTypes = {
                    className: i.default.string.isRequired,
                    app: i.default.string
                }, k.defaultProps = {
                    app: "Insights"
                }, t.default = (0, m.default)(k)(a, g.default)
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(0),
                    a = r && r.__esModule ? r : {
                        default: r
                    };
                t.default = function() {
                    return a.default.createElement("svg", {
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.default.createElement("g", {
                        clipPath: "url(#clip0_1204_31950)"
                    }, a.default.createElement("path", {
                        d: "M5 30H35V26.6667H5V30ZM5 21.6667H35V18.3333H5V21.6667ZM5 10V13.3333H35V10H5Z",
                        fill: "#002856"
                    })), a.default.createElement("defs", null, a.default.createElement("clipPath", {
                        id: "clip0_1204_31950"
                    }, a.default.createElement("rect", {
                        width: "40",
                        height: "40",
                        fill: "white"
                    }))))
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(0),
                    a = r && r.__esModule ? r : {
                        default: r
                    };
                t.default = function() {
                    return a.default.createElement("svg", {
                        width: "20",
                        height: "17",
                        viewBox: "0 0 20 17",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.default.createElement("path", {
                        d: "M10 2.69L15 7.19V15H13V9H7V15H5V7.19L10 2.69ZM10 0L0 9H3V17H9V11H11V17H17V9H20L10 0Z",
                        fill: "#3E3E3E"
                    }))
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(0),
                    a = r && r.__esModule ? r : {
                        default: r
                    };
                t.default = function() {
                    return a.default.createElement("svg", {
                        width: "16",
                        height: "22",
                        viewBox: "0 0 16 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.default.createElement("path", {
                        d: "M4.35746 5.85709H5.8146V7.32648H4.35746V5.85709ZM7.27174 7.32648H8.72889V5.85709H7.27174V7.32648ZM10.186 7.32648H11.6432V5.85709H10.186V7.32648ZM4.35746 10.2653H5.8146V8.79587H4.35746V10.2653ZM7.27174 10.2653H8.72889V8.79587H7.27174V10.2653ZM10.186 10.2653H11.6432V8.79587H10.186V10.2653ZM4.35746 13.204H5.8146V11.7346H4.35746V13.204ZM7.27174 13.204H8.72889V11.7346H7.27174V13.204ZM10.186 13.204H11.6432V11.7346H10.186V13.204ZM4.35746 16.1428H5.8146V14.6734H4.35746V16.1428ZM7.27174 16.1428H8.72889V14.6734H7.27174V16.1428ZM10.186 16.1428H11.6432V14.6734H10.186V16.1428ZM4.35746 19.0816H5.8146V17.6122H4.35746V19.0816ZM7.27174 19.0816H8.72889V17.6122H7.27174V19.0816ZM10.186 19.0816H11.6432V17.6122H10.186V19.0816ZM12.3717 2.18362V0.714233H10.9146V2.18362H0.7146V21.2857H2.17174V3.65301H13.8289V21.2857H15.286V2.18362H12.3717Z",
                        fill: "#3E3E3E"
                    }))
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(0),
                    a = r && r.__esModule ? r : {
                        default: r
                    };
                t.default = function() {
                    return a.default.createElement("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 18 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.default.createElement("path", {
                        d: "M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z",
                        fill: "#3E3E3E"
                    }))
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(0),
                    a = r && r.__esModule ? r : {
                        default: r
                    };
                t.default = function() {
                    return a.default.createElement("svg", {
                        width: "8",
                        height: "12",
                        viewBox: "0 0 8 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.default.createElement("path", {
                        d: "M2.00009 0L0.590088 1.41L5.17009 6L0.590088 10.59L2.00009 12L8.00009 6L2.00009 0Z",
                        fill: "#3E3E3E"
                    }))
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    a = Object.freeze(Object.defineProperties(["\n    ", "\n"], {
                        raw: {
                            value: Object.freeze(["\n    ", "\n"])
                        }
                    })),
                    o = d(n(0)),
                    i = d(n(148)),
                    s = d(n(18)),
                    l = d(n(180)),
                    c = (d(n(181)), d(n(147)), d(n(20))),
                    u = d(n(255));

                function d(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var p = function(e) {
                    function t(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function(e, t) {
                            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t && ("object" == typeof t || "function" == typeof t) ? t : e
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.handleClick = function() {
                            n.setState(function(e) {
                                return {
                                    open: !e.open
                                }
                            }), n.props.closeSub()
                        }, n.handleClickAway = function() {
                            n.setState({
                                open: !1
                            }), n.props.closeSub()
                        }, n.state = {
                            open: e.open
                        }, n.handleClick = n.handleClick.bind(n), n.handleClickAway = n.handleClickAway.bind(n), n.menuItems = e.dropdownList.map(function(e) {
                            var t = e.disabled ? "not-clickable" : "clickable";
                            return n.props.isLoggedIn || !e.hideLoggedOut ? o.default.createElement("li", {
                                onClick: function(e) {
                                    e.stopPropagation()
                                }
                            }, o.default.createElement("div", {
                                className: "drawer-links-container " + t
                            }, e.url && o.default.createElement("a", {
                                key: e.dataInteraction,
                                href: e.url,
                                target: e.newTab ? "_blank" : "",
                                className: "drawer-link " + t,
                                "data-interaction": e.dataInteraction
                            }, e.descr, o.default.createElement("span", {
                                className: "sub-text"
                            }, e.sub)), !e.url && o.default.createElement("p", {
                                key: e.dataInteraction,
                                className: "drawer-link " + t,
                                "data-interaction": e.dataInteraction
                            }, e.descr, o.default.createElement("span", {
                                className: "sub-text"
                            }, e.sub)))) : null
                        }), n
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), r(t, [{
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            e.open !== this.props.open && this.setState({
                                open: this.props.open
                            })
                        }
                    }, {
                        key: "handleBackToParentMenu",
                        value: function(e) {
                            e.stopPropagation(), this.setState({
                                open: !1
                            }), this.props.closeSub()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state.open;
                            return o.default.createElement(i.default, {
                                className: this.props.className
                            }, o.default.createElement("ul", {
                                className: "dropdown-links drawer-links drawer-sub-menu " + this.props.clazz + " " + (t ? "open" : "closed")
                            }, o.default.createElement("li", {
                                className: "sub-menu-title yet-another-title remove-padding",
                                key: "title",
                                onClick: function(t) {
                                    return e.handleBackToParentMenu(t)
                                }
                            }, o.default.createElement(l.default, null), o.default.createElement("p", null, this.props.title)), this.menuItems))
                        }
                    }]), t
                }(o.default.Component);
                p.propTypes = {
                    title: s.default.string,
                    dropdownList: s.default.arrayOf(s.default.shape({
                        descr: s.default.string,
                        dataInteraction: s.default.string,
                        url: s.default.string,
                        sub: s.default.string
                    })).isRequired,
                    clazz: s.default.string,
                    open: s.default.bool,
                    className: s.default.string.isRequired,
                    closeSub: s.default.func
                }, p.defaultProps = {
                    clazz: "",
                    open: !1
                }, t.default = (0, c.default)(p)(a, u.default)
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = Object.freeze(Object.defineProperties(["\n    .dropdown-links.drawer-links {\n        &.drawer-sub-menu {\n            left: 0;\n            padding: 0;\n            top: 80px;\n            box-shadow: none;\n\n            .sub-menu-title {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                position: relative;\n                color: #002856;\n\n                &.remove-padding {\n                    padding: 0;\n                    cursor: pointer;\n                }\n\n                &.yet-another-title {\n                    background-color: #f4f4f4;\n                    > p {\n                        padding: 16px;\n                        margin: 0;\n                    }\n                }\n\n                &.top-title {\n                    margin: 16px 8px;\n                }\n\n                svg {\n                    margin-left: 16px;\n                    height: 24px;\n                    width: 24px;\n                    position: absolute;\n                    left: 0;\n                }\n            }\n\n            .drawer-link {\n                &.not-clickable {\n                    cursor: default;\n                    color: #757575;\n                }\n                color: #3e3e3e;\n                .sub-text {\n                    text-decoration: none;\n                    margin-left: 8px;\n                    font-size: 12px;\n                    font-weight: 500;\n                }\n\n                &.clickable&:hover {\n                    color: #0000d3;\n                }\n            }\n        }\n    }\n"], {
                        raw: {
                            value: Object.freeze(["\n    .dropdown-links.drawer-links {\n        &.drawer-sub-menu {\n            left: 0;\n            padding: 0;\n            top: 80px;\n            box-shadow: none;\n\n            .sub-menu-title {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                position: relative;\n                color: #002856;\n\n                &.remove-padding {\n                    padding: 0;\n                    cursor: pointer;\n                }\n\n                &.yet-another-title {\n                    background-color: #f4f4f4;\n                    > p {\n                        padding: 16px;\n                        margin: 0;\n                    }\n                }\n\n                &.top-title {\n                    margin: 16px 8px;\n                }\n\n                svg {\n                    margin-left: 16px;\n                    height: 24px;\n                    width: 24px;\n                    position: absolute;\n                    left: 0;\n                }\n            }\n\n            .drawer-link {\n                &.not-clickable {\n                    cursor: default;\n                    color: #757575;\n                }\n                color: #3e3e3e;\n                .sub-text {\n                    text-decoration: none;\n                    margin-left: 8px;\n                    font-size: 12px;\n                    font-weight: 500;\n                }\n\n                &.clickable&:hover {\n                    color: #0000d3;\n                }\n            }\n        }\n    }\n"])
                        }
                    })),
                    a = (0, n(20).css)(r);
                t.default = a
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = Object.freeze(Object.defineProperties(["\n    .hamburger-block {\n        display: inline-flex;\n\n        > button {\n            outline: none;\n            border: none;\n            padding: 0;\n            margin: 0;\n            background: none;\n\n            > svg {\n                cursor: pointer;\n                @media (min-width: 960px) {\n                    width: 30px;\n                }\n                @media (min-width: 768px) and (max-width: 959px) {\n                    width: 21px;\n                }\n                @media (max-width: 767px) {\n                    width: 21px;\n                }\n            }\n        }\n    }\n    .dropdown-links.drawer-links {\n        left: 0;\n        top: 0;\n        width: 360px;\n        height: 100vh;\n        padding: 0;\n        transform: translateX(-100%);\n        opacity: 0;\n        transition: transform 0.2s ease-in-out;\n\n        @media (max-height: 670px) {\n            height: 665px;\n        }\n\n        li {\n            padding-left: 20px;\n            padding-right: 20px;\n            padding-top: 0;\n            padding-bottom: 0;\n            box-shadow: none;\n        }\n\n        .drawer-footer {\n            padding: 20px 24px;\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            font-family: 'Graphik Regular', 'Graphik', sans-serif;\n\n            > .footer-link-wrapper {\n                display: flex;\n                margin-bottom: 12px;\n                font-size: 12px;\n                color: #3e3e3e;\n                font-weight: 400;\n\n                > a {\n                    font-size: 14px;\n                    color: #3e3e3e;\n                    font-weight: 400;\n                    margin-right: 20px;\n                    text-decoration: none;\n\n                    &:hover {\n                        color: #0000d3;\n                    }\n                }\n            }\n\n            > .footer-social-links {\n                margin-top: 8px;\n                margin-bottom: 8px;\n                display: flex;\n\n                > a {\n                    margin-right: 8px;\n                }\n            }\n        }\n\n        .drawer-links-container {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            border-bottom: 1px solid #c3c3c3;\n            cursor: pointer;\n            &.not-clickable {\n                cursor: default;\n            }\n\n            div {\n                text-decoration: none;\n                color: #000000;\n\n                p {\n                    font-weight: 500;\n                    text-decoration: none;\n                }\n            }\n\n            &:hover > div {\n                color: #0000d3;\n            }\n        }\n    }\n\n    .dropdown-links.drawer-links.open {\n        opacity: 1;\n        transform: translateX(0%);\n        position:fixed;\n    }\n\n    .dropdown-links.drawer-links.closed {\n        opacity: 1;\n        transform: translateX(-100%);\n        display: none;\n    }\n\n    .drawer-links-container {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        > a {\n            text-decoration: none;\n            color: #000000;\n            margin: 4px 0;\n            padding: 12px 0;\n            width: 100%;\n            font-weight: 500;\n        }\n\n        &:hover > a {\n            color: #0000d3;\n        }\n    }\n\n    .drawer-header {\n        border-bottom: 1px solid #c3c3c3;\n        display: flex;\n        justify-content: space-between;\n        padding: 14px 20px;\n\n        > button {\n            outline: none;\n            border: none;\n            padding: 0;\n            margin: 0;\n            background: none;\n            cursor: pointer;\n        }\n\n        > svg {\n            cursor: pointer;\n        }\n    }\n"], {
                        raw: {
                            value: Object.freeze(["\n    .hamburger-block {\n        display: inline-flex;\n\n        > button {\n            outline: none;\n            border: none;\n            padding: 0;\n            margin: 0;\n            background: none;\n\n            > svg {\n                cursor: pointer;\n                @media (min-width: 960px) {\n                    width: 30px;\n                }\n                @media (min-width: 768px) and (max-width: 959px) {\n                    width: 21px;\n                }\n                @media (max-width: 767px) {\n                    width: 21px;\n                }\n            }\n        }\n    }\n    .dropdown-links.drawer-links {\n        left: 0;\n        top: 0;\n        width: 360px;\n        height: 100vh;\n        padding: 0;\n        transform: translateX(-100%);\n        opacity: 0;\n        transition: transform 0.2s ease-in-out;\n\n        @media (max-height: 670px) {\n            height: 665px;\n        }\n\n        li {\n            padding-left: 20px;\n            padding-right: 20px;\n            padding-top: 0;\n            padding-bottom: 0;\n            box-shadow: none;\n        }\n\n        .drawer-footer {\n            padding: 20px 24px;\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            font-family: 'Graphik Regular', 'Graphik', sans-serif;\n\n            > .footer-link-wrapper {\n                display: flex;\n                margin-bottom: 12px;\n                font-size: 12px;\n                color: #3e3e3e;\n                font-weight: 400;\n\n                > a {\n                    font-size: 14px;\n                    color: #3e3e3e;\n                    font-weight: 400;\n                    margin-right: 20px;\n                    text-decoration: none;\n\n                    &:hover {\n                        color: #0000d3;\n                    }\n                }\n            }\n\n            > .footer-social-links {\n                margin-top: 8px;\n                margin-bottom: 8px;\n                display: flex;\n\n                > a {\n                    margin-right: 8px;\n                }\n            }\n        }\n\n        .drawer-links-container {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            border-bottom: 1px solid #c3c3c3;\n            cursor: pointer;\n            &.not-clickable {\n                cursor: default;\n            }\n\n            div {\n                text-decoration: none;\n                color: #000000;\n\n                p {\n                    font-weight: 500;\n                    text-decoration: none;\n                }\n            }\n\n            &:hover > div {\n                color: #0000d3;\n            }\n        }\n    }\n\n    .dropdown-links.drawer-links.open {\n        opacity: 1;\n        transform: translateX(0%);\n        position:fixed;\n    }\n\n    .dropdown-links.drawer-links.closed {\n        opacity: 1;\n        transform: translateX(-100%);\n        display: none;\n    }\n\n    .drawer-links-container {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        > a {\n            text-decoration: none;\n            color: #000000;\n            margin: 4px 0;\n            padding: 12px 0;\n            width: 100%;\n            font-weight: 500;\n        }\n\n        &:hover > a {\n            color: #0000d3;\n        }\n    }\n\n    .drawer-header {\n        border-bottom: 1px solid #c3c3c3;\n        display: flex;\n        justify-content: space-between;\n        padding: 14px 20px;\n\n        > button {\n            outline: none;\n            border: none;\n            padding: 0;\n            margin: 0;\n            background: none;\n            cursor: pointer;\n        }\n\n        > svg {\n            cursor: pointer;\n        }\n    }\n"])
                        }
                    })),
                    a = (0, n(20).css)(r);
                t.default = a
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(0),
                    a = r && r.__esModule ? r : {
                        default: r
                    };
                t.default = function() {
                    return a.default.createElement("svg", {
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.default.createElement("path", {
                        d: "M16.0004 32C7.1638 32 0.000366211 24.8366 0.000366211 16C0.000366211 7.16343 7.1638 0 16.0004 0C24.8369 0 32.0004 7.16343 32.0004 16C32.0004 24.8366 24.8369 32 16.0004 32ZM16.0004 30.5114C24.0147 30.5114 30.5118 24.0143 30.5118 16C30.5118 7.98571 24.0147 1.48857 16.0004 1.48857C7.98608 1.48857 1.48894 7.98571 1.48894 16C1.48894 24.0143 7.98608 30.5114 16.0004 30.5114ZM8.71751 22.5343H11.7249V12.9109H8.71751V22.5343ZM10.1444 11.7057H10.1227C9.03465 11.7057 8.32894 10.9703 8.32894 10.0389C8.32894 9.088 9.05522 8.36743 10.1655 8.36743C11.2741 8.36743 11.9569 9.08571 11.9781 10.036C11.9787 10.9674 11.2747 11.7057 10.1444 11.7057ZM23.7547 22.5343H20.3449V17.5543C20.3449 16.2503 19.8129 15.3611 18.6392 15.3611C17.7427 15.3611 17.2438 15.9611 17.0118 16.54C16.9249 16.7469 16.9381 17.0354 16.9381 17.3269V22.5349H13.5604C13.5604 22.5349 13.6044 13.7126 13.5604 12.9109H16.9381V14.4206C17.1375 13.76 18.2164 12.8166 19.9392 12.8166C22.0758 12.8166 23.7547 14.2017 23.7547 17.1829V22.5343Z",
                        fill: "#002856"
                    }))
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(0),
                    a = r && r.__esModule ? r : {
                        default: r
                    };
                t.default = function() {
                    return a.default.createElement("svg", {
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.default.createElement("path", {
                        d: "M16.0004 32C7.16351 32 0.000366211 24.8363 0.000366211 16C0.000366211 7.16372 7.16351 0 16.0004 0C24.8372 0 32.0004 7.16315 32.0004 16C32.0004 24.8369 24.8366 32 16.0004 32ZM16.0004 30.5116C24.0149 30.5116 30.5119 24.0146 30.5119 16C30.5119 7.98542 24.0144 1.48844 16.0004 1.48844C7.98636 1.48844 1.48823 7.98542 1.48823 16C1.48823 24.0146 7.98578 30.5116 16.0004 30.5116ZM22.805 12.3655C22.3058 12.5874 21.7677 12.7366 21.2045 12.8047C21.7803 12.4599 22.2223 11.9132 22.4299 11.2625C21.8901 11.5816 21.2948 11.8132 20.659 11.9384C20.1512 11.3969 19.4267 11.0578 18.6239 11.0578C17.0857 11.0578 15.8368 12.3066 15.8368 13.8454C15.8368 14.065 15.8608 14.2765 15.9089 14.4801C13.5913 14.3635 11.5385 13.2553 10.1621 11.5667C9.92196 11.9807 9.78472 12.4599 9.78472 12.9705C9.78472 13.9363 10.2765 14.7906 11.0256 15.2909C10.5687 15.2767 10.1375 15.1503 9.76185 14.9427V14.977C9.76185 16.3282 10.7225 17.4553 11.9988 17.7103C11.7643 17.7761 11.519 17.8087 11.2634 17.8087C11.0839 17.8087 10.9095 17.7921 10.7397 17.7595C11.0936 18.8659 12.1229 19.6728 13.3437 19.6951C12.3899 20.4424 11.1868 20.8879 9.88078 20.8879C9.65606 20.8879 9.43362 20.8753 9.21633 20.8501C10.4503 21.6404 11.9153 22.1019 13.4895 22.1019C18.6187 22.1019 21.4218 17.855 21.4218 14.1696C21.4218 14.0484 21.4195 13.9277 21.4143 13.8088C21.9587 13.4154 22.4322 12.9242 22.805 12.3655Z",
                        fill: "#002856"
                    }))
                }
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = '\n  .universal-unification-wrapper {\n    background: #ffffff;\n    box-shadow: inset 0px -1px 0px #c3c3c3;\n  }\n\n  .searchResultsBox ::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 25px;\n  }\n  .searchResultsBox ::-webkit-scrollbar-thumb {\n    min-height: 100px;\n    border: 7px solid rgba(0, 0, 0, 0);\n    background-clip: padding-box;\n    -webkit-border-radius: 20px;\n    border-radius: 20px;\n    background-color: #f4f4f4;\n  }\n\n  p {\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n  }\n\n  #pi-unification-header-main {\n    font-family: "Graphik", "Graphik Regular";\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n    color: #3e3e3e;\n  }\n  #pi-unification-header-main > span {\n    font-weight: bold;\n  }\n\n  .universal-navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .universal-navbar > div {\n    display: flex;\n    align-items: center;\n  }\n  @media (min-width: 960px) {\n    .universal-navbar {\n      gap: 24px;\n      height: 84px;\n      padding: 0 64px;\n      width: 100%;\n      max-width: 1440px;\n    }\n    .universal-navbar > div {\n      gap: 24px;\n    }\n  }\n  @media (min-width: 768px) and (max-width: 959px) {\n    .universal-navbar {\n      gap: 20px;\n      height: 64px;\n      padding: 0 32px;\n    }\n    .universal-navbar > div {\n      gap: 20px;\n    }\n  }\n  @media (max-width: 767px) {\n    .universal-navbar {\n      gap: 20px;\n      height: 54px;\n      padding: 0 20px;\n      position: relative;\n    }\n    .universal-navbar > div {\n      gap: 20px;\n    }\n    .universal-navbar > :first-child {\n      gap: 5px;\n    }\n  }\n\n  .logo-block {\n    display: inline-flex;\n  }\n  .logo-block > a {\n    display: inline-flex;\n  }\n\n  @media (min-width: 960px) {\n    .logo > svg {\n      height: 44px;\n    }\n  }\n  @media (min-width: 768px) and (max-width: 959px) {\n    .logo > svg {\n      height: 40px;\n    }\n  }\n  @media (max-width: 767px) {\n    .logo > svg {\n      height: 36px;\n    }\n  }\n\n  @media (max-width: 768px) {\n    .hide-logo-ham {\n      display: none !important;\n    }\n  }\n\n  .search-results-block {\n    position: relative;\n    flex-direction: column;\n    width: 100%;\n    justify-items: center;\n  }\n\n  .search-block {\n    height: 48px;\n    flex: 1;\n    position: relative;\n    width: 100%;\n  }\n  @media (max-width: 768px) {\n    .search-block {\n      height: 36px;\n    }\n    .search-block.open {\n      display: flex !important;\n      justify-content: center;\n      position: absolute;\n      width: calc(100% - 40px);\n      gap: 12px;\n      background-color: #fff;\n      z-index: 999;\n    }\n    .search-block.open .back-button {\n      display: block !important;\n    }\n    .search-block.open .universal-search-box {\n      display: block;\n    }\n    .search-block.open .magnifier-button {\n      display: none;\n    }\n  }\n\n  .searchResultsBox {\n    position: absolute;\n    z-index: 9999;\n    max-height: 457px;\n    overflow-y: scroll;\n    overflow-anchor: auto;\n    background-color: white;\n    top: 46px;\n    padding: 0px 2px 0px 12px;\n    border: 1px solid #e8e8e8;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 0px 0px 4px 4px;\n    width: 100%;\n  }\n  @media (max-width: 768px) {\n    .searchResultsBox {\n      width: calc(100% - 70px);\n      left: 50px;\n      top: 36px;\n    }\n  }\n  .searchResultsBox > ul {\n    padding-inline-start: 0px;\n  }\n  .searchResultsBox .noResults {\n    width: 100%;\n    margin: 0px auto 10px auto;\n  }\n  .searchResultsBox .noResults .glyphiconTriangleTop {\n    margin: 0px auto;\n    width: 20px;\n    height: 20px;\n    display: block;\n    font-size: 27px;\n  }\n  .searchResultsBox .noResults .noResultsText {\n    padding: 8px 16px;\n    text-align: center;\n    background-color: #0000a9;\n    color: #ffffff !important;\n    font-family: "Graphik-Web-Regular", "Graphik Regular", "Graphik", "Roboto", Arial, sans-serif;\n  }\n  .searchResultsBox li.searchResultItem {\n    display: block;\n    box-shadow: inset 0px -1px 0px #c3c3c3;\n    width: 100%;\n    padding: 8px 16px;\n  }\n  .searchResultsBox li.searchResultItem:hover {\n    background-color: #f0f1f2;\n  }\n  .searchResultsBox li.searchResultItem:first-of-type {\n    background-color: #f0f1f2;\n  }\n  @media (max-width: 768px) {\n    .searchResultsBox li.searchResultItem {\n      box-shadow: inset 0px -1px 0px #c3c3c3;\n    }\n  }\n  .searchResultsBox li.searchResultItem a {\n    width: 100%;\n    text-decoration: none;\n  }\n  .searchResultsBox li.searchResultItem .resultLabel {\n    padding: 8px 0px;\n  }\n  .searchResultsBox li.searchResultItem .resultLabel p {\n    display: inline;\n    color: black;\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: 400;\n    font-family: "Graphik-Web-Regular", "Graphik Regular", "Graphik", "Roboto", Arial, sans-serif;\n  }\n  .searchResultsBox li.searchResultItem .resultLabel p b {\n    font-family: "Graphik-Web-Medium", "Graphik Medium", "Graphik", "Roboto", Arial, sans-serif;\n    font-weight: bold;\n  }\n  .searchResultsBox li.searchResultItem .resultMarket {\n    color: black;\n    margin-block: 0.3em;\n  }\n\n  .icon-button {\n    outline: none;\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    cursor: pointer;\n  }\n\n  .back-button {\n    display: none;\n    margin-top: 4px;\n  }\n\n  .universal-search-box {\n    width: 100%;\n    height: 100%;\n    max-height: 46px;\n    font-family: "Graphik Regular", "Graphik", "Roboto", Arial, sans-serif;\n    font-size: 16px;\n    border: 1px solid #757575;\n    border-radius: 8px;\n    line-height: 24px;\n    box-sizing: border-box;\n  }\n  .universal-search-box:focus {\n    border-color: #00007f;\n  }\n  .universal-search-box.active + .magnifier-button, .universal-search-box:focus + .magnifier-button {\n    display: none;\n  }\n  @media (min-width: 960px) {\n    .universal-search-box {\n      padding: 10px 14px 10px 44px;\n    }\n    .universal-search-box.active, .universal-search-box:focus {\n      padding-left: 14px;\n    }\n  }\n  @media (min-width: 769px) and (max-width: 959px) {\n    .universal-search-box {\n      padding: 6px 12px 6px 40px;\n    }\n    .universal-search-box.active, .universal-search-box:focus {\n      padding-left: 12px;\n    }\n  }\n  @media (max-width: 768px) {\n    .universal-search-box {\n      display: none;\n      padding: 6px 12px;\n    }\n  }\n\n  .magnifier-button {\n    position: absolute;\n    left: 16px;\n    height: 24px;\n    top: 10px;\n  }\n  @media (min-width: 960px) {\n    .magnifier-button > svg {\n      width: 20px;\n    }\n  }\n  @media (min-width: 769px) and (max-width: 959px) {\n    .magnifier-button > svg {\n      width: 18px;\n    }\n  }\n  @media (max-width: 768px) {\n    .magnifier-button {\n      left: auto;\n      right: 0;\n      top: -10px;\n    }\n    .magnifier-button > svg {\n      width: 20px;\n    }\n  }\n\n  .clear-button {\n    position: absolute;\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    outline: none;\n    border: none;\n    color: #fff;\n    font-size: 18px;\n    line-height: 20px;\n    padding: 0;\n    cursor: pointer;\n    right: 10px;\n    top: 10px;\n  }\n\n  @media (max-width: 768px) {\n    .links-container {\n      display: none;\n    }\n  }\n\n  .nav-links {\n    display: flex;\n    gap: 12px;\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    font-family: "Graphik-Web-Medium", "Graphik Medium", "Graphik", "Roboto", Arial, sans-serif;\n    font-size: 16px;\n    font-weight: 500;\n    color: #002856;\n  }\n  .nav-links > li {\n    margin-top: 20px;\n    position: relative;\n    white-space: nowrap;\n  }\n  .nav-links > li > a {\n    cursor: pointer;\n    position: relative;\n    text-decoration: none;\n  }\n  .nav-links > li > a:hover {\n    text-decoration: underline;\n    text-decoration-color: ' + n(149).colors.primaryGartnerColor + ';\n  }\n  .nav-links > li > a > p {\n    margin: 8px 0 28px 0;\n    color: #002856;\n  }\n  .nav-links > li > a *:hover {\n    text-decoration: none;\n  }\n  .nav-links > li:hover .dropdown-links {\n    transform: scaleY(1);\n  }\n\n  .dropdown-links {\n    position: absolute;\n    list-style: none;\n    padding: 16px 24px;\n    margin: 0;\n    left: -24px;\n    top: 60px;\n    font-family: "Graphik Medium", "Graphik-Web-Medium", "Graphik", "Roboto", Arial, sans-serif;\n    font-size: 16px;\n    font-weight: 500;\n    width: 224px;\n    background: #fff;\n    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);\n    z-index: 200;\n    transform: scaleY(0);\n    transform-origin: top;\n    transition: transform 0.3s ease;\n  }\n  .dropdown-links.Community {\n    width: 324px;\n  }\n  .dropdown-links > li {\n    box-shadow: 0px 1px 0px #c3c3c3;\n  }\n  .dropdown-links > li > a {\n    text-decoration: none;\n    cursor: pointer;\n    width: 100%;\n    color: #535353;\n  }\n  .dropdown-links > li > a.not-clickable {\n    cursor: default;\n    color: #757575;\n  }\n  .dropdown-links > li > a.not-clickable .sub-text {\n    text-decoration: none;\n    font-size: 12px;\n    font-weight: 500;\n    color: #757575;\n  }\n  .dropdown-links > li > a.not-clickable#vendor-directory:hover {\n    color: #757575;\n  }\n  .dropdown-links > li > a.not-clickable#vendor-directory p:hover {\n    color: #757575;\n  }\n  .dropdown-links > li > a.clickable:hover {\n    color: #0000d3;\n  }\n  .dropdown-links > li > a > p {\n    margin: 4px 0;\n    padding: 12px 0;\n    width: 100%;\n  }\n  .dropdown-links > li > a *:hover {\n    text-decoration: none;\n  }\n  .dropdown-links > li:last-child {\n    box-shadow: none;\n  }\n\n  .dropdown-links.open {\n    transform: scaleY(1);\n  }\n\n  .arrow-down {\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-top: 5px solid #002856;\n    display: inline-block;\n    margin: 0 0 2px 8px;\n  }\n\n  .profile-container {\n    display: flex;\n    align-items: center;\n  }\n  .profile-container > .divider {\n    background-color: #757575;\n    height: 32px;\n    width: 1px;\n  }\n  @media (max-width: 767px) {\n    .profile-container > .divider {\n      display: none;\n    }\n  }\n  @media (min-width: 768px) {\n    .profile-container {\n      gap: 16px;\n    }\n  }\n  @media (max-width: 767px) {\n    .profile-container {\n      gap: 12px;\n    }\n  }\n\n  .login-button {\n    background: #0000a9;\n    font-family: "Graphik Medium", "Graphik-Web-Medium", "Graphik";\n    font-weight: 500;\n    line-height: 100%;\n    color: #ffffff;\n    cursor: pointer;\n    border: none;\n    outline: none;\n    white-space: nowrap;\n  }\n  @media (min-width: 960px) {\n    .login-button {\n      font-size: 16px;\n      padding: 12px 16px;\n    }\n  }\n  @media (min-width: 768px) and (max-width: 959px) {\n    .login-button {\n      font-size: 16px;\n      padding: 8px 20px;\n    }\n  }\n  @media (max-width: 767px) {\n    .login-button {\n      font-size: 12px;\n      padding: 8px 12px;\n    }\n  }\n\n  .notification-button {\n    cursor: pointer;\n    display: inline-flex;\n    position: relative;\n  }\n  @media (min-width: 960px) {\n    .notification-button > img {\n      height: 26px;\n    }\n  }\n  @media (max-width: 959px) {\n    .notification-button > img {\n      height: 23px;\n    }\n  }\n\n  .new-notifications-count {\n    position: absolute;\n    top: -2px;\n    padding: 2px 4px;\n    top: -2px;\n    right: -4px;\n    height: 15px;\n    background: #de0a01;\n    border-radius: 50%;\n    font-family: Graphik;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 12px;\n    color: #ffffff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .new-notifications-count.double {\n    width: 19px;\n  }\n  .new-notifications-count.single {\n    width: 14px;\n  }\n\n  .avatar-block {\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: #002856;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    justify-content: center;\n  }\n  @media (min-width: 960px) {\n    .avatar-block {\n      height: 32px;\n      width: 32px;\n    }\n  }\n  @media (max-width: 959px) {\n    .avatar-block {\n      height: 28px;\n      width: 28px;\n    }\n  }\n  .avatar-block > img {\n    border-radius: 50%;\n  }\n  @media (min-width: 960px) {\n    .avatar-block > img {\n      height: 32px;\n      width: 32px;\n    }\n  }\n  @media (max-width: 959px) {\n    .avatar-block > img {\n      height: 28px;\n      width: 28px;\n    }\n  }\n  .avatar-block .dropdown-links {\n    left: auto;\n    z-index: 1;\n  }\n  @media (max-height: 570px) {\n    .avatar-block .dropdown-links {\n      overflow-y: auto;\n      height: auto;\n    }\n  }\n  @media (max-height: 800px) and (min-height: 571px) {\n    .avatar-block .dropdown-links {\n      overflow-y: auto;\n      height: auto;\n      top: 80px;\n    }\n  }\n  @media (min-width: 960px) and (max-width: 1499px) {\n    .avatar-block .dropdown-links {\n      top: 80px;\n      margin-left: 0;\n      right: 0;\n    }\n  }\n  @media (min-width: 1500px) {\n    .avatar-block .dropdown-links {\n      top: 80px;\n      margin-left: 155px;\n    }\n  }\n  @media (min-width: 768px) and (max-width: 959px) {\n    .avatar-block .dropdown-links {\n      top: 64px;\n      right: 0;\n    }\n  }\n  @media (max-width: 767px) {\n    .avatar-block .dropdown-links {\n      top: 54px;\n      right: 0;\n    }\n  }\n\n  .vendor-button {\n    height: 36px;\n  }\n  @media (max-width: 767px) {\n    .vendor-button {\n      display: none;\n    }\n  }\n\n  .points-block {\n    display: flex;\n    align-items: center;\n  }\n  @media (min-width: 960px) {\n    .points-block > img {\n      width: 20px;\n    }\n  }\n  @media (max-width: 959px) {\n    .points-block > img {\n      width: 14px;\n    }\n  }\n  .points-block > p {\n    display: flex;\n    align-items: center;\n  }\n  @media (max-width: 767px) {\n    .points-block {\n      display: none;\n    }\n  }\n\n  .modal-mask {\n    position: fixed;\n    z-index: -999;\n    top: 0;\n    left: 0;\n    width: 0%;\n    height: 0%;\n    opacity: 0;\n    background-color: rgba(0, 0, 0, 0.56);\n    display: table;\n    transition: opacity 0.3s ease;\n  }\n\n  .modal-mask.open {\n    opacity: 1;\n    z-index: 199;\n    width: 100%;\n    height: 100%;\n  }\n\n  .points {\n    font-family: "Graphik Medium", "Graphik";\n    font-weight: 500;\n    color: #002856;\n    margin: 2px 0 0 4px;\n  }\n  @media (min-width: 960px) {\n    .points {\n      font-size: 14px;\n    }\n  }\n  @media (max-width: 959px) {\n    .points {\n      font-size: 12px;\n    }\n  }\n\n  /* Keyframes */\n  @keyframes wiggle {\n    0%, 7% {\n      transform: rotateZ(0);\n    }\n    15% {\n      transform: rotateZ(-16deg);\n    }\n    20% {\n      transform: rotateZ(8deg);\n    }\n    25% {\n      transform: rotateZ(-8deg);\n    }\n    30% {\n      transform: rotateZ(4deg);\n    }\n    35% {\n      transform: rotateZ(-4deg);\n    }\n    40%, 100% {\n      transform: rotateZ(0);\n    }\n  }\n  #universal-header {\n    display: block !important;\n  }\n  .header-search-vp-label-no-reviews{\n    display: flex;\n    align-items: center;\n    gap: 5px;\n  }\n';
                t.default = r
            }])
        }
    }
]);