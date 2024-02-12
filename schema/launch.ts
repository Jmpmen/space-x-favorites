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
        site_name_long: String
    }

    type Links {
        article_link: String
        video_link: String
        wikipedia: String
    }
`;

export default launchTypes;
