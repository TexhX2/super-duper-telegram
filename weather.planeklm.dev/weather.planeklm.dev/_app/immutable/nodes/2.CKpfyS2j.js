import {
    s as Ct,
    p as Ie,
    k as F,
    n as be,
    i as y,
    r as Wt,
    S as qt,
    T as Ee,
    U as nt,
    e as S,
    d as C,
    f as O,
    V as ot,
    W as Jt,
    X as Qt,
    Y as Zt,
    Z as Yt,
    _ as rt,
    $ as Xt,
    G as en,
    a0 as st,
    b as R,
    a1 as fe,
    j as $,
    a2 as tn,
    v as w,
    E as oe,
    a3 as it,
    l as m,
    a4 as He,
    a5 as at,
    a6 as _e,
    a7 as nn,
    a8 as on,
    C as rn,
    o as sn,
    t as K,
    h as z,
    a9 as an,
    m as ue
} from "../chunks/scheduler.CLOslx8b.js";
import {
    S as It,
    i as Et,
    b as Te,
    d as Pe,
    m as Me,
    t as ne,
    a as se,
    c as Tt,
    e as Ae,
    g as Pt,
    f as ie
} from "../chunks/index.BsgsbCCV.js";
import {
    w as ln
} from "../chunks/index.B9r7Orfl.js";

function lt(e) {
    return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e)
}

function Mt(e, t) {
    const n = {},
        r = {},
        o = {
            $$scope: 1
        };
    let s = e.length;
    for (; s--;) {
        const i = e[s],
            a = t[s];
        if (a) {
            for (const c in i) c in a || (r[c] = 1);
            for (const c in a) o[c] || (n[c] = a[c], o[c] = 1);
            e[s] = a
        } else
            for (const c in i) o[c] = 1
    }
    for (const i in r) i in n || (n[i] = void 0);
    return n
}
const ye = /^[a-z0-9]+(-[a-z0-9]+)*$/,
    De = (e, t, n, r = "") => {
        const o = e.split(":");
        if (e.slice(0, 1) === "@") {
            if (o.length < 2 || o.length > 3) return null;
            r = o.shift().slice(1)
        }
        if (o.length > 3 || !o.length) return null;
        if (o.length > 1) {
            const a = o.pop(),
                c = o.pop(),
                l = {
                    provider: o.length > 0 ? o[0] : r,
                    prefix: c,
                    name: a
                };
            return t && !Se(l) ? null : l
        }
        const s = o[0],
            i = s.split("-");
        if (i.length > 1) {
            const a = {
                provider: r,
                prefix: i.shift(),
                name: i.join("-")
            };
            return t && !Se(a) ? null : a
        }
        if (n && r === "") {
            const a = {
                provider: r,
                prefix: "",
                name: s
            };
            return t && !Se(a, n) ? null : a
        }
        return null
    },
    Se = (e, t) => e ? !!((e.provider === "" || e.provider.match(ye)) && (t && e.prefix === "" || e.prefix.match(ye)) && e.name.match(ye)) : !1,
    At = Object.freeze({
        left: 0,
        top: 0,
        width: 16,
        height: 16
    }),
    je = Object.freeze({
        rotate: 0,
        vFlip: !1,
        hFlip: !1
    }),
    Le = Object.freeze({ ...At,
        ...je
    }),
    Ue = Object.freeze({ ...Le,
        body: "",
        hidden: !1
    });

function cn(e, t) {
    const n = {};
    !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
    const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
    return r && (n.rotate = r), n
}

