import { AsyncLocalStorage } from "node:async_hooks";

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  run(): Promise<{ success: boolean; meta: unknown }>;
  all<T = unknown>(): Promise<{ results: T[]; success: boolean }>;
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

export type CloudflareEnv = {
  DB?: D1Database;
};

export const cfEnvStorage = new AsyncLocalStorage<CloudflareEnv>();

export function getCfEnv(): CloudflareEnv | undefined {
  return cfEnvStorage.getStore();
}
