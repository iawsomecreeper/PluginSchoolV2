/* 
Page downloader & switcher to make code cleaner.
By (c) Ad5001 2016
*/

num = 0;
articles = document.getElementsByTagName("article");
console.log(articles);
/*l = location.pathname.split("/");
l[l.length - 1] = undefined;
dir = l.join("/");*/
for (i = 0; i < articles.length; i++) {
    console.log("pages/" + articles[i].id + ".html");
    $.get("pages/" + articles[i].id + ".html", function(responseText) {
        setPage(responseText);
    });
}


function setPage(text) {
    document.getElementsByTagName("article")[num].innerHTML = text + '<div class="close" onclick="location.hash=\'\';">Close</div>';
    num++;
}