import { createSlice } from '@reduxjs/toolkit';

const modalVisibilitySlice = createSlice( {
  name: 'modalVisibility',
  initialState: {
    addWidget: false,
    addWidgetSidebar: false,
    deleteWidgetAlert: false,
  },
  reducers: {
    toggleAddWidgetModalVisibility: ( state ) => {
      state.addWidget = !state.addWidget;
    },
    toggleAddWidgetSidebarModalVisibility: ( state ) => {
      state.addWidgetSidebar = !state.addWidgetSidebar;
    },
    toggleDeleteWidgetAlertModalVisibility: ( state ) => {
      state.deleteWidgetAlert = !state.deleteWidgetAlert;
    },
  },
} );

export const { toggleAddWidgetModalVisibility, toggleAddWidgetSidebarModalVisibility, toggleDeleteWidgetAlertModalVisibility } = modalVisibilitySlice.actions;
export default modalVisibilitySlice.reducer;