import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "redux/reducers/usersSlice";

const EditProfileModal = ({ setShowEditProfileModal, currentProfileUser }) => {
  const { username, name, profile_pic, bio, website } = currentProfileUser;

  const [selectedImage, setSelectedImage] = useState();
  const [imgUrl, setImgUrl] = useState(profile_pic);

  const nameRef = useRef();
  const usernameRef = useRef();
  const bioRef = useRef();
  const websiteRef = useRef();

  const dispatch = useDispatch();

  const fileChangeHandler = (e) => {
    setSelectedImage(e.target.files[0]);
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

  const modalClickHandler = (e) => {
    if (e.target.className == "modal-wrapper") {
      setShowEditProfileModal(false);
    }
  };

  useEffect(() => {
    nameRef.current.value = name;
    usernameRef.current.value = username;
    websiteRef.current.value = website;
    bioRef.current.value = bio;
  }, []);

  return (
    <div className="modal-wrapper" onClick={modalClickHandler}>
      <section className="profile-wrapper modal">
        <div>
          <span className="avatar avatar-round">
            <img className="responsive-img" src={imgUrl} alt="avatar" />
          </span>
        </div>

        <form className="edit-profile-form">
          <div className="">
            <label htmlFor="avatar">Choose a profile picture:</label>
            <input
              onChange={fileChangeHandler}
              className="gutter-bottom-8"
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            ></input>
            <button
              className="btn btn-rc btn-solid-primary"
              onClick={uploadImage}
            >
              Add image
            </button>
          </div>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              className="edit-profile-input"
              type="text"
              id="name"
              required
              ref={nameRef}
            ></input>
          </div>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              className="edit-profile-input"
              type="text"
              id="username"
              ref={usernameRef}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio:</label>
            <textarea
              className="edit-profile-input"
              name=""
              id="bio"
              cols="30"
              rows="10"
              ref={bioRef}
            ></textarea>
          </div>

          <div className="gutter-bottom-8">
            <label htmlFor="website">Website: </label>
            <input
              className="edit-profile-input"
              type="text"
              name="website"
              id=""
              ref={websiteRef}
            />
          </div>
          <button
            className="btn btn-solid-primary btn-rc"
            type="button"
            onClick={() => {
              dispatch(
                updateUser({
                  name: nameRef.current.value,
                  profile_pic: imgUrl,
                  username: usernameRef.current.value,
                  website: websiteRef.current.value,
                  bio: bioRef.current.value,
                })
              );
              setShowEditProfileModal(false);
            }}
          >
            Save
          </button>
        </form>
      </section>
    </div>
  );
};

export default EditProfileModal;
