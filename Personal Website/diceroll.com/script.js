var dice_type = null;
var amount_of_dice = null;
dice_type_images = null;
var m = new MersenneTwister();



dice_images = ['dice-1.png','dice-2.png','dice-3.png','dice-4.png','dice-5.png','dice-6.png']
adice_images = ['adice-1.png','adice-2.png','adice-3.png','adice-4.png','adice-5.png','adice-6.png']

tdice_images = ['tdice-1.png','tdice-2.png','tdice-3.png','tdice-4.png']



function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
function onLoad(){
	dice_type = document.getElementById('dice_type').value;

	amount_of_label.innerHTML = 'Amount of ' + dice_type + ' Dice to Roll:';
	amount_of_dice_selector = document.getElementById('amount_of_dice_selector');
	amount_of_dice_selector.value = 1;
	amount_of_dice = amount_of_dice_selector.value;
	
	updateDiceType()

}

function updateDiceType(){
	amount_of_dice_selector.value = 1;
	dice_type = document.getElementById('dice_type').value;
	amount_of_label = document.getElementById('amount_of_label');
	amount_of_label.innerHTML = 'Amount of ' + dice_type + ' Dice to Roll:';
	if(dice_type == 'Classical'){
		dice_type_images = adice_images
	}
	else if(dice_type == 'Tetrahedral'){
		dice_type_images = tdice_images					
	}
	updateDiceAmount()
}

function updateRollDices(){
	diceRolling = document.getElementById('diceRolling')
	while(diceRolling.hasChildNodes()){
		diceRolling.removeChild(diceRolling.firstChild)
	}
	for(i = 1; i <= amount_of_dice; i++){
		img = document.createElement('img')
		img.src = dice_type_images[0]
		img.className = 'diceImage'
		diceRolling.appendChild(img)
	}
}

function updateDiceAmount(){
	amount_of_dice = document.getElementById('amount_of_dice_selector').value;
	updateRollDices()
}

function rollDice(){
	if(amount_of_dice == ''){
		amount_of_dice = '1';	
		amount_of_dice_selector.value = 1;
	}
	a = ' Times';
	if(amount_of_dice == '1'){
		a = ' Time';
	}
	async function rollDiceImages(){
		

		for(j=0; j<20;j++){
			for(i=0; i < document.getElementById('diceRolling').childNodes.length;i++){
				document.getElementById('diceRolling').childNodes[i].src = dice_type_images[Math.floor((m.random() * dice_type_images.length) + 0)];
			}
			await sleep(90)
		}
	}
	
	rollDiceImages()	

	//}
}

