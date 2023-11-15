import { createAsyncThunk } from '@reduxjs/toolkit';
import { AnyCharacter, EldenApiRepo } from '../services/eldenApiRepo';

export const loadCharactersTunk = createAsyncThunk<
  AnyCharacter[],
  EldenApiRepo
>('characters/load', async (repo) => {
  const characters = await repo.getCharacters();
  return characters;
});
