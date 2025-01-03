import logo from "/src/assets/icons/battleship-logo.svg"

export function initializeSidebar() {
  const hamburgerMenu = document.querySelector(".hamburger-menu")

  // create the sidebar and overlay
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar")
  const overlay = document.createElement("div");
  overlay.classList.add("overlay")

  sidebar.innerHTML = `
    <div class="sidebar-top">
      <div class="left">
        <img class="logo-sidebar" src="${logo}">
        <h1 class="logo-name-sidebar">Battleship</h1>
      </div>
      <button class="close-btn">
        <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>      
      </button>
    </div>
    <div class="nav-sidebar-list">
      <ul>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <a href="index.html" id="home-sidebar">Home</a>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
          <a href="controls.html" id="controls-sidebar">How to Play</a>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          <a href="about.html" id="about-sidebar">About</a>
        </li>
      </ul>
    </div>
  `;

  document.body.appendChild(sidebar);
  document.body.appendChild(overlay);

  // open sidebar on hamburger menu click
  hamburgerMenu.addEventListener("click", () => {
    sidebar.style.left = "0";
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
  });

  // close sidebar on overlay or close button click
  overlay.addEventListener("click", closeSidebar);
  document.querySelector(".close-btn").addEventListener("click", closeSidebar);

  function closeSidebar() {
    sidebar.style.left = "-300px";
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
  }
} 