// JavaScript for generating a random feel-good message with a fade and balloon pop effect

const messages = [
    "You are amazing just the way you are! 🌟",
    "Take a deep breath and enjoy this moment. 🌈",
    "You deserve all the care and love in the world. 💖",
    "Remember, every day is a fresh start! 🌞",
    "Your strength is inspiring! 💪",
    "You shine brighter than any crown! 👑"
  ];
  
  const btn = document.getElementById("feelGoodBtn");
  const messagePara = document.getElementById("message");
  
  // Function to update the message with a fade effect and balloon pop effect
  function updateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    // Remove fade class to restart the animation
    messagePara.classList.remove("fade");
    void messagePara.offsetWidth; // trigger reflow
    messagePara.textContent = messages[randomIndex];
    messagePara.classList.add("fade");
    
    // Create balloon effect
    createBalloonEffect();
  }
  
  // Function to create a balloon pop effect near the button
  function createBalloonEffect() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.textContent = "🎈";
    // Position the balloon relative to the button
    const rect = btn.getBoundingClientRect();
    const containerRect = document.querySelector(".container").getBoundingClientRect();
    const left = rect.left - containerRect.left + rect.width / 2;
    const top = rect.top - containerRect.top;
    balloon.style.left = left + "px";
    balloon.style.top = top + "px";
    document.querySelector(".container").appendChild(balloon);
    // Remove balloon after animation completes (1 second)
    setTimeout(() => {
      balloon.remove();
    }, 1000);
  }
  
  // Show a default quote on page load
  document.addEventListener("DOMContentLoaded", () => {
    updateMessage();
  });
  
  // Update the quote on button click
  btn.addEventListener("click", updateMessage);
  