//! cria uma const que vai armazenar todos os elementos do cadastro trazidos do arquivo "data-testes"
//! para importa-lo para outro arquivo é necessario colocar o "export" na frente da "const"
//! Sera base para que esses dados possam ser importados para novos testes. Desse modo, não temos que reescrever tudo.
//! Não sendo mais necessario recriar tudo na mão
export const ELEMENTS = {
    registerNow: '[data-test="register"]',
    email: '[data-test="email"]',
    fullName: '[data-test="fullName"]',
    registerUserName: '[data-test="registerUserName"]',
    registerPassword: '[data-test="registerPassword"]',
    btnRegister: '[data-test="btnRegister"]'
}


