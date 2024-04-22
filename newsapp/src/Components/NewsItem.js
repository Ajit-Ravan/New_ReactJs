import React from 'react'
import { Link } from 'react-router-dom';

const NewsItem = (props) => {

  let { title, description, ImageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem", }}>
        <img src={!ImageUrl ? "https://bloximages.newyork1.vip.townnews.com/kdhnews.com/content/tncms/assets/v3/editorial/3/9c/39c7bf44-1bc9-11e7-a98f-87030b359a0e/58e7e9e1c9a0f.image.jpg" : ImageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '88%', zIndex: '1' }}>
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <p className="card-text">{description}...</p>
          <p className='card-text'>
            <small className="text-muted">By {author} on{" "} {new Date(date).toGMTString()}</small><br></br>
          </p>
          <Link to={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more..</Link>
        </div>
      </div>
    </div >
  )

}

export default NewsItem;