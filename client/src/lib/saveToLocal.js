export default function saveToLocal(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}
