import * as c from './components';
import abc from '../db/const';

function header() {
    return `
        <header>
            <h1>WikiMusic</h1>
            <p>Tu diccionario de instrumentos musicales</p>
        </header>
    `;
}

function letters() {
    // Utilización de .join('') para generar la cadena de botones sin comas
    const buttons = abc.map(letter => c.button(letter.toUpperCase(), letter)).join('');
    return buttons;
}

function footer() {
    // Eliminación de `return ''` innecesario, y retorno del footer correctamente
    return `
        <footer>
            <p>Hecho con TS + HTML</p>
            <p>Hecho por LuisRG-L (Orange Cat Development | 2024)</p>
        </footer>
    `;
}

function documentn(content: string) {
    // Estructura más limpia y consistente en el HTML generado
    return `
        ${header()}
        <div id="document">
            <div id="content">    
                <form id="search">
                    <input type="text" autocomplete="off" id="search-input" placeholder="Buscar instrumento...">
                    <input type="submit" class=clickable id="search-button" value="🔎">
                </form>
                <div id="letters">
                    ${letters()}
                </div>
                <div id="content-hw">
                    ${content.length > 0 ? content : 'No se ha seleccionado ninguna letra'}
                </div>
            </div>
        </div>
        ${footer()}
    `;
}

// Exportar las funciones de header y footer, y la función documentn por defecto
export { header, footer };
export default documentn;
