/* =========================================================
   SMARTSORT
   Main JavaScript
   ========================================================= */


/* =========================================================
   1. WASTE DATASET
   ========================================================= */

 const sustainabilityFacts = [
    "Segregating waste at source makes downstream sorting and recovery easier.",
    "Keeping recyclable materials clean and dry can improve their usefulness in recycling systems.",
    "Electronic waste should be kept separate from ordinary household waste.",
    "Food and garden waste can be managed separately from dry materials.",
    "Good waste segregation starts with identifying the material before throwing it away."
];


const wasteData = [

    /* -------------------------
       WET WASTE
    ------------------------- */

    {
        id: "banana-peel",
        name: "Banana Peel",
        category: "Wet",
        keywords: [
            "banana peel",
            "banana skin",
            "banana waste"
        ],
        icon: "🍌",
        description: "Organic fruit waste.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "apple-core",
        name: "Apple Core",
        category: "Wet",
        keywords: [
            "apple core",
            "apple waste"
        ],
        icon: "🍎",
        description: "Organic fruit waste.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "orange-peel",
        name: "Orange Peel",
        category: "Wet",
        keywords: [
            "orange peel",
            "orange skin",
            "orange waste"
        ],
        icon: "🍊",
        description: "Organic fruit waste.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "potato-peel",
        name: "Potato Peel",
        category: "Wet",
        keywords: [
            "potato peel",
            "potato skin",
            "potato waste"
        ],
        icon: "🥔",
        description: "Organic vegetable waste.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "onion-peel",
        name: "Onion Peel",
        category: "Wet",
        keywords: [
            "onion peel",
            "onion skin",
            "onion waste"
        ],
        icon: "🧅",
        description: "Organic vegetable waste.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "carrot-peel",
        name: "Carrot Peel",
        category: "Wet",
        keywords: [
            "carrot peel",
            "carrot skin",
            "carrot waste"
        ],
        icon: "🥕",
        description: "Organic vegetable waste.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "vegetable-peels",
        name: "Vegetable Peels",
        category: "Wet",
        keywords: [
            "vegetable peels",
            "vegetable peel",
            "veggie peels",
            "vegetable waste"
        ],
        icon: "🥬",
        description: "Organic kitchen waste from vegetables.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "fruit-scraps",
        name: "Fruit Scraps",
        category: "Wet",
        keywords: [
            "fruit scraps",
            "fruit waste",
            "fruit leftovers"
        ],
        icon: "🍎",
        description: "Organic fruit waste.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "leftover-food",
        name: "Leftover Food",
        category: "Wet",
        keywords: [
            "leftover food",
            "food waste",
            "food leftovers",
            "waste food"
        ],
        icon: "🍲",
        description: "Organic food waste.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "cooked-food",
        name: "Cooked Food Waste",
        category: "Wet",
        keywords: [
            "cooked food",
            "cooked food waste",
            "leftover meal"
        ],
        icon: "🍛",
        description: "Organic food waste from meals.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "rice-leftovers",
        name: "Rice Leftovers",
        category: "Wet",
        keywords: [
            "rice leftovers",
            "leftover rice",
            "rice waste"
        ],
        icon: "🍚",
        description: "Organic food waste.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "bread-scraps",
        name: "Bread Scraps",
        category: "Wet",
        keywords: [
            "bread scraps",
            "bread waste",
            "bread leftovers"
        ],
        icon: "🍞",
        description: "Organic food waste.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "tea-leaves",
        name: "Tea Leaves",
        category: "Wet",
        keywords: [
            "tea leaves",
            "used tea leaves",
            "tea waste"
        ],
        icon: "🍵",
        description: "Organic kitchen waste.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "coffee-grounds",
        name: "Coffee Grounds",
        category: "Wet",
        keywords: [
            "coffee grounds",
            "used coffee",
            "coffee waste"
        ],
        icon: "☕",
        description: "Organic kitchen waste.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "eggshells",
        name: "Eggshells",
        category: "Wet",
        keywords: [
            "eggshells",
            "egg shells",
            "egg shell"
        ],
        icon: "🥚",
        description: "Organic kitchen waste.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "flower-waste",
        name: "Flower Waste",
        category: "Wet",
        keywords: [
            "flower waste",
            "flowers",
            "used flowers"
        ],
        icon: "🌸",
        description: "Organic plant material.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "meat-scraps",
        name: "Meat Scraps",
        category: "Wet",
        keywords: [
            "meat scraps",
            "meat waste",
            "meat leftovers"
        ],
        icon: "🥩",
        description: "Organic food waste.",
        disposal:
            "Place it according to your local wet-waste collection system.",
        specialHandling: false
    },

    {
        id: "garden-leaves",
        name: "Garden Leaves",
        category: "Wet",
        keywords: [
            "garden leaves",
            "fallen leaves",
            "dry leaves",
            "leaf waste"
        ],
        icon: "🍃",
        description: "Organic plant waste.",
        disposal:
            "Follow your local collection or composting guidance.",
        specialHandling: false
    },


    /* -------------------------
       RECYCLABLE
    ------------------------- */

    {
        id: "plastic-bottle",
        name: "Plastic Bottle",
        category: "Recyclable",
        keywords: [
            "plastic bottle",
            "water bottle",
            "pet bottle",
            "plastic water bottle"
        ],
        icon: "🧴",
        description:
            "A commonly collected recyclable material when accepted locally.",
        disposal:
            "Empty it and keep it reasonably clean before using the appropriate local dry/recycling collection route.",
        specialHandling: false
    },

    {
        id: "plastic-container",
        name: "Plastic Container",
        category: "Recyclable",
        keywords: [
            "plastic container",
            "plastic box",
            "food container"
        ],
        icon: "🥡",
        description:
            "Plastic packaging that may be accepted by local recycling systems.",
        disposal:
            "Empty and clean where practical, then follow local dry/recycling guidance.",
        specialHandling: false
    },

    {
        id: "plastic-jar",
        name: "Plastic Jar",
        category: "Recyclable",
        keywords: [
            "plastic jar",
            "plastic container jar"
        ],
        icon: "🫙",
        description:
            "Plastic packaging that may be recyclable through local systems.",
        disposal:
            "Empty and clean where practical, then follow local dry/recycling guidance.",
        specialHandling: false
    },

    {
        id: "cardboard-box",
        name: "Cardboard Box",
        category: "Recyclable",
        keywords: [
            "cardboard box",
            "cardboard",
            "carton box"
        ],
        icon: "📦",
        description: "Paper-based packaging material.",
        disposal:
            "Flatten the box and follow your local dry/recycling collection guidance.",
        specialHandling: false
    },

    {
        id: "newspaper",
        name: "Newspaper",
        category: "Recyclable",
        keywords: [
            "newspaper",
            "news paper",
            "old newspaper"
        ],
        icon: "📰",
        description: "Paper-based dry material.",
        disposal:
            "Keep it dry and follow your local paper/dry-waste collection guidance.",
        specialHandling: false
    },

    {
        id: "magazine",
        name: "Magazine",
        category: "Recyclable",
        keywords: [
            "magazine",
            "old magazine"
        ],
        icon: "📖",
        description: "Paper-based dry material.",
        disposal:
            "Keep it dry and follow your local paper/dry-waste collection guidance.",
        specialHandling: false
    },

    {
        id: "paper-sheets",
        name: "Paper Sheets",
        category: "Recyclable",
        keywords: [
            "paper sheets",
            "paper",
            "waste paper"
        ],
        icon: "📄",
        description: "Paper-based dry material.",
        disposal:
            "Keep paper dry and follow your local paper/dry-waste collection guidance.",
        specialHandling: false
    },

    {
        id: "office-paper",
        name: "Office Paper",
        category: "Recyclable",
        keywords: [
            "office paper",
            "printer paper",
            "writing paper"
        ],
        icon: "📝",
        description: "Paper-based dry material.",
        disposal:
            "Keep it dry and follow your local paper/dry-waste collection guidance.",
        specialHandling: false
    },

    {
        id: "notebook",
        name: "Notebook",
        category: "Recyclable",
        keywords: [
            "notebook",
            "old notebook",
            "used notebook"
        ],
        icon: "📓",
        description: "Paper-based material.",
        disposal:
            "Follow your local paper/dry-waste collection guidance.",
        specialHandling: false
    },

    {
        id: "glass-bottle",
        name: "Glass Bottle",
        category: "Recyclable",
        keywords: [
            "glass bottle",
            "glass container"
        ],
        icon: "🍾",
        description:
            "Glass packaging that may be recyclable through appropriate collection systems.",
        disposal:
            "Handle carefully and use the appropriate local dry/recycling collection route.",
        specialHandling: false
    },

    {
        id: "glass-jar",
        name: "Glass Jar",
        category: "Recyclable",
        keywords: [
            "glass jar",
            "glass container jar"
        ],
        icon: "🫙",
        description:
            "Glass packaging that may be recyclable through appropriate collection systems.",
        disposal:
            "Handle carefully and use the appropriate local dry/recycling collection route.",
        specialHandling: false
    },

    {
        id: "aluminium-can",
        name: "Aluminium Can",
        category: "Recyclable",
        keywords: [
            "aluminium can",
            "aluminum can",
            "soft drink can"
        ],
        icon: "🥫",
        description: "Metal packaging material.",
        disposal:
            "Empty the can and follow your local dry/recycling collection guidance.",
        specialHandling: false
    },

    {
        id: "metal-can",
        name: "Metal Can",
        category: "Recyclable",
        keywords: [
            "metal can",
            "tin can",
            "metal container"
        ],
        icon: "🥫",
        description: "Metal packaging material.",
        disposal:
            "Empty the container and follow your local dry/recycling collection guidance.",
        specialHandling: false
    },

    {
        id: "steel-can",
        name: "Steel Can",
        category: "Recyclable",
        keywords: [
            "steel can",
            "steel container"
        ],
        icon: "🥫",
        description: "Steel packaging material.",
        disposal:
            "Follow your local dry/recycling collection guidance.",
        specialHandling: false
    },


    /* -------------------------
       DRY
    ------------------------- */

    {
        id: "rubber-item",
        name: "Rubber Item",
        category: "Dry",
        keywords: [
            "rubber",
            "rubber item",
            "rubber waste"
        ],
        icon: "⭕",
        description:
            "A dry material that may require a specific disposal route.",
        disposal:
            "Follow your local dry-waste collection guidance.",
        specialHandling: false
    },

    {
        id: "wooden-item",
        name: "Small Wooden Item",
        category: "Dry",
        keywords: [
            "wood",
            "wooden item",
            "wood waste",
            "small wooden item"
        ],
        icon: "🪵",
        description: "A dry wooden material.",
        disposal:
            "Follow your local dry-waste collection guidance.",
        specialHandling: false
    },

    {
        id: "broken-ceramic",
        name: "Broken Ceramic",
        category: "Dry",
        keywords: [
            "broken ceramic",
            "ceramic",
            "ceramic waste"
        ],
        icon: "🏺",
        description: "Broken ceramic material.",
        disposal:
            "Wrap sharp pieces safely and follow local waste-collection guidance.",
        specialHandling: false
    },

    {
        id: "non-recyclable-packaging",
        name: "Non-Recyclable Packaging",
        category: "Dry",
        keywords: [
            "non recyclable packaging",
            "non-recyclable packaging"
        ],
        icon: "🛍️",
        description:
            "Packaging that is not identified as recyclable in this prototype dataset.",
        disposal:
            "Follow your local dry-waste collection guidance.",
        specialHandling: false
    },

    {
        id: "non-recyclable-wrapper",
        name: "Non-Recyclable Wrapper",
        category: "Dry",
        keywords: [
            "non recyclable wrapper",
            "non-recyclable wrapper",
            "wrapper"
        ],
        icon: "🛍️",
        description:
            "A wrapper that is not identified as recyclable in this prototype dataset.",
        disposal:
            "Follow your local dry-waste collection guidance.",
        specialHandling: false
    },

    {
        id: "mixed-material-packaging",
        name: "Mixed-Material Packaging",
        category: "Dry",
        keywords: [
            "mixed material packaging",
            "mixed packaging",
            "composite packaging"
        ],
        icon: "📦",
        description:
            "Packaging made from multiple materials that can be difficult to separate.",
        disposal:
            "Follow your local dry-waste collection guidance.",
        specialHandling: false
    },


    /* -------------------------
       E-WASTE
    ------------------------- */

    {
        id: "mobile-phone",
        name: "Mobile Phone",
        category: "E-Waste",
        keywords: [
            "mobile phone",
            "smartphone",
            "cell phone",
            "cellphone"
        ],
        icon: "📱",
        description:
            "Discarded electrical/electronic equipment.",
        disposal:
            "Keep electronic equipment separate and use an appropriate authorised e-waste collection or recycling route.",
        specialHandling: false
    },

    {
        id: "laptop",
        name: "Laptop",
        category: "E-Waste",
        keywords: [
            "laptop",
            "notebook computer"
        ],
        icon: "💻",
        description:
            "Discarded electrical/electronic equipment.",
        disposal:
            "Use an appropriate authorised e-waste collection or recycling route.",
        specialHandling: false
    },

    {
        id: "desktop-computer",
        name: "Desktop Computer",
        category: "E-Waste",
        keywords: [
            "desktop computer",
            "desktop pc",
            "computer",
            "pc"
        ],
        icon: "🖥️",
        description:
            "Discarded electrical/electronic equipment.",
        disposal:
            "Use an appropriate authorised e-waste collection or recycling route.",
        specialHandling: false
    },

    {
        id: "printer",
        name: "Printer",
        category: "E-Waste",
        keywords: [
            "printer",
            "printing machine"
        ],
        icon: "🖨️",
        description:
            "Discarded electrical/electronic equipment.",
        disposal:
            "Use an appropriate authorised e-waste collection or recycling route.",
        specialHandling: false
    },

    {
        id: "keyboard",
        name: "Keyboard",
        category: "E-Waste",
        keywords: [
            "keyboard",
            "computer keyboard"
        ],
        icon: "⌨️",
        description:
            "Discarded computer peripheral.",
        disposal:
            "Use an appropriate authorised e-waste collection or recycling route.",
        specialHandling: false
    },

    {
        id: "mouse",
        name: "Computer Mouse",
        category: "E-Waste",
        keywords: [
            "mouse",
            "computer mouse"
        ],
        icon: "🖱️",
        description:
            "Discarded computer peripheral.",
        disposal:
            "Use an appropriate authorised e-waste collection or recycling route.",
        specialHandling: false
    },

    {
        id: "router",
        name: "Router",
        category: "E-Waste",
        keywords: [
            "router",
            "wifi router",
            "wi-fi router"
        ],
        icon: "📡",
        description:
            "Discarded networking/electronic equipment.",
        disposal:
            "Use an appropriate authorised e-waste collection or recycling route.",
        specialHandling: false
    },

    {
        id: "tablet",
        name: "Tablet",
        category: "E-Waste",
        keywords: [
            "tablet",
            "tablet computer"
        ],
        icon: "📱",
        description:
            "Discarded electronic equipment.",
        disposal:
            "Use an appropriate authorised e-waste collection or recycling route.",
        specialHandling: false
    },

    {
        id: "monitor",
        name: "Monitor",
        category: "E-Waste",
        keywords: [
            "monitor",
            "computer monitor",
            "display"
        ],
        icon: "🖥️",
        description:
            "Discarded electronic display equipment.",
        disposal:
            "Use an appropriate authorised e-waste collection or recycling route.",
        specialHandling: false
    },

    {
        id: "television",
        name: "Television",
        category: "E-Waste",
        keywords: [
            "television",
            "tv",
            "smart tv"
        ],
        icon: "📺",
        description:
            "Discarded electronic equipment.",
        disposal:
            "Use an appropriate authorised e-waste collection or recycling route.",
        specialHandling: false
    },

    {
        id: "refrigerator",
        name: "Refrigerator",
        category: "E-Waste",
        keywords: [
            "refrigerator",
            "fridge"
        ],
        icon: "🧊",
        description:
            "Discarded electrical appliance.",
        disposal:
            "Use an appropriate authorised e-waste collection or recycling route.",
        specialHandling: false
    },

    {
        id: "washing-machine",
        name: "Washing Machine",
        category: "E-Waste",
        keywords: [
            "washing machine",
            "washer"
        ],
        icon: "🧺",
        description:
            "Discarded electrical appliance.",
        disposal:
            "Use an appropriate authorised e-waste collection or recycling route.",
        specialHandling: false
    },

    {
        id: "air-conditioner",
        name: "Air Conditioner",
        category: "E-Waste",
        keywords: [
            "air conditioner",
            "air conditioning",
            "ac"
        ],
        icon: "❄️",
        description:
            "Discarded electrical appliance.",
        disposal:
            "Use an appropriate authorised e-waste collection or recycling route.",
        specialHandling: false
    },

    {
        id: "scanner",
        name: "Scanner",
        category: "E-Waste",
        keywords: [
            "scanner",
            "document scanner"
        ],
        icon: "📠",
        description:
            "Discarded electronic equipment.",
        disposal:
            "Use an appropriate authorised e-waste collection or recycling route.",
        specialHandling: false
    },


    /* -------------------------
       SPECIAL HANDLING
    ------------------------- */

    {
        id: "battery",
        name: "Battery",
        category: "Special Handling",
        keywords: [
            "battery",
            "used battery",
            "dead battery"
        ],
        icon: "🔋",
        description:
            "Used batteries require separate handling.",
        disposal:
            "Keep separate from ordinary household waste and use an appropriate authorised collection route.",
        specialHandling: true
    },

    {
        id: "cfl-bulb",
        name: "CFL Bulb",
        category: "Special Handling",
        keywords: [
            "cfl",
            "cfl bulb",
            "compact fluorescent bulb"
        ],
        icon: "💡",
        description:
            "CFL bulbs require special handling.",
        disposal:
            "Keep separate and follow appropriate local collection guidance.",
        specialHandling: true
    },

    {
        id: "tube-light",
        name: "Tube Light",
        category: "Special Handling",
        keywords: [
            "tube light",
            "fluorescent tube",
            "tube bulb"
        ],
        icon: "💡",
        description:
            "Fluorescent lighting requires special handling.",
        disposal:
            "Keep separate and follow appropriate local collection guidance.",
        specialHandling: true
    },

    {
        id: "expired-medicine",
        name: "Expired Medicine",
        category: "Special Handling",
        keywords: [
            "expired medicine",
            "old medicine",
            "expired tablets"
        ],
        icon: "💊",
        description:
            "Expired medicine should not simply be treated as ordinary household waste.",
        disposal:
            "Follow appropriate local, pharmacy or authorised collection guidance.",
        specialHandling: true
    },

    {
        id: "paint-can",
        name: "Paint Can",
        category: "Special Handling",
        keywords: [
            "paint can",
            "paint container",
            "paint tin"
        ],
        icon: "🎨",
        description:
            "Paint containers may require special handling.",
        disposal:
            "Keep separate and follow applicable local collection guidance.",
        specialHandling: true
    },

    {
        id: "pesticide-container",
        name: "Pesticide Container",
        category: "Special Handling",
        keywords: [
            "pesticide container",
            "pesticide bottle",
            "pesticide waste"
        ],
        icon: "🧪",
        description:
            "Pesticide containers require special care.",
        disposal:
            "Do not mix with ordinary household waste. Follow applicable authorised collection guidance.",
        specialHandling: true
    },

    {
        id: "mercury-thermometer",
        name: "Mercury Thermometer",
        category: "Special Handling",
        keywords: [
            "mercury thermometer",
            "thermometer"
        ],
        icon: "🌡️",
        description:
            "Mercury-containing items require special handling.",
        disposal:
            "Keep separate and follow appropriate authorised collection guidance.",
        specialHandling: true
    },

    {
        id: "used-syringe",
        name: "Used Syringe",
        category: "Special Handling",
        keywords: [
            "used syringe",
            "syringe",
            "used needle"
        ],
        icon: "⚠️",
        description:
            "Used medical sharps require special handling.",
        disposal:
            "Do not place loose in ordinary household waste. Follow appropriate authorised medical-waste guidance.",
        specialHandling: true
    },

    {
        id: "diaper",
        name: "Diaper",
        category: "Special Handling",
        keywords: [
            "diaper",
            "used diaper",
            "baby diaper"
        ],
        icon: "🧷",
        description:
            "Used sanitary waste requires separate handling.",
        disposal:
            "Keep sanitary waste separate and follow your local collection guidance.",
        specialHandling: true
    }

];


