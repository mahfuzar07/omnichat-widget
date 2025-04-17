import * as $a from "react";
import oe, { useRef as I, useEffect as ke, useState as ne, createContext as di, useLayoutEffect as Fd, useId as La, useContext as ae, useInsertionEffect as Er, useCallback as Va, useMemo as Ke, Children as jd, isValidElement as Md, forwardRef as Td, Fragment as Br, createElement as Ad, Component as Rd } from "react";
import Ed from "react-dom";
var ra = { exports: {} }, yi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function Bd() {
  if (Lt)
    return yi;
  Lt = 1;
  var e = oe, i = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(o, f, l) {
    var d, u = {}, c = null, v = null;
    l !== void 0 && (c = "" + l), f.key !== void 0 && (c = "" + f.key), f.ref !== void 0 && (v = f.ref);
    for (d in f)
      a.call(f, d) && !s.hasOwnProperty(d) && (u[d] = f[d]);
    if (o && o.defaultProps)
      for (d in f = o.defaultProps, f)
        u[d] === void 0 && (u[d] = f[d]);
    return { $$typeof: i, type: o, key: c, ref: v, props: u, _owner: t.current };
  }
  return yi.Fragment = n, yi.jsx = r, yi.jsxs = r, yi;
}
var wi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function Dd() {
  return Vt || (Vt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = oe, i = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), t = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), o = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function k(m) {
      if (m === null || typeof m != "object")
        return null;
      var _ = g && m[g] || m[y];
      return typeof _ == "function" ? _ : null;
    }
    var p = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(m) {
      {
        for (var _ = arguments.length, F = new Array(_ > 1 ? _ - 1 : 0), E = 1; E < _; E++)
          F[E - 1] = arguments[E];
        P("error", m, F);
      }
    }
    function P(m, _, F) {
      {
        var E = p.ReactDebugCurrentFrame, V = E.getStackAddendum();
        V !== "" && (_ += "%s", F = F.concat([V]));
        var N = F.map(function(L) {
          return String(L);
        });
        N.unshift("Warning: " + _), Function.prototype.apply.call(console[m], console, N);
      }
    }
    var x = !1, S = !1, j = !1, M = !1, C = !1, T;
    T = Symbol.for("react.module.reference");
    function z(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === a || m === s || C || m === t || m === l || m === d || M || m === v || x || S || j || typeof m == "object" && m !== null && (m.$$typeof === c || m.$$typeof === u || m.$$typeof === r || m.$$typeof === o || m.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === T || m.getModuleId !== void 0));
    }
    function B(m, _, F) {
      var E = m.displayName;
      if (E)
        return E;
      var V = _.displayName || _.name || "";
      return V !== "" ? F + "(" + V + ")" : F;
    }
    function he(m) {
      return m.displayName || "Context";
    }
    function X(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case t:
          return "StrictMode";
        case l:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case o:
            var _ = m;
            return he(_) + ".Consumer";
          case r:
            var F = m;
            return he(F._context) + ".Provider";
          case f:
            return B(m, m.render, "ForwardRef");
          case u:
            var E = m.displayName || null;
            return E !== null ? E : X(m.type) || "Memo";
          case c: {
            var V = m, N = V._payload, L = V._init;
            try {
              return X(L(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ge = Object.assign, Oe = 0, mi, O, U, Ce, Pe, vi, hi;
    function gi() {
    }
    gi.__reactDisabledLog = !0;
    function Ui() {
      {
        if (Oe === 0) {
          mi = console.log, O = console.info, U = console.warn, Ce = console.error, Pe = console.group, vi = console.groupCollapsed, hi = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: gi,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        Oe++;
      }
    }
    function Ne() {
      {
        if (Oe--, Oe === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ge({}, m, {
              value: mi
            }),
            info: ge({}, m, {
              value: O
            }),
            warn: ge({}, m, {
              value: U
            }),
            error: ge({}, m, {
              value: Ce
            }),
            group: ge({}, m, {
              value: Pe
            }),
            groupCollapsed: ge({}, m, {
              value: vi
            }),
            groupEnd: ge({}, m, {
              value: hi
            })
          });
        }
        Oe < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Re = p.ReactCurrentDispatcher, Ee;
    function ye(m, _, F) {
      {
        if (Ee === void 0)
          try {
            throw Error();
          } catch (V) {
            var E = V.stack.trim().match(/\n( *(at )?)/);
            Ee = E && E[1] || "";
          }
        return `
` + Ee + m;
      }
    }
    var Fe = !1, Gi;
    {
      var nd = typeof WeakMap == "function" ? WeakMap : Map;
      Gi = new nd();
    }
    function xt(m, _) {
      if (!m || Fe)
        return "";
      {
        var F = Gi.get(m);
        if (F !== void 0)
          return F;
      }
      var E;
      Fe = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = Re.current, Re.current = null, Ui();
      try {
        if (_) {
          var L = function() {
            throw Error();
          };
          if (Object.defineProperty(L.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(L, []);
            } catch (re) {
              E = re;
            }
            Reflect.construct(m, [], L);
          } else {
            try {
              L.call();
            } catch (re) {
              E = re;
            }
            m.call(L.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            E = re;
          }
          m();
        }
      } catch (re) {
        if (re && E && typeof re.stack == "string") {
          for (var $ = re.stack.split(`
`), te = E.stack.split(`
`), K = $.length - 1, Y = te.length - 1; K >= 1 && Y >= 0 && $[K] !== te[Y]; )
            Y--;
          for (; K >= 1 && Y >= 0; K--, Y--)
            if ($[K] !== te[Y]) {
              if (K !== 1 || Y !== 1)
                do
                  if (K--, Y--, Y < 0 || $[K] !== te[Y]) {
                    var de = `
` + $[K].replace(" at new ", " at ");
                    return m.displayName && de.includes("<anonymous>") && (de = de.replace("<anonymous>", m.displayName)), typeof m == "function" && Gi.set(m, de), de;
                  }
                while (K >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        Fe = !1, Re.current = N, Ne(), Error.prepareStackTrace = V;
      }
      var Je = m ? m.displayName || m.name : "", Ie = Je ? ye(Je) : "";
      return typeof m == "function" && Gi.set(m, Ie), Ie;
    }
    function ad(m, _, F) {
      return xt(m, !1);
    }
    function td(m) {
      var _ = m.prototype;
      return !!(_ && _.isReactComponent);
    }
    function Ki(m, _, F) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return xt(m, td(m));
      if (typeof m == "string")
        return ye(m);
      switch (m) {
        case l:
          return ye("Suspense");
        case d:
          return ye("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case f:
            return ad(m.render);
          case u:
            return Ki(m.type, _, F);
          case c: {
            var E = m, V = E._payload, N = E._init;
            try {
              return Ki(N(V), _, F);
            } catch {
            }
          }
        }
      return "";
    }
    var pi = Object.prototype.hasOwnProperty, St = {}, Ct = p.ReactDebugCurrentFrame;
    function Yi(m) {
      if (m) {
        var _ = m._owner, F = Ki(m.type, m._source, _ ? _.type : null);
        Ct.setExtraStackFrame(F);
      } else
        Ct.setExtraStackFrame(null);
    }
    function sd(m, _, F, E, V) {
      {
        var N = Function.call.bind(pi);
        for (var L in m)
          if (N(m, L)) {
            var $ = void 0;
            try {
              if (typeof m[L] != "function") {
                var te = Error((E || "React class") + ": " + F + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[L] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw te.name = "Invariant Violation", te;
              }
              $ = m[L](_, L, E, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (K) {
              $ = K;
            }
            $ && !($ instanceof Error) && (Yi(V), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", F, L, typeof $), Yi(null)), $ instanceof Error && !($.message in St) && (St[$.message] = !0, Yi(V), w("Failed %s type: %s", F, $.message), Yi(null));
          }
      }
    }
    var rd = Array.isArray;
    function Dn(m) {
      return rd(m);
    }
    function od(m) {
      {
        var _ = typeof Symbol == "function" && Symbol.toStringTag, F = _ && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return F;
      }
    }
    function fd(m) {
      try {
        return Pt(m), !1;
      } catch {
        return !0;
      }
    }
    function Pt(m) {
      return "" + m;
    }
    function Ft(m) {
      if (fd(m))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", od(m)), Pt(m);
    }
    var ki = p.ReactCurrentOwner, dd = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, jt, Mt, $n;
    $n = {};
    function ld(m) {
      if (pi.call(m, "ref")) {
        var _ = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function ud(m) {
      if (pi.call(m, "key")) {
        var _ = Object.getOwnPropertyDescriptor(m, "key").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function cd(m, _) {
      if (typeof m.ref == "string" && ki.current && _ && ki.current.stateNode !== _) {
        var F = X(ki.current.type);
        $n[F] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(ki.current.type), m.ref), $n[F] = !0);
      }
    }
    function md(m, _) {
      {
        var F = function() {
          jt || (jt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        F.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: F,
          configurable: !0
        });
      }
    }
    function vd(m, _) {
      {
        var F = function() {
          Mt || (Mt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        F.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: F,
          configurable: !0
        });
      }
    }
    var hd = function(m, _, F, E, V, N, L) {
      var $ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: m,
        key: _,
        ref: F,
        props: L,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty($, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    };
    function gd(m, _, F, E, V) {
      {
        var N, L = {}, $ = null, te = null;
        F !== void 0 && (Ft(F), $ = "" + F), ud(_) && (Ft(_.key), $ = "" + _.key), ld(_) && (te = _.ref, cd(_, V));
        for (N in _)
          pi.call(_, N) && !dd.hasOwnProperty(N) && (L[N] = _[N]);
        if (m && m.defaultProps) {
          var K = m.defaultProps;
          for (N in K)
            L[N] === void 0 && (L[N] = K[N]);
        }
        if ($ || te) {
          var Y = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          $ && md(L, Y), te && vd(L, Y);
        }
        return hd(m, $, te, V, E, ki.current, L);
      }
    }
    var Ln = p.ReactCurrentOwner, Tt = p.ReactDebugCurrentFrame;
    function Xe(m) {
      if (m) {
        var _ = m._owner, F = Ki(m.type, m._source, _ ? _.type : null);
        Tt.setExtraStackFrame(F);
      } else
        Tt.setExtraStackFrame(null);
    }
    var Vn;
    Vn = !1;
    function zn(m) {
      return typeof m == "object" && m !== null && m.$$typeof === i;
    }
    function At() {
      {
        if (Ln.current) {
          var m = X(Ln.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function pd(m) {
      {
        if (m !== void 0) {
          var _ = m.fileName.replace(/^.*[\\\/]/, ""), F = m.lineNumber;
          return `

Check your code at ` + _ + ":" + F + ".";
        }
        return "";
      }
    }
    var Rt = {};
    function kd(m) {
      {
        var _ = At();
        if (!_) {
          var F = typeof m == "string" ? m : m.displayName || m.name;
          F && (_ = `

Check the top-level render call using <` + F + ">.");
        }
        return _;
      }
    }
    function Et(m, _) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var F = kd(_);
        if (Rt[F])
          return;
        Rt[F] = !0;
        var E = "";
        m && m._owner && m._owner !== Ln.current && (E = " It was passed a child from " + X(m._owner.type) + "."), Xe(m), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, E), Xe(null);
      }
    }
    function Bt(m, _) {
      {
        if (typeof m != "object")
          return;
        if (Dn(m))
          for (var F = 0; F < m.length; F++) {
            var E = m[F];
            zn(E) && Et(E, _);
          }
        else if (zn(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var V = k(m);
          if (typeof V == "function" && V !== m.entries)
            for (var N = V.call(m), L; !(L = N.next()).done; )
              zn(L.value) && Et(L.value, _);
        }
      }
    }
    function yd(m) {
      {
        var _ = m.type;
        if (_ == null || typeof _ == "string")
          return;
        var F;
        if (typeof _ == "function")
          F = _.propTypes;
        else if (typeof _ == "object" && (_.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        _.$$typeof === u))
          F = _.propTypes;
        else
          return;
        if (F) {
          var E = X(_);
          sd(F, m.props, "prop", E, m);
        } else if (_.PropTypes !== void 0 && !Vn) {
          Vn = !0;
          var V = X(_);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wd(m) {
      {
        for (var _ = Object.keys(m.props), F = 0; F < _.length; F++) {
          var E = _[F];
          if (E !== "children" && E !== "key") {
            Xe(m), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), Xe(null);
            break;
          }
        }
        m.ref !== null && (Xe(m), w("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
      }
    }
    var Dt = {};
    function $t(m, _, F, E, V, N) {
      {
        var L = z(m);
        if (!L) {
          var $ = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var te = pd(V);
          te ? $ += te : $ += At();
          var K;
          m === null ? K = "null" : Dn(m) ? K = "array" : m !== void 0 && m.$$typeof === i ? (K = "<" + (X(m.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : K = typeof m, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", K, $);
        }
        var Y = gd(m, _, F, V, N);
        if (Y == null)
          return Y;
        if (L) {
          var de = _.children;
          if (de !== void 0)
            if (E)
              if (Dn(de)) {
                for (var Je = 0; Je < de.length; Je++)
                  Bt(de[Je], m);
                Object.freeze && Object.freeze(de);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Bt(de, m);
        }
        if (pi.call(_, "key")) {
          var Ie = X(m), re = Object.keys(_).filter(function(Pd) {
            return Pd !== "key";
          }), On = re.length > 0 ? "{key: someKey, " + re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Dt[Ie + On]) {
            var Cd = re.length > 0 ? "{" + re.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, On, Ie, Cd, Ie), Dt[Ie + On] = !0;
          }
        }
        return m === a ? wd(Y) : yd(Y), Y;
      }
    }
    function bd(m, _, F) {
      return $t(m, _, F, !0);
    }
    function _d(m, _, F) {
      return $t(m, _, F, !1);
    }
    var xd = _d, Sd = bd;
    wi.Fragment = a, wi.jsx = xd, wi.jsxs = Sd;
  }()), wi;
}
process.env.NODE_ENV === "production" ? ra.exports = Bd() : ra.exports = Dd();
var h = ra.exports, oa, Xi = Ed;
if (process.env.NODE_ENV === "production")
  oa = Xi.createRoot, Xi.hydrateRoot;
else {
  var zt = Xi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  oa = function(e, i) {
    zt.usingClientEntryPoint = !0;
    try {
      return Xi.createRoot(e, i);
    } finally {
      zt.usingClientEntryPoint = !1;
    }
  };
}
var Dr = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ot = oe.createContext && /* @__PURE__ */ oe.createContext(Dr), $d = ["attr", "size", "title"];
function Ld(e, i) {
  if (e == null)
    return {};
  var n = Vd(e, i), a, t;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (t = 0; t < s.length; t++)
      a = s[t], !(i.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function Vd(e, i) {
  if (e == null)
    return {};
  var n = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (i.indexOf(a) >= 0)
        continue;
      n[a] = e[a];
    }
  return n;
}
function dn() {
  return dn = Object.assign ? Object.assign.bind() : function(e) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, dn.apply(this, arguments);
}
function Nt(e, i) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    i && (a = a.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function ln(e) {
  for (var i = 1; i < arguments.length; i++) {
    var n = arguments[i] != null ? arguments[i] : {};
    i % 2 ? Nt(Object(n), !0).forEach(function(a) {
      zd(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nt(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function zd(e, i, n) {
  return i = Od(i), i in e ? Object.defineProperty(e, i, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[i] = n, e;
}
function Od(e) {
  var i = Nd(e, "string");
  return typeof i == "symbol" ? i : i + "";
}
function Nd(e, i) {
  if (typeof e != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, i || "default");
    if (typeof a != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(e);
}
function $r(e) {
  return e && e.map((i, n) => /* @__PURE__ */ oe.createElement(i.tag, ln({
    key: n
  }, i.attr), $r(i.child)));
}
function fe(e) {
  return (i) => /* @__PURE__ */ oe.createElement(Id, dn({
    attr: ln({}, e.attr)
  }, i), $r(e.child));
}
function Id(e) {
  var i = (n) => {
    var {
      attr: a,
      size: t,
      title: s
    } = e, r = Ld(e, $d), o = t || n.size || "1em", f;
    return n.className && (f = n.className), e.className && (f = (f ? f + " " : "") + e.className), /* @__PURE__ */ oe.createElement("svg", dn({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, a, r, {
      className: f,
      style: ln(ln({
        color: e.color || n.color
      }, n.style), e.style),
      height: o,
      width: o,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ oe.createElement("title", null, s), e.children);
  };
  return Ot !== void 0 ? /* @__PURE__ */ oe.createElement(Ot.Consumer, null, (n) => i(n)) : i(Dr);
}
function qd(e) {
  return fe({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M408.67 298.53a21 21 0 1 1 20.9-21 20.85 20.85 0 0 1-20.9 21m-102.17 0a21 21 0 1 1 20.9-21 20.84 20.84 0 0 1-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35 68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7 2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 0 1 8.13 2.34L454 462.83a11.62 11.62 0 0 0 3.48 1.17 5 5 0 0 0 4.65-4.66 14.27 14.27 0 0 0-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94 18.94 0 0 1-.33-3.47 11.4 11.4 0 0 1 5-9.35" }, child: [] }, { tag: "path", attr: { d: "M246.13 178.51a24.47 24.47 0 0 1 0-48.94c12.77 0 24.38 11.65 24.38 24.47 1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 1 1 147.45 154a24.57 24.57 0 0 1-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.38 11.38 0 0 1-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 0 0 5.8 5.83 7.15 7.15 0 0 0 3.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.33 16.33 0 0 1 5.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.24 133.24 0 0 1-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48" }, child: [] }] })(e);
}
const It = (e) => {
  let i;
  const n = /* @__PURE__ */ new Set(), a = (l, d) => {
    const u = typeof l == "function" ? l(i) : l;
    if (!Object.is(u, i)) {
      const c = i;
      i = d ?? (typeof u != "object" || u === null) ? u : Object.assign({}, i, u), n.forEach((v) => v(i, c));
    }
  }, t = () => i, o = { setState: a, getState: t, getInitialState: () => f, subscribe: (l) => (n.add(l), () => n.delete(l)) }, f = i = e(a, t, o);
  return o;
}, Wd = (e) => e ? It(e) : It, Hd = (e) => e;
function Ud(e, i = Hd) {
  const n = oe.useSyncExternalStore(
    e.subscribe,
    () => i(e.getState()),
    () => i(e.getInitialState())
  );
  return oe.useDebugValue(n), n;
}
const qt = (e) => {
  const i = Wd(e), n = (a) => Ud(i, a);
  return Object.assign(n, i), n;
}, za = (e) => e ? qt(e) : qt, Ti = za((e) => ({
  widgetOpen: !1,
  toggleWidget: () => e((i) => ({ widgetOpen: !i.widgetOpen })),
  openWidget: () => e({ widgetOpen: !0 }),
  closeWidget: () => e({ widgetOpen: !1 })
})), Ni = za((e) => ({
  selectedPage: null,
  setSelectedPage: (i) => e({ selectedPage: i })
})), Me = za()((e) => ({
  // Default values
  widgetTitle: "Hi there 👋",
  primaryColor: "#4f46e5",
  position: "bottom-right",
  height: "85vh",
  width: "385px",
  messages: [],
  apiEndpoint: "/api/chat",
  // Actions to update the state
  setWidgetTitle: (i) => e({ widgetTitle: i }),
  setPrimaryColor: (i) => e({ primaryColor: i }),
  setPosition: (i) => e({ position: i }),
  setDimensions: (i, n) => e({ height: i, width: n }),
  addMessage: (i) => e((n) => ({
    messages: [...n.messages, i]
  })),
  clearMessages: () => e({ messages: [] }),
  setApiEndpoint: (i) => e({ apiEndpoint: i })
}));
function Lr(e) {
  return fe({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" }, child: [] }] })(e);
}
function Gd(e) {
  return fe({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 5 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" }, child: [] }] })(e);
}
function Kd(e) {
  return fe({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, child: [] }] })(e);
}
function Vr(e) {
  return fe({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z" }, child: [] }] })(e);
}
const Ji = [
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
], Wt = {
  value: null,
  addProjectionMetrics: null
};
function Yd(e, i) {
  let n = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), t = !1, s = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, f = 0;
  function l(u) {
    r.has(u) && (d.schedule(u), e()), f++, u(o);
  }
  const d = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, c = !1, v = !1) => {
      const y = v && t ? n : a;
      return c && r.add(u), y.has(u) || y.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      a.delete(u), r.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (o = u, t) {
        s = !0;
        return;
      }
      t = !0, [n, a] = [a, n], n.forEach(l), i && Wt.value && Wt.value.frameloop[i].push(f), f = 0, n.clear(), t = !1, s && (s = !1, d.process(u));
    }
  };
  return d;
}
const fa = {
  skipAnimations: !1,
  useManualTiming: !1
}, Xd = 40;
function zr(e, i) {
  let n = !1, a = !0;
  const t = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, r = Ji.reduce((p, w) => (p[w] = Yd(s, i ? w : void 0), p), {}), { read: o, resolveKeyframes: f, update: l, preRender: d, render: u, postRender: c } = r, v = () => {
    const p = performance.now();
    n = !1, t.delta = a ? 1e3 / 60 : Math.max(Math.min(p - t.timestamp, Xd), 1), t.timestamp = p, t.isProcessing = !0, o.process(t), f.process(t), l.process(t), d.process(t), u.process(t), c.process(t), t.isProcessing = !1, n && i && (a = !1, e(v));
  }, g = () => {
    n = !0, a = !0, t.isProcessing || e(v);
  };
  return { schedule: Ji.reduce((p, w) => {
    const P = r[w];
    return p[w] = (x, S = !1, j = !1) => (n || g(), P.schedule(x, S, j)), p;
  }, {}), cancel: (p) => {
    for (let w = 0; w < Ji.length; w++)
      r[Ji[w]].cancel(p);
  }, state: t, steps: r };
}
const me = /* @__NO_SIDE_EFFECTS__ */ (e) => e, { schedule: q, cancel: Le, state: Z, steps: Nn } = /* @__PURE__ */ zr(typeof requestAnimationFrame < "u" ? requestAnimationFrame : me, !0);
let tn;
function Jd() {
  tn = void 0;
}
const we = {
  now: () => (tn === void 0 && we.set(Z.isProcessing || fa.useManualTiming ? Z.timestamp : performance.now()), tn),
  set: (e) => {
    tn = e, queueMicrotask(Jd);
  }
}, Ht = /* @__PURE__ */ new Set();
function Cn(e, i, n) {
  e || Ht.has(i) || (console.warn(i), n && console.warn(n), Ht.add(i));
}
function Oa(e, i) {
  e.indexOf(i) === -1 && e.push(i);
}
function Pn(e, i) {
  const n = e.indexOf(i);
  n > -1 && e.splice(n, 1);
}
class Na {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return Oa(this.subscriptions, i), () => Pn(this.subscriptions, i);
  }
  notify(i, n, a) {
    const t = this.subscriptions.length;
    if (t)
      if (t === 1)
        this.subscriptions[0](i, n, a);
      else
        for (let s = 0; s < t; s++) {
          const r = this.subscriptions[s];
          r && r(i, n, a);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Or(e, i) {
  return i ? e * (1e3 / i) : 0;
}
const Ut = 30, Zd = (e) => !isNaN(parseFloat(e));
class Qd {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(i, n = {}) {
    this.version = "12.7.3", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (a, t = !0) => {
      const s = we.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(a), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), t && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(i), this.owner = n.owner;
  }
  setCurrent(i) {
    this.current = i, this.updatedAt = we.now(), this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = Zd(this.current));
  }
  setPrevFrameValue(i = this.current) {
    this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt;
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
  onChange(i) {
    return process.env.NODE_ENV !== "production" && Cn(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", i);
  }
  on(i, n) {
    this.events[i] || (this.events[i] = new Na());
    const a = this.events[i].add(n);
    return i === "change" ? () => {
      a(), q.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : a;
  }
  clearListeners() {
    for (const i in this.events)
      this.events[i].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(i, n) {
    this.passiveEffect = i, this.stopPassiveEffect = n;
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
  set(i, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(i, n) : this.passiveEffect(i, this.updateAndNotify);
  }
  setWithVelocity(i, n, a) {
    this.set(n), this.prev = void 0, this.prevFrameValue = i, this.prevUpdatedAt = this.updatedAt - a;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(i, n = !0) {
    this.updateAndNotify(i), this.prev = i, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
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
    const i = we.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > Ut)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ut);
    return Or(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  start(i) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = i(n), this.events.animationStart && this.events.animationStart.notify();
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
function Ai(e, i) {
  return new Qd(e, i);
}
const pe = {
  x: !1,
  y: !1
};
function Nr() {
  return pe.x || pe.y;
}
function Ir(e, i, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let a = document;
    i && (a = i.current);
    const t = (n == null ? void 0 : n[e]) ?? a.querySelectorAll(e);
    return t ? Array.from(t) : [];
  }
  return Array.from(e);
}
function qr(e, i) {
  const n = Ir(e), a = new AbortController(), t = {
    passive: !0,
    ...i,
    signal: a.signal
  };
  return [n, t, () => a.abort()];
}
function Gt(e) {
  return !(e.pointerType === "touch" || Nr());
}
function el(e, i, n = {}) {
  const [a, t, s] = qr(e, n), r = (o) => {
    if (!Gt(o))
      return;
    const { target: f } = o, l = i(f, o);
    if (typeof l != "function" || !f)
      return;
    const d = (u) => {
      Gt(u) && (l(u), f.removeEventListener("pointerleave", d));
    };
    f.addEventListener("pointerleave", d, t);
  };
  return a.forEach((o) => {
    o.addEventListener("pointerenter", r, t);
  }), s;
}
const Wr = (e, i) => i ? e === i ? !0 : Wr(e, i.parentElement) : !1, Ia = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, il = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function nl(e) {
  return il.has(e.tagName) || e.tabIndex !== -1;
}
const _i = /* @__PURE__ */ new WeakSet();
function Kt(e) {
  return (i) => {
    i.key === "Enter" && e(i);
  };
}
function In(e, i) {
  e.dispatchEvent(new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }));
}
const al = (e, i) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const a = Kt(() => {
    if (_i.has(n))
      return;
    In(n, "down");
    const t = Kt(() => {
      In(n, "up");
    }), s = () => In(n, "cancel");
    n.addEventListener("keyup", t, i), n.addEventListener("blur", s, i);
  });
  n.addEventListener("keydown", a, i), n.addEventListener("blur", () => n.removeEventListener("keydown", a), i);
};
function Yt(e) {
  return Ia(e) && !Nr();
}
function tl(e, i, n = {}) {
  const [a, t, s] = qr(e, n), r = (o) => {
    const f = o.currentTarget;
    if (!Yt(o) || _i.has(f))
      return;
    _i.add(f);
    const l = i(f, o), d = (v, g) => {
      window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", c), !(!Yt(v) || !_i.has(f)) && (_i.delete(f), typeof l == "function" && l(v, { success: g }));
    }, u = (v) => {
      d(v, f === window || f === document || n.useGlobalTarget || Wr(f, v.target));
    }, c = (v) => {
      d(v, !1);
    };
    window.addEventListener("pointerup", u, t), window.addEventListener("pointercancel", c, t);
  };
  return a.forEach((o) => {
    (n.useGlobalTarget ? window : o).addEventListener("pointerdown", r, t), o instanceof HTMLElement && (o.addEventListener("focus", (l) => al(l, t)), !nl(o) && !o.hasAttribute("tabindex") && (o.tabIndex = 0));
  }), s;
}
let li = () => {
}, Se = () => {
};
process.env.NODE_ENV !== "production" && (li = (e, i) => {
  !e && typeof console < "u" && console.warn(i);
}, Se = (e, i) => {
  if (!e)
    throw new Error(i);
});
const ti = /* @__NO_SIDE_EFFECTS__ */ (e, i, n) => {
  const a = i - e;
  return a === 0 ? 1 : (n - e) / a;
}, Ae = (e, i, n) => n > i ? i : n < e ? e : n, sl = 5;
function Hr(e, i, n) {
  const a = Math.max(i - sl, 0);
  return Or(n - e(a), i - a);
}
const H = {
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
}, ve = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, be = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, qn = 1e-3;
function rl({ duration: e = H.duration, bounce: i = H.bounce, velocity: n = H.velocity, mass: a = H.mass }) {
  let t, s;
  li(e <= /* @__PURE__ */ ve(H.maxDuration), "Spring duration must be 10 seconds or less");
  let r = 1 - i;
  r = Ae(H.minDamping, H.maxDamping, r), e = Ae(H.minDuration, H.maxDuration, /* @__PURE__ */ be(e)), r < 1 ? (t = (l) => {
    const d = l * r, u = d * e, c = d - n, v = da(l, r), g = Math.exp(-u);
    return qn - c / v * g;
  }, s = (l) => {
    const u = l * r * e, c = u * n + n, v = Math.pow(r, 2) * Math.pow(l, 2) * e, g = Math.exp(-u), y = da(Math.pow(l, 2), r);
    return (-t(l) + qn > 0 ? -1 : 1) * ((c - v) * g) / y;
  }) : (t = (l) => {
    const d = Math.exp(-l * e), u = (l - n) * e + 1;
    return -qn + d * u;
  }, s = (l) => {
    const d = Math.exp(-l * e), u = (n - l) * (e * e);
    return d * u;
  });
  const o = 5 / e, f = fl(t, s, o);
  if (e = /* @__PURE__ */ ve(e), isNaN(f))
    return {
      stiffness: H.stiffness,
      damping: H.damping,
      duration: e
    };
  {
    const l = Math.pow(f, 2) * a;
    return {
      stiffness: l,
      damping: r * 2 * Math.sqrt(a * l),
      duration: e
    };
  }
}
const ol = 12;
function fl(e, i, n) {
  let a = n;
  for (let t = 1; t < ol; t++)
    a = a - e(a) / i(a);
  return a;
}
function da(e, i) {
  return e * Math.sqrt(1 - i * i);
}
const un = 2e4;
function qa(e) {
  let i = 0;
  const n = 50;
  let a = e.next(i);
  for (; !a.done && i < un; )
    i += n, a = e.next(i);
  return i >= un ? 1 / 0 : i;
}
function Ur(e, i = 100, n) {
  const a = n({ ...e, keyframes: [0, i] }), t = Math.min(qa(a), un);
  return {
    type: "keyframes",
    ease: (s) => a.next(t * s).value / i,
    duration: /* @__PURE__ */ be(t)
  };
}
const dl = {};
// @__NO_SIDE_EFFECTS__
function Wa(e) {
  let i;
  return () => (i === void 0 && (i = e()), i);
}
function ll(e, i) {
  const n = /* @__PURE__ */ Wa(e);
  return () => dl[i] ?? n();
}
const Ri = /* @__PURE__ */ ll(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Gr = (e, i, n = 10) => {
  let a = "";
  const t = Math.max(Math.round(i / n), 2);
  for (let s = 0; s < t; s++)
    a += e(s / (t - 1)) + ", ";
  return `linear(${a.substring(0, a.length - 2)})`;
}, ul = ["duration", "bounce"], cl = ["stiffness", "damping", "mass"];
function Xt(e, i) {
  return i.some((n) => e[n] !== void 0);
}
function ml(e) {
  let i = {
    velocity: H.velocity,
    stiffness: H.stiffness,
    damping: H.damping,
    mass: H.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Xt(e, cl) && Xt(e, ul))
    if (e.visualDuration) {
      const n = e.visualDuration, a = 2 * Math.PI / (n * 1.2), t = a * a, s = 2 * Ae(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(t);
      i = {
        ...i,
        mass: H.mass,
        stiffness: t,
        damping: s
      };
    } else {
      const n = rl(e);
      i = {
        ...i,
        ...n,
        mass: H.mass
      }, i.isResolvedFromDuration = !0;
    }
  return i;
}
function Ei(e = H.visualDuration, i = H.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: i
  } : e;
  let { restSpeed: a, restDelta: t } = n;
  const s = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], o = { done: !1, value: s }, { stiffness: f, damping: l, mass: d, duration: u, velocity: c, isResolvedFromDuration: v } = ml({
    ...n,
    velocity: -/* @__PURE__ */ be(n.velocity || 0)
  }), g = c || 0, y = l / (2 * Math.sqrt(f * d)), k = r - s, p = /* @__PURE__ */ be(Math.sqrt(f / d)), w = Math.abs(k) < 5;
  a || (a = w ? H.restSpeed.granular : H.restSpeed.default), t || (t = w ? H.restDelta.granular : H.restDelta.default);
  let P;
  if (y < 1) {
    const S = da(p, y);
    P = (j) => {
      const M = Math.exp(-y * p * j);
      return r - M * ((g + y * p * k) / S * Math.sin(S * j) + k * Math.cos(S * j));
    };
  } else if (y === 1)
    P = (S) => r - Math.exp(-p * S) * (k + (g + p * k) * S);
  else {
    const S = p * Math.sqrt(y * y - 1);
    P = (j) => {
      const M = Math.exp(-y * p * j), C = Math.min(S * j, 300);
      return r - M * ((g + y * p * k) * Math.sinh(C) + S * k * Math.cosh(C)) / S;
    };
  }
  const x = {
    calculatedDuration: v && u || null,
    next: (S) => {
      const j = P(S);
      if (v)
        o.done = S >= u;
      else {
        let M = 0;
        y < 1 && (M = S === 0 ? /* @__PURE__ */ ve(g) : Hr(P, S, j));
        const C = Math.abs(M) <= a, T = Math.abs(r - j) <= t;
        o.done = C && T;
      }
      return o.value = o.done ? r : j, o;
    },
    toString: () => {
      const S = Math.min(qa(x), un), j = Gr((M) => x.next(S * M).value, S, 30);
      return S + "ms " + j;
    },
    toTransition: () => {
    }
  };
  return x;
}
Ei.applyToOptions = (e) => {
  const i = Ur(e, 100, Ei);
  return e.ease = Ri() ? i.ease : "easeOut", e.duration = /* @__PURE__ */ ve(i.duration), e.type = "keyframes", e;
};
const vl = (e, i, n) => {
  const a = i - e;
  return ((n - e) % a + a) % a + e;
}, Kr = (e) => Array.isArray(e) && typeof e[0] != "number";
function Yr(e, i) {
  return Kr(e) ? e[vl(0, e.length, i)] : e;
}
const W = (e, i, n) => e + (i - e) * n;
function Xr(e, i) {
  const n = e[e.length - 1];
  for (let a = 1; a <= i; a++) {
    const t = /* @__PURE__ */ ti(0, i, a);
    e.push(W(n, 1, t));
  }
}
function Jr(e) {
  const i = [0];
  return Xr(i, e.length - 1), i;
}
const J = (e) => !!(e && e.getVelocity);
function Ha(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function Zr(e, i, n, a) {
  return typeof e == "string" && Ha(i) ? Ir(e, n, a) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e : [e];
}
function hl(e, i, n) {
  return e * (i + 1);
}
function Jt(e, i, n, a) {
  return typeof i == "number" ? i : i.startsWith("-") || i.startsWith("+") ? Math.max(0, e + parseFloat(i)) : i === "<" ? n : a.get(i) ?? e;
}
function gl(e, i, n) {
  for (let a = 0; a < e.length; a++) {
    const t = e[a];
    t.at > i && t.at < n && (Pn(e, t), a--);
  }
}
function pl(e, i, n, a, t, s) {
  gl(e, t, s);
  for (let r = 0; r < i.length; r++)
    e.push({
      value: i[r],
      at: W(t, s, a[r]),
      easing: Yr(n, r)
    });
}
function kl(e, i) {
  for (let n = 0; n < e.length; n++)
    e[n] = e[n] / (i + 1);
}
function yl(e, i) {
  return e.at === i.at ? e.value === null ? 1 : i.value === null ? -1 : 0 : e.at - i.at;
}
function Fn(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
const wl = "easeInOut", bl = 20;
function _l(e, { defaultTransition: i = {}, ...n } = {}, a, t) {
  const s = i.duration || 0.3, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), f = {}, l = /* @__PURE__ */ new Map();
  let d = 0, u = 0, c = 0;
  for (let v = 0; v < e.length; v++) {
    const g = e[v];
    if (typeof g == "string") {
      l.set(g, u);
      continue;
    } else if (!Array.isArray(g)) {
      l.set(g.name, Jt(u, g.at, d, l));
      continue;
    }
    let [y, k, p = {}] = g;
    p.at !== void 0 && (u = Jt(u, p.at, d, l));
    let w = 0;
    const P = (x, S, j, M = 0, C = 0) => {
      const T = xl(x), { delay: z = 0, times: B = Jr(T), type: he = "keyframes", repeat: X, repeatType: ge, repeatDelay: Oe = 0, ...mi } = S;
      let { ease: O = i.ease || "easeOut", duration: U } = S;
      const Ce = typeof z == "function" ? z(M, C) : z, Pe = T.length, vi = Fn(he) ? he : t == null ? void 0 : t[he];
      if (Pe <= 2 && vi) {
        let Ne = 100;
        if (Pe === 2 && Pl(T)) {
          const ye = T[1] - T[0];
          Ne = Math.abs(ye);
        }
        const Re = { ...mi };
        U !== void 0 && (Re.duration = /* @__PURE__ */ ve(U));
        const Ee = Ur(Re, Ne, vi);
        O = Ee.ease, U = Ee.duration;
      }
      U ?? (U = s);
      const hi = u + Ce;
      B.length === 1 && B[0] === 0 && (B[1] = 1);
      const gi = B.length - T.length;
      if (gi > 0 && Xr(B, gi), T.length === 1 && T.unshift(null), X) {
        Se(X < bl, "Repeat count too high, must be less than 20"), U = hl(U, X);
        const Ne = [...T], Re = [...B];
        O = Array.isArray(O) ? [...O] : [O];
        const Ee = [...O];
        for (let ye = 0; ye < X; ye++) {
          T.push(...Ne);
          for (let Fe = 0; Fe < Ne.length; Fe++)
            B.push(Re[Fe] + (ye + 1)), O.push(Fe === 0 ? "linear" : Yr(Ee, Fe - 1));
        }
        kl(B, X);
      }
      const Ui = hi + U;
      pl(j, T, O, B, hi, Ui), w = Math.max(Ce + U, w), c = Math.max(Ui, c);
    };
    if (J(y)) {
      const x = Zt(y, o);
      P(k, p, Qt("default", x));
    } else {
      const x = Zr(y, k, a, f), S = x.length;
      for (let j = 0; j < S; j++) {
        k = k, p = p;
        const M = x[j], C = Zt(M, o);
        for (const T in k)
          P(k[T], Sl(p, T), Qt(T, C), j, S);
      }
    }
    d = u, u += w;
  }
  return o.forEach((v, g) => {
    for (const y in v) {
      const k = v[y];
      k.sort(yl);
      const p = [], w = [], P = [];
      for (let S = 0; S < k.length; S++) {
        const { at: j, value: M, easing: C } = k[S];
        p.push(M), w.push(/* @__PURE__ */ ti(0, c, j)), P.push(C || "easeOut");
      }
      w[0] !== 0 && (w.unshift(0), p.unshift(p[0]), P.unshift(wl)), w[w.length - 1] !== 1 && (w.push(1), p.push(null)), r.has(g) || r.set(g, {
        keyframes: {},
        transition: {}
      });
      const x = r.get(g);
      x.keyframes[y] = p, x.transition[y] = {
        ...i,
        duration: c,
        ease: P,
        times: w,
        ...n
      };
    }
  }), r;
}
function Zt(e, i) {
  return !i.has(e) && i.set(e, {}), i.get(e);
}
function Qt(e, i) {
  return i[e] || (i[e] = []), i[e];
}
function xl(e) {
  return Array.isArray(e) ? e : [e];
}
function Sl(e, i) {
  return e && e[i] ? {
    ...e,
    ...e[i]
  } : { ...e };
}
const Cl = (e) => typeof e == "number", Pl = (e) => e.every(Cl), Bi = /* @__PURE__ */ new WeakMap(), ui = [
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
], Ye = new Set(ui), Qr = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...ui
]), la = (e) => Array.isArray(e), Fl = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), jl = (e) => la(e) ? e[e.length - 1] || 0 : e;
function es(e) {
  const i = [{}, {}];
  return e == null || e.values.forEach((n, a) => {
    i[0][a] = n.get(), i[1][a] = n.getVelocity();
  }), i;
}
function Ua(e, i, n, a) {
  if (typeof i == "function") {
    const [t, s] = es(a);
    i = i(n !== void 0 ? n : e.custom, t, s);
  }
  if (typeof i == "string" && (i = e.variants && e.variants[i]), typeof i == "function") {
    const [t, s] = es(a);
    i = i(n !== void 0 ? n : e.custom, t, s);
  }
  return i;
}
function Di(e, i, n) {
  const a = e.getProps();
  return Ua(a, i, n !== void 0 ? n : a.custom, e);
}
function Ml(e, i, n) {
  e.hasValue(i) ? e.getValue(i).set(n) : e.addValue(i, Ai(n));
}
function Tl(e, i) {
  const n = Di(e, i);
  let { transitionEnd: a = {}, transition: t = {}, ...s } = n || {};
  s = { ...s, ...a };
  for (const r in s) {
    const o = jl(s[r]);
    Ml(e, r, o);
  }
}
function Al(e) {
  return !!(J(e) && e.add);
}
function ua(e, i) {
  const n = e.getValue("willChange");
  if (Al(n))
    return n.add(i);
  if (!n && fa.WillChange) {
    const a = new fa.WillChange("auto");
    e.addValue("willChange", a), a.add(i);
  }
}
const Ga = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Rl = "framerAppearId", eo = "data-" + Ga(Rl);
function io(e) {
  return e.props[eo];
}
const no = (e, i, n) => (((1 - 3 * n + 3 * i) * e + (3 * n - 6 * i)) * e + 3 * i) * e, El = 1e-7, Bl = 12;
function Dl(e, i, n, a, t) {
  let s, r, o = 0;
  do
    r = i + (n - i) / 2, s = no(r, a, t) - e, s > 0 ? n = r : i = r;
  while (Math.abs(s) > El && ++o < Bl);
  return r;
}
function Ii(e, i, n, a) {
  if (e === i && n === a)
    return me;
  const t = (s) => Dl(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : no(t(s), i, a);
}
const ao = (e) => (i) => i <= 0.5 ? e(2 * i) / 2 : (2 - e(2 * (1 - i))) / 2, to = (e) => (i) => 1 - e(1 - i), so = /* @__PURE__ */ Ii(0.33, 1.53, 0.69, 0.99), Ka = /* @__PURE__ */ to(so), ro = /* @__PURE__ */ ao(Ka), oo = (e) => (e *= 2) < 1 ? 0.5 * Ka(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Ya = (e) => 1 - Math.sin(Math.acos(e)), fo = to(Ya), lo = ao(Ya), uo = (e) => /^0[^.\s]+$/u.test(e);
function $l(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || uo(e) : !0;
}
const ci = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, $i = {
  ...ci,
  transform: (e) => Ae(0, 1, e)
}, Zi = {
  ...ci,
  default: 1
}, Si = (e) => Math.round(e * 1e5) / 1e5, Xa = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ll(e) {
  return e == null;
}
const Vl = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ja = (e, i) => (n) => !!(typeof n == "string" && Vl.test(n) && n.startsWith(e) || i && !Ll(n) && Object.prototype.hasOwnProperty.call(n, i)), co = (e, i, n) => (a) => {
  if (typeof a != "string")
    return a;
  const [t, s, r, o] = a.match(Xa);
  return {
    [e]: parseFloat(t),
    [i]: parseFloat(s),
    [n]: parseFloat(r),
    alpha: o !== void 0 ? parseFloat(o) : 1
  };
}, zl = (e) => Ae(0, 255, e), Wn = {
  ...ci,
  transform: (e) => Math.round(zl(e))
}, He = {
  test: /* @__PURE__ */ Ja("rgb", "red"),
  parse: /* @__PURE__ */ co("red", "green", "blue"),
  transform: ({ red: e, green: i, blue: n, alpha: a = 1 }) => "rgba(" + Wn.transform(e) + ", " + Wn.transform(i) + ", " + Wn.transform(n) + ", " + Si($i.transform(a)) + ")"
};
function Ol(e) {
  let i = "", n = "", a = "", t = "";
  return e.length > 5 ? (i = e.substring(1, 3), n = e.substring(3, 5), a = e.substring(5, 7), t = e.substring(7, 9)) : (i = e.substring(1, 2), n = e.substring(2, 3), a = e.substring(3, 4), t = e.substring(4, 5), i += i, n += n, a += a, t += t), {
    red: parseInt(i, 16),
    green: parseInt(n, 16),
    blue: parseInt(a, 16),
    alpha: t ? parseInt(t, 16) / 255 : 1
  };
}
const ca = {
  test: /* @__PURE__ */ Ja("#"),
  parse: Ol,
  transform: He.transform
}, qi = (e) => ({
  test: (i) => typeof i == "string" && i.endsWith(e) && i.split(" ").length === 1,
  parse: parseFloat,
  transform: (i) => `${i}${e}`
}), Be = /* @__PURE__ */ qi("deg"), _e = /* @__PURE__ */ qi("%"), R = /* @__PURE__ */ qi("px"), Nl = /* @__PURE__ */ qi("vh"), Il = /* @__PURE__ */ qi("vw"), is = {
  ..._e,
  parse: (e) => _e.parse(e) / 100,
  transform: (e) => _e.transform(e * 100)
}, Ze = {
  test: /* @__PURE__ */ Ja("hsl", "hue"),
  parse: /* @__PURE__ */ co("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: i, lightness: n, alpha: a = 1 }) => "hsla(" + Math.round(e) + ", " + _e.transform(Si(i)) + ", " + _e.transform(Si(n)) + ", " + Si($i.transform(a)) + ")"
}, ie = {
  test: (e) => He.test(e) || ca.test(e) || Ze.test(e),
  parse: (e) => He.test(e) ? He.parse(e) : Ze.test(e) ? Ze.parse(e) : ca.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? He.transform(e) : Ze.transform(e)
}, ql = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Wl(e) {
  var i, n;
  return isNaN(e) && typeof e == "string" && (((i = e.match(Xa)) == null ? void 0 : i.length) || 0) + (((n = e.match(ql)) == null ? void 0 : n.length) || 0) > 0;
}
const mo = "number", vo = "color", Hl = "var", Ul = "var(", ns = "${}", Gl = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Li(e) {
  const i = e.toString(), n = [], a = {
    color: [],
    number: [],
    var: []
  }, t = [];
  let s = 0;
  const o = i.replace(Gl, (f) => (ie.test(f) ? (a.color.push(s), t.push(vo), n.push(ie.parse(f))) : f.startsWith(Ul) ? (a.var.push(s), t.push(Hl), n.push(f)) : (a.number.push(s), t.push(mo), n.push(parseFloat(f))), ++s, ns)).split(ns);
  return { values: n, split: o, indexes: a, types: t };
}
function ho(e) {
  return Li(e).values;
}
function go(e) {
  const { split: i, types: n } = Li(e), a = i.length;
  return (t) => {
    let s = "";
    for (let r = 0; r < a; r++)
      if (s += i[r], t[r] !== void 0) {
        const o = n[r];
        o === mo ? s += Si(t[r]) : o === vo ? s += ie.transform(t[r]) : s += t[r];
      }
    return s;
  };
}
const Kl = (e) => typeof e == "number" ? 0 : e;
function Yl(e) {
  const i = ho(e);
  return go(e)(i.map(Kl));
}
const Ve = {
  test: Wl,
  parse: ho,
  createTransformer: go,
  getAnimatableNone: Yl
}, Xl = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Jl(e) {
  const [i, n] = e.slice(0, -1).split("(");
  if (i === "drop-shadow")
    return e;
  const [a] = n.match(Xa) || [];
  if (!a)
    return e;
  const t = n.replace(a, "");
  let s = Xl.has(i) ? 1 : 0;
  return a !== n && (s *= 100), i + "(" + s + t + ")";
}
const Zl = /\b([a-z-]*)\(.*?\)/gu, ma = {
  ...Ve,
  getAnimatableNone: (e) => {
    const i = e.match(Zl);
    return i ? i.map(Jl).join(" ") : e;
  }
}, Ql = {
  // Border props
  borderWidth: R,
  borderTopWidth: R,
  borderRightWidth: R,
  borderBottomWidth: R,
  borderLeftWidth: R,
  borderRadius: R,
  radius: R,
  borderTopLeftRadius: R,
  borderTopRightRadius: R,
  borderBottomRightRadius: R,
  borderBottomLeftRadius: R,
  // Positioning props
  width: R,
  maxWidth: R,
  height: R,
  maxHeight: R,
  top: R,
  right: R,
  bottom: R,
  left: R,
  // Spacing props
  padding: R,
  paddingTop: R,
  paddingRight: R,
  paddingBottom: R,
  paddingLeft: R,
  margin: R,
  marginTop: R,
  marginRight: R,
  marginBottom: R,
  marginLeft: R,
  // Misc
  backgroundPositionX: R,
  backgroundPositionY: R
}, eu = {
  rotate: Be,
  rotateX: Be,
  rotateY: Be,
  rotateZ: Be,
  scale: Zi,
  scaleX: Zi,
  scaleY: Zi,
  scaleZ: Zi,
  skew: Be,
  skewX: Be,
  skewY: Be,
  distance: R,
  translateX: R,
  translateY: R,
  translateZ: R,
  x: R,
  y: R,
  z: R,
  perspective: R,
  transformPerspective: R,
  opacity: $i,
  originX: is,
  originY: is,
  originZ: R
}, as = {
  ...ci,
  transform: Math.round
}, Za = {
  ...Ql,
  ...eu,
  zIndex: as,
  size: R,
  // SVG
  fillOpacity: $i,
  strokeOpacity: $i,
  numOctaves: as
}, iu = {
  ...Za,
  // Color props
  color: ie,
  backgroundColor: ie,
  outlineColor: ie,
  fill: ie,
  stroke: ie,
  // Border props
  borderColor: ie,
  borderTopColor: ie,
  borderRightColor: ie,
  borderBottomColor: ie,
  borderLeftColor: ie,
  filter: ma,
  WebkitFilter: ma
}, po = (e) => iu[e];
function ko(e, i) {
  let n = po(e);
  return n !== ma && (n = Ve), n.getAnimatableNone ? n.getAnimatableNone(i) : void 0;
}
const nu = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function au(e, i, n) {
  let a = 0, t;
  for (; a < e.length && !t; ) {
    const s = e[a];
    typeof s == "string" && !nu.has(s) && Li(s).values.length && (t = e[a]), a++;
  }
  if (t && n)
    for (const s of i)
      e[s] = ko(n, t);
}
const Ue = (e) => e * 180 / Math.PI, va = (e) => {
  const i = Ue(Math.atan2(e[1], e[0]));
  return ha(i);
}, tu = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: va,
  rotateZ: va,
  skewX: (e) => Ue(Math.atan(e[1])),
  skewY: (e) => Ue(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, ha = (e) => (e = e % 360, e < 0 && (e += 360), e), ts = va, ss = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), rs = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), su = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ss,
  scaleY: rs,
  scale: (e) => (ss(e) + rs(e)) / 2,
  rotateX: (e) => ha(Ue(Math.atan2(e[6], e[5]))),
  rotateY: (e) => ha(Ue(Math.atan2(-e[2], e[0]))),
  rotateZ: ts,
  rotate: ts,
  skewX: (e) => Ue(Math.atan(e[4])),
  skewY: (e) => Ue(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function os(e) {
  return e.includes("scale") ? 1 : 0;
}
function ga(e, i) {
  if (!e || e === "none")
    return os(i);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let a, t;
  if (n)
    a = su, t = n;
  else {
    const o = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    a = tu, t = o;
  }
  if (!t)
    return os(i);
  const s = a[i], r = t[1].split(",").map(ou);
  return typeof s == "function" ? s(r) : r[s];
}
const ru = (e, i) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return ga(n, i);
};
function ou(e) {
  return parseFloat(e.trim());
}
const fs = (e) => e === ci || e === R, fu = /* @__PURE__ */ new Set(["x", "y", "z"]), du = ui.filter((e) => !fu.has(e));
function lu(e) {
  const i = [];
  return du.forEach((n) => {
    const a = e.getValue(n);
    a !== void 0 && (i.push([n, a.get()]), a.set(n.startsWith("scale") ? 1 : 0));
  }), i;
}
const si = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: i = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(i) - parseFloat(n),
  height: ({ y: e }, { paddingTop: i = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(i) - parseFloat(n),
  top: (e, { top: i }) => parseFloat(i),
  left: (e, { left: i }) => parseFloat(i),
  bottom: ({ y: e }, { top: i }) => parseFloat(i) + (e.max - e.min),
  right: ({ x: e }, { left: i }) => parseFloat(i) + (e.max - e.min),
  // Transform
  x: (e, { transform: i }) => ga(i, "x"),
  y: (e, { transform: i }) => ga(i, "y")
};
si.translateX = si.x;
si.translateY = si.y;
const Ge = /* @__PURE__ */ new Set();
let pa = !1, ka = !1;
function yo() {
  if (ka) {
    const e = Array.from(Ge).filter((a) => a.needsMeasurement), i = new Set(e.map((a) => a.element)), n = /* @__PURE__ */ new Map();
    i.forEach((a) => {
      const t = lu(a);
      t.length && (n.set(a, t), a.render());
    }), e.forEach((a) => a.measureInitialState()), i.forEach((a) => {
      a.render();
      const t = n.get(a);
      t && t.forEach(([s, r]) => {
        var o;
        (o = a.getValue(s)) == null || o.set(r);
      });
    }), e.forEach((a) => a.measureEndState()), e.forEach((a) => {
      a.suspendedScrollY !== void 0 && window.scrollTo(0, a.suspendedScrollY);
    });
  }
  ka = !1, pa = !1, Ge.forEach((e) => e.complete()), Ge.clear();
}
function wo() {
  Ge.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ka = !0);
  });
}
function uu() {
  wo(), yo();
}
class Qa {
  constructor(i, n, a, t, s, r = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...i], this.onComplete = n, this.name = a, this.motionValue = t, this.element = s, this.isAsync = r;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Ge.add(this), pa || (pa = !0, q.read(wo), q.resolveKeyframes(yo))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, name: n, element: a, motionValue: t } = this;
    for (let s = 0; s < i.length; s++)
      if (i[s] === null)
        if (s === 0) {
          const r = t == null ? void 0 : t.get(), o = i[i.length - 1];
          if (r !== void 0)
            i[0] = r;
          else if (a && n) {
            const f = a.readValue(n, o);
            f != null && (i[0] = f);
          }
          i[0] === void 0 && (i[0] = o), t && r === void 0 && t.set(i[0]);
        } else
          i[s] = i[s - 1];
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Ge.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Ge.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const bo = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), _o = (e) => (i) => typeof i == "string" && i.startsWith(e), et = /* @__PURE__ */ _o("--"), cu = /* @__PURE__ */ _o("var(--"), it = (e) => cu(e) ? mu.test(e.split("/*")[0].trim()) : !1, mu = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, vu = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function hu(e) {
  const i = vu.exec(e);
  if (!i)
    return [,];
  const [, n, a, t] = i;
  return [`--${n ?? a}`, t];
}
const gu = 4;
function xo(e, i, n = 1) {
  Se(n <= gu, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [a, t] = hu(e);
  if (!a)
    return;
  const s = window.getComputedStyle(i).getPropertyValue(a);
  if (s) {
    const r = s.trim();
    return bo(r) ? parseFloat(r) : r;
  }
  return it(t) ? xo(t, i, n + 1) : t;
}
const So = (e) => (i) => i.test(e), pu = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Co = [ci, R, _e, Be, Il, Nl, pu], ds = (e) => Co.find(So(e));
class Po extends Qa {
  constructor(i, n, a, t, s) {
    super(i, n, a, t, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: n, name: a } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let f = 0; f < i.length; f++) {
      let l = i[f];
      if (typeof l == "string" && (l = l.trim(), it(l))) {
        const d = xo(l, n.current);
        d !== void 0 && (i[f] = d), f === i.length - 1 && (this.finalKeyframe = l);
      }
    }
    if (this.resolveNoneKeyframes(), !Qr.has(a) || i.length !== 2)
      return;
    const [t, s] = i, r = ds(t), o = ds(s);
    if (r !== o)
      if (fs(r) && fs(o))
        for (let f = 0; f < i.length; f++) {
          const l = i[f];
          typeof l == "string" && (i[f] = parseFloat(l));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: n } = this, a = [];
    for (let t = 0; t < i.length; t++)
      $l(i[t]) && a.push(t);
    a.length && au(i, a, n);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: n, name: a } = this;
    if (!i || !i.current)
      return;
    a === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = si[a](i.measureViewportBox(), window.getComputedStyle(i.current)), n[0] = this.measuredOrigin;
    const t = n[n.length - 1];
    t !== void 0 && i.getValue(a, t).jump(t, !1);
  }
  measureEndState() {
    var o;
    const { element: i, name: n, unresolvedKeyframes: a } = this;
    if (!i || !i.current)
      return;
    const t = i.getValue(n);
    t && t.jump(this.measuredOrigin, !1);
    const s = a.length - 1, r = a[s];
    a[s] = si[n](i.measureViewportBox(), window.getComputedStyle(i.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), (o = this.removedTransforms) != null && o.length && this.removedTransforms.forEach(([f, l]) => {
      i.getValue(f).set(l);
    }), this.resolveNoneKeyframes();
  }
}
const ls = (e, i) => i === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Ve.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function ku(e) {
  const i = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== i)
      return !0;
}
function yu(e, i, n, a) {
  const t = e[0];
  if (t === null)
    return !1;
  if (i === "display" || i === "visibility")
    return !0;
  const s = e[e.length - 1], r = ls(t, i), o = ls(s, i);
  return li(r === o, `You are trying to animate ${i} from "${t}" to "${s}". ${t} is not an animatable value - to enable this animation set ${t} to a value animatable to ${s} via the \`style\` property.`), !r || !o ? !1 : ku(e) || (n === "spring" || Fn(n)) && a;
}
const wu = (e) => e !== null;
function jn(e, { repeat: i, repeatType: n = "loop" }, a) {
  const t = e.filter(wu), s = i && n !== "loop" && i % 2 === 1 ? 0 : t.length - 1;
  return !s || a === void 0 ? t[s] : a;
}
const bu = 40;
class Fo {
  constructor({ autoplay: i = !0, delay: n = 0, type: a = "keyframes", repeat: t = 0, repeatDelay: s = 0, repeatType: r = "loop", ...o }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = we.now(), this.options = {
      autoplay: i,
      delay: n,
      type: a,
      repeat: t,
      repeatDelay: s,
      repeatType: r,
      ...o
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > bu ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && uu(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(i, n) {
    this.resolvedAt = we.now(), this.hasAttemptedResolve = !0;
    const { name: a, type: t, velocity: s, delay: r, onComplete: o, onUpdate: f, isGenerator: l } = this.options;
    if (!l && !yu(i, a, t, s))
      if (r)
        this.options.duration = 0;
      else {
        f && f(jn(i, this.options, n)), o && o(), this.resolveFinishedPromise();
        return;
      }
    const d = this.initPlayback(i, n);
    d !== !1 && (this._resolved = {
      keyframes: i,
      finalKeyframe: n,
      ...d
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(i, n) {
    return this.currentFinishedPromise.then(i, n);
  }
  flatten() {
    this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((i) => {
      this.resolveFinishedPromise = i;
    });
  }
}
function Hn(e, i, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (i - e) * 6 * n : n < 1 / 2 ? i : n < 2 / 3 ? e + (i - e) * (2 / 3 - n) * 6 : e;
}
function _u({ hue: e, saturation: i, lightness: n, alpha: a }) {
  e /= 360, i /= 100, n /= 100;
  let t = 0, s = 0, r = 0;
  if (!i)
    t = s = r = n;
  else {
    const o = n < 0.5 ? n * (1 + i) : n + i - n * i, f = 2 * n - o;
    t = Hn(f, o, e + 1 / 3), s = Hn(f, o, e), r = Hn(f, o, e - 1 / 3);
  }
  return {
    red: Math.round(t * 255),
    green: Math.round(s * 255),
    blue: Math.round(r * 255),
    alpha: a
  };
}
function cn(e, i) {
  return (n) => n > 0 ? i : e;
}
const Un = (e, i, n) => {
  const a = e * e, t = n * (i * i - a) + a;
  return t < 0 ? 0 : Math.sqrt(t);
}, xu = [ca, He, Ze], Su = (e) => xu.find((i) => i.test(e));
function us(e) {
  const i = Su(e);
  if (li(!!i, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !i)
    return !1;
  let n = i.parse(e);
  return i === Ze && (n = _u(n)), n;
}
const cs = (e, i) => {
  const n = us(e), a = us(i);
  if (!n || !a)
    return cn(e, i);
  const t = { ...n };
  return (s) => (t.red = Un(n.red, a.red, s), t.green = Un(n.green, a.green, s), t.blue = Un(n.blue, a.blue, s), t.alpha = W(n.alpha, a.alpha, s), He.transform(t));
}, Cu = (e, i) => (n) => i(e(n)), Wi = (...e) => e.reduce(Cu), ya = /* @__PURE__ */ new Set(["none", "hidden"]);
function Pu(e, i) {
  return ya.has(e) ? (n) => n <= 0 ? e : i : (n) => n >= 1 ? i : e;
}
function Fu(e, i) {
  return (n) => W(e, i, n);
}
function nt(e) {
  return typeof e == "number" ? Fu : typeof e == "string" ? it(e) ? cn : ie.test(e) ? cs : Tu : Array.isArray(e) ? jo : typeof e == "object" ? ie.test(e) ? cs : ju : cn;
}
function jo(e, i) {
  const n = [...e], a = n.length, t = e.map((s, r) => nt(s)(s, i[r]));
  return (s) => {
    for (let r = 0; r < a; r++)
      n[r] = t[r](s);
    return n;
  };
}
function ju(e, i) {
  const n = { ...e, ...i }, a = {};
  for (const t in n)
    e[t] !== void 0 && i[t] !== void 0 && (a[t] = nt(e[t])(e[t], i[t]));
  return (t) => {
    for (const s in a)
      n[s] = a[s](t);
    return n;
  };
}
function Mu(e, i) {
  const n = [], a = { color: 0, var: 0, number: 0 };
  for (let t = 0; t < i.values.length; t++) {
    const s = i.types[t], r = e.indexes[s][a[s]], o = e.values[r] ?? 0;
    n[t] = o, a[s]++;
  }
  return n;
}
const Tu = (e, i) => {
  const n = Ve.createTransformer(i), a = Li(e), t = Li(i);
  return a.indexes.var.length === t.indexes.var.length && a.indexes.color.length === t.indexes.color.length && a.indexes.number.length >= t.indexes.number.length ? ya.has(e) && !t.values.length || ya.has(i) && !a.values.length ? Pu(e, i) : Wi(jo(Mu(a, t), t.values), n) : (li(!0, `Complex values '${e}' and '${i}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), cn(e, i));
};
function Mo(e, i, n) {
  return typeof e == "number" && typeof i == "number" && typeof n == "number" ? W(e, i, n) : nt(e)(e, i);
}
function ms({ keyframes: e, velocity: i = 0, power: n = 0.8, timeConstant: a = 325, bounceDamping: t = 10, bounceStiffness: s = 500, modifyTarget: r, min: o, max: f, restDelta: l = 0.5, restSpeed: d }) {
  const u = e[0], c = {
    done: !1,
    value: u
  }, v = (C) => o !== void 0 && C < o || f !== void 0 && C > f, g = (C) => o === void 0 ? f : f === void 0 || Math.abs(o - C) < Math.abs(f - C) ? o : f;
  let y = n * i;
  const k = u + y, p = r === void 0 ? k : r(k);
  p !== k && (y = p - u);
  const w = (C) => -y * Math.exp(-C / a), P = (C) => p + w(C), x = (C) => {
    const T = w(C), z = P(C);
    c.done = Math.abs(T) <= l, c.value = c.done ? p : z;
  };
  let S, j;
  const M = (C) => {
    v(c.value) && (S = C, j = Ei({
      keyframes: [c.value, g(c.value)],
      velocity: Hr(P, C, c.value),
      // TODO: This should be passing * 1000
      damping: t,
      stiffness: s,
      restDelta: l,
      restSpeed: d
    }));
  };
  return M(0), {
    calculatedDuration: null,
    next: (C) => {
      let T = !1;
      return !j && S === void 0 && (T = !0, x(C), M(C)), S !== void 0 && C >= S ? j.next(C - S) : (!T && x(C), c);
    }
  };
}
const Au = /* @__PURE__ */ Ii(0.42, 0, 1, 1), Ru = /* @__PURE__ */ Ii(0, 0, 0.58, 1), To = /* @__PURE__ */ Ii(0.42, 0, 0.58, 1), at = (e) => Array.isArray(e) && typeof e[0] == "number", vs = {
  linear: me,
  easeIn: Au,
  easeInOut: To,
  easeOut: Ru,
  circIn: Ya,
  circInOut: lo,
  circOut: fo,
  backIn: Ka,
  backInOut: ro,
  backOut: so,
  anticipate: oo
}, wa = (e) => {
  if (at(e)) {
    Se(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [i, n, a, t] = e;
    return Ii(i, n, a, t);
  } else if (typeof e == "string")
    return Se(vs[e] !== void 0, `Invalid easing type '${e}'`), vs[e];
  return e;
};
function Eu(e, i, n) {
  const a = [], t = n || Mo, s = e.length - 1;
  for (let r = 0; r < s; r++) {
    let o = t(e[r], e[r + 1]);
    if (i) {
      const f = Array.isArray(i) ? i[r] || me : i;
      o = Wi(f, o);
    }
    a.push(o);
  }
  return a;
}
function Bu(e, i, { clamp: n = !0, ease: a, mixer: t } = {}) {
  const s = e.length;
  if (Se(s === i.length, "Both input and output ranges must be the same length"), s === 1)
    return () => i[0];
  if (s === 2 && i[0] === i[1])
    return () => i[1];
  const r = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), i = [...i].reverse());
  const o = Eu(i, a, t), f = o.length, l = (d) => {
    if (r && d < e[0])
      return i[0];
    let u = 0;
    if (f > 1)
      for (; u < e.length - 2 && !(d < e[u + 1]); u++)
        ;
    const c = /* @__PURE__ */ ti(e[u], e[u + 1], d);
    return o[u](c);
  };
  return n ? (d) => l(Ae(e[0], e[s - 1], d)) : l;
}
function Du(e, i) {
  return e.map((n) => n * i);
}
function $u(e, i) {
  return e.map(() => i || To).splice(0, e.length - 1);
}
function Ci({ duration: e = 300, keyframes: i, times: n, ease: a = "easeInOut" }) {
  const t = Kr(a) ? a.map(wa) : wa(a), s = {
    done: !1,
    value: i[0]
  }, r = Du(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === i.length ? n : Jr(i),
    e
  ), o = Bu(r, i, {
    ease: Array.isArray(t) ? t : $u(i, t)
  });
  return {
    calculatedDuration: e,
    next: (f) => (s.value = o(f), s.done = f >= e, s)
  };
}
const Lu = (e) => {
  const i = ({ timestamp: n }) => e(n);
  return {
    start: () => q.update(i, !0),
    stop: () => Le(i),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Z.isProcessing ? Z.timestamp : we.now()
  };
}, Vu = {
  decay: ms,
  inertia: ms,
  tween: Ci,
  keyframes: Ci,
  spring: Ei
}, zu = (e) => e / 100;
class tt extends Fo {
  constructor(i) {
    super(i), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: f } = this.options;
      f && f();
    };
    const { name: n, motionValue: a, element: t, keyframes: s } = this.options, r = (t == null ? void 0 : t.KeyframeResolver) || Qa, o = (f, l) => this.onKeyframesResolved(f, l);
    this.resolver = new r(s, o, n, a, t), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(i) {
    const { type: n = "keyframes", repeat: a = 0, repeatDelay: t = 0, repeatType: s, velocity: r = 0 } = this.options, o = Fn(n) ? n : Vu[n] || Ci;
    let f, l;
    process.env.NODE_ENV !== "production" && o !== Ci && Se(i.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${i}`), o !== Ci && typeof i[0] != "number" && (f = Wi(zu, Mo(i[0], i[1])), i = [0, 100]);
    const d = o({ ...this.options, keyframes: i });
    s === "mirror" && (l = o({
      ...this.options,
      keyframes: [...i].reverse(),
      velocity: -r
    })), d.calculatedDuration === null && (d.calculatedDuration = qa(d));
    const { calculatedDuration: u } = d, c = u + t, v = c * (a + 1) - t;
    return {
      generator: d,
      mirroredGenerator: l,
      mapPercentToKeyframes: f,
      calculatedDuration: u,
      resolvedDuration: c,
      totalDuration: v
    };
  }
  onPostResolved() {
    const { autoplay: i = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !i ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(i, n = !1) {
    const { resolved: a } = this;
    if (!a) {
      const { keyframes: C } = this.options;
      return { done: !0, value: C[C.length - 1] };
    }
    const { finalKeyframe: t, generator: s, mirroredGenerator: r, mapPercentToKeyframes: o, keyframes: f, calculatedDuration: l, totalDuration: d, resolvedDuration: u } = a;
    if (this.startTime === null)
      return s.next(0);
    const { delay: c, repeat: v, repeatType: g, repeatDelay: y, onUpdate: k } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - d / this.speed, this.startTime)), n ? this.currentTime = i : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(i - this.startTime) * this.speed;
    const p = this.currentTime - c * (this.speed >= 0 ? 1 : -1), w = this.speed >= 0 ? p < 0 : p > d;
    this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = d);
    let P = this.currentTime, x = s;
    if (v) {
      const C = Math.min(this.currentTime, d) / u;
      let T = Math.floor(C), z = C % 1;
      !z && C >= 1 && (z = 1), z === 1 && T--, T = Math.min(T, v + 1), !!(T % 2) && (g === "reverse" ? (z = 1 - z, y && (z -= y / u)) : g === "mirror" && (x = r)), P = Ae(0, 1, z) * u;
    }
    const S = w ? { done: !1, value: f[0] } : x.next(P);
    o && (S.value = o(S.value));
    let { done: j } = S;
    !w && l !== null && (j = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const M = this.holdTime === null && (this.state === "finished" || this.state === "running" && j);
    return M && t !== void 0 && (S.value = jn(f, this.options, t)), k && k(S.value), M && this.finish(), S;
  }
  get duration() {
    const { resolved: i } = this;
    return i ? /* @__PURE__ */ be(i.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ be(this.currentTime);
  }
  set time(i) {
    i = /* @__PURE__ */ ve(i), this.currentTime = i, this.holdTime !== null || this.speed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    const n = this.playbackSpeed !== i;
    this.playbackSpeed = i, n && (this.time = /* @__PURE__ */ be(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: i = Lu, onPlay: n, startTime: a } = this.options;
    this.driver || (this.driver = i((s) => this.tick(s))), n && n();
    const t = this.driver.now();
    this.holdTime !== null ? this.startTime = t - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = t) : this.startTime = a ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
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
    const { onComplete: i } = this.options;
    i && i();
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
  sample(i) {
    return this.startTime = 0, this.tick(i, !0);
  }
  get finished() {
    return this.currentFinishedPromise;
  }
}
const Ou = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), Nu = /* @__PURE__ */ Wa(() => Object.hasOwnProperty.call(Element.prototype, "animate")), xi = ([e, i, n, a]) => `cubic-bezier(${e}, ${i}, ${n}, ${a})`, ba = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ xi([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ xi([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ xi([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ xi([0.33, 1.53, 0.69, 0.99])
};
function Ao(e, i) {
  if (e)
    return typeof e == "function" && Ri() ? Gr(e, i) : at(e) ? xi(e) : Array.isArray(e) ? e.map((n) => Ao(n, i) || ba.easeOut) : ba[e];
}
function Iu(e, i, n, { delay: a = 0, duration: t = 300, repeat: s = 0, repeatType: r = "loop", ease: o = "easeInOut", times: f } = {}, l = void 0) {
  const d = {
    [i]: n
  };
  f && (d.offset = f);
  const u = Ao(o, t);
  return Array.isArray(u) && (d.easing = u), e.animate(d, {
    delay: a,
    duration: t,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: s + 1,
    direction: r === "reverse" ? "alternate" : "normal",
    pseudoElement: l
  });
}
function hs(e, i) {
  e.timeline = i, e.onfinish = null;
}
function Ro(e) {
  return !!(typeof e == "function" && Ri() || !e || typeof e == "string" && (e in ba || Ri()) || at(e) || Array.isArray(e) && e.every(Ro));
}
const mn = 10, qu = 2e4;
function Wu(e) {
  return Fn(e.type) || e.type === "spring" || !Ro(e.ease);
}
function Hu(e, i) {
  const n = new tt({
    ...i,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let a = { done: !1, value: e[0] };
  const t = [];
  let s = 0;
  for (; !a.done && s < qu; )
    a = n.sample(s), t.push(a.value), s += mn;
  return {
    times: void 0,
    keyframes: t,
    duration: s - mn,
    ease: "linear"
  };
}
const Eo = {
  anticipate: oo,
  backInOut: ro,
  circInOut: lo
};
function Uu(e) {
  return e in Eo;
}
class gs extends Fo {
  constructor(i) {
    super(i);
    const { name: n, motionValue: a, element: t, keyframes: s } = this.options;
    this.resolver = new Po(s, (r, o) => this.onKeyframesResolved(r, o), n, a, t), this.resolver.scheduleResolve();
  }
  initPlayback(i, n) {
    let { duration: a = 300, times: t, ease: s, type: r, motionValue: o, name: f, startTime: l } = this.options;
    if (!o.owner || !o.owner.current)
      return !1;
    if (typeof s == "string" && Ri() && Uu(s) && (s = Eo[s]), Wu(this.options)) {
      const { onComplete: u, onUpdate: c, motionValue: v, element: g, ...y } = this.options, k = Hu(i, y);
      i = k.keyframes, i.length === 1 && (i[1] = i[0]), a = k.duration, t = k.times, s = k.ease, r = "keyframes";
    }
    const d = Iu(o.owner.current, f, i, { ...this.options, duration: a, times: t, ease: s });
    return d.startTime = l ?? this.calcStartTime(), this.pendingTimeline ? (hs(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
      const { onComplete: u } = this.options;
      o.set(jn(i, this.options, n)), u && u(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: d,
      duration: a,
      times: t,
      type: r,
      ease: s,
      keyframes: i
    };
  }
  get duration() {
    const { resolved: i } = this;
    if (!i)
      return 0;
    const { duration: n } = i;
    return /* @__PURE__ */ be(n);
  }
  get time() {
    const { resolved: i } = this;
    if (!i)
      return 0;
    const { animation: n } = i;
    return /* @__PURE__ */ be(n.currentTime || 0);
  }
  set time(i) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: a } = n;
    a.currentTime = /* @__PURE__ */ ve(i);
  }
  get speed() {
    const { resolved: i } = this;
    if (!i)
      return 1;
    const { animation: n } = i;
    return n.playbackRate;
  }
  get finished() {
    return this.resolved.animation.finished;
  }
  set speed(i) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: a } = n;
    a.playbackRate = i;
  }
  get state() {
    const { resolved: i } = this;
    if (!i)
      return "idle";
    const { animation: n } = i;
    return n.playState;
  }
  get startTime() {
    const { resolved: i } = this;
    if (!i)
      return null;
    const { animation: n } = i;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(i) {
    if (!this._resolved)
      this.pendingTimeline = i;
    else {
      const { resolved: n } = this;
      if (!n)
        return me;
      const { animation: a } = n;
      hs(a, i);
    }
    return me;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: i } = this;
    if (!i)
      return;
    const { animation: n } = i;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: i } = this;
    if (!i)
      return;
    const { animation: n } = i;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: i } = this;
    if (!i)
      return;
    const { animation: n, keyframes: a, duration: t, type: s, ease: r, times: o } = i;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: l, onUpdate: d, onComplete: u, element: c, ...v } = this.options, g = new tt({
        ...v,
        keyframes: a,
        duration: t,
        type: s,
        ease: r,
        times: o,
        isGenerator: !0
      }), y = /* @__PURE__ */ ve(this.time);
      l.setWithVelocity(g.sample(y - mn).value, g.sample(y).value, mn);
    }
    const { onStop: f } = this.options;
    f && f(), this.cancel();
  }
  complete() {
    const { resolved: i } = this;
    i && i.animation.finish();
  }
  cancel() {
    const { resolved: i } = this;
    i && i.animation.cancel();
  }
  static supports(i) {
    const { motionValue: n, name: a, repeatDelay: t, repeatType: s, damping: r, type: o } = i;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: f, transformTemplate: l } = n.owner.getProps();
    return Nu() && a && Ou.has(a) && (a !== "transform" || !l) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !f && !t && s !== "mirror" && r !== 0 && o !== "inertia";
  }
}
const Gu = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Ku = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Yu = {
  type: "keyframes",
  duration: 0.8
}, Xu = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Ju = (e, { keyframes: i }) => i.length > 2 ? Yu : Ye.has(e) ? e.startsWith("scale") ? Ku(i[1]) : Gu : Xu;
function Zu({ when: e, delay: i, delayChildren: n, staggerChildren: a, staggerDirection: t, repeat: s, repeatType: r, repeatDelay: o, from: f, elapsed: l, ...d }) {
  return !!Object.keys(d).length;
}
function st(e, i) {
  return (e == null ? void 0 : e[i]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Qu = /* @__PURE__ */ Wa(() => window.ScrollTimeline !== void 0);
class ec {
  constructor(i) {
    this.stop = () => this.runAll("stop"), this.animations = i.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((i) => i.finished));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(i) {
    return this.animations[0][i];
  }
  setAll(i, n) {
    for (let a = 0; a < this.animations.length; a++)
      this.animations[a][i] = n;
  }
  attachTimeline(i, n) {
    const a = this.animations.map((t) => {
      if (Qu() && t.attachTimeline)
        return t.attachTimeline(i);
      if (typeof n == "function")
        return n(t);
    });
    return () => {
      a.forEach((t, s) => {
        t && t(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(i) {
    this.setAll("time", i);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(i) {
    this.setAll("speed", i);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let i = 0;
    for (let n = 0; n < this.animations.length; n++)
      i = Math.max(i, this.animations[n].duration);
    return i;
  }
  runAll(i) {
    this.animations.forEach((n) => n[i]());
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
class Bo extends ec {
  then(i, n) {
    return this.finished.finally(i).then(() => {
    });
  }
}
const rt = (e, i, n, a = {}, t, s) => (r) => {
  const o = st(a, e) || {}, f = o.delay || a.delay || 0;
  let { elapsed: l = 0 } = a;
  l = l - /* @__PURE__ */ ve(f);
  let d = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: i.getVelocity(),
    ...o,
    delay: -l,
    onUpdate: (c) => {
      i.set(c), o.onUpdate && o.onUpdate(c);
    },
    onComplete: () => {
      r(), o.onComplete && o.onComplete();
    },
    name: e,
    motionValue: i,
    element: s ? void 0 : t
  };
  Zu(o) || (d = {
    ...d,
    ...Ju(e, d)
  }), d.duration && (d.duration = /* @__PURE__ */ ve(d.duration)), d.repeatDelay && (d.repeatDelay = /* @__PURE__ */ ve(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
  let u = !1;
  if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0, d.delay === 0 && (u = !0)), d.allowFlatten = !o.type && !o.ease, u && !s && i.get() !== void 0) {
    const c = jn(d.keyframes, o);
    if (c !== void 0)
      return q.update(() => {
        d.onUpdate(c), d.onComplete();
      }), new Bo([]);
  }
  return !s && gs.supports(d) ? new gs(d) : new tt(d);
};
function ic({ protectedKeys: e, needsAnimating: i }, n) {
  const a = e.hasOwnProperty(n) && i[n] !== !0;
  return i[n] = !1, a;
}
function ot(e, i, { delay: n = 0, transitionOverride: a, type: t } = {}) {
  let { transition: s = e.getDefaultTransition(), transitionEnd: r, ...o } = i;
  a && (s = a);
  const f = [], l = t && e.animationState && e.animationState.getState()[t];
  for (const d in o) {
    const u = e.getValue(d, e.latestValues[d] ?? null), c = o[d];
    if (c === void 0 || l && ic(l, d))
      continue;
    const v = {
      delay: n,
      ...st(s || {}, d)
    };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const k = io(e);
      if (k) {
        const p = window.MotionHandoffAnimation(k, d, q);
        p !== null && (v.startTime = p, g = !0);
      }
    }
    ua(e, d), u.start(rt(d, u, c, e.shouldReduceMotion && Qr.has(d) ? { type: !1 } : v, e, g));
    const y = u.animation;
    y && f.push(y);
  }
  return r && Promise.all(f).then(() => {
    q.update(() => {
      r && Tl(e, r);
    });
  }), f;
}
function Do(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const ps = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Qe = () => ({
  x: ps(),
  y: ps()
}), ks = () => ({ min: 0, max: 0 }), G = () => ({
  x: ks(),
  y: ks()
}), ys = {
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
}, ri = {};
for (const e in ys)
  ri[e] = {
    isEnabled: (i) => ys[e].some((n) => !!i[n])
  };
const ft = typeof window < "u", _a = { current: null }, $o = { current: !1 };
function nc() {
  if ($o.current = !0, !!ft)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), i = () => _a.current = e.matches;
      e.addListener(i), i();
    } else
      _a.current = !1;
}
const ac = [...Co, ie, Ve], tc = (e) => ac.find(So(e));
function Mn(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Vi(e) {
  return typeof e == "string" || Array.isArray(e);
}
const dt = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], lt = ["initial", ...dt];
function Tn(e) {
  return Mn(e.animate) || lt.some((i) => Vi(e[i]));
}
function Lo(e) {
  return !!(Tn(e) || e.variants);
}
function sc(e, i, n) {
  for (const a in i) {
    const t = i[a], s = n[a];
    if (J(t))
      e.addValue(a, t), process.env.NODE_ENV === "development" && Cn(t.version === "12.7.3", `Attempting to mix Motion versions ${t.version} with 12.7.3 may not work as expected.`);
    else if (J(s))
      e.addValue(a, Ai(t, { owner: e }));
    else if (s !== t)
      if (e.hasValue(a)) {
        const r = e.getValue(a);
        r.liveStyle === !0 ? r.jump(t) : r.hasAnimated || r.set(t);
      } else {
        const r = e.getStaticValue(a);
        e.addValue(a, Ai(r !== void 0 ? r : t, { owner: e }));
      }
  }
  for (const a in n)
    i[a] === void 0 && e.removeValue(a);
  return i;
}
const ws = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Vo {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(i, n, a) {
    return {};
  }
  constructor({ parent: i, props: n, presenceContext: a, reducedMotionConfig: t, blockInitialAnimation: s, visualState: r }, o = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Qa, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const v = we.now();
      this.renderScheduledAt < v && (this.renderScheduledAt = v, q.render(this.render, !1, !0));
    };
    const { latestValues: f, renderState: l, onUpdate: d } = r;
    this.onUpdate = d, this.latestValues = f, this.baseTarget = { ...f }, this.initialValues = n.initial ? { ...f } : {}, this.renderState = l, this.parent = i, this.props = n, this.presenceContext = a, this.depth = i ? i.depth + 1 : 0, this.reducedMotionConfig = t, this.options = o, this.blockInitialAnimation = !!s, this.isControllingVariants = Tn(n), this.isVariantNode = Lo(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(i && i.current);
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const v in c) {
      const g = c[v];
      f[v] !== void 0 && J(g) && g.set(f[v], !1);
    }
  }
  mount(i) {
    this.current = i, Bi.set(i, this), this.projection && !this.projection.instance && this.projection.mount(i), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, a) => this.bindToMotionValue(a, n)), $o.current || nc(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : _a.current, process.env.NODE_ENV !== "production" && Cn(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), Le(this.notifyUpdate), Le(this.render), this.valueSubscriptions.forEach((i) => i()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const i in this.events)
      this.events[i].clear();
    for (const i in this.features) {
      const n = this.features[i];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(i, n) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const a = Ye.has(i);
    a && this.onBindTransform && this.onBindTransform();
    const t = n.on("change", (o) => {
      this.latestValues[i] = o, this.props.onUpdate && q.preRender(this.notifyUpdate), a && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    let r;
    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, i, n)), this.valueSubscriptions.set(i, () => {
      t(), s(), r && r(), n.owner && n.stop();
    });
  }
  sortNodePosition(i) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in ri) {
      const n = ri[i];
      if (!n)
        continue;
      const { isEnabled: a, Feature: t } = n;
      if (!this.features[i] && t && a(this.props) && (this.features[i] = new t(this)), this.features[i]) {
        const s = this.features[i];
        s.isMounted ? s.update() : (s.mount(), s.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : G();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, n) {
    this.latestValues[i] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(i, n) {
    (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = i, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let a = 0; a < ws.length; a++) {
      const t = ws[a];
      this.propEventSubscriptions[t] && (this.propEventSubscriptions[t](), delete this.propEventSubscriptions[t]);
      const s = "on" + t, r = i[s];
      r && (this.propEventSubscriptions[t] = this.on(t, r));
    }
    this.prevMotionValues = sc(this, this.scrapeMotionValuesFromProps(i, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
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
  addVariantChild(i) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(i), () => n.variantChildren.delete(i);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(i, n) {
    const a = this.values.get(i);
    n !== a && (a && this.removeValue(i), this.bindToMotionValue(i, n), this.values.set(i, n), this.latestValues[i] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(i) {
    this.values.delete(i);
    const n = this.valueSubscriptions.get(i);
    n && (n(), this.valueSubscriptions.delete(i)), delete this.latestValues[i], this.removeValueFromRenderState(i, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, n) {
    if (this.props.values && this.props.values[i])
      return this.props.values[i];
    let a = this.values.get(i);
    return a === void 0 && n !== void 0 && (a = Ai(n === null ? void 0 : n, { owner: this }), this.addValue(i, a)), a;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(i, n) {
    let a = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
    return a != null && (typeof a == "string" && (bo(a) || uo(a)) ? a = parseFloat(a) : !tc(a) && Ve.test(n) && (a = ko(i, n)), this.setBaseTarget(i, J(a) ? a.get() : a)), J(a) ? a.get() : a;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(i, n) {
    this.baseTarget[i] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(i) {
    var s;
    const { initial: n } = this.props;
    let a;
    if (typeof n == "string" || typeof n == "object") {
      const r = Ua(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
      r && (a = r[i]);
    }
    if (n && a !== void 0)
      return a;
    const t = this.getBaseTargetFromProps(this.props, i);
    return t !== void 0 && !J(t) ? t : this.initialValues[i] !== void 0 && a === void 0 ? void 0 : this.baseTarget[i];
  }
  on(i, n) {
    return this.events[i] || (this.events[i] = new Na()), this.events[i].add(n);
  }
  notify(i, ...n) {
    this.events[i] && this.events[i].notify(...n);
  }
}
class zo extends Vo {
  constructor() {
    super(...arguments), this.KeyframeResolver = Po;
  }
  sortInstanceNodePosition(i, n) {
    return i.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, n) {
    return i.style ? i.style[n] : void 0;
  }
  removeValueFromRenderState(i, { vars: n, style: a }) {
    delete n[i], delete a[i];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    J(i) && (this.childSubscription = i.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
const Oo = (e, i) => i && typeof e == "number" ? i.transform(e) : e, rc = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, oc = ui.length;
function fc(e, i, n) {
  let a = "", t = !0;
  for (let s = 0; s < oc; s++) {
    const r = ui[s], o = e[r];
    if (o === void 0)
      continue;
    let f = !0;
    if (typeof o == "number" ? f = o === (r.startsWith("scale") ? 1 : 0) : f = parseFloat(o) === 0, !f || n) {
      const l = Oo(o, Za[r]);
      if (!f) {
        t = !1;
        const d = rc[r] || r;
        a += `${d}(${l}) `;
      }
      n && (i[r] = l);
    }
  }
  return a = a.trim(), n ? a = n(i, t ? "" : a) : t && (a = "none"), a;
}
function ut(e, i, n) {
  const { style: a, vars: t, transformOrigin: s } = e;
  let r = !1, o = !1;
  for (const f in i) {
    const l = i[f];
    if (Ye.has(f)) {
      r = !0;
      continue;
    } else if (et(f)) {
      t[f] = l;
      continue;
    } else {
      const d = Oo(l, Za[f]);
      f.startsWith("origin") ? (o = !0, s[f] = d) : a[f] = d;
    }
  }
  if (i.transform || (r || n ? a.transform = fc(i, e.transform, n) : a.transform && (a.transform = "none")), o) {
    const { originX: f = "50%", originY: l = "50%", originZ: d = 0 } = s;
    a.transformOrigin = `${f} ${l} ${d}`;
  }
}
const dc = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, lc = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function uc(e, i, n = 1, a = 0, t = !0) {
  e.pathLength = 1;
  const s = t ? dc : lc;
  e[s.offset] = R.transform(-a);
  const r = R.transform(i), o = R.transform(n);
  e[s.array] = `${r} ${o}`;
}
function bs(e, i, n) {
  return typeof e == "string" ? e : R.transform(i + n * e);
}
function cc(e, i, n) {
  const a = bs(i, e.x, e.width), t = bs(n, e.y, e.height);
  return `${a} ${t}`;
}
function ct(e, {
  attrX: i,
  attrY: n,
  attrScale: a,
  originX: t,
  originY: s,
  pathLength: r,
  pathSpacing: o = 1,
  pathOffset: f = 0,
  // This is object creation, which we try to avoid per-frame.
  ...l
}, d, u) {
  if (ut(e, l, u), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: c, style: v, dimensions: g } = e;
  c.transform && (g && (v.transform = c.transform), delete c.transform), g && (t !== void 0 || s !== void 0 || v.transform) && (v.transformOrigin = cc(g, t !== void 0 ? t : 0.5, s !== void 0 ? s : 0.5)), i !== void 0 && (c.x = i), n !== void 0 && (c.y = n), a !== void 0 && (c.scale = a), r !== void 0 && uc(c, r, o, f, !1);
}
const No = /* @__PURE__ */ new Set([
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
]), mt = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Io(e, i) {
  try {
    i.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    i.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
function qo(e, { style: i, vars: n }, a, t) {
  Object.assign(e.style, i, t && t.getProjectionStyles(a));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
function Wo(e, i, n, a) {
  qo(e, i, void 0, a);
  for (const t in i.attrs)
    e.setAttribute(No.has(t) ? t : Ga(t), i.attrs[t]);
}
const zi = {};
function mc(e) {
  for (const i in e)
    zi[i] = e[i], et(i) && (zi[i].isCSSVariable = !0);
}
function Ho(e, { layout: i, layoutId: n }) {
  return Ye.has(e) || e.startsWith("origin") || (i || n !== void 0) && (!!zi[e] || e === "opacity");
}
function vt(e, i, n) {
  var s;
  const { style: a } = e, t = {};
  for (const r in a)
    (J(a[r]) || i.style && J(i.style[r]) || Ho(r, e) || ((s = n == null ? void 0 : n.getValue(r)) == null ? void 0 : s.liveStyle) !== void 0) && (t[r] = a[r]);
  return t;
}
function Uo(e, i, n) {
  const a = vt(e, i, n);
  for (const t in e)
    if (J(e[t]) || J(i[t])) {
      const s = ui.indexOf(t) !== -1 ? "attr" + t.charAt(0).toUpperCase() + t.substring(1) : t;
      a[s] = e[t];
    }
  return a;
}
class Go extends zo {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = G, this.updateDimensions = () => {
      this.current && !this.renderState.dimensions && Io(this.current, this.renderState);
    };
  }
  getBaseTargetFromProps(i, n) {
    return i[n];
  }
  readValueFromInstance(i, n) {
    if (Ye.has(n)) {
      const a = po(n);
      return a && a.default || 0;
    }
    return n = No.has(n) ? n : Ga(n), i.getAttribute(n);
  }
  scrapeMotionValuesFromProps(i, n, a) {
    return Uo(i, n, a);
  }
  onBindTransform() {
    this.current && !this.renderState.dimensions && q.postRender(this.updateDimensions);
  }
  build(i, n, a) {
    ct(i, n, this.isSVGTag, a.transformTemplate);
  }
  renderInstance(i, n, a, t) {
    Wo(i, n, a, t);
  }
  mount(i) {
    this.isSVGTag = mt(i.tagName), super.mount(i);
  }
}
function Ko({ top: e, left: i, right: n, bottom: a }) {
  return {
    x: { min: i, max: n },
    y: { min: e, max: a }
  };
}
function vc({ x: e, y: i }) {
  return { top: i.min, right: e.max, bottom: i.max, left: e.min };
}
function hc(e, i) {
  if (!i)
    return e;
  const n = i({ x: e.left, y: e.top }), a = i({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: a.y,
    right: a.x
  };
}
function Gn(e) {
  return e === void 0 || e === 1;
}
function xa({ scale: e, scaleX: i, scaleY: n }) {
  return !Gn(e) || !Gn(i) || !Gn(n);
}
function We(e) {
  return xa(e) || Yo(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Yo(e) {
  return _s(e.x) || _s(e.y);
}
function _s(e) {
  return e && e !== "0%";
}
function vn(e, i, n) {
  const a = e - n, t = i * a;
  return n + t;
}
function xs(e, i, n, a, t) {
  return t !== void 0 && (e = vn(e, t, a)), vn(e, n, a) + i;
}
function Sa(e, i = 0, n = 1, a, t) {
  e.min = xs(e.min, i, n, a, t), e.max = xs(e.max, i, n, a, t);
}
function Xo(e, { x: i, y: n }) {
  Sa(e.x, i.translate, i.scale, i.originPoint), Sa(e.y, n.translate, n.scale, n.originPoint);
}
const Ss = 0.999999999999, Cs = 1.0000000000001;
function gc(e, i, n, a = !1) {
  const t = n.length;
  if (!t)
    return;
  i.x = i.y = 1;
  let s, r;
  for (let o = 0; o < t; o++) {
    s = n[o], r = s.projectionDelta;
    const { visualElement: f } = s.options;
    f && f.props.style && f.props.style.display === "contents" || (a && s.options.layoutScroll && s.scroll && s !== s.root && ii(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), r && (i.x *= r.x.scale, i.y *= r.y.scale, Xo(e, r)), a && We(s.latestValues) && ii(e, s.latestValues));
  }
  i.x < Cs && i.x > Ss && (i.x = 1), i.y < Cs && i.y > Ss && (i.y = 1);
}
function ei(e, i) {
  e.min = e.min + i, e.max = e.max + i;
}
function Ps(e, i, n, a, t = 0.5) {
  const s = W(e.min, e.max, t);
  Sa(e, i, n, s, a);
}
function ii(e, i) {
  Ps(e.x, i.x, i.scaleX, i.scale, i.originX), Ps(e.y, i.y, i.scaleY, i.scale, i.originY);
}
function Jo(e, i) {
  return Ko(hc(e.getBoundingClientRect(), i));
}
function pc(e, i, n) {
  const a = Jo(e, n), { scroll: t } = i;
  return t && (ei(a.x, t.offset.x), ei(a.y, t.offset.y)), a;
}
function kc(e) {
  return window.getComputedStyle(e);
}
class Zo extends zo {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = qo;
  }
  readValueFromInstance(i, n) {
    if (Ye.has(n))
      return ru(i, n);
    {
      const a = kc(i), t = (et(n) ? a.getPropertyValue(n) : a[n]) || 0;
      return typeof t == "string" ? t.trim() : t;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: n }) {
    return Jo(i, n);
  }
  build(i, n, a) {
    ut(i, n, a.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, n, a) {
    return vt(i, n, a);
  }
}
function yc(e, i) {
  return e in i;
}
class wc extends Vo {
  constructor() {
    super(...arguments), this.type = "object";
  }
  readValueFromInstance(i, n) {
    if (yc(n, i)) {
      const a = i[n];
      if (typeof a == "string" || typeof a == "number")
        return a;
    }
  }
  getBaseTargetFromProps() {
  }
  removeValueFromRenderState(i, n) {
    delete n.output[i];
  }
  measureInstanceViewportBox() {
    return G();
  }
  build(i, n) {
    Object.assign(i.output, n);
  }
  renderInstance(i, { output: n }) {
    Object.assign(i, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
function bc(e) {
  const i = {
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
  }, n = Do(e) ? new Go(i) : new Zo(i);
  n.mount(e), Bi.set(e, n);
}
function _c(e) {
  const i = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  }, n = new wc(i);
  n.mount(e), Bi.set(e, n);
}
function Qo(e, i, n) {
  const a = J(e) ? e : Ai(e);
  return a.start(rt("", a, i, n)), a.animation;
}
function xc(e, i) {
  return J(e) || typeof e == "number" || typeof e == "string" && !Ha(i);
}
function ef(e, i, n, a) {
  const t = [];
  if (xc(e, i))
    t.push(Qo(e, Ha(i) && i.default || i, n && (n.default || n)));
  else {
    const s = Zr(e, i, a), r = s.length;
    Se(!!r, "No valid elements provided.");
    for (let o = 0; o < r; o++) {
      const f = s[o], l = f instanceof Element ? bc : _c;
      Bi.has(f) || l(f);
      const d = Bi.get(f), u = { ...n };
      "delay" in u && typeof u.delay == "function" && (u.delay = u.delay(o, r)), t.push(...ot(d, { ...i, transition: u }, {}));
    }
  }
  return t;
}
function Sc(e, i, n) {
  const a = [];
  return _l(e, i, n, { spring: Ei }).forEach(({ keyframes: s, transition: r }, o) => {
    a.push(...ef(o, s, r));
  }), a;
}
function Cc(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function Pc(e) {
  function i(n, a, t) {
    let s = [];
    Cc(n) ? s = Sc(n, a, e) : s = ef(n, a, t, e);
    const r = new Bo(s);
    return e && e.animations.push(r), r;
  }
  return i;
}
const hn = Pc();
function Fc(e, i) {
  if (e === "first")
    return 0;
  {
    const n = i - 1;
    return e === "last" ? n : n / 2;
  }
}
function gn(e = 0.1, { startDelay: i = 0, from: n = 0, ease: a } = {}) {
  return (t, s) => {
    const r = typeof n == "number" ? n : Fc(n, s), o = Math.abs(r - t);
    let f = e * o;
    if (a) {
      const l = s * e;
      f = wa(a)(f / l) * l;
    }
    return i + f;
  };
}
function jc(e, i) {
  const n = we.now(), a = ({ timestamp: t }) => {
    const s = t - n;
    s >= i && (Le(a), e(s - i));
  };
  return q.read(a, !0), () => Le(a);
}
const Fs = (e, i) => Math.abs(e - i);
function Mc(e, i) {
  const n = Fs(e.x, i.x), a = Fs(e.y, i.y);
  return Math.sqrt(n ** 2 + a ** 2);
}
function Tc(e) {
  return fe({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z" }, child: [] }] })(e);
}
function nf() {
  const e = Ni((n) => n.setSelectedPage), i = [
    { id: 1, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 2, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 3, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 4, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 5, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" }
  ];
  return /* @__PURE__ */ h.jsxs("div", { className: "p-4 bg-white rounded-xl shadow-md text-center border border-slate-100", children: [
    /* @__PURE__ */ h.jsx("h2", { className: "text-lg font-semibold mb-2 text-slate-700", children: "Start a new conversation" }),
    /* @__PURE__ */ h.jsx("p", { className: "text-sm text-gray-500 mb-4", children: "Our agents typically reply in a few minutes." }),
    /* @__PURE__ */ h.jsx("div", { className: "flex -space-x-2 mb-4 justify-center", children: i.map((n) => /* @__PURE__ */ h.jsx("div", { className: "w-12 h-12 rounded-full border-2 border-white overflow-hidden", children: /* @__PURE__ */ h.jsx("img", { src: n.imageUrl, alt: `Agent ${n.id}`, className: "w-full h-full object-cover" }) }, n.id)) }),
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        className: "w-full flex items-center justify-center space-x-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors text-sm",
        onClick: () => e("conversation"),
        children: [
          /* @__PURE__ */ h.jsx(Tc, {}),
          /* @__PURE__ */ h.jsx("span", { children: "Send us a message" })
        ]
      }
    )
  ] });
}
function Kn(e) {
  return fe({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z" }, child: [] }] })(e);
}
function af() {
  return /* @__PURE__ */ h.jsxs("div", { className: "py-4 px-3 bg-white rounded-xl shadow-md border border-slate-100", children: [
    /* @__PURE__ */ h.jsx("h2", { className: "text-lg font-semibold mb-2 text-slate-700 px-2", children: "Find an answer easily" }),
    /* @__PURE__ */ h.jsx("p", { className: "text-sm text-gray-500 mb-4 px-2", children: "If you're in a hurry, send us a message and we will get back to you asap" }),
    /* @__PURE__ */ h.jsx("h2", { className: "text-base font-semibold mb-2 text-slate-500 px-1.5", children: "Suggested articles" }),
    /* @__PURE__ */ h.jsxs("ul", { className: "mt-3 space-y-1 text-sm", children: [
      /* @__PURE__ */ h.jsxs("li", { className: "py-2 px-1.5 hover:bg-slate-200 cursor-pointer flex items-center justify-between rounded text-slate-700", children: [
        /* @__PURE__ */ h.jsxs("span", { className: "line-clamp-1", children: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum perspiciatis porro at, rem impedit libero error natus tempore commodi veritatis aperiam dolores explicabo? Tempora!",
          " "
        ] }),
        /* @__PURE__ */ h.jsx(Kn, { className: "ml-5 flex-shrink-0 text-[10px]" })
      ] }),
      /* @__PURE__ */ h.jsxs("li", { className: "py-2 px-1.5 hover:bg-slate-200 cursor-pointer flex items-center justify-between rounded text-slate-700", children: [
        /* @__PURE__ */ h.jsxs("span", { className: "line-clamp-1", children: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum perspiciatis porro at, rem impedit libero error natus tempore commodi veritatis aperiam dolores explicabo? Tempora!",
          " "
        ] }),
        /* @__PURE__ */ h.jsx(Kn, { className: "ml-5 flex-shrink-0 text-[10px]" })
      ] }),
      /* @__PURE__ */ h.jsxs("li", { className: "py-2 px-1.5 hover:bg-slate-200 cursor-pointer flex items-center justify-between rounded text-slate-700", children: [
        /* @__PURE__ */ h.jsxs("span", { className: "line-clamp-1", children: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum perspiciatis porro at, rem impedit libero error natus tempore commodi veritatis aperiam dolores explicabo? Tempora!",
          " "
        ] }),
        /* @__PURE__ */ h.jsx(Kn, { className: "ml-5 flex-shrink-0 text-[10px]" })
      ] })
    ] })
  ] });
}
function tf() {
  const e = Ni((i) => i.setSelectedPage);
  return /* @__PURE__ */ h.jsxs("div", { className: "p-4 bg-white rounded-xl shadow-md  border border-slate-100", children: [
    /* @__PURE__ */ h.jsx("h2", { className: "text-lg font-semibold mb-2 text-slate-700", children: "Send us an email" }),
    /* @__PURE__ */ h.jsx("p", { className: "text-sm text-gray-500 mb-4", children: "If you're in a hurry, send us a message and we will get back to you asap" }),
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        className: "w-full flex items-center justify-center space-x-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors text-sm",
        onClick: () => e("contact"),
        children: [
          /* @__PURE__ */ h.jsx(Lr, {}),
          /* @__PURE__ */ h.jsx("span", { children: "Send Email" })
        ]
      }
    )
  ] });
}
function Ac() {
  const { widgetTitle: e, primaryColor: i } = Me(), n = Ti((r) => r.widgetOpen), a = I(null), t = I(null), s = I(null);
  return ke(() => {
    n && hn(
      [t.current, s.current, a.current],
      { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0px)"] },
      { duration: 0.5, delay: gn(0.5) }
    );
  }, [n]), /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx("div", { className: "text-white flex items-center h-60", style: { backgroundColor: i }, children: /* @__PURE__ */ h.jsxs("div", { className: "h-36 relative !z-[20] px-5 py-2 max-w-sm mr-[45px]", children: [
      /* @__PURE__ */ h.jsx("h1", { ref: t, className: "font-bold text-3xl mb-2 opacity-0", children: e }),
      /* @__PURE__ */ h.jsx("h6", { ref: s, className: "font-medium text-white/80 opacity-0", children: "Ask us anything, or share your valuable feedback with us." })
    ] }) }),
    /* @__PURE__ */ h.jsxs("div", { ref: a, className: "flex-1 overflow-y-auto px-4 py-1 bg-transparent space-y-5 z-10 relative -mt-12", children: [
      /* @__PURE__ */ h.jsx(nf, {}),
      /* @__PURE__ */ h.jsx(af, {}),
      /* @__PURE__ */ h.jsx(tf, {})
    ] })
  ] });
}
function Rc() {
  const e = Ni((x) => x.setSelectedPage), { primaryColor: i } = Me(), n = [
    { id: 1, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 2, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 3, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" }
  ], [a, t] = ne(""), [s, r] = ne(""), [o, f] = ne(""), [l, d] = ne(""), [u, c] = ne(!1), v = async (x) => {
    x.preventDefault(), c(!0);
    try {
      await new Promise((S) => setTimeout(S, 1500)), console.log({ name: a, email: s, subject: o, message: l }), alert("Message sent successfully!"), t(""), r(""), f(""), d("");
    } catch (S) {
      console.error("Failed to send message:", S), alert("Something went wrong.");
    } finally {
      c(!1);
    }
  }, g = Ti((x) => x.widgetOpen), y = I(null), k = I(null), p = I(null), w = I(null), P = I(null);
  return ke(() => {
    g && y.current && k.current && p.current && hn(
      [y.current, k.current, p.current],
      { opacity: [0, 1], transform: ["translateX(80px)", "translateX(0px)"] },
      { duration: 0.5, delay: gn(0.15) }
    ), g && w.current && P.current && hn(
      [w.current, P.current],
      { opacity: [0, 1], transform: ["translateY(80px)", "translateY(0px)"] },
      { duration: 0.5, delay: gn(0.1) }
    );
  }, [g]), /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsxs("div", { className: "text-white flex px-3 gap-5 items-center py-3 relative", style: { backgroundColor: i }, children: [
      /* @__PURE__ */ h.jsx(
        "div",
        {
          ref: y,
          className: "text-white cursor-pointer  hover:bg-white/20 p-1 rounded flex items-center justify-center hover:text-gray-200 transition-colors ",
          "aria-label": "contact",
          onClick: () => e(null),
          children: /* @__PURE__ */ h.jsx(Vr, { className: "text-xl" })
        }
      ),
      /* @__PURE__ */ h.jsxs("div", { className: "relative flex items-center gap-3", children: [
        /* @__PURE__ */ h.jsx("div", { ref: k, className: "flex -space-x-2 justify-center", children: n.map((x) => /* @__PURE__ */ h.jsx("div", { className: "w-8 h-8 rounded-full bg-white border-2 border-white overflow-hidden", children: /* @__PURE__ */ h.jsx("img", { src: x.imageUrl, alt: `Agent ${x.id}`, className: "w-full h-full object-cover" }) }, x.id)) }),
        /* @__PURE__ */ h.jsx("h3", { ref: p, className: "font-medium text-md", children: "How can we help?" })
      ] })
    ] }),
    /* @__PURE__ */ h.jsx("div", { ref: w, className: "flex-1 overflow-y-auto px-4 py-2 bg-transparent space-y-5 z-10 relative", children: /* @__PURE__ */ h.jsxs("form", { onSubmit: v, className: "py-4 space-y-3 rounded-md shadow-sm max-w-lg mx-auto text-sm", children: [
      /* @__PURE__ */ h.jsx(
        "input",
        {
          type: "text",
          value: a,
          onChange: (x) => t(x.target.value),
          placeholder: "Your name",
          className: "w-full  border bg-white border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-600 text-black placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm",
          disabled: u,
          required: !0
        }
      ),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          type: "email",
          value: s,
          onChange: (x) => r(x.target.value),
          placeholder: "Your email address",
          className: "w-full border bg-white border-gray-300 rounded px-3 py-2 focus:outline-none text-black placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm focus:ring-1 focus:ring-gray-600",
          disabled: u,
          required: !0
        }
      ),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          type: "text",
          value: o,
          onChange: (x) => f(x.target.value),
          placeholder: "Subject",
          className: "w-full border bg-white border-gray-300 rounded px-3 py-2 focus:outline-none text-black placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm focus:ring-1 focus:ring-gray-600",
          disabled: u
        }
      ),
      /* @__PURE__ */ h.jsx(
        "textarea",
        {
          value: l,
          onChange: (x) => d(x.target.value),
          placeholder: "Your message...",
          className: "w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none text-black min-h-[100px] placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm focus:ring-1 focus:ring-gray-600",
          disabled: u,
          required: !0
        }
      ),
      /* @__PURE__ */ h.jsx("div", { ref: P, children: /* @__PURE__ */ h.jsxs(
        "button",
        {
          type: "submit",
          className: "w-full flex items-center justify-center space-x-2 bg-black text-white py-3 px-4 rounded hover:bg-gray-800 transition-colors text-sm disabled:opacity-50",
          disabled: u || !a || !s || !l,
          children: [
            /* @__PURE__ */ h.jsx(Lr, {}),
            /* @__PURE__ */ h.jsx("span", { children: u ? "Sending..." : "Send Email" })
          ]
        }
      ) })
    ] }) })
  ] });
}
function Ec() {
  const { widgetTitle: e, primaryColor: i } = Me();
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx("div", { className: "text-white flex items-center h-60", style: { backgroundColor: i }, children: /* @__PURE__ */ h.jsxs("div", { className: "h-36 relative !z-[20] px-5 py-2 max-w-sm mr-[45px]", children: [
      /* @__PURE__ */ h.jsx("h3", { className: "font-bold text-3xl mb-2", children: e }),
      /* @__PURE__ */ h.jsx("p", { className: "font-medium text-white/80", children: "Ask us anything, or share your valuable feedback with us." })
    ] }) }),
    /* @__PURE__ */ h.jsxs("div", { className: "flex-1 overflow-y-auto px-4 py-1 bg-transparent space-y-5 z-10 relative -mt-12", children: [
      /* @__PURE__ */ h.jsx(nf, {}),
      /* @__PURE__ */ h.jsx(af, {}),
      /* @__PURE__ */ h.jsx(tf, {})
    ] })
  ] });
}
function Yn(e) {
  return fe({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" }, child: [] }] })(e);
}
function Bc(e) {
  return fe({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z" }, child: [] }] })(e);
}
function Ca(e) {
  return fe({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z" }, child: [] }] })(e);
}
function sf(e) {
  return fe({ tag: "svg", attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm144-76.024c0 10.691-12.926 16.045-20.485 8.485L136 360.486h-28c-6.627 0-12-5.373-12-12v-56c0-6.627 5.373-12 12-12h28l35.515-36.947c7.56-7.56 20.485-2.206 20.485 8.485v135.952zm41.201-47.13c9.051-9.297 9.06-24.133.001-33.439-22.149-22.752 12.235-56.246 34.395-33.481 27.198 27.94 27.212 72.444.001 100.401-21.793 22.386-56.947-10.315-34.397-33.481z" }, child: [] }] })(e);
}
const Dc = ({ messages: e }) => {
  if (e.length === 0)
    return /* @__PURE__ */ h.jsx("div", { className: "flex justify-center items-center h-full text-gray-500", children: "Start a conversation..." });
  const i = (t) => t ? new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: !0
  }).format(t) : "", n = (t) => {
    const s = URL.createObjectURL(t), r = document.createElement("a");
    r.href = s, r.download = t.name, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(s);
  }, a = (t) => t.type.startsWith("image/") ? /* @__PURE__ */ h.jsxs("div", { className: "mt-2 relative group", children: [
    /* @__PURE__ */ h.jsx("img", { src: URL.createObjectURL(t), alt: t.name, className: "max-w-[200px] max-h-[200px] object-cover rounded-lg shadow-md" }),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => n(t),
        className: "absolute bottom-2 right-2 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
        title: "Download",
        children: /* @__PURE__ */ h.jsx(Yn, { className: "text-sm" })
      }
    )
  ] }) : t.type.startsWith("audio/") ? /* @__PURE__ */ h.jsxs("div", { className: "mt-2 flex items-center gap-2 bg-gray-100 p-2 rounded-lg group", children: [
    /* @__PURE__ */ h.jsx(sf, { className: "text-xl text-gray-600" }),
    /* @__PURE__ */ h.jsx("span", { className: "text-sm text-gray-700 flex-1", children: t.name }),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => n(t),
        className: "text-gray-600 hover:text-gray-800 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
        title: "Download",
        children: /* @__PURE__ */ h.jsx(Yn, { className: "text-sm" })
      }
    )
  ] }) : /* @__PURE__ */ h.jsxs("div", { className: "mt-2 flex items-center gap-2 bg-gray-100 p-2 rounded-lg group", children: [
    /* @__PURE__ */ h.jsx(Ca, { className: "text-xl text-gray-600" }),
    /* @__PURE__ */ h.jsx("span", { className: "text-sm text-gray-700 flex-1", children: t.name }),
    /* @__PURE__ */ h.jsx(
      "button",
      {
        onClick: () => n(t),
        className: "text-gray-600 hover:text-gray-800 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
        title: "Download",
        children: /* @__PURE__ */ h.jsx(Yn, { className: "text-sm" })
      }
    )
  ] });
  return /* @__PURE__ */ h.jsx("div", { className: "space-y-3 w-full", children: e.map((t) => /* @__PURE__ */ h.jsxs("div", { className: `flex  ${t.sender === "user" ? "justify-end" : "justify-start items-end gap-2"}`, children: [
    t.sender === "bot" && /* @__PURE__ */ h.jsx("div", { className: "flex items-center justify-center w-[35px] h-[35px] bg-white/20 shadow-xl rounded-full", children: /* @__PURE__ */ h.jsx("img", { src: "./bot.png", alt: "avatar", className: "w-full h-full object-cover" }) }),
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        className: `max-w-[80%] rounded px-2 py-1 shadow ${t.sender === "user" ? "bg-blue-100 text-gray-800" : "bg-white text-gray-900"}`,
        children: [
          t.content && /* @__PURE__ */ h.jsx("div", { className: "text-sm", children: t.content }),
          t.files && t.files.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "space-y-2", children: t.files.map((s, r) => /* @__PURE__ */ h.jsx("div", { children: a(s) }, r)) }),
          t.timestamp && /* @__PURE__ */ h.jsx("div", { className: "text-[10px] text-gray-500 text-right", children: i(t.timestamp) })
        ]
      }
    )
  ] }, t.id)) });
};
function $c(e) {
  return fe({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" }, child: [] }] })(e);
}
function Lc(e) {
  return fe({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" }, child: [] }, { tag: "path", attr: { d: "M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" }, child: [] }] })(e);
}
const ht = di({});
function gt(e) {
  const i = I(null);
  return i.current === null && (i.current = e()), i.current;
}
const rf = ft ? Fd : ke, An = /* @__PURE__ */ di(null), pt = di({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class Vc extends $a.Component {
  getSnapshotBeforeUpdate(i) {
    const n = this.props.childRef.current;
    if (n && i.isPresent && !this.props.isPresent) {
      const a = n.offsetParent, t = a instanceof HTMLElement && a.offsetWidth || 0, s = this.props.sizeRef.current;
      s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft, s.right = t - s.width - s.left;
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
function zc({ children: e, isPresent: i, anchorX: n }) {
  const a = La(), t = I(null), s = I({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: r } = ae(pt);
  return Er(() => {
    const { width: o, height: f, top: l, left: d, right: u } = s.current;
    if (i || !t.current || !o || !f)
      return;
    const c = n === "left" ? `left: ${d}` : `right: ${u}`;
    t.current.dataset.motionPopId = a;
    const v = document.createElement("style");
    return r && (v.nonce = r), document.head.appendChild(v), v.sheet && v.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${f}px !important;
            ${c}px !important;
            top: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(v);
    };
  }, [i]), h.jsx(Vc, { isPresent: i, childRef: t, sizeRef: s, children: $a.cloneElement(e, { ref: t }) });
}
const Oc = ({ children: e, initial: i, isPresent: n, onExitComplete: a, custom: t, presenceAffectsLayout: s, mode: r, anchorX: o }) => {
  const f = gt(Nc), l = La(), d = Va((c) => {
    f.set(c, !0);
    for (const v of f.values())
      if (!v)
        return;
    a && a();
  }, [f, a]), u = Ke(
    () => ({
      id: l,
      initial: i,
      isPresent: n,
      custom: t,
      onExitComplete: d,
      register: (c) => (f.set(c, !1), () => f.delete(c))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? [Math.random(), d] : [n, d]
  );
  return Ke(() => {
    f.forEach((c, v) => f.set(v, !1));
  }, [n]), $a.useEffect(() => {
    !n && !f.size && a && a();
  }, [n]), r === "popLayout" && (e = h.jsx(zc, { isPresent: n, anchorX: o, children: e })), h.jsx(An.Provider, { value: u, children: e });
};
function Nc() {
  return /* @__PURE__ */ new Map();
}
function of(e = !0) {
  const i = ae(An);
  if (i === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: a, register: t } = i, s = La();
  ke(() => {
    if (e)
      return t(s);
  }, [e]);
  const r = Va(() => e && a && a(s), [s, a, e]);
  return !n && a ? [!1, r] : [!0];
}
const Qi = (e) => e.key || "";
function js(e) {
  const i = [];
  return jd.forEach(e, (n) => {
    Md(n) && i.push(n);
  }), i;
}
const Pa = ({ children: e, custom: i, initial: n = !0, onExitComplete: a, presenceAffectsLayout: t = !0, mode: s = "sync", propagate: r = !1, anchorX: o = "left" }) => {
  const [f, l] = of(r), d = Ke(() => js(e), [e]), u = r && !f ? [] : d.map(Qi), c = I(!0), v = I(d), g = gt(() => /* @__PURE__ */ new Map()), [y, k] = ne(d), [p, w] = ne(d);
  rf(() => {
    c.current = !1, v.current = d;
    for (let S = 0; S < p.length; S++) {
      const j = Qi(p[S]);
      u.includes(j) ? g.delete(j) : g.get(j) !== !0 && g.set(j, !1);
    }
  }, [p, u.length, u.join("-")]);
  const P = [];
  if (d !== y) {
    let S = [...d];
    for (let j = 0; j < p.length; j++) {
      const M = p[j], C = Qi(M);
      u.includes(C) || (S.splice(j, 0, M), P.push(M));
    }
    return s === "wait" && P.length && (S = P), w(js(S)), k(d), null;
  }
  process.env.NODE_ENV !== "production" && s === "wait" && p.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: x } = ae(ht);
  return h.jsx(h.Fragment, { children: p.map((S) => {
    const j = Qi(S), M = r && !f ? !1 : d === p || u.includes(j), C = () => {
      if (g.has(j))
        g.set(j, !0);
      else
        return;
      let T = !0;
      g.forEach((z) => {
        z || (T = !1);
      }), T && (x == null || x(), w(v.current), r && (l == null || l()), a && a());
    };
    return h.jsx(Oc, { isPresent: M, initial: !c.current || n ? void 0 : !1, custom: i, presenceAffectsLayout: t, mode: s, onExitComplete: M ? void 0 : C, anchorX: o, children: S }, j);
  }) });
}, ff = di({ strict: !1 });
function Ic(e) {
  for (const i in e)
    ri[i] = {
      ...ri[i],
      ...e[i]
    };
}
const qc = /* @__PURE__ */ new Set([
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
function pn(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || qc.has(e);
}
let df = (e) => !pn(e);
function Wc(e) {
  e && (df = (i) => i.startsWith("on") ? !pn(i) : e(i));
}
try {
  Wc(require("@emotion/is-prop-valid").default);
} catch {
}
function Hc(e, i, n) {
  const a = {};
  for (const t in e)
    t === "values" && typeof e.values == "object" || (df(t) || n === !0 && pn(t) || !i && !pn(t) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && t.startsWith("onDrag")) && (a[t] = e[t]);
  return a;
}
function Uc(e) {
  if (typeof Proxy > "u")
    return e;
  const i = /* @__PURE__ */ new Map(), n = (...a) => (process.env.NODE_ENV !== "production" && Cn(!1, "motion() is deprecated. Use motion.create() instead."), e(...a));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (a, t) => t === "create" ? e : (i.has(t) || i.set(t, e(t)), i.get(t))
  });
}
const Rn = /* @__PURE__ */ di({});
function Gc(e, i) {
  if (Tn(e)) {
    const { initial: n, animate: a } = e;
    return {
      initial: n === !1 || Vi(n) ? n : void 0,
      animate: Vi(a) ? a : void 0
    };
  }
  return e.inherit !== !1 ? i : {};
}
function Kc(e) {
  const { initial: i, animate: n } = Gc(e, ae(Rn));
  return Ke(() => ({ initial: i, animate: n }), [Ms(i), Ms(n)]);
}
function Ms(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Yc = Symbol.for("motionComponentSymbol");
function ni(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Xc(e, i, n) {
  return Va(
    (a) => {
      a && e.onMount && e.onMount(a), i && (a ? i.mount(a) : i.unmount()), n && (typeof n == "function" ? n(a) : ni(n) && (n.current = a));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [i]
  );
}
const lf = di({}), { schedule: kt, cancel: Nv } = /* @__PURE__ */ zr(queueMicrotask, !1);
function Jc(e, i, n, a, t) {
  var y, k;
  const { visualElement: s } = ae(Rn), r = ae(ff), o = ae(An), f = ae(pt).reducedMotion, l = I(null);
  a = a || r.renderer, !l.current && a && (l.current = a(e, {
    visualState: i,
    parent: s,
    props: n,
    presenceContext: o,
    blockInitialAnimation: o ? o.initial === !1 : !1,
    reducedMotionConfig: f
  }));
  const d = l.current, u = ae(lf);
  d && !d.projection && t && (d.type === "html" || d.type === "svg") && Zc(l.current, n, t, u);
  const c = I(!1);
  Er(() => {
    d && c.current && d.update(n, o);
  });
  const v = n[eo], g = I(!!v && !((y = window.MotionHandoffIsComplete) != null && y.call(window, v)) && ((k = window.MotionHasOptimisedAnimation) == null ? void 0 : k.call(window, v)));
  return rf(() => {
    d && (c.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), kt.render(d.render), g.current && d.animationState && d.animationState.animateChanges());
  }), ke(() => {
    d && (!g.current && d.animationState && d.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      var p;
      (p = window.MotionHandoffMarkAsComplete) == null || p.call(window, v);
    }), g.current = !1));
  }), d;
}
function Zc(e, i, n, a) {
  const { layoutId: t, layout: s, drag: r, dragConstraints: o, layoutScroll: f, layoutRoot: l, layoutCrossfade: d } = i;
  e.projection = new n(e.latestValues, i["data-framer-portal-id"] ? void 0 : uf(e.parent)), e.projection.setOptions({
    layoutId: t,
    layout: s,
    alwaysMeasureLayout: !!r || o && ni(o),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: a,
    crossfade: d,
    layoutScroll: f,
    layoutRoot: l
  });
}
function uf(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : uf(e.parent);
}
function Qc({ preloadedFeatures: e, createVisualElement: i, useRender: n, useVisualState: a, Component: t }) {
  e && Ic(e);
  function s(o, f) {
    let l;
    const d = {
      ...ae(pt),
      ...o,
      layoutId: e1(o)
    }, { isStatic: u } = d, c = Kc(o), v = a(o, u);
    if (!u && ft) {
      i1(d, e);
      const g = n1(d);
      l = g.MeasureLayout, c.visualElement = Jc(t, v, d, i, g.ProjectionNode);
    }
    return h.jsxs(Rn.Provider, { value: c, children: [l && c.visualElement ? h.jsx(l, { visualElement: c.visualElement, ...d }) : null, n(t, o, Xc(v, c.visualElement, f), v, u, c.visualElement)] });
  }
  s.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const r = Td(s);
  return r[Yc] = t, r;
}
function e1({ layoutId: e }) {
  const i = ae(ht).id;
  return i && e !== void 0 ? i + "-" + e : e;
}
function i1(e, i) {
  const n = ae(ff).strict;
  if (process.env.NODE_ENV !== "production" && i && n) {
    const a = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? li(!1, a) : Se(!1, a);
  }
}
function n1(e) {
  const { drag: i, layout: n } = ri;
  if (!i && !n)
    return {};
  const a = { ...i, ...n };
  return {
    MeasureLayout: i != null && i.isEnabled(e) || n != null && n.isEnabled(e) ? a.MeasureLayout : void 0,
    ProjectionNode: a.ProjectionNode
  };
}
const yt = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function cf(e, i, n) {
  for (const a in i)
    !J(i[a]) && !Ho(a, n) && (e[a] = i[a]);
}
function a1({ transformTemplate: e }, i) {
  return Ke(() => {
    const n = yt();
    return ut(n, i, e), Object.assign({}, n.vars, n.style);
  }, [i]);
}
function t1(e, i) {
  const n = e.style || {}, a = {};
  return cf(a, n, e), Object.assign(a, a1(e, i)), a;
}
function s1(e, i) {
  const n = {}, a = t1(e, i);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = a, n;
}
const r1 = [
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
function wt(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(r1.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
const mf = () => ({
  ...yt(),
  attrs: {}
});
function o1(e, i, n, a) {
  const t = Ke(() => {
    const s = mf();
    return ct(s, i, mt(a), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [i]);
  if (e.style) {
    const s = {};
    cf(s, e.style, e), t.style = { ...s, ...t.style };
  }
  return t;
}
function f1(e = !1) {
  return (n, a, t, { latestValues: s }, r) => {
    const f = (wt(n) ? o1 : s1)(a, s, r, n), l = Hc(a, typeof n == "string", e), d = n !== Br ? { ...l, ...f, ref: t } : {}, { children: u } = a, c = Ke(() => J(u) ? u.get() : u, [u]);
    return Ad(n, {
      ...d,
      children: c
    });
  };
}
function sn(e) {
  const i = J(e) ? e.get() : e;
  return Fl(i) ? i.toValue() : i;
}
function d1({ scrapeMotionValuesFromProps: e, createRenderState: i, onUpdate: n }, a, t, s) {
  const r = {
    latestValues: l1(a, t, s, e),
    renderState: i()
  };
  return n && (r.onMount = (o) => n({ props: a, current: o, ...r }), r.onUpdate = (o) => n(o)), r;
}
const vf = (e) => (i, n) => {
  const a = ae(Rn), t = ae(An), s = () => d1(e, i, a, t);
  return n ? s() : gt(s);
};
function l1(e, i, n, a) {
  const t = {}, s = a(e, {});
  for (const c in s)
    t[c] = sn(s[c]);
  let { initial: r, animate: o } = e;
  const f = Tn(e), l = Lo(e);
  i && l && !f && e.inherit !== !1 && (r === void 0 && (r = i.initial), o === void 0 && (o = i.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || r === !1;
  const u = d ? o : r;
  if (u && typeof u != "boolean" && !Mn(u)) {
    const c = Array.isArray(u) ? u : [u];
    for (let v = 0; v < c.length; v++) {
      const g = Ua(e, c[v]);
      if (g) {
        const { transitionEnd: y, transition: k, ...p } = g;
        for (const w in p) {
          let P = p[w];
          if (Array.isArray(P)) {
            const x = d ? P.length - 1 : 0;
            P = P[x];
          }
          P !== null && (t[w] = P);
        }
        for (const w in y)
          t[w] = y[w];
      }
    }
  }
  return t;
}
const u1 = {
  useVisualState: vf({
    scrapeMotionValuesFromProps: vt,
    createRenderState: yt
  })
}, Ts = ["x", "y", "width", "height", "cx", "cy", "r"], c1 = {
  useVisualState: vf({
    scrapeMotionValuesFromProps: Uo,
    createRenderState: mf,
    onUpdate: ({ props: e, prevProps: i, current: n, renderState: a, latestValues: t }) => {
      if (!n)
        return;
      let s = !!e.drag;
      if (!s) {
        for (const o in t)
          if (Ye.has(o)) {
            s = !0;
            break;
          }
      }
      if (!s)
        return;
      let r = !i;
      if (i)
        for (let o = 0; o < Ts.length; o++) {
          const f = Ts[o];
          e[f] !== i[f] && (r = !0);
        }
      r && q.read(() => {
        Io(n, a), q.render(() => {
          ct(a, t, mt(n.tagName), e.transformTemplate), Wo(n, a);
        });
      });
    }
  })
};
function m1(e, i) {
  return function(a, { forwardMotionProps: t } = { forwardMotionProps: !1 }) {
    const r = {
      ...wt(a) ? c1 : u1,
      preloadedFeatures: e,
      useRender: f1(t),
      createVisualElement: i,
      Component: a
    };
    return Qc(r);
  };
}
function Fa(e, i, n = {}) {
  var f;
  const a = Di(e, i, n.type === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
  let { transition: t = e.getDefaultTransition() || {} } = a || {};
  n.transitionOverride && (t = n.transitionOverride);
  const s = a ? () => Promise.all(ot(e, a, n)) : () => Promise.resolve(), r = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: d = 0, staggerChildren: u, staggerDirection: c } = t;
    return v1(e, i, d + l, u, c, n);
  } : () => Promise.resolve(), { when: o } = t;
  if (o) {
    const [l, d] = o === "beforeChildren" ? [s, r] : [r, s];
    return l().then(() => d());
  } else
    return Promise.all([s(), r(n.delay)]);
}
function v1(e, i, n = 0, a = 0, t = 1, s) {
  const r = [], o = (e.variantChildren.size - 1) * a, f = t === 1 ? (l = 0) => l * a : (l = 0) => o - l * a;
  return Array.from(e.variantChildren).sort(h1).forEach((l, d) => {
    l.notify("AnimationStart", i), r.push(Fa(l, i, {
      ...s,
      delay: n + f(d)
    }).then(() => l.notify("AnimationComplete", i)));
  }), Promise.all(r);
}
function h1(e, i) {
  return e.sortNodePosition(i);
}
function g1(e, i, n = {}) {
  e.notify("AnimationStart", i);
  let a;
  if (Array.isArray(i)) {
    const t = i.map((s) => Fa(e, s, n));
    a = Promise.all(t);
  } else if (typeof i == "string")
    a = Fa(e, i, n);
  else {
    const t = typeof i == "function" ? Di(e, i, n.custom) : i;
    a = Promise.all(ot(e, t, n));
  }
  return a.then(() => {
    e.notify("AnimationComplete", i);
  });
}
function hf(e, i) {
  if (!Array.isArray(i))
    return !1;
  const n = i.length;
  if (n !== e.length)
    return !1;
  for (let a = 0; a < n; a++)
    if (i[a] !== e[a])
      return !1;
  return !0;
}
const p1 = lt.length;
function gf(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? gf(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const i = {};
  for (let n = 0; n < p1; n++) {
    const a = lt[n], t = e.props[a];
    (Vi(t) || t === !1) && (i[a] = t);
  }
  return i;
}
const k1 = [...dt].reverse(), y1 = dt.length;
function w1(e) {
  return (i) => Promise.all(i.map(({ animation: n, options: a }) => g1(e, n, a)));
}
function b1(e) {
  let i = w1(e), n = As(), a = !0;
  const t = (f) => (l, d) => {
    var c;
    const u = Di(e, d, f === "exit" ? (c = e.presenceContext) == null ? void 0 : c.custom : void 0);
    if (u) {
      const { transition: v, transitionEnd: g, ...y } = u;
      l = { ...l, ...y, ...g };
    }
    return l;
  };
  function s(f) {
    i = f(e);
  }
  function r(f) {
    const { props: l } = e, d = gf(e.parent) || {}, u = [], c = /* @__PURE__ */ new Set();
    let v = {}, g = 1 / 0;
    for (let k = 0; k < y1; k++) {
      const p = k1[k], w = n[p], P = l[p] !== void 0 ? l[p] : d[p], x = Vi(P), S = p === f ? w.isActive : null;
      S === !1 && (g = k);
      let j = P === d[p] && P !== l[p] && x;
      if (j && a && e.manuallyAnimateOnMount && (j = !1), w.protectedKeys = { ...v }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && S === null || // If we didn't and don't have any defined prop for this animation type
      !P && !w.prevProp || // Or if the prop doesn't define an animation
      Mn(P) || typeof P == "boolean")
        continue;
      const M = _1(w.prevProp, P);
      let C = M || // If we're making this variant active, we want to always make it active
      p === f && w.isActive && !j && x || // If we removed a higher-priority variant (i is in reverse order)
      k > g && x, T = !1;
      const z = Array.isArray(P) ? P : [P];
      let B = z.reduce(t(p), {});
      S === !1 && (B = {});
      const { prevResolvedValues: he = {} } = w, X = {
        ...he,
        ...B
      }, ge = (O) => {
        C = !0, c.has(O) && (T = !0, c.delete(O)), w.needsAnimating[O] = !0;
        const U = e.getValue(O);
        U && (U.liveStyle = !1);
      };
      for (const O in X) {
        const U = B[O], Ce = he[O];
        if (v.hasOwnProperty(O))
          continue;
        let Pe = !1;
        la(U) && la(Ce) ? Pe = !hf(U, Ce) : Pe = U !== Ce, Pe ? U != null ? ge(O) : c.add(O) : U !== void 0 && c.has(O) ? ge(O) : w.protectedKeys[O] = !0;
      }
      w.prevProp = P, w.prevResolvedValues = B, w.isActive && (v = { ...v, ...B }), a && e.blockInitialAnimation && (C = !1), C && (!(j && M) || T) && u.push(...z.map((O) => ({
        animation: O,
        options: { type: p }
      })));
    }
    if (c.size) {
      const k = {};
      if (typeof l.initial != "boolean") {
        const p = Di(e, Array.isArray(l.initial) ? l.initial[0] : l.initial);
        p && p.transition && (k.transition = p.transition);
      }
      c.forEach((p) => {
        const w = e.getBaseTarget(p), P = e.getValue(p);
        P && (P.liveStyle = !0), k[p] = w ?? null;
      }), u.push({ animation: k });
    }
    let y = !!u.length;
    return a && (l.initial === !1 || l.initial === l.animate) && !e.manuallyAnimateOnMount && (y = !1), a = !1, y ? i(u) : Promise.resolve();
  }
  function o(f, l) {
    var u;
    if (n[f].isActive === l)
      return Promise.resolve();
    (u = e.variantChildren) == null || u.forEach((c) => {
      var v;
      return (v = c.animationState) == null ? void 0 : v.setActive(f, l);
    }), n[f].isActive = l;
    const d = r(f);
    for (const c in n)
      n[c].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: r,
    setActive: o,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = As(), a = !0;
    }
  };
}
function _1(e, i) {
  return typeof i == "string" ? i !== e : Array.isArray(i) ? !hf(i, e) : !1;
}
function qe(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function As() {
  return {
    animate: qe(!0),
    whileInView: qe(),
    whileHover: qe(),
    whileTap: qe(),
    whileDrag: qe(),
    whileFocus: qe(),
    exit: qe()
  };
}
class ze {
  constructor(i) {
    this.isMounted = !1, this.node = i;
  }
  update() {
  }
}
class x1 extends ze {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(i) {
    super(i), i.animationState || (i.animationState = b1(i));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Mn(i) && (this.unmountControls = i.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    i !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var i;
    this.node.animationState.reset(), (i = this.unmountControls) == null || i.call(this);
  }
}
let S1 = 0;
class C1 extends ze {
  constructor() {
    super(...arguments), this.id = S1++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: i, onExitComplete: n } = this.node.presenceContext, { isPresent: a } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === a)
      return;
    const t = this.node.animationState.setActive("exit", !i);
    n && !i && t.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: i, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), i && (this.unmount = i(this.id));
  }
  unmount() {
  }
}
const P1 = {
  animation: {
    Feature: x1
  },
  exit: {
    Feature: C1
  }
};
function Oi(e, i, n, a = { passive: !0 }) {
  return e.addEventListener(i, n, a), () => e.removeEventListener(i, n);
}
function Hi(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const F1 = (e) => (i) => Ia(i) && e(i, Hi(i));
function Pi(e, i, n, a) {
  return Oi(e, i, F1(n), a);
}
const pf = 1e-4, j1 = 1 - pf, M1 = 1 + pf, kf = 0.01, T1 = 0 - kf, A1 = 0 + kf;
function se(e) {
  return e.max - e.min;
}
function R1(e, i, n) {
  return Math.abs(e - i) <= n;
}
function Rs(e, i, n, a = 0.5) {
  e.origin = a, e.originPoint = W(i.min, i.max, e.origin), e.scale = se(n) / se(i), e.translate = W(n.min, n.max, e.origin) - e.originPoint, (e.scale >= j1 && e.scale <= M1 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= T1 && e.translate <= A1 || isNaN(e.translate)) && (e.translate = 0);
}
function Fi(e, i, n, a) {
  Rs(e.x, i.x, n.x, a ? a.originX : void 0), Rs(e.y, i.y, n.y, a ? a.originY : void 0);
}
function Es(e, i, n) {
  e.min = n.min + i.min, e.max = e.min + se(i);
}
function E1(e, i, n) {
  Es(e.x, i.x, n.x), Es(e.y, i.y, n.y);
}
function Bs(e, i, n) {
  e.min = i.min - n.min, e.max = e.min + se(i);
}
function ji(e, i, n) {
  Bs(e.x, i.x, n.x), Bs(e.y, i.y, n.y);
}
function ue(e) {
  return [e("x"), e("y")];
}
const yf = ({ current: e }) => e ? e.ownerDocument.defaultView : null;
class wf {
  constructor(i, n, { transformPagePoint: a, contextWindow: t, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const u = Jn(this.lastMoveEventInfo, this.history), c = this.startEvent !== null, v = Mc(u.offset, { x: 0, y: 0 }) >= 3;
      if (!c && !v)
        return;
      const { point: g } = u, { timestamp: y } = Z;
      this.history.push({ ...g, timestamp: y });
      const { onStart: k, onMove: p } = this.handlers;
      c || (k && k(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), p && p(this.lastMoveEvent, u);
    }, this.handlePointerMove = (u, c) => {
      this.lastMoveEvent = u, this.lastMoveEventInfo = Xn(c, this.transformPagePoint), q.update(this.updatePoint, !0);
    }, this.handlePointerUp = (u, c) => {
      this.end();
      const { onEnd: v, onSessionEnd: g, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const k = Jn(u.type === "pointercancel" ? this.lastMoveEventInfo : Xn(c, this.transformPagePoint), this.history);
      this.startEvent && v && v(u, k), g && g(u, k);
    }, !Ia(i))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = a, this.contextWindow = t || window;
    const r = Hi(i), o = Xn(r, this.transformPagePoint), { point: f } = o, { timestamp: l } = Z;
    this.history = [{ ...f, timestamp: l }];
    const { onSessionStart: d } = n;
    d && d(i, Jn(o, this.history)), this.removeListeners = Wi(Pi(this.contextWindow, "pointermove", this.handlePointerMove), Pi(this.contextWindow, "pointerup", this.handlePointerUp), Pi(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    this.removeListeners && this.removeListeners(), Le(this.updatePoint);
  }
}
function Xn(e, i) {
  return i ? { point: i(e.point) } : e;
}
function Ds(e, i) {
  return { x: e.x - i.x, y: e.y - i.y };
}
function Jn({ point: e }, i) {
  return {
    point: e,
    delta: Ds(e, bf(i)),
    offset: Ds(e, B1(i)),
    velocity: D1(i, 0.1)
  };
}
function B1(e) {
  return e[0];
}
function bf(e) {
  return e[e.length - 1];
}
function D1(e, i) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, a = null;
  const t = bf(e);
  for (; n >= 0 && (a = e[n], !(t.timestamp - a.timestamp > /* @__PURE__ */ ve(i))); )
    n--;
  if (!a)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ be(t.timestamp - a.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (t.x - a.x) / s,
    y: (t.y - a.y) / s
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function $1(e, { min: i, max: n }, a) {
  return i !== void 0 && e < i ? e = a ? W(i, e, a.min) : Math.max(e, i) : n !== void 0 && e > n && (e = a ? W(n, e, a.max) : Math.min(e, n)), e;
}
function $s(e, i, n) {
  return {
    min: i !== void 0 ? e.min + i : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function L1(e, { top: i, left: n, bottom: a, right: t }) {
  return {
    x: $s(e.x, n, t),
    y: $s(e.y, i, a)
  };
}
function Ls(e, i) {
  let n = i.min - e.min, a = i.max - e.max;
  return i.max - i.min < e.max - e.min && ([n, a] = [a, n]), { min: n, max: a };
}
function V1(e, i) {
  return {
    x: Ls(e.x, i.x),
    y: Ls(e.y, i.y)
  };
}
function z1(e, i) {
  let n = 0.5;
  const a = se(e), t = se(i);
  return t > a ? n = /* @__PURE__ */ ti(i.min, i.max - a, e.min) : a > t && (n = /* @__PURE__ */ ti(e.min, e.max - t, i.min)), Ae(0, 1, n);
}
function O1(e, i) {
  const n = {};
  return i.min !== void 0 && (n.min = i.min - e.min), i.max !== void 0 && (n.max = i.max - e.min), n;
}
const ja = 0.35;
function N1(e = ja) {
  return e === !1 ? e = 0 : e === !0 && (e = ja), {
    x: Vs(e, "left", "right"),
    y: Vs(e, "top", "bottom")
  };
}
function Vs(e, i, n) {
  return {
    min: zs(e, i),
    max: zs(e, n)
  };
}
function zs(e, i) {
  return typeof e == "number" ? e : e[i] || 0;
}
function I1(e) {
  return e === "x" || e === "y" ? pe[e] ? null : (pe[e] = !0, () => {
    pe[e] = !1;
  }) : pe.x || pe.y ? null : (pe.x = pe.y = !0, () => {
    pe.x = pe.y = !1;
  });
}
const q1 = /* @__PURE__ */ new WeakMap();
class W1 {
  constructor(i) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = G(), this.visualElement = i;
  }
  start(i, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: a } = this.visualElement;
    if (a && a.isPresent === !1)
      return;
    const t = (d) => {
      const { dragSnapToOrigin: u } = this.getProps();
      u ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Hi(d).point);
    }, s = (d, u) => {
      const { drag: c, dragPropagation: v, onDragStart: g } = this.getProps();
      if (c && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = I1(c), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ue((k) => {
        let p = this.getAxisMotionValue(k).get() || 0;
        if (_e.test(p)) {
          const { projection: w } = this.visualElement;
          if (w && w.layout) {
            const P = w.layout.layoutBox[k];
            P && (p = se(P) * (parseFloat(p) / 100));
          }
        }
        this.originPoint[k] = p;
      }), g && q.postRender(() => g(d, u)), ua(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, r = (d, u) => {
      const { dragPropagation: c, dragDirectionLock: v, onDirectionLock: g, onDrag: y } = this.getProps();
      if (!c && !this.openDragLock)
        return;
      const { offset: k } = u;
      if (v && this.currentDirection === null) {
        this.currentDirection = H1(k), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, k), this.updateAxis("y", u.point, k), this.visualElement.render(), y && y(d, u);
    }, o = (d, u) => this.stop(d, u), f = () => ue((d) => {
      var u;
      return this.getAnimationState(d) === "paused" && ((u = this.getAxisMotionValue(d).animation) == null ? void 0 : u.play());
    }), { dragSnapToOrigin: l } = this.getProps();
    this.panSession = new wf(i, {
      onSessionStart: t,
      onStart: s,
      onMove: r,
      onSessionEnd: o,
      resumeAnimation: f
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: l,
      contextWindow: yf(this.visualElement)
    });
  }
  stop(i, n) {
    const a = this.isDragging;
    if (this.cancel(), !a)
      return;
    const { velocity: t } = n;
    this.startAnimation(t);
    const { onDragEnd: s } = this.getProps();
    s && q.postRender(() => s(i, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: n } = this.visualElement;
    i && (i.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: a } = this.getProps();
    !a && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(i, n, a) {
    const { drag: t } = this.getProps();
    if (!a || !en(i, t, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(i);
    let r = this.originPoint[i] + a[i];
    this.constraints && this.constraints[i] && (r = $1(r, this.constraints[i], this.elastic[i])), s.set(r);
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: i, dragElastic: n } = this.getProps(), a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout, t = this.constraints;
    i && ni(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && a ? this.constraints = L1(a.layoutBox, i) : this.constraints = !1, this.elastic = N1(n), t !== this.constraints && a && this.constraints && !this.hasMutatedConstraints && ue((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = O1(a.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: n } = this.getProps();
    if (!i || !ni(i))
      return !1;
    const a = i.current;
    Se(a !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: t } = this.visualElement;
    if (!t || !t.layout)
      return !1;
    const s = pc(a, t.root, this.visualElement.getTransformPagePoint());
    let r = V1(t.layout.layoutBox, s);
    if (n) {
      const o = n(vc(r));
      this.hasMutatedConstraints = !!o, o && (r = Ko(o));
    }
    return r;
  }
  startAnimation(i) {
    const { drag: n, dragMomentum: a, dragElastic: t, dragTransition: s, dragSnapToOrigin: r, onDragTransitionEnd: o } = this.getProps(), f = this.constraints || {}, l = ue((d) => {
      if (!en(d, n, this.currentDirection))
        return;
      let u = f && f[d] || {};
      r && (u = { min: 0, max: 0 });
      const c = t ? 200 : 1e6, v = t ? 40 : 1e7, g = {
        type: "inertia",
        velocity: a ? i[d] : 0,
        bounceStiffness: c,
        bounceDamping: v,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...u
      };
      return this.startAxisValueAnimation(d, g);
    });
    return Promise.all(l).then(o);
  }
  startAxisValueAnimation(i, n) {
    const a = this.getAxisMotionValue(i);
    return ua(this.visualElement, i), a.start(rt(i, a, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    ue((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    ue((i) => {
      var n;
      return (n = this.getAxisMotionValue(i).animation) == null ? void 0 : n.pause();
    });
  }
  getAnimationState(i) {
    var n;
    return (n = this.getAxisMotionValue(i).animation) == null ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(i) {
    const n = `_drag${i.toUpperCase()}`, a = this.visualElement.getProps(), t = a[n];
    return t || this.visualElement.getValue(i, (a.initial ? a.initial[i] : void 0) || 0);
  }
  snapToCursor(i) {
    ue((n) => {
      const { drag: a } = this.getProps();
      if (!en(n, a, this.currentDirection))
        return;
      const { projection: t } = this.visualElement, s = this.getAxisMotionValue(n);
      if (t && t.layout) {
        const { min: r, max: o } = t.layout.layoutBox[n];
        s.set(i[n] - W(r, o, 0.5));
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
    const { drag: i, dragConstraints: n } = this.getProps(), { projection: a } = this.visualElement;
    if (!ni(n) || !a || !this.constraints)
      return;
    this.stopAnimation();
    const t = { x: 0, y: 0 };
    ue((r) => {
      const o = this.getAxisMotionValue(r);
      if (o && this.constraints !== !1) {
        const f = o.get();
        t[r] = z1({ min: f, max: f }, this.constraints[r]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", a.root && a.root.updateScroll(), a.updateLayout(), this.resolveConstraints(), ue((r) => {
      if (!en(r, i, null))
        return;
      const o = this.getAxisMotionValue(r), { min: f, max: l } = this.constraints[r];
      o.set(W(f, l, t[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    q1.set(this.visualElement, this);
    const i = this.visualElement.current, n = Pi(i, "pointerdown", (f) => {
      const { drag: l, dragListener: d = !0 } = this.getProps();
      l && d && this.start(f);
    }), a = () => {
      const { dragConstraints: f } = this.getProps();
      ni(f) && f.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: t } = this.visualElement, s = t.addEventListener("measure", a);
    t && !t.layout && (t.root && t.root.updateScroll(), t.updateLayout()), q.read(a);
    const r = Oi(window, "resize", () => this.scalePositionWithinConstraints()), o = t.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: l }) => {
      this.isDragging && l && (ue((d) => {
        const u = this.getAxisMotionValue(d);
        u && (this.originPoint[d] += f[d].translate, u.set(u.get() + f[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), s(), o && o();
    };
  }
  getProps() {
    const i = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: a = !1, dragPropagation: t = !1, dragConstraints: s = !1, dragElastic: r = ja, dragMomentum: o = !0 } = i;
    return {
      ...i,
      drag: n,
      dragDirectionLock: a,
      dragPropagation: t,
      dragConstraints: s,
      dragElastic: r,
      dragMomentum: o
    };
  }
}
function en(e, i, n) {
  return (i === !0 || i === e) && (n === null || n === e);
}
function H1(e, i = 10) {
  let n = null;
  return Math.abs(e.y) > i ? n = "y" : Math.abs(e.x) > i && (n = "x"), n;
}
class U1 extends ze {
  constructor(i) {
    super(i), this.removeGroupControls = me, this.removeListeners = me, this.controls = new W1(i);
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || me;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Os = (e) => (i, n) => {
  e && q.postRender(() => e(i, n));
};
class G1 extends ze {
  constructor() {
    super(...arguments), this.removePointerDownListener = me;
  }
  onPointerDown(i) {
    this.session = new wf(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: yf(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: n, onPan: a, onPanEnd: t } = this.node.getProps();
    return {
      onSessionStart: Os(i),
      onStart: Os(n),
      onMove: a,
      onEnd: (s, r) => {
        delete this.session, t && q.postRender(() => t(s, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Pi(this.node.current, "pointerdown", (i) => this.onPointerDown(i));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const rn = {
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
function Ns(e, i) {
  return i.max === i.min ? 0 : e / (i.max - i.min) * 100;
}
const bi = {
  correct: (e, i) => {
    if (!i.target)
      return e;
    if (typeof e == "string")
      if (R.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Ns(e, i.target.x), a = Ns(e, i.target.y);
    return `${n}% ${a}%`;
  }
}, K1 = {
  correct: (e, { treeScale: i, projectionDelta: n }) => {
    const a = e, t = Ve.parse(e);
    if (t.length > 5)
      return a;
    const s = Ve.createTransformer(e), r = typeof t[0] != "number" ? 1 : 0, o = n.x.scale * i.x, f = n.y.scale * i.y;
    t[0 + r] /= o, t[1 + r] /= f;
    const l = W(o, f, 0.5);
    return typeof t[2 + r] == "number" && (t[2 + r] /= l), typeof t[3 + r] == "number" && (t[3 + r] /= l), s(t);
  }
};
class Y1 extends Rd {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: i, layoutGroup: n, switchLayoutGroup: a, layoutId: t } = this.props, { projection: s } = i;
    mc(X1), s && (n.group && n.group.add(s), a && a.register && t && a.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), rn.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(i) {
    const { layoutDependency: n, visualElement: a, drag: t, isPresent: s } = this.props, r = a.projection;
    return r && (r.isPresent = s, t || i.layoutDependency !== n || n === void 0 || i.isPresent !== s ? r.willUpdate() : this.safeToRemove(), i.isPresent !== s && (s ? r.promote() : r.relegate() || q.postRender(() => {
      const o = r.getStack();
      (!o || !o.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i && (i.root.didUpdate(), kt.postRender(() => {
      !i.currentAnimation && i.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: i, layoutGroup: n, switchLayoutGroup: a } = this.props, { projection: t } = i;
    t && (t.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(t), a && a.deregister && a.deregister(t));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function _f(e) {
  const [i, n] = of(), a = ae(ht);
  return h.jsx(Y1, { ...e, layoutGroup: a, switchLayoutGroup: ae(lf), isPresent: i, safeToRemove: n });
}
const X1 = {
  borderRadius: {
    ...bi,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: bi,
  borderTopRightRadius: bi,
  borderBottomLeftRadius: bi,
  borderBottomRightRadius: bi,
  boxShadow: K1
}, J1 = (e, i) => e.depth - i.depth;
class Z1 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(i) {
    Oa(this.children, i), this.isDirty = !0;
  }
  remove(i) {
    Pn(this.children, i), this.isDirty = !0;
  }
  forEach(i) {
    this.isDirty && this.children.sort(J1), this.isDirty = !1, this.children.forEach(i);
  }
}
const xf = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Q1 = xf.length, Is = (e) => typeof e == "string" ? parseFloat(e) : e, qs = (e) => typeof e == "number" || R.test(e);
function em(e, i, n, a, t, s) {
  t ? (e.opacity = W(0, n.opacity ?? 1, im(a)), e.opacityExit = W(i.opacity ?? 1, 0, nm(a))) : s && (e.opacity = W(i.opacity ?? 1, n.opacity ?? 1, a));
  for (let r = 0; r < Q1; r++) {
    const o = `border${xf[r]}Radius`;
    let f = Ws(i, o), l = Ws(n, o);
    if (f === void 0 && l === void 0)
      continue;
    f || (f = 0), l || (l = 0), f === 0 || l === 0 || qs(f) === qs(l) ? (e[o] = Math.max(W(Is(f), Is(l), a), 0), (_e.test(l) || _e.test(f)) && (e[o] += "%")) : e[o] = l;
  }
  (i.rotate || n.rotate) && (e.rotate = W(i.rotate || 0, n.rotate || 0, a));
}
function Ws(e, i) {
  return e[i] !== void 0 ? e[i] : e.borderRadius;
}
const im = /* @__PURE__ */ Sf(0, 0.5, fo), nm = /* @__PURE__ */ Sf(0.5, 0.95, me);
function Sf(e, i, n) {
  return (a) => a < e ? 0 : a > i ? 1 : n(/* @__PURE__ */ ti(e, i, a));
}
function Hs(e, i) {
  e.min = i.min, e.max = i.max;
}
function le(e, i) {
  Hs(e.x, i.x), Hs(e.y, i.y);
}
function Us(e, i) {
  e.translate = i.translate, e.scale = i.scale, e.originPoint = i.originPoint, e.origin = i.origin;
}
function Gs(e, i, n, a, t) {
  return e -= i, e = vn(e, 1 / n, a), t !== void 0 && (e = vn(e, 1 / t, a)), e;
}
function am(e, i = 0, n = 1, a = 0.5, t, s = e, r = e) {
  if (_e.test(i) && (i = parseFloat(i), i = W(r.min, r.max, i / 100) - r.min), typeof i != "number")
    return;
  let o = W(s.min, s.max, a);
  e === s && (o -= i), e.min = Gs(e.min, i, n, o, t), e.max = Gs(e.max, i, n, o, t);
}
function Ks(e, i, [n, a, t], s, r) {
  am(e, i[n], i[a], i[t], i.scale, s, r);
}
const tm = ["x", "scaleX", "originX"], sm = ["y", "scaleY", "originY"];
function Ys(e, i, n, a) {
  Ks(e.x, i, tm, n ? n.x : void 0, a ? a.x : void 0), Ks(e.y, i, sm, n ? n.y : void 0, a ? a.y : void 0);
}
function Xs(e) {
  return e.translate === 0 && e.scale === 1;
}
function Cf(e) {
  return Xs(e.x) && Xs(e.y);
}
function Js(e, i) {
  return e.min === i.min && e.max === i.max;
}
function rm(e, i) {
  return Js(e.x, i.x) && Js(e.y, i.y);
}
function Zs(e, i) {
  return Math.round(e.min) === Math.round(i.min) && Math.round(e.max) === Math.round(i.max);
}
function Pf(e, i) {
  return Zs(e.x, i.x) && Zs(e.y, i.y);
}
function Qs(e) {
  return se(e.x) / se(e.y);
}
function er(e, i) {
  return e.translate === i.translate && e.scale === i.scale && e.originPoint === i.originPoint;
}
class om {
  constructor() {
    this.members = [];
  }
  add(i) {
    Oa(this.members, i), i.scheduleRender();
  }
  remove(i) {
    if (Pn(this.members, i), i === this.prevLead && (this.prevLead = void 0), i === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(i) {
    const n = this.members.findIndex((t) => i === t);
    if (n === 0)
      return !1;
    let a;
    for (let t = n; t >= 0; t--) {
      const s = this.members[t];
      if (s.isPresent !== !1) {
        a = s;
        break;
      }
    }
    return a ? (this.promote(a), !0) : !1;
  }
  promote(i, n) {
    const a = this.lead;
    if (i !== a && (this.prevLead = a, this.lead = i, i.show(), a)) {
      a.instance && a.scheduleRender(), i.scheduleRender(), i.resumeFrom = a, n && (i.resumeFrom.preserveOpacity = !0), a.snapshot && (i.snapshot = a.snapshot, i.snapshot.latestValues = a.animationValues || a.latestValues), i.root && i.root.isUpdating && (i.isLayoutDirty = !0);
      const { crossfade: t } = i.options;
      t === !1 && a.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: n, resumingFrom: a } = i;
      n.onExitComplete && n.onExitComplete(), a && a.options.onExitComplete && a.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
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
function fm(e, i, n) {
  let a = "";
  const t = e.x.translate / i.x, s = e.y.translate / i.y, r = (n == null ? void 0 : n.z) || 0;
  if ((t || s || r) && (a = `translate3d(${t}px, ${s}px, ${r}px) `), (i.x !== 1 || i.y !== 1) && (a += `scale(${1 / i.x}, ${1 / i.y}) `), n) {
    const { transformPerspective: l, rotate: d, rotateX: u, rotateY: c, skewX: v, skewY: g } = n;
    l && (a = `perspective(${l}px) ${a}`), d && (a += `rotate(${d}deg) `), u && (a += `rotateX(${u}deg) `), c && (a += `rotateY(${c}deg) `), v && (a += `skewX(${v}deg) `), g && (a += `skewY(${g}deg) `);
  }
  const o = e.x.scale * i.x, f = e.y.scale * i.y;
  return (o !== 1 || f !== 1) && (a += `scale(${o}, ${f})`), a || "none";
}
const Zn = ["", "X", "Y", "Z"], dm = { visibility: "hidden" }, ir = 1e3;
let lm = 0;
function Qn(e, i, n, a) {
  const { latestValues: t } = i;
  t[e] && (n[e] = t[e], i.setStaticValue(e, 0), a && (a[e] = 0));
}
function Ff(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: i } = e.options;
  if (!i)
    return;
  const n = io(i);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: t, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", q, !(t || s));
  }
  const { parent: a } = e;
  a && !a.hasCheckedOptimisedAppear && Ff(a);
}
function jf({ attachResizeListener: e, defaultParent: i, measureScroll: n, checkIsScrollRoot: a, resetTransform: t }) {
  return class {
    constructor(r = {}, o = i == null ? void 0 : i()) {
      this.id = lm++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(mm), this.nodes.forEach(km), this.nodes.forEach(ym), this.nodes.forEach(vm);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = o ? o.root || o : this, this.path = o ? [...o.path, o] : [], this.parent = o, this.depth = o ? o.depth + 1 : 0;
      for (let f = 0; f < this.path.length; f++)
        this.path[f].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Z1());
    }
    addEventListener(r, o) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new Na()), this.eventHandlers.get(r).add(o);
    }
    notifyListeners(r, ...o) {
      const f = this.eventHandlers.get(r);
      f && f.notify(...o);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r, o = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = Do(r), this.instance = r;
      const { layoutId: f, layout: l, visualElement: d } = this.options;
      if (d && !d.current && d.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), o && (l || f) && (this.isLayoutDirty = !0), e) {
        let u;
        const c = () => this.root.updateBlockedByResize = !1;
        e(r, () => {
          this.root.updateBlockedByResize = !0, u && u(), u = jc(c, 250), rn.hasAnimatedSinceResize && (rn.hasAnimatedSinceResize = !1, this.nodes.forEach(ar));
        });
      }
      f && this.root.registerSharedNode(f, this), this.options.animate !== !1 && d && (f || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: c, hasRelativeLayoutChanged: v, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || d.getDefaultTransition() || Sm, { onLayoutAnimationStart: k, onLayoutAnimationComplete: p } = d.getProps(), w = !this.targetLayout || !Pf(this.targetLayout, g), P = !c && v;
        if (this.options.layoutRoot || this.resumeFrom || P || c && (w || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(u, P);
          const x = {
            ...st(y, "layout"),
            onPlay: k,
            onComplete: p
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          c || ar(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Le(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(wm), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ff(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d];
        u.shouldResetTransform = !0, u.updateScroll("snapshot"), u.options.layoutRoot && u.willUpdate(!1);
      }
      const { layoutId: o, layout: f } = this.options;
      if (o === void 0 && !f)
        return;
      const l = this.getTransformTemplate();
      this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(nr);
        return;
      }
      this.isUpdating || this.nodes.forEach(gm), this.isUpdating = !1, this.nodes.forEach(pm), this.nodes.forEach(um), this.nodes.forEach(cm), this.clearAllSnapshots();
      const o = we.now();
      Z.delta = Ae(0, 1e3 / 60, o - Z.timestamp), Z.timestamp = o, Z.isProcessing = !0, Nn.update.process(Z), Nn.preRender.process(Z), Nn.render.process(Z), Z.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, kt.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(hm), this.sharedNodes.forEach(bm);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      q.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !se(this.snapshot.measuredBox.x) && !se(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let f = 0; f < this.path.length; f++)
          this.path[f].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = G(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: o } = this.options;
      o && o.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let o = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (o = !1), o) {
        const f = a(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: f,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : f
        };
      }
    }
    resetTransform() {
      if (!t)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, o = this.projectionDelta && !Cf(this.projectionDelta), f = this.getTransformTemplate(), l = f ? f(this.latestValues, "") : void 0, d = l !== this.prevTransformTemplateValue;
      r && (o || We(this.latestValues) || d) && (t(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const o = this.measurePageBox();
      let f = this.removeElementScroll(o);
      return r && (f = this.removeTransform(f)), Cm(f), {
        animationId: this.root.animationId,
        measuredBox: o,
        layoutBox: f,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var l;
      const { visualElement: r } = this.options;
      if (!r)
        return G();
      const o = r.measureViewportBox();
      if (!(((l = this.scroll) == null ? void 0 : l.wasRoot) || this.path.some(Pm))) {
        const { scroll: d } = this.root;
        d && (ei(o.x, d.offset.x), ei(o.y, d.offset.y));
      }
      return o;
    }
    removeElementScroll(r) {
      var f;
      const o = G();
      if (le(o, r), (f = this.scroll) != null && f.wasRoot)
        return o;
      for (let l = 0; l < this.path.length; l++) {
        const d = this.path[l], { scroll: u, options: c } = d;
        d !== this.root && u && c.layoutScroll && (u.wasRoot && le(o, r), ei(o.x, u.offset.x), ei(o.y, u.offset.y));
      }
      return o;
    }
    applyTransform(r, o = !1) {
      const f = G();
      le(f, r);
      for (let l = 0; l < this.path.length; l++) {
        const d = this.path[l];
        !o && d.options.layoutScroll && d.scroll && d !== d.root && ii(f, {
          x: -d.scroll.offset.x,
          y: -d.scroll.offset.y
        }), We(d.latestValues) && ii(f, d.latestValues);
      }
      return We(this.latestValues) && ii(f, this.latestValues), f;
    }
    removeTransform(r) {
      const o = G();
      le(o, r);
      for (let f = 0; f < this.path.length; f++) {
        const l = this.path[f];
        if (!l.instance || !We(l.latestValues))
          continue;
        xa(l.latestValues) && l.updateSnapshot();
        const d = G(), u = l.measurePageBox();
        le(d, u), Ys(o, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, d);
      }
      return We(this.latestValues) && Ys(o, this.latestValues), o;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Z.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var c;
      const o = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
      const f = !!this.resumingFrom || this !== o;
      if (!(r || f && this.isSharedProjectionDirty || this.isProjectionDirty || (c = this.parent) != null && c.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: d, layoutId: u } = this.options;
      if (!(!this.layout || !(d || u))) {
        if (this.resolvedRelativeTargetAt = Z.timestamp, !this.targetDelta && !this.relativeTarget) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = G(), this.relativeTargetOrigin = G(), ji(this.relativeTargetOrigin, this.layout.layoutBox, v.layout.layoutBox), le(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = G(), this.targetWithTransforms = G()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), E1(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : le(this.target, this.layout.layoutBox), Xo(this.target, this.targetDelta)) : le(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const v = this.getClosestProjectingParent();
          v && !!v.resumingFrom == !!this.resumingFrom && !v.options.layoutScroll && v.target && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = G(), this.relativeTargetOrigin = G(), ji(this.relativeTargetOrigin, this.target, v.target), le(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || xa(this.parent.latestValues) || Yo(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var g;
      const r = this.getLead(), o = !!this.resumingFrom || this !== r;
      let f = !0;
      if ((this.isProjectionDirty || (g = this.parent) != null && g.isProjectionDirty) && (f = !1), o && (this.isSharedProjectionDirty || this.isTransformDirty) && (f = !1), this.resolvedRelativeTargetAt === Z.timestamp && (f = !1), f)
        return;
      const { layout: l, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(l || d))
        return;
      le(this.layoutCorrected, this.layout.layoutBox);
      const u = this.treeScale.x, c = this.treeScale.y;
      gc(this.layoutCorrected, this.treeScale, this.path, o), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = G());
      const { target: v } = r;
      if (!v) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Us(this.prevProjectionDelta.x, this.projectionDelta.x), Us(this.prevProjectionDelta.y, this.projectionDelta.y)), Fi(this.projectionDelta, this.layoutCorrected, v, this.latestValues), (this.treeScale.x !== u || this.treeScale.y !== c || !er(this.projectionDelta.x, this.prevProjectionDelta.x) || !er(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      var o;
      if ((o = this.options.visualElement) == null || o.scheduleRender(), r) {
        const f = this.getStack();
        f && f.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Qe(), this.projectionDelta = Qe(), this.projectionDeltaWithTransform = Qe();
    }
    setAnimationOrigin(r, o = !1) {
      const f = this.snapshot, l = f ? f.latestValues : {}, d = { ...this.latestValues }, u = Qe();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !o;
      const c = G(), v = f ? f.source : void 0, g = this.layout ? this.layout.source : void 0, y = v !== g, k = this.getStack(), p = !k || k.members.length <= 1, w = !!(y && !p && this.options.crossfade === !0 && !this.path.some(xm));
      this.animationProgress = 0;
      let P;
      this.mixTargetDelta = (x) => {
        const S = x / 1e3;
        tr(u.x, r.x, S), tr(u.y, r.y, S), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ji(c, this.layout.layoutBox, this.relativeParent.layout.layoutBox), _m(this.relativeTarget, this.relativeTargetOrigin, c, S), P && rm(this.relativeTarget, P) && (this.isProjectionDirty = !1), P || (P = G()), le(P, this.relativeTarget)), y && (this.animationValues = d, em(d, l, this.latestValues, S, w, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Le(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = q.update(() => {
        rn.hasAnimatedSinceResize = !0, this.currentAnimation = Qo(0, ir, {
          ...r,
          onUpdate: (o) => {
            this.mixTargetDelta(o), r.onUpdate && r.onUpdate(o);
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ir), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: o, target: f, layout: l, latestValues: d } = r;
      if (!(!o || !f || !l)) {
        if (this !== r && this.layout && l && Mf(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
          f = this.target || G();
          const u = se(this.layout.layoutBox.x);
          f.x.min = r.target.x.min, f.x.max = f.x.min + u;
          const c = se(this.layout.layoutBox.y);
          f.y.min = r.target.y.min, f.y.max = f.y.min + c;
        }
        le(o, f), ii(o, d), Fi(this.projectionDeltaWithTransform, this.layoutCorrected, o, d);
      }
    }
    registerSharedNode(r, o) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new om()), this.sharedNodes.get(r).add(o);
      const l = o.options.initialPromotionConfig;
      o.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity: l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(o) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: r } = this.options;
      return r ? ((o = this.getStack()) == null ? void 0 : o.lead) || this : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: r } = this.options;
      return r ? (o = this.getStack()) == null ? void 0 : o.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: o, preserveFollowOpacity: f } = {}) {
      const l = this.getStack();
      l && l.promote(this, f), r && (this.projectionDelta = void 0, this.needsReset = !0), o && this.setOptions({ transition: o });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let o = !1;
      const { latestValues: f } = r;
      if ((f.z || f.rotate || f.rotateX || f.rotateY || f.rotateZ || f.skewX || f.skewY) && (o = !0), !o)
        return;
      const l = {};
      f.z && Qn("z", r, l, this.animationValues);
      for (let d = 0; d < Zn.length; d++)
        Qn(`rotate${Zn[d]}`, r, l, this.animationValues), Qn(`skew${Zn[d]}`, r, l, this.animationValues);
      r.render();
      for (const d in l)
        r.setStaticValue(d, l[d]), this.animationValues && (this.animationValues[d] = l[d]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return dm;
      const o = {
        visibility: ""
      }, f = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, o.opacity = "", o.pointerEvents = sn(r == null ? void 0 : r.pointerEvents) || "", o.transform = f ? f(this.latestValues, "") : "none", o;
      const l = this.getLead();
      if (!this.projectionDelta || !this.layout || !l.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = sn(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !We(this.latestValues) && (v.transform = f ? f({}, "") : "none", this.hasProjected = !1), v;
      }
      const d = l.animationValues || l.latestValues;
      this.applyTransformsToTarget(), o.transform = fm(this.projectionDeltaWithTransform, this.treeScale, d), f && (o.transform = f(d, o.transform));
      const { x: u, y: c } = this.projectionDelta;
      o.transformOrigin = `${u.origin * 100}% ${c.origin * 100}% 0`, l.animationValues ? o.opacity = l === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : o.opacity = l === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const v in zi) {
        if (d[v] === void 0)
          continue;
        const { correct: g, applyTo: y, isCSSVariable: k } = zi[v], p = o.transform === "none" ? d[v] : g(d[v], l);
        if (y) {
          const w = y.length;
          for (let P = 0; P < w; P++)
            o[y[P]] = p;
        } else
          k ? this.options.visualElement.renderState.vars[v] = p : o[v] = p;
      }
      return this.options.layoutId && (o.pointerEvents = l === this ? sn(r == null ? void 0 : r.pointerEvents) || "" : "none"), o;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var o;
        return (o = r.currentAnimation) == null ? void 0 : o.stop();
      }), this.root.nodes.forEach(nr), this.root.sharedNodes.clear();
    }
  };
}
function um(e) {
  e.updateLayout();
}
function cm(e) {
  var n;
  const i = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
    const { layoutBox: a, measuredBox: t } = e.layout, { animationType: s } = e.options, r = i.source !== e.layout.source;
    s === "size" ? ue((u) => {
      const c = r ? i.measuredBox[u] : i.layoutBox[u], v = se(c);
      c.min = a[u].min, c.max = c.min + v;
    }) : Mf(s, i.layoutBox, a) && ue((u) => {
      const c = r ? i.measuredBox[u] : i.layoutBox[u], v = se(a[u]);
      c.max = c.min + v, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + v);
    });
    const o = Qe();
    Fi(o, a, i.layoutBox);
    const f = Qe();
    r ? Fi(f, e.applyTransform(t, !0), i.measuredBox) : Fi(f, a, i.layoutBox);
    const l = !Cf(o);
    let d = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: c, layout: v } = u;
        if (c && v) {
          const g = G();
          ji(g, i.layoutBox, c.layoutBox);
          const y = G();
          ji(y, a, v.layoutBox), Pf(g, y) || (d = !0), u.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = g, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: a,
      snapshot: i,
      delta: f,
      layoutDelta: o,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: d
    });
  } else if (e.isLead()) {
    const { onExitComplete: a } = e.options;
    a && a();
  }
  e.options.transition = void 0;
}
function mm(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function vm(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function hm(e) {
  e.clearSnapshot();
}
function nr(e) {
  e.clearMeasurements();
}
function gm(e) {
  e.isLayoutDirty = !1;
}
function pm(e) {
  const { visualElement: i } = e.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function ar(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function km(e) {
  e.resolveTargetDelta();
}
function ym(e) {
  e.calcProjection();
}
function wm(e) {
  e.resetSkewAndRotation();
}
function bm(e) {
  e.removeLeadSnapshot();
}
function tr(e, i, n) {
  e.translate = W(i.translate, 0, n), e.scale = W(i.scale, 1, n), e.origin = i.origin, e.originPoint = i.originPoint;
}
function sr(e, i, n, a) {
  e.min = W(i.min, n.min, a), e.max = W(i.max, n.max, a);
}
function _m(e, i, n, a) {
  sr(e.x, i.x, n.x, a), sr(e.y, i.y, n.y, a);
}
function xm(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Sm = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, rr = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), or = rr("applewebkit/") && !rr("chrome/") ? Math.round : me;
function fr(e) {
  e.min = or(e.min), e.max = or(e.max);
}
function Cm(e) {
  fr(e.x), fr(e.y);
}
function Mf(e, i, n) {
  return e === "position" || e === "preserve-aspect" && !R1(Qs(i), Qs(n), 0.2);
}
function Pm(e) {
  var i;
  return e !== e.root && ((i = e.scroll) == null ? void 0 : i.wasRoot);
}
const Fm = jf({
  attachResizeListener: (e, i) => Oi(e, "resize", i),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), ea = {
  current: void 0
}, Tf = jf({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!ea.current) {
      const e = new Fm({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), ea.current = e;
    }
    return ea.current;
  },
  resetTransform: (e, i) => {
    e.style.transform = i !== void 0 ? i : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), jm = {
  pan: {
    Feature: G1
  },
  drag: {
    Feature: U1,
    ProjectionNode: Tf,
    MeasureLayout: _f
  }
};
function dr(e, i, n) {
  const { props: a } = e;
  e.animationState && a.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const t = "onHover" + n, s = a[t];
  s && q.postRender(() => s(i, Hi(i)));
}
class Mm extends ze {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = el(i, (n, a) => (dr(this.node, a, "Start"), (t) => dr(this.node, t, "End"))));
  }
  unmount() {
  }
}
class Tm extends ze {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Wi(Oi(this.node.current, "focus", () => this.onFocus()), Oi(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function lr(e, i, n) {
  const { props: a } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && a.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const t = "onTap" + (n === "End" ? "" : n), s = a[t];
  s && q.postRender(() => s(i, Hi(i)));
}
class Am extends ze {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = tl(i, (n, a) => (lr(this.node, a, "Start"), (t, { success: s }) => lr(this.node, t, s ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ma = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakMap(), Rm = (e) => {
  const i = Ma.get(e.target);
  i && i(e);
}, Em = (e) => {
  e.forEach(Rm);
};
function Bm({ root: e, ...i }) {
  const n = e || document;
  ia.has(n) || ia.set(n, {});
  const a = ia.get(n), t = JSON.stringify(i);
  return a[t] || (a[t] = new IntersectionObserver(Em, { root: e, ...i })), a[t];
}
function Dm(e, i, n) {
  const a = Bm(i);
  return Ma.set(e, n), a.observe(e), () => {
    Ma.delete(e), a.unobserve(e);
  };
}
const $m = {
  some: 0,
  all: 1
};
class Lm extends ze {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(), { root: n, margin: a, amount: t = "some", once: s } = i, r = {
      root: n ? n.current : void 0,
      rootMargin: a,
      threshold: typeof t == "number" ? t : $m[t]
    }, o = (f) => {
      const { isIntersecting: l } = f;
      if (this.isInView === l || (this.isInView = l, s && !l && this.hasEnteredView))
        return;
      l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
      const { onViewportEnter: d, onViewportLeave: u } = this.node.getProps(), c = l ? d : u;
      c && c(f);
    };
    return Dm(this.node.current, r, o);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: i, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Vm(i, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Vm({ viewport: e = {} }, { viewport: i = {} } = {}) {
  return (n) => e[n] !== i[n];
}
const zm = {
  inView: {
    Feature: Lm
  },
  tap: {
    Feature: Am
  },
  focus: {
    Feature: Tm
  },
  hover: {
    Feature: Mm
  }
}, Om = {
  layout: {
    ProjectionNode: Tf,
    MeasureLayout: _f
  }
}, Nm = (e, i) => wt(e) ? new Go(i) : new Zo(i, {
  allowProjection: e !== Br
}), Im = /* @__PURE__ */ m1({
  ...P1,
  ...zm,
  ...jm,
  ...Om
}, Nm), kn = /* @__PURE__ */ Uc(Im), qm = [
  {
    id: "people",
    emojis: [
      "grinning",
      "smiley",
      "smile",
      "grin",
      "laughing",
      "sweat_smile",
      "rolling_on_the_floor_laughing",
      "joy",
      "slightly_smiling_face",
      "upside_down_face",
      "melting_face",
      "wink",
      "blush",
      "innocent",
      "smiling_face_with_3_hearts",
      "heart_eyes",
      "star-struck",
      "kissing_heart",
      "kissing",
      "relaxed",
      "kissing_closed_eyes",
      "kissing_smiling_eyes",
      "smiling_face_with_tear",
      "yum",
      "stuck_out_tongue",
      "stuck_out_tongue_winking_eye",
      "zany_face",
      "stuck_out_tongue_closed_eyes",
      "money_mouth_face",
      "hugging_face",
      "face_with_hand_over_mouth",
      "face_with_open_eyes_and_hand_over_mouth",
      "face_with_peeking_eye",
      "shushing_face",
      "thinking_face",
      "saluting_face",
      "zipper_mouth_face",
      "face_with_raised_eyebrow",
      "neutral_face",
      "expressionless",
      "no_mouth",
      "dotted_line_face",
      "face_in_clouds",
      "smirk",
      "unamused",
      "face_with_rolling_eyes",
      "grimacing",
      "face_exhaling",
      "lying_face",
      "shaking_face",
      "relieved",
      "pensive",
      "sleepy",
      "drooling_face",
      "sleeping",
      "mask",
      "face_with_thermometer",
      "face_with_head_bandage",
      "nauseated_face",
      "face_vomiting",
      "sneezing_face",
      "hot_face",
      "cold_face",
      "woozy_face",
      "dizzy_face",
      "face_with_spiral_eyes",
      "exploding_head",
      "face_with_cowboy_hat",
      "partying_face",
      "disguised_face",
      "sunglasses",
      "nerd_face",
      "face_with_monocle",
      "confused",
      "face_with_diagonal_mouth",
      "worried",
      "slightly_frowning_face",
      "white_frowning_face",
      "open_mouth",
      "hushed",
      "astonished",
      "flushed",
      "pleading_face",
      "face_holding_back_tears",
      "frowning",
      "anguished",
      "fearful",
      "cold_sweat",
      "disappointed_relieved",
      "cry",
      "sob",
      "scream",
      "confounded",
      "persevere",
      "disappointed",
      "sweat",
      "weary",
      "tired_face",
      "yawning_face",
      "triumph",
      "rage",
      "angry",
      "face_with_symbols_on_mouth",
      "smiling_imp",
      "imp",
      "skull",
      "skull_and_crossbones",
      "hankey",
      "clown_face",
      "japanese_ogre",
      "japanese_goblin",
      "ghost",
      "alien",
      "space_invader",
      "wave",
      "raised_back_of_hand",
      "raised_hand_with_fingers_splayed",
      "hand",
      "spock-hand",
      "rightwards_hand",
      "leftwards_hand",
      "palm_down_hand",
      "palm_up_hand",
      "leftwards_pushing_hand",
      "rightwards_pushing_hand",
      "ok_hand",
      "pinched_fingers",
      "pinching_hand",
      "v",
      "crossed_fingers",
      "hand_with_index_finger_and_thumb_crossed",
      "i_love_you_hand_sign",
      "the_horns",
      "call_me_hand",
      "point_left",
      "point_right",
      "point_up_2",
      "middle_finger",
      "point_down",
      "point_up",
      "index_pointing_at_the_viewer",
      "+1",
      "-1",
      "fist",
      "facepunch",
      "left-facing_fist",
      "right-facing_fist",
      "clap",
      "raised_hands",
      "heart_hands",
      "open_hands",
      "palms_up_together",
      "handshake",
      "pray",
      "writing_hand",
      "nail_care",
      "selfie",
      "muscle",
      "mechanical_arm",
      "mechanical_leg",
      "leg",
      "foot",
      "ear",
      "ear_with_hearing_aid",
      "nose",
      "brain",
      "anatomical_heart",
      "lungs",
      "tooth",
      "bone",
      "eyes",
      "eye",
      "tongue",
      "lips",
      "biting_lip",
      "baby",
      "child",
      "boy",
      "girl",
      "adult",
      "person_with_blond_hair",
      "man",
      "bearded_person",
      "man_with_beard",
      "woman_with_beard",
      "red_haired_man",
      "curly_haired_man",
      "white_haired_man",
      "bald_man",
      "woman",
      "red_haired_woman",
      "red_haired_person",
      "curly_haired_woman",
      "curly_haired_person",
      "white_haired_woman",
      "white_haired_person",
      "bald_woman",
      "bald_person",
      "blond-haired-woman",
      "blond-haired-man",
      "older_adult",
      "older_man",
      "older_woman",
      "person_frowning",
      "man-frowning",
      "woman-frowning",
      "person_with_pouting_face",
      "man-pouting",
      "woman-pouting",
      "no_good",
      "man-gesturing-no",
      "woman-gesturing-no",
      "ok_woman",
      "man-gesturing-ok",
      "woman-gesturing-ok",
      "information_desk_person",
      "man-tipping-hand",
      "woman-tipping-hand",
      "raising_hand",
      "man-raising-hand",
      "woman-raising-hand",
      "deaf_person",
      "deaf_man",
      "deaf_woman",
      "bow",
      "man-bowing",
      "woman-bowing",
      "face_palm",
      "man-facepalming",
      "woman-facepalming",
      "shrug",
      "man-shrugging",
      "woman-shrugging",
      "health_worker",
      "male-doctor",
      "female-doctor",
      "student",
      "male-student",
      "female-student",
      "teacher",
      "male-teacher",
      "female-teacher",
      "judge",
      "male-judge",
      "female-judge",
      "farmer",
      "male-farmer",
      "female-farmer",
      "cook",
      "male-cook",
      "female-cook",
      "mechanic",
      "male-mechanic",
      "female-mechanic",
      "factory_worker",
      "male-factory-worker",
      "female-factory-worker",
      "office_worker",
      "male-office-worker",
      "female-office-worker",
      "scientist",
      "male-scientist",
      "female-scientist",
      "technologist",
      "male-technologist",
      "female-technologist",
      "singer",
      "male-singer",
      "female-singer",
      "artist",
      "male-artist",
      "female-artist",
      "pilot",
      "male-pilot",
      "female-pilot",
      "astronaut",
      "male-astronaut",
      "female-astronaut",
      "firefighter",
      "male-firefighter",
      "female-firefighter",
      "cop",
      "male-police-officer",
      "female-police-officer",
      "sleuth_or_spy",
      "male-detective",
      "female-detective",
      "guardsman",
      "male-guard",
      "female-guard",
      "ninja",
      "construction_worker",
      "male-construction-worker",
      "female-construction-worker",
      "person_with_crown",
      "prince",
      "princess",
      "man_with_turban",
      "man-wearing-turban",
      "woman-wearing-turban",
      "man_with_gua_pi_mao",
      "person_with_headscarf",
      "person_in_tuxedo",
      "man_in_tuxedo",
      "woman_in_tuxedo",
      "bride_with_veil",
      "man_with_veil",
      "woman_with_veil",
      "pregnant_woman",
      "pregnant_man",
      "pregnant_person",
      "breast-feeding",
      "woman_feeding_baby",
      "man_feeding_baby",
      "person_feeding_baby",
      "angel",
      "santa",
      "mrs_claus",
      "mx_claus",
      "superhero",
      "male_superhero",
      "female_superhero",
      "supervillain",
      "male_supervillain",
      "female_supervillain",
      "mage",
      "male_mage",
      "female_mage",
      "fairy",
      "male_fairy",
      "female_fairy",
      "vampire",
      "male_vampire",
      "female_vampire",
      "merperson",
      "merman",
      "mermaid",
      "elf",
      "male_elf",
      "female_elf",
      "genie",
      "male_genie",
      "female_genie",
      "zombie",
      "male_zombie",
      "female_zombie",
      "troll",
      "massage",
      "man-getting-massage",
      "woman-getting-massage",
      "haircut",
      "man-getting-haircut",
      "woman-getting-haircut",
      "walking",
      "man-walking",
      "woman-walking",
      "standing_person",
      "man_standing",
      "woman_standing",
      "kneeling_person",
      "man_kneeling",
      "woman_kneeling",
      "person_with_probing_cane",
      "man_with_probing_cane",
      "woman_with_probing_cane",
      "person_in_motorized_wheelchair",
      "man_in_motorized_wheelchair",
      "woman_in_motorized_wheelchair",
      "person_in_manual_wheelchair",
      "man_in_manual_wheelchair",
      "woman_in_manual_wheelchair",
      "runner",
      "man-running",
      "woman-running",
      "dancer",
      "man_dancing",
      "man_in_business_suit_levitating",
      "dancers",
      "men-with-bunny-ears-partying",
      "women-with-bunny-ears-partying",
      "person_in_steamy_room",
      "man_in_steamy_room",
      "woman_in_steamy_room",
      "person_climbing",
      "man_climbing",
      "woman_climbing",
      "fencer",
      "horse_racing",
      "skier",
      "snowboarder",
      "golfer",
      "man-golfing",
      "woman-golfing",
      "surfer",
      "man-surfing",
      "woman-surfing",
      "rowboat",
      "man-rowing-boat",
      "woman-rowing-boat",
      "swimmer",
      "man-swimming",
      "woman-swimming",
      "person_with_ball",
      "man-bouncing-ball",
      "woman-bouncing-ball",
      "weight_lifter",
      "man-lifting-weights",
      "woman-lifting-weights",
      "bicyclist",
      "man-biking",
      "woman-biking",
      "mountain_bicyclist",
      "man-mountain-biking",
      "woman-mountain-biking",
      "person_doing_cartwheel",
      "man-cartwheeling",
      "woman-cartwheeling",
      "wrestlers",
      "man-wrestling",
      "woman-wrestling",
      "water_polo",
      "man-playing-water-polo",
      "woman-playing-water-polo",
      "handball",
      "man-playing-handball",
      "woman-playing-handball",
      "juggling",
      "man-juggling",
      "woman-juggling",
      "person_in_lotus_position",
      "man_in_lotus_position",
      "woman_in_lotus_position",
      "bath",
      "sleeping_accommodation",
      "people_holding_hands",
      "two_women_holding_hands",
      "man_and_woman_holding_hands",
      "two_men_holding_hands",
      "couplekiss",
      "woman-kiss-man",
      "man-kiss-man",
      "woman-kiss-woman",
      "couple_with_heart",
      "woman-heart-man",
      "man-heart-man",
      "woman-heart-woman",
      "family",
      "man-woman-boy",
      "man-woman-girl",
      "man-woman-girl-boy",
      "man-woman-boy-boy",
      "man-woman-girl-girl",
      "man-man-boy",
      "man-man-girl",
      "man-man-girl-boy",
      "man-man-boy-boy",
      "man-man-girl-girl",
      "woman-woman-boy",
      "woman-woman-girl",
      "woman-woman-girl-boy",
      "woman-woman-boy-boy",
      "woman-woman-girl-girl",
      "man-boy",
      "man-boy-boy",
      "man-girl",
      "man-girl-boy",
      "man-girl-girl",
      "woman-boy",
      "woman-boy-boy",
      "woman-girl",
      "woman-girl-boy",
      "woman-girl-girl",
      "speaking_head_in_silhouette",
      "bust_in_silhouette",
      "busts_in_silhouette",
      "people_hugging",
      "footprints",
      "robot_face",
      "smiley_cat",
      "smile_cat",
      "joy_cat",
      "heart_eyes_cat",
      "smirk_cat",
      "kissing_cat",
      "scream_cat",
      "crying_cat_face",
      "pouting_cat",
      "see_no_evil",
      "hear_no_evil",
      "speak_no_evil",
      "love_letter",
      "cupid",
      "gift_heart",
      "sparkling_heart",
      "heartpulse",
      "heartbeat",
      "revolving_hearts",
      "two_hearts",
      "heart_decoration",
      "heavy_heart_exclamation_mark_ornament",
      "broken_heart",
      "heart_on_fire",
      "mending_heart",
      "heart",
      "pink_heart",
      "orange_heart",
      "yellow_heart",
      "green_heart",
      "blue_heart",
      "light_blue_heart",
      "purple_heart",
      "brown_heart",
      "black_heart",
      "grey_heart",
      "white_heart",
      "kiss",
      "100",
      "anger",
      "boom",
      "dizzy",
      "sweat_drops",
      "dash",
      "hole",
      "speech_balloon",
      "eye-in-speech-bubble",
      "left_speech_bubble",
      "right_anger_bubble",
      "thought_balloon",
      "zzz"
    ]
  },
  {
    id: "nature",
    emojis: [
      "monkey_face",
      "monkey",
      "gorilla",
      "orangutan",
      "dog",
      "dog2",
      "guide_dog",
      "service_dog",
      "poodle",
      "wolf",
      "fox_face",
      "raccoon",
      "cat",
      "cat2",
      "black_cat",
      "lion_face",
      "tiger",
      "tiger2",
      "leopard",
      "horse",
      "moose",
      "donkey",
      "racehorse",
      "unicorn_face",
      "zebra_face",
      "deer",
      "bison",
      "cow",
      "ox",
      "water_buffalo",
      "cow2",
      "pig",
      "pig2",
      "boar",
      "pig_nose",
      "ram",
      "sheep",
      "goat",
      "dromedary_camel",
      "camel",
      "llama",
      "giraffe_face",
      "elephant",
      "mammoth",
      "rhinoceros",
      "hippopotamus",
      "mouse",
      "mouse2",
      "rat",
      "hamster",
      "rabbit",
      "rabbit2",
      "chipmunk",
      "beaver",
      "hedgehog",
      "bat",
      "bear",
      "polar_bear",
      "koala",
      "panda_face",
      "sloth",
      "otter",
      "skunk",
      "kangaroo",
      "badger",
      "feet",
      "turkey",
      "chicken",
      "rooster",
      "hatching_chick",
      "baby_chick",
      "hatched_chick",
      "bird",
      "penguin",
      "dove_of_peace",
      "eagle",
      "duck",
      "swan",
      "owl",
      "dodo",
      "feather",
      "flamingo",
      "peacock",
      "parrot",
      "wing",
      "black_bird",
      "goose",
      "frog",
      "crocodile",
      "turtle",
      "lizard",
      "snake",
      "dragon_face",
      "dragon",
      "sauropod",
      "t-rex",
      "whale",
      "whale2",
      "dolphin",
      "seal",
      "fish",
      "tropical_fish",
      "blowfish",
      "shark",
      "octopus",
      "shell",
      "coral",
      "jellyfish",
      "snail",
      "butterfly",
      "bug",
      "ant",
      "bee",
      "beetle",
      "ladybug",
      "cricket",
      "cockroach",
      "spider",
      "spider_web",
      "scorpion",
      "mosquito",
      "fly",
      "worm",
      "microbe",
      "bouquet",
      "cherry_blossom",
      "white_flower",
      "lotus",
      "rosette",
      "rose",
      "wilted_flower",
      "hibiscus",
      "sunflower",
      "blossom",
      "tulip",
      "hyacinth",
      "seedling",
      "potted_plant",
      "evergreen_tree",
      "deciduous_tree",
      "palm_tree",
      "cactus",
      "ear_of_rice",
      "herb",
      "shamrock",
      "four_leaf_clover",
      "maple_leaf",
      "fallen_leaf",
      "leaves",
      "empty_nest",
      "nest_with_eggs",
      "mushroom"
    ]
  },
  {
    id: "foods",
    emojis: [
      "grapes",
      "melon",
      "watermelon",
      "tangerine",
      "lemon",
      "banana",
      "pineapple",
      "mango",
      "apple",
      "green_apple",
      "pear",
      "peach",
      "cherries",
      "strawberry",
      "blueberries",
      "kiwifruit",
      "tomato",
      "olive",
      "coconut",
      "avocado",
      "eggplant",
      "potato",
      "carrot",
      "corn",
      "hot_pepper",
      "bell_pepper",
      "cucumber",
      "leafy_green",
      "broccoli",
      "garlic",
      "onion",
      "peanuts",
      "beans",
      "chestnut",
      "ginger_root",
      "pea_pod",
      "bread",
      "croissant",
      "baguette_bread",
      "flatbread",
      "pretzel",
      "bagel",
      "pancakes",
      "waffle",
      "cheese_wedge",
      "meat_on_bone",
      "poultry_leg",
      "cut_of_meat",
      "bacon",
      "hamburger",
      "fries",
      "pizza",
      "hotdog",
      "sandwich",
      "taco",
      "burrito",
      "tamale",
      "stuffed_flatbread",
      "falafel",
      "egg",
      "fried_egg",
      "shallow_pan_of_food",
      "stew",
      "fondue",
      "bowl_with_spoon",
      "green_salad",
      "popcorn",
      "butter",
      "salt",
      "canned_food",
      "bento",
      "rice_cracker",
      "rice_ball",
      "rice",
      "curry",
      "ramen",
      "spaghetti",
      "sweet_potato",
      "oden",
      "sushi",
      "fried_shrimp",
      "fish_cake",
      "moon_cake",
      "dango",
      "dumpling",
      "fortune_cookie",
      "takeout_box",
      "crab",
      "lobster",
      "shrimp",
      "squid",
      "oyster",
      "icecream",
      "shaved_ice",
      "ice_cream",
      "doughnut",
      "cookie",
      "birthday",
      "cake",
      "cupcake",
      "pie",
      "chocolate_bar",
      "candy",
      "lollipop",
      "custard",
      "honey_pot",
      "baby_bottle",
      "glass_of_milk",
      "coffee",
      "teapot",
      "tea",
      "sake",
      "champagne",
      "wine_glass",
      "cocktail",
      "tropical_drink",
      "beer",
      "beers",
      "clinking_glasses",
      "tumbler_glass",
      "pouring_liquid",
      "cup_with_straw",
      "bubble_tea",
      "beverage_box",
      "mate_drink",
      "ice_cube",
      "chopsticks",
      "knife_fork_plate",
      "fork_and_knife",
      "spoon",
      "hocho",
      "jar",
      "amphora"
    ]
  },
  {
    id: "activity",
    emojis: [
      "jack_o_lantern",
      "christmas_tree",
      "fireworks",
      "sparkler",
      "firecracker",
      "sparkles",
      "balloon",
      "tada",
      "confetti_ball",
      "tanabata_tree",
      "bamboo",
      "dolls",
      "flags",
      "wind_chime",
      "rice_scene",
      "red_envelope",
      "ribbon",
      "gift",
      "reminder_ribbon",
      "admission_tickets",
      "ticket",
      "medal",
      "trophy",
      "sports_medal",
      "first_place_medal",
      "second_place_medal",
      "third_place_medal",
      "soccer",
      "baseball",
      "softball",
      "basketball",
      "volleyball",
      "football",
      "rugby_football",
      "tennis",
      "flying_disc",
      "bowling",
      "cricket_bat_and_ball",
      "field_hockey_stick_and_ball",
      "ice_hockey_stick_and_puck",
      "lacrosse",
      "table_tennis_paddle_and_ball",
      "badminton_racquet_and_shuttlecock",
      "boxing_glove",
      "martial_arts_uniform",
      "goal_net",
      "golf",
      "ice_skate",
      "fishing_pole_and_fish",
      "diving_mask",
      "running_shirt_with_sash",
      "ski",
      "sled",
      "curling_stone",
      "dart",
      "yo-yo",
      "kite",
      "gun",
      "8ball",
      "crystal_ball",
      "magic_wand",
      "video_game",
      "joystick",
      "slot_machine",
      "game_die",
      "jigsaw",
      "teddy_bear",
      "pinata",
      "mirror_ball",
      "nesting_dolls",
      "spades",
      "hearts",
      "diamonds",
      "clubs",
      "chess_pawn",
      "black_joker",
      "mahjong",
      "flower_playing_cards",
      "performing_arts",
      "frame_with_picture",
      "art",
      "thread",
      "sewing_needle",
      "yarn",
      "knot"
    ]
  },
  {
    id: "places",
    emojis: [
      "earth_africa",
      "earth_americas",
      "earth_asia",
      "globe_with_meridians",
      "world_map",
      "japan",
      "compass",
      "snow_capped_mountain",
      "mountain",
      "volcano",
      "mount_fuji",
      "camping",
      "beach_with_umbrella",
      "desert",
      "desert_island",
      "national_park",
      "stadium",
      "classical_building",
      "building_construction",
      "bricks",
      "rock",
      "wood",
      "hut",
      "house_buildings",
      "derelict_house_building",
      "house",
      "house_with_garden",
      "office",
      "post_office",
      "european_post_office",
      "hospital",
      "bank",
      "hotel",
      "love_hotel",
      "convenience_store",
      "school",
      "department_store",
      "factory",
      "japanese_castle",
      "european_castle",
      "wedding",
      "tokyo_tower",
      "statue_of_liberty",
      "church",
      "mosque",
      "hindu_temple",
      "synagogue",
      "shinto_shrine",
      "kaaba",
      "fountain",
      "tent",
      "foggy",
      "night_with_stars",
      "cityscape",
      "sunrise_over_mountains",
      "sunrise",
      "city_sunset",
      "city_sunrise",
      "bridge_at_night",
      "hotsprings",
      "carousel_horse",
      "playground_slide",
      "ferris_wheel",
      "roller_coaster",
      "barber",
      "circus_tent",
      "steam_locomotive",
      "railway_car",
      "bullettrain_side",
      "bullettrain_front",
      "train2",
      "metro",
      "light_rail",
      "station",
      "tram",
      "monorail",
      "mountain_railway",
      "train",
      "bus",
      "oncoming_bus",
      "trolleybus",
      "minibus",
      "ambulance",
      "fire_engine",
      "police_car",
      "oncoming_police_car",
      "taxi",
      "oncoming_taxi",
      "car",
      "oncoming_automobile",
      "blue_car",
      "pickup_truck",
      "truck",
      "articulated_lorry",
      "tractor",
      "racing_car",
      "racing_motorcycle",
      "motor_scooter",
      "manual_wheelchair",
      "motorized_wheelchair",
      "auto_rickshaw",
      "bike",
      "scooter",
      "skateboard",
      "roller_skate",
      "busstop",
      "motorway",
      "railway_track",
      "oil_drum",
      "fuelpump",
      "wheel",
      "rotating_light",
      "traffic_light",
      "vertical_traffic_light",
      "octagonal_sign",
      "construction",
      "anchor",
      "ring_buoy",
      "boat",
      "canoe",
      "speedboat",
      "passenger_ship",
      "ferry",
      "motor_boat",
      "ship",
      "airplane",
      "small_airplane",
      "airplane_departure",
      "airplane_arriving",
      "parachute",
      "seat",
      "helicopter",
      "suspension_railway",
      "mountain_cableway",
      "aerial_tramway",
      "satellite",
      "rocket",
      "flying_saucer",
      "bellhop_bell",
      "luggage",
      "hourglass",
      "hourglass_flowing_sand",
      "watch",
      "alarm_clock",
      "stopwatch",
      "timer_clock",
      "mantelpiece_clock",
      "clock12",
      "clock1230",
      "clock1",
      "clock130",
      "clock2",
      "clock230",
      "clock3",
      "clock330",
      "clock4",
      "clock430",
      "clock5",
      "clock530",
      "clock6",
      "clock630",
      "clock7",
      "clock730",
      "clock8",
      "clock830",
      "clock9",
      "clock930",
      "clock10",
      "clock1030",
      "clock11",
      "clock1130",
      "new_moon",
      "waxing_crescent_moon",
      "first_quarter_moon",
      "moon",
      "full_moon",
      "waning_gibbous_moon",
      "last_quarter_moon",
      "waning_crescent_moon",
      "crescent_moon",
      "new_moon_with_face",
      "first_quarter_moon_with_face",
      "last_quarter_moon_with_face",
      "thermometer",
      "sunny",
      "full_moon_with_face",
      "sun_with_face",
      "ringed_planet",
      "star",
      "star2",
      "stars",
      "milky_way",
      "cloud",
      "partly_sunny",
      "thunder_cloud_and_rain",
      "mostly_sunny",
      "barely_sunny",
      "partly_sunny_rain",
      "rain_cloud",
      "snow_cloud",
      "lightning",
      "tornado",
      "fog",
      "wind_blowing_face",
      "cyclone",
      "rainbow",
      "closed_umbrella",
      "umbrella",
      "umbrella_with_rain_drops",
      "umbrella_on_ground",
      "zap",
      "snowflake",
      "snowman",
      "snowman_without_snow",
      "comet",
      "fire",
      "droplet",
      "ocean"
    ]
  },
  {
    id: "objects",
    emojis: [
      "eyeglasses",
      "dark_sunglasses",
      "goggles",
      "lab_coat",
      "safety_vest",
      "necktie",
      "shirt",
      "jeans",
      "scarf",
      "gloves",
      "coat",
      "socks",
      "dress",
      "kimono",
      "sari",
      "one-piece_swimsuit",
      "briefs",
      "shorts",
      "bikini",
      "womans_clothes",
      "folding_hand_fan",
      "purse",
      "handbag",
      "pouch",
      "shopping_bags",
      "school_satchel",
      "thong_sandal",
      "mans_shoe",
      "athletic_shoe",
      "hiking_boot",
      "womans_flat_shoe",
      "high_heel",
      "sandal",
      "ballet_shoes",
      "boot",
      "hair_pick",
      "crown",
      "womans_hat",
      "tophat",
      "mortar_board",
      "billed_cap",
      "military_helmet",
      "helmet_with_white_cross",
      "prayer_beads",
      "lipstick",
      "ring",
      "gem",
      "mute",
      "speaker",
      "sound",
      "loud_sound",
      "loudspeaker",
      "mega",
      "postal_horn",
      "bell",
      "no_bell",
      "musical_score",
      "musical_note",
      "notes",
      "studio_microphone",
      "level_slider",
      "control_knobs",
      "microphone",
      "headphones",
      "radio",
      "saxophone",
      "accordion",
      "guitar",
      "musical_keyboard",
      "trumpet",
      "violin",
      "banjo",
      "drum_with_drumsticks",
      "long_drum",
      "maracas",
      "flute",
      "iphone",
      "calling",
      "phone",
      "telephone_receiver",
      "pager",
      "fax",
      "battery",
      "low_battery",
      "electric_plug",
      "computer",
      "desktop_computer",
      "printer",
      "keyboard",
      "three_button_mouse",
      "trackball",
      "minidisc",
      "floppy_disk",
      "cd",
      "dvd",
      "abacus",
      "movie_camera",
      "film_frames",
      "film_projector",
      "clapper",
      "tv",
      "camera",
      "camera_with_flash",
      "video_camera",
      "vhs",
      "mag",
      "mag_right",
      "candle",
      "bulb",
      "flashlight",
      "izakaya_lantern",
      "diya_lamp",
      "notebook_with_decorative_cover",
      "closed_book",
      "book",
      "green_book",
      "blue_book",
      "orange_book",
      "books",
      "notebook",
      "ledger",
      "page_with_curl",
      "scroll",
      "page_facing_up",
      "newspaper",
      "rolled_up_newspaper",
      "bookmark_tabs",
      "bookmark",
      "label",
      "moneybag",
      "coin",
      "yen",
      "dollar",
      "euro",
      "pound",
      "money_with_wings",
      "credit_card",
      "receipt",
      "chart",
      "email",
      "e-mail",
      "incoming_envelope",
      "envelope_with_arrow",
      "outbox_tray",
      "inbox_tray",
      "package",
      "mailbox",
      "mailbox_closed",
      "mailbox_with_mail",
      "mailbox_with_no_mail",
      "postbox",
      "ballot_box_with_ballot",
      "pencil2",
      "black_nib",
      "lower_left_fountain_pen",
      "lower_left_ballpoint_pen",
      "lower_left_paintbrush",
      "lower_left_crayon",
      "memo",
      "briefcase",
      "file_folder",
      "open_file_folder",
      "card_index_dividers",
      "date",
      "calendar",
      "spiral_note_pad",
      "spiral_calendar_pad",
      "card_index",
      "chart_with_upwards_trend",
      "chart_with_downwards_trend",
      "bar_chart",
      "clipboard",
      "pushpin",
      "round_pushpin",
      "paperclip",
      "linked_paperclips",
      "straight_ruler",
      "triangular_ruler",
      "scissors",
      "card_file_box",
      "file_cabinet",
      "wastebasket",
      "lock",
      "unlock",
      "lock_with_ink_pen",
      "closed_lock_with_key",
      "key",
      "old_key",
      "hammer",
      "axe",
      "pick",
      "hammer_and_pick",
      "hammer_and_wrench",
      "dagger_knife",
      "crossed_swords",
      "bomb",
      "boomerang",
      "bow_and_arrow",
      "shield",
      "carpentry_saw",
      "wrench",
      "screwdriver",
      "nut_and_bolt",
      "gear",
      "compression",
      "scales",
      "probing_cane",
      "link",
      "chains",
      "hook",
      "toolbox",
      "magnet",
      "ladder",
      "alembic",
      "test_tube",
      "petri_dish",
      "dna",
      "microscope",
      "telescope",
      "satellite_antenna",
      "syringe",
      "drop_of_blood",
      "pill",
      "adhesive_bandage",
      "crutch",
      "stethoscope",
      "x-ray",
      "door",
      "elevator",
      "mirror",
      "window",
      "bed",
      "couch_and_lamp",
      "chair",
      "toilet",
      "plunger",
      "shower",
      "bathtub",
      "mouse_trap",
      "razor",
      "lotion_bottle",
      "safety_pin",
      "broom",
      "basket",
      "roll_of_paper",
      "bucket",
      "soap",
      "bubbles",
      "toothbrush",
      "sponge",
      "fire_extinguisher",
      "shopping_trolley",
      "smoking",
      "coffin",
      "headstone",
      "funeral_urn",
      "nazar_amulet",
      "hamsa",
      "moyai",
      "placard",
      "identification_card"
    ]
  },
  {
    id: "symbols",
    emojis: [
      "atm",
      "put_litter_in_its_place",
      "potable_water",
      "wheelchair",
      "mens",
      "womens",
      "restroom",
      "baby_symbol",
      "wc",
      "passport_control",
      "customs",
      "baggage_claim",
      "left_luggage",
      "warning",
      "children_crossing",
      "no_entry",
      "no_entry_sign",
      "no_bicycles",
      "no_smoking",
      "do_not_litter",
      "non-potable_water",
      "no_pedestrians",
      "no_mobile_phones",
      "underage",
      "radioactive_sign",
      "biohazard_sign",
      "arrow_up",
      "arrow_upper_right",
      "arrow_right",
      "arrow_lower_right",
      "arrow_down",
      "arrow_lower_left",
      "arrow_left",
      "arrow_upper_left",
      "arrow_up_down",
      "left_right_arrow",
      "leftwards_arrow_with_hook",
      "arrow_right_hook",
      "arrow_heading_up",
      "arrow_heading_down",
      "arrows_clockwise",
      "arrows_counterclockwise",
      "back",
      "end",
      "on",
      "soon",
      "top",
      "place_of_worship",
      "atom_symbol",
      "om_symbol",
      "star_of_david",
      "wheel_of_dharma",
      "yin_yang",
      "latin_cross",
      "orthodox_cross",
      "star_and_crescent",
      "peace_symbol",
      "menorah_with_nine_branches",
      "six_pointed_star",
      "khanda",
      "aries",
      "taurus",
      "gemini",
      "cancer",
      "leo",
      "virgo",
      "libra",
      "scorpius",
      "sagittarius",
      "capricorn",
      "aquarius",
      "pisces",
      "ophiuchus",
      "twisted_rightwards_arrows",
      "repeat",
      "repeat_one",
      "arrow_forward",
      "fast_forward",
      "black_right_pointing_double_triangle_with_vertical_bar",
      "black_right_pointing_triangle_with_double_vertical_bar",
      "arrow_backward",
      "rewind",
      "black_left_pointing_double_triangle_with_vertical_bar",
      "arrow_up_small",
      "arrow_double_up",
      "arrow_down_small",
      "arrow_double_down",
      "double_vertical_bar",
      "black_square_for_stop",
      "black_circle_for_record",
      "eject",
      "cinema",
      "low_brightness",
      "high_brightness",
      "signal_strength",
      "wireless",
      "vibration_mode",
      "mobile_phone_off",
      "female_sign",
      "male_sign",
      "transgender_symbol",
      "heavy_multiplication_x",
      "heavy_plus_sign",
      "heavy_minus_sign",
      "heavy_division_sign",
      "heavy_equals_sign",
      "infinity",
      "bangbang",
      "interrobang",
      "question",
      "grey_question",
      "grey_exclamation",
      "exclamation",
      "wavy_dash",
      "currency_exchange",
      "heavy_dollar_sign",
      "medical_symbol",
      "recycle",
      "fleur_de_lis",
      "trident",
      "name_badge",
      "beginner",
      "o",
      "white_check_mark",
      "ballot_box_with_check",
      "heavy_check_mark",
      "x",
      "negative_squared_cross_mark",
      "curly_loop",
      "loop",
      "part_alternation_mark",
      "eight_spoked_asterisk",
      "eight_pointed_black_star",
      "sparkle",
      "copyright",
      "registered",
      "tm",
      "hash",
      "keycap_star",
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "keycap_ten",
      "capital_abcd",
      "abcd",
      "1234",
      "symbols",
      "abc",
      "a",
      "ab",
      "b",
      "cl",
      "cool",
      "free",
      "information_source",
      "id",
      "m",
      "new",
      "ng",
      "o2",
      "ok",
      "parking",
      "sos",
      "up",
      "vs",
      "koko",
      "sa",
      "u6708",
      "u6709",
      "u6307",
      "ideograph_advantage",
      "u5272",
      "u7121",
      "u7981",
      "accept",
      "u7533",
      "u5408",
      "u7a7a",
      "congratulations",
      "secret",
      "u55b6",
      "u6e80",
      "red_circle",
      "large_orange_circle",
      "large_yellow_circle",
      "large_green_circle",
      "large_blue_circle",
      "large_purple_circle",
      "large_brown_circle",
      "black_circle",
      "white_circle",
      "large_red_square",
      "large_orange_square",
      "large_yellow_square",
      "large_green_square",
      "large_blue_square",
      "large_purple_square",
      "large_brown_square",
      "black_large_square",
      "white_large_square",
      "black_medium_square",
      "white_medium_square",
      "black_medium_small_square",
      "white_medium_small_square",
      "black_small_square",
      "white_small_square",
      "large_orange_diamond",
      "large_blue_diamond",
      "small_orange_diamond",
      "small_blue_diamond",
      "small_red_triangle",
      "small_red_triangle_down",
      "diamond_shape_with_a_dot_inside",
      "radio_button",
      "white_square_button",
      "black_square_button"
    ]
  },
  {
    id: "flags",
    emojis: [
      "checkered_flag",
      "cn",
      "crossed_flags",
      "de",
      "es",
      "flag-ac",
      "flag-ad",
      "flag-ae",
      "flag-af",
      "flag-ag",
      "flag-ai",
      "flag-al",
      "flag-am",
      "flag-ao",
      "flag-aq",
      "flag-ar",
      "flag-as",
      "flag-at",
      "flag-au",
      "flag-aw",
      "flag-ax",
      "flag-az",
      "flag-ba",
      "flag-bb",
      "flag-bd",
      "flag-be",
      "flag-bf",
      "flag-bg",
      "flag-bh",
      "flag-bi",
      "flag-bj",
      "flag-bl",
      "flag-bm",
      "flag-bn",
      "flag-bo",
      "flag-bq",
      "flag-br",
      "flag-bs",
      "flag-bt",
      "flag-bv",
      "flag-bw",
      "flag-by",
      "flag-bz",
      "flag-ca",
      "flag-cc",
      "flag-cd",
      "flag-cf",
      "flag-cg",
      "flag-ch",
      "flag-ci",
      "flag-ck",
      "flag-cl",
      "flag-cm",
      "flag-co",
      "flag-cp",
      "flag-cr",
      "flag-cu",
      "flag-cv",
      "flag-cw",
      "flag-cx",
      "flag-cy",
      "flag-cz",
      "flag-dg",
      "flag-dj",
      "flag-dk",
      "flag-dm",
      "flag-do",
      "flag-dz",
      "flag-ea",
      "flag-ec",
      "flag-ee",
      "flag-eg",
      "flag-eh",
      "flag-england",
      "flag-er",
      "flag-et",
      "flag-eu",
      "flag-fi",
      "flag-fj",
      "flag-fk",
      "flag-fm",
      "flag-fo",
      "flag-ga",
      "flag-gd",
      "flag-ge",
      "flag-gf",
      "flag-gg",
      "flag-gh",
      "flag-gi",
      "flag-gl",
      "flag-gm",
      "flag-gn",
      "flag-gp",
      "flag-gq",
      "flag-gr",
      "flag-gs",
      "flag-gt",
      "flag-gu",
      "flag-gw",
      "flag-gy",
      "flag-hk",
      "flag-hm",
      "flag-hn",
      "flag-hr",
      "flag-ht",
      "flag-hu",
      "flag-ic",
      "flag-id",
      "flag-ie",
      "flag-il",
      "flag-im",
      "flag-in",
      "flag-io",
      "flag-iq",
      "flag-ir",
      "flag-is",
      "flag-je",
      "flag-jm",
      "flag-jo",
      "flag-ke",
      "flag-kg",
      "flag-kh",
      "flag-ki",
      "flag-km",
      "flag-kn",
      "flag-kp",
      "flag-kw",
      "flag-ky",
      "flag-kz",
      "flag-la",
      "flag-lb",
      "flag-lc",
      "flag-li",
      "flag-lk",
      "flag-lr",
      "flag-ls",
      "flag-lt",
      "flag-lu",
      "flag-lv",
      "flag-ly",
      "flag-ma",
      "flag-mc",
      "flag-md",
      "flag-me",
      "flag-mf",
      "flag-mg",
      "flag-mh",
      "flag-mk",
      "flag-ml",
      "flag-mm",
      "flag-mn",
      "flag-mo",
      "flag-mp",
      "flag-mq",
      "flag-mr",
      "flag-ms",
      "flag-mt",
      "flag-mu",
      "flag-mv",
      "flag-mw",
      "flag-mx",
      "flag-my",
      "flag-mz",
      "flag-na",
      "flag-nc",
      "flag-ne",
      "flag-nf",
      "flag-ng",
      "flag-ni",
      "flag-nl",
      "flag-no",
      "flag-np",
      "flag-nr",
      "flag-nu",
      "flag-nz",
      "flag-om",
      "flag-pa",
      "flag-pe",
      "flag-pf",
      "flag-pg",
      "flag-ph",
      "flag-pk",
      "flag-pl",
      "flag-pm",
      "flag-pn",
      "flag-pr",
      "flag-ps",
      "flag-pt",
      "flag-pw",
      "flag-py",
      "flag-qa",
      "flag-re",
      "flag-ro",
      "flag-rs",
      "flag-rw",
      "flag-sa",
      "flag-sb",
      "flag-sc",
      "flag-scotland",
      "flag-sd",
      "flag-se",
      "flag-sg",
      "flag-sh",
      "flag-si",
      "flag-sj",
      "flag-sk",
      "flag-sl",
      "flag-sm",
      "flag-sn",
      "flag-so",
      "flag-sr",
      "flag-ss",
      "flag-st",
      "flag-sv",
      "flag-sx",
      "flag-sy",
      "flag-sz",
      "flag-ta",
      "flag-tc",
      "flag-td",
      "flag-tf",
      "flag-tg",
      "flag-th",
      "flag-tj",
      "flag-tk",
      "flag-tl",
      "flag-tm",
      "flag-tn",
      "flag-to",
      "flag-tr",
      "flag-tt",
      "flag-tv",
      "flag-tw",
      "flag-tz",
      "flag-ua",
      "flag-ug",
      "flag-um",
      "flag-un",
      "flag-uy",
      "flag-uz",
      "flag-va",
      "flag-vc",
      "flag-ve",
      "flag-vg",
      "flag-vi",
      "flag-vn",
      "flag-vu",
      "flag-wales",
      "flag-wf",
      "flag-ws",
      "flag-xk",
      "flag-ye",
      "flag-yt",
      "flag-za",
      "flag-zm",
      "flag-zw",
      "fr",
      "gb",
      "it",
      "jp",
      "kr",
      "pirate_flag",
      "rainbow-flag",
      "ru",
      "transgender_flag",
      "triangular_flag_on_post",
      "us",
      "waving_black_flag",
      "waving_white_flag"
    ]
  }
], Wm = {
  100: {
    id: "100",
    name: "Hundred Points",
    keywords: [
      "100",
      "score",
      "perfect",
      "numbers",
      "century",
      "exam",
      "quiz",
      "test",
      "pass"
    ],
    skins: [
      {
        unified: "1f4af",
        native: "💯"
      }
    ],
    version: 1
  },
  1234: {
    id: "1234",
    name: "Input Numbers",
    keywords: [
      "1234",
      "blue",
      "square",
      "1",
      "2",
      "3",
      "4"
    ],
    skins: [
      {
        unified: "1f522",
        native: "🔢"
      }
    ],
    version: 1
  },
  grinning: {
    id: "grinning",
    name: "Grinning Face",
    emoticons: [
      ":D"
    ],
    keywords: [
      "smile",
      "happy",
      "joy",
      ":D",
      "grin"
    ],
    skins: [
      {
        unified: "1f600",
        native: "😀"
      }
    ],
    version: 1
  },
  smiley: {
    id: "smiley",
    name: "Grinning Face with Big Eyes",
    emoticons: [
      ":)",
      "=)",
      "=-)"
    ],
    keywords: [
      "smiley",
      "happy",
      "joy",
      "haha",
      ":D",
      ":)",
      "smile",
      "funny"
    ],
    skins: [
      {
        unified: "1f603",
        native: "😃"
      }
    ],
    version: 1
  },
  smile: {
    id: "smile",
    name: "Grinning Face with Smiling Eyes",
    emoticons: [
      ":)",
      "C:",
      "c:",
      ":D",
      ":-D"
    ],
    keywords: [
      "smile",
      "happy",
      "joy",
      "funny",
      "haha",
      "laugh",
      "like",
      ":D",
      ":)"
    ],
    skins: [
      {
        unified: "1f604",
        native: "😄"
      }
    ],
    version: 1
  },
  grin: {
    id: "grin",
    name: "Beaming Face with Smiling Eyes",
    keywords: [
      "grin",
      "happy",
      "smile",
      "joy",
      "kawaii"
    ],
    skins: [
      {
        unified: "1f601",
        native: "😁"
      }
    ],
    version: 1
  },
  laughing: {
    id: "laughing",
    name: "Grinning Squinting Face",
    emoticons: [
      ":>",
      ":->"
    ],
    keywords: [
      "laughing",
      "satisfied",
      "happy",
      "joy",
      "lol",
      "haha",
      "glad",
      "XD",
      "laugh"
    ],
    skins: [
      {
        unified: "1f606",
        native: "😆"
      }
    ],
    version: 1
  },
  sweat_smile: {
    id: "sweat_smile",
    name: "Grinning Face with Sweat",
    keywords: [
      "smile",
      "hot",
      "happy",
      "laugh",
      "relief"
    ],
    skins: [
      {
        unified: "1f605",
        native: "😅"
      }
    ],
    version: 1
  },
  rolling_on_the_floor_laughing: {
    id: "rolling_on_the_floor_laughing",
    name: "Rolling on the Floor Laughing",
    keywords: [
      "face",
      "lol",
      "haha",
      "rofl"
    ],
    skins: [
      {
        unified: "1f923",
        native: "🤣"
      }
    ],
    version: 3
  },
  joy: {
    id: "joy",
    name: "Face with Tears of Joy",
    keywords: [
      "cry",
      "weep",
      "happy",
      "happytears",
      "haha"
    ],
    skins: [
      {
        unified: "1f602",
        native: "😂"
      }
    ],
    version: 1
  },
  slightly_smiling_face: {
    id: "slightly_smiling_face",
    name: "Slightly Smiling Face",
    emoticons: [
      ":)",
      "(:",
      ":-)"
    ],
    keywords: [
      "smile"
    ],
    skins: [
      {
        unified: "1f642",
        native: "🙂"
      }
    ],
    version: 1
  },
  upside_down_face: {
    id: "upside_down_face",
    name: "Upside-Down Face",
    keywords: [
      "upside",
      "down",
      "flipped",
      "silly",
      "smile"
    ],
    skins: [
      {
        unified: "1f643",
        native: "🙃"
      }
    ],
    version: 1
  },
  melting_face: {
    id: "melting_face",
    name: "Melting Face",
    keywords: [
      "hot",
      "heat"
    ],
    skins: [
      {
        unified: "1fae0",
        native: "🫠"
      }
    ],
    version: 14
  },
  wink: {
    id: "wink",
    name: "Winking Face",
    emoticons: [
      ";)",
      ";-)"
    ],
    keywords: [
      "wink",
      "happy",
      "mischievous",
      "secret",
      ";)",
      "smile",
      "eye"
    ],
    skins: [
      {
        unified: "1f609",
        native: "😉"
      }
    ],
    version: 1
  },
  blush: {
    id: "blush",
    name: "Smiling Face with Smiling Eyes",
    emoticons: [
      ":)"
    ],
    keywords: [
      "blush",
      "smile",
      "happy",
      "flushed",
      "crush",
      "embarrassed",
      "shy",
      "joy"
    ],
    skins: [
      {
        unified: "1f60a",
        native: "😊"
      }
    ],
    version: 1
  },
  innocent: {
    id: "innocent",
    name: "Smiling Face with Halo",
    keywords: [
      "innocent",
      "angel",
      "heaven"
    ],
    skins: [
      {
        unified: "1f607",
        native: "😇"
      }
    ],
    version: 1
  },
  smiling_face_with_3_hearts: {
    id: "smiling_face_with_3_hearts",
    name: "Smiling Face with Hearts",
    keywords: [
      "3",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "crush",
      "adore"
    ],
    skins: [
      {
        unified: "1f970",
        native: "🥰"
      }
    ],
    version: 11
  },
  heart_eyes: {
    id: "heart_eyes",
    name: "Smiling Face with Heart-Eyes",
    keywords: [
      "heart",
      "eyes",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "crush"
    ],
    skins: [
      {
        unified: "1f60d",
        native: "😍"
      }
    ],
    version: 1
  },
  "star-struck": {
    id: "star-struck",
    name: "Star-Struck",
    keywords: [
      "star",
      "struck",
      "grinning",
      "face",
      "with",
      "eyes",
      "smile",
      "starry"
    ],
    skins: [
      {
        unified: "1f929",
        native: "🤩"
      }
    ],
    version: 5
  },
  kissing_heart: {
    id: "kissing_heart",
    name: "Face Blowing a Kiss",
    emoticons: [
      ":*",
      ":-*"
    ],
    keywords: [
      "kissing",
      "heart",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation"
    ],
    skins: [
      {
        unified: "1f618",
        native: "😘"
      }
    ],
    version: 1
  },
  kissing: {
    id: "kissing",
    name: "Kissing Face",
    keywords: [
      "love",
      "like",
      "3",
      "valentines",
      "infatuation",
      "kiss"
    ],
    skins: [
      {
        unified: "1f617",
        native: "😗"
      }
    ],
    version: 1
  },
  relaxed: {
    id: "relaxed",
    name: "Smiling Face",
    keywords: [
      "relaxed",
      "blush",
      "massage",
      "happiness"
    ],
    skins: [
      {
        unified: "263a-fe0f",
        native: "☺️"
      }
    ],
    version: 1
  },
  kissing_closed_eyes: {
    id: "kissing_closed_eyes",
    name: "Kissing Face with Closed Eyes",
    keywords: [
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "kiss"
    ],
    skins: [
      {
        unified: "1f61a",
        native: "😚"
      }
    ],
    version: 1
  },
  kissing_smiling_eyes: {
    id: "kissing_smiling_eyes",
    name: "Kissing Face with Smiling Eyes",
    keywords: [
      "affection",
      "valentines",
      "infatuation",
      "kiss"
    ],
    skins: [
      {
        unified: "1f619",
        native: "😙"
      }
    ],
    version: 1
  },
  smiling_face_with_tear: {
    id: "smiling_face_with_tear",
    name: "Smiling Face with Tear",
    keywords: [
      "sad",
      "cry",
      "pretend"
    ],
    skins: [
      {
        unified: "1f972",
        native: "🥲"
      }
    ],
    version: 13
  },
  yum: {
    id: "yum",
    name: "Face Savoring Food",
    keywords: [
      "yum",
      "happy",
      "joy",
      "tongue",
      "smile",
      "silly",
      "yummy",
      "nom",
      "delicious",
      "savouring"
    ],
    skins: [
      {
        unified: "1f60b",
        native: "😋"
      }
    ],
    version: 1
  },
  stuck_out_tongue: {
    id: "stuck_out_tongue",
    name: "Face with Tongue",
    emoticons: [
      ":p",
      ":-p",
      ":P",
      ":-P",
      ":b",
      ":-b"
    ],
    keywords: [
      "stuck",
      "out",
      "prank",
      "childish",
      "playful",
      "mischievous",
      "smile"
    ],
    skins: [
      {
        unified: "1f61b",
        native: "😛"
      }
    ],
    version: 1
  },
  stuck_out_tongue_winking_eye: {
    id: "stuck_out_tongue_winking_eye",
    name: "Winking Face with Tongue",
    emoticons: [
      ";p",
      ";-p",
      ";b",
      ";-b",
      ";P",
      ";-P"
    ],
    keywords: [
      "stuck",
      "out",
      "eye",
      "prank",
      "childish",
      "playful",
      "mischievous",
      "smile",
      "wink"
    ],
    skins: [
      {
        unified: "1f61c",
        native: "😜"
      }
    ],
    version: 1
  },
  zany_face: {
    id: "zany_face",
    name: "Zany Face",
    keywords: [
      "grinning",
      "with",
      "one",
      "large",
      "and",
      "small",
      "eye",
      "goofy",
      "crazy"
    ],
    skins: [
      {
        unified: "1f92a",
        native: "🤪"
      }
    ],
    version: 5
  },
  stuck_out_tongue_closed_eyes: {
    id: "stuck_out_tongue_closed_eyes",
    name: "Squinting Face with Tongue",
    keywords: [
      "stuck",
      "out",
      "closed",
      "eyes",
      "prank",
      "playful",
      "mischievous",
      "smile"
    ],
    skins: [
      {
        unified: "1f61d",
        native: "😝"
      }
    ],
    version: 1
  },
  money_mouth_face: {
    id: "money_mouth_face",
    name: "Money-Mouth Face",
    keywords: [
      "money",
      "mouth",
      "rich",
      "dollar"
    ],
    skins: [
      {
        unified: "1f911",
        native: "🤑"
      }
    ],
    version: 1
  },
  hugging_face: {
    id: "hugging_face",
    name: "Hugging Face",
    keywords: [
      "smile",
      "hug"
    ],
    skins: [
      {
        unified: "1f917",
        native: "🤗"
      }
    ],
    version: 1
  },
  face_with_hand_over_mouth: {
    id: "face_with_hand_over_mouth",
    name: "Face with Hand over Mouth",
    keywords: [
      "smiling",
      "eyes",
      "and",
      "covering",
      "whoops",
      "shock",
      "surprise"
    ],
    skins: [
      {
        unified: "1f92d",
        native: "🤭"
      }
    ],
    version: 5
  },
  face_with_open_eyes_and_hand_over_mouth: {
    id: "face_with_open_eyes_and_hand_over_mouth",
    name: "Face with Open Eyes and Hand over Mouth",
    keywords: [
      "silence",
      "secret",
      "shock",
      "surprise"
    ],
    skins: [
      {
        unified: "1fae2",
        native: "🫢"
      }
    ],
    version: 14
  },
  face_with_peeking_eye: {
    id: "face_with_peeking_eye",
    name: "Face with Peeking Eye",
    keywords: [
      "scared",
      "frightening",
      "embarrassing",
      "shy"
    ],
    skins: [
      {
        unified: "1fae3",
        native: "🫣"
      }
    ],
    version: 14
  },
  shushing_face: {
    id: "shushing_face",
    name: "Shushing Face",
    keywords: [
      "with",
      "finger",
      "covering",
      "closed",
      "lips",
      "quiet",
      "shhh"
    ],
    skins: [
      {
        unified: "1f92b",
        native: "🤫"
      }
    ],
    version: 5
  },
  thinking_face: {
    id: "thinking_face",
    name: "Thinking Face",
    keywords: [
      "hmmm",
      "think",
      "consider"
    ],
    skins: [
      {
        unified: "1f914",
        native: "🤔"
      }
    ],
    version: 1
  },
  saluting_face: {
    id: "saluting_face",
    name: "Saluting Face",
    keywords: [
      "respect",
      "salute"
    ],
    skins: [
      {
        unified: "1fae1",
        native: "🫡"
      }
    ],
    version: 14
  },
  zipper_mouth_face: {
    id: "zipper_mouth_face",
    name: "Zipper-Mouth Face",
    keywords: [
      "zipper",
      "mouth",
      "sealed",
      "secret"
    ],
    skins: [
      {
        unified: "1f910",
        native: "🤐"
      }
    ],
    version: 1
  },
  face_with_raised_eyebrow: {
    id: "face_with_raised_eyebrow",
    name: "Face with Raised Eyebrow",
    keywords: [
      "one",
      "distrust",
      "scepticism",
      "disapproval",
      "disbelief",
      "surprise"
    ],
    skins: [
      {
        unified: "1f928",
        native: "🤨"
      }
    ],
    version: 5
  },
  neutral_face: {
    id: "neutral_face",
    name: "Neutral Face",
    emoticons: [
      ":|",
      ":-|"
    ],
    keywords: [
      "indifference",
      "meh",
      ":",
      ""
    ],
    skins: [
      {
        unified: "1f610",
        native: "😐"
      }
    ],
    version: 1
  },
  expressionless: {
    id: "expressionless",
    name: "Expressionless Face",
    emoticons: [
      "-_-"
    ],
    keywords: [
      "indifferent",
      "-",
      "",
      "meh",
      "deadpan"
    ],
    skins: [
      {
        unified: "1f611",
        native: "😑"
      }
    ],
    version: 1
  },
  no_mouth: {
    id: "no_mouth",
    name: "Face Without Mouth",
    keywords: [
      "no",
      "hellokitty"
    ],
    skins: [
      {
        unified: "1f636",
        native: "😶"
      }
    ],
    version: 1
  },
  dotted_line_face: {
    id: "dotted_line_face",
    name: "Dotted Line Face",
    keywords: [
      "invisible",
      "lonely",
      "isolation",
      "depression"
    ],
    skins: [
      {
        unified: "1fae5",
        native: "🫥"
      }
    ],
    version: 14
  },
  face_in_clouds: {
    id: "face_in_clouds",
    name: "Face in Clouds",
    keywords: [
      "shower",
      "steam",
      "dream"
    ],
    skins: [
      {
        unified: "1f636-200d-1f32b-fe0f",
        native: "😶‍🌫️"
      }
    ],
    version: 13.1
  },
  smirk: {
    id: "smirk",
    name: "Smirking Face",
    keywords: [
      "smirk",
      "smile",
      "mean",
      "prank",
      "smug",
      "sarcasm"
    ],
    skins: [
      {
        unified: "1f60f",
        native: "😏"
      }
    ],
    version: 1
  },
  unamused: {
    id: "unamused",
    name: "Unamused Face",
    emoticons: [
      ":("
    ],
    keywords: [
      "indifference",
      "bored",
      "straight",
      "serious",
      "sarcasm",
      "unimpressed",
      "skeptical",
      "dubious",
      "side",
      "eye"
    ],
    skins: [
      {
        unified: "1f612",
        native: "😒"
      }
    ],
    version: 1
  },
  face_with_rolling_eyes: {
    id: "face_with_rolling_eyes",
    name: "Face with Rolling Eyes",
    keywords: [
      "eyeroll",
      "frustrated"
    ],
    skins: [
      {
        unified: "1f644",
        native: "🙄"
      }
    ],
    version: 1
  },
  grimacing: {
    id: "grimacing",
    name: "Grimacing Face",
    keywords: [
      "grimace",
      "teeth"
    ],
    skins: [
      {
        unified: "1f62c",
        native: "😬"
      }
    ],
    version: 1
  },
  face_exhaling: {
    id: "face_exhaling",
    name: "Face Exhaling",
    keywords: [
      "relieve",
      "relief",
      "tired",
      "sigh"
    ],
    skins: [
      {
        unified: "1f62e-200d-1f4a8",
        native: "😮‍💨"
      }
    ],
    version: 13.1
  },
  lying_face: {
    id: "lying_face",
    name: "Lying Face",
    keywords: [
      "lie",
      "pinocchio"
    ],
    skins: [
      {
        unified: "1f925",
        native: "🤥"
      }
    ],
    version: 3
  },
  shaking_face: {
    id: "shaking_face",
    name: "Shaking Face",
    keywords: [
      "dizzy",
      "shock",
      "blurry",
      "earthquake"
    ],
    skins: [
      {
        unified: "1fae8",
        native: "🫨"
      }
    ],
    version: 15
  },
  relieved: {
    id: "relieved",
    name: "Relieved Face",
    keywords: [
      "relaxed",
      "phew",
      "massage",
      "happiness"
    ],
    skins: [
      {
        unified: "1f60c",
        native: "😌"
      }
    ],
    version: 1
  },
  pensive: {
    id: "pensive",
    name: "Pensive Face",
    keywords: [
      "sad",
      "depressed",
      "upset"
    ],
    skins: [
      {
        unified: "1f614",
        native: "😔"
      }
    ],
    version: 1
  },
  sleepy: {
    id: "sleepy",
    name: "Sleepy Face",
    keywords: [
      "tired",
      "rest",
      "nap"
    ],
    skins: [
      {
        unified: "1f62a",
        native: "😪"
      }
    ],
    version: 1
  },
  drooling_face: {
    id: "drooling_face",
    name: "Drooling Face",
    keywords: [],
    skins: [
      {
        unified: "1f924",
        native: "🤤"
      }
    ],
    version: 3
  },
  sleeping: {
    id: "sleeping",
    name: "Sleeping Face",
    keywords: [
      "tired",
      "sleepy",
      "night",
      "zzz"
    ],
    skins: [
      {
        unified: "1f634",
        native: "😴"
      }
    ],
    version: 1
  },
  mask: {
    id: "mask",
    name: "Face with Medical Mask",
    keywords: [
      "sick",
      "ill",
      "disease",
      "covid"
    ],
    skins: [
      {
        unified: "1f637",
        native: "😷"
      }
    ],
    version: 1
  },
  face_with_thermometer: {
    id: "face_with_thermometer",
    name: "Face with Thermometer",
    keywords: [
      "sick",
      "temperature",
      "cold",
      "fever",
      "covid"
    ],
    skins: [
      {
        unified: "1f912",
        native: "🤒"
      }
    ],
    version: 1
  },
  face_with_head_bandage: {
    id: "face_with_head_bandage",
    name: "Face with Head-Bandage",
    keywords: [
      "head",
      "bandage",
      "injured",
      "clumsy",
      "hurt"
    ],
    skins: [
      {
        unified: "1f915",
        native: "🤕"
      }
    ],
    version: 1
  },
  nauseated_face: {
    id: "nauseated_face",
    name: "Nauseated Face",
    keywords: [
      "vomit",
      "gross",
      "green",
      "sick",
      "throw",
      "up",
      "ill"
    ],
    skins: [
      {
        unified: "1f922",
        native: "🤢"
      }
    ],
    version: 3
  },
  face_vomiting: {
    id: "face_vomiting",
    name: "Face Vomiting",
    keywords: [
      "with",
      "open",
      "mouth",
      "sick"
    ],
    skins: [
      {
        unified: "1f92e",
        native: "🤮"
      }
    ],
    version: 5
  },
  sneezing_face: {
    id: "sneezing_face",
    name: "Sneezing Face",
    keywords: [
      "gesundheit",
      "sneeze",
      "sick",
      "allergy"
    ],
    skins: [
      {
        unified: "1f927",
        native: "🤧"
      }
    ],
    version: 3
  },
  hot_face: {
    id: "hot_face",
    name: "Hot Face",
    keywords: [
      "feverish",
      "heat",
      "red",
      "sweating"
    ],
    skins: [
      {
        unified: "1f975",
        native: "🥵"
      }
    ],
    version: 11
  },
  cold_face: {
    id: "cold_face",
    name: "Cold Face",
    keywords: [
      "blue",
      "freezing",
      "frozen",
      "frostbite",
      "icicles"
    ],
    skins: [
      {
        unified: "1f976",
        native: "🥶"
      }
    ],
    version: 11
  },
  woozy_face: {
    id: "woozy_face",
    name: "Woozy Face",
    keywords: [
      "dizzy",
      "intoxicated",
      "tipsy",
      "wavy"
    ],
    skins: [
      {
        unified: "1f974",
        native: "🥴"
      }
    ],
    version: 11
  },
  dizzy_face: {
    id: "dizzy_face",
    name: "Dizzy Face",
    keywords: [
      "spent",
      "unconscious",
      "xox"
    ],
    skins: [
      {
        unified: "1f635",
        native: "😵"
      }
    ],
    version: 1
  },
  face_with_spiral_eyes: {
    id: "face_with_spiral_eyes",
    name: "Face with Spiral Eyes",
    keywords: [
      "sick",
      "ill",
      "confused",
      "nauseous",
      "nausea"
    ],
    skins: [
      {
        unified: "1f635-200d-1f4ab",
        native: "😵‍💫"
      }
    ],
    version: 13.1
  },
  exploding_head: {
    id: "exploding_head",
    name: "Exploding Head",
    keywords: [
      "shocked",
      "face",
      "with",
      "mind",
      "blown"
    ],
    skins: [
      {
        unified: "1f92f",
        native: "🤯"
      }
    ],
    version: 5
  },
  face_with_cowboy_hat: {
    id: "face_with_cowboy_hat",
    name: "Cowboy Hat Face",
    keywords: [
      "with",
      "cowgirl"
    ],
    skins: [
      {
        unified: "1f920",
        native: "🤠"
      }
    ],
    version: 3
  },
  partying_face: {
    id: "partying_face",
    name: "Partying Face",
    keywords: [
      "celebration",
      "woohoo"
    ],
    skins: [
      {
        unified: "1f973",
        native: "🥳"
      }
    ],
    version: 11
  },
  disguised_face: {
    id: "disguised_face",
    name: "Disguised Face",
    keywords: [
      "pretent",
      "brows",
      "glasses",
      "moustache"
    ],
    skins: [
      {
        unified: "1f978",
        native: "🥸"
      }
    ],
    version: 13
  },
  sunglasses: {
    id: "sunglasses",
    name: "Smiling Face with Sunglasses",
    emoticons: [
      "8)"
    ],
    keywords: [
      "cool",
      "smile",
      "summer",
      "beach",
      "sunglass"
    ],
    skins: [
      {
        unified: "1f60e",
        native: "😎"
      }
    ],
    version: 1
  },
  nerd_face: {
    id: "nerd_face",
    name: "Nerd Face",
    keywords: [
      "nerdy",
      "geek",
      "dork"
    ],
    skins: [
      {
        unified: "1f913",
        native: "🤓"
      }
    ],
    version: 1
  },
  face_with_monocle: {
    id: "face_with_monocle",
    name: "Face with Monocle",
    keywords: [
      "stuffy",
      "wealthy"
    ],
    skins: [
      {
        unified: "1f9d0",
        native: "🧐"
      }
    ],
    version: 5
  },
  confused: {
    id: "confused",
    name: "Confused Face",
    emoticons: [
      ":\\",
      ":-\\",
      ":/",
      ":-/"
    ],
    keywords: [
      "indifference",
      "huh",
      "weird",
      "hmmm",
      ":/"
    ],
    skins: [
      {
        unified: "1f615",
        native: "😕"
      }
    ],
    version: 1
  },
  face_with_diagonal_mouth: {
    id: "face_with_diagonal_mouth",
    name: "Face with Diagonal Mouth",
    keywords: [
      "skeptic",
      "confuse",
      "frustrated",
      "indifferent"
    ],
    skins: [
      {
        unified: "1fae4",
        native: "🫤"
      }
    ],
    version: 14
  },
  worried: {
    id: "worried",
    name: "Worried Face",
    keywords: [
      "concern",
      "nervous",
      ":("
    ],
    skins: [
      {
        unified: "1f61f",
        native: "😟"
      }
    ],
    version: 1
  },
  slightly_frowning_face: {
    id: "slightly_frowning_face",
    name: "Slightly Frowning Face",
    keywords: [
      "disappointed",
      "sad",
      "upset"
    ],
    skins: [
      {
        unified: "1f641",
        native: "🙁"
      }
    ],
    version: 1
  },
  white_frowning_face: {
    id: "white_frowning_face",
    name: "Frowning Face",
    keywords: [
      "white",
      "sad",
      "upset",
      "frown"
    ],
    skins: [
      {
        unified: "2639-fe0f",
        native: "☹️"
      }
    ],
    version: 1
  },
  open_mouth: {
    id: "open_mouth",
    name: "Face with Open Mouth",
    emoticons: [
      ":o",
      ":-o",
      ":O",
      ":-O"
    ],
    keywords: [
      "surprise",
      "impressed",
      "wow",
      "whoa",
      ":O"
    ],
    skins: [
      {
        unified: "1f62e",
        native: "😮"
      }
    ],
    version: 1
  },
  hushed: {
    id: "hushed",
    name: "Hushed Face",
    keywords: [
      "woo",
      "shh"
    ],
    skins: [
      {
        unified: "1f62f",
        native: "😯"
      }
    ],
    version: 1
  },
  astonished: {
    id: "astonished",
    name: "Astonished Face",
    keywords: [
      "xox",
      "surprised",
      "poisoned"
    ],
    skins: [
      {
        unified: "1f632",
        native: "😲"
      }
    ],
    version: 1
  },
  flushed: {
    id: "flushed",
    name: "Flushed Face",
    keywords: [
      "blush",
      "shy",
      "flattered"
    ],
    skins: [
      {
        unified: "1f633",
        native: "😳"
      }
    ],
    version: 1
  },
  pleading_face: {
    id: "pleading_face",
    name: "Pleading Face",
    keywords: [
      "begging",
      "mercy",
      "cry",
      "tears",
      "sad",
      "grievance"
    ],
    skins: [
      {
        unified: "1f97a",
        native: "🥺"
      }
    ],
    version: 11
  },
  face_holding_back_tears: {
    id: "face_holding_back_tears",
    name: "Face Holding Back Tears",
    keywords: [
      "touched",
      "gratitude",
      "cry"
    ],
    skins: [
      {
        unified: "1f979",
        native: "🥹"
      }
    ],
    version: 14
  },
  frowning: {
    id: "frowning",
    name: "Frowning Face with Open Mouth",
    keywords: [
      "aw",
      "what"
    ],
    skins: [
      {
        unified: "1f626",
        native: "😦"
      }
    ],
    version: 1
  },
  anguished: {
    id: "anguished",
    name: "Anguished Face",
    emoticons: [
      "D:"
    ],
    keywords: [
      "stunned",
      "nervous"
    ],
    skins: [
      {
        unified: "1f627",
        native: "😧"
      }
    ],
    version: 1
  },
  fearful: {
    id: "fearful",
    name: "Fearful Face",
    keywords: [
      "scared",
      "terrified",
      "nervous"
    ],
    skins: [
      {
        unified: "1f628",
        native: "😨"
      }
    ],
    version: 1
  },
  cold_sweat: {
    id: "cold_sweat",
    name: "Anxious Face with Sweat",
    keywords: [
      "cold",
      "nervous"
    ],
    skins: [
      {
        unified: "1f630",
        native: "😰"
      }
    ],
    version: 1
  },
  disappointed_relieved: {
    id: "disappointed_relieved",
    name: "Sad but Relieved Face",
    keywords: [
      "disappointed",
      "phew",
      "sweat",
      "nervous"
    ],
    skins: [
      {
        unified: "1f625",
        native: "😥"
      }
    ],
    version: 1
  },
  cry: {
    id: "cry",
    name: "Crying Face",
    emoticons: [
      ":'("
    ],
    keywords: [
      "cry",
      "tears",
      "sad",
      "depressed",
      "upset",
      ":'("
    ],
    skins: [
      {
        unified: "1f622",
        native: "😢"
      }
    ],
    version: 1
  },
  sob: {
    id: "sob",
    name: "Loudly Crying Face",
    emoticons: [
      ":'("
    ],
    keywords: [
      "sob",
      "cry",
      "tears",
      "sad",
      "upset",
      "depressed"
    ],
    skins: [
      {
        unified: "1f62d",
        native: "😭"
      }
    ],
    version: 1
  },
  scream: {
    id: "scream",
    name: "Face Screaming in Fear",
    keywords: [
      "scream",
      "munch",
      "scared",
      "omg"
    ],
    skins: [
      {
        unified: "1f631",
        native: "😱"
      }
    ],
    version: 1
  },
  confounded: {
    id: "confounded",
    name: "Confounded Face",
    keywords: [
      "confused",
      "sick",
      "unwell",
      "oops",
      ":S"
    ],
    skins: [
      {
        unified: "1f616",
        native: "😖"
      }
    ],
    version: 1
  },
  persevere: {
    id: "persevere",
    name: "Persevering Face",
    keywords: [
      "persevere",
      "sick",
      "no",
      "upset",
      "oops"
    ],
    skins: [
      {
        unified: "1f623",
        native: "😣"
      }
    ],
    version: 1
  },
  disappointed: {
    id: "disappointed",
    name: "Disappointed Face",
    emoticons: [
      "):",
      ":(",
      ":-("
    ],
    keywords: [
      "sad",
      "upset",
      "depressed",
      ":("
    ],
    skins: [
      {
        unified: "1f61e",
        native: "😞"
      }
    ],
    version: 1
  },
  sweat: {
    id: "sweat",
    name: "Face with Cold Sweat",
    keywords: [
      "downcast",
      "hot",
      "sad",
      "tired",
      "exercise"
    ],
    skins: [
      {
        unified: "1f613",
        native: "😓"
      }
    ],
    version: 1
  },
  weary: {
    id: "weary",
    name: "Weary Face",
    keywords: [
      "tired",
      "sleepy",
      "sad",
      "frustrated",
      "upset"
    ],
    skins: [
      {
        unified: "1f629",
        native: "😩"
      }
    ],
    version: 1
  },
  tired_face: {
    id: "tired_face",
    name: "Tired Face",
    keywords: [
      "sick",
      "whine",
      "upset",
      "frustrated"
    ],
    skins: [
      {
        unified: "1f62b",
        native: "😫"
      }
    ],
    version: 1
  },
  yawning_face: {
    id: "yawning_face",
    name: "Yawning Face",
    keywords: [
      "tired",
      "sleepy"
    ],
    skins: [
      {
        unified: "1f971",
        native: "🥱"
      }
    ],
    version: 12
  },
  triumph: {
    id: "triumph",
    name: "Face with Look of Triumph",
    keywords: [
      "steam",
      "from",
      "nose",
      "gas",
      "phew",
      "proud",
      "pride"
    ],
    skins: [
      {
        unified: "1f624",
        native: "😤"
      }
    ],
    version: 1
  },
  rage: {
    id: "rage",
    name: "Pouting Face",
    keywords: [
      "rage",
      "angry",
      "mad",
      "hate",
      "despise"
    ],
    skins: [
      {
        unified: "1f621",
        native: "😡"
      }
    ],
    version: 1
  },
  angry: {
    id: "angry",
    name: "Angry Face",
    emoticons: [
      ">:(",
      ">:-("
    ],
    keywords: [
      "mad",
      "annoyed",
      "frustrated"
    ],
    skins: [
      {
        unified: "1f620",
        native: "😠"
      }
    ],
    version: 1
  },
  face_with_symbols_on_mouth: {
    id: "face_with_symbols_on_mouth",
    name: "Face with Symbols on Mouth",
    keywords: [
      "serious",
      "covering",
      "swearing",
      "cursing",
      "cussing",
      "profanity",
      "expletive"
    ],
    skins: [
      {
        unified: "1f92c",
        native: "🤬"
      }
    ],
    version: 5
  },
  smiling_imp: {
    id: "smiling_imp",
    name: "Smiling Face with Horns",
    keywords: [
      "imp",
      "devil"
    ],
    skins: [
      {
        unified: "1f608",
        native: "😈"
      }
    ],
    version: 1
  },
  imp: {
    id: "imp",
    name: "Imp",
    keywords: [
      "angry",
      "face",
      "with",
      "horns",
      "devil"
    ],
    skins: [
      {
        unified: "1f47f",
        native: "👿"
      }
    ],
    version: 1
  },
  skull: {
    id: "skull",
    name: "Skull",
    keywords: [
      "dead",
      "skeleton",
      "creepy",
      "death"
    ],
    skins: [
      {
        unified: "1f480",
        native: "💀"
      }
    ],
    version: 1
  },
  skull_and_crossbones: {
    id: "skull_and_crossbones",
    name: "Skull and Crossbones",
    keywords: [
      "poison",
      "danger",
      "deadly",
      "scary",
      "death",
      "pirate",
      "evil"
    ],
    skins: [
      {
        unified: "2620-fe0f",
        native: "☠️"
      }
    ],
    version: 1
  },
  hankey: {
    id: "hankey",
    name: "Pile of Poo",
    keywords: [
      "hankey",
      "poop",
      "shit",
      "shitface",
      "fail",
      "turd"
    ],
    skins: [
      {
        unified: "1f4a9",
        native: "💩"
      }
    ],
    version: 1
  },
  clown_face: {
    id: "clown_face",
    name: "Clown Face",
    keywords: [],
    skins: [
      {
        unified: "1f921",
        native: "🤡"
      }
    ],
    version: 3
  },
  japanese_ogre: {
    id: "japanese_ogre",
    name: "Ogre",
    keywords: [
      "japanese",
      "monster",
      "red",
      "mask",
      "halloween",
      "scary",
      "creepy",
      "devil",
      "demon"
    ],
    skins: [
      {
        unified: "1f479",
        native: "👹"
      }
    ],
    version: 1
  },
  japanese_goblin: {
    id: "japanese_goblin",
    name: "Goblin",
    keywords: [
      "japanese",
      "red",
      "evil",
      "mask",
      "monster",
      "scary",
      "creepy"
    ],
    skins: [
      {
        unified: "1f47a",
        native: "👺"
      }
    ],
    version: 1
  },
  ghost: {
    id: "ghost",
    name: "Ghost",
    keywords: [
      "halloween",
      "spooky",
      "scary"
    ],
    skins: [
      {
        unified: "1f47b",
        native: "👻"
      }
    ],
    version: 1
  },
  alien: {
    id: "alien",
    name: "Alien",
    keywords: [
      "UFO",
      "paul",
      "weird",
      "outer",
      "space"
    ],
    skins: [
      {
        unified: "1f47d",
        native: "👽"
      }
    ],
    version: 1
  },
  space_invader: {
    id: "space_invader",
    name: "Alien Monster",
    keywords: [
      "space",
      "invader",
      "game",
      "arcade",
      "play"
    ],
    skins: [
      {
        unified: "1f47e",
        native: "👾"
      }
    ],
    version: 1
  },
  robot_face: {
    id: "robot_face",
    name: "Robot",
    keywords: [
      "face",
      "computer",
      "machine",
      "bot"
    ],
    skins: [
      {
        unified: "1f916",
        native: "🤖"
      }
    ],
    version: 1
  },
  smiley_cat: {
    id: "smiley_cat",
    name: "Grinning Cat",
    keywords: [
      "smiley",
      "animal",
      "cats",
      "happy",
      "smile"
    ],
    skins: [
      {
        unified: "1f63a",
        native: "😺"
      }
    ],
    version: 1
  },
  smile_cat: {
    id: "smile_cat",
    name: "Grinning Cat with Smiling Eyes",
    keywords: [
      "smile",
      "animal",
      "cats"
    ],
    skins: [
      {
        unified: "1f638",
        native: "😸"
      }
    ],
    version: 1
  },
  joy_cat: {
    id: "joy_cat",
    name: "Cat with Tears of Joy",
    keywords: [
      "animal",
      "cats",
      "haha",
      "happy"
    ],
    skins: [
      {
        unified: "1f639",
        native: "😹"
      }
    ],
    version: 1
  },
  heart_eyes_cat: {
    id: "heart_eyes_cat",
    name: "Smiling Cat with Heart-Eyes",
    keywords: [
      "heart",
      "eyes",
      "animal",
      "love",
      "like",
      "affection",
      "cats",
      "valentines"
    ],
    skins: [
      {
        unified: "1f63b",
        native: "😻"
      }
    ],
    version: 1
  },
  smirk_cat: {
    id: "smirk_cat",
    name: "Cat with Wry Smile",
    keywords: [
      "smirk",
      "animal",
      "cats"
    ],
    skins: [
      {
        unified: "1f63c",
        native: "😼"
      }
    ],
    version: 1
  },
  kissing_cat: {
    id: "kissing_cat",
    name: "Kissing Cat",
    keywords: [
      "animal",
      "cats",
      "kiss"
    ],
    skins: [
      {
        unified: "1f63d",
        native: "😽"
      }
    ],
    version: 1
  },
  scream_cat: {
    id: "scream_cat",
    name: "Weary Cat",
    keywords: [
      "scream",
      "animal",
      "cats",
      "munch",
      "scared"
    ],
    skins: [
      {
        unified: "1f640",
        native: "🙀"
      }
    ],
    version: 1
  },
  crying_cat_face: {
    id: "crying_cat_face",
    name: "Crying Cat",
    keywords: [
      "face",
      "animal",
      "tears",
      "weep",
      "sad",
      "cats",
      "upset",
      "cry"
    ],
    skins: [
      {
        unified: "1f63f",
        native: "😿"
      }
    ],
    version: 1
  },
  pouting_cat: {
    id: "pouting_cat",
    name: "Pouting Cat",
    keywords: [
      "animal",
      "cats"
    ],
    skins: [
      {
        unified: "1f63e",
        native: "😾"
      }
    ],
    version: 1
  },
  see_no_evil: {
    id: "see_no_evil",
    name: "See-No-Evil Monkey",
    keywords: [
      "see",
      "no",
      "evil",
      "animal",
      "nature",
      "haha"
    ],
    skins: [
      {
        unified: "1f648",
        native: "🙈"
      }
    ],
    version: 1
  },
  hear_no_evil: {
    id: "hear_no_evil",
    name: "Hear-No-Evil Monkey",
    keywords: [
      "hear",
      "no",
      "evil",
      "animal",
      "nature"
    ],
    skins: [
      {
        unified: "1f649",
        native: "🙉"
      }
    ],
    version: 1
  },
  speak_no_evil: {
    id: "speak_no_evil",
    name: "Speak-No-Evil Monkey",
    keywords: [
      "speak",
      "no",
      "evil",
      "animal",
      "nature",
      "omg"
    ],
    skins: [
      {
        unified: "1f64a",
        native: "🙊"
      }
    ],
    version: 1
  },
  love_letter: {
    id: "love_letter",
    name: "Love Letter",
    keywords: [
      "email",
      "like",
      "affection",
      "envelope",
      "valentines"
    ],
    skins: [
      {
        unified: "1f48c",
        native: "💌"
      }
    ],
    version: 1
  },
  cupid: {
    id: "cupid",
    name: "Heart with Arrow",
    keywords: [
      "cupid",
      "love",
      "like",
      "affection",
      "valentines"
    ],
    skins: [
      {
        unified: "1f498",
        native: "💘"
      }
    ],
    version: 1
  },
  gift_heart: {
    id: "gift_heart",
    name: "Heart with Ribbon",
    keywords: [
      "gift",
      "love",
      "valentines"
    ],
    skins: [
      {
        unified: "1f49d",
        native: "💝"
      }
    ],
    version: 1
  },
  sparkling_heart: {
    id: "sparkling_heart",
    name: "Sparkling Heart",
    keywords: [
      "love",
      "like",
      "affection",
      "valentines"
    ],
    skins: [
      {
        unified: "1f496",
        native: "💖"
      }
    ],
    version: 1
  },
  heartpulse: {
    id: "heartpulse",
    name: "Growing Heart",
    keywords: [
      "heartpulse",
      "like",
      "love",
      "affection",
      "valentines",
      "pink"
    ],
    skins: [
      {
        unified: "1f497",
        native: "💗"
      }
    ],
    version: 1
  },
  heartbeat: {
    id: "heartbeat",
    name: "Beating Heart",
    keywords: [
      "heartbeat",
      "love",
      "like",
      "affection",
      "valentines",
      "pink"
    ],
    skins: [
      {
        unified: "1f493",
        native: "💓"
      }
    ],
    version: 1
  },
  revolving_hearts: {
    id: "revolving_hearts",
    name: "Revolving Hearts",
    keywords: [
      "love",
      "like",
      "affection",
      "valentines"
    ],
    skins: [
      {
        unified: "1f49e",
        native: "💞"
      }
    ],
    version: 1
  },
  two_hearts: {
    id: "two_hearts",
    name: "Two Hearts",
    keywords: [
      "love",
      "like",
      "affection",
      "valentines",
      "heart"
    ],
    skins: [
      {
        unified: "1f495",
        native: "💕"
      }
    ],
    version: 1
  },
  heart_decoration: {
    id: "heart_decoration",
    name: "Heart Decoration",
    keywords: [
      "purple",
      "square",
      "love",
      "like"
    ],
    skins: [
      {
        unified: "1f49f",
        native: "💟"
      }
    ],
    version: 1
  },
  heavy_heart_exclamation_mark_ornament: {
    id: "heavy_heart_exclamation_mark_ornament",
    name: "Heart Exclamation",
    keywords: [
      "heavy",
      "mark",
      "ornament",
      "decoration",
      "love"
    ],
    skins: [
      {
        unified: "2763-fe0f",
        native: "❣️"
      }
    ],
    version: 1
  },
  broken_heart: {
    id: "broken_heart",
    name: "Broken Heart",
    emoticons: [
      "</3"
    ],
    keywords: [
      "sad",
      "sorry",
      "break",
      "heartbreak"
    ],
    skins: [
      {
        unified: "1f494",
        native: "💔"
      }
    ],
    version: 1
  },
  heart_on_fire: {
    id: "heart_on_fire",
    name: "Heart on Fire",
    keywords: [
      "passionate",
      "enthusiastic"
    ],
    skins: [
      {
        unified: "2764-fe0f-200d-1f525",
        native: "❤️‍🔥"
      }
    ],
    version: 13.1
  },
  mending_heart: {
    id: "mending_heart",
    name: "Mending Heart",
    keywords: [
      "broken",
      "bandage",
      "wounded"
    ],
    skins: [
      {
        unified: "2764-fe0f-200d-1fa79",
        native: "❤️‍🩹"
      }
    ],
    version: 13.1
  },
  heart: {
    id: "heart",
    name: "Red Heart",
    emoticons: [
      "<3"
    ],
    keywords: [
      "love",
      "like",
      "valentines"
    ],
    skins: [
      {
        unified: "2764-fe0f",
        native: "❤️"
      }
    ],
    version: 1
  },
  pink_heart: {
    id: "pink_heart",
    name: "Pink Heart",
    keywords: [
      "valentines"
    ],
    skins: [
      {
        unified: "1fa77",
        native: "🩷"
      }
    ],
    version: 15
  },
  orange_heart: {
    id: "orange_heart",
    name: "Orange Heart",
    keywords: [
      "love",
      "like",
      "affection",
      "valentines"
    ],
    skins: [
      {
        unified: "1f9e1",
        native: "🧡"
      }
    ],
    version: 5
  },
  yellow_heart: {
    id: "yellow_heart",
    name: "Yellow Heart",
    emoticons: [
      "<3"
    ],
    keywords: [
      "love",
      "like",
      "affection",
      "valentines"
    ],
    skins: [
      {
        unified: "1f49b",
        native: "💛"
      }
    ],
    version: 1
  },
  green_heart: {
    id: "green_heart",
    name: "Green Heart",
    emoticons: [
      "<3"
    ],
    keywords: [
      "love",
      "like",
      "affection",
      "valentines"
    ],
    skins: [
      {
        unified: "1f49a",
        native: "💚"
      }
    ],
    version: 1
  },
  blue_heart: {
    id: "blue_heart",
    name: "Blue Heart",
    emoticons: [
      "<3"
    ],
    keywords: [
      "love",
      "like",
      "affection",
      "valentines"
    ],
    skins: [
      {
        unified: "1f499",
        native: "💙"
      }
    ],
    version: 1
  },
  light_blue_heart: {
    id: "light_blue_heart",
    name: "Light Blue Heart",
    keywords: [
      "ice",
      "baby"
    ],
    skins: [
      {
        unified: "1fa75",
        native: "🩵"
      }
    ],
    version: 15
  },
  purple_heart: {
    id: "purple_heart",
    name: "Purple Heart",
    emoticons: [
      "<3"
    ],
    keywords: [
      "love",
      "like",
      "affection",
      "valentines"
    ],
    skins: [
      {
        unified: "1f49c",
        native: "💜"
      }
    ],
    version: 1
  },
  brown_heart: {
    id: "brown_heart",
    name: "Brown Heart",
    keywords: [
      "coffee"
    ],
    skins: [
      {
        unified: "1f90e",
        native: "🤎"
      }
    ],
    version: 12
  },
  black_heart: {
    id: "black_heart",
    name: "Black Heart",
    keywords: [
      "evil"
    ],
    skins: [
      {
        unified: "1f5a4",
        native: "🖤"
      }
    ],
    version: 3
  },
  grey_heart: {
    id: "grey_heart",
    name: "Grey Heart",
    keywords: [
      "silver",
      "monochrome"
    ],
    skins: [
      {
        unified: "1fa76",
        native: "🩶"
      }
    ],
    version: 15
  },
  white_heart: {
    id: "white_heart",
    name: "White Heart",
    keywords: [
      "pure"
    ],
    skins: [
      {
        unified: "1f90d",
        native: "🤍"
      }
    ],
    version: 12
  },
  kiss: {
    id: "kiss",
    name: "Kiss Mark",
    keywords: [
      "face",
      "lips",
      "love",
      "like",
      "affection",
      "valentines"
    ],
    skins: [
      {
        unified: "1f48b",
        native: "💋"
      }
    ],
    version: 1
  },
  anger: {
    id: "anger",
    name: "Anger Symbol",
    keywords: [
      "angry",
      "mad"
    ],
    skins: [
      {
        unified: "1f4a2",
        native: "💢"
      }
    ],
    version: 1
  },
  boom: {
    id: "boom",
    name: "Collision",
    keywords: [
      "boom",
      "bomb",
      "explode",
      "explosion",
      "blown"
    ],
    skins: [
      {
        unified: "1f4a5",
        native: "💥"
      }
    ],
    version: 1
  },
  dizzy: {
    id: "dizzy",
    name: "Dizzy",
    keywords: [
      "star",
      "sparkle",
      "shoot",
      "magic"
    ],
    skins: [
      {
        unified: "1f4ab",
        native: "💫"
      }
    ],
    version: 1
  },
  sweat_drops: {
    id: "sweat_drops",
    name: "Sweat Droplets",
    keywords: [
      "drops",
      "water",
      "drip",
      "oops"
    ],
    skins: [
      {
        unified: "1f4a6",
        native: "💦"
      }
    ],
    version: 1
  },
  dash: {
    id: "dash",
    name: "Dash Symbol",
    keywords: [
      "dashing",
      "away",
      "wind",
      "air",
      "fast",
      "shoo",
      "fart",
      "smoke",
      "puff"
    ],
    skins: [
      {
        unified: "1f4a8",
        native: "💨"
      }
    ],
    version: 1
  },
  hole: {
    id: "hole",
    name: "Hole",
    keywords: [
      "embarrassing"
    ],
    skins: [
      {
        unified: "1f573-fe0f",
        native: "🕳️"
      }
    ],
    version: 1
  },
  speech_balloon: {
    id: "speech_balloon",
    name: "Speech Balloon",
    keywords: [
      "bubble",
      "words",
      "message",
      "talk",
      "chatting"
    ],
    skins: [
      {
        unified: "1f4ac",
        native: "💬"
      }
    ],
    version: 1
  },
  "eye-in-speech-bubble": {
    id: "eye-in-speech-bubble",
    name: "Eye in Speech Bubble",
    keywords: [
      "in-speech-bubble",
      "info"
    ],
    skins: [
      {
        unified: "1f441-fe0f-200d-1f5e8-fe0f",
        native: "👁️‍🗨️"
      }
    ],
    version: 2
  },
  left_speech_bubble: {
    id: "left_speech_bubble",
    name: "Left Speech Bubble",
    keywords: [
      "words",
      "message",
      "talk",
      "chatting"
    ],
    skins: [
      {
        unified: "1f5e8-fe0f",
        native: "🗨️"
      }
    ],
    version: 2
  },
  right_anger_bubble: {
    id: "right_anger_bubble",
    name: "Right Anger Bubble",
    keywords: [
      "caption",
      "speech",
      "thinking",
      "mad"
    ],
    skins: [
      {
        unified: "1f5ef-fe0f",
        native: "🗯️"
      }
    ],
    version: 1
  },
  thought_balloon: {
    id: "thought_balloon",
    name: "Thought Balloon",
    keywords: [
      "bubble",
      "cloud",
      "speech",
      "thinking",
      "dream"
    ],
    skins: [
      {
        unified: "1f4ad",
        native: "💭"
      }
    ],
    version: 1
  },
  zzz: {
    id: "zzz",
    name: "Zzz",
    keywords: [
      "sleepy",
      "tired",
      "dream"
    ],
    skins: [
      {
        unified: "1f4a4",
        native: "💤"
      }
    ],
    version: 1
  },
  wave: {
    id: "wave",
    name: "Waving Hand",
    keywords: [
      "wave",
      "hands",
      "gesture",
      "goodbye",
      "solong",
      "farewell",
      "hello",
      "hi",
      "palm"
    ],
    skins: [
      {
        unified: "1f44b",
        native: "👋"
      },
      {
        unified: "1f44b-1f3fb",
        native: "👋🏻"
      },
      {
        unified: "1f44b-1f3fc",
        native: "👋🏼"
      },
      {
        unified: "1f44b-1f3fd",
        native: "👋🏽"
      },
      {
        unified: "1f44b-1f3fe",
        native: "👋🏾"
      },
      {
        unified: "1f44b-1f3ff",
        native: "👋🏿"
      }
    ],
    version: 1
  },
  raised_back_of_hand: {
    id: "raised_back_of_hand",
    name: "Raised Back of Hand",
    keywords: [
      "fingers",
      "backhand"
    ],
    skins: [
      {
        unified: "1f91a",
        native: "🤚"
      },
      {
        unified: "1f91a-1f3fb",
        native: "🤚🏻"
      },
      {
        unified: "1f91a-1f3fc",
        native: "🤚🏼"
      },
      {
        unified: "1f91a-1f3fd",
        native: "🤚🏽"
      },
      {
        unified: "1f91a-1f3fe",
        native: "🤚🏾"
      },
      {
        unified: "1f91a-1f3ff",
        native: "🤚🏿"
      }
    ],
    version: 3
  },
  raised_hand_with_fingers_splayed: {
    id: "raised_hand_with_fingers_splayed",
    name: "Hand with Fingers Splayed",
    keywords: [
      "raised",
      "palm"
    ],
    skins: [
      {
        unified: "1f590-fe0f",
        native: "🖐️"
      },
      {
        unified: "1f590-1f3fb",
        native: "🖐🏻"
      },
      {
        unified: "1f590-1f3fc",
        native: "🖐🏼"
      },
      {
        unified: "1f590-1f3fd",
        native: "🖐🏽"
      },
      {
        unified: "1f590-1f3fe",
        native: "🖐🏾"
      },
      {
        unified: "1f590-1f3ff",
        native: "🖐🏿"
      }
    ],
    version: 1
  },
  hand: {
    id: "hand",
    name: "Raised Hand",
    keywords: [
      "fingers",
      "stop",
      "highfive",
      "high",
      "five",
      "palm",
      "ban"
    ],
    skins: [
      {
        unified: "270b",
        native: "✋"
      },
      {
        unified: "270b-1f3fb",
        native: "✋🏻"
      },
      {
        unified: "270b-1f3fc",
        native: "✋🏼"
      },
      {
        unified: "270b-1f3fd",
        native: "✋🏽"
      },
      {
        unified: "270b-1f3fe",
        native: "✋🏾"
      },
      {
        unified: "270b-1f3ff",
        native: "✋🏿"
      }
    ],
    version: 1
  },
  "spock-hand": {
    id: "spock-hand",
    name: "Vulcan Salute",
    keywords: [
      "spock",
      "hand",
      "fingers",
      "star",
      "trek"
    ],
    skins: [
      {
        unified: "1f596",
        native: "🖖"
      },
      {
        unified: "1f596-1f3fb",
        native: "🖖🏻"
      },
      {
        unified: "1f596-1f3fc",
        native: "🖖🏼"
      },
      {
        unified: "1f596-1f3fd",
        native: "🖖🏽"
      },
      {
        unified: "1f596-1f3fe",
        native: "🖖🏾"
      },
      {
        unified: "1f596-1f3ff",
        native: "🖖🏿"
      }
    ],
    version: 1
  },
  rightwards_hand: {
    id: "rightwards_hand",
    name: "Rightwards Hand",
    keywords: [
      "palm",
      "offer"
    ],
    skins: [
      {
        unified: "1faf1",
        native: "🫱"
      },
      {
        unified: "1faf1-1f3fb",
        native: "🫱🏻"
      },
      {
        unified: "1faf1-1f3fc",
        native: "🫱🏼"
      },
      {
        unified: "1faf1-1f3fd",
        native: "🫱🏽"
      },
      {
        unified: "1faf1-1f3fe",
        native: "🫱🏾"
      },
      {
        unified: "1faf1-1f3ff",
        native: "🫱🏿"
      }
    ],
    version: 14
  },
  leftwards_hand: {
    id: "leftwards_hand",
    name: "Leftwards Hand",
    keywords: [
      "palm",
      "offer"
    ],
    skins: [
      {
        unified: "1faf2",
        native: "🫲"
      },
      {
        unified: "1faf2-1f3fb",
        native: "🫲🏻"
      },
      {
        unified: "1faf2-1f3fc",
        native: "🫲🏼"
      },
      {
        unified: "1faf2-1f3fd",
        native: "🫲🏽"
      },
      {
        unified: "1faf2-1f3fe",
        native: "🫲🏾"
      },
      {
        unified: "1faf2-1f3ff",
        native: "🫲🏿"
      }
    ],
    version: 14
  },
  palm_down_hand: {
    id: "palm_down_hand",
    name: "Palm Down Hand",
    keywords: [
      "drop"
    ],
    skins: [
      {
        unified: "1faf3",
        native: "🫳"
      },
      {
        unified: "1faf3-1f3fb",
        native: "🫳🏻"
      },
      {
        unified: "1faf3-1f3fc",
        native: "🫳🏼"
      },
      {
        unified: "1faf3-1f3fd",
        native: "🫳🏽"
      },
      {
        unified: "1faf3-1f3fe",
        native: "🫳🏾"
      },
      {
        unified: "1faf3-1f3ff",
        native: "🫳🏿"
      }
    ],
    version: 14
  },
  palm_up_hand: {
    id: "palm_up_hand",
    name: "Palm Up Hand",
    keywords: [
      "lift",
      "offer",
      "demand"
    ],
    skins: [
      {
        unified: "1faf4",
        native: "🫴"
      },
      {
        unified: "1faf4-1f3fb",
        native: "🫴🏻"
      },
      {
        unified: "1faf4-1f3fc",
        native: "🫴🏼"
      },
      {
        unified: "1faf4-1f3fd",
        native: "🫴🏽"
      },
      {
        unified: "1faf4-1f3fe",
        native: "🫴🏾"
      },
      {
        unified: "1faf4-1f3ff",
        native: "🫴🏿"
      }
    ],
    version: 14
  },
  leftwards_pushing_hand: {
    id: "leftwards_pushing_hand",
    name: "Leftwards Pushing Hand",
    keywords: [
      "highfive",
      "high",
      "five",
      "pressing",
      "stop"
    ],
    skins: [
      {
        unified: "1faf7",
        native: "🫷"
      },
      {
        unified: "1faf7-1f3fb",
        native: "🫷🏻"
      },
      {
        unified: "1faf7-1f3fc",
        native: "🫷🏼"
      },
      {
        unified: "1faf7-1f3fd",
        native: "🫷🏽"
      },
      {
        unified: "1faf7-1f3fe",
        native: "🫷🏾"
      },
      {
        unified: "1faf7-1f3ff",
        native: "🫷🏿"
      }
    ],
    version: 15
  },
  rightwards_pushing_hand: {
    id: "rightwards_pushing_hand",
    name: "Rightwards Pushing Hand",
    keywords: [
      "highfive",
      "high",
      "five",
      "pressing",
      "stop"
    ],
    skins: [
      {
        unified: "1faf8",
        native: "🫸"
      },
      {
        unified: "1faf8-1f3fb",
        native: "🫸🏻"
      },
      {
        unified: "1faf8-1f3fc",
        native: "🫸🏼"
      },
      {
        unified: "1faf8-1f3fd",
        native: "🫸🏽"
      },
      {
        unified: "1faf8-1f3fe",
        native: "🫸🏾"
      },
      {
        unified: "1faf8-1f3ff",
        native: "🫸🏿"
      }
    ],
    version: 15
  },
  ok_hand: {
    id: "ok_hand",
    name: "Ok Hand",
    keywords: [
      "fingers",
      "limbs",
      "perfect",
      "okay"
    ],
    skins: [
      {
        unified: "1f44c",
        native: "👌"
      },
      {
        unified: "1f44c-1f3fb",
        native: "👌🏻"
      },
      {
        unified: "1f44c-1f3fc",
        native: "👌🏼"
      },
      {
        unified: "1f44c-1f3fd",
        native: "👌🏽"
      },
      {
        unified: "1f44c-1f3fe",
        native: "👌🏾"
      },
      {
        unified: "1f44c-1f3ff",
        native: "👌🏿"
      }
    ],
    version: 1
  },
  pinched_fingers: {
    id: "pinched_fingers",
    name: "Pinched Fingers",
    keywords: [
      "size",
      "tiny",
      "small"
    ],
    skins: [
      {
        unified: "1f90c",
        native: "🤌"
      },
      {
        unified: "1f90c-1f3fb",
        native: "🤌🏻"
      },
      {
        unified: "1f90c-1f3fc",
        native: "🤌🏼"
      },
      {
        unified: "1f90c-1f3fd",
        native: "🤌🏽"
      },
      {
        unified: "1f90c-1f3fe",
        native: "🤌🏾"
      },
      {
        unified: "1f90c-1f3ff",
        native: "🤌🏿"
      }
    ],
    version: 13
  },
  pinching_hand: {
    id: "pinching_hand",
    name: "Pinching Hand",
    keywords: [
      "tiny",
      "small",
      "size"
    ],
    skins: [
      {
        unified: "1f90f",
        native: "🤏"
      },
      {
        unified: "1f90f-1f3fb",
        native: "🤏🏻"
      },
      {
        unified: "1f90f-1f3fc",
        native: "🤏🏼"
      },
      {
        unified: "1f90f-1f3fd",
        native: "🤏🏽"
      },
      {
        unified: "1f90f-1f3fe",
        native: "🤏🏾"
      },
      {
        unified: "1f90f-1f3ff",
        native: "🤏🏿"
      }
    ],
    version: 12
  },
  v: {
    id: "v",
    name: "Victory Hand",
    keywords: [
      "v",
      "fingers",
      "ohyeah",
      "peace",
      "two"
    ],
    skins: [
      {
        unified: "270c-fe0f",
        native: "✌️"
      },
      {
        unified: "270c-1f3fb",
        native: "✌🏻"
      },
      {
        unified: "270c-1f3fc",
        native: "✌🏼"
      },
      {
        unified: "270c-1f3fd",
        native: "✌🏽"
      },
      {
        unified: "270c-1f3fe",
        native: "✌🏾"
      },
      {
        unified: "270c-1f3ff",
        native: "✌🏿"
      }
    ],
    version: 1
  },
  crossed_fingers: {
    id: "crossed_fingers",
    name: "Crossed Fingers",
    keywords: [
      "hand",
      "with",
      "index",
      "and",
      "middle",
      "good",
      "lucky"
    ],
    skins: [
      {
        unified: "1f91e",
        native: "🤞"
      },
      {
        unified: "1f91e-1f3fb",
        native: "🤞🏻"
      },
      {
        unified: "1f91e-1f3fc",
        native: "🤞🏼"
      },
      {
        unified: "1f91e-1f3fd",
        native: "🤞🏽"
      },
      {
        unified: "1f91e-1f3fe",
        native: "🤞🏾"
      },
      {
        unified: "1f91e-1f3ff",
        native: "🤞🏿"
      }
    ],
    version: 3
  },
  hand_with_index_finger_and_thumb_crossed: {
    id: "hand_with_index_finger_and_thumb_crossed",
    name: "Hand with Index Finger and Thumb Crossed",
    keywords: [
      "heart",
      "love",
      "money",
      "expensive"
    ],
    skins: [
      {
        unified: "1faf0",
        native: "🫰"
      },
      {
        unified: "1faf0-1f3fb",
        native: "🫰🏻"
      },
      {
        unified: "1faf0-1f3fc",
        native: "🫰🏼"
      },
      {
        unified: "1faf0-1f3fd",
        native: "🫰🏽"
      },
      {
        unified: "1faf0-1f3fe",
        native: "🫰🏾"
      },
      {
        unified: "1faf0-1f3ff",
        native: "🫰🏿"
      }
    ],
    version: 14
  },
  i_love_you_hand_sign: {
    id: "i_love_you_hand_sign",
    name: "Love-You Gesture",
    keywords: [
      "i",
      "love",
      "you",
      "hand",
      "sign",
      "fingers"
    ],
    skins: [
      {
        unified: "1f91f",
        native: "🤟"
      },
      {
        unified: "1f91f-1f3fb",
        native: "🤟🏻"
      },
      {
        unified: "1f91f-1f3fc",
        native: "🤟🏼"
      },
      {
        unified: "1f91f-1f3fd",
        native: "🤟🏽"
      },
      {
        unified: "1f91f-1f3fe",
        native: "🤟🏾"
      },
      {
        unified: "1f91f-1f3ff",
        native: "🤟🏿"
      }
    ],
    version: 5
  },
  the_horns: {
    id: "the_horns",
    name: "Sign of the Horns",
    keywords: [
      "hand",
      "fingers",
      "evil",
      "eye",
      "rock",
      "on"
    ],
    skins: [
      {
        unified: "1f918",
        native: "🤘"
      },
      {
        unified: "1f918-1f3fb",
        native: "🤘🏻"
      },
      {
        unified: "1f918-1f3fc",
        native: "🤘🏼"
      },
      {
        unified: "1f918-1f3fd",
        native: "🤘🏽"
      },
      {
        unified: "1f918-1f3fe",
        native: "🤘🏾"
      },
      {
        unified: "1f918-1f3ff",
        native: "🤘🏿"
      }
    ],
    version: 1
  },
  call_me_hand: {
    id: "call_me_hand",
    name: "Call Me Hand",
    keywords: [
      "hands",
      "gesture",
      "shaka"
    ],
    skins: [
      {
        unified: "1f919",
        native: "🤙"
      },
      {
        unified: "1f919-1f3fb",
        native: "🤙🏻"
      },
      {
        unified: "1f919-1f3fc",
        native: "🤙🏼"
      },
      {
        unified: "1f919-1f3fd",
        native: "🤙🏽"
      },
      {
        unified: "1f919-1f3fe",
        native: "🤙🏾"
      },
      {
        unified: "1f919-1f3ff",
        native: "🤙🏿"
      }
    ],
    version: 3
  },
  point_left: {
    id: "point_left",
    name: "Backhand Index Pointing Left",
    keywords: [
      "point",
      "direction",
      "fingers",
      "hand"
    ],
    skins: [
      {
        unified: "1f448",
        native: "👈"
      },
      {
        unified: "1f448-1f3fb",
        native: "👈🏻"
      },
      {
        unified: "1f448-1f3fc",
        native: "👈🏼"
      },
      {
        unified: "1f448-1f3fd",
        native: "👈🏽"
      },
      {
        unified: "1f448-1f3fe",
        native: "👈🏾"
      },
      {
        unified: "1f448-1f3ff",
        native: "👈🏿"
      }
    ],
    version: 1
  },
  point_right: {
    id: "point_right",
    name: "Backhand Index Pointing Right",
    keywords: [
      "point",
      "fingers",
      "hand",
      "direction"
    ],
    skins: [
      {
        unified: "1f449",
        native: "👉"
      },
      {
        unified: "1f449-1f3fb",
        native: "👉🏻"
      },
      {
        unified: "1f449-1f3fc",
        native: "👉🏼"
      },
      {
        unified: "1f449-1f3fd",
        native: "👉🏽"
      },
      {
        unified: "1f449-1f3fe",
        native: "👉🏾"
      },
      {
        unified: "1f449-1f3ff",
        native: "👉🏿"
      }
    ],
    version: 1
  },
  point_up_2: {
    id: "point_up_2",
    name: "Backhand Index Pointing Up",
    keywords: [
      "point",
      "2",
      "fingers",
      "hand",
      "direction"
    ],
    skins: [
      {
        unified: "1f446",
        native: "👆"
      },
      {
        unified: "1f446-1f3fb",
        native: "👆🏻"
      },
      {
        unified: "1f446-1f3fc",
        native: "👆🏼"
      },
      {
        unified: "1f446-1f3fd",
        native: "👆🏽"
      },
      {
        unified: "1f446-1f3fe",
        native: "👆🏾"
      },
      {
        unified: "1f446-1f3ff",
        native: "👆🏿"
      }
    ],
    version: 1
  },
  middle_finger: {
    id: "middle_finger",
    name: "Middle Finger",
    keywords: [
      "reversed",
      "hand",
      "with",
      "extended",
      "fingers",
      "rude",
      "flipping"
    ],
    skins: [
      {
        unified: "1f595",
        native: "🖕"
      },
      {
        unified: "1f595-1f3fb",
        native: "🖕🏻"
      },
      {
        unified: "1f595-1f3fc",
        native: "🖕🏼"
      },
      {
        unified: "1f595-1f3fd",
        native: "🖕🏽"
      },
      {
        unified: "1f595-1f3fe",
        native: "🖕🏾"
      },
      {
        unified: "1f595-1f3ff",
        native: "🖕🏿"
      }
    ],
    version: 1
  },
  point_down: {
    id: "point_down",
    name: "Backhand Index Pointing Down",
    keywords: [
      "point",
      "fingers",
      "hand",
      "direction"
    ],
    skins: [
      {
        unified: "1f447",
        native: "👇"
      },
      {
        unified: "1f447-1f3fb",
        native: "👇🏻"
      },
      {
        unified: "1f447-1f3fc",
        native: "👇🏼"
      },
      {
        unified: "1f447-1f3fd",
        native: "👇🏽"
      },
      {
        unified: "1f447-1f3fe",
        native: "👇🏾"
      },
      {
        unified: "1f447-1f3ff",
        native: "👇🏿"
      }
    ],
    version: 1
  },
  point_up: {
    id: "point_up",
    name: "Index Pointing Up",
    keywords: [
      "point",
      "hand",
      "fingers",
      "direction"
    ],
    skins: [
      {
        unified: "261d-fe0f",
        native: "☝️"
      },
      {
        unified: "261d-1f3fb",
        native: "☝🏻"
      },
      {
        unified: "261d-1f3fc",
        native: "☝🏼"
      },
      {
        unified: "261d-1f3fd",
        native: "☝🏽"
      },
      {
        unified: "261d-1f3fe",
        native: "☝🏾"
      },
      {
        unified: "261d-1f3ff",
        native: "☝🏿"
      }
    ],
    version: 1
  },
  index_pointing_at_the_viewer: {
    id: "index_pointing_at_the_viewer",
    name: "Index Pointing at the Viewer",
    keywords: [
      "you",
      "recruit"
    ],
    skins: [
      {
        unified: "1faf5",
        native: "🫵"
      },
      {
        unified: "1faf5-1f3fb",
        native: "🫵🏻"
      },
      {
        unified: "1faf5-1f3fc",
        native: "🫵🏼"
      },
      {
        unified: "1faf5-1f3fd",
        native: "🫵🏽"
      },
      {
        unified: "1faf5-1f3fe",
        native: "🫵🏾"
      },
      {
        unified: "1faf5-1f3ff",
        native: "🫵🏿"
      }
    ],
    version: 14
  },
  "+1": {
    id: "+1",
    name: "Thumbs Up",
    keywords: [
      "+1",
      "thumbsup",
      "yes",
      "awesome",
      "good",
      "agree",
      "accept",
      "cool",
      "hand",
      "like"
    ],
    skins: [
      {
        unified: "1f44d",
        native: "👍"
      },
      {
        unified: "1f44d-1f3fb",
        native: "👍🏻"
      },
      {
        unified: "1f44d-1f3fc",
        native: "👍🏼"
      },
      {
        unified: "1f44d-1f3fd",
        native: "👍🏽"
      },
      {
        unified: "1f44d-1f3fe",
        native: "👍🏾"
      },
      {
        unified: "1f44d-1f3ff",
        native: "👍🏿"
      }
    ],
    version: 1
  },
  "-1": {
    id: "-1",
    name: "Thumbs Down",
    keywords: [
      "-1",
      "thumbsdown",
      "no",
      "dislike",
      "hand"
    ],
    skins: [
      {
        unified: "1f44e",
        native: "👎"
      },
      {
        unified: "1f44e-1f3fb",
        native: "👎🏻"
      },
      {
        unified: "1f44e-1f3fc",
        native: "👎🏼"
      },
      {
        unified: "1f44e-1f3fd",
        native: "👎🏽"
      },
      {
        unified: "1f44e-1f3fe",
        native: "👎🏾"
      },
      {
        unified: "1f44e-1f3ff",
        native: "👎🏿"
      }
    ],
    version: 1
  },
  fist: {
    id: "fist",
    name: "Raised Fist",
    keywords: [
      "fingers",
      "hand",
      "grasp"
    ],
    skins: [
      {
        unified: "270a",
        native: "✊"
      },
      {
        unified: "270a-1f3fb",
        native: "✊🏻"
      },
      {
        unified: "270a-1f3fc",
        native: "✊🏼"
      },
      {
        unified: "270a-1f3fd",
        native: "✊🏽"
      },
      {
        unified: "270a-1f3fe",
        native: "✊🏾"
      },
      {
        unified: "270a-1f3ff",
        native: "✊🏿"
      }
    ],
    version: 1
  },
  facepunch: {
    id: "facepunch",
    name: "Oncoming Fist",
    keywords: [
      "facepunch",
      "punch",
      "angry",
      "violence",
      "hit",
      "attack",
      "hand"
    ],
    skins: [
      {
        unified: "1f44a",
        native: "👊"
      },
      {
        unified: "1f44a-1f3fb",
        native: "👊🏻"
      },
      {
        unified: "1f44a-1f3fc",
        native: "👊🏼"
      },
      {
        unified: "1f44a-1f3fd",
        native: "👊🏽"
      },
      {
        unified: "1f44a-1f3fe",
        native: "👊🏾"
      },
      {
        unified: "1f44a-1f3ff",
        native: "👊🏿"
      }
    ],
    version: 1
  },
  "left-facing_fist": {
    id: "left-facing_fist",
    name: "Left-Facing Fist",
    keywords: [
      "left",
      "facing",
      "hand",
      "fistbump"
    ],
    skins: [
      {
        unified: "1f91b",
        native: "🤛"
      },
      {
        unified: "1f91b-1f3fb",
        native: "🤛🏻"
      },
      {
        unified: "1f91b-1f3fc",
        native: "🤛🏼"
      },
      {
        unified: "1f91b-1f3fd",
        native: "🤛🏽"
      },
      {
        unified: "1f91b-1f3fe",
        native: "🤛🏾"
      },
      {
        unified: "1f91b-1f3ff",
        native: "🤛🏿"
      }
    ],
    version: 3
  },
  "right-facing_fist": {
    id: "right-facing_fist",
    name: "Right-Facing Fist",
    keywords: [
      "right",
      "facing",
      "hand",
      "fistbump"
    ],
    skins: [
      {
        unified: "1f91c",
        native: "🤜"
      },
      {
        unified: "1f91c-1f3fb",
        native: "🤜🏻"
      },
      {
        unified: "1f91c-1f3fc",
        native: "🤜🏼"
      },
      {
        unified: "1f91c-1f3fd",
        native: "🤜🏽"
      },
      {
        unified: "1f91c-1f3fe",
        native: "🤜🏾"
      },
      {
        unified: "1f91c-1f3ff",
        native: "🤜🏿"
      }
    ],
    version: 3
  },
  clap: {
    id: "clap",
    name: "Clapping Hands",
    keywords: [
      "clap",
      "praise",
      "applause",
      "congrats",
      "yay"
    ],
    skins: [
      {
        unified: "1f44f",
        native: "👏"
      },
      {
        unified: "1f44f-1f3fb",
        native: "👏🏻"
      },
      {
        unified: "1f44f-1f3fc",
        native: "👏🏼"
      },
      {
        unified: "1f44f-1f3fd",
        native: "👏🏽"
      },
      {
        unified: "1f44f-1f3fe",
        native: "👏🏾"
      },
      {
        unified: "1f44f-1f3ff",
        native: "👏🏿"
      }
    ],
    version: 1
  },
  raised_hands: {
    id: "raised_hands",
    name: "Raising Hands",
    keywords: [
      "raised",
      "gesture",
      "hooray",
      "yea",
      "celebration"
    ],
    skins: [
      {
        unified: "1f64c",
        native: "🙌"
      },
      {
        unified: "1f64c-1f3fb",
        native: "🙌🏻"
      },
      {
        unified: "1f64c-1f3fc",
        native: "🙌🏼"
      },
      {
        unified: "1f64c-1f3fd",
        native: "🙌🏽"
      },
      {
        unified: "1f64c-1f3fe",
        native: "🙌🏾"
      },
      {
        unified: "1f64c-1f3ff",
        native: "🙌🏿"
      }
    ],
    version: 1
  },
  heart_hands: {
    id: "heart_hands",
    name: "Heart Hands",
    keywords: [
      "love",
      "appreciation",
      "support"
    ],
    skins: [
      {
        unified: "1faf6",
        native: "🫶"
      },
      {
        unified: "1faf6-1f3fb",
        native: "🫶🏻"
      },
      {
        unified: "1faf6-1f3fc",
        native: "🫶🏼"
      },
      {
        unified: "1faf6-1f3fd",
        native: "🫶🏽"
      },
      {
        unified: "1faf6-1f3fe",
        native: "🫶🏾"
      },
      {
        unified: "1faf6-1f3ff",
        native: "🫶🏿"
      }
    ],
    version: 14
  },
  open_hands: {
    id: "open_hands",
    name: "Open Hands",
    keywords: [
      "fingers",
      "butterfly"
    ],
    skins: [
      {
        unified: "1f450",
        native: "👐"
      },
      {
        unified: "1f450-1f3fb",
        native: "👐🏻"
      },
      {
        unified: "1f450-1f3fc",
        native: "👐🏼"
      },
      {
        unified: "1f450-1f3fd",
        native: "👐🏽"
      },
      {
        unified: "1f450-1f3fe",
        native: "👐🏾"
      },
      {
        unified: "1f450-1f3ff",
        native: "👐🏿"
      }
    ],
    version: 1
  },
  palms_up_together: {
    id: "palms_up_together",
    name: "Palms Up Together",
    keywords: [
      "hands",
      "gesture",
      "cupped",
      "prayer"
    ],
    skins: [
      {
        unified: "1f932",
        native: "🤲"
      },
      {
        unified: "1f932-1f3fb",
        native: "🤲🏻"
      },
      {
        unified: "1f932-1f3fc",
        native: "🤲🏼"
      },
      {
        unified: "1f932-1f3fd",
        native: "🤲🏽"
      },
      {
        unified: "1f932-1f3fe",
        native: "🤲🏾"
      },
      {
        unified: "1f932-1f3ff",
        native: "🤲🏿"
      }
    ],
    version: 5
  },
  handshake: {
    id: "handshake",
    name: "Handshake",
    keywords: [
      "agreement",
      "shake"
    ],
    skins: [
      {
        unified: "1f91d",
        native: "🤝"
      },
      {
        unified: "1f91d-1f3fb",
        native: "🤝🏻"
      },
      {
        unified: "1f91d-1f3fc",
        native: "🤝🏼"
      },
      {
        unified: "1f91d-1f3fd",
        native: "🤝🏽"
      },
      {
        unified: "1f91d-1f3fe",
        native: "🤝🏾"
      },
      {
        unified: "1f91d-1f3ff",
        native: "🤝🏿"
      }
    ],
    version: 3
  },
  pray: {
    id: "pray",
    name: "Folded Hands",
    keywords: [
      "pray",
      "please",
      "hope",
      "wish",
      "namaste",
      "highfive",
      "high",
      "five",
      "thank",
      "you",
      "thanks",
      "appreciate"
    ],
    skins: [
      {
        unified: "1f64f",
        native: "🙏"
      },
      {
        unified: "1f64f-1f3fb",
        native: "🙏🏻"
      },
      {
        unified: "1f64f-1f3fc",
        native: "🙏🏼"
      },
      {
        unified: "1f64f-1f3fd",
        native: "🙏🏽"
      },
      {
        unified: "1f64f-1f3fe",
        native: "🙏🏾"
      },
      {
        unified: "1f64f-1f3ff",
        native: "🙏🏿"
      }
    ],
    version: 1
  },
  writing_hand: {
    id: "writing_hand",
    name: "Writing Hand",
    keywords: [
      "lower",
      "left",
      "ballpoint",
      "pen",
      "stationery",
      "write",
      "compose"
    ],
    skins: [
      {
        unified: "270d-fe0f",
        native: "✍️"
      },
      {
        unified: "270d-1f3fb",
        native: "✍🏻"
      },
      {
        unified: "270d-1f3fc",
        native: "✍🏼"
      },
      {
        unified: "270d-1f3fd",
        native: "✍🏽"
      },
      {
        unified: "270d-1f3fe",
        native: "✍🏾"
      },
      {
        unified: "270d-1f3ff",
        native: "✍🏿"
      }
    ],
    version: 1
  },
  nail_care: {
    id: "nail_care",
    name: "Nail Polish",
    keywords: [
      "care",
      "beauty",
      "manicure",
      "finger",
      "fashion"
    ],
    skins: [
      {
        unified: "1f485",
        native: "💅"
      },
      {
        unified: "1f485-1f3fb",
        native: "💅🏻"
      },
      {
        unified: "1f485-1f3fc",
        native: "💅🏼"
      },
      {
        unified: "1f485-1f3fd",
        native: "💅🏽"
      },
      {
        unified: "1f485-1f3fe",
        native: "💅🏾"
      },
      {
        unified: "1f485-1f3ff",
        native: "💅🏿"
      }
    ],
    version: 1
  },
  selfie: {
    id: "selfie",
    name: "Selfie",
    keywords: [
      "camera",
      "phone"
    ],
    skins: [
      {
        unified: "1f933",
        native: "🤳"
      },
      {
        unified: "1f933-1f3fb",
        native: "🤳🏻"
      },
      {
        unified: "1f933-1f3fc",
        native: "🤳🏼"
      },
      {
        unified: "1f933-1f3fd",
        native: "🤳🏽"
      },
      {
        unified: "1f933-1f3fe",
        native: "🤳🏾"
      },
      {
        unified: "1f933-1f3ff",
        native: "🤳🏿"
      }
    ],
    version: 3
  },
  muscle: {
    id: "muscle",
    name: "Flexed Biceps",
    keywords: [
      "muscle",
      "arm",
      "flex",
      "hand",
      "summer",
      "strong"
    ],
    skins: [
      {
        unified: "1f4aa",
        native: "💪"
      },
      {
        unified: "1f4aa-1f3fb",
        native: "💪🏻"
      },
      {
        unified: "1f4aa-1f3fc",
        native: "💪🏼"
      },
      {
        unified: "1f4aa-1f3fd",
        native: "💪🏽"
      },
      {
        unified: "1f4aa-1f3fe",
        native: "💪🏾"
      },
      {
        unified: "1f4aa-1f3ff",
        native: "💪🏿"
      }
    ],
    version: 1
  },
  mechanical_arm: {
    id: "mechanical_arm",
    name: "Mechanical Arm",
    keywords: [
      "accessibility"
    ],
    skins: [
      {
        unified: "1f9be",
        native: "🦾"
      }
    ],
    version: 12
  },
  mechanical_leg: {
    id: "mechanical_leg",
    name: "Mechanical Leg",
    keywords: [
      "accessibility"
    ],
    skins: [
      {
        unified: "1f9bf",
        native: "🦿"
      }
    ],
    version: 12
  },
  leg: {
    id: "leg",
    name: "Leg",
    keywords: [
      "kick",
      "limb"
    ],
    skins: [
      {
        unified: "1f9b5",
        native: "🦵"
      },
      {
        unified: "1f9b5-1f3fb",
        native: "🦵🏻"
      },
      {
        unified: "1f9b5-1f3fc",
        native: "🦵🏼"
      },
      {
        unified: "1f9b5-1f3fd",
        native: "🦵🏽"
      },
      {
        unified: "1f9b5-1f3fe",
        native: "🦵🏾"
      },
      {
        unified: "1f9b5-1f3ff",
        native: "🦵🏿"
      }
    ],
    version: 11
  },
  foot: {
    id: "foot",
    name: "Foot",
    keywords: [
      "kick",
      "stomp"
    ],
    skins: [
      {
        unified: "1f9b6",
        native: "🦶"
      },
      {
        unified: "1f9b6-1f3fb",
        native: "🦶🏻"
      },
      {
        unified: "1f9b6-1f3fc",
        native: "🦶🏼"
      },
      {
        unified: "1f9b6-1f3fd",
        native: "🦶🏽"
      },
      {
        unified: "1f9b6-1f3fe",
        native: "🦶🏾"
      },
      {
        unified: "1f9b6-1f3ff",
        native: "🦶🏿"
      }
    ],
    version: 11
  },
  ear: {
    id: "ear",
    name: "Ear",
    keywords: [
      "face",
      "hear",
      "sound",
      "listen"
    ],
    skins: [
      {
        unified: "1f442",
        native: "👂"
      },
      {
        unified: "1f442-1f3fb",
        native: "👂🏻"
      },
      {
        unified: "1f442-1f3fc",
        native: "👂🏼"
      },
      {
        unified: "1f442-1f3fd",
        native: "👂🏽"
      },
      {
        unified: "1f442-1f3fe",
        native: "👂🏾"
      },
      {
        unified: "1f442-1f3ff",
        native: "👂🏿"
      }
    ],
    version: 1
  },
  ear_with_hearing_aid: {
    id: "ear_with_hearing_aid",
    name: "Ear with Hearing Aid",
    keywords: [
      "accessibility"
    ],
    skins: [
      {
        unified: "1f9bb",
        native: "🦻"
      },
      {
        unified: "1f9bb-1f3fb",
        native: "🦻🏻"
      },
      {
        unified: "1f9bb-1f3fc",
        native: "🦻🏼"
      },
      {
        unified: "1f9bb-1f3fd",
        native: "🦻🏽"
      },
      {
        unified: "1f9bb-1f3fe",
        native: "🦻🏾"
      },
      {
        unified: "1f9bb-1f3ff",
        native: "🦻🏿"
      }
    ],
    version: 12
  },
  nose: {
    id: "nose",
    name: "Nose",
    keywords: [
      "smell",
      "sniff"
    ],
    skins: [
      {
        unified: "1f443",
        native: "👃"
      },
      {
        unified: "1f443-1f3fb",
        native: "👃🏻"
      },
      {
        unified: "1f443-1f3fc",
        native: "👃🏼"
      },
      {
        unified: "1f443-1f3fd",
        native: "👃🏽"
      },
      {
        unified: "1f443-1f3fe",
        native: "👃🏾"
      },
      {
        unified: "1f443-1f3ff",
        native: "👃🏿"
      }
    ],
    version: 1
  },
  brain: {
    id: "brain",
    name: "Brain",
    keywords: [
      "smart",
      "intelligent"
    ],
    skins: [
      {
        unified: "1f9e0",
        native: "🧠"
      }
    ],
    version: 5
  },
  anatomical_heart: {
    id: "anatomical_heart",
    name: "Anatomical Heart",
    keywords: [
      "health",
      "heartbeat"
    ],
    skins: [
      {
        unified: "1fac0",
        native: "🫀"
      }
    ],
    version: 13
  },
  lungs: {
    id: "lungs",
    name: "Lungs",
    keywords: [
      "breathe"
    ],
    skins: [
      {
        unified: "1fac1",
        native: "🫁"
      }
    ],
    version: 13
  },
  tooth: {
    id: "tooth",
    name: "Tooth",
    keywords: [
      "teeth",
      "dentist"
    ],
    skins: [
      {
        unified: "1f9b7",
        native: "🦷"
      }
    ],
    version: 11
  },
  bone: {
    id: "bone",
    name: "Bone",
    keywords: [
      "skeleton"
    ],
    skins: [
      {
        unified: "1f9b4",
        native: "🦴"
      }
    ],
    version: 11
  },
  eyes: {
    id: "eyes",
    name: "Eyes",
    keywords: [
      "look",
      "watch",
      "stalk",
      "peek",
      "see"
    ],
    skins: [
      {
        unified: "1f440",
        native: "👀"
      }
    ],
    version: 1
  },
  eye: {
    id: "eye",
    name: "Eye",
    keywords: [
      "face",
      "look",
      "see",
      "watch",
      "stare"
    ],
    skins: [
      {
        unified: "1f441-fe0f",
        native: "👁️"
      }
    ],
    version: 1
  },
  tongue: {
    id: "tongue",
    name: "Tongue",
    keywords: [
      "mouth",
      "playful"
    ],
    skins: [
      {
        unified: "1f445",
        native: "👅"
      }
    ],
    version: 1
  },
  lips: {
    id: "lips",
    name: "Mouth",
    keywords: [
      "lips",
      "kiss"
    ],
    skins: [
      {
        unified: "1f444",
        native: "👄"
      }
    ],
    version: 1
  },
  biting_lip: {
    id: "biting_lip",
    name: "Biting Lip",
    keywords: [
      "flirt",
      "sexy",
      "pain",
      "worry"
    ],
    skins: [
      {
        unified: "1fae6",
        native: "🫦"
      }
    ],
    version: 14
  },
  baby: {
    id: "baby",
    name: "Baby",
    keywords: [
      "child",
      "boy",
      "girl",
      "toddler"
    ],
    skins: [
      {
        unified: "1f476",
        native: "👶"
      },
      {
        unified: "1f476-1f3fb",
        native: "👶🏻"
      },
      {
        unified: "1f476-1f3fc",
        native: "👶🏼"
      },
      {
        unified: "1f476-1f3fd",
        native: "👶🏽"
      },
      {
        unified: "1f476-1f3fe",
        native: "👶🏾"
      },
      {
        unified: "1f476-1f3ff",
        native: "👶🏿"
      }
    ],
    version: 1
  },
  child: {
    id: "child",
    name: "Child",
    keywords: [
      "gender",
      "neutral",
      "young"
    ],
    skins: [
      {
        unified: "1f9d2",
        native: "🧒"
      },
      {
        unified: "1f9d2-1f3fb",
        native: "🧒🏻"
      },
      {
        unified: "1f9d2-1f3fc",
        native: "🧒🏼"
      },
      {
        unified: "1f9d2-1f3fd",
        native: "🧒🏽"
      },
      {
        unified: "1f9d2-1f3fe",
        native: "🧒🏾"
      },
      {
        unified: "1f9d2-1f3ff",
        native: "🧒🏿"
      }
    ],
    version: 5
  },
  boy: {
    id: "boy",
    name: "Boy",
    keywords: [
      "man",
      "male",
      "guy",
      "teenager"
    ],
    skins: [
      {
        unified: "1f466",
        native: "👦"
      },
      {
        unified: "1f466-1f3fb",
        native: "👦🏻"
      },
      {
        unified: "1f466-1f3fc",
        native: "👦🏼"
      },
      {
        unified: "1f466-1f3fd",
        native: "👦🏽"
      },
      {
        unified: "1f466-1f3fe",
        native: "👦🏾"
      },
      {
        unified: "1f466-1f3ff",
        native: "👦🏿"
      }
    ],
    version: 1
  },
  girl: {
    id: "girl",
    name: "Girl",
    keywords: [
      "female",
      "woman",
      "teenager"
    ],
    skins: [
      {
        unified: "1f467",
        native: "👧"
      },
      {
        unified: "1f467-1f3fb",
        native: "👧🏻"
      },
      {
        unified: "1f467-1f3fc",
        native: "👧🏼"
      },
      {
        unified: "1f467-1f3fd",
        native: "👧🏽"
      },
      {
        unified: "1f467-1f3fe",
        native: "👧🏾"
      },
      {
        unified: "1f467-1f3ff",
        native: "👧🏿"
      }
    ],
    version: 1
  },
  adult: {
    id: "adult",
    name: "Adult",
    keywords: [
      "person",
      "gender",
      "neutral"
    ],
    skins: [
      {
        unified: "1f9d1",
        native: "🧑"
      },
      {
        unified: "1f9d1-1f3fb",
        native: "🧑🏻"
      },
      {
        unified: "1f9d1-1f3fc",
        native: "🧑🏼"
      },
      {
        unified: "1f9d1-1f3fd",
        native: "🧑🏽"
      },
      {
        unified: "1f9d1-1f3fe",
        native: "🧑🏾"
      },
      {
        unified: "1f9d1-1f3ff",
        native: "🧑🏿"
      }
    ],
    version: 5
  },
  person_with_blond_hair: {
    id: "person_with_blond_hair",
    name: "Person Blond Hair",
    keywords: [
      "with",
      "hairstyle"
    ],
    skins: [
      {
        unified: "1f471",
        native: "👱"
      },
      {
        unified: "1f471-1f3fb",
        native: "👱🏻"
      },
      {
        unified: "1f471-1f3fc",
        native: "👱🏼"
      },
      {
        unified: "1f471-1f3fd",
        native: "👱🏽"
      },
      {
        unified: "1f471-1f3fe",
        native: "👱🏾"
      },
      {
        unified: "1f471-1f3ff",
        native: "👱🏿"
      }
    ],
    version: 1
  },
  man: {
    id: "man",
    name: "Man",
    keywords: [
      "mustache",
      "father",
      "dad",
      "guy",
      "classy",
      "sir",
      "moustache"
    ],
    skins: [
      {
        unified: "1f468",
        native: "👨"
      },
      {
        unified: "1f468-1f3fb",
        native: "👨🏻"
      },
      {
        unified: "1f468-1f3fc",
        native: "👨🏼"
      },
      {
        unified: "1f468-1f3fd",
        native: "👨🏽"
      },
      {
        unified: "1f468-1f3fe",
        native: "👨🏾"
      },
      {
        unified: "1f468-1f3ff",
        native: "👨🏿"
      }
    ],
    version: 1
  },
  bearded_person: {
    id: "bearded_person",
    name: "Person Beard",
    keywords: [
      "bearded",
      "man",
      "bewhiskered"
    ],
    skins: [
      {
        unified: "1f9d4",
        native: "🧔"
      },
      {
        unified: "1f9d4-1f3fb",
        native: "🧔🏻"
      },
      {
        unified: "1f9d4-1f3fc",
        native: "🧔🏼"
      },
      {
        unified: "1f9d4-1f3fd",
        native: "🧔🏽"
      },
      {
        unified: "1f9d4-1f3fe",
        native: "🧔🏾"
      },
      {
        unified: "1f9d4-1f3ff",
        native: "🧔🏿"
      }
    ],
    version: 5
  },
  man_with_beard: {
    id: "man_with_beard",
    name: "Man: Beard",
    keywords: [
      "man",
      "with",
      "facial",
      "hair"
    ],
    skins: [
      {
        unified: "1f9d4-200d-2642-fe0f",
        native: "🧔‍♂️"
      },
      {
        unified: "1f9d4-1f3fb-200d-2642-fe0f",
        native: "🧔🏻‍♂️"
      },
      {
        unified: "1f9d4-1f3fc-200d-2642-fe0f",
        native: "🧔🏼‍♂️"
      },
      {
        unified: "1f9d4-1f3fd-200d-2642-fe0f",
        native: "🧔🏽‍♂️"
      },
      {
        unified: "1f9d4-1f3fe-200d-2642-fe0f",
        native: "🧔🏾‍♂️"
      },
      {
        unified: "1f9d4-1f3ff-200d-2642-fe0f",
        native: "🧔🏿‍♂️"
      }
    ],
    version: 13.1
  },
  woman_with_beard: {
    id: "woman_with_beard",
    name: "Woman: Beard",
    keywords: [
      "woman",
      "with",
      "facial",
      "hair"
    ],
    skins: [
      {
        unified: "1f9d4-200d-2640-fe0f",
        native: "🧔‍♀️"
      },
      {
        unified: "1f9d4-1f3fb-200d-2640-fe0f",
        native: "🧔🏻‍♀️"
      },
      {
        unified: "1f9d4-1f3fc-200d-2640-fe0f",
        native: "🧔🏼‍♀️"
      },
      {
        unified: "1f9d4-1f3fd-200d-2640-fe0f",
        native: "🧔🏽‍♀️"
      },
      {
        unified: "1f9d4-1f3fe-200d-2640-fe0f",
        native: "🧔🏾‍♀️"
      },
      {
        unified: "1f9d4-1f3ff-200d-2640-fe0f",
        native: "🧔🏿‍♀️"
      }
    ],
    version: 13.1
  },
  red_haired_man: {
    id: "red_haired_man",
    name: "Man: Red Hair",
    keywords: [
      "haired",
      "man",
      "hairstyle"
    ],
    skins: [
      {
        unified: "1f468-200d-1f9b0",
        native: "👨‍🦰"
      },
      {
        unified: "1f468-1f3fb-200d-1f9b0",
        native: "👨🏻‍🦰"
      },
      {
        unified: "1f468-1f3fc-200d-1f9b0",
        native: "👨🏼‍🦰"
      },
      {
        unified: "1f468-1f3fd-200d-1f9b0",
        native: "👨🏽‍🦰"
      },
      {
        unified: "1f468-1f3fe-200d-1f9b0",
        native: "👨🏾‍🦰"
      },
      {
        unified: "1f468-1f3ff-200d-1f9b0",
        native: "👨🏿‍🦰"
      }
    ],
    version: 11
  },
  curly_haired_man: {
    id: "curly_haired_man",
    name: "Man: Curly Hair",
    keywords: [
      "haired",
      "man",
      "hairstyle"
    ],
    skins: [
      {
        unified: "1f468-200d-1f9b1",
        native: "👨‍🦱"
      },
      {
        unified: "1f468-1f3fb-200d-1f9b1",
        native: "👨🏻‍🦱"
      },
      {
        unified: "1f468-1f3fc-200d-1f9b1",
        native: "👨🏼‍🦱"
      },
      {
        unified: "1f468-1f3fd-200d-1f9b1",
        native: "👨🏽‍🦱"
      },
      {
        unified: "1f468-1f3fe-200d-1f9b1",
        native: "👨🏾‍🦱"
      },
      {
        unified: "1f468-1f3ff-200d-1f9b1",
        native: "👨🏿‍🦱"
      }
    ],
    version: 11
  },
  white_haired_man: {
    id: "white_haired_man",
    name: "Man: White Hair",
    keywords: [
      "haired",
      "man",
      "old",
      "elder"
    ],
    skins: [
      {
        unified: "1f468-200d-1f9b3",
        native: "👨‍🦳"
      },
      {
        unified: "1f468-1f3fb-200d-1f9b3",
        native: "👨🏻‍🦳"
      },
      {
        unified: "1f468-1f3fc-200d-1f9b3",
        native: "👨🏼‍🦳"
      },
      {
        unified: "1f468-1f3fd-200d-1f9b3",
        native: "👨🏽‍🦳"
      },
      {
        unified: "1f468-1f3fe-200d-1f9b3",
        native: "👨🏾‍🦳"
      },
      {
        unified: "1f468-1f3ff-200d-1f9b3",
        native: "👨🏿‍🦳"
      }
    ],
    version: 11
  },
  bald_man: {
    id: "bald_man",
    name: "Man: Bald",
    keywords: [
      "man",
      "hairless"
    ],
    skins: [
      {
        unified: "1f468-200d-1f9b2",
        native: "👨‍🦲"
      },
      {
        unified: "1f468-1f3fb-200d-1f9b2",
        native: "👨🏻‍🦲"
      },
      {
        unified: "1f468-1f3fc-200d-1f9b2",
        native: "👨🏼‍🦲"
      },
      {
        unified: "1f468-1f3fd-200d-1f9b2",
        native: "👨🏽‍🦲"
      },
      {
        unified: "1f468-1f3fe-200d-1f9b2",
        native: "👨🏾‍🦲"
      },
      {
        unified: "1f468-1f3ff-200d-1f9b2",
        native: "👨🏿‍🦲"
      }
    ],
    version: 11
  },
  woman: {
    id: "woman",
    name: "Woman",
    keywords: [
      "female",
      "girls",
      "lady"
    ],
    skins: [
      {
        unified: "1f469",
        native: "👩"
      },
      {
        unified: "1f469-1f3fb",
        native: "👩🏻"
      },
      {
        unified: "1f469-1f3fc",
        native: "👩🏼"
      },
      {
        unified: "1f469-1f3fd",
        native: "👩🏽"
      },
      {
        unified: "1f469-1f3fe",
        native: "👩🏾"
      },
      {
        unified: "1f469-1f3ff",
        native: "👩🏿"
      }
    ],
    version: 1
  },
  red_haired_woman: {
    id: "red_haired_woman",
    name: "Woman: Red Hair",
    keywords: [
      "haired",
      "woman",
      "hairstyle"
    ],
    skins: [
      {
        unified: "1f469-200d-1f9b0",
        native: "👩‍🦰"
      },
      {
        unified: "1f469-1f3fb-200d-1f9b0",
        native: "👩🏻‍🦰"
      },
      {
        unified: "1f469-1f3fc-200d-1f9b0",
        native: "👩🏼‍🦰"
      },
      {
        unified: "1f469-1f3fd-200d-1f9b0",
        native: "👩🏽‍🦰"
      },
      {
        unified: "1f469-1f3fe-200d-1f9b0",
        native: "👩🏾‍🦰"
      },
      {
        unified: "1f469-1f3ff-200d-1f9b0",
        native: "👩🏿‍🦰"
      }
    ],
    version: 11
  },
  red_haired_person: {
    id: "red_haired_person",
    name: "Person: Red Hair",
    keywords: [
      "haired",
      "person",
      "hairstyle"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f9b0",
        native: "🧑‍🦰"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f9b0",
        native: "🧑🏻‍🦰"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f9b0",
        native: "🧑🏼‍🦰"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f9b0",
        native: "🧑🏽‍🦰"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f9b0",
        native: "🧑🏾‍🦰"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f9b0",
        native: "🧑🏿‍🦰"
      }
    ],
    version: 12.1
  },
  curly_haired_woman: {
    id: "curly_haired_woman",
    name: "Woman: Curly Hair",
    keywords: [
      "haired",
      "woman",
      "hairstyle"
    ],
    skins: [
      {
        unified: "1f469-200d-1f9b1",
        native: "👩‍🦱"
      },
      {
        unified: "1f469-1f3fb-200d-1f9b1",
        native: "👩🏻‍🦱"
      },
      {
        unified: "1f469-1f3fc-200d-1f9b1",
        native: "👩🏼‍🦱"
      },
      {
        unified: "1f469-1f3fd-200d-1f9b1",
        native: "👩🏽‍🦱"
      },
      {
        unified: "1f469-1f3fe-200d-1f9b1",
        native: "👩🏾‍🦱"
      },
      {
        unified: "1f469-1f3ff-200d-1f9b1",
        native: "👩🏿‍🦱"
      }
    ],
    version: 11
  },
  curly_haired_person: {
    id: "curly_haired_person",
    name: "Person: Curly Hair",
    keywords: [
      "haired",
      "person",
      "hairstyle"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f9b1",
        native: "🧑‍🦱"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f9b1",
        native: "🧑🏻‍🦱"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f9b1",
        native: "🧑🏼‍🦱"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f9b1",
        native: "🧑🏽‍🦱"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f9b1",
        native: "🧑🏾‍🦱"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f9b1",
        native: "🧑🏿‍🦱"
      }
    ],
    version: 12.1
  },
  white_haired_woman: {
    id: "white_haired_woman",
    name: "Woman: White Hair",
    keywords: [
      "haired",
      "woman",
      "old",
      "elder"
    ],
    skins: [
      {
        unified: "1f469-200d-1f9b3",
        native: "👩‍🦳"
      },
      {
        unified: "1f469-1f3fb-200d-1f9b3",
        native: "👩🏻‍🦳"
      },
      {
        unified: "1f469-1f3fc-200d-1f9b3",
        native: "👩🏼‍🦳"
      },
      {
        unified: "1f469-1f3fd-200d-1f9b3",
        native: "👩🏽‍🦳"
      },
      {
        unified: "1f469-1f3fe-200d-1f9b3",
        native: "👩🏾‍🦳"
      },
      {
        unified: "1f469-1f3ff-200d-1f9b3",
        native: "👩🏿‍🦳"
      }
    ],
    version: 11
  },
  white_haired_person: {
    id: "white_haired_person",
    name: "Person: White Hair",
    keywords: [
      "haired",
      "person",
      "elder",
      "old"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f9b3",
        native: "🧑‍🦳"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f9b3",
        native: "🧑🏻‍🦳"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f9b3",
        native: "🧑🏼‍🦳"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f9b3",
        native: "🧑🏽‍🦳"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f9b3",
        native: "🧑🏾‍🦳"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f9b3",
        native: "🧑🏿‍🦳"
      }
    ],
    version: 12.1
  },
  bald_woman: {
    id: "bald_woman",
    name: "Woman: Bald",
    keywords: [
      "woman",
      "hairless"
    ],
    skins: [
      {
        unified: "1f469-200d-1f9b2",
        native: "👩‍🦲"
      },
      {
        unified: "1f469-1f3fb-200d-1f9b2",
        native: "👩🏻‍🦲"
      },
      {
        unified: "1f469-1f3fc-200d-1f9b2",
        native: "👩🏼‍🦲"
      },
      {
        unified: "1f469-1f3fd-200d-1f9b2",
        native: "👩🏽‍🦲"
      },
      {
        unified: "1f469-1f3fe-200d-1f9b2",
        native: "👩🏾‍🦲"
      },
      {
        unified: "1f469-1f3ff-200d-1f9b2",
        native: "👩🏿‍🦲"
      }
    ],
    version: 11
  },
  bald_person: {
    id: "bald_person",
    name: "Person: Bald",
    keywords: [
      "person",
      "hairless"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f9b2",
        native: "🧑‍🦲"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f9b2",
        native: "🧑🏻‍🦲"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f9b2",
        native: "🧑🏼‍🦲"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f9b2",
        native: "🧑🏽‍🦲"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f9b2",
        native: "🧑🏾‍🦲"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f9b2",
        native: "🧑🏿‍🦲"
      }
    ],
    version: 12.1
  },
  "blond-haired-woman": {
    id: "blond-haired-woman",
    name: "Woman: Blond Hair",
    keywords: [
      "haired-woman",
      "woman",
      "female",
      "girl",
      "blonde",
      "person"
    ],
    skins: [
      {
        unified: "1f471-200d-2640-fe0f",
        native: "👱‍♀️"
      },
      {
        unified: "1f471-1f3fb-200d-2640-fe0f",
        native: "👱🏻‍♀️"
      },
      {
        unified: "1f471-1f3fc-200d-2640-fe0f",
        native: "👱🏼‍♀️"
      },
      {
        unified: "1f471-1f3fd-200d-2640-fe0f",
        native: "👱🏽‍♀️"
      },
      {
        unified: "1f471-1f3fe-200d-2640-fe0f",
        native: "👱🏾‍♀️"
      },
      {
        unified: "1f471-1f3ff-200d-2640-fe0f",
        native: "👱🏿‍♀️"
      }
    ],
    version: 4
  },
  "blond-haired-man": {
    id: "blond-haired-man",
    name: "Man: Blond Hair",
    keywords: [
      "haired-man",
      "man",
      "male",
      "boy",
      "blonde",
      "guy",
      "person"
    ],
    skins: [
      {
        unified: "1f471-200d-2642-fe0f",
        native: "👱‍♂️"
      },
      {
        unified: "1f471-1f3fb-200d-2642-fe0f",
        native: "👱🏻‍♂️"
      },
      {
        unified: "1f471-1f3fc-200d-2642-fe0f",
        native: "👱🏼‍♂️"
      },
      {
        unified: "1f471-1f3fd-200d-2642-fe0f",
        native: "👱🏽‍♂️"
      },
      {
        unified: "1f471-1f3fe-200d-2642-fe0f",
        native: "👱🏾‍♂️"
      },
      {
        unified: "1f471-1f3ff-200d-2642-fe0f",
        native: "👱🏿‍♂️"
      }
    ],
    version: 4
  },
  older_adult: {
    id: "older_adult",
    name: "Older Adult",
    keywords: [
      "person",
      "human",
      "elder",
      "senior",
      "gender",
      "neutral"
    ],
    skins: [
      {
        unified: "1f9d3",
        native: "🧓"
      },
      {
        unified: "1f9d3-1f3fb",
        native: "🧓🏻"
      },
      {
        unified: "1f9d3-1f3fc",
        native: "🧓🏼"
      },
      {
        unified: "1f9d3-1f3fd",
        native: "🧓🏽"
      },
      {
        unified: "1f9d3-1f3fe",
        native: "🧓🏾"
      },
      {
        unified: "1f9d3-1f3ff",
        native: "🧓🏿"
      }
    ],
    version: 5
  },
  older_man: {
    id: "older_man",
    name: "Old Man",
    keywords: [
      "older",
      "human",
      "male",
      "men",
      "elder",
      "senior"
    ],
    skins: [
      {
        unified: "1f474",
        native: "👴"
      },
      {
        unified: "1f474-1f3fb",
        native: "👴🏻"
      },
      {
        unified: "1f474-1f3fc",
        native: "👴🏼"
      },
      {
        unified: "1f474-1f3fd",
        native: "👴🏽"
      },
      {
        unified: "1f474-1f3fe",
        native: "👴🏾"
      },
      {
        unified: "1f474-1f3ff",
        native: "👴🏿"
      }
    ],
    version: 1
  },
  older_woman: {
    id: "older_woman",
    name: "Old Woman",
    keywords: [
      "older",
      "human",
      "female",
      "women",
      "lady",
      "elder",
      "senior"
    ],
    skins: [
      {
        unified: "1f475",
        native: "👵"
      },
      {
        unified: "1f475-1f3fb",
        native: "👵🏻"
      },
      {
        unified: "1f475-1f3fc",
        native: "👵🏼"
      },
      {
        unified: "1f475-1f3fd",
        native: "👵🏽"
      },
      {
        unified: "1f475-1f3fe",
        native: "👵🏾"
      },
      {
        unified: "1f475-1f3ff",
        native: "👵🏿"
      }
    ],
    version: 1
  },
  person_frowning: {
    id: "person_frowning",
    name: "Person Frowning",
    keywords: [
      "worried"
    ],
    skins: [
      {
        unified: "1f64d",
        native: "🙍"
      },
      {
        unified: "1f64d-1f3fb",
        native: "🙍🏻"
      },
      {
        unified: "1f64d-1f3fc",
        native: "🙍🏼"
      },
      {
        unified: "1f64d-1f3fd",
        native: "🙍🏽"
      },
      {
        unified: "1f64d-1f3fe",
        native: "🙍🏾"
      },
      {
        unified: "1f64d-1f3ff",
        native: "🙍🏿"
      }
    ],
    version: 1
  },
  "man-frowning": {
    id: "man-frowning",
    name: "Man Frowning",
    keywords: [
      "male",
      "boy",
      "sad",
      "depressed",
      "discouraged",
      "unhappy"
    ],
    skins: [
      {
        unified: "1f64d-200d-2642-fe0f",
        native: "🙍‍♂️"
      },
      {
        unified: "1f64d-1f3fb-200d-2642-fe0f",
        native: "🙍🏻‍♂️"
      },
      {
        unified: "1f64d-1f3fc-200d-2642-fe0f",
        native: "🙍🏼‍♂️"
      },
      {
        unified: "1f64d-1f3fd-200d-2642-fe0f",
        native: "🙍🏽‍♂️"
      },
      {
        unified: "1f64d-1f3fe-200d-2642-fe0f",
        native: "🙍🏾‍♂️"
      },
      {
        unified: "1f64d-1f3ff-200d-2642-fe0f",
        native: "🙍🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-frowning": {
    id: "woman-frowning",
    name: "Woman Frowning",
    keywords: [
      "female",
      "girl",
      "sad",
      "depressed",
      "discouraged",
      "unhappy"
    ],
    skins: [
      {
        unified: "1f64d-200d-2640-fe0f",
        native: "🙍‍♀️"
      },
      {
        unified: "1f64d-1f3fb-200d-2640-fe0f",
        native: "🙍🏻‍♀️"
      },
      {
        unified: "1f64d-1f3fc-200d-2640-fe0f",
        native: "🙍🏼‍♀️"
      },
      {
        unified: "1f64d-1f3fd-200d-2640-fe0f",
        native: "🙍🏽‍♀️"
      },
      {
        unified: "1f64d-1f3fe-200d-2640-fe0f",
        native: "🙍🏾‍♀️"
      },
      {
        unified: "1f64d-1f3ff-200d-2640-fe0f",
        native: "🙍🏿‍♀️"
      }
    ],
    version: 4
  },
  person_with_pouting_face: {
    id: "person_with_pouting_face",
    name: "Person Pouting",
    keywords: [
      "with",
      "face",
      "upset"
    ],
    skins: [
      {
        unified: "1f64e",
        native: "🙎"
      },
      {
        unified: "1f64e-1f3fb",
        native: "🙎🏻"
      },
      {
        unified: "1f64e-1f3fc",
        native: "🙎🏼"
      },
      {
        unified: "1f64e-1f3fd",
        native: "🙎🏽"
      },
      {
        unified: "1f64e-1f3fe",
        native: "🙎🏾"
      },
      {
        unified: "1f64e-1f3ff",
        native: "🙎🏿"
      }
    ],
    version: 1
  },
  "man-pouting": {
    id: "man-pouting",
    name: "Man Pouting",
    keywords: [
      "male",
      "boy"
    ],
    skins: [
      {
        unified: "1f64e-200d-2642-fe0f",
        native: "🙎‍♂️"
      },
      {
        unified: "1f64e-1f3fb-200d-2642-fe0f",
        native: "🙎🏻‍♂️"
      },
      {
        unified: "1f64e-1f3fc-200d-2642-fe0f",
        native: "🙎🏼‍♂️"
      },
      {
        unified: "1f64e-1f3fd-200d-2642-fe0f",
        native: "🙎🏽‍♂️"
      },
      {
        unified: "1f64e-1f3fe-200d-2642-fe0f",
        native: "🙎🏾‍♂️"
      },
      {
        unified: "1f64e-1f3ff-200d-2642-fe0f",
        native: "🙎🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-pouting": {
    id: "woman-pouting",
    name: "Woman Pouting",
    keywords: [
      "female",
      "girl"
    ],
    skins: [
      {
        unified: "1f64e-200d-2640-fe0f",
        native: "🙎‍♀️"
      },
      {
        unified: "1f64e-1f3fb-200d-2640-fe0f",
        native: "🙎🏻‍♀️"
      },
      {
        unified: "1f64e-1f3fc-200d-2640-fe0f",
        native: "🙎🏼‍♀️"
      },
      {
        unified: "1f64e-1f3fd-200d-2640-fe0f",
        native: "🙎🏽‍♀️"
      },
      {
        unified: "1f64e-1f3fe-200d-2640-fe0f",
        native: "🙎🏾‍♀️"
      },
      {
        unified: "1f64e-1f3ff-200d-2640-fe0f",
        native: "🙎🏿‍♀️"
      }
    ],
    version: 4
  },
  no_good: {
    id: "no_good",
    name: "Person Gesturing No",
    keywords: [
      "good",
      "decline"
    ],
    skins: [
      {
        unified: "1f645",
        native: "🙅"
      },
      {
        unified: "1f645-1f3fb",
        native: "🙅🏻"
      },
      {
        unified: "1f645-1f3fc",
        native: "🙅🏼"
      },
      {
        unified: "1f645-1f3fd",
        native: "🙅🏽"
      },
      {
        unified: "1f645-1f3fe",
        native: "🙅🏾"
      },
      {
        unified: "1f645-1f3ff",
        native: "🙅🏿"
      }
    ],
    version: 1
  },
  "man-gesturing-no": {
    id: "man-gesturing-no",
    name: "Man Gesturing No",
    keywords: [
      "gesturing-no",
      "male",
      "boy",
      "nope"
    ],
    skins: [
      {
        unified: "1f645-200d-2642-fe0f",
        native: "🙅‍♂️"
      },
      {
        unified: "1f645-1f3fb-200d-2642-fe0f",
        native: "🙅🏻‍♂️"
      },
      {
        unified: "1f645-1f3fc-200d-2642-fe0f",
        native: "🙅🏼‍♂️"
      },
      {
        unified: "1f645-1f3fd-200d-2642-fe0f",
        native: "🙅🏽‍♂️"
      },
      {
        unified: "1f645-1f3fe-200d-2642-fe0f",
        native: "🙅🏾‍♂️"
      },
      {
        unified: "1f645-1f3ff-200d-2642-fe0f",
        native: "🙅🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-gesturing-no": {
    id: "woman-gesturing-no",
    name: "Woman Gesturing No",
    keywords: [
      "gesturing-no",
      "female",
      "girl",
      "nope"
    ],
    skins: [
      {
        unified: "1f645-200d-2640-fe0f",
        native: "🙅‍♀️"
      },
      {
        unified: "1f645-1f3fb-200d-2640-fe0f",
        native: "🙅🏻‍♀️"
      },
      {
        unified: "1f645-1f3fc-200d-2640-fe0f",
        native: "🙅🏼‍♀️"
      },
      {
        unified: "1f645-1f3fd-200d-2640-fe0f",
        native: "🙅🏽‍♀️"
      },
      {
        unified: "1f645-1f3fe-200d-2640-fe0f",
        native: "🙅🏾‍♀️"
      },
      {
        unified: "1f645-1f3ff-200d-2640-fe0f",
        native: "🙅🏿‍♀️"
      }
    ],
    version: 4
  },
  ok_woman: {
    id: "ok_woman",
    name: "Person Gesturing Ok",
    keywords: [
      "woman",
      "agree"
    ],
    skins: [
      {
        unified: "1f646",
        native: "🙆"
      },
      {
        unified: "1f646-1f3fb",
        native: "🙆🏻"
      },
      {
        unified: "1f646-1f3fc",
        native: "🙆🏼"
      },
      {
        unified: "1f646-1f3fd",
        native: "🙆🏽"
      },
      {
        unified: "1f646-1f3fe",
        native: "🙆🏾"
      },
      {
        unified: "1f646-1f3ff",
        native: "🙆🏿"
      }
    ],
    version: 1
  },
  "man-gesturing-ok": {
    id: "man-gesturing-ok",
    name: "Man Gesturing Ok",
    keywords: [
      "gesturing-ok",
      "men",
      "boy",
      "male",
      "blue",
      "human"
    ],
    skins: [
      {
        unified: "1f646-200d-2642-fe0f",
        native: "🙆‍♂️"
      },
      {
        unified: "1f646-1f3fb-200d-2642-fe0f",
        native: "🙆🏻‍♂️"
      },
      {
        unified: "1f646-1f3fc-200d-2642-fe0f",
        native: "🙆🏼‍♂️"
      },
      {
        unified: "1f646-1f3fd-200d-2642-fe0f",
        native: "🙆🏽‍♂️"
      },
      {
        unified: "1f646-1f3fe-200d-2642-fe0f",
        native: "🙆🏾‍♂️"
      },
      {
        unified: "1f646-1f3ff-200d-2642-fe0f",
        native: "🙆🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-gesturing-ok": {
    id: "woman-gesturing-ok",
    name: "Woman Gesturing Ok",
    keywords: [
      "gesturing-ok",
      "women",
      "girl",
      "female",
      "pink",
      "human"
    ],
    skins: [
      {
        unified: "1f646-200d-2640-fe0f",
        native: "🙆‍♀️"
      },
      {
        unified: "1f646-1f3fb-200d-2640-fe0f",
        native: "🙆🏻‍♀️"
      },
      {
        unified: "1f646-1f3fc-200d-2640-fe0f",
        native: "🙆🏼‍♀️"
      },
      {
        unified: "1f646-1f3fd-200d-2640-fe0f",
        native: "🙆🏽‍♀️"
      },
      {
        unified: "1f646-1f3fe-200d-2640-fe0f",
        native: "🙆🏾‍♀️"
      },
      {
        unified: "1f646-1f3ff-200d-2640-fe0f",
        native: "🙆🏿‍♀️"
      }
    ],
    version: 4
  },
  information_desk_person: {
    id: "information_desk_person",
    name: "Person Tipping Hand",
    keywords: [
      "information",
      "desk"
    ],
    skins: [
      {
        unified: "1f481",
        native: "💁"
      },
      {
        unified: "1f481-1f3fb",
        native: "💁🏻"
      },
      {
        unified: "1f481-1f3fc",
        native: "💁🏼"
      },
      {
        unified: "1f481-1f3fd",
        native: "💁🏽"
      },
      {
        unified: "1f481-1f3fe",
        native: "💁🏾"
      },
      {
        unified: "1f481-1f3ff",
        native: "💁🏿"
      }
    ],
    version: 1
  },
  "man-tipping-hand": {
    id: "man-tipping-hand",
    name: "Man Tipping Hand",
    keywords: [
      "tipping-hand",
      "male",
      "boy",
      "human",
      "information"
    ],
    skins: [
      {
        unified: "1f481-200d-2642-fe0f",
        native: "💁‍♂️"
      },
      {
        unified: "1f481-1f3fb-200d-2642-fe0f",
        native: "💁🏻‍♂️"
      },
      {
        unified: "1f481-1f3fc-200d-2642-fe0f",
        native: "💁🏼‍♂️"
      },
      {
        unified: "1f481-1f3fd-200d-2642-fe0f",
        native: "💁🏽‍♂️"
      },
      {
        unified: "1f481-1f3fe-200d-2642-fe0f",
        native: "💁🏾‍♂️"
      },
      {
        unified: "1f481-1f3ff-200d-2642-fe0f",
        native: "💁🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-tipping-hand": {
    id: "woman-tipping-hand",
    name: "Woman Tipping Hand",
    keywords: [
      "tipping-hand",
      "female",
      "girl",
      "human",
      "information"
    ],
    skins: [
      {
        unified: "1f481-200d-2640-fe0f",
        native: "💁‍♀️"
      },
      {
        unified: "1f481-1f3fb-200d-2640-fe0f",
        native: "💁🏻‍♀️"
      },
      {
        unified: "1f481-1f3fc-200d-2640-fe0f",
        native: "💁🏼‍♀️"
      },
      {
        unified: "1f481-1f3fd-200d-2640-fe0f",
        native: "💁🏽‍♀️"
      },
      {
        unified: "1f481-1f3fe-200d-2640-fe0f",
        native: "💁🏾‍♀️"
      },
      {
        unified: "1f481-1f3ff-200d-2640-fe0f",
        native: "💁🏿‍♀️"
      }
    ],
    version: 4
  },
  raising_hand: {
    id: "raising_hand",
    name: "Person Raising Hand",
    keywords: [
      "question"
    ],
    skins: [
      {
        unified: "1f64b",
        native: "🙋"
      },
      {
        unified: "1f64b-1f3fb",
        native: "🙋🏻"
      },
      {
        unified: "1f64b-1f3fc",
        native: "🙋🏼"
      },
      {
        unified: "1f64b-1f3fd",
        native: "🙋🏽"
      },
      {
        unified: "1f64b-1f3fe",
        native: "🙋🏾"
      },
      {
        unified: "1f64b-1f3ff",
        native: "🙋🏿"
      }
    ],
    version: 1
  },
  "man-raising-hand": {
    id: "man-raising-hand",
    name: "Man Raising Hand",
    keywords: [
      "raising-hand",
      "male",
      "boy"
    ],
    skins: [
      {
        unified: "1f64b-200d-2642-fe0f",
        native: "🙋‍♂️"
      },
      {
        unified: "1f64b-1f3fb-200d-2642-fe0f",
        native: "🙋🏻‍♂️"
      },
      {
        unified: "1f64b-1f3fc-200d-2642-fe0f",
        native: "🙋🏼‍♂️"
      },
      {
        unified: "1f64b-1f3fd-200d-2642-fe0f",
        native: "🙋🏽‍♂️"
      },
      {
        unified: "1f64b-1f3fe-200d-2642-fe0f",
        native: "🙋🏾‍♂️"
      },
      {
        unified: "1f64b-1f3ff-200d-2642-fe0f",
        native: "🙋🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-raising-hand": {
    id: "woman-raising-hand",
    name: "Woman Raising Hand",
    keywords: [
      "raising-hand",
      "female",
      "girl"
    ],
    skins: [
      {
        unified: "1f64b-200d-2640-fe0f",
        native: "🙋‍♀️"
      },
      {
        unified: "1f64b-1f3fb-200d-2640-fe0f",
        native: "🙋🏻‍♀️"
      },
      {
        unified: "1f64b-1f3fc-200d-2640-fe0f",
        native: "🙋🏼‍♀️"
      },
      {
        unified: "1f64b-1f3fd-200d-2640-fe0f",
        native: "🙋🏽‍♀️"
      },
      {
        unified: "1f64b-1f3fe-200d-2640-fe0f",
        native: "🙋🏾‍♀️"
      },
      {
        unified: "1f64b-1f3ff-200d-2640-fe0f",
        native: "🙋🏿‍♀️"
      }
    ],
    version: 4
  },
  deaf_person: {
    id: "deaf_person",
    name: "Deaf Person",
    keywords: [
      "accessibility"
    ],
    skins: [
      {
        unified: "1f9cf",
        native: "🧏"
      },
      {
        unified: "1f9cf-1f3fb",
        native: "🧏🏻"
      },
      {
        unified: "1f9cf-1f3fc",
        native: "🧏🏼"
      },
      {
        unified: "1f9cf-1f3fd",
        native: "🧏🏽"
      },
      {
        unified: "1f9cf-1f3fe",
        native: "🧏🏾"
      },
      {
        unified: "1f9cf-1f3ff",
        native: "🧏🏿"
      }
    ],
    version: 12
  },
  deaf_man: {
    id: "deaf_man",
    name: "Deaf Man",
    keywords: [
      "accessibility"
    ],
    skins: [
      {
        unified: "1f9cf-200d-2642-fe0f",
        native: "🧏‍♂️"
      },
      {
        unified: "1f9cf-1f3fb-200d-2642-fe0f",
        native: "🧏🏻‍♂️"
      },
      {
        unified: "1f9cf-1f3fc-200d-2642-fe0f",
        native: "🧏🏼‍♂️"
      },
      {
        unified: "1f9cf-1f3fd-200d-2642-fe0f",
        native: "🧏🏽‍♂️"
      },
      {
        unified: "1f9cf-1f3fe-200d-2642-fe0f",
        native: "🧏🏾‍♂️"
      },
      {
        unified: "1f9cf-1f3ff-200d-2642-fe0f",
        native: "🧏🏿‍♂️"
      }
    ],
    version: 12
  },
  deaf_woman: {
    id: "deaf_woman",
    name: "Deaf Woman",
    keywords: [
      "accessibility"
    ],
    skins: [
      {
        unified: "1f9cf-200d-2640-fe0f",
        native: "🧏‍♀️"
      },
      {
        unified: "1f9cf-1f3fb-200d-2640-fe0f",
        native: "🧏🏻‍♀️"
      },
      {
        unified: "1f9cf-1f3fc-200d-2640-fe0f",
        native: "🧏🏼‍♀️"
      },
      {
        unified: "1f9cf-1f3fd-200d-2640-fe0f",
        native: "🧏🏽‍♀️"
      },
      {
        unified: "1f9cf-1f3fe-200d-2640-fe0f",
        native: "🧏🏾‍♀️"
      },
      {
        unified: "1f9cf-1f3ff-200d-2640-fe0f",
        native: "🧏🏿‍♀️"
      }
    ],
    version: 12
  },
  bow: {
    id: "bow",
    name: "Person Bowing",
    keywords: [
      "bow",
      "respectiful"
    ],
    skins: [
      {
        unified: "1f647",
        native: "🙇"
      },
      {
        unified: "1f647-1f3fb",
        native: "🙇🏻"
      },
      {
        unified: "1f647-1f3fc",
        native: "🙇🏼"
      },
      {
        unified: "1f647-1f3fd",
        native: "🙇🏽"
      },
      {
        unified: "1f647-1f3fe",
        native: "🙇🏾"
      },
      {
        unified: "1f647-1f3ff",
        native: "🙇🏿"
      }
    ],
    version: 1
  },
  "man-bowing": {
    id: "man-bowing",
    name: "Man Bowing",
    keywords: [
      "male",
      "boy"
    ],
    skins: [
      {
        unified: "1f647-200d-2642-fe0f",
        native: "🙇‍♂️"
      },
      {
        unified: "1f647-1f3fb-200d-2642-fe0f",
        native: "🙇🏻‍♂️"
      },
      {
        unified: "1f647-1f3fc-200d-2642-fe0f",
        native: "🙇🏼‍♂️"
      },
      {
        unified: "1f647-1f3fd-200d-2642-fe0f",
        native: "🙇🏽‍♂️"
      },
      {
        unified: "1f647-1f3fe-200d-2642-fe0f",
        native: "🙇🏾‍♂️"
      },
      {
        unified: "1f647-1f3ff-200d-2642-fe0f",
        native: "🙇🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-bowing": {
    id: "woman-bowing",
    name: "Woman Bowing",
    keywords: [
      "female",
      "girl"
    ],
    skins: [
      {
        unified: "1f647-200d-2640-fe0f",
        native: "🙇‍♀️"
      },
      {
        unified: "1f647-1f3fb-200d-2640-fe0f",
        native: "🙇🏻‍♀️"
      },
      {
        unified: "1f647-1f3fc-200d-2640-fe0f",
        native: "🙇🏼‍♀️"
      },
      {
        unified: "1f647-1f3fd-200d-2640-fe0f",
        native: "🙇🏽‍♀️"
      },
      {
        unified: "1f647-1f3fe-200d-2640-fe0f",
        native: "🙇🏾‍♀️"
      },
      {
        unified: "1f647-1f3ff-200d-2640-fe0f",
        native: "🙇🏿‍♀️"
      }
    ],
    version: 4
  },
  face_palm: {
    id: "face_palm",
    name: "Face Palm",
    keywords: [
      "person",
      "facepalming",
      "disappointed"
    ],
    skins: [
      {
        unified: "1f926",
        native: "🤦"
      },
      {
        unified: "1f926-1f3fb",
        native: "🤦🏻"
      },
      {
        unified: "1f926-1f3fc",
        native: "🤦🏼"
      },
      {
        unified: "1f926-1f3fd",
        native: "🤦🏽"
      },
      {
        unified: "1f926-1f3fe",
        native: "🤦🏾"
      },
      {
        unified: "1f926-1f3ff",
        native: "🤦🏿"
      }
    ],
    version: 3
  },
  "man-facepalming": {
    id: "man-facepalming",
    name: "Man Facepalming",
    keywords: [
      "male",
      "boy",
      "disbelief"
    ],
    skins: [
      {
        unified: "1f926-200d-2642-fe0f",
        native: "🤦‍♂️"
      },
      {
        unified: "1f926-1f3fb-200d-2642-fe0f",
        native: "🤦🏻‍♂️"
      },
      {
        unified: "1f926-1f3fc-200d-2642-fe0f",
        native: "🤦🏼‍♂️"
      },
      {
        unified: "1f926-1f3fd-200d-2642-fe0f",
        native: "🤦🏽‍♂️"
      },
      {
        unified: "1f926-1f3fe-200d-2642-fe0f",
        native: "🤦🏾‍♂️"
      },
      {
        unified: "1f926-1f3ff-200d-2642-fe0f",
        native: "🤦🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-facepalming": {
    id: "woman-facepalming",
    name: "Woman Facepalming",
    keywords: [
      "female",
      "girl",
      "disbelief"
    ],
    skins: [
      {
        unified: "1f926-200d-2640-fe0f",
        native: "🤦‍♀️"
      },
      {
        unified: "1f926-1f3fb-200d-2640-fe0f",
        native: "🤦🏻‍♀️"
      },
      {
        unified: "1f926-1f3fc-200d-2640-fe0f",
        native: "🤦🏼‍♀️"
      },
      {
        unified: "1f926-1f3fd-200d-2640-fe0f",
        native: "🤦🏽‍♀️"
      },
      {
        unified: "1f926-1f3fe-200d-2640-fe0f",
        native: "🤦🏾‍♀️"
      },
      {
        unified: "1f926-1f3ff-200d-2640-fe0f",
        native: "🤦🏿‍♀️"
      }
    ],
    version: 4
  },
  shrug: {
    id: "shrug",
    name: "Shrug",
    keywords: [
      "person",
      "shrugging",
      "regardless"
    ],
    skins: [
      {
        unified: "1f937",
        native: "🤷"
      },
      {
        unified: "1f937-1f3fb",
        native: "🤷🏻"
      },
      {
        unified: "1f937-1f3fc",
        native: "🤷🏼"
      },
      {
        unified: "1f937-1f3fd",
        native: "🤷🏽"
      },
      {
        unified: "1f937-1f3fe",
        native: "🤷🏾"
      },
      {
        unified: "1f937-1f3ff",
        native: "🤷🏿"
      }
    ],
    version: 3
  },
  "man-shrugging": {
    id: "man-shrugging",
    name: "Man Shrugging",
    keywords: [
      "male",
      "boy",
      "confused",
      "indifferent",
      "doubt"
    ],
    skins: [
      {
        unified: "1f937-200d-2642-fe0f",
        native: "🤷‍♂️"
      },
      {
        unified: "1f937-1f3fb-200d-2642-fe0f",
        native: "🤷🏻‍♂️"
      },
      {
        unified: "1f937-1f3fc-200d-2642-fe0f",
        native: "🤷🏼‍♂️"
      },
      {
        unified: "1f937-1f3fd-200d-2642-fe0f",
        native: "🤷🏽‍♂️"
      },
      {
        unified: "1f937-1f3fe-200d-2642-fe0f",
        native: "🤷🏾‍♂️"
      },
      {
        unified: "1f937-1f3ff-200d-2642-fe0f",
        native: "🤷🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-shrugging": {
    id: "woman-shrugging",
    name: "Woman Shrugging",
    keywords: [
      "female",
      "girl",
      "confused",
      "indifferent",
      "doubt"
    ],
    skins: [
      {
        unified: "1f937-200d-2640-fe0f",
        native: "🤷‍♀️"
      },
      {
        unified: "1f937-1f3fb-200d-2640-fe0f",
        native: "🤷🏻‍♀️"
      },
      {
        unified: "1f937-1f3fc-200d-2640-fe0f",
        native: "🤷🏼‍♀️"
      },
      {
        unified: "1f937-1f3fd-200d-2640-fe0f",
        native: "🤷🏽‍♀️"
      },
      {
        unified: "1f937-1f3fe-200d-2640-fe0f",
        native: "🤷🏾‍♀️"
      },
      {
        unified: "1f937-1f3ff-200d-2640-fe0f",
        native: "🤷🏿‍♀️"
      }
    ],
    version: 4
  },
  health_worker: {
    id: "health_worker",
    name: "Health Worker",
    keywords: [
      "hospital"
    ],
    skins: [
      {
        unified: "1f9d1-200d-2695-fe0f",
        native: "🧑‍⚕️"
      },
      {
        unified: "1f9d1-1f3fb-200d-2695-fe0f",
        native: "🧑🏻‍⚕️"
      },
      {
        unified: "1f9d1-1f3fc-200d-2695-fe0f",
        native: "🧑🏼‍⚕️"
      },
      {
        unified: "1f9d1-1f3fd-200d-2695-fe0f",
        native: "🧑🏽‍⚕️"
      },
      {
        unified: "1f9d1-1f3fe-200d-2695-fe0f",
        native: "🧑🏾‍⚕️"
      },
      {
        unified: "1f9d1-1f3ff-200d-2695-fe0f",
        native: "🧑🏿‍⚕️"
      }
    ],
    version: 12.1
  },
  "male-doctor": {
    id: "male-doctor",
    name: "Man Health Worker",
    keywords: [
      "male",
      "doctor",
      "nurse",
      "therapist",
      "healthcare",
      "human"
    ],
    skins: [
      {
        unified: "1f468-200d-2695-fe0f",
        native: "👨‍⚕️"
      },
      {
        unified: "1f468-1f3fb-200d-2695-fe0f",
        native: "👨🏻‍⚕️"
      },
      {
        unified: "1f468-1f3fc-200d-2695-fe0f",
        native: "👨🏼‍⚕️"
      },
      {
        unified: "1f468-1f3fd-200d-2695-fe0f",
        native: "👨🏽‍⚕️"
      },
      {
        unified: "1f468-1f3fe-200d-2695-fe0f",
        native: "👨🏾‍⚕️"
      },
      {
        unified: "1f468-1f3ff-200d-2695-fe0f",
        native: "👨🏿‍⚕️"
      }
    ],
    version: 4
  },
  "female-doctor": {
    id: "female-doctor",
    name: "Woman Health Worker",
    keywords: [
      "female",
      "doctor",
      "nurse",
      "therapist",
      "healthcare",
      "human"
    ],
    skins: [
      {
        unified: "1f469-200d-2695-fe0f",
        native: "👩‍⚕️"
      },
      {
        unified: "1f469-1f3fb-200d-2695-fe0f",
        native: "👩🏻‍⚕️"
      },
      {
        unified: "1f469-1f3fc-200d-2695-fe0f",
        native: "👩🏼‍⚕️"
      },
      {
        unified: "1f469-1f3fd-200d-2695-fe0f",
        native: "👩🏽‍⚕️"
      },
      {
        unified: "1f469-1f3fe-200d-2695-fe0f",
        native: "👩🏾‍⚕️"
      },
      {
        unified: "1f469-1f3ff-200d-2695-fe0f",
        native: "👩🏿‍⚕️"
      }
    ],
    version: 4
  },
  student: {
    id: "student",
    name: "Student",
    keywords: [
      "learn"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f393",
        native: "🧑‍🎓"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f393",
        native: "🧑🏻‍🎓"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f393",
        native: "🧑🏼‍🎓"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f393",
        native: "🧑🏽‍🎓"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f393",
        native: "🧑🏾‍🎓"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f393",
        native: "🧑🏿‍🎓"
      }
    ],
    version: 12.1
  },
  "male-student": {
    id: "male-student",
    name: "Man Student",
    keywords: [
      "male",
      "graduate",
      "human"
    ],
    skins: [
      {
        unified: "1f468-200d-1f393",
        native: "👨‍🎓"
      },
      {
        unified: "1f468-1f3fb-200d-1f393",
        native: "👨🏻‍🎓"
      },
      {
        unified: "1f468-1f3fc-200d-1f393",
        native: "👨🏼‍🎓"
      },
      {
        unified: "1f468-1f3fd-200d-1f393",
        native: "👨🏽‍🎓"
      },
      {
        unified: "1f468-1f3fe-200d-1f393",
        native: "👨🏾‍🎓"
      },
      {
        unified: "1f468-1f3ff-200d-1f393",
        native: "👨🏿‍🎓"
      }
    ],
    version: 4
  },
  "female-student": {
    id: "female-student",
    name: "Woman Student",
    keywords: [
      "female",
      "graduate",
      "human"
    ],
    skins: [
      {
        unified: "1f469-200d-1f393",
        native: "👩‍🎓"
      },
      {
        unified: "1f469-1f3fb-200d-1f393",
        native: "👩🏻‍🎓"
      },
      {
        unified: "1f469-1f3fc-200d-1f393",
        native: "👩🏼‍🎓"
      },
      {
        unified: "1f469-1f3fd-200d-1f393",
        native: "👩🏽‍🎓"
      },
      {
        unified: "1f469-1f3fe-200d-1f393",
        native: "👩🏾‍🎓"
      },
      {
        unified: "1f469-1f3ff-200d-1f393",
        native: "👩🏿‍🎓"
      }
    ],
    version: 4
  },
  teacher: {
    id: "teacher",
    name: "Teacher",
    keywords: [
      "professor"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f3eb",
        native: "🧑‍🏫"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f3eb",
        native: "🧑🏻‍🏫"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f3eb",
        native: "🧑🏼‍🏫"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f3eb",
        native: "🧑🏽‍🏫"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f3eb",
        native: "🧑🏾‍🏫"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f3eb",
        native: "🧑🏿‍🏫"
      }
    ],
    version: 12.1
  },
  "male-teacher": {
    id: "male-teacher",
    name: "Man Teacher",
    keywords: [
      "male",
      "instructor",
      "professor",
      "human"
    ],
    skins: [
      {
        unified: "1f468-200d-1f3eb",
        native: "👨‍🏫"
      },
      {
        unified: "1f468-1f3fb-200d-1f3eb",
        native: "👨🏻‍🏫"
      },
      {
        unified: "1f468-1f3fc-200d-1f3eb",
        native: "👨🏼‍🏫"
      },
      {
        unified: "1f468-1f3fd-200d-1f3eb",
        native: "👨🏽‍🏫"
      },
      {
        unified: "1f468-1f3fe-200d-1f3eb",
        native: "👨🏾‍🏫"
      },
      {
        unified: "1f468-1f3ff-200d-1f3eb",
        native: "👨🏿‍🏫"
      }
    ],
    version: 4
  },
  "female-teacher": {
    id: "female-teacher",
    name: "Woman Teacher",
    keywords: [
      "female",
      "instructor",
      "professor",
      "human"
    ],
    skins: [
      {
        unified: "1f469-200d-1f3eb",
        native: "👩‍🏫"
      },
      {
        unified: "1f469-1f3fb-200d-1f3eb",
        native: "👩🏻‍🏫"
      },
      {
        unified: "1f469-1f3fc-200d-1f3eb",
        native: "👩🏼‍🏫"
      },
      {
        unified: "1f469-1f3fd-200d-1f3eb",
        native: "👩🏽‍🏫"
      },
      {
        unified: "1f469-1f3fe-200d-1f3eb",
        native: "👩🏾‍🏫"
      },
      {
        unified: "1f469-1f3ff-200d-1f3eb",
        native: "👩🏿‍🏫"
      }
    ],
    version: 4
  },
  judge: {
    id: "judge",
    name: "Judge",
    keywords: [
      "law"
    ],
    skins: [
      {
        unified: "1f9d1-200d-2696-fe0f",
        native: "🧑‍⚖️"
      },
      {
        unified: "1f9d1-1f3fb-200d-2696-fe0f",
        native: "🧑🏻‍⚖️"
      },
      {
        unified: "1f9d1-1f3fc-200d-2696-fe0f",
        native: "🧑🏼‍⚖️"
      },
      {
        unified: "1f9d1-1f3fd-200d-2696-fe0f",
        native: "🧑🏽‍⚖️"
      },
      {
        unified: "1f9d1-1f3fe-200d-2696-fe0f",
        native: "🧑🏾‍⚖️"
      },
      {
        unified: "1f9d1-1f3ff-200d-2696-fe0f",
        native: "🧑🏿‍⚖️"
      }
    ],
    version: 12.1
  },
  "male-judge": {
    id: "male-judge",
    name: "Man Judge",
    keywords: [
      "male",
      "justice",
      "court",
      "human"
    ],
    skins: [
      {
        unified: "1f468-200d-2696-fe0f",
        native: "👨‍⚖️"
      },
      {
        unified: "1f468-1f3fb-200d-2696-fe0f",
        native: "👨🏻‍⚖️"
      },
      {
        unified: "1f468-1f3fc-200d-2696-fe0f",
        native: "👨🏼‍⚖️"
      },
      {
        unified: "1f468-1f3fd-200d-2696-fe0f",
        native: "👨🏽‍⚖️"
      },
      {
        unified: "1f468-1f3fe-200d-2696-fe0f",
        native: "👨🏾‍⚖️"
      },
      {
        unified: "1f468-1f3ff-200d-2696-fe0f",
        native: "👨🏿‍⚖️"
      }
    ],
    version: 4
  },
  "female-judge": {
    id: "female-judge",
    name: "Woman Judge",
    keywords: [
      "female",
      "justice",
      "court",
      "human"
    ],
    skins: [
      {
        unified: "1f469-200d-2696-fe0f",
        native: "👩‍⚖️"
      },
      {
        unified: "1f469-1f3fb-200d-2696-fe0f",
        native: "👩🏻‍⚖️"
      },
      {
        unified: "1f469-1f3fc-200d-2696-fe0f",
        native: "👩🏼‍⚖️"
      },
      {
        unified: "1f469-1f3fd-200d-2696-fe0f",
        native: "👩🏽‍⚖️"
      },
      {
        unified: "1f469-1f3fe-200d-2696-fe0f",
        native: "👩🏾‍⚖️"
      },
      {
        unified: "1f469-1f3ff-200d-2696-fe0f",
        native: "👩🏿‍⚖️"
      }
    ],
    version: 4
  },
  farmer: {
    id: "farmer",
    name: "Farmer",
    keywords: [
      "crops"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f33e",
        native: "🧑‍🌾"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f33e",
        native: "🧑🏻‍🌾"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f33e",
        native: "🧑🏼‍🌾"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f33e",
        native: "🧑🏽‍🌾"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f33e",
        native: "🧑🏾‍🌾"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f33e",
        native: "🧑🏿‍🌾"
      }
    ],
    version: 12.1
  },
  "male-farmer": {
    id: "male-farmer",
    name: "Man Farmer",
    keywords: [
      "male",
      "rancher",
      "gardener",
      "human"
    ],
    skins: [
      {
        unified: "1f468-200d-1f33e",
        native: "👨‍🌾"
      },
      {
        unified: "1f468-1f3fb-200d-1f33e",
        native: "👨🏻‍🌾"
      },
      {
        unified: "1f468-1f3fc-200d-1f33e",
        native: "👨🏼‍🌾"
      },
      {
        unified: "1f468-1f3fd-200d-1f33e",
        native: "👨🏽‍🌾"
      },
      {
        unified: "1f468-1f3fe-200d-1f33e",
        native: "👨🏾‍🌾"
      },
      {
        unified: "1f468-1f3ff-200d-1f33e",
        native: "👨🏿‍🌾"
      }
    ],
    version: 4
  },
  "female-farmer": {
    id: "female-farmer",
    name: "Woman Farmer",
    keywords: [
      "female",
      "rancher",
      "gardener",
      "human"
    ],
    skins: [
      {
        unified: "1f469-200d-1f33e",
        native: "👩‍🌾"
      },
      {
        unified: "1f469-1f3fb-200d-1f33e",
        native: "👩🏻‍🌾"
      },
      {
        unified: "1f469-1f3fc-200d-1f33e",
        native: "👩🏼‍🌾"
      },
      {
        unified: "1f469-1f3fd-200d-1f33e",
        native: "👩🏽‍🌾"
      },
      {
        unified: "1f469-1f3fe-200d-1f33e",
        native: "👩🏾‍🌾"
      },
      {
        unified: "1f469-1f3ff-200d-1f33e",
        native: "👩🏿‍🌾"
      }
    ],
    version: 4
  },
  cook: {
    id: "cook",
    name: "Cook",
    keywords: [
      "food",
      "kitchen",
      "culinary"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f373",
        native: "🧑‍🍳"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f373",
        native: "🧑🏻‍🍳"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f373",
        native: "🧑🏼‍🍳"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f373",
        native: "🧑🏽‍🍳"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f373",
        native: "🧑🏾‍🍳"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f373",
        native: "🧑🏿‍🍳"
      }
    ],
    version: 12.1
  },
  "male-cook": {
    id: "male-cook",
    name: "Man Cook",
    keywords: [
      "male",
      "chef",
      "human"
    ],
    skins: [
      {
        unified: "1f468-200d-1f373",
        native: "👨‍🍳"
      },
      {
        unified: "1f468-1f3fb-200d-1f373",
        native: "👨🏻‍🍳"
      },
      {
        unified: "1f468-1f3fc-200d-1f373",
        native: "👨🏼‍🍳"
      },
      {
        unified: "1f468-1f3fd-200d-1f373",
        native: "👨🏽‍🍳"
      },
      {
        unified: "1f468-1f3fe-200d-1f373",
        native: "👨🏾‍🍳"
      },
      {
        unified: "1f468-1f3ff-200d-1f373",
        native: "👨🏿‍🍳"
      }
    ],
    version: 4
  },
  "female-cook": {
    id: "female-cook",
    name: "Woman Cook",
    keywords: [
      "female",
      "chef",
      "human"
    ],
    skins: [
      {
        unified: "1f469-200d-1f373",
        native: "👩‍🍳"
      },
      {
        unified: "1f469-1f3fb-200d-1f373",
        native: "👩🏻‍🍳"
      },
      {
        unified: "1f469-1f3fc-200d-1f373",
        native: "👩🏼‍🍳"
      },
      {
        unified: "1f469-1f3fd-200d-1f373",
        native: "👩🏽‍🍳"
      },
      {
        unified: "1f469-1f3fe-200d-1f373",
        native: "👩🏾‍🍳"
      },
      {
        unified: "1f469-1f3ff-200d-1f373",
        native: "👩🏿‍🍳"
      }
    ],
    version: 4
  },
  mechanic: {
    id: "mechanic",
    name: "Mechanic",
    keywords: [
      "worker",
      "technician"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f527",
        native: "🧑‍🔧"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f527",
        native: "🧑🏻‍🔧"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f527",
        native: "🧑🏼‍🔧"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f527",
        native: "🧑🏽‍🔧"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f527",
        native: "🧑🏾‍🔧"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f527",
        native: "🧑🏿‍🔧"
      }
    ],
    version: 12.1
  },
  "male-mechanic": {
    id: "male-mechanic",
    name: "Man Mechanic",
    keywords: [
      "male",
      "plumber",
      "human",
      "wrench"
    ],
    skins: [
      {
        unified: "1f468-200d-1f527",
        native: "👨‍🔧"
      },
      {
        unified: "1f468-1f3fb-200d-1f527",
        native: "👨🏻‍🔧"
      },
      {
        unified: "1f468-1f3fc-200d-1f527",
        native: "👨🏼‍🔧"
      },
      {
        unified: "1f468-1f3fd-200d-1f527",
        native: "👨🏽‍🔧"
      },
      {
        unified: "1f468-1f3fe-200d-1f527",
        native: "👨🏾‍🔧"
      },
      {
        unified: "1f468-1f3ff-200d-1f527",
        native: "👨🏿‍🔧"
      }
    ],
    version: 4
  },
  "female-mechanic": {
    id: "female-mechanic",
    name: "Woman Mechanic",
    keywords: [
      "female",
      "plumber",
      "human",
      "wrench"
    ],
    skins: [
      {
        unified: "1f469-200d-1f527",
        native: "👩‍🔧"
      },
      {
        unified: "1f469-1f3fb-200d-1f527",
        native: "👩🏻‍🔧"
      },
      {
        unified: "1f469-1f3fc-200d-1f527",
        native: "👩🏼‍🔧"
      },
      {
        unified: "1f469-1f3fd-200d-1f527",
        native: "👩🏽‍🔧"
      },
      {
        unified: "1f469-1f3fe-200d-1f527",
        native: "👩🏾‍🔧"
      },
      {
        unified: "1f469-1f3ff-200d-1f527",
        native: "👩🏿‍🔧"
      }
    ],
    version: 4
  },
  factory_worker: {
    id: "factory_worker",
    name: "Factory Worker",
    keywords: [
      "labor"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f3ed",
        native: "🧑‍🏭"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f3ed",
        native: "🧑🏻‍🏭"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f3ed",
        native: "🧑🏼‍🏭"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f3ed",
        native: "🧑🏽‍🏭"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f3ed",
        native: "🧑🏾‍🏭"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f3ed",
        native: "🧑🏿‍🏭"
      }
    ],
    version: 12.1
  },
  "male-factory-worker": {
    id: "male-factory-worker",
    name: "Man Factory Worker",
    keywords: [
      "male",
      "factory-worker",
      "assembly",
      "industrial",
      "human"
    ],
    skins: [
      {
        unified: "1f468-200d-1f3ed",
        native: "👨‍🏭"
      },
      {
        unified: "1f468-1f3fb-200d-1f3ed",
        native: "👨🏻‍🏭"
      },
      {
        unified: "1f468-1f3fc-200d-1f3ed",
        native: "👨🏼‍🏭"
      },
      {
        unified: "1f468-1f3fd-200d-1f3ed",
        native: "👨🏽‍🏭"
      },
      {
        unified: "1f468-1f3fe-200d-1f3ed",
        native: "👨🏾‍🏭"
      },
      {
        unified: "1f468-1f3ff-200d-1f3ed",
        native: "👨🏿‍🏭"
      }
    ],
    version: 4
  },
  "female-factory-worker": {
    id: "female-factory-worker",
    name: "Woman Factory Worker",
    keywords: [
      "female",
      "factory-worker",
      "assembly",
      "industrial",
      "human"
    ],
    skins: [
      {
        unified: "1f469-200d-1f3ed",
        native: "👩‍🏭"
      },
      {
        unified: "1f469-1f3fb-200d-1f3ed",
        native: "👩🏻‍🏭"
      },
      {
        unified: "1f469-1f3fc-200d-1f3ed",
        native: "👩🏼‍🏭"
      },
      {
        unified: "1f469-1f3fd-200d-1f3ed",
        native: "👩🏽‍🏭"
      },
      {
        unified: "1f469-1f3fe-200d-1f3ed",
        native: "👩🏾‍🏭"
      },
      {
        unified: "1f469-1f3ff-200d-1f3ed",
        native: "👩🏿‍🏭"
      }
    ],
    version: 4
  },
  office_worker: {
    id: "office_worker",
    name: "Office Worker",
    keywords: [
      "business"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f4bc",
        native: "🧑‍💼"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f4bc",
        native: "🧑🏻‍💼"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f4bc",
        native: "🧑🏼‍💼"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f4bc",
        native: "🧑🏽‍💼"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f4bc",
        native: "🧑🏾‍💼"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f4bc",
        native: "🧑🏿‍💼"
      }
    ],
    version: 12.1
  },
  "male-office-worker": {
    id: "male-office-worker",
    name: "Man Office Worker",
    keywords: [
      "male",
      "office-worker",
      "business",
      "manager",
      "human"
    ],
    skins: [
      {
        unified: "1f468-200d-1f4bc",
        native: "👨‍💼"
      },
      {
        unified: "1f468-1f3fb-200d-1f4bc",
        native: "👨🏻‍💼"
      },
      {
        unified: "1f468-1f3fc-200d-1f4bc",
        native: "👨🏼‍💼"
      },
      {
        unified: "1f468-1f3fd-200d-1f4bc",
        native: "👨🏽‍💼"
      },
      {
        unified: "1f468-1f3fe-200d-1f4bc",
        native: "👨🏾‍💼"
      },
      {
        unified: "1f468-1f3ff-200d-1f4bc",
        native: "👨🏿‍💼"
      }
    ],
    version: 4
  },
  "female-office-worker": {
    id: "female-office-worker",
    name: "Woman Office Worker",
    keywords: [
      "female",
      "office-worker",
      "business",
      "manager",
      "human"
    ],
    skins: [
      {
        unified: "1f469-200d-1f4bc",
        native: "👩‍💼"
      },
      {
        unified: "1f469-1f3fb-200d-1f4bc",
        native: "👩🏻‍💼"
      },
      {
        unified: "1f469-1f3fc-200d-1f4bc",
        native: "👩🏼‍💼"
      },
      {
        unified: "1f469-1f3fd-200d-1f4bc",
        native: "👩🏽‍💼"
      },
      {
        unified: "1f469-1f3fe-200d-1f4bc",
        native: "👩🏾‍💼"
      },
      {
        unified: "1f469-1f3ff-200d-1f4bc",
        native: "👩🏿‍💼"
      }
    ],
    version: 4
  },
  scientist: {
    id: "scientist",
    name: "Scientist",
    keywords: [
      "chemistry"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f52c",
        native: "🧑‍🔬"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f52c",
        native: "🧑🏻‍🔬"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f52c",
        native: "🧑🏼‍🔬"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f52c",
        native: "🧑🏽‍🔬"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f52c",
        native: "🧑🏾‍🔬"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f52c",
        native: "🧑🏿‍🔬"
      }
    ],
    version: 12.1
  },
  "male-scientist": {
    id: "male-scientist",
    name: "Man Scientist",
    keywords: [
      "male",
      "biologist",
      "chemist",
      "engineer",
      "physicist",
      "human"
    ],
    skins: [
      {
        unified: "1f468-200d-1f52c",
        native: "👨‍🔬"
      },
      {
        unified: "1f468-1f3fb-200d-1f52c",
        native: "👨🏻‍🔬"
      },
      {
        unified: "1f468-1f3fc-200d-1f52c",
        native: "👨🏼‍🔬"
      },
      {
        unified: "1f468-1f3fd-200d-1f52c",
        native: "👨🏽‍🔬"
      },
      {
        unified: "1f468-1f3fe-200d-1f52c",
        native: "👨🏾‍🔬"
      },
      {
        unified: "1f468-1f3ff-200d-1f52c",
        native: "👨🏿‍🔬"
      }
    ],
    version: 4
  },
  "female-scientist": {
    id: "female-scientist",
    name: "Woman Scientist",
    keywords: [
      "female",
      "biologist",
      "chemist",
      "engineer",
      "physicist",
      "human"
    ],
    skins: [
      {
        unified: "1f469-200d-1f52c",
        native: "👩‍🔬"
      },
      {
        unified: "1f469-1f3fb-200d-1f52c",
        native: "👩🏻‍🔬"
      },
      {
        unified: "1f469-1f3fc-200d-1f52c",
        native: "👩🏼‍🔬"
      },
      {
        unified: "1f469-1f3fd-200d-1f52c",
        native: "👩🏽‍🔬"
      },
      {
        unified: "1f469-1f3fe-200d-1f52c",
        native: "👩🏾‍🔬"
      },
      {
        unified: "1f469-1f3ff-200d-1f52c",
        native: "👩🏿‍🔬"
      }
    ],
    version: 4
  },
  technologist: {
    id: "technologist",
    name: "Technologist",
    keywords: [
      "computer"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f4bb",
        native: "🧑‍💻"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f4bb",
        native: "🧑🏻‍💻"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f4bb",
        native: "🧑🏼‍💻"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f4bb",
        native: "🧑🏽‍💻"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f4bb",
        native: "🧑🏾‍💻"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f4bb",
        native: "🧑🏿‍💻"
      }
    ],
    version: 12.1
  },
  "male-technologist": {
    id: "male-technologist",
    name: "Man Technologist",
    keywords: [
      "male",
      "coder",
      "developer",
      "engineer",
      "programmer",
      "software",
      "human",
      "laptop",
      "computer"
    ],
    skins: [
      {
        unified: "1f468-200d-1f4bb",
        native: "👨‍💻"
      },
      {
        unified: "1f468-1f3fb-200d-1f4bb",
        native: "👨🏻‍💻"
      },
      {
        unified: "1f468-1f3fc-200d-1f4bb",
        native: "👨🏼‍💻"
      },
      {
        unified: "1f468-1f3fd-200d-1f4bb",
        native: "👨🏽‍💻"
      },
      {
        unified: "1f468-1f3fe-200d-1f4bb",
        native: "👨🏾‍💻"
      },
      {
        unified: "1f468-1f3ff-200d-1f4bb",
        native: "👨🏿‍💻"
      }
    ],
    version: 4
  },
  "female-technologist": {
    id: "female-technologist",
    name: "Woman Technologist",
    keywords: [
      "female",
      "coder",
      "developer",
      "engineer",
      "programmer",
      "software",
      "human",
      "laptop",
      "computer"
    ],
    skins: [
      {
        unified: "1f469-200d-1f4bb",
        native: "👩‍💻"
      },
      {
        unified: "1f469-1f3fb-200d-1f4bb",
        native: "👩🏻‍💻"
      },
      {
        unified: "1f469-1f3fc-200d-1f4bb",
        native: "👩🏼‍💻"
      },
      {
        unified: "1f469-1f3fd-200d-1f4bb",
        native: "👩🏽‍💻"
      },
      {
        unified: "1f469-1f3fe-200d-1f4bb",
        native: "👩🏾‍💻"
      },
      {
        unified: "1f469-1f3ff-200d-1f4bb",
        native: "👩🏿‍💻"
      }
    ],
    version: 4
  },
  singer: {
    id: "singer",
    name: "Singer",
    keywords: [
      "song",
      "artist",
      "performer"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f3a4",
        native: "🧑‍🎤"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f3a4",
        native: "🧑🏻‍🎤"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f3a4",
        native: "🧑🏼‍🎤"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f3a4",
        native: "🧑🏽‍🎤"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f3a4",
        native: "🧑🏾‍🎤"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f3a4",
        native: "🧑🏿‍🎤"
      }
    ],
    version: 12.1
  },
  "male-singer": {
    id: "male-singer",
    name: "Man Singer",
    keywords: [
      "male",
      "rockstar",
      "entertainer",
      "human"
    ],
    skins: [
      {
        unified: "1f468-200d-1f3a4",
        native: "👨‍🎤"
      },
      {
        unified: "1f468-1f3fb-200d-1f3a4",
        native: "👨🏻‍🎤"
      },
      {
        unified: "1f468-1f3fc-200d-1f3a4",
        native: "👨🏼‍🎤"
      },
      {
        unified: "1f468-1f3fd-200d-1f3a4",
        native: "👨🏽‍🎤"
      },
      {
        unified: "1f468-1f3fe-200d-1f3a4",
        native: "👨🏾‍🎤"
      },
      {
        unified: "1f468-1f3ff-200d-1f3a4",
        native: "👨🏿‍🎤"
      }
    ],
    version: 4
  },
  "female-singer": {
    id: "female-singer",
    name: "Woman Singer",
    keywords: [
      "female",
      "rockstar",
      "entertainer",
      "human"
    ],
    skins: [
      {
        unified: "1f469-200d-1f3a4",
        native: "👩‍🎤"
      },
      {
        unified: "1f469-1f3fb-200d-1f3a4",
        native: "👩🏻‍🎤"
      },
      {
        unified: "1f469-1f3fc-200d-1f3a4",
        native: "👩🏼‍🎤"
      },
      {
        unified: "1f469-1f3fd-200d-1f3a4",
        native: "👩🏽‍🎤"
      },
      {
        unified: "1f469-1f3fe-200d-1f3a4",
        native: "👩🏾‍🎤"
      },
      {
        unified: "1f469-1f3ff-200d-1f3a4",
        native: "👩🏿‍🎤"
      }
    ],
    version: 4
  },
  artist: {
    id: "artist",
    name: "Artist",
    keywords: [
      "painting",
      "draw",
      "creativity"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f3a8",
        native: "🧑‍🎨"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f3a8",
        native: "🧑🏻‍🎨"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f3a8",
        native: "🧑🏼‍🎨"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f3a8",
        native: "🧑🏽‍🎨"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f3a8",
        native: "🧑🏾‍🎨"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f3a8",
        native: "🧑🏿‍🎨"
      }
    ],
    version: 12.1
  },
  "male-artist": {
    id: "male-artist",
    name: "Man Artist",
    keywords: [
      "male",
      "painter",
      "human"
    ],
    skins: [
      {
        unified: "1f468-200d-1f3a8",
        native: "👨‍🎨"
      },
      {
        unified: "1f468-1f3fb-200d-1f3a8",
        native: "👨🏻‍🎨"
      },
      {
        unified: "1f468-1f3fc-200d-1f3a8",
        native: "👨🏼‍🎨"
      },
      {
        unified: "1f468-1f3fd-200d-1f3a8",
        native: "👨🏽‍🎨"
      },
      {
        unified: "1f468-1f3fe-200d-1f3a8",
        native: "👨🏾‍🎨"
      },
      {
        unified: "1f468-1f3ff-200d-1f3a8",
        native: "👨🏿‍🎨"
      }
    ],
    version: 4
  },
  "female-artist": {
    id: "female-artist",
    name: "Woman Artist",
    keywords: [
      "female",
      "painter",
      "human"
    ],
    skins: [
      {
        unified: "1f469-200d-1f3a8",
        native: "👩‍🎨"
      },
      {
        unified: "1f469-1f3fb-200d-1f3a8",
        native: "👩🏻‍🎨"
      },
      {
        unified: "1f469-1f3fc-200d-1f3a8",
        native: "👩🏼‍🎨"
      },
      {
        unified: "1f469-1f3fd-200d-1f3a8",
        native: "👩🏽‍🎨"
      },
      {
        unified: "1f469-1f3fe-200d-1f3a8",
        native: "👩🏾‍🎨"
      },
      {
        unified: "1f469-1f3ff-200d-1f3a8",
        native: "👩🏿‍🎨"
      }
    ],
    version: 4
  },
  pilot: {
    id: "pilot",
    name: "Pilot",
    keywords: [
      "fly",
      "plane",
      "airplane"
    ],
    skins: [
      {
        unified: "1f9d1-200d-2708-fe0f",
        native: "🧑‍✈️"
      },
      {
        unified: "1f9d1-1f3fb-200d-2708-fe0f",
        native: "🧑🏻‍✈️"
      },
      {
        unified: "1f9d1-1f3fc-200d-2708-fe0f",
        native: "🧑🏼‍✈️"
      },
      {
        unified: "1f9d1-1f3fd-200d-2708-fe0f",
        native: "🧑🏽‍✈️"
      },
      {
        unified: "1f9d1-1f3fe-200d-2708-fe0f",
        native: "🧑🏾‍✈️"
      },
      {
        unified: "1f9d1-1f3ff-200d-2708-fe0f",
        native: "🧑🏿‍✈️"
      }
    ],
    version: 12.1
  },
  "male-pilot": {
    id: "male-pilot",
    name: "Man Pilot",
    keywords: [
      "male",
      "aviator",
      "plane",
      "human"
    ],
    skins: [
      {
        unified: "1f468-200d-2708-fe0f",
        native: "👨‍✈️"
      },
      {
        unified: "1f468-1f3fb-200d-2708-fe0f",
        native: "👨🏻‍✈️"
      },
      {
        unified: "1f468-1f3fc-200d-2708-fe0f",
        native: "👨🏼‍✈️"
      },
      {
        unified: "1f468-1f3fd-200d-2708-fe0f",
        native: "👨🏽‍✈️"
      },
      {
        unified: "1f468-1f3fe-200d-2708-fe0f",
        native: "👨🏾‍✈️"
      },
      {
        unified: "1f468-1f3ff-200d-2708-fe0f",
        native: "👨🏿‍✈️"
      }
    ],
    version: 4
  },
  "female-pilot": {
    id: "female-pilot",
    name: "Woman Pilot",
    keywords: [
      "female",
      "aviator",
      "plane",
      "human"
    ],
    skins: [
      {
        unified: "1f469-200d-2708-fe0f",
        native: "👩‍✈️"
      },
      {
        unified: "1f469-1f3fb-200d-2708-fe0f",
        native: "👩🏻‍✈️"
      },
      {
        unified: "1f469-1f3fc-200d-2708-fe0f",
        native: "👩🏼‍✈️"
      },
      {
        unified: "1f469-1f3fd-200d-2708-fe0f",
        native: "👩🏽‍✈️"
      },
      {
        unified: "1f469-1f3fe-200d-2708-fe0f",
        native: "👩🏾‍✈️"
      },
      {
        unified: "1f469-1f3ff-200d-2708-fe0f",
        native: "👩🏿‍✈️"
      }
    ],
    version: 4
  },
  astronaut: {
    id: "astronaut",
    name: "Astronaut",
    keywords: [
      "outerspace"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f680",
        native: "🧑‍🚀"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f680",
        native: "🧑🏻‍🚀"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f680",
        native: "🧑🏼‍🚀"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f680",
        native: "🧑🏽‍🚀"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f680",
        native: "🧑🏾‍🚀"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f680",
        native: "🧑🏿‍🚀"
      }
    ],
    version: 12.1
  },
  "male-astronaut": {
    id: "male-astronaut",
    name: "Man Astronaut",
    keywords: [
      "male",
      "space",
      "rocket",
      "human"
    ],
    skins: [
      {
        unified: "1f468-200d-1f680",
        native: "👨‍🚀"
      },
      {
        unified: "1f468-1f3fb-200d-1f680",
        native: "👨🏻‍🚀"
      },
      {
        unified: "1f468-1f3fc-200d-1f680",
        native: "👨🏼‍🚀"
      },
      {
        unified: "1f468-1f3fd-200d-1f680",
        native: "👨🏽‍🚀"
      },
      {
        unified: "1f468-1f3fe-200d-1f680",
        native: "👨🏾‍🚀"
      },
      {
        unified: "1f468-1f3ff-200d-1f680",
        native: "👨🏿‍🚀"
      }
    ],
    version: 4
  },
  "female-astronaut": {
    id: "female-astronaut",
    name: "Woman Astronaut",
    keywords: [
      "female",
      "space",
      "rocket",
      "human"
    ],
    skins: [
      {
        unified: "1f469-200d-1f680",
        native: "👩‍🚀"
      },
      {
        unified: "1f469-1f3fb-200d-1f680",
        native: "👩🏻‍🚀"
      },
      {
        unified: "1f469-1f3fc-200d-1f680",
        native: "👩🏼‍🚀"
      },
      {
        unified: "1f469-1f3fd-200d-1f680",
        native: "👩🏽‍🚀"
      },
      {
        unified: "1f469-1f3fe-200d-1f680",
        native: "👩🏾‍🚀"
      },
      {
        unified: "1f469-1f3ff-200d-1f680",
        native: "👩🏿‍🚀"
      }
    ],
    version: 4
  },
  firefighter: {
    id: "firefighter",
    name: "Firefighter",
    keywords: [
      "fire"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f692",
        native: "🧑‍🚒"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f692",
        native: "🧑🏻‍🚒"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f692",
        native: "🧑🏼‍🚒"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f692",
        native: "🧑🏽‍🚒"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f692",
        native: "🧑🏾‍🚒"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f692",
        native: "🧑🏿‍🚒"
      }
    ],
    version: 12.1
  },
  "male-firefighter": {
    id: "male-firefighter",
    name: "Man Firefighter",
    keywords: [
      "male",
      "fireman",
      "human"
    ],
    skins: [
      {
        unified: "1f468-200d-1f692",
        native: "👨‍🚒"
      },
      {
        unified: "1f468-1f3fb-200d-1f692",
        native: "👨🏻‍🚒"
      },
      {
        unified: "1f468-1f3fc-200d-1f692",
        native: "👨🏼‍🚒"
      },
      {
        unified: "1f468-1f3fd-200d-1f692",
        native: "👨🏽‍🚒"
      },
      {
        unified: "1f468-1f3fe-200d-1f692",
        native: "👨🏾‍🚒"
      },
      {
        unified: "1f468-1f3ff-200d-1f692",
        native: "👨🏿‍🚒"
      }
    ],
    version: 4
  },
  "female-firefighter": {
    id: "female-firefighter",
    name: "Woman Firefighter",
    keywords: [
      "female",
      "fireman",
      "human"
    ],
    skins: [
      {
        unified: "1f469-200d-1f692",
        native: "👩‍🚒"
      },
      {
        unified: "1f469-1f3fb-200d-1f692",
        native: "👩🏻‍🚒"
      },
      {
        unified: "1f469-1f3fc-200d-1f692",
        native: "👩🏼‍🚒"
      },
      {
        unified: "1f469-1f3fd-200d-1f692",
        native: "👩🏽‍🚒"
      },
      {
        unified: "1f469-1f3fe-200d-1f692",
        native: "👩🏾‍🚒"
      },
      {
        unified: "1f469-1f3ff-200d-1f692",
        native: "👩🏿‍🚒"
      }
    ],
    version: 4
  },
  cop: {
    id: "cop",
    name: "Police Officer",
    keywords: [
      "cop"
    ],
    skins: [
      {
        unified: "1f46e",
        native: "👮"
      },
      {
        unified: "1f46e-1f3fb",
        native: "👮🏻"
      },
      {
        unified: "1f46e-1f3fc",
        native: "👮🏼"
      },
      {
        unified: "1f46e-1f3fd",
        native: "👮🏽"
      },
      {
        unified: "1f46e-1f3fe",
        native: "👮🏾"
      },
      {
        unified: "1f46e-1f3ff",
        native: "👮🏿"
      }
    ],
    version: 1
  },
  "male-police-officer": {
    id: "male-police-officer",
    name: "Man Police Officer",
    keywords: [
      "male",
      "police-officer",
      "law",
      "legal",
      "enforcement",
      "arrest",
      "911"
    ],
    skins: [
      {
        unified: "1f46e-200d-2642-fe0f",
        native: "👮‍♂️"
      },
      {
        unified: "1f46e-1f3fb-200d-2642-fe0f",
        native: "👮🏻‍♂️"
      },
      {
        unified: "1f46e-1f3fc-200d-2642-fe0f",
        native: "👮🏼‍♂️"
      },
      {
        unified: "1f46e-1f3fd-200d-2642-fe0f",
        native: "👮🏽‍♂️"
      },
      {
        unified: "1f46e-1f3fe-200d-2642-fe0f",
        native: "👮🏾‍♂️"
      },
      {
        unified: "1f46e-1f3ff-200d-2642-fe0f",
        native: "👮🏿‍♂️"
      }
    ],
    version: 4
  },
  "female-police-officer": {
    id: "female-police-officer",
    name: "Woman Police Officer",
    keywords: [
      "female",
      "police-officer",
      "law",
      "legal",
      "enforcement",
      "arrest",
      "911"
    ],
    skins: [
      {
        unified: "1f46e-200d-2640-fe0f",
        native: "👮‍♀️"
      },
      {
        unified: "1f46e-1f3fb-200d-2640-fe0f",
        native: "👮🏻‍♀️"
      },
      {
        unified: "1f46e-1f3fc-200d-2640-fe0f",
        native: "👮🏼‍♀️"
      },
      {
        unified: "1f46e-1f3fd-200d-2640-fe0f",
        native: "👮🏽‍♀️"
      },
      {
        unified: "1f46e-1f3fe-200d-2640-fe0f",
        native: "👮🏾‍♀️"
      },
      {
        unified: "1f46e-1f3ff-200d-2640-fe0f",
        native: "👮🏿‍♀️"
      }
    ],
    version: 4
  },
  sleuth_or_spy: {
    id: "sleuth_or_spy",
    name: "Detective",
    keywords: [
      "sleuth",
      "or",
      "spy",
      "human"
    ],
    skins: [
      {
        unified: "1f575-fe0f",
        native: "🕵️"
      },
      {
        unified: "1f575-1f3fb",
        native: "🕵🏻"
      },
      {
        unified: "1f575-1f3fc",
        native: "🕵🏼"
      },
      {
        unified: "1f575-1f3fd",
        native: "🕵🏽"
      },
      {
        unified: "1f575-1f3fe",
        native: "🕵🏾"
      },
      {
        unified: "1f575-1f3ff",
        native: "🕵🏿"
      }
    ],
    version: 1
  },
  "male-detective": {
    id: "male-detective",
    name: "Man Detective",
    keywords: [
      "male",
      "crime"
    ],
    skins: [
      {
        unified: "1f575-fe0f-200d-2642-fe0f",
        native: "🕵️‍♂️"
      },
      {
        unified: "1f575-1f3fb-200d-2642-fe0f",
        native: "🕵🏻‍♂️"
      },
      {
        unified: "1f575-1f3fc-200d-2642-fe0f",
        native: "🕵🏼‍♂️"
      },
      {
        unified: "1f575-1f3fd-200d-2642-fe0f",
        native: "🕵🏽‍♂️"
      },
      {
        unified: "1f575-1f3fe-200d-2642-fe0f",
        native: "🕵🏾‍♂️"
      },
      {
        unified: "1f575-1f3ff-200d-2642-fe0f",
        native: "🕵🏿‍♂️"
      }
    ],
    version: 4
  },
  "female-detective": {
    id: "female-detective",
    name: "Woman Detective",
    keywords: [
      "female",
      "human",
      "spy"
    ],
    skins: [
      {
        unified: "1f575-fe0f-200d-2640-fe0f",
        native: "🕵️‍♀️"
      },
      {
        unified: "1f575-1f3fb-200d-2640-fe0f",
        native: "🕵🏻‍♀️"
      },
      {
        unified: "1f575-1f3fc-200d-2640-fe0f",
        native: "🕵🏼‍♀️"
      },
      {
        unified: "1f575-1f3fd-200d-2640-fe0f",
        native: "🕵🏽‍♀️"
      },
      {
        unified: "1f575-1f3fe-200d-2640-fe0f",
        native: "🕵🏾‍♀️"
      },
      {
        unified: "1f575-1f3ff-200d-2640-fe0f",
        native: "🕵🏿‍♀️"
      }
    ],
    version: 4
  },
  guardsman: {
    id: "guardsman",
    name: "Guard",
    keywords: [
      "guardsman",
      "protect"
    ],
    skins: [
      {
        unified: "1f482",
        native: "💂"
      },
      {
        unified: "1f482-1f3fb",
        native: "💂🏻"
      },
      {
        unified: "1f482-1f3fc",
        native: "💂🏼"
      },
      {
        unified: "1f482-1f3fd",
        native: "💂🏽"
      },
      {
        unified: "1f482-1f3fe",
        native: "💂🏾"
      },
      {
        unified: "1f482-1f3ff",
        native: "💂🏿"
      }
    ],
    version: 1
  },
  "male-guard": {
    id: "male-guard",
    name: "Man Guard",
    keywords: [
      "male",
      "uk",
      "gb",
      "british",
      "guy",
      "royal"
    ],
    skins: [
      {
        unified: "1f482-200d-2642-fe0f",
        native: "💂‍♂️"
      },
      {
        unified: "1f482-1f3fb-200d-2642-fe0f",
        native: "💂🏻‍♂️"
      },
      {
        unified: "1f482-1f3fc-200d-2642-fe0f",
        native: "💂🏼‍♂️"
      },
      {
        unified: "1f482-1f3fd-200d-2642-fe0f",
        native: "💂🏽‍♂️"
      },
      {
        unified: "1f482-1f3fe-200d-2642-fe0f",
        native: "💂🏾‍♂️"
      },
      {
        unified: "1f482-1f3ff-200d-2642-fe0f",
        native: "💂🏿‍♂️"
      }
    ],
    version: 4
  },
  "female-guard": {
    id: "female-guard",
    name: "Woman Guard",
    keywords: [
      "female",
      "uk",
      "gb",
      "british",
      "royal"
    ],
    skins: [
      {
        unified: "1f482-200d-2640-fe0f",
        native: "💂‍♀️"
      },
      {
        unified: "1f482-1f3fb-200d-2640-fe0f",
        native: "💂🏻‍♀️"
      },
      {
        unified: "1f482-1f3fc-200d-2640-fe0f",
        native: "💂🏼‍♀️"
      },
      {
        unified: "1f482-1f3fd-200d-2640-fe0f",
        native: "💂🏽‍♀️"
      },
      {
        unified: "1f482-1f3fe-200d-2640-fe0f",
        native: "💂🏾‍♀️"
      },
      {
        unified: "1f482-1f3ff-200d-2640-fe0f",
        native: "💂🏿‍♀️"
      }
    ],
    version: 4
  },
  ninja: {
    id: "ninja",
    name: "Ninja",
    keywords: [
      "ninjutsu",
      "skills",
      "japanese"
    ],
    skins: [
      {
        unified: "1f977",
        native: "🥷"
      },
      {
        unified: "1f977-1f3fb",
        native: "🥷🏻"
      },
      {
        unified: "1f977-1f3fc",
        native: "🥷🏼"
      },
      {
        unified: "1f977-1f3fd",
        native: "🥷🏽"
      },
      {
        unified: "1f977-1f3fe",
        native: "🥷🏾"
      },
      {
        unified: "1f977-1f3ff",
        native: "🥷🏿"
      }
    ],
    version: 13
  },
  construction_worker: {
    id: "construction_worker",
    name: "Construction Worker",
    keywords: [
      "labor",
      "build"
    ],
    skins: [
      {
        unified: "1f477",
        native: "👷"
      },
      {
        unified: "1f477-1f3fb",
        native: "👷🏻"
      },
      {
        unified: "1f477-1f3fc",
        native: "👷🏼"
      },
      {
        unified: "1f477-1f3fd",
        native: "👷🏽"
      },
      {
        unified: "1f477-1f3fe",
        native: "👷🏾"
      },
      {
        unified: "1f477-1f3ff",
        native: "👷🏿"
      }
    ],
    version: 1
  },
  "male-construction-worker": {
    id: "male-construction-worker",
    name: "Man Construction Worker",
    keywords: [
      "male",
      "construction-worker",
      "human",
      "wip",
      "guy",
      "build",
      "labor"
    ],
    skins: [
      {
        unified: "1f477-200d-2642-fe0f",
        native: "👷‍♂️"
      },
      {
        unified: "1f477-1f3fb-200d-2642-fe0f",
        native: "👷🏻‍♂️"
      },
      {
        unified: "1f477-1f3fc-200d-2642-fe0f",
        native: "👷🏼‍♂️"
      },
      {
        unified: "1f477-1f3fd-200d-2642-fe0f",
        native: "👷🏽‍♂️"
      },
      {
        unified: "1f477-1f3fe-200d-2642-fe0f",
        native: "👷🏾‍♂️"
      },
      {
        unified: "1f477-1f3ff-200d-2642-fe0f",
        native: "👷🏿‍♂️"
      }
    ],
    version: 4
  },
  "female-construction-worker": {
    id: "female-construction-worker",
    name: "Woman Construction Worker",
    keywords: [
      "female",
      "construction-worker",
      "human",
      "wip",
      "build",
      "labor"
    ],
    skins: [
      {
        unified: "1f477-200d-2640-fe0f",
        native: "👷‍♀️"
      },
      {
        unified: "1f477-1f3fb-200d-2640-fe0f",
        native: "👷🏻‍♀️"
      },
      {
        unified: "1f477-1f3fc-200d-2640-fe0f",
        native: "👷🏼‍♀️"
      },
      {
        unified: "1f477-1f3fd-200d-2640-fe0f",
        native: "👷🏽‍♀️"
      },
      {
        unified: "1f477-1f3fe-200d-2640-fe0f",
        native: "👷🏾‍♀️"
      },
      {
        unified: "1f477-1f3ff-200d-2640-fe0f",
        native: "👷🏿‍♀️"
      }
    ],
    version: 4
  },
  person_with_crown: {
    id: "person_with_crown",
    name: "Person with Crown",
    keywords: [
      "royalty",
      "power"
    ],
    skins: [
      {
        unified: "1fac5",
        native: "🫅"
      },
      {
        unified: "1fac5-1f3fb",
        native: "🫅🏻"
      },
      {
        unified: "1fac5-1f3fc",
        native: "🫅🏼"
      },
      {
        unified: "1fac5-1f3fd",
        native: "🫅🏽"
      },
      {
        unified: "1fac5-1f3fe",
        native: "🫅🏾"
      },
      {
        unified: "1fac5-1f3ff",
        native: "🫅🏿"
      }
    ],
    version: 14
  },
  prince: {
    id: "prince",
    name: "Prince",
    keywords: [
      "boy",
      "man",
      "male",
      "crown",
      "royal",
      "king"
    ],
    skins: [
      {
        unified: "1f934",
        native: "🤴"
      },
      {
        unified: "1f934-1f3fb",
        native: "🤴🏻"
      },
      {
        unified: "1f934-1f3fc",
        native: "🤴🏼"
      },
      {
        unified: "1f934-1f3fd",
        native: "🤴🏽"
      },
      {
        unified: "1f934-1f3fe",
        native: "🤴🏾"
      },
      {
        unified: "1f934-1f3ff",
        native: "🤴🏿"
      }
    ],
    version: 3
  },
  princess: {
    id: "princess",
    name: "Princess",
    keywords: [
      "girl",
      "woman",
      "female",
      "blond",
      "crown",
      "royal",
      "queen"
    ],
    skins: [
      {
        unified: "1f478",
        native: "👸"
      },
      {
        unified: "1f478-1f3fb",
        native: "👸🏻"
      },
      {
        unified: "1f478-1f3fc",
        native: "👸🏼"
      },
      {
        unified: "1f478-1f3fd",
        native: "👸🏽"
      },
      {
        unified: "1f478-1f3fe",
        native: "👸🏾"
      },
      {
        unified: "1f478-1f3ff",
        native: "👸🏿"
      }
    ],
    version: 1
  },
  man_with_turban: {
    id: "man_with_turban",
    name: "Man with Turban",
    keywords: [
      "person",
      "wearing",
      "headdress"
    ],
    skins: [
      {
        unified: "1f473",
        native: "👳"
      },
      {
        unified: "1f473-1f3fb",
        native: "👳🏻"
      },
      {
        unified: "1f473-1f3fc",
        native: "👳🏼"
      },
      {
        unified: "1f473-1f3fd",
        native: "👳🏽"
      },
      {
        unified: "1f473-1f3fe",
        native: "👳🏾"
      },
      {
        unified: "1f473-1f3ff",
        native: "👳🏿"
      }
    ],
    version: 1
  },
  "man-wearing-turban": {
    id: "man-wearing-turban",
    name: "Man Wearing Turban",
    keywords: [
      "wearing-turban",
      "male",
      "indian",
      "hinduism",
      "arabs"
    ],
    skins: [
      {
        unified: "1f473-200d-2642-fe0f",
        native: "👳‍♂️"
      },
      {
        unified: "1f473-1f3fb-200d-2642-fe0f",
        native: "👳🏻‍♂️"
      },
      {
        unified: "1f473-1f3fc-200d-2642-fe0f",
        native: "👳🏼‍♂️"
      },
      {
        unified: "1f473-1f3fd-200d-2642-fe0f",
        native: "👳🏽‍♂️"
      },
      {
        unified: "1f473-1f3fe-200d-2642-fe0f",
        native: "👳🏾‍♂️"
      },
      {
        unified: "1f473-1f3ff-200d-2642-fe0f",
        native: "👳🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-wearing-turban": {
    id: "woman-wearing-turban",
    name: "Woman Wearing Turban",
    keywords: [
      "wearing-turban",
      "female",
      "indian",
      "hinduism",
      "arabs"
    ],
    skins: [
      {
        unified: "1f473-200d-2640-fe0f",
        native: "👳‍♀️"
      },
      {
        unified: "1f473-1f3fb-200d-2640-fe0f",
        native: "👳🏻‍♀️"
      },
      {
        unified: "1f473-1f3fc-200d-2640-fe0f",
        native: "👳🏼‍♀️"
      },
      {
        unified: "1f473-1f3fd-200d-2640-fe0f",
        native: "👳🏽‍♀️"
      },
      {
        unified: "1f473-1f3fe-200d-2640-fe0f",
        native: "👳🏾‍♀️"
      },
      {
        unified: "1f473-1f3ff-200d-2640-fe0f",
        native: "👳🏿‍♀️"
      }
    ],
    version: 4
  },
  man_with_gua_pi_mao: {
    id: "man_with_gua_pi_mao",
    name: "Man with Gua Pi Mao",
    keywords: [
      "skullcap",
      "male",
      "boy",
      "chinese"
    ],
    skins: [
      {
        unified: "1f472",
        native: "👲"
      },
      {
        unified: "1f472-1f3fb",
        native: "👲🏻"
      },
      {
        unified: "1f472-1f3fc",
        native: "👲🏼"
      },
      {
        unified: "1f472-1f3fd",
        native: "👲🏽"
      },
      {
        unified: "1f472-1f3fe",
        native: "👲🏾"
      },
      {
        unified: "1f472-1f3ff",
        native: "👲🏿"
      }
    ],
    version: 1
  },
  person_with_headscarf: {
    id: "person_with_headscarf",
    name: "Woman with Headscarf",
    keywords: [
      "person",
      "female",
      "hijab",
      "mantilla",
      "tichel"
    ],
    skins: [
      {
        unified: "1f9d5",
        native: "🧕"
      },
      {
        unified: "1f9d5-1f3fb",
        native: "🧕🏻"
      },
      {
        unified: "1f9d5-1f3fc",
        native: "🧕🏼"
      },
      {
        unified: "1f9d5-1f3fd",
        native: "🧕🏽"
      },
      {
        unified: "1f9d5-1f3fe",
        native: "🧕🏾"
      },
      {
        unified: "1f9d5-1f3ff",
        native: "🧕🏿"
      }
    ],
    version: 5
  },
  person_in_tuxedo: {
    id: "person_in_tuxedo",
    name: "Man in Tuxedo",
    keywords: [
      "person",
      "couple",
      "marriage",
      "wedding",
      "groom"
    ],
    skins: [
      {
        unified: "1f935",
        native: "🤵"
      },
      {
        unified: "1f935-1f3fb",
        native: "🤵🏻"
      },
      {
        unified: "1f935-1f3fc",
        native: "🤵🏼"
      },
      {
        unified: "1f935-1f3fd",
        native: "🤵🏽"
      },
      {
        unified: "1f935-1f3fe",
        native: "🤵🏾"
      },
      {
        unified: "1f935-1f3ff",
        native: "🤵🏿"
      }
    ],
    version: 3
  },
  man_in_tuxedo: {
    id: "man_in_tuxedo",
    name: "Man in Tuxedo",
    keywords: [
      "formal",
      "fashion"
    ],
    skins: [
      {
        unified: "1f935-200d-2642-fe0f",
        native: "🤵‍♂️"
      },
      {
        unified: "1f935-1f3fb-200d-2642-fe0f",
        native: "🤵🏻‍♂️"
      },
      {
        unified: "1f935-1f3fc-200d-2642-fe0f",
        native: "🤵🏼‍♂️"
      },
      {
        unified: "1f935-1f3fd-200d-2642-fe0f",
        native: "🤵🏽‍♂️"
      },
      {
        unified: "1f935-1f3fe-200d-2642-fe0f",
        native: "🤵🏾‍♂️"
      },
      {
        unified: "1f935-1f3ff-200d-2642-fe0f",
        native: "🤵🏿‍♂️"
      }
    ],
    version: 13
  },
  woman_in_tuxedo: {
    id: "woman_in_tuxedo",
    name: "Woman in Tuxedo",
    keywords: [
      "formal",
      "fashion"
    ],
    skins: [
      {
        unified: "1f935-200d-2640-fe0f",
        native: "🤵‍♀️"
      },
      {
        unified: "1f935-1f3fb-200d-2640-fe0f",
        native: "🤵🏻‍♀️"
      },
      {
        unified: "1f935-1f3fc-200d-2640-fe0f",
        native: "🤵🏼‍♀️"
      },
      {
        unified: "1f935-1f3fd-200d-2640-fe0f",
        native: "🤵🏽‍♀️"
      },
      {
        unified: "1f935-1f3fe-200d-2640-fe0f",
        native: "🤵🏾‍♀️"
      },
      {
        unified: "1f935-1f3ff-200d-2640-fe0f",
        native: "🤵🏿‍♀️"
      }
    ],
    version: 13
  },
  bride_with_veil: {
    id: "bride_with_veil",
    name: "Bride with Veil",
    keywords: [
      "couple",
      "marriage",
      "wedding",
      "woman"
    ],
    skins: [
      {
        unified: "1f470",
        native: "👰"
      },
      {
        unified: "1f470-1f3fb",
        native: "👰🏻"
      },
      {
        unified: "1f470-1f3fc",
        native: "👰🏼"
      },
      {
        unified: "1f470-1f3fd",
        native: "👰🏽"
      },
      {
        unified: "1f470-1f3fe",
        native: "👰🏾"
      },
      {
        unified: "1f470-1f3ff",
        native: "👰🏿"
      }
    ],
    version: 1
  },
  man_with_veil: {
    id: "man_with_veil",
    name: "Man with Veil",
    keywords: [
      "wedding",
      "marriage"
    ],
    skins: [
      {
        unified: "1f470-200d-2642-fe0f",
        native: "👰‍♂️"
      },
      {
        unified: "1f470-1f3fb-200d-2642-fe0f",
        native: "👰🏻‍♂️"
      },
      {
        unified: "1f470-1f3fc-200d-2642-fe0f",
        native: "👰🏼‍♂️"
      },
      {
        unified: "1f470-1f3fd-200d-2642-fe0f",
        native: "👰🏽‍♂️"
      },
      {
        unified: "1f470-1f3fe-200d-2642-fe0f",
        native: "👰🏾‍♂️"
      },
      {
        unified: "1f470-1f3ff-200d-2642-fe0f",
        native: "👰🏿‍♂️"
      }
    ],
    version: 13
  },
  woman_with_veil: {
    id: "woman_with_veil",
    name: "Woman with Veil",
    keywords: [
      "wedding",
      "marriage"
    ],
    skins: [
      {
        unified: "1f470-200d-2640-fe0f",
        native: "👰‍♀️"
      },
      {
        unified: "1f470-1f3fb-200d-2640-fe0f",
        native: "👰🏻‍♀️"
      },
      {
        unified: "1f470-1f3fc-200d-2640-fe0f",
        native: "👰🏼‍♀️"
      },
      {
        unified: "1f470-1f3fd-200d-2640-fe0f",
        native: "👰🏽‍♀️"
      },
      {
        unified: "1f470-1f3fe-200d-2640-fe0f",
        native: "👰🏾‍♀️"
      },
      {
        unified: "1f470-1f3ff-200d-2640-fe0f",
        native: "👰🏿‍♀️"
      }
    ],
    version: 13
  },
  pregnant_woman: {
    id: "pregnant_woman",
    name: "Pregnant Woman",
    keywords: [
      "baby"
    ],
    skins: [
      {
        unified: "1f930",
        native: "🤰"
      },
      {
        unified: "1f930-1f3fb",
        native: "🤰🏻"
      },
      {
        unified: "1f930-1f3fc",
        native: "🤰🏼"
      },
      {
        unified: "1f930-1f3fd",
        native: "🤰🏽"
      },
      {
        unified: "1f930-1f3fe",
        native: "🤰🏾"
      },
      {
        unified: "1f930-1f3ff",
        native: "🤰🏿"
      }
    ],
    version: 3
  },
  pregnant_man: {
    id: "pregnant_man",
    name: "Pregnant Man",
    keywords: [
      "baby",
      "belly"
    ],
    skins: [
      {
        unified: "1fac3",
        native: "🫃"
      },
      {
        unified: "1fac3-1f3fb",
        native: "🫃🏻"
      },
      {
        unified: "1fac3-1f3fc",
        native: "🫃🏼"
      },
      {
        unified: "1fac3-1f3fd",
        native: "🫃🏽"
      },
      {
        unified: "1fac3-1f3fe",
        native: "🫃🏾"
      },
      {
        unified: "1fac3-1f3ff",
        native: "🫃🏿"
      }
    ],
    version: 14
  },
  pregnant_person: {
    id: "pregnant_person",
    name: "Pregnant Person",
    keywords: [
      "baby",
      "belly"
    ],
    skins: [
      {
        unified: "1fac4",
        native: "🫄"
      },
      {
        unified: "1fac4-1f3fb",
        native: "🫄🏻"
      },
      {
        unified: "1fac4-1f3fc",
        native: "🫄🏼"
      },
      {
        unified: "1fac4-1f3fd",
        native: "🫄🏽"
      },
      {
        unified: "1fac4-1f3fe",
        native: "🫄🏾"
      },
      {
        unified: "1fac4-1f3ff",
        native: "🫄🏿"
      }
    ],
    version: 14
  },
  "breast-feeding": {
    id: "breast-feeding",
    name: "Breast-Feeding",
    keywords: [
      "breast",
      "feeding",
      "nursing",
      "baby"
    ],
    skins: [
      {
        unified: "1f931",
        native: "🤱"
      },
      {
        unified: "1f931-1f3fb",
        native: "🤱🏻"
      },
      {
        unified: "1f931-1f3fc",
        native: "🤱🏼"
      },
      {
        unified: "1f931-1f3fd",
        native: "🤱🏽"
      },
      {
        unified: "1f931-1f3fe",
        native: "🤱🏾"
      },
      {
        unified: "1f931-1f3ff",
        native: "🤱🏿"
      }
    ],
    version: 5
  },
  woman_feeding_baby: {
    id: "woman_feeding_baby",
    name: "Woman Feeding Baby",
    keywords: [
      "birth",
      "food"
    ],
    skins: [
      {
        unified: "1f469-200d-1f37c",
        native: "👩‍🍼"
      },
      {
        unified: "1f469-1f3fb-200d-1f37c",
        native: "👩🏻‍🍼"
      },
      {
        unified: "1f469-1f3fc-200d-1f37c",
        native: "👩🏼‍🍼"
      },
      {
        unified: "1f469-1f3fd-200d-1f37c",
        native: "👩🏽‍🍼"
      },
      {
        unified: "1f469-1f3fe-200d-1f37c",
        native: "👩🏾‍🍼"
      },
      {
        unified: "1f469-1f3ff-200d-1f37c",
        native: "👩🏿‍🍼"
      }
    ],
    version: 13
  },
  man_feeding_baby: {
    id: "man_feeding_baby",
    name: "Man Feeding Baby",
    keywords: [
      "birth",
      "food"
    ],
    skins: [
      {
        unified: "1f468-200d-1f37c",
        native: "👨‍🍼"
      },
      {
        unified: "1f468-1f3fb-200d-1f37c",
        native: "👨🏻‍🍼"
      },
      {
        unified: "1f468-1f3fc-200d-1f37c",
        native: "👨🏼‍🍼"
      },
      {
        unified: "1f468-1f3fd-200d-1f37c",
        native: "👨🏽‍🍼"
      },
      {
        unified: "1f468-1f3fe-200d-1f37c",
        native: "👨🏾‍🍼"
      },
      {
        unified: "1f468-1f3ff-200d-1f37c",
        native: "👨🏿‍🍼"
      }
    ],
    version: 13
  },
  person_feeding_baby: {
    id: "person_feeding_baby",
    name: "Person Feeding Baby",
    keywords: [
      "birth",
      "food"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f37c",
        native: "🧑‍🍼"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f37c",
        native: "🧑🏻‍🍼"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f37c",
        native: "🧑🏼‍🍼"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f37c",
        native: "🧑🏽‍🍼"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f37c",
        native: "🧑🏾‍🍼"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f37c",
        native: "🧑🏿‍🍼"
      }
    ],
    version: 13
  },
  angel: {
    id: "angel",
    name: "Baby Angel",
    keywords: [
      "heaven",
      "wings",
      "halo"
    ],
    skins: [
      {
        unified: "1f47c",
        native: "👼"
      },
      {
        unified: "1f47c-1f3fb",
        native: "👼🏻"
      },
      {
        unified: "1f47c-1f3fc",
        native: "👼🏼"
      },
      {
        unified: "1f47c-1f3fd",
        native: "👼🏽"
      },
      {
        unified: "1f47c-1f3fe",
        native: "👼🏾"
      },
      {
        unified: "1f47c-1f3ff",
        native: "👼🏿"
      }
    ],
    version: 1
  },
  santa: {
    id: "santa",
    name: "Santa Claus",
    keywords: [
      "festival",
      "man",
      "male",
      "xmas",
      "father",
      "christmas"
    ],
    skins: [
      {
        unified: "1f385",
        native: "🎅"
      },
      {
        unified: "1f385-1f3fb",
        native: "🎅🏻"
      },
      {
        unified: "1f385-1f3fc",
        native: "🎅🏼"
      },
      {
        unified: "1f385-1f3fd",
        native: "🎅🏽"
      },
      {
        unified: "1f385-1f3fe",
        native: "🎅🏾"
      },
      {
        unified: "1f385-1f3ff",
        native: "🎅🏿"
      }
    ],
    version: 1
  },
  mrs_claus: {
    id: "mrs_claus",
    name: "Mrs. Claus",
    keywords: [
      "mrs",
      "mother",
      "christmas",
      "woman",
      "female",
      "xmas"
    ],
    skins: [
      {
        unified: "1f936",
        native: "🤶"
      },
      {
        unified: "1f936-1f3fb",
        native: "🤶🏻"
      },
      {
        unified: "1f936-1f3fc",
        native: "🤶🏼"
      },
      {
        unified: "1f936-1f3fd",
        native: "🤶🏽"
      },
      {
        unified: "1f936-1f3fe",
        native: "🤶🏾"
      },
      {
        unified: "1f936-1f3ff",
        native: "🤶🏿"
      }
    ],
    version: 3
  },
  mx_claus: {
    id: "mx_claus",
    name: "Mx Claus",
    keywords: [
      "christmas"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f384",
        native: "🧑‍🎄"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f384",
        native: "🧑🏻‍🎄"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f384",
        native: "🧑🏼‍🎄"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f384",
        native: "🧑🏽‍🎄"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f384",
        native: "🧑🏾‍🎄"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f384",
        native: "🧑🏿‍🎄"
      }
    ],
    version: 13
  },
  superhero: {
    id: "superhero",
    name: "Superhero",
    keywords: [
      "marvel"
    ],
    skins: [
      {
        unified: "1f9b8",
        native: "🦸"
      },
      {
        unified: "1f9b8-1f3fb",
        native: "🦸🏻"
      },
      {
        unified: "1f9b8-1f3fc",
        native: "🦸🏼"
      },
      {
        unified: "1f9b8-1f3fd",
        native: "🦸🏽"
      },
      {
        unified: "1f9b8-1f3fe",
        native: "🦸🏾"
      },
      {
        unified: "1f9b8-1f3ff",
        native: "🦸🏿"
      }
    ],
    version: 11
  },
  male_superhero: {
    id: "male_superhero",
    name: "Man Superhero",
    keywords: [
      "male",
      "good",
      "hero",
      "superpowers"
    ],
    skins: [
      {
        unified: "1f9b8-200d-2642-fe0f",
        native: "🦸‍♂️"
      },
      {
        unified: "1f9b8-1f3fb-200d-2642-fe0f",
        native: "🦸🏻‍♂️"
      },
      {
        unified: "1f9b8-1f3fc-200d-2642-fe0f",
        native: "🦸🏼‍♂️"
      },
      {
        unified: "1f9b8-1f3fd-200d-2642-fe0f",
        native: "🦸🏽‍♂️"
      },
      {
        unified: "1f9b8-1f3fe-200d-2642-fe0f",
        native: "🦸🏾‍♂️"
      },
      {
        unified: "1f9b8-1f3ff-200d-2642-fe0f",
        native: "🦸🏿‍♂️"
      }
    ],
    version: 11
  },
  female_superhero: {
    id: "female_superhero",
    name: "Woman Superhero",
    keywords: [
      "female",
      "good",
      "heroine",
      "superpowers"
    ],
    skins: [
      {
        unified: "1f9b8-200d-2640-fe0f",
        native: "🦸‍♀️"
      },
      {
        unified: "1f9b8-1f3fb-200d-2640-fe0f",
        native: "🦸🏻‍♀️"
      },
      {
        unified: "1f9b8-1f3fc-200d-2640-fe0f",
        native: "🦸🏼‍♀️"
      },
      {
        unified: "1f9b8-1f3fd-200d-2640-fe0f",
        native: "🦸🏽‍♀️"
      },
      {
        unified: "1f9b8-1f3fe-200d-2640-fe0f",
        native: "🦸🏾‍♀️"
      },
      {
        unified: "1f9b8-1f3ff-200d-2640-fe0f",
        native: "🦸🏿‍♀️"
      }
    ],
    version: 11
  },
  supervillain: {
    id: "supervillain",
    name: "Supervillain",
    keywords: [
      "marvel"
    ],
    skins: [
      {
        unified: "1f9b9",
        native: "🦹"
      },
      {
        unified: "1f9b9-1f3fb",
        native: "🦹🏻"
      },
      {
        unified: "1f9b9-1f3fc",
        native: "🦹🏼"
      },
      {
        unified: "1f9b9-1f3fd",
        native: "🦹🏽"
      },
      {
        unified: "1f9b9-1f3fe",
        native: "🦹🏾"
      },
      {
        unified: "1f9b9-1f3ff",
        native: "🦹🏿"
      }
    ],
    version: 11
  },
  male_supervillain: {
    id: "male_supervillain",
    name: "Man Supervillain",
    keywords: [
      "male",
      "evil",
      "bad",
      "criminal",
      "hero",
      "superpowers"
    ],
    skins: [
      {
        unified: "1f9b9-200d-2642-fe0f",
        native: "🦹‍♂️"
      },
      {
        unified: "1f9b9-1f3fb-200d-2642-fe0f",
        native: "🦹🏻‍♂️"
      },
      {
        unified: "1f9b9-1f3fc-200d-2642-fe0f",
        native: "🦹🏼‍♂️"
      },
      {
        unified: "1f9b9-1f3fd-200d-2642-fe0f",
        native: "🦹🏽‍♂️"
      },
      {
        unified: "1f9b9-1f3fe-200d-2642-fe0f",
        native: "🦹🏾‍♂️"
      },
      {
        unified: "1f9b9-1f3ff-200d-2642-fe0f",
        native: "🦹🏿‍♂️"
      }
    ],
    version: 11
  },
  female_supervillain: {
    id: "female_supervillain",
    name: "Woman Supervillain",
    keywords: [
      "female",
      "evil",
      "bad",
      "criminal",
      "heroine",
      "superpowers"
    ],
    skins: [
      {
        unified: "1f9b9-200d-2640-fe0f",
        native: "🦹‍♀️"
      },
      {
        unified: "1f9b9-1f3fb-200d-2640-fe0f",
        native: "🦹🏻‍♀️"
      },
      {
        unified: "1f9b9-1f3fc-200d-2640-fe0f",
        native: "🦹🏼‍♀️"
      },
      {
        unified: "1f9b9-1f3fd-200d-2640-fe0f",
        native: "🦹🏽‍♀️"
      },
      {
        unified: "1f9b9-1f3fe-200d-2640-fe0f",
        native: "🦹🏾‍♀️"
      },
      {
        unified: "1f9b9-1f3ff-200d-2640-fe0f",
        native: "🦹🏿‍♀️"
      }
    ],
    version: 11
  },
  mage: {
    id: "mage",
    name: "Mage",
    keywords: [
      "magic"
    ],
    skins: [
      {
        unified: "1f9d9",
        native: "🧙"
      },
      {
        unified: "1f9d9-1f3fb",
        native: "🧙🏻"
      },
      {
        unified: "1f9d9-1f3fc",
        native: "🧙🏼"
      },
      {
        unified: "1f9d9-1f3fd",
        native: "🧙🏽"
      },
      {
        unified: "1f9d9-1f3fe",
        native: "🧙🏾"
      },
      {
        unified: "1f9d9-1f3ff",
        native: "🧙🏿"
      }
    ],
    version: 5
  },
  male_mage: {
    id: "male_mage",
    name: "Man Mage",
    keywords: [
      "male",
      "sorcerer"
    ],
    skins: [
      {
        unified: "1f9d9-200d-2642-fe0f",
        native: "🧙‍♂️"
      },
      {
        unified: "1f9d9-1f3fb-200d-2642-fe0f",
        native: "🧙🏻‍♂️"
      },
      {
        unified: "1f9d9-1f3fc-200d-2642-fe0f",
        native: "🧙🏼‍♂️"
      },
      {
        unified: "1f9d9-1f3fd-200d-2642-fe0f",
        native: "🧙🏽‍♂️"
      },
      {
        unified: "1f9d9-1f3fe-200d-2642-fe0f",
        native: "🧙🏾‍♂️"
      },
      {
        unified: "1f9d9-1f3ff-200d-2642-fe0f",
        native: "🧙🏿‍♂️"
      }
    ],
    version: 5
  },
  female_mage: {
    id: "female_mage",
    name: "Woman Mage",
    keywords: [
      "female",
      "witch"
    ],
    skins: [
      {
        unified: "1f9d9-200d-2640-fe0f",
        native: "🧙‍♀️"
      },
      {
        unified: "1f9d9-1f3fb-200d-2640-fe0f",
        native: "🧙🏻‍♀️"
      },
      {
        unified: "1f9d9-1f3fc-200d-2640-fe0f",
        native: "🧙🏼‍♀️"
      },
      {
        unified: "1f9d9-1f3fd-200d-2640-fe0f",
        native: "🧙🏽‍♀️"
      },
      {
        unified: "1f9d9-1f3fe-200d-2640-fe0f",
        native: "🧙🏾‍♀️"
      },
      {
        unified: "1f9d9-1f3ff-200d-2640-fe0f",
        native: "🧙🏿‍♀️"
      }
    ],
    version: 5
  },
  fairy: {
    id: "fairy",
    name: "Fairy",
    keywords: [
      "wings",
      "magical"
    ],
    skins: [
      {
        unified: "1f9da",
        native: "🧚"
      },
      {
        unified: "1f9da-1f3fb",
        native: "🧚🏻"
      },
      {
        unified: "1f9da-1f3fc",
        native: "🧚🏼"
      },
      {
        unified: "1f9da-1f3fd",
        native: "🧚🏽"
      },
      {
        unified: "1f9da-1f3fe",
        native: "🧚🏾"
      },
      {
        unified: "1f9da-1f3ff",
        native: "🧚🏿"
      }
    ],
    version: 5
  },
  male_fairy: {
    id: "male_fairy",
    name: "Man Fairy",
    keywords: [
      "male"
    ],
    skins: [
      {
        unified: "1f9da-200d-2642-fe0f",
        native: "🧚‍♂️"
      },
      {
        unified: "1f9da-1f3fb-200d-2642-fe0f",
        native: "🧚🏻‍♂️"
      },
      {
        unified: "1f9da-1f3fc-200d-2642-fe0f",
        native: "🧚🏼‍♂️"
      },
      {
        unified: "1f9da-1f3fd-200d-2642-fe0f",
        native: "🧚🏽‍♂️"
      },
      {
        unified: "1f9da-1f3fe-200d-2642-fe0f",
        native: "🧚🏾‍♂️"
      },
      {
        unified: "1f9da-1f3ff-200d-2642-fe0f",
        native: "🧚🏿‍♂️"
      }
    ],
    version: 5
  },
  female_fairy: {
    id: "female_fairy",
    name: "Woman Fairy",
    keywords: [
      "female"
    ],
    skins: [
      {
        unified: "1f9da-200d-2640-fe0f",
        native: "🧚‍♀️"
      },
      {
        unified: "1f9da-1f3fb-200d-2640-fe0f",
        native: "🧚🏻‍♀️"
      },
      {
        unified: "1f9da-1f3fc-200d-2640-fe0f",
        native: "🧚🏼‍♀️"
      },
      {
        unified: "1f9da-1f3fd-200d-2640-fe0f",
        native: "🧚🏽‍♀️"
      },
      {
        unified: "1f9da-1f3fe-200d-2640-fe0f",
        native: "🧚🏾‍♀️"
      },
      {
        unified: "1f9da-1f3ff-200d-2640-fe0f",
        native: "🧚🏿‍♀️"
      }
    ],
    version: 5
  },
  vampire: {
    id: "vampire",
    name: "Vampire",
    keywords: [
      "blood",
      "twilight"
    ],
    skins: [
      {
        unified: "1f9db",
        native: "🧛"
      },
      {
        unified: "1f9db-1f3fb",
        native: "🧛🏻"
      },
      {
        unified: "1f9db-1f3fc",
        native: "🧛🏼"
      },
      {
        unified: "1f9db-1f3fd",
        native: "🧛🏽"
      },
      {
        unified: "1f9db-1f3fe",
        native: "🧛🏾"
      },
      {
        unified: "1f9db-1f3ff",
        native: "🧛🏿"
      }
    ],
    version: 5
  },
  male_vampire: {
    id: "male_vampire",
    name: "Man Vampire",
    keywords: [
      "male",
      "dracula"
    ],
    skins: [
      {
        unified: "1f9db-200d-2642-fe0f",
        native: "🧛‍♂️"
      },
      {
        unified: "1f9db-1f3fb-200d-2642-fe0f",
        native: "🧛🏻‍♂️"
      },
      {
        unified: "1f9db-1f3fc-200d-2642-fe0f",
        native: "🧛🏼‍♂️"
      },
      {
        unified: "1f9db-1f3fd-200d-2642-fe0f",
        native: "🧛🏽‍♂️"
      },
      {
        unified: "1f9db-1f3fe-200d-2642-fe0f",
        native: "🧛🏾‍♂️"
      },
      {
        unified: "1f9db-1f3ff-200d-2642-fe0f",
        native: "🧛🏿‍♂️"
      }
    ],
    version: 5
  },
  female_vampire: {
    id: "female_vampire",
    name: "Woman Vampire",
    keywords: [
      "female"
    ],
    skins: [
      {
        unified: "1f9db-200d-2640-fe0f",
        native: "🧛‍♀️"
      },
      {
        unified: "1f9db-1f3fb-200d-2640-fe0f",
        native: "🧛🏻‍♀️"
      },
      {
        unified: "1f9db-1f3fc-200d-2640-fe0f",
        native: "🧛🏼‍♀️"
      },
      {
        unified: "1f9db-1f3fd-200d-2640-fe0f",
        native: "🧛🏽‍♀️"
      },
      {
        unified: "1f9db-1f3fe-200d-2640-fe0f",
        native: "🧛🏾‍♀️"
      },
      {
        unified: "1f9db-1f3ff-200d-2640-fe0f",
        native: "🧛🏿‍♀️"
      }
    ],
    version: 5
  },
  merperson: {
    id: "merperson",
    name: "Merperson",
    keywords: [
      "sea"
    ],
    skins: [
      {
        unified: "1f9dc",
        native: "🧜"
      },
      {
        unified: "1f9dc-1f3fb",
        native: "🧜🏻"
      },
      {
        unified: "1f9dc-1f3fc",
        native: "🧜🏼"
      },
      {
        unified: "1f9dc-1f3fd",
        native: "🧜🏽"
      },
      {
        unified: "1f9dc-1f3fe",
        native: "🧜🏾"
      },
      {
        unified: "1f9dc-1f3ff",
        native: "🧜🏿"
      }
    ],
    version: 5
  },
  merman: {
    id: "merman",
    name: "Merman",
    keywords: [
      "man",
      "male",
      "triton"
    ],
    skins: [
      {
        unified: "1f9dc-200d-2642-fe0f",
        native: "🧜‍♂️"
      },
      {
        unified: "1f9dc-1f3fb-200d-2642-fe0f",
        native: "🧜🏻‍♂️"
      },
      {
        unified: "1f9dc-1f3fc-200d-2642-fe0f",
        native: "🧜🏼‍♂️"
      },
      {
        unified: "1f9dc-1f3fd-200d-2642-fe0f",
        native: "🧜🏽‍♂️"
      },
      {
        unified: "1f9dc-1f3fe-200d-2642-fe0f",
        native: "🧜🏾‍♂️"
      },
      {
        unified: "1f9dc-1f3ff-200d-2642-fe0f",
        native: "🧜🏿‍♂️"
      }
    ],
    version: 5
  },
  mermaid: {
    id: "mermaid",
    name: "Mermaid",
    keywords: [
      "woman",
      "female",
      "merwoman",
      "ariel"
    ],
    skins: [
      {
        unified: "1f9dc-200d-2640-fe0f",
        native: "🧜‍♀️"
      },
      {
        unified: "1f9dc-1f3fb-200d-2640-fe0f",
        native: "🧜🏻‍♀️"
      },
      {
        unified: "1f9dc-1f3fc-200d-2640-fe0f",
        native: "🧜🏼‍♀️"
      },
      {
        unified: "1f9dc-1f3fd-200d-2640-fe0f",
        native: "🧜🏽‍♀️"
      },
      {
        unified: "1f9dc-1f3fe-200d-2640-fe0f",
        native: "🧜🏾‍♀️"
      },
      {
        unified: "1f9dc-1f3ff-200d-2640-fe0f",
        native: "🧜🏿‍♀️"
      }
    ],
    version: 5
  },
  elf: {
    id: "elf",
    name: "Elf",
    keywords: [
      "magical"
    ],
    skins: [
      {
        unified: "1f9dd",
        native: "🧝"
      },
      {
        unified: "1f9dd-1f3fb",
        native: "🧝🏻"
      },
      {
        unified: "1f9dd-1f3fc",
        native: "🧝🏼"
      },
      {
        unified: "1f9dd-1f3fd",
        native: "🧝🏽"
      },
      {
        unified: "1f9dd-1f3fe",
        native: "🧝🏾"
      },
      {
        unified: "1f9dd-1f3ff",
        native: "🧝🏿"
      }
    ],
    version: 5
  },
  male_elf: {
    id: "male_elf",
    name: "Man Elf",
    keywords: [
      "male"
    ],
    skins: [
      {
        unified: "1f9dd-200d-2642-fe0f",
        native: "🧝‍♂️"
      },
      {
        unified: "1f9dd-1f3fb-200d-2642-fe0f",
        native: "🧝🏻‍♂️"
      },
      {
        unified: "1f9dd-1f3fc-200d-2642-fe0f",
        native: "🧝🏼‍♂️"
      },
      {
        unified: "1f9dd-1f3fd-200d-2642-fe0f",
        native: "🧝🏽‍♂️"
      },
      {
        unified: "1f9dd-1f3fe-200d-2642-fe0f",
        native: "🧝🏾‍♂️"
      },
      {
        unified: "1f9dd-1f3ff-200d-2642-fe0f",
        native: "🧝🏿‍♂️"
      }
    ],
    version: 5
  },
  female_elf: {
    id: "female_elf",
    name: "Woman Elf",
    keywords: [
      "female"
    ],
    skins: [
      {
        unified: "1f9dd-200d-2640-fe0f",
        native: "🧝‍♀️"
      },
      {
        unified: "1f9dd-1f3fb-200d-2640-fe0f",
        native: "🧝🏻‍♀️"
      },
      {
        unified: "1f9dd-1f3fc-200d-2640-fe0f",
        native: "🧝🏼‍♀️"
      },
      {
        unified: "1f9dd-1f3fd-200d-2640-fe0f",
        native: "🧝🏽‍♀️"
      },
      {
        unified: "1f9dd-1f3fe-200d-2640-fe0f",
        native: "🧝🏾‍♀️"
      },
      {
        unified: "1f9dd-1f3ff-200d-2640-fe0f",
        native: "🧝🏿‍♀️"
      }
    ],
    version: 5
  },
  genie: {
    id: "genie",
    name: "Genie",
    keywords: [
      "magical",
      "wishes"
    ],
    skins: [
      {
        unified: "1f9de",
        native: "🧞"
      }
    ],
    version: 5
  },
  male_genie: {
    id: "male_genie",
    name: "Man Genie",
    keywords: [
      "male"
    ],
    skins: [
      {
        unified: "1f9de-200d-2642-fe0f",
        native: "🧞‍♂️"
      }
    ],
    version: 5
  },
  female_genie: {
    id: "female_genie",
    name: "Woman Genie",
    keywords: [
      "female"
    ],
    skins: [
      {
        unified: "1f9de-200d-2640-fe0f",
        native: "🧞‍♀️"
      }
    ],
    version: 5
  },
  zombie: {
    id: "zombie",
    name: "Zombie",
    keywords: [
      "dead"
    ],
    skins: [
      {
        unified: "1f9df",
        native: "🧟"
      }
    ],
    version: 5
  },
  male_zombie: {
    id: "male_zombie",
    name: "Man Zombie",
    keywords: [
      "male",
      "dracula",
      "undead",
      "walking",
      "dead"
    ],
    skins: [
      {
        unified: "1f9df-200d-2642-fe0f",
        native: "🧟‍♂️"
      }
    ],
    version: 5
  },
  female_zombie: {
    id: "female_zombie",
    name: "Woman Zombie",
    keywords: [
      "female",
      "undead",
      "walking",
      "dead"
    ],
    skins: [
      {
        unified: "1f9df-200d-2640-fe0f",
        native: "🧟‍♀️"
      }
    ],
    version: 5
  },
  troll: {
    id: "troll",
    name: "Troll",
    keywords: [
      "mystical",
      "monster"
    ],
    skins: [
      {
        unified: "1f9cc",
        native: "🧌"
      }
    ],
    version: 14
  },
  massage: {
    id: "massage",
    name: "Face Massage",
    keywords: [
      "person",
      "getting",
      "relax"
    ],
    skins: [
      {
        unified: "1f486",
        native: "💆"
      },
      {
        unified: "1f486-1f3fb",
        native: "💆🏻"
      },
      {
        unified: "1f486-1f3fc",
        native: "💆🏼"
      },
      {
        unified: "1f486-1f3fd",
        native: "💆🏽"
      },
      {
        unified: "1f486-1f3fe",
        native: "💆🏾"
      },
      {
        unified: "1f486-1f3ff",
        native: "💆🏿"
      }
    ],
    version: 1
  },
  "man-getting-massage": {
    id: "man-getting-massage",
    name: "Man Getting Massage",
    keywords: [
      "getting-massage",
      "male",
      "boy",
      "head"
    ],
    skins: [
      {
        unified: "1f486-200d-2642-fe0f",
        native: "💆‍♂️"
      },
      {
        unified: "1f486-1f3fb-200d-2642-fe0f",
        native: "💆🏻‍♂️"
      },
      {
        unified: "1f486-1f3fc-200d-2642-fe0f",
        native: "💆🏼‍♂️"
      },
      {
        unified: "1f486-1f3fd-200d-2642-fe0f",
        native: "💆🏽‍♂️"
      },
      {
        unified: "1f486-1f3fe-200d-2642-fe0f",
        native: "💆🏾‍♂️"
      },
      {
        unified: "1f486-1f3ff-200d-2642-fe0f",
        native: "💆🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-getting-massage": {
    id: "woman-getting-massage",
    name: "Woman Getting Massage",
    keywords: [
      "getting-massage",
      "female",
      "girl",
      "head"
    ],
    skins: [
      {
        unified: "1f486-200d-2640-fe0f",
        native: "💆‍♀️"
      },
      {
        unified: "1f486-1f3fb-200d-2640-fe0f",
        native: "💆🏻‍♀️"
      },
      {
        unified: "1f486-1f3fc-200d-2640-fe0f",
        native: "💆🏼‍♀️"
      },
      {
        unified: "1f486-1f3fd-200d-2640-fe0f",
        native: "💆🏽‍♀️"
      },
      {
        unified: "1f486-1f3fe-200d-2640-fe0f",
        native: "💆🏾‍♀️"
      },
      {
        unified: "1f486-1f3ff-200d-2640-fe0f",
        native: "💆🏿‍♀️"
      }
    ],
    version: 4
  },
  haircut: {
    id: "haircut",
    name: "Haircut",
    keywords: [
      "person",
      "getting",
      "hairstyle"
    ],
    skins: [
      {
        unified: "1f487",
        native: "💇"
      },
      {
        unified: "1f487-1f3fb",
        native: "💇🏻"
      },
      {
        unified: "1f487-1f3fc",
        native: "💇🏼"
      },
      {
        unified: "1f487-1f3fd",
        native: "💇🏽"
      },
      {
        unified: "1f487-1f3fe",
        native: "💇🏾"
      },
      {
        unified: "1f487-1f3ff",
        native: "💇🏿"
      }
    ],
    version: 1
  },
  "man-getting-haircut": {
    id: "man-getting-haircut",
    name: "Man Getting Haircut",
    keywords: [
      "getting-haircut",
      "male",
      "boy"
    ],
    skins: [
      {
        unified: "1f487-200d-2642-fe0f",
        native: "💇‍♂️"
      },
      {
        unified: "1f487-1f3fb-200d-2642-fe0f",
        native: "💇🏻‍♂️"
      },
      {
        unified: "1f487-1f3fc-200d-2642-fe0f",
        native: "💇🏼‍♂️"
      },
      {
        unified: "1f487-1f3fd-200d-2642-fe0f",
        native: "💇🏽‍♂️"
      },
      {
        unified: "1f487-1f3fe-200d-2642-fe0f",
        native: "💇🏾‍♂️"
      },
      {
        unified: "1f487-1f3ff-200d-2642-fe0f",
        native: "💇🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-getting-haircut": {
    id: "woman-getting-haircut",
    name: "Woman Getting Haircut",
    keywords: [
      "getting-haircut",
      "female",
      "girl"
    ],
    skins: [
      {
        unified: "1f487-200d-2640-fe0f",
        native: "💇‍♀️"
      },
      {
        unified: "1f487-1f3fb-200d-2640-fe0f",
        native: "💇🏻‍♀️"
      },
      {
        unified: "1f487-1f3fc-200d-2640-fe0f",
        native: "💇🏼‍♀️"
      },
      {
        unified: "1f487-1f3fd-200d-2640-fe0f",
        native: "💇🏽‍♀️"
      },
      {
        unified: "1f487-1f3fe-200d-2640-fe0f",
        native: "💇🏾‍♀️"
      },
      {
        unified: "1f487-1f3ff-200d-2640-fe0f",
        native: "💇🏿‍♀️"
      }
    ],
    version: 4
  },
  walking: {
    id: "walking",
    name: "Pedestrian",
    keywords: [
      "walking",
      "person",
      "move"
    ],
    skins: [
      {
        unified: "1f6b6",
        native: "🚶"
      },
      {
        unified: "1f6b6-1f3fb",
        native: "🚶🏻"
      },
      {
        unified: "1f6b6-1f3fc",
        native: "🚶🏼"
      },
      {
        unified: "1f6b6-1f3fd",
        native: "🚶🏽"
      },
      {
        unified: "1f6b6-1f3fe",
        native: "🚶🏾"
      },
      {
        unified: "1f6b6-1f3ff",
        native: "🚶🏿"
      }
    ],
    version: 1
  },
  "man-walking": {
    id: "man-walking",
    name: "Man Walking",
    keywords: [
      "human",
      "feet",
      "steps"
    ],
    skins: [
      {
        unified: "1f6b6-200d-2642-fe0f",
        native: "🚶‍♂️"
      },
      {
        unified: "1f6b6-1f3fb-200d-2642-fe0f",
        native: "🚶🏻‍♂️"
      },
      {
        unified: "1f6b6-1f3fc-200d-2642-fe0f",
        native: "🚶🏼‍♂️"
      },
      {
        unified: "1f6b6-1f3fd-200d-2642-fe0f",
        native: "🚶🏽‍♂️"
      },
      {
        unified: "1f6b6-1f3fe-200d-2642-fe0f",
        native: "🚶🏾‍♂️"
      },
      {
        unified: "1f6b6-1f3ff-200d-2642-fe0f",
        native: "🚶🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-walking": {
    id: "woman-walking",
    name: "Woman Walking",
    keywords: [
      "human",
      "feet",
      "steps",
      "female"
    ],
    skins: [
      {
        unified: "1f6b6-200d-2640-fe0f",
        native: "🚶‍♀️"
      },
      {
        unified: "1f6b6-1f3fb-200d-2640-fe0f",
        native: "🚶🏻‍♀️"
      },
      {
        unified: "1f6b6-1f3fc-200d-2640-fe0f",
        native: "🚶🏼‍♀️"
      },
      {
        unified: "1f6b6-1f3fd-200d-2640-fe0f",
        native: "🚶🏽‍♀️"
      },
      {
        unified: "1f6b6-1f3fe-200d-2640-fe0f",
        native: "🚶🏾‍♀️"
      },
      {
        unified: "1f6b6-1f3ff-200d-2640-fe0f",
        native: "🚶🏿‍♀️"
      }
    ],
    version: 4
  },
  standing_person: {
    id: "standing_person",
    name: "Standing Person",
    keywords: [
      "still"
    ],
    skins: [
      {
        unified: "1f9cd",
        native: "🧍"
      },
      {
        unified: "1f9cd-1f3fb",
        native: "🧍🏻"
      },
      {
        unified: "1f9cd-1f3fc",
        native: "🧍🏼"
      },
      {
        unified: "1f9cd-1f3fd",
        native: "🧍🏽"
      },
      {
        unified: "1f9cd-1f3fe",
        native: "🧍🏾"
      },
      {
        unified: "1f9cd-1f3ff",
        native: "🧍🏿"
      }
    ],
    version: 12
  },
  man_standing: {
    id: "man_standing",
    name: "Man Standing",
    keywords: [
      "still"
    ],
    skins: [
      {
        unified: "1f9cd-200d-2642-fe0f",
        native: "🧍‍♂️"
      },
      {
        unified: "1f9cd-1f3fb-200d-2642-fe0f",
        native: "🧍🏻‍♂️"
      },
      {
        unified: "1f9cd-1f3fc-200d-2642-fe0f",
        native: "🧍🏼‍♂️"
      },
      {
        unified: "1f9cd-1f3fd-200d-2642-fe0f",
        native: "🧍🏽‍♂️"
      },
      {
        unified: "1f9cd-1f3fe-200d-2642-fe0f",
        native: "🧍🏾‍♂️"
      },
      {
        unified: "1f9cd-1f3ff-200d-2642-fe0f",
        native: "🧍🏿‍♂️"
      }
    ],
    version: 12
  },
  woman_standing: {
    id: "woman_standing",
    name: "Woman Standing",
    keywords: [
      "still"
    ],
    skins: [
      {
        unified: "1f9cd-200d-2640-fe0f",
        native: "🧍‍♀️"
      },
      {
        unified: "1f9cd-1f3fb-200d-2640-fe0f",
        native: "🧍🏻‍♀️"
      },
      {
        unified: "1f9cd-1f3fc-200d-2640-fe0f",
        native: "🧍🏼‍♀️"
      },
      {
        unified: "1f9cd-1f3fd-200d-2640-fe0f",
        native: "🧍🏽‍♀️"
      },
      {
        unified: "1f9cd-1f3fe-200d-2640-fe0f",
        native: "🧍🏾‍♀️"
      },
      {
        unified: "1f9cd-1f3ff-200d-2640-fe0f",
        native: "🧍🏿‍♀️"
      }
    ],
    version: 12
  },
  kneeling_person: {
    id: "kneeling_person",
    name: "Kneeling Person",
    keywords: [
      "pray",
      "respectful"
    ],
    skins: [
      {
        unified: "1f9ce",
        native: "🧎"
      },
      {
        unified: "1f9ce-1f3fb",
        native: "🧎🏻"
      },
      {
        unified: "1f9ce-1f3fc",
        native: "🧎🏼"
      },
      {
        unified: "1f9ce-1f3fd",
        native: "🧎🏽"
      },
      {
        unified: "1f9ce-1f3fe",
        native: "🧎🏾"
      },
      {
        unified: "1f9ce-1f3ff",
        native: "🧎🏿"
      }
    ],
    version: 12
  },
  man_kneeling: {
    id: "man_kneeling",
    name: "Man Kneeling",
    keywords: [
      "pray",
      "respectful"
    ],
    skins: [
      {
        unified: "1f9ce-200d-2642-fe0f",
        native: "🧎‍♂️"
      },
      {
        unified: "1f9ce-1f3fb-200d-2642-fe0f",
        native: "🧎🏻‍♂️"
      },
      {
        unified: "1f9ce-1f3fc-200d-2642-fe0f",
        native: "🧎🏼‍♂️"
      },
      {
        unified: "1f9ce-1f3fd-200d-2642-fe0f",
        native: "🧎🏽‍♂️"
      },
      {
        unified: "1f9ce-1f3fe-200d-2642-fe0f",
        native: "🧎🏾‍♂️"
      },
      {
        unified: "1f9ce-1f3ff-200d-2642-fe0f",
        native: "🧎🏿‍♂️"
      }
    ],
    version: 12
  },
  woman_kneeling: {
    id: "woman_kneeling",
    name: "Woman Kneeling",
    keywords: [
      "respectful",
      "pray"
    ],
    skins: [
      {
        unified: "1f9ce-200d-2640-fe0f",
        native: "🧎‍♀️"
      },
      {
        unified: "1f9ce-1f3fb-200d-2640-fe0f",
        native: "🧎🏻‍♀️"
      },
      {
        unified: "1f9ce-1f3fc-200d-2640-fe0f",
        native: "🧎🏼‍♀️"
      },
      {
        unified: "1f9ce-1f3fd-200d-2640-fe0f",
        native: "🧎🏽‍♀️"
      },
      {
        unified: "1f9ce-1f3fe-200d-2640-fe0f",
        native: "🧎🏾‍♀️"
      },
      {
        unified: "1f9ce-1f3ff-200d-2640-fe0f",
        native: "🧎🏿‍♀️"
      }
    ],
    version: 12
  },
  person_with_probing_cane: {
    id: "person_with_probing_cane",
    name: "Person with White Cane",
    keywords: [
      "probing",
      "blind"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f9af",
        native: "🧑‍🦯"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f9af",
        native: "🧑🏻‍🦯"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f9af",
        native: "🧑🏼‍🦯"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f9af",
        native: "🧑🏽‍🦯"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f9af",
        native: "🧑🏾‍🦯"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f9af",
        native: "🧑🏿‍🦯"
      }
    ],
    version: 12.1
  },
  man_with_probing_cane: {
    id: "man_with_probing_cane",
    name: "Man with White Cane",
    keywords: [
      "probing",
      "blind"
    ],
    skins: [
      {
        unified: "1f468-200d-1f9af",
        native: "👨‍🦯"
      },
      {
        unified: "1f468-1f3fb-200d-1f9af",
        native: "👨🏻‍🦯"
      },
      {
        unified: "1f468-1f3fc-200d-1f9af",
        native: "👨🏼‍🦯"
      },
      {
        unified: "1f468-1f3fd-200d-1f9af",
        native: "👨🏽‍🦯"
      },
      {
        unified: "1f468-1f3fe-200d-1f9af",
        native: "👨🏾‍🦯"
      },
      {
        unified: "1f468-1f3ff-200d-1f9af",
        native: "👨🏿‍🦯"
      }
    ],
    version: 12
  },
  woman_with_probing_cane: {
    id: "woman_with_probing_cane",
    name: "Woman with White Cane",
    keywords: [
      "probing",
      "blind"
    ],
    skins: [
      {
        unified: "1f469-200d-1f9af",
        native: "👩‍🦯"
      },
      {
        unified: "1f469-1f3fb-200d-1f9af",
        native: "👩🏻‍🦯"
      },
      {
        unified: "1f469-1f3fc-200d-1f9af",
        native: "👩🏼‍🦯"
      },
      {
        unified: "1f469-1f3fd-200d-1f9af",
        native: "👩🏽‍🦯"
      },
      {
        unified: "1f469-1f3fe-200d-1f9af",
        native: "👩🏾‍🦯"
      },
      {
        unified: "1f469-1f3ff-200d-1f9af",
        native: "👩🏿‍🦯"
      }
    ],
    version: 12
  },
  person_in_motorized_wheelchair: {
    id: "person_in_motorized_wheelchair",
    name: "Person in Motorized Wheelchair",
    keywords: [
      "disability",
      "accessibility"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f9bc",
        native: "🧑‍🦼"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f9bc",
        native: "🧑🏻‍🦼"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f9bc",
        native: "🧑🏼‍🦼"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f9bc",
        native: "🧑🏽‍🦼"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f9bc",
        native: "🧑🏾‍🦼"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f9bc",
        native: "🧑🏿‍🦼"
      }
    ],
    version: 12.1
  },
  man_in_motorized_wheelchair: {
    id: "man_in_motorized_wheelchair",
    name: "Man in Motorized Wheelchair",
    keywords: [
      "disability",
      "accessibility"
    ],
    skins: [
      {
        unified: "1f468-200d-1f9bc",
        native: "👨‍🦼"
      },
      {
        unified: "1f468-1f3fb-200d-1f9bc",
        native: "👨🏻‍🦼"
      },
      {
        unified: "1f468-1f3fc-200d-1f9bc",
        native: "👨🏼‍🦼"
      },
      {
        unified: "1f468-1f3fd-200d-1f9bc",
        native: "👨🏽‍🦼"
      },
      {
        unified: "1f468-1f3fe-200d-1f9bc",
        native: "👨🏾‍🦼"
      },
      {
        unified: "1f468-1f3ff-200d-1f9bc",
        native: "👨🏿‍🦼"
      }
    ],
    version: 12
  },
  woman_in_motorized_wheelchair: {
    id: "woman_in_motorized_wheelchair",
    name: "Woman in Motorized Wheelchair",
    keywords: [
      "disability",
      "accessibility"
    ],
    skins: [
      {
        unified: "1f469-200d-1f9bc",
        native: "👩‍🦼"
      },
      {
        unified: "1f469-1f3fb-200d-1f9bc",
        native: "👩🏻‍🦼"
      },
      {
        unified: "1f469-1f3fc-200d-1f9bc",
        native: "👩🏼‍🦼"
      },
      {
        unified: "1f469-1f3fd-200d-1f9bc",
        native: "👩🏽‍🦼"
      },
      {
        unified: "1f469-1f3fe-200d-1f9bc",
        native: "👩🏾‍🦼"
      },
      {
        unified: "1f469-1f3ff-200d-1f9bc",
        native: "👩🏿‍🦼"
      }
    ],
    version: 12
  },
  person_in_manual_wheelchair: {
    id: "person_in_manual_wheelchair",
    name: "Person in Manual Wheelchair",
    keywords: [
      "disability",
      "accessibility"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f9bd",
        native: "🧑‍🦽"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f9bd",
        native: "🧑🏻‍🦽"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f9bd",
        native: "🧑🏼‍🦽"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f9bd",
        native: "🧑🏽‍🦽"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f9bd",
        native: "🧑🏾‍🦽"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f9bd",
        native: "🧑🏿‍🦽"
      }
    ],
    version: 12.1
  },
  man_in_manual_wheelchair: {
    id: "man_in_manual_wheelchair",
    name: "Man in Manual Wheelchair",
    keywords: [
      "disability",
      "accessibility"
    ],
    skins: [
      {
        unified: "1f468-200d-1f9bd",
        native: "👨‍🦽"
      },
      {
        unified: "1f468-1f3fb-200d-1f9bd",
        native: "👨🏻‍🦽"
      },
      {
        unified: "1f468-1f3fc-200d-1f9bd",
        native: "👨🏼‍🦽"
      },
      {
        unified: "1f468-1f3fd-200d-1f9bd",
        native: "👨🏽‍🦽"
      },
      {
        unified: "1f468-1f3fe-200d-1f9bd",
        native: "👨🏾‍🦽"
      },
      {
        unified: "1f468-1f3ff-200d-1f9bd",
        native: "👨🏿‍🦽"
      }
    ],
    version: 12
  },
  woman_in_manual_wheelchair: {
    id: "woman_in_manual_wheelchair",
    name: "Woman in Manual Wheelchair",
    keywords: [
      "disability",
      "accessibility"
    ],
    skins: [
      {
        unified: "1f469-200d-1f9bd",
        native: "👩‍🦽"
      },
      {
        unified: "1f469-1f3fb-200d-1f9bd",
        native: "👩🏻‍🦽"
      },
      {
        unified: "1f469-1f3fc-200d-1f9bd",
        native: "👩🏼‍🦽"
      },
      {
        unified: "1f469-1f3fd-200d-1f9bd",
        native: "👩🏽‍🦽"
      },
      {
        unified: "1f469-1f3fe-200d-1f9bd",
        native: "👩🏾‍🦽"
      },
      {
        unified: "1f469-1f3ff-200d-1f9bd",
        native: "👩🏿‍🦽"
      }
    ],
    version: 12
  },
  runner: {
    id: "runner",
    name: "Runner",
    keywords: [
      "running",
      "person",
      "move"
    ],
    skins: [
      {
        unified: "1f3c3",
        native: "🏃"
      },
      {
        unified: "1f3c3-1f3fb",
        native: "🏃🏻"
      },
      {
        unified: "1f3c3-1f3fc",
        native: "🏃🏼"
      },
      {
        unified: "1f3c3-1f3fd",
        native: "🏃🏽"
      },
      {
        unified: "1f3c3-1f3fe",
        native: "🏃🏾"
      },
      {
        unified: "1f3c3-1f3ff",
        native: "🏃🏿"
      }
    ],
    version: 1
  },
  "man-running": {
    id: "man-running",
    name: "Man Running",
    keywords: [
      "walking",
      "exercise",
      "race"
    ],
    skins: [
      {
        unified: "1f3c3-200d-2642-fe0f",
        native: "🏃‍♂️"
      },
      {
        unified: "1f3c3-1f3fb-200d-2642-fe0f",
        native: "🏃🏻‍♂️"
      },
      {
        unified: "1f3c3-1f3fc-200d-2642-fe0f",
        native: "🏃🏼‍♂️"
      },
      {
        unified: "1f3c3-1f3fd-200d-2642-fe0f",
        native: "🏃🏽‍♂️"
      },
      {
        unified: "1f3c3-1f3fe-200d-2642-fe0f",
        native: "🏃🏾‍♂️"
      },
      {
        unified: "1f3c3-1f3ff-200d-2642-fe0f",
        native: "🏃🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-running": {
    id: "woman-running",
    name: "Woman Running",
    keywords: [
      "walking",
      "exercise",
      "race",
      "female"
    ],
    skins: [
      {
        unified: "1f3c3-200d-2640-fe0f",
        native: "🏃‍♀️"
      },
      {
        unified: "1f3c3-1f3fb-200d-2640-fe0f",
        native: "🏃🏻‍♀️"
      },
      {
        unified: "1f3c3-1f3fc-200d-2640-fe0f",
        native: "🏃🏼‍♀️"
      },
      {
        unified: "1f3c3-1f3fd-200d-2640-fe0f",
        native: "🏃🏽‍♀️"
      },
      {
        unified: "1f3c3-1f3fe-200d-2640-fe0f",
        native: "🏃🏾‍♀️"
      },
      {
        unified: "1f3c3-1f3ff-200d-2640-fe0f",
        native: "🏃🏿‍♀️"
      }
    ],
    version: 4
  },
  dancer: {
    id: "dancer",
    name: "Dancer",
    keywords: [
      "woman",
      "dancing",
      "female",
      "girl",
      "fun"
    ],
    skins: [
      {
        unified: "1f483",
        native: "💃"
      },
      {
        unified: "1f483-1f3fb",
        native: "💃🏻"
      },
      {
        unified: "1f483-1f3fc",
        native: "💃🏼"
      },
      {
        unified: "1f483-1f3fd",
        native: "💃🏽"
      },
      {
        unified: "1f483-1f3fe",
        native: "💃🏾"
      },
      {
        unified: "1f483-1f3ff",
        native: "💃🏿"
      }
    ],
    version: 1
  },
  man_dancing: {
    id: "man_dancing",
    name: "Man Dancing",
    keywords: [
      "male",
      "boy",
      "fun",
      "dancer"
    ],
    skins: [
      {
        unified: "1f57a",
        native: "🕺"
      },
      {
        unified: "1f57a-1f3fb",
        native: "🕺🏻"
      },
      {
        unified: "1f57a-1f3fc",
        native: "🕺🏼"
      },
      {
        unified: "1f57a-1f3fd",
        native: "🕺🏽"
      },
      {
        unified: "1f57a-1f3fe",
        native: "🕺🏾"
      },
      {
        unified: "1f57a-1f3ff",
        native: "🕺🏿"
      }
    ],
    version: 3
  },
  man_in_business_suit_levitating: {
    id: "man_in_business_suit_levitating",
    name: "Person in Suit Levitating",
    keywords: [
      "man",
      "business",
      "levitate",
      "hover",
      "jump"
    ],
    skins: [
      {
        unified: "1f574-fe0f",
        native: "🕴️"
      },
      {
        unified: "1f574-1f3fb",
        native: "🕴🏻"
      },
      {
        unified: "1f574-1f3fc",
        native: "🕴🏼"
      },
      {
        unified: "1f574-1f3fd",
        native: "🕴🏽"
      },
      {
        unified: "1f574-1f3fe",
        native: "🕴🏾"
      },
      {
        unified: "1f574-1f3ff",
        native: "🕴🏿"
      }
    ],
    version: 1
  },
  dancers: {
    id: "dancers",
    name: "Woman with Bunny Ears",
    keywords: [
      "dancers",
      "people",
      "perform",
      "costume"
    ],
    skins: [
      {
        unified: "1f46f",
        native: "👯"
      }
    ],
    version: 1
  },
  "men-with-bunny-ears-partying": {
    id: "men-with-bunny-ears-partying",
    name: "Men with Bunny Ears",
    keywords: [
      "with-bunny-ears-partying",
      "man",
      "male",
      "boys"
    ],
    skins: [
      {
        unified: "1f46f-200d-2642-fe0f",
        native: "👯‍♂️"
      }
    ],
    version: 4
  },
  "women-with-bunny-ears-partying": {
    id: "women-with-bunny-ears-partying",
    name: "Women with Bunny Ears",
    keywords: [
      "with-bunny-ears-partying",
      "woman",
      "female",
      "girls"
    ],
    skins: [
      {
        unified: "1f46f-200d-2640-fe0f",
        native: "👯‍♀️"
      }
    ],
    version: 4
  },
  person_in_steamy_room: {
    id: "person_in_steamy_room",
    name: "Person in Steamy Room",
    keywords: [
      "relax",
      "spa"
    ],
    skins: [
      {
        unified: "1f9d6",
        native: "🧖"
      },
      {
        unified: "1f9d6-1f3fb",
        native: "🧖🏻"
      },
      {
        unified: "1f9d6-1f3fc",
        native: "🧖🏼"
      },
      {
        unified: "1f9d6-1f3fd",
        native: "🧖🏽"
      },
      {
        unified: "1f9d6-1f3fe",
        native: "🧖🏾"
      },
      {
        unified: "1f9d6-1f3ff",
        native: "🧖🏿"
      }
    ],
    version: 5
  },
  man_in_steamy_room: {
    id: "man_in_steamy_room",
    name: "Man in Steamy Room",
    keywords: [
      "male",
      "spa",
      "steamroom",
      "sauna"
    ],
    skins: [
      {
        unified: "1f9d6-200d-2642-fe0f",
        native: "🧖‍♂️"
      },
      {
        unified: "1f9d6-1f3fb-200d-2642-fe0f",
        native: "🧖🏻‍♂️"
      },
      {
        unified: "1f9d6-1f3fc-200d-2642-fe0f",
        native: "🧖🏼‍♂️"
      },
      {
        unified: "1f9d6-1f3fd-200d-2642-fe0f",
        native: "🧖🏽‍♂️"
      },
      {
        unified: "1f9d6-1f3fe-200d-2642-fe0f",
        native: "🧖🏾‍♂️"
      },
      {
        unified: "1f9d6-1f3ff-200d-2642-fe0f",
        native: "🧖🏿‍♂️"
      }
    ],
    version: 5
  },
  woman_in_steamy_room: {
    id: "woman_in_steamy_room",
    name: "Woman in Steamy Room",
    keywords: [
      "female",
      "spa",
      "steamroom",
      "sauna"
    ],
    skins: [
      {
        unified: "1f9d6-200d-2640-fe0f",
        native: "🧖‍♀️"
      },
      {
        unified: "1f9d6-1f3fb-200d-2640-fe0f",
        native: "🧖🏻‍♀️"
      },
      {
        unified: "1f9d6-1f3fc-200d-2640-fe0f",
        native: "🧖🏼‍♀️"
      },
      {
        unified: "1f9d6-1f3fd-200d-2640-fe0f",
        native: "🧖🏽‍♀️"
      },
      {
        unified: "1f9d6-1f3fe-200d-2640-fe0f",
        native: "🧖🏾‍♀️"
      },
      {
        unified: "1f9d6-1f3ff-200d-2640-fe0f",
        native: "🧖🏿‍♀️"
      }
    ],
    version: 5
  },
  person_climbing: {
    id: "person_climbing",
    name: "Person Climbing",
    keywords: [
      "sport"
    ],
    skins: [
      {
        unified: "1f9d7",
        native: "🧗"
      },
      {
        unified: "1f9d7-1f3fb",
        native: "🧗🏻"
      },
      {
        unified: "1f9d7-1f3fc",
        native: "🧗🏼"
      },
      {
        unified: "1f9d7-1f3fd",
        native: "🧗🏽"
      },
      {
        unified: "1f9d7-1f3fe",
        native: "🧗🏾"
      },
      {
        unified: "1f9d7-1f3ff",
        native: "🧗🏿"
      }
    ],
    version: 5
  },
  man_climbing: {
    id: "man_climbing",
    name: "Man Climbing",
    keywords: [
      "sports",
      "hobby",
      "male",
      "rock"
    ],
    skins: [
      {
        unified: "1f9d7-200d-2642-fe0f",
        native: "🧗‍♂️"
      },
      {
        unified: "1f9d7-1f3fb-200d-2642-fe0f",
        native: "🧗🏻‍♂️"
      },
      {
        unified: "1f9d7-1f3fc-200d-2642-fe0f",
        native: "🧗🏼‍♂️"
      },
      {
        unified: "1f9d7-1f3fd-200d-2642-fe0f",
        native: "🧗🏽‍♂️"
      },
      {
        unified: "1f9d7-1f3fe-200d-2642-fe0f",
        native: "🧗🏾‍♂️"
      },
      {
        unified: "1f9d7-1f3ff-200d-2642-fe0f",
        native: "🧗🏿‍♂️"
      }
    ],
    version: 5
  },
  woman_climbing: {
    id: "woman_climbing",
    name: "Woman Climbing",
    keywords: [
      "sports",
      "hobby",
      "female",
      "rock"
    ],
    skins: [
      {
        unified: "1f9d7-200d-2640-fe0f",
        native: "🧗‍♀️"
      },
      {
        unified: "1f9d7-1f3fb-200d-2640-fe0f",
        native: "🧗🏻‍♀️"
      },
      {
        unified: "1f9d7-1f3fc-200d-2640-fe0f",
        native: "🧗🏼‍♀️"
      },
      {
        unified: "1f9d7-1f3fd-200d-2640-fe0f",
        native: "🧗🏽‍♀️"
      },
      {
        unified: "1f9d7-1f3fe-200d-2640-fe0f",
        native: "🧗🏾‍♀️"
      },
      {
        unified: "1f9d7-1f3ff-200d-2640-fe0f",
        native: "🧗🏿‍♀️"
      }
    ],
    version: 5
  },
  fencer: {
    id: "fencer",
    name: "Fencer",
    keywords: [
      "person",
      "fencing",
      "sports",
      "sword"
    ],
    skins: [
      {
        unified: "1f93a",
        native: "🤺"
      }
    ],
    version: 3
  },
  horse_racing: {
    id: "horse_racing",
    name: "Horse Racing",
    keywords: [
      "animal",
      "betting",
      "competition",
      "gambling",
      "luck"
    ],
    skins: [
      {
        unified: "1f3c7",
        native: "🏇"
      },
      {
        unified: "1f3c7-1f3fb",
        native: "🏇🏻"
      },
      {
        unified: "1f3c7-1f3fc",
        native: "🏇🏼"
      },
      {
        unified: "1f3c7-1f3fd",
        native: "🏇🏽"
      },
      {
        unified: "1f3c7-1f3fe",
        native: "🏇🏾"
      },
      {
        unified: "1f3c7-1f3ff",
        native: "🏇🏿"
      }
    ],
    version: 1
  },
  skier: {
    id: "skier",
    name: "Skier",
    keywords: [
      "sports",
      "winter",
      "snow"
    ],
    skins: [
      {
        unified: "26f7-fe0f",
        native: "⛷️"
      }
    ],
    version: 1
  },
  snowboarder: {
    id: "snowboarder",
    name: "Snowboarder",
    keywords: [
      "sports",
      "winter"
    ],
    skins: [
      {
        unified: "1f3c2",
        native: "🏂"
      },
      {
        unified: "1f3c2-1f3fb",
        native: "🏂🏻"
      },
      {
        unified: "1f3c2-1f3fc",
        native: "🏂🏼"
      },
      {
        unified: "1f3c2-1f3fd",
        native: "🏂🏽"
      },
      {
        unified: "1f3c2-1f3fe",
        native: "🏂🏾"
      },
      {
        unified: "1f3c2-1f3ff",
        native: "🏂🏿"
      }
    ],
    version: 1
  },
  golfer: {
    id: "golfer",
    name: "Person Golfing",
    keywords: [
      "golfer",
      "sports",
      "business"
    ],
    skins: [
      {
        unified: "1f3cc-fe0f",
        native: "🏌️"
      },
      {
        unified: "1f3cc-1f3fb",
        native: "🏌🏻"
      },
      {
        unified: "1f3cc-1f3fc",
        native: "🏌🏼"
      },
      {
        unified: "1f3cc-1f3fd",
        native: "🏌🏽"
      },
      {
        unified: "1f3cc-1f3fe",
        native: "🏌🏾"
      },
      {
        unified: "1f3cc-1f3ff",
        native: "🏌🏿"
      }
    ],
    version: 1
  },
  "man-golfing": {
    id: "man-golfing",
    name: "Man Golfing",
    keywords: [
      "sport"
    ],
    skins: [
      {
        unified: "1f3cc-fe0f-200d-2642-fe0f",
        native: "🏌️‍♂️"
      },
      {
        unified: "1f3cc-1f3fb-200d-2642-fe0f",
        native: "🏌🏻‍♂️"
      },
      {
        unified: "1f3cc-1f3fc-200d-2642-fe0f",
        native: "🏌🏼‍♂️"
      },
      {
        unified: "1f3cc-1f3fd-200d-2642-fe0f",
        native: "🏌🏽‍♂️"
      },
      {
        unified: "1f3cc-1f3fe-200d-2642-fe0f",
        native: "🏌🏾‍♂️"
      },
      {
        unified: "1f3cc-1f3ff-200d-2642-fe0f",
        native: "🏌🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-golfing": {
    id: "woman-golfing",
    name: "Woman Golfing",
    keywords: [
      "sports",
      "business",
      "female"
    ],
    skins: [
      {
        unified: "1f3cc-fe0f-200d-2640-fe0f",
        native: "🏌️‍♀️"
      },
      {
        unified: "1f3cc-1f3fb-200d-2640-fe0f",
        native: "🏌🏻‍♀️"
      },
      {
        unified: "1f3cc-1f3fc-200d-2640-fe0f",
        native: "🏌🏼‍♀️"
      },
      {
        unified: "1f3cc-1f3fd-200d-2640-fe0f",
        native: "🏌🏽‍♀️"
      },
      {
        unified: "1f3cc-1f3fe-200d-2640-fe0f",
        native: "🏌🏾‍♀️"
      },
      {
        unified: "1f3cc-1f3ff-200d-2640-fe0f",
        native: "🏌🏿‍♀️"
      }
    ],
    version: 4
  },
  surfer: {
    id: "surfer",
    name: "Surfer",
    keywords: [
      "person",
      "surfing",
      "sport",
      "sea"
    ],
    skins: [
      {
        unified: "1f3c4",
        native: "🏄"
      },
      {
        unified: "1f3c4-1f3fb",
        native: "🏄🏻"
      },
      {
        unified: "1f3c4-1f3fc",
        native: "🏄🏼"
      },
      {
        unified: "1f3c4-1f3fd",
        native: "🏄🏽"
      },
      {
        unified: "1f3c4-1f3fe",
        native: "🏄🏾"
      },
      {
        unified: "1f3c4-1f3ff",
        native: "🏄🏿"
      }
    ],
    version: 1
  },
  "man-surfing": {
    id: "man-surfing",
    name: "Man Surfing",
    keywords: [
      "sports",
      "ocean",
      "sea",
      "summer",
      "beach"
    ],
    skins: [
      {
        unified: "1f3c4-200d-2642-fe0f",
        native: "🏄‍♂️"
      },
      {
        unified: "1f3c4-1f3fb-200d-2642-fe0f",
        native: "🏄🏻‍♂️"
      },
      {
        unified: "1f3c4-1f3fc-200d-2642-fe0f",
        native: "🏄🏼‍♂️"
      },
      {
        unified: "1f3c4-1f3fd-200d-2642-fe0f",
        native: "🏄🏽‍♂️"
      },
      {
        unified: "1f3c4-1f3fe-200d-2642-fe0f",
        native: "🏄🏾‍♂️"
      },
      {
        unified: "1f3c4-1f3ff-200d-2642-fe0f",
        native: "🏄🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-surfing": {
    id: "woman-surfing",
    name: "Woman Surfing",
    keywords: [
      "sports",
      "ocean",
      "sea",
      "summer",
      "beach",
      "female"
    ],
    skins: [
      {
        unified: "1f3c4-200d-2640-fe0f",
        native: "🏄‍♀️"
      },
      {
        unified: "1f3c4-1f3fb-200d-2640-fe0f",
        native: "🏄🏻‍♀️"
      },
      {
        unified: "1f3c4-1f3fc-200d-2640-fe0f",
        native: "🏄🏼‍♀️"
      },
      {
        unified: "1f3c4-1f3fd-200d-2640-fe0f",
        native: "🏄🏽‍♀️"
      },
      {
        unified: "1f3c4-1f3fe-200d-2640-fe0f",
        native: "🏄🏾‍♀️"
      },
      {
        unified: "1f3c4-1f3ff-200d-2640-fe0f",
        native: "🏄🏿‍♀️"
      }
    ],
    version: 4
  },
  rowboat: {
    id: "rowboat",
    name: "Rowboat",
    keywords: [
      "person",
      "rowing",
      "boat",
      "sport",
      "move"
    ],
    skins: [
      {
        unified: "1f6a3",
        native: "🚣"
      },
      {
        unified: "1f6a3-1f3fb",
        native: "🚣🏻"
      },
      {
        unified: "1f6a3-1f3fc",
        native: "🚣🏼"
      },
      {
        unified: "1f6a3-1f3fd",
        native: "🚣🏽"
      },
      {
        unified: "1f6a3-1f3fe",
        native: "🚣🏾"
      },
      {
        unified: "1f6a3-1f3ff",
        native: "🚣🏿"
      }
    ],
    version: 1
  },
  "man-rowing-boat": {
    id: "man-rowing-boat",
    name: "Man Rowing Boat",
    keywords: [
      "rowing-boat",
      "sports",
      "hobby",
      "water",
      "ship"
    ],
    skins: [
      {
        unified: "1f6a3-200d-2642-fe0f",
        native: "🚣‍♂️"
      },
      {
        unified: "1f6a3-1f3fb-200d-2642-fe0f",
        native: "🚣🏻‍♂️"
      },
      {
        unified: "1f6a3-1f3fc-200d-2642-fe0f",
        native: "🚣🏼‍♂️"
      },
      {
        unified: "1f6a3-1f3fd-200d-2642-fe0f",
        native: "🚣🏽‍♂️"
      },
      {
        unified: "1f6a3-1f3fe-200d-2642-fe0f",
        native: "🚣🏾‍♂️"
      },
      {
        unified: "1f6a3-1f3ff-200d-2642-fe0f",
        native: "🚣🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-rowing-boat": {
    id: "woman-rowing-boat",
    name: "Woman Rowing Boat",
    keywords: [
      "rowing-boat",
      "sports",
      "hobby",
      "water",
      "ship",
      "female"
    ],
    skins: [
      {
        unified: "1f6a3-200d-2640-fe0f",
        native: "🚣‍♀️"
      },
      {
        unified: "1f6a3-1f3fb-200d-2640-fe0f",
        native: "🚣🏻‍♀️"
      },
      {
        unified: "1f6a3-1f3fc-200d-2640-fe0f",
        native: "🚣🏼‍♀️"
      },
      {
        unified: "1f6a3-1f3fd-200d-2640-fe0f",
        native: "🚣🏽‍♀️"
      },
      {
        unified: "1f6a3-1f3fe-200d-2640-fe0f",
        native: "🚣🏾‍♀️"
      },
      {
        unified: "1f6a3-1f3ff-200d-2640-fe0f",
        native: "🚣🏿‍♀️"
      }
    ],
    version: 4
  },
  swimmer: {
    id: "swimmer",
    name: "Swimmer",
    keywords: [
      "person",
      "swimming",
      "sport",
      "pool"
    ],
    skins: [
      {
        unified: "1f3ca",
        native: "🏊"
      },
      {
        unified: "1f3ca-1f3fb",
        native: "🏊🏻"
      },
      {
        unified: "1f3ca-1f3fc",
        native: "🏊🏼"
      },
      {
        unified: "1f3ca-1f3fd",
        native: "🏊🏽"
      },
      {
        unified: "1f3ca-1f3fe",
        native: "🏊🏾"
      },
      {
        unified: "1f3ca-1f3ff",
        native: "🏊🏿"
      }
    ],
    version: 1
  },
  "man-swimming": {
    id: "man-swimming",
    name: "Man Swimming",
    keywords: [
      "sports",
      "exercise",
      "human",
      "athlete",
      "water",
      "summer"
    ],
    skins: [
      {
        unified: "1f3ca-200d-2642-fe0f",
        native: "🏊‍♂️"
      },
      {
        unified: "1f3ca-1f3fb-200d-2642-fe0f",
        native: "🏊🏻‍♂️"
      },
      {
        unified: "1f3ca-1f3fc-200d-2642-fe0f",
        native: "🏊🏼‍♂️"
      },
      {
        unified: "1f3ca-1f3fd-200d-2642-fe0f",
        native: "🏊🏽‍♂️"
      },
      {
        unified: "1f3ca-1f3fe-200d-2642-fe0f",
        native: "🏊🏾‍♂️"
      },
      {
        unified: "1f3ca-1f3ff-200d-2642-fe0f",
        native: "🏊🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-swimming": {
    id: "woman-swimming",
    name: "Woman Swimming",
    keywords: [
      "sports",
      "exercise",
      "human",
      "athlete",
      "water",
      "summer",
      "female"
    ],
    skins: [
      {
        unified: "1f3ca-200d-2640-fe0f",
        native: "🏊‍♀️"
      },
      {
        unified: "1f3ca-1f3fb-200d-2640-fe0f",
        native: "🏊🏻‍♀️"
      },
      {
        unified: "1f3ca-1f3fc-200d-2640-fe0f",
        native: "🏊🏼‍♀️"
      },
      {
        unified: "1f3ca-1f3fd-200d-2640-fe0f",
        native: "🏊🏽‍♀️"
      },
      {
        unified: "1f3ca-1f3fe-200d-2640-fe0f",
        native: "🏊🏾‍♀️"
      },
      {
        unified: "1f3ca-1f3ff-200d-2640-fe0f",
        native: "🏊🏿‍♀️"
      }
    ],
    version: 4
  },
  person_with_ball: {
    id: "person_with_ball",
    name: "Person Bouncing Ball",
    keywords: [
      "with",
      "sports",
      "human"
    ],
    skins: [
      {
        unified: "26f9-fe0f",
        native: "⛹️"
      },
      {
        unified: "26f9-1f3fb",
        native: "⛹🏻"
      },
      {
        unified: "26f9-1f3fc",
        native: "⛹🏼"
      },
      {
        unified: "26f9-1f3fd",
        native: "⛹🏽"
      },
      {
        unified: "26f9-1f3fe",
        native: "⛹🏾"
      },
      {
        unified: "26f9-1f3ff",
        native: "⛹🏿"
      }
    ],
    version: 1
  },
  "man-bouncing-ball": {
    id: "man-bouncing-ball",
    name: "Man Bouncing Ball",
    keywords: [
      "bouncing-ball",
      "sport"
    ],
    skins: [
      {
        unified: "26f9-fe0f-200d-2642-fe0f",
        native: "⛹️‍♂️"
      },
      {
        unified: "26f9-1f3fb-200d-2642-fe0f",
        native: "⛹🏻‍♂️"
      },
      {
        unified: "26f9-1f3fc-200d-2642-fe0f",
        native: "⛹🏼‍♂️"
      },
      {
        unified: "26f9-1f3fd-200d-2642-fe0f",
        native: "⛹🏽‍♂️"
      },
      {
        unified: "26f9-1f3fe-200d-2642-fe0f",
        native: "⛹🏾‍♂️"
      },
      {
        unified: "26f9-1f3ff-200d-2642-fe0f",
        native: "⛹🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-bouncing-ball": {
    id: "woman-bouncing-ball",
    name: "Woman Bouncing Ball",
    keywords: [
      "bouncing-ball",
      "sports",
      "human",
      "female"
    ],
    skins: [
      {
        unified: "26f9-fe0f-200d-2640-fe0f",
        native: "⛹️‍♀️"
      },
      {
        unified: "26f9-1f3fb-200d-2640-fe0f",
        native: "⛹🏻‍♀️"
      },
      {
        unified: "26f9-1f3fc-200d-2640-fe0f",
        native: "⛹🏼‍♀️"
      },
      {
        unified: "26f9-1f3fd-200d-2640-fe0f",
        native: "⛹🏽‍♀️"
      },
      {
        unified: "26f9-1f3fe-200d-2640-fe0f",
        native: "⛹🏾‍♀️"
      },
      {
        unified: "26f9-1f3ff-200d-2640-fe0f",
        native: "⛹🏿‍♀️"
      }
    ],
    version: 4
  },
  weight_lifter: {
    id: "weight_lifter",
    name: "Person Lifting Weights",
    keywords: [
      "weight",
      "lifter",
      "sports",
      "training",
      "exercise"
    ],
    skins: [
      {
        unified: "1f3cb-fe0f",
        native: "🏋️"
      },
      {
        unified: "1f3cb-1f3fb",
        native: "🏋🏻"
      },
      {
        unified: "1f3cb-1f3fc",
        native: "🏋🏼"
      },
      {
        unified: "1f3cb-1f3fd",
        native: "🏋🏽"
      },
      {
        unified: "1f3cb-1f3fe",
        native: "🏋🏾"
      },
      {
        unified: "1f3cb-1f3ff",
        native: "🏋🏿"
      }
    ],
    version: 1
  },
  "man-lifting-weights": {
    id: "man-lifting-weights",
    name: "Man Lifting Weights",
    keywords: [
      "lifting-weights",
      "sport"
    ],
    skins: [
      {
        unified: "1f3cb-fe0f-200d-2642-fe0f",
        native: "🏋️‍♂️"
      },
      {
        unified: "1f3cb-1f3fb-200d-2642-fe0f",
        native: "🏋🏻‍♂️"
      },
      {
        unified: "1f3cb-1f3fc-200d-2642-fe0f",
        native: "🏋🏼‍♂️"
      },
      {
        unified: "1f3cb-1f3fd-200d-2642-fe0f",
        native: "🏋🏽‍♂️"
      },
      {
        unified: "1f3cb-1f3fe-200d-2642-fe0f",
        native: "🏋🏾‍♂️"
      },
      {
        unified: "1f3cb-1f3ff-200d-2642-fe0f",
        native: "🏋🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-lifting-weights": {
    id: "woman-lifting-weights",
    name: "Woman Lifting Weights",
    keywords: [
      "lifting-weights",
      "sports",
      "training",
      "exercise",
      "female"
    ],
    skins: [
      {
        unified: "1f3cb-fe0f-200d-2640-fe0f",
        native: "🏋️‍♀️"
      },
      {
        unified: "1f3cb-1f3fb-200d-2640-fe0f",
        native: "🏋🏻‍♀️"
      },
      {
        unified: "1f3cb-1f3fc-200d-2640-fe0f",
        native: "🏋🏼‍♀️"
      },
      {
        unified: "1f3cb-1f3fd-200d-2640-fe0f",
        native: "🏋🏽‍♀️"
      },
      {
        unified: "1f3cb-1f3fe-200d-2640-fe0f",
        native: "🏋🏾‍♀️"
      },
      {
        unified: "1f3cb-1f3ff-200d-2640-fe0f",
        native: "🏋🏿‍♀️"
      }
    ],
    version: 4
  },
  bicyclist: {
    id: "bicyclist",
    name: "Bicyclist",
    keywords: [
      "person",
      "biking",
      "sport",
      "move"
    ],
    skins: [
      {
        unified: "1f6b4",
        native: "🚴"
      },
      {
        unified: "1f6b4-1f3fb",
        native: "🚴🏻"
      },
      {
        unified: "1f6b4-1f3fc",
        native: "🚴🏼"
      },
      {
        unified: "1f6b4-1f3fd",
        native: "🚴🏽"
      },
      {
        unified: "1f6b4-1f3fe",
        native: "🚴🏾"
      },
      {
        unified: "1f6b4-1f3ff",
        native: "🚴🏿"
      }
    ],
    version: 1
  },
  "man-biking": {
    id: "man-biking",
    name: "Man Biking",
    keywords: [
      "sports",
      "bike",
      "exercise",
      "hipster"
    ],
    skins: [
      {
        unified: "1f6b4-200d-2642-fe0f",
        native: "🚴‍♂️"
      },
      {
        unified: "1f6b4-1f3fb-200d-2642-fe0f",
        native: "🚴🏻‍♂️"
      },
      {
        unified: "1f6b4-1f3fc-200d-2642-fe0f",
        native: "🚴🏼‍♂️"
      },
      {
        unified: "1f6b4-1f3fd-200d-2642-fe0f",
        native: "🚴🏽‍♂️"
      },
      {
        unified: "1f6b4-1f3fe-200d-2642-fe0f",
        native: "🚴🏾‍♂️"
      },
      {
        unified: "1f6b4-1f3ff-200d-2642-fe0f",
        native: "🚴🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-biking": {
    id: "woman-biking",
    name: "Woman Biking",
    keywords: [
      "sports",
      "bike",
      "exercise",
      "hipster",
      "female"
    ],
    skins: [
      {
        unified: "1f6b4-200d-2640-fe0f",
        native: "🚴‍♀️"
      },
      {
        unified: "1f6b4-1f3fb-200d-2640-fe0f",
        native: "🚴🏻‍♀️"
      },
      {
        unified: "1f6b4-1f3fc-200d-2640-fe0f",
        native: "🚴🏼‍♀️"
      },
      {
        unified: "1f6b4-1f3fd-200d-2640-fe0f",
        native: "🚴🏽‍♀️"
      },
      {
        unified: "1f6b4-1f3fe-200d-2640-fe0f",
        native: "🚴🏾‍♀️"
      },
      {
        unified: "1f6b4-1f3ff-200d-2640-fe0f",
        native: "🚴🏿‍♀️"
      }
    ],
    version: 4
  },
  mountain_bicyclist: {
    id: "mountain_bicyclist",
    name: "Mountain Bicyclist",
    keywords: [
      "person",
      "biking",
      "sport",
      "move"
    ],
    skins: [
      {
        unified: "1f6b5",
        native: "🚵"
      },
      {
        unified: "1f6b5-1f3fb",
        native: "🚵🏻"
      },
      {
        unified: "1f6b5-1f3fc",
        native: "🚵🏼"
      },
      {
        unified: "1f6b5-1f3fd",
        native: "🚵🏽"
      },
      {
        unified: "1f6b5-1f3fe",
        native: "🚵🏾"
      },
      {
        unified: "1f6b5-1f3ff",
        native: "🚵🏿"
      }
    ],
    version: 1
  },
  "man-mountain-biking": {
    id: "man-mountain-biking",
    name: "Man Mountain Biking",
    keywords: [
      "mountain-biking",
      "transportation",
      "sports",
      "human",
      "race",
      "bike"
    ],
    skins: [
      {
        unified: "1f6b5-200d-2642-fe0f",
        native: "🚵‍♂️"
      },
      {
        unified: "1f6b5-1f3fb-200d-2642-fe0f",
        native: "🚵🏻‍♂️"
      },
      {
        unified: "1f6b5-1f3fc-200d-2642-fe0f",
        native: "🚵🏼‍♂️"
      },
      {
        unified: "1f6b5-1f3fd-200d-2642-fe0f",
        native: "🚵🏽‍♂️"
      },
      {
        unified: "1f6b5-1f3fe-200d-2642-fe0f",
        native: "🚵🏾‍♂️"
      },
      {
        unified: "1f6b5-1f3ff-200d-2642-fe0f",
        native: "🚵🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-mountain-biking": {
    id: "woman-mountain-biking",
    name: "Woman Mountain Biking",
    keywords: [
      "mountain-biking",
      "transportation",
      "sports",
      "human",
      "race",
      "bike",
      "female"
    ],
    skins: [
      {
        unified: "1f6b5-200d-2640-fe0f",
        native: "🚵‍♀️"
      },
      {
        unified: "1f6b5-1f3fb-200d-2640-fe0f",
        native: "🚵🏻‍♀️"
      },
      {
        unified: "1f6b5-1f3fc-200d-2640-fe0f",
        native: "🚵🏼‍♀️"
      },
      {
        unified: "1f6b5-1f3fd-200d-2640-fe0f",
        native: "🚵🏽‍♀️"
      },
      {
        unified: "1f6b5-1f3fe-200d-2640-fe0f",
        native: "🚵🏾‍♀️"
      },
      {
        unified: "1f6b5-1f3ff-200d-2640-fe0f",
        native: "🚵🏿‍♀️"
      }
    ],
    version: 4
  },
  person_doing_cartwheel: {
    id: "person_doing_cartwheel",
    name: "Person Cartwheeling",
    keywords: [
      "doing",
      "cartwheel",
      "sport",
      "gymnastic"
    ],
    skins: [
      {
        unified: "1f938",
        native: "🤸"
      },
      {
        unified: "1f938-1f3fb",
        native: "🤸🏻"
      },
      {
        unified: "1f938-1f3fc",
        native: "🤸🏼"
      },
      {
        unified: "1f938-1f3fd",
        native: "🤸🏽"
      },
      {
        unified: "1f938-1f3fe",
        native: "🤸🏾"
      },
      {
        unified: "1f938-1f3ff",
        native: "🤸🏿"
      }
    ],
    version: 3
  },
  "man-cartwheeling": {
    id: "man-cartwheeling",
    name: "Man Cartwheeling",
    keywords: [
      "gymnastics"
    ],
    skins: [
      {
        unified: "1f938-200d-2642-fe0f",
        native: "🤸‍♂️"
      },
      {
        unified: "1f938-1f3fb-200d-2642-fe0f",
        native: "🤸🏻‍♂️"
      },
      {
        unified: "1f938-1f3fc-200d-2642-fe0f",
        native: "🤸🏼‍♂️"
      },
      {
        unified: "1f938-1f3fd-200d-2642-fe0f",
        native: "🤸🏽‍♂️"
      },
      {
        unified: "1f938-1f3fe-200d-2642-fe0f",
        native: "🤸🏾‍♂️"
      },
      {
        unified: "1f938-1f3ff-200d-2642-fe0f",
        native: "🤸🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-cartwheeling": {
    id: "woman-cartwheeling",
    name: "Woman Cartwheeling",
    keywords: [
      "gymnastics"
    ],
    skins: [
      {
        unified: "1f938-200d-2640-fe0f",
        native: "🤸‍♀️"
      },
      {
        unified: "1f938-1f3fb-200d-2640-fe0f",
        native: "🤸🏻‍♀️"
      },
      {
        unified: "1f938-1f3fc-200d-2640-fe0f",
        native: "🤸🏼‍♀️"
      },
      {
        unified: "1f938-1f3fd-200d-2640-fe0f",
        native: "🤸🏽‍♀️"
      },
      {
        unified: "1f938-1f3fe-200d-2640-fe0f",
        native: "🤸🏾‍♀️"
      },
      {
        unified: "1f938-1f3ff-200d-2640-fe0f",
        native: "🤸🏿‍♀️"
      }
    ],
    version: 4
  },
  wrestlers: {
    id: "wrestlers",
    name: "Wrestlers",
    keywords: [
      "people",
      "wrestling",
      "sport"
    ],
    skins: [
      {
        unified: "1f93c",
        native: "🤼"
      }
    ],
    version: 3
  },
  "man-wrestling": {
    id: "man-wrestling",
    name: "Men Wrestling",
    keywords: [
      "man",
      "sports",
      "wrestlers"
    ],
    skins: [
      {
        unified: "1f93c-200d-2642-fe0f",
        native: "🤼‍♂️"
      }
    ],
    version: 4
  },
  "woman-wrestling": {
    id: "woman-wrestling",
    name: "Women Wrestling",
    keywords: [
      "woman",
      "sports",
      "wrestlers"
    ],
    skins: [
      {
        unified: "1f93c-200d-2640-fe0f",
        native: "🤼‍♀️"
      }
    ],
    version: 4
  },
  water_polo: {
    id: "water_polo",
    name: "Water Polo",
    keywords: [
      "person",
      "playing",
      "sport"
    ],
    skins: [
      {
        unified: "1f93d",
        native: "🤽"
      },
      {
        unified: "1f93d-1f3fb",
        native: "🤽🏻"
      },
      {
        unified: "1f93d-1f3fc",
        native: "🤽🏼"
      },
      {
        unified: "1f93d-1f3fd",
        native: "🤽🏽"
      },
      {
        unified: "1f93d-1f3fe",
        native: "🤽🏾"
      },
      {
        unified: "1f93d-1f3ff",
        native: "🤽🏿"
      }
    ],
    version: 3
  },
  "man-playing-water-polo": {
    id: "man-playing-water-polo",
    name: "Man Playing Water Polo",
    keywords: [
      "playing-water-polo",
      "sports",
      "pool"
    ],
    skins: [
      {
        unified: "1f93d-200d-2642-fe0f",
        native: "🤽‍♂️"
      },
      {
        unified: "1f93d-1f3fb-200d-2642-fe0f",
        native: "🤽🏻‍♂️"
      },
      {
        unified: "1f93d-1f3fc-200d-2642-fe0f",
        native: "🤽🏼‍♂️"
      },
      {
        unified: "1f93d-1f3fd-200d-2642-fe0f",
        native: "🤽🏽‍♂️"
      },
      {
        unified: "1f93d-1f3fe-200d-2642-fe0f",
        native: "🤽🏾‍♂️"
      },
      {
        unified: "1f93d-1f3ff-200d-2642-fe0f",
        native: "🤽🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-playing-water-polo": {
    id: "woman-playing-water-polo",
    name: "Woman Playing Water Polo",
    keywords: [
      "playing-water-polo",
      "sports",
      "pool"
    ],
    skins: [
      {
        unified: "1f93d-200d-2640-fe0f",
        native: "🤽‍♀️"
      },
      {
        unified: "1f93d-1f3fb-200d-2640-fe0f",
        native: "🤽🏻‍♀️"
      },
      {
        unified: "1f93d-1f3fc-200d-2640-fe0f",
        native: "🤽🏼‍♀️"
      },
      {
        unified: "1f93d-1f3fd-200d-2640-fe0f",
        native: "🤽🏽‍♀️"
      },
      {
        unified: "1f93d-1f3fe-200d-2640-fe0f",
        native: "🤽🏾‍♀️"
      },
      {
        unified: "1f93d-1f3ff-200d-2640-fe0f",
        native: "🤽🏿‍♀️"
      }
    ],
    version: 4
  },
  handball: {
    id: "handball",
    name: "Handball",
    keywords: [
      "person",
      "playing",
      "sport"
    ],
    skins: [
      {
        unified: "1f93e",
        native: "🤾"
      },
      {
        unified: "1f93e-1f3fb",
        native: "🤾🏻"
      },
      {
        unified: "1f93e-1f3fc",
        native: "🤾🏼"
      },
      {
        unified: "1f93e-1f3fd",
        native: "🤾🏽"
      },
      {
        unified: "1f93e-1f3fe",
        native: "🤾🏾"
      },
      {
        unified: "1f93e-1f3ff",
        native: "🤾🏿"
      }
    ],
    version: 3
  },
  "man-playing-handball": {
    id: "man-playing-handball",
    name: "Man Playing Handball",
    keywords: [
      "playing-handball",
      "sports"
    ],
    skins: [
      {
        unified: "1f93e-200d-2642-fe0f",
        native: "🤾‍♂️"
      },
      {
        unified: "1f93e-1f3fb-200d-2642-fe0f",
        native: "🤾🏻‍♂️"
      },
      {
        unified: "1f93e-1f3fc-200d-2642-fe0f",
        native: "🤾🏼‍♂️"
      },
      {
        unified: "1f93e-1f3fd-200d-2642-fe0f",
        native: "🤾🏽‍♂️"
      },
      {
        unified: "1f93e-1f3fe-200d-2642-fe0f",
        native: "🤾🏾‍♂️"
      },
      {
        unified: "1f93e-1f3ff-200d-2642-fe0f",
        native: "🤾🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-playing-handball": {
    id: "woman-playing-handball",
    name: "Woman Playing Handball",
    keywords: [
      "playing-handball",
      "sports"
    ],
    skins: [
      {
        unified: "1f93e-200d-2640-fe0f",
        native: "🤾‍♀️"
      },
      {
        unified: "1f93e-1f3fb-200d-2640-fe0f",
        native: "🤾🏻‍♀️"
      },
      {
        unified: "1f93e-1f3fc-200d-2640-fe0f",
        native: "🤾🏼‍♀️"
      },
      {
        unified: "1f93e-1f3fd-200d-2640-fe0f",
        native: "🤾🏽‍♀️"
      },
      {
        unified: "1f93e-1f3fe-200d-2640-fe0f",
        native: "🤾🏾‍♀️"
      },
      {
        unified: "1f93e-1f3ff-200d-2640-fe0f",
        native: "🤾🏿‍♀️"
      }
    ],
    version: 4
  },
  juggling: {
    id: "juggling",
    name: "Juggling",
    keywords: [
      "person",
      "performance",
      "balance"
    ],
    skins: [
      {
        unified: "1f939",
        native: "🤹"
      },
      {
        unified: "1f939-1f3fb",
        native: "🤹🏻"
      },
      {
        unified: "1f939-1f3fc",
        native: "🤹🏼"
      },
      {
        unified: "1f939-1f3fd",
        native: "🤹🏽"
      },
      {
        unified: "1f939-1f3fe",
        native: "🤹🏾"
      },
      {
        unified: "1f939-1f3ff",
        native: "🤹🏿"
      }
    ],
    version: 3
  },
  "man-juggling": {
    id: "man-juggling",
    name: "Man Juggling",
    keywords: [
      "juggle",
      "balance",
      "skill",
      "multitask"
    ],
    skins: [
      {
        unified: "1f939-200d-2642-fe0f",
        native: "🤹‍♂️"
      },
      {
        unified: "1f939-1f3fb-200d-2642-fe0f",
        native: "🤹🏻‍♂️"
      },
      {
        unified: "1f939-1f3fc-200d-2642-fe0f",
        native: "🤹🏼‍♂️"
      },
      {
        unified: "1f939-1f3fd-200d-2642-fe0f",
        native: "🤹🏽‍♂️"
      },
      {
        unified: "1f939-1f3fe-200d-2642-fe0f",
        native: "🤹🏾‍♂️"
      },
      {
        unified: "1f939-1f3ff-200d-2642-fe0f",
        native: "🤹🏿‍♂️"
      }
    ],
    version: 4
  },
  "woman-juggling": {
    id: "woman-juggling",
    name: "Woman Juggling",
    keywords: [
      "juggle",
      "balance",
      "skill",
      "multitask"
    ],
    skins: [
      {
        unified: "1f939-200d-2640-fe0f",
        native: "🤹‍♀️"
      },
      {
        unified: "1f939-1f3fb-200d-2640-fe0f",
        native: "🤹🏻‍♀️"
      },
      {
        unified: "1f939-1f3fc-200d-2640-fe0f",
        native: "🤹🏼‍♀️"
      },
      {
        unified: "1f939-1f3fd-200d-2640-fe0f",
        native: "🤹🏽‍♀️"
      },
      {
        unified: "1f939-1f3fe-200d-2640-fe0f",
        native: "🤹🏾‍♀️"
      },
      {
        unified: "1f939-1f3ff-200d-2640-fe0f",
        native: "🤹🏿‍♀️"
      }
    ],
    version: 4
  },
  person_in_lotus_position: {
    id: "person_in_lotus_position",
    name: "Person in Lotus Position",
    keywords: [
      "meditate"
    ],
    skins: [
      {
        unified: "1f9d8",
        native: "🧘"
      },
      {
        unified: "1f9d8-1f3fb",
        native: "🧘🏻"
      },
      {
        unified: "1f9d8-1f3fc",
        native: "🧘🏼"
      },
      {
        unified: "1f9d8-1f3fd",
        native: "🧘🏽"
      },
      {
        unified: "1f9d8-1f3fe",
        native: "🧘🏾"
      },
      {
        unified: "1f9d8-1f3ff",
        native: "🧘🏿"
      }
    ],
    version: 5
  },
  man_in_lotus_position: {
    id: "man_in_lotus_position",
    name: "Man in Lotus Position",
    keywords: [
      "male",
      "meditation",
      "yoga",
      "serenity",
      "zen",
      "mindfulness"
    ],
    skins: [
      {
        unified: "1f9d8-200d-2642-fe0f",
        native: "🧘‍♂️"
      },
      {
        unified: "1f9d8-1f3fb-200d-2642-fe0f",
        native: "🧘🏻‍♂️"
      },
      {
        unified: "1f9d8-1f3fc-200d-2642-fe0f",
        native: "🧘🏼‍♂️"
      },
      {
        unified: "1f9d8-1f3fd-200d-2642-fe0f",
        native: "🧘🏽‍♂️"
      },
      {
        unified: "1f9d8-1f3fe-200d-2642-fe0f",
        native: "🧘🏾‍♂️"
      },
      {
        unified: "1f9d8-1f3ff-200d-2642-fe0f",
        native: "🧘🏿‍♂️"
      }
    ],
    version: 5
  },
  woman_in_lotus_position: {
    id: "woman_in_lotus_position",
    name: "Woman in Lotus Position",
    keywords: [
      "female",
      "meditation",
      "yoga",
      "serenity",
      "zen",
      "mindfulness"
    ],
    skins: [
      {
        unified: "1f9d8-200d-2640-fe0f",
        native: "🧘‍♀️"
      },
      {
        unified: "1f9d8-1f3fb-200d-2640-fe0f",
        native: "🧘🏻‍♀️"
      },
      {
        unified: "1f9d8-1f3fc-200d-2640-fe0f",
        native: "🧘🏼‍♀️"
      },
      {
        unified: "1f9d8-1f3fd-200d-2640-fe0f",
        native: "🧘🏽‍♀️"
      },
      {
        unified: "1f9d8-1f3fe-200d-2640-fe0f",
        native: "🧘🏾‍♀️"
      },
      {
        unified: "1f9d8-1f3ff-200d-2640-fe0f",
        native: "🧘🏿‍♀️"
      }
    ],
    version: 5
  },
  bath: {
    id: "bath",
    name: "Bath",
    keywords: [
      "person",
      "taking",
      "clean",
      "shower",
      "bathroom"
    ],
    skins: [
      {
        unified: "1f6c0",
        native: "🛀"
      },
      {
        unified: "1f6c0-1f3fb",
        native: "🛀🏻"
      },
      {
        unified: "1f6c0-1f3fc",
        native: "🛀🏼"
      },
      {
        unified: "1f6c0-1f3fd",
        native: "🛀🏽"
      },
      {
        unified: "1f6c0-1f3fe",
        native: "🛀🏾"
      },
      {
        unified: "1f6c0-1f3ff",
        native: "🛀🏿"
      }
    ],
    version: 1
  },
  sleeping_accommodation: {
    id: "sleeping_accommodation",
    name: "Person in Bed",
    keywords: [
      "sleeping",
      "accommodation",
      "rest"
    ],
    skins: [
      {
        unified: "1f6cc",
        native: "🛌"
      },
      {
        unified: "1f6cc-1f3fb",
        native: "🛌🏻"
      },
      {
        unified: "1f6cc-1f3fc",
        native: "🛌🏼"
      },
      {
        unified: "1f6cc-1f3fd",
        native: "🛌🏽"
      },
      {
        unified: "1f6cc-1f3fe",
        native: "🛌🏾"
      },
      {
        unified: "1f6cc-1f3ff",
        native: "🛌🏿"
      }
    ],
    version: 1
  },
  people_holding_hands: {
    id: "people_holding_hands",
    name: "People Holding Hands",
    keywords: [
      "friendship"
    ],
    skins: [
      {
        unified: "1f9d1-200d-1f91d-200d-1f9d1",
        native: "🧑‍🤝‍🧑"
      },
      {
        unified: "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb",
        native: "🧑🏻‍🤝‍🧑🏻"
      },
      {
        unified: "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc",
        native: "🧑🏼‍🤝‍🧑🏼"
      },
      {
        unified: "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd",
        native: "🧑🏽‍🤝‍🧑🏽"
      },
      {
        unified: "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe",
        native: "🧑🏾‍🤝‍🧑🏾"
      },
      {
        unified: "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff",
        native: "🧑🏿‍🤝‍🧑🏿"
      }
    ],
    version: 12
  },
  two_women_holding_hands: {
    id: "two_women_holding_hands",
    name: "Women Holding Hands",
    keywords: [
      "two",
      "pair",
      "friendship",
      "couple",
      "love",
      "like",
      "female",
      "people",
      "human"
    ],
    skins: [
      {
        unified: "1f46d",
        native: "👭"
      },
      {
        unified: "1f46d-1f3fb",
        native: "👭🏻"
      },
      {
        unified: "1f46d-1f3fc",
        native: "👭🏼"
      },
      {
        unified: "1f46d-1f3fd",
        native: "👭🏽"
      },
      {
        unified: "1f46d-1f3fe",
        native: "👭🏾"
      },
      {
        unified: "1f46d-1f3ff",
        native: "👭🏿"
      }
    ],
    version: 1
  },
  man_and_woman_holding_hands: {
    id: "man_and_woman_holding_hands",
    name: "Man and Woman Holding Hands",
    keywords: [
      "couple",
      "pair",
      "people",
      "human",
      "love",
      "date",
      "dating",
      "like",
      "affection",
      "valentines",
      "marriage"
    ],
    skins: [
      {
        unified: "1f46b",
        native: "👫"
      },
      {
        unified: "1f46b-1f3fb",
        native: "👫🏻"
      },
      {
        unified: "1f46b-1f3fc",
        native: "👫🏼"
      },
      {
        unified: "1f46b-1f3fd",
        native: "👫🏽"
      },
      {
        unified: "1f46b-1f3fe",
        native: "👫🏾"
      },
      {
        unified: "1f46b-1f3ff",
        native: "👫🏿"
      }
    ],
    version: 1
  },
  two_men_holding_hands: {
    id: "two_men_holding_hands",
    name: "Men Holding Hands",
    keywords: [
      "two",
      "pair",
      "couple",
      "love",
      "like",
      "bromance",
      "friendship",
      "people",
      "human"
    ],
    skins: [
      {
        unified: "1f46c",
        native: "👬"
      },
      {
        unified: "1f46c-1f3fb",
        native: "👬🏻"
      },
      {
        unified: "1f46c-1f3fc",
        native: "👬🏼"
      },
      {
        unified: "1f46c-1f3fd",
        native: "👬🏽"
      },
      {
        unified: "1f46c-1f3fe",
        native: "👬🏾"
      },
      {
        unified: "1f46c-1f3ff",
        native: "👬🏿"
      }
    ],
    version: 1
  },
  couplekiss: {
    id: "couplekiss",
    name: "Kiss",
    keywords: [
      "couplekiss",
      "pair",
      "valentines",
      "love",
      "like",
      "dating",
      "marriage"
    ],
    skins: [
      {
        unified: "1f48f",
        native: "💏"
      },
      {
        unified: "1f48f-1f3fb",
        native: "💏🏻"
      },
      {
        unified: "1f48f-1f3fc",
        native: "💏🏼"
      },
      {
        unified: "1f48f-1f3fd",
        native: "💏🏽"
      },
      {
        unified: "1f48f-1f3fe",
        native: "💏🏾"
      },
      {
        unified: "1f48f-1f3ff",
        native: "💏🏿"
      }
    ],
    version: 1
  },
  "woman-kiss-man": {
    id: "woman-kiss-man",
    name: "Kiss: Woman, Man",
    keywords: [
      "woman",
      "kiss-man",
      "kiss",
      "love"
    ],
    skins: [
      {
        unified: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468",
        native: "👩‍❤️‍💋‍👨"
      },
      {
        unified: "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
        native: "👩🏻‍❤️‍💋‍👨🏻"
      },
      {
        unified: "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
        native: "👩🏼‍❤️‍💋‍👨🏼"
      },
      {
        unified: "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
        native: "👩🏽‍❤️‍💋‍👨🏽"
      },
      {
        unified: "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
        native: "👩🏾‍❤️‍💋‍👨🏾"
      },
      {
        unified: "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
        native: "👩🏿‍❤️‍💋‍👨🏿"
      }
    ],
    version: 2
  },
  "man-kiss-man": {
    id: "man-kiss-man",
    name: "Kiss: Man, Man",
    keywords: [
      "kiss-man",
      "kiss",
      "pair",
      "valentines",
      "love",
      "like",
      "dating",
      "marriage"
    ],
    skins: [
      {
        unified: "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468",
        native: "👨‍❤️‍💋‍👨"
      },
      {
        unified: "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
        native: "👨🏻‍❤️‍💋‍👨🏻"
      },
      {
        unified: "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
        native: "👨🏼‍❤️‍💋‍👨🏼"
      },
      {
        unified: "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
        native: "👨🏽‍❤️‍💋‍👨🏽"
      },
      {
        unified: "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
        native: "👨🏾‍❤️‍💋‍👨🏾"
      },
      {
        unified: "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
        native: "👨🏿‍❤️‍💋‍👨🏿"
      }
    ],
    version: 2
  },
  "woman-kiss-woman": {
    id: "woman-kiss-woman",
    name: "Kiss: Woman, Woman",
    keywords: [
      "kiss-woman",
      "kiss",
      "pair",
      "valentines",
      "love",
      "like",
      "dating",
      "marriage"
    ],
    skins: [
      {
        unified: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469",
        native: "👩‍❤️‍💋‍👩"
      },
      {
        unified: "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
        native: "👩🏻‍❤️‍💋‍👩🏻"
      },
      {
        unified: "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
        native: "👩🏼‍❤️‍💋‍👩🏼"
      },
      {
        unified: "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
        native: "👩🏽‍❤️‍💋‍👩🏽"
      },
      {
        unified: "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
        native: "👩🏾‍❤️‍💋‍👩🏾"
      },
      {
        unified: "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
        native: "👩🏿‍❤️‍💋‍👩🏿"
      }
    ],
    version: 2
  },
  couple_with_heart: {
    id: "couple_with_heart",
    name: "Couple with Heart",
    keywords: [
      "pair",
      "love",
      "like",
      "affection",
      "human",
      "dating",
      "valentines",
      "marriage"
    ],
    skins: [
      {
        unified: "1f491",
        native: "💑"
      },
      {
        unified: "1f491-1f3fb",
        native: "💑🏻"
      },
      {
        unified: "1f491-1f3fc",
        native: "💑🏼"
      },
      {
        unified: "1f491-1f3fd",
        native: "💑🏽"
      },
      {
        unified: "1f491-1f3fe",
        native: "💑🏾"
      },
      {
        unified: "1f491-1f3ff",
        native: "💑🏿"
      }
    ],
    version: 1
  },
  "woman-heart-man": {
    id: "woman-heart-man",
    name: "Couple with Heart: Woman, Man",
    keywords: [
      "woman",
      "heart-man",
      "heart",
      "love"
    ],
    skins: [
      {
        unified: "1f469-200d-2764-fe0f-200d-1f468",
        native: "👩‍❤️‍👨"
      },
      {
        unified: "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb",
        native: "👩🏻‍❤️‍👨🏻"
      },
      {
        unified: "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc",
        native: "👩🏼‍❤️‍👨🏼"
      },
      {
        unified: "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd",
        native: "👩🏽‍❤️‍👨🏽"
      },
      {
        unified: "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe",
        native: "👩🏾‍❤️‍👨🏾"
      },
      {
        unified: "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff",
        native: "👩🏿‍❤️‍👨🏿"
      }
    ],
    version: 2
  },
  "man-heart-man": {
    id: "man-heart-man",
    name: "Couple with Heart: Man, Man",
    keywords: [
      "heart-man",
      "heart",
      "pair",
      "love",
      "like",
      "affection",
      "human",
      "dating",
      "valentines",
      "marriage"
    ],
    skins: [
      {
        unified: "1f468-200d-2764-fe0f-200d-1f468",
        native: "👨‍❤️‍👨"
      },
      {
        unified: "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb",
        native: "👨🏻‍❤️‍👨🏻"
      },
      {
        unified: "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc",
        native: "👨🏼‍❤️‍👨🏼"
      },
      {
        unified: "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd",
        native: "👨🏽‍❤️‍👨🏽"
      },
      {
        unified: "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe",
        native: "👨🏾‍❤️‍👨🏾"
      },
      {
        unified: "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff",
        native: "👨🏿‍❤️‍👨🏿"
      }
    ],
    version: 2
  },
  "woman-heart-woman": {
    id: "woman-heart-woman",
    name: "Couple with Heart: Woman, Woman",
    keywords: [
      "heart-woman",
      "heart",
      "pair",
      "love",
      "like",
      "affection",
      "human",
      "dating",
      "valentines",
      "marriage"
    ],
    skins: [
      {
        unified: "1f469-200d-2764-fe0f-200d-1f469",
        native: "👩‍❤️‍👩"
      },
      {
        unified: "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb",
        native: "👩🏻‍❤️‍👩🏻"
      },
      {
        unified: "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc",
        native: "👩🏼‍❤️‍👩🏼"
      },
      {
        unified: "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd",
        native: "👩🏽‍❤️‍👩🏽"
      },
      {
        unified: "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe",
        native: "👩🏾‍❤️‍👩🏾"
      },
      {
        unified: "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff",
        native: "👩🏿‍❤️‍👩🏿"
      }
    ],
    version: 2
  },
  family: {
    id: "family",
    name: "Family",
    keywords: [
      "home",
      "parents",
      "child",
      "mom",
      "dad",
      "father",
      "mother",
      "people",
      "human"
    ],
    skins: [
      {
        unified: "1f46a",
        native: "👪"
      }
    ],
    version: 1
  },
  "man-woman-boy": {
    id: "man-woman-boy",
    name: "Family: Man, Woman, Boy",
    keywords: [
      "man",
      "woman-boy",
      "family",
      "woman",
      "love"
    ],
    skins: [
      {
        unified: "1f468-200d-1f469-200d-1f466",
        native: "👨‍👩‍👦"
      }
    ],
    version: 2
  },
  "man-woman-girl": {
    id: "man-woman-girl",
    name: "Family: Man, Woman, Girl",
    keywords: [
      "man",
      "woman-girl",
      "family",
      "woman",
      "home",
      "parents",
      "people",
      "human",
      "child"
    ],
    skins: [
      {
        unified: "1f468-200d-1f469-200d-1f467",
        native: "👨‍👩‍👧"
      }
    ],
    version: 2
  },
  "man-woman-girl-boy": {
    id: "man-woman-girl-boy",
    name: "Family: Man, Woman, Girl, Boy",
    keywords: [
      "man",
      "woman-girl-boy",
      "family",
      "woman",
      "girl",
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f468-200d-1f469-200d-1f467-200d-1f466",
        native: "👨‍👩‍👧‍👦"
      }
    ],
    version: 2
  },
  "man-woman-boy-boy": {
    id: "man-woman-boy-boy",
    name: "Family: Man, Woman, Boy, Boy",
    keywords: [
      "man",
      "woman-boy-boy",
      "family",
      "woman",
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f468-200d-1f469-200d-1f466-200d-1f466",
        native: "👨‍👩‍👦‍👦"
      }
    ],
    version: 2
  },
  "man-woman-girl-girl": {
    id: "man-woman-girl-girl",
    name: "Family: Man, Woman, Girl, Girl",
    keywords: [
      "man",
      "woman-girl-girl",
      "family",
      "woman",
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f468-200d-1f469-200d-1f467-200d-1f467",
        native: "👨‍👩‍👧‍👧"
      }
    ],
    version: 2
  },
  "man-man-boy": {
    id: "man-man-boy",
    name: "Family: Man, Man, Boy",
    keywords: [
      "man",
      "man-boy",
      "family",
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f468-200d-1f468-200d-1f466",
        native: "👨‍👨‍👦"
      }
    ],
    version: 2
  },
  "man-man-girl": {
    id: "man-man-girl",
    name: "Family: Man, Man, Girl",
    keywords: [
      "man",
      "man-girl",
      "family",
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f468-200d-1f468-200d-1f467",
        native: "👨‍👨‍👧"
      }
    ],
    version: 2
  },
  "man-man-girl-boy": {
    id: "man-man-girl-boy",
    name: "Family: Man, Man, Girl, Boy",
    keywords: [
      "man",
      "man-girl-boy",
      "family",
      "girl",
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f468-200d-1f468-200d-1f467-200d-1f466",
        native: "👨‍👨‍👧‍👦"
      }
    ],
    version: 2
  },
  "man-man-boy-boy": {
    id: "man-man-boy-boy",
    name: "Family: Man, Man, Boy, Boy",
    keywords: [
      "man",
      "man-boy-boy",
      "family",
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f468-200d-1f468-200d-1f466-200d-1f466",
        native: "👨‍👨‍👦‍👦"
      }
    ],
    version: 2
  },
  "man-man-girl-girl": {
    id: "man-man-girl-girl",
    name: "Family: Man, Man, Girl, Girl",
    keywords: [
      "man",
      "man-girl-girl",
      "family",
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f468-200d-1f468-200d-1f467-200d-1f467",
        native: "👨‍👨‍👧‍👧"
      }
    ],
    version: 2
  },
  "woman-woman-boy": {
    id: "woman-woman-boy",
    name: "Family: Woman, Woman, Boy",
    keywords: [
      "woman",
      "woman-boy",
      "family",
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f469-200d-1f469-200d-1f466",
        native: "👩‍👩‍👦"
      }
    ],
    version: 2
  },
  "woman-woman-girl": {
    id: "woman-woman-girl",
    name: "Family: Woman, Woman, Girl",
    keywords: [
      "woman",
      "woman-girl",
      "family",
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f469-200d-1f469-200d-1f467",
        native: "👩‍👩‍👧"
      }
    ],
    version: 2
  },
  "woman-woman-girl-boy": {
    id: "woman-woman-girl-boy",
    name: "Family: Woman, Woman, Girl, Boy",
    keywords: [
      "woman",
      "woman-girl-boy",
      "family",
      "girl",
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f469-200d-1f469-200d-1f467-200d-1f466",
        native: "👩‍👩‍👧‍👦"
      }
    ],
    version: 2
  },
  "woman-woman-boy-boy": {
    id: "woman-woman-boy-boy",
    name: "Family: Woman, Woman, Boy, Boy",
    keywords: [
      "woman",
      "woman-boy-boy",
      "family",
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f469-200d-1f469-200d-1f466-200d-1f466",
        native: "👩‍👩‍👦‍👦"
      }
    ],
    version: 2
  },
  "woman-woman-girl-girl": {
    id: "woman-woman-girl-girl",
    name: "Family: Woman, Woman, Girl, Girl",
    keywords: [
      "woman",
      "woman-girl-girl",
      "family",
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f469-200d-1f469-200d-1f467-200d-1f467",
        native: "👩‍👩‍👧‍👧"
      }
    ],
    version: 2
  },
  "man-boy": {
    id: "man-boy",
    name: "Family: Man, Boy",
    keywords: [
      "man",
      "family",
      "home",
      "parent",
      "people",
      "human",
      "child"
    ],
    skins: [
      {
        unified: "1f468-200d-1f466",
        native: "👨‍👦"
      }
    ],
    version: 4
  },
  "man-boy-boy": {
    id: "man-boy-boy",
    name: "Family: Man, Boy, Boy",
    keywords: [
      "man",
      "boy-boy",
      "family",
      "home",
      "parent",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f468-200d-1f466-200d-1f466",
        native: "👨‍👦‍👦"
      }
    ],
    version: 4
  },
  "man-girl": {
    id: "man-girl",
    name: "Family: Man, Girl",
    keywords: [
      "man",
      "family",
      "home",
      "parent",
      "people",
      "human",
      "child"
    ],
    skins: [
      {
        unified: "1f468-200d-1f467",
        native: "👨‍👧"
      }
    ],
    version: 4
  },
  "man-girl-boy": {
    id: "man-girl-boy",
    name: "Family: Man, Girl, Boy",
    keywords: [
      "man",
      "girl-boy",
      "family",
      "girl",
      "home",
      "parent",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f468-200d-1f467-200d-1f466",
        native: "👨‍👧‍👦"
      }
    ],
    version: 4
  },
  "man-girl-girl": {
    id: "man-girl-girl",
    name: "Family: Man, Girl, Girl",
    keywords: [
      "man",
      "girl-girl",
      "family",
      "home",
      "parent",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f468-200d-1f467-200d-1f467",
        native: "👨‍👧‍👧"
      }
    ],
    version: 4
  },
  "woman-boy": {
    id: "woman-boy",
    name: "Family: Woman, Boy",
    keywords: [
      "woman",
      "family",
      "home",
      "parent",
      "people",
      "human",
      "child"
    ],
    skins: [
      {
        unified: "1f469-200d-1f466",
        native: "👩‍👦"
      }
    ],
    version: 4
  },
  "woman-boy-boy": {
    id: "woman-boy-boy",
    name: "Family: Woman, Boy, Boy",
    keywords: [
      "woman",
      "boy-boy",
      "family",
      "home",
      "parent",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f469-200d-1f466-200d-1f466",
        native: "👩‍👦‍👦"
      }
    ],
    version: 4
  },
  "woman-girl": {
    id: "woman-girl",
    name: "Family: Woman, Girl",
    keywords: [
      "woman",
      "family",
      "home",
      "parent",
      "people",
      "human",
      "child"
    ],
    skins: [
      {
        unified: "1f469-200d-1f467",
        native: "👩‍👧"
      }
    ],
    version: 4
  },
  "woman-girl-boy": {
    id: "woman-girl-boy",
    name: "Family: Woman, Girl, Boy",
    keywords: [
      "woman",
      "girl-boy",
      "family",
      "girl",
      "home",
      "parent",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f469-200d-1f467-200d-1f466",
        native: "👩‍👧‍👦"
      }
    ],
    version: 4
  },
  "woman-girl-girl": {
    id: "woman-girl-girl",
    name: "Family: Woman, Girl, Girl",
    keywords: [
      "woman",
      "girl-girl",
      "family",
      "home",
      "parent",
      "people",
      "human",
      "children"
    ],
    skins: [
      {
        unified: "1f469-200d-1f467-200d-1f467",
        native: "👩‍👧‍👧"
      }
    ],
    version: 4
  },
  speaking_head_in_silhouette: {
    id: "speaking_head_in_silhouette",
    name: "Speaking Head",
    keywords: [
      "in",
      "silhouette",
      "user",
      "person",
      "human",
      "sing",
      "say",
      "talk"
    ],
    skins: [
      {
        unified: "1f5e3-fe0f",
        native: "🗣️"
      }
    ],
    version: 1
  },
  bust_in_silhouette: {
    id: "bust_in_silhouette",
    name: "Bust in Silhouette",
    keywords: [
      "user",
      "person",
      "human"
    ],
    skins: [
      {
        unified: "1f464",
        native: "👤"
      }
    ],
    version: 1
  },
  busts_in_silhouette: {
    id: "busts_in_silhouette",
    name: "Busts in Silhouette",
    keywords: [
      "user",
      "person",
      "human",
      "group",
      "team"
    ],
    skins: [
      {
        unified: "1f465",
        native: "👥"
      }
    ],
    version: 1
  },
  people_hugging: {
    id: "people_hugging",
    name: "People Hugging",
    keywords: [
      "care"
    ],
    skins: [
      {
        unified: "1fac2",
        native: "🫂"
      }
    ],
    version: 13
  },
  footprints: {
    id: "footprints",
    name: "Footprints",
    keywords: [
      "feet",
      "tracking",
      "walking",
      "beach"
    ],
    skins: [
      {
        unified: "1f463",
        native: "👣"
      }
    ],
    version: 1
  },
  monkey_face: {
    id: "monkey_face",
    name: "Monkey Face",
    emoticons: [
      ":o)"
    ],
    keywords: [
      "animal",
      "nature",
      "circus"
    ],
    skins: [
      {
        unified: "1f435",
        native: "🐵"
      }
    ],
    version: 1
  },
  monkey: {
    id: "monkey",
    name: "Monkey",
    keywords: [
      "animal",
      "nature",
      "banana",
      "circus"
    ],
    skins: [
      {
        unified: "1f412",
        native: "🐒"
      }
    ],
    version: 1
  },
  gorilla: {
    id: "gorilla",
    name: "Gorilla",
    keywords: [
      "animal",
      "nature",
      "circus"
    ],
    skins: [
      {
        unified: "1f98d",
        native: "🦍"
      }
    ],
    version: 3
  },
  orangutan: {
    id: "orangutan",
    name: "Orangutan",
    keywords: [
      "animal"
    ],
    skins: [
      {
        unified: "1f9a7",
        native: "🦧"
      }
    ],
    version: 12
  },
  dog: {
    id: "dog",
    name: "Dog Face",
    keywords: [
      "animal",
      "friend",
      "nature",
      "woof",
      "puppy",
      "pet",
      "faithful"
    ],
    skins: [
      {
        unified: "1f436",
        native: "🐶"
      }
    ],
    version: 1
  },
  dog2: {
    id: "dog2",
    name: "Dog",
    keywords: [
      "dog2",
      "animal",
      "nature",
      "friend",
      "doge",
      "pet",
      "faithful"
    ],
    skins: [
      {
        unified: "1f415",
        native: "🐕"
      }
    ],
    version: 1
  },
  guide_dog: {
    id: "guide_dog",
    name: "Guide Dog",
    keywords: [
      "animal",
      "blind"
    ],
    skins: [
      {
        unified: "1f9ae",
        native: "🦮"
      }
    ],
    version: 12
  },
  service_dog: {
    id: "service_dog",
    name: "Service Dog",
    keywords: [
      "blind",
      "animal"
    ],
    skins: [
      {
        unified: "1f415-200d-1f9ba",
        native: "🐕‍🦺"
      }
    ],
    version: 12
  },
  poodle: {
    id: "poodle",
    name: "Poodle",
    keywords: [
      "dog",
      "animal",
      "101",
      "nature",
      "pet"
    ],
    skins: [
      {
        unified: "1f429",
        native: "🐩"
      }
    ],
    version: 1
  },
  wolf: {
    id: "wolf",
    name: "Wolf",
    keywords: [
      "animal",
      "nature",
      "wild"
    ],
    skins: [
      {
        unified: "1f43a",
        native: "🐺"
      }
    ],
    version: 1
  },
  fox_face: {
    id: "fox_face",
    name: "Fox",
    keywords: [
      "face",
      "animal",
      "nature"
    ],
    skins: [
      {
        unified: "1f98a",
        native: "🦊"
      }
    ],
    version: 3
  },
  raccoon: {
    id: "raccoon",
    name: "Raccoon",
    keywords: [
      "animal",
      "nature"
    ],
    skins: [
      {
        unified: "1f99d",
        native: "🦝"
      }
    ],
    version: 11
  },
  cat: {
    id: "cat",
    name: "Cat Face",
    keywords: [
      "animal",
      "meow",
      "nature",
      "pet",
      "kitten"
    ],
    skins: [
      {
        unified: "1f431",
        native: "🐱"
      }
    ],
    version: 1
  },
  cat2: {
    id: "cat2",
    name: "Cat",
    keywords: [
      "cat2",
      "animal",
      "meow",
      "pet",
      "cats"
    ],
    skins: [
      {
        unified: "1f408",
        native: "🐈"
      }
    ],
    version: 1
  },
  black_cat: {
    id: "black_cat",
    name: "Black Cat",
    keywords: [
      "superstition",
      "luck"
    ],
    skins: [
      {
        unified: "1f408-200d-2b1b",
        native: "🐈‍⬛"
      }
    ],
    version: 13
  },
  lion_face: {
    id: "lion_face",
    name: "Lion",
    keywords: [
      "face",
      "animal",
      "nature"
    ],
    skins: [
      {
        unified: "1f981",
        native: "🦁"
      }
    ],
    version: 1
  },
  tiger: {
    id: "tiger",
    name: "Tiger Face",
    keywords: [
      "animal",
      "cat",
      "danger",
      "wild",
      "nature",
      "roar"
    ],
    skins: [
      {
        unified: "1f42f",
        native: "🐯"
      }
    ],
    version: 1
  },
  tiger2: {
    id: "tiger2",
    name: "Tiger",
    keywords: [
      "tiger2",
      "animal",
      "nature",
      "roar"
    ],
    skins: [
      {
        unified: "1f405",
        native: "🐅"
      }
    ],
    version: 1
  },
  leopard: {
    id: "leopard",
    name: "Leopard",
    keywords: [
      "animal",
      "nature"
    ],
    skins: [
      {
        unified: "1f406",
        native: "🐆"
      }
    ],
    version: 1
  },
  horse: {
    id: "horse",
    name: "Horse Face",
    keywords: [
      "animal",
      "brown",
      "nature"
    ],
    skins: [
      {
        unified: "1f434",
        native: "🐴"
      }
    ],
    version: 1
  },
  moose: {
    id: "moose",
    name: "Moose",
    keywords: [
      "shrek",
      "canada",
      "sweden",
      "sven",
      "cool"
    ],
    skins: [
      {
        unified: "1face",
        native: "🫎"
      }
    ],
    version: 15
  },
  donkey: {
    id: "donkey",
    name: "Donkey",
    keywords: [
      "eeyore",
      "mule"
    ],
    skins: [
      {
        unified: "1facf",
        native: "🫏"
      }
    ],
    version: 15
  },
  racehorse: {
    id: "racehorse",
    name: "Horse",
    keywords: [
      "racehorse",
      "animal",
      "gamble",
      "luck"
    ],
    skins: [
      {
        unified: "1f40e",
        native: "🐎"
      }
    ],
    version: 1
  },
  unicorn_face: {
    id: "unicorn_face",
    name: "Unicorn",
    keywords: [
      "face",
      "animal",
      "nature",
      "mystical"
    ],
    skins: [
      {
        unified: "1f984",
        native: "🦄"
      }
    ],
    version: 1
  },
  zebra_face: {
    id: "zebra_face",
    name: "Zebra",
    keywords: [
      "face",
      "animal",
      "nature",
      "stripes",
      "safari"
    ],
    skins: [
      {
        unified: "1f993",
        native: "🦓"
      }
    ],
    version: 5
  },
  deer: {
    id: "deer",
    name: "Deer",
    keywords: [
      "animal",
      "nature",
      "horns",
      "venison"
    ],
    skins: [
      {
        unified: "1f98c",
        native: "🦌"
      }
    ],
    version: 3
  },
  bison: {
    id: "bison",
    name: "Bison",
    keywords: [
      "ox"
    ],
    skins: [
      {
        unified: "1f9ac",
        native: "🦬"
      }
    ],
    version: 13
  },
  cow: {
    id: "cow",
    name: "Cow Face",
    keywords: [
      "beef",
      "ox",
      "animal",
      "nature",
      "moo",
      "milk"
    ],
    skins: [
      {
        unified: "1f42e",
        native: "🐮"
      }
    ],
    version: 1
  },
  ox: {
    id: "ox",
    name: "Ox",
    keywords: [
      "animal",
      "cow",
      "beef"
    ],
    skins: [
      {
        unified: "1f402",
        native: "🐂"
      }
    ],
    version: 1
  },
  water_buffalo: {
    id: "water_buffalo",
    name: "Water Buffalo",
    keywords: [
      "animal",
      "nature",
      "ox",
      "cow"
    ],
    skins: [
      {
        unified: "1f403",
        native: "🐃"
      }
    ],
    version: 1
  },
  cow2: {
    id: "cow2",
    name: "Cow",
    keywords: [
      "cow2",
      "beef",
      "ox",
      "animal",
      "nature",
      "moo",
      "milk"
    ],
    skins: [
      {
        unified: "1f404",
        native: "🐄"
      }
    ],
    version: 1
  },
  pig: {
    id: "pig",
    name: "Pig Face",
    keywords: [
      "animal",
      "oink",
      "nature"
    ],
    skins: [
      {
        unified: "1f437",
        native: "🐷"
      }
    ],
    version: 1
  },
  pig2: {
    id: "pig2",
    name: "Pig",
    keywords: [
      "pig2",
      "animal",
      "nature"
    ],
    skins: [
      {
        unified: "1f416",
        native: "🐖"
      }
    ],
    version: 1
  },
  boar: {
    id: "boar",
    name: "Boar",
    keywords: [
      "animal",
      "nature"
    ],
    skins: [
      {
        unified: "1f417",
        native: "🐗"
      }
    ],
    version: 1
  },
  pig_nose: {
    id: "pig_nose",
    name: "Pig Nose",
    keywords: [
      "animal",
      "oink"
    ],
    skins: [
      {
        unified: "1f43d",
        native: "🐽"
      }
    ],
    version: 1
  },
  ram: {
    id: "ram",
    name: "Ram",
    keywords: [
      "animal",
      "sheep",
      "nature"
    ],
    skins: [
      {
        unified: "1f40f",
        native: "🐏"
      }
    ],
    version: 1
  },
  sheep: {
    id: "sheep",
    name: "Ewe",
    keywords: [
      "sheep",
      "animal",
      "nature",
      "wool",
      "shipit"
    ],
    skins: [
      {
        unified: "1f411",
        native: "🐑"
      }
    ],
    version: 1
  },
  goat: {
    id: "goat",
    name: "Goat",
    keywords: [
      "animal",
      "nature"
    ],
    skins: [
      {
        unified: "1f410",
        native: "🐐"
      }
    ],
    version: 1
  },
  dromedary_camel: {
    id: "dromedary_camel",
    name: "Camel",
    keywords: [
      "dromedary",
      "animal",
      "hot",
      "desert",
      "hump"
    ],
    skins: [
      {
        unified: "1f42a",
        native: "🐪"
      }
    ],
    version: 1
  },
  camel: {
    id: "camel",
    name: "Bactrian Camel",
    keywords: [
      "two",
      "hump",
      "animal",
      "nature",
      "hot",
      "desert"
    ],
    skins: [
      {
        unified: "1f42b",
        native: "🐫"
      }
    ],
    version: 1
  },
  llama: {
    id: "llama",
    name: "Llama",
    keywords: [
      "animal",
      "nature",
      "alpaca"
    ],
    skins: [
      {
        unified: "1f999",
        native: "🦙"
      }
    ],
    version: 11
  },
  giraffe_face: {
    id: "giraffe_face",
    name: "Giraffe",
    keywords: [
      "face",
      "animal",
      "nature",
      "spots",
      "safari"
    ],
    skins: [
      {
        unified: "1f992",
        native: "🦒"
      }
    ],
    version: 5
  },
  elephant: {
    id: "elephant",
    name: "Elephant",
    keywords: [
      "animal",
      "nature",
      "nose",
      "th",
      "circus"
    ],
    skins: [
      {
        unified: "1f418",
        native: "🐘"
      }
    ],
    version: 1
  },
  mammoth: {
    id: "mammoth",
    name: "Mammoth",
    keywords: [
      "elephant",
      "tusks"
    ],
    skins: [
      {
        unified: "1f9a3",
        native: "🦣"
      }
    ],
    version: 13
  },
  rhinoceros: {
    id: "rhinoceros",
    name: "Rhinoceros",
    keywords: [
      "animal",
      "nature",
      "horn"
    ],
    skins: [
      {
        unified: "1f98f",
        native: "🦏"
      }
    ],
    version: 3
  },
  hippopotamus: {
    id: "hippopotamus",
    name: "Hippopotamus",
    keywords: [
      "animal",
      "nature"
    ],
    skins: [
      {
        unified: "1f99b",
        native: "🦛"
      }
    ],
    version: 11
  },
  mouse: {
    id: "mouse",
    name: "Mouse Face",
    keywords: [
      "animal",
      "nature",
      "cheese",
      "wedge",
      "rodent"
    ],
    skins: [
      {
        unified: "1f42d",
        native: "🐭"
      }
    ],
    version: 1
  },
  mouse2: {
    id: "mouse2",
    name: "Mouse",
    keywords: [
      "mouse2",
      "animal",
      "nature",
      "rodent"
    ],
    skins: [
      {
        unified: "1f401",
        native: "🐁"
      }
    ],
    version: 1
  },
  rat: {
    id: "rat",
    name: "Rat",
    keywords: [
      "animal",
      "mouse",
      "rodent"
    ],
    skins: [
      {
        unified: "1f400",
        native: "🐀"
      }
    ],
    version: 1
  },
  hamster: {
    id: "hamster",
    name: "Hamster",
    keywords: [
      "animal",
      "nature"
    ],
    skins: [
      {
        unified: "1f439",
        native: "🐹"
      }
    ],
    version: 1
  },
  rabbit: {
    id: "rabbit",
    name: "Rabbit Face",
    keywords: [
      "animal",
      "nature",
      "pet",
      "spring",
      "magic",
      "bunny"
    ],
    skins: [
      {
        unified: "1f430",
        native: "🐰"
      }
    ],
    version: 1
  },
  rabbit2: {
    id: "rabbit2",
    name: "Rabbit",
    keywords: [
      "rabbit2",
      "animal",
      "nature",
      "pet",
      "magic",
      "spring"
    ],
    skins: [
      {
        unified: "1f407",
        native: "🐇"
      }
    ],
    version: 1
  },
  chipmunk: {
    id: "chipmunk",
    name: "Chipmunk",
    keywords: [
      "animal",
      "nature",
      "rodent",
      "squirrel"
    ],
    skins: [
      {
        unified: "1f43f-fe0f",
        native: "🐿️"
      }
    ],
    version: 1
  },
  beaver: {
    id: "beaver",
    name: "Beaver",
    keywords: [
      "animal",
      "rodent"
    ],
    skins: [
      {
        unified: "1f9ab",
        native: "🦫"
      }
    ],
    version: 13
  },
  hedgehog: {
    id: "hedgehog",
    name: "Hedgehog",
    keywords: [
      "animal",
      "nature",
      "spiny"
    ],
    skins: [
      {
        unified: "1f994",
        native: "🦔"
      }
    ],
    version: 5
  },
  bat: {
    id: "bat",
    name: "Bat",
    keywords: [
      "animal",
      "nature",
      "blind",
      "vampire"
    ],
    skins: [
      {
        unified: "1f987",
        native: "🦇"
      }
    ],
    version: 3
  },
  bear: {
    id: "bear",
    name: "Bear",
    keywords: [
      "animal",
      "nature",
      "wild"
    ],
    skins: [
      {
        unified: "1f43b",
        native: "🐻"
      }
    ],
    version: 1
  },
  polar_bear: {
    id: "polar_bear",
    name: "Polar Bear",
    keywords: [
      "animal",
      "arctic"
    ],
    skins: [
      {
        unified: "1f43b-200d-2744-fe0f",
        native: "🐻‍❄️"
      }
    ],
    version: 13
  },
  koala: {
    id: "koala",
    name: "Koala",
    keywords: [
      "animal",
      "nature"
    ],
    skins: [
      {
        unified: "1f428",
        native: "🐨"
      }
    ],
    version: 1
  },
  panda_face: {
    id: "panda_face",
    name: "Panda",
    keywords: [
      "face",
      "animal",
      "nature"
    ],
    skins: [
      {
        unified: "1f43c",
        native: "🐼"
      }
    ],
    version: 1
  },
  sloth: {
    id: "sloth",
    name: "Sloth",
    keywords: [
      "animal"
    ],
    skins: [
      {
        unified: "1f9a5",
        native: "🦥"
      }
    ],
    version: 12
  },
  otter: {
    id: "otter",
    name: "Otter",
    keywords: [
      "animal"
    ],
    skins: [
      {
        unified: "1f9a6",
        native: "🦦"
      }
    ],
    version: 12
  },
  skunk: {
    id: "skunk",
    name: "Skunk",
    keywords: [
      "animal"
    ],
    skins: [
      {
        unified: "1f9a8",
        native: "🦨"
      }
    ],
    version: 12
  },
  kangaroo: {
    id: "kangaroo",
    name: "Kangaroo",
    keywords: [
      "animal",
      "nature",
      "australia",
      "joey",
      "hop",
      "marsupial"
    ],
    skins: [
      {
        unified: "1f998",
        native: "🦘"
      }
    ],
    version: 11
  },
  badger: {
    id: "badger",
    name: "Badger",
    keywords: [
      "animal",
      "nature",
      "honey"
    ],
    skins: [
      {
        unified: "1f9a1",
        native: "🦡"
      }
    ],
    version: 11
  },
  feet: {
    id: "feet",
    name: "Paw Prints",
    keywords: [
      "feet",
      "animal",
      "tracking",
      "footprints",
      "dog",
      "cat",
      "pet"
    ],
    skins: [
      {
        unified: "1f43e",
        native: "🐾"
      }
    ],
    version: 1
  },
  turkey: {
    id: "turkey",
    name: "Turkey",
    keywords: [
      "animal",
      "bird"
    ],
    skins: [
      {
        unified: "1f983",
        native: "🦃"
      }
    ],
    version: 1
  },
  chicken: {
    id: "chicken",
    name: "Chicken",
    keywords: [
      "animal",
      "cluck",
      "nature",
      "bird"
    ],
    skins: [
      {
        unified: "1f414",
        native: "🐔"
      }
    ],
    version: 1
  },
  rooster: {
    id: "rooster",
    name: "Rooster",
    keywords: [
      "animal",
      "nature",
      "chicken"
    ],
    skins: [
      {
        unified: "1f413",
        native: "🐓"
      }
    ],
    version: 1
  },
  hatching_chick: {
    id: "hatching_chick",
    name: "Hatching Chick",
    keywords: [
      "animal",
      "chicken",
      "egg",
      "born",
      "baby",
      "bird"
    ],
    skins: [
      {
        unified: "1f423",
        native: "🐣"
      }
    ],
    version: 1
  },
  baby_chick: {
    id: "baby_chick",
    name: "Baby Chick",
    keywords: [
      "animal",
      "chicken",
      "bird"
    ],
    skins: [
      {
        unified: "1f424",
        native: "🐤"
      }
    ],
    version: 1
  },
  hatched_chick: {
    id: "hatched_chick",
    name: "Front-Facing Baby Chick",
    keywords: [
      "hatched",
      "front",
      "facing",
      "animal",
      "chicken",
      "bird"
    ],
    skins: [
      {
        unified: "1f425",
        native: "🐥"
      }
    ],
    version: 1
  },
  bird: {
    id: "bird",
    name: "Bird",
    keywords: [
      "animal",
      "nature",
      "fly",
      "tweet",
      "spring"
    ],
    skins: [
      {
        unified: "1f426",
        native: "🐦"
      }
    ],
    version: 1
  },
  penguin: {
    id: "penguin",
    name: "Penguin",
    keywords: [
      "animal",
      "nature"
    ],
    skins: [
      {
        unified: "1f427",
        native: "🐧"
      }
    ],
    version: 1
  },
  dove_of_peace: {
    id: "dove_of_peace",
    name: "Dove",
    keywords: [
      "of",
      "peace",
      "animal",
      "bird"
    ],
    skins: [
      {
        unified: "1f54a-fe0f",
        native: "🕊️"
      }
    ],
    version: 1
  },
  eagle: {
    id: "eagle",
    name: "Eagle",
    keywords: [
      "animal",
      "nature",
      "bird"
    ],
    skins: [
      {
        unified: "1f985",
        native: "🦅"
      }
    ],
    version: 3
  },
  duck: {
    id: "duck",
    name: "Duck",
    keywords: [
      "animal",
      "nature",
      "bird",
      "mallard"
    ],
    skins: [
      {
        unified: "1f986",
        native: "🦆"
      }
    ],
    version: 3
  },
  swan: {
    id: "swan",
    name: "Swan",
    keywords: [
      "animal",
      "nature",
      "bird"
    ],
    skins: [
      {
        unified: "1f9a2",
        native: "🦢"
      }
    ],
    version: 11
  },
  owl: {
    id: "owl",
    name: "Owl",
    keywords: [
      "animal",
      "nature",
      "bird",
      "hoot"
    ],
    skins: [
      {
        unified: "1f989",
        native: "🦉"
      }
    ],
    version: 3
  },
  dodo: {
    id: "dodo",
    name: "Dodo",
    keywords: [
      "animal",
      "bird"
    ],
    skins: [
      {
        unified: "1f9a4",
        native: "🦤"
      }
    ],
    version: 13
  },
  feather: {
    id: "feather",
    name: "Feather",
    keywords: [
      "bird",
      "fly"
    ],
    skins: [
      {
        unified: "1fab6",
        native: "🪶"
      }
    ],
    version: 13
  },
  flamingo: {
    id: "flamingo",
    name: "Flamingo",
    keywords: [
      "animal"
    ],
    skins: [
      {
        unified: "1f9a9",
        native: "🦩"
      }
    ],
    version: 12
  },
  peacock: {
    id: "peacock",
    name: "Peacock",
    keywords: [
      "animal",
      "nature",
      "peahen",
      "bird"
    ],
    skins: [
      {
        unified: "1f99a",
        native: "🦚"
      }
    ],
    version: 11
  },
  parrot: {
    id: "parrot",
    name: "Parrot",
    keywords: [
      "animal",
      "nature",
      "bird",
      "pirate",
      "talk"
    ],
    skins: [
      {
        unified: "1f99c",
        native: "🦜"
      }
    ],
    version: 11
  },
  wing: {
    id: "wing",
    name: "Wing",
    keywords: [
      "angel",
      "birds",
      "flying"
    ],
    skins: [
      {
        unified: "1fabd",
        native: "🪽"
      }
    ],
    version: 15
  },
  black_bird: {
    id: "black_bird",
    name: "Black Bird",
    keywords: [
      "crow"
    ],
    skins: [
      {
        unified: "1f426-200d-2b1b",
        native: "🐦‍⬛"
      }
    ],
    version: 15
  },
  goose: {
    id: "goose",
    name: "Goose",
    keywords: [
      "silly",
      "jemima",
      "goosebumps"
    ],
    skins: [
      {
        unified: "1fabf",
        native: "🪿"
      }
    ],
    version: 15
  },
  frog: {
    id: "frog",
    name: "Frog",
    keywords: [
      "animal",
      "nature",
      "croak",
      "toad"
    ],
    skins: [
      {
        unified: "1f438",
        native: "🐸"
      }
    ],
    version: 1
  },
  crocodile: {
    id: "crocodile",
    name: "Crocodile",
    keywords: [
      "animal",
      "nature",
      "reptile",
      "lizard",
      "alligator"
    ],
    skins: [
      {
        unified: "1f40a",
        native: "🐊"
      }
    ],
    version: 1
  },
  turtle: {
    id: "turtle",
    name: "Turtle",
    keywords: [
      "animal",
      "slow",
      "nature",
      "tortoise"
    ],
    skins: [
      {
        unified: "1f422",
        native: "🐢"
      }
    ],
    version: 1
  },
  lizard: {
    id: "lizard",
    name: "Lizard",
    keywords: [
      "animal",
      "nature",
      "reptile"
    ],
    skins: [
      {
        unified: "1f98e",
        native: "🦎"
      }
    ],
    version: 3
  },
  snake: {
    id: "snake",
    name: "Snake",
    keywords: [
      "animal",
      "evil",
      "nature",
      "hiss",
      "python"
    ],
    skins: [
      {
        unified: "1f40d",
        native: "🐍"
      }
    ],
    version: 1
  },
  dragon_face: {
    id: "dragon_face",
    name: "Dragon Face",
    keywords: [
      "animal",
      "myth",
      "nature",
      "chinese",
      "green"
    ],
    skins: [
      {
        unified: "1f432",
        native: "🐲"
      }
    ],
    version: 1
  },
  dragon: {
    id: "dragon",
    name: "Dragon",
    keywords: [
      "animal",
      "myth",
      "nature",
      "chinese",
      "green"
    ],
    skins: [
      {
        unified: "1f409",
        native: "🐉"
      }
    ],
    version: 1
  },
  sauropod: {
    id: "sauropod",
    name: "Sauropod",
    keywords: [
      "animal",
      "nature",
      "dinosaur",
      "brachiosaurus",
      "brontosaurus",
      "diplodocus",
      "extinct"
    ],
    skins: [
      {
        unified: "1f995",
        native: "🦕"
      }
    ],
    version: 5
  },
  "t-rex": {
    id: "t-rex",
    name: "T-Rex",
    keywords: [
      "t",
      "rex",
      "animal",
      "nature",
      "dinosaur",
      "tyrannosaurus",
      "extinct"
    ],
    skins: [
      {
        unified: "1f996",
        native: "🦖"
      }
    ],
    version: 5
  },
  whale: {
    id: "whale",
    name: "Spouting Whale",
    keywords: [
      "animal",
      "nature",
      "sea",
      "ocean"
    ],
    skins: [
      {
        unified: "1f433",
        native: "🐳"
      }
    ],
    version: 1
  },
  whale2: {
    id: "whale2",
    name: "Whale",
    keywords: [
      "whale2",
      "animal",
      "nature",
      "sea",
      "ocean"
    ],
    skins: [
      {
        unified: "1f40b",
        native: "🐋"
      }
    ],
    version: 1
  },
  dolphin: {
    id: "dolphin",
    name: "Dolphin",
    keywords: [
      "flipper",
      "animal",
      "nature",
      "fish",
      "sea",
      "ocean",
      "fins",
      "beach"
    ],
    skins: [
      {
        unified: "1f42c",
        native: "🐬"
      }
    ],
    version: 1
  },
  seal: {
    id: "seal",
    name: "Seal",
    keywords: [
      "animal",
      "creature",
      "sea"
    ],
    skins: [
      {
        unified: "1f9ad",
        native: "🦭"
      }
    ],
    version: 13
  },
  fish: {
    id: "fish",
    name: "Fish",
    keywords: [
      "animal",
      "food",
      "nature"
    ],
    skins: [
      {
        unified: "1f41f",
        native: "🐟"
      }
    ],
    version: 1
  },
  tropical_fish: {
    id: "tropical_fish",
    name: "Tropical Fish",
    keywords: [
      "animal",
      "swim",
      "ocean",
      "beach",
      "nemo"
    ],
    skins: [
      {
        unified: "1f420",
        native: "🐠"
      }
    ],
    version: 1
  },
  blowfish: {
    id: "blowfish",
    name: "Blowfish",
    keywords: [
      "animal",
      "nature",
      "food",
      "sea",
      "ocean"
    ],
    skins: [
      {
        unified: "1f421",
        native: "🐡"
      }
    ],
    version: 1
  },
  shark: {
    id: "shark",
    name: "Shark",
    keywords: [
      "animal",
      "nature",
      "fish",
      "sea",
      "ocean",
      "jaws",
      "fins",
      "beach"
    ],
    skins: [
      {
        unified: "1f988",
        native: "🦈"
      }
    ],
    version: 3
  },
  octopus: {
    id: "octopus",
    name: "Octopus",
    keywords: [
      "animal",
      "creature",
      "ocean",
      "sea",
      "nature",
      "beach"
    ],
    skins: [
      {
        unified: "1f419",
        native: "🐙"
      }
    ],
    version: 1
  },
  shell: {
    id: "shell",
    name: "Spiral Shell",
    keywords: [
      "nature",
      "sea",
      "beach"
    ],
    skins: [
      {
        unified: "1f41a",
        native: "🐚"
      }
    ],
    version: 1
  },
  coral: {
    id: "coral",
    name: "Coral",
    keywords: [
      "ocean",
      "sea",
      "reef"
    ],
    skins: [
      {
        unified: "1fab8",
        native: "🪸"
      }
    ],
    version: 14
  },
  jellyfish: {
    id: "jellyfish",
    name: "Jellyfish",
    keywords: [
      "sting",
      "tentacles"
    ],
    skins: [
      {
        unified: "1fabc",
        native: "🪼"
      }
    ],
    version: 15
  },
  snail: {
    id: "snail",
    name: "Snail",
    keywords: [
      "slow",
      "animal",
      "shell"
    ],
    skins: [
      {
        unified: "1f40c",
        native: "🐌"
      }
    ],
    version: 1
  },
  butterfly: {
    id: "butterfly",
    name: "Butterfly",
    keywords: [
      "animal",
      "insect",
      "nature",
      "caterpillar"
    ],
    skins: [
      {
        unified: "1f98b",
        native: "🦋"
      }
    ],
    version: 3
  },
  bug: {
    id: "bug",
    name: "Bug",
    keywords: [
      "animal",
      "insect",
      "nature",
      "worm"
    ],
    skins: [
      {
        unified: "1f41b",
        native: "🐛"
      }
    ],
    version: 1
  },
  ant: {
    id: "ant",
    name: "Ant",
    keywords: [
      "animal",
      "insect",
      "nature",
      "bug"
    ],
    skins: [
      {
        unified: "1f41c",
        native: "🐜"
      }
    ],
    version: 1
  },
  bee: {
    id: "bee",
    name: "Honeybee",
    keywords: [
      "bee",
      "animal",
      "insect",
      "nature",
      "bug",
      "spring",
      "honey"
    ],
    skins: [
      {
        unified: "1f41d",
        native: "🐝"
      }
    ],
    version: 1
  },
  beetle: {
    id: "beetle",
    name: "Beetle",
    keywords: [
      "insect"
    ],
    skins: [
      {
        unified: "1fab2",
        native: "🪲"
      }
    ],
    version: 13
  },
  ladybug: {
    id: "ladybug",
    name: "Lady Beetle",
    keywords: [
      "ladybug",
      "animal",
      "insect",
      "nature"
    ],
    skins: [
      {
        unified: "1f41e",
        native: "🐞"
      }
    ],
    version: 1
  },
  cricket: {
    id: "cricket",
    name: "Cricket",
    keywords: [
      "animal",
      "chirp"
    ],
    skins: [
      {
        unified: "1f997",
        native: "🦗"
      }
    ],
    version: 5
  },
  cockroach: {
    id: "cockroach",
    name: "Cockroach",
    keywords: [
      "insect",
      "pests"
    ],
    skins: [
      {
        unified: "1fab3",
        native: "🪳"
      }
    ],
    version: 13
  },
  spider: {
    id: "spider",
    name: "Spider",
    keywords: [
      "animal",
      "arachnid"
    ],
    skins: [
      {
        unified: "1f577-fe0f",
        native: "🕷️"
      }
    ],
    version: 1
  },
  spider_web: {
    id: "spider_web",
    name: "Spider Web",
    keywords: [
      "animal",
      "insect",
      "arachnid",
      "silk"
    ],
    skins: [
      {
        unified: "1f578-fe0f",
        native: "🕸️"
      }
    ],
    version: 1
  },
  scorpion: {
    id: "scorpion",
    name: "Scorpion",
    keywords: [
      "animal",
      "arachnid"
    ],
    skins: [
      {
        unified: "1f982",
        native: "🦂"
      }
    ],
    version: 1
  },
  mosquito: {
    id: "mosquito",
    name: "Mosquito",
    keywords: [
      "animal",
      "nature",
      "insect",
      "malaria"
    ],
    skins: [
      {
        unified: "1f99f",
        native: "🦟"
      }
    ],
    version: 11
  },
  fly: {
    id: "fly",
    name: "Fly",
    keywords: [
      "insect"
    ],
    skins: [
      {
        unified: "1fab0",
        native: "🪰"
      }
    ],
    version: 13
  },
  worm: {
    id: "worm",
    name: "Worm",
    keywords: [
      "animal"
    ],
    skins: [
      {
        unified: "1fab1",
        native: "🪱"
      }
    ],
    version: 13
  },
  microbe: {
    id: "microbe",
    name: "Microbe",
    keywords: [
      "amoeba",
      "bacteria",
      "germs",
      "virus",
      "covid"
    ],
    skins: [
      {
        unified: "1f9a0",
        native: "🦠"
      }
    ],
    version: 11
  },
  bouquet: {
    id: "bouquet",
    name: "Bouquet",
    keywords: [
      "flowers",
      "nature",
      "spring"
    ],
    skins: [
      {
        unified: "1f490",
        native: "💐"
      }
    ],
    version: 1
  },
  cherry_blossom: {
    id: "cherry_blossom",
    name: "Cherry Blossom",
    keywords: [
      "nature",
      "plant",
      "spring",
      "flower"
    ],
    skins: [
      {
        unified: "1f338",
        native: "🌸"
      }
    ],
    version: 1
  },
  white_flower: {
    id: "white_flower",
    name: "White Flower",
    keywords: [
      "japanese",
      "spring"
    ],
    skins: [
      {
        unified: "1f4ae",
        native: "💮"
      }
    ],
    version: 1
  },
  lotus: {
    id: "lotus",
    name: "Lotus",
    keywords: [
      "flower",
      "calm",
      "meditation"
    ],
    skins: [
      {
        unified: "1fab7",
        native: "🪷"
      }
    ],
    version: 14
  },
  rosette: {
    id: "rosette",
    name: "Rosette",
    keywords: [
      "flower",
      "decoration",
      "military"
    ],
    skins: [
      {
        unified: "1f3f5-fe0f",
        native: "🏵️"
      }
    ],
    version: 1
  },
  rose: {
    id: "rose",
    name: "Rose",
    keywords: [
      "flowers",
      "valentines",
      "love",
      "spring"
    ],
    skins: [
      {
        unified: "1f339",
        native: "🌹"
      }
    ],
    version: 1
  },
  wilted_flower: {
    id: "wilted_flower",
    name: "Wilted Flower",
    keywords: [
      "plant",
      "nature",
      "rose"
    ],
    skins: [
      {
        unified: "1f940",
        native: "🥀"
      }
    ],
    version: 3
  },
  hibiscus: {
    id: "hibiscus",
    name: "Hibiscus",
    keywords: [
      "plant",
      "vegetable",
      "flowers",
      "beach"
    ],
    skins: [
      {
        unified: "1f33a",
        native: "🌺"
      }
    ],
    version: 1
  },
  sunflower: {
    id: "sunflower",
    name: "Sunflower",
    keywords: [
      "nature",
      "plant",
      "fall"
    ],
    skins: [
      {
        unified: "1f33b",
        native: "🌻"
      }
    ],
    version: 1
  },
  blossom: {
    id: "blossom",
    name: "Blossom",
    keywords: [
      "nature",
      "flowers",
      "yellow"
    ],
    skins: [
      {
        unified: "1f33c",
        native: "🌼"
      }
    ],
    version: 1
  },
  tulip: {
    id: "tulip",
    name: "Tulip",
    keywords: [
      "flowers",
      "plant",
      "nature",
      "summer",
      "spring"
    ],
    skins: [
      {
        unified: "1f337",
        native: "🌷"
      }
    ],
    version: 1
  },
  hyacinth: {
    id: "hyacinth",
    name: "Hyacinth",
    keywords: [
      "flower",
      "lavender"
    ],
    skins: [
      {
        unified: "1fabb",
        native: "🪻"
      }
    ],
    version: 15
  },
  seedling: {
    id: "seedling",
    name: "Seedling",
    keywords: [
      "plant",
      "nature",
      "grass",
      "lawn",
      "spring"
    ],
    skins: [
      {
        unified: "1f331",
        native: "🌱"
      }
    ],
    version: 1
  },
  potted_plant: {
    id: "potted_plant",
    name: "Potted Plant",
    keywords: [
      "greenery",
      "house"
    ],
    skins: [
      {
        unified: "1fab4",
        native: "🪴"
      }
    ],
    version: 13
  },
  evergreen_tree: {
    id: "evergreen_tree",
    name: "Evergreen Tree",
    keywords: [
      "plant",
      "nature"
    ],
    skins: [
      {
        unified: "1f332",
        native: "🌲"
      }
    ],
    version: 1
  },
  deciduous_tree: {
    id: "deciduous_tree",
    name: "Deciduous Tree",
    keywords: [
      "plant",
      "nature"
    ],
    skins: [
      {
        unified: "1f333",
        native: "🌳"
      }
    ],
    version: 1
  },
  palm_tree: {
    id: "palm_tree",
    name: "Palm Tree",
    keywords: [
      "plant",
      "vegetable",
      "nature",
      "summer",
      "beach",
      "mojito",
      "tropical"
    ],
    skins: [
      {
        unified: "1f334",
        native: "🌴"
      }
    ],
    version: 1
  },
  cactus: {
    id: "cactus",
    name: "Cactus",
    keywords: [
      "vegetable",
      "plant",
      "nature"
    ],
    skins: [
      {
        unified: "1f335",
        native: "🌵"
      }
    ],
    version: 1
  },
  ear_of_rice: {
    id: "ear_of_rice",
    name: "Ear of Rice",
    keywords: [
      "sheaf",
      "nature",
      "plant"
    ],
    skins: [
      {
        unified: "1f33e",
        native: "🌾"
      }
    ],
    version: 1
  },
  herb: {
    id: "herb",
    name: "Herb",
    keywords: [
      "vegetable",
      "plant",
      "medicine",
      "weed",
      "grass",
      "lawn"
    ],
    skins: [
      {
        unified: "1f33f",
        native: "🌿"
      }
    ],
    version: 1
  },
  shamrock: {
    id: "shamrock",
    name: "Shamrock",
    keywords: [
      "vegetable",
      "plant",
      "nature",
      "irish",
      "clover"
    ],
    skins: [
      {
        unified: "2618-fe0f",
        native: "☘️"
      }
    ],
    version: 1
  },
  four_leaf_clover: {
    id: "four_leaf_clover",
    name: "Four Leaf Clover",
    keywords: [
      "vegetable",
      "plant",
      "nature",
      "lucky",
      "irish"
    ],
    skins: [
      {
        unified: "1f340",
        native: "🍀"
      }
    ],
    version: 1
  },
  maple_leaf: {
    id: "maple_leaf",
    name: "Maple Leaf",
    keywords: [
      "nature",
      "plant",
      "vegetable",
      "ca",
      "fall"
    ],
    skins: [
      {
        unified: "1f341",
        native: "🍁"
      }
    ],
    version: 1
  },
  fallen_leaf: {
    id: "fallen_leaf",
    name: "Fallen Leaf",
    keywords: [
      "nature",
      "plant",
      "vegetable",
      "leaves"
    ],
    skins: [
      {
        unified: "1f342",
        native: "🍂"
      }
    ],
    version: 1
  },
  leaves: {
    id: "leaves",
    name: "Leaf Fluttering in Wind",
    keywords: [
      "leaves",
      "nature",
      "plant",
      "tree",
      "vegetable",
      "grass",
      "lawn",
      "spring"
    ],
    skins: [
      {
        unified: "1f343",
        native: "🍃"
      }
    ],
    version: 1
  },
  empty_nest: {
    id: "empty_nest",
    name: "Empty Nest",
    keywords: [
      "bird"
    ],
    skins: [
      {
        unified: "1fab9",
        native: "🪹"
      }
    ],
    version: 14
  },
  nest_with_eggs: {
    id: "nest_with_eggs",
    name: "Nest with Eggs",
    keywords: [
      "bird"
    ],
    skins: [
      {
        unified: "1faba",
        native: "🪺"
      }
    ],
    version: 14
  },
  mushroom: {
    id: "mushroom",
    name: "Mushroom",
    keywords: [
      "plant",
      "vegetable"
    ],
    skins: [
      {
        unified: "1f344",
        native: "🍄"
      }
    ],
    version: 1
  },
  grapes: {
    id: "grapes",
    name: "Grapes",
    keywords: [
      "fruit",
      "food",
      "wine"
    ],
    skins: [
      {
        unified: "1f347",
        native: "🍇"
      }
    ],
    version: 1
  },
  melon: {
    id: "melon",
    name: "Melon",
    keywords: [
      "fruit",
      "nature",
      "food"
    ],
    skins: [
      {
        unified: "1f348",
        native: "🍈"
      }
    ],
    version: 1
  },
  watermelon: {
    id: "watermelon",
    name: "Watermelon",
    keywords: [
      "fruit",
      "food",
      "picnic",
      "summer"
    ],
    skins: [
      {
        unified: "1f349",
        native: "🍉"
      }
    ],
    version: 1
  },
  tangerine: {
    id: "tangerine",
    name: "Tangerine",
    keywords: [
      "food",
      "fruit",
      "nature",
      "orange"
    ],
    skins: [
      {
        unified: "1f34a",
        native: "🍊"
      }
    ],
    version: 1
  },
  lemon: {
    id: "lemon",
    name: "Lemon",
    keywords: [
      "fruit",
      "nature"
    ],
    skins: [
      {
        unified: "1f34b",
        native: "🍋"
      }
    ],
    version: 1
  },
  banana: {
    id: "banana",
    name: "Banana",
    keywords: [
      "fruit",
      "food",
      "monkey"
    ],
    skins: [
      {
        unified: "1f34c",
        native: "🍌"
      }
    ],
    version: 1
  },
  pineapple: {
    id: "pineapple",
    name: "Pineapple",
    keywords: [
      "fruit",
      "nature",
      "food"
    ],
    skins: [
      {
        unified: "1f34d",
        native: "🍍"
      }
    ],
    version: 1
  },
  mango: {
    id: "mango",
    name: "Mango",
    keywords: [
      "fruit",
      "food",
      "tropical"
    ],
    skins: [
      {
        unified: "1f96d",
        native: "🥭"
      }
    ],
    version: 11
  },
  apple: {
    id: "apple",
    name: "Red Apple",
    keywords: [
      "fruit",
      "mac",
      "school"
    ],
    skins: [
      {
        unified: "1f34e",
        native: "🍎"
      }
    ],
    version: 1
  },
  green_apple: {
    id: "green_apple",
    name: "Green Apple",
    keywords: [
      "fruit",
      "nature"
    ],
    skins: [
      {
        unified: "1f34f",
        native: "🍏"
      }
    ],
    version: 1
  },
  pear: {
    id: "pear",
    name: "Pear",
    keywords: [
      "fruit",
      "nature",
      "food"
    ],
    skins: [
      {
        unified: "1f350",
        native: "🍐"
      }
    ],
    version: 1
  },
  peach: {
    id: "peach",
    name: "Peach",
    keywords: [
      "fruit",
      "nature",
      "food"
    ],
    skins: [
      {
        unified: "1f351",
        native: "🍑"
      }
    ],
    version: 1
  },
  cherries: {
    id: "cherries",
    name: "Cherries",
    keywords: [
      "food",
      "fruit"
    ],
    skins: [
      {
        unified: "1f352",
        native: "🍒"
      }
    ],
    version: 1
  },
  strawberry: {
    id: "strawberry",
    name: "Strawberry",
    keywords: [
      "fruit",
      "food",
      "nature"
    ],
    skins: [
      {
        unified: "1f353",
        native: "🍓"
      }
    ],
    version: 1
  },
  blueberries: {
    id: "blueberries",
    name: "Blueberries",
    keywords: [
      "fruit"
    ],
    skins: [
      {
        unified: "1fad0",
        native: "🫐"
      }
    ],
    version: 13
  },
  kiwifruit: {
    id: "kiwifruit",
    name: "Kiwifruit",
    keywords: [
      "kiwi",
      "fruit",
      "food"
    ],
    skins: [
      {
        unified: "1f95d",
        native: "🥝"
      }
    ],
    version: 3
  },
  tomato: {
    id: "tomato",
    name: "Tomato",
    keywords: [
      "fruit",
      "vegetable",
      "nature",
      "food"
    ],
    skins: [
      {
        unified: "1f345",
        native: "🍅"
      }
    ],
    version: 1
  },
  olive: {
    id: "olive",
    name: "Olive",
    keywords: [
      "fruit"
    ],
    skins: [
      {
        unified: "1fad2",
        native: "🫒"
      }
    ],
    version: 13
  },
  coconut: {
    id: "coconut",
    name: "Coconut",
    keywords: [
      "fruit",
      "nature",
      "food",
      "palm"
    ],
    skins: [
      {
        unified: "1f965",
        native: "🥥"
      }
    ],
    version: 5
  },
  avocado: {
    id: "avocado",
    name: "Avocado",
    keywords: [
      "fruit",
      "food"
    ],
    skins: [
      {
        unified: "1f951",
        native: "🥑"
      }
    ],
    version: 3
  },
  eggplant: {
    id: "eggplant",
    name: "Eggplant",
    keywords: [
      "vegetable",
      "nature",
      "food",
      "aubergine"
    ],
    skins: [
      {
        unified: "1f346",
        native: "🍆"
      }
    ],
    version: 1
  },
  potato: {
    id: "potato",
    name: "Potato",
    keywords: [
      "food",
      "tuber",
      "vegatable",
      "starch"
    ],
    skins: [
      {
        unified: "1f954",
        native: "🥔"
      }
    ],
    version: 3
  },
  carrot: {
    id: "carrot",
    name: "Carrot",
    keywords: [
      "vegetable",
      "food",
      "orange"
    ],
    skins: [
      {
        unified: "1f955",
        native: "🥕"
      }
    ],
    version: 3
  },
  corn: {
    id: "corn",
    name: "Ear of Corn",
    keywords: [
      "food",
      "vegetable",
      "plant"
    ],
    skins: [
      {
        unified: "1f33d",
        native: "🌽"
      }
    ],
    version: 1
  },
  hot_pepper: {
    id: "hot_pepper",
    name: "Hot Pepper",
    keywords: [
      "food",
      "spicy",
      "chilli",
      "chili"
    ],
    skins: [
      {
        unified: "1f336-fe0f",
        native: "🌶️"
      }
    ],
    version: 1
  },
  bell_pepper: {
    id: "bell_pepper",
    name: "Bell Pepper",
    keywords: [
      "fruit",
      "plant"
    ],
    skins: [
      {
        unified: "1fad1",
        native: "🫑"
      }
    ],
    version: 13
  },
  cucumber: {
    id: "cucumber",
    name: "Cucumber",
    keywords: [
      "fruit",
      "food",
      "pickle"
    ],
    skins: [
      {
        unified: "1f952",
        native: "🥒"
      }
    ],
    version: 3
  },
  leafy_green: {
    id: "leafy_green",
    name: "Leafy Green",
    keywords: [
      "food",
      "vegetable",
      "plant",
      "bok",
      "choy",
      "cabbage",
      "kale",
      "lettuce"
    ],
    skins: [
      {
        unified: "1f96c",
        native: "🥬"
      }
    ],
    version: 11
  },
  broccoli: {
    id: "broccoli",
    name: "Broccoli",
    keywords: [
      "fruit",
      "food",
      "vegetable"
    ],
    skins: [
      {
        unified: "1f966",
        native: "🥦"
      }
    ],
    version: 5
  },
  garlic: {
    id: "garlic",
    name: "Garlic",
    keywords: [
      "food",
      "spice",
      "cook"
    ],
    skins: [
      {
        unified: "1f9c4",
        native: "🧄"
      }
    ],
    version: 12
  },
  onion: {
    id: "onion",
    name: "Onion",
    keywords: [
      "cook",
      "food",
      "spice"
    ],
    skins: [
      {
        unified: "1f9c5",
        native: "🧅"
      }
    ],
    version: 12
  },
  peanuts: {
    id: "peanuts",
    name: "Peanuts",
    keywords: [
      "food",
      "nut"
    ],
    skins: [
      {
        unified: "1f95c",
        native: "🥜"
      }
    ],
    version: 3
  },
  beans: {
    id: "beans",
    name: "Beans",
    keywords: [
      "food"
    ],
    skins: [
      {
        unified: "1fad8",
        native: "🫘"
      }
    ],
    version: 14
  },
  chestnut: {
    id: "chestnut",
    name: "Chestnut",
    keywords: [
      "food",
      "squirrel"
    ],
    skins: [
      {
        unified: "1f330",
        native: "🌰"
      }
    ],
    version: 1
  },
  ginger_root: {
    id: "ginger_root",
    name: "Ginger Root",
    keywords: [
      "spice",
      "yellow",
      "cooking",
      "gingerbread"
    ],
    skins: [
      {
        unified: "1fada",
        native: "🫚"
      }
    ],
    version: 15
  },
  pea_pod: {
    id: "pea_pod",
    name: "Pea Pod",
    keywords: [
      "cozy",
      "green"
    ],
    skins: [
      {
        unified: "1fadb",
        native: "🫛"
      }
    ],
    version: 15
  },
  bread: {
    id: "bread",
    name: "Bread",
    keywords: [
      "food",
      "wheat",
      "breakfast",
      "toast"
    ],
    skins: [
      {
        unified: "1f35e",
        native: "🍞"
      }
    ],
    version: 1
  },
  croissant: {
    id: "croissant",
    name: "Croissant",
    keywords: [
      "food",
      "bread",
      "french"
    ],
    skins: [
      {
        unified: "1f950",
        native: "🥐"
      }
    ],
    version: 3
  },
  baguette_bread: {
    id: "baguette_bread",
    name: "Baguette Bread",
    keywords: [
      "food",
      "french",
      "france",
      "bakery"
    ],
    skins: [
      {
        unified: "1f956",
        native: "🥖"
      }
    ],
    version: 3
  },
  flatbread: {
    id: "flatbread",
    name: "Flatbread",
    keywords: [
      "flour",
      "food",
      "bakery"
    ],
    skins: [
      {
        unified: "1fad3",
        native: "🫓"
      }
    ],
    version: 13
  },
  pretzel: {
    id: "pretzel",
    name: "Pretzel",
    keywords: [
      "food",
      "bread",
      "twisted",
      "germany",
      "bakery"
    ],
    skins: [
      {
        unified: "1f968",
        native: "🥨"
      }
    ],
    version: 5
  },
  bagel: {
    id: "bagel",
    name: "Bagel",
    keywords: [
      "food",
      "bread",
      "bakery",
      "schmear",
      "jewish"
    ],
    skins: [
      {
        unified: "1f96f",
        native: "🥯"
      }
    ],
    version: 11
  },
  pancakes: {
    id: "pancakes",
    name: "Pancakes",
    keywords: [
      "food",
      "breakfast",
      "flapjacks",
      "hotcakes",
      "brunch"
    ],
    skins: [
      {
        unified: "1f95e",
        native: "🥞"
      }
    ],
    version: 3
  },
  waffle: {
    id: "waffle",
    name: "Waffle",
    keywords: [
      "food",
      "breakfast",
      "brunch"
    ],
    skins: [
      {
        unified: "1f9c7",
        native: "🧇"
      }
    ],
    version: 12
  },
  cheese_wedge: {
    id: "cheese_wedge",
    name: "Cheese Wedge",
    keywords: [
      "food",
      "chadder",
      "swiss"
    ],
    skins: [
      {
        unified: "1f9c0",
        native: "🧀"
      }
    ],
    version: 1
  },
  meat_on_bone: {
    id: "meat_on_bone",
    name: "Meat on Bone",
    keywords: [
      "good",
      "food",
      "drumstick"
    ],
    skins: [
      {
        unified: "1f356",
        native: "🍖"
      }
    ],
    version: 1
  },
  poultry_leg: {
    id: "poultry_leg",
    name: "Poultry Leg",
    keywords: [
      "food",
      "meat",
      "drumstick",
      "bird",
      "chicken",
      "turkey"
    ],
    skins: [
      {
        unified: "1f357",
        native: "🍗"
      }
    ],
    version: 1
  },
  cut_of_meat: {
    id: "cut_of_meat",
    name: "Cut of Meat",
    keywords: [
      "food",
      "cow",
      "chop",
      "lambchop",
      "porkchop"
    ],
    skins: [
      {
        unified: "1f969",
        native: "🥩"
      }
    ],
    version: 5
  },
  bacon: {
    id: "bacon",
    name: "Bacon",
    keywords: [
      "food",
      "breakfast",
      "pork",
      "pig",
      "meat",
      "brunch"
    ],
    skins: [
      {
        unified: "1f953",
        native: "🥓"
      }
    ],
    version: 3
  },
  hamburger: {
    id: "hamburger",
    name: "Hamburger",
    keywords: [
      "meat",
      "fast",
      "food",
      "beef",
      "cheeseburger",
      "mcdonalds",
      "burger",
      "king"
    ],
    skins: [
      {
        unified: "1f354",
        native: "🍔"
      }
    ],
    version: 1
  },
  fries: {
    id: "fries",
    name: "French Fries",
    keywords: [
      "chips",
      "snack",
      "fast",
      "food",
      "potato"
    ],
    skins: [
      {
        unified: "1f35f",
        native: "🍟"
      }
    ],
    version: 1
  },
  pizza: {
    id: "pizza",
    name: "Pizza",
    keywords: [
      "food",
      "party",
      "italy"
    ],
    skins: [
      {
        unified: "1f355",
        native: "🍕"
      }
    ],
    version: 1
  },
  hotdog: {
    id: "hotdog",
    name: "Hot Dog",
    keywords: [
      "hotdog",
      "food",
      "frankfurter",
      "america"
    ],
    skins: [
      {
        unified: "1f32d",
        native: "🌭"
      }
    ],
    version: 1
  },
  sandwich: {
    id: "sandwich",
    name: "Sandwich",
    keywords: [
      "food",
      "lunch",
      "bread",
      "toast",
      "bakery"
    ],
    skins: [
      {
        unified: "1f96a",
        native: "🥪"
      }
    ],
    version: 5
  },
  taco: {
    id: "taco",
    name: "Taco",
    keywords: [
      "food",
      "mexican"
    ],
    skins: [
      {
        unified: "1f32e",
        native: "🌮"
      }
    ],
    version: 1
  },
  burrito: {
    id: "burrito",
    name: "Burrito",
    keywords: [
      "food",
      "mexican"
    ],
    skins: [
      {
        unified: "1f32f",
        native: "🌯"
      }
    ],
    version: 1
  },
  tamale: {
    id: "tamale",
    name: "Tamale",
    keywords: [
      "food",
      "masa"
    ],
    skins: [
      {
        unified: "1fad4",
        native: "🫔"
      }
    ],
    version: 13
  },
  stuffed_flatbread: {
    id: "stuffed_flatbread",
    name: "Stuffed Flatbread",
    keywords: [
      "food",
      "gyro",
      "mediterranean"
    ],
    skins: [
      {
        unified: "1f959",
        native: "🥙"
      }
    ],
    version: 3
  },
  falafel: {
    id: "falafel",
    name: "Falafel",
    keywords: [
      "food",
      "mediterranean"
    ],
    skins: [
      {
        unified: "1f9c6",
        native: "🧆"
      }
    ],
    version: 12
  },
  egg: {
    id: "egg",
    name: "Egg",
    keywords: [
      "food",
      "chicken",
      "breakfast"
    ],
    skins: [
      {
        unified: "1f95a",
        native: "🥚"
      }
    ],
    version: 3
  },
  fried_egg: {
    id: "fried_egg",
    name: "Cooking",
    keywords: [
      "fried",
      "egg",
      "food",
      "breakfast",
      "kitchen",
      "skillet"
    ],
    skins: [
      {
        unified: "1f373",
        native: "🍳"
      }
    ],
    version: 1
  },
  shallow_pan_of_food: {
    id: "shallow_pan_of_food",
    name: "Shallow Pan of Food",
    keywords: [
      "cooking",
      "casserole",
      "paella",
      "skillet"
    ],
    skins: [
      {
        unified: "1f958",
        native: "🥘"
      }
    ],
    version: 3
  },
  stew: {
    id: "stew",
    name: "Pot of Food",
    keywords: [
      "stew",
      "meat",
      "soup",
      "hot"
    ],
    skins: [
      {
        unified: "1f372",
        native: "🍲"
      }
    ],
    version: 1
  },
  fondue: {
    id: "fondue",
    name: "Fondue",
    keywords: [
      "cheese",
      "pot",
      "food"
    ],
    skins: [
      {
        unified: "1fad5",
        native: "🫕"
      }
    ],
    version: 13
  },
  bowl_with_spoon: {
    id: "bowl_with_spoon",
    name: "Bowl with Spoon",
    keywords: [
      "food",
      "breakfast",
      "cereal",
      "oatmeal",
      "porridge"
    ],
    skins: [
      {
        unified: "1f963",
        native: "🥣"
      }
    ],
    version: 5
  },
  green_salad: {
    id: "green_salad",
    name: "Green Salad",
    keywords: [
      "food",
      "healthy",
      "lettuce",
      "vegetable"
    ],
    skins: [
      {
        unified: "1f957",
        native: "🥗"
      }
    ],
    version: 3
  },
  popcorn: {
    id: "popcorn",
    name: "Popcorn",
    keywords: [
      "food",
      "movie",
      "theater",
      "films",
      "snack",
      "drama"
    ],
    skins: [
      {
        unified: "1f37f",
        native: "🍿"
      }
    ],
    version: 1
  },
  butter: {
    id: "butter",
    name: "Butter",
    keywords: [
      "food",
      "cook"
    ],
    skins: [
      {
        unified: "1f9c8",
        native: "🧈"
      }
    ],
    version: 12
  },
  salt: {
    id: "salt",
    name: "Salt",
    keywords: [
      "condiment",
      "shaker"
    ],
    skins: [
      {
        unified: "1f9c2",
        native: "🧂"
      }
    ],
    version: 11
  },
  canned_food: {
    id: "canned_food",
    name: "Canned Food",
    keywords: [
      "soup",
      "tomatoes"
    ],
    skins: [
      {
        unified: "1f96b",
        native: "🥫"
      }
    ],
    version: 5
  },
  bento: {
    id: "bento",
    name: "Bento Box",
    keywords: [
      "food",
      "japanese",
      "lunch"
    ],
    skins: [
      {
        unified: "1f371",
        native: "🍱"
      }
    ],
    version: 1
  },
  rice_cracker: {
    id: "rice_cracker",
    name: "Rice Cracker",
    keywords: [
      "food",
      "japanese",
      "snack"
    ],
    skins: [
      {
        unified: "1f358",
        native: "🍘"
      }
    ],
    version: 1
  },
  rice_ball: {
    id: "rice_ball",
    name: "Rice Ball",
    keywords: [
      "food",
      "japanese"
    ],
    skins: [
      {
        unified: "1f359",
        native: "🍙"
      }
    ],
    version: 1
  },
  rice: {
    id: "rice",
    name: "Cooked Rice",
    keywords: [
      "food",
      "asian"
    ],
    skins: [
      {
        unified: "1f35a",
        native: "🍚"
      }
    ],
    version: 1
  },
  curry: {
    id: "curry",
    name: "Curry Rice",
    keywords: [
      "food",
      "spicy",
      "hot",
      "indian"
    ],
    skins: [
      {
        unified: "1f35b",
        native: "🍛"
      }
    ],
    version: 1
  },
  ramen: {
    id: "ramen",
    name: "Steaming Bowl",
    keywords: [
      "ramen",
      "food",
      "japanese",
      "noodle",
      "chopsticks"
    ],
    skins: [
      {
        unified: "1f35c",
        native: "🍜"
      }
    ],
    version: 1
  },
  spaghetti: {
    id: "spaghetti",
    name: "Spaghetti",
    keywords: [
      "food",
      "italian",
      "pasta",
      "noodle"
    ],
    skins: [
      {
        unified: "1f35d",
        native: "🍝"
      }
    ],
    version: 1
  },
  sweet_potato: {
    id: "sweet_potato",
    name: "Roasted Sweet Potato",
    keywords: [
      "food",
      "nature",
      "plant"
    ],
    skins: [
      {
        unified: "1f360",
        native: "🍠"
      }
    ],
    version: 1
  },
  oden: {
    id: "oden",
    name: "Oden",
    keywords: [
      "food",
      "japanese"
    ],
    skins: [
      {
        unified: "1f362",
        native: "🍢"
      }
    ],
    version: 1
  },
  sushi: {
    id: "sushi",
    name: "Sushi",
    keywords: [
      "food",
      "fish",
      "japanese",
      "rice"
    ],
    skins: [
      {
        unified: "1f363",
        native: "🍣"
      }
    ],
    version: 1
  },
  fried_shrimp: {
    id: "fried_shrimp",
    name: "Fried Shrimp",
    keywords: [
      "food",
      "animal",
      "appetizer",
      "summer"
    ],
    skins: [
      {
        unified: "1f364",
        native: "🍤"
      }
    ],
    version: 1
  },
  fish_cake: {
    id: "fish_cake",
    name: "Fish Cake with Swirl",
    keywords: [
      "food",
      "japan",
      "sea",
      "beach",
      "narutomaki",
      "pink",
      "kamaboko",
      "surimi",
      "ramen"
    ],
    skins: [
      {
        unified: "1f365",
        native: "🍥"
      }
    ],
    version: 1
  },
  moon_cake: {
    id: "moon_cake",
    name: "Moon Cake",
    keywords: [
      "food",
      "autumn",
      "dessert"
    ],
    skins: [
      {
        unified: "1f96e",
        native: "🥮"
      }
    ],
    version: 11
  },
  dango: {
    id: "dango",
    name: "Dango",
    keywords: [
      "food",
      "dessert",
      "sweet",
      "japanese",
      "barbecue",
      "meat"
    ],
    skins: [
      {
        unified: "1f361",
        native: "🍡"
      }
    ],
    version: 1
  },
  dumpling: {
    id: "dumpling",
    name: "Dumpling",
    keywords: [
      "food",
      "empanada",
      "pierogi",
      "potsticker",
      "gyoza"
    ],
    skins: [
      {
        unified: "1f95f",
        native: "🥟"
      }
    ],
    version: 5
  },
  fortune_cookie: {
    id: "fortune_cookie",
    name: "Fortune Cookie",
    keywords: [
      "food",
      "prophecy",
      "dessert"
    ],
    skins: [
      {
        unified: "1f960",
        native: "🥠"
      }
    ],
    version: 5
  },
  takeout_box: {
    id: "takeout_box",
    name: "Takeout Box",
    keywords: [
      "food",
      "leftovers"
    ],
    skins: [
      {
        unified: "1f961",
        native: "🥡"
      }
    ],
    version: 5
  },
  crab: {
    id: "crab",
    name: "Crab",
    keywords: [
      "animal",
      "crustacean"
    ],
    skins: [
      {
        unified: "1f980",
        native: "🦀"
      }
    ],
    version: 1
  },
  lobster: {
    id: "lobster",
    name: "Lobster",
    keywords: [
      "animal",
      "nature",
      "bisque",
      "claws",
      "seafood"
    ],
    skins: [
      {
        unified: "1f99e",
        native: "🦞"
      }
    ],
    version: 11
  },
  shrimp: {
    id: "shrimp",
    name: "Shrimp",
    keywords: [
      "animal",
      "ocean",
      "nature",
      "seafood"
    ],
    skins: [
      {
        unified: "1f990",
        native: "🦐"
      }
    ],
    version: 3
  },
  squid: {
    id: "squid",
    name: "Squid",
    keywords: [
      "animal",
      "nature",
      "ocean",
      "sea"
    ],
    skins: [
      {
        unified: "1f991",
        native: "🦑"
      }
    ],
    version: 3
  },
  oyster: {
    id: "oyster",
    name: "Oyster",
    keywords: [
      "food"
    ],
    skins: [
      {
        unified: "1f9aa",
        native: "🦪"
      }
    ],
    version: 12
  },
  icecream: {
    id: "icecream",
    name: "Soft Ice Cream",
    keywords: [
      "icecream",
      "food",
      "hot",
      "dessert",
      "summer"
    ],
    skins: [
      {
        unified: "1f366",
        native: "🍦"
      }
    ],
    version: 1
  },
  shaved_ice: {
    id: "shaved_ice",
    name: "Shaved Ice",
    keywords: [
      "hot",
      "dessert",
      "summer"
    ],
    skins: [
      {
        unified: "1f367",
        native: "🍧"
      }
    ],
    version: 1
  },
  ice_cream: {
    id: "ice_cream",
    name: "Ice Cream",
    keywords: [
      "food",
      "hot",
      "dessert"
    ],
    skins: [
      {
        unified: "1f368",
        native: "🍨"
      }
    ],
    version: 1
  },
  doughnut: {
    id: "doughnut",
    name: "Doughnut",
    keywords: [
      "food",
      "dessert",
      "snack",
      "sweet",
      "donut"
    ],
    skins: [
      {
        unified: "1f369",
        native: "🍩"
      }
    ],
    version: 1
  },
  cookie: {
    id: "cookie",
    name: "Cookie",
    keywords: [
      "food",
      "snack",
      "oreo",
      "chocolate",
      "sweet",
      "dessert"
    ],
    skins: [
      {
        unified: "1f36a",
        native: "🍪"
      }
    ],
    version: 1
  },
  birthday: {
    id: "birthday",
    name: "Birthday Cake",
    keywords: [
      "food",
      "dessert"
    ],
    skins: [
      {
        unified: "1f382",
        native: "🎂"
      }
    ],
    version: 1
  },
  cake: {
    id: "cake",
    name: "Shortcake",
    keywords: [
      "cake",
      "food",
      "dessert"
    ],
    skins: [
      {
        unified: "1f370",
        native: "🍰"
      }
    ],
    version: 1
  },
  cupcake: {
    id: "cupcake",
    name: "Cupcake",
    keywords: [
      "food",
      "dessert",
      "bakery",
      "sweet"
    ],
    skins: [
      {
        unified: "1f9c1",
        native: "🧁"
      }
    ],
    version: 11
  },
  pie: {
    id: "pie",
    name: "Pie",
    keywords: [
      "food",
      "dessert",
      "pastry"
    ],
    skins: [
      {
        unified: "1f967",
        native: "🥧"
      }
    ],
    version: 5
  },
  chocolate_bar: {
    id: "chocolate_bar",
    name: "Chocolate Bar",
    keywords: [
      "food",
      "snack",
      "dessert",
      "sweet"
    ],
    skins: [
      {
        unified: "1f36b",
        native: "🍫"
      }
    ],
    version: 1
  },
  candy: {
    id: "candy",
    name: "Candy",
    keywords: [
      "snack",
      "dessert",
      "sweet",
      "lolly"
    ],
    skins: [
      {
        unified: "1f36c",
        native: "🍬"
      }
    ],
    version: 1
  },
  lollipop: {
    id: "lollipop",
    name: "Lollipop",
    keywords: [
      "food",
      "snack",
      "candy",
      "sweet"
    ],
    skins: [
      {
        unified: "1f36d",
        native: "🍭"
      }
    ],
    version: 1
  },
  custard: {
    id: "custard",
    name: "Custard",
    keywords: [
      "dessert",
      "food"
    ],
    skins: [
      {
        unified: "1f36e",
        native: "🍮"
      }
    ],
    version: 1
  },
  honey_pot: {
    id: "honey_pot",
    name: "Honey Pot",
    keywords: [
      "bees",
      "sweet",
      "kitchen"
    ],
    skins: [
      {
        unified: "1f36f",
        native: "🍯"
      }
    ],
    version: 1
  },
  baby_bottle: {
    id: "baby_bottle",
    name: "Baby Bottle",
    keywords: [
      "food",
      "container",
      "milk"
    ],
    skins: [
      {
        unified: "1f37c",
        native: "🍼"
      }
    ],
    version: 1
  },
  glass_of_milk: {
    id: "glass_of_milk",
    name: "Glass of Milk",
    keywords: [
      "beverage",
      "drink",
      "cow"
    ],
    skins: [
      {
        unified: "1f95b",
        native: "🥛"
      }
    ],
    version: 3
  },
  coffee: {
    id: "coffee",
    name: "Hot Beverage",
    keywords: [
      "coffee",
      "caffeine",
      "latte",
      "espresso",
      "mug"
    ],
    skins: [
      {
        unified: "2615",
        native: "☕"
      }
    ],
    version: 1
  },
  teapot: {
    id: "teapot",
    name: "Teapot",
    keywords: [
      "drink",
      "hot"
    ],
    skins: [
      {
        unified: "1fad6",
        native: "🫖"
      }
    ],
    version: 13
  },
  tea: {
    id: "tea",
    name: "Teacup Without Handle",
    keywords: [
      "tea",
      "drink",
      "bowl",
      "breakfast",
      "green",
      "british"
    ],
    skins: [
      {
        unified: "1f375",
        native: "🍵"
      }
    ],
    version: 1
  },
  sake: {
    id: "sake",
    name: "Sake",
    keywords: [
      "wine",
      "drink",
      "drunk",
      "beverage",
      "japanese",
      "alcohol",
      "booze"
    ],
    skins: [
      {
        unified: "1f376",
        native: "🍶"
      }
    ],
    version: 1
  },
  champagne: {
    id: "champagne",
    name: "Bottle with Popping Cork",
    keywords: [
      "champagne",
      "drink",
      "wine",
      "celebration"
    ],
    skins: [
      {
        unified: "1f37e",
        native: "🍾"
      }
    ],
    version: 1
  },
  wine_glass: {
    id: "wine_glass",
    name: "Wine Glass",
    keywords: [
      "drink",
      "beverage",
      "drunk",
      "alcohol",
      "booze"
    ],
    skins: [
      {
        unified: "1f377",
        native: "🍷"
      }
    ],
    version: 1
  },
  cocktail: {
    id: "cocktail",
    name: "Cocktail Glass",
    keywords: [
      "drink",
      "drunk",
      "alcohol",
      "beverage",
      "booze",
      "mojito"
    ],
    skins: [
      {
        unified: "1f378",
        native: "🍸"
      }
    ],
    version: 1
  },
  tropical_drink: {
    id: "tropical_drink",
    name: "Tropical Drink",
    keywords: [
      "beverage",
      "cocktail",
      "summer",
      "beach",
      "alcohol",
      "booze",
      "mojito"
    ],
    skins: [
      {
        unified: "1f379",
        native: "🍹"
      }
    ],
    version: 1
  },
  beer: {
    id: "beer",
    name: "Beer Mug",
    keywords: [
      "relax",
      "beverage",
      "drink",
      "drunk",
      "party",
      "pub",
      "summer",
      "alcohol",
      "booze"
    ],
    skins: [
      {
        unified: "1f37a",
        native: "🍺"
      }
    ],
    version: 1
  },
  beers: {
    id: "beers",
    name: "Clinking Beer Mugs",
    keywords: [
      "beers",
      "relax",
      "beverage",
      "drink",
      "drunk",
      "party",
      "pub",
      "summer",
      "alcohol",
      "booze"
    ],
    skins: [
      {
        unified: "1f37b",
        native: "🍻"
      }
    ],
    version: 1
  },
  clinking_glasses: {
    id: "clinking_glasses",
    name: "Clinking Glasses",
    keywords: [
      "beverage",
      "drink",
      "party",
      "alcohol",
      "celebrate",
      "cheers",
      "wine",
      "champagne",
      "toast"
    ],
    skins: [
      {
        unified: "1f942",
        native: "🥂"
      }
    ],
    version: 3
  },
  tumbler_glass: {
    id: "tumbler_glass",
    name: "Tumbler Glass",
    keywords: [
      "drink",
      "beverage",
      "drunk",
      "alcohol",
      "liquor",
      "booze",
      "bourbon",
      "scotch",
      "whisky",
      "shot"
    ],
    skins: [
      {
        unified: "1f943",
        native: "🥃"
      }
    ],
    version: 3
  },
  pouring_liquid: {
    id: "pouring_liquid",
    name: "Pouring Liquid",
    keywords: [
      "cup",
      "water"
    ],
    skins: [
      {
        unified: "1fad7",
        native: "🫗"
      }
    ],
    version: 14
  },
  cup_with_straw: {
    id: "cup_with_straw",
    name: "Cup with Straw",
    keywords: [
      "drink",
      "soda"
    ],
    skins: [
      {
        unified: "1f964",
        native: "🥤"
      }
    ],
    version: 5
  },
  bubble_tea: {
    id: "bubble_tea",
    name: "Bubble Tea",
    keywords: [
      "taiwan",
      "boba",
      "milk",
      "straw"
    ],
    skins: [
      {
        unified: "1f9cb",
        native: "🧋"
      }
    ],
    version: 13
  },
  beverage_box: {
    id: "beverage_box",
    name: "Beverage Box",
    keywords: [
      "drink"
    ],
    skins: [
      {
        unified: "1f9c3",
        native: "🧃"
      }
    ],
    version: 12
  },
  mate_drink: {
    id: "mate_drink",
    name: "Mate",
    keywords: [
      "drink",
      "tea",
      "beverage"
    ],
    skins: [
      {
        unified: "1f9c9",
        native: "🧉"
      }
    ],
    version: 12
  },
  ice_cube: {
    id: "ice_cube",
    name: "Ice",
    keywords: [
      "cube",
      "water",
      "cold"
    ],
    skins: [
      {
        unified: "1f9ca",
        native: "🧊"
      }
    ],
    version: 12
  },
  chopsticks: {
    id: "chopsticks",
    name: "Chopsticks",
    keywords: [
      "food"
    ],
    skins: [
      {
        unified: "1f962",
        native: "🥢"
      }
    ],
    version: 5
  },
  knife_fork_plate: {
    id: "knife_fork_plate",
    name: "Fork and Knife with Plate",
    keywords: [
      "food",
      "eat",
      "meal",
      "lunch",
      "dinner",
      "restaurant"
    ],
    skins: [
      {
        unified: "1f37d-fe0f",
        native: "🍽️"
      }
    ],
    version: 1
  },
  fork_and_knife: {
    id: "fork_and_knife",
    name: "Fork and Knife",
    keywords: [
      "cutlery",
      "kitchen"
    ],
    skins: [
      {
        unified: "1f374",
        native: "🍴"
      }
    ],
    version: 1
  },
  spoon: {
    id: "spoon",
    name: "Spoon",
    keywords: [
      "cutlery",
      "kitchen",
      "tableware"
    ],
    skins: [
      {
        unified: "1f944",
        native: "🥄"
      }
    ],
    version: 3
  },
  hocho: {
    id: "hocho",
    name: "Hocho",
    keywords: [
      "knife",
      "kitchen",
      "blade",
      "cutlery",
      "weapon"
    ],
    skins: [
      {
        unified: "1f52a",
        native: "🔪"
      }
    ],
    version: 1
  },
  jar: {
    id: "jar",
    name: "Jar",
    keywords: [
      "container",
      "sauce"
    ],
    skins: [
      {
        unified: "1fad9",
        native: "🫙"
      }
    ],
    version: 14
  },
  amphora: {
    id: "amphora",
    name: "Amphora",
    keywords: [
      "vase",
      "jar"
    ],
    skins: [
      {
        unified: "1f3fa",
        native: "🏺"
      }
    ],
    version: 1
  },
  earth_africa: {
    id: "earth_africa",
    name: "Earth Globe Europe-Africa",
    keywords: [
      "africa",
      "showing",
      "europe",
      "world",
      "international"
    ],
    skins: [
      {
        unified: "1f30d",
        native: "🌍"
      }
    ],
    version: 1
  },
  earth_americas: {
    id: "earth_americas",
    name: "Earth Globe Americas",
    keywords: [
      "showing",
      "world",
      "USA",
      "international"
    ],
    skins: [
      {
        unified: "1f30e",
        native: "🌎"
      }
    ],
    version: 1
  },
  earth_asia: {
    id: "earth_asia",
    name: "Earth Globe Asia-Australia",
    keywords: [
      "asia",
      "showing",
      "australia",
      "world",
      "east",
      "international"
    ],
    skins: [
      {
        unified: "1f30f",
        native: "🌏"
      }
    ],
    version: 1
  },
  globe_with_meridians: {
    id: "globe_with_meridians",
    name: "Globe with Meridians",
    keywords: [
      "earth",
      "international",
      "world",
      "internet",
      "interweb",
      "i18n"
    ],
    skins: [
      {
        unified: "1f310",
        native: "🌐"
      }
    ],
    version: 1
  },
  world_map: {
    id: "world_map",
    name: "World Map",
    keywords: [
      "location",
      "direction"
    ],
    skins: [
      {
        unified: "1f5fa-fe0f",
        native: "🗺️"
      }
    ],
    version: 1
  },
  japan: {
    id: "japan",
    name: "Map of Japan",
    keywords: [
      "nation",
      "country",
      "japanese",
      "asia"
    ],
    skins: [
      {
        unified: "1f5fe",
        native: "🗾"
      }
    ],
    version: 1
  },
  compass: {
    id: "compass",
    name: "Compass",
    keywords: [
      "magnetic",
      "navigation",
      "orienteering"
    ],
    skins: [
      {
        unified: "1f9ed",
        native: "🧭"
      }
    ],
    version: 11
  },
  snow_capped_mountain: {
    id: "snow_capped_mountain",
    name: "Snow-Capped Mountain",
    keywords: [
      "snow",
      "capped",
      "photo",
      "nature",
      "environment",
      "winter",
      "cold"
    ],
    skins: [
      {
        unified: "1f3d4-fe0f",
        native: "🏔️"
      }
    ],
    version: 1
  },
  mountain: {
    id: "mountain",
    name: "Mountain",
    keywords: [
      "photo",
      "nature",
      "environment"
    ],
    skins: [
      {
        unified: "26f0-fe0f",
        native: "⛰️"
      }
    ],
    version: 1
  },
  volcano: {
    id: "volcano",
    name: "Volcano",
    keywords: [
      "photo",
      "nature",
      "disaster"
    ],
    skins: [
      {
        unified: "1f30b",
        native: "🌋"
      }
    ],
    version: 1
  },
  mount_fuji: {
    id: "mount_fuji",
    name: "Mount Fuji",
    keywords: [
      "photo",
      "mountain",
      "nature",
      "japanese"
    ],
    skins: [
      {
        unified: "1f5fb",
        native: "🗻"
      }
    ],
    version: 1
  },
  camping: {
    id: "camping",
    name: "Camping",
    keywords: [
      "photo",
      "outdoors",
      "tent"
    ],
    skins: [
      {
        unified: "1f3d5-fe0f",
        native: "🏕️"
      }
    ],
    version: 1
  },
  beach_with_umbrella: {
    id: "beach_with_umbrella",
    name: "Beach with Umbrella",
    keywords: [
      "weather",
      "summer",
      "sunny",
      "sand",
      "mojito"
    ],
    skins: [
      {
        unified: "1f3d6-fe0f",
        native: "🏖️"
      }
    ],
    version: 1
  },
  desert: {
    id: "desert",
    name: "Desert",
    keywords: [
      "photo",
      "warm",
      "saharah"
    ],
    skins: [
      {
        unified: "1f3dc-fe0f",
        native: "🏜️"
      }
    ],
    version: 1
  },
  desert_island: {
    id: "desert_island",
    name: "Desert Island",
    keywords: [
      "photo",
      "tropical",
      "mojito"
    ],
    skins: [
      {
        unified: "1f3dd-fe0f",
        native: "🏝️"
      }
    ],
    version: 1
  },
  national_park: {
    id: "national_park",
    name: "National Park",
    keywords: [
      "photo",
      "environment",
      "nature"
    ],
    skins: [
      {
        unified: "1f3de-fe0f",
        native: "🏞️"
      }
    ],
    version: 1
  },
  stadium: {
    id: "stadium",
    name: "Stadium",
    keywords: [
      "photo",
      "place",
      "sports",
      "concert",
      "venue"
    ],
    skins: [
      {
        unified: "1f3df-fe0f",
        native: "🏟️"
      }
    ],
    version: 1
  },
  classical_building: {
    id: "classical_building",
    name: "Classical Building",
    keywords: [
      "art",
      "culture",
      "history"
    ],
    skins: [
      {
        unified: "1f3db-fe0f",
        native: "🏛️"
      }
    ],
    version: 1
  },
  building_construction: {
    id: "building_construction",
    name: "Building Construction",
    keywords: [
      "wip",
      "working",
      "progress"
    ],
    skins: [
      {
        unified: "1f3d7-fe0f",
        native: "🏗️"
      }
    ],
    version: 1
  },
  bricks: {
    id: "bricks",
    name: "Brick",
    keywords: [
      "bricks"
    ],
    skins: [
      {
        unified: "1f9f1",
        native: "🧱"
      }
    ],
    version: 11
  },
  rock: {
    id: "rock",
    name: "Rock",
    keywords: [
      "stone"
    ],
    skins: [
      {
        unified: "1faa8",
        native: "🪨"
      }
    ],
    version: 13
  },
  wood: {
    id: "wood",
    name: "Wood",
    keywords: [
      "nature",
      "timber",
      "trunk"
    ],
    skins: [
      {
        unified: "1fab5",
        native: "🪵"
      }
    ],
    version: 13
  },
  hut: {
    id: "hut",
    name: "Hut",
    keywords: [
      "house",
      "structure"
    ],
    skins: [
      {
        unified: "1f6d6",
        native: "🛖"
      }
    ],
    version: 13
  },
  house_buildings: {
    id: "house_buildings",
    name: "Houses",
    keywords: [
      "house",
      "buildings",
      "photo"
    ],
    skins: [
      {
        unified: "1f3d8-fe0f",
        native: "🏘️"
      }
    ],
    version: 1
  },
  derelict_house_building: {
    id: "derelict_house_building",
    name: "Derelict House",
    keywords: [
      "building",
      "abandon",
      "evict",
      "broken"
    ],
    skins: [
      {
        unified: "1f3da-fe0f",
        native: "🏚️"
      }
    ],
    version: 1
  },
  house: {
    id: "house",
    name: "House",
    keywords: [
      "building",
      "home"
    ],
    skins: [
      {
        unified: "1f3e0",
        native: "🏠"
      }
    ],
    version: 1
  },
  house_with_garden: {
    id: "house_with_garden",
    name: "House with Garden",
    keywords: [
      "home",
      "plant",
      "nature"
    ],
    skins: [
      {
        unified: "1f3e1",
        native: "🏡"
      }
    ],
    version: 1
  },
  office: {
    id: "office",
    name: "Office Building",
    keywords: [
      "bureau",
      "work"
    ],
    skins: [
      {
        unified: "1f3e2",
        native: "🏢"
      }
    ],
    version: 1
  },
  post_office: {
    id: "post_office",
    name: "Japanese Post Office",
    keywords: [
      "building",
      "envelope",
      "communication"
    ],
    skins: [
      {
        unified: "1f3e3",
        native: "🏣"
      }
    ],
    version: 1
  },
  european_post_office: {
    id: "european_post_office",
    name: "Post Office",
    keywords: [
      "european",
      "building",
      "email"
    ],
    skins: [
      {
        unified: "1f3e4",
        native: "🏤"
      }
    ],
    version: 1
  },
  hospital: {
    id: "hospital",
    name: "Hospital",
    keywords: [
      "building",
      "health",
      "surgery",
      "doctor"
    ],
    skins: [
      {
        unified: "1f3e5",
        native: "🏥"
      }
    ],
    version: 1
  },
  bank: {
    id: "bank",
    name: "Bank",
    keywords: [
      "building",
      "money",
      "sales",
      "cash",
      "business",
      "enterprise"
    ],
    skins: [
      {
        unified: "1f3e6",
        native: "🏦"
      }
    ],
    version: 1
  },
  hotel: {
    id: "hotel",
    name: "Hotel",
    keywords: [
      "building",
      "accomodation",
      "checkin"
    ],
    skins: [
      {
        unified: "1f3e8",
        native: "🏨"
      }
    ],
    version: 1
  },
  love_hotel: {
    id: "love_hotel",
    name: "Love Hotel",
    keywords: [
      "like",
      "affection",
      "dating"
    ],
    skins: [
      {
        unified: "1f3e9",
        native: "🏩"
      }
    ],
    version: 1
  },
  convenience_store: {
    id: "convenience_store",
    name: "Convenience Store",
    keywords: [
      "building",
      "shopping",
      "groceries"
    ],
    skins: [
      {
        unified: "1f3ea",
        native: "🏪"
      }
    ],
    version: 1
  },
  school: {
    id: "school",
    name: "School",
    keywords: [
      "building",
      "student",
      "education",
      "learn",
      "teach"
    ],
    skins: [
      {
        unified: "1f3eb",
        native: "🏫"
      }
    ],
    version: 1
  },
  department_store: {
    id: "department_store",
    name: "Department Store",
    keywords: [
      "building",
      "shopping",
      "mall"
    ],
    skins: [
      {
        unified: "1f3ec",
        native: "🏬"
      }
    ],
    version: 1
  },
  factory: {
    id: "factory",
    name: "Factory",
    keywords: [
      "building",
      "industry",
      "pollution",
      "smoke"
    ],
    skins: [
      {
        unified: "1f3ed",
        native: "🏭"
      }
    ],
    version: 1
  },
  japanese_castle: {
    id: "japanese_castle",
    name: "Japanese Castle",
    keywords: [
      "photo",
      "building"
    ],
    skins: [
      {
        unified: "1f3ef",
        native: "🏯"
      }
    ],
    version: 1
  },
  european_castle: {
    id: "european_castle",
    name: "Castle",
    keywords: [
      "european",
      "building",
      "royalty",
      "history"
    ],
    skins: [
      {
        unified: "1f3f0",
        native: "🏰"
      }
    ],
    version: 1
  },
  wedding: {
    id: "wedding",
    name: "Wedding",
    keywords: [
      "love",
      "like",
      "affection",
      "couple",
      "marriage",
      "bride",
      "groom"
    ],
    skins: [
      {
        unified: "1f492",
        native: "💒"
      }
    ],
    version: 1
  },
  tokyo_tower: {
    id: "tokyo_tower",
    name: "Tokyo Tower",
    keywords: [
      "photo",
      "japanese"
    ],
    skins: [
      {
        unified: "1f5fc",
        native: "🗼"
      }
    ],
    version: 1
  },
  statue_of_liberty: {
    id: "statue_of_liberty",
    name: "Statue of Liberty",
    keywords: [
      "american",
      "newyork"
    ],
    skins: [
      {
        unified: "1f5fd",
        native: "🗽"
      }
    ],
    version: 1
  },
  church: {
    id: "church",
    name: "Church",
    keywords: [
      "building",
      "religion",
      "christ"
    ],
    skins: [
      {
        unified: "26ea",
        native: "⛪"
      }
    ],
    version: 1
  },
  mosque: {
    id: "mosque",
    name: "Mosque",
    keywords: [
      "islam",
      "worship",
      "minaret"
    ],
    skins: [
      {
        unified: "1f54c",
        native: "🕌"
      }
    ],
    version: 1
  },
  hindu_temple: {
    id: "hindu_temple",
    name: "Hindu Temple",
    keywords: [
      "religion"
    ],
    skins: [
      {
        unified: "1f6d5",
        native: "🛕"
      }
    ],
    version: 12
  },
  synagogue: {
    id: "synagogue",
    name: "Synagogue",
    keywords: [
      "judaism",
      "worship",
      "temple",
      "jewish"
    ],
    skins: [
      {
        unified: "1f54d",
        native: "🕍"
      }
    ],
    version: 1
  },
  shinto_shrine: {
    id: "shinto_shrine",
    name: "Shinto Shrine",
    keywords: [
      "temple",
      "japan",
      "kyoto"
    ],
    skins: [
      {
        unified: "26e9-fe0f",
        native: "⛩️"
      }
    ],
    version: 1
  },
  kaaba: {
    id: "kaaba",
    name: "Kaaba",
    keywords: [
      "mecca",
      "mosque",
      "islam"
    ],
    skins: [
      {
        unified: "1f54b",
        native: "🕋"
      }
    ],
    version: 1
  },
  fountain: {
    id: "fountain",
    name: "Fountain",
    keywords: [
      "photo",
      "summer",
      "water",
      "fresh"
    ],
    skins: [
      {
        unified: "26f2",
        native: "⛲"
      }
    ],
    version: 1
  },
  tent: {
    id: "tent",
    name: "Tent",
    keywords: [
      "photo",
      "camping",
      "outdoors"
    ],
    skins: [
      {
        unified: "26fa",
        native: "⛺"
      }
    ],
    version: 1
  },
  foggy: {
    id: "foggy",
    name: "Foggy",
    keywords: [
      "photo",
      "mountain"
    ],
    skins: [
      {
        unified: "1f301",
        native: "🌁"
      }
    ],
    version: 1
  },
  night_with_stars: {
    id: "night_with_stars",
    name: "Night with Stars",
    keywords: [
      "evening",
      "city",
      "downtown"
    ],
    skins: [
      {
        unified: "1f303",
        native: "🌃"
      }
    ],
    version: 1
  },
  cityscape: {
    id: "cityscape",
    name: "Cityscape",
    keywords: [
      "photo",
      "night",
      "life",
      "urban"
    ],
    skins: [
      {
        unified: "1f3d9-fe0f",
        native: "🏙️"
      }
    ],
    version: 1
  },
  sunrise_over_mountains: {
    id: "sunrise_over_mountains",
    name: "Sunrise over Mountains",
    keywords: [
      "view",
      "vacation",
      "photo"
    ],
    skins: [
      {
        unified: "1f304",
        native: "🌄"
      }
    ],
    version: 1
  },
  sunrise: {
    id: "sunrise",
    name: "Sunrise",
    keywords: [
      "morning",
      "view",
      "vacation",
      "photo"
    ],
    skins: [
      {
        unified: "1f305",
        native: "🌅"
      }
    ],
    version: 1
  },
  city_sunset: {
    id: "city_sunset",
    name: "Cityscape at Dusk",
    keywords: [
      "city",
      "sunset",
      "photo",
      "evening",
      "sky",
      "buildings"
    ],
    skins: [
      {
        unified: "1f306",
        native: "🌆"
      }
    ],
    version: 1
  },
  city_sunrise: {
    id: "city_sunrise",
    name: "Sunset",
    keywords: [
      "city",
      "sunrise",
      "photo",
      "good",
      "morning",
      "dawn"
    ],
    skins: [
      {
        unified: "1f307",
        native: "🌇"
      }
    ],
    version: 1
  },
  bridge_at_night: {
    id: "bridge_at_night",
    name: "Bridge at Night",
    keywords: [
      "photo",
      "sanfrancisco"
    ],
    skins: [
      {
        unified: "1f309",
        native: "🌉"
      }
    ],
    version: 1
  },
  hotsprings: {
    id: "hotsprings",
    name: "Hot Springs",
    keywords: [
      "hotsprings",
      "bath",
      "warm",
      "relax"
    ],
    skins: [
      {
        unified: "2668-fe0f",
        native: "♨️"
      }
    ],
    version: 1
  },
  carousel_horse: {
    id: "carousel_horse",
    name: "Carousel Horse",
    keywords: [
      "photo",
      "carnival"
    ],
    skins: [
      {
        unified: "1f3a0",
        native: "🎠"
      }
    ],
    version: 1
  },
  playground_slide: {
    id: "playground_slide",
    name: "Playground Slide",
    keywords: [
      "fun",
      "park"
    ],
    skins: [
      {
        unified: "1f6dd",
        native: "🛝"
      }
    ],
    version: 14
  },
  ferris_wheel: {
    id: "ferris_wheel",
    name: "Ferris Wheel",
    keywords: [
      "photo",
      "carnival",
      "londoneye"
    ],
    skins: [
      {
        unified: "1f3a1",
        native: "🎡"
      }
    ],
    version: 1
  },
  roller_coaster: {
    id: "roller_coaster",
    name: "Roller Coaster",
    keywords: [
      "carnival",
      "playground",
      "photo",
      "fun"
    ],
    skins: [
      {
        unified: "1f3a2",
        native: "🎢"
      }
    ],
    version: 1
  },
  barber: {
    id: "barber",
    name: "Barber Pole",
    keywords: [
      "hair",
      "salon",
      "style"
    ],
    skins: [
      {
        unified: "1f488",
        native: "💈"
      }
    ],
    version: 1
  },
  circus_tent: {
    id: "circus_tent",
    name: "Circus Tent",
    keywords: [
      "festival",
      "carnival",
      "party"
    ],
    skins: [
      {
        unified: "1f3aa",
        native: "🎪"
      }
    ],
    version: 1
  },
  steam_locomotive: {
    id: "steam_locomotive",
    name: "Locomotive",
    keywords: [
      "steam",
      "transportation",
      "vehicle",
      "train"
    ],
    skins: [
      {
        unified: "1f682",
        native: "🚂"
      }
    ],
    version: 1
  },
  railway_car: {
    id: "railway_car",
    name: "Railway Car",
    keywords: [
      "transportation",
      "vehicle"
    ],
    skins: [
      {
        unified: "1f683",
        native: "🚃"
      }
    ],
    version: 1
  },
  bullettrain_side: {
    id: "bullettrain_side",
    name: "High-Speed Train",
    keywords: [
      "bullettrain",
      "side",
      "high",
      "speed",
      "transportation",
      "vehicle"
    ],
    skins: [
      {
        unified: "1f684",
        native: "🚄"
      }
    ],
    version: 1
  },
  bullettrain_front: {
    id: "bullettrain_front",
    name: "Bullet Train",
    keywords: [
      "bullettrain",
      "front",
      "transportation",
      "vehicle",
      "speed",
      "fast",
      "public",
      "travel"
    ],
    skins: [
      {
        unified: "1f685",
        native: "🚅"
      }
    ],
    version: 1
  },
  train2: {
    id: "train2",
    name: "Train",
    keywords: [
      "train2",
      "transportation",
      "vehicle"
    ],
    skins: [
      {
        unified: "1f686",
        native: "🚆"
      }
    ],
    version: 1
  },
  metro: {
    id: "metro",
    name: "Metro",
    keywords: [
      "transportation",
      "blue",
      "square",
      "mrt",
      "underground",
      "tube"
    ],
    skins: [
      {
        unified: "1f687",
        native: "🚇"
      }
    ],
    version: 1
  },
  light_rail: {
    id: "light_rail",
    name: "Light Rail",
    keywords: [
      "transportation",
      "vehicle"
    ],
    skins: [
      {
        unified: "1f688",
        native: "🚈"
      }
    ],
    version: 1
  },
  station: {
    id: "station",
    name: "Station",
    keywords: [
      "transportation",
      "vehicle",
      "public"
    ],
    skins: [
      {
        unified: "1f689",
        native: "🚉"
      }
    ],
    version: 1
  },
  tram: {
    id: "tram",
    name: "Tram",
    keywords: [
      "transportation",
      "vehicle"
    ],
    skins: [
      {
        unified: "1f68a",
        native: "🚊"
      }
    ],
    version: 1
  },
  monorail: {
    id: "monorail",
    name: "Monorail",
    keywords: [
      "transportation",
      "vehicle"
    ],
    skins: [
      {
        unified: "1f69d",
        native: "🚝"
      }
    ],
    version: 1
  },
  mountain_railway: {
    id: "mountain_railway",
    name: "Mountain Railway",
    keywords: [
      "transportation",
      "vehicle"
    ],
    skins: [
      {
        unified: "1f69e",
        native: "🚞"
      }
    ],
    version: 1
  },
  train: {
    id: "train",
    name: "Tram Car",
    keywords: [
      "train",
      "transportation",
      "vehicle",
      "carriage",
      "public",
      "travel"
    ],
    skins: [
      {
        unified: "1f68b",
        native: "🚋"
      }
    ],
    version: 1
  },
  bus: {
    id: "bus",
    name: "Bus",
    keywords: [
      "car",
      "vehicle",
      "transportation"
    ],
    skins: [
      {
        unified: "1f68c",
        native: "🚌"
      }
    ],
    version: 1
  },
  oncoming_bus: {
    id: "oncoming_bus",
    name: "Oncoming Bus",
    keywords: [
      "vehicle",
      "transportation"
    ],
    skins: [
      {
        unified: "1f68d",
        native: "🚍"
      }
    ],
    version: 1
  },
  trolleybus: {
    id: "trolleybus",
    name: "Trolleybus",
    keywords: [
      "bart",
      "transportation",
      "vehicle"
    ],
    skins: [
      {
        unified: "1f68e",
        native: "🚎"
      }
    ],
    version: 1
  },
  minibus: {
    id: "minibus",
    name: "Minibus",
    keywords: [
      "vehicle",
      "car",
      "transportation"
    ],
    skins: [
      {
        unified: "1f690",
        native: "🚐"
      }
    ],
    version: 1
  },
  ambulance: {
    id: "ambulance",
    name: "Ambulance",
    keywords: [
      "health",
      "911",
      "hospital"
    ],
    skins: [
      {
        unified: "1f691",
        native: "🚑"
      }
    ],
    version: 1
  },
  fire_engine: {
    id: "fire_engine",
    name: "Fire Engine",
    keywords: [
      "transportation",
      "cars",
      "vehicle"
    ],
    skins: [
      {
        unified: "1f692",
        native: "🚒"
      }
    ],
    version: 1
  },
  police_car: {
    id: "police_car",
    name: "Police Car",
    keywords: [
      "vehicle",
      "cars",
      "transportation",
      "law",
      "legal",
      "enforcement"
    ],
    skins: [
      {
        unified: "1f693",
        native: "🚓"
      }
    ],
    version: 1
  },
  oncoming_police_car: {
    id: "oncoming_police_car",
    name: "Oncoming Police Car",
    keywords: [
      "vehicle",
      "law",
      "legal",
      "enforcement",
      "911"
    ],
    skins: [
      {
        unified: "1f694",
        native: "🚔"
      }
    ],
    version: 1
  },
  taxi: {
    id: "taxi",
    name: "Taxi",
    keywords: [
      "uber",
      "vehicle",
      "cars",
      "transportation"
    ],
    skins: [
      {
        unified: "1f695",
        native: "🚕"
      }
    ],
    version: 1
  },
  oncoming_taxi: {
    id: "oncoming_taxi",
    name: "Oncoming Taxi",
    keywords: [
      "vehicle",
      "cars",
      "uber"
    ],
    skins: [
      {
        unified: "1f696",
        native: "🚖"
      }
    ],
    version: 1
  },
  car: {
    id: "car",
    name: "Automobile",
    keywords: [
      "car",
      "red",
      "transportation",
      "vehicle"
    ],
    skins: [
      {
        unified: "1f697",
        native: "🚗"
      }
    ],
    version: 1
  },
  oncoming_automobile: {
    id: "oncoming_automobile",
    name: "Oncoming Automobile",
    keywords: [
      "car",
      "vehicle",
      "transportation"
    ],
    skins: [
      {
        unified: "1f698",
        native: "🚘"
      }
    ],
    version: 1
  },
  blue_car: {
    id: "blue_car",
    name: "Recreational Vehicle",
    keywords: [
      "blue",
      "car",
      "sport",
      "utility",
      "transportation"
    ],
    skins: [
      {
        unified: "1f699",
        native: "🚙"
      }
    ],
    version: 1
  },
  pickup_truck: {
    id: "pickup_truck",
    name: "Pickup Truck",
    keywords: [
      "car",
      "transportation"
    ],
    skins: [
      {
        unified: "1f6fb",
        native: "🛻"
      }
    ],
    version: 13
  },
  truck: {
    id: "truck",
    name: "Delivery Truck",
    keywords: [
      "cars",
      "transportation"
    ],
    skins: [
      {
        unified: "1f69a",
        native: "🚚"
      }
    ],
    version: 1
  },
  articulated_lorry: {
    id: "articulated_lorry",
    name: "Articulated Lorry",
    keywords: [
      "vehicle",
      "cars",
      "transportation",
      "express"
    ],
    skins: [
      {
        unified: "1f69b",
        native: "🚛"
      }
    ],
    version: 1
  },
  tractor: {
    id: "tractor",
    name: "Tractor",
    keywords: [
      "vehicle",
      "car",
      "farming",
      "agriculture"
    ],
    skins: [
      {
        unified: "1f69c",
        native: "🚜"
      }
    ],
    version: 1
  },
  racing_car: {
    id: "racing_car",
    name: "Racing Car",
    keywords: [
      "sports",
      "race",
      "fast",
      "formula",
      "f1"
    ],
    skins: [
      {
        unified: "1f3ce-fe0f",
        native: "🏎️"
      }
    ],
    version: 1
  },
  racing_motorcycle: {
    id: "racing_motorcycle",
    name: "Motorcycle",
    keywords: [
      "racing",
      "race",
      "sports",
      "fast"
    ],
    skins: [
      {
        unified: "1f3cd-fe0f",
        native: "🏍️"
      }
    ],
    version: 1
  },
  motor_scooter: {
    id: "motor_scooter",
    name: "Motor Scooter",
    keywords: [
      "vehicle",
      "vespa",
      "sasha"
    ],
    skins: [
      {
        unified: "1f6f5",
        native: "🛵"
      }
    ],
    version: 3
  },
  manual_wheelchair: {
    id: "manual_wheelchair",
    name: "Manual Wheelchair",
    keywords: [
      "accessibility"
    ],
    skins: [
      {
        unified: "1f9bd",
        native: "🦽"
      }
    ],
    version: 12
  },
  motorized_wheelchair: {
    id: "motorized_wheelchair",
    name: "Motorized Wheelchair",
    keywords: [
      "accessibility"
    ],
    skins: [
      {
        unified: "1f9bc",
        native: "🦼"
      }
    ],
    version: 12
  },
  auto_rickshaw: {
    id: "auto_rickshaw",
    name: "Auto Rickshaw",
    keywords: [
      "move",
      "transportation"
    ],
    skins: [
      {
        unified: "1f6fa",
        native: "🛺"
      }
    ],
    version: 12
  },
  bike: {
    id: "bike",
    name: "Bicycle",
    keywords: [
      "bike",
      "sports",
      "exercise",
      "hipster"
    ],
    skins: [
      {
        unified: "1f6b2",
        native: "🚲"
      }
    ],
    version: 1
  },
  scooter: {
    id: "scooter",
    name: "Scooter",
    keywords: [
      "kick",
      "vehicle",
      "razor"
    ],
    skins: [
      {
        unified: "1f6f4",
        native: "🛴"
      }
    ],
    version: 3
  },
  skateboard: {
    id: "skateboard",
    name: "Skateboard",
    keywords: [
      "board"
    ],
    skins: [
      {
        unified: "1f6f9",
        native: "🛹"
      }
    ],
    version: 11
  },
  roller_skate: {
    id: "roller_skate",
    name: "Roller Skate",
    keywords: [
      "footwear",
      "sports"
    ],
    skins: [
      {
        unified: "1f6fc",
        native: "🛼"
      }
    ],
    version: 13
  },
  busstop: {
    id: "busstop",
    name: "Bus Stop",
    keywords: [
      "busstop",
      "transportation",
      "wait"
    ],
    skins: [
      {
        unified: "1f68f",
        native: "🚏"
      }
    ],
    version: 1
  },
  motorway: {
    id: "motorway",
    name: "Motorway",
    keywords: [
      "road",
      "cupertino",
      "interstate",
      "highway"
    ],
    skins: [
      {
        unified: "1f6e3-fe0f",
        native: "🛣️"
      }
    ],
    version: 1
  },
  railway_track: {
    id: "railway_track",
    name: "Railway Track",
    keywords: [
      "train",
      "transportation"
    ],
    skins: [
      {
        unified: "1f6e4-fe0f",
        native: "🛤️"
      }
    ],
    version: 1
  },
  oil_drum: {
    id: "oil_drum",
    name: "Oil Drum",
    keywords: [
      "barrell"
    ],
    skins: [
      {
        unified: "1f6e2-fe0f",
        native: "🛢️"
      }
    ],
    version: 1
  },
  fuelpump: {
    id: "fuelpump",
    name: "Fuel Pump",
    keywords: [
      "fuelpump",
      "gas",
      "station",
      "petroleum"
    ],
    skins: [
      {
        unified: "26fd",
        native: "⛽"
      }
    ],
    version: 1
  },
  wheel: {
    id: "wheel",
    name: "Wheel",
    keywords: [
      "car",
      "transport"
    ],
    skins: [
      {
        unified: "1f6de",
        native: "🛞"
      }
    ],
    version: 14
  },
  rotating_light: {
    id: "rotating_light",
    name: "Police Car Light",
    keywords: [
      "rotating",
      "ambulance",
      "911",
      "emergency",
      "alert",
      "error",
      "pinged",
      "law",
      "legal"
    ],
    skins: [
      {
        unified: "1f6a8",
        native: "🚨"
      }
    ],
    version: 1
  },
  traffic_light: {
    id: "traffic_light",
    name: "Horizontal Traffic Light",
    keywords: [
      "transportation",
      "signal"
    ],
    skins: [
      {
        unified: "1f6a5",
        native: "🚥"
      }
    ],
    version: 1
  },
  vertical_traffic_light: {
    id: "vertical_traffic_light",
    name: "Vertical Traffic Light",
    keywords: [
      "transportation",
      "driving"
    ],
    skins: [
      {
        unified: "1f6a6",
        native: "🚦"
      }
    ],
    version: 1
  },
  octagonal_sign: {
    id: "octagonal_sign",
    name: "Stop Sign",
    keywords: [
      "octagonal"
    ],
    skins: [
      {
        unified: "1f6d1",
        native: "🛑"
      }
    ],
    version: 3
  },
  construction: {
    id: "construction",
    name: "Construction",
    keywords: [
      "wip",
      "progress",
      "caution",
      "warning"
    ],
    skins: [
      {
        unified: "1f6a7",
        native: "🚧"
      }
    ],
    version: 1
  },
  anchor: {
    id: "anchor",
    name: "Anchor",
    keywords: [
      "ship",
      "ferry",
      "sea",
      "boat"
    ],
    skins: [
      {
        unified: "2693",
        native: "⚓"
      }
    ],
    version: 1
  },
  ring_buoy: {
    id: "ring_buoy",
    name: "Ring Buoy",
    keywords: [
      "life",
      "saver",
      "preserver"
    ],
    skins: [
      {
        unified: "1f6df",
        native: "🛟"
      }
    ],
    version: 14
  },
  boat: {
    id: "boat",
    name: "Sailboat",
    keywords: [
      "boat",
      "ship",
      "summer",
      "transportation",
      "water",
      "sailing"
    ],
    skins: [
      {
        unified: "26f5",
        native: "⛵"
      }
    ],
    version: 1
  },
  canoe: {
    id: "canoe",
    name: "Canoe",
    keywords: [
      "boat",
      "paddle",
      "water",
      "ship"
    ],
    skins: [
      {
        unified: "1f6f6",
        native: "🛶"
      }
    ],
    version: 3
  },
  speedboat: {
    id: "speedboat",
    name: "Speedboat",
    keywords: [
      "ship",
      "transportation",
      "vehicle",
      "summer"
    ],
    skins: [
      {
        unified: "1f6a4",
        native: "🚤"
      }
    ],
    version: 1
  },
  passenger_ship: {
    id: "passenger_ship",
    name: "Passenger Ship",
    keywords: [
      "yacht",
      "cruise",
      "ferry"
    ],
    skins: [
      {
        unified: "1f6f3-fe0f",
        native: "🛳️"
      }
    ],
    version: 1
  },
  ferry: {
    id: "ferry",
    name: "Ferry",
    keywords: [
      "boat",
      "ship",
      "yacht"
    ],
    skins: [
      {
        unified: "26f4-fe0f",
        native: "⛴️"
      }
    ],
    version: 1
  },
  motor_boat: {
    id: "motor_boat",
    name: "Motor Boat",
    keywords: [
      "ship"
    ],
    skins: [
      {
        unified: "1f6e5-fe0f",
        native: "🛥️"
      }
    ],
    version: 1
  },
  ship: {
    id: "ship",
    name: "Ship",
    keywords: [
      "transportation",
      "titanic",
      "deploy"
    ],
    skins: [
      {
        unified: "1f6a2",
        native: "🚢"
      }
    ],
    version: 1
  },
  airplane: {
    id: "airplane",
    name: "Airplane",
    keywords: [
      "vehicle",
      "transportation",
      "flight",
      "fly"
    ],
    skins: [
      {
        unified: "2708-fe0f",
        native: "✈️"
      }
    ],
    version: 1
  },
  small_airplane: {
    id: "small_airplane",
    name: "Small Airplane",
    keywords: [
      "flight",
      "transportation",
      "fly",
      "vehicle"
    ],
    skins: [
      {
        unified: "1f6e9-fe0f",
        native: "🛩️"
      }
    ],
    version: 1
  },
  airplane_departure: {
    id: "airplane_departure",
    name: "Airplane Departure",
    keywords: [
      "airport",
      "flight",
      "landing"
    ],
    skins: [
      {
        unified: "1f6eb",
        native: "🛫"
      }
    ],
    version: 1
  },
  airplane_arriving: {
    id: "airplane_arriving",
    name: "Airplane Arrival",
    keywords: [
      "arriving",
      "airport",
      "flight",
      "boarding"
    ],
    skins: [
      {
        unified: "1f6ec",
        native: "🛬"
      }
    ],
    version: 1
  },
  parachute: {
    id: "parachute",
    name: "Parachute",
    keywords: [
      "fly",
      "glide"
    ],
    skins: [
      {
        unified: "1fa82",
        native: "🪂"
      }
    ],
    version: 12
  },
  seat: {
    id: "seat",
    name: "Seat",
    keywords: [
      "sit",
      "airplane",
      "transport",
      "bus",
      "flight",
      "fly"
    ],
    skins: [
      {
        unified: "1f4ba",
        native: "💺"
      }
    ],
    version: 1
  },
  helicopter: {
    id: "helicopter",
    name: "Helicopter",
    keywords: [
      "transportation",
      "vehicle",
      "fly"
    ],
    skins: [
      {
        unified: "1f681",
        native: "🚁"
      }
    ],
    version: 1
  },
  suspension_railway: {
    id: "suspension_railway",
    name: "Suspension Railway",
    keywords: [
      "vehicle",
      "transportation"
    ],
    skins: [
      {
        unified: "1f69f",
        native: "🚟"
      }
    ],
    version: 1
  },
  mountain_cableway: {
    id: "mountain_cableway",
    name: "Mountain Cableway",
    keywords: [
      "transportation",
      "vehicle",
      "ski"
    ],
    skins: [
      {
        unified: "1f6a0",
        native: "🚠"
      }
    ],
    version: 1
  },
  aerial_tramway: {
    id: "aerial_tramway",
    name: "Aerial Tramway",
    keywords: [
      "transportation",
      "vehicle",
      "ski"
    ],
    skins: [
      {
        unified: "1f6a1",
        native: "🚡"
      }
    ],
    version: 1
  },
  satellite: {
    id: "satellite",
    name: "Satellite",
    keywords: [
      "communication",
      "gps",
      "orbit",
      "spaceflight",
      "NASA",
      "ISS"
    ],
    skins: [
      {
        unified: "1f6f0-fe0f",
        native: "🛰️"
      }
    ],
    version: 1
  },
  rocket: {
    id: "rocket",
    name: "Rocket",
    keywords: [
      "launch",
      "ship",
      "staffmode",
      "NASA",
      "outer",
      "space",
      "fly"
    ],
    skins: [
      {
        unified: "1f680",
        native: "🚀"
      }
    ],
    version: 1
  },
  flying_saucer: {
    id: "flying_saucer",
    name: "Flying Saucer",
    keywords: [
      "transportation",
      "vehicle",
      "ufo"
    ],
    skins: [
      {
        unified: "1f6f8",
        native: "🛸"
      }
    ],
    version: 5
  },
  bellhop_bell: {
    id: "bellhop_bell",
    name: "Bellhop Bell",
    keywords: [
      "service"
    ],
    skins: [
      {
        unified: "1f6ce-fe0f",
        native: "🛎️"
      }
    ],
    version: 1
  },
  luggage: {
    id: "luggage",
    name: "Luggage",
    keywords: [
      "packing",
      "travel"
    ],
    skins: [
      {
        unified: "1f9f3",
        native: "🧳"
      }
    ],
    version: 11
  },
  hourglass: {
    id: "hourglass",
    name: "Hourglass",
    keywords: [
      "done",
      "time",
      "clock",
      "oldschool",
      "limit",
      "exam",
      "quiz",
      "test"
    ],
    skins: [
      {
        unified: "231b",
        native: "⌛"
      }
    ],
    version: 1
  },
  hourglass_flowing_sand: {
    id: "hourglass_flowing_sand",
    name: "Hourglass Not Done",
    keywords: [
      "flowing",
      "sand",
      "oldschool",
      "time",
      "countdown"
    ],
    skins: [
      {
        unified: "23f3",
        native: "⏳"
      }
    ],
    version: 1
  },
  watch: {
    id: "watch",
    name: "Watch",
    keywords: [
      "time",
      "accessories"
    ],
    skins: [
      {
        unified: "231a",
        native: "⌚"
      }
    ],
    version: 1
  },
  alarm_clock: {
    id: "alarm_clock",
    name: "Alarm Clock",
    keywords: [
      "time",
      "wake"
    ],
    skins: [
      {
        unified: "23f0",
        native: "⏰"
      }
    ],
    version: 1
  },
  stopwatch: {
    id: "stopwatch",
    name: "Stopwatch",
    keywords: [
      "time",
      "deadline"
    ],
    skins: [
      {
        unified: "23f1-fe0f",
        native: "⏱️"
      }
    ],
    version: 1
  },
  timer_clock: {
    id: "timer_clock",
    name: "Timer Clock",
    keywords: [
      "alarm"
    ],
    skins: [
      {
        unified: "23f2-fe0f",
        native: "⏲️"
      }
    ],
    version: 1
  },
  mantelpiece_clock: {
    id: "mantelpiece_clock",
    name: "Mantelpiece Clock",
    keywords: [
      "time"
    ],
    skins: [
      {
        unified: "1f570-fe0f",
        native: "🕰️"
      }
    ],
    version: 1
  },
  clock12: {
    id: "clock12",
    name: "Twelve O’clock",
    keywords: [
      "clock12",
      "o",
      "clock",
      "12",
      "00:00",
      "0000",
      "12:00",
      "1200",
      "time",
      "noon",
      "midnight",
      "midday",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f55b",
        native: "🕛"
      }
    ],
    version: 1
  },
  clock1230: {
    id: "clock1230",
    name: "Twelve-Thirty",
    keywords: [
      "clock1230",
      "twelve",
      "thirty",
      "00:30",
      "0030",
      "12:30",
      "1230",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f567",
        native: "🕧"
      }
    ],
    version: 1
  },
  clock1: {
    id: "clock1",
    name: "One O’clock",
    keywords: [
      "clock1",
      "o",
      "clock",
      "1",
      "1:00",
      "100",
      "13:00",
      "1300",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f550",
        native: "🕐"
      }
    ],
    version: 1
  },
  clock130: {
    id: "clock130",
    name: "One-Thirty",
    keywords: [
      "clock130",
      "one",
      "thirty",
      "1:30",
      "130",
      "13:30",
      "1330",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f55c",
        native: "🕜"
      }
    ],
    version: 1
  },
  clock2: {
    id: "clock2",
    name: "Two O’clock",
    keywords: [
      "clock2",
      "o",
      "clock",
      "2",
      "2:00",
      "200",
      "14:00",
      "1400",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f551",
        native: "🕑"
      }
    ],
    version: 1
  },
  clock230: {
    id: "clock230",
    name: "Two-Thirty",
    keywords: [
      "clock230",
      "two",
      "thirty",
      "2:30",
      "230",
      "14:30",
      "1430",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f55d",
        native: "🕝"
      }
    ],
    version: 1
  },
  clock3: {
    id: "clock3",
    name: "Three O’clock",
    keywords: [
      "clock3",
      "o",
      "clock",
      "3",
      "3:00",
      "300",
      "15:00",
      "1500",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f552",
        native: "🕒"
      }
    ],
    version: 1
  },
  clock330: {
    id: "clock330",
    name: "Three-Thirty",
    keywords: [
      "clock330",
      "three",
      "thirty",
      "3:30",
      "330",
      "15:30",
      "1530",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f55e",
        native: "🕞"
      }
    ],
    version: 1
  },
  clock4: {
    id: "clock4",
    name: "Four O’clock",
    keywords: [
      "clock4",
      "o",
      "clock",
      "4",
      "4:00",
      "400",
      "16:00",
      "1600",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f553",
        native: "🕓"
      }
    ],
    version: 1
  },
  clock430: {
    id: "clock430",
    name: "Four-Thirty",
    keywords: [
      "clock430",
      "four",
      "thirty",
      "4:30",
      "430",
      "16:30",
      "1630",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f55f",
        native: "🕟"
      }
    ],
    version: 1
  },
  clock5: {
    id: "clock5",
    name: "Five O’clock",
    keywords: [
      "clock5",
      "o",
      "clock",
      "5",
      "5:00",
      "500",
      "17:00",
      "1700",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f554",
        native: "🕔"
      }
    ],
    version: 1
  },
  clock530: {
    id: "clock530",
    name: "Five-Thirty",
    keywords: [
      "clock530",
      "five",
      "thirty",
      "5:30",
      "530",
      "17:30",
      "1730",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f560",
        native: "🕠"
      }
    ],
    version: 1
  },
  clock6: {
    id: "clock6",
    name: "Six O’clock",
    keywords: [
      "clock6",
      "o",
      "clock",
      "6",
      "6:00",
      "600",
      "18:00",
      "1800",
      "time",
      "late",
      "early",
      "schedule",
      "dawn",
      "dusk"
    ],
    skins: [
      {
        unified: "1f555",
        native: "🕕"
      }
    ],
    version: 1
  },
  clock630: {
    id: "clock630",
    name: "Six-Thirty",
    keywords: [
      "clock630",
      "six",
      "thirty",
      "6:30",
      "630",
      "18:30",
      "1830",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f561",
        native: "🕡"
      }
    ],
    version: 1
  },
  clock7: {
    id: "clock7",
    name: "Seven O’clock",
    keywords: [
      "clock7",
      "o",
      "clock",
      "7",
      "7:00",
      "700",
      "19:00",
      "1900",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f556",
        native: "🕖"
      }
    ],
    version: 1
  },
  clock730: {
    id: "clock730",
    name: "Seven-Thirty",
    keywords: [
      "clock730",
      "seven",
      "thirty",
      "7:30",
      "730",
      "19:30",
      "1930",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f562",
        native: "🕢"
      }
    ],
    version: 1
  },
  clock8: {
    id: "clock8",
    name: "Eight O’clock",
    keywords: [
      "clock8",
      "o",
      "clock",
      "8",
      "8:00",
      "800",
      "20:00",
      "2000",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f557",
        native: "🕗"
      }
    ],
    version: 1
  },
  clock830: {
    id: "clock830",
    name: "Eight-Thirty",
    keywords: [
      "clock830",
      "eight",
      "thirty",
      "8:30",
      "830",
      "20:30",
      "2030",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f563",
        native: "🕣"
      }
    ],
    version: 1
  },
  clock9: {
    id: "clock9",
    name: "Nine O’clock",
    keywords: [
      "clock9",
      "o",
      "clock",
      "9",
      "9:00",
      "900",
      "21:00",
      "2100",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f558",
        native: "🕘"
      }
    ],
    version: 1
  },
  clock930: {
    id: "clock930",
    name: "Nine-Thirty",
    keywords: [
      "clock930",
      "nine",
      "thirty",
      "9:30",
      "930",
      "21:30",
      "2130",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f564",
        native: "🕤"
      }
    ],
    version: 1
  },
  clock10: {
    id: "clock10",
    name: "Ten O’clock",
    keywords: [
      "clock10",
      "o",
      "clock",
      "10",
      "10:00",
      "1000",
      "22:00",
      "2200",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f559",
        native: "🕙"
      }
    ],
    version: 1
  },
  clock1030: {
    id: "clock1030",
    name: "Ten-Thirty",
    keywords: [
      "clock1030",
      "ten",
      "thirty",
      "10:30",
      "1030",
      "22:30",
      "2230",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f565",
        native: "🕥"
      }
    ],
    version: 1
  },
  clock11: {
    id: "clock11",
    name: "Eleven O’clock",
    keywords: [
      "clock11",
      "o",
      "clock",
      "11",
      "11:00",
      "1100",
      "23:00",
      "2300",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f55a",
        native: "🕚"
      }
    ],
    version: 1
  },
  clock1130: {
    id: "clock1130",
    name: "Eleven-Thirty",
    keywords: [
      "clock1130",
      "eleven",
      "thirty",
      "11:30",
      "1130",
      "23:30",
      "2330",
      "time",
      "late",
      "early",
      "schedule"
    ],
    skins: [
      {
        unified: "1f566",
        native: "🕦"
      }
    ],
    version: 1
  },
  new_moon: {
    id: "new_moon",
    name: "New Moon",
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    skins: [
      {
        unified: "1f311",
        native: "🌑"
      }
    ],
    version: 1
  },
  waxing_crescent_moon: {
    id: "waxing_crescent_moon",
    name: "Waxing Crescent Moon",
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    skins: [
      {
        unified: "1f312",
        native: "🌒"
      }
    ],
    version: 1
  },
  first_quarter_moon: {
    id: "first_quarter_moon",
    name: "First Quarter Moon",
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    skins: [
      {
        unified: "1f313",
        native: "🌓"
      }
    ],
    version: 1
  },
  moon: {
    id: "moon",
    name: "Waxing Gibbous Moon",
    keywords: [
      "nature",
      "night",
      "sky",
      "gray",
      "twilight",
      "planet",
      "space",
      "evening",
      "sleep"
    ],
    skins: [
      {
        unified: "1f314",
        native: "🌔"
      }
    ],
    version: 1
  },
  full_moon: {
    id: "full_moon",
    name: "Full Moon",
    keywords: [
      "nature",
      "yellow",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    skins: [
      {
        unified: "1f315",
        native: "🌕"
      }
    ],
    version: 1
  },
  waning_gibbous_moon: {
    id: "waning_gibbous_moon",
    name: "Waning Gibbous Moon",
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
      "waxing"
    ],
    skins: [
      {
        unified: "1f316",
        native: "🌖"
      }
    ],
    version: 1
  },
  last_quarter_moon: {
    id: "last_quarter_moon",
    name: "Last Quarter Moon",
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    skins: [
      {
        unified: "1f317",
        native: "🌗"
      }
    ],
    version: 1
  },
  waning_crescent_moon: {
    id: "waning_crescent_moon",
    name: "Waning Crescent Moon",
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    skins: [
      {
        unified: "1f318",
        native: "🌘"
      }
    ],
    version: 1
  },
  crescent_moon: {
    id: "crescent_moon",
    name: "Crescent Moon",
    keywords: [
      "night",
      "sleep",
      "sky",
      "evening",
      "magic"
    ],
    skins: [
      {
        unified: "1f319",
        native: "🌙"
      }
    ],
    version: 1
  },
  new_moon_with_face: {
    id: "new_moon_with_face",
    name: "New Moon Face",
    keywords: [
      "with",
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    skins: [
      {
        unified: "1f31a",
        native: "🌚"
      }
    ],
    version: 1
  },
  first_quarter_moon_with_face: {
    id: "first_quarter_moon_with_face",
    name: "First Quarter Moon Face",
    keywords: [
      "with",
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    skins: [
      {
        unified: "1f31b",
        native: "🌛"
      }
    ],
    version: 1
  },
  last_quarter_moon_with_face: {
    id: "last_quarter_moon_with_face",
    name: "Last Quarter Moon Face",
    keywords: [
      "with",
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    skins: [
      {
        unified: "1f31c",
        native: "🌜"
      }
    ],
    version: 1
  },
  thermometer: {
    id: "thermometer",
    name: "Thermometer",
    keywords: [
      "weather",
      "temperature",
      "hot",
      "cold"
    ],
    skins: [
      {
        unified: "1f321-fe0f",
        native: "🌡️"
      }
    ],
    version: 1
  },
  sunny: {
    id: "sunny",
    name: "Sun",
    keywords: [
      "sunny",
      "weather",
      "nature",
      "brightness",
      "summer",
      "beach",
      "spring"
    ],
    skins: [
      {
        unified: "2600-fe0f",
        native: "☀️"
      }
    ],
    version: 1
  },
  full_moon_with_face: {
    id: "full_moon_with_face",
    name: "Full Moon Face",
    keywords: [
      "with",
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    skins: [
      {
        unified: "1f31d",
        native: "🌝"
      }
    ],
    version: 1
  },
  sun_with_face: {
    id: "sun_with_face",
    name: "Sun with Face",
    keywords: [
      "nature",
      "morning",
      "sky"
    ],
    skins: [
      {
        unified: "1f31e",
        native: "🌞"
      }
    ],
    version: 1
  },
  ringed_planet: {
    id: "ringed_planet",
    name: "Ringed Planet",
    keywords: [
      "outerspace"
    ],
    skins: [
      {
        unified: "1fa90",
        native: "🪐"
      }
    ],
    version: 12
  },
  star: {
    id: "star",
    name: "Star",
    keywords: [
      "night",
      "yellow"
    ],
    skins: [
      {
        unified: "2b50",
        native: "⭐"
      }
    ],
    version: 1
  },
  star2: {
    id: "star2",
    name: "Glowing Star",
    keywords: [
      "star2",
      "night",
      "sparkle",
      "awesome",
      "good",
      "magic"
    ],
    skins: [
      {
        unified: "1f31f",
        native: "🌟"
      }
    ],
    version: 1
  },
  stars: {
    id: "stars",
    name: "Shooting Star",
    keywords: [
      "stars",
      "night",
      "photo"
    ],
    skins: [
      {
        unified: "1f320",
        native: "🌠"
      }
    ],
    version: 1
  },
  milky_way: {
    id: "milky_way",
    name: "Milky Way",
    keywords: [
      "photo",
      "space",
      "stars"
    ],
    skins: [
      {
        unified: "1f30c",
        native: "🌌"
      }
    ],
    version: 1
  },
  cloud: {
    id: "cloud",
    name: "Cloud",
    keywords: [
      "weather",
      "sky"
    ],
    skins: [
      {
        unified: "2601-fe0f",
        native: "☁️"
      }
    ],
    version: 1
  },
  partly_sunny: {
    id: "partly_sunny",
    name: "Sun Behind Cloud",
    keywords: [
      "partly",
      "sunny",
      "weather",
      "nature",
      "cloudy",
      "morning",
      "fall",
      "spring"
    ],
    skins: [
      {
        unified: "26c5",
        native: "⛅"
      }
    ],
    version: 1
  },
  thunder_cloud_and_rain: {
    id: "thunder_cloud_and_rain",
    name: "Cloud with Lightning and Rain",
    keywords: [
      "thunder",
      "weather"
    ],
    skins: [
      {
        unified: "26c8-fe0f",
        native: "⛈️"
      }
    ],
    version: 1
  },
  mostly_sunny: {
    id: "mostly_sunny",
    name: "Sun Behind Small Cloud",
    keywords: [
      "mostly",
      "sunny",
      "weather"
    ],
    skins: [
      {
        unified: "1f324-fe0f",
        native: "🌤️"
      }
    ],
    version: 1
  },
  barely_sunny: {
    id: "barely_sunny",
    name: "Sun Behind Large Cloud",
    keywords: [
      "barely",
      "sunny",
      "weather"
    ],
    skins: [
      {
        unified: "1f325-fe0f",
        native: "🌥️"
      }
    ],
    version: 1
  },
  partly_sunny_rain: {
    id: "partly_sunny_rain",
    name: "Sun Behind Rain Cloud",
    keywords: [
      "partly",
      "sunny",
      "weather"
    ],
    skins: [
      {
        unified: "1f326-fe0f",
        native: "🌦️"
      }
    ],
    version: 1
  },
  rain_cloud: {
    id: "rain_cloud",
    name: "Cloud with Rain",
    keywords: [
      "weather"
    ],
    skins: [
      {
        unified: "1f327-fe0f",
        native: "🌧️"
      }
    ],
    version: 1
  },
  snow_cloud: {
    id: "snow_cloud",
    name: "Cloud with Snow",
    keywords: [
      "weather"
    ],
    skins: [
      {
        unified: "1f328-fe0f",
        native: "🌨️"
      }
    ],
    version: 1
  },
  lightning: {
    id: "lightning",
    name: "Cloud with Lightning",
    keywords: [
      "weather",
      "thunder"
    ],
    skins: [
      {
        unified: "1f329-fe0f",
        native: "🌩️"
      }
    ],
    version: 1
  },
  tornado: {
    id: "tornado",
    name: "Tornado",
    keywords: [
      "cloud",
      "weather",
      "cyclone",
      "twister"
    ],
    skins: [
      {
        unified: "1f32a-fe0f",
        native: "🌪️"
      }
    ],
    version: 1
  },
  fog: {
    id: "fog",
    name: "Fog",
    keywords: [
      "weather"
    ],
    skins: [
      {
        unified: "1f32b-fe0f",
        native: "🌫️"
      }
    ],
    version: 1
  },
  wind_blowing_face: {
    id: "wind_blowing_face",
    name: "Wind Face",
    keywords: [
      "blowing",
      "gust",
      "air"
    ],
    skins: [
      {
        unified: "1f32c-fe0f",
        native: "🌬️"
      }
    ],
    version: 1
  },
  cyclone: {
    id: "cyclone",
    name: "Cyclone",
    keywords: [
      "weather",
      "swirl",
      "blue",
      "cloud",
      "vortex",
      "spiral",
      "whirlpool",
      "spin",
      "tornado",
      "hurricane",
      "typhoon"
    ],
    skins: [
      {
        unified: "1f300",
        native: "🌀"
      }
    ],
    version: 1
  },
  rainbow: {
    id: "rainbow",
    name: "Rainbow",
    keywords: [
      "nature",
      "happy",
      "unicorn",
      "face",
      "photo",
      "sky",
      "spring"
    ],
    skins: [
      {
        unified: "1f308",
        native: "🌈"
      }
    ],
    version: 1
  },
  closed_umbrella: {
    id: "closed_umbrella",
    name: "Closed Umbrella",
    keywords: [
      "weather",
      "rain",
      "drizzle"
    ],
    skins: [
      {
        unified: "1f302",
        native: "🌂"
      }
    ],
    version: 1
  },
  umbrella: {
    id: "umbrella",
    name: "Umbrella",
    keywords: [
      "weather",
      "spring"
    ],
    skins: [
      {
        unified: "2602-fe0f",
        native: "☂️"
      }
    ],
    version: 1
  },
  umbrella_with_rain_drops: {
    id: "umbrella_with_rain_drops",
    name: "Umbrella with Rain Drops",
    keywords: [
      "rainy",
      "weather",
      "spring"
    ],
    skins: [
      {
        unified: "2614",
        native: "☔"
      }
    ],
    version: 1
  },
  umbrella_on_ground: {
    id: "umbrella_on_ground",
    name: "Umbrella on Ground",
    keywords: [
      "weather",
      "summer"
    ],
    skins: [
      {
        unified: "26f1-fe0f",
        native: "⛱️"
      }
    ],
    version: 1
  },
  zap: {
    id: "zap",
    name: "High Voltage",
    keywords: [
      "zap",
      "thunder",
      "weather",
      "lightning",
      "bolt",
      "fast"
    ],
    skins: [
      {
        unified: "26a1",
        native: "⚡"
      }
    ],
    version: 1
  },
  snowflake: {
    id: "snowflake",
    name: "Snowflake",
    keywords: [
      "winter",
      "season",
      "cold",
      "weather",
      "christmas",
      "xmas"
    ],
    skins: [
      {
        unified: "2744-fe0f",
        native: "❄️"
      }
    ],
    version: 1
  },
  snowman: {
    id: "snowman",
    name: "Snowman",
    keywords: [
      "winter",
      "season",
      "cold",
      "weather",
      "christmas",
      "xmas",
      "frozen"
    ],
    skins: [
      {
        unified: "2603-fe0f",
        native: "☃️"
      }
    ],
    version: 1
  },
  snowman_without_snow: {
    id: "snowman_without_snow",
    name: "Snowman Without Snow",
    keywords: [
      "winter",
      "season",
      "cold",
      "weather",
      "christmas",
      "xmas",
      "frozen"
    ],
    skins: [
      {
        unified: "26c4",
        native: "⛄"
      }
    ],
    version: 1
  },
  comet: {
    id: "comet",
    name: "Comet",
    keywords: [
      "space"
    ],
    skins: [
      {
        unified: "2604-fe0f",
        native: "☄️"
      }
    ],
    version: 1
  },
  fire: {
    id: "fire",
    name: "Fire",
    keywords: [
      "hot",
      "cook",
      "flame"
    ],
    skins: [
      {
        unified: "1f525",
        native: "🔥"
      }
    ],
    version: 1
  },
  droplet: {
    id: "droplet",
    name: "Droplet",
    keywords: [
      "water",
      "drip",
      "faucet",
      "spring"
    ],
    skins: [
      {
        unified: "1f4a7",
        native: "💧"
      }
    ],
    version: 1
  },
  ocean: {
    id: "ocean",
    name: "Water Wave",
    keywords: [
      "ocean",
      "sea",
      "nature",
      "tsunami",
      "disaster"
    ],
    skins: [
      {
        unified: "1f30a",
        native: "🌊"
      }
    ],
    version: 1
  },
  jack_o_lantern: {
    id: "jack_o_lantern",
    name: "Jack-O-Lantern",
    keywords: [
      "jack",
      "o",
      "lantern",
      "halloween",
      "light",
      "pumpkin",
      "creepy",
      "fall"
    ],
    skins: [
      {
        unified: "1f383",
        native: "🎃"
      }
    ],
    version: 1
  },
  christmas_tree: {
    id: "christmas_tree",
    name: "Christmas Tree",
    keywords: [
      "festival",
      "vacation",
      "december",
      "xmas",
      "celebration"
    ],
    skins: [
      {
        unified: "1f384",
        native: "🎄"
      }
    ],
    version: 1
  },
  fireworks: {
    id: "fireworks",
    name: "Fireworks",
    keywords: [
      "photo",
      "festival",
      "carnival",
      "congratulations"
    ],
    skins: [
      {
        unified: "1f386",
        native: "🎆"
      }
    ],
    version: 1
  },
  sparkler: {
    id: "sparkler",
    name: "Sparkler",
    keywords: [
      "stars",
      "night",
      "shine"
    ],
    skins: [
      {
        unified: "1f387",
        native: "🎇"
      }
    ],
    version: 1
  },
  firecracker: {
    id: "firecracker",
    name: "Firecracker",
    keywords: [
      "dynamite",
      "boom",
      "explode",
      "explosion",
      "explosive"
    ],
    skins: [
      {
        unified: "1f9e8",
        native: "🧨"
      }
    ],
    version: 11
  },
  sparkles: {
    id: "sparkles",
    name: "Sparkles",
    keywords: [
      "stars",
      "shine",
      "shiny",
      "cool",
      "awesome",
      "good",
      "magic"
    ],
    skins: [
      {
        unified: "2728",
        native: "✨"
      }
    ],
    version: 1
  },
  balloon: {
    id: "balloon",
    name: "Balloon",
    keywords: [
      "party",
      "celebration",
      "birthday",
      "circus"
    ],
    skins: [
      {
        unified: "1f388",
        native: "🎈"
      }
    ],
    version: 1
  },
  tada: {
    id: "tada",
    name: "Party Popper",
    keywords: [
      "tada",
      "congratulations",
      "birthday",
      "magic",
      "circus",
      "celebration"
    ],
    skins: [
      {
        unified: "1f389",
        native: "🎉"
      }
    ],
    version: 1
  },
  confetti_ball: {
    id: "confetti_ball",
    name: "Confetti Ball",
    keywords: [
      "festival",
      "party",
      "birthday",
      "circus"
    ],
    skins: [
      {
        unified: "1f38a",
        native: "🎊"
      }
    ],
    version: 1
  },
  tanabata_tree: {
    id: "tanabata_tree",
    name: "Tanabata Tree",
    keywords: [
      "plant",
      "nature",
      "branch",
      "summer",
      "bamboo",
      "wish",
      "star",
      "festival",
      "tanzaku"
    ],
    skins: [
      {
        unified: "1f38b",
        native: "🎋"
      }
    ],
    version: 1
  },
  bamboo: {
    id: "bamboo",
    name: "Pine Decoration",
    keywords: [
      "bamboo",
      "japanese",
      "plant",
      "nature",
      "vegetable",
      "panda",
      "new",
      "years"
    ],
    skins: [
      {
        unified: "1f38d",
        native: "🎍"
      }
    ],
    version: 1
  },
  dolls: {
    id: "dolls",
    name: "Japanese Dolls",
    keywords: [
      "toy",
      "kimono"
    ],
    skins: [
      {
        unified: "1f38e",
        native: "🎎"
      }
    ],
    version: 1
  },
  flags: {
    id: "flags",
    name: "Carp Streamer",
    keywords: [
      "flags",
      "fish",
      "japanese",
      "koinobori",
      "banner"
    ],
    skins: [
      {
        unified: "1f38f",
        native: "🎏"
      }
    ],
    version: 1
  },
  wind_chime: {
    id: "wind_chime",
    name: "Wind Chime",
    keywords: [
      "nature",
      "ding",
      "spring",
      "bell"
    ],
    skins: [
      {
        unified: "1f390",
        native: "🎐"
      }
    ],
    version: 1
  },
  rice_scene: {
    id: "rice_scene",
    name: "Moon Viewing Ceremony",
    keywords: [
      "rice",
      "scene",
      "photo",
      "japan",
      "asia",
      "tsukimi"
    ],
    skins: [
      {
        unified: "1f391",
        native: "🎑"
      }
    ],
    version: 1
  },
  red_envelope: {
    id: "red_envelope",
    name: "Red Envelope",
    keywords: [
      "gift"
    ],
    skins: [
      {
        unified: "1f9e7",
        native: "🧧"
      }
    ],
    version: 11
  },
  ribbon: {
    id: "ribbon",
    name: "Ribbon",
    keywords: [
      "decoration",
      "pink",
      "girl",
      "bowtie"
    ],
    skins: [
      {
        unified: "1f380",
        native: "🎀"
      }
    ],
    version: 1
  },
  gift: {
    id: "gift",
    name: "Wrapped Gift",
    keywords: [
      "present",
      "birthday",
      "christmas",
      "xmas"
    ],
    skins: [
      {
        unified: "1f381",
        native: "🎁"
      }
    ],
    version: 1
  },
  reminder_ribbon: {
    id: "reminder_ribbon",
    name: "Reminder Ribbon",
    keywords: [
      "sports",
      "cause",
      "support",
      "awareness"
    ],
    skins: [
      {
        unified: "1f397-fe0f",
        native: "🎗️"
      }
    ],
    version: 1
  },
  admission_tickets: {
    id: "admission_tickets",
    name: "Admission Tickets",
    keywords: [
      "sports",
      "concert",
      "entrance"
    ],
    skins: [
      {
        unified: "1f39f-fe0f",
        native: "🎟️"
      }
    ],
    version: 1
  },
  ticket: {
    id: "ticket",
    name: "Ticket",
    keywords: [
      "event",
      "concert",
      "pass"
    ],
    skins: [
      {
        unified: "1f3ab",
        native: "🎫"
      }
    ],
    version: 1
  },
  medal: {
    id: "medal",
    name: "Military Medal",
    keywords: [
      "award",
      "winning",
      "army"
    ],
    skins: [
      {
        unified: "1f396-fe0f",
        native: "🎖️"
      }
    ],
    version: 1
  },
  trophy: {
    id: "trophy",
    name: "Trophy",
    keywords: [
      "win",
      "award",
      "contest",
      "place",
      "ftw",
      "ceremony"
    ],
    skins: [
      {
        unified: "1f3c6",
        native: "🏆"
      }
    ],
    version: 1
  },
  sports_medal: {
    id: "sports_medal",
    name: "Sports Medal",
    keywords: [
      "award",
      "winning"
    ],
    skins: [
      {
        unified: "1f3c5",
        native: "🏅"
      }
    ],
    version: 1
  },
  first_place_medal: {
    id: "first_place_medal",
    name: "1st Place Medal",
    keywords: [
      "first",
      "award",
      "winning"
    ],
    skins: [
      {
        unified: "1f947",
        native: "🥇"
      }
    ],
    version: 3
  },
  second_place_medal: {
    id: "second_place_medal",
    name: "2nd Place Medal",
    keywords: [
      "second",
      "award"
    ],
    skins: [
      {
        unified: "1f948",
        native: "🥈"
      }
    ],
    version: 3
  },
  third_place_medal: {
    id: "third_place_medal",
    name: "3rd Place Medal",
    keywords: [
      "third",
      "award"
    ],
    skins: [
      {
        unified: "1f949",
        native: "🥉"
      }
    ],
    version: 3
  },
  soccer: {
    id: "soccer",
    name: "Soccer Ball",
    keywords: [
      "sports",
      "football"
    ],
    skins: [
      {
        unified: "26bd",
        native: "⚽"
      }
    ],
    version: 1
  },
  baseball: {
    id: "baseball",
    name: "Baseball",
    keywords: [
      "sports",
      "balls"
    ],
    skins: [
      {
        unified: "26be",
        native: "⚾"
      }
    ],
    version: 1
  },
  softball: {
    id: "softball",
    name: "Softball",
    keywords: [
      "sports",
      "balls"
    ],
    skins: [
      {
        unified: "1f94e",
        native: "🥎"
      }
    ],
    version: 11
  },
  basketball: {
    id: "basketball",
    name: "Basketball",
    keywords: [
      "sports",
      "balls",
      "NBA"
    ],
    skins: [
      {
        unified: "1f3c0",
        native: "🏀"
      }
    ],
    version: 1
  },
  volleyball: {
    id: "volleyball",
    name: "Volleyball",
    keywords: [
      "sports",
      "balls"
    ],
    skins: [
      {
        unified: "1f3d0",
        native: "🏐"
      }
    ],
    version: 1
  },
  football: {
    id: "football",
    name: "American Football",
    keywords: [
      "sports",
      "balls",
      "NFL"
    ],
    skins: [
      {
        unified: "1f3c8",
        native: "🏈"
      }
    ],
    version: 1
  },
  rugby_football: {
    id: "rugby_football",
    name: "Rugby Football",
    keywords: [
      "sports",
      "team"
    ],
    skins: [
      {
        unified: "1f3c9",
        native: "🏉"
      }
    ],
    version: 1
  },
  tennis: {
    id: "tennis",
    name: "Tennis",
    keywords: [
      "sports",
      "balls",
      "green"
    ],
    skins: [
      {
        unified: "1f3be",
        native: "🎾"
      }
    ],
    version: 1
  },
  flying_disc: {
    id: "flying_disc",
    name: "Flying Disc",
    keywords: [
      "sports",
      "frisbee",
      "ultimate"
    ],
    skins: [
      {
        unified: "1f94f",
        native: "🥏"
      }
    ],
    version: 11
  },
  bowling: {
    id: "bowling",
    name: "Bowling",
    keywords: [
      "sports",
      "fun",
      "play"
    ],
    skins: [
      {
        unified: "1f3b3",
        native: "🎳"
      }
    ],
    version: 1
  },
  cricket_bat_and_ball: {
    id: "cricket_bat_and_ball",
    name: "Cricket Game",
    keywords: [
      "bat",
      "and",
      "ball",
      "sports"
    ],
    skins: [
      {
        unified: "1f3cf",
        native: "🏏"
      }
    ],
    version: 1
  },
  field_hockey_stick_and_ball: {
    id: "field_hockey_stick_and_ball",
    name: "Field Hockey",
    keywords: [
      "stick",
      "and",
      "ball",
      "sports"
    ],
    skins: [
      {
        unified: "1f3d1",
        native: "🏑"
      }
    ],
    version: 1
  },
  ice_hockey_stick_and_puck: {
    id: "ice_hockey_stick_and_puck",
    name: "Ice Hockey",
    keywords: [
      "stick",
      "and",
      "puck",
      "sports"
    ],
    skins: [
      {
        unified: "1f3d2",
        native: "🏒"
      }
    ],
    version: 1
  },
  lacrosse: {
    id: "lacrosse",
    name: "Lacrosse",
    keywords: [
      "sports",
      "ball",
      "stick"
    ],
    skins: [
      {
        unified: "1f94d",
        native: "🥍"
      }
    ],
    version: 11
  },
  table_tennis_paddle_and_ball: {
    id: "table_tennis_paddle_and_ball",
    name: "Ping Pong",
    keywords: [
      "table",
      "tennis",
      "paddle",
      "and",
      "ball",
      "sports",
      "pingpong"
    ],
    skins: [
      {
        unified: "1f3d3",
        native: "🏓"
      }
    ],
    version: 1
  },
  badminton_racquet_and_shuttlecock: {
    id: "badminton_racquet_and_shuttlecock",
    name: "Badminton",
    keywords: [
      "racquet",
      "and",
      "shuttlecock",
      "sports"
    ],
    skins: [
      {
        unified: "1f3f8",
        native: "🏸"
      }
    ],
    version: 1
  },
  boxing_glove: {
    id: "boxing_glove",
    name: "Boxing Glove",
    keywords: [
      "sports",
      "fighting"
    ],
    skins: [
      {
        unified: "1f94a",
        native: "🥊"
      }
    ],
    version: 3
  },
  martial_arts_uniform: {
    id: "martial_arts_uniform",
    name: "Martial Arts Uniform",
    keywords: [
      "judo",
      "karate",
      "taekwondo"
    ],
    skins: [
      {
        unified: "1f94b",
        native: "🥋"
      }
    ],
    version: 3
  },
  goal_net: {
    id: "goal_net",
    name: "Goal Net",
    keywords: [
      "sports"
    ],
    skins: [
      {
        unified: "1f945",
        native: "🥅"
      }
    ],
    version: 3
  },
  golf: {
    id: "golf",
    name: "Flag in Hole",
    keywords: [
      "golf",
      "sports",
      "business",
      "summer"
    ],
    skins: [
      {
        unified: "26f3",
        native: "⛳"
      }
    ],
    version: 1
  },
  ice_skate: {
    id: "ice_skate",
    name: "Ice Skate",
    keywords: [
      "sports"
    ],
    skins: [
      {
        unified: "26f8-fe0f",
        native: "⛸️"
      }
    ],
    version: 1
  },
  fishing_pole_and_fish: {
    id: "fishing_pole_and_fish",
    name: "Fishing Pole",
    keywords: [
      "and",
      "fish",
      "food",
      "hobby",
      "summer"
    ],
    skins: [
      {
        unified: "1f3a3",
        native: "🎣"
      }
    ],
    version: 1
  },
  diving_mask: {
    id: "diving_mask",
    name: "Diving Mask",
    keywords: [
      "sport",
      "ocean"
    ],
    skins: [
      {
        unified: "1f93f",
        native: "🤿"
      }
    ],
    version: 12
  },
  running_shirt_with_sash: {
    id: "running_shirt_with_sash",
    name: "Running Shirt",
    keywords: [
      "with",
      "sash",
      "play",
      "pageant"
    ],
    skins: [
      {
        unified: "1f3bd",
        native: "🎽"
      }
    ],
    version: 1
  },
  ski: {
    id: "ski",
    name: "Skis",
    keywords: [
      "ski",
      "sports",
      "winter",
      "cold",
      "snow"
    ],
    skins: [
      {
        unified: "1f3bf",
        native: "🎿"
      }
    ],
    version: 1
  },
  sled: {
    id: "sled",
    name: "Sled",
    keywords: [
      "sleigh",
      "luge",
      "toboggan"
    ],
    skins: [
      {
        unified: "1f6f7",
        native: "🛷"
      }
    ],
    version: 5
  },
  curling_stone: {
    id: "curling_stone",
    name: "Curling Stone",
    keywords: [
      "sports"
    ],
    skins: [
      {
        unified: "1f94c",
        native: "🥌"
      }
    ],
    version: 5
  },
  dart: {
    id: "dart",
    name: "Bullseye",
    keywords: [
      "dart",
      "direct",
      "hit",
      "game",
      "play",
      "bar",
      "target"
    ],
    skins: [
      {
        unified: "1f3af",
        native: "🎯"
      }
    ],
    version: 1
  },
  "yo-yo": {
    id: "yo-yo",
    name: "Yo-Yo",
    keywords: [
      "yo",
      "toy"
    ],
    skins: [
      {
        unified: "1fa80",
        native: "🪀"
      }
    ],
    version: 12
  },
  kite: {
    id: "kite",
    name: "Kite",
    keywords: [
      "wind",
      "fly"
    ],
    skins: [
      {
        unified: "1fa81",
        native: "🪁"
      }
    ],
    version: 12
  },
  gun: {
    id: "gun",
    name: "Pistol",
    keywords: [
      "gun",
      "violence",
      "weapon",
      "revolver"
    ],
    skins: [
      {
        unified: "1f52b",
        native: "🔫"
      }
    ],
    version: 1
  },
  "8ball": {
    id: "8ball",
    name: "Billiards",
    keywords: [
      "8ball",
      "pool",
      "8",
      "ball",
      "hobby",
      "game",
      "luck",
      "magic"
    ],
    skins: [
      {
        unified: "1f3b1",
        native: "🎱"
      }
    ],
    version: 1
  },
  crystal_ball: {
    id: "crystal_ball",
    name: "Crystal Ball",
    keywords: [
      "disco",
      "party",
      "magic",
      "circus",
      "fortune",
      "teller"
    ],
    skins: [
      {
        unified: "1f52e",
        native: "🔮"
      }
    ],
    version: 1
  },
  magic_wand: {
    id: "magic_wand",
    name: "Magic Wand",
    keywords: [
      "supernature",
      "power"
    ],
    skins: [
      {
        unified: "1fa84",
        native: "🪄"
      }
    ],
    version: 13
  },
  video_game: {
    id: "video_game",
    name: "Video Game",
    keywords: [
      "play",
      "console",
      "PS4",
      "controller"
    ],
    skins: [
      {
        unified: "1f3ae",
        native: "🎮"
      }
    ],
    version: 1
  },
  joystick: {
    id: "joystick",
    name: "Joystick",
    keywords: [
      "game",
      "play"
    ],
    skins: [
      {
        unified: "1f579-fe0f",
        native: "🕹️"
      }
    ],
    version: 1
  },
  slot_machine: {
    id: "slot_machine",
    name: "Slot Machine",
    keywords: [
      "bet",
      "gamble",
      "vegas",
      "fruit",
      "luck",
      "casino"
    ],
    skins: [
      {
        unified: "1f3b0",
        native: "🎰"
      }
    ],
    version: 1
  },
  game_die: {
    id: "game_die",
    name: "Game Die",
    keywords: [
      "dice",
      "random",
      "tabletop",
      "play",
      "luck"
    ],
    skins: [
      {
        unified: "1f3b2",
        native: "🎲"
      }
    ],
    version: 1
  },
  jigsaw: {
    id: "jigsaw",
    name: "Puzzle Piece",
    keywords: [
      "jigsaw",
      "interlocking"
    ],
    skins: [
      {
        unified: "1f9e9",
        native: "🧩"
      }
    ],
    version: 11
  },
  teddy_bear: {
    id: "teddy_bear",
    name: "Teddy Bear",
    keywords: [
      "plush",
      "stuffed"
    ],
    skins: [
      {
        unified: "1f9f8",
        native: "🧸"
      }
    ],
    version: 11
  },
  pinata: {
    id: "pinata",
    name: "Pinata",
    keywords: [
      "mexico",
      "candy",
      "celebration"
    ],
    skins: [
      {
        unified: "1fa85",
        native: "🪅"
      }
    ],
    version: 13
  },
  mirror_ball: {
    id: "mirror_ball",
    name: "Mirror Ball",
    keywords: [
      "disco",
      "dance",
      "party"
    ],
    skins: [
      {
        unified: "1faa9",
        native: "🪩"
      }
    ],
    version: 14
  },
  nesting_dolls: {
    id: "nesting_dolls",
    name: "Nesting Dolls",
    keywords: [
      "matryoshka",
      "toy"
    ],
    skins: [
      {
        unified: "1fa86",
        native: "🪆"
      }
    ],
    version: 13
  },
  spades: {
    id: "spades",
    name: "Spade Suit",
    keywords: [
      "spades",
      "poker",
      "cards",
      "suits",
      "magic"
    ],
    skins: [
      {
        unified: "2660-fe0f",
        native: "♠️"
      }
    ],
    version: 1
  },
  hearts: {
    id: "hearts",
    name: "Heart Suit",
    keywords: [
      "hearts",
      "poker",
      "cards",
      "magic",
      "suits"
    ],
    skins: [
      {
        unified: "2665-fe0f",
        native: "♥️"
      }
    ],
    version: 1
  },
  diamonds: {
    id: "diamonds",
    name: "Diamond Suit",
    keywords: [
      "diamonds",
      "poker",
      "cards",
      "magic",
      "suits"
    ],
    skins: [
      {
        unified: "2666-fe0f",
        native: "♦️"
      }
    ],
    version: 1
  },
  clubs: {
    id: "clubs",
    name: "Club Suit",
    keywords: [
      "clubs",
      "poker",
      "cards",
      "magic",
      "suits"
    ],
    skins: [
      {
        unified: "2663-fe0f",
        native: "♣️"
      }
    ],
    version: 1
  },
  chess_pawn: {
    id: "chess_pawn",
    name: "Chess Pawn",
    keywords: [
      "expendable"
    ],
    skins: [
      {
        unified: "265f-fe0f",
        native: "♟️"
      }
    ],
    version: 11
  },
  black_joker: {
    id: "black_joker",
    name: "Joker",
    keywords: [
      "black",
      "poker",
      "cards",
      "game",
      "play",
      "magic"
    ],
    skins: [
      {
        unified: "1f0cf",
        native: "🃏"
      }
    ],
    version: 1
  },
  mahjong: {
    id: "mahjong",
    name: "Mahjong Red Dragon",
    keywords: [
      "game",
      "play",
      "chinese",
      "kanji"
    ],
    skins: [
      {
        unified: "1f004",
        native: "🀄"
      }
    ],
    version: 1
  },
  flower_playing_cards: {
    id: "flower_playing_cards",
    name: "Flower Playing Cards",
    keywords: [
      "game",
      "sunset",
      "red"
    ],
    skins: [
      {
        unified: "1f3b4",
        native: "🎴"
      }
    ],
    version: 1
  },
  performing_arts: {
    id: "performing_arts",
    name: "Performing Arts",
    keywords: [
      "acting",
      "theater",
      "drama"
    ],
    skins: [
      {
        unified: "1f3ad",
        native: "🎭"
      }
    ],
    version: 1
  },
  frame_with_picture: {
    id: "frame_with_picture",
    name: "Framed Picture",
    keywords: [
      "frame",
      "with",
      "photography"
    ],
    skins: [
      {
        unified: "1f5bc-fe0f",
        native: "🖼️"
      }
    ],
    version: 1
  },
  art: {
    id: "art",
    name: "Artist Palette",
    keywords: [
      "art",
      "design",
      "paint",
      "draw",
      "colors"
    ],
    skins: [
      {
        unified: "1f3a8",
        native: "🎨"
      }
    ],
    version: 1
  },
  thread: {
    id: "thread",
    name: "Thread",
    keywords: [
      "needle",
      "sewing",
      "spool",
      "string"
    ],
    skins: [
      {
        unified: "1f9f5",
        native: "🧵"
      }
    ],
    version: 11
  },
  sewing_needle: {
    id: "sewing_needle",
    name: "Sewing Needle",
    keywords: [
      "stitches"
    ],
    skins: [
      {
        unified: "1faa1",
        native: "🪡"
      }
    ],
    version: 13
  },
  yarn: {
    id: "yarn",
    name: "Yarn",
    keywords: [
      "ball",
      "crochet",
      "knit"
    ],
    skins: [
      {
        unified: "1f9f6",
        native: "🧶"
      }
    ],
    version: 11
  },
  knot: {
    id: "knot",
    name: "Knot",
    keywords: [
      "rope",
      "scout"
    ],
    skins: [
      {
        unified: "1faa2",
        native: "🪢"
      }
    ],
    version: 13
  },
  eyeglasses: {
    id: "eyeglasses",
    name: "Glasses",
    keywords: [
      "eyeglasses",
      "fashion",
      "accessories",
      "eyesight",
      "nerdy",
      "dork",
      "geek"
    ],
    skins: [
      {
        unified: "1f453",
        native: "👓"
      }
    ],
    version: 1
  },
  dark_sunglasses: {
    id: "dark_sunglasses",
    name: "Sunglasses",
    keywords: [
      "dark",
      "face",
      "cool",
      "accessories"
    ],
    skins: [
      {
        unified: "1f576-fe0f",
        native: "🕶️"
      }
    ],
    version: 1
  },
  goggles: {
    id: "goggles",
    name: "Goggles",
    keywords: [
      "eyes",
      "protection",
      "safety"
    ],
    skins: [
      {
        unified: "1f97d",
        native: "🥽"
      }
    ],
    version: 11
  },
  lab_coat: {
    id: "lab_coat",
    name: "Lab Coat",
    keywords: [
      "doctor",
      "experiment",
      "scientist",
      "chemist"
    ],
    skins: [
      {
        unified: "1f97c",
        native: "🥼"
      }
    ],
    version: 11
  },
  safety_vest: {
    id: "safety_vest",
    name: "Safety Vest",
    keywords: [
      "protection"
    ],
    skins: [
      {
        unified: "1f9ba",
        native: "🦺"
      }
    ],
    version: 12
  },
  necktie: {
    id: "necktie",
    name: "Necktie",
    keywords: [
      "shirt",
      "suitup",
      "formal",
      "fashion",
      "cloth",
      "business"
    ],
    skins: [
      {
        unified: "1f454",
        native: "👔"
      }
    ],
    version: 1
  },
  shirt: {
    id: "shirt",
    name: "T-Shirt",
    keywords: [
      "shirt",
      "tshirt",
      "t",
      "fashion",
      "cloth",
      "casual",
      "tee"
    ],
    skins: [
      {
        unified: "1f455",
        native: "👕"
      }
    ],
    version: 1
  },
  jeans: {
    id: "jeans",
    name: "Jeans",
    keywords: [
      "fashion",
      "shopping"
    ],
    skins: [
      {
        unified: "1f456",
        native: "👖"
      }
    ],
    version: 1
  },
  scarf: {
    id: "scarf",
    name: "Scarf",
    keywords: [
      "neck",
      "winter",
      "clothes"
    ],
    skins: [
      {
        unified: "1f9e3",
        native: "🧣"
      }
    ],
    version: 5
  },
  gloves: {
    id: "gloves",
    name: "Gloves",
    keywords: [
      "hands",
      "winter",
      "clothes"
    ],
    skins: [
      {
        unified: "1f9e4",
        native: "🧤"
      }
    ],
    version: 5
  },
  coat: {
    id: "coat",
    name: "Coat",
    keywords: [
      "jacket"
    ],
    skins: [
      {
        unified: "1f9e5",
        native: "🧥"
      }
    ],
    version: 5
  },
  socks: {
    id: "socks",
    name: "Socks",
    keywords: [
      "stockings",
      "clothes"
    ],
    skins: [
      {
        unified: "1f9e6",
        native: "🧦"
      }
    ],
    version: 5
  },
  dress: {
    id: "dress",
    name: "Dress",
    keywords: [
      "clothes",
      "fashion",
      "shopping"
    ],
    skins: [
      {
        unified: "1f457",
        native: "👗"
      }
    ],
    version: 1
  },
  kimono: {
    id: "kimono",
    name: "Kimono",
    keywords: [
      "dress",
      "fashion",
      "women",
      "female",
      "japanese"
    ],
    skins: [
      {
        unified: "1f458",
        native: "👘"
      }
    ],
    version: 1
  },
  sari: {
    id: "sari",
    name: "Sari",
    keywords: [
      "dress"
    ],
    skins: [
      {
        unified: "1f97b",
        native: "🥻"
      }
    ],
    version: 12
  },
  "one-piece_swimsuit": {
    id: "one-piece_swimsuit",
    name: "One-Piece Swimsuit",
    keywords: [
      "one",
      "piece",
      "fashion"
    ],
    skins: [
      {
        unified: "1fa71",
        native: "🩱"
      }
    ],
    version: 12
  },
  briefs: {
    id: "briefs",
    name: "Briefs",
    keywords: [
      "clothing"
    ],
    skins: [
      {
        unified: "1fa72",
        native: "🩲"
      }
    ],
    version: 12
  },
  shorts: {
    id: "shorts",
    name: "Shorts",
    keywords: [
      "clothing"
    ],
    skins: [
      {
        unified: "1fa73",
        native: "🩳"
      }
    ],
    version: 12
  },
  bikini: {
    id: "bikini",
    name: "Bikini",
    keywords: [
      "swimming",
      "female",
      "woman",
      "girl",
      "fashion",
      "beach",
      "summer"
    ],
    skins: [
      {
        unified: "1f459",
        native: "👙"
      }
    ],
    version: 1
  },
  womans_clothes: {
    id: "womans_clothes",
    name: "Womans Clothes",
    keywords: [
      "woman",
      "s",
      "fashion",
      "shopping",
      "bags",
      "female"
    ],
    skins: [
      {
        unified: "1f45a",
        native: "👚"
      }
    ],
    version: 1
  },
  folding_hand_fan: {
    id: "folding_hand_fan",
    name: "Folding Hand Fan",
    keywords: [
      "flamenco",
      "hot"
    ],
    skins: [
      {
        unified: "1faad",
        native: "🪭"
      }
    ],
    version: 15
  },
  purse: {
    id: "purse",
    name: "Purse",
    keywords: [
      "fashion",
      "accessories",
      "money",
      "sales",
      "shopping"
    ],
    skins: [
      {
        unified: "1f45b",
        native: "👛"
      }
    ],
    version: 1
  },
  handbag: {
    id: "handbag",
    name: "Handbag",
    keywords: [
      "fashion",
      "accessory",
      "accessories",
      "shopping"
    ],
    skins: [
      {
        unified: "1f45c",
        native: "👜"
      }
    ],
    version: 1
  },
  pouch: {
    id: "pouch",
    name: "Pouch",
    keywords: [
      "clutch",
      "bag",
      "accessories",
      "shopping"
    ],
    skins: [
      {
        unified: "1f45d",
        native: "👝"
      }
    ],
    version: 1
  },
  shopping_bags: {
    id: "shopping_bags",
    name: "Shopping Bags",
    keywords: [
      "mall",
      "buy",
      "purchase"
    ],
    skins: [
      {
        unified: "1f6cd-fe0f",
        native: "🛍️"
      }
    ],
    version: 1
  },
  school_satchel: {
    id: "school_satchel",
    name: "Backpack",
    keywords: [
      "school",
      "satchel",
      "student",
      "education",
      "bag"
    ],
    skins: [
      {
        unified: "1f392",
        native: "🎒"
      }
    ],
    version: 1
  },
  thong_sandal: {
    id: "thong_sandal",
    name: "Thong Sandal",
    keywords: [
      "footwear",
      "summer"
    ],
    skins: [
      {
        unified: "1fa74",
        native: "🩴"
      }
    ],
    version: 13
  },
  mans_shoe: {
    id: "mans_shoe",
    name: "Mans Shoe",
    keywords: [
      "man",
      "s",
      "fashion",
      "male"
    ],
    skins: [
      {
        unified: "1f45e",
        native: "👞"
      }
    ],
    version: 1
  },
  athletic_shoe: {
    id: "athletic_shoe",
    name: "Running Shoe",
    keywords: [
      "athletic",
      "shoes",
      "sports",
      "sneakers"
    ],
    skins: [
      {
        unified: "1f45f",
        native: "👟"
      }
    ],
    version: 1
  },
  hiking_boot: {
    id: "hiking_boot",
    name: "Hiking Boot",
    keywords: [
      "backpacking",
      "camping"
    ],
    skins: [
      {
        unified: "1f97e",
        native: "🥾"
      }
    ],
    version: 11
  },
  womans_flat_shoe: {
    id: "womans_flat_shoe",
    name: "Flat Shoe",
    keywords: [
      "womans",
      "ballet",
      "slip",
      "on",
      "slipper"
    ],
    skins: [
      {
        unified: "1f97f",
        native: "🥿"
      }
    ],
    version: 11
  },
  high_heel: {
    id: "high_heel",
    name: "High-Heeled Shoe",
    keywords: [
      "high",
      "heel",
      "heeled",
      "fashion",
      "shoes",
      "female",
      "pumps",
      "stiletto"
    ],
    skins: [
      {
        unified: "1f460",
        native: "👠"
      }
    ],
    version: 1
  },
  sandal: {
    id: "sandal",
    name: "Womans Sandal",
    keywords: [
      "woman",
      "s",
      "shoes",
      "fashion",
      "flip",
      "flops"
    ],
    skins: [
      {
        unified: "1f461",
        native: "👡"
      }
    ],
    version: 1
  },
  ballet_shoes: {
    id: "ballet_shoes",
    name: "Ballet Shoes",
    keywords: [
      "dance"
    ],
    skins: [
      {
        unified: "1fa70",
        native: "🩰"
      }
    ],
    version: 12
  },
  boot: {
    id: "boot",
    name: "Womans Boots",
    keywords: [
      "boot",
      "woman",
      "s",
      "shoes",
      "fashion"
    ],
    skins: [
      {
        unified: "1f462",
        native: "👢"
      }
    ],
    version: 1
  },
  hair_pick: {
    id: "hair_pick",
    name: "Hair Pick",
    keywords: [
      "afro",
      "comb"
    ],
    skins: [
      {
        unified: "1faae",
        native: "🪮"
      }
    ],
    version: 15
  },
  crown: {
    id: "crown",
    name: "Crown",
    keywords: [
      "king",
      "kod",
      "leader",
      "royalty",
      "lord"
    ],
    skins: [
      {
        unified: "1f451",
        native: "👑"
      }
    ],
    version: 1
  },
  womans_hat: {
    id: "womans_hat",
    name: "Womans Hat",
    keywords: [
      "woman",
      "s",
      "fashion",
      "accessories",
      "female",
      "lady",
      "spring"
    ],
    skins: [
      {
        unified: "1f452",
        native: "👒"
      }
    ],
    version: 1
  },
  tophat: {
    id: "tophat",
    name: "Top Hat",
    keywords: [
      "tophat",
      "magic",
      "gentleman",
      "classy",
      "circus"
    ],
    skins: [
      {
        unified: "1f3a9",
        native: "🎩"
      }
    ],
    version: 1
  },
  mortar_board: {
    id: "mortar_board",
    name: "Graduation Cap",
    keywords: [
      "mortar",
      "board",
      "school",
      "college",
      "degree",
      "university",
      "hat",
      "legal",
      "learn",
      "education"
    ],
    skins: [
      {
        unified: "1f393",
        native: "🎓"
      }
    ],
    version: 1
  },
  billed_cap: {
    id: "billed_cap",
    name: "Billed Cap",
    keywords: [
      "baseball"
    ],
    skins: [
      {
        unified: "1f9e2",
        native: "🧢"
      }
    ],
    version: 5
  },
  military_helmet: {
    id: "military_helmet",
    name: "Military Helmet",
    keywords: [
      "army",
      "protection"
    ],
    skins: [
      {
        unified: "1fa96",
        native: "🪖"
      }
    ],
    version: 13
  },
  helmet_with_white_cross: {
    id: "helmet_with_white_cross",
    name: "Rescue Worker’s Helmet",
    keywords: [
      "with",
      "white",
      "cross",
      "worker",
      "s",
      "construction",
      "build"
    ],
    skins: [
      {
        unified: "26d1-fe0f",
        native: "⛑️"
      }
    ],
    version: 1
  },
  prayer_beads: {
    id: "prayer_beads",
    name: "Prayer Beads",
    keywords: [
      "dhikr",
      "religious"
    ],
    skins: [
      {
        unified: "1f4ff",
        native: "📿"
      }
    ],
    version: 1
  },
  lipstick: {
    id: "lipstick",
    name: "Lipstick",
    keywords: [
      "female",
      "girl",
      "fashion",
      "woman"
    ],
    skins: [
      {
        unified: "1f484",
        native: "💄"
      }
    ],
    version: 1
  },
  ring: {
    id: "ring",
    name: "Ring",
    keywords: [
      "wedding",
      "propose",
      "marriage",
      "valentines",
      "diamond",
      "fashion",
      "jewelry",
      "gem",
      "engagement"
    ],
    skins: [
      {
        unified: "1f48d",
        native: "💍"
      }
    ],
    version: 1
  },
  gem: {
    id: "gem",
    name: "Gem Stone",
    keywords: [
      "blue",
      "ruby",
      "diamond",
      "jewelry"
    ],
    skins: [
      {
        unified: "1f48e",
        native: "💎"
      }
    ],
    version: 1
  },
  mute: {
    id: "mute",
    name: "Muted Speaker",
    keywords: [
      "mute",
      "sound",
      "volume",
      "silence",
      "quiet"
    ],
    skins: [
      {
        unified: "1f507",
        native: "🔇"
      }
    ],
    version: 1
  },
  speaker: {
    id: "speaker",
    name: "Speaker",
    keywords: [
      "low",
      "volume",
      "sound",
      "silence",
      "broadcast"
    ],
    skins: [
      {
        unified: "1f508",
        native: "🔈"
      }
    ],
    version: 1
  },
  sound: {
    id: "sound",
    name: "Speaker Medium Volume",
    keywords: [
      "sound",
      "broadcast"
    ],
    skins: [
      {
        unified: "1f509",
        native: "🔉"
      }
    ],
    version: 1
  },
  loud_sound: {
    id: "loud_sound",
    name: "Speaker High Volume",
    keywords: [
      "loud",
      "sound",
      "noise",
      "noisy",
      "broadcast"
    ],
    skins: [
      {
        unified: "1f50a",
        native: "🔊"
      }
    ],
    version: 1
  },
  loudspeaker: {
    id: "loudspeaker",
    name: "Loudspeaker",
    keywords: [
      "volume",
      "sound"
    ],
    skins: [
      {
        unified: "1f4e2",
        native: "📢"
      }
    ],
    version: 1
  },
  mega: {
    id: "mega",
    name: "Megaphone",
    keywords: [
      "mega",
      "sound",
      "speaker",
      "volume"
    ],
    skins: [
      {
        unified: "1f4e3",
        native: "📣"
      }
    ],
    version: 1
  },
  postal_horn: {
    id: "postal_horn",
    name: "Postal Horn",
    keywords: [
      "instrument",
      "music"
    ],
    skins: [
      {
        unified: "1f4ef",
        native: "📯"
      }
    ],
    version: 1
  },
  bell: {
    id: "bell",
    name: "Bell",
    keywords: [
      "sound",
      "notification",
      "christmas",
      "xmas",
      "chime"
    ],
    skins: [
      {
        unified: "1f514",
        native: "🔔"
      }
    ],
    version: 1
  },
  no_bell: {
    id: "no_bell",
    name: "Bell with Slash",
    keywords: [
      "no",
      "sound",
      "volume",
      "mute",
      "quiet",
      "silent"
    ],
    skins: [
      {
        unified: "1f515",
        native: "🔕"
      }
    ],
    version: 1
  },
  musical_score: {
    id: "musical_score",
    name: "Musical Score",
    keywords: [
      "treble",
      "clef",
      "compose"
    ],
    skins: [
      {
        unified: "1f3bc",
        native: "🎼"
      }
    ],
    version: 1
  },
  musical_note: {
    id: "musical_note",
    name: "Musical Note",
    keywords: [
      "score",
      "tone",
      "sound"
    ],
    skins: [
      {
        unified: "1f3b5",
        native: "🎵"
      }
    ],
    version: 1
  },
  notes: {
    id: "notes",
    name: "Musical Notes",
    keywords: [
      "music",
      "score"
    ],
    skins: [
      {
        unified: "1f3b6",
        native: "🎶"
      }
    ],
    version: 1
  },
  studio_microphone: {
    id: "studio_microphone",
    name: "Studio Microphone",
    keywords: [
      "sing",
      "recording",
      "artist",
      "talkshow"
    ],
    skins: [
      {
        unified: "1f399-fe0f",
        native: "🎙️"
      }
    ],
    version: 1
  },
  level_slider: {
    id: "level_slider",
    name: "Level Slider",
    keywords: [
      "scale"
    ],
    skins: [
      {
        unified: "1f39a-fe0f",
        native: "🎚️"
      }
    ],
    version: 1
  },
  control_knobs: {
    id: "control_knobs",
    name: "Control Knobs",
    keywords: [
      "dial"
    ],
    skins: [
      {
        unified: "1f39b-fe0f",
        native: "🎛️"
      }
    ],
    version: 1
  },
  microphone: {
    id: "microphone",
    name: "Microphone",
    keywords: [
      "sound",
      "music",
      "PA",
      "sing",
      "talkshow"
    ],
    skins: [
      {
        unified: "1f3a4",
        native: "🎤"
      }
    ],
    version: 1
  },
  headphones: {
    id: "headphones",
    name: "Headphone",
    keywords: [
      "headphones",
      "music",
      "score",
      "gadgets"
    ],
    skins: [
      {
        unified: "1f3a7",
        native: "🎧"
      }
    ],
    version: 1
  },
  radio: {
    id: "radio",
    name: "Radio",
    keywords: [
      "communication",
      "music",
      "podcast",
      "program"
    ],
    skins: [
      {
        unified: "1f4fb",
        native: "📻"
      }
    ],
    version: 1
  },
  saxophone: {
    id: "saxophone",
    name: "Saxophone",
    keywords: [
      "music",
      "instrument",
      "jazz",
      "blues"
    ],
    skins: [
      {
        unified: "1f3b7",
        native: "🎷"
      }
    ],
    version: 1
  },
  accordion: {
    id: "accordion",
    name: "Accordion",
    keywords: [
      "music"
    ],
    skins: [
      {
        unified: "1fa97",
        native: "🪗"
      }
    ],
    version: 13
  },
  guitar: {
    id: "guitar",
    name: "Guitar",
    keywords: [
      "music",
      "instrument"
    ],
    skins: [
      {
        unified: "1f3b8",
        native: "🎸"
      }
    ],
    version: 1
  },
  musical_keyboard: {
    id: "musical_keyboard",
    name: "Musical Keyboard",
    keywords: [
      "piano",
      "instrument",
      "compose"
    ],
    skins: [
      {
        unified: "1f3b9",
        native: "🎹"
      }
    ],
    version: 1
  },
  trumpet: {
    id: "trumpet",
    name: "Trumpet",
    keywords: [
      "music",
      "brass"
    ],
    skins: [
      {
        unified: "1f3ba",
        native: "🎺"
      }
    ],
    version: 1
  },
  violin: {
    id: "violin",
    name: "Violin",
    keywords: [
      "music",
      "instrument",
      "orchestra",
      "symphony"
    ],
    skins: [
      {
        unified: "1f3bb",
        native: "🎻"
      }
    ],
    version: 1
  },
  banjo: {
    id: "banjo",
    name: "Banjo",
    keywords: [
      "music",
      "instructment"
    ],
    skins: [
      {
        unified: "1fa95",
        native: "🪕"
      }
    ],
    version: 12
  },
  drum_with_drumsticks: {
    id: "drum_with_drumsticks",
    name: "Drum",
    keywords: [
      "with",
      "drumsticks",
      "music",
      "instrument",
      "snare"
    ],
    skins: [
      {
        unified: "1f941",
        native: "🥁"
      }
    ],
    version: 3
  },
  long_drum: {
    id: "long_drum",
    name: "Long Drum",
    keywords: [
      "music"
    ],
    skins: [
      {
        unified: "1fa98",
        native: "🪘"
      }
    ],
    version: 13
  },
  maracas: {
    id: "maracas",
    name: "Maracas",
    keywords: [
      "music",
      "instrument",
      "percussion"
    ],
    skins: [
      {
        unified: "1fa87",
        native: "🪇"
      }
    ],
    version: 15
  },
  flute: {
    id: "flute",
    name: "Flute",
    keywords: [
      "bamboo",
      "music",
      "instrument",
      "pied",
      "piper"
    ],
    skins: [
      {
        unified: "1fa88",
        native: "🪈"
      }
    ],
    version: 15
  },
  iphone: {
    id: "iphone",
    name: "Mobile Phone",
    keywords: [
      "iphone",
      "technology",
      "apple",
      "gadgets",
      "dial"
    ],
    skins: [
      {
        unified: "1f4f1",
        native: "📱"
      }
    ],
    version: 1
  },
  calling: {
    id: "calling",
    name: "Mobile Phone with Arrow",
    keywords: [
      "calling",
      "iphone",
      "incoming"
    ],
    skins: [
      {
        unified: "1f4f2",
        native: "📲"
      }
    ],
    version: 1
  },
  phone: {
    id: "phone",
    name: "Telephone",
    keywords: [
      "phone",
      "technology",
      "communication",
      "dial"
    ],
    skins: [
      {
        unified: "260e-fe0f",
        native: "☎️"
      }
    ],
    version: 1
  },
  telephone_receiver: {
    id: "telephone_receiver",
    name: "Telephone Receiver",
    keywords: [
      "technology",
      "communication",
      "dial"
    ],
    skins: [
      {
        unified: "1f4de",
        native: "📞"
      }
    ],
    version: 1
  },
  pager: {
    id: "pager",
    name: "Pager",
    keywords: [
      "bbcall",
      "oldschool",
      "90s"
    ],
    skins: [
      {
        unified: "1f4df",
        native: "📟"
      }
    ],
    version: 1
  },
  fax: {
    id: "fax",
    name: "Fax Machine",
    keywords: [
      "communication",
      "technology"
    ],
    skins: [
      {
        unified: "1f4e0",
        native: "📠"
      }
    ],
    version: 1
  },
  battery: {
    id: "battery",
    name: "Battery",
    keywords: [
      "power",
      "energy",
      "sustain"
    ],
    skins: [
      {
        unified: "1f50b",
        native: "🔋"
      }
    ],
    version: 1
  },
  low_battery: {
    id: "low_battery",
    name: "Low Battery",
    keywords: [
      "drained",
      "dead"
    ],
    skins: [
      {
        unified: "1faab",
        native: "🪫"
      }
    ],
    version: 14
  },
  electric_plug: {
    id: "electric_plug",
    name: "Electric Plug",
    keywords: [
      "charger",
      "power"
    ],
    skins: [
      {
        unified: "1f50c",
        native: "🔌"
      }
    ],
    version: 1
  },
  computer: {
    id: "computer",
    name: "Laptop",
    keywords: [
      "computer",
      "technology",
      "screen",
      "display",
      "monitor"
    ],
    skins: [
      {
        unified: "1f4bb",
        native: "💻"
      }
    ],
    version: 1
  },
  desktop_computer: {
    id: "desktop_computer",
    name: "Desktop Computer",
    keywords: [
      "technology",
      "computing",
      "screen"
    ],
    skins: [
      {
        unified: "1f5a5-fe0f",
        native: "🖥️"
      }
    ],
    version: 1
  },
  printer: {
    id: "printer",
    name: "Printer",
    keywords: [
      "paper",
      "ink"
    ],
    skins: [
      {
        unified: "1f5a8-fe0f",
        native: "🖨️"
      }
    ],
    version: 1
  },
  keyboard: {
    id: "keyboard",
    name: "Keyboard",
    keywords: [
      "technology",
      "computer",
      "type",
      "input",
      "text"
    ],
    skins: [
      {
        unified: "2328-fe0f",
        native: "⌨️"
      }
    ],
    version: 1
  },
  three_button_mouse: {
    id: "three_button_mouse",
    name: "Computer Mouse",
    keywords: [
      "three",
      "button",
      "click"
    ],
    skins: [
      {
        unified: "1f5b1-fe0f",
        native: "🖱️"
      }
    ],
    version: 1
  },
  trackball: {
    id: "trackball",
    name: "Trackball",
    keywords: [
      "technology",
      "trackpad"
    ],
    skins: [
      {
        unified: "1f5b2-fe0f",
        native: "🖲️"
      }
    ],
    version: 1
  },
  minidisc: {
    id: "minidisc",
    name: "Minidisc",
    keywords: [
      "computer",
      "disk",
      "technology",
      "record",
      "data",
      "90s"
    ],
    skins: [
      {
        unified: "1f4bd",
        native: "💽"
      }
    ],
    version: 1
  },
  floppy_disk: {
    id: "floppy_disk",
    name: "Floppy Disk",
    keywords: [
      "oldschool",
      "technology",
      "save",
      "90s",
      "80s"
    ],
    skins: [
      {
        unified: "1f4be",
        native: "💾"
      }
    ],
    version: 1
  },
  cd: {
    id: "cd",
    name: "Optical Disc",
    keywords: [
      "cd",
      "disk",
      "technology",
      "dvd",
      "90s"
    ],
    skins: [
      {
        unified: "1f4bf",
        native: "💿"
      }
    ],
    version: 1
  },
  dvd: {
    id: "dvd",
    name: "Dvd",
    keywords: [
      "cd",
      "disk",
      "disc"
    ],
    skins: [
      {
        unified: "1f4c0",
        native: "📀"
      }
    ],
    version: 1
  },
  abacus: {
    id: "abacus",
    name: "Abacus",
    keywords: [
      "calculation"
    ],
    skins: [
      {
        unified: "1f9ee",
        native: "🧮"
      }
    ],
    version: 11
  },
  movie_camera: {
    id: "movie_camera",
    name: "Movie Camera",
    keywords: [
      "film",
      "record"
    ],
    skins: [
      {
        unified: "1f3a5",
        native: "🎥"
      }
    ],
    version: 1
  },
  film_frames: {
    id: "film_frames",
    name: "Film Frames",
    keywords: [
      "movie"
    ],
    skins: [
      {
        unified: "1f39e-fe0f",
        native: "🎞️"
      }
    ],
    version: 1
  },
  film_projector: {
    id: "film_projector",
    name: "Film Projector",
    keywords: [
      "video",
      "tape",
      "record",
      "movie"
    ],
    skins: [
      {
        unified: "1f4fd-fe0f",
        native: "📽️"
      }
    ],
    version: 1
  },
  clapper: {
    id: "clapper",
    name: "Clapper Board",
    keywords: [
      "movie",
      "film",
      "record"
    ],
    skins: [
      {
        unified: "1f3ac",
        native: "🎬"
      }
    ],
    version: 1
  },
  tv: {
    id: "tv",
    name: "Television",
    keywords: [
      "tv",
      "technology",
      "program",
      "oldschool",
      "show"
    ],
    skins: [
      {
        unified: "1f4fa",
        native: "📺"
      }
    ],
    version: 1
  },
  camera: {
    id: "camera",
    name: "Camera",
    keywords: [
      "gadgets",
      "photography"
    ],
    skins: [
      {
        unified: "1f4f7",
        native: "📷"
      }
    ],
    version: 1
  },
  camera_with_flash: {
    id: "camera_with_flash",
    name: "Camera with Flash",
    keywords: [
      "photography",
      "gadgets"
    ],
    skins: [
      {
        unified: "1f4f8",
        native: "📸"
      }
    ],
    version: 1
  },
  video_camera: {
    id: "video_camera",
    name: "Video Camera",
    keywords: [
      "film",
      "record"
    ],
    skins: [
      {
        unified: "1f4f9",
        native: "📹"
      }
    ],
    version: 1
  },
  vhs: {
    id: "vhs",
    name: "Videocassette",
    keywords: [
      "vhs",
      "record",
      "video",
      "oldschool",
      "90s",
      "80s"
    ],
    skins: [
      {
        unified: "1f4fc",
        native: "📼"
      }
    ],
    version: 1
  },
  mag: {
    id: "mag",
    name: "Magnifying Glass Tilted Left",
    keywords: [
      "mag",
      "search",
      "zoom",
      "find",
      "detective"
    ],
    skins: [
      {
        unified: "1f50d",
        native: "🔍"
      }
    ],
    version: 1
  },
  mag_right: {
    id: "mag_right",
    name: "Magnifying Glass Tilted Right",
    keywords: [
      "mag",
      "search",
      "zoom",
      "find",
      "detective"
    ],
    skins: [
      {
        unified: "1f50e",
        native: "🔎"
      }
    ],
    version: 1
  },
  candle: {
    id: "candle",
    name: "Candle",
    keywords: [
      "fire",
      "wax"
    ],
    skins: [
      {
        unified: "1f56f-fe0f",
        native: "🕯️"
      }
    ],
    version: 1
  },
  bulb: {
    id: "bulb",
    name: "Light Bulb",
    keywords: [
      "electricity",
      "idea"
    ],
    skins: [
      {
        unified: "1f4a1",
        native: "💡"
      }
    ],
    version: 1
  },
  flashlight: {
    id: "flashlight",
    name: "Flashlight",
    keywords: [
      "dark",
      "camping",
      "sight",
      "night"
    ],
    skins: [
      {
        unified: "1f526",
        native: "🔦"
      }
    ],
    version: 1
  },
  izakaya_lantern: {
    id: "izakaya_lantern",
    name: "Izakaya Lantern",
    keywords: [
      "red",
      "paper",
      "light",
      "halloween",
      "spooky"
    ],
    skins: [
      {
        unified: "1f3ee",
        native: "🏮"
      }
    ],
    version: 1
  },
  diya_lamp: {
    id: "diya_lamp",
    name: "Diya Lamp",
    keywords: [
      "lighting"
    ],
    skins: [
      {
        unified: "1fa94",
        native: "🪔"
      }
    ],
    version: 12
  },
  notebook_with_decorative_cover: {
    id: "notebook_with_decorative_cover",
    name: "Notebook with Decorative Cover",
    keywords: [
      "classroom",
      "notes",
      "record",
      "paper",
      "study"
    ],
    skins: [
      {
        unified: "1f4d4",
        native: "📔"
      }
    ],
    version: 1
  },
  closed_book: {
    id: "closed_book",
    name: "Closed Book",
    keywords: [
      "read",
      "library",
      "knowledge",
      "textbook",
      "learn"
    ],
    skins: [
      {
        unified: "1f4d5",
        native: "📕"
      }
    ],
    version: 1
  },
  book: {
    id: "book",
    name: "Open Book",
    keywords: [
      "read",
      "library",
      "knowledge",
      "literature",
      "learn",
      "study"
    ],
    skins: [
      {
        unified: "1f4d6",
        native: "📖"
      }
    ],
    version: 1
  },
  green_book: {
    id: "green_book",
    name: "Green Book",
    keywords: [
      "read",
      "library",
      "knowledge",
      "study"
    ],
    skins: [
      {
        unified: "1f4d7",
        native: "📗"
      }
    ],
    version: 1
  },
  blue_book: {
    id: "blue_book",
    name: "Blue Book",
    keywords: [
      "read",
      "library",
      "knowledge",
      "learn",
      "study"
    ],
    skins: [
      {
        unified: "1f4d8",
        native: "📘"
      }
    ],
    version: 1
  },
  orange_book: {
    id: "orange_book",
    name: "Orange Book",
    keywords: [
      "read",
      "library",
      "knowledge",
      "textbook",
      "study"
    ],
    skins: [
      {
        unified: "1f4d9",
        native: "📙"
      }
    ],
    version: 1
  },
  books: {
    id: "books",
    name: "Books",
    keywords: [
      "literature",
      "library",
      "study"
    ],
    skins: [
      {
        unified: "1f4da",
        native: "📚"
      }
    ],
    version: 1
  },
  notebook: {
    id: "notebook",
    name: "Notebook",
    keywords: [
      "stationery",
      "record",
      "notes",
      "paper",
      "study"
    ],
    skins: [
      {
        unified: "1f4d3",
        native: "📓"
      }
    ],
    version: 1
  },
  ledger: {
    id: "ledger",
    name: "Ledger",
    keywords: [
      "notes",
      "paper"
    ],
    skins: [
      {
        unified: "1f4d2",
        native: "📒"
      }
    ],
    version: 1
  },
  page_with_curl: {
    id: "page_with_curl",
    name: "Page with Curl",
    keywords: [
      "documents",
      "office",
      "paper"
    ],
    skins: [
      {
        unified: "1f4c3",
        native: "📃"
      }
    ],
    version: 1
  },
  scroll: {
    id: "scroll",
    name: "Scroll",
    keywords: [
      "documents",
      "ancient",
      "history",
      "paper"
    ],
    skins: [
      {
        unified: "1f4dc",
        native: "📜"
      }
    ],
    version: 1
  },
  page_facing_up: {
    id: "page_facing_up",
    name: "Page Facing Up",
    keywords: [
      "documents",
      "office",
      "paper",
      "information"
    ],
    skins: [
      {
        unified: "1f4c4",
        native: "📄"
      }
    ],
    version: 1
  },
  newspaper: {
    id: "newspaper",
    name: "Newspaper",
    keywords: [
      "press",
      "headline"
    ],
    skins: [
      {
        unified: "1f4f0",
        native: "📰"
      }
    ],
    version: 1
  },
  rolled_up_newspaper: {
    id: "rolled_up_newspaper",
    name: "Rolled-Up Newspaper",
    keywords: [
      "rolled",
      "up",
      "press",
      "headline"
    ],
    skins: [
      {
        unified: "1f5de-fe0f",
        native: "🗞️"
      }
    ],
    version: 1
  },
  bookmark_tabs: {
    id: "bookmark_tabs",
    name: "Bookmark Tabs",
    keywords: [
      "favorite",
      "save",
      "order",
      "tidy"
    ],
    skins: [
      {
        unified: "1f4d1",
        native: "📑"
      }
    ],
    version: 1
  },
  bookmark: {
    id: "bookmark",
    name: "Bookmark",
    keywords: [
      "favorite",
      "label",
      "save"
    ],
    skins: [
      {
        unified: "1f516",
        native: "🔖"
      }
    ],
    version: 1
  },
  label: {
    id: "label",
    name: "Label",
    keywords: [
      "sale",
      "tag"
    ],
    skins: [
      {
        unified: "1f3f7-fe0f",
        native: "🏷️"
      }
    ],
    version: 1
  },
  moneybag: {
    id: "moneybag",
    name: "Money Bag",
    keywords: [
      "moneybag",
      "dollar",
      "payment",
      "coins",
      "sale"
    ],
    skins: [
      {
        unified: "1f4b0",
        native: "💰"
      }
    ],
    version: 1
  },
  coin: {
    id: "coin",
    name: "Coin",
    keywords: [
      "money",
      "currency"
    ],
    skins: [
      {
        unified: "1fa99",
        native: "🪙"
      }
    ],
    version: 13
  },
  yen: {
    id: "yen",
    name: "Yen Banknote",
    keywords: [
      "money",
      "sales",
      "japanese",
      "dollar",
      "currency"
    ],
    skins: [
      {
        unified: "1f4b4",
        native: "💴"
      }
    ],
    version: 1
  },
  dollar: {
    id: "dollar",
    name: "Dollar Banknote",
    keywords: [
      "money",
      "sales",
      "bill",
      "currency"
    ],
    skins: [
      {
        unified: "1f4b5",
        native: "💵"
      }
    ],
    version: 1
  },
  euro: {
    id: "euro",
    name: "Euro Banknote",
    keywords: [
      "money",
      "sales",
      "dollar",
      "currency"
    ],
    skins: [
      {
        unified: "1f4b6",
        native: "💶"
      }
    ],
    version: 1
  },
  pound: {
    id: "pound",
    name: "Pound Banknote",
    keywords: [
      "british",
      "sterling",
      "money",
      "sales",
      "bills",
      "uk",
      "england",
      "currency"
    ],
    skins: [
      {
        unified: "1f4b7",
        native: "💷"
      }
    ],
    version: 1
  },
  money_with_wings: {
    id: "money_with_wings",
    name: "Money with Wings",
    keywords: [
      "dollar",
      "bills",
      "payment",
      "sale"
    ],
    skins: [
      {
        unified: "1f4b8",
        native: "💸"
      }
    ],
    version: 1
  },
  credit_card: {
    id: "credit_card",
    name: "Credit Card",
    keywords: [
      "money",
      "sales",
      "dollar",
      "bill",
      "payment",
      "shopping"
    ],
    skins: [
      {
        unified: "1f4b3",
        native: "💳"
      }
    ],
    version: 1
  },
  receipt: {
    id: "receipt",
    name: "Receipt",
    keywords: [
      "accounting",
      "expenses"
    ],
    skins: [
      {
        unified: "1f9fe",
        native: "🧾"
      }
    ],
    version: 11
  },
  chart: {
    id: "chart",
    name: "Chart Increasing with Yen",
    keywords: [
      "green",
      "square",
      "graph",
      "presentation",
      "stats"
    ],
    skins: [
      {
        unified: "1f4b9",
        native: "💹"
      }
    ],
    version: 1
  },
  email: {
    id: "email",
    name: "Envelope",
    keywords: [
      "email",
      "letter",
      "postal",
      "inbox",
      "communication"
    ],
    skins: [
      {
        unified: "2709-fe0f",
        native: "✉️"
      }
    ],
    version: 1
  },
  "e-mail": {
    id: "e-mail",
    name: "E-Mail",
    keywords: [
      "e",
      "mail",
      "communication",
      "inbox"
    ],
    skins: [
      {
        unified: "1f4e7",
        native: "📧"
      }
    ],
    version: 1
  },
  incoming_envelope: {
    id: "incoming_envelope",
    name: "Incoming Envelope",
    keywords: [
      "email",
      "inbox"
    ],
    skins: [
      {
        unified: "1f4e8",
        native: "📨"
      }
    ],
    version: 1
  },
  envelope_with_arrow: {
    id: "envelope_with_arrow",
    name: "Envelope with Arrow",
    keywords: [
      "email",
      "communication"
    ],
    skins: [
      {
        unified: "1f4e9",
        native: "📩"
      }
    ],
    version: 1
  },
  outbox_tray: {
    id: "outbox_tray",
    name: "Outbox Tray",
    keywords: [
      "inbox",
      "email"
    ],
    skins: [
      {
        unified: "1f4e4",
        native: "📤"
      }
    ],
    version: 1
  },
  inbox_tray: {
    id: "inbox_tray",
    name: "Inbox Tray",
    keywords: [
      "email",
      "documents"
    ],
    skins: [
      {
        unified: "1f4e5",
        native: "📥"
      }
    ],
    version: 1
  },
  package: {
    id: "package",
    name: "Package",
    keywords: [
      "mail",
      "gift",
      "cardboard",
      "box",
      "moving"
    ],
    skins: [
      {
        unified: "1f4e6",
        native: "📦"
      }
    ],
    version: 1
  },
  mailbox: {
    id: "mailbox",
    name: "Closed Mailbox with Raised Flag",
    keywords: [
      "email",
      "inbox",
      "communication"
    ],
    skins: [
      {
        unified: "1f4eb",
        native: "📫"
      }
    ],
    version: 1
  },
  mailbox_closed: {
    id: "mailbox_closed",
    name: "Closed Mailbox with Lowered Flag",
    keywords: [
      "email",
      "communication",
      "inbox"
    ],
    skins: [
      {
        unified: "1f4ea",
        native: "📪"
      }
    ],
    version: 1
  },
  mailbox_with_mail: {
    id: "mailbox_with_mail",
    name: "Open Mailbox with Raised Flag",
    keywords: [
      "mail",
      "email",
      "inbox",
      "communication"
    ],
    skins: [
      {
        unified: "1f4ec",
        native: "📬"
      }
    ],
    version: 1
  },
  mailbox_with_no_mail: {
    id: "mailbox_with_no_mail",
    name: "Open Mailbox with Lowered Flag",
    keywords: [
      "no",
      "mail",
      "email",
      "inbox"
    ],
    skins: [
      {
        unified: "1f4ed",
        native: "📭"
      }
    ],
    version: 1
  },
  postbox: {
    id: "postbox",
    name: "Postbox",
    keywords: [
      "email",
      "letter",
      "envelope"
    ],
    skins: [
      {
        unified: "1f4ee",
        native: "📮"
      }
    ],
    version: 1
  },
  ballot_box_with_ballot: {
    id: "ballot_box_with_ballot",
    name: "Ballot Box with Ballot",
    keywords: [
      "election",
      "vote"
    ],
    skins: [
      {
        unified: "1f5f3-fe0f",
        native: "🗳️"
      }
    ],
    version: 1
  },
  pencil2: {
    id: "pencil2",
    name: "Pencil",
    keywords: [
      "pencil2",
      "stationery",
      "write",
      "paper",
      "writing",
      "school",
      "study"
    ],
    skins: [
      {
        unified: "270f-fe0f",
        native: "✏️"
      }
    ],
    version: 1
  },
  black_nib: {
    id: "black_nib",
    name: "Black Nib",
    keywords: [
      "pen",
      "stationery",
      "writing",
      "write"
    ],
    skins: [
      {
        unified: "2712-fe0f",
        native: "✒️"
      }
    ],
    version: 1
  },
  lower_left_fountain_pen: {
    id: "lower_left_fountain_pen",
    name: "Fountain Pen",
    keywords: [
      "lower",
      "left",
      "stationery",
      "writing",
      "write"
    ],
    skins: [
      {
        unified: "1f58b-fe0f",
        native: "🖋️"
      }
    ],
    version: 1
  },
  lower_left_ballpoint_pen: {
    id: "lower_left_ballpoint_pen",
    name: "Pen",
    keywords: [
      "lower",
      "left",
      "ballpoint",
      "stationery",
      "writing",
      "write"
    ],
    skins: [
      {
        unified: "1f58a-fe0f",
        native: "🖊️"
      }
    ],
    version: 1
  },
  lower_left_paintbrush: {
    id: "lower_left_paintbrush",
    name: "Paintbrush",
    keywords: [
      "lower",
      "left",
      "drawing",
      "creativity",
      "art"
    ],
    skins: [
      {
        unified: "1f58c-fe0f",
        native: "🖌️"
      }
    ],
    version: 1
  },
  lower_left_crayon: {
    id: "lower_left_crayon",
    name: "Crayon",
    keywords: [
      "lower",
      "left",
      "drawing",
      "creativity"
    ],
    skins: [
      {
        unified: "1f58d-fe0f",
        native: "🖍️"
      }
    ],
    version: 1
  },
  memo: {
    id: "memo",
    name: "Memo",
    keywords: [
      "pencil",
      "write",
      "documents",
      "stationery",
      "paper",
      "writing",
      "legal",
      "exam",
      "quiz",
      "test",
      "study",
      "compose"
    ],
    skins: [
      {
        unified: "1f4dd",
        native: "📝"
      }
    ],
    version: 1
  },
  briefcase: {
    id: "briefcase",
    name: "Briefcase",
    keywords: [
      "business",
      "documents",
      "work",
      "law",
      "legal",
      "job",
      "career"
    ],
    skins: [
      {
        unified: "1f4bc",
        native: "💼"
      }
    ],
    version: 1
  },
  file_folder: {
    id: "file_folder",
    name: "File Folder",
    keywords: [
      "documents",
      "business",
      "office"
    ],
    skins: [
      {
        unified: "1f4c1",
        native: "📁"
      }
    ],
    version: 1
  },
  open_file_folder: {
    id: "open_file_folder",
    name: "Open File Folder",
    keywords: [
      "documents",
      "load"
    ],
    skins: [
      {
        unified: "1f4c2",
        native: "📂"
      }
    ],
    version: 1
  },
  card_index_dividers: {
    id: "card_index_dividers",
    name: "Card Index Dividers",
    keywords: [
      "organizing",
      "business",
      "stationery"
    ],
    skins: [
      {
        unified: "1f5c2-fe0f",
        native: "🗂️"
      }
    ],
    version: 1
  },
  date: {
    id: "date",
    name: "Calendar",
    keywords: [
      "date",
      "schedule"
    ],
    skins: [
      {
        unified: "1f4c5",
        native: "📅"
      }
    ],
    version: 1
  },
  calendar: {
    id: "calendar",
    name: "Tear-off Calendar",
    keywords: [
      "tear",
      "off",
      "schedule",
      "date",
      "planning"
    ],
    skins: [
      {
        unified: "1f4c6",
        native: "📆"
      }
    ],
    version: 1
  },
  spiral_note_pad: {
    id: "spiral_note_pad",
    name: "Spiral Notepad",
    keywords: [
      "note",
      "pad",
      "memo",
      "stationery"
    ],
    skins: [
      {
        unified: "1f5d2-fe0f",
        native: "🗒️"
      }
    ],
    version: 1
  },
  spiral_calendar_pad: {
    id: "spiral_calendar_pad",
    name: "Spiral Calendar",
    keywords: [
      "pad",
      "date",
      "schedule",
      "planning"
    ],
    skins: [
      {
        unified: "1f5d3-fe0f",
        native: "🗓️"
      }
    ],
    version: 1
  },
  card_index: {
    id: "card_index",
    name: "Card Index",
    keywords: [
      "business",
      "stationery"
    ],
    skins: [
      {
        unified: "1f4c7",
        native: "📇"
      }
    ],
    version: 1
  },
  chart_with_upwards_trend: {
    id: "chart_with_upwards_trend",
    name: "Chart Increasing",
    keywords: [
      "with",
      "upwards",
      "trend",
      "graph",
      "presentation",
      "stats",
      "recovery",
      "business",
      "economics",
      "money",
      "sales",
      "good",
      "success"
    ],
    skins: [
      {
        unified: "1f4c8",
        native: "📈"
      }
    ],
    version: 1
  },
  chart_with_downwards_trend: {
    id: "chart_with_downwards_trend",
    name: "Chart Decreasing",
    keywords: [
      "with",
      "downwards",
      "trend",
      "graph",
      "presentation",
      "stats",
      "recession",
      "business",
      "economics",
      "money",
      "sales",
      "bad",
      "failure"
    ],
    skins: [
      {
        unified: "1f4c9",
        native: "📉"
      }
    ],
    version: 1
  },
  bar_chart: {
    id: "bar_chart",
    name: "Bar Chart",
    keywords: [
      "graph",
      "presentation",
      "stats"
    ],
    skins: [
      {
        unified: "1f4ca",
        native: "📊"
      }
    ],
    version: 1
  },
  clipboard: {
    id: "clipboard",
    name: "Clipboard",
    keywords: [
      "stationery",
      "documents"
    ],
    skins: [
      {
        unified: "1f4cb",
        native: "📋"
      }
    ],
    version: 1
  },
  pushpin: {
    id: "pushpin",
    name: "Pushpin",
    keywords: [
      "stationery",
      "mark",
      "here"
    ],
    skins: [
      {
        unified: "1f4cc",
        native: "📌"
      }
    ],
    version: 1
  },
  round_pushpin: {
    id: "round_pushpin",
    name: "Round Pushpin",
    keywords: [
      "stationery",
      "location",
      "map",
      "here"
    ],
    skins: [
      {
        unified: "1f4cd",
        native: "📍"
      }
    ],
    version: 1
  },
  paperclip: {
    id: "paperclip",
    name: "Paperclip",
    keywords: [
      "documents",
      "stationery"
    ],
    skins: [
      {
        unified: "1f4ce",
        native: "📎"
      }
    ],
    version: 1
  },
  linked_paperclips: {
    id: "linked_paperclips",
    name: "Linked Paperclips",
    keywords: [
      "documents",
      "stationery"
    ],
    skins: [
      {
        unified: "1f587-fe0f",
        native: "🖇️"
      }
    ],
    version: 1
  },
  straight_ruler: {
    id: "straight_ruler",
    name: "Straight Ruler",
    keywords: [
      "stationery",
      "calculate",
      "length",
      "math",
      "school",
      "drawing",
      "architect",
      "sketch"
    ],
    skins: [
      {
        unified: "1f4cf",
        native: "📏"
      }
    ],
    version: 1
  },
  triangular_ruler: {
    id: "triangular_ruler",
    name: "Triangular Ruler",
    keywords: [
      "stationery",
      "math",
      "architect",
      "sketch"
    ],
    skins: [
      {
        unified: "1f4d0",
        native: "📐"
      }
    ],
    version: 1
  },
  scissors: {
    id: "scissors",
    name: "Scissors",
    keywords: [
      "stationery",
      "cut"
    ],
    skins: [
      {
        unified: "2702-fe0f",
        native: "✂️"
      }
    ],
    version: 1
  },
  card_file_box: {
    id: "card_file_box",
    name: "Card File Box",
    keywords: [
      "business",
      "stationery"
    ],
    skins: [
      {
        unified: "1f5c3-fe0f",
        native: "🗃️"
      }
    ],
    version: 1
  },
  file_cabinet: {
    id: "file_cabinet",
    name: "File Cabinet",
    keywords: [
      "filing",
      "organizing"
    ],
    skins: [
      {
        unified: "1f5c4-fe0f",
        native: "🗄️"
      }
    ],
    version: 1
  },
  wastebasket: {
    id: "wastebasket",
    name: "Wastebasket",
    keywords: [
      "bin",
      "trash",
      "rubbish",
      "garbage",
      "toss"
    ],
    skins: [
      {
        unified: "1f5d1-fe0f",
        native: "🗑️"
      }
    ],
    version: 1
  },
  lock: {
    id: "lock",
    name: "Lock",
    keywords: [
      "locked",
      "security",
      "password",
      "padlock"
    ],
    skins: [
      {
        unified: "1f512",
        native: "🔒"
      }
    ],
    version: 1
  },
  unlock: {
    id: "unlock",
    name: "Unlocked",
    keywords: [
      "unlock",
      "privacy",
      "security"
    ],
    skins: [
      {
        unified: "1f513",
        native: "🔓"
      }
    ],
    version: 1
  },
  lock_with_ink_pen: {
    id: "lock_with_ink_pen",
    name: "Locked with Pen",
    keywords: [
      "lock",
      "ink",
      "security",
      "secret"
    ],
    skins: [
      {
        unified: "1f50f",
        native: "🔏"
      }
    ],
    version: 1
  },
  closed_lock_with_key: {
    id: "closed_lock_with_key",
    name: "Locked with Key",
    keywords: [
      "closed",
      "lock",
      "security",
      "privacy"
    ],
    skins: [
      {
        unified: "1f510",
        native: "🔐"
      }
    ],
    version: 1
  },
  key: {
    id: "key",
    name: "Key",
    keywords: [
      "lock",
      "door",
      "password"
    ],
    skins: [
      {
        unified: "1f511",
        native: "🔑"
      }
    ],
    version: 1
  },
  old_key: {
    id: "old_key",
    name: "Old Key",
    keywords: [
      "lock",
      "door",
      "password"
    ],
    skins: [
      {
        unified: "1f5dd-fe0f",
        native: "🗝️"
      }
    ],
    version: 1
  },
  hammer: {
    id: "hammer",
    name: "Hammer",
    keywords: [
      "tools",
      "build",
      "create"
    ],
    skins: [
      {
        unified: "1f528",
        native: "🔨"
      }
    ],
    version: 1
  },
  axe: {
    id: "axe",
    name: "Axe",
    keywords: [
      "tool",
      "chop",
      "cut"
    ],
    skins: [
      {
        unified: "1fa93",
        native: "🪓"
      }
    ],
    version: 12
  },
  pick: {
    id: "pick",
    name: "Pick",
    keywords: [
      "tools",
      "dig"
    ],
    skins: [
      {
        unified: "26cf-fe0f",
        native: "⛏️"
      }
    ],
    version: 1
  },
  hammer_and_pick: {
    id: "hammer_and_pick",
    name: "Hammer and Pick",
    keywords: [
      "tools",
      "build",
      "create"
    ],
    skins: [
      {
        unified: "2692-fe0f",
        native: "⚒️"
      }
    ],
    version: 1
  },
  hammer_and_wrench: {
    id: "hammer_and_wrench",
    name: "Hammer and Wrench",
    keywords: [
      "tools",
      "build",
      "create"
    ],
    skins: [
      {
        unified: "1f6e0-fe0f",
        native: "🛠️"
      }
    ],
    version: 1
  },
  dagger_knife: {
    id: "dagger_knife",
    name: "Dagger",
    keywords: [
      "knife",
      "weapon"
    ],
    skins: [
      {
        unified: "1f5e1-fe0f",
        native: "🗡️"
      }
    ],
    version: 1
  },
  crossed_swords: {
    id: "crossed_swords",
    name: "Crossed Swords",
    keywords: [
      "weapon"
    ],
    skins: [
      {
        unified: "2694-fe0f",
        native: "⚔️"
      }
    ],
    version: 1
  },
  bomb: {
    id: "bomb",
    name: "Bomb",
    keywords: [
      "boom",
      "explode",
      "explosion",
      "terrorism"
    ],
    skins: [
      {
        unified: "1f4a3",
        native: "💣"
      }
    ],
    version: 1
  },
  boomerang: {
    id: "boomerang",
    name: "Boomerang",
    keywords: [
      "weapon"
    ],
    skins: [
      {
        unified: "1fa83",
        native: "🪃"
      }
    ],
    version: 13
  },
  bow_and_arrow: {
    id: "bow_and_arrow",
    name: "Bow and Arrow",
    keywords: [
      "sports"
    ],
    skins: [
      {
        unified: "1f3f9",
        native: "🏹"
      }
    ],
    version: 1
  },
  shield: {
    id: "shield",
    name: "Shield",
    keywords: [
      "protection",
      "security"
    ],
    skins: [
      {
        unified: "1f6e1-fe0f",
        native: "🛡️"
      }
    ],
    version: 1
  },
  carpentry_saw: {
    id: "carpentry_saw",
    name: "Carpentry Saw",
    keywords: [
      "cut",
      "chop"
    ],
    skins: [
      {
        unified: "1fa9a",
        native: "🪚"
      }
    ],
    version: 13
  },
  wrench: {
    id: "wrench",
    name: "Wrench",
    keywords: [
      "tools",
      "diy",
      "ikea",
      "fix",
      "maintainer"
    ],
    skins: [
      {
        unified: "1f527",
        native: "🔧"
      }
    ],
    version: 1
  },
  screwdriver: {
    id: "screwdriver",
    name: "Screwdriver",
    keywords: [
      "tools"
    ],
    skins: [
      {
        unified: "1fa9b",
        native: "🪛"
      }
    ],
    version: 13
  },
  nut_and_bolt: {
    id: "nut_and_bolt",
    name: "Nut and Bolt",
    keywords: [
      "handy",
      "tools",
      "fix"
    ],
    skins: [
      {
        unified: "1f529",
        native: "🔩"
      }
    ],
    version: 1
  },
  gear: {
    id: "gear",
    name: "Gear",
    keywords: [
      "cog"
    ],
    skins: [
      {
        unified: "2699-fe0f",
        native: "⚙️"
      }
    ],
    version: 1
  },
  compression: {
    id: "compression",
    name: "Clamp",
    keywords: [
      "compression",
      "tool"
    ],
    skins: [
      {
        unified: "1f5dc-fe0f",
        native: "🗜️"
      }
    ],
    version: 1
  },
  scales: {
    id: "scales",
    name: "Balance Scale",
    keywords: [
      "scales",
      "law",
      "fairness",
      "weight"
    ],
    skins: [
      {
        unified: "2696-fe0f",
        native: "⚖️"
      }
    ],
    version: 1
  },
  probing_cane: {
    id: "probing_cane",
    name: "White Cane",
    keywords: [
      "probing",
      "accessibility"
    ],
    skins: [
      {
        unified: "1f9af",
        native: "🦯"
      }
    ],
    version: 12
  },
  link: {
    id: "link",
    name: "Link",
    keywords: [
      "rings",
      "url"
    ],
    skins: [
      {
        unified: "1f517",
        native: "🔗"
      }
    ],
    version: 1
  },
  chains: {
    id: "chains",
    name: "Chains",
    keywords: [
      "lock",
      "arrest"
    ],
    skins: [
      {
        unified: "26d3-fe0f",
        native: "⛓️"
      }
    ],
    version: 1
  },
  hook: {
    id: "hook",
    name: "Hook",
    keywords: [
      "tools"
    ],
    skins: [
      {
        unified: "1fa9d",
        native: "🪝"
      }
    ],
    version: 13
  },
  toolbox: {
    id: "toolbox",
    name: "Toolbox",
    keywords: [
      "tools",
      "diy",
      "fix",
      "maintainer",
      "mechanic"
    ],
    skins: [
      {
        unified: "1f9f0",
        native: "🧰"
      }
    ],
    version: 11
  },
  magnet: {
    id: "magnet",
    name: "Magnet",
    keywords: [
      "attraction",
      "magnetic"
    ],
    skins: [
      {
        unified: "1f9f2",
        native: "🧲"
      }
    ],
    version: 11
  },
  ladder: {
    id: "ladder",
    name: "Ladder",
    keywords: [
      "tools"
    ],
    skins: [
      {
        unified: "1fa9c",
        native: "🪜"
      }
    ],
    version: 13
  },
  alembic: {
    id: "alembic",
    name: "Alembic",
    keywords: [
      "distilling",
      "science",
      "experiment",
      "chemistry"
    ],
    skins: [
      {
        unified: "2697-fe0f",
        native: "⚗️"
      }
    ],
    version: 1
  },
  test_tube: {
    id: "test_tube",
    name: "Test Tube",
    keywords: [
      "chemistry",
      "experiment",
      "lab",
      "science"
    ],
    skins: [
      {
        unified: "1f9ea",
        native: "🧪"
      }
    ],
    version: 11
  },
  petri_dish: {
    id: "petri_dish",
    name: "Petri Dish",
    keywords: [
      "bacteria",
      "biology",
      "culture",
      "lab"
    ],
    skins: [
      {
        unified: "1f9eb",
        native: "🧫"
      }
    ],
    version: 11
  },
  dna: {
    id: "dna",
    name: "Dna",
    keywords: [
      "biologist",
      "genetics",
      "life"
    ],
    skins: [
      {
        unified: "1f9ec",
        native: "🧬"
      }
    ],
    version: 11
  },
  microscope: {
    id: "microscope",
    name: "Microscope",
    keywords: [
      "laboratory",
      "experiment",
      "zoomin",
      "science",
      "study"
    ],
    skins: [
      {
        unified: "1f52c",
        native: "🔬"
      }
    ],
    version: 1
  },
  telescope: {
    id: "telescope",
    name: "Telescope",
    keywords: [
      "stars",
      "space",
      "zoom",
      "science",
      "astronomy"
    ],
    skins: [
      {
        unified: "1f52d",
        native: "🔭"
      }
    ],
    version: 1
  },
  satellite_antenna: {
    id: "satellite_antenna",
    name: "Satellite Antenna",
    keywords: [
      "communication",
      "future",
      "radio",
      "space"
    ],
    skins: [
      {
        unified: "1f4e1",
        native: "📡"
      }
    ],
    version: 1
  },
  syringe: {
    id: "syringe",
    name: "Syringe",
    keywords: [
      "health",
      "hospital",
      "drugs",
      "blood",
      "medicine",
      "needle",
      "doctor",
      "nurse"
    ],
    skins: [
      {
        unified: "1f489",
        native: "💉"
      }
    ],
    version: 1
  },
  drop_of_blood: {
    id: "drop_of_blood",
    name: "Drop of Blood",
    keywords: [
      "period",
      "hurt",
      "harm",
      "wound"
    ],
    skins: [
      {
        unified: "1fa78",
        native: "🩸"
      }
    ],
    version: 12
  },
  pill: {
    id: "pill",
    name: "Pill",
    keywords: [
      "health",
      "medicine",
      "doctor",
      "pharmacy",
      "drug"
    ],
    skins: [
      {
        unified: "1f48a",
        native: "💊"
      }
    ],
    version: 1
  },
  adhesive_bandage: {
    id: "adhesive_bandage",
    name: "Adhesive Bandage",
    keywords: [
      "heal"
    ],
    skins: [
      {
        unified: "1fa79",
        native: "🩹"
      }
    ],
    version: 12
  },
  crutch: {
    id: "crutch",
    name: "Crutch",
    keywords: [
      "accessibility",
      "assist"
    ],
    skins: [
      {
        unified: "1fa7c",
        native: "🩼"
      }
    ],
    version: 14
  },
  stethoscope: {
    id: "stethoscope",
    name: "Stethoscope",
    keywords: [
      "health"
    ],
    skins: [
      {
        unified: "1fa7a",
        native: "🩺"
      }
    ],
    version: 12
  },
  "x-ray": {
    id: "x-ray",
    name: "X-Ray",
    keywords: [
      "x",
      "ray",
      "skeleton",
      "medicine"
    ],
    skins: [
      {
        unified: "1fa7b",
        native: "🩻"
      }
    ],
    version: 14
  },
  door: {
    id: "door",
    name: "Door",
    keywords: [
      "house",
      "entry",
      "exit"
    ],
    skins: [
      {
        unified: "1f6aa",
        native: "🚪"
      }
    ],
    version: 1
  },
  elevator: {
    id: "elevator",
    name: "Elevator",
    keywords: [
      "lift"
    ],
    skins: [
      {
        unified: "1f6d7",
        native: "🛗"
      }
    ],
    version: 13
  },
  mirror: {
    id: "mirror",
    name: "Mirror",
    keywords: [
      "reflection"
    ],
    skins: [
      {
        unified: "1fa9e",
        native: "🪞"
      }
    ],
    version: 13
  },
  window: {
    id: "window",
    name: "Window",
    keywords: [
      "scenery"
    ],
    skins: [
      {
        unified: "1fa9f",
        native: "🪟"
      }
    ],
    version: 13
  },
  bed: {
    id: "bed",
    name: "Bed",
    keywords: [
      "sleep",
      "rest"
    ],
    skins: [
      {
        unified: "1f6cf-fe0f",
        native: "🛏️"
      }
    ],
    version: 1
  },
  couch_and_lamp: {
    id: "couch_and_lamp",
    name: "Couch and Lamp",
    keywords: [
      "read",
      "chill"
    ],
    skins: [
      {
        unified: "1f6cb-fe0f",
        native: "🛋️"
      }
    ],
    version: 1
  },
  chair: {
    id: "chair",
    name: "Chair",
    keywords: [
      "sit",
      "furniture"
    ],
    skins: [
      {
        unified: "1fa91",
        native: "🪑"
      }
    ],
    version: 12
  },
  toilet: {
    id: "toilet",
    name: "Toilet",
    keywords: [
      "restroom",
      "wc",
      "washroom",
      "bathroom",
      "potty"
    ],
    skins: [
      {
        unified: "1f6bd",
        native: "🚽"
      }
    ],
    version: 1
  },
  plunger: {
    id: "plunger",
    name: "Plunger",
    keywords: [
      "toilet"
    ],
    skins: [
      {
        unified: "1faa0",
        native: "🪠"
      }
    ],
    version: 13
  },
  shower: {
    id: "shower",
    name: "Shower",
    keywords: [
      "clean",
      "water",
      "bathroom"
    ],
    skins: [
      {
        unified: "1f6bf",
        native: "🚿"
      }
    ],
    version: 1
  },
  bathtub: {
    id: "bathtub",
    name: "Bathtub",
    keywords: [
      "clean",
      "shower",
      "bathroom"
    ],
    skins: [
      {
        unified: "1f6c1",
        native: "🛁"
      }
    ],
    version: 1
  },
  mouse_trap: {
    id: "mouse_trap",
    name: "Mouse Trap",
    keywords: [
      "cheese"
    ],
    skins: [
      {
        unified: "1faa4",
        native: "🪤"
      }
    ],
    version: 13
  },
  razor: {
    id: "razor",
    name: "Razor",
    keywords: [
      "cut"
    ],
    skins: [
      {
        unified: "1fa92",
        native: "🪒"
      }
    ],
    version: 12
  },
  lotion_bottle: {
    id: "lotion_bottle",
    name: "Lotion Bottle",
    keywords: [
      "moisturizer",
      "sunscreen"
    ],
    skins: [
      {
        unified: "1f9f4",
        native: "🧴"
      }
    ],
    version: 11
  },
  safety_pin: {
    id: "safety_pin",
    name: "Safety Pin",
    keywords: [
      "diaper"
    ],
    skins: [
      {
        unified: "1f9f7",
        native: "🧷"
      }
    ],
    version: 11
  },
  broom: {
    id: "broom",
    name: "Broom",
    keywords: [
      "cleaning",
      "sweeping",
      "witch"
    ],
    skins: [
      {
        unified: "1f9f9",
        native: "🧹"
      }
    ],
    version: 11
  },
  basket: {
    id: "basket",
    name: "Basket",
    keywords: [
      "laundry"
    ],
    skins: [
      {
        unified: "1f9fa",
        native: "🧺"
      }
    ],
    version: 11
  },
  roll_of_paper: {
    id: "roll_of_paper",
    name: "Roll of Paper",
    keywords: [],
    skins: [
      {
        unified: "1f9fb",
        native: "🧻"
      }
    ],
    version: 11
  },
  bucket: {
    id: "bucket",
    name: "Bucket",
    keywords: [
      "water",
      "container"
    ],
    skins: [
      {
        unified: "1faa3",
        native: "🪣"
      }
    ],
    version: 13
  },
  soap: {
    id: "soap",
    name: "Soap",
    keywords: [
      "bar",
      "bathing",
      "cleaning",
      "lather"
    ],
    skins: [
      {
        unified: "1f9fc",
        native: "🧼"
      }
    ],
    version: 11
  },
  bubbles: {
    id: "bubbles",
    name: "Bubbles",
    keywords: [
      "soap",
      "fun",
      "carbonation",
      "sparkling"
    ],
    skins: [
      {
        unified: "1fae7",
        native: "🫧"
      }
    ],
    version: 14
  },
  toothbrush: {
    id: "toothbrush",
    name: "Toothbrush",
    keywords: [
      "hygiene",
      "dental"
    ],
    skins: [
      {
        unified: "1faa5",
        native: "🪥"
      }
    ],
    version: 13
  },
  sponge: {
    id: "sponge",
    name: "Sponge",
    keywords: [
      "absorbing",
      "cleaning",
      "porous"
    ],
    skins: [
      {
        unified: "1f9fd",
        native: "🧽"
      }
    ],
    version: 11
  },
  fire_extinguisher: {
    id: "fire_extinguisher",
    name: "Fire Extinguisher",
    keywords: [
      "quench"
    ],
    skins: [
      {
        unified: "1f9ef",
        native: "🧯"
      }
    ],
    version: 11
  },
  shopping_trolley: {
    id: "shopping_trolley",
    name: "Shopping Cart",
    keywords: [
      "trolley"
    ],
    skins: [
      {
        unified: "1f6d2",
        native: "🛒"
      }
    ],
    version: 3
  },
  smoking: {
    id: "smoking",
    name: "Cigarette",
    keywords: [
      "smoking",
      "kills",
      "tobacco",
      "joint",
      "smoke"
    ],
    skins: [
      {
        unified: "1f6ac",
        native: "🚬"
      }
    ],
    version: 1
  },
  coffin: {
    id: "coffin",
    name: "Coffin",
    keywords: [
      "vampire",
      "dead",
      "die",
      "death",
      "rip",
      "graveyard",
      "cemetery",
      "casket",
      "funeral",
      "box"
    ],
    skins: [
      {
        unified: "26b0-fe0f",
        native: "⚰️"
      }
    ],
    version: 1
  },
  headstone: {
    id: "headstone",
    name: "Headstone",
    keywords: [
      "death",
      "rip",
      "grave"
    ],
    skins: [
      {
        unified: "1faa6",
        native: "🪦"
      }
    ],
    version: 13
  },
  funeral_urn: {
    id: "funeral_urn",
    name: "Funeral Urn",
    keywords: [
      "dead",
      "die",
      "death",
      "rip",
      "ashes"
    ],
    skins: [
      {
        unified: "26b1-fe0f",
        native: "⚱️"
      }
    ],
    version: 1
  },
  nazar_amulet: {
    id: "nazar_amulet",
    name: "Nazar Amulet",
    keywords: [
      "bead",
      "charm"
    ],
    skins: [
      {
        unified: "1f9ff",
        native: "🧿"
      }
    ],
    version: 11
  },
  hamsa: {
    id: "hamsa",
    name: "Hamsa",
    keywords: [
      "religion",
      "protection"
    ],
    skins: [
      {
        unified: "1faac",
        native: "🪬"
      }
    ],
    version: 14
  },
  moyai: {
    id: "moyai",
    name: "Moai",
    keywords: [
      "moyai",
      "rock",
      "easter",
      "island"
    ],
    skins: [
      {
        unified: "1f5ff",
        native: "🗿"
      }
    ],
    version: 1
  },
  placard: {
    id: "placard",
    name: "Placard",
    keywords: [
      "announcement"
    ],
    skins: [
      {
        unified: "1faa7",
        native: "🪧"
      }
    ],
    version: 13
  },
  identification_card: {
    id: "identification_card",
    name: "Identification Card",
    keywords: [
      "document"
    ],
    skins: [
      {
        unified: "1faaa",
        native: "🪪"
      }
    ],
    version: 14
  },
  atm: {
    id: "atm",
    name: "Atm Sign",
    keywords: [
      "money",
      "sales",
      "cash",
      "blue",
      "square",
      "payment",
      "bank"
    ],
    skins: [
      {
        unified: "1f3e7",
        native: "🏧"
      }
    ],
    version: 1
  },
  put_litter_in_its_place: {
    id: "put_litter_in_its_place",
    name: "Litter in Bin Sign",
    keywords: [
      "put",
      "its",
      "place",
      "blue",
      "square",
      "human",
      "info"
    ],
    skins: [
      {
        unified: "1f6ae",
        native: "🚮"
      }
    ],
    version: 1
  },
  potable_water: {
    id: "potable_water",
    name: "Potable Water",
    keywords: [
      "blue",
      "square",
      "liquid",
      "restroom",
      "cleaning",
      "faucet"
    ],
    skins: [
      {
        unified: "1f6b0",
        native: "🚰"
      }
    ],
    version: 1
  },
  wheelchair: {
    id: "wheelchair",
    name: "Wheelchair Symbol",
    keywords: [
      "blue",
      "square",
      "disabled",
      "accessibility"
    ],
    skins: [
      {
        unified: "267f",
        native: "♿"
      }
    ],
    version: 1
  },
  mens: {
    id: "mens",
    name: "Men’s Room",
    keywords: [
      "mens",
      "men",
      "s",
      "toilet",
      "restroom",
      "wc",
      "blue",
      "square",
      "gender",
      "male"
    ],
    skins: [
      {
        unified: "1f6b9",
        native: "🚹"
      }
    ],
    version: 1
  },
  womens: {
    id: "womens",
    name: "Women’s Room",
    keywords: [
      "womens",
      "women",
      "s",
      "purple",
      "square",
      "woman",
      "female",
      "toilet",
      "loo",
      "restroom",
      "gender"
    ],
    skins: [
      {
        unified: "1f6ba",
        native: "🚺"
      }
    ],
    version: 1
  },
  restroom: {
    id: "restroom",
    name: "Restroom",
    keywords: [
      "blue",
      "square",
      "toilet",
      "refresh",
      "wc",
      "gender"
    ],
    skins: [
      {
        unified: "1f6bb",
        native: "🚻"
      }
    ],
    version: 1
  },
  baby_symbol: {
    id: "baby_symbol",
    name: "Baby Symbol",
    keywords: [
      "orange",
      "square",
      "child"
    ],
    skins: [
      {
        unified: "1f6bc",
        native: "🚼"
      }
    ],
    version: 1
  },
  wc: {
    id: "wc",
    name: "Water Closet",
    keywords: [
      "wc",
      "toilet",
      "restroom",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "1f6be",
        native: "🚾"
      }
    ],
    version: 1
  },
  passport_control: {
    id: "passport_control",
    name: "Passport Control",
    keywords: [
      "custom",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "1f6c2",
        native: "🛂"
      }
    ],
    version: 1
  },
  customs: {
    id: "customs",
    name: "Customs",
    keywords: [
      "passport",
      "border",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "1f6c3",
        native: "🛃"
      }
    ],
    version: 1
  },
  baggage_claim: {
    id: "baggage_claim",
    name: "Baggage Claim",
    keywords: [
      "blue",
      "square",
      "airport",
      "transport"
    ],
    skins: [
      {
        unified: "1f6c4",
        native: "🛄"
      }
    ],
    version: 1
  },
  left_luggage: {
    id: "left_luggage",
    name: "Left Luggage",
    keywords: [
      "blue",
      "square",
      "travel"
    ],
    skins: [
      {
        unified: "1f6c5",
        native: "🛅"
      }
    ],
    version: 1
  },
  warning: {
    id: "warning",
    name: "Warning",
    keywords: [
      "exclamation",
      "wip",
      "alert",
      "error",
      "problem",
      "issue"
    ],
    skins: [
      {
        unified: "26a0-fe0f",
        native: "⚠️"
      }
    ],
    version: 1
  },
  children_crossing: {
    id: "children_crossing",
    name: "Children Crossing",
    keywords: [
      "school",
      "warning",
      "danger",
      "sign",
      "driving",
      "yellow",
      "diamond"
    ],
    skins: [
      {
        unified: "1f6b8",
        native: "🚸"
      }
    ],
    version: 1
  },
  no_entry: {
    id: "no_entry",
    name: "No Entry",
    keywords: [
      "limit",
      "security",
      "privacy",
      "bad",
      "denied",
      "stop",
      "circle"
    ],
    skins: [
      {
        unified: "26d4",
        native: "⛔"
      }
    ],
    version: 1
  },
  no_entry_sign: {
    id: "no_entry_sign",
    name: "Prohibited",
    keywords: [
      "no",
      "entry",
      "sign",
      "forbid",
      "stop",
      "limit",
      "denied",
      "disallow",
      "circle"
    ],
    skins: [
      {
        unified: "1f6ab",
        native: "🚫"
      }
    ],
    version: 1
  },
  no_bicycles: {
    id: "no_bicycles",
    name: "No Bicycles",
    keywords: [
      "cyclist",
      "prohibited",
      "circle"
    ],
    skins: [
      {
        unified: "1f6b3",
        native: "🚳"
      }
    ],
    version: 1
  },
  no_smoking: {
    id: "no_smoking",
    name: "No Smoking",
    keywords: [
      "cigarette",
      "blue",
      "square",
      "smell",
      "smoke"
    ],
    skins: [
      {
        unified: "1f6ad",
        native: "🚭"
      }
    ],
    version: 1
  },
  do_not_litter: {
    id: "do_not_litter",
    name: "No Littering",
    keywords: [
      "do",
      "not",
      "litter",
      "trash",
      "bin",
      "garbage",
      "circle"
    ],
    skins: [
      {
        unified: "1f6af",
        native: "🚯"
      }
    ],
    version: 1
  },
  "non-potable_water": {
    id: "non-potable_water",
    name: "Non-Potable Water",
    keywords: [
      "non",
      "potable",
      "drink",
      "faucet",
      "tap",
      "circle"
    ],
    skins: [
      {
        unified: "1f6b1",
        native: "🚱"
      }
    ],
    version: 1
  },
  no_pedestrians: {
    id: "no_pedestrians",
    name: "No Pedestrians",
    keywords: [
      "rules",
      "crossing",
      "walking",
      "circle"
    ],
    skins: [
      {
        unified: "1f6b7",
        native: "🚷"
      }
    ],
    version: 1
  },
  no_mobile_phones: {
    id: "no_mobile_phones",
    name: "No Mobile Phones",
    keywords: [
      "iphone",
      "mute",
      "circle"
    ],
    skins: [
      {
        unified: "1f4f5",
        native: "📵"
      }
    ],
    version: 1
  },
  underage: {
    id: "underage",
    name: "No One Under Eighteen",
    keywords: [
      "underage",
      "18",
      "drink",
      "pub",
      "night",
      "minor",
      "circle"
    ],
    skins: [
      {
        unified: "1f51e",
        native: "🔞"
      }
    ],
    version: 1
  },
  radioactive_sign: {
    id: "radioactive_sign",
    name: "Radioactive",
    keywords: [
      "sign",
      "nuclear",
      "danger"
    ],
    skins: [
      {
        unified: "2622-fe0f",
        native: "☢️"
      }
    ],
    version: 1
  },
  biohazard_sign: {
    id: "biohazard_sign",
    name: "Biohazard",
    keywords: [
      "sign",
      "danger"
    ],
    skins: [
      {
        unified: "2623-fe0f",
        native: "☣️"
      }
    ],
    version: 1
  },
  arrow_up: {
    id: "arrow_up",
    name: "Up Arrow",
    keywords: [
      "blue",
      "square",
      "continue",
      "top",
      "direction"
    ],
    skins: [
      {
        unified: "2b06-fe0f",
        native: "⬆️"
      }
    ],
    version: 1
  },
  arrow_upper_right: {
    id: "arrow_upper_right",
    name: "Up-Right Arrow",
    keywords: [
      "upper",
      "right",
      "up",
      "blue",
      "square",
      "point",
      "direction",
      "diagonal",
      "northeast"
    ],
    skins: [
      {
        unified: "2197-fe0f",
        native: "↗️"
      }
    ],
    version: 1
  },
  arrow_right: {
    id: "arrow_right",
    name: "Right Arrow",
    keywords: [
      "blue",
      "square",
      "next"
    ],
    skins: [
      {
        unified: "27a1-fe0f",
        native: "➡️"
      }
    ],
    version: 1
  },
  arrow_lower_right: {
    id: "arrow_lower_right",
    name: "South East Arrow",
    keywords: [
      "lower",
      "right",
      "down",
      "blue",
      "square",
      "direction",
      "diagonal",
      "southeast"
    ],
    skins: [
      {
        unified: "2198-fe0f",
        native: "↘️"
      }
    ],
    version: 1
  },
  arrow_down: {
    id: "arrow_down",
    name: "Down Arrow",
    keywords: [
      "blue",
      "square",
      "direction",
      "bottom"
    ],
    skins: [
      {
        unified: "2b07-fe0f",
        native: "⬇️"
      }
    ],
    version: 1
  },
  arrow_lower_left: {
    id: "arrow_lower_left",
    name: "Down-Left Arrow",
    keywords: [
      "lower",
      "left",
      "down",
      "blue",
      "square",
      "direction",
      "diagonal",
      "southwest"
    ],
    skins: [
      {
        unified: "2199-fe0f",
        native: "↙️"
      }
    ],
    version: 1
  },
  arrow_left: {
    id: "arrow_left",
    name: "Left Arrow",
    keywords: [
      "blue",
      "square",
      "previous",
      "back"
    ],
    skins: [
      {
        unified: "2b05-fe0f",
        native: "⬅️"
      }
    ],
    version: 1
  },
  arrow_upper_left: {
    id: "arrow_upper_left",
    name: "Up-Left Arrow",
    keywords: [
      "upper",
      "left",
      "up",
      "blue",
      "square",
      "point",
      "direction",
      "diagonal",
      "northwest"
    ],
    skins: [
      {
        unified: "2196-fe0f",
        native: "↖️"
      }
    ],
    version: 1
  },
  arrow_up_down: {
    id: "arrow_up_down",
    name: "Up Down Arrow",
    keywords: [
      "blue",
      "square",
      "direction",
      "way",
      "vertical"
    ],
    skins: [
      {
        unified: "2195-fe0f",
        native: "↕️"
      }
    ],
    version: 1
  },
  left_right_arrow: {
    id: "left_right_arrow",
    name: "Left Right Arrow",
    keywords: [
      "shape",
      "direction",
      "horizontal",
      "sideways"
    ],
    skins: [
      {
        unified: "2194-fe0f",
        native: "↔️"
      }
    ],
    version: 1
  },
  leftwards_arrow_with_hook: {
    id: "leftwards_arrow_with_hook",
    name: "Right Arrow Curving Left",
    keywords: [
      "leftwards",
      "with",
      "hook",
      "back",
      "return",
      "blue",
      "square",
      "undo",
      "enter"
    ],
    skins: [
      {
        unified: "21a9-fe0f",
        native: "↩️"
      }
    ],
    version: 1
  },
  arrow_right_hook: {
    id: "arrow_right_hook",
    name: "Left Arrow Curving Right",
    keywords: [
      "hook",
      "blue",
      "square",
      "return",
      "rotate",
      "direction"
    ],
    skins: [
      {
        unified: "21aa-fe0f",
        native: "↪️"
      }
    ],
    version: 1
  },
  arrow_heading_up: {
    id: "arrow_heading_up",
    name: "Right Arrow Curving Up",
    keywords: [
      "heading",
      "blue",
      "square",
      "direction",
      "top"
    ],
    skins: [
      {
        unified: "2934-fe0f",
        native: "⤴️"
      }
    ],
    version: 1
  },
  arrow_heading_down: {
    id: "arrow_heading_down",
    name: "Right Arrow Curving Down",
    keywords: [
      "heading",
      "blue",
      "square",
      "direction",
      "bottom"
    ],
    skins: [
      {
        unified: "2935-fe0f",
        native: "⤵️"
      }
    ],
    version: 1
  },
  arrows_clockwise: {
    id: "arrows_clockwise",
    name: "Clockwise Vertical Arrows",
    keywords: [
      "sync",
      "cycle",
      "round",
      "repeat"
    ],
    skins: [
      {
        unified: "1f503",
        native: "🔃"
      }
    ],
    version: 1
  },
  arrows_counterclockwise: {
    id: "arrows_counterclockwise",
    name: "Counterclockwise Arrows Button",
    keywords: [
      "blue",
      "square",
      "sync",
      "cycle"
    ],
    skins: [
      {
        unified: "1f504",
        native: "🔄"
      }
    ],
    version: 1
  },
  back: {
    id: "back",
    name: "Back Arrow",
    keywords: [
      "words",
      "return"
    ],
    skins: [
      {
        unified: "1f519",
        native: "🔙"
      }
    ],
    version: 1
  },
  end: {
    id: "end",
    name: "End Arrow",
    keywords: [
      "words"
    ],
    skins: [
      {
        unified: "1f51a",
        native: "🔚"
      }
    ],
    version: 1
  },
  on: {
    id: "on",
    name: "On! Arrow",
    keywords: [
      "on",
      "words"
    ],
    skins: [
      {
        unified: "1f51b",
        native: "🔛"
      }
    ],
    version: 1
  },
  soon: {
    id: "soon",
    name: "Soon Arrow",
    keywords: [
      "words"
    ],
    skins: [
      {
        unified: "1f51c",
        native: "🔜"
      }
    ],
    version: 1
  },
  top: {
    id: "top",
    name: "Top Arrow",
    keywords: [
      "words",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "1f51d",
        native: "🔝"
      }
    ],
    version: 1
  },
  place_of_worship: {
    id: "place_of_worship",
    name: "Place of Worship",
    keywords: [
      "religion",
      "church",
      "temple",
      "prayer"
    ],
    skins: [
      {
        unified: "1f6d0",
        native: "🛐"
      }
    ],
    version: 1
  },
  atom_symbol: {
    id: "atom_symbol",
    name: "Atom Symbol",
    keywords: [
      "science",
      "physics",
      "chemistry"
    ],
    skins: [
      {
        unified: "269b-fe0f",
        native: "⚛️"
      }
    ],
    version: 1
  },
  om_symbol: {
    id: "om_symbol",
    name: "Om",
    keywords: [
      "symbol",
      "hinduism",
      "buddhism",
      "sikhism",
      "jainism"
    ],
    skins: [
      {
        unified: "1f549-fe0f",
        native: "🕉️"
      }
    ],
    version: 1
  },
  star_of_david: {
    id: "star_of_david",
    name: "Star of David",
    keywords: [
      "judaism"
    ],
    skins: [
      {
        unified: "2721-fe0f",
        native: "✡️"
      }
    ],
    version: 1
  },
  wheel_of_dharma: {
    id: "wheel_of_dharma",
    name: "Wheel of Dharma",
    keywords: [
      "hinduism",
      "buddhism",
      "sikhism",
      "jainism"
    ],
    skins: [
      {
        unified: "2638-fe0f",
        native: "☸️"
      }
    ],
    version: 1
  },
  yin_yang: {
    id: "yin_yang",
    name: "Yin Yang",
    keywords: [
      "balance"
    ],
    skins: [
      {
        unified: "262f-fe0f",
        native: "☯️"
      }
    ],
    version: 1
  },
  latin_cross: {
    id: "latin_cross",
    name: "Latin Cross",
    keywords: [
      "christianity"
    ],
    skins: [
      {
        unified: "271d-fe0f",
        native: "✝️"
      }
    ],
    version: 1
  },
  orthodox_cross: {
    id: "orthodox_cross",
    name: "Orthodox Cross",
    keywords: [
      "suppedaneum",
      "religion"
    ],
    skins: [
      {
        unified: "2626-fe0f",
        native: "☦️"
      }
    ],
    version: 1
  },
  star_and_crescent: {
    id: "star_and_crescent",
    name: "Star and Crescent",
    keywords: [
      "islam"
    ],
    skins: [
      {
        unified: "262a-fe0f",
        native: "☪️"
      }
    ],
    version: 1
  },
  peace_symbol: {
    id: "peace_symbol",
    name: "Peace Symbol",
    keywords: [
      "hippie"
    ],
    skins: [
      {
        unified: "262e-fe0f",
        native: "☮️"
      }
    ],
    version: 1
  },
  menorah_with_nine_branches: {
    id: "menorah_with_nine_branches",
    name: "Menorah",
    keywords: [
      "with",
      "nine",
      "branches",
      "hanukkah",
      "candles",
      "jewish"
    ],
    skins: [
      {
        unified: "1f54e",
        native: "🕎"
      }
    ],
    version: 1
  },
  six_pointed_star: {
    id: "six_pointed_star",
    name: "Dotted Six-Pointed Star",
    keywords: [
      "six",
      "pointed",
      "purple",
      "square",
      "religion",
      "jewish",
      "hexagram"
    ],
    skins: [
      {
        unified: "1f52f",
        native: "🔯"
      }
    ],
    version: 1
  },
  khanda: {
    id: "khanda",
    name: "Khanda",
    keywords: [
      "Sikhism",
      "religion"
    ],
    skins: [
      {
        unified: "1faaf",
        native: "🪯"
      }
    ],
    version: 15
  },
  aries: {
    id: "aries",
    name: "Aries",
    keywords: [
      "sign",
      "purple",
      "square",
      "zodiac",
      "astrology"
    ],
    skins: [
      {
        unified: "2648",
        native: "♈"
      }
    ],
    version: 1
  },
  taurus: {
    id: "taurus",
    name: "Taurus",
    keywords: [
      "purple",
      "square",
      "sign",
      "zodiac",
      "astrology"
    ],
    skins: [
      {
        unified: "2649",
        native: "♉"
      }
    ],
    version: 1
  },
  gemini: {
    id: "gemini",
    name: "Gemini",
    keywords: [
      "sign",
      "zodiac",
      "purple",
      "square",
      "astrology"
    ],
    skins: [
      {
        unified: "264a",
        native: "♊"
      }
    ],
    version: 1
  },
  cancer: {
    id: "cancer",
    name: "Cancer",
    keywords: [
      "sign",
      "zodiac",
      "purple",
      "square",
      "astrology"
    ],
    skins: [
      {
        unified: "264b",
        native: "♋"
      }
    ],
    version: 1
  },
  leo: {
    id: "leo",
    name: "Leo",
    keywords: [
      "sign",
      "purple",
      "square",
      "zodiac",
      "astrology"
    ],
    skins: [
      {
        unified: "264c",
        native: "♌"
      }
    ],
    version: 1
  },
  virgo: {
    id: "virgo",
    name: "Virgo",
    keywords: [
      "sign",
      "zodiac",
      "purple",
      "square",
      "astrology"
    ],
    skins: [
      {
        unified: "264d",
        native: "♍"
      }
    ],
    version: 1
  },
  libra: {
    id: "libra",
    name: "Libra",
    keywords: [
      "sign",
      "purple",
      "square",
      "zodiac",
      "astrology"
    ],
    skins: [
      {
        unified: "264e",
        native: "♎"
      }
    ],
    version: 1
  },
  scorpius: {
    id: "scorpius",
    name: "Scorpio",
    keywords: [
      "scorpius",
      "sign",
      "zodiac",
      "purple",
      "square",
      "astrology"
    ],
    skins: [
      {
        unified: "264f",
        native: "♏"
      }
    ],
    version: 1
  },
  sagittarius: {
    id: "sagittarius",
    name: "Sagittarius",
    keywords: [
      "sign",
      "zodiac",
      "purple",
      "square",
      "astrology"
    ],
    skins: [
      {
        unified: "2650",
        native: "♐"
      }
    ],
    version: 1
  },
  capricorn: {
    id: "capricorn",
    name: "Capricorn",
    keywords: [
      "sign",
      "zodiac",
      "purple",
      "square",
      "astrology"
    ],
    skins: [
      {
        unified: "2651",
        native: "♑"
      }
    ],
    version: 1
  },
  aquarius: {
    id: "aquarius",
    name: "Aquarius",
    keywords: [
      "sign",
      "purple",
      "square",
      "zodiac",
      "astrology"
    ],
    skins: [
      {
        unified: "2652",
        native: "♒"
      }
    ],
    version: 1
  },
  pisces: {
    id: "pisces",
    name: "Pisces",
    keywords: [
      "purple",
      "square",
      "sign",
      "zodiac",
      "astrology"
    ],
    skins: [
      {
        unified: "2653",
        native: "♓"
      }
    ],
    version: 1
  },
  ophiuchus: {
    id: "ophiuchus",
    name: "Ophiuchus",
    keywords: [
      "sign",
      "purple",
      "square",
      "constellation",
      "astrology"
    ],
    skins: [
      {
        unified: "26ce",
        native: "⛎"
      }
    ],
    version: 1
  },
  twisted_rightwards_arrows: {
    id: "twisted_rightwards_arrows",
    name: "Shuffle Tracks Button",
    keywords: [
      "twisted",
      "rightwards",
      "arrows",
      "blue",
      "square",
      "music",
      "random"
    ],
    skins: [
      {
        unified: "1f500",
        native: "🔀"
      }
    ],
    version: 1
  },
  repeat: {
    id: "repeat",
    name: "Repeat Button",
    keywords: [
      "loop",
      "record"
    ],
    skins: [
      {
        unified: "1f501",
        native: "🔁"
      }
    ],
    version: 1
  },
  repeat_one: {
    id: "repeat_one",
    name: "Repeat Single Button",
    keywords: [
      "one",
      "blue",
      "square",
      "loop"
    ],
    skins: [
      {
        unified: "1f502",
        native: "🔂"
      }
    ],
    version: 1
  },
  arrow_forward: {
    id: "arrow_forward",
    name: "Play Button",
    keywords: [
      "arrow",
      "forward",
      "blue",
      "square",
      "right",
      "direction"
    ],
    skins: [
      {
        unified: "25b6-fe0f",
        native: "▶️"
      }
    ],
    version: 1
  },
  fast_forward: {
    id: "fast_forward",
    name: "Fast-Forward Button",
    keywords: [
      "fast",
      "forward",
      "blue",
      "square",
      "play",
      "speed",
      "continue"
    ],
    skins: [
      {
        unified: "23e9",
        native: "⏩"
      }
    ],
    version: 1
  },
  black_right_pointing_double_triangle_with_vertical_bar: {
    id: "black_right_pointing_double_triangle_with_vertical_bar",
    name: "Next Track Button",
    keywords: [
      "black",
      "right",
      "pointing",
      "double",
      "triangle",
      "with",
      "vertical",
      "bar",
      "forward",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "23ed-fe0f",
        native: "⏭️"
      }
    ],
    version: 1
  },
  black_right_pointing_triangle_with_double_vertical_bar: {
    id: "black_right_pointing_triangle_with_double_vertical_bar",
    name: "Play or Pause Button",
    keywords: [
      "black",
      "right",
      "pointing",
      "triangle",
      "with",
      "double",
      "vertical",
      "bar",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "23ef-fe0f",
        native: "⏯️"
      }
    ],
    version: 1
  },
  arrow_backward: {
    id: "arrow_backward",
    name: "Reverse Button",
    keywords: [
      "arrow",
      "backward",
      "blue",
      "square",
      "left",
      "direction"
    ],
    skins: [
      {
        unified: "25c0-fe0f",
        native: "◀️"
      }
    ],
    version: 1
  },
  rewind: {
    id: "rewind",
    name: "Fast Reverse Button",
    keywords: [
      "rewind",
      "play",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "23ea",
        native: "⏪"
      }
    ],
    version: 1
  },
  black_left_pointing_double_triangle_with_vertical_bar: {
    id: "black_left_pointing_double_triangle_with_vertical_bar",
    name: "Last Track Button",
    keywords: [
      "black",
      "left",
      "pointing",
      "double",
      "triangle",
      "with",
      "vertical",
      "bar",
      "backward"
    ],
    skins: [
      {
        unified: "23ee-fe0f",
        native: "⏮️"
      }
    ],
    version: 1
  },
  arrow_up_small: {
    id: "arrow_up_small",
    name: "Upwards Button",
    keywords: [
      "arrow",
      "up",
      "small",
      "blue",
      "square",
      "triangle",
      "direction",
      "point",
      "forward",
      "top"
    ],
    skins: [
      {
        unified: "1f53c",
        native: "🔼"
      }
    ],
    version: 1
  },
  arrow_double_up: {
    id: "arrow_double_up",
    name: "Fast Up Button",
    keywords: [
      "arrow",
      "double",
      "blue",
      "square",
      "direction",
      "top"
    ],
    skins: [
      {
        unified: "23eb",
        native: "⏫"
      }
    ],
    version: 1
  },
  arrow_down_small: {
    id: "arrow_down_small",
    name: "Downwards Button",
    keywords: [
      "arrow",
      "down",
      "small",
      "blue",
      "square",
      "direction",
      "bottom"
    ],
    skins: [
      {
        unified: "1f53d",
        native: "🔽"
      }
    ],
    version: 1
  },
  arrow_double_down: {
    id: "arrow_double_down",
    name: "Fast Down Button",
    keywords: [
      "arrow",
      "double",
      "blue",
      "square",
      "direction",
      "bottom"
    ],
    skins: [
      {
        unified: "23ec",
        native: "⏬"
      }
    ],
    version: 1
  },
  double_vertical_bar: {
    id: "double_vertical_bar",
    name: "Pause Button",
    keywords: [
      "double",
      "vertical",
      "bar",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "23f8-fe0f",
        native: "⏸️"
      }
    ],
    version: 1
  },
  black_square_for_stop: {
    id: "black_square_for_stop",
    name: "Stop Button",
    keywords: [
      "black",
      "square",
      "for",
      "blue"
    ],
    skins: [
      {
        unified: "23f9-fe0f",
        native: "⏹️"
      }
    ],
    version: 1
  },
  black_circle_for_record: {
    id: "black_circle_for_record",
    name: "Record Button",
    keywords: [
      "black",
      "circle",
      "for",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "23fa-fe0f",
        native: "⏺️"
      }
    ],
    version: 1
  },
  eject: {
    id: "eject",
    name: "Eject Button",
    keywords: [
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "23cf-fe0f",
        native: "⏏️"
      }
    ],
    version: 1
  },
  cinema: {
    id: "cinema",
    name: "Cinema",
    keywords: [
      "blue",
      "square",
      "record",
      "film",
      "movie",
      "curtain",
      "stage",
      "theater"
    ],
    skins: [
      {
        unified: "1f3a6",
        native: "🎦"
      }
    ],
    version: 1
  },
  low_brightness: {
    id: "low_brightness",
    name: "Dim Button",
    keywords: [
      "low",
      "brightness",
      "sun",
      "afternoon",
      "warm",
      "summer"
    ],
    skins: [
      {
        unified: "1f505",
        native: "🔅"
      }
    ],
    version: 1
  },
  high_brightness: {
    id: "high_brightness",
    name: "Bright Button",
    keywords: [
      "high",
      "brightness",
      "sun",
      "light"
    ],
    skins: [
      {
        unified: "1f506",
        native: "🔆"
      }
    ],
    version: 1
  },
  signal_strength: {
    id: "signal_strength",
    name: "Antenna Bars",
    keywords: [
      "signal",
      "strength",
      "blue",
      "square",
      "reception",
      "phone",
      "internet",
      "connection",
      "wifi",
      "bluetooth"
    ],
    skins: [
      {
        unified: "1f4f6",
        native: "📶"
      }
    ],
    version: 1
  },
  wireless: {
    id: "wireless",
    name: "Wireless",
    keywords: [
      "wifi",
      "internet",
      "contactless",
      "signal"
    ],
    skins: [
      {
        unified: "1f6dc",
        native: "🛜"
      }
    ],
    version: 15
  },
  vibration_mode: {
    id: "vibration_mode",
    name: "Vibration Mode",
    keywords: [
      "orange",
      "square",
      "phone"
    ],
    skins: [
      {
        unified: "1f4f3",
        native: "📳"
      }
    ],
    version: 1
  },
  mobile_phone_off: {
    id: "mobile_phone_off",
    name: "Mobile Phone off",
    keywords: [
      "mute",
      "orange",
      "square",
      "silence",
      "quiet"
    ],
    skins: [
      {
        unified: "1f4f4",
        native: "📴"
      }
    ],
    version: 1
  },
  female_sign: {
    id: "female_sign",
    name: "Female Sign",
    keywords: [
      "woman",
      "women",
      "lady",
      "girl"
    ],
    skins: [
      {
        unified: "2640-fe0f",
        native: "♀️"
      }
    ],
    version: 4
  },
  male_sign: {
    id: "male_sign",
    name: "Male Sign",
    keywords: [
      "man",
      "boy",
      "men"
    ],
    skins: [
      {
        unified: "2642-fe0f",
        native: "♂️"
      }
    ],
    version: 4
  },
  transgender_symbol: {
    id: "transgender_symbol",
    name: "Transgender Symbol",
    keywords: [
      "lgbtq"
    ],
    skins: [
      {
        unified: "26a7-fe0f",
        native: "⚧️"
      }
    ],
    version: 13
  },
  heavy_multiplication_x: {
    id: "heavy_multiplication_x",
    name: "Multiply",
    keywords: [
      "heavy",
      "multiplication",
      "x",
      "sign",
      "math",
      "calculation"
    ],
    skins: [
      {
        unified: "2716-fe0f",
        native: "✖️"
      }
    ],
    version: 1
  },
  heavy_plus_sign: {
    id: "heavy_plus_sign",
    name: "Plus",
    keywords: [
      "heavy",
      "sign",
      "math",
      "calculation",
      "addition",
      "more",
      "increase"
    ],
    skins: [
      {
        unified: "2795",
        native: "➕"
      }
    ],
    version: 1
  },
  heavy_minus_sign: {
    id: "heavy_minus_sign",
    name: "Minus",
    keywords: [
      "heavy",
      "sign",
      "math",
      "calculation",
      "subtract",
      "less"
    ],
    skins: [
      {
        unified: "2796",
        native: "➖"
      }
    ],
    version: 1
  },
  heavy_division_sign: {
    id: "heavy_division_sign",
    name: "Divide",
    keywords: [
      "heavy",
      "division",
      "sign",
      "math",
      "calculation"
    ],
    skins: [
      {
        unified: "2797",
        native: "➗"
      }
    ],
    version: 1
  },
  heavy_equals_sign: {
    id: "heavy_equals_sign",
    name: "Heavy Equals Sign",
    keywords: [
      "math"
    ],
    skins: [
      {
        unified: "1f7f0",
        native: "🟰"
      }
    ],
    version: 14
  },
  infinity: {
    id: "infinity",
    name: "Infinity",
    keywords: [
      "forever"
    ],
    skins: [
      {
        unified: "267e-fe0f",
        native: "♾️"
      }
    ],
    version: 11
  },
  bangbang: {
    id: "bangbang",
    name: "Double Exclamation Mark",
    keywords: [
      "bangbang",
      "surprise"
    ],
    skins: [
      {
        unified: "203c-fe0f",
        native: "‼️"
      }
    ],
    version: 1
  },
  interrobang: {
    id: "interrobang",
    name: "Exclamation Question Mark",
    keywords: [
      "interrobang",
      "wat",
      "punctuation",
      "surprise"
    ],
    skins: [
      {
        unified: "2049-fe0f",
        native: "⁉️"
      }
    ],
    version: 1
  },
  question: {
    id: "question",
    name: "Red Question Mark",
    keywords: [
      "doubt",
      "confused"
    ],
    skins: [
      {
        unified: "2753",
        native: "❓"
      }
    ],
    version: 1
  },
  grey_question: {
    id: "grey_question",
    name: "White Question Mark",
    keywords: [
      "grey",
      "doubts",
      "gray",
      "huh",
      "confused"
    ],
    skins: [
      {
        unified: "2754",
        native: "❔"
      }
    ],
    version: 1
  },
  grey_exclamation: {
    id: "grey_exclamation",
    name: "White Exclamation Mark",
    keywords: [
      "grey",
      "surprise",
      "punctuation",
      "gray",
      "wow",
      "warning"
    ],
    skins: [
      {
        unified: "2755",
        native: "❕"
      }
    ],
    version: 1
  },
  exclamation: {
    id: "exclamation",
    name: "Red Exclamation Mark",
    keywords: [
      "heavy",
      "danger",
      "surprise",
      "punctuation",
      "wow",
      "warning"
    ],
    skins: [
      {
        unified: "2757",
        native: "❗"
      }
    ],
    version: 1
  },
  wavy_dash: {
    id: "wavy_dash",
    name: "Wavy Dash",
    keywords: [
      "draw",
      "line",
      "moustache",
      "mustache",
      "squiggle",
      "scribble"
    ],
    skins: [
      {
        unified: "3030-fe0f",
        native: "〰️"
      }
    ],
    version: 1
  },
  currency_exchange: {
    id: "currency_exchange",
    name: "Currency Exchange",
    keywords: [
      "money",
      "sales",
      "dollar",
      "travel"
    ],
    skins: [
      {
        unified: "1f4b1",
        native: "💱"
      }
    ],
    version: 1
  },
  heavy_dollar_sign: {
    id: "heavy_dollar_sign",
    name: "Heavy Dollar Sign",
    keywords: [
      "money",
      "sales",
      "payment",
      "currency",
      "buck"
    ],
    skins: [
      {
        unified: "1f4b2",
        native: "💲"
      }
    ],
    version: 1
  },
  medical_symbol: {
    id: "medical_symbol",
    name: "Medical Symbol",
    keywords: [
      "staff",
      "of",
      "aesculapius",
      "health",
      "hospital"
    ],
    skins: [
      {
        unified: "2695-fe0f",
        native: "⚕️"
      }
    ],
    version: 4
  },
  recycle: {
    id: "recycle",
    name: "Recycling Symbol",
    keywords: [
      "recycle",
      "arrow",
      "environment",
      "garbage",
      "trash"
    ],
    skins: [
      {
        unified: "267b-fe0f",
        native: "♻️"
      }
    ],
    version: 1
  },
  fleur_de_lis: {
    id: "fleur_de_lis",
    name: "Fleur-De-Lis",
    keywords: [
      "fleur",
      "de",
      "lis",
      "decorative",
      "scout"
    ],
    skins: [
      {
        unified: "269c-fe0f",
        native: "⚜️"
      }
    ],
    version: 1
  },
  trident: {
    id: "trident",
    name: "Trident Emblem",
    keywords: [
      "weapon",
      "spear"
    ],
    skins: [
      {
        unified: "1f531",
        native: "🔱"
      }
    ],
    version: 1
  },
  name_badge: {
    id: "name_badge",
    name: "Name Badge",
    keywords: [
      "fire",
      "forbid"
    ],
    skins: [
      {
        unified: "1f4db",
        native: "📛"
      }
    ],
    version: 1
  },
  beginner: {
    id: "beginner",
    name: "Japanese Symbol for Beginner",
    keywords: [
      "badge",
      "shield"
    ],
    skins: [
      {
        unified: "1f530",
        native: "🔰"
      }
    ],
    version: 1
  },
  o: {
    id: "o",
    name: "Hollow Red Circle",
    keywords: [
      "o",
      "round"
    ],
    skins: [
      {
        unified: "2b55",
        native: "⭕"
      }
    ],
    version: 1
  },
  white_check_mark: {
    id: "white_check_mark",
    name: "Check Mark Button",
    keywords: [
      "white",
      "green",
      "square",
      "ok",
      "agree",
      "vote",
      "election",
      "answer",
      "tick"
    ],
    skins: [
      {
        unified: "2705",
        native: "✅"
      }
    ],
    version: 1
  },
  ballot_box_with_check: {
    id: "ballot_box_with_check",
    name: "Check Box with Check",
    keywords: [
      "ballot",
      "ok",
      "agree",
      "confirm",
      "black",
      "square",
      "vote",
      "election",
      "yes",
      "tick"
    ],
    skins: [
      {
        unified: "2611-fe0f",
        native: "☑️"
      }
    ],
    version: 1
  },
  heavy_check_mark: {
    id: "heavy_check_mark",
    name: "Check Mark",
    keywords: [
      "heavy",
      "ok",
      "nike",
      "answer",
      "yes",
      "tick"
    ],
    skins: [
      {
        unified: "2714-fe0f",
        native: "✔️"
      }
    ],
    version: 1
  },
  x: {
    id: "x",
    name: "Cross Mark",
    keywords: [
      "x",
      "no",
      "delete",
      "remove",
      "cancel",
      "red"
    ],
    skins: [
      {
        unified: "274c",
        native: "❌"
      }
    ],
    version: 1
  },
  negative_squared_cross_mark: {
    id: "negative_squared_cross_mark",
    name: "Cross Mark Button",
    keywords: [
      "negative",
      "squared",
      "x",
      "green",
      "square",
      "no",
      "deny"
    ],
    skins: [
      {
        unified: "274e",
        native: "❎"
      }
    ],
    version: 1
  },
  curly_loop: {
    id: "curly_loop",
    name: "Curly Loop",
    keywords: [
      "scribble",
      "draw",
      "shape",
      "squiggle"
    ],
    skins: [
      {
        unified: "27b0",
        native: "➰"
      }
    ],
    version: 1
  },
  loop: {
    id: "loop",
    name: "Double Curly Loop",
    keywords: [
      "tape",
      "cassette"
    ],
    skins: [
      {
        unified: "27bf",
        native: "➿"
      }
    ],
    version: 1
  },
  part_alternation_mark: {
    id: "part_alternation_mark",
    name: "Part Alternation Mark",
    keywords: [
      "graph",
      "presentation",
      "stats",
      "business",
      "economics",
      "bad"
    ],
    skins: [
      {
        unified: "303d-fe0f",
        native: "〽️"
      }
    ],
    version: 1
  },
  eight_spoked_asterisk: {
    id: "eight_spoked_asterisk",
    name: "Eight Spoked Asterisk",
    keywords: [
      "star",
      "sparkle",
      "green",
      "square"
    ],
    skins: [
      {
        unified: "2733-fe0f",
        native: "✳️"
      }
    ],
    version: 1
  },
  eight_pointed_black_star: {
    id: "eight_pointed_black_star",
    name: "Eight-Pointed Star",
    keywords: [
      "eight",
      "pointed",
      "black",
      "orange",
      "square",
      "shape",
      "polygon"
    ],
    skins: [
      {
        unified: "2734-fe0f",
        native: "✴️"
      }
    ],
    version: 1
  },
  sparkle: {
    id: "sparkle",
    name: "Sparkle",
    keywords: [
      "stars",
      "green",
      "square",
      "awesome",
      "good",
      "fireworks"
    ],
    skins: [
      {
        unified: "2747-fe0f",
        native: "❇️"
      }
    ],
    version: 1
  },
  copyright: {
    id: "copyright",
    name: "Copyright",
    keywords: [
      "ip",
      "license",
      "circle",
      "law",
      "legal"
    ],
    skins: [
      {
        unified: "00a9-fe0f",
        native: "©️"
      }
    ],
    version: 1
  },
  registered: {
    id: "registered",
    name: "Registered",
    keywords: [
      "alphabet",
      "circle"
    ],
    skins: [
      {
        unified: "00ae-fe0f",
        native: "®️"
      }
    ],
    version: 1
  },
  tm: {
    id: "tm",
    name: "Trade Mark",
    keywords: [
      "tm",
      "trademark",
      "brand",
      "law",
      "legal"
    ],
    skins: [
      {
        unified: "2122-fe0f",
        native: "™️"
      }
    ],
    version: 1
  },
  hash: {
    id: "hash",
    name: "Hash Key",
    keywords: [
      "keycap",
      "",
      "symbol",
      "blue",
      "square",
      "twitter"
    ],
    skins: [
      {
        unified: "0023-fe0f-20e3",
        native: "#️⃣"
      }
    ],
    version: 1
  },
  keycap_star: {
    id: "keycap_star",
    name: "Keycap: *",
    keywords: [
      "keycap",
      "star",
      ""
    ],
    skins: [
      {
        unified: "002a-fe0f-20e3",
        native: "*️⃣"
      }
    ],
    version: 2
  },
  zero: {
    id: "zero",
    name: "Keycap 0",
    keywords: [
      "zero",
      "numbers",
      "blue",
      "square",
      "null"
    ],
    skins: [
      {
        unified: "0030-fe0f-20e3",
        native: "0️⃣"
      }
    ],
    version: 1
  },
  one: {
    id: "one",
    name: "Keycap 1",
    keywords: [
      "one",
      "blue",
      "square",
      "numbers"
    ],
    skins: [
      {
        unified: "0031-fe0f-20e3",
        native: "1️⃣"
      }
    ],
    version: 1
  },
  two: {
    id: "two",
    name: "Keycap 2",
    keywords: [
      "two",
      "numbers",
      "prime",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "0032-fe0f-20e3",
        native: "2️⃣"
      }
    ],
    version: 1
  },
  three: {
    id: "three",
    name: "Keycap 3",
    keywords: [
      "three",
      "numbers",
      "prime",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "0033-fe0f-20e3",
        native: "3️⃣"
      }
    ],
    version: 1
  },
  four: {
    id: "four",
    name: "Keycap 4",
    keywords: [
      "four",
      "numbers",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "0034-fe0f-20e3",
        native: "4️⃣"
      }
    ],
    version: 1
  },
  five: {
    id: "five",
    name: "Keycap 5",
    keywords: [
      "five",
      "numbers",
      "blue",
      "square",
      "prime"
    ],
    skins: [
      {
        unified: "0035-fe0f-20e3",
        native: "5️⃣"
      }
    ],
    version: 1
  },
  six: {
    id: "six",
    name: "Keycap 6",
    keywords: [
      "six",
      "numbers",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "0036-fe0f-20e3",
        native: "6️⃣"
      }
    ],
    version: 1
  },
  seven: {
    id: "seven",
    name: "Keycap 7",
    keywords: [
      "seven",
      "numbers",
      "blue",
      "square",
      "prime"
    ],
    skins: [
      {
        unified: "0037-fe0f-20e3",
        native: "7️⃣"
      }
    ],
    version: 1
  },
  eight: {
    id: "eight",
    name: "Keycap 8",
    keywords: [
      "eight",
      "blue",
      "square",
      "numbers"
    ],
    skins: [
      {
        unified: "0038-fe0f-20e3",
        native: "8️⃣"
      }
    ],
    version: 1
  },
  nine: {
    id: "nine",
    name: "Keycap 9",
    keywords: [
      "nine",
      "blue",
      "square",
      "numbers"
    ],
    skins: [
      {
        unified: "0039-fe0f-20e3",
        native: "9️⃣"
      }
    ],
    version: 1
  },
  keycap_ten: {
    id: "keycap_ten",
    name: "Keycap 10",
    keywords: [
      "ten",
      "numbers",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "1f51f",
        native: "🔟"
      }
    ],
    version: 1
  },
  capital_abcd: {
    id: "capital_abcd",
    name: "Input Latin Uppercase",
    keywords: [
      "capital",
      "abcd",
      "alphabet",
      "words",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "1f520",
        native: "🔠"
      }
    ],
    version: 1
  },
  abcd: {
    id: "abcd",
    name: "Input Latin Lowercase",
    keywords: [
      "abcd",
      "blue",
      "square",
      "alphabet"
    ],
    skins: [
      {
        unified: "1f521",
        native: "🔡"
      }
    ],
    version: 1
  },
  symbols: {
    id: "symbols",
    name: "Input Symbols",
    keywords: [
      "blue",
      "square",
      "music",
      "note",
      "ampersand",
      "percent",
      "glyphs",
      "characters"
    ],
    skins: [
      {
        unified: "1f523",
        native: "🔣"
      }
    ],
    version: 1
  },
  abc: {
    id: "abc",
    name: "Input Latin Letters",
    keywords: [
      "abc",
      "blue",
      "square",
      "alphabet"
    ],
    skins: [
      {
        unified: "1f524",
        native: "🔤"
      }
    ],
    version: 1
  },
  a: {
    id: "a",
    name: "A Button (blood Type)",
    keywords: [
      "red",
      "square",
      "alphabet",
      "letter"
    ],
    skins: [
      {
        unified: "1f170-fe0f",
        native: "🅰️"
      }
    ],
    version: 1
  },
  ab: {
    id: "ab",
    name: "Negative Squared Ab",
    keywords: [
      "button",
      "red",
      "square",
      "alphabet"
    ],
    skins: [
      {
        unified: "1f18e",
        native: "🆎"
      }
    ],
    version: 1
  },
  b: {
    id: "b",
    name: "B Button (blood Type)",
    keywords: [
      "red",
      "square",
      "alphabet",
      "letter"
    ],
    skins: [
      {
        unified: "1f171-fe0f",
        native: "🅱️"
      }
    ],
    version: 1
  },
  cl: {
    id: "cl",
    name: "Cl Button",
    keywords: [
      "alphabet",
      "words",
      "red",
      "square"
    ],
    skins: [
      {
        unified: "1f191",
        native: "🆑"
      }
    ],
    version: 1
  },
  cool: {
    id: "cool",
    name: "Cool Button",
    keywords: [
      "words",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "1f192",
        native: "🆒"
      }
    ],
    version: 1
  },
  free: {
    id: "free",
    name: "Free Button",
    keywords: [
      "blue",
      "square",
      "words"
    ],
    skins: [
      {
        unified: "1f193",
        native: "🆓"
      }
    ],
    version: 1
  },
  information_source: {
    id: "information_source",
    name: "Information",
    keywords: [
      "source",
      "blue",
      "square",
      "alphabet",
      "letter"
    ],
    skins: [
      {
        unified: "2139-fe0f",
        native: "ℹ️"
      }
    ],
    version: 1
  },
  id: {
    id: "id",
    name: "Id Button",
    keywords: [
      "purple",
      "square",
      "words"
    ],
    skins: [
      {
        unified: "1f194",
        native: "🆔"
      }
    ],
    version: 1
  },
  m: {
    id: "m",
    name: "Circled M",
    keywords: [
      "alphabet",
      "blue",
      "circle",
      "letter"
    ],
    skins: [
      {
        unified: "24c2-fe0f",
        native: "Ⓜ️"
      }
    ],
    version: 1
  },
  new: {
    id: "new",
    name: "New Button",
    keywords: [
      "blue",
      "square",
      "words",
      "start"
    ],
    skins: [
      {
        unified: "1f195",
        native: "🆕"
      }
    ],
    version: 1
  },
  ng: {
    id: "ng",
    name: "Ng Button",
    keywords: [
      "blue",
      "square",
      "words",
      "shape",
      "icon"
    ],
    skins: [
      {
        unified: "1f196",
        native: "🆖"
      }
    ],
    version: 1
  },
  o2: {
    id: "o2",
    name: "O Button (blood Type)",
    keywords: [
      "o2",
      "alphabet",
      "red",
      "square",
      "letter"
    ],
    skins: [
      {
        unified: "1f17e-fe0f",
        native: "🅾️"
      }
    ],
    version: 1
  },
  ok: {
    id: "ok",
    name: "Ok Button",
    keywords: [
      "good",
      "agree",
      "yes",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "1f197",
        native: "🆗"
      }
    ],
    version: 1
  },
  parking: {
    id: "parking",
    name: "P Button",
    keywords: [
      "parking",
      "cars",
      "blue",
      "square",
      "alphabet",
      "letter"
    ],
    skins: [
      {
        unified: "1f17f-fe0f",
        native: "🅿️"
      }
    ],
    version: 1
  },
  sos: {
    id: "sos",
    name: "Sos Button",
    keywords: [
      "help",
      "red",
      "square",
      "words",
      "emergency",
      "911"
    ],
    skins: [
      {
        unified: "1f198",
        native: "🆘"
      }
    ],
    version: 1
  },
  up: {
    id: "up",
    name: "Up! Button",
    keywords: [
      "up",
      "blue",
      "square",
      "above",
      "high"
    ],
    skins: [
      {
        unified: "1f199",
        native: "🆙"
      }
    ],
    version: 1
  },
  vs: {
    id: "vs",
    name: "Vs Button",
    keywords: [
      "words",
      "orange",
      "square"
    ],
    skins: [
      {
        unified: "1f19a",
        native: "🆚"
      }
    ],
    version: 1
  },
  koko: {
    id: "koko",
    name: "Squared Katakana Koko",
    keywords: [
      "japanese",
      "here",
      "button",
      "blue",
      "square",
      "destination"
    ],
    skins: [
      {
        unified: "1f201",
        native: "🈁"
      }
    ],
    version: 1
  },
  sa: {
    id: "sa",
    name: "Squared Katakana Sa",
    keywords: [
      "japanese",
      "service",
      "charge",
      "button",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "1f202-fe0f",
        native: "🈂️"
      }
    ],
    version: 1
  },
  u6708: {
    id: "u6708",
    name: "Japanese “monthly Amount” Button",
    keywords: [
      "u6708",
      "monthly",
      "amount",
      "chinese",
      "month",
      "moon",
      "orange",
      "square",
      "kanji"
    ],
    skins: [
      {
        unified: "1f237-fe0f",
        native: "🈷️"
      }
    ],
    version: 1
  },
  u6709: {
    id: "u6709",
    name: "Squared Cjk Unified Ideograph-6709",
    keywords: [
      "u6709",
      "japanese",
      "not",
      "free",
      "of",
      "charge",
      "button",
      "orange",
      "square",
      "chinese",
      "have",
      "kanji"
    ],
    skins: [
      {
        unified: "1f236",
        native: "🈶"
      }
    ],
    version: 1
  },
  u6307: {
    id: "u6307",
    name: "Japanese “reserved” Button",
    keywords: [
      "u6307",
      "reserved",
      "chinese",
      "point",
      "green",
      "square",
      "kanji"
    ],
    skins: [
      {
        unified: "1f22f",
        native: "🈯"
      }
    ],
    version: 1
  },
  ideograph_advantage: {
    id: "ideograph_advantage",
    name: "Japanese “bargain” Button",
    keywords: [
      "ideograph",
      "advantage",
      "bargain",
      "chinese",
      "kanji",
      "obtain",
      "get",
      "circle"
    ],
    skins: [
      {
        unified: "1f250",
        native: "🉐"
      }
    ],
    version: 1
  },
  u5272: {
    id: "u5272",
    name: "Japanese “discount” Button",
    keywords: [
      "u5272",
      "discount",
      "cut",
      "divide",
      "chinese",
      "kanji",
      "pink",
      "square"
    ],
    skins: [
      {
        unified: "1f239",
        native: "🈹"
      }
    ],
    version: 1
  },
  u7121: {
    id: "u7121",
    name: "Japanese “free of Charge” Button",
    keywords: [
      "u7121",
      "free",
      "charge",
      "nothing",
      "chinese",
      "kanji",
      "orange",
      "square"
    ],
    skins: [
      {
        unified: "1f21a",
        native: "🈚"
      }
    ],
    version: 1
  },
  u7981: {
    id: "u7981",
    name: "Japanese “prohibited” Button",
    keywords: [
      "u7981",
      "prohibited",
      "kanji",
      "chinese",
      "forbidden",
      "limit",
      "restricted",
      "red",
      "square"
    ],
    skins: [
      {
        unified: "1f232",
        native: "🈲"
      }
    ],
    version: 1
  },
  accept: {
    id: "accept",
    name: "Circled Ideograph Accept",
    keywords: [
      "japanese",
      "acceptable",
      "button",
      "ok",
      "good",
      "chinese",
      "kanji",
      "agree",
      "yes",
      "orange",
      "circle"
    ],
    skins: [
      {
        unified: "1f251",
        native: "🉑"
      }
    ],
    version: 1
  },
  u7533: {
    id: "u7533",
    name: "Japanese “application” Button",
    keywords: [
      "u7533",
      "application",
      "chinese",
      "kanji",
      "orange",
      "square"
    ],
    skins: [
      {
        unified: "1f238",
        native: "🈸"
      }
    ],
    version: 1
  },
  u5408: {
    id: "u5408",
    name: "Japanese “passing Grade” Button",
    keywords: [
      "u5408",
      "passing",
      "grade",
      "chinese",
      "join",
      "kanji",
      "red",
      "square"
    ],
    skins: [
      {
        unified: "1f234",
        native: "🈴"
      }
    ],
    version: 1
  },
  u7a7a: {
    id: "u7a7a",
    name: "Japanese “vacancy” Button",
    keywords: [
      "u7a7a",
      "vacancy",
      "kanji",
      "chinese",
      "empty",
      "sky",
      "blue",
      "square"
    ],
    skins: [
      {
        unified: "1f233",
        native: "🈳"
      }
    ],
    version: 1
  },
  congratulations: {
    id: "congratulations",
    name: "Circled Ideograph Congratulation",
    keywords: [
      "congratulations",
      "japanese",
      "button",
      "chinese",
      "kanji",
      "red",
      "circle"
    ],
    skins: [
      {
        unified: "3297-fe0f",
        native: "㊗️"
      }
    ],
    version: 1
  },
  secret: {
    id: "secret",
    name: "Circled Ideograph Secret",
    keywords: [
      "japanese",
      "button",
      "privacy",
      "chinese",
      "sshh",
      "kanji",
      "red",
      "circle"
    ],
    skins: [
      {
        unified: "3299-fe0f",
        native: "㊙️"
      }
    ],
    version: 1
  },
  u55b6: {
    id: "u55b6",
    name: "Squared Cjk Unified Ideograph-55b6",
    keywords: [
      "u55b6",
      "japanese",
      "open",
      "for",
      "business",
      "button",
      "opening",
      "hours",
      "orange",
      "square"
    ],
    skins: [
      {
        unified: "1f23a",
        native: "🈺"
      }
    ],
    version: 1
  },
  u6e80: {
    id: "u6e80",
    name: "Japanese “no Vacancy” Button",
    keywords: [
      "u6e80",
      "no",
      "vacancy",
      "full",
      "chinese",
      "red",
      "square",
      "kanji"
    ],
    skins: [
      {
        unified: "1f235",
        native: "🈵"
      }
    ],
    version: 1
  },
  red_circle: {
    id: "red_circle",
    name: "Red Circle",
    keywords: [
      "shape",
      "error",
      "danger"
    ],
    skins: [
      {
        unified: "1f534",
        native: "🔴"
      }
    ],
    version: 1
  },
  large_orange_circle: {
    id: "large_orange_circle",
    name: "Orange Circle",
    keywords: [
      "large",
      "round"
    ],
    skins: [
      {
        unified: "1f7e0",
        native: "🟠"
      }
    ],
    version: 12
  },
  large_yellow_circle: {
    id: "large_yellow_circle",
    name: "Yellow Circle",
    keywords: [
      "large",
      "round"
    ],
    skins: [
      {
        unified: "1f7e1",
        native: "🟡"
      }
    ],
    version: 12
  },
  large_green_circle: {
    id: "large_green_circle",
    name: "Green Circle",
    keywords: [
      "large",
      "round"
    ],
    skins: [
      {
        unified: "1f7e2",
        native: "🟢"
      }
    ],
    version: 12
  },
  large_blue_circle: {
    id: "large_blue_circle",
    name: "Blue Circle",
    keywords: [
      "large",
      "shape",
      "icon",
      "button"
    ],
    skins: [
      {
        unified: "1f535",
        native: "🔵"
      }
    ],
    version: 1
  },
  large_purple_circle: {
    id: "large_purple_circle",
    name: "Purple Circle",
    keywords: [
      "large",
      "round"
    ],
    skins: [
      {
        unified: "1f7e3",
        native: "🟣"
      }
    ],
    version: 12
  },
  large_brown_circle: {
    id: "large_brown_circle",
    name: "Brown Circle",
    keywords: [
      "large",
      "round"
    ],
    skins: [
      {
        unified: "1f7e4",
        native: "🟤"
      }
    ],
    version: 12
  },
  black_circle: {
    id: "black_circle",
    name: "Black Circle",
    keywords: [
      "shape",
      "button",
      "round"
    ],
    skins: [
      {
        unified: "26ab",
        native: "⚫"
      }
    ],
    version: 1
  },
  white_circle: {
    id: "white_circle",
    name: "White Circle",
    keywords: [
      "shape",
      "round"
    ],
    skins: [
      {
        unified: "26aa",
        native: "⚪"
      }
    ],
    version: 1
  },
  large_red_square: {
    id: "large_red_square",
    name: "Red Square",
    keywords: [
      "large"
    ],
    skins: [
      {
        unified: "1f7e5",
        native: "🟥"
      }
    ],
    version: 12
  },
  large_orange_square: {
    id: "large_orange_square",
    name: "Orange Square",
    keywords: [
      "large"
    ],
    skins: [
      {
        unified: "1f7e7",
        native: "🟧"
      }
    ],
    version: 12
  },
  large_yellow_square: {
    id: "large_yellow_square",
    name: "Yellow Square",
    keywords: [
      "large"
    ],
    skins: [
      {
        unified: "1f7e8",
        native: "🟨"
      }
    ],
    version: 12
  },
  large_green_square: {
    id: "large_green_square",
    name: "Green Square",
    keywords: [
      "large"
    ],
    skins: [
      {
        unified: "1f7e9",
        native: "🟩"
      }
    ],
    version: 12
  },
  large_blue_square: {
    id: "large_blue_square",
    name: "Blue Square",
    keywords: [
      "large"
    ],
    skins: [
      {
        unified: "1f7e6",
        native: "🟦"
      }
    ],
    version: 12
  },
  large_purple_square: {
    id: "large_purple_square",
    name: "Purple Square",
    keywords: [
      "large"
    ],
    skins: [
      {
        unified: "1f7ea",
        native: "🟪"
      }
    ],
    version: 12
  },
  large_brown_square: {
    id: "large_brown_square",
    name: "Brown Square",
    keywords: [
      "large"
    ],
    skins: [
      {
        unified: "1f7eb",
        native: "🟫"
      }
    ],
    version: 12
  },
  black_large_square: {
    id: "black_large_square",
    name: "Black Large Square",
    keywords: [
      "shape",
      "icon",
      "button"
    ],
    skins: [
      {
        unified: "2b1b",
        native: "⬛"
      }
    ],
    version: 1
  },
  white_large_square: {
    id: "white_large_square",
    name: "White Large Square",
    keywords: [
      "shape",
      "icon",
      "stone",
      "button"
    ],
    skins: [
      {
        unified: "2b1c",
        native: "⬜"
      }
    ],
    version: 1
  },
  black_medium_square: {
    id: "black_medium_square",
    name: "Black Medium Square",
    keywords: [
      "shape",
      "button",
      "icon"
    ],
    skins: [
      {
        unified: "25fc-fe0f",
        native: "◼️"
      }
    ],
    version: 1
  },
  white_medium_square: {
    id: "white_medium_square",
    name: "White Medium Square",
    keywords: [
      "shape",
      "stone",
      "icon"
    ],
    skins: [
      {
        unified: "25fb-fe0f",
        native: "◻️"
      }
    ],
    version: 1
  },
  black_medium_small_square: {
    id: "black_medium_small_square",
    name: "Black Medium Small Square",
    keywords: [
      "icon",
      "shape",
      "button"
    ],
    skins: [
      {
        unified: "25fe",
        native: "◾"
      }
    ],
    version: 1
  },
  white_medium_small_square: {
    id: "white_medium_small_square",
    name: "White Medium Small Square",
    keywords: [
      "shape",
      "stone",
      "icon",
      "button"
    ],
    skins: [
      {
        unified: "25fd",
        native: "◽"
      }
    ],
    version: 1
  },
  black_small_square: {
    id: "black_small_square",
    name: "Black Small Square",
    keywords: [
      "shape",
      "icon"
    ],
    skins: [
      {
        unified: "25aa-fe0f",
        native: "▪️"
      }
    ],
    version: 1
  },
  white_small_square: {
    id: "white_small_square",
    name: "White Small Square",
    keywords: [
      "shape",
      "icon"
    ],
    skins: [
      {
        unified: "25ab-fe0f",
        native: "▫️"
      }
    ],
    version: 1
  },
  large_orange_diamond: {
    id: "large_orange_diamond",
    name: "Large Orange Diamond",
    keywords: [
      "shape",
      "jewel",
      "gem"
    ],
    skins: [
      {
        unified: "1f536",
        native: "🔶"
      }
    ],
    version: 1
  },
  large_blue_diamond: {
    id: "large_blue_diamond",
    name: "Large Blue Diamond",
    keywords: [
      "shape",
      "jewel",
      "gem"
    ],
    skins: [
      {
        unified: "1f537",
        native: "🔷"
      }
    ],
    version: 1
  },
  small_orange_diamond: {
    id: "small_orange_diamond",
    name: "Small Orange Diamond",
    keywords: [
      "shape",
      "jewel",
      "gem"
    ],
    skins: [
      {
        unified: "1f538",
        native: "🔸"
      }
    ],
    version: 1
  },
  small_blue_diamond: {
    id: "small_blue_diamond",
    name: "Small Blue Diamond",
    keywords: [
      "shape",
      "jewel",
      "gem"
    ],
    skins: [
      {
        unified: "1f539",
        native: "🔹"
      }
    ],
    version: 1
  },
  small_red_triangle: {
    id: "small_red_triangle",
    name: "Red Triangle Pointed Up",
    keywords: [
      "small",
      "shape",
      "direction",
      "top"
    ],
    skins: [
      {
        unified: "1f53a",
        native: "🔺"
      }
    ],
    version: 1
  },
  small_red_triangle_down: {
    id: "small_red_triangle_down",
    name: "Red Triangle Pointed Down",
    keywords: [
      "small",
      "shape",
      "direction",
      "bottom"
    ],
    skins: [
      {
        unified: "1f53b",
        native: "🔻"
      }
    ],
    version: 1
  },
  diamond_shape_with_a_dot_inside: {
    id: "diamond_shape_with_a_dot_inside",
    name: "Diamond with a Dot",
    keywords: [
      "shape",
      "inside",
      "jewel",
      "blue",
      "gem",
      "crystal",
      "fancy"
    ],
    skins: [
      {
        unified: "1f4a0",
        native: "💠"
      }
    ],
    version: 1
  },
  radio_button: {
    id: "radio_button",
    name: "Radio Button",
    keywords: [
      "input",
      "old",
      "music",
      "circle"
    ],
    skins: [
      {
        unified: "1f518",
        native: "🔘"
      }
    ],
    version: 1
  },
  white_square_button: {
    id: "white_square_button",
    name: "White Square Button",
    keywords: [
      "shape",
      "input"
    ],
    skins: [
      {
        unified: "1f533",
        native: "🔳"
      }
    ],
    version: 1
  },
  black_square_button: {
    id: "black_square_button",
    name: "Black Square Button",
    keywords: [
      "shape",
      "input",
      "frame"
    ],
    skins: [
      {
        unified: "1f532",
        native: "🔲"
      }
    ],
    version: 1
  },
  checkered_flag: {
    id: "checkered_flag",
    name: "Chequered Flag",
    keywords: [
      "checkered",
      "contest",
      "finishline",
      "race",
      "gokart"
    ],
    skins: [
      {
        unified: "1f3c1",
        native: "🏁"
      }
    ],
    version: 1
  },
  triangular_flag_on_post: {
    id: "triangular_flag_on_post",
    name: "Triangular Flag",
    keywords: [
      "on",
      "post",
      "mark",
      "milestone",
      "place"
    ],
    skins: [
      {
        unified: "1f6a9",
        native: "🚩"
      }
    ],
    version: 1
  },
  crossed_flags: {
    id: "crossed_flags",
    name: "Crossed Flags",
    keywords: [
      "japanese",
      "nation",
      "country",
      "border"
    ],
    skins: [
      {
        unified: "1f38c",
        native: "🎌"
      }
    ],
    version: 1
  },
  waving_black_flag: {
    id: "waving_black_flag",
    name: "Black Flag",
    keywords: [
      "waving",
      "pirate"
    ],
    skins: [
      {
        unified: "1f3f4",
        native: "🏴"
      }
    ],
    version: 1
  },
  waving_white_flag: {
    id: "waving_white_flag",
    name: "White Flag",
    keywords: [
      "waving",
      "losing",
      "loser",
      "lost",
      "surrender",
      "give",
      "up",
      "fail"
    ],
    skins: [
      {
        unified: "1f3f3-fe0f",
        native: "🏳️"
      }
    ],
    version: 1
  },
  "rainbow-flag": {
    id: "rainbow-flag",
    name: "Rainbow Flag",
    keywords: [
      "pride",
      "gay",
      "lgbt",
      "glbt",
      "queer",
      "homosexual",
      "lesbian",
      "bisexual",
      "transgender"
    ],
    skins: [
      {
        unified: "1f3f3-fe0f-200d-1f308",
        native: "🏳️‍🌈"
      }
    ],
    version: 4
  },
  transgender_flag: {
    id: "transgender_flag",
    name: "Transgender Flag",
    keywords: [
      "lgbtq"
    ],
    skins: [
      {
        unified: "1f3f3-fe0f-200d-26a7-fe0f",
        native: "🏳️‍⚧️"
      }
    ],
    version: 13
  },
  pirate_flag: {
    id: "pirate_flag",
    name: "Pirate Flag",
    keywords: [
      "skull",
      "crossbones",
      "banner"
    ],
    skins: [
      {
        unified: "1f3f4-200d-2620-fe0f",
        native: "🏴‍☠️"
      }
    ],
    version: 11
  },
  "flag-ac": {
    id: "flag-ac",
    name: "Ascension Island Flag",
    keywords: [
      "ac"
    ],
    skins: [
      {
        unified: "1f1e6-1f1e8",
        native: "🇦🇨"
      }
    ],
    version: 2
  },
  "flag-ad": {
    id: "flag-ad",
    name: "Andorra Flag",
    keywords: [
      "ad",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1e9",
        native: "🇦🇩"
      }
    ],
    version: 2
  },
  "flag-ae": {
    id: "flag-ae",
    name: "United Arab Emirates Flag",
    keywords: [
      "ae",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1ea",
        native: "🇦🇪"
      }
    ],
    version: 2
  },
  "flag-af": {
    id: "flag-af",
    name: "Afghanistan Flag",
    keywords: [
      "af",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1eb",
        native: "🇦🇫"
      }
    ],
    version: 2
  },
  "flag-ag": {
    id: "flag-ag",
    name: "Antigua & Barbuda Flag",
    keywords: [
      "ag",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1ec",
        native: "🇦🇬"
      }
    ],
    version: 2
  },
  "flag-ai": {
    id: "flag-ai",
    name: "Anguilla Flag",
    keywords: [
      "ai",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1ee",
        native: "🇦🇮"
      }
    ],
    version: 2
  },
  "flag-al": {
    id: "flag-al",
    name: "Albania Flag",
    keywords: [
      "al",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1f1",
        native: "🇦🇱"
      }
    ],
    version: 2
  },
  "flag-am": {
    id: "flag-am",
    name: "Armenia Flag",
    keywords: [
      "am",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1f2",
        native: "🇦🇲"
      }
    ],
    version: 2
  },
  "flag-ao": {
    id: "flag-ao",
    name: "Angola Flag",
    keywords: [
      "ao",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1f4",
        native: "🇦🇴"
      }
    ],
    version: 2
  },
  "flag-aq": {
    id: "flag-aq",
    name: "Antarctica Flag",
    keywords: [
      "aq",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1f6",
        native: "🇦🇶"
      }
    ],
    version: 2
  },
  "flag-ar": {
    id: "flag-ar",
    name: "Argentina Flag",
    keywords: [
      "ar",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1f7",
        native: "🇦🇷"
      }
    ],
    version: 2
  },
  "flag-as": {
    id: "flag-as",
    name: "American Samoa Flag",
    keywords: [
      "as",
      "ws",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1f8",
        native: "🇦🇸"
      }
    ],
    version: 2
  },
  "flag-at": {
    id: "flag-at",
    name: "Austria Flag",
    keywords: [
      "at",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1f9",
        native: "🇦🇹"
      }
    ],
    version: 2
  },
  "flag-au": {
    id: "flag-au",
    name: "Australia Flag",
    keywords: [
      "au",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1fa",
        native: "🇦🇺"
      }
    ],
    version: 2
  },
  "flag-aw": {
    id: "flag-aw",
    name: "Aruba Flag",
    keywords: [
      "aw",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1fc",
        native: "🇦🇼"
      }
    ],
    version: 2
  },
  "flag-ax": {
    id: "flag-ax",
    name: "Åland Islands Flag",
    keywords: [
      "ax",
      "aland",
      "Aland",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1fd",
        native: "🇦🇽"
      }
    ],
    version: 2
  },
  "flag-az": {
    id: "flag-az",
    name: "Azerbaijan Flag",
    keywords: [
      "az",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e6-1f1ff",
        native: "🇦🇿"
      }
    ],
    version: 2
  },
  "flag-ba": {
    id: "flag-ba",
    name: "Bosnia & Herzegovina Flag",
    keywords: [
      "ba",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1e6",
        native: "🇧🇦"
      }
    ],
    version: 2
  },
  "flag-bb": {
    id: "flag-bb",
    name: "Barbados Flag",
    keywords: [
      "bb",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1e7",
        native: "🇧🇧"
      }
    ],
    version: 2
  },
  "flag-bd": {
    id: "flag-bd",
    name: "Bangladesh Flag",
    keywords: [
      "bd",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1e9",
        native: "🇧🇩"
      }
    ],
    version: 2
  },
  "flag-be": {
    id: "flag-be",
    name: "Belgium Flag",
    keywords: [
      "be",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1ea",
        native: "🇧🇪"
      }
    ],
    version: 2
  },
  "flag-bf": {
    id: "flag-bf",
    name: "Burkina Faso Flag",
    keywords: [
      "bf",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1eb",
        native: "🇧🇫"
      }
    ],
    version: 2
  },
  "flag-bg": {
    id: "flag-bg",
    name: "Bulgaria Flag",
    keywords: [
      "bg",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1ec",
        native: "🇧🇬"
      }
    ],
    version: 2
  },
  "flag-bh": {
    id: "flag-bh",
    name: "Bahrain Flag",
    keywords: [
      "bh",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1ed",
        native: "🇧🇭"
      }
    ],
    version: 2
  },
  "flag-bi": {
    id: "flag-bi",
    name: "Burundi Flag",
    keywords: [
      "bi",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1ee",
        native: "🇧🇮"
      }
    ],
    version: 2
  },
  "flag-bj": {
    id: "flag-bj",
    name: "Benin Flag",
    keywords: [
      "bj",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1ef",
        native: "🇧🇯"
      }
    ],
    version: 2
  },
  "flag-bl": {
    id: "flag-bl",
    name: "St. Barthélemy Flag",
    keywords: [
      "bl",
      "st",
      "barthelemy",
      "saint",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1f1",
        native: "🇧🇱"
      }
    ],
    version: 2
  },
  "flag-bm": {
    id: "flag-bm",
    name: "Bermuda Flag",
    keywords: [
      "bm",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1f2",
        native: "🇧🇲"
      }
    ],
    version: 2
  },
  "flag-bn": {
    id: "flag-bn",
    name: "Brunei Flag",
    keywords: [
      "bn",
      "darussalam",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1f3",
        native: "🇧🇳"
      }
    ],
    version: 2
  },
  "flag-bo": {
    id: "flag-bo",
    name: "Bolivia Flag",
    keywords: [
      "bo",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1f4",
        native: "🇧🇴"
      }
    ],
    version: 2
  },
  "flag-bq": {
    id: "flag-bq",
    name: "Caribbean Netherlands Flag",
    keywords: [
      "bq",
      "bonaire",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1f6",
        native: "🇧🇶"
      }
    ],
    version: 2
  },
  "flag-br": {
    id: "flag-br",
    name: "Brazil Flag",
    keywords: [
      "br",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1f7",
        native: "🇧🇷"
      }
    ],
    version: 2
  },
  "flag-bs": {
    id: "flag-bs",
    name: "Bahamas Flag",
    keywords: [
      "bs",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1f8",
        native: "🇧🇸"
      }
    ],
    version: 2
  },
  "flag-bt": {
    id: "flag-bt",
    name: "Bhutan Flag",
    keywords: [
      "bt",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1f9",
        native: "🇧🇹"
      }
    ],
    version: 2
  },
  "flag-bv": {
    id: "flag-bv",
    name: "Bouvet Island Flag",
    keywords: [
      "bv",
      "norway"
    ],
    skins: [
      {
        unified: "1f1e7-1f1fb",
        native: "🇧🇻"
      }
    ],
    version: 2
  },
  "flag-bw": {
    id: "flag-bw",
    name: "Botswana Flag",
    keywords: [
      "bw",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1fc",
        native: "🇧🇼"
      }
    ],
    version: 2
  },
  "flag-by": {
    id: "flag-by",
    name: "Belarus Flag",
    keywords: [
      "by",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1fe",
        native: "🇧🇾"
      }
    ],
    version: 2
  },
  "flag-bz": {
    id: "flag-bz",
    name: "Belize Flag",
    keywords: [
      "bz",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e7-1f1ff",
        native: "🇧🇿"
      }
    ],
    version: 2
  },
  "flag-ca": {
    id: "flag-ca",
    name: "Canada Flag",
    keywords: [
      "ca",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1e6",
        native: "🇨🇦"
      }
    ],
    version: 2
  },
  "flag-cc": {
    id: "flag-cc",
    name: "Cocos (keeling) Islands Flag",
    keywords: [
      "cc",
      "keeling",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1e8",
        native: "🇨🇨"
      }
    ],
    version: 2
  },
  "flag-cd": {
    id: "flag-cd",
    name: "Congo - Kinshasa Flag",
    keywords: [
      "cd",
      "democratic",
      "republic",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1e9",
        native: "🇨🇩"
      }
    ],
    version: 2
  },
  "flag-cf": {
    id: "flag-cf",
    name: "Central African Republic Flag",
    keywords: [
      "cf",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1eb",
        native: "🇨🇫"
      }
    ],
    version: 2
  },
  "flag-cg": {
    id: "flag-cg",
    name: "Congo - Brazzaville Flag",
    keywords: [
      "cg",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1ec",
        native: "🇨🇬"
      }
    ],
    version: 2
  },
  "flag-ch": {
    id: "flag-ch",
    name: "Switzerland Flag",
    keywords: [
      "ch",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1ed",
        native: "🇨🇭"
      }
    ],
    version: 2
  },
  "flag-ci": {
    id: "flag-ci",
    name: "Côte D’ivoire Flag",
    keywords: [
      "ci",
      "cote",
      "d",
      "ivoire",
      "ivory",
      "coast",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1ee",
        native: "🇨🇮"
      }
    ],
    version: 2
  },
  "flag-ck": {
    id: "flag-ck",
    name: "Cook Islands Flag",
    keywords: [
      "ck",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1f0",
        native: "🇨🇰"
      }
    ],
    version: 2
  },
  "flag-cl": {
    id: "flag-cl",
    name: "Chile Flag",
    keywords: [
      "cl",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1f1",
        native: "🇨🇱"
      }
    ],
    version: 2
  },
  "flag-cm": {
    id: "flag-cm",
    name: "Cameroon Flag",
    keywords: [
      "cm",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1f2",
        native: "🇨🇲"
      }
    ],
    version: 2
  },
  cn: {
    id: "cn",
    name: "China Flag",
    keywords: [
      "cn",
      "chinese",
      "prc",
      "country",
      "nation",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1f3",
        native: "🇨🇳"
      }
    ],
    version: 1
  },
  "flag-co": {
    id: "flag-co",
    name: "Colombia Flag",
    keywords: [
      "co",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1f4",
        native: "🇨🇴"
      }
    ],
    version: 2
  },
  "flag-cp": {
    id: "flag-cp",
    name: "Clipperton Island Flag",
    keywords: [
      "cp"
    ],
    skins: [
      {
        unified: "1f1e8-1f1f5",
        native: "🇨🇵"
      }
    ],
    version: 2
  },
  "flag-cr": {
    id: "flag-cr",
    name: "Costa Rica Flag",
    keywords: [
      "cr",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1f7",
        native: "🇨🇷"
      }
    ],
    version: 2
  },
  "flag-cu": {
    id: "flag-cu",
    name: "Cuba Flag",
    keywords: [
      "cu",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1fa",
        native: "🇨🇺"
      }
    ],
    version: 2
  },
  "flag-cv": {
    id: "flag-cv",
    name: "Cape Verde Flag",
    keywords: [
      "cv",
      "cabo",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1fb",
        native: "🇨🇻"
      }
    ],
    version: 2
  },
  "flag-cw": {
    id: "flag-cw",
    name: "Curaçao Flag",
    keywords: [
      "cw",
      "curacao",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1fc",
        native: "🇨🇼"
      }
    ],
    version: 2
  },
  "flag-cx": {
    id: "flag-cx",
    name: "Christmas Island Flag",
    keywords: [
      "cx",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1fd",
        native: "🇨🇽"
      }
    ],
    version: 2
  },
  "flag-cy": {
    id: "flag-cy",
    name: "Cyprus Flag",
    keywords: [
      "cy",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1fe",
        native: "🇨🇾"
      }
    ],
    version: 2
  },
  "flag-cz": {
    id: "flag-cz",
    name: "Czechia Flag",
    keywords: [
      "cz",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e8-1f1ff",
        native: "🇨🇿"
      }
    ],
    version: 2
  },
  de: {
    id: "de",
    name: "Germany Flag",
    keywords: [
      "de",
      "german",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e9-1f1ea",
        native: "🇩🇪"
      }
    ],
    version: 1
  },
  "flag-dg": {
    id: "flag-dg",
    name: "Diego Garcia Flag",
    keywords: [
      "dg"
    ],
    skins: [
      {
        unified: "1f1e9-1f1ec",
        native: "🇩🇬"
      }
    ],
    version: 2
  },
  "flag-dj": {
    id: "flag-dj",
    name: "Djibouti Flag",
    keywords: [
      "dj",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e9-1f1ef",
        native: "🇩🇯"
      }
    ],
    version: 2
  },
  "flag-dk": {
    id: "flag-dk",
    name: "Denmark Flag",
    keywords: [
      "dk",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e9-1f1f0",
        native: "🇩🇰"
      }
    ],
    version: 2
  },
  "flag-dm": {
    id: "flag-dm",
    name: "Dominica Flag",
    keywords: [
      "dm",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e9-1f1f2",
        native: "🇩🇲"
      }
    ],
    version: 2
  },
  "flag-do": {
    id: "flag-do",
    name: "Dominican Republic Flag",
    keywords: [
      "do",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e9-1f1f4",
        native: "🇩🇴"
      }
    ],
    version: 2
  },
  "flag-dz": {
    id: "flag-dz",
    name: "Algeria Flag",
    keywords: [
      "dz",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1e9-1f1ff",
        native: "🇩🇿"
      }
    ],
    version: 2
  },
  "flag-ea": {
    id: "flag-ea",
    name: "Ceuta & Melilla Flag",
    keywords: [
      "ea"
    ],
    skins: [
      {
        unified: "1f1ea-1f1e6",
        native: "🇪🇦"
      }
    ],
    version: 2
  },
  "flag-ec": {
    id: "flag-ec",
    name: "Ecuador Flag",
    keywords: [
      "ec",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ea-1f1e8",
        native: "🇪🇨"
      }
    ],
    version: 2
  },
  "flag-ee": {
    id: "flag-ee",
    name: "Estonia Flag",
    keywords: [
      "ee",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ea-1f1ea",
        native: "🇪🇪"
      }
    ],
    version: 2
  },
  "flag-eg": {
    id: "flag-eg",
    name: "Egypt Flag",
    keywords: [
      "eg",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ea-1f1ec",
        native: "🇪🇬"
      }
    ],
    version: 2
  },
  "flag-eh": {
    id: "flag-eh",
    name: "Western Sahara Flag",
    keywords: [
      "eh",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ea-1f1ed",
        native: "🇪🇭"
      }
    ],
    version: 2
  },
  "flag-er": {
    id: "flag-er",
    name: "Eritrea Flag",
    keywords: [
      "er",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ea-1f1f7",
        native: "🇪🇷"
      }
    ],
    version: 2
  },
  es: {
    id: "es",
    name: "Spain Flag",
    keywords: [
      "es",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ea-1f1f8",
        native: "🇪🇸"
      }
    ],
    version: 1
  },
  "flag-et": {
    id: "flag-et",
    name: "Ethiopia Flag",
    keywords: [
      "et",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ea-1f1f9",
        native: "🇪🇹"
      }
    ],
    version: 2
  },
  "flag-eu": {
    id: "flag-eu",
    name: "European Union Flag",
    keywords: [
      "eu",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ea-1f1fa",
        native: "🇪🇺"
      }
    ],
    version: 2
  },
  "flag-fi": {
    id: "flag-fi",
    name: "Finland Flag",
    keywords: [
      "fi",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1eb-1f1ee",
        native: "🇫🇮"
      }
    ],
    version: 2
  },
  "flag-fj": {
    id: "flag-fj",
    name: "Fiji Flag",
    keywords: [
      "fj",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1eb-1f1ef",
        native: "🇫🇯"
      }
    ],
    version: 2
  },
  "flag-fk": {
    id: "flag-fk",
    name: "Falkland Islands Flag",
    keywords: [
      "fk",
      "malvinas",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1eb-1f1f0",
        native: "🇫🇰"
      }
    ],
    version: 2
  },
  "flag-fm": {
    id: "flag-fm",
    name: "Micronesia Flag",
    keywords: [
      "fm",
      "federated",
      "states",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1eb-1f1f2",
        native: "🇫🇲"
      }
    ],
    version: 2
  },
  "flag-fo": {
    id: "flag-fo",
    name: "Faroe Islands Flag",
    keywords: [
      "fo",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1eb-1f1f4",
        native: "🇫🇴"
      }
    ],
    version: 2
  },
  fr: {
    id: "fr",
    name: "France Flag",
    keywords: [
      "fr",
      "banner",
      "nation",
      "french",
      "country"
    ],
    skins: [
      {
        unified: "1f1eb-1f1f7",
        native: "🇫🇷"
      }
    ],
    version: 1
  },
  "flag-ga": {
    id: "flag-ga",
    name: "Gabon Flag",
    keywords: [
      "ga",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1e6",
        native: "🇬🇦"
      }
    ],
    version: 2
  },
  gb: {
    id: "gb",
    name: "United Kingdom Flag",
    keywords: [
      "gb",
      "uk",
      "great",
      "britain",
      "northern",
      "ireland",
      "nation",
      "country",
      "banner",
      "british",
      "UK",
      "english",
      "england",
      "union",
      "jack"
    ],
    skins: [
      {
        unified: "1f1ec-1f1e7",
        native: "🇬🇧"
      }
    ],
    version: 1
  },
  "flag-gd": {
    id: "flag-gd",
    name: "Grenada Flag",
    keywords: [
      "gd",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1e9",
        native: "🇬🇩"
      }
    ],
    version: 2
  },
  "flag-ge": {
    id: "flag-ge",
    name: "Georgia Flag",
    keywords: [
      "ge",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1ea",
        native: "🇬🇪"
      }
    ],
    version: 2
  },
  "flag-gf": {
    id: "flag-gf",
    name: "French Guiana Flag",
    keywords: [
      "gf",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1eb",
        native: "🇬🇫"
      }
    ],
    version: 2
  },
  "flag-gg": {
    id: "flag-gg",
    name: "Guernsey Flag",
    keywords: [
      "gg",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1ec",
        native: "🇬🇬"
      }
    ],
    version: 2
  },
  "flag-gh": {
    id: "flag-gh",
    name: "Ghana Flag",
    keywords: [
      "gh",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1ed",
        native: "🇬🇭"
      }
    ],
    version: 2
  },
  "flag-gi": {
    id: "flag-gi",
    name: "Gibraltar Flag",
    keywords: [
      "gi",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1ee",
        native: "🇬🇮"
      }
    ],
    version: 2
  },
  "flag-gl": {
    id: "flag-gl",
    name: "Greenland Flag",
    keywords: [
      "gl",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1f1",
        native: "🇬🇱"
      }
    ],
    version: 2
  },
  "flag-gm": {
    id: "flag-gm",
    name: "Gambia Flag",
    keywords: [
      "gm",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1f2",
        native: "🇬🇲"
      }
    ],
    version: 2
  },
  "flag-gn": {
    id: "flag-gn",
    name: "Guinea Flag",
    keywords: [
      "gn",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1f3",
        native: "🇬🇳"
      }
    ],
    version: 2
  },
  "flag-gp": {
    id: "flag-gp",
    name: "Guadeloupe Flag",
    keywords: [
      "gp",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1f5",
        native: "🇬🇵"
      }
    ],
    version: 2
  },
  "flag-gq": {
    id: "flag-gq",
    name: "Equatorial Guinea Flag",
    keywords: [
      "gq",
      "gn",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1f6",
        native: "🇬🇶"
      }
    ],
    version: 2
  },
  "flag-gr": {
    id: "flag-gr",
    name: "Greece Flag",
    keywords: [
      "gr",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1f7",
        native: "🇬🇷"
      }
    ],
    version: 2
  },
  "flag-gs": {
    id: "flag-gs",
    name: "South Georgia & South Sandwich Islands Flag",
    keywords: [
      "gs",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1f8",
        native: "🇬🇸"
      }
    ],
    version: 2
  },
  "flag-gt": {
    id: "flag-gt",
    name: "Guatemala Flag",
    keywords: [
      "gt",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1f9",
        native: "🇬🇹"
      }
    ],
    version: 2
  },
  "flag-gu": {
    id: "flag-gu",
    name: "Guam Flag",
    keywords: [
      "gu",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1fa",
        native: "🇬🇺"
      }
    ],
    version: 2
  },
  "flag-gw": {
    id: "flag-gw",
    name: "Guinea-Bissau Flag",
    keywords: [
      "gw",
      "guinea",
      "bissau",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1fc",
        native: "🇬🇼"
      }
    ],
    version: 2
  },
  "flag-gy": {
    id: "flag-gy",
    name: "Guyana Flag",
    keywords: [
      "gy",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ec-1f1fe",
        native: "🇬🇾"
      }
    ],
    version: 2
  },
  "flag-hk": {
    id: "flag-hk",
    name: "Hong Kong Sar China Flag",
    keywords: [
      "hk",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ed-1f1f0",
        native: "🇭🇰"
      }
    ],
    version: 2
  },
  "flag-hm": {
    id: "flag-hm",
    name: "Heard & Mcdonald Islands Flag",
    keywords: [
      "hm"
    ],
    skins: [
      {
        unified: "1f1ed-1f1f2",
        native: "🇭🇲"
      }
    ],
    version: 2
  },
  "flag-hn": {
    id: "flag-hn",
    name: "Honduras Flag",
    keywords: [
      "hn",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ed-1f1f3",
        native: "🇭🇳"
      }
    ],
    version: 2
  },
  "flag-hr": {
    id: "flag-hr",
    name: "Croatia Flag",
    keywords: [
      "hr",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ed-1f1f7",
        native: "🇭🇷"
      }
    ],
    version: 2
  },
  "flag-ht": {
    id: "flag-ht",
    name: "Haiti Flag",
    keywords: [
      "ht",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ed-1f1f9",
        native: "🇭🇹"
      }
    ],
    version: 2
  },
  "flag-hu": {
    id: "flag-hu",
    name: "Hungary Flag",
    keywords: [
      "hu",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ed-1f1fa",
        native: "🇭🇺"
      }
    ],
    version: 2
  },
  "flag-ic": {
    id: "flag-ic",
    name: "Canary Islands Flag",
    keywords: [
      "ic",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ee-1f1e8",
        native: "🇮🇨"
      }
    ],
    version: 2
  },
  "flag-id": {
    id: "flag-id",
    name: "Indonesia Flag",
    keywords: [
      "id",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ee-1f1e9",
        native: "🇮🇩"
      }
    ],
    version: 2
  },
  "flag-ie": {
    id: "flag-ie",
    name: "Ireland Flag",
    keywords: [
      "ie",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ee-1f1ea",
        native: "🇮🇪"
      }
    ],
    version: 2
  },
  "flag-il": {
    id: "flag-il",
    name: "Israel Flag",
    keywords: [
      "il",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ee-1f1f1",
        native: "🇮🇱"
      }
    ],
    version: 2
  },
  "flag-im": {
    id: "flag-im",
    name: "Isle of Man Flag",
    keywords: [
      "im",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ee-1f1f2",
        native: "🇮🇲"
      }
    ],
    version: 2
  },
  "flag-in": {
    id: "flag-in",
    name: "India Flag",
    keywords: [
      "in",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ee-1f1f3",
        native: "🇮🇳"
      }
    ],
    version: 2
  },
  "flag-io": {
    id: "flag-io",
    name: "British Indian Ocean Territory Flag",
    keywords: [
      "io",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ee-1f1f4",
        native: "🇮🇴"
      }
    ],
    version: 2
  },
  "flag-iq": {
    id: "flag-iq",
    name: "Iraq Flag",
    keywords: [
      "iq",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ee-1f1f6",
        native: "🇮🇶"
      }
    ],
    version: 2
  },
  "flag-ir": {
    id: "flag-ir",
    name: "Iran Flag",
    keywords: [
      "ir",
      "islamic",
      "republic",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ee-1f1f7",
        native: "🇮🇷"
      }
    ],
    version: 2
  },
  "flag-is": {
    id: "flag-is",
    name: "Iceland Flag",
    keywords: [
      "is",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ee-1f1f8",
        native: "🇮🇸"
      }
    ],
    version: 2
  },
  it: {
    id: "it",
    name: "Italy Flag",
    keywords: [
      "it",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ee-1f1f9",
        native: "🇮🇹"
      }
    ],
    version: 1
  },
  "flag-je": {
    id: "flag-je",
    name: "Jersey Flag",
    keywords: [
      "je",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ef-1f1ea",
        native: "🇯🇪"
      }
    ],
    version: 2
  },
  "flag-jm": {
    id: "flag-jm",
    name: "Jamaica Flag",
    keywords: [
      "jm",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ef-1f1f2",
        native: "🇯🇲"
      }
    ],
    version: 2
  },
  "flag-jo": {
    id: "flag-jo",
    name: "Jordan Flag",
    keywords: [
      "jo",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ef-1f1f4",
        native: "🇯🇴"
      }
    ],
    version: 2
  },
  jp: {
    id: "jp",
    name: "Japan Flag",
    keywords: [
      "jp",
      "japanese",
      "nation",
      "country",
      "banner",
      "ja"
    ],
    skins: [
      {
        unified: "1f1ef-1f1f5",
        native: "🇯🇵"
      }
    ],
    version: 1
  },
  "flag-ke": {
    id: "flag-ke",
    name: "Kenya Flag",
    keywords: [
      "ke",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f0-1f1ea",
        native: "🇰🇪"
      }
    ],
    version: 2
  },
  "flag-kg": {
    id: "flag-kg",
    name: "Kyrgyzstan Flag",
    keywords: [
      "kg",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f0-1f1ec",
        native: "🇰🇬"
      }
    ],
    version: 2
  },
  "flag-kh": {
    id: "flag-kh",
    name: "Cambodia Flag",
    keywords: [
      "kh",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f0-1f1ed",
        native: "🇰🇭"
      }
    ],
    version: 2
  },
  "flag-ki": {
    id: "flag-ki",
    name: "Kiribati Flag",
    keywords: [
      "ki",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f0-1f1ee",
        native: "🇰🇮"
      }
    ],
    version: 2
  },
  "flag-km": {
    id: "flag-km",
    name: "Comoros Flag",
    keywords: [
      "km",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f0-1f1f2",
        native: "🇰🇲"
      }
    ],
    version: 2
  },
  "flag-kn": {
    id: "flag-kn",
    name: "St. Kitts & Nevis Flag",
    keywords: [
      "kn",
      "st",
      "saint",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f0-1f1f3",
        native: "🇰🇳"
      }
    ],
    version: 2
  },
  "flag-kp": {
    id: "flag-kp",
    name: "North Korea Flag",
    keywords: [
      "kp",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f0-1f1f5",
        native: "🇰🇵"
      }
    ],
    version: 2
  },
  kr: {
    id: "kr",
    name: "South Korea Flag",
    keywords: [
      "kr",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f0-1f1f7",
        native: "🇰🇷"
      }
    ],
    version: 1
  },
  "flag-kw": {
    id: "flag-kw",
    name: "Kuwait Flag",
    keywords: [
      "kw",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f0-1f1fc",
        native: "🇰🇼"
      }
    ],
    version: 2
  },
  "flag-ky": {
    id: "flag-ky",
    name: "Cayman Islands Flag",
    keywords: [
      "ky",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f0-1f1fe",
        native: "🇰🇾"
      }
    ],
    version: 2
  },
  "flag-kz": {
    id: "flag-kz",
    name: "Kazakhstan Flag",
    keywords: [
      "kz",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f0-1f1ff",
        native: "🇰🇿"
      }
    ],
    version: 2
  },
  "flag-la": {
    id: "flag-la",
    name: "Laos Flag",
    keywords: [
      "la",
      "lao",
      "democratic",
      "republic",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f1-1f1e6",
        native: "🇱🇦"
      }
    ],
    version: 2
  },
  "flag-lb": {
    id: "flag-lb",
    name: "Lebanon Flag",
    keywords: [
      "lb",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f1-1f1e7",
        native: "🇱🇧"
      }
    ],
    version: 2
  },
  "flag-lc": {
    id: "flag-lc",
    name: "St. Lucia Flag",
    keywords: [
      "lc",
      "st",
      "saint",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f1-1f1e8",
        native: "🇱🇨"
      }
    ],
    version: 2
  },
  "flag-li": {
    id: "flag-li",
    name: "Liechtenstein Flag",
    keywords: [
      "li",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f1-1f1ee",
        native: "🇱🇮"
      }
    ],
    version: 2
  },
  "flag-lk": {
    id: "flag-lk",
    name: "Sri Lanka Flag",
    keywords: [
      "lk",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f1-1f1f0",
        native: "🇱🇰"
      }
    ],
    version: 2
  },
  "flag-lr": {
    id: "flag-lr",
    name: "Liberia Flag",
    keywords: [
      "lr",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f1-1f1f7",
        native: "🇱🇷"
      }
    ],
    version: 2
  },
  "flag-ls": {
    id: "flag-ls",
    name: "Lesotho Flag",
    keywords: [
      "ls",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f1-1f1f8",
        native: "🇱🇸"
      }
    ],
    version: 2
  },
  "flag-lt": {
    id: "flag-lt",
    name: "Lithuania Flag",
    keywords: [
      "lt",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f1-1f1f9",
        native: "🇱🇹"
      }
    ],
    version: 2
  },
  "flag-lu": {
    id: "flag-lu",
    name: "Luxembourg Flag",
    keywords: [
      "lu",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f1-1f1fa",
        native: "🇱🇺"
      }
    ],
    version: 2
  },
  "flag-lv": {
    id: "flag-lv",
    name: "Latvia Flag",
    keywords: [
      "lv",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f1-1f1fb",
        native: "🇱🇻"
      }
    ],
    version: 2
  },
  "flag-ly": {
    id: "flag-ly",
    name: "Libya Flag",
    keywords: [
      "ly",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f1-1f1fe",
        native: "🇱🇾"
      }
    ],
    version: 2
  },
  "flag-ma": {
    id: "flag-ma",
    name: "Morocco Flag",
    keywords: [
      "ma",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1e6",
        native: "🇲🇦"
      }
    ],
    version: 2
  },
  "flag-mc": {
    id: "flag-mc",
    name: "Monaco Flag",
    keywords: [
      "mc",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1e8",
        native: "🇲🇨"
      }
    ],
    version: 2
  },
  "flag-md": {
    id: "flag-md",
    name: "Moldova Flag",
    keywords: [
      "md",
      "republic",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1e9",
        native: "🇲🇩"
      }
    ],
    version: 2
  },
  "flag-me": {
    id: "flag-me",
    name: "Montenegro Flag",
    keywords: [
      "me",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1ea",
        native: "🇲🇪"
      }
    ],
    version: 2
  },
  "flag-mf": {
    id: "flag-mf",
    name: "St. Martin Flag",
    keywords: [
      "mf",
      "st"
    ],
    skins: [
      {
        unified: "1f1f2-1f1eb",
        native: "🇲🇫"
      }
    ],
    version: 2
  },
  "flag-mg": {
    id: "flag-mg",
    name: "Madagascar Flag",
    keywords: [
      "mg",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1ec",
        native: "🇲🇬"
      }
    ],
    version: 2
  },
  "flag-mh": {
    id: "flag-mh",
    name: "Marshall Islands Flag",
    keywords: [
      "mh",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1ed",
        native: "🇲🇭"
      }
    ],
    version: 2
  },
  "flag-mk": {
    id: "flag-mk",
    name: "North Macedonia Flag",
    keywords: [
      "mk",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1f0",
        native: "🇲🇰"
      }
    ],
    version: 2
  },
  "flag-ml": {
    id: "flag-ml",
    name: "Mali Flag",
    keywords: [
      "ml",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1f1",
        native: "🇲🇱"
      }
    ],
    version: 2
  },
  "flag-mm": {
    id: "flag-mm",
    name: "Myanmar (burma) Flag",
    keywords: [
      "mm",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1f2",
        native: "🇲🇲"
      }
    ],
    version: 2
  },
  "flag-mn": {
    id: "flag-mn",
    name: "Mongolia Flag",
    keywords: [
      "mn",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1f3",
        native: "🇲🇳"
      }
    ],
    version: 2
  },
  "flag-mo": {
    id: "flag-mo",
    name: "Macao Sar China Flag",
    keywords: [
      "mo",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1f4",
        native: "🇲🇴"
      }
    ],
    version: 2
  },
  "flag-mp": {
    id: "flag-mp",
    name: "Northern Mariana Islands Flag",
    keywords: [
      "mp",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1f5",
        native: "🇲🇵"
      }
    ],
    version: 2
  },
  "flag-mq": {
    id: "flag-mq",
    name: "Martinique Flag",
    keywords: [
      "mq",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1f6",
        native: "🇲🇶"
      }
    ],
    version: 2
  },
  "flag-mr": {
    id: "flag-mr",
    name: "Mauritania Flag",
    keywords: [
      "mr",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1f7",
        native: "🇲🇷"
      }
    ],
    version: 2
  },
  "flag-ms": {
    id: "flag-ms",
    name: "Montserrat Flag",
    keywords: [
      "ms",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1f8",
        native: "🇲🇸"
      }
    ],
    version: 2
  },
  "flag-mt": {
    id: "flag-mt",
    name: "Malta Flag",
    keywords: [
      "mt",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1f9",
        native: "🇲🇹"
      }
    ],
    version: 2
  },
  "flag-mu": {
    id: "flag-mu",
    name: "Mauritius Flag",
    keywords: [
      "mu",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1fa",
        native: "🇲🇺"
      }
    ],
    version: 2
  },
  "flag-mv": {
    id: "flag-mv",
    name: "Maldives Flag",
    keywords: [
      "mv",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1fb",
        native: "🇲🇻"
      }
    ],
    version: 2
  },
  "flag-mw": {
    id: "flag-mw",
    name: "Malawi Flag",
    keywords: [
      "mw",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1fc",
        native: "🇲🇼"
      }
    ],
    version: 2
  },
  "flag-mx": {
    id: "flag-mx",
    name: "Mexico Flag",
    keywords: [
      "mx",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1fd",
        native: "🇲🇽"
      }
    ],
    version: 2
  },
  "flag-my": {
    id: "flag-my",
    name: "Malaysia Flag",
    keywords: [
      "my",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1fe",
        native: "🇲🇾"
      }
    ],
    version: 2
  },
  "flag-mz": {
    id: "flag-mz",
    name: "Mozambique Flag",
    keywords: [
      "mz",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f2-1f1ff",
        native: "🇲🇿"
      }
    ],
    version: 2
  },
  "flag-na": {
    id: "flag-na",
    name: "Namibia Flag",
    keywords: [
      "na",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f3-1f1e6",
        native: "🇳🇦"
      }
    ],
    version: 2
  },
  "flag-nc": {
    id: "flag-nc",
    name: "New Caledonia Flag",
    keywords: [
      "nc",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f3-1f1e8",
        native: "🇳🇨"
      }
    ],
    version: 2
  },
  "flag-ne": {
    id: "flag-ne",
    name: "Niger Flag",
    keywords: [
      "ne",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f3-1f1ea",
        native: "🇳🇪"
      }
    ],
    version: 2
  },
  "flag-nf": {
    id: "flag-nf",
    name: "Norfolk Island Flag",
    keywords: [
      "nf",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f3-1f1eb",
        native: "🇳🇫"
      }
    ],
    version: 2
  },
  "flag-ng": {
    id: "flag-ng",
    name: "Nigeria Flag",
    keywords: [
      "ng",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f3-1f1ec",
        native: "🇳🇬"
      }
    ],
    version: 2
  },
  "flag-ni": {
    id: "flag-ni",
    name: "Nicaragua Flag",
    keywords: [
      "ni",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f3-1f1ee",
        native: "🇳🇮"
      }
    ],
    version: 2
  },
  "flag-nl": {
    id: "flag-nl",
    name: "Netherlands Flag",
    keywords: [
      "nl",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f3-1f1f1",
        native: "🇳🇱"
      }
    ],
    version: 2
  },
  "flag-no": {
    id: "flag-no",
    name: "Norway Flag",
    keywords: [
      "no",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f3-1f1f4",
        native: "🇳🇴"
      }
    ],
    version: 2
  },
  "flag-np": {
    id: "flag-np",
    name: "Nepal Flag",
    keywords: [
      "np",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f3-1f1f5",
        native: "🇳🇵"
      }
    ],
    version: 2
  },
  "flag-nr": {
    id: "flag-nr",
    name: "Nauru Flag",
    keywords: [
      "nr",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f3-1f1f7",
        native: "🇳🇷"
      }
    ],
    version: 2
  },
  "flag-nu": {
    id: "flag-nu",
    name: "Niue Flag",
    keywords: [
      "nu",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f3-1f1fa",
        native: "🇳🇺"
      }
    ],
    version: 2
  },
  "flag-nz": {
    id: "flag-nz",
    name: "New Zealand Flag",
    keywords: [
      "nz",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f3-1f1ff",
        native: "🇳🇿"
      }
    ],
    version: 2
  },
  "flag-om": {
    id: "flag-om",
    name: "Oman Flag",
    keywords: [
      "om",
      "symbol",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f4-1f1f2",
        native: "🇴🇲"
      }
    ],
    version: 2
  },
  "flag-pa": {
    id: "flag-pa",
    name: "Panama Flag",
    keywords: [
      "pa",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f5-1f1e6",
        native: "🇵🇦"
      }
    ],
    version: 2
  },
  "flag-pe": {
    id: "flag-pe",
    name: "Peru Flag",
    keywords: [
      "pe",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f5-1f1ea",
        native: "🇵🇪"
      }
    ],
    version: 2
  },
  "flag-pf": {
    id: "flag-pf",
    name: "French Polynesia Flag",
    keywords: [
      "pf",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f5-1f1eb",
        native: "🇵🇫"
      }
    ],
    version: 2
  },
  "flag-pg": {
    id: "flag-pg",
    name: "Papua New Guinea Flag",
    keywords: [
      "pg",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f5-1f1ec",
        native: "🇵🇬"
      }
    ],
    version: 2
  },
  "flag-ph": {
    id: "flag-ph",
    name: "Philippines Flag",
    keywords: [
      "ph",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f5-1f1ed",
        native: "🇵🇭"
      }
    ],
    version: 2
  },
  "flag-pk": {
    id: "flag-pk",
    name: "Pakistan Flag",
    keywords: [
      "pk",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f5-1f1f0",
        native: "🇵🇰"
      }
    ],
    version: 2
  },
  "flag-pl": {
    id: "flag-pl",
    name: "Poland Flag",
    keywords: [
      "pl",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f5-1f1f1",
        native: "🇵🇱"
      }
    ],
    version: 2
  },
  "flag-pm": {
    id: "flag-pm",
    name: "St. Pierre & Miquelon Flag",
    keywords: [
      "pm",
      "st",
      "saint",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f5-1f1f2",
        native: "🇵🇲"
      }
    ],
    version: 2
  },
  "flag-pn": {
    id: "flag-pn",
    name: "Pitcairn Islands Flag",
    keywords: [
      "pn",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f5-1f1f3",
        native: "🇵🇳"
      }
    ],
    version: 2
  },
  "flag-pr": {
    id: "flag-pr",
    name: "Puerto Rico Flag",
    keywords: [
      "pr",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f5-1f1f7",
        native: "🇵🇷"
      }
    ],
    version: 2
  },
  "flag-ps": {
    id: "flag-ps",
    name: "Palestinian Territories Flag",
    keywords: [
      "ps",
      "palestine",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f5-1f1f8",
        native: "🇵🇸"
      }
    ],
    version: 2
  },
  "flag-pt": {
    id: "flag-pt",
    name: "Portugal Flag",
    keywords: [
      "pt",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f5-1f1f9",
        native: "🇵🇹"
      }
    ],
    version: 2
  },
  "flag-pw": {
    id: "flag-pw",
    name: "Palau Flag",
    keywords: [
      "pw",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f5-1f1fc",
        native: "🇵🇼"
      }
    ],
    version: 2
  },
  "flag-py": {
    id: "flag-py",
    name: "Paraguay Flag",
    keywords: [
      "py",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f5-1f1fe",
        native: "🇵🇾"
      }
    ],
    version: 2
  },
  "flag-qa": {
    id: "flag-qa",
    name: "Qatar Flag",
    keywords: [
      "qa",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f6-1f1e6",
        native: "🇶🇦"
      }
    ],
    version: 2
  },
  "flag-re": {
    id: "flag-re",
    name: "Réunion Flag",
    keywords: [
      "re",
      "reunion",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f7-1f1ea",
        native: "🇷🇪"
      }
    ],
    version: 2
  },
  "flag-ro": {
    id: "flag-ro",
    name: "Romania Flag",
    keywords: [
      "ro",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f7-1f1f4",
        native: "🇷🇴"
      }
    ],
    version: 2
  },
  "flag-rs": {
    id: "flag-rs",
    name: "Serbia Flag",
    keywords: [
      "rs",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f7-1f1f8",
        native: "🇷🇸"
      }
    ],
    version: 2
  },
  ru: {
    id: "ru",
    name: "Russia Flag",
    keywords: [
      "ru",
      "russian",
      "federation",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f7-1f1fa",
        native: "🇷🇺"
      }
    ],
    version: 1
  },
  "flag-rw": {
    id: "flag-rw",
    name: "Rwanda Flag",
    keywords: [
      "rw",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f7-1f1fc",
        native: "🇷🇼"
      }
    ],
    version: 2
  },
  "flag-sa": {
    id: "flag-sa",
    name: "Saudi Arabia Flag",
    keywords: [
      "sa",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1e6",
        native: "🇸🇦"
      }
    ],
    version: 2
  },
  "flag-sb": {
    id: "flag-sb",
    name: "Solomon Islands Flag",
    keywords: [
      "sb",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1e7",
        native: "🇸🇧"
      }
    ],
    version: 2
  },
  "flag-sc": {
    id: "flag-sc",
    name: "Seychelles Flag",
    keywords: [
      "sc",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1e8",
        native: "🇸🇨"
      }
    ],
    version: 2
  },
  "flag-sd": {
    id: "flag-sd",
    name: "Sudan Flag",
    keywords: [
      "sd",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1e9",
        native: "🇸🇩"
      }
    ],
    version: 2
  },
  "flag-se": {
    id: "flag-se",
    name: "Sweden Flag",
    keywords: [
      "se",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1ea",
        native: "🇸🇪"
      }
    ],
    version: 2
  },
  "flag-sg": {
    id: "flag-sg",
    name: "Singapore Flag",
    keywords: [
      "sg",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1ec",
        native: "🇸🇬"
      }
    ],
    version: 2
  },
  "flag-sh": {
    id: "flag-sh",
    name: "St. Helena Flag",
    keywords: [
      "sh",
      "st",
      "saint",
      "ascension",
      "tristan",
      "cunha",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1ed",
        native: "🇸🇭"
      }
    ],
    version: 2
  },
  "flag-si": {
    id: "flag-si",
    name: "Slovenia Flag",
    keywords: [
      "si",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1ee",
        native: "🇸🇮"
      }
    ],
    version: 2
  },
  "flag-sj": {
    id: "flag-sj",
    name: "Svalbard & Jan Mayen Flag",
    keywords: [
      "sj"
    ],
    skins: [
      {
        unified: "1f1f8-1f1ef",
        native: "🇸🇯"
      }
    ],
    version: 2
  },
  "flag-sk": {
    id: "flag-sk",
    name: "Slovakia Flag",
    keywords: [
      "sk",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1f0",
        native: "🇸🇰"
      }
    ],
    version: 2
  },
  "flag-sl": {
    id: "flag-sl",
    name: "Sierra Leone Flag",
    keywords: [
      "sl",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1f1",
        native: "🇸🇱"
      }
    ],
    version: 2
  },
  "flag-sm": {
    id: "flag-sm",
    name: "San Marino Flag",
    keywords: [
      "sm",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1f2",
        native: "🇸🇲"
      }
    ],
    version: 2
  },
  "flag-sn": {
    id: "flag-sn",
    name: "Senegal Flag",
    keywords: [
      "sn",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1f3",
        native: "🇸🇳"
      }
    ],
    version: 2
  },
  "flag-so": {
    id: "flag-so",
    name: "Somalia Flag",
    keywords: [
      "so",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1f4",
        native: "🇸🇴"
      }
    ],
    version: 2
  },
  "flag-sr": {
    id: "flag-sr",
    name: "Suriname Flag",
    keywords: [
      "sr",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1f7",
        native: "🇸🇷"
      }
    ],
    version: 2
  },
  "flag-ss": {
    id: "flag-ss",
    name: "South Sudan Flag",
    keywords: [
      "ss",
      "sd",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1f8",
        native: "🇸🇸"
      }
    ],
    version: 2
  },
  "flag-st": {
    id: "flag-st",
    name: "São Tomé & Príncipe Flag",
    keywords: [
      "st",
      "sao",
      "tome",
      "principe",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1f9",
        native: "🇸🇹"
      }
    ],
    version: 2
  },
  "flag-sv": {
    id: "flag-sv",
    name: "El Salvador Flag",
    keywords: [
      "sv",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1fb",
        native: "🇸🇻"
      }
    ],
    version: 2
  },
  "flag-sx": {
    id: "flag-sx",
    name: "Sint Maarten Flag",
    keywords: [
      "sx",
      "dutch",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1fd",
        native: "🇸🇽"
      }
    ],
    version: 2
  },
  "flag-sy": {
    id: "flag-sy",
    name: "Syria Flag",
    keywords: [
      "sy",
      "syrian",
      "arab",
      "republic",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1fe",
        native: "🇸🇾"
      }
    ],
    version: 2
  },
  "flag-sz": {
    id: "flag-sz",
    name: "Eswatini Flag",
    keywords: [
      "sz",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f8-1f1ff",
        native: "🇸🇿"
      }
    ],
    version: 2
  },
  "flag-ta": {
    id: "flag-ta",
    name: "Tristan Da Cunha Flag",
    keywords: [
      "ta"
    ],
    skins: [
      {
        unified: "1f1f9-1f1e6",
        native: "🇹🇦"
      }
    ],
    version: 2
  },
  "flag-tc": {
    id: "flag-tc",
    name: "Turks & Caicos Islands Flag",
    keywords: [
      "tc",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1e8",
        native: "🇹🇨"
      }
    ],
    version: 2
  },
  "flag-td": {
    id: "flag-td",
    name: "Chad Flag",
    keywords: [
      "td",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1e9",
        native: "🇹🇩"
      }
    ],
    version: 2
  },
  "flag-tf": {
    id: "flag-tf",
    name: "French Southern Territories Flag",
    keywords: [
      "tf",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1eb",
        native: "🇹🇫"
      }
    ],
    version: 2
  },
  "flag-tg": {
    id: "flag-tg",
    name: "Togo Flag",
    keywords: [
      "tg",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1ec",
        native: "🇹🇬"
      }
    ],
    version: 2
  },
  "flag-th": {
    id: "flag-th",
    name: "Thailand Flag",
    keywords: [
      "th",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1ed",
        native: "🇹🇭"
      }
    ],
    version: 2
  },
  "flag-tj": {
    id: "flag-tj",
    name: "Tajikistan Flag",
    keywords: [
      "tj",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1ef",
        native: "🇹🇯"
      }
    ],
    version: 2
  },
  "flag-tk": {
    id: "flag-tk",
    name: "Tokelau Flag",
    keywords: [
      "tk",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1f0",
        native: "🇹🇰"
      }
    ],
    version: 2
  },
  "flag-tl": {
    id: "flag-tl",
    name: "Timor-Leste Flag",
    keywords: [
      "tl",
      "timor",
      "leste",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1f1",
        native: "🇹🇱"
      }
    ],
    version: 2
  },
  "flag-tm": {
    id: "flag-tm",
    name: "Turkmenistan Flag",
    keywords: [
      "tm",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1f2",
        native: "🇹🇲"
      }
    ],
    version: 2
  },
  "flag-tn": {
    id: "flag-tn",
    name: "Tunisia Flag",
    keywords: [
      "tn",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1f3",
        native: "🇹🇳"
      }
    ],
    version: 2
  },
  "flag-to": {
    id: "flag-to",
    name: "Tonga Flag",
    keywords: [
      "to",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1f4",
        native: "🇹🇴"
      }
    ],
    version: 2
  },
  "flag-tr": {
    id: "flag-tr",
    name: "Turkey Flag",
    keywords: [
      "tr",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1f7",
        native: "🇹🇷"
      }
    ],
    version: 2
  },
  "flag-tt": {
    id: "flag-tt",
    name: "Trinidad & Tobago Flag",
    keywords: [
      "tt",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1f9",
        native: "🇹🇹"
      }
    ],
    version: 2
  },
  "flag-tv": {
    id: "flag-tv",
    name: "Tuvalu Flag",
    keywords: [
      "tv",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1fb",
        native: "🇹🇻"
      }
    ],
    version: 2
  },
  "flag-tw": {
    id: "flag-tw",
    name: "Taiwan Flag",
    keywords: [
      "tw",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1fc",
        native: "🇹🇼"
      }
    ],
    version: 2
  },
  "flag-tz": {
    id: "flag-tz",
    name: "Tanzania Flag",
    keywords: [
      "tz",
      "united",
      "republic",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1f9-1f1ff",
        native: "🇹🇿"
      }
    ],
    version: 2
  },
  "flag-ua": {
    id: "flag-ua",
    name: "Ukraine Flag",
    keywords: [
      "ua",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fa-1f1e6",
        native: "🇺🇦"
      }
    ],
    version: 2
  },
  "flag-ug": {
    id: "flag-ug",
    name: "Uganda Flag",
    keywords: [
      "ug",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fa-1f1ec",
        native: "🇺🇬"
      }
    ],
    version: 2
  },
  "flag-um": {
    id: "flag-um",
    name: "U.s. Outlying Islands Flag",
    keywords: [
      "um",
      "u",
      "s"
    ],
    skins: [
      {
        unified: "1f1fa-1f1f2",
        native: "🇺🇲"
      }
    ],
    version: 2
  },
  "flag-un": {
    id: "flag-un",
    name: "United Nations Flag",
    keywords: [
      "un",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fa-1f1f3",
        native: "🇺🇳"
      }
    ],
    version: 4
  },
  us: {
    id: "us",
    name: "United States Flag",
    keywords: [
      "us",
      "america",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fa-1f1f8",
        native: "🇺🇸"
      }
    ],
    version: 1
  },
  "flag-uy": {
    id: "flag-uy",
    name: "Uruguay Flag",
    keywords: [
      "uy",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fa-1f1fe",
        native: "🇺🇾"
      }
    ],
    version: 2
  },
  "flag-uz": {
    id: "flag-uz",
    name: "Uzbekistan Flag",
    keywords: [
      "uz",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fa-1f1ff",
        native: "🇺🇿"
      }
    ],
    version: 2
  },
  "flag-va": {
    id: "flag-va",
    name: "Vatican City Flag",
    keywords: [
      "va",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fb-1f1e6",
        native: "🇻🇦"
      }
    ],
    version: 2
  },
  "flag-vc": {
    id: "flag-vc",
    name: "St. Vincent & Grenadines Flag",
    keywords: [
      "vc",
      "st",
      "saint",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fb-1f1e8",
        native: "🇻🇨"
      }
    ],
    version: 2
  },
  "flag-ve": {
    id: "flag-ve",
    name: "Venezuela Flag",
    keywords: [
      "ve",
      "bolivarian",
      "republic",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fb-1f1ea",
        native: "🇻🇪"
      }
    ],
    version: 2
  },
  "flag-vg": {
    id: "flag-vg",
    name: "British Virgin Islands Flag",
    keywords: [
      "vg",
      "bvi",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fb-1f1ec",
        native: "🇻🇬"
      }
    ],
    version: 2
  },
  "flag-vi": {
    id: "flag-vi",
    name: "U.s. Virgin Islands Flag",
    keywords: [
      "vi",
      "u",
      "s",
      "us",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fb-1f1ee",
        native: "🇻🇮"
      }
    ],
    version: 2
  },
  "flag-vn": {
    id: "flag-vn",
    name: "Vietnam Flag",
    keywords: [
      "vn",
      "viet",
      "nam",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fb-1f1f3",
        native: "🇻🇳"
      }
    ],
    version: 2
  },
  "flag-vu": {
    id: "flag-vu",
    name: "Vanuatu Flag",
    keywords: [
      "vu",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fb-1f1fa",
        native: "🇻🇺"
      }
    ],
    version: 2
  },
  "flag-wf": {
    id: "flag-wf",
    name: "Wallis & Futuna Flag",
    keywords: [
      "wf",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fc-1f1eb",
        native: "🇼🇫"
      }
    ],
    version: 2
  },
  "flag-ws": {
    id: "flag-ws",
    name: "Samoa Flag",
    keywords: [
      "ws",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fc-1f1f8",
        native: "🇼🇸"
      }
    ],
    version: 2
  },
  "flag-xk": {
    id: "flag-xk",
    name: "Kosovo Flag",
    keywords: [
      "xk",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fd-1f1f0",
        native: "🇽🇰"
      }
    ],
    version: 2
  },
  "flag-ye": {
    id: "flag-ye",
    name: "Yemen Flag",
    keywords: [
      "ye",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fe-1f1ea",
        native: "🇾🇪"
      }
    ],
    version: 2
  },
  "flag-yt": {
    id: "flag-yt",
    name: "Mayotte Flag",
    keywords: [
      "yt",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1fe-1f1f9",
        native: "🇾🇹"
      }
    ],
    version: 2
  },
  "flag-za": {
    id: "flag-za",
    name: "South Africa Flag",
    keywords: [
      "za",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ff-1f1e6",
        native: "🇿🇦"
      }
    ],
    version: 2
  },
  "flag-zm": {
    id: "flag-zm",
    name: "Zambia Flag",
    keywords: [
      "zm",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ff-1f1f2",
        native: "🇿🇲"
      }
    ],
    version: 2
  },
  "flag-zw": {
    id: "flag-zw",
    name: "Zimbabwe Flag",
    keywords: [
      "zw",
      "nation",
      "country",
      "banner"
    ],
    skins: [
      {
        unified: "1f1ff-1f1fc",
        native: "🇿🇼"
      }
    ],
    version: 2
  },
  "flag-england": {
    id: "flag-england",
    name: "England Flag",
    keywords: [
      "english"
    ],
    skins: [
      {
        unified: "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f",
        native: "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
      }
    ],
    version: 5
  },
  "flag-scotland": {
    id: "flag-scotland",
    name: "Scotland Flag",
    keywords: [
      "scottish"
    ],
    skins: [
      {
        unified: "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f",
        native: "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
      }
    ],
    version: 5
  },
  "flag-wales": {
    id: "flag-wales",
    name: "Wales Flag",
    keywords: [
      "welsh"
    ],
    skins: [
      {
        unified: "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f",
        native: "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
      }
    ],
    version: 5
  }
}, Hm = {
  satisfied: "laughing",
  grinning_face_with_star_eyes: "star-struck",
  grinning_face_with_one_large_and_one_small_eye: "zany_face",
  smiling_face_with_smiling_eyes_and_hand_covering_mouth: "face_with_hand_over_mouth",
  face_with_finger_covering_closed_lips: "shushing_face",
  face_with_one_eyebrow_raised: "face_with_raised_eyebrow",
  face_with_open_mouth_vomiting: "face_vomiting",
  shocked_face_with_exploding_head: "exploding_head",
  serious_face_with_symbols_covering_mouth: "face_with_symbols_on_mouth",
  poop: "hankey",
  shit: "hankey",
  collision: "boom",
  raised_hand: "hand",
  hand_with_index_and_middle_fingers_crossed: "crossed_fingers",
  sign_of_the_horns: "the_horns",
  reversed_hand_with_middle_finger_extended: "middle_finger",
  thumbsup: "+1",
  thumbsdown: "-1",
  punch: "facepunch",
  mother_christmas: "mrs_claus",
  running: "runner",
  "man-with-bunny-ears-partying": "men-with-bunny-ears-partying",
  "woman-with-bunny-ears-partying": "women-with-bunny-ears-partying",
  women_holding_hands: "two_women_holding_hands",
  woman_and_man_holding_hands: "man_and_woman_holding_hands",
  couple: "man_and_woman_holding_hands",
  men_holding_hands: "two_men_holding_hands",
  paw_prints: "feet",
  flipper: "dolphin",
  honeybee: "bee",
  lady_beetle: "ladybug",
  cooking: "fried_egg",
  knife: "hocho",
  red_car: "car",
  sailboat: "boat",
  waxing_gibbous_moon: "moon",
  sun_small_cloud: "mostly_sunny",
  sun_behind_cloud: "barely_sunny",
  sun_behind_rain_cloud: "partly_sunny_rain",
  lightning_cloud: "lightning",
  tornado_cloud: "tornado",
  tshirt: "shirt",
  shoe: "mans_shoe",
  telephone: "phone",
  lantern: "izakaya_lantern",
  open_book: "book",
  envelope: "email",
  pencil: "memo",
  heavy_exclamation_mark: "exclamation",
  staff_of_aesculapius: "medical_symbol",
  "flag-cn": "cn",
  "flag-de": "de",
  "flag-es": "es",
  "flag-fr": "fr",
  uk: "gb",
  "flag-gb": "gb",
  "flag-it": "it",
  "flag-jp": "jp",
  "flag-kr": "kr",
  "flag-ru": "ru",
  "flag-us": "us"
}, Um = {
  cols: 61,
  rows: 61
}, Gm = {
  categories: qm,
  emojis: Wm,
  aliases: Hm,
  sheet: Um
};
function Af(e) {
  return e && e.__esModule ? e.default : e;
}
function ce(e, i, n) {
  return i in e ? Object.defineProperty(e, i, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[i] = n, e;
}
var En, A, Rf, Mi, Ef, ur, yn = {}, Bf = [], Km = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function De(e, i) {
  for (var n in i)
    e[n] = i[n];
  return e;
}
function Df(e) {
  var i = e.parentNode;
  i && i.removeChild(e);
}
function Ta(e, i, n) {
  var a, t, s, r = {};
  for (s in i)
    s == "key" ? a = i[s] : s == "ref" ? t = i[s] : r[s] = i[s];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? En.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (s in e.defaultProps)
      r[s] === void 0 && (r[s] = e.defaultProps[s]);
  return on(e, r, a, t, null);
}
function on(e, i, n, a, t) {
  var s = {
    type: e,
    props: i,
    key: n,
    ref: a,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: t ?? ++Rf
  };
  return t == null && A.vnode != null && A.vnode(s), s;
}
function je() {
  return {
    current: null
  };
}
function oi(e) {
  return e.children;
}
function xe(e, i) {
  this.props = e, this.context = i;
}
function fi(e, i) {
  if (i == null)
    return e.__ ? fi(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; i < e.__k.length; i++)
    if ((n = e.__k[i]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? fi(e) : null;
}
function $f(e) {
  var i, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, i = 0; i < e.__k.length; i++)
      if ((n = e.__k[i]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return $f(e);
  }
}
function cr(e) {
  (!e.__d && (e.__d = !0) && Mi.push(e) && !wn.__r++ || ur !== A.debounceRendering) && ((ur = A.debounceRendering) || Ef)(wn);
}
function wn() {
  for (var e; wn.__r = Mi.length; )
    e = Mi.sort(function(i, n) {
      return i.__v.__b - n.__v.__b;
    }), Mi = [], e.some(function(i) {
      var n, a, t, s, r, o;
      i.__d && (r = (s = (n = i).__v).__e, (o = n.__P) && (a = [], (t = De({}, s)).__v = s.__v + 1, bt(o, s, t, n.__n, o.ownerSVGElement !== void 0, s.__h != null ? [
        r
      ] : null, a, r ?? fi(s), s.__h), Of(a, s), s.__e != r && $f(s)));
    });
}
function Lf(e, i, n, a, t, s, r, o, f, l) {
  var d, u, c, v, g, y, k, p = a && a.__k || Bf, w = p.length;
  for (n.__k = [], d = 0; d < i.length; d++)
    if ((v = n.__k[d] = (v = i[d]) == null || typeof v == "boolean" ? null : typeof v == "string" || typeof v == "number" || typeof v == "bigint" ? on(null, v, null, null, v) : Array.isArray(v) ? on(oi, {
      children: v
    }, null, null, null) : v.__b > 0 ? on(v.type, v.props, v.key, null, v.__v) : v) != null) {
      if (v.__ = n, v.__b = n.__b + 1, (c = p[d]) === null || c && v.key == c.key && v.type === c.type)
        p[d] = void 0;
      else
        for (u = 0; u < w; u++) {
          if ((c = p[u]) && v.key == c.key && v.type === c.type) {
            p[u] = void 0;
            break;
          }
          c = null;
        }
      bt(e, v, c = c || yn, t, s, r, o, f, l), g = v.__e, (u = v.ref) && c.ref != u && (k || (k = []), c.ref && k.push(c.ref, null, v), k.push(u, v.__c || g, v)), g != null ? (y == null && (y = g), typeof v.type == "function" && v.__k === c.__k ? v.__d = f = Vf(v, f, e) : f = zf(e, v, c, p, g, f), typeof n.type == "function" && (n.__d = f)) : f && c.__e == f && f.parentNode != e && (f = fi(c));
    }
  for (n.__e = y, d = w; d--; )
    p[d] != null && (typeof n.type == "function" && p[d].__e != null && p[d].__e == n.__d && (n.__d = fi(a, d + 1)), If(p[d], p[d]));
  if (k)
    for (d = 0; d < k.length; d++)
      Nf(k[d], k[++d], k[++d]);
}
function Vf(e, i, n) {
  for (var a, t = e.__k, s = 0; t && s < t.length; s++)
    (a = t[s]) && (a.__ = e, i = typeof a.type == "function" ? Vf(a, i, n) : zf(n, a, a, t, a.__e, i));
  return i;
}
function bn(e, i) {
  return i = i || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
    bn(n, i);
  }) : i.push(e)), i;
}
function zf(e, i, n, a, t, s) {
  var r, o, f;
  if (i.__d !== void 0)
    r = i.__d, i.__d = void 0;
  else if (n == null || t != s || t.parentNode == null)
    e:
      if (s == null || s.parentNode !== e)
        e.appendChild(t), r = null;
      else {
        for (o = s, f = 0; (o = o.nextSibling) && f < a.length; f += 2)
          if (o == t)
            break e;
        e.insertBefore(t, s), r = s;
      }
  return r !== void 0 ? r : t.nextSibling;
}
function Ym(e, i, n, a, t) {
  var s;
  for (s in n)
    s === "children" || s === "key" || s in i || _n(e, s, null, n[s], a);
  for (s in i)
    t && typeof i[s] != "function" || s === "children" || s === "key" || s === "value" || s === "checked" || n[s] === i[s] || _n(e, s, i[s], n[s], a);
}
function mr(e, i, n) {
  i[0] === "-" ? e.setProperty(i, n) : e[i] = n == null ? "" : typeof n != "number" || Km.test(i) ? n : n + "px";
}
function _n(e, i, n, a, t) {
  var s;
  e:
    if (i === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof a == "string" && (e.style.cssText = a = ""), a)
          for (i in a)
            n && i in n || mr(e.style, i, "");
        if (n)
          for (i in n)
            a && n[i] === a[i] || mr(e.style, i, n[i]);
      }
    else if (i[0] === "o" && i[1] === "n")
      s = i !== (i = i.replace(/Capture$/, "")), i = i.toLowerCase() in e ? i.toLowerCase().slice(2) : i.slice(2), e.l || (e.l = {}), e.l[i + s] = n, n ? a || e.addEventListener(i, s ? hr : vr, s) : e.removeEventListener(i, s ? hr : vr, s);
    else if (i !== "dangerouslySetInnerHTML") {
      if (t)
        i = i.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (i !== "href" && i !== "list" && i !== "form" && i !== "tabIndex" && i !== "download" && i in e)
        try {
          e[i] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n != null && (n !== !1 || i[0] === "a" && i[1] === "r") ? e.setAttribute(i, n) : e.removeAttribute(i));
    }
}
function vr(e) {
  this.l[e.type + !1](A.event ? A.event(e) : e);
}
function hr(e) {
  this.l[e.type + !0](A.event ? A.event(e) : e);
}
function bt(e, i, n, a, t, s, r, o, f) {
  var l, d, u, c, v, g, y, k, p, w, P, x = i.type;
  if (i.constructor !== void 0)
    return null;
  n.__h != null && (f = n.__h, o = i.__e = n.__e, i.__h = null, s = [
    o
  ]), (l = A.__b) && l(i);
  try {
    e:
      if (typeof x == "function") {
        if (k = i.props, p = (l = x.contextType) && a[l.__c], w = l ? p ? p.props.value : l.__ : a, n.__c ? y = (d = i.__c = n.__c).__ = d.__E : ("prototype" in x && x.prototype.render ? i.__c = d = new x(k, w) : (i.__c = d = new xe(k, w), d.constructor = x, d.render = Jm), p && p.sub(d), d.props = k, d.state || (d.state = {}), d.context = w, d.__n = a, u = d.__d = !0, d.__h = []), d.__s == null && (d.__s = d.state), x.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = De({}, d.__s)), De(d.__s, x.getDerivedStateFromProps(k, d.__s))), c = d.props, v = d.state, u)
          x.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), d.componentDidMount != null && d.__h.push(d.componentDidMount);
        else {
          if (x.getDerivedStateFromProps == null && k !== c && d.componentWillReceiveProps != null && d.componentWillReceiveProps(k, w), !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(k, d.__s, w) === !1 || i.__v === n.__v) {
            d.props = k, d.state = d.__s, i.__v !== n.__v && (d.__d = !1), d.__v = i, i.__e = n.__e, i.__k = n.__k, i.__k.forEach(function(S) {
              S && (S.__ = i);
            }), d.__h.length && r.push(d);
            break e;
          }
          d.componentWillUpdate != null && d.componentWillUpdate(k, d.__s, w), d.componentDidUpdate != null && d.__h.push(function() {
            d.componentDidUpdate(c, v, g);
          });
        }
        d.context = w, d.props = k, d.state = d.__s, (l = A.__r) && l(i), d.__d = !1, d.__v = i, d.__P = e, l = d.render(d.props, d.state, d.context), d.state = d.__s, d.getChildContext != null && (a = De(De({}, a), d.getChildContext())), u || d.getSnapshotBeforeUpdate == null || (g = d.getSnapshotBeforeUpdate(c, v)), P = l != null && l.type === oi && l.key == null ? l.props.children : l, Lf(e, Array.isArray(P) ? P : [
          P
        ], i, n, a, t, s, r, o, f), d.base = i.__e, i.__h = null, d.__h.length && r.push(d), y && (d.__E = d.__ = null), d.__e = !1;
      } else
        s == null && i.__v === n.__v ? (i.__k = n.__k, i.__e = n.__e) : i.__e = Xm(n.__e, i, n, a, t, s, r, f);
    (l = A.diffed) && l(i);
  } catch (S) {
    i.__v = null, (f || s != null) && (i.__e = o, i.__h = !!f, s[s.indexOf(o)] = null), A.__e(S, i, n);
  }
}
function Of(e, i) {
  A.__c && A.__c(i, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(a) {
        a.call(n);
      });
    } catch (a) {
      A.__e(a, n.__v);
    }
  });
}
function Xm(e, i, n, a, t, s, r, o) {
  var f, l, d, u = n.props, c = i.props, v = i.type, g = 0;
  if (v === "svg" && (t = !0), s != null) {
    for (; g < s.length; g++)
      if ((f = s[g]) && "setAttribute" in f == !!v && (v ? f.localName === v : f.nodeType === 3)) {
        e = f, s[g] = null;
        break;
      }
  }
  if (e == null) {
    if (v === null)
      return document.createTextNode(c);
    e = t ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, c.is && c), s = null, o = !1;
  }
  if (v === null)
    u === c || o && e.data === c || (e.data = c);
  else {
    if (s = s && En.call(e.childNodes), l = (u = n.props || yn).dangerouslySetInnerHTML, d = c.dangerouslySetInnerHTML, !o) {
      if (s != null)
        for (u = {}, g = 0; g < e.attributes.length; g++)
          u[e.attributes[g].name] = e.attributes[g].value;
      (d || l) && (d && (l && d.__html == l.__html || d.__html === e.innerHTML) || (e.innerHTML = d && d.__html || ""));
    }
    if (Ym(e, c, u, t, o), d)
      i.__k = [];
    else if (g = i.props.children, Lf(e, Array.isArray(g) ? g : [
      g
    ], i, n, a, t && v !== "foreignObject", s, r, s ? s[0] : n.__k && fi(n, 0), o), s != null)
      for (g = s.length; g--; )
        s[g] != null && Df(s[g]);
    o || ("value" in c && (g = c.value) !== void 0 && (g !== u.value || g !== e.value || v === "progress" && !g) && _n(e, "value", g, u.value, !1), "checked" in c && (g = c.checked) !== void 0 && g !== e.checked && _n(e, "checked", g, u.checked, !1));
  }
  return e;
}
function Nf(e, i, n) {
  try {
    typeof e == "function" ? e(i) : e.current = i;
  } catch (a) {
    A.__e(a, n);
  }
}
function If(e, i, n) {
  var a, t;
  if (A.unmount && A.unmount(e), (a = e.ref) && (a.current && a.current !== e.__e || Nf(a, null, i)), (a = e.__c) != null) {
    if (a.componentWillUnmount)
      try {
        a.componentWillUnmount();
      } catch (s) {
        A.__e(s, i);
      }
    a.base = a.__P = null;
  }
  if (a = e.__k)
    for (t = 0; t < a.length; t++)
      a[t] && If(a[t], i, typeof e.type != "function");
  n || e.__e == null || Df(e.__e), e.__e = e.__d = void 0;
}
function Jm(e, i, n) {
  return this.constructor(e, n);
}
function qf(e, i, n) {
  var a, t, s;
  A.__ && A.__(e, i), t = (a = typeof n == "function") ? null : n && n.__k || i.__k, s = [], bt(i, e = (!a && n || i).__k = Ta(oi, null, [
    e
  ]), t || yn, yn, i.ownerSVGElement !== void 0, !a && n ? [
    n
  ] : t ? null : i.firstChild ? En.call(i.childNodes) : null, s, !a && n ? n : t ? t.__e : i.firstChild, a), Of(s, e);
}
En = Bf.slice, A = {
  __e: function(e, i) {
    for (var n, a, t; i = i.__; )
      if ((n = i.__c) && !n.__)
        try {
          if ((a = n.constructor) && a.getDerivedStateFromError != null && (n.setState(a.getDerivedStateFromError(e)), t = n.__d), n.componentDidCatch != null && (n.componentDidCatch(e), t = n.__d), t)
            return n.__E = n;
        } catch (s) {
          e = s;
        }
    throw e;
  }
}, Rf = 0, xe.prototype.setState = function(e, i) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = De({}, this.state), typeof e == "function" && (e = e(De({}, n), this.props)), e && De(n, e), e != null && this.__v && (i && this.__h.push(i), cr(this));
}, xe.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), cr(this));
}, xe.prototype.render = oi, Mi = [], Ef = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, wn.__r = 0;
var Zm = 0;
function b(e, i, n, a, t) {
  var s, r, o = {};
  for (r in i)
    r == "ref" ? s = i[r] : o[r] = i[r];
  var f = {
    type: e,
    props: o,
    key: n,
    ref: s,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: --Zm,
    __source: a,
    __self: t
  };
  if (typeof e == "function" && (s = e.defaultProps))
    for (r in s)
      o[r] === void 0 && (o[r] = s[r]);
  return A.vnode && A.vnode(f), f;
}
function Qm(e, i) {
  try {
    window.localStorage[`emoji-mart.${e}`] = JSON.stringify(i);
  } catch {
  }
}
function ev(e) {
  try {
    const i = window.localStorage[`emoji-mart.${e}`];
    if (i)
      return JSON.parse(i);
  } catch {
  }
}
var $e = {
  set: Qm,
  get: ev
};
const na = /* @__PURE__ */ new Map(), iv = [
  {
    v: 15,
    emoji: "🫨"
  },
  {
    v: 14,
    emoji: "🫠"
  },
  {
    v: 13.1,
    emoji: "😶‍🌫️"
  },
  {
    v: 13,
    emoji: "🥸"
  },
  {
    v: 12.1,
    emoji: "🧑‍🦰"
  },
  {
    v: 12,
    emoji: "🥱"
  },
  {
    v: 11,
    emoji: "🥰"
  },
  {
    v: 5,
    emoji: "🤩"
  },
  {
    v: 4,
    emoji: "👱‍♀️"
  },
  {
    v: 3,
    emoji: "🤣"
  },
  {
    v: 2,
    emoji: "👋🏻"
  },
  {
    v: 1,
    emoji: "🙃"
  }
];
function nv() {
  for (const { v: e, emoji: i } of iv)
    if (Wf(i))
      return e;
}
function av() {
  return !Wf("🇨🇦");
}
function Wf(e) {
  if (na.has(e))
    return na.get(e);
  const i = tv(e);
  return na.set(e, i), i;
}
const tv = (() => {
  let e = null;
  try {
    navigator.userAgent.includes("jsdom") || (e = document.createElement("canvas").getContext("2d", {
      willReadFrequently: !0
    }));
  } catch {
  }
  if (!e)
    return () => !1;
  const i = 25, n = 20, a = Math.floor(i / 2);
  return e.font = a + "px Arial, Sans-Serif", e.textBaseline = "top", e.canvas.width = n * 2, e.canvas.height = i, (t) => {
    e.clearRect(0, 0, n * 2, i), e.fillStyle = "#FF0000", e.fillText(t, 0, 22), e.fillStyle = "#0000FF", e.fillText(t, n, 22);
    const s = e.getImageData(0, 0, n, i).data, r = s.length;
    let o = 0;
    for (; o < r && !s[o + 3]; o += 4)
      ;
    if (o >= r)
      return !1;
    const f = n + o / 4 % n, l = Math.floor(o / 4 / n), d = e.getImageData(f, l, 1, 1).data;
    return !(s[o] !== d[0] || s[o + 2] !== d[2] || e.measureText(t).width >= n);
  };
})();
var gr = {
  latestVersion: nv,
  noCountryFlags: av
};
const Aa = [
  "+1",
  "grinning",
  "kissing_heart",
  "heart_eyes",
  "laughing",
  "stuck_out_tongue_winking_eye",
  "sweat_smile",
  "joy",
  "scream",
  "disappointed",
  "unamused",
  "weary",
  "sob",
  "sunglasses",
  "heart"
];
let Q = null;
function sv(e) {
  Q || (Q = $e.get("frequently") || {});
  const i = e.id || e;
  i && (Q[i] || (Q[i] = 0), Q[i] += 1, $e.set("last", i), $e.set("frequently", Q));
}
function rv({ maxFrequentRows: e, perLine: i }) {
  if (!e)
    return [];
  Q || (Q = $e.get("frequently"));
  let n = [];
  if (!Q) {
    Q = {};
    for (let s in Aa.slice(0, i)) {
      const r = Aa[s];
      Q[r] = i - s, n.push(r);
    }
    return n;
  }
  const a = e * i, t = $e.get("last");
  for (let s in Q)
    n.push(s);
  if (n.sort((s, r) => {
    const o = Q[r], f = Q[s];
    return o == f ? s.localeCompare(r) : o - f;
  }), n.length > a) {
    const s = n.slice(a);
    n = n.slice(0, a);
    for (let r of s)
      r != t && delete Q[r];
    t && n.indexOf(t) == -1 && (delete Q[n[n.length - 1]], n.splice(-1, 1, t)), $e.set("frequently", Q);
  }
  return n;
}
var Hf = {
  add: sv,
  get: rv,
  DEFAULTS: Aa
}, Uf = {};
Uf = JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');
var Te = {
  autoFocus: {
    value: !1
  },
  dynamicWidth: {
    value: !1
  },
  emojiButtonColors: {
    value: null
  },
  emojiButtonRadius: {
    value: "100%"
  },
  emojiButtonSize: {
    value: 36
  },
  emojiSize: {
    value: 24
  },
  emojiVersion: {
    value: 15,
    choices: [
      1,
      2,
      3,
      4,
      5,
      11,
      12,
      12.1,
      13,
      13.1,
      14,
      15
    ]
  },
  exceptEmojis: {
    value: []
  },
  icons: {
    value: "auto",
    choices: [
      "auto",
      "outline",
      "solid"
    ]
  },
  locale: {
    value: "en",
    choices: [
      "en",
      "ar",
      "be",
      "cs",
      "de",
      "es",
      "fa",
      "fi",
      "fr",
      "hi",
      "it",
      "ja",
      "ko",
      "nl",
      "pl",
      "pt",
      "ru",
      "sa",
      "tr",
      "uk",
      "vi",
      "zh"
    ]
  },
  maxFrequentRows: {
    value: 4
  },
  navPosition: {
    value: "top",
    choices: [
      "top",
      "bottom",
      "none"
    ]
  },
  noCountryFlags: {
    value: !1
  },
  noResultsEmoji: {
    value: null
  },
  perLine: {
    value: 9
  },
  previewEmoji: {
    value: null
  },
  previewPosition: {
    value: "bottom",
    choices: [
      "top",
      "bottom",
      "none"
    ]
  },
  searchPosition: {
    value: "sticky",
    choices: [
      "sticky",
      "static",
      "none"
    ]
  },
  set: {
    value: "native",
    choices: [
      "native",
      "apple",
      "facebook",
      "google",
      "twitter"
    ]
  },
  skin: {
    value: 1,
    choices: [
      1,
      2,
      3,
      4,
      5,
      6
    ]
  },
  skinTonePosition: {
    value: "preview",
    choices: [
      "preview",
      "search",
      "none"
    ]
  },
  theme: {
    value: "auto",
    choices: [
      "auto",
      "light",
      "dark"
    ]
  },
  // Data
  categories: null,
  categoryIcons: null,
  custom: null,
  data: null,
  i18n: null,
  // Callbacks
  getImageURL: null,
  getSpritesheetURL: null,
  onAddCustomEmoji: null,
  onClickOutside: null,
  onEmojiSelect: null,
  // Deprecated
  stickySearch: {
    deprecated: !0,
    value: !0
  }
};
let ee = null, D = null;
const aa = {};
async function pr(e) {
  if (aa[e])
    return aa[e];
  const n = await (await fetch(e)).json();
  return aa[e] = n, n;
}
let ta = null, Gf = null, Kf = !1;
function Bn(e, { caller: i } = {}) {
  return ta || (ta = new Promise((n) => {
    Gf = n;
  })), e ? ov(e) : i && !Kf && console.warn(`\`${i}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`), ta;
}
async function ov(e) {
  Kf = !0;
  let { emojiVersion: i, set: n, locale: a } = e;
  if (i || (i = Te.emojiVersion.value), n || (n = Te.set.value), a || (a = Te.locale.value), D)
    D.categories = D.categories.filter((f) => !f.name);
  else {
    D = (typeof e.data == "function" ? await e.data() : e.data) || await pr(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${i}/${n}.json`), D.emoticons = {}, D.natives = {}, D.categories.unshift({
      id: "frequent",
      emojis: []
    });
    for (const f in D.aliases) {
      const l = D.aliases[f], d = D.emojis[l];
      d && (d.aliases || (d.aliases = []), d.aliases.push(f));
    }
    D.originalCategories = D.categories;
  }
  if (ee = (typeof e.i18n == "function" ? await e.i18n() : e.i18n) || (a == "en" ? /* @__PURE__ */ Af(Uf) : await pr(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${a}.json`)), e.custom)
    for (let f in e.custom) {
      f = parseInt(f);
      const l = e.custom[f], d = e.custom[f - 1];
      if (!(!l.emojis || !l.emojis.length)) {
        l.id || (l.id = `custom_${f + 1}`), l.name || (l.name = ee.categories.custom), d && !l.icon && (l.target = d.target || d), D.categories.push(l);
        for (const u of l.emojis)
          D.emojis[u.id] = u;
      }
    }
  e.categories && (D.categories = D.originalCategories.filter((f) => e.categories.indexOf(f.id) != -1).sort((f, l) => {
    const d = e.categories.indexOf(f.id), u = e.categories.indexOf(l.id);
    return d - u;
  }));
  let t = null, s = null;
  n == "native" && (t = gr.latestVersion(), s = e.noCountryFlags || gr.noCountryFlags());
  let r = D.categories.length, o = !1;
  for (; r--; ) {
    const f = D.categories[r];
    if (f.id == "frequent") {
      let { maxFrequentRows: u, perLine: c } = e;
      u = u >= 0 ? u : Te.maxFrequentRows.value, c || (c = Te.perLine.value), f.emojis = Hf.get({
        maxFrequentRows: u,
        perLine: c
      });
    }
    if (!f.emojis || !f.emojis.length) {
      D.categories.splice(r, 1);
      continue;
    }
    const { categoryIcons: l } = e;
    if (l) {
      const u = l[f.id];
      u && !f.icon && (f.icon = u);
    }
    let d = f.emojis.length;
    for (; d--; ) {
      const u = f.emojis[d], c = u.id ? u : D.emojis[u], v = () => {
        f.emojis.splice(d, 1);
      };
      if (!c || e.exceptEmojis && e.exceptEmojis.includes(c.id)) {
        v();
        continue;
      }
      if (t && c.version > t) {
        v();
        continue;
      }
      if (s && f.id == "flags" && !cv.includes(c.id)) {
        v();
        continue;
      }
      if (!c.search) {
        if (o = !0, c.search = "," + [
          [
            c.id,
            !1
          ],
          [
            c.name,
            !0
          ],
          [
            c.keywords,
            !1
          ],
          [
            c.emoticons,
            !1
          ]
        ].map(([y, k]) => {
          if (y)
            return (Array.isArray(y) ? y : [
              y
            ]).map((p) => (k ? p.split(/[-|_|\s]+/) : [
              p
            ]).map((w) => w.toLowerCase())).flat();
        }).flat().filter((y) => y && y.trim()).join(","), c.emoticons)
          for (const y of c.emoticons)
            D.emoticons[y] || (D.emoticons[y] = c.id);
        let g = 0;
        for (const y of c.skins) {
          if (!y)
            continue;
          g++;
          const { native: k } = y;
          k && (D.natives[k] = c.id, c.search += `,${k}`);
          const p = g == 1 ? "" : `:skin-tone-${g}:`;
          y.shortcodes = `:${c.id}:${p}`;
        }
      }
    }
  }
  o && ai.reset(), Gf();
}
function Yf(e, i, n) {
  e || (e = {});
  const a = {};
  for (let t in i)
    a[t] = Xf(t, e, i, n);
  return a;
}
function Xf(e, i, n, a) {
  const t = n[e];
  let s = a && a.getAttribute(e) || (i[e] != null && i[e] != null ? i[e] : null);
  return t && (s != null && t.value && typeof t.value != typeof s && (typeof t.value == "boolean" ? s = s != "false" : s = t.value.constructor(s)), t.transform && s && (s = t.transform(s)), (s == null || t.choices && t.choices.indexOf(s) == -1) && (s = t.value)), s;
}
const fv = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
let Ra = null;
function dv(e) {
  return e.id ? e : D.emojis[e] || D.emojis[D.aliases[e]] || D.emojis[D.natives[e]];
}
function lv() {
  Ra = null;
}
async function uv(e, { maxResults: i, caller: n } = {}) {
  if (!e || !e.trim().length)
    return null;
  i || (i = 90), await Bn(null, {
    caller: n || "SearchIndex.search"
  });
  const a = e.toLowerCase().replace(/(\w)-/, "$1 ").split(/[\s|,]+/).filter((o, f, l) => o.trim() && l.indexOf(o) == f);
  if (!a.length)
    return;
  let t = Ra || (Ra = Object.values(D.emojis)), s, r;
  for (const o of a) {
    if (!t.length)
      break;
    s = [], r = {};
    for (const f of t) {
      if (!f.search)
        continue;
      const l = f.search.indexOf(`,${o}`);
      l != -1 && (s.push(f), r[f.id] || (r[f.id] = 0), r[f.id] += f.id == o ? 0 : l + 1);
    }
    t = s;
  }
  return s.length < 2 || (s.sort((o, f) => {
    const l = r[o.id], d = r[f.id];
    return l == d ? o.id.localeCompare(f.id) : l - d;
  }), s.length > i && (s = s.slice(0, i))), s;
}
var ai = {
  search: uv,
  get: dv,
  reset: lv,
  SHORTCODES_REGEX: fv
};
const cv = [
  "checkered_flag",
  "crossed_flags",
  "pirate_flag",
  "rainbow-flag",
  "transgender_flag",
  "triangular_flag_on_post",
  "waving_black_flag",
  "waving_white_flag"
];
function mv(e, i) {
  return Array.isArray(e) && Array.isArray(i) && e.length === i.length && e.every((n, a) => n == i[a]);
}
async function vv(e = 1) {
  for (let i in [
    ...Array(e).keys()
  ])
    await new Promise(requestAnimationFrame);
}
function hv(e, { skinIndex: i = 0 } = {}) {
  const n = e.skins[i] || (() => (i = 0, e.skins[i]))(), a = {
    id: e.id,
    name: e.name,
    native: n.native,
    unified: n.unified,
    keywords: e.keywords,
    shortcodes: n.shortcodes || e.shortcodes
  };
  return e.skins.length > 1 && (a.skin = i + 1), n.src && (a.src = n.src), e.aliases && e.aliases.length && (a.aliases = e.aliases), e.emoticons && e.emoticons.length && (a.emoticons = e.emoticons), a;
}
const gv = {
  activity: {
    outline: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ b("path", {
        d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"
      })
    }),
    solid: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      children: /* @__PURE__ */ b("path", {
        d: "M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"
      })
    })
  },
  custom: /* @__PURE__ */ b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    children: /* @__PURE__ */ b("path", {
      d: "M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"
    })
  }),
  flags: {
    outline: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ b("path", {
        d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"
      })
    }),
    solid: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      children: /* @__PURE__ */ b("path", {
        d: "M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"
      })
    })
  },
  foods: {
    outline: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ b("path", {
        d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"
      })
    }),
    solid: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      children: /* @__PURE__ */ b("path", {
        d: "M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"
      })
    })
  },
  frequent: {
    outline: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ b("path", {
          d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"
        }),
        /* @__PURE__ */ b("path", {
          d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
        })
      ]
    }),
    solid: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      children: /* @__PURE__ */ b("path", {
        d: "M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
      })
    })
  },
  nature: {
    outline: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ b("path", {
          d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"
        }),
        /* @__PURE__ */ b("path", {
          d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"
        })
      ]
    }),
    solid: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 576 512",
      children: /* @__PURE__ */ b("path", {
        d: "M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"
      })
    })
  },
  objects: {
    outline: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ b("path", {
          d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"
        }),
        /* @__PURE__ */ b("path", {
          d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"
        })
      ]
    }),
    solid: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 384 512",
      children: /* @__PURE__ */ b("path", {
        d: "M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"
      })
    })
  },
  people: {
    outline: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ b("path", {
          d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"
        }),
        /* @__PURE__ */ b("path", {
          d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"
        })
      ]
    }),
    solid: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      children: /* @__PURE__ */ b("path", {
        d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"
      })
    })
  },
  places: {
    outline: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ b("path", {
          d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"
        }),
        /* @__PURE__ */ b("path", {
          d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"
        })
      ]
    }),
    solid: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      children: /* @__PURE__ */ b("path", {
        d: "M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"
      })
    })
  },
  symbols: {
    outline: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ b("path", {
        d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"
      })
    }),
    solid: /* @__PURE__ */ b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      children: /* @__PURE__ */ b("path", {
        d: "M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"
      })
    })
  }
}, pv = {
  loupe: /* @__PURE__ */ b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    children: /* @__PURE__ */ b("path", {
      d: "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
    })
  }),
  delete: /* @__PURE__ */ b("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    children: /* @__PURE__ */ b("path", {
      d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
    })
  })
};
var xn = {
  categories: gv,
  search: pv
};
function Ea(e) {
  let { id: i, skin: n, emoji: a } = e;
  if (e.shortcodes) {
    const o = e.shortcodes.match(ai.SHORTCODES_REGEX);
    o && (i = o[1], o[2] && (n = o[2]));
  }
  if (a || (a = ai.get(i || e.native)), !a)
    return e.fallback;
  const t = a.skins[n - 1] || a.skins[0], s = t.src || (e.set != "native" && !e.spritesheet ? typeof e.getImageURL == "function" ? e.getImageURL(e.set, t.unified) : `https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@15.0.1/img/${e.set}/64/${t.unified}.png` : void 0), r = typeof e.getSpritesheetURL == "function" ? e.getSpritesheetURL(e.set) : `https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@15.0.1/img/${e.set}/sheets-256/64.png`;
  return /* @__PURE__ */ b("span", {
    class: "emoji-mart-emoji",
    "data-emoji-set": e.set,
    children: s ? /* @__PURE__ */ b("img", {
      style: {
        maxWidth: e.size || "1em",
        maxHeight: e.size || "1em",
        display: "inline-block"
      },
      alt: t.native || t.shortcodes,
      src: s
    }) : e.set == "native" ? /* @__PURE__ */ b("span", {
      style: {
        fontSize: e.size,
        fontFamily: '"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'
      },
      children: t.native
    }) : /* @__PURE__ */ b("span", {
      style: {
        display: "block",
        width: e.size,
        height: e.size,
        backgroundImage: `url(${r})`,
        backgroundSize: `${100 * D.sheet.cols}% ${100 * D.sheet.rows}%`,
        backgroundPosition: `${100 / (D.sheet.cols - 1) * t.x}% ${100 / (D.sheet.rows - 1) * t.y}%`
      }
    })
  });
}
const kv = typeof window < "u" && window.HTMLElement ? window.HTMLElement : Object;
class Jf extends kv {
  static get observedAttributes() {
    return Object.keys(this.Props);
  }
  update(i = {}) {
    for (let n in i)
      this.attributeChangedCallback(n, null, i[n]);
  }
  attributeChangedCallback(i, n, a) {
    if (!this.component)
      return;
    const t = Xf(i, {
      [i]: a
    }, this.constructor.Props, this);
    this.component.componentWillReceiveProps ? this.component.componentWillReceiveProps({
      [i]: t
    }) : (this.component.props[i] = t, this.component.forceUpdate());
  }
  disconnectedCallback() {
    this.disconnected = !0, this.component && this.component.unregister && this.component.unregister();
  }
  constructor(i = {}) {
    if (super(), this.props = i, i.parent || i.ref) {
      let n = null;
      const a = i.parent || (n = i.ref && i.ref.current);
      n && (n.innerHTML = ""), a && a.appendChild(this);
    }
  }
}
class yv extends Jf {
  setShadow() {
    this.attachShadow({
      mode: "open"
    });
  }
  injectStyles(i) {
    if (!i)
      return;
    const n = document.createElement("style");
    n.textContent = i, this.shadowRoot.insertBefore(n, this.shadowRoot.firstChild);
  }
  constructor(i, { styles: n } = {}) {
    super(i), this.setShadow(), this.injectStyles(n);
  }
}
var Zf = {
  fallback: "",
  id: "",
  native: "",
  shortcodes: "",
  size: {
    value: "",
    transform: (e) => /\D/.test(e) ? e : `${e}px`
  },
  // Shared
  set: Te.set,
  skin: Te.skin
};
class Qf extends Jf {
  async connectedCallback() {
    const i = Yf(this.props, Zf, this);
    i.element = this, i.ref = (n) => {
      this.component = n;
    }, await Bn(), !this.disconnected && qf(/* @__PURE__ */ b(Ea, {
      ...i
    }), this);
  }
  constructor(i) {
    super(i);
  }
}
ce(Qf, "Props", Zf);
typeof customElements < "u" && !customElements.get("em-emoji") && customElements.define("em-emoji", Qf);
var kr, Ba = [], yr = A.__b, wr = A.__r, br = A.diffed, _r = A.__c, xr = A.unmount;
function wv() {
  var e;
  for (Ba.sort(function(i, n) {
    return i.__v.__b - n.__v.__b;
  }); e = Ba.pop(); )
    if (e.__P)
      try {
        e.__H.__h.forEach(fn), e.__H.__h.forEach(Da), e.__H.__h = [];
      } catch (i) {
        e.__H.__h = [], A.__e(i, e.__v);
      }
}
A.__b = function(e) {
  yr && yr(e);
}, A.__r = function(e) {
  wr && wr(e);
  var i = e.__c.__H;
  i && (i.__h.forEach(fn), i.__h.forEach(Da), i.__h = []);
}, A.diffed = function(e) {
  br && br(e);
  var i = e.__c;
  i && i.__H && i.__H.__h.length && (Ba.push(i) !== 1 && kr === A.requestAnimationFrame || ((kr = A.requestAnimationFrame) || function(n) {
    var a, t = function() {
      clearTimeout(s), Sr && cancelAnimationFrame(a), setTimeout(n);
    }, s = setTimeout(t, 100);
    Sr && (a = requestAnimationFrame(t));
  })(wv));
}, A.__c = function(e, i) {
  i.some(function(n) {
    try {
      n.__h.forEach(fn), n.__h = n.__h.filter(function(a) {
        return !a.__ || Da(a);
      });
    } catch (a) {
      i.some(function(t) {
        t.__h && (t.__h = []);
      }), i = [], A.__e(a, n.__v);
    }
  }), _r && _r(e, i);
}, A.unmount = function(e) {
  xr && xr(e);
  var i, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(a) {
    try {
      fn(a);
    } catch (t) {
      i = t;
    }
  }), i && A.__e(i, n.__v));
};
var Sr = typeof requestAnimationFrame == "function";
function fn(e) {
  var i = e.__c;
  typeof i == "function" && (e.__c = void 0, i());
}
function Da(e) {
  e.__c = e.__();
}
function bv(e, i) {
  for (var n in i)
    e[n] = i[n];
  return e;
}
function Cr(e, i) {
  for (var n in e)
    if (n !== "__source" && !(n in i))
      return !0;
  for (var a in i)
    if (a !== "__source" && e[a] !== i[a])
      return !0;
  return !1;
}
function Sn(e) {
  this.props = e;
}
(Sn.prototype = new xe()).isPureReactComponent = !0, Sn.prototype.shouldComponentUpdate = function(e, i) {
  return Cr(this.props, e) || Cr(this.state, i);
};
var Pr = A.__b;
A.__b = function(e) {
  e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Pr && Pr(e);
};
var _v = A.__e;
A.__e = function(e, i, n) {
  if (e.then) {
    for (var a, t = i; t = t.__; )
      if ((a = t.__c) && a.__c)
        return i.__e == null && (i.__e = n.__e, i.__k = n.__k), a.__c(e, i);
  }
  _v(e, i, n);
};
var Fr = A.unmount;
function sa() {
  this.__u = 0, this.t = null, this.__b = null;
}
function ed(e) {
  var i = e.__.__c;
  return i && i.__e && i.__e(e);
}
function nn() {
  this.u = null, this.o = null;
}
A.unmount = function(e) {
  var i = e.__c;
  i && i.__R && i.__R(), i && e.__h === !0 && (e.type = null), Fr && Fr(e);
}, (sa.prototype = new xe()).__c = function(e, i) {
  var n = i.__c, a = this;
  a.t == null && (a.t = []), a.t.push(n);
  var t = ed(a.__v), s = !1, r = function() {
    s || (s = !0, n.__R = null, t ? t(o) : o());
  };
  n.__R = r;
  var o = function() {
    if (!--a.__u) {
      if (a.state.__e) {
        var l = a.state.__e;
        a.__v.__k[0] = function u(c, v, g) {
          return c && (c.__v = null, c.__k = c.__k && c.__k.map(function(y) {
            return u(y, v, g);
          }), c.__c && c.__c.__P === v && (c.__e && g.insertBefore(c.__e, c.__d), c.__c.__e = !0, c.__c.__P = g)), c;
        }(l, l.__c.__P, l.__c.__O);
      }
      var d;
      for (a.setState({
        __e: a.__b = null
      }); d = a.t.pop(); )
        d.forceUpdate();
    }
  }, f = i.__h === !0;
  a.__u++ || f || a.setState({
    __e: a.__b = a.__v.__k[0]
  }), e.then(r, r);
}, sa.prototype.componentWillUnmount = function() {
  this.t = [];
}, sa.prototype.render = function(e, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), a = this.__v.__k[0].__c;
      this.__v.__k[0] = function s(r, o, f) {
        return r && (r.__c && r.__c.__H && (r.__c.__H.__.forEach(function(l) {
          typeof l.__c == "function" && l.__c();
        }), r.__c.__H = null), (r = bv({}, r)).__c != null && (r.__c.__P === f && (r.__c.__P = o), r.__c = null), r.__k = r.__k && r.__k.map(function(l) {
          return s(l, o, f);
        })), r;
      }(this.__b, n, a.__O = a.__P);
    }
    this.__b = null;
  }
  var t = i.__e && Ta(oi, null, e.fallback);
  return t && (t.__h = null), [
    Ta(oi, null, i.__e ? null : e.children),
    t
  ];
};
var jr = function(e, i, n) {
  if (++n[1] === n[0] && e.o.delete(i), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    for (n = e.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      e.u = n = n[2];
    }
};
(nn.prototype = new xe()).__e = function(e) {
  var i = this, n = ed(i.__v), a = i.o.get(e);
  return a[0]++, function(t) {
    var s = function() {
      i.props.revealOrder ? (a.push(t), jr(i, e, a)) : t();
    };
    n ? n(s) : s();
  };
}, nn.prototype.render = function(e) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = bn(e.children);
  e.revealOrder && e.revealOrder[0] === "b" && i.reverse();
  for (var n = i.length; n--; )
    this.o.set(i[n], this.u = [
      1,
      0,
      this.u
    ]);
  return e.children;
}, nn.prototype.componentDidUpdate = nn.prototype.componentDidMount = function() {
  var e = this;
  this.o.forEach(function(i, n) {
    jr(e, n, i);
  });
};
var xv = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Sv = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Cv = typeof document < "u", Pv = function(e) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e);
};
xe.prototype.isReactComponent = {}, [
  "componentWillMount",
  "componentWillReceiveProps",
  "componentWillUpdate"
].forEach(function(e) {
  Object.defineProperty(xe.prototype, e, {
    configurable: !0,
    get: function() {
      return this["UNSAFE_" + e];
    },
    set: function(i) {
      Object.defineProperty(this, e, {
        configurable: !0,
        writable: !0,
        value: i
      });
    }
  });
});
var Mr = A.event;
function Fv() {
}
function jv() {
  return this.cancelBubble;
}
function Mv() {
  return this.defaultPrevented;
}
A.event = function(e) {
  return Mr && (e = Mr(e)), e.persist = Fv, e.isPropagationStopped = jv, e.isDefaultPrevented = Mv, e.nativeEvent = e;
};
var Tr = {
  configurable: !0,
  get: function() {
    return this.class;
  }
}, Ar = A.vnode;
A.vnode = function(e) {
  var i = e.type, n = e.props, a = n;
  if (typeof i == "string") {
    var t = i.indexOf("-") === -1;
    for (var s in a = {}, n) {
      var r = n[s];
      Cv && s === "children" && i === "noscript" || s === "value" && "defaultValue" in n && r == null || (s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && r === !0 ? r = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + i) && !Pv(n.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(s) ? s = s.toLowerCase() : t && Sv.test(s) ? s = s.replace(/[A-Z0-9]/, "-$&").toLowerCase() : r === null && (r = void 0), a[s] = r);
    }
    i == "select" && a.multiple && Array.isArray(a.value) && (a.value = bn(n.children).forEach(function(o) {
      o.props.selected = a.value.indexOf(o.props.value) != -1;
    })), i == "select" && a.defaultValue != null && (a.value = bn(n.children).forEach(function(o) {
      o.props.selected = a.multiple ? a.defaultValue.indexOf(o.props.value) != -1 : a.defaultValue == o.props.value;
    })), e.props = a, n.class != n.className && (Tr.enumerable = "className" in n, n.className != null && (a.class = n.className), Object.defineProperty(a, "className", Tr));
  }
  e.$$typeof = xv, Ar && Ar(e);
};
var Rr = A.__r;
A.__r = function(e) {
  Rr && Rr(e), e.__c;
};
const Tv = {
  light: "outline",
  dark: "solid"
};
class Av extends Sn {
  renderIcon(i) {
    const { icon: n } = i;
    if (n) {
      if (n.svg)
        return /* @__PURE__ */ b("span", {
          class: "flex",
          dangerouslySetInnerHTML: {
            __html: n.svg
          }
        });
      if (n.src)
        return /* @__PURE__ */ b("img", {
          src: n.src
        });
    }
    const a = xn.categories[i.id] || xn.categories.custom, t = this.props.icons == "auto" ? Tv[this.props.theme] : this.props.icons;
    return a[t] || a;
  }
  render() {
    let i = null;
    return /* @__PURE__ */ b("nav", {
      id: "nav",
      class: "padding",
      "data-position": this.props.position,
      dir: this.props.dir,
      children: /* @__PURE__ */ b("div", {
        class: "flex relative",
        children: [
          this.categories.map((n, a) => {
            const t = n.name || ee.categories[n.id], s = !this.props.unfocused && n.id == this.state.categoryId;
            return s && (i = a), /* @__PURE__ */ b("button", {
              "aria-label": t,
              "aria-selected": s || void 0,
              title: t,
              type: "button",
              class: "flex flex-grow flex-center",
              onMouseDown: (r) => r.preventDefault(),
              onClick: () => {
                this.props.onClick({
                  category: n,
                  i: a
                });
              },
              children: this.renderIcon(n)
            });
          }),
          /* @__PURE__ */ b("div", {
            class: "bar",
            style: {
              width: `${100 / this.categories.length}%`,
              opacity: i == null ? 0 : 1,
              transform: this.props.dir === "rtl" ? `scaleX(-1) translateX(${i * 100}%)` : `translateX(${i * 100}%)`
            }
          })
        ]
      })
    });
  }
  constructor() {
    super(), this.categories = D.categories.filter((i) => !i.target), this.state = {
      categoryId: this.categories[0].id
    };
  }
}
class Rv extends Sn {
  shouldComponentUpdate(i) {
    for (let n in i)
      if (n != "children" && i[n] != this.props[n])
        return !0;
    return !1;
  }
  render() {
    return this.props.children;
  }
}
const an = {
  rowsPerRender: 10
};
class Ev extends xe {
  getInitialState(i = this.props) {
    return {
      skin: $e.get("skin") || i.skin,
      theme: this.initTheme(i.theme)
    };
  }
  componentWillMount() {
    this.dir = ee.rtl ? "rtl" : "ltr", this.refs = {
      menu: je(),
      navigation: je(),
      scroll: je(),
      search: je(),
      searchInput: je(),
      skinToneButton: je(),
      skinToneRadio: je()
    }, this.initGrid(), this.props.stickySearch == !1 && this.props.searchPosition == "sticky" && (console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."), this.props.searchPosition = "static");
  }
  componentDidMount() {
    if (this.register(), this.shadowRoot = this.base.parentNode, this.props.autoFocus) {
      const { searchInput: i } = this.refs;
      i.current && i.current.focus();
    }
  }
  componentWillReceiveProps(i) {
    this.nextState || (this.nextState = {});
    for (const n in i)
      this.nextState[n] = i[n];
    clearTimeout(this.nextStateTimer), this.nextStateTimer = setTimeout(() => {
      let n = !1;
      for (const t in this.nextState)
        this.props[t] = this.nextState[t], (t === "custom" || t === "categories") && (n = !0);
      delete this.nextState;
      const a = this.getInitialState();
      if (n)
        return this.reset(a);
      this.setState(a);
    });
  }
  componentWillUnmount() {
    this.unregister();
  }
  async reset(i = {}) {
    await Bn(this.props), this.initGrid(), this.unobserve(), this.setState(i, () => {
      this.observeCategories(), this.observeRows();
    });
  }
  register() {
    document.addEventListener("click", this.handleClickOutside), this.observe();
  }
  unregister() {
    var i;
    document.removeEventListener("click", this.handleClickOutside), (i = this.darkMedia) == null || i.removeEventListener("change", this.darkMediaCallback), this.unobserve();
  }
  observe() {
    this.observeCategories(), this.observeRows();
  }
  unobserve({ except: i = [] } = {}) {
    Array.isArray(i) || (i = [
      i
    ]);
    for (const n of this.observers)
      i.includes(n) || n.disconnect();
    this.observers = [].concat(i);
  }
  initGrid() {
    const { categories: i } = D;
    this.refs.categories = /* @__PURE__ */ new Map();
    const n = D.categories.map((t) => t.id).join(",");
    this.navKey && this.navKey != n && this.refs.scroll.current && (this.refs.scroll.current.scrollTop = 0), this.navKey = n, this.grid = [], this.grid.setsize = 0;
    const a = (t, s) => {
      const r = [];
      r.__categoryId = s.id, r.__index = t.length, this.grid.push(r);
      const o = this.grid.length - 1, f = o % an.rowsPerRender ? {} : je();
      return f.index = o, f.posinset = this.grid.setsize + 1, t.push(f), r;
    };
    for (let t of i) {
      const s = [];
      let r = a(s, t);
      for (let o of t.emojis)
        r.length == this.getPerLine() && (r = a(s, t)), this.grid.setsize += 1, r.push(o);
      this.refs.categories.set(t.id, {
        root: je(),
        rows: s
      });
    }
  }
  initTheme(i) {
    if (i != "auto")
      return i;
    if (!this.darkMedia) {
      if (this.darkMedia = matchMedia("(prefers-color-scheme: dark)"), this.darkMedia.media.match(/^not/))
        return "light";
      this.darkMedia.addEventListener("change", this.darkMediaCallback);
    }
    return this.darkMedia.matches ? "dark" : "light";
  }
  initDynamicPerLine(i = this.props) {
    if (!i.dynamicWidth)
      return;
    const { element: n, emojiButtonSize: a } = i, t = () => {
      const { width: r } = n.getBoundingClientRect();
      return Math.floor(r / a);
    }, s = new ResizeObserver(() => {
      this.unobserve({
        except: s
      }), this.setState({
        perLine: t()
      }, () => {
        this.initGrid(), this.forceUpdate(() => {
          this.observeCategories(), this.observeRows();
        });
      });
    });
    return s.observe(n), this.observers.push(s), t();
  }
  getPerLine() {
    return this.state.perLine || this.props.perLine;
  }
  getEmojiByPos([i, n]) {
    const a = this.state.searchResults || this.grid, t = a[i] && a[i][n];
    if (t)
      return ai.get(t);
  }
  observeCategories() {
    const i = this.refs.navigation.current;
    if (!i)
      return;
    const n = /* @__PURE__ */ new Map(), a = (r) => {
      r != i.state.categoryId && i.setState({
        categoryId: r
      });
    }, t = {
      root: this.refs.scroll.current,
      threshold: [
        0,
        1
      ]
    }, s = new IntersectionObserver((r) => {
      for (const f of r) {
        const l = f.target.dataset.id;
        n.set(l, f.intersectionRatio);
      }
      const o = [
        ...n
      ];
      for (const [f, l] of o)
        if (l) {
          a(f);
          break;
        }
    }, t);
    for (const { root: r } of this.refs.categories.values())
      s.observe(r.current);
    this.observers.push(s);
  }
  observeRows() {
    const i = {
      ...this.state.visibleRows
    }, n = new IntersectionObserver((a) => {
      for (const t of a) {
        const s = parseInt(t.target.dataset.index);
        t.isIntersecting ? i[s] = !0 : delete i[s];
      }
      this.setState({
        visibleRows: i
      });
    }, {
      root: this.refs.scroll.current,
      rootMargin: `${this.props.emojiButtonSize * (an.rowsPerRender + 5)}px 0px ${this.props.emojiButtonSize * an.rowsPerRender}px`
    });
    for (const { rows: a } of this.refs.categories.values())
      for (const t of a)
        t.current && n.observe(t.current);
    this.observers.push(n);
  }
  preventDefault(i) {
    i.preventDefault();
  }
  unfocusSearch() {
    const i = this.refs.searchInput.current;
    i && i.blur();
  }
  navigate({ e: i, input: n, left: a, right: t, up: s, down: r }) {
    const o = this.state.searchResults || this.grid;
    if (!o.length)
      return;
    let [f, l] = this.state.pos;
    const d = (() => {
      if (f == 0 && l == 0 && !i.repeat && (a || s))
        return null;
      if (f == -1)
        return !i.repeat && (t || r) && n.selectionStart == n.value.length ? [
          0,
          0
        ] : null;
      if (a || t) {
        let u = o[f];
        const c = a ? -1 : 1;
        if (l += c, !u[l]) {
          if (f += c, u = o[f], !u)
            return f = a ? 0 : o.length - 1, l = a ? 0 : o[f].length - 1, [
              f,
              l
            ];
          l = a ? u.length - 1 : 0;
        }
        return [
          f,
          l
        ];
      }
      if (s || r) {
        f += s ? -1 : 1;
        const u = o[f];
        return u ? (u[l] || (l = u.length - 1), [
          f,
          l
        ]) : (f = s ? 0 : o.length - 1, l = s ? 0 : o[f].length - 1, [
          f,
          l
        ]);
      }
    })();
    if (d)
      i.preventDefault();
    else {
      this.state.pos[0] > -1 && this.setState({
        pos: [
          -1,
          -1
        ]
      });
      return;
    }
    this.setState({
      pos: d,
      keyboard: !0
    }, () => {
      this.scrollTo({
        row: d[0]
      });
    });
  }
  scrollTo({ categoryId: i, row: n }) {
    const a = this.state.searchResults || this.grid;
    if (!a.length)
      return;
    const t = this.refs.scroll.current, s = t.getBoundingClientRect();
    let r = 0;
    if (n >= 0 && (i = a[n].__categoryId), i && (r = (this.refs[i] || this.refs.categories.get(i).root).current.getBoundingClientRect().top - (s.top - t.scrollTop) + 1), n >= 0)
      if (!n)
        r = 0;
      else {
        const o = a[n].__index, f = r + o * this.props.emojiButtonSize, l = f + this.props.emojiButtonSize + this.props.emojiButtonSize * 0.88;
        if (f < t.scrollTop)
          r = f;
        else if (l > t.scrollTop + s.height)
          r = l - s.height;
        else
          return;
      }
    this.ignoreMouse(), t.scrollTop = r;
  }
  ignoreMouse() {
    this.mouseIsIgnored = !0, clearTimeout(this.ignoreMouseTimer), this.ignoreMouseTimer = setTimeout(() => {
      delete this.mouseIsIgnored;
    }, 100);
  }
  handleEmojiOver(i) {
    this.mouseIsIgnored || this.state.showSkins || this.setState({
      pos: i || [
        -1,
        -1
      ],
      keyboard: !1
    });
  }
  handleEmojiClick({ e: i, emoji: n, pos: a }) {
    if (this.props.onEmojiSelect && (!n && a && (n = this.getEmojiByPos(a)), n)) {
      const t = hv(n, {
        skinIndex: this.state.skin - 1
      });
      this.props.maxFrequentRows && Hf.add(t, this.props), this.props.onEmojiSelect(t, i);
    }
  }
  closeSkins() {
    this.state.showSkins && (this.setState({
      showSkins: null,
      tempSkin: null
    }), this.base.removeEventListener("click", this.handleBaseClick), this.base.removeEventListener("keydown", this.handleBaseKeydown));
  }
  handleSkinMouseOver(i) {
    this.setState({
      tempSkin: i
    });
  }
  handleSkinClick(i) {
    this.ignoreMouse(), this.closeSkins(), this.setState({
      skin: i,
      tempSkin: null
    }), $e.set("skin", i);
  }
  renderNav() {
    return /* @__PURE__ */ b(Av, {
      ref: this.refs.navigation,
      icons: this.props.icons,
      theme: this.state.theme,
      dir: this.dir,
      unfocused: !!this.state.searchResults,
      position: this.props.navPosition,
      onClick: this.handleCategoryClick
    }, this.navKey);
  }
  renderPreview() {
    const i = this.getEmojiByPos(this.state.pos), n = this.state.searchResults && !this.state.searchResults.length;
    return /* @__PURE__ */ b("div", {
      id: "preview",
      class: "flex flex-middle",
      dir: this.dir,
      "data-position": this.props.previewPosition,
      children: [
        /* @__PURE__ */ b("div", {
          class: "flex flex-middle flex-grow",
          children: [
            /* @__PURE__ */ b("div", {
              class: "flex flex-auto flex-middle flex-center",
              style: {
                height: this.props.emojiButtonSize,
                fontSize: this.props.emojiButtonSize
              },
              children: /* @__PURE__ */ b(Ea, {
                emoji: i,
                id: n ? this.props.noResultsEmoji || "cry" : this.props.previewEmoji || (this.props.previewPosition == "top" ? "point_down" : "point_up"),
                set: this.props.set,
                size: this.props.emojiButtonSize,
                skin: this.state.tempSkin || this.state.skin,
                spritesheet: !0,
                getSpritesheetURL: this.props.getSpritesheetURL
              })
            }),
            /* @__PURE__ */ b("div", {
              class: `margin-${this.dir[0]}`,
              children: i || n ? /* @__PURE__ */ b("div", {
                class: `padding-${this.dir[2]} align-${this.dir[0]}`,
                children: [
                  /* @__PURE__ */ b("div", {
                    class: "preview-title ellipsis",
                    children: i ? i.name : ee.search_no_results_1
                  }),
                  /* @__PURE__ */ b("div", {
                    class: "preview-subtitle ellipsis color-c",
                    children: i ? i.skins[0].shortcodes : ee.search_no_results_2
                  })
                ]
              }) : /* @__PURE__ */ b("div", {
                class: "preview-placeholder color-c",
                children: ee.pick
              })
            })
          ]
        }),
        !i && this.props.skinTonePosition == "preview" && this.renderSkinToneButton()
      ]
    });
  }
  renderEmojiButton(i, { pos: n, posinset: a, grid: t }) {
    const s = this.props.emojiButtonSize, r = this.state.tempSkin || this.state.skin, f = (i.skins[r - 1] || i.skins[0]).native, l = mv(this.state.pos, n), d = n.concat(i.id).join("");
    return /* @__PURE__ */ b(Rv, {
      selected: l,
      skin: r,
      size: s,
      children: /* @__PURE__ */ b("button", {
        "aria-label": f,
        "aria-selected": l || void 0,
        "aria-posinset": a,
        "aria-setsize": t.setsize,
        "data-keyboard": this.state.keyboard,
        title: this.props.previewPosition == "none" ? i.name : void 0,
        type: "button",
        class: "flex flex-center flex-middle",
        tabindex: "-1",
        onClick: (u) => this.handleEmojiClick({
          e: u,
          emoji: i
        }),
        onMouseEnter: () => this.handleEmojiOver(n),
        onMouseLeave: () => this.handleEmojiOver(),
        style: {
          width: this.props.emojiButtonSize,
          height: this.props.emojiButtonSize,
          fontSize: this.props.emojiSize,
          lineHeight: 0
        },
        children: [
          /* @__PURE__ */ b("div", {
            "aria-hidden": "true",
            class: "background",
            style: {
              borderRadius: this.props.emojiButtonRadius,
              backgroundColor: this.props.emojiButtonColors ? this.props.emojiButtonColors[(a - 1) % this.props.emojiButtonColors.length] : void 0
            }
          }),
          /* @__PURE__ */ b(Ea, {
            emoji: i,
            set: this.props.set,
            size: this.props.emojiSize,
            skin: r,
            spritesheet: !0,
            getSpritesheetURL: this.props.getSpritesheetURL
          })
        ]
      })
    }, d);
  }
  renderSearch() {
    const i = this.props.previewPosition == "none" || this.props.skinTonePosition == "search";
    return /* @__PURE__ */ b("div", {
      children: [
        /* @__PURE__ */ b("div", {
          class: "spacer"
        }),
        /* @__PURE__ */ b("div", {
          class: "flex flex-middle",
          children: [
            /* @__PURE__ */ b("div", {
              class: "search relative flex-grow",
              children: [
                /* @__PURE__ */ b("input", {
                  type: "search",
                  ref: this.refs.searchInput,
                  placeholder: ee.search,
                  onClick: this.handleSearchClick,
                  onInput: this.handleSearchInput,
                  onKeyDown: this.handleSearchKeyDown,
                  autoComplete: "off"
                }),
                /* @__PURE__ */ b("span", {
                  class: "icon loupe flex",
                  children: xn.search.loupe
                }),
                this.state.searchResults && /* @__PURE__ */ b("button", {
                  title: "Clear",
                  "aria-label": "Clear",
                  type: "button",
                  class: "icon delete flex",
                  onClick: this.clearSearch,
                  onMouseDown: this.preventDefault,
                  children: xn.search.delete
                })
              ]
            }),
            i && this.renderSkinToneButton()
          ]
        })
      ]
    });
  }
  renderSearchResults() {
    const { searchResults: i } = this.state;
    return i ? /* @__PURE__ */ b("div", {
      class: "category",
      ref: this.refs.search,
      children: [
        /* @__PURE__ */ b("div", {
          class: `sticky padding-small align-${this.dir[0]}`,
          children: ee.categories.search
        }),
        /* @__PURE__ */ b("div", {
          children: i.length ? i.map((n, a) => /* @__PURE__ */ b("div", {
            class: "flex",
            children: n.map((t, s) => this.renderEmojiButton(t, {
              pos: [
                a,
                s
              ],
              posinset: a * this.props.perLine + s + 1,
              grid: i
            }))
          })) : /* @__PURE__ */ b("div", {
            class: `padding-small align-${this.dir[0]}`,
            children: this.props.onAddCustomEmoji && /* @__PURE__ */ b("a", {
              onClick: this.props.onAddCustomEmoji,
              children: ee.add_custom
            })
          })
        })
      ]
    }) : null;
  }
  renderCategories() {
    const { categories: i } = D, n = !!this.state.searchResults, a = this.getPerLine();
    return /* @__PURE__ */ b("div", {
      style: {
        visibility: n ? "hidden" : void 0,
        display: n ? "none" : void 0,
        height: "100%"
      },
      children: i.map((t) => {
        const { root: s, rows: r } = this.refs.categories.get(t.id);
        return /* @__PURE__ */ b("div", {
          "data-id": t.target ? t.target.id : t.id,
          class: "category",
          ref: s,
          children: [
            /* @__PURE__ */ b("div", {
              class: `sticky padding-small align-${this.dir[0]}`,
              children: t.name || ee.categories[t.id]
            }),
            /* @__PURE__ */ b("div", {
              class: "relative",
              style: {
                height: r.length * this.props.emojiButtonSize
              },
              children: r.map((o, f) => {
                const l = o.index - o.index % an.rowsPerRender, d = this.state.visibleRows[l], u = "current" in o ? o : void 0;
                if (!d && !u)
                  return null;
                const c = f * a, v = c + a, g = t.emojis.slice(c, v);
                return g.length < a && g.push(...new Array(a - g.length)), /* @__PURE__ */ b("div", {
                  "data-index": o.index,
                  ref: u,
                  class: "flex row",
                  style: {
                    top: f * this.props.emojiButtonSize
                  },
                  children: d && g.map((y, k) => {
                    if (!y)
                      return /* @__PURE__ */ b("div", {
                        style: {
                          width: this.props.emojiButtonSize,
                          height: this.props.emojiButtonSize
                        }
                      });
                    const p = ai.get(y);
                    return this.renderEmojiButton(p, {
                      pos: [
                        o.index,
                        k
                      ],
                      posinset: o.posinset + k,
                      grid: this.grid
                    });
                  })
                }, o.index);
              })
            })
          ]
        });
      })
    });
  }
  renderSkinToneButton() {
    return this.props.skinTonePosition == "none" ? null : /* @__PURE__ */ b("div", {
      class: "flex flex-auto flex-center flex-middle",
      style: {
        position: "relative",
        width: this.props.emojiButtonSize,
        height: this.props.emojiButtonSize
      },
      children: /* @__PURE__ */ b("button", {
        type: "button",
        ref: this.refs.skinToneButton,
        class: "skin-tone-button flex flex-auto flex-center flex-middle",
        "aria-selected": this.state.showSkins ? "" : void 0,
        "aria-label": ee.skins.choose,
        title: ee.skins.choose,
        onClick: this.openSkins,
        style: {
          width: this.props.emojiSize,
          height: this.props.emojiSize
        },
        children: /* @__PURE__ */ b("span", {
          class: `skin-tone skin-tone-${this.state.skin}`
        })
      })
    });
  }
  renderLiveRegion() {
    const i = this.getEmojiByPos(this.state.pos), n = i ? i.name : "";
    return /* @__PURE__ */ b("div", {
      "aria-live": "polite",
      class: "sr-only",
      children: n
    });
  }
  renderSkins() {
    const n = this.refs.skinToneButton.current.getBoundingClientRect(), a = this.base.getBoundingClientRect(), t = {};
    return this.dir == "ltr" ? t.right = a.right - n.right - 3 : t.left = n.left - a.left - 3, this.props.previewPosition == "bottom" && this.props.skinTonePosition == "preview" ? t.bottom = a.bottom - n.top + 6 : (t.top = n.bottom - a.top + 3, t.bottom = "auto"), /* @__PURE__ */ b("div", {
      ref: this.refs.menu,
      role: "radiogroup",
      dir: this.dir,
      "aria-label": ee.skins.choose,
      class: "menu hidden",
      "data-position": t.top ? "top" : "bottom",
      style: t,
      children: [
        ...Array(6).keys()
      ].map((s) => {
        const r = s + 1, o = this.state.skin == r;
        return /* @__PURE__ */ b("div", {
          children: [
            /* @__PURE__ */ b("input", {
              type: "radio",
              name: "skin-tone",
              value: r,
              "aria-label": ee.skins[r],
              ref: o ? this.refs.skinToneRadio : null,
              defaultChecked: o,
              onChange: () => this.handleSkinMouseOver(r),
              onKeyDown: (f) => {
                (f.code == "Enter" || f.code == "Space" || f.code == "Tab") && (f.preventDefault(), this.handleSkinClick(r));
              }
            }),
            /* @__PURE__ */ b("button", {
              "aria-hidden": "true",
              tabindex: "-1",
              onClick: () => this.handleSkinClick(r),
              onMouseEnter: () => this.handleSkinMouseOver(r),
              onMouseLeave: () => this.handleSkinMouseOver(),
              class: "option flex flex-grow flex-middle",
              children: [
                /* @__PURE__ */ b("span", {
                  class: `skin-tone skin-tone-${r}`
                }),
                /* @__PURE__ */ b("span", {
                  class: "margin-small-lr",
                  children: ee.skins[r]
                })
              ]
            })
          ]
        });
      })
    });
  }
  render() {
    const i = this.props.perLine * this.props.emojiButtonSize;
    return /* @__PURE__ */ b("section", {
      id: "root",
      class: "flex flex-column",
      dir: this.dir,
      style: {
        width: this.props.dynamicWidth ? "100%" : `calc(${i}px + (var(--padding) + var(--sidebar-width)))`
      },
      "data-emoji-set": this.props.set,
      "data-theme": this.state.theme,
      "data-menu": this.state.showSkins ? "" : void 0,
      children: [
        this.props.previewPosition == "top" && this.renderPreview(),
        this.props.navPosition == "top" && this.renderNav(),
        this.props.searchPosition == "sticky" && /* @__PURE__ */ b("div", {
          class: "padding-lr",
          children: this.renderSearch()
        }),
        /* @__PURE__ */ b("div", {
          ref: this.refs.scroll,
          class: "scroll flex-grow padding-lr",
          children: /* @__PURE__ */ b("div", {
            style: {
              width: this.props.dynamicWidth ? "100%" : i,
              height: "100%"
            },
            children: [
              this.props.searchPosition == "static" && this.renderSearch(),
              this.renderSearchResults(),
              this.renderCategories()
            ]
          })
        }),
        this.props.navPosition == "bottom" && this.renderNav(),
        this.props.previewPosition == "bottom" && this.renderPreview(),
        this.state.showSkins && this.renderSkins(),
        this.renderLiveRegion()
      ]
    });
  }
  constructor(i) {
    super(), ce(this, "darkMediaCallback", () => {
      this.props.theme == "auto" && this.setState({
        theme: this.darkMedia.matches ? "dark" : "light"
      });
    }), ce(this, "handleClickOutside", (n) => {
      const { element: a } = this.props;
      n.target != a && (this.state.showSkins && this.closeSkins(), this.props.onClickOutside && this.props.onClickOutside(n));
    }), ce(this, "handleBaseClick", (n) => {
      this.state.showSkins && (n.target.closest(".menu") || (n.preventDefault(), n.stopImmediatePropagation(), this.closeSkins()));
    }), ce(this, "handleBaseKeydown", (n) => {
      this.state.showSkins && n.key == "Escape" && (n.preventDefault(), n.stopImmediatePropagation(), this.closeSkins());
    }), ce(this, "handleSearchClick", () => {
      this.getEmojiByPos(this.state.pos) && this.setState({
        pos: [
          -1,
          -1
        ]
      });
    }), ce(this, "handleSearchInput", async () => {
      const n = this.refs.searchInput.current;
      if (!n)
        return;
      const { value: a } = n, t = await ai.search(a), s = () => {
        this.refs.scroll.current && (this.refs.scroll.current.scrollTop = 0);
      };
      if (!t)
        return this.setState({
          searchResults: t,
          pos: [
            -1,
            -1
          ]
        }, s);
      const r = n.selectionStart == n.value.length ? [
        0,
        0
      ] : [
        -1,
        -1
      ], o = [];
      o.setsize = t.length;
      let f = null;
      for (let l of t)
        (!o.length || f.length == this.getPerLine()) && (f = [], f.__categoryId = "search", f.__index = o.length, o.push(f)), f.push(l);
      this.ignoreMouse(), this.setState({
        searchResults: o,
        pos: r
      }, s);
    }), ce(this, "handleSearchKeyDown", (n) => {
      const a = n.currentTarget;
      switch (n.stopImmediatePropagation(), n.key) {
        case "ArrowLeft":
          this.navigate({
            e: n,
            input: a,
            left: !0
          });
          break;
        case "ArrowRight":
          this.navigate({
            e: n,
            input: a,
            right: !0
          });
          break;
        case "ArrowUp":
          this.navigate({
            e: n,
            input: a,
            up: !0
          });
          break;
        case "ArrowDown":
          this.navigate({
            e: n,
            input: a,
            down: !0
          });
          break;
        case "Enter":
          n.preventDefault(), this.handleEmojiClick({
            e: n,
            pos: this.state.pos
          });
          break;
        case "Escape":
          n.preventDefault(), this.state.searchResults ? this.clearSearch() : this.unfocusSearch();
          break;
      }
    }), ce(this, "clearSearch", () => {
      const n = this.refs.searchInput.current;
      n && (n.value = "", n.focus(), this.handleSearchInput());
    }), ce(this, "handleCategoryClick", ({ category: n, i: a }) => {
      this.scrollTo(a == 0 ? {
        row: -1
      } : {
        categoryId: n.id
      });
    }), ce(this, "openSkins", (n) => {
      const { currentTarget: a } = n, t = a.getBoundingClientRect();
      this.setState({
        showSkins: t
      }, async () => {
        await vv(2);
        const s = this.refs.menu.current;
        s && (s.classList.remove("hidden"), this.refs.skinToneRadio.current.focus(), this.base.addEventListener("click", this.handleBaseClick, !0), this.base.addEventListener("keydown", this.handleBaseKeydown, !0));
      });
    }), this.observers = [], this.state = {
      pos: [
        -1,
        -1
      ],
      perLine: this.initDynamicPerLine(i),
      visibleRows: {
        0: !0
      },
      ...this.getInitialState(i)
    };
  }
}
class _t extends yv {
  async connectedCallback() {
    const i = Yf(this.props, Te, this);
    i.element = this, i.ref = (n) => {
      this.component = n;
    }, await Bn(i), !this.disconnected && qf(/* @__PURE__ */ b(Ev, {
      ...i
    }), this.shadowRoot);
  }
  constructor(i) {
    super(i, {
      styles: /* @__PURE__ */ Af(id)
    });
  }
}
ce(_t, "Props", Te);
typeof customElements < "u" && !customElements.get("em-emoji-picker") && customElements.define("em-emoji-picker", _t);
var id = {};
id = `:host {
  width: min-content;
  height: 435px;
  min-height: 230px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  --border-radius: 10px;
  --category-icon-size: 18px;
  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-size: 15px;
  --preview-placeholder-size: 21px;
  --preview-title-size: 1.1em;
  --preview-subtitle-size: .9em;
  --shadow-color: 0deg 0% 0%;
  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);
  display: flex;
}

[data-theme="light"] {
  --em-rgb-color: var(--rgb-color, 34, 36, 39);
  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);
  --em-rgb-background: var(--rgb-background, 255, 255, 255);
  --em-rgb-input: var(--rgb-input, 255, 255, 255);
  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));
  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));
}

[data-theme="dark"] {
  --em-rgb-color: var(--rgb-color, 222, 222, 221);
  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);
  --em-rgb-background: var(--rgb-background, 21, 22, 23);
  --em-rgb-input: var(--rgb-input, 0, 0, 0);
  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));
  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));
}

#root {
  --color-a: rgb(var(--em-rgb-color));
  --color-b: rgba(var(--em-rgb-color), .65);
  --color-c: rgba(var(--em-rgb-color), .45);
  --padding: 12px;
  --padding-small: calc(var(--padding) / 2);
  --sidebar-width: 16px;
  --duration: 225ms;
  --duration-fast: 125ms;
  --duration-instant: 50ms;
  --easing: cubic-bezier(.4, 0, .2, 1);
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  background-color: rgb(var(--em-rgb-background));
  position: relative;
}

@media (prefers-reduced-motion) {
  #root {
    --duration: 0;
    --duration-fast: 0;
    --duration-instant: 0;
  }
}

#root[data-menu] button {
  cursor: auto;
}

#root[data-menu] .menu button {
  cursor: pointer;
}

:host, #root, input, button {
  color: rgb(var(--em-rgb-color));
  font-family: var(--font-family);
  font-size: var(--font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: normal;
}

*, :before, :after {
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.relative {
  position: relative;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: none;
}

.flex-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex: auto;
}

.flex-middle {
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.padding {
  padding: var(--padding);
}

.padding-t {
  padding-top: var(--padding);
}

.padding-lr {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.padding-r {
  padding-right: var(--padding);
}

.padding-small {
  padding: var(--padding-small);
}

.padding-small-b {
  padding-bottom: var(--padding-small);
}

.padding-small-lr {
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
}

.margin {
  margin: var(--padding);
}

.margin-r {
  margin-right: var(--padding);
}

.margin-l {
  margin-left: var(--padding);
}

.margin-small-l {
  margin-left: var(--padding-small);
}

.margin-small-lr {
  margin-left: var(--padding-small);
  margin-right: var(--padding-small);
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.color-a {
  color: var(--color-a);
}

.color-b {
  color: var(--color-b);
}

.color-c {
  color: var(--color-c);
}

.ellipsis {
  white-space: nowrap;
  max-width: 100%;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
}

a {
  cursor: pointer;
  color: rgb(var(--em-rgb-accent));
}

a:hover {
  text-decoration: underline;
}

.spacer {
  height: 10px;
}

[dir="rtl"] .scroll {
  padding-left: 0;
  padding-right: var(--padding);
}

.scroll {
  padding-right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
}

.scroll::-webkit-scrollbar-track {
  border: 0;
}

.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scroll::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.scroll::-webkit-scrollbar-thumb {
  min-height: 20%;
  min-height: 65px;
  border: 4px solid rgb(var(--em-rgb-background));
  border-radius: 8px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--em-color-border-over) !important;
}

.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--em-color-border);
}

.sticky {
  z-index: 1;
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-weight: 500;
  position: sticky;
  top: -1px;
}

[dir="rtl"] .search input[type="search"] {
  padding: 10px 2.2em 10px 2em;
}

[dir="rtl"] .search .loupe {
  left: auto;
  right: .7em;
}

[dir="rtl"] .search .delete {
  left: .7em;
  right: auto;
}

.search {
  z-index: 2;
  position: relative;
}

.search input, .search button {
  font-size: calc(var(--font-size)  - 1px);
}

.search input[type="search"] {
  width: 100%;
  background-color: var(--em-color-border);
  transition-duration: var(--duration);
  transition-property: background-color, box-shadow;
  transition-timing-function: var(--easing);
  border: 0;
  border-radius: 10px;
  outline: 0;
  padding: 10px 2em 10px 2.2em;
  display: block;
}

.search input[type="search"]::-ms-input-placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"]::placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

.search input[type="search"]:focus {
  background-color: rgb(var(--em-rgb-input));
  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);
}

.search .icon {
  z-index: 1;
  color: rgba(var(--em-rgb-color), .7);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.search .loupe {
  pointer-events: none;
  left: .7em;
}

.search .delete {
  right: .7em;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

button {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  cursor: pointer;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

#nav {
  z-index: 2;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: var(--sidebar-width);
  position: relative;
}

#nav button {
  color: var(--color-b);
  transition: color var(--duration) var(--easing);
}

#nav button:hover {
  color: var(--color-a);
}

#nav svg, #nav img {
  width: var(--category-icon-size);
  height: var(--category-icon-size);
}

#nav[dir="rtl"] .bar {
  left: auto;
  right: 0;
}

#nav .bar {
  width: 100%;
  height: 3px;
  background-color: rgb(var(--em-rgb-accent));
  transition: transform var(--duration) var(--easing);
  border-radius: 3px 3px 0 0;
  position: absolute;
  bottom: -12px;
  left: 0;
}

#nav button[aria-selected] {
  color: rgb(var(--em-rgb-accent));
}

#preview {
  z-index: 2;
  padding: calc(var(--padding)  + 4px) var(--padding);
  padding-right: var(--sidebar-width);
  position: relative;
}

#preview .preview-placeholder {
  font-size: var(--preview-placeholder-size);
}

#preview .preview-title {
  font-size: var(--preview-title-size);
}

#preview .preview-subtitle {
  font-size: var(--preview-subtitle-size);
}

#nav:before, #preview:before {
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

#nav[data-position="top"]:before, #preview[data-position="top"]:before {
  background: linear-gradient(to bottom, var(--em-color-border), transparent);
  top: 100%;
}

#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {
  background: linear-gradient(to top, var(--em-color-border), transparent);
  bottom: 100%;
}

.category:last-child {
  min-height: calc(100% + 1px);
}

.category button {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  position: relative;
}

.category button > * {
  position: relative;
}

.category button .background {
  opacity: 0;
  background-color: var(--em-color-border);
  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.category button:hover .background {
  transition-duration: var(--duration-instant);
  transition-delay: 0s;
}

.category button[aria-selected] .background {
  opacity: 1;
}

.category button[data-keyboard] .background {
  transition: none;
}

.row {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skin-tone-button {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
}

.skin-tone-button:hover {
  border-color: var(--em-color-border);
}

.skin-tone-button:active .skin-tone {
  transform: scale(.85) !important;
}

.skin-tone-button .skin-tone {
  transition: transform var(--duration) var(--easing);
}

.skin-tone-button[aria-selected] {
  background-color: var(--em-color-border);
  border-top-color: rgba(0, 0, 0, .05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-width: 0;
  border-right-width: 0;
}

.skin-tone-button[aria-selected] .skin-tone {
  transform: scale(.9);
}

.menu {
  z-index: 2;
  white-space: nowrap;
  border: 1px solid var(--em-color-border);
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: opacity, transform;
  transition-duration: var(--duration);
  transition-timing-function: var(--easing);
  border-radius: 10px;
  padding: 4px;
  position: absolute;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

.menu.hidden {
  opacity: 0;
}

.menu[data-position="bottom"] {
  transform-origin: 100% 100%;
}

.menu[data-position="bottom"].hidden {
  transform: scale(.9)rotate(-3deg)translateY(5%);
}

.menu[data-position="top"] {
  transform-origin: 100% 0;
}

.menu[data-position="top"].hidden {
  transform: scale(.9)rotate(3deg)translateY(-5%);
}

.menu input[type="radio"] {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.menu input[type="radio"]:checked + .option {
  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));
}

.option {
  width: 100%;
  border-radius: 6px;
  padding: 4px 6px;
}

.option:hover {
  color: #fff;
  background-color: rgb(var(--em-rgb-accent));
}

.skin-tone {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.skin-tone:after {
  content: "";
  mix-blend-mode: overlay;
  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;
}

.skin-tone-1 {
  background-color: #ffc93a;
}

.skin-tone-2 {
  background-color: #ffdab7;
}

.skin-tone-3 {
  background-color: #e7b98f;
}

.skin-tone-4 {
  background-color: #c88c61;
}

.skin-tone-5 {
  background-color: #a46134;
}

.skin-tone-6 {
  background-color: #5d4437;
}

[data-index] {
  justify-content: space-between;
}

[data-emoji-set="twitter"] .skin-tone:after {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .5);
}

[data-emoji-set="twitter"] .skin-tone-1 {
  background-color: #fade72;
}

[data-emoji-set="twitter"] .skin-tone-2 {
  background-color: #f3dfd0;
}

[data-emoji-set="twitter"] .skin-tone-3 {
  background-color: #eed3a8;
}

[data-emoji-set="twitter"] .skin-tone-4 {
  background-color: #cfad8d;
}

[data-emoji-set="twitter"] .skin-tone-5 {
  background-color: #a8805d;
}

[data-emoji-set="twitter"] .skin-tone-6 {
  background-color: #765542;
}

[data-emoji-set="google"] .skin-tone:after {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);
}

[data-emoji-set="google"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="google"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="google"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="google"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="google"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="google"] .skin-tone-6 {
  background-color: #61493f;
}

[data-emoji-set="facebook"] .skin-tone:after {
  border-color: rgba(0, 0, 0, .4);
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;
}

[data-emoji-set="facebook"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="facebook"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="facebook"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="facebook"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="facebook"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="facebook"] .skin-tone-6 {
  background-color: #61493f;
}

`;
function Bv(e) {
  const i = I(null), n = I(null);
  return n.current && n.current.update(e), ke(() => (n.current = new _t({
    ...e,
    ref: i
  }), () => {
    n.current = null;
  }), []), /* @__PURE__ */ oe.createElement("div", {
    ref: i
  });
}
const Dv = ({ onSendMessage: e, isLoading: i }) => {
  const [n, a] = ne(""), [t, s] = ne(!1), [r, o] = ne(!1), [f, l] = ne([]), [d, u] = ne([]), c = I(null), v = I(null), g = I(null), y = () => {
    s(!t), o(!1);
  }, k = () => {
    o(!r), s(!1);
  }, p = (C) => {
    a((T) => T + C.native), o(!1);
  }, w = (C) => {
    const z = Array.from(C.target.files || []).filter((B) => B.type.startsWith("image/"));
    l((B) => [...B, ...z]), s(!1);
  }, P = (C) => {
    const z = Array.from(C.target.files || []).filter(
      (B) => B.type === "application/pdf" || B.type === "application/msword" || B.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || B.type === "text/plain" || B.type === "audio/mpeg" || B.type === "audio/wav"
    );
    u((B) => [...B, ...z]), s(!1);
  }, x = (C) => {
    l((T) => T.filter((z, B) => B !== C));
  }, S = (C) => {
    u((T) => T.filter((z, B) => B !== C));
  }, j = (C) => {
    C.preventDefault(), (n.trim() || f.length > 0 || d.length > 0) && !i && (e(n, [...f, ...d]), a(""), l([]), u([]));
  }, M = (C) => {
    C.key === "Enter" && !C.shiftKey && (C.preventDefault(), (n.trim() || f.length > 0 || d.length > 0) && !i && (e(n, [...f, ...d]), a(""), l([]), u([])));
  };
  return ke(() => {
    c.current && (c.current.style.height = "auto", c.current.style.height = `${Math.min(c.current.scrollHeight, 100)}px`);
  }, [n]), /* @__PURE__ */ h.jsx("form", { onSubmit: j, className: "pt-1 px-2 backdrop-blur-md bg-white/10 w-full", children: /* @__PURE__ */ h.jsxs("div", { className: "border border-slate-100 shadow relative flex items-center bg-white w-full", children: [
    /* @__PURE__ */ h.jsx("button", { onClick: k, type: "button", className: "flex items-center justify-center hover:text-slate-700 text-slate-400", children: /* @__PURE__ */ h.jsx(Lc, { className: "text-xl ml-1.5" }) }),
    /* @__PURE__ */ h.jsx(
      "textarea",
      {
        ref: c,
        onKeyDown: M,
        value: n,
        onChange: (C) => a(C.target.value),
        placeholder: "Type your message...",
        rows: 1,
        className: "w-full pr-16 bg-transparent resize-none overflow-y-auto hide-scrollbar max-h-[100px] px-2 py-2.5 text-sm text-black focus:outline-none",
        disabled: i
      }
    ),
    /* @__PURE__ */ h.jsxs("div", { className: "absolute right-2 inset-y-0 h-full flex items-center gap-1", children: [
      /* @__PURE__ */ h.jsx("button", { onClick: y, type: "button", className: "flex items-center justify-center hover:text-slate-700 text-slate-400", children: /* @__PURE__ */ h.jsx(Gd, { className: "text-2xl" }) }),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "submit",
          disabled: i || !n.trim() && f.length === 0 && d.length === 0,
          className: "flex items-center justify-center text-slate-700 hover:text-black disabled:text-slate-300",
          children: /* @__PURE__ */ h.jsx($c, { className: "text-xl" })
        }
      )
    ] }),
    (f.length > 0 || d.length > 0) && /* @__PURE__ */ h.jsx("div", { className: "absolute h-[100px] top-[-100px] bottom-full left-0 w-full p-2 bg-white border border-slate-100 rounded-t", children: /* @__PURE__ */ h.jsxs("div", { className: "flex flex-wrap gap-2", children: [
      f.map((C, T) => /* @__PURE__ */ h.jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ h.jsx("img", { src: URL.createObjectURL(C), alt: C.name, className: "w-16 h-16 object-cover rounded" }),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            onClick: () => x(T),
            className: "absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
            children: "×"
          }
        )
      ] }, T)),
      d.map((C, T) => /* @__PURE__ */ h.jsxs("div", { className: "relative group", children: [
        /* @__PURE__ */ h.jsx("div", { className: "w-16 h-16 flex items-center justify-center bg-slate-100 rounded", children: /* @__PURE__ */ h.jsx(Ca, { className: "text-2xl text-slate-400" }) }),
        /* @__PURE__ */ h.jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[8px] p-1 truncate", children: C.name }),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            onClick: () => S(T),
            className: "absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
            children: "×"
          }
        )
      ] }, T))
    ] }) }),
    /* @__PURE__ */ h.jsx(Pa, { children: t && /* @__PURE__ */ h.jsxs(
      kn.div,
      {
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        transition: { duration: 0.4 },
        className: "flex bg-slate-200 h-[100px] items-center gap-5 absolute top-[-100px] left-0 w-full p-3 border border-slate-100 rounded",
        children: [
          /* @__PURE__ */ h.jsx("input", { type: "file", ref: v, onChange: w, accept: "image/*", multiple: !0, className: "hidden" }),
          /* @__PURE__ */ h.jsxs("button", { type: "button", onClick: () => {
            var C;
            return (C = v.current) == null ? void 0 : C.click();
          }, className: "flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ h.jsx("div", { className: "flex h-11 w-11 items-center justify-center border bg-white border-slate-200 shadow-xl rounded hover:text-slate-700 text-slate-400", children: /* @__PURE__ */ h.jsx(Bc, { className: "text-xl" }) }),
            /* @__PURE__ */ h.jsx("span", { className: "text-[11px] font-medium text-slate-600", children: "Images" })
          ] }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              type: "file",
              ref: g,
              onChange: P,
              accept: ".pdf,.doc,.docx,.txt,.mp3,.wav",
              multiple: !0,
              className: "hidden"
            }
          ),
          /* @__PURE__ */ h.jsxs("button", { type: "button", onClick: () => {
            var C;
            return (C = g.current) == null ? void 0 : C.click();
          }, className: "flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ h.jsx("div", { className: "flex h-11 w-11 items-center justify-center border bg-white border-slate-200 shadow-xl rounded hover:text-slate-700 text-slate-400", children: /* @__PURE__ */ h.jsx(Ca, { className: "text-xl" }) }),
            /* @__PURE__ */ h.jsx("span", { className: "text-[11px] font-medium text-slate-600", children: "Documents" })
          ] }),
          /* @__PURE__ */ h.jsxs("button", { type: "button", onClick: () => {
            var C;
            return (C = g.current) == null ? void 0 : C.click();
          }, className: "flex flex-col items-center gap-1", children: [
            /* @__PURE__ */ h.jsx("div", { className: "flex h-11 w-11 items-center justify-center border bg-white border-slate-200 shadow-xl rounded hover:text-slate-700 text-slate-400", children: /* @__PURE__ */ h.jsx(sf, { className: "text-xl" }) }),
            /* @__PURE__ */ h.jsx("span", { className: "text-[11px] font-medium text-slate-600", children: "Audio" })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ h.jsx(Pa, { children: r && /* @__PURE__ */ h.jsx(
      kn.div,
      {
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        transition: { duration: 0.4 },
        className: "absolute h-[400px] overflow-hidden top-[-400px] -right-2",
        children: /* @__PURE__ */ h.jsx(
          Bv,
          {
            data: Gm,
            onEmojiSelect: p,
            theme: "light",
            previewPosition: "none",
            perLine: 10,
            maxFrequentRows: 1,
            className: "w-full"
          }
        )
      }
    ) })
  ] }) });
}, $v = () => {
  const { messages: e, addMessage: i, apiEndpoint: n, primaryColor: a } = Me(), [t, s] = ne(e || []), [r, o] = ne(!1), [f, l] = ne(!1), d = I(null), u = I(null), c = Ni((x) => x.setSelectedPage), v = [
    { id: 1, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 2, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" },
    { id: 3, imageUrl: "https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png" }
  ], g = I(n);
  ke(() => {
    typeof window < "u" && (l(!0), g.current = n, s(e || []));
  }, [n, e]), ke(() => {
    u.current && f && setTimeout(() => {
      var x;
      (x = u.current) == null || x.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, [t, f]);
  const y = async (x, S) => {
    if (!x.trim() && !(S != null && S.length) || !f)
      return;
    const j = {
      id: Date.now().toString(),
      content: x,
      sender: "user",
      timestamp: /* @__PURE__ */ new Date(),
      files: S || []
    };
    s((M) => [...M, j]), i(j), o(!0);
    try {
      const M = new FormData();
      M.append("message", x), S && S.length > 0 && S.forEach((B, he) => {
        M.append(`file${he}`, B);
      });
      const C = await fetch(g.current, {
        method: "POST",
        body: M
      });
      if (!C.ok)
        throw new Error("Network response was not ok");
      const T = await C.json(), z = {
        id: (Date.now() + 1).toString(),
        content: T.message,
        sender: "bot",
        timestamp: /* @__PURE__ */ new Date()
      };
      s((B) => [...B, z]), i(z), o(!1);
    } catch (M) {
      console.error("Error sending message:", M), o(!1);
      const C = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, there was an error processing your message.",
        sender: "bot",
        timestamp: /* @__PURE__ */ new Date()
      };
      s((T) => [...T, C]), i(C);
    }
  }, k = Ti((x) => x.widgetOpen), p = I(null), w = I(null), P = I(null);
  return ke(() => {
    f && k && p.current && w.current && P.current && hn(
      [p.current, w.current, P.current],
      { opacity: [0, 1], transform: ["translateX(80px)", "translateX(0px)"] },
      { duration: 0.5, delay: gn(0.15) }
    );
  }, [f, k]), /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsxs("div", { className: "text-white flex px-3 gap-5 items-center py-3 relative", style: { backgroundColor: a }, children: [
      /* @__PURE__ */ h.jsx(
        "div",
        {
          ref: p,
          className: "text-white cursor-pointer  hover:bg-white/20 p-1 rounded flex items-center justify-center hover:text-gray-200 transition-colors ",
          "aria-label": "contact",
          onClick: () => c(null),
          children: /* @__PURE__ */ h.jsx(Vr, { className: "text-xl" })
        }
      ),
      /* @__PURE__ */ h.jsxs("div", { className: "relative flex items-center gap-2 w-full", children: [
        /* @__PURE__ */ h.jsx("div", { ref: w, className: "flex -space-x-2 justify-center", children: v.map((x) => /* @__PURE__ */ h.jsx("div", { className: "w-8 h-8 rounded-full bg-white border-2 border-white overflow-hidden", children: /* @__PURE__ */ h.jsx("img", { src: x.imageUrl, alt: `Agent ${x.id}`, className: "w-full h-full object-cover" }) }, x.id)) }),
        /* @__PURE__ */ h.jsx("h3", { ref: P, className: "font-medium text-lg", children: "Start a chat" })
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { ref: u, className: "message-container smooth-scroll my-1 scroll-smooth", children: [
      r && /* @__PURE__ */ h.jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ h.jsx("div", { className: "dot-typing" }) }),
      /* @__PURE__ */ h.jsx("div", { className: "message-list", children: /* @__PURE__ */ h.jsx(Dc, { messages: t }) }),
      /* @__PURE__ */ h.jsx("div", { ref: d })
    ] }),
    /* @__PURE__ */ h.jsx(Dv, { onSendMessage: y, isLoading: r })
  ] });
}, Lv = ({ apiEndpoint: e, widgetTitle: i, primaryColor: n, position: a, height: t, width: s, initialMessages: r = [] }) => {
  const { setWidgetTitle: o, setPrimaryColor: f, setPosition: l, setDimensions: d, setApiEndpoint: u, addMessage: c, clearMessages: v } = Me(), [g, y] = ne(!1);
  ke(() => {
    !g && typeof window < "u" && (i && o(i), n && f(n), a && l(a), t && s && d(t, s), e && u(e), v(), r && r.length > 0 && r.forEach((M) => {
      c(M);
    }), y(!0));
  }, [
    g,
    i,
    n,
    a,
    t,
    s,
    e,
    r,
    o,
    f,
    l,
    d,
    u,
    c,
    v
  ]);
  const k = Ti((M) => M.widgetOpen), p = Ti((M) => M.toggleWidget), w = Ni((M) => M.selectedPage), P = Me((M) => M.position), x = Me((M) => M.height), S = Me((M) => M.width), j = Me((M) => M.primaryColor);
  return typeof window > "u" ? null : /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx("div", { className: `fixed ${P === "bottom-right" ? "right-3" : "left-3"} bottom-3 z-[10000]`, children: /* @__PURE__ */ h.jsx(
      kn.button,
      {
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.9 },
        onClick: p,
        className: "rounded-full p-3 text-white shadow-lg",
        style: { backgroundColor: j },
        "aria-label": "Open chat",
        children: k ? /* @__PURE__ */ h.jsx(Kd, { className: "text-xl" }) : /* @__PURE__ */ h.jsx(qd, { className: "text-3xl" })
      }
    ) }),
    /* @__PURE__ */ h.jsx(Pa, { children: k ? /* @__PURE__ */ h.jsxs(
      kn.div,
      {
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1 },
        transition: {
          duration: 0.4
        },
        className: `bg-slate-100 z-[9999] fixed  bottom-[40px] rounded shadow-md flex flex-col overflow-hidden w-full md:w-auto pb-8 ${P === "bottom-right" ? "md:right-5 right-1" : "md:left-5 left-1"}`,
        style: { height: x, width: S, backgroundImage: "url('../bg.svg')", backgroundPosition: "top", objectFit: "cover" },
        children: [
          w == null && /* @__PURE__ */ h.jsx(Ac, {}),
          w == "article" && /* @__PURE__ */ h.jsx(Ec, {}),
          w == "conversation" && /* @__PURE__ */ h.jsx($v, {}),
          w == "contact" && /* @__PURE__ */ h.jsx(Rc, {}),
          /* @__PURE__ */ h.jsx("div", { className: "p-2 absolute bottom-0 inset-x-0 w-full text-xs text-center bg-transparent ", children: /* @__PURE__ */ h.jsx("p", { className: "px-5 rounded-full w-max mx-auto text-slate-400", children: "Powered by Update Tech" }) })
        ]
      }
    ) : null })
  ] });
};
function Vv() {
  return /* @__PURE__ */ h.jsx(h.Fragment, { children: /* @__PURE__ */ h.jsx(
    Lv,
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
  const e = () => {
    const i = document.getElementById("root");
    if (i)
      try {
        oa(i).render(
          /* @__PURE__ */ h.jsx(oe.StrictMode, { children: /* @__PURE__ */ h.jsx(Vv, {}) })
        );
      } catch (n) {
        console.error("Error rendering app:", n);
      }
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e();
}
export {
  Lv as OmniChatWidget,
  Me as useWidgetConfigStore
};
