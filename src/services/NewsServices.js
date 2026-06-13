const BASE_URL = 'https://newsapi.org/v2'
const credencials=import.meta.env.VITE_NEWS_API;

const MOCK_ARTICLES = [
  {
    source: { id: 'tech-pulse', name: 'TechPulse' },
    author: 'Elena Rostova',
    title: 'The Quantum Leap: Next-Generation Computers Exceed Silicon Performance Boundaries',
    description: 'Researchers have successfully demonstrated a stable 256-qubit quantum processor operating at room temperature, marking a monumental shift away from silicon-based computing architectures.',
    url: 'https://example.com/quantum-leap',
    urlToImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80',
    publishedAt: '2026-06-06T18:30:00Z',
    content: 'Quantum computing has long been the holy grail of computer science, promising to solve complex equations in seconds that would take classical supercomputers millennia. Yesterday, a joint task force of physicists and engineers unveiled the Zenith-1, a 256-qubit room-temperature processor. Traditional quantum chips require near absolute zero temperatures (-273°C) to function, making them commercially impractical. Zenith-1 utilizes a novel diamond-nitrogen-vacancy center matrix that keeps qubits stable at normal operating temperatures. This breakthrough paves the way for direct integration into commercial servers, promising to revolutionize cryptography, pharmaceutical discovery, and climate modeling within the decade.',
    category: 'technology',
    readTime: '4 min read',
    summaryPoints: [
      'Zenith-1 processor introduces a stable 256-qubit quantum system operating without cryogenics.',
      'Uses a diamond-nitrogen-vacancy center matrix to isolate qubits at room temperature.',
      'Expected to accelerate drug discovery, advanced cryptography, and artificial intelligence training.'
    ]
  },
  {
    source: { id: 'neural-networks', name: 'AI Chronicle' },
    author: 'Marcus Vance',
    title: 'Open Source AI Coalition Releases Compact 10B Parameter Reasoning Model',
    description: 'A global coalition of researchers has released Llama-Alpha, a 10-billion parameter model that matches GPT-4 performance in logical reasoning and mathematical theorem proving.',
    url: 'https://example.com/llama-alpha',
    urlToImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80',
    publishedAt: '2026-06-06T15:45:00Z',
    content: 'The era of monolithic closed AI models may be drawing to a close. A decentralized group of developers and academics under the open-science banner has published Llama-Alpha. Weighing in at only 10 billion parameters, the model utilizes a novel "recursive thought-tree" architecture. By breaking down complex prompts into a series of internal draft solutions, checking its own work, and iterating before outputting a response, the model performs logical leaps that were previously only possible on enterprise API models. Llama-Alpha is free to download, runs on standard desktop consumer graphics cards, and marks a major win for the democratization of advanced reasoning tools.',
    category: 'technology',
    readTime: '3 min read',
    summaryPoints: [
      'Llama-Alpha delivers GPT-4 level logical reasoning in a compact 10B parameter size.',
      'Implements a recursive thought-tree method, allowing the model to self-correct and verify solutions.',
      'Runs locally on consumer-grade hardware, reducing reliance on centralized cloud APIs.'
    ]
  },
  {
    source: { id: 'bloom-financial', name: 'Global Finance' },
    author: 'Sarah Jenkins',
    title: 'Inflation Tames as Global Logistics Corridors Stabilize',
    description: 'Central banks express cautious optimism as supply chain congestion index drops to a 10-year low, steering core inflation rates back toward target corridors.',
    url: 'https://example.com/supply-chain-inflation',
    urlToImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
    publishedAt: '2026-06-06T12:00:00Z',
    content: 'Economies around the globe are breathing a sigh of relief as supply chain nodes, clogged since the early 2020s, have returned to absolute equilibrium. The Global Logistics Congestion Index reached a record low this week. Economists credit the widespread adoption of AI-managed container routing and the opening of new deep-water ports in Southeast Asia and Mexico. With shipping rates back to pre-disruption norms, prices of raw materials have stabilized, leading central banks to hint at potential rate cuts in the upcoming quarter. Financial markets reacted positively, with major indices closing up by 1.8% to 2.3% globally.',
    category: 'business',
    readTime: '3 min read',
    summaryPoints: [
      'Core inflation is retreating as shipping rates and supply chain operations hit historical stability.',
      'AI-managed container routing and expansion of strategic global ports eliminated shipping backlogs.',
      'Central banks indicate a shift toward lower interest rates, prompting a worldwide stock market rally.'
    ]
  },
  {
    source: { id: 'energy-future', name: 'Energy Future' },
    author: 'Daniel Craig',
    title: 'Electric Vehicle Pioneer Announces Anode Battery Chemistry Breakthrough',
    description: 'An automotive battery startup has demonstrated a silicon-anode solid-state battery that charges to 80% in under five minutes and provides a 700-mile driving range.',
    url: 'https://example.com/battery-breakthrough',
    urlToImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=80',
    publishedAt: '2026-06-06T09:15:00Z',
    content: 'The limitations of current EV battery technology may soon be history. EnerGen, a Silicon Valley energy startup, has successfully completed pilot trials for its new solid-state battery cells. By replacing traditional graphite anodes with a structured silicon-based framework and using a proprietary solid polymer electrolyte, EnerGen has solved the dendritic decay issue that has plagued solid-state research for decades. The resulting battery boasts an energy density of 550 Wh/kg. This allows standard vehicles to travel up to 700 miles on a single charge, with recharging times mirroring the time it takes to fill a gas tank.',
    category: 'business',
    readTime: '4 min read',
    summaryPoints: [
      'Silicon-anode solid-state battery achieves 700-mile range and sub-five-minute charging speeds.',
      'Solves the problem of micro-fractures and dendritic short-circuits via solid polymer electrolytes.',
      'Mass production is scheduled to begin within 18 months, targeting affordable family sedans.'
    ]
  },
  {
    source: { id: 'hubble-space', name: 'CosmoScience' },
    author: 'Dr. Aris Vance',
    title: 'James Webb Space Telescope Detects Complex Organics in Early Universe Galaxy',
    description: 'Astronomers using the JWST have detected carbon-rich organic molecules in a primitive galaxy dating back to just 350 million years after the Big Bang.',
    url: 'https://example.com/jwst-organics',
    urlToImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    publishedAt: '2026-06-05T20:10:00Z',
    content: 'Deep-space observations continue to rewrite the history of chemistry in our cosmos. The James Webb Space Telescope has captured data from the ancient galaxy J1005-B, showing clear spectral lines representing polycyclic aromatic hydrocarbons (PAHs). These complex carbon-bearing molecules are considered crucial chemical blocks for prebiotic chemistry. Finding them so early in cosmic history suggests that carbon was synthesized and distributed by the first generation of massive stars much quicker than previously modeled, increasing the potential timeframe for habitable worlds in our universe.',
    category: 'science',
    readTime: '5 min read',
    summaryPoints: [
      'Prebiotic carbon molecules detected in a galaxy formed 350 million years post-Big Bang.',
      'Speeds up the scientific timeline for when elements necessary for life were synthesized in stars.',
      'Highlights the capability of JWST\'s infrared spectrometers to detect subtle chemical structures.'
    ]
  },
  {
    source: { id: 'oceanic-depths', name: 'Nature Explorer' },
    author: 'Miriam Choi',
    title: 'Deep Ocean Expedition Uncovers 50 New Marine Species off Mariana Trench',
    description: 'An autonomous deep-sea submersible has captured video and samples of fifty previously undocumented marine organisms living at depths exceeding 6,000 meters.',
    url: 'https://example.com/deep-ocean-mariana',
    urlToImage: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd53c?w=800&auto=format&fit=crop&q=80',
    publishedAt: '2026-06-05T16:22:00Z',
    content: 'The abyssal plains of our oceans remain less explored than the surface of Mars. A collaborative team of marine biologists utilizing the autonomous research vessel "Nautilus II" has returned from a month-long survey of the Mariana Trench\'s outer slopes. Operating at depths of up to 7,200 meters under crushing pressures, the drone\'s robotic arms collected specimens of glass-like crustaceans, bioluminescent siphonophores, and a variety of soft-bodied scale worms that lack any DNA match in global catalogs. Researchers believe studying their adaptation mechanisms could lead to new medical discoveries for muscular degeneration and cellular resilience.',
    category: 'science',
    readTime: '3 min read',
    summaryPoints: [
      '50 new marine species discovered at extreme depths using autonomous research submersibles.',
      'Specimens show unique structural adaptations, including silicon-reinforced shells to withstand extreme pressure.',
      'Genomics analysis is underway to research biochemical properties that could benefit medicine.'
    ]
  },
  {
    source: { id: 'medical-horizon', name: 'Clinical Review' },
    author: 'Dr. Julia Patel',
    title: 'Gene Editing Trial Successfully Reverses Genetic Vision Impairment',
    description: 'In a landmark clinical study, twelve patients born with LCA (a rare genetic blindness) had their vision partially restored using a localized CRISPR-based therapy.',
    url: 'https://example.com/gene-therapy-vision',
    urlToImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80',
    publishedAt: '2026-06-05T11:00:00Z',
    content: 'Science has brought light back to patients living in complete darkness. Results from a phase II clinical trial published in The Lancet indicate that a micro-injected CRISPR gene therapy successfully corrected the mutated RPE65 gene in twelve patients diagnosed with Leber Congenital Amaurosis. The therapy works by introducing RNA guides and Cas9 enzymes directly into the retinal cells, surgically repairing the DNA mutation responsible for cellular degeneration. Within six weeks of treatment, patients reported detecting light, shapes, and successfully navigating low-light obstacle courses, marking a giant step forward in treating hereditary blindness.',
    category: 'health',
    readTime: '4 min read',
    summaryPoints: [
      'CRISPR therapy successfully restores vision in patients with genetic blindness.',
      'Direct micro-injection repairs the RPE65 gene mutation inside active photoreceptor cells.',
      'No serious adverse effects were reported, paving the way for larger phase III global trials.'
    ]
  },
  {
    source: { id: 'mindful-life', name: 'Wellness Journal' },
    author: 'Liam Peterson',
    title: 'Forest Bathing: The Proven Neurobiological Benefits of Nature Immersion',
    description: 'A comprehensive MRI study confirms that regular immersive walks in dense forest environments significantly reduce amygdala activity and lower cortisol production.',
    url: 'https://example.com/forest-bathing-mri',
    urlToImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
    publishedAt: '2026-06-05T08:30:00Z',
    content: 'The Japanese practice of "Shinrin-yoku" or forest bathing is no longer just a trend—it is a scientifically backed neurological prescription. Over 200 participants underwent functional MRI scans before and after a two-week program consisting of daily 40-minute walks in quiet, wooded environments. The post-program brain scans revealed a stark downregulation of the amygdala, the brain\'s emotional threat radar, and a corresponding increase in prefrontal cortex activity. Cortisol levels dropped by an average of 22%. Phytoncides, the organic compounds released by trees, are believed to interact directly with the human olfactory system to trigger a deep autonomic relaxation response.',
    category: 'health',
    readTime: '3 min read',
    summaryPoints: [
      'MRI data confirms forest immersion lowers amygdala hyperactivity and reduces clinical stress indicators.',
      'Shows a 22% average reduction in salivary cortisol levels compared to urban walking control groups.',
      'Phytoncide compounds emitted by pine and cypress trees are identified as active biological relaxants.'
    ]
  },
  {
    source: { id: 'championship-news', name: 'Athletic World' },
    author: 'Tomas Miller',
    title: 'Dramatic Overtime Goal Secures Championship Cup in Historic Sweep',
    description: 'In one of the most intense finals in recent history, an underdog squad sealed their first-ever league championship with an acrobatic bicycle kick in the 114th minute.',
    url: 'https://example.com/championship-win',
    urlToImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80',
    publishedAt: '2026-06-04T22:15:00Z',
    content: 'It was a night that will live forever in sporting folklore. Coming into the final as massive 10-to-1 underdogs, the Rangers faced off against the reigning triple champions. After a grinding 90 minutes of deadlock and an exchange of penalties in early extra time, the match was decided by absolute genius. Midfielder Leo Santos met a looping cross with a gravity-defying bicycle kick, driving the ball into the top corner in the 114th minute of play. The stadium erupted, securing the club\'s first championship cup in its 85-year history and writing a legendary underdog chapter.',
    category: 'sports',
    readTime: '3 min read',
    summaryPoints: [
      'Underdog squad clinches their first championship title via a dramatic extra-time goal.',
      'Midfielder Leo Santos executed an acrobatic bicycle kick in the 114th minute to break the tie.',
      'Fans and pundits are hailing the match as one of the greatest finals in modern history.'
    ]
  },
  {
    source: { id: 'gold-cannes', name: 'Cinephile Daily' },
    author: 'Clara Dupond',
    title: 'Cannes Film Festival Celebrates Indie Cinema in Historic Awards Sweep',
    description: 'A micro-budget foreign language film shot entirely on 16mm has taken home the Palme d\'Or, signaling a major shifting tide back to intimate auteur storytelling.',
    url: 'https://example.com/cannes-sweep-indie',
    urlToImage: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=80',
    publishedAt: '2026-06-04T18:40:00Z',
    content: 'This year\'s jury at the Cannes Film Festival sent a resounding message to the global entertainment industry. The Palme d\'Or was awarded to "Whispers of the Wind," a micro-budget drama directed by first-time filmmaker Kenji Sato. Shot entirely on grainy 16mm film over the course of three weeks with local non-professional actors, the film focuses on a small community managing the closing of a local railway station. The film\'s quiet pacing and emotional authenticity won over the audience, beating out several star-studded, multi-million dollar studio entries. Critics describe the win as a major victory for purist auteur cinema.',
    category: 'entertainment',
    readTime: '4 min read',
    summaryPoints: [
      'Kenji Sato\'s micro-budget indie film "Whispers of the Wind" wins the coveted Palme d\'Or at Cannes.',
      'Shot entirely on 16mm film, showcasing an focus on quiet pacing and amateur ensemble acting.',
      'Indicates a critical pushback against massive CGI-laden studio blockbusters in favor of rich stories.'
    ]
  }
];

