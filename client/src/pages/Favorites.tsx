import { getFavorites } from '@/api/launch';
import Grid from '@/components/Grid';
import { useEffect, useState } from 'react';

export default function Favorites() {
  const [favorites, setFavorites] = useState<Launch[]>([]);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const data = await getFavorites();
        console.log(data);
        setFavorites(data.favorites);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLaunches();
  }, []);

  return <Grid launches={favorites} />;
}
