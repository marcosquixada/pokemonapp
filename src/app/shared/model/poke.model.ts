export class Poke {
    id: string | undefined;
    name: string | undefined;
    supertype: string | undefined;
    level: string | undefined;
    hp: string | undefined;
    evolvesFrom: string | undefined;
    images: any;
    types: string[] | undefined;
    weaknesses: any[] | undefined;
    resistances: any[] | undefined;
    attacks: any[] | undefined;
}

export class Images {
    large: string | undefined;
    small: string | undefined;
}