// Live stoichiometry & yield calculator for the synthesis of aspirin
// (salicylic acid + acetic anhydride -> aspirin + acetic acid, 1 : 1).
(function () {
  "use strict";

  var MW_SAL   = 138.12; // salicylic acid, g/mol
  var MW_ANH   = 102.09; // acetic anhydride, g/mol
  var MW_ASA   = 180.16; // aspirin (acetylsalicylic acid), g/mol
  var DEN_ANH  = 1.08;   // acetic anhydride density, g/mL

  var els = {};
  ["in-sal", "in-anh", "in-isolated",
   "o-salmmol", "o-anhmmol", "o-equiv", "o-limiting", "o-theory", "o-yield"
  ].forEach(function (id) { els[id] = document.getElementById(id); });

  function num(el) { var v = parseFloat(el && el.value); return isFinite(v) && v >= 0 ? v : 0; }
  function set(el, value, digits, suffix) {
    if (!el) return;
    el.textContent = value > 0 ? value.toFixed(digits == null ? 2 : digits) + (suffix || "") : "—";
  }

  function update() {
    var salG = num(els["in-sal"]);
    var anhMl = num(els["in-anh"]);
    var isolated = num(els["in-isolated"]);

    var salMmol = (salG / MW_SAL) * 1000;
    var anhMmol = (anhMl * DEN_ANH / MW_ANH) * 1000;
    var equiv = salMmol > 0 ? anhMmol / salMmol : 0;
    var limitingMmol = Math.min(salMmol, anhMmol);
    var theoryG = (limitingMmol / 1000) * MW_ASA;

    set(els["o-salmmol"], salMmol, 2);
    set(els["o-anhmmol"], anhMmol, 2);
    set(els["o-equiv"], equiv, 2, "×");
    if (els["o-limiting"]) {
      els["o-limiting"].textContent = (salMmol === 0 && anhMmol === 0) ? "—"
        : (salMmol <= anhMmol ? "salicylic acid" : "acetic anhydride");
    }
    set(els["o-theory"], theoryG, 3);
    if (isolated > 0 && theoryG > 0) els["o-yield"].textContent = ((isolated / theoryG) * 100).toFixed(1);
    else els["o-yield"].textContent = "—";
  }

  ["in-sal", "in-anh", "in-isolated"].forEach(function (id) {
    if (els[id]) els[id].addEventListener("input", update);
  });

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", update);
  else update();
})();
