var L = Object.defineProperty;
var G = (t, e, n) => e in t ? L(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var P = (t, e, n) => G(t, typeof e != "symbol" ? e + "" : e, n);
import {
    n as x,
    A as H,
    i as z,
    B as J,
    C as O,
    D as b,
    E as R,
    F as K,
    G as Q,
    H as M,
    f as U,
    I as V,
    J as q,
    K as T,
    L as W,
    M as N,
    N as X,
    O as Y,
    P as Z,
    Q as tt,
    R as et
} from "./scheduler.CLOslx8b.js";
const B = typeof window < "u";
let nt = B ? () => window.performance.now() : () => Date.now(),
    A = B ? t => requestAnimationFrame(t) : x;
const p = new Set;

function D(t) {
    p.forEach(e => {
        e.c(t) || (p.delete(e), e.f())
    }), p.size !== 0 && A(D)
}

function st(t) {
    let e;
    return p.size === 0 && A(D), {
        promise: new Promise(n => {
            p.add(e = {
                c: t,
                f: n
            })
        }),
        abort() {
            p.delete(e)
        }
    }
}
const E = new Map;
let S = 0;

function it(t) {
    let e = 5381,
        n = t.length;
    for (; n--;) e = (e << 5) - e ^ t.charCodeAt(n);
    return e >>> 0
}

function rt(t, e) {
    const n = {
        stylesheet: J(e),
        rules: {}
    };
    return E.set(t, n), n
}

function at(t, e, n, s, a, o, f, $ = 0) {
    const c = 16.666 / s;
    let i = `{
`;
    for (let h = 0; h <= 1; h += c) {
        const g = e + (n - e) * o(h);
        i += h * 100 + `%{${f(g,1-g)}}
`
    }
    const l = i + `100% {${f(n,1-n)}}
}`,
        r = `__svelte_${it(l)}_${$}`,
        d = H(t),
        {
            stylesheet: u,
            rules: _
        } = E.get(d) || rt(d, t);
    _[r] || (_[r] = !0, u.insertRule(`@keyframes ${r} ${l}`, u.cssRules.length));
    const y = t.style.animation || "";
    return t.style.animation = `${y?`${y}, `:""}${r} ${s}ms linear ${a}ms 1 both`, S += 1, r
}

function j(t, e) {
    const n = (t.style.animation || "").split(", "),
        s = n.filter(e ? o => o.indexOf(e) < 0 : o => o.indexOf("__svelte") === -1),
        a = n.length - s.length;
    a && (t.style.animation = s.join(", "), S -= a, S || ot())
}

function ot() {
    A(() => {
        S || (E.forEach(t => {
            const {
                ownerNode: e
            } = t.stylesheet;
            e && z(e)
        }), E.clear())
    })
}
let w;

function ft() {
    return w || (w = Promise.resolve(), w.then(() => {
        w = null
    })), w
}

function k(t, e, n) {
    t.dispatchEvent(K(`intro${n}`))
}
const v = new Set;
let m;

function yt() {
    m = {
        r: 0,
        c: [],
        p: m
    }
}

function gt() {
    m.r || O(m.c), m = m.p
}

function ut(t, e) {
    t && t.i && (v.delete(t), t.i(e))
}

function pt(t, e, n, s) {
    if (t && t.o) {
        if (v.has(t)) return;
        v.add(t), m.c.push(() => {
            v.delete(t), s && (n && t.d(1), s())
        }), t.o(e)
    } else s && s()
}
const ct = {
    duration: 0
};

function wt(t, e, n) {
    const s = {
        direction: "in"
    };
    let a = e(t, n, s),
        o = !1,
        f, $, c = 0;

    function i() {
        f && j(t, f)
    }

    function l() {
        const {
            delay: d = 0,
            duration: u = 300,
            easing: _ = Q,
            tick: y = x,
            css: h
        } = a || ct;
        h && (f = at(t, 0, 1, u, d, _, h, c++)), y(0, 1);
        const g = nt() + d,
            F = g + u;
        $ && $.abort(), o = !0, R(() => k(t, !0, "start")), $ = st(C => {
            if (o) {
                if (C >= F) return y(1, 0), k(t, !0, "end"), i(), o = !1;
                if (C >= g) {
                    const I = _((C - g) / u);
                    y(I, 1 - I)
                }
            }
            return o
        })
    }
    let r = !1;
    return {
        start() {
            r || (r = !0, j(t), b(a) ? (a = a(s), ft().then(l)) : l())
        },
        invalidate() {
            r = !1
        },
        end() {
            o && (i(), o = !1)
        }
    }
}

function xt(t) {
    t && t.c()
}

function vt(t, e) {
    t && t.l(e)
}

function lt(t, e, n) {
    const {
        fragment: s,
        after_update: a
    } = t.$$;
    s && s.m(e, n), R(() => {
        const o = t.$$.on_mount.map(X).filter(b);
        t.$$.on_destroy ? t.$$.on_destroy.push(...o) : O(o), t.$$.on_mount = []
    }), a.forEach(R)
}

function dt(t, e) {
    const n = t.$$;
    n.fragment !== null && (T(n.after_update), O(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
}

function _t(t, e) {
    t.$$.dirty[0] === -1 && (Y.push(t), Z(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}

function Et(t, e, n, s, a, o, f = null, $ = [-1]) {
    const c = W;
    N(t);
    const i = t.$$ = {
        fragment: null,
        ctx: [],
        props: o,
        update: x,
        not_equal: a,
        bound: M(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (c ? c.$$.context : [])),
        callbacks: M(),
        dirty: $,
        skip_bound: !1,
        root: e.target || c.$$.root
    };
    f && f(i.root);
    let l = !1;
    if (i.ctx = n ? n(t, e.props || {}, (r, d, ...u) => {
            const _ = u.length ? u[0] : d;
            return i.ctx && a(i.ctx[r], i.ctx[r] = _) && (!i.skip_bound && i.bound[r] && i.bound[r](_), l && _t(t, r)), d
        }) : [], i.update(), l = !0, O(i.before_update), i.fragment = s ? s(i.ctx) : !1, e.target) {
        if (e.hydrate) {
            tt();
            const r = U(e.target);
            i.fragment && i.fragment.l(r), r.forEach(z)
        } else i.fragment && i.fragment.c();
        e.intro && ut(t.$$.fragment), lt(t, e.target, e.anchor), et(), V()
    }
    N(c)
}
class St {
    constructor() {
        P(this, "$$");
        P(this, "$$set")
    }
    $destroy() {
        dt(this, 1), this.$destroy = x
    }
    $on(e, n) {
        if (!b(n)) return x;
        const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return s.push(n), () => {
            const a = s.indexOf(n);
            a !== -1 && s.splice(a, 1)
        }
    }
    $set(e) {
        this.$$set && !q(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
    }
}
const $t = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add($t);
export {
    St as S, pt as a, xt as b, gt as c, vt as d, dt as e, wt as f, yt as g, Et as i, lt as m, ut as t
};