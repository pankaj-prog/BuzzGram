import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "redux/reducers/postsSlice";

const fileTypes = ["JPEG", "PNG", "GIF", "JPG"];

const NewPost = () => {
  const [caption, setCaption] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [imgUrl, setImgUrl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fileChangeHandler = (selectedImage) => {
    setSelectedImage(selectedImage);
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

    fetch("https://api.cloudinary.com/v1_1/dl0nhw7w3/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImgUrl(data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createPostHandler = () => {
    dispatch(
      createPost({
        caption,
        image: imgUrl,
      })
    );
    setSelectedImage(null);
    setCaption("");
    setImgUrl(null);
    navigate("/home");
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
          <button
            onClick={uploadImage}
            className="btn btn-solid-primary btn-rc add-image-btn "
          >
            Add image
          </button>
        </p>
        <textarea
          className="caption-input"
          placeholder="Share what you think..."
          value={caption}
          rows="4"
          onChange={(e) => {
            // to change the height of text area based on input text
            e.target.style.height = "inherit";
            e.target.style.height = `${e.target.scrollHeight}px`;
            setCaption(e.target.value);
          }}
        ></textarea>
      </form>
      <p className="text-center text-muted gutter-bottom-8">Post Preview...</p>
      <div className="post gutter-bottom-8">
        {imgUrl ? (
          <img
            className="responsive-img post-img gutter-bottom-8"
            src={imgUrl}
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
          <p className="caption text-muted">your caption here...</p>
        )}
      </div>
      <button
        className="btn btn-solid-primary btn-rc"
        disabled={caption && imgUrl ? false : true}
        onClick={createPostHandler}
      >
        Create post
      </button>
    </section>
  );
};

export default NewPost;
