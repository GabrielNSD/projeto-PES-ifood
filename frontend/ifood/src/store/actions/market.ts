export const CHOOSE_MARKET = "CHOOSE_MARKET";

export const chooseMarket = (data: any) => {
  return (dispatch: any) => {
    dispatch({ type: CHOOSE_MARKET, data: data });
  };
};
