(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.getElementById("deal-filters");
  if (!form) return;

  var q = document.getElementById("q");
  var cat = document.getElementById("category");
  var elig = document.getElementById("eligibility");
  var status = document.getElementById("filter-status");
  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-deal]"));

  function norm(s) {
    return (s || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function apply() {
    var query = norm(q && q.value);
    var category = cat && cat.value ? cat.value : "";
    var eligibility = elig && elig.value ? elig.value : "";
    var shown = 0;

    cards.forEach(function (card) {
      var hay = norm(card.getAttribute("data-search") || card.textContent);
      var cats = (card.getAttribute("data-category") || "").split(/\s+/);
      var eligs = (card.getAttribute("data-eligibility") || "").split(/\s+/);
      var ok = true;
      if (query && hay.indexOf(query) === -1) ok = false;
      if (category && cats.indexOf(category) === -1) ok = false;
      if (eligibility && eligs.indexOf(eligibility) === -1) ok = false;
      card.hidden = !ok;
      if (ok) shown += 1;
    });

    if (status) {
      var total = cards.length;
      if (shown === total && !query && !category && !eligibility) {
        status.textContent = total + " verified programs listed. Filter by category or eligibility to narrow the list.";
      } else if (shown === 0) {
        status.textContent = "No verified programs match those filters. Clear a filter or browse a category page.";
      } else {
        status.textContent = "Showing " + shown + " of " + total + " verified programs.";
      }
    }
  }

  form.addEventListener("input", apply);
  form.addEventListener("change", apply);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    apply();
  });
  apply();
})();
