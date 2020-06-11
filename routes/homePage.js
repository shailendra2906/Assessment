var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  const homePageData = {
    para1: `According to the National Oceanic and Atmospheric Administration, Ted,
        Scambos, NSIDCIead scentist, puts the potentially record low maximum sea
        ice extent tihs year down to low ice extent in the Pacific and a late
        drop in ice extent in the Barents Sea.`,
    quotesData: {
        body: `Over the span of the satellite record, Arctic sea ice has been
        declining significantly, while sea ice in the Antarctichas increased
        very slightly.`,
        author: `NOAA`
    },
    para2: {
      header: ` So what does the new record for the lowest level of winter ice
            actually mean?`,
      body: `The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever happens
            with climate change. Even if the Arctic continues to be one of the
            fastest-warming regions of the world, it will always be plunged into
            bitterly cold polar dark every winter. And year-by-year, for all
            kinds of natural reasons, there's huge variety of the state of the
            ice.`,
    },
    para3: `For a start, it does not automatically follow that a record amount of
    ice will melt this summer. More important for determining the size of
    the annual thaw is the state of the weather as the midnight sun
    approaches and temperatures rise. But over the more than 30 years of
    satellite records, scientists have observed a clear pattern of decline,
    decade-by-decade.`,
  };
  res.json(homePageData);
});

module.exports = router;
