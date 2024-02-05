import { Entity } from "../../core/domain/Entity";

type ImovelProps = {
    name: string;
    price: number;
    photoCover: string;
    photos?: string;
    bedroomNumber: number;
    bathroomNumber: number;
    createdAt ?: Date;
};

export class Imovel extends Entity<ImovelProps>{
    private constructor(props: ImovelProps, id?: string){
        super(props, id);
    }

    static create(props: ImovelProps, id?:string){
        const imovel = new Imovel({
            ...props,
            createdAt: props.createdAt ?? new Date(),
        }, id);

        return imovel;
    }
}