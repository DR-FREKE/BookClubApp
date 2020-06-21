class sideBarComponent {
  constructor() {}

  render() {
    return drawerComponent();
  }
}

//functional component
drawerComponent = () => {
  return `<div class="mNav" id="myNavbar">
    <div class="sidenav" id="mSidenav">
      <div class="nav-drawer">
        <div class="nav-drawer-header" id="">
          <div class="back-arrow">
            <div class="arrow-icon" id="arrow">
              <img src="../Assets/Images/backarrow.svg" alt="" />
            </div>
          </div>
          <div class="navBrand" id="branding">
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
        </div>
        <div class="mSidebar">
          <div class="section user-section">
            <ul class="" id="">
              <li class="active"><a href="">Home</a></li>
              <li><a href="">Profile</a></li>
              <li class="notify">
                <a href="">Notification</a>
                <span class="badge">3</span>
              </li>
            </ul>
          </div>
          <div class="section explore-section">
            <ul>
              <li class="list-header">Explore</li>
              <li><a href="">Books</a> <span>273</span></li>
              <li><a href="">Genres</a> <span>42</span></li>
              <li><a href="">Authors</a><span>107</span></li>
            </ul>
          </div>
          <div class="section books-section">
            <ul>
              <li class="list-header">My Books</li>
              <li><a href="">Queued</a> <span>3</span></li>
              <li><a href="">Currently Borrowed</a><span>0</span></li>
              <li><a href="">Favourites</a><span>19</span></li>
              <li><a href="">History</a></li>
            </ul>
          </div>
          <div class="section admin-section">
            <ul>
              <li class="list-header">Admin</li>
              <li><a href="">Book Requests</a></li>
              <li><a href="">Members</a></li>
              <li><a href="">Library Settings</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};
