const newsContainer = document.querySelector('#crypto-news');

async function fetchPrices() {
  const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false";
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
}

const displayPrices = (data) => {
  const pricesContainer = document.querySelector('#crypto-prices');
  pricesContainer.innerHTML = ''; // Clear previous content
  data.forEach(coin => {
    const priceElement = document.createElement('div');
    priceElement.classList.add('price-item');

    const icon = document.createElement('img');
    icon.setAttribute('src', coin.image);
    icon.setAttribute('alt', `Logo of ${coin.name}`);
    icon.setAttribute('loading', 'lazy');
    icon.classList.add('crypto-icon');

    const coinName = document.createElement('h3');
    coinName.textContent = coin.name;

    const priceValue = document.createElement('p');
    priceValue.textContent = ` $${coin.current_price}`;

    priceElement.appendChild(coinName);
    priceElement.appendChild(priceValue);
    priceElement.appendChild(icon);

    pricesContainer.appendChild(priceElement);
  });
}

fetchPrices().then(data => {
  if (data) displayPrices(data);
});

const API_KEY = "ccbe41ff178240c99b829e069c0a32b9"; // Replace with your actual API key

const newsApiUrl = `https://newsapi.org/v2/everything?q=apple&from=2025-06-13&to=2025-06-13&sortBy=popularity&apiKey=${API_KEY}`;

async function fetchNews() {
  try {
    const response = await fetch(newsApiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

const displayNews = (articles) => {
  newsContainer.innerHTML = ''; // Clear previous content
  articles.forEach(info => {
    const card = document.createElement('li');
    card.classList.add('member-card');

    const name = document.createElement('h3');
    name.textContent = info.title;

    const description = document.createElement('p');
    description.textContent = info.description;

    card.appendChild(name);
    card.appendChild(description);

    newsContainer.appendChild(card);
  });
}

fetchNews().then(articles => {
  if (articles && articles.length > 0) {
    const top3 = articles.slice(0, 3);
    displayNews(top3);
  }
});

// return 5 articles from the news API
// Note: The above code fetches news articles related to "apple" on a specific date.
// You can modify the query and date parameters as needed.
// The API key is used to authenticate requests to the News API.