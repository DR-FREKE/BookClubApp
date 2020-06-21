//require the App class
// var App = require("./App.js");
// fire the window load event i.e when the application launches
window.addEventListener("load", () => {
  //get bar id to open the drawer when clicked
  let getBar = document.getElementById("bar");

  const navID = document.getElementById("navId");
  const minBar = document.getElementById("miniBar");
  const miniArrow = document.getElementById("mini-arrow");

  //get button id for searching
  let btnSearch = document.getElementById("btnSearch");

  //get the id of the search input; we use this for an onKey press Event
  const search = document.getElementById("search");

  //get arrow back id to close the drawer
  let getArrow = document.getElementById("arrow");

  let sideBar = document.getElementById("mSidenav");
  /*when we click on the bar,
  fire the function that calls the drawer**/
  getBar.onclick = () => {
    toggleNavClass("myNavbar", "res");
  };

  /* when we click on back arrow,
  fire the function that closes the drawer**/
  getArrow.onclick = () => {
    toggleNavClass("myNavbar", "slideIn");
  };

  //use the input id to fire the onKeyPress Event
  search.onkeyup = () => {
    let matchList = document.getElementById("match-list");

    const app = new App();
    let list = new topBarComponent(app.search());
    list.openSearchDialog(search.value, matchList);
  };

  btnSearch.onclick = () => {
    let topComp = new topBarComponent();
    if (topComp.checkScreenSize() === true) {
      miniBar.style.display = "grid";
      navID.style.display = "none";
    } else {
      alert("wassa");
    }
  };

  miniArrow.onclick = () => {
    minBar.style.display = "none";
    navID.style.display = "grid";
  };

  //fire flickity class to create a carousel view
  carouselClass();

  setInterval(() => {
    let topComp = new topBarComponent();

    if (topComp.checkScreenSize() == false) {
      minBar.style.display = "none";
      navID.style.display = "grid";
    }
  }, 100);

  window.onclick = (event) => {
    if (event.target == sideBar) {
      toggleNavClass("myNavbar", "slideIn");
    }
  };
});
//use flickity library to create carousel
carouselClass = () => {
  let carousel = document.querySelector(".carousel");

  let flickity = new Flickity(carousel, { groupCells: true });
};

/**
 ** create functional component to perform various task
 */

// function to make the navigation drawer come out and go in
toggleNavClass = (ID, classname) => {
  let getIdToChange = document.getElementById(ID);

  getIdToChange.className = classname;
  getIdToChange.className = getIdToChange.className.replace(
    classname,
    classname
  );
};
