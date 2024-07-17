import {convertToPdf} from "../helpers/convert-to-pdf";
import {saveResultToLocalstorage} from "../helpers/save-result-to-localstorage";

export const FormProvider = ({setURL, children}) => {
    function handleSubmit(e) {
        e.preventDefault();
        convertToPdf(e.target[0].value).then(result => {
            if (result) {
                console.log('result', result)
                setURL(result);
                saveResultToLocalstorage(e.target[0].value, result);
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    )
}
