const url_ic_bronze = chrome.runtime.getURL("/svg/ic_bronze.svg");
const url_ic_silver = chrome.runtime.getURL("/svg/ic_silver.svg");
const url_ic_gold = chrome.runtime.getURL("/svg/ic_gold.svg");

const title = document.querySelector("title");
title.innerHTML = "도전과제";
const root = document.querySelector("div.container.content");
root.innerHTML =
"<div class=\"row\">" +
    "<div class=\"col-md-12\">" +
        "<div class=\"page-header\">" +
            "<h1></h1>" +
            "<blockquote>" +
                "<div class=\"achievement-count gold\"><img src=\"" + url_ic_gold + "\">64</div> " +
                "<div class=\"achievement-count silver\"><img src=\"" + url_ic_silver + "\">128</div> " +
                "<div class=\"achievement-count bronze\"><img src=\"" + url_ic_bronze + "\">512</div>" +
            "</blockquote>"
        "</div>" +
    "</div>" +
"</div>";

const header_username = document.querySelector(".page-header>h1");
header_username.innerHTML = "shiftpsh";