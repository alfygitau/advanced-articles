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
import NotFound from "./routes/NotFound/NotFound";
import { Courses } from "./routes/courses/Courses";
import { CreateCourse } from "./routes/createCourse/CreateCourse";

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
            <Route path="/courses" element={<Courses />} />
            <Route path="/create-course" element={<CreateCourse />} />
          </Route>

          {/* cath all routes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
