import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/index.jsx";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog-post.jsx";
import ContactUS from "./pages/contact-us";
import AboutUs from "./pages/about-us";
import Error from "./pages/error.jsx";
import "./styles/third-party.css";
import "./styles/style.css";
import "./styles/modal.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(renderProps) => <Home {...renderProps} />}
        />
        <Route
          exact
          path="/blog"
          render={(renderProps) => <Blog {...renderProps} />}
        />

        <Route
          path="/blog/:uid"
          render={(renderProps) => <BlogPost {...renderProps} />}
        />
        <Route
          exact
          path="/about-us"
          render={(renderProps) => <AboutUs {...renderProps} />}
        />
        <Route
          exact
          path="/contact-us"
          render={(renderProps) => <ContactUS {...renderProps} />}
        />
        <Route path="*" render={(renderProps) => <Error {...renderProps} />} />
      </Switch>
    </div>
  );
}

export default App;
