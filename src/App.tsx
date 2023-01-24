import { useCallback, useState } from "react";
import "./App.css";

interface Faq {
  question: string;
  answer: string;
}

const FAQ: Faq[] = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
  },
];

const Accordion = ({
  idx,
  content,
  isActive,
  handleToggleDisplay,
}: {
  idx: number;
  content: Faq;
  isActive: boolean;
  handleToggleDisplay: (idx: number) => void;
}) => {
  return (
    <section>
      <h2 onClick={() => handleToggleDisplay(idx)}>
        {content.question} <span>{isActive ? "|" : "->"}</span>{" "}
      </h2>
      {isActive && <p>{content.answer}</p>}
    </section>
  );
};

const FAQComponent = ({ questions }: { questions: Faq[] }) => {
  // Create this component

  const [activeAccordionIdx, setActiveAccordionIdx] = useState<number | null>(
    0
  );
  const handleToggleDisplay = useCallback(
    (qsIdx: number) => {
      setActiveAccordionIdx(activeAccordionIdx === qsIdx ? null : qsIdx);
    },
    [activeAccordionIdx]
  );

  return (
    <>
      {questions.map((qs, qsIdx) => (
        <Accordion
          idx={qsIdx}
          content={qs}
          isActive={
            activeAccordionIdx !== null ? qsIdx === activeAccordionIdx : false
          }
          handleToggleDisplay={handleToggleDisplay}
        />
      ))}
    </>
  );
};

const App = () => {
  return <FAQComponent questions={FAQ} />;
};

export default App;
