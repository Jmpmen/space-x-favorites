import { getLaunches } from '@/api/launch';
import Grid from '@/components/Grid';
// import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';

export default function Home() {
  const [launches, setLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const data = await getLaunches();
        setLaunches(data.launches);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLaunches();
  }, []);

  return <Grid launches={launches} />;
}
