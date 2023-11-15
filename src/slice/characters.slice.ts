import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../model/character';
import { loadCharactersTunk } from '../tunks/characters.tunks';

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
    builder.addCase(loadCharactersTunk.pending, (state: CharacterState) => {
      state.state = 'loading';
      return state;
    }),
      builder.addCase(
        loadCharactersTunk.fulfilled,
        (state: CharacterState, { payload }: PayloadAction<Character[]>) => {
          state.characters = payload;
          state.state = 'idle';
          return state;
        }
      );
    // builder.addCase(loadTunk.rejected, (state: CharacterState) => {
    //   state.state
    // })
  },
});

export default characterSlice.reducer;
