import { GoBell, GoAlert } from "react-icons/go";
import Button from "./components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Just Clicked");
  };
  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}
        >
          <GoBell />
          Me First
        </Button>
      </div>
      <div>
        <Button secondary rounded className="mb-5">
          <GoBell />
          Click Me!!
        </Button>
      </div>
      <div>
        <Button success rounded>
          Okay to me also
        </Button>
      </div>
      <div>
        <Button warning rounded>
          Do me{" "}
        </Button>
      </div>
      <div>
        <Button danger>
          <GoAlert />
          Fine i am last
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
