import React from 'react';
import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Group } from '@mantine/core';
import ReactDOM from 'react-dom'

import { useState } from 'react';

const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Name should have at least 2 letters'),
    email: Yup.string().email('Invalid email'),
    age: Yup.number().min(18, 'You must be at least 18 to create an account'),
});


function Productform() {

    const [data, setData] = useState({})

    const form = useForm({
        schema: yupResolver(schema),
        initialValues: {
            name: '',
            email: '',
            description: '',
            address: '',
            phone: "",
            category: ""

        },
    });

    return (
        <Box sx={{ maxWidth: 640 }} mx="auto">
            <form onSubmit={form.onSubmit((values) => {
                setData({
                    name: values.name,
                    title: values.title,
                    description: values.description,
                    revenue: values.revenue,
                })

                fetch('http://localhost:4000/idea/', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            })}>

                <TextInput
                    required
                    label="Title"
                    placeholder="Title"
                    {...form.getInputProps('title')}
                />
                <TextInput
                    required
                    label="Name"
                    placeholder="John Doe"
                    mt="sm"
                    {...form.getInputProps('name')}
                />
                <TextInput
                    required
                    label="Description"
                    placeholder="about product"
                    mt="sm"
                    {...form.getInputProps('description')}
                />
                <NumberInput
                    required
                    label="Revenue"
                    placeholder="Enter Revenue Generated SO far.."
                    mt="sm"
                    {...form.getInputProps('revenue')}
                />


                <Group position="right" mt="xl">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>


        </Box>
    );
}

export default Productform