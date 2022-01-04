'use strict';

var motorcortex = require('@donkeyclip/motorcortex');

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var BgOpener = /*#__PURE__*/function (_HTMLClip) {
  _inherits(BgOpener, _HTMLClip);

  var _super = _createSuper(BgOpener);

  function BgOpener() {
    _classCallCheck(this, BgOpener);

    return _super.apply(this, arguments);
  }

  _createClass(BgOpener, [{
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"bg-wrapper bg-wrapper-0\">\n          <div class=\"bg bg-0\"></div>\n        </div>\n        <div class=\"bg-wrapper bg-wrapper-1\">\n          <div class=\"bg bg-1\"></div>\n        </div>\n  \t  </div>\n    ";
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        flex-direction: column;\n      }\n      .bg-wrapper{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        position: relative;\n        overflow: hidden;\n      }\n      .bg{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n        background-size: contain;\n        position: relative;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var bgPosition = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: "".concat(0, "px")
        },
        initialValues: {
          top: "-".concat(this.attrs.height / 2, "px")
        }
      }, {
        duration: 300,
        selector: ".bg-0",
        easing: this.attrs.easing
      });
      this.addIncident(bgPosition, 0);
      var bgPositionOne = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: "-".concat(this.attrs.height / 2, "px")
        },
        initialValues: {
          top: "-".concat(this.attrs.height / 2, "px")
        }
      }, {
        duration: 300,
        selector: ".bg-1",
        easing: this.attrs.easing
      });
      this.addIncident(bgPositionOne, 0);
      var wrapperHeight = new motorcortex.CSSEffect({
        animatedAttrs: {
          height: "".concat(this.attrs.height / 2, "px"),
          top: "".concat(0, "px")
        },
        initialValues: {
          height: "".concat(0, "px"),
          top: "".concat(this.attrs.height / 2, "px")
        }
      }, {
        duration: 300,
        selector: ".bg-wrapper",
        easing: this.attrs.easing
      });
      this.addIncident(wrapperHeight, 0);
      var wrapperHeightOut = new motorcortex.CSSEffect({
        animatedAttrs: {
          // height: `${this.attrs.height/2}px`,
          top: "-".concat(this.attrs.height / 2, "px")
        },
        initialValues: {
          // height: `${0}px`,
          top: "".concat(0, "px")
        }
      }, {
        duration: 300,
        selector: ".bg-wrapper-0",
        easing: this.attrs.easing
      });
      this.addIncident(wrapperHeightOut, this.attrs.exitStart);
      var wrapperHeightOutOne = new motorcortex.CSSEffect({
        animatedAttrs: {
          // height: `${this.attrs.height/2}px`,
          top: "".concat(this.attrs.height / 2, "px")
        },
        initialValues: {
          // height: `${0}px`,
          top: "".concat(0, "px")
        }
      }, {
        duration: 300,
        selector: ".bg-wrapper-1",
        easing: this.attrs.easing
      });
      this.addIncident(wrapperHeightOutOne, this.attrs.exitStart);
      var bgPositionOut = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: "".concat(this.attrs.height / 2, "px")
        } // initialValues: {
        //   top: `-${this.attrs.height/2}px`
        // }

      }, {
        duration: 300,
        selector: ".bg-0",
        easing: this.attrs.easing
      });
      this.addIncident(bgPositionOut, this.attrs.exitStart);
      var bgPositionOneOut = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: "-".concat(this.attrs.height, "px")
        },
        initialValues: {
          top: "-".concat(this.attrs.height / 2, "px")
        }
      }, {
        duration: 300,
        selector: ".bg-1",
        easing: this.attrs.easing
      });
      this.addIncident(bgPositionOneOut, this.attrs.exitStart);
    }
  }]);

  return BgOpener;
}(motorcortex.HTMLClip);

