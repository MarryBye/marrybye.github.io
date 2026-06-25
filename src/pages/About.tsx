import { Link } from "react-router";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export const AboutPage = () => {
    return (
        <div>
            <NavigationMenu>

                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink><Link to="/">Home</Link></NavigationMenuLink>
                            <NavigationMenuLink><Link to="/">Allo</Link></NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link to="/about">About</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <p>Hello, About!</p>
        </div>
    )
}