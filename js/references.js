// References — verified against Crossref/PubChem on 2026-10-24.
// "access": 'open' = free/public, 'paywall' = subscription (DOI still resolves to the record of record).
window.REFERENCES = [
  {
    title: "Synthesis of Aspirin: A General Chemistry Experiment",
    authors: "Olmsted, J., III.",
    meta: "J. Chem. Educ. 1998, 75 (10), 1261–1263.",
    note: "The source experiment for this page: a two-step synthesis (oil of wintergreen → salicylic acid → aspirin) with FTIR characterization.",
    url: "https://doi.org/10.1021/ed075p1261",
    linkText: "doi.org/10.1021/ed075p1261",
    access: "paywall"
  },
  {
    title: "The aspirin project. Laboratory experiments for introductory chemistry",
    authors: "Brown, D. B.; Friedman, L. B.",
    meta: "J. Chem. Educ. 1973, 50 (3), 214–215.",
    note: "The earlier report the one-step salicylic-acid → aspirin synthesis is traced to (cited by Olmsted).",
    url: "https://doi.org/10.1021/ed050p214",
    linkText: "doi.org/10.1021/ed050p214",
    access: "paywall"
  },
  {
    title: "Salicylic acid (CID 338), Acetic anhydride (CID 7918), Aspirin (CID 2244), Methyl salicylate (CID 4133)",
    authors: "PubChem, U.S. National Library of Medicine.",
    meta: "Public-domain compound records: formulas, molar masses, and the computed 3D conformers used by the viewers above.",
    note: "Free and public. The 3D coordinates on this page come directly from these records via the PUG-REST API.",
    url: "https://pubchem.ncbi.nlm.nih.gov/compound/2244",
    linkText: "pubchem.ncbi.nlm.nih.gov/compound/2244",
    access: "open"
  },
  {
    title: "Acetylsalicylic acid (aspirin)",
    authors: "Wikipedia contributors.",
    meta: "Open reference corroborating the esterification of the phenol –OH and the FTIR/characterization features.",
    note: "Free and public; a convenient entry point with onward citations.",
    url: "https://en.wikipedia.org/wiki/Aspirin",
    linkText: "en.wikipedia.org/wiki/Aspirin",
    access: "open"
  },
  {
    title: "3Dmol.js: molecular visualization with WebGL",
    authors: "Rego, N.; Koes, D.",
    meta: "Bioinformatics 2015, 31 (8), 1322–1324.",
    note: "The open-source (BSD-3) library rendering the interactive structures on this page.",
    url: "https://doi.org/10.1093/bioinformatics/btu829",
    linkText: "doi.org/10.1093/bioinformatics/btu829",
    access: "open"
  },
  {
    title: "Synthesis of Aspirin — General Chemistry laboratory experiment (Olmsted)",
    authors: "Course laboratory handout (Olmsted 1998 experiment).",
    meta: "Background, two-step procedure, characterization and waste guidance.",
    note: "The procedure and background on this page follow this handout. Downloadable below.",
    url: "docs/synthesis-of-aspirin-lab-manual.pdf",
    linkText: "Download the lab handout (PDF)",
    access: "open"
  }
];

(function renderRefs() {
  var ol = document.getElementById("ref-list");
  if (!ol || !window.REFERENCES) return;
  window.REFERENCES.forEach(function (r) {
    var li = document.createElement("li");
    var badge = '<span class="access ' + (r.access === "open" ? "open" : "paywall") + '">' +
      (r.access === "open" ? "open access" : "subscription") + "</span>";
    li.innerHTML =
      '<span class="ref-title">' + r.authors + "</span> " +
      "“" + r.title + "” " +
      '<span class="ref-meta">' + r.meta + "</span> " + badge +
      "<br>" + r.note +
      ' <br><a href="' + r.url + '" target="_blank" rel="noopener noreferrer">' + r.linkText + "</a>";
    ol.appendChild(li);
  });
})();
