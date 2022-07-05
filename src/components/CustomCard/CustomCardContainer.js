import { Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CustomCard from "./CustomCard";

const CustomCardContainer = () => {

    const [info,setInfo] = useState({
        title:'Your Title',
        year:'2022',
        type:'undefined'
    })

    const changeTitleHandler = (e) => {
        setInfo({...info, title: (e.target.value)})
    }

    const changeYearHandler = (e) => {
        setInfo({...info, year: (e.target.value)})
    }
    const changeTypeHandler = (e) => {
        setInfo({...info, type: (e.target.value)})
    }
    
    

    return (
        <>
            <VStack spacing='40px' marginBottom='50px'>
                <Heading color='white'>Create Custom 💡</Heading>
                <CustomCard title={info.title} year={info.year} type={info.type} />

                <VStack color='white'>
                    <Input onChange={(e)=>changeTitleHandler(e)} placeholder="Insert title here..." w='200px' h='20px' />
                    <Input onChange={(e)=>changeYearHandler(e)} placeholder="Insert year here..." w='200px' h='20px' />
                    <Input onChange={(e)=>changeTypeHandler(e)} placeholder="Insert type here..." w='200px' h='20px' />
                </VStack>
            </VStack>
        </>
    )

}

export default CustomCardContainer;