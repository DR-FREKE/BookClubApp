class topBarComponent {
  constructor(listofBooks) {
    this.listBook = listofBooks;
  }

  openSearchDialog = (searchText, matchList) => {
    // div that holds our search match
    // let matchList = document.getElementById("match-list");

    const getArrayToSearch = this.listBook;

    //get matches to current text input
    let matches = getArrayToSearch.filter((availableBooks) => {
      const regex = new RegExp(`^${searchText}`, "gi");
      return (
        availableBooks.title.match(regex) || availableBooks.author.match(regex)
      );
    });
    if (searchText.length === 0) {
      matches = [];
      matchList.innerHTML = "";
    }

    injectToDialog(matchList, matches);
  };

  checkScreenSize = () => {
    const mediaScreen = window.matchMedia(
      `(max-width: 700px),
      (min-device-width: 768px)
      and (max-device-width: 1024px)`
    ); //returns true if

    if (mediaScreen.matches) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return originalComponent(this.checkScreenSize());
  }
}

//functional component
originalComponent = (props) => {
  return `<header id="bannerId" class="banner">
      <!-- search div element -->
      <div class="match-search">
        <div class="match-container" id="match-list"></div>
      </div>
      <div class="mini" id="miniBar">
        <div class="back-arrow">
          <div class="arrow-icon" id="mini-arrow">
            <img src="../Assets/Images/backarrow.svg" alt="" />
          </div>
        </div>
        <div class="mini-search">
          <div class="mini-input">
            <div class="mini-searchBox">
              <input
                type="text"
                id=""
                placeholder="Search books, genres, authors, etc."
              />
              <div class="icon">
                <button id="">
                  <img src="../Assets/Images/search.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav id="navId">
        <div class="humbarger">
          <div class="totalBar" id="bar" onClick='props'>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div>
        <div class="brand" id="quidaxBrand">
          <div class="brand-details">
            <div class="brand-logo">
              <div class="logo">
                <img src="../Assets/Images/shape.svg" alt="" />
              </div>
            </div>
            <div class="brand-info">
              <ul>
                <li><span>Quidax Book Club</span></li>
                <li><span>Admin</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="searchBar-div">
          <div class="search">
            <div class="searchBox">
              <input
                type="text"
                id="search"
                placeholder="Search books, genres, authors, etc."
              />
              <div class="icon">
                <button id="btnSearch">
                  <img src="../Assets/Images/search.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="right-nav">
          <div class="nav-list">
            <ul class="group">
              <li><img src="../Assets/Images/library.svg" alt="" /></li>
              <li class="notification-bell">
                <img src="../Assets/Images/bell.svg" alt="" />
                <div class="badge">3</div>
              </li>
            </ul>
            <div class="profile">
              <div class="avatar">
                <img src="../Assets/Images/Ellipse.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>`;
};
