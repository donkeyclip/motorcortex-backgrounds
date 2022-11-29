import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import ShadowLineDef from "./internalPlugins/shadowLine/main";
const ShadowLinePlugin = loadPlugin(ShadowLineDef);

export default class LongShadow extends HTMLClip {
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
        <canvas id="shadow" width="${this.attrs.width}px" height="${this.attrs.height}px"></canvas> 
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
    const ShadowLine = new ShadowLinePlugin.ShadowLine(
      {
        test: "test",
      },
      {
        duration: 2000,
        selector: "#shadow",
      }
    );
    this.addIncident(ShadowLine, 0);
  }
}
