const { faker } = require("@faker-js/faker")
const fs = require("fs")

const volunteers = []
const booths = []
const events = []
const issues = []
const dailyActivity = []

const doorToDoorVisits = []
const volunteerAttendance = []
const voterFeedback = []
const boothProgress = []
const influencerRecommendations = []
const oppositionActivity = []
const managerReports = []

// ------------------
// Booths
// ------------------

for (let i = 1; i <= 40; i++) {
  booths.push({
    id: i,
    boothNumber: i,
    area: `Ward ${i}`,
    totalVoters: faker.number.int({ min: 900, max: 1400 }),
    votersContacted: faker.number.int({ min: 200, max: 900 })
  })
}

// ------------------
// Volunteers
// ------------------

for (let i = 1; i <= 120; i++) {
  volunteers.push({
    id: i,
    name: faker.person.fullName(),
    phone: faker.phone.number("9#########"),
    booth: faker.number.int({ min: 1, max: 40 }),
    role: faker.helpers.arrayElement([
      "Volunteer",
      "Booth Worker",
      "Coordinator",
      "Social Media",
      "Field Organizer"
    ]),
    active: faker.datatype.boolean()
  })
}

// ------------------
// Events
// ------------------

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

// ------------------
// Issues
// ------------------

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
    status: faker.helpers.arrayElement(["Open", "In Progress", "Resolved"])
  })
}

// ------------------
// Daily Activity
// ------------------

for (let i = 1; i <= 30; i++) {
  dailyActivity.push({
    id: i,
    date: faker.date.recent({ days: 30 }),
    volunteersActive: faker.number.int({ min: 10, max: 80 }),
    housesVisited: faker.number.int({ min: 50, max: 400 }),
    votersReached: faker.number.int({ min: 120, max: 1200 })
  })
}

// ------------------
// Door to Door Visits
// ------------------

for (let i = 1; i <= 400; i++) {
  doorToDoorVisits.push({
    id: i,
    volunteerId: faker.number.int({ min: 1, max: 120 }),
    booth: faker.number.int({ min: 1, max: 40 }),
    date: faker.date.recent({ days: 30 }),
    housesVisited: faker.number.int({ min: 5, max: 30 }),
    votersContacted: faker.number.int({ min: 10, max: 80 })
  })
}

// ------------------
// Volunteer Attendance
// ------------------

for (let i = 1; i <= 500; i++) {
  volunteerAttendance.push({
    id: i,
    volunteerId: faker.number.int({ min: 1, max: 120 }),
    booth: faker.number.int({ min: 1, max: 40 }),
    date: faker.date.recent({ days: 30 }),
    status: faker.helpers.arrayElement(["Present", "Absent"])
  })
}

// ------------------
// Voter Feedback
// ------------------

for (let i = 1; i <= 300; i++) {
  voterFeedback.push({
    id: i,
    booth: faker.number.int({ min: 1, max: 40 }),
    sentiment: faker.helpers.arrayElement([
      "Support",
      "Neutral",
      "Opposition",
      "Undecided"
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

// ------------------
// Booth Progress
// ------------------

for (let i = 1; i <= 40; i++) {
  boothProgress.push({
    id: i,
    booth: i,
    targetVoters: faker.number.int({ min: 800, max: 1200 }),
    votersReached: faker.number.int({ min: 200, max: 900 }),
    supportersIdentified: faker.number.int({ min: 100, max: 400 }),
    undecided: faker.number.int({ min: 50, max: 200 }),
    opposition: faker.number.int({ min: 20, max: 150 })
  })
}

// ------------------
// Influencer Recommendations
// ------------------

for (let i = 1; i <= 80; i++) {
  influencerRecommendations.push({
    id: i,
    name: faker.person.fullName(),
    booth: faker.number.int({ min: 1, max: 40 }),
    occupation: faker.helpers.arrayElement([
      "Teacher",
      "Business Owner",
      "Doctor",
      "Farmer Leader",
      "Community Head"
    ]),
    influenceLevel: faker.helpers.arrayElement(["Low", "Medium", "High"]),
    estimatedInfluence: faker.number.int({ min: 50, max: 400 }),
    recommendedBy: faker.number.int({ min: 1, max: 120 }),
    supportLikelihood: faker.helpers.arrayElement([
      "Support",
      "Neutral",
      "Opposition"
    ]),
    contacted: faker.datatype.boolean(),
    status: faker.helpers.arrayElement([
      "Pending",
      "Meeting Scheduled",
      "Joined Campaign"
    ])
  })
}

// ------------------
// Opposition Activity
// ------------------

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

// ------------------
// Manager Reports
// ------------------

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

const analytics = {
  summary: {
    totalVolunteers: volunteers.length,
    boothsCovered: 40,
    eventsConducted: events.length,
    votersContacted: booths.reduce((sum, b) => sum + b.votersContacted, 0)
  }
}

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
  influencerRecommendations,
  oppositionActivity,
  managerReports,
  analytics
}

fs.writeFileSync("db.json", JSON.stringify(db, null, 2))

console.log("db.json generated successfully")