function ct(e, t) {
    const n = cn(e, t);
    for (const r in Ue) r in je ? r in e && !(r in n) && (n[r] = je[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
    return n
}

function un(e, t) {
    const n = e.icons,
        r = e.aliases || Object.create(null),
        o = Object.create(null);

    function s(i) {
        if (n[i]) return o[i] = [];
        if (!(i in o)) {
            o[i] = null;
            const a = r[i] && r[i].parent,
                c = a && s(a);
            c && (o[i] = [a].concat(c))
        }
        return o[i]
    }
    return Object.keys(n).concat(Object.keys(r)).forEach(s), o
}

function fn(e, t, n) {
    const r = e.icons,
        o = e.aliases || Object.create(null);
    let s = {};

    function i(a) {
        s = ct(r[a] || o[a], s)
    }
    return i(t), n.forEach(i), ct(e, s)
}

function jt(e, t) {
    const n = [];
    if (typeof e != "object" || typeof e.icons != "object") return n;
    e.not_found instanceof Array && e.not_found.forEach(o => {
        t(o, null), n.push(o)
    });
    const r = un(e);
    for (const o in r) {
        const s = r[o];
        s && (t(o, fn(e, o, s)), n.push(o))
    }
    return n
}
const dn = {
    provider: "",
    aliases: {},
    not_found: {},
    ...At
};

function Ve(e, t) {
    for (const n in t)
        if (n in e && typeof e[n] != typeof t[n]) return !1;
    return !0
}

function Ot(e) {
    if (typeof e != "object" || e === null) return null;
    const t = e;
    if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Ve(e, dn)) return null;
    const n = t.icons;
    for (const o in n) {
        const s = n[o];
        if (!o.match(ye) || typeof s.body != "string" || !Ve(s, Ue)) return null
    }
    const r = t.aliases || Object.create(null);
    for (const o in r) {
        const s = r[o],
            i = s.parent;
        if (!o.match(ye) || typeof i != "string" || !n[i] && !r[i] || !Ve(s, Ue)) return null
    }
    return t
}
const ut = Object.create(null);

function pn(e, t) {
    return {
        provider: e,
        prefix: t,
        icons: Object.create(null),
        missing: new Set
    }
}

function de(e, t) {
    const n = ut[e] || (ut[e] = Object.create(null));
    return n[t] || (n[t] = pn(e, t))
}

function Qe(e, t) {
    return Ot(t) ? jt(t, (n, r) => {
        r ? e.icons[n] = r : e.missing.add(n)
    }) : []
}

function hn(e, t, n) {
    try {
        if (typeof n.body == "string") return e.icons[t] = { ...n
        }, !0
    } catch {}
    return !1
}
let xe = !1;

function Dt(e) {
    return typeof e == "boolean" && (xe = e), xe
}

function mn(e) {
    const t = typeof e == "string" ? De(e, !0, xe) : e;
    if (t) {
        const n = de(t.provider, t.prefix),
            r = t.name;
        return n.icons[r] || (n.missing.has(r) ? null : void 0)
    }
}

function gn(e, t) {
    const n = De(e, !0, xe);
    if (!n) return !1;
    const r = de(n.provider, n.prefix);
    return hn(r, n.name, t)
}

function yn(e, t) {
    if (typeof e != "object") return !1;
    if (typeof t != "string" && (t = e.provider || ""), xe && !t && !e.prefix) {
        let o = !1;
        return Ot(e) && (e.prefix = "", jt(e, (s, i) => {
            i && gn(s, i) && (o = !0)
        })), o
    }
    const n = e.prefix;
    if (!Se({
            provider: t,
            prefix: n,
            name: "a"
        })) return !1;
    const r = de(t, n);
    return !!Qe(r, e)
}
const Lt = Object.freeze({
        width: null,
        height: null
    }),
    Nt = Object.freeze({ ...Lt,
        ...je
    }),
    bn = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
    xn = /^-?[0-9.]*[0-9]+[0-9.]*$/g;

function ft(e, t, n) {
    if (t === 1) return e;
    if (n = n || 100, typeof e == "number") return Math.ceil(e * t * n) / n;
    if (typeof e != "string") return e;
    const r = e.split(bn);
    if (r === null || !r.length) return e;
    const o = [];
    let s = r.shift(),
        i = xn.test(s);
    for (;;) {
        if (i) {
            const a = parseFloat(s);
            isNaN(a) ? o.push(s) : o.push(Math.ceil(a * t * n) / n)
        } else o.push(s);
        if (s = r.shift(), s === void 0) return o.join("");
        i = !i
    }
}

function wn(e, t = "defs") {
    let n = "";
    const r = e.indexOf("<" + t);
    for (; r >= 0;) {
        const o = e.indexOf(">", r),
            s = e.indexOf("</" + t);
        if (o === -1 || s === -1) break;
        const i = e.indexOf(">", s);
        if (i === -1) break;
        n += e.slice(o + 1, s).trim(), e = e.slice(0, r).trim() + e.slice(i + 1)
    }
    return {
        defs: n,
        content: e
    }
}

function vn(e, t) {
    return e ? "<defs>" + e + "</defs>" + t : t
}

function _n(e, t, n) {
    const r = wn(e);
    return vn(r.defs, t + r.content + n)
}
const kn = e => e === "unset" || e === "undefined" || e === "none";

function Sn(e, t) {
    const n = { ...Le,
            ...e
        },
        r = { ...Nt,
            ...t
        },
        o = {
            left: n.left,
            top: n.top,
            width: n.width,
            height: n.height
        };
    let s = n.body;
    [n, r].forEach(T => {
        const v = [],
            p = T.hFlip,
            h = T.vFlip;
        let P = T.rotate;
        p ? h ? P += 2 : (v.push("translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"), v.push("scale(-1 1)"), o.top = o.left = 0) : h && (v.push("translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"), v.push("scale(1 -1)"), o.top = o.left = 0);
        let g;
        switch (P < 0 && (P -= Math.floor(P / 4) * 4), P = P % 4, P) {
            case 1:
                g = o.height / 2 + o.top, v.unshift("rotate(90 " + g.toString() + " " + g.toString() + ")");
                break;
            case 2:
                v.unshift("rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")");
                break;
            case 3:
                g = o.width / 2 + o.left, v.unshift("rotate(-90 " + g.toString() + " " + g.toString() + ")");
                break
        }
        P % 2 === 1 && (o.left !== o.top && (g = o.left, o.left = o.top, o.top = g), o.width !== o.height && (g = o.width, o.width = o.height, o.height = g)), v.length && (s = _n(s, '<g transform="' + v.join(" ") + '">', "</g>"))
    });
    const i = r.width,
        a = r.height,
        c = o.width,
        l = o.height;
    let u, d;
    i === null ? (d = a === null ? "1em" : a === "auto" ? l : a, u = ft(d, c / l)) : (u = i === "auto" ? c : i, d = a === null ? ft(u, l / c) : a === "auto" ? l : a);
    const _ = {},
        E = (T, v) => {
            kn(v) || (_[T] = v.toString())
        };
    E("width", u), E("height", d);
    const k = [o.left, o.top, c, l];
    return _.viewBox = k.join(" "), {
        attributes: _,
        viewBox: k,
        body: s
    }
}
const Cn = /\sid="(\S+)"/g,
    In = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let En = 0;

function Tn(e, t = In) {
    const n = [];
    let r;
    for (; r = Cn.exec(e);) n.push(r[1]);
    if (!n.length) return e;
    const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    return n.forEach(s => {
        const i = typeof t == "function" ? t(s) : t + (En++).toString(),
            a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e = e.replace(new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"), "$1" + i + o + "$3")
    }), e = e.replace(new RegExp(o, "g"), ""), e
}
const Ge = Object.create(null);

function Pn(e, t) {
    Ge[e] = t
}

function Ke(e) {
    return Ge[e] || Ge[""]
}

function Ze(e) {
    let t;
    if (typeof e.resources == "string") t = [e.resources];
    else if (t = e.resources, !(t instanceof Array) || !t.length) return null;
    return {
        resources: t,
        path: e.path || "/",
        maxURL: e.maxURL || 500,
        rotate: e.rotate || 750,
        timeout: e.timeout || 5e3,
        random: e.random === !0,
        index: e.index || 0,
        dataAfterTimeout: e.dataAfterTimeout !== !1
    }
}
const Ye = Object.create(null),
    ge = ["https://api.simplesvg.com", "https://api.unisvg.com"],
    Ce = [];
for (; ge.length > 0;) ge.length === 1 || Math.random() > .5 ? Ce.push(ge.shift()) : Ce.push(ge.pop());
Ye[""] = Ze({
    resources: ["https://api.iconify.design"].concat(Ce)
});

function Mn(e, t) {
    const n = Ze(t);
    return n === null ? !1 : (Ye[e] = n, !0)
}

function Xe(e) {
    return Ye[e]
}
const An = () => {
    let e;
    try {
        if (e = fetch, typeof e == "function") return e
    } catch {}
};
let dt = An();

function jn(e, t) {
    const n = Xe(e);
    if (!n) return 0;
    let r;
    if (!n.maxURL) r = 0;
    else {
        let o = 0;
        n.resources.forEach(i => {
            o = Math.max(o, i.length)
        });
        const s = t + ".json?icons=";
        r = n.maxURL - o - n.path.length - s.length
    }
    return r
}

function On(e) {
    return e === 404
}
const Dn = (e, t, n) => {
    const r = [],
        o = jn(e, t),
        s = "icons";
    let i = {
            type: s,
            provider: e,
            prefix: t,
            icons: []
        },
        a = 0;
    return n.forEach((c, l) => {
        a += c.length + 1, a >= o && l > 0 && (r.push(i), i = {
            type: s,
            provider: e,
            prefix: t,
            icons: []
        }, a = c.length), i.icons.push(c)
    }), r.push(i), r
};

function Ln(e) {
    if (typeof e == "string") {
        const t = Xe(e);
        if (t) return t.path
    }
    return "/"
}
const Nn = (e, t, n) => {
        if (!dt) {
            n("abort", 424);
            return
        }
        let r = Ln(t.provider);
        switch (t.type) {
            case "icons":
                {
                    const s = t.prefix,
                        a = t.icons.join(","),
                        c = new URLSearchParams({
                            icons: a
                        });r += s + ".json?" + c.toString();
                    break
                }
            case "custom":
                {
                    const s = t.uri;r += s.slice(0, 1) === "/" ? s.slice(1) : s;
                    break
                }
            default:
                n("abort", 400);
                return
        }
        let o = 503;
        dt(e + r).then(s => {
            const i = s.status;
            if (i !== 200) {
                setTimeout(() => {
                    n(On(i) ? "abort" : "next", i)
                });
                return
            }
            return o = 501, s.json()
        }).then(s => {
            if (typeof s != "object" || s === null) {
                setTimeout(() => {
                    s === 404 ? n("abort", s) : n("next", o)
                });
                return
            }
            setTimeout(() => {
                n("success", s)
            })
        }).catch(() => {
            n("next", o)
        })
    },
    Fn = {
        prepare: Dn,
        send: Nn
    };

function Bn(e) {
    const t = {
            loaded: [],
            missing: [],
            pending: []
        },
        n = Object.create(null);
    e.sort((o, s) => o.provider !== s.provider ? o.provider.localeCompare(s.provider) : o.prefix !== s.prefix ? o.prefix.localeCompare(s.prefix) : o.name.localeCompare(s.name));
    let r = {
        provider: "",
        prefix: "",
        name: ""
    };
    return e.forEach(o => {
        if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider) return;
        r = o;
        const s = o.provider,
            i = o.prefix,
            a = o.name,
            c = n[s] || (n[s] = Object.create(null)),
            l = c[i] || (c[i] = de(s, i));
        let u;
        a in l.icons ? u = t.loaded : i === "" || l.missing.has(a) ? u = t.missing : u = t.pending;
        const d = {
            provider: s,
            prefix: i,
            name: a
        };
        u.push(d)
    }), t
}

function Ft(e, t) {
    e.forEach(n => {
        const r = n.loaderCallbacks;
        r && (n.loaderCallbacks = r.filter(o => o.id !== t))
    })
}

function Vn(e) {
    e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
        e.pendingCallbacksFlag = !1;
        const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
        if (!t.length) return;
        let n = !1;
        const r = e.provider,
            o = e.prefix;
        t.forEach(s => {
            const i = s.icons,
                a = i.pending.length;
            i.pending = i.pending.filter(c => {
                if (c.prefix !== o) return !0;
                const l = c.name;
                if (e.icons[l]) i.loaded.push({
                    provider: r,
                    prefix: o,
                    name: l
                });
                else if (e.missing.has(l)) i.missing.push({
                    provider: r,
                    prefix: o,
                    name: l
                });
                else return n = !0, !0;
                return !1
            }), i.pending.length !== a && (n || Ft([e], s.id), s.callback(i.loaded.slice(0), i.missing.slice(0), i.pending.slice(0), s.abort))
        })
    }))
}
let Rn = 0;

