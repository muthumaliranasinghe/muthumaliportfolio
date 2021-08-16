import {useState} from "react"
import { skills } from "../data/Skill"
const Skills = ()=>{
    // Projects Display State
    const [bo, setBo] = useState(skills)
return(
        <>
            <section className="skills-page">
                <h1>My Skills</h1>
                <div className="bo">
                    {
                        bo.map((dbox) => {
                            const {id, title, desc1,desc2,desc3,desc4,desc5,desc6, image} = dbox
                            console.log(image)
                            return (
                                <div className="dbx" key={id}>
                                    <img src={image} alt={title} />
                                    <h4>{title}</h4>
                                    <p>{desc1}</p>
                                    <p>{desc2}</p>
                                    <p>{desc3}</p>
                                    <p>{desc4}</p>
                                    <p>{desc5}</p>
                                    <p>{desc6}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )

}

export default Skills