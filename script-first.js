const loginformEl = document.querySelector("form");
const blobEl = document.querySelector(".blob");

const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");
console.log(blobEl);


loginformEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: emailInput.value,
          password: passwordInput.value,
        }),
      });
        // creat json file from data for use that >>
        const data = await res.json()
        
    }catch(err){}
})