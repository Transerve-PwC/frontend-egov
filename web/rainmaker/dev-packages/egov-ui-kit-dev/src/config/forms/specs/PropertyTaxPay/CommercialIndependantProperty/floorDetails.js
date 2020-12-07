import { subUsageType, occupancy, builtArea, annualRent, floorName, beforeInitForm, constructionType, floorCategories } from "../utils/reusableFields";
import { MDMS } from "egov-ui-kit/utils/endPoints";

const formConfig = {
  name: "floorDetails",
  fields: {
    usageType: {
      id: "assessment-usageType",
      jsonPath: "Properties[0].propertyDetails[0].units[0].usageCategoryMinor",
      type: "textfield",
      floatingLabelText: "PT_FORM2_USAGE_TYPE",
      hintText: "PT_COMMONS_SELECT_PLACEHOLDER",
      //value: "Commercial",
      value: "PROPERTYTAX_BILLING_SLAB_COMMERCIAL",
      required: true,
      disabled: true,
      numcols: 4,
      formName: "plotDetails",
    },
    ...subUsageType,
    ...occupancy,
    ...builtArea,
    ...floorName,
    ...annualRent,
    ...constructionType,
    ...floorCategories
  },
  isFormValid: false,
  ...beforeInitForm,
};

export default formConfig;
