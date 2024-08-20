import { useEffect, useRef, useState } from "react";
import CounterItem from "./CounterItem";
import {
    faA,
    faBook,
    faSchool,
    faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const Counter = () => {
    const [run, setRun] = useState<boolean>(false);
    // Định nghĩa kiểu cho các ref
    const elementsRef = useRef<HTMLDivElement | null>(null);

    // Hàm xử lý scroll với kiểu IntersectionObserverEntry
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting === true) {
                console.log(entry);
                setRun(true);
            }
        });
    };

    useEffect(() => {
        // Tạo IntersectionObserver với các kiểu chính xác
        const observer = new IntersectionObserver(handleScroll, {
            root: null,
            rootMargin: "0px",
            threshold: 0.2,
        });

        if (elementsRef.current) {
            observer.observe(elementsRef.current);
        }

        return () => {
            if (elementsRef.current) {
                observer.unobserve(elementsRef.current);
            }
        };
    }, []);
    const data = [
        { title: "High School", icon: faSchool, number: 3536 },
        { title: "Award Winner", icon: faTrophy, number: 1406 },
        { title: "Class Completed", icon: faBook, number: 2267 },
        { title: "All Course", icon: faA, number: 5322 },
    ];
    return (
        <section className="bg-thmgrey" ref={elementsRef}>
            <div className="container max-w-screen-xl mx-auto">
                <div className="py-36 pb-44 flex items-center justify-center space-x-44">
                    {data.map(({ title, number, icon }) => (
                        <CounterItem
                            key={uuidv4()}
                            title={title}
                            number={number}
                            icon={icon}
                            run={run}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Counter;
