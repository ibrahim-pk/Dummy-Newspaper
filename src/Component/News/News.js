import React from "react";
import { Link } from "react-router-dom";
import news from "../../data/data.json";
const News = () => {
  return (
    <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto my-10">
      {news.map((item, idx) => (
        <div key={idx} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={item.img} alt="MB newspaper" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.title}</h2>
            <p className="text">{item.details}</p>
            <div className="card-actions">
              <Link to={`/news/${item._id}`}>
                {" "}
                <button className="btn btn-primary">More</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
