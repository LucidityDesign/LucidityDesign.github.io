"use strict";

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t
        }
    }(),
    STYLES = [{
        featureType: "all",
        elementType: "all",
        stylers: [{
            saturation: "-100"
        }]
    }],
    Lucidity = function() {
        function e(t) {
            _classCallCheck(this, e), this.addEvents(), this.thingsToFadeIn = [].slice.call(document.querySelectorAll(".fade-in")), this.bgs = [].slice.call(document.querySelectorAll(".container .bg")), this.onScroll()
        }
        return _createClass(e, [{
            key: "addEvents",
            value: function() {
                var e = this;
                window.addEventListener("scroll", function() {
                    return e.requestTick()
                }), this.addEventListener(".reverse", "mouseenter", function() {
                    this.setAttribute("href", this.getAttribute("href").split("").reverse().join("").replace("p", "@"))
                }), this.addEventListener(".reverse", "mouseleave", function() {
                    this.setAttribute("href", this.getAttribute("href").split("").reverse().join("").replace("@", "p"))
                }), this.addEventListener(".reverse.text", "mouseenter", function() {
                    this.innerHTML = this.innerHTML.split("").reverse().join(""), this.removeAttribute("style"), this.setAttribute("href", this.getAttribute("href").split("").reverse().join("").replace("p", "@"))
                }), this.addEventListener(".reverse.text", "mouseleave", function() {
                    this.innerHTML = this.innerHTML.split("").reverse().join(""), this.style.unicodeBidi = "bidi-override", this.style.direction = "rtl", this.setAttribute("href", this.getAttribute("href").split("").reverse().join("").replace("@", "p"))
                }), this.addEventListener(document.querySelectorAll(".imprint"), "click", function(e) {
                    e.preventDefault(), document.getElementById("wrapper").classList.toggle("active"), document.getElementById("imprint").classList.toggle("active")
                })
            }
        }, {
            key: "addEventListener",
            value: function(e, t, i) {
                if ("string" == typeof e) {
                    var n = document.querySelector(e);
                    n && n.addEventListener(t, i)
                } else
                    for (var s = e.length - 1; s >= 0; s--) e[s].addEventListener(t, i)
            }
        }, {
            key: "requestTick",
            value: function() {
                var e = this;
                this.ticking || (window.requestAnimationFrame(function() {
                    return e.onScroll()
                }), this.ticking = !0)
            }
        }, {
            key: "onScroll",
            value: function() {
                this.fadeIn(), this.parallaxBG(), this.ticking = !1
            }
        }, {
            key: "fadeIn",
            value: function() {
                for (var e in this.thingsToFadeIn) {
                    var t = window.innerHeight,
                        i = this.thingsToFadeIn[e],
                        n = i.dataset.offset ? i.dataset.offset - 0 : 0;
                    t = n ? t + n : 1.26 * t, i.getBoundingClientRect().top <= t && (i.classList.add("fade-in--in-view"), delete this.thingsToFadeIn[e])
                }
            }
        }, {
            key: "parallaxBG",
            value: function() {
                var e = window.innerHeight,
                    t = !0,
                    i = !1,
                    n = void 0;
                try {
                    for (var s, r = this.bgs[Symbol.iterator](); !(t = (s = r.next()).done); t = !0) {
                        var a = s.value,
                            o = a.getBoundingClientRect();
                        if (o.top <= e && o.bottom >= 0) {
                            var l = (o.bottom / window.innerHeight - 2) * (window.innerHeight / 110);
                            l = Math.max(Math.min(l, 0), -16.66), a.style.transform = "translate3d(0," + l + "%, 0)"
                        }
                        a.classList.contains("bg--lazy-load") && o.top < 1.33 * e && a.classList.remove("bg--lazy-load")
                    }
                } catch (e) {
                    i = !0, n = e
                } finally {
                    try {
                        !t && r.return && r.return()
                    } finally {
                        if (i) throw n
                    }
                }
            }
        }]), e
    }();
new Lucidity;
