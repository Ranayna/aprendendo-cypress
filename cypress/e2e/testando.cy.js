describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/#/home')
    //! para pegar botão
    //*link e escrita
    cy.contains('a', 'Register now').click();

    //!para pegar campo de escrita do usuário
    cy.get('[formcontrolname="email"]').type('catarina@email.com.br')
    cy.get('[formcontrolname="fullName"]').type('Catarina Pessoa')
    cy.get('[formcontrolname="userName"]').type('catarinap')
    cy.get('[formcontrolname="password"]').type('catarina123')

    //! para pegar botão
    //*elemento e nome que leva o elemento
    cy.contains('button', 'Register').click();
  })
})

