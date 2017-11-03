;function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined
}


function setCookie(name, value, props) {
  props = props || {};

  var exp = props.expires;

  if (typeof exp === "number" && exp) {
    var d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }

  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString()
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in props) {
    if (props.hasOwnProperty(propName)) {
      updatedCookie += "; " + propName;
      var propValue = props[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }
  }

  document.cookie = updatedCookie;
}


if (function (e, t) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
      if (!e.document)throw new Error("jQuery requires a window with a document");
      return t(e)
    } : t(e)
  }("undefined" !== typeof window ? window : this, function (e, t) {
    function n(e) {
      var t = !!e && "length" in e && e.length, n = re.type(e);
      return "function" !== n && !re.isWindow(e) && ("array" === n || 0 === t || "number" === typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t, n) {
      if (re.isFunction(t))return re.grep(e, function (e, i) {
        return !!t.call(e, i, e) !== n
      });
      if (t.nodeType)return re.grep(e, function (e) {
        return e === t !== n
      });
      if ("string" === typeof t) {
        if (pe.test(t))return re.filter(t, e, n);
        t = re.filter(t, e)
      }
      return re.grep(e, function (e) {
        return J.call(t, e) > -1 !== n
      })
    }

    function o(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;);
      return e
    }

    function r(e) {
      var t = {};
      return re.each(e.match(ve) || [], function (e, n) {
        t[n] = !0
      }), t
    }

    function s() {
      V.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), re.ready()
    }

    function a() {
      this.expando = re.expando + a.uid++
    }

    function l(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)if (i = "data-" + t.replace(Se, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
        try {
          n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Te.test(n) ? re.parseJSON(n) : n)
        } catch (e) {
        }
        ke.set(e, t, n)
      } else n = void 0;
      return n
    }

    function c(e, t, n, i) {
      var o, r = 1, s = 20, a = i ? function () {
          return i.cur()
        } : function () {
          return re.css(e, t, "")
        }, l = a(), c = n && n[3] || (re.cssNumber[t] ? "" : "px"),
        u = (re.cssNumber[t] || "px" !== c && +l) && $e.exec(re.css(e, t));
      if (u && u[3] !== c) {
        c = c || u[3], n = n || [], u = +l || 1;
        do {
          r = r || ".5", u /= r, re.style(e, t, u + c)
        } while (r !== (r = a() / l) && 1 !== r && --s)
      }
      return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }

    function u(e, t) {
      var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
      return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], n) : n
    }

    function d(e, t) {
      for (var n = 0, i = e.length; i > n; n++)we.set(e[n], "globalEval", !t || we.get(t[n], "globalEval"))
    }

    function p(e, t, n, i, o) {
      for (var r, s, a, l, c, p, f = t.createDocumentFragment(), h = [], m = 0, g = e.length; g > m; m++)if ((r = e[m]) || 0 === r)if ("object" === re.type(r)) re.merge(h, r.nodeType ? [r] : r); else if (Me.test(r)) {
        for (s = s || f.appendChild(t.createElement("div")), a = (_e.exec(r) || ["", ""])[1].toLowerCase(), l = Oe[a] || Oe._default, s.innerHTML = l[1] + re.htmlPrefilter(r) + l[2], p = l[0]; p--;)s = s.lastChild;
        re.merge(h, s.childNodes), s = f.firstChild, s.textContent = ""
      } else h.push(t.createTextNode(r));
      for (f.textContent = "", m = 0; r = h[m++];)if (i && re.inArray(r, i) > -1) o && o.push(r); else if (c = re.contains(r.ownerDocument, r), s = u(f.appendChild(r), "script"), c && d(s), n)for (p = 0; r = s[p++];)Le.test(r.type || "") && n.push(r);
      return f
    }

    function f() {
      return !0
    }

    function h() {
      return !1
    }

    function m() {
      try {
        return V.activeElement
      } catch (e) {
      }
    }

    function g(e, t, n, i, o, r) {
      var s, a;
      if ("object" == typeof t) {
        "string" != typeof n && (i = i || n, n = void 0);
        for (a in t)g(e, a, n, i, t[a], r);
        return e
      }
      if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = h; else if (!o)return e;
      return 1 === r && (s = o, o = function (e) {
        return re().off(e), s.apply(this, arguments)
      }, o.guid = s.guid || (s.guid = re.guid++)), e.each(function () {
        re.event.add(this, t, o, i, n)
      })
    }

    function v(e, t) {
      return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function b(e) {
      var t = Fe.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
      var n, i, o, r, s, a, l, c;
      if (1 === t.nodeType) {
        if (we.hasData(e) && (r = we.access(e), s = we.set(t, r), c = r.events)) {
          delete s.handle, s.events = {};
          for (o in c)for (n = 0, i = c[o].length; i > n; n++)re.event.add(t, o, c[o][n])
        }
        ke.hasData(e) && (a = ke.access(e), l = re.extend({}, a), ke.set(t, l))
      }
    }

    function w(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Ae.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function k(e, t, n, i) {
      t = Q.apply([], t);
      var o, r, s, a, l, c, d = 0, f = e.length, h = f - 1, m = t[0], g = re.isFunction(m);
      if (g || f > 1 && "string" == typeof m && !ie.checkClone && Ne.test(m))return e.each(function (o) {
        var r = e.eq(o);
        g && (t[0] = m.call(this, o, r.html())), k(r, t, n, i)
      });
      if (f && (o = p(t, e[0].ownerDocument, !1, e, i), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
        for (s = re.map(u(o, "script"), y), a = s.length; f > d; d++)l = o, d !== h && (l = re.clone(l, !0, !0), a && re.merge(s, u(l, "script"))), n.call(e[d], l, d);
        if (a)for (c = s[s.length - 1].ownerDocument, re.map(s, b), d = 0; a > d; d++)l = s[d], Le.test(l.type || "") && !we.access(l, "globalEval") && re.contains(c, l) && (l.src ? re._evalUrl && re._evalUrl(l.src) : re.globalEval(l.textContent.replace(He, "")))
      }
      return e
    }

    function T(e, t, n) {
      for (var i, o = t ? re.filter(t, e) : e, r = 0; null != (i = o[r]); r++)n || 1 !== i.nodeType || re.cleanData(u(i)), i.parentNode && (n && re.contains(i.ownerDocument, i) && d(u(i, "script")), i.parentNode.removeChild(i));
      return e
    }

    function S(e, t) {
      var n = re(t.createElement(e)).appendTo(t.body), i = re.css(n[0], "display");
      return n.detach(), i
    }

    function C(e) {
      var t = V, n = ze[e];
      return n || (n = S(e, t), "none" !== n && n || (We = (We || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = S(e, t), We.detach()), ze[e] = n), n
    }

    function $(e, t, n) {
      var i, o, r, s, a = e.style;
      return n = n || qe(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || re.contains(e.ownerDocument, e) || (s = re.style(e, t)), n && !ie.pixelMarginRight() && Xe.test(s) && Ye.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
    }

    function E(e, t) {
      return {
        get: function () {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments)
        }
      }
    }

    function P(e) {
      if (e in Ze)return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--;)if ((e = Qe[n] + t) in Ze)return e
    }

    function A(e, t, n) {
      var i = $e.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function _(e, t, n, i, o) {
      for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2)"margin" === n && (s += re.css(e, n + Ee[r], !0, o)), i ? ("content" === n && (s -= re.css(e, "padding" + Ee[r], !0, o)), "margin" !== n && (s -= re.css(e, "border" + Ee[r] + "Width", !0, o))) : (s += re.css(e, "padding" + Ee[r], !0, o), "padding" !== n && (s += re.css(e, "border" + Ee[r] + "Width", !0, o)));
      return s
    }

    function L(e, t, n) {
      var i = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, r = qe(e),
        s = "border-box" === re.css(e, "boxSizing", !1, r);
      if (0 >= o || null == o) {
        if (o = $(e, t, r), (0 > o || null == o) && (o = e.style[t]), Xe.test(o))return o;
        i = s && (ie.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
      }
      return o + _(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function O(e, t) {
      for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++)i = e[s], i.style && (r[s] = we.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pe(i) && (r[s] = we.access(i, "olddisplay", C(i.nodeName)))) : (o = Pe(i), "none" === n && o || we.set(i, "olddisplay", o ? n : re.css(i, "display"))));
      for (s = 0; a > s; s++)i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
      return e
    }

    function M(e, t, n, i, o) {
      return new M.prototype.init(e, t, n, i, o)
    }

    function D() {
      return e.setTimeout(function () {
        Je = void 0
      }), Je = re.now()
    }

    function I(e, t) {
      var n, i = 0, o = {height: e};
      for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = Ee[i], o["margin" + n] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e), o
    }

    function R(e, t, n) {
      for (var i, o = (F.tweeners[t] || []).concat(F.tweeners["*"]), r = 0, s = o.length; s > r; r++)if (i = o[r].call(n, t, e))return i
    }

    function j(e, t, n) {
      var i, o, r, s, a, l, c, u = this, d = {}, p = e.style, f = e.nodeType && Pe(e),
        h = we.get(e, "fxshow");
      n.queue || (a = re._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
        a.unqueued || l()
      }), a.unqueued++, u.always(function () {
        u.always(function () {
          a.unqueued--, re.queue(e, "fx").length || a.empty.fire()
        })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = re.css(e, "display"), "inline" === ("none" === c ? we.get(e, "olddisplay") || C(e.nodeName) : c) && "none" === re.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", u.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
      }));
      for (i in t)if (o = t[i], tt.exec(o)) {
        if (delete t[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
          if ("show" !== o || !h || void 0 === h[i])continue;
          f = !0
        }
        d[i] = h && h[i] || re.style(e, i)
      } else c = void 0;
      if (re.isEmptyObject(d)) "inline" === ("none" === c ? C(e.nodeName) : c) && (p.display = c); else {
        h ? "hidden" in h && (f = h.hidden) : h = we.access(e, "fxshow", {}), r && (h.hidden = !f), f ? re(e).show() : u.done(function () {
          re(e).hide()
        }), u.done(function () {
          var t;
          we.remove(e, "fxshow");
          for (t in d)re.style(e, t, d[t])
        });
        for (i in d)s = R(f ? h[i] : 0, i, u), i in h || (h[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
      }
    }

    function N(e, t) {
      var n, i, o, r, s;
      for (n in e)if (i = re.camelCase(n), o = t[i], r = e[n], re.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = re.cssHooks[i]) && "expand" in s) {
        r = s.expand(r), delete e[i];
        for (n in r)n in e || (e[n] = r[n], t[n] = o)
      } else t[i] = o
    }

    function F(e, t, n) {
      var i, o, r = 0, s = F.prefilters.length, a = re.Deferred().always(function () {
        delete l.elem
      }), l = function () {
        if (o)return !1;
        for (var t = Je || D(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; l > s; s++)c.tweens[s].run(r);
        return a.notifyWith(e, [c, r, n]), 1 > r && l ? n : (a.resolveWith(e, [c]), !1)
      }, c = a.promise({
        elem: e,
        props: re.extend({}, t),
        opts: re.extend(!0, {specialEasing: {}, easing: re.easing._default}, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Je || D(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = re.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
          return c.tweens.push(i), i
        },
        stop: function (t) {
          var n = 0, i = t ? c.tweens.length : 0;
          if (o)return this;
          for (o = !0; i > n; n++)c.tweens[n].run(1);
          return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
        }
      }), u = c.props;
      for (N(u, c.opts.specialEasing); s > r; r++)if (i = F.prefilters[r].call(c, e, u, c.opts))return re.isFunction(i.stop) && (re._queueHooks(c.elem, c.opts.queue).stop = re.proxy(i.stop, i)), i;
      return re.map(u, R, c), re.isFunction(c.opts.start) && c.opts.start.call(e, c), re.fx.timer(re.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function H(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function W(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var i, o = 0, r = t.toLowerCase().match(ve) || [];
        if (re.isFunction(n))for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
      }
    }

    function z(e, t, n, i) {
      function o(a) {
        var l;
        return r[a] = !0, re.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
        }), l
      }

      var r = {}, s = e === vt;
      return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function Y(e, t) {
      var n, i, o = re.ajaxSettings.flatOptions || {};
      for (n in t)void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
      return i && re.extend(!0, e, i), e
    }

    function X(e, t, n) {
      for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i)for (o in a)if (a[o] && a[o].test(i)) {
        l.unshift(o);
        break
      }
      if (l[0] in n) r = l[0]; else {
        for (o in n) {
          if (!l[0] || e.converters[o + " " + l[0]]) {
            r = o;
            break
          }
          s || (s = o)
        }
        r = r || s
      }
      return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function q(e, t, n, i) {
      var o, r, s, a, l, c = {}, u = e.dataTypes.slice();
      if (u[1])for (s in e.converters)c[s.toLowerCase()] = e.converters[s];
      for (r = u.shift(); r;)if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())if ("*" === r) r = l; else if ("*" !== l && l !== r) {
        if (!(s = c[l + " " + r] || c["* " + r]))for (o in c)if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
          !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
          break
        }
        if (!0 !== s)if (s && e.throws) t = s(t); else try {
          t = s(t)
        } catch (e) {
          return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r}
        }
      }
      return {state: "success", data: t}
    }

    function B(e, t, n, i) {
      var o;
      if (re.isArray(t)) re.each(t, function (t, o) {
        n || xt.test(e) ? i(e, o) : B(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
      }); else if (n || "object" !== re.type(t)) i(e, t); else for (o in t)B(e + "[" + o + "]", t[o], n, i)
    }

    function U(e) {
      return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var G = [], V = e.document, K = G.slice, Q = G.concat, Z = G.push, J = G.indexOf, ee = {},
      te = ee.toString, ne = ee.hasOwnProperty, ie = {}, oe = "2.2.4", re = function (e, t) {
        return new re.fn.init(e, t)
      }, se = function (e, t) {
        return t.toUpperCase()
      };
    re.fn = re.prototype = {
      jquery: oe,
      constructor: re,
      selector: "",
      length: 0,
      toArray: function () {
        return K.call(this)
      },
      get: function (e) {
        return null != e ? 0 > e ? this[e + this.length] : this[e] : K.call(this)
      },
      pushStack: function (e) {
        var t = re.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      },
      each: function (e) {
        return re.each(this, e)
      },
      map: function (e) {
        return this.pushStack(re.map(this, function (t, n) {
          return e.call(t, n, t)
        }))
      },
      slice: function () {
        return this.pushStack(K.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      eq: function (e) {
        var t = this.length, n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: Z,
      sort: G.sort,
      splice: G.splice
    }, re.extend = re.fn.extend = function () {
      var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
      for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || re.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)if (null != (e = arguments[a]))for (t in e)n = s[t], i = e[t], s !== i && (c && i && (re.isPlainObject(i) || (o = re.isArray(i))) ? (o ? (o = !1, r = n && re.isArray(n) ? n : []) : r = n && re.isPlainObject(n) ? n : {}, s[t] = re.extend(c, r, i)) : void 0 !== i && (s[t] = i));
      return s
    }, re.extend({
      expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e)
      },
      noop: function () {
      },
      isFunction: function (e) {
        return "function" === re.type(e)
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window
      },
      isNumeric: function (e) {
        var t = e && e.toString();
        return !re.isArray(e) && t - parseFloat(t) + 1 >= 0
      },
      isPlainObject: function (e) {
        var t;
        if ("object" !== re.type(e) || e.nodeType || re.isWindow(e))return !1;
        if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf"))return !1;
        for (t in e);
        return void 0 === t || ne.call(e, t)
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e)return !1;
        return !0
      },
      type: function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
      },
      globalEval: function (e) {
        var t, n = eval;
        (e = re.trim(e)) && (1 === e.indexOf("use strict") ? (t = V.createElement("script"), t.text = e, V.head.appendChild(t).parentNode.removeChild(t)) : n(e))
      },
      camelCase: function (e) {
        return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, se)
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function (e, t) {
        var i, o = 0;
        if (n(e))for (i = e.length; i > o && !1 !== t.call(e[o], o, e[o]); o++); else for (o in e)if (!1 === t.call(e[o], o, e[o]))break;
        return e
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
      },
      makeArray: function (e, t) {
        var i = t || [];
        return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : Z.call(i, e)), i
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : J.call(t, e, n)
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; n > i; i++)e[o++] = t[i];
        return e.length = o, e
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, r = e.length, s = !n; r > o; o++)!t(e[o], o) !== s && i.push(e[o]);
        return i
      },
      map: function (e, t, i) {
        var o, r, s = 0, a = [];
        if (n(e))for (o = e.length; o > s; s++)null != (r = t(e[s], s, i)) && a.push(r); else for (s in e)null != (r = t(e[s], s, i)) && a.push(r);
        return Q.apply([], a)
      },
      guid: 1,
      proxy: function (e, t) {
        var n, i, o;
        return "string" == typeof t && (n = e[t], t = e, e = n), re.isFunction(e) ? (i = K.call(arguments, 2), o = function () {
          return e.apply(t || this, i.concat(K.call(arguments)))
        }, o.guid = e.guid = e.guid || re.guid++, o) : void 0
      },
      now: Date.now,
      support: ie
    }), "function" == typeof Symbol && (re.fn[Symbol.iterator] = G[Symbol.iterator]), re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ae = function (e) {
      function t(e, t, n, i) {
        var o, r, s, a, c, d, p, f, h = t && t.ownerDocument, m = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)return n;
        if (!i && ((t ? t.ownerDocument || t : N) !== _ && A(t), t = t || _, O)) {
          if (11 !== m && (d = me.exec(e)))if (o = d[1]) {
            if (9 === m) {
              if (!(s = t.getElementById(o)))return n;
              if (s.id === o)return n.push(s), n
            } else if (h && (s = h.getElementById(o)) && R(t, s) && s.id === o)return n.push(s), n
          } else {
            if (d[2])return K.apply(n, t.getElementsByTagName(e)), n;
            if ((o = d[3]) && b.getElementsByClassName && t.getElementsByClassName)return K.apply(n, t.getElementsByClassName(o)), n
          }
          if (b.qsa && !Y[e + " "] && (!M || !M.test(e))) {
            if (1 !== m) h = t, f = e; else if ("object" !== t.nodeName.toLowerCase()) {
              for ((a = t.getAttribute("id")) ? a = a.replace(ve, "\\$&") : t.setAttribute("id", a = j), p = T(e), r = p.length, c = ue.test(a) ? "#" + a : "[id='" + a + "']"; r--;)p[r] = c + " " + u(p[r]);
              f = p.join(","), h = ge.test(e) && l(t.parentNode) || t
            }
            if (f)try {
              return K.apply(n, h.querySelectorAll(f)), n
            } catch (e) {
            } finally {
              a === j && t.removeAttribute("id")
            }
          }
        }
        return C(e.replace(re, "$1"), t, n, i)
      }

      function n() {
        function e(n, i) {
          return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
        }

        var t = [];
        return e
      }

      function i(e) {
        return e[j] = !0, e
      }

      function o(e) {
        var t = _.createElement("div");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function r(e, t) {
        for (var n = e.split("|"), i = n.length; i--;)x.attrHandle[n[i]] = t
      }

      function s(e, t) {
        var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || q) - (~e.sourceIndex || q);
        if (i)return i;
        if (n)for (; n = n.nextSibling;)if (n === t)return -1;
        return e ? 1 : -1
      }

      function a(e) {
        return i(function (t) {
          return t = +t, i(function (n, i) {
            for (var o, r = e([], n.length, t), s = r.length; s--;)n[o = r[s]] && (n[o] = !(i[o] = n[o]))
          })
        })
      }

      function l(e) {
        return e && void 0 !== e.getElementsByTagName && e
      }

      function c() {
      }

      function u(e) {
        for (var t = 0, n = e.length, i = ""; n > t; t++)i += e[t].value;
        return i
      }

      function d(e, t, n) {
        var i = t.dir, o = n && "parentNode" === i, r = H++;
        return t.first ? function (t, n, r) {
          for (; t = t[i];)if (1 === t.nodeType || o)return e(t, n, r)
        } : function (t, n, s) {
          var a, l, c, u = [F, r];
          if (s) {
            for (; t = t[i];)if ((1 === t.nodeType || o) && e(t, n, s))return !0
          } else for (; t = t[i];)if (1 === t.nodeType || o) {
            if (c = t[j] || (t[j] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (a = l[i]) && a[0] === F && a[1] === r)return u[2] = a[2];
            if (l[i] = u, u[2] = e(t, n, s))return !0
          }
        }
      }

      function p(e) {
        return e.length > 1 ? function (t, n, i) {
          for (var o = e.length; o--;)if (!e[o](t, n, i))return !1;
          return !0
        } : e[0]
      }

      function f(e, n, i) {
        for (var o = 0, r = n.length; r > o; o++)t(e, n[o], i);
        return i
      }

      function h(e, t, n, i, o) {
        for (var r, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
        return s
      }

      function m(e, t, n, o, r, s) {
        return o && !o[j] && (o = m(o)), r && !r[j] && (r = m(r, s)), i(function (i, s, a, l) {
          var c, u, d, p = [], m = [], g = s.length,
            v = i || f(t || "*", a.nodeType ? [a] : a, []),
            y = !e || !i && t ? v : h(v, p, e, a, l), b = n ? r || (i ? e : g || o) ? [] : s : y;
          if (n && n(y, b, a, l), o)for (c = h(b, m), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[m[u]] = !(y[m[u]] = d));
          if (i) {
            if (r || e) {
              if (r) {
                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                r(null, b = [], c, l)
              }
              for (u = b.length; u--;)(d = b[u]) && (c = r ? Z(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
            }
          } else b = h(b === s ? b.splice(g, b.length) : b), r ? r(null, s, b, l) : K.apply(s, b)
        })
      }

      function g(e) {
        for (var t, n, i, o = e.length, r = x.relative[e[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = d(function (e) {
          return e === t
        }, s, !0), c = d(function (e) {
          return Z(t, e) > -1
        }, s, !0), f = [function (e, n, i) {
          var o = !r && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
          return t = null, o
        }]; o > a; a++)if (n = x.relative[e[a].type]) f = [d(p(f), n)]; else {
          if (n = x.filter[e[a].type].apply(null, e[a].matches), n[j]) {
            for (i = ++a; o > i && !x.relative[e[i].type]; i++);
            return m(a > 1 && p(f), a > 1 && u(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(re, "$1"), n, i > a && g(e.slice(a, i)), o > i && g(e = e.slice(i)), o > i && u(e))
          }
          f.push(n)
        }
        return p(f)
      }

      function v(e, n) {
        var o = n.length > 0, r = e.length > 0, s = function (i, s, a, l, c) {
          var u, d, p, f = 0, m = "0", g = i && [], v = [], y = $,
            b = i || r && x.find.TAG("*", c), w = F += null == y ? 1 : Math.random() || .1,
            k = b.length;
          for (c && ($ = s === _ || s || c); m !== k && null != (u = b[m]); m++) {
            if (r && u) {
              for (d = 0, s || u.ownerDocument === _ || (A(u), a = !O); p = e[d++];)if (p(u, s || _, a)) {
                l.push(u);
                break
              }
              c && (F = w)
            }
            o && ((u = !p && u) && f--, i && g.push(u))
          }
          if (f += m, o && m !== f) {
            for (d = 0; p = n[d++];)p(g, v, s, a);
            if (i) {
              if (f > 0)for (; m--;)g[m] || v[m] || (v[m] = G.call(l));
              v = h(v)
            }
            K.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
          }
          return c && (F = w, $ = y), g
        };
        return o ? i(s) : s
      }

      var y, b, x, w, k, T, S, C, $, E, P, A, _, L, O, M, D, I, R, j = "sizzle" + 1 * new Date,
        N = e.document, F = 0, H = 0, W = n(), z = n(), Y = n(), X = function (e, t) {
          return e === t && (P = !0), 0
        }, q = 1 << 31, B = {}.hasOwnProperty, U = [], G = U.pop, V = U.push, K = U.push,
        Q = U.slice, Z = function (e, t) {
          for (var n = 0, i = e.length; i > n; n++)if (e[n] === t)return n;
          return -1
        },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
        ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
        oe = new RegExp(ee + "+", "g"),
        re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
        se = new RegExp("^" + ee + "*," + ee + "*"),
        ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
        le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ce = new RegExp(ie),
        ue = new RegExp("^" + te + "$"), de = {
          ID: new RegExp("^#(" + te + ")"),
          CLASS: new RegExp("^\\.(" + te + ")"),
          TAG: new RegExp("^(" + te + "|[*])"),
          ATTR: new RegExp("^" + ne),
          PSEUDO: new RegExp("^" + ie),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + J + ")$", "i"),
          needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, pe = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/,
        me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ve = /'|\\/g,
        ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
        be = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, xe = function () {
          A()
        };
      try {
        K.apply(U = Q.call(N.childNodes), N.childNodes), U[N.childNodes.length].nodeType
      } catch (e) {
        K = {
          apply: U.length ? function (e, t) {
            V.apply(e, Q.call(t))
          } : function (e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++];);
            e.length = n - 1
          }
        }
      }
      b = t.support = {}, k = t.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
      }, A = t.setDocument = function (e) {
        var t, n, i = e ? e.ownerDocument || e : N;
        return i !== _ && 9 === i.nodeType && i.documentElement ? (_ = i, L = _.documentElement, O = !k(_), (n = _.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), b.attributes = o(function (e) {
          return e.className = "i", !e.getAttribute("className")
        }), b.getElementsByTagName = o(function (e) {
          return e.appendChild(_.createComment("")), !e.getElementsByTagName("*").length
        }), b.getElementsByClassName = he.test(_.getElementsByClassName), b.getById = o(function (e) {
          return L.appendChild(e).id = j, !_.getElementsByName || !_.getElementsByName(j).length
        }), b.getById ? (x.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && O) {
            var n = t.getElementById(e);
            return n ? [n] : []
          }
        }, x.filter.ID = function (e) {
          var t = e.replace(ye, be);
          return function (e) {
            return e.getAttribute("id") === t
          }
        }) : (delete x.find.ID, x.filter.ID = function (e) {
          var t = e.replace(ye, be);
          return function (e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t
          }
        }), x.find.TAG = b.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
        } : function (e, t) {
          var n, i = [], o = 0, r = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = r[o++];)1 === n.nodeType && i.push(n);
            return i
          }
          return r
        }, x.find.CLASS = b.getElementsByClassName && function (e, t) {
            return void 0 !== t.getElementsByClassName && O ? t.getElementsByClassName(e) : void 0
          }, D = [], M = [], (b.qsa = he.test(_.querySelectorAll)) && (o(function (e) {
          L.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ee + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + j + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + j + "+*").length || M.push(".#.+[+~]")
        }), o(function (e) {
          var t = _.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
        })), (b.matchesSelector = he.test(I = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function (e) {
          b.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), D.push("!=", ie)
        }), M = M.length && new RegExp(M.join("|")), D = D.length && new RegExp(D.join("|")), t = he.test(L.compareDocumentPosition), R = t || he.test(L.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
        } : function (e, t) {
          if (t)for (; t = t.parentNode;)if (t === e)return !0;
          return !1
        }, X = t ? function (e, t) {
          if (e === t)return P = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === _ || e.ownerDocument === N && R(N, e) ? -1 : t === _ || t.ownerDocument === N && R(N, t) ? 1 : E ? Z(E, e) - Z(E, t) : 0 : 4 & n ? -1 : 1)
        } : function (e, t) {
          if (e === t)return P = !0, 0;
          var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], l = [t];
          if (!o || !r)return e === _ ? -1 : t === _ ? 1 : o ? -1 : r ? 1 : E ? Z(E, e) - Z(E, t) : 0;
          if (o === r)return s(e, t);
          for (n = e; n = n.parentNode;)a.unshift(n);
          for (n = t; n = n.parentNode;)l.unshift(n);
          for (; a[i] === l[i];)i++;
          return i ? s(a[i], l[i]) : a[i] === N ? -1 : l[i] === N ? 1 : 0
        }, _) : _
      }, t.matches = function (e, n) {
        return t(e, null, null, n)
      }, t.matchesSelector = function (e, n) {
        if ((e.ownerDocument || e) !== _ && A(e), n = n.replace(le, "='$1']"), b.matchesSelector && O && !Y[n + " "] && (!D || !D.test(n)) && (!M || !M.test(n)))try {
          var i = I.call(e, n);
          if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
        } catch (e) {
        }
        return t(n, _, null, [e]).length > 0
      }, t.contains = function (e, t) {
        return (e.ownerDocument || e) !== _ && A(e), R(e, t)
      }, t.attr = function (e, t) {
        (e.ownerDocument || e) !== _ && A(e);
        var n = x.attrHandle[t.toLowerCase()],
          i = n && B.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
        return void 0 !== i ? i : b.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }, t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, t.uniqueSort = function (e) {
        var t, n = [], i = 0, o = 0;
        if (P = !b.detectDuplicates, E = !b.sortStable && e.slice(0), e.sort(X), P) {
          for (; t = e[o++];)t === e[o] && (i = n.push(o));
          for (; i--;)e.splice(n[i], 1)
        }
        return E = null, e
      }, w = t.getText = function (e) {
        var t, n = "", i = 0, o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent)return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling)n += w(e)
          } else if (3 === o || 4 === o)return e.nodeValue
        } else for (; t = e[i++];)n += w(t);
        return n
      }, x = t.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: de,
        attrHandle: {},
        find: {},
        relative: {
          ">": {dir: "parentNode", first: !0},
          " ": {dir: "parentNode"},
          "+": {dir: "previousSibling", first: !0},
          "~": {dir: "previousSibling"}
        },
        preFilter: {
          ATTR: function (e) {
            return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          }, CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
          }, PSEUDO: function (e) {
            var t, n = !e[6] && e[2];
            return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(ye, be).toLowerCase();
            return "*" === e ? function () {
              return !0
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          }, CLASS: function (e) {
            var t = W[e + " "];
            return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function (e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
              })
          }, ATTR: function (e, n, i) {
            return function (o) {
              var r = t.attr(o, e);
              return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
            }
          }, CHILD: function (e, t, n, i, o) {
            var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
            return 1 === i && 0 === o ? function (e) {
              return !!e.parentNode
            } : function (t, n, l) {
              var c, u, d, p, f, h, m = r !== s ? "nextSibling" : "previousSibling",
                g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
              if (g) {
                if (r) {
                  for (; m;) {
                    for (p = t; p = p[m];)if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)return !1;
                    h = m = "only" === e && !h && "nextSibling"
                  }
                  return !0
                }
                if (h = [s ? g.firstChild : g.lastChild], s && y) {
                  for (p = g, d = p[j] || (p[j] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === F && c[1], b = f && c[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();)if (1 === p.nodeType && ++b && p === t) {
                    u[e] = [F, f, b];
                    break
                  }
                } else if (y && (p = t, d = p[j] || (p[j] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === F && c[1], b = f), !1 === b)for (; (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (d = p[j] || (p[j] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [F, b]), p !== t)););
                return (b -= o) === i || b % i == 0 && b / i >= 0
              }
            }
          }, PSEUDO: function (e, n) {
            var o,
              r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
            return r[j] ? r(n) : r.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
              for (var i, o = r(e, n), s = o.length; s--;)i = Z(e, o[s]), e[i] = !(t[i] = o[s])
            }) : function (e) {
              return r(e, 0, o)
            }) : r
          }
        },
        pseudos: {
          not: i(function (e) {
            var t = [], n = [], o = S(e.replace(re, "$1"));
            return o[j] ? i(function (e, t, n, i) {
              for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
            }) : function (e, i, r) {
              return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
            }
          }), has: i(function (e) {
            return function (n) {
              return t(e, n).length > 0
            }
          }), contains: i(function (e) {
            return e = e.replace(ye, be), function (t) {
              return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
            }
          }), lang: i(function (e) {
            return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, be).toLowerCase(), function (t) {
              var n;
              do {
                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1
            }
          }), target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
          }, root: function (e) {
            return e === L
          }, focus: function (e) {
            return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          }, enabled: function (e) {
            return !1 === e.disabled
          }, disabled: function (e) {
            return !0 === e.disabled
          }, checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          }, selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          }, empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
            return !0
          }, parent: function (e) {
            return !x.pseudos.empty(e)
          }, header: function (e) {
            return fe.test(e.nodeName)
          }, input: function (e) {
            return pe.test(e.nodeName)
          }, button: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          }, text: function (e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          }, first: a(function () {
            return [0]
          }), last: a(function (e, t) {
            return [t - 1]
          }), eq: a(function (e, t, n) {
            return [0 > n ? n + t : n]
          }), even: a(function (e, t) {
            for (var n = 0; t > n; n += 2)e.push(n);
            return e
          }), odd: a(function (e, t) {
            for (var n = 1; t > n; n += 2)e.push(n);
            return e
          }), lt: a(function (e, t, n) {
            for (var i = 0 > n ? n + t : n; --i >= 0;)e.push(i);
            return e
          }), gt: a(function (e, t, n) {
            for (var i = 0 > n ? n + t : n; ++i < t;)e.push(i);
            return e
          })
        }
      }, x.pseudos.nth = x.pseudos.eq;
      for (y in{
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      })x.pseudos[y] = function (e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      }(y);
      for (y in{submit: !0, reset: !0})x.pseudos[y] = function (e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }(y);
      return c.prototype = x.filters = x.pseudos, x.setFilters = new c, T = t.tokenize = function (e, n) {
        var i, o, r, s, a, l, c, u = z[e + " "];
        if (u)return n ? 0 : u.slice(0);
        for (a = e, l = [], c = x.preFilter; a;) {
          i && !(o = se.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ae.exec(a)) && (i = o.shift(), r.push({
            value: i,
            type: o[0].replace(re, " ")
          }), a = a.slice(i.length));
          for (s in x.filter)!(o = de[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
            value: i,
            type: s,
            matches: o
          }), a = a.slice(i.length));
          if (!i)break
        }
        return n ? a.length : a ? t.error(e) : z(e, l).slice(0)
      }, S = t.compile = function (e, t) {
        var n, i = [], o = [], r = Y[e + " "];
        if (!r) {
          for (t || (t = T(e)), n = t.length; n--;)r = g(t[n]), r[j] ? i.push(r) : o.push(r);
          r = Y(e, v(o, i)), r.selector = e
        }
        return r
      }, C = t.select = function (e, t, n, i) {
        var o, r, s, a, c, d = "function" == typeof e && e, p = !i && T(e = d.selector || e);
        if (n = n || [], 1 === p.length) {
          if (r = p[0] = p[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && b.getById && 9 === t.nodeType && O && x.relative[r[1].type]) {
            if (!(t = (x.find.ID(s.matches[0].replace(ye, be), t) || [])[0]))return n;
            d && (t = t.parentNode), e = e.slice(r.shift().value.length)
          }
          for (o = de.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);)if ((c = x.find[a]) && (i = c(s.matches[0].replace(ye, be), ge.test(r[0].type) && l(t.parentNode) || t))) {
            if (r.splice(o, 1), !(e = i.length && u(r)))return K.apply(n, i), n;
            break
          }
        }
        return (d || S(e, p))(i, t, !O, n, !t || ge.test(e) && l(t.parentNode) || t), n
      }, b.sortStable = j.split("").sort(X).join("") === j, b.detectDuplicates = !!P, A(), b.sortDetached = o(function (e) {
        return 1 & e.compareDocumentPosition(_.createElement("div"))
      }), o(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || r("type|href|height|width", function (e, t, n) {
        return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), b.attributes && o(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || r("value", function (e, t, n) {
        return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
      }), o(function (e) {
        return null == e.getAttribute("disabled")
      }) || r(J, function (e, t, n) {
        var i;
        return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }), t
    }(e);
    re.find = ae, re.expr = ae.selectors, re.expr[":"] = re.expr.pseudos, re.uniqueSort = re.unique = ae.uniqueSort, re.text = ae.getText, re.isXMLDoc = ae.isXML, re.contains = ae.contains;
    var le = function (e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
          if (o && re(e).is(n))break;
          i.push(e)
        }
        return i
      }, ce = function (e, t) {
        for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
      }, ue = re.expr.match.needsContext, de = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      pe = /^.[^:#\[\.,]*$/;
    re.filter = function (e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function (e) {
        return 1 === e.nodeType
      }))
    }, re.fn.extend({
      find: function (e) {
        var t, n = this.length, i = [], o = this;
        if ("string" != typeof e)return this.pushStack(re(e).filter(function () {
          for (t = 0; n > t; t++)if (re.contains(o[t], this))return !0
        }));
        for (t = 0; n > t; t++)re.find(e, o[t], i);
        return i = this.pushStack(n > 1 ? re.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
      }, filter: function (e) {
        return this.pushStack(i(this, e || [], !1))
      }, not: function (e) {
        return this.pushStack(i(this, e || [], !0))
      }, is: function (e) {
        return !!i(this, "string" == typeof e && ue.test(e) ? re(e) : e || [], !1).length
      }
    });
    var fe, he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (re.fn.init = function (e, t, n) {
      var i, o;
      if (!e)return this;
      if (n = n || fe, "string" == typeof e) {
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : he.exec(e)) || !i[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
          if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : V, !0)), de.test(i[1]) && re.isPlainObject(t))for (i in t)re.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this
        }
        return o = V.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = V, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
    }).prototype = re.fn, fe = re(V);
    var me = /^(?:parents|prev(?:Until|All))/,
      ge = {children: !0, contents: !0, next: !0, prev: !0};
    re.fn.extend({
      has: function (e) {
        var t = re(e, this), n = t.length;
        return this.filter(function () {
          for (var e = 0; n > e; e++)if (re.contains(this, t[e]))return !0
        })
      }, closest: function (e, t) {
        for (var n, i = 0, o = this.length, r = [], s = ue.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; o > i; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
          r.push(n);
          break
        }
        return this.pushStack(r.length > 1 ? re.uniqueSort(r) : r)
      }, index: function (e) {
        return e ? "string" == typeof e ? J.call(re(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      }, add: function (e, t) {
        return this.pushStack(re.uniqueSort(re.merge(this.get(), re(e, t))))
      }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), re.each({
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      }, parents: function (e) {
        return le(e, "parentNode")
      }, parentsUntil: function (e, t, n) {
        return le(e, "parentNode", n)
      }, next: function (e) {
        return o(e, "nextSibling")
      }, prev: function (e) {
        return o(e, "previousSibling")
      }, nextAll: function (e) {
        return le(e, "nextSibling")
      }, prevAll: function (e) {
        return le(e, "previousSibling")
      }, nextUntil: function (e, t, n) {
        return le(e, "nextSibling", n)
      }, prevUntil: function (e, t, n) {
        return le(e, "previousSibling", n)
      }, siblings: function (e) {
        return ce((e.parentNode || {}).firstChild, e)
      }, children: function (e) {
        return ce(e.firstChild)
      }, contents: function (e) {
        return e.contentDocument || re.merge([], e.childNodes)
      }
    }, function (e, t) {
      re.fn[e] = function (n, i) {
        var o = re.map(this, t, n);
        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = re.filter(i, o)), this.length > 1 && (ge[e] || re.uniqueSort(o), me.test(e) && o.reverse()), this.pushStack(o)
      }
    });
    var ve = /\S+/g;
    re.Callbacks = function (e) {
      e = "string" == typeof e ? r(e) : re.extend({}, e);
      var t, n, i, o, s = [], a = [], l = -1, c = function () {
        for (o = e.once, i = t = !0; a.length; l = -1)for (n = a.shift(); ++l < s.length;)!1 === s[l].apply(n[0], n[1]) && e.stopOnFalse && (l = s.length, n = !1);
        e.memory || (n = !1), t = !1, o && (s = n ? [] : "")
      }, u = {
        add: function () {
          return s && (n && !t && (l = s.length - 1, a.push(n)), function t(n) {
            re.each(n, function (n, i) {
              re.isFunction(i) ? e.unique && u.has(i) || s.push(i) : i && i.length && "string" !== re.type(i) && t(i)
            })
          }(arguments), n && !t && c()), this
        }, remove: function () {
          return re.each(arguments, function (e, t) {
            for (var n; (n = re.inArray(t, s, n)) > -1;)s.splice(n, 1), l >= n && l--
          }), this
        }, has: function (e) {
          return e ? re.inArray(e, s) > -1 : s.length > 0
        }, empty: function () {
          return s && (s = []), this
        }, disable: function () {
          return o = a = [], s = n = "", this
        }, disabled: function () {
          return !s
        }, lock: function () {
          return o = a = [], n || (s = n = ""), this
        }, locked: function () {
          return !!o
        }, fireWith: function (e, n) {
          return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
        }, fire: function () {
          return u.fireWith(this, arguments), this
        }, fired: function () {
          return !!i
        }
      };
      return u
    }, re.extend({
      Deferred: function (e) {
        var t = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]],
          n = "pending", i = {
            state: function () {
              return n
            }, always: function () {
              return o.done(arguments).fail(arguments), this
            }, then: function () {
              var e = arguments;
              return re.Deferred(function (n) {
                re.each(t, function (t, r) {
                  var s = re.isFunction(e[t]) && e[t];
                  o[r[1]](function () {
                    var e = s && s.apply(this, arguments);
                    e && re.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            }, promise: function (e) {
              return null != e ? re.extend(e, i) : i
            }
          }, o = {};
        return i.pipe = i.then, re.each(t, function (e, r) {
          var s = r[2], a = r[3];
          i[r[1]] = s.add, a && s.add(function () {
            n = a
          }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
            return o[r[0] + "With"](this === o ? i : this, arguments), this
          }, o[r[0] + "With"] = s.fireWith
        }), i.promise(o), e && e.call(o, o), o
      }, when: function (e) {
        var t, n, i, o = 0, r = K.call(arguments), s = r.length,
          a = 1 !== s || e && re.isFunction(e.promise) ? s : 0, l = 1 === a ? e : re.Deferred(),
          c = function (e, n, i) {
            return function (o) {
              n[e] = this, i[e] = arguments.length > 1 ? K.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
            }
          };
        if (s > 1)for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++)r[o] && re.isFunction(r[o].promise) ? r[o].promise().progress(c(o, n, t)).done(c(o, i, r)).fail(l.reject) : --a;
        return a || l.resolveWith(i, r), l.promise()
      }
    });
    var ye;
    re.fn.ready = function (e) {
      return re.ready.promise().done(e), this
    }, re.extend({
      isReady: !1, readyWait: 1, holdReady: function (e) {
        e ? re.readyWait++ : re.ready(!0)
      }, ready: function (e) {
        (!0 === e ? --re.readyWait : re.isReady) || (re.isReady = !0, !0 !== e && --re.readyWait > 0 || (ye.resolveWith(V, [re]), re.fn.triggerHandler && (re(V).triggerHandler("ready"), re(V).off("ready"))))
      }
    }), re.ready.promise = function (t) {
      return ye || (ye = re.Deferred(), "complete" === V.readyState || "loading" !== V.readyState && !V.documentElement.doScroll ? e.setTimeout(re.ready) : (V.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), ye.promise(t)
    }, re.ready.promise();
    var be = function (e, t, n, i, o, r, s) {
      var a = 0, l = e.length, c = null == n;
      if ("object" === re.type(n)) {
        o = !0;
        for (a in n)be(e, t, a, n[a], !0, r, s)
      } else if (void 0 !== i && (o = !0, re.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
          return c.call(re(e), n)
        })), t))for (; l > a; a++)t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }, xe = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    a.uid = 1, a.prototype = {
      register: function (e, t) {
        var n = t || {};
        return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
          value: n,
          writable: !0,
          configurable: !0
        }), e[this.expando]
      }, cache: function (e) {
        if (!xe(e))return {};
        var t = e[this.expando];
        return t || (t = {}, xe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      }, set: function (e, t, n) {
        var i, o = this.cache(e);
        if ("string" == typeof t) o[t] = n; else for (i in t)o[i] = t[i];
        return o
      }, get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
      }, access: function (e, t, n) {
        var i;
        return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, re.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
      }, remove: function (e, t) {
        var n, i, o, r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 === t) this.register(e); else {
            re.isArray(t) ? i = t.concat(t.map(re.camelCase)) : (o = re.camelCase(t), t in r ? i = [t, o] : (i = o, i = i in r ? [i] : i.match(ve) || [])), n = i.length;
            for (; n--;)delete r[i[n]]
          }
          (void 0 === t || re.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      }, hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !re.isEmptyObject(t)
      }
    };
    var we = new a, ke = new a, Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Se = /[A-Z]/g;
    re.extend({
      hasData: function (e) {
        return ke.hasData(e) || we.hasData(e)
      }, data: function (e, t, n) {
        return ke.access(e, t, n)
      }, removeData: function (e, t) {
        ke.remove(e, t)
      }, _data: function (e, t, n) {
        return we.access(e, t, n)
      }, _removeData: function (e, t) {
        we.remove(e, t)
      }
    }), re.fn.extend({
      data: function (e, t) {
        var n, i, o, r = this[0], s = r && r.attributes;
        if (void 0 === e) {
          if (this.length && (o = ke.get(r), 1 === r.nodeType && !we.get(r, "hasDataAttrs"))) {
            for (n = s.length; n--;)s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(r, i, o[i])));
            we.set(r, "hasDataAttrs", !0)
          }
          return o
        }
        return "object" == typeof e ? this.each(function () {
          ke.set(this, e)
        }) : be(this, function (t) {
          var n, i;
          if (r && void 0 === t) {
            if (void 0 !== (n = ke.get(r, e) || ke.get(r, e.replace(Se, "-$&").toLowerCase())))return n;
            if (i = re.camelCase(e), void 0 !== (n = ke.get(r, i)))return n;
            if (void 0 !== (n = l(r, i, void 0)))return n
          } else i = re.camelCase(e), this.each(function () {
            var n = ke.get(this, i);
            ke.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && ke.set(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      }, removeData: function (e) {
        return this.each(function () {
          ke.remove(this, e)
        })
      }
    }), re.extend({
      queue: function (e, t, n) {
        var i;
        return e ? (t = (t || "fx") + "queue", i = we.get(e, t), n && (!i || re.isArray(n) ? i = we.access(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
      }, dequeue: function (e, t) {
        t = t || "fx";
        var n = re.queue(e, t), i = n.length, o = n.shift(), r = re._queueHooks(e, t),
          s = function () {
            re.dequeue(e, t)
          };
        "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
      }, _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return we.get(e, n) || we.access(e, n, {
            empty: re.Callbacks("once memory").add(function () {
              we.remove(e, [t + "queue", n])
            })
          })
      }
    }), re.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = re.queue(this, e, t);
          re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
        })
      }, dequeue: function (e) {
        return this.each(function () {
          re.dequeue(this, e)
        })
      }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
      }, promise: function (e, t) {
        var n, i = 1, o = re.Deferred(), r = this, s = this.length, a = function () {
          --i || o.resolveWith(r, [r])
        };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = we.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
        return a(), o.promise(t)
      }
    });
    var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      $e = new RegExp("^(?:([+-])=|)(" + Ce + ")([a-z%]*)$", "i"),
      Ee = ["Top", "Right", "Bottom", "Left"], Pe = function (e, t) {
        return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
      }, Ae = /^(?:checkbox|radio)$/i, _e = /<([\w:-]+)/, Le = /^$|\/(?:java|ecma)script/i, Oe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    Oe.optgroup = Oe.option, Oe.tbody = Oe.tfoot = Oe.colgroup = Oe.caption = Oe.thead, Oe.th = Oe.td;
    var Me = /<|&#?\w+;/;
    !function () {
      var e = V.createDocumentFragment(), t = e.appendChild(V.createElement("div")),
        n = V.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var De = /^key/, Ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Re = /^([^.]*)(?:\.(.+)|)/;
    re.event = {
      global: {},
      add: function (e, t, n, i, o) {
        var r, s, a, l, c, u, d, p, f, h, m, g = we.get(e);
        if (g)for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = re.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
          return void 0 !== re && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0
        }), t = (t || "").match(ve) || [""], c = t.length; c--;)a = Re.exec(t[c]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f && (d = re.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = re.event.special[f] || {}, u = re.extend({
          type: f,
          origType: m,
          data: i,
          handler: n,
          guid: n.guid,
          selector: o,
          needsContext: o && re.expr.match.needsContext.test(o),
          namespace: h.join(".")
        }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), re.event.global[f] = !0)
      },
      remove: function (e, t, n, i, o) {
        var r, s, a, l, c, u, d, p, f, h, m, g = we.hasData(e) && we.get(e);
        if (g && (l = g.events)) {
          for (t = (t || "").match(ve) || [""], c = t.length; c--;)if (a = Re.exec(t[c]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
            for (d = re.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;)u = p[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
            s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || re.removeEvent(e, f, g.handle), delete l[f])
          } else for (f in l)re.event.remove(e, f + t[c], n, i, !0);
          re.isEmptyObject(l) && we.remove(e, "handle events")
        }
      },
      dispatch: function (e) {
        e = re.event.fix(e);
        var t, n, i, o, r, s = [], a = K.call(arguments),
          l = (we.get(this, "events") || {})[e.type] || [], c = re.event.special[e.type] || {};
        if (a[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
          for (s = re.event.handlers.call(this, e, l), t = 0; (o = s[t++]) && !e.isPropagationStopped();)for (e.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();)e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (i = ((re.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
      },
      handlers: function (e, t) {
        var n, i, o, r, s = [], a = t.delegateCount, l = e.target;
        if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
          for (i = [], n = 0; a > n; n++)r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? re(o, this).index(l) > -1 : re.find(o, this, null, [l]).length), i[o] && i.push(r);
          i.length && s.push({elem: l, handlers: i})
        }
        return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "), filter: function (e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function (e, t) {
          var n, i, o, r = t.button;
          return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || V, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
        }
      },
      fix: function (e) {
        if (e[re.expando])return e;
        var t, n, i, o = e.type, r = e, s = this.fixHooks[o];
        for (s || (this.fixHooks[o] = s = Ie.test(o) ? this.mouseHooks : De.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new re.Event(r), t = i.length; t--;)n = i[t], e[n] = r[n];
        return e.target || (e.target = V), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
      },
      special: {
        load: {noBubble: !0}, focus: {
          trigger: function () {
            return this !== m() && this.focus ? (this.focus(), !1) : void 0
          }, delegateType: "focusin"
        }, blur: {
          trigger: function () {
            return this === m() && this.blur ? (this.blur(), !1) : void 0
          }, delegateType: "focusout"
        }, click: {
          trigger: function () {
            return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : void 0
          }, _default: function (e) {
            return re.nodeName(e.target, "a")
          }
        }, beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, re.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, re.Event = function (e, t) {
      return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? f : h) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
    }, re.Event.prototype = {
      constructor: re.Event,
      isDefaultPrevented: h,
      isPropagationStopped: h,
      isImmediatePropagationStopped: h,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = f, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = f, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = f, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, re.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      re.event.special[e] = {
        delegateType: t, bindType: t, handle: function (e) {
          var n, i = this, o = e.relatedTarget, r = e.handleObj;
          return o && (o === i || re.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), re.fn.extend({
      on: function (e, t, n, i) {
        return g(this, e, t, n, i)
      }, one: function (e, t, n, i) {
        return g(this, e, t, n, i, 1)
      }, off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
          for (o in e)this.off(o, t, e[o]);
          return this
        }
        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = h), this.each(function () {
          re.event.remove(this, e, n, t)
        })
      }
    });
    var je = /<script|<style|<link/i, Ne = /checked\s*(?:[^=]|=\s*.checked.)/i, Fe = /^true\/(.*)/,
      He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    re.extend({
      htmlPrefilter: function (e) {
        return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, "<$1></$2>")
      }, clone: function (e, t, n) {
        var i, o, r, s, a = e.cloneNode(!0), l = re.contains(e.ownerDocument, e);
        if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))for (s = u(a), r = u(e), i = 0, o = r.length; o > i; i++)w(r[i], s[i]);
        if (t)if (n)for (r = r || u(e), s = s || u(a), i = 0, o = r.length; o > i; i++)x(r[i], s[i]); else x(e, a);
        return s = u(a, "script"), s.length > 0 && d(s, !l && u(e, "script")), a
      }, cleanData: function (e) {
        for (var t, n, i, o = re.event.special, r = 0; void 0 !== (n = e[r]); r++)if (xe(n)) {
          if (t = n[we.expando]) {
            if (t.events)for (i in t.events)o[i] ? re.event.remove(n, i) : re.removeEvent(n, i, t.handle);
            n[we.expando] = void 0
          }
          n[ke.expando] && (n[ke.expando] = void 0)
        }
      }
    }), re.fn.extend({
      domManip: k, detach: function (e) {
        return T(this, e, !0)
      }, remove: function (e) {
        return T(this, e)
      }, text: function (e) {
        return be(this, function (e) {
          return void 0 === e ? re.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      }, append: function () {
        return k(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            v(this, e).appendChild(e)
          }
        })
      }, prepend: function () {
        return k(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = v(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      }, before: function () {
        return k(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      }, after: function () {
        return k(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      }, empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (re.cleanData(u(e, !1)), e.textContent = "");
        return this
      }, clone: function (e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return re.clone(this, e, t)
        })
      }, html: function (e) {
        return be(this, function (e) {
          var t = this[0] || {}, n = 0, i = this.length;
          if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
          if ("string" == typeof e && !je.test(e) && !Oe[(_e.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = re.htmlPrefilter(e);
            try {
              for (; i > n; n++)t = this[n] || {}, 1 === t.nodeType && (re.cleanData(u(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {
            }
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      }, replaceWith: function () {
        var e = [];
        return k(this, arguments, function (t) {
          var n = this.parentNode;
          re.inArray(this, e) < 0 && (re.cleanData(u(this)), n && n.replaceChild(t, this))
        }, e)
      }
    }), re.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      re.fn[e] = function (e) {
        for (var n, i = [], o = re(e), r = o.length - 1, s = 0; r >= s; s++)n = s === r ? this : this.clone(!0), re(o[s])[t](n), Z.apply(i, n.get());
        return this.pushStack(i)
      }
    });
    var We, ze = {HTML: "block", BODY: "block"}, Ye = /^margin/,
      Xe = new RegExp("^(" + Ce + ")(?!px)[a-z%]+$", "i"), qe = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
      }, Be = function (e, t, n, i) {
        var o, r, s = {};
        for (r in t)s[r] = e.style[r], e.style[r] = t[r];
        o = n.apply(e, i || []);
        for (r in t)e.style[r] = s[r];
        return o
      }, Ue = V.documentElement;
    !function () {
      function t() {
        a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ue.appendChild(s);
        var t = e.getComputedStyle(a);
        n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Ue.removeChild(s)
      }

      var n, i, o, r, s = V.createElement("div"), a = V.createElement("div");
      a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), re.extend(ie, {
        pixelPosition: function () {
          return t(), n
        }, boxSizingReliable: function () {
          return null == i && t(), i
        }, pixelMarginRight: function () {
          return null == i && t(), o
        }, reliableMarginLeft: function () {
          return null == i && t(), r
        }, reliableMarginRight: function () {
          var t, n = a.appendChild(V.createElement("div"));
          return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Ue.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Ue.removeChild(s), a.removeChild(n), t
        }
      }))
    }();
    var Ge = /^(none|table(?!-c[ea]).+)/,
      Ve = {position: "absolute", visibility: "hidden", display: "block"},
      Ke = {letterSpacing: "0", fontWeight: "400"}, Qe = ["Webkit", "O", "Moz", "ms"],
      Ze = V.createElement("div").style;
    re.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = $(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {float: "cssFloat"},
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o, r, s, a = re.camelCase(t), l = e.style;
          return t = re.cssProps[a] || (re.cssProps[a] = P(a) || a), s = re.cssHooks[t] || re.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : (r = typeof n, "string" === r && (o = $e.exec(n)) && o[1] && (n = c(e, t, o), r = "number"), void(null != n && n === n && ("number" === r && (n += o && o[3] || (re.cssNumber[a] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
        }
      },
      css: function (e, t, n, i) {
        var o, r, s, a = re.camelCase(t);
        return t = re.cssProps[a] || (re.cssProps[a] = P(a) || a), s = re.cssHooks[t] || re.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = $(e, t, i)), "normal" === o && t in Ke && (o = Ke[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
      }
    }), re.each(["height", "width"], function (e, t) {
      re.cssHooks[t] = {
        get: function (e, n, i) {
          return n ? Ge.test(re.css(e, "display")) && 0 === e.offsetWidth ? Be(e, Ve, function () {
            return L(e, t, i)
          }) : L(e, t, i) : void 0
        }, set: function (e, n, i) {
          var o, r = i && qe(e),
            s = i && _(e, t, i, "border-box" === re.css(e, "boxSizing", !1, r), r);
          return s && (o = $e.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = re.css(e, t)), A(e, n, s)
        }
      }
    }), re.cssHooks.marginLeft = E(ie.reliableMarginLeft, function (e, t) {
      return t ? (parseFloat($(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {marginLeft: 0}, function () {
          return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), re.cssHooks.marginRight = E(ie.reliableMarginRight, function (e, t) {
      return t ? Be(e, {display: "inline-block"}, $, [e, "marginRight"]) : void 0
    }), re.each({margin: "", padding: "", border: "Width"}, function (e, t) {
      re.cssHooks[e + t] = {
        expand: function (n) {
          for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)o[e + Ee[i] + t] = r[i] || r[i - 2] || r[0];
          return o
        }
      }, Ye.test(e) || (re.cssHooks[e + t].set = A)
    }), re.fn.extend({
      css: function (e, t) {
        return be(this, function (e, t, n) {
          var i, o, r = {}, s = 0;
          if (re.isArray(t)) {
            for (i = qe(e), o = t.length; o > s; s++)r[t[s]] = re.css(e, t[s], !1, i);
            return r
          }
          return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
        }, e, t, arguments.length > 1)
      }, show: function () {
        return O(this, !0)
      }, hide: function () {
        return O(this)
      }, toggle: function (e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          Pe(this) ? re(this).show() : re(this).hide()
        })
      }
    }), re.Tween = M, M.prototype = {
      constructor: M, init: function (e, t, n, i, o, r) {
        this.elem = e, this.prop = n, this.easing = o || re.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (re.cssNumber[n] ? "" : "px")
      }, cur: function () {
        var e = M.propHooks[this.prop];
        return e && e.get ? e.get(this) : M.propHooks._default.get(this)
      }, run: function (e) {
        var t, n = M.propHooks[this.prop];
        return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
      }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
        }, set: function (e) {
          re.fx.step[e.prop] ? re.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[re.cssProps[e.prop]] && !re.cssHooks[e.prop] ? e.elem[e.prop] = e.now : re.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, re.easing = {
      linear: function (e) {
        return e
      }, swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2
      }, _default: "swing"
    }, re.fx = M.prototype.init, re.fx.step = {};
    var Je, et, tt = /^(?:toggle|show|hide)$/, nt = /queueHooks$/;
    re.Animation = re.extend(F, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return c(n.elem, e, $e.exec(t), n), n
        }]
      }, tweener: function (e, t) {
        re.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(ve);
        for (var n, i = 0, o = e.length; o > i; i++)n = e[i], F.tweeners[n] = F.tweeners[n] || [], F.tweeners[n].unshift(t)
      }, prefilters: [j], prefilter: function (e, t) {
        t ? F.prefilters.unshift(e) : F.prefilters.push(e)
      }
    }), re.speed = function (e, t, n) {
      var i = e && "object" == typeof e ? re.extend({}, e) : {
        complete: n || !n && t || re.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !re.isFunction(t) && t
      };
      return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
      }, i
    }, re.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(Pe).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
      }, animate: function (e, t, n, i) {
        var o = re.isEmptyObject(e), r = re.speed(t, n, i), s = function () {
          var t = F(this, re.extend({}, e), r);
          (o || we.get(this, "finish")) && t.stop(!0)
        };
        return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
      }, stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
          var t = !0, o = null != e && e + "queueHooks", r = re.timers, s = we.get(this);
          if (o) s[o] && s[o].stop && i(s[o]); else for (o in s)s[o] && s[o].stop && nt.test(o) && i(s[o]);
          for (o = r.length; o--;)r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
          !t && n || re.dequeue(this, e)
        })
      }, finish: function (e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t, n = we.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = re.timers,
            s = i ? i.length : 0;
          for (n.finish = !0, re.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;)r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
          for (t = 0; s > t; t++)i[t] && i[t].finish && i[t].finish.call(this);
          delete n.finish
        })
      }
    }), re.each(["toggle", "show", "hide"], function (e, t) {
      var n = re.fn[t];
      re.fn[t] = function (e, i, o) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, i, o)
      }
    }), re.each({
      slideDown: I("show"),
      slideUp: I("hide"),
      slideToggle: I("toggle"),
      fadeIn: {opacity: "show"},
      fadeOut: {opacity: "hide"},
      fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
      re.fn[e] = function (e, n, i) {
        return this.animate(t, e, n, i)
      }
    }), re.timers = [], re.fx.tick = function () {
      var e, t = 0, n = re.timers;
      for (Je = re.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || re.fx.stop(), Je = void 0
    }, re.fx.timer = function (e) {
      re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
    }, re.fx.interval = 13, re.fx.start = function () {
      et || (et = e.setInterval(re.fx.tick, re.fx.interval))
    }, re.fx.stop = function () {
      e.clearInterval(et), et = null
    }, re.fx.speeds = {slow: 600, fast: 200, _default: 400}, re.fn.delay = function (t, n) {
      return t = re.fx ? re.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
        var o = e.setTimeout(n, t);
        i.stop = function () {
          e.clearTimeout(o)
        }
      })
    }, function () {
      var e = V.createElement("input"), t = V.createElement("select"),
        n = t.appendChild(V.createElement("option"));
      e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = V.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
    }();
    var it, ot = re.expr.attrHandle;
    re.fn.extend({
      attr: function (e, t) {
        return be(this, re.attr, e, t, arguments.length > 1)
      }, removeAttr: function (e) {
        return this.each(function () {
          re.removeAttr(this, e)
        })
      }
    }), re.extend({
      attr: function (e, t, n) {
        var i, o, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)return void 0 === e.getAttribute ? re.prop(e, t, n) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(), o = re.attrHooks[t] || (re.expr.match.bool.test(t) ? it : void 0)), void 0 !== n ? null === n ? void re.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = re.find.attr(e, t), null == i ? void 0 : i))
      }, attrHooks: {
        type: {
          set: function (e, t) {
            if (!ie.radioValue && "radio" === t && re.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      }, removeAttr: function (e, t) {
        var n, i, o = 0, r = t && t.match(ve);
        if (r && 1 === e.nodeType)for (; n = r[o++];)i = re.propFix[n] || n, re.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
      }
    }), it = {
      set: function (e, t, n) {
        return !1 === t ? re.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ot[t] || re.find.attr;
      ot[t] = function (e, t, i) {
        var o, r;
        return i || (r = ot[t], ot[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, ot[t] = r), o
      }
    });
    var rt = /^(?:input|select|textarea|button)$/i, st = /^(?:a|area)$/i;
    re.fn.extend({
      prop: function (e, t) {
        return be(this, re.prop, e, t, arguments.length > 1)
      }, removeProp: function (e) {
        return this.each(function () {
          delete this[re.propFix[e] || e]
        })
      }
    }), re.extend({
      prop: function (e, t, n) {
        var i, o, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)return 1 === r && re.isXMLDoc(e) || (t = re.propFix[t] || t, o = re.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
      }, propHooks: {
        tabIndex: {
          get: function (e) {
            var t = re.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : rt.test(e.nodeName) || st.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      }, propFix: {for: "htmlFor", class: "className"}
    }), ie.optSelected || (re.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      }, set: function (e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      re.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    re.fn.extend({
      addClass: function (e) {
        var t, n, i, o, r, s, a, l = 0;
        if (re.isFunction(e))return this.each(function (t) {
          re(this).addClass(e.call(this, t, H(this)))
        });
        if ("string" == typeof e && e)for (t = e.match(ve) || []; n = this[l++];)if (o = H(n), i = 1 === n.nodeType && (" " + o + " ").replace(at, " ")) {
          for (s = 0; r = t[s++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
          a = re.trim(i), o !== a && n.setAttribute("class", a)
        }
        return this
      }, removeClass: function (e) {
        var t, n, i, o, r, s, a, l = 0;
        if (re.isFunction(e))return this.each(function (t) {
          re(this).removeClass(e.call(this, t, H(this)))
        });
        if (!arguments.length)return this.attr("class", "");
        if ("string" == typeof e && e)for (t = e.match(ve) || []; n = this[l++];)if (o = H(n), i = 1 === n.nodeType && (" " + o + " ").replace(at, " ")) {
          for (s = 0; r = t[s++];)for (; i.indexOf(" " + r + " ") > -1;)i = i.replace(" " + r + " ", " ");
          a = re.trim(i), o !== a && n.setAttribute("class", a)
        }
        return this
      }, toggleClass: function (e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function (n) {
          re(this).toggleClass(e.call(this, n, H(this), t), t)
        }) : this.each(function () {
          var t, i, o, r;
          if ("string" === n)for (i = 0, o = re(this), r = e.match(ve) || []; t = r[i++];)o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || (t = H(this), t && we.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : we.get(this, "__className__") || ""))
        })
      }, hasClass: function (e) {
        var t, n, i = 0;
        for (t = " " + e + " "; n = this[i++];)if (1 === n.nodeType && (" " + H(n) + " ").replace(at, " ").indexOf(t) > -1)return !0;
        return !1
      }
    });
    re.fn.extend({
      val: function (e) {
        var t, n, i, o = this[0];
        return arguments.length ? (i = re.isFunction(e), this.each(function (n) {
          var o;
          1 === this.nodeType && (o = i ? e.call(this, n, re(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function (e) {
              return null == e ? "" : e + ""
            })), (t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
        })) : o ? (t = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n)) : void 0
      }
    }), re.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = re.find.attr(e, "value");
            return null != t ? t : re.trim(re.text(e)).replace(/[\x20\t\r\n\f]+/g, " ")
          }
        }, select: {
          get: function (e) {
            for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)if (n = i[l], (n.selected || l === o) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
              if (t = re(n).val(), r)return t;
              s.push(t)
            }
            return s
          }, set: function (e, t) {
            for (var n, i, o = e.options, r = re.makeArray(t), s = o.length; s--;)i = o[s], (i.selected = re.inArray(re.valHooks.option.get(i), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r
          }
        }
      }
    }), re.each(["radio", "checkbox"], function () {
      re.valHooks[this] = {
        set: function (e, t) {
          return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) > -1 : void 0
        }
      }, ie.checkOn || (re.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    });
    var lt = /^(?:focusinfocus|focusoutblur)$/;
    re.extend(re.event, {
      trigger: function (t, n, i, o) {
        var r, s, a, l, c, u, d, p = [i || V], f = ne.call(t, "type") ? t.type : t,
          h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
        if (s = a = i = i || V, 3 !== i.nodeType && 8 !== i.nodeType && !lt.test(f + re.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[re.expando] ? t : new re.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), d = re.event.special[f] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
          if (!o && !d.noBubble && !re.isWindow(i)) {
            for (l = d.delegateType || f, lt.test(l + f) || (s = s.parentNode); s; s = s.parentNode)p.push(s), a = s;
            a === (i.ownerDocument || V) && p.push(a.defaultView || a.parentWindow || e)
          }
          for (r = 0; (s = p[r++]) && !t.isPropagationStopped();)t.type = r > 1 ? l : d.bindType || f, u = (we.get(s, "events") || {})[t.type] && we.get(s, "handle"), u && u.apply(s, n), (u = c && s[c]) && u.apply && xe(s) && (t.result = u.apply(s, n), !1 === t.result && t.preventDefault());
          return t.type = f, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), n) || !xe(i) || c && re.isFunction(i[f]) && !re.isWindow(i) && (a = i[c], a && (i[c] = null), re.event.triggered = f, i[f](), re.event.triggered = void 0, a && (i[c] = a)), t.result
        }
      }, simulate: function (e, t, n) {
        var i = re.extend(new re.Event, n, {type: e, isSimulated: !0});
        re.event.trigger(i, null, t)
      }
    }), re.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          re.event.trigger(e, t, this)
        })
      }, triggerHandler: function (e, t) {
        var n = this[0];
        return n ? re.event.trigger(e, t, n, !0) : void 0
      }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
      re.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }), re.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), ie.focusin = "onfocusin" in e, ie.focusin || re.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var n = function (e) {
        re.event.simulate(t, e.target, re.event.fix(e))
      };
      re.event.special[t] = {
        setup: function () {
          var i = this.ownerDocument || this, o = we.access(i, t);
          o || i.addEventListener(e, n, !0), we.access(i, t, (o || 0) + 1)
        }, teardown: function () {
          var i = this.ownerDocument || this, o = we.access(i, t) - 1;
          o ? we.access(i, t, o) : (i.removeEventListener(e, n, !0), we.remove(i, t))
        }
      }
    });
    var ct = e.location, ut = re.now(), dt = /\?/;
    re.parseJSON = function (e) {
      return JSON.parse(e + "")
    }, re.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t)return null;
      try {
        n = (new e.DOMParser).parseFromString(t, "text/xml")
      } catch (e) {
        n = void 0
      }
      return n && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
    };
    var pt = /([?&])_=[^&]*/, ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, mt = /^(?:GET|HEAD)$/,
      gt = {}, vt = {}, yt = "*/".concat("*"), bt = V.createElement("a");
    bt.href = ct.href, re.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ct.href,
        type: "GET",
        isLocal: ht.test(ct.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": yt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
        responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
        converters: {
          "* text": String,
          "text html": !0,
          "text json": re.parseJSON,
          "text xml": re.parseXML
        },
        flatOptions: {url: !0, context: !0}
      },
      ajaxSetup: function (e, t) {
        return t ? Y(Y(e, re.ajaxSettings), t) : Y(re.ajaxSettings, e)
      },
      ajaxPrefilter: W(gt),
      ajaxTransport: W(vt),
      ajax: function (t, n) {
        function i(t, n, i, a) {
          var c, d, y, b, w, T = n;
          2 !== x && (x = 2, l && e.clearTimeout(l), o = void 0, s = a || "", k.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, i && (b = X(p, k, i)), b = q(p, b, k, c), c ? (p.ifModified && (w = k.getResponseHeader("Last-Modified"), w && (re.lastModified[r] = w), (w = k.getResponseHeader("etag")) && (re.etag[r] = w)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, y = b.error, c = !y)) : (y = T, !t && T || (T = "error", 0 > t && (t = 0))), k.status = t, k.statusText = (n || T) + "", c ? m.resolveWith(f, [d, T, k]) : m.rejectWith(f, [k, T, y]), k.statusCode(v), v = void 0, u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [k, p, c ? d : y]), g.fireWith(f, [k, T]), u && (h.trigger("ajaxComplete", [k, p]), --re.active || re.event.trigger("ajaxStop")))
        }

        "object" == typeof t && (n = t, t = void 0), n = n || {};
        var o, r, s, a, l, c, u, d, p = re.ajaxSetup({}, n), f = p.context || p,
          h = p.context && (f.nodeType || f.jquery) ? re(f) : re.event, m = re.Deferred(),
          g = re.Callbacks("once memory"), v = p.statusCode || {}, y = {}, b = {}, x = 0,
          w = "canceled", k = {
            readyState: 0, getResponseHeader: function (e) {
              var t;
              if (2 === x) {
                if (!a)for (a = {}; t = ft.exec(s);)a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()]
              }
              return null == t ? null : t
            }, getAllResponseHeaders: function () {
              return 2 === x ? s : null
            }, setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return x || (e = b[n] = b[n] || e, y[e] = t), this
            }, overrideMimeType: function (e) {
              return x || (p.mimeType = e), this
            }, statusCode: function (e) {
              var t;
              if (e)if (2 > x)for (t in e)v[t] = [v[t], e[t]]; else k.always(e[k.status]);
              return this
            }, abort: function (e) {
              var t = e || w;
              return o && o.abort(t), i(0, t), this
            }
          };
        if (m.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, p.url = ((t || p.url || ct.href) + "").replace(/#.*$/, "").replace(/^\/\//, ct.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = re.trim(p.dataType || "*").toLowerCase().match(ve) || [""], null == p.crossDomain) {
          c = V.createElement("a");
          try {
            c.href = p.url, c.href = c.href, p.crossDomain = bt.protocol + "//" + bt.host != c.protocol + "//" + c.host
          } catch (e) {
            p.crossDomain = !0
          }
        }
        if (p.data && p.processData && "string" != typeof p.data && (p.data = re.param(p.data, p.traditional)), z(gt, p, n, k), 2 === x)return k;
        u = re.event && p.global, u && 0 == re.active++ && re.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !mt.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (dt.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = pt.test(r) ? r.replace(pt, "$1_=" + ut++) : r + (dt.test(r) ? "&" : "?") + "_=" + ut++)), p.ifModified && (re.lastModified[r] && k.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && k.setRequestHeader("If-None-Match", re.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : p.accepts["*"]);
        for (d in p.headers)k.setRequestHeader(d, p.headers[d]);
        if (p.beforeSend && (!1 === p.beforeSend.call(f, k, p) || 2 === x))return k.abort();
        w = "abort";
        for (d in{success: 1, error: 1, complete: 1})k[d](p[d]);
        if (o = z(vt, p, n, k)) {
          if (k.readyState = 1, u && h.trigger("ajaxSend", [k, p]), 2 === x)return k;
          p.async && p.timeout > 0 && (l = e.setTimeout(function () {
            k.abort("timeout")
          }, p.timeout));
          try {
            x = 1, o.send(y, i)
          } catch (e) {
            if (!(2 > x))throw e;
            i(-1, e)
          }
        } else i(-1, "No Transport");
        return k
      },
      getJSON: function (e, t, n) {
        return re.get(e, t, n, "json")
      },
      getScript: function (e, t) {
        return re.get(e, void 0, t, "script")
      }
    }), re.each(["get", "post"], function (e, t) {
      re[t] = function (e, n, i, o) {
        return re.isFunction(n) && (o = o || i, i = n, n = void 0), re.ajax(re.extend({
          url: e,
          type: t,
          dataType: o,
          data: n,
          success: i
        }, re.isPlainObject(e) && e))
      }
    }), re._evalUrl = function (e) {
      return re.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    }, re.fn.extend({
      wrapAll: function (e) {
        var t;
        return re.isFunction(e) ? this.each(function (t) {
          re(this).wrapAll(e.call(this, t))
        }) : (this[0] && (t = re(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;)e = e.firstElementChild;
          return e
        }).append(this)), this)
      }, wrapInner: function (e) {
        return re.isFunction(e) ? this.each(function (t) {
          re(this).wrapInner(e.call(this, t))
        }) : this.each(function () {
          var t = re(this), n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      }, wrap: function (e) {
        var t = re.isFunction(e);
        return this.each(function (n) {
          re(this).wrapAll(t ? e.call(this, n) : e)
        })
      }, unwrap: function () {
        return this.parent().each(function () {
          re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
        }).end()
      }
    }), re.expr.filters.hidden = function (e) {
      return !re.expr.filters.visible(e)
    }, re.expr.filters.visible = function (e) {
      return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var xt = /\[\]$/, wt = /^(?:submit|button|image|reset|file)$/i,
      kt = /^(?:input|select|textarea|keygen)/i;
    re.param = function (e, t) {
      var n, i = [], o = function (e, t) {
        t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
      if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function () {
        o(this.name, this.value)
      }); else for (n in e)B(n, e[n], t, o);
      return i.join("&").replace(/%20/g, "+")
    }, re.fn.extend({
      serialize: function () {
        return re.param(this.serializeArray())
      }, serializeArray: function () {
        return this.map(function () {
          var e = re.prop(this, "elements");
          return e ? re.makeArray(e) : this
        }).filter(function () {
          var e = this.type;
          return this.name && !re(this).is(":disabled") && kt.test(this.nodeName) && !wt.test(e) && (this.checked || !Ae.test(e))
        }).map(function (e, t) {
          var n = re(this).val();
          return null == n ? null : re.isArray(n) ? re.map(n, function (e) {
            return {name: t.name, value: e.replace(/\r?\n/g, "\r\n")}
          }) : {name: t.name, value: n.replace(/\r?\n/g, "\r\n")}
        }).get()
      }
    }), re.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest
      } catch (e) {
      }
    };
    var Tt = {0: 200, 1223: 204}, St = re.ajaxSettings.xhr();
    ie.cors = !!St && "withCredentials" in St, ie.ajax = St = !!St, re.ajaxTransport(function (t) {
      var n, i;
      return ie.cors || St && !t.crossDomain ? {
        send: function (o, r) {
          var s, a = t.xhr();
          if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (s in t.xhrFields)a[s] = t.xhrFields[s];
          t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
          for (s in o)a.setRequestHeader(s, o[s]);
          n = function (e) {
            return function () {
              n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Tt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
            }
          }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
            4 === a.readyState && e.setTimeout(function () {
              n && i()
            })
          }, n = n("abort");
          try {
            a.send(t.hasContent && t.data || null)
          } catch (e) {
            if (n)throw e
          }
        }, abort: function () {
          n && n()
        }
      } : void 0
    }), re.ajaxSetup({
      accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
      contents: {script: /\b(?:java|ecma)script\b/},
      converters: {
        "text script": function (e) {
          return re.globalEval(e), e
        }
      }
    }), re.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), re.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, o) {
            t = re("<script>").prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", n = function (e) {
              t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
            }), V.head.appendChild(t[0])
          }, abort: function () {
            n && n()
          }
        }
      }
    });
    var Ct = [], $t = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
      jsonp: "callback", jsonpCallback: function () {
        var e = Ct.pop() || re.expando + "_" + ut++;
        return this[e] = !0, e
      }
    }), re.ajaxPrefilter("json jsonp", function (t, n, i) {
      var o, r, s,
        a = !1 !== t.jsonp && ($t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(t.data) && "data");
      return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace($t, "$1" + o) : !1 !== t.jsonp && (t.url += (dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
        return s || re.error(o + " was not called"), s[0]
      }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
        s = arguments
      }, i.always(function () {
        void 0 === r ? re(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Ct.push(o)), s && re.isFunction(r) && r(s[0]), s = r = void 0
      }), "script") : void 0
    }), re.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e)return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || V;
      var i = de.exec(e), o = !n && [];
      return i ? [t.createElement(i[1])] : (i = p([e], t, o), o && o.length && re(o).remove(), re.merge([], i.childNodes))
    };
    var Et = re.fn.load;
    re.fn.load = function (e, t, n) {
      if ("string" != typeof e && Et)return Et.apply(this, arguments);
      var i, o, r, s = this, a = e.indexOf(" ");
      return a > -1 && (i = re.trim(e.slice(a)), e = e.slice(0, a)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && re.ajax({
        url: e,
        type: o || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        r = arguments, s.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
      }).always(n && function (e, t) {
          s.each(function () {
            n.apply(this, r || [e.responseText, t, e])
          })
        }), this
    }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      re.fn[t] = function (e) {
        return this.on(t, e)
      }
    }), re.expr.filters.animated = function (e) {
      return re.grep(re.timers, function (t) {
        return e === t.elem
      }).length
    }, re.offset = {
      setOffset: function (e, t, n) {
        var i, o, r, s, a, l, c, u = re.css(e, "position"), d = re(e), p = {};
        "static" === u && (e.style.position = "relative"), a = d.offset(), r = re.css(e, "top"), l = re.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, re.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
      }
    }, re.fn.extend({
      offset: function (e) {
        if (arguments.length)return void 0 === e ? this : this.each(function (t) {
          re.offset.setOffset(this, e, t)
        });
        var t, n, i = this[0], o = {top: 0, left: 0}, r = i && i.ownerDocument;
        return r ? (t = r.documentElement, re.contains(t, i) ? (o = i.getBoundingClientRect(), n = U(r), {
          top: o.top + n.pageYOffset - t.clientTop,
          left: o.left + n.pageXOffset - t.clientLeft
        }) : o) : void 0
      }, position: function () {
        if (this[0]) {
          var e, t, n = this[0], i = {top: 0, left: 0};
          return "fixed" === re.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (i = e.offset()), i.top += re.css(e[0], "borderTopWidth", !0),
            i.left += re.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - i.top - re.css(n, "marginTop", !0),
            left: t.left - i.left - re.css(n, "marginLeft", !0)
          }
        }
      }, offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === re.css(e, "position");)e = e.offsetParent;
          return e || Ue
        })
      }
    }), re.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
      var n = "pageYOffset" === t;
      re.fn[e] = function (i) {
        return be(this, function (e, i, o) {
          var r = U(e);
          return void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
        }, e, i, arguments.length)
      }
    }), re.each(["top", "left"], function (e, t) {
      re.cssHooks[t] = E(ie.pixelPosition, function (e, n) {
        return n ? (n = $(e, t), Xe.test(n) ? re(e).position()[t] + "px" : n) : void 0
      })
    }), re.each({Height: "height", Width: "width"}, function (e, t) {
      re.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
        re.fn[i] = function (i, o) {
          var r = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");
          return be(this, function (t, n, i) {
            var o;
            return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? re.css(t, n, s) : re.style(t, n, i, s)
          }, t, r ? i : void 0, r, null)
        }
      })
    }), re.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      }, unbind: function (e, t) {
        return this.off(e, null, t)
      }, delegate: function (e, t, n, i) {
        return this.on(t, e, n, i)
      }, undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }, size: function () {
        return this.length
      }
    }), re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
      return re
    });
    var Pt = e.jQuery, At = e.$;
    return re.noConflict = function (t) {
      return e.$ === re && (e.$ = At), t && e.jQuery === re && (e.jQuery = Pt), re
    }, t || (e.jQuery = e.$ = re), re
  }), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (e) {
  "use strict";
  var t = e.fn.jquery.split(" ")[0].split(".");
  if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), function (e) {
  "use strict";
  function t(t) {
    var n = t.attr("data-target");
    n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
    var i = n && e(n);
    return i && i.length ? i : t.parent()
  }

  function n(n) {
    n && 3 === n.which || (e(o).remove(), e(r).each(function () {
      var i = e(this), o = t(i), r = {relatedTarget: this};
      o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target) || (o.trigger(n = e.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(e.Event("hidden.bs.dropdown", r)))))
    }))
  }

  function i(t) {
    return this.each(function () {
      var n = e(this), i = n.data("bs.dropdown");
      i || n.data("bs.dropdown", i = new s(this)), "string" == typeof t && i[t].call(n)
    })
  }

  var o = ".dropdown-backdrop", r = '[data-toggle="dropdown"]', s = function (t) {
    e(t).on("click.bs.dropdown", this.toggle)
  };
  s.VERSION = "3.3.7", s.prototype.toggle = function (i) {
    var o = e(this);
    if (!o.is(".disabled, :disabled")) {
      var r = t(o), s = r.hasClass("open");
      if (n(), !s) {
        "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
        var a = {relatedTarget: this};
        if (r.trigger(i = e.Event("show.bs.dropdown", a)), i.isDefaultPrevented())return;
        o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", a))
      }
      return !1
    }
  }, s.prototype.keydown = function (n) {
    if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
      var i = e(this);
      if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
        var o = t(i), s = o.hasClass("open");
        if (!s && 27 != n.which || s && 27 == n.which)return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
        var a = o.find(".dropdown-menu li:not(.disabled):visible a");
        if (a.length) {
          var l = a.index(n.target);
          38 == n.which && l > 0 && l--, 40 == n.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
        }
      }
    }
  };
  var a = e.fn.dropdown;
  e.fn.dropdown = i, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function () {
    return e.fn.dropdown = a, this
  }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
    e.stopPropagation()
  }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), function (e) {
  "use strict";
  function t(t) {
    return this.each(function () {
      var i = e(this), o = i.data("bs.tab");
      o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]()
    })
  }

  var n = function (t) {
    this.element = e(t)
  };
  n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
    var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), i = t.data("target");
    if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
      var o = n.find(".active:last a"), r = e.Event("hide.bs.tab", {relatedTarget: t[0]}),
        s = e.Event("show.bs.tab", {relatedTarget: o[0]});
      if (o.trigger(r), t.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
        var a = e(i);
        this.activate(t.closest("li"), n), this.activate(a, a.parent(), function () {
          o.trigger({type: "hidden.bs.tab", relatedTarget: t[0]}), t.trigger({
            type: "shown.bs.tab",
            relatedTarget: o[0]
          })
        })
      }
    }
  }, n.prototype.activate = function (t, i, o) {
    function r() {
      s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
    }

    var s = i.find("> .active"),
      a = o && e.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
    s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
  };
  var i = e.fn.tab;
  e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function () {
    return e.fn.tab = i, this
  };
  var o = function (n) {
    n.preventDefault(), t.call(e(this), "show")
  };
  e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), function (e) {
  "use strict";
  function t(t) {
    var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
    return e(i)
  }

  function n(t) {
    return this.each(function () {
      var n = e(this), o = n.data("bs.collapse"),
        r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
      !o && r.toggle && /show|hide/.test(t) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof t && o[t]()
    })
  }

  var i = function (t, n) {
    this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
    return this.$element.hasClass("width") ? "width" : "height"
  }, i.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(o && o.length && (t = o.data("bs.collapse")) && t.transitioning)) {
        var r = e.Event("show.bs.collapse");
        if (this.$element.trigger(r), !r.isDefaultPrevented()) {
          o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
          var s = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var a = function () {
            this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!e.support.transition)return a.call(this);
          var l = e.camelCase(["scroll", s].join("-"));
          this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
        }
      }
    }
  }, i.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var t = e.Event("hide.bs.collapse");
      if (this.$element.trigger(t), !t.isDefaultPrevented()) {
        var n = this.dimension();
        this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var o = function () {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
      }
    }
  }, i.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, i.prototype.getParent = function () {
    return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function (n, i) {
      var o = e(i);
      this.addAriaAndCollapsedClass(t(o), o)
    }, this)).end()
  }, i.prototype.addAriaAndCollapsedClass = function (e, t) {
    var n = e.hasClass("in");
    e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
  };
  var o = e.fn.collapse;
  e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function () {
    return e.fn.collapse = o, this
  }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
    var o = e(this);
    o.attr("data-target") || i.preventDefault();
    var r = t(o), s = r.data("bs.collapse"), a = s ? "toggle" : o.data();
    n.call(r, a)
  })
}(jQuery), function (e) {
  "use strict";
  function t() {
    var e = document.createElement("bootstrap"), t = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    for (var n in t)if (void 0 !== e.style[n])return {end: t[n]};
    return !1
  }

  e.fn.emulateTransitionEnd = function (t) {
    var n = !1, i = this;
    e(this).one("bsTransitionEnd", function () {
      n = !0
    });
    var o = function () {
      n || e(i).trigger(e.support.transition.end)
    };
    return setTimeout(o, t), this
  }, e(function () {
    e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
      bindType: e.support.transition.end,
      delegateType: e.support.transition.end,
      handle: function (t) {
        return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
      }
    })
  })
}(jQuery), function (e, t) {
  if ("function" == typeof define && define.amd) define(["exports"], t); else if ("undefined" != typeof exports) t(exports); else {
    var n = {exports: {}};
    t(n.exports), e.breakpoints = n.exports
  }
}(this, function (e) {
  "use strict";
  function t(e, t) {
    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function n(e, t) {
    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  function i(e, t) {
    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
  }

  Object.defineProperty(e, "__esModule", {value: !0});
  var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    }

    return function (t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }, s = {
    xs: {min: 0, max: 767},
    sm: {min: 768, max: 991},
    md: {min: 992, max: 1199},
    lg: {min: 1200, max: 1 / 0}
  }, a = {
    each: function (e, t) {
      for (var n in e)if (("object" !== (void 0 === e ? "undefined" : r(e)) || e.hasOwnProperty(n)) && !1 === t(n, e[n]))break
    }, isFunction: function (e) {
      return "function" == typeof e || !1
    }, extend: function (e, t) {
      for (var n in t)e[n] = t[n];
      return e
    }
  }, l = function () {
    function e() {
      i(this, e), this.length = 0, this.list = []
    }

    return o(e, [{
      key: "add", value: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.list.push({fn: e, data: t, one: n}), this.length++
      }
    }, {
      key: "remove", value: function (e) {
        for (var t = 0; t < this.list.length; t++)this.list[t].fn === e && (this.list.splice(t, 1), this.length--, t--)
      }
    }, {
      key: "empty", value: function () {
        this.list = [], this.length = 0
      }
    }, {
      key: "call", value: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        t || (t = this.length - 1);
        var i = this.list[t];
        a.isFunction(n) ? n.call(this, e, i, t) : a.isFunction(i.fn) && i.fn.call(e || window, i.data), i.one && (delete this.list[t], this.length--)
      }
    }, {
      key: "fire", value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        for (var n in this.list)this.list.hasOwnProperty(n) && this.call(e, n, t)
      }
    }]), e
  }(), c = {
    current: null, callbacks: new l, trigger: function (e) {
      var t = this.current;
      this.current = e, this.callbacks.fire(e, function (n, i) {
        a.isFunction(i.fn) && i.fn.call({current: e, previous: t}, i.data)
      })
    }, one: function (e, t) {
      return this.on(e, t, !0)
    }, on: function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      void 0 === t && a.isFunction(e) && (t = e, e = void 0), a.isFunction(t) && this.callbacks.add(t, e, n)
    }, off: function (e) {
      void 0 === e && this.callbacks.empty()
    }
  }, u = function () {
    function e(t, n) {
      i(this, e), this.name = t, this.media = n, this.initialize()
    }

    return o(e, [{
      key: "initialize", value: function () {
        this.callbacks = {
          enter: new l,
          leave: new l
        }, this.mql = window.matchMedia && window.matchMedia(this.media) || {
            matches: !1,
            media: this.media,
            addListener: function () {
            },
            removeListener: function () {
            }
          };
        var e = this;
        this.mqlListener = function (t) {
          var n = t.matches && "enter" || "leave";
          e.callbacks[n].fire(e)
        }, this.mql.addListener(this.mqlListener)
      }
    }, {
      key: "on", value: function (e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if ("object" === (void 0 === e ? "undefined" : r(e))) {
          for (var o in e)e.hasOwnProperty(o) && this.on(o, t, e[o], i);
          return this
        }
        return void 0 === n && a.isFunction(t) && (n = t, t = void 0), a.isFunction(n) ? (void 0 !== this.callbacks[e] && (this.callbacks[e].add(n, t, i), "enter" === e && this.isMatched() && this.callbacks[e].call(this)), this) : this
      }
    }, {
      key: "one", value: function (e, t, n) {
        return this.on(e, t, n, !0)
      }
    }, {
      key: "off", value: function (e, t) {
        var n = void 0;
        if ("object" === (void 0 === e ? "undefined" : r(e))) {
          for (n in e)e.hasOwnProperty(n) && this.off(n, e[n]);
          return this
        }
        return void 0 === e ? (this.callbacks.enter.empty(), this.callbacks.leave.empty()) : e in this.callbacks && (t ? this.callbacks[e].remove(t) : this.callbacks[e].empty()), this
      }
    }, {
      key: "isMatched", value: function () {
        return this.mql.matches
      }
    }, {
      key: "destroy", value: function () {
        this.off()
      }
    }]), e
  }(), d = {
    min: function (e) {
      return "(min-width: " + e + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "px") + ")"
    }, max: function (e) {
      return "(max-width: " + e + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "px") + ")"
    }, between: function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "px";
      return "(min-width: " + e + n + ") and (max-width: " + t + n + ")"
    }, get: function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "px";
      return 0 === e ? this.max(t, n) : t === 1 / 0 ? this.min(e, n) : this.between(e, t, n)
    }
  }, p = function (e) {
    function r(e) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "px";
      i(this, r);
      var a = d.get(n, o, s),
        l = t(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e, a));
      l.min = n, l.max = o, l.unit = s;
      var u = l;
      return l.changeListener = function () {
        u.isMatched() && c.trigger(u)
      }, l.isMatched() && (c.current = l), l.mql.addListener(l.changeListener), l
    }

    return n(r, e), o(r, [{
      key: "destroy", value: function () {
        this.off(), this.mql.removeListener(this.changeHander)
      }
    }]), r
  }(u), f = function (e) {
    function o(e) {
      i(this, o);
      var n = [], r = [];
      return a.each(e.split(" "), function (e, t) {
        var i = y.get(t);
        i && (n.push(i), r.push(i.media))
      }), t(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, e, r.join(",")))
    }

    return n(o, e), o
  }(u), h = {version: "1.0.4"}, m = {}, g = {}, v = window.Breakpoints = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)t[n] = arguments[n];
    v.define.apply(v, t)
  };
  v.defaults = s, v = a.extend(v, {
    version: h.version, defined: !1, define: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      this.defined && this.destroy(), e || (e = v.defaults), this.options = a.extend(t, {unit: "px"});
      for (var n in e)e.hasOwnProperty(n) && this.set(n, e[n].min, e[n].max, this.options.unit);
      this.defined = !0
    }, destroy: function () {
      a.each(m, function (e, t) {
        t.destroy()
      }), m = {}, c.current = null
    }, is: function (e) {
      var t = this.get(e);
      return t ? t.isMatched() : null
    }, all: function () {
      var e = [];
      return a.each(m, function (t) {
        e.push(t)
      }), e
    }, set: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "px", o = this.get(e);
      return o && o.destroy(), m[e] = new p(e, t, n, i), m[e]
    }, get: function (e) {
      return m.hasOwnProperty(e) ? m[e] : null
    }, getUnion: function (e) {
      return g.hasOwnProperty(e) ? g[e] : (g[e] = new f(e), g[e])
    }, getMin: function (e) {
      var t = this.get(e);
      return t ? t.min : null
    }, getMax: function (e) {
      var t = this.get(e);
      return t ? t.max : null
    }, current: function () {
      return c.current
    }, getMedia: function (e) {
      var t = this.get(e);
      return t ? t.media : null
    }, on: function (e, t, n, i) {
      var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      if ("change" === (e = e.trim()))return i = n, n = t, c.on(n, i, o);
      if (e.includes(" ")) {
        var r = this.getUnion(e);
        r && r.on(t, n, i, o)
      } else {
        var s = this.get(e);
        s && s.on(t, n, i, o)
      }
      return this
    }, one: function (e, t, n, i) {
      return this.on(e, t, n, i, !0)
    }, off: function (e, t, n) {
      if ("change" === (e = e.trim()))return c.off(t);
      if (e.includes(" ")) {
        var i = this.getUnion(e);
        i && i.off(t, n)
      } else {
        var o = this.get(e);
        o && o.off(t, n)
      }
      return this
    }
  });
  var y = v;
  e.default = y
}), function (e, t, n, i) {
  "use strict";
  function o(e) {
    var t = e.currentTarget, i = e.data ? e.data.options : {}, o = e.data ? e.data.items : [],
      r = "", s = 0;
    e.preventDefault(), e.stopPropagation(), n(t).attr("data-fancybox") && (r = n(t).data("fancybox")), r ? (o = o.length ? o.filter('[data-fancybox="' + r + '"]') : n("[data-fancybox=" + r + "]"), s = o.index(t)) : o = [t], n.fancybox.open(o, i, s)
  }

  if (!n)return i;
  var r = {
    speed: 330,
    loop: !0,
    opacity: "auto",
    margin: [44, 0],
    gutter: 30,
    infobar: !0,
    buttons: !0,
    slideShow: !0,
    fullScreen: !0,
    thumbs: !0,
    closeBtn: !0,
    smallBtn: "auto",
    image: {preload: "auto", protect: !1},
    ajax: {settings: {data: {fancybox: !0}}},
    iframe: {
      tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
      preload: !0,
      scrolling: "no",
      css: {}
    },
    baseClass: "",
    slideClass: "",
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',
    spinnerTpl: '<div class="fancybox-loading"></div>',
    errorTpl: '<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',
    closeTpl: '<button data-fancybox-close class="fancybox-close-small"></button>',
    parentEl: "body",
    touch: !0,
    keyboard: !0,
    focus: !0,
    closeClickOutside: !0,
    beforeLoad: n.noop,
    afterLoad: n.noop,
    beforeMove: n.noop,
    afterMove: n.noop,
    onComplete: n.noop,
    onInit: n.noop,
    beforeClose: n.noop,
    afterClose: n.noop,
    onActivate: n.noop,
    onDeactivate: n.noop
  }, s = n(e), a = n(t), l = 0, c = function (e) {
    return e && e.hasOwnProperty && e instanceof n
  }, u = function () {
    return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (t) {
        e.setTimeout(t, 1e3 / 60)
      }
  }(), d = function (i) {
    var o;
    return "function" == typeof n && i instanceof n && (i = i[0]), o = i.getBoundingClientRect(), o.bottom > 0 && o.right > 0 && o.left < (e.innerWidth || t.documentElement.clientWidth) && o.top < (e.innerHeight || t.documentElement.clientHeight)
  }, p = function (e, i, o) {
    var s = this;
    s.opts = n.extend(!0, {index: o}, r, i || {}), s.id = s.opts.id || ++l, s.group = [], s.currIndex = parseInt(s.opts.index, 10) || 0, s.prevIndex = null, s.prevPos = null, s.currPos = 0, s.firstRun = null, s.createGroup(e), s.group.length && (s.$lastFocus = n(t.activeElement).blur(), s.slides = {}, s.init(e))
  };
  n.extend(p.prototype, {
    init: function () {
      var e, t, i = this, o = !1;
      i.scrollTop = a.scrollTop(), i.scrollLeft = a.scrollLeft(), n.fancybox.getInstance() || (e = n("body").width(), n("html").addClass("fancybox-enabled"), n.fancybox.isTouch ? (n.each(i.group, function (e, t) {
        if ("image" !== t.type && "iframe" !== t.type)return o = !0, !1
      }), o && n("body").css({
        position: "fixed",
        width: e,
        top: -1 * i.scrollTop
      })) : (e = n("body").width() - e) > 1 && n('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: " + e + "px; }").appendTo("head")), t = n(i.opts.baseTpl).attr("id", "fancybox-container-" + i.id).data("FancyBox", i).addClass(i.opts.baseClass).hide().prependTo(i.opts.parentEl), i.$refs = {
        container: t,
        bg: t.find(".fancybox-bg"),
        controls: t.find(".fancybox-controls"),
        buttons: t.find(".fancybox-buttons"),
        slider_wrap: t.find(".fancybox-slider-wrap"),
        slider: t.find(".fancybox-slider"),
        caption: t.find(".fancybox-caption")
      }, i.trigger("onInit"), i.activate(), i.current || i.jumpTo(i.currIndex)
    }, createGroup: function (e) {
      var t = this, o = n.makeArray(e);
      n.each(o, function (e, o) {
        var r, s, a, l, c = {}, u = {}, d = [];
        n.isPlainObject(o) ? (c = o, u = o.opts || {}) : "object" === n.type(o) && n(o).length ? (r = n(o), d = r.data(), u = "options" in d ? d.options : {}, u = "object" === n.type(u) ? u : {}, c.type = "type" in d ? d.type : u.type, c.src = "src" in d ? d.src : u.src || r.attr("href"), u.width = "width" in d ? d.width : u.width, u.height = "height" in d ? d.height : u.height, u.thumb = "thumb" in d ? d.thumb : u.thumb, u.selector = "selector" in d ? d.selector : u.selector, "srcset" in d && (u.image = {srcset: d.srcset}), u.$orig = r) : c = {
          type: "html",
          content: o + ""
        }, c.opts = n.extend(!0, {}, t.opts, u), s = c.type, a = c.src || "", s || (c.content ? s = "html" : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? s = "pdf" : "#" === a.charAt(0) && (s = "inline"), c.type = s), c.index = t.group.length, c.opts.$orig && !c.opts.$orig.length && delete c.opts.$orig, !c.opts.$thumb && c.opts.$orig && (c.opts.$thumb = c.opts.$orig.find("img:first")), c.opts.$thumb && !c.opts.$thumb.length && delete c.opts.$thumb, "function" === n.type(c.opts.caption) ? c.opts.caption = c.opts.caption.apply(o, [t, c]) : "caption" in d ? c.opts.caption = d.caption : u.$orig && (c.opts.caption = r.attr("title")), c.opts.caption = c.opts.caption === i ? "" : c.opts.caption + "", "ajax" === s && (l = a.split(/\s+/, 2), l.length > 1 && (c.src = l.shift(), c.opts.selector = l.shift())), "auto" == c.opts.smallBtn && (n.inArray(s, ["html", "inline", "ajax"]) > -1 ? (c.opts.buttons = !1, c.opts.smallBtn = !0) : c.opts.smallBtn = !1), "pdf" === s && (c.type = "iframe", c.opts.closeBtn = !0, c.opts.smallBtn = !1, c.opts.iframe.preload = !1), c.opts.modal && n.extend(!0, c.opts, {
          infobar: 0,
          buttons: 0,
          keyboard: 0,
          slideShow: 0,
          fullScreen: 0,
          closeClickOutside: 0
        }), t.group.push(c)
      })
    }, addEvents: function () {
      var t = this;
      t.removeEvents(), t.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (e) {
        e.stopPropagation(), e.preventDefault(), t.close(e)
      }).on("click.fb-previous", "[data-fancybox-previous]", function (e) {
        e.stopPropagation(), e.preventDefault(), t.previous()
      }).on("click.fb-next", "[data-fancybox-next]", function (e) {
        e.stopPropagation(), e.preventDefault(), t.next()
      }), n(e).on("orientationchange.fb resize.fb", function (e) {
        u(function () {
          e && e.originalEvent && "resize" === e.originalEvent.type ? t.update() : (t.$refs.slider_wrap.hide(), u(function () {
            t.$refs.slider_wrap.show(), t.update()
          }))
        })
      }), a.on("focusin.fb", function (e) {
        var i = n.fancybox ? n.fancybox.getInstance() : null;
        !i || n(e.target).hasClass("fancybox-container") || n.contains(i.$refs.container[0], e.target) || (e.stopPropagation(), i.focus(), s.scrollTop(t.scrollTop).scrollLeft(t.scrollLeft))
      }), a.on("keydown.fb", function (e) {
        var i = t.current, o = e.keyCode || e.which;
        if (i && i.opts.keyboard && !n(e.target).is("input") && !n(e.target).is("textarea")) {
          if (8 === o || 27 === o)return e.preventDefault(), void t.close(e);
          switch (o) {
            case 37:
            case 38:
              e.preventDefault(), t.previous();
              break;
            case 39:
            case 40:
              e.preventDefault(), t.next();
              break;
            case 80:
            case 32:
              e.preventDefault(), t.SlideShow && (e.preventDefault(), t.SlideShow.toggle());
              break;
            case 70:
              t.FullScreen && (e.preventDefault(), t.FullScreen.toggle());
              break;
            case 71:
              t.Thumbs && (e.preventDefault(), t.Thumbs.toggle())
          }
        }
      })
    }, removeEvents: function () {
      s.off("scroll.fb resize.fb orientationchange.fb"), a.off("keydown.fb focusin.fb click.fb-close"), this.$refs.container.off("click.fb-close click.fb-previous click.fb-next")
    }, previous: function (e) {
      this.jumpTo(this.currIndex - 1, e)
    }, next: function (e) {
      this.jumpTo(this.currIndex + 1, e)
    }, jumpTo: function (e, t) {
      var n, o, r, s, a = this;
      if (n = a.firstRun = null === a.firstRun, o = r = e = parseInt(e, 10), s = !!a.current && a.current.opts.loop, !a.isAnimating && (o != a.currIndex || n)) {
        if (a.group.length > 1 && s) o %= a.group.length, o = o < 0 ? a.group.length + o : o, 2 == a.group.length ? r = e - a.currIndex + a.currPos : (r = o - a.currIndex + a.currPos, Math.abs(a.currPos - (r + a.group.length)) < Math.abs(a.currPos - r) ? r += a.group.length : Math.abs(a.currPos - (r - a.group.length)) < Math.abs(a.currPos - r) && (r -= a.group.length)); else if (!a.group[o])return void a.update(!1, !1, t);
        a.current && (a.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete"), a.updateSlide(a.current, !0)), a.prevIndex = a.currIndex, a.prevPos = a.currPos, a.currIndex = o, a.currPos = r, a.current = a.createSlide(r), a.group.length > 1 && ((a.opts.loop || r - 1 >= 0) && a.createSlide(r - 1), (a.opts.loop || r + 1 < a.group.length) && a.createSlide(r + 1)), a.current.isMoved = !1, a.current.isComplete = !1, t = parseInt(t === i ? 1.5 * a.current.opts.speed : t, 10), a.trigger("beforeMove"), a.updateControls(), n && (a.current.$slide.addClass("fancybox-slide--current"), a.$refs.container.show(), u(function () {
          a.$refs.bg.css("transition-duration", a.current.opts.speed + "ms"), a.$refs.container.addClass("fancybox-container--ready")
        })), a.update(!0, !1, n ? 0 : t, function () {
          a.afterMove()
        }), a.loadSlide(a.current), n && a.current.$ghost || a.preload()
      }
    }, createSlide: function (e) {
      var t, i, o, r = this;
      if (i = e % r.group.length, i = i < 0 ? r.group.length + i : i, !r.slides[e] && r.group[i]) {
        if (r.opts.loop && r.group.length > 2)for (var s in r.slides)if (r.slides[s].index === i)return o = r.slides[s], o.pos = e, r.slides[e] = o, delete r.slides[s], r.updateSlide(o), o;
        t = n('<div class="fancybox-slide"></div>').appendTo(r.$refs.slider), r.slides[e] = n.extend(!0, {}, r.group[i], {
          pos: e,
          $slide: t,
          isMoved: !1,
          isLoaded: !1
        })
      }
      return r.slides[e]
    }, zoomInOut: function (e, t, i) {
      var o, r, s, a = this, l = a.current, c = l.$placeholder, u = l.opts.opacity,
        p = l.opts.$thumb, f = p ? p.offset() : 0, h = l.$slide.offset();
      return !(!(c && l.isMoved && f && d(p)) || "In" === e && !a.firstRun || (n.fancybox.stop(c), a.isAnimating = !0, o = {
        top: f.top - h.top + parseFloat(p.css("border-top-width") || 0),
        left: f.left - h.left + parseFloat(p.css("border-left-width") || 0),
        width: p.width(),
        height: p.height(),
        scaleX: 1,
        scaleY: 1
      }, "auto" == u && (u = Math.abs(l.width / l.height - o.width / o.height) > .1), "In" === e ? (r = o, s = a.getFitPos(l), s.scaleX = s.width / r.width, s.scaleY = s.height / r.height, u && (r.opacity = .1, s.opacity = 1)) : (r = n.fancybox.getTranslate(c), s = o, l.$ghost && (l.$ghost.show(), l.$image && l.$image.remove()), r.scaleX = r.width / s.width, r.scaleY = r.height / s.height, r.width = s.width, r.height = s.height, u && (s.opacity = 0)), a.updateCursor(s.width, s.height), delete s.width, delete s.height, n.fancybox.setTranslate(c, r), c.show(), a.trigger("beforeZoom" + e), c.css("transition", "all " + t + "ms"), n.fancybox.setTranslate(c, s), setTimeout(function () {
        var t;
        c.css("transition", "none"), t = n.fancybox.getTranslate(c), t.scaleX = 1, t.scaleY = 1, n.fancybox.setTranslate(c, t), a.trigger("afterZoom" + e), i.apply(a), a.isAnimating = !1
      }, t), 0))
    }, canPan: function () {
      var e = this, t = e.current, n = t.$placeholder, i = !1;
      return n && (i = e.getFitPos(t), i = Math.abs(n.width() - i.width) > 1 || Math.abs(n.height() - i.height) > 1), i
    }, isScaledDown: function () {
      var e = this, t = e.current, i = t.$placeholder, o = !1;
      return i && (o = n.fancybox.getTranslate(i), o = o.width < t.width || o.height < t.height), o
    }, scaleToActual: function (e, t, o) {
      var r, s, a, l, c, u = this, d = u.current, p = d.$placeholder,
        f = parseInt(d.$slide.width(), 10), h = parseInt(d.$slide.height(), 10), m = d.width,
        g = d.height;
      p && (u.isAnimating = !0, e = e === i ? .5 * f : e, t = t === i ? .5 * h : t, r = n.fancybox.getTranslate(p), l = m / r.width, c = g / r.height, s = .5 * f - .5 * m, a = .5 * h - .5 * g, m > f && (s = r.left * l - (e * l - e), s > 0 && (s = 0), s < f - m && (s = f - m)), g > h && (a = r.top * c - (t * c - t), a > 0 && (a = 0), a < h - g && (a = h - g)), u.updateCursor(m, g), n.fancybox.animate(p, null, {
        top: a,
        left: s,
        scaleX: l,
        scaleY: c
      }, o || d.opts.speed, function () {
        u.isAnimating = !1
      }))
    }, scaleToFit: function (e) {
      var t, i = this, o = i.current, r = o.$placeholder;
      r && (i.isAnimating = !0, t = i.getFitPos(o), i.updateCursor(t.width, t.height), n.fancybox.animate(r, null, {
        top: t.top,
        left: t.left,
        scaleX: t.width / r.width(),
        scaleY: t.height / r.height()
      }, e || o.opts.speed, function () {
        i.isAnimating = !1
      }))
    }, getFitPos: function (e) {
      var t, i, o, r, a, l, c, u = e.$placeholder || e.$content, d = e.width, p = e.height,
        f = e.opts.margin;
      return !(!u || !u.length || !d && !p) && ("number" === n.type(f) && (f = [f, f]), 2 == f.length && (f = [f[0], f[1], f[0], f[1]]), s.width() < 800 && (f = [0, 0, 0, 0]), t = parseInt(e.$slide.width(), 10) - (f[1] + f[3]), i = parseInt(e.$slide.height(), 10) - (f[0] + f[2]), o = Math.min(1, t / d, i / p), l = Math.floor(o * d), c = Math.floor(o * p), r = Math.floor(.5 * (i - c)) + f[0], a = Math.floor(.5 * (t - l)) + f[3], {
          top: r,
          left: a,
          width: l,
          height: c
        })
    }, update: function (e, t, i, o) {
      var r, s = this;
      !0 !== s.isAnimating && s.current && (r = s.current.pos * Math.floor(s.current.$slide.width()) * -1 - s.current.pos * s.current.opts.gutter, i = parseInt(i, 10) || 0, n.fancybox.stop(s.$refs.slider), !1 === e ? s.updateSlide(s.current, t) : n.each(s.slides, function (e, n) {
        s.updateSlide(n, t)
      }), i ? n.fancybox.animate(s.$refs.slider, null, {top: 0, left: r}, i, function () {
        s.current.isMoved = !0, "function" === n.type(o) && o.apply(s)
      }) : (n.fancybox.setTranslate(s.$refs.slider, {
        top: 0,
        left: r
      }), s.current.isMoved = !0, "function" === n.type(o) && o.apply(s)))
    }, updateSlide: function (e, t) {
      var i, o = this, r = e.$placeholder;
      (e = e || o.current) && !o.isClosing && (i = e.pos * Math.floor(e.$slide.width()) + e.pos * e.opts.gutter, i !== e.leftPos && (n.fancybox.setTranslate(e.$slide, {
        top: 0,
        left: i
      }), e.leftPos = i), !1 !== t && r && (n.fancybox.setTranslate(r, o.getFitPos(e)), e.pos === o.currPos && o.updateCursor()), e.$slide.trigger("refresh"), o.trigger("onUpdate", e))
    }, updateCursor: function (e, t) {
      var n, o = this,
        r = o.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab");
      !o.isClosing && o.opts.touch && (n = e !== i && t !== i ? e < o.current.width && t < o.current.height : o.isScaledDown(), n ? r.addClass("fancybox-controls--canzoomIn") : o.group.length < 2 ? r.addClass("fancybox-controls--canzoomOut") : r.addClass("fancybox-controls--canGrab"))
    }, loadSlide: function (e) {
      var t, i, o, r = this;
      if (e && !e.isLoaded && !e.isLoading) {
        switch (e.isLoading = !0, r.trigger("beforeLoad", e), t = e.type, i = e.$slide, i.off("refresh").trigger("onReset").addClass("fancybox-slide--" + (t || "unknown")).addClass(e.opts.slideClass), t) {
          case"image":
            r.setImage(e);
            break;
          case"iframe":
            r.setIframe(e);
            break;
          case"html":
            r.setContent(e, e.content);
            break;
          case"inline":
            n(e.src).length ? r.setContent(e, n(e.src)) : r.setError(e);
            break;
          case"ajax":
            r.showLoading(e), o = n.ajax(n.extend({}, e.opts.ajax.settings, {
              url: e.src,
              success: function (t, n) {
                "success" === n && r.setContent(e, t)
              },
              error: function (t, n) {
                t && "abort" !== n && r.setError(e)
              }
            })), i.one("onReset", function () {
              o.abort()
            });
            break;
          default:
            r.setError(e)
        }
        return !0
      }
    }, setImage: function (t) {
      var i, o, r, s, a = this, l = t.opts.image.srcset;
      if (t.isLoaded && !t.hasError)return void a.afterLoad(t);
      if (l) {
        r = e.devicePixelRatio || 1, s = e.innerWidth * r, o = l.split(",").map(function (e) {
          var t = {};
          return e.trim().split(/\s+/).forEach(function (e, n) {
            var i = parseInt(e.substring(0, e.length - 1), 10);
            return 0 === n ? t.url = e : void(i && (t.value = i,
              t.postfix = e[e.length - 1]))
          }), t
        }), o.sort(function (e, t) {
          return e.value - t.value
        });
        for (var c = 0; c < o.length; c++) {
          var u = o[c];
          if ("w" === u.postfix && u.value >= s || "x" === u.postfix && u.value >= r) {
            i = u;
            break
          }
        }
        !i && o.length && (i = o[o.length - 1]), i && (t.src = i.url, t.width && t.height && "w" == i.postfix && (t.height = t.width / t.height * i.value, t.width = i.value))
      }
      t.$placeholder = n('<div class="fancybox-placeholder"></div>').hide().appendTo(t.$slide), !1 !== t.opts.preload && t.opts.width && t.opts.height && (t.opts.thumb || t.opts.$thumb) ? (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = n("<img />").one("load error", function () {
        a.isClosing || (n("<img/>")[0].src = t.src, a.revealImage(t, function () {
          a.setBigImage(t), a.firstRun && t.index === a.currIndex && a.preload()
        }))
      }).addClass("fancybox-image").appendTo(t.$placeholder).attr("src", t.opts.thumb || t.opts.$thumb.attr("src"))) : a.setBigImage(t)
    }, setBigImage: function (e) {
      var t = this, i = n("<img />");
      e.$image = i.one("error", function () {
        t.setError(e)
      }).one("load", function () {
        clearTimeout(e.timouts), e.timouts = null, t.isClosing || (e.width = this.naturalWidth, e.height = this.naturalHeight, e.opts.image.srcset && i.attr("sizes", "100vw").attr("srcset", e.opts.image.srcset), t.afterLoad(e), e.$ghost && (e.timouts = setTimeout(function () {
          e.$ghost.hide()
        }, 350)))
      }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$placeholder), i[0].complete ? i.trigger("load") : i[0].error ? i.trigger("error") : e.timouts = setTimeout(function () {
        i[0].complete || e.hasError || t.showLoading(e)
      }, 150), e.opts.image.protect && n('<div class="fancybox-spaceball"></div>').appendTo(e.$placeholder).on("contextmenu.fb", function (e) {
        return 2 == e.button && e.preventDefault(), !0
      })
    }, revealImage: function (e, t) {
      var i = this;
      return t = t || n.noop, "image" !== e.type || e.hasError || !0 === e.isRevealed ? void t.apply(i) : (e.isRevealed = !0, void(e.pos === i.currPos && i.zoomInOut("In", e.opts.speed, t) || (e.$ghost && !e.isLoaded && i.updateSlide(e, !0), e.pos === i.currPos ? n.fancybox.animate(e.$placeholder, {opacity: 0}, {opacity: 1}, 300, t) : e.$placeholder.show(), t.apply(i))))
    }, setIframe: function (e) {
      var t, o = this, r = e.opts.iframe, s = e.$slide;
      e.$content = n('<div class="fancybox-content"></div>').css(r.css).appendTo(s), t = n(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", n.fancybox.isTouch ? "auto" : r.scrolling).appendTo(e.$content), r.preload ? (e.$content.addClass("fancybox-tmp"), o.showLoading(e), t.on("load.fb error.fb", function (t) {
        this.isReady = 1, e.$slide.trigger("refresh"), o.afterLoad(e)
      }), s.on("refresh.fb", function () {
        var n, o, s, a, l, c = e.$content;
        if (1 === t[0].isReady) {
          try {
            n = t.contents(), o = n.find("body")
          } catch (e) {
          }
          o && o.length && (r.css.width === i || r.css.height === i) && (s = t[0].contentWindow.document.documentElement.scrollWidth, a = Math.ceil(o.outerWidth(!0) + (c.width() - s)), l = Math.ceil(o.outerHeight(!0)), c.css({
            width: r.css.width === i ? a + (c.outerWidth() - c.innerWidth()) : r.css.width,
            height: r.css.height === i ? l + (c.outerHeight() - c.innerHeight()) : r.css.height
          })), c.removeClass("fancybox-tmp")
        }
      })) : this.afterLoad(e), t.attr("src", e.src), e.opts.smallBtn && e.$content.prepend(e.opts.closeTpl), s.one("onReset", function () {
        try {
          n(this).find("iframe").hide().attr("src", "//about:blank")
        } catch (e) {
        }
        n(this).empty(), e.isLoaded = !1
      })
    }, setContent: function (e, t) {
      var i = this;
      i.isClosing || (i.hideLoading(e), e.$slide.empty(), c(t) && t.parent().length ? (t.data("placeholder") && t.parents(".fancybox-slide").trigger("onReset"), t.data({placeholder: n("<div></div>").hide().insertAfter(t)}).css("display", "inline-block")) : ("string" === n.type(t) && (t = n("<div>").append(t).contents(), 3 === t[0].nodeType && (t = n("<div>").html(t))), e.opts.selector && (t = n("<div>").html(t).find(e.opts.selector))), e.$slide.one("onReset", function () {
        var i = c(t) ? t.data("placeholder") : 0;
        i && (t.hide().replaceAll(i), t.data("placeholder", null)), e.hasError || (n(this).empty(), e.isLoaded = !1)
      }), e.$content = n(t).appendTo(e.$slide), !0 === e.opts.smallBtn && e.$content.find(".fancybox-close-small").remove().end().eq(0).append(e.opts.closeTpl), this.afterLoad(e))
    }, setError: function (e) {
      e.hasError = !0, this.setContent(e, e.opts.errorTpl)
    }, showLoading: function (e) {
      var t = this;
      (e = e || t.current) && !e.$spinner && (e.$spinner = n(t.opts.spinnerTpl).appendTo(e.$slide))
    }, hideLoading: function (e) {
      var t = this;
      (e = e || t.current) && e.$spinner && (e.$spinner.remove(), delete e.$spinner)
    }, afterMove: function () {
      var e = this, t = e.current, i = {};
      t && (t.$slide.siblings().trigger("onReset"), n.each(e.slides, function (t, n) {
        n.pos >= e.currPos - 1 && n.pos <= e.currPos + 1 ? i[n.pos] = n : n && n.$slide.remove()
      }), e.slides = i, e.trigger("afterMove"), t.isLoaded && e.complete())
    }, afterLoad: function (e) {
      var t = this;
      t.isClosing || (e.isLoading = !1, e.isLoaded = !0, t.trigger("afterLoad", e), t.hideLoading(e), e.$ghost || t.updateSlide(e, !0), e.index === t.currIndex && e.isMoved ? t.complete() : e.$ghost || t.revealImage(e))
    }, complete: function () {
      var e = this, t = e.current;
      e.revealImage(t, function () {
        t.isComplete = !0, t.$slide.addClass("fancybox-slide--complete"), e.updateCursor(), e.trigger("onComplete"), t.opts.focus && "image" !== t.type && "iframe" !== t.type && e.focus()
      })
    }, preload: function () {
      var e, t, n = this;
      n.group.length < 2 || (e = n.slides[n.currPos + 1], t = n.slides[n.currPos - 1], e && "image" === e.type && n.loadSlide(e), t && "image" === t.type && n.loadSlide(t))
    }, focus: function () {
      var e, t = this.current;
      e = t && t.isComplete ? t.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first") : null, e && e.length || (e = this.$refs.container), e.focus(), this.$refs.slider_wrap.scrollLeft(0), t && t.$slide.scrollTop(0)
    }, activate: function () {
      var e = this;
      n(".fancybox-container").each(function () {
        var t = n(this).data("FancyBox");
        t && t.uid !== e.uid && !t.isClosing && t.trigger("onDeactivate")
      }), e.current && (e.$refs.container.index() > 0 && e.$refs.container.prependTo(t.body), e.updateControls()), e.trigger("onActivate"), e.addEvents()
    }, close: function (e) {
      var t = this, i = t.current, o = i.opts.speed, r = n.proxy(function () {
        t.cleanUp(e)
      }, this);
      return !t.isAnimating && !t.isClosing && (!1 === t.trigger("beforeClose", e) ? (n.fancybox.stop(t.$refs.slider), void u(function () {
          t.update(!0, !0, 150)
        })) : (t.isClosing = !0, i.timouts && clearTimeout(i.timouts), !0 !== e && n.fancybox.stop(t.$refs.slider), t.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing"), i.$slide.removeClass("fancybox-slide--complete").siblings().remove(), i.isMoved || i.$slide.css("overflow", "visible"), t.removeEvents(), t.hideLoading(i), t.hideControls(), t.updateCursor(), t.$refs.bg.css("transition-duration", o + "ms"), this.$refs.container.removeClass("fancybox-container--ready"), void(!0 === e ? setTimeout(r, o) : t.zoomInOut("Out", o, r) || n.fancybox.animate(t.$refs.container, null, {opacity: 0}, o, "easeInSine", r))))
    }, cleanUp: function (e) {
      var t, i = this;
      i.$refs.slider.children().trigger("onReset"), i.$refs.container.empty().remove(), i.trigger("afterClose", e), i.current = null, t = n.fancybox.getInstance(), t ? t.activate() : (n("html").removeClass("fancybox-enabled"), n("body").removeAttr("style"), s.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft), n("#fancybox-noscroll").remove()), i.$lastFocus && i.$lastFocus.focus()
    }, trigger: function (e, i) {
      var o, r = Array.prototype.slice.call(arguments, 1), s = this,
        a = i && i.opts ? i : s.current;
      return a ? r.unshift(a) : a = s, r.unshift(s), n.isFunction(a.opts[e]) && (o = a.opts[e].apply(a, r)), !1 === o ? o : void("afterClose" === e ? n(t).trigger(e + ".fb", r) : s.$refs.container.trigger(e + ".fb", r))
    }, toggleControls: function (e) {
      this.isHiddenControls ? this.updateControls(e) : this.hideControls()
    }, hideControls: function () {
      this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-controls"), this.$refs.container.removeClass("fancybox-show-caption")
    }, updateControls: function (e) {
      var t = this, i = t.$refs.container, o = t.$refs.caption, r = t.current, s = r.index,
        a = r.opts, l = a.caption;
      this.isHiddenControls && !0 !== e || (this.isHiddenControls = !1, i.addClass("fancybox-show-controls").toggleClass("fancybox-show-infobar", !!a.infobar && t.group.length > 1).toggleClass("fancybox-show-buttons", !!a.buttons).toggleClass("fancybox-is-modal", !!a.modal), n(".fancybox-button--left", i).toggleClass("fancybox-button--disabled", !a.loop && s <= 0), n(".fancybox-button--right", i).toggleClass("fancybox-button--disabled", !a.loop && s >= t.group.length - 1), n(".fancybox-button--play", i).toggle(!!(a.slideShow && t.group.length > 1)), n(".fancybox-button--close", i).toggle(!!a.closeBtn), n(".js-fancybox-count", i).html(t.group.length), n(".js-fancybox-index", i).html(s + 1), r.$slide.trigger("refresh"), o && o.empty(), l && l.length ? (o.html(l), this.$refs.container.addClass("fancybox-show-caption "), t.$caption = o) : this.$refs.container.removeClass("fancybox-show-caption"))
    }
  }), n.fancybox = {
    version: "3.0.47",
    defaults: r,
    getInstance: function (e) {
      var t = n('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox"),
        i = Array.prototype.slice.call(arguments, 1);
      return t instanceof p && ("string" === n.type(e) ? t[e].apply(t, i) : "function" === n.type(e) && e.apply(t, i), t)
    },
    open: function (e, t, n) {
      return new p(e, t, n)
    },
    close: function (e) {
      var t = this.getInstance();
      t && (t.close(), !0 === e && this.close())
    },
    isTouch: t.createTouch !== i && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
    use3d: function () {
      var n = t.createElement("div");
      return e.getComputedStyle(n).getPropertyValue("transform") && !(t.documentMode && t.documentMode <= 11)
    }(),
    getTranslate: function (e) {
      var t, n;
      return !(!e || !e.length) && (t = e.get(0).getBoundingClientRect(), n = e.eq(0).css("transform"), n && -1 !== n.indexOf("matrix") ? (n = n.split("(")[1], n = n.split(")")[0], n = n.split(",")) : n = [], n.length ? (n = n.length > 10 ? [n[13], n[12], n[0], n[5]] : [n[5], n[4], n[0], n[3]], n = n.map(parseFloat)) : n = [0, 0, 1, 1], {
          top: n[0],
          left: n[1],
          scaleX: n[2],
          scaleY: n[3],
          opacity: parseFloat(e.css("opacity")),
          width: t.width,
          height: t.height
        })
    },
    setTranslate: function (e, t) {
      var n = "", o = {};
      if (e && t)return t.left === i && t.top === i || (n = (t.left === i ? e.position().top : t.left) + "px, " + (t.top === i ? e.position().top : t.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), t.scaleX !== i && t.scaleY !== i && (n = (n.length ? n + " " : "") + "scale(" + t.scaleX + ", " + t.scaleY + ")"), n.length && (o.transform = n), t.opacity !== i && (o.opacity = t.opacity), t.width !== i && (o.width = t.width), t.height !== i && (o.height = t.height), e.css(o)
    },
    easing: {
      easeOutCubic: function (e, t, n, i) {
        return n * ((e = e / i - 1) * e * e + 1) + t
      }, easeInCubic: function (e, t, n, i) {
        return n * (e /= i) * e * e + t
      }, easeOutSine: function (e, t, n, i) {
        return n * Math.sin(e / i * (Math.PI / 2)) + t
      }, easeInSine: function (e, t, n, i) {
        return -n * Math.cos(e / i * (Math.PI / 2)) + n + t
      }
    },
    stop: function (e) {
      e.removeData("animateID")
    },
    animate: function (e, t, o, r, s, a) {
      var l, c, d, p = this, f = null, h = 0, m = function () {
        o.scaleX !== i && o.scaleY !== i && t && t.width !== i && t.height !== i && (o.width = t.width * o.scaleX, o.height = t.height * o.scaleY, o.scaleX = 1, o.scaleY = 1), p.setTranslate(e, o), a()
      }, g = function (n) {
        if (l = [], c = 0, e.length && e.data("animateID") === d) {
          if (n = n || Date.now(), f && (c = n - f), f = n, (h += c) >= r)return void m();
          for (var a in o)o.hasOwnProperty(a) && t[a] !== i && (t[a] == o[a] ? l[a] = o[a] : l[a] = p.easing[s](h, t[a], o[a] - t[a], r));
          p.setTranslate(e, l), u(g)
        }
      };
      p.animateID = d = p.animateID === i ? 1 : p.animateID + 1, e.data("animateID", d), a === i && "function" == n.type(s) && (a = s, s = i), s || (s = "easeOutCubic"), a = a || n.noop, t ? this.setTranslate(e, t) : t = this.getTranslate(e), r ? (e.show(), u(g)) : m()
    }
  }, n.fn.fancybox = function (e) {
    return this.off("click.fb-start").on("click.fb-start", {
      items: this,
      options: e || {}
    }, o), this
  }, n(t).on("click.fb-start", "[data-fancybox]", o)
}(window, document, window.jQuery), function (e) {
  "use strict";
  var t = function (t, n, i) {
    if (t)return i = i || "", "object" === e.type(i) && (i = e.param(i, !0)), e.each(n, function (e, n) {
      t = t.replace("$" + e, n || "")
    }), i.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + i), t
  }, n = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "//www.youtube.com/embed/$4",
      thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
    },
    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1,
        api: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },
    metacafe: {
      matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
      type: "iframe",
      url: "//www.metacafe.com/embed/$1/?ap=1"
    },
    dailymotion: {
      matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
      params: {additionalInfos: 0, autoStart: 1},
      type: "iframe",
      url: "//www.dailymotion.com/embed/video/$1"
    },
    vine: {
      matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
      type: "iframe",
      url: "//vine.co/v/$1/embed/simple"
    },
    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },
    google_maps: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function (e) {
        return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12]) + "&output=" + (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
      }
    }
  };
  e(document).on("onInit.fb", function (i, o) {
    e.each(o.group, function (i, o) {
      var r, s, a, l, c, u, d = o.src || "", p = !1;
      o.type || (e.each(n, function (n, i) {
        if (s = d.match(i.matcher), c = {}, u = n, s) {
          if (p = i.type, i.paramPlace && s[i.paramPlace]) {
            l = s[i.paramPlace], "?" == l[0] && (l = l.substring(1)), l = l.split("&");
            for (var f = 0; f < l.length; ++f) {
              var h = l[f].split("=", 2);
              2 == h.length && (c[h[0]] = decodeURIComponent(h[1].replace(/\+/g, " ")))
            }
          }
          return a = e.extend(!0, {}, i.params, o.opts[n], c), d = "function" === e.type(i.url) ? i.url.call(this, s, a, o) : t(i.url, s, a), r = "function" === e.type(i.thumb) ? i.thumb.call(this, s, a, o) : t(i.thumb, s), "vimeo" === u && (d = d.replace("&%23", "#")), !1
        }
      }), p ? (o.src = d, o.type = p, o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = r), "iframe" === p && (e.extend(!0, o.opts, {
        iframe: {
          preload: !1,
          scrolling: "no"
        }, smallBtn: !1, closeBtn: !0, fullScreen: !1, slideShow: !1
      }), o.opts.slideClass += " fancybox-slide--video")) : o.type = "iframe")
    })
  })
}(window.jQuery), function (e, t, n) {
  "use strict";
  var i = function () {
    return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (t) {
        e.setTimeout(t, 1e3 / 60)
      }
  }(), o = function (t) {
    var n = [];
    t = t.originalEvent || t || e.e, t = t.touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t];
    for (var i in t)t[i].pageX ? n.push({
      x: t[i].pageX,
      y: t[i].pageY
    }) : t[i].clientX && n.push({x: t[i].clientX, y: t[i].clientY});
    return n
  }, r = function (e, t, n) {
    return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
  }, s = function (e) {
    return e.is("a") || e.is("button") || e.is("input") || e.is("select") || e.is("textarea") || n.isFunction(e.get(0).onclick)
  }, a = function (t) {
    var n = e.getComputedStyle(t)["overflow-y"], i = e.getComputedStyle(t)["overflow-x"],
      o = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight,
      r = ("scroll" === i || "auto" === i) && t.scrollWidth > t.clientWidth;
    return o || r
  }, l = function (e) {
    for (var t = !1; !(t = a(e.get(0))) && (e = e.parent(), e.length && !e.hasClass("fancybox-slider") && !e.is("body")););
    return t
  }, c = function (e) {
    var t = this;
    t.instance = e, t.$wrap = e.$refs.slider_wrap, t.$slider = e.$refs.slider, t.$container = e.$refs.container, t.destroy(), t.$wrap.on("touchstart.fb mousedown.fb", n.proxy(t, "ontouchstart"))
  };
  c.prototype.destroy = function () {
    this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb")
  }, c.prototype.ontouchstart = function (t) {
    var i = this, a = n(t.target), c = i.instance, u = c.current, d = u.$content || u.$placeholder;
    return i.startPoints = o(t), i.$target = a, i.$content = d, i.canvasWidth = Math.round(u.$slide[0].clientWidth), i.canvasHeight = Math.round(u.$slide[0].clientHeight), i.startEvent = t, t.originalEvent.clientX > i.canvasWidth + u.$slide.offset().left || (s(a) || s(a.parent()) || l(a) ? void 0 : u.opts.touch ? void(t.originalEvent && 2 == t.originalEvent.button || (t.stopPropagation(), t.preventDefault(), !u || i.instance.isAnimating || i.instance.isClosing || !i.startPoints || i.startPoints.length > 1 && !u.isMoved || (i.$wrap.off("touchmove.fb mousemove.fb", n.proxy(i, "ontouchmove")), i.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(i, "ontouchend")), i.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(i, "ontouchend")), i.$wrap.on("touchmove.fb mousemove.fb", n.proxy(i, "ontouchmove")), i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canTap = !1, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.sliderStartPos = n.fancybox.getTranslate(i.$slider), i.contentStartPos = n.fancybox.getTranslate(i.$content), i.contentLastPos = null, 1 !== i.startPoints.length || i.isZooming || (i.canTap = u.isMoved, "image" === u.type && (i.contentStartPos.width > i.canvasWidth + 1 || i.contentStartPos.height > i.canvasHeight + 1) ? (n.fancybox.stop(i.$content), i.isPanning = !0) : (n.fancybox.stop(i.$slider), i.isSwiping = !0), i.$container.addClass("fancybox-controls--isGrabbing")), 2 === i.startPoints.length && u.isMoved && !u.hasError && "image" === u.type && (u.isLoaded || u.$ghost) && (i.isZooming = !0, i.isSwiping = !1, i.isPanning = !1, n.fancybox.stop(i.$content), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(e).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(e).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = r(i.startPoints[0], i.startPoints[1]))))) : (i.endPoints = i.startPoints, i.ontap()))
  }, c.prototype.ontouchmove = function (e) {
    var t = this;
    e.preventDefault(), t.newPoints = o(e), t.newPoints && t.newPoints.length && (t.distanceX = r(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = r(t.newPoints[0], t.startPoints[0], "y"), t.distance = r(t.newPoints[0], t.startPoints[0]), t.distance > 0 && (t.isSwiping ? t.onSwipe() : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))
  }, c.prototype.onSwipe = function () {
    var t, o = this, r = o.isSwiping, s = o.sliderStartPos.left;
    !0 === r ? Math.abs(o.distance) > 10 && (o.instance.group.length < 2 ? o.isSwiping = "y" : !o.instance.current.isMoved || !1 === o.instance.opts.touch.vertical || "auto" === o.instance.opts.touch.vertical && n(e).width() > 800 ? o.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(o.distanceY, o.distanceX) / Math.PI), o.isSwiping = t > 45 && t < 135 ? "y" : "x"), o.canTap = !1, o.instance.current.isMoved = !1, o.startPoints = o.newPoints) : ("x" == r && (!o.instance.current.opts.loop && 0 === o.instance.current.index && o.distanceX > 0 ? s += Math.pow(o.distanceX, .8) : !o.instance.current.opts.loop && o.instance.current.index === o.instance.group.length - 1 && o.distanceX < 0 ? s -= Math.pow(-o.distanceX, .8) : s += o.distanceX), o.sliderLastPos = {
      top: "x" == r ? 0 : o.sliderStartPos.top + o.distanceY,
      left: s
    }, i(function () {
      n.fancybox.setTranslate(o.$slider, o.sliderLastPos)
    }))
  }, c.prototype.onPan = function () {
    var e, t, o, r = this;
    r.canTap = !1, e = r.contentStartPos.width > r.canvasWidth ? r.contentStartPos.left + r.distanceX : r.contentStartPos.left, t = r.contentStartPos.top + r.distanceY, o = r.limitMovement(e, t, r.contentStartPos.width, r.contentStartPos.height), o.scaleX = r.contentStartPos.scaleX, o.scaleY = r.contentStartPos.scaleY, r.contentLastPos = o, i(function () {
      n.fancybox.setTranslate(r.$content, r.contentLastPos)
    })
  }, c.prototype.limitMovement = function (e, t, n, i) {
    var o, r, s, a, l = this, c = l.canvasWidth, u = l.canvasHeight, d = l.contentStartPos.left,
      p = l.contentStartPos.top, f = l.distanceX, h = l.distanceY;
    return o = Math.max(0, .5 * c - .5 * n), r = Math.max(0, .5 * u - .5 * i), s = Math.min(c - n, .5 * c - .5 * n), a = Math.min(u - i, .5 * u - .5 * i), n > c && (f > 0 && e > o && (e = o - 1 + Math.pow(-o + d + f, .8) || 0), f < 0 && e < s && (e = s + 1 - Math.pow(s - d - f, .8) || 0)), i > u && (h > 0 && t > r && (t = r - 1 + Math.pow(-r + p + h, .8) || 0), h < 0 && t < a && (t = a + 1 - Math.pow(a - p - h, .8) || 0)), {
      top: t,
      left: e
    }
  }, c.prototype.limitPosition = function (e, t, n, i) {
    var o = this, r = o.canvasWidth, s = o.canvasHeight;
    return n > r ? (e = e > 0 ? 0 : e, e = e < r - n ? r - n : e) : e = Math.max(0, r / 2 - n / 2), i > s ? (t = t > 0 ? 0 : t, t = t < s - i ? s - i : t) : t = Math.max(0, s / 2 - i / 2), {
      top: t,
      left: e
    }
  }, c.prototype.onZoom = function () {
    var t = this, o = t.contentStartPos.width, s = t.contentStartPos.height,
      a = t.contentStartPos.left, l = t.contentStartPos.top, c = r(t.newPoints[0], t.newPoints[1]),
      u = c / t.startDistanceBetweenFingers, d = Math.floor(o * u), p = Math.floor(s * u),
      f = (o - d) * t.percentageOfImageAtPinchPointX,
      h = (s - p) * t.percentageOfImageAtPinchPointY,
      m = (t.newPoints[0].x + t.newPoints[1].x) / 2 - n(e).scrollLeft(),
      g = (t.newPoints[0].y + t.newPoints[1].y) / 2 - n(e).scrollTop(),
      v = m - t.centerPointStartX, y = g - t.centerPointStartY, b = a + (f + v), x = l + (h + y),
      w = {
        top: x,
        left: b,
        scaleX: t.contentStartPos.scaleX * u,
        scaleY: t.contentStartPos.scaleY * u
      };
    t.canTap = !1, t.newWidth = d, t.newHeight = p, t.contentLastPos = w, i(function () {
      n.fancybox.setTranslate(t.$content, t.contentLastPos)
    })
  }, c.prototype.ontouchend = function (e) {
    var t = this, i = t.instance.current, r = Math.max((new Date).getTime() - t.startTime, 1),
      s = t.isSwiping, a = t.isPanning, l = t.isZooming;
    return t.endPoints = o(e), t.$container.removeClass("fancybox-controls--isGrabbing"), t.$wrap.off("touchmove.fb mousemove.fb", n.proxy(this, "ontouchmove")), t.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", n.proxy(this, "ontouchend")), t.isSwiping = !1, t.isPanning = !1, t.isZooming = !1, t.canTap ? t.ontap() : (t.velocityX = t.distanceX / r * .5, t.velocityY = t.distanceY / r * .5, t.speed = i.opts.speed || 330, t.speedX = Math.max(.75 * t.speed, Math.min(1.5 * t.speed, 1 / Math.abs(t.velocityX) * t.speed)), t.speedY = Math.max(.75 * t.speed, Math.min(1.5 * t.speed, 1 / Math.abs(t.velocityY) * t.speed)), void(a ? t.endPanning() : l ? t.endZooming() : t.endSwiping(s)))
  }, c.prototype.endSwiping = function (e) {
    var t = this;
    "y" == e && Math.abs(t.distanceY) > 50 ? (n.fancybox.animate(t.$slider, null, {
      top: t.sliderStartPos.top + t.distanceY + 150 * t.velocityY,
      left: t.sliderStartPos.left,
      opacity: 0
    }, t.speedY), t.instance.close(!0)) : "x" == e && t.distanceX > 50 ? t.instance.previous(t.speedX) : "x" == e && t.distanceX < -50 ? t.instance.next(t.speedX) : t.instance.update(!1, !0, 150)
  }, c.prototype.endPanning = function () {
    var e, t, i, o = this;
    o.contentLastPos && (e = o.contentLastPos.left + o.velocityX * o.speed * 2, t = o.contentLastPos.top + o.velocityY * o.speed * 2, i = o.limitPosition(e, t, o.contentStartPos.width, o.contentStartPos.height), i.width = o.contentStartPos.width, i.height = o.contentStartPos.height, n.fancybox.animate(o.$content, null, i, o.speed, "easeOutSine"))
  }, c.prototype.endZooming = function () {
    var e, t, i, o, r = this, s = r.instance.current, a = r.newWidth, l = r.newHeight;
    r.contentLastPos && (e = r.contentLastPos.left, t = r.contentLastPos.top, o = {
      top: t,
      left: e,
      width: a,
      height: l,
      scaleX: 1,
      scaleY: 1
    }, n.fancybox.setTranslate(r.$content, o), a < r.canvasWidth && l < r.canvasHeight ? r.instance.scaleToFit(150) : a > s.width || l > s.height ? r.instance.scaleToActual(r.centerPointStartX, r.centerPointStartY, 150) : (i = r.limitPosition(e, t, a, l), n.fancybox.animate(r.$content, null, i, r.speed, "easeOutSine")))
  }, c.prototype.ontap = function () {
    var e = this, t = e.instance, i = t.current, o = e.endPoints[0].x, r = e.endPoints[0].y;
    if (o -= e.$wrap.offset().left, r -= e.$wrap.offset().top, t.SlideShow && t.SlideShow.isActive && t.SlideShow.stop(), !n.fancybox.isTouch)return i.opts.closeClickOutside && e.$target.is(".fancybox-slide") ? void t.close(e.startEvent) : void("image" == i.type && i.isMoved && (t.canPan() ? t.scaleToFit() : t.isScaledDown() ? t.scaleToActual(o, r) : t.group.length < 2 && t.close(e.startEvent)));
    if (e.tapped) {
      if (clearTimeout(e.tapped), e.tapped = null, Math.abs(o - e.x) > 50 || Math.abs(r - e.y) > 50 || !i.isMoved)return this;
      "image" == i.type && (i.isLoaded || i.$ghost) && (t.canPan() ? t.scaleToFit() : t.isScaledDown() && t.scaleToActual(o, r))
    } else e.x = o, e.y = r, e.tapped = setTimeout(function () {
      e.tapped = null, t.toggleControls(!0)
    }, 300);
    return this
  }, n(t).on("onActivate.fb", function (e, t) {
    t && !t.Guestures && (t.Guestures = new c(t))
  }), n(t).on("beforeClose.fb", function (e, t) {
    t && t.Guestures && t.Guestures.destroy()
  })
}(window, document, window.jQuery), function (e, t) {
  "use strict";
  var n = function (e) {
    this.instance = e, this.init()
  };
  t.extend(n.prototype, {
    timer: null, isActive: !1, $button: null, speed: 3e3, init: function () {
      var e = this;
      e.$button = t('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(e.instance.$refs.buttons), e.instance.$refs.container.on("click", "[data-fancybox-play]", function () {
        e.toggle()
      })
    }, set: function () {
      var e = this;
      e.instance && e.instance.current && (e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function () {
        e.instance.next()
      }, e.instance.current.opts.slideShow.speed || e.speed) : e.stop()
    }, clear: function () {
      var e = this;
      clearTimeout(e.timer), e.timer = null
    }, start: function () {
      var e = this;
      e.stop(), e.instance && e.instance.current && (e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) && (e.instance.$refs.container.on({
        "beforeLoad.fb.player": t.proxy(e, "clear"),
        "onComplete.fb.player": t.proxy(e, "set")
      }), e.isActive = !0, e.instance.current.isComplete && e.set(), e.instance.$refs.container.trigger("onPlayStart"), e.$button.addClass("fancybox-button--pause"))
    }, stop: function () {
      var e = this;
      e.clear(), e.instance.$refs.container.trigger("onPlayEnd").off(".player"), e.$button.removeClass("fancybox-button--pause"), e.isActive = !1
    }, toggle: function () {
      var e = this;
      e.isActive ? e.stop() : e.start()
    }
  }), t(e).on("onInit.fb", function (e, t) {
    t && t.group.length > 1 && t.opts.slideShow && !t.SlideShow && (t.SlideShow = new n(t))
  }), t(e).on("beforeClose.fb onDeactivate.fb", function (e, t) {
    t && t.SlideShow && t.SlideShow.stop()
  })
}(document, window.jQuery), function (e, t) {
  "use strict";
  var n = function () {
    var t, n, i,
      o = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]],
      r = {};
    for (n = 0; n < o.length; n++)if ((t = o[n]) && t[1] in e) {
      for (i = 0; i < t.length; i++)r[o[0][i]] = t[i];
      return r
    }
    return !1
  }();
  if (n) {
    var i = {
      request: function (t) {
        t = t || e.documentElement, t[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
      }, exit: function () {
        e[n.exitFullscreen]()
      }, toggle: function (e) {
        this.isFullscreen() ? this.exit() : this.request(e)
      }, isFullscreen: function () {
        return Boolean(e[n.fullscreenElement])
      }, enabled: function () {
        return Boolean(e[n.fullscreenEnabled])
      }
    };
    t(e).on({
      "onInit.fb": function (e, n) {
        var o;
        n && n.opts.fullScreen && !n.FullScreen && (o = n.$refs.container, n.$refs.button_fs = t('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(n.$refs.buttons), o.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
          e.stopPropagation(), e.preventDefault(), i.toggle(o[0])
        }), !0 === n.opts.fullScreen.requestOnStart && i.request(o[0]))
      }, "beforeMove.fb": function (e, t) {
        t && t.$refs.button_fs && t.$refs.button_fs.toggle(!!t.current.opts.fullScreen)
      }, "beforeClose.fb": function () {
        i.exit()
      }
    }), t(e).on(n.fullscreenchange, function () {
      var e = t.fancybox.getInstance(), n = e ? e.current.$placeholder : null;
      n && (n.css("transition", "none"), e.isAnimating = !1, e.update(!0, !0, 0))
    })
  }
}(document, window.jQuery), function (e, t) {
  "use strict";
  var n = function (e) {
    this.instance = e, this.init()
  };
  t.extend(n.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: !1,
    init: function () {
      var e = this;
      e.$button = t('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on("touchend click", function (t) {
        t.stopPropagation(), t.preventDefault(), e.toggle()
      })
    },
    create: function () {
      var e, n, i = this.instance;
      this.$grid = t('<div class="fancybox-thumbs"></div>').appendTo(i.$refs.container), e = "<ul>", t.each(i.group, function (t, i) {
        n = i.opts.thumb || (i.opts.$thumb ? i.opts.$thumb.attr("src") : null), n || "image" !== i.type || (n = i.src), n && n.length && (e += '<li data-index="' + t + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
      }), e += "</ul>", this.$list = t(e).appendTo(this.$grid).on("click touchstart", "li", function () {
        i.jumpTo(t(this).data("index"))
      }), this.$list.find("img").hide().one("load", function () {
        var e, n, i, o, r = t(this).parent().removeClass("fancybox-thumbs-loading"),
          s = r.outerWidth(), a = r.outerHeight();
        e = this.naturalWidth || this.width, n = this.naturalHeight || this.height, i = e / s, o = n / a, i >= 1 && o >= 1 && (i > o ? (e /= o, n = a) : (e = s, n /= i)), t(this).css({
          width: Math.floor(e),
          height: Math.floor(n),
          "margin-top": Math.min(0, Math.floor(.3 * a - .3 * n)),
          "margin-left": Math.min(0, Math.floor(.5 * s - .5 * e))
        }).show()
      }).each(function () {
        this.src = t(this).data("src")
      })
    },
    focus: function () {
      this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
    },
    close: function () {
      this.$grid.hide()
    },
    update: function () {
      this.instance.$refs.container.toggleClass("fancybox-container--thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.$grid.show(), this.focus()) : this.$grid && this.$grid.hide(), this.instance.update()
    },
    hide: function () {
      this.isVisible = !1, this.update()
    },
    show: function () {
      this.isVisible = !0, this.update()
    },
    toggle: function () {
      this.isVisible ? this.hide() : this.show()
    }
  }), t(e).on("onInit.fb", function (e, t) {
    var i = t.group[0], o = t.group[1];
    t.opts.thumbs && !t.Thumbs && t.group.length > 1 && ("image" == i.type || i.opts.thumb || i.opts.$thumb) && ("image" == o.type || o.opts.thumb || o.opts.$thumb) && (t.Thumbs = new n(t))
  }), t(e).on("beforeMove.fb", function (e, t, n) {
    var i = t && t.Thumbs;
    i && (n.modal ? (i.$button.hide(), i.hide()) : (!0 === t.opts.thumbs.showOnStart && t.firstRun && i.show(), i.$button.show(), i.isVisible && i.focus()))
  }), t(e).on("beforeClose.fb", function (e, t) {
    t && t.Thumbs && (t.Thumbs.isVisible && !1 !== t.opts.thumbs.hideOnClosing && t.Thumbs.close(), t.Thumbs = null)
  })
}(document, window.jQuery), function (e, t, n) {
  "use strict";
  function i() {
    var e = t.location.hash.substr(1), n = e.split("-"),
      i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
      o = n.join("-");
    return i < 1 && (i = 1), {hash: e, index: i, gallery: o}
  }

  function o(e) {
    var t;
    "" !== e.gallery && (t = n("[data-fancybox='" + n.escapeSelector(e.gallery) + "']").eq(e.index - 1), t.length ? t.trigger("click") : n("#" + n.escapeSelector(e.gallery)).trigger("click"))
  }

  function r(e) {
    var t;
    return !!e && (t = e.current ? e.current.opts : e.opts, t.$orig ? t.$orig.data("fancybox") : t.hash || "")
  }

  n.escapeSelector || (n.escapeSelector = function (e) {
    return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    })
  });
  var s = null;
  n(function () {
    setTimeout(function () {
      !1 !== n.fancybox.defaults.hash && (n(t).on("hashchange.fb", function () {
        var e = i();
        n.fancybox.getInstance() ? s && s !== e.gallery + "-" + e.index && (s = null, n.fancybox.close()) : "" !== e.gallery && o(e)
      }), n(e).on({
        "onInit.fb": function (e, t) {
          var n = i(), o = r(t);
          o && n.gallery && o == n.gallery && (t.currIndex = n.index - 1)
        }, "beforeMove.fb": function (n, i, o) {
          var a = r(i);
          a && "" !== a && (t.location.hash.indexOf(a) < 0 && (i.opts.origHash = t.location.hash), s = a + (i.group.length > 1 ? "-" + (o.index + 1) : ""), "pushState" in history ? history.pushState("", e.title, t.location.pathname + t.location.search + "#" + s) : t.location.hash = s)
        }, "beforeClose.fb": function (n, i, o) {
          var a = r(i), l = i && i.opts.origHash ? i.opts.origHash : "";
          a && "" !== a && ("pushState" in history ? history.pushState("", e.title, t.location.pathname + t.location.search + l) : t.location.hash = l), s = null
        }
      }), o(i()))
    }, 50)
  })
}(document, window, window.jQuery), function (e) {
  window.Inputmask = function (e, t, n, i) {
    function o(t, n, s) {
      if (!(this instanceof o))return new o(t, n, s);
      this.el = i, this.events = {}, this.maskset = i, this.refreshValue = !1, !0 !== s && (e.isPlainObject(t) ? n = t : (n = n || {}, n.alias = t), this.opts = e.extend(!0, {}, this.defaults, n), this.noMasksCache = n && n.definitions !== i, this.userOptions = n || {}, this.isRTL = this.opts.numericInput, r(this.opts.alias, n, this.opts))
    }

    function r(t, n, s) {
      var a = o.prototype.aliases[t];
      return a ? (a.alias && r(a.alias, i, s), e.extend(!0, s, a), e.extend(!0, s, n), !0) : (null === s.mask && (s.mask = t), !1)
    }

    function s(t, n) {
      function r(t, r, s) {
        var a = !1;
        if (null !== t && "" !== t || (a = null !== s.regex, a ? (t = s.regex, t = t.replace(/^(\^)(.*)(\$)$/, "$2")) : t = "*{*}"), 1 === t.length && !1 === s.greedy && 0 !== s.repeat && (s.placeholder = ""), s.repeat > 0 || "*" === s.repeat || "+" === s.repeat) {
          var l = "*" === s.repeat ? 0 : "+" === s.repeat ? 1 : s.repeat;
          t = s.groupmarker.start + t + s.groupmarker.end + s.quantifiermarker.start + l + "," + s.repeat + s.quantifiermarker.end
        }
        var c;
        return o.prototype.masksCache[t] === i || !0 === n ? (c = {
          mask: t,
          maskToken: o.prototype.analyseMask(t, a, s),
          validPositions: {},
          _buffer: i,
          buffer: i,
          tests: {},
          metadata: r,
          maskLength: i
        }, !0 !== n && (o.prototype.masksCache[s.numericInput ? t.split("").reverse().join("") : t] = c, c = e.extend(!0, {}, o.prototype.masksCache[s.numericInput ? t.split("").reverse().join("") : t]))) : c = e.extend(!0, {}, o.prototype.masksCache[s.numericInput ? t.split("").reverse().join("") : t]), c
      }

      if (e.isFunction(t.mask) && (t.mask = t.mask(t)), e.isArray(t.mask)) {
        if (t.mask.length > 1) {
          t.keepStatic = null === t.keepStatic || t.keepStatic;
          var s = t.groupmarker.start;
          return e.each(t.numericInput ? t.mask.reverse() : t.mask, function (n, o) {
            s.length > 1 && (s += t.groupmarker.end + t.alternatormarker + t.groupmarker.start), o.mask === i || e.isFunction(o.mask) ? s += o : s += o.mask
          }), s += t.groupmarker.end, r(s, t.mask, t)
        }
        t.mask = t.mask.pop()
      }
      return t.mask && t.mask.mask !== i && !e.isFunction(t.mask.mask) ? r(t.mask.mask, t.mask, t) : r(t.mask, t.mask, t)
    }

    function a(r, s, l) {
      function f(e, t, n) {
        t = t || 0;
        var o, r, s, a = [], c = 0, u = g();
        -1 === (B = V !== i ? V.maxLength : i) && (B = i);
        do {
          !0 === e && h().validPositions[c] ? (s = h().validPositions[c], r = s.match, o = s.locator.slice(), a.push(!0 === n ? s.input : !1 === n ? r.nativeDef : D(c, r))) : (s = b(c, o, c - 1), r = s.match, o = s.locator.slice(), (!1 === l.jitMasking || c < u || "number" == typeof l.jitMasking && isFinite(l.jitMasking) && l.jitMasking > c) && a.push(!1 === n ? r.nativeDef : D(c, r))), c++
        } while ((B === i || c < B) && (null !== r.fn || "" !== r.def) || t > c);
        return "" === a[a.length - 1] && a.pop(), h().maskLength = c + 1, a
      }

      function h() {
        return s
      }

      function m(e) {
        var t = h();
        t.buffer = i, !0 !== e && (t.validPositions = {}, t.p = 0)
      }

      function g(e, t, n) {
        var o = -1, r = -1, s = n || h().validPositions;
        e === i && (e = -1);
        for (var a in s) {
          var l = parseInt(a);
          s[l] && (t || !0 !== s[l].generatedInput) && (l <= e && (o = l), l >= e && (r = l))
        }
        return -1 !== o && e - o > 1 || r < e ? o : r
      }

      function v(t, n, o, r) {
        var s, a = t, c = e.extend(!0, {}, h().validPositions), u = !1;
        for (h().p = t, s = n - 1; s >= a; s--)h().validPositions[s] !== i && (!0 !== o && (!h().validPositions[s].match.optionality && function (e) {
          var t = h().validPositions[e];
          if (t !== i && null === t.match.fn) {
            var n = h().validPositions[e - 1], o = h().validPositions[e + 1];
            return n !== i && o !== i
          }
          return !1
        }(s) || !1 === l.canClearPosition(h(), s, g(), r, l)) || delete h().validPositions[s]);
        for (m(!0), s = a + 1; s <= g();) {
          for (; h().validPositions[a] !== i;)a++;
          if (s < a && (s = a + 1), h().validPositions[s] === i && A(s)) s++; else {
            var d = b(s);
            !1 === u && c[a] && c[a].match.def === d.match.def ? (h().validPositions[a] = e.extend(!0, {}, c[a]), h().validPositions[a].input = d.input, delete h().validPositions[s], s++) : w(a, d.match.def) ? !1 !== P(a, d.input || D(s), !0) && (delete h().validPositions[s], s++, u = !0) : A(s) || (s++, a--), a++
          }
        }
        m(!0)
      }

      function y(e, t) {
        for (var n, o = e, r = g(), s = h().validPositions[r] || k(0)[0], a = s.alternation !== i ? s.locator[s.alternation].toString().split(",") : [], c = 0; c < o.length && (n = o[c], !(n.match && (l.greedy && !0 !== n.match.optionalQuantifier || (!1 === n.match.optionality || !1 === n.match.newBlockMarker) && !0 !== n.match.optionalQuantifier) && (s.alternation === i || s.alternation !== n.alternation || n.locator[s.alternation] !== i && E(n.locator[s.alternation].toString().split(","), a))) || !0 === t && (null !== n.match.fn || /[0-9a-bA-Z]/.test(n.match.def))); c++);
        return n
      }

      function b(e, t, n) {
        return h().validPositions[e] || y(k(e, t ? t.slice() : t, n))
      }

      function x(e) {
        return h().validPositions[e] ? h().validPositions[e] : k(e)[0]
      }

      function w(e, t) {
        for (var n = !1, i = k(e), o = 0; o < i.length; o++)if (i[o].match && i[o].match.def === t) {
          n = !0;
          break
        }
        return n
      }

      function k(t, n, o) {
        function r(n, o, s, c) {
          function d(s, c, g) {
            function v(t, n) {
              var i = 0 === e.inArray(t, n.matches);
              return i || e.each(n.matches, function (e, o) {
                if (!0 === o.isQuantifier && (i = v(t, n.matches[e - 1])))return !1
              }), i
            }

            function y(t, n, o) {
              var r, s;
              return (h().tests[t] || h().validPositions[t]) && e.each(h().tests[t] || [h().validPositions[t]], function (e, t) {
                var a = o !== i ? o : t.alternation,
                  l = t.locator[a] !== i ? t.locator[a].toString().indexOf(n) : -1;
                (s === i || l < s) && -1 !== l && (r = t, s = l)
              }), r ? r.locator.slice((o !== i ? o : r.alternation) + 1) : o !== i ? y(t, n) : i
            }

            if (u > 1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + h().mask;
            if (u === t && s.matches === i)return p.push({
              match: s,
              locator: c.reverse(),
              cd: m
            }), !0;
            if (s.matches !== i) {
              if (s.isGroup && g !== s) {
                if (s = d(n.matches[e.inArray(s, n.matches) + 1], c))return !0
              } else if (s.isOptional) {
                var b = s;
                if (s = r(s, o, c, g)) {
                  if (a = p[p.length - 1].match, !v(a, b))return !0;
                  f = !0, u = t
                }
              } else if (s.isAlternator) {
                var x, w = s, k = [], T = p.slice(), S = c.length,
                  C = o.length > 0 ? o.shift() : -1;
                if (-1 === C || "string" == typeof C) {
                  var $, E = u, P = o.slice(), A = [];
                  if ("string" == typeof C) A = C.split(","); else for ($ = 0; $ < w.matches.length; $++)A.push($);
                  for (var _ = 0; _ < A.length; _++) {
                    if ($ = parseInt(A[_]), p = [], o = y(u, $, S) || P.slice(), !0 !== (s = d(w.matches[$] || n.matches[$], [$].concat(c), g) || s) && s !== i && A[A.length - 1] < w.matches.length) {
                      var L = e.inArray(s, n.matches) + 1;
                      n.matches.length > L && (s = d(n.matches[L], [L].concat(c.slice(1, c.length)), g)) && (A.push(L.toString()), e.each(p, function (e, t) {
                        t.alternation = c.length - 1
                      }))
                    }
                    x = p.slice(), u = E, p = [];
                    for (var O = 0; O < x.length; O++) {
                      var M = x[O], D = !1;
                      M.alternation = M.alternation || S;
                      for (var I = 0; I < k.length; I++) {
                        var R = k[I];
                        if ("string" != typeof C || -1 !== e.inArray(M.locator[M.alternation].toString(), A)) {
                          if (M.match.nativeDef === R.match.nativeDef || M.match.def === R.match.nativeDef || M.match.nativeDef === R.match.def) {
                            D = !0, M.alternation == R.alternation && -1 === R.locator[R.alternation].toString().indexOf(M.locator[M.alternation]) && (R.locator[R.alternation] = R.locator[R.alternation] + "," + M.locator[M.alternation], R.alternation = M.alternation), M.match.nativeDef === R.match.def && (M.locator[M.alternation] = R.locator[R.alternation], k.splice(k.indexOf(R), 1, M));
                            break
                          }
                          if (M.match.def === R.match.def) {
                            D = !1;
                            break
                          }
                          if (function (e, n) {
                              return null === e.match.fn && null !== n.match.fn && n.match.fn.test(e.match.def, h(), t, !1, l, !1)
                            }(M, R)) {
                            M.alternation == R.alternation && -1 === M.locator[M.alternation].toString().indexOf(R.locator[R.alternation].toString().split("")[0]) && (M.na = M.na || M.locator[M.alternation].toString(), -1 === M.na.indexOf(M.locator[M.alternation].toString().split("")[0]) && (M.na = M.na + "," + M.locator[R.alternation].toString().split("")[0]), D = !0, M.locator[M.alternation] = R.locator[R.alternation].toString().split("")[0] + "," + M.locator[M.alternation], k.splice(k.indexOf(R), 0, M));
                            break
                          }
                        }
                      }
                      D || k.push(M)
                    }
                  }
                  "string" == typeof C && (k = e.map(k, function (t, n) {
                    if (isFinite(n)) {
                      var o = t.alternation, r = t.locator[o].toString().split(",");
                      t.locator[o] = i, t.alternation = i;
                      for (var s = 0; s < r.length; s++)-1 !== e.inArray(r[s], A) && (t.locator[o] !== i ? (t.locator[o] += ",", t.locator[o] += r[s]) : t.locator[o] = parseInt(r[s]), t.alternation = o);
                      if (t.locator[o] !== i)return t
                    }
                  })), p = T.concat(k), u = t, f = p.length > 0, o = P.slice()
                } else s = d(w.matches[C] || n.matches[C], [C].concat(c), g);
                if (s)return !0
              } else if (s.isQuantifier && g !== n.matches[e.inArray(s, n.matches) - 1])for (var j = s, N = o.length > 0 ? o.shift() : 0; N < (isNaN(j.quantifier.max) ? N + 1 : j.quantifier.max) && u <= t; N++) {
                var F = n.matches[e.inArray(j, n.matches) - 1];
                if (s = d(F, [N].concat(c), F)) {
                  if (a = p[p.length - 1].match, a.optionalQuantifier = N > j.quantifier.min - 1, v(a, F)) {
                    if (N > j.quantifier.min - 1) {
                      f = !0, u = t;
                      break
                    }
                    return !0
                  }
                  return !0
                }
              } else if (s = r(s, o, c, g))return !0
            } else u++
          }

          for (var g = o.length > 0 ? o.shift() : 0; g < n.matches.length; g++)if (!0 !== n.matches[g].isQuantifier) {
            var v = d(n.matches[g], [g].concat(s), c);
            if (v && u === t)return v;
            if (u > t)break
          }
        }

        function s(e) {
          return l.keepStatic && t > 0 && e.length > 1 + ("" === e[e.length - 1].match.def ? 1 : 0) && !0 !== e[0].match.optionality && !0 !== e[0].match.optionalQuantifier && null === e[0].match.fn && !/[0-9a-bA-Z]/.test(e[0].match.def) ? [y(e)] : e
        }

        var a, c = h().maskToken, u = n ? o : 0, d = n ? n.slice() : [0], p = [], f = !1,
          m = n ? n.join("") : "";
        if (t > -1) {
          if (n === i) {
            for (var g, v = t - 1; (g = h().validPositions[v] || h().tests[v]) === i && v > -1;)v--;
            g !== i && v > -1 && (d = function (t) {
              var n = [];
              return e.isArray(t) || (t = [t]), t.length > 0 && (t[0].alternation === i ? (n = y(t.slice()).locator.slice(), 0 === n.length && (n = t[0].locator.slice())) : e.each(t, function (e, t) {
                if ("" !== t.def)if (0 === n.length) n = t.locator.slice(); else for (var i = 0; i < n.length; i++)t.locator[i] && -1 === n[i].toString().indexOf(t.locator[i]) && (n[i] += "," + t.locator[i])
              })), n
            }(g), m = d.join(""), u = v)
          }
          if (h().tests[t] && h().tests[t][0].cd === m)return s(h().tests[t]);
          for (var b = d.shift(); b < c.length && !(r(c[b], d, [b]) && u === t || u > t); b++);
        }
        return (0 === p.length || f) && p.push({
          match: {
            fn: null,
            cardinality: 0,
            optionality: !0,
            casing: null,
            def: "",
            placeholder: ""
          }, locator: [], cd: m
        }), n !== i && h().tests[t] ? s(e.extend(!0, [], p)) : (h().tests[t] = e.extend(!0, [], p), s(h().tests[t]))
      }

      function T() {
        return h()._buffer === i && (h()._buffer = f(!1, 1), h().buffer === i && (h().buffer = h()._buffer.slice())), h()._buffer
      }

      function S(e) {
        return h().buffer !== i && !0 !== e || (h().buffer = f(!0, g(), !0)), h().buffer
      }

      function C(e, t, n) {
        var o, r;
        if (!0 === e) m(), e = 0, t = n.length; else for (o = e; o < t; o++)delete h().validPositions[o];
        for (r = e, o = e; o < t; o++)if (m(!0), n[o] !== l.skipOptionalPartCharacter) {
          var s = P(r, n[o], !0, !0);
          !1 !== s && (m(!0), r = s.caret !== i ? s.caret : s.pos + 1)
        }
      }

      function $(e, t, n) {
        switch (l.casing || t.casing) {
          case"upper":
            e = e.toUpperCase();
            break;
          case"lower":
            e = e.toLowerCase();
            break;
          case"title":
            var i = h().validPositions[n - 1];
            e = 0 === n || i && i.input === String.fromCharCode(o.keyCode.SPACE) ? e.toUpperCase() : e.toLowerCase()
        }
        return e
      }

      function E(t, n, o) {
        for (var r, s = l.greedy ? n : n.slice(0, 1), a = !1, c = o !== i ? o.split(",") : [], u = 0; u < c.length; u++)-1 !== (r = t.indexOf(c[u])) && t.splice(r, 1);
        for (var d = 0; d < t.length; d++)if (-1 !== e.inArray(t[d], s)) {
          a = !0;
          break
        }
        return a
      }

      function P(t, n, r, s, a) {
        function c(e) {
          var t = K ? e.begin - e.end > 1 || e.begin - e.end == 1 : e.end - e.begin > 1 || e.end - e.begin == 1;
          return t && 0 === e.begin && e.end === h().maskLength ? "full" : t
        }

        function u(n, o, r) {
          var a = !1;
          return e.each(k(n), function (u, p) {
            for (var f = p.match, y = o ? 1 : 0, b = "", x = f.cardinality; x > y; x--)b += O(n - (x - 1));
            if (o && (b += o), S(!0), !1 !== (a = null != f.fn ? f.fn.test(b, h(), n, r, l, c(t)) : (o === f.def || o === l.skipOptionalPartCharacter) && "" !== f.def && {
                  c: D(n, f, !0) || f.def,
                  pos: n
                })) {
              var w = a.c !== i ? a.c : o;
              w = w === l.skipOptionalPartCharacter && null === f.fn ? D(n, f, !0) || f.def : w;
              var k = n, T = S();
              if (a.remove !== i && (e.isArray(a.remove) || (a.remove = [a.remove]), e.each(a.remove.sort(function (e, t) {
                  return t - e
                }), function (e, t) {
                  v(t, t + 1, !0)
                })), a.insert !== i && (e.isArray(a.insert) || (a.insert = [a.insert]), e.each(a.insert.sort(function (e, t) {
                  return e - t
                }), function (e, t) {
                  P(t.pos, t.c, !0, s)
                })), a.refreshFromBuffer) {
                var E = a.refreshFromBuffer;
                if (C(!0 === E ? E : E.start, E.end, T), a.pos === i && a.c === i)return a.pos = g(), !1;
                if ((k = a.pos !== i ? a.pos : n) !== n)return a = e.extend(a, P(k, w, !0, s)), !1
              } else if (!0 !== a && a.pos !== i && a.pos !== n && (k = a.pos, C(n, k, S().slice()), k !== n))return a = e.extend(a, P(k, w, !0)), !1;
              return (!0 === a || a.pos !== i || a.c !== i) && (u > 0 && m(!0), d(k, e.extend({}, p, {input: $(w, f, k)}), s, c(t)) || (a = !1), !1)
            }
          }), a
        }

        function d(t, n, o, r) {
          if (r || l.insertMode && h().validPositions[t] !== i && o === i) {
            var s, a = e.extend(!0, {}, h().validPositions), c = g(i, !0);
            for (s = t; s <= c; s++)delete h().validPositions[s];
            h().validPositions[t] = e.extend(!0, {}, n);
            var u, d = !0, f = h().validPositions, v = !1, y = h().maskLength;
            for (s = u = t; s <= c; s++) {
              var b = a[s];
              if (b !== i)for (var x = u; x < h().maskLength && (null === b.match.fn && f[s] && (!0 === f[s].match.optionalQuantifier || !0 === f[s].match.optionality) || null != b.match.fn);) {
                if (x++, !1 === v && a[x] && a[x].match.def === b.match.def) h().validPositions[x] = e.extend(!0, {}, a[x]), h().validPositions[x].input = b.input, p(x), u = x, d = !0; else if (w(x, b.match.def)) {
                  var k = P(x, b.input, !0, !0);
                  d = !1 !== k, u = k.caret || k.insert ? g() : x, v = !0
                } else if (!(d = !0 === b.generatedInput) && x >= h().maskLength - 1)break;
                if (h().maskLength < y && (h().maskLength = y), d)break
              }
              if (!d)break
            }
            if (!d)return h().validPositions = e.extend(!0, {}, a), m(!0), !1
          } else h().validPositions[t] = e.extend(!0, {}, n);
          return m(!0), !0
        }

        function p(t) {
          for (var n = t - 1; n > -1 && !h().validPositions[n]; n--);
          var o, r;
          for (n++; n < t; n++)h().validPositions[n] === i && (!1 === l.jitMasking || l.jitMasking > n) && (r = k(n, b(n - 1).locator, n - 1).slice(), "" === r[r.length - 1].match.def && r.pop(), (o = y(r)) && (o.match.def === l.radixPointDefinitionSymbol || !A(n, !0) || e.inArray(l.radixPoint, S()) < n && o.match.fn && o.match.fn.test(D(n), h(), n, !1, l)) && !1 !== (x = u(n, D(n, o.match, !0) || (null == o.match.fn ? o.match.def : "" !== D(n) ? D(n) : S()[n]), !0)) && (h().validPositions[x.pos || n].generatedInput = !0))
        }

        r = !0 === r;
        var f = t;
        t.begin !== i && (f = K && !c(t) ? t.end : t.begin);
        var x = !0, T = e.extend(!0, {}, h().validPositions);
        if (e.isFunction(l.preValidation) && !r && !0 !== s && (x = l.preValidation(S(), f, n, c(t), l)), !0 === x) {
          if (p(f), c(t) && (W(i, o.keyCode.DELETE, t), f = h().p), f < h().maskLength && (x = u(f, n, r), (!r || !0 === s) && !1 === x)) {
            var L = h().validPositions[f];
            if (!L || null !== L.match.fn || L.match.def !== n && n !== l.skipOptionalPartCharacter) {
              if ((l.insertMode || h().validPositions[_(f)] === i) && !A(f, !0))for (var M = f + 1, I = _(f); M <= I; M++)if (!1 !== (x = u(M, n, r))) {
                !function (t, n) {
                  var o = h().validPositions[n];
                  if (o)for (var r = o.locator, s = r.length, a = t; a < n; a++)if (h().validPositions[a] === i && !A(a, !0)) {
                    var l = k(a).slice(), c = y(l, !0), p = -1;
                    "" === l[l.length - 1].match.def && l.pop(), e.each(l, function (e, t) {
                      for (var n = 0; n < s; n++) {
                        if (t.locator[n] === i || !E(t.locator[n].toString().split(","), r[n].toString().split(","), t.na)) {
                          var o = r[n], a = c.locator[n], l = t.locator[n];
                          o - a > Math.abs(o - l) && (c = t);
                          break
                        }
                        p < n && (p = n, c = t)
                      }
                    }), c = e.extend({}, c, {input: D(a, c.match, !0) || c.match.def}), c.generatedInput = !0, d(a, c, !0), h().validPositions[n] = i, u(n, o.input, !0)
                  }
                }(f, x.pos !== i ? x.pos : M), f = M;
                break
              }
            } else x = {caret: _(f)}
          }
          !1 === x && l.keepStatic && !r && !0 !== a && (x = function (t, n, o) {
            var r, a, c, u, d, p, f, v, y = e.extend(!0, {}, h().validPositions), b = !1, x = g();
            for (u = h().validPositions[x]; x >= 0; x--)if ((c = h().validPositions[x]) && c.alternation !== i) {
              if (r = x, a = h().validPositions[r].alternation, u.locator[c.alternation] !== c.locator[c.alternation])break;
              u = c
            }
            if (a !== i) {
              v = parseInt(r);
              var w = u.locator[u.alternation || a] !== i ? u.locator[u.alternation || a] : f[0];
              w.length > 0 && (w = w.split(",")[0]);
              var T = h().validPositions[v], S = h().validPositions[v - 1];
              e.each(k(v, S ? S.locator : i, v - 1), function (r, c) {
                f = c.locator[a] ? c.locator[a].toString().split(",") : [];
                for (var u = 0; u < f.length; u++) {
                  var x = [], k = 0, S = 0, C = !1;
                  if (w < f[u] && (c.na === i || -1 === e.inArray(f[u], c.na.split(",")) || -1 === e.inArray(w.toString(), f))) {
                    h().validPositions[v] = e.extend(!0, {}, c);
                    var $ = h().validPositions[v].locator;
                    for (h().validPositions[v].locator[a] = parseInt(f[u]), null == c.match.fn ? (T.input !== c.match.def && (C = !0, !0 !== T.generatedInput && x.push(T.input)), S++, h().validPositions[v].generatedInput = !/[0-9a-bA-Z]/.test(c.match.def), h().validPositions[v].input = c.match.def) : h().validPositions[v].input = T.input, d = v + 1; d < g(i, !0) + 1; d++)p = h().validPositions[d], p && !0 !== p.generatedInput && /[0-9a-bA-Z]/.test(p.input) ? x.push(p.input) : d < t && k++, delete h().validPositions[d];
                    for (C && x[0] === c.match.def && x.shift(), m(!0), b = !0; x.length > 0;) {
                      var E = x.shift();
                      if (E !== l.skipOptionalPartCharacter && !(b = P(g(i, !0) + 1, E, !1, s, !0)))break
                    }
                    if (b) {
                      h().validPositions[v].locator = $;
                      var A = g(t) + 1;
                      for (d = v + 1; d < g() + 1; d++)((p = h().validPositions[d]) === i || null == p.match.fn) && d < t + (S - k) && S++;
                      t += S - k, b = P(t > A ? A : t, n, o, s, !0)
                    }
                    if (b)return !1;
                    m(), h().validPositions = e.extend(!0, {}, y)
                  }
                }
              })
            }
            return b
          }(f, n, r)), !0 === x && (x = {pos: f})
        }
        if (e.isFunction(l.postValidation) && !1 !== x && !r && !0 !== s) {
          var R = l.postValidation(S(!0), x, l);
          if (R.refreshFromBuffer && R.buffer) {
            var j = R.refreshFromBuffer;
            C(!0 === j ? j : j.start, j.end, R.buffer)
          }
          x = !0 === R ? x : R
        }
        return x.pos === i && (x.pos = f), !1 === x && (m(!0), h().validPositions = e.extend(!0, {}, T)), x
      }

      function A(e, t) {
        var n = b(e).match;
        if ("" === n.def && (n = x(e).match), null != n.fn)return n.fn;
        if (!0 !== t && e > -1) {
          var i = k(e);
          return i.length > 1 + ("" === i[i.length - 1].match.def ? 1 : 0)
        }
        return !1
      }

      function _(e, t) {
        var n = h().maskLength;
        if (e >= n)return n;
        for (var i = e; ++i < n && (!0 === t && (!0 !== x(i).match.newBlockMarker || !A(i)) || !0 !== t && !A(i)););
        return i
      }

      function L(e, t) {
        var n, i = e;
        if (i <= 0)return 0;
        for (; --i > 0 && (!0 === t && !0 !== x(i).match.newBlockMarker || !0 !== t && !A(i) && (n = k(i), n.length < 2 || 2 === n.length && "" === n[1].match.def)););
        return i
      }

      function O(e) {
        return h().validPositions[e] === i ? D(e) : h().validPositions[e].input
      }

      function M(t, n, o, r, s) {
        if (r && e.isFunction(l.onBeforeWrite)) {
          var a = l.onBeforeWrite(r, n, o, l);
          if (a) {
            if (a.refreshFromBuffer) {
              var c = a.refreshFromBuffer;
              C(!0 === c ? c : c.start, c.end, a.buffer || n), n = S(!0)
            }
            o !== i && (o = a.caret !== i ? a.caret : o)
          }
        }
        t !== i && (t.inputmask._valueSet(n.join("")), o === i || r !== i && "blur" === r.type ? Y(t, n, o) : p && "input" === r.type ? setTimeout(function () {
          j(t, o)
        }, 0) : j(t, o), !0 === s && (Z = !0, e(t).trigger("input")))
      }

      function D(t, n, o) {
        if (n = n || x(t).match, n.placeholder !== i || !0 === o)return e.isFunction(n.placeholder) ? n.placeholder(l) : n.placeholder;
        if (null === n.fn) {
          if (t > -1 && h().validPositions[t] === i) {
            var r, s = k(t), a = [];
            if (s.length > 1 + ("" === s[s.length - 1].match.def ? 1 : 0))for (var c = 0; c < s.length; c++)if (!0 !== s[c].match.optionality && !0 !== s[c].match.optionalQuantifier && (null === s[c].match.fn || r === i || !1 !== s[c].match.fn.test(r.match.def, h(), t, !0, l)) && (a.push(s[c]), null === s[c].match.fn && (r = s[c]), a.length > 1 && /[0-9a-bA-Z]/.test(a[0].match.def)))return l.placeholder.charAt(t % l.placeholder.length)
          }
          return n.def
        }
        return l.placeholder.charAt(t % l.placeholder.length)
      }

      function I(t, r, s, a, c) {
        function u(e, t) {
          return -1 !== T().slice(e, _(e)).join("").indexOf(t) && !A(e) && x(e).match.nativeDef === t.charAt(t.length - 1)
        }

        var d = a.slice(), p = "", f = 0, v = i;
        if (m(), h().p = _(-1), !s)if (!0 !== l.autoUnmask) {
          var y = T().slice(0, _(-1)).join(""),
            w = d.join("").match(new RegExp("^" + o.escapeRegex(y), "g"));
          w && w.length > 0 && (d.splice(0, w.length * y.length), f = _(f))
        } else f = _(f);
        if (e.each(d, function (n, o) {
            if (o !== i) {
              var r = new e.Event("_checkval");
              r.which = o.charCodeAt(0), p += o;
              var a = g(i, !0), c = h().validPositions[a],
                d = b(a + 1, c ? c.locator.slice() : i, a);
              if (!u(f, p) || s || l.autoUnmask) {
                var y = s ? n : null == d.match.fn && d.match.optionality && a + 1 < h().p ? a + 1 : h().p;
                v = ne.keypressEvent.call(t, r, !0, !1, s, y), f = y + 1, p = ""
              } else v = ne.keypressEvent.call(t, r, !0, !1, !0, a + 1);
              if (!s && e.isFunction(l.onBeforeWrite)) {
                var x = v.forwardPosition;
                if (v = l.onBeforeWrite(r, S(), v.forwardPosition, l), v.forwardPosition = x, v && v.refreshFromBuffer) {
                  var w = v.refreshFromBuffer;
                  C(!0 === w ? w : w.start, w.end, v.buffer), m(!0), v.caret && (h().p = v.caret, v.forwardPosition = v.caret)
                }
              }
            }
          }), r) {
          var k = i;
          n.activeElement === t && v && (k = l.numericInput ? L(v.forwardPosition) : v.forwardPosition), M(t, S(), k, c || new e.Event("checkval"), c && "input" === c.type)
        }
      }

      function R(t) {
        if (t) {
          if (t.inputmask === i)return t.value;
          t.inputmask && t.inputmask.refreshValue && ne.setValueEvent.call(t)
        }
        var n = [], o = h().validPositions;
        for (var r in o)o[r].match && null != o[r].match.fn && n.push(o[r].input);
        var s = 0 === n.length ? "" : (K ? n.reverse() : n).join("");
        if (e.isFunction(l.onUnMask)) {
          var a = (K ? S().slice().reverse() : S()).join("");
          s = l.onUnMask(a, s, l)
        }
        return s
      }

      function j(e, o, r, s) {
        function a(e) {
          return !0 === s || !K || "number" != typeof e || l.greedy && "" === l.placeholder || (e = S().join("").length - e), e
        }

        var u;
        if ("number" != typeof o)return e.setSelectionRange ? (o = e.selectionStart, r = e.selectionEnd) : t.getSelection ? (u = t.getSelection().getRangeAt(0), u.commonAncestorContainer.parentNode !== e && u.commonAncestorContainer !== e || (o = u.startOffset, r = u.endOffset)) : n.selection && n.selection.createRange && (u = n.selection.createRange(), o = 0 - u.duplicate().moveStart("character", -e.inputmask._valueGet().length), r = o + u.text.length), {
          begin: a(o),
          end: a(r)
        };
        o = a(o), r = a(r), r = "number" == typeof r ? r : o;
        var d = parseInt(((e.ownerDocument.defaultView || t).getComputedStyle ? (e.ownerDocument.defaultView || t).getComputedStyle(e, null) : e.currentStyle).fontSize) * r;
        if (e.scrollLeft = d > e.scrollWidth ? d : 0, c || !1 !== l.insertMode || o !== r || r++, e.setSelectionRange) e.selectionStart = o, e.selectionEnd = r; else if (t.getSelection) {
          if (u = n.createRange(), e.firstChild === i || null === e.firstChild) {
            var p = n.createTextNode("");
            e.appendChild(p)
          }
          u.setStart(e.firstChild, o < e.inputmask._valueGet().length ? o : e.inputmask._valueGet().length), u.setEnd(e.firstChild, r < e.inputmask._valueGet().length ? r : e.inputmask._valueGet().length), u.collapse(!0);
          var f = t.getSelection();
          f.removeAllRanges(), f.addRange(u)
        } else e.createTextRange && (u = e.createTextRange(), u.collapse(!0), u.moveEnd("character", r), u.moveStart("character", o), u.select());
        Y(e, i, {begin: o, end: r})
      }

      function N(t) {
        var n, o, r = S(), s = r.length, a = g(), l = {}, c = h().validPositions[a],
          u = c !== i ? c.locator.slice() : i;
        for (n = a + 1; n < r.length; n++)o = b(n, u, n - 1), u = o.locator.slice(), l[n] = e.extend(!0, {}, o);
        var d = c && c.alternation !== i ? c.locator[c.alternation] : i;
        for (n = s - 1; n > a && (o = l[n], (o.match.optionality || o.match.optionalQuantifier || d && (d !== l[n].locator[c.alternation] && null != o.match.fn || null === o.match.fn && o.locator[c.alternation] && E(o.locator[c.alternation].toString().split(","), d.toString().split(",")) && "" !== k(n)[0].def)) && r[n] === D(n, o.match)); n--)s--;
        return t ? {l: s, def: l[s] ? l[s].match : i} : s
      }

      function F(e) {
        for (var t, n = N(), i = e.length; n < i && !A(n + 1) && (t = x(n + 1)) && !0 !== t.match.optionality && !0 !== t.match.optionalQuantifier;)n++;
        for (; (t = x(n - 1)) && t.match.optionality && t.input === l.skipOptionalPartCharacter;)n--;
        return e.splice(n), e
      }

      function H(t) {
        if (e.isFunction(l.isComplete))return l.isComplete(t, l);
        if ("*" === l.repeat)return i;
        var n = !1, o = N(!0), r = L(o.l);
        if (o.def === i || o.def.newBlockMarker || o.def.optionality || o.def.optionalQuantifier) {
          n = !0;
          for (var s = 0; s <= r; s++) {
            var a = b(s).match;
            if (null !== a.fn && h().validPositions[s] === i && !0 !== a.optionality && !0 !== a.optionalQuantifier || null === a.fn && t[s] !== D(s, a)) {
              n = !1;
              break
            }
          }
        }
        return n
      }

      function W(t, n, r, s) {
        if ((l.numericInput || K) && (n === o.keyCode.BACKSPACE ? n = o.keyCode.DELETE : n === o.keyCode.DELETE && (n = o.keyCode.BACKSPACE), K)) {
          var a = r.end;
          r.end = r.begin, r.begin = a
        }
        n === o.keyCode.BACKSPACE && (r.end - r.begin < 1 || !1 === l.insertMode) ? (r.begin = L(r.begin), h().validPositions[r.begin] === i || h().validPositions[r.begin].input !== l.groupSeparator && h().validPositions[r.begin].input !== l.radixPoint || r.begin--) : n === o.keyCode.DELETE && r.begin === r.end && (r.end = A(r.end, !0) ? r.end + 1 : _(r.end) + 1, h().validPositions[r.begin] === i || h().validPositions[r.begin].input !== l.groupSeparator && h().validPositions[r.begin].input !== l.radixPoint || r.end++), v(r.begin, r.end, !1, s), !0 !== s && function () {
          if (l.keepStatic) {
            for (var n = [], o = g(-1, !0), r = e.extend(!0, {}, h().validPositions), s = h().validPositions[o]; o >= 0; o--) {
              var a = h().validPositions[o];
              if (a) {
                if (!0 !== a.generatedInput && /[0-9a-bA-Z]/.test(a.input) && n.push(a.input), delete h().validPositions[o], a.alternation !== i && a.locator[a.alternation] !== s.locator[a.alternation])break;
                s = a
              }
            }
            if (o > -1)for (h().p = _(g(-1, !0)); n.length > 0;) {
              var c = new e.Event("keypress");
              c.which = n.pop().charCodeAt(0), ne.keypressEvent.call(t, c, !0, !1, !1, h().p)
            } else h().validPositions = e.extend(!0, {}, r)
          }
        }();
        var c = g(r.begin, !0);
        c < r.begin ? h().p = _(c) : !0 !== s && (h().p = r.begin)
      }

      function z(i) {
        function o(e) {
          var t, o = n.createElement("span");
          for (var r in a)isNaN(r) && -1 !== r.indexOf("font") && (o.style[r] = a[r]);
          o.style.textTransform = a.textTransform, o.style.letterSpacing = a.letterSpacing, o.style.position = "absolute", o.style.height = "auto", o.style.width = "auto", o.style.visibility = "hidden", o.style.whiteSpace = "nowrap", n.body.appendChild(o);
          var s, l = i.inputmask._valueGet(), c = 0;
          for (t = 0, s = l.length; t <= s; t++) {
            if (o.innerHTML += l.charAt(t) || "_", o.offsetWidth >= e) {
              var u = e - c, d = o.offsetWidth - e;
              o.innerHTML = l.charAt(t), u -= o.offsetWidth / 3, t = u < d ? t - 1 : t;
              break
            }
            c = o.offsetWidth
          }
          return n.body.removeChild(o), t
        }

        function r() {
          U.style.position = "absolute", U.style.top = s.top + "px", U.style.left = s.left + "px", U.style.width = parseInt(i.offsetWidth) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth) + "px", U.style.height = parseInt(i.offsetHeight) - parseInt(a.paddingTop) - parseInt(a.paddingBottom) - parseInt(a.borderTopWidth) - parseInt(a.borderBottomWidth) + "px", U.style.lineHeight = U.style.height, U.style.zIndex = isNaN(a.zIndex) ? -1 : a.zIndex - 1, U.style.webkitAppearance = "textfield", U.style.mozAppearance = "textfield", U.style.Appearance = "textfield"
        }

        var s = e(i).position(), a = (i.ownerDocument.defaultView || t).getComputedStyle(i, null);
        i.parentNode, U = n.createElement("div"), n.body.appendChild(U);
        for (var c in a)a.hasOwnProperty(c) && isNaN(c) && "cssText" !== c && -1 == c.indexOf("webkit") && (U.style[c] = a[c]);
        i.style.backgroundColor = "transparent", i.style.color = "transparent", i.style.webkitAppearance = "caret", i.style.mozAppearance = "caret", i.style.Appearance = "caret", r(), e(t).on("resize", function (n) {
          s = e(i).position(), a = (i.ownerDocument.defaultView || t).getComputedStyle(i, null), r()
        }), e(i).on("click", function (e) {
          return j(i, o(e.clientX)), ne.clickEvent.call(this, [e])
        }), e(i).on("keydown", function (e) {
          e.shiftKey || !1 === l.insertMode || setTimeout(function () {
            Y(i)
          }, 0)
        })
      }

      function Y(e, t, o) {
        function r() {
          a || null !== u.fn && d.input !== i ? a && null !== u.fn && d.input !== i && (a = !1, s += "</span>") : (a = !0, s += "<span class='im-static''>")
        }

        if (U !== i) {
          t = t || S(), o === i ? o = j(e) : o.begin === i && (o = {begin: o, end: o});
          var s = "", a = !1;
          if ("" != t) {
            var c, u, d, p = 0, f = g();
            do {
              p === o.begin && n.activeElement === e && (s += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"), h().validPositions[p] ? (d = h().validPositions[p], u = d.match, c = d.locator.slice(), r(), s += d.input) : (d = b(p, c, p - 1), u = d.match, c = d.locator.slice(), (!1 === l.jitMasking || p < f || "number" == typeof l.jitMasking && isFinite(l.jitMasking) && l.jitMasking > p) && (r(), s += D(p, u))), p++
            } while ((B === i || p < B) && (null !== u.fn || "" !== u.def) || f > p)
          }
          U.innerHTML = s
        }
      }

      s = s || this.maskset, l = l || this.opts;
      var X, q, B, U, G, V = this.el, K = this.isRTL, Q = !1, Z = !1, J = !1, ee = !1, te = {
        on: function (t, n, r) {
          var s = function (t) {
            if (this.inputmask === i && "FORM" !== this.nodeName) {
              var n = e.data(this, "_inputmask_opts");
              n ? new o(n).mask(this) : te.off(this)
            } else {
              if ("setvalue" === t.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === l.tabThrough && t.keyCode === o.keyCode.TAB))) {
                switch (t.type) {
                  case"input":
                    if (!0 === Z)return Z = !1, t.preventDefault();
                    break;
                  case"keydown":
                    Q = !1, Z = !1;
                    break;
                  case"keypress":
                    if (!0 === Q)return t.preventDefault();
                    Q = !0;
                    break;
                  case"click":
                    var s = this, a = arguments;
                    return setTimeout(function () {
                      r.apply(s, a)
                    }, 0), !1
                }
                var c = r.apply(this, arguments);
                return !1 === c && (t.preventDefault(), t.stopPropagation()), c
              }
              t.preventDefault()
            }
          };
          t.inputmask.events[n] = t.inputmask.events[n] || [], t.inputmask.events[n].push(s), -1 !== e.inArray(n, ["submit", "reset"]) ? null != t.form && e(t.form).on(n, s) : e(t).on(n, s)
        }, off: function (t, n) {
          if (t.inputmask && t.inputmask.events) {
            var i;
            n ? (i = [], i[n] = t.inputmask.events[n]) : i = t.inputmask.events, e.each(i, function (n, i) {
              for (; i.length > 0;) {
                var o = i.pop();
                -1 !== e.inArray(n, ["submit", "reset"]) ? null != t.form && e(t.form).off(n, o) : e(t).off(n, o)
              }
              delete t.inputmask.events[n]
            })
          }
        }
      }, ne = {
        keydownEvent: function (t) {
          var i = this, r = e(i), s = t.keyCode, a = j(i);
          if (s === o.keyCode.BACKSPACE || s === o.keyCode.DELETE || d && s === o.keyCode.BACKSPACE_SAFARI || t.ctrlKey && s === o.keyCode.X && !function (e) {
              var t = n.createElement("input"), i = "oncut" in t;
              return i || (t.setAttribute("oncut", "return;"), i = "function" == typeof t.oncut), t = null, i
            }()) t.preventDefault(), W(i, s, a), M(i, S(!0), h().p, t, i.inputmask._valueGet() !== S().join("")), i.inputmask._valueGet() === T().join("") ? r.trigger("cleared") : !0 === H(S()) && r.trigger("complete"); else if (s === o.keyCode.END || s === o.keyCode.PAGE_DOWN) {
            t.preventDefault();
            var c = _(g());
            l.insertMode || c !== h().maskLength || t.shiftKey || c--, j(i, t.shiftKey ? a.begin : c, c, !0)
          } else s === o.keyCode.HOME && !t.shiftKey || s === o.keyCode.PAGE_UP ? (t.preventDefault(), j(i, 0, t.shiftKey ? a.begin : 0, !0)) : (l.undoOnEscape && s === o.keyCode.ESCAPE || 90 === s && t.ctrlKey) && !0 !== t.altKey ? (I(i, !0, !1, X.split("")), r.trigger("click")) : s !== o.keyCode.INSERT || t.shiftKey || t.ctrlKey ? !0 === l.tabThrough && s === o.keyCode.TAB ? (!0 === t.shiftKey ? (null === x(a.begin).match.fn && (a.begin = _(a.begin)), a.end = L(a.begin, !0), a.begin = L(a.end, !0)) : (a.begin = _(a.begin, !0), a.end = _(a.begin, !0), a.end < h().maskLength && a.end--), a.begin < h().maskLength && (t.preventDefault(), j(i, a.begin, a.end))) : t.shiftKey || !1 === l.insertMode && (s === o.keyCode.RIGHT ? setTimeout(function () {
              var e = j(i);
              j(i, e.begin)
            }, 0) : s === o.keyCode.LEFT && setTimeout(function () {
                var e = j(i);
                j(i, K ? e.begin + 1 : e.begin - 1)
              }, 0)) : (l.insertMode = !l.insertMode, j(i, l.insertMode || a.begin !== h().maskLength ? a.begin : a.begin - 1));
          l.onKeyDown.call(this, t, S(), j(i).begin, l), J = -1 !== e.inArray(s, l.ignorables)
        }, keypressEvent: function (t, n, r, s, a) {
          var c = this, u = e(c), d = t.which || t.charCode || t.keyCode;
          if (!(!0 === n || t.ctrlKey && t.altKey) && (t.ctrlKey || t.metaKey || J))return d === o.keyCode.ENTER && X !== S().join("") && (X = S().join(""), setTimeout(function () {
            u.trigger("change")
          }, 0)), !0;
          if (d) {
            46 === d && !1 === t.shiftKey && "" !== l.radixPoint && (d = l.radixPoint.charCodeAt(0));
            var p, f = n ? {begin: a, end: a} : j(c), g = String.fromCharCode(d);
            h().writeOutBuffer = !0;
            var v = P(f, g, s);
            if (!1 !== v && (m(!0), p = v.caret !== i ? v.caret : n ? v.pos + 1 : _(v.pos), h().p = p), !1 !== r) {
              var y = this;
              if (setTimeout(function () {
                  l.onKeyValidation.call(y, d, v, l)
                }, 0), h().writeOutBuffer && !1 !== v) {
                var b = S();
                M(c, b, l.numericInput && v.caret === i ? L(p) : p, t, !0 !== n), !0 !== n && setTimeout(function () {
                  !0 === H(b) && u.trigger("complete")
                }, 0)
              }
            }
            if (t.preventDefault(), n)return v.forwardPosition = p, v
          }
        }, pasteEvent: function (n) {
          var i, o = this, r = n.originalEvent || n, s = e(o), a = o.inputmask._valueGet(!0),
            c = j(o);
          K && (i = c.end, c.end = c.begin, c.begin = i);
          var u = a.substr(0, c.begin), d = a.substr(c.end, a.length);
          if (u === (K ? T().reverse() : T()).slice(0, c.begin).join("") && (u = ""), d === (K ? T().reverse() : T()).slice(c.end).join("") && (d = ""), K && (i = u, u = d, d = i), t.clipboardData && t.clipboardData.getData) a = u + t.clipboardData.getData("Text") + d; else {
            if (!r.clipboardData || !r.clipboardData.getData)return !0;
            a = u + r.clipboardData.getData("text/plain") + d
          }
          var p = a;
          if (e.isFunction(l.onBeforePaste)) {
            if (!1 === (p = l.onBeforePaste(a, l)))return n.preventDefault();
            p || (p = a)
          }
          return I(o, !1, !1, K ? p.split("").reverse() : p.toString().split("")), M(o, S(), _(g()), n, X !== S().join("")), !0 === H(S()) && s.trigger("complete"), n.preventDefault()
        }, inputFallBackEvent: function (t) {
          var n = this, i = n.inputmask._valueGet();
          if (S().join("") !== i) {
            var r = j(n);
            if ("." === i.charAt(r.begin - 1) && "" !== l.radixPoint && (i = i.split(""), i[r.begin - 1] = l.radixPoint.charAt(0), i = i.join("")), i.charAt(r.begin - 1) === l.radixPoint && i.length > S().length) {
              var s = new e.Event("keypress");
              return s.which = l.radixPoint.charCodeAt(0), ne.keypressEvent.call(n, s, !0, !0, !1, r.begin), !1
            }
            if (i = i.replace(new RegExp("(" + o.escapeRegex(T().join("")) + ")*"), ""), u) {
              var a = i.replace(S().join(""), "");
              if (1 === a.length) {
                var s = new e.Event("keypress");
                return s.which = a.charCodeAt(0), ne.keypressEvent.call(n, s, !0, !0, !1, h().validPositions[r.begin - 1] ? r.begin : r.begin - 1), !1
              }
            }
            if (r.begin > i.length && (j(n, i.length), r = j(n)), S().length - i.length != 1 || i.charAt(r.begin) === S()[r.begin] || i.charAt(r.begin + 1) === S()[r.begin] || A(r.begin)) {
              var c = [], d = f(!0, 1).join("");
              for (c.push(i.substr(0, r.begin)), c.push(i.substr(r.begin)); null === i.match(o.escapeRegex(d) + "$");)d = d.slice(1);
              i = i.replace(d, ""), e.isFunction(l.onBeforeMask) && (i = l.onBeforeMask(i, l) || i), I(n, !0, !1, i.split(""), t);
              var m = j(n).begin, g = n.inputmask._valueGet(), v = g.indexOf(c[0]);
              if (0 === v && m !== c[0].length) j(n, c[0].length), p && setTimeout(function () {
                j(n, c[0].length)
              }, 0); else {
                for (; null === g.match(o.escapeRegex(c[1]) + "$");)c[1] = c[1].substr(1);
                var y = g.indexOf(c[1]);
                -1 !== y && "" !== c[1] && m > y && y > v && (j(n, y), p && setTimeout(function () {
                  j(n, y)
                }, 0))
              }
              !0 === H(S()) && e(n).trigger("complete")
            } else t.keyCode = o.keyCode.BACKSPACE, ne.keydownEvent.call(n, t);
            t.preventDefault()
          }
        }, setValueEvent: function (t) {
          this.inputmask.refreshValue = !1;
          var n = this, i = n.inputmask._valueGet(!0);
          e.isFunction(l.onBeforeMask) && (i = l.onBeforeMask(i, l) || i), i = i.split(""), I(n, !0, !1, K ? i.reverse() : i), X = S().join(""), (l.clearMaskOnLostFocus || l.clearIncomplete) && n.inputmask._valueGet() === T().join("") && n.inputmask._valueSet("")
        }, focusEvent: function (e) {
          var t = this, n = t.inputmask._valueGet();
          l.showMaskOnFocus && (!l.showMaskOnHover || l.showMaskOnHover && "" === n) && (t.inputmask._valueGet() !== S().join("") ? M(t, S(), _(g())) : !1 === ee && j(t, _(g()))), !0 === l.positionCaretOnTab && !1 === ee && ne.clickEvent.apply(t, [e, !0]), X = S().join("")
        }, mouseleaveEvent: function (e) {
          var t = this;
          if (ee = !1, l.clearMaskOnLostFocus && n.activeElement !== t) {
            var i = S().slice(), o = t.inputmask._valueGet();
            o !== t.getAttribute("placeholder") && "" !== o && (-1 === g() && o === T().join("") ? i = [] : F(i), M(t, i))
          }
        }, clickEvent: function (t, o) {
          var r = this;
          if (n.activeElement === r) {
            var s = j(r);
            if (o && (K ? s.end = s.begin : s.begin = s.end), s.begin === s.end)switch (l.positionCaretOnClick) {
              case"none":
                break;
              case"radixFocus":
                if (function (t) {
                    if ("" !== l.radixPoint) {
                      var n = h().validPositions;
                      if (n[t] === i || n[t].input === D(t)) {
                        if (t < _(-1))return !0;
                        var o = e.inArray(l.radixPoint, S());
                        if (-1 !== o) {
                          for (var r in n)if (o < r && n[r].input !== D(r))return !1;
                          return !0
                        }
                      }
                    }
                    return !1
                  }(s.begin)) {
                  var a = S().join("").indexOf(l.radixPoint);
                  j(r, l.numericInput ? _(a) : a);
                  break
                }
              default:
                var c = s.begin, u = g(c, !0), d = _(u);
                if (c < d) j(r, A(c) || A(c - 1) ? c : _(c)); else {
                  var p = D(d);
                  ("" !== p && S()[d] !== p && !0 !== x(d).match.optionalQuantifier || !A(d) && x(d).match.def === p) && (d = _(d)), j(r, d)
                }
            }
          }
        }, dblclickEvent: function (e) {
          var t = this;
          setTimeout(function () {
            j(t, 0, _(g()))
          }, 0)
        }, cutEvent: function (i) {
          var r = this, s = e(r), a = j(r), l = i.originalEvent || i,
            c = t.clipboardData || l.clipboardData,
            u = K ? S().slice(a.end, a.begin) : S().slice(a.begin, a.end);
          c.setData("text", K ? u.reverse().join("") : u.join("")), n.execCommand && n.execCommand("copy"), W(r, o.keyCode.DELETE, a), M(r, S(), h().p, i, X !== S().join("")), r.inputmask._valueGet() === T().join("") && s.trigger("cleared")
        }, blurEvent: function (t) {
          var n = e(this), o = this;
          if (o.inputmask) {
            var r = o.inputmask._valueGet(), s = S().slice();
            X !== s.join("") && setTimeout(function () {
              n.trigger("change"), X = s.join("")
            }, 0), "" !== r && (l.clearMaskOnLostFocus && (-1 === g() && r === T().join("") ? s = [] : F(s)), !1 === H(s) && (setTimeout(function () {
              n.trigger("incomplete")
            }, 0), l.clearIncomplete && (m(), s = l.clearMaskOnLostFocus ? [] : T().slice())), M(o, s, i, t))
          }
        }, mouseenterEvent: function (e) {
          var t = this;
          ee = !0, n.activeElement !== t && l.showMaskOnHover && t.inputmask._valueGet() !== S().join("") && M(t, S())
        }, submitEvent: function (e) {
          X !== S().join("") && q.trigger("change"), l.clearMaskOnLostFocus && -1 === g() && V.inputmask._valueGet && V.inputmask._valueGet() === T().join("") && V.inputmask._valueSet(""), l.removeMaskOnSubmit && (V.inputmask._valueSet(V.inputmask.unmaskedvalue(), !0), setTimeout(function () {
            M(V, S())
          }, 0))
        }, resetEvent: function (e) {
          V.inputmask.refreshValue = !0, setTimeout(function () {
            q.trigger("setvalue")
          }, 0)
        }
      };
      if (r !== i)switch (r.action) {
        case"isComplete":
          return V = r.el, H(S());
        case"unmaskedvalue":
          return V !== i && r.value === i || (G = r.value, G = (e.isFunction(l.onBeforeMask) ? l.onBeforeMask(G, l) || G : G).split(""), I(i, !1, !1, K ? G.reverse() : G), e.isFunction(l.onBeforeWrite) && l.onBeforeWrite(i, S(), 0, l)), R(V);
        case"mask":
          !function (t) {
            te.off(t);
            var o = function (t, o) {
              var r = t.getAttribute("type"),
                s = "INPUT" === t.tagName && -1 !== e.inArray(r, o.supportsInputType) || t.isContentEditable || "TEXTAREA" === t.tagName;
              if (!s)if ("INPUT" === t.tagName) {
                var a = n.createElement("input");
                a.setAttribute("type", r), s = "text" === a.type, a = null
              } else s = "partial";
              return !1 !== s && function (t) {
                function r() {
                  return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== g() || !0 !== o.nullable ? n.activeElement === this && o.clearMaskOnLostFocus ? (K ? F(S().slice()).reverse() : F(S().slice())).join("") : a.call(this) : "" : a.call(this)
                }

                function s(t) {
                  l.call(this, t), this.inputmask && e(this).trigger("setvalue")
                }

                var a, l;
                if (!t.inputmask.__valueGet) {
                  if (!0 !== o.noValuePatching) {
                    if (Object.getOwnPropertyDescriptor) {
                      "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof"test".__proto__ ? function (e) {
                        return e.__proto__
                      } : function (e) {
                        return e.constructor.prototype
                      });
                      var c = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : i;
                      c && c.get && c.set ? (a = c.get, l = c.set, Object.defineProperty(t, "value", {
                        get: r,
                        set: s,
                        configurable: !0
                      })) : "INPUT" !== t.tagName && (a = function () {
                          return this.textContent
                        }, l = function (e) {
                          this.textContent = e
                        }, Object.defineProperty(t, "value", {get: r, set: s, configurable: !0}))
                    } else n.__lookupGetter__ && t.__lookupGetter__("value") && (a = t.__lookupGetter__("value"), l = t.__lookupSetter__("value"), t.__defineGetter__("value", r), t.__defineSetter__("value", s));
                    t.inputmask.__valueGet = a, t.inputmask.__valueSet = l
                  }
                  t.inputmask._valueGet = function (e) {
                    return K && !0 !== e ? a.call(this.el).split("").reverse().join("") : a.call(this.el)
                  }, t.inputmask._valueSet = function (e, t) {
                    l.call(this.el, null === e || e === i ? "" : !0 !== t && K ? e.split("").reverse().join("") : e)
                  }, a === i && (a = function () {
                    return this.value
                  }, l = function (e) {
                    this.value = e
                  }, function (t) {
                    if (e.valHooks && (e.valHooks[t] === i || !0 !== e.valHooks[t].inputmaskpatch)) {
                      var n = e.valHooks[t] && e.valHooks[t].get ? e.valHooks[t].get : function (e) {
                          return e.value
                        },
                        r = e.valHooks[t] && e.valHooks[t].set ? e.valHooks[t].set : function (e, t) {
                          return e.value = t, e
                        };
                      e.valHooks[t] = {
                        get: function (e) {
                          if (e.inputmask) {
                            if (e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();
                            var t = n(e);
                            return -1 !== g(i, i, e.inputmask.maskset.validPositions) || !0 !== o.nullable ? t : ""
                          }
                          return n(e)
                        }, set: function (t, n) {
                          var i, o = e(t);
                          return i = r(t, n), t.inputmask && o.trigger("setvalue"), i
                        }, inputmaskpatch: !0
                      }
                    }
                  }(t.type), function (t) {
                    te.on(t, "mouseenter", function (t) {
                      var n = e(this);
                      this.inputmask._valueGet() !== S().join("") && n.trigger("setvalue")
                    })
                  }(t))
                }
              }(t), s
            }(t, l);
            if (!1 !== o && (V = t, q = e(V), ("rtl" === V.dir || l.rightAlign) && (V.style.textAlign = "right"), ("rtl" === V.dir || l.numericInput) && (V.dir = "ltr", V.removeAttribute("dir"), V.inputmask.isRTL = !0, K = !0), !0 === l.colorMask && z(V), p && (V.hasOwnProperty("inputmode") && (V.inputmode = l.inputmode, V.setAttribute("inputmode", l.inputmode)), "rtfm" === l.androidHack && (!0 !== l.colorMask && z(V), V.type = "password")), !0 === o && (te.on(V, "submit", ne.submitEvent), te.on(V, "reset", ne.resetEvent), te.on(V, "mouseenter", ne.mouseenterEvent), te.on(V, "blur", ne.blurEvent), te.on(V, "focus", ne.focusEvent), te.on(V, "mouseleave", ne.mouseleaveEvent), !0 !== l.colorMask && te.on(V, "click", ne.clickEvent), te.on(V, "dblclick", ne.dblclickEvent), te.on(V, "paste", ne.pasteEvent), te.on(V, "dragdrop", ne.pasteEvent), te.on(V, "drop", ne.pasteEvent), te.on(V, "cut", ne.cutEvent), te.on(V, "complete", l.oncomplete), te.on(V, "incomplete", l.onincomplete), te.on(V, "cleared", l.oncleared), p || !0 === l.inputEventOnly || (te.on(V, "keydown", ne.keydownEvent), te.on(V, "keypress", ne.keypressEvent)), te.on(V, "compositionstart", e.noop), te.on(V, "compositionupdate", e.noop), te.on(V, "compositionend", e.noop), te.on(V, "keyup", e.noop), te.on(V, "input", ne.inputFallBackEvent), te.on(V, "beforeinput", e.noop)), te.on(V, "setvalue", ne.setValueEvent), T(), "" !== V.inputmask._valueGet(!0) || !1 === l.clearMaskOnLostFocus || n.activeElement === V)) {
              var r = e.isFunction(l.onBeforeMask) ? l.onBeforeMask(V.inputmask._valueGet(!0), l) || V.inputmask._valueGet(!0) : V.inputmask._valueGet(!0);
              "" !== r && I(V, !0, !1, K ? r.split("").reverse() : r.split(""));
              var s = S().slice();
              X = s.join(""), !1 === H(s) && l.clearIncomplete && m(), l.clearMaskOnLostFocus && n.activeElement !== V && (-1 === g() ? s = [] : F(s)), M(V, s), n.activeElement === V && j(V, _(g()))
            }
          }(V);
          break;
        case"format":
          return G = (e.isFunction(l.onBeforeMask) ? l.onBeforeMask(r.value, l) || r.value : r.value).split(""), I(i, !0, !1, K ? G.reverse() : G), r.metadata ? {
            value: K ? S().slice().reverse().join("") : S().join(""),
            metadata: a.call(this, {action: "getmetadata"}, s, l)
          } : K ? S().slice().reverse().join("") : S().join("");
        case"isValid":
          r.value ? (G = r.value.split(""), I(i, !0, !0, K ? G.reverse() : G)) : r.value = S().join("");
          for (var ie = S(), oe = N(), re = ie.length - 1; re > oe && !A(re); re--);
          return ie.splice(oe, re + 1 - oe), H(ie) && r.value === S().join("");
        case"getemptymask":
          return T().join("");
        case"remove":
          return V && V.inputmask && (q = e(V), V.inputmask._valueSet(l.autoUnmask ? R(V) : V.inputmask._valueGet(!0)), te.off(V), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(V), "value") && V.inputmask.__valueGet && Object.defineProperty(V, "value", {
              get: V.inputmask.__valueGet,
              set: V.inputmask.__valueSet,
              configurable: !0
            }) : n.__lookupGetter__ && V.__lookupGetter__("value") && V.inputmask.__valueGet && (V.__defineGetter__("value", V.inputmask.__valueGet), V.__defineSetter__("value", V.inputmask.__valueSet)), V.inputmask = i), V;
        case"getmetadata":
          if (e.isArray(s.metadata)) {
            var se = f(!0, 0, !1).join("");
            return e.each(s.metadata, function (e, t) {
              if (t.mask === se)return se = t, !1
            }), se
          }
          return s.metadata
      }
    }

    var l = navigator.userAgent, c = /mobile/i.test(l), u = /iemobile/i.test(l),
      d = /iphone/i.test(l) && !u, p = /android/i.test(l) && !u;
    return o.prototype = {
      dataAttribute: "data-inputmask",
      defaults: {
        placeholder: "_",
        optionalmarker: {start: "[", end: "]"},
        quantifiermarker: {start: "{", end: "}"},
        groupmarker: {start: "(", end: ")"},
        alternatormarker: "|",
        escapeChar: "\\",
        mask: null,
        regex: null,
        oncomplete: e.noop,
        onincomplete: e.noop,
        oncleared: e.noop,
        repeat: 0,
        greedy: !0,
        autoUnmask: !1,
        removeMaskOnSubmit: !1,
        clearMaskOnLostFocus: !0,
        insertMode: !0,
        clearIncomplete: !1,
        alias: null,
        onKeyDown: e.noop,
        onBeforeMask: null,
        onBeforePaste: function (t, n) {
          return e.isFunction(n.onBeforeMask) ? n.onBeforeMask(t, n) : t
        },
        onBeforeWrite: null,
        onUnMask: null,
        showMaskOnFocus: !0,
        showMaskOnHover: !0,
        onKeyValidation: e.noop,
        skipOptionalPartCharacter: " ",
        numericInput: !1,
        rightAlign: !1,
        undoOnEscape: !0,
        radixPoint: "",
        radixPointDefinitionSymbol: i,
        groupSeparator: "",
        keepStatic: null,
        positionCaretOnTab: !0,
        tabThrough: !1,
        supportsInputType: ["text", "tel", "password"],
        ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
        isComplete: null,
        canClearPosition: e.noop,
        preValidation: null,
        postValidation: null,
        staticDefinitionSymbol: i,
        jitMasking: !1,
        nullable: !0,
        inputEventOnly: !1,
        noValuePatching: !1,
        positionCaretOnClick: "lvp",
        casing: null,
        inputmode: "verbatim",
        colorMask: !1,
        androidHack: !1
      },
      definitions: {
        9: {validator: "[0-9]", cardinality: 1, definitionSymbol: "*"},
        a: {validator: "[A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, definitionSymbol: "*"},
        "*": {
          validator: function () {
            return !0
          }, cardinality: 1
        }
      },
      aliases: {},
      masksCache: {},
      mask: function (l) {
        function c(n, o, s, a) {
          function l(e, o) {
            null !== (o = o !== i ? o : n.getAttribute(a + "-" + e)) && ("string" == typeof o && (0 === e.indexOf("on") ? o = t[o] : "false" === o ? o = !1 : "true" === o && (o = !0)), s[e] = o)
          }

          var c, u, d, p, f = n.getAttribute(a);
          if (f && "" !== f && (f = f.replace(new RegExp("'", "g"), '"'), u = JSON.parse("{" + f + "}")), u) {
            d = i;
            for (p in u)if ("alias" === p.toLowerCase()) {
              d = u[p];
              break
            }
          }
          l("alias", d), s.alias && r(s.alias, s, o);
          for (c in o) {
            if (u) {
              d = i;
              for (p in u)if (p.toLowerCase() === c.toLowerCase()) {
                d = u[p];
                break
              }
            }
            l(c, d)
          }
          return e.extend(!0, o, s), o
        }

        var u = this;
        return "string" == typeof l && (l = n.getElementById(l) || n.querySelectorAll(l)), l = l.nodeName ? [l] : l, e.each(l, function (t, n) {
          var r = e.extend(!0, {}, u.opts);
          c(n, r, e.extend(!0, {}, u.userOptions), u.dataAttribute);
          var l = s(r, u.noMasksCache);
          l !== i && (n.inputmask !== i && n.inputmask.remove(), n.inputmask = new o(i, i, !0), n.inputmask.opts = r, n.inputmask.noMasksCache = u.noMasksCache, n.inputmask.userOptions = e.extend(!0, {}, u.userOptions), n.inputmask.isRTL = u.isRTL, n.inputmask.el = n, n.inputmask.maskset = l, e.data(n, "_inputmask_opts", r), a.call(n.inputmask, {action: "mask"}))
        }), l && l[0] ? l[0].inputmask || this : this
      },
      option: function (t, n) {
        return "string" == typeof t ? this.opts[t] : "object" == typeof t ? (e.extend(this.userOptions, t), this.el && !0 !== n && this.mask(this.el), this) : void 0
      },
      unmaskedvalue: function (e) {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), a.call(this, {
          action: "unmaskedvalue",
          value: e
        })
      },
      remove: function () {
        return a.call(this, {action: "remove"})
      },
      getemptymask: function () {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), a.call(this, {action: "getemptymask"})
      },
      hasMaskedValue: function () {
        return !this.opts.autoUnmask
      },
      isComplete: function () {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), a.call(this, {action: "isComplete"})
      },
      getmetadata: function () {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), a.call(this, {action: "getmetadata"})
      },
      isValid: function (e) {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), a.call(this, {
          action: "isValid",
          value: e
        })
      },
      format: function (e, t) {
        return this.maskset = this.maskset || s(this.opts, this.noMasksCache), a.call(this, {
          action: "format",
          value: e,
          metadata: t
        })
      },
      analyseMask: function (t, n, r) {
        function s(e, t, n, i) {
          this.matches = [], this.openGroup = e || !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = i || !1, this.quantifier = {
            min: 1,
            max: 1
          }
        }

        function a(e, t, s) {
          if (s = s !== i ? s : e.matches.length, n) 0 === t.indexOf("[") || x ? e.matches.splice(s++, 0, {
            fn: new RegExp(t, r.casing ? "i" : ""),
            cardinality: 0,
            optionality: e.isOptional,
            newBlockMarker: l === i || l.def !== t,
            casing: null,
            def: r.staticDefinitionSymbol || t,
            placeholder: r.staticDefinitionSymbol !== i ? t : i,
            nativeDef: t
          }) : e.matches.splice(s++, 0, {
            fn: null,
            cardinality: 0,
            optionality: e.isOptional,
            newBlockMarker: l === i || l.def !== t,
            casing: null,
            def: r.staticDefinitionSymbol || t,
            placeholder: r.staticDefinitionSymbol !== i ? t : i,
            nativeDef: t
          }), x = !1; else {
            var a = (r.definitions ? r.definitions[t] : i) || o.prototype.definitions[t],
              l = e.matches[s - 1];
            if (a && !x) {
              for (var c = a.prevalidator, u = c ? c.length : 0, d = 1; d < a.cardinality; d++) {
                var p = u >= d ? c[d - 1] : [], f = p.validator, h = p.cardinality;
                e.matches.splice(s++, 0, {
                  fn: f ? "string" == typeof f ? new RegExp(f, r.casing ? "i" : "") : new function () {
                    this.test = f
                  } : new RegExp("."),
                  cardinality: h || 1,
                  optionality: e.isOptional,
                  newBlockMarker: l === i || l.def !== (a.definitionSymbol || t),
                  casing: a.casing,
                  def: a.definitionSymbol || t,
                  placeholder: a.placeholder,
                  nativeDef: t
                }), l = e.matches[s - 1]
              }
              e.matches.splice(s++, 0, {
                fn: a.validator ? "string" == typeof a.validator ? new RegExp(a.validator, r.casing ? "i" : "") : new function () {
                  this.test = a.validator
                } : new RegExp("."),
                cardinality: a.cardinality,
                optionality: e.isOptional,
                newBlockMarker: l === i || l.def !== (a.definitionSymbol || t),
                casing: a.casing,
                def: a.definitionSymbol || t,
                placeholder: a.placeholder,
                nativeDef: t
              })
            } else e.matches.splice(s++, 0, {
              fn: null,
              cardinality: 0,
              optionality: e.isOptional,
              newBlockMarker: l === i || l.def !== t,
              casing: null,
              def: r.staticDefinitionSymbol || t,
              placeholder: r.staticDefinitionSymbol !== i ? t : i,
              nativeDef: t
            }), x = !1
          }
        }

        function l(t) {
          t && t.matches && e.each(t.matches, function (e, o) {
            var s = t.matches[e + 1];
            (s === i || s.matches === i || !1 === s.isQuantifier) && o && o.isGroup && (o.isGroup = !1, n || (a(o, r.groupmarker.start, 0), !0 !== o.openGroup && a(o, r.groupmarker.end))), l(o)
          })
        }

        function c() {
          if (k.length > 0) {
            if (h = k[k.length - 1], a(h, p), h.isAlternator) {
              m = k.pop();
              for (var e = 0; e < m.matches.length; e++)m.matches[e].isGroup = !1;
              k.length > 0 ? (h = k[k.length - 1], h.matches.push(m)) : w.matches.push(m)
            }
          } else a(w, p)
        }

        function u(e) {
          e.matches = e.matches.reverse();
          for (var t in e.matches)if (e.matches.hasOwnProperty(t)) {
            var n = parseInt(t);
            if (e.matches[t].isQuantifier && e.matches[n + 1] && e.matches[n + 1].isGroup) {
              var o = e.matches[t];
              e.matches.splice(t, 1), e.matches.splice(n + 1, 0, o)
            }
            e.matches[t].matches !== i ? e.matches[t] = u(e.matches[t]) : e.matches[t] = function (e) {
              return e === r.optionalmarker.start ? e = r.optionalmarker.end : e === r.optionalmarker.end ? e = r.optionalmarker.start : e === r.groupmarker.start ? e = r.groupmarker.end : e === r.groupmarker.end && (e = r.groupmarker.start), e
            }(e.matches[t])
          }
          return e
        }

        var d, p, f, h, m, g, v,
          y = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
          b = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
          x = !1, w = new s, k = [], T = [];
        for (n && (r.optionalmarker.start = i, r.optionalmarker.end = i); d = n ? b.exec(t) : y.exec(t);) {
          if (p = d[0], n)switch (p.charAt(0)) {
            case"?":
              p = "{+}";
              break;
            case"+":
            case"*":
              p = "{" + p + "}"
          }
          if (x) c(); else switch (p.charAt(0)) {
            case r.escapeChar:
              x = !0, n && c();
              break;
            case r.optionalmarker.end:
            case r.groupmarker.end:
              if (f = k.pop(), f.openGroup = !1, f !== i)if (k.length > 0) {
                if (h = k[k.length - 1], h.matches.push(f), h.isAlternator) {
                  m = k.pop();
                  for (var S = 0; S < m.matches.length; S++)m.matches[S].isGroup = !1;
                  k.length > 0 ? (h = k[k.length - 1], h.matches.push(m)) : w.matches.push(m)
                }
              } else w.matches.push(f); else c();
              break;
            case r.optionalmarker.start:
              k.push(new s(!1, !0));
              break;
            case r.groupmarker.start:
              k.push(new s(!0));
              break;
            case r.quantifiermarker.start:
              var C = new s(!1, !1, !0);
              p = p.replace(/[{}]/g, "");
              var $ = p.split(","), E = isNaN($[0]) ? $[0] : parseInt($[0]),
                P = 1 === $.length ? E : isNaN($[1]) ? $[1] : parseInt($[1]);
              if ("*" !== P && "+" !== P || (E = "*" === P ? 0 : 1), C.quantifier = {
                  min: E,
                  max: P
                }, k.length > 0) {
                var A = k[k.length - 1].matches;
                d = A.pop(), d.isGroup || (v = new s(!0), v.matches.push(d), d = v), A.push(d), A.push(C)
              } else d = w.matches.pop(), d.isGroup || (v = new s(!0), v.matches.push(d), d = v), w.matches.push(d), w.matches.push(C);
              break;
            case r.alternatormarker:
              k.length > 0 ? (h = k[k.length - 1], g = h.matches.pop()) : g = w.matches.pop(), g.isAlternator ? k.push(g) : (m = new s(!1, !1, !1, !0), m.matches.push(g), k.push(m));
              break;
            default:
              c()
          }
        }
        for (; k.length > 0;)f = k.pop(), w.matches.push(f);
        return w.matches.length > 0 && (l(w), T.push(w)), r.numericInput && u(T[0]), T
      }
    }, o.extendDefaults = function (t) {
      e.extend(!0, o.prototype.defaults, t)
    }, o.extendDefinitions = function (t) {
      e.extend(!0, o.prototype.definitions, t)
    }, o.extendAliases = function (t) {
      e.extend(!0, o.prototype.aliases, t)
    }, o.format = function (e, t, n) {
      return o(t).format(e, n)
    }, o.unmask = function (e, t) {
      return o(t).unmaskedvalue(e)
    }, o.isValid = function (e, t) {
      return o(t).isValid(e)
    }, o.remove = function (t) {
      e.each(t, function (e, t) {
        t.inputmask && t.inputmask.remove()
      })
    }, o.escapeRegex = function (e) {
      var t = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
      return e.replace(new RegExp("(\\" + t.join("|\\") + ")", "gim"), "\\$1")
    }, o.keyCode = {
      ALT: 18,
      BACKSPACE: 8,
      BACKSPACE_SAFARI: 127,
      CAPS_LOCK: 20,
      COMMA: 188,
      COMMAND: 91,
      COMMAND_LEFT: 91,
      COMMAND_RIGHT: 93,
      CONTROL: 17,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      INSERT: 45,
      LEFT: 37,
      MENU: 93,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SHIFT: 16,
      SPACE: 32,
      TAB: 9,
      UP: 38,
      WINDOWS: 91,
      X: 88
    }, o
  }(window.dependencyLib || jQuery, window, document)
}(), function (e) {
  !function (e, t) {
    void 0 === e.fn.inputmask && (e.fn.inputmask = function (n, i) {
      var o, r = this[0];
      if (void 0 === i && (i = {}), "string" == typeof n)switch (n) {
        case"unmaskedvalue":
          return r && r.inputmask ? r.inputmask.unmaskedvalue() : e(r).val();
        case"remove":
          return this.each(function () {
            this.inputmask && this.inputmask.remove()
          });
        case"getemptymask":
          return r && r.inputmask ? r.inputmask.getemptymask() : "";
        case"hasMaskedValue":
          return !(!r || !r.inputmask) && r.inputmask.hasMaskedValue();
        case"isComplete":
          return !r || !r.inputmask || r.inputmask.isComplete();
        case"getmetadata":
          return r && r.inputmask ? r.inputmask.getmetadata() : void 0;
        case"setvalue":
          e(r).val(i), r && void 0 === r.inputmask && e(r).triggerHandler("setvalue");
          break;
        case"option":
          if ("string" != typeof i)return this.each(function () {
            if (void 0 !== this.inputmask)return this.inputmask.option(i)
          });
          if (r && void 0 !== r.inputmask)return r.inputmask.option(i);
          break;
        default:
          return i.alias = n, o = new t(i), this.each(function () {
            o.mask(this)
          })
      } else {
        if ("object" == typeof n)return o = new t(n), void 0 === n.mask && void 0 === n.alias ? this.each(function () {
          if (void 0 !== this.inputmask)return this.inputmask.option(n);
          o.mask(this)
        }) : this.each(function () {
          o.mask(this)
        });
        if (void 0 === n)return this.each(function () {
          o = new t(i), o.mask(this)
        })
      }
    }), e.fn.inputmask
  }(jQuery, window.Inputmask)
}(), function (e) {
  !function (e, t) {
    function n(e) {
      return isNaN(e) || 29 === new Date(e, 2, 0).getDate()
    }

    t.extendAliases({
      "dd/mm/yyyy": {
        mask: "1/2/y",
        placeholder: "dd/mm/yyyy",
        regex: {
          val1pre: new RegExp("[0-3]"),
          val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
          val2pre: function (e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|[12][0-9]|3[01])" + n + "[01])")
          },
          val2: function (e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|[12][0-9])" + n + "(0[1-9]|1[012]))|(30" + n + "(0[13-9]|1[012]))|(31" + n + "(0[13578]|1[02]))")
          }
        },
        leapday: "29/02/",
        separator: "/",
        yearrange: {minyear: 1900, maxyear: 2099},
        isInYearRange: function (e, t, n) {
          if (isNaN(e))return !1;
          var i = parseInt(e.concat(t.toString().slice(e.length))),
            o = parseInt(e.concat(n.toString().slice(e.length)));
          return !isNaN(i) && t <= i && i <= n || !isNaN(o) && t <= o && o <= n
        },
        determinebaseyear: function (e, t, n) {
          var i = (new Date).getFullYear();
          if (e > i)return e;
          if (t < i) {
            for (var o = t.toString().slice(0, 2), r = t.toString().slice(2, 4); t < o + n;)o--;
            var s = o + r;
            return e > s ? e : s
          }
          if (e <= i && i <= t) {
            for (var a = i.toString().slice(0, 2); t < a + n;)a--;
            var l = a + n;
            return l < e ? e : l
          }
          return i
        },
        onKeyDown: function (n, i, o, r) {
          var s = e(this);
          if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
            var a = new Date;
            s.val(a.getDate().toString() + (a.getMonth() + 1).toString() + a.getFullYear().toString()), s.trigger("setvalue")
          }
        },
        getFrontValue: function (e, t, n) {
          for (var i = 0, o = 0, r = 0; r < e.length && "2" !== e.charAt(r); r++) {
            var s = n.definitions[e.charAt(r)];
            s ? (i += o, o = s.cardinality) : o++
          }
          return t.join("").substr(i, o)
        },
        postValidation: function (e, t, i) {
          var o, r, s = e.join("");
          return 0 === i.mask.indexOf("y") ? (r = s.substr(0, 4), o = s.substr(4, 11)) : (r = s.substr(6, 11), o = s.substr(0, 6)), t && (o !== i.leapday || n(r))
        },
        definitions: {
          1: {
            validator: function (e, t, n, i, o) {
              var r = o.regex.val1.test(e);
              return i || r || e.charAt(1) !== o.separator && -1 === "-./".indexOf(e.charAt(1)) || !(r = o.regex.val1.test("0" + e.charAt(0))) ? r : (t.buffer[n - 1] = "0", {
                refreshFromBuffer: {
                  start: n - 1,
                  end: n
                }, pos: n, c: e.charAt(0)
              })
            }, cardinality: 2, prevalidator: [{
              validator: function (e, t, n, i, o) {
                var r = e;
                isNaN(t.buffer[n + 1]) || (r += t.buffer[n + 1]);
                var s = 1 === r.length ? o.regex.val1pre.test(r) : o.regex.val1.test(r);
                if (!i && !s) {
                  if (s = o.regex.val1.test(e + "0"))return t.buffer[n] = e, t.buffer[++n] = "0", {
                    pos: n,
                    c: "0"
                  };
                  if (s = o.regex.val1.test("0" + e))return t.buffer[n] = "0", n++, {pos: n}
                }
                return s
              }, cardinality: 1
            }]
          }, 2: {
            validator: function (e, t, n, i, o) {
              var r = o.getFrontValue(t.mask, t.buffer, o);
              -1 !== r.indexOf(o.placeholder[0]) && (r = "01" + o.separator);
              var s = o.regex.val2(o.separator).test(r + e);
              return i || s || e.charAt(1) !== o.separator && -1 === "-./".indexOf(e.charAt(1)) || !(s = o.regex.val2(o.separator).test(r + "0" + e.charAt(0))) ? s : (t.buffer[n - 1] = "0", {
                refreshFromBuffer: {
                  start: n - 1,
                  end: n
                }, pos: n, c: e.charAt(0)
              })
            }, cardinality: 2, prevalidator: [{
              validator: function (e, t, n, i, o) {
                isNaN(t.buffer[n + 1]) || (e += t.buffer[n + 1]);
                var r = o.getFrontValue(t.mask, t.buffer, o);
                -1 !== r.indexOf(o.placeholder[0]) && (r = "01" + o.separator);
                var s = 1 === e.length ? o.regex.val2pre(o.separator).test(r + e) : o.regex.val2(o.separator).test(r + e);
                return i || s || !(s = o.regex.val2(o.separator).test(r + "0" + e)) ? s : (t.buffer[n] = "0", n++, {pos: n})
              }, cardinality: 1
            }]
          }, y: {
            validator: function (e, t, n, i, o) {
              return o.isInYearRange(e, o.yearrange.minyear, o.yearrange.maxyear)
            }, cardinality: 4, prevalidator: [{
              validator: function (e, t, n, i, o) {
                var r = o.isInYearRange(e, o.yearrange.minyear, o.yearrange.maxyear);
                if (!i && !r) {
                  var s = o.determinebaseyear(o.yearrange.minyear, o.yearrange.maxyear, e + "0").toString().slice(0, 1);
                  if (r = o.isInYearRange(s + e, o.yearrange.minyear, o.yearrange.maxyear))return t.buffer[n++] = s.charAt(0), {pos: n};
                  if (s = o.determinebaseyear(o.yearrange.minyear, o.yearrange.maxyear, e + "0").toString().slice(0, 2), r = o.isInYearRange(s + e, o.yearrange.minyear, o.yearrange.maxyear))return t.buffer[n++] = s.charAt(0), t.buffer[n++] = s.charAt(1), {pos: n}
                }
                return r
              }, cardinality: 1
            }, {
              validator: function (e, t, n, i, o) {
                var r = o.isInYearRange(e, o.yearrange.minyear, o.yearrange.maxyear);
                if (!i && !r) {
                  var s = o.determinebaseyear(o.yearrange.minyear, o.yearrange.maxyear, e).toString().slice(0, 2);
                  if (r = o.isInYearRange(e[0] + s[1] + e[1], o.yearrange.minyear, o.yearrange.maxyear))return t.buffer[n++] = s.charAt(1), {pos: n};
                  if (s = o.determinebaseyear(o.yearrange.minyear, o.yearrange.maxyear, e).toString().slice(0, 2), r = o.isInYearRange(s + e, o.yearrange.minyear, o.yearrange.maxyear))return t.buffer[n - 1] = s.charAt(0), t.buffer[n++] = s.charAt(1), t.buffer[n++] = e.charAt(0), {
                    refreshFromBuffer: {
                      start: n - 3,
                      end: n
                    }, pos: n
                  }
                }
                return r
              }, cardinality: 2
            }, {
              validator: function (e, t, n, i, o) {
                return o.isInYearRange(e, o.yearrange.minyear, o.yearrange.maxyear)
              }, cardinality: 3
            }]
          }
        },
        insertMode: !1,
        autoUnmask: !1
      },
      "mm/dd/yyyy": {
        placeholder: "mm/dd/yyyy",
        alias: "dd/mm/yyyy",
        regex: {
          val2pre: function (e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])")
          }, val2: function (e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)")
          }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
        },
        leapday: "02/29/",
        onKeyDown: function (n, i, o, r) {
          var s = e(this);
          if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
            var a = new Date;
            s.val((a.getMonth() + 1).toString() + a.getDate().toString() + a.getFullYear().toString()), s.trigger("setvalue")
          }
        }
      },
      "yyyy/mm/dd": {
        mask: "y/1/2",
        placeholder: "yyyy/mm/dd",
        alias: "mm/dd/yyyy",
        leapday: "/02/29",
        onKeyDown: function (n, i, o, r) {
          var s = e(this);
          if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
            var a = new Date;
            s.val(a.getFullYear().toString() + (a.getMonth() + 1).toString() + a.getDate().toString()), s.trigger("setvalue")
          }
        }
      },
      "dd.mm.yyyy": {
        mask: "1.2.y",
        placeholder: "dd.mm.yyyy",
        leapday: "29.02.",
        separator: ".",
        alias: "dd/mm/yyyy"
      },
      "dd-mm-yyyy": {
        mask: "1-2-y",
        placeholder: "dd-mm-yyyy",
        leapday: "29-02-",
        separator: "-",
        alias: "dd/mm/yyyy"
      },
      "mm.dd.yyyy": {
        mask: "1.2.y",
        placeholder: "mm.dd.yyyy",
        leapday: "02.29.",
        separator: ".",
        alias: "mm/dd/yyyy"
      },
      "mm-dd-yyyy": {
        mask: "1-2-y",
        placeholder: "mm-dd-yyyy",
        leapday: "02-29-",
        separator: "-",
        alias: "mm/dd/yyyy"
      },
      "yyyy.mm.dd": {
        mask: "y.1.2",
        placeholder: "yyyy.mm.dd",
        leapday: ".02.29",
        separator: ".",
        alias: "yyyy/mm/dd"
      },
      "yyyy-mm-dd": {
        mask: "y-1-2",
        placeholder: "yyyy-mm-dd",
        leapday: "-02-29",
        separator: "-",
        alias: "yyyy/mm/dd"
      },
      datetime: {
        mask: "1/2/y h:s",
        placeholder: "dd/mm/yyyy hh:mm",
        alias: "dd/mm/yyyy",
        regex: {
          hrspre: new RegExp("[012]"),
          hrs24: new RegExp("2[0-4]|1[3-9]"),
          hrs: new RegExp("[01][0-9]|2[0-4]"),
          ampm: new RegExp("^[a|p|A|P][m|M]"),
          mspre: new RegExp("[0-5]"),
          ms: new RegExp("[0-5][0-9]")
        },
        timeseparator: ":",
        hourFormat: "24",
        definitions: {
          h: {
            validator: function (e, t, n, i, o) {
              if ("24" === o.hourFormat && 24 === parseInt(e, 10))return t.buffer[n - 1] = "0", t.buffer[n] = "0", {
                refreshFromBuffer: {
                  start: n - 1,
                  end: n
                }, c: "0"
              };
              var r = o.regex.hrs.test(e);
              if (!i && !r && (e.charAt(1) === o.timeseparator || -1 !== "-.:".indexOf(e.charAt(1))) && (r = o.regex.hrs.test("0" + e.charAt(0))))return t.buffer[n - 1] = "0", t.buffer[n] = e.charAt(0), n++, {
                refreshFromBuffer: {
                  start: n - 2,
                  end: n
                }, pos: n, c: o.timeseparator
              };
              if (r && "24" !== o.hourFormat && o.regex.hrs24.test(e)) {
                var s = parseInt(e, 10);
                return 24 === s ? (t.buffer[n + 5] = "a", t.buffer[n + 6] = "m") : (t.buffer[n + 5] = "p", t.buffer[n + 6] = "m"), s -= 12, s < 10 ? (t.buffer[n] = s.toString(), t.buffer[n - 1] = "0") : (t.buffer[n] = s.toString().charAt(1), t.buffer[n - 1] = s.toString().charAt(0)), {
                  refreshFromBuffer: {
                    start: n - 1,
                    end: n + 6
                  }, c: t.buffer[n]
                }
              }
              return r
            }, cardinality: 2, prevalidator: [{
              validator: function (e, t, n, i, o) {
                var r = o.regex.hrspre.test(e);
                return i || r || !(r = o.regex.hrs.test("0" + e)) ? r : (t.buffer[n] = "0", n++, {pos: n})
              }, cardinality: 1
            }]
          },
          s: {
            validator: "[0-5][0-9]",
            cardinality: 2,
            prevalidator: [{
              validator: function (e, t, n, i, o) {
                var r = o.regex.mspre.test(e);
                return i || r || !(r = o.regex.ms.test("0" + e)) ? r : (t.buffer[n] = "0", n++, {pos: n})
              }, cardinality: 1
            }]
          },
          t: {
            validator: function (e, t, n, i, o) {
              return o.regex.ampm.test(e + "m")
            }, casing: "lower", cardinality: 1
          }
        },
        insertMode: !1,
        autoUnmask: !1
      },
      datetime12: {
        mask: "1/2/y h:s t\\m",
        placeholder: "dd/mm/yyyy hh:mm xm",
        alias: "datetime",
        hourFormat: "12"
      },
      "mm/dd/yyyy hh:mm xm": {
        mask: "1/2/y h:s t\\m",
        placeholder: "mm/dd/yyyy hh:mm xm",
        alias: "datetime12",
        regex: {
          val2pre: function (e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])")
          }, val2: function (e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)")
          }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
        },
        leapday: "02/29/",
        onKeyDown: function (n, i, o, r) {
          var s = e(this);
          if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
            var a = new Date;
            s.val((a.getMonth() + 1).toString() + a.getDate().toString() + a.getFullYear().toString()), s.trigger("setvalue")
          }
        }
      },
      "hh:mm t": {mask: "h:s t\\m", placeholder: "hh:mm xm", alias: "datetime", hourFormat: "12"},
      "h:s t": {mask: "h:s t\\m", placeholder: "hh:mm xm", alias: "datetime", hourFormat: "12"},
      "hh:mm:ss": {mask: "h:s:s", placeholder: "hh:mm:ss", alias: "datetime", autoUnmask: !1},
      "hh:mm": {mask: "h:s", placeholder: "hh:mm", alias: "datetime", autoUnmask: !1},
      date: {alias: "dd/mm/yyyy"},
      "mm/yyyy": {
        mask: "1/y",
        placeholder: "mm/yyyy",
        leapday: "donotuse",
        separator: "/",
        alias: "mm/dd/yyyy"
      },
      shamsi: {
        regex: {
          val2pre: function (e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "[0-3])")
          }, val2: function (e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + n + "30)|((0[1-6])" + n + "31)")
          }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
        },
        yearrange: {minyear: 1300, maxyear: 1499},
        mask: "y/1/2",
        leapday: "/12/30",
        placeholder: "yyyy/mm/dd",
        alias: "mm/dd/yyyy",
        clearIncomplete: !0
      },
      "yyyy-mm-dd hh:mm:ss": {
        mask: "y-1-2 h:s:s",
        placeholder: "yyyy-mm-dd hh:mm:ss",
        alias: "datetime",
        separator: "-",
        leapday: "-02-29",
        regex: {
          val2pre: function (e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])")
          }, val2: function (e) {
            var n = t.escapeRegex.call(this, e);
            return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)")
          }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
        },
        onKeyDown: function (e, t, n, i) {
        }
      }
    })
  }(window.dependencyLib || jQuery, window.Inputmask)
}(), function (e) {
  !function (e, t) {
    t.extendDefinitions({
      A: {validator: "[A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, casing: "upper"},
      "&": {validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, casing: "upper"},
      "#": {validator: "[0-9A-Fa-f]", cardinality: 1, casing: "upper"}
    }), t.extendAliases({
      url: {
        definitions: {i: {validator: ".", cardinality: 1}},
        mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
        insertMode: !1,
        autoUnmask: !1,
        inputmode: "url"
      },
      ip: {
        mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
        definitions: {
          i: {
            validator: function (e, t, n, i, o) {
              return n - 1 > -1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, e = n - 2 > -1 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : e = "00" + e, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)
            }, cardinality: 1
          }
        },
        onUnMask: function (e, t, n) {
          return e
        },
        inputmode: "numeric"
      },
      email: {
        mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
        greedy: !1,
        onBeforePaste: function (e, t) {
          return e = e.toLowerCase(), e.replace("mailto:", "")
        },
        definitions: {
          "*": {
            validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
            cardinality: 1,
            casing: "lower"
          }, "-": {validator: "[0-9A-Za-z-]", cardinality: 1, casing: "lower"}
        },
        onUnMask: function (e, t, n) {
          return e
        },
        inputmode: "email"
      },
      mac: {mask: "##:##:##:##:##:##"},
      vin: {
        mask: "V{13}9{4}",
        definitions: {
          V: {
            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
            cardinality: 1,
            casing: "upper"
          }
        },
        clearIncomplete: !0,
        autoUnmask: !0
      }
    })
  }(window.dependencyLib || jQuery, window.Inputmask)
}(), function (e) {
  !function (e, t, n) {
    function i(e, t) {
      for (var n = "", i = 0; i < e.length; i++)t.definitions[e.charAt(i)] || t.optionalmarker.start === e.charAt(i) || t.optionalmarker.end === e.charAt(i) || t.quantifiermarker.start === e.charAt(i) || t.quantifiermarker.end === e.charAt(i) || t.groupmarker.start === e.charAt(i) || t.groupmarker.end === e.charAt(i) || t.alternatormarker === e.charAt(i) ? n += "\\" + e.charAt(i) : n += e.charAt(i);
      return n
    }

    t.extendAliases({
      numeric: {
        mask: function (e) {
          if (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat), e.repeat = 0, e.groupSeparator === e.radixPoint && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.autoGroup = e.autoGroup && "" !== e.groupSeparator, e.autoGroup && ("string" == typeof e.groupSize && isFinite(e.groupSize) && (e.groupSize = parseInt(e.groupSize)), isFinite(e.integerDigits))) {
            var t = Math.floor(e.integerDigits / e.groupSize), n = e.integerDigits % e.groupSize;
            e.integerDigits = parseInt(e.integerDigits) + (0 === n ? t - 1 : t), e.integerDigits < 1 && (e.integerDigits = "*")
          }
          e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && !1 === e.integerOptional && (e.positionCaretOnClick = "lvp"), e.definitions[";"] = e.definitions["~"], e.definitions[";"].definitionSymbol = "~", !0 === e.numericInput && (e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e.decimalProtect = !1);
          var o = "[+]";
          if (o += i(e.prefix, e), !0 === e.integerOptional ? o += "~{1," + e.integerDigits + "}" : o += "~{" + e.integerDigits + "}", void 0 !== e.digits) {
            e.radixPointDefinitionSymbol = e.decimalProtect ? ":" : e.radixPoint;
            var r = e.digits.toString().split(",");
            isFinite(r[0] && r[1] && isFinite(r[1])) ? o += e.radixPointDefinitionSymbol + ";{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional ? o += "[" + e.radixPointDefinitionSymbol + ";{1," + e.digits + "}]" : o += e.radixPointDefinitionSymbol + ";{" + e.digits + "}")
          }
          return o += i(e.suffix, e), o += "[-]", e.greedy = !1, o
        },
        placeholder: "",
        greedy: !1,
        digits: "*",
        digitsOptional: !0,
        radixPoint: ".",
        positionCaretOnClick: "radixFocus",
        groupSize: 3,
        groupSeparator: "",
        autoGroup: !1,
        allowMinus: !0,
        negationSymbol: {front: "-", back: ""},
        integerDigits: "+",
        integerOptional: !0,
        prefix: "",
        suffix: "",
        rightAlign: !0,
        decimalProtect: !0,
        min: null,
        max: null,
        step: 1,
        insertMode: !0,
        autoUnmask: !1,
        unmaskAsNumber: !1,
        inputmode: "numeric",
        preValidation: function (t, n, i, o, r) {
          if ("-" === i || i == r.negationSymbol.front)return !0 === r.allowMinus && (r.isNegative = void 0 === r.isNegative || !r.isNegative, "" === t.join("") || {
              caret: n,
              dopost: !0
            });
          if (!1 === o && i === r.radixPoint && void 0 !== r.digits && (isNaN(r.digits) || parseInt(r.digits) > 0)) {
            var s = e.inArray(r.radixPoint, t);
            if (-1 !== s)return !0 === r.numericInput ? n === s : {caret: s + 1}
          }
          return !0
        },
        postValidation: function (n, i, o) {
          var r = o.suffix.split(""), s = o.prefix.split("");
          if (void 0 == i.pos && void 0 !== i.caret && !0 !== i.dopost)return i;
          var a = void 0 != i.caret ? i.caret : i.pos, l = n.slice();
          o.numericInput && (a = l.length - a - 1, l = l.reverse());
          var c = l[a];
          if (c === o.groupSeparator && (a += 1, c = l[a]),
            a == l.length - o.suffix.length - 1 && c === o.radixPoint)return i;
          void 0 !== c && c !== o.radixPoint && c !== o.negationSymbol.front && c !== o.negationSymbol.back && (l[a] = "?", o.prefix.length > 0 && a >= (!1 === o.isNegative ? 1 : 0) && a < o.prefix.length - 1 + (!1 === o.isNegative ? 1 : 0) ? s[a - (!1 === o.isNegative ? 1 : 0)] = "?" : o.suffix.length > 0 && a >= l.length - o.suffix.length - (!1 === o.isNegative ? 1 : 0) && (r[a - (l.length - o.suffix.length - (!1 === o.isNegative ? 1 : 0))] = "?")), s = s.join(""), r = r.join("");
          var u = l.join("").replace(s, "");
          if (u = u.replace(r, ""), u = u.replace(new RegExp(t.escapeRegex(o.groupSeparator), "g"), ""), u = u.replace(new RegExp("[-" + t.escapeRegex(o.negationSymbol.front) + "]", "g"), ""), u = u.replace(new RegExp(t.escapeRegex(o.negationSymbol.back) + "$"), ""), isNaN(o.placeholder) && (u = u.replace(new RegExp(t.escapeRegex(o.placeholder), "g"), "")), u.length > 1 && 1 !== u.indexOf(o.radixPoint) && ("0" == c && (u = u.replace(/^\?/g, "")), u = u.replace(/^0/g, "")), u.charAt(0) === o.radixPoint && !0 !== o.numericInput && (u = "0" + u), "" !== u) {
            if (u = u.split(""), !o.digitsOptional && isFinite(o.digits)) {
              var d = e.inArray(o.radixPoint, u), p = e.inArray(o.radixPoint, l);
              -1 === d && (u.push(o.radixPoint), d = u.length - 1);
              for (var f = 1; f <= o.digits; f++)o.digitsOptional || void 0 !== u[d + f] && u[d + f] !== o.placeholder.charAt(0) ? -1 !== p && void 0 !== l[p + f] && (u[d + f] = u[d + f] || l[p + f]) : u[d + f] = i.placeholder || o.placeholder.charAt(0)
            }
            !0 !== o.autoGroup || "" === o.groupSeparator || c === o.radixPoint && void 0 === i.pos && !i.dopost ? u = u.join("") : (u = t(function (e, t) {
              var n = "";
              if (n += "(" + t.groupSeparator + "*{" + t.groupSize + "}){*}", "" !== t.radixPoint) {
                var i = e.join("").split(t.radixPoint);
                i[1] && (n += t.radixPoint + "*{" + i[1].match(/^\d*\??\d*/)[0].length + "}")
              }
              return n
            }(u, o), {
              numericInput: !0,
              jitMasking: !0,
              definitions: {"*": {validator: "[0-9?]", cardinality: 1}}
            }).format(u.join("")), u.charAt(0) === o.groupSeparator && u.substr(1))
          }
          if (o.isNegative && "blur" === i.event && (o.isNegative = "0" !== u), u = s + u, u += r, o.isNegative && (u = o.negationSymbol.front + u, u += o.negationSymbol.back), u = u.split(""), void 0 !== c)if (c !== o.radixPoint && c !== o.negationSymbol.front && c !== o.negationSymbol.back) a = e.inArray("?", u), a > -1 ? u[a] = c : a = i.caret || 0; else if (c === o.radixPoint || c === o.negationSymbol.front || c === o.negationSymbol.back) {
            var h = e.inArray(c, u);
            -1 !== h && (a = h)
          }
          o.numericInput && (a = u.length - a - 1, u = u.reverse());
          var m = {
            caret: void 0 === c || void 0 !== i.pos ? a + (o.numericInput ? -1 : 1) : a,
            buffer: u,
            refreshFromBuffer: i.dopost || n.join("") !== u.join("")
          };
          return m.refreshFromBuffer ? m : i
        },
        onBeforeWrite: function (n, i, o, r) {
          if (n)switch (n.type) {
            case"keydown":
              return r.postValidation(i, {caret: o, dopost: !0}, r);
            case"blur":
            case"checkval":
              var s;
              if (function (e) {
                  void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done")
                }(r), null !== r.min || null !== r.max) {
                if (s = r.onUnMask(i.join(""), void 0, e.extend({}, r, {unmaskAsNumber: !0})), null !== r.min && s < r.min)return r.isNegative = r.min < 0, r.postValidation(r.min.toString().replace(".", r.radixPoint).split(""), {
                  caret: o,
                  dopost: !0,
                  placeholder: "0"
                }, r);
                if (null !== r.max && s > r.max)return r.isNegative = r.max < 0, r.postValidation(r.max.toString().replace(".", r.radixPoint).split(""), {
                  caret: o,
                  dopost: !0,
                  placeholder: "0"
                }, r)
              }
              return r.postValidation(i, {
                caret: o,
                dopost: !0,
                placeholder: "0",
                event: "blur"
              }, r);
            case"_checkval":
              return {caret: o}
          }
        },
        regex: {
          integerPart: function (e, n) {
            return n ? new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?") : new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?\\d+")
          }, integerNPart: function (e) {
            return new RegExp("[\\d" + t.escapeRegex(e.groupSeparator) + t.escapeRegex(e.placeholder.charAt(0)) + "]+")
          }
        },
        definitions: {
          "~": {
            validator: function (e, n, i, o, r, s) {
              var a = o ? new RegExp("[0-9" + t.escapeRegex(r.groupSeparator) + "]").test(e) : new RegExp("[0-9]").test(e);
              if (!0 === a) {
                if (!0 !== r.numericInput && void 0 !== n.validPositions[i] && "~" === n.validPositions[i].match.def && !s) {
                  var l = n.buffer.join("");
                  l = l.replace(new RegExp("[-" + t.escapeRegex(r.negationSymbol.front) + "]", "g"), ""), l = l.replace(new RegExp(t.escapeRegex(r.negationSymbol.back) + "$"), ""), l = l.replace(/0/g, r.placeholder.charAt(0));
                  var c = n._buffer.join("");
                  for (l === r.radixPoint && (l = c); null === l.match(t.escapeRegex(c) + "$");)c = c.slice(1);
                  l = l.replace(c, ""), l = l.split(""), a = void 0 === l[i] ? {
                    pos: i,
                    remove: i
                  } : {pos: i}
                }
              } else o || e !== r.radixPoint || void 0 !== n.validPositions[i - 1] || (n.buffer[i] = "0", a = {pos: i + 1});
              return a
            }, cardinality: 1
          }, "+": {
            validator: function (e, t, n, i, o) {
              return o.allowMinus && ("-" === e || e === o.negationSymbol.front)
            }, cardinality: 1, placeholder: ""
          }, "-": {
            validator: function (e, t, n, i, o) {
              return o.allowMinus && e === o.negationSymbol.back
            }, cardinality: 1, placeholder: ""
          }, ":": {
            validator: function (e, n, i, o, r) {
              var s = "[" + t.escapeRegex(r.radixPoint) + "]", a = new RegExp(s).test(e);
              return a && n.validPositions[i] && n.validPositions[i].match.placeholder === r.radixPoint && (a = {caret: i + 1}), a
            }, cardinality: 1, placeholder: function (e) {
              return e.radixPoint
            }
          }
        },
        onUnMask: function (e, n, i) {
          if ("" === n && !0 === i.nullable)return n;
          var o = e.replace(i.prefix, "");
          return o = o.replace(i.suffix, ""), o = o.replace(new RegExp(t.escapeRegex(i.groupSeparator), "g"), ""), "" !== i.placeholder.charAt(0) && (o = o.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== o.indexOf(i.radixPoint) && (o = o.replace(t.escapeRegex.call(this, i.radixPoint), ".")), Number(o)) : o
        },
        isComplete: function (e, n) {
          var i = e.join("");
          if (e.slice().join("") !== i)return !1;
          var o = i.replace(n.prefix, "");
          return o = o.replace(n.suffix, ""), o = o.replace(new RegExp(t.escapeRegex(n.groupSeparator), "g"), ""), "," === n.radixPoint && (o = o.replace(t.escapeRegex(n.radixPoint), ".")), isFinite(o)
        },
        onBeforeMask: function (e, n) {
          if (n.isNegative = void 0, e = e.toString().charAt(e.length - 1) === n.radixPoint ? e.toString().substr(0, e.length - 1) : e.toString(), "" !== n.radixPoint && isFinite(e)) {
            var i = e.split("."), o = "" !== n.groupSeparator ? parseInt(n.groupSize) : 0;
            2 === i.length && (i[0].length > o || i[1].length > o || i[0].length <= o && i[1].length < o) && (e = e.replace(".", n.radixPoint))
          }
          var r = e.match(/,/g), s = e.match(/\./g);
          if (s && r ? s.length > r.length ? (e = e.replace(/\./g, ""), e = e.replace(",", n.radixPoint)) : r.length > s.length ? (e = e.replace(/,/g, ""), e = e.replace(".", n.radixPoint)) : e = e.indexOf(".") < e.indexOf(",") ? e.replace(/\./g, "") : e = e.replace(/,/g, "") : e = e.replace(new RegExp(t.escapeRegex(n.groupSeparator), "g"), ""), 0 === n.digits && (-1 !== e.indexOf(".") ? e = e.substring(0, e.indexOf(".")) : -1 !== e.indexOf(",") && (e = e.substring(0, e.indexOf(",")))), "" !== n.radixPoint && isFinite(n.digits) && -1 !== e.indexOf(n.radixPoint)) {
            var a = e.split(n.radixPoint), l = a[1].match(new RegExp("\\d*"))[0];
            if (parseInt(n.digits) < l.toString().length) {
              var c = Math.pow(10, parseInt(n.digits));
              e = e.replace(t.escapeRegex(n.radixPoint), "."), e = Math.round(parseFloat(e) * c) / c, e = e.toString().replace(".", n.radixPoint)
            }
          }
          return e
        },
        canClearPosition: function (e, t, n, i, o) {
          var r = e.validPositions[t],
            s = r.input !== o.radixPoint || null !== e.validPositions[t].match.fn && !1 === o.decimalProtect || r.input === o.radixPoint && e.validPositions[t + 1] && null === e.validPositions[t + 1].match.fn || isFinite(r.input) || t === n || r.input === o.groupSeparator || r.input === o.negationSymbol.front || r.input === o.negationSymbol.back;
          return !s || "+" != r.match.nativeDef && "-" != r.match.nativeDef || (o.isNegative = !1), s
        },
        onKeyDown: function (n, i, o, r) {
          var s = e(this);
          if (n.ctrlKey)switch (n.keyCode) {
            case t.keyCode.UP:
              s.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(r.step)), s.trigger("setvalue");
              break;
            case t.keyCode.DOWN:
              s.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(r.step)), s.trigger("setvalue")
          }
        }
      },
      currency: {
        prefix: "$ ",
        groupSeparator: ",",
        alias: "numeric",
        placeholder: "0",
        autoGroup: !0,
        digits: 2,
        digitsOptional: !1,
        clearMaskOnLostFocus: !1
      },
      decimal: {alias: "numeric"},
      integer: {alias: "numeric", digits: 0, radixPoint: ""},
      percentage: {
        alias: "numeric",
        digits: 2,
        digitsOptional: !0,
        radixPoint: ".",
        placeholder: "0",
        autoGroup: !1,
        min: 0,
        max: 100,
        suffix: " %",
        allowMinus: !1
      }
    })
  }(window.dependencyLib || jQuery, window.Inputmask)
}(), function (e) {
  !function (e, t) {
    function n(e, t) {
      var n = (e.mask || e).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
        i = (t.mask || t).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
        o = (e.mask || e).split("#")[0], r = (t.mask || t).split("#")[0];
      return 0 === r.indexOf(o) ? -1 : 0 === o.indexOf(r) ? 1 : n.localeCompare(i)
    }

    var i = t.prototype.analyseMask;
    t.prototype.analyseMask = function (t, n, o) {
      function r(e, n, i) {
        n = n || "", i = i || a, "" !== n && (i[n] = {});
        for (var o = "", s = i[n] || i, l = e.length - 1; l >= 0; l--)t = e[l].mask || e[l], o = t.substr(0, 1), s[o] = s[o] || [], s[o].unshift(t.substr(1)), e.splice(l, 1);
        for (var c in s)s[c].length > 500 && r(s[c].slice(), c, s)
      }

      function s(t) {
        var n = "", i = [];
        for (var r in t)e.isArray(t[r]) ? 1 === t[r].length ? i.push(r + t[r]) : i.push(r + o.groupmarker.start + t[r].join(o.groupmarker.end + o.alternatormarker + o.groupmarker.start) + o.groupmarker.end) : i.push(r + s(t[r]));
        return 1 === i.length ? n += i[0] : n += o.groupmarker.start + i.join(o.groupmarker.end + o.alternatormarker + o.groupmarker.start) + o.groupmarker.end, n
      }

      var a = {};
      return o.phoneCodes && (o.phoneCodes && o.phoneCodes.length > 1e3 && (t = t.substr(1, t.length - 2), r(t.split(o.groupmarker.end + o.alternatormarker + o.groupmarker.start)), t = s(a)), t = t.replace(/9/g, "\\9")), i.call(this, t, n, o)
    }, t.extendAliases({
      abstractphone: {
        groupmarker: {start: "<", end: ">"},
        countrycode: "",
        phoneCodes: [],
        mask: function (e) {
          return e.definitions = {"#": t.prototype.definitions[9]}, e.phoneCodes.sort(n)
        },
        keepStatic: !0,
        onBeforeMask: function (e, t) {
          var n = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
          return (n.indexOf(t.countrycode) > 1 || -1 === n.indexOf(t.countrycode)) && (n = "+" + t.countrycode + n), n
        },
        onUnMask: function (e, t, n) {
          return t
        },
        inputmode: "tel"
      }
    })
  }(window.dependencyLib || jQuery, window.Inputmask)
}(), function (e) {
  !function (e, t) {
    t.extendAliases({
      Regex: {
        mask: "r",
        greedy: !1,
        repeat: "*",
        regex: null,
        regexTokens: null,
        tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
        quantifierFilter: /[0-9]+[^,]/,
        isComplete: function (e, t) {
          return new RegExp(t.regex, t.casing ? "i" : "").test(e.join(""))
        },
        definitions: {
          r: {
            validator: function (t, n, i, o, r) {
              function s(e, t) {
                this.matches = [], this.isGroup = e || !1, this.isQuantifier = t || !1, this.quantifier = {
                  min: 1,
                  max: 1
                }, this.repeaterPart = void 0
              }

              function a(t, n) {
                var i = !1;
                n && (d += "(", f++);
                for (var o = 0; o < t.matches.length; o++) {
                  var s = t.matches[o];
                  if (!0 === s.isGroup) i = a(s, !0); else if (!0 === s.isQuantifier) {
                    var c = e.inArray(s, t.matches), u = t.matches[c - 1], p = d;
                    if (isNaN(s.quantifier.max)) {
                      for (; s.repeaterPart && s.repeaterPart !== d && s.repeaterPart.length > d.length && !(i = a(u, !0)););
                      i = i || a(u, !0), i && (s.repeaterPart = d), d = p + s.quantifier.max
                    } else {
                      for (var h = 0, m = s.quantifier.max - 1; h < m && !(i = a(u, !0)); h++);
                      d = p + "{" + s.quantifier.min + "," + s.quantifier.max + "}"
                    }
                  } else if (void 0 !== s.matches)for (var g = 0; g < s.length && !(i = a(s[g], n)); g++); else {
                    var v;
                    if ("[" == s.charAt(0)) {
                      v = d, v += s;
                      for (var y = 0; y < f; y++)v += ")";
                      var b = new RegExp("^(" + v + ")$", r.casing ? "i" : "");
                      i = b.test(l)
                    } else for (var x = 0, w = s.length; x < w; x++)if ("\\" !== s.charAt(x)) {
                      v = d, v += s.substr(0, x + 1), v = v.replace(/\|$/, "");
                      for (var y = 0; y < f; y++)v += ")";
                      var b = new RegExp("^(" + v + ")$", r.casing ? "i" : "");
                      if (i = b.test(l))break
                    }
                    d += s
                  }
                  if (i)break
                }
                return n && (d += ")", f--), i
              }

              var l, c, u = n.buffer.slice(), d = "", p = !1, f = 0;
              null === r.regexTokens && function () {
                var e, t, n = new s, i = [];
                for (r.regexTokens = []; e = r.tokenizer.exec(r.regex);)switch (t = e[0], t.charAt(0)) {
                  case"(":
                    i.push(new s(!0));
                    break;
                  case")":
                    c = i.pop(), i.length > 0 ? i[i.length - 1].matches.push(c) : n.matches.push(c);
                    break;
                  case"{":
                  case"+":
                  case"*":
                    var o = new s(!1, !0);
                    t = t.replace(/[{}]/g, "");
                    var a = t.split(","), l = isNaN(a[0]) ? a[0] : parseInt(a[0]),
                      u = 1 === a.length ? l : isNaN(a[1]) ? a[1] : parseInt(a[1]);
                    if (o.quantifier = {min: l, max: u}, i.length > 0) {
                      var d = i[i.length - 1].matches;
                      e = d.pop(), e.isGroup || (c = new s(!0), c.matches.push(e), e = c), d.push(e), d.push(o)
                    } else e = n.matches.pop(), e.isGroup || (c = new s(!0), c.matches.push(e), e = c), n.matches.push(e), n.matches.push(o);
                    break;
                  default:
                    i.length > 0 ? i[i.length - 1].matches.push(t) : n.matches.push(t)
                }
                n.matches.length > 0 && r.regexTokens.push(n)
              }(), u.splice(i, 0, t), l = u.join("");
              for (var h = 0; h < r.regexTokens.length; h++) {
                var m = r.regexTokens[h];
                if (p = a(m, m.isGroup))break
              }
              return p
            }, cardinality: 1
          }
        }
      }
    })
  }(window.dependencyLib || jQuery, window.Inputmask)
}(), function (e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
  "use strict";
  var t = window.Slick || {};
  t = function () {
    function t(t, i) {
      var o, r = this;
      r.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: e(t),
        appendDots: e(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (t, n) {
          return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, r.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
    }

    var n = 0;
    return t
  }(), t.prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
  }, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
    var o = this;
    if ("boolean" == typeof n) i = n, n = null; else if (0 > n || n >= o.slideCount)return !1;
    o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, n) {
      e(n).attr("data-slick-index", t)
    }), o.$slidesCache = o.$slides, o.reinit()
  }, t.prototype.animateHeight = function () {
    var e = this;
    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.animate({height: t}, e.options.speed)
    }
  }, t.prototype.animateSlide = function (t, n) {
    var i = {}, o = this;
    o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({left: t}, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({top: t}, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({animStart: o.currentLeft}).animate({animStart: t}, {
      duration: o.options.speed,
      easing: o.options.easing,
      step: function (e) {
        e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
      },
      complete: function () {
        n && n.call()
      }
    })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function () {
      o.disableTransition(), n.call()
    }, o.options.speed))
  }, t.prototype.getNavTarget = function () {
    var t = this, n = t.options.asNavFor;
    return n && null !== n && (n = e(n).not(t.$slider)), n
  }, t.prototype.asNavFor = function (t) {
    var n = this, i = n.getNavTarget();
    null !== i && "object" == typeof i && i.each(function () {
      var n = e(this).slick("getSlick");
      n.unslicked || n.slideHandler(t, !0)
    })
  }, t.prototype.applyTransition = function (e) {
    var t = this, n = {};
    !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
  }, t.prototype.autoPlay = function () {
    var e = this;
    e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
  }, t.prototype.autoPlayClear = function () {
    var e = this;
    e.autoPlayTimer && clearInterval(e.autoPlayTimer)
  }, t.prototype.autoPlayIterator = function () {
    var e = this, t = e.currentSlide + e.options.slidesToScroll;
    e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
  }, t.prototype.buildArrows = function () {
    var t = this;
    !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }))
  }, t.prototype.buildDots = function () {
    var t, n, i = this;
    if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
      for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1)n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
      i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
    }
  }, t.prototype.buildOut = function () {
    var t = this;
    t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
      e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
    }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
  }, t.prototype.buildRows = function () {
    var e, t, n, i, o, r, s, a = this;
    if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
      for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; o > e; e++) {
        var l = document.createElement("div");
        for (t = 0; t < a.options.rows; t++) {
          var c = document.createElement("div");
          for (n = 0; n < a.options.slidesPerRow; n++) {
            var u = e * s + (t * a.options.slidesPerRow + n);
            r.get(u) && c.appendChild(r.get(u))
          }
          l.appendChild(c)
        }
        i.appendChild(l)
      }
      a.$slider.empty().append(i), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, t.prototype.checkResponsive = function (t, n) {
    var i, o, r, s = this, a = !1, l = s.$slider.width(),
      c = window.innerWidth || e(window).width();
    if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
      o = null;
      for (i in s.breakpoints)s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
      null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
    }
  }, t.prototype.changeSlide = function (t, n) {
    var i, o, r, s = this, a = e(t.currentTarget);
    switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll != 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
      case"previous":
        o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
        break;
      case"next":
        o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
        break;
      case"index":
        var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
        s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
        break;
      default:
        return
    }
  }, t.prototype.checkNavigable = function (e) {
    var t, n;
    if (t = this.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var i in t) {
      if (e < t[i]) {
        e = n;
        break
      }
      n = t[i]
    }
    return e
  }, t.prototype.cleanUpEvents = function () {
    var t = this;
    t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
  }, t.prototype.cleanUpSlideEvents = function () {
    var t = this;
    t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }, t.prototype.cleanUpRows = function () {
    var e, t = this;
    t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
  }, t.prototype.clickHandler = function (e) {
    !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
  }, t.prototype.destroy = function (t) {
    var n = this;
    n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      e(this).attr("style", e(this).data("originalStyling"))
    }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
  }, t.prototype.disableTransition = function (e) {
    var t = this, n = {};
    n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
  }, t.prototype.fadeSlide = function (e, t) {
    var n = this;
    !1 === n.cssTransitions ? (n.$slides.eq(e).css({zIndex: n.options.zIndex}), n.$slides.eq(e).animate({opacity: 1}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
      opacity: 1,
      zIndex: n.options.zIndex
    }), t && setTimeout(function () {
      n.disableTransition(e), t.call()
    }, n.options.speed))
  }, t.prototype.fadeSlideOut = function (e) {
    var t = this;
    !1 === t.cssTransitions ? t.$slides.eq(e).animate({
      opacity: 0,
      zIndex: t.options.zIndex - 2
    }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
      opacity: 0,
      zIndex: t.options.zIndex - 2
    }))
  }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
    var t = this;
    null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
  }, t.prototype.focusHandler = function () {
    var t = this;
    t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (n) {
      n.stopImmediatePropagation();
      var i = e(this);
      setTimeout(function () {
        t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
      }, 0)
    })
  }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
    return this.currentSlide
  }, t.prototype.getDotCount = function () {
    var e = this, t = 0, n = 0, i = 0;
    if (!0 === e.options.infinite)for (; t < e.slideCount;)++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode) i = e.slideCount; else if (e.options.asNavFor)for (; t < e.slideCount;)++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
    return i - 1
  }, t.prototype.getLeft = function (e) {
    var t, n, i, o = this, r = 0;
    return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + r, !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t
  }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
    return this.options[e]
  }, t.prototype.getNavigableIndexes = function () {
    var e, t = this, n = 0, i = 0, o = [];
    for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > n;)o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
    return o
  }, t.prototype.getSlick = function () {
    return this
  }, t.prototype.getSlideCount = function () {
    var t, n, i = this;
    return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {
      return r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft ? (t = r, !1) : void 0
    }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
  }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
    this.changeSlide({data: {message: "index", index: parseInt(e)}}, t)
  }, t.prototype.init = function (t) {
    var n = this;
    e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
  }, t.prototype.initADA = function () {
    var t = this;
    t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({tabindex: "-1"}), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
      e(this).attr({role: "option", "aria-describedby": "slick-slide" + t.instanceUid + n})
    }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function (n) {
      e(this).attr({
        role: "presentation",
        "aria-selected": "false",
        "aria-controls": "navigation" + t.instanceUid + n,
        id: "slick-slide" + t.instanceUid + n
      })
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
  },
    t.prototype.initArrowEvents = function () {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide))
    }, t.prototype.initDotEvents = function () {
    var t = this;
    !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {message: "index"}, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }, t.prototype.initSlideEvents = function () {
    var t = this;
    t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
  }, t.prototype.initializeEvents = function () {
    var t = this;
    t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {action: "start"}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {action: "move"}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {action: "end"}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
  }, t.prototype.initUI = function () {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
  }, t.prototype.keyHandler = function (e) {
    var t = this;
    e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({data: {message: !0 === t.options.rtl ? "next" : "previous"}}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({data: {message: !0 === t.options.rtl ? "previous" : "next"}}))
  }, t.prototype.lazyLoad = function () {
    function t(t) {
      e("img[data-lazy]", t).each(function () {
        var t = e(this), n = e(this).attr("data-lazy"), i = document.createElement("img");
        i.onload = function () {
          t.animate({opacity: 0}, 100, function () {
            t.attr("src", n).animate({opacity: 1}, 200, function () {
              t.removeAttr("data-lazy").removeClass("slick-loading")
            }), s.$slider.trigger("lazyLoaded", [s, t, n])
          })
        }, i.onerror = function () {
          t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n])
        }, i.src = n
      })
    }

    var n, i, o, r, s = this;
    !0 === s.options.centerMode ? !0 === s.options.infinite ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = Math.ceil(o + s.options.slidesToShow), !0 === s.options.fade && (o > 0 && o--, r <= s.slideCount && r++)), n = s.$slider.find(".slick-slide").slice(o, r), t(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(i))
  }, t.prototype.loadSlider = function () {
    var e = this;
    e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
  }, t.prototype.next = t.prototype.slickNext = function () {
    this.changeSlide({data: {message: "next"}})
  }, t.prototype.orientationChange = function () {
    var e = this;
    e.checkResponsive(), e.setPosition()
  }, t.prototype.pause = t.prototype.slickPause = function () {
    var e = this;
    e.autoPlayClear(), e.paused = !0
  }, t.prototype.play = t.prototype.slickPlay = function () {
    var e = this;
    e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
  }, t.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
  }, t.prototype.prev = t.prototype.slickPrev = function () {
    this.changeSlide({data: {message: "previous"}})
  }, t.prototype.preventDefault = function (e) {
    e.preventDefault()
  }, t.prototype.progressiveLazyLoad = function (t) {
    t = t || 1;
    var n, i, o, r = this, s = e("img[data-lazy]", r.$slider);
    s.length ? (n = s.first(), i = n.attr("data-lazy"), o = document.createElement("img"), o.onload = function () {
      n.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, n, i]), r.progressiveLazyLoad()
    }, o.onerror = function () {
      3 > t ? setTimeout(function () {
        r.progressiveLazyLoad(t + 1)
      }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, n, i]), r.progressiveLazyLoad())
    }, o.src = i) : r.$slider.trigger("allImagesLoaded", [r])
  }, t.prototype.refresh = function (t) {
    var n, i, o = this;
    i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {currentSlide: n}), o.init(), t || o.changeSlide({
      data: {
        message: "index",
        index: n
      }
    }, !1)
  }, t.prototype.registerBreakpoints = function () {
    var t, n, i, o = this, r = o.options.responsive || null;
    if ("array" === e.type(r) && r.length) {
      o.respondTo = o.options.respondTo || "window";
      for (t in r)if (i = o.breakpoints.length - 1, n = r[t].breakpoint, r.hasOwnProperty(t)) {
        for (; i >= 0;)o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
        o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
      }
      o.breakpoints.sort(function (e, t) {
        return o.options.mobileFirst ? e - t : t - e
      })
    }
  }, t.prototype.reinit = function () {
    var t = this;
    t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
  }, t.prototype.resize = function () {
    var t = this;
    e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
      t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
    }, 50))
  }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
    var i = this;
    return "boolean" == typeof e ? (t = e, e = !0 === t ? 0 : i.slideCount - 1) : e = !0 === t ? --e : e, !(i.slideCount < 1 || 0 > e || e > i.slideCount - 1) && (i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
  }, t.prototype.setCSS = function (e) {
    var t, n, i = this, o = {};
    !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
  }, t.prototype.setDimensions = function () {
    var e = this;
    !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
    var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
    !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
  }, t.prototype.setFade = function () {
    var t, n = this;
    n.$slides.each(function (i, o) {
      t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
        position: "relative",
        right: t,
        top: 0,
        zIndex: n.options.zIndex - 2,
        opacity: 0
      }) : e(o).css({
        position: "relative",
        left: t,
        top: 0,
        zIndex: n.options.zIndex - 2,
        opacity: 0
      })
    }), n.$slides.eq(n.currentSlide).css({zIndex: n.options.zIndex - 1, opacity: 1})
  }, t.prototype.setHeight = function () {
    var e = this;
    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.css("height", t)
    }
  }, t.prototype.setOption = t.prototype.slickSetOption = function () {
    var t, n, i, o, r, s = this, a = !1;
    if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o; else if ("multiple" === r) e.each(i, function (e, t) {
      s.options[e] = t
    }); else if ("responsive" === r)for (n in o)if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]]; else {
      for (t = s.options.responsive.length - 1; t >= 0;)s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
      s.options.responsive.push(o[n])
    }
    a && (s.unload(), s.reinit())
  }, t.prototype.setPosition = function () {
    var e = this;
    e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
  }, t.prototype.setProps = function () {
    var e = this, t = document.body.style;
    e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
  }, t.prototype.setSlideClasses = function (e) {
    var t, n, i, o, r = this;
    n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode ? (t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
  }, t.prototype.setupInfinite = function () {
    var t, n, i, o = this;
    if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
      for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1)n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
      for (t = 0; i > t; t += 1)n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
      o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        e(this).attr("id", "")
      })
    }
  }, t.prototype.interrupt = function (e) {
    var t = this;
    e || t.autoPlay(), t.interrupted = e
  }, t.prototype.selectHandler = function (t) {
    var n = this,
      i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
      o = parseInt(i.attr("data-slick-index"));
    return o || (o = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(o), void n.asNavFor(o)) : void n.slideHandler(o)
  }, t.prototype.slideHandler = function (e, t, n) {
    var i, o, r, s, a, l = null, c = this;
    return t = t || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (0 > e || e > c.getDotCount() * c.options.slidesToScroll) ? void(!1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function () {
      c.postSlide(i)
    }) : c.postSlide(i))) : !1 === c.options.infinite && !0 === c.options.centerMode && (0 > e || e > c.slideCount - c.options.slidesToScroll) ? void(!1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function () {
      c.postSlide(i)
    }) : c.postSlide(i))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = 0 > i ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {
      c.postSlide(o)
    })) : c.postSlide(o), void c.animateHeight()) : void(!0 !== n ? c.animateSlide(l, function () {
      c.postSlide(o)
    }) : c.postSlide(o))))
  }, t.prototype.startLoad = function () {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
  }, t.prototype.swipeDirection = function () {
    var e, t, n, i, o = this;
    return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : 360 >= i && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && 225 >= i ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && 135 >= i ? "down" : "up" : "vertical"
  }, t.prototype.swipeEnd = function (e) {
    var t, n, i = this;
    if (i.dragging = !1, i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX)return !1;
    if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
      switch (n = i.swipeDirection()) {
        case"left":
        case"down":
          t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
          break;
        case"right":
        case"up":
          t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
      }
      "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
    } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
  }, t.prototype.swipeHandler = function (e) {
    var t = this;
    if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
      case"start":
        t.swipeStart(e);
        break;
      case"move":
        t.swipeMove(e);
        break;
      case"end":
        t.swipeEnd(e)
    }
  }, t.prototype.swipeMove = function (e) {
    var t, n, i, o, r, s = this;
    return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), n = s.swipeDirection(), "vertical" !== n ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(), o = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, !1 === s.options.infinite && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + i * o : s.swipeLeft = t + i * (s.$list.height() / s.listWidth) * o, !0 === s.options.verticalSwiping && (s.swipeLeft = t + i * o), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
  }, t.prototype.swipeStart = function (e) {
    var t, n = this;
    return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
  }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
    var e = this;
    null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
  }, t.prototype.unload = function () {
    var t = this;
    e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, t.prototype.unslick = function (e) {
    var t = this;
    t.$slider.trigger("unslick", [t, e]), t.destroy()
  }, t.prototype.updateArrows = function () {
    var e = this;
    Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, t.prototype.updateDots = function () {
    var e = this;
    null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
  }, t.prototype.visibility = function () {
    var e = this;
    e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
  }, e.fn.slick = function () {
    var e, n, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1),
      s = i.length;
    for (e = 0; s > e; e++)if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n)return n;
    return i
  }
}), function (e, t, n) {
  "use strict";
  function i(n) {
    if (o = t.documentElement, r = t.body, F(), te = this, n = n || {}, se = n.constants || {}, n.easing)for (var i in n.easing)z[i] = n.easing[i];
    fe = n.edgeStrategy || "set", oe = {
      beforerender: n.beforerender,
      render: n.render,
      keyframe: n.keyframe
    }, re = !1 !== n.forceHeight, re && (_e = n.scale || 1), ae = n.mobileDeceleration || T, ce = !1 !== n.smoothScrolling, ue = n.smoothScrollingDuration || C, de = {targetTop: te.getScrollTop()}, Ne = (n.mobileCheck || function () {
      return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera)
    })(), Ne ? (ie = t.getElementById(n.skrollrBody || S), ie && ee(), Y(), Se(o, [y, w], [b])) : Se(o, [y, x], [b]), te.refresh(), ge(e, "resize orientationchange", function () {
      var e = o.clientWidth, t = o.clientHeight;
      (t !== Ie || e !== De) && (Ie = t, De = e, Re = !0)
    });
    var s = H();
    return function e() {
      B(), me = s(e)
    }(), te
  }

  var o, r, s = {
      get: function () {
        return te
      }, init: function (e) {
        return te || new i(e)
      }, VERSION: "0.6.29"
    }, a = Object.prototype.hasOwnProperty, l = e.Math, c = e.getComputedStyle, u = "touchstart",
    d = "touchmove", p = "touchcancel", f = "touchend", h = "skrollable", m = h + "-before",
    g = h + "-between", v = h + "-after", y = "skrollr", b = "no-" + y, x = y + "-desktop",
    w = y + "-mobile", k = "linear", T = .004, S = "skrollr-body", C = 200, $ = "center",
    E = "bottom", P = "___skrollable_id", A = /^(?:input|textarea|button|select)$/i,
    _ = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, L = /-([a-z0-9_])/g, O = function (e, t) {
      return t.toUpperCase()
    }, M = /[\-+]?[\d]*\.?[\d]+/g, D = /\{\?\}/g, I = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
    R = /[a-z\-]+-gradient/g, j = "", N = "", F = function () {
      var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
      if (c) {
        var t = c(r, null);
        for (var n in t)if (j = n.match(e) || +n == n && t[n].match(e))break;
        if (!j)return void(j = N = "");
        j = j[0], "-" === j.slice(0, 1) ? (N = j, j = {
          "-webkit-": "webkit",
          "-moz-": "Moz",
          "-ms-": "ms",
          "-o-": "O"
        }[j]) : N = "-" + j.toLowerCase() + "-"
      }
    }, H = function () {
      var t = e.requestAnimationFrame || e[j.toLowerCase() + "RequestAnimationFrame"], n = Ee();
      return (Ne || !t) && (t = function (t) {
        var i = Ee() - n, o = l.max(0, 1e3 / 60 - i);
        return e.setTimeout(function () {
          n = Ee(), t()
        }, o)
      }), t
    }, W = function () {
      var t = e.cancelAnimationFrame || e[j.toLowerCase() + "CancelAnimationFrame"];
      return (Ne || !t) && (t = function (t) {
        return e.clearTimeout(t)
      }), t
    }, z = {
      begin: function () {
        return 0
      }, end: function () {
        return 1
      }, linear: function (e) {
        return e
      }, quadratic: function (e) {
        return e * e
      }, cubic: function (e) {
        return e * e * e
      }, swing: function (e) {
        return -l.cos(e * l.PI) / 2 + .5
      }, sqrt: function (e) {
        return l.sqrt(e)
      }, outCubic: function (e) {
        return l.pow(e - 1, 3) + 1
      }, bounce: function (e) {
        var t;
        if (.5083 >= e) t = 3; else if (.8489 >= e) t = 9; else if (.96208 >= e) t = 27; else {
          if (!(.99981 >= e))return 1;
          t = 91
        }
        return 1 - l.abs(3 * l.cos(e * t * 1.028) / t)
      }
    };
  i.prototype.refresh = function (e) {
    var i, o, r = !1;
    for (e === n ? (r = !0, ne = [], je = 0, e = t.getElementsByTagName("*")) : e.length === n && (e = [e]), i = 0, o = e.length; o > i; i++) {
      var s = e[i], a = s, l = [], c = ce, u = fe, d = !1;
      if (r && P in s && delete s[P], s.attributes) {
        for (var p = 0, f = s.attributes.length; f > p; p++) {
          var m = s.attributes[p];
          if ("data-anchor-target" !== m.name)if ("data-smooth-scrolling" !== m.name)if ("data-edge-strategy" !== m.name)if ("data-emit-events" !== m.name) {
            var g = m.name.match(/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/);
            if (null !== g) {
              var v = {props: m.value, element: s, eventType: m.name.replace(L, O)};
              l.push(v);
              var y = g[1];
              y && (v.constant = y.substr(1));
              var b = g[2];
              /p$/.test(b) ? (v.isPercentage = !0, v.offset = (0 | b.slice(0, -1)) / 100) : v.offset = 0 | b;
              var x = g[3], w = g[4] || x;
              x && "start" !== x && "end" !== x ? (v.mode = "relative", v.anchors = [x, w]) : (v.mode = "absolute", "end" === x ? v.isEnd = !0 : v.isPercentage || (v.offset = v.offset * _e))
            }
          } else d = !0; else u = m.value; else c = "off" !== m.value; else if (null === (a = t.querySelector(m.value)))throw'Unable to find anchor target "' + m.value + '"'
        }
        if (l.length) {
          var k, T, S;
          !r && P in s ? (S = s[P], k = ne[S].styleAttr, T = ne[S].classAttr) : (S = s[P] = je++, k = s.style.cssText, T = Te(s)), ne[S] = {
            element: s,
            styleAttr: k,
            classAttr: T,
            anchorTarget: a,
            keyFrames: l,
            smoothScrolling: c,
            edgeStrategy: u,
            emitEvents: d,
            lastFrameIndex: -1
          }, Se(s, [h], [])
        }
      }
    }
    for (xe(), i = 0, o = e.length; o > i; i++) {
      var C = ne[e[i][P]];
      C !== n && (U(C), V(C))
    }
    return te
  }, i.prototype.relativeToAbsolute = function (e, t, n) {
    var i = o.clientHeight, r = e.getBoundingClientRect(), s = r.top, a = r.bottom - r.top;
    return t === E ? s -= i : t === $ && (s -= i / 2), n === E ? s += a : n === $ && (s += a / 2), (s += te.getScrollTop()) + .5 | 0
  }, i.prototype.animateTo = function (e, t) {
    t = t || {};
    var i = Ee(), o = te.getScrollTop(), r = t.duration === n ? 1e3 : t.duration;
    return le = {
      startTop: o,
      topDiff: e - o,
      targetTop: e,
      duration: r,
      startTime: i,
      endTime: i + r,
      easing: z[t.easing || k],
      done: t.done
    }, le.topDiff || (le.done && le.done.call(te, !1), le = n), te
  }, i.prototype.stopAnimateTo = function () {
    le && le.done && le.done.call(te, !0), le = n
  }, i.prototype.isAnimatingTo = function () {
    return !!le
  }, i.prototype.isMobile = function () {
    return Ne
  }, i.prototype.setScrollTop = function (t, n) {
    return pe = !0 === n, Ne ? Fe = l.min(l.max(t, 0), Ae) : e.scrollTo(0, t), te
  }, i.prototype.getScrollTop = function () {
    return Ne ? Fe : e.pageYOffset || o.scrollTop || r.scrollTop || 0
  }, i.prototype.getMaxScrollTop = function () {
    return Ae
  }, i.prototype.on = function (e, t) {
    return oe[e] = t, te
  }, i.prototype.off = function (e) {
    return delete oe[e], te
  }, i.prototype.destroy = function () {
    W()(me), ye(), Se(o, [b], [y, x, w]);
    for (var e = 0, t = ne.length; t > e; e++)J(ne[e].element);
    o.style.overflow = r.style.overflow = "", o.style.height = r.style.height = "", ie && s.setStyle(ie, "transform", "none"), te = n, ie = n, oe = n, re = n, Ae = 0, _e = 1, se = n, ae = n, Le = "down", Oe = -1, De = 0, Ie = 0, Re = !1, le = n, ce = n, ue = n, de = n, pe = n, je = 0, fe = n, Ne = !1, Fe = 0, he = n
  };
  var Y = function () {
    var i, s, a, c, h, m, g, v, y, b, x, w;
    ge(o, [u, d, p, f].join(" "), function (e) {
      var o = e.changedTouches[0];
      for (c = e.target; 3 === c.nodeType;)c = c.parentNode;
      switch (h = o.clientY, m = o.clientX, b = e.timeStamp, A.test(c.tagName) || e.preventDefault(), e.type) {
        case u:
          i && i.blur(), te.stopAnimateTo(), i = c, s = g = h, a = m, y = b;
          break;
        case d:
          A.test(c.tagName) && t.activeElement !== c && e.preventDefault(), v = h - g, w = b - x, te.setScrollTop(Fe - v, !0), g = h, x = b;
          break;
        default:
        case p:
        case f:
          var r = s - h, k = a - m;
          if (49 > k * k + r * r) {
            if (!A.test(i.tagName)) {
              i.focus();
              var T = t.createEvent("MouseEvents");
              T.initMouseEvent("click", !0, !0, e.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), i.dispatchEvent(T)
            }
            return
          }
          i = n;
          var S = v / w;
          S = l.max(l.min(S, 3), -3);
          var C = l.abs(S / ae), $ = S * C + .5 * ae * C * C, E = te.getScrollTop() - $, P = 0;
          E > Ae ? (P = (Ae - E) / $, E = Ae) : 0 > E && (P = -E / $, E = 0), C *= 1 - P, te.animateTo(E + .5 | 0, {
            easing: "outCubic",
            duration: C
          })
      }
    }), e.scrollTo(0, 0), o.style.overflow = r.style.overflow = "hidden"
  }, X = function () {
    var e, t, n, i, r, s, a, c, u, d, p, f = o.clientHeight, h = we();
    for (c = 0, u = ne.length; u > c; c++)for (e = ne[c], t = e.element, n = e.anchorTarget, i = e.keyFrames, r = 0, s = i.length; s > r; r++)a = i[r], d = a.offset, p = h[a.constant] || 0, a.frame = d, a.isPercentage && (d *= f, a.frame = d), "relative" === a.mode && (J(t), a.frame = te.relativeToAbsolute(n, a.anchors[0], a.anchors[1]) - d, J(t, !0)), a.frame += p, re && !a.isEnd && a.frame > Ae && (Ae = a.frame);
    for (Ae = l.max(Ae, ke()), c = 0, u = ne.length; u > c; c++) {
      for (e = ne[c], i = e.keyFrames, r = 0, s = i.length; s > r; r++)a = i[r], p = h[a.constant] || 0, a.isEnd && (a.frame = Ae - a.offset + p);
      e.keyFrames.sort(Pe)
    }
  }, q = function (e, t) {
    for (var n = 0, i = ne.length; i > n; n++) {
      var o, r, l = ne[n], c = l.element, u = l.smoothScrolling ? e : t, d = l.keyFrames,
        p = d.length, f = d[0], y = d[d.length - 1], b = u < f.frame, x = u > y.frame,
        w = b ? f : y, k = l.emitEvents, T = l.lastFrameIndex;
      if (b || x) {
        if (b && -1 === l.edge || x && 1 === l.edge)continue;
        switch (b ? (Se(c, [m], [v, g]), k && T > -1 && (be(c, f.eventType, Le), l.lastFrameIndex = -1)) : (Se(c, [v], [m, g]), k && p > T && (be(c, y.eventType, Le), l.lastFrameIndex = p)), l.edge = b ? -1 : 1, l.edgeStrategy) {
          case"reset":
            J(c);
            continue;
          case"ease":
            u = w.frame;
            break;
          default:
          case"set":
            var S = w.props;
            for (o in S)a.call(S, o) && (r = Z(S[o].value), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), r) : s.setStyle(c, o, r));
            continue
        }
      } else 0 !== l.edge && (Se(c, [h, g], [m, v]), l.edge = 0);
      for (var C = 0; p - 1 > C; C++)if (u >= d[C].frame && u <= d[C + 1].frame) {
        var $ = d[C], E = d[C + 1];
        for (o in $.props)if (a.call($.props, o)) {
          var P = (u - $.frame) / (E.frame - $.frame);
          P = $.props[o].easing(P), r = Q($.props[o].value, E.props[o].value, P), r = Z(r), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), r) : s.setStyle(c, o, r)
        }
        k && T !== C && ("down" === Le ? be(c, $.eventType, Le) : be(c, E.eventType, Le), l.lastFrameIndex = C);
        break
      }
    }
  }, B = function () {
    Re && (Re = !1, xe());
    var e, t, i = te.getScrollTop(), o = Ee();
    if (le) o >= le.endTime ? (i = le.targetTop, e = le.done, le = n) : (t = le.easing((o - le.startTime) / le.duration), i = le.startTop + t * le.topDiff | 0), te.setScrollTop(i, !0); else if (!pe) {
      var r = de.targetTop - i;
      r && (de = {
        startTop: Oe,
        topDiff: i - Oe,
        targetTop: i,
        startTime: Me,
        endTime: Me + ue
      }), o <= de.endTime && (t = z.sqrt((o - de.startTime) / ue), i = de.startTop + t * de.topDiff | 0)
    }
    if (pe || Oe !== i) {
      Le = i > Oe ? "down" : Oe > i ? "up" : Le, pe = !1;
      var a = {curTop: i, lastTop: Oe, maxTop: Ae, direction: Le};
      !1 !== (oe.beforerender && oe.beforerender.call(te, a)) && (q(i, te.getScrollTop()), Ne && ie && s.setStyle(ie, "transform", "translate(0, " + -Fe + "px) " + he), Oe = i, oe.render && oe.render.call(te, a)), e && e.call(te, !1)
    }
    Me = o
  }, U = function (e) {
    for (var t = 0, n = e.keyFrames.length; n > t; t++) {
      for (var i, o, r, s, a = e.keyFrames[t], l = {}; null !== (s = _.exec(a.props));)r = s[1], o = s[2], i = r.match(/^(@?[a-z\-]+)\[(\w+)\]$/), null !== i ? (r = i[1], i = i[2]) : i = k, o = o.indexOf("!") ? G(o) : [o.slice(1)], l[r] = {
        value: o,
        easing: z[i]
      };
      a.props = l
    }
  }, G = function (e) {
    var t = [];
    return I.lastIndex = 0, e = e.replace(I, function (e) {
      return e.replace(M, function (e) {
        return e / 255 * 100 + "%"
      })
    }), N && (R.lastIndex = 0, e = e.replace(R, function (e) {
      return N + e
    })), e = e.replace(M, function (e) {
      return t.push(+e), "{?}"
    }), t.unshift(e), t
  }, V = function (e) {
    var t, n, i = {};
    for (t = 0, n = e.keyFrames.length; n > t; t++)K(e.keyFrames[t], i);
    for (i = {}, t = e.keyFrames.length - 1; t >= 0; t--)K(e.keyFrames[t], i)
  }, K = function (e, t) {
    var n;
    for (n in t)a.call(e.props, n) || (e.props[n] = t[n]);
    for (n in e.props)t[n] = e.props[n]
  }, Q = function (e, t, n) {
    var i, o = e.length;
    if (o !== t.length)throw"Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
    var r = [e[0]];
    for (i = 1; o > i; i++)r[i] = e[i] + (t[i] - e[i]) * n;
    return r
  }, Z = function (e) {
    var t = 1;
    return D.lastIndex = 0, e[0].replace(D, function () {
      return e[t++]
    })
  }, J = function (e, t) {
    e = [].concat(e);
    for (var n, i, o = 0, r = e.length; r > o; o++)i = e[o], (n = ne[i[P]]) && (t ? (i.style.cssText = n.dirtyStyleAttr, Se(i, n.dirtyClassAttr)) : (n.dirtyStyleAttr = i.style.cssText, n.dirtyClassAttr = Te(i), i.style.cssText = n.styleAttr, Se(i, n.classAttr)))
  }, ee = function () {
    he = "translateZ(0)", s.setStyle(ie, "transform", he);
    var e = c(ie), t = e.getPropertyValue("transform"), n = e.getPropertyValue(N + "transform");
    t && "none" !== t || n && "none" !== n || (he = "")
  };
  s.setStyle = function (e, t, n) {
    var i = e.style
    ;
    if ("zIndex" === (t = t.replace(L, O).replace("-", ""))) isNaN(n) ? i[t] = n : i[t] = "" + (0 | n); else if ("float" === t) i.styleFloat = i.cssFloat = n; else try {
      j && (i[j + t.slice(0, 1).toUpperCase() + t.slice(1)] = n), i[t] = n
    } catch (e) {
    }
  };
  var te, ne, ie, oe, re, se, ae, le, ce, ue, de, pe, fe, he, me,
    ge = s.addEvent = function (t, n, i) {
      var o = function (t) {
        return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function () {
          t.returnValue = !1, t.defaultPrevented = !0
        }), i.call(this, t)
      };
      n = n.split(" ");
      for (var r, s = 0, a = n.length; a > s; s++)r = n[s], t.addEventListener ? t.addEventListener(r, i, !1) : t.attachEvent("on" + r, o), He.push({
        element: t,
        name: r,
        listener: i
      })
    }, ve = s.removeEvent = function (e, t, n) {
      t = t.split(" ");
      for (var i = 0, o = t.length; o > i; i++)e.removeEventListener ? e.removeEventListener(t[i], n, !1) : e.detachEvent("on" + t[i], n)
    }, ye = function () {
      for (var e, t = 0, n = He.length; n > t; t++)e = He[t], ve(e.element, e.name, e.listener);
      He = []
    }, be = function (e, t, n) {
      oe.keyframe && oe.keyframe.call(te, e, t, n)
    }, xe = function () {
      var e = te.getScrollTop();
      Ae = 0, re && !Ne && (r.style.height = ""), X(), re && !Ne && (r.style.height = Ae + o.clientHeight + "px"), Ne ? te.setScrollTop(l.min(te.getScrollTop(), Ae)) : te.setScrollTop(e, !0), pe = !0
    }, we = function () {
      var e, t, n = o.clientHeight, i = {};
      for (e in se)t = se[e], "function" == typeof t ? t = t.call(te) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * n), i[e] = t;
      return i
    }, ke = function () {
      var e = 0;
      return ie && (e = l.max(ie.offsetHeight, ie.scrollHeight)), l.max(e, r.scrollHeight, r.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight) - o.clientHeight
    }, Te = function (t) {
      var n = "className";
      return e.SVGElement && t instanceof e.SVGElement && (t = t[n], n = "baseVal"), t[n]
    }, Se = function (t, i, o) {
      var r = "className";
      if (e.SVGElement && t instanceof e.SVGElement && (t = t[r], r = "baseVal"), o === n)return void(t[r] = i);
      for (var s = t[r], a = 0, l = o.length; l > a; a++)s = $e(s).replace($e(o[a]), " ");
      s = Ce(s);
      for (var c = 0, u = i.length; u > c; c++)-1 === $e(s).indexOf($e(i[c])) && (s += " " + i[c]);
      t[r] = Ce(s)
    }, Ce = function (e) {
      return e.replace(/^\s+|\s+$/g, "")
    }, $e = function (e) {
      return " " + e + " "
    }, Ee = Date.now || function () {
        return +new Date
      }, Pe = function (e, t) {
      return e.frame - t.frame
    }, Ae = 0, _e = 1, Le = "down", Oe = -1, Me = Ee(), De = 0, Ie = 0, Re = !1, je = 0, Ne = !1,
    Fe = 0, He = [];
  "function" == typeof define && define.amd ? define([], function () {
    return s
  }) : "undefined" != typeof module && module.exports ? module.exports = s : e.skrollr = s
}(window, document), function (e, t) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (n) {
    return t(e, n)
  }) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
}(window, function (e, t) {
  "use strict";
  function n(n, r, a) {
    function l(e, t, i) {
      var o, r = "$()." + n + '("' + t + '")';
      return e.each(function (e, l) {
        var c = a.data(l, n);
        if (!c)return void s(n + " not initialized. Cannot call methods, i.e. " + r);
        var u = c[t];
        if (!u || "_" == t.charAt(0))return void s(r + " is not a valid method");
        var d = u.apply(c, i);
        o = void 0 === o ? d : o
      }), void 0 !== o ? o : e
    }

    function c(e, t) {
      e.each(function (e, i) {
        var o = a.data(i, n);
        o ? (o.option(t), o._init()) : (o = new r(i, t), a.data(i, n, o))
      })
    }

    (a = a || t || e.jQuery) && (r.prototype.option || (r.prototype.option = function (e) {
      a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e))
    }), a.fn[n] = function (e) {
      if ("string" == typeof e) {
        return l(this, e, o.call(arguments, 1))
      }
      return c(this, e), this
    }, i(a))
  }

  function i(e) {
    !e || e && e.bridget || (e.bridget = n)
  }

  var o = Array.prototype.slice, r = e.console, s = void 0 === r ? function () {
  } : function (e) {
    r.error(e)
  };
  return i(t || e.jQuery), n
}), function (e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
  function e() {
  }

  var t = e.prototype;
  return t.on = function (e, t) {
    if (e && t) {
      var n = this._events = this._events || {}, i = n[e] = n[e] || [];
      return -1 == i.indexOf(t) && i.push(t), this
    }
  }, t.once = function (e, t) {
    if (e && t) {
      this.on(e, t);
      var n = this._onceEvents = this._onceEvents || {};
      return (n[e] = n[e] || {})[t] = !0, this
    }
  }, t.off = function (e, t) {
    var n = this._events && this._events[e];
    if (n && n.length) {
      var i = n.indexOf(t);
      return -1 != i && n.splice(i, 1), this
    }
  }, t.emitEvent = function (e, t) {
    var n = this._events && this._events[e];
    if (n && n.length) {
      var i = 0, o = n[i];
      t = t || [];
      for (var r = this._onceEvents && this._onceEvents[e]; o;) {
        var s = r && r[o];
        s && (this.off(e, o), delete r[o]), o.apply(this, t), i += s ? 0 : 1, o = n[i]
      }
      return this
    }
  }, e
}), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
    return t()
  }) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function () {
  "use strict";
  function e(e) {
    var t = parseFloat(e);
    return -1 == e.indexOf("%") && !isNaN(t) && t
  }

  function t() {
  }

  function n() {
    for (var e = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    }, t = 0; c > t; t++) {
      e[l[t]] = 0
    }
    return e
  }

  function i(e) {
    var t = getComputedStyle(e);
    return t || a("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), t
  }

  function o() {
    if (!u) {
      u = !0;
      var t = document.createElement("div");
      t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
      var n = document.body || document.documentElement;
      n.appendChild(t);
      var o = i(t);
      r.isBoxSizeOuter = s = 200 == e(o.width), n.removeChild(t)
    }
  }

  function r(t) {
    if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
      var r = i(t);
      if ("none" == r.display)return n();
      var a = {};
      a.width = t.offsetWidth, a.height = t.offsetHeight;
      for (var u = a.isBorderBox = "border-box" == r.boxSizing, d = 0; c > d; d++) {
        var p = l[d], f = r[p], h = parseFloat(f);
        a[p] = isNaN(h) ? 0 : h
      }
      var m = a.paddingLeft + a.paddingRight, g = a.paddingTop + a.paddingBottom,
        v = a.marginLeft + a.marginRight, y = a.marginTop + a.marginBottom,
        b = a.borderLeftWidth + a.borderRightWidth, x = a.borderTopWidth + a.borderBottomWidth,
        w = u && s, k = e(r.width);
      !1 !== k && (a.width = k + (w ? 0 : m + b));
      var T = e(r.height);
      return !1 !== T && (a.height = T + (w ? 0 : g + x)), a.innerWidth = a.width - (m + b), a.innerHeight = a.height - (g + x), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
    }
  }

  var s, a = "undefined" == typeof console ? t : function (e) {
      console.error(e)
    },
    l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
    c = l.length, u = !1;
  return r
}), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function () {
  "use strict";
  var e = function () {
    var e = Element.prototype;
    if (e.matches)return "matches";
    if (e.matchesSelector)return "matchesSelector";
    for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
      var i = t[n], o = i + "MatchesSelector";
      if (e[o])return o
    }
  }();
  return function (t, n) {
    return t[e](n)
  }
}), function (e, t) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (n) {
    return t(e, n)
  }) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
}(window, function (e, t) {
  var n = {};
  n.extend = function (e, t) {
    for (var n in t)e[n] = t[n];
    return e
  }, n.modulo = function (e, t) {
    return (e % t + t) % t
  }, n.makeArray = function (e) {
    var t = [];
    if (Array.isArray(e)) t = e; else if (e && "number" == typeof e.length)for (var n = 0; n < e.length; n++)t.push(e[n]); else t.push(e);
    return t
  }, n.removeFrom = function (e, t) {
    var n = e.indexOf(t);
    -1 != n && e.splice(n, 1)
  }, n.getParent = function (e, n) {
    for (; e != document.body;)if (e = e.parentNode, t(e, n))return e
  }, n.getQueryElement = function (e) {
    return "string" == typeof e ? document.querySelector(e) : e
  }, n.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e)
  }, n.filterFindElements = function (e, i) {
    e = n.makeArray(e);
    var o = [];
    return e.forEach(function (e) {
      if (e instanceof HTMLElement) {
        if (!i)return void o.push(e);
        t(e, i) && o.push(e);
        for (var n = e.querySelectorAll(i), r = 0; r < n.length; r++)o.push(n[r])
      }
    }), o
  }, n.debounceMethod = function (e, t, n) {
    var i = e.prototype[t], o = t + "Timeout";
    e.prototype[t] = function () {
      var e = this[o];
      e && clearTimeout(e);
      var t = arguments, r = this;
      this[o] = setTimeout(function () {
        i.apply(r, t), delete r[o]
      }, n || 100)
    }
  }, n.docReady = function (e) {
    var t = document.readyState;
    "complete" == t || "interactive" == t ? e() : document.addEventListener("DOMContentLoaded", e)
  }, n.toDashed = function (e) {
    return e.replace(/(.)([A-Z])/g, function (e, t, n) {
      return t + "-" + n
    }).toLowerCase()
  };
  var i = e.console;
  return n.htmlInit = function (t, o) {
    n.docReady(function () {
      var r = n.toDashed(o), s = "data-" + r, a = document.querySelectorAll("[" + s + "]"),
        l = document.querySelectorAll(".js-" + r), c = n.makeArray(a).concat(n.makeArray(l)),
        u = s + "-options", d = e.jQuery;
      c.forEach(function (e) {
        var n, r = e.getAttribute(s) || e.getAttribute(u);
        try {
          n = r && JSON.parse(r)
        } catch (t) {
          return void(i && i.error("Error parsing " + s + " on " + e.className + ": " + t))
        }
        var a = new t(e, n);
        d && d.data(e, o, a)
      })
    })
  }, n
}), function (e, t) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, function (e, t) {
  "use strict";
  function n(e) {
    for (var t in e)return !1;
    return null, !0
  }

  function i(e, t) {
    e && (this.element = e, this.layout = t, this.position = {x: 0, y: 0}, this._create())
  }

  var o = document.documentElement.style,
    r = "string" == typeof o.transition ? "transition" : "WebkitTransition",
    s = "string" == typeof o.transform ? "transform" : "WebkitTransform",
    a = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[r], l = {
      transform: s,
      transition: r,
      transitionDuration: r + "Duration",
      transitionProperty: r + "Property",
      transitionDelay: r + "Delay"
    }, c = i.prototype = Object.create(e.prototype);
  c.constructor = i, c._create = function () {
    this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
  }, c.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e)
  }, c.getSize = function () {
    this.size = t(this.element)
  }, c.css = function (e) {
    var t = this.element.style;
    for (var n in e) {
      t[l[n] || n] = e[n]
    }
  }, c.getPosition = function () {
    var e = getComputedStyle(this.element), t = this.layout._getOption("originLeft"),
      n = this.layout._getOption("originTop"), i = e[t ? "left" : "right"],
      o = e[n ? "top" : "bottom"], r = this.layout.size,
      s = -1 != i.indexOf("%") ? parseFloat(i) / 100 * r.width : parseInt(i, 10),
      a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
    s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= t ? r.paddingLeft : r.paddingRight, a -= n ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
  }, c.layoutPosition = function () {
    var e = this.layout.size, t = {}, n = this.layout._getOption("originLeft"),
      i = this.layout._getOption("originTop"), o = n ? "paddingLeft" : "paddingRight",
      r = n ? "left" : "right", s = n ? "right" : "left", a = this.position.x + e[o];
    t[r] = this.getXValue(a), t[s] = "";
    var l = i ? "paddingTop" : "paddingBottom", c = i ? "top" : "bottom", u = i ? "bottom" : "top",
      d = this.position.y + e[l];
    t[c] = this.getYValue(d), t[u] = "", this.css(t), this.emitEvent("layout", [this])
  }, c.getXValue = function (e) {
    var t = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
  }, c.getYValue = function (e) {
    var t = this.layout._getOption("horizontal");
    return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
  }, c._transitionTo = function (e, t) {
    this.getPosition();
    var n = this.position.x, i = this.position.y, o = parseInt(e, 10), r = parseInt(t, 10),
      s = o === this.position.x && r === this.position.y;
    if (this.setPosition(e, t), s && !this.isTransitioning)return void this.layoutPosition();
    var a = e - n, l = t - i, c = {};
    c.transform = this.getTranslate(a, l), this.transition({
      to: c,
      onTransitionEnd: {transform: this.layoutPosition},
      isCleaning: !0
    })
  }, c.getTranslate = function (e, t) {
    var n = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop");
    return e = n ? e : -e, t = i ? t : -t, "translate3d(" + e + "px, " + t + "px, 0)"
  }, c.goTo = function (e, t) {
    this.setPosition(e, t), this.layoutPosition()
  }, c.moveTo = c._transitionTo, c.setPosition = function (e, t) {
    this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
  }, c._nonTransition = function (e) {
    this.css(e.to), e.isCleaning && this._removeStyles(e.to);
    for (var t in e.onTransitionEnd)e.onTransitionEnd[t].call(this)
  }, c.transition = function (e) {
    if (!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(e);
    var t = this._transn;
    for (var n in e.onTransitionEnd)t.onEnd[n] = e.onTransitionEnd[n];
    for (n in e.to)t.ingProperties[n] = !0, e.isCleaning && (t.clean[n] = !0);
    if (e.from) {
      this.css(e.from);
      this.element.offsetHeight;
      null
    }
    this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
  };
  var u = "opacity," + function (e) {
      return e.replace(/([A-Z])/g, function (e) {
        return "-" + e.toLowerCase()
      })
    }(s);
  c.enableTransition = function () {
    if (!this.isTransitioning) {
      var e = this.layout.options.transitionDuration;
      e = "number" == typeof e ? e + "ms" : e, this.css({
        transitionProperty: u,
        transitionDuration: e,
        transitionDelay: this.staggerDelay || 0
      }), this.element.addEventListener(a, this, !1)
    }
  }, c.onwebkitTransitionEnd = function (e) {
    this.ontransitionend(e)
  }, c.onotransitionend = function (e) {
    this.ontransitionend(e)
  };
  var d = {"-webkit-transform": "transform"};
  c.ontransitionend = function (e) {
    if (e.target === this.element) {
      var t = this._transn, i = d[e.propertyName] || e.propertyName;
      if (delete t.ingProperties[i], n(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd) {
        t.onEnd[i].call(this), delete t.onEnd[i]
      }
      this.emitEvent("transitionEnd", [this])
    }
  }, c.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), this.isTransitioning = !1
  }, c._removeStyles = function (e) {
    var t = {};
    for (var n in e)t[n] = "";
    this.css(t)
  };
  var p = {transitionProperty: "", transitionDuration: "", transitionDelay: ""};
  return c.removeTransitionStyles = function () {
    this.css(p)
  }, c.stagger = function (e) {
    e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
  }, c.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
  }, c.remove = function () {
    return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
      this.removeElem()
    }), void this.hide()) : void this.removeElem()
  }, c.reveal = function () {
    delete this.isHidden, this.css({display: ""});
    var e = this.layout.options, t = {};
    t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
      from: e.hiddenStyle,
      to: e.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: t
    })
  }, c.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal")
  }, c.getHideRevealTransitionEndProperty = function (e) {
    var t = this.layout.options[e];
    if (t.opacity)return "opacity";
    for (var n in t)return n
  }, c.hide = function () {
    this.isHidden = !0, this.css({display: ""});
    var e = this.layout.options, t = {};
    t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
      from: e.visibleStyle,
      to: e.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: t
    })
  }, c.onHideTransitionEnd = function () {
    this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
  }, c.destroy = function () {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    })
  }, i
}), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (n, i, o, r) {
    return t(e, n, i, o, r)
  }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
}(window, function (e, t, n, i, o) {
  "use strict";
  function r(e, t) {
    var n = i.getQueryElement(e);
    if (!n)return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (n || e)));
    this.element = n, c && (this.$element = c(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(t);
    var o = ++d;
    this.element.outlayerGUID = o, p[o] = this, this._create(), this._getOption("initLayout") && this.layout()
  }

  function s(e) {
    function t() {
      e.apply(this, arguments)
    }

    return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t
  }

  function a(e) {
    if ("number" == typeof e)return e;
    var t = e.match(/(^\d*\.?\d*)(\w*)/), n = t && t[1], i = t && t[2];
    return n.length ? (n = parseFloat(n)) * (h[i] || 1) : 0
  }

  var l = e.console, c = e.jQuery, u = function () {
  }, d = 0, p = {};
  r.namespace = "outlayer", r.Item = o, r.defaults = {
    containerStyle: {position: "relative"},
    initLayout: !0,
    originLeft: !0,
    originTop: !0,
    resize: !0,
    resizeContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
    visibleStyle: {opacity: 1, transform: "scale(1)"}
  };
  var f = r.prototype;
  i.extend(f, t.prototype), f.option = function (e) {
    i.extend(this.options, e)
  }, f._getOption = function (e) {
    var t = this.constructor.compatOptions[e];
    return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
  }, r.compatOptions = {
    initLayout: "isInitLayout",
    horizontal: "isHorizontal",
    layoutInstant: "isLayoutInstant",
    originLeft: "isOriginLeft",
    originTop: "isOriginTop",
    resize: "isResizeBound",
    resizeContainer: "isResizingContainer"
  }, f._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
  }, f.reloadItems = function () {
    this.items = this._itemize(this.element.children)
  }, f._itemize = function (e) {
    for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], o = 0; o < t.length; o++) {
      var r = t[o], s = new n(r, this);
      i.push(s)
    }
    return i
  }, f._filterFindItemElements = function (e) {
    return i.filterFindElements(e, this.options.itemSelector)
  }, f.getItemElements = function () {
    return this.items.map(function (e) {
      return e.element
    })
  }, f.layout = function () {
    this._resetLayout(), this._manageStamps();
    var e = this._getOption("layoutInstant"), t = void 0 !== e ? e : !this._isLayoutInited;
    this.layoutItems(this.items, t), this._isLayoutInited = !0
  }, f._init = f.layout, f._resetLayout = function () {
    this.getSize()
  }, f.getSize = function () {
    this.size = n(this.element)
  }, f._getMeasurement = function (e, t) {
    var i, o = this.options[e];
    o ? ("string" == typeof o ? i = this.element.querySelector(o) : o instanceof HTMLElement && (i = o), this[e] = i ? n(i)[t] : o) : this[e] = 0
  }, f.layoutItems = function (e, t) {
    e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
  }, f._getItemsForLayout = function (e) {
    return e.filter(function (e) {
      return !e.isIgnored
    })
  }, f._layoutItems = function (e, t) {
    if (this._emitCompleteOnItems("layout", e), e && e.length) {
      var n = [];
      e.forEach(function (e) {
        var i = this._getItemLayoutPosition(e);
        i.item = e, i.isInstant = t || e.isLayoutInstant, n.push(i)
      }, this), this._processLayoutQueue(n)
    }
  }, f._getItemLayoutPosition = function () {
    return {x: 0, y: 0}
  }, f._processLayoutQueue = function (e) {
    this.updateStagger(), e.forEach(function (e, t) {
      this._positionItem(e.item, e.x, e.y, e.isInstant, t)
    }, this)
  }, f.updateStagger = function () {
    var e = this.options.stagger;
    return null === e || void 0 === e ? void(this.stagger = 0) : (this.stagger = a(e), this.stagger)
  }, f._positionItem = function (e, t, n, i, o) {
    i ? e.goTo(t, n) : (e.stagger(o * this.stagger), e.moveTo(t, n))
  }, f._postLayout = function () {
    this.resizeContainer()
  }, f.resizeContainer = function () {
    if (this._getOption("resizeContainer")) {
      var e = this._getContainerSize();
      e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
    }
  }, f._getContainerSize = u, f._setContainerMeasure = function (e, t) {
    if (void 0 !== e) {
      var n = this.size;
      n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
    }
  }, f._emitCompleteOnItems = function (e, t) {
    function n() {
      o.dispatchEvent(e + "Complete", null, [t])
    }

    function i() {
      ++s == r && n()
    }

    var o = this, r = t.length;
    if (!t || !r)return void n();
    var s = 0;
    t.forEach(function (t) {
      t.once(e, i)
    })
  }, f.dispatchEvent = function (e, t, n) {
    var i = t ? [t].concat(n) : n;
    if (this.emitEvent(e, i), c)if (this.$element = this.$element || c(this.element), t) {
      var o = c.Event(t);
      o.type = e, this.$element.trigger(o, n)
    } else this.$element.trigger(e, n)
  }, f.ignore = function (e) {
    var t = this.getItem(e);
    t && (t.isIgnored = !0)
  }, f.unignore = function (e) {
    var t = this.getItem(e);
    t && delete t.isIgnored
  }, f.stamp = function (e) {
    (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
  }, f.unstamp = function (e) {
    (e = this._find(e)) && e.forEach(function (e) {
      i.removeFrom(this.stamps, e), this.unignore(e)
    }, this)
  }, f._find = function (e) {
    return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = i.makeArray(e)) : void 0
  }, f._manageStamps = function () {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
  }, f._getBoundingRect = function () {
    var e = this.element.getBoundingClientRect(), t = this.size;
    this._boundingRect = {
      left: e.left + t.paddingLeft + t.borderLeftWidth,
      top: e.top + t.paddingTop + t.borderTopWidth,
      right: e.right - (t.paddingRight + t.borderRightWidth),
      bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
    }
  }, f._manageStamp = u, f._getElementOffset = function (e) {
    var t = e.getBoundingClientRect(), i = this._boundingRect, o = n(e);
    return {
      left: t.left - i.left - o.marginLeft,
      top: t.top - i.top - o.marginTop,
      right: i.right - t.right - o.marginRight,
      bottom: i.bottom - t.bottom - o.marginBottom
    }
  }, f.handleEvent = i.handleEvent, f.bindResize = function () {
    e.addEventListener("resize", this), this.isResizeBound = !0
  }, f.unbindResize = function () {
    e.removeEventListener("resize", this), this.isResizeBound = !1
  }, f.onresize = function () {
    this.resize()
  }, i.debounceMethod(r, "onresize", 100), f.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, f.needsResizeLayout = function () {
    var e = n(this.element);
    return this.size && e && e.innerWidth !== this.size.innerWidth
  }, f.addItems = function (e) {
    var t = this._itemize(e);
    return t.length && (this.items = this.items.concat(t)), t
  }, f.appended = function (e) {
    var t = this.addItems(e);
    t.length && (this.layoutItems(t, !0), this.reveal(t))
  }, f.prepended = function (e) {
    var t = this._itemize(e);
    if (t.length) {
      var n = this.items.slice(0);
      this.items = t.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(n)
    }
  }, f.reveal = function (e) {
    if (this._emitCompleteOnItems("reveal", e), e && e.length) {
      var t = this.updateStagger();
      e.forEach(function (e, n) {
        e.stagger(n * t), e.reveal()
      })
    }
  }, f.hide = function (e) {
    if (this._emitCompleteOnItems("hide", e), e && e.length) {
      var t = this.updateStagger();
      e.forEach(function (e, n) {
        e.stagger(n * t), e.hide()
      })
    }
  }, f.revealItemElements = function (e) {
    var t = this.getItems(e);
    this.reveal(t)
  }, f.hideItemElements = function (e) {
    var t = this.getItems(e);
    this.hide(t)
  }, f.getItem = function (e) {
    for (var t = 0; t < this.items.length; t++) {
      var n = this.items[t];
      if (n.element == e)return n
    }
  }, f.getItems = function (e) {
    e = i.makeArray(e);
    var t = [];
    return e.forEach(function (e) {
      var n = this.getItem(e);
      n && t.push(n)
    }, this), t
  }, f.remove = function (e) {
    var t = this.getItems(e);
    this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function (e) {
      e.remove(), i.removeFrom(this.items, e)
    }, this)
  }, f.destroy = function () {
    var e = this.element.style;
    e.height = "", e.position = "", e.width = "", this.items.forEach(function (e) {
      e.destroy()
    }), this.unbindResize();
    var t = this.element.outlayerGUID;
    delete p[t], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
  }, r.data = function (e) {
    e = i.getQueryElement(e);
    var t = e && e.outlayerGUID;
    return t && p[t]
  }, r.create = function (e, t) {
    var n = s(r);
    return n.defaults = i.extend({}, r.defaults), i.extend(n.defaults, t), n.compatOptions = i.extend({}, r.compatOptions), n.namespace = e, n.data = r.data, n.Item = s(o), i.htmlInit(n, e), c && c.bridget && c.bridget(e, n), n
  };
  var h = {ms: 1, s: 1e3};
  return r.Item = o, r
}), function (e, t) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, function (e, t) {
  var n = e.create("masonry");
  return n.compatOptions.fitWidth = "isFitWidth", n.prototype._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
    for (var e = 0; e < this.cols; e++)this.colYs.push(0);
    this.maxY = 0
  }, n.prototype.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var e = this.items[0], n = e && e.element;
      this.columnWidth = n && t(n).outerWidth || this.containerWidth
    }
    var i = this.columnWidth += this.gutter, o = this.containerWidth + this.gutter, r = o / i,
      s = i - o % i, a = s && 1 > s ? "round" : "floor";
    r = Math[a](r), this.cols = Math.max(r, 1)
  }, n.prototype.getContainerWidth = function () {
    var e = this._getOption("fitWidth"), n = e ? this.element.parentNode : this.element, i = t(n);
    this.containerWidth = i && i.innerWidth
  }, n.prototype._getItemLayoutPosition = function (e) {
    e.getSize();
    var t = e.size.outerWidth % this.columnWidth, n = t && 1 > t ? "round" : "ceil",
      i = Math[n](e.size.outerWidth / this.columnWidth);
    i = Math.min(i, this.cols);
    for (var o = this._getColGroup(i), r = Math.min.apply(Math, o), s = o.indexOf(r), a = {
      x: this.columnWidth * s,
      y: r
    }, l = r + e.size.outerHeight, c = this.cols + 1 - o.length, u = 0; c > u; u++)this.colYs[s + u] = l;
    return a
  }, n.prototype._getColGroup = function (e) {
    if (2 > e)return this.colYs;
    for (var t = [], n = this.cols + 1 - e, i = 0; n > i; i++) {
      var o = this.colYs.slice(i, i + e);
      t[i] = Math.max.apply(Math, o)
    }
    return t
  }, n.prototype._manageStamp = function (e) {
    var n = t(e), i = this._getElementOffset(e), o = this._getOption("originLeft"),
      r = o ? i.left : i.right, s = r + n.outerWidth, a = Math.floor(r / this.columnWidth);
    a = Math.max(0, a);
    var l = Math.floor(s / this.columnWidth);
    l -= s % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
    for (var c = this._getOption("originTop"), u = (c ? i.top : i.bottom) + n.outerHeight, d = a; l >= d; d++)this.colYs[d] = Math.max(u, this.colYs[d])
  }, n.prototype._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var e = {height: this.maxY};
    return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
  }, n.prototype._getContainerFitWidth = function () {
    for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];)e++;
    return (this.cols - e) * this.columnWidth - this.gutter
  }, n.prototype.needsResizeLayout = function () {
    var e = this.containerWidth;
    return this.getContainerWidth(), e != this.containerWidth
  }, n
}), function (e, t, n, i) {
  function o(t, n) {
    var r = this;
    "object" == typeof n && (delete n.refresh, delete n.render, e.extend(this, n)), this.$element = e(t), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
    var s = (this.position + "").toLowerCase().match(/\S+/g) || [];
    if (s.length < 1 && s.push("center"), 1 == s.length && s.push(s[0]), ("top" == s[0] || "bottom" == s[0] || "left" == s[1] || "right" == s[1]) && (s = [s[1], s[0]]), this.positionX != i && (s[0] = this.positionX.toLowerCase()), this.positionY != i && (s[1] = this.positionY.toLowerCase()), r.positionX = s[0], r.positionY = s[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
      backgroundImage: "url(" + this.imageSrc + ")",
      backgroundSize: "cover",
      backgroundPosition: this.position
    }), this;
    if (navigator.userAgent.match(/(Android)/))return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
      backgroundImage: "url(" + this.imageSrc + ")",
      backgroundSize: "cover",
      backgroundPosition: this.position
    }), this;
    this.$mirror = e("<div />").prependTo("body");
    var a = this.$element.find(">.parallax-slider"), l = !1;
    0 == a.length ? this.$slider = e("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), l = !0), this.$mirror.addClass("parallax-mirror").css({
      visibility: "hidden",
      zIndex: this.zIndex,
      position: "fixed",
      top: 0,
      left: 0,
      overflow: "hidden"
    }), this.$slider.addClass("parallax-slider").one("load", function () {
      r.naturalHeight && r.naturalWidth || (r.naturalHeight = this.naturalHeight || this.height || 1, r.naturalWidth = this.naturalWidth || this.width || 1), r.aspectRatio = r.naturalWidth / r.naturalHeight, o.isSetup || o.setup(), o.sliders.push(r), o.isFresh = !1, o.requestRender()
    }), l || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load")
  }

  function r(i) {
    return this.each(function () {
      var r = e(this), s = "object" == typeof i && i;
      this == t || this == n || r.is("body") ? o.configure(s) : r.data("px.parallax") ? "object" == typeof i && e.extend(r.data("px.parallax"), s) : (s = e.extend({}, r.data(), s), r.data("px.parallax", new o(this, s))), "string" == typeof i && ("destroy" == i ? o.destroy(this) : o[i]())
    })
  }

  !function () {
    for (var e = 0, n = ["ms", "moz", "webkit", "o"], i = 0; i < n.length && !t.requestAnimationFrame; ++i)t.requestAnimationFrame = t[n[i] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[n[i] + "CancelAnimationFrame"] || t[n[i] + "CancelRequestAnimationFrame"];
    t.requestAnimationFrame || (t.requestAnimationFrame = function (n) {
      var i = (new Date).getTime(), o = Math.max(0, 16 - (i - e)), r = t.setTimeout(function () {
        n(i + o)
      }, o);
      return e = i + o, r
    }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function (e) {
      clearTimeout(e)
    })
  }(), e.extend(o.prototype, {
    speed: .2,
    bleed: 0,
    zIndex: -100,
    iosFix: !0,
    androidFix: !0,
    position: "center",
    overScrollFix: !1,
    refresh: function () {
      this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
      var e = o.winHeight, t = o.docHeight, n = Math.min(this.boxOffsetTop, t - e),
        i = Math.max(this.boxOffsetTop + this.boxHeight - e, 0),
        r = this.boxHeight + (n - i) * (1 - this.speed) | 0,
        s = (this.boxOffsetTop - n) * (1 - this.speed) | 0;
      if (r * this.aspectRatio >= this.boxWidth) {
        this.imageWidth = r * this.aspectRatio | 0, this.imageHeight = r, this.offsetBaseTop = s;
        var a = this.imageWidth - this.boxWidth;
        this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -a : isNaN(this.positionX) ? -a / 2 | 0 : Math.max(this.positionX, -a)
      } else {
        this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0;
        var a = this.imageHeight - r;
        this.offsetBaseTop = "top" == this.positionY ? s : "bottom" == this.positionY ? s - a : isNaN(this.positionY) ? s - a / 2 | 0 : s + Math.max(this.positionY, -a)
      }
    },
    render: function () {
      var e = o.scrollTop, t = o.scrollLeft, n = this.overScrollFix ? o.overScroll : 0,
        i = e + o.winHeight;
      this.boxOffsetBottom > e && this.boxOffsetTop <= i ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - e, this.mirrorLeft = this.boxOffsetLeft - t, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
        transform: "translate3d(0px, 0px, 0px)",
        visibility: this.visibility,
        top: this.mirrorTop - n,
        left: this.mirrorLeft,
        height: this.boxHeight,
        width: this.boxWidth
      }), this.$slider.css({
        transform: "translate3d(0px, 0px, 0px)",
        position: "absolute",
        top: this.offsetTop,
        left: this.offsetLeft,
        height: this.imageHeight,
        width: this.imageWidth,
        maxWidth: "none"
      })
    }
  }), e.extend(o, {
    scrollTop: 0,
    scrollLeft: 0,
    winHeight: 0,
    winWidth: 0,
    docHeight: 1 << 30,
    docWidth: 1 << 30,
    sliders: [],
    isReady: !1,
    isFresh: !1,
    isBusy: !1,
    setup: function () {
      if (!this.isReady) {
        var i = e(n), r = e(t), s = function () {
          o.winHeight = r.height(), o.winWidth = r.width(), o.docHeight = i.height(), o.docWidth = i.width()
        }, a = function () {
          var e = r.scrollTop(), t = o.docHeight - o.winHeight, n = o.docWidth - o.winWidth;
          o.scrollTop = Math.max(0, Math.min(t, e)), o.scrollLeft = Math.max(0, Math.min(n, r.scrollLeft())), o.overScroll = Math.max(e - t, Math.min(e, 0))
        };
        r.on("resize.px.parallax load.px.parallax", function () {
          s(), o.isFresh = !1, o.requestRender()
        }).on("scroll.px.parallax load.px.parallax", function () {
          a(), o.requestRender()
        }), s(), a(), this.isReady = !0
      }
    },
    configure: function (t) {
      "object" == typeof t && (delete t.refresh, delete t.render, e.extend(this.prototype, t))
    },
    refresh: function () {
      e.each(this.sliders, function () {
        this.refresh()
      }), this.isFresh = !0
    },
    render: function () {
      this.isFresh || this.refresh(), e.each(this.sliders, function () {
        this.render()
      })
    },
    requestRender: function () {
      var e = this;
      this.isBusy || (this.isBusy = !0, t.requestAnimationFrame(function () {
        e.render(), e.isBusy = !1
      }))
    },
    destroy: function (n) {
      var i, r = e(n).data("px.parallax");
      for (r.$mirror.remove(), i = 0; i < this.sliders.length; i += 1)this.sliders[i] == r && this.sliders.splice(i, 1);
      e(n).data("px.parallax", !1), 0 === this.sliders.length && (e(t).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1)
    }
  });
  var s = e.fn.parallax;
  e.fn.parallax = r, e.fn.parallax.Constructor = o, e.fn.parallax.noConflict = function () {
    return e.fn.parallax = s, this
  },
    e(n).on("ready.px.parallax.data-api", function () {
      e('[data-parallax="scroll"]').parallax()
    })
}(jQuery, window, document), function (e, t, n) {
  "use strict";
  function i(e, t) {
    this.element = e, this.layers = e.getElementsByClassName("layer");
    var n = {
      calibrateX: this.data(this.element, "calibrate-x"),
      calibrateY: this.data(this.element, "calibrate-y"),
      invertX: this.data(this.element, "invert-x"),
      invertY: this.data(this.element, "invert-y"),
      limitX: this.data(this.element, "limit-x"),
      limitY: this.data(this.element, "limit-y"),
      scalarX: this.data(this.element, "scalar-x"),
      scalarY: this.data(this.element, "scalar-y"),
      frictionX: this.data(this.element, "friction-x"),
      frictionY: this.data(this.element, "friction-y"),
      originX: this.data(this.element, "origin-x"),
      originY: this.data(this.element, "origin-y")
    };
    for (var i in n)null === n[i] && delete n[i];
    this.extend(this, o, t, n), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
  }

  var o = {
    relativeInput: !1,
    clipRelativeInput: !1,
    calibrationThreshold: 100,
    calibrationDelay: 500,
    supportDelay: 500,
    calibrateX: !1,
    calibrateY: !0,
    invertX: !0,
    invertY: !0,
    limitX: !1,
    limitY: !1,
    scalarX: 10,
    scalarY: 10,
    frictionX: .1,
    frictionY: .1,
    originX: .5,
    originY: .5
  };
  i.prototype.extend = function () {
    if (arguments.length > 1)for (var e = arguments[0], t = 1, n = arguments.length; t < n; t++) {
      var i = arguments[t];
      for (var o in i)e[o] = i[o]
    }
  }, i.prototype.data = function (e, t) {
    return this.deserialize(e.getAttribute("data-" + t))
  }, i.prototype.deserialize = function (e) {
    return "true" === e || "false" !== e && ("null" === e ? null : !isNaN(parseFloat(e)) && isFinite(e) ? parseFloat(e) : e)
  }, i.prototype.camelCase = function (e) {
    return e.replace(/-+(.)?/g, function (e, t) {
      return t ? t.toUpperCase() : ""
    })
  }, i.prototype.transformSupport = function (n) {
    for (var i = t.createElement("div"), o = !1, r = null, s = !1, a = null, l = null, c = 0, u = this.vendors.length; c < u; c++)if (null !== this.vendors[c] ? (a = this.vendors[c][0] + "transform", l = this.vendors[c][1] + "Transform") : (a = "transform", l = "transform"), void 0 !== i.style[l]) {
      o = !0;
      break
    }
    switch (n) {
      case"2D":
        s = o;
        break;
      case"3D":
        if (o) {
          var d = t.body || t.createElement("body"), p = t.documentElement, f = p.style.overflow;
          t.body || (p.style.overflow = "hidden", p.appendChild(d), d.style.overflow = "hidden", d.style.background = ""), d.appendChild(i), i.style[l] = "translate3d(1px,1px,1px)", r = e.getComputedStyle(i).getPropertyValue(a), s = void 0 !== r && r.length > 0 && "none" !== r, p.style.overflow = f, d.removeChild(i)
        }
    }
    return s
  }, i.prototype.ww = null, i.prototype.wh = null, i.prototype.wcx = null, i.prototype.wcy = null, i.prototype.wrx = null, i.prototype.wry = null, i.prototype.portrait = null, i.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), i.prototype.vendors = [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]], i.prototype.motionSupport = !!e.DeviceMotionEvent, i.prototype.orientationSupport = !!e.DeviceOrientationEvent, i.prototype.orientationStatus = 0, i.prototype.transform2DSupport = i.prototype.transformSupport("2D"), i.prototype.transform3DSupport = i.prototype.transformSupport("3D"), i.prototype.propertyCache = {}, i.prototype.initialise = function () {
    this.transform3DSupport && this.accelerate(this.element), "static" === e.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
  }, i.prototype.updateLayers = function () {
    this.layers = this.element.getElementsByClassName("layer"), this.depths = [];
    for (var e = 0, t = this.layers.length; e < t; e++) {
      var n = this.layers[e];
      this.transform3DSupport && this.accelerate(n), n.style.position = e ? "absolute" : "relative", n.style.display = "block", n.style.left = 0, n.style.top = 0, this.depths.push(this.data(n, "depth") || 0)
    }
  }, i.prototype.updateDimensions = function () {
    this.ww = e.innerWidth, this.wh = e.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
  }, i.prototype.updateBounds = function () {
    this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
  }, i.prototype.queueCalibration = function (e) {
    clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, e)
  }, i.prototype.enable = function () {
    this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, e.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, e.addEventListener("mousemove", this.onMouseMove)), e.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
  }, i.prototype.disable = function () {
    this.enabled && (this.enabled = !1, this.orientationSupport ? e.removeEventListener("deviceorientation", this.onDeviceOrientation) : e.removeEventListener("mousemove", this.onMouseMove), e.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
  }, i.prototype.calibrate = function (e, t) {
    this.calibrateX = void 0 === e ? this.calibrateX : e, this.calibrateY = void 0 === t ? this.calibrateY : t
  }, i.prototype.invert = function (e, t) {
    this.invertX = void 0 === e ? this.invertX : e, this.invertY = void 0 === t ? this.invertY : t
  }, i.prototype.friction = function (e, t) {
    this.frictionX = void 0 === e ? this.frictionX : e, this.frictionY = void 0 === t ? this.frictionY : t
  }, i.prototype.scalar = function (e, t) {
    this.scalarX = void 0 === e ? this.scalarX : e, this.scalarY = void 0 === t ? this.scalarY : t
  }, i.prototype.limit = function (e, t) {
    this.limitX = void 0 === e ? this.limitX : e, this.limitY = void 0 === t ? this.limitY : t
  }, i.prototype.origin = function (e, t) {
    this.originX = void 0 === e ? this.originX : e, this.originY = void 0 === t ? this.originY : t
  }, i.prototype.clamp = function (e, t, n) {
    return e = Math.max(e, t), e = Math.min(e, n)
  }, i.prototype.css = function (e, t, n) {
    var i = this.propertyCache[t];
    if (!i)for (var o = 0, r = this.vendors.length; o < r; o++)if (i = null !== this.vendors[o] ? this.camelCase(this.vendors[o][1] + "-" + t) : t, void 0 !== e.style[i]) {
      this.propertyCache[t] = i;
      break
    }
    e.style[i] = n
  }, i.prototype.accelerate = function (e) {
    this.css(e, "transform", "translate3d(0,0,0)"), this.css(e, "transform-style", "preserve-3d"), this.css(e, "backface-visibility", "hidden")
  }, i.prototype.setPosition = function (e, t, n) {
    t += "px", n += "px", this.transform3DSupport ? this.css(e, "transform", "translate3d(" + t + "," + n + ",0)") : this.transform2DSupport ? this.css(e, "transform", "translate(" + t + "," + n + ")") : (e.style.left = t, e.style.top = n)
  }, i.prototype.onOrientationTimer = function (e) {
    this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
  }, i.prototype.onCalibrationTimer = function (e) {
    this.calibrationFlag = !0
  }, i.prototype.onWindowResize = function (e) {
    this.updateDimensions()
  }, i.prototype.onAnimationFrame = function () {
    this.updateBounds();
    var e = this.ix - this.cx, t = this.iy - this.cy;
    (Math.abs(e) > this.calibrationThreshold || Math.abs(t) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? t : this.iy, this.my = this.calibrateY ? e : this.ix) : (this.mx = this.calibrateX ? e : this.ix, this.my = this.calibrateY ? t : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
    for (var n = 0, i = this.layers.length; n < i; n++) {
      var o = this.layers[n], r = this.depths[n], s = this.vx * r * (this.invertX ? -1 : 1),
        a = this.vy * r * (this.invertY ? -1 : 1);
      this.setPosition(o, s, a)
    }
    this.raf = requestAnimationFrame(this.onAnimationFrame)
  }, i.prototype.onDeviceOrientation = function (e) {
    if (!this.desktop && null !== e.beta && null !== e.gamma) {
      this.orientationStatus = 1;
      var t = (e.beta || 0) / 30, n = (e.gamma || 0) / 30, i = this.wh > this.ww;
      this.portrait !== i && (this.portrait = i, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = t, this.cy = n), this.ix = t, this.iy = n
    }
  }, i.prototype.onMouseMove = function (e) {
    var t = e.clientX, n = e.clientY;
    !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (t = Math.max(t, this.ex), t = Math.min(t, this.ex + this.ew), n = Math.max(n, this.ey), n = Math.min(n, this.ey + this.eh)), this.ix = (t - this.ex - this.ecx) / this.erx, this.iy = (n - this.ey - this.ecy) / this.ery) : (this.ix = (t - this.wcx) / this.wrx, this.iy = (n - this.wcy) / this.wry)
  }, e.Parallax = i
}(window, document), function () {
  for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n)window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
  window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {
    var i = (new Date).getTime(), o = Math.max(0, 16 - (i - e)),
      r = window.setTimeout(function () {
        t(i + o)
      }, o);
    return e = i + o, r
  }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
    clearTimeout(e)
  })
}(), function e(t, n, i) {
  function o(s, a) {
    if (!n[s]) {
      if (!t[s]) {
        var l = "function" == typeof require && require;
        if (!a && l)return l(s, !0);
        if (r)return r(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      var u = n[s] = {exports: {}};
      t[s][0].call(u.exports, function (e) {
        var n = t[s][1][e];
        return o(n || e)
      }, u, u.exports, e, t, n, i)
    }
    return n[s].exports
  }

  for (var r = "function" == typeof require && require, s = 0; s < i.length; s++)o(i[s]);
  return o
}({
  1: [function (e, t, n) {
    "use strict";
    function i(e) {
      e.fn.perfectScrollbar = function (e) {
        return this.each(function () {
          if ("object" == typeof e || void 0 === e) {
            var t = e;
            r.get(this) || o.initialize(this, t)
          } else {
            var n = e;
            "update" === n ? o.update(this) : "destroy" === n && o.destroy(this)
          }
        })
      }
    }

    var o = e("../main"), r = e("../plugin/instances");
    if ("function" == typeof define && define.amd) define(["jquery"], i); else {
      var s = window.jQuery ? window.jQuery : window.$;
      void 0 !== s && i(s)
    }
    t.exports = i
  }, {"../main": 7, "../plugin/instances": 18}],
  2: [function (e, t, n) {
    "use strict";
    function i(e, t) {
      var n = e.className.split(" ");
      n.indexOf(t) < 0 && n.push(t), e.className = n.join(" ")
    }

    function o(e, t) {
      var n = e.className.split(" "), i = n.indexOf(t);
      i >= 0 && n.splice(i, 1), e.className = n.join(" ")
    }

    n.add = function (e, t) {
      e.classList ? e.classList.add(t) : i(e, t)
    }, n.remove = function (e, t) {
      e.classList ? e.classList.remove(t) : o(e, t)
    }, n.list = function (e) {
      return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
    }
  }, {}],
  3: [function (e, t, n) {
    "use strict";
    function i(e, t) {
      return window.getComputedStyle(e)[t]
    }

    function o(e, t, n) {
      return "number" == typeof n && (n = n.toString() + "px"), e.style[t] = n, e
    }

    function r(e, t) {
      for (var n in t) {
        var i = t[n];
        "number" == typeof i && (i = i.toString() + "px"), e.style[n] = i
      }
      return e
    }

    var s = {};
    s.e = function (e, t) {
      var n = document.createElement(e);
      return n.className = t, n
    }, s.appendTo = function (e, t) {
      return t.appendChild(e), e
    }, s.css = function (e, t, n) {
      return "object" == typeof t ? r(e, t) : void 0 === n ? i(e, t) : o(e, t, n)
    }, s.matches = function (e, t) {
      return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
    }, s.remove = function (e) {
      void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
    }, s.queryChildren = function (e, t) {
      return Array.prototype.filter.call(e.childNodes, function (e) {
        return s.matches(e, t)
      })
    }, t.exports = s
  }, {}],
  4: [function (e, t, n) {
    "use strict";
    var i = function (e) {
      this.element = e, this.events = {}
    };
    i.prototype.bind = function (e, t) {
      void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
    }, i.prototype.unbind = function (e, t) {
      var n = void 0 !== t;
      this.events[e] = this.events[e].filter(function (i) {
        return !(!n || i === t) || (this.element.removeEventListener(e, i, !1), !1)
      }, this)
    }, i.prototype.unbindAll = function () {
      for (var e in this.events)this.unbind(e)
    };
    var o = function () {
      this.eventElements = []
    };
    o.prototype.eventElement = function (e) {
      var t = this.eventElements.filter(function (t) {
        return t.element === e
      })[0];
      return void 0 === t && (t = new i(e), this.eventElements.push(t)), t
    }, o.prototype.bind = function (e, t, n) {
      this.eventElement(e).bind(t, n)
    }, o.prototype.unbind = function (e, t, n) {
      this.eventElement(e).unbind(t, n)
    }, o.prototype.unbindAll = function () {
      for (var e = 0; e < this.eventElements.length; e++)this.eventElements[e].unbindAll()
    }, o.prototype.once = function (e, t, n) {
      var i = this.eventElement(e), o = function (e) {
        i.unbind(t, o), n(e)
      };
      i.bind(t, o)
    }, t.exports = o
  }, {}],
  5: [function (e, t, n) {
    "use strict";
    t.exports = function () {
      function e() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
      }

      return function () {
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
      }
    }()
  }, {}],
  6: [function (e, t, n) {
    "use strict";
    var i = e("./class"), o = e("./dom"), r = n.toInt = function (e) {
      return parseInt(e, 10) || 0
    }, s = n.clone = function (e) {
      if (e) {
        if (Array.isArray(e))return e.map(s);
        if ("object" == typeof e) {
          var t = {};
          for (var n in e)t[n] = s(e[n]);
          return t
        }
        return e
      }
      return null
    };
    n.extend = function (e, t) {
      var n = s(e);
      for (var i in t)n[i] = s(t[i]);
      return n
    }, n.isEditable = function (e) {
      return o.matches(e, "input,[contenteditable]") || o.matches(e, "select,[contenteditable]") || o.matches(e, "textarea,[contenteditable]") || o.matches(e, "button,[contenteditable]")
    }, n.removePsClasses = function (e) {
      for (var t = i.list(e), n = 0; n < t.length; n++) {
        var o = t[n];
        0 === o.indexOf("ps-") && i.remove(e, o)
      }
    }, n.outerWidth = function (e) {
      return r(o.css(e, "width")) + r(o.css(e, "paddingLeft")) + r(o.css(e, "paddingRight")) + r(o.css(e, "borderLeftWidth")) + r(o.css(e, "borderRightWidth"))
    }, n.startScrolling = function (e, t) {
      i.add(e, "ps-in-scrolling"), void 0 !== t ? i.add(e, "ps-" + t) : (i.add(e, "ps-x"), i.add(e, "ps-y"))
    }, n.stopScrolling = function (e, t) {
      i.remove(e, "ps-in-scrolling"), void 0 !== t ? i.remove(e, "ps-" + t) : (i.remove(e, "ps-x"), i.remove(e, "ps-y"))
    }, n.env = {
      isWebKit: "WebkitAppearance" in document.documentElement.style,
      supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
      supportsIePointer: null !== window.navigator.msMaxTouchPoints
    }
  }, {"./class": 2, "./dom": 3}],
  7: [function (e, t, n) {
    "use strict";
    var i = e("./plugin/destroy"), o = e("./plugin/initialize"), r = e("./plugin/update");
    t.exports = {initialize: o, update: r, destroy: i}
  }, {"./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21}],
  8: [function (e, t, n) {
    "use strict";
    t.exports = {
      handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipePropagation: !0,
      swipeEasing: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !1,
      wheelSpeed: 1,
      theme: "default"
    }
  }, {}],
  9: [function (e, t, n) {
    "use strict";
    var i = e("../lib/helper"), o = e("../lib/dom"), r = e("./instances");
    t.exports = function (e) {
      var t = r.get(e);
      t && (t.event.unbindAll(), o.remove(t.scrollbarX), o.remove(t.scrollbarY), o.remove(t.scrollbarXRail), o.remove(t.scrollbarYRail), i.removePsClasses(e), r.remove(e))
    }
  }, {"../lib/dom": 3, "../lib/helper": 6, "./instances": 18}],
  10: [function (e, t, n) {
    "use strict";
    function i(e, t) {
      function n(e) {
        return e.getBoundingClientRect()
      }

      var i = function (e) {
        e.stopPropagation()
      };
      t.event.bind(t.scrollbarY, "click", i), t.event.bind(t.scrollbarYRail, "click", function (i) {
        var o = i.pageY - window.pageYOffset - n(t.scrollbarYRail).top,
          a = o > t.scrollbarYTop ? 1 : -1;
        s(e, "top", e.scrollTop + a * t.containerHeight), r(e), i.stopPropagation()
      }), t.event.bind(t.scrollbarX, "click", i), t.event.bind(t.scrollbarXRail, "click", function (i) {
        var o = i.pageX - window.pageXOffset - n(t.scrollbarXRail).left,
          a = o > t.scrollbarXLeft ? 1 : -1;
        s(e, "left", e.scrollLeft + a * t.containerWidth), r(e), i.stopPropagation()
      })
    }

    var o = e("../instances"), r = e("../update-geometry"), s = e("../update-scroll");
    t.exports = function (e) {
      i(e, o.get(e))
    }
  }, {"../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
  11: [function (e, t, n) {
    "use strict";
    function i(e, t) {
      function n(n) {
        var o = i + n * t.railXRatio,
          s = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
        t.scrollbarXLeft = o < 0 ? 0 : o > s ? s : o;
        var a = r.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
        c(e, "left", a)
      }

      var i = null, o = null, a = function (t) {
        n(t.pageX - o), l(e), t.stopPropagation(), t.preventDefault()
      }, u = function () {
        r.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", a)
      };
      t.event.bind(t.scrollbarX, "mousedown", function (n) {
        o = n.pageX, i = r.toInt(s.css(t.scrollbarX, "left")) * t.railXRatio, r.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", a), t.event.once(t.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
      })
    }

    function o(e, t) {
      function n(n) {
        var o = i + n * t.railYRatio,
          s = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
        t.scrollbarYTop = o < 0 ? 0 : o > s ? s : o;
        var a = r.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
        c(e, "top", a)
      }

      var i = null, o = null, a = function (t) {
        n(t.pageY - o), l(e), t.stopPropagation(), t.preventDefault()
      }, u = function () {
        r.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", a)
      };
      t.event.bind(t.scrollbarY, "mousedown", function (n) {
        o = n.pageY, i = r.toInt(s.css(t.scrollbarY, "top")) * t.railYRatio, r.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", a), t.event.once(t.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
      })
    }

    var r = e("../../lib/helper"), s = e("../../lib/dom"), a = e("../instances"),
      l = e("../update-geometry"), c = e("../update-scroll");
    t.exports = function (e) {
      var t = a.get(e);
      i(e, t), o(e, t)
    }
  }, {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  12: [function (e, t, n) {
    "use strict";
    function i(e, t) {
      function n(n, i) {
        var o = e.scrollTop;
        if (0 === n) {
          if (!t.scrollbarYActive)return !1;
          if (0 === o && i > 0 || o >= t.contentHeight - t.containerHeight && i < 0)return !t.settings.wheelPropagation
        }
        var r = e.scrollLeft;
        if (0 === i) {
          if (!t.scrollbarXActive)return !1;
          if (0 === r && n < 0 || r >= t.contentWidth - t.containerWidth && n > 0)return !t.settings.wheelPropagation
        }
        return !0
      }

      var i = !1;
      t.event.bind(e, "mouseenter", function () {
        i = !0
      }), t.event.bind(e, "mouseleave", function () {
        i = !1
      });
      var s = !1;
      t.event.bind(t.ownerDocument, "keydown", function (c) {
        if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
          var u = r.matches(t.scrollbarX, ":focus") || r.matches(t.scrollbarY, ":focus");
          if (i || u) {
            var d = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
            if (d) {
              if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement; else for (; d.shadowRoot;)d = d.shadowRoot.activeElement;
              if (o.isEditable(d))return
            }
            var p = 0, f = 0;
            switch (c.which) {
              case 37:
                p = c.metaKey ? -t.contentWidth : c.altKey ? -t.containerWidth : -30;
                break;
              case 38:
                f = c.metaKey ? t.contentHeight : c.altKey ? t.containerHeight : 30;
                break;
              case 39:
                p = c.metaKey ? t.contentWidth : c.altKey ? t.containerWidth : 30;
                break;
              case 40:
                f = c.metaKey ? -t.contentHeight : c.altKey ? -t.containerHeight : -30;
                break;
              case 33:
                f = 90;
                break;
              case 32:
                f = c.shiftKey ? 90 : -90;
                break;
              case 34:
                f = -90;
                break;
              case 35:
                f = c.ctrlKey ? -t.contentHeight : -t.containerHeight;
                break;
              case 36:
                f = c.ctrlKey ? e.scrollTop : t.containerHeight;
                break;
              default:
                return
            }
            l(e, "top", e.scrollTop - f), l(e, "left", e.scrollLeft + p), a(e), s = n(p, f), s && c.preventDefault()
          }
        }
      })
    }

    var o = e("../../lib/helper"), r = e("../../lib/dom"), s = e("../instances"),
      a = e("../update-geometry"), l = e("../update-scroll");
    t.exports = function (e) {
      i(e, s.get(e))
    }
  }, {
    "../../lib/dom": 3,
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  13: [function (e, t, n) {
    "use strict";
    function i(e, t) {
      function n(n, i) {
        var o = e.scrollTop;
        if (0 === n) {
          if (!t.scrollbarYActive)return !1;
          if (0 === o && i > 0 || o >= t.contentHeight - t.containerHeight && i < 0)return !t.settings.wheelPropagation
        }
        var r = e.scrollLeft;
        if (0 === i) {
          if (!t.scrollbarXActive)return !1;
          if (0 === r && n < 0 || r >= t.contentWidth - t.containerWidth && n > 0)return !t.settings.wheelPropagation
        }
        return !0
      }

      function i(e) {
        var t = e.deltaX, n = -1 * e.deltaY;
        return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t !== t && n !== n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
      }

      function o(t, n) {
        var i = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
        if (i) {
          var o = window.getComputedStyle(i);
          if (![o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/))return !1;
          var r = i.scrollHeight - i.clientHeight;
          if (r > 0 && !(0 === i.scrollTop && n > 0 || i.scrollTop === r && n < 0))return !0;
          var s = i.scrollLeft - i.clientWidth;
          if (s > 0 && !(0 === i.scrollLeft && t < 0 || i.scrollLeft === s && t > 0))return !0
        }
        return !1
      }

      function a(a) {
        var c = i(a), u = c[0], d = c[1];
        o(u, d) || (l = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (d ? s(e, "top", e.scrollTop - d * t.settings.wheelSpeed) : s(e, "top", e.scrollTop + u * t.settings.wheelSpeed), l = !0) : t.scrollbarXActive && !t.scrollbarYActive && (u ? s(e, "left", e.scrollLeft + u * t.settings.wheelSpeed) : s(e, "left", e.scrollLeft - d * t.settings.wheelSpeed), l = !0) : (s(e, "top", e.scrollTop - d * t.settings.wheelSpeed), s(e, "left", e.scrollLeft + u * t.settings.wheelSpeed)), r(e), (l = l || n(u, d)) && (a.stopPropagation(), a.preventDefault()))
      }

      var l = !1;
      void 0 !== window.onwheel ? t.event.bind(e, "wheel", a) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", a)
    }

    var o = e("../instances"), r = e("../update-geometry"), s = e("../update-scroll");
    t.exports = function (e) {
      i(e, o.get(e))
    }
  }, {"../instances": 18, "../update-geometry": 19, "../update-scroll": 20}],
  14: [function (e, t, n) {
    "use strict";
    function i(e, t) {
      t.event.bind(e, "scroll", function () {
        r(e)
      })
    }

    var o = e("../instances"), r = e("../update-geometry");
    t.exports = function (e) {
      i(e, o.get(e))
    }
  }, {"../instances": 18, "../update-geometry": 19}],
  15: [function (e, t, n) {
    "use strict";
    function i(e, t) {
      function n() {
        var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
        return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
      }

      function i() {
        c || (c = setInterval(function () {
          if (!r.get(e))return void clearInterval(c);
          a(e, "top", e.scrollTop + u.top), a(e, "left", e.scrollLeft + u.left), s(e)
        }, 50))
      }

      function l() {
        c && (clearInterval(c), c = null), o.stopScrolling(e)
      }

      var c = null, u = {top: 0, left: 0}, d = !1;
      t.event.bind(t.ownerDocument, "selectionchange", function () {
        e.contains(n()) ? d = !0 : (d = !1, l())
      }), t.event.bind(window, "mouseup", function () {
        d && (d = !1, l())
      }), t.event.bind(window, "keyup", function () {
        d && (d = !1, l())
      }), t.event.bind(window, "mousemove", function (t) {
        if (d) {
          var n = {x: t.pageX, y: t.pageY}, r = {
            left: e.offsetLeft,
            right: e.offsetLeft + e.offsetWidth,
            top: e.offsetTop,
            bottom: e.offsetTop + e.offsetHeight
          };
          n.x < r.left + 3 ? (u.left = -5, o.startScrolling(e, "x")) : n.x > r.right - 3 ? (u.left = 5, o.startScrolling(e, "x")) : u.left = 0, n.y < r.top + 3 ? (u.top = r.top + 3 - n.y < 5 ? -5 : -20, o.startScrolling(e, "y")) : n.y > r.bottom - 3 ? (u.top = n.y - r.bottom + 3 < 5 ? 5 : 20, o.startScrolling(e, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? l() : i()
        }
      })
    }

    var o = e("../../lib/helper"), r = e("../instances"), s = e("../update-geometry"),
      a = e("../update-scroll");
    t.exports = function (e) {
      i(e, r.get(e))
    }
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  16: [function (e, t, n) {
    "use strict";
    function i(e, t, n, i) {
      function o(n, i) {
        var o = e.scrollTop, r = e.scrollLeft, s = Math.abs(n), a = Math.abs(i);
        if (a > s) {
          if (i < 0 && o === t.contentHeight - t.containerHeight || i > 0 && 0 === o)return !t.settings.swipePropagation
        } else if (s > a && (n < 0 && r === t.contentWidth - t.containerWidth || n > 0 && 0 === r))return !t.settings.swipePropagation;
        return !0
      }

      function l(t, n) {
        a(e, "top", e.scrollTop - n), a(e, "left", e.scrollLeft - t), s(e)
      }

      function c() {
        x = !0
      }

      function u() {
        x = !1
      }

      function d(e) {
        return e.targetTouches ? e.targetTouches[0] : e
      }

      function p(e) {
        return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
      }

      function f(e) {
        if (p(e)) {
          w = !0;
          var t = d(e);
          g.pageX = t.pageX, g.pageY = t.pageY, v = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
        }
      }

      function h(e) {
        if (!w && t.settings.swipePropagation && f(e), !x && w && p(e)) {
          var n = d(e), i = {pageX: n.pageX, pageY: n.pageY}, r = i.pageX - g.pageX,
            s = i.pageY - g.pageY;
          l(r, s), g = i;
          var a = (new Date).getTime(), c = a - v;
          c > 0 && (y.x = r / c, y.y = s / c, v = a), o(r, s) && (e.stopPropagation(), e.preventDefault())
        }
      }

      function m() {
        !x && w && (w = !1, t.settings.swipeEasing && (clearInterval(b), b = setInterval(function () {
          return r.get(e) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
        }, 10)))
      }

      var g = {}, v = 0, y = {}, b = null, x = !1, w = !1;
      n ? (t.event.bind(window, "touchstart", c), t.event.bind(window, "touchend", u), t.event.bind(e, "touchstart", f), t.event.bind(e, "touchmove", h), t.event.bind(e, "touchend", m)) : i && (window.PointerEvent ? (t.event.bind(window, "pointerdown", c), t.event.bind(window, "pointerup", u), t.event.bind(e, "pointerdown", f), t.event.bind(e, "pointermove", h), t.event.bind(e, "pointerup", m)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", c), t.event.bind(window, "MSPointerUp", u), t.event.bind(e, "MSPointerDown", f), t.event.bind(e, "MSPointerMove", h), t.event.bind(e, "MSPointerUp", m)))
    }

    var o = e("../../lib/helper"), r = e("../instances"), s = e("../update-geometry"),
      a = e("../update-scroll");
    t.exports = function (e) {
      if (o.env.supportsTouch || o.env.supportsIePointer) {
        i(e, r.get(e), o.env.supportsTouch, o.env.supportsIePointer)
      }
    }
  }, {
    "../../lib/helper": 6,
    "../instances": 18,
    "../update-geometry": 19,
    "../update-scroll": 20
  }],
  17: [function (e, t, n) {
    "use strict";
    var i = e("../lib/helper"), o = e("../lib/class"), r = e("./instances"),
      s = e("./update-geometry"), a = {
        "click-rail": e("./handler/click-rail"),
        "drag-scrollbar": e("./handler/drag-scrollbar"),
        keyboard: e("./handler/keyboard"),
        wheel: e("./handler/mouse-wheel"),
        touch: e("./handler/touch"),
        selection: e("./handler/selection")
      }, l = e("./handler/native-scroll");
    t.exports = function (e, t) {
      t = "object" == typeof t ? t : {}, o.add(e, "ps");
      var n = r.add(e);
      n.settings = i.extend(n.settings, t), o.add(e, "ps--theme_" + n.settings.theme), n.settings.handlers.forEach(function (t) {
        a[t](e)
      }), l(e), s(e)
    }
  }, {
    "../lib/class": 2,
    "../lib/helper": 6,
    "./handler/click-rail": 10,
    "./handler/drag-scrollbar": 11,
    "./handler/keyboard": 12,
    "./handler/mouse-wheel": 13,
    "./handler/native-scroll": 14,
    "./handler/selection": 15,
    "./handler/touch": 16,
    "./instances": 18,
    "./update-geometry": 19
  }],
  18: [function (e, t, n) {
    "use strict";
    function i(e) {
      function t() {
        l.add(e, "ps--focus")
      }

      function n() {
        l.remove(e, "ps--focus")
      }

      var i = this;
      i.settings = a.clone(c), i.containerWidth = null, i.containerHeight = null, i.contentWidth = null, i.contentHeight = null, i.isRtl = "rtl" === u.css(e, "direction"), i.isNegativeScroll = function () {
        var t = e.scrollLeft, n = null;
        return e.scrollLeft = -1, n = e.scrollLeft < 0, e.scrollLeft = t, n
      }(), i.negativeScrollAdjustment = i.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, i.event = new d, i.ownerDocument = e.ownerDocument || document, i.scrollbarXRail = u.appendTo(u.e("div", "ps__scrollbar-x-rail"), e), i.scrollbarX = u.appendTo(u.e("div", "ps__scrollbar-x"), i.scrollbarXRail), i.scrollbarX.setAttribute("tabindex", 0), i.event.bind(i.scrollbarX, "focus", t), i.event.bind(i.scrollbarX, "blur", n), i.scrollbarXActive = null, i.scrollbarXWidth = null, i.scrollbarXLeft = null, i.scrollbarXBottom = a.toInt(u.css(i.scrollbarXRail, "bottom")), i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom, i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : a.toInt(u.css(i.scrollbarXRail, "top")), i.railBorderXWidth = a.toInt(u.css(i.scrollbarXRail, "borderLeftWidth")) + a.toInt(u.css(i.scrollbarXRail, "borderRightWidth")), u.css(i.scrollbarXRail, "display", "block"), i.railXMarginWidth = a.toInt(u.css(i.scrollbarXRail, "marginLeft")) + a.toInt(u.css(i.scrollbarXRail, "marginRight")), u.css(i.scrollbarXRail, "display", ""), i.railXWidth = null, i.railXRatio = null, i.scrollbarYRail = u.appendTo(u.e("div", "ps__scrollbar-y-rail"), e), i.scrollbarY = u.appendTo(u.e("div", "ps__scrollbar-y"), i.scrollbarYRail), i.scrollbarY.setAttribute("tabindex", 0), i.event.bind(i.scrollbarY, "focus", t), i.event.bind(i.scrollbarY, "blur", n), i.scrollbarYActive = null, i.scrollbarYHeight = null, i.scrollbarYTop = null, i.scrollbarYRight = a.toInt(u.css(i.scrollbarYRail, "right")), i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight, i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : a.toInt(u.css(i.scrollbarYRail, "left")), i.scrollbarYOuterWidth = i.isRtl ? a.outerWidth(i.scrollbarY) : null, i.railBorderYWidth = a.toInt(u.css(i.scrollbarYRail, "borderTopWidth")) + a.toInt(u.css(i.scrollbarYRail, "borderBottomWidth")), u.css(i.scrollbarYRail, "display", "block"), i.railYMarginHeight = a.toInt(u.css(i.scrollbarYRail, "marginTop")) + a.toInt(u.css(i.scrollbarYRail, "marginBottom")), u.css(i.scrollbarYRail, "display", ""), i.railYHeight = null, i.railYRatio = null
    }

    function o(e) {
      return e.getAttribute("data-ps-id")
    }

    function r(e, t) {
      e.setAttribute("data-ps-id", t)
    }

    function s(e) {
      e.removeAttribute("data-ps-id")
    }

    var a = e("../lib/helper"), l = e("../lib/class"), c = e("./default-setting"),
      u = e("../lib/dom"), d = e("../lib/event-manager"), p = e("../lib/guid"), f = {};
    n.add = function (e) {
      var t = p();
      return r(e, t), f[t] = new i(e), f[t]
    }, n.remove = function (e) {
      delete f[o(e)], s(e)
    }, n.get = function (e) {
      return f[o(e)]
    }
  }, {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/event-manager": 4,
    "../lib/guid": 5,
    "../lib/helper": 6,
    "./default-setting": 8
  }],
  19: [function (e, t, n) {
    "use strict";
    function i(e, t) {
      return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
    }

    function o(e, t) {
      var n = {width: t.railXWidth};
      t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : n.left = e.scrollLeft, t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - e.scrollTop : n.top = t.scrollbarXTop + e.scrollTop, a.css(t.scrollbarXRail, n);
      var i = {top: e.scrollTop, height: t.railYHeight};
      t.isScrollbarYUsingRight ? t.isRtl ? i.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : i.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : i.left = t.scrollbarYLeft + e.scrollLeft, a.css(t.scrollbarYRail, i), a.css(t.scrollbarX, {
        left: t.scrollbarXLeft,
        width: t.scrollbarXWidth - t.railBorderXWidth
      }), a.css(t.scrollbarY, {
        top: t.scrollbarYTop,
        height: t.scrollbarYHeight - t.railBorderYWidth
      })
    }

    var r = e("../lib/helper"), s = e("../lib/class"), a = e("../lib/dom"), l = e("./instances"),
      c = e("./update-scroll");
    t.exports = function (e) {
      var t = l.get(e);
      t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight;
      var n;
      e.contains(t.scrollbarXRail) || (n = a.queryChildren(e, ".ps__scrollbar-x-rail"), n.length > 0 && n.forEach(function (e) {
        a.remove(e)
      }), a.appendTo(t.scrollbarXRail, e)), e.contains(t.scrollbarYRail) || (n = a.queryChildren(e, ".ps__scrollbar-y-rail"), n.length > 0 && n.forEach(function (e) {
        a.remove(e)
      }), a.appendTo(t.scrollbarYRail, e)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = i(t, r.toInt(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = r.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = i(t, r.toInt(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = r.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
      t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), o(e, t), t.scrollbarXActive ? s.add(e, "ps--active-x") : (s.remove(e, "ps--active-x"), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, c(e, "left", 0)), t.scrollbarYActive ? s.add(e, "ps--active-y") : (s.remove(e, "ps--active-y"), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, c(e, "top", 0))
    }
  }, {
    "../lib/class": 2,
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-scroll": 20
  }],
  20: [function (e, t, n) {
    "use strict";
    var i = e("./instances"), o = function (e) {
      var t = document.createEvent("Event");
      return t.initEvent(e, !0, !0), t
    };
    t.exports = function (e, t, n) {
      if (void 0 === e)throw"You must provide an element to the update-scroll function";
      if (void 0 === t)throw"You must provide an axis to the update-scroll function";
      if (void 0 === n)throw"You must provide a value to the update-scroll function";
      "top" === t && n <= 0 && (e.scrollTop = n = 0, e.dispatchEvent(o("ps-y-reach-start"))), "left" === t && n <= 0 && (e.scrollLeft = n = 0, e.dispatchEvent(o("ps-x-reach-start")));
      var r = i.get(e);
      "top" === t && n >= r.contentHeight - r.containerHeight && (n = r.contentHeight - r.containerHeight, n - e.scrollTop <= 1 ? n = e.scrollTop : e.scrollTop = n, e.dispatchEvent(o("ps-y-reach-end"))), "left" === t && n >= r.contentWidth - r.containerWidth && (n = r.contentWidth - r.containerWidth, n - e.scrollLeft <= 1 ? n = e.scrollLeft : e.scrollLeft = n, e.dispatchEvent(o("ps-x-reach-end"))), void 0 === r.lastTop && (r.lastTop = e.scrollTop), void 0 === r.lastLeft && (r.lastLeft = e.scrollLeft), "top" === t && n < r.lastTop && e.dispatchEvent(o("ps-scroll-up")), "top" === t && n > r.lastTop && e.dispatchEvent(o("ps-scroll-down")), "left" === t && n < r.lastLeft && e.dispatchEvent(o("ps-scroll-left")), "left" === t && n > r.lastLeft && e.dispatchEvent(o("ps-scroll-right")), "top" === t && n !== r.lastTop && (e.scrollTop = r.lastTop = n, e.dispatchEvent(o("ps-scroll-y"))), "left" === t && n !== r.lastLeft && (e.scrollLeft = r.lastLeft = n, e.dispatchEvent(o("ps-scroll-x")))
    }
  }, {"./instances": 18}],
  21: [function (e, t, n) {
    "use strict";
    var i = e("../lib/helper"), o = e("../lib/dom"), r = e("./instances"),
      s = e("./update-geometry"), a = e("./update-scroll");
    t.exports = function (e) {
      var t = r.get(e);
      t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, o.css(t.scrollbarXRail, "display", "block"), o.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = i.toInt(o.css(t.scrollbarXRail, "marginLeft")) + i.toInt(o.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = i.toInt(o.css(t.scrollbarYRail, "marginTop")) + i.toInt(o.css(t.scrollbarYRail, "marginBottom")), o.css(t.scrollbarXRail, "display", "none"), o.css(t.scrollbarYRail, "display", "none"), s(e), a(e, "top", e.scrollTop), a(e, "left", e.scrollLeft), o.css(t.scrollbarXRail, "display", ""), o.css(t.scrollbarYRail, "display", ""))
    }
  }, {
    "../lib/dom": 3,
    "../lib/helper": 6,
    "./instances": 18,
    "./update-geometry": 19,
    "./update-scroll": 20
  }]
}, {}, [1]), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define([], function () {
    return t.apply(e)
  }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
}("object" == typeof global ? global : this, function () {
  "use strict";
  function e(e) {
    return null !== e && e === e.window
  }

  function t(t) {
    return e(t) ? t : 9 === t.nodeType && t.defaultView
  }

  function n(e) {
    var t = typeof e;
    return "function" === t || "object" === t && !!e
  }

  function i(e) {
    return n(e) && e.nodeType > 0
  }

  function o(e) {
    var t = p.call(e);
    return "[object String]" === t ? d(e) : n(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(t) && e.hasOwnProperty("length") ? e : i(e) ? [e] : []
  }

  function r(e) {
    var n, i, o = {top: 0, left: 0}, r = e && e.ownerDocument;
    return n = r.documentElement, void 0 !== e.getBoundingClientRect && (o = e.getBoundingClientRect()), i = t(r), {
      top: o.top + i.pageYOffset - n.clientTop,
      left: o.left + i.pageXOffset - n.clientLeft
    }
  }

  function s(e) {
    var t = "";
    for (var n in e)e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
    return t
  }

  function a(e, t, n) {
    if (n) {
      n.classList.remove("waves-rippling");
      var i = n.getAttribute("data-x"), o = n.getAttribute("data-y"),
        r = n.getAttribute("data-scale"), a = n.getAttribute("data-translate"),
        l = Date.now() - Number(n.getAttribute("data-hold")), c = 350 - l;
      c < 0 && (c = 0), "mousemove" === e.type && (c = 150);
      var u = "mousemove" === e.type ? 2500 : h.duration;
      setTimeout(function () {
        var e = {
          top: o + "px",
          left: i + "px",
          opacity: "0",
          "-webkit-transition-duration": u + "ms",
          "-moz-transition-duration": u + "ms",
          "-o-transition-duration": u + "ms",
          "transition-duration": u + "ms",
          "-webkit-transform": r + " " + a,
          "-moz-transform": r + " " + a,
          "-ms-transform": r + " " + a,
          "-o-transform": r + " " + a,
          transform: r + " " + a
        };
        n.setAttribute("style", s(e)), setTimeout(function () {
          try {
            t.removeChild(n)
          } catch (e) {
            return !1
          }
        }, u)
      }, c)
    }
  }

  function l(e) {
    if (!1 === g.allowEvent(e))return null;
    for (var t = null, n = e.target || e.srcElement; null !== n.parentElement;) {
      if (n.classList.contains("waves-effect") && !(n instanceof SVGElement)) {
        t = n;
        break
      }
      n = n.parentElement
    }
    return t
  }

  function c(e) {
    var t = l(e);
    if (null !== t) {
      if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled"))return;
      if (g.registerEvent(e), "touchstart" === e.type && h.delay) {
        var n = !1, i = setTimeout(function () {
          i = null, h.show(e, t)
        }, h.delay), o = function (o) {
          i && (clearTimeout(i), i = null, h.show(e, t)), n || (n = !0, h.hide(o, t))
        }, r = function (e) {
          i && (clearTimeout(i), i = null), o(e)
        };
        t.addEventListener("touchmove", r, !1), t.addEventListener("touchend", o, !1), t.addEventListener("touchcancel", o, !1)
      } else h.show(e, t), f && (t.addEventListener("touchend", h.hide, !1), t.addEventListener("touchcancel", h.hide, !1)), t.addEventListener("mouseup", h.hide, !1), t.addEventListener("mouseleave", h.hide, !1)
    }
  }

  var u = u || {}, d = document.querySelectorAll.bind(document), p = Object.prototype.toString,
    f = "ontouchstart" in window, h = {
      duration: 750, delay: 200, show: function (e, t, n) {
        if (2 === e.button)return !1;
        t = t || this;
        var i = document.createElement("div");
        i.className = "waves-ripple waves-rippling", t.appendChild(i);
        var o = r(t), a = 0, l = 0;
        "touches" in e && e.touches.length ? (a = e.touches[0].pageY - o.top, l = e.touches[0].pageX - o.left) : (a = e.pageY - o.top, l = e.pageX - o.left), l = l >= 0 ? l : 0, a = a >= 0 ? a : 0;
        var c = "scale(" + t.clientWidth / 100 * 3 + ")", u = "translate(0,0)";
        n && (u = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", l), i.setAttribute("data-y", a), i.setAttribute("data-scale", c), i.setAttribute("data-translate", u);
        var d = {top: a + "px", left: l + "px"};
        i.classList.add("waves-notransition"), i.setAttribute("style", s(d)), i.classList.remove("waves-notransition"), d["-webkit-transform"] = c + " " + u, d["-moz-transform"] = c + " " + u, d["-ms-transform"] = c + " " + u, d["-o-transform"] = c + " " + u, d.transform = c + " " + u, d.opacity = "1";
        var p = "mousemove" === e.type ? 2500 : h.duration;
        d["-webkit-transition-duration"] = p + "ms", d["-moz-transition-duration"] = p + "ms", d["-o-transition-duration"] = p + "ms", d["transition-duration"] = p + "ms", i.setAttribute("style", s(d))
      }, hide: function (e, t) {
        t = t || this;
        for (var n = t.getElementsByClassName("waves-rippling"), i = 0, o = n.length; i < o; i++)a(e, t, n[i])
      }
    }, m = {
      input: function (e) {
        var t = e.parentNode;
        if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
          var n = document.createElement("i");
          n.className = e.className + " waves-input-wrapper", e.className = "waves-button-input", t.replaceChild(n, e), n.appendChild(e);
          var i = window.getComputedStyle(e, null), o = i.color, r = i.backgroundColor;
          n.setAttribute("style", "color:" + o + ";background:" + r), e.setAttribute("style", "background-color:rgba(0,0,0,0);")
        }
      }, img: function (e) {
        var t = e.parentNode;
        if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
          var n = document.createElement("i");
          t.replaceChild(n, e), n.appendChild(e)
        }
      }
    }, g = {
      touches: 0, allowEvent: function (e) {
        var t = !0;
        return /^(mousedown|mousemove)$/.test(e.type) && g.touches && (t = !1), t
      }, registerEvent: function (e) {
        var t = e.type;
        "touchstart" === t ? g.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function () {
            g.touches && (g.touches -= 1)
          }, 500)
      }
    };
  return u.init = function (e) {
    var t = document.body;
    e = e || {}, "duration" in e && (h.duration = e.duration), "delay" in e && (h.delay = e.delay), f && (t.addEventListener("touchstart", c, !1), t.addEventListener("touchcancel", g.registerEvent, !1), t.addEventListener("touchend", g.registerEvent, !1)), t.addEventListener("mousedown", c, !1)
  }, u.attach = function (e, t) {
    e = o(e), "[object Array]" === p.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
    for (var n, i, r = 0, s = e.length; r < s; r++)n = e[r], i = n.tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(i) && (m[i](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + t)
  }, u.ripple = function (e, t) {
    e = o(e);
    var n = e.length;
    if (t = t || {}, t.wait = t.wait || 0, t.position = t.position || null, n)for (var i, s, a, l = {}, c = 0, u = {
      type: "mousedown",
      button: 1
    }; c < n; c++)if (i = e[c], s = t.position || {
          x: i.clientWidth / 2,
          y: i.clientHeight / 2
        }, a = r(i), l.x = a.left + s.x, l.y = a.top + s.y, u.pageX = l.x, u.pageY = l.y, h.show(u, i), t.wait >= 0 && null !== t.wait) {
      var d = {type: "mouseup", button: 1};
      setTimeout(function (e, t) {
        return function () {
          h.hide(e, t)
        }
      }(d, i), t.wait)
    }
  }, u.calm = function (e) {
    e = o(e);
    for (var t = {type: "mouseup", button: 1}, n = 0, i = e.length; n < i; n++)h.hide(t, e[n])
  }, u.displayEffect = function (e) {
    console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), u.init(e)
  }, u
}), function() {};
