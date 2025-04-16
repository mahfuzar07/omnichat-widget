import * as Xn from "react";
import rt, { useRef as _, useEffect as ft, useState as it, createContext as Xt, useLayoutEffect as Ka, useId as qn, useContext as Z, useInsertionEffect as Sr, useCallback as Zn, useMemo as Ft, Children as za, isValidElement as Ya, forwardRef as Ga, Fragment as Pr, createElement as Ha, Component as Xa } from "react";
import qa from "react-dom";
var En = { exports: {} }, re = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hs;
function Za() {
  if (Hs)
    return re;
  Hs = 1;
  var t = rt, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(a, l, u) {
    var c, f = {}, d = null, m = null;
    u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (c in l)
      s.call(l, c) && !o.hasOwnProperty(c) && (f[c] = l[c]);
    if (a && a.defaultProps)
      for (c in l = a.defaultProps, l)
        f[c] === void 0 && (f[c] = l[c]);
    return { $$typeof: e, type: a, key: d, ref: m, props: f, _owner: i.current };
  }
  return re.Fragment = n, re.jsx = r, re.jsxs = r, re;
}
var oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xs;
function Ja() {
  return Xs || (Xs = 1, process.env.NODE_ENV !== "production" && function() {
    var t = rt, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), y = Symbol.iterator, b = "@@iterator";
    function w(h) {
      if (h === null || typeof h != "object")
        return null;
      var v = y && h[y] || h[b];
      return typeof v == "function" ? v : null;
    }
    var g = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(h) {
      {
        for (var v = arguments.length, P = new Array(v > 1 ? v - 1 : 0), D = 1; D < v; D++)
          P[D - 1] = arguments[D];
        S("error", h, P);
      }
    }
    function S(h, v, P) {
      {
        var D = g.ReactDebugCurrentFrame, L = D.getStackAddendum();
        L !== "" && (v += "%s", P = P.concat([L]));
        var N = P.map(function(O) {
          return String(O);
        });
        N.unshift("Warning: " + v), Function.prototype.apply.call(console[h], console, N);
      }
    }
    var A = !1, T = !1, C = !1, R = !1, E = !1, j;
    j = Symbol.for("react.module.reference");
    function K(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === s || h === o || E || h === i || h === u || h === c || R || h === m || A || T || C || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === r || h.$$typeof === a || h.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === j || h.getModuleId !== void 0));
    }
    function Y(h, v, P) {
      var D = h.displayName;
      if (D)
        return D;
      var L = v.displayName || v.name || "";
      return L !== "" ? P + "(" + L + ")" : P;
    }
    function gt(h) {
      return h.displayName || "Context";
    }
    function G(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case s:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case a:
            var v = h;
            return gt(v) + ".Consumer";
          case r:
            var P = h;
            return gt(P._context) + ".Provider";
          case l:
            return Y(h, h.render, "ForwardRef");
          case f:
            var D = h.displayName || null;
            return D !== null ? D : G(h.type) || "Memo";
          case d: {
            var L = h, N = L._payload, O = L._init;
            try {
              return G(O(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var lt = Object.assign, Vt = 0, Qt, k, U, yt, vt, te, ee;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function je() {
      {
        if (Vt === 0) {
          Qt = console.log, k = console.info, U = console.warn, yt = console.error, vt = console.group, te = console.groupCollapsed, ee = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        Vt++;
      }
    }
    function Dt() {
      {
        if (Vt--, Vt === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lt({}, h, {
              value: Qt
            }),
            info: lt({}, h, {
              value: k
            }),
            warn: lt({}, h, {
              value: U
            }),
            error: lt({}, h, {
              value: yt
            }),
            group: lt({}, h, {
              value: vt
            }),
            groupCollapsed: lt({}, h, {
              value: te
            }),
            groupEnd: lt({}, h, {
              value: ee
            })
          });
        }
        Vt < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Tt = g.ReactCurrentDispatcher, St;
    function ut(h, v, P) {
      {
        if (St === void 0)
          try {
            throw Error();
          } catch (L) {
            var D = L.stack.trim().match(/\n( *(at )?)/);
            St = D && D[1] || "";
          }
        return `
` + St + h;
      }
    }
    var xt = !1, Me;
    {
      var xa = typeof WeakMap == "function" ? WeakMap : Map;
      Me = new xa();
    }
    function Ls(h, v) {
      if (!h || xt)
        return "";
      {
        var P = Me.get(h);
        if (P !== void 0)
          return P;
      }
      var D;
      xt = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = Tt.current, Tt.current = null, je();
      try {
        if (v) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (tt) {
              D = tt;
            }
            Reflect.construct(h, [], O);
          } else {
            try {
              O.call();
            } catch (tt) {
              D = tt;
            }
            h.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (tt) {
            D = tt;
          }
          h();
        }
      } catch (tt) {
        if (tt && D && typeof tt.stack == "string") {
          for (var M = tt.stack.split(`
`), J = D.stack.split(`
`), $ = M.length - 1, z = J.length - 1; $ >= 1 && z >= 0 && M[$] !== J[z]; )
            z--;
          for (; $ >= 1 && z >= 0; $--, z--)
            if (M[$] !== J[z]) {
              if ($ !== 1 || z !== 1)
                do
                  if ($--, z--, z < 0 || M[$] !== J[z]) {
                    var et = `
` + M[$].replace(" at new ", " at ");
                    return h.displayName && et.includes("<anonymous>") && (et = et.replace("<anonymous>", h.displayName)), typeof h == "function" && Me.set(h, et), et;
                  }
                while ($ >= 1 && z >= 0);
              break;
            }
        }
      } finally {
        xt = !1, Tt.current = N, Dt(), Error.prepareStackTrace = L;
      }
      var _t = h ? h.displayName || h.name : "", jt = _t ? ut(_t) : "";
      return typeof h == "function" && Me.set(h, jt), jt;
    }
    function ba(h, v, P) {
      return Ls(h, !1);
    }
    function wa(h) {
      var v = h.prototype;
      return !!(v && v.isReactComponent);
    }
    function Oe(h, v, P) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return Ls(h, wa(h));
      if (typeof h == "string")
        return ut(h);
      switch (h) {
        case u:
          return ut("Suspense");
        case c:
          return ut("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case l:
            return ba(h.render);
          case f:
            return Oe(h.type, v, P);
          case d: {
            var D = h, L = D._payload, N = D._init;
            try {
              return Oe(N(L), v, P);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, ks = {}, Ns = g.ReactDebugCurrentFrame;
    function Le(h) {
      if (h) {
        var v = h._owner, P = Oe(h.type, h._source, v ? v.type : null);
        Ns.setExtraStackFrame(P);
      } else
        Ns.setExtraStackFrame(null);
    }
    function Ta(h, v, P, D, L) {
      {
        var N = Function.call.bind(se);
        for (var O in h)
          if (N(h, O)) {
            var M = void 0;
            try {
              if (typeof h[O] != "function") {
                var J = Error((D || "React class") + ": " + P + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              M = h[O](v, O, D, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              M = $;
            }
            M && !(M instanceof Error) && (Le(L), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", P, O, typeof M), Le(null)), M instanceof Error && !(M.message in ks) && (ks[M.message] = !0, Le(L), x("Failed %s type: %s", P, M.message), Le(null));
          }
      }
    }
    var Sa = Array.isArray;
    function an(h) {
      return Sa(h);
    }
    function Pa(h) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, P = v && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return P;
      }
    }
    function Aa(h) {
      try {
        return Fs(h), !1;
      } catch {
        return !0;
      }
    }
    function Fs(h) {
      return "" + h;
    }
    function Is(h) {
      if (Aa(h))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pa(h)), Fs(h);
    }
    var ie = g.ReactCurrentOwner, Ca = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Bs, _s, ln;
    ln = {};
    function Ea(h) {
      if (se.call(h, "ref")) {
        var v = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Ra(h) {
      if (se.call(h, "key")) {
        var v = Object.getOwnPropertyDescriptor(h, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function Va(h, v) {
      if (typeof h.ref == "string" && ie.current && v && ie.current.stateNode !== v) {
        var P = G(ie.current.type);
        ln[P] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(ie.current.type), h.ref), ln[P] = !0);
      }
    }
    function Da(h, v) {
      {
        var P = function() {
          Bs || (Bs = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        P.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function ja(h, v) {
      {
        var P = function() {
          _s || (_s = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        P.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var Ma = function(h, v, P, D, L, N, O) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: h,
        key: v,
        ref: P,
        props: O,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Oa(h, v, P, D, L) {
      {
        var N, O = {}, M = null, J = null;
        P !== void 0 && (Is(P), M = "" + P), Ra(v) && (Is(v.key), M = "" + v.key), Ea(v) && (J = v.ref, Va(v, L));
        for (N in v)
          se.call(v, N) && !Ca.hasOwnProperty(N) && (O[N] = v[N]);
        if (h && h.defaultProps) {
          var $ = h.defaultProps;
          for (N in $)
            O[N] === void 0 && (O[N] = $[N]);
        }
        if (M || J) {
          var z = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          M && Da(O, z), J && ja(O, z);
        }
        return Ma(h, M, J, L, D, ie.current, O);
      }
    }
    var cn = g.ReactCurrentOwner, Us = g.ReactDebugCurrentFrame;
    function Bt(h) {
      if (h) {
        var v = h._owner, P = Oe(h.type, h._source, v ? v.type : null);
        Us.setExtraStackFrame(P);
      } else
        Us.setExtraStackFrame(null);
    }
    var un;
    un = !1;
    function fn(h) {
      return typeof h == "object" && h !== null && h.$$typeof === e;
    }
    function Ws() {
      {
        if (cn.current) {
          var h = G(cn.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function La(h) {
      {
        if (h !== void 0) {
          var v = h.fileName.replace(/^.*[\\\/]/, ""), P = h.lineNumber;
          return `

Check your code at ` + v + ":" + P + ".";
        }
        return "";
      }
    }
    var $s = {};
    function ka(h) {
      {
        var v = Ws();
        if (!v) {
          var P = typeof h == "string" ? h : h.displayName || h.name;
          P && (v = `

Check the top-level render call using <` + P + ">.");
        }
        return v;
      }
    }
    function Ks(h, v) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var P = ka(v);
        if ($s[P])
          return;
        $s[P] = !0;
        var D = "";
        h && h._owner && h._owner !== cn.current && (D = " It was passed a child from " + G(h._owner.type) + "."), Bt(h), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, D), Bt(null);
      }
    }
    function zs(h, v) {
      {
        if (typeof h != "object")
          return;
        if (an(h))
          for (var P = 0; P < h.length; P++) {
            var D = h[P];
            fn(D) && Ks(D, v);
          }
        else if (fn(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var L = w(h);
          if (typeof L == "function" && L !== h.entries)
            for (var N = L.call(h), O; !(O = N.next()).done; )
              fn(O.value) && Ks(O.value, v);
        }
      }
    }
    function Na(h) {
      {
        var v = h.type;
        if (v == null || typeof v == "string")
          return;
        var P;
        if (typeof v == "function")
          P = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === f))
          P = v.propTypes;
        else
          return;
        if (P) {
          var D = G(v);
          Ta(P, h.props, "prop", D, h);
        } else if (v.PropTypes !== void 0 && !un) {
          un = !0;
          var L = G(v);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Fa(h) {
      {
        for (var v = Object.keys(h.props), P = 0; P < v.length; P++) {
          var D = v[P];
          if (D !== "children" && D !== "key") {
            Bt(h), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Bt(null);
            break;
          }
        }
        h.ref !== null && (Bt(h), x("Invalid attribute `ref` supplied to `React.Fragment`."), Bt(null));
      }
    }
    var Ys = {};
    function Gs(h, v, P, D, L, N) {
      {
        var O = K(h);
        if (!O) {
          var M = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = La(L);
          J ? M += J : M += Ws();
          var $;
          h === null ? $ = "null" : an(h) ? $ = "array" : h !== void 0 && h.$$typeof === e ? ($ = "<" + (G(h.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof h, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, M);
        }
        var z = Oa(h, v, P, L, N);
        if (z == null)
          return z;
        if (O) {
          var et = v.children;
          if (et !== void 0)
            if (D)
              if (an(et)) {
                for (var _t = 0; _t < et.length; _t++)
                  zs(et[_t], h);
                Object.freeze && Object.freeze(et);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zs(et, h);
        }
        if (se.call(v, "key")) {
          var jt = G(h), tt = Object.keys(v).filter(function($a) {
            return $a !== "key";
          }), hn = tt.length > 0 ? "{key: someKey, " + tt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ys[jt + hn]) {
            var Wa = tt.length > 0 ? "{" + tt.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, hn, jt, Wa, jt), Ys[jt + hn] = !0;
          }
        }
        return h === s ? Fa(z) : Na(z), z;
      }
    }
    function Ia(h, v, P) {
      return Gs(h, v, P, !0);
    }
    function Ba(h, v, P) {
      return Gs(h, v, P, !1);
    }
    var _a = Ba, Ua = Ia;
    oe.Fragment = s, oe.jsx = _a, oe.jsxs = Ua;
  }()), oe;
}
process.env.NODE_ENV === "production" ? En.exports = Za() : En.exports = Ja();
var p = En.exports, Rn, ke = qa;
if (process.env.NODE_ENV === "production")
  Rn = ke.createRoot, ke.hydrateRoot;
else {
  var qs = ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Rn = function(t, e) {
    qs.usingClientEntryPoint = !0;
    try {
      return ke.createRoot(t, e);
    } finally {
      qs.usingClientEntryPoint = !1;
    }
  };
}
var Ar = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Zs = rt.createContext && /* @__PURE__ */ rt.createContext(Ar), Qa = ["attr", "size", "title"];
function tl(t, e) {
  if (t == null)
    return {};
  var n = el(t, e), s, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      s = o[i], !(e.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (n[s] = t[s]);
  }
  return n;
}
function el(t, e) {
  if (t == null)
    return {};
  var n = {};
  for (var s in t)
    if (Object.prototype.hasOwnProperty.call(t, s)) {
      if (e.indexOf(s) >= 0)
        continue;
      n[s] = t[s];
    }
  return n;
}
function $e() {
  return $e = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, $e.apply(this, arguments);
}
function Js(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, s);
  }
  return n;
}
function Ke(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Js(Object(n), !0).forEach(function(s) {
      nl(t, s, n[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Js(Object(n)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(n, s));
    });
  }
  return t;
}
function nl(t, e, n) {
  return e = sl(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function sl(t) {
  var e = il(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function il(t, e) {
  if (typeof t != "object" || !t)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var s = n.call(t, e || "default");
    if (typeof s != "object")
      return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Cr(t) {
  return t && t.map((e, n) => /* @__PURE__ */ rt.createElement(e.tag, Ke({
    key: n
  }, e.attr), Cr(e.child)));
}
function Et(t) {
  return (e) => /* @__PURE__ */ rt.createElement(rl, $e({
    attr: Ke({}, t.attr)
  }, e), Cr(t.child));
}
function rl(t) {
  var e = (n) => {
    var {
      attr: s,
      size: i,
      title: o
    } = t, r = tl(t, Qa), a = i || n.size || "1em", l;
    return n.className && (l = n.className), t.className && (l = (l ? l + " " : "") + t.className), /* @__PURE__ */ rt.createElement("svg", $e({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, s, r, {
      className: l,
      style: Ke(Ke({
        color: t.color || n.color
      }, n.style), t.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ rt.createElement("title", null, o), t.children);
  };
  return Zs !== void 0 ? /* @__PURE__ */ rt.createElement(Zs.Consumer, null, (n) => e(n)) : e(Ar);
}
function ol(t) {
  return Et({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M408.67 298.53a21 21 0 1 1 20.9-21 20.85 20.85 0 0 1-20.9 21m-102.17 0a21 21 0 1 1 20.9-21 20.84 20.84 0 0 1-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35 68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7 2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 0 1 8.13 2.34L454 462.83a11.62 11.62 0 0 0 3.48 1.17 5 5 0 0 0 4.65-4.66 14.27 14.27 0 0 0-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94 18.94 0 0 1-.33-3.47 11.4 11.4 0 0 1 5-9.35" }, child: [] }, { tag: "path", attr: { d: "M246.13 178.51a24.47 24.47 0 0 1 0-48.94c12.77 0 24.38 11.65 24.38 24.47 1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 1 1 147.45 154a24.57 24.57 0 0 1-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.38 11.38 0 0 1-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 0 0 5.8 5.83 7.15 7.15 0 0 0 3.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.33 16.33 0 0 1 5.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.24 133.24 0 0 1-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48" }, child: [] }] })(t);
}
const Qs = (t) => {
  let e;
  const n = /* @__PURE__ */ new Set(), s = (u, c) => {
    const f = typeof u == "function" ? u(e) : u;
    if (!Object.is(f, e)) {
      const d = e;
      e = c ?? (typeof f != "object" || f === null) ? f : Object.assign({}, e, f), n.forEach((m) => m(e, d));
    }
  }, i = () => e, a = { setState: s, getState: i, getInitialState: () => l, subscribe: (u) => (n.add(u), () => n.delete(u)) }, l = e = t(s, i, a);
  return a;
}, al = (t) => t ? Qs(t) : Qs, ll = (t) => t;
function cl(t, e = ll) {
  const n = rt.useSyncExternalStore(
    t.subscribe,
    () => e(t.getState()),
    () => e(t.getInitialState())
  );
  return rt.useDebugValue(n), n;
}
const ti = (t) => {
  const e = al(t), n = (s) => cl(e, s);
  return Object.assign(n, e), n;
}, Jn = (t) => t ? ti(t) : ti, pe = Jn((t) => ({
  widgetOpen: !1,
  toggleWidget: () => t((e) => ({ widgetOpen: !e.widgetOpen })),
  openWidget: () => t({ widgetOpen: !0 }),
  closeWidget: () => t({ widgetOpen: !1 })
})), Ce = Jn((t) => ({
  selectedPage: null,
  setSelectedPage: (e) => t({ selectedPage: e })
})), bt = Jn()((t) => ({
  // Default values
  widgetTitle: "Hi there 👋",
  primaryColor: "#4f46e5",
  position: "bottom-right",
  height: "85vh",
  width: "385px",
  messages: [],
  apiEndpoint: "/api/chat",
  // Actions to update the state
  setWidgetTitle: (e) => t({ widgetTitle: e }),
  setPrimaryColor: (e) => t({ primaryColor: e }),
  setPosition: (e) => t({ position: e }),
  setDimensions: (e, n) => t({ height: e, width: n }),
  addMessage: (e) => t((n) => ({
    messages: [...n.messages, e]
  })),
  clearMessages: () => t({ messages: [] }),
  setApiEndpoint: (e) => t({ apiEndpoint: e })
}));
function Er(t) {
  return Et({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" }, child: [] }] })(t);
}
function ul(t) {
  return Et({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, child: [] }] })(t);
}
function Rr(t) {
  return Et({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z" }, child: [] }] })(t);
}
const Ne = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], ei = {
  value: null,
  addProjectionMetrics: null
};
function fl(t, e) {
  let n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), i = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, l = 0;
  function u(f) {
    r.has(f) && (c.schedule(f), t()), l++, f(a);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (f, d = !1, m = !1) => {
      const b = m && i ? n : s;
      return d && r.add(f), b.has(f) || b.add(f), f;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (f) => {
      s.delete(f), r.delete(f);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (f) => {
      if (a = f, i) {
        o = !0;
        return;
      }
      i = !0, [n, s] = [s, n], n.forEach(u), e && ei.value && ei.value.frameloop[e].push(l), l = 0, n.clear(), i = !1, o && (o = !1, c.process(f));
    }
  };
  return c;
}
const Vn = {
  skipAnimations: !1,
  useManualTiming: !1
}, hl = 40;
function Vr(t, e) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = Ne.reduce((g, x) => (g[x] = fl(o, e ? x : void 0), g), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: f, postRender: d } = r, m = () => {
    const g = performance.now();
    n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(g - i.timestamp, hl), 1), i.timestamp = g, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), f.process(i), d.process(i), i.isProcessing = !1, n && e && (s = !1, t(m));
  }, y = () => {
    n = !0, s = !0, i.isProcessing || t(m);
  };
  return { schedule: Ne.reduce((g, x) => {
    const S = r[x];
    return g[x] = (A, T = !1, C = !1) => (n || y(), S.schedule(A, T, C)), g;
  }, {}), cancel: (g) => {
    for (let x = 0; x < Ne.length; x++)
      r[Ne[x]].cancel(g);
  }, state: i, steps: r };
}
const ot = /* @__NO_SIDE_EFFECTS__ */ (t) => t, { schedule: F, cancel: At, state: X, steps: dn } = /* @__PURE__ */ Vr(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ot, !0);
let _e;
function dl() {
  _e = void 0;
}
const ht = {
  now: () => (_e === void 0 && ht.set(X.isProcessing || Vn.useManualTiming ? X.timestamp : performance.now()), _e),
  set: (t) => {
    _e = t, queueMicrotask(dl);
  }
}, ni = /* @__PURE__ */ new Set();
function Je(t, e, n) {
  t || ni.has(e) || (console.warn(e), n && console.warn(n), ni.add(e));
}
function Qn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Qe(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class ts {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Qn(this.subscriptions, e), () => Qe(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Dr(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const si = 30, ml = (t) => !isNaN(parseFloat(t));
class pl {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.version = "12.7.3", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s, i = !0) => {
      const o = ht.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = ht.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = ml(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return process.env.NODE_ENV !== "production" && Je(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new ts());
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), F.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = ht.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > si)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, si);
    return Dr(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ge(t, e) {
  return new pl(t, e);
}
const ct = {
  x: !1,
  y: !1
};
function jr() {
  return ct.x || ct.y;
}
function Mr(t, e, n) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let s = document;
    e && (s = e.current);
    const i = (n == null ? void 0 : n[t]) ?? s.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t);
}
function Or(t, e) {
  const n = Mr(t), s = new AbortController(), i = {
    passive: !0,
    ...e,
    signal: s.signal
  };
  return [n, i, () => s.abort()];
}
function ii(t) {
  return !(t.pointerType === "touch" || jr());
}
function gl(t, e, n = {}) {
  const [s, i, o] = Or(t, n), r = (a) => {
    if (!ii(a))
      return;
    const { target: l } = a, u = e(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (f) => {
      ii(f) && (u(f), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, i);
  };
  return s.forEach((a) => {
    a.addEventListener("pointerenter", r, i);
  }), o;
}
const Lr = (t, e) => e ? t === e ? !0 : Lr(t, e.parentElement) : !1, es = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, yl = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function vl(t) {
  return yl.has(t.tagName) || t.tabIndex !== -1;
}
const le = /* @__PURE__ */ new WeakSet();
function ri(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function mn(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const xl = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const s = ri(() => {
    if (le.has(n))
      return;
    mn(n, "down");
    const i = ri(() => {
      mn(n, "up");
    }), o = () => mn(n, "cancel");
    n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", s, e), n.addEventListener("blur", () => n.removeEventListener("keydown", s), e);
};
function oi(t) {
  return es(t) && !jr();
}
function bl(t, e, n = {}) {
  const [s, i, o] = Or(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!oi(a) || le.has(l))
      return;
    le.add(l);
    const u = e(l, a), c = (m, y) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", d), !(!oi(m) || !le.has(l)) && (le.delete(l), typeof u == "function" && u(m, { success: y }));
    }, f = (m) => {
      c(m, l === window || l === document || n.useGlobalTarget || Lr(l, m.target));
    }, d = (m) => {
      c(m, !1);
    };
    window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", d, i);
  };
  return s.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, i), a instanceof HTMLElement && (a.addEventListener("focus", (u) => xl(u, i)), !vl(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
let qt = () => {
}, pt = () => {
};
process.env.NODE_ENV !== "production" && (qt = (t, e) => {
  !t && typeof console < "u" && console.warn(e);
}, pt = (t, e) => {
  if (!t)
    throw new Error(e);
});
const Yt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const s = e - t;
  return s === 0 ? 1 : (n - t) / s;
}, wt = (t, e, n) => n > e ? e : n < t ? t : n, wl = 5;
function kr(t, e, n) {
  const s = Math.max(e - wl, 0);
  return Dr(n - t(s), e - s);
}
const B = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, at = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, dt = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, pn = 1e-3;
function Tl({ duration: t = B.duration, bounce: e = B.bounce, velocity: n = B.velocity, mass: s = B.mass }) {
  let i, o;
  qt(t <= /* @__PURE__ */ at(B.maxDuration), "Spring duration must be 10 seconds or less");
  let r = 1 - e;
  r = wt(B.minDamping, B.maxDamping, r), t = wt(B.minDuration, B.maxDuration, /* @__PURE__ */ dt(t)), r < 1 ? (i = (u) => {
    const c = u * r, f = c * t, d = c - n, m = Dn(u, r), y = Math.exp(-f);
    return pn - d / m * y;
  }, o = (u) => {
    const f = u * r * t, d = f * n + n, m = Math.pow(r, 2) * Math.pow(u, 2) * t, y = Math.exp(-f), b = Dn(Math.pow(u, 2), r);
    return (-i(u) + pn > 0 ? -1 : 1) * ((d - m) * y) / b;
  }) : (i = (u) => {
    const c = Math.exp(-u * t), f = (u - n) * t + 1;
    return -pn + c * f;
  }, o = (u) => {
    const c = Math.exp(-u * t), f = (n - u) * (t * t);
    return c * f;
  });
  const a = 5 / t, l = Pl(i, o, a);
  if (t = /* @__PURE__ */ at(t), isNaN(l))
    return {
      stiffness: B.stiffness,
      damping: B.damping,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * s;
    return {
      stiffness: u,
      damping: r * 2 * Math.sqrt(s * u),
      duration: t
    };
  }
}
const Sl = 12;
function Pl(t, e, n) {
  let s = n;
  for (let i = 1; i < Sl; i++)
    s = s - t(s) / e(s);
  return s;
}
function Dn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const ze = 2e4;
function ns(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < ze; )
    e += n, s = t.next(e);
  return e >= ze ? 1 / 0 : e;
}
function Nr(t, e = 100, n) {
  const s = n({ ...t, keyframes: [0, e] }), i = Math.min(ns(s), ze);
  return {
    type: "keyframes",
    ease: (o) => s.next(i * o).value / e,
    duration: /* @__PURE__ */ dt(i)
  };
}
const Al = {};
// @__NO_SIDE_EFFECTS__
function ss(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
function Cl(t, e) {
  const n = /* @__PURE__ */ ss(t);
  return () => Al[e] ?? n();
}
const ye = /* @__PURE__ */ Cl(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Fr = (t, e, n = 10) => {
  let s = "";
  const i = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < i; o++)
    s += t(o / (i - 1)) + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
}, El = ["duration", "bounce"], Rl = ["stiffness", "damping", "mass"];
function ai(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Vl(t) {
  let e = {
    velocity: B.velocity,
    stiffness: B.stiffness,
    damping: B.damping,
    mass: B.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!ai(t, Rl) && ai(t, El))
    if (t.visualDuration) {
      const n = t.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, o = 2 * wt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = {
        ...e,
        mass: B.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = Tl(t);
      e = {
        ...e,
        ...n,
        mass: B.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function ve(t = B.visualDuration, e = B.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: f, velocity: d, isResolvedFromDuration: m } = Vl({
    ...n,
    velocity: -/* @__PURE__ */ dt(n.velocity || 0)
  }), y = d || 0, b = u / (2 * Math.sqrt(l * c)), w = r - o, g = /* @__PURE__ */ dt(Math.sqrt(l / c)), x = Math.abs(w) < 5;
  s || (s = x ? B.restSpeed.granular : B.restSpeed.default), i || (i = x ? B.restDelta.granular : B.restDelta.default);
  let S;
  if (b < 1) {
    const T = Dn(g, b);
    S = (C) => {
      const R = Math.exp(-b * g * C);
      return r - R * ((y + b * g * w) / T * Math.sin(T * C) + w * Math.cos(T * C));
    };
  } else if (b === 1)
    S = (T) => r - Math.exp(-g * T) * (w + (y + g * w) * T);
  else {
    const T = g * Math.sqrt(b * b - 1);
    S = (C) => {
      const R = Math.exp(-b * g * C), E = Math.min(T * C, 300);
      return r - R * ((y + b * g * w) * Math.sinh(E) + T * w * Math.cosh(E)) / T;
    };
  }
  const A = {
    calculatedDuration: m && f || null,
    next: (T) => {
      const C = S(T);
      if (m)
        a.done = T >= f;
      else {
        let R = 0;
        b < 1 && (R = T === 0 ? /* @__PURE__ */ at(y) : kr(S, T, C));
        const E = Math.abs(R) <= s, j = Math.abs(r - C) <= i;
        a.done = E && j;
      }
      return a.value = a.done ? r : C, a;
    },
    toString: () => {
      const T = Math.min(ns(A), ze), C = Fr((R) => A.next(T * R).value, T, 30);
      return T + "ms " + C;
    },
    toTransition: () => {
    }
  };
  return A;
}
ve.applyToOptions = (t) => {
  const e = Nr(t, 100, ve);
  return t.ease = ye() ? e.ease : "easeOut", t.duration = /* @__PURE__ */ at(e.duration), t.type = "keyframes", t;
};
const Dl = (t, e, n) => {
  const s = e - t;
  return ((n - t) % s + s) % s + t;
}, Ir = (t) => Array.isArray(t) && typeof t[0] != "number";
function Br(t, e) {
  return Ir(t) ? t[Dl(0, t.length, e)] : t;
}
const I = (t, e, n) => t + (e - t) * n;
function _r(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = /* @__PURE__ */ Yt(0, e, s);
    t.push(I(n, 1, i));
  }
}
function Ur(t) {
  const e = [0];
  return _r(e, t.length - 1), e;
}
const H = (t) => !!(t && t.getVelocity);
function is(t) {
  return typeof t == "object" && !Array.isArray(t);
}
function Wr(t, e, n, s) {
  return typeof t == "string" && is(e) ? Mr(t, n, s) : t instanceof NodeList ? Array.from(t) : Array.isArray(t) ? t : [t];
}
function jl(t, e, n) {
  return t * (e + 1);
}
function li(t, e, n, s) {
  return typeof e == "number" ? e : e.startsWith("-") || e.startsWith("+") ? Math.max(0, t + parseFloat(e)) : e === "<" ? n : s.get(e) ?? t;
}
function Ml(t, e, n) {
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    i.at > e && i.at < n && (Qe(t, i), s--);
  }
}
function Ol(t, e, n, s, i, o) {
  Ml(t, i, o);
  for (let r = 0; r < e.length; r++)
    t.push({
      value: e[r],
      at: I(i, o, s[r]),
      easing: Br(n, r)
    });
}
function Ll(t, e) {
  for (let n = 0; n < t.length; n++)
    t[n] = t[n] / (e + 1);
}
function kl(t, e) {
  return t.at === e.at ? t.value === null ? 1 : e.value === null ? -1 : 0 : t.at - e.at;
}
function tn(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
const Nl = "easeInOut", Fl = 20;
function Il(t, { defaultTransition: e = {}, ...n } = {}, s, i) {
  const o = e.duration || 0.3, r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), l = {}, u = /* @__PURE__ */ new Map();
  let c = 0, f = 0, d = 0;
  for (let m = 0; m < t.length; m++) {
    const y = t[m];
    if (typeof y == "string") {
      u.set(y, f);
      continue;
    } else if (!Array.isArray(y)) {
      u.set(y.name, li(f, y.at, c, u));
      continue;
    }
    let [b, w, g = {}] = y;
    g.at !== void 0 && (f = li(f, g.at, c, u));
    let x = 0;
    const S = (A, T, C, R = 0, E = 0) => {
      const j = Bl(A), { delay: K = 0, times: Y = Ur(j), type: gt = "keyframes", repeat: G, repeatType: lt, repeatDelay: Vt = 0, ...Qt } = T;
      let { ease: k = e.ease || "easeOut", duration: U } = T;
      const yt = typeof K == "function" ? K(R, E) : K, vt = j.length, te = tn(gt) ? gt : i == null ? void 0 : i[gt];
      if (vt <= 2 && te) {
        let Dt = 100;
        if (vt === 2 && Wl(j)) {
          const ut = j[1] - j[0];
          Dt = Math.abs(ut);
        }
        const Tt = { ...Qt };
        U !== void 0 && (Tt.duration = /* @__PURE__ */ at(U));
        const St = Nr(Tt, Dt, te);
        k = St.ease, U = St.duration;
      }
      U ?? (U = o);
      const ee = f + yt;
      Y.length === 1 && Y[0] === 0 && (Y[1] = 1);
      const ne = Y.length - j.length;
      if (ne > 0 && _r(Y, ne), j.length === 1 && j.unshift(null), G) {
        pt(G < Fl, "Repeat count too high, must be less than 20"), U = jl(U, G);
        const Dt = [...j], Tt = [...Y];
        k = Array.isArray(k) ? [...k] : [k];
        const St = [...k];
        for (let ut = 0; ut < G; ut++) {
          j.push(...Dt);
          for (let xt = 0; xt < Dt.length; xt++)
            Y.push(Tt[xt] + (ut + 1)), k.push(xt === 0 ? "linear" : Br(St, xt - 1));
        }
        Ll(Y, G);
      }
      const je = ee + U;
      Ol(C, j, k, Y, ee, je), x = Math.max(yt + U, x), d = Math.max(je, d);
    };
    if (H(b)) {
      const A = ci(b, a);
      S(w, g, ui("default", A));
    } else {
      const A = Wr(b, w, s, l), T = A.length;
      for (let C = 0; C < T; C++) {
        w = w, g = g;
        const R = A[C], E = ci(R, a);
        for (const j in w)
          S(w[j], _l(g, j), ui(j, E), C, T);
      }
    }
    c = f, f += x;
  }
  return a.forEach((m, y) => {
    for (const b in m) {
      const w = m[b];
      w.sort(kl);
      const g = [], x = [], S = [];
      for (let T = 0; T < w.length; T++) {
        const { at: C, value: R, easing: E } = w[T];
        g.push(R), x.push(/* @__PURE__ */ Yt(0, d, C)), S.push(E || "easeOut");
      }
      x[0] !== 0 && (x.unshift(0), g.unshift(g[0]), S.unshift(Nl)), x[x.length - 1] !== 1 && (x.push(1), g.push(null)), r.has(y) || r.set(y, {
        keyframes: {},
        transition: {}
      });
      const A = r.get(y);
      A.keyframes[b] = g, A.transition[b] = {
        ...e,
        duration: d,
        ease: S,
        times: x,
        ...n
      };
    }
  }), r;
}
function ci(t, e) {
  return !e.has(t) && e.set(t, {}), e.get(t);
}
function ui(t, e) {
  return e[t] || (e[t] = []), e[t];
}
function Bl(t) {
  return Array.isArray(t) ? t : [t];
}
function _l(t, e) {
  return t && t[e] ? {
    ...t,
    ...t[e]
  } : { ...t };
}
const Ul = (t) => typeof t == "number", Wl = (t) => t.every(Ul), xe = /* @__PURE__ */ new WeakMap(), Zt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], It = new Set(Zt), $r = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Zt
]), jn = (t) => Array.isArray(t), $l = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), Kl = (t) => jn(t) ? t[t.length - 1] || 0 : t;
function fi(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, s) => {
    e[0][s] = n.get(), e[1][s] = n.getVelocity();
  }), e;
}
function rs(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = fi(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, o] = fi(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function be(t, e, n) {
  const s = t.getProps();
  return rs(s, e, n !== void 0 ? n : s.custom, t);
}
function zl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, ge(n));
}
function Yl(t, e) {
  const n = be(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = Kl(o[r]);
    zl(t, r, a);
  }
}
function Gl(t) {
  return !!(H(t) && t.add);
}
function Mn(t, e) {
  const n = t.getValue("willChange");
  if (Gl(n))
    return n.add(e);
  if (!n && Vn.WillChange) {
    const s = new Vn.WillChange("auto");
    t.addValue("willChange", s), s.add(e);
  }
}
const os = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Hl = "framerAppearId", Kr = "data-" + os(Hl);
function zr(t) {
  return t.props[Kr];
}
const Yr = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, Xl = 1e-7, ql = 12;
function Zl(t, e, n, s, i) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = Yr(r, s, i) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > Xl && ++a < ql);
  return r;
}
function Ee(t, e, n, s) {
  if (t === e && n === s)
    return ot;
  const i = (o) => Zl(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : Yr(i(o), e, s);
}
const Gr = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Hr = (t) => (e) => 1 - t(1 - e), Xr = /* @__PURE__ */ Ee(0.33, 1.53, 0.69, 0.99), as = /* @__PURE__ */ Hr(Xr), qr = /* @__PURE__ */ Gr(as), Zr = (t) => (t *= 2) < 1 ? 0.5 * as(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), ls = (t) => 1 - Math.sin(Math.acos(t)), Jr = Hr(ls), Qr = Gr(ls), to = (t) => /^0[^.\s]+$/u.test(t);
function Jl(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || to(t) : !0;
}
const Jt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, we = {
  ...Jt,
  transform: (t) => wt(0, 1, t)
}, Fe = {
  ...Jt,
  default: 1
}, ue = (t) => Math.round(t * 1e5) / 1e5, cs = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ql(t) {
  return t == null;
}
const tc = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, us = (t, e) => (n) => !!(typeof n == "string" && tc.test(n) && n.startsWith(t) || e && !Ql(n) && Object.prototype.hasOwnProperty.call(n, e)), eo = (t, e, n) => (s) => {
  if (typeof s != "string")
    return s;
  const [i, o, r, a] = s.match(cs);
  return {
    [t]: parseFloat(i),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, ec = (t) => wt(0, 255, t), gn = {
  ...Jt,
  transform: (t) => Math.round(ec(t))
}, Lt = {
  test: /* @__PURE__ */ us("rgb", "red"),
  parse: /* @__PURE__ */ eo("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + gn.transform(t) + ", " + gn.transform(e) + ", " + gn.transform(n) + ", " + ue(we.transform(s)) + ")"
};
function nc(t) {
  let e = "", n = "", s = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const On = {
  test: /* @__PURE__ */ us("#"),
  parse: nc,
  transform: Lt.transform
}, Re = (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), Pt = /* @__PURE__ */ Re("deg"), mt = /* @__PURE__ */ Re("%"), V = /* @__PURE__ */ Re("px"), sc = /* @__PURE__ */ Re("vh"), ic = /* @__PURE__ */ Re("vw"), hi = {
  ...mt,
  parse: (t) => mt.parse(t) / 100,
  transform: (t) => mt.transform(t * 100)
}, Ut = {
  test: /* @__PURE__ */ us("hsl", "hue"),
  parse: /* @__PURE__ */ eo("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + mt.transform(ue(e)) + ", " + mt.transform(ue(n)) + ", " + ue(we.transform(s)) + ")"
}, q = {
  test: (t) => Lt.test(t) || On.test(t) || Ut.test(t),
  parse: (t) => Lt.test(t) ? Lt.parse(t) : Ut.test(t) ? Ut.parse(t) : On.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? Lt.transform(t) : Ut.transform(t)
}, rc = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function oc(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(cs)) == null ? void 0 : e.length) || 0) + (((n = t.match(rc)) == null ? void 0 : n.length) || 0) > 0;
}
const no = "number", so = "color", ac = "var", lc = "var(", di = "${}", cc = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Te(t) {
  const e = t.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = e.replace(cc, (l) => (q.test(l) ? (s.color.push(o), i.push(so), n.push(q.parse(l))) : l.startsWith(lc) ? (s.var.push(o), i.push(ac), n.push(l)) : (s.number.push(o), i.push(no), n.push(parseFloat(l))), ++o, di)).split(di);
  return { values: n, split: a, indexes: s, types: i };
}
function io(t) {
  return Te(t).values;
}
function ro(t) {
  const { split: e, types: n } = Te(t), s = e.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++)
      if (o += e[r], i[r] !== void 0) {
        const a = n[r];
        a === no ? o += ue(i[r]) : a === so ? o += q.transform(i[r]) : o += i[r];
      }
    return o;
  };
}
const uc = (t) => typeof t == "number" ? 0 : t;
function fc(t) {
  const e = io(t);
  return ro(t)(e.map(uc));
}
const Ct = {
  test: oc,
  parse: io,
  createTransformer: ro,
  getAnimatableNone: fc
}, hc = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function dc(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [s] = n.match(cs) || [];
  if (!s)
    return t;
  const i = n.replace(s, "");
  let o = hc.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + i + ")";
}
const mc = /\b([a-z-]*)\(.*?\)/gu, Ln = {
  ...Ct,
  getAnimatableNone: (t) => {
    const e = t.match(mc);
    return e ? e.map(dc).join(" ") : t;
  }
}, pc = {
  // Border props
  borderWidth: V,
  borderTopWidth: V,
  borderRightWidth: V,
  borderBottomWidth: V,
  borderLeftWidth: V,
  borderRadius: V,
  radius: V,
  borderTopLeftRadius: V,
  borderTopRightRadius: V,
  borderBottomRightRadius: V,
  borderBottomLeftRadius: V,
  // Positioning props
  width: V,
  maxWidth: V,
  height: V,
  maxHeight: V,
  top: V,
  right: V,
  bottom: V,
  left: V,
  // Spacing props
  padding: V,
  paddingTop: V,
  paddingRight: V,
  paddingBottom: V,
  paddingLeft: V,
  margin: V,
  marginTop: V,
  marginRight: V,
  marginBottom: V,
  marginLeft: V,
  // Misc
  backgroundPositionX: V,
  backgroundPositionY: V
}, gc = {
  rotate: Pt,
  rotateX: Pt,
  rotateY: Pt,
  rotateZ: Pt,
  scale: Fe,
  scaleX: Fe,
  scaleY: Fe,
  scaleZ: Fe,
  skew: Pt,
  skewX: Pt,
  skewY: Pt,
  distance: V,
  translateX: V,
  translateY: V,
  translateZ: V,
  x: V,
  y: V,
  z: V,
  perspective: V,
  transformPerspective: V,
  opacity: we,
  originX: hi,
  originY: hi,
  originZ: V
}, mi = {
  ...Jt,
  transform: Math.round
}, fs = {
  ...pc,
  ...gc,
  zIndex: mi,
  size: V,
  // SVG
  fillOpacity: we,
  strokeOpacity: we,
  numOctaves: mi
}, yc = {
  ...fs,
  // Color props
  color: q,
  backgroundColor: q,
  outlineColor: q,
  fill: q,
  stroke: q,
  // Border props
  borderColor: q,
  borderTopColor: q,
  borderRightColor: q,
  borderBottomColor: q,
  borderLeftColor: q,
  filter: Ln,
  WebkitFilter: Ln
}, oo = (t) => yc[t];
function ao(t, e) {
  let n = oo(t);
  return n !== Ln && (n = Ct), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const vc = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function xc(t, e, n) {
  let s = 0, i;
  for (; s < t.length && !i; ) {
    const o = t[s];
    typeof o == "string" && !vc.has(o) && Te(o).values.length && (i = t[s]), s++;
  }
  if (i && n)
    for (const o of e)
      t[o] = ao(n, i);
}
const kt = (t) => t * 180 / Math.PI, kn = (t) => {
  const e = kt(Math.atan2(t[1], t[0]));
  return Nn(e);
}, bc = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: kn,
  rotateZ: kn,
  skewX: (t) => kt(Math.atan(t[1])),
  skewY: (t) => kt(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Nn = (t) => (t = t % 360, t < 0 && (t += 360), t), pi = kn, gi = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), yi = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), wc = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: gi,
  scaleY: yi,
  scale: (t) => (gi(t) + yi(t)) / 2,
  rotateX: (t) => Nn(kt(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Nn(kt(Math.atan2(-t[2], t[0]))),
  rotateZ: pi,
  rotate: pi,
  skewX: (t) => kt(Math.atan(t[4])),
  skewY: (t) => kt(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function vi(t) {
  return t.includes("scale") ? 1 : 0;
}
function Fn(t, e) {
  if (!t || t === "none")
    return vi(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n)
    s = wc, i = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    s = bc, i = a;
  }
  if (!i)
    return vi(e);
  const o = s[e], r = i[1].split(",").map(Sc);
  return typeof o == "function" ? o(r) : r[o];
}
const Tc = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Fn(n, e);
};
function Sc(t) {
  return parseFloat(t.trim());
}
const xi = (t) => t === Jt || t === V, Pc = /* @__PURE__ */ new Set(["x", "y", "z"]), Ac = Zt.filter((t) => !Pc.has(t));
function Cc(t) {
  const e = [];
  return Ac.forEach((n) => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const Gt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => Fn(e, "x"),
  y: (t, { transform: e }) => Fn(e, "y")
};
Gt.translateX = Gt.x;
Gt.translateY = Gt.y;
const Nt = /* @__PURE__ */ new Set();
let In = !1, Bn = !1;
function lo() {
  if (Bn) {
    const t = Array.from(Nt).filter((s) => s.needsMeasurement), e = new Set(t.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    e.forEach((s) => {
      const i = Cc(s);
      i.length && (n.set(s, i), s.render());
    }), t.forEach((s) => s.measureInitialState()), e.forEach((s) => {
      s.render();
      const i = n.get(s);
      i && i.forEach(([o, r]) => {
        var a;
        (a = s.getValue(o)) == null || a.set(r);
      });
    }), t.forEach((s) => s.measureEndState()), t.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  Bn = !1, In = !1, Nt.forEach((t) => t.complete()), Nt.clear();
}
function co() {
  Nt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Bn = !0);
  });
}
function Ec() {
  co(), lo();
}
class hs {
  constructor(e, n, s, i, o, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Nt.add(this), In || (In = !0, F.read(co), F.resolveKeyframes(lo))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: s, motionValue: i } = this;
    for (let o = 0; o < e.length; o++)
      if (e[o] === null)
        if (o === 0) {
          const r = i == null ? void 0 : i.get(), a = e[e.length - 1];
          if (r !== void 0)
            e[0] = r;
          else if (s && n) {
            const l = s.readValue(n, a);
            l != null && (e[0] = l);
          }
          e[0] === void 0 && (e[0] = a), i && r === void 0 && i.set(e[0]);
        } else
          e[o] = e[o - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Nt.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Nt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const uo = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), fo = (t) => (e) => typeof e == "string" && e.startsWith(t), ds = /* @__PURE__ */ fo("--"), Rc = /* @__PURE__ */ fo("var(--"), ms = (t) => Rc(t) ? Vc.test(t.split("/*")[0].trim()) : !1, Vc = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Dc = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function jc(t) {
  const e = Dc.exec(t);
  if (!e)
    return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
const Mc = 4;
function ho(t, e, n = 1) {
  pt(n <= Mc, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [s, i] = jc(t);
  if (!s)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return uo(r) ? parseFloat(r) : r;
  }
  return ms(i) ? ho(i, e, n + 1) : i;
}
const mo = (t) => (e) => e.test(t), Oc = {
  test: (t) => t === "auto",
  parse: (t) => t
}, po = [Jt, V, mt, Pt, ic, sc, Oc], bi = (t) => po.find(mo(t));
class go extends hs {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), ms(u))) {
        const c = ho(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !$r.has(s) || e.length !== 2)
      return;
    const [i, o] = e, r = bi(i), a = bi(o);
    if (r !== a)
      if (xi(r) && xi(a))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, s = [];
    for (let i = 0; i < e.length; i++)
      Jl(e[i]) && s.push(i);
    s.length && xc(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Gt[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: e, name: n, unresolvedKeyframes: s } = this;
    if (!e || !e.current)
      return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1, r = s[o];
    s[o] = Gt[n](e.measureViewportBox(), window.getComputedStyle(e.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, u]) => {
      e.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const wi = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Ct.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function Lc(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function kc(t, e, n, s) {
  const i = t[0];
  if (i === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = wi(i, e), a = wi(o, e);
  return qt(r === a, `You are trying to animate ${e} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !r || !a ? !1 : Lc(t) || (n === "spring" || tn(n)) && s;
}
const Nc = (t) => t !== null;
function en(t, { repeat: e, repeatType: n = "loop" }, s) {
  const i = t.filter(Nc), o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return !o || s === void 0 ? i[o] : s;
}
const Fc = 40;
class yo {
  constructor({ autoplay: e = !0, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: r = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = ht.now(), this.options = {
      autoplay: e,
      delay: n,
      type: s,
      repeat: i,
      repeatDelay: o,
      repeatType: r,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > Fc ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Ec(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(e, n) {
    this.resolvedAt = ht.now(), this.hasAttemptedResolve = !0;
    const { name: s, type: i, velocity: o, delay: r, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !kc(e, s, i, o))
      if (r)
        this.options.duration = 0;
      else {
        l && l(en(e, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(e, n);
    c !== !1 && (this._resolved = {
      keyframes: e,
      finalKeyframe: n,
      ...c
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.currentFinishedPromise.then(e, n);
  }
  flatten() {
    this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((e) => {
      this.resolveFinishedPromise = e;
    });
  }
}
function yn(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Ic({ hue: t, saturation: e, lightness: n, alpha: s }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, o = 0, r = 0;
  if (!e)
    i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    i = yn(l, a, t + 1 / 3), o = yn(l, a, t), r = yn(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s
  };
}
function Ye(t, e) {
  return (n) => n > 0 ? e : t;
}
const vn = (t, e, n) => {
  const s = t * t, i = n * (e * e - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, Bc = [On, Lt, Ut], _c = (t) => Bc.find((e) => e.test(t));
function Ti(t) {
  const e = _c(t);
  if (qt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e)
    return !1;
  let n = e.parse(t);
  return e === Ut && (n = Ic(n)), n;
}
const Si = (t, e) => {
  const n = Ti(t), s = Ti(e);
  if (!n || !s)
    return Ye(t, e);
  const i = { ...n };
  return (o) => (i.red = vn(n.red, s.red, o), i.green = vn(n.green, s.green, o), i.blue = vn(n.blue, s.blue, o), i.alpha = I(n.alpha, s.alpha, o), Lt.transform(i));
}, Uc = (t, e) => (n) => e(t(n)), Ve = (...t) => t.reduce(Uc), _n = /* @__PURE__ */ new Set(["none", "hidden"]);
function Wc(t, e) {
  return _n.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function $c(t, e) {
  return (n) => I(t, e, n);
}
function ps(t) {
  return typeof t == "number" ? $c : typeof t == "string" ? ms(t) ? Ye : q.test(t) ? Si : Yc : Array.isArray(t) ? vo : typeof t == "object" ? q.test(t) ? Si : Kc : Ye;
}
function vo(t, e) {
  const n = [...t], s = n.length, i = t.map((o, r) => ps(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++)
      n[r] = i[r](o);
    return n;
  };
}
function Kc(t, e) {
  const n = { ...t, ...e }, s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = ps(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s)
      n[o] = s[o](i);
    return n;
  };
}
function zc(t, e) {
  const n = [], s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i], r = t.indexes[o][s[o]], a = t.values[r] ?? 0;
    n[i] = a, s[o]++;
  }
  return n;
}
const Yc = (t, e) => {
  const n = Ct.createTransformer(e), s = Te(t), i = Te(e);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? _n.has(t) && !i.values.length || _n.has(e) && !s.values.length ? Wc(t, e) : Ve(vo(zc(s, i), i.values), n) : (qt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Ye(t, e));
};
function xo(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? I(t, e, n) : ps(t)(t, e);
}
function Pi({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const f = t[0], d = {
    done: !1,
    value: f
  }, m = (E) => a !== void 0 && E < a || l !== void 0 && E > l, y = (E) => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l;
  let b = n * e;
  const w = f + b, g = r === void 0 ? w : r(w);
  g !== w && (b = g - f);
  const x = (E) => -b * Math.exp(-E / s), S = (E) => g + x(E), A = (E) => {
    const j = x(E), K = S(E);
    d.done = Math.abs(j) <= u, d.value = d.done ? g : K;
  };
  let T, C;
  const R = (E) => {
    m(d.value) && (T = E, C = ve({
      keyframes: [d.value, y(d.value)],
      velocity: kr(S, E, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return R(0), {
    calculatedDuration: null,
    next: (E) => {
      let j = !1;
      return !C && T === void 0 && (j = !0, A(E), R(E)), T !== void 0 && E >= T ? C.next(E - T) : (!j && A(E), d);
    }
  };
}
const Gc = /* @__PURE__ */ Ee(0.42, 0, 1, 1), Hc = /* @__PURE__ */ Ee(0, 0, 0.58, 1), bo = /* @__PURE__ */ Ee(0.42, 0, 0.58, 1), gs = (t) => Array.isArray(t) && typeof t[0] == "number", Ai = {
  linear: ot,
  easeIn: Gc,
  easeInOut: bo,
  easeOut: Hc,
  circIn: ls,
  circInOut: Qr,
  circOut: Jr,
  backIn: as,
  backInOut: qr,
  backOut: Xr,
  anticipate: Zr
}, Un = (t) => {
  if (gs(t)) {
    pt(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, s, i] = t;
    return Ee(e, n, s, i);
  } else if (typeof t == "string")
    return pt(Ai[t] !== void 0, `Invalid easing type '${t}'`), Ai[t];
  return t;
};
function Xc(t, e, n) {
  const s = [], i = n || xo, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || ot : e;
      a = Ve(l, a);
    }
    s.push(a);
  }
  return s;
}
function qc(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if (pt(o === e.length, "Both input and output ranges must be the same length"), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = Xc(e, s, i), l = a.length, u = (c) => {
    if (r && c < t[0])
      return e[0];
    let f = 0;
    if (l > 1)
      for (; f < t.length - 2 && !(c < t[f + 1]); f++)
        ;
    const d = /* @__PURE__ */ Yt(t[f], t[f + 1], c);
    return a[f](d);
  };
  return n ? (c) => u(wt(t[0], t[o - 1], c)) : u;
}
function Zc(t, e) {
  return t.map((n) => n * e);
}
function Jc(t, e) {
  return t.map(() => e || bo).splice(0, t.length - 1);
}
function fe({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const i = Ir(s) ? s.map(Un) : Un(s), o = {
    done: !1,
    value: e[0]
  }, r = Zc(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Ur(e),
    t
  ), a = qc(r, e, {
    ease: Array.isArray(i) ? i : Jc(e, i)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const Qc = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => F.update(e, !0),
    stop: () => At(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => X.isProcessing ? X.timestamp : ht.now()
  };
}, tu = {
  decay: Pi,
  inertia: Pi,
  tween: fe,
  keyframes: fe,
  spring: ve
}, eu = (t) => t / 100;
class ys extends yo {
  constructor(e) {
    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options, r = (i == null ? void 0 : i.KeyframeResolver) || hs, a = (l, u) => this.onKeyframesResolved(l, u);
    this.resolver = new r(o, a, n, s, i), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(e) {
    const { type: n = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = this.options, a = tn(n) ? n : tu[n] || fe;
    let l, u;
    process.env.NODE_ENV !== "production" && a !== fe && pt(e.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${e}`), a !== fe && typeof e[0] != "number" && (l = Ve(eu, xo(e[0], e[1])), e = [0, 100]);
    const c = a({ ...this.options, keyframes: e });
    o === "mirror" && (u = a({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -r
    })), c.calculatedDuration === null && (c.calculatedDuration = ns(c));
    const { calculatedDuration: f } = c, d = f + i, m = d * (s + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: m
    };
  }
  onPostResolved() {
    const { autoplay: e = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(e, n = !1) {
    const { resolved: s } = this;
    if (!s) {
      const { keyframes: E } = this.options;
      return { done: !0, value: E[E.length - 1] };
    }
    const { finalKeyframe: i, generator: o, mirroredGenerator: r, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: f } = s;
    if (this.startTime === null)
      return o.next(0);
    const { delay: d, repeat: m, repeatType: y, repeatDelay: b, onUpdate: w } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - c / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
    const g = this.currentTime - d * (this.speed >= 0 ? 1 : -1), x = this.speed >= 0 ? g < 0 : g > c;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let S = this.currentTime, A = o;
    if (m) {
      const E = Math.min(this.currentTime, c) / f;
      let j = Math.floor(E), K = E % 1;
      !K && E >= 1 && (K = 1), K === 1 && j--, j = Math.min(j, m + 1), !!(j % 2) && (y === "reverse" ? (K = 1 - K, b && (K -= b / f)) : y === "mirror" && (A = r)), S = wt(0, 1, K) * f;
    }
    const T = x ? { done: !1, value: l[0] } : A.next(S);
    a && (T.value = a(T.value));
    let { done: C } = T;
    !x && u !== null && (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const R = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
    return R && i !== void 0 && (T.value = en(l, this.options, i)), w && w(T.value), R && this.finish(), T;
  }
  get duration() {
    const { resolved: e } = this;
    return e ? /* @__PURE__ */ dt(e.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ dt(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ at(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ dt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: e = Qc, onPlay: n, startTime: s } = this.options;
    this.driver || (this.driver = e((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = s ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = this.currentTime ?? 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: e } = this.options;
    e && e();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  get finished() {
    return this.currentFinishedPromise;
  }
}
const nu = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), su = /* @__PURE__ */ ss(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ce = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`, Wn = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ ce([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ ce([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ ce([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ ce([0.33, 1.53, 0.69, 0.99])
};
function wo(t, e) {
  if (t)
    return typeof t == "function" && ye() ? Fr(t, e) : gs(t) ? ce(t) : Array.isArray(t) ? t.map((n) => wo(n, e) || Wn.easeOut) : Wn[t];
}
function iu(t, e, n, { delay: s = 0, duration: i = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeInOut", times: l } = {}, u = void 0) {
  const c = {
    [e]: n
  };
  l && (c.offset = l);
  const f = wo(a, i);
  return Array.isArray(f) && (c.easing = f), t.animate(c, {
    delay: s,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal",
    pseudoElement: u
  });
}
function Ci(t, e) {
  t.timeline = e, t.onfinish = null;
}
function To(t) {
  return !!(typeof t == "function" && ye() || !t || typeof t == "string" && (t in Wn || ye()) || gs(t) || Array.isArray(t) && t.every(To));
}
const Ge = 10, ru = 2e4;
function ou(t) {
  return tn(t.type) || t.type === "spring" || !To(t.ease);
}
function au(t, e) {
  const n = new ys({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let s = { done: !1, value: t[0] };
  const i = [];
  let o = 0;
  for (; !s.done && o < ru; )
    s = n.sample(o), i.push(s.value), o += Ge;
  return {
    times: void 0,
    keyframes: i,
    duration: o - Ge,
    ease: "linear"
  };
}
const So = {
  anticipate: Zr,
  backInOut: qr,
  circInOut: Qr
};
function lu(t) {
  return t in So;
}
class Ei extends yo {
  constructor(e) {
    super(e);
    const { name: n, motionValue: s, element: i, keyframes: o } = this.options;
    this.resolver = new go(o, (r, a) => this.onKeyframesResolved(r, a), n, s, i), this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    let { duration: s = 300, times: i, ease: o, type: r, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof o == "string" && ye() && lu(o) && (o = So[o]), ou(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: m, element: y, ...b } = this.options, w = au(e, b);
      e = w.keyframes, e.length === 1 && (e[1] = e[0]), s = w.duration, i = w.times, o = w.ease, r = "keyframes";
    }
    const c = iu(a.owner.current, l, e, { ...this.options, duration: s, times: i, ease: o });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (Ci(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: f } = this.options;
      a.set(en(e, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: c,
      duration: s,
      times: i,
      type: r,
      ease: o,
      keyframes: e
    };
  }
  get duration() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { duration: n } = e;
    return /* @__PURE__ */ dt(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { animation: n } = e;
    return /* @__PURE__ */ dt(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.currentTime = /* @__PURE__ */ at(e);
  }
  get speed() {
    const { resolved: e } = this;
    if (!e)
      return 1;
    const { animation: n } = e;
    return n.playbackRate;
  }
  get finished() {
    return this.resolved.animation.finished;
  }
  set speed(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.playbackRate = e;
  }
  get state() {
    const { resolved: e } = this;
    if (!e)
      return "idle";
    const { animation: n } = e;
    return n.playState;
  }
  get startTime() {
    const { resolved: e } = this;
    if (!e)
      return null;
    const { animation: n } = e;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(e) {
    if (!this._resolved)
      this.pendingTimeline = e;
    else {
      const { resolved: n } = this;
      if (!n)
        return ot;
      const { animation: s } = n;
      Ci(s, e);
    }
    return ot;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n } = e;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n } = e;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n, keyframes: s, duration: i, type: o, ease: r, times: a } = e;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: u, onUpdate: c, onComplete: f, element: d, ...m } = this.options, y = new ys({
        ...m,
        keyframes: s,
        duration: i,
        type: o,
        ease: r,
        times: a,
        isGenerator: !0
      }), b = /* @__PURE__ */ at(this.time);
      u.setWithVelocity(y.sample(b - Ge).value, y.sample(b).value, Ge);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    const { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    const { motionValue: n, name: s, repeatDelay: i, repeatType: o, damping: r, type: a } = e;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return su() && s && nu.has(s) && (s !== "transform" || !u) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !i && o !== "mirror" && r !== 0 && a !== "inertia";
  }
}
const cu = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, uu = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), fu = {
  type: "keyframes",
  duration: 0.8
}, hu = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, du = (t, { keyframes: e }) => e.length > 2 ? fu : It.has(t) ? t.startsWith("scale") ? uu(e[1]) : cu : hu;
function mu({ when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function vs(t, e) {
  return (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
}
const pu = /* @__PURE__ */ ss(() => window.ScrollTimeline !== void 0);
class gu {
  constructor(e) {
    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((e) => e.finished));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let s = 0; s < this.animations.length; s++)
      this.animations[s][e] = n;
  }
  attachTimeline(e, n) {
    const s = this.animations.map((i) => {
      if (pu() && i.attachTimeline)
        return i.attachTimeline(e);
      if (typeof n == "function")
        return n(i);
    });
    return () => {
      s.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let e = 0;
    for (let n = 0; n < this.animations.length; n++)
      e = Math.max(e, this.animations[n].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class Po extends gu {
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
}
const xs = (t, e, n, s = {}, i, o) => (r) => {
  const a = vs(s, t) || {}, l = a.delay || s.delay || 0;
  let { elapsed: u = 0 } = s;
  u = u - /* @__PURE__ */ at(l);
  let c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (d) => {
      e.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : i
  };
  mu(a) || (c = {
    ...c,
    ...du(t, c)
  }), c.duration && (c.duration = /* @__PURE__ */ at(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ at(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let f = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), c.allowFlatten = !a.type && !a.ease, f && !o && e.get() !== void 0) {
    const d = en(c.keyframes, a);
    if (d !== void 0)
      return F.update(() => {
        c.onUpdate(d), c.onComplete();
      }), new Po([]);
  }
  return !o && Ei.supports(c) ? new Ei(c) : new ys(c);
};
function yu({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, s;
}
function bs(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: r, ...a } = e;
  s && (o = s);
  const l = [], u = i && t.animationState && t.animationState.getState()[i];
  for (const c in a) {
    const f = t.getValue(c, t.latestValues[c] ?? null), d = a[c];
    if (d === void 0 || u && yu(u, c))
      continue;
    const m = {
      delay: n,
      ...vs(o || {}, c)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const w = zr(t);
      if (w) {
        const g = window.MotionHandoffAnimation(w, c, F);
        g !== null && (m.startTime = g, y = !0);
      }
    }
    Mn(t, c), f.start(xs(c, f, d, t.shouldReduceMotion && $r.has(c) ? { type: !1 } : m, t, y));
    const b = f.animation;
    b && l.push(b);
  }
  return r && Promise.all(l).then(() => {
    F.update(() => {
      r && Yl(t, r);
    });
  }), l;
}
function Ao(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
const Ri = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Wt = () => ({
  x: Ri(),
  y: Ri()
}), Vi = () => ({ min: 0, max: 0 }), W = () => ({
  x: Vi(),
  y: Vi()
}), Di = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Ht = {};
for (const t in Di)
  Ht[t] = {
    isEnabled: (e) => Di[t].some((n) => !!e[n])
  };
const ws = typeof window < "u", $n = { current: null }, Co = { current: !1 };
function vu() {
  if (Co.current = !0, !!ws)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => $n.current = t.matches;
      t.addListener(e), e();
    } else
      $n.current = !1;
}
const xu = [...po, q, Ct], bu = (t) => xu.find(mo(t));
function nn(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Se(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Ts = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ss = ["initial", ...Ts];
function sn(t) {
  return nn(t.animate) || Ss.some((e) => Se(t[e]));
}
function Eo(t) {
  return !!(sn(t) || t.variants);
}
function wu(t, e, n) {
  for (const s in e) {
    const i = e[s], o = n[s];
    if (H(i))
      t.addValue(s, i), process.env.NODE_ENV === "development" && Je(i.version === "12.7.3", `Attempting to mix Motion versions ${i.version} with 12.7.3 may not work as expected.`);
    else if (H(o))
      t.addValue(s, ge(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, ge(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n)
    e[s] === void 0 && t.removeValue(s);
  return e;
}
const ji = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Ro {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: s, reducedMotionConfig: i, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = hs, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const m = ht.now();
      this.renderScheduledAt < m && (this.renderScheduledAt = m, F.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = r;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = sn(n), this.isVariantNode = Eo(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const m in d) {
      const y = d[m];
      l[m] !== void 0 && H(y) && y.set(l[m], !1);
    }
  }
  mount(e) {
    this.current = e, xe.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), Co.current || vu(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : $n.current, process.env.NODE_ENV !== "production" && Je(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), At(this.notifyUpdate), At(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const s = It.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (a) => {
      this.latestValues[e] = a, this.props.onUpdate && F.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    let r;
    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      i(), o(), r && r(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in Ht) {
      const n = Ht[e];
      if (!n)
        continue;
      const { isEnabled: s, Feature: i } = n;
      if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : W();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < ji.length; s++) {
      const i = ji[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    this.prevMotionValues = wu(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let s = this.values.get(e);
    return s === void 0 && n !== void 0 && (s = ge(n === null ? void 0 : n, { owner: this }), this.addValue(e, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return s != null && (typeof s == "string" && (uo(s) || to(s)) ? s = parseFloat(s) : !bu(s) && Ct.test(n) && (s = ao(e, n)), this.setBaseTarget(e, H(s) ? s.get() : s)), H(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var o;
    const { initial: n } = this.props;
    let s;
    if (typeof n == "string" || typeof n == "object") {
      const r = rs(this.props, n, (o = this.presenceContext) == null ? void 0 : o.custom);
      r && (s = r[e]);
    }
    if (n && s !== void 0)
      return s;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !H(i) ? i : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new ts()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class Vo extends Ro {
  constructor() {
    super(...arguments), this.KeyframeResolver = go;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    H(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
const Do = (t, e) => e && typeof t == "number" ? e.transform(t) : t, Tu = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Su = Zt.length;
function Pu(t, e, n) {
  let s = "", i = !0;
  for (let o = 0; o < Su; o++) {
    const r = Zt[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Do(a, fs[r]);
      if (!l) {
        i = !1;
        const c = Tu[r] || r;
        s += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s;
}
function Ps(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (It.has(l)) {
      r = !0;
      continue;
    } else if (ds(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Do(u, fs[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : s[l] = c;
    }
  }
  if (e.transform || (r || n ? s.transform = Pu(e, t.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    s.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Au = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Cu = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Eu(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? Au : Cu;
  t[o.offset] = V.transform(-s);
  const r = V.transform(e), a = V.transform(n);
  t[o.array] = `${r} ${a}`;
}
function Mi(t, e, n) {
  return typeof t == "string" ? t : V.transform(e + n * t);
}
function Ru(t, e, n) {
  const s = Mi(e, t.x, t.width), i = Mi(n, t.y, t.height);
  return `${s} ${i}`;
}
function As(t, {
  attrX: e,
  attrY: n,
  attrScale: s,
  originX: i,
  originY: o,
  pathLength: r,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, f) {
  if (Ps(t, u, f), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: m, dimensions: y } = t;
  d.transform && (y && (m.transform = d.transform), delete d.transform), y && (i !== void 0 || o !== void 0 || m.transform) && (m.transformOrigin = Ru(y, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), s !== void 0 && (d.scale = s), r !== void 0 && Eu(d, r, a, l, !1);
}
const jo = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), Cs = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Mo(t, e) {
  try {
    e.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
  } catch {
    e.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
function Oo(t, { style: e, vars: n }, s, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(s));
  for (const o in n)
    t.style.setProperty(o, n[o]);
}
function Lo(t, e, n, s) {
  Oo(t, e, void 0, s);
  for (const i in e.attrs)
    t.setAttribute(jo.has(i) ? i : os(i), e.attrs[i]);
}
const Pe = {};
function Vu(t) {
  for (const e in t)
    Pe[e] = t[e], ds(e) && (Pe[e].isCSSVariable = !0);
}
function ko(t, { layout: e, layoutId: n }) {
  return It.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Pe[t] || t === "opacity");
}
function Es(t, e, n) {
  var o;
  const { style: s } = t, i = {};
  for (const r in s)
    (H(s[r]) || e.style && H(e.style[r]) || ko(r, t) || ((o = n == null ? void 0 : n.getValue(r)) == null ? void 0 : o.liveStyle) !== void 0) && (i[r] = s[r]);
  return i;
}
function No(t, e, n) {
  const s = Es(t, e, n);
  for (const i in t)
    if (H(t[i]) || H(e[i])) {
      const o = Zt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = t[i];
    }
  return s;
}
class Fo extends Vo {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = W, this.updateDimensions = () => {
      this.current && !this.renderState.dimensions && Mo(this.current, this.renderState);
    };
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (It.has(n)) {
      const s = oo(n);
      return s && s.default || 0;
    }
    return n = jo.has(n) ? n : os(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return No(e, n, s);
  }
  onBindTransform() {
    this.current && !this.renderState.dimensions && F.postRender(this.updateDimensions);
  }
  build(e, n, s) {
    As(e, n, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(e, n, s, i) {
    Lo(e, n, s, i);
  }
  mount(e) {
    this.isSVGTag = Cs(e.tagName), super.mount(e);
  }
}
function Io({ top: t, left: e, right: n, bottom: s }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: s }
  };
}
function Du({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function ju(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), s = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  };
}
function xn(t) {
  return t === void 0 || t === 1;
}
function Kn({ scale: t, scaleX: e, scaleY: n }) {
  return !xn(t) || !xn(e) || !xn(n);
}
function Ot(t) {
  return Kn(t) || Bo(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Bo(t) {
  return Oi(t.x) || Oi(t.y);
}
function Oi(t) {
  return t && t !== "0%";
}
function He(t, e, n) {
  const s = t - n, i = e * s;
  return n + i;
}
function Li(t, e, n, s, i) {
  return i !== void 0 && (t = He(t, i, s)), He(t, n, s) + e;
}
function zn(t, e = 0, n = 1, s, i) {
  t.min = Li(t.min, e, n, s, i), t.max = Li(t.max, e, n, s, i);
}
function _o(t, { x: e, y: n }) {
  zn(t.x, e.translate, e.scale, e.originPoint), zn(t.y, n.translate, n.scale, n.originPoint);
}
const ki = 0.999999999999, Ni = 1.0000000000001;
function Mu(t, e, n, s = !1) {
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && Kt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, _o(t, r)), s && Ot(o.latestValues) && Kt(t, o.latestValues));
  }
  e.x < Ni && e.x > ki && (e.x = 1), e.y < Ni && e.y > ki && (e.y = 1);
}
function $t(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function Fi(t, e, n, s, i = 0.5) {
  const o = I(t.min, t.max, i);
  zn(t, e, n, o, s);
}
function Kt(t, e) {
  Fi(t.x, e.x, e.scaleX, e.scale, e.originX), Fi(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Uo(t, e) {
  return Io(ju(t.getBoundingClientRect(), e));
}
function Ou(t, e, n) {
  const s = Uo(t, n), { scroll: i } = e;
  return i && ($t(s.x, i.offset.x), $t(s.y, i.offset.y)), s;
}
function Lu(t) {
  return window.getComputedStyle(t);
}
class Wo extends Vo {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Oo;
  }
  readValueFromInstance(e, n) {
    if (It.has(n))
      return Tc(e, n);
    {
      const s = Lu(e), i = (ds(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Uo(e, n);
  }
  build(e, n, s) {
    Ps(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Es(e, n, s);
  }
}
function ku(t, e) {
  return t in e;
}
class Nu extends Ro {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(e, n) {
    if (ku(n, e)) {
      const s = e[n];
      if (typeof s == "string" || typeof s == "number")
        return s;
    }
  }
  getBaseTargetFromProps() {
  }
  removeValueFromRenderState(e, n) {
    delete n.output[e];
  }
  measureInstanceViewportBox() {
    return W();
  }
  build(e, n) {
    Object.assign(e.output, n);
  }
  renderInstance(e, { output: n }) {
    Object.assign(e, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
function Fu(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  }, n = Ao(t) ? new Fo(e) : new Wo(e);
  n.mount(t), xe.set(t, n);
}
function Iu(t) {
  const e = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, n = new Nu(e);
  n.mount(t), xe.set(t, n);
}
function $o(t, e, n) {
  const s = H(t) ? t : ge(t);
  return s.start(xs("", s, e, n)), s.animation;
}
function Bu(t, e) {
  return H(t) || typeof t == "number" || typeof t == "string" && !is(e);
}
function Ko(t, e, n, s) {
  const i = [];
  if (Bu(t, e))
    i.push($o(t, is(e) && e.default || e, n && (n.default || n)));
  else {
    const o = Wr(t, e, s), r = o.length;
    pt(!!r, "No valid elements provided.");
    for (let a = 0; a < r; a++) {
      const l = o[a], u = l instanceof Element ? Fu : Iu;
      xe.has(l) || u(l);
      const c = xe.get(l), f = { ...n };
      "delay" in f && typeof f.delay == "function" && (f.delay = f.delay(a, r)), i.push(...bs(c, { ...e, transition: f }, {}));
    }
  }
  return i;
}
function _u(t, e, n) {
  const s = [];
  return Il(t, e, n, { spring: ve }).forEach(({ keyframes: o, transition: r }, a) => {
    s.push(...Ko(a, o, r));
  }), s;
}
function Uu(t) {
  return Array.isArray(t) && t.some(Array.isArray);
}
function Wu(t) {
  function e(n, s, i) {
    let o = [];
    Uu(n) ? o = _u(n, s, t) : o = Ko(n, s, i, t);
    const r = new Po(o);
    return t && t.animations.push(r), r;
  }
  return e;
}
const Xe = Wu();
function $u(t, e) {
  if (t === "first")
    return 0;
  {
    const n = e - 1;
    return t === "last" ? n : n / 2;
  }
}
function qe(t = 0.1, { startDelay: e = 0, from: n = 0, ease: s } = {}) {
  return (i, o) => {
    const r = typeof n == "number" ? n : $u(n, o), a = Math.abs(r - i);
    let l = t * a;
    if (s) {
      const u = o * t;
      l = Un(s)(l / u) * u;
    }
    return e + l;
  };
}
function Ku(t, e) {
  const n = ht.now(), s = ({ timestamp: i }) => {
    const o = i - n;
    o >= e && (At(s), t(o - e));
  };
  return F.read(s, !0), () => At(s);
}
const Ii = (t, e) => Math.abs(t - e);
function zu(t, e) {
  const n = Ii(t.x, e.x), s = Ii(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
function Yu(t) {
  return Et({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z" }, child: [] }] })(t);
}
function zo() {
  const t = Ce((n) => n.setSelectedPage), e = [
    { id: 1, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 2, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 3, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 4, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 5, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" }
  ];
  return /* @__PURE__ */ p.jsxs("div", { className: "p-4 bg-white rounded-xl shadow-md text-center border border-slate-100", children: [
    /* @__PURE__ */ p.jsx("h2", { className: "text-lg font-semibold mb-2 text-slate-700", children: "Start a new conversation" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-500 mb-4", children: "Our agents typically reply in a few minutes." }),
    /* @__PURE__ */ p.jsx("div", { className: "flex -space-x-2 mb-4 justify-center", children: e.map((n) => /* @__PURE__ */ p.jsx("div", { className: "w-12 h-12 rounded-full border-2 border-white overflow-hidden", children: /* @__PURE__ */ p.jsx("img", { src: n.imageUrl, alt: `Agent ${n.id}`, className: "w-full h-full object-cover" }) }, n.id)) }),
    /* @__PURE__ */ p.jsxs(
      "button",
      {
        className: "w-full flex items-center justify-center space-x-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors text-sm",
        onClick: () => t("conversation"),
        children: [
          /* @__PURE__ */ p.jsx(Yu, {}),
          /* @__PURE__ */ p.jsx("span", { children: "Send us a message" })
        ]
      }
    )
  ] });
}
function bn(t) {
  return Et({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z" }, child: [] }] })(t);
}
function Yo() {
  return /* @__PURE__ */ p.jsxs("div", { className: "py-4 px-3 bg-white rounded-xl shadow-md border border-slate-100", children: [
    /* @__PURE__ */ p.jsx("h2", { className: "text-lg font-semibold mb-2 text-slate-700 px-2", children: "Find an answer easily" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-500 mb-4 px-2", children: "If you're in a hurry, send us a message and we will get back to you asap" }),
    /* @__PURE__ */ p.jsx("h2", { className: "text-base font-semibold mb-2 text-slate-500 px-1.5", children: "Suggested articles" }),
    /* @__PURE__ */ p.jsxs("ul", { className: "mt-3 space-y-1 text-sm", children: [
      /* @__PURE__ */ p.jsxs("li", { className: "py-2 px-1.5 hover:bg-slate-200 cursor-pointer flex items-center justify-between rounded text-slate-700", children: [
        /* @__PURE__ */ p.jsxs("span", { className: "line-clamp-1", children: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum perspiciatis porro at, rem impedit libero error natus tempore commodi veritatis aperiam dolores explicabo? Tempora!",
          " "
        ] }),
        /* @__PURE__ */ p.jsx(bn, { className: "ml-5 flex-shrink-0 text-[10px]" })
      ] }),
      /* @__PURE__ */ p.jsxs("li", { className: "py-2 px-1.5 hover:bg-slate-200 cursor-pointer flex items-center justify-between rounded text-slate-700", children: [
        /* @__PURE__ */ p.jsxs("span", { className: "line-clamp-1", children: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum perspiciatis porro at, rem impedit libero error natus tempore commodi veritatis aperiam dolores explicabo? Tempora!",
          " "
        ] }),
        /* @__PURE__ */ p.jsx(bn, { className: "ml-5 flex-shrink-0 text-[10px]" })
      ] }),
      /* @__PURE__ */ p.jsxs("li", { className: "py-2 px-1.5 hover:bg-slate-200 cursor-pointer flex items-center justify-between rounded text-slate-700", children: [
        /* @__PURE__ */ p.jsxs("span", { className: "line-clamp-1", children: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum perspiciatis porro at, rem impedit libero error natus tempore commodi veritatis aperiam dolores explicabo? Tempora!",
          " "
        ] }),
        /* @__PURE__ */ p.jsx(bn, { className: "ml-5 flex-shrink-0 text-[10px]" })
      ] })
    ] })
  ] });
}
function Go() {
  const t = Ce((e) => e.setSelectedPage);
  return /* @__PURE__ */ p.jsxs("div", { className: "p-4 bg-white rounded-xl shadow-md  border border-slate-100", children: [
    /* @__PURE__ */ p.jsx("h2", { className: "text-lg font-semibold mb-2 text-slate-700", children: "Send us an email" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-sm text-gray-500 mb-4", children: "If you're in a hurry, send us a message and we will get back to you asap" }),
    /* @__PURE__ */ p.jsxs(
      "button",
      {
        className: "w-full flex items-center justify-center space-x-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors text-sm",
        onClick: () => t("contact"),
        children: [
          /* @__PURE__ */ p.jsx(Er, {}),
          /* @__PURE__ */ p.jsx("span", { children: "Send Email" })
        ]
      }
    )
  ] });
}
function Gu() {
  const { widgetTitle: t, primaryColor: e } = bt(), n = pe((r) => r.widgetOpen), s = _(null), i = _(null), o = _(null);
  return ft(() => {
    n && Xe(
      [i.current, o.current, s.current],
      { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0px)"] },
      { duration: 0.5, delay: qe(0.5) }
    );
  }, [n]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx("div", { className: "text-white flex items-center h-60", style: { backgroundColor: e }, children: /* @__PURE__ */ p.jsxs("div", { className: "h-36 relative !z-[20] px-5 py-2 max-w-sm mr-[45px]", children: [
      /* @__PURE__ */ p.jsx("h1", { ref: i, className: "font-bold text-3xl mb-2 opacity-0", children: t }),
      /* @__PURE__ */ p.jsx("h6", { ref: o, className: "font-medium text-white/80 opacity-0", children: "Ask us anything, or share your valuable feedback with us." })
    ] }) }),
    /* @__PURE__ */ p.jsxs("div", { ref: s, className: "flex-1 overflow-y-auto px-4 py-1 bg-transparent space-y-5 z-10 relative -mt-12", children: [
      /* @__PURE__ */ p.jsx(zo, {}),
      /* @__PURE__ */ p.jsx(Yo, {}),
      /* @__PURE__ */ p.jsx(Go, {})
    ] })
  ] });
}
function Hu() {
  const t = Ce((A) => A.setSelectedPage), { primaryColor: e } = bt(), n = [
    { id: 1, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 2, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 3, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" }
  ], [s, i] = it(""), [o, r] = it(""), [a, l] = it(""), [u, c] = it(""), [f, d] = it(!1), m = async (A) => {
    A.preventDefault(), d(!0);
    try {
      await new Promise((T) => setTimeout(T, 1500)), console.log({ name: s, email: o, subject: a, message: u }), alert("Message sent successfully!"), i(""), r(""), l(""), c("");
    } catch (T) {
      console.error("Failed to send message:", T), alert("Something went wrong.");
    } finally {
      d(!1);
    }
  }, y = pe((A) => A.widgetOpen), b = _(null), w = _(null), g = _(null), x = _(null), S = _(null);
  return ft(() => {
    y && b.current && w.current && g.current && Xe(
      [b.current, w.current, g.current],
      { opacity: [0, 1], transform: ["translateX(80px)", "translateX(0px)"] },
      { duration: 0.5, delay: qe(0.15) }
    ), y && x.current && S.current && Xe(
      [x.current, S.current],
      { opacity: [0, 1], transform: ["translateY(80px)", "translateY(0px)"] },
      { duration: 0.5, delay: qe(0.1) }
    );
  }, [y]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs("div", { className: "text-white flex px-3 gap-5 items-center py-3 relative", style: { backgroundColor: e }, children: [
      /* @__PURE__ */ p.jsx(
        "div",
        {
          ref: b,
          className: "text-white cursor-pointer  hover:bg-white/20 p-1 rounded flex items-center justify-center hover:text-gray-200 transition-colors ",
          "aria-label": "contact",
          onClick: () => t(null),
          children: /* @__PURE__ */ p.jsx(Rr, { className: "text-xl" })
        }
      ),
      /* @__PURE__ */ p.jsxs("div", { className: "relative flex items-center gap-3", children: [
        /* @__PURE__ */ p.jsx("div", { ref: w, className: "flex -space-x-2 justify-center", children: n.map((A) => /* @__PURE__ */ p.jsx("div", { className: "w-8 h-8 rounded-full bg-white border-2 border-white overflow-hidden", children: /* @__PURE__ */ p.jsx("img", { src: A.imageUrl, alt: `Agent ${A.id}`, className: "w-full h-full object-cover" }) }, A.id)) }),
        /* @__PURE__ */ p.jsx("h3", { ref: g, className: "font-medium text-md", children: "How can we help?" })
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { ref: x, className: "flex-1 overflow-y-auto px-4 py-2 bg-transparent space-y-5 z-10 relative", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: m, className: "py-4 space-y-3 rounded-md shadow-sm max-w-lg mx-auto text-sm", children: [
      /* @__PURE__ */ p.jsx(
        "input",
        {
          type: "text",
          value: s,
          onChange: (A) => i(A.target.value),
          placeholder: "Your name",
          className: "w-full  border bg-white border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-600 text-black placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm",
          disabled: f,
          required: !0
        }
      ),
      /* @__PURE__ */ p.jsx(
        "input",
        {
          type: "email",
          value: o,
          onChange: (A) => r(A.target.value),
          placeholder: "Your email address",
          className: "w-full border bg-white border-gray-300 rounded px-3 py-2 focus:outline-none text-black placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm focus:ring-1 focus:ring-gray-600",
          disabled: f,
          required: !0
        }
      ),
      /* @__PURE__ */ p.jsx(
        "input",
        {
          type: "text",
          value: a,
          onChange: (A) => l(A.target.value),
          placeholder: "Subject",
          className: "w-full border bg-white border-gray-300 rounded px-3 py-2 focus:outline-none text-black placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm focus:ring-1 focus:ring-gray-600",
          disabled: f
        }
      ),
      /* @__PURE__ */ p.jsx(
        "textarea",
        {
          value: u,
          onChange: (A) => c(A.target.value),
          placeholder: "Your message...",
          className: "w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none text-black min-h-[100px] placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm focus:ring-1 focus:ring-gray-600",
          disabled: f,
          required: !0
        }
      ),
      /* @__PURE__ */ p.jsx("div", { ref: S, children: /* @__PURE__ */ p.jsxs(
        "button",
        {
          type: "submit",
          className: "w-full flex items-center justify-center space-x-2 bg-black text-white py-3 px-4 rounded hover:bg-gray-800 transition-colors text-sm disabled:opacity-50",
          disabled: f || !s || !o || !u,
          children: [
            /* @__PURE__ */ p.jsx(Er, {}),
            /* @__PURE__ */ p.jsx("span", { children: f ? "Sending..." : "Send Email" })
          ]
        }
      ) })
    ] }) })
  ] });
}
function Xu() {
  const { widgetTitle: t, primaryColor: e } = bt();
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx("div", { className: "text-white flex items-center h-60", style: { backgroundColor: e }, children: /* @__PURE__ */ p.jsxs("div", { className: "h-36 relative !z-[20] px-5 py-2 max-w-sm mr-[45px]", children: [
      /* @__PURE__ */ p.jsx("h3", { className: "font-bold text-3xl mb-2", children: t }),
      /* @__PURE__ */ p.jsx("p", { className: "font-medium text-white/80", children: "Ask us anything, or share your valuable feedback with us." })
    ] }) }),
    /* @__PURE__ */ p.jsxs("div", { className: "flex-1 overflow-y-auto px-4 py-1 bg-transparent space-y-5 z-10 relative -mt-12", children: [
      /* @__PURE__ */ p.jsx(zo, {}),
      /* @__PURE__ */ p.jsx(Yo, {}),
      /* @__PURE__ */ p.jsx(Go, {})
    ] })
  ] });
}
const qu = ({ messages: t }) => {
  if (t.length === 0)
    return /* @__PURE__ */ p.jsx("div", { className: "flex justify-center items-center h-full text-gray-500", children: "Start a conversation..." });
  const e = (n) => n ? new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: !0
  }).format(n) : "";
  return /* @__PURE__ */ p.jsx("div", { className: "space-y-3 w-full", children: t.map((n) => /* @__PURE__ */ p.jsxs("div", { className: `flex  ${n.sender === "user" ? "justify-end" : "justify-start items-end gap-2"}`, children: [
    n.sender === "bot" && /* @__PURE__ */ p.jsx("div", { className: "flex items-center justify-center w-[35px] h-[35px] bg-white/20 shadow-xl rounded-full", children: /* @__PURE__ */ p.jsx("img", { src: "./bot.png", alt: "avatar", className: "w-full h-full object-cover" }) }),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: `max-w-[80%] rounded px-2 py-1 shadow ${n.sender === "user" ? "bg-blue-100 text-gray-800" : "bg-white text-gray-900"}`,
        children: [
          /* @__PURE__ */ p.jsx("div", { className: "text-sm", children: n.content }),
          n.timestamp && /* @__PURE__ */ p.jsx("div", { className: "text-[10px] text-gray-500 text-right", children: e(n.timestamp) })
        ]
      }
    )
  ] }, n.id)) });
};
function Zu(t) {
  return Et({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" }, child: [] }] })(t);
}
function Ju(t) {
  return Et({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" }, child: [] }, { tag: "path", attr: { d: "M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" }, child: [] }] })(t);
}
const Qu = ({ onSendMessage: t, isLoading: e }) => {
  const [n, s] = it(""), i = _(null), o = (a) => {
    a.preventDefault(), n.trim() && !e && (t(n), s(""));
  }, r = (a) => {
    a.key === "Enter" && !a.shiftKey && (a.preventDefault(), n.trim() && !e && (t(n), s("")));
  };
  return ft(() => {
    i.current && (i.current.style.height = "auto", i.current.style.height = `${Math.min(i.current.scrollHeight, 100)}px`);
  }, [n]), /* @__PURE__ */ p.jsx("form", { onSubmit: o, className: "pt-1 px-2 backdrop-blur-md bg-white/10", children: /* @__PURE__ */ p.jsxs("div", { className: "border border-slate-100 shadow relative flex items-center bg-white", children: [
    /* @__PURE__ */ p.jsx(
      "textarea",
      {
        ref: i,
        onKeyDown: r,
        value: n,
        onChange: (a) => s(a.target.value),
        placeholder: "Type your message...",
        rows: 1,
        className: "w-full pr-16 bg-transparent resize-none overflow-y-auto hide-scrollbar max-h-[100px] px-3 py-2.5 text-sm text-black focus:outline-none",
        disabled: e
      }
    ),
    /* @__PURE__ */ p.jsxs("div", { className: "absolute right-2 inset-y-0 h-full flex items-center gap-2.5", children: [
      /* @__PURE__ */ p.jsx("button", { type: "submit", className: "flex items-center justify-center  hover:text-slate-700 text-slate-300", children: /* @__PURE__ */ p.jsx(Ju, { className: "text-xl" }) }),
      /* @__PURE__ */ p.jsx(
        "button",
        {
          type: "submit",
          disabled: e || !n.trim(),
          className: "flex items-center justify-center text-slate-700 hover:text-black disabled:text-slate-300",
          children: /* @__PURE__ */ p.jsx(Zu, { className: "text-xl" })
        }
      )
    ] })
  ] }) });
}, tf = () => {
  const { messages: t, addMessage: e, apiEndpoint: n, primaryColor: s } = bt(), [i, o] = it(t || []), [r, a] = it(!1), [l, u] = it(!1), c = _(null), f = _(null), d = Ce((A) => A.setSelectedPage), m = [
    { id: 1, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 2, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 3, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" }
  ], y = _(n);
  ft(() => {
    typeof window < "u" && (u(!0), y.current = n, o(t || []));
  }, [n, t]), ft(() => {
    f.current && l && (f.current.scrollTop = 0);
  }, [i, l]);
  const b = async (A) => {
    if (!A.trim() || !l)
      return;
    const T = {
      id: Date.now().toString(),
      content: A,
      sender: "user",
      timestamp: /* @__PURE__ */ new Date()
    };
    o((C) => [...C, T]), e(T), a(!0);
    try {
      const C = await fetch(y.current, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: A })
      });
      if (!C.ok)
        throw new Error("Network response was not ok");
      const R = await C.json(), E = {
        id: (Date.now() + 1).toString(),
        content: R.message,
        sender: "bot",
        timestamp: /* @__PURE__ */ new Date()
      };
      o((j) => [...j, E]), e(E), a(!1);
    } catch (C) {
      console.error("Error sending message:", C), a(!1);
      const R = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, there was an error processing your message.",
        sender: "bot",
        timestamp: /* @__PURE__ */ new Date()
      };
      o((E) => [...E, R]), e(R);
    }
  }, w = pe((A) => A.widgetOpen), g = _(null), x = _(null), S = _(null);
  return ft(() => {
    l && w && g.current && x.current && S.current && Xe(
      [g.current, x.current, S.current],
      { opacity: [0, 1], transform: ["translateX(80px)", "translateX(0px)"] },
      { duration: 0.5, delay: qe(0.15) }
    );
  }, [l, w]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs("div", { className: "text-white flex px-3 gap-5 items-center py-3 relative", style: { backgroundColor: s }, children: [
      /* @__PURE__ */ p.jsx(
        "div",
        {
          ref: g,
          className: "text-white cursor-pointer  hover:bg-white/20 p-1 rounded flex items-center justify-center hover:text-gray-200 transition-colors ",
          "aria-label": "contact",
          onClick: () => d(null),
          children: /* @__PURE__ */ p.jsx(Rr, { className: "text-xl" })
        }
      ),
      /* @__PURE__ */ p.jsxs("div", { className: "relative flex items-center gap-2 w-full", children: [
        /* @__PURE__ */ p.jsx("div", { ref: x, className: "flex -space-x-2 justify-center", children: m.map((A) => /* @__PURE__ */ p.jsx("div", { className: "w-8 h-8 rounded-full bg-white border-2 border-white overflow-hidden", children: /* @__PURE__ */ p.jsx("img", { src: A.imageUrl, alt: `Agent ${A.id}`, className: "w-full h-full object-cover" }) }, A.id)) }),
        /* @__PURE__ */ p.jsx("h3", { ref: S, className: "font-medium text-lg", children: "Start a chat" })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "message-container smooth-scroll my-1", children: [
      r && /* @__PURE__ */ p.jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ p.jsx("div", { className: "dot-typing" }) }),
      /* @__PURE__ */ p.jsx("div", { className: "message-list", children: /* @__PURE__ */ p.jsx(qu, { messages: i }) }),
      /* @__PURE__ */ p.jsx("div", { ref: c })
    ] }),
    /* @__PURE__ */ p.jsx(Qu, { onSendMessage: b, isLoading: r })
  ] });
}, Rs = Xt({});
function Vs(t) {
  const e = _(null);
  return e.current === null && (e.current = t()), e.current;
}
const Ho = ws ? Ka : ft, rn = /* @__PURE__ */ Xt(null), Ds = Xt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
class ef extends Xn.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const s = n.offsetParent, i = s instanceof HTMLElement && s.offsetWidth || 0, o = this.props.sizeRef.current;
      o.height = n.offsetHeight || 0, o.width = n.offsetWidth || 0, o.top = n.offsetTop, o.left = n.offsetLeft, o.right = i - o.width - o.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function nf({ children: t, isPresent: e, anchorX: n }) {
  const s = qn(), i = _(null), o = _({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: r } = Z(Ds);
  return Sr(() => {
    const { width: a, height: l, top: u, left: c, right: f } = o.current;
    if (e || !i.current || !a || !l)
      return;
    const d = n === "left" ? `left: ${c}` : `right: ${f}`;
    i.current.dataset.motionPopId = s;
    const m = document.createElement("style");
    return r && (m.nonce = r), document.head.appendChild(m), m.sheet && m.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            ${d}px !important;
            top: ${u}px !important;
          }
        `), () => {
      document.head.removeChild(m);
    };
  }, [e]), p.jsx(ef, { isPresent: e, childRef: i, sizeRef: o, children: Xn.cloneElement(t, { ref: i }) });
}
const sf = ({ children: t, initial: e, isPresent: n, onExitComplete: s, custom: i, presenceAffectsLayout: o, mode: r, anchorX: a }) => {
  const l = Vs(rf), u = qn(), c = Zn((d) => {
    l.set(d, !0);
    for (const m of l.values())
      if (!m)
        return;
    s && s();
  }, [l, s]), f = Ft(
    () => ({
      id: u,
      initial: e,
      isPresent: n,
      custom: i,
      onExitComplete: c,
      register: (d) => (l.set(d, !1), () => l.delete(d))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    o ? [Math.random(), c] : [n, c]
  );
  return Ft(() => {
    l.forEach((d, m) => l.set(m, !1));
  }, [n]), Xn.useEffect(() => {
    !n && !l.size && s && s();
  }, [n]), r === "popLayout" && (t = p.jsx(nf, { isPresent: n, anchorX: a, children: t })), p.jsx(rn.Provider, { value: f, children: t });
};
function rf() {
  return /* @__PURE__ */ new Map();
}
function Xo(t = !0) {
  const e = Z(rn);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = e, o = qn();
  ft(() => {
    if (t)
      return i(o);
  }, [t]);
  const r = Zn(() => t && s && s(o), [o, s, t]);
  return !n && s ? [!1, r] : [!0];
}
const Ie = (t) => t.key || "";
function Bi(t) {
  const e = [];
  return za.forEach(t, (n) => {
    Ya(n) && e.push(n);
  }), e;
}
const of = ({ children: t, custom: e, initial: n = !0, onExitComplete: s, presenceAffectsLayout: i = !0, mode: o = "sync", propagate: r = !1, anchorX: a = "left" }) => {
  const [l, u] = Xo(r), c = Ft(() => Bi(t), [t]), f = r && !l ? [] : c.map(Ie), d = _(!0), m = _(c), y = Vs(() => /* @__PURE__ */ new Map()), [b, w] = it(c), [g, x] = it(c);
  Ho(() => {
    d.current = !1, m.current = c;
    for (let T = 0; T < g.length; T++) {
      const C = Ie(g[T]);
      f.includes(C) ? y.delete(C) : y.get(C) !== !0 && y.set(C, !1);
    }
  }, [g, f.length, f.join("-")]);
  const S = [];
  if (c !== b) {
    let T = [...c];
    for (let C = 0; C < g.length; C++) {
      const R = g[C], E = Ie(R);
      f.includes(E) || (T.splice(C, 0, R), S.push(R));
    }
    return o === "wait" && S.length && (T = S), x(Bi(T)), w(c), null;
  }
  process.env.NODE_ENV !== "production" && o === "wait" && g.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: A } = Z(Rs);
  return p.jsx(p.Fragment, { children: g.map((T) => {
    const C = Ie(T), R = r && !l ? !1 : c === g || f.includes(C), E = () => {
      if (y.has(C))
        y.set(C, !0);
      else
        return;
      let j = !0;
      y.forEach((K) => {
        K || (j = !1);
      }), j && (A == null || A(), x(m.current), r && (u == null || u()), s && s());
    };
    return p.jsx(sf, { isPresent: R, initial: !d.current || n ? void 0 : !1, custom: e, presenceAffectsLayout: i, mode: o, onExitComplete: R ? void 0 : E, anchorX: a, children: T }, C);
  }) });
}, qo = Xt({ strict: !1 });
function af(t) {
  for (const e in t)
    Ht[e] = {
      ...Ht[e],
      ...t[e]
    };
}
const lf = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Ze(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || lf.has(t);
}
let Zo = (t) => !Ze(t);
function cf(t) {
  t && (Zo = (e) => e.startsWith("on") ? !Ze(e) : t(e));
}
try {
  cf(require("@emotion/is-prop-valid").default);
} catch {
}
function uf(t, e, n) {
  const s = {};
  for (const i in t)
    i === "values" && typeof t.values == "object" || (Zo(i) || n === !0 && Ze(i) || !e && !Ze(i) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
  return s;
}
function ff(t) {
  if (typeof Proxy > "u")
    return t;
  const e = /* @__PURE__ */ new Map(), n = (...s) => (process.env.NODE_ENV !== "production" && Je(!1, "motion() is deprecated. Use motion.create() instead."), t(...s));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, i) => i === "create" ? t : (e.has(i) || e.set(i, t(i)), e.get(i))
  });
}
const on = /* @__PURE__ */ Xt({});
function hf(t, e) {
  if (sn(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Se(n) ? n : void 0,
      animate: Se(s) ? s : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function df(t) {
  const { initial: e, animate: n } = hf(t, Z(on));
  return Ft(() => ({ initial: e, animate: n }), [_i(e), _i(n)]);
}
function _i(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const mf = Symbol.for("motionComponentSymbol");
function zt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function pf(t, e, n) {
  return Zn(
    (s) => {
      s && t.onMount && t.onMount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : zt(n) && (n.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
const Jo = Xt({}), { schedule: js, cancel: hd } = /* @__PURE__ */ Vr(queueMicrotask, !1);
function gf(t, e, n, s, i) {
  var b, w;
  const { visualElement: o } = Z(on), r = Z(qo), a = Z(rn), l = Z(Ds).reducedMotion, u = _(null);
  s = s || r.renderer, !u.current && s && (u.current = s(t, {
    visualState: e,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const c = u.current, f = Z(Jo);
  c && !c.projection && i && (c.type === "html" || c.type === "svg") && yf(u.current, n, i, f);
  const d = _(!1);
  Sr(() => {
    c && d.current && c.update(n, a);
  });
  const m = n[Kr], y = _(!!m && !((b = window.MotionHandoffIsComplete) != null && b.call(window, m)) && ((w = window.MotionHasOptimisedAnimation) == null ? void 0 : w.call(window, m)));
  return Ho(() => {
    c && (d.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), js.render(c.render), y.current && c.animationState && c.animationState.animateChanges());
  }), ft(() => {
    c && (!y.current && c.animationState && c.animationState.animateChanges(), y.current && (queueMicrotask(() => {
      var g;
      (g = window.MotionHandoffMarkAsComplete) == null || g.call(window, m);
    }), y.current = !1));
  }), c;
}
function yf(t, e, n, s) {
  const { layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Qo(t.parent)), t.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!r || a && zt(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: s,
    crossfade: c,
    layoutScroll: l,
    layoutRoot: u
  });
}
function Qo(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Qo(t.parent);
}
function vf({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: s, Component: i }) {
  t && af(t);
  function o(a, l) {
    let u;
    const c = {
      ...Z(Ds),
      ...a,
      layoutId: xf(a)
    }, { isStatic: f } = c, d = df(a), m = s(a, f);
    if (!f && ws) {
      bf(c, t);
      const y = wf(c);
      u = y.MeasureLayout, d.visualElement = gf(i, m, c, e, y.ProjectionNode);
    }
    return p.jsxs(on.Provider, { value: d, children: [u && d.visualElement ? p.jsx(u, { visualElement: d.visualElement, ...c }) : null, n(i, a, pf(m, d.visualElement, l), m, f, d.visualElement)] });
  }
  o.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const r = Ga(o);
  return r[mf] = i, r;
}
function xf({ layoutId: t }) {
  const e = Z(Rs).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function bf(t, e) {
  const n = Z(qo).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const s = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? qt(!1, s) : pt(!1, s);
  }
}
function wf(t) {
  const { drag: e, layout: n } = Ht;
  if (!e && !n)
    return {};
  const s = { ...e, ...n };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
const Ms = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ta(t, e, n) {
  for (const s in e)
    !H(e[s]) && !ko(s, n) && (t[s] = e[s]);
}
function Tf({ transformTemplate: t }, e) {
  return Ft(() => {
    const n = Ms();
    return Ps(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function Sf(t, e) {
  const n = t.style || {}, s = {};
  return ta(s, n, t), Object.assign(s, Tf(t, e)), s;
}
function Pf(t, e) {
  const n = {}, s = Sf(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n;
}
const Af = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Os(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Af.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
const ea = () => ({
  ...Ms(),
  attrs: {}
});
function Cf(t, e, n, s) {
  const i = Ft(() => {
    const o = ea();
    return As(o, e, Cs(s), t.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    ta(o, t.style, t), i.style = { ...o, ...i.style };
  }
  return i;
}
function Ef(t = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const l = (Os(n) ? Cf : Pf)(s, o, r, n), u = uf(s, typeof n == "string", t), c = n !== Pr ? { ...u, ...l, ref: i } : {}, { children: f } = s, d = Ft(() => H(f) ? f.get() : f, [f]);
    return Ha(n, {
      ...c,
      children: d
    });
  };
}
function Ue(t) {
  const e = H(t) ? t.get() : t;
  return $l(e) ? e.toValue() : e;
}
function Rf({ scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: n }, s, i, o) {
  const r = {
    latestValues: Vf(s, i, o, t),
    renderState: e()
  };
  return n && (r.onMount = (a) => n({ props: s, current: a, ...r }), r.onUpdate = (a) => n(a)), r;
}
const na = (t) => (e, n) => {
  const s = Z(on), i = Z(rn), o = () => Rf(t, e, s, i);
  return n ? o() : Vs(o);
};
function Vf(t, e, n, s) {
  const i = {}, o = s(t, {});
  for (const d in o)
    i[d] = Ue(o[d]);
  let { initial: r, animate: a } = t;
  const l = sn(t), u = Eo(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const f = c ? a : r;
  if (f && typeof f != "boolean" && !nn(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let m = 0; m < d.length; m++) {
      const y = rs(t, d[m]);
      if (y) {
        const { transitionEnd: b, transition: w, ...g } = y;
        for (const x in g) {
          let S = g[x];
          if (Array.isArray(S)) {
            const A = c ? S.length - 1 : 0;
            S = S[A];
          }
          S !== null && (i[x] = S);
        }
        for (const x in b)
          i[x] = b[x];
      }
    }
  }
  return i;
}
const Df = {
  useVisualState: na({
    scrapeMotionValuesFromProps: Es,
    createRenderState: Ms
  })
}, Ui = ["x", "y", "width", "height", "cx", "cy", "r"], jf = {
  useVisualState: na({
    scrapeMotionValuesFromProps: No,
    createRenderState: ea,
    onUpdate: ({ props: t, prevProps: e, current: n, renderState: s, latestValues: i }) => {
      if (!n)
        return;
      let o = !!t.drag;
      if (!o) {
        for (const a in i)
          if (It.has(a)) {
            o = !0;
            break;
          }
      }
      if (!o)
        return;
      let r = !e;
      if (e)
        for (let a = 0; a < Ui.length; a++) {
          const l = Ui[a];
          t[l] !== e[l] && (r = !0);
        }
      r && F.read(() => {
        Mo(n, s), F.render(() => {
          As(s, i, Cs(n.tagName), t.transformTemplate), Lo(n, s);
        });
      });
    }
  })
};
function Mf(t, e) {
  return function(s, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const r = {
      ...Os(s) ? jf : Df,
      preloadedFeatures: t,
      useRender: Ef(i),
      createVisualElement: e,
      Component: s
    };
    return vf(r);
  };
}
function Yn(t, e, n = {}) {
  var l;
  const s = be(t, e, n.type === "exit" ? (l = t.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(bs(t, s, n)) : () => Promise.resolve(), r = t.variantChildren && t.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = i;
    return Of(t, e, c + u, f, d, n);
  } : () => Promise.resolve(), { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, r] : [r, o];
    return u().then(() => c());
  } else
    return Promise.all([o(), r(n.delay)]);
}
function Of(t, e, n = 0, s = 0, i = 1, o) {
  const r = [], a = (t.variantChildren.size - 1) * s, l = i === 1 ? (u = 0) => u * s : (u = 0) => a - u * s;
  return Array.from(t.variantChildren).sort(Lf).forEach((u, c) => {
    u.notify("AnimationStart", e), r.push(Yn(u, e, {
      ...o,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", e)));
  }), Promise.all(r);
}
function Lf(t, e) {
  return t.sortNodePosition(e);
}
function kf(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => Yn(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string")
    s = Yn(t, e, n);
  else {
    const i = typeof e == "function" ? be(t, e, n.custom) : e;
    s = Promise.all(bs(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function sa(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let s = 0; s < n; s++)
    if (e[s] !== t[s])
      return !1;
  return !0;
}
const Nf = Ss.length;
function ia(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? ia(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < Nf; n++) {
    const s = Ss[n], i = t.props[s];
    (Se(i) || i === !1) && (e[s] = i);
  }
  return e;
}
const Ff = [...Ts].reverse(), If = Ts.length;
function Bf(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => kf(t, n, s)));
}
function _f(t) {
  let e = Bf(t), n = Wi(), s = !0;
  const i = (l) => (u, c) => {
    var d;
    const f = be(t, c, l === "exit" ? (d = t.presenceContext) == null ? void 0 : d.custom : void 0);
    if (f) {
      const { transition: m, transitionEnd: y, ...b } = f;
      u = { ...u, ...b, ...y };
    }
    return u;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: u } = t, c = ia(t.parent) || {}, f = [], d = /* @__PURE__ */ new Set();
    let m = {}, y = 1 / 0;
    for (let w = 0; w < If; w++) {
      const g = Ff[w], x = n[g], S = u[g] !== void 0 ? u[g] : c[g], A = Se(S), T = g === l ? x.isActive : null;
      T === !1 && (y = w);
      let C = S === c[g] && S !== u[g] && A;
      if (C && s && t.manuallyAnimateOnMount && (C = !1), x.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !x.isActive && T === null || // If we didn't and don't have any defined prop for this animation type
      !S && !x.prevProp || // Or if the prop doesn't define an animation
      nn(S) || typeof S == "boolean")
        continue;
      const R = Uf(x.prevProp, S);
      let E = R || // If we're making this variant active, we want to always make it active
      g === l && x.isActive && !C && A || // If we removed a higher-priority variant (i is in reverse order)
      w > y && A, j = !1;
      const K = Array.isArray(S) ? S : [S];
      let Y = K.reduce(i(g), {});
      T === !1 && (Y = {});
      const { prevResolvedValues: gt = {} } = x, G = {
        ...gt,
        ...Y
      }, lt = (k) => {
        E = !0, d.has(k) && (j = !0, d.delete(k)), x.needsAnimating[k] = !0;
        const U = t.getValue(k);
        U && (U.liveStyle = !1);
      };
      for (const k in G) {
        const U = Y[k], yt = gt[k];
        if (m.hasOwnProperty(k))
          continue;
        let vt = !1;
        jn(U) && jn(yt) ? vt = !sa(U, yt) : vt = U !== yt, vt ? U != null ? lt(k) : d.add(k) : U !== void 0 && d.has(k) ? lt(k) : x.protectedKeys[k] = !0;
      }
      x.prevProp = S, x.prevResolvedValues = Y, x.isActive && (m = { ...m, ...Y }), s && t.blockInitialAnimation && (E = !1), E && (!(C && R) || j) && f.push(...K.map((k) => ({
        animation: k,
        options: { type: g }
      })));
    }
    if (d.size) {
      const w = {};
      if (typeof u.initial != "boolean") {
        const g = be(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        g && g.transition && (w.transition = g.transition);
      }
      d.forEach((g) => {
        const x = t.getBaseTarget(g), S = t.getValue(g);
        S && (S.liveStyle = !0), w[g] = x ?? null;
      }), f.push({ animation: w });
    }
    let b = !!f.length;
    return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (b = !1), s = !1, b ? e(f) : Promise.resolve();
  }
  function a(l, u) {
    var f;
    if (n[l].isActive === u)
      return Promise.resolve();
    (f = t.variantChildren) == null || f.forEach((d) => {
      var m;
      return (m = d.animationState) == null ? void 0 : m.setActive(l, u);
    }), n[l].isActive = u;
    const c = r(l);
    for (const d in n)
      n[d].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Wi(), s = !0;
    }
  };
}
function Uf(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !sa(e, t) : !1;
}
function Mt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Wi() {
  return {
    animate: Mt(!0),
    whileInView: Mt(),
    whileHover: Mt(),
    whileTap: Mt(),
    whileDrag: Mt(),
    whileFocus: Mt(),
    exit: Mt()
  };
}
class Rt {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class Wf extends Rt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = _f(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    nn(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) == null || e.call(this);
  }
}
let $f = 0;
class Kf extends Rt {
  constructor() {
    super(...arguments), this.id = $f++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s)
      return;
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const zf = {
  animation: {
    Feature: Wf
  },
  exit: {
    Feature: Kf
  }
};
function Ae(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
function De(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const Yf = (t) => (e) => es(e) && t(e, De(e));
function he(t, e, n, s) {
  return Ae(t, e, Yf(n), s);
}
const ra = 1e-4, Gf = 1 - ra, Hf = 1 + ra, oa = 0.01, Xf = 0 - oa, qf = 0 + oa;
function Q(t) {
  return t.max - t.min;
}
function Zf(t, e, n) {
  return Math.abs(t - e) <= n;
}
function $i(t, e, n, s = 0.5) {
  t.origin = s, t.originPoint = I(e.min, e.max, t.origin), t.scale = Q(n) / Q(e), t.translate = I(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Gf && t.scale <= Hf || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Xf && t.translate <= qf || isNaN(t.translate)) && (t.translate = 0);
}
function de(t, e, n, s) {
  $i(t.x, e.x, n.x, s ? s.originX : void 0), $i(t.y, e.y, n.y, s ? s.originY : void 0);
}
function Ki(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + Q(e);
}
function Jf(t, e, n) {
  Ki(t.x, e.x, n.x), Ki(t.y, e.y, n.y);
}
function zi(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + Q(e);
}
function me(t, e, n) {
  zi(t.x, e.x, n.x), zi(t.y, e.y, n.y);
}
function st(t) {
  return [t("x"), t("y")];
}
const aa = ({ current: t }) => t ? t.ownerDocument.defaultView : null;
class la {
  constructor(e, n, { transformPagePoint: s, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Tn(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, m = zu(f.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !m)
        return;
      const { point: y } = f, { timestamp: b } = X;
      this.history.push({ ...y, timestamp: b });
      const { onStart: w, onMove: g } = this.handlers;
      d || (w && w(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = wn(d, this.transformPagePoint), F.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: m, onSessionEnd: y, resumeAnimation: b } = this.handlers;
      if (this.dragSnapToOrigin && b && b(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const w = Tn(f.type === "pointercancel" ? this.lastMoveEventInfo : wn(d, this.transformPagePoint), this.history);
      this.startEvent && m && m(f, w), y && y(f, w);
    }, !es(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
    const r = De(e), a = wn(r, this.transformPagePoint), { point: l } = a, { timestamp: u } = X;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, Tn(a, this.history)), this.removeListeners = Ve(he(this.contextWindow, "pointermove", this.handlePointerMove), he(this.contextWindow, "pointerup", this.handlePointerUp), he(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), At(this.updatePoint);
  }
}
function wn(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Yi(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Tn({ point: t }, e) {
  return {
    point: t,
    delta: Yi(t, ca(e)),
    offset: Yi(t, Qf(e)),
    velocity: th(e, 0.1)
  };
}
function Qf(t) {
  return t[0];
}
function ca(t) {
  return t[t.length - 1];
}
function th(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, s = null;
  const i = ca(t);
  for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > /* @__PURE__ */ at(e))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ dt(i.timestamp - s.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (i.x - s.x) / o,
    y: (i.y - s.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function eh(t, { min: e, max: n }, s) {
  return e !== void 0 && t < e ? t = s ? I(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? I(n, t, s.max) : Math.min(t, n)), t;
}
function Gi(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function nh(t, { top: e, left: n, bottom: s, right: i }) {
  return {
    x: Gi(t.x, n, i),
    y: Gi(t.y, e, s)
  };
}
function Hi(t, e) {
  let n = e.min - t.min, s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function sh(t, e) {
  return {
    x: Hi(t.x, e.x),
    y: Hi(t.y, e.y)
  };
}
function ih(t, e) {
  let n = 0.5;
  const s = Q(t), i = Q(e);
  return i > s ? n = /* @__PURE__ */ Yt(e.min, e.max - s, t.min) : s > i && (n = /* @__PURE__ */ Yt(t.min, t.max - i, e.min)), wt(0, 1, n);
}
function rh(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Gn = 0.35;
function oh(t = Gn) {
  return t === !1 ? t = 0 : t === !0 && (t = Gn), {
    x: Xi(t, "left", "right"),
    y: Xi(t, "top", "bottom")
  };
}
function Xi(t, e, n) {
  return {
    min: qi(t, e),
    max: qi(t, n)
  };
}
function qi(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
function ah(t) {
  return t === "x" || t === "y" ? ct[t] ? null : (ct[t] = !0, () => {
    ct[t] = !1;
  }) : ct.x || ct.y ? null : (ct.x = ct.y = !0, () => {
    ct.x = ct.y = !1;
  });
}
const lh = /* @__PURE__ */ new WeakMap();
class ch {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = W(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const i = (c) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(De(c).point);
    }, o = (c, f) => {
      const { drag: d, dragPropagation: m, onDragStart: y } = this.getProps();
      if (d && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = ah(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), st((w) => {
        let g = this.getAxisMotionValue(w).get() || 0;
        if (mt.test(g)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const S = x.layout.layoutBox[w];
            S && (g = Q(S) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[w] = g;
      }), y && F.postRender(() => y(c, f)), Mn(this.visualElement, "transform");
      const { animationState: b } = this.visualElement;
      b && b.setActive("whileDrag", !0);
    }, r = (c, f) => {
      const { dragPropagation: d, dragDirectionLock: m, onDirectionLock: y, onDrag: b } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: w } = f;
      if (m && this.currentDirection === null) {
        this.currentDirection = uh(w), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, w), this.updateAxis("y", f.point, w), this.visualElement.render(), b && b(c, f);
    }, a = (c, f) => this.stop(c, f), l = () => st((c) => {
      var f;
      return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) == null ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new la(e, {
      onSessionStart: i,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: aa(this.visualElement)
    });
  }
  stop(e, n) {
    const s = this.isDragging;
    if (this.cancel(), !s)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && F.postRender(() => o(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !Be(e, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints && this.constraints[e] && (r = eh(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: e, dragElastic: n } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (o = this.visualElement.projection) == null ? void 0 : o.layout, i = this.constraints;
    e && zt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = nh(s.layoutBox, e) : this.constraints = !1, this.elastic = oh(n), i !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && st((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = rh(s.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !zt(e))
      return !1;
    const s = e.current;
    pt(s !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = Ou(s, i.root, this.visualElement.getTransformPagePoint());
    let r = sh(i.layout.layoutBox, o);
    if (n) {
      const a = n(Du(r));
      this.hasMutatedConstraints = !!a, a && (r = Io(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = st((c) => {
      if (!Be(c, n, this.currentDirection))
        return;
      let f = l && l[c] || {};
      r && (f = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, m = i ? 40 : 1e7, y = {
        type: "inertia",
        velocity: s ? e[c] : 0,
        bounceStiffness: d,
        bounceDamping: m,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...f
      };
      return this.startAxisValueAnimation(c, y);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return Mn(this.visualElement, e), s.start(xs(e, s, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    st((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    st((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) == null ? void 0 : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) == null ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, s = this.visualElement.getProps(), i = s[n];
    return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    st((n) => {
      const { drag: s } = this.getProps();
      if (!Be(n, s, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - I(r, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
    if (!zt(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    st((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[r] = ih({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), st((r) => {
      if (!Be(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(I(l, u, i[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    lh.set(this.visualElement, this);
    const e = this.visualElement.current, n = he(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), s = () => {
      const { dragConstraints: l } = this.getProps();
      zt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), F.read(s);
    const r = Ae(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (st((c) => {
        const f = this.getAxisMotionValue(c);
        f && (this.originPoint[c] += l[c].translate, f.set(f.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: r = Gn, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function Be(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function uh(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class fh extends Rt {
  constructor(e) {
    super(e), this.removeGroupControls = ot, this.removeListeners = ot, this.controls = new ch(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ot;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Zi = (t) => (e, n) => {
  t && F.postRender(() => t(e, n));
};
class hh extends Rt {
  constructor() {
    super(...arguments), this.removePointerDownListener = ot;
  }
  onPointerDown(e) {
    this.session = new la(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: aa(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Zi(e),
      onStart: Zi(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && F.postRender(() => i(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = he(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const We = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Ji(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const ae = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (V.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Ji(t, e.target.x), s = Ji(t, e.target.y);
    return `${n}% ${s}%`;
  }
}, dh = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const s = t, i = Ct.parse(t);
    if (i.length > 5)
      return s;
    const o = Ct.createTransformer(t), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    i[0 + r] /= a, i[1 + r] /= l;
    const u = I(a, l, 0.5);
    return typeof i[2 + r] == "number" && (i[2 + r] /= u), typeof i[3 + r] == "number" && (i[3 + r] /= u), o(i);
  }
};
class mh extends Xa {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = e;
    Vu(ph), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), We.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, r = s.projection;
    return r && (r.isPresent = o, i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || F.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), js.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: i } = e;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function ua(t) {
  const [e, n] = Xo(), s = Z(Rs);
  return p.jsx(mh, { ...t, layoutGroup: s, switchLayoutGroup: Z(Jo), isPresent: e, safeToRemove: n });
}
const ph = {
  borderRadius: {
    ...ae,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ae,
  borderTopRightRadius: ae,
  borderBottomLeftRadius: ae,
  borderBottomRightRadius: ae,
  boxShadow: dh
}, gh = (t, e) => t.depth - e.depth;
class yh {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    Qn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Qe(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(gh), this.isDirty = !1, this.children.forEach(e);
  }
}
const fa = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], vh = fa.length, Qi = (t) => typeof t == "string" ? parseFloat(t) : t, tr = (t) => typeof t == "number" || V.test(t);
function xh(t, e, n, s, i, o) {
  i ? (t.opacity = I(0, n.opacity ?? 1, bh(s)), t.opacityExit = I(e.opacity ?? 1, 0, wh(s))) : o && (t.opacity = I(e.opacity ?? 1, n.opacity ?? 1, s));
  for (let r = 0; r < vh; r++) {
    const a = `border${fa[r]}Radius`;
    let l = er(e, a), u = er(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || tr(l) === tr(u) ? (t[a] = Math.max(I(Qi(l), Qi(u), s), 0), (mt.test(u) || mt.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = I(e.rotate || 0, n.rotate || 0, s));
}
function er(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const bh = /* @__PURE__ */ ha(0, 0.5, Jr), wh = /* @__PURE__ */ ha(0.5, 0.95, ot);
function ha(t, e, n) {
  return (s) => s < t ? 0 : s > e ? 1 : n(/* @__PURE__ */ Yt(t, e, s));
}
function nr(t, e) {
  t.min = e.min, t.max = e.max;
}
function nt(t, e) {
  nr(t.x, e.x), nr(t.y, e.y);
}
function sr(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function ir(t, e, n, s, i) {
  return t -= e, t = He(t, 1 / n, s), i !== void 0 && (t = He(t, 1 / i, s)), t;
}
function Th(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (mt.test(e) && (e = parseFloat(e), e = I(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = I(o.min, o.max, s);
  t === o && (a -= e), t.min = ir(t.min, e, n, a, i), t.max = ir(t.max, e, n, a, i);
}
function rr(t, e, [n, s, i], o, r) {
  Th(t, e[n], e[s], e[i], e.scale, o, r);
}
const Sh = ["x", "scaleX", "originX"], Ph = ["y", "scaleY", "originY"];
function or(t, e, n, s) {
  rr(t.x, e, Sh, n ? n.x : void 0, s ? s.x : void 0), rr(t.y, e, Ph, n ? n.y : void 0, s ? s.y : void 0);
}
function ar(t) {
  return t.translate === 0 && t.scale === 1;
}
function da(t) {
  return ar(t.x) && ar(t.y);
}
function lr(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Ah(t, e) {
  return lr(t.x, e.x) && lr(t.y, e.y);
}
function cr(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function ma(t, e) {
  return cr(t.x, e.x) && cr(t.y, e.y);
}
function ur(t) {
  return Q(t.x) / Q(t.y);
}
function fr(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Ch {
  constructor() {
    this.members = [];
  }
  add(e) {
    Qn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (Qe(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0)
      return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
      s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Eh(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
  if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: m, skewY: y } = n;
    u && (s = `perspective(${u}px) ${s}`), c && (s += `rotate(${c}deg) `), f && (s += `rotateX(${f}deg) `), d && (s += `rotateY(${d}deg) `), m && (s += `skewX(${m}deg) `), y && (s += `skewY(${y}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
}
const Sn = ["", "X", "Y", "Z"], Rh = { visibility: "hidden" }, hr = 1e3;
let Vh = 0;
function Pn(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0));
}
function pa(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = zr(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", F, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && pa(s);
}
function ga({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = Vh++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Mh), this.nodes.forEach(Fh), this.nodes.forEach(Ih), this.nodes.forEach(Oh);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new yh());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new ts()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = Ao(r), this.instance = r;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), t) {
        let f;
        const d = () => this.root.updateBlockedByResize = !1;
        t(r, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = Ku(d, 250), We.hasAnimatedSinceResize && (We.hasAnimatedSinceResize = !1, this.nodes.forEach(mr));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeLayoutChanged: m, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const b = this.options.transition || c.getDefaultTransition() || $h, { onLayoutAnimationStart: w, onLayoutAnimationComplete: g } = c.getProps(), x = !this.targetLayout || !ma(this.targetLayout, y), S = !d && m;
        if (this.options.layoutRoot || this.resumeFrom || S || d && (x || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, S);
          const A = {
            ...vs(b, "layout"),
            onPlay: w,
            onComplete: g
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (A.delay = 0, A.type = !1), this.startAnimation(A);
        } else
          d || mr(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = y;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, At(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Bh), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && pa(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(dr);
        return;
      }
      this.isUpdating || this.nodes.forEach(kh), this.isUpdating = !1, this.nodes.forEach(Nh), this.nodes.forEach(Dh), this.nodes.forEach(jh), this.clearAllSnapshots();
      const a = ht.now();
      X.delta = wt(0, 1e3 / 60, a - X.timestamp), X.timestamp = a, X.isProcessing = !0, dn.update.process(X), dn.preRender.process(X), dn.render.process(X), X.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, js.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Lh), this.sharedNodes.forEach(_h);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, F.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      F.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Q(this.snapshot.measuredBox.x) && !Q(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = W(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !da(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && (a || Ot(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), Kh(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var u;
      const { visualElement: r } = this.options;
      if (!r)
        return W();
      const a = r.measureViewportBox();
      if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(zh))) {
        const { scroll: c } = this.root;
        c && ($t(a.x, c.offset.x), $t(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      var l;
      const a = W();
      if (nt(a, r), (l = this.scroll) != null && l.wasRoot)
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: f, options: d } = c;
        c !== this.root && f && d.layoutScroll && (f.wasRoot && nt(a, r), $t(a.x, f.offset.x), $t(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1) {
      const l = W();
      nt(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Kt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Ot(c.latestValues) && Kt(l, c.latestValues);
      }
      return Ot(this.latestValues) && Kt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = W();
      nt(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Ot(u.latestValues))
          continue;
        Kn(u.latestValues) && u.updateSnapshot();
        const c = W(), f = u.measurePageBox();
        nt(c, f), or(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Ot(this.latestValues) && or(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== X.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var d;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || (d = this.parent) != null && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: f } = this.options;
      if (!(!this.layout || !(c || f))) {
        if (this.resolvedRelativeTargetAt = X.timestamp, !this.targetDelta && !this.relativeTarget) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = W(), this.relativeTargetOrigin = W(), me(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), nt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = W(), this.targetWithTransforms = W()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Jf(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nt(this.target, this.layout.layoutBox), _o(this.target, this.targetDelta)) : nt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const m = this.getClosestProjectingParent();
          m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = W(), this.relativeTargetOrigin = W(), me(this.relativeTargetOrigin, this.target, m.target), nt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Kn(this.parent.latestValues) || Bo(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var y;
      const r = this.getLead(), a = !!this.resumingFrom || this !== r;
      let l = !0;
      if ((this.isProjectionDirty || (y = this.parent) != null && y.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === X.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c))
        return;
      nt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, d = this.treeScale.y;
      Mu(this.layoutCorrected, this.treeScale, this.path, a), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = W());
      const { target: m } = r;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (sr(this.prevProjectionDelta.x, this.projectionDelta.x), sr(this.prevProjectionDelta.y, this.projectionDelta.y)), de(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== d || !fr(this.projectionDelta.x, this.prevProjectionDelta.x) || !fr(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      var a;
      if ((a = this.options.visualElement) == null || a.scheduleRender(), r) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Wt(), this.projectionDelta = Wt(), this.projectionDeltaWithTransform = Wt();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, f = Wt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = W(), m = l ? l.source : void 0, y = this.layout ? this.layout.source : void 0, b = m !== y, w = this.getStack(), g = !w || w.members.length <= 1, x = !!(b && !g && this.options.crossfade === !0 && !this.path.some(Wh));
      this.animationProgress = 0;
      let S;
      this.mixTargetDelta = (A) => {
        const T = A / 1e3;
        pr(f.x, r.x, T), pr(f.y, r.y, T), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (me(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Uh(this.relativeTarget, this.relativeTargetOrigin, d, T), S && Ah(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = W()), nt(S, this.relativeTarget)), b && (this.animationValues = c, xh(c, u, this.latestValues, T, x, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (At(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = F.update(() => {
        We.hasAnimatedSinceResize = !0, this.currentAnimation = $o(0, hr, {
          ...r,
          onUpdate: (a) => {
            this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(hr), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && ya(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || W();
          const f = Q(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + f;
          const d = Q(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + d;
        }
        nt(a, l), Kt(a, c), de(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new Ch()), this.sharedNodes.get(r).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: r } = this.options;
      return r ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: r } = this.options;
      return r ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const u = {};
      l.z && Pn("z", r, u, this.animationValues);
      for (let c = 0; c < Sn.length; c++)
        Pn(`rotate${Sn[c]}`, r, u, this.animationValues), Pn(`skew${Sn[c]}`, r, u, this.animationValues);
      r.render();
      for (const c in u)
        r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Rh;
      const a = {
        visibility: ""
      }, l = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, a.opacity = "", a.pointerEvents = Ue(r == null ? void 0 : r.pointerEvents) || "", a.transform = l ? l(this.latestValues, "") : "none", a;
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        const m = {};
        return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = Ue(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !Ot(this.latestValues) && (m.transform = l ? l({}, "") : "none", this.hasProjected = !1), m;
      }
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget(), a.transform = Eh(this.projectionDeltaWithTransform, this.treeScale, c), l && (a.transform = l(c, a.transform));
      const { x: f, y: d } = this.projectionDelta;
      a.transformOrigin = `${f.origin * 100}% ${d.origin * 100}% 0`, u.animationValues ? a.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : a.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const m in Pe) {
        if (c[m] === void 0)
          continue;
        const { correct: y, applyTo: b, isCSSVariable: w } = Pe[m], g = a.transform === "none" ? c[m] : y(c[m], u);
        if (b) {
          const x = b.length;
          for (let S = 0; S < x; S++)
            a[b[S]] = g;
        } else
          w ? this.options.visualElement.renderState.vars[m] = g : a[m] = g;
      }
      return this.options.layoutId && (a.pointerEvents = u === this ? Ue(r == null ? void 0 : r.pointerEvents) || "" : "none"), a;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach(dr), this.root.sharedNodes.clear();
    }
  };
}
function Dh(t) {
  t.updateLayout();
}
function jh(t) {
  var n;
  const e = ((n = t.resumeFrom) == null ? void 0 : n.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout, { animationType: o } = t.options, r = e.source !== t.layout.source;
    o === "size" ? st((f) => {
      const d = r ? e.measuredBox[f] : e.layoutBox[f], m = Q(d);
      d.min = s[f].min, d.max = d.min + m;
    }) : ya(o, e.layoutBox, s) && st((f) => {
      const d = r ? e.measuredBox[f] : e.layoutBox[f], m = Q(s[f]);
      d.max = d.min + m, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[f].max = t.relativeTarget[f].min + m);
    });
    const a = Wt();
    de(a, s, e.layoutBox);
    const l = Wt();
    r ? de(l, t.applyTransform(i, !0), e.measuredBox) : de(l, s, e.layoutBox);
    const u = !da(a);
    let c = !1;
    if (!t.resumeFrom) {
      const f = t.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: m } = f;
        if (d && m) {
          const y = W();
          me(y, e.layoutBox, d.layoutBox);
          const b = W();
          me(b, s, m.layoutBox), ma(y, b) || (c = !0), f.options.layoutRoot && (t.relativeTarget = b, t.relativeTargetOrigin = y, t.relativeParent = f);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: e,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function Mh(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Oh(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Lh(t) {
  t.clearSnapshot();
}
function dr(t) {
  t.clearMeasurements();
}
function kh(t) {
  t.isLayoutDirty = !1;
}
function Nh(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function mr(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function Fh(t) {
  t.resolveTargetDelta();
}
function Ih(t) {
  t.calcProjection();
}
function Bh(t) {
  t.resetSkewAndRotation();
}
function _h(t) {
  t.removeLeadSnapshot();
}
function pr(t, e, n) {
  t.translate = I(e.translate, 0, n), t.scale = I(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function gr(t, e, n, s) {
  t.min = I(e.min, n.min, s), t.max = I(e.max, n.max, s);
}
function Uh(t, e, n, s) {
  gr(t.x, e.x, n.x, s), gr(t.y, e.y, n.y, s);
}
function Wh(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const $h = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, yr = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), vr = yr("applewebkit/") && !yr("chrome/") ? Math.round : ot;
function xr(t) {
  t.min = vr(t.min), t.max = vr(t.max);
}
function Kh(t) {
  xr(t.x), xr(t.y);
}
function ya(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Zf(ur(e), ur(n), 0.2);
}
function zh(t) {
  var e;
  return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot);
}
const Yh = ga({
  attachResizeListener: (t, e) => Ae(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), An = {
  current: void 0
}, va = ga({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!An.current) {
      const t = new Yh({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), An.current = t;
    }
    return An.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Gh = {
  pan: {
    Feature: hh
  },
  drag: {
    Feature: fh,
    ProjectionNode: va,
    MeasureLayout: ua
  }
};
function br(t, e, n) {
  const { props: s } = t;
  t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = s[i];
  o && F.postRender(() => o(e, De(e)));
}
class Hh extends Rt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = gl(e, (n, s) => (br(this.node, s, "Start"), (i) => br(this.node, i, "End"))));
  }
  unmount() {
  }
}
class Xh extends Rt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Ve(Ae(this.node.current, "focus", () => this.onFocus()), Ae(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function wr(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = s[i];
  o && F.postRender(() => o(e, De(e)));
}
class qh extends Rt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = bl(e, (n, s) => (wr(this.node, s, "Start"), (i, { success: o }) => wr(this.node, i, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Hn = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ new WeakMap(), Zh = (t) => {
  const e = Hn.get(t.target);
  e && e(t);
}, Jh = (t) => {
  t.forEach(Zh);
};
function Qh({ root: t, ...e }) {
  const n = t || document;
  Cn.has(n) || Cn.set(n, {});
  const s = Cn.get(n), i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(Jh, { root: t, ...e })), s[i];
}
function td(t, e, n) {
  const s = Qh(e);
  return Hn.set(t, n), s.observe(t), () => {
    Hn.delete(t), s.unobserve(t);
  };
}
const ed = {
  some: 0,
  all: 1
};
class nd extends Rt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof i == "number" ? i : ed[i]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), d = u ? c : f;
      d && d(l);
    };
    return td(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(sd(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function sd({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const id = {
  inView: {
    Feature: nd
  },
  tap: {
    Feature: qh
  },
  focus: {
    Feature: Xh
  },
  hover: {
    Feature: Hh
  }
}, rd = {
  layout: {
    ProjectionNode: va,
    MeasureLayout: ua
  }
}, od = (t, e) => Os(t) ? new Fo(e) : new Wo(e, {
  allowProjection: t !== Pr
}), ad = /* @__PURE__ */ Mf({
  ...zf,
  ...id,
  ...Gh,
  ...rd
}, od), Tr = /* @__PURE__ */ ff(ad), ld = ({ apiEndpoint: t, widgetTitle: e, primaryColor: n, position: s, height: i, width: o, initialMessages: r = [] }) => {
  const { setWidgetTitle: a, setPrimaryColor: l, setPosition: u, setDimensions: c, setApiEndpoint: f, addMessage: d, clearMessages: m } = bt(), [y, b] = it(!1);
  ft(() => {
    !y && typeof window < "u" && (e && a(e), n && l(n), s && u(s), i && o && c(i, o), t && f(t), m(), r && r.length > 0 && r.forEach((R) => {
      d(R);
    }), b(!0));
  }, [
    y,
    e,
    n,
    s,
    i,
    o,
    t,
    r,
    a,
    l,
    u,
    c,
    f,
    d,
    m
  ]);
  const w = pe((R) => R.widgetOpen), g = pe((R) => R.toggleWidget), x = Ce((R) => R.selectedPage), S = bt((R) => R.position), A = bt((R) => R.height), T = bt((R) => R.width), C = bt((R) => R.primaryColor);
  return typeof window > "u" ? null : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx("div", { className: `fixed ${S === "bottom-right" ? "right-3" : "left-3"} bottom-3 z-[10000]`, children: /* @__PURE__ */ p.jsx(
      Tr.button,
      {
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.9 },
        onClick: g,
        className: "rounded-full p-3 text-white shadow-lg",
        style: { backgroundColor: C },
        "aria-label": "Open chat",
        children: w ? /* @__PURE__ */ p.jsx(ul, { className: "text-xl" }) : /* @__PURE__ */ p.jsx(ol, { className: "text-3xl" })
      }
    ) }),
    /* @__PURE__ */ p.jsx(of, { initial: !1 }),
    w ? /* @__PURE__ */ p.jsxs(
      Tr.div,
      {
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        transition: {
          duration: 0.4
        },
        className: `bg-slate-100 z-[9999] fixed  bottom-[40px] rounded shadow-md flex flex-col overflow-hidden w-full md:w-auto pb-8 ${S === "bottom-right" ? "md:right-5 right-1" : "md:left-5 left-1"}`,
        style: { height: A, width: T, backgroundImage: "url('../bg.svg')", backgroundPosition: "top", objectFit: "cover" },
        children: [
          x == null && /* @__PURE__ */ p.jsx(Gu, {}),
          x == "article" && /* @__PURE__ */ p.jsx(Xu, {}),
          x == "conversation" && /* @__PURE__ */ p.jsx(tf, {}),
          x == "contact" && /* @__PURE__ */ p.jsx(Hu, {}),
          /* @__PURE__ */ p.jsx("div", { className: "p-2 absolute bottom-0 inset-x-0 w-full text-xs text-center bg-transparent ", children: /* @__PURE__ */ p.jsx("p", { className: "px-5 rounded-full w-max mx-auto text-slate-400", children: "Powered by Update Tech" }) })
        ]
      }
    ) : null
  ] });
};
function cd() {
  return /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx(
    ld,
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
    const e = document.getElementById("root");
    if (e)
      try {
        Rn(e).render(
          /* @__PURE__ */ p.jsx(rt.StrictMode, { children: /* @__PURE__ */ p.jsx(cd, {}) })
        );
      } catch (n) {
        console.error("Error rendering app:", n);
      }
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", t) : t();
}
export {
  ld as OmniChatWidget,
  bt as useWidgetConfigStore
};
