export const changeCountAction = (payload: Number) => (dispatch: any) => {
  try {
    dispatch({ type: 'CHANGE_COUNT', payload });
  } catch (e) {
    console.error(e);
  }
};
