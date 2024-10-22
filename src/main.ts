import '../css/app.css';
import { data } from './db/const';
import documentn from './shared/parts';

import * as p from './shared/pages';
import $ from './lib/dom';
import { InstrumentModel } from './shared/models';

p.render(p.home());

const app = $('#app');

// Start Code
if(app) {
//

document.addEventListener('keypress', (e) => {
  // Si es la tecla esc...
  if(e.code === 'Enter') {
    p.render(p.home());
  }
})

function search() {
  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  const value = searchInput.value;
  if (value) {
    p.render(p.search(value));
  } else {
    p.render(p.home());
  }
}

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const id = target?.id;
  if(id.length === 1) {
    if (id && data.instruments[id] && p.verified) {
      app.innerHTML = documentn(`
        <div class="instrument-container">
          ${data.instruments[id].map(instrument => InstrumentModel(instrument)).join('')}
        </div>
        <p id="try-other">Prueba a tocar otra letra</p>
      `);
    } else {
      app.innerHTML = documentn(`
        <p>No se encontró ningún instrumento musical que empieze por ${id.toUpperCase()}</p>
      `);
    }
  }
  if (id === 'search-button') search();
});

document.addEventListener('submit', (_e) => {
  if ((_e.target as HTMLElement)?.id === 'search') {
    search();
  }
});

document.addEventListener('DOMContentLoaded', () => {

});

// End Code
}
//