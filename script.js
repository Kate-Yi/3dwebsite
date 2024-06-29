document.addEventListener('DOMContentLoaded', () => {
  const $ = (queryString) => document.querySelectorAll(queryString);

  const shiftHue = (hue) => (hue + 1) % 360;
  const amplitude = 0.5; 
  const frequency = 0.02;

  let hue = 0;
  let time = 0;

  const animate = () => {
    hue = shiftHue(hue);
    const color = `hsl(${hue}, 100%, 50%)`;
    const spheres = $('a-sphere');
    spheres.forEach(sphere => {
      sphere.setAttribute('color', color);
    });
    
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
});
