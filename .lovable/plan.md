

## Add Incubyte Experience and Update EatOS Period

Two changes to `src/components/Experience.tsx`:

### 1. Add new Incubyte entry at position 0 in the `experiences` array

- **id**: `"incubyte"`
- **company**: `"Incubyte"`
- **role**: `"Software Crafter II"`
- **period**: `"Aug 2025 – Present"`
- **location**: `"India (Remote)"`
- **link**: `"https://www.incubyte.co/"` (assuming standard company URL)
- **description** (3 items):
  - Effectively managed technical requirements, translating complex needs into actionable tickets and providing clear client communication.
  - Proactively identified and mitigated potential risks by raising technical and project concerns during client communication.
  - Led and facilitated Scrum ceremonies, including retrospectives, to drive continuous team improvement and project efficiency.
- **achievements** (3 items):
  - Significantly improved the development workflow by creating a custom GraphQL Network DevTools Extension and publishing it to Pub.dev, enabling easier debugging of GraphQL requests for the Flutter team.
  - Accelerated code quality and review cycles by implementing an AI agent to analyze previous Pull Request comments, sharing the learnings and best practices within the mobile guild.
  - Enhanced application quality by maintaining high test coverage and implementing Test-Driven Development (TDD) practices, leveraging AI tools.
- **apps**: none

### 2. Update EatOS period

Change `"July 2023 – Present"` to `"July 2023 – June 2025"` on the existing Eigital entry.

### Technical Details

Both changes are in the `experiences` array in `src/components/Experience.tsx`. The new Incubyte entry will be inserted before the existing Eigital entry. Since the first card (`index === 0`) gets `lg:col-span-2`, Incubyte will now be the full-width featured card.

