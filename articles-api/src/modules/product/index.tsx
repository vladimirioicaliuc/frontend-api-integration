import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TArticles } from "../../typings/projectTypings.ts";
import { deleteArticle } from "../../services/apiArticles.ts"
import { NumericFormat } from "react-number-format";
import Button from "../../components/Button/index.tsx";
import Shop from "../../assets/icons/Shop.tsx";
import Trash from "../../assets/icons/Trash.tsx";
import Edit from "../../assets/icons/Edit.tsx";
import {addToCart} from '../../redux/cartSlice.ts';
import { useDispatch } from "react-redux";

interface IProps {
  product: TArticles;
  selected: string;
}

const ProductCard: FC<IProps> = ({ product , selected}) => {
  const {
    id,
    title,
    imageUrl,
    price,
  } = product;

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleDelete = useCallback(async (id) => {
    try {
      deleteArticle(id);
      window.location.reload();
    } catch (error) {
      console.error("[GET-ARTICLE]: failed", error);
    }
  }, []);

  const goToEditArticle = (id: string) => {
      navigate(`/edit/${id}`);
  };

  return (
    <div className={`relative flex flex-col col-span-1 border-2 border-borderColor  max-h-96 cursor-pointer rounded-lg ${selected === product.id ? 'border-2 shadow-md shadow-borderColor' :  ''}`}>
      <div className="flex flex-col grow overflow-hidden relative w-full min-h-80 bg-white rounded-t-lg">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Product Image"
            className="cursor-pointer object-fill place-content-center max-w-[78%] m-auto"
          />
        )}
      </div>
      <div className={`absolute w-full top-2/3 bottom-1/2 px-2 opacity-0 ${selected === product.id ? 'opacity-100' :  ''}`}>
        <Button  onClick={() => 
          dispatch(addToCart({ id, title, imageUrl, price}))
        }>
          <div className="flex">
            <Shop />
            <span className="text-textColor ml-2"> Add to cart </span>
          </div>
        </Button>
      </div>
      <div className="flex flex-col p-2 space-y-1 text-textColor">
        <div className="text-sm font-semibold">
          {title}
        </div>
        <div className="flex">
          <NumericFormat value={price} prefix={'$'} displayType="text" className="bg-background text-md font-bold"/>
          <div className="ml-auto cursor-pointer" onClick={() => handleDelete(product.id)}><Trash /></div>
          <div className="ml-auto cursor-pointer" onClick={() => goToEditArticle(product.id)}><Edit /></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
