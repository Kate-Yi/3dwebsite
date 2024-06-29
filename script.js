document.addEventListener('DOMContentLoaded', () => {
  const $ = (queryString) => document.querySelectorAll(queryString);

  const colors = ['#0369C2', '#4DBE46', '#D7DA3F', '#8680C6', '#F2393D', 'white', 'gray', 'black'];
  let colorIndex = 0;

  const animate = () => {
    const color = colors[colorIndex];
    const spheres = $('a-sphere');

    spheres.forEach(sphere => {
      sphere.setAttribute('color', color);
    });

    colorIndex = (colorIndex + 1) % colors.length;

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
});
