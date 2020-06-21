carouselComponent = (carouselList) => {
  let carouselcells = "";
  carouselList.map((carousel) => {
    const splitAuthor = carousel.author.split("-");
    carouselcells += `<div class="carousel-cell">
      <img src=${carousel.pictures} alt="" class="cell-image" />
        <div class="ellip">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      <div class="overlay">
        <div class="overlay-info">
          <div class="status" style=color:${
            carousel.status == "Available" ? "#65c100" : "red"
          }>${carousel.status}</div>

          <div class="bookBox">
            <div class="Booktitle">Effective Python</div>
            <div class="author">
              ${splitAuthor[0]}
            </div>
            <div class="book-year">${
              splitAuthor[1] == undefined ? "2000" : splitAuthor[1]
            }</div>
          </div>

          <div class="book-type">
            <div class="genre">
              <span>Genre:</span> ${carousel.type}
            </div>
            <div class="labels">
              <span>Labels:</span> Creative, Self-help
            </div>
          </div>

          <div class="book-rating">
            <div class="libBookRate">Ratings</div>
          </div>
        </div>
      </div>
    </div>`;
  });
  return carouselcells;
};
