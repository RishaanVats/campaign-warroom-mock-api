const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
})

server.get('/warroomAlerts/sorted-data', (req, res) => {
  const db = router.db; // lowdb instance
  const priorityMap = { "Critical": 4, "High": 3, "Medium": 2, "Low": 1 };

  const data = db.get('warroomAlerts')
    .value()
    .sort((a, b) => {
      // 1. Create a "Day" or "Hour" string for grouping
      const dateA = a.reportedAt.split('T')[0]; // Groups by Day
      const dateB = b.reportedAt.split('T')[0];

      // Primary Sort: Grouped Date (Newest Day First)
      if (dateB !== dateA) {
        return dateB.localeCompare(dateA);
      }

      // 2. Secondary Sort: Severity within that group
      if (a.severity !== b.severity) {
        return priorityMap[b.severity] - priorityMap[a.severity];
      }

      // 3. Tertiary Sort: Exact time (if day and severity are same)
      return new Date(b.reportedAt) - new Date(a.reportedAt);


    });

  res.jsonp(data);
});

server.get('/voterFeedback/byZone', async (req, res) => {
  const db = router.db; // lowdb instance
  const data = db.get('voterFeedback').value();

  const result = {};

  data.forEach(item => {
    // Determine zone
    const zone = Math.ceil(item.booth / 10); // 1–10 → 1, 11–20 → 2
    // Normalize sentiment (optional safety)
    const sentiment = item.sentiment;

    // Initialize zone if not exists
    if (!result[zone]) {
      result[zone] = {
        support: 0,
        neutral: 0,
        opposition: 0,
        undecided: 0
      };
    }

    // Increment sentiment count
    if (result[zone][sentiment] !== undefined) {
      result[zone][sentiment]++;
    } else {
      // fallback (in case new sentiment appears)
      result[zone][sentiment] = 1;
    }
  });

  res.jsonp(result);
});


server.use(router)

server.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port " + (process.env.PORT || 3000))
})