var numSecu = 293116938704939;
var numSansCle = numSecu.toString().slice(0,13);
var laCle = (97 - (numSansCle % 97)); // Formule de calcul de la clé
document.write(numSansCle.toString() + laCle.toString() + "<BR>");
document.write("La clé de " + numSansCle + "  est  " + laCle +  "<BR><BR>");

var ntS = numSecu.toString();
const n = 999;
var chifDep = parseInt(ntS.slice(0,7)+ "000" + ntS.slice(10,13));
var rangNe =  parseInt(ntS.slice(0,10)+ "000");
var cleConnue = parseInt(ntS.slice(13,15));

function bouclePre (x) {
    for (let i = 0; i < n; i++) {
        x += 1000;
        cle2 = (97 - (x % 97));
      	if (cle2 === cleConnue){
        	document.write(x + " " + cleConnue +  "<BR>");
      		}
      	else{};
      }
};
function boucleDer (x) {
    for (let i = 0; i < n; i++) {
        x += 1;
        cle2 = (97 - (x % 97));
      	if (cle2  === cleConnue){
        	document.write(x + " " + cleConnue +  "<BR>");
      		}
      	else{};
      }
};
bouclePre(chifDep); // Imprime numéros de sécu où le doute est sur le département
document.write("<BR>");
boucleDer(rangNe); // Imprime numéros de sécu où le doute est sur le rang de naissance