/* =========================================================
   2. DOM ELEMENTS
   ========================================================= */

const searchForm =
    document.getElementById("searchForm");

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const clearSearch =
    document.getElementById("clearSearch");

const suggestions =
    document.getElementById("suggestions");

const searchMessage =
    document.getElementById("searchMessage");

const resultSection =
    document.getElementById("resultSection");

const resultCard =
    document.getElementById("resultCard");

const resultIcon =
    document.getElementById("resultIcon");

const resultCategory =
    document.getElementById("resultCategory");

const resultName =
    document.getElementById("resultName");

const resultDescription =
    document.getElementById("resultDescription");

const resultWhy =
    document.getElementById("resultWhy");

const resultDisposal =
    document.getElementById("resultDisposal");

const specialNotice =
    document.getElementById("specialNotice");

const clearResult =
    document.getElementById("clearResult");

const notFoundSection =
    document.getElementById("notFoundSection");

const alternativeSuggestions =
    document.getElementById("alternativeSuggestions");

const categoryFilters =
    document.getElementById("categoryFilters");

const categoryGrid =
    document.getElementById("categoryGrid");

const recentSection =
    document.getElementById("recentSection");

const recentSearches =
    document.getElementById("recentSearches");

const clearHistory =
    document.getElementById("clearHistory");

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


