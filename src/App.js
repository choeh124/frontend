import "./App.css";
import Login from "./component/users/Login.jsx";
import Posts from "./component/posts/Posts.jsx";
import Post from "./component/post/Post.jsx";
import PostWrite from "./component/postWrite/PostWrite.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./component/users/SignUp.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
