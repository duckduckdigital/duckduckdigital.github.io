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
        <Text as="h3" color={mode("blue.500", "blue.300")} fontSize="xl">
          {title}
        </Text>
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
            Keep files and the messages about them together in channels.
          </Service>
          <Service title="360 Video Booths" icon={<FaHeadset />}>
            Keep files and the messages about them together in channels.
          </Service>
          <Service
            title="QR Registration & Integration"
            icon={<FaHandsHelping />}
          >
            Keep files and the messages about them together in channels.
          </Service>
          <Service title="Set Design & Construction" icon={<FaFileSignature />}>
            Keep files and the messages about them together in channels.
          </Service>
          <Service title="Live Stream" icon={<FaFileSignature />}>
            Keep files and the messages about them together in channels.
          </Service>
          <Service title="Static Photo Booth" icon={<FaFileSignature />}>
            Keep files and the messages about them together in channels.
          </Service>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Services
