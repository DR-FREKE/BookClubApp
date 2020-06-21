class listComponent {
  constructor(listBookArray) {
    this.listofBooks = listBookArray;
    this.recentArray = [];
  }

  showAllBooks = () => {
    return listItemDIV(this.listofBooks);
  };

  //a function that ta
  showRecentBooks = () => {
    this.recentArray = [...this.listofBooks];
    const recent = this.recentArray.splice(
      Math.max(this.recentArray.length - 5, 1)
    );
    return listItemDIV(recent);
  };

  displayCarousel = () => {
    return carouselComponent(this.listofBooks);
  };

  render() {
    return `<div class="main" id="mainapp">
              <div class="grid">
                <div class="carousel-div">
                  <div class="carousel-header">
                    <div class="title">FEATURED BOOKS</div>
                  </div>
                  <div class="carousel-body">
                    <div class="carousel" id="carouselId">
                      ${this.displayCarousel()}
                    </div>
                  </div>
                </div>
                <div class="recently-added">
                  <div class="recently-header">
                    <div class="title">RECENTLY ADDED</div>
                  </div>
                  <div class="recentadd-body" id="recentBook">
                    ${this.showRecentBooks()}
                  </div>
                </div>
                <div class="all-books">
                  <div class="allBooks-header">
                    <div class="title">ALL BOOKS</div>
                  </div>
                  <div class="allBooks-body" id="allBookId">
                    ${this.showAllBooks()}
                  </div>
                </div>
              </div>
            </div>`;
  }
}
