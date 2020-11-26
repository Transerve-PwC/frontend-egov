const remoteConfigPath = (path, screenKey) => {
  let config = {};
  switch (path) {
    case "pt-mutation":
      case "pt-common-screens":
      // case "pt-citizen":
      config = require(`egov-pt/ui-config/screens/specs/${path}/${screenKey}`).default;
      break;
    case "egov-common":
      config = require(`egov-common/ui-config/screens/specs/${path}/${screenKey}`).default;
      break;
    default:
      config = require(`ui-config/screens/specs/${path}/${screenKey}`).default;
      break;
  }
  return config;
};

export default remoteConfigPath;
