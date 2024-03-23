"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link"

export default function Page() {

  const [pets, setPets] = useState([]);
  const router = useRouter();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await  fetch('https://learnwebcode.github.io/bootcamp-pet-data/pets.json')
        const result = await response.json();
        setPets(result)
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    }
    fetchData()
  },[]);

  const btnNext = () => {
    router.push('/about')
  }

  return (
    <>
    <div>
      <div className='flex'>
        <button onClick={btnNext} className='bg-blue-700 text-white px-[10px] py-[5px] rounded'>Next</button>
      </div>
      <h3 className="font-bold underline">List of pets</h3>
      <ul className="list-disc list-inside">
        {pets.map((pet, index) => {
          return (
            <li key={index}>
              <Link href={"/pet/" + pet.name.toLowerCase()}>{pet.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
    </>
  );
}
