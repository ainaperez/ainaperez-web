type NavItemProps = {
    linkName : string
}

const NavItem = ( props : NavItemProps ) => {
    return (
        <li className="navItem"><a className="navItemA" href="#{props.linkName}">{props.linkName}</a></li>
    )
}

export default NavItem;