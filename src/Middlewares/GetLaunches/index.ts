import { api } from '../../Services/api'

interface ILaunchesData {
  id: string;
  name: string;
  flightNumber: number;
  details: string;
  launchDate: Date;
  links: any;
}

interface ILaunchesLinks {
  patch: any;
  launchVideo: string;
  launchArticle: string;  
}

interface IPatch {
  small: string;
  large: string;
}

interface ILaunches {
  id: string;
  name: string;
  flightNumber: number;
  details: string;
  launchDate: Date;
  video: string;
  article: string;
  smallImg: string;
  largeImg: string;
}

export async function fetchLaunches() {
  const launchesResponse = await api.get('/launches')
  const launchesRaw = launchesResponse.data

  const launchesData: ILaunchesData = {
    id: launchesRaw.map((
      launch: { id: string; }) => launch.id),
    name: launchesRaw.map((
      launch: { name: string; }) => launch.name),
    flightNumber: launchesRaw.map((
      launch: { flight_number: number; }) => launch.flight_number),
    launchDate: launchesRaw.map((
      launch: { date_utc: Date; }) => launch.date_utc),
    links: launchesRaw.map((
      launch: { links: any; }) => launch.links),
    details: launchesRaw.map((
      launch: { details: string; }) => launch.details),
  }

  const links = launchesData.links

  const launchesLinks: ILaunchesLinks = {
    launchArticle: links.map((
      links: { article: string; }) => links.article),
    launchVideo: links.map((
      links: { webcast: string; }) => links.webcast),
    patch: links.map((
      links: { patch: any; }) => links.patch),
  }

  const patch = launchesLinks.patch
  
  const patches: IPatch = {
    small: patch.map((
      patch: { small: string; }) => patch.small),
    large: patch.map((
      patch: { large: string; }) => patch.large),
  }

  const launches: ILaunches = {
    id: launchesData.id,
    name: launchesData.name,
    flightNumber: launchesData.flightNumber,
    details: launchesData.details,
    launchDate: launchesData.launchDate,
    video: links.launchVideo,
    article: links.launchArticle,
    smallImg: patches.small,
    largeImg: patches.large,
  }
  
  console.log(launchesData)
}