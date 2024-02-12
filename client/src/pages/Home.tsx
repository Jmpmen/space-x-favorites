import { getLaunches } from '@/api/launch';
import Grid from '@/components/Grid';
import { useEffect, useState } from 'react';

export default function Home() {
  const [launches, setLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    async function fetchLaunches() {
      try {
        const data = await getLaunches();
        setLaunches(data.launches);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLaunches();
  }, []);

  return <Grid launches={launches} />;
}
