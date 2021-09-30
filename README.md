# motorcortex-backgrounds

## Demo
[Check it out here](https://donkeyclip.github.io/motorcortex-backgrounds/demo/index.html)

## Installation

```bash
$ npm install --save @donkeyclip/motorcortex-backgrounds
# OR
$ yarn add @donkeyclip/motorcortex-backgrounds
```

## Loading

```javascript
import {loadPlugin} from "@donkeyclip/motorcortex";
import BackgroundsDefinition from "@donkeyclip/motorcortex-backgrounds";
const Plugin = loadPlugin(BackgroundsDefinition);
```

# Create incident

## BgOpener

```javascript
const BgOpener = new Plugin.BgOpener(
  {
    width: 512,
    height: 288,
    bgUrl:"https://donkeyclip.github.io/motorcortex-slides/demo/kissmybutonbg.jpg",
    timing:0.3,
    easing:"easeInQuad",
    exitStart:2000
  },
  {
    selector: ".container1"
  }
);
```

### BgOpener Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| width     | width of incident  | num |
| height     | height of incident  | num |
| bgUrl     | url of the bg image  | string |
| easing     | easing of the animation  | string |
| exitStart     | the millisecond that we want to start the bg exiting  | num |


## TwoSidesReveal

```javascript
const TwoSidesReveal = new Plugin.TwoSidesReveal(
  {
    width: 512,
    height: 288,
    bgUrl:
    "https://donkeyclip.github.io/motorcortex-slides/demo/kissmybutonbg.jpg",
    easing:"easeInQuad",
  },
  {
    selector: ".container2"
  }
);
```

### TwoSidesReveal Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| width     | width of incident  | num |
| height     | height of incident  | num |
| bgUrl     | url of the bg image  | string |
| easing     | easing of the animation  | string |



## RowReveal

```javascript
const RowReveal = new Plugin.RowReveal(
  {
    width: 512,
    height: 288,
    bgUrl:
    "https://donkeyclip.github.io/motorcortex-slides/demo/kissmybutonbg.jpg",
    easing:"easeOutQuart",
    exitStart:2000,
    bgOut: true
  },
  {
    selector: ".container3"
  }
);
```

### RowReveal Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| width     | width of incident  | num |
| height     | height of incident  | num |
| bgUrl     | url of the bg image  | string |
| easing     | easing of the animation  | string |
| exitStart     | the millisecond that we want to start the bg exiting  | num |
| bgOut     | set true if we like to have a bg exit  | boolean |


## ColumnReveal

```javascript
const ColumnReveal = new Plugin.ColumnReveal(
  {
    width: 512,
    height: 288,
    bgUrl:
    "https://donkeyclip.github.io/motorcortex-slides/demo/kissmybutonbg.jpg",
    easing:"easeOutQuart",
    exitStart:2000,
    bgOut: true
  },
  {
    selector: ".container4"
  }
);
```

### ColumnReveal Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| width     | width of incident  | num |
| height     | height of incident  | num |
| bgUrl     | url of the bg image  | string |
| easing     | easing of the animation  | string |
| exitStart     | the millisecond that we want to start the bg exiting  | num |
| bgOut     | set true if we like to have a bg exit  | boolean |



## Grid

```javascript
const Grid = new Plugin.Grid(
  {
    width: 512,
    height: 288,
    color: "#000",
    columns: 6,
    rows : 4,
  },
  {
    selector: ".container6"
  }
);
```

### Grid Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| width     | width of incident  | num |
| height     | height of incident  | num |
| color     | the color of the background  | hex,rgb |
| columns     | how many columns the grid will have  | num |
| rows     | how many rows the grid will have  | num |



## ThreeSidesReveal

```javascript
const ThreeSidesReveal = new Plugin.ThreeSidesReveal(
  {
    width: 512,
    height: 288,
    bgUrl: "https://donkeyclip.github.io/motorcortex-slides/demo/bg3.jpg",
    overlayColor: "#ff0000",
    grid: true,
    gridDuration:1,
    gridColor: "#000",
    columns: 6,
    rows : 4,
  },
  {
    selector: ".container5",
  }
);
```

### ThreeSidesReveal Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| width     | width of incident  | num |
| height     | height of incident  | num |
| bgUrl     | url of the bg image  | string |
| overlayColor   | overlay color of background  | hex,rgb |
| grid     | set true if we like to have a gid  | boolean |
| gridDuration     | grid incident duration  | num |
| gridColor     | the color of the background  | hex,rgb |
| columns     | how many columns the grid will have  | num |
| rows     | how many rows the grid will have  | num |
