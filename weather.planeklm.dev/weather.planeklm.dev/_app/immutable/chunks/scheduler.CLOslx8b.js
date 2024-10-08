var B = Object.defineProperty;
var R = (t, e, n) => e in t ? B(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var f = (t, e, n) => R(t, typeof e != "symbol" ? e + "" : e, n);

function q() {}
const rt = t => t;

function F(t, e) {
    for (const n in e) t[n] = e[n];
    return t
}

function G(t) {
    return t()
}

function ot() {
    return Object.create(null)
}

function I(t) {
    t.forEach(G)
}

function ut(t) {
    return typeof t == "function"
}

function at(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
}

function ft(t) {
    return Object.keys(t).length === 0
}

function z(t, ...e) {
    if (t == null) {
        for (const i of e) i(void 0);
        return q
    }
    const n = t.subscribe(...e);
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function _t(t, e, n) {
    t.$$.on_destroy.push(z(e, n))
}

function ht(t, e, n, i) {
    if (t) {
        const s = H(t, e, n, i);
        return t[0](s)
    }
}

function H(t, e, n, i) {
    return t[1] && i ? F(n.ctx.slice(), t[1](i(e))) : n.ctx
}

function dt(t, e, n, i) {
    if (t[2] && i) {
        const s = t[2](i(n));
        if (e.dirty === void 0) return s;
        if (typeof s == "object") {
            const r = [],
                l = Math.max(e.dirty.length, s.length);
            for (let o = 0; o < l; o += 1) r[o] = e.dirty[o] | s[o];
            return r
        }
        return e.dirty | s
    }
    return e.dirty
}

function mt(t, e, n, i, s, r) {
    if (s) {
        const l = H(e, n, i, r);
        t.p(l, s)
    }
}

function pt(t) {
    if (t.ctx.length > 32) {
        const e = [],
            n = t.ctx.length / 32;
        for (let i = 0; i < n; i++) e[i] = -1;
        return e
    }
    return -1
}

function yt(t) {
    const e = {};
    for (const n in t) n[0] !== "$" && (e[n] = t[n]);
    return e
}

function gt(t) {
    const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"]
}
let p = !1;

function xt() {
    p = !0
}

function bt() {
    p = !1
}

function U(t, e, n, i) {
    for (; t < e;) {
        const s = t + (e - t >> 1);
        n(s) <= i ? t = s + 1 : e = s
    }
    return t
}

function W(t) {
    if (t.hydrate_init) return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
        const c = [];
        for (let u = 0; u < e.length; u++) {
            const a = e[u];
            a.claim_order !== void 0 && c.push(a)
        }
        e = c
    }
    const n = new Int32Array(e.length + 1),
        i = new Int32Array(e.length);
    n[0] = -1;
    let s = 0;
    for (let c = 0; c < e.length; c++) {
        const u = e[c].claim_order,
            a = (s > 0 && e[n[s]].claim_order <= u ? s + 1 : U(1, s, O => e[n[O]].claim_order, u)) - 1;
        i[c] = n[a] + 1;
        const N = a + 1;
        n[N] = c, s = Math.max(N, s)
    }
    const r = [],
        l = [];
    let o = e.length - 1;
    for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
        for (r.push(e[c - 1]); o >= c; o--) l.push(e[o]);
        o--
    }
    for (; o >= 0; o--) l.push(e[o]);
    r.reverse(), l.sort((c, u) => c.claim_order - u.claim_order);
    for (let c = 0, u = 0; c < l.length; c++) {
        for (; u < r.length && l[c].claim_order >= r[u].claim_order;) u++;
        const a = u < r.length ? r[u] : null;
        t.insertBefore(l[c], a)
    }
}

function J(t, e) {
    t.appendChild(e)
}

function K(t) {
    if (!t) return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument
}

function vt(t) {
    const e = w("style");
    return e.textContent = "/* empty */", Q(K(t), e), e.sheet
}

function Q(t, e) {
    return J(t.head || t, e), e.sheet
}

