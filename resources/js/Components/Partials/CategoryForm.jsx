import InputLabel from "@/Shared/InputLabel";
import TextInput from "@/Shared/TextInput";
import TextArea from "@/Shared/TextArea";
import FileInput from "@/Shared/FileInput";
import InputError from "@/Shared/InputError";
import FormSubmitButtons from "@/Components/Shared/FormSubmitButtons";

export default function CategoryForm({ data, errors, setData, onSubmit }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}>
      <div>
        <InputLabel htmlFor="name" value="Category Name *" />
        <TextInput
          id="name"
          type="text"
          name="name"
          value={data.name}
          className="mt-1 block w-full"
          autoComplete="username"
          isFocused
          onChange={(e) => setData("name", e.target.value)}
          placeholder="i.e., Motorcycle, Car, Truck"
        />
        <InputError message={errors.name} className="mt-2" />
      </div>

      <div className="mt-4">
        <InputLabel htmlFor="slug" value="Category Slug *" />
        <TextInput
          id="slug"
          type="text"
          name="slug"
          value={data.slug}
          className="mt-1 block w-full"
          autoComplete="username"
          onChange={(e) => setData("slug", e.target.value)}
          placeholder="i.e., motor-for-your-cycle"
        />
        <InputError message={errors.slug} className="mt-2" />
      </div>

      <div className="mt-4">
        <InputLabel htmlFor="description" value="Category Description *" />
        <TextArea
          id="description"
          name="description"
          value={data.description}
          className="mt-1 block w-full"
          onChange={(e) => setData("description", e.target.value)}
          placeholder="Biggest Motor for your cycle"
        />
        <InputError message={errors.description} className="mt-2" />
      </div>

      <div className="mt-4">
        <InputLabel htmlFor="image" value="Category Image *" />
        <FileInput
          onChange={(e) => setData("image", e.target.files[0])}
          url={data?.image}
        />
        <InputError message={errors.image} className="mt-2" />
      </div>

      <div className="mt-10">
        <FormSubmitButtons />
      </div>
    </form>
  );
}
