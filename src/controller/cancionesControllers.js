import fs from "fs";

const getSongs = (req, res) => {
  const canciones = JSON.parse(fs.readFileSync("repertorio.json"));
  res.send(canciones);
};

const addSong = (req, res) => {
  const cancion = req.body;
  const canciones = JSON.parse(fs.readFileSync("repertorio.json"));
  canciones.push(cancion);
  fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
  res.send("Canción agregada con éxito al repertorio");
};

const editSong = (req, res) => {
  const { id } = req.params;
  const cancion = req.body;
  const canciones = JSON.parse(fs.readFileSync("repertorio.json"));
  const index = canciones.findIndex((c) => c.id == id);
  canciones[index] = cancion;
  fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
  res.send("Canción editada con éxito");
};

const deleteSong = (req, res) => {
  const { id } = req.params;
  const canciones = JSON.parse(fs.readFileSync("repertorio.json"));
  const index = canciones.findIndex((c) => c.id == id);
  canciones.splice(index, 1);
  fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
  res.send("Canción eliminada con éxito");
};

export { getSongs, addSong, editSong, deleteSong };
