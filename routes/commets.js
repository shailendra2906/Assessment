var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/comments", function (req, res, next) {
  const userCommentsData = [
    {
      id:1,
      username: "Tsutsui",
      comment:
        "Such a massive change in such a short time is extremely unusual.",
      likes: 12,
      days: 3,
    },
    {
      id:2,
      username: "Sophie Anderson",
      comment:
        "Loss of Arctic sea ice is just one of many changes that are accelerating it.",
      likes: 4,
      days: 4,
    },
    {
      id:3,
      username: "Charlie Harris",
      comment: "Perhaps they had the same thing in the early 20th century.",
      likes: 3,
      days: 7,
    },
  ];
  res.json(userCommentsData);
});

module.exports = router;
