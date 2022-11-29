import { HTMLClip, CSSEffect, Combo } from "@donkeyclip/motorcortex";

export default class HexagonCircle extends HTMLClip {
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

    const BgColor = new Combo(
      {
        incidents: [
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                backgroundColor: this.attrs.colors[2],
              },
            },
            props: {
              duration: 800,
              easing: [0.76, 0, 0.24, 1],
            },
            position: 0,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                backgroundColor: this.attrs.colors[0],
              },
            },
            props: {
              duration: 800,
              easing: [0.76, 0, 0.24, 1],
            },
            position: 800,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                backgroundColor: this.attrs.colors[2],
              },
            },
            props: {
              duration: 800,
              easing: [0.76, 0, 0.24, 1],
            },
            position: 1600,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                backgroundColor: this.attrs.colors[1],
              },
            },
            props: {
              duration: 800,
              easing: [0.76, 0, 0.24, 1],
            },
            position: 2400,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                backgroundColor: this.attrs.colors[2],
              },
            },
            props: {
              duration: 800,
              easing: [0.76, 0, 0.24, 1],
            },
            position: 3200,
          },
        ],
      },
      {
        selector: ".wrapper",
      }
    );
    const BgPosition = new Combo(
      {
        incidents: [
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                backgroundPosition: `
                  ${position}px ${position * 4}px, 
                   ${position * -1}px ${position * 5}px, 
                  ${position}px ${position * 3}px, 
                   ${position * -1}px  ${position * 4}px`,
              },
            },
            props: {
              duration: 800,
              easing: [0.76, 0, 0.24, 1],
            },
            position: 0,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                backgroundPosition: `
                ${position * 3}px ${position * 8}px, 
                ${position * -3}px ${position * 9}px, 
                ${position * 2}px ${position * 7}px, 
                ${position * -2}px ${position * 8}px
                `,
              },
            },
            props: {
              duration: 800,
              easing: [0.76, 0, 0.24, 1],
            },
            position: 1600,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                backgroundPosition: `
                ${position * 3}px ${position * 12}px, 
                ${position * -3}px ${position * 13}px, 
                ${position * 2}px ${position * 11}px, 
                ${position * -2}px ${position * 12}px
                
                `,
              },
            },
            props: {
              duration: 800,
              easing: [0.76, 0, 0.24, 1],
            },
            position: 2400,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                backgroundPosition: `
                ${position * 5}px ${position * 16}px, 
                ${position * -5}px ${position * 17}px, 
                ${position * 5}px ${position * 15}px, 
                ${position * -5}px ${position * 16}px
                
                `,
              },
            },
            props: {
              duration: 800,
              easing: [0.76, 0, 0.24, 1],
            },
            position: 3200,
          },
        ],
      },
      {
        selector: ".wrapper",
      }
    );

    this.addIncident(BgColor, 0);
    this.addIncident(BgPosition, 0);
  }
}
