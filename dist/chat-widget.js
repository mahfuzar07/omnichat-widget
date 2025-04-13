import pe, { useState as q, useRef as Me, useEffect as We } from "react";
import mr from "react-dom";
var ve = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function yr() {
  if (Le)
    return U;
  Le = 1;
  var p = pe, l = Symbol.for("react.element"), E = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, d = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(b, h, C) {
    var m, R = {}, w = null, T = null;
    C !== void 0 && (w = "" + C), h.key !== void 0 && (w = "" + h.key), h.ref !== void 0 && (T = h.ref);
    for (m in h)
      f.call(h, m) && !O.hasOwnProperty(m) && (R[m] = h[m]);
    if (b && b.defaultProps)
      for (m in h = b.defaultProps, h)
        R[m] === void 0 && (R[m] = h[m]);
    return { $$typeof: l, type: b, key: w, ref: T, props: R, _owner: d.current };
  }
  return U.Fragment = E, U.jsx = S, U.jsxs = S, U;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function br() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var p = pe, l = Symbol.for("react.element"), E = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), b = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), K = Symbol.iterator, A = "@@iterator";
    function ee(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = K && e[K] || e[A];
      return typeof r == "function" ? r : null;
    }
    var k = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        re("error", e, t);
      }
    }
    function re(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var te = !1, $ = !1, ne = !1, P = !1, M = !1, z;
    z = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === O || M || e === d || e === C || e === m || P || e === T || te || $ || ne || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === R || e.$$typeof === S || e.$$typeof === b || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === z || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function he(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case E:
          return "Portal";
        case O:
          return "Profiler";
        case d:
          return "StrictMode";
        case C:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return he(r) + ".Consumer";
          case S:
            var t = e;
            return he(t._context) + ".Provider";
          case h:
            return Ve(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : j(e.type) || "Memo";
          case w: {
            var s = e, u = s._payload, i = s._init;
            try {
              return j(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, W = 0, ge, me, ye, be, xe, Ee, Re;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function Be() {
      {
        if (W === 0) {
          ge = console.log, me = console.info, ye = console.warn, be = console.error, xe = console.group, Ee = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function qe() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ge
            }),
            info: D({}, e, {
              value: me
            }),
            warn: D({}, e, {
              value: ye
            }),
            error: D({}, e, {
              value: be
            }),
            group: D({}, e, {
              value: xe
            }),
            groupCollapsed: D({}, e, {
              value: Ee
            }),
            groupEnd: D({}, e, {
              value: Re
            })
          });
        }
        W < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = k.ReactCurrentDispatcher, oe;
    function G(e, r, t) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            oe = n && n[1] || "";
          }
        return `
` + oe + e;
      }
    }
    var ie = !1, H;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Je();
    }
    function we(e, r) {
      if (!e || ie)
        return "";
      {
        var t = H.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ie = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = ae.current, ae.current = null, Be();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (x) {
              n = x;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (x) {
              n = x;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            n = x;
          }
          e();
        }
      } catch (x) {
        if (x && n && typeof x.stack == "string") {
          for (var a = x.stack.split(`
`), y = n.stack.split(`
`), c = a.length - 1, v = y.length - 1; c >= 1 && v >= 0 && a[c] !== y[v]; )
            v--;
          for (; c >= 1 && v >= 0; c--, v--)
            if (a[c] !== y[v]) {
              if (c !== 1 || v !== 1)
                do
                  if (c--, v--, v < 0 || a[c] !== y[v]) {
                    var _ = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, _), _;
                  }
                while (c >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        ie = !1, ae.current = u, qe(), Error.prepareStackTrace = s;
      }
      var I = e ? e.displayName || e.name : "", N = I ? G(I) : "";
      return typeof e == "function" && H.set(e, N), N;
    }
    function Ke(e, r, t) {
      return we(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function X(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return we(e, ze(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case C:
          return G("Suspense");
        case m:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return Ke(e.render);
          case R:
            return X(e.type, r, t);
          case w: {
            var n = e, s = n._payload, u = n._init;
            try {
              return X(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, je = {}, Se = k.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var r = e._owner, t = X(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    function Ge(e, r, t, n, s) {
      {
        var u = Function.call.bind(L);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (Z(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), Z(null)), a instanceof Error && !(a.message in je) && (je[a.message] = !0, Z(s), g("Failed %s type: %s", t, a.message), Z(null));
          }
      }
    }
    var He = Array.isArray;
    function se(e) {
      return He(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ze(e) {
      try {
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function Te(e) {
      if (Ze(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), Ce(e);
    }
    var Y = k.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, ke, ue;
    ue = {};
    function er(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = j(Y.current.type);
        ue[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(Y.current.type), e.ref), ue[t] = !0);
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          ke || (ke = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var or = function(e, r, t, n, s, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ir(e, r, t, n, s) {
      {
        var u, i = {}, a = null, y = null;
        t !== void 0 && (Te(t), a = "" + t), rr(r) && (Te(r.key), a = "" + r.key), er(r) && (y = r.ref, tr(r, s));
        for (u in r)
          L.call(r, u) && !Qe.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            i[u] === void 0 && (i[u] = c[u]);
        }
        if (a || y) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && nr(i, v), y && ar(i, v);
        }
        return or(e, a, y, s, n, Y.current, i);
      }
    }
    var le = k.ReactCurrentOwner, Pe = k.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = X(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(t);
      } else
        Pe.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function De() {
      {
        if (le.current) {
          var e = j(le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ne = {};
    function ur(e) {
      {
        var r = De();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Fe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (Ne[t])
          return;
        Ne[t] = !0;
        var n = "";
        e && e._owner && e._owner !== le.current && (n = " It was passed a child from " + j(e._owner.type) + "."), F(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function Ie(e, r) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            fe(n) && Fe(n, r);
          }
        else if (fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = ee(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), i; !(i = u.next()).done; )
              fe(i.value) && Fe(i.value, r);
        }
      }
    }
    function lr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = j(r);
          Ge(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ce) {
          ce = !0;
          var s = j(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var Ae = {};
    function $e(e, r, t, n, s, u) {
      {
        var i = Ue(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = sr(s);
          y ? a += y : a += De();
          var c;
          e === null ? c = "null" : se(e) ? c = "array" : e !== void 0 && e.$$typeof === l ? (c = "<" + (j(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var v = ir(e, r, t, s, u);
        if (v == null)
          return v;
        if (i) {
          var _ = r.children;
          if (_ !== void 0)
            if (n)
              if (se(_)) {
                for (var I = 0; I < _.length; I++)
                  Ie(_[I], e);
                Object.freeze && Object.freeze(_);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(_, e);
        }
        if (L.call(r, "key")) {
          var N = j(e), x = Object.keys(r).filter(function(gr) {
            return gr !== "key";
          }), de = x.length > 0 ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ae[N + de]) {
            var hr = x.length > 0 ? "{" + x.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, de, N, hr, N), Ae[N + de] = !0;
          }
        }
        return e === f ? cr(v) : lr(v), v;
      }
    }
    function fr(e, r, t) {
      return $e(e, r, t, !0);
    }
    function dr(e, r, t) {
      return $e(e, r, t, !1);
    }
    var vr = dr, pr = fr;
    V.Fragment = f, V.jsx = vr, V.jsxs = pr;
  }()), V;
}
process.env.NODE_ENV === "production" ? ve.exports = yr() : ve.exports = br();
var o = ve.exports, J = {}, B = mr;
if (process.env.NODE_ENV === "production")
  J.createRoot = B.createRoot, J.hydrateRoot = B.hydrateRoot;
else {
  var Q = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  J.createRoot = function(p, l) {
    Q.usingClientEntryPoint = !0;
    try {
      return B.createRoot(p, l);
    } finally {
      Q.usingClientEntryPoint = !1;
    }
  }, J.hydrateRoot = function(p, l, E) {
    Q.usingClientEntryPoint = !0;
    try {
      return B.hydrateRoot(p, l, E);
    } finally {
      Q.usingClientEntryPoint = !1;
    }
  };
}
const xr = ({ title: p, onClose: l, primaryColor: E }) => {
  const f = {
    backgroundColor: E
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "px-4 py-3 text-white flex justify-between items-center", style: f, children: [
    /* @__PURE__ */ o.jsx("h3", { className: "font-medium", children: p }),
    /* @__PURE__ */ o.jsx("button", { onClick: l, className: "text-white hover:text-gray-200 transition-colors", "aria-label": "Close chat", children: /* @__PURE__ */ o.jsxs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "lucide lucide-x",
        children: [
          /* @__PURE__ */ o.jsx("path", { d: "M18 6 6 18" }),
          /* @__PURE__ */ o.jsx("path", { d: "m6 6 12 12" })
        ]
      }
    ) })
  ] });
}, Er = ({ messages: p, primaryColor: l }) => {
  if (p.length === 0)
    return /* @__PURE__ */ o.jsx("div", { className: "flex justify-center items-center h-full text-gray-500", children: "Start a conversation..." });
  const E = (d) => d ? new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: !0
  }).format(d) : "", f = {
    backgroundColor: `${l}15`,
    // Using hex with opacity
    borderColor: l
  };
  return /* @__PURE__ */ o.jsx("div", { className: "space-y-3", children: p.map((d) => /* @__PURE__ */ o.jsx("div", { className: `flex ${d.sender === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `max-w-[80%] rounded-lg px-4 py-2 ${d.sender === "user" ? "bg-gray-200 text-gray-800" : "border-l-2 text-gray-800"}`,
      style: d.sender === "bot" ? f : {},
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "text-sm", children: d.content }),
        d.timestamp && /* @__PURE__ */ o.jsx("div", { className: "text-xs text-gray-500 mt-1 text-right", children: E(d.timestamp) })
      ]
    }
  ) }, d.id)) });
}, Rr = ({ onSendMessage: p, isLoading: l, primaryColor: E }) => {
  const [f, d] = q(""), O = (b) => {
    b.preventDefault(), f.trim() && !l && (p(f), d(""));
  }, S = {
    backgroundColor: E
  };
  return /* @__PURE__ */ o.jsx("form", { onSubmit: O, className: "border-t border-gray-200 p-3 bg-white", children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-center", children: [
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "text",
        value: f,
        onChange: (b) => d(b.target.value),
        placeholder: "Type your message...",
        className: "flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none",
        disabled: l
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "submit",
        className: "px-4 h-[42px] text-white rounded-r-lg disabled:opacity-50 flex items-center justify-center",
        style: S,
        disabled: l || !f.trim(),
        children: /* @__PURE__ */ o.jsxs(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "lucide lucide-send",
            children: [
              /* @__PURE__ */ o.jsx("path", { d: "m22 2-7 20-4-9-9-4Z" }),
              /* @__PURE__ */ o.jsx("path", { d: "M22 2 11 13" })
            ]
          }
        )
      }
    )
  ] }) });
}, _r = ({
  initialMessages: p = [],
  apiEndpoint: l = "/api/chat",
  widgetTitle: E = "Chat Support",
  primaryColor: f = "#4f46e5",
  position: d = "bottom-right",
  height: O = "500px",
  width: S = "350px"
}) => {
  const [b, h] = q(p), [C, m] = q(!1), [R, w] = q(!1), [T, K] = q(!1), A = Me(null), ee = Me(l);
  We(() => {
    K(!0), ee.current = l;
  }, [l]), We(() => {
    A.current && T && A.current.scrollIntoView({ behavior: "smooth" });
  }, [b, T]);
  const k = async ($) => {
    if (!$.trim() || !T)
      return;
    const ne = {
      id: Date.now().toString(),
      content: $,
      sender: "user",
      timestamp: /* @__PURE__ */ new Date()
    };
    h((P) => [...P, ne]), w(!0);
    try {
      setTimeout(() => {
        const P = {
          id: (Date.now() + 1).toString(),
          content: `You said: "${$}". This is a simulated response.`,
          sender: "bot",
          timestamp: /* @__PURE__ */ new Date()
        };
        h((M) => [...M, P]), w(!1);
      }, 1e3);
    } catch (P) {
      console.error("Error sending message:", P), w(!1);
      const M = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, there was an error processing your message.",
        sender: "bot",
        timestamp: /* @__PURE__ */ new Date()
      };
      h((z) => [...z, M]);
    }
  }, g = () => {
    m(!C);
  }, re = {
    position: "fixed",
    [d === "bottom-right" ? "right" : "left"]: "20px",
    bottom: "20px",
    zIndex: 1e3
  }, te = {
    backgroundColor: f
  };
  return T ? /* @__PURE__ */ o.jsx("div", { className: "chat-widget-container", style: re, children: C ? /* @__PURE__ */ o.jsxs("div", { className: "bg-white rounded-lg shadow-xl flex flex-col overflow-hidden", style: { height: O, width: S }, children: [
    /* @__PURE__ */ o.jsx(xr, { title: E, onClose: g, primaryColor: f }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex-1 overflow-y-auto p-4 bg-gray-50", children: [
      /* @__PURE__ */ o.jsx(Er, { messages: b, primaryColor: f }),
      /* @__PURE__ */ o.jsx("div", { ref: A }),
      R && /* @__PURE__ */ o.jsx("div", { className: "flex justify-center my-2", children: /* @__PURE__ */ o.jsx("div", { className: "dot-typing" }) })
    ] }),
    /* @__PURE__ */ o.jsx(Rr, { onSendMessage: k, isLoading: R, primaryColor: f })
  ] }) : /* @__PURE__ */ o.jsx(
    "button",
    {
      onClick: g,
      className: "rounded-full p-4 text-white shadow-lg hover:opacity-90 transition-opacity",
      style: te,
      "aria-label": "Open chat",
      children: /* @__PURE__ */ o.jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "lucide lucide-message-circle",
          children: /* @__PURE__ */ o.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
        }
      )
    }
  ) }) : null;
};
function wr() {
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(
    _r,
    {
      initialMessages: [{ id: "1", content: "Hello! How can I help you today?", sender: "bot" }],
      apiEndpoint: "/api/chat",
      widgetTitle: "Support Chat",
      primaryColor: "#4f46e5"
    }
  ) });
}
if (typeof window < "u") {
  const p = document.getElementById("root");
  p && J.createRoot(p).render(
    /* @__PURE__ */ o.jsx(pe.StrictMode, { children: /* @__PURE__ */ o.jsx(wr, {}) })
  );
}
export {
  _r as ChatWidget
};
