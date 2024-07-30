"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const isOpen = content.style.maxHeight;

      // Close all open accordion items
      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.style.maxHeight = null;
        item.style.padding = "0 15px";
      });

      // Open the clicked accordion item if it was closed
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "15px";
      }
    });
  });
});
