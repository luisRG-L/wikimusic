export interface Instrument {
    name: string,
    procedence: string,
    family: string,
    img?: string
}

export interface Data {
    instruments: Instrument[]
}

export interface DataModel {
    instruments: {
        [key: string]: Instrument[]
    }
}