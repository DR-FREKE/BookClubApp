//simple template that create an html element for a particular book
listItemDIV = (bookListArray) => {
  //create the book list item
  let bookItem = "";

  for (let i = 0; i < bookListArray.length; i++) {
    bookItem += `<div class="bookitem">
                  <div class="book-pic">
                    <img src=${bookListArray[i].pictures}>
                  </div>
                  <div class="book-info">
                    <div class="avail" style='color: ${
                      bookListArray[i].status == "Available" ? "#65c100" : "red"
                    }'>
                      ${bookListArray[i].status}
                    </div>
                    <div class="book-detail">
                      <div class="book">
                        <div class="book-title">${bookListArray[i].title}</div>
                        <div class="book-author">${
                          bookListArray[i].author
                        }</div>
                        <div class="book-type">${bookListArray[i].type}</div>
                      </div>
                      <div class="ratings">
                        <div class="star-rating">
                          <div class="rating-fig">Ratings: 4.0</div>
                          <div class="rating-star">***</div>
                        </div>
                        <div class="divider"></div>
                        <div class="likes">
                          <div class="like-div">
                            <div class="user-icon">
                              <img src="../Assets/Images/user.svg">
                              <div>34</div>
                            </div>
                            <div class="love-icon">
                              <img src="../Assets/Images/love.svg">
                              <div>34</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
  }
  //retun
  return bookItem;
};
