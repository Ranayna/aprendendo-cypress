//!Aqui continua igual, porque iremos continuar testando o cadastro
describe('Página de cadastro', () => {

    //! preenchendo os campos de forma incorreta para ver se vai acusar a mensagem de erro 
    it('Preencher os campos do formulário de forma incorreta', () => {

      //! Usa eese comando para carregar a página de home  
      cy.visit('http://localhost:4200/#/home');

      //! carregou a página de registro usando o link para acessar a página de registro. 
      cy.contains('a', 'Register now').click();

      //! vai remodelar os campos para ver se ele acusa a mensagem de erro
      //! ao inspecionar a tela de registro, verifica-se se tem o data-test="emailError"
      cy.contains('button', 'Register').click();
      cy.contains('button', 'Register').click();

      //! não queremos que seja feito um clique nessa mensagem, mas que ela esteja visível. Para informar isso para o Cypress, alteramos o método "click()" para o método "should()""
      //! .should('be.visible'); = "deveria estar visível".
      //! Esse será o comportamento do Cypress para encontrar essa mensagem e verificar se ela está visível para o usuária.
      //! esse "be.visible" considera tanto a visibilidade na parte gráfica (no site) quanto dentro do comportamento do código.
      //! é necessario colocar em "contains" a mensagem de que deve ser exibida e depois ".should('be.visible');"
      cy.contains('Email is required!').should('be.visible');
      cy.contains('Full name is required!').should('be.visible');
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    })
  })