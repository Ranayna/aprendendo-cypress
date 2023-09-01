describe('Página de login', () => {
    it('Verificar mensagem de campos obrigatórios', () => {
    //! carrega a página de login
      cy.visit('http://localhost:4200/#/home');

      //! nome 
      cy.contains('User name is required!').should('be.visible');

      //! senha
      cy.contains('Password is required!').should('be.visible');
    })
  })