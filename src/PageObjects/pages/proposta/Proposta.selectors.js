class PropostaSelectors {
  static inputCpf = "label[for='cpf']";
  static inputValorPres = "input#valorOperacao";
  static btnContPrest = "button[data-testid='continuar-novo-cliente']";
  static selectConveniada = "div#conveniada";
  static optionConveniada = "ul[role='listbox']>li:nth-last-child(1)";
  static selectOrgao = "div[id='orgao']";
  static inputOrgao = "input[id='orgao']";
  static optionOrgao = "xpath=//li/span[@title='70000 - COMANDO DA MARINHA']";
  static btnPrazoDiferencial = "xpath=//button/div[text()='84']";
  static selectPlano = "div[id=plano]";
  static optionPlano = "xpath=//li[text()='SOBF']";
  static btnSimuladorForm = "button[form='SimuladorForm']";
  static btnSelecionar = "xpath=(//div[text()='Selecionar'])[1]";
  static selectConsultor = "div#cpfAgente";
  static optionConsultor = "span[title='000022 - MARCELY DA SILVA CORDEIRO']";
  static btnConsultor = "button[form='ConsultorForm']";
  static checkSemSeguro = "input[id='continuarSemAderirOSeguro']";
  static buttonSemSeguro = "xpath=//button/div[text()='Continuar Sem Seguro']";

  // forms de dados do usuario
  static inputName = "input[id='nome']";
  static inputMother = "input[id='mae']";
  static inputFather = "input[id='pai']";
  static inputBirth = "input[id='dataNascimento']";
  static inputEmail = "input[id='email']";
  static selectSchool = "div[id='codigoGrauInstrucao']";
  static optionSchool = "span[title='MEDIO COMPLETO']";
  static selectDefVision = "label[for='deficienteVisual']";
  static optionDefVision = "xpath=//li[text()='Não']";
  static selectCivil = "div[id='codigoEstadoCivil']";
  static optionCivil = "span[title='CASADO']";
  static selectNationality = "div[id='nacionalidade']";
  static optionNationality = "xpath=//li[text()='Brasileira']";
  static selectRegion = "div[id='ufNascimento']";
  static inputRegion = "input[id='ufNascimento']";
  static optionRegion = "li>span[title='RS']";
  static selectCity = "div[id='cidadeNascimento']";
  static optionCity = "span[title='PORTO ALEGRE']";

  // documento
  static selectTipoDocumento = "div[id='codigoTipoDocumentoIdentidade']";
  static optionTipoDocumento = "span[title='CARTEIRA IDENTIDADE']";
  static inputNumDoc = "input[id='numeroDocumentoIdentidade']";
  static selectOrgEmissor = "div[id='codigoOrgaoEmissor']";
  static optionOrgEmissor = "span[title='CRM - CRM']";
  static selectUf = "div[id='ufEmissaoDocumentoIdentidade']";
  static inputUf = "input[id='ufEmissaoDocumentoIdentidade']";
  static optionUf = "xpath=(//span[@title='RS'])[last()]";
  static inputEmissao = "input[id='dataEmissaoDocumentoIdentidade']";

  // botao form dados basicos
  static btnDadosBasicos = "button[form='Dados BásicosForm']";
}

export default PropostaSelectors;
