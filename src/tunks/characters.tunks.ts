import { createAsyncThunk } from '@reduxjs/toolkit';
import { EldenApiRepo } from '../services/eldenApiRepo';
import { Character } from '../model/character';

export const loadCharactersTunk = createAsyncThunk<Character[], EldenApiRepo>(
  'characters/load',
  async (repo) => {
    const characters = await repo.getCharacters();
    return characters;
  }
);
