import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import BackgroundsDefinition from "../dist/motorcortex-backgrounds.umd";
const Plugin = loadPlugin(BackgroundsDefinition);

const clip = new HTMLClip({
  css: `
    .container {
      overflow: hidden;
      width:426px;
      height:239px;
    }

    .wrapper{
      width:1280px;
      height:720px;
      display:flex;
      font-family: 'Poppins', sans-serif;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      align-items: center;
    }

    .flex{
      display: flex;
      justify-content: center;
      background-color: #bfbfbf;
      height: 100%;
      width: 100%;
    }
  `,
  html: ` 
    <div class="flex">
      <div class="wrapper">
        <div class="container container1"></div>
        <div class="container container2"></div>
        <div class="container container3"></div>
        <div class="container container4"></div>
        <div class="container container5"></div>
        <div class="container container6"></div>
      </div>
    </div>
  `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "1280px",
    height: "720px"
  },
  id: "root",
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }
  ]
});

const BgOpener = new Plugin.BgOpener(
  {
    width: 426,
    height: 239,
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-backgrounds/demo/assets/kissmybutonbg.jpg",
    easing: "easeInQuad",
    exitStart: 2000
  },
  {
    selector: ".container1"
  }
);

const TwoSidesReveal = new Plugin.TwoSidesReveal(
  {
    width: 426,
    height: 239,
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-backgrounds/demo/assets/kissmybutonbg.jpg",
    easing: "easeInQuad"
  },
  {
    selector: ".container2"
  }
);

const RowReveal = new Plugin.RowReveal(
  {
    width: 426,
    height: 239,
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-backgrounds/demo/assets/kissmybutonbg.jpg",
    timing: 1,
    easing: "easeOutQuart",
    exitStart: 2000,
    bgOut: true
  },
  {
    selector: ".container3"
  }
);

const ColumnReveal = new Plugin.ColumnReveal(
  {
    width: 426,
    height: 239,
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-backgrounds/demo/assets/kissmybutonbg.jpg",
    timing: 1,
    easing: "easeOutQuart",
    exitStart: 2000,
    bgOut: true
  },
  {
    selector: ".container4"
  }
);

const ThreeSidesReveal = new Plugin.ThreeSidesReveal(
  {
    width: 426,
    height: 239,
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-backgrounds/demo/assets/bg3.jpg",
    overlayColor: "#ff0000",
    grid: false,
    // gridDuration: 5000,
    gridColor: "#000",
    columns: 6,
    rows: 4
  },
  {
    selector: ".container5"
  }
);

const Grid = new Plugin.Grid(
  {
    width: 426,
    height: 239,
    color: "#000",
    columns: 6,
    rows: 4,
    timing: 1
  },
  {
    selector: ".container6"
  }
);

clip.addIncident(BgOpener, 0);
clip.addIncident(TwoSidesReveal, 0);
clip.addIncident(RowReveal, 0);
clip.addIncident(ColumnReveal, 0);
clip.addIncident(ThreeSidesReveal, 0);
clip.addIncident(Grid, 0);

new Player({ clip, timeFormat: "ms" });
