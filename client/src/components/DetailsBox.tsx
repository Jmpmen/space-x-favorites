import { Link } from 'react-router-dom';

export default function DetailsBox({ launch }: { launch: Launch }) {
  return (
    <div className="min-h-48 p-5 flex flex-col gap-1 bg-stone-500">
      <div>
        <span className="font-bold text-stone-900">Flight Number: </span>
        <span className="text-sm text-stone-300">{launch?.flight_number}</span>
      </div>
      <div>
        <span className="font-bold text-stone-900">Mission Name: </span>
        <span className="text-sm text-stone-300">{launch?.mission_name}</span>
      </div>
      <div>
        <span className="font-bold text-stone-900">Launch Year: </span>
        <span className="text-sm text-stone-300">{launch?.launch_year}</span>
      </div>
      <div>
        <span className="font-bold text-stone-900">Rocket Name: </span>
        <span className="text-sm text-stone-300">
          {launch?.rocket.rocket_name}
        </span>
      </div>
      <div>
        <span className="font-bold text-stone-900">Rocket Type: </span>
        <span className="text-sm text-stone-300">
          {launch?.rocket.rocket_type}
        </span>
      </div>
      <div>
        <span className="font-bold text-stone-900">Launch Site: </span>
        <span className="text-sm text-stone-300">
          {launch?.launch_site.site_name_long}
        </span>
      </div>
      <div>
        <span className="font-bold text-stone-900">Result: </span>
        <span className="text-sm text-stone-300">
          {launch?.launch_success ? 'Success' : 'Failure'}
        </span>
      </div>
      <div>
        <span className="font-bold text-stone-900">Description: </span>
        <span className="text-sm text-stone-300">
          {launch?.details || 'No description available'}
        </span>
      </div>
      <div>
        <span className="font-bold text-stone-900">Articles: </span>
        {launch?.links.article_link && (
          <Link to={launch.links.article_link} className="text-stone-300">
            {new URL(launch.links.article_link).hostname}
          </Link>
        )}
        {launch?.links.article_link && launch?.links.wikipedia && ', '}
        {launch?.links.wikipedia && (
          <Link to={launch.links.wikipedia} className="text-stone-300">
            {new URL(launch.links.wikipedia).hostname}
          </Link>
        )}
      </div>
    </div>
  );
}
