import React, {useState} from "react";
import {
    TextAreaControl,
    SubmitButton,
    SearchList,
    FormProvider,
    PDFViewer
} from "./components";

function App() {
    const [currentPDFUrl, setCurrentPDFUrl] = useState('');

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
