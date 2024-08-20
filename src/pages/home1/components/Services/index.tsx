import { useEffect, useRef, useState } from "react";
import { Box } from "~/components/Box";
import { Typography } from "~/components/Typography";
import Animation1 from "/Animation1.png";
import Animation2 from "/Animation2.png";
import Animation3 from "/Animation3.png";

const Service = () => {
    const boxContainerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [textEffect, setTextEffect] = useState(false);

    const handleScroll = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.intersectionRatio >= 0.7) {
                setIsVisible(true);
            }
            if (entry.intersectionRatio >= 0.15) setTextEffect(true);
        });
    };

    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(
            handleScroll,
            {
                root: null,
                rootMargin: "0px",
                threshold: [0.2, 0.7, 0.8],
            }
        );

        if (boxContainerRef?.current) {
            observer.observe(boxContainerRef.current);
        }

        return () => {
            if (boxContainerRef.current)
                observer.unobserve(boxContainerRef.current);
        };
    }, []);
    const cardItemClass = isVisible
        ? "serviceCardItem dflex justifyCenter directionColumn animate"
        : "serviceCardItem dflex justifyCenter directionColumn";

    const textClass = textEffect ? "fadeEffect animate" : "fadeEffect";
    return (
        <Box className="serviceWrap" ref={boxContainerRef}>
            <Box className="serviceInfo dflex directionColumn">
                <Typography
                    variant="text"
                    color="subtitle"
                    className={textClass}
                >
                    Main Servicecs
                </Typography>
                <Box className={`serviceInfoTitle ${textClass}`}>
                    <Typography variant="title" color="primary" size="lg">
                        Learn services to focus on your beauty
                    </Typography>
                </Box>
                <Typography
                    variant="text"
                    color="secondary"
                    className={`serviceInfoSubtitle ${textClass}`}
                >
                    {`Porta rhoncus orci condimentum vitae lobortis eu dignissim
                    non massa. Non parturient amet, feugiat tellus sagittis,
                    scelerisque eget nulla turpis.`}
                </Typography>
            </Box>
            <Box className="serviceCard dflex justifyCenter">
                <Box className={cardItemClass}>
                    <Box className="serviceCardItemImg">
                        <img
                            src={Animation1}
                            width={"100%"}
                            height={"100%"}
                            alt="img"
                        />
                    </Box>
                    <Typography
                        variant="title"
                        color="primary"
                        size="md"
                        className="serviceCardTitle"
                    >
                        Beauty consultation
                    </Typography>
                    <Typography
                        variant="text"
                        color="secondary"
                        className="textAlignCenter subtitlex"
                    >
                        Non parturient amet, feugiat tellus sagittis,
                        scelerisque eget nulla turpis.
                    </Typography>
                </Box>
                <Box className={cardItemClass}>
                    <Box>
                        <img
                            src={Animation2}
                            width={"100%"}
                            height={"100%"}
                            alt="img"
                        />
                    </Box>
                    <Typography
                        variant="title"
                        color="primary"
                        size="md"
                        className="serviceCardTitle"
                    >
                        Skin treatments
                    </Typography>
                    <Typography
                        variant="text"
                        color="secondary"
                        className="textAlignCenter  subtitlex"
                    >
                        Non parturient amet, feugiat tellus sagittis,
                        scelerisque eget nulla turpis.
                    </Typography>
                </Box>
                <Box className={cardItemClass}>
                    <Box>
                        <img
                            src={Animation3}
                            width={"100%"}
                            height={"100%"}
                            alt="img"
                        />
                    </Box>
                    <Typography
                        variant="title"
                        color="primary"
                        size="md"
                        className="serviceCardTitle"
                    >
                        Beauty product
                    </Typography>
                    <Typography
                        variant="text"
                        color="secondary"
                        className="textAlignCenter  subtitlex"
                    >
                        Non parturient amet, feugiat tellus sagittis,
                        scelerisque eget nulla turpis.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Service;
