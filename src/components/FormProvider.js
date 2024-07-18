import {convertToPdf} from "../helpers/convert-to-pdf";
import {saveResultToLocalstorage} from "../helpers/save-result-to-localstorage";

export const FormProvider = ({setURL, children}) => {
    function handleSubmit(e) {
        e.preventDefault();
        const text = e.target.elements['pdfText'].value || e.target[0].value;

        convertToPdf(text).then(result => {
            if (result) {
                setURL(result);
                saveResultToLocalstorage(text, result);
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    )
}
