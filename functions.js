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

// Cookies
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

function checkCookie() {
    var hasCookie = getCookie("ID");
    if (hasCookie != "") {
        loadCookie();
    } else {
          generate();
    }
};

function loadCookie() {
  uName = getCookie("Name");
  uAge = getCookie("Age");
  uRace = getCookie("Race");
  uClass = getCookie("Class");
};
