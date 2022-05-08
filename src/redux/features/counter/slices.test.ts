import { describe, expect, it } from "vitest";
import slices, {
  counterSlice,
  CounterState,
  decrement,
  increment,
  incrementByNumber,
} from "./slices";

describe("should return initial state", () => {
  const initialState = {
    count: 0,
  } as CounterState;

  it("should be equal with initial state", () => {
    expect(counterSlice.getInitialState()).to.be.deep.equal(initialState);
  });
});

describe("should handle increment actions", () => {
  it("should increase the count", () => {
    const initialState = {
      count: 0,
    } as CounterState;

    const expectedState = {
      count: 1,
    } as CounterState;

    expect(slices(initialState, increment())).to.be.deep.equal(expectedState);
  });

  it("should increase the count with negative count", () => {
    const initialState = {
      count: -1,
    } as CounterState;

    const expectedState = {
      count: 0,
    } as CounterState;

    expect(slices(initialState, increment())).to.be.deep.equal(expectedState);
  });

  it("should increase the count with max integer size and equals", () => {
    const initialState = {
      count: Number.MAX_SAFE_INTEGER,
    } as CounterState;

    const expectedState = {
      count: Number.MAX_SAFE_INTEGER + 1,
    } as CounterState;

    expect(slices(initialState, increment())).to.be.deep.equal(expectedState);
  });
});

describe("should handle decrement actions", () => {
  it("should decrease the count", () => {
    const initialState = {
      count: 0,
    } as CounterState;

    const expectedState = {
      count: -1,
    } as CounterState;

    expect(slices(initialState, decrement())).to.be.deep.equal(expectedState);
  });

  it("should increase the count with positive count", () => {
    const initialState = {
      count: 1,
    } as CounterState;

    const expectedState = {
      count: 0,
    } as CounterState;

    expect(slices(initialState, decrement())).to.be.deep.equal(expectedState);
  });

  it("should increase the count with min integer size and equals", () => {
    const initialState = {
      count: Number.MIN_SAFE_INTEGER,
    } as CounterState;

    const expectedState = {
      count: Number.MIN_SAFE_INTEGER - 1,
    } as CounterState;

    expect(slices(initialState, decrement())).to.be.deep.equal(expectedState);
  });
});

describe("should handle incrementByNumber actions", () => {
  it("should increase the count with positive number", () => {
    const initialState = {
      count: 2,
    } as CounterState;

    const expectedState = {
      count: 12,
    } as CounterState;

    expect(slices(initialState, incrementByNumber(10))).to.be.deep.equal(
      expectedState
    );
  });

  it("should not increase the count with negative number", () => {
    const initialState = {
      count: 1,
    } as CounterState;

    const expectedState = {
      count: 1,
    } as CounterState;

    expect(slices(initialState, incrementByNumber(-1))).to.be.deep.equal(
      expectedState
    );
  });

  it("should increase the count with max integer", () => {
    const initialState = {
      count: 0,
    } as CounterState;

    const expectedState = {
      count: Number.MAX_SAFE_INTEGER,
    } as CounterState;

    expect(
      slices(initialState, incrementByNumber(Number.MAX_SAFE_INTEGER))
    ).to.be.deep.equal(expectedState);
  });
});
