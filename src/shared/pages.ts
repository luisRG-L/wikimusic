import $ from '../lib/dom';
import documentn from './parts';
import { compareStarts } from '../util/casesensitive';
import { dataraw } from '../db/api';
import { InstrumentModel } from './models';

let init = () => {
    let app = $("#app");
    return app;
}


const app = init();

const verified = app && true;

function home () {
    return documentn(
        `
            <p id=index-home-text>Toca una letra para ver instrumentos musicales que empiecen por esa letra</p>
        `
    );
}

function render (page: string) {
    if(verified) {
        app.innerHTML = page;
    }
}

function search(content: string) {
    return documentn(
        `
            <div class="instrument-container">${
                dataraw.instruments
                    .filter(instrument => compareStarts(instrument.name, content))
                    .map(instrument => InstrumentModel(instrument))
            }</div>
        `
    );
}

export {
    render,

    home,
    search,

    app,

    verified
}