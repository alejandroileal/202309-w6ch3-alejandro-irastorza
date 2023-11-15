import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../model/character';

type CharacterState = {
  characters: Character[];
  state: 'idle' | 'loading' | 'error';
};

const initialState: CharacterState = {
  characters: [],
  state: 'idle',
};

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    load: () => {
      return;
    },
  },
  extraReducers: (builder) => {
    builder.addCase();
  },
});
