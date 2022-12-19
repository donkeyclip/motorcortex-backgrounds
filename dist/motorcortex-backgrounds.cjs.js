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
      }
      // initialValues: {
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

class HexagonCircle extends motorcortex.HTMLClip {
  get font() {
    return [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }
  get html() {
    return `
      <div class="wrapper">
        
  	  </div>
    `;
  }
  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        --s: ${this.attrs.size}px;
        --p: calc(var(--s) / 2);
        --c1: ${this.attrs.colors[0]};
        --c2: ${this.attrs.colors[1]};
        --c3: ${this.attrs.colors[2]};
        --bg: var(--c3);
        --d: 4000ms;
        --e: cubic-bezier(0.76, 0, 0.24, 1);
        
        background-color: var(--bg);
        background-image:
          linear-gradient(45deg, var(--c1) 25%, transparent 25%),
          linear-gradient(-45deg, var(--c1) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, var(--c2) 75%),
          linear-gradient(-45deg, transparent 75%, var(--c2) 75%);
        background-size: var(--s) var(--s);
        background-position: 
          calc(var(--p) *  1) calc(var(--p) *  0), 
          calc(var(--p) * -1) calc(var(--p) *  1), 
          calc(var(--p) *  1) calc(var(--p) * -1), 
          calc(var(--p) * -1) calc(var(--p) *  0);
        animation: 
          color var(--d) var(--e) infinite,
          position var(--d) var(--e) infinite;
      }
      
      // @keyframes color {
      //   0%, 25% {
      //     --bg: var(--c3);
      //   }
      //   26%, 50% {
      //     --bg: var(--c1);
      //   }
      //   51%, 75% {
      //     --bg: var(--c3);
      //   }
      //   76%, 100% {
      //     --bg: var(--c2);
      //   }
      // }
      
      // @keyframes position {
      //   0% {
      //     background-position: 
      //       calc(var(--p) *  1) calc(var(--p) *  0), 
      //       calc(var(--p) * -1) calc(var(--p) *  1), 
      //       calc(var(--p) *  1) calc(var(--p) * -1), 
      //       calc(var(--p) * -1) calc(var(--p) *  0);
      //   }
      //   25% {
      //     background-position: 
      //       calc(var(--p) *  1) calc(var(--p) *  4), 
      //       calc(var(--p) * -1) calc(var(--p) *  5), 
      //       calc(var(--p) *  1) calc(var(--p) *  3), 
      //       calc(var(--p) * -1) calc(var(--p) *  4);
      //   }
      //   50% {
      //     background-position: 
      //       calc(var(--p) *  3) calc(var(--p) * 8), 
      //       calc(var(--p) * -3) calc(var(--p) * 9), 
      //       calc(var(--p) *  2) calc(var(--p) * 7), 
      //       calc(var(--p) * -2) calc(var(--p) * 8);
      //   }
      //   75% {
      //     background-position: 
      //       calc(var(--p) *  3) calc(var(--p) * 12), 
      //       calc(var(--p) * -3) calc(var(--p) * 13), 
      //       calc(var(--p) *  2) calc(var(--p) * 11), 
      //       calc(var(--p) * -2) calc(var(--p) * 12);
      //   }
      //   100% {    
      //     background-position: 
      //       calc(var(--p) *  5) calc(var(--p) * 16), 
      //       calc(var(--p) * -5) calc(var(--p) * 17), 
      //       calc(var(--p) *  5) calc(var(--p) * 15), 
      //       calc(var(--p) * -5) calc(var(--p) * 16);
      //   }
      // }
      
     
      
