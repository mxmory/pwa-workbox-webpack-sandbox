if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => console.log("Registered SW", reg))
      .catch((err) => console.log("Registration failed", err));
  });
}
