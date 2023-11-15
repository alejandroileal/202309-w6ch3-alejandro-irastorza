import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import charactersReducer from '../slice/characters.slice';

export const store = configureStore({
  reducer: {
    gotCharacters: charactersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