function V(t, e) {
    if (p) {
        for (W(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;) t.actual_end_child = t.actual_end_child.nextSibling;
        e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling
    } else(e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}

function X(t, e, n) {
    t.insertBefore(e, n || null)
}

function Y(t, e, n) {
    p && !n ? V(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}

function v(t) {
    t.parentNode && t.parentNode.removeChild(t)
}

function Et(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}

function w(t) {
    return document.createElement(t)
}

function L(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
}

function T(t) {
    return document.createTextNode(t)
}

function wt() {
    return T(" ")
}

function Tt() {
    return T("")
}

function Nt(t, e, n, i) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
}

function At(t) {
    return function(e) {
        return e.preventDefault(), t.call(this, e)
    }
}

function M(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
const Z = ["width", "height"];

function kt(t, e) {
    const n = Object.getOwnPropertyDescriptors(t.__proto__);
    for (const i in e) e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && Z.indexOf(i) === -1 ? t[i] = e[i] : M(t, i, e[i])
}

function Dt(t, e) {
    for (const n in e) M(t, n, e[n])
}

function Ht(t) {
    return t.dataset.svelteH
}

function Lt(t) {
    return Array.from(t.childNodes)
}

function S(t) {
    t.claim_info === void 0 && (t.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}

function j(t, e, n, i, s = !1) {
    S(t);
    const r = (() => {
        for (let l = t.claim_info.last_index; l < t.length; l++) {
            const o = t[l];
            if (e(o)) {
                const c = n(o);
                return c === void 0 ? t.splice(l, 1) : t[l] = c, s || (t.claim_info.last_index = l), o
            }
        }
        for (let l = t.claim_info.last_index - 1; l >= 0; l--) {
            const o = t[l];
            if (e(o)) {
                const c = n(o);
                return c === void 0 ? t.splice(l, 1) : t[l] = c, s ? c === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = l, o
            }
        }
        return i()
    })();
    return r.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, r
}

function C(t, e, n, i) {
    return j(t, s => s.nodeName === e, s => {
        const r = [];
        for (let l = 0; l < s.attributes.length; l++) {
            const o = s.attributes[l];
            n[o.name] || r.push(o.name)
        }
        r.forEach(l => s.removeAttribute(l))
    }, () => i(e))
}

function Mt(t, e, n) {
    return C(t, e, n, w)
}

function St(t, e, n) {
    return C(t, e, n, L)
}

function $(t, e) {
    return j(t, n => n.nodeType === 3, n => {
        const i = "" + e;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length) return n.splitText(i.length)
        } else n.data = i
    }, () => T(e), !0)
}

function jt(t) {
    return $(t, " ")
}

function A(t, e, n) {
    for (let i = n; i < t.length; i += 1) {
        const s = t[i];
        if (s.nodeType === 8 && s.textContent.trim() === e) return i
    }
    return -1
}

function Ct(t, e) {
    const n = A(t, "HTML_TAG_START", 0),
        i = A(t, "HTML_TAG_END", n + 1);
    if (n === -1 || i === -1) return new g(e);
    S(t);
    const s = t.splice(n, i - n + 1);
    v(s[0]), v(s[s.length - 1]);
    const r = s.slice(1, s.length - 1);
    if (r.length === 0) return new g(e);
    for (const l of r) l.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1;
    return new g(e, r)
}

function Pt(t, e) {
    e = "" + e, t.data !== e && (t.data = e)
}

function Ot(t, e) {
    t.value = e ? ? ""
}

function Bt(t, e, n, i) {
    n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "")
}

function Rt(t, e, n) {
    for (let i = 0; i < t.options.length; i += 1) {
        const s = t.options[i];
        if (s.__value === e) {
            s.selected = !0;
            return
        }
    }(!n || e !== void 0) && (t.selectedIndex = -1)
}

function qt(t) {
    const e = t.querySelector(":checked");
    return e && e.__value
}

function Ft(t, e, n) {
    t.classList.toggle(e, !!n)
}

function tt(t, e, {
    bubbles: n = !1,
    cancelable: i = !1
} = {}) {
    return new CustomEvent(t, {
        detail: e,
        bubbles: n,
        cancelable: i
    })
}

function Gt(t, e) {
    const n = [];
    let i = 0;
    for (const s of e.childNodes)
        if (s.nodeType === 8) {
            const r = s.textContent.trim();
            r === `HEAD_${t}_END` ? (i -= 1, n.push(s)) : r === `HEAD_${t}_START` && (i += 1, n.push(s))
        } else i > 0 && n.push(s);
    return n
}
class et {
    constructor(e = !1) {
        f(this, "is_svg", !1);
        f(this, "e");
        f(this, "n");
        f(this, "t");
        f(this, "a");
        this.is_svg = e, this.e = this.n = null
    }
    c(e) {
        this.h(e)
    }
    m(e, n, i = null) {
        this.e || (this.is_svg ? this.e = L(n.nodeName) : this.e = w(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(e)), this.i(i)
    }
    h(e) {
        this.e.innerHTML = e, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes)
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1) X(this.t, this.n[n], e)
    }
    p(e) {
        this.d(), this.h(e), this.i(this.a)
    }
    d() {
        this.n.forEach(v)
    }
}
class g extends et {
    constructor(n = !1, i) {
        super(n);
        f(this, "l");
        this.e = this.n = null, this.l = i
    }
    c(n) {
        this.l ? this.n = this.l : super.c(n)
    }
    i(n) {
        for (let i = 0; i < this.n.length; i += 1) Y(this.t, this.n[i], n)
    }
}

