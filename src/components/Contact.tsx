import * as React from "react"
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Flex,
  Stack,
  Switch,
  Text,
  Textarea,
  Center,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"

const SubmittedForm = () => (
  <Box>
    <Text>completed!</Text>
  </Box>
)

const Contact = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isFormCompleted, setIsFormCompleted] = React.useState<boolean>(false)
  const { register, handleSubmit } = useForm()
  const onSubmit = async (values: any) => {
    try {
      console.log(values)
      setIsLoading(true)
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
      await fetch(
        "https://formsubmit.co/bcb664b54388c8ea18272061a94e6ff9",
        requestOptions
      )
        .then(response => {
          console.log(response)
          if (response.status === 200) {
            setIsFormCompleted(true)
          }
        })
        .catch(err => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <Container>
      <Flex justifyContent={"center"}>
        <Stack>
          <Heading as={"h4"} fontSize={"lg"}>
            dsfsfds
          </Heading>
        </Stack>
        {!isFormCompleted ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={8}>
              <Stack direction={"row"} justify={"space-around"} spacing={8}>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    {...register("firstName", { required: true })}
                    placeholder="First Name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    {...register("lastName", { required: true })}
                    placeholder="Last Name"
                  />
                </FormControl>
              </Stack>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  placeholder="sample@gmail.com"
                  type={"email"}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input
                  {...register("phone", { required: true })}
                  placeholder="701-845-1234"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input
                  {...register("location", { required: true })}
                  placeholder="New York City, New York, USA"
                />
              </FormControl>

              <FormControl>
                <FormLabel>How Did You Hear About Us?</FormLabel>
                <Input
                  {...register("refer", { required: true })}
                  placeholder="Google Search"
                />
              </FormControl>

              <FormControl>
                <FormLabel>How Can We Help?</FormLabel>
                <Textarea {...register("service", { required: true })} />
              </FormControl>

              <FormControl display={"flex"}>
                <FormLabel>Would you like to get product updates?</FormLabel>
                <Switch {...register("updates")} defaultChecked />
              </FormControl>

              <Button
                colorScheme={"blue"}
                type={"submit"}
                isDisabled={isLoading}
              >
                Submit
              </Button>
            </Stack>
          </form>
        ) : (
          <SubmittedForm />
        )}
      </Flex>
    </Container>
  )
}
export default Contact
