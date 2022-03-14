import { Utils } from "../../../common/utils";
import Selectors from "./Proposta.selectors";

class PropostaActions {
  constructor(page) {
    this.page = page;
    this.utils = new Utils();
  }

  async fillProposta(cpf, installment) {
    await this.#fillIdentClient(cpf);
    await this.#fillIdentPrestacao(installment);
    await this.#buttonClick(Selectors.btnContPrest);
    await this.#fillSelector("conveniada");
    await this.#fillSelector("orgao");
    await this.#buttonClick(Selectors.btnPrazoDiferencial);
    await this.#fillSelector("plano");
    await this.#buttonClick(Selectors.btnSimuladorForm);
    await this.#buttonClick(Selectors.btnSelecionar);
    await this.#fillSelector("consultor");
    await this.#buttonClick(Selectors.btnConsultor);

    await this.#buttonClick(Selectors.checkSemSeguro);
    await this.#buttonClick(Selectors.buttonSemSeguro);

    // metodo que preenche os forms de dados de usuario
    await this.#fillDataUser();
  }

  async #fillIdentClient(cpf) {
    try {
      await this.page.waitForSelector(Selectors.inputCpf, 5000);
      await this.page.fill(Selectors.inputCpf, cpf);
    } catch (error) {
      throw error;
    }
  }

  async #fillIdentPrestacao(installment) {
    try {
      await this.page.waitForSelector(Selectors.inputValorPres, 5000);
      await this.page.fill(Selectors.inputValorPres, installment);
    } catch (error) {
      throw error;
    }
  }

  async #buttonClick(button) {
    await this.page.waitForSelector(button, 5000);
    await this.page.click(button);
  }

  async #fillSelector(selector) {
    if (selector == "conveniada") {
      await this.page.waitForSelector(Selectors.selectConveniada);
      await this.page.click(Selectors.selectConveniada);
      await this.page.waitForSelector(Selectors.optionConveniada, 8000);
      await this.page.click(Selectors.optionConveniada);
    } else if (selector == "orgao") {
      await this.page.waitForSelector(Selectors.selectOrgao);
      await this.page.click(Selectors.selectOrgao);
      await this.page.click(Selectors.selectOrgao);
      await this.page.fill(Selectors.inputOrgao, "70000");
      await this.page.waitForSelector(Selectors.optionOrgao, 8000);
      await this.page.click(Selectors.optionOrgao);
    } else if (selector == "plano") {
      await this.page.waitForSelector(Selectors.selectPlano);
      await this.page.click(Selectors.selectPlano);
      await this.page.waitForSelector(Selectors.optionPlano, 8000);
      await this.page.click(Selectors.optionPlano);
    } else if (selector == "consultor") {
      await this.page.waitForSelector(Selectors.selectConsultor);
      await this.page.click(Selectors.selectConsultor);
      await this.page.waitForSelector(Selectors.optionConsultor, 8000);
      await this.page.click(Selectors.optionConsultor);
    } else if (selector == "grauInstituicao") {
      await this.page.waitForSelector(Selectors.selectSchool);
      await this.page.click(Selectors.selectSchool);
      await this.page.waitForSelector(Selectors.optionSchool, 8000);
      await this.page.click(Selectors.optionSchool);
    } else if (selector == "estadoCivil") {
      await this.page.waitForSelector(Selectors.selectCivil);
      await this.page.click(Selectors.selectCivil);
      await this.page.waitForSelector(Selectors.optionCivil, 8000);
      await this.page.click(Selectors.optionCivil);
    } else if (selector == "defVisual") {
      await this.page.waitForSelector(Selectors.selectDefVision, {
        timeout: 5000,
      });
      await this.page.click(Selectors.selectDefVision);
      await this.page.waitForSelector(Selectors.optionDefVision, 8000);
      await this.page.click(Selectors.optionDefVision);
    } else if (selector == "nacionalidade") {
      await this.page.waitForSelector(Selectors.selectNationality);
      await this.page.click(Selectors.selectNationality);
      await this.page.waitForSelector(Selectors.optionNationality, 8000);
      await this.page.click(Selectors.optionNationality);
    } else if (selector == "naturalidade") {
      await this.page.waitForSelector(Selectors.selectRegion);
      await this.page.click(Selectors.selectRegion);
      await this.page.fill(Selectors.inputRegion, "RS");
      await this.page.waitForSelector(Selectors.optionRegion, 8000);
      await this.page.click(Selectors.optionRegion);
    } else if (selector == "cidade") {
      await this.page.waitForSelector(Selectors.selectCity);
      await this.page.click(Selectors.selectCity);
      await this.page.waitForSelector(Selectors.optionCity, 8000);
      await this.page.click(Selectors.optionCity);
    } else if (selector == "tipo documento") {
      await this.page.waitForSelector(Selectors.selectTipoDocumento, 5000);
      await this.page.click(Selectors.selectTipoDocumento);
      await this.page.waitForSelector(Selectors.optionTipoDocumento, 8000);
      await this.page.click(Selectors.optionTipoDocumento);
    } else if (selector == "org emissor") {
      await this.page.waitForSelector(Selectors.selectOrgEmissor, 5000);
      await this.page.click(Selectors.selectOrgEmissor);
      await this.page.waitForSelector(Selectors.optionOrgEmissor, 8000);
      await this.page.click(Selectors.optionOrgEmissor);
    } else if (selector == "org emissor") {
      await this.page.waitForSelector(Selectors.selectUf, 5000);
      await this.page.click(Selectors.selectUf);
      await this.page.fill(Selectors.inputUf, "RS");
      await this.page.waitForSelector(Selectors.optionUf, 8000);
      await this.page.click(Selectors.optionUf);
    }
  }

  async #fillDataUser() {
    const person = this.utils.generatePerson();

    await this.page.waitForSelector(Selectors.inputName, 5000);
    const value = await this.page.getAttribute(Selectors.inputName, "value");

    if (value !== "") {
      await this.page.click(Selectors.btnDadosBasicos);
      return;
    }
    await this.page.fill(Selectors.inputName, person.name);

    await this.page.fill(Selectors.inputMother, person.nomeMae);
    await this.page.fill(Selectors.inputFather, person.nomePai);

    await this.page.fill(Selectors.inputBirth, person.birthday);

    await this.page.fill(Selectors.inputEmail, person.email);

    await this.#fillSelector("grauInstituicao");
    await this.#fillSelector("estadoCivil");
    await this.#fillSelector("defVisual");
    await this.#fillSelector("nacionalidade");
    await this.#fillSelector("naturalidade");
    await this.#fillSelector("cidade");

    await this.#fillSelector("tipo documento");
    await this.page.fill(Selectors.inputNumDoc);
    await this.#fillSelector("org emissor");
    await this.#fillSelector("uf");
    await this.page.fill(Selectors.inputEmissao);

    await this.page.click(Selectors.btnDadosBasicos);
    return;
  }
}

export default PropostaActions;
