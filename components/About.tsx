import { Box, Grid, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box py={4} px={8}>
      <Heading size="xl" mb={8}>
        Hey There
      </Heading>
      <Grid gap={{ base: 8, lg: 16 }}>
        <Box>
          <Text fontWeight="semibold" mb={4}>
            {`👋 I'm Aryan Kumar, a web developer who enjoys bringing ideas
            to life with code!`}
          </Text>
          <Text fontWeight="semibold" mb={4}>
            {`I'm experienced with back-end development using Node.js, Express,
            Flask, Spring, and Firebase. On the front-end, I specialize in
            React.js, Next.js, Redux, Material UI, HTML, and CSS.`}
          </Text>
          <Text fontWeight="semibold" mb={4}>
            {`I also have experience with various AWS services such as EC2,
            Elastic Beanstalk, Lambda, S3, API Gateway, Cognito, AppSync, SQS,
            SNS, Event Bridge, and DynamoDB. In addition, I have developed and
            deployed end-to-end ML solutions, including recommender systems in
            Python and image recognition apps with neural networks.`}
          </Text>
          <Text fontWeight="semibold" mb={4}>
            {`I'm known for my ability to solve complex problems and my expertise
            in machine learning and software engineering. I have honed my skills
            in full-stack web development by creating React frontends with
            Flask-based ML backends.`}
          </Text>
          <Text fontWeight="semibold" mb={4}>
            I am passionate about cooking, filming, traveling, playing guitar,
            and writing music. Check out my projects on my{' '}
            <a href="https://github.com/aryan877">GitHub</a> and my coding
            solutions on{' '}
            <a href="https://leetcode.com/aryankumar877/">LeetCode</a>.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default About;
