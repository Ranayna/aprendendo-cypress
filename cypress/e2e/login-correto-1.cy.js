//todo: Teste criado sem orientação.
describe('Página de login', () => {
    it('Preencher os campos do login corretamente para entrar no AluraPic', () => {
    //! carrega a página de login
      cy.visit('http://localhost:4200/#/home');

    //! insere os dados do usuário (nome e senha)
      cy.get('[data-test="loginUserName"]').type('flavio');
      cy.get('[data-test="loginPassword"]').type('123');

    //! seleciona o botão "login"
      cy.contains('button', 'login').click();
    })
  })