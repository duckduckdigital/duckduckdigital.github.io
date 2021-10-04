import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import * as React from "react"
import {
  FaArrowRight,
  FaFileSignature,
  FaHandsHelping,
  FaHeadset,
} from "react-icons/fa"

interface FeatureProps {
  icon: React.ReactElement
  title: string
  children: React.ReactNode
}

const Service = (props: FeatureProps) => {
  const { title, children, icon } = props
  return (
    <Box>
      <Box color={mode("blue.500", "blue.300")} fontSize="5xl">
        {icon}
      </Box>
      <Stack mt="6">
        <Heading as="h3" color={mode("blue.500", "blue.300")} fontSize="xl">
          {title}
        </Heading>
        <Text pr="6" lineHeight="tall">
          {children}
        </Text>
      </Stack>
    </Box>
  )
}

const Services = () => {
  return (
    <Box as="section" bg={mode("gray.50", "gray.800")} py="20">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: "12", md: "24" }}
        >
          <Service title="Video Booths" icon={<FaFileSignature />}>
            The best instantaneous video creation and social sharing software
            out there. Mind-blowing videos can be shared almost instantly.
            Making your event the highlight of the year
          </Service>
          <Service title="360 Video Booths" icon={<FaHeadset />}>
            Create amazing experiences that can be instantly shared with a 360
            degree video booth. Paired with customized software and social
            sharing, leaves your users in a state of awe.
          </Service>
          <Service
            title="QR Registration & Integration"
            icon={<FaHandsHelping />}
          >
            Enable consumer registration systems capable of integrating with
            experiential activations event-wide. QR creates a uniform platform
            for consumers to receive and share digital content quickly and
            easily.
          </Service>
          <Service title="Set Design & Construction" icon={<FaFileSignature />}>
            Have a vision for your event? Let DuckDuckDigital bring it to life!
            We can handle all of your print, welding, temporary wall, or any of
            your other event fabrication needs.
          </Service>
          <Service title="Live Stream" icon={<FaFileSignature />}>
            Have a completely virtual event? Don't have the production
            experience to really wow your virtual users? Look no further.
          </Service>
          <Service
            title="Interactive Video Projections"
            icon={<FaFileSignature />}
          >
            Let us work with your team to custom design a virtual reality
            experience for your attendees. Provide guests with 3rd person video
            for social of their experience by filming them against a green
            screen.
          </Service>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Services
