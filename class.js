var Soldier = (function () {
    // health: number;
    // strength: number;
    function Soldier(healthParam, strengthParam) {
        this.healthParam = healthParam;
        this.strengthParam = strengthParam;
        // this.health = healthParam;
        // this.strength = strengthParam;
    }
    return Soldier;
}());
var Viking = (function () {
    // name: string;
    // health: number;
    // strength: number;
    function Viking(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        // this.name = name;
        // this.health = health;
        // this.strength = strength;
    }
    return Viking;
}());
var Saxon = (function () {
    function Saxon(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    return Saxon;
}());
// ----------------------------------------------------------------------------
var soldierA = new Soldier(100, 15);
var soldierB = new Soldier(50, 20);
console.log(soldierA.health);
//WRONG TYPE for strength
// const weirdSoldier = new Soldier(15, "hello");
var vikingA = new Viking('Ragnarr', 200, 20);
var vikingB;
// WRONG TYPE (vikingB needs a Viking object)
// vikingB = 'Erik';
