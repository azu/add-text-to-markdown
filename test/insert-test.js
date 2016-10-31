// LICENSE : MIT
"use strict";
import insert from "../src/insert";
const assert = require("power-assert");
describe("insert-test", function() {
    it("should write markdown", function() {
        const input = `# section

before
`;
        const output = `# section

after
`;
        const result = insert(input, "after", "section");
        assert.equal(result, output);
    });
    context("remark options", function() {
        it("should write markdown", function() {
            const input = `- list            

# section

before
`;
            const output = `-   list            

# section

after
`;
            const result = insert(input, "after", "section", {
                remarkStringifyOptions: {
                    listItemIndent: "tab"
                }
            });
            assert.equal(result, output);
        })
    });
});