function $n(e, t, n) {
    const r = Rn++,
        o = Ft.bind(null, n, r);
    if (!t.pending.length) return o;
    const s = {
        id: r,
        icons: t,
        callback: e,
        abort: o
    };
    return n.forEach(i => {
        (i.loaderCallbacks || (i.loaderCallbacks = [])).push(s)
    }), o
}

function Hn(e, t = !0, n = !1) {
    const r = [];
    return e.forEach(o => {
        const s = typeof o == "string" ? De(o, t, n) : o;
        s && r.push(s)
    }), r
}
var Un = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1
};

function Gn(e, t, n, r) {
    const o = e.resources.length,
        s = e.random ? Math.floor(Math.random() * o) : e.index;
    let i;
    if (e.random) {
        let x = e.resources.slice(0);
        for (i = []; x.length > 1;) {
            const N = Math.floor(Math.random() * x.length);
            i.push(x[N]), x = x.slice(0, N).concat(x.slice(N + 1))
        }
        i = i.concat(x)
    } else i = e.resources.slice(s).concat(e.resources.slice(0, s));
    const a = Date.now();
    let c = "pending",
        l = 0,
        u, d = null,
        _ = [],
        E = [];
    typeof r == "function" && E.push(r);

    function k() {
        d && (clearTimeout(d), d = null)
    }

    function T() {
        c === "pending" && (c = "aborted"), k(), _.forEach(x => {
            x.status === "pending" && (x.status = "aborted")
        }), _ = []
    }

    function v(x, N) {
        N && (E = []), typeof x == "function" && E.push(x)
    }

    function p() {
        return {
            startTime: a,
            payload: t,
            status: c,
            queriesSent: l,
            queriesPending: _.length,
            subscribe: v,
            abort: T
        }
    }

    function h() {
        c = "failed", E.forEach(x => {
            x(void 0, u)
        })
    }

    function P() {
        _.forEach(x => {
            x.status === "pending" && (x.status = "aborted")
        }), _ = []
    }

    function g(x, N, V) {
        const H = N !== "success";
        switch (_ = _.filter(D => D !== x), c) {
            case "pending":
                break;
            case "failed":
                if (H || !e.dataAfterTimeout) return;
                break;
            default:
                return
        }
        if (N === "abort") {
            u = V, h();
            return
        }
        if (H) {
            u = V, _.length || (i.length ? B() : h());
            return
        }
        if (k(), P(), !e.random) {
            const D = e.resources.indexOf(x.resource);
            D !== -1 && D !== e.index && (e.index = D)
        }
        c = "completed", E.forEach(D => {
            D(V)
        })
    }

    function B() {
        if (c !== "pending") return;
        k();
        const x = i.shift();
        if (x === void 0) {
            if (_.length) {
                d = setTimeout(() => {
                    k(), c === "pending" && (P(), h())
                }, e.timeout);
                return
            }
            h();
            return
        }
        const N = {
            status: "pending",
            resource: x,
            callback: (V, H) => {
                g(N, V, H)
            }
        };
        _.push(N), l++, d = setTimeout(B, e.rotate), n(x, t, N.callback)
    }
    return setTimeout(B), p
}

function Bt(e) {
    const t = { ...Un,
        ...e
    };
    let n = [];

    function r() {
        n = n.filter(a => a().status === "pending")
    }

    function o(a, c, l) {
        const u = Gn(t, a, c, (d, _) => {
            r(), l && l(d, _)
        });
        return n.push(u), u
    }

    function s(a) {
        return n.find(c => a(c)) || null
    }
    return {
        query: o,
        find: s,
        setIndex: a => {
            t.index = a
        },
        getIndex: () => t.index,
        cleanup: r
    }
}

function pt() {}
const Re = Object.create(null);

function Kn(e) {
    if (!Re[e]) {
        const t = Xe(e);
        if (!t) return;
        const n = Bt(t),
            r = {
                config: t,
                redundancy: n
            };
        Re[e] = r
    }
    return Re[e]
}

function zn(e, t, n) {
    let r, o;
    if (typeof e == "string") {
        const s = Ke(e);
        if (!s) return n(void 0, 424), pt;
        o = s.send;
        const i = Kn(e);
        i && (r = i.redundancy)
    } else {
        const s = Ze(e);
        if (s) {
            r = Bt(s);
            const i = e.resources ? e.resources[0] : "",
                a = Ke(i);
            a && (o = a.send)
        }
    }
    return !r || !o ? (n(void 0, 424), pt) : r.query(t, o, n)().abort
}
const ht = "iconify2",
    we = "iconify",
    Vt = we + "-count",
    mt = we + "-version",
    Rt = 36e5,
    Wn = 168,
    qn = 50;

function ze(e, t) {
    try {
        return e.getItem(t)
    } catch {}
}

function et(e, t, n) {
    try {
        return e.setItem(t, n), !0
    } catch {}
}

function gt(e, t) {
    try {
        e.removeItem(t)
    } catch {}
}

function We(e, t) {
    return et(e, Vt, t.toString())
}

function qe(e) {
    return parseInt(ze(e, Vt)) || 0
}
const Ne = {
        local: !0,
        session: !0
    },
    $t = {
        local: new Set,
        session: new Set
    };
let tt = !1;

function Jn(e) {
    tt = e
}
let ke = typeof window > "u" ? {} : window;

function Ht(e) {
    const t = e + "Storage";
    try {
        if (ke && ke[t] && typeof ke[t].length == "number") return ke[t]
    } catch {}
    Ne[e] = !1
}

function Ut(e, t) {
    const n = Ht(e);
    if (!n) return;
    const r = ze(n, mt);
    if (r !== ht) {
        if (r) {
            const a = qe(n);
            for (let c = 0; c < a; c++) gt(n, we + c.toString())
        }
        et(n, mt, ht), We(n, 0);
        return
    }
    const o = Math.floor(Date.now() / Rt) - Wn,
        s = a => {
            const c = we + a.toString(),
                l = ze(n, c);
            if (typeof l == "string") {
                try {
                    const u = JSON.parse(l);
                    if (typeof u == "object" && typeof u.cached == "number" && u.cached > o && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && t(u, a)) return !0
                } catch {}
                gt(n, c)
            }
        };
    let i = qe(n);
    for (let a = i - 1; a >= 0; a--) s(a) || (a === i - 1 ? (i--, We(n, i)) : $t[e].add(a))
}

function Gt() {
    if (!tt) {
        Jn(!0);
        for (const e in Ne) Ut(e, t => {
            const n = t.data,
                r = t.provider,
                o = n.prefix,
                s = de(r, o);
            if (!Qe(s, n).length) return !1;
            const i = n.lastModified || -1;
            return s.lastModifiedCached = s.lastModifiedCached ? Math.min(s.lastModifiedCached, i) : i, !0
        })
    }
}

