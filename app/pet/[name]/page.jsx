"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

function getPet(name) {
    return fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
      .then(response => response.json())
      .then(allPets => {
        const pet = allPets.filter(pet => name.toUpperCase() === pet.name.toUpperCase())[0];
        return pet;
      });
  }

export default function Pet({params}) {
    
    const [pet, setPet] = useState([]);
    const router = useRouter();

    useEffect(() => {
        getPet(params.name)
            .then(pet => setPet(pet))
            .catch(error => console.error('Error fetching pet:', error));
    }, [params.name]);

    const btnBack = () => {
        router.back('/')
    }

    return(
        <div>
            <button onClick={btnBack} className="bg-blue-700 text-white rounded p-[10px]">Back</button>
            {pet && (
                <>
                    <h2 className="font-bold text-[32px]">{pet.name}</h2>
                    <h2 className="font-bold text-[24px]">{pet.birthYear}</h2>
                    <h2 className="font-semibold text-[18px]">{pet.description}</h2>
                    <img src={pet.photo} className="rounded-full max-w-full" />
                </>
            )}
        </div>
    )
}