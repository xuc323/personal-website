import { Snowflake } from "@sapphire/snowflake";

const EPOCH = new Date("2026-01-01T00:00:00.000Z").getTime();

const snowflake = new Snowflake(EPOCH);

export function generateSnowflake() {
  return snowflake.generate();
}

export function parseSnowflake(id: string) {
  return snowflake.deconstruct(id);
}
