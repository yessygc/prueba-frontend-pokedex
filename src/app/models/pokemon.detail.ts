export class PokemonDetail {
    id: number = 0;
    order: number = 0;
    name: string = '';
    height: number = 0;
    abilities: Ability[] = [];
    spices: Species = new Species();
    types: Type[] = [];
    weight: number = 0;
    sprites: Sprite = new Sprite();
    stats: Stat[] = [];

    constructor() {
        this.abilities = [];
        this.types = [];
    }
}

class Ability {
    ability: {
        name: string;
    } = { name: '' }; // Inicializa ability con un objeto que tiene una propiedad name inicializada con una cadena vacía.
}

class Species {
    url: string = '';
}

class Type {
    slot: number = 0;
    type: {
        name: string;
    } = { name: '' }; 
}


class Sprite {
    front_default: string = '';
}

class Stat {
    base_stat: number = 0;
    stat: {
        name: string;
    } = { name: '' }; 
}

