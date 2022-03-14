require("dotenv/config");

const { chromium } = require("playwright");

import Login from "../PageObjects/pages/login/Login.actions";
import Proposta from "../PageObjects/pages/proposta/Proposta.actions";

let browser;
let context;
let page;

beforeEach(async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
});

afterEach(async () => {
  await browser.close();
});

const user = {
  name: process.env.USER_LOGIN,
  password: process.env.USER_PASSWORD,
  cpf: "251.412.320-85",
  valorPrestação: "64000",
};

describe("Digitacao proposta", () => {
  test("Digitação", async () => {
    const login = new Login(page);
    const proposta = new Proposta(page);

    await page.goto(
      "https://srvhiis04.bempromotora.com.br/consignado/inclusao-proposta"
    );

    console.log(user);

    await login.login(user.name, user.password);

    await proposta.fillProposta(user.cpf, user.valorPrestação);
  });
});
