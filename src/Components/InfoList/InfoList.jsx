import React, { Component } from "react";
import PublicCard from "../Public/PublicCard";

class InfoList extends Component {
  state = {
     posts:[{
       id:0,
        name: "Парик из человеческих волос",
        photo: "https://img.lookmytrips.com/images/look62lj/big-57017057ff936741ad022f85-5718c1100b7bb-1bhhg8g.jpg",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        id:1,
        name: "Флаг испанского военного корабля San Ildefonso, который участвовал в Трафальгарском сражении (1805 год)",
        photo: "https://img.lookmytrips.com/images/look62lj/big-57017057ff936741ad022f85-5718c1100b7bb-1bhhg8g.jpg",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      // {
      //   id:2,
      //   name: "Человеческий скелет верхом на скелете лошади ",
      //   photo: "https://files.adme.ru/files/news/part_188/1884615/24362115-DON0Eg7WAAACNsv-1536791438-728-745d2e3900-1536838846.jpg",
      //   title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      // },
      // {
      //   id:3,
      //   name: "Скелет кентавра, представленный в одном из музеев дикой природы",
      //   photo: "https://files.adme.ru/files/news/part_188/1884615/24362115-DON0Eg7WAAACNsv-1536791438-728-745d2e3900-1536838846.jpg",
      //   title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      // },
      // {
      //   id:4,
      //   name: "Скелет кентавра, представленный в одном из музеев дикой природы",
      //   photo: "https://files.adme.ru/files/news/part_188/1884615/24360965-meeU38j-1536762423-728-d288f91ed0-1536838846.jpg",
      //   title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      // }
    ]
  };
  render() {
    return (
      <>
        <div className="container shadow p-3 mb-5 bg-light rounded ">
          <div className="grid-posts">
            <div className="card-deck ">
            {
                  this.state.posts.map(post => (
              <div key={post.id}>
                    <PublicCard post={post}  />
              </div>
              ))
                }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default InfoList;
