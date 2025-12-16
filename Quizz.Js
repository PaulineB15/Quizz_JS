
// ----------------------------------------------------
// 1. DÉCLARATION DES DONNÉES ET VARIABLES
// ----------------------------------------------------


// Tableau des réponses pour chaque questions (l'index 0 correspond à la question 1 ect.)
const correctAnswers = [
    false, // Q1. (Faux)
    true,  // Q2. (Vrai)
    true,  // Q3. (Vrai)
    false, // Q4. (Faux)
    true,  // Q5. (Vrai)
    false, // Q6. (Faux)
    true,  // Q7. (Vrai)
    true,  // Q8. (Vrai)
    true,  // Q9. (Vrai)
    true   // Q10. (Vrai)
];

// Variable pour suivre le score de l'utilisateur (déclarée avec 'let' car elle va changer)
let score = 0;

// Récupère l'id dans le HTML pour afficher le score final
const scoreDisplay = document.getElementById('final-score');

// Récupère TOUS les boutons "Vrai" et "Faux" dans le HTML
const buttonsResponse = document.querySelectorAll('.reponse_btn');




// ----------------------------------------------------
// 2. CONFIGURATION ET VALIDATION DU QUIZZ
// ----------------------------------------------------

// Boucle sur chaque bouton afin de leur attacher le bruit du clic
buttonsResponse.forEach(button => {
    button.addEventListener('click', (e) => {

        // --- ÉTAPE A : PRÉPARATION DE LA RÉPONSE UTILISATEUR ---

        // Récupère le texte du bouton cliqué (e.target est le bouton)
        const userAnswerText = e.target.textContent;

        // Transforme le texte ("Vrai" ou "Faux") en booléen (true ou false).
        //Déclaration et assignation se font en une seule ligne!.
        const userAnswerBoolean = (userAnswerText === "Vrai");
        // C'est un raccourci de la structure if/else:
        // if (userAnswerText === "Vrai") {
        // userAnswerBoolean = true;
        // } else {
        // userAnswerBoolean = false;}


        // --- ÉTAPE B : TROUVER L'INDEX(0 à 9) DE LA QUESTION ET SAVOIR LAQUELlE A ETE CLIQUEE---

        // Déclarer et trouver Le parent immédiat du bouton est le <li> (la question elle-même)
        const questionItem = e.target.parentElement;

        // Récupérer toutes les questions (tous les <li> pour avoir la liste complète)
        const allQuestions = document.querySelectorAll('.quizz-container li');

        // Calculer la position (index 0 à 9) du <li> cliqué dans la liste complète
        const questionIndex = Array.from(allQuestions).indexOf(questionItem);


        // --- ÉTAPE C : RESULTAT ET AFFICHAGE FINAL ---

        if (userAnswerBoolean === correctAnswers[questionIndex]) {
            // Réponse correcte: le bouton s'affiche en vert
            score += 1;
            e.target.style.background = "green";
        } else {
            // Réponse fausse: le bouton s'affiche en rouge
            e.target.style.background = "red";
        }
        // Afficher le nombre total de bonnes réponses
        scoreDisplay.textContent = `Score final  ${score}/10`;

        // Verrouillage de la question : désactivation des deux boutons
         const buttonsToDisable = questionItem.querySelectorAll('.reponse_btn');
              buttonsToDisable.forEach(button => {
              // Rendre chaque bouton non-cliquable
              button.disabled = true;
         });


    }); // Fin de l'événement de clic
}); // Fin de la boucle forEach























































