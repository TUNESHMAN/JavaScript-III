/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attribute) {
  this.createdAt = attribute.createdAt;
  this.name = attribute.name;
  this.dimensions = attribute.dimensions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(attribute) {
  GameObject.call(this, attribute);
  this.healthPoints = attribute.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid(attribute) {
  CharacterStats.call(this, attribute);
  this.team = attribute.team;
  this.weapons = attribute.weapons;
  this.language = attribute.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
function Villian(attribute) {
  Humanoid.call(this, attribute);
  this.canFight = attribute.canFight;
}
Villian.prototype = Object.create(Humanoid.prototype);

Villian.prototype.fight = function() {
  if (this.canFight === true) {
    return (this.healthPoints -= 1);
  }
};
const dremo = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 5,
    height: 6
  },
  healthPoints: 15,
  name: "Ryan",
  team: "Weird Gang",
  weapons: ["arrow", "bullet"],
  language: "French",
  canFight: true
});



function Hero(attribute) {
  Villian.call(this, attribute);
  
 
}

Hero.prototype = Object.create(Villian.prototype);

Hero.prototype.dead = function() {
  if (this.healthPoints <= 0) {
    return `${this.name} is on the brink. His health score is ${this.healthPoints}`;
  }
};

const Rema = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 5,
    height: 6
  },
  healthPoints: 2,
  name: "Betty",
  team: "Team Danger",
  weapons: ["arrow", "bullet"],
  language: "Swahili",
  canFight: true
  
})



console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(dremo.fight());
console.log(dremo.fight());
console.log(dremo.fight());
console.log(dremo.fight());
console.log(Rema.fight());
console.log(Rema.fight());
console.log(Rema.dead());
console.log(Rema.fight());
console.log(Rema.dead());
