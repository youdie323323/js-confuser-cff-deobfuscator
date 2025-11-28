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
        _6TxUo.aqU7X65 = b.prototype;
        _6TxUo.x7WOs28 = class extends h {
          constructor() {
            super();
            Object.setPrototypeOf(this, _6TxUo.aqU7X65);
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
        _6TxUo.HwXlXX = _6TxUo.x7WOs28.prototype;
        x7WOs28.observedAttributes = b.observedAttributes;
        HwXlXX.connectedCallback = aqU7X65.connectedCallback;
        HwXlXX.disconnectedCallback = aqU7X65.disconnectedCallback;
        HwXlXX.attributeChangedCallback = aqU7X65.attributeChangedCallback;
        HwXlXX.adoptedCallback = aqU7X65.adoptedCallback;
        k.set(b, a);
        l.set(a, b);
        return m.call(window.customElements, a, x7WOs28);
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