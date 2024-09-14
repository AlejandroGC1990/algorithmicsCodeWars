const { shortcut } = require('./vowel_remover');

function doTest(input, expected) {
    const actual = shortcut(input);
    expect(actual).toBe(expected);
}

describe("Sample Tests", () => {
    test("Should pass sample tests", () => {
      doTest('hello', 'hll');
      doTest('codewars', 'cdwrs');
      doTest('goodbye', 'gdby');
      doTest('HELLO', 'HELLO');
    });
  });
