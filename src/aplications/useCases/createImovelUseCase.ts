import { Imovel } from "../../domain/entities/imovel";
import { ImovelRepository } from "../repositories/ImovelRepository";

type CreateImovelRequest = {
    name: string;
    price: number;
    photoCover: string;
    photos?: string;
    bedroomNumber: number;
    bathroomNumber: number;
};

export class CreateImovelUseCase{
    constructor(private imovelRepository: ImovelRepository){}

    async execute({name, price, photoCover, photos, bedroomNumber, bathroomNumber} : CreateImovelRequest){

        const imovelAlreadyExists = await this.imovelRepository.findByName(name);

        if(imovelAlreadyExists){
            throw new Error('Imóvel já existe');
        }

        const createImovel = Imovel.create({
            name,
            price,
            photoCover,
            photos,
            bedroomNumber,
            bathroomNumber
        });

        return createImovel;
    }   
}