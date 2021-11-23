import BgOpener from "./BgOpener";
import TwoSidesReveal from "./TwoSidesReveal";
import ColumnReveal from "./ColumnReveal";
import RowReveal from "./RowReveal";
import ThreeSidesReveal from "./ThreeSidesReveal";
import Grid from "./Grid";
import {
  BgOpenerValidation,
  TwoSidesRevealValidation,
  RowRevealValidation,
  ColumnRevealValidation,
  GridValidation,
  ThreeSidesRevealValidation,
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
  ],
};
