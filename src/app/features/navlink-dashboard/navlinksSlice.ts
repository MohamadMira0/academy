import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

// Define a type for the slice state
interface navLinksState {
  title: String;
}

// Define the initial state using that type
const initialState: navLinksState = {
  title: 'لوحة التحكم',
};

export const navLinksSlice = createSlice({
  name: 'navLinks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    navLinksAction: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { navLinksAction } = navLinksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.navLinks;

export default navLinksSlice.reducer;
