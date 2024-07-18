import {RESULTS} from "../constants/results";

export function saveResultToLocalstorage(text: string, url: string): void {
    const currentResults: string | null = localStorage.getItem(RESULTS);

    if (currentResults) {
        const results = JSON.parse(currentResults);
        results.push({text, url});
        localStorage.setItem(RESULTS, JSON.stringify(results));
    }
    else {
        localStorage.setItem(RESULTS, JSON.stringify([{text, url}]));
    }
}
