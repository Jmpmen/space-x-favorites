import { useEffect, useState } from 'react';
import { LaunchCard } from './LaunchCard';
import { addFavorite, getFavorites, removeFavorite } from '@/api/launch';

export default function Grid({ launches }: { launches: Launch[] }) {
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

  async function handleAdd(id: number) {
    try {
      const data = await addFavorite(id);
      setFavorites((prev) => [...prev, data.addFavorite]);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleRemove(id: number) {
    try {
      const data = await removeFavorite(id);
      setFavorites((prev) =>
        prev.filter(
          (favorite) => favorite.flight_number !== data.removeFavorite
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 mt-5 justify-items-center">
      {launches.map((launch) => (
        <LaunchCard
          key={launch.mission_name}
          launch={launch}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          isFavorite={favorites.some(
            (favorite) => favorite.flight_number === launch.flight_number
          )}
        />
      ))}
    </div>
  );
}
