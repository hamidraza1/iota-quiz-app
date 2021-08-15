const GetQuestions = async (diffultyLevel = "hard") => {
  const axios = require("axios").default;

  const questionsURl = `https://opentdb.com/api.php?amount=10&difficultyLevel=${diffultyLevel}=hard&type=boolean`;
  // GET request for remote image in node.js

  const getresult = await axios.get(questionsURl);
  const data = await getresult.data.results;
  return await data;
};

export default GetQuestions;
