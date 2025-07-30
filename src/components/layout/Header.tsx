import { AlignJustify, X } from "lucide-react";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import { useState } from "react";

const navigations = [
  {
    label: 'Home',
    value: '#'
  },
  {
    label: 'Skills',
    value: '#skills'
  },
  {
    label: 'Projects',
    value: '#projects'
  },
  {
    label: 'Contact',
    value: '#contact'
  },
];

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center p-4 w-full fixed top-0 left-0 bg-white dark:bg-dark z-50 shadow">
      <AlignJustify className="block sm:hidden dark:text-white" onClick={() => setIsShowMenu(true)} />
      <ul className={`fixed h-dvh sm:h-auto sm:relative pl-10 pr-28 py-4 sm:p-0 shadow sm:shadow-none top-0 ${isShowMenu ? 'left-0' : '-left-full'} sm:left-0 bg-white dark:bg-highlight dark:sm:bg-transparent sm:bg-transparent flex-col sm:flex-row flex gap-10 sm:items-center transition-all`}>
        {navigations.map((item, index) => (
          <li key={index}>
            <a href={item.value} className="font-medium transition-all hover:text-highlight text-lg dark:text-white" onClick={() => setIsShowMenu(false)}>{item.label}</a>
          </li>
        ))}
        <li className="absolute right-4 top-4 sm:hidden">
          <X className="text-black dark:text-white" onClick={() => setIsShowMenu(false)} />
        </li>
      </ul>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
