import React from 'react'

class Canvas extends React.Component{
    constructor(props){
        super()
        this.canvasRef = React.createRef()
    }

    componentWillUpdate(){
        const canvas = this.canvasRef.current
        const context = canvas.getContext('2d')
        let image = new Image()
        image.src = this.props.imgURL
        image.onload = () => {
            context.drawImage(image,0,0,300,300)
        }
    }

    render(){
        return(
            <canvas ref={this.canvasRef} width={300} height={300} />
        )
    }
}

export default Canvas