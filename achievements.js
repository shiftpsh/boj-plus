const navigation = document.querySelector("ul.nav.navbar-nav");
const achievementLi = document.createElement("LI");  
achievementLi.innerHTML = "<a href=\"/achievements\">도전과제</a>";

// Not working
navigation.insertBefore(achievementLi, navigation.childNodes[2]);