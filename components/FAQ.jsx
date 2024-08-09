"use client";

import { useState } from "react";
import { GoPlus } from "react-icons/go";

import { faq } from "@/utils/constants";
import Container from "./Container";

export default function FAQ() {
  const [questions, setQuestions] = useState(faq);

  return (
    <Container size={"md"} className="py-6">
      <div className=" text-center pb-16">
        <p className="text-4xl font-semibold tracking-tighter ">FAQs</p>
        <p className="mt-2 text-base text-gray-300 font-medium opacity-80">
          Answers to commonly asked questions about our platform
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-2 ">
        {questions.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2"
            onClick={() => {
              setQuestions(
                questions.map((q) =>
                  q.question === item.question
                    ? { ...q, isOpen: !q.isOpen }
                    : { ...q, isOpen: false },
                ),
              );
            }}
          >
            <h3 className="flex items-start justify-between text-lg font-bold p-4 py-6 bg-[#242323] text-white border-none rounded-xl">
              {item.question}
              <button
                className={`w-8 h-8 flex items-center justify-center transition-all ${
                  item.isOpen && "rotate-45"
                }`}
              >
                <GoPlus size={28} />
              </button>
            </h3>
            {item.isOpen && (
              <p className=" p-4 py-6 border bg-[#daf7a6] text-[#0b0c09] rounded-xl">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
