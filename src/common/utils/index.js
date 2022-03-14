import Chance from "chance";

export class Utils {
  constructor() {
    this.chance = new Chance();
  }

  GetRandomNumber(length) {
    return this.chance.string({ length });
  }

  GetRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  cpf() {
    return this.chance.cpf();
  }

  generatePerson() {
    let birthday = {
      day: this.chance.integer({ min: 1, max: 26 }),
      month: this.chance.integer({ min: 1, max: 12 }),
      year: this.chance.integer({ min: 1960, max: 1995 }),
    };

    let name = this.#name("male");

    let email = `${name
      .replace(" ", "")
      .replace(" ", "")
      .replace(" ", "")}@outlook.com`;

    if (birthday.day < 10) {
      birthday.day = `0${birthday.day}`;
    }
    if (birthday.month < 10) {
      birthday.month = `0${birthday.month}`;
    }

    let number =
      "51-9" + this.chance.integer({ min: 10000000, max: 999999999 });

    let number2 =
      "51-9" + this.chance.integer({ min: 10000000, max: 999999999 });

    return {
      cpf: this.cpf(),
      name: name,
      nomeMae: this.#name("female"),
      nomePai: this.#name("male"),
      birthday: `${birthday.day}/${birthday.month}/${birthday.year}`,
      email: email,
      rg: `225541282`,
      tel1: number,
      tel2: number2,
      matricula: "7777777",
      agencia: "5240",
      conta: "051077",
      endereco: "MARECHAL DEODORO, 101",
    };
  }

  #name(gender) {
    return this.chance.name({
      middle: true,
      nationality: "it",
      gender: gender,
    });
  }
}
