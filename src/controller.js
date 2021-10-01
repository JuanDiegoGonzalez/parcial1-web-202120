var axios = require("axios");
const { response, request } = require("express");

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  const { data } = await axios(
    `https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players`
  );
  const results = data.values.map((elem) => ({
    first_name: elem.first_name,
    last_name: elem.last_name,
    h_in: elem.h_in,
  }));

  let respuesta = [];

  for (let i = 0; i < results.length; i++) {
    for (let j = i + 1; j < results.length; j++) {
      alturaJug1 = parseInt(results[i].h_in);
      alturaJug2 = parseInt(results[j].h_in);

      if (alturaJug1 + alturaJug2 === parseInt(req.query.input)) {
        nombreJug1 = results[i].first_name + " " + results[i].last_name;
        nombreJug2 = results[j].first_name + " " + results[j].last_name;

        respuesta.push({
          id: respuesta.length + 1,
          jug1: nombreJug1,
          jug2: nombreJug2,
        });
      }
    }
  }

  resp.json(respuesta);
  //return resp.json({ message: "To be implemented" });
};

module.exports = { getPairsOfPlayers };
