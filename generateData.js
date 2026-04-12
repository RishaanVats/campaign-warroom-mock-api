const { faker } = require("@faker-js/faker")
const fs = require("fs")

// ----------------------------
// DATA CONTAINERS
// ----------------------------

const volunteers = []
const booths = []
const events = []
const issues = []
const dailyActivity = []

const doorToDoorVisits = []
const volunteerAttendance = []
const voterFeedback = []
const boothProgress = []
const sentimentTrend = []

const influencerRecommendations = []
const oppositionActivity = []
const managerReports = []

const campaignTimeline = []
const warroomAlerts = []


// ----------------------------
// BOOTHS
// ----------------------------

for (let i = 1; i <= 50; i++) {

  const totalVoters = faker.number.int({ min: 900, max: 1400 })
  const contacted = faker.number.int({ min: 200, max: totalVoters })
  const zone = Math.ceil(i / 10); // 1–10 → 1, 11–20 → 2

  booths.push({
    id: i,
    boothNumber: i,
    zone: `zone ` + zone,
    area: `ward ${i}`,
    totalVoters,
    votersContacted: contacted
  })

}


// ----------------------------
// VOLUNTEERS
// ----------------------------

for (let i = 1; i <= 160; i++) {
  const booth = faker.number.int({ min: 1, max: 50 });
  function getZone(input) {
    switch (true) {
      case (input >= 1 && input <= 10):
        return "zone 1";
      case (input >= 11 && input <= 20):
        return "zone 2";
      case (input >= 21 && input <= 30):
        return "zone 3";
      case (input >= 31 && input <= 40):
        return "zone 4";
      case (input >= 41 && input <= 50):
        return "zone 5";
      default:
        return "unknown zone";
    }
  }

  volunteers.push({
    id: i,
    name: faker.person.fullName(),
    phone: `+91 ${faker.helpers.fromRegExp(/[6-9][0-9]{4}/)} ${faker.helpers.fromRegExp(/[0-9]{5}/)}`,
    zone: 'zone ' + Math.ceil(booth / 10), // 1–10 → 1, 11–20 → 2,
    booth: booth,
    location: "Ward " + faker.number.int({ min: 1, max: 60 }),
    role: faker.helpers.arrayElement([
      "Volunteer",
      "Booth Worker",
      "Coordinator",
      "Social Media",
      "Field Organizer",
      "Logistics Lead"
    ]),
    status: faker.helpers.arrayElement(["Active", "On Field", "Inactive", "Alert"]),
    voterCoverage: faker.number.int({ min: 0, max: 300 }), // Number of assigned voters contacted
    active: faker.datatype.boolean(),
    lastSync: faker.date.recent({ days: 2 }).toISOString()
  })

}


// ----------------------------
// EVENTS
// ----------------------------

for (let i = 1; i <= 25; i++) {

  events.push({
    id: i,
    name: faker.helpers.arrayElement([
      "Door to Door Campaign",
      "Town Hall Meeting",
      "Women Outreach",
      "Youth Interaction",
      "Market Visit",
      "Volunteer Training"
    ]),
    location: faker.location.city(),
    date: faker.date.recent({ days: 60 }),
    attendees: faker.number.int({ min: 40, max: 400 })
  })

}


// ----------------------------
// ISSUES
// ----------------------------

for (let i = 1; i <= 80; i++) {

  issues.push({
    id: i,
    booth: faker.number.int({ min: 1, max: 40 }),
    type: faker.helpers.arrayElement([
      "Water",
      "Electricity",
      "Road",
      "Healthcare",
      "Sanitation"
    ]),
    description: faker.lorem.sentence(),
    priority: faker.helpers.arrayElement(["Low", "Medium", "High"]),
    status: faker.helpers.arrayElement([
      "Open",
      "In Progress",
      "Resolved"
    ])
  })

}


// ----------------------------
// DAILY ACTIVITY
// ----------------------------

for (let i = 1; i <= 30; i++) {

  dailyActivity.push({
    id: i,
    date: faker.date.recent({ days: 30 }),
    volunteersActive: faker.number.int({ min: 10, max: 80 }),
    housesVisited: faker.number.int({ min: 50, max: 400 }),
    votersReached: faker.number.int({ min: 120, max: 1200 })
  })

}


