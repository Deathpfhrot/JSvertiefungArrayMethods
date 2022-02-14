// Übung lev1_1: Arrays

let adresse = [
    'Elkan-Naumburg-Straße 23',
    '91757',
    'Treuchtlingen',
    'Bayern'
]
let bestFriends = [
    'Robert',
    'Domenik',
    'Ralf'
]

let person = [
    'Markus',
    'Schiller',
    'Simon',
    29,
    'Video-Gaming',
    'Treuchtlingen',
    'SuperCode'
]

console.log(adresse, bestFriends, person);

person.push(adresse, bestFriends)   
console.log(person);
console.log('This is where is live:' + person[7][2]);
console.log('This is on of my good friends' + person[8][0]);


//-------------lev1_1_2: Arrays Length

console.log("%c -------------lev1_1_2: Arrays lenght-------------", "color: yellow;");

console.log(person.length); // + 2 Arrays
console.log(bestFriends.length);
console.log(adresse.length);


//-------------lev1_2: Arrays 3 Möglichkeiten

console.log("%c -------------lev1_2: Arrays 3 Möglichkeiten-------------", "color: yellow;");

let meineTrainer1 = [
    'Erice',
    'Steffen',
    'Simon',
    'Ahmed'
]

console.log(meineTrainer1);


let meineTrainer2 = new Array("Eric", "Steffen", "Simon", "Ahmed");
console.log(meineTrainer2);

let meineTrainer3 = new Array();
meineTrainer3[0] = "Eric";
meineTrainer3[1] = "Steffen";
meineTrainer3[2] = "Simon";
meineTrainer3[3] = "Ahmed";
console.log(meineTrainer3);

//-------------lev1_3: Arrays index

console.log("%c -------------lev1_3: Arrays Index-------------", "color: yellow;");

let numberArray = [
    5,
    6,
    7,
    8,
    9,
    10
]

console.log(numberArray);
console.log(numberArray[4]);
console.log(numberArray[0]);
console.log(numberArray[5]);


//-------------lev1_4: Arrays Split()

console.log("%c -------------lev1_4: Arrays Split()-------------", "color: yellow;");

let meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag" 
let meinText2 = "Wie geht es dir heute?"
let meinText3 = "Heute ist ein großer Tag für uns."

let split1 = meinText1.split();
let split2 = meinText1.split("");
let split3 = meinText1.split(" ");

console.log(split1); // wandelt den satz in ein Array um
console.log(split2); // fügt jedem buchstaben ein "" hinzu
console.log(split3); // füght jedem wort mit " " ein anführungzeichen hinzu

let split4 = meinText2.split();
let split5 = meinText2.split("");
let split6 = meinText3.split(" ");

console.log(split4);
console.log(split5);
console.log(split6);

//-------------lev1_5: Arrays push()

console.log("%c -------------lev1_5: Arrays push()-------------", "color: yellow;");

let songs = ['Bohemian Thapsody', 'Stairway to Heaven', 'Hotel California']

let totalSongs = songs.push("SweetChild O'Mine");
console.log(totalSongs);
console.log(songs);

let besteFussballerAllerZeiten = [
    'Klose',
    'Müller',
    'Schweinsteiger',
    'Ronaldino',
    'Ballack',
]

besteFussballerAllerZeiten.push('Torhüter1',
'Torhüter2',
'Torhüter3');

console.log(besteFussballerAllerZeiten);

songs.push('Schlager', 'trompetangaudi', 'bockwurstsemmellaspoil')
console.log(songs);

besteFussballerAllerZeiten.push('JOGI LÖW', 'ES GIBT NUR EIN RUDI FÖLLER', 'The vice Presiden of WC')
console.log(besteFussballerAllerZeiten);

//-------------lev1_5_2: push() arrays in array

console.log("%c -------------lev1_5_2: push() arrays in array-------------", "color: yellow;");

let heroUndEnemy = [['Batman', 'The Joker'],['Professor X', 'Magneto'], ['Thor', 'Loki']];
console.log(heroUndEnemy);

heroUndEnemy.push(['Dr.Sivana', 'Captain Marvel'])
console.log(heroUndEnemy);

heroUndEnemy.push(['Merlyn', 'Green Arrow'],['Killer Shark', 'Blackhawk'])

console.log(heroUndEnemy);


//-------------lev1_6: Arrays pop()

console.log("%c -------------lev1_6: Arrays pop()-------------", "color: yellow;");

console.log(totalSongs);
console.log(songs);

