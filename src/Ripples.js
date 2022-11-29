import { HTMLClip, CSSEffect, Combo } from "@donkeyclip/motorcortex";

export default class Ripples extends HTMLClip {
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
        left: -${(this.attrs.circleSize * 0.2) / 2}px;
        bottom: -${(this.attrs.circleSize * 0.2) / 2}px;
        opacity: 0.9;
      }
      
      .medium{
        width: ${this.attrs.circleSize * 0.4}px;
        height: ${this.attrs.circleSize * 0.4}px;
        left: -${(this.attrs.circleSize * 0.4) / 2}px;
        bottom: -${(this.attrs.circleSize * 0.4) / 2}px;
        opacity: 0.8;
      }
      
      .large{
        width: ${this.attrs.circleSize * 0.6}px;
        height: ${this.attrs.circleSize * 0.6}px;
        left: -${(this.attrs.circleSize * 0.6) / 2}px;
        bottom: -${(this.attrs.circleSize * 0.6) / 2}px;
        opacity: 0.7;
      }
      
      .xlarge{
        width: ${this.attrs.circleSize * 0.8}px;
        height: ${this.attrs.circleSize * 0.8}px;
        left: -${(this.attrs.circleSize * 0.8) / 2}px;
        bottom: -${(this.attrs.circleSize * 0.8) / 2}px;
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
    const RippleIncident = new Combo(
      {
        incidents: [
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                transform: {
                  scale: 0.8,
                },
              },
            },
            props: {
              duration: 5000,
            },
            position: 0,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                transform: {
                  scale: 1.2,
                },
              },
            },
            props: {
              duration: 5000,
            },
            position: 5000,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                transform: {
                  scale: 0.8,
                },
              },
            },
            props: {
              duration: 5000,
            },
            position: 10000,
          },
        ],
      },
      {
        selector: ".circle",
      }
    );
    this.addIncident(RippleIncident, 0);
  }
}
