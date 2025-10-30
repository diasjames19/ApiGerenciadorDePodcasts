import { IncomingMessage,ServerResponse } from "node:http";
import {serviceListEpisodiosPodcast} from "../services/list-episodes-service";
import { serviceFilterEpisodiosPodcast } from "../services/filter-episodes-service";


export const getFilterEpisodesPodcast = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const queryString = req.url?.split("?v=")[1] ?? "";
  console.log(queryString)
  const content = await serviceFilterEpisodiosPodcast(queryString);
    res.writeHead(200, { "Content-Type": "application/json" });
    console.log(JSON.stringify(content));
    res.end(JSON.stringify(content));
}

export const getListEpisodesPodcast = async (
  req: IncomingMessage, 
  res: ServerResponse
) => {
  const content = await serviceListEpisodiosPodcast();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(content));
}
