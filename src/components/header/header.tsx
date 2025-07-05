import { NavMenu, type NavItem } from "./navigation";

export const Header = () => {
  const navigationItems: Array<NavItem> = [
    {
      title: "Starwars",
      href: "/",
      description: "",
    },
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      subItems: [
        {
          title: "Reports",
          href: "/reports",
        },
        {
          title: "Statistics",
          href: "/statistics",
        },
        {
          title: "Dashboards",
          href: "/dashboards",
        },
        {
          title: "Recordings",
          href: "/recordings",
        },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      subItems: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Fundraising",
          href: "/fundraising",
        },
        {
          title: "Investors",
          href: "/investors",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
    {
      title: "Home",
      href: "/",
      description: "",
    },
  ];

  return (
    <header className="w-full z-40 sticky top-0 left-0 bg-background px-2 border-b-1 border-grey-500">
      <div className="relative mx-0 w-full min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-2 items-center">
        <div className="flex lg:justify-start">
          <p className="font-semibold">Pratice App</p>
        </div>
        <div className="flex justify-end w-full gap-4">
          <NavMenu navigationItems={navigationItems} />
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          {/* Burger */}
        </div>
      </div>
    </header>
  );
};
