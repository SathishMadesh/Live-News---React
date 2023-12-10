import React from "react"

export default function News( props ) {

    return(
        <div className="news" >
            <div className="news-img">
                {
                    props.article.urlToImage!==null? <img src={props.article.urlToImage}/>
                    : <img src="https://tse3.mm.bing.net/th?id=OIP.jgM87NHRgT40ngsiPr8K9wAAAA&pid=Api&P=0&h=180"/>
                }
                
            </div>
            
                <h5>{props.article.title}</h5>
                <p>{props.article.description?.substring(0,100).concat("...")}<a href={props.article.url} target="_blank">Read more</a></p>
                
                <div className="source">
                    <p>Source : {props.article.source.name}</p>
                </div>
            
        </div>
    )
}