//! precisa colocar o que exatamente está testando, porque no momento que olharmos o relatório, estará visivel e facil de entender. 
describe('Página de cadastro', () => {

  //! como padrão ele colocar como "passes", então é necessario mudar o nome para ficar mais facil de entender. 
  //!o nome precisa ser descritivo para que todo mundo consiga entender. 
  //! se aparecer um erro de localhost é necessario baixar o arquivo do projeto novamente. 
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('http://localhost:4200/#/home');

    //! para pegar botão
    //*link e escrita do link
    cy.contains('a', 'Register now').click();

    //! para pegar o campo de escrita do usuário
    //! O  ideal é que cada elemento tenha um identificador de data-test ou data-id dentro da estrutura do HTML.
    cy.get('[data-test="email"]').type('catarina@email.com.br');
    cy.get('[data-test="fullName"]').type('Catarina Pessoa');
    cy.get('[data-test="registerUserName"]').type('catarinap');
    cy.get('[data-test="registerPassword"]').type('catarina123');

    //! para pegar botão
    //*elemento e nome que leva o elemento
    cy.contains('button', 'Register').click();
  })
})

