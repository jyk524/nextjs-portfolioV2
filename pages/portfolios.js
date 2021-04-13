import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";

const Portfolios = ({ posts }) => {
  console.log(posts);
  return (
    <BaseLayout>
      <h1>Portfolios h1</h1>
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (e) {
    console.error(e);
  }

  return { posts: posts.slice(0, 10) };
};

export default Portfolios;
