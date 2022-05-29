import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAuth from "./components/Authentication/RequireAuth";
import Layout from "./components/Layout/Layout";
import Comments from "./routes/comments/Comments";
import Homepage from "./routes/Homepage/Homepage";
import Login from "./routes/Login/Login";
import Posts from "./routes/posts/Posts";
import CreateArticle from "../src/routes/createArticle/CreateArticle";
import ArticlesList from "./routes/articles/ArticlesList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="login" element={<Login />} />

          {/* private routes */}
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Homepage />} />
            <Route path="posts" element={<Posts />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/create" element={<CreateArticle />} />
            <Route path="/articles" element={<ArticlesList />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
