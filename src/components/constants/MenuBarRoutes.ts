import { Icon } from "../utils/Icons";

interface MenuProps {
  label: string;
  href: string;
  icon?: React.ElementType;
}

export const MenuItems: MenuProps[] = [
  {
    label: "Home",
    href: "/",
    icon: Icon.Home
  },
  {
    label: "About",
    href: "/about",
    icon: Icon.About
  },
  {
    label: "Gallery",
    href: "/gallery",
    icon: Icon.Gallery
  },
  {
    label: "Blog",
    href: "/blog",
    icon: Icon.Blog
  },
  {
    label: "Register",
    href: "/signin",
    icon: Icon.Registration
  },
];
