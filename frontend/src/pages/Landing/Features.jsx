import { Title, SimpleGrid, Text, ThemeIcon, Grid, rem } from "@mantine/core";
import {
  IconCameraShare,
  IconBulbFilled,
  IconMountain,
  IconHeartHandshake,
} from "@tabler/icons-react";
import classes from "./Features.module.css";

const features = [
  {
    icon: IconBulbFilled,
    title: "Inspire others",
    description:
      "Upload your stunning photos, recount your most thrilling experiences, and inspire others to embark on their own outdoor adventures.",
  },
  {
    icon: IconCameraShare,
    title: "Start sharing",
    description:
      "Upload your stunning photos, share your stories, and inspire others with your outdoor adventures.",
  },
  {
    icon: IconMountain,
    title: "Start exploring",
    description:
      "Join a vibrant community of adventurers who share your passion for hiking, camping, and outdoor exploration.",
  },
  {
    icon: IconHeartHandshake,
    title: "Join us today",
    description:
      "Start your journey of discovery and connect with like-minded explorers. Sign up now and let the adventure begin!",
  },
];

export function Features() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon
          style={{ width: rem(26), height: rem(26) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
            TrailTales is a safe place for sharing your stunning photos and
            inspire others
          </Title>
          <Text c="dimmed">
            Whether you're scaling towering peaks, trekking through lush
            forests, or discovering hidden gems off the beaten path, we invite
            you to share your adventures with our passionate community.
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
