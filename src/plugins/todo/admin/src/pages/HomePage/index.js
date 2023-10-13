/*
 *
 * HomePage
 *
 */

import React, { memo, useState, useEffect } from "react";

import taskRequests from "../../api/task";

import {
  Box,
  Flex,
  Typography,
  EmptyStateLayout,
  BaseHeaderLayout,
  ContentLayout,
  Button,
} from "@strapi/design-system";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";

import { Illo } from "../../components/Illo";
import { Plus } from "@strapi/icons";

const HomePage = () => {
  const [taskCount, setTaskCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    taskRequests.getTaskCount().then((res) => {
      setTaskCount(res.data);
    });
    setIsLoading((prev) => !prev);
  }, [setTaskCount]);

  const createContentHandler = () => {
    console.log("createContentHandler");
  };

  if (isLoading) return <LoadingIndicatorPage />;

  return (
    <>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="Discover the number of tasks you have in your project"
        as="h2"
      />
      <ContentLayout>
        {taskCount === 0 && (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any tasks yet..."
            action={
              <Button
                variant="secondary"
                startIcon={<Plus />}
                onClick={createContentHandler}
              >
                Create your first content-type
              </Button>
            }
          />
        )}
        {taskCount > 0 && (
          <Box background="neutral0" hasRadius={true} shadow="filterShadow">
            <Flex justifyContent="center" padding={8}>
              <Typography variant="alpha">
                You have a total of {taskCount} tasks 🚀
              </Typography>
            </Flex>
          </Box>
        )}
      </ContentLayout>
    </>
  );
};

export default memo(HomePage);
