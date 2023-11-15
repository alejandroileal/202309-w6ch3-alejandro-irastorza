import { createAsyncThunk } from '@reduxjs/toolkit';
import { EldenApiRepo } from '../services/eldenApiRepo';

export const loadCharactersTunk = createAsyncThunk(
  'characters/load',
  async (repo: EldenApiRepo) => {
    const characters = await repo.getCharacters();
    return characters;
  }
);
