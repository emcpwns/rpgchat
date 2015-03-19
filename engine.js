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

// Create variables
var uName;  //User's character name
var uAge;   //User's character age
var uRace;  //User's character race
var uClass; //User's character class

// Load or Generate Data (No JavaScript runs until this functions fires)
checkCookie();

// Access Engine Div (Declaring this var will avoid lag when displaying lots of content)
var obj = document.getElementById("engine");

// Display content (10ms delay to avoid undefined variables.)
setTimeout(function(){
  obj.innerHTML = 'Your name is ' + uName + ' and you are a ' + uAge + ' year old ' + uRace + ' ' + uClass + ' .';
}, 10);

// Display ID
setTimeout(function(){
  var identifier = getCookie("ID");
  document.getElementById("identifier").innerHTML = identifier;
}, 1000);
