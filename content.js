function getJson(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            callback(data);
        } else {
            // TODO
        }
    };
    request.onerror = function () {
        // TODO
    };
    request.send();
}

function getDom(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var el = document.createElement('html');
            el.innerHTML = request.responseText;
            callback(el);
        } else {
            // TODO
        }
    };
    request.onerror = function () {
        // TODO
    };
    request.send();
}

function formatPercentage(x) {
    if (x > 100) {
        return "100.0";
    } else if (x > 20) {
        return x.toFixed(1);
    } else if (x > 2) {
        return x.toFixed(2);
    } else if (x > 0.2) {
        return x.toFixed(3);
    } else if (x > 0.02) {
        return x.toFixed(4);
    } else if (x > 0.002) {
        return x.toFixed(5);
    } else {
        return x.toFixed(6);
    }
}

var leastRank = 75876;
getDom("https://www.acmicpc.net/user/00076387", function (dom) {
    const statics = dom.querySelector("table#statics");
    leastrank = statics.querySelector("td").innerHTML;
});

var userLinks = document.getElementsByTagName("a");
userLinks = [].slice.call(userLinks, 0);
userLinks
    .filter(function (item) {
        return item.getAttribute("href") && item.getAttribute("href").startsWith("/user/")
    })
    .forEach(function (item, index) {
        const user = item.getAttribute("href").split("/")[2];

        getDom("https://www.acmicpc.net" + item.getAttribute("href"), function (dom) {
            const statics = dom.querySelector("table#statics");
            const solved = statics.querySelector("tr:nth-child(2) td").innerText;
            const bojRank = statics.querySelector("tr:nth-child(1) td").innerText;
            const bojPercent = bojRank / leastRank * 100;

            item.setAttribute("rel", "tooltip");
            item.setAttribute("data-placement", "right");
            item.setAttribute("data-html", "true");
            item.setAttribute("class", "tooltip-click");
            item.setAttribute("title",
                "<table style=\"text-align:left; border-spacing: 4px; border-collapse: separate;\">" +
                "<tr>" +
                "<td>Solved </td><td><b>" + solved + "</b></td><td></td>" +
                "</tr>" +
                "<tr>" +
                "<td>BOJ </td><td><b>#" + bojRank + "</b></td><td> (상위 " + formatPercentage(bojPercent) + "%)</td>" +
                "</tr>" +
                "</table>");

            $("[rel=tooltip]").tooltip();
            $("[rel=tooltip]").click(function () {
                if ($(this).hasClass('tooltip-click')) {
                    return true;
                } else {
                    return false;
                }
            });
        });
    })

$('.dropdown-toggle').dropdown();