document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".tabs");
  const buttons = document.querySelectorAll(".button");
  const contents = document.querySelectorAll(".content");

  tabs.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    if (id) {
      // Update active button
      buttons.forEach((btn) => {
        btn.classList.remove("live");
        btn.setAttribute("aria-selected", "false");
      });
      e.target.classList.add("live");
      e.target.setAttribute("aria-selected", "true");

      // Update active content
      contents.forEach((content) => {
        content.classList.remove("live");
      });
      const activeContent = document.getElementById(id);
      activeContent.classList.add("live");
    }
  });
});
