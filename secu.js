//calcul secu : (97 - (2010199000111 % 97));

const n = 999;
var secuPremiers = 2010199000111; // Si doute sur les chiffres de la commune
var secuDerniers = 2010199111000; // Si doute sur les chiffres du rang de naissance
var cle = 01 // clé connue
//var cle = (97 - (secu % 97)); => formule de calcul de la clé
function bouclePre (secuPremiers) {
    for (let i = 0; i < n; i++) {
        secuPremiers += 1000;
        cle = (97 - (secuPremiers % 97));
      	if (cle ===39){
        	document.write(secuPremiers + " " + cle +  "<BR>");
      		}
      	else{};
      }
};
function boucleDer (secuDerniers) {
    for (let i = 0; i < n; i++) {
        secuDerniers += 1;
        cle = (97 - (secuDerniers % 97));
      	if (cle ===39){
        	document.write(secuDerniers + " " + cle +  "<BR>");
      		}
      	else{};
      }
};
bouclePre(secuPremiers); // Imprime tous les numéros de sécu où le doute était sur le département
boucleDer(secuDerniers); // Imprime tous les numéros de sécu où le doute était sur le rang de naissance

