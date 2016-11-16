﻿/*!
* XING
*
* @author Stefan Keim (indus)
* @version 0.1.1
* @description canvas based line background
*
*/
"use strict";

(function () {
  for (var i = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];window.requestAnimationFrame || (window.requestAnimationFrame = function (n) {
    var t = new Date().getTime(),
        r = Math.max(0, 16 - (t - i)),
        u = window.setTimeout(function () {
      n(t + r);
    }, r);return i = t + r, u;
  });window.cancelAnimationFrame || (window.cancelAnimationFrame = function (n) {
    clearTimeout(n);
  });
})();"use static";var XING = (function () {
  function n(t, i) {
    function ct(n, t) {
      return n[1] - t[1];
    }function at(n) {
      st = !0;l.x = n.pageX / (window.innerWidth / 2) - 1;l.y = n.pageY / (window.innerHeight / 2) - 1;
    }function ht() {
      g = y.width = (window.innerWidth || y.offsetWidth) / 2;nt = y.height = (window.innerHeight || y.offsetHeight) / 2;s.fillStyle = i.bkgdColor;s.strokeStyle = i.lineColor;s.lineCap = "round";
    }var y, d, r, u, f, e, o, h, v, lt, tt, et, k, it, rt, b, c, ot, ut, st;if ((i === void 0 && (i = {}), this.options = i, y = typeof t == "string" || t instanceof String ? document.getElementById(t) : t, y.tagName != "CANVAS")) throw "no canvas";for (d in n.options) i[d] = i[d] === undefined ? n.options[d] : i[d];var s = y.getContext("2d", { alpha: !i.bkgdColor }),
        l = { x: 0, y: 0 },
        ft,
        p,
        g,
        nt,
        a = Math.random,
        w = 0;for (h = [], ot = function ot(n) {
      for (i.bkgdColor ? s.fillRect(0, 0, g, nt) : s.clearRect(0, 0, g, nt), w = n - w || 16, b = p; b; b--) {
        for (r = ft[b - 1], u = r.x1, f = r.y1, e = r.x2, o = r.y2, i.parallax && (tt = i.parallax / b, u += l.x * tt, e += l.x * tt, f += l.y * tt, o += l.y * tt), r.m = (f - o) / (u - e), r.b = f - r.m * u, u = r.x1 += r.vx1 * w, f = r.y1 += r.vx1 * w, e = r.x2 += r.vx2 * w, o = r.y2 += r.vy2 * w, (u < 0 || u > 1) && (r.vx1 = -r.vx1), (f < 0 || f > 1) && (r.vy1 = -r.vy1), (e < 0 || e > 1) && (r.vx2 = -r.vx2), (o < 0 || o > 1) && (r.vy2 = -r.vy2), u = Math.min(Math.max((+(r.m < 0) - r.b) / r.m, 0), 1), f = r.m * u + r.b, e = Math.min(Math.max((+(r.m > 0) - r.b) / r.m, 0), 1), o = r.m * e + r.b, h[h.length = 0] = [0, u, f], lt = Math.sqrt((e - u) * (e - u) + (o - f) * (o - f)), c = b; c < p; c++) et = ft[c], k = (et.b - r.b) / (r.m - et.m), it = r.m * k + r.b, k > 0 && k < 1 && it > 0 && it < 1 && (rt = .01 / Math.abs(Math.atan(r.m) - Math.atan(et.m)) + .01, h[h.push([1, k - rt * (e - u), it - rt * (o - f)])] = [0, k + rt * (e - u), it + rt * (o - f)]);for (h.push([1, e, o]), h.sort(ct), s.beginPath(), c = 0; c < h.length && (v = h[c]); c++) c && v[0] && h[c - 1][0] == v[0] || (v[0] ? s.lineTo(v[1] * g, v[2] * nt) : s.moveTo(v[1] * g, v[2] * nt));s.lineWidth = b * .2 + .4;s.stroke();
      }w = n;requestAnimationFrame(ot);
    }, ft = [], p = 1; p++ < Math.max(i.lineNum, 2);) ut = i.velocity * p / 1e5, p = ft.push({ x1: a(), y1: a(), x2: a(), y2: a(), vx1: a() * ut, vy1: a() * ut, vx2: a() * ut, vy2: a() * ut });p--;window.addEventListener("resize", ht, !1);document.addEventListener("mousemove", at, !1);ht();ot(0);
  }return n.options = { velocity: 1, parallax: .1, lineNum: 8, bkgdColor: "#55acee", lineColor: "rgba(255,255,255,.15)" }, n;
})();new XING("xing");

