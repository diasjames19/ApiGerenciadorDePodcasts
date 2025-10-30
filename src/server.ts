import * as http from "http";
import  'dotenv/config';
import {getListEpisodesPodcast,getFilterEpisodesPodcast} from './controllers/podcast-controller';




const server = http.createServer(async (req:http.IncomingMessage, res:http.ServerResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const [baseUrl,queryString] = req.url?.split("?") ?? ["",""];
  console.log(baseUrl);
  console.log(queryString);
  
  if(req.method === "GET" && req.url === "/api/list"){
    await getListEpisodesPodcast(req, res);
    console.log("Requisição Recebida");
  }
  if(req.method === "GET" && req.url === "/api/filter") {
    await getFilterEpisodesPodcast(req, res);
    console.log("Requisição Recebida");
  }
});


const portServer = process.env.SERVERPORT;
server.listen(portServer, () => {
    console.log(`Server Online na Porta:${portServer}!`);

});

