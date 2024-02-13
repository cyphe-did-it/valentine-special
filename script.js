

var messages = ["Hindi ka naman talaga mahal.", "Ginamit ka lang.", "Pampalipas Oras.",
	 			"Sure ka nanga, pero sure ba sya?", "What if hindi ikaw yung soulmate niya?",
	 			"Di mo deserve ng jowa.", "May nagbibigay na sa kanya ng flowers.",
	 			"Hindi lang ikaw yung ka-chat", "Di niya kinain yung bigay mong Superstix.",
	 			"Mainit yung upuan ng motor, kasi hindi ikaw ang unang hinatid.",
	 			"Mahal mo ba talaga? O minahal mo lang kasi naawa ka?",
	 			"Naawa lang siya sayo.", "Pansin mo rin no? Parang ikaw nalang yung nag-eeffort."];

document.getElementById("open-popup-btn").addEventListener("click", function() {

	var randomIndex = Math.floor(Math.random() * messages.length);
	var randomMessage = messages[randomIndex];

	// display the random message:
	var popupDescription = document.getElementById("popup-description");
	popupDescription.textContent = randomMessage;


	document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-popup-btn").addEventListener("click", function() {
	document.getElementsByClassName("popup")[0].classList.remove("active");
});
