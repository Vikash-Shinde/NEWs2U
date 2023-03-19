import React, { Component } from 'react'

export class Newsitems extends Component {
    constructor() {
        super();

    }
    // here i have used props by defining them in the render function. 
    // I have checked whether img is null or not if null then show my own image and not then it will take the same image as the url aPi has.
    // passing title and disp and more.. 
    render() {
        let { title, disp, srcUrl, newUrl, date } = this.props

        return (
            <>
                <div className="my-3">
                    <div className="card" >
                        <img src={!srcUrl? `https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg`:srcUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}....</h5>
                            <p className="card-text">{disp}</p>
                            <p> {date}</p>
                            <a href={newUrl} target="_blank" className="btn btn-primary bg-dark">Read more</a>
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Newsitems
