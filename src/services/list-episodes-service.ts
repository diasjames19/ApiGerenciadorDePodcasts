import { PodecastModel } from '../models/podcast-model';
import {repositoryPodcast} from '../repositories/podcast-repository';

export const serviceListEpisodiosPodcast = async (
    PodcastName?:string
):Promise<PodecastModel[]> => {

    const repository = await repositoryPodcast();
    return repository;
}