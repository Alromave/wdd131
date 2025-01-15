// current year //
const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = new Date().getFullYear();
// last modified //
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = document.lastModified;