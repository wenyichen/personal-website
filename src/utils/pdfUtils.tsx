export const pdfResponseToFile = (
  result: gapi.client.HttpRequestFulfilled<File>
) => {
  const byteCharacters = result.body;
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const file = new File([byteArray], "Resume", {
    type: "application/pdf;base64",
  });
  return file;
};

export const downloadFile = (file: File) => {
  const url = window.URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute(
    'download',
    `WenyiChenResume.pdf`,
  );

  // Append to html link element page
  document.body.appendChild(link);

  // Start download
  link.click();

  // Clean up and remove the link
  link && link.parentNode && link.parentNode.removeChild(link);
}