import {useState, JSX} from "react";
import {
    TextAreaControl,
    SubmitButton,
    SearchList,
    FormProvider,
    PDFViewer
} from "./components";
import {UseStateResult} from "./types/use-state-return-type";

function App(): JSX.Element {
    const [currentPDFUrl, setCurrentPDFUrl]: UseStateResult<string> = useState('');

  return (
    <div className="App">
        <FormProvider setURL={setCurrentPDFUrl}>
            <TextAreaControl />
            <SubmitButton />
        </FormProvider>

        <PDFViewer currentPDFUrl={currentPDFUrl} />
        <SearchList setURL={setCurrentPDFUrl} />
    </div>
  );
}

export default App;