function Qn(e, t) {
    const n = e.lastModifiedCached;
    if (n && n >= t) return n === t;
    if (e.lastModifiedCached = t, n)
        for (const r in Ne) Ut(r, o => {
            const s = o.data;
            return o.provider !== e.provider || s.prefix !== e.prefix || s.lastModified === t
        });
    return !0
}

function Zn(e, t) {
    tt || Gt();

    function n(r) {
        let o;
        if (!Ne[r] || !(o = Ht(r))) return;
        const s = $t[r];
        let i;
        if (s.size) s.delete(i = Array.from(s).shift());
        else if (i = qe(o), i >= qn || !We(o, i + 1)) return;
        const a = {
            cached: Math.floor(Date.now() / Rt),
            provider: e.provider,
            data: t
        };
        return et(o, we + i.toString(), JSON.stringify(a))
    }
    t.lastModified && !Qn(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"))
}

function yt() {}

function Yn(e) {
    e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
        e.iconsLoaderFlag = !1, Vn(e)
    }))
}

function Xn(e, t) {
    e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
        e.iconsQueueFlag = !1;
        const {
            provider: n,
            prefix: r
        } = e, o = e.iconsToLoad;
        delete e.iconsToLoad;
        let s;
        if (!o || !(s = Ke(n))) return;
        s.prepare(n, r, o).forEach(a => {
            zn(n, a, c => {
                if (typeof c != "object") a.icons.forEach(l => {
                    e.missing.add(l)
                });
                else try {
                    const l = Qe(e, c);
                    if (!l.length) return;
                    const u = e.pendingIcons;
                    u && l.forEach(d => {
                        u.delete(d)
                    }), Zn(e, c)
                } catch (l) {
                    console.error(l)
                }
                Yn(e)
            })
        })
    }))
}
const eo = (e, t) => {
    const n = Hn(e, !0, Dt()),
        r = Bn(n);
    if (!r.pending.length) {
        let c = !0;
        return t && setTimeout(() => {
            c && t(r.loaded, r.missing, r.pending, yt)
        }), () => {
            c = !1
        }
    }
    const o = Object.create(null),
        s = [];
    let i, a;
    return r.pending.forEach(c => {
        const {
            provider: l,
            prefix: u
        } = c;
        if (u === a && l === i) return;
        i = l, a = u, s.push(de(l, u));
        const d = o[l] || (o[l] = Object.create(null));
        d[u] || (d[u] = [])
    }), r.pending.forEach(c => {
        const {
            provider: l,
            prefix: u,
            name: d
        } = c, _ = de(l, u), E = _.pendingIcons || (_.pendingIcons = new Set);
        E.has(d) || (E.add(d), o[l][u].push(d))
    }), s.forEach(c => {
        const {
            provider: l,
            prefix: u
        } = c;
        o[l][u].length && Xn(c, o[l][u])
    }), t ? $n(t, r, s) : yt
};

function to(e, t) {
    const n = { ...e
    };
    for (const r in t) {
        const o = t[r],
            s = typeof o;
        r in Lt ? (o === null || o && (s === "string" || s === "number")) && (n[r] = o) : s === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o)
    }
    return n
}
const no = /[\s,]+/;

function oo(e, t) {
    t.split(no).forEach(n => {
        switch (n.trim()) {
            case "horizontal":
                e.hFlip = !0;
                break;
            case "vertical":
                e.vFlip = !0;
                break
        }
    })
}

function ro(e, t = 0) {
    const n = e.replace(/^-?[0-9.]*/, "");

    function r(o) {
        for (; o < 0;) o += 4;
        return o % 4
    }
    if (n === "") {
        const o = parseInt(e);
        return isNaN(o) ? 0 : r(o)
    } else if (n !== e) {
        let o = 0;
        switch (n) {
            case "%":
                o = 25;
                break;
            case "deg":
                o = 90
        }
        if (o) {
            let s = parseFloat(e.slice(0, e.length - n.length));
            return isNaN(s) ? 0 : (s = s / o, s % 1 === 0 ? r(s) : 0)
        }
    }
    return t
}

function so(e, t) {
    let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const r in t) n += " " + r + '="' + t[r] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>"
}

function io(e) {
    return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ")
}

function ao(e) {
    return "data:image/svg+xml," + io(e)
}

function lo(e) {
    return 'url("' + ao(e) + '")'
}
const bt = { ...Nt,
        inline: !1
    },
    co = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "aria-hidden": !0,
        role: "img"
    },
    uo = {
        display: "inline-block"
    },
    Je = {
        "background-color": "currentColor"
    },
    Kt = {
        "background-color": "transparent"
    },
    xt = {
        image: "var(--svg)",
        repeat: "no-repeat",
        size: "100% 100%"
    },
    wt = {
        "-webkit-mask": Je,
        mask: Je,
        background: Kt
    };
for (const e in wt) {
    const t = wt[e];
    for (const n in xt) t[e + "-" + n] = xt[n]
}

function fo(e) {
    return e + (e.match(/^[-0-9.]+$/) ? "px" : "")
}

function po(e, t) {
    const n = to(bt, t),
        r = t.mode || "svg",
        o = r === "svg" ? { ...co
        } : {};
    e.body.indexOf("xlink:") === -1 && delete o["xmlns:xlink"];
    let s = typeof t.style == "string" ? t.style : "";
    for (let p in t) {
        const h = t[p];
        if (h !== void 0) switch (p) {
            case "icon":
            case "style":
            case "onLoad":
            case "mode":
                break;
            case "inline":
            case "hFlip":
            case "vFlip":
                n[p] = h === !0 || h === "true" || h === 1;
                break;
            case "flip":
                typeof h == "string" && oo(n, h);
                break;
            case "color":
                s = s + (s.length > 0 && s.trim().slice(-1) !== ";" ? ";" : "") + "color: " + h + "; ";
                break;
            case "rotate":
                typeof h == "string" ? n[p] = ro(h) : typeof h == "number" && (n[p] = h);
                break;
            case "ariaHidden":
            case "aria-hidden":
                h !== !0 && h !== "true" && delete o["aria-hidden"];
                break;
            default:
                if (p.slice(0, 3) === "on:") break;
                bt[p] === void 0 && (o[p] = h)
        }
    }
    const i = Sn(e, n),
        a = i.attributes;
    if (n.inline && (s = "vertical-align: -0.125em; " + s), r === "svg") {
        Object.assign(o, a), s !== "" && (o.style = s);
        let p = 0,
            h = t.id;
        return typeof h == "string" && (h = h.replace(/-/g, "_")), {
            svg: !0,
            attributes: o,
            body: Tn(i.body, h ? () => h + "ID" + p++ : "iconifySvelte")
        }
    }
    const {
        body: c,
        width: l,
        height: u
    } = e, d = r === "mask" || (r === "bg" ? !1 : c.indexOf("currentColor") !== -1), _ = so(c, { ...a,
        width: l + "",
        height: u + ""
    }), k = {
        "--svg": lo(_)
    }, T = p => {
        const h = a[p];
        h && (k[p] = fo(h))
    };
    T("width"), T("height"), Object.assign(k, uo, d ? Je : Kt);
    let v = "";
    for (const p in k) v += p + ": " + k[p] + ";";
    return o.style = v + s, {
        svg: !1,
        attributes: o
    }
}
Dt(!0);
Pn("", Fn);
if (typeof document < "u" && typeof window < "u") {
    Gt();
    const e = window;
    if (e.IconifyPreload !== void 0) {
        const t = e.IconifyPreload,
            n = "Invalid IconifyPreload syntax.";
        typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach(r => {
            try {
                (typeof r != "object" || r === null || r instanceof Array || typeof r.icons != "object" || typeof r.prefix != "string" || !yn(r)) && console.error(n)
            } catch {
                console.error(n)
            }
        })
    }
    if (e.IconifyProviders !== void 0) {
        const t = e.IconifyProviders;
        if (typeof t == "object" && t !== null)
            for (let n in t) {
                const r = "IconifyProviders[" + n + "] is invalid.";
                try {
                    const o = t[n];
                    if (typeof o != "object" || !o || o.resources === void 0) continue;
                    Mn(n, o) || console.error(r)
                } catch {
                    console.error(r)
                }
            }
    }
}

