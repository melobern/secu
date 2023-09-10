var numSecu = 123456788101112;
var numSansCle = numSecu.toString().slice(0,13);
var laCle = (97 - (numSansCle % 97)); // Formule de calcul de la clé
document.write(numSansCle.toString() + laCle.toString() + "<BR>");
laCle < 10 ? laCle = "0" + laCle.toString():0; // Si clé inférieure à 10, imprimer 0 + la clé
document.write("La clé de " + numSansCle + "  est  " + laCle +  "<BR><BR>");

var ntS = numSecu.toString();
const n = 999;
var chifDep = parseInt(ntS.slice(0,7)+ "000" + ntS.slice(10,13));
var rangNe =  parseInt(ntS.slice(0,10)+ "000");
var chiVille = parseInt(ntS.slice(0,5)+ "00" + ntS.slice(7,13));
var chiMois = parseInt(ntS.slice(0,3) + "00" + ntS.slice(5,13));
var chiAnnee = parseInt(ntS.slice(0,1)+ "00" + ntS.slice(3,13));
var cleConnue = parseInt(ntS.slice(13,15));
var chiGenre = parseInt("0" + ntS.slice(1,13));

function bouclePre (x) {
    for (let i = 0; i < n; i++) {
        x += 1000;
        cle2 = (97 - (x % 97));
      	if (cle2 === cleConnue){
        	cle2 < 10 ? cle2 = "0" + cle2.toString():0;
        	document.write(x + " " + cle2 +  "<BR>");
      		}
      	else{};
      }
};
function boucleDer (x) {
    for (let i = 0; i < n; i++) {
        x += 1;
        cle2 = (97 - (x % 97));
      	if (cle2  === cleConnue){
        	cle2 < 10 ? cle2 = "0" + cle2.toString():0;
        	document.write(x + " " + cle2 +  "<BR>");
      		}
      	else{};
      }
};
function boucleVille (x) {
    for (let i = 0; i < 99; i++) {
        x += 1000000;
        var villeCorseA = ntS.slice(0,5) + "2A" + ntS.slice(7,13);
        var villeCorseB = ntS.slice(0,5) + "2B" + ntS.slice(7,13);
        xVille = parseInt(x.toString().slice(5,7))
        cle2 = (97 - (x % 97));
      	if (cle2  === cleConnue){
            cle2 < 10 ? cle2 = "0" + cle2.toString():0;
        	if (xVille == 19){
            	document.write(villeCorseA + " " + cleConnue + (" <== ESSAIE ÇA : SÛREMENT UN.E CORSE !!!").fontcolor("red") +"<BR>");
                }
            else if (xVille == 18){
            	document.write(villeCorseB + " " + cleConnue + (" <== ESSAIE ÇA : SÛREMENT UN.E CORSE !!!").fontcolor("red") +"<BR>");
                }
            else {
        		document.write(x + " " + cle2 +  "<BR>");
      		};}
      	else{};
      }
};
function boucleMois (x) {
    for (let i = 0; i < 12; i++) {
        x += 100000000;
        cle2 = (97 - (x % 97));
      	if (cle2  === cleConnue){
            cle2 < 10 ? cle2 = "0" + cle2.toString():0;
        	document.write(x + " " + cle2 +  "<BR>");
      		}
      	else{};
      }
};
function boucleAnnee (x) {
    for (let i = 0; i < 99; i++) {
        x += 10000000000;
        cle2 = (97 - (x % 97));
      	if (cle2  === cleConnue){
            cle2 < 10 ? cle2 = "0" + cle2.toString():0;
        	document.write(x + " " + cle2 +  "<BR>");
      		}
      	else{};
      }
};
function boucleGenre (x) {
    for (let i = 0; i < 2; i++) {
        x += 1000000000000;
        cle2 = (97 - (x % 97));
      	if (cle2  === cleConnue){
            cle2 < 10 ? cle2 = "0" + cle2.toString():0;
        	document.write((x + " " + cle2).fontcolor("red") +  "<BR>");
      		}
      	else{};
      }
};
bouclePre(chifDep); // Imprime numéros de sécu où doute sur département
document.write("<BR>");
boucleDer(rangNe); // Imprime numéros de sécu où doute sur rang de naissance
document.write("<BR>" + "Doute sur la ville :" + "<BR>");
boucleVille(chiVille); // Imprime numéros de sécu où doute sur ville naissance 
document.write("<BR>" + "Doute sur le mois de naissance : " + "<BR>");
boucleMois(chiMois);
document.write("<BR>" + "Doute sur l'année de naissance :" + "<BR>");
boucleAnnee(chiAnnee);
document.write("<BR>" + "Doute sur le genre :" + "<BR>");
boucleGenre(chiGenre);
