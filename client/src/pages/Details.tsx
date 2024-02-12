import { getLaunch } from '@/api/launch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import DetailsBox from '@/components/DetailsBox';

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const [launch, setLaunch] = useState<Launch | null>(null);

  useEffect(() => {
    async function fetchLaunch() {
      try {
        const data = await getLaunch(Number(id));
        setLaunch(data.launch);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLaunch();
  }, [id]);

  return (
    <div>
      {launch?.links.video_link && (
        <ReactPlayer
          url={launch.links.video_link}
          controls={true}
          pip={true}
          width="100%"
          className="mt-14"
        />
      )}
      {launch && <DetailsBox launch={launch} />}
    </div>
  );
}
