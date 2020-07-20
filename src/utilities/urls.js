export const getUrlFriendlyName = (name) => {
  return name.replace(/\s+/g, "-");
};

export const getNameFromUrl = (param) => {
  return param.replace(/-/g, " ");
};
