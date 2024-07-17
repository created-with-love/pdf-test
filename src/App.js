import React, {useState} from "react";
import {
    TextAreaControl,
    SubmitButton,
    SearchList,
    FormProvider
} from "./components";
import PDFViewer from 'pdf-viewer-reactjs'

function App() {
    const [currentPDFUrl, setCurrentPDFUrl] = useState('');

  return (
    <div className="App">
        <FormProvider setURL={setCurrentPDFUrl}>
            <TextAreaControl />
            <SubmitButton />
        </FormProvider>

        {currentPDFUrl && (
            <PDFViewer
                document={{
                    url: currentPDFUrl,
                }}
            />
        )}
        <SearchList setURL={setCurrentPDFUrl} />
    </div>
  );
}

export default App;
