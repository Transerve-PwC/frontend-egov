const remoteComponentPath = (moduleName, path) => {
  let component = null;
  switch (moduleName) {
    case "egov-pt":
      if (path === "ui-atoms-local") {
        component = import("egov-pt/ui-atoms-local");
      } else if (path === "ui-molecules-local") {
        component = import("egov-pt/ui-molecules-local");
      } else if (path === "ui-containers-local") {
        component = import("egov-pt/ui-containers-local");
      }
      break;
    case "egov-common":
      if (path === "ui-atoms-local") {
        component = import("egov-common/ui-atoms-local");
      } else if (path === "ui-molecules-local") {
        component = import("egov-common/ui-molecules-local");
      } else if (path === "ui-containers-local") {
        component = import("egov-common/ui-containers-local");
      }
      break;
    case "egov-workflow":
      if (path === "ui-atoms-local") {
        component = import("egov-workflow/ui-atoms-local");
      } else if (path === "ui-molecules-local") {
        component = import("egov-workflow/ui-molecules-local");
      } else if (path === "ui-containers-local") {
        component = import("egov-workflow/ui-containers-local");
      }
      break;
    default:
      break;
  }
  return component;
};

export default remoteComponentPath;
