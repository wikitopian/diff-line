import fs from "fs";
import DiffLine from "../diff-line.js";

const before = fs.readFileSync("before.txt", "utf8");
const after = fs.readFileSync("after.txt", "utf8");

console.log(DiffLine.getDiff(before, after));
