// Nesse caso em específico eu irei utilizar um cenário de combate de RPG (Tormenta20) onde um Chefe
// atua como o sujeito observado. Quando ele executa uma habilidade, todos os aventureiros
// inscritos (observadores) na área de combate devem ser notificados imediatamente para reagir.
var Boss = /** @class */ (function () {
    function Boss(name) {
        this.observers = [];
        this.name = name;
    }
    Boss.prototype.attach = function (observer) {
        var exists = this.observers.indexOf(observer) !== -1;
        if (exists) {
            return console.log("[Mestre]: ".concat(observer.characterName, " j\u00E1 est\u00E1 na \u00E1rea de efeito."));
        }
        console.log("[Mestre]: ".concat(observer.characterName, " entrou na \u00E1rea de amea\u00E7a de ").concat(this.name));
        this.observers.push(observer);
    };
    Boss.prototype.unattach = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index == -1) {
            return console.log('Aventureiro não encontrado.');
        }
        this.observers.splice(index, 1);
        console.log("[Mestre]: ".concat(observer.characterName, " fugiu ou caiu inconsciente."));
    };
    Boss.prototype.notify = function (action) {
        console.log("[CHEFE] ".concat(this.name, " est\u00E1 executando: ").concat(action));
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(action);
        }
    };
    Boss.prototype.useAbility = function (abilityName) {
        this.notify(abilityName);
    };
    return Boss;
}());
var Character = /** @class */ (function () {
    function Character(characterName, characterClass) {
        this.characterName = characterName;
        this.characterClass = characterClass;
    }
    Character.prototype.update = function (bossAction) {
        console.log("".concat(this.characterName, " da classe ").concat(this.characterClass, " percebeu ").concat(bossAction, " e conseguiu resistir ao ataque."));
    };
    return Character;
}());
// Exemplo de uso com o chefe Gatzvalith, Lorde da Tormenta
var gatzvalith = new Boss("Gatzvalith, Lorde da Tormenta");
var barbarian = new Character("Beren", "Bárbaro");
var sorcerer = new Character("Desmond", "Feiticeiro");
var warrior = new Character("Agrios", "Guerreiro");
console.log("Inicio do combate (attach iniciando)");
gatzvalith.attach(barbarian);
gatzvalith.attach(sorcerer);
gatzvalith.attach(warrior);
gatzvalith.useAbility("Raio da Anticriação");
console.log("\nMudança no grupo (Unattach)");
gatzvalith.unattach(sorcerer);
gatzvalith.useAbility("Sedução");
