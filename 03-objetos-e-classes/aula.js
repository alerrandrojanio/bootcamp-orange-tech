const pessoa = {
    nome: 'Alerrandro',
    idade: 23,
    
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.altura = 1.79;

pessoa.descrever();

const atributo = 'idade';

console.log(pessoa[atributo]);