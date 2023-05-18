import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProdukShema = new Schema({
  namaProduk: { type: String, required: true },
  harga: { type: Number, required: true },
});

export default mongoose.model("Produk", ProdukShema);
