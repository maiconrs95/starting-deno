import { readJson } from "https://deno.land/std/fs/mod.ts";

const file = await readJson("./foo.json");

console.log(file);