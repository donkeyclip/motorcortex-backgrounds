'use strict';

var motorcortex = require('@donkeyclip/motorcortex');

class BgOpener extends motorcortex.HTMLClip {
  get font() {
    return [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    return `
      <div class="wrapper">
        <div class="bg-wrapper bg-wrapper-0">
          <div class="bg bg-0"></div>
        </div>
        <div class="bg-wrapper bg-wrapper-1">
          <div class="bg bg-1"></div>
        </div>
  	  </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        flex-direction: column;
      }
      .bg-wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        position: relative;
        overflow: hidden;
      }
      .bg{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        background:url(${this.attrs.bgUrl}) no-repeat;
        background-size: contain;
        position: relative;
      }
    `;
  }

  buildTree() {
    const bgPosition = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: `${0}px`
      },
      initialValues: {
        top: `-${this.attrs.height / 2}px`
      }
    }, {
      duration: 300,
      selector: ".bg-0",
      easing: this.attrs.easing
    });
    this.addIncident(bgPosition, 0);
    const bgPositionOne = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: `-${this.attrs.height / 2}px`
      },
      initialValues: {
        top: `-${this.attrs.height / 2}px`
      }
    }, {
      duration: 300,
      selector: ".bg-1",
      easing: this.attrs.easing
    });
    this.addIncident(bgPositionOne, 0);
    const wrapperHeight = new motorcortex.CSSEffect({
      animatedAttrs: {
        height: `${this.attrs.height / 2}px`,
        top: `${0}px`
      },
      initialValues: {
        height: `${0}px`,
        top: `${this.attrs.height / 2}px`
      }
    }, {
      duration: 300,
      selector: ".bg-wrapper",
      easing: this.attrs.easing
    });
    this.addIncident(wrapperHeight, 0);
    const wrapperHeightOut = new motorcortex.CSSEffect({
      animatedAttrs: {
        // height: `${this.attrs.height/2}px`,
        top: `-${this.attrs.height / 2}px`
      },
      initialValues: {
        // height: `${0}px`,
        top: `${0}px`
      }
    }, {
      duration: 300,
      selector: ".bg-wrapper-0",
      easing: this.attrs.easing
    });
    this.addIncident(wrapperHeightOut, this.attrs.exitStart);
    const wrapperHeightOutOne = new motorcortex.CSSEffect({
      animatedAttrs: {
        // height: `${this.attrs.height/2}px`,
        top: `${this.attrs.height / 2}px`
      },
      initialValues: {
        // height: `${0}px`,
        top: `${0}px`
      }
    }, {
      duration: 300,
      selector: ".bg-wrapper-1",
      easing: this.attrs.easing
    });
    this.addIncident(wrapperHeightOutOne, this.attrs.exitStart);
    const bgPositionOut = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: `${this.attrs.height / 2}px`
      } // initialValues: {
      //   top: `-${this.attrs.height/2}px`
      // }

    }, {
      duration: 300,
      selector: ".bg-0",
      easing: this.attrs.easing
    });
    this.addIncident(bgPositionOut, this.attrs.exitStart);
    const bgPositionOneOut = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: `-${this.attrs.height}px`
      },
      initialValues: {
        top: `-${this.attrs.height / 2}px`
      }
    }, {
      duration: 300,
      selector: ".bg-1",
      easing: this.attrs.easing
    });
    this.addIncident(bgPositionOneOut, this.attrs.exitStart);
  }

}

class TwoSidesReveal extends motorcortex.HTMLClip {
  get font() {
    return [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    return `
      <div class="wrapper">
        <div class="bg-wrapper bg-wrapper-0">
          <div class="bg bg-0"></div>
        </div>
        <div class="bg-wrapper bg-wrapper-1">
          <div class="bg bg-1"></div>
        </div>
  	  </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        overflow: hidden;
      }
      .bg-wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        position: absolute;
        overflow: hidden;
      }
      .bg-wrapper-0{
        right: ${this.attrs.width / 2}px;
      }
      .bg-wrapper-1{
        left: ${this.attrs.width / 2}px;
      }
      .bg{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        background:url(${this.attrs.bgUrl}) no-repeat;
        background-size: contain;
        position: relative;
      }
    `;
  }

  buildTree() {
    const bgPositionLeft = new motorcortex.CSSEffect({
      animatedAttrs: {
        left: `${this.attrs.width / 2}px`
      },
      initialValues: {
        left: `${this.attrs.width}px`
      }
    }, {
      duration: 1000,
      selector: ".bg-0",
      easing: this.attrs.easing
    });
    this.addIncident(bgPositionLeft, 0);
    const bgPositionRigth = new motorcortex.CSSEffect({
      animatedAttrs: {
        right: `${this.attrs.width / 2}px`
      },
      initialValues: {
        right: `${this.attrs.width}px`
      }
    }, {
      duration: 1000,
      selector: ".bg-1",
      easing: this.attrs.easing
    });
    this.addIncident(bgPositionRigth, 0);
  }

}

class ColumnReveal extends motorcortex.HTMLClip {
  get font() {
    return [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    return `
      <div class="wrapper">
        <div class="bg-wrapper">
          <div class="bg bg-0"></div>
        </div>
        <div class="bg-wrapper">
          <div class="bg bg-1"></div>
        </div>
        <div class="bg-wrapper">
          <div class="bg bg-2"></div>
        </div>
        <div class="bg-wrapper">
          <div class="bg bg-3"></div>
        </div>
  	  </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
      }
      .bg-wrapper{
        width: ${this.attrs.width / 4}px;
        height: ${this.attrs.height}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        position: relative;
        overflow: hidden;
        top: -${this.attrs.height}px;
      }
      .bg{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        background:url(${this.attrs.bgUrl}) no-repeat;
        background-size: cover;
        position: absolute;
      }
      .bg-0{
        left:0
      }
      .bg-1{
        left:-${this.attrs.width - this.attrs.width / 4 * 3}px;
      }
      .bg-2{
        left:-${this.attrs.width - this.attrs.width / 4 * 2}px;
      }
      .bg-3{
        left:-${this.attrs.width - this.attrs.width / 4}px;
      }
    `;
  }

  buildTree() {
    const bgPositionOneIn = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: `${0}px`
      }
    }, {
      duration: 1000,
      selector: ".bg-wrapper",
      easing: this.attrs.easing,
      delay: `@expression(random(500))`
    });
    this.addIncident(bgPositionOneIn, 0);

