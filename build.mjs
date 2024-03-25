import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";

// (1)
const values = [
    ["0x98903fF7ee67b1615C00eBC80c39626dA508150D"],
    ["0x8FF935fFF25f2595248DfAd098ce353843aA72c6"],
    ["0x4b6a7F58F97aBa0074590E8d570e2A02E8cbC096"],
];

// (2)
const tree = StandardMerkleTree.of(values, ["address"]);

// (3)
console.log("Merkle Root:", tree.root);

// (4)
fs.writeFileSync("tree.json", JSON.stringify(tree.dump()));
