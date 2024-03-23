"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const btnBack = () => {
    router.back("/");
  };

  const btnNext = () => {
    router.push("/contact");
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <button className="bg-blue-700 text-white px-[10px] rounded" onClick={btnBack}>Back</button>
        <button className="bg-blue-700 text-white px-[10px] rounded" onClick={btnNext}>Next</button>
      </div>
      <h2>About Us</h2>
      <p>
        This is the about page. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Alias, ut quidem cumque necessitatibus accusantium
        asperiores. Animi, quas pariatur nesciunt atque, consequatur ea
        molestiae quod voluptas, dolor inventore impedit! Voluptates, optio.
      </p>
    </div>
  );
}
