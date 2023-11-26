import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const errorPage = () => {
  return (
    <Box>
      <Box>
       <Button>
       <Text>We're sorry, but the page you requested does not exist.</Text>
       </Button>
      </Box>
    </Box>
  );
};

export default errorPage;
