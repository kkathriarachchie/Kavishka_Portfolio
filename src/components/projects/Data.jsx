import Project1 from "../../assets/Project_ReviewBar.webp";
import Project2 from "../../assets/Project_HiveLink.webp";
import Project3 from "../../assets/Project_GPA.webp";
import Project4 from "../../assets/Project_Inventory-Management-System.webp";


export const projectsData = [
    {
        id: 1,
        image: Project1,
        title: "ReviewBar",
        category: "A",
        description : "Led the development of ReviewBar, an innovative Augmented Product Review App, addressing the challenge of accessing real-time product reviews in physical retail settings. Utilized agile methodologies and MEVN stack for efficient and dynamic application development, enhancing consumer decision-making in a tech-driven retail landscape.",
        stack: "MongoDB | Express | Vue.js | Node.js ",
        plink:"",
    },
    {
        id: 2,
        image: Project2,
        title: "HiveLink",
        category: "B",
        description : "Led the development of this voice-enabled smart office-room project, seamlessly integrating with existing wall switch panels to revolutionize how we interact with electronics. Elevate productivity and efficiency with intuitive voice commands, showcasing the transformative power of collaboration.",
        stack: "Arduino | Android ",
        plink:"",

    },
    {
        id: 3,
        image: Project3,
        title: "GPA Calculator",
        category: "C",
        description : "This web application is designed to help students easily calculate their GPA without a hassle. With just a few clicks, students\n" +
            "can get their GPA instantly.",
        stack: "HTML | CSS | Javascript | Firebase",
        plink:"",

    },
    {
        id: 4,
        image: Project4,
        title: "Inventory Management System",
        category: "D",
        description : "D4",
        stack: "C# | .net framework | SQL",
        plink:"",

    },
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "A",
    },
    {
        name: "B",
    },
    {
        name: "C",
    },
];