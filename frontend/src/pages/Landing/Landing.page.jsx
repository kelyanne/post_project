import { ArticleCard } from "./ArticleCard";
import { Features } from "./Features";
import { Footer } from "../../components/misc/Footer";
import classes from "./LandingPage.module.css";
import { Title, Container, Text, Button, Overlay } from "@mantine/core";

const Landing = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <Overlay color="#dee2e6" opacity={0.65} zIndex={1} />

        <div className={classes.inner}>
          <Title className={classes.title}>Unleash Your Inner Adventurer</Title>

          <Container size={640}>
            <Text size="lg" className={classes.description}>
              Join a vibrant community of adventurers who share your passion for
              hiking, camping, and outdoor exploration taking amazing photos.
            </Text>
          </Container>
        </div>
      </div>

      <Features />
    </>
  );
};

export default Landing;
