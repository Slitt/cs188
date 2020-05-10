// document.getElementById(id).style.property = "value";

function show(name) {
	if (name == 'carnivora') {
		document.getElementById(name).innerHTML = "CARNIVORES<br><b>CARNIVORA</b>";
	}

	if (name == 'soricomorpha') {
		document.getElementById(name).innerHTML = "INSECTIVORES<br><b>SORICOMORPHA</b>";
	}

	if (name == 'cetartiodactyla') {
		document.getElementById(name).innerHTML = "UNGULATES<br><b>CETARTIODACTYLA</b>";
	}

	if (name == 'marsupialia') {
		document.getElementById(name).innerHTML = "MARSUPIALS<br><b>MARSUPIALIA</b>";
	}

	if (name == 'chiroptera') {
		document.getElementById(name).innerHTML = "BATS<br><b>CHIROPTERA</b>";
	}

	if (name == 'sirenia') {
		document.getElementById(name).innerHTML = "MANATEES<br><b>SIRENIA</b>";
	}

	if (name == 'rodentia') {
		document.getElementById(name).innerHTML = "RODENTS<br><b>RODENTIA</b>";
	}

	if (name == 'lagomorpha') {
		document.getElementById(name).innerHTML = "LAGOMORPHS<br><b>LAGOMORPHA</b>";
	}
}

function hide(name) {
	if (name == 'carnivora') {
		document.getElementById(name).innerHTML = "CARNIVORES";
	}

	if (name == 'soricomorpha') {
		document.getElementById(name).innerHTML = "INSECTIVORES";
	}

	if (name == 'cetartiodactyla') {
		document.getElementById(name).innerHTML = "UNGULATES";
	}

	if (name == 'marsupialia') {
		document.getElementById(name).innerHTML = "MARSUPIALS";
	}

	if (name == 'chiroptera') {
		document.getElementById(name).innerHTML = "BATS";
	}

	if (name == 'sirenia') {
		document.getElementById(name).innerHTML = "MANATEES";
	}

	if (name == 'rodentia') {
		document.getElementById(name).innerHTML = "RODENTS";
	}

	if (name == 'lagomorpha') {
		document.getElementById(name).innerHTML = "LAGOMORPHS";
	}
}