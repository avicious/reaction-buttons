import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const App = () => {
  const initialLikes = 50;
  const initialDislikes = 27;
  const [userAction, setUserAction] = useState(null);

  const handleReaction = (reaction) => {
    if (userAction === reaction) {
      setUserAction(null);
    } else {
      setUserAction(reaction);
    }
  };

  const displayLikes = initialLikes + (userAction === "like" && 1);
  const displayDislikes = initialDislikes + (userAction === "dislike" && 1);

  return (
    <div className="container">
      <div className="btn-container">
        <button
          className={`btn ${userAction === "like" && "like-active"}`}
          onClick={() => handleReaction("like")}
        >
          <ThumbsUp /> Like {displayLikes}
        </button>

        <button
          className={`btn ${userAction === "dislike" && "dislike-active"}`}
          onClick={() => handleReaction("dislike")}
        >
          <ThumbsDown /> Dislike {displayDislikes}
        </button>
      </div>
    </div>
  );
};

export default App;
