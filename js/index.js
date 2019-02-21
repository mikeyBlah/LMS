const createScript = (js) => {
  const script = document.createElement("script");
  script.src = `js/${js}.js`;
  document.head.appendChild(script);
};

const loadScripts = () => [
  'premlg'
].forEach(createScript);

window.onload = loadScripts;