function ho(e, t, n, r, o) {
    function s() {
        t.loading && (t.loading.abort(), t.loading = null)
    }
    if (typeof e == "object" && e !== null && typeof e.body == "string") return t.name = "", s(), {
        data: { ...Le,
            ...e
        }
    };
    let i;
    if (typeof e != "string" || (i = De(e, !1, !0)) === null) return s(), null;
    const a = mn(i);
    if (!a) return n && (!t.loading || t.loading.name !== e) && (s(), t.name = "", t.loading = {
        name: e,
        abort: eo([i], r)
    }), null;
    s(), t.name !== e && (t.name = e, o && !t.destroyed && o(e));
    const c = ["iconify"];
    return i.prefix !== "" && c.push("iconify--" + i.prefix), i.provider !== "" && c.push("iconify--" + i.provider), {
        data: a,
        classes: c
    }
}

function mo(e, t) {
    return e ? po({ ...Le,
        ...e
    }, t) : null
}

function vt(e) {
    let t;

    function n(s, i) {
        return s[0].svg ? yo : go
    }
    let r = n(e),
        o = r(e);
    return {
        c() {
            o.c(), t = Ie()
        },
        l(s) {
            o.l(s), t = Ie()
        },
        m(s, i) {
            o.m(s, i), F(s, t, i)
        },
        p(s, i) {
            r === (r = n(s)) && o ? o.p(s, i) : (o.d(1), o = r(s), o && (o.c(), o.m(t.parentNode, t)))
        },
        d(s) {
            s && y(t), o.d(s)
        }
    }
}

function go(e) {
    let t, n = [e[0].attributes],
        r = {};
    for (let o = 0; o < n.length; o += 1) r = Ee(r, n[o]);
    return {
        c() {
            t = S("span"), this.h()
        },
        l(o) {
            t = C(o, "SPAN", {}), O(t).forEach(y), this.h()
        },
        h() {
            ot(t, r)
        },
        m(o, s) {
            F(o, t, s)
        },
        p(o, s) {
            ot(t, r = Mt(n, [s & 1 && o[0].attributes]))
        },
        d(o) {
            o && y(t)
        }
    }
}

function yo(e) {
    let t, n, r = e[0].body + "",
        o = [e[0].attributes],
        s = {};
    for (let i = 0; i < o.length; i += 1) s = Ee(s, o[i]);
    return {
        c() {
            t = Jt("svg"), n = new Qt(!0), this.h()
        },
        l(i) {
            t = Zt(i, "svg", {});
            var a = O(t);
            n = Yt(a, !0), a.forEach(y), this.h()
        },
        h() {
            n.a = null, rt(t, s)
        },
        m(i, a) {
            F(i, t, a), n.m(r, t)
        },
        p(i, a) {
            a & 1 && r !== (r = i[0].body + "") && n.p(r), rt(t, s = Mt(o, [a & 1 && i[0].attributes]))
        },
        d(i) {
            i && y(t)
        }
    }
}

function bo(e) {
    let t, n = e[0] && vt(e);
    return {
        c() {
            n && n.c(), t = Ie()
        },
        l(r) {
            n && n.l(r), t = Ie()
        },
        m(r, o) {
            n && n.m(r, o), F(r, t, o)
        },
        p(r, [o]) {
            r[0] ? n ? n.p(r, o) : (n = vt(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null)
        },
        i: be,
        o: be,
        d(r) {
            r && y(t), n && n.d(r)
        }
    }
}

function xo(e, t, n) {
    const r = {
        name: "",
        loading: null,
        destroyed: !1
    };
    let o = !1,
        s = 0,
        i;
    const a = l => {
        typeof t.onLoad == "function" && t.onLoad(l), Xt()("load", {
            icon: l
        })
    };

    function c() {
        n(3, s++, s)
    }
    return Wt(() => {
        n(2, o = !0)
    }), qt(() => {
        n(1, r.destroyed = !0, r), r.loading && (r.loading.abort(), n(1, r.loading = null, r))
    }), e.$$set = l => {
        n(6, t = Ee(Ee({}, t), nt(l)))
    }, e.$$.update = () => {
        {
            const l = ho(t.icon, r, o, c, a);
            n(0, i = l ? mo(l.data, t) : null), i && l.classes && n(0, i.attributes.class = (typeof t.class == "string" ? t.class + " " : "") + l.classes.join(" "), i)
        }
    }, t = nt(t), [i, r, o, s]
}
class Oe extends It {
    constructor(t) {
        super(), Et(this, t, xo, bo, Ct, {})
    }
}

function zt(e) {
    const t = e - 1;
    return t * t * t + 1
}

function wo(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = en
} = {}) {
    const o = +getComputedStyle(e).opacity;
    return {
        delay: t,
        duration: n,
        easing: r,
        css: s => `opacity: ${s*o}`
    }
}

function he(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = zt,
    x: o = 0,
    y: s = 0,
    opacity: i = 0
} = {}) {
    const a = getComputedStyle(e),
        c = +a.opacity,
        l = a.transform === "none" ? "" : a.transform,
        u = c * (1 - i),
        [d, _] = st(o),
        [E, k] = st(s);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: (T, v) => `
			transform: ${l} translate(${(1-T)*d}${_}, ${(1-T)*E}${k});
			opacity: ${c-u*v}`
    }
}

function vo(e, {
    delay: t = 0,
    duration: n = 400,
    easing: r = zt,
    axis: o = "y"
} = {}) {
    const s = getComputedStyle(e),
        i = +s.opacity,
        a = o === "y" ? "height" : "width",
        c = parseFloat(s[a]),
        l = o === "y" ? ["top", "bottom"] : ["left", "right"],
        u = l.map(p => `${p[0].toUpperCase()}${p.slice(1)}`),
        d = parseFloat(s[`padding${u[0]}`]),
        _ = parseFloat(s[`padding${u[1]}`]),
        E = parseFloat(s[`margin${u[0]}`]),
        k = parseFloat(s[`margin${u[1]}`]),
        T = parseFloat(s[`border${u[0]}Width`]),
        v = parseFloat(s[`border${u[1]}Width`]);
    return {
        delay: t,
        duration: n,
        easing: r,
        css: p => `overflow: hidden;opacity: ${Math.min(p*20,1)*i};${a}: ${p*c}px;padding-${l[0]}: ${p*d}px;padding-${l[1]}: ${p*_}px;margin-${l[0]}: ${p*E}px;margin-${l[1]}: ${p*k}px;border-${l[0]}-width: ${p*T}px;border-${l[1]}-width: ${p*v}px;`
    }
}

function _t(e, t, n) {
    const r = e.slice();
    return r[17] = t[n], r
}

function kt(e) {
    let t, n = e[17] + "",
        r;
    return {
        c() {
            t = S("option"), r = K(n), this.h()
        },
        l(o) {
            t = C(o, "OPTION", {});
            var s = O(t);
            r = z(s, n), s.forEach(y), this.h()
        },
        h() {
            t.__value = e[17], He(t, t.__value)
        },
        m(o, s) {
            F(o, t, s), m(t, r)
        },
        p: be,
        d(o) {
            o && y(t)
        }
    }
}

