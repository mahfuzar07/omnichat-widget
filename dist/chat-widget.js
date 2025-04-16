import M, { useState as L, useRef as ne, useEffect as ae } from "react";
import Lt from "react-dom";
var ve = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Wt() {
  if (Ve)
    return q;
  Ve = 1;
  var t = M, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(m, f, x) {
    var w, v = {}, S = null, O = null;
    x !== void 0 && (S = "" + x), f.key !== void 0 && (S = "" + f.key), f.ref !== void 0 && (O = f.ref);
    for (w in f)
      o.call(f, w) && !l.hasOwnProperty(w) && (v[w] = f[w]);
    if (m && m.defaultProps)
      for (w in f = m.defaultProps, f)
        v[w] === void 0 && (v[w] = f[w]);
    return { $$typeof: n, type: m, key: S, ref: O, props: v, _owner: c.current };
  }
  return q.Fragment = a, q.jsx = y, q.jsxs = y, q;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Ut() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var t = M, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), m = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), j = Symbol.iterator, h = "@@iterator";
    function _(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = j && e[j] || e[h];
      return typeof s == "function" ? s : null;
    }
    var T = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++)
          i[u - 1] = arguments[u];
        N("error", e, i);
      }
    }
    function N(e, s, i) {
      {
        var u = T.ReactDebugCurrentFrame, b = u.getStackAddendum();
        b !== "" && (s += "%s", i = i.concat([b]));
        var E = i.map(function(g) {
          return String(g);
        });
        E.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var D = !1, $ = !1, oe = !1, P = !1, lt = !1, je;
    je = Symbol.for("react.module.reference");
    function ct(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === l || lt || e === c || e === x || e === w || P || e === O || D || $ || oe || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === v || e.$$typeof === y || e.$$typeof === m || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === je || e.getModuleId !== void 0));
    }
    function ut(e, s, i) {
      var u = e.displayName;
      if (u)
        return u;
      var b = s.displayName || s.name || "";
      return b !== "" ? i + "(" + b + ")" : i;
    }
    function Ee(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case a:
          return "Portal";
        case l:
          return "Profiler";
        case c:
          return "StrictMode";
        case x:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var s = e;
            return Ee(s) + ".Consumer";
          case y:
            var i = e;
            return Ee(i._context) + ".Provider";
          case f:
            return ut(e, e.render, "ForwardRef");
          case v:
            var u = e.displayName || null;
            return u !== null ? u : F(e.type) || "Memo";
          case S: {
            var b = e, E = b._payload, g = b._init;
            try {
              return F(g(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, V = 0, Se, _e, Re, Oe, Ce, Ne, Pe;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function dt() {
      {
        if (V === 0) {
          Se = console.log, _e = console.info, Re = console.warn, Oe = console.error, Ce = console.group, Ne = console.groupCollapsed, Pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Te,
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
        V++;
      }
    }
    function ft() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, e, {
              value: Se
            }),
            info: z({}, e, {
              value: _e
            }),
            warn: z({}, e, {
              value: Re
            }),
            error: z({}, e, {
              value: Oe
            }),
            group: z({}, e, {
              value: Ce
            }),
            groupCollapsed: z({}, e, {
              value: Ne
            }),
            groupEnd: z({}, e, {
              value: Pe
            })
          });
        }
        V < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = T.ReactCurrentDispatcher, ce;
    function Z(e, s, i) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (b) {
            var u = b.stack.trim().match(/\n( *(at )?)/);
            ce = u && u[1] || "";
          }
        return `
` + ce + e;
      }
    }
    var ue = !1, Q;
    {
      var mt = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new mt();
    }
    function ke(e, s) {
      if (!e || ue)
        return "";
      {
        var i = Q.get(e);
        if (i !== void 0)
          return i;
      }
      var u;
      ue = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = le.current, le.current = null, dt();
      try {
        if (s) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (I) {
              u = I;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (I) {
              u = I;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            u = I;
          }
          e();
        }
      } catch (I) {
        if (I && u && typeof I.stack == "string") {
          for (var p = I.stack.split(`
`), k = u.stack.split(`
`), R = p.length - 1, C = k.length - 1; R >= 1 && C >= 0 && p[R] !== k[C]; )
            C--;
          for (; R >= 1 && C >= 0; R--, C--)
            if (p[R] !== k[C]) {
              if (R !== 1 || C !== 1)
                do
                  if (R--, C--, C < 0 || p[R] !== k[C]) {
                    var A = `
` + p[R].replace(" at new ", " at ");
                    return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, A), A;
                  }
                while (R >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        ue = !1, le.current = E, ft(), Error.prepareStackTrace = b;
      }
      var H = e ? e.displayName || e.name : "", Y = H ? Z(H) : "";
      return typeof e == "function" && Q.set(e, Y), Y;
    }
    function pt(e, s, i) {
      return ke(e, !1);
    }
    function ht(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function ee(e, s, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ke(e, ht(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case x:
          return Z("Suspense");
        case w:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return pt(e.render);
          case v:
            return ee(e.type, s, i);
          case S: {
            var u = e, b = u._payload, E = u._init;
            try {
              return ee(E(b), s, i);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Ie = {}, De = T.ReactDebugCurrentFrame;
    function te(e) {
      if (e) {
        var s = e._owner, i = ee(e.type, e._source, s ? s.type : null);
        De.setExtraStackFrame(i);
      } else
        De.setExtraStackFrame(null);
    }
    function gt(e, s, i, u, b) {
      {
        var E = Function.call.bind(J);
        for (var g in e)
          if (E(e, g)) {
            var p = void 0;
            try {
              if (typeof e[g] != "function") {
                var k = Error((u || "React class") + ": " + i + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              p = e[g](s, g, u, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              p = R;
            }
            p && !(p instanceof Error) && (te(b), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", i, g, typeof p), te(null)), p instanceof Error && !(p.message in Ie) && (Ie[p.message] = !0, te(b), d("Failed %s type: %s", i, p.message), te(null));
          }
      }
    }
    var xt = Array.isArray;
    function de(e) {
      return xt(e);
    }
    function vt(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, i = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function bt(e) {
      try {
        return Ae(e), !1;
      } catch {
        return !0;
      }
    }
    function Ae(e) {
      return "" + e;
    }
    function Me(e) {
      if (bt(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vt(e)), Ae(e);
    }
    var K = T.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Le, fe;
    fe = {};
    function wt(e) {
      if (J.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function jt(e) {
      if (J.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Et(e, s) {
      if (typeof e.ref == "string" && K.current && s && K.current.stateNode !== s) {
        var i = F(K.current.type);
        fe[i] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(K.current.type), e.ref), fe[i] = !0);
      }
    }
    function St(e, s) {
      {
        var i = function() {
          Fe || (Fe = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function _t(e, s) {
      {
        var i = function() {
          Le || (Le = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Rt = function(e, s, i, u, b, E, g) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: i,
        props: g,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(p, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function Ot(e, s, i, u, b) {
      {
        var E, g = {}, p = null, k = null;
        i !== void 0 && (Me(i), p = "" + i), jt(s) && (Me(s.key), p = "" + s.key), wt(s) && (k = s.ref, Et(s, b));
        for (E in s)
          J.call(s, E) && !yt.hasOwnProperty(E) && (g[E] = s[E]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (E in R)
            g[E] === void 0 && (g[E] = R[E]);
        }
        if (p || k) {
          var C = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && St(g, C), k && _t(g, C);
        }
        return Rt(e, p, k, b, u, K.current, g);
      }
    }
    var me = T.ReactCurrentOwner, We = T.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var s = e._owner, i = ee(e.type, e._source, s ? s.type : null);
        We.setExtraStackFrame(i);
      } else
        We.setExtraStackFrame(null);
    }
    var pe;
    pe = !1;
    function he(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Ue() {
      {
        if (me.current) {
          var e = F(me.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ct(e) {
      {
        if (e !== void 0) {
          var s = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + s + ":" + i + ".";
        }
        return "";
      }
    }
    var $e = {};
    function Nt(e) {
      {
        var s = Ue();
        if (!s) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (s = `

Check the top-level render call using <` + i + ">.");
        }
        return s;
      }
    }
    function ze(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = Nt(s);
        if ($e[i])
          return;
        $e[i] = !0;
        var u = "";
        e && e._owner && e._owner !== me.current && (u = " It was passed a child from " + F(e._owner.type) + "."), B(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, u), B(null);
      }
    }
    function Ye(e, s) {
      {
        if (typeof e != "object")
          return;
        if (de(e))
          for (var i = 0; i < e.length; i++) {
            var u = e[i];
            he(u) && ze(u, s);
          }
        else if (he(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = _(e);
          if (typeof b == "function" && b !== e.entries)
            for (var E = b.call(e), g; !(g = E.next()).done; )
              he(g.value) && ze(g.value, s);
        }
      }
    }
    function Pt(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var i;
        if (typeof s == "function")
          i = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === v))
          i = s.propTypes;
        else
          return;
        if (i) {
          var u = F(s);
          gt(i, e.props, "prop", u, e);
        } else if (s.PropTypes !== void 0 && !pe) {
          pe = !0;
          var b = F(s);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(e) {
      {
        for (var s = Object.keys(e.props), i = 0; i < s.length; i++) {
          var u = s[i];
          if (u !== "children" && u !== "key") {
            B(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), B(null);
            break;
          }
        }
        e.ref !== null && (B(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    var Be = {};
    function He(e, s, i, u, b, E) {
      {
        var g = ct(e);
        if (!g) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = Ct(b);
          k ? p += k : p += Ue();
          var R;
          e === null ? R = "null" : de(e) ? R = "array" : e !== void 0 && e.$$typeof === n ? (R = "<" + (F(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, p);
        }
        var C = Ot(e, s, i, b, E);
        if (C == null)
          return C;
        if (g) {
          var A = s.children;
          if (A !== void 0)
            if (u)
              if (de(A)) {
                for (var H = 0; H < A.length; H++)
                  Ye(A[H], e);
                Object.freeze && Object.freeze(A);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(A, e);
        }
        if (J.call(s, "key")) {
          var Y = F(e), I = Object.keys(s).filter(function(Ft) {
            return Ft !== "key";
          }), ge = I.length > 0 ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Be[Y + ge]) {
            var Mt = I.length > 0 ? "{" + I.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ge, Y, Mt, Y), Be[Y + ge] = !0;
          }
        }
        return e === o ? Tt(C) : Pt(C), C;
      }
    }
    function kt(e, s, i) {
      return He(e, s, i, !0);
    }
    function It(e, s, i) {
      return He(e, s, i, !1);
    }
    var Dt = It, At = kt;
    G.Fragment = o, G.jsx = Dt, G.jsxs = At;
  }()), G;
}
process.env.NODE_ENV === "production" ? ve.exports = Wt() : ve.exports = Ut();
var r = ve.exports, be, re = Lt;
if (process.env.NODE_ENV === "production")
  be = re.createRoot, re.hydrateRoot;
else {
  var Ke = re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  be = function(t, n) {
    Ke.usingClientEntryPoint = !0;
    try {
      return re.createRoot(t, n);
    } finally {
      Ke.usingClientEntryPoint = !1;
    }
  };
}
var et = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, qe = M.createContext && /* @__PURE__ */ M.createContext(et), $t = ["attr", "size", "title"];
function zt(t, n) {
  if (t == null)
    return {};
  var a = Yt(t, n), o, c;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    for (c = 0; c < l.length; c++)
      o = l[c], !(n.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (a[o] = t[o]);
  }
  return a;
}
function Yt(t, n) {
  if (t == null)
    return {};
  var a = {};
  for (var o in t)
    if (Object.prototype.hasOwnProperty.call(t, o)) {
      if (n.indexOf(o) >= 0)
        continue;
      a[o] = t[o];
    }
  return a;
}
function se() {
  return se = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var a = arguments[n];
      for (var o in a)
        Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o]);
    }
    return t;
  }, se.apply(this, arguments);
}
function Ge(t, n) {
  var a = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    n && (o = o.filter(function(c) {
      return Object.getOwnPropertyDescriptor(t, c).enumerable;
    })), a.push.apply(a, o);
  }
  return a;
}
function ie(t) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ge(Object(a), !0).forEach(function(o) {
      Bt(t, o, a[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Ge(Object(a)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(a, o));
    });
  }
  return t;
}
function Bt(t, n, a) {
  return n = Ht(n), n in t ? Object.defineProperty(t, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = a, t;
}
function Ht(t) {
  var n = Vt(t, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Vt(t, n) {
  if (typeof t != "object" || !t)
    return t;
  var a = t[Symbol.toPrimitive];
  if (a !== void 0) {
    var o = a.call(t, n || "default");
    if (typeof o != "object")
      return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(t);
}
function tt(t) {
  return t && t.map((n, a) => /* @__PURE__ */ M.createElement(n.tag, ie({
    key: a
  }, n.attr), tt(n.child)));
}
function U(t) {
  return (n) => /* @__PURE__ */ M.createElement(Jt, se({
    attr: ie({}, t.attr)
  }, n), tt(t.child));
}
function Jt(t) {
  var n = (a) => {
    var {
      attr: o,
      size: c,
      title: l
    } = t, y = zt(t, $t), m = c || a.size || "1em", f;
    return a.className && (f = a.className), t.className && (f = (f ? f + " " : "") + t.className), /* @__PURE__ */ M.createElement("svg", se({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, o, y, {
      className: f,
      style: ie(ie({
        color: t.color || a.color
      }, a.style), t.style),
      height: m,
      width: m,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && /* @__PURE__ */ M.createElement("title", null, l), t.children);
  };
  return qe !== void 0 ? /* @__PURE__ */ M.createElement(qe.Consumer, null, (a) => n(a)) : n(et);
}
function Kt(t) {
  return U({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M408.67 298.53a21 21 0 1 1 20.9-21 20.85 20.85 0 0 1-20.9 21m-102.17 0a21 21 0 1 1 20.9-21 20.84 20.84 0 0 1-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35 68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7 2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 0 1 8.13 2.34L454 462.83a11.62 11.62 0 0 0 3.48 1.17 5 5 0 0 0 4.65-4.66 14.27 14.27 0 0 0-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94 18.94 0 0 1-.33-3.47 11.4 11.4 0 0 1 5-9.35" }, child: [] }, { tag: "path", attr: { d: "M246.13 178.51a24.47 24.47 0 0 1 0-48.94c12.77 0 24.38 11.65 24.38 24.47 1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 1 1 147.45 154a24.57 24.57 0 0 1-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.38 11.38 0 0 1-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 0 0 5.8 5.83 7.15 7.15 0 0 0 3.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.33 16.33 0 0 1 5.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.24 133.24 0 0 1-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48" }, child: [] }] })(t);
}
const Xe = (t) => {
  let n;
  const a = /* @__PURE__ */ new Set(), o = (x, w) => {
    const v = typeof x == "function" ? x(n) : x;
    if (!Object.is(v, n)) {
      const S = n;
      n = w ?? (typeof v != "object" || v === null) ? v : Object.assign({}, n, v), a.forEach((O) => O(n, S));
    }
  }, c = () => n, m = { setState: o, getState: c, getInitialState: () => f, subscribe: (x) => (a.add(x), () => a.delete(x)) }, f = n = t(o, c, m);
  return m;
}, qt = (t) => t ? Xe(t) : Xe, Gt = (t) => t;
function Xt(t, n = Gt) {
  const a = M.useSyncExternalStore(
    t.subscribe,
    () => n(t.getState()),
    () => n(t.getInitialState())
  );
  return M.useDebugValue(a), a;
}
const Ze = (t) => {
  const n = qt(t), a = (o) => Xt(n, o);
  return Object.assign(a, n), a;
}, we = (t) => t ? Ze(t) : Ze;
function rt(t, n) {
  let a;
  try {
    a = t();
  } catch {
    return;
  }
  return {
    getItem: (c) => {
      var l;
      const y = (f) => f === null ? null : JSON.parse(f, n == null ? void 0 : n.reviver), m = (l = a.getItem(c)) != null ? l : null;
      return m instanceof Promise ? m.then(y) : y(m);
    },
    setItem: (c, l) => a.setItem(
      c,
      JSON.stringify(l, n == null ? void 0 : n.replacer)
    ),
    removeItem: (c) => a.removeItem(c)
  };
}
const ye = (t) => (n) => {
  try {
    const a = t(n);
    return a instanceof Promise ? a : {
      then(o) {
        return ye(o)(a);
      },
      catch(o) {
        return this;
      }
    };
  } catch (a) {
    return {
      then(o) {
        return this;
      },
      catch(o) {
        return ye(o)(a);
      }
    };
  }
}, Zt = (t, n) => (a, o, c) => {
  let l = {
    storage: rt(() => localStorage),
    partialize: (h) => h,
    version: 0,
    merge: (h, _) => ({
      ..._,
      ...h
    }),
    ...n
  }, y = !1;
  const m = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set();
  let x = l.storage;
  if (!x)
    return t(
      (...h) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`
        ), a(...h);
      },
      o,
      c
    );
  const w = () => {
    const h = l.partialize({ ...o() });
    return x.setItem(l.name, {
      state: h,
      version: l.version
    });
  }, v = c.setState;
  c.setState = (h, _) => {
    v(h, _), w();
  };
  const S = t(
    (...h) => {
      a(...h), w();
    },
    o,
    c
  );
  c.getInitialState = () => S;
  let O;
  const j = () => {
    var h, _;
    if (!x)
      return;
    y = !1, m.forEach((d) => {
      var N;
      return d((N = o()) != null ? N : S);
    });
    const T = ((_ = l.onRehydrateStorage) == null ? void 0 : _.call(l, (h = o()) != null ? h : S)) || void 0;
    return ye(x.getItem.bind(x))(l.name).then((d) => {
      if (d)
        if (typeof d.version == "number" && d.version !== l.version) {
          if (l.migrate) {
            const N = l.migrate(
              d.state,
              d.version
            );
            return N instanceof Promise ? N.then((D) => [!0, D]) : [!0, N];
          }
          console.error(
            "State loaded from storage couldn't be migrated since no migrate function was provided"
          );
        } else
          return [!1, d.state];
      return [!1, void 0];
    }).then((d) => {
      var N;
      const [D, $] = d;
      if (O = l.merge(
        $,
        (N = o()) != null ? N : S
      ), a(O, !0), D)
        return w();
    }).then(() => {
      T == null || T(O, void 0), O = o(), y = !0, f.forEach((d) => d(O));
    }).catch((d) => {
      T == null || T(void 0, d);
    });
  };
  return c.persist = {
    setOptions: (h) => {
      l = {
        ...l,
        ...h
      }, h.storage && (x = h.storage);
    },
    clearStorage: () => {
      x == null || x.removeItem(l.name);
    },
    getOptions: () => l,
    rehydrate: () => j(),
    hasHydrated: () => y,
    onHydrate: (h) => (m.add(h), () => {
      m.delete(h);
    }),
    onFinishHydration: (h) => (f.add(h), () => {
      f.delete(h);
    })
  }, l.skipHydration || j(), O || S;
}, Qt = Zt, Qe = we((t) => ({
  widgetOpen: !1,
  toggleWidget: () => t((n) => ({ widgetOpen: !n.widgetOpen })),
  openWidget: () => t({ widgetOpen: !0 }),
  closeWidget: () => t({ widgetOpen: !1 })
})), X = we((t) => ({
  selectedPage: null,
  setSelectedPage: (n) => t({ selectedPage: n })
})), W = we()(
  Qt(
    (t) => ({
      // Default values
      widgetTitle: "Hi there 👋",
      primaryColor: "#4f46e5",
      position: "bottom-right",
      height: "90vh",
      width: "385px",
      messages: [],
      apiEndpoint: "/api/chat",
      // Actions to update the state
      setWidgetTitle: (n) => t({ widgetTitle: n }),
      setPrimaryColor: (n) => t({ primaryColor: n }),
      setPosition: (n) => t({ position: n }),
      setDimensions: (n, a) => t({ height: n, width: a }),
      addMessage: (n) => t((a) => ({
        messages: [...a.messages, n]
      })),
      clearMessages: () => t({ messages: [] }),
      setApiEndpoint: (n) => t({ apiEndpoint: n })
    }),
    {
      name: "chat-widget-storage",
      storage: typeof window < "u" ? rt(() => localStorage) : void 0
    }
  )
);
function nt(t) {
  return U({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" }, child: [] }] })(t);
}
function er(t) {
  return U({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, child: [] }] })(t);
}
function at(t) {
  return U({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z" }, child: [] }] })(t);
}
function tr(t) {
  return U({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z" }, child: [] }] })(t);
}
function st() {
  const t = X((a) => a.setSelectedPage), n = [
    { id: 1, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 2, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 3, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 4, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 5, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" }
  ];
  return /* @__PURE__ */ r.jsxs("div", { className: "p-4 bg-white rounded-xl shadow-md text-center border border-slate-100", children: [
    /* @__PURE__ */ r.jsx("h2", { className: "text-lg font-semibold mb-2 text-slate-700", children: "Start a new conversation" }),
    /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-500 mb-4", children: "Our agents typically reply in a few minutes." }),
    /* @__PURE__ */ r.jsx("div", { className: "flex -space-x-2 mb-4 justify-center", children: n.map((a) => /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 rounded-full border-2 border-white overflow-hidden", children: /* @__PURE__ */ r.jsx("img", { src: a.imageUrl, alt: `Agent ${a.id}`, className: "w-full h-full object-cover" }) }, a.id)) }),
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        className: "w-full flex items-center justify-center space-x-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors text-sm",
        onClick: () => t("conversation"),
        children: [
          /* @__PURE__ */ r.jsx(tr, {}),
          /* @__PURE__ */ r.jsx("span", { children: "Send us a message" })
        ]
      }
    )
  ] });
}
function xe(t) {
  return U({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z" }, child: [] }] })(t);
}
function it() {
  return /* @__PURE__ */ r.jsxs("div", { className: "py-4 px-3 bg-white rounded-xl shadow-md border border-slate-100", children: [
    /* @__PURE__ */ r.jsx("h2", { className: "text-lg font-semibold mb-2 text-slate-700 px-2", children: "Find an answer easily" }),
    /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-500 mb-4 px-2", children: "If you're in a hurry, send us a message and we will get back to you asap" }),
    /* @__PURE__ */ r.jsx("h2", { className: "text-base font-semibold mb-2 text-slate-500 px-1.5", children: "Suggested articles" }),
    /* @__PURE__ */ r.jsxs("ul", { className: "mt-3 space-y-1 text-sm", children: [
      /* @__PURE__ */ r.jsxs("li", { className: "py-2 px-1.5 hover:bg-slate-200 cursor-pointer flex items-center justify-between rounded text-slate-700", children: [
        /* @__PURE__ */ r.jsxs("span", { className: "line-clamp-1", children: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum perspiciatis porro at, rem impedit libero error natus tempore commodi veritatis aperiam dolores explicabo? Tempora!",
          " "
        ] }),
        /* @__PURE__ */ r.jsx(xe, { className: "ml-5 flex-shrink-0 text-[10px]" })
      ] }),
      /* @__PURE__ */ r.jsxs("li", { className: "py-2 px-1.5 hover:bg-slate-200 cursor-pointer flex items-center justify-between rounded text-slate-700", children: [
        /* @__PURE__ */ r.jsxs("span", { className: "line-clamp-1", children: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum perspiciatis porro at, rem impedit libero error natus tempore commodi veritatis aperiam dolores explicabo? Tempora!",
          " "
        ] }),
        /* @__PURE__ */ r.jsx(xe, { className: "ml-5 flex-shrink-0 text-[10px]" })
      ] }),
      /* @__PURE__ */ r.jsxs("li", { className: "py-2 px-1.5 hover:bg-slate-200 cursor-pointer flex items-center justify-between rounded text-slate-700", children: [
        /* @__PURE__ */ r.jsxs("span", { className: "line-clamp-1", children: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum perspiciatis porro at, rem impedit libero error natus tempore commodi veritatis aperiam dolores explicabo? Tempora!",
          " "
        ] }),
        /* @__PURE__ */ r.jsx(xe, { className: "ml-5 flex-shrink-0 text-[10px]" })
      ] })
    ] })
  ] });
}
function ot() {
  const t = X((n) => n.setSelectedPage);
  return /* @__PURE__ */ r.jsxs("div", { className: "p-4 bg-white rounded-xl shadow-md  border border-slate-100", children: [
    /* @__PURE__ */ r.jsx("h2", { className: "text-lg font-semibold mb-2 text-slate-700", children: "Send us an email" }),
    /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-500 mb-4", children: "If you're in a hurry, send us a message and we will get back to you asap" }),
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        className: "w-full flex items-center justify-center space-x-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors text-sm",
        onClick: () => t("contact"),
        children: [
          /* @__PURE__ */ r.jsx(nt, {}),
          /* @__PURE__ */ r.jsx("span", { children: "Send Email" })
        ]
      }
    )
  ] });
}
function rr() {
  const { widgetTitle: t, primaryColor: n } = W();
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { className: "text-white flex items-center h-60", style: { backgroundColor: n }, children: /* @__PURE__ */ r.jsxs("div", { className: "h-36 relative !z-[20] px-5 py-2 max-w-sm mr-[45px]", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "font-bold text-3xl mb-2", children: t }),
      /* @__PURE__ */ r.jsx("p", { className: "font-medium text-white/80", children: "Ask us anything, or share your valuable feedback with us." })
    ] }) }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex-1 overflow-y-auto px-4 py-1 bg-transparent space-y-5 z-10 relative -mt-12", children: [
      /* @__PURE__ */ r.jsx(st, {}),
      /* @__PURE__ */ r.jsx(it, {}),
      /* @__PURE__ */ r.jsx(ot, {})
    ] })
  ] });
}
function nr() {
  const t = X((j) => j.setSelectedPage), { primaryColor: n } = W(), a = [
    { id: 1, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 2, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 3, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 4, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 5, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" }
  ], [o, c] = L(""), [l, y] = L(""), [m, f] = L(""), [x, w] = L(""), [v, S] = L(!1), O = async (j) => {
    j.preventDefault(), S(!0);
    try {
      await new Promise((h) => setTimeout(h, 1500)), console.log({ name: o, email: l, subject: m, message: x }), alert("Message sent successfully!"), c(""), y(""), f(""), w("");
    } catch (h) {
      console.error("Failed to send message:", h), alert("Something went wrong.");
    } finally {
      S(!1);
    }
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { className: "text-white flex items-center py-3 relative", style: { backgroundColor: n }, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "relative px-5 py-2 max-w-sm mx-auto text-center", children: [
        /* @__PURE__ */ r.jsx("div", { className: "flex -space-x-2 mb-2 justify-center", children: a.map((j) => /* @__PURE__ */ r.jsx("div", { className: "w-11 h-11 rounded-full bg-white border-2 border-white overflow-hidden", children: /* @__PURE__ */ r.jsx("img", { src: j.imageUrl, alt: `Agent ${j.id}`, className: "w-full h-full object-cover" }) }, j.id)) }),
        /* @__PURE__ */ r.jsx("h3", { className: "font-medium text-lg", children: "How can we help?" }),
        /* @__PURE__ */ r.jsx("p", { className: "text-white/80 text-sm", children: "We usually respond in a few hours." })
      ] }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "text-white absolute left-2 top-3 bg-white/20 p-2 rounded-full flex items-center justify-center hover:text-gray-200 transition-colors ",
          "aria-label": "contact",
          onClick: () => t(null),
          children: /* @__PURE__ */ r.jsx(at, { className: "text-lg" })
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-y-auto px-4 py-2 bg-transparent space-y-5 z-10 relative", children: /* @__PURE__ */ r.jsxs("form", { onSubmit: O, className: "py-4 space-y-3 rounded-md shadow-sm max-w-lg mx-auto text-sm", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "text",
          value: o,
          onChange: (j) => c(j.target.value),
          placeholder: "Your name",
          className: "w-full  border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-600 text-black placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm",
          disabled: v,
          required: !0
        }
      ),
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "email",
          value: l,
          onChange: (j) => y(j.target.value),
          placeholder: "Your email address",
          className: "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none text-black placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm focus:ring-1 focus:ring-gray-600",
          disabled: v,
          required: !0
        }
      ),
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "text",
          value: m,
          onChange: (j) => f(j.target.value),
          placeholder: "Subject",
          className: "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none text-black placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm focus:ring-1 focus:ring-gray-600",
          disabled: v
        }
      ),
      /* @__PURE__ */ r.jsx(
        "textarea",
        {
          value: x,
          onChange: (j) => w(j.target.value),
          placeholder: "Your message...",
          className: "w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none text-black min-h-[100px] placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm focus:ring-1 focus:ring-gray-600",
          disabled: v,
          required: !0
        }
      ),
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "submit",
          className: "w-full flex items-center justify-center space-x-2 bg-black text-white py-3 px-4 rounded hover:bg-gray-800 transition-colors text-sm disabled:opacity-50",
          disabled: v || !o || !l || !x,
          children: [
            /* @__PURE__ */ r.jsx(nt, {}),
            /* @__PURE__ */ r.jsx("span", { children: v ? "Sending..." : "Send Email" })
          ]
        }
      )
    ] }) })
  ] });
}
function ar() {
  const { widgetTitle: t, primaryColor: n } = W();
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { className: "text-white flex items-center h-60", style: { backgroundColor: n }, children: /* @__PURE__ */ r.jsxs("div", { className: "h-36 relative !z-[20] px-5 py-2 max-w-sm mr-[45px]", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "font-bold text-3xl mb-2", children: t }),
      /* @__PURE__ */ r.jsx("p", { className: "font-medium text-white/80", children: "Ask us anything, or share your valuable feedback with us." })
    ] }) }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex-1 overflow-y-auto px-4 py-1 bg-transparent space-y-5 z-10 relative -mt-12", children: [
      /* @__PURE__ */ r.jsx(st, {}),
      /* @__PURE__ */ r.jsx(it, {}),
      /* @__PURE__ */ r.jsx(ot, {})
    ] })
  ] });
}
const sr = ({ messages: t }) => {
  if (t.length === 0)
    return /* @__PURE__ */ r.jsx("div", { className: "flex justify-center items-center h-full text-gray-500", children: "Start a conversation..." });
  const n = (a) => a ? new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: !0
  }).format(a) : "";
  return /* @__PURE__ */ r.jsx("div", { className: "space-y-3 w-full", children: t.map((a) => /* @__PURE__ */ r.jsxs("div", { className: `flex  ${a.sender === "user" ? "justify-end" : "justify-start items-end gap-2"}`, children: [
    a.sender === "bot" && /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center w-[35px] h-[35px] bg-white/20 shadow-xl rounded-full", children: /* @__PURE__ */ r.jsx("img", { src: "./bot.png", alt: "avatar", className: "w-full h-full object-cover" }) }),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `max-w-[80%] rounded px-2 py-1 shadow ${a.sender === "user" ? "bg-blue-100 text-gray-800" : "bg-white text-gray-900"}`,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "text-sm", children: a.content }),
          a.timestamp && /* @__PURE__ */ r.jsx("div", { className: "text-[10px] text-gray-500 text-right", children: n(a.timestamp) })
        ]
      }
    )
  ] }, a.id)) });
};
function ir(t) {
  return U({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" }, child: [] }] })(t);
}
function or(t) {
  return U({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" }, child: [] }, { tag: "path", attr: { d: "M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" }, child: [] }] })(t);
}
const lr = ({ onSendMessage: t, isLoading: n }) => {
  const [a, o] = L(""), c = ne(null), l = (m) => {
    m.preventDefault(), a.trim() && !n && (t(a), o(""));
  }, y = (m) => {
    m.key === "Enter" && !m.shiftKey && (m.preventDefault(), a.trim() && !n && (t(a), o("")));
  };
  return ae(() => {
    c.current && (c.current.style.height = "auto", c.current.style.height = `${Math.min(c.current.scrollHeight, 100)}px`);
  }, [a]), /* @__PURE__ */ r.jsx("form", { onSubmit: l, className: "pt-1 px-2 backdrop-blur-md bg-white/10", children: /* @__PURE__ */ r.jsxs("div", { className: "border border-slate-100 shadow relative flex items-center bg-white", children: [
    /* @__PURE__ */ r.jsx(
      "textarea",
      {
        ref: c,
        onKeyDown: y,
        value: a,
        onChange: (m) => o(m.target.value),
        placeholder: "Type your message...",
        rows: 1,
        className: "w-full pr-16 bg-transparent resize-none overflow-y-auto hide-scrollbar max-h-[100px] px-3 py-2.5 text-sm text-black focus:outline-none",
        disabled: n
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "absolute right-2 inset-y-0 h-full flex items-center gap-2.5", children: [
      /* @__PURE__ */ r.jsx("button", { type: "submit", className: "flex items-center justify-center  hover:text-slate-700 text-slate-300", children: /* @__PURE__ */ r.jsx(or, { className: "text-xl" }) }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "submit",
          disabled: n || !a.trim(),
          className: "flex items-center justify-center text-slate-700 hover:text-black disabled:text-slate-300",
          children: /* @__PURE__ */ r.jsx(ir, { className: "text-xl" })
        }
      )
    ] })
  ] }) });
}, cr = () => {
  const { messages: t, addMessage: n, apiEndpoint: a, primaryColor: o } = W(), [c, l] = L(t || []), [y, m] = L(!1), [f, x] = L(!1), w = ne(null), v = ne(null), S = X((_) => _.setSelectedPage), O = [
    { id: 1, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 2, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 3, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 4, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 5, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" }
  ], j = ne(a);
  ae(() => {
    typeof window < "u" && (x(!0), j.current = a, l(t || []));
  }, [a, t]), ae(() => {
    v.current && f && (v.current.scrollTop = 0);
  }, [c, f]);
  const h = async (_) => {
    if (!_.trim() || !f)
      return;
    const T = {
      id: Date.now().toString(),
      content: _,
      sender: "user",
      timestamp: /* @__PURE__ */ new Date()
    };
    l((d) => [...d, T]), n(T), m(!0);
    try {
      const d = await fetch(j.current, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: _ })
      });
      if (!d.ok)
        throw new Error("Network response was not ok");
      const N = await d.json(), D = {
        id: (Date.now() + 1).toString(),
        content: N.message,
        sender: "bot",
        timestamp: /* @__PURE__ */ new Date()
      };
      l(($) => [...$, D]), n(D), m(!1);
    } catch (d) {
      console.error("Error sending message:", d), m(!1);
      const N = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, there was an error processing your message.",
        sender: "bot",
        timestamp: /* @__PURE__ */ new Date()
      };
      l((D) => [...D, N]), n(N);
    }
  };
  return !f || typeof window > "u" ? null : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("div", { className: "text-white flex items-center py-3 relative", style: { backgroundColor: o }, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "relative px-5 pb-2 max-w-sm mx-auto text-center", children: [
        /* @__PURE__ */ r.jsx("h3", { className: "font-medium text-2xl mb-3", children: "Start a chat" }),
        /* @__PURE__ */ r.jsx("div", { className: "flex -space-x-2 mb-2 justify-center", children: O.map((_) => /* @__PURE__ */ r.jsx("div", { className: "w-11 h-11 rounded-full bg-white border-2 border-white overflow-hidden", children: /* @__PURE__ */ r.jsx("img", { src: _.imageUrl, alt: `Agent ${_.id}`, className: "w-full h-full object-cover" }) }, _.id)) }),
        /* @__PURE__ */ r.jsx("p", { className: "text-white/80 text-sm", children: "We are here to help! Message us about what you need. Our agents typically reply in a few minutes." })
      ] }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "text-white absolute left-2 top-3 bg-white/20 p-2 rounded-full flex items-center justify-center hover:text-gray-200 transition-colors ",
          "aria-label": "contact",
          onClick: () => S(null),
          children: /* @__PURE__ */ r.jsx(at, { className: "text-lg" })
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { ref: v, className: "message-container smooth-scroll my-1", children: [
      /* @__PURE__ */ r.jsx("div", { className: "message-list", children: /* @__PURE__ */ r.jsx(sr, { messages: c }) }),
      /* @__PURE__ */ r.jsx("div", { ref: w }),
      y && /* @__PURE__ */ r.jsx("div", { className: "flex justify-center my-2", children: /* @__PURE__ */ r.jsx("div", { className: "dot-typing" }) })
    ] }),
    /* @__PURE__ */ r.jsx(lr, { onSendMessage: h, isLoading: y })
  ] });
}, ur = ({ apiEndpoint: t, widgetTitle: n, primaryColor: a, position: o, height: c, width: l, initialMessages: y = [] }) => {
  const { setWidgetTitle: m, setPrimaryColor: f, setPosition: x, setDimensions: w, setApiEndpoint: v, addMessage: S, clearMessages: O } = W(), [j, h] = L(!1);
  ae(() => {
    !j && typeof window < "u" && (n && m(n), a && f(a), o && x(o), c && l && w(c, l), t && v(t), O(), y && y.length > 0 && y.forEach((P) => {
      S(P);
    }), h(!0));
  }, [
    j,
    n,
    a,
    o,
    c,
    l,
    t,
    y,
    m,
    f,
    x,
    w,
    v,
    S,
    O
  ]);
  const _ = Qe((P) => P.widgetOpen), T = Qe((P) => P.toggleWidget), d = X((P) => P.selectedPage), N = W((P) => P.position), D = W((P) => P.height), $ = W((P) => P.width), oe = W((P) => P.primaryColor);
  return typeof window > "u" ? null : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { className: `fixed ${N === "bottom-right" ? "right-3" : "left-3"} bottom-3 z-[1000]`, children: /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: T,
        className: "rounded-full p-3 text-white shadow-lg hover:opacity-90 transition-opacity",
        style: { backgroundColor: oe },
        "aria-label": "Open chat",
        children: _ ? /* @__PURE__ */ r.jsx(er, { className: "text-3xl" }) : /* @__PURE__ */ r.jsx(Kt, { className: "text-3xl" })
      }
    ) }),
    _ && /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `bg-slate-100 fixed  bottom-[40px] rounded shadow-md flex flex-col overflow-hidden w-full md:w-auto pb-8 ${N === "bottom-right" ? "md:right-5 right-1" : "md:left-5 left-1"}`,
        style: { height: D, width: $, backgroundImage: "url('../bg.svg')", backgroundPosition: "top", objectFit: "cover" },
        children: [
          d == null && /* @__PURE__ */ r.jsx(rr, {}),
          d == "article" && /* @__PURE__ */ r.jsx(ar, {}),
          d == "conversation" && /* @__PURE__ */ r.jsx(cr, {}),
          d == "contact" && /* @__PURE__ */ r.jsx(nr, {}),
          /* @__PURE__ */ r.jsx("div", { className: "p-2 absolute bottom-0 inset-x-0 w-full text-xs text-center bg-transparent ", children: /* @__PURE__ */ r.jsx("p", { className: "px-5 rounded-full w-max mx-auto text-slate-400", children: "Powered by Update Tech" }) })
        ]
      }
    )
  ] });
};
function dr() {
  return /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsx(
    ur,
    {
      initialMessages: [
        { id: "1", content: "Hi there! You can begin by asking your question below. Someone will be with you shortly.", sender: "bot" }
      ],
      apiEndpoint: "/api/chat",
      widgetTitle: "Hi there 👋",
      primaryColor: "#4f46e5"
    }
  ) });
}
if (typeof window < "u") {
  const t = () => {
    const n = document.getElementById("root");
    if (n)
      try {
        be(n).render(
          /* @__PURE__ */ r.jsx(M.StrictMode, { children: /* @__PURE__ */ r.jsx(dr, {}) })
        );
      } catch (a) {
        console.error("Error rendering app:", a);
      }
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t) : t();
}
export {
  ur as OmniChatWidget,
  W as useWidgetConfigStore
};
