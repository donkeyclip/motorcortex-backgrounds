import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import AnimeDefinition from "@donkeyclip/motorcortex-anime";

const Anime = loadPlugin(AnimeDefinition);

export default class BgOpener extends HTMLClip {
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
    const bgPosition = new Anime.Anime(
      {
        animatedAttrs: {
          top: `${0}px`
        },
        initialValues: {
          top: `-${this.attrs.height / 2}px`
        }
      },
      {
        duration: 300,
        selector: ".bg-0",
        easing: this.attrs.easing
      }
    );

    this.addIncident(bgPosition, 0);

    const bgPositionOne = new Anime.Anime(
      {
        animatedAttrs: {
          top: `-${this.attrs.height / 2}px`
        },
        initialValues: {
          top: `-${this.attrs.height / 2}px`
        }
      },
      {
        duration: 300,
        selector: ".bg-1",
        easing: this.attrs.easing
      }
    );

    this.addIncident(bgPositionOne, 0);

    const wrapperHeight = new Anime.Anime(
      {
        animatedAttrs: {
          height: `${this.attrs.height / 2}px`,
          top: `${0}px`
        },
        initialValues: {
          height: `${0}px`,
          top: `${this.attrs.height / 2}px`
        }
      },
      {
        duration: 300,
        selector: ".bg-wrapper",
        easing: this.attrs.easing
      }
    );

    this.addIncident(wrapperHeight, 0);

    const wrapperHeightOut = new Anime.Anime(
      {
        animatedAttrs: {
          // height: `${this.attrs.height/2}px`,
          top: `-${this.attrs.height / 2}px`
        },
        initialValues: {
          // height: `${0}px`,
          top: `${0}px`
        }
      },
      {
        duration: 300,
        selector: ".bg-wrapper-0",
        easing: this.attrs.easing
      }
    );

    this.addIncident(wrapperHeightOut, this.attrs.exitStart);

    const wrapperHeightOutOne = new Anime.Anime(
      {
        animatedAttrs: {
          // height: `${this.attrs.height/2}px`,
          top: `${this.attrs.height / 2}px`
        },
        initialValues: {
          // height: `${0}px`,
          top: `${0}px`
        }
      },
      {
        duration: 300,
        selector: ".bg-wrapper-1",
        easing: this.attrs.easing
      }
    );

    this.addIncident(wrapperHeightOutOne, this.attrs.exitStart);

    const bgPositionOut = new Anime.Anime(
      {
        animatedAttrs: {
          top: `${this.attrs.height / 2}px`
        }
        // initialValues: {
        //   top: `-${this.attrs.height/2}px`
        // }
      },
      {
        duration: 300,
        selector: ".bg-0",
        easing: this.attrs.easing
      }
    );

    this.addIncident(bgPositionOut, this.attrs.exitStart);

    const bgPositionOneOut = new Anime.Anime(
      {
        animatedAttrs: {
          top: `-${this.attrs.height}px`
        },
        initialValues: {
          top: `-${this.attrs.height / 2}px`
        }
      },
      {
        duration: 300,
        selector: ".bg-1",
        easing: this.attrs.easing
      }
    );

    this.addIncident(bgPositionOneOut, this.attrs.exitStart);
  }
}
