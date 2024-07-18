import {FC, useEffect, useState} from "react";
import {Button} from "@headlessui/react";
import {convertToPdf} from "../helpers/convert-to-pdf";
import {saveResultToLocalstorage} from "../helpers/save-result-to-localstorage";
import {RESULTS} from "../constants/results";
import {UseStateResult} from "../types/use-state-return-type";

interface SearchListItem {
    text: string;
    url: string;
}

interface SearchListProps {
    setURL: (value: string) => void;
}
export const SearchList: FC<SearchListProps> = ({setURL}: SearchListProps) => {
    const [searchList, setSearchList]: UseStateResult<SearchListItem[]> = useState<SearchListItem[]>([]);

    function removeOldUrlFromLocalStorage(url: string): void {
        const results: string | null = localStorage.getItem(RESULTS);
        const data = results ? JSON.parse(results).filter((result: SearchListItem) =>  result.url !== url) : [];
        localStorage.setItem(RESULTS, JSON.stringify(data));
    }

    function handleCurrentResult(text: string, url: string): void {
        convertToPdf(text).then((result: string | undefined) => {
            if (result) {
                setURL(result);
                removeOldUrlFromLocalStorage(url);
                saveResultToLocalstorage(text, result);
                window.scrollTo({top: 300, behavior:'smooth'});
            }
        });
    }

    useEffect(() => {
        const localStorageResults: string | null = localStorage.getItem(RESULTS);

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
