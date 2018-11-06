var url = window.location.href;
if (
    url.includes("acmicpc.net")
) inject("override-commons.css");
if (
    url.includes("acmicpc.net/problemset") ||
    url.includes("acmicpc.net/problem/tag") ||
    url.includes("acmicpc.net/newproblems")
) inject("override-problems1.css");
if (
    url.includes("acmicpc.net/step") ||
    url.includes("acmicpc.net/problem/ranking") ||
    url.includes("acmicpc.net/category/detail")
) inject("override-problems2.css");
if (
    url.includes("acmicpc.net/ranklist") ||
    url.includes("acmicpc.net/school/ranklist") ||
    url.includes("acmicpc.net/group/ranklist") ||
    url.includes("acmicpc.net/group/workbook/view")
) inject("override-problems3.css");
if (
    url.includes("acmicpc.net/category") &&
    !url.includes("acmicpc.net/category/detail")
) inject("override-problems4.css");
if (
    url.includes("acmicpc.net/user")
) inject("override-user1.css");
if (
    url.includes("acmicpc.net/user") ||
    url.includes("acmicpc.net/vs")
) inject("override-user2.css");
if (
    url.includes("acmicpc.net/status")
) inject("override-status.css");

function inject(localCss) {
    console.log(chrome.extension.getURL("css/" + localCss));
    var injection = document.createElement("link");
    injection.setAttribute("rel", "stylesheet");
    injection.setAttribute("type", "text/css");
    injection.setAttribute("href", chrome.extension.getURL("css/" + localCss));
    document.getElementsByTagName("head")[0].appendChild(injection);
}