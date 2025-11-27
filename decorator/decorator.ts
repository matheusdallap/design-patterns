// Nesse caso em específico eu irei utilizar um cenário de um jogo de tabuleiro do sistema de RPG chamado "Tormenta20",
// onde o algoritmo necessita adicionar aprimoramentos e encantamentos mágicos a uma arma de forma dinâmica, 
// permitindo acumular múltiplos efeitos em um único objeto base.

// Essa é a arquitetura do Decorator implementado, onde eu inicio criando uma interface Weapon que define o contrato comum.
// Depois disso, eu declaro o objeto base BaseWeapon (a arma comum) e uma classe abstrata WeaponDecorator que serve como 
// invólucro (wrapper). Então, eu crio os decoradores concretos que estendem essa base. E para a última parte, a lógica 
// de decoração é implementada, onde cada nível adiciona sua descrição e dano ao resultado do nível anterior.

interface Weapon {
    getDescription(): string;
    getDamage(): string;
    getHit(): string;
}

class BaseWeapon implements Weapon {
    public name: string;
    public baseDamage: string;
    public baseHit: string;

    constructor(name: string, baseDamage: string, baseHit: string) {
        this.name = name;
        this.baseDamage = baseDamage;
        this.baseHit = baseHit;
    }

    public getDescription(): string {
        return this.name;
    }

    public getDamage(): string {
        return this.baseDamage;
    }

    public getHit(): string {
        return this.baseHit;
    }
}

abstract class WeaponDecorator implements Weapon {
    protected weapon: Weapon;

    constructor(weapon: Weapon) {
        this.weapon = weapon;
    }

    public getDescription(): string {
        return this.weapon.getDescription();
    }

    public getDamage(): string {
        return this.weapon.getDamage();
    }

    public getHit(): string {
        return this.weapon.getHit();
    }
}

class CruelDecorator extends WeaponDecorator {
    public getDescription(): string {
        return `${super.getDescription()} Cruel`;
    }

    public getDamage(): string {
        return `${super.getDamage()}+1`;
    }
}

class CerteiraDecorator extends WeaponDecorator {
    public getDescription(): string {
        return `${super.getDescription()} Certeira`;
    }

    public getHit(): string {
        return `${super.getHit()}+1`;
    }
}

// Exemplo de Uso com a Espada Bastarda

console.log("Comprando a arma base no ferreiro");
let weapon: Weapon = new BaseWeapon("Espada Bastarda", "1d10/1d12", "1d20+Luta");
console.log(`Arma: ${weapon.getDescription()} | Dano: ${weapon.getDamage()} | Acerto: ${weapon.getHit()}`);

console.log("\nAplicando a melhoria Cruel (+1 no dano)");
weapon = new CruelDecorator(weapon);
console.log(`Arma: ${weapon.getDescription()} | Dano: ${weapon.getDamage()} | Acerto: ${weapon.getHit()}`);

console.log("\nAplicando a melhoria Certeira (+1 no acerto)");
weapon = new CerteiraDecorator(weapon);
console.log(`Arma: ${weapon.getDescription()} | Dano: ${weapon.getDamage()} | Acerto: ${weapon.getHit()}`);