import React from "react";

export default function Gallery(props) {
  return (
    <div className="center">
      <section className="gallery-list">
        <img className="gallery--image" src={props.img} />
        <img
          className="gallery--pin"
          src="https://cdn-icons-png.flaticon.com/512/2776/2776067.png"
        />

        <span className="gallery--location">{props.location}</span>
        <span className="gallery--link">
          {" "}
          <a href="{props.imageUrl}">View on Google</a>
          <h2>{props.title}</h2>
          <span>{props.startDate}</span>
          <span> {props.endDate}</span>
          <br /> <br />
          <span>{props.description}.</span>
        </span>
      </section>
    </div>
  );
}
