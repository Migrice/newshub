import { Article } from "../../models";

type ImageProps = {
  article: Article;
};

const ImageBg: React.FC<ImageProps> = ({ article }) => {
  return (
    <div className="mx-3 md:w-[50%] lg:w-[90%]">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="h-full w-full rounded-xl object-cover"
      />
    </div>
  );
};

export default ImageBg;
