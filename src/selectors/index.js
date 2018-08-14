export const getMerchantById = (state, id) => state.entities.merchants[id];
export const getMerchants = state =>
  state.merchants.allIds.map(id => getMerchantById(state, id));
