"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var app = function () {
  "use strict";

  function t() {}

  function e(t, e) {
    for (var n in e) {
      t[n] = e[n];
    }

    return t;
  }

  function n(t) {
    t();
  }

  function i(t, e) {
    t.appendChild(e);
  }

  function r(t, e, n) {
    t.insertBefore(e, n);
  }

  function s(t) {
    t.parentNode.removeChild(t);
  }

  function a(t) {
    return document.createElement(t);
  }

  function o(t) {
    return document.createTextNode(t);
  }

  function l(t, e, n, i) {
    t.addEventListener(e, n, i);
  }

  function c(t, e, n, i) {
    t.removeEventListener(e, n, i);
  }

  function h(t, e, n) {
    null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
  }

  function u() {
    return Object.create(null);
  }

  function f(t) {
    for (; t && t.length;) {
      t.shift()();
    }
  }

  var g = {
    destroy: function destroy(e) {
      this.destroy = t, this.fire("destroy"), this.set = t, this._fragment.d(!1 !== e), this._fragment = null, this._state = {};
    },
    get: function get() {
      return this._state;
    },
    fire: function fire(t, e) {
      var n = t in this._handlers && this._handlers[t].slice();

      if (n) for (var i = 0; i < n.length; i += 1) {
        var r = n[i];
        if (!r.__calling) try {
          r.__calling = !0, r.call(this, e);
        } finally {
          r.__calling = !1;
        }
      }
    },
    on: function on(t, e) {
      var n = this._handlers[t] || (this._handlers[t] = []);
      return n.push(e), {
        cancel: function cancel() {
          var t = n.indexOf(e);
          ~t && n.splice(t, 1);
        }
      };
    },
    set: function set(t) {
      var n;
      this._set(e({}, t)), this.root._lock || ((n = this.root)._lock = !0, f(n._beforecreate), f(n._oncreate), f(n._aftercreate), n._lock = !1);
    },
    _recompute: t,
    _set: function _set(t) {
      var n = this._state,
          i = {},
          r = !1;

      for (var s in t = e(this._staged, t), this._staged = {}, t) {
        this._differs(t[s], n[s]) && (i[s] = r = !0);
      }

      r && (this._state = e(e({}, n), t), this._recompute(i, this._state), this._bind && this._bind(i, this._state), this._fragment && (this.fire("state", {
        changed: i,
        current: this._state,
        previous: n
      }), this._fragment.p(i, this._state), this.fire("update", {
        changed: i,
        current: this._state,
        previous: n
      })));
    },
    _stage: function _stage(t) {
      e(this._staged, t);
    },
    _mount: function _mount(t, e) {
      this._fragment[this._fragment.i ? "i" : "m"](t, e || null);
    },
    _differs: function _differs(t, e) {
      return t != t ? e == e : t !== e || t && "object" == _typeof(t) || "function" == typeof t;
    }
  };
  var _ = {
    processFiles: function processFiles(t) {
      console.info(t), this.renderImage(t[0]);
    },
    getLink: function getLink(t) {
      this.getSize(this.get().imageUrl);
    },
    renderImage: function renderImage(t) {
      var e = this,
          n = new FileReader();
      n.onload = function (t) {
        var n = t.target.result;
        e.getSize(n);
      }, n.readAsDataURL(t);
    },
    getSize: function getSize(t) {
      var e = new Image(),
          n = this;
      e.onload = function () {
        var e = this.width,
            i = this.height;
        n.pushImage(t, e, i);
      }, e.onerror = function () {
        alert("упс. что-то пошло не так. Проверьте правильность ссылки");
      }, e.src = t;
    },
    pushImage: function pushImage(t, e, n) {
      var i = this.get().images,
          r = {
        src: "".concat(t),
        width: e,
        height: n
      };
      i.push(r), this.set({
        images: i
      });
    }
  };

  function m(t, e, n) {
    var i = Object.create(t);
    return i.image = e[n], i;
  }

  function d(t, e) {
    var n, o, l;
    return {
      c: function c() {
        n = a("div"), (o = a("img")).src = l = e.image.src, o.alt = "", o.className = "gallery__image svelte-106l634", n.className = "gallery__image-wrapper svelte-106l634";
      },
      m: function m(t, e) {
        r(t, n, e), i(n, o);
      },
      p: function p(t, e) {
        t.images && l !== (l = e.image.src) && (o.src = l);
      },
      d: function d(t) {
        t && s(n);
      }
    };
  }

  function p(t) {
    !function (t, e) {
      t._handlers = u(), t._slots = u(), t._bind = e._bind, t._staged = {}, t.options = e, t.root = e.root || t, t.store = e.store || t.root.store, e.root || (t._beforecreate = [], t._oncreate = [], t._aftercreate = []);
    }(this, t), this._state = e({
      images: [],
      imageUrl: ""
    }, t.data), this._intro = !!t.intro, this._fragment = function (t, e) {
      var u,
          f,
          g,
          _,
          p,
          v,
          y,
          b,
          N,
          w,
          U,
          k = !1;

      function I(e) {
        t.processFiles(this.files);
      }

      function L() {
        k = !0, t.set({
          imageUrl: b.value
        }), k = !1;
      }

      function x(e) {
        t.getLink();
      }

      for (var C = e.images, j = [], z = 0; z < C.length; z += 1) {
        j[z] = d(0, m(e, C, z));
      }

      return {
        c: function c() {
          u = a("div"), (f = a("p")).textContent = "Вы можете загрузить картинку или даже несколько с вашего компьютера", g = o("\r\n\r\n    "), _ = a("input"), p = o("\r\n\r\n    "), (v = a("p")).textContent = "или добавьте ссылку на сторонний ресурс(после добавления ссылки, нажмите enter)", y = o("\r\n    "), b = a("input"), N = o("\r\n\r\n"), w = a("div");

          for (var t = 0; t < j.length; t += 1) {
            j[t].c();
          }

          l(_, "change", I), h(_, "type", "file"), _.multiple = !0, _.placeholder = "Загрузите файл с вашего компьютера", _.className = "svelte-106l634", l(b, "input", L), l(b, "change", x), h(b, "type", "url"), b.placeholder = "укажите ссылку на файл", b.className = "svelte-106l634", u.className = "content", w.className = "gallery svelte-106l634";
        },
        m: function m(t, n) {
          r(t, u, n), i(u, f), i(u, g), i(u, _), i(u, p), i(u, v), i(u, y), i(u, b), b.value = e.imageUrl, r(t, N, n), r(t, w, n);

          for (var s = 0; s < j.length; s += 1) {
            j[s].m(w, null);
          }

          U = !0;
        },
        p: function p(t, e) {
          if (!k && t.imageUrl && (b.value = e.imageUrl), t.images) {
            C = e.images;

            for (var n = 0; n < C.length; n += 1) {
              var _i = m(e, C, n);

              j[n] ? j[n].p(t, _i) : (j[n] = d(0, _i), j[n].c(), j[n].m(w, null));
            }

            for (; n < j.length; n += 1) {
              j[n].d(1);
            }

            j.length = C.length;
          }
        },
        i: function i(t, e) {
          U || this.m(t, e);
        },
        o: n,
        d: function d(t) {
          t && s(u), c(_, "change", I), c(b, "input", L), c(b, "change", x), t && (s(N), s(w)), function (t, e) {
            for (var n = 0; n < t.length; n += 1) {
              t[n] && t[n].d(e);
            }
          }(j, t);
        }
      };
    }(this, this._state), t.target && (this._fragment.c(), this._mount(t.target, t.anchor)), this._intro = !0;
  }

  return e(p.prototype, g), e(p.prototype, _), new p({
    target: document.body,
    data: {
      name: "world"
    }
  });
}();