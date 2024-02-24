import path from "path";

const getHtml = (req, res) => {
  res.sendFile(path.resolve("index.html"));
};

export { getHtml };
