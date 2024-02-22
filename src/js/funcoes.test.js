import { test } from "vitest";
import { concederAumento } from "./funcoes.js";

describe("concederAumento", () => {
    it("deve calcular o aumento de um dev junior corretamente", () => {
        const salario = concederAumento("dev junior", 1000);
        expect(salario).toBe(1200);
    });

    it("deve calcular o aumento de um dev pleno corretamente", () => {
        const salario = concederAumento("dev pleno", 1000);
        expect(salario).toBe(1120);
    });

    it("deve calcular o aumento de um não senior corretamente", () => {
        const salario = concederAumento("dev senior", 1000);
        expect(salario).toBe(1050);
    });
    it("deve calcular o aumento de qum não senior corretamente", () => {
        const salario = concederAumento("analista de banco de dados", 1000);
        expect(salario).toBe(1000);
    });
})