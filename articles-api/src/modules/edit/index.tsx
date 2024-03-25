import { useCallback, useEffect, useState } from "react"
import { getArticle, updateArticle } from "../../services/apiArticles.ts"
import InputField from "../../components/InputField/index.tsx"
import Button from "../../components/Button/index.tsx"
import { useNavigate, useParams } from "react-router-dom"
import { TArticles, DefaultAdminForm } from "../../typings/projectTypings.ts"

const Edit: React.FC = () => {
	const [form, setForm] = useState({
		...DefaultAdminForm,
	});

  const navigate = useNavigate();
  const params = useParams();
  const [article, setArticle] = useState<TArticles>();

  useEffect(() => {
    fetchArticleById();
  }, []);

  const fetchArticleById = useCallback(async () => {
    try {
      const response = await getArticle(params.id) as TArticles;
      setArticle(response);
      setForm({ ...form, 
        imageUrl: response.imageUrl, 
        price:response.price, 
        title:response.title 
      })
    } catch (error) {
      console.error("[GET-ARTICLE]: failed", error);
    }
  }, []);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      updateArticle(params.id, form as any);
      navigate("/home");
    } catch (error) {
      console.error("[GET-ARTICLE]: failed", error);
    }
  };

  return (
    article && (<div className="text-center justify-center items-center">
      <div className="text-3xl text-textColor text-center m-8">
        Update article - {article.title}
      </div>
      <img src={article.imageUrl} alt={article.title} className="rounded-md w-24 h-24 text-center mx-auto m-4" />
      <form className="mx-auto w-[500px]"  onSubmit={submitHandler}>
          <InputField 
          type={"text"} 
          label="Title article"  
          name="title"
          value={form.title}
          onChange={(e): void => {
            setForm({ ...form, title: e.target.value });
          }}
          className="py-2"
        />
        <InputField 
          type={"text"} 
          label="Price" 
          name="price"
          value={form.price}
          onChange={(e): void => {
            setForm({ ...form, price: Number(e.target.value) });
          }}
          className="py-2"
        />
        <InputField 
          type={"text"} 
          label="Image url" 
          name="imageUrl"
          value={form.imageUrl}
          onChange={(e): void => {
            setForm({ ...form, imageUrl: e.target.value });
          }}
          className="py-2"
        />
        <Button className="mt-4" type="submit">
            Save
        </Button>
      </form>
    </div>)
  );
};

export default Edit;
