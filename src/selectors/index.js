export const getMerchants = state => state.merchants.allIds.map(id => state.entities.merchants[id]);
