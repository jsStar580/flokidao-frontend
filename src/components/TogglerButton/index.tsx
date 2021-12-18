import { Button } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";

export default function ToggleButton() {
    return (
        <>
            <Button size="md" colorScheme="blue" variant="solid" bgColor="#5c82a547"><FaMoon /></Button>
        </>
    );
}