//PRELOADER
setTimeout(function(){$("#preloader").fadeOut("slow"),$("body").delay(700).css({"overflow-y":"visible"})},2000);

//TOOLTIP BOOTSTRAP
$(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip()}),
  
// modalx.min.js
    function(t) {
        var e, i, o = t(window),
            n = {},
            a = [],
            s = [],
            p = null,
            d = "_open",
            l = "_close",
            c = [],
            r = null,
            u = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
            f = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",
            h = {
                _init: function(e) {
                    var i = t(e),
                        o = i.data("popupoptions");
                    s[e.id] = !1, a[e.id] = 0, i.data("popup-initialized") || (i.attr("data-popup-initialized", "true"), h._initonce(e)), o.autoopen && setTimeout(function() {
                        h.show(e, 0)
                    }, 0)
                },
                _initonce: function(i) {
                    var o, n, a = t(i),
                        s = t("body"),
                        l = a.data("popupoptions");
                    if (p = parseInt(s.css("margin-right"), 10), r = void 0 !== document.body.style.webkitTransition || void 0 !== document.body.style.MozTransition || void 0 !== document.body.style.msTransition || void 0 !== document.body.style.OTransition || void 0 !== document.body.style.transition, l.backgroundactive && (l.background = !1, l.blur = !1, l.scrolllock = !1), l.scrolllock) {
                        var c, f;
                        "undefined" == typeof e && (c = t('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), f = c.children(), e = f.innerWidth() - f.height(99).innerWidth(), c.remove())
                    }
                    if (a.attr("id") || a.attr("id", "j-popup-" + parseInt(1e8 * Math.random(), 10)), a.addClass("popup_content"), l.background && !t("#" + i.id + "_background").length) {
                        s.append('<div id="' + i.id + '_background" class="popup_background"></div>');
                        var b = t("#" + i.id + "_background");
                        b.css({
                            opacity: 0,
                            visibility: "hidden",
                            backgroundColor: l.color,
                            position: "fixed",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }), l.setzindex && !l.autozindex && b.css("z-index", "100000"), l.transition && b.css("transition", l.transition)
                    }
                    s.append(i), a.wrap('<div id="' + i.id + '_wrapper" class="popup_wrapper" />'), o = t("#" + i.id + "_wrapper"), o.css({
                        opacity: 0,
                        visibility: "hidden",
                        position: "absolute"
                    }), u && o.css("cursor", "pointer"), "overlay" == l.type && o.css("overflow", "auto"), a.css({
                        opacity: 0,
                        visibility: "hidden",
                        display: "inline-block"
                    }), l.setzindex && !l.autozindex && o.css("z-index", "100001"), l.outline || a.css("outline", "none"), l.transition && (a.css("transition", l.transition), o.css("transition", l.transition)), a.attr("aria-hidden", !0), "overlay" == l.type && (a.css({
                        textAlign: "left",
                        position: "relative",
                        verticalAlign: "middle"
                    }), n = {
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        textAlign: "center"
                    }, l.backgroundactive && (n.position = "absolute", n.height = "0", n.overflow = "visible"), o.css(n), o.append('<div class="popup_align" />'), t(".popup_align").css({
                        display: "inline-block",
                        verticalAlign: "middle",
                        height: "100%"
                    })), a.attr("role", "dialog");
                    var v = l.openelement ? l.openelement : "." + i.id + d;
                    t(v).each(function(e, i) {
                        t(i).attr("data-popup-ordinal", e), i.id || t(i).attr("id", "open_" + parseInt(1e8 * Math.random(), 10))
                    }), a.attr("aria-labelledby") || a.attr("aria-label") || a.attr("aria-labelledby", t(v).attr("id")), "hover" == l.action ? (l.keepfocus = !1, t(v).on("mouseenter", function(e) {
                        h.show(i, t(this).data("popup-ordinal"))
                    }), t(v).on("mouseleave", function(t) {
                        h.hide(i)
                    })) : t(document).on("click", v, function(e) {
                        e.preventDefault();
                        var o = t(this).data("popup-ordinal");
                        setTimeout(function() {
                            h.show(i, o)
                        }, 0)
                    }), l.closebutton && h.addclosebutton(i), l.detach ? a.hide().detach() : o.hide()
                },
                show: function(n, d) {
                    var u = t(n);
                    if (!u.data("popup-visible")) {
                        u.data("popup-initialized") || h._init(n), u.attr("data-popup-initialized", "true");
                        var f = t("body"),
                            v = u.data("popupoptions"),
                            g = t("#" + n.id + "_wrapper"),
                            m = t("#" + n.id + "_background");
                        if (b(n, d, v.beforeopen), s[n.id] = d, setTimeout(function() {
                                c.push(n.id)
                            }, 0), v.autozindex) {
                            for (var y = document.getElementsByTagName("*"), _ = y.length, k = 0, w = 0; _ > w; w++) {
                                var x = t(y[w]).css("z-index");
                                "auto" !== x && (x = parseInt(x, 10), x > k && (k = x))
                            }
                            a[n.id] = k, v.background && a[n.id] > 0 && t("#" + n.id + "_background").css({
                                zIndex: a[n.id] + 1
                            }), a[n.id] > 0 && g.css({
                                zIndex: a[n.id] + 2
                            })
                        }
                        v.detach ? (g.prepend(n), u.show()) : g.show(), i = setTimeout(function() {
                            g.css({
                                visibility: "visible",
                                opacity: 1
                            }), t("html").addClass("popup_visible").addClass("popup_visible_" + n.id), g.addClass("popup_wrapper_visible")
                        }, 20), v.scrolllock && (f.css("overflow", "hidden"), f.height() > o.height() && f.css("margin-right", p + e)), v.backgroundactive && u.css({
                            top: (o.height() - (u.get(0).offsetHeight + parseInt(u.css("margin-top"), 10) + parseInt(u.css("margin-bottom"), 10))) / 2 + "px"
                        }), u.css({
                            visibility: "visible",
                            opacity: 1
                        }), v.background && (m.css({
                            visibility: "visible",
                            opacity: v.opacity
                        }), setTimeout(function() {
                            m.css({
                                opacity: v.opacity
                            })
                        }, 0)), u.data("popup-visible", !0), h.reposition(n, d), u.data("focusedelementbeforepopup", document.activeElement), v.keepfocus && (u.attr("tabindex", -1), setTimeout(function() {
                            "closebutton" === v.focuselement ? t("#" + n.id + " ." + n.id + l + ":first").focus() : v.focuselement ? t(v.focuselement).focus() : u.focus()
                        }, v.focusdelay)), t(v.pagecontainer).attr("aria-hidden", !0), u.attr("aria-hidden", !1), b(n, d, v.onopen), r ? g.one("transitionend", function() {
                            b(n, d, v.opentransitionend)
                        }) : b(n, d, v.opentransitionend)
                    }
                },
                hide: function(e, o) {
                    var n = t.inArray(e.id, c);
                    if (-1 !== n) {
                        i && clearTimeout(i);
                        var a = t("body"),
                            d = t(e),
                            l = d.data("popupoptions"),
                            u = t("#" + e.id + "_wrapper"),
                            f = t("#" + e.id + "_background");
                        d.data("popup-visible", !1), 1 === c.length ? t("html").removeClass("popup_visible").removeClass("popup_visible_" + e.id) : t("html").hasClass("popup_visible_" + e.id) && t("html").removeClass("popup_visible_" + e.id), c.splice(n, 1), u.hasClass("popup_wrapper_visible") && u.removeClass("popup_wrapper_visible"), l.keepfocus && !o && setTimeout(function() {
                            t(d.data("focusedelementbeforepopup")).is(":visible") && d.data("focusedelementbeforepopup").focus()
                        }, 0), setTimeout(function() {
                            u.css({
                                visibility: "hidden",
                                opacity: 0
                            }), d.css({
                                visibility: "hidden",
                                opacity: 0
                            }), l.background && f.css({
                                visibility: "hidden",
                                opacity: 0
                            })
                        }, 300), t(l.pagecontainer).attr("aria-hidden", !1), d.attr("aria-hidden", !0), b(e, s[e.id], l.onclose), r && "0s" !== d.css("transition-duration") ? d.one("transitionend", function(t) {
                            d.data("popup-visible") || (l.detach ? d.hide().detach() : u.hide()), l.scrolllock && setTimeout(function() {
                                a.css({
                                    overflow: "visible",
                                    "margin-right": p
                                })
                            }, 10), b(e, s[e.id], l.closetransitionend)
                        }) : (l.detach ? d.hide().detach() : u.hide(), l.scrolllock && setTimeout(function() {
                            a.css({
                                overflow: "visible",
                                "margin-right": p
                            })
                        }, 10), b(e, s[e.id], l.closetransitionend))
                    }
                },
                toggle: function(e, i) {
                    t(e).data("popup-visible") ? h.hide(e) : setTimeout(function() {
                        h.show(e, i)
                    }, 0)
                },
                reposition: function(e, i) {
                    var o = t(e),
                        n = o.data("popupoptions"),
                        a = t("#" + e.id + "_wrapper");
                    t("#" + e.id + "_background");
                    i = i || 0, "overlay" == n.type && (n.horizontal ? a.css("text-align", n.horizontal) : a.css("text-align", "center"), n.vertical ? o.css("vertical-align", n.vertical) : o.css("vertical-align", "middle"))
                },
                addclosebutton: function(e) {
                    var i;
                    i = t(e).data("popupoptions").closebuttonmarkup ? t(n.closebuttonmarkup).addClass(e.id + "_close") : '<button class="popup_close ' + e.id + '_close" title="Close" aria-label="Close"><span aria-hidden="true">×</span></button>', t(e).data("popup-initialized") && t(e).append(i)
                }
            },
            b = function(e, i, o) {
                var n = t(e).data("popupoptions"),
                    a = n.openelement ? n.openelement : "." + e.id + d,
                    s = t(a + '[data-popup-ordinal="' + i + '"]');
                "function" == typeof o && o.call(t(e), e, s)
            };
        t(document).on("keydown", function(e) {
            if (c.length) {
                var i = c[c.length - 1],
                    o = document.getElementById(i);
                t(o).data("popupoptions").escape && 27 == e.keyCode && h.hide(o)
            }
        }), t(document).on("click", function(e) {
            if (c.length) {
                var i = c[c.length - 1],
                    o = document.getElementById(i),
                    n = t(o).data("popupoptions").closeelement ? t(o).data("popupoptions").closeelement : "." + o.id + l;
                t(e.target).closest(n).length && (e.preventDefault(), h.hide(o)), t(o).data("popupoptions").blur && !t(e.target).closest("#" + i).length && 2 !== e.which && t(e.target).is(":visible") && (t(o).data("popupoptions").background ? (h.hide(o), e.preventDefault()) : h.hide(o, !0))
            }
        }), t(document).on("keydown", function(e) {
            if (c.length && 9 == e.which) {
                var i = c[c.length - 1],
                    o = document.getElementById(i),
                    n = t(o).find("*"),
                    a = n.filter(f).filter(":visible"),
                    s = t(":focus"),
                    p = a.length,
                    d = a.index(s);
                0 === p ? (t(o).focus(), e.preventDefault()) : e.shiftKey ? 0 === d && (a.get(p - 1).focus(), e.preventDefault()) : d == p - 1 && (a.get(0).focus(), e.preventDefault())
            }
        }), t.fn.popup = function(e) {
            return this.each(function() {
                var i = t(this);
                if ("object" == typeof e) {
                    var o = t.extend({}, t.fn.popup.defaults, i.data("popupoptions"), e);
                    i.data("popupoptions", o), n = i.data("popupoptions"), h._init(this)
                } else "string" == typeof e ? (i.data("popupoptions") || (i.data("popupoptions", t.fn.popup.defaults), n = i.data("popupoptions")), h[e].call(this, this)) : (i.data("popupoptions") || (i.data("popupoptions", t.fn.popup.defaults), n = i.data("popupoptions")), h._init(this))
            })
        }, t.fn.popup.defaults = {
            type: "overlay",
            autoopen: !1,
            background: !0,
            backgroundactive: !1,
            color: "#000",
            opacity: "0.35",
            horizontal: "center",
            vertical: "middle",
            offsettop: 0,
            offsetleft: 0,
            escape: !0,
            setzindex: !0,
            autozindex: !1,
            scrolllock: !1,
            closebutton: !1,
            closebuttonmarkup: null,
            keepfocus: !0,
            focuselement: null,
            focusdelay: 50,
            outline: !1,
            pagecontainer: null,
            detach: !1,
            openelement: null,
            closeelement: null,
            transition: null,
            tooltipanchor: null,
            beforeopen: null,
            onclose: null,
            onopen: null,
            opentransitionend: null,
            closetransitionend: null
        }
    }(jQuery);