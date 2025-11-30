## Implementação de Padrões de Projeto

---

Trabalho realizado para disciplina de Engenharia de Software do curso de Ciência da Computação da Universidade Tecnológica Federal do Paraná. Este repositório contém a implementação de três padrões de projeto, se tratando de um comportamental, um criacional e por último, um estrutural. Os padrões escolhidos foram: **Observer**, **Prototype** e **Decorator**. Cada um possui uma pasta contendo um exemplo de código em **TypeScript** e um **Diagrama UML** que descreve o propósito padrão do geral escolhido.

## Padrões Implementados

---

### Padrão de Projeto Criacional - Prototype

O Prototype é utilizado principalmente quando a criação direta de um objeto é custosa em termos de recursos ou complexidade, ou quando se deseja evitar a criação de múltiplas subclasses apenas para configurar objetos de maneiras ligeiramente diferentes. De acordo com o [Refactoring Guru](https://refactoring.guru/design-patterns/prototype):

> Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

#### Explicação do Código - prototype.ts

Nesse caso em específico da atividade realizada, eu utilizei de cenário um sistema brasileiro de RPG de mesa chamado *Tormenta20*. O algoritmo implementado cria novos inimigos do sistema, baseado no livro suplementar *Ameaças de Arton*, com características e valores similares, mas eles ainda conseguem ser mudados manualmente. No algoritmo eu utilizei de exemplo a ficha do inimigo **Reishid**, onde tem a versão de *inimigo chefe* dele, o **Reishid Líder de Culto**, que aprimora as características e ataques já existentes e adiciona novas habilidades. Através do método `clone()`, é possível instanciar novos inimigos a partir de um modelo pré-configurado `Prototype` e realizar modificações pontuais (como adicionar habilidades ou alterar status) sem afetar o objeto original e sem a necessidade de reconfigurar todos os atributos do zero.

#### Diagrama UML do código

![Diagrama UML](https://www.plantuml.com/plantuml/png/PO-nIiH048RxVOef4uo7M0QB0n6n2sed5cCotWstEnjs9igXFes53t8l9Y64XBrolt__R_YtQfXi2DuPcoTei4kdtmXDYXRjs1DSmcrYFFsDj2Du40wyYmh5Sqo1nF3wgdIEnIYzOqkhvfS30BXeVHGgodf9t8zphKTLU6pkxuJ24JZqdaQTdWi40zMWbbXs4zdtDSWGtYXDRpJ3zZ3_UNcTg1xOUytfVB9OQojOb1NakWfoLPbDcwKJrdtyV3AqGSVi8t8tBbvstNnlDajbIz8DmVy3)

---

### Padrão de Projeto Comportamental - Observer

O Observer estabelece uma dependência um-para-muitos, garantindo que quando o estado de um objeto (o Subject) muda, todos os seus dependentes (os Observers) são notificados e atualizados automaticamente. De acordo com o [Refactoring Guru](https://refactoring.guru/design-patterns/observer):

> Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

#### Explicação do Código - observer.ts

Nesse caso em específico da atividade realizada, eu utilizei o padrão para realizar um cenário de um combate no sistema brasileiro de RPG de mesa *Tormenta20*. A classe `Enemy` atua como o sujeito, gerenciando uma lista dinâmica de personagens `Character` que estão na batalha. Quando o inimigo ou chefe executa uma habilidade, ele não precisa conhecer as classes ou os nomes específicos dos personagens, ele apenas dispara o método `notify()`, que avisa todos os observadores inscritos para que executem suas reações de defesa `update()`, garantindo o desacoplamento entre o inimigo e os jogadores.

#### Diagrama UML do código

![Diagrama UML](https://www.plantuml.com/plantuml/png/lLAxJiD04EplArQkpe0ZeBGe4bcqW0GTebYVD-JGFQAxTQG8-1eglYC_Hi9nSOY2b0etbZmxCpix7aV6mBqrWZKRWZlimkh3msqRAImeG0KFFbXoZ9Vd81jlMsG2vIqqCvfIAOHsJ66AYWRIgu3rSwfc652jqHkqL4FaeDrpWlfvXqoozJ5E56llCbpMiF2w4--xmlTz-qAAiouoevf9_sDNRuqpELcuu-QSPprTIlnh3MKmHhXsP9UWxToG9STnVoUt7x7Ajd7mVNnAmzzYSfTI_dEoh1HfqcgZUJsLthcgWqTeSg6xXpY-zG5gDdA_iQssF2Xm1eV9vV7_qtRHgxVHQCWYSfERpwbd8LBTnKK1lggWE2c6c3LOTBpwj61qP8IEn9XSrrlp1G00)

---

### Padrão de Projeto Estrutural - Decorator

O Decorator é um padrão de projeto estrutural que permite adicionar responsabilidades e comportamentos a objetos individuais de forma dinâmica (em tempo de execução), sem afetar outros objetos da mesma classe. Ele utiliza a composição em vez de herança, criando uma série de envoltórios (*wrappers*) ao redor do objeto original. De acordo com o [Refactoring Guru](https://refactoring.guru/design-patterns/decorator):

> Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

#### Explicação do Código - decorator.ts

Nesse caso em específico da atividade realizada, eu utilizei o padrão para implementar o sistema de aprimoramento de armas no sistema de RPG de mesa *Tormenta20*. A classe `BaseWeapon` representa a arma comum. Para adicionar melhorias (como *Cruel* ou *Certeira*, presentes no livro de regras de *Tormenta20*), o objeto da arma é "embrulhado" por classes decoradoras. Isso permite que uma única espada receba múltiplos bônus acumulativos, por exemplo, concatenando strings de dano pra formar 1d10/1d12+1 sem a necessidade de criar subclasses para cada combinação possível das melhorias.

#### Diagrama UML do código

![Diagrama UML](https://www.plantuml.com/plantuml/png/jP5FImCn4CNl-HH3lUnYKyHZ4IdQWtS5pzCuBe7yMIQp556_kujHcWsvzD2zxSpBRzwRsIL1biax9LOSmPvCP9J8y4eunW3F7qd8G_SIsLCGlBtfbR91YD_HqB_gKy7yNSD0igTas8vYO-ZwBIHX6uQYZHu7QdMUh1JbRwMCmvJW0HCjfcW8w6dnNiDXLcLqep6Jgt4dQ5V2rWtEkaRqbyYAXoICHY27pjvEnyZ9h-3uMz_-zJEl5dTBKN-vqppoHAuoUUwa6aaiP1dFfBPTvWN0tTTcKroyBDUxKzN_BDAwojdKLCPRCgtl8TUsi3eoZccbTXJU9kz-0000)

---

## Rodando os programas

Para rodar os programas, primeiro você precisará clonar o repositório:
```
git clone https://github.com/matheusdallap/design-patterns.git
``` 
Também é necessário ter o `node` instalado. Após tudo isso, acesse o diretório do respectivo programa e depois, rode o comando para execução do arquivo, a compilação não é necessária. Abaixo segue o exemplo de como seria a execução do observer: 

```
cd design-patterns/
cd observer/
node observer.js
```
Saída esperada:
```
Inicio do combate (attach iniciando)
[Mestre]: Beren entrou na área de ameaça de Gatzvalith, Lorde da Tormenta
[Mestre]: Desmond entrou na área de ameaça de Gatzvalith, Lorde da Tormenta
[Mestre]: Agrios entrou na área de ameaça de Gatzvalith, Lorde da Tormenta
[CHEFE] Gatzvalith, Lorde da Tormenta está executando: Raio da Anticriação
Beren da classe Bárbaro percebeu Raio da Anticriação e conseguiu resistir ao ataque.
Desmond da classe Feiticeiro percebeu Raio da Anticriação e conseguiu resistir ao ataque.
Agrios da classe Guerreiro percebeu Raio da Anticriação e conseguiu resistir ao ataque.

Mudança no grupo (Unattach)
[Mestre]: Desmond fugiu ou caiu inconsciente.
[CHEFE] Gatzvalith, Lorde da Tormenta está executando: Sedução
Beren da classe Bárbaro percebeu Sedução e conseguiu resistir ao ataque.
Agrios da classe Guerreiro percebeu Sedução e conseguiu resistir ao ataque.
```