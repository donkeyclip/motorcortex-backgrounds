import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import AnimeDefinition from "@donkeyclip/motorcortex-anime";
import grid from "./Grid";

const Anime = loadPlugin(AnimeDefinition);

export default class ThreeSidesReveal extends HTMLClip {
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
    const bgWrapperBgColor = new Anime.Anime(
      {
        animatedAttrs: {
          opacity: 0
        },
        initialValues: {
          opacity: 1
        }
      },
      {
        duration: 1000,
        selector: ".bg-in",
        easing: "easeOutQuart",
        delay: `@stagger(200, 500,0)`
      }
    );
    this.addIncident(bgWrapperBgColor, 0);
    const bgWrapperOpacity = new Anime.Anime(
      {
        animatedAttrs: {
          opacity: 1
        },
        initialValues: {
          opacity: 0
        }
      },
      {
        duration: 1000,
        selector: ".bg-wrapper-in",
        easing: "easeOutQuart",
        delay: `@stagger(0, 500,0)`
      }
    );
    this.addIncident(bgWrapperOpacity, 100);

    const bgOne = new Anime.Anime(
      {
        animatedAttrs: {
          left: "0px"
        },
        initialValues: {
          left: `-${this.attrs.width / 2}px`
        }
      },
      {
        duration: 1400,
        selector: ".bg-0",
        easing: "easeOutQuart"
      }
    );
    this.addIncident(bgOne, 0);

    const bgTwo = new Anime.Anime(
      {
        animatedAttrs: {
          top: `0px`
        },
        initialValues: {
          top: `-${this.attrs.height * 0.65}px`
        }
      },
      {
        duration: 1000,
        selector: ".bg-1",
        easing: "easeOutQuart"
      }
    );
    this.addIncident(bgTwo, 400);

    const bgThree = new Anime.Anime(
      {
        animatedAttrs: {
          left: `0px`
        },
        initialValues: {
          left: `-${this.attrs.width / 2}px`
        }
      },
      {
        duration: 1500,
        selector: ".bg-2",
        easing: "easeOutQuart"
      }
    );
    this.addIncident(bgThree, 400);
    const bgScale = new Anime.Anime(
      {
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
      },
      {
        duration: 3600,
        selector: ".bg"
      }
    );
    this.addIncident(bgScale, 1000);
    if (this.attrs.grid === true) {
      const Grid = new grid(
        {
          width: this.attrs.width,
          height: this.attrs.height,
          color: this.attrs.gridColor,
          columns: this.attrs.columns,
          rows: this.attrs.rows
        },
        {
          selector: ".bg",
          duration: this.attrs.gridDuration || 1972
        }
      );

      this.addIncident(Grid, 0);
    }
  }
}
