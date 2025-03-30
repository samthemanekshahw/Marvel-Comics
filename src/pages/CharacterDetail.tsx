
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Character data (in a real app, this would be fetched from an API)
const charactersData = [
  {
    id: 1,
    name: "Spider-Man",
    realName: "Peter Parker",
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "With great power comes great responsibility. Bitten by a radioactive spider, Peter Parker gained incredible abilities that he uses to protect New York City.",
    longDescription: "Peter Parker was once an ordinary teenager, albeit a brilliant science student, until a fateful visit to a science exhibit where he was bitten by a radioactive spider. This spider's bite granted him incredible spider-like abilities - superhuman strength, agility, and reflexes. He can climb walls, possesses an enhanced 'spider-sense' that warns him of danger, and even developed his own web-shooters to swing between buildings.\n\nAfter initially using his powers for personal gain, the brutal murder of his beloved Uncle Ben - which he could have prevented - taught Peter a harsh lesson about power and responsibility. Adopting the mantra 'With great power comes great responsibility,' he pledged to use his abilities to protect the innocent as the amazing Spider-Man.\n\nOver the years, Spider-Man has battled numerous villains, from the Green Goblin to Doctor Octopus, while balancing his superhero career with his personal life, education, and various jobs. Despite facing countless tragedies and setbacks, his indomitable spirit and unwavering commitment to doing what's right have established him as one of Marvel's most beloved and relatable heroes.",
    powers: ["Wall-crawling", "Super strength", "Spider-sense", "Enhanced agility", "Genius-level intellect", "Web-shooters"],
    abilities: [
      "Superhuman Strength: Can lift approximately 10 tons in optimal conditions",
      "Superhuman Speed & Agility: Can move faster than the human eye can follow",
      "Spider-Sense: Precognitive danger detection",
      "Wall-Crawling: Can adhere to almost any surface",
      "Genius Intellect: Particularly in chemistry and engineering",
      "Expert Inventor: Created his own web-shooters and other gadgets"
    ],
    weaknesses: ["Spider-Sense can be overwhelmed", "Personal responsibilities often conflict with heroic duties", "Ethyl chloride pesticide"],
    debut: "Amazing Fantasy #15 (August 1962)",
    creators: "Stan Lee, Steve Ditko",
    teams: ["Avengers", "Fantastic Four (temporarily)"],
    allies: ["Mary Jane Watson", "Aunt May", "Gwen Stacy", "Harry Osborn", "Iron Man", "Captain America"],
    enemies: ["Green Goblin", "Doctor Octopus", "Venom", "Kingpin", "Mysterio", "Kraven the Hunter"],
    slug: "spider-man"
  },
  {
    id: 2,
    name: "Iron Man",
    realName: "Tony Stark",
    image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "Genius, billionaire, playboy, philanthropist. Tony Stark created a powered suit of armor to escape captivity and now uses his technology to protect the world as Iron Man.",
    longDescription: "Anthony Edward 'Tony' Stark is the brilliant son of industrialist Howard Stark. After inheriting his father's company, Stark Industries, Tony transformed it into one of the world's leading weapons manufacturers. His life changed dramatically when he was kidnapped by terrorists during a weapons demonstration in Afghanistan.\n\nSeriously injured by shrapnel near his heart, Tony was forced to build a weapon for his captors. Instead, with the help of fellow prisoner Dr. Ho Yinsen, he created a powerful electromagnetic chest piece to keep the shrapnel from reaching his heart, along with a crude but effective suit of powered armor. Using this armor, Tony escaped captivity, but not before Yinsen sacrificed himself.\n\nForever changed by this experience, Tony returned to America with a new outlook on life. He ceased weapons production at Stark Industries and secretly refined his armor, creating the sleek, high-tech suit that would become his signature as Iron Man. As both a founding member of the Avengers and the head of a global corporation, Tony has dedicated his genius and resources to protecting the world from various threats, though his arrogance and personal demons have often placed him at odds with his allies.",
    powers: ["Powered armor", "Genius intellect", "Expert engineer", "Flight", "Repulsor technology", "AI integration"],
    abilities: [
      "Genius-Level Intellect: One of the smartest humans on Earth",
      "Master Engineer: Revolutionary designs in numerous technological fields",
      "Expert Businessman: Built Stark Industries into a global powerhouse",
      "Multiple PhDs: In physics, engineering, and other disciplines",
      "Skilled Combatant: Trained by Captain America and others",
      "Strategic Mind: Expert tactician and battlefield commander"
    ],
    weaknesses: ["Alcoholism (historical)", "Dependency on technology", "Arrogance", "PTSD from various traumatic experiences"],
    debut: "Tales of Suspense #39 (March 1963)",
    creators: "Stan Lee, Larry Lieber, Don Heck, Jack Kirby",
    teams: ["Avengers", "Illuminati"],
    allies: ["James Rhodes (War Machine)", "Pepper Potts", "Happy Hogan", "Captain America", "Spider-Man"],
    enemies: ["Mandarin", "Obadiah Stane", "Whiplash", "Justin Hammer", "A.I.M."],
    slug: "iron-man"
  },
  {
    id: 3,
    name: "Captain America",
    realName: "Steve Rogers",
    image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "The First Avenger. Steve Rogers was enhanced to the peak of human perfection by an experimental serum to aid the United States' war effort.",
    longDescription: "Steve Rogers grew up in Depression-era Brooklyn, a frail young man determined to serve his country during World War II despite his numerous health problems. Rejected repeatedly for military service, Rogers was finally accepted into Project: Rebirth, a secret government program designed to create super-soldiers to fight the Nazi threat.\n\nSelected for his courage and moral integrity, Rogers received the Super-Soldier Serum developed by Dr. Abraham Erskine. The serum transformed Rogers' body to the peak of human physical potential. However, Erskine was assassinated immediately after the procedure, taking the secrets of the serum to his grave and leaving Steve as the first and only successful super-soldier of his kind.\n\nGiven the code name Captain America and outfitted with an indestructible shield made of vibranium, Rogers served as a symbol of hope and freedom during the darkest days of WWII. His career was tragically cut short when a mission against Baron Zemo left him frozen in the Arctic ice. Discovered decades later by the Avengers, Captain America emerged from suspended animation to find himself in a world drastically changed, but with threats no less dangerous than those he fought in the 1940s.",
    powers: ["Peak human strength", "Enhanced stamina", "Tactical genius", "Master combatant", "Vibranium shield", "Slowed aging"],
    abilities: [
      "Peak Human Condition: Every aspect of his physiology at perfect human potential",
      "Master Tactician: Considered one of the finest military minds on Earth",
      "Master Combatant: Proficient in virtually all forms of hand-to-hand combat",
      "Shield Mastery: Unparalleled skill with his vibranium shield",
      "Indomitable Will: Near-immunity to mind control and fear",
      "Advanced Military Training: Expert in military operations and warfare"
    ],
    weaknesses: ["Man out of time (cultural adjustment issues)", "Outdated technological knowledge", "Strictly adheres to moral code"],
    debut: "Captain America Comics #1 (March 1941)",
    creators: "Joe Simon, Jack Kirby",
    teams: ["Avengers", "Howling Commandos", "S.H.I.E.L.D."],
    allies: ["Bucky Barnes", "Sam Wilson", "Black Widow", "Iron Man", "Nick Fury"],
    enemies: ["Red Skull", "HYDRA", "Baron Zemo", "Crossbones", "Arnim Zola"],
    slug: "captain-america"
  },
  {
    id: 4,
    name: "Thor",
    realName: "Thor Odinson",
    image: "https://images.unsplash.com/photo-1536896407451-6e3dd950498a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "The God of Thunder. Thor is an Asgardian prince and wielder of the enchanted hammer Mjolnir, which grants him the ability to fly and control lightning.",
    longDescription: "Thor Odinson is the son of Odin, the All-Father and ruler of Asgard, and the Earth goddess Gaea. As an Asgardian prince, Thor was raised with his adopted brother Loki in the warrior culture of Asgard, trained in combat and leadership from a young age. Blessed with incredible strength and durability even by Asgardian standards, Thor was worthy to wield the enchanted hammer Mjolnir, which grants him control over lightning and storms, as well as the power of flight.\n\nInitially arrogant and headstrong, Thor's character was tested when Odin banished him to Earth as punishment for reigniting an ancient war. Stripped of his powers and memories, Thor learned humility and compassion among humans before regaining his status and power. This experience gave him a deep appreciation for Earth and its people, whom he has sworn to protect alongside his Asgardian responsibilities.\n\nAs both a founding member of the Avengers and the rightful heir to the throne of Asgard, Thor bridges the gap between Earth and the cosmic realms. His adventures span the Nine Realms and beyond, facing threats from frost giants and fire demons to intergalactic conquerors and cosmic entities.",
    powers: ["Superhuman strength", "Weather manipulation", "Longevity", "Mjolnir wielding", "Flight", "Inter-dimensional travel"],
    abilities: [
      "Godlike Strength: Among the strongest beings in the Marvel Universe",
      "Weather Control: Manipulation of thunder, lightning, and storms",
      "Near-Immortality: Asgardian physiology grants extremely long life",
      "Allspeak: Innate ability to speak and be understood in all languages",
      "Master Combatant: Over 1,500 years of combat experience",
      "Expert Warrior: Trained in all Asgardian methods of warfare"
    ],
    weaknesses: ["Separation from Mjolnir (historically)", "Pride", "Responsibility to both Earth and Asgard"],
    debut: "Journey into Mystery #83 (August 1962)",
    creators: "Stan Lee, Larry Lieber, Jack Kirby",
    teams: ["Avengers", "Warriors Three"],
    allies: ["Loki (sometimes)", "Sif", "Heimdall", "Warriors Three", "Avengers"],
    enemies: ["Loki (often)", "Hela", "Surtur", "Mangog", "Destroyer", "Dark Elves"],
    slug: "thor"
  },
  {
    id: 5,
    name: "Black Widow",
    realName: "Natasha Romanoff",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "A former KGB assassin trained in the Red Room, Natasha Romanoff defected to S.H.I.E.L.D. and became one of the world's greatest spies and Avengers.",
    longDescription: "Born in Stalingrad (now Volgograd), Russia, Natasha Romanoff was orphaned as a child and recruited by the Soviet intelligence service, the KGB. She was enrolled in the infamous 'Red Room' Academy, a covert Soviet program that trained young girls to become ruthless spies and assassins. There, Natasha was enhanced with a Soviet variant of the Super-Soldier Serum, giving her peak human physical capabilities and an extended lifespan.\n\nAs the Black Widow, Natasha became one of the KGB's most formidable operatives, carrying out numerous missions during the Cold War. Her life changed when she encountered Hawkeye (Clint Barton), who was sent to eliminate her but instead convinced her to defect to S.H.I.E.L.D. Despite initial suspicion, Natasha proved her loyalty and became one of S.H.I.E.L.D.'s most valuable agents.\n\nNatasha's path to redemption eventually led her to join the Avengers, where her exceptional skills in espionage, combat, and tactics have repeatedly proven crucial to the team's success. Despite not having the raw power of many of her teammates, Black Widow's intelligence, adaptability, and uncompromising nature have established her as one of Earth's most effective defenders.",
    powers: ["Expert spy", "Master martial artist", "Weapons expert", "Tactician", "Enhanced physiology", "Widow's Bite gauntlets"],
    abilities: [
      "Master Spy: One of the world's greatest covert operatives",
      "Expert Martial Artist: Mastery of multiple combat styles",
      "Enhanced Physiology: Soviet Super-Soldier treatment grants peak human abilities",
      "Weapons Expert: Proficient with virtually all weapons",
      "Multilingual: Fluent in Russian, English, French, German, Chinese, and many other languages",
      "Psychological Warfare: Expert in manipulation and interrogation"
    ],
    weaknesses: ["No superhuman durability", "Past trauma", "Trust issues from espionage background"],
    debut: "Tales of Suspense #52 (April 1964)",
    creators: "Stan Lee, Don Rico, Don Heck",
    teams: ["Avengers", "S.H.I.E.L.D."],
    allies: ["Hawkeye", "Captain America", "Winter Soldier", "Iron Man", "Nick Fury"],
    enemies: ["Red Room", "Yelena Belova (formerly)", "Winter Soldier (formerly)", "Taskmaster"],
    slug: "black-widow"
  },
  {
    id: 6,
    name: "Hulk",
    realName: "Bruce Banner",
    image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "Exposed to gamma radiation, Dr. Bruce Banner transforms into the Hulk when angered or stressed—a green-skinned behemoth with incredible strength and durability.",
    longDescription: "Dr. Robert Bruce Banner was a brilliant scientist specializing in nuclear physics and gamma radiation. While testing an experimental gamma bomb for the U.S. military, Banner noticed a teenager who had wandered onto the testing field. Rushing to save the young man, Banner was caught in the bomb's detonation, absorbing massive amounts of gamma radiation.\n\nInstead of killing him, the radiation caused Banner to transform into the Hulk, a giant, green-skinned behemoth with incredible strength and durability, whenever he experienced intense emotions—particularly anger. Initially, Banner and the Hulk were distinct personalities, with the Hulk emerging when Banner was stressed or angry, and retreating when calm. Their relationship has evolved over time, from total separation to various forms of integration and cooperation.\n\nBanner has spent years searching for a cure to his condition while evading military forces led by General Thaddeus 'Thunderbolt' Ross, who sees the Hulk as a weapon to be controlled or a monster to be destroyed. Despite the chaos his alter-ego sometimes causes, the Hulk has served as a founding member of the Avengers and has saved the world numerous times, establishing himself as one of the most powerful beings on Earth.",
    powers: ["Superhuman strength", "Invulnerability", "Regeneration", "Increased strength with anger", "Genius intellect (Banner)"],
    abilities: [
      "Limitless Strength: Increases with anger; upper limits unknown",
      "Invulnerability: Nearly impervious to physical harm",
      "Regenerative Healing: Can recover from almost any injury",
      "Genius-Level Intellect: Banner is one of Earth's foremost experts in gamma radiation",
      "Adaptation: Body adapts to survive in hostile environments",
      "Multiple Personalities: Different Hulk personas with varying attributes"
    ],
    weaknesses: ["Loss of Banner's intelligence in some Hulk forms", "Possibility of causing unintended destruction", "Psychological trauma"],
    debut: "The Incredible Hulk #1 (May 1962)",
    creators: "Stan Lee, Jack Kirby",
    teams: ["Avengers", "Defenders"],
    allies: ["Betty Ross", "Rick Jones", "She-Hulk", "Thor", "Iron Man"],
    enemies: ["Abomination", "General Ross/Red Hulk", "Leader", "Maestro", "Wendigo"],
    slug: "hulk"
  },
  {
    id: 7,
    name: "Black Panther",
    realName: "T'Challa",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "King of Wakanda and protector of the advanced African nation. T'Challa is enhanced by the Heart-Shaped Herb and wears a vibranium suit as the Black Panther.",
    longDescription: "T'Challa is the king of Wakanda, a highly advanced African nation hidden from the world for centuries. As the son of King T'Chaka, T'Challa was groomed from birth to someday assume the throne and the mantle of the Black Panther—the ceremonial protector of Wakanda. When his father was assassinated during a diplomatic mission, T'Challa ascended to the throne earlier than expected.\n\nAs part of the coronation ritual, T'Challa consumed the Heart-Shaped Herb, a plant mutated by exposure to vibranium—the rare metal that is Wakanda's greatest resource. The herb enhanced his physical abilities to superhuman levels. Combined with his extensive training in various martial arts, strategic genius, and access to Wakanda's advanced technology, T'Challa became one of the world's most formidable warriors and leaders.\n\nAs both king and Black Panther, T'Challa faces the dual challenge of leading his technologically superior nation while protecting it from outside threats. His decision to gradually reveal Wakanda to the world marked a new era for his country and himself, as he now balances his responsibilities to his nation with his role as an Avenger and global superhero.",
    powers: ["Enhanced strength", "Enhanced speed", "Vibranium suit", "Genius intellect", "Heart-Shaped Herb enhancement", "Wakandan technology"],
    abilities: [
      "Enhanced Physiology: Heart-Shaped Herb grants peak human abilities",
      "Master Martial Artist: Expert in various African and global fighting styles",
      "Genius-Level Intellect: Brilliant scientist, strategist, and politician",
      "Vibranium Suit: Nearly indestructible armor with energy-absorption capabilities",
      "Diplomatic Immunity: Status as head of state",
      "Advanced Technology: Access to Wakanda's futuristic technology"
    ],
    weaknesses: ["Responsibilities as king sometimes conflict with heroic duties", "Protective of Wakandan secrets and technology"],
    debut: "Fantastic Four #52 (July 1966)",
    creators: "Stan Lee, Jack Kirby",
    teams: ["Avengers", "Illuminati"],
    allies: ["Shuri", "Okoye", "Nakia", "Storm (formerly married)", "Avengers"],
    enemies: ["Killmonger", "Klaw", "Man-Ape", "Namor (sometimes)", "Doctor Doom"],
    slug: "black-panther"
  },
  {
    id: 8,
    name: "Doctor Strange",
    realName: "Stephen Strange",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "Once a brilliant but arrogant surgeon, Stephen Strange is now the Sorcerer Supreme, protecting the Earth from magical and mystical threats.",
    longDescription: "Dr. Stephen Strange was once a brilliant but arrogant neurosurgeon whose career was destroyed when a car accident severely damaged the nerves in his hands. Desperate to regain his surgical abilities, Strange exhausted his fortune seeking out experimental treatments, all to no avail. Having hit rock bottom, he followed rumors of a mystical healer called the Ancient One in the Himalayas.\n\nThough the Ancient One refused to heal Strange's hands, he instead offered to teach him the mystic arts. Initially reluctant, Strange's perspective changed when he discovered the Ancient One's disciple, Baron Mordo, plotting against his master. After warning the Ancient One and thwarting Mordo's scheme, Strange began his training in earnest, discovering an aptitude for magic that surpassed even his medical talents.\n\nFollowing the Ancient One's death, Strange inherited the title of Sorcerer Supreme—Earth's primary magical defender against interdimensional threats. Based in his Sanctum Sanctorum in New York's Greenwich Village, Strange uses his vast magical knowledge and artifacts to protect reality itself from beings like Dormammu, Nightmare, and Shuma-Gorath, while also serving alongside the Avengers and Defenders when world-threatening crises emerge.",
    powers: ["Magic", "Astral projection", "Dimensional travel", "Longevity", "Mystic artifacts", "Eldritch manipulation"],
    abilities: [
      "Mastery of Mystic Arts: One of Earth's most powerful sorcerers",
      "Time Manipulation: Limited ability to affect time flow",
      "Dimensional Travel: Can traverse various planes of reality",
      "Former Medical Expertise: Renowned neurosurgeon before career-ending injury",
      "Photographic Memory: Perfect recall abilities",
      "Magical Artifacts: Access to powerful mystical tools like the Eye of Agamotto and Cloak of Levitation"
    ],
    weaknesses: ["Physical vulnerability when separated from magical artifacts", "Magic requires specific gestures (limited by hand injuries)", "Dependency on mystical energy sources"],
    debut: "Strange Tales #110 (July 1963)",
    creators: "Stan Lee, Steve Ditko",
    teams: ["Avengers", "Defenders", "Illuminati"],
    allies: ["Wong", "Clea", "Ancient One", "Brother Voodoo", "Scarlet Witch"],
    enemies: ["Dormammu", "Baron Mordo", "Nightmare", "Shuma-Gorath", "Mephisto"],
    slug: "doctor-strange"
  },
];

const CharacterDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the character by slug
  const character = charactersData.find(char => char.slug === slug);
  
  useEffect(() => {
    // Redirect to 404 if character not found
    if (!character && slug) {
      navigate("/not-found");
    }
    
    // Scroll to top when character loads
    window.scrollTo(0, 0);
  }, [character, slug, navigate]);
  
  if (!character) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Header */}
        <div className="relative h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${character.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-marvel-dark via-marvel-dark/70 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link to="/characters" className="inline-flex items-center text-white mb-4 hover:text-marvel-red transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Characters
            </Link>
            
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl font-comic text-white mb-2 leading-tight drop-shadow-lg">
                {character.name}
              </h1>
              <p className="text-xl text-white/90 mb-6">{character.realName}</p>
              <p className="text-lg text-white/80 mb-8 max-w-2xl">
                {character.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {character.powers.slice(0, 4).map((power, index) => (
                  <span key={index} className="px-3 py-1 bg-marvel-red/80 text-white rounded-full text-sm">
                    {power}
                  </span>
                ))}
                {character.powers.length > 4 && (
                  <span className="px-3 py-1 bg-marvel-red/80 text-white rounded-full text-sm">
                    +{character.powers.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Character Details */}
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <section className="mb-12">
                <h2 className="text-3xl font-comic text-marvel-red mb-6">BIOGRAPHY</h2>
                <div className="space-y-4 text-lg">
                  {character.longDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-3xl font-comic text-marvel-red mb-6">POWERS & ABILITIES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-comic mb-4">Abilities</h3>
                    <ul className="space-y-3">
                      {character.abilities.map((ability, index) => (
                        <li key={index} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-marvel-red mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{ability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-comic mb-4">Weaknesses</h3>
                    <ul className="space-y-3">
                      {character.weaknesses.map((weakness, index) => (
                        <li key={index} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span>{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-3xl font-comic text-marvel-red mb-6">RELATIONSHIPS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-comic mb-4">Allies</h3>
                    <div className="flex flex-wrap gap-2">
                      {character.allies.map((ally, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                          {ally}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-comic mb-4">Enemies</h3>
                    <div className="flex flex-wrap gap-2">
                      {character.enemies.map((enemy, index) => (
                        <span key={index} className="px-3 py-1 bg-red-100 text-red-800 rounded-full">
                          {enemy}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-3xl font-comic text-marvel-red mb-6">FEATURED COMICS</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Placeholder comic covers */}
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="comic-card">
                      <div className="aspect-[2/3] bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={`https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=450&q=80`} 
                          alt="Comic Cover" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-2">
                        <h4 className="font-medium">{character.name} #{item}</h4>
                        <p className="text-sm text-gray-500">2023</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="glass-card p-6 mb-8 sticky top-24">
                <h3 className="font-comic text-2xl text-marvel-red mb-6">CHARACTER PROFILE</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-700">Real Name</h4>
                    <p>{character.realName}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-700">First Appearance</h4>
                    <p>{character.debut}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-700">Created By</h4>
                    <p>{character.creators}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-700">Teams</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {character.teams.map((team, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 rounded text-sm">
                          {team}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-comic text-xl text-marvel-red mb-4">RELATED CHARACTERS</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {charactersData
                      .filter(char => char.id !== character.id)
                      .slice(0, 4)
                      .map((relatedChar) => (
                        <Link key={relatedChar.id} to={`/characters/${relatedChar.slug}`} className="block group">
                          <div className="relative rounded-lg overflow-hidden aspect-square">
                            <img 
                              src={relatedChar.image} 
                              alt={relatedChar.name} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                              <p className="text-white font-medium">{relatedChar.name}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CharacterDetail;
