import ProjectSnippet from "./ProjectSnippet";
import SafeHelpImage from "../../../assets/projectsImg/safe-help.png";
import VeggieBerlinImage from "../../../assets/projectsImg/veggie-berlin.png";
import FormulaImage from "../../../assets/projectsImg/formula1-viewer.png";

const Work = () => {

    
    return (
        <div className="workWrapper">
        <div className="projectsGrid">
            <p className="gridCell_2_1 projectTitle">SafeHelp</p>
            <ProjectSnippet 
            projectTitle="SafeHelp"
            projectImage={SafeHelpImage}
            projectLink="#"
            projectClass="gridCell_3_1"
            />
            <p className="gridCell_2_2 projectTitle">VeggieBerlin</p>
            <ProjectSnippet 
            projectTitle="VeggieBerlin"
            projectImage={VeggieBerlinImage}
            projectLink="#"
            projectClass="gridCell_1_2"
            />
            <p className="gridCell_2_3 projectTitle">Formula One Viewer</p>
             <ProjectSnippet 
            projectTitle="Formula One Viewer"
            projectImage={FormulaImage}
            projectLink="#"
            projectClass="gridCell_3_3"
            />
        </div>
        </div>
    )
}

export default Work;