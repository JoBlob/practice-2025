import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";

type NavigationProps = {
  navigationItems: Array<NavItem>;
};

export type NavItem = {
  title: string;
  href?: string;
  description: string;
  subItems?: Array<SubItem>;
};

type SubItem = {
  title: string;
  href: string;
};

export const NavMenu = ({ navigationItems }: NavigationProps) => {
  return (
    <NavigationMenu className="flex justify-start items-start">
      <NavigationMenuList className="flex justify-start gap-4 flex-row">
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.href ? (
              <>
                <NavigationMenuLink>
                  <Button variant="ghost">{item.title}</Button>
                </NavigationMenuLink>
              </>
            ) : (
              <>
                <NavigationMenuTrigger className="font-medium text-sm">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!w-[350px] p-4 mr-3">
                  <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex flex-col">
                        <p className="text-base">{item.title}</p>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                      <Button size="sm" className="mt-10">
                        Book a call today
                      </Button>
                    </div>
                    <div className="flex flex-col text-sm h-full justify-end">
                      {item.subItems?.map((subItem) => (
                        <NavigationMenuLink
                          href={subItem.href}
                          key={subItem.title}
                          className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                        >
                          <span>{subItem.title}</span>
                          <MoveRight className="w-4 h-4 text-muted-foreground" />
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
