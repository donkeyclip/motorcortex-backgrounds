import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";

export default class Wave extends HTMLClip {
  get font() {
    return [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`,
      },
    ];
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
    const WaveOne = new CSSEffect(
      {
        animatedAttrs: {
          transform: {
            rotate: "360deg",
          },
        },
      },
      {
        duration: 4000,

        selector: ".wave.-one",
      }
    );
    this.addIncident(WaveOne, 0);
    const WaveTwo = new CSSEffect(
      {
        animatedAttrs: {
          transform: {
            rotate: "390deg",
          },
        },
        initialValues: {
          transform: {
            rotate: "30deg",
          },
        },
      },
      {
        duration: 4000,

        selector: ".wave.-two",
      }
    );
    this.addIncident(WaveTwo, 0);
    const WaveThree = new CSSEffect(
      {
        animatedAttrs: {
          transform: {
            rotate: "420deg",
          },
        },
        initialValues: {
          transform: {
            rotate: "60deg",
          },
        },
      },
      {
        duration: 4000,

        selector: ".wave.-three",
      }
    );
    this.addIncident(WaveThree, 0);
  }
}
