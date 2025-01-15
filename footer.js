document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
        <footer class="page-footer black">
            <div class="container" style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 15px;">
                <span style="font-family: 'Roboto', sans-serif; font-size: 16px; letter-spacing: 1px; color: #ffffff;">
                    © 2025 Copyright 4111029028
                </span>
                <a href="https://www.facebook.com/VALORANTtw/" target="_blank">
                    <img src="facebook.png" alt="Facebook" style="width: 30px; height: 30px;">
                </a>
                <a href="https://www.instagram.com/valoranttw" target="_blank">
                    <img src="instagram.png" alt="Instagram" style="width: 30px; height: 30px;">
                </a>
            </div>
        </footer>
    `;

    document.getElementById("footer").innerHTML = footerHTML;
});
