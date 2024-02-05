import { Imovel } from "../../domain/entities/imovel";

export interface ImovelRepository{ 
    findByName(name: string): Promise<Imovel | null>
}