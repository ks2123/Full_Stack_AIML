import AnimalCard from "./Card";
const animals = [
  {
    id: 1,
    name: "Bengal Tiger",
    speed: "65 km/h",
    diet: "Carnivore",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "African Elephant",
    speed: "40 km/h",
    diet: "Herbivore",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Cheetah",
    speed: "120 km/h",
    diet: "Carnivore",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMjTG61Ek3rlEHfp1RXGnBfiZa1W70jUd98LLZcqZsA&s=10"
  },
  {
    id: 4,
    name: "Golden Eagle",
    speed: "320 km/h",
    diet: "Carnivore",
    image: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    name: "Giant Panda",
    speed: "32 km/h",
    diet: "Herbivore",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjJ4kJip8-xreDrC44Gg4aDFG7YFTke7q6oHZNGR1ow&s"
  },
  {
    id: 6,
    name: "Snow Leopard",
    speed: "64 km/h",
    diet: "Carnivore",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJimWJeYiuxhnDcMWSLGRoZByHti83ABsoXGBunCeQBA&s=10"
  },
  {
    id: 7,
    name: "Red Kangaroo",
    speed: "70 km/h",
    diet: "Herbivore",
    image: "https://media.istockphoto.com/id/1785169453/photo/red-kangaroo.jpg?s=612x612&w=0&k=20&c=2_AfUfxJRLrUjoc5OrqU7GIKVa3zsg-hEnDati1PGis="
  },
  {
    id: 8,
    name: "Gray Wolf",
    speed: "60 km/h",
    diet: "Carnivore",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3V1iuP1i0V8JFEYks-EQcBKRPDaMgUHGMYr2N-IOug&s=10"
  },
  {
    id: 9,
    name: "Giraffe",
    speed: "55 km/h",
    diet: "Herbivore",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh82t_SDl40HTAnjUhIGV_5EZrITFg9BoZERUeHQFemA&s=10"
  },
  {
    id: 10,
    name: "Chimpanzee",
    speed: "40 km/h",
    diet: "Omnivore",
    image: "https://1.bp.blogspot.com/_EaclqErLrlE/SwnhVlzTH0I/AAAAAAAAAvM/Dhncp0TJ3bo/s1600/monkey-flipping-off-middle-finger-funny-comedy-animal-chimpze.jpg"
  }
];
function Animal_information() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      padding: "20px",
      minHeight: "100vh"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", letterSpacing: "1px" }}>
        Animal Information
      </h1>

      {/* Yahan style add kiya hai: Flex + Wrap + Center */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {animals.map((item) => (
          <AnimalCard
            key={item.id}
            name={item.name}
            speed={item.speed}
            diet={item.diet}
            image={item.image}
          />
        ))}
      </div>

    </div>
  );
}

export default Animal_information;