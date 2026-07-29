
const fps = 30;

const padding = 50;

const startAnimation = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d')!;

  function resize() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);

  resize();
  
  const interval = setInterval(() => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;

    ctx.moveTo(padding, padding);
    ctx.lineTo(canvas.width - padding, padding);

    ctx.moveTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);

    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);

    ctx.moveTo(canvas.width - padding, padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);

    ctx.stroke();
  }, 1000/fps);

  return {
    destroy() {
      observer.disconnect();
      clearInterval(interval);
    }
  };
};

export default startAnimation;
