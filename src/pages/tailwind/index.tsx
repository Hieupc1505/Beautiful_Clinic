import "./assets/common.css";
import CommonCpn from "./components/common";
import Button from "~/pages/tailwind/components/Button";
import Form from "./components/Form";
import Container from "./components/Container";

const TailwindPage = () => {
    return (
        <>
            <CommonCpn />;
            <Button />
            <Form />
            <Container />
        </>
    );
};

export default TailwindPage;
