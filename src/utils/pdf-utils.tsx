
export const pdfResponseToFile = (result: gapi.client.HttpRequestFulfilled<File>) => {
    const byteCharacters = result.body
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const file = new File([byteArray], "Resume", { type: 'application/pdf;base64' });
    return file;
}