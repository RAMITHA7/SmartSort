# ♻️ SmartSort --- Smart Trash Segregation Guide

> **Know It. Sort It. Sustain It.**

SmartSort is a front-end waste-segregation web application created for a
**micro-hackathon based on SDG 11: Sustainable Cities & Communities**.
It helps users identify where everyday waste belongs by searching for an
item and matching it against a structured JavaScript waste dataset.

The required hackathon deliverable --- a **search-bar interface backed
by a dictionary/dictionary-array style dataset** --- is the core of the
project. SmartSort expands that requirement with a polished interface,
category exploration, typo suggestions, disposal guidance, recent-search
history, dark mode, accessibility features, responsive design, and
SDG-focused educational content.

------------------------------------------------------------------------

## 🌿 Project Preview

![SmartSort home page](assets/smartsort-home.png)

### Waste category explorer

![SmartSort category explorer](assets/smartsort-categories.png)

### Classification result

![SmartSort classification result](assets/smartsort-result.png)

### How SmartSort works

![SmartSort how it works section](assets/smartsort-how-it-works.png)

### Recent searches

![SmartSort recent searches](assets/smartsort-recent-searches.png)

### SDG 11 impact

![SmartSort SDG 11 section](assets/smartsort-sdg11.png)

### Transparency and responsible guidance

![SmartSort transparency section](assets/smartsort-transparency.png)

------------------------------------------------------------------------

## 🎯 Problem Statement

**SDG 11: Sustainable Cities & Communities --- Smart Trash Segregation
Guide**

Create a search tool where users type an item, such as **"plastic
bottle"** or **"banana peel"**, and the system categorizes it into an
appropriate waste category.

### Required categories

-   Wet
-   Dry
-   Recyclable
-   E-Waste

SmartSort also adds a fifth **Special Handling** category for items that
should not simply be treated like ordinary household waste.

------------------------------------------------------------------------

## 💡 Our Solution

SmartSort turns a simple dictionary-backed search task into an
interactive waste-awareness experience.

Instead of only displaying a category name, the application can:

-   identify an exact item or known keyword;
-   normalize differences in capitalization and extra spaces;
-   suggest possible items for incomplete or mistyped searches;
-   show the item's category, description and disposal guidance;
-   warn users when special handling is required;
-   let users browse the entire dataset by category;
-   remember recent successful searches;
-   provide sustainability tips;
-   support light and dark themes;
-   adapt to desktop, tablet and mobile screens.

The project remains intentionally lightweight: its core classification
logic runs directly in the browser using **HTML, CSS and vanilla
JavaScript**.

------------------------------------------------------------------------

## ✨ Implemented Features

### 🔍 1. Dictionary-backed waste search

The main feature is a search bar connected to the JavaScript `wasteData`
array. Each waste object contains structured information such as:

``` js
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
    description: "...",
    disposal: "...",
    specialHandling: false
}
```

This single dataset powers the search engine, category explorer,
category counts, result cards and recent-search interactions.

### 🧠 2. Input normalization

Search text is normalized before matching. This means inputs such as:

``` text
Plastic Bottle
PLASTIC BOTTLE
 plastic   bottle
```

are handled consistently.

### ✅ 3. Exact keyword matching

SmartSort first looks for a strict match against the known keywords in
the dataset. This keeps normal classification predictable and avoids
silently guessing an unrelated waste item.

### ✨ 4. Partial and typo suggestions

When an exact match is not available, SmartSort can generate close
suggestions instead of immediately failing.

The project includes a lightweight **edit-distance similarity
algorithm** for typo tolerance. Close matches are ranked and the best
suggestions are presented to the user.

This is intentionally not presented as machine learning; it is a
browser-based matching enhancement built for the prototype.

### 🔽 5. Live autocomplete

While the user types, SmartSort displays matching suggestions below the
search field.

Autocomplete includes:

-   item icon;
-   item name;
-   waste category;
-   clickable suggestions;
-   keyboard navigation.

### ⌨️ 6. Keyboard-friendly search

The autocomplete interface supports keyboard interaction, including
navigation through suggestions and normal search submission, making the
experience faster and more accessible.

### 🧹 7. Clear search and clear result controls

Users can quickly reset the search field or remove the current result
without reloading the webpage.

### 🏷️ 8. Five waste categories

SmartSort currently organizes the prototype dataset into:

  -----------------------------------------------------------------------
  Category                            Purpose
  ----------------------------------- -----------------------------------
  🥑 **Wet**                          Organic and biodegradable
                                      kitchen/plant waste represented in
                                      the prototype

  📦 **Dry**                          Dry materials that are not
                                      identified as recyclable in the
                                      prototype

  ♻️ **Recyclable**                   Paper, glass, metal and selected
                                      recyclable packaging represented in
                                      the dataset

  💻 **E-Waste**                      Electrical and electronic waste

  ⚠️ **Special Handling**             Items requiring additional care or
                                      an appropriate collection route
  -----------------------------------------------------------------------

The first four satisfy the hackathon's required classification types.
**Special Handling** is an added safety-oriented enhancement.

