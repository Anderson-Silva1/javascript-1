import "core-js"
import "regenerator-runtime/runtime"
import Neo from "./Neo";
import { getNeos } from "./Neo_service";
import { create } from "domain";

async function loadNeos() {
    let neos = [];
    let neosJSON = await getNeos(); // Chama o serviço que faz o fetch na API

    // Iterar sobre as chaves (datas) dentro de "near_earth_objects"
    Object.keys(neosJSON).forEach(date => {
        // Para cada data, iterar sobre os NEOs
        neosJSON[date].forEach(neo => {
            const minDiameter = neo['estimated_diameter']['kilometers']['estimated_diameter_min'];
            const maxDiameter = neo['estimated_diameter']['kilometers']['estimated_diameter_max'];

            const averageDiameter = (minDiameter + maxDiameter) / 2;

            // Criar um novo objeto Neo com os dados processados
            const newNeo = new Neo(neo['id'], neo['name'], averageDiameter, neo['is_sentry_object']);

            neos.push(newNeo); // Adicionar ao array de NEOs
        });
    });

    renderNeos(neos); // Exibir o array final de NEOs processados
}

function renderNeos(neos) {
    const UlElement = document.getElementById('neos-list'); // Obtém o elemento UL

    // Limpa o conteúdo anterior (opcional, mas útil para evitar duplicações)
    UlElement.innerHTML = '';

    // Itera sobre o array de NEOs e cria elementos <li> para cada um
    neos.forEach(neo => {
        const liElement = document.createElement('li'); // Cria o elemento <li>
        const isSentry = neo.riscoColisao ? "Perigo de colisão" : "Sem perigo de colisão"; // Define o texto com base no risco
        const text = `${neo.id} | ${neo.name} | ${neo.diametroMedio.toFixed(2)} km | ${isSentry}`; // Texto com as informações do NEO

        liElement.innerHTML = text; // Define o texto do <li>

        UlElement.appendChild(liElement); // Adiciona o <li> à lista UL
    });
}

loadNeos()