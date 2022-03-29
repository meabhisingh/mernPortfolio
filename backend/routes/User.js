import express from "express";
import {
  login,
  logout,
  getUser,
  myProfile,
  contact,
  updateUser,
  addTimeline,
  addYoutube,
  addProject,
  deleteTimeline,
  deleteYoutube,
  deleteProject,
} from "../controller/User.js";
import { isAuthenticated } from "../middlewares/auth.js";
export const userRouter = express.Router();

userRouter.route("/login").post(login);

userRouter.route("/logout").get(logout);

userRouter.route("/user").get(getUser);

userRouter.route("/me").get(isAuthenticated, myProfile);

userRouter.route("/admin/update").put(isAuthenticated, updateUser);

userRouter.route("/admin/timeline/add").post(isAuthenticated, addTimeline);
userRouter.route("/admin/youtube/add").post(isAuthenticated, addYoutube);
userRouter.route("/admin/project/add").post(isAuthenticated, addProject);

userRouter.route("/admin/timeline/:id").delete(isAuthenticated, deleteTimeline);
userRouter.route("/admin/youtube/:id").delete(isAuthenticated, deleteYoutube);
userRouter.route("/admin/project/:id").delete(isAuthenticated, deleteProject);

userRouter.route("/contact").post(contact);
