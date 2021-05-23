import React from 'react'
import Result from '../../components/result/result'
import './resultBody.scss'

class ResultBody extends React.Component{
    constructor(props){
        super()
        this.state= {results: [],isSearchBtnClicked: false}
        this.queryResult = ''
        this.query = ''
        this.findQuery = this.findQuery.bind(this)
        this.setQuery = this.setQuery.bind(this)
    }

    componentDidMount(){
        fetch('/result')
        .then(res => res.json())
        .then(data => {
            this.setState({results: data.list})
        })
    }

    setQuery(e){
        this.query = e.target.value
    }

    getUser(query){
        fetch('/user/search', {
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(query)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                queryResult: data
            })
        })
    }

    findQuery(){
        this.setState({isSearchBtnClicked: !this.state.isSearchBtnClicked})
    }
    showQueryResult(){
        this.getUser(this.query)
        let data = this.queryResult
        if (this.isSearchBtnClicked){
            return(
                <Result
                name={data.name}
                score={data.score}
                rank={data.rank}
                imagePath={this.getImage(data.image)}
                />
            )
        }
    }

    getImage(path){
        return `/user/${path}`
    }

    render(){
        return(
            <div className='result-body'>
                <div className='notice'>
                    Result
                    {/* Final result is with more details will released after the ending of contest. */}
                </div>
                <div className='search'>
                    <input onChange = {this.setQuery}/>
                    <div className='btn' onClick={this.findQuery}>
                        Search
                    </div>
                </div>
                {this.showQueryResult()}
                <div className='lable'>
                    Top Players
                </div>
                <div className='results'>
                    {this.state.results.map((result,index) => {
                        return(
                            <Result
                            name={result.name}
                            score={result.score}
                            rank={index+1}
                            imagePath={this.getImage(result.image)}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ResultBody