/*
 *
 * HomePage
 *
 */

import React, { memo, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Typography,
  EmptyStateLayout,
  BaseHeaderLayout,
  ContentLayout,
} from "@strapi/design-system";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import { useIntl } from "react-intl";

import taskRequests from "../../api/task";
import { Illo } from "../../components/Illo";
import getTrad from "../../utils/getTrad";

const HomePage = () => {
  const [taskCount, setTaskCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { formatMessage } = useIntl();

  useEffect(() => {
    taskRequests.getTaskCount().then((res) => {
      setTaskCount(res.data);
    });
    setIsLoading((prev) => !prev);
  }, [setTaskCount]);

  return (
    <>
      <BaseHeaderLayout
        title={formatMessage({
          id: getTrad("Homepage.BaseHeaderLayout.title"),
          defaultMessage: "Todo Plugin",
        })}
        subtitle="Discover the number of tasks you have in your project"
        as="h2"
      />

      <ContentLayout>
        {taskCount === 0 && (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any tasks yet..."
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
