# BuildWhileBleeding Public Library Integration Map: Seuss

**Document Status:** Canonical Integration & Maintenance Specification
**Source Repository:** `RyanrealAF/Seuss`
**Target Web Destination:** `https://buildwhilebleeding.com/library/seuss`
**Practical Laboratory Target:** `https://buildwhilebleeding.com/hardwire`

---

## 1. Executive Summary & Architecture

The `RyanrealAF/Seuss` repository serves as the independent source of truth for the *Seuss & Hip-Hop: Linguistic Legacy in Contemporary Rap* 5-book series. It contains source manuscripts, the governing Series Bible, continuity ledgers, evidence notes, exercises, and publication PDFs.

`BuildWhileBleeding.com` serves as the public-facing library presentation layer. The website consumes and presents content from this repository without modifying or creating runtime dependencies on it.

```
+-------------------------------------------------------------+
|                     RyanrealAF/Seuss                        |
|                  (GitHub - The Workshop)                    |
|  - Source Manuscripts (Markdown)                            |
|  - Governing Series Bible & Continuity Ledgers              |
|  - Evidence Notes & Claim Registries                        |
|  - Publication PDFs                                         |
+-------------------------------------------------------------+
                              |
                              | Curated Ingestion / Presentation
                              v
+-------------------------------------------------------------+
|                 BuildWhileBleeding.com                      |
|                  (The Public Library)                       |
|                                                             |
|   /library/seuss (Series Overview & Navigation)             |
|   ├── /book-1  (Anapestic Architecture)                     |
|   ├── /book-2  (Layered Grooves & Polyrhythms)             |
|   ├── /book-3  (Hyperrhyme & Semantic Density)              |
|   ├── /book-4  (Subgenre Hooks: Boom-Bap/Drill/Trap)        |
|   ├── /book-5  (Instructor's Workshop Curriculum)           |
|   ├── /evidence (Public Claim & Source Registry)            |
|   └── /downloads (Publication PDFs)                         |
|                                                             |
|                              | Contextual Links             |
|                              v                              |
|   /hardwire (Practical Application Laboratory)             |
+-------------------------------------------------------------+
```

---

## 2. Public Library Map & Routes

### Series Overview
- **Series Title:** *Seuss & Hip-Hop: Linguistic Legacy in Contemporary Rap*
- **Public Route:** `https://buildwhilebleeding.com/library/seuss`
- **Primary PDF Download:** `/library/seuss/downloads/seuss-and-hip-hop-overview.pdf` (`Seuss and Hip-Hop- Linguistic Legacy in Contemporary Rap.pdf`)

---

### Book 1: Anapestic Architecture: Mapping the Narrative Engine
- **Public Route:** `https://buildwhilebleeding.com/library/seuss/book-1`
- **PDF Location:** `Book 1- Anapestic Architecture- Mapping the Narrative Engine.pdf`
- **PDF Download Route:** `/library/seuss/downloads/book-1-anapestic-architecture.pdf`
- **Source Files:** `book1-ch01-the-beat-you-learned-before-you-could-read.md` through `book1-ch13-from-anchor-to-dynamism.md`
- **Chapter Structure:**
  1. *Chapter 1:* The Beat You Learned Before You Could Read (`/library/seuss/book-1/ch-01`)
  2. *Chapter 2:* Reading the Line: The Scansion Manual (`/library/seuss/book-1/ch-02`)
  3. *Chapter 3:* The Complete Line: Acatalectic Anapestic Tetrameter (`/library/seuss/book-1/ch-03`)
  4. *Chapter 4:* Iambic Substitution (`/library/seuss/book-1/ch-04`)
  5. *Chapter 5:* Catalexis and the Dramatic Stop (`/library/seuss/book-1/ch-05`)
  6. *Chapter 6:* Trochaic Inversion (`/library/seuss/book-1/ch-06`)
  7. *Chapter 7:* The Metrical Mandate and the Measure of Coherence (`/library/seuss/book-1/ch-07`)
  8. *Chapter 8:* Load and the Extraneous Load Filter (`/library/seuss/book-1/ch-08`)
  9. *Chapter 9:* Entrainment, Prediction, and the Satisfaction Cycle (`/library/seuss/book-1/ch-09`)
  10. *Chapter 10:* What Reading-Prosody Research Says, and Doesn't (`/library/seuss/book-1/ch-10`)
  11. *Chapter 11:* Geisel's Engine: A Case Study (`/library/seuss/book-1/ch-11`)
  12. *Chapter 12:* The Sixteen-Line Mnemonic (`/library/seuss/book-1/ch-12`)
  13. *Chapter 13:* From Anchor to Dynamism (`/library/seuss/book-1/ch-13`)

