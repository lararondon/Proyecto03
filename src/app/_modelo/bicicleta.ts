export class Bicicleta{
    color: string;
    marca: string;
    velocidad: number;
    pinones: number;
    platos: number;
    electrica:boolean;

    constructor(p_color:string,p_marca:string,p_velocidad:number,p_pinones:number,
    p_platos:number,p_electrica:boolean){
        this.color=p_color;
        this.marca=p_marca;
        this.velocidad=p_velocidad;
        this.pinones=p_pinones;
        this.platos=p_platos;
        this.electrica=p_electrica;
    }

    acelerar(mas_velocidad:number){
        this.velocidad=this.velocidad+mas_velocidad;
    }

    frenar(quitar_velocidad:number){
        this.velocidad=this.velocidad-quitar_velocidad;
    }
}

