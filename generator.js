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
Engine Version: v0.1.4
*/

function generate() {

  // Identifier Cookie
  setCookie("ID", chance.string({length: 32, pool: 'abcdef1234567890'}), 365);

  // Character Name
  uName = chance.name({ prefix: false });
  setCookie("Name", uName, 365);

  // Character Age
  uAge = chance.age({type: 'adult'});
  setCookie("Age", uAge, 365);

  // Character Race
  uRace = chance.weighted(['Human', 'Elf', 'Orc', 'Goblin', 'Imp', 'Nymph', 'Demon', 'Satyr', 'Gnome', 'Troll'], [10, 3, 2, 1, 1, 1, 1, 3, 2, 1]);
  setCookie("Race", uRace, 365);

  // Character Race
  uClass = chance.pick(['Mage', 'Ranger', 'Knight', 'Warrior', 'Bandit', 'Noble', 'Archer']);
  setCookie("Class", uClass, 365);
};
