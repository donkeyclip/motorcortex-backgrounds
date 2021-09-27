import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import AnimeDefinition from "@donkeyclip/motorcortex-anime";

const Anime = loadPlugin(AnimeDefinition);

export default class TwoSidesReveal extends HTMLClip {
  get font() {
    return [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
      }
    ];
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
    const bgPositionLeft = new Anime.Anime(
      {
        animatedAttrs: {
          left: `${this.attrs.width / 2}px`
        },
        initialValues: {
          left: `${this.attrs.width}px`
        }
      },
      {
        duration: 1000,
        selector: ".bg-0",
        easing: this.attrs.easing
      }
    );
    this.addIncident(bgPositionLeft, 0);
    const bgPositionRigth = new Anime.Anime(
      {
        animatedAttrs: {
          right: `${this.attrs.width / 2}px`
        },
        initialValues: {
          right: `${this.attrs.width}px`
        }
      },
      {
        duration: 1000,
        selector: ".bg-1",
        easing: this.attrs.easing
      }
    );
    this.addIncident(bgPositionRigth, 0);
  }
}
