document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const isOpen = content.style.display === "block";
      document
        .querySelectorAll(".accordion-content")
        .forEach((item) => (item.style.display = "none"));
      if (!isOpen) {
        content.style.display = "block";
      }
    });
  });
});
