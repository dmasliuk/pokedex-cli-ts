import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: " hello world ",
        expected: ["hello", "world"],
    },
    {
        input: "Hello  World",
        expected: ["hello", "world"],
    },
    {
        input: "  Hello world",
        expected: ["hello", "world"],
    },
    {
        input: "Some text ",
        expected: ["some", "text"],
    },
])("cleanInput($input)", ({input, expected}) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (let i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});

