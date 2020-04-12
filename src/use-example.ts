import AnbetecLogManager from './service/ab-log-manager'

// Olhe de acordo com o modelo dos objetos, em domain/{auth, error, event, info, sql}
// Exemplo sem async/wait ... 
//a moral é aproveitar do recurso async e não travar a aplicação para gravar o log

// Exemplo de log de autenticação
AnbetecLogManager
  .createLogAuth({
    date: new Date(),
    tenantId: '789512357',
    userAuth: 'marcos.buganeme',
    permission: 'desenvolvedor',
    ip: '192.168.21.103'
  })
  .then(() => console.log('Informação indexada com sucesso.'))


// Exemplo de log de erro
AnbetecLogManager
  .createLogError({
    date: new Date(),
    tenantId: '789512357',
    applicationId: 'cobranca',
    error: 'Erro no processamento de boleto',
    errorDetail: 'Desmembrar código de barras do boleto falhou devido ao nosso-numero não ter valor',
    classe: 'BoletoService.ts',
    method: 'desmembrarCodigoBarras'
  })
  .then(() => console.log('Informação indexada com sucesso.'))



// Exemplo de log de info
AnbetecLogManager
  .createLogInfo({
    date: new Date(),
    tenantId: '789512357',
    applicationId: 'limite',
    info: 'Limite do cliente aumentado',
    infoDetail: 'Limite do cliente Marcos Olavo Silva Buganeme, cpf [032.963.258-77] recebeu aprovação de aumento de limite de R$ 55,00 para R$ 61,00',
    classe: 'LimiteService.ts',
    method: 'verificaSeClientePossuiLiberacaoAumento'
  })
  .then(() => console.log('Informação indexada com sucesso.'))



// Exemplo de log de sql simples
AnbetecLogManager
  .createLogSql({
    date: new Date(),
    tenantId: '789512357',
    applicationId: 'carga-descarga',
    sql: 'SELECT * FROM PCFORNEC',
    sqlDetail: 'Pesquisa todos os fornecedores',
    table: 'PCFORNEC',
  })
  .then(() => console.log('Informação indexada com sucesso.'))



// Exemplo de log de sql com joins e filtros
AnbetecLogManager
  .createLogSql({
    date: new Date(),
    tenantId: '789512357',
    applicationId: 'carga-descarga',
    sql: `SELECT * FROM PCCOB C, PCPREST P WHERE C.CODCOB=P.CODCOB AND P.DTPAG IS NULL AND P.CODCOB <> 'DESD' AND P.CODCOB='DEVP'`,
    sqlDetail: 'Pesquisa todas cobranças nos títulos que não foram pagos e que tenham vínculos com as cobranças existentes e que não seja desdobrado',
    table: 'TituloService.ts',
    joins: ['PCCOB', 'PCPREST'],
    filters: ['PCCOB.CODCOB']
  })
  .then(() => console.log('Informação indexada com sucesso.'))