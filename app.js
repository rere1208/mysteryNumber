//console.log(`je m'execute dans grace a moi`);

const readline = require('readline');

// Définition des constantes pour les bornes du nombre mystère
const MIN_NUMBER = 100;
const MAX_NUMBER = 200;
const MAX_ATTEMPTS = 10;

// Fonction pour générer un nombre aléatoire entre MIN_NUMBER et MAX_NUMBER inclus
function generateRandomNumber() {
    return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
}

// Fonction pour vérifier si le nombre est gagnant
function isWinner(guess, mysteryNumber) {
    return guess === mysteryNumber; // Vérifie si le nombre deviné est égal au numéro mystère
}

// Fonction pour donner un indice (plus ou moins) par rapport au nombre mystère
function getHint(guess, mysteryNumber) {
    if (guess < mysteryNumber) {
        return "Le nombre mystère est plus grand.";
    } else {
        return "Le nombre mystère est plus petit.";
    }
}

// Fonction pour jouer une partie
function playGame() {
    let attempts = 0; // Initialise le nombre d'essais à 0
    let mysteryNumber = generateRandomNumber(); // Génère le nombre mystère initial

    console.log("Numéro mystère à deviner :", mysteryNumber); // Affiche le numéro mystère à deviner

    // Fonction récursive pour gérer les tentatives
    function makeAttempt() {
        const userGuess = generateRandomNumber(); // Génère le nombre proposé par l'utilisateur
        attempts++; // Incrémente le nombre d'essais

        // Affiche le nombre généré pour cette tentative
        console.log(`Tentative ${attempts} : ${userGuess}`);

        // Vérifie si le nombre deviné est correct
        if (isWinner(userGuess, mysteryNumber)) {
            console.log(`Félicitations ! Vous avez deviné le numéro mystère ${mysteryNumber} en ${attempts} essais.`);
            return attempts; // Retourne le nombre d'essais
        } else {
            // Si le nombre deviné n'est pas correct
            if (attempts === MAX_ATTEMPTS) {
                console.log(`Désolé, vous n'avez pas deviné le numéro mystère (${mysteryNumber}).`);
                return -1; // Indique que le joueur a perdu
            } else {
                return makeAttempt(); // Fait une nouvelle tentative
            }
        }
    }

    return makeAttempt(); // Démarre le jeu
}

// Fonction pour jouer plusieurs parties jusqu'à ce que le joueur gagne
function playMultipleGames() {
    let totalGamesPlayed = 0; // Initialise le nombre total de parties jouées à 0

    while (true) {
        totalGamesPlayed++; // Incrémente le nombre total de parties jouées
        console.log(`Partie ${totalGamesPlayed} en cours...`);
        const attemptsToWin = playGame(); // Joue une partie

        // Vérifie si le joueur a gagné ou a décidé d'arrêter
        if (attemptsToWin !== -1) {
            console.log(`Partie gagnée en ${attemptsToWin} essais !`);
            console.log(`Nombre total de parties jouées jusqu'à la victoire : ${totalGamesPlayed}`);
            break; // Sort de la boucle si le joueur a gagné
        } else {
            console.log("Partie perdue. Nouvelle partie en cours...");
        }
    }
}

// Appelle la fonction pour jouer plusieurs parties jusqu'à ce que le joueur gagne
playMultipleGames();

























//Genere le numero mystere grace au mysteryNumber qui se trouve dans config
//Selon le nombre d'essais, on va incrementer dans attempt
//on va comparer pour attempt avec le numero mystere(si c'est gagnant et indiquer lorqu'il n'est pas gagnant)
// si on gagne on affiche le numero mystere , est l'on affcihe le nombre d'essais, dans le cas contraire , afficher 
