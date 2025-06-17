const newsContainer = document.querySelector('#crypto-news');

async function fetchPrices() {
  const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false";
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
}

const displayPrices = (data) => {
  const pricesContainer = document.querySelector('#crypto-prices');
  pricesContainer.innerHTML = '';
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

// ✅ GNews.io API
const GNEWS_API_KEY = "69f0234c91e108526edfd307c982e9a1"; // Replace with your actual GNews API key
const gnewsApiUrl = `https://gnews.io/api/v4/search?q=cryptocurrency&lang=en&max=5&token=${GNEWS_API_KEY}`;

async function fetchNews() {
  try {
    const response = await fetch(gnewsApiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.articles);
    return data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

const displayNews = (articles) => {
  newsContainer.innerHTML = '';
  articles.forEach(info => {
    const card = document.createElement('li');
    card.classList.add('member-card');

    const name = document.createElement('h3');
    name.textContent = info.title;

    const description = document.createElement('p');
    description.textContent = info.description || '';

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
