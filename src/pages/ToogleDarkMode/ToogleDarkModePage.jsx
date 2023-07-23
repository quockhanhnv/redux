import Card from "../../components/Card";
import ToogleDarkMode from "../../components/ToogleDarkMode";

const ToogleDarkModePage = () => {
  return (
    <div className="p-4">
      <ToogleDarkMode></ToogleDarkMode>
      <div className="flex justify-center items-center pt-5">
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default ToogleDarkModePage;
