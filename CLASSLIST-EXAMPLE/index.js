document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const myButton = document.getElementById("mybutton");
  const classInfo = document.getElementById("class-info");
  
  // Initialize button with default class
  updateClassInfo();
  
  // Toggle classes on button click
  myButton.addEventListener("click", () => {
    // Toggle the 'enabled' class
    myButton.classList.toggle("enabled");
    
    // Toggle between default and 'newbutton' class
    if (myButton.classList.contains("newbutton")) {
      myButton.classList.remove("newbutton");
      myButton.textContent = "Click Me";
    } else {
      myButton.classList.add("newbutton");
      myButton.textContent = "Clicked!";
    }
    
    // Update the class info display
    updateClassInfo();
  });
  
  // Function to update the class information display
  function updateClassInfo() {
    // Convert DOMTokenList to array for better display
    const classesArray = Array.from(myButton.classList);
    
    if (classesArray.length === 0) {
      classInfo.textContent = "No classes applied";
    } else {
      classInfo.textContent = classesArray.join(", ");
    }
    
    // Add visual indication of which classes are active
    classInfo.innerHTML = classesArray.map(cls => 
      `<span class="class-tag">${cls}</span>`
    ).join(" ");
    
    if (classesArray.length === 0) {
      classInfo.innerHTML = "<em>No classes applied</em>";
    }
  }
  
  // Add keyboard support for accessibility
  myButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      myButton.click();
    }
  });
});
