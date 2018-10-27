// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    attack() {
        super.attack();
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
        return (this.health>0)? this.name +" has received " + damage + " points of damage" : this.name + " has died in act of combat"
    }

    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }

    attack(){
        super.attack();
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
        return (this.health>0)? "A Saxon has received " + damage + " points of damage" : "A Saxon has died in combat"
    }

}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(oneViking){
        this.vikingArmy.push(oneViking);
    }

    addSaxon(oneSaxon){
        this.saxonArmy.push(oneSaxon);
    }

    vikingAttack(){
        var randViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        var randSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        var returnValue = randSaxon.receiveDamage(randViking.strength); 
        this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0);
        return returnValue;
    }

    saxonAttack(){
        var randViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        var randSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        var returnValue = randViking.receiveDamage(randSaxon.strength); 
        this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);
        return returnValue;

    }

    showStatus(){
        if (this.saxonArmy.length===0){
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survive another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