    `;
  }
  buildTree() {
    const position = this.attrs.size / 2;
    const BgColor = new motorcortex.Combo({
      incidents: [{
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            backgroundColor: this.attrs.colors[2]
          }
        },
        props: {
          duration: 800,
          easing: [0.76, 0, 0.24, 1]
        },
        position: 0
      }, {
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            backgroundColor: this.attrs.colors[0]
          }
        },
        props: {
          duration: 800,
          easing: [0.76, 0, 0.24, 1]
        },
        position: 800
      }, {
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            backgroundColor: this.attrs.colors[2]
          }
        },
        props: {
          duration: 800,
          easing: [0.76, 0, 0.24, 1]
        },
        position: 1600
      }, {
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            backgroundColor: this.attrs.colors[1]
          }
        },
        props: {
          duration: 800,
          easing: [0.76, 0, 0.24, 1]
        },
        position: 2400
      }, {
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            backgroundColor: this.attrs.colors[2]
          }
        },
        props: {
          duration: 800,
          easing: [0.76, 0, 0.24, 1]
        },
        position: 3200
      }]
    }, {
      selector: ".wrapper"
    });
    const BgPosition = new motorcortex.Combo({
      incidents: [{
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            backgroundPosition: `
                  ${position}px ${position * 4}px, 
                   ${position * -1}px ${position * 5}px, 
                  ${position}px ${position * 3}px, 
                   ${position * -1}px  ${position * 4}px`
          }
        },
        props: {
          duration: 800,
          easing: [0.76, 0, 0.24, 1]
        },
        position: 0
      }, {
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            backgroundPosition: `
                ${position * 3}px ${position * 8}px, 
                ${position * -3}px ${position * 9}px, 
                ${position * 2}px ${position * 7}px, 
                ${position * -2}px ${position * 8}px
                `
          }
        },
        props: {
          duration: 800,
          easing: [0.76, 0, 0.24, 1]
        },
        position: 1600
      }, {
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            backgroundPosition: `
                ${position * 3}px ${position * 12}px, 
                ${position * -3}px ${position * 13}px, 
                ${position * 2}px ${position * 11}px, 
                ${position * -2}px ${position * 12}px
                
                `
          }
        },
        props: {
          duration: 800,
          easing: [0.76, 0, 0.24, 1]
        },
        position: 2400
      }, {
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            backgroundPosition: `
                ${position * 5}px ${position * 16}px, 
                ${position * -5}px ${position * 17}px, 
                ${position * 5}px ${position * 15}px, 
                ${position * -5}px ${position * 16}px
                
                `
          }
        },
        props: {
          duration: 800,
          easing: [0.76, 0, 0.24, 1]
        },
        position: 3200
      }]
    }, {
      selector: ".wrapper"
    });
    this.addIncident(BgColor, 0);
    this.addIncident(BgPosition, 0);
  }
}

function getRandomRenge(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
class FloatingBubbles extends motorcortex.HTMLClip {
  get font() {
    return [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }
  get html() {
    this.bubbleCords = [...new Array(this.attrs.bubbleCount / 2)].map(() => [getRandomRenge(0, 100), getRandomRenge(0, 100), getRandomRenge(3, this.attrs.maxBubbleRadius)]);
    return `
      <div class="wrapper">
        ${[...new Array(this.attrs.bubbleCount)].map((_, i) => {
      if (i < this.attrs.bubbleCount / 2) {
        return `<div class="bubble initial" style="width:${this.bubbleCords[i][2]}px; height:${this.bubbleCords[i][2]}px; left:${this.bubbleCords[i][0]}%; top:${this.bubbleCords[i][1]}%" > <div class="bubble-incide"></div></div>`;
      } else {
        return `<div class="bubble end" style="left:${this.bubbleCords[i - this.attrs.bubbleCount / 2][0]}%; width:${this.bubbleCords[i - this.attrs.bubbleCount / 2][2]}px; height:${this.bubbleCords[i - this.attrs.bubbleCount / 2][2]}px;" ><div class="bubble-incide"></div></div>`;
      }
    }).join("")}
  	  </div>
    `;
  }
  get css() {
    // const bubbleRadius = getRandomRenge(3, this.attrs.maxBubbleRadius);
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        overflow: hidden;
        background-color:${this.attrs.backgroundColor}
      }
      .bubble{
        position: absolute;
        display: block;
        border-radius: 50%;
        top:100%
      }
      .bubble-incide{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${this.attrs.color};
        border-radius: inherit;
      }
      .bubble:nth-of-type(odd) >.bubble-incide{
        left:100%
      }
      
    `;
  }
  buildTree() {
    const initialToTop = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: `@pattern(${this.bubbleCords.map(i => `- ${i[2]} px`)})`
      }
    }, {
      duration: 4000,
      selector: ".initial"
    });
    this.addIncident(initialToTop, 0);
    const endlToTop = new motorcortex.CSSEffect({
      animatedAttrs: {
        top: `@pattern(${this.bubbleCords.map(i => i[1] + "%")})`
      }
    }, {
      duration: 4000,
      selector: ".end"
    });
    this.addIncident(endlToTop, 0);
    const SwingEven = new motorcortex.Combo({
      incidents: [{
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            left: "100%"
          }
        },
        props: {
          duration: 2000,
          selector: ".bubble-incide"
        },
        position: 0
      }, {
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            left: "0%"
          }
        },
        props: {
          duration: 2000,
          selector: ".bubble-incide"
        },
        position: 2000
      }]
    }, {
      selector: ".bubble:nth-of-type(even)"
    });
    const SwingOdd = new motorcortex.Combo({
      incidents: [{
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            left: "0%"
          }
        },
        props: {
          duration: 2000,
          selector: ".bubble-incide"
        },
        position: 0
      }, {
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            left: "100%"
          }
        },
        props: {
          duration: 2000,
          selector: ".bubble-incide"
        },
        position: 2000
      }]
    }, {
      selector: ".bubble:nth-of-type(odd)"
    });
    this.addIncident(SwingEven, 0);
    this.addIncident(SwingOdd, 0);
  }
}

