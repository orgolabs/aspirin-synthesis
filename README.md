<p align="center">
  <a href="https://github.com/orgolabs"><img src="brand/orgolabs-wordmark.png" alt="orgolabs — organic chemistry labs" width="300"></a>
</p>

# Synthesis of Aspirin — an interactive, fact-checked explainer

> Part of **[orgolabs](https://github.com/orgolabs)** — interactive, fact-checked organic chemistry labs.
> **Live site:** https://orgolabs.github.io/aspirin-synthesis/

An open educational resource on the **synthesis of aspirin (acetylsalicylic acid)** from **salicylic acid** and
**acetic anhydride**, based on the general-chemistry experiment of **Olmsted (J. Chem. Educ. 1998, 75, 1261)**.
It shows *how* and *why* the reaction works, with:

- **Real 3D structures** you can rotate and zoom (ball-and-stick / stick / space-fill) via
  [3Dmol.js](https://3dmol.csb.pitt.edu/): oil of wintergreen → salicylic acid → aspirin, plus acetic anhydride.
- A **mechanism** section (acid-catalysed nucleophilic acyl substitution; why acetic anhydride beats acetic
  acid; how FTIR proves it worked — loss of the broad O–H, appearance of two C=O peaks).
- The **two-step laboratory procedure** from the Olmsted experiment (hydrolysis of oil of wintergreen to
  salicylic acid, then acetylation to aspirin), with reagent table, safety, and waste guidance. The source PDF
  is bundled in `docs/` and linked from the page.
- A **live, limiting-reagent-aware yield calculator** pre-filled with the experiment's amounts.
- **Verified references** with access labels (open vs. subscription) and resolvable DOIs.

Single static site — no build step, no framework.

## The chemistry in one paragraph

Salicylic acid (2-hydroxybenzoic acid, C₇H₆O₃, 138.12 g/mol) is acetylated on its **phenol –OH** by acetic
anhydride ((CH₃CO)₂O, 102.09 g/mol) under acid catalysis (a few drops of H₃PO₄) to give **aspirin**
(acetylsalicylic acid, C₉H₈O₄, 180.16 g/mol) and acetic acid (60.05 g/mol). Acetic anhydride is used rather than
acetic acid because its acetyl transfer is fast and effectively irreversible. In the general-chemistry version
the salicylic acid is itself first made by hydrolysing **oil of wintergreen** (methyl salicylate, C₈H₈O₃), so
the full exercise is a two-step synthesis around one shared aromatic core.

## Project structure

```
.
├── index.html          # the page (content + layout)
├── css/styles.css       # shared orgolabs design system
├── js/
│   ├── structures.js    # embedded SDF geometries (wintergreen, salicylic acid, acetic anhydride, aspirin)
│   ├── viewer.js        # 3Dmol.js viewers + display controls
│   ├── calculator.js    # live limiting-reagent yield math
│   └── references.js    # reference list (rendered into the page)
├── data/*.sdf           # source 3D structures from PubChem (PUG-REST)
├── docs/                # the Olmsted 1998 lab handout (PDF, downloadable from the page)
├── brand/               # orgolabs logo assets
├── .nojekyll · LICENSE (MIT) · README.md
```

## Run it locally

Open `index.html`, or serve with `python3 -m http.server`. 3Dmol.js loads from a CDN; if it's blocked the page
shows a fallback and the rest still works.

## References

1. Olmsted, J., III. *J. Chem. Educ.* **1998**, 75 (10), 1261–1263. doi:10.1021/ed075p1261 — the source experiment.
2. Brown, D. B.; Friedman, L. B. "The aspirin project." *J. Chem. Educ.* **1973**, 50, 214–215. doi:10.1021/ed050p214 — earlier one-step synthesis.
3. PubChem (NLM) — compound records & 3D conformers: salicylic acid CID 338, acetic anhydride CID 7918, aspirin CID 2244, methyl salicylate CID 4133.

## Credits & licensing

- Site content and code: **MIT License** (see [`LICENSE`](LICENSE)).
- Molecular data: **PubChem**, U.S. National Library of Medicine — **public domain**.
- 3D rendering: **3Dmol.js** (Rego & Koes, *Bioinformatics* 2015) — **BSD-3-Clause**, loaded from a CDN.

> Educational summary only — not a substitute for a supervised laboratory SOP. Acetic anhydride and concentrated
> acids are corrosive; work in a fume hood with appropriate PPE.
