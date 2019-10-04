// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

maisons.forEach(maison => {
	var maisonElt = document.createElement("option");
	maisonElt.textContent = maison.nom;
	maisonElt.setAttribute("value", maison.code);
	document.getElementById("maison").appendChild(maisonElt);
});

document.getElementById("maison").addEventListener("change", function(e) {
	var ulElt = document.getElementById("persos");
	ulElt.textContent = "";
	var personnages = getPersonnages(e.target.value);
	for (personnage of personnages) {
		var liElt = document.createElement("li");
		liElt.textContent = personnage;
		ulElt.appendChild(liElt);
	}
});