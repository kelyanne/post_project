import { Anchor, AppShell, Group, Container, Text } from "@mantine/core";
import classes from "./Footer.module.css";
import { Logo } from "./Navbar";

const links = [
  { link: "/login", label: "Login" },
  { link: "/", label: "Home" },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <AppShell>
      <div className={classes.footer}>
        <Container size="md" className={classes.inner}>
          <Group gap={4}>
            <Logo size={28} />
            <Text
              size="m"
              fw={900}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan", deg: 90 }}
            >
              TrailTales
            </Text>
          </Group>

          <Group className={classes.links}>{items}</Group>
        </Container>
      </div>
    </AppShell>
  );
}
