import { data } from "./db/api";

console.log(
    Object
        .keys(data.instruments)
        .map(key => data.instruments[key])
        .map(instruments => instruments
        .map(instrument => instrument.name))
        .map(names => names.join(', '))
)