// This file contains the data for all blog articles

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  content: string;
  author: string;
  tags: string[];
}

// Helper function to generate a slug from a title
const slugify = (text: string) => {
  // Add null check before calling toLowerCase
  if (!text) return '';
  
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

// Categories for blog posts
const categories = [
  "Character Analysis", 
  "Comic Reviews", 
  "Story Arcs", 
  "Industry News",
  "Movie Connections",
  "Collectibles",
  "Behind the Scenes",
  "History",
  "Fan Theories",
  "Writer Spotlight",
  "Artist Showcase",
  "Multiverse Exploration",
  "Villain Spotlight",
  "Crossover Events",
  "Origin Stories",
  "Powers Explained",
  "Costume Evolution",
  "Team Dynamics",
  "Comic Technology",
  "Epic Battles"
];

// Authors for blog posts
const authors = [
  "Peter Parker",
  "Tony Stark",
  "Natasha Romanoff",
  "Bruce Banner",
  "Wanda Maximoff",
  "Carol Danvers",
  "T'Challa",
  "Stephen Strange",
  "Steve Rogers",
  "Scott Lang",
  "Clint Barton",
  "Sam Wilson",
  "Bucky Barnes",
  "Hope Van Dyne",
  "Matt Murdock",
  "Jessica Jones"
];

// Random date generator for the past 2 years
const generateRandomDate = () => {
  const start = new Date(2022, 0, 1);
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  
  return randomDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Image URLs
const imageUrls = [
  "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1624213111452-35e8d3d5cc18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1559535332-db9971090158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1536896407451-6e3dd950498a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1580130601254-05fa235abeab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1583309219338-a582f1f9ca6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1569139476647-433c80215e7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1553545985-1e0d8781d5db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1606489129187-1eee19a0a103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
];

// Blog post titles
const blogTitles = [
  "The Cosmic Significance of Marvel's Eternity Entity",
  "Exploring Doctor Octopus: Villain to Hero and Back Again",
  "The Intricate Timeline of Marvel's Secret Wars",
  "From Soldier to Legend: The Evolution of Winter Soldier",
  "Psychological Analysis of Bruce Banner's Multiple Hulk Personas",
  "The Dynamic Between Wolverine and Cyclops Throughout X-Men History",
  "Celestials and Their Impact on Marvel's Evolution Narrative",
  "The Legacy of T'Chaka and the Black Panther Lineage",
  "Carol Danvers: From Ms. Marvel to Captain Marvel",
  "The Technological Innovations of Wakanda in Marvel Comics",
  "Death and Resurrection in Comics: A Marvel Tradition",
  "The Lasting Cultural Impact of Black Panther on Comic Representation",
  "The Mystical Realms Within Doctor Strange's Universe",
  "Spider-Man's Costume: From Homemade to Stark Tech",
  "Taskmaster's Ability: The Science Behind Perfect Mimicry",
  "The Psychology of Magneto's Extremism",
  "The Women of Wakanda: Warriors, Scientists, and Leaders",
  "The Many Identities of Hawkeye Through Marvel History",
  "Tony Stark's PTSD in Comics: A Character Study",
  "The Forgotten Heroes of Marvel: Characters That Deserve Spotlight",
  "The Evolution of Marvel's Logo and Brand Identity",
  "Daredevil's Enhanced Senses: Science vs. Fiction",
  "Alternate Universe Spider-Men: From Miles Morales to Spider-Gwen",
  "The Moral Philosophy of Captain America",
  "Marvel's Atlantis: The Hidden Underwater Kingdom",
  "The Shifting Morality of Venom as Anti-Hero",
  "The Human Side of Vision: Exploring His Emotional Development",
  "Comparison of Thor in Norse Mythology vs. Marvel Comics",
  "Professor X and Magneto: Two Sides of the Same Coin",
  "The Comic Book History of Shang-Chi: Master of Kung Fu",
  "The Psychology Behind Superhero Secret Identities",
  "Behind the Scenes: Creating Iconic Marvel Sound Effects",
  "The Role of Mystique in Mutant Politics and X-Men Lore",
  "Exploring the Quantum Realm Through Scott Lang's Experiences",
  "Moon Knight's Multiple Personalities: Comic vs. Clinical Representation",
  "The Artistry of Jack Kirby: Defining Marvel's Visual Language",
  "The Moral Ambiguity of Bucky Barnes' Winter Soldier Era",
  "How Nova Corps Differs from Green Lantern Corps: A Comparative Analysis",
  "The Philosophy of Destruction Behind Galactus",
  "Evolution of Hawkeye's Archery Techniques in Comics",
  "The Sorcerer Supreme Lineage Before Doctor Strange",
  "War Machine: More Than Iron Man's Sidekick",
  "The Military Career of Carol Danvers Before Becoming Captain Marvel",
  "Differences Between Comic Book and MCU Thanos",
  "The Role of The Watcher in Marvel's Multiverse",
  "The Cultural Blend in Shang-Chi's Characterization",
  "The Technology Behind Ghost's Phasing Abilities",
  "Exploring the Time Variance Authority's Purpose and Methods",
  "The Physics of Quicksilver's Super Speed",
  "The Comic Book History of America Chavez",
  "The Evolutionary Biology of The Beast's Transformations",
  "Howard Stark's Legacy in Marvel Comics vs. MCU",
  "Kingpin: The Perfect Marvel Urban Villain",
  "Marvel's Supernatural Side: Ghost Rider and Blade's Universe",
  "The Ethics of Xavier's Psychic Abilities and Privacy",
  "The Technology of Pym Particles: More Than Just Shrinking",
  "The Cultural Impact of Stan Lee's Cameos",
  "The Evolution of Deadpool's Fourth Wall Breaking",
  "Comparing Different Artists' Takes on The Hulk",
  "The Comics Code Authority's Effect on Marvel Stories",
  "The Power Dynamics in Guardians of the Galaxy Team",
  "How Falcon Earned the Captain America Mantle",
  "The Role of Hydra in Captain America's Narrative",
  "Comic Book Analysis: The Eloquence of Silver Surfer's Dialogue",
  "Natasha Romanoff's Complicated Relationship with Her Past",
  "Cloak and Dagger: Marvel's Exploration of Light and Darkness",
  "The Social Commentary in X-Men's Discrimination Storylines",
  "Hela's Role in Norse Mythology Compared to Marvel's Interpretation",
  "The Symbolism Behind Captain America's Shield",
  "The Technology of Iron Man's Arc Reactor",
  "Sam Wilson's Character Development from Sidekick to Leader",
  "The Scientific Plausibility of Bruce Banner's Gamma Transformation",
  "Wanda Maximoff's Journey from Villain to Avenger",
  "The Various Incarnations of Marvel's Ghost Rider",
  "Marvel's What If...? Comics: The Best Alternate Realities",
  "The Strategy Behind Nick Fury's Avengers Initiative",
  "The Comic Origins of Marvel's Illuminati",
  "The Portrayal of Artificial Intelligence in Marvel's Ultron",
  "Exploring the Diversity in Marvel's Young Avengers",
  "The Evolution of Jessica Jones as a Private Investigator",
  "The Philosophy of The Ancient One in Doctor Strange",
  "The Scientific Theories About How Mjolnir's Worthiness Works",
  "Blade and the Evolution of Vampire Mythology in Marvel",
  "The Sociopolitical Themes in Captain America: Civil War Comics",
  "Analysis of Daredevil's Enhanced Senses and Fighting Style",
  "The Family Dynamics of the Fantastic Four",
  "The Mutation Science Behind the X-Gene in X-Men",
  "Exploring the Comic Origins of She-Hulk",
  "The Quantum Physics Behind Time Travel in Marvel Comics",
  "Spider-Man's Rogue Gallery: Psychological Analysis",
  "The Ethics of Professor X's Dream vs. Magneto's Revolution",
  "The Cultural Significance of Storm as an African Goddess",
  "The Neuroscience of Telepathy in Marvel's Universe",
  "The Art of Comic Book Lettering in Classic Marvel Issues",
  "The Evolution of Black Widow's Character in Solo Comics",
  "The Spirituality in Doctor Strange's Magical Universe",
  "The Leadership Styles of Different Avengers Team Leaders",
  "Comparing Moon Knight's Multiple Personalities Through Different Comic Runs",
  "The Physics Defying Reality of Pym Particles",
  "How J. Jonah Jameson Evolved as a Character Beyond Spider-Man's Nemesis",
  "The Technological Advancements in Shuri's Lab",
  "The Comic Book History of the Ten Rings Organization",
  "The Sound Design Choices in Adapting Marvel Comics to Screen",
  "The God Butcher: Exploring Gorr's Vendetta Against Gods",
  "The Various Symbiotes Beyond Venom and Carnage",
  "The Political Landscape of Marvel's Fictional Countries",
  "How America Chavez Represents the Modern Superhero",
  "The Science of Extremis in Iron Man Comics",
  "The Norse Prophecy of Ragnarok vs. Marvel's Interpretation",
  "The Portrayal of PTSD in Marvel's War Veterans",
  "The Visual Evolution of Spider-Man's Web Shooters",
  "The Comic Book Origins of Agatha Harkness",
  "The Role of The Hand in Daredevil and Iron Fist Comics",
  "The Technological Evolution of Falcon's Wings",
  "The Portrayal of Deaf Culture Through Echo in Marvel Comics",
  "The Influence of Jack Kirby on Cosmic Marvel",
  "The Evolution of Mysterio's Illusion Technology",
  "Marvel's Secret Invasion: Comic Parallels to Xenophobia",
  "The Evolution of Spider-Man's Spider-Sense in Comics",
  "The Mystical Significance of Kamar-Taj in Doctor Strange Lore",
  "The Psychology of Bruce Banner's Relationship with Hulk",
  "The Historical Context of Captain America's Creation During WWII",
  "The Portrayal of Vision's Humanity Question",
  "The Evolution of War Machine's Armor Through Comics",
  "The Different Versions of Loki Throughout Marvel's Multiverse",
  "The Role of The Ravagers in Cosmic Marvel",
  "Wong's Evolution from Sidekick to Vital Character",
  "The Literary Influences on Thor's Character and Dialogue",
  "The Science Behind Iceman's Thermodynamic Abilities",
  "Exploring the Dark Dimension's Rules and Physics",
  "The Psychology Behind Norman Osborn's Green Goblin Persona",
  "The Evolution of Marvel's Hellfire Club",
  "The Technological Advancements in Vulture's Flight Suit",
  "The Philosophy of Immortality in Marvel's Universe",
  "Comparing Different Versions of Jean Grey's Phoenix",
  "The LGBTQ+ Representation Evolution in Marvel Comics",
  "The Scientific Possibilities of Domino's Luck Powers",
  "Dissecting the Humor Elements in Spider-Man's Character",
  "The Portrayal of Mental Health in Moon Knight Comics",
  "The Evolution of Nick Fury from WWII Soldier to Spy Master",
  "The Science of Vibranium: Marvel's Wonder Metal",
  "The Role of Music in Guardians of the Galaxy's Narrative",
  "The Evolution of Gambit's Kinetic Energy Powers",
  "The Mystical Connection Between Scarlet Witch and Chaos Magic",
  "The Technological Progress in Ironheart's Armor Design",
  "The Legacy Characters in Marvel: Passing the Heroic Mantle",
  "The Cultural Inspirations Behind Shang-Chi's Ten Rings",
  "The Physics of Storm's Weather Manipulation",
  "The Ethical Dilemmas in Jessica Jones's Investigations",
  "The Evolution of Hawkeye's Trick Arrows",
  "The Symbolism of Colors in Marvel Character Designs",
  "The Evolution of X-23 from Weapon to Laura Kinney",
  "The Comic Book History of Namor: First Marvel Mutant",
  "The Role of Cosmic Entities in Marvel's Universe Structure",
  "The Scientific Theory Behind Invisible Woman's Powers",
  "The Evolution of Wolverine's Healing Factor in Comics",
  "The Role of The Grandmaster in Marvel's Cosmic Hierarchy",
  "The Philosophical Themes in Silver Surfer's Cosmic Journeys",
  "The Evolution of Bucky Barnes from Sidekick to Assassin to Hero",
  "The Scientific Explanations for Nightcrawler's Teleportation",
  "The Cultural Impact of Ta-Nehisi Coates' Black Panther Run",
  "The Various Hosts of the Phoenix Force Throughout X-Men History",
  "The Evolution of Marvel's Mystical Arts",
  "The Psychology of Wade Wilson: Behind Deadpool's Humor",
  "The Ethical Questions Raised by X-Men's Cerebro",
  "The Evolution of Marvel's Approach to Mental Health in Comics",
  "The Science of Colossus's Organic Steel Transformation",
  "The Role of Ancient Alien Civilizations in Marvel Lore",
  "The Evolution of Kate Bishop in Hawkeye's Legacy",
  "The Technical Evolution of Comic Book Coloring in Marvel",
  "The Impact of Alex Ross's Realistic Art Style on Marvel",
  "The Physics Behind Cyclops's Optic Blasts",
  "The Historical Accuracy in Captain America's World War II Stories",
  "The Technological Advancements in Black Panther's Vibranium Suit",
  "The Science of Telepathic Abilities in Marvel's Mutants",
  "The Evolution of Scarlet Witch's Reality Warping Powers",
  "The Role of Yelena Belova in the Black Widow Legacy",
  "The Portrayal of Artificial Intelligence from Ultron to Vision",
  "The Comic Book History of Kang the Conqueror",
  "The Evolution of Professor X's Dream for Mutant-Human Relations",
  "The Science Behind Apocalypse's Molecular Manipulation",
  "The Role of Time Travel in Marvel's Multiverse Navigation",
  "The Evolution of Ant-Man's Size-Changing Abilities",
  "The Psychology of Tony Stark's Inventive Mind",
  "The Various Magical Artifacts in Doctor Strange's Universe",
  "The Cultural Representation in Ms. Marvel's Pakistani Heritage",
  "The Science of Bruce Banner's Gamma Radiation Exposure",
  "The Evolution of Captain Marvel from Mar-Vell to Carol Danvers",
  "The Complex Morality of Magneto Through Different Comic Eras",
  "The Technological Advancements in Iron Man's HUD Interface",
  "The Role of the Living Tribunal in Marvel's Cosmic Balance",
  "The Evolution of Daredevil's Radar Sense Explanation",
  "The Philosophical Underpinnings of Doctor Doom's Character",
  "The Scientific Theory Behind Kitty Pryde's Phasing Ability"
];

// Generate content for a blog post
const generateContent = (title: string, category: string) => {
  return `
    <h1>${title}</h1>
    
    <p>In the vast universe of Marvel Comics, few stories resonate with readers quite like those featuring our beloved superheroes facing their greatest challenges. This in-depth exploration delves into the intricate details, hidden meanings, and lasting impact of one of Marvel's most compelling narratives.</p>
    
    <h2>The Origins</h2>
    
    <p>Every great story begins somewhere, and this one is no exception. The creative minds behind this iconic tale drew inspiration from various sources, combining elements of classic mythology, contemporary social issues, and visionary science fiction to craft something truly unique in the comic book landscape.</p>
    
    <p>The editorial direction at Marvel during this period encouraged writers and artists to push boundaries, resulting in a bold approach that would forever change how these characters were perceived by fans worldwide.</p>
    
    <h3>Key Creative Figures</h3>
    
    <ul>
      <li>The visionary writer who conceived the central conflict</li>
      <li>The innovative artist whose distinctive style defined the visual language</li>
      <li>The forward-thinking editor who allowed creative risks</li>
      <li>The colorist whose palette choices enhanced the emotional impact</li>
    </ul>
    
    <p>Together, this dream team collaborated to produce what many consider to be among the greatest comic book stories ever told, proving that sequential art could tackle complex themes with sophistication and nuance.</p>
    
    <div class="key-note">
      <h4>Key Note:</h4>
      <p>This storyline emerged during a transformative period in comic book history when the medium was gaining respect as a legitimate form of literature and art, capable of addressing profound themes and complex character development.</p>
    </div>
    
    <h2>Character Development</h2>
    
    <p>At its heart, this story succeeds because it fundamentally understands its characters. The hero's journey reflects universal struggles with identity, power, and responsibility—themes that resonate with readers of all backgrounds. Through careful character development, the creative team ensures that every action and decision feels authentic to the established personalities while allowing room for growth and surprising revelations.</p>
    
    <h3>Personal Conflicts</h3>
    
    <p>The internal struggles of our protagonist provide the emotional core of the narrative. We witness moments of doubt, fear, and redemption that humanize these larger-than-life figures. By focusing on these personal conflicts, the story achieves a level of intimacy that contrasts beautifully with the cosmic scale of the external threats.</p>
    
    <ul>
      <li>The hero's crisis of faith in their own abilities</li>
      <li>Complicated relationships with allies and mentors</li>
      <li>Ethical dilemmas that challenge core beliefs</li>
      <li>The burden of knowledge and responsibility</li>
    </ul>
    
    <h2>Artistic Innovation</h2>
    
    <p>The visual storytelling in this landmark work demonstrates a masterful understanding of comic book language. Panel layouts create rhythm and tension, while dramatic perspective choices heighten key moments. The artists employ a range of techniques to convey the scale of the conflict—from sprawling splash pages that showcase epic battles to intimate close-ups that capture subtle emotional reactions.</p>
    
    <div class="key-note">
      <h4>Key Note:</h4>
      <p>The distinctive color palette used throughout the story serves as a visual metaphor for the emotional journey, shifting from bright, primary colors during hopeful moments to darker, more muted tones as the situation becomes increasingly dire.</p>
    </div>
    
    <h2>Cultural Impact</h2>
    
    <p>Beyond its significance within Marvel continuity, this story transcended its medium to influence broader popular culture. Elements from this narrative have appeared in film adaptations, television series, video games, and merchandise, demonstrating its enduring appeal across generations of fans.</p>
    
    <p>Scholars of comic book history frequently cite this storyline when discussing the medium's artistic legitimacy, analyzing its sophisticated storytelling techniques and thematic depth. Fan discussions continue to debate and celebrate its contributions to the Marvel mythology decades after its initial publication.</p>
    
    <h3>Lasting Legacy</h3>
    
    <ul>
      <li>Established new directions for multiple character arcs</li>
      <li>Introduced concepts that became fundamental to the Marvel Universe</li>
      <li>Set new standards for artistic and narrative ambition in superhero comics</li>
      <li>Created memorable moments that continue to be referenced and homaged</li>
    </ul>
    
    <h2>Symbolism and Themes</h2>
    
    <p>Beneath the surface of superhuman conflict lies a rich tapestry of symbolic meaning. The creative team embedded thoughtful commentary on relevant social issues while exploring timeless philosophical questions about human nature, power, responsibility, sacrifice, and redemption.</p>
    
    <p>The antagonist's motivations, while ultimately misguided, stem from understandable concerns and experiences, creating a morally complex narrative that resists simple categorizations of good and evil. This nuanced approach elevates the story beyond typical superhero fare into a meaningful exploration of ethical complexity.</p>
    
    <div class="key-note">
      <h4>Key Note:</h4>
      <p>The recurring visual motifs throughout the story—particularly the symbolic use of light and shadow—reinforce the central theme of finding hope in darkness and maintaining moral clarity in complex situations.</p>
    </div>
    
    <h2>Critical Reception</h2>
    
    <p>Upon its release, this storyline was immediately recognized for its ambition and execution. Critics praised its seamless blend of character-driven drama with high-concept superhero action, noting how it balanced intimate personal moments with universe-shaking events.</p>
    
    <p>Awards and accolades followed, cementing its status as an essential text in comic book history. Fan reactions were similarly enthusiastic, with readers appreciating the emotional depth and narrative complexity that respected their intelligence and investment in these beloved characters.</p>
    
    <h3>Industry Influence</h3>
    
    <p>The success of this storyline influenced editorial direction at Marvel and beyond, encouraging more sophisticated approaches to superhero storytelling throughout the industry. Subsequent creative teams have acknowledged its impact on their work, often paying homage to its innovations while building upon its thematic foundations.</p>
    
    <h2>Conclusion</h2>
    
    <p>Decades after its publication, this story remains a towering achievement in superhero comics—a perfect synthesis of compelling character work, innovative artistry, and thought-provoking themes. It demonstrates the unique potential of the comic book medium to tell stories of scope and significance that resonate across generations.</p>
    
    <p>For longtime Marvel fans, it represents a high-water mark in the company's creative history. For newcomers, it offers an accessible entry point into the rich tapestry of interconnected narratives that define the Marvel Universe. Either way, its power to inspire, entertain, and move readers ensures its place in the pantheon of great American storytelling.</p>
  `;
};

// Function to generate all blog posts
const generateBlogPosts = (): BlogPost[] => {
  const posts: BlogPost[] = [];
  
  for (let i = 0; i < blogTitles.length; i++) {
    // Safety check to make sure we have a valid title
    if (!blogTitles[i]) continue;
    
    const title = blogTitles[i];
    const slug = slugify(title);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const author = authors[Math.floor(Math.random() * authors.length)];
    const date = generateRandomDate();
    const image = imageUrls[i % imageUrls.length];
    const tags = [
      category.toLowerCase().replace(' ', '-'),
      'marvel',
      'comics',
      title.split(' ')[0].toLowerCase(),
      title.split(' ')[1]?.toLowerCase() || 'superhero',
    ];
    
    posts.push({
      id: i + 1,
      title,
      slug,
      excerpt: `An in-depth exploration of ${title.toLowerCase()}, examining the character's development, key storylines, and cultural impact in Marvel comics and beyond.`,
      image,
      category,
      date,
      content: generateContent(title, category),
      author,
      tags
    });
  }
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Export the generated blog posts
export const blogPosts: BlogPost[] = generateBlogPosts();

// Function to get a blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Function to get blog posts by category
export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

// Function to get recent blog posts
export const getRecentBlogPosts = (count: number = 6): BlogPost[] => {
  return blogPosts.slice(0, count);
};

// Function to get popular categories with counts
export const getPopularCategories = (): {name: string, count: number}[] => {
  const categoryCounts: Record<string, number> = {};
  
  blogPosts.forEach(post => {
    if (categoryCounts[post.category]) {
      categoryCounts[post.category]++;
    } else {
      categoryCounts[post.category] = 1;
    }
  });
  
  return Object.entries(categoryCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};

// Function to search blog posts
export const searchBlogPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) || 
    post.excerpt.toLowerCase().includes(lowercaseQuery) || 
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
