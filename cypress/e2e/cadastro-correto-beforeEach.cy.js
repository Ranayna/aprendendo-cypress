//! Para que a implementação seja válida, é necessário importar a classe do cadastro. 
import Cadastro from "../support/pages/cadastro/pagina-cadastro";

//todo: Outro tipo de cadastro
describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/#/home');
    })
        //! dentro desse bloco para preencher os campos do formulário, vamos colocar os métodos criados na página de cadastro
        it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
            // cy.get('[data-test="register"]').click();
            // cy.get('input[data-test="email"]').type('lllll@lll.com');
            // cy.get('input[data-test="fullName"]').type('Lllll Lllll');
            // cy.get('input[data-test="registerUserName"]').type('lllllllll');
            // cy.get('input[data-test="registerPassword"]').type('LllllLllll');
            // cy.get('[data-test="btnRegister"]').click();

            //!Para chamá-los, precisamos chamar a classe Cadastro, seguido de ponto e o nome do método.
            Cadastro.acessarPaginaDeCadastro();
            Cadastro.preencherFormulario();
            Cadastro.submeterCadastro();

        })
})