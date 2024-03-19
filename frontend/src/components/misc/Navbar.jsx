import React from "react";
import classes from "./Navbar.module.css";
import { Container, Group, Burger, Drawer, Stack, Text } from "@mantine/core";
import useLinks from "./useLinks";
import { DrawerContext } from "../../Contexts/drawerContext";

const Navbar = () => {
  const { opened, toggle } = React.useContext(DrawerContext);
  const [items] = useLinks();

  return (
    <header className={classes.header}>
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

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger hiddenFrom="xs" opened={opened} onClick={toggle} />
        <Drawer
          withCloseButton={true}
          opened={opened}
          size="100%"
          onClose={toggle}
        >
          <Stack>{items}</Stack>
        </Drawer>
      </Container>
    </header>
  );
};

export const Logo = (props) => (
  <svg
    width="28px"
    height="28px"
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    className="iconify iconify--twemoji"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path fill="#66757F" d="M4 5s0-1 1-1h6s1 0 1 1v2H4V5z" />
    <path
      fill="#31373D"
      d="M0 10s0-4 4-4h28s4 0 4 4v18s0 4-4 4H4s-4 0-4-4V10z"
    />
    <circle fill="#CCD6DD" cx={21} cy={19} r={10} />
    <circle fill="#31373D" cx={21} cy={19} r={8} />
    <circle fill="#3B88C3" cx={21} cy={19} r={5} />
    <circle fill="#FFF" cx={32.5} cy={9.5} r={1.5} />
    <path
      fill="#F5F8FA"
      d="M12 9.5a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 1 1 0-3h5A1.5 1.5 0 0 1 12 9.5z"
    />
  </svg>
);

export default Navbar;
