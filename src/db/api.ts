import { Data, DataModel, Instrument } from './types';

export const dataraw: Data = {
    instruments: [
        { name: 'Acordeón', procedence: 'Alemania', family: 'Viento', img: 'acordeon.jpg' },
        { name: 'Adufe', procedence: 'Portugal', family: 'Percusión', img: 'adufe.jpg' },
        { name: 'Armónica', procedence: 'Alemania', family: 'Viento', img: 'armónica.jpg' },
        { name: 'Arpa', procedence: 'Egipto y Grecia', family: 'Cuerda', img: 'arpa.jpg' },
        { name: 'Atabal', procedence: 'España', family: 'Cuerda', img: 'atabal.jpg' },
        { name: 'Bajo', procedence: 'Estados Unidos', family: 'Cuerda', img: 'bajo.jpg' },
        { name: 'Bajón valenciano', procedence: 'Valencia', family: 'Viento', img: '_bajón valenciano.jpg' },
        { name: 'Bajoquinto', procedence: 'Mexicano', family: 'Cuerda', img: 'bajo quinto.jpg' },
        { name: 'Batería', procedence: 'Estados Unidos', family: 'Percusión', img: 'bateria.jpg' },
        { name: 'Bombo', procedence: 'Europa', family: 'Percusión', img: 'bombo.jpg' },
        { name: 'Cajón', procedence: 'África', family: 'Percusión', img: 'cajón.jpg' },
        { name: 'Cuerno', procedence: 'Hebreos', family: 'Viento', img: 'cuerno.jpg' },
        { name: 'Caja', procedence: 'Suiza', family: 'Percusión', img: 'caja.jpg' },
        { name: 'Contrabajo', procedence: 'Italia', family: 'Cuerda', img: 'contrabajo.jpg' },
        { name: 'Darbake', procedence: 'Árabe', family: 'Percusión', img: 'derbake.jpg' },
        { name: 'Dulzaina', procedence: 'Mesopotamia', family: 'Viento', img: 'dulzaina.jpg' },
        { name: 'Ek Tara', procedence: 'Hindú', family: 'Cuerda', img: 'ek tara.jpg' },
        { name: 'Fagot', procedence: '??', family: 'Viento', img: 'fagot.png' },
        { name: 'Flauta', procedence: 'Alemania', family: 'Viento', img: 'flauta.jpg' },
        { name: 'Fotuto', procedence: 'Venezuela', family: 'Viento', img: 'fotuto.jpg' },
        { name: 'Guitarra', procedence: 'Asia', family: 'Cuerda', img: 'guitarra.jpg' },
        { name: 'Güira', procedence: 'República Dominicana', family: 'Percusión', img: 'güiro.jpg' },
        { name: 'Hummel', procedence: 'Escandinavia', family: 'Cuerda', img: 'hummel.jpg' },
        { name: 'Igil', procedence: 'Turquía', family: 'Cuerda', img: 'igil.jpg' },
        { name: 'Jarana', procedence: 'México', family: 'Cuerda', img: 'jarana.jpg' },
        { name: 'Kalimba', procedence: 'África', family: 'Cuerda', img: 'kalimba.jpg' },
        { name: 'Laúd', procedence: 'Edad Media ??', family: 'Cuerda', img: 'laud.jpg' },
        { name: 'Qanun', procedence: 'Oriente medio', family: 'Cuerda', img: 'qanun.jpg' },
        
        { name: 'Bajo eléctrico', procedence: 'Estados Unidos', family: 'Cuerda', img: 'bajo eléctrico.jpg' },
        { name: 'Balafón', procedence: 'África occidental', family: 'Percusión', img: 'balafón.jpg' },
        { name: 'Bandoneón', procedence: 'Alemania', family: 'Viento', img: 'bandoneón.jpg' },
        { name: 'Bandurria', procedence: 'Grecia', family: 'Cuerda', img: 'bandurria.jpg' },
        { name: 'Batá', procedence: 'Nigeria', family: 'Percusión', img: 'batá.jpg' },
        { name: 'Clarinete', procedence: 'Alemania', family: 'Viento', img: 'clarinete.jpg' },
        { name: 'Gaita', procedence: 'Portugal, Asturias', family: 'Viento', img: 'gaita.jpg' },
        { name: 'Guitarra eléctrica', procedence: 'Estados Unidos', family: 'Cuerda', img: 'guitarra eléctrica.jpg' },
        { name: 'Oboe', procedence: 'Oboe', family: 'Viento', img: 'oboe.jpg' },
        { name: 'Organistrum', procedence: 'Norte de Europa', family: 'Viento', img: 'organistrum.jpg' },
        { name: 'Órgano portátil', procedence: 'Edad Media', family: 'Viento', img: 'organo_portatil.jpg' },
        { name: 'Palillo', procedence: 'Egipto', family: 'Percusión', img: 'palillos.jpg' },
        { name: 'Pandereta', procedence: 'Mesopotamia', family: 'Percusión', img: 'pandereta.jpg' },
        { name: 'Piano', procedence: 'Italia', family: 'Cuerda', img: 'piano.jpg' },
        { name: 'Platillos', procedence: 'Mesopotamia', family: 'Percusión', img: 'platillos.jpg' },
        { name: 'Sacabuche', procedence: 'Edad Media', family: 'Viento', img: 'sacabuche.jpg' },
        { name: 'Salterio', procedence: 'Grecia', family: 'Cuerda', img: 'salterio.jpg' },
        { name: 'Saxofón', procedence: 'Bruselas', family: 'Viento', img: 'saxofon.jpg' },
        { name: 'Serpentón', procedence: 'Francia', family: 'Viento', img: 'serpenton.jpg' },
        { name: 'Siku', procedence: 'Perú', family: 'Viento', img: 'siku.jpg' },
        { name: 'Sintetizador', procedence: 'Siglo XX', family: 'Electrónico', img: 'sintetizador.jpg' },
        { name: 'Sistro', procedence: 'Egipto', family: 'Percusión', img: 'sistro.jpg' },
        { name: 'Tambor', procedence: 'África', family: 'Percusión', img: 'tambor.jpg' },
        { name: 'Timbal', procedence: 'Alemania', family: 'Percusión', img: 'timbal.jpg' },
        { name: 'Tiple', procedence: 'Colombia', family: 'Cuerda', img: 'tiple.jpg' },
        { name: 'Tormento', procedence: 'Chile', family: 'Percusión', img: 'tormento.jpg' },
        { name: 'Tres', procedence: 'Cuba', family: 'Cuerda', img: 'tres.jpg' },
        { name: 'Triángulo', procedence: 'Siglo XVIII', family: 'Percusión', img: 'triangulo.jpg' },
        { name: 'Trompeta', procedence: 'Antiguo Egipto', family: 'Viento', img: 'trompeta.jpg' },
        { name: 'Vihuela', procedence: 'Italia', family: 'Cuerda', img: 'vihuela.jpg' },
        { name: 'Viola', procedence: 'Italia', family: 'Cuerda', img: 'viola.jpg' },
        { name: 'Violín', procedence: 'Italia', family: 'Cuerda', img: 'violin.jpg' },
        { name: 'Violoncello', procedence: 'Italia', family: 'Cuerda', img: 'violonchelo.jpg' },
        { name: 'Wada', procedence: 'Suiza', family: 'Percusión', img: 'wada.jpg' }
    ]
};


const sortedData = dataraw.instruments.sort((a, b) => a.name.localeCompare(b.name));

export const data: DataModel = {
    instruments: sortedData.reduce<Record<string, Instrument[]>>((acc, curr) => {
        const firstLetter = curr.name.charAt(0).toLowerCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(curr);
        return acc;
    }, {})
};