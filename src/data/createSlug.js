const createSlug = (str) =>
  str
    .toLowerCase()
    .normalize("NFD") // descompone tildes
    .replace(/[\u0300-\u036f]/g, "") // quita tildes
    .replace(/\s+/g, "-") // reemplaza espacios con guiones
    .replace(/[^\w\-]+/g, "") // elimina caracteres no alfanuméricos
    .replace(/\-\-+/g, "-"); // elimina guiones dobles

export default createSlug;