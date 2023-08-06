import { useRouter } from "../hooks";

function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => router.push('/about')}>go to About</button>
    </div>
  )
}

export default Home