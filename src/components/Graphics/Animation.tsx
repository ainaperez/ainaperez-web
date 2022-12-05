// Animation.jsx
import React, { useRef, useEffect } from 'react'

const Animation =() => {
  
  const canvasRef = useRef(null)
  const draw = (ctx:any , frameCount: any) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(170, 50, 30 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };
  useEffect(() => {
    const canvas:any = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId :any;
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []); 
  return <canvas style={{ width: '700px' }} ref={canvasRef} />;


}

export default Animation;