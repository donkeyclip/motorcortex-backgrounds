import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import AnimeDefinition from "@donkeyclip/motorcortex-anime";

const Anime = loadPlugin(AnimeDefinition);

export default class RowReveal extends HTMLClip {
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
        top:-${this.attrs.height - (this.attrs.height / 4) * 3}px;
      }
      .bg-2{
        top:-${this.attrs.height - (this.attrs.height / 4) * 2}px;
      }
      .bg-3{
        top:-${this.attrs.height - this.attrs.height / 4}px;
      }
    `;
  }

  buildTree() {
    const bgPositionOneIn = new Anime.Anime(
      {
        animatedAttrs: {
          left: `0px`
        }
      },
      {
        duration: 1000,
        selector: ".bg-wrapper",
        easing: this.attrs.easing,
        delay: `@stagger(0, 500,0)`
      }
    );
    this.addIncident(bgPositionOneIn, 0);
    if (this.attrs.bgOut === true) {
      const bgPositionOneOut = new Anime.Anime(
        {
          animatedAttrs: {
            left: `-${this.attrs.width}px`
          }
        },
        {
          duration: 1000,
          selector: ".bg-wrapper",
          easing: this.attrs.easing,
          delay: `@stagger(0, 500,0)`
        }
      );
      this.addIncident(bgPositionOneOut, this.attrs.exitStart);
    }
  }
}
