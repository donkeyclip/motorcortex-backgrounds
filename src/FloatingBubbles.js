import { HTMLClip, CSSEffect, Combo } from "@donkeyclip/motorcortex";
function getRandomRenge(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export default class FloatingBubbles extends HTMLClip {
  get font() {
    return [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`,
      },
    ];
  }

  get html() {
    this.bubbleCords = [...new Array(this.attrs.bubbleCount / 2)].map(() => [
      getRandomRenge(0, 100),
      getRandomRenge(0, 100),
      getRandomRenge(3, this.attrs.maxBubbleRadius),
    ]);

    return `
      <div class="wrapper">
        ${[...new Array(this.attrs.bubbleCount)]
          .map((_, i) => {
            if (i < this.attrs.bubbleCount / 2) {
              return `<div class="bubble initial" style="width:${this.bubbleCords[i][2]}px; height:${this.bubbleCords[i][2]}px; left:${this.bubbleCords[i][0]}%; top:${this.bubbleCords[i][1]}%" > <div class="bubble-incide"></div></div>`;
            } else {
              return `<div class="bubble end" style="left:${
                this.bubbleCords[i - this.attrs.bubbleCount / 2][0]
              }%; width:${
                this.bubbleCords[i - this.attrs.bubbleCount / 2][2]
              }px; height:${
                this.bubbleCords[i - this.attrs.bubbleCount / 2][2]
              }px;" ><div class="bubble-incide"></div></div>`;
            }
          })
          .join("")}
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
    const initialToTop = new CSSEffect(
      {
        animatedAttrs: {
          top: `@pattern(${this.bubbleCords.map((i) => `- ${i[2]} px`)})`,
        },
      },
      {
        duration: 4000,
        selector: ".initial",
      }
    );
    this.addIncident(initialToTop, 0);
    const endlToTop = new CSSEffect(
      {
        animatedAttrs: {
          top: `@pattern(${this.bubbleCords.map((i) => i[1] + "%")})`,
        },
      },
      {
        duration: 4000,
        selector: ".end",
      }
    );
    this.addIncident(endlToTop, 0);

    const SwingEven = new Combo(
      {
        incidents: [
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                left: "100%",
              },
            },
            props: {
              duration: 2000,

              selector: ".bubble-incide",
            },
            position: 0,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                left: "0%",
              },
            },
            props: {
              duration: 2000,

              selector: ".bubble-incide",
            },
            position: 2000,
          },
        ],
      },
      {
        selector: ".bubble:nth-of-type(even)",
      }
    );
    const SwingOdd = new Combo(
      {
        incidents: [
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                left: "0%",
              },
            },
            props: {
              duration: 2000,

              selector: ".bubble-incide",
            },
            position: 0,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                left: "100%",
              },
            },
            props: {
              duration: 2000,

              selector: ".bubble-incide",
            },
            position: 2000,
          },
        ],
      },
      {
        selector: ".bubble:nth-of-type(odd)",
      }
    );

    this.addIncident(SwingEven, 0);
    this.addIncident(SwingOdd, 0);
  }
}