    if (this.attrs.bgOut === true) {
      const bgPositionOneOut = new motorcortex.CSSEffect({
        animatedAttrs: {
          top: `${this.attrs.height}px`
        }
      }, {
        duration: 1000,
        selector: ".bg-wrapper",
        easing: this.attrs.easing,
        delay: `@expression(random(500))`
      });
      this.addIncident(bgPositionOneOut, this.attrs.exitStart);
    }
  }

}

class RowReveal extends motorcortex.HTMLClip {
  get font() {
    return [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    return `
      <div class="wrapper">
        <div class="bg-wrapper">
          <div class="bg bg-0"></div>
        </div>
        <div class="bg-wrapper">
          <div class="bg bg-1"></div>
        </div>
        <div class="bg-wrapper">
          <div class="bg bg-2"></div>
        </div>
        <div class="bg-wrapper">
          <div class="bg bg-3"></div>
        </div>
  	  </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        flex-direction: column;
      }
      .bg-wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height / 4}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        position: relative;
        overflow: hidden;
        left:${this.attrs.width}px;
      }
      .bg{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        background:url(${this.attrs.bgUrl}) no-repeat;
        background-size: cover;
        position: relative;
      }
      .bg-0{
        top:0
      }
      .bg-1{
        top:-${this.attrs.height - this.attrs.height / 4 * 3}px;
      }
      .bg-2{
        top:-${this.attrs.height - this.attrs.height / 4 * 2}px;
      }
      .bg-3{
        top:-${this.attrs.height - this.attrs.height / 4}px;
      }
    `;
  }

  buildTree() {
    const bgPositionOneIn = new motorcortex.CSSEffect({
      animatedAttrs: {
        left: `0px`
      }
    }, {
      duration: 1000,
      selector: ".bg-wrapper",
      easing: this.attrs.easing,
      delay: `@stagger(0, 500,0)`
    });
    this.addIncident(bgPositionOneIn, 0);

    if (this.attrs.bgOut === true) {
      const bgPositionOneOut = new motorcortex.CSSEffect({
        animatedAttrs: {
          left: `-${this.attrs.width}px`
        }
      }, {
        duration: 1000,
        selector: ".bg-wrapper",
        easing: this.attrs.easing,
        delay: `@stagger(0, 500,0)`
      });
      this.addIncident(bgPositionOneOut, this.attrs.exitStart);
    }
  }

}

class Grid extends motorcortex.HTMLClip {
  get font() {
    return [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    const gridList = [];
    const items = this.attrs.columns * this.attrs.rows;

    for (let i = 0; i < items; i++) {
      gridList.push(` <div  class="grid grid-${i}"> </div> `);
    }

    return `
    <div class="wrapper">
      ${gridList.join("")}
	  </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        font-family: 'Poppins', sans-serif;
        display: grid;
        grid-template-columns: repeat(${this.attrs.columns}, 1fr);
        justify-items: center;
      }
      .grid{
        background: ${this.attrs.color};
        width: ${this.attrs.width / this.attrs.columns}px;
        height: ${this.attrs.height / this.attrs.rows}px;
      }
  `;
  }

  buildTree() {
    const gridOpacity = new motorcortex.CSSEffect({
      animatedAttrs: {
        opacity: 0
      },
      initialValues: {
        opacity: 0.7
      }
    }, {
      duration: 1000,
      selector: ".grid",
      delay: `@expression(random(1000))`
    });
    this.addIncident(gridOpacity, 0);
  }

}

class ThreeSidesReveal extends motorcortex.HTMLClip {
  get font() {
    return [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }

  get html() {
    return `
      <div class="wrapper">
        <div class="bg-wrapper bg-wrapper-0">
          <div class=" bg-wrapper-in">
            <div class="bg bg-0"><div class="bg-in"></div></div>
          </div>
          <div class=" bg-wrapper-in">
            <div class="bg bg-1"><div class="bg-in"></div></div>
          </div>
        </div>
        <div class="bg-wrapper  bg-wrapper-1">
          <div class="bg-wrapper-full-width bg-wrapper-in ">
            <div class="bg bg-2"><div class="bg-in"></div></div>.
          </div>
        </div>
  	  </div>
    `;
  }

  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        flex-direction: column;
      }
      .bg-wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        position: relative;
        overflow: hidden;
      }

