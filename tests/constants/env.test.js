import { API_URL, CURRENCY, PAGE_SIZE } from "./../../src/constants/env";

describe("Constants / env", () => {
  describe("API_URL", () => {
    it("should be localhost:3000", () => {
      expect(API_URL).toEqual("");
    });
  });

  describe("CURRENCY", () => {
    it("should be dollar sign", () => {
      expect(CURRENCY).toEqual("$");
    });
  });

  describe("PAGE_SIZE", () => {
    it("should be 5", () => {
      expect(PAGE_SIZE).toEqual(5);
    });
  });
});
