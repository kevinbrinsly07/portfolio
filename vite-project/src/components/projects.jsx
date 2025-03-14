import React from 'react';

const project1 = '/projectsPic/realestate.png'; // Corrected path

const techStacks = {
  React: './../public/react.png',
  ReactNative:'./../public/reactnative.png',
  firebase: './../public/firebase.png',
  ExpressJS: './../public/express.png',
  Flask: './../public/flask.png',
  Python: './../public/python.png',
  Tailwind: './../public/tailwind.png',
  HTML: './../public/html.png',
  CSS: './../public/css.png',
  JavaScript: './../public/javascript.png',
  PHP: './../public/php.png',
  MongoDB: './../public/mongodb.png'
};

const projects = [
  {
    name: 'Cinemax',
    image: project1,
    description: 'Developed a movie streaming app frontend using React Native, implementing movie detail pages and a responsive design for iOS and Android platforms, ensuring a seamless user experience.',
    techStack: ['ReactNative', 'firebase'],
  },
  {
    name: 'SinNews',
    image: project1,
    description: 'Developed a Sinhala news summarizer using React for the frontend and Flask for the backend. Fine-tuned the mT5 model on a custom dataset for Sinhala news summarization and integrated it into the system. Utilized Python for data processing, implemented a responsive UI with Tailwind CSS, and ensured secure handling of news articles.',
    techStack: ['Python', 'Flask','React', 'Tailwind'],
  },
  {
    name: 'Hometeq',
    image: project1,
    description: 'Hometeq is a web application built using PHP, MySQL, HTML, and CSS, designed to manage e-commerce functionalities. The backend, powered by PHP, handles user authentication, session management, and database interactions, while MySQL stores product details, user accounts, and orders.',
    techStack: ['PHP', 'HTML', 'CSS'],
  },
  {
    name: 'ToDoApp',
    image: project1,
    description: 'This Express.js web application provides a simple implementation of CRUD (Create, Read, Update, Delete) operations using MongoDB as the database. It allows users to add new records, retrieve stored data, update existing entries, and delete records seamlessly. The application is built with Node.js and Express.js, utilizing Mongoose for database interactions. It follows a RESTful API structure, making it easy to integrate with frontend applications or other services.',
    techStack: ['ExpressJS', 'MongoDB'],
  },
  {
    name: 'TicTacToeGame',
    image: project1,
    description: 'This Vanilla JavaScript code implements a simple two-player Tic-Tac-Toe game. Players take turns clicking buttons to mark “X” or “O”. The game checks for a winner after each move, disables the board upon a win, or shows a draw message if no winner is found. A reset function allows restarting the game with an empty board.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'LoginApplication',
    image: project1,
    description: 'This project is a Express.js web application with a session-based login system using EJS templating. It handles user authentication, session management, and routing efficiently.',
    techStack: ['ExpressJS'],
  },
  // {
  //   name: 'Project 7',
  //   image: project1,
  //   description: 'A real-time chat application built using Socket.io and Express.js.',
  //   techStack: ['SocketIO', 'ExpressJS'],
  // },
  // {
  //   name: 'Project 8',
  //   image: project1,
  //   description: 'A portfolio website built with HTML, CSS, and JavaScript.',
  //   techStack: ['HTML', 'CSS', 'JavaScript'],
  // },
  // {
  //   name: 'Project 9',
  //   image: project1,
  //   description: 'A weather forecasting app built with React and OpenWeather API.',
  //   techStack: ['React', 'OpenWeatherAPI'],
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-30 bg-[#010408]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-15">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#161b22] p-6 rounded-lg shadow-md border-2 border-transparent hover:border-[#39FF14] hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center mt-4">
                {project.techStack.map((tech, i) => (
                  <div key={i} className="flex items-center space-x-2 bg-[#222831] px-3 py-1 rounded-lg m-1">
                    <img src={techStacks[tech]} alt={tech} className="w-6 h-6" />
                    <span className="text-white text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;