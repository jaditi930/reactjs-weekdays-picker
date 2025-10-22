(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".dropdown-wrapper{position:relative;display:inline-block;box-sizing:border-box}.dropdown-input{padding:8px;border:0px solid transparent;outline:0;border-radius:4px;cursor:pointer;width:100%;box-sizing:border-box;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.dropdown-popup{position:absolute;top:100%;left:0;background:#fff;border-radius:4px;margin-top:4px;box-sizing:border-box;z-index:1000}.dropdown-item{padding:8px 12px;cursor:pointer;transition:background-color .3s,color .3s}.cms-wrapper{position:relative;display:inline-block}.cms-input{padding:10px;font-size:var(--font-size);color:var(--input-text-color);cursor:pointer;border:0px solid transparent;outline:0px;border-radius:4px}.cms-input:focus{outline:none;border-color:var(--selected-color)}.cms-menu{position:absolute;margin-top:4px;display:none;background-color:#fff;border-radius:4px;overflow:hidden;z-index:1000;animation:fadeIn .3s ease}.cms-menu.show{display:flex}@keyframes fadeIn{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.cms-day-button{flex:1;padding:10px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;transition:background-color .3s,color .3s;border-radius:0}.cms-day-button:focus{outline:none}.cms-icon,.cms-day-text,.cms-tick{display:flex;align-items:center;justify-content:center}.cms-align-top{flex-direction:column-reverse}.cms-align-bottom{flex-direction:column}.cms-align-left{flex-direction:row-reverse}.cms-align-right{flex-direction:row}.circular-wrapper .plotly .hoverlayer,.circular-wrapper .plotly .pie,.circular-wrapper .plotly .slice{cursor:pointer}.ds-circle-wrapper{display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;padding:10px;box-sizing:border-box}.ds-circle{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background-color .3s,color .3s;-webkit-user-select:none;user-select:none}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import Z, { useState as Q, useRef as Pe, useEffect as de, useMemo as je, useCallback as Ve } from "react";
import wr from "react-plotly.js";
var Te = { exports: {} }, ce = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function _r() {
  if (Ke) return ce;
  Ke = 1;
  var n = Z, o = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(R, c, E) {
    var h, T = {}, S = null, D = null;
    E !== void 0 && (S = "" + E), c.key !== void 0 && (S = "" + c.key), c.ref !== void 0 && (D = c.ref);
    for (h in c) i.call(c, h) && !y.hasOwnProperty(h) && (T[h] = c[h]);
    if (R && R.defaultProps) for (h in c = R.defaultProps, c) T[h] === void 0 && (T[h] = c[h]);
    return { $$typeof: o, type: R, key: S, ref: D, props: T, _owner: v.current };
  }
  return ce.Fragment = a, ce.jsx = P, ce.jsxs = P, ce;
}
var fe = {};
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
function Rr() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Z, o = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), R = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), q = Symbol.iterator, B = "@@iterator";
    function G(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = q && e[q] || e[B];
      return typeof r == "function" ? r : null;
    }
    var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
          t[l - 1] = arguments[l];
        z("error", e, t);
      }
    }
    function z(e, r, t) {
      {
        var l = F.ReactDebugCurrentFrame, d = l.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var g = t.map(function(s) {
          return String(s);
        });
        g.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var H = !1, U = !1, j = !1, C = !1, A = !1, $;
    $ = Symbol.for("react.module.reference");
    function m(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === y || A || e === v || e === E || e === h || C || e === D || H || U || j || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === T || e.$$typeof === P || e.$$typeof === R || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === $ || e.getModuleId !== void 0));
    }
    function Y(e, r, t) {
      var l = e.displayName;
      if (l)
        return l;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function M(e) {
      return e.displayName || "Context";
    }
    function f(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case a:
          return "Portal";
        case y:
          return "Profiler";
        case v:
          return "StrictMode";
        case E:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return M(r) + ".Consumer";
          case P:
            var t = e;
            return M(t._context) + ".Provider";
          case c:
            return Y(e, e.render, "ForwardRef");
          case T:
            var l = e.displayName || null;
            return l !== null ? l : f(e.type) || "Memo";
          case S: {
            var d = e, g = d._payload, s = d._init;
            try {
              return f(s(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, k = 0, ee, X, re, V, te, ve, ne;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Ee() {
      {
        if (k === 0) {
          ee = console.log, X = console.info, re = console.warn, V = console.error, te = console.group, ve = console.groupCollapsed, ne = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
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
        k++;
      }
    }
    function me() {
      {
        if (k--, k === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ee
            }),
            info: O({}, e, {
              value: X
            }),
            warn: O({}, e, {
              value: re
            }),
            error: O({}, e, {
              value: V
            }),
            group: O({}, e, {
              value: te
            }),
            groupCollapsed: O({}, e, {
              value: ve
            }),
            groupEnd: O({}, e, {
              value: ne
            })
          });
        }
        k < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = F.ReactCurrentDispatcher, ue;
    function b(e, r, t) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (d) {
            var l = d.stack.trim().match(/\n( *(at )?)/);
            ue = l && l[1] || "";
          }
        return `
` + ue + e;
      }
    }
    var w = !1, N;
    {
      var K = typeof WeakMap == "function" ? WeakMap : Map;
      N = new K();
    }
    function Se(e, r) {
      if (!e || w)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var l;
      w = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = ae.current, ae.current = null, Ee();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (L) {
              l = L;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (L) {
              l = L;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            l = L;
          }
          e();
        }
      } catch (L) {
        if (L && l && typeof L.stack == "string") {
          for (var u = L.stack.split(`
`), I = l.stack.split(`
`), _ = u.length - 1, x = I.length - 1; _ >= 1 && x >= 0 && u[_] !== I[x]; )
            x--;
          for (; _ >= 1 && x >= 0; _--, x--)
            if (u[_] !== I[x]) {
              if (_ !== 1 || x !== 1)
                do
                  if (_--, x--, x < 0 || u[_] !== I[x]) {
                    var J = `
` + u[_].replace(" at new ", " at ");
                    return e.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, J), J;
                  }
                while (_ >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        w = !1, ae.current = g, me(), Error.prepareStackTrace = d;
      }
      var le = e ? e.displayName || e.name : "", oe = le ? b(le) : "";
      return typeof e == "function" && N.set(e, oe), oe;
    }
    function He(e, r, t) {
      return Se(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ge(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, Ze(e));
      if (typeof e == "string")
        return b(e);
      switch (e) {
        case E:
          return b("Suspense");
        case h:
          return b("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return He(e.render);
          case T:
            return ge(e.type, r, t);
          case S: {
            var l = e, d = l._payload, g = l._init;
            try {
              return ge(g(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, ke = {}, Ce = F.ReactDebugCurrentFrame;
    function be(e) {
      if (e) {
        var r = e._owner, t = ge(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Qe(e, r, t, l, d) {
      {
        var g = Function.call.bind(se);
        for (var s in e)
          if (g(e, s)) {
            var u = void 0;
            try {
              if (typeof e[s] != "function") {
                var I = Error((l || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              u = e[s](r, s, l, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              u = _;
            }
            u && !(u instanceof Error) && (be(d), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", t, s, typeof u), be(null)), u instanceof Error && !(u.message in ke) && (ke[u.message] = !0, be(d), p("Failed %s type: %s", t, u.message), be(null));
          }
      }
    }
    var er = Array.isArray;
    function we(e) {
      return er(e);
    }
    function rr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function tr(e) {
      try {
        return De(e), !1;
      } catch {
        return !0;
      }
    }
    function De(e) {
      return "" + e;
    }
    function Fe(e) {
      if (tr(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), De(e);
    }
    var Ae = F.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Me, Ne;
    function or(e) {
      if (se.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (se.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ir(e, r) {
      typeof e.ref == "string" && Ae.current;
    }
    function lr(e, r) {
      {
        var t = function() {
          Me || (Me = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          Ne || (Ne = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, l, d, g, s) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: g
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function cr(e, r, t, l, d) {
      {
        var g, s = {}, u = null, I = null;
        t !== void 0 && (Fe(t), u = "" + t), ar(r) && (Fe(r.key), u = "" + r.key), or(r) && (I = r.ref, ir(r, d));
        for (g in r)
          se.call(r, g) && !nr.hasOwnProperty(g) && (s[g] = r[g]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (g in _)
            s[g] === void 0 && (s[g] = _[g]);
        }
        if (u || I) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && lr(s, x), I && ur(s, x);
        }
        return sr(e, u, I, d, l, Ae.current, s);
      }
    }
    var _e = F.ReactCurrentOwner, Ie = F.ReactDebugCurrentFrame;
    function ie(e) {
      if (e) {
        var r = e._owner, t = ge(e.type, e._source, r ? r.type : null);
        Ie.setExtraStackFrame(t);
      } else
        Ie.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function We() {
      {
        if (_e.current) {
          var e = f(_e.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function fr(e) {
      return "";
    }
    var $e = {};
    function dr(e) {
      {
        var r = We();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = dr(r);
        if ($e[t])
          return;
        $e[t] = !0;
        var l = "";
        e && e._owner && e._owner !== _e.current && (l = " It was passed a child from " + f(e._owner.type) + "."), ie(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, l), ie(null);
      }
    }
    function Le(e, r) {
      {
        if (typeof e != "object")
          return;
        if (we(e))
          for (var t = 0; t < e.length; t++) {
            var l = e[t];
            Oe(l) && Ye(l, r);
          }
        else if (Oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = G(e);
          if (typeof d == "function" && d !== e.entries)
            for (var g = d.call(e), s; !(s = g.next()).done; )
              Oe(s.value) && Ye(s.value, r);
        }
      }
    }
    function vr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var l = f(r);
          Qe(t, e.props, "prop", l, e);
        } else if (r.PropTypes !== void 0 && !Re) {
          Re = !0;
          var d = f(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var l = r[t];
          if (l !== "children" && l !== "key") {
            ie(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), ie(null);
            break;
          }
        }
        e.ref !== null && (ie(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), ie(null));
      }
    }
    var Be = {};
    function Ue(e, r, t, l, d, g) {
      {
        var s = m(e);
        if (!s) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = fr();
          I ? u += I : u += We();
          var _;
          e === null ? _ = "null" : we(e) ? _ = "array" : e !== void 0 && e.$$typeof === o ? (_ = "<" + (f(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, u);
        }
        var x = cr(e, r, t, d, g);
        if (x == null)
          return x;
        if (s) {
          var J = r.children;
          if (J !== void 0)
            if (l)
              if (we(J)) {
                for (var le = 0; le < J.length; le++)
                  Le(J[le], e);
                Object.freeze && Object.freeze(J);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(J, e);
        }
        if (se.call(r, "key")) {
          var oe = f(e), L = Object.keys(r).filter(function(Er) {
            return Er !== "key";
          }), xe = L.length > 0 ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Be[oe + xe]) {
            var yr = L.length > 0 ? "{" + L.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xe, oe, yr, oe), Be[oe + xe] = !0;
          }
        }
        return e === i ? pr(x) : vr(x), x;
      }
    }
    function mr(e, r, t) {
      return Ue(e, r, t, !0);
    }
    function gr(e, r, t) {
      return Ue(e, r, t, !1);
    }
    var br = gr, hr = mr;
    fe.Fragment = i, fe.jsx = br, fe.jsxs = hr;
  }()), fe;
}
process.env.NODE_ENV === "production" ? Te.exports = _r() : Te.exports = Rr();
var W = Te.exports;
const Or = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], $r = ({
  multiple: n = !1,
  dayList: o = Or,
  state: a,
  setState: i,
  onDayChange: v,
  selectedColor: y = "#007bff",
  unselectedColor: P = "#d3d3d3",
  selectedHoverColor: R = "#0056b3",
  unselectedHoverColor: c = "#f0f0f0",
  width: E = "150px",
  fontSize: h = "16px",
  fontWeight: T = "400",
  fontStyle: S = "normal",
  selectedTextColor: D = "#fff",
  unselectedTextColor: q = "#000",
  inputTextColor: B = "#000",
  placeholder: G = "Select days",
  inputBgColor: F = "#fff",
  // advance styling
  inputBoxStyle: p = {},
  dropdownContainerStyle: z = {},
  dropdownItemStyle: H = {}
}) => {
  const [U, j] = Q(a || []), [C, A] = Q(!1), $ = Pe(null), m = (f) => {
    let O;
    n ? O = U.includes(f) ? U.filter((k) => k !== f) : [...U, f] : O = [f], j(O), i == null || i(O), v == null || v(O);
  }, Y = () => A(!C), M = (f) => {
    $.current && !$.current.contains(f.target) && A(!1);
  };
  return de(() => (document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M)), []), /* @__PURE__ */ W.jsxs(
    "div",
    {
      ref: $,
      className: "dropdown-wrapper",
      style: { width: `max(${E}, 150px)` },
      children: [
        /* @__PURE__ */ W.jsx(
          "input",
          {
            type: "text",
            readOnly: !0,
            value: U.join(", "),
            onClick: Y,
            placeholder: G,
            className: "dropdown-input",
            style: {
              fontSize: h,
              fontWeight: T,
              fontStyle: S,
              color: B,
              backgroundColor: F,
              ...p
            }
          }
        ),
        C && /* @__PURE__ */ W.jsx(
          "div",
          {
            className: "dropdown-popup",
            style: { width: "100%", ...z },
            children: o.map((f, O) => {
              const k = U.includes(f);
              return /* @__PURE__ */ W.jsx(
                "div",
                {
                  className: "dropdown-item",
                  onClick: () => m(f),
                  style: {
                    backgroundColor: k ? y : P,
                    color: k ? D : q,
                    ...H
                  },
                  onMouseEnter: (ee) => ee.currentTarget.style.backgroundColor = k ? R : c,
                  onMouseLeave: (ee) => ee.currentTarget.style.backgroundColor = k ? y : P,
                  children: f
                },
                O
              );
            })
          }
        )
      ]
    }
  );
};
var Xe = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, qe = Z.createContext && /* @__PURE__ */ Z.createContext(Xe), xr = ["attr", "size", "title"];
function jr(n, o) {
  if (n == null) return {};
  var a = Pr(n, o), i, v;
  if (Object.getOwnPropertySymbols) {
    var y = Object.getOwnPropertySymbols(n);
    for (v = 0; v < y.length; v++)
      i = y[v], !(o.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(n, i) && (a[i] = n[i]);
  }
  return a;
}
function Pr(n, o) {
  if (n == null) return {};
  var a = {};
  for (var i in n)
    if (Object.prototype.hasOwnProperty.call(n, i)) {
      if (o.indexOf(i) >= 0) continue;
      a[i] = n[i];
    }
  return a;
}
function he() {
  return he = Object.assign ? Object.assign.bind() : function(n) {
    for (var o = 1; o < arguments.length; o++) {
      var a = arguments[o];
      for (var i in a)
        Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
    }
    return n;
  }, he.apply(this, arguments);
}
function Ge(n, o) {
  var a = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    o && (i = i.filter(function(v) {
      return Object.getOwnPropertyDescriptor(n, v).enumerable;
    })), a.push.apply(a, i);
  }
  return a;
}
function ye(n) {
  for (var o = 1; o < arguments.length; o++) {
    var a = arguments[o] != null ? arguments[o] : {};
    o % 2 ? Ge(Object(a), !0).forEach(function(i) {
      Tr(n, i, a[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : Ge(Object(a)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(a, i));
    });
  }
  return n;
}
function Tr(n, o, a) {
  return o = Sr(o), o in n ? Object.defineProperty(n, o, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : n[o] = a, n;
}
function Sr(n) {
  var o = kr(n, "string");
  return typeof o == "symbol" ? o : o + "";
}
function kr(n, o) {
  if (typeof n != "object" || !n) return n;
  var a = n[Symbol.toPrimitive];
  if (a !== void 0) {
    var i = a.call(n, o);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(n);
}
function ze(n) {
  return n && n.map((o, a) => /* @__PURE__ */ Z.createElement(o.tag, ye({
    key: a
  }, o.attr), ze(o.child)));
}
function Cr(n) {
  return (o) => /* @__PURE__ */ Z.createElement(Dr, he({
    attr: ye({}, n.attr)
  }, o), ze(n.child));
}
function Dr(n) {
  var o = (a) => {
    var {
      attr: i,
      size: v,
      title: y
    } = n, P = jr(n, xr), R = v || a.size || "1em", c;
    return a.className && (c = a.className), n.className && (c = (c ? c + " " : "") + n.className), /* @__PURE__ */ Z.createElement("svg", he({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, i, P, {
      className: c,
      style: ye(ye({
        color: n.color || a.color
      }, a.style), n.style),
      height: R,
      width: R,
      xmlns: "http://www.w3.org/2000/svg"
    }), y && /* @__PURE__ */ Z.createElement("title", null, y), n.children);
  };
  return qe !== void 0 ? /* @__PURE__ */ Z.createElement(qe.Consumer, null, (a) => o(a)) : o(Xe);
}
function Fr(n) {
  return Cr({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(n);
}
const Ar = {
  Sun: "🌞",
  Mon: "🌛",
  Tue: "🌮",
  Wed: "🍹",
  Thu: "🎉",
  Fri: "🍻",
  Sat: "🎨"
}, Yr = ({
  dayList: n = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  state: o = null,
  setState: a = null,
  onDayChange: i = null,
  selectedColor: v = "#007bff",
  unselectedColor: y = "#ffffff",
  selectedHoverColor: P = "#0056b3",
  unselectedHoverColor: R = "#f0f0f0",
  width: c = "auto",
  fontSize: E = "16px",
  fontWeight: h = "normal",
  fontStyle: T = "normal",
  selectedTextColor: S = "#ffffff",
  unselectedTextColor: D = "#333333",
  inputTextColor: q = "#000000",
  placeholder: B = "Select days",
  multiple: G = !1,
  iconAlign: F = "right",
  displayOption: p = "both",
  showIcons: z = !0,
  showTicks: H = !0,
  excludeDays: U = [],
  tickOrder: j = 3,
  dayOrder: C = 2,
  iconOrder: A = 1,
  inputBgColor: $ = "#fff",
  // advance styling
  inputBoxStyle: m = {},
  dropdownContainerStyle: Y = {},
  dropdownItemStyle: M = {}
}) => {
  const [f, O] = Q(!1), [k, ee] = Q(o || []), [X, re] = Q({
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    flexDirection: "row"
  }), V = Pe(null), te = Pe(null), ve = window.innerHeight, ne = window.innerWidth, pe = { ...Ar }, Ee = (b) => {
    let w;
    k.includes(b) ? w = k.filter((N) => N !== b) : w = G ? [...k, b] : [b], ee(w), a == null || a(w), i == null || i(w);
  }, me = (b) => {
    V.current && !V.current.contains(b.target) && O(!1);
  };
  function ae() {
    if (!V.current) return { width: 0, height: 0 };
    const b = V.current.style.display;
    V.current.style.display = "flex";
    const w = V.current.getBoundingClientRect();
    return V.current.style.display = b, { width: w.width, height: w.height };
  }
  const ue = () => {
    if (te.current && V.current) {
      const b = te.current.getBoundingClientRect(), { width: w, height: N } = ae();
      b.left + w <= ne ? re((K) => ({ ...K, left: "0" })) : ne - b.right + w <= ne ? re((K) => ({
        ...K,
        right: "0",
        flexDirection: "row-reverse"
      })) : w + 20 <= ne ? re((K) => ({
        ...K,
        right: `-${ne - b.right - 10}px`
      })) : re((K) => ({
        ...K,
        left: "0",
        right: "0",
        flexDirection: "column"
      }));
    }
  };
  return de(() => {
    ue();
  }, []), de(() => {
    if (te.current && V.current) {
      const b = te.current.getBoundingClientRect(), { height: w } = ae();
      b.bottom + w > ve && re((N) => ({
        ...N,
        top: `-${w}px`,
        flexDirection: "column-reverse"
      }));
    }
  }, [X.left, X.right]), de(() => (document.addEventListener("mousedown", me), () => document.removeEventListener("mousedown", me)), []), /* @__PURE__ */ W.jsxs("div", { className: "cms-wrapper", children: [
    /* @__PURE__ */ W.jsx(
      "input",
      {
        ref: te,
        readOnly: !0,
        className: "cms-input",
        value: k.join(", "),
        onClick: () => !f && O(!0),
        placeholder: B,
        style: {
          fontSize: E,
          color: q,
          borderColor: v,
          fontWeight: h,
          fontStyle: T,
          backgroundColor: $,
          ...m
        }
      }
    ),
    /* @__PURE__ */ W.jsx(
      "div",
      {
        ref: V,
        className: `cms-menu ${f ? "show" : ""}`,
        style: {
          width: c,
          top: X.top,
          left: X.left,
          right: X.right,
          bottom: X.bottom,
          flexDirection: X.flexDirection,
          ...Y
        },
        children: n.map((b, w) => {
          if (U.includes(b)) return null;
          const N = k.includes(b);
          return /* @__PURE__ */ W.jsxs(
            "button",
            {
              onClick: () => Ee(b),
              className: `cms-day-button cms-align-${F}`,
              style: {
                backgroundColor: N ? v : y,
                color: N ? S : D,
                fontSize: E,
                fontWeight: h,
                ...M
              },
              onMouseEnter: (K) => K.currentTarget.style.backgroundColor = N ? P : R,
              onMouseLeave: (K) => K.currentTarget.style.backgroundColor = N ? v : y,
              children: [
                z && p !== "word" && /* @__PURE__ */ W.jsx("span", { className: "cms-icon", style: { order: A }, children: pe[b] }),
                p !== "icon" && /* @__PURE__ */ W.jsx("span", { className: "cms-day-text", style: { order: C }, children: b }),
                H && /* @__PURE__ */ W.jsx(
                  Fr,
                  {
                    className: "cms-tick",
                    style: {
                      order: j,
                      visibility: N ? "visible" : "hidden"
                    }
                  }
                )
              ]
            },
            w
          );
        })
      }
    )
  ] });
}, Mr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], Lr = ({
  multiple: n = !1,
  dayList: o = Mr,
  state: a = null,
  setState: i = null,
  onDayChange: v = null,
  selectedColor: y = "#007bff",
  unselectedColor: P = "#d3d3d3",
  selectedHoverColor: R = "#0056b3",
  unselectedHoverColor: c = "#f0f0f0",
  size: E = 300,
  fontSize: h = "14px",
  fontWeight: T = "400",
  fontStyle: S = "normal",
  selectedTextColor: D = "#fff",
  unselectedTextColor: q = "#000"
}) => {
  const [B, G] = Q(a || []), [F, p] = Q(null), [z, H] = Q(0), U = je(
    () => ({
      displayModeBar: !1,
      displaylogo: !1,
      modeBarButtonsToRemove: ["toImage"]
    }),
    []
  ), j = je(
    () => ({
      height: typeof E == "number" ? E : parseFloat(E),
      width: typeof E == "number" ? E : parseFloat(E),
      margin: { t: 0, b: 0, l: 0, r: 0 },
      showlegend: !1,
      paper_bgcolor: "transparent",
      // canvas background
      plot_bgcolor: "#ed1919ff",
      // chart area background
      font: {
        size: parseFloat(h),
        color: D,
        family: "Arial, sans-serif",
        weight: T,
        style: S
      }
    }),
    [E, h, T, S, D]
  ), C = Ve(
    (m) => {
      G((Y) => {
        const M = a || Y;
        let f;
        return n ? M.includes(m) ? f = M.filter((O) => O !== m) : f = [...M, m] : f = M.includes(m) ? [] : [m], i ? i(f) : G(f), v && v(f), f;
      });
    },
    [n, a, i, v]
  ), A = je(
    () => [
      {
        type: "pie",
        values: Array(o.length).fill(1),
        labels: o,
        textinfo: "label",
        textposition: "inside",
        automargin: !0,
        marker: {
          colors: o.map((m) => m === F ? (a || B).includes(m) ? R : c : (a || B).includes(m) ? y : P)
        },
        hoverinfo: "label",
        hoverlabel: {
          bgcolor: o.map(
            (m) => (a || B).includes(m) ? R : c
          )
        },
        insidetextfont: {
          color: o.map(
            (m) => (a || B).includes(m) ? D : q
          )
        }
      }
    ],
    [
      o,
      B,
      a,
      y,
      P,
      R,
      c,
      D,
      q,
      F
    ]
  ), $ = Ve(
    (m) => {
      if (m.points && m.points.length > 0) {
        const Y = m.points[0].label;
        C(Y);
      } else
        console.warn("No points clicked");
    },
    [C]
  );
  return de(() => {
    H((m) => m + 1);
  }, []), /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx(
    wr,
    {
      data: A,
      layout: j,
      config: U,
      onClick: $,
      "aria-label": "Circular day selector",
      style: { cursor: "pointer" },
      onHover: (m) => {
        var M;
        const Y = (M = m.points) == null ? void 0 : M[0];
        Y != null && Y.label && p(Y.label);
      },
      onUnhover: () => p(null)
    },
    z
  ) });
}, Nr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
], Br = ({
  multiple: n = !1,
  dayList: o = Nr,
  state: a = null,
  setState: i = null,
  onDayChange: v = null,
  selectedColor: y = "#007bff",
  unselectedColor: P = "#d3d3d3",
  selectedHoverColor: R = "#0056b3",
  unselectedHoverColor: c = "#f0f0f0",
  selectedTextColor: E = "#fff",
  unselectedTextColor: h = "#000",
  width: T = "200px",
  displayLength: S = 1,
  fontSize: D = "16px",
  fontWeight: q = "400",
  fontStyle: B = "normal",
  // advance styling
  optionContainerStyle: G = {},
  optionStyle: F = {}
}) => {
  const [p, z] = Q(a || []), H = (j) => {
    let C;
    n ? C = p.includes(j) ? p.filter((A) => A !== j) : [...p, j] : C = [j], z(C), i == null || i(C), v == null || v(C);
  }, U = (j) => S && S > 0 ? j.slice(0, S) : j;
  return /* @__PURE__ */ W.jsx("div", { className: "ds-circle-wrapper", style: { width: T, ...G }, children: o.map((j, C) => {
    const A = p.includes(j);
    return /* @__PURE__ */ W.jsx(
      "div",
      {
        className: "ds-circle",
        onClick: () => H(j),
        style: {
          backgroundColor: A ? y : P,
          color: A ? E : h,
          fontSize: D,
          fontWeight: q,
          fontStyle: B,
          ...F
        },
        onMouseEnter: ($) => {
          $.currentTarget.style.backgroundColor = A ? R : c;
        },
        onMouseLeave: ($) => {
          $.currentTarget.style.backgroundColor = A ? y : P;
        },
        children: U(j)
      },
      C
    );
  }) });
};
export {
  Lr as CircularSelector,
  Yr as CustomMenuSelector,
  Br as DefaultSelector,
  $r as DropdownSelector
};
