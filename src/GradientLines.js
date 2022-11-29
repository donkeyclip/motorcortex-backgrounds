import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import LineEffectDef from "./internalPlugins/lineEffect/main";
const LineEffectPlugin = loadPlugin(LineEffectDef);

export default class GradientLines extends HTMLClip {
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
    const LineEffect = new LineEffectPlugin.LineEffect(
      {
        hue: this.attrs.hue,
        width: this.attrs.lineWidth,
        length: this.attrs.lineLength,
        lineNumber: this.attrs.lineNumber,
        opacity: this.attrs.opacity,
      },
      {
        duration: 2000,
        selector: "#lines",
      }
    );
    this.addIncident(LineEffect, 0);
  }
}