/* =========================================================
   3. APPLICATION STATE
   ========================================================= */

let currentSuggestions = [];

let selectedSuggestionIndex = -1;

let currentCategory = "All";

const HISTORY_KEY =
    "smartsort-recent-searches";

const THEME_KEY =
    "smartsort-theme";


/* =========================================================
   4. UTILITY FUNCTIONS
   ========================================================= */

/*
   Normalizes user input so searches such as:

   " Plastic   Bottle "
   "PLASTIC BOTTLE"
   "plastic bottle"

   are treated consistently.
*/

function normalizeText(text) {

    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");

}


/*
   Escapes text before inserting it into HTML.

   This prevents user-entered text from being interpreted
   as HTML.
*/

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =========================================================
   5. SEARCH ENGINE
   ========================================================= */

/*
   Exact keyword match.
*/

function findExactMatch(query) {

    const normalizedQuery =
        normalizeText(query);

    return wasteData.find(item =>
        item.keywords.some(keyword =>
            normalizeText(keyword) === normalizedQuery
        )
    ) || null;

}


/*
   Name/keyword partial match.

   Example:

   "plastic" → Plastic Bottle
   "banana" → Banana Peel
*/

function findPartialMatches(query) {

    const normalizedQuery =
        normalizeText(query);

    if (!normalizedQuery) {
        return [];
    }

    return wasteData.filter(item => {

        const nameMatch =
            normalizeText(item.name)
                .includes(normalizedQuery);

        const keywordMatch =
            item.keywords.some(keyword =>
                normalizeText(keyword)
                    .includes(normalizedQuery)
            );

        return nameMatch || keywordMatch;

    });

}


