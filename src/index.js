import BgOpener from "./BgOpener";
import TwoSidesReveal from "./TwoSidesReveal";
import ColumnReveal from "./ColumnReveal";
import RowReveal from "./RowReveal";
import ThreeSidesReveal from "./ThreeSidesReveal";
import HexagonCircle from "./HexagonCircle";
import FloatingBubbles from "./FloatingBubbles";
import Grid from "./Grid";
import Wave from "./Wave";
import GradientLines from "./GradientLines";
import Ripples from "./Ripples";
import {
  BgOpenerValidation,
  TwoSidesRevealValidation,
  RowRevealValidation,
  ColumnRevealValidation,
  GridValidation,
  ThreeSidesRevealValidation,
  HexagonCircleValidation,
  FloatingBubblesValidation,
  WaveValidation,
  GradientLinesValidation,
  RipplesValidation,
} from "./validation";

import pkg from "../package.json";

export default {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [
    {
      exportable: BgOpener,
      name: "BgOpener",
      attributesValidationRules: { ...BgOpenerValidation },
    },
    {
      exportable: TwoSidesReveal,
      name: "TwoSidesReveal",
      attributesValidationRules: { ...TwoSidesRevealValidation },
    },
    {
      exportable: ColumnReveal,
      name: "ColumnReveal",
      attributesValidationRules: { ...ColumnRevealValidation },
    },
    {
      exportable: RowReveal,
      name: "RowReveal",
      attributesValidationRules: { ...RowRevealValidation },
    },
    {
      exportable: ThreeSidesReveal,
      name: "ThreeSidesReveal",
      attributesValidationRules: { ...ThreeSidesRevealValidation },
    },
    {
      exportable: Grid,
      name: "Grid",
      attributesValidationRules: { ...GridValidation },
    },
    {
      exportable: HexagonCircle,
      name: "HexagonCircle",
      attributesValidationRules: { ...HexagonCircleValidation },
    },
    {
      exportable: FloatingBubbles,
      name: "FloatingBubbles",
      attributesValidationRules: { ...FloatingBubblesValidation },
    },
    {
      exportable: Wave,
      name: "Wave",
      attributesValidationRules: { ...WaveValidation },
    },
    {
      exportable: GradientLines,
      name: "GradientLines",
      attributesValidationRules: { ...GradientLinesValidation },
    },
    {
      exportable: Ripples,
      name: "Ripples",
      attributesValidationRules: { ...RipplesValidation },
    },
  ],
};
