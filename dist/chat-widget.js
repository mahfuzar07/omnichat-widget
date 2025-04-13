import ve, { useState as B, useRef as Me, useEffect as $e } from "react";
import mr from "react-dom";
var fe = { exports: {} }, U = {};
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
  var g = ve, l = Symbol.for("react.element"), E = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, d = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(b, p, C) {
    var m, _ = {}, w = null, T = null;
    C !== void 0 && (w = "" + C), p.key !== void 0 && (w = "" + p.key), p.ref !== void 0 && (T = p.ref);
    for (m in p)
      f.call(p, m) && !O.hasOwnProperty(m) && (_[m] = p[m]);
    if (b && b.defaultProps)
      for (m in p = b.defaultProps, p)
        _[m] === void 0 && (_[m] = p[m]);
    return { $$typeof: l, type: b, key: w, ref: T, props: _, _owner: d.current };
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
var We;
function br() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var g = ve, l = Symbol.for("react.element"), E = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), b = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), q = Symbol.iterator, I = "@@iterator";
    function Z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = q && e[q] || e[I];
      return typeof r == "function" ? r : null;
    }
    var k = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Q("error", e, t);
      }
    }
    function Q(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ee = !1, M = !1, re = !1, P = !1, $ = !1, J;
    J = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === O || $ || e === d || e === C || e === m || P || e === T || ee || M || re || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === _ || e.$$typeof === S || e.$$typeof === b || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === J || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function pe(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
            return pe(r) + ".Consumer";
          case S:
            var t = e;
            return pe(t._context) + ".Provider";
          case p:
            return Ve(e, e.render, "ForwardRef");
          case _:
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
    var D = Object.assign, L = 0, he, ge, me, ye, be, xe, Ee;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function Be() {
      {
        if (L === 0) {
          he = console.log, ge = console.info, me = console.warn, ye = console.error, be = console.group, xe = console.groupCollapsed, Ee = console.groupEnd;
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
        L++;
      }
    }
    function qe() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: he
            }),
            info: D({}, e, {
              value: ge
            }),
            warn: D({}, e, {
              value: me
            }),
            error: D({}, e, {
              value: ye
            }),
            group: D({}, e, {
              value: be
            }),
            groupCollapsed: D({}, e, {
              value: xe
            }),
            groupEnd: D({}, e, {
              value: Ee
            })
          });
        }
        L < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = k.ReactCurrentDispatcher, ne;
    function K(e, r, t) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            ne = n && n[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var ae = !1, z;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Je();
    }
    function Re(e, r) {
      if (!e || ae)
        return "";
      {
        var t = z.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ae = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = te.current, te.current = null, Be();
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
                    var R = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, R), R;
                  }
                while (c >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        ae = !1, te.current = u, qe(), Error.prepareStackTrace = s;
      }
      var F = e ? e.displayName || e.name : "", N = F ? K(F) : "";
      return typeof e == "function" && z.set(e, N), N;
    }
    function Ke(e, r, t) {
      return Re(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, ze(e));
      if (typeof e == "string")
        return K(e);
      switch (e) {
        case C:
          return K("Suspense");
        case m:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Ke(e.render);
          case _:
            return G(e.type, r, t);
          case w: {
            var n = e, s = n._payload, u = n._init;
            try {
              return G(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, we = {}, je = k.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    function Ge(e, r, t, n, s) {
      {
        var u = Function.call.bind(W);
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
            a && !(a instanceof Error) && (H(s), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), H(null)), a instanceof Error && !(a.message in we) && (we[a.message] = !0, H(s), h("Failed %s type: %s", t, a.message), H(null));
          }
      }
    }
    var He = Array.isArray;
    function oe(e) {
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
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Ce(e) {
      if (Ze(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), Se(e);
    }
    var Y = k.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Oe, ie;
    ie = {};
    function er(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = j(Y.current.type);
        ie[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(Y.current.type), e.ref), ie[t] = !0);
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          Te || (Te = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Oe || (Oe = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
        t !== void 0 && (Ce(t), a = "" + t), rr(r) && (Ce(r.key), a = "" + r.key), er(r) && (y = r.ref, tr(r, s));
        for (u in r)
          W.call(r, u) && !Qe.hasOwnProperty(u) && (i[u] = r[u]);
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
    var se = k.ReactCurrentOwner, ke = k.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Pe() {
      {
        if (se.current) {
          var e = j(se.current.type);
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
    var De = {};
    function ur(e) {
      {
        var r = Pe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ne(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (De[t])
          return;
        De[t] = !0;
        var n = "";
        e && e._owner && e._owner !== se.current && (n = " It was passed a child from " + j(e._owner.type) + "."), A(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function Ae(e, r) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            le(n) && Ne(n, r);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Z(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), i; !(i = u.next()).done; )
              le(i.value) && Ne(i.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = j(r);
          Ge(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ue) {
          ue = !0;
          var s = j(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Fe = {};
    function Ie(e, r, t, n, s, u) {
      {
        var i = Ue(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = sr(s);
          y ? a += y : a += Pe();
          var c;
          e === null ? c = "null" : oe(e) ? c = "array" : e !== void 0 && e.$$typeof === l ? (c = "<" + (j(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var v = ir(e, r, t, s, u);
        if (v == null)
          return v;
        if (i) {
          var R = r.children;
          if (R !== void 0)
            if (n)
              if (oe(R)) {
                for (var F = 0; F < R.length; F++)
                  Ae(R[F], e);
                Object.freeze && Object.freeze(R);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(R, e);
        }
        if (W.call(r, "key")) {
          var N = j(e), x = Object.keys(r).filter(function(gr) {
            return gr !== "key";
          }), ce = x.length > 0 ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Fe[N + ce]) {
            var hr = x.length > 0 ? "{" + x.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, N, hr, N), Fe[N + ce] = !0;
          }
        }
        return e === f ? cr(v) : lr(v), v;
      }
    }
    function fr(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function dr(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var vr = dr, pr = fr;
    V.Fragment = f, V.jsx = vr, V.jsxs = pr;
  }()), V;
}
process.env.NODE_ENV === "production" ? fe.exports = yr() : fe.exports = br();
var o = fe.exports, de, X = mr;
if (process.env.NODE_ENV === "production")
  de = X.createRoot, X.hydrateRoot;
else {
  var Ye = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  de = function(g, l) {
    Ye.usingClientEntryPoint = !0;
    try {
      return X.createRoot(g, l);
    } finally {
      Ye.usingClientEntryPoint = !1;
    }
  };
}
const xr = ({ title: g, onClose: l, primaryColor: E }) => {
  const f = {
    backgroundColor: E
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "px-4 py-3 text-white flex justify-between items-center", style: f, children: [
    /* @__PURE__ */ o.jsx("h3", { className: "font-medium", children: g }),
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
}, Er = ({ messages: g, primaryColor: l }) => {
  if (g.length === 0)
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
  return /* @__PURE__ */ o.jsx("div", { className: "space-y-3", children: g.map((d) => /* @__PURE__ */ o.jsx("div", { className: `flex ${d.sender === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ o.jsxs(
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
}, _r = ({ onSendMessage: g, isLoading: l, primaryColor: E }) => {
  const [f, d] = B(""), O = (b) => {
    b.preventDefault(), f.trim() && !l && (g(f), d(""));
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
}, Rr = ({
  initialMessages: g = [],
  apiEndpoint: l = "/api/chat",
  widgetTitle: E = "Chat Support",
  primaryColor: f = "#4f46e5",
  position: d = "bottom-right",
  height: O = "500px",
  width: S = "350px"
}) => {
  const [b, p] = B(g), [C, m] = B(!1), [_, w] = B(!1), [T, q] = B(!1), I = Me(null), Z = Me(l);
  $e(() => {
    typeof window < "u" && (q(!0), Z.current = l);
  }, [l]), $e(() => {
    I.current && T && I.current.scrollIntoView({ behavior: "smooth" });
  }, [b, T]);
  const k = async (M) => {
    if (!M.trim() || !T)
      return;
    const re = {
      id: Date.now().toString(),
      content: M,
      sender: "user",
      timestamp: /* @__PURE__ */ new Date()
    };
    p((P) => [...P, re]), w(!0);
    try {
      setTimeout(() => {
        const P = {
          id: (Date.now() + 1).toString(),
          content: `You said: "${M}". This is a simulated response.`,
          sender: "bot",
          timestamp: /* @__PURE__ */ new Date()
        };
        p(($) => [...$, P]), w(!1);
      }, 1e3);
    } catch (P) {
      console.error("Error sending message:", P), w(!1);
      const $ = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, there was an error processing your message.",
        sender: "bot",
        timestamp: /* @__PURE__ */ new Date()
      };
      p((J) => [...J, $]);
    }
  }, h = () => {
    m(!C);
  }, Q = {
    position: "fixed",
    [d === "bottom-right" ? "right" : "left"]: "20px",
    bottom: "20px",
    zIndex: 1e3
  }, ee = {
    backgroundColor: f
  };
  return !T || typeof window > "u" ? null : /* @__PURE__ */ o.jsx("div", { className: "chat-widget-container", style: Q, children: C ? /* @__PURE__ */ o.jsxs("div", { className: "bg-white rounded-lg shadow-xl flex flex-col overflow-hidden", style: { height: O, width: S }, children: [
    /* @__PURE__ */ o.jsx(xr, { title: E, onClose: h, primaryColor: f }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex-1 overflow-y-auto p-4 bg-gray-50", children: [
      /* @__PURE__ */ o.jsx(Er, { messages: b, primaryColor: f }),
      /* @__PURE__ */ o.jsx("div", { ref: I }),
      _ && /* @__PURE__ */ o.jsx("div", { className: "flex justify-center my-2", children: /* @__PURE__ */ o.jsx("div", { className: "dot-typing" }) })
    ] }),
    /* @__PURE__ */ o.jsx(_r, { onSendMessage: k, isLoading: _, primaryColor: f })
  ] }) : /* @__PURE__ */ o.jsx(
    "button",
    {
      onClick: h,
      className: "rounded-full p-4 text-white shadow-lg hover:opacity-90 transition-opacity",
      style: ee,
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
  ) });
};
function wr() {
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx(
    Rr,
    {
      initialMessages: [{ id: "1", content: "Hello! How can I help you today?", sender: "bot" }],
      apiEndpoint: "/api/chat",
      widgetTitle: "Support Chat",
      primaryColor: "#4f46e5"
    }
  ) });
}
if (typeof window < "u") {
  const g = () => {
    const l = document.getElementById("root");
    if (l)
      try {
        de(l).render(
          /* @__PURE__ */ o.jsx(ve.StrictMode, { children: /* @__PURE__ */ o.jsx(wr, {}) })
        );
      } catch (E) {
        console.error("Error rendering app:", E);
      }
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", g) : g();
}
export {
  Rr as ChatWidget
};