function St(e) {
    let t, n, r, o, s;
    const i = [So, ko, _o],
        a = [];

    function c(l, u) {
        return l[5] ? 0 : l[7] ? 1 : l[1] ? 2 : -1
    }
    return ~(n = c(e)) && (r = a[n] = i[n](e)), {
        c() {
            t = S("div"), r && r.c(), this.h()
        },
        l(l) {
            t = C(l, "DIV", {
                class: !0
            });
            var u = O(t);
            r && r.l(u), u.forEach(y), this.h()
        },
        h() {
            w(t, "class", "w-full max-w-[250px] sm:w-[250px] h-auto sm:h-[325px] border border-gray-300 dark:border-[#252525] rounded-3xl bg-white dark:bg-[#111111] flex flex-col items-center justify-between py-6 transition-colors duration-200")
        },
        m(l, u) {
            F(l, t, u), ~n && a[n].m(t, null), s = !0
        },
        p(l, u) {
            let d = n;
            n = c(l), n === d ? ~n && a[n].p(l, u) : (r && (Pt(), se(a[d], 1, 1, () => {
                a[d] = null
            }), Tt()), ~n ? (r = a[n], r ? r.p(l, u) : (r = a[n] = i[n](l), r.c()), ne(r, 1), r.m(t, null)) : r = null)
        },
        i(l) {
            s || (ne(r), l && (o || oe(() => {
                o = ie(t, vo, {
                    delay: 200,
                    duration: 500,
                    axis: "x"
                }), o.start()
            })), s = !0)
        },
        o(l) {
            se(r), s = !1
        },
        d(l) {
            l && y(t), ~n && a[n].d()
        }
    }
}

function _o(e) {
    let t, n = e[1].name + "",
        r, o, s = e[1].sys.country + "",
        i, a, c, l, u = Math.round(e[1].main.temp) + "",
        d, _, E, k, T, v, p, h, P, g, B, x = "Humidity",
        N, V, H = e[1].main.humidity + "",
        D, q, re, J, U, te = "Wind Speed",
        ee, G, Q = e[1].wind.speed + "",
        Z, ae, pe, Y, A, j = e[8] ? "Night" : "Day",
        b, L, M;
    return v = new Oe({
        props: {
            icon: e[4],
            class: "text-gray-800 dark:text-[#ffffff] text-8xl mx-auto block"
        }
    }), {
        c() {
            t = S("h2"), r = K(n), o = K(", "), i = K(s), c = R(), l = S("p"), d = K(u), _ = K("°C"), k = R(), T = S("div"), Te(v.$$.fragment), h = R(), P = S("div"), g = S("div"), B = S("p"), B.textContent = x, N = R(), V = S("p"), D = K(H), q = K("%"), re = R(), J = S("div"), U = S("p"), U.textContent = te, ee = R(), G = S("p"), Z = K(Q), ae = K(" m/s"), Y = R(), A = S("div"), b = K(j), L = K(" time"), this.h()
        },
        l(f) {
            t = C(f, "H2", {
                class: !0
            });
            var I = O(t);
            r = z(I, n), o = z(I, ", "), i = z(I, s), I.forEach(y), c = $(f), l = C(f, "P", {
                class: !0
            });
            var W = O(l);
            d = z(W, u), _ = z(W, "°C"), W.forEach(y), k = $(f), T = C(f, "DIV", {});
            var me = O(T);
            Pe(v.$$.fragment, me), me.forEach(y), h = $(f), P = C(f, "DIV", {
                class: !0
            });
            var le = O(P);
            g = C(le, "DIV", {});
            var X = O(g);
            B = C(X, "P", {
                class: !0,
                "data-svelte-h": !0
            }), fe(B) !== "svelte-jiupp" && (B.textContent = x), N = $(X), V = C(X, "P", {
                class: !0
            });
            var ce = O(V);
            D = z(ce, H), q = z(ce, "%"), ce.forEach(y), X.forEach(y), re = $(le), J = C(le, "DIV", {});
            var ve = O(J);
            U = C(ve, "P", {
                class: !0,
                "data-svelte-h": !0
            }), fe(U) !== "svelte-15am2kt" && (U.textContent = te), ee = $(ve), G = C(ve, "P", {
                class: !0
            });
            var Fe = O(G);
            Z = z(Fe, Q), ae = z(Fe, " m/s"), Fe.forEach(y), ve.forEach(y), le.forEach(y), Y = $(f), A = C(f, "DIV", {
                class: !0
            });
            var Be = O(A);
            b = z(Be, j), L = z(Be, " time"), Be.forEach(y), this.h()
        },
        h() {
            w(t, "class", "text-xl font-semibold mb-2 text-gray-800 dark:text-white"), w(l, "class", "text-4xl font-bold mb-2 text-gray-800 dark:text-white"), w(B, "class", "text-sm text-gray-600 dark:text-white"), w(V, "class", "font-semibold text-gray-800 dark:text-white"), w(U, "class", "text-sm text-gray-600 dark:text-white"), w(G, "class", "font-semibold text-gray-800 dark:text-white"), w(P, "class", "mt-4 grid grid-cols-2 gap-2"), w(A, "class", "mt-2 text-sm text-gray-600 dark:text-gray-400")
        },
        m(f, I) {
            F(f, t, I), m(t, r), m(t, o), m(t, i), F(f, c, I), F(f, l, I), m(l, d), m(l, _), F(f, k, I), F(f, T, I), Me(v, T, null), F(f, h, I), F(f, P, I), m(P, g), m(g, B), m(g, N), m(g, V), m(V, D), m(V, q), m(P, re), m(P, J), m(J, U), m(J, ee), m(J, G), m(G, Z), m(G, ae), F(f, Y, I), F(f, A, I), m(A, b), m(A, L), M = !0
        },
        p(f, I) {
            (!M || I & 2) && n !== (n = f[1].name + "") && ue(r, n), (!M || I & 2) && s !== (s = f[1].sys.country + "") && ue(i, s), (!M || I & 2) && u !== (u = Math.round(f[1].main.temp) + "") && ue(d, u);
            const W = {};
            I & 16 && (W.icon = f[4]), v.$set(W), (!M || I & 2) && H !== (H = f[1].main.humidity + "") && ue(D, H), (!M || I & 2) && Q !== (Q = f[1].wind.speed + "") && ue(Z, Q), (!M || I & 256) && j !== (j = f[8] ? "Night" : "Day") && ue(b, j)
        },
        i(f) {
            M || (f && (a || oe(() => {
                a = ie(t, he, {
                    delay: 500,
                    duration: 200
                }), a.start()
            })), f && (E || oe(() => {
                E = ie(l, he, {
                    delay: 500,
                    duration: 200
                }), E.start()
            })), ne(v.$$.fragment, f), f && (p || oe(() => {
                p = ie(T, he, {
                    delay: 500,
                    duration: 200
                }), p.start()
            })), f && (pe || oe(() => {
                pe = ie(P, he, {
                    delay: 500,
                    duration: 200
                }), pe.start()
            })), M = !0)
        },
        o(f) {
            se(v.$$.fragment, f), M = !1
        },
        d(f) {
            f && (y(t), y(c), y(l), y(k), y(T), y(h), y(P), y(Y), y(A)), Ae(v)
        }
    }
}

function ko(e) {
    let t, n, r, o, s, i, a;
    return n = new Oe({
        props: {
            icon: "material-symbols:error-outline-rounded",
            class: "text-red-500 dark:text-red-200 text-8xl mx-auto"
        }
    }), {
        c() {
            t = S("p"), Te(n.$$.fragment), r = R(), o = K(e[7]), s = K(". Please try again."), this.h()
        },
        l(c) {
            t = C(c, "P", {
                class: !0
            });
            var l = O(t);
            Pe(n.$$.fragment, l), r = $(l), o = z(l, e[7]), s = z(l, ". Please try again."), l.forEach(y), this.h()
        },
        h() {
            w(t, "class", "text-center text-red-500 dark:text-red-200 text-lg mx-auto p-5")
        },
        m(c, l) {
            F(c, t, l), Me(n, t, null), m(t, r), m(t, o), m(t, s), a = !0
        },
        p(c, l) {
            (!a || l & 128) && ue(o, c[7])
        },
        i(c) {
            a || (ne(n.$$.fragment, c), c && (i || oe(() => {
                i = ie(t, he, {
                    duration: 200
                }), i.start()
            })), a = !0)
        },
        o(c) {
            se(n.$$.fragment, c), a = !1
        },
        d(c) {
            c && y(t), Ae(n)
        }
    }
}

