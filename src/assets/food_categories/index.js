const imageModules = import.meta.glob('./*.{png,jpg,jpeg,gif,svg,webp}', { eager: true });

const foodCategoryImages = {};

Object.keys(imageModules).forEach(path => {
  // Extraer el nombre del archivo sin la extensión
  const fileName = path.replace('./', '').replace(/\.[^/.]+$/, '');
  foodCategoryImages[fileName] = imageModules[path].default;
});

export default foodCategoryImages;