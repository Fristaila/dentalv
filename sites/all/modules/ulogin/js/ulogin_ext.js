"2.0.21";
(function (h, k, p, m) {
  "undefined" == typeof h.easyXDM && function (a, b, c, d, g, f) {
    function h(a, b) {
      var e = typeof a[b];
      return "function" == e || !("object" != e || !a[b]) || "unknown" == e
    }

    function k() {
      if (!A(p.plugins) && "object" == typeof p.plugins["Shockwave Flash"]) {
        var a = p.plugins["Shockwave Flash"].description;
        a && !A(p.mimeTypes) && p.mimeTypes["application/x-shockwave-flash"] && p.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (G = a.match(/\d+/g))
      }
      if (!G) {
        var b;
        try {
          b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), G =
            Array.prototype.slice.call(b.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/), 1)
        } catch (ha) {
        }
      }
      if (!G)return !1;
      a = parseInt(G[0], 10);
      b = parseInt(G[1], 10);
      S = 9 < a && 0 < b;
      return !0
    }

    function m() {
      if (!H) {
        H = !0;
        for (var a = 0; a < M.length; a++)M[a]();
        M.length = 0
      }
    }

    function q(a, b) {
      H ? a.call(b) : M.push(function () {
          a.call(b)
        })
    }

    function ca() {
      var a = parent;
      if ("" !== K)for (var b = 0, c = K.split("."); b < c.length; b++)a = a[c[b]];
      return a.easyXDM
    }

    function r(a) {
      var b = a.toLowerCase().match(N);
      a = b[2];
      var e = b[3], b = b[4] || "";
      if ("http:" == a && ":80" ==
        b || "https:" == a && ":443" == b) b = "";
      return a + "//" + e + b
    }

    function E(a) {
      a = a.replace(da, "$1/");
      if (!a.match(/^(http||https):\/\//)) {
        var b = "/" === a.substring(0, 1) ? "" : c.pathname;
        "/" !== b.substring(b.length - 1) && (b = b.substring(0, b.lastIndexOf("/") + 1));
        a = c.protocol + "//" + c.host + b + a
      }
      for (; V.test(a);)a = a.replace(V, "");
      return a
    }

    function B(a, b) {
      var e = "", c = a.indexOf("#");
      -1 !== c && (e = a.substring(c), a = a.substring(0, c));
      var c = [], d;
      for (d in b)b.hasOwnProperty(d) && c.push(d + "=" + f(b[d]));
      return a + (W ? "#" : -1 == a.indexOf("?") ? "?" : "&") +
        c.join("&") + e
    }

    function A(a) {
      return "undefined" === typeof a
    }

    function t(a, b, c) {
      var e, d;
      for (d in b)b.hasOwnProperty(d) && (d in a ? (e = b[d], "object" === typeof e ? t(a[d], e, c) : c || (a[d] = b[d])) : a[d] = b[d]);
      return a
    }

    function F(a) {
      if (A(O)) {
        var c = b.body.appendChild(b.createElement("form")), e = c.appendChild(b.createElement("input"));
        e.name = y + "TEST" + X;
        O = e !== c.elements[e.name];
        b.body.removeChild(c)
      }
      O ? c = b.createElement('<iframe name="' + a.props.name + '"/>') : (c = b.createElement("IFRAME"), c.name = a.props.name);
      c.id = c.name = a.props.name;
      delete a.props.name;
      "string" == typeof a.container && (a.container = b.getElementById(a.container));
      a.container || (t(c.style, {position: "absolute", top: "-2000px", left: "0px"}), a.container = b.body);
      e = a.props.src;
      a.props.src = "javascript:false";
      t(c, a.props);
      c.border = c.frameBorder = 0;
      c.allowTransparency = !0;
      a.container.appendChild(c);
      a.onLoad && z(c, "load", a.onLoad);
      if (a.usePost) {
        var d = a.container.appendChild(b.createElement("form")), f;
        d.target = c.name;
        d.action = e;
        d.method = "POST";
        if ("object" === typeof a.usePost)for (var g in a.usePost)a.usePost.hasOwnProperty(g) &&
        (O ? f = b.createElement('<input name="' + g + '"/>') : (f = b.createElement("INPUT"), f.name = g), f.value = a.usePost[g], d.appendChild(f));
        d.submit();
        d.parentNode.removeChild(d)
      } else c.src = e;
      a.props.src = e;
      return c
    }

    function Y(e) {
      var d = e.protocol, f;
      e.isHost = e.isHost || A(x.xdm_p);
      W = e.hash || !1;
      e.props || (e.props = {});
      if (e.isHost) e.remote = E(e.remote), e.channel = e.channel || "default" + X++, e.secret = Math.random().toString(16).substring(2), A(d) && (d = r(c.href) == r(e.remote) ? "4" : h(a, "postMessage") || h(b, "postMessage") ? "1" : e.swf && h(a,
            "ActiveXObject") && k() ? "6" : "Gecko" === p.product && "frameElement" in a && -1 == p.userAgent.indexOf("WebKit") ? "5" : e.remoteHelper ? "2" : "0"); else {
        e.channel = x.xdm_c.replace(/["'<>\\]/g, "");
        e.secret = x.xdm_s;
        e.remote = x.xdm_e.replace(/["'<>\\]/g, "");
        var d = x.xdm_p, n;
        if (n = e.acl) {
          a:{
            n = e.acl;
            var g = e.remote;
            "string" == typeof n && (n = [n]);
            for (var w, C = n.length; C--;)if (w = n[C], w = new RegExp("^" == w.substr(0, 1) ? w : "^" + w.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$"), w.test(g)) {
              n = !0;
              break a
            }
            n = !1
          }
          n = !n
        }
        if (n)throw Error("Access denied for " +
          e.remote);
      }
      e.protocol = d;
      switch (d) {
        case "0":
          t(e, {interval: 100, delay: 2E3, useResize: !0, useParent: !1, usePolling: !1}, !0);
          if (e.isHost) {
            if (!e.local) {
              d = c.protocol + "//" + c.host;
              f = b.body.getElementsByTagName("img");
              for (g = f.length; g--;)if (n = f[g], n.src.substring(0, d.length) === d) {
                e.local = n.src;
                break
              }
              e.local || (e.local = a)
            }
            d = {xdm_c: e.channel, xdm_p: 0};
            e.local === a ? (e.usePolling = !0, e.useParent = !0, e.local = c.protocol + "//" + c.host + c.pathname + c.search, d.xdm_e = e.local, d.xdm_pa = 1) : d.xdm_e = E(e.local);
            e.container && (e.useResize = !1, d.xdm_po = 1);
            e.remote = B(e.remote, d)
          } else t(e, {
            channel: x.xdm_c,
            remote: x.xdm_e,
            useParent: !A(x.xdm_pa),
            usePolling: !A(x.xdm_po),
            useResize: e.useParent ? !1 : e.useResize
          });
          f = [new l.stack.HashTransport(e), new l.stack.ReliableBehavior({}), new l.stack.QueueBehavior({
            encode: !0,
            maxLength: 4E3 - e.remote.length
          }), new l.stack.VerifyBehavior({initiate: e.isHost})];
          break;
        case "1":
          f = [new l.stack.PostMessageTransport(e)];
          break;
        case "2":
          e.isHost && (e.remoteHelper = E(e.remoteHelper));
          f = [new l.stack.NameTransport(e), new l.stack.QueueBehavior,
            new l.stack.VerifyBehavior({initiate: e.isHost})];
          break;
        case "3":
          f = [new l.stack.NixTransport(e)];
          break;
        case "4":
          f = [new l.stack.SameOriginTransport(e)];
          break;
        case "5":
          f = [new l.stack.FrameElementTransport(e)];
          break;
        case "6":
          G || k(), f = [new l.stack.FlashTransport(e)]
      }
      f.push(new l.stack.QueueBehavior({lazy: e.lazy, remove: !0}));
      return f
    }

    function Z(a) {
      for (var b, c = {
        incoming: function (a, b) {
          this.up.incoming(a, b)
        }, outgoing: function (a, b) {
          this.down.outgoing(a, b)
        }, callback: function (a) {
          this.up.callback(a)
        }, init: function () {
          this.down.init()
        },
        destroy: function () {
          this.down.destroy()
        }
      }, e = 0, d = a.length; e < d; e++)b = a[e], t(b, c, !0), 0 !== e && (b.down = a[e - 1]), e !== d - 1 && (b.up = a[e + 1]);
      return b
    }

    function ea(a) {
      a.up.down = a.down;
      a.down.up = a.up;
      a.up = a.down = null
    }

    var P = this, X = Math.floor(1E4 * Math.random()), T = Function.prototype, N = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/, V = /[\-\w]+\/\.\.\//, da = /([^:])\/\//g, K = "", l = {}, fa = a.easyXDM, y = "easyXDM_", O, W = !1, G, S, z, I;
    if (h(a, "addEventListener")) z = function (a, b, c) {
      a.addEventListener(b, c, !1)
    }, I = function (a, b, c) {
      a.removeEventListener(b,
        c, !1)
    }; else if (h(a, "attachEvent")) z = function (a, b, c) {
      a.attachEvent("on" + b, c)
    }, I = function (a, b, c) {
      a.detachEvent("on" + b, c)
    }; else throw Error("Browser not supported");
    var H = !1, M = [], Q;
    "readyState" in b ? (Q = b.readyState, H = "complete" == Q || ~p.userAgent.indexOf("AppleWebKit/") && ("loaded" == Q || "interactive" == Q)) : H = !!b.body;
    if (!H) {
      if (h(a, "addEventListener")) z(b, "DOMContentLoaded", m); else if (z(b, "readystatechange", function () {
          "complete" == b.readyState && m()
        }), b.documentElement.doScroll && a === top) {
        var aa = function () {
          if (!H) {
            try {
              b.documentElement.doScroll("left")
            } catch (e) {
              d(aa,
                1);
              return
            }
            m()
          }
        };
        aa()
      }
      z(a, "load", m)
    }
    var x = function (a) {
      a = a.substring(1).split("&");
      for (var b = {}, c, e = a.length; e--;)c = a[e].split("="), b[c[0]] = g(c[1]);
      return b
    }(/xdm_e=/.test(c.search) ? c.search : c.hash), U = function () {
      var a = {}, b = {a: [1, 2, 3]};
      if ("undefined" != typeof JSON && "function" === typeof JSON.stringify && '{"a":[1,2,3]}' === JSON.stringify(b).replace(/\s/g, ""))return JSON;
      Object.toJSON && '{"a":[1,2,3]}' === Object.toJSON(b).replace(/\s/g, "") && (a.stringify = Object.toJSON);
      "function" === typeof String.prototype.evalJSON &&
      (b = '{"a":[1,2,3]}'.evalJSON(), b.a && 3 === b.a.length && 3 === b.a[2] && (a.parse = function (a) {
        return a.evalJSON()
      }));
      return a.stringify && a.parse ? (U = function () {
          return a
        }, a) : null
    };
    t(l, {
      version: "2.4.19.0", query: x, stack: {}, apply: t, getJSONObject: U, whenReady: q, noConflict: function (b) {
        a.easyXDM = fa;
        (K = b) && (y = "easyXDM_" + K.replace(".", "_") + "_");
        return l
      }
    });
    l.DomHelper = {
      on: z, un: I, requiresJSON: function (c) {
        "object" == typeof a.JSON && a.JSON || b.write('<script type="text/javascript" src="' + c + '">\x3c/script>')
      }
    };
    (function () {
      var a =
        {};
      l.Fn = {
        set: function (b, c) {
          a[b] = c
        }, get: function (b, c) {
          if (a.hasOwnProperty(b)) {
            var e = a[b];
            c && delete a[b];
            return e
          }
        }
      }
    })();
    l.Socket = function (a) {
      var b = Z(Y(a).concat([{
        incoming: function (b, c) {
          a.onMessage(b, c)
        }, callback: function (b) {
          if (a.onReady) a.onReady(b)
        }
      }])), c = r(a.remote);
      this.origin = r(a.remote);
      this.destroy = function () {
        b.destroy()
      };
      this.postMessage = function (a) {
        b.outgoing(a, c)
      };
      b.init()
    };
    l.Rpc = function (a, b) {
      if (b.local)for (var c in b.local)if (b.local.hasOwnProperty(c)) {
        var d = b.local[c];
        "function" === typeof d &&
        (b.local[c] = {method: d})
      }
      var e = Z(Y(a).concat([new l.stack.RpcBehavior(this, b), {
        callback: function (b) {
          if (a.onReady) a.onReady(b)
        }
      }]));
      this.origin = r(a.remote);
      this.destroy = function () {
        e.destroy()
      };
      e.init()
    };
    l.stack.SameOriginTransport = function (a) {
      var b, e, f, g;
      return b = {
        outgoing: function (a, b, c) {
          f(a);
          c && c()
        }, destroy: function () {
          e && (e.parentNode.removeChild(e), e = null)
        }, onDOMReady: function () {
          g = r(a.remote);
          a.isHost ? (t(a.props, {
              src: B(a.remote, {xdm_e: c.protocol + "//" + c.host + c.pathname, xdm_c: a.channel, xdm_p: 4}), name: y +
              a.channel + "_provider"
            }), e = F(a), l.Fn.set(a.channel, function (a) {
              f = a;
              d(function () {
                b.up.callback(!0)
              }, 0);
              return function (a) {
                b.up.incoming(a, g)
              }
            })) : (f = ca().Fn.get(a.channel)(function (a) {
              b.up.incoming(a, g)
            }), d(function () {
              b.up.callback(!0)
            }, 0))
        }, init: function () {
          q(b.onDOMReady, b)
        }
      }
    };
    l.stack.FlashTransport = function (a) {
      function e(a, b) {
        d(function () {
          n.up.incoming(a, w)
        }, 0)
      }

      function g(c) {
        var d = a.swf + "?host=" + a.isHost, e = "easyXDM_swf_" + Math.floor(1E4 * Math.random());
        l.Fn.set("flash_loaded" + c.replace(/[\-.]/g, "_"),
          function () {
            l.stack.FlashTransport[c].swf = C = k.firstChild;
            for (var a = l.stack.FlashTransport[c].queue, b = 0; b < a.length; b++)a[b]();
            a.length = 0
          });
        a.swfContainer ? k = "string" == typeof a.swfContainer ? b.getElementById(a.swfContainer) : a.swfContainer : (k = b.createElement("div"), t(k.style, S && a.swfNoThrottle ? {
              height: "20px",
              width: "20px",
              position: "fixed",
              right: 0,
              top: 0
            } : {
              height: "1px",
              width: "1px",
              position: "absolute",
              overflow: "hidden",
              right: 0,
              top: 0
            }), b.body.appendChild(k));
        var g = "callback=flash_loaded" + f(c.replace(/[\-.]/g,
            "_")) + "&proto=" + P.location.protocol + "&domain=" + f(P.location.href.match(N)[3]) + "&port=" + f(P.location.href.match(N)[4] || "") + "&ns=" + f(K);
        k.innerHTML = "<object height='20' width='20' type='application/x-shockwave-flash' id='" + e + "' data='" + d + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + d + "'></param><param name='flashvars' value='" + g + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + g + "' allowScriptAccess='always' wmode='transparent' src='" +
          d + "' height='1' width='1'></embed></object>"
      }

      var n, h, w, C, k;
      return n = {
        outgoing: function (b, c, d) {
          C.postMessage(a.channel, b.toString());
          d && d()
        }, destroy: function () {
          try {
            C.destroyChannel(a.channel)
          } catch (ia) {
          }
          C = null;
          h && (h.parentNode.removeChild(h), h = null)
        }, onDOMReady: function () {
          w = a.remote;
          l.Fn.set("flash_" + a.channel + "_init", function () {
            d(function () {
              n.up.callback(!0)
            })
          });
          l.Fn.set("flash_" + a.channel + "_onMessage", e);
          a.swf = E(a.swf);
          var b = a.swf.match(N)[3], f = function () {
            l.stack.FlashTransport[b].init = !0;
            C = l.stack.FlashTransport[b].swf;
            C.createChannel(a.channel, a.secret, r(a.remote), a.isHost);
            a.isHost && (S && a.swfNoThrottle && t(a.props, {
              position: "fixed",
              right: 0,
              top: 0,
              height: "20px",
              width: "20px"
            }), t(a.props, {
              src: B(a.remote, {xdm_e: r(c.href), xdm_c: a.channel, xdm_p: 6, xdm_s: a.secret}),
              name: y + a.channel + "_provider"
            }), h = F(a))
          };
          l.stack.FlashTransport[b] && l.stack.FlashTransport[b].init ? f() : l.stack.FlashTransport[b] ? l.stack.FlashTransport[b].queue.push(f) : (l.stack.FlashTransport[b] = {queue: [f]}, g(b))
        }, init: function () {
          q(n.onDOMReady, n)
        }
      }
    };
    l.stack.PostMessageTransport =
      function (b) {
        function e(a) {
          var d;
          if (a.origin) d = r(a.origin); else if (a.uri) d = r(a.uri); else if (a.domain) d = c.protocol + "//" + a.domain; else throw"Unable to retrieve the origin of the event";
          d == w && a.data && a.data.substring && a.data.substring(0, b.channel.length + 1) == b.channel + " " && f.up.incoming(a.data.substring(b.channel.length + 1), d)
        }

        var f, g, h, w;
        return f = {
          outgoing: function (a, c, d) {
            h.postMessage(b.channel + " " + a, c || w);
            d && d()
          }, destroy: function () {
            I(a, "message", e);
            g && (h = null, g.parentNode.removeChild(g), g = null)
          }, onDOMReady: function () {
            w =
              r(b.remote);
            if (b.isHost) {
              var k = function (c) {
                c.data == b.channel + "-ready" && (h = "postMessage" in g.contentWindow ? g.contentWindow : g.contentWindow.document, I(a, "message", k), z(a, "message", e), d(function () {
                  f.up.callback(!0)
                }, 0))
              };
              z(a, "message", k);
              t(b.props, {
                src: B(b.remote, {xdm_e: r(c.href), xdm_c: b.channel, xdm_p: 1}),
                name: y + b.channel + "_provider"
              });
              g = F(b)
            } else z(a, "message", e), h = "postMessage" in a.parent ? a.parent : a.parent.document, h.postMessage(b.channel + "-ready", w), d(function () {
              f.up.callback(!0)
            }, 0)
          }, init: function () {
            q(f.onDOMReady,
              f)
          }
        }
      };
    l.stack.FrameElementTransport = function (e) {
      var f, g, h, k;
      return f = {
        outgoing: function (a, b, c) {
          h.call(this, a);
          c && c()
        }, destroy: function () {
          g && (g.parentNode.removeChild(g), g = null)
        }, onDOMReady: function () {
          k = r(e.remote);
          e.isHost ? (t(e.props, {
              src: B(e.remote, {xdm_e: r(c.href), xdm_c: e.channel, xdm_p: 5}),
              name: y + e.channel + "_provider"
            }), g = F(e), g.fn = function (a) {
              delete g.fn;
              h = a;
              d(function () {
                f.up.callback(!0)
              }, 0);
              return function (a) {
                f.up.incoming(a, k)
              }
            }) : (b.referrer && r(b.referrer) != x.xdm_e && (a.top.location = x.xdm_e),
              h = a.frameElement.fn(function (a) {
                f.up.incoming(a, k)
              }), f.up.callback(!0))
        }, init: function () {
          q(f.onDOMReady, f)
        }
      }
    };
    l.stack.NameTransport = function (a) {
      function b(b) {
        k.contentWindow.sendMessage(b, a.remoteHelper + (h ? "#_3" : "#_2") + a.channel)
      }

      function c() {
        h ? 2 !== ++u && h || g.up.callback(!0) : (b("ready"), g.up.callback(!0))
      }

      function e(a) {
        g.up.incoming(a, L)
      }

      function f() {
        D && d(function () {
          D(!0)
        }, 0)
      }

      var g, h, k, v, u, D, L, ba;
      return g = {
        outgoing: function (a, c, d) {
          D = d;
          b(a)
        }, destroy: function () {
          k.parentNode.removeChild(k);
          k = null;
          h &&
          (v.parentNode.removeChild(v), v = null)
        }, onDOMReady: function () {
          h = a.isHost;
          u = 0;
          L = r(a.remote);
          a.local = E(a.local);
          h ? (l.Fn.set(a.channel, function (b) {
              h && "ready" === b && (l.Fn.set(a.channel, e), c())
            }), ba = B(a.remote, {xdm_e: a.local, xdm_c: a.channel, xdm_p: 2}), t(a.props, {
              src: ba + "#" + a.channel,
              name: y + a.channel + "_provider"
            }), v = F(a)) : (a.remoteHelper = a.remote, l.Fn.set(a.channel, e));
          var b = function () {
            var e = k || this;
            I(e, "load", b);
            l.Fn.set(a.channel + "_load", f);
            (function R() {
              "function" == typeof e.contentWindow.sendMessage ? c() :
                d(R, 50)
            })()
          };
          k = F({props: {src: a.local + "#_4" + a.channel}, onLoad: b})
        }, init: function () {
          q(g.onDOMReady, g)
        }
      }
    };
    l.stack.HashTransport = function (b) {
      function c() {
        if (v) {
          var a = v.location.href, b = "", c = a.indexOf("#");
          -1 != c && (b = a.substring(c));
          b && b != k && (k = b, f.up.incoming(k.substring(k.indexOf("_") + 1), L))
        }
      }

      var f, e, g, h, k, l, v, u, D, L;
      return f = {
        outgoing: function (a, c) {
          if (u) {
            var d = b.remote + "#" + l++ + "_" + a;
            (e || !D ? u.contentWindow : u).location = d
          }
        }, destroy: function () {
          a.clearInterval(g);
          !e && D || u.parentNode.removeChild(u);
          u = null
        },
        onDOMReady: function () {
          e = b.isHost;
          h = b.interval;
          k = "#" + b.channel;
          l = 0;
          D = b.useParent;
          L = r(b.remote);
          if (e) {
            t(b.props, {src: b.remote, name: y + b.channel + "_provider"});
            if (D) b.onLoad = function () {
              v = a;
              g = setInterval(c, h);
              f.up.callback(!0)
            }; else {
              var w = 0, n = b.delay / 50;
              (function ga() {
                if (++w > n)throw Error("Unable to reference listenerwindow");
                try {
                  v = u.contentWindow.frames[y + b.channel + "_consumer"]
                } catch (R) {
                }
                v ? (g = setInterval(c, h), f.up.callback(!0)) : d(ga, 50)
              })()
            }
            u = F(b)
          } else v = a, g = setInterval(c, h), D ? (u = parent, f.up.callback(!0)) :
            (t(b, {
              props: {src: b.remote + "#" + b.channel + new Date, name: y + b.channel + "_consumer"},
              onLoad: function () {
                f.up.callback(!0)
              }
            }), u = F(b))
        }, init: function () {
          q(f.onDOMReady, f)
        }
      }
    };
    l.stack.ReliableBehavior = function (a) {
      var b, c, d = 0, f = 0, e = "";
      return b = {
        incoming: function (a, g) {
          var h = a.indexOf("_"), k = a.substring(0, h).split(",");
          a = a.substring(h + 1);
          k[0] == d && (e = "", c && c(!0));
          0 < a.length && (b.down.outgoing(k[1] + "," + d + "_" + e, g), f != k[1] && (f = k[1], b.up.incoming(a, g)))
        }, outgoing: function (a, g, h) {
          e = a;
          c = h;
          b.down.outgoing(f + "," + ++d + "_" +
            a, g)
        }
      }
    };
    l.stack.QueueBehavior = function (a) {
      function b() {
        if (a.remove && 0 === e.length) ea(c); else if (!h && 0 !== e.length && !l) {
          h = !0;
          var f = e.shift();
          c.down.outgoing(f.data, f.origin, function (a) {
            h = !1;
            f.callback && d(function () {
              f.callback(a)
            }, 0);
            b()
          })
        }
      }

      var c, e = [], h = !0, k = "", l, v = 0, q = !1, u = !1;
      return c = {
        init: function () {
          A(a) && (a = {});
          a.maxLength && (v = a.maxLength, u = !0);
          a.lazy ? q = !0 : c.down.init()
        }, callback: function (a) {
          h = !1;
          var d = c.up;
          b();
          d.callback(a)
        }, incoming: function (b, d) {
          if (u) {
            var f = b.indexOf("_"), e = parseInt(b.substring(0,
              f), 10);
            k += b.substring(f + 1);
            0 === e && (a.encode && (k = g(k)), c.up.incoming(k, d), k = "")
          } else c.up.incoming(b, d)
        }, outgoing: function (d, g, h) {
          a.encode && (d = f(d));
          var k = [], l;
          if (u) {
            for (; 0 !== d.length;)l = d.substring(0, v), d = d.substring(l.length), k.push(l);
            for (; l = k.shift();)e.push({data: k.length + "_" + l, origin: g, callback: 0 === k.length ? h : null})
          } else e.push({data: d, origin: g, callback: h});
          q ? c.down.init() : b()
        }, destroy: function () {
          l = !0;
          c.down.destroy()
        }
      }
    };
    l.stack.VerifyBehavior = function (a) {
      function b() {
        d = Math.random().toString(16).substring(2);
        c.down.outgoing(d)
      }

      var c, d, f;
      return c = {
        incoming: function (e, g) {
          var h = e.indexOf("_");
          -1 === h ? e === d ? c.up.callback(!0) : f || (f = e, a.initiate || b(), c.down.outgoing(e)) : e.substring(0, h) === f && c.up.incoming(e.substring(h + 1), g)
        }, outgoing: function (a, b, f) {
          c.down.outgoing(d + "_" + a, b, f)
        }, callback: function (c) {
          a.initiate && b()
        }
      }
    };
    l.stack.RpcBehavior = function (a, b) {
      function c(a) {
        a.jsonrpc = "2.0";
        e.down.outgoing(g.stringify(a))
      }

      function d(a, b) {
        var d = Array.prototype.slice;
        return function () {
          var f = arguments.length, e, g = {method: b};
          0 < f && "function" === typeof arguments[f - 1] ? (1 < f && "function" === typeof arguments[f - 2] ? (e = {
                success: arguments[f - 2],
                error: arguments[f - 1]
              }, g.params = d.call(arguments, 0, f - 2)) : (e = {success: arguments[f - 1]}, g.params = d.call(arguments, 0, f - 1)), k["" + ++h] = e, g.id = h) : g.params = d.call(arguments, 0);
          a.namedParams && 1 === g.params.length && (g.params = g.params[0]);
          c(g)
        }
      }

      function f(a, b, d, f) {
        if (d) {
          var e, g;
          b ? (e = function (a) {
              e = T;
              c({id: b, result: a})
            }, g = function (a, d) {
              g = T;
              var f = {id: b, error: {code: -32099, message: a}};
              d && (f.error.data = d);
              c(f)
            }) :
            e = g = T;
          "[object Array]" !== Object.prototype.toString.call(f) && (f = [f]);
          try {
            var h = d.method.apply(d.scope, f.concat([e, g]));
            A(h) || e(h)
          } catch (R) {
            g(R.message)
          }
        } else b && c({id: b, error: {code: -32601, message: "Procedure not found."}})
      }

      var e, g = b.serializer || U(), h = 0, k = {};
      return e = {
        incoming: function (a, d) {
          var e = g.parse(a);
          if (e.method) b.handle ? b.handle(e, c) : f(e.method, e.id, b.local[e.method], e.params); else {
            var h = k[e.id];
            e.error ? h.error && h.error(e.error) : h.success && h.success(e.result);
            delete k[e.id]
          }
        }, init: function () {
          if (b.remote)for (var c in b.remote)b.remote.hasOwnProperty(c) &&
          (a[c] = d(b.remote[c], c));
          e.down.init()
        }, destroy: function () {
          for (var c in b.remote)b.remote.hasOwnProperty(c) && a.hasOwnProperty(c) && delete a[c];
          e.down.destroy()
        }
      }
    };
    P.easyXDM = l
  }(h, k, location, h.setTimeout, decodeURIComponent, encodeURIComponent);
  "undefined" != typeof h.uLogin && h.uLogin.uLoginHost || (Array.prototype.indexOf || (Array.prototype.indexOf = function (a) {
    try {
      for (var b = 0; b < this.length; b++)if (this[b] == a)return b
    } catch (c) {
    }
    return -1
  }), String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,
      "")
  }), "undefined" === typeof h.console && (h.console = {
    log: function () {
    }, error: function () {
    }, info: function () {
    }, assert: function () {
    }
  }), h.uLogin = {
    uLoginHost: function (a) {
      var b, c;
      for (c in a)if (c in a && a[c].src && /^https?:\/\/(.*?)\/js\/ulogin\.js/.test(a[c].src)) {
        b = a[c].src.match(/^https?:\/\/([^/]+)/)[1].replace(/^www\./, "");
        break
      }
      return "u-login.com" === b ? "u-login.com" : "ulogin.ru"
    }(k.getElementsByTagName("script"))
  }, h.uLogin = {
    version: "1",
    protocol: location.href.match(/^https/i) ? "https" : "http",
    host: encodeURIComponent(location.host),
    uLoginHost: uLogin.uLoginHost,
    supportStorage: !!("localStorage" in window && null !== window.localStorage && "JSON" in window && null !== window.JSON && "undefined" !== typeof window.JSON.parse && "undefined" !== typeof window.JSON.stringify),
    supportHistory: !(!window.history || !history.pushState),
    ids: [],
    timeouts: {},
    listeners: {},
    lang: (p.language || p.systemLanguage || p.userLanguage || "en").substr(0, 2).toLowerCase(),
    langs: "en ru uk fr de uz".split(" "),
    dialog: !1,
    close: !1,
    lightbox: !1,
    dialogSocket: !1,
    pixel: "//" + uLogin.uLoginHost +
    "/match?rand=[rand]&u=[u]&r=[r]",
    providerCodes: "vkontakte odnoklassniki mailru facebook twitter google yandex livejournal openid flickr lastfm linkedin liveid soundcloud steam uid webmoney youtube foursquare tumblr googleplus vimeo instagram wargaming".split(" "),
    providerNames: "VK Odnoklassniki Mail.ru Facebook Twitter Google Yandex LiveJournal OpenID Flickr Last.FM LinkedIn LiveID SoundCloud Steam uID WebMoney YouTube foursquare tumblr Google+ Vimeo Instagram Wargaming.net".split(" "),
    states: ["ready",
      "open", "receive", "close", "fill"],
    themes: ["classic", "flat"],
    widgetSettings: {},
    findTimer: 0,
    waitGetWidget: {},
    altwayCalled: [],
    rc: !1,
    page: null,
    altway: function (a) {
      a = a.toLowerCase();
      return !!/iPhone|iPad/i.test(a)
    }(p.userAgent || p.vendor || h.opera),
    m: !!/(ip(ad|od|hone)|android)/i.test(p.userAgent || p.vendor || h.opera),
    mobile: function (a) {
      if (/_utl_t=vk/.test(location.href) || /_utl_t=vk/.test(document.referrer))return !1;
      a = a.toLowerCase();
      return !!/(ip(ad|od|hone)|android)/i.test(a)
    }(p.userAgent || p.vendor || h.opera),
    openFromSocket: !1,
    ppi: null,
    authSocket: !1,
    availableParams: {
      id: 1,
      redirect_uri: 1,
      page: 1,
      callback: 1,
      fields: 1,
      force_fields: 1,
      optional: 1,
      protocol: 1,
      host: 1,
      lang: 1,
      verify: 1,
      sort: 1,
      othprov: 1,
      providers: 1,
      altway: 1,
      m: 1,
      icons_32: 1,
      icons_16: 1
    },
    cancelClick: !1,
    init: function (a) {
      if (k.body) {
        this.mobile && (this.altway = !0);
        this.page = encodeURIComponent(location.href);
        this.openFromSocket && (this.authSocket = this.initSocket(this.buildUrl("/version/2.0/html/buttons_receiver.html", {
            four: "",
            r: parseInt(1E5 * Math.random())
          }), this.getRC(),
          {background: "transparent"}));
        "" == a && (a = k.getElementsByTagName("script"), a = a[a.length - 1].src, -1 == a.indexOf("?") && (a += "?"), a = a.substr(a.indexOf("?") + 1));
        if ("" != a) {
          var b = this.parse(a);
          b.version && (this.version = b.version);
          if (b.display) {
            var c = b.id || "uLogin";
            if (this.get(c)) {
              a = !0;
              for (var d = 0; d < this.ids.length; d++)c == this.ids[d].id && (a = !1);
              a && this.setProp(b.id || "uLogin", this.ids.length, b)
            } else m('uLogin.init("' + a + '")', 1E3)
          }
        }
        this.add(k.body, "touchmove", this.touchMove);
        uLogin.timeouts.search_all = m(function () {
          uLogin.findWidgets();
          if ("complete" === k.readyState && (0 === uLogin.findTimer && (uLogin.findTimer = +new Date), 1E4 < new Date - uLogin.findTimer))return !1;
          uLogin.timeouts.all = m(arguments.callee, 50)
        }, 50);
        this.findWidgets();
        uLogin.timeouts.search_ulogin = m(function () {
          uLogin.checkAsyncWidgets();
          uLogin.timeouts.search_ulogin = m(arguments.callee, 50)
        }, 50);
        this.checkAsyncWidgets();
        uLogin.timeouts.check_widgets = m(function () {
          uLogin.checkCurrentWidgets();
          uLogin.timeouts.check_widgets = m(arguments.callee, 300)
        }, 30);
        this.checkCurrentWidgets();
        this.sendPixel()
      } else m(function () {
          uLogin.init()
        },
        20);
      this.callbackReceived()
    },
    get: function (a) {
      return k.getElementById(a)
    },
    exists: function (a) {
      return "undefined" != typeof a
    },
    add: function (a, b, c) {
      a.addEventListener ? a.addEventListener(b, function (d) {
          "click" === b && uLogin.cancelClick || c(a, d)
        }, !1) : a.attachEvent ? a.attachEvent("on" + b, function (d) {
            "click" === b && uLogin.cancelClick || c(a, d)
          }) : a["on" + b] = function (d) {
            "click" === b && uLogin.cancelClick || c(a, d)
          };
      "click" === b && (this.add(a, "touchstart", this.touchStart), this.add(a, "touchend", function (a, b) {
        return function (c, d) {
          uLogin.cancelClick ||
          (uLogin.cancelClick = !0, b.call(this, a, d))
        }
      }(a, c)))
    },
    touchStart: function () {
      uLogin.cancelClick = !1
    },
    touchMove: function () {
      uLogin.cancelClick = !0
    },
    is_encoded: function (a) {
      return decodeURIComponent(a) != a
    },
    genID: function () {
      for (var a = new Date, b = a.getTime() + Math.floor(1E5 * Math.random()); this.get("ul_" + b);)b = a.getTime() + Math.floor(1E5 * Math.random());
      return "ul_" + b
    },
    show: function (a) {
      this.exists(a) && (a.style.display = "block")
    },
    hide: function (a) {
      a && this.exists(a) && (a.style.display = "none")
    },
    parse: function (a) {
      var b = {};
      if (!a)return b;
      if ("object" === typeof a)return a;
      var c = a.split("&"), c = 1 < c.length ? c : a.split(";");
      for (a = 0; a < c.length; a++) {
        var d = c[a].split("=");
        d[0] && (d[0] = d[0].trim());
        d[1] && (d[1] = d[1].trim());
        b[d[0]] = d[1]
      }
      return b
    },
    scrollTop: function () {
      return h.pageYOffset || k.documentElement.scrollTop || k.body.scrollTop
    },
    scrollLeft: function () {
      return h.pageXOffset || k.documentElement.scrollLeft || k.body.scrollLeft
    },
    dialogHeight: function () {
      return 358
    },
    dialogWidth: function () {
      return 564
    },
    clientWidth: function () {
      var a = 0;
      "[object Opera]" ==
      Object.prototype.toString.call(h.opera) && 9.5 > h.parseFloat(h.opera.version()) ? a = k.body.clientWidth : h.innerWidth && (a = h.innerWidth);
      this.isIE() && (a = k.documentElement.clientWidth);
      return a
    },
    clientHeight: function () {
      var a = 0;
      "[object Opera]" == Object.prototype.toString.call(h.opera) && 9.5 > h.parseFloat(h.opera.version()) ? a = k.body.clientHeight : h.innerHeight && (a = h.innerHeight);
      this.isIE() && (a = k.documentElement.clientHeight);
      return a
    },
    isIE: function () {
      if (/MSIE (\d+\.\d+);/.test(p.userAgent)) {
        var a = Number(RegExp.$1);
        if (9 > a)return a
      }
      return !1
    },
    getPPI: function () {
      if (null === this.ppi)try {
        var a = window.devicePixelRatio || 1, b = document.getElementsByTagName("body")[0], c = document.createElement("div");
        c.style = "height: 1in; left: -100%; position: absolute; top: -100%; width: 1in;";
        b.appendChild(c);
        var d = c.offsetWidth * a;
        b.removeChild(c);
        this.ppi = d
      } catch (g) {
        this.ppi = 96
      }
      return this.ppi
    },
    inArray: function (a, b) {
      if (!a || !b)return !1;
      for (var c = 0, d = b.length; c < d; c++)if (a == b[c])return c;
      return -1
    },
    findWidgets: function () {
      for (var a = 0, b = [],
             c = [], d = k.getElementsByTagName("div"), g = k.getElementsByTagName("a"); g[a];)g[a] && (b[a] = g[a]), a++;
      for (a = 0; d[a];)d[a] && (c[a] = d[a]), a++;
      for (a = 0; c[a] || b[a];)c[a] && this.addWidget(c[a]), b[a] && this.addWidget(b[a]), a++
    },
    addWidget: function (a, b) {
      var c = a.id, d = a.getAttribute("data-uloginid"), g = {}, f = !1;
      "undefined" !== typeof h.uLoginParams && (h.uLoginParams[c] ? g = h.uLoginParams[c] : h.uLoginParams[d] ? g = h.uLoginParams[d] : 0 < this.arrayIntersectKey(h.uLoginParams, this.availableParams).length && (g = h.uLoginParams, f = !0));
      b &&
      (g = this.extend(g, b));
      var k = a.getAttribute("data-ulogin") || a.getAttribute("x-ulogin-params"), f = null !== k || !f && 0 < this.arrayIntersectKey(g, this.availableParams).length;
      b = this.extend(this.parse(k), g);
      !d && !f || c || (c = this.genID(), a.setAttribute("id", c));
      d ? this.getWidget(d, c) : f && this.setProp(c, this.ids.length, b)
    },
    inited: function (a) {
      for (var b = 0; b < this.ids.length; b++)if (a == this.ids[b].id)return !0;
      return !1
    },
    initWidget: function (a) {
      if (a) {
        var b = this.get(a);
        if (b && (b = b.getAttribute("data-ulogin") || b.getAttribute("x-ulogin-params")) && !this.inited(a)) {
          var b = this.parse(b), c = this.getWidgetNumber(a);
          isNaN(c) ? c = this.ids.length : this.ids[c] = {};
          this.setProp(a, c, b)
        }
      }
    },
    setProp: function (a, b, c) {
      if (this.waitGetWidget[a] || this.inited(a))return !1;
      this.ids[b] = {
        id: a,
        dropTimer: !1,
        initCheck: !1,
        type: c.display || "",
        providers: c.providers || "",
        hidden: c.hidden || "",
        redirect_uri: c.redirect_uri || "",
        page: this.page,
        callback: c.callback || "",
        fields: c.fields || "first_name,last_name,email",
        force_fields: c.force_fields || "",
        optional: c.optional || "",
        color: c.color || "fff",
        opacity: c.opacity || "75",
        verify: c.verify || "",
        m: "undefined" !== typeof c.m ? c.m : this.m,
        lang: c.lang || this.lang,
        altway: "undefined" !== typeof c.altway ? parseInt(c.altway) : this.altway,
        sort: "default" === c.sort ? "default" : "relevant",
        state: "",
        hidden_button: c.hidden_button || "inset",
        dropdown_container: c.dropdown_container || "body",
        icons_32: c.icons_32 || "",
        icons_16: c.icons_16 || "",
        theme: c.theme || "classic",
        client: c.client || "",
        event: c.event || "click"
      };
      -1 == this.inArray(this.ids[b].theme, this.themes) && (this.ids[b].theme = this.themes[0]);
      this.ids[b].providers || this.ids[b].other || (this.ids[b].hidden = "other");
      "small" !== this.ids[b].type && "panel" !== this.ids[b].type || this.sendStats({type: this.ids[b].type});
      "window" == this.ids[b].type && !this.ids[b].providers && this.ids[b].hidden && (this.ids[b].providers = this.providerCodes.join(","));
      this.ids[b].mobile = 0 == c.mobilebuttons ? 0 : this.mobile;
      this.ids[b].altway && !this.ids[b].redirect_uri && (this.ids[b].redirect_uri = location.href);
      this.ids[b].callback && !this.ids[b].altway && (this.ids[b].redirect_uri =
        "");
      this.ids[b].redirect_uri = this.clearRedirectUri(this.ids[b].redirect_uri);
      -1 == this.inArray(this.ids[b].lang, this.langs) && (this.ids[b].lang = this.lang);
      this.ids[b].icons_32 = this.fixSiteLink(this.ids[b].icons_32);
      this.ids[b].icons_16 = this.fixSiteLink(this.ids[b].icons_16);
      switch (c.display) {
        case "small":
        case "panel":
          this.ids[b].listener_id = !1;
          this.initPanel(b);
          break;
        case "window":
          this.initWindow(b);
          break;
        case "buttons":
          this.initButtons(b);
          break;
        default:
          this.ids.splice(b, b)
      }
      this.get(a).setAttribute("data-ulogin-inited",
        (+new Date).toString())
    },
    fixSiteLink: function (a) {
      a && (/^https?:\/\/(.*?)/.test(a) || (/^\//.test(a) || (a = "/" + a), a = location.origin + a), (new RegExp("^" + location.origin)).test(a) || (a = "", console.error("uLogin ERROR: resource link is invalid, not match with location.origin")), a && (a = this.is_encoded(a) ? a.replace(/\//g, "%2F").replace(/\?/g, "%3F") : encodeURIComponent(a)));
      return a
    },
    clearRedirectUri: function (a) {
      if (!a)return a;
      a = a.replace(/ulogin_callback=([^&?]*?)#/, "#").replace(/ulogin_callback=(.*?)(&|$)/, "").replace(/ulogin_token=([^&?]*?)#/,
        "#").replace(/ulogin_token=(.*?)(&|$)/, "").replace(/(\?|&)#/, "#").replace(/(\?|&)$/, "");
      return a = this.is_encoded(a) ? a.replace(/\//g, "%2F").replace(/\?/g, "%3F") : encodeURIComponent(a)
    },
    initPanel: function (a) {
      var b = this.get(this.ids[a].id), c = "small" == this.ids[a].type ? 1 : 0, d = c ? 21 : 42, g = c ? 16 : 32, f = 0, h, J = c ? 5 : 10, p = c ? "16px" : "32px", q = "";
      this.ids[a].icons_16 && c ? q = decodeURIComponent(this.ids[a].icons_16) : this.ids[a].icons_32 && !c ? q = decodeURIComponent(this.ids[a].icons_32) : (q = 120 < this.getPPI() ? c ? 32 : 64 : c ? 16 : 32, q = "providers-{size}-{theme}.png?version=img.2.0.0".replace("{size}",
            q).replace("{theme}", this.ids[a].theme), q = this.buildUrl("version/2.0/img/" + q));
      q = "url(" + q + ") " + (c ? "0 -1px" : "0 -2px") + " no-repeat";
      b.innerHTML = "";
      if ("other" === this.ids[a].hidden) {
        h = this.providerCodes.slice(0);
        if (this.ids[a].providers)for (var m = this.ids[a].providers.split(","), r = 0; r < m.length; r++) {
          var E = this.inArray(m[r], h);
          -1 !== E && h.splice(E, 1)
        }
        this.ids[a].hidden = h.toString()
      }
      if (this.ids[a].providers) {
        var m = "relevant" === this.ids[a].sort ? this.relProviders(this.ids[a].providers, this.ids[a].hidden, 1) :
          this.ids[a].providers.split(","), B, f = f + d * ("inset" === this.ids[a].hidden_button && 0 < this.ids[a].hidden.length ? m.length + 1 : m.length), d = k.createElement("div");
        this.ids[a].buttonsContainer = d;
        this.ids[a].buttonsContainer.className = "ulogin-buttons-container";
        this.resetStyle(d, {
          width: f,
          maxWidth: "100%",
          minHeight: g,
          verticalAlign: "top",
          display: "inline-block",
          lineHeight: 0
        });
        b.appendChild(d);
        for (B in m)f = m[B], h = this.inArray(f, this.providerCodes), -1 < h && (d = k.createElement("div"), d.className = "ulogin-button-" + f, d.setAttribute("data-uloginbutton",
          f), d.setAttribute("role", "button"), d.setAttribute("title", this.providerNames[h]), this.resetStyle(d, {
          "float": "left",
          width: g,
          height: g,
          margin: "0 " + J + "px " + J + "px 0",
          background: q,
          cursor: "pointer",
          backgroundPosition: this.getIconPosition(c, h),
          backgroundSize: p
        }), this.ids[a].buttonsContainer.appendChild(d))
      }
      this.ids[a].hidden && (b.style.position = "relative", "relevant" === this.ids[a].sort && (this.ids[a].hidden = this.relProviders(this.ids[a].providers, this.ids[a].hidden, 2).join(",")), this.ids[a].drop = k.createElement("img"),
        this.ids[a].drop.className = "ulogin-dropdown-button", this.ids[a].drop.src = this.buildUrl("img/blank.gif"), this.resetStyle(this.ids[a].drop, {
        width: g,
        height: g,
        margin: "0 " + J + "px " + J + "px 0",
        cursor: "pointer",
        background: q,
        verticalAlign: "baseline",
        display: "inline",
        "float": "none",
        backgroundSize: p
      }), this.add(this.ids[a].drop, "mouseover", function (b) {
        uLogin.ids[a].showed = !1;
        uLogin.dropdownDelayed(a, c ? 1 : 2);
        uLogin.setOpacity(b, uLogin.ids[a].opacity)
      }), this.add(this.ids[a].drop, "mouseout", function (b) {
        uLogin.ids[a].showed = !0;
        uLogin.dropdownDelayed(a, 0);
        uLogin.setOpacity(b)
      }), this.add(this.ids[a].drop, "click", function () {
        uLogin.dropdown(a, c ? 1 : 2)
      }), "inset" === this.ids[a].hidden_button && this.ids[a].buttonsContainer ? this.ids[a].buttonsContainer.appendChild(this.ids[a].drop) : b.appendChild(this.ids[a].drop), this.initDrop(a));
      this.ids[a].buttonsContainer && 0 < this.ids[a].buttonsContainer.clientHeight && (this.ids[a].buttonsContainer.style.height = this.ids[a].buttonsContainer.clientHeight - J + "px");
      window.bc = this.ids[a].buttonsContainer;
      this.initButtons(a)
    },
    initWindow: function (a) {
      var b = this.get(this.ids[a].id), c = b.getElementsByTagName("*");
      c.length ? b = c[0] : (b.innerHTML ? (c = document.createElement("span"), c.innerHTML = b.innerHTML, b.innerHTML = "") : (c = k.createElement("img"), c.setAttribute("src", this.buildUrl("img/button.png?version=img.2.0.0")), c.setAttribute("style", "cursor:pointer; width:187px; height:30px"), c.setAttribute("alt", "\u041c\u0443\u043b\u044c\u0442\u0438\u0412\u0445\u043e\u0434")), b = b.appendChild(c));
      b.setAttribute("data-uloginbutton",
        "window");
      b.setAttribute("data-ulogin-default", "true");
      this.ids[a].opacity = 75;
      this.initButtons(a)
    },
    sendPixel: function () {
      this.getRC();
      if (this.pixel) {
        var a = this;
        m(function () {
          if (a.pixel) {
            var b = k.createElement("iframe"), c = a.getRC();
            b.src = a.pixel.replace("[rand]", parseInt(1E5 * Math.random())).replace("[u]", encodeURIComponent(location.href)).replace("[r]", encodeURIComponent(k.referrer || ""));
            b.width = b.height = 1;
            b.style.display = "none";
            c.appendChild(b);
            m(function () {
              c.removeChild(b)
            }, 3E3);
            a.pixel = !1
          }
        }, 0)
      }
    },
    sendStats: function (a) {
      var b =
        {r: parseInt(1E5 * Math.random())};
      a.type && (b.type = a.type);
      a = this.buildUrl("stats.html", b);
      this.initSocket(a, this.getRC())
    },
    mergeAccounts: function (a, b) {
      if (!a)return console.error('uLogin ERROR (mergeAccounts): invalid token "' + a + '"'), !1;
      var c = {token: a};
      b ? ("undefined" !== typeof b.join && (b = b.join(",")), c.identities = encodeURIComponent(b), c = this.buildUrl("merge_accounts.php", c)) : c = this.buildUrl("require_verify.php", c);
      this.loadWindow(c)
    },
    getRC: function () {
      var a = document.getElementById("ulogin_receiver_container");
      a || (a = k.createElement("div"), a.setAttribute("id", "ulogin_receiver_container"), this.resetStyle(a, {
        width: 0,
        height: 0,
        display: "none"
      }), k.getElementsByTagName("body")[0].appendChild(a));
      return a
    },
    clearTimeouts: function () {
      for (var a in this.timeouts)clearTimeout(this.timeouts[a])
    },
    callbackTryCall: function (a, b) {
      this.altwayCalled.push(a);
      h[a] ? setTimeout(function () {
          h[a].call(h, b)
        }, 10) : setTimeout(function () {
          uLogin.callbackTryCall(a, b)
        }, 100)
    },
    callbackReceived: function () {
      var a = location.search.replace("?", "");
      if ((a = this.parse(a)) && a.ulogin_callback && a.ulogin_token && -1 === this.inArray(a.ulogin_callback, this.altwayCalled) && (this.callbackTryCall(a.ulogin_callback, a.ulogin_token), this.supportHistory)) {
        var b = document.getElementsByTagName("title"), b = (b = b ? b[0] : "") ? b.innerHTML : "";
        delete a.ulogin_callback;
        delete a.ulogin_token;
        var a = this.buildUrl("", a, !0), c = location.origin + location.pathname + a + location.hash;
        m(function () {
          window.history.pushState({}, b, c)
        }, 1E3)
      }
    },
    newDialogSocket: function (a) {
      this.dialogSocket && this.dialogSocket.destroy();
      this.dialogSocket = a
    },
    initSocket: function (a, b, c, d) {
      d || (d = 0);
      var g = new easyXDM.Socket({
        remote: a,
        swf: this.isIE() ? this.buildUrl("js/easyxdm.swf") : "",
        props: {
          style: this.extend({
            margin: 0,
            padding: 0,
            background: "#fff",
            border: 0,
            position: "absolute",
            left: 0,
            top: 0,
            overflow: "hidden",
            width: "100%",
            height: "100%"
          }, c), frameBorder: "0"
        },
        container: b,
        onMessage: function (a) {
          var b, c, f, k;
          /weights:/.test(a) || console.info("[uLogin] ulogin.js received message: " + a);
          if (b = a.match(/(.*?)\((.*?)\)/)) c = b[1], a = b[2];
          if (b = a.match(/^(.*?):(.*?)$/)) f =
            b[1], k = b[2];
          /^https?:\/\//.test(a) ? location.href = a : /^\/auth.php\?/.test(a) ? (a = "https://" + uLogin.uLoginHost + a, uLogin.ids[d].altway ? location.href = a : uLogin.openWithReceiver(a, d)) : -1 < uLogin.inArray(a, uLogin.states) ? uLogin._changeState(d, a) : f && -1 < uLogin.inArray(f, uLogin.states) ? uLogin._changeState(d, f, "string" === typeof k ? k.split(",") : []) : "closeme" == a ? (uLogin.hideAll(), g.destroy()) : /to_window:/.test(a) ? (c = uLogin.buildUrl(a.replace(/to_window:\/?/, "", ""), {set: encodeURIComponent("{window:1}")}), uLogin.loadWindow(c),
                      /to_window:\/fill\.php/.test(a) && uLogin._changeState(d, "fill")) : /weights:/.test(a) ? uLogin.setWeights(a.replace(/weights:\/?/, "", "")) : c ? "undefined" != typeof h[c] && (h[c].apply(h, a.split(",")), g.destroy(), uLogin.dialog && uLogin.hideAll()) : uLogin.ids[d] && "undefined" != typeof h[uLogin.ids[d].callback] && (uLogin._changeState(d, "receive"), h[uLogin.ids[d].callback](a), uLogin.dialog && uLogin.hideAll())
        }
      });
      return g
    },
    getWidgetNumber: function (a) {
      for (var b = 0; b < this.ids.length; b++)if (a == this.ids[b].id)return b;
      return NaN
    },
    onMoveWindow: function () {
      this.moveWindow()
    },
    loadWindow: function (a, b) {
      null === b && (b = !1);
      var c = this.ids[b] ? this.ids[b].opacity : 75, d;
      try {
        k.body.removeChild(this.lightbox)
      } catch (g) {
      }
      try {
        k.body.removeChild(this.dialog)
      } catch (g) {
      }
      d = k.createElement("div");
      this.resetStyle(d, {
        position: "fixed",
        zIndex: 9997,
        width: "100%",
        height: "100%",
        background: "#" + (this.ids[b] ? this.ids[b].color : "fff"),
        display: "none"
      });
      this.setOpacity(d, c);
      this.lightbox = d;
      d = k.createElement("div");
      d.id = this.genID();
      this.resetStyle(d, {
        position: "absolute",
        zIndex: 9998,
        left: Math.floor(this.scrollLeft() + (this.clientWidth() - this.dialogWidth()) / 2),
        top: Math.floor(this.scrollTop() + (this.clientHeight() - this.dialogHeight()) / 2),
        width: this.dialogWidth(),
        height: this.dialogHeight(),
        overflow: "visible",
        display: "none",
        border: this.ids[b] && "flat" === this.ids[b].theme ? "5px solid #666" : "10px solid #666",
        borderRadius: this.ids[b] && "flat" === this.ids[b].theme ? 0 : "8px",
        boxShadow: "0 2px 3px 0 rgba(0,0,0,.2),0 3px 2px -2px rgba(0,0,0,.22),0 1px 6px 0 rgba(0,0,0,.12)"
      });
      this.dialog =
        d;
      d = k.createElement("img");
      d.src = this.buildUrl("img/blank.gif");
      this.resetStyle(d, {
        position: "absolute",
        height: 30,
        zIndex: 9999,
        background: "url(" + this.buildUrl("img/x.png") + ")",
        cursor: "pointer",
        display: "none",
        left: "initial",
        top: "-15px",
        right: "-15px"
      });
      this.close = d;
      k.body.appendChild(this.lightbox);
      k.body.appendChild(this.dialog);
      this.dialog.appendChild(this.close);
      this.add(this.lightbox, "click", function () {
        uLogin.hideAll()
      });
      this.add(this.close, "click", function () {
        uLogin.hideAll()
      });
      this.add(this.close,
        "mouseover", function (a) {
          a.style.background = "url(" + uLogin.buildUrl("img/x_.png") + ")"
        });
      this.add(this.close, "mouseout", function (a) {
        a.style.background = "url(" + uLogin.buildUrl("img/x.png") + ")"
      });
      this.add(h, "scroll", function () {
        uLogin.onMoveWindow()
      });
      this.add(h, "resize", function () {
        uLogin.onMoveWindow()
      });
      this.newDialogSocket(this.initSocket(a, this.dialog.getAttribute("id"), {}, b));
      uLogin.show(uLogin.close);
      uLogin.show(uLogin.lightbox);
      uLogin.show(uLogin.dialog);
      uLogin.onMoveWindow()
    },
    hideAll: function () {
      this.hide(this.lightbox);
      this.hide(this.dialog);
      this.hide(this.close);
      for (var a = 0; a < this.ids.length; a++)this.ids[a].showed = !1, this.hide(this.ids[a].hiddenW), this.hide(this.ids[a].hiddenA)
    },
    moveWindow: function () {
      if (!this.dialog || !this.dialog.firstChild)return !1;
      for (var a = this.dialogWidth(), b = this.dialogHeight(), a = (Math.floor(this.scrollLeft() + (this.clientWidth() - a) / 2) - Number(this.dialog.style.left.slice(0, -2))) / 10, b = (Math.floor(this.scrollTop() + (this.clientHeight() - b) / 2) - Number(this.dialog.style.top.slice(0, -2))) / 10, c = 0; 10 >
      c; c++)this.dialog.style.left = a + Number(this.dialog.style.left.slice(0, -2)) + "px", this.dialog.style.top = b + Number(this.dialog.style.top.slice(0, -2)) + "px"
    },
    resetStyle: function (a, b) {
      !b && (b = {});
      var c = this.extend({
        margin: 0,
        padding: 0,
        outline: "none",
        border: "none",
        borderRadius: 0,
        cursor: "default",
        "float": "none",
        position: "relative",
        display: "inherit",
        width: "auto",
        height: "auto",
        left: 0,
        top: 0,
        boxSizing: "content-box"
      }, b), d = ["width", "height", "left", "top"], g = ["float"], f;
      for (f in c) {
        -1 < this.inArray(f, d) && "number" === typeof c[f] &&
        (c[f] += "px");
        try {
          -1 < this.inArray(f, g) && a.style.setProperty(f, c[f])
        } catch (v) {
        }
        try {
          a.style[f] = c[f]
        } catch (v) {
        }
      }
    },
    getIconPosition: function (a, b) {
      return a ? "0 -" + (18 + 17 * b) + "px" : "0 -" + (36 + 34 * b) + "px"
    },
    setOpacity: function (a, b) {
      a.style.filter = b ? "alpha(opacity=" + b + ") progid:DXImageTransform.Microsoft.AlphaImageLoader(src=transparent.png, sizingMethod='crop')" : "";
      a.style.opacity = b ? parseFloat(b) / 100 : ""
    },
    initDrop: function (a) {
      if (!this.ids[a].mobile && "" != this.ids[a].hidden) {
        var b, c, d = this.get(this.ids[a].id), g = this.genID();
        c = 310 < 23 * this.ids[a].hidden.split(",").length - 2 ? 310 : 23 * this.ids[a].hidden.split(",").length - 2;
        b = k.createElement("div");
        b.className = "ulogin-dropdown";
        b.id = g;
        this.resetStyle(b, {
          position: "absolute",
          zIndex: 9999,
          width: 128,
          height: c,
          border: "flat" === this.ids[a].theme ? "3px solid #666" : "5px solid #666",
          borderRadius: "flat" === this.ids[a].theme ? 0 : "4px",
          boxShadow: "0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)",
          display: "none"
        });
        this.ids[a].hiddenW = b;
        "body" === this.ids[a].dropdown_container ?
          k.body.appendChild(this.ids[a].hiddenW) : d.appendChild(this.ids[a].hiddenW);
        b = this.buildUrl("/version/2.0/html/drop.html", {
          id: a,
          redirect_uri: this.ids[a].redirect_uri,
          callback: this.ids[a].callback,
          providers: this.ids[a].hidden,
          fields: this.ids[a].fields,
          force_fields: this.ids[a].force_fields,
          optional: this.ids[a].optional,
          othprov: this.ids[a].providers,
          protocol: this.protocol,
          host: this.host,
          lang: this.ids[a].lang,
          verify: this.ids[a].verify,
          sort: this.ids[a].sort,
          altway: this.ids[a].altway ? 1 : null,
          m: this.ids[a].m ?
            1 : 0,
          icons_32: this.ids[a].icons_32,
          icons_16: this.ids[a].icons_16,
          theme: this.ids[a].theme,
          client: this.ids[a].client,
          page: this.page,
          version: this.version
        });
        this.initSocket(b, g, {position: "relative", width: "128px", height: c + "px"}, a);
        b = k.createElement("div");
        this.resetStyle(b, {
          position: "absolute",
          background: "#000",
          left: "initial",
          right: "flat" === this.ids[a].theme ? "-3px" : "-5px",
          top: "100%",
          width: 41,
          height: 13,
          border: "flat" === this.ids[a].theme ? "3px solid #666" : "5px solid #666",
          textAlign: "center"
        });
        c = k.createElement("a");
        c.href = this.buildUrl("");
        c.target = "_blank";
        this.resetStyle(c, {width: 41, height: 13, background: "url(" + this.buildUrl("img/text.png") + ") no-repeat"});
        b.appendChild(c);
        this.ids[a].hiddenW.appendChild(b);
        b = k.createElement("img");
        b.src = this.buildUrl("img/link.png");
        this.resetStyle(b, {width: 8, height: 4, position: "absolute", zIndex: 9999, display: "none"});
        this.ids[a].hiddenA = b;
        d.appendChild(this.ids[a].hiddenA);
        this.ids[a].showed = !1;
        this.add(k.body, "click", function (a, b) {
          b.target || (b.target = b.srcElement);
          for (var c =
            0; c < uLogin.ids.length; c++)b.target != uLogin.ids[c].drop && (uLogin.hide(uLogin.ids[c].hiddenW), uLogin.hide(uLogin.ids[c].hiddenA))
        });
        this.ids[a].hiddenW && this.ids[a].hiddenA && (this.add(this.ids[a].hiddenW, "mouseout", function () {
          uLogin.dropdownDelayed(a, 0)
        }), this.add(this.ids[a].hiddenA, "mouseout", function () {
          uLogin.dropdownDelayed(a, 0)
        }), this.add(this.ids[a].hiddenW, "mouseover", function () {
          uLogin.clearDropTimer(a)
        }), this.add(this.ids[a].hiddenA, "mouseover", function () {
          uLogin.clearDropTimer(a)
        }))
      }
    },
    showDrop: function (a,
                        b) {
      if (this.ids[a].hiddenW || this.ids[a].hiddenA)if (this.ids[a].showed || 0 == b) this.hide(this.ids[a].hiddenW), this.hide(this.ids[a].hiddenA), this.ids[a].showed = !1; else {
        this.show(this.ids[a].hiddenA);
        this.show(this.ids[a].hiddenW);
        this.ids[a].showed = !0;
        var c, d, g = this.ids[a].drop;
        "body" === this.ids[a].dropdown_container && (d = this.getOffset(g), c = d.left, d = d.top, this.ids[a].hiddenW.style.left = c - (1 == b ? 100 : 106) + "px", this.ids[a].hiddenW.style.top = d + (1 == b ? 21 : 37) + "px", this.ids[a].hiddenA.style.left = c + (1 == b ? 4 : 12) +
          "px", this.ids[a].hiddenA.style.top = d + (1 == b ? 17 : 33) + "px");
        c = g.offsetLeft;
        d = g.offsetTop;
        c -= g.scrollLeft;
        d -= g.scrollTop;
        "body" !== this.ids[a].dropdown_container && (this.ids[a].hiddenW.style.left = c - (1 == b ? 100 : 106) + "px", this.ids[a].hiddenW.style.top = d + (1 == b ? 21 : 37) + "px");
        this.ids[a].hiddenA.style.left = c + (1 == b ? 4 : 12) + "px";
        this.ids[a].hiddenA.style.top = d + (1 == b ? 17 : 33) + "px"
      }
    },
    clearDropTimer: function (a) {
      this.ids[a].dropTimer && h.clearTimeout(this.ids[a].dropTimer)
    },
    dropdown: function (a, b) {
      this.clearDropTimer(a);
      this.showDrop(a,
        b)
    },
    dropdownDelayed: function (a, b) {
      this.clearDropTimer(a);
      this.ids[a].dropTimer = m(function () {
        uLogin.showDrop(a, b)
      }, 600)
    },
    initButtons: function (a) {
      var b = this.get(this.ids[a].id);
      this.ids[a].mobile && this.add(this.get(this.ids[a].id), "click", function (b, d) {
        d.preventDefault ? d.preventDefault() : d.returnValue = !1;
        var c = uLogin.buildUrl("version/2.0/html/mobile.html", {
          id: uLogin.ids[a].id,
          redirect_uri: uLogin.ids[a].redirect_uri,
          callback: uLogin.ids[a].callback,
          fields: uLogin.ids[a].fields,
          force_fields: uLogin.ids[a].force_fields,
          optional: uLogin.ids[a].optional,
          protocol: uLogin.ids[a].protocol,
          host: uLogin.host,
          lang: uLogin.ids[a].lang,
          verify: uLogin.ids[a].verify,
          providers: uLogin.ids[a].providers,
          hidden: uLogin.ids[a].hidden,
          icons_32: uLogin.ids[a].icons_32,
          altway: uLogin.ids[a].altway ? 1 : null,
          page: uLogin.page,
          m: uLogin.ids[a].m ? 1 : 0,
          icons_16: uLogin.ids[a].icons_16,
          theme: uLogin.ids[a].theme,
          client: uLogin.ids[a].client
        });
        uLogin.ids[a].altway ? h.top ? h.top.location.href = c : location.href = c : uLogin.openWithReceiver(c, a);
        return !1
      });
      "window" ===
      this.ids[a].type ? this._proceedChildren(b, this._(this._initButton), a) : (this.ids[a].providers = "", this._proceedChildren(b, this._(this._initButton), a), this.ids[a].providers = this.ids[a].providers.slice(0, this.ids[a].providers.length - 1));
      this._changeState(a, this.states[0])
    },
    _: function (a) {
      return function () {
        a.apply(uLogin, arguments)
      }
    },
    _proceedChildren: function (a, b, c) {
      a = a.childNodes;
      var d, g;
      for (g = 0; g < a.length; g++) {
        var f = a[g];
        f.getAttribute && (b(f, c), (d = f.getAttribute("data-uloginbutton") || f.getAttribute("x-ulogin-button")) &&
        -1 < this.inArray(d, this.providerCodes) && !(new RegExp(d + "(,|$)", "i")).test(this.ids[c].providers) && (this.ids[c].providers += d + ","));
        this._proceedChildren(f, b, c)
      }
    },
    _initButton: function (a, b) {
      var c = a.getAttribute("data-uloginbutton") || a.getAttribute("x-ulogin-button");
      if (c)if (-1 < this.inArray(c, this.providerCodes)) this.add(a, "mouseover", function (a) {
        if (/disabled/.test(a.className))return !1;
        uLogin.setOpacity(a, parseFloat(uLogin.ids[b].opacity))
      }), this.add(a, "mouseout", function (a) {
        if (/disabled/.test(a.className))return !1;
        uLogin.setOpacity(a)
      }), this.ids[b].mobile || this.add(a, "click", function (a) {
        if (/disabled/.test(a.className))return !1;
        var c = a.getAttribute("data-uloginbutton") || a.getAttribute("x-ulogin-button");
        if (a.getAttribute("data-disabled-click"))return !1;
        a.setAttribute("data-disabled-click", "1");
        setTimeout(function () {
          a.setAttribute("data-disabled-click", "")
        }, 1E3);
        uLogin.startAuth(c, "", b)
      }); else if ("window" === c && (this.ids[b].mobile || this.add(a, this.ids[b].event, function (a, c) {
          c.preventDefault ? c.preventDefault() :
            c.returnValue = !1;
          if (/disabled/.test(a.className))return !1;
          var d = uLogin.buildUrl(uLogin.ids[b].mobile ? "version/2.0/html/mobile.html" : "version/2.0/html/window.html", {
            id: b,
            redirect_uri: uLogin.ids[b].redirect_uri,
            callback: uLogin.ids[b].callback,
            fields: uLogin.ids[b].fields,
            force_fields: uLogin.ids[b].force_fields,
            optional: uLogin.ids[b].optional,
            protocol: uLogin.protocol,
            host: uLogin.host,
            lang: uLogin.ids[b].lang,
            verify: uLogin.ids[b].verify,
            sort: uLogin.ids[b].sort,
            othprov: uLogin.ids[b].hidden,
            providers: uLogin.ids[b].providers,
            altway: uLogin.ids[b].altway ? 1 : null,
            m: uLogin.ids[b].m ? 1 : 0,
            icons_32: uLogin.ids[b].icons_32,
            icons_16: uLogin.ids[b].icons_16,
            theme: uLogin.ids[b].theme,
            client: uLogin.ids[b].client,
            page: uLogin.page,
            version: uLogin.version
          });
          uLogin.loadWindow(d, b);
          return !1
        }), a.getAttribute("data-ulogin-default"))) {
        var d = this.buildUrl("img/" + ("ru" == this.ids[b].lang ? "" : this.ids[b].lang + "/") + "button.png?version=img.2.0.0"), g = this.buildUrl("img/" + ("ru" == this.ids[b].lang ? "" : this.ids[b].lang + "/") + "button_.png");
        a.src = d;
        this.resetStyle(a,
          {cursor: "pointer"});
        this.add(a, "mouseover", function (a) {
          if (/disabled/.test(a.parentNode.className))return !1;
          a.src != g && (a.src = g)
        });
        this.add(a, "mouseout", function (a) {
          if (/disabled/.test(a.parentNode.className))return !1;
          a.src != d && (a.src = d)
        })
      }
    },
    sendWeight: function (a) {
      this.initSocket(this.buildUrl("version/2.0/html/weight_set.html", {
        provider: a,
        r: parseInt(1E5 * Math.random())
      }), this.getRC(), {background: "transparent"})
    },
    setWeights: function (a) {
      this.supportStorage && (localStorage.providers_weight = a)
    },
    getWeights: function () {
      try {
        return JSON.parse(localStorage.providers_weight)
      } catch (a) {
        return {}
      }
    },
    relProviders: function (a, b, c) {
      a = a.split(",");
      b = b.split(",");
      if (this.supportStorage) {
        var d = this.getWeights(), g;
        for (g in d) {
          var d = this.inArray(g, a), f = this.inArray(g, b);
          -1 !== d ? (a.splice(d, 1), a.splice(0, 0, g)) : -1 !== f && (a.splice(0, 0, g), b.splice(f, 1), b.splice(0, 0, a[a.length - 1]), a.splice(a.length - 1, 1))
        }
      }
      return 1 === c ? a : b
    },
    startAuth: function (a, b, c) {
      var d = {
        name: a,
        window: 1,
        lang: this.ids[c].lang,
        fields: this.ids[c].fields,
        force_fields: this.ids[c].force_fields,
        host: this.host,
        optional: this.ids[c].optional,
        redirect_uri: this.ids[c].redirect_uri ||
        location.href,
        verify: this.ids[c].verify,
        callback: this.ids[c].callback,
        screen: screen.width + "x" + screen.height,
        url: b,
        providers: this.ids[c].providers,
        hidden: this.ids[c].hidden,
        m: this.ids[c].m ? 1 : 0,
        page: this.page,
        icons_32: this.ids[c].icons_32,
        icons_16: this.ids[c].icons_16,
        theme: this.ids[c].theme,
        client: this.ids[c].client
      };
      this.ids[c].altway && (d.altway = 1);
      a = b || "webmoney" != a && "livejournal" != a && "openid" != a ? this.buildUrl("auth.php", d) : this.buildUrl("url.php", d);
      this._changeState(c, this.states[1]);
      this.ids[c].altway ?
        h.top ? h.top.location.href = a : location.href = a : this.openWithReceiver(a, c)
    },
    openWithReceiver: function (a, b) {
      !b && (b = 0);
      var c = 660, d = 420;
      /name=vkontakte/.test(a) ? d = 380 : /name=facebook/.test(a) ? (c = 560, d = 350) : /name=google/.test(a) ? (c = 800, d = 630) : /name=yandex/.test(a) ? (c = 990, d = 530) : /name=lastfm/.test(a) && (c = 1368, d = 894);
      if (this.openFromSocket) this.authSocket.postMessage("window.open::" + a + "::" + c + "::" + d + "::" + (screen.width - c) / 2 + "::" + (screen.height - d) / 2); else {
        this.initSocket(this.buildUrl("/version/2.0/html/buttons_receiver.html",
          {
            four: encodeURIComponent(a),
            r: parseInt(1E5 * Math.random())
          }), this.getRC(), {background: "transparent"}, b);
        var g = uLogin.getRC().getElementsByTagName("iframe");
        g[g.length - 1].contentWindow.open(a, "uLogin_window", "width=" + c + ",height=" + d + ",left=" + (screen.width - c) / 2 + ",top=" + (screen.height - d) / 2)
      }
    },
    checkWindow: function (a, b) {
    },
    checkCurrentWidgets: function () {
      for (var a = 0; this.ids[a];)this.checkWidget(this.ids[a++].id)
    },
    checkWidget: function (a, b) {
      var c = this.get(a);
      if (c)if (this.inited(a)) {
        var d = this.getWidgetNumber(a),
          g = this.ids[d].type;
        if (("small" === g || "panel" === g) && !c.childNodes.length)return c = this.ids[d].id, uLogin.ids[d].id = !1, uLogin.initWidget(c), !0;
        c.getAttribute("data-ulogin-inited") || (c = this.ids[d].id, uLogin.ids[d].id = !1, uLogin.initWidget(c))
      } else this.addWidget(this.get(a), b); else this.ids[this.getWidgetNumber(a)].id = !1
    },
    buildUrl: function (a, b, c) {
      b || (b = {});
      c || (c = !1);
      a = a ? "https://" + this.uLoginHost + "/" + a : "";
      var d = "", g;
      for (g in b) {
        var f = b[g];
        null !== f && (!c && (/\?/.test(f) || /\//.test(f) || /:/.test(f)) && (f = ""),
          d += g + "=" + f + "&")
      }
      0 < d.length && (d = d.substring(0, d.length - 1), a = a + (/\?/.test(a) ? "&" : "?") + d);
      return a
    },
    getWidget: function (a, b) {
      if (this.inited(b))return !1;
      if (this.widgetSettings[a])return this.setProp(b, uLogin.ids.length, this.widgetSettings[a]), !1;
      if (this.waitGetWidget[a] && -1 !== this.inArray(b, this.waitGetWidget[a]))return !1;
      this.waitGetWidget[a] || (this.waitGetWidget[a] = []);
      this.waitGetWidget[a].push(b);
      if (this.widgetSettings[a]) this.setProp(b, this.ids.length, this.widgetSettings[a]); else {
        var c = this.getRC(),
          d = k.createElement("script");
        d.async = !0;
        d.src = this.buildUrl("getwidget", {widgetid: a});
        c.appendChild(d)
      }
    },
    forElements: function (a, b) {
      if (a && a.length)for (var c in a)b(a[c])
    },
    setWidget: function (a, b, c) {
      !c && b && (c = b);
      if ("not_found" === a)return this.forElements(this.waitGetWidget[a], function (a) {
        if ("string" !== typeof a)return !1;
        k.getElementById(a).setAttribute("data-uloginid", "")
      }), !1;
      c && !uLogin.widgetSettings[a] && "undefined" !== typeof c.display && (this.forElements(this.waitGetWidget[a], function (a) {
        if ("string" !== typeof a)return !1;
        var b = k.getElementById(a);
        if (!b)return console.error('uLogin ERROR: not found element with id "' + a + '"'), !1;
        var b = uLogin.parse(b.getAttribute("data-ulogin")), d;
        for (d in b)c[d] = b[d];
        uLogin.setProp(a, uLogin.ids.length, c)
      }), this.widgetSettings[a] = c)
    },
    customInit: function () {
      for (var a = 0; a < arguments.length; a++)if ("string" === typeof arguments[a]) {
        var b = !1;
        if (!uLogin.get(arguments[a]) || !arguments[a])return console.error('uLogin ERROR (customInit): Element with ID="' + arguments[a] + '" not found'),
          !1;
        1 < arguments.length && "object" === typeof arguments[arguments.length - 1] && (b = arguments[arguments.length - 1]);
        uLogin.checkWidget(arguments[a], b)
      }
    },
    getOffsetSum: function (a) {
      for (var b = 0, c = 0; a;)b += parseFloat(a.offsetTop), c += parseFloat(a.offsetLeft), a = a.offsetParent;
      return {top: Math.round(b), left: Math.round(c)}
    },
    getOffsetRect: function (a) {
      a = a.getBoundingClientRect();
      var b = document.body, c = document.documentElement;
      return {
        top: Math.round(a.top + (window.pageYOffset || c.scrollTop || b.scrollTop) - (c.clientTop || b.clientTop ||
          0)),
        left: Math.round(a.left + (window.pageXOffset || c.scrollLeft || b.scrollLeft) - (c.clientLeft || b.clientLeft || 0))
      }
    },
    getOffset: function (a) {
      return a.getBoundingClientRect ? this.getOffsetRect(a) : this.getOffsetSum(a)
    },
    checkAsyncWidgets: function () {
      var a = this.get("ulogin") || this.get("uLogin");
      a && a.id && this.addWidget(a)
    },
    setStateListener: function (a, b, c) {
      this.listeners[a] || (this.listeners[a] = {});
      this.listeners[a][b] || (this.listeners[a][b] = []);
      return this.listeners[a][b].push(c) - 1
    },
    removeStateListener: function (a,
                                   b, c) {
      return this.listeners[a] && this.listeners[a][c] ? this.listeners[a][c].splice(b, 1) : !1
    },
    _changeState: function (a, b, c) {
      try {
        this.ids[a].state = b;
        for (var d = 0; this.listeners[this.ids[a].id][b][d];)this.listeners[this.ids[a].id][b][d++].apply(h, "object" === typeof c ? c : [])
      } catch (g) {
      }
    },
    extend: function (a, b) {
      for (var c in b)a[c] = b[c];
      return a
    },
    arrayIntersectKey: function (a, b) {
      var c = [], d;
      for (d in a)d in b && c.push(d);
      return c
    }
  }, -1 == uLogin.inArray(uLogin.lang, uLogin.langs) && (uLogin.lang = uLogin.langs[0]), uLogin.init("undefined" != typeof uLogin_query ? uLogin_query : ""));
  h.receiver = function (a, b) {
    h[b](a)
  };
  h.redirect = function (a, b) {
    var c = k.createElement("form");
    c.action = b;
    c.method = "post";
    c.target = "_top";
    c.style.display = "none";
    var d = k.createElement("input");
    d.type = "hidden";
    d.name = "token";
    d.value = a;
    c.appendChild(d);
    k.body.appendChild(c);
    c.submit()
  }
})(window, document, navigator, setTimeout);
