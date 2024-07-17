export function saveResultToLocalstorage(text, url) {
    const currentResults = localStorage.getItem('results');

    if (currentResults) {
        const results = JSON.parse(currentResults);
        results.push({text, url});
        localStorage.setItem('results', JSON.stringify(results));
    }
    else {
        localStorage.setItem('results', JSON.stringify([{text, url}]));
    }
}