class Wave extends motorcortex.HTMLClip {
  get font() {
    return [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }
  get html() {
    return `
      <div class="wrapper">
      <div class="box">
      <div class='wave -one'></div>
      <div class='wave -two'></div>
      <div class='wave -three'></div></div>
        
  	  </div>
    `;
  }
  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        overflow: hidden;
        background-color:${this.attrs.backgroundColor}
      }
      .box {
        position: fixed;
        top: -20%;
        transform: rotate(80deg);
        left: 17%;
      }
      .wave {
        position: fixed;
        top: 0;
        left: 0;
        opacity: .4;
        position: absolute;
        top: 3%;
        left: 10%;
        background: ${this.attrs.colors[0]};
        width: ${this.attrs.width}px;
        height: ${this.attrs.width * 0.9}px;
        transform-origin: 50% 48%;
        border-radius: 43%;
        animation: drift 7000ms infinite linear;
      }
      
      .wave.-three {
        animation: drift 7500ms infinite linear;
        position: fixed;
        background-color: ${this.attrs.colors[1]};
      }
      
      .wave.-two {
        animation: drift 3000ms infinite linear;
        background: ${this.attrs.colors[2]};
        position: fixed;
      }
      
    `;
  }
  buildTree() {
    const WaveOne = new motorcortex.CSSEffect({
      animatedAttrs: {
        transform: {
          rotate: "360deg"
        }
      }
    }, {
      duration: 4000,
      selector: ".wave.-one"
    });
    this.addIncident(WaveOne, 0);
    const WaveTwo = new motorcortex.CSSEffect({
      animatedAttrs: {
        transform: {
          rotate: "390deg"
        }
      },
      initialValues: {
        transform: {
          rotate: "30deg"
        }
      }
    }, {
      duration: 4000,
      selector: ".wave.-two"
    });
    this.addIncident(WaveTwo, 0);
    const WaveThree = new motorcortex.CSSEffect({
      animatedAttrs: {
        transform: {
          rotate: "420deg"
        }
      },
      initialValues: {
        transform: {
          rotate: "60deg"
        }
      }
    }, {
      duration: 4000,
      selector: ".wave.-three"
    });
    this.addIncident(WaveThree, 0);
  }
}

class LineEffect extends motorcortex.Effect {
  onGetContext() {
    if (!this) {
      return;
    }
    this.canvasContext = this.element.getContext("2d");
    this.lines = [];
    this.w = this.canvasContext.canvas.width;
    this.h = this.canvasContext.canvas.height;
    const closeAngle = 29;
    this.angle = -closeAngle * Math.PI / 180;
    this.conf = {
      hue: this.attrs.hue || 90,
      shadow: this.attrs.shadow || false,
      width: this.attrs.width || 1,
      length: this.attrs.length || 1,
      emitNum: this.attrs.lineNumber || 50,
      speed: 1,
      opacity: this.attrs.opacity || 0.6
    };
    this.bgDots = [{
      rad: (this.w + this.h) / 2,
      x: this.w / 2,
      y: 0,
      hue: 0
    }, {
      rad: (this.w + this.h) / 2,
      x: 0,
      y: this.h,
      hue: -45
    }, {
      rad: (this.w + this.h) / 2,
      x: this.w,
      y: this.h,
      hue: -90
    }];
    this.emitLine();
  }
  emitLine() {
    for (let i = 0; i < this.conf.emitNum; i++) {
      const rx = Math.random() * this.w + 100;
      const ry = Math.random() * this.h - 100;
      this.lines.push({
        x1: rx,
        y1: ry,
        x2: rx,
        y2: ry,
        length: (Math.random() * (260 - 80) + 80) * this.conf.length,
        width: (Math.random() * (15 - 5) + 5) * this.conf.width,
        v1: (Math.random() * (4 - 2) + 2) * this.conf.speed,
        v2: (Math.random() * (1 - 0.5) + 0.5) * this.conf.speed,
        hue: Math.random() * 50,
        test: Math.tan(this.angle) * (-length - rx) + ry
      });
    }
  }
  drawLines(fr) {
    this.canvasContext.globalCompositeOperation = "lighter";
    for (let i = 0; i < this.lines.length; i++) {
      this.canvasContext.lineWidth = this.lines[i].width;
      this.canvasContext.beginPath();
      if (fr < 0.5) {
        this.lines[i].x1 = this.lines[i].x2 - this.lines[i].test * fr * this.lines[i].v2;
        this.lines[i].y1 = this.lines[i].y2 + this.lines[i].test * fr * this.lines[i].v2;
        this.canvasContext.moveTo(this.lines[i].x2, this.lines[i].y2);
        this.canvasContext.lineTo(this.lines[i].x1, this.lines[i].y1);
      } else {
        this.canvasContext.moveTo(this.lines[i].x2 - this.lines[i].test * (fr - 0.5) * this.lines[i].v1, this.lines[i].y2 + this.lines[i].test * (fr - 0.5) * this.lines[i].v1);
        if (this.lines[i].x2 - this.lines[i].test * (fr - 0.5) * this.lines[i].v1 >= this.lines[i].x1) {
          this.canvasContext.lineTo(this.lines[i].x1, this.lines[i].y1);
        } else {
          this.canvasContext.lineTo(undefined, undefined);
        }
      }
      this.canvasContext.strokeStyle = "hsla(" + (this.conf.hue - this.lines[i].hue) + ", 100%, 50%, " + this.conf.opacity + ")";
      this.canvasContext.lineCap = "round";
      this.canvasContext.stroke();
      this.canvasContext.closePath();
    }
  }
  drawBackground() {
    this.canvasContext.globalCompositeOperation = "lighter";
    for (let i = 0; i < this.bgDots.length; i++) {
      const grd = this.canvasContext.createRadialGradient(this.bgDots[i].x, this.bgDots[i].y, 0, this.bgDots[i].x, this.bgDots[i].y, this.bgDots[i].rad);
      grd.addColorStop(0, "hsla(" + (this.conf.hue + this.bgDots[i].hue) + ", 100%, 60%, 0.3)");
      grd.addColorStop(1, "hsla(" + (this.conf.hue + this.bgDots[i].hue) + ", 100%, 50%, 0)");
      this.canvasContext.beginPath();
      this.canvasContext.arc(this.bgDots[i].x, this.bgDots[i].y, this.bgDots[i].rad, 0, Math.PI * 2);
      this.canvasContext.fillStyle = grd;
      this.canvasContext.fill();
      this.canvasContext.closePath();
    }
  }
  clear() {
    this.canvasContext.globalCompositeOperation = "source-over";
    this.canvasContext.beginPath();
    this.canvasContext.fillStyle = "#000";
    this.canvasContext.fillRect(0, 0, this.w, this.h);
    this.canvasContext.closePath();
  }
  onProgress(ms) {
    this.clear();
    this.drawBackground();
    this.drawLines(this.getFraction(ms));
  }
}

var LineEffectDef = {
  incidents: [{
    exportable: LineEffect,
    name: "LineEffect"
  }]
};

const LineEffectPlugin = motorcortex.loadPlugin(LineEffectDef);
class GradientLines extends motorcortex.HTMLClip {
  get font() {
    return [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }
  get html() {
    return `
      <div class="wrapper">
        <canvas id="lines" width="${this.attrs.width}px" height="${this.attrs.height}px"></canvas> 
        dawd
  	  </div>
    `;
  }
  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        overflow: hidden;
        background-color:${this.attrs.backgroundColor}
      }
     
      
    `;
  }
  buildTree() {
    const LineEffect = new LineEffectPlugin.LineEffect({
      hue: this.attrs.hue,
      width: this.attrs.lineWidth,
      length: this.attrs.lineLength,
      lineNumber: this.attrs.lineNumber,
      opacity: this.attrs.opacity
    }, {
      duration: 2000,
      selector: "#lines"
    });
    this.addIncident(LineEffect, 0);
  }
}

