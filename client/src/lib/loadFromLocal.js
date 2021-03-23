export default function loadFromLocal(key) {
  try {
    const storedItems = localStorage.getItem(key);
    return JSON.parse(storedItems);
  } catch (error) {
    console.error(error.message);
  }
}
