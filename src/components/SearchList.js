import {useEffect, useState} from "react";
import {Button} from "@headlessui/react";
import {convertToPdf} from "../helpers/convert-to-pdf";
import {saveResultToLocalstorage} from "../helpers/save-result-to-localstorage";
import {RESULTS} from "../constants/results";

export const SearchList = ({setURL}) => {
    const [searchList, setSearchList] = useState([]);

    function removeOldUrlFromLocalStorage(url) {
        const results = localStorage.getItem(RESULTS);
        const data = JSON.parse(results).filter(result =>  result.url !== url);
        localStorage.setItem(RESULTS, JSON.stringify(data));
    }

    function handleCurrentResult(text, url) {
        convertToPdf(text).then(result => {
            if (result) {
                setURL(result);
                removeOldUrlFromLocalStorage(url);
                saveResultToLocalstorage(text, result);
                window.scrollTo({top: 300, behavior:'smooth'});
            }
        });
    }

    useEffect(() => {
        const localStorageResults = localStorage.getItem(RESULTS);

        if (localStorageResults) {
            setSearchList(JSON.parse(localStorageResults));
        }
    }, []);

return searchList.length > 0 ? (
    <div className="w-full max-w-xl px-4 py-4 mt-5">
        <h2 className="text-2xl font-bold underline mb-1">Ваші попередні результати:</h2>
        <ul>
            {searchList.map(({text, url}) => {
                return (
                    <li key={url} className="mb-3  w-full">
                        <Button
                            type="button"
                            onClick={() => handleCurrentResult(text, url)}
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            {url}
                        </Button>
                    </li>
                )
            })}
        </ul>
    </div>
) : null;
}
