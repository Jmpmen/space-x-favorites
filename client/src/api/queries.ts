export const GET_LAUNCHES = `
  query {
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
      }
      details
    }
  }
`;

export const GET_LAUNCH = `
  query ($id: Int!) {
    launch(id: $id) {
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
        site_name_long
      }
      launch_success
      links {
        article_link
        video_link
        wikipedia
      }
      details
    }
  }
`;

export const GET_FAVORITES = `
  query {
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

export const ADD_TO_FAVORITES = `
  mutation ($id: Int!) {
    addFavorite(id: $id) {
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

export const REMOVE_FROM_FAVORITES = `
  mutation ($id: Int!) {
    removeFavorite(id: $id)
  }
`;