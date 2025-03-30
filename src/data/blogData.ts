
// This file contains the data for all 80 blog articles

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
  "Writer Spotlight"
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
  "Stephen Strange"
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
  "https://images.unsplash.com/photo-1536896407451-6e3dd950498a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
];

// Blog post titles
const blogTitles = [
  "The Evolution of Spider-Man's Costume Design Through the Years",
  "How Iron Man Revolutionized the Marvel Universe",
  "The X-Men: Allegory for Civil Rights in Comics",
  "Thor's Journey from Norse Myth to Marvel Icon",
  "Captain America: Symbol of American Idealism",
  "Black Widow: From Soviet Spy to Avenger",
  "Hulk: The Psychology of Rage in Comics",
  "Black Panther and Wakanda's Cultural Impact",
  "Doctor Strange and the Marvel Multiverse",
  "Daredevil: Justice and Catholicism in Hell's Kitchen",
  "The Fantastic Four: Marvel's First Family",
  "Wolverine: The Art of the Anti-Hero",
  "Deadpool: Breaking the Fourth Wall in Comics",
  "Captain Marvel: Feminist Icon in the Marvel Universe",
  "Thanos and the Philosophy of Balance",
  "The Guardians of the Galaxy: Cosmic Misfits",
  "Scarlet Witch and the Power of Chaos Magic",
  "Vision: Exploring Humanity Through an Android",
  "Ant-Man: Science and Technology in Marvel",
  "The Punisher: Violence and Vigilantism in Comics",
  "Magneto: Villain or Misunderstood Visionary?",
  "The Inhumans: Marvel's Other Evolved Species",
  "Moon Knight: Exploring Mental Health Through Comics",
  "Jessica Jones: Trauma and Recovery in Superhero Narratives",
  "Luke Cage: Representation of Black Heroes in Comics",
  "Iron Fist and Cultural Appropriation in Marvel",
  "Ghost Rider: The Evolution of Horror in Superhero Comics",
  "Silver Surfer: Cosmic Philosophy and Existentialism",
  "The Winter Soldier: Brainwashing and Redemption",
  "Hawkeye: The Importance of Non-Powered Heroes",
  "Loki: The Complexity of Marvel's Favorite Trickster",
  "Nick Fury and S.H.I.E.L.D.: Espionage in Comics",
  "Star-Lord: From Obscurity to Mainstream Success",
  "Gamora: The Deadliest Woman in the Galaxy",
  "Drax: Tragedy and Comic Relief",
  "Rocket Raccoon: More Than Comic Relief",
  "Groot: Minimalist Storytelling in Comics",
  "Nebula: Sibling Rivalry in Cosmic Proportions",
  "Yondu: From Comic Accuracy to Fan Favorite",
  "The Nova Corps: Marvel's Cosmic Police Force",
  "The Celestials: Gods of the Marvel Universe",
  "The Eternals: Jack Kirby's Cosmic Vision",
  "The Skrulls: Shape-Shifting and Identity",
  "The Kree Empire: Marvel's Military Aliens",
  "The Shi'ar: Bird-Like Aliens of the Marvel Universe",
  "The Brood: Marvel's Answer to Xenomorphs",
  "The Symbiotes: Beyond Venom and Carnage",
  "The Infinity Stones: Cosmic Power in the Marvel Universe",
  "The Savage Land: Prehistoric Paradise in Antarctica",
  "Asgard: Norse Mythology in Marvel Comics",
  "Wakanda: Afrofuturism and Cultural Pride",
  "Latveria: Doctor Doom's Perfect Dictatorship",
  "Attilan: Home of the Inhumans",
  "Genosha: Mutant Apartheid State",
  "The Dark Dimension: Doctor Strange's Nightmare Realm",
  "The Quantum Realm: Science and Fantasy",
  "The Negative Zone: Reed Richards' Great Discovery",
  "Hell's Kitchen: Daredevil's Urban Playground",
  "The Weapon X Program: Creating Perfect Weapons",
  "The Danger Room: Training X-Men with Simulations",
  "The Legacy of Steve Ditko on Spider-Man",
  "Jack Kirby: King of Comics and His Marvel Legacy",
  "Stan Lee: The Man Behind Marvel's Success",
  "Chris Claremont's Transformation of the X-Men",
  "Frank Miller's Impact on Daredevil",
  "Jim Starlin and Cosmic Marvel",
  "Todd McFarlane's Revolutionary Spider-Man Art",
  "Walt Simonson's Legendary Thor Run",
  "Ed Brubaker's Captain America and the Winter Soldier",
  "Jonathan Hickman's Avengers and Secret Wars",
  "The Ultimate Universe: Reimagining Marvel for a New Generation",
  "Marvel Zombies: Horror Meets Superheroes",
  "What If...?: Exploring Marvel's Alternate Realities",
  "House of M: When Scarlet Witch Changed Everything",
  "Secret Invasion: Trust No One",
  "Civil War: Heroes Against Heroes",
  "Infinity Gauntlet: The Original Thanos Quest",
  "Age of Apocalypse: X-Men's Dystopian Timeline",
  "The Dark Phoenix Saga: Love and Cosmic Destruction"
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
  
  for (let i = 0; i < 80; i++) {
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
      title.split(' ')[1].toLowerCase(),
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
