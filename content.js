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

var userLinks = document.getElementsByTagName("a");
userLinks = [].slice.call(userLinks, 0);
userLinks
    .filter(function (item) {
        return item.getAttribute("href").startsWith("/user/")
    })
    .forEach(function (item, index) {
        getDom("https://www.acmicpc.net" + item.getAttribute("href"), function (dom) {
            const statics = dom.querySelector("table#statics");
            const rank = statics.querySelector("td").innerHTML;

            item.setAttribute("rel", "tooltip");
            item.setAttribute("data-placement", "right");
            item.setAttribute("class", "tooltip-click");
            item.setAttribute("title", "#" + rank);

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

