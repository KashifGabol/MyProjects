async function fetchCryptoData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const data = await response.json();
        displayCryptoData(data);
    } catch (error) {
        console.error('Error fetching crypto data:', error);
    }
}

function displayCryptoData(cryptos) {
    const container = document.getElementById('crypto-container');
    container.innerHTML = '';

    cryptos.forEach(crypto => {
        const card = document.createElement('div');
        card.className = 'crypto-card';
        card.innerHTML = `
            <div class="crypto-info">
                <img src="${crypto.image}" alt="${crypto.name}" class="crypto-icon">
                <h5>${crypto.name} (${crypto.symbol.toUpperCase()})</h5>
                <p>Price: $${crypto.current_price.toFixed(2)}</p>
                <p>24h Change: ${crypto.price_change_percentage_24h.toFixed(2)}%</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Fetch and update every minute
fetchCryptoData();
setInterval(fetchCryptoData, 60000);