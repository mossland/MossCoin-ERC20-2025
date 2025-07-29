import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("MossCoinModule", (m) => {

  // TODO: Set addresses for the contract arguments below
  const mossCoin = m.contract("MossCoin", [recipient]);

  return { mossCoin };
});
