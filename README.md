# 🗳️ Election Campaign Mock API

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![json-server](https://img.shields.io/badge/json--server-mock%20api-blue)
![Dataset](https://img.shields.io/badge/dataset-realistic-orange)
![Campaign Analytics](https://img.shields.io/badge/domain-political%20analytics-purple)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

A **realistic mock REST API** designed to power an **Election Campaign Analytics Dashboard**.

This project simulates the **data infrastructure of a modern political campaign war-room**, enabling frontend developers to build sophisticated **analytics dashboards** without requiring a production backend.

The system models **real campaign workflows** including:

* booth-level campaign organization
* volunteer management
* door-to-door outreach
* voter sentiment collection
* issue tracking
* political influencer identification
* opposition activity monitoring

---

# 👨‍💻 Author

**Rishu Mishra**

This project was created by **Rishu Mishra** as part of a frontend engineering portfolio to demonstrate the design and development of a **data-driven political campaign analytics dashboard**.

The architecture and dataset design were developed **with mentorship from ChatGPT**.

The data model also incorporates **first-hand insights from political ground work during recent Bihar Legislative Assembly election campaigns**, reflecting how real campaign teams organize:

* booth-level operations
* volunteer coordination
* field intelligence gathering
* political outreach planning

---

# 🎯 Project Goal

The goal of this project is to simulate the **data layer of a political campaign command center**, allowing developers to build dashboards similar to those used in **real election campaign war rooms**.

Campaign leadership teams typically monitor:

* volunteer deployment
* voter outreach
* booth-level performance
* public sentiment
* key local influencers
* opposition activity

This repository provides a **realistic mock dataset** for such systems.

---

# 🚀 Key Features

✔ Realistic campaign intelligence dataset
✔ 1000+ generated records
✔ War-room level campaign analytics
✔ REST-style mock API using json-server
✔ Supports filtering, sorting, pagination, and search
✔ Designed specifically for **Angular analytics dashboards**

---

# 🧰 Technology Stack

| Technology  | Purpose                            |
| ----------- | ---------------------------------- |
| Node.js     | Runtime environment                |
| json-server | Mock REST API                      |
| Faker.js    | Synthetic campaign data generation |
| JSON        | Dataset storage                    |

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

The generated dataset simulates a **mid-scale legislative assembly campaign**.

The data is divided into **three intelligence layers**.

---

# 1️⃣ Campaign Operations

Operational data generated from field activity.

| Dataset       | Description                               |
| ------------- | ----------------------------------------- |
| volunteers    | Campaign volunteers and field workers     |
| booths        | Booth-level voter outreach data           |
| events        | Campaign meetings and outreach programs   |
| issues        | Local issues reported during field visits |
| dailyActivity | Daily campaign performance metrics        |

---

# 2️⃣ Field Intelligence

Data reported by volunteer managers.

| Dataset             | Description                         |
| ------------------- | ----------------------------------- |
| doorToDoorVisits    | Door-to-door voter outreach reports |
| volunteerAttendance | Volunteer attendance tracking       |
| voterFeedback       | Voter sentiment and feedback        |
| boothProgress       | Booth-level campaign penetration    |

---

# 3️⃣ Strategic War-Room Intelligence

Information used by campaign leadership.

| Dataset                   | Description                                         |
| ------------------------- | --------------------------------------------------- |
| influencerRecommendations | Influential local figures recommended by volunteers |
| oppositionActivity        | Opposition campaign activity reports                |
| managerReports            | Daily reports submitted by volunteer managers       |
| analytics                 | Dashboard summary statistics                        |

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
| Door-to-door reports       | ~400    |
| Volunteer attendance       | ~500    |
| Voter feedback             | ~300    |
| Booth progress             | ~40     |
| Influencer recommendations | ~80     |
| Opposition activity        | ~60     |
| Manager reports            | ~30     |

Total: **~1,600 records**

This dataset size ensures dashboards can demonstrate:

* filtering
* pagination
* analytics charts
* campaign intelligence insights

---

# ⚙️ Installation

Clone the repository:

```
git clone https://github.com/your-repository/mock-api.git
```

Navigate to the project directory:

```
cd mock-api
```

Install dependencies:

```
npm install
```

---

# 🧪 Generate Campaign Dataset

Run the generator script:

```
node generateData.js
```

This will create:

```
db.json
```

with a full campaign intelligence dataset.

---

# ▶ Start Mock API Server

Run:

```
npx json-server --watch db.json --port 3000
```

Server starts at:

```
http://localhost:3000
```

---

# 🔌 Available API Endpoints

### Campaign Operations

```
GET /volunteers
GET /booths
GET /events
GET /issues
GET /dailyActivity
```

---

### Field Intelligence

```
GET /doorToDoorVisits
GET /volunteerAttendance
GET /voterFeedback
GET /boothProgress
```

---

### Strategic Intelligence

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

These features simulate **real backend behavior**, enabling realistic frontend development.

---

# 🖥️ Angular Integration Example

Example Angular service call:

```typescript
this.http.get("http://localhost:3000/volunteers")
```

The Angular frontend can use this API to render:

* campaign overview dashboards
* volunteer management panels
* booth analytics charts
* voter sentiment dashboards
* influencer tracking systems
* opposition activity monitoring

---

# 📈 Example Dashboard Modules

A typical campaign analytics dashboard could include:

### Campaign Overview

* Total volunteers
* Booth coverage
* Events conducted
* Voters contacted

### Volunteer Operations

* Volunteer management
* Attendance tracking
* Door-to-door outreach

### Booth Performance

* Booth-level outreach metrics
* Voter sentiment analysis

### Political Intelligence

* Influencer mapping
* Opposition activity tracking

### War-Room Analytics

* Daily campaign reports
* Strategic decision metrics

---

# ⚠ Disclaimer

This project is intended **only for educational and portfolio purposes**.

All data is **synthetically generated** and does not represent real voters or individuals.

---

# 📜 License

MIT License

Copyright (c) 2026 **Rishu Mishra**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files to deal in the Software without restriction.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
