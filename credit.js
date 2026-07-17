document.addEventListener("DOMContentLoaded", function(){
    var backToTopButton = document.getElementById("TOP");
    var scrollButton = document.getElementById("SCROLL");

    window.addEventListener("scroll", function() {
        // 画面のスクロール量が100pxを超えたらボタンを表示
        if (window.scrollY > 100) {
            backToTopButton.style.visibility = "visible";
            scrollButton.style.visibility = "hidden";
        } else {
            backToTopButton.style.visibility = "hidden";
            scrollButton.style.visibility = "visible";
        }
    });

    backToTopButton.addEventListener("click", function() {
        // スクロールをトップに戻す
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    scrollButton.addEventListener("click", function() {
        // スクロールをトップに戻す
        window.scrollTo({ top: 500, behavior: 'smooth' });
    });
});