import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG", "GIF"];

const NewPost = () => {
  const [caption, setCaption] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const fileChangeHandler = (selectedImage) => {
    setSelectedImage(selectedImage);
  };

  return (
    <section className="new-post-wrapper">
      <form className="new-post-form gutter-bottom-16">
        <p className="gutter-bottom-8 text-muted text-sm text-center">
          Upload image first and then click add image
        </p>
        <div className="gutter-bottom-8">
          <FileUploader
            handleChange={fileChangeHandler}
            name="setlectedImage"
            types={fileTypes}
          />
        </div>
        <p className="gutter-bottom-8 text-muted text-center">
          {selectedImage
            ? `Image: ${selectedImage?.name}`
            : "No image uploaded yet"}{" "}
          <button className="btn btn-solid-primary btn-rc add-image-btn ">
            Add image
          </button>
        </p>
        <textarea
          className="caption-input"
          placeholder="enter caption..."
          value={caption}
          rows="1"
          onChange={(e) => {
            e.target.style.height = "inherit";
            e.target.style.height = `${e.target.scrollHeight}px`;
            setCaption(e.target.value);
          }}
        ></textarea>
      </form>
      <h5 className="text-center gutter-bottom-8">Preview below</h5>
      <div className="post gutter-bottom-8">
        {selectedImage ? (
          <img
            className="responsive-img post-img gutter-bottom-8"
            src={""}
            alt="post-img"
          />
        ) : (
          <img
            className="responsive-img post-img gutter-bottom-8"
            src="https://adaptiveui.netlify.app/src/assets/default.png"
            alt="dummy image"
          />
        )}
        {caption ? (
          <p className="caption">{caption}</p>
        ) : (
          <p className="text-center caption">your caption here</p>
        )}
      </div>
      <button className="btn btn-solid-primary btn-rc">Create post</button>
    </section>
  );
};

export default NewPost;
