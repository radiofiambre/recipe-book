const modules = import.meta.glob('./*.{png,jpg,jpeg,svg}', { eager: true });

const images = {};
for (const path in modules) {
  const imageName = path.replace('./', '').replace(/\.(png|jpe?g|jpeg|svg)$/i, '');
  images[imageName] = modules[path].default;
}

export default images;