var TwoSidesReveal = /*#__PURE__*/function (_HTMLClip) {
  _inherits(TwoSidesReveal, _HTMLClip);

  var _super = _createSuper(TwoSidesReveal);

  function TwoSidesReveal() {
    _classCallCheck(this, TwoSidesReveal);

    return _super.apply(this, arguments);
  }

  _createClass(TwoSidesReveal, [{
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"bg-wrapper bg-wrapper-0\">\n          <div class=\"bg bg-0\"></div>\n        </div>\n        <div class=\"bg-wrapper bg-wrapper-1\">\n          <div class=\"bg bg-1\"></div>\n        </div>\n  \t  </div>\n    ";
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        overflow: hidden;\n      }\n      .bg-wrapper{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        position: absolute;\n        overflow: hidden;\n      }\n      .bg-wrapper-0{\n        right: ").concat(this.attrs.width / 2, "px;\n      }\n      .bg-wrapper-1{\n        left: ").concat(this.attrs.width / 2, "px;\n      }\n      .bg{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n        background-size: contain;\n        position: relative;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var bgPositionLeft = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "".concat(this.attrs.width / 2, "px")
        },
        initialValues: {
          left: "".concat(this.attrs.width, "px")
        }
      }, {
        duration: 1000,
        selector: ".bg-0",
        easing: this.attrs.easing
      });
      this.addIncident(bgPositionLeft, 0);
      var bgPositionRigth = new motorcortex.CSSEffect({
        animatedAttrs: {
          right: "".concat(this.attrs.width / 2, "px")
        },
        initialValues: {
          right: "".concat(this.attrs.width, "px")
        }
      }, {
        duration: 1000,
        selector: ".bg-1",
        easing: this.attrs.easing
      });
      this.addIncident(bgPositionRigth, 0);
    }
  }]);

  return TwoSidesReveal;
}(motorcortex.HTMLClip);

var ColumnReveal = /*#__PURE__*/function (_HTMLClip) {
  _inherits(ColumnReveal, _HTMLClip);

  var _super = _createSuper(ColumnReveal);

  function ColumnReveal() {
    _classCallCheck(this, ColumnReveal);

    return _super.apply(this, arguments);
  }

  _createClass(ColumnReveal, [{
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-0\"></div>\n        </div>\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-1\"></div>\n        </div>\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-2\"></div>\n        </div>\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-3\"></div>\n        </div>\n  \t  </div>\n    ";
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n      }\n      .bg-wrapper{\n        width: ").concat(this.attrs.width / 4, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        position: relative;\n        overflow: hidden;\n        top: -").concat(this.attrs.height, "px;\n      }\n      .bg{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n        background-size: cover;\n        position: absolute;\n      }\n      .bg-0{\n        left:0\n      }\n      .bg-1{\n        left:-").concat(this.attrs.width - this.attrs.width / 4 * 3, "px;\n      }\n      .bg-2{\n        left:-").concat(this.attrs.width - this.attrs.width / 4 * 2, "px;\n      }\n      .bg-3{\n        left:-").concat(this.attrs.width - this.attrs.width / 4, "px;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var bgPositionOneIn = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: "".concat(0, "px")
        }
      }, {
        duration: 1000,
        selector: ".bg-wrapper",
        easing: this.attrs.easing,
        delay: "@expression(random(500))"
      });
      this.addIncident(bgPositionOneIn, 0);

      if (this.attrs.bgOut === true) {
        var bgPositionOneOut = new motorcortex.CSSEffect({
          animatedAttrs: {
            top: "".concat(this.attrs.height, "px")
          }
        }, {
          duration: 1000,
          selector: ".bg-wrapper",
          easing: this.attrs.easing,
          delay: "@expression(random(500))"
        });
        this.addIncident(bgPositionOneOut, this.attrs.exitStart);
      }
    }
  }]);

  return ColumnReveal;
}(motorcortex.HTMLClip);

