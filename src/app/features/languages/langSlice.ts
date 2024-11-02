import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

// Define a type for the slice state
interface languageState {
  lang: string;
}

// Define the initial state using that type
const initialState: languageState = {
  lang: 'en',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    languageAction: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const { languageAction } = languageSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.language;

export default languageSlice.reducer;