// ----------------------------
// DOOR TO DOOR VISITS
// ----------------------------

for (let i = 1; i <= 400; i++) {

  const volunteer = faker.helpers.arrayElement(volunteers)

  doorToDoorVisits.push({
    id: i,
    volunteerId: volunteer.id,
    booth: volunteer.booth,
    date: faker.date.recent({ days: 30 }),
    housesVisited: faker.number.int({ min: 5, max: 30 }),
    votersContacted: faker.number.int({ min: 10, max: 80 })
  })

}


// ----------------------------
// VOLUNTEER ATTENDANCE
// ----------------------------

for (let i = 1; i <= 500; i++) {

  const volunteer = faker.helpers.arrayElement(volunteers)

  volunteerAttendance.push({
    id: i,
    volunteerId: volunteer.id,
    booth: volunteer.booth,
    date: faker.date.recent({ days: 30 }),
    status: faker.helpers.arrayElement(["Present", "Absent"])
  })

}


// ----------------------------
// VOTER FEEDBACK
// ----------------------------

for (let i = 1; i <= 8900; i++) {
const volunteer = faker.helpers.arrayElement(volunteers)
  voterFeedback.push({
    id: i,
    booth: faker.number.int({ min: 1, max: volunteer.booth }),
    sentiment: faker.helpers.arrayElement([
      "support",
      "neutral",
      "opposition",
      "undecided"
    ]),
    issue: faker.helpers.arrayElement([
      "Road",
      "Electricity",
      "Water",
      "Employment",
      "Healthcare"
    ]),
    comment: faker.lorem.sentence(),
    date: faker.date.recent({ days: 30 })
  })

}


// ----------------------------
// BOOTH PROGRESS
// ----------------------------

for (let i = 1; i <= booths.length; i++) {
  const targetVoters = faker.number.int({ min: 800, max: 2000 });
  const votersReached = faker.number.int({ min: 200, max: targetVoters });
  const supportersIdentified = faker.number.int({ min: 100, max: votersReached });

  boothProgress.push({
    id: i,
    booth: i,
    boothName: faker.location.street() + ' - ' + faker.location.direction(),
    targetVoters: targetVoters,
    votersReached: votersReached,
    supportersIdentified: supportersIdentified,
    undecided: faker.number.int({ min: 50, max: 300 }),
    coverage: faker.number.int({ min: 30, max: 100 })
  })

}

// ----------------------------
// SENTIMENT TREND
// ----------------------------

for (let i = 1; i <= 10; i++) {

  sentimentTrend.push({
    id: i,
    supporters: faker.number.int({ min: 24, max: 66 }),
    neutral: faker.number.int({ min: 24, max: 66 }),
    opposition: faker.number.int({ min: 24, max: 66 }),
    undecided: faker.number.int({ min: 10, max: 40 }),
  })

}

// ----------------------------
// INFLUENCER RECOMMENDATIONS
// ----------------------------

for (let i = 1; i <= 80; i++) {

  const volunteer = faker.helpers.arrayElement(volunteers)

  influencerRecommendations.push({
    id: i,
    name: faker.person.fullName(),
    booth: faker.number.int({ min: 1, max: 40 }),
    occupation: faker.helpers.arrayElement([
      "Teacher/Professor",
      "Business Owner",
      "Doctor",
      "Farmer Leader",
      "Community Head"
    ]),
    influenceLevel: faker.helpers.arrayElement([
      "Low",
      "Medium",
      "High"
    ]),
    estimatedInfluence: faker.number.int({ min: 100, max: 4000 }),
    recommendedBy: volunteer.id,
    dpUrl: "",
    supportLikelihood: faker.helpers.arrayElement([
      "Support",
      "Neutral",
      "Opposition"
    ]),
    // contacted: faker.datatype.boolean(),
    status: faker.helpers.arrayElement([
      "Confirmed",
      "Pending",
      "Contacted",
      "New Lead",
      "VIP"
    ])
  })

}


// ----------------------------
// OPPOSITION ACTIVITY
// ----------------------------

