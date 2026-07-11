/* Gloria Chen — site interactions */
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // Highlight current page in nav
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  // Chinese name meaning toggle
  var trigger = document.querySelector(".name-meaning__trigger");
  var panel = document.getElementById("nameMeaning");
  if (trigger && panel) {
    trigger.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Research flip cards (.flip) and Fun flip cards (.funflip)
  function wireFlip(selector) {
    document.querySelectorAll(selector).forEach(function (flip) {
      function doFlip() { flip.classList.toggle("flipped"); }
      flip.querySelectorAll(".flip__btn").forEach(function (btn) {
        btn.addEventListener("click", function (e) { e.stopPropagation(); doFlip(); });
      });
      flip.addEventListener("click", doFlip);
      flip.setAttribute("tabindex", "0");
      flip.setAttribute("role", "button");
      flip.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); doFlip(); }
      });
    });
  }
  wireFlip(".flip");
  wireFlip(".funflip");

  // Scroll reveal
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { obs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // Floating nav: hide on scroll down, return on scroll up
  var nav = document.querySelector(".nav");
  if (nav) {
    var lastY = window.scrollY;
    window.addEventListener("scroll", function () {
      var yPos = window.scrollY;
      var menuOpen = links && links.classList.contains("open");
      if (!menuOpen) {
        if (yPos > lastY + 4 && yPos > 140) {
          nav.classList.add("nav--hidden");
        } else if (yPos < lastY - 4 || yPos <= 140) {
          nav.classList.remove("nav--hidden");
        }
      }
      lastY = yPos;
    }, { passive: true });
  }

  // Footer year
  var y = document.getElementById("year");
  if (y) { y.textContent = new Date().getFullYear(); }

  // Beyond Academia intro animation
  var intro = document.getElementById("intro");
  if (intro) {
    document.body.style.overflow = "hidden";
    function dismiss() {
      intro.classList.add("intro--done");
      document.body.style.overflow = "";
      setTimeout(function () { if (intro.parentNode) intro.parentNode.removeChild(intro); }, 900);
    }
    var skip = document.getElementById("introSkip");
    if (skip) { skip.addEventListener("click", dismiss); }
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTimeout(dismiss, reduceMotion ? 700 : 5400);
  }
})();
