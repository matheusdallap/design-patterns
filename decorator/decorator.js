// Nesse caso em específico eu irei utilizar um cenário de um jogo de tabuleiro do sistema de RPG chamado "Tormenta20",
// onde o algoritmo necessita adicionar aprimoramentos e encantamentos mágicos a uma arma de forma dinâmica, 
// permitindo acumular múltiplos efeitos em um único objeto base.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseWeapon = /** @class */ (function () {
    function BaseWeapon(name, baseDamage, baseHit) {
        this.name = name;
        this.baseDamage = baseDamage;
        this.baseHit = baseHit;
    }
    BaseWeapon.prototype.getDescription = function () {
        return this.name;
    };
    BaseWeapon.prototype.getDamage = function () {
        return this.baseDamage;
    };
    BaseWeapon.prototype.getHit = function () {
        return this.baseHit;
    };
    return BaseWeapon;
}());
var WeaponDecorator = /** @class */ (function () {
    function WeaponDecorator(weapon) {
        this.weapon = weapon;
    }
    WeaponDecorator.prototype.getDescription = function () {
        return this.weapon.getDescription();
    };
    WeaponDecorator.prototype.getDamage = function () {
        return this.weapon.getDamage();
    };
    WeaponDecorator.prototype.getHit = function () {
        return this.weapon.getHit();
    };
    return WeaponDecorator;
}());
var CruelDecorator = /** @class */ (function (_super) {
    __extends(CruelDecorator, _super);
    function CruelDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CruelDecorator.prototype.getDescription = function () {
        return "".concat(_super.prototype.getDescription.call(this), " Cruel");
    };
    CruelDecorator.prototype.getDamage = function () {
        return "".concat(_super.prototype.getDamage.call(this), "+1");
    };
    return CruelDecorator;
}(WeaponDecorator));
var CerteiraDecorator = /** @class */ (function (_super) {
    __extends(CerteiraDecorator, _super);
    function CerteiraDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CerteiraDecorator.prototype.getDescription = function () {
        return "".concat(_super.prototype.getDescription.call(this), " Certeira");
    };
    CerteiraDecorator.prototype.getHit = function () {
        return "".concat(_super.prototype.getHit.call(this), "+1");
    };
    return CerteiraDecorator;
}(WeaponDecorator));
// Exemplo de Uso com a Espada Bastarda
console.log("Comprando a arma base no ferreiro");
var weapon = new BaseWeapon("Espada Bastarda", "1d10/1d12", "1d20+Luta");
console.log("Arma: ".concat(weapon.getDescription(), " | Dano: ").concat(weapon.getDamage(), " | Acerto: ").concat(weapon.getHit()));
console.log("\nAplicando a melhoria Cruel (+1 no dano)");
weapon = new CruelDecorator(weapon);
console.log("Arma: ".concat(weapon.getDescription(), " | Dano: ").concat(weapon.getDamage(), " | Acerto: ").concat(weapon.getHit()));
console.log("\nAplicando a melhoria Certeira (+1 no acerto)");
weapon = new CerteiraDecorator(weapon);
console.log("Arma: ".concat(weapon.getDescription(), " | Dano: ").concat(weapon.getDamage(), " | Acerto: ").concat(weapon.getHit()));
