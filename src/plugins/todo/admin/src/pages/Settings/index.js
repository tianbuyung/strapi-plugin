// admin/src/pages/Settings/index.js
import React, { useEffect, useState } from "react";
import { LoadingIndicatorPage, useNotification } from "@strapi/helper-plugin";
import {
  Box,
  Stack,
  Button,
  Grid,
  GridItem,
  HeaderLayout,
  ContentLayout,
  Typography,
  ToggleInput,
} from "@strapi/design-system";
import { Check } from "@strapi/icons";

import taskRequests from "../../api/task";

const Settings = () => {
  const [settings, setSettings] = useState();
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const toggleNotification = useNotification();

  useEffect(() => {
    taskRequests.getSettings().then((res) => {
      setSettings(res.data.settings);
      setIsLoading(false);
    });
  }, [setSettings]);

  const handleSubmit = async () => {
    setIsSaving(true);
    const res = await taskRequests.setSettings(settings);
    setSettings(res.data.settings);
    setIsSaving(false);
    toggleNotification({
      type: "success",
      message: "Settings successfully updated",
    });
  };

  return (
    <>
      <HeaderLayout
        id="title"
        title="Todo General settings"
        subtitle="Manage the settings and behaviour of your todo plugin"
        primaryAction={
          isLoading ? (
            <></>
          ) : (
            <Button
              onClick={handleSubmit}
              startIcon={<Check />}
              size="L"
              disabled={isSaving}
              loading={isSaving}
            >
              Save
            </Button>
          )
        }
      ></HeaderLayout>
      {isLoading ? (
        <LoadingIndicatorPage />
      ) : (
        <ContentLayout>
          <Box
            background="neutral0"
            hasRadius
            shadow="filterShadow"
            paddingTop={6}
            paddingBottom={6}
            paddingLeft={7}
            paddingRight={7}
          >
            <Stack size={3}>
              <Typography>General settings</Typography>
              <Grid gap={6}>
                <GridItem col={12} s={12}>
                  <ToggleInput
                    checked={settings?.disabled ?? false}
                    hint="Cross or disable checkbox tasks marked as done"
                    offLabel="Cross"
                    onLabel="Disable"
                    onChange={(e) => {
                      setSettings({
                        disabled: e.target.checked,
                      });
                    }}
                  />
                </GridItem>
              </Grid>
            </Stack>
          </Box>
        </ContentLayout>
      )}
    </>
  );
};

export default Settings;
