// Replace this list with your actual projects
const projects = [
  {
    title: "CommonCents App",
    description: "A money-saving iOS app built with SwiftUI and Firebase for individual and group savings goals.",
    link: "https://github.com/jashadev42/commoncents"
  },
  {
    title: "TU Course Finder",
    description: "Chrome extension that maps Towson class schedules to Google Maps using IndexedDB and JS.",
    link: "https://github.com/AnthonyG482/TU-Course-Finder"
  },
  {
    title: "QGIS AI Chatbot",
    description: "A Swift app to log workouts, macros, meals, and visualize fitness data with charts.",
    link: "https://github.com/jashadev42/summer-project2024"
  }
];

const container = document.getElementById('projects-container');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View on GitHub</a>
  `;
  container.appendChild(card);
});

