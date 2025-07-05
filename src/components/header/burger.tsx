import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, MoveRight, X } from "lucide-react";
import type { NavItem } from "./navigation";
import { Link } from "react-router";

type BurgerProps = {
  navigationItems: Array<NavItem>;
};

export const Burger = ({ navigationItems }: BurgerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>
      {isOpen && (
        <div className="absolute top-50 right-40 border-t flex flex-col w-full  bg-background shadow-lg py-4 container gap-8">
          {navigationItems.map((item) => (
            <div key={item.title}>
              <div className="flex flex-col gap-2">
                {item.href ? (
                  <Link
                    to={item.href}
                    className="flex justify-between items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg">{item.title}</span>
                    <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                  </Link>
                ) : (
                  <p className="text-lg">{item.title}</p>
                )}
                {item.subItems &&
                  item.subItems.map((subItem) => (
                    <Link
                      key={subItem.title}
                      to={subItem.href}
                      className="flex justify-between items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-muted-foreground">
                        {subItem.title}
                      </span>
                      <MoveRight className="w-4 h-4 stroke-1" />
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