/*
   Simple similarity score.

   This isn't machine learning.

   It is deliberately lightweight and reliable enough
   for a 3-hour hackathon prototype.
*/

function calculateSimilarity(input, target) {

    input = normalizeText(input);
    target = normalizeText(target);

    if (!input || !target) {
        return 0;
    }

    if (input === target) {
        return 1;
    }

    if (target.includes(input)) {
        return 0.85;
    }

    if (input.includes(target)) {
        return 0.90;
    }

    const matrix = [];

    for (
        let i = 0;
        i <= target.length;
        i++
    ) {
        matrix[i] = [i];
    }

    for (
        let j = 0;
        j <= input.length;
        j++
    ) {
        matrix[0][j] = j;
    }

    for (
        let i = 1;
        i <= target.length;
        i++
    ) {

        for (
            let j = 1;
            j <= input.length;
            j++
        ) {

            if (
                target[i - 1] ===
                input[j - 1]
            ) {

                matrix[i][j] =
                    matrix[i - 1][j - 1];

            } else {

                matrix[i][j] =
                    Math.min(

                        matrix[i - 1][j - 1] + 1,

                        matrix[i][j - 1] + 1,

                        matrix[i - 1][j] + 1

                    );

            }

        }

    }

    const distance =
        matrix[target.length][input.length];

    const maxLength =
        Math.max(
            input.length,
            target.length
        );

    return 1 - distance / maxLength;
}

