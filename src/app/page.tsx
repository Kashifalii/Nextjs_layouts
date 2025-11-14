const getPostData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const MainPage = async () => {
  const posts = await getPostData();

  return (
    <ul>
      {posts.map((post: any, index: number) => (
        <li key={index}>{post.title}</li>
      ))}
    </ul>
  );
};

export default MainPage;
