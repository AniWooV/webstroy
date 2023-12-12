/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
// @ts-ignore
import axios from "axios";
import {
  Button,
  Box,
  BaseHeaderLayout,
  Link,
  GridLayout,
  Typography,
  Stack,
  Alert,
} from "@strapi/design-system";
import { BulletList, ArrowLeft, Stack as StackIcon } from "@strapi/icons";

import "./index.css";

function HomePage() {
  const [alertData, setAlertData] = useState({
    title: "",
    message: "",
    variant: "",
  });

  function checkForResponse(response) {
    if (response.data.isDone) {
      setAlertData({
        title: "Succes!",
        message: response.data.message,
        variant: "success",
      });
    } else {
      setAlertData({
        title: "Fail!",
        message: response.data.message,
        variant: "danger",
      });
    }
  }

  function generateJSON(event) {
    event.preventDefault();

    axios
      .get("http://localhost:1337/json-generator/generate")
      .then((response) => checkForResponse(response));
  }

  function addRegions(event) {
    event.preventDefault();

    axios
      .get("http://localhost:1337/json-generator/regions")
      .then((response) => checkForResponse(response));
  }

  function addCities(event) {
    event.preventDefault();

    axios
      .get("http://localhost:1337/json-generator/cities")
      .then((response) => checkForResponse(response));
  }

  return (
    <>
      <Box background="neutral100" padding={8}>
        <BaseHeaderLayout
          navigationAction={
            <Link startIcon={<ArrowLeft />} to="/">
              Go back
            </Link>
          }
          primaryAction={
            <Button startIcon={<BulletList />} onClick={generateJSON}>
              Generate
            </Button>
          }
          title="JSON-generator"
          subtitle="Generates JSON-file with routing parameters"
          as="h2"
        />
      </Box>
      <Box background="neutral100" padding={8}>
        <GridLayout>
          <Box padding={4} hasRadius background="neutral0">
            <Stack spacing={4}>
              <Box>
                <Typography variant="beta">Regions</Typography>
              </Box>
              <Box>
                <Typography variant="epsilon">
                  Adds base regions to database
                </Typography>
              </Box>
              <Box>
                <Button startIcon={<StackIcon />} onClick={addRegions}>
                  Add regions
                </Button>
              </Box>
            </Stack>
          </Box>
          <Box padding={4} hasRadius background="neutral0">
            <Stack spacing={4}>
              <Box>
                <Typography variant="beta">Cities</Typography>
              </Box>
              <Box>
                <Typography variant="epsilon">
                  Adds base cities to database
                </Typography>
              </Box>
              <Box>
                <Button startIcon={<StackIcon />} onClick={addCities}>
                  Add cities
                </Button>
              </Box>
            </Stack>
          </Box>
        </GridLayout>
      </Box>
      {alertData.title ? (
        <Alert
          closeLabel="Close"
          title={alertData.title}
          variant={alertData.variant}
        >
          {alertData.message}
        </Alert>
      ) : null}
    </>
  );
}

export default HomePage;
