import { useCallback, useEffect, useState } from "react"
import { getArticles , searchArticle} from "../../services/apiArticles.ts"
import { TArticles } from "../../typings/projectTypings"
import ProductCard from "../product"
import Header from "../../components/Header.tsx"
import { Cart } from "../../modules/cart"

const Shop: React.FC = () => {
    const [articles, setArticles] = useState<TArticles[]>([]);
    const [filteredArticles, setFilteredArticles] = useState<TArticles[]>([]);
    const [articlesShown, setArticlesShown] = useState<TArticles[]>([]);
    const [showModal, setshowModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState('');
    const [query, setQuery] = useState('');

    const handleInputChange = (event: any) => {
      const query = event.target.value
      setQuery(query);
      if (query !== "") {
        search(query)
      } else setArticlesShown(articles);
    };
  
    const search = useCallback(async (query: string) => {
      try {
        const response = await searchArticle(query) as TArticles[];
        setFilteredArticles(response);
        setArticlesShown(response);
      } catch (error) {
        console.error("[GET-ARTICLE]: failed", error);
      }
    }, []);

    const fetchArticles = useCallback(async () => {
        try {
          const response = await getArticles() as TArticles[];
          setArticles(response);
          setArticlesShown(response);
        } catch (error) {
          console.error("[GET-ARTICLE]: failed", error);
        }
      }, []);
    
      useEffect(() => {
        fetchArticles();
      }, []);

      const handleSelectCard = (product: TArticles) => {
        var selected: string =  product.id !== selectedProductId ? product.id : '';
        setSelectedProductId(selected);
      };

      const toggle = () => {
        setshowModal(!showModal);
      };

    return (
      <>
        <Header handleInputChange={handleInputChange} toggle={toggle} />
        <div className="flex flex-col items-center">
            <div className="grid justify-center py-3 gap-3 grid-cols-2 xl:gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              { articlesShown.length > 0 ? ( <>
              { articlesShown.map((product, index) =>
                          <div key={index} onClick={() => handleSelectCard(product)}>
                              <ProductCard product={product} selected={selectedProductId}/>
                          </div>
                )}</>) : (<div className="text-center text-textColor">No article found ...</div>
                )}
            </div>
        </div>
        <Cart showModal={showModal} toggle={toggle} />
      </>
    );
};

export default Shop;
