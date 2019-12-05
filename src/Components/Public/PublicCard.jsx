import React from "react";



const PublicCard = (post) => {
  const {name, title, photo} = post.post;
  console.log(post.post)
  return (
    <>
      <div className="card">
        <img src={photo} className="card-img-top rounded" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {title.slice(0, 50)}
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </>
  );
};

export default PublicCard;
