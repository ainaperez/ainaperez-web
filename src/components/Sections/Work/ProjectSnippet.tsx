type ProjectSnippetProps = {
    projectLink : string, 
    projectTitle : string, 
    projectImage : string
    projectClass : string
}

const ProjectSnippet = (props : ProjectSnippetProps) => {
    return (
        <a className={`projectSnippetLink ${props.projectClass}`} href={props.projectLink}>
            <div 
                className="projectSnippet" 
                style={{ backgroundImage: `url(${props.projectImage})` }}>
                {/* <div className="imageOverlay">
                    <h3>{props.projectTitle}</h3>
                </div> */}
            </div>
        </a>
    )
}

export default ProjectSnippet;