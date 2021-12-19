// initialize player Robot 

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

// initialize computer enemy Robot
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


// create function "fight"

var fight = function(){
    // Alert players they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of playerAttack from the value of enemyHealth & use that result to update the value in enemyHealth varaible
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console about player attacking enemy robot computer
    console.log(
        playerName + "attacked " + enemyName + ". " + enemyName + "now has " + enemyHealth + "health remaining"
    );

    // check computer robot enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtrack the value of enemyAttack from the value of playerHealth & use that result to update the value in playerHealth variable
    playerHealth = playerHealth - enemyAttack; 

    // Log a resulting message to the console about enemy computer robot attacking player 
    console.log(
        enemyName + "attacked" + playerName + ". " + playerName + "now has " + playerHealth + "health remaining."
    );

    // check player's health 
    if (playerHealth <= 0){
        window.alert(playerName + " has died!");
    }
    else{
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();