---

### Book 2: From Single Pulse to Layered Groove: Designing Polyrhythmic Flows
- **Public Route:** `https://buildwhilebleeding.com/library/seuss/book-2`
- **PDF Location:** `Book 2- From Single Pulse to Layered Groove- Designing Polyrhythmic Flows.pdf`
- **PDF Download Route:** `/library/seuss/downloads/book-2-layered-grooves.pdf`
- **Source File:** `book2-full-text.md`
- **Chapter Structure:**
  1. *Chapter 1:* Grid vs. Foot: Beat-Grid Mapping (`/library/seuss/book-2/ch-01`)
  2. *Chapter 2:* Anacrusis and the Pickup Beat (`/library/seuss/book-2/ch-02`)
  3. *Chapter 3:* Syncopation and the Displacement Engine (`/library/seuss/book-2/ch-03`)
  4. *Chapter 4:* Isochrony vs. Variable Delivery (`/library/seuss/book-2/ch-04`)
  5. *Chapter 5:* The Accumulation Method (Additive Synthesis) (`/library/seuss/book-2/ch-05`)
  6. *Chapter 6:* The "Grit Gospel" Arc: Act I (Stability) (`/library/seuss/book-2/ch-06`)
  7. *Chapter 7:* The "Grit Gospel" Arc: Act II (Tension) (`/library/seuss/book-2/ch-07`)
  8. *Chapter 8:* The "Grit Gospel" Arc: Act III (Climax) (`/library/seuss/book-2/ch-08`)
  9. *Chapter 9:* The "Grit Gospel" Arc: Act IV (Resolution) (`/library/seuss/book-2/ch-09`)
  10. *Chapter 10:* Practice Architecture: The 15–30 Minute Daily Plan (`/library/seuss/book-2/ch-10`)

---

### Book 3: Hyperrhyme Mapping: Encoding Semantic Density
- **Public Route:** `https://buildwhilebleeding.com/library/seuss/book-3`
- **PDF Location:** `Book 3- Hyperrhyme Mapping- Encoding Semantic Density.pdf`
- **PDF Download Route:** `/library/seuss/downloads/book-3-hyperrhyme-mapping.pdf`
- **Source File:** `book3-full-text.md`
- **Chapter Structure:**
  1. *Chapter 1:* Phonological Priming and Semantic Search (`/library/seuss/book-3/ch-01`)
  2. *Chapter 2:* The Hyperrhyme Matrix: Three Requirements (`/library/seuss/book-3/ch-02`)
  3. *Chapter 3:* Working Memory and the Phonological Loop (`/library/seuss/book-3/ch-03`)
  4. *Chapter 4:* Internal Rhyme Architecture (`/library/seuss/book-3/ch-04`)
  5. *Chapter 5:* Enjambment and Syntactic Overhang (`/library/seuss/book-3/ch-05`)
  6. *Chapter 6:* Near-Rhyme and Acoustic Precision (`/library/seuss/book-3/ch-06`)
  7. *Chapter 7:* The Chronometric System Verse (4-Line Full Text) (`/library/seuss/book-3/ch-07`)
  8. *Chapter 8:* Hyperrhyme in Polyrhythmic Grids (`/library/seuss/book-3/ch-08`)
  9. *Chapter 9:* Semantic Density vs. Extraneous Overload (`/library/seuss/book-3/ch-09`)
  10. *Chapter 10:* The Hyperrhyme Synthesis and Handoff (`/library/seuss/book-3/ch-10`)

---

