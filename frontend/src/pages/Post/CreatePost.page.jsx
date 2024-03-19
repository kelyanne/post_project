import { TextInput, Button, Group, Box } from "@mantine/core";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import useBoundStore from "../../store/Store";

function CreatePostPage() {
  const { user } = useBoundStore((state) => state);
  // const { id, setId } = useBoundStore((state) => state);
  // console.log(id);
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      title: "",
      category: "",
      image: "",
      content: "",
    },
  });

  const handleSubmit = async (values) => {
    //I've tried to update post id using state by for some reason the setId doens't increment it
    // setId();
    values.user = user;
    // values.postId = id;
    const res = await axios.post(`${DOMAIN}/api/posts`, values);
    if (res?.data.success) {
      navigate("/posts");
    }
  };

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Title"
          placeholder="Enter a Title"
          {...form.getInputProps("title")}
        />

        <TextInput
          label="Category"
          placeholder="Enter a Category"
          {...form.getInputProps("category")}
        />
        <TextInput
          label="Image"
          placeholder="Enter an Image"
          {...form.getInputProps("image")}
        />

        <TextInput
          label="Content"
          placeholder="Enter some content"
          {...form.getInputProps("content")}
        />

        <Group justify="center" mt="md">
          <Button type="submit">Submit</Button>
          <Button
            variant="filled"
            color="red"
            onClick={() => navigate("/posts/")}
          >
            Cancel
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export default CreatePostPage;
