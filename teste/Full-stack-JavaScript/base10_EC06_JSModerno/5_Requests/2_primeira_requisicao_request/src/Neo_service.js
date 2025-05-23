export async function getNeos() {
    const response = await fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-08&end_date=2015-09-09&api_key=LPAaGZP1MmFK2LVWYZBfTiiqVYbLqeplCZ14HUNb");

    const result = await response.json();

    console.log(result); // Para verificar a estrutura completa

    return result["near_earth_objects"]; // Retorna o objeto com as datas como chaves
}