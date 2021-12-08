export interface ILaunches {
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: [];
  }
  links: {
    patch: {
      small: string;
      large: string;
    }
    reddit: {
      campaign: string;
      launch: string;
      media: string;
      recovery: string;
    }
    flickr: {
      small: []
      original: []
    }
    presskit: string;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
  }
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: [{
    time: number;
    altitude: number;
    reason: string;
  }]
  details: string;
  crew: []
  ships: []
  capsules: []
  payloads: []
  launchpad: string
  flight_number: number
  name: string
  date_utc: string
  date_unix: string
  date_local: string
  date_precision: string
  upcoming: boolean
  cores: [{
    core: string
    flight: number
    gridfins: boolean
    legs: boolean
    reused: boolean
    landing_attempt: boolean
    landing_success: boolean
    landing_type: string
    landpad: string
  }]
  auto_update: boolean
  tbd: boolean
  launch_library_id: string
  id: string
}