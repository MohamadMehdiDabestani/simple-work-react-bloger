import EnvironmentBlog from "./EnvironmentBlog/EnvironmentBlog";
import LastBlogPost from "./LastBlogPost/LastBlogPost";
import TopPages from "./TopPages/TopPages";
import { Helmet } from 'react-helmet';

const Main = () => {
  return (
    <main>
      <Helmet>
        <title>
          بلاگر - صفه ی اصلی
        </title>
      </Helmet>
      <EnvironmentBlog />
      <LastBlogPost />
      <TopPages />
    </main>
  );
};

export default Main;
