import { Request, Response, NextFunction } from "express";
import { myDataSource } from "../config/dbConfig";
import userService from "../services/user.service";
import { User } from "../entity/user";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const saveUser = (request: Request, res: Response) => {
  return userService.saveUser(request, res);
};

const getUser = async (request: Request, response: Response) => {
  return await userService.getUser(request, response);
};

const getAllUser = async (request: Request, response: Response) => {
  return await userService.getAllUser(request, response);
};

const updateUser = async (request: Request, response: Response) => {
  return userService.updateUser(request, response);
};
const deleteUser = async (request: Request, response: Response) => {
  return userService.deleteUser(request, response);
};
export default {
  saveUser,
  getUser,
  updateUser,
  getAllUser,
  deleteUser,
};
