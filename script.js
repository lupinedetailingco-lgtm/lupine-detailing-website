function toggleMenu() {
  const drawer = document.getElementById("navDrawer");
  const backdrop = document.getElementById("navBackdrop");
  const toggle = document.querySelector(".nav-toggle");

  const isOpen = drawer.classList.contains("open");

  if (isOpen) {
    closeMenu();
  } else {
    drawer.classList.add("open");
    backdrop.classList.add("show");
    toggle.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }
}

function closeMenu() {
  const drawer = document.getElementById("navDrawer");
  const backdrop = document.getElementById("navBackdrop");
  const toggle = document.querySelector(".nav-toggle");

  if (!drawer) return;

  drawer.classList.remove("open");
  backdrop.classList.remove("show");
  if (toggle) toggle.setAttribute("aria-expanded", "false");
  drawer.setAttribute("aria-hidden", "true");
  backdrop.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

// Close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});