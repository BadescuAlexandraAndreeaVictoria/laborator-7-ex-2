// se apeleaza functiile
function changeProfile() {

	NameToJob();
	educationToAchievements();
	oldToNewImage();
	changeBodyBackgroundColor();
}
// se inlocuieste numele cu locul de munca visat dupa terminarea facultati
function NameToJob() {
	document.getElementById("NumePrenume").innerHTML = "System Solution Engineer for (e-)Mobility (Cloud) Solutions";
}
// tabelul de educatie se inlocuieste cu alte realizări sau experiențe ideal de obținut in perioada facultăți
 
function educationToAchievements() {
	
	var r1 = document.getElementById("realizare_r1");
	var p1 = document.getElementById("perioada_r1");
	var l1 = document.getElementById("link_r1");
	r1.innerHTML = "practica";
	p1.innerHTML = "01.06.2026-24.09.2026";
	l1.innerHTML = "https://apply.workable.com/garmin-cluj/?not_found=true";
	var r2 = document.getElementById("realizare_r2");
	var p2 = document.getElementById("perioada_r2");
	var l2 = document.getElementById("link_r2");
	r2.innerHTML = "Internship";
	p2.innerHTML = "20.05.2025";
	l2.innerHTML = "https://jobs.smartrecruiters.com/BoschGroup/743999865989641-working-student-tef7-cljp?trid=5ca12582-477f-422c-9efb-2f752450cb38";
	var r3 = document.getElementById("realizare_r3");
	var p3 = document.getElementById("perioada_r3");
	var l3 = document.getElementById("link_r3");
	r3.innerHTML = "Work & Travel";
	p3.innerHTML = "01.06.2023-24.09.2023";
	l3.innerHTML = "https://www.studenttravel.ro/";
}
//se schimba poza care era inainte
function oldToNewImage() {
	var img = document.getElementById("pozadeprofil");
	img.src = "poza2.jpg";
	img.style.opacity= 0.95;
	img.style.borderWidth = '10px';
    img.style.borderStyle= 'solid';
    img.style.borderColor= '#78a6de';
	img.style.right='100px';
}
// schimbare background
function changeBodyBackgroundColor() {
	var body = document.getElementById("body");
	body.style.backgroundColor= "#b07287";
	body.style.fontFamily="Verdana";
	
}
				//EXERCITIU 2
// apelarea functilor
function AddNewItem() {
	
	addBirthDate();
	createEmailTextBox();
}
//
function addBirthDate() {
	var tag = document.createElement("h3");
	tag.id = "date-years";
	var text = document.createTextNode("15-11-2003");
	var element = document.getElementById("birthdate");
	tag.appendChild(text);
	element.appendChild(tag);
	document.getElementById("birthdate").addEventListener("mouseover", birthToYears);
	document.getElementById("birthdate").addEventListener("mouseout", handleMouseOut);
}
// se schimba data nasterii in varsta
function birthToYears() {
	var currentTime = new Date();
	var vv = document.getElementById("date-years");
	var year = currentTime.getFullYear()
	var numYears = Number(year) - Number(vv.innerHTML.slice(-4));
	vv.innerHTML = "Varsta: " + numYears;
}
//aparitia textului se face „onmouseover”

function handleMouseOut() {
		document.getElementById("date-years").innerHTML = '15-11-2003';
	}
			// punctul 2
// creare boc pentru email
function createEmailTextBox() {
	var input = document.createElement("input");
	input.type = "email";
	input.id = "email-box";
	input.value = "abc@xyz.com";
	input.style.width = "300px";
	input.addEventListener("mouseover", validateEmail);
	document.getElementById("birthdate").appendChild(input);
}
// functie pentru verificarea emailului introdus
function validateEmail() {
	var input = document.getElementById("email-box");
  	var validRegex = /^\S+@\S+\.\S+$/;
  	if (input.value.match(validRegex)) {
  		console.log("Valid email address!");

  	} else {
    	alert("Invalid email address!");
  	}
}