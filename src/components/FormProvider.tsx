import {FC, FormEvent, ReactNode} from "react";
import {convertToPdf} from "../helpers/convert-to-pdf";
import {saveResultToLocalstorage} from "../helpers/save-result-to-localstorage";

interface FormProviderProps {
    setURL: (value: string) => void;
    children: ReactNode;
}
export const FormProvider: FC<FormProviderProps> = ({setURL, children}: FormProviderProps) => {
    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const target: HTMLFormElement = e.target as HTMLFormElement;
        const text: HTMLTextAreaElement = target.elements.namedItem('pdfText') as HTMLTextAreaElement;

        convertToPdf(text.value).then((result: string | undefined) => {
            if (result) {
                setURL(result);
                saveResultToLocalstorage(text.value, result);
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    )
}
