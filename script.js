document.addEventListener('DOMContentLoaded', () => {
  const $ = (queryString) => document.querySelectorAll(queryString);

  const colors = ['#0369C2', '#4DBE46', '#D7DA3F', '#8680C6', 'white', 'black', 'gray', '#F2393D'];
  let colorIndex = 0;
  const framesPerColor = 60; // Number of frames to display each color
  let frameCounter = 0;

  const animate = () => {
    const color = colors[colorIndex];
    const spheres = $('a-sphere');

    spheres.forEach(sphere => {
      // Set color
      sphere.setAttribute('color', color);
    });

    // Update frame counter
    frameCounter++;

    // Move to the next color after the specified number of frames
    if (frameCounter >= framesPerColor) {
      frameCounter = 0;
      colorIndex = (colorIndex + 1) % colors.length;
    }

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
});
