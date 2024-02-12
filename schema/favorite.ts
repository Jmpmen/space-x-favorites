const favoriteType = `
  type Favorite {
    id: ID!
    flight_number: Int
    mission_name: String
    launch_year: String
    rocket_name: String
    rocket_type: String
    site_name: String
    launch_success: Boolean
    links: Links
    details: String
  }
`;

export default favoriteType;
