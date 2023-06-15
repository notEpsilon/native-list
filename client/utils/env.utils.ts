enum Env {
  DEV = "development",
  TEST = "test",
  PROD = "production",
}

export function isProduction() {
  return process.env.NODE_ENV === Env.PROD;
}
