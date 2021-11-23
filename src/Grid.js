import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";

export default class Grid extends HTMLClip {
  get font() {
    return [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`,
      },
    ];
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
    const gridOpacity = new CSSEffect(
      {
        animatedAttrs: {
          opacity: 0,
        },
        initialValues: {
          opacity: 0.7,
        },
      },
      {
        duration: 1000,
        selector: ".grid",
        delay: `@expression(random(1000))`,
      }
    );
    this.addIncident(gridOpacity, 0);
  }
}
