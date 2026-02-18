import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const App = () => {
  const [likeCount, setLikeCount] = useState(50);
  const [dislikeCount, setDislikeCount] = useState(27);
  const [activeBtn, setActiveBtn] = useState("none");

  const handleReaction = (reaction) => {
    if (activeBtn === "none") {
      if (reaction === "like") {
        setActiveBtn("like");
        setLikeCount((prevLike) => prevLike + 1);
      }

      if (reaction === "dislike") {
        setActiveBtn("dislike");
        setDislikeCount((prevDislike) => prevDislike + 1);
      }
    } else if (activeBtn === "like") {
      if (reaction === "like") {
        setActiveBtn("none");
        setLikeCount((prevLike) => prevLike - 1);
      }

      if (reaction === "dislike") {
        setActiveBtn("dislike");
        setLikeCount((prevLike) => prevLike - 1);
        setDislikeCount((prevDislike) => prevDislike + 1);
      }
    } else if (activeBtn === "dislike") {
      if (reaction === "like") {
        setActiveBtn("like");
        setDislikeCount((prevDislike) => prevDislike - 1);
        setLikeCount((prevLike) => prevLike + 1);
      }

      if (reaction === "dislike") {
        setActiveBtn("none");
        setDislikeCount((prevDislike) => prevDislike - 1);
      }
    }
  };

  return (
    <div className="container">
      <div className="btn-container">
        <button
          className={`btn ${activeBtn === "like" && "like-active"}`}
          onClick={() => handleReaction("like")}
        >
          <ThumbsUp /> Like {likeCount}
        </button>

        <button
          className={`btn ${activeBtn === "dislike" && "dislike-active"}`}
          onClick={() => handleReaction("dislike")}
        >
          <ThumbsDown /> Dislike {dislikeCount}
        </button>
      </div>
    </div>
  );
};

export default App;
