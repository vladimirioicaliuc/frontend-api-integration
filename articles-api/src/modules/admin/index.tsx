import { useState } from "react"
import { saveArticle } from "../../services/apiArticles.ts"
import InputField from "../../components/InputField/index.tsx";
import Button from "../../components/Button/index.tsx";
import { useNavigate } from "react-router-dom";
import { TArticles, DefaultAdminForm } from "../../typings/projectTypings.ts";

const Admin: React.FC = () => {
	const [form, setForm] = useState({
		...DefaultAdminForm,
	});
  const navigate = useNavigate();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      saveArticle(form as TArticles);
      navigate("/home");
    } catch (error) {
      console.error("[GET-ARTICLE]: failed", error);
    }
  };

  return (
    <>
      <div className="text-3xl text-textColor text-center m-8">Create new article</div>
      <form className="mx-auto w-[500px]" onSubmit={submitHandler}>
        <InputField 
          type={"text"} 
          label="Title article"  
          name="title"
          onChange={(e): void => {
            setForm({ ...form, title: e.target.value });
          }}
          className="py-2"
        />
        <InputField 
          type={"text"} 
          label="Price" 
          name="price"
          onChange={(e): void => {
            setForm({ ...form, price: Number(e.target.value) });
          }}
          className="py-2"
        />
        <InputField 
          type={"text"} 
          label="Image url" 
          name="imageUrl"
          onChange={(e): void => {
            setForm({ ...form, imageUrl: e.target.value });
          }}
          className="py-2"
        />
        <Button className="mt-4" type="submit">
            Save
        </Button>
      </form>
    </>
  );
};

export default Admin;
