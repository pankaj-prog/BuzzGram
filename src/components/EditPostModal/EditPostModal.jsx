import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import { editPost } from "redux/reducers/postsSlice";

const fileTypes = ["JPEG", "PNG", "GIF"];

const EditPostModal = ({
  postID,
  caption: initialCaption,
  image: initialImageUrl,
  setShowEditPostModal,
}) => {
  const [caption, setCaption] = useState(initialCaption);
  const [selectedImage, setSelectedImage] = useState();
  const [imgUrl, setImgUrl] = useState(initialImageUrl);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setCaption(initialCaption);
    setImgUrl(initialImageUrl);
  }, [initialCaption, initialImageUrl]);

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

  const editPostHandler = () => {
    dispatch(
      editPost({
        postID,
        postData: {
          caption,
          imgUrl,
        },
      })
    );
    setSelectedImage(null);
    navigate("/home");
  };

  const modalClickHandler = (e) => {
    if (e.target.className == "modal-wrapper") {
      setShowEditPostModal(false);
    }
  };

  return (
    <div className="modal-wrapper" onClick={modalClickHandler}>
      <section className="new-post-wrapper modal">
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
        <p className="text-center text-muted gutter-bottom-8">
          Post Preview...
        </p>
        <div className="post gutter-bottom-8">
          <img
            className="responsive-img post-img gutter-bottom-8"
            src={imgUrl}
            alt="post-img"
          />
          <p className="caption">{caption}</p>
        </div>
        <button
          className="btn btn-solid-primary btn-rc"
          disabled={caption && imgUrl ? false : true}
          onClick={editPostHandler}
        >
          Edit post
        </button>
      </section>
    </div>
  );
};

export default EditPostModal;