class Ripples extends motorcortex.HTMLClip {
  get font() {
    return [{
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }];
  }
  get html() {
    return `
      <div class="wrapper">
        <div class='circle xxlarge shade1'></div>
        <div class='circle xlarge shade2'></div>
        <div class='circle large shade3'></div>
        <div class='circle mediun shade4'></div>
        <div class='circle small shade5'></div>
  	  </div>
    `;
  }
  get css() {
    return `
      .wrapper{
        width: ${this.attrs.width}px;
        height: ${this.attrs.height}px;
        background-color: ${this.attrs.backgroundColor}
      }
      .circle{
        position: absolute;
        border-radius: 50%;
        background: ${this.attrs.circleColor};
        animation: ripple 15s infinite;
        box-shadow: 0px 0px 1px 0px #000;
      }
      
      .small{
        width: ${this.attrs.circleSize * 0.2}px;
        height: ${this.attrs.circleSize * 0.2}px;
        left: -${this.attrs.circleSize * 0.2 / 2}px;
        bottom: -${this.attrs.circleSize * 0.2 / 2}px;
        opacity: 0.9;
      }
      
      .medium{
        width: ${this.attrs.circleSize * 0.4}px;
        height: ${this.attrs.circleSize * 0.4}px;
        left: -${this.attrs.circleSize * 0.4 / 2}px;
        bottom: -${this.attrs.circleSize * 0.4 / 2}px;
        opacity: 0.8;
      }
      
      .large{
        width: ${this.attrs.circleSize * 0.6}px;
        height: ${this.attrs.circleSize * 0.6}px;
        left: -${this.attrs.circleSize * 0.6 / 2}px;
        bottom: -${this.attrs.circleSize * 0.6 / 2}px;
        opacity: 0.7;
      }
      
      .xlarge{
        width: ${this.attrs.circleSize * 0.8}px;
        height: ${this.attrs.circleSize * 0.8}px;
        left: -${this.attrs.circleSize * 0.8 / 2}px;
        bottom: -${this.attrs.circleSize * 0.8 / 2}px;
        opacity:0.5
      }
      
      .xxlarge{
        width: ${this.attrs.circleSize}px;
        height: ${this.attrs.circleSize}px;
        left: -${this.attrs.circleSize / 2}px;
        bottom: -${this.attrs.circleSize / 2}px;
        opacity:0.2;
      }
      
    `;
  }
  buildTree() {
    const RippleIncident = new motorcortex.Combo({
      incidents: [{
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            transform: {
              scale: 0.8
            }
          }
        },
        props: {
          duration: 5000
        },
        position: 0
      }, {
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            transform: {
              scale: 1.2
            }
          }
        },
        props: {
          duration: 5000
        },
        position: 5000
      }, {
        incidentClass: motorcortex.CSSEffect,
        attrs: {
          animatedAttrs: {
            transform: {
              scale: 0.8
            }
          }
        },
        props: {
          duration: 5000
        },
        position: 10000
      }]
    }, {
      selector: ".circle"
    });
    this.addIncident(RippleIncident, 0);
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
const HexagonCircleValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  colors: {
    optional: false,
    type: "array",
    items: {
      type: "color"
    }
  },
  size: {
    optional: false,
    type: "number"
  }
};
const FloatingBubblesValidation = {
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
  backgroundColor: {
    optional: false,
    type: "color"
  },
  size: {
    optional: false,
    type: "number"
  },
  bubbleCount: {
    optional: false,
    type: "number"
  },
  maxBubbleRadius: {
    optional: false,
    type: "number"
  }
};
const WaveValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  colors: {
    optional: false,
    type: "array",
    items: {
      type: "color"
    }
  },
  backgroundColor: {
    optional: false,
    type: "color"
  }
};
const GradientLinesValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  hue: {
    optional: true,
    type: "number"
  },
  lineWidth: {
    optional: true,
    type: "number"
  },
  lineLength: {
    optional: true,
    type: "number"
  },
  lineNumber: {
    optional: true,
    type: "number"
  },
  opacity: {
    optional: true,
    type: "number"
  }
};
const RipplesValidation = {
  width: {
    optional: false,
    type: "number"
  },
  height: {
    optional: false,
    type: "number"
  },
  circleSize: {
    optional: true,
    type: "number"
  },
  backgroundColor: {
    optional: false,
    type: "color"
  },
  circleColor: {
    optional: false,
    type: "color"
  }
};

