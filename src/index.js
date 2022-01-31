import { Workbox } from "workbox-window";

const registerServiceWorker = () => {
  if ("production" !== process.env.NODE_ENV) {
    return;
  }

  if ("serviceWorker" in navigator) {
    const wb = new Workbox("sw.js");

    wb.addEventListener("installed", (event) => {
      console.log("installed");
      if (event.isUpdate) {
        if (confirm("App updated. Click Ok ")) {
          window.location.reload();
        }
      }
    });

    wb.register();
  }
};

registerServiceWorker();
