import React, { Component } from 'react'
import Newsitems from './Newsitems'


export class News extends Component {

    // async componentDidMount() {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=903aca50377a45d0925ea6ba7584c830&page=1`
    //         let data = await fetch(url);  
    //         let parsedData = await data.json();
    //         // console.log(parsedData);
    //         this.setState({ articles: parsedData.articles })
    //     }

    // here is the fetching of the API in both promise and Async concepts used, then used setState to change the state of article and store it in array varible.
    componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=903aca50377a45d0925ea6ba7584c830&page=1`
        fetch(url).then((resp) => resp.json()).then((article) => {
            // console.log(article);
            this.setState({
                articles: article.articles
            })
        })

    }


    // handlePrevClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=903aca50377a45d0925ea6ba7584c830&page=${this.state.page - 1}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     // console.log(parsedData);
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles
    //     })

    // }

    // handleNextClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=903aca50377a45d0925ea6ba7584c830&page=${this.state.page + 1}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles,
    //         totalResults: [parsedData.totalResults]
    //     })

    // }

    // constructor used to define states  inside the super. articles as array to store fetched API data, 
    // page to count more pages to load
    // used document.title to change the title dynamically.
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `New2U/${this.props.category}`;
    }

    // here is the render when i have retrun the Newsitems components and defined some props which i have passedin Newsitems components.
    render() {
        return (
            <div className="container my-3 ">
                <h2 className="text-center text-success" style={{ marginTop: '80px' }}>News2U-{(this.props.category).toUpperCase()} top headlines</h2>
                <hr   style={{
            color: 'green',
            height: 5
        }} />


                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 " key={element.url}>
                            <Newsitems title={element.title} disp={element.description} srcUrl={element.urlToImage} newUrl={element.url} date={element.publishedAt} />
                        </div>
                    })}

                </div>

            </div>
        )
    }
}

export default News
