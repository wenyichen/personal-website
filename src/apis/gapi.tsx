export let gApiInitialized = false;

export const initGApi = () => {
  console.log(process.env.REACT_APP_GAPI_AUTH_TOKEN);
  window.gapi.client
    .init({
      apiKey: process.env.REACT_APP_GAPI_AUTH_TOKEN,
    })
    .then(() => {
      gApiInitialized = true;
    })
    .catch((e) => {
      console.error(e);
    });
};

export const callWhenGApiInitialized = (callback: () => any) => {
  if (gApiInitialized) {
    callback();
    return;
  }
  setTimeout(() => callWhenGApiInitialized(callback), 100);
};
