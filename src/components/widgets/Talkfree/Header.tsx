import { useWidgetData } from "./context";

const Header = () => {
  const { name } = useWidgetData();
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Header;
