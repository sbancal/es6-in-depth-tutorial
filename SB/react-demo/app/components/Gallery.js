import React, { Component } from 'react'

class Gallery extends Component {
  render() {
    let alternateImage = 'https://cdn1.iconfinder.com/data/icons/ios-edge-line-7/25/No-Camera-128.png'

    return (
      <div>
        {
          this.props.items.map((item, index) => {
            let { title, imageLinks, infoLink } = item.volumeInfo;
            return (
              <a
                key={index}
                className="book"
                href={infoLink}
                target="_blank"
              >
                <img
                  src={imageLinks !== undefined ? imageLinks.thumbnail : alternateImage}
                  alt="book image"
                  className="book-img"
                />
                <div className="book-text">
                {title}
                </div>
              </a>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery
