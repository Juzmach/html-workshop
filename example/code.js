function init() {
    displayArticle(0);
}

function displayArticle(index) {
    var sections = document.getElementsByTagName("article");

    for (var i = 0; i < sections.length; i++) {
        if (index === i) {
            sections[i].className = '';
        } else {
            sections[i].className = 'hidden';
        }
    }
}
