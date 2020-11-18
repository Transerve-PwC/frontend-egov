import { sortDropdown } from "egov-ui-kit/utils/PTCommon";
import { prepareFormData } from "egov-ui-kit/redux/common/actions";
import { removeForm } from "egov-ui-kit/redux/form/actions";
import { removeFormKey } from "./utils/removeFloors";
import { prepareDropDownData } from "./utils/reusableFields";
import set from "lodash/set";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { getLocaleLabels } from "egov-ui-framework/ui-utils/commons.js";
import { localStorageSet } from "egov-ui-kit/utils/localStorageUtils";


const options = [
  
  { value: true, label: getLocaleLabels("Yes", "PT_COMMON_YES") },
  { value: false, label: getLocaleLabels("No", "PT_COMMON_NO") },
];
const formConfig = {
  name: "basicInformation",
  fields: {
    typeOfUsage: {
      id: "typeOfUsage",
      jsonPath: "Properties[0].propertyDetails[0].usageCategoryMinor",
      type: "singleValueList",
      localePrefix: "PROPERTYTAX_BILLING_SLAB",
      floatingLabelText: "PT_COMMONS_PROPERTY_USAGE_TYPE",
      hintText: "PT_COMMONS_SELECT_PLACEHOLDER",
      required: true,
      formName: "basicInformation",
      fullWidth: true,
      numcols: 6,
      labelsFromLocalisation:false,
      gridDefination: {
        xs: 12,
        sm: 6
      },
      updateDependentFields: ({ formKey, field, dispatch, state }) => {
        removeFormKey(formKey, field, dispatch, state);
        dispatch(prepareFormData(`Properties[0].propertyDetails[0].units`, []));
        let minorObject = get(state, `common.generalMDMSDataById.UsageCategoryMinor[${field.value}]`);
        if (!isEmpty(minorObject)) {
          dispatch(prepareFormData("Properties[0].propertyDetails[0].usageCategoryMajor", minorObject.usageCategoryMajor));
        } else {
          dispatch(prepareFormData("Properties[0].propertyDetails[0].usageCategoryMajor", field.value));
          dispatch(prepareFormData("Properties[0].propertyDetails[0].usageCategoryMinor", null));
        }
      },
      dropDownData: [],
    },
    typeOfBuilding: {
      id: "typeOfBuilding",
      jsonPath: "Properties[0].propertyDetails[0].propertySubType",
      type: "singleValueList",
      localePrefix: "PROPERTYTAX_BILLING_SLAB",
      floatingLabelText: "PT_COMMONS_PROPERTY_TYPE",
      hintText: "PT_COMMONS_SELECT_PLACEHOLDER",
      required: true,
      formName: "basicInformation",
      fullWidth: true,
      numcols: 6,
      labelsFromLocalisation:false,
      gridDefination: {
        xs: 12,
        sm: 6
      },
      updateDependentFields: ({ formKey, field, dispatch, state }) => {
        dispatch(prepareFormData(`Properties[0].propertyDetails[0].units`, []));
        dispatch(prepareFormData(`Properties[0].propertyDetails[0].landArea`, null));
        dispatch(prepareFormData(`Properties[0].propertyDetails[0].buildUpArea`, null));
        dispatch(removeForm("plotDetails"));
        removeFormKey(formKey, field, dispatch, state);
        let subTypeObject = get(state, `common.generalMDMSDataById.PropertySubType[${field.value}]`);
        if (!isEmpty(subTypeObject)) {
          dispatch(prepareFormData("Properties[0].propertyDetails[0].propertyType", subTypeObject.propertyType));
        } else {
          dispatch(prepareFormData("Properties[0].propertyDetails[0].propertyType", field.value));
          dispatch(prepareFormData("Properties[0].propertyDetails[0].propertySubType", null));
        }
      },
      dropDownData: [],
    },
    rainwaterHarvesting: {
      id: "rainwaterHarvesting",
      jsonPath: "Properties[0].additionalDetails.isRainwaterHarvesting",
      type: "radioButton",
      localePrefix: "PROPERTYTAX_BILLING_SLAB",
      floatingLabelText: "PT_COMMONS_IS_RAINWATER_HARVESTING",
      hintText: "PT_COMMONS_IS_RAINWATER_HARVESTING",
      required: false,
      fullWidth: true,
      showFloatingLabelText:true,
      labelsFromLocalisation:false,
      gridDefination: {
        xs: 12,
        sm: 6
      },
      dropDownData: [],
    },
    solidWasteManagement: {
      id: "solidWasteManagement",
      jsonPath: "Properties[0].additionalDetails.isSolidWasteManagementSystem",
      type: "radioButton",
      localePrefix: "PROPERTYTAX_BILLING_SLAB",
      floatingLabelText: "PT_COMMONS_HAS_SOLID_WASTE_MANAGEMENT_SYSTEM",
      hintText: "PT_COMMONS_HAS_SOLID_WASTE_MANAGEMENT_SYSTEM",
      required: false,
      fullWidth: true,
      showFloatingLabelText:true,
      labelsFromLocalisation:false,
      gridDefination: {
        xs: 12,
        sm: 6
      },
      dropDownData: [],
    },
    solarPanels: {
      id: "solarPanales",
      jsonPath: "Properties[0].additionalDetails.hasSolarPanels",
      type: "radioButton",
      localePrefix: "PROPERTYTAX_BILLING_SLAB",
      floatingLabelText: "PT_COMMONS_HAS_SOLAR_PANELS",
      hintText: "PT_COMMONS_HAS_SOLAR_PANELS",
      required: false,
      fullWidth: true,
      showFloatingLabelText:true,
      labelsFromLocalisation:false,
      gridDefination: {
        xs: 12,
        sm: 6
      },
      dropDownData: [],
    },
    openSpace: {
      id: "openSpace",
      jsonPath: "Properties[0].additionalDetails.hasOpenSpace",
      type: "radioButton",
      localePrefix: "PROPERTYTAX_BILLING_SLAB",
      floatingLabelText: "PT_COMMONS_HAS_OPEN_SPACE",
      hintText: "PT_COMMONS_HAS_OPEN_SPACE",
      required: false,
      fullWidth: true,
      showFloatingLabelText:true,
      labelsFromLocalisation:false,
      gridDefination: {
        xs: 12,
        sm: 6
      },
      dropDownData: [],
    },
    antiPollutionMeasures: {
      id: "solidWasteManagement",
      jsonPath: "Properties[0].additionalDetails.hasAntiPollutionMeasures",
      type: "radioButton",
      localePrefix: "PROPERTYTAX_BILLING_SLAB",
      floatingLabelText: "PT_COMMONS_HAS_ANTIPOLLUTION_MEASURES",
      hintText: "PT_COMMONS_HAS_ANTIPOLLUTION_MEASURES",
      required: false,
      fullWidth: true,
      showFloatingLabelText:true,
      labelsFromLocalisation:false,
      gridDefination: {
        xs: 12,
        sm: 6
      },
      dropDownData: [],
    },
    liftFacility: {
      id: "liftFacility",
      jsonPath: "Properties[0].additionalDetails.hasLiftFacility",
      type: "radioButton",
      localePrefix: "PROPERTYTAX_BILLING_SLAB",
      floatingLabelText: "PT_COMMONS_HAS_LIFT_FACILITY",
      hintText: "PT_COMMONS_HAS_LIFT_FACILITY",
      required: false,
      fullWidth: true,
      showFloatingLabelText:true,
      labelsFromLocalisation:false,
      gridDefination: {
        xs: 12,
        sm: 6
      },
      dropDownData: [],
    },
    powerBackUp: {
      id: "powerBackUp",
      jsonPath: "Properties[0].additionalDetails.hasPowerBackUp",
      type: "radioButton",
      localePrefix: "PROPERTYTAX_BILLING_SLAB",
      floatingLabelText: "PT_COMMONS_HAS_POWER_BACKUP",
      hintText: "PT_COMMONS_HAS_POWER_BACKUP",
      required: false,
      fullWidth: true,
      showFloatingLabelText:true,
      labelsFromLocalisation:false,
      gridDefination: {
        xs: 12,
        sm: 6
      },
      dropDownData: [],
    },
    parking: {
      id: "parking",
      jsonPath: "Properties[0].additionalDetails.hasParking",
      type: "radioButton",
      localePrefix: "PROPERTYTAX_BILLING_SLAB",
      floatingLabelText: "PT_COMMONS_HAS_PARKING",
      hintText: "PT_COMMONS_HAS_PARKING",
      required: false,
      fullWidth: true,
      showFloatingLabelText:true,
      labelsFromLocalisation:false,
      gridDefination: {
        xs: 12,
        sm: 6
      },
      dropDownData: [],
    },
    fireFighting: {
      id: "fireFighting",
      jsonPath: "Properties[0].additionalDetails.hasFireFighting",
      type: "radioButton",
      localePrefix: "PROPERTYTAX_BILLING_SLAB",
      floatingLabelText: "PT_COMMONS_HAS_FIRE_FIGHTING",
      hintText: "PT_COMMONS_HAS_FIRE_FIGHTING",
      required: false,
      fullWidth: true,
      showFloatingLabelText:true,
      labelsFromLocalisation:false,
      gridDefination: {
        xs: 12,
        sm: 6
      },
      dropDownData: [],
    },
    plantation: {
      id: "plantation",
      jsonPath: "Properties[0].additionalDetails.hasPlantation",
      type: "radioButton",
      localePrefix: "PROPERTYTAX_BILLING_SLAB",
      floatingLabelText: "PT_COMMONS_HAS_PLANTATION",
      hintText: "PT_COMMONS_HAS_PLANTATION",
      required: false,
      fullWidth: true,
      showFloatingLabelText:true,
      labelsFromLocalisation:false,
      gridDefination: {
        xs: 12,
        sm: 6
      },
      dropDownData: [],
    },
  },
  action: "",
  redirectionRoute: "",
  saveUrl: "",
  isFormValid: false,
  beforeInitForm: (action, store) => {
    try {
      let state = store.getState();
      // localStorageSet("previousFloorNo", -1);
      var masterOne = get(state, "common.generalMDMSDataById.UsageCategoryMajor");
      var masterTwo = get(state, "common.generalMDMSDataById.UsageCategoryMinor");
      const mergedMaster = mergeMaster(masterOne, masterTwo, "usageCategoryMajor");
      const typeOfUsageSorted = sortDropdown(mergedMaster, "label", true);
      set(action, "form.fields.typeOfUsage.dropDownData", typeOfUsageSorted);
      masterOne = Object.values(get(state, "common.generalMDMSDataById.PropertyType")).filter(item=> item.propertyType !== "BUILTUP");
      masterTwo = get(state, "common.generalMDMSDataById.PropertySubType");
      set(action, "form.fields.typeOfBuilding.dropDownData", mergeMaster(masterOne, masterTwo, "propertyType"));
      set(action, "form.fields.rainwaterHarvesting.options",options);
      set(action, "form.fields.rainwaterHarvesting.value", get(state.common.prepareFormData,'Properties[0].additionalDetails.isRainwaterHarvesting',false));
      set(action, "form.fields.solidWasteManagement.options",options);
      set(action, "form.fields.solidWasteManagement.value", get(state.common.prepareFormData,'Properties[0].additionalDetails.isSolidWasteManagementSystem',false));
      set(action, "form.fields.solarPanels.options",options);
      set(action, "form.fields.solarPanels.value", get(state.common.prepareFormData,'Properties[0].additionalDetails.hasSolarPanels',false));
      set(action, "form.fields.openSpace.options",options);
      set(action, "form.fields.openSpace.value", get(state.common.prepareFormData,'Properties[0].additionalDetails.hasOpenSpace',false));
      set(action, "form.fields.antiPollutionMeasures.options",options);
      set(action, "form.fields.antiPollutionMeasures.value", get(state.common.prepareFormData,'Properties[0].additionalDetails.hasAntiPollutionMeasures',false));
      set(action, "form.fields.liftFacility.options",options);
      set(action, "form.fields.liftFacility.value", get(state.common.prepareFormData,'Properties[0].additionalDetails.hasLiftFacility',false));
      set(action, "form.fields.powerBackUp.options",options);
      set(action, "form.fields.powerBackUp.value", get(state.common.prepareFormData,'Properties[0].additionalDetails.hasPowerBackUp',false));
      set(action, "form.fields.parking.options",options);
      set(action, "form.fields.parking.value", get(state.common.prepareFormData,'Properties[0].additionalDetails.hasParking',false));
      set(action, "form.fields.fireFighting.options",options);
      set(action, "form.fields.fireFighting.value", get(state.common.prepareFormData,'Properties[0].additionalDetails.hasFireFighting',false));
      set(action, "form.fields.plantation.options",options);
      set(action, "form.fields.plantation.value", get(state.common.prepareFormData,'Properties[0].additionalDetails.hasPlantation',false));

      return action;
    } catch (e) {
      console.log(e);
    }
  },
};

export default formConfig;

const mergeMaster = (masterOne, masterTwo, parentName = "") => {
  let dropDownData = [];
  let parentList = [];
  for (var variable in masterTwo) {
    if (masterTwo.hasOwnProperty(variable)) {
      dropDownData.push({ label: masterTwo[variable].name, value: masterTwo[variable].code });
    }
  }
  let masterOneData = getAbsentMasterObj(prepareDropDownData(masterOne, true), prepareDropDownData(masterTwo, true), parentName);
  // console.log(masterOneData);
  for (var i = 0; i < masterOneData.length; i++) {
    // masterOneData[i][parentName]=masterOneData[i].code;
    dropDownData.push({ label: masterOneData[i].name, value: masterOneData[i].code });
  }
  return dropDownData;
};

const getAbsentMasterObj = (master1Arr, master2Arr, propToCompare) => {
  const propArray = master2Arr.reduce((result, item) => {
    if (item[propToCompare] && result.indexOf(item[propToCompare]) === -1) {
      result.push(item[propToCompare]);
    }
    return result;
  }, []);
  return master1Arr.filter((item) => propArray.indexOf(item.code) === -1);
};
