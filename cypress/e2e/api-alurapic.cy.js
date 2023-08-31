//todo: Fazendo uma requisição direto da API
describe('Api Alurapic', () => {
    it('Dados da API', () => {
        //! criando uma requisição para API
        cy.request({
            //! metodo POST
            method:'POST',
            //! url mostrada 
            url: 'http://localhost:3000/user/login',
            //! Ao invés de colocar manualmente o nome e a senha do usuário, ele vai pegar isso do documento env.
            body:Cypress.env()
        //! cria então a resposta da requisição. O "res" significa que a resposta da nossa requisição estará dentro dessa função, e criamos uma arrow function.
        }).then((res) => {
            //! fazendo as primeiras chamadas do Cypress para API. Nesse caso estamos esperando a resposta do status code. 
            //! o status code 200 é a resposta de status de sucesso que indica que a requisição foi bem sucedida
            expect(res.status).to.be.equal(200)
            //! como se espera que não seja nula, ele precisa retornar alguma informação. Então temos uma resposta de requisição
            expect(res.body).is.not.empty
            //! Outra resposta de requisição. Colocamos aqui algum dado que verificamos depois de fazer o login
            //! se o login foi bem-sucedido, queremos que ele retorne o ID do usuário pessoa que fez o login, então por isso que se passa esse parametro com o id
            expect(res.body).to.have.property('id')
            //! a resposta que se espera que tenha nesse id
            expect(res.body.id).to.be.equal(3)
        })
    })
})
