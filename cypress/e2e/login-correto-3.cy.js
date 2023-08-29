// //todo: login reorganizado pensando no reuso do codigo do login. 
describe('Página de login', () => {
    //Deixa como algo universal para os próximos acessos
    beforeEach(() => {
        cy.visit ('http://localhost:4200/#/home')
    })

        it('Preencher os campos de login corretamente para realizar login', () => {
        //faz a conexão com comando personalizado que foi feito em cypress/support/commands.js
        cy.login("catarinap", "catarina123");
        })

})