let entfernterSong = songs.pop();
console.log(entfernterSong);
console.log(totalSongs);


console.log(besteFussballerAllerZeiten);
let letzerEntfernet = besteFussballerAllerZeiten.pop() 
console.log(besteFussballerAllerZeiten);
console.log(letzerEntfernet);
besteFussballerAllerZeiten.pop()
besteFussballerAllerZeiten.pop()
besteFussballerAllerZeiten.pop()
besteFussballerAllerZeiten.pop()

console.log(besteFussballerAllerZeiten);

// wenn mehrere entfernet werden wollen würden müsste man splice verwenden / glaube nicht as mit pop([]) mehrere gelöscht werden können???

//-------------lev1_7: Arrays unshift()

console.log("%c -------------lev1_7: Arrays unshift()-------------", "color: yellow;");

let deutscheGerichte = ['Speckkuchen', 'Thüringer Rostbratwurst', 'Quarkkeulchen', 'Sauerbraten']

deutscheGerichte.unshift('Bratkartoffeln','Schweinehaxen','Nürnbergerwürstchen')
console.log(deutscheGerichte);

//-------------lev1_8: Arrays shift()

console.log("%c -------------lev1_8: Arrays shift()-------------", "color: yellow;");


console.log(deutscheGerichte);
let nichtgut = deutscheGerichte.shift();
nichtgut = deutscheGerichte.shift();
nichtgut = deutscheGerichte.shift();

// oder sollten man mit arrays drauf zugreifen???

console.log(nichtgut);

console.log(deutscheGerichte);

//-------------lev1_9: Push Pop Shift Unshift Difference

console.log("%c -------------lev1_9: Push Pop Shift Unshift Difference-------------", "color: yellow;");

// In jedem dieser Paare (Push/Pop und Unshift/Shift) macht das längere wort das Array länger. :D


let zahlen = [23, 54, 75];

zahlen.push(23, 4, 1992)
console.log(zahlen);

zahlen.unshift(9,1,7,5,7)
console.log(zahlen);

zahlen.pop()
zahlen.pop()
console.log(zahlen);

zahlen.shift()
zahlen.shift()
console.log(zahlen);

//-------------lev1_10: Arrays delte with splice()

console.log("%c -------------lev1_10: Arrays delete with Splice-------------", "color: yellow;");

// Array.splice(index, Anzahl der Elemente)

let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];

let delImg1 = array.splice(4,4)
console.log(delImg1);
console.log(array);

let delImg2 = array.splice(6,5)
console.log(delImg2);
console.log(array);

// array.splice(index); //Jedes Element, das ab Index 2 beginnt, wird entfernt

let delImg3 = array.splice(2)
console.log(delImg3);
console.log(array);


//-------------lev1_11: Arrays splice()

console.log("%c -------------lev1_11: Arrays splice()-------------", "color: yellow;");

// array.splice(index, Anzahl der zu löschenden Elmente, was hinzugegt werden soll von Elementen, Elment , ... ,)

var array1 = [ "imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg" ];

array1.splice(2, 0, "imageTeilnehmer008supercode.jpg","imageTeilnehmer009supercode.jpg","imageTeilnehmer010supercode.jpg")

console.log(array1);

array1.splice(5, 0,"imageTeilnehmer014supercode.jpg","imageTeilnehmer015supercode.jpg","imageTeilnehmer016supercode.jpg","imageTeilnehmer017supercode.jpg","imageTeilnehmer018supercode.jpg","imageTeilnehmer019supercode.jpg")

console.log(array1);

array1.splice(2,0,"imageTeilnehmer002supercode.jpg","imageTeilnehmer003supercode.jpg","imageTeilnehmer004supercode.jpg","imageTeilnehmer005supercode.jpg","imageTeilnehmer006supercode.jpg","imageTeilnehmer007supercode.jpg");

console.log(array1);

array1.splice(11,0,"imageTeilnehmer011supercode.jpg","imageTeilnehmer012supercode.jpg","imageTeilnehmer013supercode.jpg")
console.log(array1);

//-------------lev1_12: Arrays slice() komplet neuer begriff lol

console.log("%c -------------lev1_12: arrays slice()-------------", "color: yellow;");

//array.slice(0,until);

let until = 6

let newesArray = array1.slice(3, until);
console.log(newesArray);

array1.splice(3,3)
console.log(array1);


let array3 = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];


let copyImg1 = array3.slice(7, 15)
console.log(copyImg1);

let copyImg2 = array3.slice(6, 12)
console.log(copyImg2);
