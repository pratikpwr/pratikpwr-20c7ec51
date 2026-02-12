

# Reduce Bounce Rate by Highlighting AI-Augmented Development

## Problem
Your website doesn't mention your AI/agentic development skills anywhere visible. Recruiters and hiring managers searching for developers who use Cursor, Copilot, AI agents, etc. land on the site and don't immediately see what they're looking for -- so they leave.

## Strategy
Surface your AI-augmented development experience prominently across the site so visitors immediately see you're an "AI-native" developer. This involves changes to 4 key areas:

---

### 1. Hero Section -- Add AI-Native Badge
- Add a second badge or update the subtitle to mention AI-augmented development
- Change subtitle from "Crafting exceptional mobile experiences with Flutter" to something like "Crafting exceptional mobile experiences with Flutter | AI-Augmented Developer"
- This is the first thing visitors see -- it needs to signal your AI skills immediately

### 2. About Section -- Add AI Development Philosophy
- Add a new "AI-Augmented Development" highlight block describing your approach
- Mention tools like Cursor, GitHub Copilot, AI agents for code review, and AI-assisted TDD
- This gives visitors who scroll past the hero a reason to stay and read more

### 3. Experience Section -- Make AI Achievements More Prominent
- Your Incubyte achievements already mention AI (AI agent for PR analysis, AI-assisted TDD) but they're buried in bullet points
- Add an "AI Tools" tag/badge to relevant experience entries so it's visually scannable
- Consider adding tool names (Cursor, Copilot, etc.) to the technologies list for Incubyte

### 4. Skills Section -- Add "AI-Augmented Development" Category
- Add a new skills category with items like: Cursor, GitHub Copilot, AI-Assisted TDD, AI Code Review, Prompt Engineering, Lovable/Bolt
- This ensures the keywords are present for anyone scanning the skills grid

---

### 5. SEO Keywords Update
- Update the meta keywords in `index.html` to include: "AI developer", "Cursor developer", "AI-augmented development", "agentic developer"
- Update the JSON-LD structured data `knowsAbout` array to include AI tools

---

## Technical Details

**Files to modify:**
- `src/components/Hero.tsx` -- Update subtitle and add AI badge
- `src/components/About.tsx` -- Add AI development philosophy section
- `src/components/Experience.tsx` -- Add AI tool tags to Incubyte entry
- `src/components/Skills.tsx` -- Add new "AI-Augmented Development" skill category
- `index.html` -- Update meta keywords and JSON-LD structured data

All changes are content/copy updates and minor UI additions using existing component patterns. No new dependencies needed.

