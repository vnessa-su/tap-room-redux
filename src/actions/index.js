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

export const clearKegSelect = (keg) => ({
  type: "CLEAR_KEG_SELECT",
});

export const showNewForm = () => ({
  type: "SHOW_NEW_FORM",
});

export const hideNewForm = () => ({
  type: "HIDE_NEW_FORM",
});

export const toggleNewForm = () => ({
  type: "TOGGLE_NEW_FORM",
});

export const showEditForm = () => ({
  type: "SHOW_EDIT_FORM",
});

export const hideEditForm = () => ({
  type: "HIDE_EDIT_FORM",
});

export const toggleEditForm = () => ({
  type: "TOGGLE_EDIT_FORM",
});
