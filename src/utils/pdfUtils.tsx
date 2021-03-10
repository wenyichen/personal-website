import { resumeFileName } from "../constants/constants";

export const pdfResponseToFile = (
  result: gapi.client.HttpRequestFulfilled<File>
) => {
  const byteCharacters = result.body;
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const file = new File([byteArray], resumeFileName, {
    type: "application/pdf;base64",
  });
  return file;
};

export const downloadFile = (file: File) => {
  const url = window.URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", resumeFileName);

  // Append to html link element page
  document.body.appendChild(link);

  // Start download
  link.click();

  // Clean up and remove the link
  link && link.parentNode && link.parentNode.removeChild(link);
};

export const removeTextLayerOffset = () => {
  const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
    textLayers.forEach((layer: any) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
  });
}