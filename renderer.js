// renderer.js
const versionElement = document.createElement('h2');

// Call the function we exposed from the preload script!
window.electronAPI.getAppVersion().then(appVersion => {
  versionElement.textContent = `Version: ${appVersion}`;
  document.body.appendChild(versionElement);
});