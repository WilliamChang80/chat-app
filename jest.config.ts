import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],
  transform: {
    "^.+\\.(j|t)sx?$": "ts-jest",
  },
};

export default config;
