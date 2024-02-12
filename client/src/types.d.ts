type Launch = {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_date_utc: string;
  rocket: Rocket;
  launch_site: LaunchSite;
  launch_success: boolean;
  links: Links;
  details: string;
};

type Rocket = {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
};

type LaunchSite = {
  site_name: string;
};

type Links = {
  video_link: string;
  flickr_images: string[];
};
