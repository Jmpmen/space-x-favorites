const launchTypes = `
    type Launch {
        flight_number: Int
        mission_name: String
        launch_year: String
        launch_date_utc: String
        rocket: Rocket
        launch_site: LaunchSite
        launch_success: Boolean
        links: Links
        details: String
    }

    type Rocket {
        rocket_id: String
        rocket_name: String
        rocket_type: String
    }

    type LaunchSite {
        site_name: String
    }

    type Links {
        video_link: String
        flickr_images: [String]
    }
`;

export default launchTypes;
