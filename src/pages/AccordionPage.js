import Accordion from "./components/Accordion";

function AccordionPage() {
  const item = [
    {
      id: "hg5dh",
      label: "Can i use react on a project?",
      content:
        "You can use react on any projectyou want.you can use react on any project you want.you can use react on any projectyou want.you can use react on any projectyou want.you can use react on any projectyou want.",
    },
    {
      id: "hdg5hsh56",
      label: "Can i use JavasCript on a project?",
      content:
        "You can use Javascript on any projectyou want.you can use react on any project you want.you can use react on any projectyou want.you can use react on any projectyou want.you can use react on any projectyou want.",
    },
    {
      id: "bdg5jdh5",
      label: "Can i use Css on a project?",
      content:
        "You can use Css on any project you want.you can use react on any project you want.you can use react on any projectyou want.you can use react on any projectyou want.you can use react on any projectyou want.",
    },
  ];
  return <Accordion items={item} />;
}

export default AccordionPage;
