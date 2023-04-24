import '../../../styles/HeadlineList.css';
import alternativeImage from '../../../assets/breakingNews.jpg';

const HeadlineLink = ({ title, image, author, date, description, url }) => {
  const authorName = author ? author : 'Anonymous';

  const dateStr = date;
  const newDate = new Date(dateStr);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  const cleanDescription = description
    ? description.substring(0, description.indexOf('['))
    : '';

  const handleImageError = (event) => {
    event.target.src = alternativeImage;
  };

  return (
    <div className="headline-container">
      <div className="header-container">
        <h2 className="headline-title">{title}</h2>
      </div>
      <img
        src={image}
        alt="NewsImage"
        className="headline-image"
        onError={handleImageError}
      ></img>
      <div className="author-date-container">
        <h3 className="author-name">{authorName}</h3>
        <p className="publishing-date">{formattedDate}</p>
      </div>
      <p className="headline-description">
        {cleanDescription}
        <span>
          <a href={url} target="blank" className="news-link">
            See More
          </a>
        </span>
      </p>
    </div>
  );
};

export default HeadlineLink;

// import '../../../styles/HeadlineList.css';
// import alternativeImage from '../../../assets/breakingNews.jpg';

// const HeadlineLink = ({ title, image, author, date, description, url }) => {
//   const authorName = author ? author : 'Anonymous';

//   const dateStr = date;
//   const newDate = new Date(dateStr);
//   const day = newDate.getDate();
//   const month = newDate.getMonth() + 1;
//   const year = newDate.getFullYear();
//   const formattedDate = `${day}-${month}-${year}`;

//   const cleanDescription = description
//     ? description.substring(0, description.indexOf('['))
//     : '';

//   return (
//     <div className="headline-container">
//       <div className="header-container">
//         <h2 className="headline-title">{title}</h2>
//       </div>
//       <img
//         src={image || alternativeImage}
//         alt="NewsImage"
//         className="headline-image"
//       ></img>
//       <div className="author-date-container">
//         <h3 className="author-name">{authorName}</h3>
//         <p className="publishing-date">{formattedDate}</p>
//       </div>
//       <p className="headline-description">
//         {cleanDescription}
//         <span>
//           <a href={url} target="blank" className="news-link">
//             See More
//           </a>
//         </span>
//       </p>
//     </div>
//   );
// };

// export default HeadlineLink;
