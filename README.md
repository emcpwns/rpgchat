# [RPG-Chat](http://ethanc.ga/rpgchat/)
RPG-Chat is a chat room in which users are given a role/character and have to roleplay based on their character and the basic story-line provided. Idea by [/u/Jethropolis](http://www.reddit.com/r/ideas/comments/2ywnj1/roleplaying_chatroom_idea/ "Original Reddit Post").
  
> *Since this is a 100% client-sided web-based project, the master branch and gh-pages branch are identicle*

## About

I created RPG-Chat with the intent to practice non-static web design. In the past I've created many static websites, and have even won web design competetions. 
However my knowledge on dynamic web languages was very limited. I had a small amount of knowledge about PHP from using it to optimize my static sites (using includes 
for menus, footers, etc.), but that was the extent of what I knew. 

I wound up going with a mostly JavaScript approach to RPG-Chat since it's client sided and already I had more exposure to it then I realized due to my work with 
front-end web frameworks. Overall RPG-Chat is primarily learning experience for me, but hopefully it's one that will bring others entertainment.

## Planned Updates 
###### These are updates that are planned to be implemented in the current version of RPG-Chat. They are listed in the order I plan to do them.

* Encrypted & Condensed cookies
* CSS Styling
* Chat function (duh)
* More in depth scenario
* More races

## Future Updates
###### These are updates that might be added in future versions of RPG-Chat. These aren't in any specific order.

* Random events
* More fantasy-styled name generation
* Gender selection
* Themes (Fantasy, Sci-Fi, Post-apocalyptic, etc.)

## Release Notes
###### v0.2.1
Added feature to delete ID cookie to allow returning users to generate a new scenario.
###### v0.2.0
Cookie support improved. Game engine was seperated into 3 files: Engine (Fires all functions and displays content), Generator (Generates new scenarios and saves them to 
cookies), and Functions (Contains all custom functions).
###### v0.1.4
Added cookie support.
###### v0.1.3
Swtiched over to variable based scenario generation. This is necessary for future updates like cookie support and chat names. The way the engine displays content
was also switched from document.write statements to innerHTML editing. This alows any changing content to not overwrite the entire page.
###### v0.1.0
Initial release. Content is generated using Chance.Js. Scenario generation prints directely to screen using a series of document.write statements.  
