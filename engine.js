document.write('<p>Your name is ');
document.write(chance.name({ prefix: false }));
document.write(' ');
document.write('and you are ');
document.write(chance.age({type: 'adult'}));
document.write(' year old ');
document.write(chance.weighted(['Human', 'Elf', 'Orc', 'Goblin', 'Imp', 'Nymph', 'Demon', 'Satyr', 'Gnome', 'Troll'], [10, 3, 2, 1, 1, 1, 1, 3, 2, 1]));
document.write(' ');
document.write(chance.pick(['Mage', 'Ranger', 'Knight', 'Warrior', 'Bandit', 'Noble', 'Archer']));
document.write('.</p>');


