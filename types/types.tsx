export interface Monster {
    id: string;
    name: string;
    categoryId: number;
    order: number;
    emmaOrder: number | null;
    metagOrder: number | null;
    imgPath: string;
    boss?: string;
    challenge?: string[];
}

export interface AvisMonster {
    id: string;
    boss: string;
    zone: string;
    categoryId: number;
    order: number;
    emmaOrder: number | null;
    metagOrder: number | null;
    imgPath: string;
}