var RowReveal = /*#__PURE__*/function (_HTMLClip) {
  _inherits(RowReveal, _HTMLClip);

  var _super = _createSuper(RowReveal);

  function RowReveal() {
    _classCallCheck(this, RowReveal);

    return _super.apply(this, arguments);
  }

  _createClass(RowReveal, [{
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-0\"></div>\n        </div>\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-1\"></div>\n        </div>\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-2\"></div>\n        </div>\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-3\"></div>\n        </div>\n  \t  </div>\n    ";
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        flex-direction: column;\n      }\n      .bg-wrapper{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height / 4, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        position: relative;\n        overflow: hidden;\n        left:").concat(this.attrs.width, "px;\n      }\n      .bg{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n        background-size: cover;\n        position: relative;\n      }\n      .bg-0{\n        top:0\n      }\n      .bg-1{\n        top:-").concat(this.attrs.height - this.attrs.height / 4 * 3, "px;\n      }\n      .bg-2{\n        top:-").concat(this.attrs.height - this.attrs.height / 4 * 2, "px;\n      }\n      .bg-3{\n        top:-").concat(this.attrs.height - this.attrs.height / 4, "px;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var bgPositionOneIn = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "0px"
        }
      }, {
        duration: 1000,
        selector: ".bg-wrapper",
        easing: this.attrs.easing,
        delay: "@stagger(0, 500,0)"
      });
      this.addIncident(bgPositionOneIn, 0);

      if (this.attrs.bgOut === true) {
        var bgPositionOneOut = new motorcortex.CSSEffect({
          animatedAttrs: {
            left: "-".concat(this.attrs.width, "px")
          }
        }, {
          duration: 1000,
          selector: ".bg-wrapper",
          easing: this.attrs.easing,
          delay: "@stagger(0, 500,0)"
        });
        this.addIncident(bgPositionOneOut, this.attrs.exitStart);
      }
    }
  }]);

  return RowReveal;
}(motorcortex.HTMLClip);

var Grid = /*#__PURE__*/function (_HTMLClip) {
  _inherits(Grid, _HTMLClip);

  var _super = _createSuper(Grid);

  function Grid() {
    _classCallCheck(this, Grid);

    return _super.apply(this, arguments);
  }

  _createClass(Grid, [{
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      var gridList = [];
      var items = this.attrs.columns * this.attrs.rows;

      for (var i = 0; i < items; i++) {
        gridList.push(" <div  class=\"grid grid-".concat(i, "\"> </div> "));
      }

      return "\n    <div class=\"wrapper\">\n      ".concat(gridList.join(""), "\n\t  </div>\n    ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        font-family: 'Poppins', sans-serif;\n        display: grid;\n        grid-template-columns: repeat(").concat(this.attrs.columns, ", 1fr);\n        justify-items: center;\n      }\n      .grid{\n        background: ").concat(this.attrs.color, ";\n        width: ").concat(this.attrs.width / this.attrs.columns, "px;\n        height: ").concat(this.attrs.height / this.attrs.rows, "px;\n      }\n  ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var gridOpacity = new motorcortex.CSSEffect({
        animatedAttrs: {
          opacity: 0
        },
        initialValues: {
          opacity: 0.7
        }
      }, {
        duration: 1000,
        selector: ".grid",
        delay: "@expression(random(1000))"
      });
      this.addIncident(gridOpacity, 0);
    }
  }]);

  return Grid;
}(motorcortex.HTMLClip);

