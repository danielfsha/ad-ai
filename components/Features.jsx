import { features } from "@/utils/constants";
import Container from "./Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./Card";

import { FaCheckSquare } from "react-icons/fa";

export default function Features() {
  return (
    <Container size="md">
      <div className=" text-center py-16">
        <p className="text-4xl font-semibold tracking-tighter ">Features</p>
        <p className="mt-2 text-base text-gray-300 font-medium opacity-80">
          Ad ai gives you the power to create your own brand with ease
        </p>
      </div>

      <div className="flex flex-col  items-center justify-between space-y-2 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-2">
        {features.map((item, index) => (
          <Card
            key={index}
            className="flex-1 flex flex-col space-y-2 space-x-0 lg:space-y-0 lg:space-x-2"
          >
            <CardHeader>
              <CardTitle className="text-center">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {item.list.map((list, index) => (
                <CardDescription
                  className="space-x-3 flex items-center"
                  key={index}
                >
                  <FaCheckSquare />

                  <span>{list}</span>
                </CardDescription>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
