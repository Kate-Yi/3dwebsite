document.addEventListener('DOMContentLoaded', () => {
  const $ = (queryString) => document.querySelectorAll(queryString);

  const shiftHue = (hue) => (hue + 1) % 360;

  let hue = 0;

  const animate = () => {
    hue = shiftHue(hue);
    const color = `hsl(${hue}, 100%, 50%)`;
    const spheres = $('a-sphere');

    spheres.forEach(sphere => {
      // Set color
      sphere.setAttribute('color', color);
    });

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
});
