# 🗳️ Election Campaign War-Room Mock API

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![json-server](https://img.shields.io/badge/json--server-mock%20api-blue)
![API](https://img.shields.io/badge/API-REST-blue)
![Dataset](https://img.shields.io/badge/dataset-realistic-orange)
![Campaign Analytics](https://img.shields.io/badge/domain-political%20analytics-purple)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

A **realistic mock REST API** designed to simulate the data infrastructure used in a **political campaign war-room analytics dashboard**.

The project generates a structured synthetic dataset representing how modern election campaigns manage:

- booth-level operations
- volunteer coordination
- voter outreach
- issue tracking
- influencer networks
- opposition monitoring

The API is powered by **json-server** and a dataset generator built using **@faker-js/faker**, allowing frontend developers to build **analytics dashboards and campaign monitoring interfaces without requiring a production backend**.

---
## 🔗 Live API

[https://sudarshan-warroom-api.onrender.com](https://sudarshan-warroom-api.onrender.com)

**Note:** Free-tier server may take a few seconds to wake up.
---

# ⚡ Quick Start

Clone the repository:

```bash
git clone https://github.com/your-repository/mock-api.git
cd mock-api
```

Install dependencies:

```bash
npm install
```

Generate the dataset:

```bash
node generateData.js
```

Start the mock API:

```bash
npx json-server --watch db.json --port 3000
```

API will be available at:

```
http://localhost:3000
```

---

# 📊 Example Dashboard (Frontend)

This API is designed to power analytics dashboards such as:

- campaign war-room overview
- volunteer management
- booth-level outreach analytics
- voter sentiment monitoring
- influencer network tracking
- opposition activity monitoring

Example dashboard modules may include:

- Campaign Overview
- Volunteer Operations
- Booth Performance
- Political Intelligence
- Strategic Monitoring

---

# 🧠 Data Model Overview

The dataset models a simplified campaign operations structure.

Core relationships include:

- Volunteers assigned to booths
- Booths reporting outreach progress
- Door-to-door visits generating voter feedback
- Volunteer managers submitting daily intelligence reports
- Influencer identification based on field observations

---

# 🏗️ System Architecture

The mock API simulates the backend data layer used by campaign analytics dashboards.

```
Frontend Dashboard (Angular / React / Vue)
              │
              │ REST API
              ▼
         json-server
              │
              ▼
           db.json
              │
              ▼
       generateData.js
   (faker-based dataset generator)
```

This architecture allows developers to build frontend applications while working with **realistic operational datasets**.

---

# 🎯 Project Objective

Modern political campaigns rely on centralized **war-room dashboards** to monitor field operations and support strategic decision-making.

Campaign leadership teams track metrics such as:

- volunteer deployment
- booth-level campaign coverage
- voter outreach performance
- voter sentiment
- influential local actors
- opposition campaign activity

This repository simulates the **data layer of such systems**, enabling developers to prototype and build **campaign analytics dashboards using realistic data structures**.

---

# 🚀 Key Features

✔ Realistic campaign intelligence dataset  
✔ ~1600 generated records  
✔ Multi-domain campaign data model  
✔ REST-style API using **json-server**  
✔ Synthetic dataset generator using **@faker-js/faker**  
✔ Supports filtering, sorting, search, and pagination  
✔ Designed for **Angular / React / Vue dashboards**

---

# 🧰 Technology Stack

| Technology      | Purpose                      |
| --------------- | ---------------------------- |
| Node.js         | Runtime environment          |
| json-server     | Mock REST API                |
| @faker-js/faker | Synthetic dataset generation |
| JSON            | Dataset storage              |

---

# 📁 Project Structure

```
mock-api
│
├── db.json
├── generateData.js
├── package.json
└── README.md
```

---

# 📊 Dataset Architecture

The dataset simulates a **mid-scale legislative assembly campaign**.

The data model is divided into three operational intelligence layers.

---

## 1️⃣ Campaign Operations

Operational data generated from field activities.

| Dataset       | Description                               |
| ------------- | ----------------------------------------- |
| volunteers    | Campaign volunteers and field workers     |
| booths        | Booth-level campaign organization         |
| events        | Campaign meetings and outreach programs   |
| issues        | Local issues reported during field visits |
| dailyActivity | Daily campaign performance metrics        |

---

## 2️⃣ Field Intelligence

Data collected during field outreach activities.

| Dataset             | Description                         |
| ------------------- | ----------------------------------- |
| doorToDoorVisits    | Door-to-door voter outreach reports |
| volunteerAttendance | Volunteer participation tracking    |
| voterFeedback       | Voter sentiment and feedback        |
| boothProgress       | Booth-level outreach penetration    |

---

## 3️⃣ Strategic War-Room Intelligence

Data used by campaign leadership for monitoring and strategy.

| Dataset                   | Description                                        |
| ------------------------- | -------------------------------------------------- |
| influencerRecommendations | Influential local figures identified by volunteers |
| oppositionActivity        | Opposition campaign activity reports               |
| managerReports            | Field intelligence reports from managers           |
| analytics                 | Aggregated campaign performance metrics            |

---

# 📦 Typical Dataset Size

The generator produces approximately:

| Dataset                    | Records |
| -------------------------- | ------- |
| Volunteers                 | ~120    |
| Booths                     | ~40     |
| Events                     | ~25     |
| Issues                     | ~80     |
| Daily Activity             | ~30     |
| Door-to-door visits        | ~400    |
| Volunteer attendance       | ~500    |
| Voter feedback             | ~300    |
| Booth progress             | ~40     |
| Influencer recommendations | ~80     |
| Opposition activity        | ~60     |
| Manager reports            | ~30     |

Total dataset size: **~1600 records**

This scale allows dashboards to demonstrate:

- filtering
- pagination
- analytics charts
- campaign intelligence monitoring

---

# 🔌 API Endpoints

## Campaign Operations

```
GET /volunteers
GET /booths
GET /events
GET /issues
GET /dailyActivity
```

## Field Intelligence

```
GET /doorToDoorVisits
GET /volunteerAttendance
GET /voterFeedback
GET /boothProgress
```

## Strategic Intelligence

```
GET /influencerRecommendations
GET /oppositionActivity
GET /managerReports
GET /analytics
```

---

# 🔎 Query Examples

Pagination

```
/volunteers?_page=1&_limit=10
```

Search

```
/volunteers?q=rahul
```

Filtering

```
/issues?priority=High
```

Sorting

```
/booths?_sort=votersContacted&_order=desc
```

These features simulate **real backend query capabilities**, allowing dashboards to behave like production systems.

---

# 📄 Example Dataset Record

Example volunteer record:

```json
{
  "id": 1,
  "name": "Amit Kumar",
  "phone": "9876543210",
  "booth": 12,
  "role": "Volunteer",
  "active": true
}
```

---

# 🖥️ Angular Integration Example

Example Angular service request:

```typescript
this.http.get("http://localhost:3000/volunteers");
```

This API can power modules such as:

- campaign overview dashboards
- volunteer management panels
- booth analytics charts
- voter sentiment dashboards
- influencer mapping
- opposition monitoring

---

# 📈 Example Dashboard Modules

A campaign war-room dashboard built on this API may include:

### Campaign Overview

- Total volunteers
- Booth coverage
- Events conducted
- Voters contacted

### Volunteer Operations

- Volunteer management
- Attendance tracking
- Door-to-door outreach

### Booth Analytics

- Booth-level outreach performance
- Voter sentiment distribution

### Political Intelligence

- Influencer identification
- Opposition activity monitoring

### Strategic Monitoring

- Daily campaign reports
- outreach progress metrics
- operational alerts

---

# 👨‍💻 Author

**Rishu Mishra**

Electronics Engineer — VIT Vellore  
Former Web Developer (~3 years industry experience)  
UPSC aspirant and technology enthusiast

This project combines **software engineering experience with insights from grassroots political campaign operations**, including exposure to **Bihar Legislative Assembly election field activities**.

---

# 💡 Why This Project Exists

Many frontend dashboards require realistic backend data for development and testing.

However, most public datasets do not simulate **operational campaign data structures** such as booth management, volunteer deployment, and voter sentiment reporting.

This project was created to provide a **realistic mock backend for campaign analytics dashboards**, enabling developers to build data-driven interfaces without relying on production systems.

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

If you would like to extend the dataset model or improve the API structure, feel free to open an issue or submit a pull request.

---

# ⚠ Disclaimer

This project is intended **only for educational, research, and portfolio purposes**.

All data is **synthetically generated** and does not represent real individuals or voters.

---

# 📜 License

MIT License

Copyright (c) 2026 **Rishu Mishra**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files to deal in the Software without restriction.

---

# 🔮 Future Enhancements

Potential extensions include:

- geospatial campaign data
- booth heatmaps
- demographic voter segmentation
- campaign finance tracking
- social media analytics
- predictive election modeling

---

# Final Note

This repository demonstrates how structured operational data can power **campaign analytics dashboards and decision-support systems used in complex political field operations**.
