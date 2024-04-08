import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Close Dropdown
    setIsOpen(false);
    // What option we selected
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  //   let content = "Select...";
  //   if (selection) {
  //     content = selection.label;
  //   }

  // This same expresion can be written as {selection?.label || "...Select"} which means if selection is true eg:re than label else ...Select

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor pointer"
        onClick={handleClick}
      >
        {value?.label || "...Select"}
        <GoChevronDown className="text-lg" />
      </Panel>
      {/* <div onClick={content}</div> */}
      {isOpen && (
        <Panel className="absolute top-full ">{renderedOptions}</Panel>
      )}
    </div>
  );
}

export default Dropdown;
