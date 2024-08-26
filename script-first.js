const loginformEl = document.querySelector("form");
// const logindivEl = document.querySelector(".wrapper");

const blobEl = document.querySelector(".blob");

const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");
console.log(blobEl);


loginformEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://register-and-login-with-jwt-token.p.rapidapi.com/user/profile",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "fea8ad469amsh78c4f82d442a674p1fcb7djsna0afd8063714",
            "x-rapidapi-host":
              "register-and-login-with-jwt-token.p.rapidapi.com",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJuYW1lIjoiUmFtIiwiZW1haWwiOiJyYW1AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwicGhvbmVudW1iZXIiOiI5ODYwMDA3MzIifSwiaWF0IjoxNjg4NDQ0MjM2fQ.x4jo69Ni1oEQvKSof4qjjhHABCe8ek5T_LwLtaMVuUo",
          },
        }
      );
        // creat json file from data for use that >>
      const data = await res.json()
      loginformEl.classList.add("hide")
      blobEl.textContent = data.token
        
    } catch (err) {
      alert('noooooooooooooooooooooo')
    }
})