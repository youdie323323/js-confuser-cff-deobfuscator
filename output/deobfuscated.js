(() => {
  if (window.customElements) {
    var h = window.HTMLElement;
    var m = window.customElements.define;
    var n = window.customElements.get;
    var k = new Map();
    var l = new Map();
    var e = false;
    var f = false;
    window.HTMLElement = function () {
      if (!e) {
        var a = k.get(this.constructor);
        a = n.call(window.customElements, a);
        f = true;
        return new a();
      }
      e = false;
    };
    window.HTMLElement.prototype = h.prototype;
    window.HTMLElement.es5Shimmed = true;
    Object.defineProperty(window, "customElements", {
      value: window.customElements,
      configurable: true,
      writable: true
    });
    Object.defineProperty(window.customElements, "define", {
      value: (a, b) => {
        psUqyio.drae5lD = b.prototype;
        psUqyio.NINXwgo = class extends h {
          constructor() {
            super();
            Object.setPrototypeOf(this, psUqyio.drae5lD);
            if (!f) {
              e = true;
              try {
                b.call(this);
              } catch (p) {
                throw Error(`Constructing ${a}: ${p}`);
              }
            }
            f = false;
          }
        };
        NINXwgo.observedAttributes = b.observedAttributes;
        EwWZ7J.connectedCallback = drae5lD.connectedCallback;
        EwWZ7J.disconnectedCallback = drae5lD.disconnectedCallback;
        EwWZ7J.attributeChangedCallback = drae5lD.attributeChangedCallback;
        EwWZ7J.adoptedCallback = drae5lD.adoptedCallback;
        k.set(b, a);
        l.set(a, b);
        if (m) {
          m.call(window.customElements, a, NINXwgo);
        } else {
          console.log("branch else");
        }
      },
      configurable: true,
      writable: true
    });
    Object.defineProperty(window.customElements, "get", {
      value: a => {
        return l.get(a);
      },
      configurable: true,
      writable: true
    });
    if (navigator.userAgent.match(new RegExp("Version\\/(10\\..*|11\\.0\\..*)Safari", ""))) {
      const a = HTMLElement.prototype.constructor;
      Object.defineProperty(HTMLElement.prototype, "constructor", {
        configurable: true,
        get() {
          return a;
        },
        set(b) {
          Object.defineProperty(this, "constructor", {
            value: b,
            configurable: true,
            writable: true
          });
        }
      });
    }
  }
})();