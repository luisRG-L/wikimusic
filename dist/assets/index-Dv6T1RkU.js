(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const s={instruments:[{name:"Acordeón",procedence:"Alemania",family:"Viento",img:"acordeon.jpg"},{name:"Adufe",procedence:"Portugal",family:"Percusión",img:"adufe.jpg"},{name:"Armónica",procedence:"Alemania",family:"Viento",img:"armónica.jpg"},{name:"Arpa",procedence:"Egipto y Grecia",family:"Cuerda",img:"arpa.jpg"},{name:"Atabal",procedence:"España",family:"Cuerda",img:"atabal.jpg"},{name:"Bajo",procedence:"Estados Unidos",family:"Cuerda",img:"bajo.jpg"},{name:"Bajón valenciano",procedence:"Valencia",family:"Viento",img:"_bajón valenciano.jpg"},{name:"Bajoquinto",procedence:"Mexicano",family:"Cuerda",img:"bajo quinto.jpg"},{name:"Batería",procedence:"Estados Unidos",family:"Percusión",img:"bateria.jpg"},{name:"Bombo",procedence:"Europa",family:"Percusión",img:"bombo.jpg"},{name:"Cajón",procedence:"África",family:"Percusión",img:"cajón.jpg"},{name:"Cuerno",procedence:"Hebreos",family:"Viento",img:"cuerno.jpg"},{name:"Caja",procedence:"Suiza",family:"Percusión",img:"caja.jpg"},{name:"Contrabajo",procedence:"Italia",family:"Cuerda",img:"contrabajo.jpg"},{name:"Darbake",procedence:"Árabe",family:"Percusión",img:"derbake.jpg"},{name:"Dulzaina",procedence:"Mesopotamia",family:"Viento",img:"dulzaina.jpg"},{name:"Ek Tara",procedence:"Hindú",family:"Cuerda",img:"ek tara.jpg"},{name:"Fagot",procedence:"??",family:"Viento",img:"fagot.png"},{name:"Flauta",procedence:"Alemania",family:"Viento",img:"flauta.jpg"},{name:"Fotuto",procedence:"Venezuela",family:"Viento",img:"fotuto.jpg"},{name:"Guitarra",procedence:"Asia",family:"Cuerda",img:"guitarra.jpg"},{name:"Güira",procedence:"República Dominicana",family:"Percusión",img:"güiro.jpg"},{name:"Hummel",procedence:"Escandinavia",family:"Cuerda",img:"hummel.jpg"},{name:"Igil",procedence:"Turquía",family:"Cuerda",img:"igil.jpg"},{name:"Jarana",procedence:"México",family:"Cuerda",img:"jarana.jpg"},{name:"Kalimba",procedence:"África",family:"Cuerda",img:"kalimba.jpg"},{name:"Laúd",procedence:"Edad Media ??",family:"Cuerda",img:"laud.jpg"},{name:"Qanun",procedence:"Oriente medio",family:"Cuerda",img:"qanun.jpg"},{name:"Bajo eléctrico",procedence:"Estados Unidos",family:"Cuerda",img:"bajo eléctrico.jpg"},{name:"Balafón",procedence:"África occidental",family:"Percusión",img:"balafón.jpg"},{name:"Bandoneón",procedence:"Alemania",family:"Viento",img:"bandoneón.jpg"},{name:"Bandurria",procedence:"Grecia",family:"Cuerda",img:"bandurria.jpg"},{name:"Batá",procedence:"Nigeria",family:"Percusión",img:"batá.jpg"},{name:"Clarinete",procedence:"Alemania",family:"Viento",img:"clarinete.jpg"},{name:"Gaita",procedence:"Portugal, Asturias",family:"Viento",img:"gaita.jpg"},{name:"Guitarra eléctrica",procedence:"Estados Unidos",family:"Cuerda",img:"guitarra eléctrica.jpg"},{name:"Oboe",procedence:"Oboe",family:"Viento",img:"oboe.jpg"},{name:"Organistrum",procedence:"Norte de Europa",family:"Viento",img:"organistrum.jpg"},{name:"Órgano portátil",procedence:"Edad Media",family:"Viento",img:"organo_portatil.jpg"},{name:"Palillo",procedence:"Egipto",family:"Percusión",img:"palillos.jpg"},{name:"Pandereta",procedence:"Mesopotamia",family:"Percusión",img:"pandereta.jpg"},{name:"Piano",procedence:"Italia",family:"Cuerda",img:"piano.jpg"},{name:"Platillos",procedence:"Mesopotamia",family:"Percusión",img:"platillos.jpg"},{name:"Sacabuche",procedence:"Edad Media",family:"Viento",img:"sacabuche.jpg"},{name:"Salterio",procedence:"Grecia",family:"Cuerda",img:"salterio.jpg"},{name:"Saxofón",procedence:"Bruselas",family:"Viento",img:"saxofon.jpg"},{name:"Serpentón",procedence:"Francia",family:"Viento",img:"serpenton.jpg"},{name:"Siku",procedence:"Perú",family:"Viento",img:"siku.jpg"},{name:"Sintetizador",procedence:"Siglo XX",family:"Electrónico",img:"sintetizador.jpg"},{name:"Sistro",procedence:"Egipto",family:"Percusión",img:"sistro.jpg"},{name:"Tambor",procedence:"África",family:"Percusión",img:"tambor.jpg"},{name:"Timbal",procedence:"Alemania",family:"Percusión",img:"timbal.jpg"},{name:"Tiple",procedence:"Colombia",family:"Cuerda",img:"tiple.jpg"},{name:"Tormento",procedence:"Chile",family:"Percusión",img:"tormento.jpg"},{name:"Tres",procedence:"Cuba",family:"Cuerda",img:"tres.jpg"},{name:"Triángulo",procedence:"Siglo XVIII",family:"Percusión",img:"triangulo.jpg"},{name:"Trompeta",procedence:"Antiguo Egipto",family:"Viento",img:"trompeta.jpg"},{name:"Vihuela",procedence:"Italia",family:"Cuerda",img:"vihuela.jpg"},{name:"Viola",procedence:"Italia",family:"Cuerda",img:"viola.jpg"},{name:"Violín",procedence:"Italia",family:"Cuerda",img:"violin.jpg"},{name:"Violoncello",procedence:"Italia",family:"Cuerda",img:"violonchelo.jpg"},{name:"Wada",procedence:"Suiza",family:"Percusión",img:"wada.jpg"}]},j=s.instruments.sort((e,a)=>e.name.localeCompare(a.name)),d={instruments:j.reduce((e,a)=>{const n=a.name.charAt(0).toLowerCase();return e[n]||(e[n]=[]),e[n].push(a),e},{})},b=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],h=(e,a)=>`
        <button id="${a}">${e}</button>
    `;function C(){return`
        <header>
            <h1>WikiMusic</h1>
            <p>Tu diccionario de instrumentos musicales</p>
        </header>
    `}function v(){return b.map(a=>h(a.toUpperCase(),a)).join("")}function P(){return`
        <footer>
            <p>Hecho con TSML (TS + HTML)</p>
        </footer>
    `}function c(e){return`
        ${C()}
        <div id="document">
            <div id="content">    
                <form id="search">
                    <input type="text" autocomplete="off" id="search-input" placeholder="Buscar instrumento...">
                    <input type="submit" class=clickable id="search-button" value="🔎">
                </form>
                <div id="letters">
                    ${v()}
                </div>
                <div id="content-hw">
                    ${e.length>0?e:"No se ha seleccionado ninguna letra"}
                </div>
            </div>
        </div>
        ${P()}
    `}const u=e=>document.querySelector(e);function V(e,a){const n=e.toLowerCase().replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u"),r=a.toLowerCase().replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ó/g,"o").replace(/ú/g,"u");return n.startsWith(r)}const E="../instruments/imgs/",g=e=>`
<article class="instrument">
    ${e.img?`<img src="${E}${e.img}" alt="${e.name}">`:""}
    <header class="nohr">
        <h2>${e.name}</h2>
    </header>
    <p><strong>Origen:</strong> ${e.procedence}</p>
    <p><strong>Familia:</strong> ${e.family}</p>
</article>
`;let L=()=>u("#app");const f=L(),y=f&&!0;function l(){return c(`
            <p id=index-home-text>Toca una letra para ver instrumentos musicales que empiecen por esa letra</p>
        `)}function t(e){y&&(f.innerHTML=e)}function S(e){return c(`
            <div class="instrument-container">${s.instruments.filter(a=>V(a.name,e)).map(a=>g(a))}</div>
        `)}t(l());const p=u("#app");if(p){let e=function(){const n=document.getElementById("search-input").value;t(n?S(n):l())};document.addEventListener("keypress",a=>{a.code==="Enter"&&t(l())}),document.addEventListener("click",a=>{const n=a.target,r=n==null?void 0:n.id;r.length===1&&(r&&d.instruments[r]&&y?p.innerHTML=c(`
        <div class="instrument-container">
          ${d.instruments[r].map(i=>g(i)).join("")}
        </div>
        <p id="try-other">Prueba a tocar otra letra</p>
      `):p.innerHTML=c(`
        <p>No se encontró ningún instrumento musical que empieze por ${r.toUpperCase()}</p>
      `)),r==="search-button"&&e()}),document.addEventListener("submit",a=>{var n;((n=a.target)==null?void 0:n.id)==="search"&&e()}),document.addEventListener("DOMContentLoaded",()=>{})}