function It(t, e) {
    return new t(e)
}
let m;

function x(t) {
    m = t
}

function y() {
    if (!m) throw new Error("Function called outside component initialization");
    return m
}

function zt(t) {
    y().$$.on_mount.push(t)
}

function Ut(t) {
    y().$$.after_update.push(t)
}

function Wt(t) {
    y().$$.on_destroy.push(t)
}

function Jt() {
    const t = y();
    return (e, n, {
        cancelable: i = !1
    } = {}) => {
        const s = t.$$.callbacks[e];
        if (s) {
            const r = tt(e, n, {
                cancelable: i
            });
            return s.slice().forEach(l => {
                l.call(t, r)
            }), !r.defaultPrevented
        }
        return !0
    }
}
const d = [],
    k = [];
let h = [];
const D = [],
    P = Promise.resolve();
let E = !1;

function nt() {
    E || (E = !0, P.then(st))
}

function Kt() {
    return nt(), P
}

function it(t) {
    h.push(t)
}
const b = new Set;
let _ = 0;

function st() {
    if (_ !== 0) return;
    const t = m;
    do {
        try {
            for (; _ < d.length;) {
                const e = d[_];
                _++, x(e), lt(e.$$)
            }
        } catch (e) {
            throw d.length = 0, _ = 0, e
        }
        for (x(null), d.length = 0, _ = 0; k.length;) k.pop()();
        for (let e = 0; e < h.length; e += 1) {
            const n = h[e];
            b.has(n) || (b.add(n), n())
        }
        h.length = 0
    } while (d.length);
    for (; D.length;) D.pop()();
    E = !1, b.clear(), x(t)
}

function lt(t) {
    if (t.fragment !== null) {
        t.update(), I(t.before_update);
        const e = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(it)
    }
}

function Qt(t) {
    const e = [],
        n = [];
    h.forEach(i => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach(i => i()), h = e
}
export {
    Jt as $, K as A, vt as B, I as C, ut as D, it as E, tt as F, rt as G, ot as H, st as I, ft as J, Qt as K, m as L, x as M, G as N, d as O, nt as P, xt as Q, bt as R, Wt as S, F as T, yt as U, kt as V, L as W, g as X, St as Y, Ct as Z, Dt as _, dt as a, gt as a0, Ht as a1, Gt as a2, Ft as a3, Ot as a4, Rt as a5, Nt as a6, At as a7, Et as a8, qt as a9, wt as b, ht as c, Mt as d, w as e, Lt as f, pt as g, $ as h, v as i, jt as j, Y as k, V as l, Pt as m, q as n, _t as o, Tt as p, Ut as q, zt as r, at as s, T as t, mt as u, M as v, Bt as w, k as x, It as y, Kt as z
};