var densite = document.getElementById("densité");
var elasticite = document.getElementById("élasticité");
var densiteSalee = document.getElementById("densité-salée");
var thermopSalee = document.getElementById("thermop-salée");
var thermop = document.getElementById("thermop");
var typePlastique = document.getElementById("type-plastique");
var reponse = document.getElementById("reponse");
var Oui = function(test) {

  if (test == "densité") {
    densite.style.display = "none";
    elasticite.style.display = "block";
  }
  else if (test == "densité-salée") {
    densiteSalee.style.display = "none";
    typePlastique.textContent = "PS";
    reponse.style.display = "block";
  }
  else if (test == "élasticité") {
    elasticite.style.display = "none";
    thermopSalee.style.display = "block";
  }
  else if (test == "thermop-salée") {
    thermopSalee.style.display = "none";
    typePlastique.textContent = "PEBD";
    reponse.style.display = "block";
  }
  else if (test == "thermop") {
    thermop.style.display = "none";
    typePlastique.textContent = "PET";
    reponse.style.display = "block";
  }

};
var Non = function(test) {

  if (test == "densité") {
    densite.style.display = "none";
    densiteSalee.style.display = "block";
  }
  else if (test == "densité-salée") {
    densiteSalee.style.display = "none";
    thermop.style.display = "block";
  }
  else if (test == "élasticité") {
    elasticite.style.display = "none";
    typePlastique.textContent = "PP";
    reponse.style.display = "block";
  }
  else if (test == "thermop-salée") {
    thermopSalee.style.display = "none";
    typePlastique.textContent = "PEHD";
    reponse.style.display = "block";
  }
  else if (test == "thermop") {
    thermop.style.display = "none";
    typePlastique.textContent = "PVC";
    reponse.style.display = "block";
  }

};