import { GoCheck, GoCheckCircleFill } from "react-icons/go";
import Container from "./Container";

export default function Features() {
  return (
    <Container size={"md"}>
      <div className="py-32">
        <div className="flex flex-col items-center justify-between space-x-2 lg:flex-row mt-4">
          {[1, 2].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between text-lg font-bold p-4 py-6 border bg-[#242323] text-white border-none rounded-xl flex-1"
            >
              <p className="text-3xl font-semibold">Other AIs</p>
              <p className="mt-2 text-base text-gray-300 font-medium opacity-80">
                Answers to commonly asked questions about our platform
              </p>
              <div className="flex flex-col justify-start space-y-4 mt-12 font-medium">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <p
                    key={index}
                    className="flex items-center justify-start space-x-4 opacity-80"
                  >
                    <GoCheckCircleFill />
                    <span>Lorem ipsum dolor sit amet</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
