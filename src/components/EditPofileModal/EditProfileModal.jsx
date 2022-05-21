import React from "react";

const EditProfileModal = ({ ...params }) => {
  const { setShowEditProfileModal } = params;

  const modalClickHandler = (e) => {
    if (e.target.className == "modal-wrapper") {
      setShowEditProfileModal(false);
    }
  };

  return (
    <div className="modal-wrapper" onClick={modalClickHandler}>
      <section className="profile-wrapper modal">
        <div>
          <span className="avatar avatar-round">
            <img
              className="responsive-img"
              src="https://adaptiveui.netlify.app/src/assets/avatar-default.png"
              alt="...."
            />
          </span>
        </div>

        <form className="edit-profile-form">
          <div className="">
            <label htmlFor="avatar">Choose a profile picture:</label>
            <input
              className="gutter-bottom-8"
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            ></input>
            <button className="btn btn-rc btn-solid-primary">Add image</button>
          </div>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              className="edit-profile-input"
              type="text"
              id="name"
              required
              value="pankaj wadhwani"
            ></input>
          </div>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              className="edit-profile-input"
              type="text"
              id="username"
              value="pankajw01"
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
              value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia blanditiis ea in enim, ipsam perferendis."
            ></textarea>
          </div>

          <div className="gutter-bottom-8">
            <label htmlFor="website">Website: </label>
            <input
              className="edit-profile-input"
              type="text"
              name="website"
              id=""
              value="www.website.com"
            />
          </div>
          <button className="btn btn-solid-primary btn-rc" type="button">
            Save
          </button>
        </form>
      </section>
    </div>
  );
};

export default EditProfileModal;
