import { Card, CardBody, Flex, Container } from "@chakra-ui/react";
import moment from "moment";
import Image from "next/image";
import { memo } from "react";

type Props = {
    city: string,
    time: string,
    icon: string,
    temperature: string,
    humidity: string,
    wind: string
}

const MainWeatherPanel = memo(function MainWeatherPanel(props: Props) {
    return (
        <Card>
            <CardBody>
                <Flex flexDirection={"row"} justifyContent={"center"}>
                 <Image
                    alt=""
                    width={64}
                    height={64}
                    src={
                        props.icon
                            ? `../assets/${props.icon}.svg`
                            : "../assets/01d.svg"
                    }
                />
                <Container>
                    {moment(props.time).format("dddd, MMMM D YYYY, HH:mm")}
                    <br />
                    Temperature: {props.temperature} С°
                    <br />
                    Humidity: {props.humidity} %<br />
                    Wind speed: {props.wind} m/sec
                </Container>
            </Flex>
        </CardBody>
        </Card >
    );
})

export default MainWeatherPanel;