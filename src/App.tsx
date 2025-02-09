import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about/About";
import BlogList from "./components/blog/BlogList";
import BlogPost from "./components/blog/BlogPost";
import Pricing from "./components/pricing/Pricing";
import ContactForm from "./components/contact/ContactForm";
import Newsroom from "./components/newsroom/Newsroom";
import { posts } from "./components/blog/BlogList";
import routes from "tempo-routes";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogList />} />
            <Route
              path="/blog/:id"
              element={
                <BlogPost
                  post={posts.find(
                    (p) => p.id === window.location.pathname.split("/").pop(),
                  )}
                />
              }
            />
            <Route path="/newsroom" element={<Newsroom />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
