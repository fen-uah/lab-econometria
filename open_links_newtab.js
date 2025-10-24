document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("#") && !href.startsWith("mailto:")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
