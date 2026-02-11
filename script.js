// Utilidades
function clamp255(n) {
  const num = Number(n);
  if (Number.isNaN(num)) return 0;
  return Math.min(255, Math.max(0, Math.round(num)));
}

function toHex2(n) {
  return n.toString(16).padStart(2, "0").toUpperCase();
}

function rgbToHex(r, g, b) {
  return `#${toHex2(r)}${toHex2(g)}${toHex2(b)}`;
}

// Elementos
const rRange = document.getElementById("rRange");
const gRange = document.getElementById("gRange");
const bRange = document.getElementById("bRange");

const rInput = document.getElementById("rInput");
const gInput = document.getElementById("gInput");
const bInput = document.getElementById("bInput");

const rValue = document.getElementById("rValue");
const gValue = document.getElementById("gValue");
const bValue = document.getElementById("bValue");

const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");

const randomBtn = document.getElementById("randomBtn");
const yearEl = document.getElementById("year");

yearEl.textContent = new Date().getFullYear();

// Estado principal
function updateUIFromValues(r, g, b) {
  r = clamp255(r);
  g = clamp255(g);
  b = clamp255(b);

  // Sincroniza sliders
  rRange.value = r;
  gRange.value = g;
  bRange.value = b;

  // Sincroniza inputs
  rInput.value = r;
  gInput.value = g;
  bInput.value = b;

  // Etiquetas
  rValue.textContent = r;
  gValue.textContent = g;
  bValue.textContent = b;

  // Cuadro y textos
  const rgb = `rgb(${r}, ${g}, ${b})`;
  const hex = rgbToHex(r, g, b);

  colorBox.style.background = rgb;
  rgbText.textContent = rgb;
  hexText.textContent = hex;
}

// Eventos: sliders -> todo
function onRangeChange() {
  updateUIFromValues(rRange.value, gRange.value, bRange.value);
}

rRange.addEventListener("input", onRangeChange);
gRange.addEventListener("input", onRangeChange);
bRange.addEventListener("input", onRangeChange);

// Eventos: inputs -> todo
function onInputChange() {
  updateUIFromValues(rInput.value, gInput.value, bInput.value);
}

rInput.addEventListener("input", onInputChange);
gInput.addEventListener("input", onInputChange);
bInput.addEventListener("input", onInputChange);

// Botón aleatorio
randomBtn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  updateUIFromValues(r, g, b);
});

// Inicial
updateUIFromValues(0, 0, 0);
