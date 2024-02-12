import { LaunchCard } from './LaunchCard';

export default function Grid({ launches }: { launches: Launch[] }) {
  return (
    <div className="grid grid-cols-4 gap-2 mt-5">
      {launches.map((launch) => (
        <LaunchCard launch={launch} />
      ))}
    </div>
  );
}
