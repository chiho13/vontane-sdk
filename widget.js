/*! For license information please see widget.js.LICENSE.txt */
var Embed;
(() => {
  var e,
    t,
    n = {
      679: (e, t, n) => {
        "use strict";
        var r = n(864),
          i = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          s = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          a = {};
        function u(e) {
          return r.isMemo(e) ? s : a[e.$$typeof] || i;
        }
        (a[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (a[r.Memo] = s);
        var l = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          d = Object.getOwnPropertySymbols,
          h = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          m = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" != typeof n) {
            if (m) {
              var i = p(n);
              i && i !== m && e(t, i, r);
            }
            var s = c(n);
            d && (s = s.concat(d(n)));
            for (var a = u(t), f = u(n), g = 0; g < s.length; ++g) {
              var v = s[g];
              if (!(o[v] || (r && r[v]) || (f && f[v]) || (a && a[v]))) {
                var y = h(n, v);
                try {
                  l(t, v, y);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      443: function (e, t, n) {
        "object" == typeof navigator &&
          (e.exports = (function () {
            "use strict";
            function e(e, t, n) {
              return (
                (t = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var r = n.call(e, "string");
                      if ("object" != typeof r) return r;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return String(e);
                  })(e);
                  return "symbol" == typeof t ? t : String(t);
                })(t)) in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n),
                e
              );
            }
            function t(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            function r(e, t, n) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n),
                e
              );
            }
            function i(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            function o(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? i(Object(n), !0).forEach(function (t) {
                      r(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : i(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            }
            var s = { addCSS: !0, thumbWidth: 15, watch: !0 },
              a = function (e) {
                return null != e ? e.constructor : null;
              },
              u = function (e, t) {
                return !!(e && t && e instanceof t);
              },
              l = function (e) {
                return null == e;
              },
              c = function (e) {
                return a(e) === Object;
              },
              d = function (e) {
                return a(e) === String;
              },
              h = function (e) {
                return Array.isArray(e);
              },
              p = function (e) {
                return u(e, NodeList);
              },
              m = {
                nullOrUndefined: l,
                object: c,
                number: function (e) {
                  return a(e) === Number && !Number.isNaN(e);
                },
                string: d,
                boolean: function (e) {
                  return a(e) === Boolean;
                },
                function: function (e) {
                  return a(e) === Function;
                },
                array: h,
                nodeList: p,
                element: function (e) {
                  return u(e, Element);
                },
                event: function (e) {
                  return u(e, Event);
                },
                empty: function (e) {
                  return (
                    l(e) ||
                    ((d(e) || h(e) || p(e)) && !e.length) ||
                    (c(e) && !Object.keys(e).length)
                  );
                },
              };
            var f = (function () {
              function e(t, n) {
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  m.element(t)
                    ? (this.element = t)
                    : m.string(t) && (this.element = document.querySelector(t)),
                  m.element(this.element) &&
                    m.empty(this.element.rangeTouch) &&
                    ((this.config = o({}, s, {}, n)), this.init());
              }
              return (
                (function (e, n, r) {
                  n && t(e.prototype, n), r && t(e, r);
                })(
                  e,
                  [
                    {
                      key: "init",
                      value: function () {
                        e.enabled &&
                          (this.config.addCSS &&
                            ((this.element.style.userSelect = "none"),
                            (this.element.style.webKitUserSelect = "none"),
                            (this.element.style.touchAction = "manipulation")),
                          this.listeners(!0),
                          (this.element.rangeTouch = this));
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        e.enabled &&
                          (this.config.addCSS &&
                            ((this.element.style.userSelect = ""),
                            (this.element.style.webKitUserSelect = ""),
                            (this.element.style.touchAction = "")),
                          this.listeners(!1),
                          (this.element.rangeTouch = null));
                      },
                    },
                    {
                      key: "listeners",
                      value: function (e) {
                        var t = this,
                          n = e ? "addEventListener" : "removeEventListener";
                        ["touchstart", "touchmove", "touchend"].forEach(
                          function (e) {
                            t.element[n](
                              e,
                              function (e) {
                                return t.set(e);
                              },
                              !1
                            );
                          }
                        );
                      },
                    },
                    {
                      key: "get",
                      value: function (t) {
                        if (!e.enabled || !m.event(t)) return null;
                        var n,
                          r = t.target,
                          i = t.changedTouches[0],
                          o = parseFloat(r.getAttribute("min")) || 0,
                          s = parseFloat(r.getAttribute("max")) || 100,
                          a = parseFloat(r.getAttribute("step")) || 1,
                          u = r.getBoundingClientRect(),
                          l =
                            ((100 / u.width) * (this.config.thumbWidth / 2)) /
                            100;
                        return (
                          0 > (n = (100 / u.width) * (i.clientX - u.left))
                            ? (n = 0)
                            : 100 < n && (n = 100),
                          50 > n
                            ? (n -= (100 - 2 * n) * l)
                            : 50 < n && (n += 2 * (n - 50) * l),
                          o +
                            (function (e, t) {
                              if (1 > t) {
                                var n = (function (e) {
                                  var t = ""
                                    .concat(e)
                                    .match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                                  return t
                                    ? Math.max(
                                        0,
                                        (t[1] ? t[1].length : 0) -
                                          (t[2] ? +t[2] : 0)
                                      )
                                    : 0;
                                })(t);
                                return parseFloat(e.toFixed(n));
                              }
                              return Math.round(e / t) * t;
                            })((n / 100) * (s - o), a)
                        );
                      },
                    },
                    {
                      key: "set",
                      value: function (t) {
                        e.enabled &&
                          m.event(t) &&
                          !t.target.disabled &&
                          (t.preventDefault(),
                          (t.target.value = this.get(t)),
                          (function (e, t) {
                            if (e && t) {
                              var n = new Event(t, { bubbles: !0 });
                              e.dispatchEvent(n);
                            }
                          })(
                            t.target,
                            "touchend" === t.type ? "change" : "input"
                          ));
                      },
                    },
                  ],
                  [
                    {
                      key: "setup",
                      value: function (t) {
                        var n =
                            1 < arguments.length && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          r = null;
                        if (
                          (m.empty(t) || m.string(t)
                            ? (r = Array.from(
                                document.querySelectorAll(
                                  m.string(t) ? t : 'input[type="range"]'
                                )
                              ))
                            : m.element(t)
                            ? (r = [t])
                            : m.nodeList(t)
                            ? (r = Array.from(t))
                            : m.array(t) && (r = t.filter(m.element)),
                          m.empty(r))
                        )
                          return null;
                        var i = o({}, s, {}, n);
                        if (m.string(t) && i.watch) {
                          var a = new MutationObserver(function (n) {
                            Array.from(n).forEach(function (n) {
                              Array.from(n.addedNodes).forEach(function (n) {
                                m.element(n) &&
                                  (function (e, t) {
                                    return function () {
                                      return Array.from(
                                        document.querySelectorAll(t)
                                      ).includes(this);
                                    }.call(e, t);
                                  })(n, t) &&
                                  new e(n, i);
                              });
                            });
                          });
                          a.observe(document.body, {
                            childList: !0,
                            subtree: !0,
                          });
                        }
                        return r.map(function (t) {
                          return new e(t, n);
                        });
                      },
                    },
                    {
                      key: "enabled",
                      get: function () {
                        return "ontouchstart" in document.documentElement;
                      },
                    },
                  ]
                ),
                e
              );
            })();
            const g = (e) => (null != e ? e.constructor : null),
              v = (e, t) => Boolean(e && t && e instanceof t),
              y = (e) => null == e,
              b = (e) => g(e) === Object,
              C = (e) => g(e) === String,
              D = (e) => "function" == typeof e,
              w = (e) => Array.isArray(e),
              E = (e) => v(e, NodeList),
              A = (e) =>
                y(e) ||
                ((C(e) || w(e) || E(e)) && !e.length) ||
                (b(e) && !Object.keys(e).length);
            var B = {
              nullOrUndefined: y,
              object: b,
              number: (e) => g(e) === Number && !Number.isNaN(e),
              string: C,
              boolean: (e) => g(e) === Boolean,
              function: D,
              array: w,
              weakMap: (e) => v(e, WeakMap),
              nodeList: E,
              element: (e) =>
                null !== e &&
                "object" == typeof e &&
                1 === e.nodeType &&
                "object" == typeof e.style &&
                "object" == typeof e.ownerDocument,
              textNode: (e) => g(e) === Text,
              event: (e) => v(e, Event),
              keyboardEvent: (e) => v(e, KeyboardEvent),
              cue: (e) => v(e, window.TextTrackCue) || v(e, window.VTTCue),
              track: (e) => v(e, TextTrack) || (!y(e) && C(e.kind)),
              promise: (e) => v(e, Promise) && D(e.then),
              url: (e) => {
                if (v(e, window.URL)) return !0;
                if (!C(e)) return !1;
                let t = e;
                (e.startsWith("http://") && e.startsWith("https://")) ||
                  (t = `http://${e}`);
                try {
                  return !A(new URL(t).hostname);
                } catch (e) {
                  return !1;
                }
              },
              empty: A,
            };
            const x = (() => {
              const e = document.createElement("span"),
                t = {
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd otransitionend",
                  transition: "transitionend",
                },
                n = Object.keys(t).find((t) => void 0 !== e.style[t]);
              return !!B.string(n) && t[n];
            })();
            function k(e, t) {
              setTimeout(() => {
                try {
                  (e.hidden = !0), e.offsetHeight, (e.hidden = !1);
                } catch (e) {}
              }, t);
            }
            var F = {
              isIE: Boolean(window.document.documentMode),
              isEdge: /Edge/g.test(navigator.userAgent),
              isWebKit:
                "WebkitAppearance" in document.documentElement.style &&
                !/Edge/g.test(navigator.userAgent),
              isIPhone:
                /iPhone|iPod/gi.test(navigator.userAgent) &&
                navigator.maxTouchPoints > 1,
              isIPadOS:
                "MacIntel" === navigator.platform &&
                navigator.maxTouchPoints > 1,
              isIos:
                /iPad|iPhone|iPod/gi.test(navigator.userAgent) &&
                navigator.maxTouchPoints > 1,
            };
            function P(e, t) {
              return t.split(".").reduce((e, t) => e && e[t], e);
            }
            function T(e = {}, ...t) {
              if (!t.length) return e;
              const n = t.shift();
              return B.object(n)
                ? (Object.keys(n).forEach((t) => {
                    B.object(n[t])
                      ? (Object.keys(e).includes(t) ||
                          Object.assign(e, { [t]: {} }),
                        T(e[t], n[t]))
                      : Object.assign(e, { [t]: n[t] });
                  }),
                  T(e, ...t))
                : e;
            }
            function S(e, t) {
              const n = e.length ? e : [e];
              Array.from(n)
                .reverse()
                .forEach((e, n) => {
                  const r = n > 0 ? t.cloneNode(!0) : t,
                    i = e.parentNode,
                    o = e.nextSibling;
                  r.appendChild(e), o ? i.insertBefore(r, o) : i.appendChild(r);
                });
            }
            function M(e, t) {
              B.element(e) &&
                !B.empty(t) &&
                Object.entries(t)
                  .filter(([, e]) => !B.nullOrUndefined(e))
                  .forEach(([t, n]) => e.setAttribute(t, n));
            }
            function O(e, t, n) {
              const r = document.createElement(e);
              return (
                B.object(t) && M(r, t), B.string(n) && (r.innerText = n), r
              );
            }
            function _(e, t, n, r) {
              B.element(t) && t.appendChild(O(e, n, r));
            }
            function R(e) {
              B.nodeList(e) || B.array(e)
                ? Array.from(e).forEach(R)
                : B.element(e) &&
                  B.element(e.parentNode) &&
                  e.parentNode.removeChild(e);
            }
            function N(e) {
              if (!B.element(e)) return;
              let { length: t } = e.childNodes;
              for (; t > 0; ) e.removeChild(e.lastChild), (t -= 1);
            }
            function j(e, t) {
              return B.element(t) && B.element(t.parentNode) && B.element(e)
                ? (t.parentNode.replaceChild(e, t), e)
                : null;
            }
            function L(e, t) {
              if (!B.string(e) || B.empty(e)) return {};
              const n = {},
                r = T({}, t);
              return (
                e.split(",").forEach((e) => {
                  const t = e.trim(),
                    i = t.replace(".", ""),
                    o = t.replace(/[[\]]/g, "").split("="),
                    [s] = o,
                    a = o.length > 1 ? o[1].replace(/["']/g, "") : "";
                  switch (t.charAt(0)) {
                    case ".":
                      B.string(r.class)
                        ? (n.class = `${r.class} ${i}`)
                        : (n.class = i);
                      break;
                    case "#":
                      n.id = t.replace("#", "");
                      break;
                    case "[":
                      n[s] = a;
                  }
                }),
                T(r, n)
              );
            }
            function I(e, t) {
              if (!B.element(e)) return;
              let n = t;
              B.boolean(n) || (n = !e.hidden), (e.hidden = n);
            }
            function V(e, t, n) {
              if (B.nodeList(e)) return Array.from(e).map((e) => V(e, t, n));
              if (B.element(e)) {
                let r = "toggle";
                return (
                  void 0 !== n && (r = n ? "add" : "remove"),
                  e.classList[r](t),
                  e.classList.contains(t)
                );
              }
              return !1;
            }
            function z(e, t) {
              return B.element(e) && e.classList.contains(t);
            }
            function $(e, t) {
              const { prototype: n } = Element;
              return (
                n.matches ||
                n.webkitMatchesSelector ||
                n.mozMatchesSelector ||
                n.msMatchesSelector ||
                function () {
                  return Array.from(document.querySelectorAll(t)).includes(
                    this
                  );
                }
              ).call(e, t);
            }
            function W(e) {
              return this.elements.container.querySelectorAll(e);
            }
            function q(e) {
              return this.elements.container.querySelector(e);
            }
            function U(e = null, t = !1) {
              B.element(e) && e.focus({ preventScroll: !0, focusVisible: t });
            }
            const H = {
                "audio/ogg": "vorbis",
                "audio/wav": "1",
                "video/webm": "vp8, vorbis",
                "video/mp4": "avc1.42E01E, mp4a.40.2",
                "video/ogg": "theora",
              },
              Z = {
                audio: "canPlayType" in document.createElement("audio"),
                video: "canPlayType" in document.createElement("video"),
                check(e, t) {
                  const n = Z[e] || "html5" !== t;
                  return { api: n, ui: n && Z.rangeInput };
                },
                pip: !(
                  F.isIPhone ||
                  (!B.function(O("video").webkitSetPresentationMode) &&
                    (!document.pictureInPictureEnabled ||
                      O("video").disablePictureInPicture))
                ),
                airplay: B.function(
                  window.WebKitPlaybackTargetAvailabilityEvent
                ),
                playsinline: "playsInline" in document.createElement("video"),
                mime(e) {
                  if (B.empty(e)) return !1;
                  const [t] = e.split("/");
                  let n = e;
                  if (!this.isHTML5 || t !== this.type) return !1;
                  Object.keys(H).includes(n) && (n += `; codecs="${H[e]}"`);
                  try {
                    return Boolean(
                      n && this.media.canPlayType(n).replace(/no/, "")
                    );
                  } catch (e) {
                    return !1;
                  }
                },
                textTracks: "textTracks" in document.createElement("video"),
                rangeInput: (() => {
                  const e = document.createElement("input");
                  return (e.type = "range"), "range" === e.type;
                })(),
                touch: "ontouchstart" in document.documentElement,
                transitions: !1 !== x,
                reducedMotion:
                  "matchMedia" in window &&
                  window.matchMedia("(prefers-reduced-motion)").matches,
              },
              Y = (() => {
                let e = !1;
                try {
                  const t = Object.defineProperty({}, "passive", {
                    get: () => ((e = !0), null),
                  });
                  window.addEventListener("test", null, t),
                    window.removeEventListener("test", null, t);
                } catch (e) {}
                return e;
              })();
            function G(e, t, n, r = !1, i = !0, o = !1) {
              if (
                !e ||
                !("addEventListener" in e) ||
                B.empty(t) ||
                !B.function(n)
              )
                return;
              const s = t.split(" ");
              let a = o;
              Y && (a = { passive: i, capture: o }),
                s.forEach((t) => {
                  this &&
                    this.eventListeners &&
                    r &&
                    this.eventListeners.push({
                      element: e,
                      type: t,
                      callback: n,
                      options: a,
                    }),
                    e[r ? "addEventListener" : "removeEventListener"](t, n, a);
                });
            }
            function X(e, t = "", n, r = !0, i = !1) {
              G.call(this, e, t, n, !0, r, i);
            }
            function K(e, t = "", n, r = !0, i = !1) {
              G.call(this, e, t, n, !1, r, i);
            }
            function J(e, t = "", n, r = !0, i = !1) {
              const o = (...s) => {
                K(e, t, o, r, i), n.apply(this, s);
              };
              G.call(this, e, t, o, !0, r, i);
            }
            function Q(e, t = "", n = !1, r = {}) {
              if (!B.element(e) || B.empty(t)) return;
              const i = new CustomEvent(t, {
                bubbles: n,
                detail: { ...r, plyr: this },
              });
              e.dispatchEvent(i);
            }
            function ee() {
              this &&
                this.eventListeners &&
                (this.eventListeners.forEach((e) => {
                  const { element: t, type: n, callback: r, options: i } = e;
                  t.removeEventListener(n, r, i);
                }),
                (this.eventListeners = []));
            }
            function te() {
              return new Promise((e) =>
                this.ready
                  ? setTimeout(e, 0)
                  : X.call(this, this.elements.container, "ready", e)
              ).then(() => {});
            }
            function ne(e) {
              B.promise(e) && e.then(null, () => {});
            }
            function re(e) {
              return B.array(e) ? e.filter((t, n) => e.indexOf(t) === n) : e;
            }
            function ie(e, t) {
              return B.array(e) && e.length
                ? e.reduce((e, n) =>
                    Math.abs(n - t) < Math.abs(e - t) ? n : e
                  )
                : null;
            }
            function oe(e) {
              return !(!window || !window.CSS) && window.CSS.supports(e);
            }
            const se = [
              [1, 1],
              [4, 3],
              [3, 4],
              [5, 4],
              [4, 5],
              [3, 2],
              [2, 3],
              [16, 10],
              [10, 16],
              [16, 9],
              [9, 16],
              [21, 9],
              [9, 21],
              [32, 9],
              [9, 32],
            ].reduce((e, [t, n]) => ({ ...e, [t / n]: [t, n] }), {});
            function ae(e) {
              return (
                !!(B.array(e) || (B.string(e) && e.includes(":"))) &&
                (B.array(e) ? e : e.split(":")).map(Number).every(B.number)
              );
            }
            function ue(e) {
              if (!B.array(e) || !e.every(B.number)) return null;
              const [t, n] = e,
                r = (e, t) => (0 === t ? e : r(t, e % t)),
                i = r(t, n);
              return [t / i, n / i];
            }
            function le(e) {
              const t = (e) => (ae(e) ? e.split(":").map(Number) : null);
              let n = t(e);
              if (
                (null === n && (n = t(this.config.ratio)),
                null === n &&
                  !B.empty(this.embed) &&
                  B.array(this.embed.ratio) &&
                  ({ ratio: n } = this.embed),
                null === n && this.isHTML5)
              ) {
                const { videoWidth: e, videoHeight: t } = this.media;
                n = [e, t];
              }
              return ue(n);
            }
            function ce(e) {
              if (!this.isVideo) return {};
              const { wrapper: t } = this.elements,
                n = le.call(this, e);
              if (!B.array(n)) return {};
              const [r, i] = ue(n),
                o = (100 / r) * i;
              if (
                (oe(`aspect-ratio: ${r}/${i}`)
                  ? (t.style.aspectRatio = `${r}/${i}`)
                  : (t.style.paddingBottom = `${o}%`),
                this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
              ) {
                const e =
                    (100 / this.media.offsetWidth) *
                    parseInt(
                      window.getComputedStyle(this.media).paddingBottom,
                      10
                    ),
                  n = (e - o) / (e / 50);
                this.fullscreen.active
                  ? (t.style.paddingBottom = null)
                  : (this.media.style.transform = `translateY(-${n}%)`);
              } else
                this.isHTML5 &&
                  t.classList.add(this.config.classNames.videoFixedRatio);
              return { padding: o, ratio: n };
            }
            function de(e, t, n = 0.05) {
              const r = e / t,
                i = ie(Object.keys(se), r);
              return Math.abs(i - r) <= n ? se[i] : [e, t];
            }
            const he = {
              getSources() {
                return this.isHTML5
                  ? Array.from(this.media.querySelectorAll("source")).filter(
                      (e) => {
                        const t = e.getAttribute("type");
                        return !!B.empty(t) || Z.mime.call(this, t);
                      }
                    )
                  : [];
              },
              getQualityOptions() {
                return this.config.quality.forced
                  ? this.config.quality.options
                  : he.getSources
                      .call(this)
                      .map((e) => Number(e.getAttribute("size")))
                      .filter(Boolean);
              },
              setup() {
                if (!this.isHTML5) return;
                const e = this;
                (e.options.speed = e.config.speed.options),
                  B.empty(this.config.ratio) || ce.call(e),
                  Object.defineProperty(e.media, "quality", {
                    get() {
                      const t = he.getSources
                        .call(e)
                        .find((t) => t.getAttribute("src") === e.source);
                      return t && Number(t.getAttribute("size"));
                    },
                    set(t) {
                      if (e.quality !== t) {
                        if (
                          e.config.quality.forced &&
                          B.function(e.config.quality.onChange)
                        )
                          e.config.quality.onChange(t);
                        else {
                          const n = he.getSources
                            .call(e)
                            .find((e) => Number(e.getAttribute("size")) === t);
                          if (!n) return;
                          const {
                            currentTime: r,
                            paused: i,
                            preload: o,
                            readyState: s,
                            playbackRate: a,
                          } = e.media;
                          (e.media.src = n.getAttribute("src")),
                            ("none" !== o || s) &&
                              (e.once("loadedmetadata", () => {
                                (e.speed = a),
                                  (e.currentTime = r),
                                  i || ne(e.play());
                              }),
                              e.media.load());
                        }
                        Q.call(e, e.media, "qualitychange", !1, { quality: t });
                      }
                    },
                  });
              },
              cancelRequests() {
                this.isHTML5 &&
                  (R(he.getSources.call(this)),
                  this.media.setAttribute("src", this.config.blankVideo),
                  this.media.load(),
                  this.debug.log("Cancelled network requests"));
              },
            };
            function pe(e, ...t) {
              return B.empty(e)
                ? e
                : e.toString().replace(/{(\d+)}/g, (e, n) => t[n].toString());
            }
            const me = (e = "", t = "", n = "") =>
                e.replace(
                  new RegExp(
                    t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
                    "g"
                  ),
                  n.toString()
                ),
              fe = (e = "") =>
                e
                  .toString()
                  .replace(
                    /\w\S*/g,
                    (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
                  );
            function ge(e) {
              const t = document.createElement("div");
              return t.appendChild(e), t.innerHTML;
            }
            const ve = {
                pip: "PIP",
                airplay: "AirPlay",
                html5: "HTML5",
                vimeo: "Vimeo",
                youtube: "YouTube",
              },
              ye = {
                get(e = "", t = {}) {
                  if (B.empty(e) || B.empty(t)) return "";
                  let n = P(t.i18n, e);
                  if (B.empty(n))
                    return Object.keys(ve).includes(e) ? ve[e] : "";
                  const r = { "{seektime}": t.seekTime, "{title}": t.title };
                  return (
                    Object.entries(r).forEach(([e, t]) => {
                      n = me(n, e, t);
                    }),
                    n
                  );
                },
              };
            class be {
              constructor(t) {
                e(this, "get", (e) => {
                  if (!be.supported || !this.enabled) return null;
                  const t = window.localStorage.getItem(this.key);
                  if (B.empty(t)) return null;
                  const n = JSON.parse(t);
                  return B.string(e) && e.length ? n[e] : n;
                }),
                  e(this, "set", (e) => {
                    if (!be.supported || !this.enabled) return;
                    if (!B.object(e)) return;
                    let t = this.get();
                    B.empty(t) && (t = {}), T(t, e);
                    try {
                      window.localStorage.setItem(this.key, JSON.stringify(t));
                    } catch (e) {}
                  }),
                  (this.enabled = t.config.storage.enabled),
                  (this.key = t.config.storage.key);
              }
              static get supported() {
                try {
                  if (!("localStorage" in window)) return !1;
                  const e = "___test";
                  return (
                    window.localStorage.setItem(e, e),
                    window.localStorage.removeItem(e),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              }
            }
            function Ce(e, t = "text") {
              return new Promise((n, r) => {
                try {
                  const r = new XMLHttpRequest();
                  if (!("withCredentials" in r)) return;
                  r.addEventListener("load", () => {
                    if ("text" === t)
                      try {
                        n(JSON.parse(r.responseText));
                      } catch (e) {
                        n(r.responseText);
                      }
                    else n(r.response);
                  }),
                    r.addEventListener("error", () => {
                      throw new Error(r.status);
                    }),
                    r.open("GET", e, !0),
                    (r.responseType = t),
                    r.send();
                } catch (e) {
                  r(e);
                }
              });
            }
            function De(e, t) {
              if (!B.string(e)) return;
              const n = "cache",
                r = B.string(t);
              let i = !1;
              const o = () => null !== document.getElementById(t),
                s = (e, t) => {
                  (e.innerHTML = t),
                    (r && o()) ||
                      document.body.insertAdjacentElement("afterbegin", e);
                };
              if (!r || !o()) {
                const o = be.supported,
                  a = document.createElement("div");
                if (
                  (a.setAttribute("hidden", ""),
                  r && a.setAttribute("id", t),
                  o)
                ) {
                  const e = window.localStorage.getItem(`${n}-${t}`);
                  if (((i = null !== e), i)) {
                    const t = JSON.parse(e);
                    s(a, t.content);
                  }
                }
                Ce(e)
                  .then((e) => {
                    if (!B.empty(e)) {
                      if (o)
                        try {
                          window.localStorage.setItem(
                            `${n}-${t}`,
                            JSON.stringify({ content: e })
                          );
                        } catch (e) {}
                      s(a, e);
                    }
                  })
                  .catch(() => {});
              }
            }
            const we = (e) => Math.trunc((e / 60 / 60) % 60, 10);
            function Ee(e = 0, t = !1, n = !1) {
              if (!B.number(e)) return Ee(void 0, t, n);
              const r = (e) => `0${e}`.slice(-2);
              let i = we(e);
              const o = ((e) => Math.trunc((e / 60) % 60, 10))(e),
                s = ((e) => Math.trunc(e % 60, 10))(e);
              return (
                (i = t || i > 0 ? `${i}:` : ""),
                `${n && e > 0 ? "-" : ""}${i}${r(o)}:${r(s)}`
              );
            }
            const Ae = {
              getIconUrl() {
                const e = new URL(this.config.iconUrl, window.location),
                  t = window.location.host
                    ? window.location.host
                    : window.top.location.host,
                  n = e.host !== t || (F.isIE && !window.svg4everybody);
                return { url: this.config.iconUrl, cors: n };
              },
              findElements() {
                try {
                  return (
                    (this.elements.controls = q.call(
                      this,
                      this.config.selectors.controls.wrapper
                    )),
                    (this.elements.buttons = {
                      play: W.call(this, this.config.selectors.buttons.play),
                      pause: q.call(this, this.config.selectors.buttons.pause),
                      restart: q.call(
                        this,
                        this.config.selectors.buttons.restart
                      ),
                      rewind: q.call(
                        this,
                        this.config.selectors.buttons.rewind
                      ),
                      fastForward: q.call(
                        this,
                        this.config.selectors.buttons.fastForward
                      ),
                      mute: q.call(this, this.config.selectors.buttons.mute),
                      pip: q.call(this, this.config.selectors.buttons.pip),
                      airplay: q.call(
                        this,
                        this.config.selectors.buttons.airplay
                      ),
                      settings: q.call(
                        this,
                        this.config.selectors.buttons.settings
                      ),
                      captions: q.call(
                        this,
                        this.config.selectors.buttons.captions
                      ),
                      fullscreen: q.call(
                        this,
                        this.config.selectors.buttons.fullscreen
                      ),
                    }),
                    (this.elements.progress = q.call(
                      this,
                      this.config.selectors.progress
                    )),
                    (this.elements.inputs = {
                      seek: q.call(this, this.config.selectors.inputs.seek),
                      volume: q.call(this, this.config.selectors.inputs.volume),
                    }),
                    (this.elements.display = {
                      buffer: q.call(
                        this,
                        this.config.selectors.display.buffer
                      ),
                      currentTime: q.call(
                        this,
                        this.config.selectors.display.currentTime
                      ),
                      duration: q.call(
                        this,
                        this.config.selectors.display.duration
                      ),
                    }),
                    B.element(this.elements.progress) &&
                      (this.elements.display.seekTooltip =
                        this.elements.progress.querySelector(
                          `.${this.config.classNames.tooltip}`
                        )),
                    !0
                  );
                } catch (e) {
                  return (
                    this.debug.warn(
                      "It looks like there is a problem with your custom controls HTML",
                      e
                    ),
                    this.toggleNativeControls(!0),
                    !1
                  );
                }
              },
              createIcon(e, t) {
                const n = "http://www.w3.org/2000/svg",
                  r = Ae.getIconUrl.call(this),
                  i = `${r.cors ? "" : r.url}#${this.config.iconPrefix}`,
                  o = document.createElementNS(n, "svg");
                M(o, T(t, { "aria-hidden": "true", focusable: "false" }));
                const s = document.createElementNS(n, "use"),
                  a = `${i}-${e}`;
                return (
                  "href" in s &&
                    s.setAttributeNS("http://www.w3.org/1999/xlink", "href", a),
                  s.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "xlink:href",
                    a
                  ),
                  o.appendChild(s),
                  o
                );
              },
              createLabel(e, t = {}) {
                const n = ye.get(e, this.config);
                return O(
                  "span",
                  {
                    ...t,
                    class: [t.class, this.config.classNames.hidden]
                      .filter(Boolean)
                      .join(" "),
                  },
                  n
                );
              },
              createBadge(e) {
                if (B.empty(e)) return null;
                const t = O("span", {
                  class: this.config.classNames.menu.value,
                });
                return (
                  t.appendChild(
                    O("span", { class: this.config.classNames.menu.badge }, e)
                  ),
                  t
                );
              },
              createButton(e, t) {
                const n = T({}, t);
                let r = (function (e = "") {
                  let t = e.toString();
                  return (
                    (t = (function (e = "") {
                      let t = e.toString();
                      return (
                        (t = me(t, "-", " ")),
                        (t = me(t, "_", " ")),
                        (t = fe(t)),
                        me(t, " ", "")
                      );
                    })(t)),
                    t.charAt(0).toLowerCase() + t.slice(1)
                  );
                })(e);
                const i = {
                  element: "button",
                  toggle: !1,
                  label: null,
                  icon: null,
                  labelPressed: null,
                  iconPressed: null,
                };
                switch (
                  (["element", "icon", "label"].forEach((e) => {
                    Object.keys(n).includes(e) && ((i[e] = n[e]), delete n[e]);
                  }),
                  "button" !== i.element ||
                    Object.keys(n).includes("type") ||
                    (n.type = "button"),
                  Object.keys(n).includes("class")
                    ? n.class
                        .split(" ")
                        .some((e) => e === this.config.classNames.control) ||
                      T(n, {
                        class: `${n.class} ${this.config.classNames.control}`,
                      })
                    : (n.class = this.config.classNames.control),
                  e)
                ) {
                  case "play":
                    (i.toggle = !0),
                      (i.label = "play"),
                      (i.labelPressed = "pause"),
                      (i.icon = "play"),
                      (i.iconPressed = "pause");
                    break;
                  case "mute":
                    (i.toggle = !0),
                      (i.label = "mute"),
                      (i.labelPressed = "unmute"),
                      (i.icon = "volume"),
                      (i.iconPressed = "muted");
                    break;
                  case "captions":
                    (i.toggle = !0),
                      (i.label = "enableCaptions"),
                      (i.labelPressed = "disableCaptions"),
                      (i.icon = "captions-off"),
                      (i.iconPressed = "captions-on");
                    break;
                  case "fullscreen":
                    (i.toggle = !0),
                      (i.label = "enterFullscreen"),
                      (i.labelPressed = "exitFullscreen"),
                      (i.icon = "enter-fullscreen"),
                      (i.iconPressed = "exit-fullscreen");
                    break;
                  case "play-large":
                    (n.class += ` ${this.config.classNames.control}--overlaid`),
                      (r = "play"),
                      (i.label = "play"),
                      (i.icon = "play");
                    break;
                  default:
                    B.empty(i.label) && (i.label = r),
                      B.empty(i.icon) && (i.icon = e);
                }
                const o = O(i.element);
                return (
                  i.toggle
                    ? (o.appendChild(
                        Ae.createIcon.call(this, i.iconPressed, {
                          class: "icon--pressed",
                        })
                      ),
                      o.appendChild(
                        Ae.createIcon.call(this, i.icon, {
                          class: "icon--not-pressed",
                        })
                      ),
                      o.appendChild(
                        Ae.createLabel.call(this, i.labelPressed, {
                          class: "label--pressed",
                        })
                      ),
                      o.appendChild(
                        Ae.createLabel.call(this, i.label, {
                          class: "label--not-pressed",
                        })
                      ))
                    : (o.appendChild(Ae.createIcon.call(this, i.icon)),
                      o.appendChild(Ae.createLabel.call(this, i.label))),
                  T(n, L(this.config.selectors.buttons[r], n)),
                  M(o, n),
                  "play" === r
                    ? (B.array(this.elements.buttons[r]) ||
                        (this.elements.buttons[r] = []),
                      this.elements.buttons[r].push(o))
                    : (this.elements.buttons[r] = o),
                  o
                );
              },
              createRange(e, t) {
                const n = O(
                  "input",
                  T(
                    L(this.config.selectors.inputs[e]),
                    {
                      type: "range",
                      min: 0,
                      max: 100,
                      step: 0.01,
                      value: 0,
                      autocomplete: "off",
                      role: "slider",
                      "aria-label": ye.get(e, this.config),
                      "aria-valuemin": 0,
                      "aria-valuemax": 100,
                      "aria-valuenow": 0,
                    },
                    t
                  )
                );
                return (
                  (this.elements.inputs[e] = n),
                  Ae.updateRangeFill.call(this, n),
                  f.setup(n),
                  n
                );
              },
              createProgress(e, t) {
                const n = O(
                  "progress",
                  T(
                    L(this.config.selectors.display[e]),
                    {
                      min: 0,
                      max: 100,
                      value: 0,
                      role: "progressbar",
                      "aria-hidden": !0,
                    },
                    t
                  )
                );
                if ("volume" !== e) {
                  n.appendChild(O("span", null, "0"));
                  const t = { played: "played", buffer: "buffered" }[e],
                    r = t ? ye.get(t, this.config) : "";
                  n.innerText = `% ${r.toLowerCase()}`;
                }
                return (this.elements.display[e] = n), n;
              },
              createTime(e, t) {
                const n = L(this.config.selectors.display[e], t),
                  r = O(
                    "div",
                    T(n, {
                      class: `${n.class ? n.class : ""} ${
                        this.config.classNames.display.time
                      } `.trim(),
                      "aria-label": ye.get(e, this.config),
                      role: "timer",
                    }),
                    "00:00"
                  );
                return (this.elements.display[e] = r), r;
              },
              bindMenuItemShortcuts(e, t) {
                X.call(
                  this,
                  e,
                  "keydown keyup",
                  (n) => {
                    if (
                      ![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(
                        n.key
                      )
                    )
                      return;
                    if (
                      (n.preventDefault(),
                      n.stopPropagation(),
                      "keydown" === n.type)
                    )
                      return;
                    const r = $(e, '[role="menuitemradio"]');
                    if (!r && [" ", "ArrowRight"].includes(n.key))
                      Ae.showMenuPanel.call(this, t, !0);
                    else {
                      let t;
                      " " !== n.key &&
                        ("ArrowDown" === n.key || (r && "ArrowRight" === n.key)
                          ? ((t = e.nextElementSibling),
                            B.element(t) ||
                              (t = e.parentNode.firstElementChild))
                          : ((t = e.previousElementSibling),
                            B.element(t) ||
                              (t = e.parentNode.lastElementChild)),
                        U.call(this, t, !0));
                    }
                  },
                  !1
                ),
                  X.call(this, e, "keyup", (e) => {
                    "Return" === e.key &&
                      Ae.focusFirstMenuItem.call(this, null, !0);
                  });
              },
              createMenuItem({
                value: e,
                list: t,
                type: n,
                title: r,
                badge: i = null,
                checked: o = !1,
              }) {
                const s = L(this.config.selectors.inputs[n]),
                  a = O(
                    "button",
                    T(s, {
                      type: "button",
                      role: "menuitemradio",
                      class: `${this.config.classNames.control} ${
                        s.class ? s.class : ""
                      }`.trim(),
                      "aria-checked": o,
                      value: e,
                    })
                  ),
                  u = O("span");
                (u.innerHTML = r),
                  B.element(i) && u.appendChild(i),
                  a.appendChild(u),
                  Object.defineProperty(a, "checked", {
                    enumerable: !0,
                    get: () => "true" === a.getAttribute("aria-checked"),
                    set(e) {
                      e &&
                        Array.from(a.parentNode.children)
                          .filter((e) => $(e, '[role="menuitemradio"]'))
                          .forEach((e) =>
                            e.setAttribute("aria-checked", "false")
                          ),
                        a.setAttribute("aria-checked", e ? "true" : "false");
                    },
                  }),
                  this.listeners.bind(
                    a,
                    "click keyup",
                    (t) => {
                      if (!B.keyboardEvent(t) || " " === t.key) {
                        switch (
                          (t.preventDefault(),
                          t.stopPropagation(),
                          (a.checked = !0),
                          n)
                        ) {
                          case "language":
                            this.currentTrack = Number(e);
                            break;
                          case "quality":
                            this.quality = e;
                            break;
                          case "speed":
                            this.speed = parseFloat(e);
                        }
                        Ae.showMenuPanel.call(this, "home", B.keyboardEvent(t));
                      }
                    },
                    n,
                    !1
                  ),
                  Ae.bindMenuItemShortcuts.call(this, a, n),
                  t.appendChild(a);
              },
              formatTime(e = 0, t = !1) {
                return B.number(e) ? Ee(e, we(this.duration) > 0, t) : e;
              },
              updateTimeDisplay(e = null, t = 0, n = !1) {
                B.element(e) &&
                  B.number(t) &&
                  (e.innerText = Ae.formatTime(t, n));
              },
              updateVolume() {
                this.supported.ui &&
                  (B.element(this.elements.inputs.volume) &&
                    Ae.setRange.call(
                      this,
                      this.elements.inputs.volume,
                      this.muted ? 0 : this.volume
                    ),
                  B.element(this.elements.buttons.mute) &&
                    (this.elements.buttons.mute.pressed =
                      this.muted || 0 === this.volume));
              },
              setRange(e, t = 0) {
                B.element(e) &&
                  ((e.value = t), Ae.updateRangeFill.call(this, e));
              },
              updateProgress(e) {
                if (!this.supported.ui || !B.event(e)) return;
                let t = 0;
                const n = (e, t) => {
                  const n = B.number(t) ? t : 0,
                    r = B.element(e) ? e : this.elements.display.buffer;
                  if (B.element(r)) {
                    r.value = n;
                    const e = r.getElementsByTagName("span")[0];
                    B.element(e) && (e.childNodes[0].nodeValue = n);
                  }
                };
                if (e)
                  switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                      (r = this.currentTime),
                        (i = this.duration),
                        (t =
                          0 === r ||
                          0 === i ||
                          Number.isNaN(r) ||
                          Number.isNaN(i)
                            ? 0
                            : ((r / i) * 100).toFixed(2)),
                        "timeupdate" === e.type &&
                          Ae.setRange.call(this, this.elements.inputs.seek, t);
                      break;
                    case "playing":
                    case "progress":
                      n(this.elements.display.buffer, 100 * this.buffered);
                  }
                var r, i;
              },
              updateRangeFill(e) {
                const t = B.event(e) ? e.target : e;
                if (B.element(t) && "range" === t.getAttribute("type")) {
                  if ($(t, this.config.selectors.inputs.seek)) {
                    t.setAttribute("aria-valuenow", this.currentTime);
                    const e = Ae.formatTime(this.currentTime),
                      n = Ae.formatTime(this.duration),
                      r = ye.get("seekLabel", this.config);
                    t.setAttribute(
                      "aria-valuetext",
                      r.replace("{currentTime}", e).replace("{duration}", n)
                    );
                  } else if ($(t, this.config.selectors.inputs.volume)) {
                    const e = 100 * t.value;
                    t.setAttribute("aria-valuenow", e),
                      t.setAttribute("aria-valuetext", `${e.toFixed(1)}%`);
                  } else t.setAttribute("aria-valuenow", t.value);
                  (F.isWebKit || F.isIPadOS) &&
                    t.style.setProperty(
                      "--value",
                      (t.value / t.max) * 100 + "%"
                    );
                }
              },
              updateSeekTooltip(e) {
                var t, n;
                if (
                  !this.config.tooltips.seek ||
                  !B.element(this.elements.inputs.seek) ||
                  !B.element(this.elements.display.seekTooltip) ||
                  0 === this.duration
                )
                  return;
                const r = this.elements.display.seekTooltip,
                  i = `${this.config.classNames.tooltip}--visible`,
                  o = (e) => V(r, i, e);
                if (this.touch) return void o(!1);
                let s = 0;
                const a = this.elements.progress.getBoundingClientRect();
                if (B.event(e)) s = (100 / a.width) * (e.pageX - a.left);
                else {
                  if (!z(r, i)) return;
                  s = parseFloat(r.style.left, 10);
                }
                s < 0 ? (s = 0) : s > 100 && (s = 100);
                const u = (this.duration / 100) * s;
                r.innerText = Ae.formatTime(u);
                const l =
                  null === (t = this.config.markers) ||
                  void 0 === t ||
                  null === (n = t.points) ||
                  void 0 === n
                    ? void 0
                    : n.find(({ time: e }) => e === Math.round(u));
                l && r.insertAdjacentHTML("afterbegin", `${l.label}<br>`),
                  (r.style.left = `${s}%`),
                  B.event(e) &&
                    ["mouseenter", "mouseleave"].includes(e.type) &&
                    o("mouseenter" === e.type);
              },
              timeUpdate(e) {
                const t =
                  !B.element(this.elements.display.duration) &&
                  this.config.invertTime;
                Ae.updateTimeDisplay.call(
                  this,
                  this.elements.display.currentTime,
                  t ? this.duration - this.currentTime : this.currentTime,
                  t
                ),
                  (e && "timeupdate" === e.type && this.media.seeking) ||
                    Ae.updateProgress.call(this, e);
              },
              durationUpdate() {
                if (
                  !this.supported.ui ||
                  (!this.config.invertTime && this.currentTime)
                )
                  return;
                if (this.duration >= 2 ** 32)
                  return (
                    I(this.elements.display.currentTime, !0),
                    void I(this.elements.progress, !0)
                  );
                B.element(this.elements.inputs.seek) &&
                  this.elements.inputs.seek.setAttribute(
                    "aria-valuemax",
                    this.duration
                  );
                const e = B.element(this.elements.display.duration);
                !e &&
                  this.config.displayDuration &&
                  this.paused &&
                  Ae.updateTimeDisplay.call(
                    this,
                    this.elements.display.currentTime,
                    this.duration
                  ),
                  e &&
                    Ae.updateTimeDisplay.call(
                      this,
                      this.elements.display.duration,
                      this.duration
                    ),
                  this.config.markers.enabled && Ae.setMarkers.call(this),
                  Ae.updateSeekTooltip.call(this);
              },
              toggleMenuButton(e, t) {
                I(this.elements.settings.buttons[e], !t);
              },
              updateSetting(e, t, n) {
                const r = this.elements.settings.panels[e];
                let i = null,
                  o = t;
                if ("captions" === e) i = this.currentTrack;
                else {
                  if (
                    ((i = B.empty(n) ? this[e] : n),
                    B.empty(i) && (i = this.config[e].default),
                    !B.empty(this.options[e]) && !this.options[e].includes(i))
                  )
                    return void this.debug.warn(
                      `Unsupported value of '${i}' for ${e}`
                    );
                  if (!this.config[e].options.includes(i))
                    return void this.debug.warn(
                      `Disabled value of '${i}' for ${e}`
                    );
                }
                if (
                  (B.element(o) || (o = r && r.querySelector('[role="menu"]')),
                  !B.element(o))
                )
                  return;
                this.elements.settings.buttons[e].querySelector(
                  `.${this.config.classNames.menu.value}`
                ).innerHTML = Ae.getLabel.call(this, e, i);
                const s = o && o.querySelector(`[value="${i}"]`);
                B.element(s) && (s.checked = !0);
              },
              getLabel(e, t) {
                switch (e) {
                  case "speed":
                    return 1 === t
                      ? ye.get("normal", this.config)
                      : `${t}&times;`;
                  case "quality":
                    if (B.number(t)) {
                      const e = ye.get(`qualityLabel.${t}`, this.config);
                      return e.length ? e : `${t}p`;
                    }
                    return fe(t);
                  case "captions":
                    return ke.getLabel.call(this);
                  default:
                    return null;
                }
              },
              setQualityMenu(e) {
                if (!B.element(this.elements.settings.panels.quality)) return;
                const t = "quality",
                  n =
                    this.elements.settings.panels.quality.querySelector(
                      '[role="menu"]'
                    );
                B.array(e) &&
                  (this.options.quality = re(e).filter((e) =>
                    this.config.quality.options.includes(e)
                  ));
                const r =
                  !B.empty(this.options.quality) &&
                  this.options.quality.length > 1;
                if (
                  (Ae.toggleMenuButton.call(this, t, r),
                  N(n),
                  Ae.checkMenu.call(this),
                  !r)
                )
                  return;
                const i = (e) => {
                  const t = ye.get(`qualityBadge.${e}`, this.config);
                  return t.length ? Ae.createBadge.call(this, t) : null;
                };
                this.options.quality
                  .sort((e, t) => {
                    const n = this.config.quality.options;
                    return n.indexOf(e) > n.indexOf(t) ? 1 : -1;
                  })
                  .forEach((e) => {
                    Ae.createMenuItem.call(this, {
                      value: e,
                      list: n,
                      type: t,
                      title: Ae.getLabel.call(this, "quality", e),
                      badge: i(e),
                    });
                  }),
                  Ae.updateSetting.call(this, t, n);
              },
              setCaptionsMenu() {
                if (!B.element(this.elements.settings.panels.captions)) return;
                const e = "captions",
                  t =
                    this.elements.settings.panels.captions.querySelector(
                      '[role="menu"]'
                    ),
                  n = ke.getTracks.call(this),
                  r = Boolean(n.length);
                if (
                  (Ae.toggleMenuButton.call(this, e, r),
                  N(t),
                  Ae.checkMenu.call(this),
                  !r)
                )
                  return;
                const i = n.map((e, n) => ({
                  value: n,
                  checked: this.captions.toggled && this.currentTrack === n,
                  title: ke.getLabel.call(this, e),
                  badge:
                    e.language &&
                    Ae.createBadge.call(this, e.language.toUpperCase()),
                  list: t,
                  type: "language",
                }));
                i.unshift({
                  value: -1,
                  checked: !this.captions.toggled,
                  title: ye.get("disabled", this.config),
                  list: t,
                  type: "language",
                }),
                  i.forEach(Ae.createMenuItem.bind(this)),
                  Ae.updateSetting.call(this, e, t);
              },
              setSpeedMenu() {
                if (!B.element(this.elements.settings.panels.speed)) return;
                const e = "speed",
                  t =
                    this.elements.settings.panels.speed.querySelector(
                      '[role="menu"]'
                    );
                this.options.speed = this.options.speed.filter(
                  (e) => e >= this.minimumSpeed && e <= this.maximumSpeed
                );
                const n =
                  !B.empty(this.options.speed) && this.options.speed.length > 1;
                Ae.toggleMenuButton.call(this, e, n),
                  N(t),
                  Ae.checkMenu.call(this),
                  n &&
                    (this.options.speed.forEach((n) => {
                      Ae.createMenuItem.call(this, {
                        value: n,
                        list: t,
                        type: e,
                        title: Ae.getLabel.call(this, "speed", n),
                      });
                    }),
                    Ae.updateSetting.call(this, e, t));
              },
              checkMenu() {
                const { buttons: e } = this.elements.settings,
                  t = !B.empty(e) && Object.values(e).some((e) => !e.hidden);
                I(this.elements.settings.menu, !t);
              },
              focusFirstMenuItem(e, t = !1) {
                if (this.elements.settings.popup.hidden) return;
                let n = e;
                B.element(n) ||
                  (n = Object.values(this.elements.settings.panels).find(
                    (e) => !e.hidden
                  ));
                const r = n.querySelector('[role^="menuitem"]');
                U.call(this, r, t);
              },
              toggleMenu(e) {
                const { popup: t } = this.elements.settings,
                  n = this.elements.buttons.settings;
                if (!B.element(t) || !B.element(n)) return;
                const { hidden: r } = t;
                let i = r;
                if (B.boolean(e)) i = e;
                else if (B.keyboardEvent(e) && "Escape" === e.key) i = !1;
                else if (B.event(e)) {
                  const r = B.function(e.composedPath)
                      ? e.composedPath()[0]
                      : e.target,
                    o = t.contains(r);
                  if (o || (!o && e.target !== n && i)) return;
                }
                n.setAttribute("aria-expanded", i),
                  I(t, !i),
                  V(
                    this.elements.container,
                    this.config.classNames.menu.open,
                    i
                  ),
                  i && B.keyboardEvent(e)
                    ? Ae.focusFirstMenuItem.call(this, null, !0)
                    : i || r || U.call(this, n, B.keyboardEvent(e));
              },
              getMenuSize(e) {
                const t = e.cloneNode(!0);
                (t.style.position = "absolute"),
                  (t.style.opacity = 0),
                  t.removeAttribute("hidden"),
                  e.parentNode.appendChild(t);
                const n = t.scrollWidth,
                  r = t.scrollHeight;
                return R(t), { width: n, height: r };
              },
              showMenuPanel(e = "", t = !1) {
                const n = this.elements.container.querySelector(
                  `#plyr-settings-${this.id}-${e}`
                );
                if (!B.element(n)) return;
                const r = n.parentNode,
                  i = Array.from(r.children).find((e) => !e.hidden);
                if (Z.transitions && !Z.reducedMotion) {
                  (r.style.width = `${i.scrollWidth}px`),
                    (r.style.height = `${i.scrollHeight}px`);
                  const e = Ae.getMenuSize.call(this, n),
                    t = (e) => {
                      e.target === r &&
                        ["width", "height"].includes(e.propertyName) &&
                        ((r.style.width = ""),
                        (r.style.height = ""),
                        K.call(this, r, x, t));
                    };
                  X.call(this, r, x, t),
                    (r.style.width = `${e.width}px`),
                    (r.style.height = `${e.height}px`);
                }
                I(i, !0), I(n, !1), Ae.focusFirstMenuItem.call(this, n, t);
              },
              setDownloadUrl() {
                const e = this.elements.buttons.download;
                B.element(e) && e.setAttribute("href", this.download);
              },
              create(e) {
                const {
                  bindMenuItemShortcuts: t,
                  createButton: n,
                  createProgress: r,
                  createRange: i,
                  createTime: o,
                  setQualityMenu: s,
                  setSpeedMenu: a,
                  showMenuPanel: u,
                } = Ae;
                (this.elements.controls = null),
                  B.array(this.config.controls) &&
                    this.config.controls.includes("play-large") &&
                    this.elements.container.appendChild(
                      n.call(this, "play-large")
                    );
                const l = O("div", L(this.config.selectors.controls.wrapper));
                this.elements.controls = l;
                const c = { class: "plyr__controls__item" };
                return (
                  re(
                    B.array(this.config.controls) ? this.config.controls : []
                  ).forEach((s) => {
                    if (
                      ("restart" === s &&
                        l.appendChild(n.call(this, "restart", c)),
                      "rewind" === s &&
                        l.appendChild(n.call(this, "rewind", c)),
                      "play" === s && l.appendChild(n.call(this, "play", c)),
                      "fast-forward" === s &&
                        l.appendChild(n.call(this, "fast-forward", c)),
                      "progress" === s)
                    ) {
                      const t = O("div", {
                          class: `${c.class} plyr__progress__container`,
                        }),
                        n = O("div", L(this.config.selectors.progress));
                      if (
                        (n.appendChild(
                          i.call(this, "seek", { id: `plyr-seek-${e.id}` })
                        ),
                        n.appendChild(r.call(this, "buffer")),
                        this.config.tooltips.seek)
                      ) {
                        const e = O(
                          "span",
                          { class: this.config.classNames.tooltip },
                          "00:00"
                        );
                        n.appendChild(e),
                          (this.elements.display.seekTooltip = e);
                      }
                      (this.elements.progress = n),
                        t.appendChild(this.elements.progress),
                        l.appendChild(t);
                    }
                    if (
                      ("current-time" === s &&
                        l.appendChild(o.call(this, "currentTime", c)),
                      "duration" === s &&
                        l.appendChild(o.call(this, "duration", c)),
                      "mute" === s || "volume" === s)
                    ) {
                      let { volume: t } = this.elements;
                      if (
                        ((B.element(t) && l.contains(t)) ||
                          ((t = O(
                            "div",
                            T({}, c, {
                              class: `${c.class} plyr__volume`.trim(),
                            })
                          )),
                          (this.elements.volume = t),
                          l.appendChild(t)),
                        "mute" === s && t.appendChild(n.call(this, "mute")),
                        "volume" === s && !F.isIos && !F.isIPadOS)
                      ) {
                        const n = {
                          max: 1,
                          step: 0.05,
                          value: this.config.volume,
                        };
                        t.appendChild(
                          i.call(
                            this,
                            "volume",
                            T(n, { id: `plyr-volume-${e.id}` })
                          )
                        );
                      }
                    }
                    if (
                      ("captions" === s &&
                        l.appendChild(n.call(this, "captions", c)),
                      "settings" === s && !B.empty(this.config.settings))
                    ) {
                      const r = O(
                        "div",
                        T({}, c, {
                          class: `${c.class} plyr__menu`.trim(),
                          hidden: "",
                        })
                      );
                      r.appendChild(
                        n.call(this, "settings", {
                          "aria-haspopup": !0,
                          "aria-controls": `plyr-settings-${e.id}`,
                          "aria-expanded": !1,
                        })
                      );
                      const i = O("div", {
                          class: "plyr__menu__container",
                          id: `plyr-settings-${e.id}`,
                          hidden: "",
                        }),
                        o = O("div"),
                        s = O("div", { id: `plyr-settings-${e.id}-home` }),
                        a = O("div", { role: "menu" });
                      s.appendChild(a),
                        o.appendChild(s),
                        (this.elements.settings.panels.home = s),
                        this.config.settings.forEach((n) => {
                          const r = O(
                            "button",
                            T(L(this.config.selectors.buttons.settings), {
                              type: "button",
                              class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                              role: "menuitem",
                              "aria-haspopup": !0,
                              hidden: "",
                            })
                          );
                          t.call(this, r, n),
                            X.call(this, r, "click", () => {
                              u.call(this, n, !1);
                            });
                          const i = O("span", null, ye.get(n, this.config)),
                            s = O("span", {
                              class: this.config.classNames.menu.value,
                            });
                          (s.innerHTML = e[n]),
                            i.appendChild(s),
                            r.appendChild(i),
                            a.appendChild(r);
                          const l = O("div", {
                              id: `plyr-settings-${e.id}-${n}`,
                              hidden: "",
                            }),
                            c = O("button", {
                              type: "button",
                              class: `${this.config.classNames.control} ${this.config.classNames.control}--back`,
                            });
                          c.appendChild(
                            O(
                              "span",
                              { "aria-hidden": !0 },
                              ye.get(n, this.config)
                            )
                          ),
                            c.appendChild(
                              O(
                                "span",
                                { class: this.config.classNames.hidden },
                                ye.get("menuBack", this.config)
                              )
                            ),
                            X.call(
                              this,
                              l,
                              "keydown",
                              (e) => {
                                "ArrowLeft" === e.key &&
                                  (e.preventDefault(),
                                  e.stopPropagation(),
                                  u.call(this, "home", !0));
                              },
                              !1
                            ),
                            X.call(this, c, "click", () => {
                              u.call(this, "home", !1);
                            }),
                            l.appendChild(c),
                            l.appendChild(O("div", { role: "menu" })),
                            o.appendChild(l),
                            (this.elements.settings.buttons[n] = r),
                            (this.elements.settings.panels[n] = l);
                        }),
                        i.appendChild(o),
                        r.appendChild(i),
                        l.appendChild(r),
                        (this.elements.settings.popup = i),
                        (this.elements.settings.menu = r);
                    }
                    if (
                      ("pip" === s &&
                        Z.pip &&
                        l.appendChild(n.call(this, "pip", c)),
                      "airplay" === s &&
                        Z.airplay &&
                        l.appendChild(n.call(this, "airplay", c)),
                      "download" === s)
                    ) {
                      const e = T({}, c, {
                        element: "a",
                        href: this.download,
                        target: "_blank",
                      });
                      this.isHTML5 && (e.download = "");
                      const { download: t } = this.config.urls;
                      !B.url(t) &&
                        this.isEmbed &&
                        T(e, {
                          icon: `logo-${this.provider}`,
                          label: this.provider,
                        }),
                        l.appendChild(n.call(this, "download", e));
                    }
                    "fullscreen" === s &&
                      l.appendChild(n.call(this, "fullscreen", c));
                  }),
                  this.isHTML5 && s.call(this, he.getQualityOptions.call(this)),
                  a.call(this),
                  l
                );
              },
              inject() {
                if (this.config.loadSprite) {
                  const e = Ae.getIconUrl.call(this);
                  e.cors && De(e.url, "sprite-plyr");
                }
                this.id = Math.floor(1e4 * Math.random());
                let e = null;
                this.elements.controls = null;
                const t = {
                  id: this.id,
                  seektime: this.config.seekTime,
                  title: this.config.title,
                };
                let n,
                  r = !0;
                if (
                  (B.function(this.config.controls) &&
                    (this.config.controls = this.config.controls.call(this, t)),
                  this.config.controls || (this.config.controls = []),
                  B.element(this.config.controls) ||
                  B.string(this.config.controls)
                    ? (e = this.config.controls)
                    : ((e = Ae.create.call(this, {
                        id: this.id,
                        seektime: this.config.seekTime,
                        speed: this.speed,
                        quality: this.quality,
                        captions: ke.getLabel.call(this),
                      })),
                      (r = !1)),
                  r &&
                    B.string(this.config.controls) &&
                    (e = ((e) => {
                      let n = e;
                      return (
                        Object.entries(t).forEach(([e, t]) => {
                          n = me(n, `{${e}}`, t);
                        }),
                        n
                      );
                    })(e)),
                  B.string(this.config.selectors.controls.container) &&
                    (n = document.querySelector(
                      this.config.selectors.controls.container
                    )),
                  B.element(n) || (n = this.elements.container),
                  n[
                    B.element(e)
                      ? "insertAdjacentElement"
                      : "insertAdjacentHTML"
                  ]("afterbegin", e),
                  B.element(this.elements.controls) ||
                    Ae.findElements.call(this),
                  !B.empty(this.elements.buttons))
                ) {
                  const e = (e) => {
                    const t = this.config.classNames.controlPressed;
                    e.setAttribute("aria-pressed", "false"),
                      Object.defineProperty(e, "pressed", {
                        configurable: !0,
                        enumerable: !0,
                        get: () => z(e, t),
                        set(n = !1) {
                          V(e, t, n),
                            e.setAttribute(
                              "aria-pressed",
                              n ? "true" : "false"
                            );
                        },
                      });
                  };
                  Object.values(this.elements.buttons)
                    .filter(Boolean)
                    .forEach((t) => {
                      B.array(t) || B.nodeList(t)
                        ? Array.from(t).filter(Boolean).forEach(e)
                        : e(t);
                    });
                }
                if ((F.isEdge && k(n), this.config.tooltips.controls)) {
                  const { classNames: e, selectors: t } = this.config,
                    n = `${t.controls.wrapper} ${t.labels} .${e.hidden}`,
                    r = W.call(this, n);
                  Array.from(r).forEach((e) => {
                    V(e, this.config.classNames.hidden, !1),
                      V(e, this.config.classNames.tooltip, !0);
                  });
                }
              },
              setMediaMetadata() {
                try {
                  "mediaSession" in navigator &&
                    (navigator.mediaSession.metadata = new window.MediaMetadata(
                      {
                        title: this.config.mediaMetadata.title,
                        artist: this.config.mediaMetadata.artist,
                        album: this.config.mediaMetadata.album,
                        artwork: this.config.mediaMetadata.artwork,
                      }
                    ));
                } catch (e) {}
              },
              setMarkers() {
                var e, t;
                if (!this.duration || this.elements.markers) return;
                const n =
                  null === (e = this.config.markers) ||
                  void 0 === e ||
                  null === (t = e.points) ||
                  void 0 === t
                    ? void 0
                    : t.filter(({ time: e }) => e > 0 && e < this.duration);
                if (null == n || !n.length) return;
                const r = document.createDocumentFragment(),
                  i = document.createDocumentFragment();
                let o = null;
                const s = `${this.config.classNames.tooltip}--visible`,
                  a = (e) => V(o, s, e);
                n.forEach((e) => {
                  const t = O(
                      "span",
                      { class: this.config.classNames.marker },
                      ""
                    ),
                    n = (e.time / this.duration) * 100 + "%";
                  o &&
                    (t.addEventListener("mouseenter", () => {
                      e.label ||
                        ((o.style.left = n), (o.innerHTML = e.label), a(!0));
                    }),
                    t.addEventListener("mouseleave", () => {
                      a(!1);
                    })),
                    t.addEventListener("click", () => {
                      this.currentTime = e.time;
                    }),
                    (t.style.left = n),
                    i.appendChild(t);
                }),
                  r.appendChild(i),
                  this.config.tooltips.seek ||
                    ((o = O(
                      "span",
                      { class: this.config.classNames.tooltip },
                      ""
                    )),
                    r.appendChild(o)),
                  (this.elements.markers = { points: i, tip: o }),
                  this.elements.progress.appendChild(r);
              },
            };
            function Be(e, t = !0) {
              let n = e;
              if (t) {
                const e = document.createElement("a");
                (e.href = n), (n = e.href);
              }
              try {
                return new URL(n);
              } catch (e) {
                return null;
              }
            }
            function xe(e) {
              const t = new URLSearchParams();
              return (
                B.object(e) &&
                  Object.entries(e).forEach(([e, n]) => {
                    t.set(e, n);
                  }),
                t
              );
            }
            const ke = {
                setup() {
                  if (!this.supported.ui) return;
                  if (
                    !this.isVideo ||
                    this.isYouTube ||
                    (this.isHTML5 && !Z.textTracks)
                  )
                    return void (
                      B.array(this.config.controls) &&
                      this.config.controls.includes("settings") &&
                      this.config.settings.includes("captions") &&
                      Ae.setCaptionsMenu.call(this)
                    );
                  var e, t;
                  if (
                    (B.element(this.elements.captions) ||
                      ((this.elements.captions = O(
                        "div",
                        L(this.config.selectors.captions)
                      )),
                      this.elements.captions.setAttribute("dir", "auto"),
                      (e = this.elements.captions),
                      (t = this.elements.wrapper),
                      B.element(e) &&
                        B.element(t) &&
                        t.parentNode.insertBefore(e, t.nextSibling)),
                    F.isIE && window.URL)
                  ) {
                    const e = this.media.querySelectorAll("track");
                    Array.from(e).forEach((e) => {
                      const t = e.getAttribute("src"),
                        n = Be(t);
                      null !== n &&
                        n.hostname !== window.location.href.hostname &&
                        ["http:", "https:"].includes(n.protocol) &&
                        Ce(t, "blob")
                          .then((t) => {
                            e.setAttribute(
                              "src",
                              window.URL.createObjectURL(t)
                            );
                          })
                          .catch(() => {
                            R(e);
                          });
                    });
                  }
                  const n = re(
                    (
                      navigator.languages || [
                        navigator.language || navigator.userLanguage || "en",
                      ]
                    ).map((e) => e.split("-")[0])
                  );
                  let r = (
                    this.storage.get("language") ||
                    this.config.captions.language ||
                    "auto"
                  ).toLowerCase();
                  "auto" === r && ([r] = n);
                  let i = this.storage.get("captions");
                  if (
                    (B.boolean(i) || ({ active: i } = this.config.captions),
                    Object.assign(this.captions, {
                      toggled: !1,
                      active: i,
                      language: r,
                      languages: n,
                    }),
                    this.isHTML5)
                  ) {
                    const e = this.config.captions.update
                      ? "addtrack removetrack"
                      : "removetrack";
                    X.call(
                      this,
                      this.media.textTracks,
                      e,
                      ke.update.bind(this)
                    );
                  }
                  setTimeout(ke.update.bind(this), 0);
                },
                update() {
                  const e = ke.getTracks.call(this, !0),
                    {
                      active: t,
                      language: n,
                      meta: r,
                      currentTrackNode: i,
                    } = this.captions,
                    o = Boolean(e.find((e) => e.language === n));
                  this.isHTML5 &&
                    this.isVideo &&
                    e
                      .filter((e) => !r.get(e))
                      .forEach((e) => {
                        this.debug.log("Track added", e),
                          r.set(e, { default: "showing" === e.mode }),
                          "showing" === e.mode && (e.mode = "hidden"),
                          X.call(this, e, "cuechange", () =>
                            ke.updateCues.call(this)
                          );
                      }),
                    ((o && this.language !== n) || !e.includes(i)) &&
                      (ke.setLanguage.call(this, n),
                      ke.toggle.call(this, t && o)),
                    this.elements &&
                      V(
                        this.elements.container,
                        this.config.classNames.captions.enabled,
                        !B.empty(e)
                      ),
                    B.array(this.config.controls) &&
                      this.config.controls.includes("settings") &&
                      this.config.settings.includes("captions") &&
                      Ae.setCaptionsMenu.call(this);
                },
                toggle(e, t = !0) {
                  if (!this.supported.ui) return;
                  const { toggled: n } = this.captions,
                    r = this.config.classNames.captions.active,
                    i = B.nullOrUndefined(e) ? !n : e;
                  if (i !== n) {
                    if (
                      (t ||
                        ((this.captions.active = i),
                        this.storage.set({ captions: i })),
                      !this.language && i && !t)
                    ) {
                      const e = ke.getTracks.call(this),
                        t = ke.findTrack.call(
                          this,
                          [this.captions.language, ...this.captions.languages],
                          !0
                        );
                      return (
                        (this.captions.language = t.language),
                        void ke.set.call(this, e.indexOf(t))
                      );
                    }
                    this.elements.buttons.captions &&
                      (this.elements.buttons.captions.pressed = i),
                      V(this.elements.container, r, i),
                      (this.captions.toggled = i),
                      Ae.updateSetting.call(this, "captions"),
                      Q.call(
                        this,
                        this.media,
                        i ? "captionsenabled" : "captionsdisabled"
                      );
                  }
                  setTimeout(() => {
                    i &&
                      this.captions.toggled &&
                      (this.captions.currentTrackNode.mode = "hidden");
                  });
                },
                set(e, t = !0) {
                  const n = ke.getTracks.call(this);
                  if (-1 !== e)
                    if (B.number(e))
                      if (e in n) {
                        if (this.captions.currentTrack !== e) {
                          this.captions.currentTrack = e;
                          const r = n[e],
                            { language: i } = r || {};
                          (this.captions.currentTrackNode = r),
                            Ae.updateSetting.call(this, "captions"),
                            t ||
                              ((this.captions.language = i),
                              this.storage.set({ language: i })),
                            this.isVimeo && this.embed.enableTextTrack(i),
                            Q.call(this, this.media, "languagechange");
                        }
                        ke.toggle.call(this, !0, t),
                          this.isHTML5 &&
                            this.isVideo &&
                            ke.updateCues.call(this);
                      } else this.debug.warn("Track not found", e);
                    else this.debug.warn("Invalid caption argument", e);
                  else ke.toggle.call(this, !1, t);
                },
                setLanguage(e, t = !0) {
                  if (!B.string(e))
                    return void this.debug.warn("Invalid language argument", e);
                  const n = e.toLowerCase();
                  this.captions.language = n;
                  const r = ke.getTracks.call(this),
                    i = ke.findTrack.call(this, [n]);
                  ke.set.call(this, r.indexOf(i), t);
                },
                getTracks(e = !1) {
                  return Array.from((this.media || {}).textTracks || [])
                    .filter(
                      (t) => !this.isHTML5 || e || this.captions.meta.has(t)
                    )
                    .filter((e) => ["captions", "subtitles"].includes(e.kind));
                },
                findTrack(e, t = !1) {
                  const n = ke.getTracks.call(this),
                    r = (e) =>
                      Number((this.captions.meta.get(e) || {}).default),
                    i = Array.from(n).sort((e, t) => r(t) - r(e));
                  let o;
                  return (
                    e.every((e) => ((o = i.find((t) => t.language === e)), !o)),
                    o || (t ? i[0] : void 0)
                  );
                },
                getCurrentTrack() {
                  return ke.getTracks.call(this)[this.currentTrack];
                },
                getLabel(e) {
                  let t = e;
                  return (
                    !B.track(t) &&
                      Z.textTracks &&
                      this.captions.toggled &&
                      (t = ke.getCurrentTrack.call(this)),
                    B.track(t)
                      ? B.empty(t.label)
                        ? B.empty(t.language)
                          ? ye.get("enabled", this.config)
                          : e.language.toUpperCase()
                        : t.label
                      : ye.get("disabled", this.config)
                  );
                },
                updateCues(e) {
                  if (!this.supported.ui) return;
                  if (!B.element(this.elements.captions))
                    return void this.debug.warn(
                      "No captions element to render to"
                    );
                  if (!B.nullOrUndefined(e) && !Array.isArray(e))
                    return void this.debug.warn("updateCues: Invalid input", e);
                  let t = e;
                  if (!t) {
                    const e = ke.getCurrentTrack.call(this);
                    t = Array.from((e || {}).activeCues || [])
                      .map((e) => e.getCueAsHTML())
                      .map(ge);
                  }
                  const n = t.map((e) => e.trim()).join("\n");
                  if (n !== this.elements.captions.innerHTML) {
                    N(this.elements.captions);
                    const e = O("span", L(this.config.selectors.caption));
                    (e.innerHTML = n),
                      this.elements.captions.appendChild(e),
                      Q.call(this, this.media, "cuechange");
                  }
                },
              },
              Fe = {
                enabled: !0,
                title: "",
                debug: !1,
                autoplay: !1,
                autopause: !0,
                playsinline: !0,
                seekTime: 10,
                volume: 1,
                muted: !1,
                duration: null,
                displayDuration: !0,
                invertTime: !0,
                toggleInvert: !0,
                ratio: null,
                clickToPlay: !0,
                hideControls: !0,
                resetOnEnd: !1,
                disableContextMenu: !0,
                loadSprite: !0,
                iconPrefix: "plyr",
                iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg",
                blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                quality: {
                  default: 576,
                  options: [
                    4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240,
                  ],
                  forced: !1,
                  onChange: null,
                },
                loop: { active: !1 },
                speed: {
                  selected: 1,
                  options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
                },
                keyboard: { focused: !0, global: !1 },
                tooltips: { controls: !1, seek: !0 },
                captions: { active: !1, language: "auto", update: !1 },
                fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
                storage: { enabled: !0, key: "plyr" },
                controls: [
                  "play-large",
                  "play",
                  "progress",
                  "current-time",
                  "mute",
                  "volume",
                  "captions",
                  "settings",
                  "pip",
                  "airplay",
                  "fullscreen",
                ],
                settings: ["captions", "quality", "speed"],
                i18n: {
                  restart: "Restart",
                  rewind: "Rewind {seektime}s",
                  play: "Play",
                  pause: "Pause",
                  fastForward: "Forward {seektime}s",
                  seek: "Seek",
                  seekLabel: "{currentTime} of {duration}",
                  played: "Played",
                  buffered: "Buffered",
                  currentTime: "Current time",
                  duration: "Duration",
                  volume: "Volume",
                  mute: "Mute",
                  unmute: "Unmute",
                  enableCaptions: "Enable captions",
                  disableCaptions: "Disable captions",
                  download: "Download",
                  enterFullscreen: "Enter fullscreen",
                  exitFullscreen: "Exit fullscreen",
                  frameTitle: "Player for {title}",
                  captions: "Captions",
                  settings: "Settings",
                  pip: "PIP",
                  menuBack: "Go back to previous menu",
                  speed: "Speed",
                  normal: "Normal",
                  quality: "Quality",
                  loop: "Loop",
                  start: "Start",
                  end: "End",
                  all: "All",
                  reset: "Reset",
                  disabled: "Disabled",
                  enabled: "Enabled",
                  advertisement: "Ad",
                  qualityBadge: {
                    2160: "4K",
                    1440: "HD",
                    1080: "HD",
                    720: "HD",
                    576: "SD",
                    480: "SD",
                  },
                },
                urls: {
                  download: null,
                  vimeo: {
                    sdk: "https://player.vimeo.com/api/player.js",
                    iframe: "https://player.vimeo.com/video/{0}?{1}",
                    api: "https://vimeo.com/api/oembed.json?url={0}",
                  },
                  youtube: {
                    sdk: "https://www.youtube.com/iframe_api",
                    api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
                  },
                  googleIMA: {
                    sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
                  },
                },
                listeners: {
                  seek: null,
                  play: null,
                  pause: null,
                  restart: null,
                  rewind: null,
                  fastForward: null,
                  mute: null,
                  volume: null,
                  captions: null,
                  download: null,
                  fullscreen: null,
                  pip: null,
                  airplay: null,
                  speed: null,
                  quality: null,
                  loop: null,
                  language: null,
                },
                events: [
                  "ended",
                  "progress",
                  "stalled",
                  "playing",
                  "waiting",
                  "canplay",
                  "canplaythrough",
                  "loadstart",
                  "loadeddata",
                  "loadedmetadata",
                  "timeupdate",
                  "volumechange",
                  "play",
                  "pause",
                  "error",
                  "seeking",
                  "seeked",
                  "emptied",
                  "ratechange",
                  "cuechange",
                  "download",
                  "enterfullscreen",
                  "exitfullscreen",
                  "captionsenabled",
                  "captionsdisabled",
                  "languagechange",
                  "controlshidden",
                  "controlsshown",
                  "ready",
                  "statechange",
                  "qualitychange",
                  "adsloaded",
                  "adscontentpause",
                  "adscontentresume",
                  "adstarted",
                  "adsmidpoint",
                  "adscomplete",
                  "adsallcomplete",
                  "adsimpression",
                  "adsclick",
                ],
                selectors: {
                  editable: "input, textarea, select, [contenteditable]",
                  container: ".plyr",
                  controls: { container: null, wrapper: ".plyr__controls" },
                  labels: "[data-plyr]",
                  buttons: {
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    fastForward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    download: '[data-plyr="download"]',
                    fullscreen: '[data-plyr="fullscreen"]',
                    pip: '[data-plyr="pip"]',
                    airplay: '[data-plyr="airplay"]',
                    settings: '[data-plyr="settings"]',
                    loop: '[data-plyr="loop"]',
                  },
                  inputs: {
                    seek: '[data-plyr="seek"]',
                    volume: '[data-plyr="volume"]',
                    speed: '[data-plyr="speed"]',
                    language: '[data-plyr="language"]',
                    quality: '[data-plyr="quality"]',
                  },
                  display: {
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration",
                    buffer: ".plyr__progress__buffer",
                    loop: ".plyr__progress__loop",
                    volume: ".plyr__volume--display",
                  },
                  progress: ".plyr__progress",
                  captions: ".plyr__captions",
                  caption: ".plyr__caption",
                },
                classNames: {
                  type: "plyr--{0}",
                  provider: "plyr--{0}",
                  video: "plyr__video-wrapper",
                  embed: "plyr__video-embed",
                  videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                  embedContainer: "plyr__video-embed__container",
                  poster: "plyr__poster",
                  posterEnabled: "plyr__poster-enabled",
                  ads: "plyr__ads",
                  control: "plyr__control",
                  controlPressed: "plyr__control--pressed",
                  playing: "plyr--playing",
                  paused: "plyr--paused",
                  stopped: "plyr--stopped",
                  loading: "plyr--loading",
                  hover: "plyr--hover",
                  tooltip: "plyr__tooltip",
                  cues: "plyr__cues",
                  marker: "plyr__progress__marker",
                  hidden: "plyr__sr-only",
                  hideControls: "plyr--hide-controls",
                  isTouch: "plyr--is-touch",
                  uiSupported: "plyr--full-ui",
                  noTransition: "plyr--no-transition",
                  display: { time: "plyr__time" },
                  menu: {
                    value: "plyr__menu__value",
                    badge: "plyr__badge",
                    open: "plyr--menu-open",
                  },
                  captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active",
                  },
                  fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    fallback: "plyr--fullscreen-fallback",
                  },
                  pip: {
                    supported: "plyr--pip-supported",
                    active: "plyr--pip-active",
                  },
                  airplay: {
                    supported: "plyr--airplay-supported",
                    active: "plyr--airplay-active",
                  },
                  previewThumbnails: {
                    thumbContainer: "plyr__preview-thumb",
                    thumbContainerShown: "plyr__preview-thumb--is-shown",
                    imageContainer: "plyr__preview-thumb__image-container",
                    timeContainer: "plyr__preview-thumb__time-container",
                    scrubbingContainer: "plyr__preview-scrubbing",
                    scrubbingContainerShown:
                      "plyr__preview-scrubbing--is-shown",
                  },
                },
                attributes: {
                  embed: {
                    provider: "data-plyr-provider",
                    id: "data-plyr-embed-id",
                    hash: "data-plyr-embed-hash",
                  },
                },
                ads: { enabled: !1, publisherId: "", tagUrl: "" },
                previewThumbnails: { enabled: !1, src: "" },
                vimeo: {
                  byline: !1,
                  portrait: !1,
                  title: !1,
                  speed: !0,
                  transparent: !1,
                  customControls: !0,
                  referrerPolicy: null,
                  premium: !1,
                },
                youtube: {
                  rel: 0,
                  showinfo: 0,
                  iv_load_policy: 3,
                  modestbranding: 1,
                  customControls: !0,
                  noCookie: !1,
                },
                mediaMetadata: {
                  title: "",
                  artist: "",
                  album: "",
                  artwork: [],
                },
                markers: { enabled: !1, points: [] },
              },
              Pe = "picture-in-picture",
              Te = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
              Se = "video",
              Me = () => {};
            class Oe {
              constructor(e = !1) {
                (this.enabled = window.console && e),
                  this.enabled && this.log("Debugging enabled");
              }
              get log() {
                return this.enabled
                  ? Function.prototype.bind.call(console.log, console)
                  : Me;
              }
              get warn() {
                return this.enabled
                  ? Function.prototype.bind.call(console.warn, console)
                  : Me;
              }
              get error() {
                return this.enabled
                  ? Function.prototype.bind.call(console.error, console)
                  : Me;
              }
            }
            class _e {
              constructor(t) {
                e(this, "onChange", () => {
                  if (!this.supported) return;
                  const e = this.player.elements.buttons.fullscreen;
                  B.element(e) && (e.pressed = this.active);
                  const t =
                    this.target === this.player.media
                      ? this.target
                      : this.player.elements.container;
                  Q.call(
                    this.player,
                    t,
                    this.active ? "enterfullscreen" : "exitfullscreen",
                    !0
                  );
                }),
                  e(this, "toggleFallback", (e = !1) => {
                    if (
                      (e
                        ? (this.scrollPosition = {
                            x: window.scrollX ?? 0,
                            y: window.scrollY ?? 0,
                          })
                        : window.scrollTo(
                            this.scrollPosition.x,
                            this.scrollPosition.y
                          ),
                      (document.body.style.overflow = e ? "hidden" : ""),
                      V(
                        this.target,
                        this.player.config.classNames.fullscreen.fallback,
                        e
                      ),
                      F.isIos)
                    ) {
                      let t = document.head.querySelector(
                        'meta[name="viewport"]'
                      );
                      const n = "viewport-fit=cover";
                      t ||
                        ((t = document.createElement("meta")),
                        t.setAttribute("name", "viewport"));
                      const r = B.string(t.content) && t.content.includes(n);
                      e
                        ? ((this.cleanupViewport = !r),
                          r || (t.content += `,${n}`))
                        : this.cleanupViewport &&
                          (t.content = t.content
                            .split(",")
                            .filter((e) => e.trim() !== n)
                            .join(","));
                    }
                    this.onChange();
                  }),
                  e(this, "trapFocus", (e) => {
                    if (
                      F.isIos ||
                      F.isIPadOS ||
                      !this.active ||
                      "Tab" !== e.key
                    )
                      return;
                    const t = document.activeElement,
                      n = W.call(
                        this.player,
                        "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
                      ),
                      [r] = n,
                      i = n[n.length - 1];
                    t !== i || e.shiftKey
                      ? t === r && e.shiftKey && (i.focus(), e.preventDefault())
                      : (r.focus(), e.preventDefault());
                  }),
                  e(this, "update", () => {
                    if (this.supported) {
                      let e;
                      (e = this.forceFallback
                        ? "Fallback (forced)"
                        : _e.nativeSupported
                        ? "Native"
                        : "Fallback"),
                        this.player.debug.log(`${e} fullscreen enabled`);
                    } else
                      this.player.debug.log(
                        "Fullscreen not supported and fallback disabled"
                      );
                    V(
                      this.player.elements.container,
                      this.player.config.classNames.fullscreen.enabled,
                      this.supported
                    );
                  }),
                  e(this, "enter", () => {
                    this.supported &&
                      (F.isIos && this.player.config.fullscreen.iosNative
                        ? this.player.isVimeo
                          ? this.player.embed.requestFullscreen()
                          : this.target.webkitEnterFullscreen()
                        : !_e.nativeSupported || this.forceFallback
                        ? this.toggleFallback(!0)
                        : this.prefix
                        ? B.empty(this.prefix) ||
                          this.target[`${this.prefix}Request${this.property}`]()
                        : this.target.requestFullscreen({
                            navigationUI: "hide",
                          }));
                  }),
                  e(this, "exit", () => {
                    if (this.supported)
                      if (F.isIos && this.player.config.fullscreen.iosNative)
                        this.player.isVimeo
                          ? this.player.embed.exitFullscreen()
                          : this.target.webkitEnterFullscreen(),
                          ne(this.player.play());
                      else if (!_e.nativeSupported || this.forceFallback)
                        this.toggleFallback(!1);
                      else if (this.prefix) {
                        if (!B.empty(this.prefix)) {
                          const e = "moz" === this.prefix ? "Cancel" : "Exit";
                          document[`${this.prefix}${e}${this.property}`]();
                        }
                      } else
                        (
                          document.cancelFullScreen || document.exitFullscreen
                        ).call(document);
                  }),
                  e(this, "toggle", () => {
                    this.active ? this.exit() : this.enter();
                  }),
                  (this.player = t),
                  (this.prefix = _e.prefix),
                  (this.property = _e.property),
                  (this.scrollPosition = { x: 0, y: 0 }),
                  (this.forceFallback =
                    "force" === t.config.fullscreen.fallback),
                  (this.player.elements.fullscreen =
                    t.config.fullscreen.container &&
                    (function (e, t) {
                      const { prototype: n } = Element;
                      return (
                        n.closest ||
                        function () {
                          let e = this;
                          do {
                            if ($.matches(e, t)) return e;
                            e = e.parentElement || e.parentNode;
                          } while (null !== e && 1 === e.nodeType);
                          return null;
                        }
                      ).call(e, t);
                    })(
                      this.player.elements.container,
                      t.config.fullscreen.container
                    )),
                  X.call(
                    this.player,
                    document,
                    "ms" === this.prefix
                      ? "MSFullscreenChange"
                      : `${this.prefix}fullscreenchange`,
                    () => {
                      this.onChange();
                    }
                  ),
                  X.call(
                    this.player,
                    this.player.elements.container,
                    "dblclick",
                    (e) => {
                      (B.element(this.player.elements.controls) &&
                        this.player.elements.controls.contains(e.target)) ||
                        this.player.listeners.proxy(
                          e,
                          this.toggle,
                          "fullscreen"
                        );
                    }
                  ),
                  X.call(this, this.player.elements.container, "keydown", (e) =>
                    this.trapFocus(e)
                  ),
                  this.update();
              }
              static get nativeSupported() {
                return !!(
                  document.fullscreenEnabled ||
                  document.webkitFullscreenEnabled ||
                  document.mozFullScreenEnabled ||
                  document.msFullscreenEnabled
                );
              }
              get useNative() {
                return _e.nativeSupported && !this.forceFallback;
              }
              static get prefix() {
                if (B.function(document.exitFullscreen)) return "";
                let e = "";
                return (
                  ["webkit", "moz", "ms"].some(
                    (t) =>
                      !(
                        (!B.function(document[`${t}ExitFullscreen`]) &&
                          !B.function(document[`${t}CancelFullScreen`])) ||
                        ((e = t), 0)
                      )
                  ),
                  e
                );
              }
              static get property() {
                return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
              }
              get supported() {
                return [
                  this.player.config.fullscreen.enabled,
                  this.player.isVideo,
                  _e.nativeSupported || this.player.config.fullscreen.fallback,
                  !this.player.isYouTube ||
                    _e.nativeSupported ||
                    !F.isIos ||
                    (this.player.config.playsinline &&
                      !this.player.config.fullscreen.iosNative),
                ].every(Boolean);
              }
              get active() {
                if (!this.supported) return !1;
                if (!_e.nativeSupported || this.forceFallback)
                  return z(
                    this.target,
                    this.player.config.classNames.fullscreen.fallback
                  );
                const e = this.prefix
                  ? this.target.getRootNode()[
                      `${this.prefix}${this.property}Element`
                    ]
                  : this.target.getRootNode().fullscreenElement;
                return e && e.shadowRoot
                  ? e === this.target.getRootNode().host
                  : e === this.target;
              }
              get target() {
                return F.isIos && this.player.config.fullscreen.iosNative
                  ? this.player.media
                  : this.player.elements.fullscreen ??
                      this.player.elements.container;
              }
            }
            function Re(e, t = 1) {
              return new Promise((n, r) => {
                const i = new Image(),
                  o = () => {
                    delete i.onload,
                      delete i.onerror,
                      (i.naturalWidth >= t ? n : r)(i);
                  };
                Object.assign(i, { onload: o, onerror: o, src: e });
              });
            }
            const Ne = {
              addStyleHook() {
                V(
                  this.elements.container,
                  this.config.selectors.container.replace(".", ""),
                  !0
                ),
                  V(
                    this.elements.container,
                    this.config.classNames.uiSupported,
                    this.supported.ui
                  );
              },
              toggleNativeControls(e = !1) {
                e && this.isHTML5
                  ? this.media.setAttribute("controls", "")
                  : this.media.removeAttribute("controls");
              },
              build() {
                if ((this.listeners.media(), !this.supported.ui))
                  return (
                    this.debug.warn(
                      `Basic support only for ${this.provider} ${this.type}`
                    ),
                    void Ne.toggleNativeControls.call(this, !0)
                  );
                B.element(this.elements.controls) ||
                  (Ae.inject.call(this), this.listeners.controls()),
                  Ne.toggleNativeControls.call(this),
                  this.isHTML5 && ke.setup.call(this),
                  (this.volume = null),
                  (this.muted = null),
                  (this.loop = null),
                  (this.quality = null),
                  (this.speed = null),
                  Ae.updateVolume.call(this),
                  Ae.timeUpdate.call(this),
                  Ae.durationUpdate.call(this),
                  Ne.checkPlaying.call(this),
                  V(
                    this.elements.container,
                    this.config.classNames.pip.supported,
                    Z.pip && this.isHTML5 && this.isVideo
                  ),
                  V(
                    this.elements.container,
                    this.config.classNames.airplay.supported,
                    Z.airplay && this.isHTML5
                  ),
                  V(
                    this.elements.container,
                    this.config.classNames.isTouch,
                    this.touch
                  ),
                  (this.ready = !0),
                  setTimeout(() => {
                    Q.call(this, this.media, "ready");
                  }, 0),
                  Ne.setTitle.call(this),
                  this.poster &&
                    Ne.setPoster.call(this, this.poster, !1).catch(() => {}),
                  this.config.duration && Ae.durationUpdate.call(this),
                  this.config.mediaMetadata && Ae.setMediaMetadata.call(this);
              },
              setTitle() {
                let e = ye.get("play", this.config);
                if (
                  (B.string(this.config.title) &&
                    !B.empty(this.config.title) &&
                    (e += `, ${this.config.title}`),
                  Array.from(this.elements.buttons.play || []).forEach((t) => {
                    t.setAttribute("aria-label", e);
                  }),
                  this.isEmbed)
                ) {
                  const e = q.call(this, "iframe");
                  if (!B.element(e)) return;
                  const t = B.empty(this.config.title)
                      ? "video"
                      : this.config.title,
                    n = ye.get("frameTitle", this.config);
                  e.setAttribute("title", n.replace("{title}", t));
                }
              },
              togglePoster(e) {
                V(
                  this.elements.container,
                  this.config.classNames.posterEnabled,
                  e
                );
              },
              setPoster(e, t = !0) {
                return t && this.poster
                  ? Promise.reject(new Error("Poster already set"))
                  : (this.media.setAttribute("data-poster", e),
                    this.elements.poster.removeAttribute("hidden"),
                    te
                      .call(this)
                      .then(() => Re(e))
                      .catch((t) => {
                        throw (
                          (e === this.poster && Ne.togglePoster.call(this, !1),
                          t)
                        );
                      })
                      .then(() => {
                        if (e !== this.poster)
                          throw new Error(
                            "setPoster cancelled by later call to setPoster"
                          );
                      })
                      .then(
                        () => (
                          Object.assign(this.elements.poster.style, {
                            backgroundImage: `url('${e}')`,
                            backgroundSize: "",
                          }),
                          Ne.togglePoster.call(this, !0),
                          e
                        )
                      ));
              },
              checkPlaying(e) {
                V(
                  this.elements.container,
                  this.config.classNames.playing,
                  this.playing
                ),
                  V(
                    this.elements.container,
                    this.config.classNames.paused,
                    this.paused
                  ),
                  V(
                    this.elements.container,
                    this.config.classNames.stopped,
                    this.stopped
                  ),
                  Array.from(this.elements.buttons.play || []).forEach((e) => {
                    Object.assign(e, { pressed: this.playing }),
                      e.setAttribute(
                        "aria-label",
                        ye.get(this.playing ? "pause" : "play", this.config)
                      );
                  }),
                  (B.event(e) && "timeupdate" === e.type) ||
                    Ne.toggleControls.call(this);
              },
              checkLoading(e) {
                (this.loading = ["stalled", "waiting"].includes(e.type)),
                  clearTimeout(this.timers.loading),
                  (this.timers.loading = setTimeout(
                    () => {
                      V(
                        this.elements.container,
                        this.config.classNames.loading,
                        this.loading
                      ),
                        Ne.toggleControls.call(this);
                    },
                    this.loading ? 250 : 0
                  ));
              },
              toggleControls(e) {
                const { controls: t } = this.elements;
                if (t && this.config.hideControls) {
                  const n = this.touch && this.lastSeekTime + 2e3 > Date.now();
                  this.toggleControls(
                    Boolean(
                      e ||
                        this.loading ||
                        this.paused ||
                        t.pressed ||
                        t.hover ||
                        n
                    )
                  );
                }
              },
              migrateStyles() {
                Object.values({ ...this.media.style })
                  .filter(
                    (e) => !B.empty(e) && B.string(e) && e.startsWith("--plyr")
                  )
                  .forEach((e) => {
                    this.elements.container.style.setProperty(
                      e,
                      this.media.style.getPropertyValue(e)
                    ),
                      this.media.style.removeProperty(e);
                  }),
                  B.empty(this.media.style) &&
                    this.media.removeAttribute("style");
              },
            };
            class je {
              constructor(t) {
                e(this, "firstTouch", () => {
                  const { player: e } = this,
                    { elements: t } = e;
                  (e.touch = !0),
                    V(t.container, e.config.classNames.isTouch, !0);
                }),
                  e(this, "global", (e = !0) => {
                    const { player: t } = this;
                    t.config.keyboard.global &&
                      G.call(t, window, "keydown keyup", this.handleKey, e, !1),
                      G.call(t, document.body, "click", this.toggleMenu, e),
                      J.call(t, document.body, "touchstart", this.firstTouch);
                  }),
                  e(this, "container", () => {
                    const { player: e } = this,
                      { config: t, elements: n, timers: r } = e;
                    !t.keyboard.global &&
                      t.keyboard.focused &&
                      X.call(
                        e,
                        n.container,
                        "keydown keyup",
                        this.handleKey,
                        !1
                      ),
                      X.call(
                        e,
                        n.container,
                        "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                        (t) => {
                          const { controls: i } = n;
                          i &&
                            "enterfullscreen" === t.type &&
                            ((i.pressed = !1), (i.hover = !1));
                          let o = 0;
                          ["touchstart", "touchmove", "mousemove"].includes(
                            t.type
                          ) &&
                            (Ne.toggleControls.call(e, !0),
                            (o = e.touch ? 3e3 : 2e3)),
                            clearTimeout(r.controls),
                            (r.controls = setTimeout(
                              () => Ne.toggleControls.call(e, !1),
                              o
                            ));
                        }
                      );
                    const i = () => {
                        if (!e.isVimeo || e.config.vimeo.premium) return;
                        const t = n.wrapper,
                          { active: r } = e.fullscreen,
                          [i, o] = le.call(e),
                          s = oe(`aspect-ratio: ${i} / ${o}`);
                        if (!r)
                          return void (s
                            ? ((t.style.width = null), (t.style.height = null))
                            : ((t.style.maxWidth = null),
                              (t.style.margin = null)));
                        const [a, u] = [
                            Math.max(
                              document.documentElement.clientWidth || 0,
                              window.innerWidth || 0
                            ),
                            Math.max(
                              document.documentElement.clientHeight || 0,
                              window.innerHeight || 0
                            ),
                          ],
                          l = a / u > i / o;
                        s
                          ? ((t.style.width = l ? "auto" : "100%"),
                            (t.style.height = l ? "100%" : "auto"))
                          : ((t.style.maxWidth = l ? (u / o) * i + "px" : null),
                            (t.style.margin = l ? "0 auto" : null));
                      },
                      o = () => {
                        clearTimeout(r.resized),
                          (r.resized = setTimeout(i, 50));
                      };
                    X.call(
                      e,
                      n.container,
                      "enterfullscreen exitfullscreen",
                      (t) => {
                        const { target: r } = e.fullscreen;
                        r === n.container &&
                          ((!e.isEmbed && B.empty(e.config.ratio)) ||
                            (i(),
                            ("enterfullscreen" === t.type ? X : K).call(
                              e,
                              window,
                              "resize",
                              o
                            )));
                      }
                    );
                  }),
                  e(this, "media", () => {
                    const { player: e } = this,
                      { elements: t } = e;
                    if (
                      (X.call(e, e.media, "timeupdate seeking seeked", (t) =>
                        Ae.timeUpdate.call(e, t)
                      ),
                      X.call(
                        e,
                        e.media,
                        "durationchange loadeddata loadedmetadata",
                        (t) => Ae.durationUpdate.call(e, t)
                      ),
                      X.call(e, e.media, "ended", () => {
                        e.isHTML5 &&
                          e.isVideo &&
                          e.config.resetOnEnd &&
                          (e.restart(), e.pause());
                      }),
                      X.call(
                        e,
                        e.media,
                        "progress playing seeking seeked",
                        (t) => Ae.updateProgress.call(e, t)
                      ),
                      X.call(e, e.media, "volumechange", (t) =>
                        Ae.updateVolume.call(e, t)
                      ),
                      X.call(
                        e,
                        e.media,
                        "playing play pause ended emptied timeupdate",
                        (t) => Ne.checkPlaying.call(e, t)
                      ),
                      X.call(
                        e,
                        e.media,
                        "waiting canplay seeked playing",
                        (t) => Ne.checkLoading.call(e, t)
                      ),
                      e.supported.ui && e.config.clickToPlay && !e.isAudio)
                    ) {
                      const n = q.call(e, `.${e.config.classNames.video}`);
                      if (!B.element(n)) return;
                      X.call(e, t.container, "click", (r) => {
                        ([t.container, n].includes(r.target) ||
                          n.contains(r.target)) &&
                          ((e.touch && e.config.hideControls) ||
                            (e.ended
                              ? (this.proxy(r, e.restart, "restart"),
                                this.proxy(
                                  r,
                                  () => {
                                    ne(e.play());
                                  },
                                  "play"
                                ))
                              : this.proxy(
                                  r,
                                  () => {
                                    ne(e.togglePlay());
                                  },
                                  "play"
                                )));
                      });
                    }
                    e.supported.ui &&
                      e.config.disableContextMenu &&
                      X.call(
                        e,
                        t.wrapper,
                        "contextmenu",
                        (e) => {
                          e.preventDefault();
                        },
                        !1
                      ),
                      X.call(e, e.media, "volumechange", () => {
                        e.storage.set({ volume: e.volume, muted: e.muted });
                      }),
                      X.call(e, e.media, "ratechange", () => {
                        Ae.updateSetting.call(e, "speed"),
                          e.storage.set({ speed: e.speed });
                      }),
                      X.call(e, e.media, "qualitychange", (t) => {
                        Ae.updateSetting.call(
                          e,
                          "quality",
                          null,
                          t.detail.quality
                        );
                      }),
                      X.call(e, e.media, "ready qualitychange", () => {
                        Ae.setDownloadUrl.call(e);
                      });
                    const n = e.config.events
                      .concat(["keyup", "keydown"])
                      .join(" ");
                    X.call(e, e.media, n, (n) => {
                      let { detail: r = {} } = n;
                      "error" === n.type && (r = e.media.error),
                        Q.call(e, t.container, n.type, !0, r);
                    });
                  }),
                  e(this, "proxy", (e, t, n) => {
                    const { player: r } = this,
                      i = r.config.listeners[n];
                    let o = !0;
                    B.function(i) && (o = i.call(r, e)),
                      !1 !== o && B.function(t) && t.call(r, e);
                  }),
                  e(this, "bind", (e, t, n, r, i = !0) => {
                    const { player: o } = this,
                      s = o.config.listeners[r],
                      a = B.function(s);
                    X.call(o, e, t, (e) => this.proxy(e, n, r), i && !a);
                  }),
                  e(this, "controls", () => {
                    const { player: e } = this,
                      { elements: t } = e,
                      n = F.isIE ? "change" : "input";
                    if (
                      (t.buttons.play &&
                        Array.from(t.buttons.play).forEach((t) => {
                          this.bind(
                            t,
                            "click",
                            () => {
                              ne(e.togglePlay());
                            },
                            "play"
                          );
                        }),
                      this.bind(
                        t.buttons.restart,
                        "click",
                        e.restart,
                        "restart"
                      ),
                      this.bind(
                        t.buttons.rewind,
                        "click",
                        () => {
                          (e.lastSeekTime = Date.now()), e.rewind();
                        },
                        "rewind"
                      ),
                      this.bind(
                        t.buttons.fastForward,
                        "click",
                        () => {
                          (e.lastSeekTime = Date.now()), e.forward();
                        },
                        "fastForward"
                      ),
                      this.bind(
                        t.buttons.mute,
                        "click",
                        () => {
                          e.muted = !e.muted;
                        },
                        "mute"
                      ),
                      this.bind(t.buttons.captions, "click", () =>
                        e.toggleCaptions()
                      ),
                      this.bind(
                        t.buttons.download,
                        "click",
                        () => {
                          Q.call(e, e.media, "download");
                        },
                        "download"
                      ),
                      this.bind(
                        t.buttons.fullscreen,
                        "click",
                        () => {
                          e.fullscreen.toggle();
                        },
                        "fullscreen"
                      ),
                      this.bind(
                        t.buttons.pip,
                        "click",
                        () => {
                          e.pip = "toggle";
                        },
                        "pip"
                      ),
                      this.bind(
                        t.buttons.airplay,
                        "click",
                        e.airplay,
                        "airplay"
                      ),
                      this.bind(
                        t.buttons.settings,
                        "click",
                        (t) => {
                          t.stopPropagation(),
                            t.preventDefault(),
                            Ae.toggleMenu.call(e, t);
                        },
                        null,
                        !1
                      ),
                      this.bind(
                        t.buttons.settings,
                        "keyup",
                        (t) => {
                          [" ", "Enter"].includes(t.key) &&
                            ("Enter" !== t.key
                              ? (t.preventDefault(),
                                t.stopPropagation(),
                                Ae.toggleMenu.call(e, t))
                              : Ae.focusFirstMenuItem.call(e, null, !0));
                        },
                        null,
                        !1
                      ),
                      this.bind(t.settings.menu, "keydown", (t) => {
                        "Escape" === t.key && Ae.toggleMenu.call(e, t);
                      }),
                      this.bind(t.inputs.seek, "mousedown mousemove", (e) => {
                        const n = t.progress.getBoundingClientRect(),
                          r = (100 / n.width) * (e.pageX - n.left);
                        e.currentTarget.setAttribute("seek-value", r);
                      }),
                      this.bind(
                        t.inputs.seek,
                        "mousedown mouseup keydown keyup touchstart touchend",
                        (t) => {
                          const n = t.currentTarget,
                            r = "play-on-seeked";
                          if (
                            B.keyboardEvent(t) &&
                            !["ArrowLeft", "ArrowRight"].includes(t.key)
                          )
                            return;
                          e.lastSeekTime = Date.now();
                          const i = n.hasAttribute(r),
                            o = ["mouseup", "touchend", "keyup"].includes(
                              t.type
                            );
                          i && o
                            ? (n.removeAttribute(r), ne(e.play()))
                            : !o &&
                              e.playing &&
                              (n.setAttribute(r, ""), e.pause());
                        }
                      ),
                      F.isIos)
                    ) {
                      const t = W.call(e, 'input[type="range"]');
                      Array.from(t).forEach((e) =>
                        this.bind(e, n, (e) => k(e.target))
                      );
                    }
                    this.bind(
                      t.inputs.seek,
                      n,
                      (t) => {
                        const n = t.currentTarget;
                        let r = n.getAttribute("seek-value");
                        B.empty(r) && (r = n.value),
                          n.removeAttribute("seek-value"),
                          (e.currentTime = (r / n.max) * e.duration);
                      },
                      "seek"
                    ),
                      this.bind(
                        t.progress,
                        "mouseenter mouseleave mousemove",
                        (t) => Ae.updateSeekTooltip.call(e, t)
                      ),
                      this.bind(t.progress, "mousemove touchmove", (t) => {
                        const { previewThumbnails: n } = e;
                        n && n.loaded && n.startMove(t);
                      }),
                      this.bind(t.progress, "mouseleave touchend click", () => {
                        const { previewThumbnails: t } = e;
                        t && t.loaded && t.endMove(!1, !0);
                      }),
                      this.bind(t.progress, "mousedown touchstart", (t) => {
                        const { previewThumbnails: n } = e;
                        n && n.loaded && n.startScrubbing(t);
                      }),
                      this.bind(t.progress, "mouseup touchend", (t) => {
                        const { previewThumbnails: n } = e;
                        n && n.loaded && n.endScrubbing(t);
                      }),
                      F.isWebKit &&
                        Array.from(W.call(e, 'input[type="range"]')).forEach(
                          (t) => {
                            this.bind(t, "input", (t) =>
                              Ae.updateRangeFill.call(e, t.target)
                            );
                          }
                        ),
                      e.config.toggleInvert &&
                        !B.element(t.display.duration) &&
                        this.bind(t.display.currentTime, "click", () => {
                          0 !== e.currentTime &&
                            ((e.config.invertTime = !e.config.invertTime),
                            Ae.timeUpdate.call(e));
                        }),
                      this.bind(
                        t.inputs.volume,
                        n,
                        (t) => {
                          e.volume = t.target.value;
                        },
                        "volume"
                      ),
                      this.bind(t.controls, "mouseenter mouseleave", (n) => {
                        t.controls.hover = !e.touch && "mouseenter" === n.type;
                      }),
                      t.fullscreen &&
                        Array.from(t.fullscreen.children)
                          .filter((e) => !e.contains(t.container))
                          .forEach((n) => {
                            this.bind(n, "mouseenter mouseleave", (n) => {
                              t.controls &&
                                (t.controls.hover =
                                  !e.touch && "mouseenter" === n.type);
                            });
                          }),
                      this.bind(
                        t.controls,
                        "mousedown mouseup touchstart touchend touchcancel",
                        (e) => {
                          t.controls.pressed = [
                            "mousedown",
                            "touchstart",
                          ].includes(e.type);
                        }
                      ),
                      this.bind(t.controls, "focusin", () => {
                        const { config: n, timers: r } = e;
                        V(t.controls, n.classNames.noTransition, !0),
                          Ne.toggleControls.call(e, !0),
                          setTimeout(() => {
                            V(t.controls, n.classNames.noTransition, !1);
                          }, 0);
                        const i = this.touch ? 3e3 : 4e3;
                        clearTimeout(r.controls),
                          (r.controls = setTimeout(
                            () => Ne.toggleControls.call(e, !1),
                            i
                          ));
                      }),
                      this.bind(
                        t.inputs.volume,
                        "wheel",
                        (t) => {
                          const n = t.webkitDirectionInvertedFromDevice,
                            [r, i] = [t.deltaX, -t.deltaY].map((e) =>
                              n ? -e : e
                            ),
                            o = Math.sign(Math.abs(r) > Math.abs(i) ? r : i);
                          e.increaseVolume(o / 50);
                          const { volume: s } = e.media;
                          ((1 === o && s < 1) || (-1 === o && s > 0)) &&
                            t.preventDefault();
                        },
                        "volume",
                        !1
                      );
                  }),
                  (this.player = t),
                  (this.lastKey = null),
                  (this.focusTimer = null),
                  (this.lastKeyDown = null),
                  (this.handleKey = this.handleKey.bind(this)),
                  (this.toggleMenu = this.toggleMenu.bind(this)),
                  (this.firstTouch = this.firstTouch.bind(this));
              }
              handleKey(e) {
                const { player: t } = this,
                  { elements: n } = t,
                  {
                    key: r,
                    type: i,
                    altKey: o,
                    ctrlKey: s,
                    metaKey: a,
                    shiftKey: u,
                  } = e,
                  l = "keydown" === i,
                  c = l && r === this.lastKey;
                var d;
                if (!(o || s || a || u) && r)
                  if (l) {
                    const i = document.activeElement;
                    if (B.element(i)) {
                      const { editable: r } = t.config.selectors,
                        { seek: o } = n.inputs;
                      if (i !== o && $(i, r)) return;
                      if (" " === e.key && $(i, 'button, [role^="menuitem"]'))
                        return;
                    }
                    switch (
                      ([
                        " ",
                        "ArrowLeft",
                        "ArrowUp",
                        "ArrowRight",
                        "ArrowDown",
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "c",
                        "f",
                        "k",
                        "l",
                        "m",
                      ].includes(r) &&
                        (e.preventDefault(), e.stopPropagation()),
                      r)
                    ) {
                      case "0":
                      case "1":
                      case "2":
                      case "3":
                      case "4":
                      case "5":
                      case "6":
                      case "7":
                      case "8":
                      case "9":
                        c ||
                          ((d = parseInt(r, 10)),
                          (t.currentTime = (t.duration / 10) * d));
                        break;
                      case " ":
                      case "k":
                        c || ne(t.togglePlay());
                        break;
                      case "ArrowUp":
                        t.increaseVolume(0.1);
                        break;
                      case "ArrowDown":
                        t.decreaseVolume(0.1);
                        break;
                      case "m":
                        c || (t.muted = !t.muted);
                        break;
                      case "ArrowRight":
                        t.forward();
                        break;
                      case "ArrowLeft":
                        t.rewind();
                        break;
                      case "f":
                        t.fullscreen.toggle();
                        break;
                      case "c":
                        c || t.toggleCaptions();
                        break;
                      case "l":
                        t.loop = !t.loop;
                    }
                    "Escape" === r &&
                      !t.fullscreen.usingNative &&
                      t.fullscreen.active &&
                      t.fullscreen.toggle(),
                      (this.lastKey = r);
                  } else this.lastKey = null;
              }
              toggleMenu(e) {
                Ae.toggleMenu.call(this.player, e);
              }
            }
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== n.g
              ? n.g
              : "undefined" != typeof self && self;
            var Le = (function (e, t) {
              return (
                (function (e, t) {
                  e.exports = (function () {
                    var e = function () {},
                      t = {},
                      n = {},
                      r = {};
                    function i(e, t) {
                      e = e.push ? e : [e];
                      var i,
                        o,
                        s,
                        a = [],
                        u = e.length,
                        l = u;
                      for (
                        i = function (e, n) {
                          n.length && a.push(e), --l || t(a);
                        };
                        u--;

                      )
                        (o = e[u]),
                          (s = n[o]) ? i(o, s) : (r[o] = r[o] || []).push(i);
                    }
                    function o(e, t) {
                      if (e) {
                        var i = r[e];
                        if (((n[e] = t), i))
                          for (; i.length; ) i[0](e, t), i.splice(0, 1);
                      }
                    }
                    function s(t, n) {
                      t.call && (t = { success: t }),
                        n.length ? (t.error || e)(n) : (t.success || e)(t);
                    }
                    function a(t, n, r, i) {
                      var o,
                        s,
                        u = document,
                        l = r.async,
                        c = (r.numRetries || 0) + 1,
                        d = r.before || e,
                        h = t.replace(/[\?|#].*$/, ""),
                        p = t.replace(/^(css|img)!/, "");
                      (i = i || 0),
                        /(^css!|\.css$)/.test(h)
                          ? (((s = u.createElement("link")).rel = "stylesheet"),
                            (s.href = p),
                            (o = "hideFocus" in s) &&
                              s.relList &&
                              ((o = 0), (s.rel = "preload"), (s.as = "style")))
                          : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h)
                          ? ((s = u.createElement("img")).src = p)
                          : (((s = u.createElement("script")).src = t),
                            (s.async = void 0 === l || l)),
                        (s.onload =
                          s.onerror =
                          s.onbeforeload =
                            function (e) {
                              var u = e.type[0];
                              if (o)
                                try {
                                  s.sheet.cssText.length || (u = "e");
                                } catch (e) {
                                  18 != e.code && (u = "e");
                                }
                              if ("e" == u) {
                                if ((i += 1) < c) return a(t, n, r, i);
                              } else if ("preload" == s.rel && "style" == s.as)
                                return (s.rel = "stylesheet");
                              n(t, u, e.defaultPrevented);
                            }),
                        !1 !== d(t, s) && u.head.appendChild(s);
                    }
                    function u(e, t, n) {
                      var r,
                        i,
                        o = (e = e.push ? e : [e]).length,
                        s = o,
                        u = [];
                      for (
                        r = function (e, n, r) {
                          if (("e" == n && u.push(e), "b" == n)) {
                            if (!r) return;
                            u.push(e);
                          }
                          --o || t(u);
                        },
                          i = 0;
                        i < s;
                        i++
                      )
                        a(e[i], r, n);
                    }
                    function l(e, n, r) {
                      var i, a;
                      if (
                        (n && n.trim && (i = n), (a = (i ? r : n) || {}), i)
                      ) {
                        if (i in t) throw "LoadJS";
                        t[i] = !0;
                      }
                      function l(t, n) {
                        u(
                          e,
                          function (e) {
                            s(a, e),
                              t && s({ success: t, error: n }, e),
                              o(i, e);
                          },
                          a
                        );
                      }
                      if (a.returnPromise) return new Promise(l);
                      l();
                    }
                    return (
                      (l.ready = function (e, t) {
                        return (
                          i(e, function (e) {
                            s(t, e);
                          }),
                          l
                        );
                      }),
                      (l.done = function (e) {
                        o(e, []);
                      }),
                      (l.reset = function () {
                        (t = {}), (n = {}), (r = {});
                      }),
                      (l.isDefined = function (e) {
                        return e in t;
                      }),
                      l
                    );
                  })();
                })((t = { exports: {} })),
                t.exports
              );
            })();
            function Ie(e) {
              return new Promise((t, n) => {
                Le(e, { success: t, error: n });
              });
            }
            function Ve(e) {
              e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
                this.media.paused === e &&
                  ((this.media.paused = !e),
                  Q.call(this, this.media, e ? "play" : "pause"));
            }
            const ze = {
              setup() {
                const e = this;
                V(e.elements.wrapper, e.config.classNames.embed, !0),
                  (e.options.speed = e.config.speed.options),
                  ce.call(e),
                  B.object(window.Vimeo)
                    ? ze.ready.call(e)
                    : Ie(e.config.urls.vimeo.sdk)
                        .then(() => {
                          ze.ready.call(e);
                        })
                        .catch((t) => {
                          e.debug.warn(
                            "Vimeo SDK (player.js) failed to load",
                            t
                          );
                        });
              },
              ready() {
                const e = this,
                  t = e.config.vimeo,
                  { premium: n, referrerPolicy: r, ...i } = t;
                let o = e.media.getAttribute("src"),
                  s = "";
                B.empty(o)
                  ? ((o = e.media.getAttribute(e.config.attributes.embed.id)),
                    (s = e.media.getAttribute(e.config.attributes.embed.hash)))
                  : (s = (function (e) {
                      const t = e.match(
                        /^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/
                      );
                      return t && 5 === t.length ? t[4] : null;
                    })(o));
                const a = s ? { h: s } : {};
                n && Object.assign(i, { controls: !1, sidedock: !1 });
                const u = xe({
                    loop: e.config.loop.active,
                    autoplay: e.autoplay,
                    muted: e.muted,
                    gesture: "media",
                    playsinline: e.config.playsinline,
                    ...a,
                    ...i,
                  }),
                  l =
                    ((c = o),
                    B.empty(c)
                      ? null
                      : B.number(Number(c))
                      ? c
                      : c.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
                      ? RegExp.$2
                      : c);
                var c;
                const d = O("iframe"),
                  h = pe(e.config.urls.vimeo.iframe, l, u);
                if (
                  (d.setAttribute("src", h),
                  d.setAttribute("allowfullscreen", ""),
                  d.setAttribute(
                    "allow",
                    [
                      "autoplay",
                      "fullscreen",
                      "picture-in-picture",
                      "encrypted-media",
                      "accelerometer",
                      "gyroscope",
                    ].join("; ")
                  ),
                  B.empty(r) || d.setAttribute("referrerPolicy", r),
                  n || !t.customControls)
                )
                  d.setAttribute("data-poster", e.poster),
                    (e.media = j(d, e.media));
                else {
                  const t = O("div", {
                    class: e.config.classNames.embedContainer,
                    "data-poster": e.poster,
                  });
                  t.appendChild(d), (e.media = j(t, e.media));
                }
                t.customControls ||
                  Ce(pe(e.config.urls.vimeo.api, h)).then((t) => {
                    !B.empty(t) &&
                      t.thumbnail_url &&
                      Ne.setPoster.call(e, t.thumbnail_url).catch(() => {});
                  }),
                  (e.embed = new window.Vimeo.Player(d, {
                    autopause: e.config.autopause,
                    muted: e.muted,
                  })),
                  (e.media.paused = !0),
                  (e.media.currentTime = 0),
                  e.supported.ui && e.embed.disableTextTrack(),
                  (e.media.play = () => (Ve.call(e, !0), e.embed.play())),
                  (e.media.pause = () => (Ve.call(e, !1), e.embed.pause())),
                  (e.media.stop = () => {
                    e.pause(), (e.currentTime = 0);
                  });
                let { currentTime: p } = e.media;
                Object.defineProperty(e.media, "currentTime", {
                  get: () => p,
                  set(t) {
                    const { embed: n, media: r, paused: i, volume: o } = e,
                      s = i && !n.hasPlayed;
                    (r.seeking = !0),
                      Q.call(e, r, "seeking"),
                      Promise.resolve(s && n.setVolume(0))
                        .then(() => n.setCurrentTime(t))
                        .then(() => s && n.pause())
                        .then(() => s && n.setVolume(o))
                        .catch(() => {});
                  },
                });
                let m = e.config.speed.selected;
                Object.defineProperty(e.media, "playbackRate", {
                  get: () => m,
                  set(t) {
                    e.embed
                      .setPlaybackRate(t)
                      .then(() => {
                        (m = t), Q.call(e, e.media, "ratechange");
                      })
                      .catch(() => {
                        e.options.speed = [1];
                      });
                  },
                });
                let { volume: f } = e.config;
                Object.defineProperty(e.media, "volume", {
                  get: () => f,
                  set(t) {
                    e.embed.setVolume(t).then(() => {
                      (f = t), Q.call(e, e.media, "volumechange");
                    });
                  },
                });
                let { muted: g } = e.config;
                Object.defineProperty(e.media, "muted", {
                  get: () => g,
                  set(t) {
                    const n = !!B.boolean(t) && t;
                    e.embed.setMuted(!!n || e.config.muted).then(() => {
                      (g = n), Q.call(e, e.media, "volumechange");
                    });
                  },
                });
                let v,
                  { loop: y } = e.config;
                Object.defineProperty(e.media, "loop", {
                  get: () => y,
                  set(t) {
                    const n = B.boolean(t) ? t : e.config.loop.active;
                    e.embed.setLoop(n).then(() => {
                      y = n;
                    });
                  },
                }),
                  e.embed
                    .getVideoUrl()
                    .then((t) => {
                      (v = t), Ae.setDownloadUrl.call(e);
                    })
                    .catch((e) => {
                      this.debug.warn(e);
                    }),
                  Object.defineProperty(e.media, "currentSrc", {
                    get: () => v,
                  }),
                  Object.defineProperty(e.media, "ended", {
                    get: () => e.currentTime === e.duration,
                  }),
                  Promise.all([
                    e.embed.getVideoWidth(),
                    e.embed.getVideoHeight(),
                  ]).then((t) => {
                    const [n, r] = t;
                    (e.embed.ratio = de(n, r)), ce.call(this);
                  }),
                  e.embed.setAutopause(e.config.autopause).then((t) => {
                    e.config.autopause = t;
                  }),
                  e.embed.getVideoTitle().then((t) => {
                    (e.config.title = t), Ne.setTitle.call(this);
                  }),
                  e.embed.getCurrentTime().then((t) => {
                    (p = t), Q.call(e, e.media, "timeupdate");
                  }),
                  e.embed.getDuration().then((t) => {
                    (e.media.duration = t),
                      Q.call(e, e.media, "durationchange");
                  }),
                  e.embed.getTextTracks().then((t) => {
                    (e.media.textTracks = t), ke.setup.call(e);
                  }),
                  e.embed.on("cuechange", ({ cues: t = [] }) => {
                    const n = t.map((e) =>
                      (function (e) {
                        const t = document.createDocumentFragment(),
                          n = document.createElement("div");
                        return (
                          t.appendChild(n),
                          (n.innerHTML = e),
                          t.firstChild.innerText
                        );
                      })(e.text)
                    );
                    ke.updateCues.call(e, n);
                  }),
                  e.embed.on("loaded", () => {
                    e.embed.getPaused().then((t) => {
                      Ve.call(e, !t), t || Q.call(e, e.media, "playing");
                    }),
                      B.element(e.embed.element) &&
                        e.supported.ui &&
                        e.embed.element.setAttribute("tabindex", -1);
                  }),
                  e.embed.on("bufferstart", () => {
                    Q.call(e, e.media, "waiting");
                  }),
                  e.embed.on("bufferend", () => {
                    Q.call(e, e.media, "playing");
                  }),
                  e.embed.on("play", () => {
                    Ve.call(e, !0), Q.call(e, e.media, "playing");
                  }),
                  e.embed.on("pause", () => {
                    Ve.call(e, !1);
                  }),
                  e.embed.on("timeupdate", (t) => {
                    (e.media.seeking = !1),
                      (p = t.seconds),
                      Q.call(e, e.media, "timeupdate");
                  }),
                  e.embed.on("progress", (t) => {
                    (e.media.buffered = t.percent),
                      Q.call(e, e.media, "progress"),
                      1 === parseInt(t.percent, 10) &&
                        Q.call(e, e.media, "canplaythrough"),
                      e.embed.getDuration().then((t) => {
                        t !== e.media.duration &&
                          ((e.media.duration = t),
                          Q.call(e, e.media, "durationchange"));
                      });
                  }),
                  e.embed.on("seeked", () => {
                    (e.media.seeking = !1), Q.call(e, e.media, "seeked");
                  }),
                  e.embed.on("ended", () => {
                    (e.media.paused = !0), Q.call(e, e.media, "ended");
                  }),
                  e.embed.on("error", (t) => {
                    (e.media.error = t), Q.call(e, e.media, "error");
                  }),
                  t.customControls && setTimeout(() => Ne.build.call(e), 0);
              },
            };
            function $e(e) {
              e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
                this.media.paused === e &&
                  ((this.media.paused = !e),
                  Q.call(this, this.media, e ? "play" : "pause"));
            }
            function We(e) {
              return e.noCookie
                ? "https://www.youtube-nocookie.com"
                : "http:" === window.location.protocol
                ? "http://www.youtube.com"
                : void 0;
            }
            const qe = {
                setup() {
                  if (
                    (V(this.elements.wrapper, this.config.classNames.embed, !0),
                    B.object(window.YT) && B.function(window.YT.Player))
                  )
                    qe.ready.call(this);
                  else {
                    const e = window.onYouTubeIframeAPIReady;
                    (window.onYouTubeIframeAPIReady = () => {
                      B.function(e) && e(), qe.ready.call(this);
                    }),
                      Ie(this.config.urls.youtube.sdk).catch((e) => {
                        this.debug.warn("YouTube API failed to load", e);
                      });
                  }
                },
                getTitle(e) {
                  Ce(pe(this.config.urls.youtube.api, e))
                    .then((e) => {
                      if (B.object(e)) {
                        const { title: t, height: n, width: r } = e;
                        (this.config.title = t),
                          Ne.setTitle.call(this),
                          (this.embed.ratio = de(r, n));
                      }
                      ce.call(this);
                    })
                    .catch(() => {
                      ce.call(this);
                    });
                },
                ready() {
                  const e = this,
                    t = e.config.youtube,
                    n = e.media && e.media.getAttribute("id");
                  if (!B.empty(n) && n.startsWith("youtube-")) return;
                  let r = e.media.getAttribute("src");
                  B.empty(r) &&
                    (r = e.media.getAttribute(this.config.attributes.embed.id));
                  const i =
                    ((o = r),
                    B.empty(o)
                      ? null
                      : o.match(
                          /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
                        )
                      ? RegExp.$2
                      : o);
                  var o;
                  const s = O("div", {
                    id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
                    "data-poster": t.customControls ? e.poster : void 0,
                  });
                  if (((e.media = j(s, e.media)), t.customControls)) {
                    const t = (e) =>
                      `https://i.ytimg.com/vi/${i}/${e}default.jpg`;
                    Re(t("maxres"), 121)
                      .catch(() => Re(t("sd"), 121))
                      .catch(() => Re(t("hq")))
                      .then((t) => Ne.setPoster.call(e, t.src))
                      .then((t) => {
                        t.includes("maxres") ||
                          (e.elements.poster.style.backgroundSize = "cover");
                      })
                      .catch(() => {});
                  }
                  e.embed = new window.YT.Player(e.media, {
                    videoId: i,
                    host: We(t),
                    playerVars: T(
                      {},
                      {
                        autoplay: e.config.autoplay ? 1 : 0,
                        hl: e.config.hl,
                        controls: e.supported.ui && t.customControls ? 0 : 1,
                        disablekb: 1,
                        playsinline:
                          e.config.playsinline && !e.config.fullscreen.iosNative
                            ? 1
                            : 0,
                        cc_load_policy: e.captions.active ? 1 : 0,
                        cc_lang_pref: e.config.captions.language,
                        widget_referrer: window ? window.location.href : null,
                      },
                      t
                    ),
                    events: {
                      onError(t) {
                        if (!e.media.error) {
                          const n = t.data,
                            r =
                              {
                                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                101: "The owner of the requested video does not allow it to be played in embedded players.",
                                150: "The owner of the requested video does not allow it to be played in embedded players.",
                              }[n] || "An unknown error occurred";
                          (e.media.error = { code: n, message: r }),
                            Q.call(e, e.media, "error");
                        }
                      },
                      onPlaybackRateChange(t) {
                        const n = t.target;
                        (e.media.playbackRate = n.getPlaybackRate()),
                          Q.call(e, e.media, "ratechange");
                      },
                      onReady(n) {
                        if (B.function(e.media.play)) return;
                        const r = n.target;
                        qe.getTitle.call(e, i),
                          (e.media.play = () => {
                            $e.call(e, !0), r.playVideo();
                          }),
                          (e.media.pause = () => {
                            $e.call(e, !1), r.pauseVideo();
                          }),
                          (e.media.stop = () => {
                            r.stopVideo();
                          }),
                          (e.media.duration = r.getDuration()),
                          (e.media.paused = !0),
                          (e.media.currentTime = 0),
                          Object.defineProperty(e.media, "currentTime", {
                            get: () => Number(r.getCurrentTime()),
                            set(t) {
                              e.paused && !e.embed.hasPlayed && e.embed.mute(),
                                (e.media.seeking = !0),
                                Q.call(e, e.media, "seeking"),
                                r.seekTo(t);
                            },
                          }),
                          Object.defineProperty(e.media, "playbackRate", {
                            get: () => r.getPlaybackRate(),
                            set(e) {
                              r.setPlaybackRate(e);
                            },
                          });
                        let { volume: o } = e.config;
                        Object.defineProperty(e.media, "volume", {
                          get: () => o,
                          set(t) {
                            (o = t),
                              r.setVolume(100 * o),
                              Q.call(e, e.media, "volumechange");
                          },
                        });
                        let { muted: s } = e.config;
                        Object.defineProperty(e.media, "muted", {
                          get: () => s,
                          set(t) {
                            const n = B.boolean(t) ? t : s;
                            (s = n),
                              r[n ? "mute" : "unMute"](),
                              r.setVolume(100 * o),
                              Q.call(e, e.media, "volumechange");
                          },
                        }),
                          Object.defineProperty(e.media, "currentSrc", {
                            get: () => r.getVideoUrl(),
                          }),
                          Object.defineProperty(e.media, "ended", {
                            get: () => e.currentTime === e.duration,
                          });
                        const a = r.getAvailablePlaybackRates();
                        (e.options.speed = a.filter((t) =>
                          e.config.speed.options.includes(t)
                        )),
                          e.supported.ui &&
                            t.customControls &&
                            e.media.setAttribute("tabindex", -1),
                          Q.call(e, e.media, "timeupdate"),
                          Q.call(e, e.media, "durationchange"),
                          clearInterval(e.timers.buffering),
                          (e.timers.buffering = setInterval(() => {
                            (e.media.buffered = r.getVideoLoadedFraction()),
                              (null === e.media.lastBuffered ||
                                e.media.lastBuffered < e.media.buffered) &&
                                Q.call(e, e.media, "progress"),
                              (e.media.lastBuffered = e.media.buffered),
                              1 === e.media.buffered &&
                                (clearInterval(e.timers.buffering),
                                Q.call(e, e.media, "canplaythrough"));
                          }, 200)),
                          t.customControls &&
                            setTimeout(() => Ne.build.call(e), 50);
                      },
                      onStateChange(n) {
                        const r = n.target;
                        switch (
                          (clearInterval(e.timers.playing),
                          e.media.seeking &&
                            [1, 2].includes(n.data) &&
                            ((e.media.seeking = !1),
                            Q.call(e, e.media, "seeked")),
                          n.data)
                        ) {
                          case -1:
                            Q.call(e, e.media, "timeupdate"),
                              (e.media.buffered = r.getVideoLoadedFraction()),
                              Q.call(e, e.media, "progress");
                            break;
                          case 0:
                            $e.call(e, !1),
                              e.media.loop
                                ? (r.stopVideo(), r.playVideo())
                                : Q.call(e, e.media, "ended");
                            break;
                          case 1:
                            t.customControls &&
                            !e.config.autoplay &&
                            e.media.paused &&
                            !e.embed.hasPlayed
                              ? e.media.pause()
                              : ($e.call(e, !0),
                                Q.call(e, e.media, "playing"),
                                (e.timers.playing = setInterval(() => {
                                  Q.call(e, e.media, "timeupdate");
                                }, 50)),
                                e.media.duration !== r.getDuration() &&
                                  ((e.media.duration = r.getDuration()),
                                  Q.call(e, e.media, "durationchange")));
                            break;
                          case 2:
                            e.muted || e.embed.unMute(), $e.call(e, !1);
                            break;
                          case 3:
                            Q.call(e, e.media, "waiting");
                        }
                        Q.call(e, e.elements.container, "statechange", !1, {
                          code: n.data,
                        });
                      },
                    },
                  });
                },
              },
              Ue = {
                setup() {
                  this.media
                    ? (V(
                        this.elements.container,
                        this.config.classNames.type.replace("{0}", this.type),
                        !0
                      ),
                      V(
                        this.elements.container,
                        this.config.classNames.provider.replace(
                          "{0}",
                          this.provider
                        ),
                        !0
                      ),
                      this.isEmbed &&
                        V(
                          this.elements.container,
                          this.config.classNames.type.replace("{0}", "video"),
                          !0
                        ),
                      this.isVideo &&
                        ((this.elements.wrapper = O("div", {
                          class: this.config.classNames.video,
                        })),
                        S(this.media, this.elements.wrapper),
                        (this.elements.poster = O("div", {
                          class: this.config.classNames.poster,
                        })),
                        this.elements.wrapper.appendChild(
                          this.elements.poster
                        )),
                      this.isHTML5
                        ? he.setup.call(this)
                        : this.isYouTube
                        ? qe.setup.call(this)
                        : this.isVimeo && ze.setup.call(this))
                    : this.debug.warn("No media element found!");
                },
              };
            class He {
              constructor(t) {
                e(this, "load", () => {
                  this.enabled &&
                    (B.object(window.google) && B.object(window.google.ima)
                      ? this.ready()
                      : Ie(this.player.config.urls.googleIMA.sdk)
                          .then(() => {
                            this.ready();
                          })
                          .catch(() => {
                            this.trigger(
                              "error",
                              new Error("Google IMA SDK failed to load")
                            );
                          }));
                }),
                  e(this, "ready", () => {
                    var e;
                    this.enabled ||
                      ((e = this).manager && e.manager.destroy(),
                      e.elements.displayContainer &&
                        e.elements.displayContainer.destroy(),
                      e.elements.container.remove()),
                      this.startSafetyTimer(12e3, "ready()"),
                      this.managerPromise.then(() => {
                        this.clearSafetyTimer("onAdsManagerLoaded()");
                      }),
                      this.listeners(),
                      this.setupIMA();
                  }),
                  e(this, "setupIMA", () => {
                    (this.elements.container = O("div", {
                      class: this.player.config.classNames.ads,
                    })),
                      this.player.elements.container.appendChild(
                        this.elements.container
                      ),
                      google.ima.settings.setVpaidMode(
                        google.ima.ImaSdkSettings.VpaidMode.ENABLED
                      ),
                      google.ima.settings.setLocale(
                        this.player.config.ads.language
                      ),
                      google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                        this.player.config.playsinline
                      ),
                      (this.elements.displayContainer =
                        new google.ima.AdDisplayContainer(
                          this.elements.container,
                          this.player.media
                        )),
                      (this.loader = new google.ima.AdsLoader(
                        this.elements.displayContainer
                      )),
                      this.loader.addEventListener(
                        google.ima.AdsManagerLoadedEvent.Type
                          .ADS_MANAGER_LOADED,
                        (e) => this.onAdsManagerLoaded(e),
                        !1
                      ),
                      this.loader.addEventListener(
                        google.ima.AdErrorEvent.Type.AD_ERROR,
                        (e) => this.onAdError(e),
                        !1
                      ),
                      this.requestAds();
                  }),
                  e(this, "requestAds", () => {
                    const { container: e } = this.player.elements;
                    try {
                      const t = new google.ima.AdsRequest();
                      (t.adTagUrl = this.tagUrl),
                        (t.linearAdSlotWidth = e.offsetWidth),
                        (t.linearAdSlotHeight = e.offsetHeight),
                        (t.nonLinearAdSlotWidth = e.offsetWidth),
                        (t.nonLinearAdSlotHeight = e.offsetHeight),
                        (t.forceNonLinearFullSlot = !1),
                        t.setAdWillPlayMuted(!this.player.muted),
                        this.loader.requestAds(t);
                    } catch (e) {
                      this.onAdError(e);
                    }
                  }),
                  e(this, "pollCountdown", (e = !1) => {
                    if (!e)
                      return (
                        clearInterval(this.countdownTimer),
                        void this.elements.container.removeAttribute(
                          "data-badge-text"
                        )
                      );
                    this.countdownTimer = setInterval(() => {
                      const e = Ee(
                          Math.max(this.manager.getRemainingTime(), 0)
                        ),
                        t = `${ye.get(
                          "advertisement",
                          this.player.config
                        )} - ${e}`;
                      this.elements.container.setAttribute(
                        "data-badge-text",
                        t
                      );
                    }, 100);
                  }),
                  e(this, "onAdsManagerLoaded", (e) => {
                    if (!this.enabled) return;
                    const t = new google.ima.AdsRenderingSettings();
                    (t.restoreCustomPlaybackStateOnAdBreakComplete = !0),
                      (t.enablePreloading = !0),
                      (this.manager = e.getAdsManager(this.player, t)),
                      (this.cuePoints = this.manager.getCuePoints()),
                      this.manager.addEventListener(
                        google.ima.AdErrorEvent.Type.AD_ERROR,
                        (e) => this.onAdError(e)
                      ),
                      Object.keys(google.ima.AdEvent.Type).forEach((e) => {
                        this.manager.addEventListener(
                          google.ima.AdEvent.Type[e],
                          (e) => this.onAdEvent(e)
                        );
                      }),
                      this.trigger("loaded");
                  }),
                  e(this, "addCuePoints", () => {
                    B.empty(this.cuePoints) ||
                      this.cuePoints.forEach((e) => {
                        if (0 !== e && -1 !== e && e < this.player.duration) {
                          const t = this.player.elements.progress;
                          if (B.element(t)) {
                            const n = (100 / this.player.duration) * e,
                              r = O("span", {
                                class: this.player.config.classNames.cues,
                              });
                            (r.style.left = `${n.toString()}%`),
                              t.appendChild(r);
                          }
                        }
                      });
                  }),
                  e(this, "onAdEvent", (e) => {
                    const { container: t } = this.player.elements,
                      n = e.getAd(),
                      r = e.getAdData();
                    switch (
                      (((e) => {
                        Q.call(
                          this.player,
                          this.player.media,
                          `ads${e.replace(/_/g, "").toLowerCase()}`
                        );
                      })(e.type),
                      e.type)
                    ) {
                      case google.ima.AdEvent.Type.LOADED:
                        this.trigger("loaded"),
                          this.pollCountdown(!0),
                          n.isLinear() ||
                            ((n.width = t.offsetWidth),
                            (n.height = t.offsetHeight));
                        break;
                      case google.ima.AdEvent.Type.STARTED:
                        this.manager.setVolume(this.player.volume);
                        break;
                      case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                        this.player.ended
                          ? this.loadAds()
                          : this.loader.contentComplete();
                        break;
                      case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                        this.pauseContent();
                        break;
                      case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                        this.pollCountdown(), this.resumeContent();
                        break;
                      case google.ima.AdEvent.Type.LOG:
                        r.adError &&
                          this.player.debug.warn(
                            `Non-fatal ad error: ${r.adError.getMessage()}`
                          );
                    }
                  }),
                  e(this, "onAdError", (e) => {
                    this.cancel(), this.player.debug.warn("Ads error", e);
                  }),
                  e(this, "listeners", () => {
                    const { container: e } = this.player.elements;
                    let t;
                    this.player.on("canplay", () => {
                      this.addCuePoints();
                    }),
                      this.player.on("ended", () => {
                        this.loader.contentComplete();
                      }),
                      this.player.on("timeupdate", () => {
                        t = this.player.currentTime;
                      }),
                      this.player.on("seeked", () => {
                        const e = this.player.currentTime;
                        B.empty(this.cuePoints) ||
                          this.cuePoints.forEach((n, r) => {
                            t < n &&
                              n < e &&
                              (this.manager.discardAdBreak(),
                              this.cuePoints.splice(r, 1));
                          });
                      }),
                      window.addEventListener("resize", () => {
                        this.manager &&
                          this.manager.resize(
                            e.offsetWidth,
                            e.offsetHeight,
                            google.ima.ViewMode.NORMAL
                          );
                      });
                  }),
                  e(this, "play", () => {
                    const { container: e } = this.player.elements;
                    this.managerPromise || this.resumeContent(),
                      this.managerPromise
                        .then(() => {
                          this.manager.setVolume(this.player.volume),
                            this.elements.displayContainer.initialize();
                          try {
                            this.initialized ||
                              (this.manager.init(
                                e.offsetWidth,
                                e.offsetHeight,
                                google.ima.ViewMode.NORMAL
                              ),
                              this.manager.start()),
                              (this.initialized = !0);
                          } catch (e) {
                            this.onAdError(e);
                          }
                        })
                        .catch(() => {});
                  }),
                  e(this, "resumeContent", () => {
                    (this.elements.container.style.zIndex = ""),
                      (this.playing = !1),
                      ne(this.player.media.play());
                  }),
                  e(this, "pauseContent", () => {
                    (this.elements.container.style.zIndex = 3),
                      (this.playing = !0),
                      this.player.media.pause();
                  }),
                  e(this, "cancel", () => {
                    this.initialized && this.resumeContent(),
                      this.trigger("error"),
                      this.loadAds();
                  }),
                  e(this, "loadAds", () => {
                    this.managerPromise
                      .then(() => {
                        this.manager && this.manager.destroy(),
                          (this.managerPromise = new Promise((e) => {
                            this.on("loaded", e),
                              this.player.debug.log(this.manager);
                          })),
                          (this.initialized = !1),
                          this.requestAds();
                      })
                      .catch(() => {});
                  }),
                  e(this, "trigger", (e, ...t) => {
                    const n = this.events[e];
                    B.array(n) &&
                      n.forEach((e) => {
                        B.function(e) && e.apply(this, t);
                      });
                  }),
                  e(
                    this,
                    "on",
                    (e, t) => (
                      B.array(this.events[e]) || (this.events[e] = []),
                      this.events[e].push(t),
                      this
                    )
                  ),
                  e(this, "startSafetyTimer", (e, t) => {
                    this.player.debug.log(`Safety timer invoked from: ${t}`),
                      (this.safetyTimer = setTimeout(() => {
                        this.cancel(),
                          this.clearSafetyTimer("startSafetyTimer()");
                      }, e));
                  }),
                  e(this, "clearSafetyTimer", (e) => {
                    B.nullOrUndefined(this.safetyTimer) ||
                      (this.player.debug.log(`Safety timer cleared from: ${e}`),
                      clearTimeout(this.safetyTimer),
                      (this.safetyTimer = null));
                  }),
                  (this.player = t),
                  (this.config = t.config.ads),
                  (this.playing = !1),
                  (this.initialized = !1),
                  (this.elements = { container: null, displayContainer: null }),
                  (this.manager = null),
                  (this.loader = null),
                  (this.cuePoints = null),
                  (this.events = {}),
                  (this.safetyTimer = null),
                  (this.countdownTimer = null),
                  (this.managerPromise = new Promise((e, t) => {
                    this.on("loaded", e), this.on("error", t);
                  })),
                  this.load();
              }
              get enabled() {
                const { config: e } = this;
                return (
                  this.player.isHTML5 &&
                  this.player.isVideo &&
                  e.enabled &&
                  (!B.empty(e.publisherId) || B.url(e.tagUrl))
                );
              }
              get tagUrl() {
                const { config: e } = this;
                return B.url(e.tagUrl)
                  ? e.tagUrl
                  : `https://go.aniview.com/api/adserver6/vast/?${xe({
                      AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                      AV_CHANNELID: "5a0458dc28a06145e4519d21",
                      AV_URL: window.location.hostname,
                      cb: Date.now(),
                      AV_WIDTH: 640,
                      AV_HEIGHT: 480,
                      AV_CDIM2: e.publisherId,
                    })}`;
              }
            }
            function Ze(e = 0, t = 0, n = 255) {
              return Math.min(Math.max(e, t), n);
            }
            const Ye = (e) => {
                const t = [];
                return (
                  e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e) => {
                    const n = {};
                    e.split(/\r\n|\n|\r/).forEach((e) => {
                      if (B.number(n.startTime)) {
                        if (!B.empty(e.trim()) && B.empty(n.text)) {
                          const t = e.trim().split("#xywh=");
                          ([n.text] = t),
                            t[1] && ([n.x, n.y, n.w, n.h] = t[1].split(","));
                        }
                      } else {
                        const t = e.match(
                          /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                        );
                        t &&
                          ((n.startTime =
                            60 * Number(t[1] || 0) * 60 +
                            60 * Number(t[2]) +
                            Number(t[3]) +
                            Number(`0.${t[4]}`)),
                          (n.endTime =
                            60 * Number(t[6] || 0) * 60 +
                            60 * Number(t[7]) +
                            Number(t[8]) +
                            Number(`0.${t[9]}`)));
                      }
                    }),
                      n.text && t.push(n);
                  }),
                  t
                );
              },
              Ge = (e, t) => {
                const n = {};
                return (
                  e > t.width / t.height
                    ? ((n.width = t.width), (n.height = (1 / e) * t.width))
                    : ((n.height = t.height), (n.width = e * t.height)),
                  n
                );
              };
            class Xe {
              constructor(t) {
                e(this, "load", () => {
                  this.player.elements.display.seekTooltip &&
                    (this.player.elements.display.seekTooltip.hidden =
                      this.enabled),
                    this.enabled &&
                      this.getThumbnails().then(() => {
                        this.enabled &&
                          (this.render(),
                          this.determineContainerAutoSizing(),
                          this.listeners(),
                          (this.loaded = !0));
                      });
                }),
                  e(
                    this,
                    "getThumbnails",
                    () =>
                      new Promise((e) => {
                        const { src: t } = this.player.config.previewThumbnails;
                        if (B.empty(t))
                          throw new Error(
                            "Missing previewThumbnails.src config attribute"
                          );
                        const n = () => {
                          this.thumbnails.sort((e, t) => e.height - t.height),
                            this.player.debug.log(
                              "Preview thumbnails",
                              this.thumbnails
                            ),
                            e();
                        };
                        if (B.function(t))
                          t((e) => {
                            (this.thumbnails = e), n();
                          });
                        else {
                          const e = (B.string(t) ? [t] : t).map((e) =>
                            this.getThumbnail(e)
                          );
                          Promise.all(e).then(n);
                        }
                      })
                  ),
                  e(
                    this,
                    "getThumbnail",
                    (e) =>
                      new Promise((t) => {
                        Ce(e).then((n) => {
                          const r = {
                            frames: Ye(n),
                            height: null,
                            urlPrefix: "",
                          };
                          r.frames[0].text.startsWith("/") ||
                            r.frames[0].text.startsWith("http://") ||
                            r.frames[0].text.startsWith("https://") ||
                            (r.urlPrefix = e.substring(
                              0,
                              e.lastIndexOf("/") + 1
                            ));
                          const i = new Image();
                          (i.onload = () => {
                            (r.height = i.naturalHeight),
                              (r.width = i.naturalWidth),
                              this.thumbnails.push(r),
                              t();
                          }),
                            (i.src = r.urlPrefix + r.frames[0].text);
                        });
                      })
                  ),
                  e(this, "startMove", (e) => {
                    if (
                      this.loaded &&
                      B.event(e) &&
                      ["touchmove", "mousemove"].includes(e.type) &&
                      this.player.media.duration
                    ) {
                      if ("touchmove" === e.type)
                        this.seekTime =
                          this.player.media.duration *
                          (this.player.elements.inputs.seek.value / 100);
                      else {
                        var t, n;
                        const r =
                            this.player.elements.progress.getBoundingClientRect(),
                          i = (100 / r.width) * (e.pageX - r.left);
                        (this.seekTime =
                          this.player.media.duration * (i / 100)),
                          this.seekTime < 0 && (this.seekTime = 0),
                          this.seekTime > this.player.media.duration - 1 &&
                            (this.seekTime = this.player.media.duration - 1),
                          (this.mousePosX = e.pageX),
                          (this.elements.thumb.time.innerText = Ee(
                            this.seekTime
                          ));
                        const o =
                          null === (t = this.player.config.markers) ||
                          void 0 === t ||
                          null === (n = t.points) ||
                          void 0 === n
                            ? void 0
                            : n.find(
                                ({ time: e }) => e === Math.round(this.seekTime)
                              );
                        o &&
                          this.elements.thumb.time.insertAdjacentHTML(
                            "afterbegin",
                            `${o.label}<br>`
                          );
                      }
                      this.showImageAtCurrentTime();
                    }
                  }),
                  e(this, "endMove", () => {
                    this.toggleThumbContainer(!1, !0);
                  }),
                  e(this, "startScrubbing", (e) => {
                    (B.nullOrUndefined(e.button) ||
                      !1 === e.button ||
                      0 === e.button) &&
                      ((this.mouseDown = !0),
                      this.player.media.duration &&
                        (this.toggleScrubbingContainer(!0),
                        this.toggleThumbContainer(!1, !0),
                        this.showImageAtCurrentTime()));
                  }),
                  e(this, "endScrubbing", () => {
                    (this.mouseDown = !1),
                      Math.ceil(this.lastTime) ===
                      Math.ceil(this.player.media.currentTime)
                        ? this.toggleScrubbingContainer(!1)
                        : J.call(
                            this.player,
                            this.player.media,
                            "timeupdate",
                            () => {
                              this.mouseDown ||
                                this.toggleScrubbingContainer(!1);
                            }
                          );
                  }),
                  e(this, "listeners", () => {
                    this.player.on("play", () => {
                      this.toggleThumbContainer(!1, !0);
                    }),
                      this.player.on("seeked", () => {
                        this.toggleThumbContainer(!1);
                      }),
                      this.player.on("timeupdate", () => {
                        this.lastTime = this.player.media.currentTime;
                      });
                  }),
                  e(this, "render", () => {
                    (this.elements.thumb.container = O("div", {
                      class:
                        this.player.config.classNames.previewThumbnails
                          .thumbContainer,
                    })),
                      (this.elements.thumb.imageContainer = O("div", {
                        class:
                          this.player.config.classNames.previewThumbnails
                            .imageContainer,
                      })),
                      this.elements.thumb.container.appendChild(
                        this.elements.thumb.imageContainer
                      );
                    const e = O("div", {
                      class:
                        this.player.config.classNames.previewThumbnails
                          .timeContainer,
                    });
                    (this.elements.thumb.time = O("span", {}, "00:00")),
                      e.appendChild(this.elements.thumb.time),
                      this.elements.thumb.imageContainer.appendChild(e),
                      B.element(this.player.elements.progress) &&
                        this.player.elements.progress.appendChild(
                          this.elements.thumb.container
                        ),
                      (this.elements.scrubbing.container = O("div", {
                        class:
                          this.player.config.classNames.previewThumbnails
                            .scrubbingContainer,
                      })),
                      this.player.elements.wrapper.appendChild(
                        this.elements.scrubbing.container
                      );
                  }),
                  e(this, "destroy", () => {
                    this.elements.thumb.container &&
                      this.elements.thumb.container.remove(),
                      this.elements.scrubbing.container &&
                        this.elements.scrubbing.container.remove();
                  }),
                  e(this, "showImageAtCurrentTime", () => {
                    this.mouseDown
                      ? this.setScrubbingContainerSize()
                      : this.setThumbContainerSizeAndPos();
                    const e = this.thumbnails[0].frames.findIndex(
                        (e) =>
                          this.seekTime >= e.startTime &&
                          this.seekTime <= e.endTime
                      ),
                      t = e >= 0;
                    let n = 0;
                    this.mouseDown || this.toggleThumbContainer(t),
                      t &&
                        (this.thumbnails.forEach((t, r) => {
                          this.loadedImages.includes(t.frames[e].text) &&
                            (n = r);
                        }),
                        e !== this.showingThumb &&
                          ((this.showingThumb = e), this.loadImage(n)));
                  }),
                  e(this, "loadImage", (e = 0) => {
                    const t = this.showingThumb,
                      n = this.thumbnails[e],
                      { urlPrefix: r } = n,
                      i = n.frames[t],
                      o = n.frames[t].text,
                      s = r + o;
                    if (
                      this.currentImageElement &&
                      this.currentImageElement.dataset.filename === o
                    )
                      this.showImage(this.currentImageElement, i, e, t, o, !1),
                        (this.currentImageElement.dataset.index = t),
                        this.removeOldImages(this.currentImageElement);
                    else {
                      this.loadingImage &&
                        this.usingSprites &&
                        (this.loadingImage.onload = null);
                      const n = new Image();
                      (n.src = s),
                        (n.dataset.index = t),
                        (n.dataset.filename = o),
                        (this.showingThumbFilename = o),
                        this.player.debug.log(`Loading image: ${s}`),
                        (n.onload = () => this.showImage(n, i, e, t, o, !0)),
                        (this.loadingImage = n),
                        this.removeOldImages(n);
                    }
                  }),
                  e(this, "showImage", (e, t, n, r, i, o = !0) => {
                    this.player.debug.log(
                      `Showing thumb: ${i}. num: ${r}. qual: ${n}. newimg: ${o}`
                    ),
                      this.setImageSizeAndOffset(e, t),
                      o &&
                        (this.currentImageContainer.appendChild(e),
                        (this.currentImageElement = e),
                        this.loadedImages.includes(i) ||
                          this.loadedImages.push(i)),
                      this.preloadNearby(r, !0)
                        .then(this.preloadNearby(r, !1))
                        .then(this.getHigherQuality(n, e, t, i));
                  }),
                  e(this, "removeOldImages", (e) => {
                    Array.from(this.currentImageContainer.children).forEach(
                      (t) => {
                        if ("img" !== t.tagName.toLowerCase()) return;
                        const n = this.usingSprites ? 500 : 1e3;
                        if (
                          t.dataset.index !== e.dataset.index &&
                          !t.dataset.deleting
                        ) {
                          t.dataset.deleting = !0;
                          const { currentImageContainer: e } = this;
                          setTimeout(() => {
                            e.removeChild(t),
                              this.player.debug.log(
                                `Removing thumb: ${t.dataset.filename}`
                              );
                          }, n);
                        }
                      }
                    );
                  }),
                  e(
                    this,
                    "preloadNearby",
                    (e, t = !0) =>
                      new Promise((n) => {
                        setTimeout(() => {
                          const r = this.thumbnails[0].frames[e].text;
                          if (this.showingThumbFilename === r) {
                            let i;
                            i = t
                              ? this.thumbnails[0].frames.slice(e)
                              : this.thumbnails[0].frames.slice(0, e).reverse();
                            let o = !1;
                            i.forEach((e) => {
                              const t = e.text;
                              if (t !== r && !this.loadedImages.includes(t)) {
                                (o = !0),
                                  this.player.debug.log(
                                    `Preloading thumb filename: ${t}`
                                  );
                                const { urlPrefix: e } = this.thumbnails[0],
                                  r = e + t,
                                  i = new Image();
                                (i.src = r),
                                  (i.onload = () => {
                                    this.player.debug.log(
                                      `Preloaded thumb filename: ${t}`
                                    ),
                                      this.loadedImages.includes(t) ||
                                        this.loadedImages.push(t),
                                      n();
                                  });
                              }
                            }),
                              o || n();
                          }
                        }, 300);
                      })
                  ),
                  e(this, "getHigherQuality", (e, t, n, r) => {
                    if (e < this.thumbnails.length - 1) {
                      let i = t.naturalHeight;
                      this.usingSprites && (i = n.h),
                        i < this.thumbContainerHeight &&
                          setTimeout(() => {
                            this.showingThumbFilename === r &&
                              (this.player.debug.log(
                                `Showing higher quality thumb for: ${r}`
                              ),
                              this.loadImage(e + 1));
                          }, 300);
                    }
                  }),
                  e(this, "toggleThumbContainer", (e = !1, t = !1) => {
                    const n =
                      this.player.config.classNames.previewThumbnails
                        .thumbContainerShown;
                    this.elements.thumb.container.classList.toggle(n, e),
                      !e &&
                        t &&
                        ((this.showingThumb = null),
                        (this.showingThumbFilename = null));
                  }),
                  e(this, "toggleScrubbingContainer", (e = !1) => {
                    const t =
                      this.player.config.classNames.previewThumbnails
                        .scrubbingContainerShown;
                    this.elements.scrubbing.container.classList.toggle(t, e),
                      e ||
                        ((this.showingThumb = null),
                        (this.showingThumbFilename = null));
                  }),
                  e(this, "determineContainerAutoSizing", () => {
                    (this.elements.thumb.imageContainer.clientHeight > 20 ||
                      this.elements.thumb.imageContainer.clientWidth > 20) &&
                      (this.sizeSpecifiedInCSS = !0);
                  }),
                  e(this, "setThumbContainerSizeAndPos", () => {
                    const { imageContainer: e } = this.elements.thumb;
                    if (this.sizeSpecifiedInCSS) {
                      if (e.clientHeight > 20 && e.clientWidth < 20) {
                        const t = Math.floor(
                          e.clientHeight * this.thumbAspectRatio
                        );
                        e.style.width = `${t}px`;
                      } else if (e.clientHeight < 20 && e.clientWidth > 20) {
                        const t = Math.floor(
                          e.clientWidth / this.thumbAspectRatio
                        );
                        e.style.height = `${t}px`;
                      }
                    } else {
                      const t = Math.floor(
                        this.thumbContainerHeight * this.thumbAspectRatio
                      );
                      (e.style.height = `${this.thumbContainerHeight}px`),
                        (e.style.width = `${t}px`);
                    }
                    this.setThumbContainerPos();
                  }),
                  e(this, "setThumbContainerPos", () => {
                    const e =
                        this.player.elements.progress.getBoundingClientRect(),
                      t =
                        this.player.elements.container.getBoundingClientRect(),
                      { container: n } = this.elements.thumb,
                      r = t.left - e.left + 10,
                      i = t.right - e.left - n.clientWidth - 10,
                      o = this.mousePosX - e.left - n.clientWidth / 2,
                      s = Ze(o, r, i);
                    (n.style.left = `${s}px`),
                      n.style.setProperty(
                        "--preview-arrow-offset",
                        o - s + "px"
                      );
                  }),
                  e(this, "setScrubbingContainerSize", () => {
                    const { width: e, height: t } = Ge(this.thumbAspectRatio, {
                      width: this.player.media.clientWidth,
                      height: this.player.media.clientHeight,
                    });
                    (this.elements.scrubbing.container.style.width = `${e}px`),
                      (this.elements.scrubbing.container.style.height = `${t}px`);
                  }),
                  e(this, "setImageSizeAndOffset", (e, t) => {
                    if (!this.usingSprites) return;
                    const n = this.thumbContainerHeight / t.h;
                    (e.style.height = e.naturalHeight * n + "px"),
                      (e.style.width = e.naturalWidth * n + "px"),
                      (e.style.left = `-${t.x * n}px`),
                      (e.style.top = `-${t.y * n}px`);
                  }),
                  (this.player = t),
                  (this.thumbnails = []),
                  (this.loaded = !1),
                  (this.lastMouseMoveTime = Date.now()),
                  (this.mouseDown = !1),
                  (this.loadedImages = []),
                  (this.elements = { thumb: {}, scrubbing: {} }),
                  this.load();
              }
              get enabled() {
                return (
                  this.player.isHTML5 &&
                  this.player.isVideo &&
                  this.player.config.previewThumbnails.enabled
                );
              }
              get currentImageContainer() {
                return this.mouseDown
                  ? this.elements.scrubbing.container
                  : this.elements.thumb.imageContainer;
              }
              get usingSprites() {
                return Object.keys(this.thumbnails[0].frames[0]).includes("w");
              }
              get thumbAspectRatio() {
                return this.usingSprites
                  ? this.thumbnails[0].frames[0].w /
                      this.thumbnails[0].frames[0].h
                  : this.thumbnails[0].width / this.thumbnails[0].height;
              }
              get thumbContainerHeight() {
                if (this.mouseDown) {
                  const { height: e } = Ge(this.thumbAspectRatio, {
                    width: this.player.media.clientWidth,
                    height: this.player.media.clientHeight,
                  });
                  return e;
                }
                return this.sizeSpecifiedInCSS
                  ? this.elements.thumb.imageContainer.clientHeight
                  : Math.floor(
                      this.player.media.clientWidth / this.thumbAspectRatio / 4
                    );
              }
              get currentImageElement() {
                return this.mouseDown
                  ? this.currentScrubbingImageElement
                  : this.currentThumbnailImageElement;
              }
              set currentImageElement(e) {
                this.mouseDown
                  ? (this.currentScrubbingImageElement = e)
                  : (this.currentThumbnailImageElement = e);
              }
            }
            const Ke = {
              insertElements(e, t) {
                B.string(t)
                  ? _(e, this.media, { src: t })
                  : B.array(t) &&
                    t.forEach((t) => {
                      _(e, this.media, t);
                    });
              },
              change(e) {
                P(e, "sources.length")
                  ? (he.cancelRequests.call(this),
                    this.destroy.call(
                      this,
                      () => {
                        (this.options.quality = []),
                          R(this.media),
                          (this.media = null),
                          B.element(this.elements.container) &&
                            this.elements.container.removeAttribute("class");
                        const { sources: t, type: n } = e,
                          [{ provider: r = Te.html5, src: i }] = t,
                          o = "html5" === r ? n : "div",
                          s = "html5" === r ? {} : { src: i };
                        Object.assign(this, {
                          provider: r,
                          type: n,
                          supported: Z.check(n, r, this.config.playsinline),
                          media: O(o, s),
                        }),
                          this.elements.container.appendChild(this.media),
                          B.boolean(e.autoplay) &&
                            (this.config.autoplay = e.autoplay),
                          this.isHTML5 &&
                            (this.config.crossorigin &&
                              this.media.setAttribute("crossorigin", ""),
                            this.config.autoplay &&
                              this.media.setAttribute("autoplay", ""),
                            B.empty(e.poster) || (this.poster = e.poster),
                            this.config.loop.active &&
                              this.media.setAttribute("loop", ""),
                            this.config.muted &&
                              this.media.setAttribute("muted", ""),
                            this.config.playsinline &&
                              this.media.setAttribute("playsinline", "")),
                          Ne.addStyleHook.call(this),
                          this.isHTML5 &&
                            Ke.insertElements.call(this, "source", t),
                          (this.config.title = e.title),
                          Ue.setup.call(this),
                          this.isHTML5 &&
                            Object.keys(e).includes("tracks") &&
                            Ke.insertElements.call(this, "track", e.tracks),
                          (this.isHTML5 ||
                            (this.isEmbed && !this.supported.ui)) &&
                            Ne.build.call(this),
                          this.isHTML5 && this.media.load(),
                          B.empty(e.previewThumbnails) ||
                            (Object.assign(
                              this.config.previewThumbnails,
                              e.previewThumbnails
                            ),
                            this.previewThumbnails &&
                              this.previewThumbnails.loaded &&
                              (this.previewThumbnails.destroy(),
                              (this.previewThumbnails = null)),
                            this.config.previewThumbnails.enabled &&
                              (this.previewThumbnails = new Xe(this))),
                          this.fullscreen.update();
                      },
                      !0
                    ))
                  : this.debug.warn("Invalid source format");
              },
            };
            class Je {
              constructor(t, n) {
                if (
                  (e(this, "play", () =>
                    B.function(this.media.play)
                      ? (this.ads &&
                          this.ads.enabled &&
                          this.ads.managerPromise
                            .then(() => this.ads.play())
                            .catch(() => ne(this.media.play())),
                        this.media.play())
                      : null
                  ),
                  e(this, "pause", () =>
                    this.playing && B.function(this.media.pause)
                      ? this.media.pause()
                      : null
                  ),
                  e(this, "togglePlay", (e) =>
                    (B.boolean(e) ? e : !this.playing)
                      ? this.play()
                      : this.pause()
                  ),
                  e(this, "stop", () => {
                    this.isHTML5
                      ? (this.pause(), this.restart())
                      : B.function(this.media.stop) && this.media.stop();
                  }),
                  e(this, "restart", () => {
                    this.currentTime = 0;
                  }),
                  e(this, "rewind", (e) => {
                    this.currentTime -= B.number(e) ? e : this.config.seekTime;
                  }),
                  e(this, "forward", (e) => {
                    this.currentTime += B.number(e) ? e : this.config.seekTime;
                  }),
                  e(this, "increaseVolume", (e) => {
                    const t = this.media.muted ? 0 : this.volume;
                    this.volume = t + (B.number(e) ? e : 0);
                  }),
                  e(this, "decreaseVolume", (e) => {
                    this.increaseVolume(-e);
                  }),
                  e(this, "airplay", () => {
                    Z.airplay && this.media.webkitShowPlaybackTargetPicker();
                  }),
                  e(this, "toggleControls", (e) => {
                    if (this.supported.ui && !this.isAudio) {
                      const t = z(
                          this.elements.container,
                          this.config.classNames.hideControls
                        ),
                        n = void 0 === e ? void 0 : !e,
                        r = V(
                          this.elements.container,
                          this.config.classNames.hideControls,
                          n
                        );
                      if (
                        (r &&
                          B.array(this.config.controls) &&
                          this.config.controls.includes("settings") &&
                          !B.empty(this.config.settings) &&
                          Ae.toggleMenu.call(this, !1),
                        r !== t)
                      ) {
                        const e = r ? "controlshidden" : "controlsshown";
                        Q.call(this, this.media, e);
                      }
                      return !r;
                    }
                    return !1;
                  }),
                  e(this, "on", (e, t) => {
                    X.call(this, this.elements.container, e, t);
                  }),
                  e(this, "once", (e, t) => {
                    J.call(this, this.elements.container, e, t);
                  }),
                  e(this, "off", (e, t) => {
                    K(this.elements.container, e, t);
                  }),
                  e(this, "destroy", (e, t = !1) => {
                    if (!this.ready) return;
                    const n = () => {
                      (document.body.style.overflow = ""),
                        (this.embed = null),
                        t
                          ? (Object.keys(this.elements).length &&
                              (R(this.elements.buttons.play),
                              R(this.elements.captions),
                              R(this.elements.controls),
                              R(this.elements.wrapper),
                              (this.elements.buttons.play = null),
                              (this.elements.captions = null),
                              (this.elements.controls = null),
                              (this.elements.wrapper = null)),
                            B.function(e) && e())
                          : (ee.call(this),
                            he.cancelRequests.call(this),
                            j(this.elements.original, this.elements.container),
                            Q.call(
                              this,
                              this.elements.original,
                              "destroyed",
                              !0
                            ),
                            B.function(e) && e.call(this.elements.original),
                            (this.ready = !1),
                            setTimeout(() => {
                              (this.elements = null), (this.media = null);
                            }, 200));
                    };
                    this.stop(),
                      clearTimeout(this.timers.loading),
                      clearTimeout(this.timers.controls),
                      clearTimeout(this.timers.resized),
                      this.isHTML5
                        ? (Ne.toggleNativeControls.call(this, !0), n())
                        : this.isYouTube
                        ? (clearInterval(this.timers.buffering),
                          clearInterval(this.timers.playing),
                          null !== this.embed &&
                            B.function(this.embed.destroy) &&
                            this.embed.destroy(),
                          n())
                        : this.isVimeo &&
                          (null !== this.embed && this.embed.unload().then(n),
                          setTimeout(n, 200));
                  }),
                  e(this, "supports", (e) => Z.mime.call(this, e)),
                  (this.timers = {}),
                  (this.ready = !1),
                  (this.loading = !1),
                  (this.failed = !1),
                  (this.touch = Z.touch),
                  (this.media = t),
                  B.string(this.media) &&
                    (this.media = document.querySelectorAll(this.media)),
                  ((window.jQuery && this.media instanceof jQuery) ||
                    B.nodeList(this.media) ||
                    B.array(this.media)) &&
                    (this.media = this.media[0]),
                  (this.config = T(
                    {},
                    Fe,
                    Je.defaults,
                    n || {},
                    (() => {
                      try {
                        return JSON.parse(
                          this.media.getAttribute("data-plyr-config")
                        );
                      } catch (e) {
                        return {};
                      }
                    })()
                  )),
                  (this.elements = {
                    container: null,
                    fullscreen: null,
                    captions: null,
                    buttons: {},
                    display: {},
                    progress: {},
                    inputs: {},
                    settings: {
                      popup: null,
                      menu: null,
                      panels: {},
                      buttons: {},
                    },
                  }),
                  (this.captions = {
                    active: null,
                    currentTrack: -1,
                    meta: new WeakMap(),
                  }),
                  (this.fullscreen = { active: !1 }),
                  (this.options = { speed: [], quality: [] }),
                  (this.debug = new Oe(this.config.debug)),
                  this.debug.log("Config", this.config),
                  this.debug.log("Support", Z),
                  B.nullOrUndefined(this.media) || !B.element(this.media))
                )
                  return void this.debug.error(
                    "Setup failed: no suitable element passed"
                  );
                if (this.media.plyr)
                  return void this.debug.warn("Target already setup");
                if (!this.config.enabled)
                  return void this.debug.error(
                    "Setup failed: disabled by config"
                  );
                if (!Z.check().api)
                  return void this.debug.error("Setup failed: no support");
                const r = this.media.cloneNode(!0);
                (r.autoplay = !1), (this.elements.original = r);
                const i = this.media.tagName.toLowerCase();
                let o = null,
                  s = null;
                switch (i) {
                  case "div":
                    if (
                      ((o = this.media.querySelector("iframe")), B.element(o))
                    ) {
                      if (
                        ((s = Be(o.getAttribute("src"))),
                        (this.provider = (function (e) {
                          return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                            e
                          )
                            ? Te.youtube
                            : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                                e
                              )
                            ? Te.vimeo
                            : null;
                        })(s.toString())),
                        (this.elements.container = this.media),
                        (this.media = o),
                        (this.elements.container.className = ""),
                        s.search.length)
                      ) {
                        const e = ["1", "true"];
                        e.includes(s.searchParams.get("autoplay")) &&
                          (this.config.autoplay = !0),
                          e.includes(s.searchParams.get("loop")) &&
                            (this.config.loop.active = !0),
                          this.isYouTube
                            ? ((this.config.playsinline = e.includes(
                                s.searchParams.get("playsinline")
                              )),
                              (this.config.youtube.hl =
                                s.searchParams.get("hl")))
                            : (this.config.playsinline = !0);
                      }
                    } else
                      (this.provider = this.media.getAttribute(
                        this.config.attributes.embed.provider
                      )),
                        this.media.removeAttribute(
                          this.config.attributes.embed.provider
                        );
                    if (
                      B.empty(this.provider) ||
                      !Object.values(Te).includes(this.provider)
                    )
                      return void this.debug.error(
                        "Setup failed: Invalid provider"
                      );
                    this.type = Se;
                    break;
                  case "video":
                  case "audio":
                    (this.type = i),
                      (this.provider = Te.html5),
                      this.media.hasAttribute("crossorigin") &&
                        (this.config.crossorigin = !0),
                      this.media.hasAttribute("autoplay") &&
                        (this.config.autoplay = !0),
                      (this.media.hasAttribute("playsinline") ||
                        this.media.hasAttribute("webkit-playsinline")) &&
                        (this.config.playsinline = !0),
                      this.media.hasAttribute("muted") &&
                        (this.config.muted = !0),
                      this.media.hasAttribute("loop") &&
                        (this.config.loop.active = !0);
                    break;
                  default:
                    return void this.debug.error(
                      "Setup failed: unsupported type"
                    );
                }
                (this.supported = Z.check(this.type, this.provider)),
                  this.supported.api
                    ? ((this.eventListeners = []),
                      (this.listeners = new je(this)),
                      (this.storage = new be(this)),
                      (this.media.plyr = this),
                      B.element(this.elements.container) ||
                        ((this.elements.container = O("div")),
                        S(this.media, this.elements.container)),
                      Ne.migrateStyles.call(this),
                      Ne.addStyleHook.call(this),
                      Ue.setup.call(this),
                      this.config.debug &&
                        X.call(
                          this,
                          this.elements.container,
                          this.config.events.join(" "),
                          (e) => {
                            this.debug.log(`event: ${e.type}`);
                          }
                        ),
                      (this.fullscreen = new _e(this)),
                      (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                        Ne.build.call(this),
                      this.listeners.container(),
                      this.listeners.global(),
                      this.config.ads.enabled && (this.ads = new He(this)),
                      this.isHTML5 &&
                        this.config.autoplay &&
                        this.once("canplay", () => ne(this.play())),
                      (this.lastSeekTime = 0),
                      this.config.previewThumbnails.enabled &&
                        (this.previewThumbnails = new Xe(this)))
                    : this.debug.error("Setup failed: no support");
              }
              get isHTML5() {
                return this.provider === Te.html5;
              }
              get isEmbed() {
                return this.isYouTube || this.isVimeo;
              }
              get isYouTube() {
                return this.provider === Te.youtube;
              }
              get isVimeo() {
                return this.provider === Te.vimeo;
              }
              get isVideo() {
                return this.type === Se;
              }
              get isAudio() {
                return "audio" === this.type;
              }
              get playing() {
                return Boolean(this.ready && !this.paused && !this.ended);
              }
              get paused() {
                return Boolean(this.media.paused);
              }
              get stopped() {
                return Boolean(this.paused && 0 === this.currentTime);
              }
              get ended() {
                return Boolean(this.media.ended);
              }
              set currentTime(e) {
                if (!this.duration) return;
                const t = B.number(e) && e > 0;
                (this.media.currentTime = t ? Math.min(e, this.duration) : 0),
                  this.debug.log(`Seeking to ${this.currentTime} seconds`);
              }
              get currentTime() {
                return Number(this.media.currentTime);
              }
              get buffered() {
                const { buffered: e } = this.media;
                return B.number(e)
                  ? e
                  : e && e.length && this.duration > 0
                  ? e.end(0) / this.duration
                  : 0;
              }
              get seeking() {
                return Boolean(this.media.seeking);
              }
              get duration() {
                const e = parseFloat(this.config.duration),
                  t = (this.media || {}).duration,
                  n = B.number(t) && t !== 1 / 0 ? t : 0;
                return e || n;
              }
              set volume(e) {
                let t = e;
                B.string(t) && (t = Number(t)),
                  B.number(t) || (t = this.storage.get("volume")),
                  B.number(t) || ({ volume: t } = this.config),
                  t > 1 && (t = 1),
                  t < 0 && (t = 0),
                  (this.config.volume = t),
                  (this.media.volume = t),
                  !B.empty(e) && this.muted && t > 0 && (this.muted = !1);
              }
              get volume() {
                return Number(this.media.volume);
              }
              set muted(e) {
                let t = e;
                B.boolean(t) || (t = this.storage.get("muted")),
                  B.boolean(t) || (t = this.config.muted),
                  (this.config.muted = t),
                  (this.media.muted = t);
              }
              get muted() {
                return Boolean(this.media.muted);
              }
              get hasAudio() {
                return (
                  !this.isHTML5 ||
                  !!this.isAudio ||
                  Boolean(this.media.mozHasAudio) ||
                  Boolean(this.media.webkitAudioDecodedByteCount) ||
                  Boolean(
                    this.media.audioTracks && this.media.audioTracks.length
                  )
                );
              }
              set speed(e) {
                let t = null;
                B.number(e) && (t = e),
                  B.number(t) || (t = this.storage.get("speed")),
                  B.number(t) || (t = this.config.speed.selected);
                const { minimumSpeed: n, maximumSpeed: r } = this;
                (t = Ze(t, n, r)),
                  (this.config.speed.selected = t),
                  setTimeout(() => {
                    this.media && (this.media.playbackRate = t);
                  }, 0);
              }
              get speed() {
                return Number(this.media.playbackRate);
              }
              get minimumSpeed() {
                return this.isYouTube
                  ? Math.min(...this.options.speed)
                  : this.isVimeo
                  ? 0.5
                  : 0.0625;
              }
              get maximumSpeed() {
                return this.isYouTube
                  ? Math.max(...this.options.speed)
                  : this.isVimeo
                  ? 2
                  : 16;
              }
              set quality(e) {
                const t = this.config.quality,
                  n = this.options.quality;
                if (!n.length) return;
                let r = [
                    !B.empty(e) && Number(e),
                    this.storage.get("quality"),
                    t.selected,
                    t.default,
                  ].find(B.number),
                  i = !0;
                if (!n.includes(r)) {
                  const e = ie(n, r);
                  this.debug.warn(
                    `Unsupported quality option: ${r}, using ${e} instead`
                  ),
                    (r = e),
                    (i = !1);
                }
                (t.selected = r),
                  (this.media.quality = r),
                  i && this.storage.set({ quality: r });
              }
              get quality() {
                return this.media.quality;
              }
              set loop(e) {
                const t = B.boolean(e) ? e : this.config.loop.active;
                (this.config.loop.active = t), (this.media.loop = t);
              }
              get loop() {
                return Boolean(this.media.loop);
              }
              set source(e) {
                Ke.change.call(this, e);
              }
              get source() {
                return this.media.currentSrc;
              }
              get download() {
                const { download: e } = this.config.urls;
                return B.url(e) ? e : this.source;
              }
              set download(e) {
                B.url(e) &&
                  ((this.config.urls.download = e),
                  Ae.setDownloadUrl.call(this));
              }
              set poster(e) {
                this.isVideo
                  ? Ne.setPoster.call(this, e, !1).catch(() => {})
                  : this.debug.warn("Poster can only be set for video");
              }
              get poster() {
                return this.isVideo
                  ? this.media.getAttribute("poster") ||
                      this.media.getAttribute("data-poster")
                  : null;
              }
              get ratio() {
                if (!this.isVideo) return null;
                const e = ue(le.call(this));
                return B.array(e) ? e.join(":") : e;
              }
              set ratio(e) {
                this.isVideo
                  ? B.string(e) && ae(e)
                    ? ((this.config.ratio = ue(e)), ce.call(this))
                    : this.debug.error(`Invalid aspect ratio specified (${e})`)
                  : this.debug.warn("Aspect ratio can only be set for video");
              }
              set autoplay(e) {
                this.config.autoplay = B.boolean(e) ? e : this.config.autoplay;
              }
              get autoplay() {
                return Boolean(this.config.autoplay);
              }
              toggleCaptions(e) {
                ke.toggle.call(this, e, !1);
              }
              set currentTrack(e) {
                ke.set.call(this, e, !1), ke.setup.call(this);
              }
              get currentTrack() {
                const { toggled: e, currentTrack: t } = this.captions;
                return e ? t : -1;
              }
              set language(e) {
                ke.setLanguage.call(this, e, !1);
              }
              get language() {
                return (ke.getCurrentTrack.call(this) || {}).language;
              }
              set pip(e) {
                if (!Z.pip) return;
                const t = B.boolean(e) ? e : !this.pip;
                B.function(this.media.webkitSetPresentationMode) &&
                  this.media.webkitSetPresentationMode(t ? Pe : "inline"),
                  B.function(this.media.requestPictureInPicture) &&
                    (!this.pip && t
                      ? this.media.requestPictureInPicture()
                      : this.pip && !t && document.exitPictureInPicture());
              }
              get pip() {
                return Z.pip
                  ? B.empty(this.media.webkitPresentationMode)
                    ? this.media === document.pictureInPictureElement
                    : this.media.webkitPresentationMode === Pe
                  : null;
              }
              setPreviewThumbnails(e) {
                this.previewThumbnails &&
                  this.previewThumbnails.loaded &&
                  (this.previewThumbnails.destroy(),
                  (this.previewThumbnails = null)),
                  Object.assign(this.config.previewThumbnails, e),
                  this.config.previewThumbnails.enabled &&
                    (this.previewThumbnails = new Xe(this));
              }
              static supported(e, t) {
                return Z.check(e, t);
              }
              static loadSprite(e, t) {
                return De(e, t);
              }
              static setup(e, t = {}) {
                let n = null;
                return (
                  B.string(e)
                    ? (n = Array.from(document.querySelectorAll(e)))
                    : B.nodeList(e)
                    ? (n = Array.from(e))
                    : B.array(e) && (n = e.filter(B.element)),
                  B.empty(n) ? null : n.map((e) => new Je(e, t))
                );
              }
            }
            var Qe;
            return (
              (Je.defaults = ((Qe = Fe), JSON.parse(JSON.stringify(Qe)))), Je
            );
          })());
      },
      703: (e, t, n) => {
        "use strict";
        var r = n(414);
        function i() {}
        function o() {}
        (o.resetWarningCache = i),
          (e.exports = function () {
            function e(e, t, n, i, o, s) {
              if (s !== r) {
                var a = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((a.name = "Invariant Violation"), a);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: i,
            };
            return (n.PropTypes = n), n;
          });
      },
      697: (e, t, n) => {
        e.exports = n(703)();
      },
      414: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      921: (e, t) => {
        "use strict";
        var n = "function" == typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          i = n ? Symbol.for("react.portal") : 60106,
          o = n ? Symbol.for("react.fragment") : 60107,
          s = n ? Symbol.for("react.strict_mode") : 60108,
          a = n ? Symbol.for("react.profiler") : 60114,
          u = n ? Symbol.for("react.provider") : 60109,
          l = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          d = n ? Symbol.for("react.concurrent_mode") : 60111,
          h = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          m = n ? Symbol.for("react.suspense_list") : 60120,
          f = n ? Symbol.for("react.memo") : 60115,
          g = n ? Symbol.for("react.lazy") : 60116,
          v = n ? Symbol.for("react.block") : 60121,
          y = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          C = n ? Symbol.for("react.scope") : 60119;
        function D(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case d:
                  case o:
                  case a:
                  case s:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case l:
                      case h:
                      case g:
                      case f:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case i:
                return t;
            }
          }
        }
        function w(e) {
          return D(e) === d;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = d),
          (t.ContextConsumer = l),
          (t.ContextProvider = u),
          (t.Element = r),
          (t.ForwardRef = h),
          (t.Fragment = o),
          (t.Lazy = g),
          (t.Memo = f),
          (t.Portal = i),
          (t.Profiler = a),
          (t.StrictMode = s),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return w(e) || D(e) === c;
          }),
          (t.isConcurrentMode = w),
          (t.isContextConsumer = function (e) {
            return D(e) === l;
          }),
          (t.isContextProvider = function (e) {
            return D(e) === u;
          }),
          (t.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return D(e) === h;
          }),
          (t.isFragment = function (e) {
            return D(e) === o;
          }),
          (t.isLazy = function (e) {
            return D(e) === g;
          }),
          (t.isMemo = function (e) {
            return D(e) === f;
          }),
          (t.isPortal = function (e) {
            return D(e) === i;
          }),
          (t.isProfiler = function (e) {
            return D(e) === a;
          }),
          (t.isStrictMode = function (e) {
            return D(e) === s;
          }),
          (t.isSuspense = function (e) {
            return D(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === o ||
              e === d ||
              e === a ||
              e === s ||
              e === p ||
              e === m ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === g ||
                  e.$$typeof === f ||
                  e.$$typeof === u ||
                  e.$$typeof === l ||
                  e.$$typeof === h ||
                  e.$$typeof === y ||
                  e.$$typeof === b ||
                  e.$$typeof === C ||
                  e.$$typeof === v))
            );
          }),
          (t.typeOf = D);
      },
      864: (e, t, n) => {
        "use strict";
        e.exports = n(921);
      },
      251: (e, t, n) => {
        "use strict";
        var r = n(363),
          i = Symbol.for("react.element"),
          o = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          a = { key: !0, ref: !0, __self: !0, __source: !0 };
        t.jsx = function (e, t, n) {
          var r,
            u = {},
            l = null,
            c = null;
          for (r in (void 0 !== n && (l = "" + n),
          void 0 !== t.key && (l = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !a.hasOwnProperty(r) && (u[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === u[r] && (u[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: l,
            ref: c,
            props: u,
            _owner: s.current,
          };
        };
      },
      893: (e, t, n) => {
        "use strict";
        e.exports = n(251);
      },
      774: (e) => {
        e.exports = function (e, t, n, r) {
          var i = n ? n.call(r, e, t) : void 0;
          if (void 0 !== i) return !!i;
          if (e === t) return !0;
          if ("object" != typeof e || !e || "object" != typeof t || !t)
            return !1;
          var o = Object.keys(e),
            s = Object.keys(t);
          if (o.length !== s.length) return !1;
          for (
            var a = Object.prototype.hasOwnProperty.bind(t), u = 0;
            u < o.length;
            u++
          ) {
            var l = o[u];
            if (!a(l)) return !1;
            var c = e[l],
              d = t[l];
            if (
              !1 === (i = n ? n.call(r, c, d, l) : void 0) ||
              (void 0 === i && c !== d)
            )
              return !1;
          }
          return !0;
        };
      },
      363: (e) => {
        "use strict";
        e.exports = React;
      },
    },
    r = {};
  function i(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var o = (r[e] = { exports: {} });
    return n[e].call(o.exports, o, o.exports, i), o.exports;
  }
  (i.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return i.d(t, { a: t }), t;
  }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ("object" == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && "function" == typeof n.then) return n;
      }
      var o = Object.create(null);
      i.r(o);
      var s = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var a = 2 & r && n; "object" == typeof a && !~e.indexOf(a); a = t(a))
        Object.getOwnPropertyNames(a).forEach((e) => (s[e] = () => n[e]));
      return (s.default = () => n), i.d(o, s), o;
    }),
    (i.d = (e, t) => {
      for (var n in t)
        i.o(t, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.nc = void 0);
  var o = {};
  (() => {
    "use strict";
    i.r(o), i.d(o, { EmbedWidget: () => hm });
    var e = i(363),
      t = i.t(e, 2),
      n = i.n(e);
    const r = (0, e.createContext)({
        playAudio: () => {},
        pauseAudio: () => {},
        timestamps: [],
        setTimestamps: () => {},
        transcript: "",
        setTranscript: () => {},
        selectedOption: !1,
        setSelectedOption: () => {},
      }),
      s = ({ children: t }) => {
        const [i, o] = (0, e.useState)(null),
          [s, a] = (0, e.useState)([]),
          [u, l] = (0, e.useState)(""),
          [c, d] = (0, e.useState)({ 0: "dsfsgsdgsf" });
        return n().createElement(
          r.Provider,
          {
            value: {
              timestamps: s,
              setTimestamps: a,
              playAudio: (e) => {
                i && i !== e && i.pause(), o(e), e.play();
              },
              pauseAudio: () => {
                i && i.pause();
              },
              transcript: u,
              setTranscript: l,
              selectedOption: c,
              setSelectedOption: d,
            },
          },
          t
        );
      };
    function a(e) {
      return "[object Object]" === Object.prototype.toString.call(e);
    }
    function u(e) {
      var t, n;
      return (
        !1 !== a(e) &&
        (void 0 === (t = e.constructor) ||
          (!1 !== a((n = t.prototype)) &&
            !1 !== n.hasOwnProperty("isPrototypeOf")))
      );
    }
    function l(e) {
      for (
        var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      throw Error(
        "[Immer] minified error nr: " +
          e +
          (n.length
            ? " " +
              n
                .map(function (e) {
                  return "'" + e + "'";
                })
                .join(",")
            : "") +
          ". Find the full error at: https://bit.ly/3cXEKWf"
      );
    }
    function c(e) {
      return !!e && !!e[G];
    }
    function d(e) {
      var t;
      return (
        !!e &&
        ((function (e) {
          if (!e || "object" != typeof e) return !1;
          var t = Object.getPrototypeOf(e);
          if (null === t) return !0;
          var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
          return (
            n === Object ||
            ("function" == typeof n && Function.toString.call(n) === X)
          );
        })(e) ||
          Array.isArray(e) ||
          !!e[Y] ||
          !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[Y]) ||
          g(e) ||
          v(e))
      );
    }
    function h(e, t, n) {
      void 0 === n && (n = !1),
        0 === p(e)
          ? (n ? Object.keys : K)(e).forEach(function (r) {
              (n && "symbol" == typeof r) || t(r, e[r], e);
            })
          : e.forEach(function (n, r) {
              return t(r, n, e);
            });
    }
    function p(e) {
      var t = e[G];
      return t
        ? t.i > 3
          ? t.i - 4
          : t.i
        : Array.isArray(e)
        ? 1
        : g(e)
        ? 2
        : v(e)
        ? 3
        : 0;
    }
    function m(e, t) {
      return 2 === p(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
    }
    function f(e, t, n) {
      var r = p(e);
      2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
    }
    function g(e) {
      return q && e instanceof Map;
    }
    function v(e) {
      return U && e instanceof Set;
    }
    function y(e) {
      return e.o || e.t;
    }
    function b(e) {
      if (Array.isArray(e)) return Array.prototype.slice.call(e);
      var t = J(e);
      delete t[G];
      for (var n = K(t), r = 0; r < n.length; r++) {
        var i = n[r],
          o = t[i];
        !1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
          (o.get || o.set) &&
            (t[i] = {
              configurable: !0,
              writable: !0,
              enumerable: o.enumerable,
              value: e[i],
            });
      }
      return Object.create(Object.getPrototypeOf(e), t);
    }
    function C(e, t) {
      return (
        void 0 === t && (t = !1),
        w(e) ||
          c(e) ||
          !d(e) ||
          (p(e) > 1 && (e.set = e.add = e.clear = e.delete = D),
          Object.freeze(e),
          t &&
            h(
              e,
              function (e, t) {
                return C(t, !0);
              },
              !0
            )),
        e
      );
    }
    function D() {
      l(2);
    }
    function w(e) {
      return null == e || "object" != typeof e || Object.isFrozen(e);
    }
    function E(e) {
      var t = Q[e];
      return t || l(18, e), t;
    }
    function A() {
      return $;
    }
    function B(e, t) {
      t && (E("Patches"), (e.u = []), (e.s = []), (e.v = t));
    }
    function x(e) {
      k(e), e.p.forEach(P), (e.p = null);
    }
    function k(e) {
      e === $ && ($ = e.l);
    }
    function F(e) {
      return ($ = { p: [], l: $, h: e, m: !0, _: 0 });
    }
    function P(e) {
      var t = e[G];
      0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
    }
    function T(e, t) {
      t._ = t.p.length;
      var n = t.p[0],
        r = void 0 !== e && e !== n;
      return (
        t.h.O || E("ES5").S(t, e, r),
        r
          ? (n[G].P && (x(t), l(4)),
            d(e) && ((e = S(t, e)), t.l || O(t, e)),
            t.u && E("Patches").M(n[G].t, e, t.u, t.s))
          : (e = S(t, n, [])),
        x(t),
        t.u && t.v(t.u, t.s),
        e !== Z ? e : void 0
      );
    }
    function S(e, t, n) {
      if (w(t)) return t;
      var r = t[G];
      if (!r)
        return (
          h(
            t,
            function (i, o) {
              return M(e, r, t, i, o, n);
            },
            !0
          ),
          t
        );
      if (r.A !== e) return t;
      if (!r.P) return O(e, r.t, !0), r.t;
      if (!r.I) {
        (r.I = !0), r.A._--;
        var i = 4 === r.i || 5 === r.i ? (r.o = b(r.k)) : r.o,
          o = i,
          s = !1;
        3 === r.i && ((o = new Set(i)), i.clear(), (s = !0)),
          h(o, function (t, o) {
            return M(e, r, i, t, o, n, s);
          }),
          O(e, i, !1),
          n && e.u && E("Patches").N(r, n, e.u, e.s);
      }
      return r.o;
    }
    function M(e, t, n, r, i, o, s) {
      if (c(i)) {
        var a = S(
          e,
          i,
          o && t && 3 !== t.i && !m(t.R, r) ? o.concat(r) : void 0
        );
        if ((f(n, r, a), !c(a))) return;
        e.m = !1;
      } else s && n.add(i);
      if (d(i) && !w(i)) {
        if (!e.h.D && e._ < 1) return;
        S(e, i), (t && t.A.l) || O(e, i);
      }
    }
    function O(e, t, n) {
      void 0 === n && (n = !1), !e.l && e.h.D && e.m && C(t, n);
    }
    function _(e, t) {
      var n = e[G];
      return (n ? y(n) : e)[t];
    }
    function R(e, t) {
      if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
          var r = Object.getOwnPropertyDescriptor(n, t);
          if (r) return r;
          n = Object.getPrototypeOf(n);
        }
    }
    function N(e) {
      e.P || ((e.P = !0), e.l && N(e.l));
    }
    function j(e) {
      e.o || (e.o = b(e.t));
    }
    function L(e, t, n) {
      var r = g(t)
        ? E("MapSet").F(t, n)
        : v(t)
        ? E("MapSet").T(t, n)
        : e.O
        ? (function (e, t) {
            var n = Array.isArray(e),
              r = {
                i: n ? 1 : 0,
                A: t ? t.A : A(),
                P: !1,
                I: !1,
                R: {},
                l: t,
                t: e,
                k: null,
                o: null,
                j: null,
                C: !1,
              },
              i = r,
              o = ee;
            n && ((i = [r]), (o = te));
            var s = Proxy.revocable(i, o),
              a = s.revoke,
              u = s.proxy;
            return (r.k = u), (r.j = a), u;
          })(t, n)
        : E("ES5").J(t, n);
      return (n ? n.A : A()).p.push(r), r;
    }
    function I(e) {
      return (
        c(e) || l(22, e),
        (function e(t) {
          if (!d(t)) return t;
          var n,
            r = t[G],
            i = p(t);
          if (r) {
            if (!r.P && (r.i < 4 || !E("ES5").K(r))) return r.t;
            (r.I = !0), (n = V(t, i)), (r.I = !1);
          } else n = V(t, i);
          return (
            h(n, function (t, i) {
              (r &&
                (function (e, t) {
                  return 2 === p(e) ? e.get(t) : e[t];
                })(r.t, t) === i) ||
                f(n, t, e(i));
            }),
            3 === i ? new Set(n) : n
          );
        })(e)
      );
    }
    function V(e, t) {
      switch (t) {
        case 2:
          return new Map(e);
        case 3:
          return Array.from(e);
      }
      return b(e);
    }
    var z,
      $,
      W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
      q = "undefined" != typeof Map,
      U = "undefined" != typeof Set,
      H =
        "undefined" != typeof Proxy &&
        void 0 !== Proxy.revocable &&
        "undefined" != typeof Reflect,
      Z = W
        ? Symbol.for("immer-nothing")
        : (((z = {})["immer-nothing"] = !0), z),
      Y = W ? Symbol.for("immer-draftable") : "__$immer_draftable",
      G = W ? Symbol.for("immer-state") : "__$immer_state",
      X =
        ("undefined" != typeof Symbol && Symbol.iterator,
        "" + Object.prototype.constructor),
      K =
        "undefined" != typeof Reflect && Reflect.ownKeys
          ? Reflect.ownKeys
          : void 0 !== Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : Object.getOwnPropertyNames,
      J =
        Object.getOwnPropertyDescriptors ||
        function (e) {
          var t = {};
          return (
            K(e).forEach(function (n) {
              t[n] = Object.getOwnPropertyDescriptor(e, n);
            }),
            t
          );
        },
      Q = {},
      ee = {
        get: function (e, t) {
          if (t === G) return e;
          var n = y(e);
          if (!m(n, t))
            return (function (e, t, n) {
              var r,
                i = R(t, n);
              return i
                ? "value" in i
                  ? i.value
                  : null === (r = i.get) || void 0 === r
                  ? void 0
                  : r.call(e.k)
                : void 0;
            })(e, n, t);
          var r = n[t];
          return e.I || !d(r)
            ? r
            : r === _(e.t, t)
            ? (j(e), (e.o[t] = L(e.A.h, r, e)))
            : r;
        },
        has: function (e, t) {
          return t in y(e);
        },
        ownKeys: function (e) {
          return Reflect.ownKeys(y(e));
        },
        set: function (e, t, n) {
          var r = R(y(e), t);
          if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
          if (!e.P) {
            var i = _(y(e), t),
              o = null == i ? void 0 : i[G];
            if (o && o.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
            if (
              (function (e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
              })(n, i) &&
              (void 0 !== n || m(e.t, t))
            )
              return !0;
            j(e), N(e);
          }
          return (
            (e.o[t] === n && (void 0 !== n || t in e.o)) ||
              (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
              ((e.o[t] = n), (e.R[t] = !0)),
            !0
          );
        },
        deleteProperty: function (e, t) {
          return (
            void 0 !== _(e.t, t) || t in e.t
              ? ((e.R[t] = !1), j(e), N(e))
              : delete e.R[t],
            e.o && delete e.o[t],
            !0
          );
        },
        getOwnPropertyDescriptor: function (e, t) {
          var n = y(e),
            r = Reflect.getOwnPropertyDescriptor(n, t);
          return r
            ? {
                writable: !0,
                configurable: 1 !== e.i || "length" !== t,
                enumerable: r.enumerable,
                value: n[t],
              }
            : r;
        },
        defineProperty: function () {
          l(11);
        },
        getPrototypeOf: function (e) {
          return Object.getPrototypeOf(e.t);
        },
        setPrototypeOf: function () {
          l(12);
        },
      },
      te = {};
    h(ee, function (e, t) {
      te[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
      };
    }),
      (te.deleteProperty = function (e, t) {
        return te.set.call(this, e, t, void 0);
      }),
      (te.set = function (e, t, n) {
        return ee.set.call(this, e[0], t, n, e[0]);
      });
    var ne = (function () {
        function e(e) {
          var t = this;
          (this.O = H),
            (this.D = !0),
            (this.produce = function (e, n, r) {
              if ("function" == typeof e && "function" != typeof n) {
                var i = n;
                n = e;
                var o = t;
                return function (e) {
                  var t = this;
                  void 0 === e && (e = i);
                  for (
                    var r = arguments.length,
                      s = Array(r > 1 ? r - 1 : 0),
                      a = 1;
                    a < r;
                    a++
                  )
                    s[a - 1] = arguments[a];
                  return o.produce(e, function (e) {
                    var r;
                    return (r = n).call.apply(r, [t, e].concat(s));
                  });
                };
              }
              var s;
              if (
                ("function" != typeof n && l(6),
                void 0 !== r && "function" != typeof r && l(7),
                d(e))
              ) {
                var a = F(t),
                  u = L(t, e, void 0),
                  c = !0;
                try {
                  (s = n(u)), (c = !1);
                } finally {
                  c ? x(a) : k(a);
                }
                return "undefined" != typeof Promise && s instanceof Promise
                  ? s.then(
                      function (e) {
                        return B(a, r), T(e, a);
                      },
                      function (e) {
                        throw (x(a), e);
                      }
                    )
                  : (B(a, r), T(s, a));
              }
              if (!e || "object" != typeof e) {
                if (
                  (void 0 === (s = n(e)) && (s = e),
                  s === Z && (s = void 0),
                  t.D && C(s, !0),
                  r)
                ) {
                  var h = [],
                    p = [];
                  E("Patches").M(e, s, h, p), r(h, p);
                }
                return s;
              }
              l(21, e);
            }),
            (this.produceWithPatches = function (e, n) {
              if ("function" == typeof e)
                return function (n) {
                  for (
                    var r = arguments.length,
                      i = Array(r > 1 ? r - 1 : 0),
                      o = 1;
                    o < r;
                    o++
                  )
                    i[o - 1] = arguments[o];
                  return t.produceWithPatches(n, function (t) {
                    return e.apply(void 0, [t].concat(i));
                  });
                };
              var r,
                i,
                o = t.produce(e, n, function (e, t) {
                  (r = e), (i = t);
                });
              return "undefined" != typeof Promise && o instanceof Promise
                ? o.then(function (e) {
                    return [e, r, i];
                  })
                : [o, r, i];
            }),
            "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
              this.setUseProxies(e.useProxies),
            "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
              this.setAutoFreeze(e.autoFreeze);
        }
        var t = e.prototype;
        return (
          (t.createDraft = function (e) {
            d(e) || l(8), c(e) && (e = I(e));
            var t = F(this),
              n = L(this, e, void 0);
            return (n[G].C = !0), k(t), n;
          }),
          (t.finishDraft = function (e, t) {
            var n = (e && e[G]).A;
            return B(n, t), T(void 0, n);
          }),
          (t.setAutoFreeze = function (e) {
            this.D = e;
          }),
          (t.setUseProxies = function (e) {
            e && !H && l(20), (this.O = e);
          }),
          (t.applyPatches = function (e, t) {
            var n;
            for (n = t.length - 1; n >= 0; n--) {
              var r = t[n];
              if (0 === r.path.length && "replace" === r.op) {
                e = r.value;
                break;
              }
            }
            n > -1 && (t = t.slice(n + 1));
            var i = E("Patches").$;
            return c(e)
              ? i(e, t)
              : this.produce(e, function (e) {
                  return i(e, t);
                });
          }),
          e
        );
      })(),
      re = new ne(),
      ie = re.produce,
      oe =
        (re.produceWithPatches.bind(re),
        re.setAutoFreeze.bind(re),
        re.setUseProxies.bind(re),
        re.applyPatches.bind(re),
        re.createDraft.bind(re)),
      se = re.finishDraft.bind(re);
    function ae(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var ue = new WeakMap(),
      le = new WeakMap(),
      ce = (new WeakMap(), new WeakMap()),
      de = new WeakMap(),
      he = new WeakMap(),
      pe = new WeakMap();
    function me(e, t) {
      if (null == e) return {};
      var n,
        r,
        i = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            i = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]));
      }
      return i;
    }
    var fe,
      ge = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = !t,
          r = t ? we(e) : e,
          i = fe.None,
          o = fe.None,
          s = 0,
          a = null;
        for (var u of r) {
          var l = u.codePointAt(0);
          if (!l) break;
          var c = _e(u, l);
          if (
            (([i, o] = n ? [o, c] : [c, i]),
            Re(i, fe.ZWJ) &&
              Re(o, fe.ExtPict) &&
              !Ie(n ? e.substring(0, s) : e.substring(0, e.length - s)))
          )
            break;
          if (
            Re(i, fe.RI) &&
            Re(o, fe.RI) &&
            !(a = null !== a ? !a : !!n || ze(e.substring(0, e.length - s)))
          )
            break;
          if (i !== fe.None && o !== fe.None && je(i, o)) break;
          s += u.length;
        }
        return s || 1;
      },
      ve = /\s/,
      ye =
        /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
      be = /['\u2018\u2019]/,
      Ce = (e, t, n) => {
        if (n) {
          var r = e.length - t;
          return [e.slice(r, e.length), e.slice(0, r)];
        }
        return [e.slice(0, t), e.slice(t)];
      },
      De = function e(t, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (ve.test(t)) return !1;
        if (be.test(t)) {
          var i = ge(n, r),
            [o, s] = Ce(n, i, r);
          if (e(o, s, r)) return !0;
        }
        return !ye.test(t);
      },
      we = function* (e) {
        for (var t = e.length - 1, n = 0; n < e.length; n++) {
          var r = e.charAt(t - n);
          if (Ae(r.charCodeAt(0))) {
            var i = e.charAt(t - n - 1);
            if (Ee(i.charCodeAt(0))) {
              yield i + r, n++;
              continue;
            }
          }
          yield r;
        }
      },
      Ee = (e) => e >= 55296 && e <= 56319,
      Ae = (e) => e >= 56320 && e <= 57343;
    !(function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.Extend = 1)] = "Extend"),
        (e[(e.ZWJ = 2)] = "ZWJ"),
        (e[(e.RI = 4)] = "RI"),
        (e[(e.Prepend = 8)] = "Prepend"),
        (e[(e.SpacingMark = 16)] = "SpacingMark"),
        (e[(e.L = 32)] = "L"),
        (e[(e.V = 64)] = "V"),
        (e[(e.T = 128)] = "T"),
        (e[(e.LV = 256)] = "LV"),
        (e[(e.LVT = 512)] = "LVT"),
        (e[(e.ExtPict = 1024)] = "ExtPict"),
        (e[(e.Any = 2048)] = "Any");
    })(fe || (fe = {}));
    var Be =
        /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
      xe =
        /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
      ke =
        /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
      Fe = /^[\u1100-\u115F\uA960-\uA97C]$/,
      Pe = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
      Te = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
      Se =
        /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
      Me =
        /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
      Oe =
        /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
      _e = (e, t) => {
        var n = fe.Any;
        return (
          -1 !== e.search(Be) && (n |= fe.Extend),
          8205 === t && (n |= fe.ZWJ),
          t >= 127462 && t <= 127487 && (n |= fe.RI),
          -1 !== e.search(xe) && (n |= fe.Prepend),
          -1 !== e.search(ke) && (n |= fe.SpacingMark),
          -1 !== e.search(Fe) && (n |= fe.L),
          -1 !== e.search(Pe) && (n |= fe.V),
          -1 !== e.search(Te) && (n |= fe.T),
          -1 !== e.search(Se) && (n |= fe.LV),
          -1 !== e.search(Me) && (n |= fe.LVT),
          -1 !== e.search(Oe) && (n |= fe.ExtPict),
          n
        );
      };
    function Re(e, t) {
      return 0 != (e & t);
    }
    var Ne = [
      [fe.L, fe.L | fe.V | fe.LV | fe.LVT],
      [fe.LV | fe.V, fe.V | fe.T],
      [fe.LVT | fe.T, fe.T],
      [fe.Any, fe.Extend | fe.ZWJ],
      [fe.Any, fe.SpacingMark],
      [fe.Prepend, fe.Any],
      [fe.ZWJ, fe.ExtPict],
      [fe.RI, fe.RI],
    ];
    function je(e, t) {
      return -1 === Ne.findIndex((n) => Re(e, n[0]) && Re(t, n[1]));
    }
    var Le =
        /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
      Ie = (e) => -1 !== e.search(Le),
      Ve = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
      ze = (e) => {
        var t = e.match(Ve);
        return null !== t && (t[0].length / 2) % 2 == 1;
      },
      $e = (e) => u(e) && et.isNodeList(e.children) && !Ge.isEditor(e),
      We = {
        isAncestor: (e) => u(e) && et.isNodeList(e.children),
        isElement: $e,
        isElementList: (e) =>
          Array.isArray(e) && e.every((e) => We.isElement(e)),
        isElementProps: (e) => void 0 !== e.children,
        isElementType: function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "type";
          return $e(e) && e[n] === t;
        },
        matches(e, t) {
          for (var n in t) if ("children" !== n && e[n] !== t[n]) return !1;
          return !0;
        },
      },
      qe = ["text"],
      Ue = ["text"];
    function He(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ze(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? He(Object(n), !0).forEach(function (t) {
              ae(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : He(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Ye = new WeakMap(),
      Ge = {
        above(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            {
              voids: n = !1,
              mode: r = "lowest",
              at: i = e.selection,
              match: o,
            } = t;
          if (i) {
            var s = Ge.path(e, i),
              a = "lowest" === r;
            for (var [u, l] of Ge.levels(e, {
              at: s,
              voids: n,
              match: o,
              reverse: a,
            }))
              if (!yt.isText(u))
                if (ct.isRange(i)) {
                  if (
                    it.isAncestor(l, i.anchor.path) &&
                    it.isAncestor(l, i.focus.path)
                  )
                    return [u, l];
                } else if (!it.equals(s, l)) return [u, l];
          }
        },
        addMark(e, t, n) {
          e.addMark(t, n);
        },
        after(e, t) {
          var n,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = {
              anchor: Ge.point(e, t, { edge: "end" }),
              focus: Ge.end(e, []),
            },
            { distance: o = 1 } = r,
            s = 0;
          for (var a of Ge.positions(e, Ze(Ze({}, r), {}, { at: i }))) {
            if (s > o) break;
            0 !== s && (n = a), s++;
          }
          return n;
        },
        before(e, t) {
          var n,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = {
              anchor: Ge.start(e, []),
              focus: Ge.point(e, t, { edge: "start" }),
            },
            { distance: o = 1 } = r,
            s = 0;
          for (var a of Ge.positions(
            e,
            Ze(Ze({}, r), {}, { at: i, reverse: !0 })
          )) {
            if (s > o) break;
            0 !== s && (n = a), s++;
          }
          return n;
        },
        deleteBackward(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { unit: n = "character" } = t;
          e.deleteBackward(n);
        },
        deleteForward(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { unit: n = "character" } = t;
          e.deleteForward(n);
        },
        deleteFragment(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { direction: n = "forward" } = t;
          e.deleteFragment(n);
        },
        edges: (e, t) => [Ge.start(e, t), Ge.end(e, t)],
        end: (e, t) => Ge.point(e, t, { edge: "end" }),
        first(e, t) {
          var n = Ge.path(e, t, { edge: "start" });
          return Ge.node(e, n);
        },
        fragment(e, t) {
          var n = Ge.range(e, t);
          return et.fragment(e, n);
        },
        hasBlocks: (e, t) =>
          t.children.some((t) => We.isElement(t) && Ge.isBlock(e, t)),
        hasInlines: (e, t) =>
          t.children.some((t) => yt.isText(t) || Ge.isInline(e, t)),
        hasTexts: (e, t) => t.children.every((e) => yt.isText(e)),
        insertBreak(e) {
          e.insertBreak();
        },
        insertSoftBreak(e) {
          e.insertSoftBreak();
        },
        insertFragment(e, t) {
          e.insertFragment(t);
        },
        insertNode(e, t) {
          e.insertNode(t);
        },
        insertText(e, t) {
          e.insertText(t);
        },
        isBlock: (e, t) => !e.isInline(t),
        isEditor(e) {
          var t = Ye.get(e);
          if (void 0 !== t) return t;
          if (!u(e)) return !1;
          var n =
            "function" == typeof e.addMark &&
            "function" == typeof e.apply &&
            "function" == typeof e.deleteBackward &&
            "function" == typeof e.deleteForward &&
            "function" == typeof e.deleteFragment &&
            "function" == typeof e.insertBreak &&
            "function" == typeof e.insertSoftBreak &&
            "function" == typeof e.insertFragment &&
            "function" == typeof e.insertNode &&
            "function" == typeof e.insertText &&
            "function" == typeof e.isInline &&
            "function" == typeof e.isVoid &&
            "function" == typeof e.normalizeNode &&
            "function" == typeof e.onChange &&
            "function" == typeof e.removeMark &&
            "function" == typeof e.getDirtyPaths &&
            (null === e.marks || u(e.marks)) &&
            (null === e.selection || ct.isRange(e.selection)) &&
            et.isNodeList(e.children) &&
            rt.isOperationList(e.operations);
          return Ye.set(e, n), n;
        },
        isEnd(e, t, n) {
          var r = Ge.end(e, n);
          return at.equals(t, r);
        },
        isEdge: (e, t, n) => Ge.isStart(e, t, n) || Ge.isEnd(e, t, n),
        isEmpty(e, t) {
          var { children: n } = t,
            [r] = n;
          return (
            0 === n.length ||
            (1 === n.length && yt.isText(r) && "" === r.text && !e.isVoid(t))
          );
        },
        isInline: (e, t) => e.isInline(t),
        isNormalizing(e) {
          var t = ce.get(e);
          return void 0 === t || t;
        },
        isStart(e, t, n) {
          if (0 !== t.offset) return !1;
          var r = Ge.start(e, n);
          return at.equals(t, r);
        },
        isVoid: (e, t) => e.isVoid(t),
        last(e, t) {
          var n = Ge.path(e, t, { edge: "end" });
          return Ge.node(e, n);
        },
        leaf(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = Ge.path(e, t, n);
          return [et.leaf(e, r), r];
        },
        *levels(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { at: n = e.selection, reverse: r = !1, voids: i = !1 } = t,
            { match: o } = t;
          if ((null == o && (o = () => !0), n)) {
            var s = [],
              a = Ge.path(e, n);
            for (var [u, l] of et.levels(e, a))
              if (
                o(u, l) &&
                (s.push([u, l]), !i && We.isElement(u) && Ge.isVoid(e, u))
              )
                break;
            r && s.reverse(), yield* s;
          }
        },
        marks(e) {
          var { marks: t, selection: n } = e;
          if (!n) return null;
          if (t) return t;
          if (ct.isExpanded(n)) {
            var [r] = Ge.nodes(e, { match: yt.isText });
            if (r) {
              var [i] = r;
              return me(i, qe);
            }
            return {};
          }
          var { anchor: o } = n,
            { path: s } = o,
            [a] = Ge.leaf(e, s);
          if (0 === o.offset) {
            var u = Ge.previous(e, { at: s, match: yt.isText });
            if (
              !Ge.above(e, {
                match: (t) =>
                  We.isElement(t) && Ge.isVoid(e, t) && e.markableVoid(t),
              })
            ) {
              var l = Ge.above(e, {
                match: (t) => We.isElement(t) && Ge.isBlock(e, t),
              });
              if (u && l) {
                var [c, d] = u,
                  [, h] = l;
                it.isAncestor(h, d) && (a = c);
              }
            }
          }
          return me(a, Ue);
        },
        next(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { mode: n = "lowest", voids: r = !1 } = t,
            { match: i, at: o = e.selection } = t;
          if (o) {
            var s = Ge.after(e, o, { voids: r });
            if (s) {
              var [, a] = Ge.last(e, []),
                u = [s.path, a];
              if (it.isPath(o) && 0 === o.length)
                throw new Error("Cannot get the next node from the root node!");
              if (null == i)
                if (it.isPath(o)) {
                  var [l] = Ge.parent(e, o);
                  i = (e) => l.children.includes(e);
                } else i = () => !0;
              var [c] = Ge.nodes(e, { at: u, match: i, mode: n, voids: r });
              return c;
            }
          }
        },
        node(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = Ge.path(e, t, n);
          return [et.get(e, r), r];
        },
        *nodes(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            {
              at: n = e.selection,
              mode: r = "all",
              universal: i = !1,
              reverse: o = !1,
              voids: s = !1,
            } = t,
            { match: a } = t;
          if ((a || (a = () => !0), n)) {
            var u, l;
            if (Xe.isSpan(n)) (u = n[0]), (l = n[1]);
            else {
              var c = Ge.path(e, n, { edge: "start" }),
                d = Ge.path(e, n, { edge: "end" });
              (u = o ? d : c), (l = o ? c : d);
            }
            var h,
              p = et.nodes(e, {
                reverse: o,
                from: u,
                to: l,
                pass: (t) => {
                  var [n] = t;
                  return !s && We.isElement(n) && Ge.isVoid(e, n);
                },
              }),
              m = [];
            for (var [f, g] of p) {
              var v = h && 0 === it.compare(g, h[1]);
              if ("highest" !== r || !v)
                if (a(f, g))
                  if ("lowest" === r && v) h = [f, g];
                  else {
                    var y = "lowest" === r ? h : [f, g];
                    y && (i ? m.push(y) : yield y), (h = [f, g]);
                  }
                else if (i && !v && yt.isText(f)) return;
            }
            "lowest" === r && h && (i ? m.push(h) : yield h), i && (yield* m);
          }
        },
        normalize(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { force: n = !1, operation: r } = t,
            i = (e) => ue.get(e) || [],
            o = (e) => {
              var t = i(e).pop(),
                n = t.join(",");
              return ((e) => le.get(e) || new Set())(e).delete(n), t;
            };
          if (Ge.isNormalizing(e)) {
            if (n) {
              var s = Array.from(et.nodes(e), (e) => {
                  var [, t] = e;
                  return t;
                }),
                a = new Set(s.map((e) => e.join(",")));
              ue.set(e, s), le.set(e, a);
            }
            0 !== i(e).length &&
              Ge.withoutNormalizing(e, () => {
                for (var t of i(e))
                  if (et.has(e, t)) {
                    var n = Ge.node(e, t),
                      [s, a] = n;
                    We.isElement(s) &&
                      0 === s.children.length &&
                      e.normalizeNode(n, { operation: r });
                  }
                for (var u = i(e), l = u.length, c = 0; 0 !== u.length; ) {
                  if (
                    !e.shouldNormalize({
                      dirtyPaths: u,
                      iteration: c,
                      initialDirtyPathsLength: l,
                      operation: r,
                    })
                  )
                    return;
                  var d = o(e);
                  if (et.has(e, d)) {
                    var h = Ge.node(e, d);
                    e.normalizeNode(h, { operation: r });
                  }
                  c++, (u = i(e));
                }
              });
          }
        },
        parent(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = Ge.path(e, t, n),
            i = it.parent(r);
          return Ge.node(e, i);
        },
        path(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { depth: r, edge: i } = n;
          if (it.isPath(t))
            if ("start" === i) {
              var [, o] = et.first(e, t);
              t = o;
            } else if ("end" === i) {
              var [, s] = et.last(e, t);
              t = s;
            }
          return (
            ct.isRange(t) &&
              (t =
                "start" === i
                  ? ct.start(t)
                  : "end" === i
                  ? ct.end(t)
                  : it.common(t.anchor.path, t.focus.path)),
            at.isPoint(t) && (t = t.path),
            null != r && (t = t.slice(0, r)),
            t
          );
        },
        hasPath: (e, t) => et.has(e, t),
        pathRef(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { affinity: r = "forward" } = n,
            i = {
              current: t,
              affinity: r,
              unref() {
                var { current: t } = i;
                return Ge.pathRefs(e).delete(i), (i.current = null), t;
              },
            };
          return Ge.pathRefs(e).add(i), i;
        },
        pathRefs(e) {
          var t = de.get(e);
          return t || ((t = new Set()), de.set(e, t)), t;
        },
        point(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { edge: r = "start" } = n;
          if (it.isPath(t)) {
            var i;
            if ("end" === r) {
              var [, o] = et.last(e, t);
              i = o;
            } else {
              var [, s] = et.first(e, t);
              i = s;
            }
            var a = et.get(e, i);
            if (!yt.isText(a))
              throw new Error(
                "Cannot get the "
                  .concat(r, " point in the node at path [")
                  .concat(t, "] because it has no ")
                  .concat(r, " text node.")
              );
            return { path: i, offset: "end" === r ? a.text.length : 0 };
          }
          if (ct.isRange(t)) {
            var [u, l] = ct.edges(t);
            return "start" === r ? u : l;
          }
          return t;
        },
        pointRef(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { affinity: r = "forward" } = n,
            i = {
              current: t,
              affinity: r,
              unref() {
                var { current: t } = i;
                return Ge.pointRefs(e).delete(i), (i.current = null), t;
              },
            };
          return Ge.pointRefs(e).add(i), i;
        },
        pointRefs(e) {
          var t = he.get(e);
          return t || ((t = new Set()), he.set(e, t)), t;
        },
        *positions(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            {
              at: n = e.selection,
              unit: r = "offset",
              reverse: i = !1,
              voids: o = !1,
            } = t;
          if (n) {
            var s = Ge.range(e, n),
              [a, u] = ct.edges(s),
              l = i ? u : a,
              c = !1,
              d = "",
              h = 0,
              p = 0,
              m = 0;
            for (var [f, g] of Ge.nodes(e, { at: n, reverse: i, voids: o })) {
              if (We.isElement(f)) {
                if (!o && e.isVoid(f)) {
                  yield Ge.start(e, g);
                  continue;
                }
                if (e.isInline(f)) continue;
                if (Ge.hasInlines(e, f)) {
                  var v = it.isAncestor(g, u.path) ? u : Ge.end(e, g),
                    y = it.isAncestor(g, a.path) ? a : Ge.start(e, g);
                  (d = Ge.string(e, { anchor: y, focus: v }, { voids: o })),
                    (c = !0);
                }
              }
              if (yt.isText(f)) {
                var b = it.equals(g, l.path);
                for (
                  b
                    ? ((p = i ? l.offset : f.text.length - l.offset),
                      (m = l.offset))
                    : ((p = f.text.length), (m = i ? p : 0)),
                    (b || c || "offset" === r) &&
                      (yield { path: g, offset: m }, (c = !1));
                  ;

                ) {
                  if (0 === h) {
                    if ("" === d) break;
                    (h = C(d, r, i)), (d = Ce(d, h, i)[1]);
                  }
                  if (((m = i ? m - h : m + h), (p -= h) < 0)) {
                    h = -p;
                    break;
                  }
                  (h = 0), yield { path: g, offset: m };
                }
              }
            }
          }
          function C(e, t, n) {
            return "character" === t
              ? ge(e, n)
              : "word" === t
              ? (function (e) {
                  for (
                    var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n = 0,
                      r = !1;
                    e.length > 0;

                  ) {
                    var i = ge(e, t),
                      [o, s] = Ce(e, i, t);
                    if (De(o, s, t)) (r = !0), (n += i);
                    else {
                      if (r) break;
                      n += i;
                    }
                    e = s;
                  }
                  return n;
                })(e, n)
              : "line" === t || "block" === t
              ? e.length
              : 1;
          }
        },
        previous(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { mode: n = "lowest", voids: r = !1 } = t,
            { match: i, at: o = e.selection } = t;
          if (o) {
            var s = Ge.before(e, o, { voids: r });
            if (s) {
              var [, a] = Ge.first(e, []),
                u = [s.path, a];
              if (it.isPath(o) && 0 === o.length)
                throw new Error(
                  "Cannot get the previous node from the root node!"
                );
              if (null == i)
                if (it.isPath(o)) {
                  var [l] = Ge.parent(e, o);
                  i = (e) => l.children.includes(e);
                } else i = () => !0;
              var [c] = Ge.nodes(e, {
                reverse: !0,
                at: u,
                match: i,
                mode: n,
                voids: r,
              });
              return c;
            }
          }
        },
        range: (e, t, n) =>
          ct.isRange(t) && !n
            ? t
            : { anchor: Ge.start(e, t), focus: Ge.end(e, n || t) },
        rangeRef(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { affinity: r = "forward" } = n,
            i = {
              current: t,
              affinity: r,
              unref() {
                var { current: t } = i;
                return Ge.rangeRefs(e).delete(i), (i.current = null), t;
              },
            };
          return Ge.rangeRefs(e).add(i), i;
        },
        rangeRefs(e) {
          var t = pe.get(e);
          return t || ((t = new Set()), pe.set(e, t)), t;
        },
        removeMark(e, t) {
          e.removeMark(t);
        },
        setNormalizing(e, t) {
          ce.set(e, t);
        },
        start: (e, t) => Ge.point(e, t, { edge: "start" }),
        string(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { voids: r = !1 } = n,
            i = Ge.range(e, t),
            [o, s] = ct.edges(i),
            a = "";
          for (var [u, l] of Ge.nodes(e, {
            at: i,
            match: yt.isText,
            voids: r,
          })) {
            var c = u.text;
            it.equals(l, s.path) && (c = c.slice(0, s.offset)),
              it.equals(l, o.path) && (c = c.slice(o.offset)),
              (a += c);
          }
          return a;
        },
        unhangRange(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { voids: r = !1 } = n,
            [i, o] = ct.edges(t);
          if (
            0 !== i.offset ||
            0 !== o.offset ||
            ct.isCollapsed(t) ||
            it.hasPrevious(o.path)
          )
            return t;
          var s = Ge.above(e, {
              at: o,
              match: (t) => We.isElement(t) && Ge.isBlock(e, t),
              voids: r,
            }),
            a = s ? s[1] : [],
            u = { anchor: Ge.start(e, i), focus: o },
            l = !0;
          for (var [c, d] of Ge.nodes(e, {
            at: u,
            match: yt.isText,
            reverse: !0,
            voids: r,
          }))
            if (l) l = !1;
            else if ("" !== c.text || it.isBefore(d, a)) {
              o = { path: d, offset: c.text.length };
              break;
            }
          return { anchor: i, focus: o };
        },
        void(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Ge.above(
            e,
            Ze(
              Ze({}, t),
              {},
              { match: (t) => We.isElement(t) && Ge.isVoid(e, t) }
            )
          );
        },
        withoutNormalizing(e, t) {
          var n = Ge.isNormalizing(e);
          Ge.setNormalizing(e, !1);
          try {
            t();
          } finally {
            Ge.setNormalizing(e, n);
          }
          Ge.normalize(e);
        },
      },
      Xe = {
        isSpan: (e) => Array.isArray(e) && 2 === e.length && e.every(it.isPath),
      },
      Ke = ["children"],
      Je = ["text"],
      Qe = new WeakMap(),
      et = {
        ancestor(e, t) {
          var n = et.get(e, t);
          if (yt.isText(n))
            throw new Error(
              "Cannot get the ancestor node at path ["
                .concat(t, "] because it refers to a text node instead: ")
                .concat(ht.stringify(n))
            );
          return n;
        },
        *ancestors(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          for (var r of it.ancestors(t, n)) {
            var i = [et.ancestor(e, r), r];
            yield i;
          }
        },
        child(e, t) {
          if (yt.isText(e))
            throw new Error(
              "Cannot get the child of a text node: ".concat(ht.stringify(e))
            );
          var n = e.children[t];
          if (null == n)
            throw new Error(
              "Cannot get child at index `"
                .concat(t, "` in node: ")
                .concat(ht.stringify(e))
            );
          return n;
        },
        *children(e, t) {
          for (
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { reverse: r = !1 } = n,
              i = et.ancestor(e, t),
              { children: o } = i,
              s = r ? o.length - 1 : 0;
            r ? s >= 0 : s < o.length;

          ) {
            var a = et.child(i, s),
              u = t.concat(s);
            yield [a, u], (s = r ? s - 1 : s + 1);
          }
        },
        common(e, t, n) {
          var r = it.common(t, n);
          return [et.get(e, r), r];
        },
        descendant(e, t) {
          var n = et.get(e, t);
          if (Ge.isEditor(n))
            throw new Error(
              "Cannot get the descendant node at path ["
                .concat(
                  t,
                  "] because it refers to the root editor node instead: "
                )
                .concat(ht.stringify(n))
            );
          return n;
        },
        *descendants(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          for (var [n, r] of et.nodes(e, t)) 0 !== r.length && (yield [n, r]);
        },
        *elements(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          for (var [n, r] of et.nodes(e, t)) We.isElement(n) && (yield [n, r]);
        },
        extractProps: (e) => (We.isAncestor(e) ? me(e, Ke) : me(e, Je)),
        first(e, t) {
          for (
            var n = t.slice(), r = et.get(e, n);
            r && !yt.isText(r) && 0 !== r.children.length;

          )
            (r = r.children[0]), n.push(0);
          return [r, n];
        },
        fragment(e, t) {
          if (yt.isText(e))
            throw new Error(
              "Cannot get a fragment starting from a root text node: ".concat(
                ht.stringify(e)
              )
            );
          return ie({ children: e.children }, (e) => {
            var [n, r] = ct.edges(t),
              i = et.nodes(e, {
                reverse: !0,
                pass: (e) => {
                  var [, n] = e;
                  return !ct.includes(t, n);
                },
              });
            for (var [, o] of i) {
              if (!ct.includes(t, o)) {
                var s = et.parent(e, o),
                  a = o[o.length - 1];
                s.children.splice(a, 1);
              }
              if (it.equals(o, r.path)) {
                var u = et.leaf(e, o);
                u.text = u.text.slice(0, r.offset);
              }
              if (it.equals(o, n.path)) {
                var l = et.leaf(e, o);
                l.text = l.text.slice(n.offset);
              }
            }
            Ge.isEditor(e) && (e.selection = null);
          }).children;
        },
        get(e, t) {
          for (var n = e, r = 0; r < t.length; r++) {
            var i = t[r];
            if (yt.isText(n) || !n.children[i])
              throw new Error(
                "Cannot find a descendant at path ["
                  .concat(t, "] in node: ")
                  .concat(ht.stringify(e))
              );
            n = n.children[i];
          }
          return n;
        },
        has(e, t) {
          for (var n = e, r = 0; r < t.length; r++) {
            var i = t[r];
            if (yt.isText(n) || !n.children[i]) return !1;
            n = n.children[i];
          }
          return !0;
        },
        isNode: (e) => yt.isText(e) || We.isElement(e) || Ge.isEditor(e),
        isNodeList(e) {
          if (!Array.isArray(e)) return !1;
          var t = Qe.get(e);
          if (void 0 !== t) return t;
          var n = e.every((e) => et.isNode(e));
          return Qe.set(e, n), n;
        },
        last(e, t) {
          for (
            var n = t.slice(), r = et.get(e, n);
            r && !yt.isText(r) && 0 !== r.children.length;

          ) {
            var i = r.children.length - 1;
            (r = r.children[i]), n.push(i);
          }
          return [r, n];
        },
        leaf(e, t) {
          var n = et.get(e, t);
          if (!yt.isText(n))
            throw new Error(
              "Cannot get the leaf node at path ["
                .concat(t, "] because it refers to a non-leaf node: ")
                .concat(ht.stringify(n))
            );
          return n;
        },
        *levels(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          for (var r of it.levels(t, n)) {
            var i = et.get(e, r);
            yield [i, r];
          }
        },
        matches: (e, t) =>
          (We.isElement(e) && We.isElementProps(t) && We.matches(e, t)) ||
          (yt.isText(e) && yt.isTextProps(t) && yt.matches(e, t)),
        *nodes(e) {
          for (
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { pass: n, reverse: r = !1 } = t,
              { from: i = [], to: o } = t,
              s = new Set(),
              a = [],
              u = e;
            !o || !(r ? it.isBefore(a, o) : it.isAfter(a, o));

          )
            if (
              (s.has(u) || (yield [u, a]),
              s.has(u) ||
                yt.isText(u) ||
                0 === u.children.length ||
                (null != n && !1 !== n([u, a])))
            ) {
              if (0 === a.length) break;
              if (!r) {
                var l = it.next(a);
                if (et.has(e, l)) {
                  (a = l), (u = et.get(e, a));
                  continue;
                }
              }
              r && 0 !== a[a.length - 1]
                ? ((a = it.previous(a)), (u = et.get(e, a)))
                : ((a = it.parent(a)), (u = et.get(e, a)), s.add(u));
            } else {
              s.add(u);
              var c = r ? u.children.length - 1 : 0;
              it.isAncestor(a, i) && (c = i[a.length]),
                (a = a.concat(c)),
                (u = et.get(e, a));
            }
        },
        parent(e, t) {
          var n = it.parent(t),
            r = et.get(e, n);
          if (yt.isText(r))
            throw new Error(
              "Cannot get the parent of path [".concat(
                t,
                "] because it does not exist in the root."
              )
            );
          return r;
        },
        string: (e) =>
          yt.isText(e) ? e.text : e.children.map(et.string).join(""),
        *texts(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          for (var [n, r] of et.nodes(e, t)) yt.isText(n) && (yield [n, r]);
        },
      };
    function tt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function nt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? tt(Object(n), !0).forEach(function (t) {
              ae(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : tt(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var rt = {
        isNodeOperation: (e) => rt.isOperation(e) && e.type.endsWith("_node"),
        isOperation(e) {
          if (!u(e)) return !1;
          switch (e.type) {
            case "insert_node":
            case "remove_node":
              return it.isPath(e.path) && et.isNode(e.node);
            case "insert_text":
            case "remove_text":
              return (
                "number" == typeof e.offset &&
                "string" == typeof e.text &&
                it.isPath(e.path)
              );
            case "merge_node":
              return (
                "number" == typeof e.position &&
                it.isPath(e.path) &&
                u(e.properties)
              );
            case "move_node":
              return it.isPath(e.path) && it.isPath(e.newPath);
            case "set_node":
              return it.isPath(e.path) && u(e.properties) && u(e.newProperties);
            case "set_selection":
              return (
                (null === e.properties && ct.isRange(e.newProperties)) ||
                (null === e.newProperties && ct.isRange(e.properties)) ||
                (u(e.properties) && u(e.newProperties))
              );
            case "split_node":
              return (
                it.isPath(e.path) &&
                "number" == typeof e.position &&
                u(e.properties)
              );
            default:
              return !1;
          }
        },
        isOperationList: (e) =>
          Array.isArray(e) && e.every((e) => rt.isOperation(e)),
        isSelectionOperation: (e) =>
          rt.isOperation(e) && e.type.endsWith("_selection"),
        isTextOperation: (e) => rt.isOperation(e) && e.type.endsWith("_text"),
        inverse(e) {
          switch (e.type) {
            case "insert_node":
              return nt(nt({}, e), {}, { type: "remove_node" });
            case "insert_text":
              return nt(nt({}, e), {}, { type: "remove_text" });
            case "merge_node":
              return nt(
                nt({}, e),
                {},
                { type: "split_node", path: it.previous(e.path) }
              );
            case "move_node":
              var { newPath: t, path: n } = e;
              if (it.equals(t, n)) return e;
              if (it.isSibling(n, t))
                return nt(nt({}, e), {}, { path: t, newPath: n });
              var r = it.transform(n, e),
                i = it.transform(it.next(n), e);
              return nt(nt({}, e), {}, { path: r, newPath: i });
            case "remove_node":
              return nt(nt({}, e), {}, { type: "insert_node" });
            case "remove_text":
              return nt(nt({}, e), {}, { type: "insert_text" });
            case "set_node":
              var { properties: o, newProperties: s } = e;
              return nt(nt({}, e), {}, { properties: s, newProperties: o });
            case "set_selection":
              var { properties: a, newProperties: u } = e;
              return nt(
                nt({}, e),
                {},
                null == a
                  ? { properties: u, newProperties: null }
                  : null == u
                  ? { properties: null, newProperties: a }
                  : { properties: u, newProperties: a }
              );
            case "split_node":
              return nt(
                nt({}, e),
                {},
                { type: "merge_node", path: it.next(e.path) }
              );
          }
        },
      },
      it = {
        ancestors(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { reverse: n = !1 } = t,
            r = it.levels(e, t);
          return n ? r.slice(1) : r.slice(0, -1);
        },
        common(e, t) {
          for (var n = [], r = 0; r < e.length && r < t.length; r++) {
            var i = e[r];
            if (i !== t[r]) break;
            n.push(i);
          }
          return n;
        },
        compare(e, t) {
          for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
            if (e[r] < t[r]) return -1;
            if (e[r] > t[r]) return 1;
          }
          return 0;
        },
        endsAfter(e, t) {
          var n = e.length - 1,
            r = e.slice(0, n),
            i = t.slice(0, n),
            o = e[n],
            s = t[n];
          return it.equals(r, i) && o > s;
        },
        endsAt(e, t) {
          var n = e.length,
            r = e.slice(0, n),
            i = t.slice(0, n);
          return it.equals(r, i);
        },
        endsBefore(e, t) {
          var n = e.length - 1,
            r = e.slice(0, n),
            i = t.slice(0, n),
            o = e[n],
            s = t[n];
          return it.equals(r, i) && o < s;
        },
        equals: (e, t) =>
          e.length === t.length && e.every((e, n) => e === t[n]),
        hasPrevious: (e) => e[e.length - 1] > 0,
        isAfter: (e, t) => 1 === it.compare(e, t),
        isAncestor: (e, t) => e.length < t.length && 0 === it.compare(e, t),
        isBefore: (e, t) => -1 === it.compare(e, t),
        isChild: (e, t) => e.length === t.length + 1 && 0 === it.compare(e, t),
        isCommon: (e, t) => e.length <= t.length && 0 === it.compare(e, t),
        isDescendant: (e, t) => e.length > t.length && 0 === it.compare(e, t),
        isParent: (e, t) => e.length + 1 === t.length && 0 === it.compare(e, t),
        isPath: (e) =>
          Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
        isSibling(e, t) {
          if (e.length !== t.length) return !1;
          var n = e.slice(0, -1),
            r = t.slice(0, -1);
          return e[e.length - 1] !== t[t.length - 1] && it.equals(n, r);
        },
        levels(e) {
          for (
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { reverse: n = !1 } = t,
              r = [],
              i = 0;
            i <= e.length;
            i++
          )
            r.push(e.slice(0, i));
          return n && r.reverse(), r;
        },
        next(e) {
          if (0 === e.length)
            throw new Error(
              "Cannot get the next path of a root path [".concat(
                e,
                "], because it has no next index."
              )
            );
          var t = e[e.length - 1];
          return e.slice(0, -1).concat(t + 1);
        },
        operationCanTransformPath(e) {
          switch (e.type) {
            case "insert_node":
            case "remove_node":
            case "merge_node":
            case "split_node":
            case "move_node":
              return !0;
            default:
              return !1;
          }
        },
        parent(e) {
          if (0 === e.length)
            throw new Error(
              "Cannot get the parent path of the root path [".concat(e, "].")
            );
          return e.slice(0, -1);
        },
        previous(e) {
          if (0 === e.length)
            throw new Error(
              "Cannot get the previous path of a root path [".concat(
                e,
                "], because it has no previous index."
              )
            );
          var t = e[e.length - 1];
          if (t <= 0)
            throw new Error(
              "Cannot get the previous path of a first child path [".concat(
                e,
                "] because it would result in a negative index."
              )
            );
          return e.slice(0, -1).concat(t - 1);
        },
        relative(e, t) {
          if (!it.isAncestor(t, e) && !it.equals(e, t))
            throw new Error(
              "Cannot get the relative path of ["
                .concat(e, "] inside ancestor [")
                .concat(t, "], because it is not above or equal to the path.")
            );
          return e.slice(t.length);
        },
        transform(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (!e) return null;
          var r = [...e],
            { affinity: i = "forward" } = n;
          if (0 === e.length) return r;
          switch (t.type) {
            case "insert_node":
              var { path: o } = t;
              (it.equals(o, r) || it.endsBefore(o, r) || it.isAncestor(o, r)) &&
                (r[o.length - 1] += 1);
              break;
            case "remove_node":
              var { path: s } = t;
              if (it.equals(s, r) || it.isAncestor(s, r)) return null;
              it.endsBefore(s, r) && (r[s.length - 1] -= 1);
              break;
            case "merge_node":
              var { path: a, position: u } = t;
              it.equals(a, r) || it.endsBefore(a, r)
                ? (r[a.length - 1] -= 1)
                : it.isAncestor(a, r) &&
                  ((r[a.length - 1] -= 1), (r[a.length] += u));
              break;
            case "split_node":
              var { path: l, position: c } = t;
              if (it.equals(l, r)) {
                if ("forward" === i) r[r.length - 1] += 1;
                else if ("backward" !== i) return null;
              } else
                it.endsBefore(l, r)
                  ? (r[l.length - 1] += 1)
                  : it.isAncestor(l, r) &&
                    e[l.length] >= c &&
                    ((r[l.length - 1] += 1), (r[l.length] -= c));
              break;
            case "move_node":
              var { path: d, newPath: h } = t;
              if (it.equals(d, h)) return r;
              if (it.isAncestor(d, r) || it.equals(d, r)) {
                var p = h.slice();
                return (
                  it.endsBefore(d, h) &&
                    d.length < h.length &&
                    (p[d.length - 1] -= 1),
                  p.concat(r.slice(d.length))
                );
              }
              it.isSibling(d, h) && (it.isAncestor(h, r) || it.equals(h, r))
                ? it.endsBefore(d, r)
                  ? (r[d.length - 1] -= 1)
                  : (r[d.length - 1] += 1)
                : it.endsBefore(h, r) || it.equals(h, r) || it.isAncestor(h, r)
                ? (it.endsBefore(d, r) && (r[d.length - 1] -= 1),
                  (r[h.length - 1] += 1))
                : it.endsBefore(d, r) &&
                  (it.equals(h, r) && (r[h.length - 1] += 1),
                  (r[d.length - 1] -= 1));
          }
          return r;
        },
      };
    function ot(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function st(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ot(Object(n), !0).forEach(function (t) {
              ae(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ot(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var at = {
        compare(e, t) {
          var n = it.compare(e.path, t.path);
          return 0 === n
            ? e.offset < t.offset
              ? -1
              : e.offset > t.offset
              ? 1
              : 0
            : n;
        },
        isAfter: (e, t) => 1 === at.compare(e, t),
        isBefore: (e, t) => -1 === at.compare(e, t),
        equals: (e, t) => e.offset === t.offset && it.equals(e.path, t.path),
        isPoint: (e) =>
          u(e) && "number" == typeof e.offset && it.isPath(e.path),
        transform(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return ie(e, (e) => {
            if (null === e) return null;
            var { affinity: r = "forward" } = n,
              { path: i, offset: o } = e;
            switch (t.type) {
              case "insert_node":
              case "move_node":
                e.path = it.transform(i, t, n);
                break;
              case "insert_text":
                it.equals(t.path, i) &&
                  (t.offset < o || (t.offset === o && "forward" === r)) &&
                  (e.offset += t.text.length);
                break;
              case "merge_node":
                it.equals(t.path, i) && (e.offset += t.position),
                  (e.path = it.transform(i, t, n));
                break;
              case "remove_text":
                it.equals(t.path, i) &&
                  t.offset <= o &&
                  (e.offset -= Math.min(o - t.offset, t.text.length));
                break;
              case "remove_node":
                if (it.equals(t.path, i) || it.isAncestor(t.path, i))
                  return null;
                e.path = it.transform(i, t, n);
                break;
              case "split_node":
                if (it.equals(t.path, i)) {
                  if (t.position === o && null == r) return null;
                  (t.position < o || (t.position === o && "forward" === r)) &&
                    ((e.offset -= t.position),
                    (e.path = it.transform(
                      i,
                      t,
                      st(st({}, n), {}, { affinity: "forward" })
                    )));
                } else e.path = it.transform(i, t, n);
            }
          });
        },
      },
      ut = ["anchor", "focus"];
    function lt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    var ct = {
        edges(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { reverse: n = !1 } = t,
            { anchor: r, focus: i } = e;
          return ct.isBackward(e) === n ? [r, i] : [i, r];
        },
        end(e) {
          var [, t] = ct.edges(e);
          return t;
        },
        equals: (e, t) =>
          at.equals(e.anchor, t.anchor) && at.equals(e.focus, t.focus),
        includes(e, t) {
          if (ct.isRange(t)) {
            if (ct.includes(e, t.anchor) || ct.includes(e, t.focus)) return !0;
            var [n, r] = ct.edges(e),
              [i, o] = ct.edges(t);
            return at.isBefore(n, i) && at.isAfter(r, o);
          }
          var [s, a] = ct.edges(e),
            u = !1,
            l = !1;
          return (
            at.isPoint(t)
              ? ((u = at.compare(t, s) >= 0), (l = at.compare(t, a) <= 0))
              : ((u = it.compare(t, s.path) >= 0),
                (l = it.compare(t, a.path) <= 0)),
            u && l
          );
        },
        intersection(e, t) {
          var n = me(e, ut),
            [r, i] = ct.edges(e),
            [o, s] = ct.edges(t),
            a = at.isBefore(r, o) ? o : r,
            u = at.isBefore(i, s) ? i : s;
          return at.isBefore(u, a)
            ? null
            : (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? lt(Object(n), !0).forEach(function (t) {
                        ae(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : lt(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({ anchor: a, focus: u }, n);
        },
        isBackward(e) {
          var { anchor: t, focus: n } = e;
          return at.isAfter(t, n);
        },
        isCollapsed(e) {
          var { anchor: t, focus: n } = e;
          return at.equals(t, n);
        },
        isExpanded: (e) => !ct.isCollapsed(e),
        isForward: (e) => !ct.isBackward(e),
        isRange: (e) => u(e) && at.isPoint(e.anchor) && at.isPoint(e.focus),
        *points(e) {
          yield [e.anchor, "anchor"], yield [e.focus, "focus"];
        },
        start(e) {
          var [t] = ct.edges(e);
          return t;
        },
        transform(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return ie(e, (e) => {
            if (null === e) return null;
            var r,
              i,
              { affinity: o = "inward" } = n;
            if ("inward" === o) {
              var s = ct.isCollapsed(e);
              ct.isForward(e)
                ? ((r = "forward"), (i = s ? r : "backward"))
                : ((r = "backward"), (i = s ? r : "forward"));
            } else
              "outward" === o
                ? ct.isForward(e)
                  ? ((r = "backward"), (i = "forward"))
                  : ((r = "forward"), (i = "backward"))
                : ((r = o), (i = o));
            var a = at.transform(e.anchor, t, { affinity: r }),
              u = at.transform(e.focus, t, { affinity: i });
            if (!a || !u) return null;
            (e.anchor = a), (e.focus = u);
          });
        },
      },
      dt = void 0,
      ht = {
        setScrubber(e) {
          dt = e;
        },
        stringify: (e) => JSON.stringify(e, dt),
      },
      pt = (e, t) => {
        for (var n in e) {
          var r = e[n],
            i = t[n];
          if (u(r) && u(i)) {
            if (!pt(r, i)) return !1;
          } else if (Array.isArray(r) && Array.isArray(i)) {
            if (r.length !== i.length) return !1;
            for (var o = 0; o < r.length; o++) if (r[o] !== i[o]) return !1;
          } else if (r !== i) return !1;
        }
        for (var s in t) if (void 0 === e[s] && void 0 !== t[s]) return !1;
        return !0;
      },
      mt = ["text"],
      ft = ["anchor", "focus"];
    function gt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function vt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? gt(Object(n), !0).forEach(function (t) {
              ae(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : gt(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var yt = {
      equals(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          { loose: r = !1 } = n;
        function i(e) {
          return me(e, mt);
        }
        return pt(r ? i(e) : e, r ? i(t) : t);
      },
      isText: (e) => u(e) && "string" == typeof e.text,
      isTextList: (e) => Array.isArray(e) && e.every((e) => yt.isText(e)),
      isTextProps: (e) => void 0 !== e.text,
      matches(e, t) {
        for (var n in t)
          if ("text" !== n && (!e.hasOwnProperty(n) || e[n] !== t[n]))
            return !1;
        return !0;
      },
      decorations(e, t) {
        var n = [vt({}, e)];
        for (var r of t) {
          var i = me(r, ft),
            [o, s] = ct.edges(r),
            a = [],
            u = 0,
            l = o.offset,
            c = s.offset;
          for (var d of n) {
            var { length: h } = d.text,
              p = u;
            if (((u += h), l <= p && u <= c)) Object.assign(d, i), a.push(d);
            else if (
              (l !== c && (l === u || c === p)) ||
              l > u ||
              c < p ||
              (c === p && 0 !== p)
            )
              a.push(d);
            else {
              var m = d,
                f = void 0,
                g = void 0;
              if (c < u) {
                var v = c - p;
                (g = vt(vt({}, m), {}, { text: m.text.slice(v) })),
                  (m = vt(vt({}, m), {}, { text: m.text.slice(0, v) }));
              }
              if (l > p) {
                var y = l - p;
                (f = vt(vt({}, m), {}, { text: m.text.slice(0, y) })),
                  (m = vt(vt({}, m), {}, { text: m.text.slice(y) }));
              }
              Object.assign(m, i), f && a.push(f), a.push(m), g && a.push(g);
            }
          }
          n = a;
        }
        return n;
      },
    };
    function bt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ct(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? bt(Object(n), !0).forEach(function (t) {
              ae(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : bt(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Dt = {
        transform(e, t) {
          e.children = oe(e.children);
          var n = e.selection && oe(e.selection);
          try {
            n = ((e, t, n) => {
              switch (n.type) {
                case "insert_node":
                  var { path: r, node: i } = n,
                    o = et.parent(e, r),
                    s = r[r.length - 1];
                  if (s > o.children.length)
                    throw new Error(
                      'Cannot apply an "insert_node" operation at path ['.concat(
                        r,
                        "] because the destination is past the end of the node."
                      )
                    );
                  if ((o.children.splice(s, 0, i), t))
                    for (var [a, u] of ct.points(t)) t[u] = at.transform(a, n);
                  break;
                case "insert_text":
                  var { path: l, offset: c, text: d } = n;
                  if (0 === d.length) break;
                  var h = et.leaf(e, l),
                    p = h.text.slice(0, c),
                    m = h.text.slice(c);
                  if (((h.text = p + d + m), t))
                    for (var [f, g] of ct.points(t)) t[g] = at.transform(f, n);
                  break;
                case "merge_node":
                  var { path: v } = n,
                    y = et.get(e, v),
                    b = it.previous(v),
                    C = et.get(e, b),
                    D = et.parent(e, v),
                    w = v[v.length - 1];
                  if (yt.isText(y) && yt.isText(C)) C.text += y.text;
                  else {
                    if (yt.isText(y) || yt.isText(C))
                      throw new Error(
                        'Cannot apply a "merge_node" operation at path ['
                          .concat(v, "] to nodes of different interfaces: ")
                          .concat(ht.stringify(y), " ")
                          .concat(ht.stringify(C))
                      );
                    C.children.push(...y.children);
                  }
                  if ((D.children.splice(w, 1), t))
                    for (var [E, A] of ct.points(t)) t[A] = at.transform(E, n);
                  break;
                case "move_node":
                  var { path: B, newPath: x } = n;
                  if (it.isAncestor(B, x))
                    throw new Error(
                      "Cannot move a path ["
                        .concat(B, "] to new path [")
                        .concat(
                          x,
                          "] because the destination is inside itself."
                        )
                    );
                  var k = et.get(e, B),
                    F = et.parent(e, B),
                    P = B[B.length - 1];
                  F.children.splice(P, 1);
                  var T = it.transform(B, n),
                    S = et.get(e, it.parent(T)),
                    M = T[T.length - 1];
                  if ((S.children.splice(M, 0, k), t))
                    for (var [O, _] of ct.points(t)) t[_] = at.transform(O, n);
                  break;
                case "remove_node":
                  var { path: R } = n,
                    N = R[R.length - 1];
                  if ((et.parent(e, R).children.splice(N, 1), t))
                    for (var [j, L] of ct.points(t)) {
                      var I = at.transform(j, n);
                      if (null != t && null != I) t[L] = I;
                      else {
                        var V = void 0,
                          z = void 0;
                        for (var [$, W] of et.texts(e)) {
                          if (-1 !== it.compare(W, R)) {
                            z = [$, W];
                            break;
                          }
                          V = [$, W];
                        }
                        var q = !1;
                        V &&
                          z &&
                          (q = it.equals(z[1], R)
                            ? !it.hasPrevious(z[1])
                            : it.common(V[1], R).length <
                              it.common(z[1], R).length),
                          V && !q
                            ? ((j.path = V[1]), (j.offset = V[0].text.length))
                            : z
                            ? ((j.path = z[1]), (j.offset = 0))
                            : (t = null);
                      }
                    }
                  break;
                case "remove_text":
                  var { path: U, offset: H, text: Z } = n;
                  if (0 === Z.length) break;
                  var Y = et.leaf(e, U),
                    G = Y.text.slice(0, H),
                    X = Y.text.slice(H + Z.length);
                  if (((Y.text = G + X), t))
                    for (var [K, J] of ct.points(t)) t[J] = at.transform(K, n);
                  break;
                case "set_node":
                  var { path: Q, properties: ee, newProperties: te } = n;
                  if (0 === Q.length)
                    throw new Error("Cannot set properties on the root node!");
                  var ne = et.get(e, Q);
                  for (var re in te) {
                    if ("children" === re || "text" === re)
                      throw new Error(
                        'Cannot set the "'.concat(re, '" property of nodes!')
                      );
                    var ie = te[re];
                    null == ie ? delete ne[re] : (ne[re] = ie);
                  }
                  for (var oe in ee) te.hasOwnProperty(oe) || delete ne[oe];
                  break;
                case "set_selection":
                  var { newProperties: se } = n;
                  if (null == se) t = se;
                  else {
                    if (null == t) {
                      if (!ct.isRange(se))
                        throw new Error(
                          'Cannot apply an incomplete "set_selection" operation properties '.concat(
                            ht.stringify(se),
                            " when there is no current selection."
                          )
                        );
                      t = Ct({}, se);
                    }
                    for (var ae in se) {
                      var ue = se[ae];
                      if (null == ue) {
                        if ("anchor" === ae || "focus" === ae)
                          throw new Error(
                            'Cannot remove the "'.concat(
                              ae,
                              '" selection property'
                            )
                          );
                        delete t[ae];
                      } else t[ae] = ue;
                    }
                  }
                  break;
                case "split_node":
                  var { path: le, position: ce, properties: de } = n;
                  if (0 === le.length)
                    throw new Error(
                      'Cannot apply a "split_node" operation at path ['.concat(
                        le,
                        "] because the root node cannot be split."
                      )
                    );
                  var he,
                    pe = et.get(e, le),
                    me = et.parent(e, le),
                    fe = le[le.length - 1];
                  if (yt.isText(pe)) {
                    var ge = pe.text.slice(0, ce),
                      ve = pe.text.slice(ce);
                    (pe.text = ge), (he = Ct(Ct({}, de), {}, { text: ve }));
                  } else {
                    var ye = pe.children.slice(0, ce),
                      be = pe.children.slice(ce);
                    (pe.children = ye),
                      (he = Ct(Ct({}, de), {}, { children: be }));
                  }
                  if ((me.children.splice(fe + 1, 0, he), t))
                    for (var [Ce, De] of ct.points(t))
                      t[De] = at.transform(Ce, n);
              }
              return t;
            })(e, n, t);
          } finally {
            (e.children = se(e.children)),
              (e.selection = n ? (c(n) ? se(n) : n) : null);
          }
        },
      },
      wt = ["text"],
      Et = ["children"];
    function At(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Bt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? At(Object(n), !0).forEach(function (t) {
              ae(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : At(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var xt = {
        insertNodes(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          Ge.withoutNormalizing(e, () => {
            var { hanging: r = !1, voids: i = !1, mode: o = "lowest" } = n,
              { at: s, match: a, select: u } = n;
            if ((et.isNode(t) && (t = [t]), 0 !== t.length)) {
              var [l] = t;
              if (
                (s ||
                  ((s = e.selection
                    ? e.selection
                    : e.children.length > 0
                    ? Ge.end(e, [])
                    : [0]),
                  (u = !0)),
                null == u && (u = !1),
                ct.isRange(s))
              )
                if (
                  (r || (s = Ge.unhangRange(e, s, { voids: i })),
                  ct.isCollapsed(s))
                )
                  s = s.anchor;
                else {
                  var [, c] = ct.edges(s),
                    d = Ge.pointRef(e, c);
                  Nt.delete(e, { at: s }), (s = d.unref());
                }
              if (at.isPoint(s)) {
                null == a &&
                  (a = yt.isText(l)
                    ? (e) => yt.isText(e)
                    : e.isInline(l)
                    ? (t) => yt.isText(t) || Ge.isInline(e, t)
                    : (t) => We.isElement(t) && Ge.isBlock(e, t));
                var [h] = Ge.nodes(e, {
                  at: s.path,
                  match: a,
                  mode: o,
                  voids: i,
                });
                if (!h) return;
                var [, p] = h,
                  m = Ge.pathRef(e, p),
                  f = Ge.isEnd(e, s, p);
                Nt.splitNodes(e, { at: s, match: a, mode: o, voids: i });
                var g = m.unref();
                s = f ? it.next(g) : g;
              }
              var v = it.parent(s),
                y = s[s.length - 1];
              if (i || !Ge.void(e, { at: v })) {
                for (var b of t) {
                  var C = v.concat(y);
                  y++,
                    e.apply({ type: "insert_node", path: C, node: b }),
                    (s = it.next(s));
                }
                if (((s = it.previous(s)), u)) {
                  var D = Ge.end(e, s);
                  D && Nt.select(e, D);
                }
              }
            }
          });
        },
        liftNodes(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Ge.withoutNormalizing(e, () => {
            var { at: n = e.selection, mode: r = "lowest", voids: i = !1 } = t,
              { match: o } = t;
            if (
              (null == o &&
                (o = it.isPath(n)
                  ? Pt(e, n)
                  : (t) => We.isElement(t) && Ge.isBlock(e, t)),
              n)
            ) {
              var s = Ge.nodes(e, { at: n, match: o, mode: r, voids: i }),
                a = Array.from(s, (t) => {
                  var [, n] = t;
                  return Ge.pathRef(e, n);
                });
              for (var u of a) {
                var l = u.unref();
                if (l.length < 2)
                  throw new Error(
                    "Cannot lift node at a path [".concat(
                      l,
                      "] because it has a depth of less than `2`."
                    )
                  );
                var c = Ge.node(e, it.parent(l)),
                  [d, h] = c,
                  p = l[l.length - 1],
                  { length: m } = d.children;
                if (1 === m) {
                  var f = it.next(h);
                  Nt.moveNodes(e, { at: l, to: f, voids: i }),
                    Nt.removeNodes(e, { at: h, voids: i });
                } else if (0 === p) Nt.moveNodes(e, { at: l, to: h, voids: i });
                else if (p === m - 1) {
                  var g = it.next(h);
                  Nt.moveNodes(e, { at: l, to: g, voids: i });
                } else {
                  var v = it.next(l),
                    y = it.next(h);
                  Nt.splitNodes(e, { at: v, voids: i }),
                    Nt.moveNodes(e, { at: l, to: y, voids: i });
                }
              }
            }
          });
        },
        mergeNodes(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Ge.withoutNormalizing(e, () => {
            var { match: n, at: r = e.selection } = t,
              { hanging: i = !1, voids: o = !1, mode: s = "lowest" } = t;
            if (r) {
              if (null == n)
                if (it.isPath(r)) {
                  var [a] = Ge.parent(e, r);
                  n = (e) => a.children.includes(e);
                } else n = (t) => We.isElement(t) && Ge.isBlock(e, t);
              if (
                (!i &&
                  ct.isRange(r) &&
                  (r = Ge.unhangRange(e, r, { voids: o })),
                ct.isRange(r))
              )
                if (ct.isCollapsed(r)) r = r.anchor;
                else {
                  var [, u] = ct.edges(r),
                    l = Ge.pointRef(e, u);
                  Nt.delete(e, { at: r }),
                    (r = l.unref()),
                    null == t.at && Nt.select(e, r);
                }
              var [c] = Ge.nodes(e, { at: r, match: n, voids: o, mode: s }),
                d = Ge.previous(e, { at: r, match: n, voids: o, mode: s });
              if (c && d) {
                var [h, p] = c,
                  [m, f] = d;
                if (0 !== p.length && 0 !== f.length) {
                  var g,
                    v,
                    y = it.next(f),
                    b = it.common(p, f),
                    C = it.isSibling(p, f),
                    D = Array.from(Ge.levels(e, { at: p }), (e) => {
                      var [t] = e;
                      return t;
                    })
                      .slice(b.length)
                      .slice(0, -1),
                    w = Ge.above(e, {
                      at: p,
                      mode: "highest",
                      match: (t) => D.includes(t) && kt(e, t),
                    }),
                    E = w && Ge.pathRef(e, w[1]);
                  if (yt.isText(h) && yt.isText(m)) {
                    var A = me(h, wt);
                    (v = m.text.length), (g = A);
                  } else {
                    if (!We.isElement(h) || !We.isElement(m))
                      throw new Error(
                        "Cannot merge the node at path ["
                          .concat(
                            p,
                            "] with the previous sibling because it is not the same kind: "
                          )
                          .concat(ht.stringify(h), " ")
                          .concat(ht.stringify(m))
                      );
                    (A = me(h, Et)), (v = m.children.length), (g = A);
                  }
                  C || Nt.moveNodes(e, { at: p, to: y, voids: o }),
                    E && Nt.removeNodes(e, { at: E.current, voids: o }),
                    (We.isElement(m) && Ge.isEmpty(e, m)) ||
                    (yt.isText(m) && "" === m.text && 0 !== f[f.length - 1])
                      ? Nt.removeNodes(e, { at: f, voids: o })
                      : e.apply({
                          type: "merge_node",
                          path: y,
                          position: v,
                          properties: g,
                        }),
                    E && E.unref();
                }
              }
            }
          });
        },
        moveNodes(e, t) {
          Ge.withoutNormalizing(e, () => {
            var {
                to: n,
                at: r = e.selection,
                mode: i = "lowest",
                voids: o = !1,
              } = t,
              { match: s } = t;
            if (r) {
              null == s &&
                (s = it.isPath(r)
                  ? Pt(e, r)
                  : (t) => We.isElement(t) && Ge.isBlock(e, t));
              var a = Ge.pathRef(e, n),
                u = Ge.nodes(e, { at: r, match: s, mode: i, voids: o }),
                l = Array.from(u, (t) => {
                  var [, n] = t;
                  return Ge.pathRef(e, n);
                });
              for (var c of l) {
                var d = c.unref(),
                  h = a.current;
                0 !== d.length &&
                  e.apply({ type: "move_node", path: d, newPath: h }),
                  a.current &&
                    it.isSibling(h, d) &&
                    it.isAfter(h, d) &&
                    (a.current = it.next(a.current));
              }
              a.unref();
            }
          });
        },
        removeNodes(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Ge.withoutNormalizing(e, () => {
            var { hanging: n = !1, voids: r = !1, mode: i = "lowest" } = t,
              { at: o = e.selection, match: s } = t;
            if (o) {
              null == s &&
                (s = it.isPath(o)
                  ? Pt(e, o)
                  : (t) => We.isElement(t) && Ge.isBlock(e, t)),
                !n && ct.isRange(o) && (o = Ge.unhangRange(e, o, { voids: r }));
              var a = Ge.nodes(e, { at: o, match: s, mode: i, voids: r }),
                u = Array.from(a, (t) => {
                  var [, n] = t;
                  return Ge.pathRef(e, n);
                });
              for (var l of u) {
                var c = l.unref();
                if (c) {
                  var [d] = Ge.node(e, c);
                  e.apply({ type: "remove_node", path: c, node: d });
                }
              }
            }
          });
        },
        setNodes(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          Ge.withoutNormalizing(e, () => {
            var { match: r, at: i = e.selection, compare: o, merge: s } = n,
              {
                hanging: a = !1,
                mode: u = "lowest",
                split: l = !1,
                voids: c = !1,
              } = n;
            if (i) {
              if (
                (null == r &&
                  (r = it.isPath(i)
                    ? Pt(e, i)
                    : (t) => We.isElement(t) && Ge.isBlock(e, t)),
                !a && ct.isRange(i) && (i = Ge.unhangRange(e, i, { voids: c })),
                l && ct.isRange(i))
              ) {
                if (
                  ct.isCollapsed(i) &&
                  Ge.leaf(e, i.anchor)[0].text.length > 0
                )
                  return;
                var d = Ge.rangeRef(e, i, { affinity: "inward" }),
                  [h, p] = ct.edges(i),
                  m = "lowest" === u ? "lowest" : "highest",
                  f = Ge.isEnd(e, p, p.path);
                Nt.splitNodes(e, {
                  at: p,
                  match: r,
                  mode: m,
                  voids: c,
                  always: !f,
                });
                var g = Ge.isStart(e, h, h.path);
                Nt.splitNodes(e, {
                  at: h,
                  match: r,
                  mode: m,
                  voids: c,
                  always: !g,
                }),
                  (i = d.unref()),
                  null == n.at && Nt.select(e, i);
              }
              for (var [v, y] of (o || (o = (e, t) => e !== t),
              Ge.nodes(e, { at: i, match: r, mode: u, voids: c }))) {
                var b = {},
                  C = {};
                if (0 !== y.length) {
                  var D = !1;
                  for (var w in t)
                    "children" !== w &&
                      "text" !== w &&
                      o(t[w], v[w]) &&
                      ((D = !0),
                      v.hasOwnProperty(w) && (b[w] = v[w]),
                      s
                        ? null != t[w] && (C[w] = s(v[w], t[w]))
                        : null != t[w] && (C[w] = t[w]));
                  D &&
                    e.apply({
                      type: "set_node",
                      path: y,
                      properties: b,
                      newProperties: C,
                    });
                }
              }
            }
          });
        },
        splitNodes(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Ge.withoutNormalizing(e, () => {
            var { mode: n = "lowest", voids: r = !1 } = t,
              {
                match: i,
                at: o = e.selection,
                height: s = 0,
                always: a = !1,
              } = t;
            if (
              (null == i && (i = (t) => We.isElement(t) && Ge.isBlock(e, t)),
              ct.isRange(o) && (o = Ft(e, o)),
              it.isPath(o))
            ) {
              var u = o,
                l = Ge.point(e, u),
                [c] = Ge.parent(e, u);
              (i = (e) => e === c),
                (s = l.path.length - u.length + 1),
                (o = l),
                (a = !0);
            }
            if (o) {
              var d,
                h = Ge.pointRef(e, o, { affinity: "backward" });
              try {
                var [p] = Ge.nodes(e, { at: o, match: i, mode: n, voids: r });
                if (!p) return;
                var m = Ge.void(e, { at: o, mode: "highest" });
                if (!r && m) {
                  var [f, g] = m;
                  if (We.isElement(f) && e.isInline(f)) {
                    var v = Ge.after(e, g);
                    if (!v) {
                      var y = it.next(g);
                      Nt.insertNodes(e, { text: "" }, { at: y, voids: r }),
                        (v = Ge.point(e, y));
                    }
                    (o = v), (a = !0);
                  }
                  (s = o.path.length - g.length + 1), (a = !0);
                }
                d = Ge.pointRef(e, o);
                var b = o.path.length - s,
                  [, C] = p,
                  D = o.path.slice(0, b),
                  w = 0 === s ? o.offset : o.path[b] + 0;
                for (var [E, A] of Ge.levels(e, {
                  at: D,
                  reverse: !0,
                  voids: r,
                })) {
                  var B = !1;
                  if (
                    A.length < C.length ||
                    0 === A.length ||
                    (!r && We.isElement(E) && Ge.isVoid(e, E))
                  )
                    break;
                  var x = h.current,
                    k = Ge.isEnd(e, x, A);
                  if (a || !h || !Ge.isEdge(e, x, A)) {
                    B = !0;
                    var F = et.extractProps(E);
                    e.apply({
                      type: "split_node",
                      path: A,
                      position: w,
                      properties: F,
                    });
                  }
                  w = A[A.length - 1] + (B || k ? 1 : 0);
                }
                if (null == t.at) {
                  var P = d.current || Ge.end(e, []);
                  Nt.select(e, P);
                }
              } finally {
                var T;
                h.unref(), null === (T = d) || void 0 === T || T.unref();
              }
            }
          });
        },
        unsetNodes(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          Array.isArray(t) || (t = [t]);
          var r = {};
          for (var i of t) r[i] = null;
          Nt.setNodes(e, r, n);
        },
        unwrapNodes(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Ge.withoutNormalizing(e, () => {
            var { mode: n = "lowest", split: r = !1, voids: i = !1 } = t,
              { at: o = e.selection, match: s } = t;
            if (o) {
              null == s &&
                (s = it.isPath(o)
                  ? Pt(e, o)
                  : (t) => We.isElement(t) && Ge.isBlock(e, t)),
                it.isPath(o) && (o = Ge.range(e, o));
              var a = ct.isRange(o) ? Ge.rangeRef(e, o) : null,
                u = Ge.nodes(e, { at: o, match: s, mode: n, voids: i }),
                l = Array.from(u, (t) => {
                  var [, n] = t;
                  return Ge.pathRef(e, n);
                }).reverse(),
                c = function (t) {
                  var n = t.unref(),
                    [o] = Ge.node(e, n),
                    s = Ge.range(e, n);
                  r && a && (s = ct.intersection(a.current, s)),
                    Nt.liftNodes(e, {
                      at: s,
                      match: (e) => We.isAncestor(o) && o.children.includes(e),
                      voids: i,
                    });
                };
              for (var d of l) c(d);
              a && a.unref();
            }
          });
        },
        wrapNodes(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          Ge.withoutNormalizing(e, () => {
            var { mode: r = "lowest", split: i = !1, voids: o = !1 } = n,
              { match: s, at: a = e.selection } = n;
            if (a) {
              if (
                (null == s &&
                  (s = it.isPath(a)
                    ? Pt(e, a)
                    : e.isInline(t)
                    ? (t) =>
                        (We.isElement(t) && Ge.isInline(e, t)) || yt.isText(t)
                    : (t) => We.isElement(t) && Ge.isBlock(e, t)),
                i && ct.isRange(a))
              ) {
                var [u, l] = ct.edges(a),
                  c = Ge.rangeRef(e, a, { affinity: "inward" });
                Nt.splitNodes(e, { at: l, match: s, voids: o }),
                  Nt.splitNodes(e, { at: u, match: s, voids: o }),
                  (a = c.unref()),
                  null == n.at && Nt.select(e, a);
              }
              var d = Array.from(
                Ge.nodes(e, {
                  at: a,
                  match: e.isInline(t)
                    ? (t) => We.isElement(t) && Ge.isBlock(e, t)
                    : (e) => Ge.isEditor(e),
                  mode: "lowest",
                  voids: o,
                })
              );
              for (var [, h] of d) {
                var p = ct.isRange(a) ? ct.intersection(a, Ge.range(e, h)) : a;
                if (p) {
                  var m = Array.from(
                    Ge.nodes(e, { at: p, match: s, mode: r, voids: o })
                  );
                  if (
                    m.length > 0 &&
                    "continue" ===
                      (function () {
                        var [n] = m,
                          r = m[m.length - 1],
                          [, i] = n,
                          [, s] = r;
                        if (0 === i.length && 0 === s.length) return "continue";
                        var a = it.equals(i, s)
                            ? it.parent(i)
                            : it.common(i, s),
                          u = Ge.range(e, i, s),
                          l = Ge.node(e, a),
                          [c] = l,
                          d = a.length + 1,
                          h = it.next(s.slice(0, d)),
                          p = Bt(Bt({}, t), {}, { children: [] });
                        Nt.insertNodes(e, p, { at: h, voids: o }),
                          Nt.moveNodes(e, {
                            at: u,
                            match: (e) =>
                              We.isAncestor(c) && c.children.includes(e),
                            to: h.concat(0),
                            voids: o,
                          });
                      })()
                  )
                    continue;
                }
              }
            }
          });
        },
      },
      kt = (e, t) => {
        if (We.isElement(t)) {
          var n = t;
          return (
            !!Ge.isVoid(e, t) ||
            (1 === n.children.length && kt(e, n.children[0]))
          );
        }
        return !Ge.isEditor(t);
      },
      Ft = (e, t) => {
        if (ct.isCollapsed(t)) return t.anchor;
        var [, n] = ct.edges(t),
          r = Ge.pointRef(e, n);
        return Nt.delete(e, { at: t }), r.unref();
      },
      Pt = (e, t) => {
        var [n] = Ge.node(e, t);
        return (e) => e === n;
      };
    function Tt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function St(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Tt(Object(n), !0).forEach(function (t) {
              ae(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Tt(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Mt = {
        collapse(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { edge: n = "anchor" } = t,
            { selection: r } = e;
          if (r)
            if ("anchor" === n) Nt.select(e, r.anchor);
            else if ("focus" === n) Nt.select(e, r.focus);
            else if ("start" === n) {
              var [i] = ct.edges(r);
              Nt.select(e, i);
            } else if ("end" === n) {
              var [, o] = ct.edges(r);
              Nt.select(e, o);
            }
        },
        deselect(e) {
          var { selection: t } = e;
          t &&
            e.apply({
              type: "set_selection",
              properties: t,
              newProperties: null,
            });
        },
        move(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { selection: n } = e,
            { distance: r = 1, unit: i = "character", reverse: o = !1 } = t,
            { edge: s = null } = t;
          if (n) {
            "start" === s && (s = ct.isBackward(n) ? "focus" : "anchor"),
              "end" === s && (s = ct.isBackward(n) ? "anchor" : "focus");
            var { anchor: a, focus: u } = n,
              l = { distance: r, unit: i },
              c = {};
            if (null == s || "anchor" === s) {
              var d = o ? Ge.before(e, a, l) : Ge.after(e, a, l);
              d && (c.anchor = d);
            }
            if (null == s || "focus" === s) {
              var h = o ? Ge.before(e, u, l) : Ge.after(e, u, l);
              h && (c.focus = h);
            }
            Nt.setSelection(e, c);
          }
        },
        select(e, t) {
          var { selection: n } = e;
          if (((t = Ge.range(e, t)), n)) Nt.setSelection(e, t);
          else {
            if (!ct.isRange(t))
              throw new Error(
                "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                  ht.stringify(t)
                )
              );
            e.apply({ type: "set_selection", properties: n, newProperties: t });
          }
        },
        setPoint(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { selection: r } = e,
            { edge: i = "both" } = n;
          if (r) {
            "start" === i && (i = ct.isBackward(r) ? "focus" : "anchor"),
              "end" === i && (i = ct.isBackward(r) ? "anchor" : "focus");
            var { anchor: o, focus: s } = r,
              a = "anchor" === i ? o : s;
            Nt.setSelection(e, {
              ["anchor" === i ? "anchor" : "focus"]: St(St({}, a), t),
            });
          }
        },
        setSelection(e, t) {
          var { selection: n } = e,
            r = {},
            i = {};
          if (n) {
            for (var o in t)
              (("anchor" === o &&
                null != t.anchor &&
                !at.equals(t.anchor, n.anchor)) ||
                ("focus" === o &&
                  null != t.focus &&
                  !at.equals(t.focus, n.focus)) ||
                ("anchor" !== o && "focus" !== o && t[o] !== n[o])) &&
                ((r[o] = n[o]), (i[o] = t[o]));
            Object.keys(r).length > 0 &&
              e.apply({
                type: "set_selection",
                properties: r,
                newProperties: i,
              });
          }
        },
      },
      Ot = {
        delete(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Ge.withoutNormalizing(e, () => {
            var {
                reverse: n = !1,
                unit: r = "character",
                distance: i = 1,
                voids: o = !1,
              } = t,
              { at: s = e.selection, hanging: a = !1 } = t;
            if (s) {
              var u = !1;
              if (
                (ct.isRange(s) &&
                  ct.isCollapsed(s) &&
                  ((u = !0), (s = s.anchor)),
                at.isPoint(s))
              ) {
                var l = Ge.void(e, { at: s, mode: "highest" });
                if (!o && l) {
                  var [, c] = l;
                  s = c;
                } else {
                  var d = { unit: r, distance: i };
                  (s = {
                    anchor: s,
                    focus: n
                      ? Ge.before(e, s, d) || Ge.start(e, [])
                      : Ge.after(e, s, d) || Ge.end(e, []),
                  }),
                    (a = !0);
                }
              }
              if (it.isPath(s)) Nt.removeNodes(e, { at: s, voids: o });
              else if (!ct.isCollapsed(s)) {
                if (!a) {
                  var [, h] = ct.edges(s),
                    p = Ge.end(e, []);
                  at.equals(h, p) || (s = Ge.unhangRange(e, s, { voids: o }));
                }
                var [m, f] = ct.edges(s),
                  g = Ge.above(e, {
                    match: (t) => We.isElement(t) && Ge.isBlock(e, t),
                    at: m,
                    voids: o,
                  }),
                  v = Ge.above(e, {
                    match: (t) => We.isElement(t) && Ge.isBlock(e, t),
                    at: f,
                    voids: o,
                  }),
                  y = g && v && !it.equals(g[1], v[1]),
                  b = it.equals(m.path, f.path),
                  C = o ? null : Ge.void(e, { at: m, mode: "highest" }),
                  D = o ? null : Ge.void(e, { at: f, mode: "highest" });
                if (C) {
                  var w = Ge.before(e, m);
                  w && g && it.isAncestor(g[1], w.path) && (m = w);
                }
                if (D) {
                  var E = Ge.after(e, f);
                  E && v && it.isAncestor(v[1], E.path) && (f = E);
                }
                var A,
                  B = [];
                for (var x of Ge.nodes(e, { at: s, voids: o })) {
                  var [k, F] = x;
                  (A && 0 === it.compare(F, A)) ||
                    (((!o && We.isElement(k) && Ge.isVoid(e, k)) ||
                      (!it.isCommon(F, m.path) && !it.isCommon(F, f.path))) &&
                      (B.push(x), (A = F)));
                }
                var P = Array.from(B, (t) => {
                    var [, n] = t;
                    return Ge.pathRef(e, n);
                  }),
                  T = Ge.pointRef(e, m),
                  S = Ge.pointRef(e, f),
                  M = "";
                if (!b && !C) {
                  var O = T.current,
                    [_] = Ge.leaf(e, O),
                    { path: R } = O,
                    { offset: N } = m,
                    j = _.text.slice(N);
                  j.length > 0 &&
                    (e.apply({
                      type: "remove_text",
                      path: R,
                      offset: N,
                      text: j,
                    }),
                    (M = j));
                }
                if (
                  (P.reverse()
                    .map((e) => e.unref())
                    .filter((e) => null !== e)
                    .forEach((t) => Nt.removeNodes(e, { at: t, voids: o })),
                  !D)
                ) {
                  var L = S.current,
                    [I] = Ge.leaf(e, L),
                    { path: V } = L,
                    z = b ? m.offset : 0,
                    $ = I.text.slice(z, f.offset);
                  $.length > 0 &&
                    (e.apply({
                      type: "remove_text",
                      path: V,
                      offset: z,
                      text: $,
                    }),
                    (M = $));
                }
                !b &&
                  y &&
                  S.current &&
                  T.current &&
                  Nt.mergeNodes(e, { at: S.current, hanging: !0, voids: o }),
                  u &&
                    n &&
                    "character" === r &&
                    M.length > 1 &&
                    M.match(/[\u0E00-\u0E7F]+/) &&
                    Nt.insertText(e, M.slice(0, M.length - i));
                var W = T.unref(),
                  q = S.unref(),
                  U = n ? W || q : q || W;
                null == t.at && U && Nt.select(e, U);
              }
            }
          });
        },
        insertFragment(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          Ge.withoutNormalizing(e, () => {
            var { hanging: r = !1, voids: i = !1 } = n,
              { at: o = e.selection } = n;
            if (t.length && o) {
              if (ct.isRange(o))
                if (
                  (r || (o = Ge.unhangRange(e, o, { voids: i })),
                  ct.isCollapsed(o))
                )
                  o = o.anchor;
                else {
                  var [, s] = ct.edges(o);
                  if (!i && Ge.void(e, { at: s })) return;
                  var a = Ge.pointRef(e, s);
                  Nt.delete(e, { at: o }), (o = a.unref());
                }
              else it.isPath(o) && (o = Ge.start(e, o));
              if (i || !Ge.void(e, { at: o })) {
                var u = Ge.above(e, {
                  at: o,
                  match: (t) => We.isElement(t) && Ge.isInline(e, t),
                  mode: "highest",
                  voids: i,
                });
                if (u) {
                  var [, l] = u;
                  Ge.isEnd(e, o, l)
                    ? (o = Ge.after(e, l))
                    : Ge.isStart(e, o, l) && (o = Ge.before(e, l));
                }
                var c = Ge.above(e, {
                    match: (t) => We.isElement(t) && Ge.isBlock(e, t),
                    at: o,
                    voids: i,
                  }),
                  [, d] = c,
                  h = Ge.isStart(e, o, d),
                  p = Ge.isEnd(e, o, d),
                  m = h && p,
                  f = !h || (h && p),
                  g = !p,
                  [, v] = et.first({ children: t }, []),
                  [, y] = et.last({ children: t }, []),
                  b = [],
                  C = (t) => {
                    var [n, r] = t;
                    return !(
                      0 === r.length ||
                      (!m &&
                        ((f &&
                          it.isAncestor(r, v) &&
                          We.isElement(n) &&
                          !e.isVoid(n) &&
                          !e.isInline(n)) ||
                          (g &&
                            it.isAncestor(r, y) &&
                            We.isElement(n) &&
                            !e.isVoid(n) &&
                            !e.isInline(n))))
                    );
                  };
                for (var D of et.nodes({ children: t }, { pass: C }))
                  C(D) && b.push(D);
                var w = [],
                  E = [],
                  A = [],
                  B = !0,
                  x = !1;
                for (var [k] of b)
                  We.isElement(k) && !e.isInline(k)
                    ? ((B = !1), (x = !0), E.push(k))
                    : B
                    ? w.push(k)
                    : A.push(k);
                var [F] = Ge.nodes(e, {
                    at: o,
                    match: (t) => yt.isText(t) || Ge.isInline(e, t),
                    mode: "highest",
                    voids: i,
                  }),
                  [, P] = F,
                  T = Ge.isStart(e, o, P),
                  S = Ge.isEnd(e, o, P),
                  M = Ge.pathRef(e, p && !A.length ? it.next(d) : d),
                  O = Ge.pathRef(e, S ? it.next(P) : P);
                Nt.splitNodes(e, {
                  at: o,
                  match: (t) =>
                    x
                      ? We.isElement(t) && Ge.isBlock(e, t)
                      : yt.isText(t) || Ge.isInline(e, t),
                  mode: x ? "lowest" : "highest",
                  always: x && (!h || w.length > 0) && (!p || A.length > 0),
                  voids: i,
                });
                var _,
                  R = Ge.pathRef(e, !T || (T && S) ? it.next(P) : P);
                if (
                  (Nt.insertNodes(e, w, {
                    at: R.current,
                    match: (t) => yt.isText(t) || Ge.isInline(e, t),
                    mode: "highest",
                    voids: i,
                  }),
                  m &&
                    !w.length &&
                    E.length &&
                    !A.length &&
                    Nt.delete(e, { at: d, voids: i }),
                  Nt.insertNodes(e, E, {
                    at: M.current,
                    match: (t) => We.isElement(t) && Ge.isBlock(e, t),
                    mode: "lowest",
                    voids: i,
                  }),
                  Nt.insertNodes(e, A, {
                    at: O.current,
                    match: (t) => yt.isText(t) || Ge.isInline(e, t),
                    mode: "highest",
                    voids: i,
                  }),
                  !n.at &&
                    (A.length > 0 && O.current
                      ? (_ = it.previous(O.current))
                      : E.length > 0 && M.current
                      ? (_ = it.previous(M.current))
                      : R.current && (_ = it.previous(R.current)),
                    _))
                ) {
                  var N = Ge.end(e, _);
                  Nt.select(e, N);
                }
                R.unref(), M.unref(), O.unref();
              }
            }
          });
        },
        insertText(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          Ge.withoutNormalizing(e, () => {
            var { voids: r = !1 } = n,
              { at: i = e.selection } = n;
            if (i) {
              if ((it.isPath(i) && (i = Ge.range(e, i)), ct.isRange(i)))
                if (ct.isCollapsed(i)) i = i.anchor;
                else {
                  var o = ct.end(i);
                  if (!r && Ge.void(e, { at: o })) return;
                  var s = ct.start(i),
                    a = Ge.pointRef(e, s),
                    u = Ge.pointRef(e, o);
                  Nt.delete(e, { at: i, voids: r });
                  var l = a.unref(),
                    c = u.unref();
                  (i = l || c), Nt.setSelection(e, { anchor: i, focus: i });
                }
              if (r || !Ge.void(e, { at: i })) {
                var { path: d, offset: h } = i;
                t.length > 0 &&
                  e.apply({ type: "insert_text", path: d, offset: h, text: t });
              }
            }
          });
        },
      };
    function _t(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Rt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? _t(Object(n), !0).forEach(function (t) {
              ae(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : _t(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Nt = Rt(Rt(Rt(Rt({}, Dt), xt), Mt), Ot);
    const jt = { start: "left", center: "center", end: "right" };
    function Lt(e) {
      var t,
        n,
        r = "";
      if ("string" == typeof e || "number" == typeof e) r += e;
      else if ("object" == typeof e)
        if (Array.isArray(e))
          for (t = 0; t < e.length; t++)
            e[t] && (n = Lt(e[t])) && (r && (r += " "), (r += n));
        else for (t in e) e[t] && (r && (r += " "), (r += t));
      return r;
    }
    function It() {
      for (var e, t, n = 0, r = ""; n < arguments.length; )
        (e = arguments[n++]) && (t = Lt(e)) && (r && (r += " "), (r += t));
      return r;
    }
    const Vt = It;
    var zt = "-";
    function $t(e) {
      var t = (function (e) {
          var t = e.theme,
            n = e.prefix,
            r = { nextPart: new Map(), validators: [] },
            i = (function (e, t) {
              return t
                ? e.map(function (e) {
                    return [
                      e[0],
                      e[1].map(function (e) {
                        return "string" == typeof e
                          ? t + e
                          : "object" == typeof e
                          ? Object.fromEntries(
                              Object.entries(e).map(function (e) {
                                var n = e[0],
                                  r = e[1];
                                return [t + n, r];
                              })
                            )
                          : e;
                      }),
                    ];
                  })
                : e;
            })(Object.entries(e.classGroups), n);
          return (
            i.forEach(function (e) {
              var n = e[0];
              Ut(e[1], r, n, t);
            }),
            r
          );
        })(e),
        n = e.conflictingClassGroups,
        r = e.conflictingClassGroupModifiers,
        i = void 0 === r ? {} : r;
      return {
        getClassGroupId: function (e) {
          var n = e.split(zt);
          return (
            "" === n[0] && 1 !== n.length && n.shift(),
            Wt(n, t) ||
              (function (e) {
                if (qt.test(e)) {
                  var t = qt.exec(e)[1],
                    n = t?.substring(0, t.indexOf(":"));
                  if (n) return "arbitrary.." + n;
                }
              })(e)
          );
        },
        getConflictingClassGroupIds: function (e, t) {
          var r = n[e] || [];
          return t && i[e] ? [].concat(r, i[e]) : r;
        },
      };
    }
    function Wt(e, t) {
      if (0 === e.length) return t.classGroupId;
      var n = e[0],
        r = t.nextPart.get(n),
        i = r ? Wt(e.slice(1), r) : void 0;
      if (i) return i;
      if (0 !== t.validators.length) {
        var o = e.join(zt);
        return t.validators.find(function (e) {
          return (0, e.validator)(o);
        })?.classGroupId;
      }
    }
    var qt = /^\[(.+)\]$/;
    function Ut(e, t, n, r) {
      e.forEach(function (e) {
        if ("string" != typeof e) {
          if ("function" == typeof e)
            return e.isThemeGetter
              ? void Ut(e(r), t, n, r)
              : void t.validators.push({ validator: e, classGroupId: n });
          Object.entries(e).forEach(function (e) {
            var i = e[0];
            Ut(e[1], Ht(t, i), n, r);
          });
        } else ("" === e ? t : Ht(t, e)).classGroupId = n;
      });
    }
    function Ht(e, t) {
      var n = e;
      return (
        t.split(zt).forEach(function (e) {
          n.nextPart.has(e) ||
            n.nextPart.set(e, { nextPart: new Map(), validators: [] }),
            (n = n.nextPart.get(e));
        }),
        n
      );
    }
    function Zt(e) {
      if (e < 1) return { get: function () {}, set: function () {} };
      var t = 0,
        n = new Map(),
        r = new Map();
      function i(i, o) {
        n.set(i, o), ++t > e && ((t = 0), (r = n), (n = new Map()));
      }
      return {
        get: function (e) {
          var t = n.get(e);
          return void 0 !== t
            ? t
            : void 0 !== (t = r.get(e))
            ? (i(e, t), t)
            : void 0;
        },
        set: function (e, t) {
          n.has(e) ? n.set(e, t) : i(e, t);
        },
      };
    }
    var Yt = "!";
    function Gt(e) {
      var t = e.separator || ":",
        n = 1 === t.length,
        r = t[0],
        i = t.length;
      return function (e) {
        for (var o, s = [], a = 0, u = 0, l = 0; l < e.length; l++) {
          var c = e[l];
          if (0 === a) {
            if (c === r && (n || e.slice(l, l + i) === t)) {
              s.push(e.slice(u, l)), (u = l + i);
              continue;
            }
            if ("/" === c) {
              o = l;
              continue;
            }
          }
          "[" === c ? a++ : "]" === c && a--;
        }
        var d = 0 === s.length ? e : e.substring(u),
          h = d.startsWith(Yt);
        return {
          modifiers: s,
          hasImportantModifier: h,
          baseClassName: h ? d.substring(1) : d,
          maybePostfixModifierPosition: o && o > u ? o - u : void 0,
        };
      };
    }
    var Xt = /\s+/;
    function Kt() {
      for (var e, t, n = 0, r = ""; n < arguments.length; )
        (e = arguments[n++]) && (t = Jt(e)) && (r && (r += " "), (r += t));
      return r;
    }
    function Jt(e) {
      if ("string" == typeof e) return e;
      for (var t, n = "", r = 0; r < e.length; r++)
        e[r] && (t = Jt(e[r])) && (n && (n += " "), (n += t));
      return n;
    }
    function Qt() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r,
        i,
        o,
        s = function (e) {
          var n = t[0],
            u = t.slice(1).reduce(function (e, t) {
              return t(e);
            }, n());
          return (
            (r = (function (e) {
              return {
                cache: Zt(e.cacheSize),
                splitModifiers: Gt(e),
                ...$t(e),
              };
            })(u)),
            (i = r.cache.get),
            (o = r.cache.set),
            (s = a),
            a(e)
          );
        };
      function a(e) {
        var t = i(e);
        if (t) return t;
        var n = (function (e, t) {
          var n = t.splitModifiers,
            r = t.getClassGroupId,
            i = t.getConflictingClassGroupIds,
            o = new Set();
          return e
            .trim()
            .split(Xt)
            .map(function (e) {
              var t = n(e),
                i = t.modifiers,
                o = t.hasImportantModifier,
                s = t.baseClassName,
                a = t.maybePostfixModifierPosition,
                u = r(a ? s.substring(0, a) : s),
                l = Boolean(a);
              if (!u) {
                if (!a) return { isTailwindClass: !1, originalClassName: e };
                if (!(u = r(s)))
                  return { isTailwindClass: !1, originalClassName: e };
                l = !1;
              }
              var c = (function (e) {
                if (e.length <= 1) return e;
                var t = [],
                  n = [];
                return (
                  e.forEach(function (e) {
                    "[" === e[0]
                      ? (t.push.apply(t, n.sort().concat([e])), (n = []))
                      : n.push(e);
                  }),
                  t.push.apply(t, n.sort()),
                  t
                );
              })(i).join(":");
              return {
                isTailwindClass: !0,
                modifierId: o ? c + Yt : c,
                classGroupId: u,
                originalClassName: e,
                hasPostfixModifier: l,
              };
            })
            .reverse()
            .filter(function (e) {
              if (!e.isTailwindClass) return !0;
              var t = e.modifierId,
                n = e.classGroupId,
                r = e.hasPostfixModifier,
                s = t + n;
              return (
                !o.has(s) &&
                (o.add(s),
                i(n, r).forEach(function (e) {
                  return o.add(t + e);
                }),
                !0)
              );
            })
            .reverse()
            .map(function (e) {
              return e.originalClassName;
            })
            .join(" ");
        })(e, r);
        return o(e, n), n;
      }
      return function () {
        return s(Kt.apply(null, arguments));
      };
    }
    function en(e) {
      var t = function (t) {
        return t[e] || [];
      };
      return (t.isThemeGetter = !0), t;
    }
    var tn = /^\[(?:([a-z-]+):)?(.+)\]$/i,
      nn = /^\d+\/\d+$/,
      rn = new Set(["px", "full", "screen"]),
      on = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      sn =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/,
      an = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
    function un(e) {
      return mn(e) || rn.has(e) || nn.test(e) || ln(e);
    }
    function ln(e) {
      return Dn(e, "length", wn);
    }
    function cn(e) {
      return Dn(e, "size", En);
    }
    function dn(e) {
      return Dn(e, "position", En);
    }
    function hn(e) {
      return Dn(e, "url", An);
    }
    function pn(e) {
      return Dn(e, "number", mn);
    }
    function mn(e) {
      return !Number.isNaN(Number(e));
    }
    function fn(e) {
      return e.endsWith("%") && mn(e.slice(0, -1));
    }
    function gn(e) {
      return Bn(e) || Dn(e, "number", Bn);
    }
    function vn(e) {
      return tn.test(e);
    }
    function yn() {
      return !0;
    }
    function bn(e) {
      return on.test(e);
    }
    function Cn(e) {
      return Dn(e, "", xn);
    }
    function Dn(e, t, n) {
      var r = tn.exec(e);
      return !!r && (r[1] ? r[1] === t : n(r[2]));
    }
    function wn(e) {
      return sn.test(e);
    }
    function En() {
      return !1;
    }
    function An(e) {
      return e.startsWith("url(");
    }
    function Bn(e) {
      return Number.isInteger(Number(e));
    }
    function xn(e) {
      return an.test(e);
    }
    function kn() {
      var e = en("colors"),
        t = en("spacing"),
        n = en("blur"),
        r = en("brightness"),
        i = en("borderColor"),
        o = en("borderRadius"),
        s = en("borderSpacing"),
        a = en("borderWidth"),
        u = en("contrast"),
        l = en("grayscale"),
        c = en("hueRotate"),
        d = en("invert"),
        h = en("gap"),
        p = en("gradientColorStops"),
        m = en("gradientColorStopPositions"),
        f = en("inset"),
        g = en("margin"),
        v = en("opacity"),
        y = en("padding"),
        b = en("saturate"),
        C = en("scale"),
        D = en("sepia"),
        w = en("skew"),
        E = en("space"),
        A = en("translate"),
        B = function () {
          return ["auto", t];
        },
        x = function () {
          return ["", un];
        },
        k = function () {
          return ["auto", mn, vn];
        },
        F = function () {
          return ["", "0", vn];
        },
        P = function () {
          return [mn, pn];
        },
        T = function () {
          return [mn, vn];
        };
      return {
        cacheSize: 500,
        theme: {
          colors: [yn],
          spacing: [un],
          blur: ["none", "", bn, ln],
          brightness: P(),
          borderColor: [e],
          borderRadius: ["none", "", "full", bn, ln],
          borderSpacing: [t],
          borderWidth: x(),
          contrast: P(),
          grayscale: F(),
          hueRotate: T(),
          invert: F(),
          gap: [t],
          gradientColorStops: [e],
          gradientColorStopPositions: [fn, ln],
          inset: B(),
          margin: B(),
          opacity: P(),
          padding: [t],
          saturate: P(),
          scale: P(),
          sepia: F(),
          skew: T(),
          space: [t],
          translate: [t],
        },
        classGroups: {
          aspect: [{ aspect: ["auto", "square", "video", vn] }],
          container: ["container"],
          columns: [{ columns: [bn] }],
          "break-after": [
            {
              "break-after": [
                "auto",
                "avoid",
                "all",
                "avoid-page",
                "page",
                "left",
                "right",
                "column",
              ],
            },
          ],
          "break-before": [
            {
              "break-before": [
                "auto",
                "avoid",
                "all",
                "avoid-page",
                "page",
                "left",
                "right",
                "column",
              ],
            },
          ],
          "break-inside": [
            { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
          ],
          "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
          box: [{ box: ["border", "content"] }],
          display: [
            "block",
            "inline-block",
            "inline",
            "flex",
            "inline-flex",
            "table",
            "inline-table",
            "table-caption",
            "table-cell",
            "table-column",
            "table-column-group",
            "table-footer-group",
            "table-header-group",
            "table-row-group",
            "table-row",
            "flow-root",
            "grid",
            "inline-grid",
            "contents",
            "list-item",
            "hidden",
          ],
          float: [{ float: ["right", "left", "none"] }],
          clear: [{ clear: ["left", "right", "both", "none"] }],
          isolation: ["isolate", "isolation-auto"],
          "object-fit": [
            { object: ["contain", "cover", "fill", "none", "scale-down"] },
          ],
          "object-position": [
            {
              object: [].concat(
                [
                  "bottom",
                  "center",
                  "left",
                  "left-bottom",
                  "left-top",
                  "right",
                  "right-bottom",
                  "right-top",
                  "top",
                ],
                [vn]
              ),
            },
          ],
          overflow: [
            { overflow: ["auto", "hidden", "clip", "visible", "scroll"] },
          ],
          "overflow-x": [
            { "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"] },
          ],
          "overflow-y": [
            { "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"] },
          ],
          overscroll: [{ overscroll: ["auto", "contain", "none"] }],
          "overscroll-x": [{ "overscroll-x": ["auto", "contain", "none"] }],
          "overscroll-y": [{ "overscroll-y": ["auto", "contain", "none"] }],
          position: ["static", "fixed", "absolute", "relative", "sticky"],
          inset: [{ inset: [f] }],
          "inset-x": [{ "inset-x": [f] }],
          "inset-y": [{ "inset-y": [f] }],
          start: [{ start: [f] }],
          end: [{ end: [f] }],
          top: [{ top: [f] }],
          right: [{ right: [f] }],
          bottom: [{ bottom: [f] }],
          left: [{ left: [f] }],
          visibility: ["visible", "invisible", "collapse"],
          z: [{ z: ["auto", gn] }],
          basis: [{ basis: B() }],
          "flex-direction": [
            { flex: ["row", "row-reverse", "col", "col-reverse"] },
          ],
          "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
          flex: [{ flex: ["1", "auto", "initial", "none", vn] }],
          grow: [{ grow: F() }],
          shrink: [{ shrink: F() }],
          order: [{ order: ["first", "last", "none", gn] }],
          "grid-cols": [{ "grid-cols": [yn] }],
          "col-start-end": [{ col: ["auto", { span: [gn] }, vn] }],
          "col-start": [{ "col-start": k() }],
          "col-end": [{ "col-end": k() }],
          "grid-rows": [{ "grid-rows": [yn] }],
          "row-start-end": [{ row: ["auto", { span: [gn] }, vn] }],
          "row-start": [{ "row-start": k() }],
          "row-end": [{ "row-end": k() }],
          "grid-flow": [
            { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
          ],
          "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", vn] }],
          "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", vn] }],
          gap: [{ gap: [h] }],
          "gap-x": [{ "gap-x": [h] }],
          "gap-y": [{ "gap-y": [h] }],
          "justify-content": [
            {
              justify: ["normal"].concat([
                "start",
                "end",
                "center",
                "between",
                "around",
                "evenly",
                "stretch",
              ]),
            },
          ],
          "justify-items": [
            { "justify-items": ["start", "end", "center", "stretch"] },
          ],
          "justify-self": [
            { "justify-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          "align-content": [
            {
              content: ["normal"].concat(
                [
                  "start",
                  "end",
                  "center",
                  "between",
                  "around",
                  "evenly",
                  "stretch",
                ],
                ["baseline"]
              ),
            },
          ],
          "align-items": [
            { items: ["start", "end", "center", "baseline", "stretch"] },
          ],
          "align-self": [
            { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
          ],
          "place-content": [
            {
              "place-content": [].concat(
                [
                  "start",
                  "end",
                  "center",
                  "between",
                  "around",
                  "evenly",
                  "stretch",
                ],
                ["baseline"]
              ),
            },
          ],
          "place-items": [
            {
              "place-items": ["start", "end", "center", "baseline", "stretch"],
            },
          ],
          "place-self": [
            { "place-self": ["auto", "start", "end", "center", "stretch"] },
          ],
          p: [{ p: [y] }],
          px: [{ px: [y] }],
          py: [{ py: [y] }],
          ps: [{ ps: [y] }],
          pe: [{ pe: [y] }],
          pt: [{ pt: [y] }],
          pr: [{ pr: [y] }],
          pb: [{ pb: [y] }],
          pl: [{ pl: [y] }],
          m: [{ m: [g] }],
          mx: [{ mx: [g] }],
          my: [{ my: [g] }],
          ms: [{ ms: [g] }],
          me: [{ me: [g] }],
          mt: [{ mt: [g] }],
          mr: [{ mr: [g] }],
          mb: [{ mb: [g] }],
          ml: [{ ml: [g] }],
          "space-x": [{ "space-x": [E] }],
          "space-x-reverse": ["space-x-reverse"],
          "space-y": [{ "space-y": [E] }],
          "space-y-reverse": ["space-y-reverse"],
          w: [{ w: ["auto", "min", "max", "fit", t] }],
          "min-w": [{ "min-w": ["min", "max", "fit", un] }],
          "max-w": [
            {
              "max-w": [
                "0",
                "none",
                "full",
                "min",
                "max",
                "fit",
                "prose",
                { screen: [bn] },
                bn,
                ln,
              ],
            },
          ],
          h: [{ h: [t, "auto", "min", "max", "fit"] }],
          "min-h": [{ "min-h": ["min", "max", "fit", un] }],
          "max-h": [{ "max-h": [t, "min", "max", "fit"] }],
          "font-size": [{ text: ["base", bn, ln] }],
          "font-smoothing": ["antialiased", "subpixel-antialiased"],
          "font-style": ["italic", "not-italic"],
          "font-weight": [
            {
              font: [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
                pn,
              ],
            },
          ],
          "font-family": [{ font: [yn] }],
          "fvn-normal": ["normal-nums"],
          "fvn-ordinal": ["ordinal"],
          "fvn-slashed-zero": ["slashed-zero"],
          "fvn-figure": ["lining-nums", "oldstyle-nums"],
          "fvn-spacing": ["proportional-nums", "tabular-nums"],
          "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
          tracking: [
            {
              tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest",
                ln,
              ],
            },
          ],
          "line-clamp": [{ "line-clamp": ["none", mn, pn] }],
          leading: [
            {
              leading: [
                "none",
                "tight",
                "snug",
                "normal",
                "relaxed",
                "loose",
                un,
              ],
            },
          ],
          "list-image": [{ "list-image": ["none", vn] }],
          "list-style-type": [{ list: ["none", "disc", "decimal", vn] }],
          "list-style-position": [{ list: ["inside", "outside"] }],
          "placeholder-color": [{ placeholder: [e] }],
          "placeholder-opacity": [{ "placeholder-opacity": [v] }],
          "text-alignment": [
            { text: ["left", "center", "right", "justify", "start", "end"] },
          ],
          "text-color": [{ text: [e] }],
          "text-opacity": [{ "text-opacity": [v] }],
          "text-decoration": [
            "underline",
            "overline",
            "line-through",
            "no-underline",
          ],
          "text-decoration-style": [
            {
              decoration: [].concat(
                ["solid", "dashed", "dotted", "double", "none"],
                ["wavy"]
              ),
            },
          ],
          "text-decoration-thickness": [
            { decoration: ["auto", "from-font", un] },
          ],
          "underline-offset": [{ "underline-offset": ["auto", un] }],
          "text-decoration-color": [{ decoration: [e] }],
          "text-transform": [
            "uppercase",
            "lowercase",
            "capitalize",
            "normal-case",
          ],
          "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
          indent: [{ indent: [t] }],
          "vertical-align": [
            {
              align: [
                "baseline",
                "top",
                "middle",
                "bottom",
                "text-top",
                "text-bottom",
                "sub",
                "super",
                ln,
              ],
            },
          ],
          whitespace: [
            {
              whitespace: [
                "normal",
                "nowrap",
                "pre",
                "pre-line",
                "pre-wrap",
                "break-spaces",
              ],
            },
          ],
          break: [{ break: ["normal", "words", "all", "keep"] }],
          hyphens: [{ hyphens: ["none", "manual", "auto"] }],
          content: [{ content: ["none", vn] }],
          "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
          "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
          "bg-opacity": [{ "bg-opacity": [v] }],
          "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
          "bg-position": [
            {
              bg: [].concat(
                [
                  "bottom",
                  "center",
                  "left",
                  "left-bottom",
                  "left-top",
                  "right",
                  "right-bottom",
                  "right-top",
                  "top",
                ],
                [dn]
              ),
            },
          ],
          "bg-repeat": [
            { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
          ],
          "bg-size": [{ bg: ["auto", "cover", "contain", cn] }],
          "bg-image": [
            {
              bg: [
                "none",
                { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                hn,
              ],
            },
          ],
          "bg-color": [{ bg: [e] }],
          "gradient-from-pos": [{ from: [m] }],
          "gradient-via-pos": [{ via: [m] }],
          "gradient-to-pos": [{ to: [m] }],
          "gradient-from": [{ from: [p] }],
          "gradient-via": [{ via: [p] }],
          "gradient-to": [{ to: [p] }],
          rounded: [{ rounded: [o] }],
          "rounded-s": [{ "rounded-s": [o] }],
          "rounded-e": [{ "rounded-e": [o] }],
          "rounded-t": [{ "rounded-t": [o] }],
          "rounded-r": [{ "rounded-r": [o] }],
          "rounded-b": [{ "rounded-b": [o] }],
          "rounded-l": [{ "rounded-l": [o] }],
          "rounded-ss": [{ "rounded-ss": [o] }],
          "rounded-se": [{ "rounded-se": [o] }],
          "rounded-ee": [{ "rounded-ee": [o] }],
          "rounded-es": [{ "rounded-es": [o] }],
          "rounded-tl": [{ "rounded-tl": [o] }],
          "rounded-tr": [{ "rounded-tr": [o] }],
          "rounded-br": [{ "rounded-br": [o] }],
          "rounded-bl": [{ "rounded-bl": [o] }],
          "border-w": [{ border: [a] }],
          "border-w-x": [{ "border-x": [a] }],
          "border-w-y": [{ "border-y": [a] }],
          "border-w-s": [{ "border-s": [a] }],
          "border-w-e": [{ "border-e": [a] }],
          "border-w-t": [{ "border-t": [a] }],
          "border-w-r": [{ "border-r": [a] }],
          "border-w-b": [{ "border-b": [a] }],
          "border-w-l": [{ "border-l": [a] }],
          "border-opacity": [{ "border-opacity": [v] }],
          "border-style": [
            {
              border: [].concat(
                ["solid", "dashed", "dotted", "double", "none"],
                ["hidden"]
              ),
            },
          ],
          "divide-x": [{ "divide-x": [a] }],
          "divide-x-reverse": ["divide-x-reverse"],
          "divide-y": [{ "divide-y": [a] }],
          "divide-y-reverse": ["divide-y-reverse"],
          "divide-opacity": [{ "divide-opacity": [v] }],
          "divide-style": [
            { divide: ["solid", "dashed", "dotted", "double", "none"] },
          ],
          "border-color": [{ border: [i] }],
          "border-color-x": [{ "border-x": [i] }],
          "border-color-y": [{ "border-y": [i] }],
          "border-color-t": [{ "border-t": [i] }],
          "border-color-r": [{ "border-r": [i] }],
          "border-color-b": [{ "border-b": [i] }],
          "border-color-l": [{ "border-l": [i] }],
          "divide-color": [{ divide: [i] }],
          "outline-style": [
            {
              outline: [""].concat([
                "solid",
                "dashed",
                "dotted",
                "double",
                "none",
              ]),
            },
          ],
          "outline-offset": [{ "outline-offset": [un] }],
          "outline-w": [{ outline: [un] }],
          "outline-color": [{ outline: [e] }],
          "ring-w": [{ ring: x() }],
          "ring-w-inset": ["ring-inset"],
          "ring-color": [{ ring: [e] }],
          "ring-opacity": [{ "ring-opacity": [v] }],
          "ring-offset-w": [{ "ring-offset": [un] }],
          "ring-offset-color": [{ "ring-offset": [e] }],
          shadow: [{ shadow: ["", "inner", "none", bn, Cn] }],
          "shadow-color": [{ shadow: [yn] }],
          opacity: [{ opacity: [v] }],
          "mix-blend": [
            {
              "mix-blend": [
                "normal",
                "multiply",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "hue",
                "saturation",
                "color",
                "luminosity",
                "plus-lighter",
              ],
            },
          ],
          "bg-blend": [
            {
              "bg-blend": [
                "normal",
                "multiply",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "hue",
                "saturation",
                "color",
                "luminosity",
                "plus-lighter",
              ],
            },
          ],
          filter: [{ filter: ["", "none"] }],
          blur: [{ blur: [n] }],
          brightness: [{ brightness: [r] }],
          contrast: [{ contrast: [u] }],
          "drop-shadow": [{ "drop-shadow": ["", "none", bn, vn] }],
          grayscale: [{ grayscale: [l] }],
          "hue-rotate": [{ "hue-rotate": [c] }],
          invert: [{ invert: [d] }],
          saturate: [{ saturate: [b] }],
          sepia: [{ sepia: [D] }],
          "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
          "backdrop-blur": [{ "backdrop-blur": [n] }],
          "backdrop-brightness": [{ "backdrop-brightness": [r] }],
          "backdrop-contrast": [{ "backdrop-contrast": [u] }],
          "backdrop-grayscale": [{ "backdrop-grayscale": [l] }],
          "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
          "backdrop-invert": [{ "backdrop-invert": [d] }],
          "backdrop-opacity": [{ "backdrop-opacity": [v] }],
          "backdrop-saturate": [{ "backdrop-saturate": [b] }],
          "backdrop-sepia": [{ "backdrop-sepia": [D] }],
          "border-collapse": [{ border: ["collapse", "separate"] }],
          "border-spacing": [{ "border-spacing": [s] }],
          "border-spacing-x": [{ "border-spacing-x": [s] }],
          "border-spacing-y": [{ "border-spacing-y": [s] }],
          "table-layout": [{ table: ["auto", "fixed"] }],
          caption: [{ caption: ["top", "bottom"] }],
          transition: [
            {
              transition: [
                "none",
                "all",
                "",
                "colors",
                "opacity",
                "shadow",
                "transform",
                vn,
              ],
            },
          ],
          duration: [{ duration: T() }],
          ease: [{ ease: ["linear", "in", "out", "in-out", vn] }],
          delay: [{ delay: T() }],
          animate: [
            { animate: ["none", "spin", "ping", "pulse", "bounce", vn] },
          ],
          transform: [{ transform: ["", "gpu", "none"] }],
          scale: [{ scale: [C] }],
          "scale-x": [{ "scale-x": [C] }],
          "scale-y": [{ "scale-y": [C] }],
          rotate: [{ rotate: [gn, vn] }],
          "translate-x": [{ "translate-x": [A] }],
          "translate-y": [{ "translate-y": [A] }],
          "skew-x": [{ "skew-x": [w] }],
          "skew-y": [{ "skew-y": [w] }],
          "transform-origin": [
            {
              origin: [
                "center",
                "top",
                "top-right",
                "right",
                "bottom-right",
                "bottom",
                "bottom-left",
                "left",
                "top-left",
                vn,
              ],
            },
          ],
          accent: [{ accent: ["auto", e] }],
          appearance: ["appearance-none"],
          cursor: [
            {
              cursor: [
                "auto",
                "default",
                "pointer",
                "wait",
                "text",
                "move",
                "help",
                "not-allowed",
                "none",
                "context-menu",
                "progress",
                "cell",
                "crosshair",
                "vertical-text",
                "alias",
                "copy",
                "no-drop",
                "grab",
                "grabbing",
                "all-scroll",
                "col-resize",
                "row-resize",
                "n-resize",
                "e-resize",
                "s-resize",
                "w-resize",
                "ne-resize",
                "nw-resize",
                "se-resize",
                "sw-resize",
                "ew-resize",
                "ns-resize",
                "nesw-resize",
                "nwse-resize",
                "zoom-in",
                "zoom-out",
                vn,
              ],
            },
          ],
          "caret-color": [{ caret: [e] }],
          "pointer-events": [{ "pointer-events": ["none", "auto"] }],
          resize: [{ resize: ["none", "y", "x", ""] }],
          "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
          "scroll-m": [{ "scroll-m": [t] }],
          "scroll-mx": [{ "scroll-mx": [t] }],
          "scroll-my": [{ "scroll-my": [t] }],
          "scroll-ms": [{ "scroll-ms": [t] }],
          "scroll-me": [{ "scroll-me": [t] }],
          "scroll-mt": [{ "scroll-mt": [t] }],
          "scroll-mr": [{ "scroll-mr": [t] }],
          "scroll-mb": [{ "scroll-mb": [t] }],
          "scroll-ml": [{ "scroll-ml": [t] }],
          "scroll-p": [{ "scroll-p": [t] }],
          "scroll-px": [{ "scroll-px": [t] }],
          "scroll-py": [{ "scroll-py": [t] }],
          "scroll-ps": [{ "scroll-ps": [t] }],
          "scroll-pe": [{ "scroll-pe": [t] }],
          "scroll-pt": [{ "scroll-pt": [t] }],
          "scroll-pr": [{ "scroll-pr": [t] }],
          "scroll-pb": [{ "scroll-pb": [t] }],
          "scroll-pl": [{ "scroll-pl": [t] }],
          "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
          "snap-stop": [{ snap: ["normal", "always"] }],
          "snap-type": [{ snap: ["none", "x", "y", "both"] }],
          "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
          touch: [
            {
              touch: [
                "auto",
                "none",
                "pinch-zoom",
                "manipulation",
                { pan: ["x", "left", "right", "y", "up", "down"] },
              ],
            },
          ],
          select: [{ select: ["none", "text", "all", "auto"] }],
          "will-change": [
            { "will-change": ["auto", "scroll", "contents", "transform", vn] },
          ],
          fill: [{ fill: [e, "none"] }],
          "stroke-w": [{ stroke: [un, pn] }],
          stroke: [{ stroke: [e, "none"] }],
          sr: ["sr-only", "not-sr-only"],
        },
        conflictingClassGroups: {
          overflow: ["overflow-x", "overflow-y"],
          overscroll: ["overscroll-x", "overscroll-y"],
          inset: [
            "inset-x",
            "inset-y",
            "start",
            "end",
            "top",
            "right",
            "bottom",
            "left",
          ],
          "inset-x": ["right", "left"],
          "inset-y": ["top", "bottom"],
          flex: ["basis", "grow", "shrink"],
          gap: ["gap-x", "gap-y"],
          p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
          px: ["pr", "pl"],
          py: ["pt", "pb"],
          m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
          mx: ["mr", "ml"],
          my: ["mt", "mb"],
          "font-size": ["leading"],
          "fvn-normal": [
            "fvn-ordinal",
            "fvn-slashed-zero",
            "fvn-figure",
            "fvn-spacing",
            "fvn-fraction",
          ],
          "fvn-ordinal": ["fvn-normal"],
          "fvn-slashed-zero": ["fvn-normal"],
          "fvn-figure": ["fvn-normal"],
          "fvn-spacing": ["fvn-normal"],
          "fvn-fraction": ["fvn-normal"],
          rounded: [
            "rounded-s",
            "rounded-e",
            "rounded-t",
            "rounded-r",
            "rounded-b",
            "rounded-l",
            "rounded-ss",
            "rounded-se",
            "rounded-ee",
            "rounded-es",
            "rounded-tl",
            "rounded-tr",
            "rounded-br",
            "rounded-bl",
          ],
          "rounded-s": ["rounded-ss", "rounded-es"],
          "rounded-e": ["rounded-se", "rounded-ee"],
          "rounded-t": ["rounded-tl", "rounded-tr"],
          "rounded-r": ["rounded-tr", "rounded-br"],
          "rounded-b": ["rounded-br", "rounded-bl"],
          "rounded-l": ["rounded-tl", "rounded-bl"],
          "border-spacing": ["border-spacing-x", "border-spacing-y"],
          "border-w": [
            "border-w-s",
            "border-w-e",
            "border-w-t",
            "border-w-r",
            "border-w-b",
            "border-w-l",
          ],
          "border-w-x": ["border-w-r", "border-w-l"],
          "border-w-y": ["border-w-t", "border-w-b"],
          "border-color": [
            "border-color-t",
            "border-color-r",
            "border-color-b",
            "border-color-l",
          ],
          "border-color-x": ["border-color-r", "border-color-l"],
          "border-color-y": ["border-color-t", "border-color-b"],
          "scroll-m": [
            "scroll-mx",
            "scroll-my",
            "scroll-ms",
            "scroll-me",
            "scroll-mt",
            "scroll-mr",
            "scroll-mb",
            "scroll-ml",
          ],
          "scroll-mx": ["scroll-mr", "scroll-ml"],
          "scroll-my": ["scroll-mt", "scroll-mb"],
          "scroll-p": [
            "scroll-px",
            "scroll-py",
            "scroll-ps",
            "scroll-pe",
            "scroll-pt",
            "scroll-pr",
            "scroll-pb",
            "scroll-pl",
          ],
          "scroll-px": ["scroll-pr", "scroll-pl"],
          "scroll-py": ["scroll-pt", "scroll-pb"],
        },
        conflictingClassGroupModifiers: { "font-size": ["leading"] },
      };
    }
    var Fn = Qt(kn);
    function Pn(...e) {
      return Fn(It(e));
    }
    function Tn() {
      return (
        (Tn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Tn.apply(this, arguments)
      );
    }
    function Sn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
      return function (r) {
        if ((null == e || e(r), !1 === n || !r.defaultPrevented))
          return null == t ? void 0 : t(r);
      };
    }
    function Mn(...e) {
      return (t) =>
        e.forEach((e) =>
          (function (e, t) {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          })(e, t)
        );
    }
    function On(...t) {
      return (0, e.useCallback)(Mn(...t), t);
    }
    function _n(...t) {
      const n = t[0];
      if (1 === t.length) return n;
      const r = () => {
        const r = t.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
        return function (t) {
          const i = r.reduce(
            (e, { useScope: n, scopeName: r }) => ({
              ...e,
              ...n(t)[`__scope${r}`],
            }),
            {}
          );
          return (0, e.useMemo)(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
        };
      };
      return (r.scopeName = n.scopeName), r;
    }
    const Rn = Boolean(
        null === globalThis || void 0 === globalThis
          ? void 0
          : globalThis.document
      )
        ? e.useLayoutEffect
        : () => {},
      Nn = t["useId".toString()] || (() => {});
    let jn = 0;
    function Ln(t) {
      const [n, r] = e.useState(Nn());
      return (
        Rn(() => {
          t || r((e) => (null != e ? e : String(jn++)));
        }, [t]),
        t || (n ? `radix-${n}` : "")
      );
    }
    function In(t) {
      const n = (0, e.useRef)(t);
      return (
        (0, e.useEffect)(() => {
          n.current = t;
        }),
        (0, e.useMemo)(
          () =>
            (...e) => {
              var t;
              return null === (t = n.current) || void 0 === t
                ? void 0
                : t.call(n, ...e);
            },
          []
        )
      );
    }
    const Vn = ReactDOM,
      zn = (0, e.forwardRef)((t, n) => {
        const { children: r, ...i } = t,
          o = e.Children.toArray(r),
          s = o.find(qn);
        if (s) {
          const t = s.props.children,
            r = o.map((n) =>
              n === s
                ? e.Children.count(t) > 1
                  ? e.Children.only(null)
                  : (0, e.isValidElement)(t)
                  ? t.props.children
                  : null
                : n
            );
          return (0, e.createElement)(
            $n,
            Tn({}, i, { ref: n }),
            (0, e.isValidElement)(t) ? (0, e.cloneElement)(t, void 0, r) : null
          );
        }
        return (0, e.createElement)($n, Tn({}, i, { ref: n }), r);
      });
    zn.displayName = "Slot";
    const $n = (0, e.forwardRef)((t, n) => {
      const { children: r, ...i } = t;
      return (0, e.isValidElement)(r)
        ? (0, e.cloneElement)(r, {
            ...Un(i, r.props),
            ref: n ? Mn(n, r.ref) : r.ref,
          })
        : e.Children.count(r) > 1
        ? e.Children.only(null)
        : null;
    });
    $n.displayName = "SlotClone";
    const Wn = ({ children: t }) => (0, e.createElement)(e.Fragment, null, t);
    function qn(t) {
      return (0, e.isValidElement)(t) && t.type === Wn;
    }
    function Un(e, t) {
      const n = { ...t };
      for (const r in t) {
        const i = e[r],
          o = t[r];
        /^on[A-Z]/.test(r)
          ? i && o
            ? (n[r] = (...e) => {
                o(...e), i(...e);
              })
            : i && (n[r] = i)
          : "style" === r
          ? (n[r] = { ...i, ...o })
          : "className" === r && (n[r] = [i, o].filter(Boolean).join(" "));
      }
      return { ...e, ...n };
    }
    const Hn = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((t, n) => {
        const r = (0, e.forwardRef)((t, r) => {
          const { asChild: i, ...o } = t,
            s = i ? zn : n;
          return (
            (0, e.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, e.createElement)(s, Tn({}, o, { ref: r }))
          );
        });
        return (r.displayName = `Primitive.${n}`), { ...t, [n]: r };
      }, {}),
      Zn = "dismissableLayer.update";
    let Yn;
    const Gn = (0, e.createContext)({
        layers: new Set(),
        layersWithOutsidePointerEventsDisabled: new Set(),
        branches: new Set(),
      }),
      Xn = (0, e.forwardRef)((t, n) => {
        var r;
        const {
            disableOutsidePointerEvents: i = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            onFocusOutside: a,
            onInteractOutside: u,
            onDismiss: l,
            ...c
          } = t,
          d = (0, e.useContext)(Gn),
          [h, p] = (0, e.useState)(null),
          m =
            null !== (r = null == h ? void 0 : h.ownerDocument) && void 0 !== r
              ? r
              : null === globalThis || void 0 === globalThis
              ? void 0
              : globalThis.document,
          [, f] = (0, e.useState)({}),
          g = On(n, (e) => p(e)),
          v = Array.from(d.layers),
          [y] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
          b = v.indexOf(y),
          C = h ? v.indexOf(h) : -1,
          D = d.layersWithOutsidePointerEventsDisabled.size > 0,
          w = C >= b,
          E = (function (
            t,
            n = null === globalThis || void 0 === globalThis
              ? void 0
              : globalThis.document
          ) {
            const r = In(t),
              i = (0, e.useRef)(!1),
              o = (0, e.useRef)(() => {});
            return (
              (0, e.useEffect)(() => {
                const e = (e) => {
                    if (e.target && !i.current) {
                      const t = { originalEvent: e };
                      function s() {
                        Jn("dismissableLayer.pointerDownOutside", r, t, {
                          discrete: !0,
                        });
                      }
                      "touch" === e.pointerType
                        ? (n.removeEventListener("click", o.current),
                          (o.current = s),
                          n.addEventListener("click", o.current, { once: !0 }))
                        : s();
                    }
                    i.current = !1;
                  },
                  t = window.setTimeout(() => {
                    n.addEventListener("pointerdown", e);
                  }, 0);
                return () => {
                  window.clearTimeout(t),
                    n.removeEventListener("pointerdown", e),
                    n.removeEventListener("click", o.current);
                };
              }, [n, r]),
              { onPointerDownCapture: () => (i.current = !0) }
            );
          })((e) => {
            const t = e.target,
              n = [...d.branches].some((e) => e.contains(t));
            w &&
              !n &&
              (null == s || s(e),
              null == u || u(e),
              e.defaultPrevented || null == l || l());
          }, m),
          A = (function (
            t,
            n = null === globalThis || void 0 === globalThis
              ? void 0
              : globalThis.document
          ) {
            const r = In(t),
              i = (0, e.useRef)(!1);
            return (
              (0, e.useEffect)(() => {
                const e = (e) => {
                  e.target &&
                    !i.current &&
                    Jn(
                      "dismissableLayer.focusOutside",
                      r,
                      { originalEvent: e },
                      { discrete: !1 }
                    );
                };
                return (
                  n.addEventListener("focusin", e),
                  () => n.removeEventListener("focusin", e)
                );
              }, [n, r]),
              {
                onFocusCapture: () => (i.current = !0),
                onBlurCapture: () => (i.current = !1),
              }
            );
          })((e) => {
            const t = e.target;
            [...d.branches].some((e) => e.contains(t)) ||
              (null == a || a(e),
              null == u || u(e),
              e.defaultPrevented || null == l || l());
          }, m);
        return (
          (function (
            t,
            n = null === globalThis || void 0 === globalThis
              ? void 0
              : globalThis.document
          ) {
            const r = In(t);
            (0, e.useEffect)(() => {
              const e = (e) => {
                "Escape" === e.key && r(e);
              };
              return (
                n.addEventListener("keydown", e),
                () => n.removeEventListener("keydown", e)
              );
            }, [r, n]);
          })((e) => {
            C === d.layers.size - 1 &&
              (null == o || o(e),
              !e.defaultPrevented && l && (e.preventDefault(), l()));
          }, m),
          (0, e.useEffect)(() => {
            if (h)
              return (
                i &&
                  (0 === d.layersWithOutsidePointerEventsDisabled.size &&
                    ((Yn = m.body.style.pointerEvents),
                    (m.body.style.pointerEvents = "none")),
                  d.layersWithOutsidePointerEventsDisabled.add(h)),
                d.layers.add(h),
                Kn(),
                () => {
                  i &&
                    1 === d.layersWithOutsidePointerEventsDisabled.size &&
                    (m.body.style.pointerEvents = Yn);
                }
              );
          }, [h, m, i, d]),
          (0, e.useEffect)(
            () => () => {
              h &&
                (d.layers.delete(h),
                d.layersWithOutsidePointerEventsDisabled.delete(h),
                Kn());
            },
            [h, d]
          ),
          (0, e.useEffect)(() => {
            const e = () => f({});
            return (
              document.addEventListener(Zn, e),
              () => document.removeEventListener(Zn, e)
            );
          }, []),
          (0, e.createElement)(
            Hn.div,
            Tn({}, c, {
              ref: g,
              style: {
                pointerEvents: D ? (w ? "auto" : "none") : void 0,
                ...t.style,
              },
              onFocusCapture: Sn(t.onFocusCapture, A.onFocusCapture),
              onBlurCapture: Sn(t.onBlurCapture, A.onBlurCapture),
              onPointerDownCapture: Sn(
                t.onPointerDownCapture,
                E.onPointerDownCapture
              ),
            })
          )
        );
      });
    function Kn() {
      const e = new CustomEvent(Zn);
      document.dispatchEvent(e);
    }
    function Jn(e, t, n, { discrete: r }) {
      const i = n.originalEvent.target,
        o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
      t && i.addEventListener(e, t, { once: !0 }),
        r
          ? (function (e, t) {
              e && (0, Vn.flushSync)(() => e.dispatchEvent(t));
            })(i, o)
          : i.dispatchEvent(o);
    }
    const Qn = "focusScope.autoFocusOnMount",
      er = "focusScope.autoFocusOnUnmount",
      tr = { bubbles: !1, cancelable: !0 },
      nr = (0, e.forwardRef)((t, n) => {
        const {
            loop: r = !1,
            trapped: i = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            ...a
          } = t,
          [u, l] = (0, e.useState)(null),
          c = In(o),
          d = In(s),
          h = (0, e.useRef)(null),
          p = On(n, (e) => l(e)),
          m = (0, e.useRef)({
            paused: !1,
            pause() {
              this.paused = !0;
            },
            resume() {
              this.paused = !1;
            },
          }).current;
        (0, e.useEffect)(() => {
          if (i) {
            function e(e) {
              if (m.paused || !u) return;
              const t = e.target;
              u.contains(t) ? (h.current = t) : sr(h.current, { select: !0 });
            }
            function t(e) {
              if (m.paused || !u) return;
              const t = e.relatedTarget;
              null !== t && (u.contains(t) || sr(h.current, { select: !0 }));
            }
            function n(e) {
              const t = document.activeElement;
              for (const n of e)
                n.removedNodes.length > 0 &&
                  ((null != u && u.contains(t)) || sr(u));
            }
            document.addEventListener("focusin", e),
              document.addEventListener("focusout", t);
            const r = new MutationObserver(n);
            return (
              u && r.observe(u, { childList: !0, subtree: !0 }),
              () => {
                document.removeEventListener("focusin", e),
                  document.removeEventListener("focusout", t),
                  r.disconnect();
              }
            );
          }
        }, [i, u, m.paused]),
          (0, e.useEffect)(() => {
            if (u) {
              ar.add(m);
              const e = document.activeElement;
              if (!u.contains(e)) {
                const t = new CustomEvent(Qn, tr);
                u.addEventListener(Qn, c),
                  u.dispatchEvent(t),
                  t.defaultPrevented ||
                    ((function (e, { select: t = !1 } = {}) {
                      const n = document.activeElement;
                      for (const r of e)
                        if (
                          (sr(r, { select: t }), document.activeElement !== n)
                        )
                          return;
                    })(
                      rr(u).filter((e) => "A" !== e.tagName),
                      { select: !0 }
                    ),
                    document.activeElement === e && sr(u));
              }
              return () => {
                u.removeEventListener(Qn, c),
                  setTimeout(() => {
                    const t = new CustomEvent(er, tr);
                    u.addEventListener(er, d),
                      u.dispatchEvent(t),
                      t.defaultPrevented ||
                        sr(null != e ? e : document.body, { select: !0 }),
                      u.removeEventListener(er, d),
                      ar.remove(m);
                  }, 0);
              };
            }
          }, [u, c, d, m]);
        const f = (0, e.useCallback)(
          (e) => {
            if (!r && !i) return;
            if (m.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              n = document.activeElement;
            if (t && n) {
              const t = e.currentTarget,
                [i, o] = (function (e) {
                  const t = rr(e);
                  return [ir(t, e), ir(t.reverse(), e)];
                })(t);
              i && o
                ? e.shiftKey || n !== o
                  ? e.shiftKey &&
                    n === i &&
                    (e.preventDefault(), r && sr(o, { select: !0 }))
                  : (e.preventDefault(), r && sr(i, { select: !0 }))
                : n === t && e.preventDefault();
            }
          },
          [r, i, m.paused]
        );
        return (0, e.createElement)(
          Hn.div,
          Tn({ tabIndex: -1 }, a, { ref: p, onKeyDown: f })
        );
      });
    function rr(e) {
      const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (e) => {
            const t = "INPUT" === e.tagName && "hidden" === e.type;
            return e.disabled || e.hidden || t
              ? NodeFilter.FILTER_SKIP
              : e.tabIndex >= 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP;
          },
        });
      for (; n.nextNode(); ) t.push(n.currentNode);
      return t;
    }
    function ir(e, t) {
      for (const n of e) if (!or(n, { upTo: t })) return n;
    }
    function or(e, { upTo: t }) {
      if ("hidden" === getComputedStyle(e).visibility) return !0;
      for (; e; ) {
        if (void 0 !== t && e === t) return !1;
        if ("none" === getComputedStyle(e).display) return !0;
        e = e.parentElement;
      }
      return !1;
    }
    function sr(e, { select: t = !1 } = {}) {
      if (e && e.focus) {
        const n = document.activeElement;
        e.focus({ preventScroll: !0 }),
          e !== n &&
            (function (e) {
              return e instanceof HTMLInputElement && "select" in e;
            })(e) &&
            t &&
            e.select();
      }
    }
    const ar = (function () {
      let e = [];
      return {
        add(t) {
          const n = e[0];
          t !== n && (null == n || n.pause()), (e = ur(e, t)), e.unshift(t);
        },
        remove(t) {
          var n;
          (e = ur(e, t)), null === (n = e[0]) || void 0 === n || n.resume();
        },
      };
    })();
    function ur(e, t) {
      const n = [...e],
        r = n.indexOf(t);
      return -1 !== r && n.splice(r, 1), n;
    }
    const lr = (0, e.forwardRef)((t, n) => {
        var r;
        const {
          container: i = null === globalThis ||
          void 0 === globalThis ||
          null === (r = globalThis.document) ||
          void 0 === r
            ? void 0
            : r.body,
          ...o
        } = t;
        return i
          ? Vn.createPortal(
              (0, e.createElement)(Hn.div, Tn({}, o, { ref: n })),
              i
            )
          : null;
      }),
      cr = (t) => {
        const { present: n, children: r } = t,
          i = (function (t) {
            const [n, r] = (0, e.useState)(),
              i = (0, e.useRef)({}),
              o = (0, e.useRef)(t),
              s = (0, e.useRef)("none"),
              a = t ? "mounted" : "unmounted",
              [u, l] = (function (t, n) {
                return (0, e.useReducer)((e, t) => {
                  const r = n[e][t];
                  return null != r ? r : e;
                }, t);
              })(a, {
                mounted: {
                  UNMOUNT: "unmounted",
                  ANIMATION_OUT: "unmountSuspended",
                },
                unmountSuspended: {
                  MOUNT: "mounted",
                  ANIMATION_END: "unmounted",
                },
                unmounted: { MOUNT: "mounted" },
              });
            return (
              (0, e.useEffect)(() => {
                const e = dr(i.current);
                s.current = "mounted" === u ? e : "none";
              }, [u]),
              Rn(() => {
                const e = i.current,
                  n = o.current;
                if (n !== t) {
                  const r = s.current,
                    i = dr(e);
                  t
                    ? l("MOUNT")
                    : "none" === i ||
                      "none" === (null == e ? void 0 : e.display)
                    ? l("UNMOUNT")
                    : l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"),
                    (o.current = t);
                }
              }, [t, l]),
              Rn(() => {
                if (n) {
                  const e = (e) => {
                      const t = dr(i.current).includes(e.animationName);
                      e.target === n &&
                        t &&
                        (0, Vn.flushSync)(() => l("ANIMATION_END"));
                    },
                    t = (e) => {
                      e.target === n && (s.current = dr(i.current));
                    };
                  return (
                    n.addEventListener("animationstart", t),
                    n.addEventListener("animationcancel", e),
                    n.addEventListener("animationend", e),
                    () => {
                      n.removeEventListener("animationstart", t),
                        n.removeEventListener("animationcancel", e),
                        n.removeEventListener("animationend", e);
                    }
                  );
                }
                l("ANIMATION_END");
              }, [n, l]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(u),
                ref: (0, e.useCallback)((e) => {
                  e && (i.current = getComputedStyle(e)), r(e);
                }, []),
              }
            );
          })(n),
          o =
            "function" == typeof r
              ? r({ present: i.isPresent })
              : e.Children.only(r),
          s = On(i.ref, o.ref);
        return "function" == typeof r || i.isPresent
          ? (0, e.cloneElement)(o, { ref: s })
          : null;
      };
    function dr(e) {
      return (null == e ? void 0 : e.animationName) || "none";
    }
    cr.displayName = "Presence";
    let hr = 0;
    function pr() {
      const e = document.createElement("span");
      return (
        e.setAttribute("data-radix-focus-guard", ""),
        (e.tabIndex = 0),
        (e.style.cssText =
          "outline: none; opacity: 0; position: fixed; pointer-events: none"),
        e
      );
    }
    var mr = function () {
      return (
        (mr =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }),
        mr.apply(this, arguments)
      );
    };
    function fr(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      }
      return n;
    }
    Object.create,
      Object.create,
      "function" == typeof SuppressedError && SuppressedError;
    var gr = "right-scroll-bar-position",
      vr = "width-before-scroll-bar";
    function yr(e) {
      return e;
    }
    var br = (function (e) {
        void 0 === e && (e = {});
        var t = (function (e, t) {
          void 0 === t && (t = yr);
          var n = [],
            r = !1,
            i = {
              read: function () {
                if (r)
                  throw new Error(
                    "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                  );
                return n.length ? n[n.length - 1] : e;
              },
              useMedium: function (e) {
                var i = t(e, r);
                return (
                  n.push(i),
                  function () {
                    n = n.filter(function (e) {
                      return e !== i;
                    });
                  }
                );
              },
              assignSyncMedium: function (e) {
                for (r = !0; n.length; ) {
                  var t = n;
                  (n = []), t.forEach(e);
                }
                n = {
                  push: function (t) {
                    return e(t);
                  },
                  filter: function () {
                    return n;
                  },
                };
              },
              assignMedium: function (e) {
                r = !0;
                var t = [];
                if (n.length) {
                  var i = n;
                  (n = []), i.forEach(e), (t = n);
                }
                var o = function () {
                    var n = t;
                    (t = []), n.forEach(e);
                  },
                  s = function () {
                    return Promise.resolve().then(o);
                  };
                s(),
                  (n = {
                    push: function (e) {
                      t.push(e), s();
                    },
                    filter: function (e) {
                      return (t = t.filter(e)), n;
                    },
                  });
              },
            };
          return i;
        })(null);
        return (t.options = mr({ async: !0, ssr: !1 }, e)), t;
      })(),
      Cr = function () {},
      Dr = e.forwardRef(function (t, n) {
        var r = e.useRef(null),
          i = e.useState({
            onScrollCapture: Cr,
            onWheelCapture: Cr,
            onTouchMoveCapture: Cr,
          }),
          o = i[0],
          s = i[1],
          a = t.forwardProps,
          u = t.children,
          l = t.className,
          c = t.removeScrollBar,
          d = t.enabled,
          h = t.shards,
          p = t.sideCar,
          m = t.noIsolation,
          f = t.inert,
          g = t.allowPinchZoom,
          v = t.as,
          y = void 0 === v ? "div" : v,
          b = fr(t, [
            "forwardProps",
            "children",
            "className",
            "removeScrollBar",
            "enabled",
            "shards",
            "sideCar",
            "noIsolation",
            "inert",
            "allowPinchZoom",
            "as",
          ]),
          C = p,
          D = (function (t, n) {
            return (
              (r = n || null),
              (i = function (e) {
                return t.forEach(function (t) {
                  return (function (e, t) {
                    return (
                      "function" == typeof e ? e(t) : e && (e.current = t), e
                    );
                  })(t, e);
                });
              }),
              ((o = (0, e.useState)(function () {
                return {
                  value: r,
                  callback: i,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(e) {
                      var t = o.value;
                      t !== e && ((o.value = e), o.callback(e, t));
                    },
                  },
                };
              })[0]).callback = i),
              o.facade
            );
            var r, i, o;
          })([r, n]),
          w = mr(mr({}, b), o);
        return e.createElement(
          e.Fragment,
          null,
          d &&
            e.createElement(C, {
              sideCar: br,
              removeScrollBar: c,
              shards: h,
              noIsolation: m,
              inert: f,
              setCallbacks: s,
              allowPinchZoom: !!g,
              lockRef: r,
            }),
          a
            ? e.cloneElement(e.Children.only(u), mr(mr({}, w), { ref: D }))
            : e.createElement(y, mr({}, w, { className: l, ref: D }), u)
        );
      });
    (Dr.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
      (Dr.classNames = { fullWidth: vr, zeroRight: gr });
    var wr = function (t) {
      var n = t.sideCar,
        r = fr(t, ["sideCar"]);
      if (!n)
        throw new Error(
          "Sidecar: please provide `sideCar` property to import the right car"
        );
      var i = n.read();
      if (!i) throw new Error("Sidecar medium not found");
      return e.createElement(i, mr({}, r));
    };
    wr.isSideCarExport = !0;
    var Er = function () {
        var e = 0,
          t = null;
        return {
          add: function (n) {
            var r, o;
            0 == e &&
              (t = (function () {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = i.nc;
                return t && e.setAttribute("nonce", t), e;
              })()) &&
              ((o = n),
              (r = t).styleSheet
                ? (r.styleSheet.cssText = o)
                : r.appendChild(document.createTextNode(o)),
              (function (e) {
                (
                  document.head || document.getElementsByTagName("head")[0]
                ).appendChild(e);
              })(t)),
              e++;
          },
          remove: function () {
            !--e &&
              t &&
              (t.parentNode && t.parentNode.removeChild(t), (t = null));
          },
        };
      },
      Ar = function () {
        var t,
          n =
            ((t = Er()),
            function (n, r) {
              e.useEffect(
                function () {
                  return (
                    t.add(n),
                    function () {
                      t.remove();
                    }
                  );
                },
                [n && r]
              );
            });
        return function (e) {
          var t = e.styles,
            r = e.dynamic;
          return n(t, r), null;
        };
      },
      Br = { left: 0, top: 0, right: 0, gap: 0 },
      xr = function (e) {
        return parseInt(e || "", 10) || 0;
      },
      kr = Ar(),
      Fr = function (e, t, n, r) {
        var i = e.left,
          o = e.top,
          s = e.right,
          a = e.gap;
        return (
          void 0 === n && (n = "margin"),
          "\n  ."
            .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
            .concat(r, ";\n   padding-right: ")
            .concat(a, "px ")
            .concat(r, ";\n  }\n  body {\n    overflow: hidden ")
            .concat(r, ";\n    overscroll-behavior: contain;\n    ")
            .concat(
              [
                t && "position: relative ".concat(r, ";"),
                "margin" === n &&
                  "\n    padding-left: "
                    .concat(i, "px;\n    padding-top: ")
                    .concat(o, "px;\n    padding-right: ")
                    .concat(
                      s,
                      "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                    )
                    .concat(a, "px ")
                    .concat(r, ";\n    "),
                "padding" === n &&
                  "padding-right: ".concat(a, "px ").concat(r, ";"),
              ]
                .filter(Boolean)
                .join(""),
              "\n  }\n  \n  ."
            )
            .concat(gr, " {\n    right: ")
            .concat(a, "px ")
            .concat(r, ";\n  }\n  \n  .")
            .concat(vr, " {\n    margin-right: ")
            .concat(a, "px ")
            .concat(r, ";\n  }\n  \n  .")
            .concat(gr, " .")
            .concat(gr, " {\n    right: 0 ")
            .concat(r, ";\n  }\n  \n  .")
            .concat(vr, " .")
            .concat(vr, " {\n    margin-right: 0 ")
            .concat(r, ";\n  }\n  \n  body {\n    ")
            .concat("--removed-body-scroll-bar-size", ": ")
            .concat(a, "px;\n  }\n")
        );
      },
      Pr = function (t) {
        var n = t.noRelative,
          r = t.noImportant,
          i = t.gapMode,
          o = void 0 === i ? "margin" : i,
          s = e.useMemo(
            function () {
              return (function (e) {
                if (
                  (void 0 === e && (e = "margin"), "undefined" == typeof window)
                )
                  return Br;
                var t = (function (e) {
                    var t = window.getComputedStyle(document.body),
                      n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                      r = t["padding" === e ? "paddingTop" : "marginTop"],
                      i = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [xr(n), xr(r), xr(i)];
                  })(e),
                  n = document.documentElement.clientWidth,
                  r = window.innerWidth;
                return {
                  left: t[0],
                  top: t[1],
                  right: t[2],
                  gap: Math.max(0, r - n + t[2] - t[0]),
                };
              })(o);
            },
            [o]
          );
        return e.createElement(kr, {
          styles: Fr(s, !n, o, r ? "" : "!important"),
        });
      },
      Tr = !1;
    if ("undefined" != typeof window)
      try {
        var Sr = Object.defineProperty({}, "passive", {
          get: function () {
            return (Tr = !0), !0;
          },
        });
        window.addEventListener("test", Sr, Sr),
          window.removeEventListener("test", Sr, Sr);
      } catch (e) {
        Tr = !1;
      }
    var Mr = !!Tr && { passive: !1 },
      Or = function (e, t) {
        var n = window.getComputedStyle(e);
        return (
          "hidden" !== n[t] &&
          !(
            n.overflowY === n.overflowX &&
            !(function (e) {
              return "TEXTAREA" === e.tagName;
            })(e) &&
            "visible" === n[t]
          )
        );
      },
      _r = function (e, t) {
        var n = t;
        do {
          if (
            ("undefined" != typeof ShadowRoot &&
              n instanceof ShadowRoot &&
              (n = n.host),
            Rr(e, n))
          ) {
            var r = Nr(e, n);
            if (r[1] > r[2]) return !0;
          }
          n = n.parentNode;
        } while (n && n !== document.body);
        return !1;
      },
      Rr = function (e, t) {
        return "v" === e
          ? (function (e) {
              return Or(e, "overflowY");
            })(t)
          : (function (e) {
              return Or(e, "overflowX");
            })(t);
      },
      Nr = function (e, t) {
        return "v" === e
          ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight]
          : (function (e) {
              return [e.scrollLeft, e.scrollWidth, e.clientWidth];
            })(t);
        var n;
      },
      jr = function (e) {
        return "changedTouches" in e
          ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
          : [0, 0];
      },
      Lr = function (e) {
        return [e.deltaX, e.deltaY];
      },
      Ir = function (e) {
        return e && "current" in e ? e.current : e;
      },
      Vr = function (e) {
        return "\n  .block-interactivity-"
          .concat(e, " {pointer-events: none;}\n  .allow-interactivity-")
          .concat(e, " {pointer-events: all;}\n");
      },
      zr = 0,
      $r = [];
    const Wr =
      ((qr = function (t) {
        var n = e.useRef([]),
          r = e.useRef([0, 0]),
          i = e.useRef(),
          o = e.useState(zr++)[0],
          s = e.useState(function () {
            return Ar();
          })[0],
          a = e.useRef(t);
        e.useEffect(
          function () {
            a.current = t;
          },
          [t]
        ),
          e.useEffect(
            function () {
              if (t.inert) {
                document.body.classList.add("block-interactivity-".concat(o));
                var e = (function (e, t, n) {
                  if (n || 2 === arguments.length)
                    for (var r, i = 0, o = t.length; i < o; i++)
                      (!r && i in t) ||
                        (r || (r = Array.prototype.slice.call(t, 0, i)),
                        (r[i] = t[i]));
                  return e.concat(r || Array.prototype.slice.call(t));
                })([t.lockRef.current], (t.shards || []).map(Ir), !0).filter(
                  Boolean
                );
                return (
                  e.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(o));
                  }),
                  function () {
                    document.body.classList.remove(
                      "block-interactivity-".concat(o)
                    ),
                      e.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(o)
                        );
                      });
                  }
                );
              }
            },
            [t.inert, t.lockRef.current, t.shards]
          );
        var u = e.useCallback(function (e, t) {
            if ("touches" in e && 2 === e.touches.length)
              return !a.current.allowPinchZoom;
            var n,
              o = jr(e),
              s = r.current,
              u = "deltaX" in e ? e.deltaX : s[0] - o[0],
              l = "deltaY" in e ? e.deltaY : s[1] - o[1],
              c = e.target,
              d = Math.abs(u) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === c.type) return !1;
            var h = _r(d, c);
            if (!h) return !0;
            if (
              (h ? (n = d) : ((n = "v" === d ? "h" : "v"), (h = _r(d, c))), !h)
            )
              return !1;
            if (
              (!i.current &&
                "changedTouches" in e &&
                (u || l) &&
                (i.current = n),
              !n)
            )
              return !0;
            var p = i.current || n;
            return (function (e, t, n, r, i) {
              var o = (function (e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1;
                })(e, window.getComputedStyle(t).direction),
                s = o * r,
                a = n.target,
                u = t.contains(a),
                l = !1,
                c = s > 0,
                d = 0,
                h = 0;
              do {
                var p = Nr(e, a),
                  m = p[0],
                  f = p[1] - p[2] - o * m;
                (m || f) && Rr(e, a) && ((d += f), (h += m)),
                  (a = a.parentNode);
              } while ((!u && a !== document.body) || (u && (t.contains(a) || t === a)));
              return (
                ((c && (0 === d || !1)) || (!c && (0 === h || !1))) && (l = !0),
                l
              );
            })(p, t, e, "h" === p ? u : l);
          }, []),
          l = e.useCallback(function (e) {
            var t = e;
            if ($r.length && $r[$r.length - 1] === s) {
              var r = "deltaY" in t ? Lr(t) : jr(t),
                i = n.current.filter(function (e) {
                  return (
                    e.name === t.type &&
                    e.target === t.target &&
                    (function (e, t) {
                      return e[0] === t[0] && e[1] === t[1];
                    })(e.delta, r)
                  );
                })[0];
              if (i && i.should) t.cancelable && t.preventDefault();
              else if (!i) {
                var o = (a.current.shards || [])
                  .map(Ir)
                  .filter(Boolean)
                  .filter(function (e) {
                    return e.contains(t.target);
                  });
                (o.length > 0 ? u(t, o[0]) : !a.current.noIsolation) &&
                  t.cancelable &&
                  t.preventDefault();
              }
            }
          }, []),
          c = e.useCallback(function (e, t, r, i) {
            var o = { name: e, delta: t, target: r, should: i };
            n.current.push(o),
              setTimeout(function () {
                n.current = n.current.filter(function (e) {
                  return e !== o;
                });
              }, 1);
          }, []),
          d = e.useCallback(function (e) {
            (r.current = jr(e)), (i.current = void 0);
          }, []),
          h = e.useCallback(function (e) {
            c(e.type, Lr(e), e.target, u(e, t.lockRef.current));
          }, []),
          p = e.useCallback(function (e) {
            c(e.type, jr(e), e.target, u(e, t.lockRef.current));
          }, []);
        e.useEffect(function () {
          return (
            $r.push(s),
            t.setCallbacks({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: p,
            }),
            document.addEventListener("wheel", l, Mr),
            document.addEventListener("touchmove", l, Mr),
            document.addEventListener("touchstart", d, Mr),
            function () {
              ($r = $r.filter(function (e) {
                return e !== s;
              })),
                document.removeEventListener("wheel", l, Mr),
                document.removeEventListener("touchmove", l, Mr),
                document.removeEventListener("touchstart", d, Mr);
            }
          );
        }, []);
        var m = t.removeScrollBar,
          f = t.inert;
        return e.createElement(
          e.Fragment,
          null,
          f ? e.createElement(s, { styles: Vr(o) }) : null,
          m ? e.createElement(Pr, { gapMode: "margin" }) : null
        );
      }),
      br.useMedium(qr),
      wr);
    var qr,
      Ur = e.forwardRef(function (t, n) {
        return e.createElement(Dr, mr({}, t, { ref: n, sideCar: Wr }));
      });
    Ur.classNames = Dr.classNames;
    const Hr = Ur;
    var Zr = new WeakMap(),
      Yr = new WeakMap(),
      Gr = {},
      Xr = 0,
      Kr = function (e) {
        return e && (e.host || Kr(e.parentNode));
      },
      Jr = function (e, t, n) {
        void 0 === n && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
          i =
            t ||
            (function (e) {
              return "undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
            })(e);
        return i
          ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live]"))),
            (function (e, t, n, r) {
              var i = (function (e, t) {
                return t
                  .map(function (t) {
                    if (e.contains(t)) return t;
                    var n = Kr(t);
                    return n && e.contains(n)
                      ? n
                      : (console.error(
                          "aria-hidden",
                          t,
                          "in not contained inside",
                          e,
                          ". Doing nothing"
                        ),
                        null);
                  })
                  .filter(function (e) {
                    return Boolean(e);
                  });
              })(t, Array.isArray(e) ? e : [e]);
              Gr[n] || (Gr[n] = new WeakMap());
              var o = Gr[n],
                s = [],
                a = new Set(),
                u = new Set(i),
                l = function (e) {
                  e && !a.has(e) && (a.add(e), l(e.parentNode));
                };
              i.forEach(l);
              var c = function (e) {
                e &&
                  !u.has(e) &&
                  Array.prototype.forEach.call(e.children, function (e) {
                    if (a.has(e)) c(e);
                    else {
                      var t = e.getAttribute(r),
                        i = null !== t && "false" !== t,
                        u = (Zr.get(e) || 0) + 1,
                        l = (o.get(e) || 0) + 1;
                      Zr.set(e, u),
                        o.set(e, l),
                        s.push(e),
                        1 === u && i && Yr.set(e, !0),
                        1 === l && e.setAttribute(n, "true"),
                        i || e.setAttribute(r, "true");
                    }
                  });
              };
              return (
                c(t),
                a.clear(),
                Xr++,
                function () {
                  s.forEach(function (e) {
                    var t = Zr.get(e) - 1,
                      i = o.get(e) - 1;
                    Zr.set(e, t),
                      o.set(e, i),
                      t || (Yr.has(e) || e.removeAttribute(r), Yr.delete(e)),
                      i || e.removeAttribute(n);
                  }),
                    --Xr ||
                      ((Zr = new WeakMap()),
                      (Zr = new WeakMap()),
                      (Yr = new WeakMap()),
                      (Gr = {}));
                }
              );
            })(r, i, n, "aria-hidden"))
          : function () {
              return null;
            };
      };
    const Qr = "Dialog",
      [ei, ti] = (function (t, n = []) {
        let r = [];
        const i = () => {
          const n = r.map((t) => (0, e.createContext)(t));
          return function (r) {
            const i = (null == r ? void 0 : r[t]) || n;
            return (0, e.useMemo)(
              () => ({ [`__scope${t}`]: { ...r, [t]: i } }),
              [r, i]
            );
          };
        };
        return (
          (i.scopeName = t),
          [
            function (n, i) {
              const o = (0, e.createContext)(i),
                s = r.length;
              function a(n) {
                const { scope: r, children: i, ...a } = n,
                  u = (null == r ? void 0 : r[t][s]) || o,
                  l = (0, e.useMemo)(() => a, Object.values(a));
                return (0, e.createElement)(u.Provider, { value: l }, i);
              }
              return (
                (r = [...r, i]),
                (a.displayName = n + "Provider"),
                [
                  a,
                  function (r, a) {
                    const u = (null == a ? void 0 : a[t][s]) || o,
                      l = (0, e.useContext)(u);
                    if (l) return l;
                    if (void 0 !== i) return i;
                    throw new Error(`\`${r}\` must be used within \`${n}\``);
                  },
                ]
              );
            },
            _n(i, ...n),
          ]
        );
      })(Qr),
      [ni, ri] = ei(Qr),
      ii = (0, e.forwardRef)((t, n) => {
        const { __scopeDialog: r, ...i } = t,
          o = ri("DialogTrigger", r),
          s = On(n, o.triggerRef);
        return (0, e.createElement)(
          Hn.button,
          Tn(
            {
              type: "button",
              "aria-haspopup": "dialog",
              "aria-expanded": o.open,
              "aria-controls": o.contentId,
              "data-state": Ci(o.open),
            },
            i,
            { ref: s, onClick: Sn(t.onClick, o.onOpenToggle) }
          )
        );
      }),
      oi = "DialogPortal",
      [si, ai] = ei(oi, { forceMount: void 0 }),
      ui = "DialogOverlay",
      li = (0, e.forwardRef)((t, n) => {
        const r = ai(ui, t.__scopeDialog),
          { forceMount: i = r.forceMount, ...o } = t,
          s = ri(ui, t.__scopeDialog);
        return s.modal
          ? (0, e.createElement)(
              cr,
              { present: i || s.open },
              (0, e.createElement)(ci, Tn({}, o, { ref: n }))
            )
          : null;
      }),
      ci = (0, e.forwardRef)((t, n) => {
        const { __scopeDialog: r, ...i } = t,
          o = ri(ui, r);
        return (0, e.createElement)(
          Hr,
          { as: zn, allowPinchZoom: !0, shards: [o.contentRef] },
          (0, e.createElement)(
            Hn.div,
            Tn({ "data-state": Ci(o.open) }, i, {
              ref: n,
              style: { pointerEvents: "auto", ...i.style },
            })
          )
        );
      }),
      di = "DialogContent",
      hi = (0, e.forwardRef)((t, n) => {
        const r = ai(di, t.__scopeDialog),
          { forceMount: i = r.forceMount, ...o } = t,
          s = ri(di, t.__scopeDialog);
        return (0, e.createElement)(
          cr,
          { present: i || s.open },
          s.modal
            ? (0, e.createElement)(pi, Tn({}, o, { ref: n }))
            : (0, e.createElement)(mi, Tn({}, o, { ref: n }))
        );
      }),
      pi = (0, e.forwardRef)((t, n) => {
        const r = ri(di, t.__scopeDialog),
          i = (0, e.useRef)(null),
          o = On(n, r.contentRef, i);
        return (
          (0, e.useEffect)(() => {
            const e = i.current;
            if (e) return Jr(e);
          }, []),
          (0, e.createElement)(
            fi,
            Tn({}, t, {
              ref: o,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: Sn(t.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null === (t = r.triggerRef.current) ||
                    void 0 === t ||
                    t.focus();
              }),
              onPointerDownOutside: Sn(t.onPointerDownOutside, (e) => {
                const t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: Sn(t.onFocusOutside, (e) => e.preventDefault()),
            })
          )
        );
      }),
      mi = (0, e.forwardRef)((t, n) => {
        const r = ri(di, t.__scopeDialog),
          i = (0, e.useRef)(!1),
          o = (0, e.useRef)(!1);
        return (0, e.createElement)(
          fi,
          Tn({}, t, {
            ref: n,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (e) => {
              var n, s;
              null === (n = t.onCloseAutoFocus) || void 0 === n || n.call(t, e),
                e.defaultPrevented ||
                  (i.current ||
                    null === (s = r.triggerRef.current) ||
                    void 0 === s ||
                    s.focus(),
                  e.preventDefault()),
                (i.current = !1),
                (o.current = !1);
            },
            onInteractOutside: (e) => {
              var n, s;
              null === (n = t.onInteractOutside) ||
                void 0 === n ||
                n.call(t, e),
                e.defaultPrevented ||
                  ((i.current = !0),
                  "pointerdown" === e.detail.originalEvent.type &&
                    (o.current = !0));
              const a = e.target;
              (null === (s = r.triggerRef.current) || void 0 === s
                ? void 0
                : s.contains(a)) && e.preventDefault(),
                "focusin" === e.detail.originalEvent.type &&
                  o.current &&
                  e.preventDefault();
            },
          })
        );
      }),
      fi = (0, e.forwardRef)((t, n) => {
        const {
            __scopeDialog: r,
            trapFocus: i,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            ...a
          } = t,
          u = ri(di, r),
          l = On(n, (0, e.useRef)(null));
        return (
          (0, e.useEffect)(() => {
            var e, t;
            const n = document.querySelectorAll("[data-radix-focus-guard]");
            return (
              document.body.insertAdjacentElement(
                "afterbegin",
                null !== (e = n[0]) && void 0 !== e ? e : pr()
              ),
              document.body.insertAdjacentElement(
                "beforeend",
                null !== (t = n[1]) && void 0 !== t ? t : pr()
              ),
              hr++,
              () => {
                1 === hr &&
                  document
                    .querySelectorAll("[data-radix-focus-guard]")
                    .forEach((e) => e.remove()),
                  hr--;
              }
            );
          }, []),
          (0, e.createElement)(
            e.Fragment,
            null,
            (0, e.createElement)(
              nr,
              {
                asChild: !0,
                loop: !0,
                trapped: i,
                onMountAutoFocus: o,
                onUnmountAutoFocus: s,
              },
              (0, e.createElement)(
                Xn,
                Tn(
                  {
                    role: "dialog",
                    id: u.contentId,
                    "aria-describedby": u.descriptionId,
                    "aria-labelledby": u.titleId,
                    "data-state": Ci(u.open),
                  },
                  a,
                  { ref: l, onDismiss: () => u.onOpenChange(!1) }
                )
              )
            ),
            !1
          )
        );
      }),
      gi = "DialogTitle",
      vi = (0, e.forwardRef)((t, n) => {
        const { __scopeDialog: r, ...i } = t,
          o = ri(gi, r);
        return (0, e.createElement)(
          Hn.h2,
          Tn({ id: o.titleId }, i, { ref: n })
        );
      }),
      yi = (0, e.forwardRef)((t, n) => {
        const { __scopeDialog: r, ...i } = t,
          o = ri("DialogDescription", r);
        return (0, e.createElement)(
          Hn.p,
          Tn({ id: o.descriptionId }, i, { ref: n })
        );
      }),
      bi = (0, e.forwardRef)((t, n) => {
        const { __scopeDialog: r, ...i } = t,
          o = ri("DialogClose", r);
        return (0, e.createElement)(
          Hn.button,
          Tn({ type: "button" }, i, {
            ref: n,
            onClick: Sn(t.onClick, () => o.onOpenChange(!1)),
          })
        );
      });
    function Ci(e) {
      return e ? "open" : "closed";
    }
    const [Di, wi] = (function (t, n) {
        const r = (0, e.createContext)(n);
        function i(t) {
          const { children: n, ...i } = t,
            o = (0, e.useMemo)(() => i, Object.values(i));
          return (0, e.createElement)(r.Provider, { value: o }, n);
        }
        return (
          (i.displayName = t + "Provider"),
          [
            i,
            function (i) {
              const o = (0, e.useContext)(r);
              if (o) return o;
              if (void 0 !== n) return n;
              throw new Error(`\`${i}\` must be used within \`${t}\``);
            },
          ]
        );
      })("DialogTitleWarning", {
        contentName: di,
        titleName: gi,
        docsSlug: "dialog",
      }),
      Ei = (t) => {
        const {
            __scopeDialog: n,
            children: r,
            open: i,
            defaultOpen: o,
            onOpenChange: s,
            modal: a = !0,
          } = t,
          u = (0, e.useRef)(null),
          l = (0, e.useRef)(null),
          [c = !1, d] = (function ({
            prop: t,
            defaultProp: n,
            onChange: r = () => {},
          }) {
            const [i, o] = (function ({ defaultProp: t, onChange: n }) {
                const r = (0, e.useState)(t),
                  [i] = r,
                  o = (0, e.useRef)(i),
                  s = In(n);
                return (
                  (0, e.useEffect)(() => {
                    o.current !== i && (s(i), (o.current = i));
                  }, [i, o, s]),
                  r
                );
              })({ defaultProp: n, onChange: r }),
              s = void 0 !== t,
              a = s ? t : i,
              u = In(r);
            return [
              a,
              (0, e.useCallback)(
                (e) => {
                  if (s) {
                    const n = "function" == typeof e ? e(t) : e;
                    n !== t && u(n);
                  } else o(e);
                },
                [s, t, o, u]
              ),
            ];
          })({ prop: i, defaultProp: o, onChange: s });
        return (0, e.createElement)(
          ni,
          {
            scope: n,
            triggerRef: u,
            contentRef: l,
            contentId: Ln(),
            titleId: Ln(),
            descriptionId: Ln(),
            open: c,
            onOpenChange: d,
            onOpenToggle: (0, e.useCallback)(() => d((e) => !e), [d]),
            modal: a,
          },
          r
        );
      },
      Ai = ii,
      Bi = (t) => {
        const {
            __scopeDialog: n,
            forceMount: r,
            children: i,
            container: o,
          } = t,
          s = ri(oi, n);
        return (0, e.createElement)(
          si,
          { scope: n, forceMount: r },
          e.Children.map(i, (t) =>
            (0, e.createElement)(
              cr,
              { present: r || s.open },
              (0, e.createElement)(lr, { asChild: !0, container: o }, t)
            )
          )
        );
      },
      xi = li,
      ki = hi,
      Fi = vi,
      Pi = yi,
      Ti = bi;
    var Si = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    const Mi = (t, n) => {
        const r = (0, e.forwardRef)(
          (
            {
              color: r = "currentColor",
              size: i = 24,
              strokeWidth: o = 2,
              absoluteStrokeWidth: s,
              children: a,
              ...u
            },
            l
          ) => {
            return (0, e.createElement)(
              "svg",
              {
                ref: l,
                ...Si,
                width: i,
                height: i,
                stroke: r,
                strokeWidth: s ? (24 * Number(o)) / Number(i) : o,
                className: `lucide lucide-${
                  ((c = t),
                  c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())
                }`,
                ...u,
              },
              [
                ...n.map(([t, n]) => (0, e.createElement)(t, n)),
                ...((Array.isArray(a) ? a : [a]) || []),
              ]
            );
            var c;
          }
        );
        return (r.displayName = `${t}`), r;
      },
      Oi = Mi("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]),
      _i = { delta: 0, timestamp: 0, isProcessing: !1 };
    let Ri = !0,
      Ni = !1;
    const ji = ["read", "update", "preRender", "render", "postRender"],
      Li = ji.reduce(
        (e, t) => (
          (e[t] = (function (e) {
            let t = [],
              n = [],
              r = 0,
              i = !1,
              o = !1;
            const s = new WeakSet(),
              a = {
                schedule: (e, o = !1, a = !1) => {
                  const u = a && i,
                    l = u ? t : n;
                  return (
                    o && s.add(e),
                    -1 === l.indexOf(e) &&
                      (l.push(e), u && i && (r = t.length)),
                    e
                  );
                },
                cancel: (e) => {
                  const t = n.indexOf(e);
                  -1 !== t && n.splice(t, 1), s.delete(e);
                },
                process: (u) => {
                  if (i) o = !0;
                  else {
                    if (
                      ((i = !0),
                      ([t, n] = [n, t]),
                      (n.length = 0),
                      (r = t.length),
                      r)
                    )
                      for (let n = 0; n < r; n++) {
                        const r = t[n];
                        r(u), s.has(r) && (a.schedule(r), e());
                      }
                    (i = !1), o && ((o = !1), a.process(u));
                  }
                },
              };
            return a;
          })(() => (Ni = !0))),
          e
        ),
        {}
      ),
      Ii = (e) => Li[e].process(_i),
      Vi = (e) => {
        (Ni = !1),
          (_i.delta = Ri
            ? 1e3 / 60
            : Math.max(Math.min(e - _i.timestamp, 40), 1)),
          (_i.timestamp = e),
          (_i.isProcessing = !0),
          ji.forEach(Ii),
          (_i.isProcessing = !1),
          Ni && ((Ri = !1), requestAnimationFrame(Vi));
      },
      zi = ji.reduce((e, t) => {
        const n = Li[t];
        return (
          (e[t] = (e, t = !1, r = !1) => (
            Ni ||
              ((Ni = !0),
              (Ri = !0),
              _i.isProcessing || requestAnimationFrame(Vi)),
            n.schedule(e, t, r)
          )),
          e
        );
      }, {});
    function $i(e) {
      ji.forEach((t) => Li[t].cancel(e));
    }
    const Wi = "undefined" != typeof document,
      qi = Wi ? e.useLayoutEffect : e.useEffect;
    function Ui() {
      const t = (0, e.useRef)(!1);
      return (
        qi(
          () => (
            (t.current = !0),
            () => {
              t.current = !1;
            }
          ),
          []
        ),
        t
      );
    }
    const Hi = (0, e.createContext)(null);
    function Zi(t) {
      const n = (0, e.useRef)(null);
      return null === n.current && (n.current = t()), n.current;
    }
    class Yi extends e.Component {
      getSnapshotBeforeUpdate(e) {
        const t = this.props.childRef.current;
        if (t && e.isPresent && !this.props.isPresent) {
          const e = this.props.sizeRef.current;
          (e.height = t.offsetHeight || 0),
            (e.width = t.offsetWidth || 0),
            (e.top = t.offsetTop),
            (e.left = t.offsetLeft);
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function Gi({ children: t, isPresent: n }) {
      const r = (0, e.useId)(),
        i = (0, e.useRef)(null),
        o = (0, e.useRef)({ width: 0, height: 0, top: 0, left: 0 });
      return (
        (0, e.useInsertionEffect)(() => {
          const { width: e, height: t, top: s, left: a } = o.current;
          if (n || !i.current || !e || !t) return;
          i.current.dataset.motionPopId = r;
          const u = document.createElement("style");
          return (
            document.head.appendChild(u),
            u.sheet &&
              u.sheet.insertRule(
                `\n          [data-motion-pop-id="${r}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${s}px !important;\n            left: ${a}px !important;\n          }\n        `
              ),
            () => {
              document.head.removeChild(u);
            }
          );
        }, [n]),
        e.createElement(
          Yi,
          { isPresent: n, childRef: i, sizeRef: o },
          e.cloneElement(t, { ref: i })
        )
      );
    }
    const Xi = ({
      children: t,
      initial: n,
      isPresent: r,
      onExitComplete: i,
      custom: o,
      presenceAffectsLayout: s,
      mode: a,
    }) => {
      const u = Zi(Ki),
        l = (0, e.useId)(),
        c = (0, e.useMemo)(
          () => ({
            id: l,
            initial: n,
            isPresent: r,
            custom: o,
            onExitComplete: (e) => {
              u.set(e, !0);
              for (const e of u.values()) if (!e) return;
              i && i();
            },
            register: (e) => (u.set(e, !1), () => u.delete(e)),
          }),
          s ? void 0 : [r]
        );
      return (
        (0, e.useMemo)(() => {
          u.forEach((e, t) => u.set(t, !1));
        }, [r]),
        e.useEffect(() => {
          !r && !u.size && i && i();
        }, [r]),
        "popLayout" === a && (t = e.createElement(Gi, { isPresent: r }, t)),
        e.createElement(Hi.Provider, { value: c }, t)
      );
    };
    function Ki() {
      return new Map();
    }
    const Ji = (0, e.createContext)({}),
      Qi = (e) => e;
    let eo = Qi,
      to = Qi;
    const no = (e) => e.key || "",
      ro = ({
        children: t,
        custom: n,
        initial: r = !0,
        onExitComplete: i,
        exitBeforeEnter: o,
        presenceAffectsLayout: s = !0,
        mode: a = "sync",
      }) => {
        to(!o, "Replace exitBeforeEnter with mode='wait'");
        const u =
            (0, e.useContext)(Ji).forceRender ||
            (function () {
              const t = Ui(),
                [n, r] = (0, e.useState)(0),
                i = (0, e.useCallback)(() => {
                  t.current && r(n + 1);
                }, [n]);
              return [(0, e.useCallback)(() => zi.postRender(i), [i]), n];
            })()[0],
          l = Ui(),
          c = (function (t) {
            const n = [];
            return (
              e.Children.forEach(t, (t) => {
                (0, e.isValidElement)(t) && n.push(t);
              }),
              n
            );
          })(t);
        let d = c;
        const h = (0, e.useRef)(new Map()).current,
          p = (0, e.useRef)(d),
          m = (0, e.useRef)(new Map()).current,
          f = (0, e.useRef)(!0);
        var g;
        if (
          (qi(() => {
            (f.current = !1),
              (function (e, t) {
                e.forEach((e) => {
                  const n = no(e);
                  t.set(n, e);
                });
              })(c, m),
              (p.current = d);
          }),
          (g = () => {
            (f.current = !0), m.clear(), h.clear();
          }),
          (0, e.useEffect)(() => () => g(), []),
          f.current)
        )
          return e.createElement(
            e.Fragment,
            null,
            d.map((t) =>
              e.createElement(
                Xi,
                {
                  key: no(t),
                  isPresent: !0,
                  initial: !!r && void 0,
                  presenceAffectsLayout: s,
                  mode: a,
                },
                t
              )
            )
          );
        d = [...d];
        const v = p.current.map(no),
          y = c.map(no),
          b = v.length;
        for (let e = 0; e < b; e++) {
          const t = v[e];
          -1 !== y.indexOf(t) || h.has(t) || h.set(t, void 0);
        }
        return (
          "wait" === a && h.size && (d = []),
          h.forEach((t, r) => {
            if (-1 !== y.indexOf(r)) return;
            const o = m.get(r);
            if (!o) return;
            const f = v.indexOf(r);
            let g = t;
            if (!g) {
              const t = () => {
                m.delete(r), h.delete(r);
                const e = p.current.findIndex((e) => e.key === r);
                if ((p.current.splice(e, 1), !h.size)) {
                  if (((p.current = c), !1 === l.current)) return;
                  u(), i && i();
                }
              };
              (g = e.createElement(
                Xi,
                {
                  key: no(o),
                  isPresent: !1,
                  onExitComplete: t,
                  custom: n,
                  presenceAffectsLayout: s,
                  mode: a,
                },
                o
              )),
                h.set(r, g);
            }
            d.splice(f, 0, g);
          }),
          (d = d.map((t) => {
            const n = t.key;
            return h.has(n)
              ? t
              : e.createElement(
                  Xi,
                  {
                    key: no(t),
                    isPresent: !0,
                    presenceAffectsLayout: s,
                    mode: a,
                  },
                  t
                );
          })),
          e.createElement(
            e.Fragment,
            null,
            h.size ? d : d.map((t) => (0, e.cloneElement)(t))
          )
        );
      },
      io = (0, e.createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      }),
      oo = (0, e.createContext)({}),
      so = (0, e.createContext)({ strict: !1 });
    function ao(e) {
      return (
        "object" == typeof e &&
        Object.prototype.hasOwnProperty.call(e, "current")
      );
    }
    function uo(e) {
      return "string" == typeof e || Array.isArray(e);
    }
    function lo(e) {
      return "object" == typeof e && "function" == typeof e.start;
    }
    const co = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
      ],
      ho = ["initial", ...co];
    function po(e) {
      return lo(e.animate) || ho.some((t) => uo(e[t]));
    }
    function mo(e) {
      return Boolean(po(e) || e.variants);
    }
    function fo(e) {
      return Array.isArray(e) ? e.join(" ") : e;
    }
    const go = {
        animation: [
          "animate",
          "variants",
          "whileHover",
          "whileTap",
          "exit",
          "whileInView",
          "whileFocus",
          "whileDrag",
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
      },
      vo = {};
    for (const e in go) vo[e] = { isEnabled: (t) => go[e].some((e) => !!t[e]) };
    const yo = (0, e.createContext)({}),
      bo = Symbol.for("motionComponentSymbol");
    function Co({
      preloadedFeatures: t,
      createVisualElement: n,
      useRender: r,
      useVisualState: i,
      Component: o,
    }) {
      t &&
        (function (e) {
          for (const t in e) vo[t] = { ...vo[t], ...e[t] };
        })(t);
      const s = (0, e.forwardRef)(function (s, a) {
        let u;
        const l = { ...(0, e.useContext)(io), ...s, layoutId: Do(s) },
          { isStatic: c } = l,
          d = (function (t) {
            const { initial: n, animate: r } = (function (e, t) {
              if (po(e)) {
                const { initial: t, animate: n } = e;
                return {
                  initial: !1 === t || uo(t) ? t : void 0,
                  animate: uo(n) ? n : void 0,
                };
              }
              return !1 !== e.inherit ? t : {};
            })(t, (0, e.useContext)(oo));
            return (0, e.useMemo)(
              () => ({ initial: n, animate: r }),
              [fo(n), fo(r)]
            );
          })(s),
          h = i(s, c);
        if (!c && Wi) {
          d.visualElement = (function (t, n, r, i) {
            const { visualElement: o } = (0, e.useContext)(oo),
              s = (0, e.useContext)(so),
              a = (0, e.useContext)(Hi),
              u = (0, e.useContext)(io).reducedMotion,
              l = (0, e.useRef)();
            (i = i || s.renderer),
              !l.current &&
                i &&
                (l.current = i(t, {
                  visualState: n,
                  parent: o,
                  props: r,
                  presenceContext: a,
                  blockInitialAnimation: !!a && !1 === a.initial,
                  reducedMotionConfig: u,
                }));
            const c = l.current;
            return (
              (0, e.useInsertionEffect)(() => {
                c && c.update(r, a);
              }),
              qi(() => {
                c && c.render();
              }),
              (0, e.useEffect)(() => {
                c && c.updateFeatures();
              }),
              (window.HandoffAppearAnimations ? qi : e.useEffect)(() => {
                c && c.animationState && c.animationState.animateChanges();
              }),
              c
            );
          })(o, h, l, n);
          const r = (0, e.useContext)(yo),
            i = (0, e.useContext)(so).strict;
          d.visualElement && (u = d.visualElement.loadFeatures(l, i, t, r));
        }
        return e.createElement(
          oo.Provider,
          { value: d },
          u && d.visualElement
            ? e.createElement(u, { visualElement: d.visualElement, ...l })
            : null,
          r(
            o,
            s,
            (function (t, n, r) {
              return (0, e.useCallback)(
                (e) => {
                  e && t.mount && t.mount(e),
                    n && (e ? n.mount(e) : n.unmount()),
                    r &&
                      ("function" == typeof r
                        ? r(e)
                        : ao(r) && (r.current = e));
                },
                [n]
              );
            })(h, d.visualElement, a),
            h,
            c,
            d.visualElement
          )
        );
      });
      return (s[bo] = o), s;
    }
    function Do({ layoutId: t }) {
      const n = (0, e.useContext)(Ji).id;
      return n && void 0 !== t ? n + "-" + t : t;
    }
    function wo(e) {
      function t(t, n = {}) {
        return Co(e(t, n));
      }
      if ("undefined" == typeof Proxy) return t;
      const n = new Map();
      return new Proxy(t, {
        get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r)),
      });
    }
    const Eo = [
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
      "view",
    ];
    function Ao(e) {
      return (
        "string" == typeof e &&
        !e.includes("-") &&
        !!(Eo.indexOf(e) > -1 || /[A-Z]/.test(e))
      );
    }
    const Bo = {},
      xo = [
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
        "skewY",
      ],
      ko = new Set(xo);
    function Fo(e, { layout: t, layoutId: n }) {
      return (
        ko.has(e) ||
        e.startsWith("origin") ||
        ((t || void 0 !== n) && (!!Bo[e] || "opacity" === e))
      );
    }
    const Po = (e) => Boolean(e && e.getVelocity),
      To = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      },
      So = xo.length,
      Mo = (e) => (t) => "string" == typeof t && t.startsWith(e),
      Oo = Mo("--"),
      _o = Mo("var(--"),
      Ro = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
      No = (e, t, n) => Math.min(Math.max(n, e), t),
      jo = {
        test: (e) => "number" == typeof e,
        parse: parseFloat,
        transform: (e) => e,
      },
      Lo = { ...jo, transform: (e) => No(0, 1, e) },
      Io = { ...jo, default: 1 },
      Vo = (e) => Math.round(1e5 * e) / 1e5,
      zo = /(-)?([\d]*\.?[\d])+/g,
      $o =
        /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
      Wo =
        /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
    function qo(e) {
      return "string" == typeof e;
    }
    const Uo = (e) => ({
        test: (t) => qo(t) && t.endsWith(e) && 1 === t.split(" ").length,
        parse: parseFloat,
        transform: (t) => `${t}${e}`,
      }),
      Ho = Uo("deg"),
      Zo = Uo("%"),
      Yo = Uo("px"),
      Go = Uo("vh"),
      Xo = Uo("vw"),
      Ko = {
        ...Zo,
        parse: (e) => Zo.parse(e) / 100,
        transform: (e) => Zo.transform(100 * e),
      },
      Jo = { ...jo, transform: Math.round },
      Qo = {
        borderWidth: Yo,
        borderTopWidth: Yo,
        borderRightWidth: Yo,
        borderBottomWidth: Yo,
        borderLeftWidth: Yo,
        borderRadius: Yo,
        radius: Yo,
        borderTopLeftRadius: Yo,
        borderTopRightRadius: Yo,
        borderBottomRightRadius: Yo,
        borderBottomLeftRadius: Yo,
        width: Yo,
        maxWidth: Yo,
        height: Yo,
        maxHeight: Yo,
        size: Yo,
        top: Yo,
        right: Yo,
        bottom: Yo,
        left: Yo,
        padding: Yo,
        paddingTop: Yo,
        paddingRight: Yo,
        paddingBottom: Yo,
        paddingLeft: Yo,
        margin: Yo,
        marginTop: Yo,
        marginRight: Yo,
        marginBottom: Yo,
        marginLeft: Yo,
        rotate: Ho,
        rotateX: Ho,
        rotateY: Ho,
        rotateZ: Ho,
        scale: Io,
        scaleX: Io,
        scaleY: Io,
        scaleZ: Io,
        skew: Ho,
        skewX: Ho,
        skewY: Ho,
        distance: Yo,
        translateX: Yo,
        translateY: Yo,
        translateZ: Yo,
        x: Yo,
        y: Yo,
        z: Yo,
        perspective: Yo,
        transformPerspective: Yo,
        opacity: Lo,
        originX: Ko,
        originY: Ko,
        originZ: Yo,
        zIndex: Jo,
        fillOpacity: Lo,
        strokeOpacity: Lo,
        numOctaves: Jo,
      };
    function es(e, t, n, r) {
      const { style: i, vars: o, transform: s, transformOrigin: a } = e;
      let u = !1,
        l = !1,
        c = !0;
      for (const e in t) {
        const n = t[e];
        if (Oo(e)) {
          o[e] = n;
          continue;
        }
        const r = Qo[e],
          d = Ro(n, r);
        if (ko.has(e)) {
          if (((u = !0), (s[e] = d), !c)) continue;
          n !== (r.default || 0) && (c = !1);
        } else e.startsWith("origin") ? ((l = !0), (a[e] = d)) : (i[e] = d);
      }
      if (
        (t.transform ||
          (u || r
            ? (i.transform = (function (
                e,
                {
                  enableHardwareAcceleration: t = !0,
                  allowTransformNone: n = !0,
                },
                r,
                i
              ) {
                let o = "";
                for (let t = 0; t < So; t++) {
                  const n = xo[t];
                  void 0 !== e[n] && (o += `${To[n] || n}(${e[n]}) `);
                }
                return (
                  t && !e.z && (o += "translateZ(0)"),
                  (o = o.trim()),
                  i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
                  o
                );
              })(e.transform, n, c, r))
            : i.transform && (i.transform = "none")),
        l)
      ) {
        const { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
        i.transformOrigin = `${e} ${t} ${n}`;
      }
    }
    const ts = () => ({
      style: {},
      transform: {},
      transformOrigin: {},
      vars: {},
    });
    function ns(e, t, n) {
      for (const r in t) Po(t[r]) || Fo(r, n) || (e[r] = t[r]);
    }
    function rs(t, n, r) {
      const i = {},
        o = (function (t, n, r) {
          const i = {};
          return (
            ns(i, t.style || {}, t),
            Object.assign(
              i,
              (function ({ transformTemplate: t }, n, r) {
                return (0, e.useMemo)(() => {
                  const e = ts();
                  return (
                    es(e, n, { enableHardwareAcceleration: !r }, t),
                    Object.assign({}, e.vars, e.style)
                  );
                }, [n]);
              })(t, n, r)
            ),
            t.transformValues ? t.transformValues(i) : i
          );
        })(t, n, r);
      return (
        t.drag &&
          !1 !== t.dragListener &&
          ((i.draggable = !1),
          (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
          (o.touchAction =
            !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x"))),
        void 0 === t.tabIndex &&
          (t.onTap || t.onTapStart || t.whileTap) &&
          (i.tabIndex = 0),
        (i.style = o),
        i
      );
    }
    const is = new Set([
      "animate",
      "exit",
      "variants",
      "initial",
      "style",
      "values",
      "variants",
      "transition",
      "transformTemplate",
      "transformValues",
      "custom",
      "inherit",
      "onLayoutAnimationStart",
      "onLayoutAnimationComplete",
      "onLayoutMeasure",
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
      "ignoreStrict",
      "viewport",
    ]);
    function os(e) {
      return (
        e.startsWith("while") ||
        (e.startsWith("drag") && "draggable" !== e) ||
        e.startsWith("layout") ||
        e.startsWith("onTap") ||
        e.startsWith("onPan") ||
        is.has(e)
      );
    }
    let ss = (e) => !os(e);
    try {
      (as = require("@emotion/is-prop-valid").default) &&
        (ss = (e) => (e.startsWith("on") ? !os(e) : as(e)));
    } catch (e) {}
    var as;
    function us(e, t, n) {
      return "string" == typeof e ? e : Yo.transform(t + n * e);
    }
    const ls = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
      cs = { offset: "strokeDashoffset", array: "strokeDasharray" };
    function ds(
      e,
      {
        attrX: t,
        attrY: n,
        attrScale: r,
        originX: i,
        originY: o,
        pathLength: s,
        pathSpacing: a = 1,
        pathOffset: u = 0,
        ...l
      },
      c,
      d,
      h
    ) {
      if ((es(e, l, c, h), d))
        return void (e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
      (e.attrs = e.style), (e.style = {});
      const { attrs: p, style: m, dimensions: f } = e;
      p.transform && (f && (m.transform = p.transform), delete p.transform),
        f &&
          (void 0 !== i || void 0 !== o || m.transform) &&
          (m.transformOrigin = (function (e, t, n) {
            return `${us(t, e.x, e.width)} ${us(n, e.y, e.height)}`;
          })(f, void 0 !== i ? i : 0.5, void 0 !== o ? o : 0.5)),
        void 0 !== t && (p.x = t),
        void 0 !== n && (p.y = n),
        void 0 !== r && (p.scale = r),
        void 0 !== s &&
          (function (e, t, n = 1, r = 0, i = !0) {
            e.pathLength = 1;
            const o = i ? ls : cs;
            e[o.offset] = Yo.transform(-r);
            const s = Yo.transform(t),
              a = Yo.transform(n);
            e[o.array] = `${s} ${a}`;
          })(p, s, a, u, !1);
    }
    const hs = () => ({ ...ts(), attrs: {} }),
      ps = (e) => "string" == typeof e && "svg" === e.toLowerCase();
    function ms(t, n, r, i) {
      const o = (0, e.useMemo)(() => {
        const e = hs();
        return (
          ds(
            e,
            n,
            { enableHardwareAcceleration: !1 },
            ps(i),
            t.transformTemplate
          ),
          { ...e.attrs, style: { ...e.style } }
        );
      }, [n]);
      if (t.style) {
        const e = {};
        ns(e, t.style, t), (o.style = { ...e, ...o.style });
      }
      return o;
    }
    function fs(t = !1) {
      return (n, r, i, { latestValues: o }, s) => {
        const a = (Ao(n) ? ms : rs)(r, o, s, n),
          u = (function (e, t, n) {
            const r = {};
            for (const i in e)
              ("values" === i && "object" == typeof e.values) ||
                ((ss(i) ||
                  (!0 === n && os(i)) ||
                  (!t && !os(i)) ||
                  (e.draggable && i.startsWith("onDrag"))) &&
                  (r[i] = e[i]));
            return r;
          })(r, "string" == typeof n, t),
          l = { ...u, ...a, ref: i },
          { children: c } = r,
          d = (0, e.useMemo)(() => (Po(c) ? c.get() : c), [c]);
        return (0, e.createElement)(n, { ...l, children: d });
      };
    }
    const gs = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    function vs(e, { style: t, vars: n }, r, i) {
      Object.assign(e.style, t, i && i.getProjectionStyles(r));
      for (const t in n) e.style.setProperty(t, n[t]);
    }
    const ys = new Set([
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
      "lengthAdjust",
    ]);
    function bs(e, t, n, r) {
      vs(e, t, void 0, r);
      for (const n in t.attrs)
        e.setAttribute(ys.has(n) ? n : gs(n), t.attrs[n]);
    }
    function Cs(e, t) {
      const { style: n } = e,
        r = {};
      for (const i in n)
        (Po(n[i]) || (t.style && Po(t.style[i])) || Fo(i, e)) && (r[i] = n[i]);
      return r;
    }
    function Ds(e, t) {
      const n = Cs(e, t);
      for (const r in e)
        (Po(e[r]) || Po(t[r])) &&
          (n[
            -1 !== xo.indexOf(r)
              ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
              : r
          ] = e[r]);
      return n;
    }
    function ws(e, t, n, r = {}, i = {}) {
      return (
        "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)),
        "string" == typeof t && (t = e.variants && e.variants[t]),
        "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)),
        t
      );
    }
    const Es = (e) => Array.isArray(e),
      As = (e) => Boolean(e && "object" == typeof e && e.mix && e.toValue),
      Bs = (e) => (Es(e) ? e[e.length - 1] || 0 : e);
    function xs(e) {
      const t = Po(e) ? e.get() : e;
      return As(t) ? t.toValue() : t;
    }
    const ks = (t) => (n, r) => {
      const i = (0, e.useContext)(oo),
        o = (0, e.useContext)(Hi),
        s = () =>
          (function (
            {
              scrapeMotionValuesFromProps: e,
              createRenderState: t,
              onMount: n,
            },
            r,
            i,
            o
          ) {
            const s = { latestValues: Fs(r, i, o, e), renderState: t() };
            return n && (s.mount = (e) => n(r, e, s)), s;
          })(t, n, i, o);
      return r ? s() : Zi(s);
    };
    function Fs(e, t, n, r) {
      const i = {},
        o = r(e, {});
      for (const e in o) i[e] = xs(o[e]);
      let { initial: s, animate: a } = e;
      const u = po(e),
        l = mo(e);
      t &&
        l &&
        !u &&
        !1 !== e.inherit &&
        (void 0 === s && (s = t.initial), void 0 === a && (a = t.animate));
      let c = !!n && !1 === n.initial;
      c = c || !1 === s;
      const d = c ? a : s;
      return (
        d &&
          "boolean" != typeof d &&
          !lo(d) &&
          (Array.isArray(d) ? d : [d]).forEach((t) => {
            const n = ws(e, t);
            if (!n) return;
            const { transitionEnd: r, transition: o, ...s } = n;
            for (const e in s) {
              let t = s[e];
              Array.isArray(t) && (t = t[c ? t.length - 1 : 0]),
                null !== t && (i[e] = t);
            }
            for (const e in r) i[e] = r[e];
          }),
        i
      );
    }
    const Ps = {
        useVisualState: ks({
          scrapeMotionValuesFromProps: Ds,
          createRenderState: hs,
          onMount: (e, t, { renderState: n, latestValues: r }) => {
            try {
              n.dimensions =
                "function" == typeof t.getBBox
                  ? t.getBBox()
                  : t.getBoundingClientRect();
            } catch (e) {
              n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
            }
            ds(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              ps(t.tagName),
              e.transformTemplate
            ),
              bs(t, n);
          },
        }),
      },
      Ts = {
        useVisualState: ks({
          scrapeMotionValuesFromProps: Cs,
          createRenderState: ts,
        }),
      };
    function Ss(e, t, n, r = { passive: !0 }) {
      return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
    }
    const Ms = (e) =>
      "mouse" === e.pointerType
        ? "number" != typeof e.button || e.button <= 0
        : !1 !== e.isPrimary;
    function Os(e, t = "page") {
      return { point: { x: e[t + "X"], y: e[t + "Y"] } };
    }
    const _s = (e) => (t) => Ms(t) && e(t, Os(t));
    function Rs(e, t, n, r) {
      return Ss(e, t, _s(n), r);
    }
    const Ns = (e, t) => (n) => t(e(n)),
      js = (...e) => e.reduce(Ns);
    function Ls(e) {
      let t = null;
      return () =>
        null === t &&
        ((t = e),
        () => {
          t = null;
        });
    }
    const Is = Ls("dragHorizontal"),
      Vs = Ls("dragVertical");
    function zs(e) {
      let t = !1;
      if ("y" === e) t = Vs();
      else if ("x" === e) t = Is();
      else {
        const e = Is(),
          n = Vs();
        e && n
          ? (t = () => {
              e(), n();
            })
          : (e && e(), n && n());
      }
      return t;
    }
    function $s() {
      const e = zs(!0);
      return !e || (e(), !1);
    }
    class Ws {
      constructor(e) {
        (this.isMounted = !1), (this.node = e);
      }
      update() {}
    }
    function qs(e, t) {
      const n = "pointer" + (t ? "enter" : "leave"),
        r = "onHover" + (t ? "Start" : "End");
      return Rs(
        e.current,
        n,
        (n, i) => {
          if ("touch" === n.type || $s()) return;
          const o = e.getProps();
          e.animationState &&
            o.whileHover &&
            e.animationState.setActive("whileHover", t),
            o[r] && zi.update(() => o[r](n, i));
        },
        { passive: !e.getProps()[r] }
      );
    }
    const Us = (e, t) => !!t && (e === t || Us(e, t.parentElement));
    function Hs(e, t) {
      if (!t) return;
      const n = new PointerEvent("pointer" + e);
      t(n, Os(n));
    }
    const Zs = new WeakMap(),
      Ys = new WeakMap(),
      Gs = (e) => {
        const t = Zs.get(e.target);
        t && t(e);
      },
      Xs = (e) => {
        e.forEach(Gs);
      };
    const Ks = { some: 0, all: 1 },
      Js = {
        inView: {
          Feature: class extends Ws {
            constructor() {
              super(...arguments),
                (this.hasEnteredView = !1),
                (this.isInView = !1);
            }
            startObserver() {
              this.unmount();
              const { viewport: e = {} } = this.node.getProps(),
                { root: t, margin: n, amount: r = "some", once: i } = e,
                o = {
                  root: t ? t.current : void 0,
                  rootMargin: n,
                  threshold: "number" == typeof r ? r : Ks[r],
                };
              return (function (e, t, n) {
                const r = (function ({ root: e, ...t }) {
                  const n = e || document;
                  Ys.has(n) || Ys.set(n, {});
                  const r = Ys.get(n),
                    i = JSON.stringify(t);
                  return (
                    r[i] ||
                      (r[i] = new IntersectionObserver(Xs, { root: e, ...t })),
                    r[i]
                  );
                })(t);
                return (
                  Zs.set(e, n),
                  r.observe(e),
                  () => {
                    Zs.delete(e), r.unobserve(e);
                  }
                );
              })(this.node.current, o, (e) => {
                const { isIntersecting: t } = e;
                if (this.isInView === t) return;
                if (((this.isInView = t), i && !t && this.hasEnteredView))
                  return;
                t && (this.hasEnteredView = !0),
                  this.node.animationState &&
                    this.node.animationState.setActive("whileInView", t);
                const { onViewportEnter: n, onViewportLeave: r } =
                    this.node.getProps(),
                  o = t ? n : r;
                o && o(e);
              });
            }
            mount() {
              this.startObserver();
            }
            update() {
              if ("undefined" == typeof IntersectionObserver) return;
              const { props: e, prevProps: t } = this.node;
              ["amount", "margin", "root"].some(
                (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
                  return (n) => e[n] !== t[n];
                })(e, t)
              ) && this.startObserver();
            }
            unmount() {}
          },
        },
        tap: {
          Feature: class extends Ws {
            constructor() {
              super(...arguments),
                (this.removeStartListeners = Qi),
                (this.removeEndListeners = Qi),
                (this.removeAccessibleListeners = Qi),
                (this.startPointerPress = (e, t) => {
                  if ((this.removeEndListeners(), this.isPressing)) return;
                  const n = this.node.getProps(),
                    r = Rs(
                      window,
                      "pointerup",
                      (e, t) => {
                        if (!this.checkPressEnd()) return;
                        const { onTap: n, onTapCancel: r } =
                          this.node.getProps();
                        zi.update(() => {
                          Us(this.node.current, e.target)
                            ? n && n(e, t)
                            : r && r(e, t);
                        });
                      },
                      { passive: !(n.onTap || n.onPointerUp) }
                    ),
                    i = Rs(
                      window,
                      "pointercancel",
                      (e, t) => this.cancelPress(e, t),
                      { passive: !(n.onTapCancel || n.onPointerCancel) }
                    );
                  (this.removeEndListeners = js(r, i)), this.startPress(e, t);
                }),
                (this.startAccessiblePress = () => {
                  const e = Ss(this.node.current, "keydown", (e) => {
                      "Enter" !== e.key ||
                        this.isPressing ||
                        (this.removeEndListeners(),
                        (this.removeEndListeners = Ss(
                          this.node.current,
                          "keyup",
                          (e) => {
                            "Enter" === e.key &&
                              this.checkPressEnd() &&
                              Hs("up", (e, t) => {
                                const { onTap: n } = this.node.getProps();
                                n && zi.update(() => n(e, t));
                              });
                          }
                        )),
                        Hs("down", (e, t) => {
                          this.startPress(e, t);
                        }));
                    }),
                    t = Ss(this.node.current, "blur", () => {
                      this.isPressing &&
                        Hs("cancel", (e, t) => this.cancelPress(e, t));
                    });
                  this.removeAccessibleListeners = js(e, t);
                });
            }
            startPress(e, t) {
              this.isPressing = !0;
              const { onTapStart: n, whileTap: r } = this.node.getProps();
              r &&
                this.node.animationState &&
                this.node.animationState.setActive("whileTap", !0),
                n && zi.update(() => n(e, t));
            }
            checkPressEnd() {
              return (
                this.removeEndListeners(),
                (this.isPressing = !1),
                this.node.getProps().whileTap &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !1),
                !$s()
              );
            }
            cancelPress(e, t) {
              if (!this.checkPressEnd()) return;
              const { onTapCancel: n } = this.node.getProps();
              n && zi.update(() => n(e, t));
            }
            mount() {
              const e = this.node.getProps(),
                t = Rs(
                  this.node.current,
                  "pointerdown",
                  this.startPointerPress,
                  { passive: !(e.onTapStart || e.onPointerStart) }
                ),
                n = Ss(this.node.current, "focus", this.startAccessiblePress);
              this.removeStartListeners = js(t, n);
            }
            unmount() {
              this.removeStartListeners(),
                this.removeEndListeners(),
                this.removeAccessibleListeners();
            }
          },
        },
        focus: {
          Feature: class extends Ws {
            constructor() {
              super(...arguments), (this.isActive = !1);
            }
            onFocus() {
              let e = !1;
              try {
                e = this.node.current.matches(":focus-visible");
              } catch (t) {
                e = !0;
              }
              e &&
                this.node.animationState &&
                (this.node.animationState.setActive("whileFocus", !0),
                (this.isActive = !0));
            }
            onBlur() {
              this.isActive &&
                this.node.animationState &&
                (this.node.animationState.setActive("whileFocus", !1),
                (this.isActive = !1));
            }
            mount() {
              this.unmount = js(
                Ss(this.node.current, "focus", () => this.onFocus()),
                Ss(this.node.current, "blur", () => this.onBlur())
              );
            }
            unmount() {}
          },
        },
        hover: {
          Feature: class extends Ws {
            mount() {
              this.unmount = js(qs(this.node, !0), qs(this.node, !1));
            }
            unmount() {}
          },
        },
      };
    function Qs(e, t) {
      if (!Array.isArray(t)) return !1;
      const n = t.length;
      if (n !== e.length) return !1;
      for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
      return !0;
    }
    function ea(e, t, n) {
      const r = e.getProps();
      return ws(
        r,
        t,
        void 0 !== n ? n : r.custom,
        (function (e) {
          const t = {};
          return e.values.forEach((e, n) => (t[n] = e.get())), t;
        })(e),
        (function (e) {
          const t = {};
          return e.values.forEach((e, n) => (t[n] = e.getVelocity())), t;
        })(e)
      );
    }
    const ta = "data-" + gs("framerAppearId"),
      na = (e) => 1e3 * e,
      ra = (e) => e / 1e3,
      ia = (e) => Array.isArray(e) && "number" == typeof e[0];
    function oa(e) {
      return Boolean(
        !e ||
          ("string" == typeof e && aa[e]) ||
          ia(e) ||
          (Array.isArray(e) && e.every(oa))
      );
    }
    const sa = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
      aa = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: sa([0, 0.65, 0.55, 1]),
        circOut: sa([0.55, 0, 1, 0.45]),
        backIn: sa([0.31, 0.01, 0.66, -0.59]),
        backOut: sa([0.33, 1.53, 0.69, 0.99]),
      };
    function ua(e) {
      if (e) return ia(e) ? sa(e) : Array.isArray(e) ? e.map(ua) : aa[e];
    }
    const la = {
        waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
      },
      ca = {},
      da = {};
    for (const e in la)
      da[e] = () => (void 0 === ca[e] && (ca[e] = la[e]()), ca[e]);
    const ha = (e, t, n) =>
      (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
    function pa(e, t, n, r) {
      if (e === t && n === r) return Qi;
      return (i) =>
        0 === i || 1 === i
          ? i
          : ha(
              (function (e, t, n, r, i) {
                let o,
                  s,
                  a = 0;
                do {
                  (s = t + (n - t) / 2),
                    (o = ha(s, r, i) - e),
                    o > 0 ? (n = s) : (t = s);
                } while (Math.abs(o) > 1e-7 && ++a < 12);
                return s;
              })(i, 0, 1, e, n),
              t,
              r
            );
    }
    const ma = pa(0.42, 0, 1, 1),
      fa = pa(0, 0, 0.58, 1),
      ga = pa(0.42, 0, 0.58, 1),
      va = (e) => Array.isArray(e) && "number" != typeof e[0],
      ya = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
      ba = (e) => (t) => 1 - e(1 - t),
      Ca = (e) => 1 - Math.sin(Math.acos(e)),
      Da = ba(Ca),
      wa = ya(Da),
      Ea = pa(0.33, 1.53, 0.69, 0.99),
      Aa = ba(Ea),
      Ba = ya(Aa),
      xa = {
        linear: Qi,
        easeIn: ma,
        easeInOut: ga,
        easeOut: fa,
        circIn: Ca,
        circInOut: wa,
        circOut: Da,
        backIn: Aa,
        backInOut: Ba,
        backOut: Ea,
        anticipate: (e) =>
          (e *= 2) < 1 ? 0.5 * Aa(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
      },
      ka = (e) => {
        if (Array.isArray(e)) {
          to(
            4 === e.length,
            "Cubic bezier arrays must contain four numerical values."
          );
          const [t, n, r, i] = e;
          return pa(t, n, r, i);
        }
        return "string" == typeof e
          ? (to(void 0 !== xa[e], `Invalid easing type '${e}'`), xa[e])
          : e;
      },
      Fa = (e, t) => (n) =>
        Boolean(
          (qo(n) && Wo.test(n) && n.startsWith(e)) ||
            (t && Object.prototype.hasOwnProperty.call(n, t))
        ),
      Pa = (e, t, n) => (r) => {
        if (!qo(r)) return r;
        const [i, o, s, a] = r.match(zo);
        return {
          [e]: parseFloat(i),
          [t]: parseFloat(o),
          [n]: parseFloat(s),
          alpha: void 0 !== a ? parseFloat(a) : 1,
        };
      },
      Ta = { ...jo, transform: (e) => Math.round(((e) => No(0, 255, e))(e)) },
      Sa = {
        test: Fa("rgb", "red"),
        parse: Pa("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
          "rgba(" +
          Ta.transform(e) +
          ", " +
          Ta.transform(t) +
          ", " +
          Ta.transform(n) +
          ", " +
          Vo(Lo.transform(r)) +
          ")",
      },
      Ma = {
        test: Fa("#"),
        parse: function (e) {
          let t = "",
            n = "",
            r = "",
            i = "";
          return (
            e.length > 5
              ? ((t = e.substring(1, 3)),
                (n = e.substring(3, 5)),
                (r = e.substring(5, 7)),
                (i = e.substring(7, 9)))
              : ((t = e.substring(1, 2)),
                (n = e.substring(2, 3)),
                (r = e.substring(3, 4)),
                (i = e.substring(4, 5)),
                (t += t),
                (n += n),
                (r += r),
                (i += i)),
            {
              red: parseInt(t, 16),
              green: parseInt(n, 16),
              blue: parseInt(r, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1,
            }
          );
        },
        transform: Sa.transform,
      },
      Oa = {
        test: Fa("hsl", "hue"),
        parse: Pa("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
          "hsla(" +
          Math.round(e) +
          ", " +
          Zo.transform(Vo(t)) +
          ", " +
          Zo.transform(Vo(n)) +
          ", " +
          Vo(Lo.transform(r)) +
          ")",
      },
      _a = {
        test: (e) => Sa.test(e) || Ma.test(e) || Oa.test(e),
        parse: (e) =>
          Sa.test(e) ? Sa.parse(e) : Oa.test(e) ? Oa.parse(e) : Ma.parse(e),
        transform: (e) =>
          qo(e)
            ? e
            : e.hasOwnProperty("red")
            ? Sa.transform(e)
            : Oa.transform(e),
      },
      Ra = (e, t, n) => -n * e + n * t + e;
    function Na(e, t, n) {
      return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6
          ? e + 6 * (t - e) * n
          : n < 0.5
          ? t
          : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
      );
    }
    const ja = (e, t, n) => {
        const r = e * e;
        return Math.sqrt(Math.max(0, n * (t * t - r) + r));
      },
      La = [Ma, Sa, Oa];
    function Ia(e) {
      const t = ((e) => La.find((t) => t.test(e)))(e);
      to(
        Boolean(t),
        `'${e}' is not an animatable color. Use the equivalent color code instead.`
      );
      let n = t.parse(e);
      return (
        t === Oa &&
          (n = (function ({ hue: e, saturation: t, lightness: n, alpha: r }) {
            (e /= 360), (n /= 100);
            let i = 0,
              o = 0,
              s = 0;
            if ((t /= 100)) {
              const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
                a = 2 * n - r;
              (i = Na(a, r, e + 1 / 3)),
                (o = Na(a, r, e)),
                (s = Na(a, r, e - 1 / 3));
            } else i = o = s = n;
            return {
              red: Math.round(255 * i),
              green: Math.round(255 * o),
              blue: Math.round(255 * s),
              alpha: r,
            };
          })(n)),
        n
      );
    }
    const Va = (e, t) => {
        const n = Ia(e),
          r = Ia(t),
          i = { ...n };
        return (e) => (
          (i.red = ja(n.red, r.red, e)),
          (i.green = ja(n.green, r.green, e)),
          (i.blue = ja(n.blue, r.blue, e)),
          (i.alpha = Ra(n.alpha, r.alpha, e)),
          Sa.transform(i)
        );
      },
      za = {
        regex:
          /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
        countKey: "Vars",
        token: "${v}",
        parse: Qi,
      },
      $a = { regex: $o, countKey: "Colors", token: "${c}", parse: _a.parse },
      Wa = { regex: zo, countKey: "Numbers", token: "${n}", parse: jo.parse };
    function qa(e, { regex: t, countKey: n, token: r, parse: i }) {
      const o = e.tokenised.match(t);
      o &&
        ((e["num" + n] = o.length),
        (e.tokenised = e.tokenised.replace(t, r)),
        e.values.push(...o.map(i)));
    }
    function Ua(e) {
      const t = e.toString(),
        n = {
          value: t,
          tokenised: t,
          values: [],
          numVars: 0,
          numColors: 0,
          numNumbers: 0,
        };
      return n.value.includes("var(--") && qa(n, za), qa(n, $a), qa(n, Wa), n;
    }
    function Ha(e) {
      return Ua(e).values;
    }
    function Za(e) {
      const { values: t, numColors: n, numVars: r, tokenised: i } = Ua(e),
        o = t.length;
      return (e) => {
        let t = i;
        for (let i = 0; i < o; i++)
          t =
            i < r
              ? t.replace(za.token, e[i])
              : i < r + n
              ? t.replace($a.token, _a.transform(e[i]))
              : t.replace(Wa.token, Vo(e[i]));
        return t;
      };
    }
    const Ya = (e) => ("number" == typeof e ? 0 : e),
      Ga = {
        test: function (e) {
          var t, n;
          return (
            isNaN(e) &&
            qo(e) &&
            ((null === (t = e.match(zo)) || void 0 === t ? void 0 : t.length) ||
              0) +
              ((null === (n = e.match($o)) || void 0 === n
                ? void 0
                : n.length) || 0) >
              0
          );
        },
        parse: Ha,
        createTransformer: Za,
        getAnimatableNone: function (e) {
          const t = Ha(e);
          return Za(e)(t.map(Ya));
        },
      },
      Xa = (e, t) => (n) => `${n > 0 ? t : e}`;
    function Ka(e, t) {
      return "number" == typeof e
        ? (n) => Ra(e, t, n)
        : _a.test(e)
        ? Va(e, t)
        : e.startsWith("var(")
        ? Xa(e, t)
        : eu(e, t);
    }
    const Ja = (e, t) => {
        const n = [...e],
          r = n.length,
          i = e.map((e, n) => Ka(e, t[n]));
        return (e) => {
          for (let t = 0; t < r; t++) n[t] = i[t](e);
          return n;
        };
      },
      Qa = (e, t) => {
        const n = { ...e, ...t },
          r = {};
        for (const i in n)
          void 0 !== e[i] && void 0 !== t[i] && (r[i] = Ka(e[i], t[i]));
        return (e) => {
          for (const t in r) n[t] = r[t](e);
          return n;
        };
      },
      eu = (e, t) => {
        const n = Ga.createTransformer(t),
          r = Ua(e),
          i = Ua(t);
        return r.numVars === i.numVars &&
          r.numColors === i.numColors &&
          r.numNumbers >= i.numNumbers
          ? js(Ja(r.values, i.values), n)
          : (eo(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            Xa(e, t));
      },
      tu = (e, t, n) => {
        const r = t - e;
        return 0 === r ? 1 : (n - e) / r;
      },
      nu = (e, t) => (n) => Ra(e, t, n);
    function ru(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
      const o = e.length;
      if (
        (to(
          o === t.length,
          "Both input and output ranges must be the same length"
        ),
        1 === o)
      )
        return () => t[0];
      e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
      const s = (function (e, t, n) {
          const r = [],
            i =
              n ||
              (function (e) {
                return "number" == typeof e
                  ? nu
                  : "string" == typeof e
                  ? _a.test(e)
                    ? Va
                    : eu
                  : Array.isArray(e)
                  ? Ja
                  : "object" == typeof e
                  ? Qa
                  : nu;
              })(e[0]),
            o = e.length - 1;
          for (let n = 0; n < o; n++) {
            let o = i(e[n], e[n + 1]);
            if (t) {
              const e = Array.isArray(t) ? t[n] || Qi : t;
              o = js(e, o);
            }
            r.push(o);
          }
          return r;
        })(t, r, i),
        a = s.length,
        u = (t) => {
          let n = 0;
          if (a > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
          const r = tu(e[n], e[n + 1], t);
          return s[n](r);
        };
      return n ? (t) => u(No(e[0], e[o - 1], t)) : u;
    }
    function iu({
      duration: e = 300,
      keyframes: t,
      times: n,
      ease: r = "easeInOut",
    }) {
      const i = va(r) ? r.map(ka) : ka(r),
        o = { done: !1, value: t[0] },
        s = (function (e, t) {
          return e.map((e) => e * t);
        })(
          n && n.length === t.length
            ? n
            : (function (e) {
                const t = [0];
                return (
                  (function (e, t) {
                    const n = e[e.length - 1];
                    for (let r = 1; r <= t; r++) {
                      const i = tu(0, t, r);
                      e.push(Ra(n, 1, i));
                    }
                  })(t, e.length - 1),
                  t
                );
              })(t),
          e
        ),
        a = ru(s, t, {
          ease: Array.isArray(i)
            ? i
            : ((u = t), (l = i), u.map(() => l || ga).splice(0, u.length - 1)),
        });
      var u, l;
      return {
        calculatedDuration: e,
        next: (t) => ((o.value = a(t)), (o.done = t >= e), o),
      };
    }
    function ou(e, t) {
      return t ? e * (1e3 / t) : 0;
    }
    const su = 5;
    function au(e, t, n) {
      const r = Math.max(t - su, 0);
      return ou(n - e(r), t - r);
    }
    const uu = 0.001,
      lu = 0.01,
      cu = 10,
      du = 0.05,
      hu = 1;
    const pu = 12;
    function mu(e, t) {
      return e * Math.sqrt(1 - t * t);
    }
    const fu = ["duration", "bounce"],
      gu = ["stiffness", "damping", "mass"];
    function vu(e, t) {
      return t.some((t) => void 0 !== e[t]);
    }
    function yu({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
      const i = e[0],
        o = e[e.length - 1],
        s = { done: !1, value: i },
        {
          stiffness: a,
          damping: u,
          mass: l,
          velocity: c,
          duration: d,
          isResolvedFromDuration: h,
        } = (function (e) {
          let t = {
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1,
            ...e,
          };
          if (!vu(e, gu) && vu(e, fu)) {
            const n = (function ({
              duration: e = 800,
              bounce: t = 0.25,
              velocity: n = 0,
              mass: r = 1,
            }) {
              let i, o;
              eo(e <= na(cu), "Spring duration must be 10 seconds or less");
              let s = 1 - t;
              (s = No(du, hu, s)),
                (e = No(lu, cu, ra(e))),
                s < 1
                  ? ((i = (t) => {
                      const r = t * s,
                        i = r * e,
                        o = r - n,
                        a = mu(t, s),
                        u = Math.exp(-i);
                      return uu - (o / a) * u;
                    }),
                    (o = (t) => {
                      const r = t * s * e,
                        o = r * n + n,
                        a = Math.pow(s, 2) * Math.pow(t, 2) * e,
                        u = Math.exp(-r),
                        l = mu(Math.pow(t, 2), s);
                      return ((-i(t) + uu > 0 ? -1 : 1) * ((o - a) * u)) / l;
                    }))
                  : ((i = (t) => Math.exp(-t * e) * ((t - n) * e + 1) - uu),
                    (o = (t) => Math.exp(-t * e) * (e * e * (n - t))));
              const a = (function (e, t, n) {
                let r = n;
                for (let n = 1; n < pu; n++) r -= e(r) / t(r);
                return r;
              })(i, o, 5 / e);
              if (((e = na(e)), isNaN(a)))
                return { stiffness: 100, damping: 10, duration: e };
              {
                const t = Math.pow(a, 2) * r;
                return {
                  stiffness: t,
                  damping: 2 * s * Math.sqrt(r * t),
                  duration: e,
                };
              }
            })(e);
            (t = { ...t, ...n, velocity: 0, mass: 1 }),
              (t.isResolvedFromDuration = !0);
          }
          return t;
        })(r),
        p = c ? -ra(c) : 0,
        m = u / (2 * Math.sqrt(a * l)),
        f = o - i,
        g = ra(Math.sqrt(a / l)),
        v = Math.abs(f) < 5;
      let y;
      if ((n || (n = v ? 0.01 : 2), t || (t = v ? 0.005 : 0.5), m < 1)) {
        const e = mu(g, m);
        y = (t) => {
          const n = Math.exp(-m * g * t);
          return (
            o -
            n * (((p + m * g * f) / e) * Math.sin(e * t) + f * Math.cos(e * t))
          );
        };
      } else if (1 === m)
        y = (e) => o - Math.exp(-g * e) * (f + (p + g * f) * e);
      else {
        const e = g * Math.sqrt(m * m - 1);
        y = (t) => {
          const n = Math.exp(-m * g * t),
            r = Math.min(e * t, 300);
          return (
            o -
            (n * ((p + m * g * f) * Math.sinh(r) + e * f * Math.cosh(r))) / e
          );
        };
      }
      return {
        calculatedDuration: (h && d) || null,
        next: (e) => {
          const r = y(e);
          if (h) s.done = e >= d;
          else {
            let i = p;
            0 !== e && (i = m < 1 ? au(y, e, r) : 0);
            const a = Math.abs(i) <= n,
              u = Math.abs(o - r) <= t;
            s.done = a && u;
          }
          return (s.value = s.done ? o : r), s;
        },
      };
    }
    function bu({
      keyframes: e,
      velocity: t = 0,
      power: n = 0.8,
      timeConstant: r = 325,
      bounceDamping: i = 10,
      bounceStiffness: o = 500,
      modifyTarget: s,
      min: a,
      max: u,
      restDelta: l = 0.5,
      restSpeed: c,
    }) {
      const d = e[0],
        h = { done: !1, value: d },
        p = (e) =>
          void 0 === a
            ? u
            : void 0 === u || Math.abs(a - e) < Math.abs(u - e)
            ? a
            : u;
      let m = n * t;
      const f = d + m,
        g = void 0 === s ? f : s(f);
      g !== f && (m = g - d);
      const v = (e) => -m * Math.exp(-e / r),
        y = (e) => g + v(e),
        b = (e) => {
          const t = v(e),
            n = y(e);
          (h.done = Math.abs(t) <= l), (h.value = h.done ? g : n);
        };
      let C, D;
      const w = (e) => {
        ((e) => (void 0 !== a && e < a) || (void 0 !== u && e > u))(h.value) &&
          ((C = e),
          (D = yu({
            keyframes: [h.value, p(h.value)],
            velocity: au(y, e, h.value),
            damping: i,
            stiffness: o,
            restDelta: l,
            restSpeed: c,
          })));
      };
      return (
        w(0),
        {
          calculatedDuration: null,
          next: (e) => {
            let t = !1;
            return (
              D || void 0 !== C || ((t = !0), b(e), w(e)),
              void 0 !== C && e > C ? D.next(e - C) : (!t && b(e), h)
            );
          },
        }
      );
    }
    const Cu = (e) => {
        const t = ({ timestamp: t }) => e(t);
        return {
          start: () => zi.update(t, !0),
          stop: () => $i(t),
          now: () => (_i.isProcessing ? _i.timestamp : performance.now()),
        };
      },
      Du = 2e4;
    function wu(e) {
      let t = 0,
        n = e.next(t);
      for (; !n.done && t < Du; ) (t += 50), (n = e.next(t));
      return t >= Du ? 1 / 0 : t;
    }
    const Eu = { decay: bu, inertia: bu, tween: iu, keyframes: iu, spring: yu };
    function Au({
      autoplay: e = !0,
      delay: t = 0,
      driver: n = Cu,
      keyframes: r,
      type: i = "keyframes",
      repeat: o = 0,
      repeatDelay: s = 0,
      repeatType: a = "loop",
      onPlay: u,
      onStop: l,
      onComplete: c,
      onUpdate: d,
      ...h
    }) {
      let p,
        m,
        f = 1,
        g = !1;
      const v = () => {
        p && p(),
          (m = new Promise((e) => {
            p = e;
          }));
      };
      let y;
      v();
      const b = Eu[i] || iu;
      let C;
      b !== iu &&
        "number" != typeof r[0] &&
        ((C = ru([0, 100], r, { clamp: !1 })), (r = [0, 100]));
      const D = b({ ...h, keyframes: r });
      let w;
      "mirror" === a &&
        (w = b({
          ...h,
          keyframes: [...r].reverse(),
          velocity: -(h.velocity || 0),
        }));
      let E = "idle",
        A = null,
        B = null,
        x = null;
      null === D.calculatedDuration && o && (D.calculatedDuration = wu(D));
      const { calculatedDuration: k } = D;
      let F = 1 / 0,
        P = 1 / 0;
      null !== k && ((F = k + s), (P = F * (o + 1) - s));
      let T = 0;
      const S = (e) => {
          if (null === B) return;
          f > 0 && (B = Math.min(B, e)),
            f < 0 && (B = Math.min(e - P / f, B)),
            (T = null !== A ? A : Math.round(e - B) * f);
          const n = T - t * (f >= 0 ? 1 : -1),
            i = f >= 0 ? n < 0 : n > P;
          (T = Math.max(n, 0)), "finished" === E && null === A && (T = P);
          let u = T,
            l = D;
          if (o) {
            const e = T / F;
            let t = Math.floor(e),
              n = e % 1;
            !n && e >= 1 && (n = 1), 1 === n && t--, (t = Math.min(t, o + 1));
            const r = Boolean(t % 2);
            r &&
              ("reverse" === a
                ? ((n = 1 - n), s && (n -= s / F))
                : "mirror" === a && (l = w));
            let i = No(0, 1, n);
            T > P && (i = "reverse" === a && r ? 1 : 0), (u = i * F);
          }
          const c = i ? { done: !1, value: r[0] } : l.next(u);
          C && (c.value = C(c.value));
          let { done: h } = c;
          i || null === k || (h = f >= 0 ? T >= P : T <= 0);
          const p = null === A && ("finished" === E || ("running" === E && h));
          return d && d(c.value), p && _(), c;
        },
        M = () => {
          y && y.stop(), (y = void 0);
        },
        O = () => {
          (E = "idle"), M(), v(), (B = x = null);
        },
        _ = () => {
          (E = "finished"), c && c(), M(), v();
        },
        R = () => {
          if (g) return;
          y || (y = n(S));
          const e = y.now();
          u && u(),
            null !== A ? (B = e - A) : (B && "finished" !== E) || (B = e),
            (x = B),
            (A = null),
            (E = "running"),
            y.start();
        };
      e && R();
      const N = {
        then: (e, t) => m.then(e, t),
        get time() {
          return ra(T);
        },
        set time(e) {
          (e = na(e)),
            (T = e),
            null === A && y && 0 !== f ? (B = y.now() - e / f) : (A = e);
        },
        get duration() {
          const e =
            null === D.calculatedDuration ? wu(D) : D.calculatedDuration;
          return ra(e);
        },
        get speed() {
          return f;
        },
        set speed(e) {
          e !== f && y && ((f = e), (N.time = ra(T)));
        },
        get state() {
          return E;
        },
        play: R,
        pause: () => {
          (E = "paused"), (A = T);
        },
        stop: () => {
          (g = !0), "idle" !== E && ((E = "idle"), l && l(), O());
        },
        cancel: () => {
          null !== x && S(x), O();
        },
        complete: () => {
          E = "finished";
        },
        sample: (e) => ((B = 0), S(e)),
      };
      return N;
    }
    const Bu = new Set([
      "opacity",
      "clipPath",
      "filter",
      "transform",
      "backgroundColor",
    ]);
    const xu = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
      ku = { type: "keyframes", duration: 0.8 },
      Fu = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
      Pu = (e, { keyframes: t }) =>
        t.length > 2
          ? ku
          : ko.has(e)
          ? e.startsWith("scale")
            ? {
                type: "spring",
                stiffness: 550,
                damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10,
              }
            : xu
          : Fu,
      Tu = (e, t) =>
        !(
          "zIndex" === e ||
          ("number" != typeof t &&
            !Array.isArray(t) &&
            ("string" != typeof t ||
              (!Ga.test(t) && "0" !== t) ||
              t.startsWith("url(")))
        ),
      Su = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function Mu(e) {
      const [t, n] = e.slice(0, -1).split("(");
      if ("drop-shadow" === t) return e;
      const [r] = n.match(zo) || [];
      if (!r) return e;
      const i = n.replace(r, "");
      let o = Su.has(t) ? 1 : 0;
      return r !== n && (o *= 100), t + "(" + o + i + ")";
    }
    const Ou = /([a-z-]*)\(.*?\)/g,
      _u = {
        ...Ga,
        getAnimatableNone: (e) => {
          const t = e.match(Ou);
          return t ? t.map(Mu).join(" ") : e;
        },
      },
      Ru = {
        ...Qo,
        color: _a,
        backgroundColor: _a,
        outlineColor: _a,
        fill: _a,
        stroke: _a,
        borderColor: _a,
        borderTopColor: _a,
        borderRightColor: _a,
        borderBottomColor: _a,
        borderLeftColor: _a,
        filter: _u,
        WebkitFilter: _u,
      },
      Nu = (e) => Ru[e];
    function ju(e, t) {
      let n = Nu(e);
      return (
        n !== _u && (n = Ga),
        n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
      );
    }
    const Lu = (e) => /^0[^.\s]+$/.test(e);
    function Iu(e) {
      return "number" == typeof e
        ? 0 === e
        : null !== e
        ? "none" === e || "0" === e || Lu(e)
        : void 0;
    }
    function Vu(e, t) {
      return e[t] || e.default || e;
    }
    const zu =
      (e, t, n, r = {}) =>
      (i) => {
        const o = Vu(r, e) || {},
          s = o.delay || r.delay || 0;
        let { elapsed: a = 0 } = r;
        a -= na(s);
        const u = (function (e, t, n, r) {
            const i = Tu(t, n);
            let o;
            o = Array.isArray(n) ? [...n] : [null, n];
            const s = void 0 !== r.from ? r.from : e.get();
            let a;
            const u = [];
            for (let e = 0; e < o.length; e++)
              null === o[e] && (o[e] = 0 === e ? s : o[e - 1]),
                Iu(o[e]) && u.push(e),
                "string" == typeof o[e] &&
                  "none" !== o[e] &&
                  "0" !== o[e] &&
                  (a = o[e]);
            if (i && u.length && a)
              for (let e = 0; e < u.length; e++) o[u[e]] = ju(t, a);
            return o;
          })(t, e, n, o),
          l = u[0],
          c = u[u.length - 1],
          d = Tu(e, l),
          h = Tu(e, c);
        eo(
          d === h,
          `You are trying to animate ${e} from "${l}" to "${c}". ${l} is not an animatable value - to enable this animation set ${l} to a value animatable to ${c} via the \`style\` property.`
        );
        let p = {
          keyframes: u,
          velocity: t.getVelocity(),
          ease: "easeOut",
          ...o,
          delay: -a,
          onUpdate: (e) => {
            t.set(e), o.onUpdate && o.onUpdate(e);
          },
          onComplete: () => {
            i(), o.onComplete && o.onComplete();
          },
        };
        if (
          ((function ({
            when: e,
            delay: t,
            delayChildren: n,
            staggerChildren: r,
            staggerDirection: i,
            repeat: o,
            repeatType: s,
            repeatDelay: a,
            from: u,
            elapsed: l,
            ...c
          }) {
            return !!Object.keys(c).length;
          })(o) || (p = { ...p, ...Pu(e, p) }),
          p.duration && (p.duration = na(p.duration)),
          p.repeatDelay && (p.repeatDelay = na(p.repeatDelay)),
          !d || !h || !1 === o.type)
        )
          return (function ({
            keyframes: e,
            delay: t,
            onUpdate: n,
            onComplete: r,
          }) {
            const i = () => (
              n && n(e[e.length - 1]),
              r && r(),
              {
                time: 0,
                speed: 1,
                duration: 0,
                play: Qi,
                pause: Qi,
                stop: Qi,
                then: (e) => (e(), Promise.resolve()),
                cancel: Qi,
                complete: Qi,
              }
            );
            return t
              ? Au({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
              : i();
          })(p);
        if (
          t.owner &&
          t.owner.current instanceof HTMLElement &&
          !t.owner.getProps().onUpdate
        ) {
          const n = (function (e, t, { onUpdate: n, onComplete: r, ...i }) {
            if (
              !da.waapi() ||
              !Bu.has(t) ||
              i.repeatDelay ||
              "mirror" === i.repeatType ||
              0 === i.damping ||
              "inertia" === i.type
            )
              return !1;
            let o,
              s,
              a = !1;
            const u = () => {
              s = new Promise((e) => {
                o = e;
              });
            };
            u();
            let { keyframes: l, duration: c = 300, ease: d, times: h } = i;
            if (
              ((e, t) =>
                "spring" === t.type || "backgroundColor" === e || !oa(t.ease))(
                t,
                i
              )
            ) {
              const e = Au({ ...i, repeat: 0, delay: 0 });
              let t = { done: !1, value: l[0] };
              const n = [];
              let r = 0;
              for (; !t.done && r < 2e4; )
                (t = e.sample(r)), n.push(t.value), (r += 10);
              (h = void 0), (l = n), (c = r - 10), (d = "linear");
            }
            const p = (function (
                e,
                t,
                n,
                {
                  delay: r = 0,
                  duration: i,
                  repeat: o = 0,
                  repeatType: s = "loop",
                  ease: a,
                  times: u,
                } = {}
              ) {
                const l = { [t]: n };
                u && (l.offset = u);
                const c = ua(a);
                return (
                  Array.isArray(c) && (l.easing = c),
                  e.animate(l, {
                    delay: r,
                    duration: i,
                    easing: Array.isArray(c) ? "linear" : c,
                    fill: "both",
                    iterations: o + 1,
                    direction: "reverse" === s ? "alternate" : "normal",
                  })
                );
              })(e.owner.current, t, l, {
                ...i,
                duration: c,
                ease: d,
                times: h,
              }),
              m = () => p.cancel(),
              f = () => {
                zi.update(m), o(), u();
              };
            return (
              (p.onfinish = () => {
                e.set(
                  (function (e, { repeat: t, repeatType: n = "loop" }) {
                    return e[
                      t && "loop" !== n && t % 2 == 1 ? 0 : e.length - 1
                    ];
                  })(l, i)
                ),
                  r && r(),
                  f();
              }),
              {
                then: (e, t) => s.then(e, t),
                get time() {
                  return ra(p.currentTime || 0);
                },
                set time(e) {
                  p.currentTime = na(e);
                },
                get speed() {
                  return p.playbackRate;
                },
                set speed(e) {
                  p.playbackRate = e;
                },
                get duration() {
                  return ra(c);
                },
                play: () => {
                  a || (p.play(), $i(m));
                },
                pause: () => p.pause(),
                stop: () => {
                  if (((a = !0), "idle" === p.playState)) return;
                  const { currentTime: t } = p;
                  if (t) {
                    const n = Au({ ...i, autoplay: !1 });
                    e.setWithVelocity(
                      n.sample(t - 10).value,
                      n.sample(t).value,
                      10
                    );
                  }
                  f();
                },
                complete: () => p.finish(),
                cancel: f,
              }
            );
          })(t, e, p);
          if (n) return n;
        }
        return Au(p);
      };
    function $u(e) {
      return Boolean(Po(e) && e.add);
    }
    const Wu = (e) => /^\-?\d*\.?\d+$/.test(e);
    function qu(e, t) {
      -1 === e.indexOf(t) && e.push(t);
    }
    function Uu(e, t) {
      const n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    }
    class Hu {
      constructor() {
        this.subscriptions = [];
      }
      add(e) {
        return qu(this.subscriptions, e), () => Uu(this.subscriptions, e);
      }
      notify(e, t, n) {
        const r = this.subscriptions.length;
        if (r)
          if (1 === r) this.subscriptions[0](e, t, n);
          else
            for (let i = 0; i < r; i++) {
              const r = this.subscriptions[i];
              r && r(e, t, n);
            }
      }
      getSize() {
        return this.subscriptions.length;
      }
      clear() {
        this.subscriptions.length = 0;
      }
    }
    class Zu {
      constructor(e, t = {}) {
        var n;
        (this.version = "10.12.18"),
          (this.timeDelta = 0),
          (this.lastUpdated = 0),
          (this.canTrackVelocity = !1),
          (this.events = {}),
          (this.updateAndNotify = (e, t = !0) => {
            (this.prev = this.current), (this.current = e);
            const { delta: n, timestamp: r } = _i;
            this.lastUpdated !== r &&
              ((this.timeDelta = n),
              (this.lastUpdated = r),
              zi.postRender(this.scheduleVelocityCheck)),
              this.prev !== this.current &&
                this.events.change &&
                this.events.change.notify(this.current),
              this.events.velocityChange &&
                this.events.velocityChange.notify(this.getVelocity()),
              t &&
                this.events.renderRequest &&
                this.events.renderRequest.notify(this.current);
          }),
          (this.scheduleVelocityCheck = () =>
            zi.postRender(this.velocityCheck)),
          (this.velocityCheck = ({ timestamp: e }) => {
            e !== this.lastUpdated &&
              ((this.prev = this.current),
              this.events.velocityChange &&
                this.events.velocityChange.notify(this.getVelocity()));
          }),
          (this.hasAnimated = !1),
          (this.prev = this.current = e),
          (this.canTrackVelocity = ((n = this.current), !isNaN(parseFloat(n)))),
          (this.owner = t.owner);
      }
      onChange(e) {
        return this.on("change", e);
      }
      on(e, t) {
        this.events[e] || (this.events[e] = new Hu());
        const n = this.events[e].add(t);
        return "change" === e
          ? () => {
              n(),
                zi.read(() => {
                  this.events.change.getSize() || this.stop();
                });
            }
          : n;
      }
      clearListeners() {
        for (const e in this.events) this.events[e].clear();
      }
      attach(e, t) {
        (this.passiveEffect = e), (this.stopPassiveEffect = t);
      }
      set(e, t = !0) {
        t && this.passiveEffect
          ? this.passiveEffect(e, this.updateAndNotify)
          : this.updateAndNotify(e, t);
      }
      setWithVelocity(e, t, n) {
        this.set(t), (this.prev = e), (this.timeDelta = n);
      }
      jump(e) {
        this.updateAndNotify(e),
          (this.prev = e),
          this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect();
      }
      get() {
        return this.current;
      }
      getPrevious() {
        return this.prev;
      }
      getVelocity() {
        return this.canTrackVelocity
          ? ou(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
          : 0;
      }
      start(e) {
        return (
          this.stop(),
          new Promise((t) => {
            (this.hasAnimated = !0),
              (this.animation = e(t)),
              this.events.animationStart && this.events.animationStart.notify();
          }).then(() => {
            this.events.animationComplete &&
              this.events.animationComplete.notify(),
              this.clearAnimation();
          })
        );
      }
      stop() {
        this.animation &&
          (this.animation.stop(),
          this.events.animationCancel && this.events.animationCancel.notify()),
          this.clearAnimation();
      }
      isAnimating() {
        return !!this.animation;
      }
      clearAnimation() {
        delete this.animation;
      }
      destroy() {
        this.clearListeners(),
          this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect();
      }
    }
    function Yu(e, t) {
      return new Zu(e, t);
    }
    const Gu = (e) => (t) => t.test(e),
      Xu = [
        jo,
        Yo,
        Zo,
        Ho,
        Xo,
        Go,
        { test: (e) => "auto" === e, parse: (e) => e },
      ],
      Ku = (e) => Xu.find(Gu(e)),
      Ju = [...Xu, _a, Ga],
      Qu = (e) => Ju.find(Gu(e));
    function el(e, t, n) {
      e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Yu(n));
    }
    function tl(e, t) {
      if (t) return (t[e] || t.default || t).from;
    }
    function nl({ protectedKeys: e, needsAnimating: t }, n) {
      const r = e.hasOwnProperty(n) && !0 !== t[n];
      return (t[n] = !1), r;
    }
    function rl(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
      let {
        transition: o = e.getDefaultTransition(),
        transitionEnd: s,
        ...a
      } = e.makeTargetAnimatable(t);
      const u = e.getValue("willChange");
      r && (o = r);
      const l = [],
        c = i && e.animationState && e.animationState.getState()[i];
      for (const t in a) {
        const r = e.getValue(t),
          i = a[t];
        if (!r || void 0 === i || (c && nl(c, t))) continue;
        const s = { delay: n, elapsed: 0, ...o };
        if (window.HandoffAppearAnimations && !r.hasAnimated) {
          const n = e.getProps()[ta];
          n && (s.elapsed = window.HandoffAppearAnimations(n, t, r, zi));
        }
        r.start(
          zu(t, r, i, e.shouldReduceMotion && ko.has(t) ? { type: !1 } : s)
        );
        const d = r.animation;
        $u(u) && (u.add(t), d.then(() => u.remove(t))), l.push(d);
      }
      return (
        s &&
          Promise.all(l).then(() => {
            s &&
              (function (e, t) {
                const n = ea(e, t);
                let {
                  transitionEnd: r = {},
                  transition: i = {},
                  ...o
                } = n ? e.makeTargetAnimatable(n, !1) : {};
                o = { ...o, ...r };
                for (const t in o) el(e, t, Bs(o[t]));
              })(e, s);
          }),
        l
      );
    }
    function il(e, t, n = {}) {
      const r = ea(e, t, n.custom);
      let { transition: i = e.getDefaultTransition() || {} } = r || {};
      n.transitionOverride && (i = n.transitionOverride);
      const o = r ? () => Promise.all(rl(e, r, n)) : () => Promise.resolve(),
        s =
          e.variantChildren && e.variantChildren.size
            ? (r = 0) => {
                const {
                  delayChildren: o = 0,
                  staggerChildren: s,
                  staggerDirection: a,
                } = i;
                return (function (e, t, n = 0, r = 0, i = 1, o) {
                  const s = [],
                    a = (e.variantChildren.size - 1) * r,
                    u = 1 === i ? (e = 0) => e * r : (e = 0) => a - e * r;
                  return (
                    Array.from(e.variantChildren)
                      .sort(ol)
                      .forEach((e, r) => {
                        e.notify("AnimationStart", t),
                          s.push(
                            il(e, t, { ...o, delay: n + u(r) }).then(() =>
                              e.notify("AnimationComplete", t)
                            )
                          );
                      }),
                    Promise.all(s)
                  );
                })(e, t, o + r, s, a, n);
              }
            : () => Promise.resolve(),
        { when: a } = i;
      if (a) {
        const [e, t] = "beforeChildren" === a ? [o, s] : [s, o];
        return e().then(() => t());
      }
      return Promise.all([o(), s(n.delay)]);
    }
    function ol(e, t) {
      return e.sortNodePosition(t);
    }
    const sl = [...co].reverse(),
      al = co.length;
    function ul(e) {
      let t = (function (e) {
        return (t) =>
          Promise.all(
            t.map(({ animation: t, options: n }) =>
              (function (e, t, n = {}) {
                let r;
                if ((e.notify("AnimationStart", t), Array.isArray(t))) {
                  const i = t.map((t) => il(e, t, n));
                  r = Promise.all(i);
                } else if ("string" == typeof t) r = il(e, t, n);
                else {
                  const i = "function" == typeof t ? ea(e, t, n.custom) : t;
                  r = Promise.all(rl(e, i, n));
                }
                return r.then(() => e.notify("AnimationComplete", t));
              })(e, t, n)
            )
          );
      })(e);
      const n = {
        animate: ll(!0),
        whileInView: ll(),
        whileHover: ll(),
        whileTap: ll(),
        whileDrag: ll(),
        whileFocus: ll(),
        exit: ll(),
      };
      let r = !0;
      const i = (t, n) => {
        const r = ea(e, n);
        if (r) {
          const { transition: e, transitionEnd: n, ...i } = r;
          t = { ...t, ...i, ...n };
        }
        return t;
      };
      function o(o, s) {
        const a = e.getProps(),
          u = e.getVariantContext(!0) || {},
          l = [],
          c = new Set();
        let d = {},
          h = 1 / 0;
        for (let t = 0; t < al; t++) {
          const f = sl[t],
            g = n[f],
            v = void 0 !== a[f] ? a[f] : u[f],
            y = uo(v),
            b = f === s ? g.isActive : null;
          !1 === b && (h = t);
          let C = v === u[f] && v !== a[f] && y;
          if (
            (C && r && e.manuallyAnimateOnMount && (C = !1),
            (g.protectedKeys = { ...d }),
            (!g.isActive && null === b) ||
              (!v && !g.prevProp) ||
              lo(v) ||
              "boolean" == typeof v)
          )
            continue;
          const D =
            ((p = g.prevProp),
            "string" == typeof (m = v)
              ? m !== p
              : !!Array.isArray(m) && !Qs(m, p));
          let w = D || (f === s && g.isActive && !C && y) || (t > h && y);
          const E = Array.isArray(v) ? v : [v];
          let A = E.reduce(i, {});
          !1 === b && (A = {});
          const { prevResolvedValues: B = {} } = g,
            x = { ...B, ...A },
            k = (e) => {
              (w = !0), c.delete(e), (g.needsAnimating[e] = !0);
            };
          for (const e in x) {
            const t = A[e],
              n = B[e];
            d.hasOwnProperty(e) ||
              (t !== n
                ? Es(t) && Es(n)
                  ? !Qs(t, n) || D
                    ? k(e)
                    : (g.protectedKeys[e] = !0)
                  : void 0 !== t
                  ? k(e)
                  : c.add(e)
                : void 0 !== t && c.has(e)
                ? k(e)
                : (g.protectedKeys[e] = !0));
          }
          (g.prevProp = v),
            (g.prevResolvedValues = A),
            g.isActive && (d = { ...d, ...A }),
            r && e.blockInitialAnimation && (w = !1),
            w &&
              !C &&
              l.push(
                ...E.map((e) => ({ animation: e, options: { type: f, ...o } }))
              );
        }
        var p, m;
        if (c.size) {
          const t = {};
          c.forEach((n) => {
            const r = e.getBaseTarget(n);
            void 0 !== r && (t[n] = r);
          }),
            l.push({ animation: t });
        }
        let f = Boolean(l.length);
        return (
          r && !1 === a.initial && !e.manuallyAnimateOnMount && (f = !1),
          (r = !1),
          f ? t(l) : Promise.resolve()
        );
      }
      return {
        animateChanges: o,
        setActive: function (t, r, i) {
          var s;
          if (n[t].isActive === r) return Promise.resolve();
          null === (s = e.variantChildren) ||
            void 0 === s ||
            s.forEach((e) => {
              var n;
              return null === (n = e.animationState) || void 0 === n
                ? void 0
                : n.setActive(t, r);
            }),
            (n[t].isActive = r);
          const a = o(i, t);
          for (const e in n) n[e].protectedKeys = {};
          return a;
        },
        setAnimateFunction: function (n) {
          t = n(e);
        },
        getState: () => n,
      };
    }
    function ll(e = !1) {
      return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
      };
    }
    let cl = 0;
    const dl = {
        animation: {
          Feature: class extends Ws {
            constructor(e) {
              super(e), e.animationState || (e.animationState = ul(e));
            }
            updateAnimationControlsSubscription() {
              const { animate: e } = this.node.getProps();
              this.unmount(), lo(e) && (this.unmount = e.subscribe(this.node));
            }
            mount() {
              this.updateAnimationControlsSubscription();
            }
            update() {
              const { animate: e } = this.node.getProps(),
                { animate: t } = this.node.prevProps || {};
              e !== t && this.updateAnimationControlsSubscription();
            }
            unmount() {}
          },
        },
        exit: {
          Feature: class extends Ws {
            constructor() {
              super(...arguments), (this.id = cl++);
            }
            update() {
              if (!this.node.presenceContext) return;
              const {
                  isPresent: e,
                  onExitComplete: t,
                  custom: n,
                } = this.node.presenceContext,
                { isPresent: r } = this.node.prevPresenceContext || {};
              if (!this.node.animationState || e === r) return;
              const i = this.node.animationState.setActive("exit", !e, {
                custom: null != n ? n : this.node.getProps().custom,
              });
              t && !e && i.then(() => t(this.id));
            }
            mount() {
              const { register: e } = this.node.presenceContext || {};
              e && (this.unmount = e(this.id));
            }
            unmount() {}
          },
        },
      },
      hl = (e, t) => Math.abs(e - t);
    class pl {
      constructor(e, t, { transformPagePoint: n } = {}) {
        if (
          ((this.startEvent = null),
          (this.lastMoveEvent = null),
          (this.lastMoveEventInfo = null),
          (this.handlers = {}),
          (this.updatePoint = () => {
            if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
            const e = gl(this.lastMoveEventInfo, this.history),
              t = null !== this.startEvent,
              n =
                (function (e, t) {
                  const n = hl(e.x, t.x),
                    r = hl(e.y, t.y);
                  return Math.sqrt(n ** 2 + r ** 2);
                })(e.offset, { x: 0, y: 0 }) >= 3;
            if (!t && !n) return;
            const { point: r } = e,
              { timestamp: i } = _i;
            this.history.push({ ...r, timestamp: i });
            const { onStart: o, onMove: s } = this.handlers;
            t ||
              (o && o(this.lastMoveEvent, e),
              (this.startEvent = this.lastMoveEvent)),
              s && s(this.lastMoveEvent, e);
          }),
          (this.handlePointerMove = (e, t) => {
            (this.lastMoveEvent = e),
              (this.lastMoveEventInfo = ml(t, this.transformPagePoint)),
              zi.update(this.updatePoint, !0);
          }),
          (this.handlePointerUp = (e, t) => {
            if ((this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo))
              return;
            const { onEnd: n, onSessionEnd: r } = this.handlers,
              i = gl(
                "pointercancel" === e.type
                  ? this.lastMoveEventInfo
                  : ml(t, this.transformPagePoint),
                this.history
              );
            this.startEvent && n && n(e, i), r && r(e, i);
          }),
          !Ms(e))
        )
          return;
        (this.handlers = t), (this.transformPagePoint = n);
        const r = ml(Os(e), this.transformPagePoint),
          { point: i } = r,
          { timestamp: o } = _i;
        this.history = [{ ...i, timestamp: o }];
        const { onSessionStart: s } = t;
        s && s(e, gl(r, this.history)),
          (this.removeListeners = js(
            Rs(window, "pointermove", this.handlePointerMove),
            Rs(window, "pointerup", this.handlePointerUp),
            Rs(window, "pointercancel", this.handlePointerUp)
          ));
      }
      updateHandlers(e) {
        this.handlers = e;
      }
      end() {
        this.removeListeners && this.removeListeners(), $i(this.updatePoint);
      }
    }
    function ml(e, t) {
      return t ? { point: t(e.point) } : e;
    }
    function fl(e, t) {
      return { x: e.x - t.x, y: e.y - t.y };
    }
    function gl({ point: e }, t) {
      return {
        point: e,
        delta: fl(e, yl(t)),
        offset: fl(e, vl(t)),
        velocity: bl(t, 0.1),
      };
    }
    function vl(e) {
      return e[0];
    }
    function yl(e) {
      return e[e.length - 1];
    }
    function bl(e, t) {
      if (e.length < 2) return { x: 0, y: 0 };
      let n = e.length - 1,
        r = null;
      const i = yl(e);
      for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > na(t))); )
        n--;
      if (!r) return { x: 0, y: 0 };
      const o = ra(i.timestamp - r.timestamp);
      if (0 === o) return { x: 0, y: 0 };
      const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
      return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
    }
    function Cl(e) {
      return e.max - e.min;
    }
    function Dl(e, t = 0, n = 0.01) {
      return Math.abs(e - t) <= n;
    }
    function wl(e, t, n, r = 0.5) {
      (e.origin = r),
        (e.originPoint = Ra(t.min, t.max, e.origin)),
        (e.scale = Cl(n) / Cl(t)),
        (Dl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
        (e.translate = Ra(n.min, n.max, e.origin) - e.originPoint),
        (Dl(e.translate) || isNaN(e.translate)) && (e.translate = 0);
    }
    function El(e, t, n, r) {
      wl(e.x, t.x, n.x, r ? r.originX : void 0),
        wl(e.y, t.y, n.y, r ? r.originY : void 0);
    }
    function Al(e, t, n) {
      (e.min = n.min + t.min), (e.max = e.min + Cl(t));
    }
    function Bl(e, t, n) {
      (e.min = t.min - n.min), (e.max = e.min + Cl(t));
    }
    function xl(e, t, n) {
      Bl(e.x, t.x, n.x), Bl(e.y, t.y, n.y);
    }
    function kl(e, t, n) {
      return {
        min: void 0 !== t ? e.min + t : void 0,
        max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
      };
    }
    function Fl(e, t) {
      let n = t.min - e.min,
        r = t.max - e.max;
      return (
        t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
      );
    }
    const Pl = 0.35;
    function Tl(e, t, n) {
      return { min: Sl(e, t), max: Sl(e, n) };
    }
    function Sl(e, t) {
      return "number" == typeof e ? e : e[t] || 0;
    }
    const Ml = () => ({
        x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
      }),
      Ol = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
    function _l(e) {
      return [e("x"), e("y")];
    }
    function Rl({ top: e, left: t, right: n, bottom: r }) {
      return { x: { min: t, max: n }, y: { min: e, max: r } };
    }
    function Nl(e) {
      return void 0 === e || 1 === e;
    }
    function jl({ scale: e, scaleX: t, scaleY: n }) {
      return !Nl(e) || !Nl(t) || !Nl(n);
    }
    function Ll(e) {
      return jl(e) || Il(e) || e.z || e.rotate || e.rotateX || e.rotateY;
    }
    function Il(e) {
      return Vl(e.x) || Vl(e.y);
    }
    function Vl(e) {
      return e && "0%" !== e;
    }
    function zl(e, t, n) {
      return n + t * (e - n);
    }
    function $l(e, t, n, r, i) {
      return void 0 !== i && (e = zl(e, i, r)), zl(e, n, r) + t;
    }
    function Wl(e, t = 0, n = 1, r, i) {
      (e.min = $l(e.min, t, n, r, i)), (e.max = $l(e.max, t, n, r, i));
    }
    function ql(e, { x: t, y: n }) {
      Wl(e.x, t.translate, t.scale, t.originPoint),
        Wl(e.y, n.translate, n.scale, n.originPoint);
    }
    function Ul(e) {
      return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
        ? e
        : 1;
    }
    function Hl(e, t) {
      (e.min = e.min + t), (e.max = e.max + t);
    }
    function Zl(e, t, [n, r, i]) {
      const o = void 0 !== t[i] ? t[i] : 0.5,
        s = Ra(e.min, e.max, o);
      Wl(e, t[n], t[r], s, t.scale);
    }
    const Yl = ["x", "scaleX", "originX"],
      Gl = ["y", "scaleY", "originY"];
    function Xl(e, t) {
      Zl(e.x, t, Yl), Zl(e.y, t, Gl);
    }
    function Kl(e, t) {
      return Rl(
        (function (e, t) {
          if (!t) return e;
          const n = t({ x: e.left, y: e.top }),
            r = t({ x: e.right, y: e.bottom });
          return { top: n.y, left: n.x, bottom: r.y, right: r.x };
        })(e.getBoundingClientRect(), t)
      );
    }
    const Jl = new WeakMap();
    class Ql {
      constructor(e) {
        (this.openGlobalLock = null),
          (this.isDragging = !1),
          (this.currentDirection = null),
          (this.originPoint = { x: 0, y: 0 }),
          (this.constraints = !1),
          (this.hasMutatedConstraints = !1),
          (this.elastic = Ol()),
          (this.visualElement = e);
      }
      start(e, { snapToCursor: t = !1 } = {}) {
        const { presenceContext: n } = this.visualElement;
        (n && !1 === n.isPresent) ||
          (this.panSession = new pl(
            e,
            {
              onSessionStart: (e) => {
                this.stopAnimation(),
                  t && this.snapToCursor(Os(e, "page").point);
              },
              onStart: (e, t) => {
                const {
                  drag: n,
                  dragPropagation: r,
                  onDragStart: i,
                } = this.getProps();
                if (
                  n &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = zs(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  _l((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (Zo.test(t)) {
                      const { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        const r = n.layout.layoutBox[e];
                        r && (t = Cl(r) * (parseFloat(t) / 100));
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  i && zi.update(() => i(e, t), !1, !0);
                const { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                const {
                  dragPropagation: n,
                  dragDirectionLock: r,
                  onDirectionLock: i,
                  onDrag: o,
                } = this.getProps();
                if (!n && !this.openGlobalLock) return;
                const { offset: s } = t;
                if (r && null === this.currentDirection)
                  return (
                    (this.currentDirection = (function (e, t = 10) {
                      let n = null;
                      return (
                        Math.abs(e.y) > t
                          ? (n = "y")
                          : Math.abs(e.x) > t && (n = "x"),
                        n
                      );
                    })(s)),
                    void (
                      null !== this.currentDirection &&
                      i &&
                      i(this.currentDirection)
                    )
                  );
                this.updateAxis("x", t.point, s),
                  this.updateAxis("y", t.point, s),
                  this.visualElement.render(),
                  o && o(e, t);
              },
              onSessionEnd: (e, t) => this.stop(e, t),
            },
            { transformPagePoint: this.visualElement.getTransformPagePoint() }
          ));
      }
      stop(e, t) {
        const n = this.isDragging;
        if ((this.cancel(), !n)) return;
        const { velocity: r } = t;
        this.startAnimation(r);
        const { onDragEnd: i } = this.getProps();
        i && zi.update(() => i(e, t));
      }
      cancel() {
        this.isDragging = !1;
        const { projection: e, animationState: t } = this.visualElement;
        e && (e.isAnimationBlocked = !1),
          this.panSession && this.panSession.end(),
          (this.panSession = void 0);
        const { dragPropagation: n } = this.getProps();
        !n &&
          this.openGlobalLock &&
          (this.openGlobalLock(), (this.openGlobalLock = null)),
          t && t.setActive("whileDrag", !1);
      }
      updateAxis(e, t, n) {
        const { drag: r } = this.getProps();
        if (!n || !ec(e, r, this.currentDirection)) return;
        const i = this.getAxisMotionValue(e);
        let o = this.originPoint[e] + n[e];
        this.constraints &&
          this.constraints[e] &&
          (o = (function (e, { min: t, max: n }, r) {
            return (
              void 0 !== t && e < t
                ? (e = r ? Ra(t, e, r.min) : Math.max(e, t))
                : void 0 !== n &&
                  e > n &&
                  (e = r ? Ra(n, e, r.max) : Math.min(e, n)),
              e
            );
          })(o, this.constraints[e], this.elastic[e])),
          i.set(o);
      }
      resolveConstraints() {
        const { dragConstraints: e, dragElastic: t } = this.getProps(),
          { layout: n } = this.visualElement.projection || {},
          r = this.constraints;
        e && ao(e)
          ? this.constraints ||
            (this.constraints = this.resolveRefConstraints())
          : (this.constraints =
              !(!e || !n) &&
              (function (e, { top: t, left: n, bottom: r, right: i }) {
                return { x: kl(e.x, n, i), y: kl(e.y, t, r) };
              })(n.layoutBox, e)),
          (this.elastic = (function (e = Pl) {
            return (
              !1 === e ? (e = 0) : !0 === e && (e = Pl),
              { x: Tl(e, "left", "right"), y: Tl(e, "top", "bottom") }
            );
          })(t)),
          r !== this.constraints &&
            n &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            _l((e) => {
              this.getAxisMotionValue(e) &&
                (this.constraints[e] = (function (e, t) {
                  const n = {};
                  return (
                    void 0 !== t.min && (n.min = t.min - e.min),
                    void 0 !== t.max && (n.max = t.max - e.min),
                    n
                  );
                })(n.layoutBox[e], this.constraints[e]));
            });
      }
      resolveRefConstraints() {
        const { dragConstraints: e, onMeasureDragConstraints: t } =
          this.getProps();
        if (!e || !ao(e)) return !1;
        const n = e.current;
        to(
          null !== n,
          "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
        );
        const { projection: r } = this.visualElement;
        if (!r || !r.layout) return !1;
        const i = (function (e, t, n) {
          const r = Kl(e, n),
            { scroll: i } = t;
          return i && (Hl(r.x, i.offset.x), Hl(r.y, i.offset.y)), r;
        })(n, r.root, this.visualElement.getTransformPagePoint());
        let o = (function (e, t) {
          return { x: Fl(e.x, t.x), y: Fl(e.y, t.y) };
        })(r.layout.layoutBox, i);
        if (t) {
          const e = t(
            (function ({ x: e, y: t }) {
              return { top: t.min, right: e.max, bottom: t.max, left: e.min };
            })(o)
          );
          (this.hasMutatedConstraints = !!e), e && (o = Rl(e));
        }
        return o;
      }
      startAnimation(e) {
        const {
            drag: t,
            dragMomentum: n,
            dragElastic: r,
            dragTransition: i,
            dragSnapToOrigin: o,
            onDragTransitionEnd: s,
          } = this.getProps(),
          a = this.constraints || {},
          u = _l((s) => {
            if (!ec(s, t, this.currentDirection)) return;
            let u = (a && a[s]) || {};
            o && (u = { min: 0, max: 0 });
            const l = r ? 200 : 1e6,
              c = r ? 40 : 1e7,
              d = {
                type: "inertia",
                velocity: n ? e[s] : 0,
                bounceStiffness: l,
                bounceDamping: c,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...u,
              };
            return this.startAxisValueAnimation(s, d);
          });
        return Promise.all(u).then(s);
      }
      startAxisValueAnimation(e, t) {
        const n = this.getAxisMotionValue(e);
        return n.start(zu(e, n, 0, t));
      }
      stopAnimation() {
        _l((e) => this.getAxisMotionValue(e).stop());
      }
      getAxisMotionValue(e) {
        const t = "_drag" + e.toUpperCase(),
          n = this.visualElement.getProps();
        return (
          n[t] ||
          this.visualElement.getValue(
            e,
            (n.initial ? n.initial[e] : void 0) || 0
          )
        );
      }
      snapToCursor(e) {
        _l((t) => {
          const { drag: n } = this.getProps();
          if (!ec(t, n, this.currentDirection)) return;
          const { projection: r } = this.visualElement,
            i = this.getAxisMotionValue(t);
          if (r && r.layout) {
            const { min: n, max: o } = r.layout.layoutBox[t];
            i.set(e[t] - Ra(n, o, 0.5));
          }
        });
      }
      scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const { drag: e, dragConstraints: t } = this.getProps(),
          { projection: n } = this.visualElement;
        if (!ao(t) || !n || !this.constraints) return;
        this.stopAnimation();
        const r = { x: 0, y: 0 };
        _l((e) => {
          const t = this.getAxisMotionValue(e);
          if (t) {
            const n = t.get();
            r[e] = (function (e, t) {
              let n = 0.5;
              const r = Cl(e),
                i = Cl(t);
              return (
                i > r
                  ? (n = tu(t.min, t.max - r, e.min))
                  : r > i && (n = tu(e.min, e.max - i, t.min)),
                No(0, 1, n)
              );
            })({ min: n, max: n }, this.constraints[e]);
          }
        });
        const { transformTemplate: i } = this.visualElement.getProps();
        (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
          n.root && n.root.updateScroll(),
          n.updateLayout(),
          this.resolveConstraints(),
          _l((t) => {
            if (!ec(t, e, null)) return;
            const n = this.getAxisMotionValue(t),
              { min: i, max: o } = this.constraints[t];
            n.set(Ra(i, o, r[t]));
          });
      }
      addListeners() {
        if (!this.visualElement.current) return;
        Jl.set(this.visualElement, this);
        const e = Rs(this.visualElement.current, "pointerdown", (e) => {
            const { drag: t, dragListener: n = !0 } = this.getProps();
            t && n && this.start(e);
          }),
          t = () => {
            const { dragConstraints: e } = this.getProps();
            ao(e) && (this.constraints = this.resolveRefConstraints());
          },
          { projection: n } = this.visualElement,
          r = n.addEventListener("measure", t);
        n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
          t();
        const i = Ss(window, "resize", () =>
            this.scalePositionWithinConstraints()
          ),
          o = n.addEventListener(
            "didUpdate",
            ({ delta: e, hasLayoutChanged: t }) => {
              this.isDragging &&
                t &&
                (_l((t) => {
                  const n = this.getAxisMotionValue(t);
                  n &&
                    ((this.originPoint[t] += e[t].translate),
                    n.set(n.get() + e[t].translate));
                }),
                this.visualElement.render());
            }
          );
        return () => {
          i(), e(), r(), o && o();
        };
      }
      getProps() {
        const e = this.visualElement.getProps(),
          {
            drag: t = !1,
            dragDirectionLock: n = !1,
            dragPropagation: r = !1,
            dragConstraints: i = !1,
            dragElastic: o = Pl,
            dragMomentum: s = !0,
          } = e;
        return {
          ...e,
          drag: t,
          dragDirectionLock: n,
          dragPropagation: r,
          dragConstraints: i,
          dragElastic: o,
          dragMomentum: s,
        };
      }
    }
    function ec(e, t, n) {
      return !((!0 !== t && t !== e) || (null !== n && n !== e));
    }
    const tc = (e) => (t, n) => {
        e && zi.update(() => e(t, n));
      },
      nc = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
    function rc(e, t) {
      return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
    }
    const ic = {
        correct: (e, t) => {
          if (!t.target) return e;
          if ("string" == typeof e) {
            if (!Yo.test(e)) return e;
            e = parseFloat(e);
          }
          return `${rc(e, t.target.x)}% ${rc(e, t.target.y)}%`;
        },
      },
      oc = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
          const r = e,
            i = Ga.parse(e);
          if (i.length > 5) return r;
          const o = Ga.createTransformer(e),
            s = "number" != typeof i[0] ? 1 : 0,
            a = n.x.scale * t.x,
            u = n.y.scale * t.y;
          (i[0 + s] /= a), (i[1 + s] /= u);
          const l = Ra(a, u, 0.5);
          return (
            "number" == typeof i[2 + s] && (i[2 + s] /= l),
            "number" == typeof i[3 + s] && (i[3 + s] /= l),
            o(i)
          );
        },
      };
    class sc extends e.Component {
      componentDidMount() {
        const {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: n,
            layoutId: r,
          } = this.props,
          { projection: i } = e;
        var o;
        (o = uc),
          Object.assign(Bo, o),
          i &&
            (t.group && t.group.add(i),
            n && n.register && r && n.register(i),
            i.root.didUpdate(),
            i.addEventListener("animationComplete", () => {
              this.safeToRemove();
            }),
            i.setOptions({
              ...i.options,
              onExitComplete: () => this.safeToRemove(),
            })),
          (nc.hasEverUpdated = !0);
      }
      getSnapshotBeforeUpdate(e) {
        const {
            layoutDependency: t,
            visualElement: n,
            drag: r,
            isPresent: i,
          } = this.props,
          o = n.projection;
        return o
          ? ((o.isPresent = i),
            r || e.layoutDependency !== t || void 0 === t
              ? o.willUpdate()
              : this.safeToRemove(),
            e.isPresent !== i &&
              (i
                ? o.promote()
                : o.relegate() ||
                  zi.postRender(() => {
                    const e = o.getStack();
                    (e && e.members.length) || this.safeToRemove();
                  })),
            null)
          : null;
      }
      componentDidUpdate() {
        const { projection: e } = this.props.visualElement;
        e &&
          (e.root.didUpdate(),
          queueMicrotask(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove();
          }));
      }
      componentWillUnmount() {
        const {
            visualElement: e,
            layoutGroup: t,
            switchLayoutGroup: n,
          } = this.props,
          { projection: r } = e;
        r &&
          (r.scheduleCheckAfterUnmount(),
          t && t.group && t.group.remove(r),
          n && n.deregister && n.deregister(r));
      }
      safeToRemove() {
        const { safeToRemove: e } = this.props;
        e && e();
      }
      render() {
        return null;
      }
    }
    function ac(t) {
      const [n, r] = (function () {
          const t = (0, e.useContext)(Hi);
          if (null === t) return [!0, null];
          const { isPresent: n, onExitComplete: r, register: i } = t,
            o = (0, e.useId)();
          return (
            (0, e.useEffect)(() => i(o), []),
            !n && r ? [!1, () => r && r(o)] : [!0]
          );
        })(),
        i = (0, e.useContext)(Ji);
      return e.createElement(sc, {
        ...t,
        layoutGroup: i,
        switchLayoutGroup: (0, e.useContext)(yo),
        isPresent: n,
        safeToRemove: r,
      });
    }
    const uc = {
        borderRadius: {
          ...ic,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: ic,
        borderTopRightRadius: ic,
        borderBottomLeftRadius: ic,
        borderBottomRightRadius: ic,
        boxShadow: oc,
      },
      lc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
      cc = lc.length,
      dc = (e) => ("string" == typeof e ? parseFloat(e) : e),
      hc = (e) => "number" == typeof e || Yo.test(e);
    function pc(e, t) {
      return void 0 !== e[t] ? e[t] : e.borderRadius;
    }
    const mc = gc(0, 0.5, Da),
      fc = gc(0.5, 0.95, Qi);
    function gc(e, t, n) {
      return (r) => (r < e ? 0 : r > t ? 1 : n(tu(e, t, r)));
    }
    function vc(e, t) {
      (e.min = t.min), (e.max = t.max);
    }
    function yc(e, t) {
      vc(e.x, t.x), vc(e.y, t.y);
    }
    function bc(e, t, n, r, i) {
      return (
        (e = zl((e -= t), 1 / n, r)), void 0 !== i && (e = zl(e, 1 / i, r)), e
      );
    }
    function Cc(e, t, [n, r, i], o, s) {
      !(function (e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
        if (
          (Zo.test(t) &&
            ((t = parseFloat(t)), (t = Ra(s.min, s.max, t / 100) - s.min)),
          "number" != typeof t)
        )
          return;
        let a = Ra(o.min, o.max, r);
        e === o && (a -= t),
          (e.min = bc(e.min, t, n, a, i)),
          (e.max = bc(e.max, t, n, a, i));
      })(e, t[n], t[r], t[i], t.scale, o, s);
    }
    const Dc = ["x", "scaleX", "originX"],
      wc = ["y", "scaleY", "originY"];
    function Ec(e, t, n, r) {
      Cc(e.x, t, Dc, n ? n.x : void 0, r ? r.x : void 0),
        Cc(e.y, t, wc, n ? n.y : void 0, r ? r.y : void 0);
    }
    function Ac(e) {
      return 0 === e.translate && 1 === e.scale;
    }
    function Bc(e) {
      return Ac(e.x) && Ac(e.y);
    }
    function xc(e, t) {
      return (
        e.x.min === t.x.min &&
        e.x.max === t.x.max &&
        e.y.min === t.y.min &&
        e.y.max === t.y.max
      );
    }
    function kc(e) {
      return Cl(e.x) / Cl(e.y);
    }
    class Fc {
      constructor() {
        this.members = [];
      }
      add(e) {
        qu(this.members, e), e.scheduleRender();
      }
      remove(e) {
        if (
          (Uu(this.members, e),
          e === this.prevLead && (this.prevLead = void 0),
          e === this.lead)
        ) {
          const e = this.members[this.members.length - 1];
          e && this.promote(e);
        }
      }
      relegate(e) {
        const t = this.members.findIndex((t) => e === t);
        if (0 === t) return !1;
        let n;
        for (let e = t; e >= 0; e--) {
          const t = this.members[e];
          if (!1 !== t.isPresent) {
            n = t;
            break;
          }
        }
        return !!n && (this.promote(n), !0);
      }
      promote(e, t) {
        const n = this.lead;
        if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
          n.instance && n.scheduleRender(),
            e.scheduleRender(),
            (e.resumeFrom = n),
            t && (e.resumeFrom.preserveOpacity = !0),
            n.snapshot &&
              ((e.snapshot = n.snapshot),
              (e.snapshot.latestValues = n.animationValues || n.latestValues)),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
          const { crossfade: r } = e.options;
          !1 === r && n.hide();
        }
      }
      exitAnimationComplete() {
        this.members.forEach((e) => {
          const { options: t, resumingFrom: n } = e;
          t.onExitComplete && t.onExitComplete(),
            n && n.options.onExitComplete && n.options.onExitComplete();
        });
      }
      scheduleRender() {
        this.members.forEach((e) => {
          e.instance && e.scheduleRender(!1);
        });
      }
      removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
      }
    }
    function Pc(e, t, n) {
      let r = "";
      const i = e.x.translate / t.x,
        o = e.y.translate / t.y;
      if (
        ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
        (1 === t.x && 1 === t.y) || (r += `scale(${1 / t.x}, ${1 / t.y}) `),
        n)
      ) {
        const { rotate: e, rotateX: t, rotateY: i } = n;
        e && (r += `rotate(${e}deg) `),
          t && (r += `rotateX(${t}deg) `),
          i && (r += `rotateY(${i}deg) `);
      }
      const s = e.x.scale * t.x,
        a = e.y.scale * t.y;
      return (1 === s && 1 === a) || (r += `scale(${s}, ${a})`), r || "none";
    }
    const Tc = (e, t) => e.depth - t.depth;
    class Sc {
      constructor() {
        (this.children = []), (this.isDirty = !1);
      }
      add(e) {
        qu(this.children, e), (this.isDirty = !0);
      }
      remove(e) {
        Uu(this.children, e), (this.isDirty = !0);
      }
      forEach(e) {
        this.isDirty && this.children.sort(Tc),
          (this.isDirty = !1),
          this.children.forEach(e);
      }
    }
    const Mc = ["", "X", "Y", "Z"];
    let Oc = 0;
    const _c = {
      type: "projectionFrame",
      totalNodes: 0,
      resolvedTargetDeltas: 0,
      recalculatedProjection: 0,
    };
    function Rc({
      attachResizeListener: e,
      defaultParent: t,
      measureScroll: n,
      checkIsScrollRoot: r,
      resetTransform: i,
    }) {
      return class {
        constructor(e = {}, n = null == t ? void 0 : t()) {
          (this.id = Oc++),
            (this.animationId = 0),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.isProjectionDirty = !1),
            (this.isSharedProjectionDirty = !1),
            (this.isTransformDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.hasTreeAnimated = !1),
            (this.updateScheduled = !1),
            (this.checkUpdateFailed = () => {
              this.isUpdating &&
                ((this.isUpdating = !1), this.clearAllSnapshots());
            }),
            (this.updateProjection = () => {
              var e;
              (_c.totalNodes =
                _c.resolvedTargetDeltas =
                _c.recalculatedProjection =
                  0),
                this.nodes.forEach(Lc),
                this.nodes.forEach(Uc),
                this.nodes.forEach(Hc),
                this.nodes.forEach(Ic),
                (e = _c),
                window.MotionDebug && window.MotionDebug.record(e);
            }),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.latestValues = e),
            (this.root = n ? n.root || n : this),
            (this.path = n ? [...n.path, n] : []),
            (this.parent = n),
            (this.depth = n ? n.depth + 1 : 0);
          for (let e = 0; e < this.path.length; e++)
            this.path[e].shouldResetTransform = !0;
          this.root === this && (this.nodes = new Sc());
        }
        addEventListener(e, t) {
          return (
            this.eventHandlers.has(e) || this.eventHandlers.set(e, new Hu()),
            this.eventHandlers.get(e).add(t)
          );
        }
        notifyListeners(e, ...t) {
          const n = this.eventHandlers.get(e);
          n && n.notify(...t);
        }
        hasListeners(e) {
          return this.eventHandlers.has(e);
        }
        mount(t, n = this.root.hasTreeAnimated) {
          if (this.instance) return;
          var r;
          (this.isSVG = (r = t) instanceof SVGElement && "svg" !== r.tagName),
            (this.instance = t);
          const { layoutId: i, layout: o, visualElement: s } = this.options;
          if (
            (s && !s.current && s.mount(t),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            n && (o || i) && (this.isLayoutDirty = !0),
            e)
          ) {
            let n;
            const r = () => (this.root.updateBlockedByResize = !1);
            e(t, () => {
              (this.root.updateBlockedByResize = !0),
                n && n(),
                (n = (function (e, t) {
                  const n = performance.now(),
                    r = ({ timestamp: t }) => {
                      const i = t - n;
                      i >= 250 && ($i(r), e(i - 250));
                    };
                  return zi.read(r, !0), () => $i(r);
                })(r)),
                nc.hasAnimatedSinceResize &&
                  ((nc.hasAnimatedSinceResize = !1), this.nodes.forEach(qc));
            });
          }
          i && this.root.registerSharedNode(i, this),
            !1 !== this.options.animate &&
              s &&
              (i || o) &&
              this.addEventListener(
                "didUpdate",
                ({
                  delta: e,
                  hasLayoutChanged: t,
                  hasRelativeTargetChanged: n,
                  layout: r,
                }) => {
                  if (this.isTreeAnimationBlocked())
                    return (
                      (this.target = void 0),
                      void (this.relativeTarget = void 0)
                    );
                  const i =
                      this.options.transition || s.getDefaultTransition() || Jc,
                    {
                      onLayoutAnimationStart: o,
                      onLayoutAnimationComplete: a,
                    } = s.getProps(),
                    u = !this.targetLayout || !xc(this.targetLayout, r) || n,
                    l = !t && n;
                  if (
                    this.options.layoutRoot ||
                    (this.resumeFrom && this.resumeFrom.instance) ||
                    l ||
                    (t && (u || !this.currentAnimation))
                  ) {
                    this.resumeFrom &&
                      ((this.resumingFrom = this.resumeFrom),
                      (this.resumingFrom.resumingFrom = void 0)),
                      this.setAnimationOrigin(e, l);
                    const t = { ...Vu(i, "layout"), onPlay: o, onComplete: a };
                    (s.shouldReduceMotion || this.options.layoutRoot) &&
                      ((t.delay = 0), (t.type = !1)),
                      this.startAnimation(t);
                  } else
                    t || qc(this),
                      this.isLead() &&
                        this.options.onExitComplete &&
                        this.options.onExitComplete();
                  this.targetLayout = r;
                }
              );
        }
        unmount() {
          this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
          const e = this.getStack();
          e && e.remove(this),
            this.parent && this.parent.children.delete(this),
            (this.instance = void 0),
            $i(this.updateProjection);
        }
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
          return (
            this.isAnimationBlocked ||
            (this.parent && this.parent.isTreeAnimationBlocked()) ||
            !1
          );
        }
        startUpdate() {
          this.isUpdateBlocked() ||
            ((this.isUpdating = !0),
            this.nodes && this.nodes.forEach(Zc),
            this.animationId++);
        }
        getTransformTemplate() {
          const { visualElement: e } = this.options;
          return e && e.getProps().transformTemplate;
        }
        willUpdate(e = !0) {
          if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked()))
            return void (
              this.options.onExitComplete && this.options.onExitComplete()
            );
          if (
            (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
          )
            return;
          this.isLayoutDirty = !0;
          for (let e = 0; e < this.path.length; e++) {
            const t = this.path[e];
            (t.shouldResetTransform = !0),
              t.updateScroll("snapshot"),
              t.options.layoutRoot && t.willUpdate(!1);
          }
          const { layoutId: t, layout: n } = this.options;
          if (void 0 === t && !n) return;
          const r = this.getTransformTemplate();
          (this.prevTransformTemplateValue = r
            ? r(this.latestValues, "")
            : void 0),
            this.updateSnapshot(),
            e && this.notifyListeners("willUpdate");
        }
        update() {
          if (((this.updateScheduled = !1), this.isUpdateBlocked()))
            return (
              this.unblockUpdate(),
              this.clearAllSnapshots(),
              void this.nodes.forEach(zc)
            );
          this.isUpdating || this.nodes.forEach($c),
            (this.isUpdating = !1),
            this.nodes.forEach(Wc),
            this.nodes.forEach(Nc),
            this.nodes.forEach(jc),
            this.clearAllSnapshots();
          const e = performance.now();
          (_i.delta = No(0, 1e3 / 60, e - _i.timestamp)),
            (_i.timestamp = e),
            (_i.isProcessing = !0),
            Li.update.process(_i),
            Li.preRender.process(_i),
            Li.render.process(_i),
            (_i.isProcessing = !1);
        }
        didUpdate() {
          this.updateScheduled ||
            ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
        }
        clearAllSnapshots() {
          this.nodes.forEach(Vc), this.sharedNodes.forEach(Yc);
        }
        scheduleUpdateProjection() {
          zi.preRender(this.updateProjection, !1, !0);
        }
        scheduleCheckAfterUnmount() {
          zi.postRender(() => {
            this.isLayoutDirty
              ? this.root.didUpdate()
              : this.root.checkUpdateFailed();
          });
        }
        updateSnapshot() {
          !this.snapshot && this.instance && (this.snapshot = this.measure());
        }
        updateLayout() {
          if (!this.instance) return;
          if (
            (this.updateScroll(),
            !(
              (this.options.alwaysMeasureLayout && this.isLead()) ||
              this.isLayoutDirty
            ))
          )
            return;
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (let e = 0; e < this.path.length; e++)
              this.path[e].updateScroll();
          const e = this.layout;
          (this.layout = this.measure(!1)),
            (this.layoutCorrected = Ol()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners("measure", this.layout.layoutBox);
          const { visualElement: t } = this.options;
          t &&
            t.notify(
              "LayoutMeasure",
              this.layout.layoutBox,
              e ? e.layoutBox : void 0
            );
        }
        updateScroll(e = "measure") {
          let t = Boolean(this.options.layoutScroll && this.instance);
          this.scroll &&
            this.scroll.animationId === this.root.animationId &&
            this.scroll.phase === e &&
            (t = !1),
            t &&
              (this.scroll = {
                animationId: this.root.animationId,
                phase: e,
                isRoot: r(this.instance),
                offset: n(this.instance),
              });
        }
        resetTransform() {
          if (!i) return;
          const e = this.isLayoutDirty || this.shouldResetTransform,
            t = this.projectionDelta && !Bc(this.projectionDelta),
            n = this.getTransformTemplate(),
            r = n ? n(this.latestValues, "") : void 0,
            o = r !== this.prevTransformTemplateValue;
          e &&
            (t || Ll(this.latestValues) || o) &&
            (i(this.instance, r),
            (this.shouldResetTransform = !1),
            this.scheduleRender());
        }
        measure(e = !0) {
          const t = this.measurePageBox();
          let n = this.removeElementScroll(t);
          var r;
          return (
            e && (n = this.removeTransform(n)),
            Qc((r = n).x),
            Qc(r.y),
            {
              animationId: this.root.animationId,
              measuredBox: t,
              layoutBox: n,
              latestValues: {},
              source: this.id,
            }
          );
        }
        measurePageBox() {
          const { visualElement: e } = this.options;
          if (!e) return Ol();
          const t = e.measureViewportBox(),
            { scroll: n } = this.root;
          return n && (Hl(t.x, n.offset.x), Hl(t.y, n.offset.y)), t;
        }
        removeElementScroll(e) {
          const t = Ol();
          yc(t, e);
          for (let n = 0; n < this.path.length; n++) {
            const r = this.path[n],
              { scroll: i, options: o } = r;
            if (r !== this.root && i && o.layoutScroll) {
              if (i.isRoot) {
                yc(t, e);
                const { scroll: n } = this.root;
                n && (Hl(t.x, -n.offset.x), Hl(t.y, -n.offset.y));
              }
              Hl(t.x, i.offset.x), Hl(t.y, i.offset.y);
            }
          }
          return t;
        }
        applyTransform(e, t = !1) {
          const n = Ol();
          yc(n, e);
          for (let e = 0; e < this.path.length; e++) {
            const r = this.path[e];
            !t &&
              r.options.layoutScroll &&
              r.scroll &&
              r !== r.root &&
              Xl(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
              Ll(r.latestValues) && Xl(n, r.latestValues);
          }
          return Ll(this.latestValues) && Xl(n, this.latestValues), n;
        }
        removeTransform(e) {
          const t = Ol();
          yc(t, e);
          for (let e = 0; e < this.path.length; e++) {
            const n = this.path[e];
            if (!n.instance) continue;
            if (!Ll(n.latestValues)) continue;
            jl(n.latestValues) && n.updateSnapshot();
            const r = Ol();
            yc(r, n.measurePageBox()),
              Ec(
                t,
                n.latestValues,
                n.snapshot ? n.snapshot.layoutBox : void 0,
                r
              );
          }
          return Ll(this.latestValues) && Ec(t, this.latestValues), t;
        }
        setTargetDelta(e) {
          (this.targetDelta = e),
            this.root.scheduleUpdateProjection(),
            (this.isProjectionDirty = !0);
        }
        setOptions(e) {
          this.options = {
            ...this.options,
            ...e,
            crossfade: void 0 === e.crossfade || e.crossfade,
          };
        }
        clearMeasurements() {
          (this.scroll = void 0),
            (this.layout = void 0),
            (this.snapshot = void 0),
            (this.prevTransformTemplateValue = void 0),
            (this.targetDelta = void 0),
            (this.target = void 0),
            (this.isLayoutDirty = !1);
        }
        forceRelativeParentToResolveTarget() {
          this.relativeParent &&
            this.relativeParent.resolvedRelativeTargetAt !== _i.timestamp &&
            this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(e = !1) {
          var t;
          const n = this.getLead();
          this.isProjectionDirty ||
            (this.isProjectionDirty = n.isProjectionDirty),
            this.isTransformDirty ||
              (this.isTransformDirty = n.isTransformDirty),
            this.isSharedProjectionDirty ||
              (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
          const r = Boolean(this.resumingFrom) || this !== n;
          if (
            !(
              e ||
              (r && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              (null === (t = this.parent) || void 0 === t
                ? void 0
                : t.isProjectionDirty) ||
              this.attemptToResolveRelativeTarget
            )
          )
            return;
          const { layout: i, layoutId: o } = this.options;
          if (this.layout && (i || o)) {
            if (
              ((this.resolvedRelativeTargetAt = _i.timestamp),
              !this.targetDelta && !this.relativeTarget)
            ) {
              const e = this.getClosestProjectingParent();
              e && e.layout && 1 !== this.animationProgress
                ? ((this.relativeParent = e),
                  this.forceRelativeParentToResolveTarget(),
                  (this.relativeTarget = Ol()),
                  (this.relativeTargetOrigin = Ol()),
                  xl(
                    this.relativeTargetOrigin,
                    this.layout.layoutBox,
                    e.layout.layoutBox
                  ),
                  yc(this.relativeTarget, this.relativeTargetOrigin))
                : (this.relativeParent = this.relativeTarget = void 0);
            }
            if (this.relativeTarget || this.targetDelta) {
              var s, a, u;
              if (
                (this.target ||
                  ((this.target = Ol()), (this.targetWithTransforms = Ol())),
                this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target
                  ? (this.forceRelativeParentToResolveTarget(),
                    (s = this.target),
                    (a = this.relativeTarget),
                    (u = this.relativeParent.target),
                    Al(s.x, a.x, u.x),
                    Al(s.y, a.y, u.y))
                  : this.targetDelta
                  ? (Boolean(this.resumingFrom)
                      ? (this.target = this.applyTransform(
                          this.layout.layoutBox
                        ))
                      : yc(this.target, this.layout.layoutBox),
                    ql(this.target, this.targetDelta))
                  : yc(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)
              ) {
                this.attemptToResolveRelativeTarget = !1;
                const e = this.getClosestProjectingParent();
                e &&
                Boolean(e.resumingFrom) === Boolean(this.resumingFrom) &&
                !e.options.layoutScroll &&
                e.target &&
                1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = Ol()),
                    (this.relativeTargetOrigin = Ol()),
                    xl(this.relativeTargetOrigin, this.target, e.target),
                    yc(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              _c.resolvedTargetDeltas++;
            }
          }
        }
        getClosestProjectingParent() {
          if (
            this.parent &&
            !jl(this.parent.latestValues) &&
            !Il(this.parent.latestValues)
          )
            return this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
        }
        isProjecting() {
          return Boolean(
            (this.relativeTarget ||
              this.targetDelta ||
              this.options.layoutRoot) &&
              this.layout
          );
        }
        calcProjection() {
          var e;
          const t = this.getLead(),
            n = Boolean(this.resumingFrom) || this !== t;
          let r = !0;
          if (
            ((this.isProjectionDirty ||
              (null === (e = this.parent) || void 0 === e
                ? void 0
                : e.isProjectionDirty)) &&
              (r = !1),
            n &&
              (this.isSharedProjectionDirty || this.isTransformDirty) &&
              (r = !1),
            this.resolvedRelativeTargetAt === _i.timestamp && (r = !1),
            r)
          )
            return;
          const { layout: i, layoutId: o } = this.options;
          if (
            ((this.isTreeAnimating = Boolean(
              (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
            )),
            this.isTreeAnimating ||
              (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || (!i && !o))
          )
            return;
          yc(this.layoutCorrected, this.layout.layoutBox);
          const s = this.treeScale.x,
            a = this.treeScale.y;
          !(function (e, t, n, r = !1) {
            const i = n.length;
            if (!i) return;
            let o, s;
            t.x = t.y = 1;
            for (let a = 0; a < i; a++) {
              (o = n[a]), (s = o.projectionDelta);
              const i = o.instance;
              (i && i.style && "contents" === i.style.display) ||
                (r &&
                  o.options.layoutScroll &&
                  o.scroll &&
                  o !== o.root &&
                  Xl(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
                s && ((t.x *= s.x.scale), (t.y *= s.y.scale), ql(e, s)),
                r && Ll(o.latestValues) && Xl(e, o.latestValues));
            }
            (t.x = Ul(t.x)), (t.y = Ul(t.y));
          })(this.layoutCorrected, this.treeScale, this.path, n),
            !t.layout ||
              t.target ||
              (1 === this.treeScale.x && 1 === this.treeScale.y) ||
              (t.target = t.layout.layoutBox);
          const { target: u } = t;
          if (!u)
            return void (
              this.projectionTransform &&
              ((this.projectionDelta = Ml()),
              (this.projectionTransform = "none"),
              this.scheduleRender())
            );
          this.projectionDelta ||
            ((this.projectionDelta = Ml()),
            (this.projectionDeltaWithTransform = Ml()));
          const l = this.projectionTransform;
          El(this.projectionDelta, this.layoutCorrected, u, this.latestValues),
            (this.projectionTransform = Pc(
              this.projectionDelta,
              this.treeScale
            )),
            (this.projectionTransform === l &&
              this.treeScale.x === s &&
              this.treeScale.y === a) ||
              ((this.hasProjected = !0),
              this.scheduleRender(),
              this.notifyListeners("projectionUpdate", u)),
            _c.recalculatedProjection++;
        }
        hide() {
          this.isVisible = !1;
        }
        show() {
          this.isVisible = !0;
        }
        scheduleRender(e = !0) {
          if (
            (this.options.scheduleRender && this.options.scheduleRender(), e)
          ) {
            const e = this.getStack();
            e && e.scheduleRender();
          }
          this.resumingFrom &&
            !this.resumingFrom.instance &&
            (this.resumingFrom = void 0);
        }
        setAnimationOrigin(e, t = !1) {
          const n = this.snapshot,
            r = n ? n.latestValues : {},
            i = { ...this.latestValues },
            o = Ml();
          (this.relativeParent && this.relativeParent.options.layoutRoot) ||
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !t);
          const s = Ol(),
            a =
              (n ? n.source : void 0) !==
              (this.layout ? this.layout.source : void 0),
            u = this.getStack(),
            l = !u || u.members.length <= 1,
            c = Boolean(
              a && !l && !0 === this.options.crossfade && !this.path.some(Kc)
            );
          let d;
          (this.animationProgress = 0),
            (this.mixTargetDelta = (t) => {
              const n = t / 1e3;
              Gc(o.x, e.x, n),
                Gc(o.y, e.y, n),
                this.setTargetDelta(o),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.layout &&
                  this.relativeParent &&
                  this.relativeParent.layout &&
                  (xl(
                    s,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                  (function (e, t, n, r) {
                    Xc(e.x, t.x, n.x, r), Xc(e.y, t.y, n.y, r);
                  })(this.relativeTarget, this.relativeTargetOrigin, s, n),
                  d &&
                    xc(this.relativeTarget, d) &&
                    (this.isProjectionDirty = !1),
                  d || (d = Ol()),
                  yc(d, this.relativeTarget)),
                a &&
                  ((this.animationValues = i),
                  (function (e, t, n, r, i, o) {
                    i
                      ? ((e.opacity = Ra(
                          0,
                          void 0 !== n.opacity ? n.opacity : 1,
                          mc(r)
                        )),
                        (e.opacityExit = Ra(
                          void 0 !== t.opacity ? t.opacity : 1,
                          0,
                          fc(r)
                        )))
                      : o &&
                        (e.opacity = Ra(
                          void 0 !== t.opacity ? t.opacity : 1,
                          void 0 !== n.opacity ? n.opacity : 1,
                          r
                        ));
                    for (let i = 0; i < cc; i++) {
                      const o = `border${lc[i]}Radius`;
                      let s = pc(t, o),
                        a = pc(n, o);
                      (void 0 === s && void 0 === a) ||
                        (s || (s = 0),
                        a || (a = 0),
                        0 === s || 0 === a || hc(s) === hc(a)
                          ? ((e[o] = Math.max(Ra(dc(s), dc(a), r), 0)),
                            (Zo.test(a) || Zo.test(s)) && (e[o] += "%"))
                          : (e[o] = a));
                    }
                    (t.rotate || n.rotate) &&
                      (e.rotate = Ra(t.rotate || 0, n.rotate || 0, r));
                  })(i, r, this.latestValues, n, c, l)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                (this.animationProgress = n);
            }),
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
        }
        startAnimation(e) {
          this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom &&
              this.resumingFrom.currentAnimation &&
              this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation &&
              ($i(this.pendingAnimation), (this.pendingAnimation = void 0)),
            (this.pendingAnimation = zi.update(() => {
              (nc.hasAnimatedSinceResize = !0),
                (this.currentAnimation = (function (e, t, n) {
                  const r = Po(0) ? 0 : Yu(0);
                  return r.start(zu("", r, 1e3, n)), r.animation;
                })(0, 0, {
                  ...e,
                  onUpdate: (t) => {
                    this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                  },
                  onComplete: () => {
                    e.onComplete && e.onComplete(), this.completeAnimation();
                  },
                })),
                this.resumingFrom &&
                  (this.resumingFrom.currentAnimation = this.currentAnimation),
                (this.pendingAnimation = void 0);
            }));
        }
        completeAnimation() {
          this.resumingFrom &&
            ((this.resumingFrom.currentAnimation = void 0),
            (this.resumingFrom.preserveOpacity = void 0));
          const e = this.getStack();
          e && e.exitAnimationComplete(),
            (this.resumingFrom =
              this.currentAnimation =
              this.animationValues =
                void 0),
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
          this.currentAnimation &&
            (this.mixTargetDelta && this.mixTargetDelta(1e3),
            this.currentAnimation.stop()),
            this.completeAnimation();
        }
        applyTransformsToTarget() {
          const e = this.getLead();
          let {
            targetWithTransforms: t,
            target: n,
            layout: r,
            latestValues: i,
          } = e;
          if (t && n && r) {
            if (
              this !== e &&
              this.layout &&
              r &&
              ed(this.options.animationType, this.layout.layoutBox, r.layoutBox)
            ) {
              n = this.target || Ol();
              const t = Cl(this.layout.layoutBox.x);
              (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
              const r = Cl(this.layout.layoutBox.y);
              (n.y.min = e.target.y.min), (n.y.max = n.y.min + r);
            }
            yc(t, n),
              Xl(t, i),
              El(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
          }
        }
        registerSharedNode(e, t) {
          this.sharedNodes.has(e) || this.sharedNodes.set(e, new Fc()),
            this.sharedNodes.get(e).add(t);
          const n = t.options.initialPromotionConfig;
          t.promote({
            transition: n ? n.transition : void 0,
            preserveFollowOpacity:
              n && n.shouldPreserveFollowOpacity
                ? n.shouldPreserveFollowOpacity(t)
                : void 0,
          });
        }
        isLead() {
          const e = this.getStack();
          return !e || e.lead === this;
        }
        getLead() {
          var e;
          const { layoutId: t } = this.options;
          return (
            (t &&
              (null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.lead)) ||
            this
          );
        }
        getPrevLead() {
          var e;
          const { layoutId: t } = this.options;
          return t
            ? null === (e = this.getStack()) || void 0 === e
              ? void 0
              : e.prevLead
            : void 0;
        }
        getStack() {
          const { layoutId: e } = this.options;
          if (e) return this.root.sharedNodes.get(e);
        }
        promote({
          needsReset: e,
          transition: t,
          preserveFollowOpacity: n,
        } = {}) {
          const r = this.getStack();
          r && r.promote(this, n),
            e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
            t && this.setOptions({ transition: t });
        }
        relegate() {
          const e = this.getStack();
          return !!e && e.relegate(this);
        }
        resetRotation() {
          const { visualElement: e } = this.options;
          if (!e) return;
          let t = !1;
          const { latestValues: n } = e;
          if (
            ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0), !t)
          )
            return;
          const r = {};
          for (let t = 0; t < Mc.length; t++) {
            const i = "rotate" + Mc[t];
            n[i] && ((r[i] = n[i]), e.setStaticValue(i, 0));
          }
          e.render();
          for (const t in r) e.setStaticValue(t, r[t]);
          e.scheduleRender();
        }
        getProjectionStyles(e = {}) {
          var t, n;
          const r = {};
          if (!this.instance || this.isSVG) return r;
          if (!this.isVisible) return { visibility: "hidden" };
          r.visibility = "";
          const i = this.getTransformTemplate();
          if (this.needsReset)
            return (
              (this.needsReset = !1),
              (r.opacity = ""),
              (r.pointerEvents = xs(e.pointerEvents) || ""),
              (r.transform = i ? i(this.latestValues, "") : "none"),
              r
            );
          const o = this.getLead();
          if (!this.projectionDelta || !this.layout || !o.target) {
            const t = {};
            return (
              this.options.layoutId &&
                ((t.opacity =
                  void 0 !== this.latestValues.opacity
                    ? this.latestValues.opacity
                    : 1),
                (t.pointerEvents = xs(e.pointerEvents) || "")),
              this.hasProjected &&
                !Ll(this.latestValues) &&
                ((t.transform = i ? i({}, "") : "none"),
                (this.hasProjected = !1)),
              t
            );
          }
          const s = o.animationValues || o.latestValues;
          this.applyTransformsToTarget(),
            (r.transform = Pc(
              this.projectionDeltaWithTransform,
              this.treeScale,
              s
            )),
            i && (r.transform = i(s, r.transform));
          const { x: a, y: u } = this.projectionDelta;
          (r.transformOrigin = `${100 * a.origin}% ${100 * u.origin}% 0`),
            o.animationValues
              ? (r.opacity =
                  o === this
                    ? null !==
                        (n =
                          null !== (t = s.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : s.opacityExit)
              : (r.opacity =
                  o === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ""
                    : void 0 !== s.opacityExit
                    ? s.opacityExit
                    : 0);
          for (const e in Bo) {
            if (void 0 === s[e]) continue;
            const { correct: t, applyTo: n } = Bo[e],
              i = "none" === r.transform ? s[e] : t(s[e], o);
            if (n) {
              const e = n.length;
              for (let t = 0; t < e; t++) r[n[t]] = i;
            } else r[e] = i;
          }
          return (
            this.options.layoutId &&
              (r.pointerEvents =
                o === this ? xs(e.pointerEvents) || "" : "none"),
            r
          );
        }
        clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
          this.root.nodes.forEach((e) => {
            var t;
            return null === (t = e.currentAnimation) || void 0 === t
              ? void 0
              : t.stop();
          }),
            this.root.nodes.forEach(zc),
            this.root.sharedNodes.clear();
        }
      };
    }
    function Nc(e) {
      e.updateLayout();
    }
    function jc(e) {
      var t;
      const n =
        (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
        e.snapshot;
      if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const { layoutBox: t, measuredBox: r } = e.layout,
          { animationType: i } = e.options,
          o = n.source !== e.layout.source;
        "size" === i
          ? _l((e) => {
              const r = o ? n.measuredBox[e] : n.layoutBox[e],
                i = Cl(r);
              (r.min = t[e].min), (r.max = r.min + i);
            })
          : ed(i, n.layoutBox, t) &&
            _l((r) => {
              const i = o ? n.measuredBox[r] : n.layoutBox[r],
                s = Cl(t[r]);
              (i.max = i.min + s),
                e.relativeTarget &&
                  !e.currentAnimation &&
                  ((e.isProjectionDirty = !0),
                  (e.relativeTarget[r].max = e.relativeTarget[r].min + s));
            });
        const s = Ml();
        El(s, t, n.layoutBox);
        const a = Ml();
        o
          ? El(a, e.applyTransform(r, !0), n.measuredBox)
          : El(a, t, n.layoutBox);
        const u = !Bc(s);
        let l = !1;
        if (!e.resumeFrom) {
          const r = e.getClosestProjectingParent();
          if (r && !r.resumeFrom) {
            const { snapshot: i, layout: o } = r;
            if (i && o) {
              const s = Ol();
              xl(s, n.layoutBox, i.layoutBox);
              const a = Ol();
              xl(a, t, o.layoutBox),
                xc(s, a) || (l = !0),
                r.options.layoutRoot &&
                  ((e.relativeTarget = a),
                  (e.relativeTargetOrigin = s),
                  (e.relativeParent = r));
            }
          }
        }
        e.notifyListeners("didUpdate", {
          layout: t,
          snapshot: n,
          delta: a,
          layoutDelta: s,
          hasLayoutChanged: u,
          hasRelativeTargetChanged: l,
        });
      } else if (e.isLead()) {
        const { onExitComplete: t } = e.options;
        t && t();
      }
      e.options.transition = void 0;
    }
    function Lc(e) {
      _c.totalNodes++,
        e.parent &&
          (e.isProjecting() ||
            (e.isProjectionDirty = e.parent.isProjectionDirty),
          e.isSharedProjectionDirty ||
            (e.isSharedProjectionDirty = Boolean(
              e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
            )),
          e.isTransformDirty ||
            (e.isTransformDirty = e.parent.isTransformDirty));
    }
    function Ic(e) {
      e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
    }
    function Vc(e) {
      e.clearSnapshot();
    }
    function zc(e) {
      e.clearMeasurements();
    }
    function $c(e) {
      e.isLayoutDirty = !1;
    }
    function Wc(e) {
      const { visualElement: t } = e.options;
      t &&
        t.getProps().onBeforeLayoutMeasure &&
        t.notify("BeforeLayoutMeasure"),
        e.resetTransform();
    }
    function qc(e) {
      e.finishAnimation(),
        (e.targetDelta = e.relativeTarget = e.target = void 0),
        (e.isProjectionDirty = !0);
    }
    function Uc(e) {
      e.resolveTargetDelta();
    }
    function Hc(e) {
      e.calcProjection();
    }
    function Zc(e) {
      e.resetRotation();
    }
    function Yc(e) {
      e.removeLeadSnapshot();
    }
    function Gc(e, t, n) {
      (e.translate = Ra(t.translate, 0, n)),
        (e.scale = Ra(t.scale, 1, n)),
        (e.origin = t.origin),
        (e.originPoint = t.originPoint);
    }
    function Xc(e, t, n, r) {
      (e.min = Ra(t.min, n.min, r)), (e.max = Ra(t.max, n.max, r));
    }
    function Kc(e) {
      return e.animationValues && void 0 !== e.animationValues.opacityExit;
    }
    const Jc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
    function Qc(e) {
      (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
    }
    function ed(e, t, n) {
      return (
        "position" === e || ("preserve-aspect" === e && !Dl(kc(t), kc(n), 0.2))
      );
    }
    const td = Rc({
        attachResizeListener: (e, t) => Ss(e, "resize", t),
        measureScroll: () => ({
          x: document.documentElement.scrollLeft || document.body.scrollLeft,
          y: document.documentElement.scrollTop || document.body.scrollTop,
        }),
        checkIsScrollRoot: () => !0,
      }),
      nd = { current: void 0 },
      rd = Rc({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
          if (!nd.current) {
            const e = new td({});
            e.mount(window),
              e.setOptions({ layoutScroll: !0 }),
              (nd.current = e);
          }
          return nd.current;
        },
        resetTransform: (e, t) => {
          e.style.transform = void 0 !== t ? t : "none";
        },
        checkIsScrollRoot: (e) =>
          Boolean("fixed" === window.getComputedStyle(e).position),
      }),
      id = {
        pan: {
          Feature: class extends Ws {
            constructor() {
              super(...arguments), (this.removePointerDownListener = Qi);
            }
            onPointerDown(e) {
              this.session = new pl(e, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
              });
            }
            createPanHandlers() {
              const {
                onPanSessionStart: e,
                onPanStart: t,
                onPan: n,
                onPanEnd: r,
              } = this.node.getProps();
              return {
                onSessionStart: tc(e),
                onStart: tc(t),
                onMove: n,
                onEnd: (e, t) => {
                  delete this.session, r && zi.update(() => r(e, t));
                },
              };
            }
            mount() {
              this.removePointerDownListener = Rs(
                this.node.current,
                "pointerdown",
                (e) => this.onPointerDown(e)
              );
            }
            update() {
              this.session &&
                this.session.updateHandlers(this.createPanHandlers());
            }
            unmount() {
              this.removePointerDownListener(),
                this.session && this.session.end();
            }
          },
        },
        drag: {
          Feature: class extends Ws {
            constructor(e) {
              super(e),
                (this.removeGroupControls = Qi),
                (this.removeListeners = Qi),
                (this.controls = new Ql(e));
            }
            mount() {
              const { dragControls: e } = this.node.getProps();
              e && (this.removeGroupControls = e.subscribe(this.controls)),
                (this.removeListeners = this.controls.addListeners() || Qi);
            }
            unmount() {
              this.removeGroupControls(), this.removeListeners();
            }
          },
          ProjectionNode: rd,
          MeasureLayout: ac,
        },
      },
      od = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
    function sd(e, t, n = 1) {
      to(
        n <= 4,
        `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
      );
      const [r, i] = (function (e) {
        const t = od.exec(e);
        if (!t) return [,];
        const [, n, r] = t;
        return [n, r];
      })(e);
      if (!r) return;
      const o = window.getComputedStyle(t).getPropertyValue(r);
      return o ? o.trim() : _o(i) ? sd(i, t, n + 1) : i;
    }
    const ad = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        "x",
        "y",
        "translateX",
        "translateY",
      ]),
      ud = (e) => ad.has(e),
      ld = (e) => e === jo || e === Yo,
      cd = (e, t) => parseFloat(e.split(", ")[t]),
      dd =
        (e, t) =>
        (n, { transform: r }) => {
          if ("none" === r || !r) return 0;
          const i = r.match(/^matrix3d\((.+)\)$/);
          if (i) return cd(i[1], t);
          {
            const t = r.match(/^matrix\((.+)\)$/);
            return t ? cd(t[1], e) : 0;
          }
        },
      hd = new Set(["x", "y", "z"]),
      pd = xo.filter((e) => !hd.has(e)),
      md = {
        width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(n),
        height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(n),
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: dd(4, 13),
        y: dd(5, 14),
      };
    function fd(e, t, n, r) {
      return ((e) => Object.keys(e).some(ud))(t)
        ? ((e, t, n = {}, r = {}) => {
            (t = { ...t }), (r = { ...r });
            const i = Object.keys(t).filter(ud);
            let o = [],
              s = !1;
            const a = [];
            if (
              (i.forEach((i) => {
                const u = e.getValue(i);
                if (!e.hasValue(i)) return;
                let l = n[i],
                  c = Ku(l);
                const d = t[i];
                let h;
                if (Es(d)) {
                  const e = d.length,
                    t = null === d[0] ? 1 : 0;
                  (l = d[t]), (c = Ku(l));
                  for (let n = t; n < e && null !== d[n]; n++)
                    h
                      ? to(
                          Ku(d[n]) === h,
                          "All keyframes must be of the same type"
                        )
                      : ((h = Ku(d[n])),
                        to(
                          h === c || (ld(c) && ld(h)),
                          "Keyframes must be of the same dimension as the current value"
                        ));
                } else h = Ku(d);
                if (c !== h)
                  if (ld(c) && ld(h)) {
                    const e = u.get();
                    "string" == typeof e && u.set(parseFloat(e)),
                      "string" == typeof d
                        ? (t[i] = parseFloat(d))
                        : Array.isArray(d) &&
                          h === Yo &&
                          (t[i] = d.map(parseFloat));
                  } else
                    (null == c ? void 0 : c.transform) &&
                    (null == h ? void 0 : h.transform) &&
                    (0 === l || 0 === d)
                      ? 0 === l
                        ? u.set(h.transform(l))
                        : (t[i] = c.transform(d))
                      : (s ||
                          ((o = (function (e) {
                            const t = [];
                            return (
                              pd.forEach((n) => {
                                const r = e.getValue(n);
                                void 0 !== r &&
                                  (t.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              t.length && e.render(),
                              t
                            );
                          })(e)),
                          (s = !0)),
                        a.push(i),
                        (r[i] = void 0 !== r[i] ? r[i] : t[i]),
                        u.jump(d));
              }),
              a.length)
            ) {
              const n = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                i = ((e, t, n) => {
                  const r = t.measureViewportBox(),
                    i = t.current,
                    o = getComputedStyle(i),
                    { display: s } = o,
                    a = {};
                  "none" === s &&
                    t.setStaticValue("display", e.display || "block"),
                    n.forEach((e) => {
                      a[e] = md[e](r, o);
                    }),
                    t.render();
                  const u = t.measureViewportBox();
                  return (
                    n.forEach((n) => {
                      const r = t.getValue(n);
                      r && r.jump(a[n]), (e[n] = md[n](u, o));
                    }),
                    e
                  );
                })(t, e, a);
              return (
                o.length &&
                  o.forEach(([t, n]) => {
                    e.getValue(t).set(n);
                  }),
                e.render(),
                Wi && null !== n && window.scrollTo({ top: n }),
                { target: i, transitionEnd: r }
              );
            }
            return { target: t, transitionEnd: r };
          })(e, t, n, r)
        : { target: t, transitionEnd: r };
    }
    const gd = { current: null },
      vd = { current: !1 },
      yd = new WeakMap(),
      bd = Object.keys(vo),
      Cd = bd.length,
      Dd = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ],
      wd = ho.length;
    class Ed {
      constructor(
        {
          parent: e,
          props: t,
          presenceContext: n,
          reducedMotionConfig: r,
          visualState: i,
        },
        o = {}
      ) {
        (this.current = null),
          (this.children = new Set()),
          (this.isVariantNode = !1),
          (this.isControllingVariants = !1),
          (this.shouldReduceMotion = null),
          (this.values = new Map()),
          (this.features = {}),
          (this.valueSubscriptions = new Map()),
          (this.prevMotionValues = {}),
          (this.events = {}),
          (this.propEventSubscriptions = {}),
          (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
          (this.render = () => {
            this.current &&
              (this.triggerBuild(),
              this.renderInstance(
                this.current,
                this.renderState,
                this.props.style,
                this.projection
              ));
          }),
          (this.scheduleRender = () => zi.render(this.render, !1, !0));
        const { latestValues: s, renderState: a } = i;
        (this.latestValues = s),
          (this.baseTarget = { ...s }),
          (this.initialValues = t.initial ? { ...s } : {}),
          (this.renderState = a),
          (this.parent = e),
          (this.props = t),
          (this.presenceContext = n),
          (this.depth = e ? e.depth + 1 : 0),
          (this.reducedMotionConfig = r),
          (this.options = o),
          (this.isControllingVariants = po(t)),
          (this.isVariantNode = mo(t)),
          this.isVariantNode && (this.variantChildren = new Set()),
          (this.manuallyAnimateOnMount = Boolean(e && e.current));
        const { willChange: u, ...l } = this.scrapeMotionValuesFromProps(t, {});
        for (const e in l) {
          const t = l[e];
          void 0 !== s[e] && Po(t) && (t.set(s[e], !1), $u(u) && u.add(e));
        }
      }
      scrapeMotionValuesFromProps(e, t) {
        return {};
      }
      mount(e) {
        (this.current = e),
          yd.set(e, this),
          this.projection &&
            !this.projection.instance &&
            this.projection.mount(e),
          this.parent &&
            this.isVariantNode &&
            !this.isControllingVariants &&
            (this.removeFromVariantTree = this.parent.addVariantChild(this)),
          this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
          vd.current ||
            (function () {
              if (((vd.current = !0), Wi))
                if (window.matchMedia) {
                  const e = window.matchMedia("(prefers-reduced-motion)"),
                    t = () => (gd.current = e.matches);
                  e.addListener(t), t();
                } else gd.current = !1;
            })(),
          (this.shouldReduceMotion =
            "never" !== this.reducedMotionConfig &&
            ("always" === this.reducedMotionConfig || gd.current)),
          this.parent && this.parent.children.add(this),
          this.update(this.props, this.presenceContext);
      }
      unmount() {
        yd.delete(this.current),
          this.projection && this.projection.unmount(),
          $i(this.notifyUpdate),
          $i(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this);
        for (const e in this.events) this.events[e].clear();
        for (const e in this.features) this.features[e].unmount();
        this.current = null;
      }
      bindToMotionValue(e, t) {
        const n = ko.has(e),
          r = t.on("change", (t) => {
            (this.latestValues[e] = t),
              this.props.onUpdate && zi.update(this.notifyUpdate, !1, !0),
              n && this.projection && (this.projection.isTransformDirty = !0);
          }),
          i = t.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(e, () => {
          r(), i();
        });
      }
      sortNodePosition(e) {
        return this.current &&
          this.sortInstanceNodePosition &&
          this.type === e.type
          ? this.sortInstanceNodePosition(this.current, e.current)
          : 0;
      }
      loadFeatures({ children: e, ...t }, n, r, i) {
        let o, s;
        for (let e = 0; e < Cd; e++) {
          const n = bd[e],
            {
              isEnabled: r,
              Feature: i,
              ProjectionNode: a,
              MeasureLayout: u,
            } = vo[n];
          a && (o = a),
            r(t) &&
              (!this.features[n] && i && (this.features[n] = new i(this)),
              u && (s = u));
        }
        if (!this.projection && o) {
          this.projection = new o(
            this.latestValues,
            this.parent && this.parent.projection
          );
          const {
            layoutId: e,
            layout: n,
            drag: r,
            dragConstraints: s,
            layoutScroll: a,
            layoutRoot: u,
          } = t;
          this.projection.setOptions({
            layoutId: e,
            layout: n,
            alwaysMeasureLayout: Boolean(r) || (s && ao(s)),
            visualElement: this,
            scheduleRender: () => this.scheduleRender(),
            animationType: "string" == typeof n ? n : "both",
            initialPromotionConfig: i,
            layoutScroll: a,
            layoutRoot: u,
          });
        }
        return s;
      }
      updateFeatures() {
        for (const e in this.features) {
          const t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
      triggerBuild() {
        this.build(
          this.renderState,
          this.latestValues,
          this.options,
          this.props
        );
      }
      measureViewportBox() {
        return this.current
          ? this.measureInstanceViewportBox(this.current, this.props)
          : Ol();
      }
      getStaticValue(e) {
        return this.latestValues[e];
      }
      setStaticValue(e, t) {
        this.latestValues[e] = t;
      }
      makeTargetAnimatable(e, t = !0) {
        return this.makeTargetAnimatableFromInstance(e, this.props, t);
      }
      update(e, t) {
        (e.transformTemplate || this.props.transformTemplate) &&
          this.scheduleRender(),
          (this.prevProps = this.props),
          (this.props = e),
          (this.prevPresenceContext = this.presenceContext),
          (this.presenceContext = t);
        for (let t = 0; t < Dd.length; t++) {
          const n = Dd[t];
          this.propEventSubscriptions[n] &&
            (this.propEventSubscriptions[n](),
            delete this.propEventSubscriptions[n]);
          const r = e["on" + n];
          r && (this.propEventSubscriptions[n] = this.on(n, r));
        }
        (this.prevMotionValues = (function (e, t, n) {
          const { willChange: r } = t;
          for (const i in t) {
            const o = t[i],
              s = n[i];
            if (Po(o)) e.addValue(i, o), $u(r) && r.add(i);
            else if (Po(s))
              e.addValue(i, Yu(o, { owner: e })), $u(r) && r.remove(i);
            else if (s !== o)
              if (e.hasValue(i)) {
                const t = e.getValue(i);
                !t.hasAnimated && t.set(o);
              } else {
                const t = e.getStaticValue(i);
                e.addValue(i, Yu(void 0 !== t ? t : o, { owner: e }));
              }
          }
          for (const r in n) void 0 === t[r] && e.removeValue(r);
          return t;
        })(
          this,
          this.scrapeMotionValuesFromProps(e, this.prevProps),
          this.prevMotionValues
        )),
          this.handleChildMotionValue && this.handleChildMotionValue();
      }
      getProps() {
        return this.props;
      }
      getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0;
      }
      getDefaultTransition() {
        return this.props.transition;
      }
      getTransformPagePoint() {
        return this.props.transformPagePoint;
      }
      getClosestVariantNode() {
        return this.isVariantNode
          ? this
          : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
      }
      getVariantContext(e = !1) {
        if (e) return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
          const e = (this.parent && this.parent.getVariantContext()) || {};
          return (
            void 0 !== this.props.initial && (e.initial = this.props.initial), e
          );
        }
        const t = {};
        for (let e = 0; e < wd; e++) {
          const n = ho[e],
            r = this.props[n];
          (uo(r) || !1 === r) && (t[n] = r);
        }
        return t;
      }
      addVariantChild(e) {
        const t = this.getClosestVariantNode();
        if (t)
          return (
            t.variantChildren && t.variantChildren.add(e),
            () => t.variantChildren.delete(e)
          );
      }
      addValue(e, t) {
        t !== this.values.get(e) &&
          (this.removeValue(e), this.bindToMotionValue(e, t)),
          this.values.set(e, t),
          (this.latestValues[e] = t.get());
      }
      removeValue(e) {
        this.values.delete(e);
        const t = this.valueSubscriptions.get(e);
        t && (t(), this.valueSubscriptions.delete(e)),
          delete this.latestValues[e],
          this.removeValueFromRenderState(e, this.renderState);
      }
      hasValue(e) {
        return this.values.has(e);
      }
      getValue(e, t) {
        if (this.props.values && this.props.values[e])
          return this.props.values[e];
        let n = this.values.get(e);
        return (
          void 0 === n &&
            void 0 !== t &&
            ((n = Yu(t, { owner: this })), this.addValue(e, n)),
          n
        );
      }
      readValue(e) {
        return void 0 === this.latestValues[e] && this.current
          ? this.readValueFromInstance(this.current, e, this.options)
          : this.latestValues[e];
      }
      setBaseTarget(e, t) {
        this.baseTarget[e] = t;
      }
      getBaseTarget(e) {
        var t;
        const { initial: n } = this.props,
          r =
            "string" == typeof n || "object" == typeof n
              ? null === (t = ws(this.props, n)) || void 0 === t
                ? void 0
                : t[e]
              : void 0;
        if (n && void 0 !== r) return r;
        const i = this.getBaseTargetFromProps(this.props, e);
        return void 0 === i || Po(i)
          ? void 0 !== this.initialValues[e] && void 0 === r
            ? void 0
            : this.baseTarget[e]
          : i;
      }
      on(e, t) {
        return (
          this.events[e] || (this.events[e] = new Hu()), this.events[e].add(t)
        );
      }
      notify(e, ...t) {
        this.events[e] && this.events[e].notify(...t);
      }
    }
    class Ad extends Ed {
      sortInstanceNodePosition(e, t) {
        return 2 & e.compareDocumentPosition(t) ? 1 : -1;
      }
      getBaseTargetFromProps(e, t) {
        return e.style ? e.style[t] : void 0;
      }
      removeValueFromRenderState(e, { vars: t, style: n }) {
        delete t[e], delete n[e];
      }
      makeTargetAnimatableFromInstance(
        { transition: e, transitionEnd: t, ...n },
        { transformValues: r },
        i
      ) {
        let o = (function (e, t, n) {
          const r = {};
          for (const i in e) {
            const e = tl(i, t);
            if (void 0 !== e) r[i] = e;
            else {
              const e = n.getValue(i);
              e && (r[i] = e.get());
            }
          }
          return r;
        })(n, e || {}, this);
        if ((r && (t && (t = r(t)), n && (n = r(n)), o && (o = r(o))), i)) {
          !(function (e, t, n) {
            var r, i;
            const o = Object.keys(t).filter((t) => !e.hasValue(t)),
              s = o.length;
            if (s)
              for (let a = 0; a < s; a++) {
                const s = o[a],
                  u = t[s];
                let l = null;
                Array.isArray(u) && (l = u[0]),
                  null === l &&
                    (l =
                      null !==
                        (i =
                          null !== (r = n[s]) && void 0 !== r
                            ? r
                            : e.readValue(s)) && void 0 !== i
                        ? i
                        : t[s]),
                  null != l &&
                    ("string" == typeof l && (Wu(l) || Lu(l))
                      ? (l = parseFloat(l))
                      : !Qu(l) && Ga.test(u) && (l = ju(s, u)),
                    e.addValue(s, Yu(l, { owner: e })),
                    void 0 === n[s] && (n[s] = l),
                    null !== l && e.setBaseTarget(s, l));
              }
          })(this, n, o);
          const e = ((e, t, n, r) => {
            const i = (function (e, { ...t }, n) {
              const r = e.current;
              if (!(r instanceof Element))
                return { target: t, transitionEnd: n };
              n && (n = { ...n }),
                e.values.forEach((e) => {
                  const t = e.get();
                  if (!_o(t)) return;
                  const n = sd(t, r);
                  n && e.set(n);
                });
              for (const e in t) {
                const i = t[e];
                if (!_o(i)) continue;
                const o = sd(i, r);
                o && ((t[e] = o), n || (n = {}), void 0 === n[e] && (n[e] = i));
              }
              return { target: t, transitionEnd: n };
            })(e, t, r);
            return fd(e, (t = i.target), n, (r = i.transitionEnd));
          })(this, n, o, t);
          (t = e.transitionEnd), (n = e.target);
        }
        return { transition: e, transitionEnd: t, ...n };
      }
    }
    class Bd extends Ad {
      readValueFromInstance(e, t) {
        if (ko.has(t)) {
          const e = Nu(t);
          return (e && e.default) || 0;
        }
        {
          const r = ((n = e), window.getComputedStyle(n)),
            i = (Oo(t) ? r.getPropertyValue(t) : r[t]) || 0;
          return "string" == typeof i ? i.trim() : i;
        }
        var n;
      }
      measureInstanceViewportBox(e, { transformPagePoint: t }) {
        return Kl(e, t);
      }
      build(e, t, n, r) {
        es(e, t, n, r.transformTemplate);
      }
      scrapeMotionValuesFromProps(e, t) {
        return Cs(e, t);
      }
      handleChildMotionValue() {
        this.childSubscription &&
          (this.childSubscription(), delete this.childSubscription);
        const { children: e } = this.props;
        Po(e) &&
          (this.childSubscription = e.on("change", (e) => {
            this.current && (this.current.textContent = `${e}`);
          }));
      }
      renderInstance(e, t, n, r) {
        vs(e, t, n, r);
      }
    }
    class xd extends Ad {
      constructor() {
        super(...arguments), (this.isSVGTag = !1);
      }
      getBaseTargetFromProps(e, t) {
        return e[t];
      }
      readValueFromInstance(e, t) {
        if (ko.has(t)) {
          const e = Nu(t);
          return (e && e.default) || 0;
        }
        return (t = ys.has(t) ? t : gs(t)), e.getAttribute(t);
      }
      measureInstanceViewportBox() {
        return Ol();
      }
      scrapeMotionValuesFromProps(e, t) {
        return Ds(e, t);
      }
      build(e, t, n, r) {
        ds(e, t, n, this.isSVGTag, r.transformTemplate);
      }
      renderInstance(e, t, n, r) {
        bs(e, t, 0, r);
      }
      mount(e) {
        (this.isSVGTag = ps(e.tagName)), super.mount(e);
      }
    }
    const kd = (e, t) =>
        Ao(e)
          ? new xd(t, { enableHardwareAcceleration: !1 })
          : new Bd(t, { enableHardwareAcceleration: !0 }),
      Fd = {
        ...dl,
        ...Js,
        ...id,
        layout: { ProjectionNode: rd, MeasureLayout: ac },
      },
      Pd = wo((e, t) =>
        (function (e, { forwardMotionProps: t = !1 }, n, r) {
          return {
            ...(Ao(e) ? Ps : Ts),
            preloadedFeatures: n,
            useRender: fs(t),
            createVisualElement: r,
            Component: e,
          };
        })(e, t, Fd, kd)
      );
    var Td = function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      }
      return n;
    };
    const Sd = Ei,
      Md = Ai,
      Od = (t) => {
        var { className: n, children: r } = t,
          i = Td(t, ["className", "children"]);
        return e.createElement(
          Bi,
          Object.assign({ className: Pn(n) }, i),
          e.createElement(
            "div",
            {
              className:
                "fixed inset-0 z-50 flex items-start items-center justify-center",
            },
            r
          )
        );
      };
    Od.displayName = Bi.displayName;
    const _d = e.forwardRef((t, n) => {
      var { className: r } = t,
        i = Td(t, ["className"]);
      return e.createElement(
        xi,
        Object.assign(
          {
            ref: n,
            className: Pn(
              "data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in  fixed inset-0 z-50 bg-foreground/40 transition-all duration-100 dark:bg-background/80",
              r
            ),
          },
          i
        )
      );
    });
    _d.displayName = xi.displayName;
    const Rd = e.forwardRef((t, n) => {
      var { className: r, children: i } = t,
        o = Td(t, ["className", "children"]);
      return e.createElement(
        Od,
        null,
        e.createElement(_d, null),
        e.createElement(
          ki,
          Object.assign(
            {
              ref: n,
              className: Pn(
                "animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 fixed z-50 grid w-full gap-4 rounded-lg border bg-background p-6 shadow-lg dark:border-accent sm:max-w-lg ",
                r
              ),
            },
            o
          ),
          e.createElement(
            ro,
            null,
            e.createElement(
              Pd.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.3 },
              },
              i,
              e.createElement(
                Ti,
                {
                  className:
                    "z-100 absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                },
                e.createElement(Oi, {
                  className: "h-9 w-9 stroke-black dark:stroke-white",
                }),
                e.createElement("span", { className: "sr-only" }, "Close")
              )
            )
          )
        )
      );
    });
    Rd.displayName = ki.displayName;
    const Nd = e.forwardRef((t, n) => {
      var { className: r } = t,
        i = Td(t, ["className"]);
      return e.createElement(
        Fi,
        Object.assign(
          {
            ref: n,
            className: Pn(
              "text-lg font-semibold leading-none tracking-tight",
              r
            ),
          },
          i
        )
      );
    });
    (Nd.displayName = Fi.displayName),
      (e.forwardRef((t, n) => {
        var { className: r } = t,
          i = Td(t, ["className"]);
        return e.createElement(
          Pi,
          Object.assign(
            { ref: n, className: Pn("text-sm text-muted-foreground", r) },
            i
          )
        );
      }).displayName = Pi.displayName);
    var jd = i(893),
      Ld = i(443),
      Id = i.n(Ld),
      Vd = i(697),
      zd = i.n(Vd);
    const $d = (e, t) => {
        const n = new (Id())(".plyr-react", t.options || {});
        return t.source && (n.source = t.source), n;
      },
      Wd = (e) => {
        e && e.destroy();
      },
      qd = () => {},
      Ud = (e) =>
        e
          ? () => ({ plyr: e })
          : () =>
              new Proxy(
                { plyr: { source: null } },
                { get: (e, t) => ("plyr" === t ? e[t] : qd) }
              );
    const Hd = e.forwardRef((t, n) => {
      const { source: r, options: i = null, ...o } = t,
        s = (function (t, n, r = null) {
          return (function (t, n, r = []) {
            const [i, o] = (0, e.useState)(null),
              s = (0, e.useRef)(null),
              { instantiate: a, destroy: u, getAPI: l, params: c } = n;
            (0, e.useEffect)(() => {
              const e = a(s.current, c);
              return (
                o(e),
                () => {
                  u && u(e, c);
                }
              );
            }, r);
            const d = (0, e.useMemo)(() => l(i, c), [i]);
            return (0, e.useImperativeHandle)(t, d, [d]), s;
          })(
            t,
            { instantiate: $d, getAPI: Ud, destroy: Wd, params: n },
            r || [n.options, n.source]
          );
        })(n, { source: r, options: i });
      return (0, jd.jsx)("video", {
        ref: s,
        className: "plyr-react plyr",
        ...o,
      });
    });
    (Hd.displayName = "Plyr"),
      (Hd.defaultProps = {
        options: {
          controls: [
            "rewind",
            "play",
            "fast-forward",
            "progress",
            "current-time",
            "duration",
            "mute",
            "volume",
            "settings",
            "fullscreen",
          ],
          i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime}s",
            play: "Play",
            pause: "Pause",
            fastForward: "Forward {seektime}s",
            seek: "Seek",
            seekLabel: "{currentTime} of {duration}",
            played: "Played",
            buffered: "Buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            mute: "Mute",
            unmute: "Unmute",
            enableCaptions: "Enable captions",
            disableCaptions: "Disable captions",
            download: "Download",
            enterFullscreen: "Enter fullscreen",
            exitFullscreen: "Exit fullscreen",
            frameTitle: "Player for {title}",
            captions: "Captions",
            settings: "Settings",
            menuBack: "Go back to previous menu",
            speed: "Speed",
            normal: "Normal",
            quality: "Quality",
            loop: "Loop",
          },
        },
        source: {
          type: "video",
          sources: [
            {
              src: "https://cdn.plyr.io/static/blank.mp4",
              type: "video/mp4",
              size: 720,
            },
            {
              src: "https://cdn.plyr.io/static/blank.mp4",
              type: "video/mp4",
              size: 1080,
            },
          ],
        },
      }),
      (Hd.propTypes = { options: zd().object, source: zd().any });
    var Zd = i(864),
      Yd = i(774),
      Gd = i.n(Yd);
    const Xd = function (e) {
        function t(e, r, u, l, h) {
          for (
            var p,
              m,
              f,
              g,
              C,
              w = 0,
              E = 0,
              A = 0,
              B = 0,
              x = 0,
              M = 0,
              _ = (f = p = 0),
              N = 0,
              j = 0,
              L = 0,
              I = 0,
              V = u.length,
              z = V - 1,
              $ = "",
              W = "",
              q = "",
              U = "";
            N < V;

          ) {
            if (
              ((m = u.charCodeAt(N)),
              N === z &&
                0 !== E + B + A + w &&
                (0 !== E && (m = 47 === E ? 10 : 47),
                (B = A = w = 0),
                V++,
                z++),
              0 === E + B + A + w)
            ) {
              if (
                N === z &&
                (0 < j && ($ = $.replace(d, "")), 0 < $.trim().length)
              ) {
                switch (m) {
                  case 32:
                  case 9:
                  case 59:
                  case 13:
                  case 10:
                    break;
                  default:
                    $ += u.charAt(N);
                }
                m = 59;
              }
              switch (m) {
                case 123:
                  for (
                    p = ($ = $.trim()).charCodeAt(0), f = 1, I = ++N;
                    N < V;

                  ) {
                    switch ((m = u.charCodeAt(N))) {
                      case 123:
                        f++;
                        break;
                      case 125:
                        f--;
                        break;
                      case 47:
                        switch ((m = u.charCodeAt(N + 1))) {
                          case 42:
                          case 47:
                            e: {
                              for (_ = N + 1; _ < z; ++_)
                                switch (u.charCodeAt(_)) {
                                  case 47:
                                    if (
                                      42 === m &&
                                      42 === u.charCodeAt(_ - 1) &&
                                      N + 2 !== _
                                    ) {
                                      N = _ + 1;
                                      break e;
                                    }
                                    break;
                                  case 10:
                                    if (47 === m) {
                                      N = _ + 1;
                                      break e;
                                    }
                                }
                              N = _;
                            }
                        }
                        break;
                      case 91:
                        m++;
                      case 40:
                        m++;
                      case 34:
                      case 39:
                        for (; N++ < z && u.charCodeAt(N) !== m; );
                    }
                    if (0 === f) break;
                    N++;
                  }
                  if (
                    ((f = u.substring(I, N)),
                    0 === p &&
                      (p = ($ = $.replace(c, "").trim()).charCodeAt(0)),
                    64 === p)
                  ) {
                    switch (
                      (0 < j && ($ = $.replace(d, "")), (m = $.charCodeAt(1)))
                    ) {
                      case 100:
                      case 109:
                      case 115:
                      case 45:
                        j = r;
                        break;
                      default:
                        j = S;
                    }
                    if (
                      ((I = (f = t(r, j, f, m, h + 1)).length),
                      0 < O &&
                        ((C = a(3, f, (j = n(S, $, L)), r, F, k, I, m, h, l)),
                        ($ = j.join("")),
                        void 0 !== C &&
                          0 === (I = (f = C.trim()).length) &&
                          ((m = 0), (f = ""))),
                      0 < I)
                    )
                      switch (m) {
                        case 115:
                          $ = $.replace(D, s);
                        case 100:
                        case 109:
                        case 45:
                          f = $ + "{" + f + "}";
                          break;
                        case 107:
                          (f = ($ = $.replace(v, "$1 $2")) + "{" + f + "}"),
                            (f =
                              1 === T || (2 === T && o("@" + f, 3))
                                ? "@-webkit-" + f + "@" + f
                                : "@" + f);
                          break;
                        default:
                          (f = $ + f), 112 === l && ((W += f), (f = ""));
                      }
                    else f = "";
                  } else f = t(r, n(r, $, L), f, l, h + 1);
                  (q += f),
                    (f = L = j = _ = p = 0),
                    ($ = ""),
                    (m = u.charCodeAt(++N));
                  break;
                case 125:
                case 59:
                  if (
                    1 < (I = ($ = (0 < j ? $.replace(d, "") : $).trim()).length)
                  )
                    switch (
                      (0 === _ &&
                        ((p = $.charCodeAt(0)),
                        45 === p || (96 < p && 123 > p)) &&
                        (I = ($ = $.replace(" ", ":")).length),
                      0 < O &&
                        void 0 !==
                          (C = a(1, $, r, e, F, k, W.length, l, h, l)) &&
                        0 === (I = ($ = C.trim()).length) &&
                        ($ = "\0\0"),
                      (p = $.charCodeAt(0)),
                      (m = $.charCodeAt(1)),
                      p)
                    ) {
                      case 0:
                        break;
                      case 64:
                        if (105 === m || 99 === m) {
                          U += $ + u.charAt(N);
                          break;
                        }
                      default:
                        58 !== $.charCodeAt(I - 1) &&
                          (W += i($, p, m, $.charCodeAt(2)));
                    }
                  (L = j = _ = p = 0), ($ = ""), (m = u.charCodeAt(++N));
              }
            }
            switch (m) {
              case 13:
              case 10:
                47 === E
                  ? (E = 0)
                  : 0 === 1 + p &&
                    107 !== l &&
                    0 < $.length &&
                    ((j = 1), ($ += "\0")),
                  0 < O * R && a(0, $, r, e, F, k, W.length, l, h, l),
                  (k = 1),
                  F++;
                break;
              case 59:
              case 125:
                if (0 === E + B + A + w) {
                  k++;
                  break;
                }
              default:
                switch ((k++, (g = u.charAt(N)), m)) {
                  case 9:
                  case 32:
                    if (0 === B + w + E)
                      switch (x) {
                        case 44:
                        case 58:
                        case 9:
                        case 32:
                          g = "";
                          break;
                        default:
                          32 !== m && (g = " ");
                      }
                    break;
                  case 0:
                    g = "\\0";
                    break;
                  case 12:
                    g = "\\f";
                    break;
                  case 11:
                    g = "\\v";
                    break;
                  case 38:
                    0 === B + E + w && ((j = L = 1), (g = "\f" + g));
                    break;
                  case 108:
                    if (0 === B + E + w + P && 0 < _)
                      switch (N - _) {
                        case 2:
                          112 === x && 58 === u.charCodeAt(N - 3) && (P = x);
                        case 8:
                          111 === M && (P = M);
                      }
                    break;
                  case 58:
                    0 === B + E + w && (_ = N);
                    break;
                  case 44:
                    0 === E + A + B + w && ((j = 1), (g += "\r"));
                    break;
                  case 34:
                  case 39:
                    0 === E && (B = B === m ? 0 : 0 === B ? m : B);
                    break;
                  case 91:
                    0 === B + E + A && w++;
                    break;
                  case 93:
                    0 === B + E + A && w--;
                    break;
                  case 41:
                    0 === B + E + w && A--;
                    break;
                  case 40:
                    0 === B + E + w &&
                      (0 === p && (2 * x + 3 * M == 533 || (p = 1)), A++);
                    break;
                  case 64:
                    0 === E + A + B + w + _ + f && (f = 1);
                    break;
                  case 42:
                  case 47:
                    if (!(0 < B + w + A))
                      switch (E) {
                        case 0:
                          switch (2 * m + 3 * u.charCodeAt(N + 1)) {
                            case 235:
                              E = 47;
                              break;
                            case 220:
                              (I = N), (E = 42);
                          }
                          break;
                        case 42:
                          47 === m &&
                            42 === x &&
                            I + 2 !== N &&
                            (33 === u.charCodeAt(I + 2) &&
                              (W += u.substring(I, N + 1)),
                            (g = ""),
                            (E = 0));
                      }
                }
                0 === E && ($ += g);
            }
            (M = x), (x = m), N++;
          }
          if (0 < (I = W.length)) {
            if (
              ((j = r),
              0 < O &&
                void 0 !== (C = a(2, W, j, e, F, k, I, l, h, l)) &&
                0 === (W = C).length)
            )
              return U + W + q;
            if (((W = j.join(",") + "{" + W + "}"), 0 != T * P)) {
              switch ((2 !== T || o(W, 2) || (P = 0), P)) {
                case 111:
                  W = W.replace(b, ":-moz-$1") + W;
                  break;
                case 112:
                  W =
                    W.replace(y, "::-webkit-input-$1") +
                    W.replace(y, "::-moz-$1") +
                    W.replace(y, ":-ms-input-$1") +
                    W;
              }
              P = 0;
            }
          }
          return U + W + q;
        }
        function n(e, t, n) {
          var i = t.trim().split(f);
          t = i;
          var o = i.length,
            s = e.length;
          switch (s) {
            case 0:
            case 1:
              var a = 0;
              for (e = 0 === s ? "" : e[0] + " "; a < o; ++a)
                t[a] = r(e, t[a], n).trim();
              break;
            default:
              var u = (a = 0);
              for (t = []; a < o; ++a)
                for (var l = 0; l < s; ++l)
                  t[u++] = r(e[l] + " ", i[a], n).trim();
          }
          return t;
        }
        function r(e, t, n) {
          var r = t.charCodeAt(0);
          switch ((33 > r && (r = (t = t.trim()).charCodeAt(0)), r)) {
            case 38:
              return t.replace(g, "$1" + e.trim());
            case 58:
              return e.trim() + t.replace(g, "$1" + e.trim());
            default:
              if (0 < 1 * n && 0 < t.indexOf("\f"))
                return t.replace(
                  g,
                  (58 === e.charCodeAt(0) ? "" : "$1") + e.trim()
                );
          }
          return e + t;
        }
        function i(e, t, n, r) {
          var s = e + ";",
            a = 2 * t + 3 * n + 4 * r;
          if (944 === a) {
            e = s.indexOf(":", 9) + 1;
            var u = s.substring(e, s.length - 1).trim();
            return (
              (u = s.substring(0, e).trim() + u + ";"),
              1 === T || (2 === T && o(u, 1)) ? "-webkit-" + u + u : u
            );
          }
          if (0 === T || (2 === T && !o(s, 1))) return s;
          switch (a) {
            case 1015:
              return 97 === s.charCodeAt(10) ? "-webkit-" + s + s : s;
            case 951:
              return 116 === s.charCodeAt(3) ? "-webkit-" + s + s : s;
            case 963:
              return 110 === s.charCodeAt(5) ? "-webkit-" + s + s : s;
            case 1009:
              if (100 !== s.charCodeAt(4)) break;
            case 969:
            case 942:
              return "-webkit-" + s + s;
            case 978:
              return "-webkit-" + s + "-moz-" + s + s;
            case 1019:
            case 983:
              return "-webkit-" + s + "-moz-" + s + "-ms-" + s + s;
            case 883:
              if (45 === s.charCodeAt(8)) return "-webkit-" + s + s;
              if (0 < s.indexOf("image-set(", 11))
                return s.replace(x, "$1-webkit-$2") + s;
              break;
            case 932:
              if (45 === s.charCodeAt(4))
                switch (s.charCodeAt(5)) {
                  case 103:
                    return (
                      "-webkit-box-" +
                      s.replace("-grow", "") +
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("grow", "positive") +
                      s
                    );
                  case 115:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("shrink", "negative") +
                      s
                    );
                  case 98:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-" +
                      s.replace("basis", "preferred-size") +
                      s
                    );
                }
              return "-webkit-" + s + "-ms-" + s + s;
            case 964:
              return "-webkit-" + s + "-ms-flex-" + s + s;
            case 1023:
              if (99 !== s.charCodeAt(8)) break;
              return (
                "-webkit-box-pack" +
                (u = s
                  .substring(s.indexOf(":", 15))
                  .replace("flex-", "")
                  .replace("space-between", "justify")) +
                "-webkit-" +
                s +
                "-ms-flex-pack" +
                u +
                s
              );
            case 1005:
              return p.test(s)
                ? s.replace(h, ":-webkit-") + s.replace(h, ":-moz-") + s
                : s;
            case 1e3:
              switch (
                ((t = (u = s.substring(13).trim()).indexOf("-") + 1),
                u.charCodeAt(0) + u.charCodeAt(t))
              ) {
                case 226:
                  u = s.replace(C, "tb");
                  break;
                case 232:
                  u = s.replace(C, "tb-rl");
                  break;
                case 220:
                  u = s.replace(C, "lr");
                  break;
                default:
                  return s;
              }
              return "-webkit-" + s + "-ms-" + u + s;
            case 1017:
              if (-1 === s.indexOf("sticky", 9)) break;
            case 975:
              switch (
                ((t = (s = e).length - 10),
                (a =
                  (u = (33 === s.charCodeAt(t) ? s.substring(0, t) : s)
                    .substring(e.indexOf(":", 7) + 1)
                    .trim()).charCodeAt(0) +
                  (0 | u.charCodeAt(7))))
              ) {
                case 203:
                  if (111 > u.charCodeAt(8)) break;
                case 115:
                  s = s.replace(u, "-webkit-" + u) + ";" + s;
                  break;
                case 207:
                case 102:
                  s =
                    s.replace(
                      u,
                      "-webkit-" + (102 < a ? "inline-" : "") + "box"
                    ) +
                    ";" +
                    s.replace(u, "-webkit-" + u) +
                    ";" +
                    s.replace(u, "-ms-" + u + "box") +
                    ";" +
                    s;
              }
              return s + ";";
            case 938:
              if (45 === s.charCodeAt(5))
                switch (s.charCodeAt(6)) {
                  case 105:
                    return (
                      (u = s.replace("-items", "")),
                      "-webkit-" + s + "-webkit-box-" + u + "-ms-flex-" + u + s
                    );
                  case 115:
                    return (
                      "-webkit-" + s + "-ms-flex-item-" + s.replace(E, "") + s
                    );
                  default:
                    return (
                      "-webkit-" +
                      s +
                      "-ms-flex-line-pack" +
                      s.replace("align-content", "").replace(E, "") +
                      s
                    );
                }
              break;
            case 973:
            case 989:
              if (45 !== s.charCodeAt(3) || 122 === s.charCodeAt(4)) break;
            case 931:
            case 953:
              if (!0 === B.test(e))
                return 115 ===
                  (u = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                  ? i(e.replace("stretch", "fill-available"), t, n, r).replace(
                      ":fill-available",
                      ":stretch"
                    )
                  : s.replace(u, "-webkit-" + u) +
                      s.replace(u, "-moz-" + u.replace("fill-", "")) +
                      s;
              break;
            case 962:
              if (
                ((s =
                  "-webkit-" +
                  s +
                  (102 === s.charCodeAt(5) ? "-ms-" + s : "") +
                  s),
                211 === n + r &&
                  105 === s.charCodeAt(13) &&
                  0 < s.indexOf("transform", 10))
              )
                return (
                  s
                    .substring(0, s.indexOf(";", 27) + 1)
                    .replace(m, "$1-webkit-$2") + s
                );
          }
          return s;
        }
        function o(e, t) {
          var n = e.indexOf(1 === t ? ":" : "{"),
            r = e.substring(0, 3 !== t ? n : 10);
          return (
            (n = e.substring(n + 1, e.length - 1)),
            _(2 !== t ? r : r.replace(A, "$1"), n, t)
          );
        }
        function s(e, t) {
          var n = i(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
          return n !== t + ";"
            ? n.replace(w, " or ($1)").substring(4)
            : "(" + t + ")";
        }
        function a(e, t, n, r, i, o, s, a, u, c) {
          for (var d, h = 0, p = t; h < O; ++h)
            switch ((d = M[h].call(l, e, p, n, r, i, o, s, a, u, c))) {
              case void 0:
              case !1:
              case !0:
              case null:
                break;
              default:
                p = d;
            }
          if (p !== t) return p;
        }
        function u(e) {
          return (
            void 0 !== (e = e.prefix) &&
              ((_ = null),
              e
                ? "function" != typeof e
                  ? (T = 1)
                  : ((T = 2), (_ = e))
                : (T = 0)),
            u
          );
        }
        function l(e, n) {
          var r = e;
          if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < O)) {
            var i = a(-1, n, r, r, F, k, 0, 0, 0, 0);
            void 0 !== i && "string" == typeof i && (n = i);
          }
          var o = t(S, r, n, 0, 0);
          return (
            0 < O &&
              void 0 !== (i = a(-2, o, r, r, F, k, o.length, 0, 0, 0)) &&
              (o = i),
            (P = 0),
            (k = F = 1),
            o
          );
        }
        var c = /^\0+/g,
          d = /[\0\r\f]/g,
          h = /: */g,
          p = /zoo|gra/,
          m = /([,: ])(transform)/g,
          f = /,\r+?/g,
          g = /([\t\r\n ])*\f?&/g,
          v = /@(k\w+)\s*(\S*)\s*/,
          y = /::(place)/g,
          b = /:(read-only)/g,
          C = /[svh]\w+-[tblr]{2}/,
          D = /\(\s*(.*)\s*\)/g,
          w = /([\s\S]*?);/g,
          E = /-self|flex-/g,
          A = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          B = /stretch|:\s*\w+\-(?:conte|avail)/,
          x = /([^-])(image-set\()/,
          k = 1,
          F = 1,
          P = 0,
          T = 1,
          S = [],
          M = [],
          O = 0,
          _ = null,
          R = 0;
        return (
          (l.use = function e(t) {
            switch (t) {
              case void 0:
              case null:
                O = M.length = 0;
                break;
              default:
                if ("function" == typeof t) M[O++] = t;
                else if ("object" == typeof t)
                  for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                else R = 0 | !!t;
            }
            return e;
          }),
          (l.set = u),
          void 0 !== e && u(e),
          l
        );
      },
      Kd = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
    function Jd(e) {
      var t = Object.create(null);
      return function (n) {
        return void 0 === t[n] && (t[n] = e(n)), t[n];
      };
    }
    var Qd =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
      eh = Jd(function (e) {
        return (
          Qd.test(e) ||
          (111 === e.charCodeAt(0) &&
            110 === e.charCodeAt(1) &&
            e.charCodeAt(2) < 91)
        );
      }),
      th = i(679),
      nh = i.n(th);
    function rh() {
      return (rh =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var ih = function (e, t) {
        for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
          n.push(t[r], e[r + 1]);
        return n;
      },
      oh = function (e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "[object Object]" ===
            (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
          !(0, Zd.typeOf)(e)
        );
      },
      sh = Object.freeze([]),
      ah = Object.freeze({});
    function uh(e) {
      return "function" == typeof e;
    }
    function lh(e) {
      return e.displayName || e.name || "Component";
    }
    function ch(e) {
      return e && "string" == typeof e.styledComponentId;
    }
    var dh =
        ("undefined" != typeof process &&
          void 0 !== process.env &&
          (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
        "data-styled",
      hh = "undefined" != typeof window && "HTMLElement" in window,
      ph = Boolean(
        "boolean" == typeof SC_DISABLE_SPEEDY
          ? SC_DISABLE_SPEEDY
          : "undefined" != typeof process &&
              void 0 !== process.env &&
              (void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
              "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY
                ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
                  process.env.REACT_APP_SC_DISABLE_SPEEDY
                : void 0 !== process.env.SC_DISABLE_SPEEDY &&
                  "" !== process.env.SC_DISABLE_SPEEDY &&
                  "false" !== process.env.SC_DISABLE_SPEEDY &&
                  process.env.SC_DISABLE_SPEEDY)
      );
    function mh(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      throw new Error(
        "An error occurred. See https://git.io/JUIaE#" +
          e +
          " for more information." +
          (n.length > 0 ? " Args: " + n.join(", ") : "")
      );
    }
    var fh = (function () {
        function e(e) {
          (this.groupSizes = new Uint32Array(512)),
            (this.length = 512),
            (this.tag = e);
        }
        var t = e.prototype;
        return (
          (t.indexOfGroup = function (e) {
            for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
            return t;
          }),
          (t.insertRules = function (e, t) {
            if (e >= this.groupSizes.length) {
              for (var n = this.groupSizes, r = n.length, i = r; e >= i; )
                (i <<= 1) < 0 && mh(16, "" + e);
              (this.groupSizes = new Uint32Array(i)),
                this.groupSizes.set(n),
                (this.length = i);
              for (var o = r; o < i; o++) this.groupSizes[o] = 0;
            }
            for (
              var s = this.indexOfGroup(e + 1), a = 0, u = t.length;
              a < u;
              a++
            )
              this.tag.insertRule(s, t[a]) && (this.groupSizes[e]++, s++);
          }),
          (t.clearGroup = function (e) {
            if (e < this.length) {
              var t = this.groupSizes[e],
                n = this.indexOfGroup(e),
                r = n + t;
              this.groupSizes[e] = 0;
              for (var i = n; i < r; i++) this.tag.deleteRule(n);
            }
          }),
          (t.getGroup = function (e) {
            var t = "";
            if (e >= this.length || 0 === this.groupSizes[e]) return t;
            for (
              var n = this.groupSizes[e],
                r = this.indexOfGroup(e),
                i = r + n,
                o = r;
              o < i;
              o++
            )
              t += this.tag.getRule(o) + "/*!sc*/\n";
            return t;
          }),
          e
        );
      })(),
      gh = new Map(),
      vh = new Map(),
      yh = 1,
      bh = function (e) {
        if (gh.has(e)) return gh.get(e);
        for (; vh.has(yh); ) yh++;
        var t = yh++;
        return gh.set(e, t), vh.set(t, e), t;
      },
      Ch = function (e) {
        return vh.get(e);
      },
      Dh = function (e, t) {
        t >= yh && (yh = t + 1), gh.set(e, t), vh.set(t, e);
      },
      wh = "style[" + dh + '][data-styled-version="5.3.11"]',
      Eh = new RegExp(
        "^" + dh + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
      ),
      Ah = function (e, t, n) {
        for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)
          (r = i[o]) && e.registerName(t, r);
      },
      Bh = function (e, t) {
        for (
          var n = (t.textContent || "").split("/*!sc*/\n"),
            r = [],
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var s = n[i].trim();
          if (s) {
            var a = s.match(Eh);
            if (a) {
              var u = 0 | parseInt(a[1], 10),
                l = a[2];
              0 !== u &&
                (Dh(l, u), Ah(e, l, a[3]), e.getTag().insertRules(u, r)),
                (r.length = 0);
            } else r.push(s);
          }
        }
      },
      xh = function () {
        return i.nc;
      },
      kh = function (e) {
        var t = document.head,
          n = e || t,
          r = document.createElement("style"),
          i = (function (e) {
            for (var t = e.childNodes, n = t.length; n >= 0; n--) {
              var r = t[n];
              if (r && 1 === r.nodeType && r.hasAttribute(dh)) return r;
            }
          })(n),
          o = void 0 !== i ? i.nextSibling : null;
        r.setAttribute(dh, "active"),
          r.setAttribute("data-styled-version", "5.3.11");
        var s = xh();
        return s && r.setAttribute("nonce", s), n.insertBefore(r, o), r;
      },
      Fh = (function () {
        function e(e) {
          var t = (this.element = kh(e));
          t.appendChild(document.createTextNode("")),
            (this.sheet = (function (e) {
              if (e.sheet) return e.sheet;
              for (
                var t = document.styleSheets, n = 0, r = t.length;
                n < r;
                n++
              ) {
                var i = t[n];
                if (i.ownerNode === e) return i;
              }
              mh(17);
            })(t)),
            (this.length = 0);
        }
        var t = e.prototype;
        return (
          (t.insertRule = function (e, t) {
            try {
              return this.sheet.insertRule(t, e), this.length++, !0;
            } catch (e) {
              return !1;
            }
          }),
          (t.deleteRule = function (e) {
            this.sheet.deleteRule(e), this.length--;
          }),
          (t.getRule = function (e) {
            var t = this.sheet.cssRules[e];
            return void 0 !== t && "string" == typeof t.cssText
              ? t.cssText
              : "";
          }),
          e
        );
      })(),
      Ph = (function () {
        function e(e) {
          var t = (this.element = kh(e));
          (this.nodes = t.childNodes), (this.length = 0);
        }
        var t = e.prototype;
        return (
          (t.insertRule = function (e, t) {
            if (e <= this.length && e >= 0) {
              var n = document.createTextNode(t),
                r = this.nodes[e];
              return this.element.insertBefore(n, r || null), this.length++, !0;
            }
            return !1;
          }),
          (t.deleteRule = function (e) {
            this.element.removeChild(this.nodes[e]), this.length--;
          }),
          (t.getRule = function (e) {
            return e < this.length ? this.nodes[e].textContent : "";
          }),
          e
        );
      })(),
      Th = (function () {
        function e(e) {
          (this.rules = []), (this.length = 0);
        }
        var t = e.prototype;
        return (
          (t.insertRule = function (e, t) {
            return (
              e <= this.length &&
              (this.rules.splice(e, 0, t), this.length++, !0)
            );
          }),
          (t.deleteRule = function (e) {
            this.rules.splice(e, 1), this.length--;
          }),
          (t.getRule = function (e) {
            return e < this.length ? this.rules[e] : "";
          }),
          e
        );
      })(),
      Sh = hh,
      Mh = { isServer: !hh, useCSSOMInjection: !ph },
      Oh = (function () {
        function e(e, t, n) {
          void 0 === e && (e = ah),
            void 0 === t && (t = {}),
            (this.options = rh({}, Mh, {}, e)),
            (this.gs = t),
            (this.names = new Map(n)),
            (this.server = !!e.isServer),
            !this.server &&
              hh &&
              Sh &&
              ((Sh = !1),
              (function (e) {
                for (
                  var t = document.querySelectorAll(wh), n = 0, r = t.length;
                  n < r;
                  n++
                ) {
                  var i = t[n];
                  i &&
                    "active" !== i.getAttribute(dh) &&
                    (Bh(e, i), i.parentNode && i.parentNode.removeChild(i));
                }
              })(this));
        }
        e.registerId = function (e) {
          return bh(e);
        };
        var t = e.prototype;
        return (
          (t.reconstructWithOptions = function (t, n) {
            return (
              void 0 === n && (n = !0),
              new e(
                rh({}, this.options, {}, t),
                this.gs,
                (n && this.names) || void 0
              )
            );
          }),
          (t.allocateGSInstance = function (e) {
            return (this.gs[e] = (this.gs[e] || 0) + 1);
          }),
          (t.getTag = function () {
            return (
              this.tag ||
              (this.tag =
                ((n = (t = this.options).isServer),
                (r = t.useCSSOMInjection),
                (i = t.target),
                (e = n ? new Th(i) : r ? new Fh(i) : new Ph(i)),
                new fh(e)))
            );
            var e, t, n, r, i;
          }),
          (t.hasNameForId = function (e, t) {
            return this.names.has(e) && this.names.get(e).has(t);
          }),
          (t.registerName = function (e, t) {
            if ((bh(e), this.names.has(e))) this.names.get(e).add(t);
            else {
              var n = new Set();
              n.add(t), this.names.set(e, n);
            }
          }),
          (t.insertRules = function (e, t, n) {
            this.registerName(e, t), this.getTag().insertRules(bh(e), n);
          }),
          (t.clearNames = function (e) {
            this.names.has(e) && this.names.get(e).clear();
          }),
          (t.clearRules = function (e) {
            this.getTag().clearGroup(bh(e)), this.clearNames(e);
          }),
          (t.clearTag = function () {
            this.tag = void 0;
          }),
          (t.toString = function () {
            return (function (e) {
              for (
                var t = e.getTag(), n = t.length, r = "", i = 0;
                i < n;
                i++
              ) {
                var o = Ch(i);
                if (void 0 !== o) {
                  var s = e.names.get(o),
                    a = t.getGroup(i);
                  if (s && a && s.size) {
                    var u = dh + ".g" + i + '[id="' + o + '"]',
                      l = "";
                    void 0 !== s &&
                      s.forEach(function (e) {
                        e.length > 0 && (l += e + ",");
                      }),
                      (r += "" + a + u + '{content:"' + l + '"}/*!sc*/\n');
                  }
                }
              }
              return r;
            })(this);
          }),
          e
        );
      })(),
      _h = /(a)(d)/gi,
      Rh = function (e) {
        return String.fromCharCode(e + (e > 25 ? 39 : 97));
      };
    function Nh(e) {
      var t,
        n = "";
      for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Rh(t % 52) + n;
      return (Rh(t % 52) + n).replace(_h, "$1-$2");
    }
    var jh = function (e, t) {
        for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
        return e;
      },
      Lh = function (e) {
        return jh(5381, e);
      };
    function Ih(e) {
      for (var t = 0; t < e.length; t += 1) {
        var n = e[t];
        if (uh(n) && !ch(n)) return !1;
      }
      return !0;
    }
    var Vh = Lh("5.3.11"),
      zh = (function () {
        function e(e, t, n) {
          (this.rules = e),
            (this.staticRulesId = ""),
            (this.isStatic = (void 0 === n || n.isStatic) && Ih(e)),
            (this.componentId = t),
            (this.baseHash = jh(Vh, t)),
            (this.baseStyle = n),
            Oh.registerId(t);
        }
        return (
          (e.prototype.generateAndInjectStyles = function (e, t, n) {
            var r = this.componentId,
              i = [];
            if (
              (this.baseStyle &&
                i.push(this.baseStyle.generateAndInjectStyles(e, t, n)),
              this.isStatic && !n.hash)
            )
              if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId))
                i.push(this.staticRulesId);
              else {
                var o = ip(this.rules, e, t, n).join(""),
                  s = Nh(jh(this.baseHash, o) >>> 0);
                if (!t.hasNameForId(r, s)) {
                  var a = n(o, "." + s, void 0, r);
                  t.insertRules(r, s, a);
                }
                i.push(s), (this.staticRulesId = s);
              }
            else {
              for (
                var u = this.rules.length,
                  l = jh(this.baseHash, n.hash),
                  c = "",
                  d = 0;
                d < u;
                d++
              ) {
                var h = this.rules[d];
                if ("string" == typeof h) c += h;
                else if (h) {
                  var p = ip(h, e, t, n),
                    m = Array.isArray(p) ? p.join("") : p;
                  (l = jh(l, m + d)), (c += m);
                }
              }
              if (c) {
                var f = Nh(l >>> 0);
                if (!t.hasNameForId(r, f)) {
                  var g = n(c, "." + f, void 0, r);
                  t.insertRules(r, f, g);
                }
                i.push(f);
              }
            }
            return i.join(" ");
          }),
          e
        );
      })(),
      $h = /^\s*\/\/.*$/gm,
      Wh = [":", "[", ".", "#"];
    function qh(e) {
      var t,
        n,
        r,
        i,
        o = void 0 === e ? ah : e,
        s = o.options,
        a = void 0 === s ? ah : s,
        u = o.plugins,
        l = void 0 === u ? sh : u,
        c = new Xd(a),
        d = [],
        h = (function (e) {
          function t(t) {
            if (t)
              try {
                e(t + "}");
              } catch (e) {}
          }
          return function (n, r, i, o, s, a, u, l, c, d) {
            switch (n) {
              case 1:
                if (0 === c && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                break;
              case 2:
                if (0 === l) return r + "/*|*/";
                break;
              case 3:
                switch (l) {
                  case 102:
                  case 112:
                    return e(i[0] + r), "";
                  default:
                    return r + (0 === d ? "/*|*/" : "");
                }
              case -2:
                r.split("/*|*/}").forEach(t);
            }
          };
        })(function (e) {
          d.push(e);
        }),
        p = function (e, r, o) {
          return (0 === r && -1 !== Wh.indexOf(o[n.length])) || o.match(i)
            ? e
            : "." + t;
        };
      function m(e, o, s, a) {
        void 0 === a && (a = "&");
        var u = e.replace($h, ""),
          l = o && s ? s + " " + o + " { " + u + " }" : u;
        return (
          (t = a),
          (n = o),
          (r = new RegExp("\\" + n + "\\b", "g")),
          (i = new RegExp("(\\" + n + "\\b){2,}")),
          c(s || !o ? "" : o, l)
        );
      }
      return (
        c.use(
          [].concat(l, [
            function (e, t, i) {
              2 === e &&
                i.length &&
                i[0].lastIndexOf(n) > 0 &&
                (i[0] = i[0].replace(r, p));
            },
            h,
            function (e) {
              if (-2 === e) {
                var t = d;
                return (d = []), t;
              }
            },
          ])
        ),
        (m.hash = l.length
          ? l
              .reduce(function (e, t) {
                return t.name || mh(15), jh(e, t.name);
              }, 5381)
              .toString()
          : ""),
        m
      );
    }
    var Uh = n().createContext(),
      Hh = (Uh.Consumer, n().createContext()),
      Zh = (Hh.Consumer, new Oh()),
      Yh = qh();
    function Gh() {
      return (0, e.useContext)(Uh) || Zh;
    }
    function Xh(t) {
      var r = (0, e.useState)(t.stylisPlugins),
        i = r[0],
        o = r[1],
        s = Gh(),
        a = (0, e.useMemo)(
          function () {
            var e = s;
            return (
              t.sheet
                ? (e = t.sheet)
                : t.target &&
                  (e = e.reconstructWithOptions({ target: t.target }, !1)),
              t.disableCSSOMInjection &&
                (e = e.reconstructWithOptions({ useCSSOMInjection: !1 })),
              e
            );
          },
          [t.disableCSSOMInjection, t.sheet, t.target]
        ),
        u = (0, e.useMemo)(
          function () {
            return qh({
              options: { prefix: !t.disableVendorPrefixes },
              plugins: i,
            });
          },
          [t.disableVendorPrefixes, i]
        );
      return (
        (0, e.useEffect)(
          function () {
            Gd()(i, t.stylisPlugins) || o(t.stylisPlugins);
          },
          [t.stylisPlugins]
        ),
        n().createElement(
          Uh.Provider,
          { value: a },
          n().createElement(Hh.Provider, { value: u }, t.children)
        )
      );
    }
    var Kh = (function () {
        function e(e, t) {
          var n = this;
          (this.inject = function (e, t) {
            void 0 === t && (t = Yh);
            var r = n.name + t.hash;
            e.hasNameForId(n.id, r) ||
              e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
          }),
            (this.toString = function () {
              return mh(12, String(n.name));
            }),
            (this.name = e),
            (this.id = "sc-keyframes-" + e),
            (this.rules = t);
        }
        return (
          (e.prototype.getName = function (e) {
            return void 0 === e && (e = Yh), this.name + e.hash;
          }),
          e
        );
      })(),
      Jh = /([A-Z])/,
      Qh = /([A-Z])/g,
      ep = /^ms-/,
      tp = function (e) {
        return "-" + e.toLowerCase();
      };
    function np(e) {
      return Jh.test(e) ? e.replace(Qh, tp).replace(ep, "-ms-") : e;
    }
    var rp = function (e) {
      return null == e || !1 === e || "" === e;
    };
    function ip(e, t, n, r) {
      if (Array.isArray(e)) {
        for (var i, o = [], s = 0, a = e.length; s < a; s += 1)
          "" !== (i = ip(e[s], t, n, r)) &&
            (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
        return o;
      }
      return rp(e)
        ? ""
        : ch(e)
        ? "." + e.styledComponentId
        : uh(e)
        ? "function" != typeof (u = e) ||
          (u.prototype && u.prototype.isReactComponent) ||
          !t
          ? e
          : ip(e(t), t, n, r)
        : e instanceof Kh
        ? n
          ? (e.inject(n, r), e.getName(r))
          : e
        : oh(e)
        ? (function e(t, n) {
            var r,
              i,
              o = [];
            for (var s in t)
              t.hasOwnProperty(s) &&
                !rp(t[s]) &&
                ((Array.isArray(t[s]) && t[s].isCss) || uh(t[s])
                  ? o.push(np(s) + ":", t[s], ";")
                  : oh(t[s])
                  ? o.push.apply(o, e(t[s], s))
                  : o.push(
                      np(s) +
                        ": " +
                        ((r = s),
                        (null == (i = t[s]) || "boolean" == typeof i || "" === i
                          ? ""
                          : "number" != typeof i ||
                            0 === i ||
                            r in Kd ||
                            r.startsWith("--")
                          ? String(i).trim()
                          : i + "px") + ";")
                    ));
            return n ? [n + " {"].concat(o, ["}"]) : o;
          })(e)
        : e.toString();
      var u;
    }
    var op = function (e) {
      return Array.isArray(e) && (e.isCss = !0), e;
    };
    function sp(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return uh(e) || oh(e)
        ? op(ip(ih(sh, [e].concat(n))))
        : 0 === n.length && 1 === e.length && "string" == typeof e[0]
        ? e
        : op(ip(ih(e, n)));
    }
    new Set();
    var ap = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
      up = /(^-|-$)/g;
    function lp(e) {
      return e.replace(ap, "-").replace(up, "");
    }
    function cp(e) {
      return "string" == typeof e && !0;
    }
    var dp = function (e) {
        return (
          "function" == typeof e ||
          ("object" == typeof e && null !== e && !Array.isArray(e))
        );
      },
      hp = function (e) {
        return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
      };
    function pp(e, t, n) {
      var r = e[n];
      dp(t) && dp(r) ? mp(r, t) : (e[n] = t);
    }
    function mp(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      for (var i = 0, o = n; i < o.length; i++) {
        var s = o[i];
        if (dp(s)) for (var a in s) hp(a) && pp(e, s[a], a);
      }
      return e;
    }
    var fp = n().createContext();
    function gp(t) {
      var r = (0, e.useContext)(fp),
        i = (0, e.useMemo)(
          function () {
            return (function (e, t) {
              return e
                ? uh(e)
                  ? e(t)
                  : Array.isArray(e) || "object" != typeof e
                  ? mh(8)
                  : t
                  ? rh({}, t, {}, e)
                  : e
                : mh(14);
            })(t.theme, r);
          },
          [t.theme, r]
        );
      return t.children
        ? n().createElement(fp.Provider, { value: i }, t.children)
        : null;
    }
    fp.Consumer;
    var vp = {};
    function yp(t, r, i) {
      var o = ch(t),
        s = !cp(t),
        a = r.attrs,
        u = void 0 === a ? sh : a,
        l = r.componentId,
        c =
          void 0 === l
            ? (function (e, t) {
                var n = "string" != typeof e ? "sc" : lp(e);
                vp[n] = (vp[n] || 0) + 1;
                var r =
                  n +
                  "-" +
                  (function (e) {
                    return Nh(Lh(e) >>> 0);
                  })("5.3.11" + n + vp[n]);
                return t ? t + "-" + r : r;
              })(r.displayName, r.parentComponentId)
            : l,
        d = r.displayName,
        h =
          void 0 === d
            ? (function (e) {
                return cp(e) ? "styled." + e : "Styled(" + lh(e) + ")";
              })(t)
            : d,
        p =
          r.displayName && r.componentId
            ? lp(r.displayName) + "-" + r.componentId
            : r.componentId || c,
        m =
          o && t.attrs ? Array.prototype.concat(t.attrs, u).filter(Boolean) : u,
        f = r.shouldForwardProp;
      o &&
        t.shouldForwardProp &&
        (f = r.shouldForwardProp
          ? function (e, n, i) {
              return (
                t.shouldForwardProp(e, n, i) && r.shouldForwardProp(e, n, i)
              );
            }
          : t.shouldForwardProp);
      var g,
        v = new zh(i, p, o ? t.componentStyle : void 0),
        y = v.isStatic && 0 === u.length,
        b = function (t, n) {
          return (function (t, n, r, i) {
            var o = t.attrs,
              s = t.componentStyle,
              a = t.defaultProps,
              u = t.foldedComponentIds,
              l = t.shouldForwardProp,
              c = t.styledComponentId,
              d = t.target,
              h = (function (e, t, n) {
                void 0 === e && (e = ah);
                var r = rh({}, t, { theme: e }),
                  i = {};
                return (
                  n.forEach(function (e) {
                    var t,
                      n,
                      o,
                      s = e;
                    for (t in (uh(s) && (s = s(r)), s))
                      r[t] = i[t] =
                        "className" === t
                          ? ((n = i[t]),
                            (o = s[t]),
                            n && o ? n + " " + o : n || o)
                          : s[t];
                  }),
                  [r, i]
                );
              })(
                (function (e, t, n) {
                  return (
                    void 0 === n && (n = ah),
                    (e.theme !== n.theme && e.theme) || t || n.theme
                  );
                })(n, (0, e.useContext)(fp), a) || ah,
                n,
                o
              ),
              p = h[0],
              m = h[1],
              f = (function (t, n, r, i) {
                var o = Gh(),
                  s = (0, e.useContext)(Hh) || Yh;
                return n
                  ? t.generateAndInjectStyles(ah, o, s)
                  : t.generateAndInjectStyles(r, o, s);
              })(s, i, p),
              g = r,
              v = m.$as || n.$as || m.as || n.as || d,
              y = cp(v),
              b = m !== n ? rh({}, n, {}, m) : n,
              C = {};
            for (var D in b)
              "$" !== D[0] &&
                "as" !== D &&
                ("forwardedAs" === D
                  ? (C.as = b[D])
                  : (l ? l(D, eh, v) : !y || eh(D)) && (C[D] = b[D]));
            return (
              n.style &&
                m.style !== n.style &&
                (C.style = rh({}, n.style, {}, m.style)),
              (C.className = Array.prototype
                .concat(u, c, f !== c ? f : null, n.className, m.className)
                .filter(Boolean)
                .join(" ")),
              (C.ref = g),
              (0, e.createElement)(v, C)
            );
          })(g, t, n, y);
        };
      return (
        (b.displayName = h),
        ((g = n().forwardRef(b)).attrs = m),
        (g.componentStyle = v),
        (g.displayName = h),
        (g.shouldForwardProp = f),
        (g.foldedComponentIds = o
          ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId)
          : sh),
        (g.styledComponentId = p),
        (g.target = o ? t.target : t),
        (g.withComponent = function (e) {
          var t = r.componentId,
            n = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                i = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i;
            })(r, ["componentId"]),
            o = t && t + "-" + (cp(e) ? e : lp(lh(e)));
          return yp(e, rh({}, n, { attrs: m, componentId: o }), i);
        }),
        Object.defineProperty(g, "defaultProps", {
          get: function () {
            return this._foldedDefaultProps;
          },
          set: function (e) {
            this._foldedDefaultProps = o ? mp({}, t.defaultProps, e) : e;
          },
        }),
        Object.defineProperty(g, "toString", {
          value: function () {
            return "." + g.styledComponentId;
          },
        }),
        s &&
          nh()(g, t, {
            attrs: !0,
            componentStyle: !0,
            displayName: !0,
            foldedComponentIds: !0,
            shouldForwardProp: !0,
            styledComponentId: !0,
            target: !0,
            withComponent: !0,
          }),
        g
      );
    }
    var bp,
      Cp = function (e) {
        return (function e(t, n, r) {
          if ((void 0 === r && (r = ah), !(0, Zd.isValidElementType)(n)))
            return mh(1, String(n));
          var i = function () {
            return t(n, r, sp.apply(void 0, arguments));
          };
          return (
            (i.withConfig = function (i) {
              return e(t, n, rh({}, r, {}, i));
            }),
            (i.attrs = function (i) {
              return e(
                t,
                n,
                rh({}, r, {
                  attrs: Array.prototype.concat(r.attrs, i).filter(Boolean),
                })
              );
            }),
            i
          );
        })(yp, e);
      };
    [
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "marker",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "textPath",
      "tspan",
    ].forEach(function (e) {
      Cp[e] = Cp(e);
    }),
      ((bp = function (e, t) {
        (this.rules = e),
          (this.componentId = t),
          (this.isStatic = Ih(e)),
          Oh.registerId(this.componentId + 1);
      }.prototype).createStyles = function (e, t, n, r) {
        var i = r(ip(this.rules, t, n, r).join(""), ""),
          o = this.componentId + e;
        n.insertRules(o, o, i);
      }),
      (bp.removeStyles = function (e, t) {
        t.clearRules(this.componentId + e);
      }),
      (bp.renderStyles = function (e, t, n, r) {
        e > 2 && Oh.registerId(this.componentId + e),
          this.removeStyles(e, n),
          this.createStyles(e, t, n, r);
      }),
      (function () {
        var e = function () {
          var e = this;
          (this._emitSheetCSS = function () {
            var t = e.instance.toString();
            if (!t) return "";
            var n = xh();
            return (
              "<style " +
              [
                n && 'nonce="' + n + '"',
                dh + '="true"',
                'data-styled-version="5.3.11"',
              ]
                .filter(Boolean)
                .join(" ") +
              ">" +
              t +
              "</style>"
            );
          }),
            (this.getStyleTags = function () {
              return e.sealed ? mh(2) : e._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var t;
              if (e.sealed) return mh(2);
              var r =
                  (((t = {})[dh] = ""),
                  (t["data-styled-version"] = "5.3.11"),
                  (t.dangerouslySetInnerHTML = {
                    __html: e.instance.toString(),
                  }),
                  t),
                i = xh();
              return (
                i && (r.nonce = i),
                [n().createElement("style", rh({}, r, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              e.sealed = !0;
            }),
            (this.instance = new Oh({ isServer: !0 })),
            (this.sealed = !1);
        }.prototype;
        (e.collectStyles = function (e) {
          return this.sealed
            ? mh(2)
            : n().createElement(Xh, { sheet: this.instance }, e);
        }),
          (e.interleaveWithNodeStream = function (e) {
            return mh(3);
          });
      })();
    const Dp = Cp,
      wp = Dp.div`
  .plyr--audio .plyr__controls {
    gap: 5px;
    background: transparent;
  }

  .plyr--audio .plyr__control:hover,
  .plyr__control:focus-visible,
  .plyr--audio .plyr__control[aria-expanded="true"] {
    background: #eeeeee;
    opacity: 0.9;
    svg {
      fill: ${(e) => e.theme.brandColor} !important;
    }

    * {
      color: #333333;
    }

    .dark & {
      background: #333333;

      svg {
        fill: #f1f1f1 !important;
      }
    }
  }

  .plyr__control:focus-visible {
    outline: 2px dashed ${(e) => e.theme.brandColor};
  }
  .plyr__control svg {
    fill: ${(e) => e.theme.brandColor};
  }

  .plyr--audio .plyr__control {
    border-radius: 6px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 16px;
    }
  }
  .plyr--audio .plyr__control[data-plyr="play"] {
    border-radius: 6px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eeeeee;

    .dark & {
      border: 1px solid #333333;
    }
    svg {
      width: 16px;
    }
  }

  .plyr__control svg {
    .dark & {
      fill: #f1f1f1;
    }
  }

  .plyr__time {
    .dark & {
      color: #ffffff;
    }
  }

  .plyr__control:hover svg {
    fill: ${(e) => e.theme.brandColor};
  }

  .plyr--audio .plyr__control[aria-expanded="true"] svg {
    fill: ${(e) => e.theme.brandColor};
  }

  .plyr__control:focus-visible svg {
    fill: ${(e) => e.theme.brandColor};
  }

  .plyr--full-ui input[type="range"] {
    color: ${(e) => e.theme.brandColor};
  }

  @media (max-width: 767px) {
    .plyr__time + .plyr__time {
      display: block;
    }
  }
`,
      Ep = ({ audioURL: t, content: r, isPreview: i = !1 }) => {
        const o = (0, e.useContext)(fp),
          [s, a] = (0, e.useState)(!1),
          [u, l] = (0, e.useState)(0);
        let c;
        return (
          (c = i
            ? ["play", "restart", "progress", "current-time"]
            : !i && r.length < 40
            ? ["play"]
            : ["play", "restart", "progress", "current-time", "duration"]),
          n().createElement(
            wp,
            {
              theme: o,
              className: `${
                !i &&
                r.length > 40 &&
                "mb-4 rounded-lg border border-gray-200 shadow-sm dark:border-neutral-800"
              }`,
            },
            n().createElement(Hd, {
              source: {
                type: "audio",
                sources: [{ src: t, type: "audio/mp3" }],
              },
              options: {
                controls: c,
                settings: ["speed"],
                speed: { selected: 1, options: [0.7, 1, 1.25, 1.5, 2] },
              },
            })
          )
        );
      },
      Ap = ({ node: t, children: n, index: r, nodes: i }) => {
        const o = t.children.some((e) => "mcq" === e.type),
          s =
            (t.children.some((e) => "block-quote" === e.type),
            t.content && t.content.length,
            i.indexOf(t),
            i.length,
            i.findIndex((e) => "tts" === e.type),
            i.indexOf(t),
            i.indexOf(t),
            i[i.indexOf(t) - 1]);
        s && s.type,
          i
            .slice()
            .reverse()
            .findIndex((e) => "tts" === e.type);
        return (
          i.length,
          i.indexOf(t),
          i.length,
          !JSON.parse(t.audioplayer) &&
            e.createElement(
              "div",
              {
                className: `preview-tts mb-3 mt-2\n    \n       py-2 dark:border-accent \n\n      ${
                  t.content &&
                  t.content.length < 40 &&
                  `flex items-center gap-[10px] justify-${t.children[0].align}`
                }\n      `,
              },
              t.audio_url &&
                !o &&
                e.createElement(
                  "div",
                  {
                    className:
                      t.content && t.content.length < 40 ? "w-[50px] " : "",
                  },
                  e.createElement(Ep, {
                    audioURL: t.audio_url,
                    content: t.content,
                    isPreview: !1,
                  })
                ),
              e.createElement("div", null, n)
            )
        );
      },
      Bp = (0, e.createContext)(void 0),
      xp = { setTheme: (e) => {}, themes: [] };
    function kp(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Fp(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? kp(Object(n), !0).forEach(function (t) {
              Pp(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : kp(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Pp(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Tp(e, t) {
      return (
        (Tp =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          }),
        Tp(e, t)
      );
    }
    function Sp(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Mp(e, t) {
      for (; e; ) {
        if (e.classList && e.classList.contains(t)) return !0;
        e = e.parentElement;
      }
      return !1;
    }
    function Op(e) {
      var t = e.getBoundingClientRect();
      return { x: t.left, y: t.top };
    }
    function _p(e, t, n) {
      return (
        "https://" +
        String.fromCharCode(97 + ((e + t + n) % 3)) +
        ".tile.openstreetmap.org/" +
        n +
        "/" +
        e +
        "/" +
        t +
        ".png"
      );
    }
    var Rp = function () {
        return !0;
      },
      Np = function (e, t) {
        return ((e + 180) / 360) * Math.pow(2, t);
      },
      jp = function (e, t) {
        return (
          ((1 -
            Math.log(
              Math.tan((e * Math.PI) / 180) + 1 / Math.cos((e * Math.PI) / 180)
            ) /
              Math.PI) /
            2) *
          Math.pow(2, t)
        );
      };
    function Lp(e, t) {
      return (e / Math.pow(2, t)) * 360 - 180;
    }
    function Ip(e, t) {
      var n = Math.PI - (2 * Math.PI * e) / Math.pow(2, t);
      return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
    }
    function Vp(e, t) {
      var n = Op(e);
      return [t.clientX - n.x, t.clientY - n.y];
    }
    var zp,
      $p = [
        Ip(Math.pow(2, 10), 10),
        Ip(0, 10),
        Lp(0, 10),
        Lp(Math.pow(2, 10), 10),
      ],
      Wp = "undefined" != typeof window,
      qp =
        Wp && window.performance && window.performance.now
          ? function () {
              return window.performance.now();
            }
          : ((zp = new Date().getTime()),
            function () {
              return new Date().getTime() - zp;
            }),
      Up = function (e) {
        return Wp
          ? (window.requestAnimationFrame || window.setTimeout)(e)
          : (e(new Date().getTime()), null);
      },
      Hp = function (e) {
        return (
          !(!Wp || !e) &&
          (window.cancelAnimationFrame || window.clearTimeout)(e)
        );
      };
    function Zp(e, t, n, r, i) {
      return e && 0 !== e.length
        ? e
            .map(function (e) {
              return t(n, r, i, e) + (1 === e ? "" : " " + e + "x");
            })
            .join(", ")
        : "";
    }
    var Yp = (function (e) {
      var t, r;
      function i(t) {
        var n, r, i, o, s, a, u, l, c, d, h;
        return (
          Pp(Sp((c = e.call(this, t) || this)), "_containerRef", void 0),
          Pp(Sp(c), "_mousePosition", void 0),
          Pp(Sp(c), "_loadTracker", void 0),
          Pp(Sp(c), "_dragStart", null),
          Pp(Sp(c), "_mouseDown", !1),
          Pp(Sp(c), "_moveEvents", []),
          Pp(Sp(c), "_lastClick", null),
          Pp(Sp(c), "_lastTap", null),
          Pp(Sp(c), "_lastWheel", null),
          Pp(Sp(c), "_touchStartPixel", null),
          Pp(Sp(c), "_touchStartMidPoint", null),
          Pp(Sp(c), "_touchStartDistance", null),
          Pp(Sp(c), "_secondTouchEnd", null),
          Pp(Sp(c), "_warningClearTimeout", null),
          Pp(Sp(c), "_isAnimating", !1),
          Pp(Sp(c), "_animationStart", null),
          Pp(Sp(c), "_animationEnd", null),
          Pp(Sp(c), "_zoomStart", null),
          Pp(Sp(c), "_centerTarget", null),
          Pp(Sp(c), "_zoomTarget", null),
          Pp(Sp(c), "_zoomAround", null),
          Pp(Sp(c), "_animFrame", null),
          Pp(Sp(c), "_boundsSynced", !1),
          Pp(Sp(c), "_minMaxCache", null),
          Pp(Sp(c), "_lastZoom", void 0),
          Pp(Sp(c), "_lastCenter", void 0),
          Pp(Sp(c), "_centerStart", void 0),
          Pp(Sp(c), "_resizeObserver", null),
          Pp(Sp(c), "updateWidthHeight", function () {
            if (c._containerRef) {
              var e = c._containerRef.getBoundingClientRect();
              if (e && e.width > 0 && e.height > 0)
                return c.setState({ width: e.width, height: e.height }), !0;
            }
            return !1;
          }),
          Pp(Sp(c), "wa", function () {
            var e;
            return (e = window).addEventListener.apply(e, arguments);
          }),
          Pp(Sp(c), "wr", function () {
            var e;
            return (e = window).removeEventListener.apply(e, arguments);
          }),
          Pp(Sp(c), "bindMouseEvents", function () {
            c.wa("mousedown", c.handleMouseDown),
              c.wa("mouseup", c.handleMouseUp),
              c.wa("mousemove", c.handleMouseMove);
          }),
          Pp(Sp(c), "bindTouchEvents", function () {
            c.wa("touchstart", c.handleTouchStart, { passive: !1 }),
              c.wa("touchmove", c.handleTouchMove, { passive: !1 }),
              c.wa("touchend", c.handleTouchEnd, { passive: !1 });
          }),
          Pp(Sp(c), "unbindMouseEvents", function () {
            c.wr("mousedown", c.handleMouseDown),
              c.wr("mouseup", c.handleMouseUp),
              c.wr("mousemove", c.handleMouseMove);
          }),
          Pp(Sp(c), "unbindTouchEvents", function () {
            c.wr("touchstart", c.handleTouchStart),
              c.wr("touchmove", c.handleTouchMove),
              c.wr("touchend", c.handleTouchEnd);
          }),
          Pp(Sp(c), "bindResizeEvent", function () {
            c.wa("resize", c.updateWidthHeight);
          }),
          Pp(Sp(c), "unbindResizeEvent", function () {
            c.wr("resize", c.updateWidthHeight);
          }),
          Pp(Sp(c), "bindWheelEvent", function () {
            c._containerRef &&
              c._containerRef.addEventListener("wheel", c.handleWheel, {
                passive: !1,
              });
          }),
          Pp(Sp(c), "unbindWheelEvent", function () {
            c._containerRef &&
              c._containerRef.removeEventListener("wheel", c.handleWheel);
          }),
          Pp(Sp(c), "setCenterZoomTarget", function (e, t, n, r, i) {
            if (
              (void 0 === n && (n = !1),
              void 0 === r && (r = null),
              void 0 === i && (i = 300),
              c.props.animate &&
                (!n ||
                  c.distanceInScreens(e, t, c.state.center, c.state.zoom) <=
                    c.props.animateMaxScreens))
            ) {
              if (c._isAnimating) {
                Hp(c._animFrame);
                var o = c.animationStep(qp()),
                  s = o.centerStep,
                  a = o.zoomStep;
                (c._centerStart = s), (c._zoomStart = a);
              } else
                (c._isAnimating = !0),
                  (c._centerStart = c.limitCenterAtZoom(
                    [c._lastCenter[0], c._lastCenter[1]],
                    c._lastZoom
                  )),
                  (c._zoomStart = c._lastZoom),
                  c.onAnimationStart();
              (c._animationStart = qp()),
                (c._animationEnd = c._animationStart + i),
                r
                  ? ((c._zoomAround = r),
                    (c._centerTarget = c.calculateZoomCenter(
                      c._lastCenter,
                      r,
                      c._lastZoom,
                      t
                    )))
                  : ((c._zoomAround = null), (c._centerTarget = e)),
                (c._zoomTarget = t),
                (c._animFrame = Up(c.animate));
            } else if ((c.stopAnimating(), r)) {
              var u = c.calculateZoomCenter(c._lastCenter, r, c._lastZoom, t);
              c.setCenterZoom(u, t, n);
            } else c.setCenterZoom(e || c.state.center, t, n);
          }),
          Pp(Sp(c), "setCenterZoomForChildren", function (e, t) {
            c.setCenterZoomTarget(e || c.state.center, t || c.state.zoom, !0);
          }),
          Pp(Sp(c), "distanceInScreens", function (e, t, n, r) {
            var i = c.state,
              o = i.width,
              s = i.height,
              a = c.latLngToPixel(n, n, r),
              u = c.latLngToPixel(e, n, r),
              l = c.latLngToPixel(n, n, t),
              d = c.latLngToPixel(e, n, t),
              h = (Math.abs(a[0] - u[0]) + Math.abs(l[0] - d[0])) / 2 / o,
              p = (Math.abs(a[1] - u[1]) + Math.abs(l[1] - d[1])) / 2 / s;
            return Math.sqrt(h * h + p * p);
          }),
          Pp(Sp(c), "animationStep", function (e) {
            if (
              !(
                c._animationEnd &&
                c._animationStart &&
                c._zoomTarget &&
                c._zoomStart &&
                c._centerStart &&
                c._centerTarget
              )
            )
              return { centerStep: c.state.center, zoomStep: c.state.zoom };
            var t = c._animationEnd - c._animationStart,
              n = (function (e) {
                return e * (2 - e);
              })(Math.max(e - c._animationStart, 0) / t),
              r = (c._zoomTarget - c._zoomStart) * n,
              i = c._zoomStart + r;
            return c._zoomAround
              ? {
                  centerStep: c.calculateZoomCenter(
                    c._centerStart,
                    c._zoomAround,
                    c._zoomStart,
                    i
                  ),
                  zoomStep: i,
                }
              : {
                  centerStep: [
                    c._centerStart[0] +
                      (c._centerTarget[0] - c._centerStart[0]) * n,
                    c._centerStart[1] +
                      (c._centerTarget[1] - c._centerStart[1]) * n,
                  ],
                  zoomStep: i,
                };
          }),
          Pp(Sp(c), "animate", function (e) {
            if (!c._animationEnd || e >= c._animationEnd)
              (c._isAnimating = !1),
                c.setCenterZoom(c._centerTarget, c._zoomTarget, !0),
                c.onAnimationStop();
            else {
              var t = c.animationStep(e),
                n = t.centerStep,
                r = t.zoomStep;
              c.setCenterZoom(n, r), (c._animFrame = Up(c.animate));
            }
          }),
          Pp(Sp(c), "stopAnimating", function () {
            c._isAnimating &&
              ((c._isAnimating = !1), c.onAnimationStop(), Hp(c._animFrame));
          }),
          Pp(Sp(c), "limitCenterAtZoom", function (e, t) {
            var n = c.getBoundsMinMax(t || c.state.zoom);
            return [
              Math.max(
                Math.min(!e || isNaN(e[0]) ? c.state.center[0] : e[0], n[1]),
                n[0]
              ),
              Math.max(
                Math.min(!e || isNaN(e[1]) ? c.state.center[1] : e[1], n[3]),
                n[2]
              ),
            ];
          }),
          Pp(Sp(c), "onAnimationStart", function () {
            c.props.onAnimationStart && c.props.onAnimationStart();
          }),
          Pp(Sp(c), "onAnimationStop", function () {
            c.props.onAnimationStop && c.props.onAnimationStop();
          }),
          Pp(Sp(c), "setCenterZoom", function (e, t, n) {
            void 0 === n && (n = !1);
            var r = c.limitCenterAtZoom(e, t);
            if (t && Math.round(c.state.zoom) !== Math.round(t)) {
              var i = c.tileValues(c.state),
                o = c.tileValues({
                  center: r,
                  zoom: t,
                  width: c.state.width,
                  height: c.state.height,
                }),
                s = c.state.oldTiles;
              c.setState(
                {
                  oldTiles: s
                    .filter(function (e) {
                      return e.roundedZoom !== i.roundedZoom;
                    })
                    .concat(i),
                },
                Rp
              );
              for (var a = {}, u = o.tileMinX; u <= o.tileMaxX; u++)
                for (var l = o.tileMinY; l <= o.tileMaxY; l++)
                  a[u + "-" + l + "-" + o.roundedZoom] = !1;
              c._loadTracker = a;
            }
            c.setState({ center: r, zoom: t || c.state.zoom }, Rp);
            var d = c.props.zoom ? c.props.zoom : c._lastZoom,
              h = c.props.center ? c.props.center : c._lastCenter;
            t &&
              (n ||
                Math.abs(d - t) > 0.001 ||
                Math.abs(h[0] - r[0]) > 1e-5 ||
                Math.abs(h[1] - r[1]) > 1e-5) &&
              ((c._lastZoom = t),
              (c._lastCenter = [].concat(r)),
              c.syncToProps(r, t));
          }),
          Pp(Sp(c), "getBoundsMinMax", function (e) {
            if ("center" === c.props.limitBounds) return $p;
            var t = c.state,
              n = t.width,
              r = t.height;
            if (
              c._minMaxCache &&
              c._minMaxCache[0] === e &&
              c._minMaxCache[1] === n &&
              c._minMaxCache[2] === r
            )
              return c._minMaxCache[3];
            var i = 256 * Math.pow(2, e),
              o = n > i ? 0 : Lp(n / 512, e),
              s = r > i ? 0 : Ip(Math.pow(2, e) - r / 512, e),
              a = n > i ? 0 : Lp(Math.pow(2, e) - n / 512, e),
              u = [s, r > i ? 0 : Ip(r / 512, e), o, a];
            return (c._minMaxCache = [e, n, r, u]), u;
          }),
          Pp(Sp(c), "tileLoaded", function (e) {
            if (c._loadTracker && e in c._loadTracker) {
              c._loadTracker[e] = !0;
              var t = Object.values(c._loadTracker).filter(function (e) {
                return !e;
              }).length;
              0 === t && c.setState({ oldTiles: [] }, Rp);
            }
          }),
          Pp(Sp(c), "handleTouchStart", function (e) {
            if (
              c._containerRef &&
              (!e.target || !Mp(e.target, "pigeon-drag-block"))
            )
              if (1 === e.touches.length) {
                var t = e.touches[0],
                  n = Vp(c._containerRef, t);
                if (
                  c.coordsInside(n) &&
                  ((c._touchStartPixel = [n]), !c.props.twoFingerDrag)
                )
                  if (
                    (c.stopAnimating(), c._lastTap && qp() - c._lastTap < 300)
                  ) {
                    e.preventDefault();
                    var r = c.pixelToLatLng(c._touchStartPixel[0]);
                    c.setCenterZoomTarget(
                      null,
                      Math.max(
                        c.props.minZoom,
                        Math.min(c.state.zoom + 1, c.props.maxZoom)
                      ),
                      !1,
                      r
                    );
                  } else (c._lastTap = qp()), c.trackMoveEvents(n);
              } else if (2 === e.touches.length && c._touchStartPixel) {
                e.preventDefault(),
                  c.stopTrackingMoveEvents(),
                  (c.state.pixelDelta || c.state.zoomDelta) &&
                    c.sendDeltaChange();
                var i = Vp(c._containerRef, e.touches[0]),
                  o = Vp(c._containerRef, e.touches[1]);
                (c._touchStartPixel = [i, o]),
                  (c._touchStartMidPoint = [
                    (i[0] + o[0]) / 2,
                    (i[1] + o[1]) / 2,
                  ]),
                  (c._touchStartDistance = Math.sqrt(
                    Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2)
                  ));
              }
          }),
          Pp(Sp(c), "handleTouchMove", function (e) {
            if (c._containerRef) {
              if (1 === e.touches.length && c._touchStartPixel) {
                var t = e.touches[0],
                  n = Vp(c._containerRef, t);
                c.props.twoFingerDrag
                  ? c.coordsInside(n) && c.showWarning("fingers")
                  : (e.preventDefault(),
                    c.trackMoveEvents(n),
                    c.setState(
                      {
                        pixelDelta: [
                          n[0] - c._touchStartPixel[0][0],
                          n[1] - c._touchStartPixel[0][1],
                        ],
                      },
                      Rp
                    ));
              } else if (
                2 === e.touches.length &&
                c._touchStartPixel &&
                c._touchStartMidPoint &&
                c._touchStartDistance
              ) {
                var r = c.state,
                  i = r.width,
                  o = r.height,
                  s = r.zoom;
                e.preventDefault();
                var a = Vp(c._containerRef, e.touches[0]),
                  u = Vp(c._containerRef, e.touches[1]),
                  l = [(a[0] + u[0]) / 2, (a[1] + u[1]) / 2],
                  d = [
                    l[0] - c._touchStartMidPoint[0],
                    l[1] - c._touchStartMidPoint[1],
                  ],
                  h = Math.sqrt(
                    Math.pow(a[0] - u[0], 2) + Math.pow(a[1] - u[1], 2)
                  ),
                  p =
                    Math.max(
                      c.props.minZoom,
                      Math.min(
                        c.props.maxZoom,
                        s + Math.log2(h / c._touchStartDistance)
                      )
                    ) - s,
                  m = Math.pow(2, p),
                  f = [(i / 2 - l[0]) * (m - 1), (o / 2 - l[1]) * (m - 1)];
                c.setState(
                  {
                    zoomDelta: p,
                    pixelDelta: [f[0] + d[0] * m, f[1] + d[1] * m],
                  },
                  Rp
                );
              }
            } else c._touchStartPixel = null;
          }),
          Pp(Sp(c), "handleTouchEnd", function (e) {
            if (c._containerRef) {
              if (c._touchStartPixel) {
                var t = c.props,
                  n = t.zoomSnap,
                  r = t.twoFingerDrag,
                  i = t.minZoom,
                  o = t.maxZoom,
                  s = c.state.zoomDelta,
                  a = c.sendDeltaChange(),
                  u = a.center,
                  l = a.zoom;
                if (0 === e.touches.length)
                  if (r) c.clearWarning();
                  else {
                    var d = c._touchStartPixel[0],
                      h = Vp(c._containerRef, e.changedTouches[0]);
                    (Math.abs(d[0] - h[0]) > 2 || Math.abs(d[1] - h[1]) > 2) &&
                      (!c._secondTouchEnd || qp() - c._secondTouchEnd > 300) &&
                      (e.preventDefault(), c.throwAfterMoving(h, u, l)),
                      (c._touchStartPixel = null),
                      (c._secondTouchEnd = null);
                  }
                else if (1 === e.touches.length) {
                  e.preventDefault();
                  var p = Vp(c._containerRef, e.touches[0]);
                  if (
                    ((c._secondTouchEnd = qp()),
                    (c._touchStartPixel = [p]),
                    c.trackMoveEvents(p),
                    n)
                  ) {
                    var m,
                      f = c._touchStartMidPoint
                        ? c.pixelToLatLng(c._touchStartMidPoint)
                        : c.state.center;
                    m =
                      r &&
                      Math.round(c.state.zoom) === Math.round(c.state.zoom + s)
                        ? Math.round(c.state.zoom)
                        : s > 0
                        ? Math.ceil(c.state.zoom)
                        : Math.floor(c.state.zoom);
                    var g = Math.max(i, Math.min(m, o));
                    c.setCenterZoomTarget(f, g, !1, f);
                  }
                }
              }
            } else c._touchStartPixel = null;
          }),
          Pp(Sp(c), "handleMouseDown", function (e) {
            if (c._containerRef) {
              var t = Vp(c._containerRef, e);
              if (
                0 === e.button &&
                (!e.target || !Mp(e.target, "pigeon-drag-block")) &&
                c.coordsInside(t)
              )
                if (
                  (c.stopAnimating(),
                  e.preventDefault(),
                  c._lastClick && qp() - c._lastClick < 300)
                ) {
                  if (!Mp(e.target, "pigeon-click-block")) {
                    var n = c.pixelToLatLng(c._mousePosition || t);
                    c.setCenterZoomTarget(
                      null,
                      Math.max(
                        c.props.minZoom,
                        Math.min(c.state.zoom + 1, c.props.maxZoom)
                      ),
                      !1,
                      n
                    );
                  }
                } else
                  (c._lastClick = qp()),
                    (c._mouseDown = !0),
                    (c._dragStart = t),
                    c.trackMoveEvents(t);
            }
          }),
          Pp(Sp(c), "handleMouseMove", function (e) {
            c._containerRef &&
              ((c._mousePosition = Vp(c._containerRef, e)),
              c._mouseDown &&
                c._dragStart &&
                (c.trackMoveEvents(c._mousePosition),
                c.setState(
                  {
                    pixelDelta: [
                      c._mousePosition[0] - c._dragStart[0],
                      c._mousePosition[1] - c._dragStart[1],
                    ],
                  },
                  Rp
                )));
          }),
          Pp(Sp(c), "handleMouseUp", function (e) {
            if (c._containerRef) {
              var t = c.state.pixelDelta;
              if (c._mouseDown) {
                c._mouseDown = !1;
                var n = Vp(c._containerRef, e);
                if (
                  !c.props.onClick ||
                  (e.target && Mp(e.target, "pigeon-click-block")) ||
                  (t && !(Math.abs(t[0]) + Math.abs(t[1]) <= 2))
                ) {
                  var r = c.sendDeltaChange(),
                    i = r.center,
                    o = r.zoom;
                  c.throwAfterMoving(n, i, o);
                } else {
                  var s = c.pixelToLatLng(n);
                  c.props.onClick({ event: e, latLng: s, pixel: n }),
                    c.setState({ pixelDelta: void 0 }, Rp);
                }
              }
            } else c._mouseDown = !1;
          }),
          Pp(Sp(c), "stopTrackingMoveEvents", function () {
            c._moveEvents = [];
          }),
          Pp(Sp(c), "trackMoveEvents", function (e) {
            var t = qp();
            (0 === c._moveEvents.length ||
              t - c._moveEvents[c._moveEvents.length - 1].timestamp > 40) &&
              (c._moveEvents.push({ timestamp: t, coords: e }),
              c._moveEvents.length > 2 && c._moveEvents.shift());
          }),
          Pp(Sp(c), "throwAfterMoving", function (e, t, n) {
            var r = c.state,
              i = r.width,
              o = r.height,
              s = c.props.animate,
              a = qp(),
              u = c._moveEvents.shift();
            if (u && s) {
              var l = Math.max(a - u.timestamp, 1),
                d = [
                  ((e[0] - u.coords[0]) / l) * 120,
                  ((e[1] - u.coords[1]) / l) * 120,
                ],
                h = Math.sqrt(d[0] * d[0] + d[1] * d[1]);
              if (h > 40) {
                var p = (1500 * h) / Math.sqrt(i * i + o * o),
                  m = Lp(Np(t[1], n) - d[0] / 256, n),
                  f = Ip(jp(t[0], n) - d[1] / 256, n);
                c.setCenterZoomTarget([f, m], n, !1, null, p);
              }
            }
            c.stopTrackingMoveEvents();
          }),
          Pp(Sp(c), "sendDeltaChange", function () {
            var e = c.state,
              t = e.center,
              n = e.zoom,
              r = e.pixelDelta,
              i = e.zoomDelta,
              o = t[0],
              s = t[1];
            return (
              (r || 0 !== i) &&
                ((s = Lp(Np(t[1], n + i) - (r ? r[0] / 256 : 0), n + i)),
                (o = Ip(jp(t[0], n + i) - (r ? r[1] / 256 : 0), n + i)),
                c.setCenterZoom([o, s], n + i)),
              c.setState({ pixelDelta: void 0, zoomDelta: 0 }, Rp),
              { center: c.limitCenterAtZoom([o, s], n + i), zoom: n + i }
            );
          }),
          Pp(Sp(c), "getBounds", function (e, t) {
            void 0 === e && (e = c.state.center),
              void 0 === t && (t = c.zoomPlusDelta());
            var n = c.state,
              r = n.width,
              i = n.height;
            return {
              ne: c.pixelToLatLng([r - 1, 0], e, t),
              sw: c.pixelToLatLng([0, i - 1], e, t),
            };
          }),
          Pp(Sp(c), "syncToProps", function (e, t) {
            void 0 === e && (e = c.state.center),
              void 0 === t && (t = c.state.zoom);
            var n = c.props.onBoundsChanged;
            n &&
              (n({
                center: e,
                zoom: t,
                bounds: c.getBounds(e, t),
                initial: !c._boundsSynced,
              }),
              (c._boundsSynced = !0));
          }),
          Pp(Sp(c), "handleWheel", function (e) {
            var t = c.props,
              n = t.mouseEvents,
              r = t.metaWheelZoom,
              i = t.zoomSnap,
              o = t.animate;
            if (n)
              if (!r || e.metaKey || e.ctrlKey) {
                e.preventDefault();
                var s = -e.deltaY / 150;
                if (!i && c._zoomTarget) {
                  var a = c._zoomTarget - c.state.zoom;
                  c.zoomAroundMouse(s + a, e);
                } else
                  o
                    ? c.zoomAroundMouse(s, e)
                    : (!c._lastWheel || qp() - c._lastWheel > 300) &&
                      ((c._lastWheel = qp()), c.zoomAroundMouse(s, e));
              } else c.showWarning("wheel");
          }),
          Pp(Sp(c), "showWarning", function (e) {
            (c.state.showWarning && c.state.warningType === e) ||
              c.setState({ showWarning: !0, warningType: e }),
              c._warningClearTimeout &&
                window.clearTimeout(c._warningClearTimeout),
              (c._warningClearTimeout = window.setTimeout(c.clearWarning, 300));
          }),
          Pp(Sp(c), "clearWarning", function () {
            c.state.showWarning && c.setState({ showWarning: !1 });
          }),
          Pp(Sp(c), "zoomAroundMouse", function (e, t) {
            if (c._containerRef) {
              var n = c.state.zoom,
                r = c.props,
                i = r.minZoom,
                o = r.maxZoom,
                s = r.zoomSnap;
              if (
                ((c._mousePosition = Vp(c._containerRef, t)),
                !(
                  !c._mousePosition ||
                  (n === i && e < 0) ||
                  (n === o && e > 0)
                ))
              ) {
                var a = c.pixelToLatLng(c._mousePosition),
                  u = n + e;
                s && (u = e < 0 ? Math.floor(u) : Math.ceil(u)),
                  (u = Math.max(i, Math.min(u, o))),
                  c.setCenterZoomTarget(null, u, !1, a);
              }
            }
          }),
          Pp(Sp(c), "zoomPlusDelta", function () {
            return c.state.zoom + c.state.zoomDelta;
          }),
          Pp(Sp(c), "pixelToLatLng", function (e, t, n) {
            void 0 === t && (t = c.state.center),
              void 0 === n && (n = c.zoomPlusDelta());
            var r = c.state,
              i = r.width,
              o = r.height,
              s = r.pixelDelta,
              a = [
                (e[0] - i / 2 - (s ? s[0] : 0)) / 256,
                (e[1] - o / 2 - (s ? s[1] : 0)) / 256,
              ],
              u = Np(t[1], n) + a[0],
              l = jp(t[0], n) + a[1];
            return [
              Math.max($p[0], Math.min($p[1], Ip(l, n))),
              Math.max($p[2], Math.min($p[3], Lp(u, n))),
            ];
          }),
          Pp(Sp(c), "latLngToPixel", function (e, t, n) {
            void 0 === t && (t = c.state.center),
              void 0 === n && (n = c.zoomPlusDelta());
            var r = c.state,
              i = r.width,
              o = r.height,
              s = r.pixelDelta,
              a = Np(t[1], n),
              u = jp(t[0], n),
              l = Np(e[1], n),
              d = jp(e[0], n);
            return [
              256 * (l - a) + i / 2 + (s ? s[0] : 0),
              256 * (d - u) + o / 2 + (s ? s[1] : 0),
            ];
          }),
          Pp(Sp(c), "calculateZoomCenter", function (e, t, n, r) {
            var i = c.state,
              o = i.width,
              s = i.height,
              a = c.latLngToPixel(t, e, n),
              u = c.latLngToPixel(t, e, r),
              l = c.pixelToLatLng(
                [o / 2 + u[0] - a[0], s / 2 + u[1] - a[1]],
                e,
                r
              );
            return c.limitCenterAtZoom(l, r);
          }),
          Pp(Sp(c), "setRef", function (e) {
            c._containerRef = e;
          }),
          (c.syncToProps =
            ((d = c.syncToProps),
            60,
            function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              var r = this;
              clearTimeout(h),
                (h = setTimeout(function () {
                  return d.apply(r, t);
                }, 60));
            })),
          (c._lastZoom =
            null !==
              (n = null !== (r = t.defaultZoom) && void 0 !== r ? r : t.zoom) &&
            void 0 !== n
              ? n
              : 14),
          (c._lastCenter =
            null !==
              (i =
                null !== (o = t.defaultCenter) && void 0 !== o
                  ? o
                  : t.center) && void 0 !== i
              ? i
              : [0, 0]),
          (c.state = {
            zoom: c._lastZoom,
            center: c._lastCenter,
            width:
              null !==
                (s =
                  null !== (a = t.width) && void 0 !== a
                    ? a
                    : t.defaultWidth) && void 0 !== s
                ? s
                : -1,
            height:
              null !==
                (u =
                  null !== (l = t.height) && void 0 !== l
                    ? l
                    : t.defaultHeight) && void 0 !== u
                ? u
                : -1,
            zoomDelta: 0,
            pixelDelta: void 0,
            oldTiles: [],
            showWarning: !1,
            warningType: void 0,
          }),
          c
        );
      }
      (r = e),
        ((t = i).prototype = Object.create(r.prototype)),
        (t.prototype.constructor = t),
        Tp(t, r);
      var o = i.prototype;
      return (
        (o.componentDidMount = function () {
          var e = this;
          this.props.mouseEvents && this.bindMouseEvents(),
            this.props.touchEvents && this.bindTouchEvents(),
            (this.props.width && this.props.height) ||
              (this.updateWidthHeight() || Up(this.updateWidthHeight),
              this.bindResizeEvent()),
            this.bindWheelEvent(),
            this.syncToProps(),
            void 0 !== window.ResizeObserver &&
              ((this._resizeObserver = new window.ResizeObserver(function () {
                e.updateWidthHeight();
              })),
              this._resizeObserver.observe(this._containerRef));
        }),
        (o.componentWillUnmount = function () {
          this.props.mouseEvents && this.unbindMouseEvents(),
            this.props.touchEvents && this.unbindTouchEvents(),
            this.unbindWheelEvent(),
            (this.props.width && this.props.height) || this.unbindResizeEvent(),
            this._resizeObserver && this._resizeObserver.disconnect();
        }),
        (o.componentDidUpdate = function (e) {
          var t;
          if (
            (this.props.mouseEvents !== e.mouseEvents &&
              (this.props.mouseEvents
                ? this.bindMouseEvents()
                : this.unbindMouseEvents()),
            this.props.touchEvents !== e.touchEvents &&
              (this.props.touchEvents
                ? this.bindTouchEvents()
                : this.unbindTouchEvents()),
            this.props.width &&
              this.props.width !== e.width &&
              this.setState({ width: this.props.width }),
            this.props.height &&
              this.props.height !== e.height &&
              this.setState({ height: this.props.height }),
            (this.props.center || this.props.zoom) &&
              ((this.props.center &&
                (this.props.center[0] !==
                  (null == e || null === (t = e.center) || void 0 === t
                    ? void 0
                    : t[0]) ||
                  this.props.center[1] !== e.center[1])) ||
                this.props.zoom !== e.zoom))
          ) {
            var n = this._isAnimating ? this._centerTarget : this.state.center,
              r = this._isAnimating ? this._zoomTarget : this.state.zoom;
            if (n && r) {
              var i,
                o,
                s = null !== (i = this.props.center) && void 0 !== i ? i : n,
                a = null !== (o = this.props.zoom) && void 0 !== o ? o : r;
              (Math.abs(a - r) > 0.001 ||
                Math.abs(s[0] - n[0]) > 1e-4 ||
                Math.abs(s[1] - n[1]) > 1e-4) &&
                this.setCenterZoomTarget(s, a, !0);
            }
          }
        }),
        (o.coordsInside = function (e) {
          var t = this.state,
            n = t.width,
            r = t.height;
          if (e[0] < 0 || e[1] < 0 || e[0] >= n || e[1] >= r) return !1;
          var i = this._containerRef;
          if (i) {
            var o = Op(i),
              s = document.elementFromPoint(e[0] + o.x, e[1] + o.y);
            return i === s || i.contains(s);
          }
          return !1;
        }),
        (o.tileValues = function (e) {
          var t = e.center,
            n = e.zoom,
            r = e.pixelDelta,
            i = e.zoomDelta,
            o = e.width,
            s = e.height,
            a = Math.round(n + (i || 0)),
            u = n + (i || 0) - a,
            l = Math.pow(2, u),
            c = o / l,
            d = s / l,
            h = Np(t[1], a) - (r ? r[0] / 256 / l : 0),
            p = jp(t[0], a) - (r ? r[1] / 256 / l : 0),
            m = c / 2 / 256,
            f = d / 2 / 256;
          return {
            tileMinX: Math.floor(h - m),
            tileMaxX: Math.floor(h + m),
            tileMinY: Math.floor(p - f),
            tileMaxY: Math.floor(p + f),
            tileCenterX: h,
            tileCenterY: p,
            roundedZoom: a,
            zoomDelta: i || 0,
            scaleWidth: c,
            scaleHeight: d,
            scale: l,
          };
        }),
        (o.renderTiles = function () {
          for (
            var e = this,
              t = this.state,
              r = t.oldTiles,
              i = t.width,
              o = t.height,
              s = this.props.dprs,
              a = this.props.provider || _p,
              u = this.tileValues(this.state),
              l = u.tileMinX,
              c = u.tileMaxX,
              d = u.tileMinY,
              h = u.tileMaxY,
              p = u.tileCenterX,
              m = u.tileCenterY,
              f = u.roundedZoom,
              g = u.scaleWidth,
              v = u.scaleHeight,
              y = u.scale,
              b = [],
              C = 0;
            C < r.length;
            C++
          ) {
            var D = r[C],
              w = D.roundedZoom - f;
            if (!(Math.abs(w) > 4 || 0 === w))
              for (
                var E = 1 / Math.pow(2, w),
                  A = 256 * -(l - D.tileMinX * E),
                  B = 256 * -(d - D.tileMinY * E),
                  x = Math.max(D.tileMinX, 0),
                  k = Math.max(D.tileMinY, 0),
                  F = Math.min(D.tileMaxX, Math.pow(2, D.roundedZoom) - 1),
                  P = Math.min(D.tileMaxY, Math.pow(2, D.roundedZoom) - 1),
                  T = x;
                T <= F;
                T++
              )
                for (var S = k; S <= P; S++)
                  b.push({
                    key: T + "-" + S + "-" + D.roundedZoom,
                    url: a(T, S, D.roundedZoom),
                    srcSet: Zp(s, a, T, S, D.roundedZoom),
                    left: A + 256 * (T - D.tileMinX) * E,
                    top: B + 256 * (S - D.tileMinY) * E,
                    width: 256 * E,
                    height: 256 * E,
                    active: !1,
                  });
          }
          for (
            var M = Math.max(l, 0),
              O = Math.max(d, 0),
              _ = Math.min(c, Math.pow(2, f) - 1),
              R = Math.min(h, Math.pow(2, f) - 1),
              N = M;
            N <= _;
            N++
          )
            for (var j = O; j <= R; j++)
              b.push({
                key: N + "-" + j + "-" + f,
                url: a(N, j, f),
                srcSet: Zp(s, a, N, j, f),
                left: 256 * (N - l),
                top: 256 * (j - d),
                width: 256,
                height: 256,
                active: !0,
              });
          var L = {
              width: g,
              height: v,
              position: "absolute",
              top: "calc((100% - " + o + "px) / 2)",
              left: "calc((100% - " + i + "px) / 2)",
              overflow: "hidden",
              willChange: "transform",
              transform: "scale(" + y + ", " + y + ")",
              transformOrigin: "top left",
            },
            I = this.props.boxClassname || "pigeon-tiles-box",
            V = {
              position: "absolute",
              width: 256 * (c - l + 1),
              height: 256 * (h - d + 1),
              willChange: "transform",
              transform:
                "translate(" +
                -(256 * (p - l) - g / 2) +
                "px, " +
                -(256 * (m - d) - v / 2) +
                "px)",
            },
            z = this.props.tileComponent;
          return n().createElement(
            "div",
            { style: L, className: I },
            n().createElement(
              "div",
              { className: "pigeon-tiles", style: V },
              b.map(function (t) {
                return n().createElement(z, {
                  key: t.key,
                  tile: t,
                  tileLoaded: function () {
                    return e.tileLoaded(t.key);
                  },
                });
              })
            )
          );
        }),
        (o.renderOverlays = function () {
          var e = this,
            t = this.state,
            r = t.width,
            i = t.height,
            o = t.center,
            s = {
              bounds: this.getBounds(),
              zoom: this.zoomPlusDelta(),
              center: o,
              width: r,
              height: i,
            },
            a = n().Children.map(this.props.children, function (t) {
              if (!t) return null;
              if (!n().isValidElement(t)) return t;
              var r = t.props,
                i = r.anchor,
                a = r.position,
                u = r.offset,
                l = e.latLngToPixel(i || a || o);
              return n().cloneElement(t, {
                left: l[0] - (u ? u[0] : 0),
                top: l[1] - (u ? u[1] : 0),
                latLngToPixel: e.latLngToPixel,
                pixelToLatLng: e.pixelToLatLng,
                setCenterZoom: e.setCenterZoomForChildren,
                mapProps: e.props,
                mapState: s,
              });
            }),
            u = {
              position: "absolute",
              width: r,
              height: i,
              top: "calc((100% - " + i + "px) / 2)",
              left: "calc((100% - " + r + "px) / 2)",
            };
          return n().createElement(
            "div",
            { className: "pigeon-overlays", style: u },
            a
          );
        }),
        (o.renderAttribution = function () {
          var e = this.props,
            t = e.attribution,
            r = e.attributionPrefix;
          if (!1 === t) return null;
          var i = { color: "#0078A8", textDecoration: "none" };
          return n().createElement(
            "div",
            {
              key: "attr",
              className: "pigeon-attribution",
              style: {
                position: "absolute",
                bottom: 0,
                right: 0,
                fontSize: "11px",
                padding: "2px 5px",
                background: "rgba(255, 255, 255, 0.7)",
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                color: "#333",
              },
            },
            !1 === r
              ? null
              : n().createElement(
                  "span",
                  null,
                  r ||
                    n().createElement(
                      "a",
                      {
                        href: "https://pigeon-maps.js.org/",
                        style: i,
                        target: "_blank",
                        rel: "noreferrer noopener",
                      },
                      "Pigeon"
                    ),
                  " | "
                ),
            t ||
              n().createElement(
                "span",
                null,
                " © ",
                n().createElement(
                  "a",
                  {
                    href: "https://www.openstreetmap.org/copyright",
                    style: i,
                    target: "_blank",
                    rel: "noreferrer noopener",
                  },
                  "OpenStreetMap"
                ),
                " contributors"
              )
          );
        }),
        (o.renderWarning = function () {
          var e = this.props,
            t = e.metaWheelZoom,
            r = e.metaWheelZoomWarning,
            i = e.twoFingerDrag,
            o = e.twoFingerDragWarning,
            s = e.warningZIndex,
            a = this.state,
            u = a.showWarning,
            l = a.warningType,
            c = a.width,
            d = a.height;
          if ((t && r) || (i && o)) {
            var h = {
                position: "absolute",
                top: 0,
                left: 0,
                width: c,
                height: d,
                overflow: "hidden",
                pointerEvents: "none",
                opacity: u ? 100 : 0,
                transition: "opacity 300ms",
                background: "rgba(0,0,0,0.5)",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 22,
                fontFamily: '"Arial", sans-serif',
                textAlign: "center",
                zIndex: s,
              },
              p =
                "undefined" != typeof window &&
                window.navigator &&
                window.navigator.platform.toUpperCase().indexOf("MAC") >= 0
                  ? "⌘"
                  : "ctrl",
              m = "fingers" === l ? o : r;
            return n().createElement(
              "div",
              { className: "pigeon-overlay-warning", style: h },
              m.replace("META", p)
            );
          }
          return null;
        }),
        (o.render = function () {
          var e = this.props,
            t = e.touchEvents,
            r = e.twoFingerDrag,
            i = this.state,
            o = i.width,
            s = i.height,
            a = {
              width: this.props.width ? o : "100%",
              height: this.props.height ? s : "100%",
              position: "relative",
              display: "inline-block",
              overflow: "hidden",
              background: "#dddddd",
              touchAction: t ? (r ? "pan-x pan-y" : "none") : "auto",
            },
            u = !(!o || !s);
          return n().createElement(
            "div",
            { style: a, ref: this.setRef, dir: "ltr" },
            u && this.renderTiles(),
            u && this.renderOverlays(),
            u && this.renderAttribution(),
            u && this.renderWarning()
          );
        }),
        i
      );
    })(e.Component);
    function Gp(t) {
      var r =
          void 0 !== t.width
            ? t.width
            : void 0 !== t.height
            ? (29 * t.height) / 34
            : 29,
        i =
          void 0 !== t.height
            ? t.height
            : void 0 !== t.width
            ? (34 * t.width) / 29
            : 34,
        o = (0, e.useState)(t.hover || !1),
        s = o[0],
        a = o[1],
        u = void 0 === t.hover ? s : t.hover,
        l = t.color || "#93C0D0",
        c = function (e) {
          return { event: e, anchor: t.anchor, payload: t.payload };
        };
      return n().createElement(
        "div",
        {
          style: Fp(
            {
              position: "absolute",
              transform:
                "translate(" +
                (t.left - r / 2) +
                "px, " +
                (t.top - (i - 1)) +
                "px)",
              filter: u ? "drop-shadow(0 0 4px rgba(0, 0, 0, .3))" : "",
              pointerEvents: "none",
              cursor: "pointer",
            },
            t.style || {}
          ),
          className: t.className
            ? t.className + " pigeon-click-block"
            : "pigeon-click-block",
          onClick: t.onClick
            ? function (e) {
                return t.onClick(c(e));
              }
            : null,
          onContextMenu: t.onContextMenu
            ? function (e) {
                return t.onContextMenu(c(e));
              }
            : null,
          onMouseOver: function (e) {
            t.onMouseOver && t.onMouseOver(c(e)), a(!0);
          },
          onMouseOut: function (e) {
            t.onMouseOut && t.onMouseOut(c(e)), a(!1);
          },
        },
        t.children ||
          n().createElement(
            "svg",
            {
              width: r,
              height: i,
              viewBox: "0 0 61 71",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n().createElement(
              "g",
              { style: { pointerEvents: "auto" } },
              n().createElement("path", {
                d: "M52 31.5C52 36.8395 49.18 42.314 45.0107 47.6094C40.8672 52.872 35.619 57.678 31.1763 61.6922C30.7916 62.0398 30.2084 62.0398 29.8237 61.6922C25.381 57.678 20.1328 52.872 15.9893 47.6094C11.82 42.314 9 36.8395 9 31.5C9 18.5709 18.6801 9 30.5 9C42.3199 9 52 18.5709 52 31.5Z",
                fill: l,
                stroke: "white",
                strokeWidth: "4",
              }),
              n().createElement("circle", {
                cx: "30.5",
                cy: "30.5",
                r: "8.5",
                fill: "white",
                opacity: u ? 0.98 : 0.6,
              })
            )
          )
      );
    }
    Pp(Yp, "defaultProps", {
      animate: !0,
      metaWheelZoom: !1,
      metaWheelZoomWarning: "Use META + wheel to zoom!",
      twoFingerDrag: !1,
      twoFingerDragWarning: "Use two fingers to move the map",
      zoomSnap: !0,
      mouseEvents: !0,
      touchEvents: !0,
      warningZIndex: 100,
      animateMaxScreens: 5,
      minZoom: 1,
      maxZoom: 18,
      limitBounds: "center",
      dprs: [],
      tileComponent: function (e) {
        var t = e.tile,
          r = e.tileLoaded;
        return n().createElement("img", {
          src: t.url,
          srcSet: t.srcSet,
          width: t.width,
          height: t.height,
          loading: "lazy",
          onLoad: r,
          alt: "",
          style: {
            position: "absolute",
            left: t.left,
            top: t.top,
            willChange: "transform",
            transformOrigin: "top left",
            opacity: 1,
          },
        });
      },
    });
    var Xp = { position: "absolute", top: 10, left: 10 },
      Kp = {
        width: 28,
        height: 28,
        borderRadius: 2,
        boxShadow: "0 1px 4px -1px rgba(0,0,0,.3)",
        background: "white",
        lineHeight: "26px",
        fontSize: "20px",
        fontWeight: 700,
        color: "#666",
        marginBottom: 1,
        cursor: "pointer",
        border: "none",
        display: "block",
        outline: "none",
      };
    function Jp(e) {
      var t = e.style,
        r = e.buttonStyle,
        i = e.setCenterZoom,
        o = e.mapState,
        s = e.mapProps;
      return n().createElement(
        "div",
        {
          className: "pigeon-zoom-buttons pigeon-drag-block",
          style: t ? Fp(Fp({}, Xp), t) : Xp,
        },
        n().createElement(
          "button",
          {
            className: "pigeon-zoom-in",
            type: "button",
            style: r ? Fp(Fp({}, Kp), r) : Kp,
            onClick: function () {
              return i(o.center, Math.min(o.zoom + 1, s.maxZoom));
            },
          },
          "+"
        ),
        n().createElement(
          "button",
          {
            className: "pigeon-zoom-out",
            type: "button",
            style: r ? Fp(Fp({}, Kp), r) : Kp,
            onClick: function () {
              return i(o.center, Math.max(o.zoom - 1, s.minZoom));
            },
          },
          "–"
        )
      );
    }
    const Qp = Mi("MapPin", [
        [
          "path",
          {
            d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
            key: "2oe9fu",
          },
        ],
        ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
      ]),
      em = Mi("Map", [
        [
          "polygon",
          { points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21", key: "ok2ie8" },
        ],
        ["line", { x1: "9", x2: "9", y1: "3", y2: "18", key: "w34qz5" }],
        ["line", { x1: "15", x2: "15", y1: "6", y2: "21", key: "volv9a" }],
      ]),
      tm = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
      nm = Vt;
    const rm =
      ((im =
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none ring-offset-background"),
      (om = {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive:
              "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline:
              "border-2  border-muted-foreground hover:bg-accent hover:text-accent-foreground",
            secondary:
              "bg-secondary  border-foreground dark:border-muted-foreground border-2 text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "underline-offset-4 hover:underline text-primary",
          },
          size: {
            default: "h-10 py-2 px-4",
            xs: "h-7 px-2 rounded-md",
            sm: "h-9 px-3 rounded-md",
            lg: "h-11 px-8 rounded-md",
          },
        },
        defaultVariants: { variant: "default", size: "default" },
      }),
      (e) => {
        var t;
        if (null == (null == om ? void 0 : om.variants))
          return nm(
            im,
            null == e ? void 0 : e.class,
            null == e ? void 0 : e.className
          );
        const { variants: n, defaultVariants: r } = om,
          i = Object.keys(n).map((t) => {
            const i = null == e ? void 0 : e[t],
              o = null == r ? void 0 : r[t];
            if (null === i) return null;
            const s = tm(i) || tm(o);
            return n[t][s];
          }),
          o =
            e &&
            Object.entries(e).reduce((e, t) => {
              let [n, r] = t;
              return void 0 === r || (e[n] = r), e;
            }, {}),
          s =
            null == om || null === (t = om.compoundVariants) || void 0 === t
              ? void 0
              : t.reduce((e, t) => {
                  let { class: n, className: i, ...s } = t;
                  return Object.entries(s).every((e) => {
                    let [t, n] = e;
                    return Array.isArray(n)
                      ? n.includes({ ...r, ...o }[t])
                      : { ...r, ...o }[t] === n;
                  })
                    ? [...e, n, i]
                    : e;
                }, []);
        return nm(
          im,
          i,
          s,
          null == e ? void 0 : e.class,
          null == e ? void 0 : e.className
        );
      });
    var im, om;
    const sm = e.forwardRef((t, n) => {
      var { className: r, variant: i, size: o } = t,
        s = (function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        })(t, ["className", "variant", "size"]);
      return e.createElement(
        "button",
        Object.assign(
          { className: Pn(rm({ variant: i, size: o, className: r })), ref: n },
          s
        )
      );
    });
    sm.displayName = "Button";
    const am = (t) => {
        const { element: r } = t,
          { theme: i, resolvedTheme: o } =
            null !== (s = (0, e.useContext)(Bp)) && void 0 !== s ? s : xp;
        var s;
        const a = "dark" === ("system" === i ? o : i),
          u =
            ("EeJqZWmMwWuKBDTgCto5",
            void 0 === (l = a ? "streets-v2-dark" : "streets-v2") &&
              (l = "streets"),
            function (e, t, n, r) {
              return (
                void 0 === r && (r = 1),
                "https://api.maptiler.com/maps/" +
                  l +
                  "/256/" +
                  n +
                  "/" +
                  e +
                  "/" +
                  t +
                  (r >= 2 ? "@2x" : "") +
                  ".png?key=EeJqZWmMwWuKBDTgCto5"
              );
            });
        var l;
        const [c, d] = (0, e.useState)(r.zoom || 11);
        return n().createElement(
          "div",
          { className: ` mb-5 mt-5 flex justify-${r.align}` },
          n().createElement(
            "div",
            {
              className: "group relative  rounded-md",
              tabIndex: -1,
              style: {
                overflow: "hidden",
                width: r.width,
                maxWidth: 710,
                height: r.height,
              },
              "data-id": r.id,
            },
            n().createElement(
              Yp,
              {
                provider: u,
                dprs: [1, 2],
                center: r.latLng,
                zoom: c,
                attribution: !1,
                onBoundsChanged: ({ zoom: e }) => {
                  d(e);
                },
                metaWheelZoom: !0,
              },
              n().createElement(Jp, null),
              n().createElement(
                Gp,
                { offset: [10, 15], anchor: r.latLng },
                n().createElement(Qp, {
                  size: 50,
                  className:
                    "fill-white stroke-brand dark:fill-brand dark:stroke-white",
                  strokeWidth: 1.5,
                })
              ),
              n().createElement(
                "a",
                {
                  href: "https://www.maptiler.com/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "absolute bottom-0 left-0",
                },
                n().createElement("img", {
                  src: `/images/maptiler-logo${a ? "-white" : ""}.png`,
                  width: 100,
                  height: 40,
                  alt: "map tiler",
                })
              ),
              n().createElement(
                "a",
                {
                  href: `https://www.google.com/maps/?q=${r.latLng[0]},${r.latLng[1]}`,
                  target: "_blank",
                },
                n().createElement(
                  sm,
                  {
                    variant: "outline",
                    className:
                      "z-100 absolute bottom-2 right-2 h-[32px] w-[32px] border bg-accent p-0 ",
                    size: "xs",
                  },
                  n().createElement(em, { className: "w-5" })
                )
              )
            )
          )
        );
      },
      um = ({ src: e }) =>
        n().createElement(
          "div",
          {
            className:
              "relative h-[410px] w-[360px] overflow-y-auto px-6 sm:w-[610px]",
          },
          n().createElement(hm, { widgetId: e })
        ),
      lm = (e, t, r = !1) =>
        e &&
        e.map((i, o) => {
          if (yt.isText(i)) {
            let e = i,
              t =
                "" !== e.text
                  ? n().createElement("span", { key: o }, e.text)
                  : " ";
            return (
              e.bold && (t = n().createElement("b", { key: o }, t)),
              e.italic && (t = n().createElement("i", { key: o }, t)),
              e.underline && (t = n().createElement("u", { key: o }, t)),
              e.strikethrough && (t = n().createElement("del", { key: o }, t)),
              t
            );
          }
          if ("children" in i)
            return ((e, t, r, i, o, s, a) => {
              switch (e.type) {
                case "paragraph":
                  return n().createElement(
                    "p",
                    {
                      className: Pn(
                        `pt-3 leading-7 text-${
                          jt[e.align] || e.align
                        }\n            ${s}\n  \n            ${
                          "font-mono" === s ? "text-sm leading-6" : ""
                        }\n            dark:text-gray-200\n            `
                      ),
                      key: r,
                    },
                    t
                  );
                case "heading-one":
                  return n().createElement(
                    "h1",
                    {
                      className: `mt-3 pb-4   text-4xl font-bold lg:text-5xl text-${
                        jt[e.align] || e.align
                      }\n              ${s}\n              dark:text-gray-200\n              `,
                      key: r,
                    },
                    t
                  );
                case "heading-two":
                  return n().createElement(
                    "h2",
                    {
                      className: `mt-3  text-2xl font-bold lg:text-3xl text-${
                        jt[e.align] || e.align
                      }\n              ${s}\n              dark:text-gray-200\n              `,
                      key: r,
                    },
                    t
                  );
                case "heading-three":
                  return n().createElement(
                    "h3",
                    {
                      className: `mt-3 text-xl font-bold  lg:text-2xl text-${
                        jt[e.align] || e.align
                      }\n              ${s}\n              dark:text-gray-200\n              `,
                      key: r,
                    },
                    t
                  );
                case "map":
                  return n().createElement(am, { element: e });
                case "block-quote":
                  return n().createElement(
                    "blockquote",
                    {
                      className: `text-red  relative mb-3  ml-3 mt-4 border-l-4 border-gray-400 pl-4 text-gray-500 dark:text-gray-200\n              ${s}\n            `,
                    },
                    t
                  );
                case "tts":
                  return n().createElement(
                    Ap,
                    { node: e, key: r, index: i, nodes: o },
                    t
                  );
                case "image":
                  return n().createElement(
                    "div",
                    { className: `relative flex justify-${e.align} mt-3` },
                    n().createElement("img", {
                      src: e.url,
                      width: e.width,
                      height: e.height,
                      className: "rounded-md shadow-md",
                    }),
                    e.audioPoint &&
                      e.audioPoint.map((e, t) =>
                        n().createElement(
                          "div",
                          {
                            key: t,
                            className: "absolute",
                            style: { left: `${e.x}%`, top: `${e.y}%` },
                          },
                          n().createElement(
                            Sd,
                            null,
                            n().createElement(
                              Md,
                              null,
                              n().createElement(
                                "button",
                                {
                                  className:
                                    "beacon  flex h-[24px] w-[24px] items-center justify-center  rounded-full border-2 border-white shadow-lg ring-1 ring-gray-400",
                                },
                                n().createElement("div", {
                                  className:
                                    "h-[12px] w-[12px] rounded-full border border-gray-400 bg-white",
                                })
                              )
                            ),
                            e.label &&
                              n().createElement(
                                Rd,
                                {
                                  className:
                                    "max-h-[500px]  max-w-[380px] border  border-accent bg-white px-1 text-foreground dark:bg-[#191919] sm:max-w-[620px]",
                                },
                                n().createElement(
                                  Nd,
                                  { className: "px-6 pb-6 text-3xl" },
                                  e.label
                                ),
                                e.link && n().createElement(um, { src: e.link })
                              )
                          )
                        )
                      )
                  );
                default:
                  return n().createElement("div", null);
              }
            })(i, lm(i.children, t, r), i.id ? i.id : o, o, e, t);
        }),
      cm = Dp.svg`
  z-index: 2;
`,
      dm = function ({
        strokeColor: e = "stroke-gray-400 dark:stroke-white",
        width: t = 20,
        height: r = 20,
      }) {
        return n().createElement(
          cm,
          {
            viewBox: "0 0 50 50",
            className: "animate-rotate",
            width: t,
            height: r,
          },
          n().createElement("circle", {
            className: `animate-dash ${e}`,
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none",
            strokeWidth: "5",
          })
        );
      },
      hm = ({ widgetId: t }) => {
        const [r, i] = (0, e.useState)(null),
          [o, a] = (0, e.useState)(!0),
          [u, l] = (0, e.useState)({
            brandColor: "#0E78EF",
            accentColor: "#e9e9e9",
          }),
          [c, d] = (0, e.useState)("font-sans");
        return (
          (0, e.useEffect)(() => {
            fetch(`http://localhost:3000/api/widget?id=${t}`)
              .then((e) => e.json())
              .then((e) => {
                console.log(JSON.parse(e.workspace.slate_value));
                const t = JSON.parse(e.workspace.slate_value);
                l({
                  brandColor: e.workspace.brand_color,
                  accentColor: "#e9e9e9",
                }),
                  i(t),
                  a(!1),
                  d(e.workspace.font_style);
              })
              .catch((e) => {
                console.error("There was an error!", e);
              });
          }, [t]),
          r
            ? n().createElement(
                gp,
                { theme: u },
                n().createElement(
                  s,
                  null,
                  n().createElement(
                    "div",
                    { className: "published" },
                    n().createElement(
                      "div",
                      {
                        className:
                          "relative  overflow-y-auto bg-white  dark:bg-[#191919] ",
                      },
                      n().createElement(
                        "div",
                        { className: " relative mx-auto mb-4 max-w-[580px]" },
                        lm(r, c)
                      )
                    ),
                    n().createElement("div", {
                      className:
                        "fixed right-4 top-4  z-10  hidden gap-2 xl:flex",
                    })
                  )
                )
              )
            : n().createElement(
                "div",
                {
                  className:
                    "absolute inset-0 flex -translate-y-[30px] items-center justify-center",
                },
                n().createElement(dm, {
                  width: 50,
                  height: 50,
                  strokeColor: "stroke-blue-500 dark:stroke-white",
                })
              )
        );
      };
  })(),
    (Embed = o);
})();
