import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    caption: "WORK: That's how you get it.",
    image:
      "https://res.cloudinary.com/dl0nhw7w3/image/upload/v1653049102/people_at_work_sa30tk.avif",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    name: "Pankaj Wadhwani",
    username: "pankajw01",
    profile_pic:
      "https://res.cloudinary.com/dl0nhw7w3/image/upload/v1653051231/210848174_242834254017914_6932774085704834398_n.jpg_sta2kz.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    caption: "",
    image:
      "https://res.cloudinary.com/dl0nhw7w3/image/upload/v1653049103/smiling_face_wa6jy3.avif",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    name: "Bhavika Tibrewal",
    username: "bhtibrewal",
    profile_pic: "https://avatars.githubusercontent.com/u/42600164?v=4",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
