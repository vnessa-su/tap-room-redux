export const addNewKeg = (keg) => ({
  type: "ADD_KEG",
  ...keg,
});

export const deleteKeg = (id) => ({
  type: "DELETE_KEG",
  id: id,
});

export const selectKeg = (keg) => ({
  type: "CHANGE_KEG_SELECT",
  ...keg,
});
