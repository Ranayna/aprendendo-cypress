//todo: testes feito para simular uma massa de dados. 
//todo: Esse teste é útil para quando precisamos simular vários usuários simultaneamente em nossa plataforma ou até mesmo quando queremos testar outro tipo de validação.

describe('Página de cadastro', () => {

    //! beforeEach: Executa uma função antes que cada um dos testes neste arquivo seja executado. 
    beforeEach(() => {
        cy.visit('http://localhost:4200/#/home');
    })

    //!  variavel onde ela vai requerer os dados do arquivo fixtures (ele vai fazer uma requisição e pegar os dados que estão lá)
    const usuarios = require('../fixtures/usuarios.json');

    //! cria um objeto que estarei usando mais tarde nos campos de input dos usuarios. 
    //! "usuarios" arquivo que eu quero acessar e o "forEach", que é onde queremos que os dados sejam carregados e o "(usuario)" o nome que eu vou implementar dentro do campo do formulario 
    usuarios.forEach(usuario => {
        it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
            
            //!Insere os dados colocando o que tem em fixtures/usuarios.json
            cy.get('[data-test="register"]').click();
            cy.get('input[data-test="email"]').type(usuario.email);
            cy.get('input[data-test="fullName"]').type(usuario.fullName);
            cy.get('input[data-test="registerUserName"]').type(usuario.userName);
            cy.get('input[data-test="registerPassword"]').type(usuario.password);
            cy.get('[data-test="btnRegister"]').click();
        })
    })
})
