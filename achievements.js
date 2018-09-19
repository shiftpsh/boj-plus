const navigation = document.querySelector("ul.loginbar");
const achievementLi = document.createElement("LI");  
achievementLi.innerHTML = "<a href=\"/achievements\">도전과제</a>";
const dividerLi = document.createElement("LI");
dividerLi.className = "topbar-devider";

// navigation.insertBefore(achievementLi, navigation.childNodes[4]);
// navigation.insertBefore(dividerLi, navigation.childNodes[5]);