import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleExpanded = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // if (index === expandedIndex) {
    //   console.log("expanded");
    // } else {
    //   console.log("collapsed");
    // }

    // Conditional Rendering
    // const content = isExpanded && <div>{item.content}</div>;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        {/* Inline HAndle Click */}
        {/* <div onClick={() => setExpandedIndex(index)}>{item.label}</div> */}
        {/* <div onClick={handleExpanded}>{item.label}</div> */}
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleExpanded(index)}
        >
          {item.label}
          {icon}
        </div>
        {/* {content} */}
        {isExpanded && <div className="border-p p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
