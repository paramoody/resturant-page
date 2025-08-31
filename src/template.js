import './styles.css';
export default()=>{



let content = document.querySelector('.content');
content.innerHTML ='';
let links = document.createElement('div');
links.classList.add('links');
content.appendChild(links);
let logo = document.createElement('h1');
logo.id = 'logo'
logo.textContent = "Ben's Restaurant";

links.appendChild(logo);
let breakfastLink = document.createElement('a');
breakfastLink.setAttribute("href", "https://www.google.com");
breakfastLink.textContent = "Breakfast";
links.appendChild(breakfastLink);

let lunchLink = document.createElement('a');
lunchLink.setAttribute("href", "https://www.google.com");
lunchLink.textContent = "Lunch";
links.appendChild(lunchLink);

let dinnerLink = document.createElement('a');
dinnerLink.setAttribute("href", "https://www.google.com");
dinnerLink.textContent = "Dinner";
links.appendChild(dinnerLink);

let reservationLink = document.createElement('a');
reservationLink.setAttribute("href", "https://www.google.com");
reservationLink.textContent = "Make a Reservation";
links.appendChild(reservationLink);

let headline = document.createElement('div');
headline.classList.add("headline");
headline.textContent = "We are open for business";
content.appendChild(headline);

let pictures = document.createElement('div');
pictures.classList.add("pictures");
let sandwichImg = document.createElement('img');
sandwichImg.src = "https://www.watermelon.org/wp-content/uploads/2023/02/Sandwich_2023-1000x1000.jpg";
sandwichImg.id = "sandwich-pic"
pictures.appendChild(sandwichImg);
content.appendChild(pictures);

let social = document.createElement('div');
social.classList.add("social");
content.appendChild(social);

let socialBox1 = document.createElement('div');
socialBox1.classList.add("social-box");
socialBox1.textContent = "Check our socials";
social.appendChild(socialBox1);

let socialBox2 = document.createElement('div');
socialBox2.classList.add("social-box");
socialBox2.textContent = "More socials";
social.appendChild(socialBox2);

}
/* <div id="content">
        <div class="links">
          <h1 id="logo">logo</h1>
          <a href="https://www.google.com">Breakfast</a>
          <a href="https://www.google.com">Lunch</a>
          <a href="https://www.google.com">Dinner</a>
          <a href="https://www.google.com">Make a Reservation</a>
        </div>
        <div class="headline">We are open for business!</div>
        <div class="pictures"><img id="sandwich-pic" src="sandwich.png" alt="a sandwich"></div>
        <div class="social">
          <div class="social-box">Check our socials</div>
          <div class="social-box">more socials</div>
        </div>
      </div> */
