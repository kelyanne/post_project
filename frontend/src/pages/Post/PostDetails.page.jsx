import { Link, useLoaderData } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container, Image, Title, Text, Grid } from "@mantine/core";
import { IconArrowLeft, IconEdit } from "@tabler/icons-react";
import useBoundStore from "../../store/Store";

function PostDetailsPage() {
  const post = useLoaderData();
  const { user } = useBoundStore((state) => state);

  const iconArrowLeft = <IconArrowLeft size={14} />;
  const iconEdit = <IconEdit size={14} />;
  return (
    <>
      <Grid justify="center" align="center">
        <Grid.Col span={4}>
          <Container>
            <Title order={1}>{post.title}</Title>
            <Text fs="italic" fw={500}>
              {post.category}
            </Text>
            <p>{post.content}</p>
            <p>Posted by {post.author}</p>
            <Button variant="filled" leftSection={iconArrowLeft}>
              <Link to="/posts">Back to Posts</Link>
            </Button>
            {post.userId === user.id ? (
              <Button variant="filled" leftSection={iconEdit} ml={10}>
                <Link to={"/posts/" + post.id + "/edit"}>Edit</Link>
              </Button>
            ) : null}
          </Container>
        </Grid.Col>
        <Grid.Col span={6}>
          <Image radius="md" src={post.image} h="auto" />
        </Grid.Col>
      </Grid>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  const res = await axios.get(`${DOMAIN}/api/posts/` + params.id);
  return res.data;
};

export default PostDetailsPage;
