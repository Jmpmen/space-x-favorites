import { getFavorites } from '@/api/launch';
import Grid from '@/components/Grid';
import { useEffect, useState } from 'react';

export default function Favorites() {
  const [favorites, setFavorites] = useState<Launch[]>([]);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const data = await getFavorites();
        setFavorites(data.favorites);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFavorites();
  }, []);

  return <Grid launches={favorites} />;
}