### Book 4: Anapestic Anchor and Metrical Hooks Across Hip-Hop Subgenres
- **Public Route:** `https://buildwhilebleeding.com/library/seuss/book-4`
- **PDF Location:** `Book 4- Anapestic Anchor and Metrical Hooks Across Hip-Hop Subgenres.pdf`
- **PDF Download Route:** `/library/seuss/downloads/book-4-subgenre-applications.pdf`
- **Source File:** `book4-full-text.md`
- **Chapter Structure:**
  1. *Chapter 1:* The Anchor Across Genres: Three Functional Roles (`/library/seuss/book-4/ch-01`)
  2. *Chapter 2:* Boom-Bap: The Anchor as Primary Stabilizer (`/library/seuss/book-4/ch-02`)
  3. *Chapter 3:* Drill: The Anchor as Melancholic Subverter (`/library/seuss/book-4/ch-03`)
  4. *Chapter 4:* The Weaponized Satisfaction Cycle in Drill (`/library/seuss/book-4/ch-04`)
  5. *Chapter 5:* Trap: The Anchor as Dynamic Compressor (`/library/seuss/book-4/ch-05`)
  6. *Chapter 6:* Subgenre Comparative Analysis (3-Way Grid) (`/library/seuss/book-4/ch-06`)
  7. *Chapter 7:* Artist Attribution and Evidence Ethics (`/library/seuss/book-4/ch-07`)
  8. *Chapter 8:* Metrical Hooks and Lyric Memorability (`/library/seuss/book-4/ch-08`)
  9. *Chapter 9:* Cross-Genre Adaptation Drills (`/library/seuss/book-4/ch-09`)
  10. *Chapter 10:* Subgenre Synthesis and Handoff to Pedagogy (`/library/seuss/book-4/ch-10`)

---

### Book 5: Instructor's Chapter: Designing a 6-Week Workshop on Rhythmic Transfer
- **Public Route:** `https://buildwhilebleeding.com/library/seuss/book-5`
- **PDF Location:** `Book 5- Instructor's Chapter- Designing a 6-Week Workshop on Rhythmic Transfer.pdf`
- **PDF Download Route:** `/library/seuss/downloads/book-5-instructors-workshop.pdf`
- **Source File:** `book5-full-text.md`
- **Chapter Structure:**
  1. *Chapter 1:* Pedagogy Architecture and the Recognition-to-Transfer Pipeline (`/library/seuss/book-5/ch-01`)
  2. *Chapter 2:* Week 1: Recognizing the Metrical Anchor (`/library/seuss/book-5/ch-02`)
  3. *Chapter 3:* Week 2: Grid-Level Transcription and Anacrusis (`/library/seuss/book-5/ch-03`)
  4. *Chapter 4:* Week 3: Accumulation Buildups and Isochrony (`/library/seuss/book-5/ch-04`)
  5. *Chapter 5:* Week 4: Hyperrhyme Matrix Auditing in Practice (`/library/seuss/book-5/ch-05`)
  6. *Chapter 6:* Week 5: Subgenre Adaptation and Ethics Module (`/library/seuss/book-5/ch-06`)
  7. *Chapter 7:* Week 6: Capstone Performance and Synthesis (`/library/seuss/book-5/ch-07`)
  8. *Chapter 8:* The Master 30/30/25/15 Rubric and Assessment Guide (`/library/seuss/book-5/ch-08`)
  9. *Chapter 9:* Universal Design for Learning (UDL) Integration Guide (`/library/seuss/book-5/ch-09`)
  10. *Chapter 10:* Workshop Instructor's Field Manual and Troubleshooting (`/library/seuss/book-5/ch-10`)

---

## 3. Public vs. Non-Public Classification

To preserve repository integrity while serving a clean web experience, files are classified into public-facing and non-public (internal workshop) assets.

### Public Reader-Facing Assets (Exposed at `/library/seuss`)
1. **Chapter Manuscripts:**
   - `book1-ch01-*.md` through `book1-ch13-*.md`
   - `book2-full-text.md`
   - `book3-full-text.md`
   - `book4-full-text.md`
   - `book5-full-text.md`
