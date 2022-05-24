import { HTMLClip, CSSEffect } from '@donkeyclip/motorcortex';

class BgOpener extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    return "\n      <div class=\"wrapper\">\n        <div class=\"bg-wrapper bg-wrapper-0\">\n          <div class=\"bg bg-0\"></div>\n        </div>\n        <div class=\"bg-wrapper bg-wrapper-1\">\n          <div class=\"bg bg-1\"></div>\n        </div>\n  \t  </div>\n    ";
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        flex-direction: column;\n      }\n      .bg-wrapper{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        position: relative;\n        overflow: hidden;\n      }\n      .bg{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n        background-size: contain;\n        position: relative;\n      }\n    ");
  }

  buildTree() {
    const bgPosition = new CSSEffect({
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
    const bgPositionOne = new CSSEffect({
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
    const wrapperHeight = new CSSEffect({
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
    const wrapperHeightOut = new CSSEffect({
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
    const wrapperHeightOutOne = new CSSEffect({
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
    const bgPositionOut = new CSSEffect({
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
    const bgPositionOneOut = new CSSEffect({
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

}

class TwoSidesReveal extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    return "\n      <div class=\"wrapper\">\n        <div class=\"bg-wrapper bg-wrapper-0\">\n          <div class=\"bg bg-0\"></div>\n        </div>\n        <div class=\"bg-wrapper bg-wrapper-1\">\n          <div class=\"bg bg-1\"></div>\n        </div>\n  \t  </div>\n    ";
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        overflow: hidden;\n      }\n      .bg-wrapper{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        position: absolute;\n        overflow: hidden;\n      }\n      .bg-wrapper-0{\n        right: ").concat(this.attrs.width / 2, "px;\n      }\n      .bg-wrapper-1{\n        left: ").concat(this.attrs.width / 2, "px;\n      }\n      .bg{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n        background-size: contain;\n        position: relative;\n      }\n    ");
  }

  buildTree() {
    const bgPositionLeft = new CSSEffect({
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
    const bgPositionRigth = new CSSEffect({
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

}

class ColumnReveal extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    return "\n      <div class=\"wrapper\">\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-0\"></div>\n        </div>\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-1\"></div>\n        </div>\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-2\"></div>\n        </div>\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-3\"></div>\n        </div>\n  \t  </div>\n    ";
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n      }\n      .bg-wrapper{\n        width: ").concat(this.attrs.width / 4, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        position: relative;\n        overflow: hidden;\n        top: -").concat(this.attrs.height, "px;\n      }\n      .bg{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n        background-size: cover;\n        position: absolute;\n      }\n      .bg-0{\n        left:0\n      }\n      .bg-1{\n        left:-").concat(this.attrs.width - this.attrs.width / 4 * 3, "px;\n      }\n      .bg-2{\n        left:-").concat(this.attrs.width - this.attrs.width / 4 * 2, "px;\n      }\n      .bg-3{\n        left:-").concat(this.attrs.width - this.attrs.width / 4, "px;\n      }\n    ");
  }

  buildTree() {
    const bgPositionOneIn = new CSSEffect({
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
      const bgPositionOneOut = new CSSEffect({
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

}

class RowReveal extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    return "\n      <div class=\"wrapper\">\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-0\"></div>\n        </div>\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-1\"></div>\n        </div>\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-2\"></div>\n        </div>\n        <div class=\"bg-wrapper\">\n          <div class=\"bg bg-3\"></div>\n        </div>\n  \t  </div>\n    ";
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        flex-direction: column;\n      }\n      .bg-wrapper{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height / 4, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        position: relative;\n        overflow: hidden;\n        left:").concat(this.attrs.width, "px;\n      }\n      .bg{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n        background-size: cover;\n        position: relative;\n      }\n      .bg-0{\n        top:0\n      }\n      .bg-1{\n        top:-").concat(this.attrs.height - this.attrs.height / 4 * 3, "px;\n      }\n      .bg-2{\n        top:-").concat(this.attrs.height - this.attrs.height / 4 * 2, "px;\n      }\n      .bg-3{\n        top:-").concat(this.attrs.height - this.attrs.height / 4, "px;\n      }\n    ");
  }

  buildTree() {
    const bgPositionOneIn = new CSSEffect({
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
      const bgPositionOneOut = new CSSEffect({
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

}

class Grid extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    const gridList = [];
    const items = this.attrs.columns * this.attrs.rows;

    for (let i = 0; i < items; i++) {
      gridList.push(" <div  class=\"grid grid-".concat(i, "\"> </div> "));
    }

    return "\n    <div class=\"wrapper\">\n      ".concat(gridList.join(""), "\n\t  </div>\n    ");
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        font-family: 'Poppins', sans-serif;\n        display: grid;\n        grid-template-columns: repeat(").concat(this.attrs.columns, ", 1fr);\n        justify-items: center;\n      }\n      .grid{\n        background: ").concat(this.attrs.color, ";\n        width: ").concat(this.attrs.width / this.attrs.columns, "px;\n        height: ").concat(this.attrs.height / this.attrs.rows, "px;\n      }\n  ");
  }

  buildTree() {
    const gridOpacity = new CSSEffect({
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

}

class ThreeSidesReveal extends HTMLClip {
  get font() {
    return [{
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap"
    }];
  }

  get html() {
    return "\n      <div class=\"wrapper\">\n        <div class=\"bg-wrapper bg-wrapper-0\">\n          <div class=\" bg-wrapper-in\">\n            <div class=\"bg bg-0\"><div class=\"bg-in\"></div></div>\n          </div>\n          <div class=\" bg-wrapper-in\">\n            <div class=\"bg bg-1\"><div class=\"bg-in\"></div></div>\n          </div>\n        </div>\n        <div class=\"bg-wrapper  bg-wrapper-1\">\n          <div class=\"bg-wrapper-full-width bg-wrapper-in \">\n            <div class=\"bg bg-2\"><div class=\"bg-in\"></div></div>.\n          </div>\n        </div>\n  \t  </div>\n    ";
  }

  get css() {
    return "\n      .wrapper{\n        width: ".concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        flex-direction: column;\n      }\n      .bg-wrapper{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        position: relative;\n        overflow: hidden;\n      }\n\n      .bg-wrapper-0{\n        height: ").concat(this.attrs.height * 0.65, "px;\n      }\n      .bg-wrapper-1{\n        height: ").concat(this.attrs.height * 0.35, "px;\n      }\n      .bg-wrapper-in{\n        width: ").concat(this.attrs.width / 2, "px;\n        height: ").concat(this.attrs.height * 0.65, "px;\n        display:flex;\n        font-family: 'Poppins', sans-serif;\n        position: relative;\n        overflow: hidden;\n      }\n      .bg-wrapper-full-width{\n        width: ").concat(this.attrs.width, "px;\n      }\n      .bg{\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n        background:url(").concat(this.attrs.bgUrl, ") no-repeat;\n        background-size: cover;\n        position: absolute;\n      }\n      .bg-0{\n        left:0\n      }\n      .bg-1{\n        left:-").concat(this.attrs.width / 2, "px;\n      }\n      .bg-2{\n        top:-").concat(this.attrs.height * 0.65, "px;\n      }\n      .bg-in{\n        background:").concat(this.attrs.overlayColor, ";\n        width: ").concat(this.attrs.width, "px;\n        height: ").concat(this.attrs.height, "px;\n      }\n    ");
  }

  buildTree() {
    const bgWrapperBgColor = new CSSEffect({
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
    const bgWrapperOpacity = new CSSEffect({
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
    const bgOne = new CSSEffect({
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
    const bgTwo = new CSSEffect({
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
    const bgThree = new CSSEffect({
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
    const bgScale = new CSSEffect({
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
      const Grid$1 = new Grid({
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

}

const BgOpenerValidation = {
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
const TwoSidesRevealValidation = {
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
const RowRevealValidation = {
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
const ColumnRevealValidation = {
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
const GridValidation = {
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
const ThreeSidesRevealValidation = {
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
var version = "0.2.0";
var description = "Backgrounds plugin for MotorCortex";
var main = "dist/motorcortex-backgrounds.cjs.js";
var module = "dist/motorcortex-backgrounds.esm.js";
var browser = "dist/motorcortex-backgrounds.umd.js";
var author = "Donkeyclip (donkeyclip.com) <opensource@donkeyclip.com>";
var repository = {
	type: "git",
	url: "https://github.com/donkeyclip/motorcortex-backgrounds.git"
};
var license = "MIT";
var engines = {
	node: ">=12"
};
var scripts = {
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
	prebuild: "rimraf dist",
	prepare: "husky install"
};
var keywords = [
	"motorcortex",
	"animation"
];
var dependencies = {
	browserify: "^17.0.0"
};
var peerDependencies = {
	"@donkeyclip/motorcortex": ">= 8 < 10"
};
var devDependencies = {
	"@babel/cli": "7.17.10",
	"@babel/core": "7.18.0",
	"@babel/preset-env": "7.18.0",
	"@donkeyclip/motorcortex": "9.4.0",
	"@donkeyclip/motorcortex-player": "2.10.1",
	"@rollup/plugin-babel": "5.3.1",
	"@rollup/plugin-commonjs": "21.1.0",
	"@rollup/plugin-json": "4.1.0",
	"@rollup/plugin-node-resolve": "13.3.0",
	"babel-eslint": "10.1.0",
	"babel-loader": "8.2.5",
	"babel-preset-es2015-node5": "1.2.0",
	browserslist: "4.20.3",
	"caniuse-lite": "1.0.30001342",
	concurrently: "7.2.1",
	coveralls: "3.1.1",
	"css-loader": "6.7.1",
	"es6-promise": "4.2.8",
	eslint: "7.32.0",
	"eslint-config-prettier": "8.5.0",
	"eslint-plugin-babel": "5.3.1",
	"eslint-plugin-import": "2.26.0",
	"eslint-plugin-node": "11.1.0",
	"eslint-plugin-prettier": "4.0.0",
	"eslint-plugin-promise": "5.2.0",
	"eslint-plugin-standard": "4.1.0",
	"exports-loader": "3.1.0",
	husky: "7.0.4",
	"imports-loader": "3.1.1",
	"json-stringify-safe": "5.0.1",
	"lint-staged": "12.4.1",
	"npm-check-updates": "*",
	npx: "*",
	prettier: "2.6.2",
	rimraf: "3.0.2",
	rollup: "2.74.1",
	"rollup-plugin-babel": "4.4.0",
	"rollup-plugin-commonjs": "10.1.0",
	"rollup-plugin-node-resolve": "5.2.0",
	"rollup-plugin-terser": "7.0.2",
	shelljs: "0.8.5",
	tslib: "2.4.0",
	webpack: "5.72.1",
	"webpack-cli": "4.9.2",
	"webpack-dev-server": "4.9.0",
	"whatwg-fetch": "3.6.2"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	module: module,
	browser: browser,
	author: author,
	repository: repository,
	license: license,
	engines: engines,
	scripts: scripts,
	keywords: keywords,
	"lint-staged": {
	"*.{json,md,html,css}": [
		"prettier --write"
	],
	"*.{js,jsx}": [
		"prettier --write",
		"eslint --fix"
	]
},
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
    attributesValidationRules: { ...BgOpenerValidation
    }
  }, {
    exportable: TwoSidesReveal,
    name: "TwoSidesReveal",
    attributesValidationRules: { ...TwoSidesRevealValidation
    }
  }, {
    exportable: ColumnReveal,
    name: "ColumnReveal",
    attributesValidationRules: { ...ColumnRevealValidation
    }
  }, {
    exportable: RowReveal,
    name: "RowReveal",
    attributesValidationRules: { ...RowRevealValidation
    }
  }, {
    exportable: ThreeSidesReveal,
    name: "ThreeSidesReveal",
    attributesValidationRules: { ...ThreeSidesRevealValidation
    }
  }, {
    exportable: Grid,
    name: "Grid",
    attributesValidationRules: { ...GridValidation
    }
  }]
};

export { index as default };
