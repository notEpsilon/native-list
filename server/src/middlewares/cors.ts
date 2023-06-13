import corsMW from "cors";

export const cors = corsMW({
  origin: process.env.FRONT_URL || "*",
});
