import {constructionType, constructionYear, roadWidth, beforeInitFormForConstruction} from "../utils/reusableFields";
const formConfig = {
  name: "constructionDetails",
  fields: {
    // ...constructionType,
    ...constructionYear,
    ...roadWidth
  },
  isFormValid: false,
  ...beforeInitFormForConstruction
};

export default formConfig;
