type SectionProps = {
    title: string, 
    children: React.ReactNode
}

const Section = (props : SectionProps) => {
    return (
        <section className="section">
            {props.children}
        </section>       
    )
}

export default Section; 