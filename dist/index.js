import { jsx as c, jsxs as L, Fragment as J1 } from "react/jsx-runtime";
import { forwardRef as y, useId as W, useRef as Q1, useCallback as l1 } from "react";
function T1(e) {
  var o, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (o = 0; o < n; o++) e[o] && (t = T1(e[o])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function R1() {
  for (var e, o, t = 0, r = "", n = arguments.length; t < n; t++) (e = arguments[t]) && (o = T1(e)) && (r && (r += " "), r += o);
  return r;
}
const q1 = (e, o) => {
  const t = new Array(e.length + o.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e[r];
  for (let r = 0; r < o.length; r++)
    t[e.length + r] = o[r];
  return t;
}, e2 = (e, o) => ({
  classGroupId: e,
  validator: o
}), P1 = (e = /* @__PURE__ */ new Map(), o = null, t) => ({
  nextPart: e,
  validators: o,
  classGroupId: t
}), a1 = "-", H1 = [], t2 = "arbitrary..", o2 = (e) => {
  const o = n2(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return r2(a);
      const s = a.split(a1), i = s[0] === "" && s.length > 1 ? 1 : 0;
      return _1(s, i, o);
    },
    getConflictingClassGroupIds: (a, s) => {
      if (s) {
        const i = r[a], u = t[a];
        return i ? u ? q1(u, i) : i : u || H1;
      }
      return t[a] || H1;
    }
  };
}, _1 = (e, o, t) => {
  if (e.length - o === 0)
    return t.classGroupId;
  const n = e[o], l = t.nextPart.get(n);
  if (l) {
    const u = _1(e, o + 1, l);
    if (u) return u;
  }
  const a = t.validators;
  if (a === null)
    return;
  const s = o === 0 ? e.join(a1) : e.slice(o).join(a1), i = a.length;
  for (let u = 0; u < i; u++) {
    const p = a[u];
    if (p.validator(s))
      return p.classGroupId;
  }
}, r2 = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const o = e.slice(1, -1), t = o.indexOf(":"), r = o.slice(0, t);
  return r ? t2 + r : void 0;
})(), n2 = (e) => {
  const {
    theme: o,
    classGroups: t
  } = e;
  return l2(t, o);
}, l2 = (e, o) => {
  const t = P1();
  for (const r in e) {
    const n = e[r];
    b1(n, t, r, o);
  }
  return t;
}, b1 = (e, o, t, r) => {
  const n = e.length;
  for (let l = 0; l < n; l++) {
    const a = e[l];
    a2(a, o, t, r);
  }
}, a2 = (e, o, t, r) => {
  if (typeof e == "string") {
    s2(e, o, t);
    return;
  }
  if (typeof e == "function") {
    i2(e, o, t, r);
    return;
  }
  C2(e, o, t, r);
}, s2 = (e, o, t) => {
  const r = e === "" ? o : j1(o, e);
  r.classGroupId = t;
}, i2 = (e, o, t, r) => {
  if (c2(e)) {
    b1(e(r), o, t, r);
    return;
  }
  o.validators === null && (o.validators = []), o.validators.push(e2(t, e));
}, C2 = (e, o, t, r) => {
  const n = Object.entries(e), l = n.length;
  for (let a = 0; a < l; a++) {
    const [s, i] = n[a];
    b1(i, j1(o, s), t, r);
  }
}, j1 = (e, o) => {
  let t = e;
  const r = o.split(a1), n = r.length;
  for (let l = 0; l < n; l++) {
    const a = r[l];
    let s = t.nextPart.get(a);
    s || (s = P1(), t.nextPart.set(a, s)), t = s;
  }
  return t;
}, c2 = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, d2 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let o = 0, t = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const n = (l, a) => {
    t[l] = a, o++, o > e && (o = 0, r = t, t = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(l) {
      let a = t[l];
      if (a !== void 0)
        return a;
      if ((a = r[l]) !== void 0)
        return n(l, a), a;
    },
    set(l, a) {
      l in t ? t[l] = a : n(l, a);
    }
  };
}, f1 = "!", N1 = ":", u2 = [], V1 = (e, o, t, r, n) => ({
  modifiers: e,
  hasImportantModifier: o,
  baseClassName: t,
  maybePostfixModifierPosition: r,
  isExternal: n
}), p2 = (e) => {
  const {
    prefix: o,
    experimentalParseClassName: t
  } = e;
  let r = (n) => {
    const l = [];
    let a = 0, s = 0, i = 0, u;
    const p = n.length;
    for (let w = 0; w < p; w++) {
      const M = n[w];
      if (a === 0 && s === 0) {
        if (M === N1) {
          l.push(n.slice(i, w)), i = w + 1;
          continue;
        }
        if (M === "/") {
          u = w;
          continue;
        }
      }
      M === "[" ? a++ : M === "]" ? a-- : M === "(" ? s++ : M === ")" && s--;
    }
    const h = l.length === 0 ? n : n.slice(i);
    let x = h, k = !1;
    h.endsWith(f1) ? (x = h.slice(0, -1), k = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      h.startsWith(f1) && (x = h.slice(1), k = !0)
    );
    const v = u && u > i ? u - i : void 0;
    return V1(l, k, x, v);
  };
  if (o) {
    const n = o + N1, l = r;
    r = (a) => a.startsWith(n) ? l(a.slice(n.length)) : V1(u2, !1, a, void 0, !0);
  }
  if (t) {
    const n = r;
    r = (l) => t({
      className: l,
      parseClassName: n
    });
  }
  return r;
}, m2 = (e) => {
  const o = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((t, r) => {
    o.set(t, 1e6 + r);
  }), (t) => {
    const r = [];
    let n = [];
    for (let l = 0; l < t.length; l++) {
      const a = t[l], s = a[0] === "[", i = o.has(a);
      s || i ? (n.length > 0 && (n.sort(), r.push(...n), n = []), r.push(a)) : n.push(a);
    }
    return n.length > 0 && (n.sort(), r.push(...n)), r;
  };
}, f2 = (e) => ({
  cache: d2(e.cacheSize),
  parseClassName: p2(e),
  sortModifiers: m2(e),
  ...o2(e)
}), b2 = /\s+/, g2 = (e, o) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: n,
    sortModifiers: l
  } = o, a = [], s = e.trim().split(b2);
  let i = "";
  for (let u = s.length - 1; u >= 0; u -= 1) {
    const p = s[u], {
      isExternal: h,
      modifiers: x,
      hasImportantModifier: k,
      baseClassName: v,
      maybePostfixModifierPosition: w
    } = t(p);
    if (h) {
      i = p + (i.length > 0 ? " " + i : i);
      continue;
    }
    let M = !!w, S = r(M ? v.substring(0, w) : v);
    if (!S) {
      if (!M) {
        i = p + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (S = r(v), !S) {
        i = p + (i.length > 0 ? " " + i : i);
        continue;
      }
      M = !1;
    }
    const N = x.length === 0 ? "" : x.length === 1 ? x[0] : l(x).join(":"), E = k ? N + f1 : N, T = E + S;
    if (a.indexOf(T) > -1)
      continue;
    a.push(T);
    const F = n(S, M);
    for (let O = 0; O < F.length; ++O) {
      const Y = F[O];
      a.push(E + Y);
    }
    i = p + (i.length > 0 ? " " + i : i);
  }
  return i;
}, h2 = (...e) => {
  let o = 0, t, r, n = "";
  for (; o < e.length; )
    (t = e[o++]) && (r = E1(t)) && (n && (n += " "), n += r);
  return n;
}, E1 = (e) => {
  if (typeof e == "string")
    return e;
  let o, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (o = E1(e[r])) && (t && (t += " "), t += o);
  return t;
}, x2 = (e, ...o) => {
  let t, r, n, l;
  const a = (i) => {
    const u = o.reduce((p, h) => h(p), e());
    return t = f2(u), r = t.cache.get, n = t.cache.set, l = s, s(i);
  }, s = (i) => {
    const u = r(i);
    if (u)
      return u;
    const p = g2(i, t);
    return n(i, p), p;
  };
  return l = a, (...i) => l(h2(...i));
}, v2 = [], Z = (e) => {
  const o = (t) => t[e] || v2;
  return o.isThemeGetter = !0, o;
}, F1 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, O1 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, w2 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, y2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, L2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, k2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, M2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Z2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, P = (e) => w2.test(e), g = (e) => !!e && !Number.isNaN(Number(e)), _ = (e) => !!e && Number.isInteger(Number(e)), u1 = (e) => e.endsWith("%") && g(e.slice(0, -1)), R = (e) => y2.test(e), G1 = () => !0, H2 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  L2.test(e) && !k2.test(e)
), g1 = () => !1, N2 = (e) => M2.test(e), V2 = (e) => Z2.test(e), z2 = (e) => !C(e) && !d(e), B2 = (e) => j(e, $1, g1), C = (e) => F1.test(e), D = (e) => j(e, U1, H2), z1 = (e) => j(e, j2, g), S2 = (e) => j(e, Y1, G1), A2 = (e) => j(e, K1, g1), B1 = (e) => j(e, D1, g1), I2 = (e) => j(e, W1, V2), r1 = (e) => j(e, X1, N2), d = (e) => O1.test(e), X = (e) => $(e, U1), T2 = (e) => $(e, K1), S1 = (e) => $(e, D1), R2 = (e) => $(e, $1), P2 = (e) => $(e, W1), n1 = (e) => $(e, X1, !0), _2 = (e) => $(e, Y1, !0), j = (e, o, t) => {
  const r = F1.exec(e);
  return r ? r[1] ? o(r[1]) : t(r[2]) : !1;
}, $ = (e, o, t = !1) => {
  const r = O1.exec(e);
  return r ? r[1] ? o(r[1]) : t : !1;
}, D1 = (e) => e === "position" || e === "percentage", W1 = (e) => e === "image" || e === "url", $1 = (e) => e === "length" || e === "size" || e === "bg-size", U1 = (e) => e === "length", j2 = (e) => e === "number", K1 = (e) => e === "family-name", Y1 = (e) => e === "number" || e === "weight", X1 = (e) => e === "shadow", E2 = () => {
  const e = Z("color"), o = Z("font"), t = Z("text"), r = Z("font-weight"), n = Z("tracking"), l = Z("leading"), a = Z("breakpoint"), s = Z("container"), i = Z("spacing"), u = Z("radius"), p = Z("shadow"), h = Z("inset-shadow"), x = Z("text-shadow"), k = Z("drop-shadow"), v = Z("blur"), w = Z("perspective"), M = Z("aspect"), S = Z("ease"), N = Z("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], T = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], F = () => [...T(), d, C], O = () => ["auto", "hidden", "clip", "visible", "scroll"], Y = () => ["auto", "contain", "none"], m = () => [d, C, i], B = () => [P, "full", "auto", ...m()], x1 = () => [_, "none", "subgrid", d, C], v1 = () => ["auto", {
    span: ["full", _, d, C]
  }, _, d, C], Q = () => [_, "auto", d, C], w1 = () => ["auto", "min", "max", "fr", d, C], s1 = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], A = () => ["auto", ...m()], G = () => [P, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...m()], i1 = () => [P, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...m()], C1 = () => [P, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...m()], f = () => [e, d, C], y1 = () => [...T(), S1, B1, {
    position: [d, C]
  }], L1 = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], k1 = () => ["auto", "cover", "contain", R2, B2, {
    size: [d, C]
  }], c1 = () => [u1, X, D], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    d,
    C
  ], z = () => ["", g, X, D], q = () => ["solid", "dashed", "dotted", "double"], M1 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], H = () => [g, u1, S1, B1], Z1 = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    d,
    C
  ], e1 = () => ["none", g, d, C], t1 = () => ["none", g, d, C], d1 = () => [g, d, C], o1 = () => [P, "full", ...m()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [R],
      breakpoint: [R],
      color: [G1],
      container: [R],
      "drop-shadow": [R],
      ease: ["in", "out", "in-out"],
      font: [z2],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [R],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [R],
      shadow: [R],
      spacing: ["px", g],
      text: [R],
      "text-shadow": [R],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", P, C, d, M]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [g, C, d, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": E()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": E()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: F()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Y()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: B()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": B()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": B()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": B(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: B()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": B(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: B()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": B()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": B()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: B()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: B()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: B()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: B()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [_, "auto", d, C]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [P, "full", "auto", s, ...m()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [g, P, "auto", "initial", "none", C]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", g, d, C]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", g, d, C]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [_, "first", "last", "none", d, C]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": x1()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: v1()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": x1()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: v1()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Q()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": w1()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": w1()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: m()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": m()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": m()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...s1(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...U(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...U()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...s1()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": s1()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...U(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...U()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: m()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: m()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: m()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: m()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: m()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: m()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: m()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: m()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: m()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: m()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: m()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: A()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: A()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: A()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: A()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: A()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: A()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: A()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: A()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: A()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: A()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: A()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": m()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": m()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: G()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...i1()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...i1()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...i1()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...C1()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...C1()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...C1()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [s, "screen", ...G()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          s,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...G()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          s,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...G()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...G()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...G()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...G()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, X, D]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, _2, S2]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", u1, C]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [T2, A2, o]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [C]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [n, d, C]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [g, "none", d, z1]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          l,
          ...m()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", d, C]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", d, C]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: f()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: f()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [g, "from-font", "auto", d, D]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: f()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [g, "auto", d, C]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: m()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", d, C]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", d, C]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: y1()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: L1()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: k1()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, _, d, C],
          radial: ["", d, C],
          conic: [_, d, C]
        }, P2, I2]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: f()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: c1()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: c1()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: c1()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: f()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: f()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: f()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: V()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": V()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": V()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": V()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": V()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": V()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": V()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": V()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": V()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": V()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": V()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": V()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": V()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": V()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": V()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: z()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": z()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": z()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": z()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": z()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": z()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": z()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": z()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...q(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...q(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: f()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": f()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": f()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": f()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": f()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": f()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": f()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": f()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": f()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": f()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": f()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: f()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...q(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [g, d, C]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", g, X, D]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: f()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          n1,
          r1
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: f()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, n1, r1]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": f()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: z()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: f()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [g, D]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": f()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": f()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", x, n1, r1]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": f()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [g, d, C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...M1(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": M1()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [g]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": H()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": H()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": f()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": f()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": H()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": H()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": f()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": f()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": H()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": H()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": f()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": f()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": H()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": H()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": f()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": f()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": H()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": H()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": f()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": f()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": H()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": H()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": f()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": f()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": H()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": H()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": f()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": f()
      }],
      "mask-image-radial": [{
        "mask-radial": [d, C]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": H()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": H()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": f()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": f()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": T()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [g]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": H()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": H()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": f()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": f()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: y1()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: L1()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: k1()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", d, C]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          d,
          C
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Z1()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [g, d, C]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [g, d, C]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          k,
          n1,
          r1
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": f()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", g, d, C]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g, d, C]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", g, d, C]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [g, d, C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", g, d, C]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          d,
          C
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Z1()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [g, d, C]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [g, d, C]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", g, d, C]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g, d, C]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", g, d, C]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [g, d, C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [g, d, C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", g, d, C]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": m()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": m()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": m()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", d, C]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [g, "initial", d, C]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", S, d, C]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [g, d, C]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", N, d, C]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [w, d, C]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": F()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: e1()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": e1()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": e1()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": e1()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: t1()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": t1()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": t1()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": t1()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: d1()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": d1()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": d1()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [d, C, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: F()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: o1()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": o1()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": o1()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": o1()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: f()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: f()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", d, C]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": m()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": m()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": m()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": m()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": m()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": m()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": m()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": m()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": m()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": m()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": m()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": m()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": m()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": m()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": m()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": m()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": m()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": m()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": m()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": m()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": m()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": m()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", d, C]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...f()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [g, X, D, z1]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...f()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, F2 = /* @__PURE__ */ x2(E2);
function b(...e) {
  return F2(R1(e));
}
const O2 = {
  album: {
    viewBox: "0 0 24 24",
    content: '<path d="M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM11 17L9.775 15.375C9.675 15.2417 9.5375 15.175 9.3625 15.175C9.1875 15.175 9.05 15.2417 8.95 15.375L7.575 17.225C7.45833 17.3917 7.44583 17.5625 7.5375 17.7375C7.62917 17.9125 7.775 18 7.975 18H16C16.2 18 16.3458 17.9125 16.4375 17.7375C16.5292 17.5625 16.5167 17.3833 16.4 17.2L14.025 14.05C13.925 13.9167 13.7917 13.85 13.625 13.85C13.4583 13.85 13.325 13.9167 13.225 14.05L11 17ZM11 4V10.125C11 10.325 11.0792 10.4708 11.2375 10.5625C11.3958 10.6542 11.5667 10.65 11.75 10.55L12.975 9.825C13.1417 9.725 13.3125 9.675 13.4875 9.675C13.6625 9.675 13.8333 9.725 14 9.825L15.225 10.55C15.4083 10.65 15.5833 10.6542 15.75 10.5625C15.9167 10.4708 16 10.325 16 10.125V4H11Z" fill="currentColor"/>'
  },
  bag: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C14.2091 2 16 3.79086 16 6H18C19.1046 6 20 6.89543 20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V8C4 6.89543 4.89543 6 6 6H8C8 3.79086 9.79086 2 12 2ZM8 8V10C8 10.5523 8.44772 11 9 11C9.55228 11 10 10.5523 10 10V8H8ZM14 8V10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10V8H14ZM12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4Z" fill="currentColor"/>'
  },
  balloon: {
    viewBox: "0 0 24 24",
    content: '<path d="M12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 11.9466 4.63125 14.3831 6.10594 16.2656C7.23844 17.7103 8.59031 18.7031 10.035 19.1803L9.06094 21.4547C9.01208 21.5687 8.99229 21.6931 9.00332 21.8167C9.01436 21.9403 9.05588 22.0592 9.12416 22.1628C9.19245 22.2664 9.28536 22.3514 9.39459 22.4103C9.50381 22.4691 9.62593 22.4999 9.75 22.5H14.25C14.3741 22.4999 14.4962 22.4691 14.6054 22.4103C14.7146 22.3514 14.8076 22.2664 14.8758 22.1628C14.9441 22.0592 14.9856 21.9403 14.9967 21.8167C15.0077 21.6931 14.9879 21.5687 14.9391 21.4547L13.9688 19.1803C15.4125 18.705 16.7653 17.7103 17.8978 16.2656C19.3688 14.3831 20.25 11.9466 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5ZM16.6238 9.73969C16.5828 9.74633 16.5415 9.74978 16.5 9.75C16.3227 9.74977 16.1512 9.68674 16.016 9.5721C15.8808 9.45746 15.7905 9.29861 15.7612 9.12375C15.6226 8.34331 15.2477 7.62426 14.6872 7.06377C14.1267 6.50327 13.4076 6.12836 12.6272 5.98969C12.5293 5.97425 12.4355 5.93957 12.3511 5.88765C12.2667 5.83574 12.1934 5.76762 12.1355 5.68723C12.0776 5.60684 12.0362 5.51577 12.0137 5.41929C11.9912 5.3228 11.988 5.22282 12.0044 5.1251C12.0207 5.02738 12.0563 4.93387 12.109 4.84997C12.1616 4.76606 12.2304 4.69343 12.3114 4.63627C12.3923 4.57911 12.4837 4.53855 12.5804 4.51693C12.6771 4.49531 12.7771 4.49306 12.8747 4.51031C13.962 4.70324 14.9638 5.22544 15.7447 6.00628C16.5255 6.78713 17.0477 7.78895 17.2406 8.87625C17.2569 8.97345 17.2538 9.07291 17.2316 9.16892C17.2093 9.26493 17.1684 9.35562 17.1111 9.43581C17.0538 9.516 16.9813 9.58411 16.8977 9.63625C16.8141 9.68839 16.721 9.72354 16.6238 9.73969Z" fill="currentColor"/>'
  },
  bell: {
    viewBox: "0 0 24 24",
    content: '<path d="M12 22C13.4806 22 14.7733 21.1956 15.4649 20H8.53513C9.22675 21.1956 10.5194 22 12 22Z" fill="currentColor"/> <path d="M12 2C10.4563 2 9.18496 3.16592 9.01848 4.66519C6.64462 5.78438 5 8.19905 5 11V13.0824C5 13.773 4.76497 14.443 4.33358 14.9822L3.21913 16.3753C2.979 16.6755 2.93218 17.0867 3.0987 17.4332C3.26522 17.7797 3.6156 18 4 18H8H16H20C20.3844 18 20.7348 17.7797 20.9013 17.4332C21.0678 17.0867 21.021 16.6755 20.7809 16.3753L19.6664 14.9822C19.235 14.443 19 13.773 19 13.0824V11C19 8.19905 17.3554 5.78439 14.9815 4.66519C14.815 3.16592 13.5437 2 12 2Z" fill="currentColor"/>'
  },
  bone: {
    viewBox: "0 0 24 24",
    content: '<path d="M14.5 2C16.433 2 18 3.567 18 5.5C18 5.68402 17.9854 5.86466 17.958 6.04102C18.1346 6.01357 18.3157 6 18.5 6C20.433 6 22 7.567 22 9.5C22 11.433 20.433 13 18.5 13C17.5949 13 16.7698 12.6566 16.1484 12.0928L12.0928 16.1484C12.6566 16.7698 13 17.5949 13 18.5C13 20.433 11.433 22 9.5 22C7.567 22 6 20.433 6 18.5C6 18.3157 6.01357 18.1346 6.04102 17.958C5.86466 17.9854 5.68402 18 5.5 18C3.567 18 2 16.433 2 14.5C2 12.567 3.567 11 5.5 11C6.40464 11 7.22937 11.3429 7.85059 11.9062L11.9062 7.85059C11.3429 7.22937 11 6.40464 11 5.5C11 3.567 12.567 2 14.5 2Z" fill="currentColor"/>'
  },
  brightness: {
    viewBox: "0 0 24 24",
    content: '<path d="M12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM2 13C1.71667 13 1.47917 12.9042 1.2875 12.7125C1.09583 12.5208 1 12.2833 1 12C1 11.7167 1.09583 11.4792 1.2875 11.2875C1.47917 11.0958 1.71667 11 2 11H4C4.28333 11 4.52083 11.0958 4.7125 11.2875C4.90417 11.4792 5 11.7167 5 12C5 12.2833 4.90417 12.5208 4.7125 12.7125C4.52083 12.9042 4.28333 13 4 13H2ZM20 13C19.7167 13 19.4792 12.9042 19.2875 12.7125C19.0958 12.5208 19 12.2833 19 12C19 11.7167 19.0958 11.4792 19.2875 11.2875C19.4792 11.0958 19.7167 11 20 11H22C22.2833 11 22.5208 11.0958 22.7125 11.2875C22.9042 11.4792 23 11.7167 23 12C23 12.2833 22.9042 12.5208 22.7125 12.7125C22.5208 12.9042 22.2833 13 22 13H20ZM12 5C11.7167 5 11.4792 4.90417 11.2875 4.7125C11.0958 4.52083 11 4.28333 11 4V2C11 1.71667 11.0958 1.47917 11.2875 1.2875C11.4792 1.09583 11.7167 1 12 1C12.2833 1 12.5208 1.09583 12.7125 1.2875C12.9042 1.47917 13 1.71667 13 2V4C13 4.28333 12.9042 4.52083 12.7125 4.7125C12.5208 4.90417 12.2833 5 12 5ZM12 23C11.7167 23 11.4792 22.9042 11.2875 22.7125C11.0958 22.5208 11 22.2833 11 22V20C11 19.7167 11.0958 19.4792 11.2875 19.2875C11.4792 19.0958 11.7167 19 12 19C12.2833 19 12.5208 19.0958 12.7125 19.2875C12.9042 19.4792 13 19.7167 13 20V22C13 22.2833 12.9042 22.5208 12.7125 22.7125C12.5208 22.9042 12.2833 23 12 23ZM5.65 7.05L4.575 6C4.375 5.81667 4.27917 5.58333 4.2875 5.3C4.29583 5.01667 4.39167 4.775 4.575 4.575C4.775 4.375 5.01667 4.275 5.3 4.275C5.58333 4.275 5.81667 4.375 6 4.575L7.05 5.65C7.23333 5.85 7.325 6.08333 7.325 6.35C7.325 6.61667 7.23333 6.85 7.05 7.05C6.86667 7.25 6.6375 7.34583 6.3625 7.3375C6.0875 7.32917 5.85 7.23333 5.65 7.05ZM18 19.425L16.95 18.35C16.7667 18.15 16.675 17.9125 16.675 17.6375C16.675 17.3625 16.7667 17.1333 16.95 16.95C17.1333 16.75 17.3625 16.6542 17.6375 16.6625C17.9125 16.6708 18.15 16.7667 18.35 16.95L19.425 18C19.625 18.1833 19.7208 18.4167 19.7125 18.7C19.7042 18.9833 19.6083 19.225 19.425 19.425C19.225 19.625 18.9833 19.725 18.7 19.725C18.4167 19.725 18.1833 19.625 18 19.425ZM16.95 7.05C16.75 6.86667 16.6542 6.6375 16.6625 6.3625C16.6708 6.0875 16.7667 5.85 16.95 5.65L18 4.575C18.1833 4.375 18.4167 4.27917 18.7 4.2875C18.9833 4.29583 19.225 4.39167 19.425 4.575C19.625 4.775 19.725 5.01667 19.725 5.3C19.725 5.58333 19.625 5.81667 19.425 6L18.35 7.05C18.15 7.23333 17.9167 7.325 17.65 7.325C17.3833 7.325 17.15 7.23333 16.95 7.05ZM4.575 19.425C4.375 19.225 4.275 18.9833 4.275 18.7C4.275 18.4167 4.375 18.1833 4.575 18L5.65 16.95C5.85 16.7667 6.0875 16.675 6.3625 16.675C6.6375 16.675 6.86667 16.7667 7.05 16.95C7.25 17.1333 7.34583 17.3625 7.3375 17.6375C7.32917 17.9125 7.23333 18.15 7.05 18.35L6 19.425C5.81667 19.625 5.58333 19.7208 5.3 19.7125C5.01667 19.7042 4.775 19.6083 4.575 19.425Z" fill="currentColor"/>'
  },
  calendar: {
    viewBox: "0 0 24 24",
    content: '<path d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V3C6 2.71667 6.09583 2.47917 6.2875 2.2875C6.47917 2.09583 6.71667 2 7 2C7.28333 2 7.52083 2.09583 7.7125 2.2875C7.90417 2.47917 8 2.71667 8 3V4H16V3C16 2.71667 16.0958 2.47917 16.2875 2.2875C16.4792 2.09583 16.7167 2 17 2C17.2833 2 17.5208 2.09583 17.7125 2.2875C17.9042 2.47917 18 2.71667 18 3V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20Z" fill="currentColor"/>'
  },
  caret_down: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.53807 10.3087C7.61547 10.1218 7.79778 10 8.00001 10L16 10C16.2022 10 16.3846 10.1218 16.462 10.3087C16.5393 10.4955 16.4966 10.7106 16.3536 10.8536L12.3536 14.8536C12.1583 15.0488 11.8417 15.0488 11.6465 14.8536L7.64646 10.8536C7.50346 10.7106 7.46068 10.4955 7.53807 10.3087Z" fill="currentColor"/>'
  },
  caret_up: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.462 13.6913C16.3846 13.8782 16.2022 14 16 14L8.00001 14C7.79778 14 7.61547 13.8782 7.53807 13.6913C7.46068 13.5045 7.50346 13.2894 7.64646 13.1464L11.6465 9.14645C11.8417 8.95118 12.1583 8.95118 12.3536 9.14645L16.3536 13.1464C16.4966 13.2894 16.5393 13.5045 16.462 13.6913Z" fill="currentColor"/>'
  },
  cart: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H5C5.49765 2 5.91957 2.36593 5.98995 2.85858L6.22444 4.5H21C21.3079 4.5 21.5987 4.64187 21.7882 4.88459C21.9777 5.1273 22.0448 5.44379 21.9701 5.74254L19.9701 13.7425C19.8589 14.1877 19.4589 14.5 19 14.5H7.65301L7.8673 16H18C19.6569 16 21 17.3431 21 19C21 20.6569 19.6569 22 18 22C16.3431 22 15 20.6569 15 19C15 18.6494 15.0602 18.3128 15.1707 18H10.8293C10.9398 18.3128 11 18.6494 11 19C11 20.6569 9.65685 22 8 22C6.34315 22 5 20.6569 5 19C5 18.1304 5.37 17.3472 5.96117 16.7993L4.1327 4H3C2.44772 4 2 3.55228 2 3Z" fill="currentColor"/>'
  },
  change: {
    viewBox: "0 0 24 24",
    content: '<path d="M12 22C9.86667 22 7.94583 21.3917 6.2375 20.175C4.52917 18.9583 3.31667 17.3667 2.6 15.4C2.51667 15.15 2.54167 14.9167 2.675 14.7C2.80833 14.4833 3.00833 14.3333 3.275 14.25C3.54167 14.1667 3.79583 14.1958 4.0375 14.3375C4.27917 14.4792 4.45 14.675 4.55 14.925C5.15 16.4417 6.125 17.6667 7.475 18.6C8.825 19.5333 10.3333 20 12 20C13.4333 20 14.7667 19.6458 16 18.9375C17.2333 18.2292 18.2 17.25 18.9 16H17C16.7167 16 16.4792 15.9042 16.2875 15.7125C16.0958 15.5208 16 15.2833 16 15C16 14.7167 16.0958 14.4792 16.2875 14.2875C16.4792 14.0958 16.7167 14 17 14H21C21.2833 14 21.5208 14.0958 21.7125 14.2875C21.9042 14.4792 22 14.7167 22 15V19C22 19.2833 21.9042 19.5208 21.7125 19.7125C21.5208 19.9042 21.2833 20 21 20C20.7167 20 20.4792 19.9042 20.2875 19.7125C20.0958 19.5208 20 19.2833 20 19V18C19.05 19.2667 17.875 20.25 16.475 20.95C15.075 21.65 13.5833 22 12 22ZM12 4C10.5667 4 9.23333 4.35417 8 5.0625C6.76667 5.77083 5.8 6.75 5.1 8H7C7.28333 8 7.52083 8.09583 7.7125 8.2875C7.90417 8.47917 8 8.71667 8 9C8 9.28333 7.90417 9.52083 7.7125 9.7125C7.52083 9.90417 7.28333 10 7 10H3C2.71667 10 2.47917 9.90417 2.2875 9.7125C2.09583 9.52083 2 9.28333 2 9V5C2 4.71667 2.09583 4.47917 2.2875 4.2875C2.47917 4.09583 2.71667 4 3 4C3.28333 4 3.52083 4.09583 3.7125 4.2875C3.90417 4.47917 4 4.71667 4 5V6C4.95 4.73333 6.125 3.75 7.525 3.05C8.925 2.35 10.4167 2 12 2C14.1333 2 16.0542 2.60833 17.7625 3.825C19.4708 5.04167 20.6833 6.63333 21.4 8.6C21.4833 8.85 21.4583 9.08333 21.325 9.3C21.1917 9.51667 20.9917 9.66667 20.725 9.75C20.4583 9.83333 20.2042 9.80417 19.9625 9.6625C19.7208 9.52083 19.55 9.325 19.45 9.075C18.85 7.55833 17.875 6.33333 16.525 5.4C15.175 4.46667 13.6667 4 12 4Z" fill="currentColor"/>'
  },
  chat: {
    viewBox: "0 0 24 24",
    content: '<path d="M12.0008 20.9084C10.1556 20.9215 8.35333 20.3523 6.8505 19.2816C6.41047 19.805 5.84937 20.2132 5.21586 20.4707C4.54086 20.7621 3.28197 21.1953 3.05697 20.9027C2.83197 20.6102 3.33147 20.2896 3.54748 19.3986C3.87074 18.386 4.06503 17.3367 4.12573 16.2755C3.38175 14.9576 2.99401 13.4687 3.00072 11.9554C2.98856 10.3742 3.40452 8.81916 4.20448 7.45522C4.99869 6.0937 6.13728 4.96521 7.50581 4.18318C8.87434 3.40114 10.4246 2.99311 12.0008 3.00009C13.5772 2.99377 15.1276 3.40257 16.4959 4.18541C17.8643 4.96825 19.0024 6.09753 19.796 7.45972C20.5958 8.82373 21.0117 10.3787 20.9997 11.9599C21.0107 13.5391 20.5948 15.092 19.796 16.4544C19.0017 17.8155 17.8633 18.9437 16.495 19.7255C15.1266 20.5073 13.5767 20.9153 12.0008 20.9084ZM8.62577 10.8348C8.47764 10.8325 8.33054 10.8599 8.19316 10.9153C8.05578 10.9708 7.9309 11.0532 7.82589 11.1577C7.72006 11.2615 7.636 11.3854 7.57861 11.522C7.52123 11.6587 7.49167 11.8054 7.49167 11.9537C7.49167 12.1019 7.52123 12.2486 7.57861 12.3853C7.636 12.522 7.72006 12.6458 7.82589 12.7496C7.9308 12.8543 8.05564 12.937 8.19303 12.9926C8.33041 13.0483 8.47756 13.0758 8.62577 13.0736C8.77325 13.075 8.91942 13.0457 9.05499 12.9876C9.19055 12.9295 9.31256 12.8439 9.41328 12.7361C9.62185 12.5271 9.73898 12.2439 9.73898 11.9486C9.73898 11.6533 9.62185 11.3701 9.41328 11.1611C9.31256 11.0533 9.19055 10.9677 9.05499 10.9096C8.91942 10.8515 8.77325 10.8222 8.62577 10.8236V10.8348ZM12.0008 10.8348C11.8527 10.8325 11.7056 10.8599 11.5682 10.9153C11.4308 10.9708 11.3059 11.0532 11.2009 11.1577C11.0927 11.258 11.0067 11.38 10.9485 11.5156C10.8904 11.6513 10.8614 11.7976 10.8634 11.9452C10.8589 12.17 10.9215 12.391 11.043 12.5802C11.1645 12.7693 11.3396 12.918 11.5459 13.0074C11.7522 13.0967 11.9805 13.1226 12.2015 13.0818C12.4226 13.0411 12.6266 12.9354 12.7875 12.7784C12.9483 12.6213 13.0588 12.4199 13.1049 12.1999C13.151 11.9798 13.1305 11.7511 13.0462 11.5427C12.9618 11.3343 12.8174 11.1557 12.6312 11.0296C12.4451 10.9036 12.2256 10.8358 12.0008 10.8348ZM15.3758 10.8348C15.2265 10.8335 15.0785 10.8627 14.941 10.9208C14.8034 10.9788 14.6792 11.0644 14.5759 11.1723C14.4702 11.2744 14.3861 11.3968 14.3287 11.5321C14.2712 11.6674 14.2416 11.8129 14.2416 11.9599C14.2416 12.1068 14.2712 12.2523 14.3287 12.3876C14.3861 12.5229 14.4702 12.6453 14.5759 12.7474C14.6792 12.8553 14.8034 12.9409 14.941 12.9989C15.0785 13.057 15.2265 13.0862 15.3758 13.0849C15.5233 13.0863 15.6695 13.057 15.805 12.9989C15.9406 12.9408 16.0626 12.8551 16.1633 12.7474C16.3719 12.5384 16.489 12.2551 16.489 11.9599C16.489 11.6646 16.3719 11.3813 16.1633 11.1723C16.0626 11.0646 15.9406 10.9789 15.805 10.9208C15.6695 10.8627 15.5233 10.8334 15.3758 10.8348Z" fill="currentColor"/>'
  },
  chat_bubble: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.92982 4.92864C8.83505 1.02389 15.1663 1.02369 19.0714 4.92864C22.9764 8.83385 22.9764 15.166 19.0714 19.0712C16.0358 22.1067 11.5343 22.7812 7.84583 21.0976L2.75599 22.4618C2.01263 22.6609 1.33252 21.9806 1.53138 21.2372L2.89661 16.1415C1.22031 12.4553 1.89769 7.96076 4.92982 4.92864ZM7.50013 13.9999C6.94784 13.9999 6.50013 14.4476 6.50013 14.9999C6.50016 15.5522 6.94786 15.9999 7.50013 15.9999H15.0001C15.5523 15.9998 16.0001 15.5521 16.0001 14.9999C16.0001 14.4477 15.5523 14 15.0001 13.9999H7.50013ZM7.50013 8.99993C6.94784 8.99993 6.50013 9.44764 6.50013 9.99993C6.50016 10.5522 6.94786 10.9999 7.50013 10.9999H17.0001C17.5523 10.9998 18.0001 10.5521 18.0001 9.99993C18.0001 9.44769 17.5523 9.00001 17.0001 8.99993H7.50013Z" fill="currentColor"/>'
  },
  check: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2071 8.79289C17.5976 9.18342 17.5976 9.81658 17.2071 10.2071L11.2071 16.2071C10.8166 16.5976 10.1834 16.5976 9.79289 16.2071L6.79289 13.2071C6.40237 12.8166 6.40237 12.1834 6.79289 11.7929C7.18342 11.4024 7.81658 11.4024 8.20711 11.7929L10.5 14.0858L15.7929 8.79289C16.1834 8.40237 16.8166 8.40237 17.2071 8.79289Z" fill="currentColor"/>'
  },
  chevron_down: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 9.29289C4.90237 9.68342 4.90237 10.3166 5.29289 10.7071L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L18.7071 10.7071C19.0976 10.3166 19.0976 9.68342 18.7071 9.29289C18.3166 8.90237 17.6834 8.90237 17.2929 9.29289L12 14.5858L6.70711 9.29289C6.31658 8.90237 5.68342 8.90237 5.29289 9.29289Z" fill="currentColor"/>'
  },
  chevron_left: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071C15.0976 18.3166 15.0976 17.6834 14.7071 17.2929L9.41421 12L14.7071 6.70711C15.0976 6.31658 15.0976 5.68342 14.7071 5.29289Z" fill="currentColor"/>'
  },
  chevron_right: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289Z" fill="currentColor"/>'
  },
  chevron_up: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 14.7071C19.0976 14.3166 19.0976 13.6834 18.7071 13.2929L12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L5.29289 13.2929C4.90237 13.6834 4.90237 14.3166 5.29289 14.7071C5.68342 15.0976 6.31658 15.0976 6.70711 14.7071L12 9.41421L17.2929 14.7071C17.6834 15.0976 18.3166 15.0976 18.7071 14.7071Z" fill="currentColor"/>'
  },
  clear: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM16.707 7.29297C16.3165 6.90244 15.6835 6.90244 15.293 7.29297L12 10.5859L8.70703 7.29297C8.31651 6.90244 7.68349 6.90244 7.29297 7.29297C6.90244 7.68349 6.90244 8.31651 7.29297 8.70703L10.5859 12L7.29297 15.293C6.90244 15.6835 6.90244 16.3165 7.29297 16.707C7.68349 17.0975 8.31651 17.0976 8.70703 16.707L12 13.4141L15.293 16.707C15.6835 17.0975 16.3165 17.0976 16.707 16.707C17.0976 16.3165 17.0975 15.6835 16.707 15.293L13.4141 12L16.707 8.70703C17.0976 8.31651 17.0975 7.68349 16.707 7.29297Z" fill="currentColor"/>'
  },
  clip_paw: {
    viewBox: "0 0 24 24",
    content: '<path d="M12 1C12.6333 1 13.2046 1.18314 13.7129 1.5498C14.2211 1.91644 14.5832 2.40009 14.7998 3H19C19.55 3 20.0204 3.19622 20.4121 3.58789C20.8038 3.97956 21 4.45 21 5V19C21 19.55 20.8038 20.0204 20.4121 20.4121C20.0204 20.8038 19.55 21 19 21H5C4.45 21 3.97956 20.8038 3.58789 20.4121C3.19622 20.0204 3 19.55 3 19V5C3 4.45 3.19622 3.97956 3.58789 3.58789C3.97956 3.19622 4.45 3 5 3H9.2002C9.41684 2.40009 9.77888 1.91644 10.2871 1.5498C10.7954 1.18314 11.3667 1 12 1ZM12 10.833C10.25 10.833 8.5 12.4669 8.5 14.3164C8.50015 16.0834 10.2501 16.667 12 16.667C13.7499 16.667 15.4998 16.0834 15.5 14.3164C15.5 12.5492 13.75 10.833 12 10.833ZM7.47949 9.66699C6.75462 9.66699 6.16699 10.2546 6.16699 10.9795C6.16717 11.7042 6.75473 12.292 7.47949 12.292C8.20411 12.2918 8.79182 11.7041 8.79199 10.9795C8.79199 10.2547 8.20422 9.66717 7.47949 9.66699ZM16.5205 9.66699C15.7958 9.66717 15.208 10.2547 15.208 10.9795C15.2082 11.7041 15.7959 12.2918 16.5205 12.292C17.2453 12.292 17.8328 11.7042 17.833 10.9795C17.833 10.2546 17.2454 9.66699 16.5205 9.66699ZM10.2207 7.33301C9.49605 7.33314 8.90838 7.92087 8.9082 8.64551C8.9082 9.3703 9.49594 9.95788 10.2207 9.95801C10.9456 9.95801 11.5332 9.37038 11.5332 8.64551C11.533 7.92078 10.9455 7.33301 10.2207 7.33301ZM13.7793 7.33301C13.0545 7.33301 12.467 7.92078 12.4668 8.64551C12.4668 9.37038 13.0544 9.95801 13.7793 9.95801C14.5041 9.95788 15.0918 9.3703 15.0918 8.64551C15.0916 7.92086 14.504 7.33314 13.7793 7.33301ZM12 2.75C11.7833 2.75 11.6046 2.82122 11.4629 2.96289C11.3212 3.10456 11.25 3.28333 11.25 3.5C11.25 3.71667 11.3212 3.89544 11.4629 4.03711C11.6046 4.17878 11.7833 4.25 12 4.25C12.2167 4.25 12.3954 4.17878 12.5371 4.03711C12.6788 3.89544 12.75 3.71667 12.75 3.5C12.75 3.28333 12.6788 3.10456 12.5371 2.96289C12.3954 2.82122 12.2167 2.75 12 2.75Z" fill="currentColor"/>'
  },
  clock: {
    viewBox: "0 0 24 24",
    content: '<path d="M13 11.6V8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8V11.975C11 12.1083 11.025 12.2375 11.075 12.3625C11.125 12.4875 11.2 12.6 11.3 12.7L14.6 16C14.7833 16.1833 15.0167 16.275 15.3 16.275C15.5833 16.275 15.8167 16.1833 16 16C16.1833 15.8167 16.275 15.5833 16.275 15.3C16.275 15.0167 16.1833 14.7833 16 14.6L13 11.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" fill="currentColor"/>'
  },
  crop: {
    viewBox: "0 0 24 24",
    content: '<path d="M17 22V19H7C6.45 19 5.97917 18.8042 5.5875 18.4125C5.19583 18.0208 5 17.55 5 17V7H2C1.71667 7 1.47917 6.90417 1.2875 6.7125C1.09583 6.52083 1 6.28333 1 6C1 5.71667 1.09583 5.47917 1.2875 5.2875C1.47917 5.09583 1.71667 5 2 5H5V2C5 1.71667 5.09583 1.47917 5.2875 1.2875C5.47917 1.09583 5.71667 1 6 1C6.28333 1 6.52083 1.09583 6.7125 1.2875C6.90417 1.47917 7 1.71667 7 2V17H22C22.2833 17 22.5208 17.0958 22.7125 17.2875C22.9042 17.4792 23 17.7167 23 18C23 18.2833 22.9042 18.5208 22.7125 18.7125C22.5208 18.9042 22.2833 19 22 19H19V22C19 22.2833 18.9042 22.5208 18.7125 22.7125C18.5208 22.9042 18.2833 23 18 23C17.7167 23 17.4792 22.9042 17.2875 22.7125C17.0958 22.5208 17 22.2833 17 22ZM17 15V7H9V5H17C17.55 5 18.0208 5.19583 18.4125 5.5875C18.8042 5.97917 19 6.45 19 7V15H17Z" fill="currentColor"/>'
  },
  crown: {
    viewBox: "0 0 24 24",
    content: '<path d="M7.225 21C6.74167 21 6.31667 20.8458 5.95 20.5375C5.58333 20.2292 5.35833 19.8333 5.275 19.35L3.35 8.975C2.73333 9.09167 2.1875 8.95 1.7125 8.55C1.2375 8.15 1 7.63333 1 7C1 6.45 1.19583 5.97917 1.5875 5.5875C1.97917 5.19583 2.45 5 3 5C3.55 5 4.02083 5.19583 4.4125 5.5875C4.80417 5.97917 5 6.45 5 7C5 7.23333 4.96667 7.45 4.9 7.65C4.83333 7.85 4.73333 8.03333 4.6 8.2C4.96667 8.41667 5.3375 8.59583 5.7125 8.7375C6.0875 8.87917 6.48333 8.95 6.9 8.95C7.63333 8.95 8.3125 8.76667 8.9375 8.4C9.5625 8.03333 10.05 7.53333 10.4 6.9L11.025 5.75C10.7083 5.56667 10.4583 5.325 10.275 5.025C10.0917 4.725 10 4.38333 10 4C10 3.45 10.1958 2.97917 10.5875 2.5875C10.9792 2.19583 11.45 2 12 2C12.55 2 13.0208 2.19583 13.4125 2.5875C13.8042 2.97917 14 3.45 14 4C14 4.38333 13.9083 4.725 13.725 5.025C13.5417 5.325 13.2917 5.56667 12.975 5.75L13.6 6.9C13.95 7.53333 14.4375 8.03333 15.0625 8.4C15.6875 8.76667 16.3667 8.95 17.1 8.95C17.5167 8.95 17.9125 8.88333 18.2875 8.75C18.6625 8.61667 19.0333 8.44167 19.4 8.225C19.2667 8.05833 19.1667 7.87083 19.1 7.6625C19.0333 7.45417 19 7.23333 19 7C19 6.45 19.1958 5.97917 19.5875 5.5875C19.9792 5.19583 20.45 5 21 5C21.55 5 22.0208 5.19583 22.4125 5.5875C22.8042 5.97917 23 6.45 23 7C23 7.63333 22.7625 8.15 22.2875 8.55C21.8125 8.95 21.2667 9.09167 20.65 8.975L18.725 19.35C18.6417 19.8333 18.4167 20.2292 18.05 20.5375C17.6833 20.8458 17.2583 21 16.775 21H7.225Z" fill="currentColor"/>'
  },
  crown_outline: {
    viewBox: "0 0 24 24",
    content: '<path d="M12 5.00146C12.3344 5.00146 12.6466 5.16858 12.8321 5.44678L16.2266 10.5386L20.375 7.22021L20.5039 7.1333C20.8161 6.95477 21.2054 6.95597 21.5196 7.14697C21.8786 7.36548 22.0629 7.78561 21.9805 8.19775L19.9805 18.1978C19.8869 18.6651 19.4766 19.0015 19 19.0015H5.00002C4.52341 19.0015 4.11311 18.6651 4.01956 18.1978L2.01956 8.19775C1.93713 7.78561 2.12146 7.36548 2.48049 7.14697C2.83947 6.92871 3.29694 6.95775 3.62502 7.22021L7.77249 10.5386L11.168 5.44678L11.2432 5.34814C11.4318 5.12963 11.7074 5.00146 12 5.00146Z" fill="currentColor"/>'
  },
  cup: {
    viewBox: "0 0 24 24",
    content: '<path d="M4 20C4 19.4477 4.44772 19 5 19H19C19.5523 19 20 19.4477 20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C4.89543 3 4 3.89543 4 5V13C4 15.2091 5.79086 17 8 17H14C16.2091 17 18 15.2091 18 13V10H20C21.1046 10 22 9.10457 22 8V5C22 3.89543 21.1046 3 20 3H6ZM18 5H20V8H18V5Z" fill="currentColor"/>'
  },
  dogrun: {
    viewBox: "0 0 24 24",
    content: '<path d="M15.6605 4.33203C16.8122 4.34606 18.3315 5.00044 18.7093 6.51172L20.9642 6.88672C21.4054 6.96038 21.7489 7.31833 21.7494 7.76562C21.751 9.36701 21.2554 11.6707 19.2093 12.0117C16.2096 12.5115 13.7093 11.5118 13.7093 13.5117C17.6375 13.9045 19.7141 14.9146 20.6664 15.8145C21.052 16.1789 20.9566 16.7644 20.5814 17.1396C20.1 17.621 19.239 17.7135 18.5804 17.541C17.7434 17.3218 16.5436 17.1344 15.224 17.0508C16.2967 17.2139 17.8924 17.6011 19.1302 18.5146C19.4972 18.7858 19.5716 19.2871 19.3675 19.6953C19.0436 20.3426 18.0496 20.6638 17.3685 20.4189C15.9739 19.9174 13.7936 19.2758 12.2093 19.0117C10.4991 18.7268 8.85662 19.2709 7.75229 19.8486C7.18826 20.1437 6.44138 19.9745 6.15659 19.4053L2.41147 11.9141C2.02773 11.1466 2.35503 10.2141 3.13413 9.85449L7.97104 7.62109C7.99937 7.71752 8.0313 7.8138 8.0687 7.90918C8.45969 8.90557 9.24109 9.61302 10.2142 9.79688C11.1888 9.9808 12.1741 9.60541 12.8988 8.81348C13.3172 8.35629 13.8101 7.89404 14.4574 7.46289C15.4243 6.81883 16.0378 5.56034 15.6605 4.33203Z" fill="currentColor"/> <path d="M10.4273 4.39614L12.6595 3.59265C13.4212 3.31849 14.2668 3.66454 14.6177 4.394C15.0022 5.19303 14.6415 6.13935 13.9036 6.6309C13.1734 7.11724 12.6199 7.63699 12.1609 8.13854C11.1117 9.28512 9.56766 8.991 8.99994 7.54423C8.50391 6.28015 9.1496 4.85604 10.4273 4.39614Z" fill="currentColor"/>'
  },
  external: {
    viewBox: "0 0 24 24",
    content: '<path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H11C11.2833 3 11.5208 3.09583 11.7125 3.2875C11.9042 3.47917 12 3.71667 12 4C12 4.28333 11.9042 4.52083 11.7125 4.7125C11.5208 4.90417 11.2833 5 11 5H5V19H19V13C19 12.7167 19.0958 12.4792 19.2875 12.2875C19.4792 12.0958 19.7167 12 20 12C20.2833 12 20.5208 12.0958 20.7125 12.2875C20.9042 12.4792 21 12.7167 21 13V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5Z" fill="currentColor"/> <path d="M10.707 14.707C10.3165 15.0975 9.68348 15.0975 9.29295 14.707C8.90243 14.3165 8.90243 13.6835 9.29295 13.293L16.293 6.29294L14.7071 4.70711C14.0772 4.07714 14.5233 3 15.4142 3H20C20.5523 3 21 3.44772 21 4V8.58579C21 9.47669 19.9229 9.92286 19.2929 9.29289L17.707 7.70701L10.707 14.707Z" fill="currentColor"/>'
  },
  eye: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.45112 10.7321C4.09854 11.4152 4 11.8672 4 12C4 12.1328 4.09854 12.5848 4.45112 13.2679C4.78355 13.912 5.2905 14.6607 5.97139 15.37C7.32918 16.7843 9.33268 18 12 18C14.6673 18 16.6708 16.7843 18.0286 15.37C18.7095 14.6607 19.2165 13.912 19.5489 13.2679C19.9015 12.5848 20 12.1328 20 12C20 11.8672 19.9015 11.4152 19.5489 10.7321C19.2165 10.088 18.7095 9.33929 18.0286 8.63003C16.6708 7.21567 14.6673 6 12 6C9.33268 6 7.32918 7.21567 5.97139 8.63003C5.2905 9.33929 4.78355 10.088 4.45112 10.7321ZM4.52861 7.24497C6.17082 5.53433 8.66732 4 12 4C15.3327 4 17.8292 5.53433 19.4714 7.24497C20.2905 8.09821 20.9085 9.00574 21.3261 9.81479C21.7235 10.5848 22 11.3828 22 12C22 12.6172 21.7235 13.4152 21.3261 14.1852C20.9085 14.9943 20.2905 15.9018 19.4714 16.755C17.8292 18.4657 15.3327 20 12 20C8.66732 20 6.17082 18.4657 4.52861 16.755C3.7095 15.9018 3.09145 14.9943 2.67388 14.1852C2.27646 13.4152 2 12.6172 2 12C2 11.3828 2.27646 10.5848 2.67388 9.81479C3.09145 9.00574 3.7095 8.09821 4.52861 7.24497Z" fill="currentColor"/> <path d="M12 16C14.2091 16 16 14.2091 16 12C16 11.59 15.9383 11.1945 15.8238 10.8221C15.5102 11.5166 14.8115 12 14 12C12.8954 12 12 11.1046 12 10C12 9.18846 12.4834 8.48982 13.1779 8.17624C12.8055 8.06167 12.41 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>'
  },
  face: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM8.33887 14C7.63498 14.0001 7.16221 14.7123 7.58203 15.2773C8.58435 16.6263 10.1903 17.5 12 17.5C13.8097 17.5 15.4157 16.6263 16.418 15.2773C16.8378 14.7123 16.365 14.0001 15.6611 14H8.33887ZM8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8ZM15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8Z" fill="currentColor"/>'
  },
  heart: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.6436 5.75524C4.73783 4.58266 6.26989 4 7.99942 4C9.46953 4 10.6144 4.4507 11.4567 5.29281C11.6605 5.49654 11.8405 5.7172 12 5.95051C12.1595 5.7172 12.3395 5.49654 12.5433 5.29281C13.3856 4.4507 14.5305 4 16.0006 4C17.7301 4 19.2622 4.58266 20.3564 5.75524C21.4442 6.9209 22 8.5624 22 10.5C22 12.2917 21.1262 14.5018 19.5407 16.5497C17.9374 18.6206 15.5488 20.6047 12.3846 21.9231C12.1385 22.0256 11.8615 22.0256 11.6154 21.9231C8.45116 20.6047 6.06259 18.6206 4.45928 16.5497C2.87385 14.5018 2 12.2917 2 10.5C2 8.5624 2.55584 6.9209 3.6436 5.75524Z" fill="currentColor"/>'
  },
  heart_paw: {
    viewBox: "0 0 24 24",
    content: '<path d="M16.001 4C17.7303 4.00009 19.2623 4.5825 20.3564 5.75488C21.4442 6.92054 22 8.5624 22 10.5C22 12.2916 21.1264 14.502 19.541 16.5498C17.9377 18.6207 15.5489 20.6044 12.3848 21.9229C12.1386 22.0254 11.8614 22.0254 11.6152 21.9229C8.45112 20.6044 6.06227 18.6207 4.45898 16.5498C2.87358 14.502 2 12.2916 2 10.5C2 8.5624 2.55579 6.92054 3.64355 5.75488C4.73769 4.5825 6.26974 4.00009 7.99902 4C9.46913 4 10.6147 4.45086 11.457 5.29297C11.6606 5.49657 11.8406 5.71705 12 5.9502C12.1594 5.71705 12.3393 5.49657 12.543 5.29297C13.3853 4.45086 14.5309 4 16.001 4ZM12 11.833C10.25 11.833 8.5 13.4669 8.5 15.3164C8.50015 17.0834 10.2501 17.667 12 17.667C13.7499 17.667 15.4998 17.0834 15.5 15.3164C15.5 13.5492 13.75 11.833 12 11.833ZM7.47949 10.667C6.75462 10.667 6.16699 11.2546 6.16699 11.9795C6.16717 12.7042 6.75473 13.292 7.47949 13.292C8.20411 13.2918 8.79182 12.7041 8.79199 11.9795C8.79199 11.2547 8.20422 10.6672 7.47949 10.667ZM16.5205 10.667C15.7958 10.6672 15.208 11.2547 15.208 11.9795C15.2082 12.7041 15.7959 13.2918 16.5205 13.292C17.2453 13.292 17.8328 12.7042 17.833 11.9795C17.833 11.2546 17.2454 10.667 16.5205 10.667ZM10.2207 8.33301C9.49605 8.33314 8.90838 8.92087 8.9082 9.64551C8.9082 10.3703 9.49594 10.9579 10.2207 10.958C10.9456 10.958 11.5332 10.3704 11.5332 9.64551C11.533 8.92078 10.9455 8.33301 10.2207 8.33301ZM13.7793 8.33301C13.0545 8.33301 12.467 8.92078 12.4668 9.64551C12.4668 10.3704 13.0544 10.958 13.7793 10.958C14.5041 10.9579 15.0918 10.3703 15.0918 9.64551C15.0916 8.92086 14.504 8.33314 13.7793 8.33301Z" fill="currentColor"/>'
  },
  home: {
    viewBox: "0 0 24 24",
    content: '<path d="M22.2995 11.2245C22.6308 10.7827 22.5411 10.1564 22.0993 9.82511L13.7998 3.60006C12.7331 2.79998 11.2663 2.79998 10.1996 3.60006L1.90011 9.82511C1.45833 10.1564 1.36868 10.7827 1.69991 11.2245C2.03125 11.6663 2.65751 11.7559 3.09933 11.4247L4 10.7492V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10.7496L20.9001 11.4247C21.3419 11.7559 21.9682 11.6663 22.2995 11.2245Z" fill="currentColor"/>'
  },
  home_paw: {
    viewBox: "0 0 24 24",
    content: '<path d="M10.2001 3.59961C11.2667 2.8 12.7332 2.79988 13.7997 3.59961L22.0995 9.8252C22.5412 10.1565 22.6309 10.7828 22.2997 11.2246C21.9684 11.6663 21.3421 11.7559 20.9003 11.4248L19.9999 10.75V18C19.9999 19.1046 19.1045 20 17.9999 20H5.99991C4.89538 19.9999 3.99991 19.1045 3.99991 18V10.749L3.09952 11.4248C2.65774 11.756 2.03146 11.6663 1.7001 11.2246C1.36887 10.7828 1.45852 10.1565 1.9003 9.8252L10.2001 3.59961ZM11.9999 11.833C10.2499 11.8331 8.49991 13.4669 8.49991 15.3164C8.50005 17.0834 10.25 17.667 11.9999 17.667C13.7498 17.667 15.4998 17.0834 15.4999 15.3164C15.4999 13.5492 13.7499 11.833 11.9999 11.833ZM7.4794 10.667C6.75453 10.667 6.1669 11.2546 6.1669 11.9795C6.16707 12.7042 6.75463 13.292 7.4794 13.292C8.20407 13.2919 8.79174 12.7041 8.7919 11.9795C8.7919 11.2547 8.20417 10.6671 7.4794 10.667ZM16.5204 10.667C15.7957 10.6672 15.2079 11.2548 15.2079 11.9795C15.2081 12.7041 15.7958 13.2918 16.5204 13.292C17.2452 13.292 17.8328 12.7042 17.8329 11.9795C17.8329 11.2546 17.2453 10.667 16.5204 10.667ZM10.2206 8.33301C9.49601 8.33319 8.9083 8.9209 8.90811 9.64551C8.90811 10.3703 9.49589 10.9578 10.2206 10.958C10.9455 10.958 11.5331 10.3704 11.5331 9.64551C11.5329 8.92079 10.9454 8.33301 10.2206 8.33301ZM13.7792 8.33301C13.0544 8.33301 12.4669 8.92079 12.4667 9.64551C12.4667 10.3704 13.0543 10.958 13.7792 10.958C14.504 10.9579 15.0917 10.3703 15.0917 9.64551C15.0915 8.92084 14.5039 8.33309 13.7792 8.33301Z" fill="currentColor"/>'
  },
  hospital: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM12 7C11.1716 7 10.5 7.67157 10.5 8.5V10.5H8.5C7.67157 10.5 7 11.1716 7 12C7 12.8284 7.67157 13.5 8.5 13.5H10.5V15.5C10.5 16.3284 11.1716 17 12 17C12.8284 17 13.5 16.3284 13.5 15.5V13.5H15.5C16.3284 13.5 17 12.8284 17 12C17 11.1716 16.3284 10.5 15.5 10.5H13.5V8.5C13.5 7.67157 12.8284 7 12 7Z" fill="currentColor"/>'
  },
  hospital_night: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V14.0947C20.2468 13.9297 19.4696 13.9532 18.668 14.168C17.3362 14.5249 16.3244 15.3021 15.6328 16.5C14.9411 17.698 14.774 18.963 15.1309 20.2949C15.1968 20.5409 15.2774 20.7758 15.3721 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM12 7C11.1716 7 10.5 7.67157 10.5 8.5V10.5H8.5C7.67157 10.5 7 11.1716 7 12C7 12.8284 7.67157 13.5 8.5 13.5H10.5V15.5C10.5 16.3284 11.1716 17 12 17C12.8284 17 13.5 16.3284 13.5 15.5V13.5H15.5C16.3284 13.5 17 12.8284 17 12C17 11.1716 16.3284 10.5 15.5 10.5H13.5V8.5C13.5 7.67157 12.8284 7 12 7Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9972 21.7333C20.9749 21.8552 20.9069 21.9313 20.793 21.9618C19.8923 22.2886 19.0348 22.2073 18.2204 21.7178C17.406 21.2284 16.9295 20.5203 16.791 19.5935C16.6143 18.433 16.9694 17.493 17.8563 16.7734C18.7433 16.0538 19.7203 15.8865 20.7874 16.2717C20.9051 16.3011 20.9735 16.3743 20.9926 16.4912C21.0117 16.6081 20.9777 16.7087 20.8905 16.7931C20.5522 17.0789 20.2814 17.4229 20.0781 17.8252C19.8747 18.2274 19.7741 18.66 19.7762 19.1231C19.7783 19.5862 19.8813 20.0161 20.0852 20.4129C20.2891 20.8097 20.5579 21.1525 20.8915 21.4413C20.9842 21.5141 21.0194 21.6114 20.9972 21.7333Z" fill="currentColor"/>'
  },
  image: {
    viewBox: "0 0 24 24",
    content: '<path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM7 17H17C17.2 17 17.35 16.9083 17.45 16.725C17.55 16.5417 17.5333 16.3667 17.4 16.2L14.65 12.525C14.55 12.3917 14.4167 12.325 14.25 12.325C14.0833 12.325 13.95 12.3917 13.85 12.525L11.25 16L9.4 13.525C9.3 13.3917 9.16667 13.325 9 13.325C8.83333 13.325 8.7 13.3917 8.6 13.525L6.6 16.2C6.46667 16.3667 6.45 16.5417 6.55 16.725C6.65 16.9083 6.8 17 7 17Z" fill="currentColor"/>'
  },
  images: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C20.55 2 21.0204 2.19622 21.4121 2.58789C21.8038 2.97956 22 3.45 22 4V16C22 16.55 21.8038 17.0204 21.4121 17.4121C21.0204 17.8038 20.55 18 20 18H8C7.45 18 6.97956 17.8038 6.58789 17.4121C6.19622 17.0204 6 16.55 6 16V4C6 3.45 6.19622 2.97956 6.58789 2.58789C6.97956 2.19622 7.45 2 8 2H20ZM15.5498 9.8252C15.3832 9.82525 15.2504 9.89211 15.1504 10.0254L13.25 12.5L12.0996 11C11.9997 10.8668 11.8667 10.7999 11.7002 10.7998C11.5335 10.7998 11.3998 10.8667 11.2998 11L9.625 13.2002C9.49183 13.3667 9.47104 13.5414 9.5625 13.7246C9.65417 13.9079 9.80872 14 10.0254 14H17.9746C18.1913 14 18.3458 13.9079 18.4375 13.7246C18.529 13.5414 18.5082 13.3667 18.375 13.2002L15.9502 10.0254C15.8502 9.89206 15.7165 9.8252 15.5498 9.8252Z" fill="currentColor"/> <path d="M4 22C3.45 22 2.97917 21.8042 2.5875 21.4125C2.19583 21.0208 2 20.55 2 20V7C2 6.71667 2.09583 6.47917 2.2875 6.2875C2.47917 6.09583 2.71667 6 3 6C3.28333 6 3.52083 6.09583 3.7125 6.2875C3.90417 6.47917 4 6.71667 4 7V20H17C17.2833 20 17.5208 20.0958 17.7125 20.2875C17.9042 20.4792 18 20.7167 18 21C18 21.2833 17.9042 21.5208 17.7125 21.7125C17.5208 21.9042 17.2833 22 17 22H4Z" fill="currentColor"/>'
  },
  info: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 9.5C10.4477 9.5 10 9.94772 10 10.5C10 11.0523 10.4477 11.5 11 11.5V16H10.5C9.94772 16 9.5 16.4477 9.5 17C9.5 17.5523 9.94772 18 10.5 18H13.5C14.0523 18 14.5 17.5523 14.5 17C14.5 16.4477 14.0523 16 13.5 16H13V10.5C13 9.94772 12.5523 9.5 12 9.5H11ZM11.7002 8.5C12.5286 8.5 13.2002 7.82843 13.2002 7C13.2002 6.17157 12.5286 5.5 11.7002 5.5C10.8718 5.5 10.2002 6.17157 10.2002 7C10.2002 7.82843 10.8718 8.5 11.7002 8.5Z" fill="currentColor"/>'
  },
  list: {
    viewBox: "0 0 24 24",
    content: '<path d="M21 3.5C21.5523 3.5 22 3.94772 22 4.5C22 5.05228 21.5523 5.5 21 5.5H8C7.44772 5.5 7 5.05228 7 4.5C7 3.94772 7.44772 3.5 8 3.5H21Z" fill="currentColor"/> <path d="M21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H21Z" fill="currentColor"/> <path d="M21 18.5C21.5523 18.5 22 18.9477 22 19.5C22 20.0523 21.5523 20.5 21 20.5H8C7.44772 20.5 7 20.0523 7 19.5C7 18.9477 7.44772 18.5 8 18.5H21Z" fill="currentColor"/> <path d="M5 4.5C5 5.32843 4.32843 6 3.5 6C2.67157 6 2 5.32843 2 4.5C2 3.67157 2.67157 3 3.5 3C4.32843 3 5 3.67157 5 4.5Z" fill="currentColor"/> <path d="M5 12C5 12.8284 4.32843 13.5 3.5 13.5C2.67157 13.5 2 12.8284 2 12C2 11.1716 2.67157 10.5 3.5 10.5C4.32843 10.5 5 11.1716 5 12Z" fill="currentColor"/> <path d="M5 19.5C5 20.3284 4.32843 21 3.5 21C2.67157 21 2 20.3284 2 19.5C2 18.6716 2.67157 18 3.5 18C4.32843 18 5 18.6716 5 19.5Z" fill="currentColor"/>'
  },
  list_circle: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM7.5 15C6.67157 15 6 15.6716 6 16.5C6 17.3284 6.67157 18 7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15ZM11 15.5C10.4477 15.5 10 15.9477 10 16.5C10 17.0523 10.4477 17.5 11 17.5H17C17.5523 17.5 18 17.0523 18 16.5C18 15.9477 17.5523 15.5 17 15.5H11ZM7.5 10.5C6.67157 10.5 6 11.1716 6 12C6 12.8284 6.67157 13.5 7.5 13.5C8.32843 13.5 9 12.8284 9 12C9 11.1716 8.32843 10.5 7.5 10.5ZM11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H11ZM7.5 6C6.67157 6 6 6.67157 6 7.5C6 8.32843 6.67157 9 7.5 9C8.32843 9 9 8.32843 9 7.5C9 6.67157 8.32843 6 7.5 6ZM11 6.5C10.4477 6.5 10 6.94772 10 7.5C10 8.05228 10.4477 8.5 11 8.5H17C17.5523 8.5 18 8.05228 18 7.5C18 6.94772 17.5523 6.5 17 6.5H11Z" fill="currentColor"/>'
  },
  mail: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21 4.5C21.5523 4.5 22 4.94772 22 5.5V18.5C22 19.0523 21.5523 19.5 21 19.5H3C2.44772 19.5 2 19.0523 2 18.5V5.5C2 4.94772 2.44772 4.5 3 4.5H21ZM19.7324 6.81934C19.3566 6.41492 18.7239 6.39187 18.3193 6.76758L12 12.6348L5.68066 6.76758C5.27605 6.39188 4.64341 6.41492 4.26758 6.81934C3.89187 7.22394 3.91492 7.85658 4.31934 8.23242L11.3193 14.7324C11.703 15.0887 12.297 15.0887 12.6807 14.7324L19.6807 8.23242C20.0851 7.85659 20.1081 7.22395 19.7324 6.81934Z" fill="currentColor"/>'
  },
  menu: {
    viewBox: "0 0 24 24",
    content: '<path d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z" fill="currentColor"/> <path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" fill="currentColor"/> <path d="M3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="currentColor"/>'
  },
  minus: {
    viewBox: "0 0 24 24",
    content: '<path d="M5.2875 12.7125C5.47917 12.9042 5.71667 13 6 13H18C18.2833 13 18.5208 12.9042 18.7125 12.7125C18.9042 12.5208 19 12.2833 19 12C19 11.7167 18.9042 11.4792 18.7125 11.2875C18.5208 11.0958 18.2833 11 18 11H6C5.71667 11 5.47917 11.0958 5.2875 11.2875C5.09583 11.4792 5 11.7167 5 12C5 12.2833 5.09583 12.5208 5.2875 12.7125Z" fill="currentColor"/>'
  },
  paw: {
    viewBox: "0 0 24 24",
    content: '<path d="M11.2002 6.25C11.2002 7.49264 10.1928 8.5 8.9502 8.5C7.70755 8.5 6.7002 7.49264 6.7002 6.25C6.7002 5.00736 7.70755 4 8.9502 4C10.1928 4 11.2002 5.00736 11.2002 6.25Z" fill="currentColor"/> <path d="M6.5 10.25C6.5 11.4926 5.49264 12.5 4.25 12.5C3.00736 12.5 2 11.4926 2 10.25C2 9.00736 3.00736 8 4.25 8C5.49264 8 6.5 9.00736 6.5 10.25Z" fill="currentColor"/> <path d="M17.2998 6.25C17.2998 7.49264 16.2924 8.5 15.0498 8.5C13.8072 8.5 12.7998 7.49264 12.7998 6.25C12.7998 5.00736 13.8072 4 15.0498 4C16.2924 4 17.2998 5.00736 17.2998 6.25Z" fill="currentColor"/> <path d="M22 10.25C22 11.4926 20.9926 12.5 19.75 12.5C18.5074 12.5 17.5 11.4926 17.5 10.25C17.5 9.00736 18.5074 8 19.75 8C20.9926 8 22 9.00736 22 10.25Z" fill="currentColor"/> <path d="M18 15.9706C18 19 15 20 12 20C9 20 6 19 6 15.9706C6 12.8 9 10 12 10C15 10 18 12.9412 18 15.9706Z" fill="currentColor"/>'
  },
  pen: {
    viewBox: "0 0 24 24",
    content: '<path d="M7.82545 20.4249C7.64221 20.6082 7.42961 20.7496 7.18809 20.8496C6.94642 20.9496 6.69172 20.9995 6.42505 20.9995H3.99989C3.71671 20.9994 3.47885 20.9038 3.28726 20.7122C3.09575 20.5206 3 20.2828 3 19.9996V17.5744C3.00003 17.3078 3.05057 17.0536 3.15054 16.8121C3.25053 16.5705 3.39194 16.358 3.57521 16.1747L13.3684 6.40088L17.6089 10.6414L7.82545 20.4249Z" fill="currentColor"/> <path d="M20.4249 4.99979C20.6249 5.18312 20.7711 5.40027 20.8627 5.65027C20.9543 5.90003 21.0001 6.14973 21.0001 6.3995C21.0001 6.66617 20.9544 6.92087 20.8627 7.16254C20.7711 7.40402 20.6255 7.62489 20.4256 7.82476L19.0231 9.22724L14.784 4.98805L16.2002 3.57452C16.4001 3.3913 16.6209 3.24982 16.8625 3.14985C17.1041 3.04985 17.3588 3 17.6255 3C17.892 3.00004 18.1504 3.04923 18.4003 3.14916C18.6503 3.24916 18.8667 3.40007 19.0501 3.60007L20.4249 4.99979Z" fill="currentColor"/>'
  },
  pill: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.3625 19.3625C18.2708 20.4542 16.9417 21 15.375 21C14.625 21 13.9083 20.8583 13.225 20.575C12.5417 20.2917 11.9333 19.8833 11.4 19.35L4.65 12.6C4.11667 12.0667 3.70833 11.4583 3.425 10.775C3.14167 10.0917 3 9.375 3 8.625C3 7.05833 3.54583 5.72917 4.6375 4.6375C5.72917 3.54583 7.05833 3 8.625 3C9.375 3 10.0917 3.14167 10.775 3.425C11.4583 3.70833 12.0667 4.11667 12.6 4.65L19.35 11.4C19.8833 11.9333 20.2917 12.5417 20.575 13.225C20.8583 13.9083 21 14.625 21 15.375C21 16.9417 20.4542 18.2708 19.3625 19.3625ZM13.975 18.725C14.425 18.9083 14.8917 19 15.375 19C16.375 19 17.2292 18.6458 17.9375 17.9375C18.6458 17.2292 19 16.375 19 15.375C19 14.8917 18.9083 14.425 18.725 13.975C18.5417 13.525 18.2833 13.1333 17.95 12.8L14.5625 9.4375L9.4375 14.5625L12.8 17.95C13.1333 18.2833 13.525 18.5417 13.975 18.725Z" fill="currentColor"/>'
  },
  pin: {
    viewBox: "0 0 24 24",
    content: '<path d="M12 2C16.6944 2 20.5 5.80558 20.5 10.5C20.5 13.9521 18.5423 16.8164 16.6533 18.752C15.6973 19.7316 14.7252 20.5088 13.9531 21.0449C13.5676 21.3126 13.2226 21.5262 12.9463 21.6777C12.9463 21.6777 12.3904 22 12 22C11.6096 22 11.0537 21.6777 11.0537 21.6777C10.7774 21.5262 10.4324 21.3126 10.0469 21.0449C9.27483 20.5088 8.30272 19.7316 7.34668 18.752C5.45772 16.8164 3.5 13.9521 3.5 10.5C3.5 5.80558 7.30558 2 12 2ZM12 9.83301C10.25 9.83301 8.5 11.4669 8.5 13.3164C8.50015 15.0834 10.2501 15.667 12 15.667C13.7499 15.667 15.4998 15.0834 15.5 13.3164C15.5 11.5492 13.75 9.83301 12 9.83301ZM7.47949 8.66699C6.75462 8.66699 6.16699 9.25462 6.16699 9.97949C6.16717 10.7042 6.75473 11.292 7.47949 11.292C8.20411 11.2918 8.79182 10.7041 8.79199 9.97949C8.79199 9.25473 8.20422 8.66717 7.47949 8.66699ZM16.5205 8.66699C15.7958 8.66717 15.208 9.25473 15.208 9.97949C15.2082 10.7041 15.7959 11.2918 16.5205 11.292C17.2453 11.292 17.8328 10.7042 17.833 9.97949C17.833 9.25462 17.2454 8.66699 16.5205 8.66699ZM10.2207 6.33301C9.49605 6.33314 8.90838 6.92087 8.9082 7.64551C8.9082 8.3703 9.49594 8.95788 10.2207 8.95801C10.9456 8.95801 11.5332 8.37038 11.5332 7.64551C11.533 6.92078 10.9455 6.33301 10.2207 6.33301ZM13.7793 6.33301C13.0545 6.33301 12.467 6.92078 12.4668 7.64551C12.4668 8.37038 13.0544 8.95801 13.7793 8.95801C14.5041 8.95788 15.0918 8.3703 15.0918 7.64551C15.0916 6.92086 14.504 6.33314 13.7793 6.33301Z" fill="currentColor"/>'
  },
  pin_wanpass: {
    viewBox: "0 0 24 24",
    content: '<path d="M12 3C16.1421 3 19.5 6.35786 19.5 10.5C19.5 13.5709 17.7502 16.1963 15.9375 18.0537C15.0313 18.9822 14.1093 19.7192 13.3828 20.2236C13.0203 20.4754 12.7055 20.6694 12.4658 20.8008C12.4588 20.8046 12.4512 20.8085 12.4443 20.8125L12.4385 20.8164C12.4292 20.8215 12.4133 20.8301 12.3926 20.8408C12.3504 20.8627 12.2915 20.8916 12.2256 20.9199C12.1579 20.949 12.094 20.9723 12.041 20.9873C12.0231 20.9924 12.0092 20.9941 12 20.9961C11.9908 20.9941 11.9769 20.9924 11.959 20.9873C11.906 20.9723 11.8421 20.949 11.7744 20.9199C11.7085 20.8916 11.6496 20.8627 11.6074 20.8408C11.5867 20.8301 11.5708 20.8215 11.5615 20.8164C11.5585 20.8148 11.5562 20.8134 11.5547 20.8125H11.5557C11.5488 20.8085 11.5412 20.8046 11.5342 20.8008C11.2945 20.6694 10.9797 20.4754 10.6172 20.2236C9.89069 19.7192 8.9687 18.9822 8.0625 18.0537C6.2498 16.1963 4.5 13.5709 4.5 10.5C4.5 6.35786 7.85786 3 12 3Z" fill="currentColor" stroke="url(#paint0_linear_42_2427)" stroke-width="2" stroke-linejoin="round"/> <path d="M9.30414 9.0006C9.83433 9.0006 10.2641 8.57079 10.2641 8.0406C10.2641 7.51041 9.83433 7.0806 9.30414 7.0806C8.77395 7.0806 8.34414 7.51041 8.34414 8.0406C8.34414 8.57079 8.77395 9.0006 9.30414 9.0006Z" fill="currentColor"/> <path d="M14.7027 8.99764C15.2329 8.99764 15.6627 8.56783 15.6627 8.03764C15.6627 7.50744 15.2329 7.07764 14.7027 7.07764C14.1725 7.07764 13.7427 7.50744 13.7427 8.03764C13.7427 8.56783 14.1725 8.99764 14.7027 8.99764Z" fill="currentColor"/> <path d="M15.9086 13.2228L15.4108 12.6776C15.396 12.6628 15.3812 12.6628 15.3634 12.6776C14.6404 13.3147 13.5293 13.2613 12.8745 12.5473C12.5901 12.2391 12.436 11.848 12.4123 11.4421C12.7797 11.1962 13.156 10.6984 13.156 10.2362C13.156 9.59912 12.6404 9.52208 12.0034 9.52208C11.3664 9.52208 10.8508 9.59912 10.8508 10.2362C10.8508 10.6984 11.2271 11.1962 11.5945 11.4421C11.5708 11.848 11.4108 12.2332 11.1323 12.5473C10.8093 12.8999 10.3708 13.1013 9.89673 13.1221C9.42859 13.1458 8.99007 12.9828 8.63747 12.6776C8.62266 12.6628 8.60784 12.6687 8.59007 12.6776L8.09229 13.2228C8.07747 13.2376 8.0834 13.2613 8.09229 13.2702C8.56933 13.6939 9.17377 13.9221 9.81377 13.9221H9.82859C10.3738 13.9221 10.919 13.7443 11.3575 13.4154C11.6182 13.2169 11.8345 12.9769 12.0034 12.7162C12.0893 12.8465 12.1723 12.9621 12.279 13.0776C12.7856 13.6317 13.4849 13.9162 14.1841 13.9162C14.7975 13.9162 15.4138 13.6999 15.9056 13.2643C15.9204 13.2554 15.9204 13.2347 15.9056 13.2258L15.9086 13.2228Z" fill="currentColor"/> <defs> <linearGradient id="paint0_linear_42_2427" x1="3.49613" y1="12.0023" x2="20.5" y2="12.0023" gradientUnits="userSpaceOnUse"> <stop stop-color="#EDB1CB"/> <stop offset="0.13" stop-color="#F6CCAF"/> <stop offset="0.25" stop-color="#F8E292"/> <stop offset="0.38" stop-color="#BFD795"/> <stop offset="0.5" stop-color="#A1CEA9"/> <stop offset="0.63" stop-color="#92CABB"/> <stop offset="0.75" stop-color="#7DC6E8"/> <stop offset="0.87" stop-color="#92B2D9"/> <stop offset="1" stop-color="#A196C3"/> </linearGradient> </defs>'
  },
  plus: {
    viewBox: "0 0 24 24",
    content: '<path d="M11 13H6C5.71667 13 5.47917 12.9042 5.2875 12.7125C5.09583 12.5208 5 12.2833 5 12C5 11.7167 5.09583 11.4792 5.2875 11.2875C5.47917 11.0958 5.71667 11 6 11H11V6C11 5.71667 11.0958 5.47917 11.2875 5.2875C11.4792 5.09583 11.7167 5 12 5C12.2833 5 12.5208 5.09583 12.7125 5.2875C12.9042 5.47917 13 5.71667 13 6V11H18C18.2833 11 18.5208 11.0958 18.7125 11.2875C18.9042 11.4792 19 11.7167 19 12C19 12.2833 18.9042 12.5208 18.7125 12.7125C18.5208 12.9042 18.2833 13 18 13H13V18C13 18.2833 12.9042 18.5208 12.7125 18.7125C12.5208 18.9042 12.2833 19 12 19C11.7167 19 11.4792 18.9042 11.2875 18.7125C11.0958 18.5208 11 18.2833 11 18V13Z" fill="currentColor"/>'
  },
  question: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5C14 10.6046 13.1046 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V13.374C14.7252 12.9299 16 11.3638 16 9.5C16 7.29086 14.2091 5.5 12 5.5C9.79086 5.5 8 7.29086 8 9.5C8 10.0523 8.44772 10.5 9 10.5C9.55228 10.5 10 10.0523 10 9.5ZM12 18.5C12.6904 18.5 13.25 17.9404 13.25 17.25C13.25 16.5596 12.6904 16 12 16C11.3096 16 10.75 16.5596 10.75 17.25C10.75 17.9404 11.3096 18.5 12 18.5Z" fill="currentColor"/>'
  },
  scissors: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 2C8.70914 2 10.5 3.79086 10.5 6C10.5 6.55419 10.3864 7.08165 10.1826 7.56152L12.5 9.87891L18.9395 3.43945C19.5252 2.85367 20.4748 2.85367 21.0605 3.43945C21.6463 4.02524 21.6463 4.97476 21.0605 5.56055L14.6211 12L21.0605 18.4395C21.6463 19.0252 21.6463 19.9748 21.0605 20.5605C20.4748 21.1463 19.5252 21.1463 18.9395 20.5605L12.5 14.1211L10.1826 16.4375C10.3866 16.9176 10.5 17.4455 10.5 18C10.5 20.2091 8.70914 22 6.5 22C4.29086 22 2.5 20.2091 2.5 18C2.5 15.7909 4.29086 14 6.5 14C7.05405 14 7.58174 14.1128 8.06152 14.3164L10.3789 12L8.06152 9.68262C7.58165 9.88635 7.05419 10 6.5 10C4.29086 10 2.5 8.20914 2.5 6C2.5 3.79086 4.29086 2 6.5 2ZM6.5 16C5.39543 16 4.5 16.8954 4.5 18C4.5 19.1046 5.39543 20 6.5 20C7.60457 20 8.5 19.1046 8.5 18C8.5 16.8954 7.60457 16 6.5 16ZM6.5 4C5.39543 4 4.5 4.89543 4.5 6C4.5 7.10457 5.39543 8 6.5 8C7.60457 8 8.5 7.10457 8.5 6C8.5 4.89543 7.60457 4 6.5 4Z" fill="currentColor"/>'
  },
  search: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.0001 10.0015C4.0001 6.68776 6.68639 4.00146 10.0001 4.00146C13.3138 4.00146 16.0001 6.68776 16.0001 10.0015C16.0001 13.3152 13.3138 16.0015 10.0001 16.0015C6.68639 16.0015 4.0001 13.3152 4.0001 10.0015ZM10.0001 2.00146C5.58182 2.00146 2.0001 5.58319 2.0001 10.0015C2.0001 14.4197 5.58182 18.0015 10.0001 18.0015C11.8488 18.0015 13.551 17.3744 14.9057 16.3213L20.2929 21.7086C20.6835 22.0991 21.3166 22.0991 21.7072 21.7086C22.0977 21.318 22.0977 20.6849 21.7072 20.2944L16.3199 14.9071C17.373 13.5524 18.0001 11.8502 18.0001 10.0015C18.0001 5.58319 14.4184 2.00146 10.0001 2.00146Z" fill="currentColor"/>'
  },
  setting: {
    viewBox: "0 0 24 24",
    content: '<path d="M10.825 22C10.375 22 9.98751 21.85 9.66251 21.55C9.33751 21.25 9.14168 20.8833 9.07501 20.45L8.85001 18.8C8.63334 18.7167 8.42918 18.6167 8.23751 18.5C8.04584 18.3833 7.85834 18.2583 7.67501 18.125L6.12501 18.775C5.70834 18.9583 5.29168 18.975 4.87501 18.825C4.45834 18.675 4.13334 18.4083 3.90001 18.025L2.72501 15.975C2.49168 15.5917 2.42501 15.1833 2.52501 14.75C2.62501 14.3167 2.85001 13.9583 3.20001 13.675L4.52501 12.675C4.50834 12.5583 4.50001 12.4458 4.50001 12.3375V11.6625C4.50001 11.5542 4.50834 11.4417 4.52501 11.325L3.20001 10.325C2.85001 10.0417 2.62501 9.68333 2.52501 9.25C2.42501 8.81667 2.49168 8.40833 2.72501 8.025L3.90001 5.975C4.13334 5.59167 4.45834 5.325 4.87501 5.175C5.29168 5.025 5.70834 5.04167 6.12501 5.225L7.67501 5.875C7.85834 5.74167 8.05001 5.61667 8.25001 5.5C8.45001 5.38333 8.65001 5.28333 8.85001 5.2L9.07501 3.55C9.14168 3.11667 9.33751 2.75 9.66251 2.45C9.98751 2.15 10.375 2 10.825 2H13.175C13.625 2 14.0125 2.15 14.3375 2.45C14.6625 2.75 14.8583 3.11667 14.925 3.55L15.15 5.2C15.3667 5.28333 15.5708 5.38333 15.7625 5.5C15.9542 5.61667 16.1417 5.74167 16.325 5.875L17.875 5.225C18.2917 5.04167 18.7083 5.025 19.125 5.175C19.5417 5.325 19.8667 5.59167 20.1 5.975L21.275 8.025C21.5083 8.40833 21.575 8.81667 21.475 9.25C21.375 9.68333 21.15 10.0417 20.8 10.325L19.475 11.325C19.4917 11.4417 19.5 11.5542 19.5 11.6625V12.3375C19.5 12.4458 19.4833 12.5583 19.45 12.675L20.775 13.675C21.125 13.9583 21.35 14.3167 21.45 14.75C21.55 15.1833 21.4833 15.5917 21.25 15.975L20.05 18.025C19.8167 18.4083 19.4917 18.675 19.075 18.825C18.6583 18.975 18.2417 18.9583 17.825 18.775L16.325 18.125C16.1417 18.2583 15.95 18.3833 15.75 18.5C15.55 18.6167 15.35 18.7167 15.15 18.8L14.925 20.45C14.8583 20.8833 14.6625 21.25 14.3375 21.55C14.0125 21.85 13.625 22 13.175 22H10.825ZM12.05 15.5C13.0167 15.5 13.8417 15.1583 14.525 14.475C15.2083 13.7917 15.55 12.9667 15.55 12C15.55 11.0333 15.2083 10.2083 14.525 9.525C13.8417 8.84167 13.0167 8.5 12.05 8.5C11.0667 8.5 10.2375 8.84167 9.56251 9.525C8.88751 10.2083 8.55001 11.0333 8.55001 12C8.55001 12.9667 8.88751 13.7917 9.56251 14.475C10.2375 15.1583 11.0667 15.5 12.05 15.5Z" fill="currentColor"/>'
  },
  shot: {
    viewBox: "0 0 24 24",
    content: '<path d="M3.9 11.1752C3.71667 10.9752 3.625 10.7377 3.625 10.4627C3.625 10.1877 3.71667 9.9502 3.9 9.7502L6.7 6.9502L5.625 5.8752L5.325 6.1752C5.125 6.3752 4.8875 6.4752 4.6125 6.4752C4.3375 6.4752 4.1 6.3752 3.9 6.1752C3.71667 5.9752 3.625 5.7377 3.625 5.4627C3.625 5.1877 3.71667 4.95853 3.9 4.7752L5.9 2.7752C6.1 2.5752 6.3375 2.4752 6.6125 2.4752C6.8875 2.4752 7.125 2.5752 7.325 2.7752C7.525 2.95853 7.625 3.19186 7.625 3.4752C7.625 3.75853 7.525 3.99186 7.325 4.1752L7.025 4.4752L8.1 5.5502L10.9 2.7502C11.1 2.5502 11.3375 2.4502 11.6125 2.4502C11.8875 2.4502 12.125 2.5502 12.325 2.7502C12.525 2.9502 12.625 3.1877 12.625 3.4627C12.625 3.7377 12.525 3.9752 12.325 4.1752L11.65 4.8252L13.2 6.3752L10.375 9.1752C10.1917 9.3752 10.1 9.6127 10.1 9.8877C10.1 10.1627 10.1917 10.4002 10.375 10.6002C10.575 10.8002 10.8125 10.9002 11.0875 10.9002C11.3625 10.9002 11.6 10.8002 11.8 10.6002L14.6 7.7752L16.125 9.2752L13.3 12.1002C13.1 12.3002 13 12.5377 13 12.8127C13 13.0877 13.1 13.3252 13.3 13.5252C13.4833 13.7085 13.7125 13.796 13.9875 13.7877C14.2625 13.7794 14.5 13.6835 14.7 13.5002L17.5 10.6752L19.025 12.2002C19.4083 12.5835 19.6 13.0544 19.6 13.6127C19.6 14.171 19.4083 14.6419 19.025 15.0252L18.325 15.7502L22.2 19.6002C22.3667 19.7669 22.4083 19.9502 22.325 20.1502C22.2417 20.3502 22.0833 20.4502 21.85 20.4502H20.825C20.625 20.4502 20.4292 20.4085 20.2375 20.3252C20.0458 20.2419 19.8833 20.1335 19.75 20.0002L16.9 17.1502L16.2 17.8752C15.8167 18.2585 15.3458 18.4502 14.7875 18.4502C14.2292 18.4502 13.7583 18.2585 13.375 17.8752L6 10.5002L5.325 11.1752C5.125 11.3585 4.8875 11.4502 4.6125 11.4502C4.3375 11.4502 4.1 11.3585 3.9 11.1752Z" fill="currentColor"/>'
  },
  sort: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.65356 13.7315C8.7116 13.5914 8.84834 13.5 9.00001 13.5L15 13.5C15.1517 13.5 15.2884 13.5914 15.3465 13.7315C15.4045 13.8716 15.3724 14.0329 15.2652 14.1402L12.2652 17.1402C12.1187 17.2866 11.8813 17.2866 11.7348 17.1402L8.73485 14.1402C8.6276 14.0329 8.59551 13.8716 8.65356 13.7315Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3465 10.2685C15.2884 10.4086 15.1517 10.5 15 10.5L9.00001 10.5C8.84834 10.5 8.7116 10.4086 8.65356 10.2685C8.59551 10.1284 8.6276 9.96708 8.73485 9.85983L11.7348 6.85984C11.8813 6.71339 12.1187 6.71339 12.2652 6.85984L15.2652 9.85984C15.3724 9.96708 15.4045 10.1284 15.3465 10.2685Z" fill="currentColor"/>'
  },
  star: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9998 2C12.3798 2 12.7275 2.21517 12.8963 2.55566L15.5984 8.01074L21.6434 8.88574C22.0204 8.94043 22.3335 9.20496 22.451 9.56738C22.5684 9.92983 22.4694 10.3274 22.1961 10.5928L17.824 14.8369L18.8563 20.8301C18.9208 21.205 18.7673 21.5846 18.4598 21.8086C18.1522 22.0325 17.744 22.0622 17.407 21.8857L11.9998 19.0537L6.59259 21.8857C6.25559 22.0622 5.84739 22.0325 5.53985 21.8086C5.23229 21.5846 5.07881 21.205 5.14337 20.8301L6.17559 14.8369L1.80352 10.5928C1.53018 10.3274 1.43127 9.92983 1.54864 9.56738C1.66612 9.20496 1.97923 8.94043 2.35626 8.88574L8.40118 8.01074L11.1033 2.55566C11.2721 2.21517 11.6198 2 11.9998 2Z" fill="currentColor"/>'
  },
  star_paw: {
    viewBox: "0 0 24 24",
    content: '<path d="M12.0002 2C12.3801 2.00014 12.728 2.21528 12.8967 2.55566L15.5988 8.01074L21.6437 8.88574C22.0206 8.94055 22.3339 9.20508 22.4514 9.56738C22.5686 9.92971 22.4696 10.3274 22.1965 10.5928L17.8244 14.8369L18.8566 20.8301C18.9211 21.2049 18.7675 21.5846 18.4601 21.8086C18.1527 22.0324 17.7444 22.0621 17.4074 21.8857L12.0002 19.0537L6.59296 21.8857C6.25606 22.0622 5.84774 22.0323 5.54023 21.8086C5.23267 21.5846 5.07918 21.205 5.14374 20.8301L6.17597 14.8369L1.8039 10.5928C1.53056 10.3274 1.43165 9.92983 1.54902 9.56738C1.66653 9.20502 1.97965 8.94043 2.35663 8.88574L8.40156 8.01074L11.1037 2.55566C11.2725 2.21525 11.6202 2 12.0002 2ZM12.0002 12C10.5002 12 9.00019 13.4001 9.00019 14.9854C9.00023 16.5 10.5002 17 12.0002 17C13.5001 17 15.0002 16.5 15.0002 14.9854C15.0002 13.4707 13.5001 12.0001 12.0002 12ZM8.12519 11C7.50387 11 7.00019 11.5037 7.00019 12.125C7.00019 12.7463 7.50387 13.25 8.12519 13.25C8.74643 13.2499 9.25019 12.7463 9.25019 12.125C9.25019 11.5037 8.74643 11.0001 8.12519 11ZM15.8752 11C15.2539 11 14.7502 11.5037 14.7502 12.125C14.7502 12.7463 15.2539 13.25 15.8752 13.25C16.4964 13.2499 17.0002 12.7463 17.0002 12.125C17.0002 11.5037 16.4964 11.0001 15.8752 11ZM10.4748 9C9.85362 9.00016 9.3498 9.50378 9.3498 10.125C9.3498 10.7462 9.85362 11.2498 10.4748 11.25C11.0961 11.25 11.5998 10.7463 11.5998 10.125C11.5998 9.50368 11.0961 9 10.4748 9ZM13.5246 9C12.9034 9.00016 12.3996 9.50378 12.3996 10.125C12.3996 10.7462 12.9034 11.2498 13.5246 11.25C14.1459 11.25 14.6496 10.7463 14.6496 10.125C14.6496 9.50368 14.1459 9 13.5246 9Z" fill="currentColor"/>'
  },
  success: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.2071 8.79289C17.5976 9.18342 17.5976 9.81658 17.2071 10.2071L11.2071 16.2071C10.8166 16.5976 10.1834 16.5976 9.79289 16.2071L6.79289 13.2071C6.40237 12.8166 6.40237 12.1834 6.79289 11.7929C7.18342 11.4024 7.81658 11.4024 8.20711 11.7929L10.5 14.0858L15.7929 8.79289C16.1834 8.40237 16.8166 8.40237 17.2071 8.79289Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2071 8.79289C17.5976 9.18342 17.5976 9.81658 17.2071 10.2071L11.2071 16.2071C10.8166 16.5976 10.1834 16.5976 9.79289 16.2071L6.79289 13.2071C6.40237 12.8166 6.40237 12.1834 6.79289 11.7929C7.18342 11.4024 7.81658 11.4024 8.20711 11.7929L10.5 14.0858L15.7929 8.79289C16.1834 8.40237 16.8166 8.40237 17.2071 8.79289Z" fill="currentColor"/>'
  },
  tag: {
    viewBox: "0 0 24 24",
    content: '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.07531 3.24897C3.65083 3.31807 3.31807 3.65083 3.24897 4.07531L2.01154 11.6767C1.96213 11.9802 2.05511 12.2896 2.26365 12.5156L10.7207 21.6797C10.9052 21.8797 11.1634 21.9958 11.4355 22.0013C11.7076 22.0067 11.9702 21.901 12.1626 21.7086L21.7086 12.1626C21.901 11.9702 22.0067 11.7076 22.0013 11.4355C21.9958 11.1634 21.8797 10.9052 21.6797 10.7207L12.5156 2.26365C12.2896 2.05511 11.9802 1.96213 11.6767 2.01154L4.07531 3.24897ZM9.18573 8.87376C9.77152 8.28798 9.77152 7.33823 9.18573 6.75244C8.59995 6.16666 7.6502 6.16666 7.06441 6.75244C6.47863 7.33823 6.47863 8.28798 7.06441 8.87376C7.6502 9.45955 8.59995 9.45955 9.18573 8.87376Z" fill="currentColor"/>'
  },
  user: {
    viewBox: "0 0 24 24",
    content: '<path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" fill="currentColor"/> <path d="M20 18C20 20.2091 16.4183 21 12 21C7.58172 21 4 20.2091 4 18C4 15.7909 7.58172 13 12 13C16.4183 13 20 15.7909 20 18Z" fill="currentColor"/>'
  },
  walk: {
    viewBox: "0 0 24 24",
    content: '<g clip-path="url(#clip0_34_2579)"> <path d="M16.6142 4.35759C16.4973 5.02046 15.8652 5.46307 15.2023 5.34619C14.5394 5.22931 14.0968 4.5972 14.2137 3.93432C14.3306 3.27145 14.9627 2.82884 15.6256 2.94572C16.2885 3.06261 16.7311 3.69472 16.6142 4.35759Z" fill="currentColor"/> <path d="M13.7307 6.04924C13.6138 6.71212 12.9817 7.15473 12.3188 7.03785C11.6559 6.92096 11.2133 6.28885 11.3302 5.62598C11.4471 4.96311 12.0792 4.52049 12.7421 4.63738C13.405 4.75426 13.8476 5.38637 13.7307 6.04924Z" fill="currentColor"/> <path d="M19.8679 4.93132C19.7511 5.59419 19.1189 6.0368 18.4561 5.91992C17.7932 5.80304 17.3506 5.17092 17.4675 4.50805C17.5844 3.84518 18.2165 3.40257 18.8793 3.51945C19.5422 3.63633 19.9848 4.26845 19.8679 4.93132Z" fill="currentColor"/> <path d="M21.999 7.50717C21.8821 8.17004 21.25 8.61265 20.5871 8.49577C19.9242 8.37888 19.4816 7.74677 19.5985 7.0839C19.7154 6.42103 20.3475 5.97842 21.0104 6.0953C21.6732 6.21218 22.1159 6.84429 21.999 7.50717Z" fill="currentColor"/> <path d="M19.3271 10.1825C19.0422 11.7985 17.3478 12.0498 15.7475 11.7676C14.1472 11.4854 12.6409 10.6698 12.9259 9.05379C13.2241 7.36248 15.0878 6.15103 16.6881 6.43321C18.2884 6.71539 19.6121 8.5665 19.3271 10.1825Z" fill="currentColor"/> <path d="M6.53254 13.5082C6.64942 14.1711 6.20681 14.8032 5.54394 14.9201C4.88107 15.037 4.24895 14.5943 4.13207 13.9315C4.01519 13.2686 4.4578 12.6365 5.12067 12.5196C5.78354 12.4027 6.41566 12.8453 6.53254 13.5082Z" fill="currentColor"/> <path d="M4.40152 16.0841C4.5184 16.7469 4.07579 17.379 3.41292 17.4959C2.75005 17.6128 2.11793 17.1702 2.00105 16.5073C1.88417 15.8445 2.32678 15.2123 2.98965 15.0955C3.65252 14.9786 4.28464 15.4212 4.40152 16.0841Z" fill="currentColor"/> <path d="M9.7863 12.9345C9.90318 13.5974 9.46057 14.2295 8.7977 14.3464C8.13483 14.4632 7.50271 14.0206 7.38583 13.3578C7.26895 12.6949 7.71156 12.0628 8.37443 11.9459C9.0373 11.829 9.66942 12.2716 9.7863 12.9345Z" fill="currentColor"/> <path d="M12.6698 14.6261C12.7867 15.289 12.3441 15.9211 11.6812 16.038C11.0183 16.1549 10.3862 15.7123 10.2693 15.0494C10.1524 14.3865 10.5951 13.7544 11.2579 13.6375C11.9208 13.5207 12.5529 13.9633 12.6698 14.6261Z" fill="currentColor"/> <path d="M11.0741 18.054C11.3591 19.67 9.85282 20.4856 8.2525 20.7677C6.65219 21.0499 4.95782 20.7987 4.67287 19.1827C4.37465 17.4914 5.7116 15.7155 7.31191 15.4334C8.91222 15.1512 10.7892 16.4379 11.0741 18.054Z" fill="currentColor"/> </g> <defs> <clipPath id="clip0_34_2579"> <rect width="24" height="24" fill="currentColor"/> </clipPath> </defs>'
  }
};
function I({ name: e, size: o = 24, className: t, ...r }) {
  const n = O2[e];
  return n ? /* @__PURE__ */ c(
    "svg",
    {
      width: o,
      height: o,
      viewBox: n.viewBox,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: b("shrink-0", t),
      "aria-hidden": "true",
      ...r,
      dangerouslySetInnerHTML: { __html: n.content }
    }
  ) : (process.env.NODE_ENV !== "production" && console.warn(`[Icon] Unknown icon name: "${e}"`), null);
}
const A1 = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, I1 = R1, K = (e, o) => (t) => {
  var r;
  if (o?.variants == null) return I1(e, t?.class, t?.className);
  const { variants: n, defaultVariants: l } = o, a = Object.keys(n).map((u) => {
    const p = t?.[u], h = l?.[u];
    if (p === null) return null;
    const x = A1(p) || A1(h);
    return n[u][x];
  }), s = t && Object.entries(t).reduce((u, p) => {
    let [h, x] = p;
    return x === void 0 || (u[h] = x), u;
  }, {}), i = o == null || (r = o.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, p) => {
    let { class: h, className: x, ...k } = p;
    return Object.entries(k).every((v) => {
      let [w, M] = v;
      return Array.isArray(M) ? M.includes({
        ...l,
        ...s
      }[w]) : {
        ...l,
        ...s
      }[w] === M;
    }) ? [
      ...u,
      h,
      x
    ] : u;
  }, []);
  return I1(e, a, i, t?.class, t?.className);
}, G2 = K(
  /* base */
  [
    "inline-flex items-center justify-center gap-3xs",
    "font-body font-bold",
    "rounded-round overflow-clip relative",
    "transition-all duration-[var(--transition-default)] cursor-pointer",
    "disabled:opacity-40 disabled:cursor-not-allowed"
  ],
  {
    variants: {
      variant: {
        filled: [
          "text-text-inverse",
          "bg-[image:none] hover:bg-[image:linear-gradient(var(--color-bg-hover),var(--color-bg-hover))]"
        ],
        outline: [
          "hover:bg-bg-hover"
        ],
        ghost: [
          "hover:bg-bg-hover"
        ]
      },
      size: {
        lg: "px-[20px] py-xs text-lg leading-relaxed shadow-md",
        sm: "px-[20px] py-2xs text-base leading-normal shadow-sm"
      }
    },
    compoundVariants: [
      /* ── Large ── */
      { variant: "filled", size: "lg", className: "bg-bg-primary-stronger" },
      { variant: "outline", size: "lg", className: "bg-bg-default border-2 border-text-primary-stronger text-text-default" },
      { variant: "ghost", size: "lg", className: "text-text-primary-stronger shadow-none" },
      /* ── Small ── */
      { variant: "filled", size: "sm", className: "bg-bg-primary-alternative" },
      { variant: "outline", size: "sm", className: "border border-border-input-default text-text-default" },
      { variant: "ghost", size: "sm", className: "text-text-default shadow-none" }
    ],
    defaultVariants: {
      variant: "filled",
      size: "lg"
    }
  }
), p1 = {
  lg: { iconSize: 24, wrapperW: "w-[20px]", wrapperH: "h-[24px]" },
  sm: { iconSize: 20, wrapperW: "w-[14px]", wrapperH: "h-[20px]" }
}, D2 = y(
  ({ className: e, variant: o, size: t, leadingIcon: r, children: n, ...l }, a) => {
    const s = t ?? "lg";
    return /* @__PURE__ */ L(
      "button",
      {
        ref: a,
        type: "button",
        className: b(G2({ variant: o, size: t, className: e })),
        ...l,
        children: [
          r && /* @__PURE__ */ c(
            "span",
            {
              className: b(
                "relative shrink-0",
                p1[s].wrapperW,
                p1[s].wrapperH
              ),
              children: /* @__PURE__ */ c(
                I,
                {
                  name: r,
                  size: p1[s].iconSize,
                  className: "absolute right-0 top-1/2 -translate-y-1/2 overflow-clip"
                }
              )
            }
          ),
          n
        ]
      }
    );
  }
);
D2.displayName = "Button";
const W2 = K(
  [
    "inline-flex items-center justify-center gap-3xs",
    "font-body font-bold text-lg leading-relaxed text-text-inverse",
    "rounded-round overflow-clip",
    "shadow-lg",
    "transition-all duration-[var(--transition-default)] cursor-pointer",
    "bg-[image:none] hover:bg-[image:linear-gradient(var(--color-bg-hover),var(--color-bg-hover))]",
    "disabled:opacity-40 disabled:cursor-not-allowed"
  ],
  {
    variants: {
      size: {
        lg: "px-[20px] py-sm"
      }
    },
    defaultVariants: {
      size: "lg"
    }
  }
), $2 = y(
  ({ className: e, size: o, leadingIcon: t, children: r, ...n }, l) => /* @__PURE__ */ L(
    "button",
    {
      ref: l,
      type: "button",
      className: b(
        W2({ size: o, className: e }),
        "bg-bg-secondary-strong"
      ),
      ...n,
      children: [
        /* @__PURE__ */ c("span", { className: "relative shrink-0 w-[20px] h-[24px]", children: /* @__PURE__ */ c(
          I,
          {
            name: t,
            size: 24,
            className: "absolute right-0 top-1/2 -translate-y-1/2 overflow-clip"
          }
        ) }),
        r
      ]
    }
  )
);
$2.displayName = "FloatingButton";
const U2 = K(
  [
    "inline-flex items-center justify-center",
    "rounded-md",
    "transition-all duration-[var(--transition-default)] cursor-pointer",
    "hover:bg-bg-hover",
    "disabled:opacity-40 disabled:cursor-not-allowed"
  ],
  {
    variants: {
      size: {
        lg: "p-xs",
        md: "p-2xs",
        sm: "p-[6px]"
      }
    },
    defaultVariants: {
      size: "lg"
    }
  }
), h1 = y(
  ({ className: e, size: o, icon: t, ...r }, n) => /* @__PURE__ */ c(
    "button",
    {
      ref: n,
      type: "button",
      className: b(U2({ size: o, className: e })),
      ...r,
      children: /* @__PURE__ */ c(I, { name: t, size: 24, className: "shrink-0" })
    }
  )
);
h1.displayName = "IconButton";
const J = y(
  ({ className: e, label: o, helper: t, required: r = !1, ...n }, l) => /* @__PURE__ */ L(
    "label",
    {
      ref: l,
      className: b("flex flex-col items-start", e),
      ...n,
      children: [
        /* @__PURE__ */ L("span", { className: "flex items-center gap-2xs", children: [
          /* @__PURE__ */ c("span", { className: "font-body font-bold text-base leading-normal text-text-default", children: o }),
          r && /* @__PURE__ */ c("span", { className: "inline-flex items-center justify-center bg-red-55 px-2xs py-px rounded-sm", children: /* @__PURE__ */ c("span", { className: "font-body font-bold text-xs leading-tight text-text-inverse", children: "必須" }) })
        ] }),
        t && /* @__PURE__ */ c("p", { className: "font-body text-sm leading-relaxed text-text-subtle", children: t })
      ]
    }
  )
);
J.displayName = "FormLabel";
const K2 = K(
  [
    "bg-input-subtle",
    "ring-1 ring-inset ring-border-input-default",
    "font-body font-normal text-text-default",
    "placeholder:text-text-subtle",
    "transition-shadow",
    "focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none",
    "disabled:opacity-40 disabled:cursor-not-allowed"
  ],
  {
    variants: {
      layout: {
        vertical: "w-full px-[10px] rounded-md text-lg leading-relaxed h-[44px]",
        inline: "flex-1 min-w-0 px-[10px] rounded-sm text-base leading-normal h-[36px]"
      }
    },
    defaultVariants: {
      layout: "vertical"
    }
  }
), Y2 = y(
  ({
    className: e,
    layout: o,
    label: t,
    helper: r,
    required: n = !1,
    id: l,
    ...a
  }, s) => {
    const i = W(), u = l ?? i, h = (o ?? "vertical") === "vertical";
    return /* @__PURE__ */ L(
      "div",
      {
        className: b(
          h ? "flex flex-col gap-3xs items-start" : "flex items-center gap-2xs",
          e
        ),
        children: [
          t && /* @__PURE__ */ c(
            J,
            {
              label: t,
              helper: h ? r : void 0,
              required: n,
              htmlFor: u,
              className: h ? "w-full" : "shrink-0"
            }
          ),
          /* @__PURE__ */ c(
            "input",
            {
              ref: s,
              id: u,
              className: b(K2({ layout: o })),
              required: n,
              ...a
            }
          )
        ]
      }
    );
  }
);
Y2.displayName = "TextField";
const X2 = K(
  ["relative"],
  {
    variants: {
      layout: {
        vertical: "",
        inline: "flex-1 min-w-0"
      }
    },
    defaultVariants: {
      layout: "vertical"
    }
  }
), J2 = [
  "appearance-none w-full",
  "bg-input-subtle",
  "ring-1 ring-inset ring-border-input-default",
  "font-body font-normal text-text-default",
  "transition-shadow",
  "focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none",
  "disabled:opacity-40 disabled:cursor-not-allowed"
].join(" "), Q2 = {
  vertical: "px-[10px] pr-[40px] rounded-md text-lg leading-relaxed h-[44px]",
  inline: "pl-[10px] pr-[32px] rounded-sm text-base leading-normal h-[36px]"
}, q2 = y(
  ({
    className: e,
    layout: o,
    label: t,
    helper: r,
    required: n = !1,
    placeholder: l,
    options: a = [],
    children: s,
    id: i,
    ...u
  }, p) => {
    const h = W(), x = i ?? h, k = o ?? "vertical", v = k === "vertical";
    return /* @__PURE__ */ L(
      "div",
      {
        className: b(
          v ? "flex flex-col gap-3xs items-start" : "flex items-center gap-2xs",
          e
        ),
        children: [
          t && /* @__PURE__ */ c(
            J,
            {
              label: t,
              helper: v ? r : void 0,
              required: n,
              htmlFor: x,
              className: v ? "w-full" : "shrink-0"
            }
          ),
          /* @__PURE__ */ L("div", { className: b(X2({ layout: o })), children: [
            /* @__PURE__ */ L(
              "select",
              {
                ref: p,
                id: x,
                required: n,
                className: b(J2, Q2[k]),
                ...u,
                children: [
                  l && /* @__PURE__ */ c("option", { value: "", disabled: !0, children: l }),
                  a.map((w) => /* @__PURE__ */ c("option", { value: w.value, children: w.label }, w.value)),
                  s
                ]
              }
            ),
            /* @__PURE__ */ c(
              I,
              {
                name: "caret_down",
                size: 24,
                className: b(
                  "pointer-events-none absolute top-1/2 -translate-y-1/2 text-text-default",
                  v ? "right-[10px]" : "right-[4px]"
                )
              }
            )
          ] })
        ]
      }
    );
  }
);
q2.displayName = "Select";
const e0 = {
  lg: {
    outer: "size-[24px]",
    inner: "size-[20px]",
    dot: "size-[12px]",
    label: "text-lg leading-relaxed",
    gap: "gap-2xs",
    padding: "py-2xs"
  },
  sm: {
    outer: "size-[20px]",
    inner: "size-[18px]",
    dot: "size-[10px]",
    label: "text-base leading-normal shrink-0",
    gap: "gap-[2px]",
    padding: "py-[6px]"
  }
}, t0 = y(
  ({ className: e, label: o, size: t = "lg", fit: r = !1, id: n, "aria-label": l, ...a }, s) => {
    const i = W(), u = n ?? i, p = e0[t];
    return /* @__PURE__ */ L(
      "label",
      {
        htmlFor: u,
        className: b(
          "group inline-flex items-start cursor-pointer",
          r && "self-start",
          p.gap,
          p.padding,
          "has-[:disabled]:opacity-40 has-[:disabled]:cursor-not-allowed",
          e
        ),
        children: [
          /* @__PURE__ */ c(
            "input",
            {
              ref: s,
              id: u,
              type: "radio",
              className: "sr-only",
              "aria-label": o ? void 0 : l,
              ...a
            }
          ),
          /* @__PURE__ */ L(
            "span",
            {
              className: b(
                "relative shrink-0 flex items-center justify-center",
                p.outer
              ),
              children: [
                /* @__PURE__ */ c(
                  "span",
                  {
                    className: b(
                      "rounded-round border-2 border-border-input-strong",
                      "group-has-[:checked]:hidden",
                      p.inner
                    )
                  }
                ),
                /* @__PURE__ */ c(
                  "span",
                  {
                    className: b(
                      "hidden rounded-round border-2 border-bg-primary-stronger items-center justify-center",
                      "group-has-[:checked]:flex",
                      p.inner
                    ),
                    children: /* @__PURE__ */ c(
                      "span",
                      {
                        className: b(
                          "rounded-round bg-bg-primary-stronger",
                          p.dot
                        )
                      }
                    )
                  }
                )
              ]
            }
          ),
          o && /* @__PURE__ */ c(
            "span",
            {
              className: b(
                "font-body font-normal text-text-default",
                !r && "min-w-0 flex-1",
                p.label
              ),
              children: o
            }
          )
        ]
      }
    );
  }
);
t0.displayName = "Radio";
const o0 = {
  lg: {
    outer: "size-[24px]",
    inner: "size-[20px]",
    iconSize: 24,
    label: "text-lg leading-relaxed",
    gap: "gap-2xs",
    padding: "py-2xs"
  },
  sm: {
    outer: "size-[20px]",
    inner: "size-[18px]",
    iconSize: 20,
    label: "text-base leading-normal shrink-0",
    gap: "gap-[2px]",
    padding: "py-[6px]"
  }
}, r0 = y(
  ({ className: e, label: o, size: t = "lg", fit: r = !1, id: n, "aria-label": l, ...a }, s) => {
    const i = W(), u = n ?? i, p = o0[t];
    return /* @__PURE__ */ L(
      "label",
      {
        htmlFor: u,
        className: b(
          "group inline-flex items-start cursor-pointer",
          r && "self-start",
          p.gap,
          p.padding,
          "has-[:disabled]:opacity-40 has-[:disabled]:cursor-not-allowed",
          e
        ),
        children: [
          /* @__PURE__ */ c(
            "input",
            {
              ref: s,
              id: u,
              type: "checkbox",
              className: "sr-only",
              "aria-label": o ? void 0 : l,
              ...a
            }
          ),
          /* @__PURE__ */ L(
            "span",
            {
              className: b(
                "relative shrink-0 flex items-center justify-center",
                p.outer
              ),
              children: [
                /* @__PURE__ */ c(
                  "span",
                  {
                    className: b(
                      "rounded-sm border-2 border-border-input-strong",
                      "group-has-[:checked]:hidden",
                      p.inner
                    )
                  }
                ),
                /* @__PURE__ */ c(
                  "span",
                  {
                    className: b(
                      "hidden rounded-sm bg-bg-primary-stronger items-center justify-center overflow-clip",
                      "group-has-[:checked]:flex",
                      p.inner
                    ),
                    children: /* @__PURE__ */ c(
                      I,
                      {
                        name: "check",
                        size: p.iconSize,
                        className: "text-white"
                      }
                    )
                  }
                )
              ]
            }
          ),
          o && /* @__PURE__ */ c(
            "span",
            {
              className: b(
                "font-body font-normal text-text-default",
                !r && "min-w-0 flex-1",
                p.label
              ),
              children: o
            }
          )
        ]
      }
    );
  }
);
r0.displayName = "Checkbox";
const n0 = y(
  ({ className: e, label: o, leadingIcon: t, dismissible: r = !1, onDismiss: n, ...l }, a) => /* @__PURE__ */ L(
    "div",
    {
      ref: a,
      className: b(
        "inline-flex items-center bg-bg-neutral rounded-round",
        r ? "pl-sm pr-[2px]" : "px-sm py-2xs",
        e
      ),
      ...l,
      children: [
        /* @__PURE__ */ L("div", { className: "flex items-center gap-[2px]", children: [
          t && /* @__PURE__ */ c("span", { className: "relative shrink-0 w-[16px] h-[20px]", children: /* @__PURE__ */ c(
            I,
            {
              name: t,
              size: 20,
              className: "absolute right-0 top-1/2 -translate-y-1/2 overflow-clip text-text-default"
            }
          ) }),
          /* @__PURE__ */ c("span", { className: "font-body font-medium text-base leading-normal text-text-default text-center shrink-0", children: o })
        ] }),
        r && /* @__PURE__ */ c(
          h1,
          {
            icon: "clear",
            size: "sm",
            className: "text-text-default",
            onClick: n,
            "aria-label": `${o}を削除`
          }
        )
      ]
    }
  )
);
n0.displayName = "Tag";
const l0 = K(
  [
    "inline-flex items-center justify-center",
    "px-2xs py-[2px]",
    "rounded-round",
    "font-body font-medium text-xs leading-tight text-center"
  ],
  {
    variants: {
      color: {
        neutral: "",
        blue: "",
        green: "",
        yellow: "",
        orange: "",
        red: ""
      },
      variant: {
        subtle: "",
        strong: ""
      }
    },
    compoundVariants: [
      /* ── Subtle (light bg + colored text) ── */
      { color: "neutral", variant: "subtle", className: "bg-neutral-97 text-neutral-45" },
      { color: "blue", variant: "subtle", className: "bg-blue-95 text-blue-45" },
      { color: "green", variant: "subtle", className: "bg-green-95 text-green-45" },
      { color: "yellow", variant: "subtle", className: "bg-yellow-95 text-yellow-45" },
      { color: "orange", variant: "subtle", className: "bg-orange-95 text-orange-45" },
      { color: "red", variant: "subtle", className: "bg-red-95 text-red-45" },
      /* ── Strong (colored bg + white/dark text) ── */
      { color: "neutral", variant: "strong", className: "bg-neutral-45 text-text-inverse" },
      { color: "blue", variant: "strong", className: "bg-blue-45 text-text-inverse" },
      { color: "green", variant: "strong", className: "bg-green-45 text-text-inverse" },
      { color: "yellow", variant: "strong", className: "bg-yellow-85 text-text-default" },
      { color: "orange", variant: "strong", className: "bg-orange-60 text-text-inverse" },
      { color: "red", variant: "strong", className: "bg-red-45 text-text-inverse" }
    ],
    defaultVariants: {
      color: "neutral",
      variant: "subtle"
    }
  }
), a0 = y(
  ({ className: e, color: o, variant: t, label: r, ...n }, l) => /* @__PURE__ */ c(
    "span",
    {
      ref: l,
      className: b(l0({ color: o, variant: t, className: e })),
      ...n,
      children: r
    }
  )
);
a0.displayName = "Badge";
const s0 = y(
  ({ className: e, id: o, ...t }, r) => {
    const n = W(), l = o ?? n;
    return /* @__PURE__ */ L(
      "div",
      {
        className: b(
          "relative flex items-center",
          "bg-input-subtle rounded-[6px]",
          "ring-1 ring-inset ring-border-input-default",
          "focus-within:ring-2 focus-within:ring-border-focus",
          "transition-shadow",
          e
        ),
        children: [
          /* @__PURE__ */ c(
            "input",
            {
              ref: r,
              id: l,
              type: "search",
              className: b(
                "flex-1 min-w-0 bg-transparent pl-[10px] pr-[40px] h-[36px]",
                "font-body font-normal text-lg leading-relaxed text-text-default",
                "placeholder:text-text-subtle",
                "focus:outline-none",
                "disabled:opacity-40 disabled:cursor-not-allowed"
              ),
              ...t
            }
          ),
          /* @__PURE__ */ c(
            I,
            {
              name: "search",
              size: 24,
              className: "pointer-events-none absolute right-2xs top-1/2 -translate-y-1/2 text-text-primary-strong"
            }
          )
        ]
      }
    );
  }
);
s0.displayName = "SearchField";
function i0(e) {
  e.key === "Backspace" || e.key === "Delete" || e.key === "Tab" || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Home" || e.key === "End" || e.ctrlKey || e.metaKey || /^[0-9/]$/.test(e.key) || e.preventDefault();
}
const C0 = b(
  "flex-1 min-w-0 bg-transparent pl-[10px] pr-[32px] h-[32px]",
  "font-body font-normal text-base leading-normal text-text-default",
  "placeholder:text-text-subtle",
  "focus:outline-none",
  "disabled:opacity-40 disabled:cursor-not-allowed"
), c0 = b(
  "relative flex items-center w-[120px] shrink-0",
  "bg-input-subtle",
  "ring-1 ring-inset ring-border-input-default",
  "focus-within:ring-2 focus-within:ring-border-focus",
  "overflow-clip transition-shadow"
);
function m1({
  id: e,
  inputRef: o,
  className: t,
  disabled: r,
  ...n
}) {
  const l = Q1(null), a = l1(() => {
    l.current?.showPicker();
  }, []), s = l1(
    (i) => {
      const u = i.target.value;
      if (!u) return;
      const [p, h, x] = u.split("-"), k = `${p}/${h}/${x}`, v = e ? document.getElementById(e) : null;
      v && (Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        "value"
      )?.set?.call(v, k), v.dispatchEvent(new Event("input", { bubbles: !0 })), v.dispatchEvent(new Event("change", { bubbles: !0 })));
    },
    [e]
  );
  return /* @__PURE__ */ L("div", { className: b(c0, t), children: [
    /* @__PURE__ */ c(
      "input",
      {
        ref: o,
        id: e,
        type: "text",
        inputMode: "numeric",
        className: C0,
        onKeyDown: i0,
        disabled: r,
        ...n
      }
    ),
    /* @__PURE__ */ c(
      "input",
      {
        ref: l,
        type: "date",
        className: "sr-only",
        tabIndex: -1,
        "aria-hidden": !0,
        onChange: s
      }
    ),
    /* @__PURE__ */ c(
      h1,
      {
        icon: "calendar",
        size: "sm",
        "aria-label": "カレンダーを開く",
        disabled: r,
        onClick: a,
        className: "absolute right-0 top-1/2 -translate-y-1/2 text-text-default"
      }
    )
  ] });
}
const d0 = y(
  ({
    className: e,
    label: o,
    required: t = !1,
    range: r = !1,
    endValue: n,
    defaultEndValue: l,
    onEndChange: a,
    startPlaceholder: s,
    endPlaceholder: i,
    id: u,
    disabled: p,
    ...h
  }, x) => {
    const k = W(), v = u ?? k, w = `${v}-end`;
    return r ? /* @__PURE__ */ L("div", { className: b("flex items-center gap-2xs", e), children: [
      o && /* @__PURE__ */ c(
        J,
        {
          label: o,
          required: t,
          htmlFor: v,
          className: "shrink-0"
        }
      ),
      /* @__PURE__ */ L("div", { className: "flex items-center", children: [
        /* @__PURE__ */ c(
          m1,
          {
            inputRef: x,
            id: v,
            placeholder: s,
            required: t,
            disabled: p,
            className: "rounded-l-sm -mr-px",
            ...h
          }
        ),
        /* @__PURE__ */ c(
          m1,
          {
            id: w,
            placeholder: i,
            value: n,
            defaultValue: l,
            onChange: a,
            disabled: p,
            className: "rounded-r-sm"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ L("div", { className: b("flex items-center gap-2xs", e), children: [
      o && /* @__PURE__ */ c(
        J,
        {
          label: o,
          required: t,
          htmlFor: v,
          className: "shrink-0"
        }
      ),
      /* @__PURE__ */ c(
        m1,
        {
          inputRef: x,
          id: v,
          placeholder: s,
          required: t,
          disabled: p,
          className: "rounded-sm",
          ...h
        }
      )
    ] });
  }
);
d0.displayName = "DatePicker";
const u0 = y(
  ({
    className: e,
    value: o,
    defaultValue: t = 0,
    onChange: r,
    min: n,
    max: l,
    step: a = 1,
    disabled: s = !1,
    id: i,
    ...u
  }, p) => {
    const h = W(), x = i ?? h, k = o !== void 0, v = k ? o : void 0, w = l1(
      (S) => {
        let N = S;
        return n !== void 0 && (N = Math.max(n, N)), l !== void 0 && (N = Math.min(l, N)), N;
      },
      [n, l]
    ), M = l1(
      (S) => {
        if (!s)
          if (k)
            r?.(w(o + a * S));
          else {
            const N = document.getElementById(x);
            if (!N) return;
            const E = Number(N.value) || 0, T = w(E + a * S);
            Object.getOwnPropertyDescriptor(
              HTMLInputElement.prototype,
              "value"
            )?.set?.call(N, String(T)), N.dispatchEvent(new Event("input", { bubbles: !0 })), r?.(T);
          }
      },
      [k, o, r, w, a, s, x]
    );
    return /* @__PURE__ */ L(
      "div",
      {
        className: b(
          "inline-flex items-center",
          "bg-input-subtle border border-border-input-default rounded-md",
          "transition-colors",
          s && "opacity-40 cursor-not-allowed",
          e
        ),
        children: [
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              "aria-label": "減らす",
              tabIndex: -1,
              disabled: s,
              onClick: () => M(-1),
              className: b(
                "inline-flex items-center justify-center p-2xs",
                "cursor-pointer transition-opacity",
                "hover:opacity-70 active:opacity-60",
                "disabled:cursor-not-allowed disabled:opacity-40"
              ),
              children: /* @__PURE__ */ c(I, { name: "minus", size: 24, className: "shrink-0 text-text-default" })
            }
          ),
          /* @__PURE__ */ c(
            "input",
            {
              ref: p,
              id: x,
              type: "text",
              inputMode: "numeric",
              className: b(
                "w-[40px] bg-transparent text-center",
                "font-body font-normal text-lg leading-relaxed text-text-default",
                "focus:outline-none",
                "disabled:cursor-not-allowed"
              ),
              value: v,
              defaultValue: k ? void 0 : t,
              disabled: s,
              readOnly: !0,
              ...u
            }
          ),
          /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              "aria-label": "増やす",
              tabIndex: -1,
              disabled: s,
              onClick: () => M(1),
              className: b(
                "inline-flex items-center justify-center p-2xs",
                "cursor-pointer transition-opacity",
                "hover:opacity-70 active:opacity-60",
                "disabled:cursor-not-allowed disabled:opacity-40"
              ),
              children: /* @__PURE__ */ c(I, { name: "plus", size: 24, className: "shrink-0 text-text-default" })
            }
          )
        ]
      }
    );
  }
);
u0.displayName = "Stepper";
const p0 = y(
  ({ className: e, selected: o = !1, children: t, ...r }, n) => /* @__PURE__ */ c(
    "button",
    {
      ref: n,
      type: "button",
      role: "tab",
      "aria-selected": o,
      className: b(
        "flex items-start px-xs py-2xs font-body font-medium text-lg leading-relaxed whitespace-nowrap cursor-pointer",
        "transition-colors duration-[var(--transition-default)]",
        o ? "border-b-3 border-bg-primary-stronger text-text-primary-stronger" : "text-text-default hover:bg-bg-hover",
        e
      ),
      ...r,
      children: t
    }
  )
);
p0.displayName = "PageTab";
const m0 = y(
  ({ className: e, selected: o = !1, children: t, ...r }, n) => /* @__PURE__ */ c(
    "button",
    {
      ref: n,
      type: "button",
      role: "tab",
      "aria-selected": o,
      className: b(
        "flex items-center justify-center px-sm py-[6px] rounded-round font-body font-medium text-base leading-normal whitespace-nowrap cursor-pointer",
        "transition-colors duration-[var(--transition-default)]",
        o ? "bg-bg-primary-alternative text-text-inverse" : "text-text-default hover:bg-bg-hover",
        e
      ),
      ...r,
      children: t
    }
  )
);
m0.displayName = "DataTab";
const f0 = y(
  ({ className: e, items: o, value: t, onValueChange: r, ...n }, l) => /* @__PURE__ */ c(
    "div",
    {
      ref: l,
      role: "tablist",
      className: b("flex items-center w-full", e),
      ...n,
      children: o.map((a) => {
        const s = a.value === t;
        return /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": s,
            onClick: () => r?.(a.value),
            className: b(
              "flex-1 flex items-center justify-center pb-xs font-heading font-bold text-lg leading-relaxed text-text-default whitespace-nowrap cursor-pointer",
              "border-b-3 border-solid transition-colors duration-[var(--transition-default)]",
              s ? "border-bg-input-selected" : "border-border-default"
            ),
            children: a.label
          },
          a.value
        );
      })
    }
  )
);
f0.displayName = "MobileTab";
const b0 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='xMidYMid%20meet'%20overflow='visible'%20style='display:%20block;'%20viewBox='0%200%20416.54%20104.705'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='logo'%3e%3cpath%20d='M310.264%202.832C311.204%202.71992%20312.157%202.81901%20313.053%203.12204C313.95%203.42506%20314.768%203.92438%20315.447%204.58359C316.126%205.24279%20316.649%206.04526%20316.979%206.93248C317.309%207.81969%20317.436%208.76928%20317.352%209.712V22.072H325.752C326.674%2021.9339%20327.616%2022.003%20328.509%2022.2744C329.401%2022.5457%20330.222%2023.0124%20330.911%2023.6406C331.601%2024.2688%20332.142%2025.0428%20332.495%2025.9061C332.848%2026.7695%20333.004%2027.7007%20332.952%2028.632C333.005%2029.564%20332.85%2030.496%20332.497%2031.3604C332.145%2032.2248%20331.604%2032.9997%20330.915%2033.6289C330.225%2034.258%20329.404%2034.7254%20328.511%2034.9972C327.618%2035.269%20326.675%2035.3383%20325.752%2035.2H317.352V63.16C317.352%2067.512%20318.952%2067.512%20319.728%2067.512C321.024%2067.4961%20322.288%2067.1028%20323.364%2066.38L323.528%2066.288C324.56%2065.7023%20325.718%2065.3731%20326.904%2065.328C328.897%2065.4857%20330.75%2066.4117%20332.072%2067.9105C333.395%2069.4092%20334.083%2071.3633%20333.992%2073.36C334.016%2074.6071%20333.665%2075.8326%20332.985%2076.878C332.304%2077.9234%20331.326%2078.7407%20330.176%2079.224C326.862%2080.7072%20323.262%2081.4445%20319.632%2081.384C317.367%2081.5399%20315.093%2081.2478%20312.94%2080.5244C310.788%2079.801%20308.799%2078.6605%20307.088%2077.168C305.568%2075.5127%20304.4%2073.5655%20303.656%2071.4448C302.912%2069.3241%20302.607%2067.0742%20302.76%2064.832V35.208H299.864C298.937%2035.3398%20297.992%2035.2664%20297.096%2034.993C296.2%2034.7196%20295.375%2034.2528%20294.679%2033.6256C293.983%2032.9985%20293.433%2032.2262%20293.068%2031.3633C292.704%2030.5005%20292.533%2029.5681%20292.568%2028.632C292.535%2027.6972%20292.708%2026.7666%20293.074%2025.9058C293.439%2025.0449%20293.99%2024.2746%20294.685%2023.6493C295.381%2023.0239%20296.205%2022.5586%20297.1%2022.286C297.994%2022.0135%20298.938%2021.9405%20299.864%2022.072H302.76V9.712C302.703%208.73877%20302.863%207.76501%20303.229%206.86146C303.595%205.95792%20304.158%205.14729%20304.877%204.48845C305.595%203.82961%20306.452%203.3391%20307.384%203.05258C308.315%202.76606%20309.299%202.69071%20310.264%202.832Z'%20fill='var(--fill-0,%20%235291DA)'/%3e%3cpath%20d='M68.208%2071.792C68.32%2069.44%2068.096%2066.992%2068.096%2064.848C68.096%2054.768%2067.984%2043.568%2067.984%2033.488C67.984%2025.2%2067.76%2016.912%2067.76%208.624C67.7366%207.68727%2067.6618%206.75253%2067.536%205.824C67.4028%204.99143%2067.2157%204.16837%2066.976%203.36C66.6601%202.6417%2066.203%201.99421%2065.632%201.456C64.9247%200.784082%2064.0231%200.352882%2063.056%200.223999C62.0914%200.0849837%2061.1186%200.0101535%2060.144%200C55.344%200.112%2050.624%207.84%2048.496%2011.312C43.568%2019.488%2040.992%2023.408%2037.856%2028.224C36.9033%2029.9082%2035.8171%2031.5133%2034.608%2033.024C31.92%2029.328%2029.008%2023.952%2025.088%2017.68C22.8711%2013.8353%2020.4017%2010.1419%2017.696%206.624C15.792%204.624%2013.776%200.799999%2010.752%200.223999C9.78689%200.0894062%208.81435%200.0145979%207.84%200C6.57044%200.000789292%205.32536%200.349405%204.23999%201.008C3.20407%201.64774%202.38457%202.58433%201.888%203.696C1.2649%205.07049%200.92222%206.55546%200.880005%208.064C0.432005%2014.336%200.208008%2020.72%200.208008%2027.216V42.224L0.0960083%2059.472L0%2068.224C0%2070.224%200.111999%2072.256%200.223999%2074.272C0.329314%2075.3877%200.661879%2076.47%201.2012%2077.4524C1.74053%2078.4347%202.47521%2079.2963%203.36002%2079.984C4.45817%2080.7082%205.73323%2081.1189%207.04764%2081.1716C8.36205%2081.2243%209.66591%2080.9171%2010.8185%2080.2832C11.9712%2079.6492%2012.9288%2078.7126%2013.5882%2077.5743C14.2475%2076.436%2014.5836%2075.1393%2014.56%2073.824C15.008%2073.712%2015.12%2026.672%2015.232%2026.112C18.934%2033.0008%2023.2843%2039.521%2028.224%2045.584C29.568%2047.264%2032.032%2050.064%2034.496%2049.84C38.752%2049.504%2041.328%2046.48%2052.976%2027.104C53.1174%2029.0045%2053.1548%2030.9114%2053.088%2032.816C53.2%2038.08%2053.2%2037.616%2053.2%2042.448L53.312%2059.584V68.32C53.424%2072.24%2052.864%2077.52%2057.008%2080.08C58.7814%2080.9659%2060.8301%2081.1266%2062.72%2080.528C63.7993%2080.4469%2064.8222%2080.0141%2065.632%2079.296C66.2626%2078.7483%2066.7605%2078.0644%2067.088%2077.296C67.7408%2075.5295%2068.1186%2073.6732%2068.208%2071.792ZM131.376%2029.904C130.809%2028.8506%20129.901%2028.0213%20128.8%2027.552C127.928%2027.1547%20127.03%2026.8179%20126.112%2026.544C125.137%2026.399%20124.142%2026.4756%20123.2%2026.768C122.478%2026.9674%20121.821%2027.3537%20121.296%2027.888C120.644%2028.5497%20120.045%2029.2612%20119.504%2030.016C119.28%2030.576%20118.832%2031.024%20118.608%2031.584C117.221%2034.039%20115.987%2036.5772%20114.912%2039.184C113.904%2041.312%20112.912%2043.552%20111.776%2045.904L105.952%2058.224C103.04%2051.952%2099.904%2045.12%2097.104%2039.184C95.9745%2035.7261%2094.2291%2032.5009%2091.952%2029.664C91.2919%2028.8279%2090.4411%2028.1622%2089.4709%2027.7225C88.5006%2027.2828%2087.4391%2027.082%2086.3753%2027.1368C85.3115%2027.1917%2084.2763%2027.5006%2083.3564%2028.0377C82.4365%2028.5748%2081.6586%2029.3245%2081.088%2030.224C80.3278%2031.8985%2080.0508%2033.7521%2080.2882%2035.5757C80.5257%2037.3992%2081.2683%2039.1201%2082.432%2040.544C87.232%2049.392%2091.952%2060.816%2095.872%2070.224C96.432%2071.568%2097.216%2073.36%2098%2075.024L89.824%2092.72C89.6%2092.72%2089.488%2093.056%2089.264%2093.616C89.04%2094.064%2088.928%2094.848%2088.592%2095.616C88.48%2096.416%2088.368%2097.184%2088.256%2098.08C88.2313%2098.96%2088.3836%2099.836%2088.704%20100.656C89.1649%20101.605%2089.9083%20102.387%2090.832%20102.896C91.5468%20103.529%2092.3803%20104.013%2093.284%20104.321C94.1877%20104.628%2095.1436%20104.753%2096.096%20104.688C97.2558%20104.474%2098.352%20104%2099.3025%20103.301C100.253%20102.603%20101.033%20101.699%20101.584%20100.656C101.913%2099.9243%20102.287%2099.2136%20102.704%2098.528C104.704%2094.832%20106.4%2091.136%20108.304%2087.216L113.68%2075.68C114.352%2074.56%20114.8%2073.328%20115.36%2072.208C117.36%2067.84%20119.616%2063.36%20121.968%2058.544C124.32%2053.616%20126.224%2049.472%20128.24%2044.88L128.464%2044.32C129.136%2042.976%20130.816%2039.168%20131.376%2037.712C132.005%2036.3041%20132.311%2034.7734%20132.272%2033.232C132.369%2032.0523%20132.052%2030.8756%20131.376%2029.904ZM223.216%207.616C222.179%206.80586%20221.094%206.05788%20219.968%205.376C218.733%204.66229%20217.417%204.09832%20216.048%203.696C214.813%203.08384%20213.491%202.66816%20212.128%202.464C210.784%202.24%20209.552%202.016%20208.096%201.792C206.304%201.568%20204.496%201.344%20202.72%201.232C201.04%201.12%20199.248%201.008%20197.232%200.783997C192.299%200.528033%20187.355%200.602866%20182.432%201.008H182.208C180.33%200.785335%20178.44%201.30812%20176.944%202.464C176.41%202.96614%20175.99%203.57728%20175.712%204.256C175.488%205.056%20175.264%205.936%20175.04%206.72C174.866%207.64488%20174.754%208.58027%20174.704%209.52V71.456C174.708%2073.3553%20175.134%2075.2299%20175.952%2076.944C176.326%2077.8048%20176.933%2078.544%20177.705%2079.0783C178.477%2079.6125%20179.383%2079.9207%20180.32%2079.968C182.431%2080.3761%20184.616%2080.142%20186.592%2079.296C189.504%2077.616%20189.616%2074.256%20190.064%2071.456V48.256C191.069%2048.1628%20192.079%2048.1254%20193.088%2048.144C195.888%2048.032%20197.68%2047.92%20200.816%2047.696C207.156%2047.4666%20213.409%2046.1403%20219.296%2043.776C222.603%2042.5466%20225.478%2040.3769%20227.568%2037.534C229.657%2034.6911%20230.87%2031.2992%20231.056%2027.776C231.312%2024.0473%20230.744%2020.308%20229.392%2016.8237C228.039%2013.3395%20225.936%2010.1958%20223.232%207.616H223.216ZM216.496%2026.096C215.696%2034.496%20204.176%2035.616%20197.008%2035.728L190.064%2035.84C190.064%2033.264%20190.064%2030.576%20190.176%2027.888C190.176%2022.96%20190.176%2018.928%20190.064%2014.336C191.111%2014.3036%20192.158%2014.341%20193.2%2014.448C194.88%2014.56%20200.256%2014.672%20201.936%2014.784C209.232%2015.68%20216.944%2018.816%20216.496%2026.096ZM273.296%2064.496C268.673%2066.2331%20263.771%2067.1115%20258.832%2067.088C253.344%2066.624%20246.736%2064.288%20247.632%2058.224C256.256%2058.448%20261.296%2058.784%20268.464%2058.448C276.64%2058.112%20279.776%2058%20281.664%2052.624C282.613%2048.807%20282.418%2044.7951%20281.104%2041.088C278.958%2035.9179%20274.85%2031.8097%20269.68%2029.664C266.011%2027.9774%20262.004%2027.1512%20257.967%2027.2482C253.93%2027.3453%20249.968%2028.3631%20246.384%2030.224C243.343%2032.0594%20240.749%2034.55%20238.793%2037.5144C236.836%2040.4787%20235.565%2043.8423%20235.072%2047.36C233.388%2054.9372%20234.419%2062.8651%20237.984%2069.76C242.144%2076.384%20250.208%2079.072%20258.272%2079.424C263.788%2079.6804%20269.293%2078.7246%20274.4%2076.624C277.312%2075.376%20281.344%2072.576%20281.344%2068.88C281.344%2063.824%20276.752%2063.504%20273.28%2064.512L273.296%2064.496ZM268.496%2042.768C269.16%2043.409%20269.687%2044.1772%20270.047%2045.0267C270.407%2045.8761%20270.593%2046.7894%20270.592%2047.712H248.64C247.408%2047.712%20250.544%2042.912%20250.992%2042.448C252.387%2040.7379%20254.322%2039.553%20256.48%2039.088C258.923%2038.2845%20261.566%2038.324%20263.984%2039.2C265.717%2040.0596%20267.245%2041.2819%20268.464%2042.784L268.496%2042.768Z'%20fill='var(--fill-0,%20%235291DA)'/%3e%3cpath%20d='M388.526%2017.1289C389.391%2017.0461%20390.263%2017.1519%20391.083%2017.4391C391.903%2017.7264%20392.65%2018.1881%20393.274%2018.7924C393.898%2019.3968%20394.383%2020.1294%20394.696%2020.9395C395.009%2021.7497%20395.142%2022.6182%20395.086%2023.4849V38.8609H410.059C410.91%2038.7883%20411.768%2038.8998%20412.572%2039.1877C413.377%2039.4757%20414.111%2039.9334%20414.723%2040.5298C415.336%2041.1263%20415.812%2041.8474%20416.122%2042.6444C416.431%2043.4414%20416.565%2044.2956%20416.514%2045.1489V45.2849C416.594%2046.1506%20416.486%2047.0232%20416.198%2047.8435C415.91%2048.6637%20415.449%2049.4123%20414.846%2050.0385C414.243%2050.6647%20413.512%2051.1537%20412.703%2051.4723C411.894%2051.7909%20411.027%2051.9316%20410.158%2051.8849H395.086V67.1609C395.146%2068.0147%20395.021%2068.8712%20394.719%2069.6722C394.418%2070.4733%20393.948%2071.2001%20393.341%2071.8031C392.733%2072.4062%20392.003%2072.8714%20391.2%2073.1671C390.397%2073.4629%20389.54%2073.5822%20388.686%2073.5169H388.618C387.745%2073.5813%20386.868%2073.4549%20386.048%2073.1466C385.228%2072.8382%20384.486%2072.3553%20383.871%2071.7312C383.256%2071.1072%20382.785%2070.357%20382.489%2069.5326C382.194%2068.7081%20382.081%2067.8293%20382.158%2066.9569V51.8849H367.495C366.634%2051.938%20365.773%2051.8051%20364.968%2051.4953C364.164%2051.1856%20363.436%2050.7062%20362.834%2050.0898C362.231%2049.4734%20361.769%2048.7344%20361.478%2047.9233C361.187%2047.1121%20361.074%2046.2477%20361.146%2045.3889V45.3209C361.082%2044.4474%20361.209%2043.5704%20361.517%2042.7507C361.825%2041.9309%20362.308%2041.188%20362.932%2040.5735C363.556%2039.9589%20364.306%2039.4875%20365.131%2039.1917C365.955%2038.896%20366.834%2038.7831%20367.706%2038.8609H382.171V23.5889C382.094%2022.7303%20382.205%2021.8654%20382.496%2021.054C382.787%2020.2426%20383.251%2019.5041%20383.855%2018.8896C384.46%2018.2752%20385.191%2017.7995%20385.997%2017.4955C386.804%2017.1915%20387.667%2017.0664%20388.526%2017.1289Z'%20fill='var(--fill-0,%20%235291DA)'/%3e%3c/g%3e%3c/svg%3e", g0 = "data:image/svg+xml,%3csvg%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3c!--%20background%20circle%20fill%20--%3e%3crect%20width='1024'%20height='1024'%20rx='0'%20fill='%234DA6F4'/%3e%3c!--%20background%20shape%20--%3e%3cg%20transform='translate(256,%20123.6)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M255.917%200C157.889%200%2068.3441%2036.3167%200%2096.2285C2.6895%2095.9334%205.4445%2095.6566%208.26758%2095.4004H8.4668C65.9668%2091.3004%20141.568%2097.7%20181.268%20106H181.467C227.467%20116.5%20252.967%20146.201%20269.867%20165.801C273.567%20170.201%20277.367%20174.4%20281.467%20178.5C295.267%20191%20308.368%20196.7%20353.768%20199.4C362.267%20200%20371.067%20200.1%20380.467%20200.2C421.767%20200.9%20468.567%20201.601%20491.367%20237.801C507.267%20262.901%20503.667%20313.101%20495.167%20351.601C489.967%20374.8%20482.467%20396.6%20473.367%20414.5C462.767%20435.5%20450.468%20450.501%20436.768%20459.101C395.244%20485.399%20323.756%20505.001%20296.465%20511.918C302.24%20533.912%20316.897%20558.936%20360.667%20595.7C360.867%20595.9%20361.067%20596%20361.267%20596.2C403.994%20637.139%20431.317%20669.687%20452.461%20723.471C567.26%20655.987%20644.317%20531.193%20644.317%20388.4C644.317%20173.893%20470.424%200%20255.917%200Z'%20fill='%239AC8FA'/%3e%3c/g%3e%3c!--%20cat%20body%20--%3e%3cg%20transform='translate(292,%20446)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M168.912%200C162.012%2016.5001%20152.313%2047.4998%20151.213%2054.7998C150.713%2057.7998%20148.212%2067.6%20134.112%2068.5H131.312C126.713%2068.4%20122.213%2068%20117.713%2067.5C106.113%2066.3%2091.7123%2064.6998%2078.6123%2068.2998C51.5124%2075.5998%2038.1123%2092.5003%2033.6123%20124.7C32.8121%20130.5%2027.8119%20134.899%2021.9121%20134.899H18.6123C12.5124%20134.899%208.21223%20137.1%205.11228%20141.8C-2.78762%20153.7%20-1.38741%20179.5%208.31247%20198.1C14.0125%20208.9%2023.1123%20214.7%2033.6123%20221.5C47.5123%20230.5%2063.3121%20240.6%2074.4121%20263.7C94.0119%20304.4%2059.8121%20404.5%2055.9121%20415.8C55.688%20416.419%2055.4156%20417.012%2055.1025%20417.575C105.146%20441.069%20161.021%20454.2%20219.963%20454.2C283.239%20454.2%20342.98%20439.066%20395.768%20412.224C395.441%20411.678%20395.154%20411.103%20394.913%20410.5C375.213%20360%20350.612%20330.499%20309.312%20290.899C239.013%20231.8%20235.913%20197%20232.913%20163.3C232.513%20159.1%20232.213%20154.999%20231.713%20150.899C228.413%20124.1%20215.313%2094.0998%20203.713%2067.5C200.313%2059.8001%20197.112%2052.5001%20194.412%2045.7002C187.812%2029.5002%20179.212%2014.2%20168.912%200Z'%20fill='%23FCDE96'/%3e%3c/g%3e%3c!--%20cat%20eye%20--%3e%3cg%20transform='translate(371,%20559)'%3e%3cpath%20d='M17.7%200C27.5%200%2035.4%207.90001%2035.4%2017.7C35.4%2027.5%2027.5%2035.4%2017.7%2035.4C7.89998%2035.4%200%2027.5%200%2017.7C0%207.90001%207.89998%200%2017.7%200Z'%20fill='%23183346'/%3e%3c/g%3e%3c!--%20dog%20body%20--%3e%3cg%20transform='translate(123.6,%20241.5)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M309.051%2011.3699C270.851%203.36994%20198.35%20-2.63025%20142.95%201.16975C79.0505%206.96978%2059.7509%2022.8702%2038.251%2059.0701C15.951%2096.3702%20-11.849%20172.07%208.25098%20216.57C18.9511%20240.27%2042.7508%20259.47%2067.3506%20264.47C79.7506%20266.87%2097.6506%20266.97%20112.851%20252.97C149.451%20219.169%20211.05%20121.269%20211.65%20120.269C215.05%20114.77%20222.351%20113.07%20227.851%20116.47C233.351%20119.97%20235.051%20127.17%20231.551%20132.67C228.951%20136.77%20167.551%20234.17%20128.751%20270.17C111.151%20286.37%2087.6508%20292.57%2062.5508%20287.47C38.7879%20282.599%2016.3333%20268.251%200.610352%20248.728C0.205923%20255.991%200%20263.306%200%20270.67C0%20417.821%2081.8329%20545.857%20202.472%20611.758C216.103%20572.514%20233.031%20502.624%20221.55%20478.87C213.35%20461.77%20201.65%20454.269%20189.25%20446.269C177.05%20438.369%20164.45%20430.27%20155.85%20413.87C144.05%20391.27%20139.45%20355.57%20153.95%20333.67C159.85%20324.47%20169.55%20318.269%20180.35%20316.769C187.75%20281.27%20207.65%20259.67%20240.75%20250.67C258.15%20245.87%20275.65%20247.77%20288.45%20249.17C291.35%20249.47%20294.85%20249.87%20297.55%20249.97C299.65%20241.67%20303.65%20228.569%20307.85%20216.47C318.95%20184.17%20324.15%20178.97%20328.45%20176.47C331.85%20174.47%20335.95%20174.17%20339.65%20175.47C352.85%20180.57%20374.65%20217.469%20384.55%20241.769C387.15%20248.269%20390.25%20255.37%20393.65%20262.97C405.25%20289.569%20419.75%20322.67%20423.45%20352.97C423.95%20357.47%20424.35%20361.77%20424.75%20366.07C424.896%20367.708%20425.042%20369.34%20425.197%20370.971C452.561%20363.951%20519.528%20345.234%20556.95%20321.57C576.55%20309.17%20594.851%20273.569%20604.851%20228.769C609.308%20208.709%20611.535%20189.095%20611.555%20172.475C599.995%20178.038%20582.942%20182.163%20562.351%20174.87C559.051%20173.67%20555.851%20172.17%20552.851%20170.27H552.65C543.05%20163.97%20533.851%20152.37%20531.351%20130.97C530.518%20122.812%20530.587%20114.585%20531.614%20106.462C525.399%20106.247%20519.106%20106.155%20512.851%20106.07C503.551%20105.97%20494.051%20105.769%20485.051%20105.269C437.751%20102.469%20418.251%2096.3697%20398.351%2078.1697C393.551%2073.5698%20389.051%2068.6695%20384.751%2063.4696C369.051%2045.1696%20347.451%2020.17%20309.051%2011.3699Z'%20fill='white'/%3e%3c/g%3e%3c!--%20dog%20nose%20--%3e%3cg%20transform='translate(678,%20349.5)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0.840832%200C-0.168727%207.40902%20-2.70583%2033.2281%2011.5332%2042.4922C12.8332%2043.2922%2014.2334%2043.9922%2015.7334%2044.4922C29.0408%2049.3998%2043.8607%2046.9125%2054.9004%2038.2109C53.6839%2032.5755%2051.9959%2027.9168%2049.833%2024.4922C40.0458%208.95509%2021.9145%202.66041%200.840832%200Z'%20fill='%23FCDE96'/%3e%3c/g%3e%3c!--%20dog%20eye%20--%3e%3cg%20transform='translate(441,%20323)'%3e%3cpath%20d='M23.5%2048C36.4787%2048%2047%2037.2548%2047%2024C47%2010.7452%2036.4787%200%2023.5%200C10.5213%200%200%2010.7452%200%2024C0%2037.2548%2010.5213%2048%2023.5%2048Z'%20fill='%23183346'/%3e%3c/g%3e%3c!--%20outline%20circle%20--%3e%3cg%20transform='translate(100,%20100)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M412%200C639.541%200%20824%20184.459%20824%20412C824%20639.541%20639.541%20824%20412%20824C184.459%20824%200%20639.541%200%20412C0%20391.098%201.55708%20370.56%204.56055%20350.494C-7.69969%20298.018%2018.4497%20226.933%2041.4502%20188.3C61.0736%20155.408%2080.9898%20137.585%20113.731%20127.782C188.77%2049.0579%20294.656%200%20412%200ZM360.949%20346.2C354.049%20362.7%20344.35%20393.7%20343.25%20401C342.75%20404%20340.249%20413.8%20326.149%20414.7H323.35C318.75%20414.6%20314.25%20414.2%20309.75%20413.7C298.15%20412.5%20283.749%20410.9%20270.649%20414.5C243.55%20421.8%20230.149%20438.7%20225.649%20470.9C224.849%20476.7%20219.849%20481.1%20213.949%20481.1H210.649C204.55%20481.1%20200.249%20483.3%20197.149%20488C189.25%20499.9%20190.65%20525.7%20200.35%20544.3C206.05%20555.1%20215.149%20560.9%20225.649%20567.7C239.549%20576.7%20255.349%20586.8%20266.449%20609.9C286.049%20650.6%20251.849%20750.7%20247.949%20762C247.725%20762.619%20247.453%20763.212%20247.14%20763.775C297.184%20787.269%20353.058%20800.4%20412%20800.4C475.277%20800.4%20535.017%20785.266%20587.805%20758.424C587.478%20757.878%20587.191%20757.303%20586.95%20756.7C567.25%20706.2%20542.65%20676.7%20501.35%20637.1C431.05%20578%20427.95%20543.2%20424.95%20509.5C424.55%20505.3%20424.25%20501.2%20423.75%20497.1C420.45%20470.3%20407.35%20440.3%20395.75%20413.7C392.35%20406%20389.149%20398.7%20386.449%20391.9C379.849%20375.7%20371.249%20360.4%20360.949%20346.2ZM332.65%20152.7C294.45%20144.7%20221.95%20138.7%20166.55%20142.5C102.65%20148.3%2083.3505%20164.2%2061.8506%20200.4C39.5506%20237.7%2011.7506%20313.4%2031.8506%20357.9C42.5507%20381.6%2066.3504%20400.8%2090.9502%20405.8C103.35%20408.2%20121.25%20408.3%20136.45%20394.3C173.05%20360.5%20234.65%20262.6%20235.25%20261.6C238.65%20256.1%20245.95%20254.4%20251.45%20257.8C256.95%20261.3%20258.65%20268.5%20255.15%20274C252.55%20278.1%20191.151%20375.5%20152.351%20411.5C134.751%20427.7%20111.25%20433.9%2086.1504%20428.8C62.3875%20423.929%2039.9329%20409.581%2024.21%20390.059C23.8055%20397.321%2023.5996%20404.637%2023.5996%20412C23.5996%20559.151%20105.432%20687.187%20226.071%20753.088C239.702%20713.844%20256.63%20643.954%20245.149%20620.2C236.949%20603.1%20225.25%20595.6%20212.85%20587.6C200.65%20579.7%20188.049%20571.6%20179.449%20555.2C167.649%20532.6%20163.05%20496.9%20177.55%20475C183.45%20465.8%20193.149%20459.6%20203.949%20458.1C211.349%20422.6%20231.25%20401%20264.35%20392C281.75%20387.2%20299.25%20389.1%20312.05%20390.5C314.95%20390.8%20318.449%20391.2%20321.149%20391.3C323.249%20383%20327.249%20369.9%20331.449%20357.8C342.549%20325.5%20347.75%20320.3%20352.05%20317.8C355.45%20315.8%20359.55%20315.5%20363.25%20316.8C376.45%20321.9%20398.249%20358.8%20408.149%20383.1C410.749%20389.6%20413.85%20396.7%20417.25%20404.3C428.85%20430.9%20443.35%20464%20447.05%20494.3C447.55%20498.8%20447.95%20503.1%20448.35%20507.4C448.496%20509.038%20448.642%20510.67%20448.797%20512.302C476.16%20505.281%20543.127%20486.564%20580.55%20462.9C600.15%20450.5%20618.45%20414.9%20628.45%20370.1C632.908%20350.039%20635.135%20330.425%20635.154%20313.806C623.595%20319.368%20606.541%20323.493%20585.95%20316.2C582.65%20315%20579.45%20313.501%20576.45%20311.601H576.25C566.65%20305.301%20557.45%20293.7%20554.95%20272.3C554.118%20264.142%20554.187%20255.915%20555.214%20247.792C548.998%20247.578%20542.706%20247.485%20536.45%20247.4C527.15%20247.3%20517.65%20247.1%20508.65%20246.6C461.35%20243.8%20441.85%20237.7%20421.95%20219.5C417.15%20214.9%20412.651%20210%20408.351%20204.8C392.651%20186.5%20371.05%20161.5%20332.65%20152.7ZM412%2023.5996C313.972%2023.5996%20224.427%2059.9163%20156.083%20119.828C158.773%20119.533%20161.528%20119.256%20164.351%20119H164.55C222.05%20114.9%20297.651%20121.3%20337.351%20129.6H337.55C383.55%20140.1%20409.05%20169.8%20425.95%20189.4C429.65%20193.8%20433.45%20198%20437.55%20202.1C451.35%20214.6%20464.451%20220.3%20509.851%20223C518.35%20223.6%20527.15%20223.7%20536.55%20223.8C577.85%20224.5%20624.65%20225.2%20647.45%20261.4C663.35%20286.5%20659.75%20336.7%20651.25%20375.2C646.05%20398.4%20638.55%20420.2%20629.45%20438.1C618.85%20459.1%20606.551%20474.1%20592.851%20482.7C551.327%20508.999%20479.839%20528.601%20452.548%20535.518C458.323%20557.512%20472.98%20582.536%20516.75%20619.3C516.95%20619.5%20517.15%20619.6%20517.35%20619.8C560.077%20660.739%20587.4%20693.287%20608.544%20747.07C723.343%20679.587%20800.4%20554.793%20800.4%20412C800.4%20197.493%20626.507%2023.5996%20412%2023.5996ZM578.758%20249.508C577.748%20256.917%20575.211%20282.736%20589.45%20292C590.75%20292.8%20592.15%20293.5%20593.65%20294C606.958%20298.908%20621.778%20296.42%20632.817%20287.719C631.601%20282.083%20629.913%20277.425%20627.75%20274C617.963%20258.463%20599.832%20252.168%20578.758%20249.508Z'%20fill='%23183346'/%3e%3c/g%3e%3c/svg%3e", h0 = y(
  ({ height: e = 32, color: o = "default", className: t, alt: r = "My Pet+", ...n }, l) => /* @__PURE__ */ c(
    "img",
    {
      ref: l,
      src: b0,
      alt: r,
      className: t,
      style: {
        height: e,
        width: "auto",
        ...o === "white" && { filter: "brightness(0) invert(1)" }
      },
      ...n
    }
  )
);
h0.displayName = "Logotype";
const x0 = y(
  ({ size: e = 40, className: o, alt: t = "My Pet+", ...r }, n) => /* @__PURE__ */ c(
    "img",
    {
      ref: n,
      src: g0,
      alt: t,
      width: e,
      height: e,
      className: b("rounded-md", o),
      style: { width: e, height: e },
      ...r
    }
  )
);
x0.displayName = "Logomark";
const v0 = y(
  ({ className: e, ...o }, t) => /* @__PURE__ */ c(
    "table",
    {
      ref: t,
      className: b(
        "table-fixed border-collapse font-body text-base leading-normal text-text-default",
        e
      ),
      ...o
    }
  )
);
v0.displayName = "Table";
const w0 = y(
  ({ className: e, ...o }, t) => /* @__PURE__ */ c("thead", { ref: t, className: b(e), ...o })
);
w0.displayName = "Thead";
const y0 = y(
  ({ className: e, ...o }, t) => /* @__PURE__ */ c("tbody", { ref: t, className: b(e), ...o })
);
y0.displayName = "Tbody";
const L0 = y(
  ({ className: e, ...o }, t) => /* @__PURE__ */ c("tr", { ref: t, className: b(e), ...o })
);
L0.displayName = "Tr";
const k0 = y(
  ({ className: e, subtitle: o, sortable: t = !1, onSort: r, children: n, ...l }, a) => {
    const s = n != null && n !== !1 && n !== "", i = s && /* @__PURE__ */ L(J1, { children: [
      /* @__PURE__ */ c("span", { className: "font-body font-bold text-base leading-normal text-text-default", children: n }),
      t && /* @__PURE__ */ c(
        I,
        {
          name: "sort",
          size: 20,
          className: "shrink-0 text-text-default"
        }
      )
    ] });
    return /* @__PURE__ */ L(
      "th",
      {
        ref: a,
        className: b(
          "bg-blue-95 text-left align-bottom font-normal",
          e
        ),
        ...l,
        children: [
          o && /* @__PURE__ */ c("div", { className: "pl-xs pt-2xs", children: /* @__PURE__ */ c("span", { className: "font-body font-normal text-xs leading-tight text-text-subtle", children: o }) }),
          s && (t ? /* @__PURE__ */ c(
            "button",
            {
              type: "button",
              onClick: r,
              className: "flex items-start px-xs py-2xs w-full cursor-pointer bg-transparent border-none text-left",
              children: i
            }
          ) : /* @__PURE__ */ c("div", { className: "flex items-start px-xs py-2xs", children: i }))
        ]
      }
    );
  }
);
k0.displayName = "Th";
const M0 = y(
  ({ className: e, ...o }, t) => /* @__PURE__ */ c(
    "td",
    {
      ref: t,
      className: b(
        "bg-bg-default border-t border-border-default",
        "px-xs py-2xs align-top",
        "font-body font-normal text-base leading-normal text-text-default",
        e
      ),
      ...o
    }
  )
);
M0.displayName = "Td";
export {
  a0 as Badge,
  D2 as Button,
  r0 as Checkbox,
  m0 as DataTab,
  d0 as DatePicker,
  $2 as FloatingButton,
  J as FormLabel,
  I as Icon,
  h1 as IconButton,
  x0 as Logomark,
  h0 as Logotype,
  f0 as MobileTab,
  p0 as PageTab,
  t0 as Radio,
  s0 as SearchField,
  q2 as Select,
  u0 as Stepper,
  v0 as Table,
  n0 as Tag,
  y0 as Tbody,
  M0 as Td,
  Y2 as TextField,
  k0 as Th,
  w0 as Thead,
  L0 as Tr,
  l0 as badgeVariants,
  G2 as buttonVariants,
  b as cn,
  W2 as floatingButtonVariants,
  U2 as iconButtonVariants,
  K2 as inputVariants,
  X2 as selectWrapperVariants
};
