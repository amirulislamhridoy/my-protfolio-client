import React from "react";

const SingleProject = ({project}) => {
    const {name, img, live, client, server}  = project
  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img
          src={img}
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
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
