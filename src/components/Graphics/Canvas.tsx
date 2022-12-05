import React, {useEffect, useRef} from 'react'

type CanvasProps = {

}

const Canvas = (props: any) => {

    const canvasRef = useRef(null);

    const draw = (ctx:any) => {
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20, 0, 2*Math.PI)
        ctx.fill()
      }

    useEffect(() => {
        const canvas:any =  canvasRef.current; 
        const context = canvas.getContext("2d"); 
        context.fillStyle = "#ddd";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        context.beginPath();

        draw(context)
  }, [draw])
    

    return <canvas ref={canvasRef} {...props}/>

}

export default Canvas;