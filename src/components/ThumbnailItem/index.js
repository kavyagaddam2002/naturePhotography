// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbnailId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const thumbnailClassname = isActive ? `thumbnailActive` : `thumbnail`

  const onclickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list">
      <button
        className="thumbnail-btn"
        type="button"
        onClick={onclickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassname}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
