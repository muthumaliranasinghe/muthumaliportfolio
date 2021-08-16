import {v4 as uuidV} from "uuid"

export const skills = [
    {
        id: uuidV(),
        title: "Tools",
        desc1: "Docker",
        desc2: "GitHub",
        desc3: "Visual Studio Code",
        desc4: "Sublime Text",
        desc5: "NPM",
        desc6: "WebStorm",
        image: "./images/tools.png"
    },

    {
        id: uuidV(),
        title: "Front End",
        desc1: "HTML",
        desc2: "CSS",
        desc3: "JavaScript",
        desc4: "Angular",
        desc5: "React",
        desc6: "JSON",
        image: "./images/frontend.png"
    },

    {
        id: uuidV(),
        title: "back End",
        desc1: "PHP",
        desc2: "C++",
        desc3: "Java",
        desc4: "Python",
        desc5: "Node.JS",
        desc6: "SQL",
        image: "./images/backend.png"
    }

    
]