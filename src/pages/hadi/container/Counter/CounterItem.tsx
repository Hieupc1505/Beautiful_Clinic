import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
interface CounterProps {
    title: string;
    number: number;
    icon: IconProp;
    run: boolean;
}
const CounterItem: React.FC<CounterProps> = ({ title, number, icon, run }) => {
    const [counter, setCounter] = useState<number>(() => 0);
    useEffect(() => {
        if (run) {
            const intervalId = setInterval(() => {
                setCounter((prevCounter) => {
                    if (prevCounter < number) {
                        return prevCounter + getRandomNumber(10, 50);
                    } else {
                        clearInterval(intervalId); // Dừng interval khi đạt đến giá trị
                        return prevCounter;
                    }
                });
            }, 0); // Thay đổi khoảng thời gian tùy theo nhu cầu

            return () => {
                clearInterval(intervalId); // Dọn dẹp interval khi component unmount hoặc run thay đổi
            };
        }
    }, [run, number]);
    return (
        <div className="flex flex-col relative items-center">
            <div className="rounded-full counter-circle flex items-center justify-center gap-12 flex-col z-40">
                <div className="counter-number">{counter}</div>
                <div className="counter-card-icon">
                    <FontAwesomeIcon icon={icon} className="text-7xl" />
                </div>
            </div>
            <div className="text-white mt-8 font-semibold text-4xl z-40">
                {title}
            </div>
            <div className="counter-bg-under z-10"></div>
        </div>
    );
};
function getRandomNumber(min: number, max: number): number {
    // Kiểm tra tính hợp lệ của min và max
    if (min >= max) {
        throw new Error("Giá trị min phải nhỏ hơn giá trị max.");
    }

    // Sinh số ngẫu nhiên trong khoảng từ min đến max (bao gồm cả min và max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default CounterItem;
