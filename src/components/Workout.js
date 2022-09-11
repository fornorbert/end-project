import React from "react";
import "../styles/workout.css";
import ReactPlayer from "react-player";

export default function Workout() {
  return (
    <div className="workout__section">
      <h2>Workout</h2>
      <div className="workout__image">
        <ReactPlayer
          className="workout__video"
          url="https://www.youtube.com/watch?v=o9zCgPtsups"
        />
      </div>
      <div className="section__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          corporis debitis dolores eaque incidunt, quibusdam! Accusamus, ad
          aspernatur consequuntur dolorem et excepturi, nam quod rerum sint sit,
          suscipit totam vel voluptatum! Ad adipisci blanditiis consectetur
          culpa dicta dolore eius enim eos eum, eveniet expedita explicabo fugit
          harum iste itaque laboriosam nam perspiciatis quia quidem rem
          repellendus totam vel!
        </p>
      </div>
    </div>
  );
}