/*
   Find suggestions for typos or incomplete searches.
*/

function findSuggestions(query) {
    const results = [];

    wasteData.forEach(item => {
        item.keywords.forEach(keyword => {
            const score = calculateSimilarity(
                query,
                keyword
            );

            if (score >= 0.45) {
                results.push({
                    item,
                    score
                });
            }
        });
    });

    // Remove duplicates
    const uniqueResults = [];

    results.forEach(result => {
        const exists = uniqueResults.some(
            existing => existing.item.id === result.item.id
        );

        if (!exists) {
            uniqueResults.push(result);
        }
    });

    // Highest score first
    uniqueResults.sort(
        (a, b) => b.score - a.score
    );

    return uniqueResults
        .slice(0, 5)
        .map(result => result.item);
}

/* =========================================================
   6. SEARCH
   ========================================================= */


function getCategoryCounts() {

    const counts = {
        Wet: 0,
        Dry: 0,
        Recyclable: 0,
        "E-Waste": 0,
        "Special Handling": 0
    };

    wasteData.forEach(item => {

        if (counts[item.category] !== undefined) {
            counts[item.category]++;
        }

    });

    return counts;
}


function searchWaste(query) {
    const normalizedQuery = normalizeText(query);
    
    if (!normalizedQuery) {
        showSearchMessage("Please enter an item to search.");
        hideResult();
        return;
    }
    
    // 1. Strict Exact Match Only
    const exactMatch = findExactMatch(normalizedQuery);
    
    if (exactMatch) {
        saveRecentSearch(exactMatch);
        showResult(exactMatch, 1);
        return;
    }
    
    // 2. Clear out partial match auto-routing and treat all typos as suggestions
    const partialMatches = findPartialMatches(normalizedQuery);
    const suggestions = findSuggestions(normalizedQuery);
    let combinedSuggestions = [];
    
    if (partialMatches) {
        if (Array.isArray(partialMatches)) {
            combinedSuggestions = [...partialMatches];
        } else if (partialMatches.id) {
            combinedSuggestions.push(partialMatches);
        }
    }
    
    if (suggestions && suggestions.length > 0) {
        suggestions.forEach(item => {
            const exists = combinedSuggestions.some(existing => existing.id === item.id);
            if (!exists) {
                combinedSuggestions.push(item);
            }
        });
    }
    
    // 3. Route directly to the "We couldn't find that item" view with clean option pills
    if (combinedSuggestions.length > 0) {
        showNotFound(normalizedQuery, combinedSuggestions.slice(0, 3));
        return;
    }
    
    // 4. Fallback if absolutely nothing is found
    showNotFound(normalizedQuery, []);
}

function getConfidence(score) {
    if (score >= 0.95) {
        return {
            label: "High confidence",
            className: "high"
        };
    }

    if (score >= 0.80) {
        return {
            label: "Good match",
            className: "medium"
        };
    }

    return {
        label: "Suggested match",
        className: "low"
    };
}


