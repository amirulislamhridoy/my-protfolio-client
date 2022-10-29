import React from "react";
import { useNavigate } from "react-router-dom";

const SingleProject = ({project}) => {
  console.log(project)
  const navigate = useNavigate()
    const {name, img1, live, client, server}  = project
  return (
    <div class="card bg-base-100 shadow-xl mx-auto" data-aos="flip-down">
      <figure>
        <img
          src={img1}
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {name}!
          <div class="badge badge-warning">NEW</div>
        </h2>
        <p>{name}</p>
        <div class="card-actions justify-end">
          <a href={live} target='_blank' class="btn btn-active btn-warning btn-xs rounded-2xl">Live</a>
          <a href={client} target='_blank' class="btn btn-active btn-warning btn-xs rounded-2xl">Client</a>
          {server && <a href={server} target="_blank" class="btn btn-active btn-warning btn-xs rounded-2xl">Server</a>}
          <a onClick={() => navigate(`/details/${project._id}`)} class="btn btn-active btn-warning btn-xs rounded-2xl">Details</a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
