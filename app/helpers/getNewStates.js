export const getNewStates = (selected, cp, txt) => {
  let relatedState = [];
  let unrelatedState = [];
  selected.forEach(sc => {
    let relatedCP = cp.filter(e => e[txt] === sc);
    relatedState = [...relatedState, ...relatedCP];
    if (unrelatedState.length === 0) {
      unrelatedState = cp.filter(e => e[txt] !== sc);
    } else {
      unrelatedState = unrelatedState.filter(e => e[txt] !== sc);
    }
  });
  return {relatedState, unrelatedState};
};
