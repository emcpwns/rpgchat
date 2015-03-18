/*

      ___           ___         ___                    ___           ___           ___                 
     /  /\         /  /\       /  /\                  /  /\         /__/\         /  /\          ___   
    /  /::\       /  /::\     /  /:/_                /  /:/         \  \:\       /  /::\        /  /\  
   /  /:/\:\     /  /:/\:\   /  /:/ /\              /  /:/           \__\:\     /  /:/\:\      /  /:/  
  /  /:/~/:/    /  /:/~/:/  /  /:/_/::\            /  /:/  ___   ___ /  /::\   /  /:/~/::\    /  /:/   
 /__/:/ /:/___ /__/:/ /:/  /__/:/__\/\:\          /__/:/  /  /\ /__/\  /:/\:\ /__/:/ /:/\:\  /  /::\   
 \  \:\/:::::/ \  \:\/:/   \  \:\ /~~/:/          \  \:\ /  /:/ \  \:\/:/__\/ \  \:\/:/__\/ /__/:/\:\  
  \  \::/~~~~   \  \::/     \  \:\  /:/            \  \:\  /:/   \  \::/       \  \::/      \__\/  \:\ 
   \  \:\        \  \:\      \  \:\/:/              \  \:\/:/     \  \:\        \  \:\           \  \:\
    \  \:\        \  \:\      \  \::/                \  \::/       \  \:\        \  \:\           \__\/
     \__\/         \__\/       \__\/                  \__\/         \__\/         \__\/                

This engine was originally created by Ethan Cochran (aka emcpwns on Github)
This engine utilizes Chance.Js which is available for use under an MIT License.
*/

// Create variables
var uName;  //User's character name
var uAge;   //User's character age
var uRace;  //User's character race
var uClass; //User's character class 

// Generate scenario
uName = chance.name({ prefix: false });
uAge = chance.age({type: 'adult'});
uRace = chance.weighted(['Human', 'Elf', 'Orc', 'Goblin', 'Imp', 'Nymph', 'Demon', 'Satyr', 'Gnome', 'Troll'], [10, 3, 2, 1, 1, 1, 1, 3, 2, 1]);
uClass = chance.pick(['Mage', 'Ranger', 'Knight', 'Warrior', 'Bandit', 'Noble', 'Archer']);

// Display content
window.onload = function()
{
  document.getElementById("engine").innerHTML = 'Your name is ' + uName + ' and you are a ' + uAge + ' year old ' + uRace + ' ' + uClass + ' .';
};


