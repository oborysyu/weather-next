"use client";

import useCityStore from "@/hooks/useCityStore";
import useFetch from "@/hooks/useFetch";
import useWindowSize from "@/hooks/useWindowSize";
import { Center, Container, HStack, Spinner, Text } from "@chakra-ui/react";
import { useShallow } from "zustand/react/shallow";
import CityForm from "./CityForm";
import MainWeatherPanel from "./MainWeatherPanel";


function MainContainer() {
    const { city } = useCityStore(
        useShallow((state) => ({ city: state.city })),
    );
    const { data, loading, error } = useFetch(city);
    const { width } = useWindowSize();

    if (error) {
        console.log(error)
    }

    return (
        <Container maxWidth='100%'>
            <Container>
                <Center>
                    <CityForm />
                </Center>
                <Center>
                    {loading && <Spinner size='xl' />}
                </Center>
            </Container>
            {!error && data ?
                (<Container maxWidth='100%'>
                    <Center>
                        <Text fontSize='xl'>Weather in {city}</Text>
                        <br />
                    </Center>
                    <HStack h='fit-content' alignItems='flex-start' justifyContent="center">
                        {width > 1024 ? (
                            <>
                                {data?.full.map((el, index) => <MainWeatherPanel {...el} key={index} />)}
                            </>
                        ) : (
                            (width < 1023 && width > 600) ?
                                <>
                                    {data?.short.map((el, index) => <MainWeatherPanel {...el} key={index} />)}
                                </>
                                :
                                (<MainWeatherPanel {...data?.current} />)
                        )
                        }
                    </HStack>
                </Container>) : (<Center><Text color={"red"}>{error}</Text></Center>)}
        </Container>
    );
}

export default MainContainer;