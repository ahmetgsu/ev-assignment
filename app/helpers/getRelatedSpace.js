export const getRelatedSpace = (str, p) => {
  const relatedProp = spaces[str];
  return {
    [relatedProp]: p,
  };
};

const spaces = {
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  ph: 'paddingHorizontal',
  pv: 'paddingVertical',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mh: 'marginHorizontal',
  mv: 'marginVertical',
};
