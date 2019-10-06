export interface Apostle {
    readonly firstname: string;
    readonly lastname: string;
    readonly email: string;
    readonly about: string;
    readonly rank: Rank;
}

export enum Rank {
    APOSTLE = 'Apostle',
    CHRIST = 'Christ',
    GOD = 'God'
}