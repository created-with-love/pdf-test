import React from "react";
import {ProgressBar, Viewer, Worker} from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout/lib';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import packageJson from '../../package.json';

const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];

export const PDFViewer = ({currentPDFUrl}) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
            {currentPDFUrl && (
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        height: '500px',
                        margin: '8px 16px'
                    }}
                >
                    <Viewer
                        fileUrl={currentPDFUrl}
                        renderLoader={(percentages) => (
                            <div style={{ width: '240px' }}>
                                <ProgressBar progress={Math.round(percentages)} />
                            </div>
                        )}
                        theme={{
                            theme: 'dark',
                        }}
                        plugins={[
                            defaultLayoutPluginInstance,
                        ]}
                    />
                </div>
            )}
        </Worker>
    )
}
