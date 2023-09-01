//todo: Teste para verificar a resposta da Api em um determinado tempo. 
describe('Api Alurapic', () => {
    //!Variavel que contém o tempo esperado 
    const tempoEsperado = 
    it('Buscar fotos e dados', () => {
       cy.request({
           //! Não é mais metodo post porque não estou enviado dados para a API, estou pedindo que ela me traga algo do back
           method:'GET',
           //! Link para página home do usuário
           url: 'http://localhost:3000/catarinap/photos',
       }).then((res) => {
           //! o status code 200 é a resposta de status de sucesso que indica que a requisição foi bem sucedida
           expect(res.status).to.be.equal(200)
           //! como se espera que não seja nula, ele precisa retornar alguma informação. Então temos uma resposta de requisição
           expect(res.body).is.not.empty
           //! A property vai ser a descrição da foto
           //! dentro do res.body será adicionado a posição zero da lista de fotos que queremos que seja retornada.
           expect(res.body[0]).to.have.property('description')
           //! Vai pegar a primeira foto pela posição zero e também pela descrição.
           expect(res.body[0].description).to.be.equal('pato filhote')
       })
   })
})