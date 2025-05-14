import { useDispatch, useSelector } from "react-redux";
import { toggleAccordion } from "../fetures/accordionSlice";
import { ChevronDown, ChevronUp } from "lucide-react"; // Optional icon package

const data = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "What is Redux?",
    content: "Redux is a predictable state container for JavaScript apps.",
  },
  {
    title: "What is Tailwind CSS?",
    content: "Tailwind CSS is a utility-first CSS framework.",
  },
];
const Accordion = () => {
  const dispatch = useDispatch();
  const openAccordion = useSelector((state) => state.accordion.openAccordion);

  const handleToggle = (index) => {
    dispatch(toggleAccordion(index));
  };
  return (
    <>
      <div className="max-w-xl mx-auto mt-10 space-y-4">
        {data.map((item, index) => {
          const isOpen = openAccordion.includes(index);
          return (
            <div
              key={index}
              className="border border-gray-500 rounded-2xl shadow-md overflow-hidden transition-all"
            >
              {/* Header */}
              <div
                className="flex justify-between items-center bg-gradient-to-r from-blue-100 to-blue-50 px-6 py-4 cursor-pointer hover:from-blue-200 transition-colors"
                onClick={() => handleToggle(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <span className="transition-transform duration-300">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-700" />
                  )}
                </span>
              </div>

              {/* Body */}
              <div
                className={`bg-white px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-60 py-4" : "max-h-0"
                }`}
              >
                <div className={`text-gray-700 ${isOpen ? "block" : "hidden"}`}>
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Accordion;
