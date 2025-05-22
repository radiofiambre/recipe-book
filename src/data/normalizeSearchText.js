const normalizeSearchText = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // solo elimina tildes
    .trim();

export default normalizeSearchText;
