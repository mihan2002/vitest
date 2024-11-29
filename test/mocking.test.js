import { describe, vi, expect, it } from "vitest";
import { sayHi } from "./sayHi";
import { sayingHI } from "./sayingHI";

// Mock setup should match the file path used in your imports
vi.mock("./sayHi", () => {
  return {
    sayHi: vi.fn(), // Provide a mock implementation of `sayHi`
  };
});

describe("sayingHI function", () => {
  it("calls sayHi with the correct argument", () => {
    sayingHI(); // Call the function being tested

    // Assert that sayHi was called once with "mihan"
    expect(sayHi).toHaveBeenCalledTimes(1);
    expect(sayHi).toHaveBeenCalledWith("mihan");
  });
});
