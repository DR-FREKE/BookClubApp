window.addEventListener("load", () => {
  const app = new App();
  document.getElementById("app").innerHTML = app.render();
});
