# MotorCortex-Backgrounds

**Table of Contents**

- [MotorCortex-Backgrounds](#motorcortex-backgrounds)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [BgOpener](#bgopener)
  - [TwoSidesReveal](#twosidesreveal)
  - [RowReveal](#rowreveal)
  - [ColumnReveal](#columnreveal)
  - [Grid](#grid)
  - [ThreeSidesReveal](#threesidesreveal)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://donkeyclip.github.io/motorcortex-backgrounds/demo/index.html)

# Intro / Features
Αre you tired of simple backgrounds in your clips? Using MotorCortex-Backgrounds you can include impressive effects for the background of your clip.

This Plugin exposes six Incidents:
- BgOpener
- TwoSidesReveal
- RowReveal
- ColumnReveal
- Grid
- ThreeSidesReveal

# Getting Started

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-backgrounds
# OR
$ yarn add @donkeyclip/motorcortex-backgrounds
```

## Importing and loading

```javascript
import { loadPlugin } from "@donkeyclip/motorcortex";
import BackgroundsDefinition from "@donkeyclip/motorcortex-backgrounds";
const Plugin = loadPlugin(BackgroundsDefinition);
```

# Creating Incidents

## BgOpener

BgOpener engages your selector's object to open up and down and removes it from the clip like it splits into two parts.

```javascript
const BgOpener = new Plugin.BgOpener(
  {
    width: 512,
    height: 288,
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-slides/demo/kissmybutonbg.jpg",
    timing: 0.3,
    easing: "easeInQuad",
    exitStart: 2000,
  },
  {
    selector: ".container1",
  }
);
```

### BgOpener Attrs

| Name      |                         Are                          | Values |
| --------- | :--------------------------------------------------: | -----: |
| width     |                  width of incident                   |    num |
| height    |                  height of incident                  |    num |
| bgUrl     |                 url of the bg image                  | string |
| easing    |               easing of the animation                | string |
| exitStart | the millisecond that we want to start the bg exiting |    num |

## TwoSidesReveal

TwoSidesReveal engages your selector's object to open right and left.

```javascript
const TwoSidesReveal = new Plugin.TwoSidesReveal(
  {
    width: 512,
    height: 288,
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-slides/demo/kissmybutonbg.jpg",
    easing: "easeInQuad",
  },
  {
    selector: ".container2",
  }
);
```

### TwoSidesReveal Attrs

| Name   |           Are           | Values |
| ------ | :---------------------: | -----: |
| width  |    width of incident    |    num |
| height |   height of incident    |    num |
| bgUrl  |   url of the bg image   | string |
| easing | easing of the animation | string |

## RowReveal

ColumnReveal engages your selector's object to split into four columns and displays and removes them incrementally and sequentially.

```javascript
const RowReveal = new Plugin.RowReveal(
  {
    width: 512,
    height: 288,
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-slides/demo/kissmybutonbg.jpg",
    easing: "easeOutQuart",
    exitStart: 2000,
    bgOut: true,
  },
  {
    selector: ".container3",
  }
);
```

### RowReveal Attrs

| Name      |                         Are                          |  Values |
| --------- | :--------------------------------------------------: | ------: |
| width     |                  width of incident                   |     num |
| height    |                  height of incident                  |     num |
| bgUrl     |                 url of the bg image                  |  string |
| easing    |               easing of the animation                |  string |
| exitStart | the millisecond that we want to start the bg exiting |     num |
| bgOut     |        set true if we like to have a bg exit         | boolean |

## ColumnReveal

ColumnReveal engages your selector's object to split into four columns and displays and removes them incrementally.

```javascript
const ColumnReveal = new Plugin.ColumnReveal(
  {
    width: 512,
    height: 288,
    bgUrl:
      "https://donkeyclip.github.io/motorcortex-slides/demo/kissmybutonbg.jpg",
    easing: "easeOutQuart",
    exitStart: 2000,
    bgOut: true,
  },
  {
    selector: ".container4",
  }
);
```

### ColumnReveal Attrs

| Name      |                         Are                          |  Values |
| --------- | :--------------------------------------------------: | ------: |
| width     |                  width of incident                   |     num |
| height    |                  height of incident                  |     num |
| bgUrl     |                 url of the bg image                  |  string |
| easing    |               easing of the animation                |  string |
| exitStart | the millisecond that we want to start the bg exiting |     num |
| bgOut     |        set true if we like to have a bg exit         | boolean |

## Grid

Grid changes the color of your background incrementally and sequentially based on the the columns and rows you choose.

```javascript
const Grid = new Plugin.Grid(
  {
    width: 512,
    height: 288,
    color: "#000",
    columns: 6,
    rows: 4,
  },
  {
    selector: ".container6",
  }
);
```

### Grid Attrs

| Name    |                 Are                 |  Values |
| ------- | :---------------------------------: | ------: |
| width   |          width of incident          |     num |
| height  |         height of incident          |     num |
| color   |     the color of the background     | hex,rgb |
| columns | how many columns the grid will have |     num |
| rows    |  how many rows the grid will have   |     num |

## ThreeSidesReveal

ThreeSidesReveal splits your selector's object into three parts and displays them from different directions.

```javascript
const ThreeSidesReveal = new Plugin.ThreeSidesReveal(
  {
    width: 512,
    height: 288,
    bgUrl: "https://donkeyclip.github.io/motorcortex-slides/demo/bg3.jpg",
    overlayColor: "#ff0000",
    grid: true,
    gridDuration: 1,
    gridColor: "#000",
    columns: 6,
    rows: 4,
  },
  {
    selector: ".container5",
  }
);
```

### ThreeSidesReveal Attrs

| Name         |                 Are                 |  Values |
| ------------ | :---------------------------------: | ------: |
| width        |          width of incident          |     num |
| height       |         height of incident          |     num |
| bgUrl        |         url of the bg image         |  string |
| overlayColor |     overlay color of background     | hex,rgb |
| grid         |  set true if we like to have a gid  | boolean |
| gridDuration |       grid incident duration        |     num |
| gridColor    |     the color of the background     | hex,rgb |
| columns      | how many columns the grid will have |     num |
| rows         |  how many rows the grid will have   |     num |

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName,startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes


# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[<img src="https://presskit.donkeyclip.com/logos/donkey%20clip%20logo.svg" width=250></img>](https://donkeyclip.com)