      .bg-wrapper-0{
        height: ${this.attrs.height * 0.65}px;
      }
      .bg-wrapper-1{
        height: ${this.attrs.height * 0.35}px;
      }
      .bg-wrapper-in{
        width: ${this.attrs.width / 2}px;
        height: ${this.attrs.height * 0.65}px;
        display:flex;
        font-family: 'Poppins', sans-serif;
        position: relative;
        overflow: hidden;
      }
      .bg-wrapper-full-width{
        width: ${this.attrs.width}px;
      }
      .bg{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        background:url(${this.attrs.bgUrl}) no-repeat;
        background-size: cover;
        position: absolute;
      }
      .bg-0{
        left:0
      }
      .bg-1{
        left:-${this.attrs.width / 2}px;
      }
      .bg-2{
        top:-${this.attrs.height * 0.65}px;
      }
      .bg-in{
        background:${this.attrs.overlayColor};
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
      }
    `;
  }

  buildTree() {
    const bgWrapperBgColor = new motorcortex.CSSEffect({
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
      delay: `@stagger(200, 500,0)`
    });
    this.addIncident(bgWrapperBgColor, 0);
    const bgWrapperOpacity = new motorcortex.CSSEffect({
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
      delay: `@stagger(0, 500,0)`
    });
    this.addIncident(bgWrapperOpacity, 100);
    const bgOne = new motorcortex.CSSEffect({
      animatedAttrs: {
        left: "0px"
      },
      initialValues: {
        left: `-${this.attrs.width / 2}px`
      }
    }, {
      duration: 1400,
      selector: ".bg-0",
      easing: "easeOutQuart"
    });
    this.addIncident(bgOne, 0);
    const bgTwo = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: `0px`
      },
      initialValues: {
        top: `-${this.attrs.height * 0.65}px`
      }
    }, {
      duration: 1000,
      selector: ".bg-1",
      easing: "easeOutQuart"
    });
    this.addIncident(bgTwo, 400);
    const bgThree = new motorcortex.CSSEffect({
      animatedAttrs: {
        left: `0px`
      },
      initialValues: {
        left: `-${this.attrs.width / 2}px`
      }
    }, {
      duration: 1500,
      selector: ".bg-2",
      easing: "easeOutQuart"
    });
    this.addIncident(bgThree, 400);
    const bgScale = new motorcortex.CSSEffect({
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
var module$1 = "dist/motorcortex-backgrounds.esm.js";
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
	"@babel/cli": "7.19.3",
	"@babel/core": "7.19.3",
	"@babel/preset-env": "7.19.4",
	"@donkeyclip/motorcortex": "9.4.1",
	"@donkeyclip/motorcortex-player": "2.10.5",
	"@rollup/plugin-babel": "5.3.1",
	"@rollup/plugin-commonjs": "21.1.0",
	"@rollup/plugin-json": "4.1.0",
	"@rollup/plugin-node-resolve": "13.3.0",
	"babel-eslint": "10.1.0",
	"babel-loader": "8.2.5",
	"babel-preset-es2015-node5": "1.2.0",
	browserslist: "4.21.4",
	"caniuse-lite": "1.0.30001418",
	concurrently: "7.4.0",
	coveralls: "3.1.1",
	"css-loader": "6.7.1",
	"es6-promise": "4.2.8",
	eslint: "7.32.0",
	"eslint-config-prettier": "8.5.0",
	"eslint-plugin-babel": "5.3.1",
	"eslint-plugin-import": "2.26.0",
	"eslint-plugin-node": "11.1.0",
	"eslint-plugin-prettier": "4.2.1",
	"eslint-plugin-promise": "5.2.0",
	"eslint-plugin-standard": "4.1.0",
	"exports-loader": "3.1.0",
	husky: "7.0.4",
	"imports-loader": "3.1.1",
	"json-stringify-safe": "5.0.1",
	"lint-staged": "12.5.0",
	"npm-check-updates": "*",
	npx: "*",
	prettier: "2.7.1",
	rimraf: "3.0.2",
	rollup: "2.79.1",
	"rollup-plugin-babel": "4.4.0",
	"rollup-plugin-commonjs": "10.1.0",
	"rollup-plugin-node-resolve": "5.2.0",
	"rollup-plugin-terser": "7.0.2",
	shelljs: "0.8.5",
	tslib: "2.4.0",
	webpack: "5.74.0",
	"webpack-cli": "4.10.0",
	"webpack-dev-server": "4.11.1",
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

module.exports = index;
