import { Imovel } from "../../domain/entities/imovel";
import { ImovelRepository } from "../repositories/ImovelRepository";

type CreateImovelRequest = {
    name: string;
    price: number;
    photoCover: string;
    photos?: string[];
    bedroomNumber: number;
    bathroomNumber: number;
    ownerId: string;
};

export class CreateImovelUseCase{
    constructor(private imovelRepository: ImovelRepository){}

    async execute({name, price, photoCover, photos, bedroomNumber, bathroomNumber, ownerId} : CreateImovelRequest){

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
            bathroomNumber,
            ownerId
        });

        return createImovel;
    }   
}