### 🧭 9. Quick category shortcuts

The home section contains a vertical **Explore Categories** panel.
Selecting Wet, Dry, Recyclable, E-Waste or Special takes the user
directly to the corresponding category view.

### 🗂️ 10. Dynamic category explorer

The category section is generated from the same `wasteData` array
instead of manually duplicating every waste item in HTML.

Users can filter by:

-   All
-   Wet
-   Dry
-   Recyclable
-   E-Waste
-   Special

Each card displays the item's icon, name, short description and
category. Selecting a card can also run that item through the normal
SmartSort search/result flow.

### 🔢 11. Automatic category counts

The numbers shown beside category filters are calculated from the
dataset when the application initializes. If the dataset changes, the
displayed totals can update without manually rewriting the HTML values.

### 📋 12. Detailed result card

A successful search displays more than a one-word answer. The result
area contains:

-   category;
-   waste-item name;
-   icon;
-   description;
-   a **Why?** explanation;
-   **What to do** disposal/handling guidance;
-   a special-handling notice when applicable.

### ⚠️ 13. Special-handling warnings

Items marked with `specialHandling: true` receive a dedicated warning so
that potentially sensitive waste is not visually treated like an
ordinary item.

### 🔎 14. Friendly "not found" experience

If SmartSort cannot find an exact match, it uses a dedicated not-found
interface rather than displaying a broken or empty result.

Where relevant, close suggested items are provided as clickable
alternatives.

### 🕘 15. Recent search history

Successful searches are stored in browser `localStorage`.

The recent-search feature:

-   keeps the latest successful items;
-   avoids unnecessary duplicate entries;
-   displays recent items as reusable buttons;
-   allows the user to clear the history;
-   survives a normal page refresh as long as the browser retains the
    stored data.

### 🌙 16. Dark mode

SmartSort includes a light/dark theme toggle.

The theme system:

-   uses CSS custom properties;
-   stores the selected theme in `localStorage`;
-   restores the saved preference on the next visit;
-   can respect the device/system dark-mode preference when no SmartSort
    preference has been saved.

### 🌱 17. Sustainability tips

A sustainability banner displays a randomly selected educational tip
when SmartSort initializes, reinforcing the project's awareness goal
rather than making the interface purely functional.

### 🏙️ 18. SDG 11 integration

The website includes a dedicated impact section connecting the project
with **UN Sustainable Development Goal 11 --- Sustainable Cities &
Communities**, particularly the project's waste-management theme.

The interface explains that SmartSort is an educational prototype
designed to support awareness around waste segregation and responsible
waste management.

### 🛡️ 19. Responsible-guidance / transparency section

SmartSort clearly states that:

-   it is an educational hackathon prototype;
-   classifications are based on the prototype dataset;
-   real collection and recycling requirements can vary by local
    authority;
-   special-handling items should follow applicable local guidance and
    authorised collection channels.

This avoids presenting the prototype as a universal municipal
waste-management authority.

### 📱 20. Responsive design

The interface adapts to different screen sizes.

Responsive changes include:

-   collapsible mobile navigation;
-   stacked search controls on smaller screens;
-   responsive result details;
-   category grids that reduce from multiple columns to two and then
    one;
-   vertically stacked "How It Works" cards;
-   mobile-friendly SDG and footer layouts.

### 🍔 21. Mobile navigation

On smaller screens, the desktop navigation is replaced by a mobile menu.
Selecting a navigation link closes the menu to keep the interaction
clean.

### ♿ 22. Accessibility enhancements

Accessibility-related implementation includes:

-   semantic sections and buttons;
-   `aria-label` attributes;
-   `aria-expanded` state;
-   `aria-controls`;
-   autocomplete `listbox` semantics;
-   category `tablist` / `tab` semantics;
-   `aria-selected` updates;
-   visible `:focus-visible` outlines;
-   keyboard autocomplete support;
-   a `prefers-reduced-motion` CSS mode.

### 🔐 23. Safer user-text rendering

User-controlled/search-related text is escaped before being inserted
into generated HTML where required, reducing the chance of input being
interpreted as unintended HTML.

### 🎨 24. Custom UI/UX design system

The interface uses a consistent design language built with CSS
variables, including:

-   deep green sustainability palette;
-   soft lime accents;
-   light and dark surfaces;
-   reusable border radii;
-   reusable shadows;
-   smooth transitions;
-   responsive container sizing;
-   Playfair Display for prominent headings;
-   DM Sans for interface/body text;
-   sticky blurred navigation;
-   cards, pills, filters and subtle decorative background shapes.

### 🧩 25. Single-page navigation

The top navigation links to:

-   Home
-   Categories
-   How It Works
-   About

Smooth scrolling keeps the project feeling like one cohesive
application.

------------------------------------------------------------------------

## 🔄 How SmartSort Works

``` text
User enters an item
        ↓
Input is normalized
        ↓
Search wasteData[] keywords
        ↓
Exact match found?
   ┌────┴────┐
  Yes        No
   ↓          ↓
Show result   Find partial / typo suggestions
   ↓          ↓
Save recent   Show suggested alternatives
search
   ↓
Category + explanation + disposal guidance
```

