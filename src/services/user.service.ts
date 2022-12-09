import { Request, Response, NextFunction } from "express";
import { myDataSource } from "../config/dbConfig";
import { User } from "../entity/user";
import { get } from "lodash";

const saveUser = (request: Request, res: Response) => {
  const user = request.body;
  myDataSource.getRepository(User).save(user);

  console.log(`New user with ${user.firstName} created successfully`);

  return res.status(200).json({
    message: "USER SAVED SUCCESSFULLY",
  });
};

const getUser = async (request: Request, response: Response) => {
  const id = Number(request.query.id);

  const data = await myDataSource
    .getRepository(User)
    .findOne({ where: { id: id } });
  if (data) {
    return response.status(200).json({
      message: data,
    });
  } else {
    return response.status(400).json({
      message: "USER WITH THIS USER_ID DOESN'T EXIST",
    });
  }
};

const updateUser = async (request: Request, response: Response) => {
  console.log("-----------       updating the user ---------");
  console.log(request.params);
  const id = Number(get(request, "params.id"));
  console.log("The id is ", id);
  const entityData = request.body;
  const data = await myDataSource.getRepository(User).findOne({
    where: {
      id: id,
    },
  });
  if (data) {
    await myDataSource.getRepository(User).update(id, entityData);
    return response.status(200).json({
      message: "SUCCESS",
    });
  } else {
    return response.status(400).json({
      message: "ERROR",
    });
  }
};

async function getAllUser(request: Request, response: Response) {
  try {
    const allUsers = await myDataSource.getRepository(User).find();

    return response.status(200).json({
      message: allUsers,
    });
  } catch (error) {
    throw error;
  }
}

async function deleteUser(request: Request, response: Response) {
  const id = Number(get(request, "params.id"));
  try {
    const result = await myDataSource.getRepository(User).delete(id);
    if (result.affected != 0) {
      return response.status(200).json({
        message: `User with id ${id} deleted successfully`,
      });
    } else {
      return response.status(400).json({
        message: `User with id ${id} doesn\'t exist`,
      });
    }
  } catch (error) {
    return response.status(400).json({
      message: `Error deleting the user with id ${id}`,
    });
  }
}

export default {
  saveUser,
  getUser,
  updateUser,
  getAllUser,
  deleteUser,
};
