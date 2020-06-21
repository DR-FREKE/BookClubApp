class App {
  constructor() {
    this.sideBar = new sideBarComponent();
    this.appState = {
      booklist: BookArray,
      bookSet: [],
    };
    this.topBar = new topBarComponent(this.appState.booklist);
    this.list = new listComponent(this.appState.booklist);
  }
  search() {
    return this.appState.booklist;
  }

  render() {
    return `<div>
              ${this.topBar.render()}
              ${this.sideBar.render()}
              ${this.list.render()}
            </div>`;
  }
}
