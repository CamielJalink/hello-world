// Code to change the colors on the navbar to show which subpage you are on.
var allNavbarLinks = document.querySelectorAll(".navbar-link");

for(var i = 0; i < allNavbarLinks.length; i++){
	
	if(allNavbarLinks[i].href == window.location.href){
		allNavbarLinks[i].classList.add("navbar-link-selected");
	}
}



// Document objects for the abstract functionality
var allAbstracts = document.querySelectorAll(".abstract");
var allAbstractIcons = document.querySelectorAll(".abstractIcon");
var allAbstractTexts = document.querySelectorAll(".abstractTextHidden");

// Code linking abstract icon and abstract test-button together. 
for(var i = 0; i < allAbstracts.length; i++){
	allAbstracts[i].abstractNumber = i;
	allAbstracts[i].addEventListener("click", abstractClicked);
}


// Abstract eventhandler for showing and hiding the abstracts.
function abstractClicked(){
	var icon = allAbstractIcons[this.abstractNumber];
	var text = allAbstractTexts[this.abstractNumber];

  icon.classList.toggle("fa-angle-right");
	icon.classList.toggle("fa-angle-down");
	text.classList.toggle("abstractTextHidden");
	text.classList.toggle("abstractTextVisible");
}



// The following script handles the inserting of Yfke's email adress after rendering the page.
var emailLocation = document.querySelector("#emailLocation");

if(!!emailLocation){
	var address = "dulek";
	address = address + "@cwi.nl";
	var mailToAddress = "mailto:" + address;
	
	var mailAnchor = document.createElement("a");
	mailAnchor.setAttribute("href", mailToAddress);
	mailAnchor.textContent = address;
	
	emailLocation.appendChild(mailAnchor);
}









// Some 'hidden' code, if you catch my drift.

var hiddenPassword1 = "m8Ri3";
var hiddenPassword2 = "JGVGLBSL";
var hiddenPassword3 = "MonkeyBusiness"
var hiddenPassword4 = "Yfke4Ever?"
var hiddenAnswer1 = "Hoi Dr. D! Het is je gelukt om de eerste code te vinden! Gewapend met deze code heb ik een bericht naar het verleden weten te sturen in een poging om de dynamiek tussen jou en Alvero te veranderen zodat hij nooit voor zichzelf zal beginnen. Echter, het lijkt erop dat dit bericht nog niet genoeg was. We zullen een extra temporele code nodig hebben om het nog eens te proberen. Met de tijdmachine hier weet ik dat de volgende temporele code zal opdoen in het weekend van mei op juni, maar helaas wel helemaal in Fontaine Bleau! Succes Dr. Dulek, ik geloof in je!   -Claire";
var hiddenAnswer2 = "Hi Dr. D! De tweede temporele code is goed aangekomen en leek het gewenste effect te bereiken: Alvero de Wrede is nooit voor zichzelf begonnen en heeft jou zelfs geholpen bij het ontwikkelen van je tijdsmachine! Helaas is tot mijn grote spijt de tijdslijn op een andere manier verstoord die ik niet had voorzien: Dr. Tom heeft in een hard-om-hard potje D&D het eigenaarsschap van de tijdmachines van Alvero gewonnen! In plaats van een wreed regime heeft Tom zijn tijdmachines gebruikt om vrouwen-mode te manipuleren zodat iedereen alleen nog maar veel te korte rokjes draagt, het is vreselijk! Help ons Dr. D! De volgende temporele code zal zich eind juni begin juli voordoen, en wel in de Apenheul!";
var hiddenAnswer3 = "Dr D, je vraagt je misschien af hoe de temporele code van je dagje apenheul heeft bijgedragen aan het oplossen van de tijdslijn. De waarheid is dat de apenheul het enige is dat Dr. Tom leuker vond dan minirokjes! Helaas is de apenheul op enkele euro's na falliet gegaan in onze tijd! Door informatie over de apenheul te verzamelen hebben wij met de temporele code hen een succesvollere formule toegestuurd: Aapjes met minirokjes! De laatste temporele code zal zich tijdens je vakantie voordoen. Succes!";
var hiddenAnswer4 = "Lieve Dr. D. Zojuist kwam jouw toekomstige zelf, weer volledig levend dus, binnengelopen met de vraag waarom mijn paper nog niet op haar bureau ligt! Je leeft weer in mijn tijd, dus, de vierde temporele code is succesvol ingestuurd! Hoera! Helaas betekent dit wel dat jij en ik geen contact meer met elkaar zullen hebben, tot dat ik over enkele jaren geboren zal worden. Niet getreurd: we zullen een hoop samen lachen! Nu de toekomst van de wereld veilig is, rest je nog 1 enkele beslissing te maken die van grote invloed gaat zijn op JOUW toekomst. Veel wijsheid toegewenst!   -Claire";
var hiddenButton = document.querySelector("#hiddenButton");

if(!!hiddenButton){
	hiddenButton.addEventListener("click", checkPassword);
}


function checkPassword(){
	var input = document.querySelector("#hiddenInput").value;
	var hiddenAnswerDiv = document.querySelector("#hiddenAnswerDiv");
	
	if(input == hiddenPassword1){
		hiddenAnswerDiv.classList.remove("hideAnswerDiv");
		document.querySelector("#hiddenAnswerText").innerHTML = hiddenAnswer1;
	} else if (input == hiddenPassword2){
		hiddenAnswerDiv.classList.remove("hideAnswerDiv");
		document.querySelector("#hiddenAnswerText").innerHTML = hiddenAnswer2;
	} else if (input == hiddenPassword3){
		hiddenAnswerDiv.classList.remove("hideAnswerDiv");
		document.querySelector("#hiddenAnswerText").innerHTML = hiddenAnswer3;
	}	else if (input == hiddenPassword4){
		hiddenAnswerDiv.classList.remove("hideAnswerDiv");		
		document.querySelector("#hiddenAnswerText").innerHTML = hiddenAnswer4;
	} else{
		hiddenAnswerDiv.classList.add("hideAnswerDiv");
	}
}