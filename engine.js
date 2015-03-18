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

// Cookie Functions
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
};

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
};

// Access Engine Div (Declaring this var will avoid lag when displaying lots of content)
var obj = document.getElementById("engine");

// Create variables
var uName;  //User's character name
var uAge;   //User's character age
var uRace;  //User's character race
var uClass; //User's character class 

// Check if user already has cookie
function checkCookie() {
    var hasCookie = getCookie("ID");
    if (hasCookie != "") {
        loadCookie();
    } else {
          generate();
    }
};

// Pull data from cookies
function loadCookie() {
  uName = getCookie("Name");
  uAge = getCookie("Age");
  uRace = getCookie("Race");
  uClass = getCookie("Class");
};

// Generate scenario & cookies
function generate() {
  setCookie("ID", chance.string({length: 32, pool: 'abcdef1234567890'}), 365)
  uName = chance.name({ prefix: false });
  setCookie("Name", uName, 365)
  uAge = chance.age({type: 'adult'});
  setCookie("Age", uAge, 365)
  uRace = chance.weighted(['Human', 'Elf', 'Orc', 'Goblin', 'Imp', 'Nymph', 'Demon', 'Satyr', 'Gnome', 'Troll'], [10, 3, 2, 1, 1, 1, 1, 3, 2, 1]);
  setCookie("Race", uRace, 365)
  uClass = chance.pick(['Mage', 'Ranger', 'Knight', 'Warrior', 'Bandit', 'Noble', 'Archer']);
  setCookie("Class", uClass, 365)
};

// Display content (10ms delay to avoid undefined variables.)
setTimeout(function(){
  checkCookie();
  obj.innerHTML = 'Your name is ' + uName + ' and you are a ' + uAge + ' year old ' + uRace + ' ' + uClass + ' .';
}, 10);


