import { useEffect, useState } from "react";
import LikeButton from "../like-button/LikeButton";
import { useLoadingStore } from "../../store/useLoadingStore";
import { likeUseCase } from "../../../core/use-cases/like-poetry.use-case";

interface Options {
  title: string;
  content: string;
  category: string;
  likes: number;
  id: string;
}

const Poetry = (options: Options) => {
  const { title, content, category, likes, id } = options;
  const [likesCount, setLikesCount] = useState<number>(likes);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const setLoading = useLoadingStore((state) => state.setLoading);

  useEffect(() => {
    const likedPoetries = JSON.parse(
      localStorage.getItem("likedPoems") || "[]"
    );
    if (likedPoetries.includes(id)) {
      setIsLiked(true);
    }
  }, [id]);

  const handleLike = async () => {
    setLoading(true);

    try {
      if (isLiked) {
        await likeUseCase({ title, content, category, isLiked: false });
        setLikesCount((prev) => prev - 1);
        setIsLiked(false);
      } else {
        await likeUseCase({
          title,
          content,
          category,
          isLiked: true,
        });
        setLikesCount((prev) => prev + 1);
        setIsLiked(true);
      }

      // Actualizar el estado de likedPoems en el localStorage
      const likedPoems = JSON.parse(localStorage.getItem("likedPoems") || "[]");
      const updatedLikedPoems = isLiked
        ? likedPoems.filter((poemId: string) => poemId !== id)
        : [...likedPoems, id];
      localStorage.setItem("likedPoems", JSON.stringify(updatedLikedPoems));
    } catch (error) {
      console.error(
        "Error al procesar la acción de Me gusta/No me gusta:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="poetrys fade-in-text">
      <h1>{title}</h1>
      {category && (
        <h2>
          <i>{`De '${category}'`}</i>
        </h2>
      )}
      <div style={{ whiteSpace: "pre-line" }}>{content}</div>
      <LikeButton
        likes={likesCount}
        onClickFunction={handleLike}
        liked={isLiked}
      />
    </article>
  );
};

export default Poetry;
