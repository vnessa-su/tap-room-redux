import * as c from "./ActionTypes";

export const addNewKeg = (keg) => ({
  type: c.ADD_KEG,
  ...keg,
});

export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id: id,
});

export const selectKeg = (keg) => ({
  type: c.CHANGE_KEG_SELECT,
  ...keg,
});

export const clearKegSelect = (keg) => ({
  type: c.CLEAR_KEG_SELECT,
});

export const showNewForm = () => ({
  type: c.SHOW_NEW_FORM,
});

export const hideNewForm = () => ({
  type: c.HIDE_NEW_FORM,
});

export const toggleNewForm = () => ({
  type: c.TOGGLE_NEW_FORM,
});

export const showEditForm = () => ({
  type: c.SHOW_EDIT_FORM,
});

export const hideEditForm = () => ({
  type: c.HIDE_EDIT_FORM,
});

export const toggleEditForm = () => ({
  type: c.TOGGLE_EDIT_FORM,
});