for (let i = 1; i <= 60; i++) {

  oppositionActivity.push({
    id: i,
    booth: faker.number.int({ min: 1, max: 40 }),
    party: faker.helpers.arrayElement([
      "Opposition Party A",
      "Opposition Party B"
    ]),
    activity: faker.helpers.arrayElement([
      "Roadshow",
      "Public Meeting",
      "Door to Door"
    ]),
    crowdEstimate: faker.number.int({ min: 50, max: 500 }),
    date: faker.date.recent({ days: 30 })
  })

}


// ----------------------------
// MANAGER REPORTS
// ----------------------------

for (let i = 1; i <= 30; i++) {

  managerReports.push({
    id: i,
    managerName: faker.person.fullName(),
    booth: faker.number.int({ min: 1, max: 40 }),
    date: faker.date.recent({ days: 30 }),
    housesVisited: faker.number.int({ min: 100, max: 400 }),
    votersReached: faker.number.int({ min: 300, max: 900 }),
    newSupporters: faker.number.int({ min: 50, max: 200 }),
    issuesRaised: faker.number.int({ min: 1, max: 10 }),
    notes: faker.lorem.sentence()
  })

}


// ----------------------------
// CAMPAIGN TIMELINE (ORDERED)
// ----------------------------

const startDate = new Date()

for (let i = 1; i <= 60; i++) {

  const date = new Date(startDate)
  date.setDate(startDate.getDate() - (60 - i))

  campaignTimeline.push({
    id: i,
    date,
    volunteersActive: faker.number.int({ min: 10, max: 80 }),
    votersReached: faker.number.int({ min: 200, max: 1500 }),
    housesVisited: faker.number.int({ min: 50, max: 400 }),
    sentimentScore: faker.number.int({ min: 40, max: 80 })
  })

}


// ----------------------------
// WAR ROOM ALERTS
// ----------------------------

for (let i = 1; i <= 20; i++) {

  warroomAlerts.push({
    id: i,
    type: faker.helpers.arrayElement([
      "Opposition Rally",
      "Booth Weakness",
      "Volunteer Shortage",
      "Negative Sentiment Spike"
    ]),
    booth: faker.number.int({ min: 1, max: 40 }),
    severity: faker.helpers.arrayElement([
      "Low",
      "Medium",
      "High",
      "Critical"
    ]),
    description: faker.lorem.sentence(),
    reportedAt: faker.date.recent({ days: 5 })
  })

}


// ----------------------------
// ANALYTICS
// ----------------------------

const analytics = {

  summary: {
    totalVolunteers: volunteers.length,
    activeVolunteers: volunteers.filter(v => v.active).length,
    boothsCovered: booths.length,
    eventsConducted: events.length,
    votersContacted: booths.reduce((sum, b) => sum + b.votersContacted, 0)
  },

  volunteerStats: {
    coordinators: volunteers.filter(v => v.role === "Coordinator").length,
    fieldOrganizers: volunteers.filter(v => v.role === "Field Organizer").length,
    boothWorkers: volunteers.filter(v => v.role === "Booth Worker").length
  },

  outreachStats: {
    doorVisits: doorToDoorVisits.length,
    votersReached: doorToDoorVisits.reduce((sum, v) => sum + v.votersContacted, 0),
    housesVisited: doorToDoorVisits.reduce((sum, v) => sum + v.housesVisited, 0)
  },

  sentimentStats: {
    supporters: voterFeedback.filter(v => v.sentiment === "Support").length,
    neutral: voterFeedback.filter(v => v.sentiment === "Neutral").length,
    opposition: voterFeedback.filter(v => v.sentiment === "Opposition").length,
    undecided: voterFeedback.filter(v => v.sentiment === "Undecided").length
  }

}


// ----------------------------
// DATABASE EXPORT
// ----------------------------

const db = {

  volunteers,
  booths,
  events,
  issues,
  dailyActivity,

  doorToDoorVisits,
  volunteerAttendance,
  voterFeedback,
  boothProgress,
  sentimentTrend,

  influencerRecommendations,
  oppositionActivity,
  managerReports,

  campaignTimeline,
  warroomAlerts,

  analytics

}


// ----------------------------
// WRITE FILE
// ----------------------------

fs.writeFileSync("db.json", JSON.stringify(db, null, 2))

console.log("Campaign dataset generated successfully")