export const NewsServices = {
  async getarticles(category = 'feed', searchquery = '') {
    category = category == 'feed' ? 'general' : category
    const url = searchquery.trim()
      ? `${BASE_URL}/everything?q=${encodeURIComponent(searchquery)}&apiKey=${credencials}`
      : `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${credencials}`;

    try {
      const responce = await fetch(url)
      if (!responce.ok) {
        throw new Error(`HTTP Error: ${responce.status}`)
      }
      const data = await responce.json()
      if (data.status !== 'ok') {
        throw new Error(data.message || 'API Error');
      }
      if(data.articles.length==0){
        return MOCK_ARTICLES
      }
      return data.articles;

    } catch (error) {
      console.error('Error fetching news:', error);
      const mockData=this.getMockData(category,searchquery)
      console.log(mockData)
      return MOCK_ARTICLES;
    }
  },
  getMockData(category, searchquery) {
    let filtered = [...MOCK_ARTICLES]
    let cat = category.toLowerCase();

    if (cat !== 'general') {
      filtered= filtered.filter(art => art.category == cat)
    }

    if (searchquery.trim()) {
      let query=searchquery.toLowerCase()
      filtered= filtered.filter((e) =>e.title.toLowerCase().includes(query)||(e.description && e.description.toLowerCase().includes(query))|| (e.content && e.content.toLowerCase().includes(query)))
    }


    return filtered;
  }
}
