interface NavLink {
  title: string;
  path: string;
}
// path only lowercase!!!
const navLinks: NavLink[] = [
  { title: "My Projects", path: "/my-projects" },
  { title: "About Me", path: "/about-me" },
  { title: "News", path: "/news" },
  { title: "Contact", path: "/contact" },
];
// path only lowercase!!!

export default navLinks;
