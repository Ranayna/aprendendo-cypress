//*esse teste vai simular um erro no login e fazer com que o pop-up apareça, mesmo que se coloque dados corretos nos campos. 
describe('Página de login', () => {

    beforeEach(() => {
        //! carrega a página de login
        cy.visit('http://localhost:4200/#/home');   

        //! Vai fazer uma interação direta com a API (não fazendo uma interação com o usuário)
        cy.intercept('POST', 'http://localhost:3000/user/login', {
          //!para que o pop-up de erro apareça, é necessario implementar o erro 400, que irá gerar a saída do pop-up. 
            statusCode: 400
          //!ele vai implementar isso através do 'stubPost' (o stubPost é um dublê de teste)
        }).as('stubPost')
    })

    it('Verificar mensagem de campos obrigatórios', () => {
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })

    //!Implementa uma nova função. 
    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
      cy.login('catarinap', 'catarina123');
      //! esse comando vai esperar a resposta do stub
      cy.wait('@stubPost')
    })

  })
  