The category explorer also reads from the same dataset:

``` text
wasteData[]
    ↓
Filter selected category
    ↓
Generate matching cards
    ↓
User selects a card
    ↓
Reuse normal SmartSort result flow
```

------------------------------------------------------------------------

## 🛠️ Technology Stack

  -----------------------------------------------------------------------
  Technology                          Use
  ----------------------------------- -----------------------------------
  **HTML5**                           Semantic structure and application
                                      sections

  **CSS3**                            UI design, responsive layout,
                                      animations and dark mode

  **Vanilla JavaScript**              Dataset, search logic, filtering,
                                      history, theme and interactions

  **localStorage**                    Recent searches and theme
                                      persistence

  **Google Fonts**                    DM Sans and Playfair Display
  -----------------------------------------------------------------------

No front-end framework is required for the core application.

------------------------------------------------------------------------

## 📁 Project Structure

``` text
SmartSort/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    ├── smartsort-home.png
    ├── smartsort-categories.png
    ├── smartsort-result.png
    ├── smartsort-how-it-works.png
    ├── smartsort-recent-searches.png
    ├── smartsort-sdg11.png
    └── smartsort-transparency.png
```

> Keep the `assets` folder beside `README.md` if you want the
> screenshots to appear correctly on GitHub.

------------------------------------------------------------------------

## 🚀 Running the Project

SmartSort is a front-end project, so setup is simple.

1.  Download or clone the repository.
2.  Keep `index.html`, `style.css` and `script.js` in the same project
    folder.
3.  Open `index.html` in a modern browser.

For development, opening the project folder in **VS Code** and using a
local development server such as Live Server can make testing more
convenient.

------------------------------------------------------------------------

## 🧪 Suggested Demo Searches

Try searches that demonstrate different categories:

``` text
banana peel
plastic bottle
mobile phone
battery
```

These are also surfaced as quick-search examples in the interface.

------------------------------------------------------------------------

## 🧠 Design Decisions

### Why use one structured dataset?

Using a single `wasteData` array avoids maintaining separate copies of
the same information. Search, category cards, category counts and
recent-search actions can all work with the same objects.

### Why suggest instead of automatically accepting every typo?

For waste guidance, an uncertain input should not silently become a
confident classification. SmartSort therefore keeps exact matching as
the primary classification path and uses close matches as suggestions
when the user's input is uncertain.

### Why add Special Handling?

The hackathon requires Wet, Dry, Recyclable and E-Waste. Some prototype
items do not fit comfortably into an ordinary household category, so
SmartSort adds **Special Handling** to communicate that they require
additional care or an appropriate collection route.

### Why include disposal guidance?

A category alone tells the user *what* an item is. The result card also
gives a simple next-step explanation, making the prototype more useful
as an educational guide.

------------------------------------------------------------------------

## 🌍 Sustainability & SDG 11

SmartSort was created around **SDG 11: Sustainable Cities &
Communities**.

The project's central idea is simple: clearer waste-segregation
decisions can improve awareness of responsible waste handling in cities
and communities. The website therefore combines classification with
education, sustainability tips and handling guidance rather than acting
only as a search box.

------------------------------------------------------------------------

## ⚠️ Important Disclaimer

SmartSort is an **educational hackathon prototype**.

Its classifications and handling text are based on the project's
prototype dataset. Actual waste-management rules, recycling acceptance,
municipal collection systems and special-waste procedures vary by
location.

For real disposal decisions --- especially for items requiring special
handling --- users should follow the rules and authorised collection
guidance provided by their local authority.

------------------------------------------------------------------------

## 🔮 Possible Future Enhancements

These are **not claimed as part of the current uploaded build**, but are
natural future extensions:

-   image-based waste recognition;
-   camera capture on mobile devices;
-   a trained waste-specific computer-vision model;
-   location-aware municipal disposal guidance;
-   multilingual support;
-   backend/API-based dataset management;
-   user feedback for missing items;
-   recycling-centre maps;
-   analytics for commonly searched waste items.

------------------------------------------------------------------------

## 🏆 Hackathon Highlights

SmartSort goes beyond the minimum search-and-dictionary requirement
while keeping that requirement clearly visible at its core.

Key highlights include:

-   structured dictionary-array dataset;
-   five-category classification system;
-   exact search and keyword aliases;
-   typo/partial-match suggestions;
-   autocomplete;
-   keyboard navigation;
-   detailed disposal guidance;
-   special-handling alerts;
-   dynamic category explorer;
-   automatic category counts;
-   recent-search persistence;
-   dark mode persistence;
-   responsive UI;
-   accessibility considerations;
-   sustainability tips;
-   SDG 11 impact section;
-   transparent prototype disclaimer;
-   polished, consistent visual design.

------------------------------------------------------------------------

## 👩‍💻 Built For

**Micro-Hackathon --- SDG 11: Sustainable Cities & Communities**

### SmartSort

**Know It. Sort It. Sustain It.**

------------------------------------------------------------------------

## 📄 License

Add your preferred project license here if your hackathon or repository
requires one.
