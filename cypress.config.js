module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      { "reporter"; "mochawesome",
      //opções relacionadas ao mochawesome
      "reporterOptions"; 
      // todos os relatorios gerados por esse report estejam nesse diretorio. 
          { "reportDir"; "cypress/report/mochawesome-report",
          "overwrite"; true,
          "html"; true,
          "json"; false, //se for utilizar como outros recursos, pode deixar como "true"
  //quando não tiver nenhum dado relacionado a data ou horario quando esse relatorio for gerado, será substituído pelo nome do report
  //a configuração de tempo/data será esse
          "timestamp"; "mmddyyyy_HHMMss" }}
    },
  },
};


