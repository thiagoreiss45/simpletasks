import {
  Box,
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    py="12"
    px={{
      base: '4',
      md: '8',
    }}
  >
    <Stack>
      <Divider my="5" borderColor="blue.800" />
      <Stack direction="row" spacing="2" align="center" justify="space-between">
        <ButtonGroup variant="ghost" color="gray.600">
          <IconButton
            as="a"
            target="_blank"
            href="https://github.com/fredmaiaarantes/simpletasks"
            aria-label="GitHub"
            icon={<FaGithub fontSize="20px" />}
          />
          <IconButton
            as="a"
            target="_blank"
            href="https://twitter.com/fredmaiaarantes"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="20px" />}
          />
          <IconButton
            as="a"
            target="_blank"
            href="https://linkedin.com/in/fredmaiaarantes"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="20px" />}
          />
        </ButtonGroup>
      </Stack>
      <Text
        fontSize="xs"
        alignSelf={{
          base: 'center',
          sm: 'start',
        }}
      >
        &copy; {new Date().getFullYear()} Charm (Chakra-UI, React,{' '}
        <a href="https://meteor.com" target="_blank">
          MeteorJS
        </a>
        ) by
        <a href="https://twitter.com/fredmaiaarantes" target="_blank">
          @fredmaiaarantes
        </a>
        .
      </Text>
    </Stack>
  </Box>
);