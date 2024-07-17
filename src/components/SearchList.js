import {useEffect, useState} from "react";
import {Button} from "@headlessui/react";
import clsx from "clsx";

export const SearchList = ({setURL}) => {
    const [searchList, setSearchList] = useState([]);
    const [currentFile, setCurrentFile] = useState('');

    function handleCurrentResult(url) {
        const newUrl = currentFile === url ? '' : url;
        setCurrentFile(newUrl);
        setURL(newUrl);
    }

    useEffect(() => {
        const localStorageResults = localStorage.getItem('results');

        if (localStorageResults) {
            setSearchList(JSON.parse(localStorageResults));
        }
    }, []);

return searchList.length > 0 ? (
    <div className="w-full max-w-xl px-4 py-4 mt-5">
        <h2 className="text-2xl font-bold underline mb-1">Ваші попередні результати:</h2>
        <ul>
            {searchList.map(({text, url}) => {
                const active = url === currentFile;

                return (
                    <li key={url} className="mb-3">
                        <span className="italic">{url}</span>
                        {active && (
                            <div>
                                {text}
                            </div>
                        )}
                        <Button type="button" onClick={() => handleCurrentResult(url)}>
                            {({ hover }) => (
                                <button
                                    className={clsx(
                                        'rounded py-1 px-2 text-xs text-white',
                                        !hover && !active && 'bg-sky-600',
                                        hover && !active && 'bg-sky-500',
                                        active && 'bg-sky-700'
                                    )}
                                >
                                    {active ? 'Приховати' : 'Показати файл'}
                                </button>
                            )}
                        </Button>
                    </li>
                )
            })}
        </ul>
    </div>
) : null;
}
