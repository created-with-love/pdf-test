function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result.split(',')[1]); // Remove the "data:application/pdf;base64," prefix
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

export async function convertToPdf(text) {
    const apiKey = process.env.REACT_APP_API_KEY || '';
    const apiUrl = `http://95.217.134.12:4010/create-pdf?apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/pdf',
            },
            body: JSON.stringify({ text }),
        });

        if (response.ok) {
            const blob = await response.blob();
            return URL.createObjectURL(blob);
        } else {
            console.error('Error generating PDF:', response.statusText);
        }
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
};
