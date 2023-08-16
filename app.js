// Create an IntersectionObserver to track elements' visibility changes
const observer = new IntersectionObserver((entries) => {
    // Iterate through each observed entry
    entries.forEach((entry) => {
        // If the element is currently intersecting the viewport
        if (entry.isIntersecting) {
            // Add the "show" class to reveal the element
            entry.target.classList.add("show");
        } else {
            // Otherwise, remove the "show" class to hide the element
            entry.target.classList.remove("show");
        }
    });
  });
  
  // Select all elements with the "show" class
  const showElements = document.querySelectorAll(".showLeft, .showRight , .showImg, .showLeft_slow, .showUp");
  
  // Observe each show element for intersection changes
  showElements.forEach((el) => observer.observe(el));
  