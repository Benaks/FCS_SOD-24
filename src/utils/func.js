import html2canvas from "html2canvas";

export const downloadImage = () => {
  const domElement = document.getElementById("divToDownload"); // Replace 'divToDownload' with the ID of the div you want to download

  html2canvas(domElement)
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "download.png";
      link.href = imgData;
      link.click();
    })
    .catch((error) => {
      console.error("Error generating image:", error);
    });
};
