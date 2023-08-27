// Fonction pour générer un nombre aléatoire entre 1 et 6 et retourne le nombre
const rollDice = function () {
	return Math.floor(Math.random() * 6) + 1;
};

// Fonction pour jouer au jeu de dé
function playDice() {
	const resultat = rollDice();
	console.log('Vous avez lancé un dé et obtenu le nombre : ' + resultat);
}

// pour afficher une image aléatoire
const showDice = function (resultat) {
	const imgDice = document.getElementById('dice');
	imgDice.src = `/Asset/ImgDice/dice-${resultat}.svg`;

	//pour mettre à jour l'image du dé
	dice.src = imgDice;
};

// Appeler la fonction pour lancer le dé lorsque l'utilisateur clique sur le bouton roll dice
document.getElementById('rollDice').addEventListener('click', playDice);

// fonction pour calculer et afficher le score actuel
const currentScore1 = document.getElementById('currentScore1');
//const currentScore2 = document.getElementById('currentScore2');
currentScore1.innerHTML += rollDice();

// fonction pour calculer et afficher le score total et le mémoriser

//comment savoir quand c'est joueur 1 ou joueur 2 qui joue?
//let currentScore1 = 0;
//let currentScore2 = 0;
//let player1 = 1; // joueur 1 commence

//if (player1 === 1) {
//	currentScore1 += rollDice;
//	document.getElementById('currentScore1').innerHTML = currentScore1;
//} else {
//	currentScore2 += rollDice;
//	document.getElementById('currentScore2').innerHTML = currentScore2;
//}
// permettre de relancer une partie : New Game

//rolldice et hold

//});
