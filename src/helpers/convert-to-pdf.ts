export async function convertToPdf(text: string): Promise<string | undefined> {
    const apiKey: string = process.env.REACT_APP_API_KEY || '';
    const apiUrl: string = `http://95.217.134.12:4010/create-pdf?apiKey=${apiKey}`;

    try {
        const response: Response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/pdf',
            },
            body: JSON.stringify({ text }),
        });

        if (response.ok) {
            const blob: Blob = await response.blob();

            return URL.createObjectURL(blob);
        } else {
            console.error('Error generating PDF:', response.statusText);
        }
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
}
