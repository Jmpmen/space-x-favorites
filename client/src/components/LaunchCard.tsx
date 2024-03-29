import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';

export function LaunchCard({
  launch,
  handleAdd,
  handleRemove,
  isFavorite,
}: {
  launch: Launch;
  handleAdd: (id: number) => void;
  handleRemove: (id: number) => void;
  isFavorite: boolean;
}) {
  return (
    <Card className="w-[350px] h-[456px] flex flex-col text-xs">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span>Mission Name</span>
          <Badge variant={launch.launch_success ? 'secondary' : 'destructive'}>
            {launch.launch_success ? 'Success' : 'Fail'}
          </Badge>
        </CardTitle>
        <CardDescription className="text-sm">
          {launch.mission_name}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-between space-y-1.5">
              <div>
                <Label htmlFor="site">Site</Label>
                <p>{launch.launch_site.site_name}</p>
              </div>
              <div>
                <Label htmlFor="year">Launch Year</Label>
                <p>{launch.launch_year}</p>
              </div>
            </div>
            <div className="flex justify-between space-y-1.5">
              <div>
                <Label htmlFor="name">Rocket Name</Label>
                <p>{launch.rocket.rocket_name}</p>
              </div>
              <div>
                <Label htmlFor="type">Rocket Type</Label>
                <p>{launch.rocket.rocket_type}</p>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="details">Details</Label>
              <p className="line-clamp-6">{launch.details}</p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Link
          to={`/launch/${launch.flight_number}`}
          className={buttonVariants({ variant: 'outline' }) + ' w-full'}
        >
          View more details
        </Link>
        {isFavorite ? (
          <Button
            className="w-full"
            variant="destructive"
            onClick={() => handleRemove(launch.flight_number)}
          >
            Remove from favorites
          </Button>
        ) : (
          <Button
            className="w-full"
            onClick={() => handleAdd(launch.flight_number)}
          >
            Add to favorites
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
