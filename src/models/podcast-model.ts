export interface PodecastModel {
    titulo: string,
    descricao: string,
    categoria:string,
      episodios: [
        {
            titulo: string,
            link_video: string
        }
         ];
}
