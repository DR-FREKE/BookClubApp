//every result gotten from the search function inject result into this div
injectToDialog = (matchList, matches) => {
  if (matches.length > 0) {
    const dialogContent = matches
      .map(
        (match) => `
      <div class="dialog dialog-body">
        <h5>${match.title} - ${match.author}</h5>
      </div>
      `
      )
      .join("");
    matchList.innerHTML = dialogContent;
  }
};