var ThreeSidesReveal = /*#__PURE__*/function (_HTMLClip) {
  _inherits(ThreeSidesReveal, _HTMLClip);

  var _super = _createSuper(ThreeSidesReveal);

  function ThreeSidesReveal() {
    _classCallCheck(this, ThreeSidesReveal);

    return _super.apply(this, arguments);
  }

  _createClass(ThreeSidesReveal, [{
    key: "font",
    get: function get() {
      return [{
        type: "google-font",
        src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
      }];
    }
  }, {
    key: "html",
    get: function get() {
      return "\n      <div class=\"wrapper\">\n        <div class=\"bg-wrapper bg-wrapper-0\">\n          <div class=\" bg-wrapper-in\">\n            <div class=\"bg bg-0\"><div class=\"bg-in\"></div></div>\n          </div>\n          <div class=\" bg-wrapper-in\">\n            <div class=\"bg bg-1\"><div class=\"bg-in\"></div></div>\n          </div>\n        </div>\n        <div class=\"bg-wrapper  bg-wrapper-1\">\n          <div class=\"bg-wrapper-full-width bg-wrapper-in \">\n            <div class=\"bg bg-2\"><div class=\"bg-in\"></div></div>.\n          </div>\n        </div>\n  \t  </div>\n    ";
    }
  }, {
    key: "css",
    get: function get() {
      return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        flex-direction: column;\n      }\n      .bg-wrapper{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        position: relative;\n        overflow: hidden;\n      }\n\n      .bg-wrapper-0{\n        height: ").concat(this.attrs.height * 0.65, "px;\n      }\n      .bg-wrapper-1{\n        height: ").concat(this.attrs.height * 0.35, "px;\n      }\n      .bg-wrapper-in{\n        width: ").concat(this.attrs.width / 2, "px;\n        height: ").concat(this.attrs.height * 0.65, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        position: relative;\n        overflow: hidden;\n      }\n      .bg-wrapper-full-width{\n        width: ").concat(this.attrs.width, "px;\n      }\n      .bg{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n        background-size: cover;\n        position: absolute;\n      }\n      .bg-0{\n        left:0\n      }\n      .bg-1{\n        left:-").concat(this.attrs.width / 2, "px;\n      }\n      .bg-2{\n        top:-").concat(this.attrs.height * 0.65, "px;\n      }\n      .bg-in{\n        background:").concat(this.attrs.overlayColor, ";\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n      }\n    ");
    }
  }, {
    key: "buildTree",
    value: function buildTree() {
      var bgWrapperBgColor = new motorcortex.CSSEffect({
        animatedAttrs: {
          opacity: 0
        },
        initialValues: {
          opacity: 1
        }
      }, {
        duration: 1000,
        selector: ".bg-in",
        easing: "easeOutQuart",
        delay: "@stagger(200, 500,0)"
      });
      this.addIncident(bgWrapperBgColor, 0);
      var bgWrapperOpacity = new motorcortex.CSSEffect({
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      }, {
        duration: 1000,
        selector: ".bg-wrapper-in",
        easing: "easeOutQuart",
        delay: "@stagger(0, 500,0)"
      });
      this.addIncident(bgWrapperOpacity, 100);
      var bgOne = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "0px"
        },
        initialValues: {
          left: "-".concat(this.attrs.width / 2, "px")
        }
      }, {
        duration: 1400,
        selector: ".bg-0",
        easing: "easeOutQuart"
      });
      this.addIncident(bgOne, 0);
      var bgTwo = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: "0px"
        },
        initialValues: {
          top: "-".concat(this.attrs.height * 0.65, "px")
        }
      }, {
        duration: 1000,
        selector: ".bg-1",
        easing: "easeOutQuart"
      });
      this.addIncident(bgTwo, 400);
      var bgThree = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: "0px"
        },
        initialValues: {
          left: "-".concat(this.attrs.width / 2, "px")
        }
      }, {
        duration: 1500,
        selector: ".bg-2",
        easing: "easeOutQuart"
      });
      this.addIncident(bgThree, 400);
      var bgScale = new motorcortex.CSSEffect({
        animatedAttrs: {
          transform: {
            scale: 1
          }
        },
        initialValues: {
          transform: {
            scale: 1.2
          }
        }
      }, {
        duration: 3600,
        selector: ".bg"
      });
      this.addIncident(bgScale, 1000);

      if (this.attrs.grid === true) {
        var Grid$1 = new Grid({
          width: this.attrs.width,
          height: this.attrs.height,
          color: this.attrs.gridColor,
          columns: this.attrs.columns,
          rows: this.attrs.rows
        }, {
          selector: ".bg",
          duration: this.attrs.gridDuration || 1972
        });
        this.addIncident(Grid$1, 0);
      }
    }
  }]);

  return ThreeSidesReveal;
}(motorcortex.HTMLClip);

var BgOpenerValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  bgUrl: {
    optional: false,
    type: "string"
  },
  easing: {
    optional: false,
    type: "string"
  },
  exitStart: {
    optional: false,
    type: "number"
  }
};
var TwoSidesRevealValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  bgUrl: {
    optional: false,
    type: "string"
  },
  easing: {
    optional: false,
    type: "string"
  }
};
var RowRevealValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  bgUrl: {
    optional: false,
    type: "string"
  },
  easing: {
    optional: false,
    type: "string"
  },
  exitStart: {
    optional: false,
    type: "number"
  },
  bgOut: {
    optional: false,
    type: "boolean"
  }
};
var ColumnRevealValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  bgUrl: {
    optional: false,
    type: "string"
  },
  easing: {
    optional: false,
    type: "string"
  },
  exitStart: {
    optional: false,
    type: "number"
  },
  bgOut: {
    optional: false,
    type: "boolean"
  }
};
var GridValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  color: {
    optional: false,
    type: "color"
  },
  columns: {
    optional: false,
    type: "number"
  },
  rows: {
    optional: false,
    type: "number"
  }
};
var ThreeSidesRevealValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  bgUrl: {
    optional: false,
    type: "string"
  },
  overlayColor: {
    optional: false,
    type: "color"
  },
  grid: {
    optional: false,
    type: "boolean"
  },
  gridDuration: {
    optional: true,
    type: "number"
  },
  gridColor: {
    optional: false,
    type: "color"
  },
  columns: {
    optional: false,
    type: "number"
  },
  rows: {
    optional: false,
    type: "number"
  }
};