/* =========================================================
   7. SHOW RESULT
   ========================================================= */

function showResult(item, confidenceScore = 1) {
    if (!item) {
        hideResult();
        return;
    }

    // Direct category styling configuration mapping to avoid reference scoping issues
    const categoryStyles = {
        'recyclable': { icon: '♻️', className: 'category-recyclable' },
        'e-waste': { icon: '💻', className: 'category-ewaste' },
        'wet': { icon: '🥬', className: 'category-wet' },
        'dry': { icon: '📦', className: 'category-dry' },
        'special handling': { icon: '⚠️', className: 'category-special' }
    };

    const cleanCategory = (item.category || '').toLowerCase().trim();
    const style = categoryStyles[cleanCategory] || { icon: '🗑️', className: 'category-default' };

    // Set confidence values safely
    let confidenceLabel = "Suggested match";
    let confidenceClass = "low";
    if (confidenceScore >= 0.95) {
        confidenceLabel = "High confidence";
        confidenceClass = "high";
    } else if (confidenceScore >= 0.80) {
        confidenceLabel = "Good match";
        confidenceClass = "medium";
    }

    // Populate UI elements
    resultIcon.textContent = item.icon || style.icon;
    resultCategory.textContent = item.category.toUpperCase();
    resultCategory.className = `result-category ${style.className}`;
    
    resultName.textContent = item.name;
    resultDescription.textContent = item.description || "This item has been classified using the SmartSort waste database.";
    resultWhy.textContent = typeof getWhyText === 'function' ? getWhyText(item) : (item.why || "");
    resultDisposal.textContent = item.disposal || "Follow your local waste collection and recycling guidance.";

    // Special handling notice card visibility logic
    if (item.specialHandling) {
        specialNotice.classList.add("visible");
        specialNotice.innerHTML = `
            <strong>⚠️ Special handling required</strong>
            <p>This item should not be placed in ordinary household waste. Follow appropriate local collection guidance.</p>
        `;
    } else {
        specialNotice.classList.remove("visible");
        specialNotice.innerHTML = "";
    }

    // Handle Confidence HTML layout mapping
    let confidenceElement = document.querySelector(".confidence-indicator");
    if (!confidenceElement) {
        confidenceElement = document.createElement("div");
        confidenceElement.className = "confidence-indicator";
        const resultInfo = document.querySelector(".result-info");
        if (resultInfo) {
            resultInfo.appendChild(confidenceElement);
        }
    }

    confidenceElement.innerHTML = `
        <span>Search match</span>
        <strong class="${confidenceClass}">${confidenceLabel}</strong>
    `;

    // Show result elements structural system
    notFoundSection.classList.remove("visible");
    resultSection.classList.add("visible");

    // Clear smooth view transitions layout spacing tracker
    setTimeout(() => {
        resultSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 80);
}

/* =========================================================
   8. RESULT EXPLANATION
   ========================================================= */

function getWhyText(item) {

    if (item.category === "Wet") {

        return (
            `${item.name} is treated as organic/wet waste ` +
            `in the SmartSort prototype dataset.`
        );

    }

    if (item.category === "Recyclable") {

        return (
            `${item.name} is classified as recyclable ` +
            `in the SmartSort prototype dataset. ` +
            `Actual recyclability can depend on material, ` +
            `contamination and local collection systems.`
        );

    }

    if (item.category === "Dry") {

        return (
            `${item.name} is classified as dry waste ` +
            `in the SmartSort prototype dataset.`
        );

    }

    if (item.category === "E-Waste") {

        return (
            `${item.name} is electronic/electrical equipment ` +
            `and is handled through e-waste management systems.`
        );

    }

    if (item.category === "Special Handling") {

        return (
            `${item.name} is not forced into an ordinary ` +
            `waste category because it requires special care.`
        );

    }

    return "This item has been classified by SmartSort.";

}


/* =========================================================
   9. NOT FOUND
   ========================================================= */

function showNotFound(query, suggestionsList = []) {

    // Hide normal result
    resultSection.classList.remove("visible");

    // Show not-found section
    notFoundSection.classList.add("visible");

    // Clear old suggestions
    alternativeSuggestions.innerHTML = "";

    if (suggestionsList.length > 0) {

        suggestionsList.forEach(item => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "alternative-button";

            button.innerHTML = `
                ${item.icon}
                ${escapeHTML(item.name)}
            `;

            button.addEventListener(
                "click",
                () => {

                    searchInput.value =
                        item.name;

                    clearSearch.classList.add(
                        "visible"
                    );

                    searchWaste(item.name);

                }
            );

            alternativeSuggestions.appendChild(
                button
            );

        });

    } else {

        const message =
            document.createElement("span");

        message.className =
            "no-suggestion-message";

        message.textContent =
            `No close matches for "${query}". Try another item name.`;

        alternativeSuggestions.appendChild(
            message
        );

    }

    hideSuggestions();

    setTimeout(() => {

        notFoundSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 80);
}
   

/* =========================================================
   10. SEARCH MESSAGE
   ========================================================= */

function showSearchMessage(message) {

    searchMessage.textContent =
        message;

}


/* =========================================================
   11. HIDE RESULT
   ========================================================= */

function hideResult() {

    resultSection.classList.remove(
        "visible"
    );

    notFoundSection.classList.remove(
        "visible"
    );

}


/* =========================================================
   12. AUTOCOMPLETE
   ========================================================= */

function updateSuggestions(query) {

    const normalizedQuery =
        normalizeText(query);

    if (!normalizedQuery) {

        hideSuggestions();

        return;

    }

    const exact =
        findExactMatch(normalizedQuery);

    const partials =
        findPartialMatches(normalizedQuery);

    let results = partials;

    /*
       If an exact result exists, put it first.
    */

    if (exact) {

        results = [
            exact,
            ...partials.filter(
                item => item.id !== exact.id
            )
        ];

    }

    currentSuggestions =
        results.slice(0, 6);

    renderSuggestions();

}


function renderSuggestions() {

    suggestions.innerHTML = "";

    selectedSuggestionIndex = -1;

    if (currentSuggestions.length === 0) {

        hideSuggestions();

        return;

    }

    currentSuggestions.forEach(
        (item, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "suggestion-item";

            button.setAttribute(
                "role",
                "option"
            );

            button.dataset.index =
                index;

            button.innerHTML = `
                <span class="suggestion-icon">
                    ${item.icon}
                </span>

                <span class="suggestion-text">

                    <span class="suggestion-name">
                        ${escapeHTML(item.name)}
                    </span>

                    <span class="suggestion-category">
                        ${escapeHTML(item.category)}
                    </span>

                </span>
            `;

            button.addEventListener(
                "click",
                () => {

                    selectSuggestion(index);

                }
            );

            suggestions.appendChild(
                button
            );

        }
    );

    suggestions.classList.add("visible");

    searchInput.setAttribute(
        "aria-expanded",
        "true"
    );

}


function hideSuggestions() {

    suggestions.classList.remove(
        "visible"
    );

    searchInput.setAttribute(
        "aria-expanded",
        "false"
    );

    currentSuggestions = [];

    selectedSuggestionIndex = -1;

}


function selectSuggestion(index) {

    const item =
        currentSuggestions[index];

    if (!item) {
        return;
    }

    searchInput.value =
        item.name;

    hideSuggestions();

    searchWaste(item.name);

}


/* =========================================================
   13. KEYBOARD AUTOCOMPLETE
   ========================================================= */

function handleKeyboardNavigation(event) {

    if (
        !suggestions.classList.contains(
            "visible"
        )
    ) {
        return;
    }

    if (event.key === "ArrowDown") {

        event.preventDefault();

        selectedSuggestionIndex =
            Math.min(
                selectedSuggestionIndex + 1,
                currentSuggestions.length - 1
            );

        updateSelectedSuggestion();

    }


    if (event.key === "ArrowUp") {

        event.preventDefault();

        selectedSuggestionIndex =
            Math.max(
                selectedSuggestionIndex - 1,
                0
            );

        updateSelectedSuggestion();

    }


    if (event.key === "Enter") {

        if (
            selectedSuggestionIndex >= 0
        ) {

            event.preventDefault();

            selectSuggestion(
                selectedSuggestionIndex
            );

        }

    }


    if (event.key === "Escape") {

        hideSuggestions();

    }

}


function updateSelectedSuggestion() {

    const items =
        suggestions.querySelectorAll(
            ".suggestion-item"
        );

    items.forEach(
        (item, index) => {

            item.classList.toggle(
                "selected",
                index ===
                    selectedSuggestionIndex
            );

        }
    );

}


/* =========================================================
   14. RECENT SEARCHES
   ========================================================= */

function getRecentSearches() {

    try {

        const stored =
            localStorage.getItem(
                HISTORY_KEY
            );

        if (!stored) {
            return [];
        }

        const parsed =
            JSON.parse(stored);

        return Array.isArray(parsed)
            ? parsed
            : [];

    } catch (error) {

        console.warn(
            "Unable to read search history:",
            error
        );

        return [];

    }

}


function saveRecentSearch(item) {

    try {

        let history =
            getRecentSearches();

        history =
            history.filter(
                entry =>
                    entry.id !== item.id
            );

        history.unshift({
            id: item.id,
            name: item.name,
            category: item.category,
            icon: item.icon
        });

        history =
            history.slice(0, 6);

        localStorage.setItem(
            HISTORY_KEY,
            JSON.stringify(history)
        );

        renderRecentSearches();

    } catch (error) {

        console.warn(
            "Unable to save search history:",
            error
        );

    }

}


function renderRecentSearches() {

    const history =
        getRecentSearches();

    recentSearches.innerHTML = "";

    if (history.length === 0) {

        recentSection.classList.remove(
            "visible"
        );

        return;

    }

    history.forEach(item => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "recent-item";

        button.innerHTML = `
            <span class="recent-item-icon">
                ${item.icon}
            </span>

            <span>
                ${escapeHTML(item.name)}
            </span>
        `;

        button.addEventListener(
            "click",
            () => {

                searchInput.value =
                    item.name;

                searchWaste(item.name);

            }
        );

        recentSearches.appendChild(
            button
        );

    });

    recentSection.classList.add(
        "visible"
    );

}


