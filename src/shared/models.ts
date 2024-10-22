import { INSTRUMENTS_DIR } from "../db/apiConsts";
import { Instrument } from "../db/types";

export const InstrumentModel = (instrument: Instrument) => `
<article class="instrument">
    ${instrument.img ? `<img src="${INSTRUMENTS_DIR}${instrument.img}" alt="${instrument.name}">` : ''}
    <header class="nohr">
        <h2>${instrument.name}</h2>
    </header>
    <p><strong>Origen:</strong> ${instrument.procedence}</p>
    <p><strong>Familia:</strong> ${instrument.family}</p>
</article>
`;