var name = "@donkeyclip/motorcortex-backgrounds";
var version = "0.1.0";
var description = "Backgrounds plugin for MotorCortex";
var main = "dist/motorcortex-backgrounds.cjs.js";
var module$1 = "dist/motorcortex-backgrounds.esm.js";
var browser = "dist/motorcortex-backgrounds.umd.js";
var author = "Donkeyclip (donkeyclip.com) <opensource@donkeyclip.com>";
var repository = {
	type: "git",
	url: "https://github.com/donkeyclip/motorcortex-backgrounds.git"
};
var license = "MIT";
var engines = {
	node: ">=8.3.2"
};
var scripts = {
	"update-force:packages": "./node_modules/npm-check-updates/bin/ncu -u && npm i",
	"update:packages": "npm update --save/--save-dev",
	concurrently: "concurrently -c \"cyan.bold,magenta.bold\" --names \"JS,Styles\"",
	"lint:styles": "stylelint \"src/**.css\" \"src/**/*.scss\" --config .stylelintrc.json",
	"lint:js": "eslint -c .eslintrc src/**/*.js",
	lint: "npm run concurrently \"npm:lint:js\" \"npm:lint:styles\"",
	"lint:fix": "npm run concurrently  \"npm:lint:js -- --fix\" \"npm:lint:styles -- --fix\"",
	build: "npm run build:lib && npm run build:demo",
	"build:lib": "rollup -c",
	start: "npm run build:lib && concurrently -c \"cyan.bold,magenta.bold\" \"npm:build:lib -- -w\"  \"npm:start:demo\" ",
	"start:demo": "webpack serve --config ./demo/webpack.config.js --mode=development --progress ",
	"build:demo": "webpack --mode=production --config ./demo/webpack.config.js",
	test: "HERE GOES YOUR TEST TASK",
	"test:prod": "npm run lint",
	"report-coverage": "cat ./coverage/lcov.info | coveralls",
	commit: "git-cz",
	prebuild: "rimraf dist",
	prepare: "husky install"
};
var keywords = [
	"motorcortex",
	"animation"
];
var release = {
	verifyConditions: [
		"@semantic-release/changelog",
		"@semantic-release/npm",
		"@semantic-release/github",
		"@semantic-release/git"
	],
	prepare: [
		"@semantic-release/changelog",
		"@semantic-release/npm",
		"@semantic-release/git"
	]
};
var config = {
	commitizen: {
		path: "cz-conventional-changelog"
	}
};
var dependencies = {
	browserify: "^17.0.0"
};
var peerDependencies = {
	"@donkeyclip/motorcortex": "^7.6"
};
var devDependencies = {
	"@babel/cli": "7.16.7",
	"@babel/core": "7.16.7",
	"@babel/preset-env": "7.16.7",
	"@commitlint/cli": "13.2.1",
	"@commitlint/config-conventional": "13.2.0",
	"@donkeyclip/motorcortex": "7.6.6",
	"@donkeyclip/motorcortex-player": "2.4.4",
	"@rollup/plugin-babel": "5.3.0",
	"@rollup/plugin-commonjs": "21.0.1",
	"@rollup/plugin-json": "4.1.0",
	"@rollup/plugin-node-resolve": "13.1.2",
	"@semantic-release/changelog": "6.0.1",
	"@semantic-release/git": "10.0.1",
	"@semantic-release/github": "8.0.2",
	"@semantic-release/npm": "8.0.3",
	"babel-eslint": "10.1.0",
	"babel-loader": "8.2.3",
	"babel-preset-es2015-node5": "1.2.0",
	browserslist: "4.19.1",
	"caniuse-lite": "1.0.30001296",
	commitizen: "4.2.4",
	concurrently: "6.5.1",
	coveralls: "3.1.1",
	"css-loader": "6.5.1",
	"cz-conventional-changelog": "3.3.0",
	"es6-promise": "4.2.8",
	eslint: "7.32.0",
	"eslint-config-prettier": "8.3.0",
	"eslint-config-standard": "16.0.3",
	"eslint-plugin-babel": "5.3.1",
	"eslint-plugin-import": "2.25.4",
	"eslint-plugin-node": "11.1.0",
	"eslint-plugin-prettier": "4.0.0",
	"eslint-plugin-promise": "5.2.0",
	"eslint-plugin-standard": "4.1.0",
	"exports-loader": "3.1.0",
	husky: "7.0.4",
	"imports-loader": "3.1.1",
	"json-stringify-safe": "5.0.1",
	"lint-staged": "11.2.6",
	"npm-check-updates": "*",
	npx: "*",
	prettier: "2.5.1",
	rimraf: "3.0.2",
	rollup: "2.62.0",
	"rollup-plugin-babel": "4.4.0",
	"rollup-plugin-commonjs": "10.1.0",
	"rollup-plugin-node-resolve": "5.2.0",
	"rollup-plugin-terser": "7.0.2",
	"semantic-release": "18.0.1",
	shelljs: "0.8.4",
	webpack: "5.65.0",
	"webpack-cli": "4.9.1",
	"webpack-dev-server": "4.7.2",
	"whatwg-fetch": "3.6.2"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	module: module$1,
	browser: browser,
	author: author,
	repository: repository,
	license: license,
	engines: engines,
	scripts: scripts,
	keywords: keywords,
	"lint-staged": {
	"*.{json,md,yml,yaml}": [
		"prettier --write"
	],
	"*.css": [
		"prettier --write",
		"stylelint  \"src/**.css\" --config .stylelintrc.json --fix"
	],
	"*.{js,jsx}": [
		"prettier --write",
		"eslint --fix"
	]
},
	release: release,
	config: config,
	dependencies: dependencies,
	peerDependencies: peerDependencies,
	devDependencies: devDependencies
};

var index = {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [{
    exportable: BgOpener,
    name: "BgOpener",
    attributesValidationRules: _objectSpread2({}, BgOpenerValidation)
  }, {
    exportable: TwoSidesReveal,
    name: "TwoSidesReveal",
    attributesValidationRules: _objectSpread2({}, TwoSidesRevealValidation)
  }, {
    exportable: ColumnReveal,
    name: "ColumnReveal",
    attributesValidationRules: _objectSpread2({}, ColumnRevealValidation)
  }, {
    exportable: RowReveal,
    name: "RowReveal",
    attributesValidationRules: _objectSpread2({}, RowRevealValidation)
  }, {
    exportable: ThreeSidesReveal,
    name: "ThreeSidesReveal",
    attributesValidationRules: _objectSpread2({}, ThreeSidesRevealValidation)
  }, {
    exportable: Grid,
    name: "Grid",
    attributesValidationRules: _objectSpread2({}, GridValidation)
  }]
};

module.exports = index;
