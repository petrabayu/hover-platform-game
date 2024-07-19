document.addEventListener("DOMContentLoaded", function () {
  const levels = Array.from(document.querySelectorAll(".level"));

  // Sort elements based on the attribute 'l' in ascending order
  levels.sort((a, b) => {
    return parseInt(a.getAttribute("l")) - parseInt(b.getAttribute("l"));
  });

  // Assign z-index starting from the highest value
  levels.forEach((level, index) => {
    level.style.zIndex = 99 - index;
    // level.style.zIndex = levels.length - index;
  });
});
