// TODO: Completer la fonction afficherTableMultiplication pour initialiser un tableau a deux dimensions et remplir
// une table de multiplication
function afficherTableMultiplication()
{
  // Recuperer le nombre de lignes dans une variable du champ HTML lignes

  // Recuperer le nombre de colonnes dans une variable du champ HTML colonnes

  // Initialiser un tableau vide qu'on appeler matrice, un tableau a deux dimensions

  // Creer la table de multiplication en parcourant les lignes

    // Dans la boucle des lignes, initialiser la ligne en creant un tableau pour stocker les valeurs de colonnes de la ligne

    // Parcourir les colonnes et stocker la multiplication correspondant a cette ligne et cette colonne

 
  // Appeler la fonction afficherMatrice qui affiche le tableau a deux dimensions dans l'HTML
  afficherMatrice(matrice);
};

// Fonction afficherMatrice qui affiche le tableau a deux dimensions dans l'HTML
function afficherMatrice(matrice)
{
  var output = "<table border='1' width='500' cellspacing='0' cellpadding='5'>";
  for(i = 1; i < matrice.length; i++)
  {
    output = output + "<tr>";
    for(j = 1; j < matrice[i].length; j++)
    {
      output = output + "<td>" + matrice[i][j] + "</td>";
    }
    output = output + "</tr>";
  }
  output = output + "</table>";
  document.getElementById("table-multiplication-resultat").innerHTML = output;
}


