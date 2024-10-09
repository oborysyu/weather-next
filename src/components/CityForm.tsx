"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Center,
} from '@chakra-ui/react'
import useCityStore from '@/hooks/useCityStore';
import { useShallow } from 'zustand/shallow';

function CityForm() {
    const { city } = useCityStore(
        useShallow((state) => ({ city: state.city })),
    )
    const updateCity = useCityStore((state) => state.updateCity);
    const [inputCity, setCity] = useState<string>(city);
    const [isError, setIsError] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
        setIsError(false);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        //here we can add necessary validators
        if (inputCity.length === 0) {
            setIsError(true);
        }
        updateCity(inputCity);
    }
    return (
        <form onSubmit={handleSubmit}>
            <FormControl m="4" isInvalid={isError}>
                <FormLabel>City</FormLabel>
                <Input type='text' value={inputCity} onChange={handleInputChange} />
                {!isError ? (
                    <FormHelperText>
                        Enter the city you would like to receive the weather forecast on.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage>The name of city is required.</FormErrorMessage>
                )}
                <Center>
                    <Button
                        mt={4}
                        colorScheme='teal'
                        type='submit'
                    >
                        Submit
                    </Button>
                </Center>
            </FormControl>
        </form>
    )
}

export default CityForm;