2. **End-of-Chapter Evidence Notes:** End-of-chapter evidence tables containing claim classifications (Cited research, Established theory, Series framework).
3. **Publication PDFs:**
   - `Book 1- Anapestic Architecture- Mapping the Narrative Engine.pdf`
   - `Book 2- From Single Pulse to Layered Groove- Designing Polyrhythmic Flows.pdf`
   - `Book 3- Hyperrhyme Mapping- Encoding Semantic Density.pdf`
   - `Book 4- Anapestic Anchor and Metrical Hooks Across Hip-Hop Subgenres.pdf`
   - `Book 5- Instructor's Chapter- Designing a 6-Week Workshop on Rhythmic Transfer.pdf`
   - `Seuss and Hip-Hop- Linguistic Legacy in Contemporary Rap.pdf`

### Non-Public / Internal Workshop Assets (Do NOT expose on public website)
1. **Governing Series Bible:** `00-series-bible.md` (Governing specification for author/editors; not a public manuscript).
2. **Continuity Ledgers:** `book1-ledger.md`, `book2-ledger.md`, `book3-ledger.md`, `book4-ledger.md`, `book5-ledger.md` (Internal continuity tracking).
3. **Draft Blueprints & Work Files:** `book1-00-blueprint.md`, `book1-front-and-back-matter.md` (Pre-publication drafting blueprints).
4. **Integration Maps & Tooling Scripts:** `BUILDWHILEBLEEDING_LIBRARY.md`, `/home/jules/self_created_tools/*` (Maintenance & development infrastructure).

---

## 4. Hardwire Cross-Reference Map

The public library connects theoretical concepts in *Seuss* to practical manipulation in *Hardwire* (`https://buildwhilebleeding.com/hardwire`). Links respond to natural reader transitions: *"Now that I understand this concept, where can I hear or manipulate it?"*

### Catalog of Contextual Cross-References:

| Book & Chapter | Topic / Theoretical Concept | Hardwire Application Link | Reader Prompt / Context |
|---|---|---|---|
| **Book 1, Ch. 01** | Anapestic Anchor & Meter Baseline | `https://buildwhilebleeding.com/hardwire` | Practice scanning and manipulating anapestic metrical baselines in real time. |
| **Book 1, Ch. 07** | Rhythmic Coherence ($RC_{foot}$) | `https://buildwhilebleeding.com/hardwire` | Audit foot-level metrical coherence using Hardwire's automated meter analyzer. |
| **Book 2, Ch. 01** | 16-Subdivision Beat-Grid Mapping | `https://buildwhilebleeding.com/hardwire` | Load text into the 16th-subdivision grid editor to visualize beat landings. |
| **Book 2, Ch. 03** | Syncopation & Displacement Engine | `https://buildwhilebleeding.com/hardwire` | Test rhythmic displacement and stress shifts over active drum tracks. |
| **Book 3, Ch. 02** | Hyperrhyme Matrix & Acoustic Overlap | `https://buildwhilebleeding.com/hardwire` | Evaluate multisyllabic rhyme density using the Hyperrhyme Matrix tool. |
| **Book 3, Ch. 08** | Polyrhythmic Grid Rhyme Insertion | `https://buildwhilebleeding.com/hardwire` | Experiment with placing 3+ syllable hyperrhymes into dynamic beat grids. |
| **Book 4, Ch. 01** | Subgenre Functional Anchor Roles | `https://buildwhilebleeding.com/hardwire` | Test the Anapestic Anchor across Boom-Bap, Drill, and Trap rhythm engines. |
| **Book 4, Ch. 06** | 3-Way Subgenre Comparative Grid | `https://buildwhilebleeding.com/hardwire` | Compare identical verse skeletons delivered in Boom-Bap, Drill, and Trap pockets. |
| **Book 5, Ch. 01** | Recognition-to-Transfer Pipeline | `https://buildwhilebleeding.com/hardwire` | Apply curriculum drills in Hardwire's interactive rhythm workshop suite. |
| **Book 5, Ch. 08** | Capstone Performance & Rubric Audit | `https://buildwhilebleeding.com/hardwire` | Perform and record 16-bar capstones with real-time grid and metric feedback. |

---

## 5. Evidence & Editorial System Discipline

The *Seuss* repository maintains intellectual honesty through a strict 3-tier claim classification and editorial tagging system.

