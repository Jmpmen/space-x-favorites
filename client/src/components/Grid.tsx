import { LaunchCard } from './LaunchCard';

export default function Grid({ launches }: { launches: Launch[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 mt-5 justify-items-center">
      {launches.map((launch) => (
        <LaunchCard launch={launch} />
      ))}
    </div>
  );
}
