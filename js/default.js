function menuButton() {
  var menu = document.getElementsByClassName("menu")[0];
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  };
  // console.log(menu.getElementsByTagName("li"));
  // if (menu.style.height == "0px") {
  //   menu.style.height = "256px";
  //   menu.getElementsByTagName("li").style.padding = "1.4em 0";
  //   menu.getElementsByTagName("li").style.border = "1px solid grey 0 0 0";
  //   menu.getElementsByTagName("li").style.font= "18px";
  // } else {
  //   menu.style.height = "0px";
  //   menu.getElementsByTagName("li").style.padding = "0";
  //   menu.getElementsByTagName("li").style.border = "0";
  //   menu.getElementsByTagName("li").style.font = "0";
  // };
};
