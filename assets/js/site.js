(function () {
  // ── Theme toggle ────────────────────────────────────────────
  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  function current() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (btn) {
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // ── Archive filter ──────────────────────────────────────────
  var input = document.getElementById("archive-filter");
  var list = document.getElementById("archive-list");
  if (input && list) {
    var rows = list.querySelectorAll(".archive-row");
    var kindBtns = document.querySelectorAll(".archive-kinds button");
    var empty = document.getElementById("archive-empty");
    var kind = "all";
    function apply() {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      rows.forEach(function (r) {
        var ok = (kind === "all" || r.dataset.kind === kind) && (!q || r.dataset.search.indexOf(q) !== -1);
        r.hidden = !ok;
        if (ok) shown++;
      });
      // Hide year headings with no visible rows.
      list.querySelectorAll(".archive-year").forEach(function (ul) {
        var any = ul.querySelector(".archive-row:not([hidden])");
        ul.hidden = !any;
        if (ul.previousElementSibling) ul.previousElementSibling.hidden = !any;
      });
      if (empty) empty.hidden = shown > 0;
    }
    input.addEventListener("input", apply);
    kindBtns.forEach(function (b) {
      b.addEventListener("click", function () {
        kind = b.dataset.kind;
        kindBtns.forEach(function (o) { o.setAttribute("aria-pressed", o === b ? "true" : "false"); });
        apply();
      });
    });
  }
})();
