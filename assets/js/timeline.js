(function () {
  var PASSWORD = "06202026";
  var STORAGE_KEY = "our-story-unlocked";

  var gate = document.getElementById("gate");
  var page = document.getElementById("timeline-page");
  var form = document.getElementById("gate-form");
  var input = document.getElementById("gate-password");
  var error = document.getElementById("gate-error");
  var gateCard = document.querySelector(".gate-card");

  function unlock() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    gate.style.display = "none";
    page.classList.add("visible");
    revealTimelineItems();
  }

  function revealTimelineItems() {
    var items = document.querySelectorAll(".timeline-item");
    items.forEach(function (item, i) {
      setTimeout(function () {
        item.classList.add("revealed");
      }, 80 * i);
    });
  }

  if (sessionStorage.getItem(STORAGE_KEY) === "1") {
    unlock();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value === PASSWORD) {
      error.textContent = "";
      unlock();
    } else {
      error.textContent = "Not quite — try again.";
      gateCard.classList.remove("shake");
      void gateCard.offsetWidth;
      gateCard.classList.add("shake");
      input.value = "";
      input.focus();
    }
  });
})();
