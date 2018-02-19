import {counter} from "./store.js";

describe("reducers", () => {
    describe("counter", () => {
        it("should provide the initial state", () => {
            expect(callIncrement(undefined)).toBe(1);
        });

        it("should handle INCREMENT action", () => {
            expect(callIncrement(1)).toBe(2);
        });

        it("should handle DECREMENT action", () => {
            expect(callDecrement(1)).toBe(0);
        });

        it("should handle RESET action", () => {expect(callReset(99)).toBe(0);
        });

        it("should ignore unknown actions", () => {
            expect(counter(9, {type: "unknown"})).toBe(9);
        });

        it("should handle INCREMENT twice ok", () => {
            expect(
                callIncrement(callIncrement(0))
            ).toBe(2);
        });
    });
});

function callReset(oldValue: number | undefined): number {
    return counter(oldValue, {type: "RESET"});
}

function callIncrement(oldValue: number | undefined): number {
    return counter(oldValue, {type: "INCREMENT"});
}

function callDecrement(oldValue: number | undefined): number {
    return counter(oldValue, {type: "DECREMENT"});
}
