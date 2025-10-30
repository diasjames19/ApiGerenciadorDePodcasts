import { PodecastModel } from '../models/podcast-model';
import {repositoryPodcast} from '../repositories/podcast-repository';
import { IncomingMessage,ServerResponse } from "node:http";




export const serviceFilterEpisodiosPodcast = async (
    categoria:string
):Promise<PodecastModel[]> => {
    
    
    const repository = await repositoryPodcast(categoria);
    return repository
} 