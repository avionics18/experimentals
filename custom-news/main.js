// Refinement-->
// - If newsList contains less than 4 news (logic for that)


document.addEventListener("DOMContentLoaded", function(event) { 
  const newsUp = document.getElementById('news-up');
  const newsDown = document.getElementById('news-down');
  const newsListWrapper = document.getElementById('news-list');

  // === News Board Constants ===
  let newsList = [], startIndex = 0;
  const maxNewsDisplay = 4;
  const animationSpeed = 500; // unit: milliseconds
  // ============================
  
  function renderNews() {
    let listItems = "";

    for(let i = startIndex; i < (startIndex + maxNewsDisplay); i++) {
      let idx = i % newsList.length;
      listItems += `<li><div><a href="#"><b>${idx+1})</b> ${newsList[idx].title}</a><span class="text-gray small"><i class="fa fa-clock-o"></i> ${newsList[idx].date} | <i class="fa fa-map-marker"></i> ${newsList[idx].location}</span></div></li>`;
    }
    newsListWrapper.innerHTML = listItems;
  }

  async function getNews() {
    let res = await fetch('./data.json');
    let data = await res.json();
    newsList = [...data.news];
    renderNews();
  }
  // Fetch All the news
  getNews();


  // ~~~~~~News Up & Down Functionality~~~~~~
  // Initial Setup
  document.querySelector('head').innerHTML += `<style>#news-list li { transition: ${animationSpeed / 1000}s; }</style>`;

  newsUp.addEventListener('click', function() {
    let fc = newsListWrapper.firstChild;

    startIndex++;
    fc.style.opacity = 0;
    setTimeout(() => {
      // - display: none
      // - remove that element from the wrapper
      // - insert new element in wrapper
      fc.style.display = 'none';
      renderNews();
    }, animationSpeed);
  });

  newsDown.addEventListener('click', function() {
    let lc = newsListWrapper.lastChild;

    startIndex--;
    if(startIndex < 0) {
      startIndex = newsList.length - 1;
    }
    lc.style.opacity = 0;
    setTimeout(() => {
      // - display: none
      // - remove that element from the wrapper
      // - insert new element in wrapper
      lc.style.display = 'none';
      renderNews();
    }, animationSpeed);
  });

});