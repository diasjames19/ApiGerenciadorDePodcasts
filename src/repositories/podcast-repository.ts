import fs from "fs";
import  {PodecastModel}  from "../models/podcast-model";
import path from "path";

const pathDate = path.join(__dirname,"../repositories/podcasts.json");

export const repositoryPodcast = async (
    categoria?:string
):Promise<PodecastModel[]> => {
   
    const data =  fs.readFileSync(pathDate, "utf-8");
    let jsonFile = JSON.parse(data);
    if(categoria){
        jsonFile = jsonFile.filter((podcast: PodecastModel) => podcast.categoria === categoria);
    }
    return jsonFile;
};