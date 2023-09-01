//todo: teste criado seguindo a orientação
describe('Página de login', () => {

    //!Executa uma função antes que cada um dos testes neste arquivo seja executado
    beforeEach(() => {
        //! carrega a página de login
        cy.visit('http://localhost:4200')
    })

        it('Deve preencher os campos do formulário corretamente e realizar login', () => {
            cy.get('[data-test="loginUserName"]').type('catarinap');
            cy.get('[data-test="loginPassword"]').type('catarina123');
            cy.contains('button', 'login').click();
            })
})

