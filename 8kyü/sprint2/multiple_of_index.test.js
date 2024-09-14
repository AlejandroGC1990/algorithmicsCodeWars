const { multipleOfIndex } = require("./multiple_of_index"); // Importa la función

describe("Basic tests", () => {
  const testCases = [
    { input: [22, -6, 32, 82, 9, 25], expected: [-6, 32, 25] },
    { input: [68, -1, 1, -7, 10, 10], expected: [-1, 10] },
    { input: [11, -11], expected: [-11] },
    { input: [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68], expected: [-85, 72, 0, 68] },
    { input: [28,38,-44,-99,-13,-54,77,-51], expected: [38, -44, -99] },
    { input: [-1,-49,-1,67,8,-60,39,35], expected: [-49, 8, -60, 35] },
    { input: [0, 2, 3, 6, 9], expected: [0, 2, 6] }
  ];

  testCases.forEach(({ input, expected }) => {
    test(`Testing for [${input}]`, () => {
      expect(multipleOfIndex(input)).toEqual(expected);
    });
  });
});