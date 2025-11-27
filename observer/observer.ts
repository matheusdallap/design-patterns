// Nesse caso em específico eu irei utilizar um cenário de combate de RPG (Tormenta20) onde um Chefe
// atua como o sujeito observado. Quando ele executa uma habilidade, todos os aventureiros
// inscritos (observadores) na área de combate devem ser notificados imediatamente para reagir.

// Essa é a arquitetura do Observer implementado. Primeiro defino a interface Observer, que obriga a implementação
// do método update (a reação ao evento). Em seguida, a interface Subject define como gerenciar as ligações
// (attach/unattach) e a notificação. A classe concreta Boss mantém uma lista de observadores e,
// ao executar uma habilidade, dispara o método notify, que percorre a lista avisando cada aventureiro.

interface Observer {
    characterName: string;
    update(bossAction: string): void;
}

interface Subject {
    attach(observer: Observer): void;
    unattach(observer: Observer): void;
    notify(action: string): void;
}

class Enemy implements Subject {
    public name: string;
    private observers: Observer[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public attach(observer: Observer): void {
        const exists = this.observers.indexOf(observer) !== -1;
        if (exists) {
            return console.log(`[Mestre]: ${observer.characterName} já está na área de efeito.`);
        }
        console.log(`[Mestre]: ${observer.characterName} entrou na área de ameaça de ${this.name}`);
        this.observers.push(observer);
    }

    public unattach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index == -1) {
            return console.log('Aventureiro não encontrado.');
        }
        this.observers.splice(index, 1);
        console.log(`[Mestre]: ${observer.characterName} fugiu ou caiu inconsciente.`);
    }

    public notify(action: string): void {
        console.log(`[CHEFE] ${this.name} está executando: ${action}`);
        for (const observer of this.observers) {
            observer.update(action);
        }
    }

    public useAbility(abilityName: string): void {
        this.notify(abilityName);
    }
}

class Character implements Observer {
    public characterName: string;
    public characterClass: string;

    constructor(characterName: string, characterClass: string) {
        this.characterName = characterName;
        this.characterClass = characterClass;
    }

    public update(bossAction: string): void {
        console.log(`${this.characterName} da classe ${this.characterClass} percebeu ${bossAction} e conseguiu resistir ao ataque.`);
    }
}

// Exemplo de uso com o chefe Gatzvalith, Lorde da Tormenta

const gatzvalith = new Enemy("Gatzvalith, Lorde da Tormenta");

const barbarian = new Character("Beren", "Bárbaro");
const sorcerer = new Character("Desmond", "Feiticeiro");
const warrior = new Character("Agrios", "Guerreiro");

console.log("Inicio do combate (attach iniciando)");
gatzvalith.attach(barbarian);
gatzvalith.attach(sorcerer);
gatzvalith.attach(warrior);

gatzvalith.useAbility("Raio da Anticriação")

console.log("\nMudança no grupo (Unattach)");
gatzvalith.unattach(sorcerer);

gatzvalith.useAbility("Sedução")