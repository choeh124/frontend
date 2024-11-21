import Header from "../Header";
import Footer from "../Footer";
import PostsCardList from "./PostsCradList";

export default function PostsPage() {
  return (
    <div className="posts">
      <Header></Header>
      <div className="Board">
        <PostsCardList></PostsCardList>
      </div>

      <Footer></Footer>
    </div>
  );
}
