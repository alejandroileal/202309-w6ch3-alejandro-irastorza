import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { EldenApiRepo } from '../../services/eldenApiRepo';
import { loadCharactersTunk } from '../../tunks/characters.tunks';

export function useCharacters() {
  const dispatch = useDispatch();

  const repo = useMemo(() => new EldenApiRepo(), []);

  const loadCharacters = useCallback(async () => {
    try {
      dispatch(loadCharactersTunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);
}
