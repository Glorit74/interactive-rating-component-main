const votingHTML = `
  <main class="container">
    <section class="rate_container">
        <span class="star"><img src="images/icon-star.svg" alt="star" /></span>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
          <div class="radio">
            <input type="radio" name="rate" id="rate_1" value="1" />
            <label for="rate_1">1</label>
            <input type="radio" name="rate" id="rate_2" value="2" />
            <label for="rate_2">2</label>
            <input type="radio" name="rate" id="rate_3" value="3" />
            <label for="rate_3">3</label>
            <input type="radio" name="rate" id="rate_4" value="4" />
            <label for="rate_4">4</label>
            <input type="radio" name="rate" id="rate_5" value="5" />
            <label for="rate_5">5</label>
          </div>
         <button onclick="getVote()">Submit</button> 
    </section>
	</main>
  `;
//    Rating state end

const thankHTML = `
 <main class="container">
	  <section class="thank_container">
        <div class="thank">
          <img
            src="images/illustration-thank-you.svg"
            alt="Illustration thank you"
          />
        </div>
        <header>
          You selected
          <span id="myRate"></span>
          out of 5
        </header>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </section>
	  </main>
`;
// Thank you state end

const footerHTML = `
   <footer class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by Glorit74.
    </footer>
  `;
let vote;

function getVote() {
  vote = document.querySelector('input[name="rate"]:checked').value;
  switchSection();
}

function switchSection() {
  let element = document.querySelector("main");
  element.remove();
  document.getElementById("root").insertAdjacentHTML("afterbegin", thankHTML);
  document.getElementById("myRate").innerHTML = vote;
}

function loadEvent() {
  const rootElement = document.getElementById("root");

  rootElement.insertAdjacentHTML("afterbegin", votingHTML);
  rootElement.insertAdjacentHTML("beforeend", footerHTML);
}
window.addEventListener("load", loadEvent);