var name = "@donkeyclip/motorcortex-backgrounds";
var version = "0.3.0";
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
	"@babel/core": "7.20.5",
	"@babel/preset-env": "7.20.2",
	"@donkeyclip/motorcortex": "9.4.1",
	"@donkeyclip/motorcortex-player": "2.10.7",
	"@rollup/plugin-babel": "5.3.1",
	"@rollup/plugin-commonjs": "21.1.0",
	"@rollup/plugin-json": "4.1.0",
	"@rollup/plugin-node-resolve": "13.3.0",
	"babel-eslint": "10.1.0",
	"babel-loader": "8.2.5",
	"babel-preset-es2015-node5": "1.2.0",
	browserslist: "4.21.4",
	"caniuse-lite": "1.0.30001439",
	concurrently: "7.4.0",
	coveralls: "3.1.1",
	"css-loader": "6.7.3",
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
	tslib: "2.4.1",
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
    attributesValidationRules: {
      ...BgOpenerValidation
    }
  }, {
    exportable: TwoSidesReveal,
    name: "TwoSidesReveal",
    attributesValidationRules: {
      ...TwoSidesRevealValidation
    }
  }, {
    exportable: ColumnReveal,
    name: "ColumnReveal",
    attributesValidationRules: {
      ...ColumnRevealValidation
    }
  }, {
    exportable: RowReveal,
    name: "RowReveal",
    attributesValidationRules: {
      ...RowRevealValidation
    }
  }, {
    exportable: ThreeSidesReveal,
    name: "ThreeSidesReveal",
    attributesValidationRules: {
      ...ThreeSidesRevealValidation
    }
  }, {
    exportable: Grid,
    name: "Grid",
    attributesValidationRules: {
      ...GridValidation
    }
  }, {
    exportable: HexagonCircle,
    name: "HexagonCircle",
    attributesValidationRules: {
      ...HexagonCircleValidation
    }
  }, {
    exportable: FloatingBubbles,
    name: "FloatingBubbles",
    attributesValidationRules: {
      ...FloatingBubblesValidation
    }
  }, {
    exportable: Wave,
    name: "Wave",
    attributesValidationRules: {
      ...WaveValidation
    }
  }, {
    exportable: GradientLines,
    name: "GradientLines",
    attributesValidationRules: {
      ...GradientLinesValidation
    }
  }, {
    exportable: Ripples,
    name: "Ripples",
    attributesValidationRules: {
      ...RipplesValidation
    }
  }]
};

module.exports = index;