function So(e) {
    let t, n = "Loading weather data...",
        r;
    return {
        c() {
            t = S("p"), t.textContent = n, this.h()
        },
        l(o) {
            t = C(o, "P", {
                class: !0,
                "data-svelte-h": !0
            }), fe(t) !== "svelte-x2pp3w" && (t.textContent = n), this.h()
        },
        h() {
            w(t, "class", "text-center text-gray-600 dark:text-gray-400")
        },
        m(o, s) {
            F(o, t, s)
        },
        p: be,
        i(o) {
            o && (r || oe(() => {
                r = ie(t, he, {
                    delay: 200,
                    duration: 200
                }), r.start()
            }))
        },
        o: be,
        d(o) {
            o && y(t)
        }
    }
}

function Co(e) {
    let t, n, r, o = "Weather on mobile is in beta.",
        s, i, a, c, l, u, d, _ = "Select your city and country to view the weather",
        E, k, T = `Your request will be sent to OpenWeather to receive the current
          weather`,
        v, p, h, P, g, B, x, N = "Search",
        V, H, D, q, re, J, U, te, ee, G, Q, Z, ae, pe;
    l = new Oe({
        props: {
            icon: "material-symbols:umbrella-rounded",
            class: "text-gray-800 dark:text-[#ffffff] text-8xl mx-auto block"
        }
    });
    let Y = lt(e[10]),
        A = [];
    for (let b = 0; b < Y.length; b += 1) A[b] = kt(_t(e, Y, b));
    let j = e[6] && St(e);
    return q = new Oe({
        props: {
            icon: e[8] ? "ph:sun-bold" : "ph:moon-bold",
            class: "text-2xl"
        }
    }), document.title = J = $e, {
        c() {
            t = S("div"), n = S("div"), r = S("h1"), r.textContent = o, i = R(), a = S("div"), c = S("div"), Te(l.$$.fragment), u = R(), d = S("h1"), d.textContent = _, E = R(), k = S("h1"), k.textContent = T, v = R(), p = S("form"), h = S("input"), P = R(), g = S("select");
            for (let b = 0; b < A.length; b += 1) A[b].c();
            B = R(), x = S("button"), x.textContent = N, V = R(), j && j.c(), H = R(), D = S("button"), Te(q.$$.fragment), re = R(), U = S("meta"), te = S("meta"), ee = S("meta"), G = S("meta"), Q = S("meta"), this.h()
        },
        l(b) {
            t = C(b, "DIV", {});
            var L = O(t);
            n = C(L, "DIV", {
                class: !0
            });
            var M = O(n);
            r = C(M, "H1", {
                class: !0,
                "data-svelte-h": !0
            }), fe(r) !== "svelte-1vzozur" && (r.textContent = o), i = $(M), a = C(M, "DIV", {
                class: !0
            });
            var f = O(a);
            c = C(f, "DIV", {
                class: !0
            });
            var I = O(c);
            Pe(l.$$.fragment, I), u = $(I), d = C(I, "H1", {
                class: !0,
                "data-svelte-h": !0
            }), fe(d) !== "svelte-1yr1k18" && (d.textContent = _), E = $(I), k = C(I, "H1", {
                class: !0,
                "data-svelte-h": !0
            }), fe(k) !== "svelte-9zi2we" && (k.textContent = T), I.forEach(y), v = $(f), p = C(f, "FORM", {
                class: !0
            });
            var W = O(p);
            h = C(W, "INPUT", {
                type: !0,
                placeholder: !0,
                class: !0
            }), P = $(W), g = C(W, "SELECT", {
                id: !0,
                name: !0,
                class: !0
            });
            var me = O(g);
            for (let ce = 0; ce < A.length; ce += 1) A[ce].l(me);
            me.forEach(y), B = $(W), x = C(W, "BUTTON", {
                type: !0,
                class: !0,
                "data-svelte-h": !0
            }), fe(x) !== "svelte-1tearbe" && (x.textContent = N), W.forEach(y), f.forEach(y), V = $(M), j && j.l(M), H = $(M), D = C(M, "BUTTON", {
                class: !0
            });
            var le = O(D);
            Pe(q.$$.fragment, le), le.forEach(y), M.forEach(y), L.forEach(y), re = $(b);
            const X = tn("svelte-1s420dh", document.head);
            U = C(X, "META", {
                property: !0,
                content: !0
            }), te = C(X, "META", {
                property: !0,
                content: !0
            }), ee = C(X, "META", {
                property: !0,
                content: !0
            }), G = C(X, "META", {
                name: !0,
                content: !0
            }), Q = C(X, "META", {
                name: !0,
                content: !0
            }), X.forEach(y), this.h()
        },
        h() {
            w(r, "class", "sm:hidden bg-gradient-to-t from-[#404040] via-[#ffffff] to-[#ffffff] inline-block text-transparent bg-clip-text text-center font-bold font-title text-2xl sm:text-6xl pl-5 pr-5"), w(d, "class", "text-gray-800 dark:text-[#ffffff] text-[17.5px] font-sans mt-4"), w(k, "class", "text-gray-600 dark:text-[#999999] text-[15px] font-sans mt-2 px-8"), w(c, "class", "text-center"), w(h, "type", "text"), w(h, "placeholder", e[3]), w(h, "class", "flex font-sans px-4 py-2 w-full sm:w-[200px] bg-gray-50 dark:bg-[#070707] border border-gray-300 dark:border-[#252525] rounded-md focus:outline-none placeholder-gray-500 dark:placeholder-[#a2a2a2] text-gray-900 dark:text-white transition-colors duration-200"), w(g, "id", "country"), w(g, "name", "country"), w(g, "class", "flex font-sans px-2 py-3 w-full sm:w-auto bg-gray-50 dark:bg-[#070707] border border-gray-300 dark:border-[#252525] rounded-md focus:outline-none text-gray-900 dark:text-white transition-colors duration-200"), e[0] === void 0 && oe(() => e[14].call(g)), w(x, "type", "submit"), w(x, "class", "px-4 py-2 w-full sm:w-auto font-sans bg-blue-500 dark:bg-white text-white dark:text-black rounded-md hover:bg-blue-600 dark:hover:bg-[#c4c4c4] transition-colors duration-200"), w(p, "class", "flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 pb-5 px-4 sm:px-0 w-full sm:w-auto"), w(a, "class", "w-full max-w-[450px] sm:w-[450px] h-auto sm:h-[325px] border border-gray-300 dark:border-[#252525] rounded-3xl bg-white dark:bg-[#111111] flex flex-col items-center justify-between py-6 transition-colors duration-200"), w(D, "class", "fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-[#252525] text-gray-800 dark:text-white transition-colors duration-200"), w(n, "class", "flex flex-col sm:flex-row min-h-screen w-full items-center justify-center space-y-5 sm:space-y-0 sm:space-x-5 bg-gray-100 dark:bg-[#070707] transition-colors duration-200 p-4"), it(t, "dark", e[8]), w(U, "property", "og:title"), w(U, "content", $e), w(te, "property", "og:description"), w(te, "content", Eo), w(ee, "property", "og:image"), w(ee, "content", To), w(G, "name", "theme-color"), w(G, "content", Po), w(Q, "name", "twitter:card"), w(Q, "content", "summary_large_image")
        },
        m(b, L) {
            F(b, t, L), m(t, n), m(n, r), m(n, i), m(n, a), m(a, c), Me(l, c, null), m(c, u), m(c, d), m(c, E), m(c, k), m(a, v), m(a, p), m(p, h), He(h, e[2]), m(p, P), m(p, g);
            for (let M = 0; M < A.length; M += 1) A[M] && A[M].m(g, null);
            at(g, e[0], !0), m(p, B), m(p, x), m(n, V), j && j.m(n, null), m(n, H), m(n, D), Me(q, D, null), F(b, re, L), m(document.head, U), m(document.head, te), m(document.head, ee), m(document.head, G), m(document.head, Q), Z = !0, ae || (pe = [_e(h, "input", e[13]), _e(g, "change", e[14]), _e(p, "submit", nn(e[11])), _e(D, "click", e[12])], ae = !0)
        },
        p(b, [L]) {
            if ((!Z || L & 8) && w(h, "placeholder", b[3]), L & 4 && h.value !== b[2] && He(h, b[2]), L & 1024) {
                Y = lt(b[10]);
                let f;
                for (f = 0; f < Y.length; f += 1) {
                    const I = _t(b, Y, f);
                    A[f] ? A[f].p(I, L) : (A[f] = kt(I), A[f].c(), A[f].m(g, null))
                }
                for (; f < A.length; f += 1) A[f].d(1);
                A.length = Y.length
            }
            L & 1025 && at(g, b[0]), b[6] ? j ? (j.p(b, L), L & 64 && ne(j, 1)) : (j = St(b), j.c(), ne(j, 1), j.m(n, H)) : j && (Pt(), se(j, 1, 1, () => {
                j = null
            }), Tt());
            const M = {};
            L & 256 && (M.icon = b[8] ? "ph:sun-bold" : "ph:moon-bold"), q.$set(M), (!Z || L & 256) && it(t, "dark", b[8]), (!Z || L & 0) && J !== (J = $e) && (document.title = J)
        },
        i(b) {
            Z || (b && (s || oe(() => {
                s = ie(r, wo, {
                    delay: 100,
                    duration: 250
                }), s.start()
            })), ne(l.$$.fragment, b), ne(j), ne(q.$$.fragment, b), Z = !0)
        },
        o(b) {
            se(l.$$.fragment, b), se(j), se(q.$$.fragment, b), Z = !1
        },
        d(b) {
            b && (y(t), y(re)), Ae(l), on(A, b), j && j.d(), Ae(q), y(U), y(te), y(ee), y(G), y(Q), ae = !1, rn(pe)
        }
    }
}
let Io = "df53165254f089e92287cdfa813d5368";
const $e = "Weather",
    Eo = "A modern weather search made in Svelte + tailwind, utilizing the OpenWeather api.",
    To = "https://files.catbox.moe/4uk5s9.png",
    Po = "#000000";

