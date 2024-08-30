// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

const currentNav = document.querySelectorAll(".nav-item");

currentNav.forEach((elem) => {
      elem.addEventListener("click", function() {
            currentNav.forEach((elem) => elem.classList.remove("current"));
            this.classList.add('current');
      });
});


