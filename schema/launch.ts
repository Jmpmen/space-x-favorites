const launchType = `
  type Launch {
    flight_number: Int
    mission_name: String
    launch_year: String
    launch_date_utc: String
    rocket: Rocket
    details: String
  }
`;

export default launchType;