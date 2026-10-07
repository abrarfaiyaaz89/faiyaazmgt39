// ===== EDIT ONLY THIS FILE TO ADD CONTENT =====
// File paths are relative to the site folder, e.g. "files/bcc104/ch1.pdf"
// date format: YYYY-MM-DD (files added in the last 14 days get a "New" badge)
window.SITE = {
  updated: "2026-10-07",
  contact: { email: "abrarfaiyaaz89@gmail.com", phone: "01852268399" },
  gallery: [{ src: "group.jpg", caption: "Management 39 · University of Chittagong" }],
  events: [
    // { title: "Orientation Day", date: "2026-09-01", photo: "events/orientation.jpg", text: "A short description." }
  ],
  achievements: [
    // { title: "Dean's List", by: "Student name", date: "2026-09-01", text: "Details." }
  ],
  semesters: [
    {
      id: "1", name: "1st Semester",
      courses: [
        { code: "BCC-103", title: "Basic Mathematics", files: {
          notes: [ // { title: "Chapter 4 · Functions", file: "files/bcc103/ch4.pdf", date: "2026-09-13" }
          ], slides: [], books: [], syllabus: [], questions: [] } },
        { code: "BCC-104", title: "Principles of Management", files: {
          notes: [], slides: [], books: [], syllabus: [], questions: [] } },
        { code: "BCC-105", title: "Essential to Communication", files: {
          notes: [], slides: [], books: [], syllabus: [], questions: [] } }
      ]
    }
  ]
};
