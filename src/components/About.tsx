import { useRouter } from "./Router"

function About() {
  const router = useRouter();
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => router.push('/')}>go to Home</button>
    </div>
  )
}

export default About