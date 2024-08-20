import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function AccordionUsage() {
    const [classes, setClass] = React.useState<boolean[]>([
        false,
        false,
        false,
    ]);
    const handleClick = (index: number) => {
        setClass(classes.map((it, idx) => (idx === index ? !it : it)));
    };
    return (
        <div className="max-w-screen-md">
            <Accordion sx={{ margin: "0 !important" }}>
                <AccordionSummary
                    expandIcon={
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={classes[0] ? "!text-white" : "text-thmp"}
                        />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className={
                        classes[0]
                            ? "!bg-primary !text-white"
                            : "text-thmp bg-white"
                    }
                    onClick={() => handleClick(0)}
                >
                    How to Education 25 Years Experience?
                </AccordionSummary>
                <AccordionDetails className="!text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ margin: "0 !important" }}>
                <AccordionSummary
                    expandIcon={
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={
                                classes[1] ? "!text-white" : "!text-thmp"
                            }
                        />
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                    className={
                        classes[1]
                            ? "!bg-primary !text-white"
                            : "text-thmp bg-white"
                    }
                    onClick={() => handleClick(1)}
                >
                    Why to Impotant to Other Science?
                </AccordionSummary>
                <AccordionDetails className="!text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ margin: "0 !important" }}>
                <AccordionSummary
                    expandIcon={
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={
                                classes[2] ? "!text-white" : "!text-thmp"
                            }
                        />
                    }
                    aria-controls="panel3-content"
                    id="panel3-header"
                    className={
                        classes[2]
                            ? "!bg-primary !text-white"
                            : "text-thmp bg-white"
                    }
                    onClick={() => handleClick(2)}
                >
                    How to Learn to Our teacher?
                </AccordionSummary>
                <AccordionDetails className="!text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
