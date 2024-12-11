const startCountdown = () => {
  const countdownDate = new Date("January 1, 2025 00:00:00").getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft < 0) {
      document.querySelector("#countdown").innerHTML =
        "<h2>Happy New Year! 🎉</h2>";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.querySelector("#days").textContent = days
      .toString()
      .padStart(2, "0");
    document.querySelector("#hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.querySelector("#minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.querySelector("#seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  };

  updateCountdown();

  setInterval(updateCountdown, 1000);
};

startCountdown();

const fileInput = document.querySelector("#file-upload");
const fileChosen = document.querySelector("#file-chosen");

fileInput.addEventListener("change", (e) => {
  if (e.target.files && e.target.files.length > 0) {
    fileChosen.textContent = "Chosen file: " + e.target.files[0].name;
  } else {
    fileChosen.textContent = "Chosen file: No file chosen";
  }
});
