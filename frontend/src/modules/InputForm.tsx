import { CreateItemSchema, CreateItemSchemaType } from "@/schemas/CreateItem";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  IconButton,
  Flex,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import {
  AiOutlinePlusCircle,
  AiOutlineFontColors,
  AiOutlineBgColors,
} from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import ColourPicker from "./ColourPicker";
import { useContext } from "react";
import { ListContext } from "@/store/lists.store";

const InputForm = () => {
  const list = useContext(ListContext);

  const toast = useToast();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateItemSchemaType>({
    defaultValues: {
      bgColour: "#FFFFFF",
      textColour: "#000000",
      title: "",
      message: "",
    },
    resolver: zodResolver(CreateItemSchema),
  });

  const onSubmit: SubmitHandler<CreateItemSchemaType> = (data) => {
    console.log(data);
    console.log(list?.list);

    const highestNumber = list?.list?.sort((a, b) => {
      return b.id - a.id;
    })[0];

    if (!highestNumber) return;

    const newArray = list?.list;

    newArray.unshift({
      ...data,
      id: highestNumber.id + 1,
      complete: false,
      slug: data.title.replace(/\s+/g, "-").toLowerCase(),
    });

    list?.setList([...newArray]);

    toast({
      title: "New Note Created.",
      description: "It's been saved!.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box w="50%">
      <Flex justifyItems="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Enter a Title" {...register("title")} />
          <Input placeholder="Message" {...register("message")} />
          <Box>
            <AiOutlineFontColors />
            <ColourPicker
              colourList={[
                "#000000",
                "#FFFFFF",
                "#aa0000",
                "#00aa00",
                "#0000aa",
              ]}
              defaultValue="#000000"
              {...register("textColour")}
              setValue={setValue}
            />
          </Box>
          <Box>
            <AiOutlineBgColors />
            <ColourPicker
              colourList={[
                "#000000",
                "#FFFFFF",
                "#aa0000",
                "#00aa00",
                "#0000aa",
              ]}
              defaultValue="#FFFFFF"
              {...register("bgColour")}
              setValue={setValue}
            />
          </Box>
          <IconButton
            aria-label="Add New Note"
            icon={<AiOutlinePlusCircle />}
            type="submit"
          />
        </form>
      </Flex>
    </Box>
  );
};

export default InputForm;
