import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { Bookmark, Clock } from "lucide-react";
import { split } from "postcss/lib/list";
import { Link } from "react-router-dom";

export default function CategoryCard({ data, onClick }) {
  const getTime = (minute) => {
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);

    const time = day || hour || minute;
    const unitIndex = [day, hour, minute].lastIndexOf(time);
    const timeUnit = ["day", "hours", "minutes"][unitIndex];

    return {
      time,
      timeUnit,
    };
  };

  const separateStringId = (id) => {
    const splitId = id.split("_");
    return splitId[1];
  };

  return (
    <Card
      className={`w-full h-fit overflow-hidden font-jost transition-all delay-200`}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none bg-cover bg-center bg-no-repeat w-full"
      >
        {data ? (
          <img
            src={data.image}
            alt=""
            className="w-full relative top-0 object-cover object-center"
          />
        ) : (
          <img
            src="img/placeholders.png"
            alt=""
            className="w-full object-cover"
          />
        )}
      </CardHeader>
      <CardBody className="h-[100px]">
        <Link
          to={`/recipe/${separateStringId(data && data.uri)}`}
          className="text-lg text-black font-bold font-serif"
        >
          {data && data.label}
        </Link>
      </CardBody>
      <CardFooter className="flex justify-between items-center">
        <div className="flex gap-2">
          <Clock />
          <span className="font-jost">
            {(data && getTime(data.totalTime).time) || "<1"}{" "}
            {getTime(data.totalTime).timeUnit}
          </span>
        </div>
        <Button size="sm">
          <Bookmark />
        </Button>
      </CardFooter>
    </Card>
  );
}
