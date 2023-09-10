export class PokemonList {
    name: string;
    url: string | null; // Modifica el tipo a string | null

    constructor() {
        this.name = '';
        this.url = null; // Asigna null
    }
}
