/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
import { Button, Box, BaseHeaderLayout, Link } from "@strapi/design-system";
import { List, ArrowLeft } from "@strapi/icons";
const axios = require("axios")

import "./index.css";

function HomePage() {
  function handleClick(event) {
    event.preventDefault()

    const test = axios.get("http://localhost:1337/json-generator/generate")
    console.log(test);
  }
  // useEffect(() => {
  //   axios.get("http://localhost:1337/json-generator/generate")
  // }, [])

  return (
    <Box background="neutral100">
      <BaseHeaderLayout
        navigationAction={
          <Link startIcon={<ArrowLeft />} to="/">
            Go back
          </Link>
        }
        primaryAction={<Button startIcon={<List />} onClick={handleClick}>Generate</Button>}
        title="JSON-generator"
        subtitle="Generates JSON-file with routing parameters"
        as="h2"
      />
    </Box>
  );
}

export default HomePage;
