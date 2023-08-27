import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    mongodb,
    csharp,
    fsharp,
    sql,
    aws,
    Veridos,
    Apogee,
    CodeDream,
    Nucamp,
    portfolio,
    codewithme,
    spark,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Full Stack Engineer",
        icon: backend,
    },
    {
        title: "AWS Could Practitioner",
        icon: creator,
    },
];

const technologies = [
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "F#",
        icon: fsharp,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
];

const experiences = [
    {
        title: "FullStack Software Developer",
        company_name: "Veridos",
        icon: Veridos,
        iconBg: "#383E56",
        date: "October 2022 - Present",
        points: [
            "Played a pivotal role in the development and maintenance of scalable APIs and applications in AWS VPC, serving a diverse clientele and ensuring uptime.",
            "Worked in synergy with QA, front-end, and back-end teams, aiding in the assurance of software quality and adherence to industry standards.",
            "Assisted in optimizing cloud resource utilization, contributing to efficient and reliable system operations.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Apogee Solutions",
        icon: Apogee,
        iconBg: "#E6DEDD",
        date: "Jun 2022 - Oct 2022",
        points: [
            "Supported the creation of mobile applications and Interactive Multimedia Instructional (IMI) products in close collaboration with Government stakeholders.",
            "Aided in the migration of an array of USASSIs courses to Blackboard, leveraging a tech stack that included Vue.js, JavaScript, and SCORM.",
            "Delivered current and relevant training and education products, ensuring a high level of content quality and technical efficiency.",
        ],
    },
    {
        title: "Web Development Mentor",
        company_name: "Code the Dream",
        icon: CodeDream,
        iconBg: "#383E56",
        date: "Apr 2022 - Jul 2022",
        points: [
            "Mentored and guided interns and students in building modern web applications, preparing them for careers in technology and software development.",
            "Facilitated hands-on learning experiences, emphasizing practical problem solving and real-world project scenarios.",
            "Assisted students in debugging and refining their code, enhancing the overall quality of project deliverables.",
        ],
    },
    {
        title: "Web Development Student",
        company_name: "Nucamp Coding Bootcamp",
        icon: Nucamp,
        iconBg: "#E6DEDD",
        date: "Sep 2021 - Mar 2022",
        points: [
            "Engaged in a rigorous 22-week program, acquiring proficiency in Bootstrap, React, React Native, NodeJS, Express, and MongoDB.",
            "Collaborated on 16 projects, applying learned concepts and techniques in a real-world development context.",
            "Consistently demonstrated dedication to mastering new technologies and methodologies, ensuring timely project completions.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Jamar is a very talented developer. He is a great team player and is always willing to help others. He is very knowledgeable and is always willing to learn new things. He is a great asset to any team.",
        name: "",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    }
];

const projects = [
    {
        name: "Portfolio Website",
        description:
            "An interactive showcase built with React, integrating Three.js for 3D animations and styled using the Tailwind CSS framework for modern aesthetics and responsiveness.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        demo_link: "https://devjamarriley.com/",
        source_code_link: "https://github.com/maj39623/Jamar-Portfolio-Website/",
    },
    {
        name: "Spark",
        description:
            "A sleek video game database designed to keep gamers informed about the latest titles, crafted using the RAWG API and enhanced by the interactivity of React, the design versatility of Styled Components, and dynamic animations via Framer Motion.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "framermotion",
                color: "pink-text-gradient",
            },
        ],
        image: spark,
        demo_link: "https://sparkproject.netlify.app/",
        source_code_link: "https://github.com/maj39623/Gamer-Directory",
    },
    {
        name: "Code With Me",
        description:
            "An immersive music player web app tailored to complement coding sessions with the soothing tones of chillhop. Constructed with React, styled with Styled Components, and animated with Framer Motion.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "styledcomponents",
                color: "green-text-gradient",
            },
            {
                name: "framermotion",
                color: "pink-text-gradient",
            },
        ],
        image: codewithme,
        demo_link: "https://codewithmeplayer.netlify.app/",
        source_code_link: "https://github.com/maj39623/Music-Player",
    },
];

export { services, technologies, experiences, testimonials, projects };