/* =========================================================
   15. CATEGORY EXPLORER
   ========================================================= */

function renderCategoryItems(
    category = "All"
) {

    currentCategory = category;

    categoryGrid.innerHTML = "";

    const filteredItems =
        category === "All"
            ? wasteData
            : wasteData.filter(
                item =>
                    item.category === category
            );

    filteredItems.forEach(item => {

        const card =
            document.createElement("article");

        card.className =
            "category-item";

        card.innerHTML = `
            <div class="category-item-icon">
                ${item.icon}
            </div>

            <h3>
                ${escapeHTML(item.name)}
            </h3>

            <p>
                ${escapeHTML(item.description)}
            </p>

            <span class="category-item-category">
                ${escapeHTML(item.category)}
            </span>
        `;

        card.addEventListener(
            "click",
            () => {

                searchInput.value =
                    item.name;

                searchWaste(item.name);

            }
        );

        categoryGrid.appendChild(
            card
        );

    });

}


/* =========================================================
   16. CATEGORY FILTERS
   ========================================================= */

function handleCategoryFilter(event) {

    const button =
        event.target.closest(
            ".category-filter"
        );

    if (!button) {
        return;
    }

    const category =
        button.dataset.category;

    document
        .querySelectorAll(
            ".category-filter"
        )
        .forEach(filter => {

            const isActive =
                filter === button;

            filter.classList.toggle(
                "active",
                isActive
            );

            filter.setAttribute(
                "aria-selected",
                String(isActive)
            );

        });

    renderCategoryItems(category);

}


