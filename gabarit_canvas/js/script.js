window.addEventListener("load", setup);

var Largeur_du_canvas = 500;
var Hauteur_du_canvas = 500;
var Couleur_arrierePlan = "white";

function setup() {
    // récupération du canvas dans le DOM
    var Canvas = document.getElementById("Canvas");

    // Attribution de la taille et de la hauteur, et couleur d'arrière plan
    Canvas.width = Largeur_du_canvas;
    Canvas.height = Hauteur_du_canvas;
    Canvas.style.backgroundColor = Couleur_arrierePlan;

    // Si l'on préfère que le canvas s'adapte à la taille de la fenêtre:
    // 
    //  window.onresize = function() {
    //     Canvas.width = window.innerWidth;
    //     Canvas.height = window.innerHeight;
    //     Canvas.ratio = Canvas.width < Canvas.height ? Canvas.width : Canvas.height;
    // };
    // window.onresize();

    // Attribution du contexte, souvent abrégé en ctx
    var ctx = Canvas.getContext("2d");

    // Les étapes dans l'ordre:
    // 0. Sauvegarder l’ état du canvas comme tel
    ctx.save();

    // 1. Le tracé commence
    ctx.beginPath();

    // 2. Paramétrages annexes
    ctx.fillStyle = "red";

    // 3. Tracé d’ une forme
    var LargeurCarre = 50;
    var HauteurCarre = 50;
    ctx.fillRect(Largeur_du_canvas / 2, Hauteur_du_canvas / 2, LargeurCarre, HauteurCarre);

    // 4. Fin du tracé
    ctx.closePath();

    // 5. Restaurer le canvas comme avant, pour recommencer un nouveau tracé sans avoir d’ influences par le précédent
    ctx.restore();

    // Dessin d'un carré via une classe
    // 
    // var Carre1 = new Carre(Largeur_du_canvas / 2, Hauteur_du_canvas / 2, 50, 50, "red");
    // Carre1.draw();

}