import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    name: "Pankaj Wadhwani",
    username: "pankajw01",
    password: "pankaj@123",
    profile_pic:
      "https://res.cloudinary.com/dl0nhw7w3/image/upload/v1653051231/210848174_242834254017914_6932774085704834398_n.jpg_sta2kz.jpg",
    bio: "Frontend Develepor",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Guest User",
    username: "guest_user",
    password: "guest@123",
    profile_pic:
      "https://res.cloudinary.com/dl0nhw7w3/image/upload/v1653049691/avatar-default_n2lxg6.png",
    bio: "hi, I am guest user.",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Bhavika Tibrewal",
    username: "bhtibrewal",
    password: "bhtib@1111",
    profile_pic: "https://avatars.githubusercontent.com/u/42600164?v=4",
    bio: "Frontend Develepor | 3D Motion Graphic Designer | Learning New Things Everyday ",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
