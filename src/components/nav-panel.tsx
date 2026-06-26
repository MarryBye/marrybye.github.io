import {Link} from "react-router";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export const NavPanel = () => {
    const navPanelMapping = [
        {
            "type": "link",
            "to": "/",
            "title": "Home",
        },
        {
            "type": "dropdown",
            "trigger": "About",
            "links": [
                {"to": "/experience", "title": "Experience"},
                {"to": "/graduate", "title": "Graduate"},
                {"to": "/career", "title": "Career"},
            ]
        },
        {
            "type": "link",
            "to": "/projects",
            "title": "Projects"
        },
        {
            "type": "link",
            "to": "/contact",
            "title": "Contact"
        }
    ]

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {
                    navPanelMapping.map((n, index) => {
                        return (
                            <NavigationMenuItem key={`${n.type}-${index}`}>
                                {
                                    n.type === "dropdown" ? (
                                        <>
                                            <NavigationMenuTrigger>
                                                {n.trigger}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                {
                                                    n.links.map((l, index) => {
                                                        return (
                                                            <NavigationMenuLink key={`${l.to}-${l.title}-${index}`} asChild>
                                                                <Link to={l.to}>{l.title}</Link>
                                                            </NavigationMenuLink>
                                                        )
                                                    })
                                                }
                                            </NavigationMenuContent>
                                        </>
                                    ) : n.type === "link" ? (
                                        <NavigationMenuLink asChild>
                                            <Link to={n.to}>{n.title}</Link>
                                        </NavigationMenuLink>
                                    ) : null
                                }
                            </NavigationMenuItem>
                        )
                    })
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}