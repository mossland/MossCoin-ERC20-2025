# Moss Coin (MOC) — ERC‑20 (2025)

> **New Contract (2025)**: This repository contains the **new Moss Coin (MOC)** ERC‑20 smart contract and deployment scripts for **Ethereum Mainnet**. Earlier tokens exist for historical reasons (2018 ERC‑20 and Luniverse). See **Legacy tokens** below for clarity.

---

- **Token name / symbol**: Moss Coin (**MOC**)
- **Network**: Ethereum Mainnet (ChainId **1**)
- **Decimals**: **18**
- **New ERC‑20 contract**: [0x8bbfe65e31b348cd823c62e02ad8c19a84dd0dab](https://etherscan.io/token/0x8bbfe65e31b348cd823c62e02ad8c19a84dd0dab) \
  **Deployed on**: Aug-04-2025 • **Tx**: [0x7b6e3941e3ba650212f3ca21079222ae7ea7a3ebca97a786a68733f60820eaf7](https://etherscan.io/tx/0x7b6e3941e3ba650212f3ca21079222ae7ea7a3ebca97a786a68733f60820eaf7)
- **Admin model**: **Ownerless** (no `Ownable`; **no admin keys**)
- **Features**: **Burnable**, **Permit (EIP‑2612)**, **Votes (ERC20Votes / EIP‑712)**
- **Supply**: **Fixed 500,000,000 MOC (preminted)** → **recipient**: [2/3 Multi-Sig](https://etherscan.io/address/0xcda8f4d40dbeaecf7ee7221f9e9b35d565ca2ad2)
- **Etherscan (verified)**: [0x8bbfe65e31b348cd823c62e02ad8c19a84dd0dab](https://etherscan.io/address/0x8bbfe65e31b348cd823c62e02ad8c19a84dd0dab)
- **Audit**: [CertiK](https://skynet.certik.com/projects/mossland?auditId=Moss+Coin+%28ERC20%29+-+Audit#code-security)
- **Legacy tokens**: see [Legacy tokens (for reference)](#legacy-tokens-for-reference)

> ⚠️ **Anti‑phishing**: Always confirm the **new Mainnet address** above and use links from official Mossland channels only. There is **no active swap portal**; the previous Luniverse ↔ **WMOC(ERC‑20)** swap is **inactive**.

---

## Legacy tokens (for reference)

> For traceability only. Do **not** use these for deposits, swaps, or integrations.

### 1) Legacy ERC‑20 (2018)

- **Network**: Ethereum Mainnet (chainId 1)
- **Contract**: [0x865ec58b06bF6305B886793AA20A2da31D034E68](https://etherscan.io/token/0x865ec58b06bF6305B886793AA20A2da31D034E68)
- **Status**: **Deprecated** — **not** part of the 2025 migration path; no swap into/from this contract.
- **Purpose here**: Prevent confusion/phishing; assist exchanges/auditors mapping historical records.

### 2) Luniverse MOC (enterprise chain)

- **Network**: **Luniverse** (enterprise/private chain)
- **Contract**: [0x878120A5C9828759A250156c66D629219F07C5c6](https://scan.luniverse.io/tokens/0x878120A5C9828759A250156c66D629219F07C5c6)
- **Status**: **Source of the current migration** → supported path is **Luniverse → ERC‑20 (2025)** **only**.
- **Note**: The earlier Luniverse MOC ↔ **WMOC(ERC‑20)** swap is **inactive**.

### Migration path (summary)

- ✅ **Supported**: **Luniverse → ERC‑20 (2025)**
- ❌ **Not supported**: **Legacy ERC‑20 (2018) → ERC‑20 (2025)**; any **WMOC** routes.
