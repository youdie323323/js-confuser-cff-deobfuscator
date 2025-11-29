( () => {
    if (window.customElements) {
        var h = window.HTMLElement
          , m = window.customElements.define
          , n = window.customElements.get
          , k = new Map
          , l = new Map
          , e = !1
          , f = !1;
        window.HTMLElement = function() {
            if (!e) {
                var a = k.get(this.constructor);
                a = n.call(window.customElements, a);
                f = !0;
                return new a
            }
            e = !1
        }
        ;
        window.HTMLElement.prototype = h.prototype;
        window.HTMLElement.es5Shimmed = !0;
        Object.defineProperty(window, "customElements", {
            value: window.customElements,
            configurable: !0,
            writable: !0
        });
        Object.defineProperty(window.customElements, "define", {
            value: (a, b) => {
                const c = b.prototype
                  , g = class extends h {
                    constructor() {
                        super();
                        Object.setPrototypeOf(this, c);
                        if (!f) {
                            e = !0;
                            try {
                                b.call(this)
                            } catch (p) {
                                throw Error("Constructing ".concat(a, ": ").concat(p));
                            }
                        }
                        f = !1
                    }
                }
                  , d = g.prototype;
                g.observedAttributes = b.observedAttributes;
                d.connectedCallback = c.connectedCallback;
                d.disconnectedCallback = c.disconnectedCallback;
                d.attributeChangedCallback = c.attributeChangedCallback;
                d.adoptedCallback = c.adoptedCallback;
                k.set(b, a);
                l.set(a, b);
                if (m) {
                    m.call(window.customElements, a, g)
                } else {
                    console.log("branch else");
                }
            }
            ,
            configurable: !0,
            writable: !0
        });
        Object.defineProperty(window.customElements, "get", {
            value: a => l.get(a),
            configurable: !0,
            writable: !0
        });
        if (navigator.userAgent.match(/Version\/(10\..*|11\.0\..*)Safari/)) {
            const a = HTMLElement.prototype.constructor;
            Object.defineProperty(HTMLElement.prototype, "constructor", {
                configurable: !0,
                get() {
                    return a
                },
                set(b) {
                    Object.defineProperty(this, "constructor", {
                        value: b,
                        configurable: !0,
                        writable: !0
                    })
                }
            })
        }
    }
}
)();
