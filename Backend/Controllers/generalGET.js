const generalGET = (req, res) => {
  const myObj = {
    message: "OK",
    status: 200,
  };
  res.json(myObj);
};

export default generalGET;
