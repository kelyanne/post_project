import { Link, useLoaderData } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

function PostEditPage() {
  const navigate = useNavigate();
  const post = useLoaderData();

  const form = useForm({
    initialValues: {
      id: post.id,
      category: post.category,
      content: post.content,
      title: post.title,
      image: post.image,
    },
  });

  const handleUpdate = async (values) => {
    const res = await axios.patch(`${DOMAIN}/api/posts/${post.id}`, values);
    if (res?.data.success) {
      navigate("/posts/" + post.id);
    }
  };

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit(handleUpdate)}>
        <TextInput
          label="Title"
          placeholder="Enter a title"
          {...form.getInputProps("title")}
        />
        <TextInput
          mt="md"
          label="Category"
          placeholder="Enter a category"
          {...form.getInputProps("category")}
        />
        <TextInput
          mt="md"
          label="Image"
          placeholder="Enter an image URL"
          {...form.getInputProps("image")}
        />
        <TextInput
          mt="md"
          label="Content"
          placeholder="Enter some content"
          {...form.getInputProps("content")}
        />

        <Group justify="center" mt="xl">
          <Button type="submit">Update</Button>
          <Button
            variant="filled"
            color="red"
            onClick={() => navigate("/posts/" + post.id)}
          >
            Cancel
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export const postDetailsLoader = async ({ params }) => {
  const res = await axios.get(`${DOMAIN}/api/posts/` + params.id);
  return res.data;
};

export default PostEditPage;
