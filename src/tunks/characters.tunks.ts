import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRepoCharacters } from '../services/eldenApiRepo';

export const loadTunk = createAsyncThunk(
  'characters/load',
  async (repo: ApiRepoCharacters) => {
    const characters = await repo.getCharacters();
    return characters;
  }
);
