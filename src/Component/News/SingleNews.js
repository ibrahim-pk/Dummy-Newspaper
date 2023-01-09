import React from "react";
import { useParams } from "react-router-dom";
import news from "../../data/data.json";
const SingleNews = () => {
  const id = useParams();
  const singleNews = news.find((item) => item._id === id.id);
  console.log(id);
  return (
    <div className="max-w-screen-lg mx-auto my-10">
      <h2 className="text-xl my-3">{singleNews.title}</h2>
      <img className="w-full h-96" src={singleNews.img} alt="MB newspaper" />
      <p>{singleNews.details}</p>
      <div className="my-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Comment Box</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Write..."
          ></textarea>
        </div>
        <button className="btn my-2">Submit</button>
        <div className="my-10">
          <h1>All Comment</h1>
          <div className="flex items-center my-5">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <span className="text-xs mx-2">AA</span>
              </div>
            </div>
            <h1 className="mx-2">Wow</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
