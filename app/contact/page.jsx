"use client";
import { useRouter } from "next/navigation"

export default function Page() {

  const router = useRouter();

  const btnBack = () => {
    router.back('/')
  }
    return (
      <div>
        <button onClick={btnBack} className="bg-blue-700 text-white rounded px-[10px] py-[3px]">Back</button>
        <h2>Contact Us</h2>
        <p>Welcome to the contact page. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, ut quidem cumque necessitatibus accusantium asperiores. Animi, quas pariatur nesciunt atque, consequatur ea molestiae quod voluptas, dolor inventore impedit! Voluptates, optio.</p>
      </div>
    )
  }