### Claim Classification System
- **(a) Cited research:** Specific empirical findings (e.g., Miller & Schwanenflugel 2008).
- **(b) Established theory:** Foundational cognitive models (e.g., Cognitive Load Theory, Baddeley's Working Memory model, Neural Entrainment).
- **(c) Series framework:** Interpretive models original to this series (e.g., Anapestic Anchor, Extraneous Load Filter, Weaponized Satisfaction Cycle, Legacy Engine).

### Editorial Tags Preservation
Editorial tags (`[CITATION NEEDED]`, `[VERIFY]`, `[EXTENSION]`, `[DECISION]`) remain in source files until resolved by author/research verification. The public website parser can suppress raw bracketed syntax or display clean status indicators without altering source files.

---

## 6. Discrepancies Requiring Review

The following discrepancies between repository files, series bible specifications, and structural conventions have been identified for author review:

### Discrepancy 1: File Storage Structure (Individual Files vs. Consolidated Full-Text)
- **File(s):** `book1-ch01-*.md` .. `book1-ch13-*.md` vs. `book2-full-text.md`, `book3-full-text.md`, `book4-full-text.md`, `book5-full-text.md`
- **Current Value:** Book 1 is split into 13 standalone Markdown chapter files. Books 2 through 5 are stored as single consolidated `bookN-full-text.md` files.
- **Conflicting Value/Source:** Structural inconsistency in repository file layout across books.
- **Why It Matters:** Web ingestion pipelines must handle both standalone chapter files (Book 1) and header-segmented full-text files (Books 2–5).
- **Recommended Review Action:** Maintain source files in current state to protect repo stability; configure the BuildWhileBleeding website parser to parse `### Chapter X:` headers for Books 2–5 and individual files for Book 1.

### Discrepancy 2: Header Hierarchy Conventions Across Full-Text Files
- **File(s):** `book2-full-text.md`, `book3-full-text.md`, `book4-full-text.md`, `book5-full-text.md`
- **Current Value:** `book2-full-text.md` uses `# Book 2:` for H1 and `## Designing Polyrhythmic Flows` for H2. `book4-full-text.md` combines title and subtitle into H1 `# Book 4: Anapestic Anchor and Metrical Hooks Across Hip-Hop Subgenres` with no H2.
- **Conflicting Value/Source:** Markdown heading hierarchy style varies slightly across full-text documents.
- **Why It Matters:** Automated ingestion parsers relying on strict H1/H2 split for book subtitle metadata could fail or miss subtitles.
- **Recommended Review Action:** Implement flexible regex parsing in the BuildWhileBleeding ingestion pipeline to handle both split H1/H2 and unified H1 headers.

### Discrepancy 3: Definition of Catalexis (Issue I-01)
- **File(s):** `00-series-bible.md` (§4 & §8 Issue I-01), `book1-ch05-catalexis-and-the-dramatic-stop.md`
- **Current Value:** Older source notes defined catalexis as "dropping the final unstressed syllable."
- **Conflicting Value/Source:** Anapestic tetrameter naturally ends on a stress (`x x /`), making "dropping an unstressed final syllable" impossible. Series Bible §4 overrides this to "shortened final foot or silent final beat `∧`".
- **Why It Matters:** Prevents prosodic inaccuracies in published chapters.
- **Recommended Review Action:** Confirm all reader-facing prose strictly adheres to the updated Bible §4 definition (shortened foot / rest beat `∧`).

### Discrepancy 4: Working Title Variations
- **File(s):** `00-series-bible.md` (§1 Series Map) vs. `book1-00-blueprint.md`
- **Current Value:** Series Bible lists early evaluation working title for Book 1 as "Foundations of Flow", while manuscripts use *Anapestic Architecture: Mapping the Narrative Engine*.
- **Conflicting Value/Source:** Working title draft logs vs. final manuscript titles.
- **Why It Matters:** Ensures unified naming on the public website.
- **Recommended Review Action:** Lock canonical public book titles as defined in Section 2 of this document.

---

## 7. Verification & Quality Assurance Protocols

1. **Link Verification:** Ensure all relative cross-references (`→ Book N, Ch. X`) and Hardwire links (`https://buildwhilebleeding.com/hardwire`) use standard URLs.
2. **Format Cleanliness:** Confirm Markdown documents validate without broken syntax, unclosed code blocks, or orphan headers.
3. **No Repository Merging:** Confirm `RyanrealAF/Seuss` remains completely independent from website application code.
