import {constructionType, roadWidth, beforeInitFormForConstruction} from "../utils/reusableFields";
const formConfig = {
  name: "constructionDetails",
  fields: {
    ...constructionType,
    ...roadWidth
  },
  isFormValid: false,
  ...beforeInitFormForConstruction
};

export default formConfig;
