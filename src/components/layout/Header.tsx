import Logo from '@/assets/logo.png';
import { ThemeSwitcher } from "../ui/ThemeSwitcher";

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
  return (
    <div className="flex justify-between items-center py-2 px-4 sticky top-0 left-0 bg-white dark:bg-dark z-50 shadow">
      <img src={Logo} alt="Logo" width={50} height={50} className="rounded-full"/>
      <ul className="flex gap-10 items-center">
        {navigations.map((item, index) => (
          <li key={index}>
            <a href={item.value} className="font-medium transition-all hover:text-highlight text-lg dark:text-white">{item.label}</a>
          </li>
        ))}
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </div>
  );
};

export default Header;
