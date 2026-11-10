<p align="center">
  <a href="https://github.com/orgolabs"><img src="https://orgolabs.github.io/shared/brand/orgolabs-wordmark.png" alt="orgolabs — organic chemistry labs" width="300"></a>
</p>

# Synthesis of Aspirin — an interactive, fact-checked explainer

> Part of **[orgolabs](https://github.com/orgolabs)** — interactive, fact-checked organic chemistry labs.
> **Live site:** https://orgolabs.github.io/aspirin-synthesis/

An open educational resource on the **synthesis of aspirin (acetylsalicylic acid)** from **salicylic acid** and
**acetic anhydride**, based on the microscale experiment of **Williamson & Masters, *Macroscale and Microscale
Organic Experiments*, 7th ed. (Cengage, p. 534)**. It shows *how* and *why* the reaction works, with:

- **Real 3D structures** you can rotate and zoom (ball-and-stick / stick / space-fill) via
  [3Dmol.js](https://3dmol.csb.pitt.edu/): salicylic acid → aspirin, plus acetic anhydride.
- A **mechanism** section (acid-catalysed nucleophilic acyl substitution; why acetic anhydride beats acetic
  acid; how IR proves it worked — loss of the broad O–H, appearance of two C=O peaks).
- The **one-step microscale laboratory procedure** (acetylation of salicylic acid to aspirin), with reagent
  table, safety, and cleanup guidance. The source handout is bundled in `docs/` and linked from the page.
- A **live, limiting-reagent-aware yield calculator** pre-filled with the microscale amounts (138 mg salicylic
  acid, 0.3 mL acetic anhydride).
- **Verified references** with access labels (open vs. subscription) and resolvable DOIs.

Single static site — no build step, no framework.

## The chemistry in one paragraph

Salicylic acid (2-hydroxybenzoic acid, C₇H₆O₃, 138.12 g/mol) is acetylated on its **phenol –OH** by acetic
anhydride ((CH₃CO)₂O, 102.09 g/mol) under acid catalysis (a few drops of H₃PO₄) to give **aspirin**
(acetylsalicylic acid, C₉H₈O₄, 180.16 g/mol) and acetic acid (60.05 g/mol). Acetic anhydride is used rather than
acetic acid because its acetyl transfer is fast and effectively irreversible. The whole exercise is a single
acetylation around one shared aromatic core, run at microscale (138 mg salicylic acid).

## Project structure

```
.
├── index.html          # page shell + window.LAB config (viewers, pathway, calculator, references)
├── content.md          # the lab write-up (narrative, mechanism, procedure) rendered by the shared engine
├── js/structures.js    # embedded SDF geometries (salicylic acid, acetic anhydride, aspirin)
├── data/*.sdf          # source 3D structures from PubChem (PUG-REST)
├── docs/               # the Williamson & Masters lab handout (PDF, downloadable from the page)
├── .devcontainer/      # Codespaces config (Node + auto-served preview)
├── .nojekyll · LICENSE (MIT) · README.md
```

Styling and the rendering engine (`styles.css`, `lab.js`, `nav.js`, 3D viewers, calculator,
references, brand assets) are loaded at runtime from the shared orgolabs site
(`https://orgolabs.github.io/shared/…`), so they are not vendored in this repo.

## Run it locally

Open `index.html`, or serve with `python3 -m http.server`. 3Dmol.js loads from a CDN; if it's blocked the page
shows a fallback and the rest still works.

## References

1. Williamson, K. L.; Masters, K. M. *Macroscale and Microscale Organic Experiments*, 7th ed.; Cengage, 2016; p 534 — the source experiment (bundled in `docs/`).
2. Brown, D. B.; Friedman, L. B. "The aspirin project." *J. Chem. Educ.* **1973**, 50, 214–215. doi:10.1021/ed050p214 — an early one-step synthesis.
3. PubChem (NLM) — compound records & 3D conformers: salicylic acid CID 338, acetic anhydride CID 7918, aspirin CID 2244.

## Credits & licensing

- Site content and code: **MIT License** (see [`LICENSE`](LICENSE)).
- Molecular data: **PubChem**, U.S. National Library of Medicine — **public domain**.
- 3D rendering: **3Dmol.js** (Rego & Koes, *Bioinformatics* 2015) — **BSD-3-Clause**, loaded from a CDN.

> Educational summary only — not a substitute for a supervised laboratory SOP. Acetic anhydride and concentrated
> acids are corrosive; work in a fume hood with appropriate PPE.
