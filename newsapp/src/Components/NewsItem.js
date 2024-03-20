import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, ImageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!ImageUrl ? "https://bloximages.newyork1.vip.townnews.com/kdhnews.com/content/tncms/assets/v3/editorial/3/9c/39c7bf44-1bc9-11e7-a98f-87030b359a0e/58e7e9e1c9a0f.image.jpg" : ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more..</a>
          </div>
        </div>
      </div>
    )
  }
}
