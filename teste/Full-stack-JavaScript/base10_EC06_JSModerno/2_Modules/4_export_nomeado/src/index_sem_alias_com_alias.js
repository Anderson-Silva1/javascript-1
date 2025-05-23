// Importamos dessa forma:
import { multiplicacao } from "./export_nomeado_com_alias";
import { soma as somar } from "./export_nomeado_com_alias";
// Diferente do export default, esse precisamos usar o nome expecífico

console.log(multiplicacao(2, 5)) // 10

console.log(somar(2, 5)) // 7