/* =========================================================
   17. CLEAR SEARCH
   ========================================================= */

function clearSearchInput() {

    searchInput.value = "";

    searchMessage.textContent = "";

    clearSearch.classList.remove(
        "visible"
    );

    hideSuggestions();

    hideResult();

    searchInput.focus();

}


/* =========================================================
   18. CLEAR RESULT
   ========================================================= */

function clearCurrentResult() {

    hideResult();

    searchMessage.textContent = "";

}


/* =========================================================
   19. DARK MODE
   ========================================================= */

function loadTheme() {

    try {

        const savedTheme =
            localStorage.getItem(
                THEME_KEY
            );

        if (savedTheme === "dark") {

            document.body.classList.add(
                "dark-mode"
            );

            updateThemeIcon(true);

            return;

        }


        if (savedTheme === "light") {

            document.body.classList.remove(
                "dark-mode"
            );

            updateThemeIcon(false);

            return;

        }


        /*
           Respect the user's system preference
           if no preference has been saved.
        */

        const prefersDark =
            window.matchMedia &&
            window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

        document.body.classList.toggle(
            "dark-mode",
            prefersDark
        );

        updateThemeIcon(prefersDark);

    } catch (error) {

        console.warn(
            "Unable to load theme:",
            error
        );

    }

}


function updateCategoryCounts() {

    const counts = getCategoryCounts();

    document.querySelectorAll("[data-category-count]")
        .forEach(element => {

            const category =
                element.dataset.categoryCount;

            element.textContent =
                counts[category] || 0;
        });
}


function toggleTheme() {

    const isDark =
        document.body.classList.toggle(
            "dark-mode"
        );

    updateThemeIcon(isDark);

    try {

        localStorage.setItem(
            THEME_KEY,
            isDark
                ? "dark"
                : "light"
        );

    } catch (error) {

        console.warn(
            "Unable to save theme:",
            error
        );

    }

}


function updateThemeIcon(isDark) {

    themeIcon.textContent =
        isDark
            ? "☀"
            : "☾";

    themeToggle.setAttribute(
        "aria-label",
        isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
    );

}


/* =========================================================
   20. MOBILE NAVIGATION
   ========================================================= */

function toggleMobileMenu() {

    const isOpen =
        navLinks.classList.toggle(
            "open"
        );

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

}


function closeMobileMenu() {

    navLinks.classList.remove(
        "open"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

}


/* =========================================================
   21. EVENT LISTENERS
   ========================================================= */


/*
   Search form
*/

searchForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        searchWaste(
            searchInput.value
        );

    }
);


/*
   Live autocomplete
*/

searchInput.addEventListener(
    "input",
    () => {

        const hasText =
            searchInput.value.trim().length > 0;

        clearSearch.classList.toggle(
            "visible",
            hasText
        );

        searchMessage.textContent = "";

        updateSuggestions(
            searchInput.value
        );

    }
);


/*
   Keyboard navigation
*/

searchInput.addEventListener(
    "keydown",
    handleKeyboardNavigation
);


/*
   Clear search button
*/

clearSearch.addEventListener(
    "click",
    clearSearchInput
);


/*
   Popular searches
*/

document
    .querySelectorAll(
        ".popular-item"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const query =
                    button.dataset.search;

                searchInput.value =
                    query;

                clearSearch.classList.add(
                    "visible"
                );

                searchWaste(query);

            }
        );

    });


/*
   Category filters
*/

categoryFilters.addEventListener(
    "click",
    handleCategoryFilter
);


/*
   Clear result
*/

clearResult.addEventListener(
    "click",
    clearCurrentResult
);


/*
   Clear search history
*/

clearHistory.addEventListener(
    "click",
    () => {

        try {

            localStorage.removeItem(
                HISTORY_KEY
            );

        } catch (error) {

            console.warn(
                "Unable to clear history:",
                error
            );

        }

        renderRecentSearches();

    }
);


/*
   Theme
*/

themeToggle.addEventListener(
    "click",
    toggleTheme
);


/*
   Mobile menu
*/

menuToggle.addEventListener(
    "click",
    toggleMobileMenu
);


/*
   Close mobile navigation after
   clicking a navigation link.
*/

document
    .querySelectorAll(
        ".nav-link"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


/*
   Close autocomplete when clicking outside.
*/

document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(
                ".search-wrapper"
            )
        ) {

            hideSuggestions();

        }

    }
);


/* =========================================================
   22. INITIALIZATION
   ========================================================= */

function showRandomFact() {

    const factElement =
        document.querySelector("#sustainabilityFact");

    if (!factElement) return;

    const randomIndex =
        Math.floor(
            Math.random() * sustainabilityFacts.length
        );

    factElement.textContent =
        sustainabilityFacts[randomIndex];
}


function initializeApp() {

    loadTheme();

    renderCategoryItems("All");

    renderRecentSearches();

    hideResult();

    hideSuggestions();

    searchMessage.textContent = "";
    updateCategoryCounts();

    showRandomFact();

    console.log(
        `SmartSort initialized successfully with ${wasteData.length} waste items.`
    );

}


/*
   Start application.
*/

initializeApp();