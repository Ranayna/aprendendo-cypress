//todo: centraliza a interação dos cadastro
//! necessario importar as infos criadas no arquivo "elements", esse importe é feito através de uma const

//! Atribuido a essa constante uma requisição para o arquivo elements.js
const el = require('./elements').ELEMENTS;

//!Cria-se uma classe para a página de cadastro.
class Cadastro {
    //!adiciona a primeira interação (que é um metodo) com a página de cadastro
    acessarPaginaDeCadastro(){
        //! acessa a página do alurapic e seleciona o link para registrar
        cy.visit('http://localhost:4200/#/home');
        cy.get('[data-test="register"]').click();
    }

    //!Cria-se um novo metodo que vai preencher os campos do formulario 
    preencherFormulario(){
        cy.get('input[data-test="email"]').type('lllll@lll.com');
        cy.get('input[data-test="fullName"]').type('Lllll Lllll');
        cy.get('input[data-test="registerUserName"]').type('lllllllll');
        cy.get('input[data-test="registerPassword"]').type('LllllLllll');
    }
    //!Cria-se um novo metodo para selecionar o botão de registrar. 
    //!Essa será a ultima interação com a página de cadastro
    submeterCadastro(){
        cy.get('[data-test="btnRegister"]').click();
    }
}

//! classe disponível para ser reutilizada.
export default new Cadastro();
