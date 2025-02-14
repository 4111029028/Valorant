document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <nav>
            <div class="nav-wrapper black" style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);">
                <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="index.html" style="font-size: 18px; font-weight: 500; color: #ffffff; letter-spacing: 1px;">首頁</a></li>
                    <li><a href="introduce.html" style="font-size: 18px; font-weight: 500; color: #ffffff; letter-spacing: 1px;">特務資訊</a></li>
                    <li><a href="comment.html" style="font-size: 18px; font-weight: 500; color: #ffffff; letter-spacing: 1px;">留言區</a></li>
                </ul>
            </div>
        </nav>
        
        <ul class="sidenav" id="mobile-nav">
            <li><a href="index.html" style="font-size: 18px; font-weight: 500; letter-spacing: 1px;">首頁</a></li>
            <li><a href="introduce.html" style="font-size: 18px; font-weight: 500; letter-spacing: 1px;">特務資訊</a></li>
            <li><a href="comment.html" style="font-size: 18px; font-weight: 500; letter-spacing: 1px;">留言區</a></li>
        </ul>
    `;

    document.getElementById("header").innerHTML = headerHTML;

    // Initialize the Sidenav
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
});
