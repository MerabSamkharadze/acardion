"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const isOpen = content.style.maxHeight;

      document.querySelectorAll(".accordion-content").forEach((item) => {
        item.style.maxHeight = null;
        item.style.padding = "0 15px";
      });

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "15px";
      }
    });
  });
});
