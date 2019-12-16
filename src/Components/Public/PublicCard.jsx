import React from "react";



const PublicCard = (post) => {
  const { name, title, photo } = post.post;
  console.log(post.post)
  return (
    <>
      <div className="card bg-light mb-5 card-front " style={{ maxWidth: 20 + 'rem', height: 30 + 'rem' }}>
     
        <div className="front">
          <img src={photo} alt="" />
          <div className="menuicon">
            <span className="s1"></span>
            <span className="s2"></span>
          </div>
        </div>
        <div className="back">
          <img src={photo} className="card-img-top rounded img-fluid" alt="..." />
         
          <div className="card-body">
            <h2>
              Exibit
          <div className="card-border"></div>
            </h2>
            <p>
              <div className="card-title">
                {name}
              </div>
            </p>
          </div>
          <div className="card-footer">
            <div className="s-m">
              <a href="#" className="fab fa-facebook"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-youtube"></a>
              <a href="#" className="fab fa-whatsapp"></a>
            </div></div>
        </div>
      </div>
    </>
  );
};

export default PublicCard;
