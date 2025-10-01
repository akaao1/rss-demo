fetch('https://api.rss2json.com/v1/api.json?rss_url=http://www.mlit.go.jp/important.rdf')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('rss-feed');
    container.innerHTML = data.items.map(item => `
      <p><a href="${item.link}" target="_blank">${item.title}</a
  .catch(error => {
    document.getElementById('rss-feed').innerText = 'RSSの読み込みに失敗しました。';
    console.error(error);
  });
