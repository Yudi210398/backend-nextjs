import produkShema from "../model/produkShema.js";

export const getData = async (req, res, next) => {
  try {
    const dataReal = await produkShema.find();
    console.log(dataReal);
    return res.status(201).json({
      dataReal,
    });
  } catch (err) {
    next(err);
  }
};
