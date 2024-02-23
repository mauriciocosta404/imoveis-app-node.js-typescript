import { Entity } from "../../core/domain/Entity";

type OwnerProps = {
    name: string;
    email: string;
    phone: string;
}

export class Owner extends Entity<OwnerProps>{
    private constructor(props: OwnerProps, id?: string){
        super(props,id);
    } 

    static create(props: OwnerProps, id: string){
        const owner = new Owner({
            ...props
        }, id);

        return owner;
    }    
}