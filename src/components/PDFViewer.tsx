import {FC} from "react";

import {ProgressBar, Viewer, Worker} from "@react-pdf-viewer/core";
import {DefaultLayoutPlugin, defaultLayoutPlugin} from '@react-pdf-viewer/default-layout/lib';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// @ts-ignore
import packageJson from '../../package.json';

const pdfjsVersion: string = packageJson.dependencies['pdfjs-dist'];

interface PDFViewerProps {
    currentPDFUrl: string;
}
export const PDFViewer: FC<PDFViewerProps> = ({currentPDFUrl}: PDFViewerProps) => {
    const defaultLayoutPluginInstance:  DefaultLayoutPlugin = defaultLayoutPlugin();

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
