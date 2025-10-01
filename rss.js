fetch('https://api.rss2json.com/v1/api.json?rss_url=http://www.mlit.go.jp/important.rdf')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('rss-feed');
    if (!data.items || data.items.length === 0) {
      container.innerHTML = '<p>RSSのデータが見つかりませんでした。</p>';
      return;
    }
    container.innerHTML = data.items.map(item => `
      <div class="rss-item">
        ${item.link}${item.title}</a>
        <span class="rss-date">${new Date(item.pubDate).toLocaleDateString('ja-JP')}</span>
      </div>
    `).join('');
  })
  .catch(error => {
    document.getElementById('rss-feed').innerText = 'RSSの読み込みに失敗しました。';
    console.error(error);
  });
