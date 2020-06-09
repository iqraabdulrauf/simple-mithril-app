// src/models/User.js
const m = require("mithril");

const User = {
  list: [],
  loadList: () => {
    // TODO: make XHR call
    return m
      .request({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users",
        withCredentials: true,
      })
      .then((result) => (User.list = result.data))
      .catch((e) => e);
  },
  current: {},
  load: (id) => {
    return m
      .request({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
        withCredentials: true,
      })
      .then(function (result) {
        User.current = result;
      });
  },
  save: function () {
    return m.request({
      method: "PUT",
      url: "https://rem-rest-api.herokuapp.com/api/users/" + User.current.id,
      body: User.current,
      withCredentials: true,
    });
  },
};

module.exports = User;
