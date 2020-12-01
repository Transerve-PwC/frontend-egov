import formHoc from "egov-ui-kit/hocs/form";
import GenericForm from "egov-ui-kit/common/GenericForm";

const combinationToFormkeyMapping = {
  "RESIDENTIAL-INDEPENDENTPROPERTY": {
    path: "PropertyTaxPay/ResidentialIndependantProperty",
    plotForm: formHoc({
      formKey: "plotDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/ResidentialIndependantProperty",
      isCoreConfiguration: true,
    })(GenericForm),
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails"
    })(GenericForm),
    floorForm: formHoc({ formKey: "floorDetails", makeCopy: true, path: "PropertyTaxPay/ResidentialIndependantProperty", isCoreConfiguration: true })(
      GenericForm
    ),
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/ResidentialIndependantProperty",
    },
    hasPlot: true,
    hasFloor: true,
    hasConstruction: true
  },
  "RESIDENTIAL-SHAREDPROPERTY": {
    path: "PropertyTaxPay/ResidentialSharedProperty",
    plotForm: formHoc({
      formKey: "plotDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/ResidentialSharedProperty",
      isCoreConfiguration: true,
    })(GenericForm),
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/ResidentialIndependantProperty",
    },
    hasPlot: true,
    hasFloor: false,
    hasConstruction: true
  },
  "MIXED-INDEPENDENTPROPERTY": {
    path: "PropertyTaxPay/MixedIndependantProperty",
    plotForm: formHoc({
      formKey: "plotDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/MixedIndependantProperty",
      isCoreConfiguration: true,
    })(GenericForm),
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    floorForm: formHoc({ formKey: "floorDetails", makeCopy: true, path: "PropertyTaxPay/MixedIndependantProperty", isCoreConfiguration: true })(
      GenericForm
    ),
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/MixedIndependantProperty",
    },
    hasPlot: true,
    hasFloor: true,
    hasConstruction: true
  },
  "MIXED-SHAREDPROPERTY": {
    path: "PropertyTaxPay/MixedIndependantProperty",
    // plotForm: formHoc({ formKey: "plotDetails",isCoreConfiguration:true, path: "PropertyTaxPay/MixedSharedProperty" ,isCoreConfiguration:true})(GenericForm),
    // floorForm: formHoc({ formKey: "floorDetails", makeCopy: true, path: "PropertyTaxPay/MixedIndependantProperty", isCoreConfiguration: true })(
    //   GenericForm
    // ),
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/MixedIndependantProperty",
    },
    hasPlot: false,
    hasFloor: true,
    hasConstruction: true
  },
  "COMMERCIAL-INDEPENDENTPROPERTY": {
    path: "PropertyTaxPay/CommercialIndependantProperty",
    plotForm: formHoc({
      formKey: "plotDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommercialIndependantProperty",
      isCoreConfiguration: true,
    })(GenericForm),
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    floorForm: formHoc({ formKey: "floorDetails", makeCopy: true, path: "PropertyTaxPay/CommercialIndependantProperty", isCoreConfiguration: true })(
      GenericForm
    ),
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/CommercialIndependantProperty",
    },
    hasPlot: true,
    hasFloor: true,
    hasConstruction: true
  },
  "COMMERCIAL-SHAREDPROPERTY": {
    path: "PropertyTaxPay/CommercialIndependantProperty",
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/CommercialIndependantProperty",
    },
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    // plotForm: formHoc({ formKey: "plotDetails",isCoreConfiguration:true, path: "PropertyTaxPay/CommercialSharedProperty" ,isCoreConfiguration:true})(GenericForm),
    hasPlot: false,
    hasFloor: true,
    hasConstruction: true
  },
  "INDUSTRIAL-INDEPENDENTPROPERTY": {
    path: "PropertyTaxPay/IndustrialIndependantProperty",
    plotForm: formHoc({
      formKey: "plotDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/IndustrialIndependantProperty",
      isCoreConfiguration: true,
    })(GenericForm),
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    floorForm: formHoc({ formKey: "floorDetails", makeCopy: true, path: "PropertyTaxPay/IndustrialIndependantProperty", isCoreConfiguration: true })(
      GenericForm
    ),
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/IndustrialIndependantProperty",
    },
    hasPlot: true,
    hasFloor: true,
    hasConstruction: true
  },
  "INDUSTRIAL-SHAREDPROPERTY": {
    path: "PropertyTaxPay/IndustrialIndependantProperty",
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/IndustrialIndependantProperty",
    },
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    // plotForm: formHoc({ formKey: "plotDetails",isCoreConfiguration:true, path: "PropertyTaxPay/IndustrialSharedProperty" ,isCoreConfiguration:true})(GenericForm),
    hasPlot: false,
    hasFloor: true,
    hasConstruction: true
  },
  "RELIGIOUS-INDEPENDENTPROPERTY": {
    path: "PropertyTaxPay/ReligiousIndependantProperty",
    plotForm: formHoc({
      formKey: "plotDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/ReligiousIndependantProperty",
      isCoreConfiguration: true,
    })(GenericForm),
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    floorForm: formHoc({ formKey: "floorDetails", makeCopy: true, path: "PropertyTaxPay/ReligiousIndependantProperty", isCoreConfiguration: true })(
      GenericForm
    ),
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/ReligiousIndependantProperty",
    },
    hasPlot: true,
    hasFloor: true,
    hasConstruction: true
  },
  "RELIGIOUS-SHAREDPROPERTY": {
    path: "PropertyTaxPay/ReligiousIndependantProperty",
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/ReligiousIndependantProperty",
    },
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    // plotForm: formHoc({ formKey: "plotDetails",isCoreConfiguration:true, path: "PropertyTaxPay/ReligiousSharedProperty" ,isCoreConfiguration:true})(GenericForm),
    hasPlot: false,
    hasFloor: true,
    hasConstruction: true
  },
  "INSTITUTIONAL-INDEPENDENTPROPERTY": {
    path: "PropertyTaxPay/InstitutionalIndependantProperty",
    plotForm: formHoc({
      formKey: "plotDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/InstitutionalIndependantProperty",
      isCoreConfiguration: true,
    })(GenericForm),
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    floorForm: formHoc({
      formKey: "floorDetails",
      makeCopy: true,
      path: "PropertyTaxPay/InstitutionalIndependantProperty",
      isCoreConfiguration: true,
    })(GenericForm),
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/InstitutionalIndependantProperty",
    },
    hasPlot: true,
    hasFloor: true,
    hasConstruction: true
  },
  "INSTITUTIONAL-SHAREDPROPERTY": {
    path: "PropertyTaxPay/InstitutionalIndependantProperty",
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/InstitutionalIndependantProperty",
    },
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    // plotForm: formHoc({ formKey: "plotDetails",isCoreConfiguration:true, path: "PropertyTaxPay/InstitutionalSharedProperty" ,isCoreConfiguration:true})(GenericForm),
    hasPlot: false,
    hasFloor: true,
    hasConstruction: true
  },
  "OTHERS-INDEPENDENTPROPERTY": {
    path: "PropertyTaxPay/OtherIndependantProperty",
    plotForm: formHoc({
      formKey: "plotDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/OtherIndependantProperty",
      isCoreConfiguration: true,
    })(GenericForm),
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    floorForm: formHoc({ formKey: "floorDetails", makeCopy: true, path: "PropertyTaxPay/OtherIndependantProperty", isCoreConfiguration: true })(
      GenericForm
    ),
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/OtherIndependantProperty",
    },
    hasPlot: true,
    hasFloor: true,
    hasConstruction: true
  },
  "OTHERS-SHAREDPROPERTY": {
    path: "PropertyTaxPay/OtherIndependantProperty",
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/OtherIndependantProperty",
    },
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    // plotForm: formHoc({ formKey: "plotDetails",isCoreConfiguration:true, path: "PropertyTaxPay/OtherSharedProperty" ,isCoreConfiguration:true})(GenericForm),
    hasPlot: false,
    hasFloor: true,
    hasConstruction: true
  },
  "PUBLICSPACES-INDEPENDENTPROPERTY": {
    path: "PropertyTaxPay/PublicSpaceIndependantProperty",
    plotForm: formHoc({
      formKey: "plotDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/PublicSpaceIndependantProperty",
      isCoreConfiguration: true,
    })(GenericForm),
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    floorForm: formHoc({ formKey: "floorDetails", makeCopy: true, path: "PropertyTaxPay/PublicSpaceIndependantProperty", isCoreConfiguration: true })(
      GenericForm
    ),
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/PublicSpaceIndependantProperty",
    },
    hasPlot: true,
    hasFloor: true,
    hasConstruction: true
  },
  "PUBLICSPACES-SHAREDPROPERTY": {
    path: "PropertyTaxPay/PublicSpaceIndependantProperty",
    floorObject: {
      formKey: "floorDetails",
      isCoreConfiguration: true,
      makeCopy: true,
      copyName: "floorDetails",
      path: "PropertyTaxPay/PublicSpaceIndependantProperty",
    },
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonConstructionDetails",
    })(GenericForm),
    // plotForm: formHoc({ formKey: "plotDetails",isCoreConfiguration:true, path: "PropertyTaxPay/PublicSpaceSharedProperty" ,isCoreConfiguration:true})(GenericForm),
    hasPlot: false,
    hasFloor: true,
    hasConstruction: true
  },
  "COMMON-VACANT": {
    path: "PropertyTaxPay/CommonVacantLandProperty",
    plotForm: formHoc({
      formKey: "plotDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonVacantLandProperty",
      isCoreConfiguration: true,
    })(GenericForm),
    constructionForm: formHoc({
      formKey: "constructionDetails",
      isCoreConfiguration: true,
      path: "PropertyTaxPay/CommonVacantLandProperty",
    })(GenericForm),
    hasPlot: true,
    hasFloor: false,
    hasConstruction: true
  },
};

export const getPlotAndFloorFormConfigPath = (usage, propertyType) => {
  return combinationToFormkeyMapping.hasOwnProperty(`${usage}-${propertyType}`)
    ? combinationToFormkeyMapping[`${usage}-${propertyType}`]
    : combinationToFormkeyMapping["COMMON-VACANT"];
};
