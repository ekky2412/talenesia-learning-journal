import { useState, useEffect } from "react";
import {
    Stack,
    Text,
    Box,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Checkbox,
    Textarea,
    Flex
} from "@chakra-ui/react";

const Section1 = ({ onSectionDataChange }) => {
    const [data, setData] = useState([
        { noTugas: 1, Task: "Tugas 1 - belajar cara belajar", sedangDikerjakan: false, sudahDikumpulkan: false, masukan: '' },
        { noTugas: 2, Task: "Tugas 2 - belajar cara belajar", sedangDikerjakan: false, sudahDikumpulkan: false, masukan: '' },
    ]);

    const handleCheckboxChange = (tugasId, type) => {
        setData((prevData) =>
            prevData.map((Task, index) => {
                const updateTugas = index === tugasId ? { ...Task, [type]: !Task[type] } : Task;
                if (type === "sedangDikerjakan" && updateTugas[type]) {
                    return { ...updateTugas, sudahDikumpulkan: false };
                } else if (type === "sudahDikumpulkan" && updateTugas[type]) {
                    return { ...updateTugas, sedangDikerjakan: false };
                }
                return updateTugas;
            })
        );
    };

    const handleTextAreaChange = (tugasId, value) => {
        setData((prevData) =>
            prevData.map((Task, index) =>
                index === tugasId ? { ...Task, masukan: value } : Task
            )
        );
    };

    useEffect(() => {
        onSectionDataChange(data);
    }, [data, onSectionDataChange]);




    return (
        <Stack
            minH={"70vh"}
            direction={{ base: "column", md: "column" }}
            alignItems={"center"}
            justify={"center"}
            gap={10}
        >
            <Text fontSize="25px" maxW="70vw" whiteSpace="wrap">
                Memantau Tugas di Tema 2
            </Text>
            <Box overflowX="auto">
                <Table variant="simple" width={"70vw"} minHeight={"30vh"}>
                    <Thead>
                        <Tr height={20}>
                            <Th bg="teal.100"></Th>
                            <Th bg="teal.300" fontSize={"15px"} textAlign={"center"}>
                                Sedang Dikerjakan
                            </Th>
                            <Th bg="teal.300" fontSize={"15px"} textAlign={"center"}>
                                Sudah Dikumpulkan
                            </Th>
                            <Th bg="teal.300" fontSize={"15px"} textAlign={"center"}>
                                Masukan dari mentor/fasilitator/teman
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((Task, index) => (
                            <Tr key={index}>
                                <Th
                                    bg="teal.500"
                                    fontSize={"15px"}
                                    textAlign={"center"}
                                    color="white"
                                >
                                    {Task.Task}
                                </Th>
                                <Td>
                                    <Flex
                                        align="center"
                                        justify="center"
                                        height="100%"
                                    >
                                        <Checkbox
                                            size="lg"
                                            colorScheme="red"
                                            borderColor="teal.400"
                                            isChecked={Task.sedangDikerjakan}
                                            onChange={() => handleCheckboxChange(index, "sedangDikerjakan")}
                                        />
                                    </Flex>
                                </Td>
                                <Td>
                                    <Flex
                                        align="center"
                                        justify="center"
                                        height="100%"
                                    >
                                        <Checkbox
                                            size="lg"
                                            colorScheme="red"
                                            borderColor="teal.400"
                                            isChecked={Task.sudahDikumpulkan}
                                            onChange={() => handleCheckboxChange(index, "sudahDikumpulkan")}
                                        />
                                    </Flex>
                                </Td>
                                <Td>
                                    <Textarea
                                        value={Task.masukan}
                                        onChange={(e) => handleTextAreaChange(index, e.target.value)}
                                        placeholder="Tulis Di Sini"
                                        size="sm"
                                        borderWidth={3}
                                        borderRadius={20}
                                        borderColor="teal.400"
                                        boxShadow="md"
                                    />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Stack>
    );
};

export default Section1;
