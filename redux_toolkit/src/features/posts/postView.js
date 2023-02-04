import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";
import "../../App.css";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}

      <section>
        {posts &&
          posts.map((post) => {
            const { id, title } = post;
            return (
              <div className="rong" key={id}>
                <h4>{id}</h4>
                <h4>{title}</h4>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default PostView;