function Mo(e, t, n) {
    return n >= e && n <= t
}

function Ao(e, t, n) {
    let r;
    const o = ln(!0);
    sn(e, o, g => n(8, r = g));
    let s = null,
        i = "",
        a = "City",
        c = "",
        l = !1,
        u = !1,
        d = null;
    const _ = {
            AE: "Abu Dhabi",
            AG: "Saint John's",
            AR: "Buenos Aires",
            AL: "Tirana",
            AS: "Pago Pago",
            AT: "Vienna",
            AU: "Canberra",
            BB: "Bridgetown",
            BE: "Brussels",
            BG: "Sofia",
            BO: "La Paz",
            BR: "Brasília",
            BS: "Nassau",
            BY: "Minsk",
            BZ: "Belmopan",
            CA: "Ottawa",
            CH: "Bern",
            CL: "Santiago",
            CN: "Beijing",
            CO: "Bogotá",
            CR: "San José",
            CY: "Nicosia",
            CZ: "Prague",
            DE: "Berlin",
            DK: "Copenhagen",
            DM: "Roseau",
            DO: "Santo Domingo",
            DZ: "Algiers",
            EC: "Quito",
            EE: "Tallinn",
            EG: "Cairo",
            ES: "Madrid",
            ET: "Addis Ababa",
            FI: "Helsinki",
            FJ: "Suva",
            FM: "Palikir",
            FR: "Paris",
            GB: "London",
            GD: "St. George's",
            GH: "Accra",
            GR: "Athens",
            GU: "Hagåtña",
            HN: "Tegucigalpa",
            HR: "Zagreb",
            HT: "Port-au-Prince",
            HU: "Budapest",
            ID: "Jakarta",
            IE: "Dublin",
            IL: "Jerusalem",
            IN: "New Delhi",
            IS: "Reykjavik",
            IT: "Rome",
            JM: "Kingston",
            JP: "Tokyo",
            KE: "Nairobi",
            KI: "Tarawa",
            KR: "Seoul",
            KY: "George Town",
            KZ: "Nur-Sultan",
            LC: "Castries",
            LT: "Vilnius",
            LU: "Luxembourg",
            LV: "Riga",
            MA: "Rabat",
            MD: "Chișinău",
            MH: "Majuro",
            MP: "Saipan",
            MT: "Valletta",
            MX: "Mexico City",
            MY: "Kuala Lumpur",
            NG: "Abuja",
            NI: "Managua",
            NL: "Amsterdam",
            NO: "Oslo",
            NR: "Yaren",
            NU: "Alofi",
            NZ: "Wellington",
            PA: "Panama City",
            PE: "Lima",
            PG: "Port Moresby",
            PH: "Manila",
            PL: "Warsaw",
            PN: "Adamstown",
            PR: "San Juan",
            PT: "Lisbon",
            PW: "Ngerulmud",
            PY: "Asunción",
            RO: "Bucharest",
            RU: "Moscow",
            SA: "Riyadh",
            SB: "Honiara",
            SE: "Stockholm",
            SG: "Singapore",
            SI: "Ljubljana",
            SK: "Bratislava",
            SV: "San Salvador",
            TH: "Bangkok",
            TK: "Fakaofo",
            TO: "Nuku'alofa",
            TT: "Port of Spain",
            TV: "Funafuti",
            TZ: "Dodoma",
            UA: "Kyiv",
            UG: "Kampala",
            US: "Washington, D.C.",
            VC: "Kingstown",
            VE: "Caracas",
            VN: "Hanoi",
            VU: "Port Vila",
            WS: "Apia",
            ZA: "Pretoria"
        },
        E = Object.keys(_);
    let k = E[0];
    async function T() {
        n(7, d = null), n(5, l = !0);
        try {
            const g = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${i||a},${k}&units=metric&appid=${Io}`);
            if (!g.ok) throw new Error("Failed to fetch weather data");
            n(6, u = !0), n(1, s = await g.json());
            const B = Math.floor(Date.now() / 1e3) + s.timezone,
                x = Mo(s.sys.sunrise, s.sys.sunset, B);
            o.set(!x)
        } catch (g) {
            n(7, d = g.message)
        } finally {
            v(), n(5, l = !1)
        }
    }

    function v() {
        if (s == null) return;
        const g = s.weather[0].description.toLowerCase();
        console.log(g), g.includes("cloud") ? n(4, c = "material-symbols:cloudy") : g.includes("clear") ? n(4, c = "material-symbols:sunny-rounded") : g.includes("rain") ? n(4, c = "material-symbols:rainy-rounded") : n(4, c = "material-symbols:emoticon-rounded")
    }

    function p() {
        o.set(!r)
    }

    function h() {
        i = this.value, n(2, i)
    }

    function P() {
        k = an(this), n(0, k), n(10, E)
    }
    return e.$$.update = () => {
        e.$$.dirty & 1 && n(3, a = _[k] || "City")
    }, [k, s, i, a, c, l, u, d, r, o, E, T, p, h, P]
}
class Lo extends It {
    constructor(t) {
        super(), Et(this, t, Ao, Co, Ct, {})
    }
}
export {
    Lo as component
};