window.addEventListener("DOMContentLoaded", () => {
    const userEmail = localStorage.getItem("userEmail");

    if (userEmail) {
        const firstLetter = userEmail.charAt(0).toUpperCase();

        const loginBtn = document.querySelector(".login-btn");
        const signupBtn = document.querySelector(".signup-btn");

        if (loginBtn) {
            loginBtn.outerHTML = `
        <div style="position:relative; display:inline-block;">
          <button class="avatar-btn" id="avatarBtn">${firstLetter}</button>
          <div class="dropdown-menu" id="dropdownMenu">
            <a href="#" id="logout">🚪 Logout</a>
            <a href="login.html">🔄 Login with another account</a>
          </div>
        </div>
      `;
        }

        if (signupBtn) {
            signupBtn.remove();
        }

        const avatarBtn = document.getElementById("avatarBtn");
        const dropdownMenu = document.getElementById("dropdownMenu");

        if (avatarBtn) {
            avatarBtn.addEventListener("click", () => {
                dropdownMenu.style.display =
                    dropdownMenu.style.display === "block" ? "none" : "block";
            });

            document.addEventListener("click", (e) => {
                if (!avatarBtn.contains(e.target)) {
                    dropdownMenu.style.display = "none";
                }
            });
        }

        const logoutLink = document.getElementById("logout");
        if (logoutLink) {
            logoutLink.addEventListener("click", (e) => {
                e.preventDefault();
                localStorage.removeItem("userEmail");
                window.location.href = "index.html";
            });
        }
    }
});
