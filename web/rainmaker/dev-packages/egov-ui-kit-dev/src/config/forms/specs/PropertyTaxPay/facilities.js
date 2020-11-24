import set from "lodash/set";
import get from "lodash/get";
import { getLocaleLabels } from "egov-ui-framework/ui-utils/commons.js";

const options = [
  { value: true, label: getLocaleLabels("Yes", "PT_COMMON_YES") },
  { value: false, label: getLocaleLabels("No", "PT_COMMON_NO") },
];

const formConfig = {
  name: "facilities",
  fields: {
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
      jsonPath: "Properties[0].additionalDetails.hasSolidWasteManagementSystem",
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
    },
  },
  action: "",
  redirectionRoute: "",
  saveUrl: "",
  isFormValid: false,
  beforeInitForm: (action, store) => {
    try {
      let state = store.getState();
      set(action, "form.fields.rainwaterHarvesting.options",options);
      set(action, "form.fields.rainwaterHarvesting.value", get(state.common.prepareFormData,'Properties[0].additionalDetails.isRainwaterHarvesting',false));
      set(action, "form.fields.solidWasteManagement.options",options);
      set(action, "form.fields.solidWasteManagement.value", get(state.common.prepareFormData,'Properties[0].additionalDetails.hasSolidWasteManagementSystem',false));
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