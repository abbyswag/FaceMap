import React from 'react'

class Canvas extends React.Component{
    constructor(props){
        super()
        this.canvasRef = React.createRef()
    }

    componentDidUpdate(){
        const canvas = this.canvasRef.current
        const context = canvas.getContext('2d')
        let image = new Image()
        image.src = this.props.imgURL
        image.onload = () => {
            context.drawImage(image,0,0,canvas.width,canvas.height)    
        }
    }

    render(){
        return(
            <canvas ref={this.canvasRef}/>
        )
    }
}

export default Canvas