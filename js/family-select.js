var s1 = "image-1";
var s2 = "description-1";
var s3 = "image-2";
var s4 = "description-2";
var s5 = "image-3";
var s6 = "description-3";
var s7 = "image-4";
var s8 = "description-4";
var s9 = "image-5";
var s10 = "description-5";

/*
		document.getElementById(s1).src = "../img/transparent.gif";
		document.getElementById(s2).innerHTML = "<b></b> (<i></i>)<br>";
		document.getElementById(s3).src = "../img/transparent.gif";
		document.getElementById(s4).innerHTML = "<b></b> (<i></i>)<br>";
		document.getElementById(s5).src = "../img/transparent.gif";
		document.getElementById(s6).innerHTML = "<b></b> (<i></i>)<br>";
		document.getElementById(s7).src = "../img/transparent.gif";
		document.getElementById(s8).innerHTML = "<b></b> (<i></i>)<br>";
		document.getElementById(s9).src = "../img/transparent.gif";
		document.getElementById(s10).innerHTML = "<b></b> (<i></i>)<br>";
*/

function show(name) {
	if (name == 'canidae') {
		document.getElementById(s1).src = "../img/carnivora/coyote-1.jpg";
		document.getElementById(s2).innerHTML = "<b>Coyote</b> (<i>Canis latrans</i>)<br>Abundant throughout North America, the coyote is a versatile medium-sized (~15-45 lb.) canine with a low risk of extinction.<br>Coyotes live in packs but prefer to hunt alone, acting as a mesopredator that eat smaller animals.<br>They are common characters within Native American folklore, often depicted as a trickster.<br>However, they are currently seen as a pest by many and are thus targets of sport hunters and farmers.";
		document.getElementById(s3).src = "../img/carnivora/wolf-1.jpg";
		document.getElementById(s4).innerHTML = "<b>Gray Wolf</b> (<i>Canis lupis</i>)<br>A fervent hunter, the grey wolf is the largest extant member (~80-90 lb.) of the <b>canidae</b> family.<br>They live and hunt in packs, prefering to attack large prey.";
		document.getElementById(s5).src = "../img/carnivora/red-fox-1.png";
		document.getElementById(s6).innerHTML = "<b>Red fox</b> (<i>Vulpes vulpes</i>)<br>The largest of the foxes (~5-31 lb.), the red fox is an extremely widely distributed species of the <b>carnivora</b> order.<br>They feed primarily on small rodents but can also hunt larger lagomorphs (i.e. rabbits) and ungulates (i.e. deer).<br>Red foxes are often viewed as a pest due to either their thriving population or their danger to native wildlife or both.";
		document.getElementById(s7).src = "../img/carnivora/gray-fox-1.jpg";
		document.getElementById(s8).innerHTML = "<b>Gray fox</b> (<i>Urocyon cinereoargenteus</i>)<br>Once the most common fox on the eastern seaboard, the grey fox is a small (~8-16 lb.) omnivorous canine.<br>They eat primarily lagomorphs (i.e. rabbits) and insectivores (i.e. shrews), but also rely on nutrition from fruits.<br>Their ability to climb trees helps them escape predators such as the coyote and dog.";
		document.getElementById(s9).src = "../img/transparent.gif";
		document.getElementById(s10).innerHTML = "";
	}

	if (name == 'felidae') {
		document.getElementById(s1).src = "../img/carnivora/cougar-1.jpg";
		document.getElementById(s2).innerHTML = "<b>Cougar, Puma, Mountain lion</b> (<i>Puma concolor</i>)<br>A fierce ambush predator, the cougar is a large feline (~60-220 lb.) that feeds primarily on ungulates (i.e. deer).<br>They prefer habitats that aid their stalking such as areas with dense underbrush and rocky areas.";
		document.getElementById(s3).src = "../img/carnivora/lynx-1.jpg";
		document.getElementById(s4).innerHTML = "<b>Canada lynx</b> (<i>Lynx canadensis</i>)<br>A medium-sized specialist predator (~11-37 lb.), the lynx hunts primarily snowshoe hares for food.<br>They live in dense boreal forests, where showshoe hares tend to live.";
		document.getElementById(s5).src = "../img/carnivora/bobcat-1.jpg";
		document.getElementById(s6).innerHTML = "<b>Bobcat</b> (<i>Lynx rufus</i>)<br>A medium-sized hunter (~15-21 lb.), the bobcat eats primarily lagomorphs, rodents, and deer.";
		document.getElementById(s7).src = "../img/transparent.gif";
		document.getElementById(s8).innerHTML = "";
		document.getElementById(s9).src = "../img/transparent.gif";
		document.getElementById(s10).innerHTML = "";
	}

	if (name == 'mustelidae') {
		document.getElementById(s1).src = "../img/carnivora/marten-1.jpg";
		document.getElementById(s2).innerHTML = "<b>American pine marten</b> (<i>Martes americana</i>)<br>Widely distributed throughout the upper-half of the continent, the American pine marten is a slender weasel (~1-3 lb.) whose diet ranges widely based on local and seasonal factors.";
		document.getElementById(s3).src = "../img/carnivora/wolverine-1.jpg";
		document.getElementById(s4).innerHTML = "<b>Wolverine</b> (<i>Gulo gulo</i>)<br>The largest land-based mustelid (~12-55 lb.), the wolverine is a scavenger that feeds on primarily small to medium-sized mammals.";
		document.getElementById(s5).src = "../img/carnivora/stoat-1.jpg";
		document.getElementById(s6).innerHTML = "<b>Stoat, Short-tailed weasel</b> (<i>Mustela erminea</i>)<br>A very small carnivore (~6-9 oz.), the stoat feeds primarily on rodents and lagomorphs.";
		document.getElementById(s7).src = "../img/carnivora/otter-1.jpg";
		document.getElementById(s8).innerHTML = "<b>North American river otter</b> (<i>Lontra canadensis</i>)<br>A versatile swimmer, the river otter is a medium carnivore (~10-30 lb.) that eat primarily fish and smaller water-dwelling species (i.e. amphibians, clams, turtles, etc.).";
		document.getElementById(s9).src = "../img/transparent.gif";
		document.getElementById(s10).innerHTML = "";
	}

	if (name == 'procyonidae') {
		document.getElementById(s1).src = "../img/carnivora/raccoon-1.jpg";
		document.getElementById(s2).innerHTML = "<b>Common raccoon</b> (<i>Procyon lotor</i>)<br>The largest of the procyonid family, the raccoon is a medium-sized (~11-57 lb.) mammal that is native to the North American continent.<br>They are nocturnal omnivores, consuming a fairly even distribution of invertebrates, plants, and vertebrates.";
		document.getElementById(s3).src = "../img/transparent.gif";
		document.getElementById(s4).innerHTML = "";
		document.getElementById(s5).src = "../img/transparent.gif";
		document.getElementById(s6).innerHTML = "";
		document.getElementById(s7).src = "../img/transparent.gif";
		document.getElementById(s8).innerHTML = "";
		document.getElementById(s9).src = "../img/transparent.gif";
		document.getElementById(s10).innerHTML = "";
	}

	if (name == 'ursidae') {
		document.getElementById(s1).src = "../img/carnivora/black-bear-1.jpg";
		document.getElementById(s2).innerHTML = "<b>American black bear</b> (<i>Ursus americanus</i>)<br>The smallest (~90-550 lb.) and most widely-distributed of all North American bears, the American black bear is an omnivorous carnivore that are usually found in forested areas.<br>They are the most common bear species throughout the entire world.";
		document.getElementById(s3).src = "../img/transparent.gif";
		document.getElementById(s4).innerHTML = "";
		document.getElementById(s5).src = "../img/transparent.gif";
		document.getElementById(s6).innerHTML = "";
		document.getElementById(s7).src = "../img/transparent.gif";
		document.getElementById(s8).innerHTML = "";
		document.getElementById(s9).src = "../img/transparent.gif";
		document.getElementById(s10).innerHTML = "";
	}
}