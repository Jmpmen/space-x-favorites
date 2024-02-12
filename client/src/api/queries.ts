export const GET_LAUNCHES = `
  query GetLaunches {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_utc
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
      launch_site {
        site_name
      }
      launch_success
      links {
        video_link
        flickr_images
      }
      details
    }
  }
`;

export const GET_FAVORITES = `
  query GetFavorites {
    favorites {
        flight_number
        mission_name
        launch_year
        rocket {
            rocket_name
            rocket_type
        }
        launch_site {
            site_name
        }
        launch_success
        details
    }
  }
`;