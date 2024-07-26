import List from "../models/ListModel.js";

export const getList = async (req, res) => {
  try {
    const response = await List.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getListById = async (req, res) => {
  try {
    const response = await List.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createList = async (req, res) => {
  try {
    await List.create(req.body);
    res.status(201).json({ message: "Todo List Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateList = async (req, res) => {
  try {
    await List.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Todo List Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteList = async (req, res) => {
  try {
    await List.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Todo List Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
