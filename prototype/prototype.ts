// Nesse caso em específico eu irei utilizar um cenário de um jogo de tabuleiro onde o algoritmo necessita criar novos inimigos
// do sistema de RPG chamado "Tormenta20" com características e valores similares, mas eles ainda conseguem ser mudados
// manualmente.

// Essa é a arquitetura do Prototype implementado, onde eu inicio criando um método clone que todos os 
// objetos concretos devem implementar, depois disso, eu declaro um objeto RPGEnemy conténdo os campos: name, hp, attack e skills, 
// cada um tendo seu tipo. Então, eu sempre crio os objetos concretos com o método constructor. E para a última parte desse objeto
// a lógica de clonagem é implementada, com o método clone. Esse método é responsável por criar novas instâncias com os mesmos 
// valores do objeto original.

interface Prototype {
    clone(): Prototype;
}

class RPGEnemy implements Prototype {
    public name: string;
    public hp: number;
    public attack: string[];
    public skills: string[];

    constructor(name: string, hp: number, attack: string[], skills: string[]){
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.skills = skills;
    }

    public clone(): RPGEnemy {
        const cloneSkills = [...this.skills];
        const cloneAttacks = [...this.attack];
        return new RPGEnemy(this.name, this.hp, cloneAttacks, cloneSkills);
    }

    public showStatus(): void{
        console.log(`[Inimigo] ${this.name} | [Vida]: ${this.hp} | [Ataques]: ${this.attack.join(" | ")} | [Habilidades]: ${this.skills.join(" | ")}`);
    }
}

// Exemplo de uso com Ficha do Monstro Reishid e Reishid Líder de Culto

const reishid = new RPGEnemy("Reishid", 295, ["Adaga da Tormenta +30 (1d4+18, 19/x2, mais 1d8 trevas), garra +30 (1d6+18, x2) e mordida +30 (1d6+18 mais veneno, x2)"], ["Sombra Rubra: Quando faz um teste de Iniciativa ou Furtividade, o reishid rola dois dados e usa o melhor resultado."])

console.log("Criando baseado no Prototype")
reishid.showStatus();

const reishidLiderCulto = reishid.clone();
reishidLiderCulto.name = "Reishid Líder de Culto";
reishidLiderCulto.hp = 483;
reishidLiderCulto.attack = ["Adaga da Tormenta +40 (1d4+21, 19/x2, mais 1d8 trevas), garra +40 (2d6+21, x2) e mordida +40 (2d6+21 mais veneno, x2)"];
reishidLiderCulto.skills.push("Ataque em Movimento: O reishid líder de culto pode se mover antes e depois de executar a ação agredir, desde que a distância total percorrida não seja maior que seu deslocamento.")

console.log("\nCriando novo objeto editado a partir do Prototype")
reishidLiderCulto.showStatus();

console.log("\nVerificando objeto original intacto");
reishid.showStatus();