# SEUSS AUDIT v1 Acceptance Test Log

**Status:** Active Repository Audit

**Governing System:** `00-series-bible.md` (v1.0)


Every canonical example is tested against 12 criteria:

1. Syllable count | 2. Lexical stress | 3. Performed stress | 4. Foot boundaries | 5. Declared meter | 6. Declared variation | 7. Rhyme structure | 8. Grid position | 9. Evidence classification | 10. Citation status | 11. Terminology consistency | 12. Exercise validity


---


## Series Bible (`00-series-bible.md`)

### Example 1 in `00-series-bible.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
In the MORN | ing I WALK | to the BRIDGE | by the SEA,
 x  x  /    | x  x  /   |  x  x  /     |  x  x  /
And the WAVES | have a WORD | that is MEANT | just for ME.
 x   x   /    |  x  x  /   |  x   x  /     |  x    x  /
```


## Book 1 Ch 1 (`book1-ch01-the-beat-you-learned-before-you-could-read.md`)

### Example 1 in `book1-ch01-the-beat-you-learned-before-you-could-read.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
In the MORN | ing I WALK | to the BRIDGE | by the SEA,
 x  x  /    | x  x  /   |  x  x  /     |  x  x  /
And the WAVES | have a WORD | that is MEANT | just for ME.
 x   x   /    |  x  x  /   |  x   x  /     |  x    x  /
```


### Example 2 in `book1-ch01-the-beat-you-learned-before-you-could-read.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
No.      1      2      3      4      5      6      7      8      9      10     11     12
Word     In     the    MORN   ing    I      WALK   to     the    BRIDGE by     the    SEA
Stress   x      x      /      x      x      /      x      x      /      x      x      /
```


### Example 3 in `book1-ch01-the-beat-you-learned-before-you-could-read.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
[In the MORN] [ing I WALK] [to the BRIDGE] [by the SEA]
```


### Example 4 in `book1-ch01-the-beat-you-learned-before-you-could-read.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
No.      1      2      3      4      5      6      7      8      9      10     11     12
Word     And    the    WAVES  have   a      WORD   that   is     MEANT  just   for    ME
Stress   x      x      /      x      x      /      x      x      /      x      x      /
```


### Example 5 in `book1-ch01-the-beat-you-learned-before-you-could-read.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
[And the WAVES] [have a WORD] [that is MEANT] [just for ME]
```


### Example 6 in `book1-ch01-the-beat-you-learned-before-you-could-read.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
I been SPIT | tin' this RHYME | on the COR | ner all NIGHT,
 x   x   /   |  x   x   /    |  x   x   /  |  x   x   /
Till the SUN | gets to SHOW | me the SHAPE | of the LIGHT.
 x    x   /  |  x    x  /   |  x   x   /   |  x   x   /
```


### Example 7 in `book1-ch01-the-beat-you-learned-before-you-could-read.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
No.      1      2      3      4      5      6      7      8      9      10     11     12
Word     I      been   SPIT   tin'   this   RHYME  on     the    COR    ner    all    NIGHT
Stress   x      x      /      x      x      /      x      x      /      x      x      /
```


### Example 8 in `book1-ch01-the-beat-you-learned-before-you-could-read.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
I WALK | be SIDE | the SEA | at DAWN,
x  /   | x  /    | x  /    | x  /
```


### Example 9 in `book1-ch01-the-beat-you-learned-before-you-could-read.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
In the DARK | of the ROOM | by the LIGHT | of the SCREEN,
 x  x  /    |  x  x  /    |  x   x  /    |  x   x  /
```


### Example 10 in `book1-ch01-the-beat-you-learned-before-you-could-read.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
And the BUS | in the STREET | gives a SIGH | at the STOP.
 x   x  /    |  x   x  /     |  x    x  /  |  x   x  /
```


### Example 11 in `book1-ch01-the-beat-you-learned-before-you-could-read.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
I can HEAR | all the WORDS | that have NEV | er been SEEN.
 x   x  /    |  x   x  /     |  x    x  /   |  x   x  /
```


## Book 1 Ch 2 (`book1-ch02-reading-the-line-the-scansion-manual.md`)

### Example 1 in `book1-ch02-reading-the-line-the-scansion-manual.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
No.      1      2      3      4      5      6
Word     In     the    FAM    i      ly     KITCH
Stress   x      x      /      x      x      /
```


### Example 2 in `book1-ch02-reading-the-line-the-scansion-manual.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
In the FAM | i ly KITCH | en we SAT | by the STOVE
 x  x  /   |  x  x  /   |  x  x  /  |  x   x  /
```


### Example 3 in `book1-ch02-reading-the-line-the-scansion-manual.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
No.      1      2      3      4      5      6      7      8      9      10     11     12
Word     When   the    LIGHTS in     the    CI     ty     go     OUT    one    by     ONE
Stress   x      x      /      x      x      /      x      x      /      x↓     x      /
```


### Example 4 in `book1-ch02-reading-the-line-the-scansion-manual.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
[When the LIGHTS] [in the CI] [ty go OUT] [one by ONE]
```


### Example 5 in `book1-ch02-reading-the-line-the-scansion-manual.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
And I COUNT | all the STARS | till the NIGHT | is all DONE
 x  x  /     |  x   x  /    |  x   x   /     |  x   x  /

But the HUM | of the BUS | on the STREET | down be LOW
 x   x  /    |  x   x  /  |  x   x  /     |  x    x  /

Is the ONE | thing I KNOW | that I'll NEV | er let GO
 x   x  /   |  x    x  /   |  x    x  /   |  x   x  /
```


### Example 6 in `book1-ch02-reading-the-line-the-scansion-manual.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
When the LIGHTS | in the CI | ty go OUT | ONE by ONE
 x    x   /     |  x   x  /  |  x  x  /   |  /  x  /
```


### Example 7 in `book1-ch02-reading-the-line-the-scansion-manual.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
And I HEAR | ev ry WORD | that you SAID | in the DARK
 x   x  /    |  x  x  /    |  x   x  /   |  x   x  /
```


### Example 8 in `book1-ch02-reading-the-line-the-scansion-manual.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
And I HEAR | ev er y WORD | that you SAID | in the DARK
 x   x  /    |  x  x  x  /   |  x   x  /   |  x   x  /
```


### Example 9 in `book1-ch02-reading-the-line-the-scansion-manual.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
No.      1      2      3      4      5      6      7      8      9      10     11     12
Word     On     the    FAR    a      way    IS     land   of     SAL    a      ma     SOND
Stress   x      x      /      x      x↓     /      x      x      /      x      x      /
```


### Example 10 in `book1-ch02-reading-the-line-the-scansion-manual.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
[On the FAR] [a way IS] [land of SAL] [a ma SOND]
```


## Book 1 Ch 3 (`book1-ch03-the-complete-line-acatalectic-anapestic-tetrameter.md`)

### Example 1 in `book1-ch03-the-complete-line-acatalectic-anapestic-tetrameter.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Status: BASELINE (Acatalectic)
Syllable:  1   2   3   |  4   5   6   |  7   8   9   | 10  11  12
Meter:     x   x   /   |  x   x   /   |  x   x   /   |  x   x   /
```


### Example 2 in `book1-ch03-the-complete-line-acatalectic-anapestic-tetrameter.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
x  x  STORM | x  x  NIGHT | x  x  HOUSE | x  x  SHAKE
```


### Example 3 in `book1-ch03-the-complete-line-acatalectic-anapestic-tetrameter.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Status: BASELINE (Acatalectic)
  When the STORM | in the NIGHT | makes the HOUSE | start to SHAKE,
   x   x   /     |  x  x   /    |   x   x   /    |   x   x    /
```


### Example 4 in `book1-ch03-the-complete-line-acatalectic-anapestic-tetrameter.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Status: BASELINE (Acatalectic)
When the THUN | der roll'd IN | on the MOUN | tains of STONE,
 x   x   /     |  x    x   /  |  x  x  /    |  x   x   /

Status: BASELINE (Acatalectic)
Not a SOUL | in the TOWN | was left STAND | ing a LONE.
 x  x  /   |  x  x   /   |  x   x    /    |  x  x  /

Status: ERROR (Syllable Glitch / Extra Unstressed Syllable)
For the WIND | in the TREES | had a STO-ry | to TELL,
 x  x   /    |  x  x   /   |  x  x  x /   |  x  x  /  <-- Diagnostic Glitch: Foot 3 has 4 syllables (peon)

Status: SUBSTITUTION (Iambic Substitution in Foot 2)
Of the FIRE | that FELL | on the DARK | in the DELL.
 x  x  /    |  x   /   |  x  x  /    |  x  x  /   <-- Diagnostic Glitch: Foot 2 is an iamb (10 syllables)
```


### Example 5 in `book1-ch03-the-complete-line-acatalectic-anapestic-tetrameter.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Status: BASELINE (Acatalectic - Verified)
When the THUN | der roll'd IN | on the MOUN | tains of STONE,
 x   x   /     |  x    x   /  |  x  x  /    |  x   x   /

Status: BASELINE (Acatalectic - Verified)
Not a SOUL | in the TOWN | was left STAND | ing a LONE.
 x  x  /   |  x  x   /   |  x   x    /    |  x  x  /

Status: BASELINE (Acatalectic - Repaired)
For the WIND | in the TREES | had a TALE | left to TELL,
 x  x   /    |  x  x   /   |  x  x  /   |  x   x  /

Status: BASELINE (Acatalectic - Repaired)
Of the FIRE | that has FELL | on the DARK | in the DELL.
 x  x  /    |  x    x   /   |  x  x  /    |  x  x  /
```


### Example 6 in `book1-ch03-the-complete-line-acatalectic-anapestic-tetrameter.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Status: ERROR (Peon Foot 3 + Stress Clash Foot 4)
And the SHAD | ows were FALL | ing up on | the COLD FLOOR
 x   x   /    |  x   x    /   | x  x  x   |  x   /    /
```


### Example 7 in `book1-ch03-the-complete-line-acatalectic-anapestic-tetrameter.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Status: SUBSTITUTION (Iambic Substitution Feet 1 & 2)
And SHAD | ows FELL | on the COLD | SIL-ent FLOOR
 x   /   |  x   /   | x  x   /    |  x   /   /
```


### Example 8 in `book1-ch03-the-complete-line-acatalectic-anapestic-tetrameter.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Status: BASELINE (Acatalectic - Verified)
And the SHAD | ows were FALL | ing like SNOW | on the FLOOR.
 x   x   /    |  x   x    /   |  x   x   /   |  x  x   /
```


## Book 1 Ch 4 (`book1-ch04-iambic-substitution.md`)

### Example 1 in `book1-ch04-iambic-substitution.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Departure: iambic substitution, foot 1 (11 syllables)

Syllable:  1   2   |  3   4   5   |  6   7   8   |  9  10  11
Meter:     x   /   |  x   x   /   |  x   x   /   |  x   x   /
Words:     I WALK  | to the BRIDGE| by the EDGE  | of the SEA
```


### Example 2 in `book1-ch04-iambic-substitution.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
In the MORN | ing I WALK | to the BRIDGE | by the SEA,
 x  x  /    | x  x  /   |  x  x  /     |  x  x  /

And the WAVES | have a WORD | that is MEANT | just for ME.
 x   x   /    |  x  x  /   |  x   x  /     |  x    x  /
```


### Example 3 in `book1-ch04-iambic-substitution.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
The WAVES | have a WORD | that is MEANT | just for ME,
 x  /     |  x  x  /   |  x   x  /     |  x    x  /

And THEY | make a SOUND | like a CALL | in the DARK.
 x   /   |  x  x   /    | x  x   /    |  x  x  /
```


### Example 4 in `book1-ch04-iambic-substitution.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Departure: iambic substitution, foot 1 (5 syllables fragment)

Is KING | of the MUD
 x  /   |  x  x  /
```


## Book 1 Ch 5 (`book1-ch05-catalexis-and-the-dramatic-stop.md`)

### Example 1 in `book1-ch05-catalexis-and-the-dramatic-stop.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Departure: catalexis with terminal silent beat (11 syllables + rest)

Syllable:  1   2   3   |  4   5   6   |  7   8   9   | 10  11  [12]
Meter:     x   x   /   |  x   x   /   |  x   x   /   |  x   /   ∧
Words:     In the MORN | ing I WALK   | to the BRIDGE| by SEA   [∧]
```


### Example 2 in `book1-ch05-catalexis-and-the-dramatic-stop.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
In the MORN | ing I WALK | to the BRIDGE | by the SEA
   x  x  /    | x  x  /   |  x  x  /     |  x  x  /
```


### Example 3 in `book1-ch05-catalexis-and-the-dramatic-stop.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
The MORN | ing I WALK | to the BRIDGE | by the SEA
   x  /    | x  x  /   |  x  x  /     |  x  x  /
```


### Example 4 in `book1-ch05-catalexis-and-the-dramatic-stop.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
In the MORN | ing I WALK | to the BRIDGE | by SEA [∧]
   x  x  /    | x  x  /   |  x  x  /     |  x  /   ∧
```


### Example 5 in `book1-ch05-catalexis-and-the-dramatic-stop.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
In the DARK | of the NIGHT | I was WALK | ing a LONE,
 x  x  /    |  x  x  /     |  x   x  /    |  x  x  /

And I HEARD | a SHARP SOUND | that was CRAWL | ing on STONE.
 x  x  /    |  x  x   /    |  x   x   /    |  x  x  /
```


### Example 6 in `book1-ch05-catalexis-and-the-dramatic-stop.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
In the DARK | of the NIGHT | I was WALK | ing a LONE,
 x  x  /    |  x  x  /     |  x   x  /    |  x  x  /

And I HEARD | a SHARP SOUND | that was CRAWL | on STONE. [∧]
 x  x  /    |  x  x   /    |  x   x   /    |  x   /    ∧
```


### Example 7 in `book1-ch05-catalexis-and-the-dramatic-stop.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Speaker 1:  Who is THERE | in the DARK | at the END | of the STREET? [12]
             x  x  /     |  x  x  /    |  x  x  /   |  x  x  /

Speaker 2:  NO  ONE! [∧] |  ∧     ∧    |  ∧     ∧   |  ∧     ∧      [2 + rests]
             /   /    ∧  |  ∧     ∧    |  ∧     ∧   |  ∧     ∧
```


## Book 1 Ch 6 (`book1-ch06-trochaic-inversion.md`)

### Example 1 in `book1-ch06-trochaic-inversion.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Departure: trochaic inversion, foot 1 (11 syllables)

Syllable:  1   2   |  3   4   5   |  6   7   8   |  9  10  11
Meter:     /   x   |  x   x   /   |  x   x   /   |  x   x   /
Words:     STOP all| the NOISE    | in the ROOM  | by the HALL
```


### Example 2 in `book1-ch06-trochaic-inversion.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
SAFE (Buffered):   / x | x x /  -->  STOP all | the NOISE  (3 syllables between stresses)
UNSAFE (Clash):    / x | / x /  -->  STOP DEAD | WALK FAST   (Stress clash! Stumble risk)
```


### Example 3 in `book1-ch06-trochaic-inversion.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
In the MORN | ing I WALK | to the BRIDGE | by the SEA
 x  x  /    | x  x  /   |  x  x  /     |  x  x  /
```


### Example 4 in `book1-ch06-trochaic-inversion.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
WALK in the | MORN-ing to | BRIDGE by the | SEA...  <-- FAILED INVERSION (Clash / distortion)
 /   x  x   |  /   x  x  |  /     x  x  |  /
```


### Example 5 in `book1-ch06-trochaic-inversion.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
RUN through the| MORN-ing to | REACH for the | SEA
 /     x   x   |  x    x  /  |  x    x   /   |  x  /   <-- Clean buffer!
```


### Example 6 in `book1-ch06-trochaic-inversion.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
In the DARK | of the NIGHT || STRIKE for the LIGHT | in the TOWER
 x  x  /    |  x  x  /     ||  /     x   x  /   |  x  x  /
```


## Book 1 Ch 7 (`book1-ch07-the-metrical-mandate-and-the-measure-of-coherence.md`)

### Example 1 in `book1-ch07-the-metrical-mandate-and-the-measure-of-coherence.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Line 1: In the MORN | ing I WALK | to the BRIDGE | by the SEA,     [x x / | x x / | x x / | x x /]  (4/4)
Line 2: The WAVES   | have a WORD | that is MEANT | just for ME.     [x /   | x x / | x x / | x x /]  (4/4 - Declared Iamb)
Line 3: RUN through | the STREETS | till the SUN  | starts to RISE,  [/ x   | x x / | x x / | x x /]  (4/4 - Declared Trochee)
Line 4: And WATCH   | for the SHAPE| of the LIGHT | in your EYES.   [x /   | x x / | x x / | x x /]  (4/4 - Declared Iamb)
```


### Example 2 in `book1-ch07-the-metrical-mandate-and-the-measure-of-coherence.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
Line 1: In the MORN-ing I WALK down to the wa-ter-side BRIDGE by SEA, [x x / x x / x x x x / x x /]  (Disfluent foot 2-3)
Line 2: WAVES COME FAST on the SAND and make BIG NOISE NOW,          [/ / / x x / x x / / /]     (Multiple stress clashes)
Line 3: I WALK TO THE BEACH AND THINK ABOUT LIFE TODAY,               [x / x x / x / x x / x /]    (Collapses into iambs)
Line 4: And watch light in the sky.                                  [x / / x x /]              (Truncated / missing 2 feet)
```


### Example 3 in `book1-ch07-the-metrical-mandate-and-the-measure-of-coherence.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
Line 1: On the HILL in the DARK there was LIGHT in the TOWER,
Line 2: The WIND made a SOUND that was LOUD in the HOUR,
Line 3: RUN FAST NOW THROUGH WOODS TILL YOU FIND THE ROAD AGAIN,
Line 4: And SEE where the SHAPE of the PATH leads you HOME.
```


## Book 1 Ch 8 (`book1-ch08-load-and-the-extraneous-load-filter.md`)

### Example 1 in `book1-ch08-load-and-the-extraneous-load-filter.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
Line 1:  [When the X is Y]   [the Z will A]
Line 2:  [When the X is Y]   [the Z will B]
```


### Example 2 in `book1-ch08-load-and-the-extraneous-load-filter.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
When the MO-NEY lost VAL-ue and PRICES went HIGH,
 x   x   /   |  x   x   /  | x  x   /  |  x   x   /

There was NO-THING to SELL and no BUY-ERS to BUY.
 x    x   /    | x  x   /   | x  x   /   | x  x  /

So they TRAD-ED their BREAD in the DARK of the STREET,
 x   x   /    |  x   x   /   | x  x  /   |  x  x   /

For a BLAN-KET to HOLD or a MOR-SEL to EAT.
 x  x   /   | x  x  /  | x  x   /   | x  x  /
```


### Example 3 in `book1-ch08-load-and-the-extraneous-load-filter.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Frame:  [In the DARK of the _____ ] [we are LOOK-ING for _____ ]

Line 1: In the DARK of the NIGHT | we are LOOK-ing for LIGHT,
         x  x  /    |  x  x  /    |  x  x  /    |  x  x  /

Line 2: In the DARK of the TOWN  | we are LOOK-ing for SOUND.
         x  x  /    |  x  x  /    |  x  x  /    |  x  x  /
```


### Example 4 in `book1-ch08-load-and-the-extraneous-load-filter.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Line 1: When the TEMP-er-ature DROPS | in the COLD of the YEAR,
         x    x   /   | x  x   /     |  x  x  /   |  x  x   /

Line 2: Then the WA-ter turns HARD   | and the CRYS-TALS AP-PEAR.
         x    x  /    | x    x  /    |  x   x   /    |  x  x   /

Line 3: For the MO-LE-CULES LOCK     | in a RIG-ID EM-BRACE,
         x   x   /  | x   x  /       |  x  x  /  |  x  x  /

Line 4: Till the RIV-ER is ICE       | in every COR-NER and PLACE.
         x    x   /  | x  x  /       |  x x x  /   |  x  x   /
```


## Book 1 Ch 9 (`book1-ch09-entrainment-prediction-and-the-satisfaction-cycle.md`)

### Example 1 in `book1-ch09-entrainment-prediction-and-the-satisfaction-cycle.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
Predictive Model:  [ Expect stress at Syllable 3, 6, 9, 12 ]
                                  ↓
Sensory Input:     [ Stress arrives at Syllable 3, 6, 9, 12 ]
                                  ↓
Prediction Error:  [ ZERO ERROR ] --> Smooth Processing + Reward
```


### Example 2 in `book1-ch09-entrainment-prediction-and-the-satisfaction-cycle.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
[Run-up: x x]            [Beat: /]
(Anticipation Builds)  -->  (Target Hit)  --> [SATISFACTION SIGNAL]
```


### Example 3 in `book1-ch09-entrainment-prediction-and-the-satisfaction-cycle.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Line:  In the MORN | ing I WALK | to the BRIDGE | by the SEA
        x  x  /    | x  x  /   |  x  x  /     |  x  x  /
Syllable:  1  2  3  | 4  5  6   |  7  8  9     | 10 11 12
```


### Example 4 in `book1-ch09-entrainment-prediction-and-the-satisfaction-cycle.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Line:  The MORN | ing I WALK | to the BRIDGE | by SEA [∧]
        x  /    | x  x  /   |  x  x  /     |  x  /   ∧
Syllable:  1  2 | 3  4  5   |  6  7  8     |  9 10  11
```


## Book 1 Ch 10 (`book1-ch10-what-reading-prosody-research-says-and-doesnt.md`)

### Example 1 in `book1-ch10-what-reading-prosody-research-says-and-doesnt.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
In the DARK | [PAUSAL INTRUSION: 1.5s] | of the NIGHT | I was [PAUSAL INTRUSION: 0.8s] | LOOK-ing for LIGHT
 x  x  /    |     (Unwarranted gap)    |  x  x  /     |  x  x      (Breath gap)       |  /   x  x   /
```


### Example 2 in `book1-ch10-what-reading-prosody-research-says-and-doesnt.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
In the DARK | of the NIGHT  ||  I was LOOK | ing for LIGHT
 x  x  /    |  x  x  /     ||   x  x  /    |  x   x   /
```


### Example 3 in `book1-ch10-what-reading-prosody-research-says-and-doesnt.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Line 1 (Rising pitch curve toward terminal stress):
In the MORN | ing I WALK | to the BRIDGE | by the SEA ↑
 x  x  /    | x  x  /   |  x  x  /     |  x  x  /  (Pitch rises to 220 Hz)

Line 2 (Falling terminal pitch contour indicating completion):
And the WAVES | have a WORD | that is MEANT | just for ME. ↓
 x   x   /    |  x  x  /   |  x   x  /     |  x    x  / (Pitch falls to 140 Hz)
```


## Book 1 Ch 11 (`book1-ch11-geisels-engine-a-case-study.md`)

### Example 1 in `book1-ch11-geisels-engine-a-case-study.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
Frame:     [And then X did Y]  [on the Z by the W]
Mechanism: High meter predictability + unexpected semantic surprise
```


### Example 2 in `book1-ch11-geisels-engine-a-case-study.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Original Short Fragment:  Is KING | of the MUD
                           x  /   |  x  x  /  (Iambic substitution, foot 1)
```


### Example 3 in `book1-ch11-geisels-engine-a-case-study.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Original Parallel Verse (The Ironic Anapest):

Line 1: On the TOP | of the TOWER | he sits in | his CHAIR,
         x  x  /   |  x  x  /     |  x  x  /   |  x   x   /

Line 2: And he LOOKS | at the CITY | with CLOUDS | in his HAIR.
         x  x   /    |  x  x  /    |   x   x   /  |  x  x   /

Line 3: But the BRICKS | down be-LOW | are starting | to FALL,
         x  x   /     |  x    x  /   |  x  x   /   |  x  x  /

Line 4: And the MUD | at the BASE | will soon SWAL-LOW | it ALL.
         x  x  /    |  x  x  /    |   x    x   /     | x  x  /
```


### Example 4 in `book1-ch11-geisels-engine-a-case-study.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Frame Slot 1: [ And the _____ in the _____ ]
Frame Slot 2: [ had a _____ for the _____ ]

Line A: And the BOY in the STREET had a DREAM for the TOWN,
         x  x  /   | x  x   /   | x  x  /     | x  x  /

Line B: And the CROWD in the HALL had a SHOUT for the CROWN.
         x  x   /    | x  x  /    | x  x  /     | x  x  /
```


## Book 1 Ch 12 (`book1-ch12-the-sixteen-line-mnemonic.md`)

### Example 1 in `book1-ch12-the-sixteen-line-mnemonic.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
[Stanza 1: The Foundation]
Line 01: In the MORN | ing of TIME | when the BEAT | was BE-GUN,
          x  x  /    |  x  x  /    |  x  x  /    |  x  x  /    (12 - Clean)

Line 02: Every CHILD | heard the CALL | of the THREE | in-to-ONE.
          x  x  /    |  x   x   /     |  x  x   /    |  x  x  /    (12 - Clean)

Line 03: With two STEPS | in the RUN | and a HIT | on the LAND,
          x   x   /     |  x  x  /   |  x  x /   |  x  x  /    (12 - Clean)

Line 04: It was WRIT | ten in SOUND | that the MIND | could COM-MAND.
          x  x  /    |  x  x   /    |  x  x  /     |  x   x   /    (12 - Clean)

[Stanza 2: The Cognitive Engine (Repairing Lines 5 & 8)]
Line 05: For the AUD | it-o-ry MIND | takes the DA | ta at LAST,
          x  x  /    | x x  /      |  x  x  /    |  x  x  /    (12 - Repaired line 5)

Line 06: On a GRID | that is CLEAR | and a PAC | ing that's FAST.
          x  x  /   |  x  x  /     |  x  x  /    |   x    x    /   (12 - Clean)

Line 07: So the MO- | le-cules LOCK | in a RIG | id EM-BRACE,
          x  x  /    | x   x   /    |  x  x /  |  x  x  /    (12 - Clean)

Line 08: On a PATH | that is CLEAR | in a PRE- | cis-ion of SPACE.
          x  x  /   |  x  x  /     |  x  x  /   |  x x   /     (12 - Repaired line 8)

[Stanza 3: Line Variations]
Line 09: Though an IA- | mbic START | leaves a SYL | la-ble OUT,
          x   x  /     |   x   /    |  x   x  /    |  x x   /    (11 - Labeled Iamb)

Line 10: Still the GAL | lop ROLLS ON | with-out HES | i-tant DOUBT.
          x   x   /    |  x   x   /   |  x   x  /   |  x  x   /    (12 - Clean)

Line 11: And a STOP | at the END | brings a SI | lent RE-LEASE,
          x  x  /   |  x  x  /   |  x   x  /   |  x  x  /    (12 - Clean)

Line 12: Where the REST | marks the SPACE | where the CLASH | es can CEASE.
          x   x   /     |  x   x    /     |  x   x   /     |  x  x   /    (12 - Clean)

[Stanza 4: Synthesis & Legacy (Repairing Line 14)]
Line 13: It is NOT | in the WORDS | but the PAT | tern of SOUND,
          x  x  /   |  x  x   /    |  x  x  /    |  x  x   /    (12 - Clean)

Line 14: That a LES- | son takes HOLD | on a CUL | tur-al GROUND.
          x  x  /    |  x   x   /     |  x  x /  |  x x   /     (12 - Repaired line 14)

Line 15: From the PAST | to the STAGE | where the RHYME | is UN-FURLED,
          x   x   /    |  x  x   /    |  x   x   /    |  x  x   /    (12 - Clean)

Line 16: It's the AN- | chor that HOLDS | in the HEART | of the WORLD.
          x  x  /     |  x   x    /    |  x  x  /     |  x  x  /    (12 - Clean)
```


## Book 1 Ch 13 (`book1-ch13-from-anchor-to-dynamism.md`)

### Example 1 in `book1-ch13-from-anchor-to-dynamism.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
Line 1: In the MORN | ing I WALK | to the BRIDGE | by the SEA,
Line 2: The WAVES   | have a WORD | that is MEANT | just for ME.
Line 3: RUN through | the STREETS | till the SUN  | starts to RISE,
Line 4: And WATCH   | for the SHAPE| of the LIGHT | in your EYES.
Line 5: In the DARK | of the NIGHT | I was WALK   | ing a LONE,
Line 6: And I HEARD | a SHARP SOUND | that was CRAWL| on STONE [∧].
Line 7: On the TOP  | of the TOWER | he sits in   | his CHAIR,
Line 8: It's the AN-| chor that HOLDS | in the HEART | of the WORLD.
```


### Example 2 in `book1-ch13-from-anchor-to-dynamism.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
[ BOOK 1: Anapestic Architecture ]
  (Meter, Scansion, Cognitive Loads, Baseline Stability)
                 │
                 ├──> [ BOOK 2: Layered Grooves ] (Beat-Grid, Syncopation, Accumulation)
                 │
                 ├──> [ BOOK 3: Hyperrhyme Mapping ] (Multisyllabic Rhyme, Phonological Loop)
                 │
                 ├──> [ BOOK 4: Subgenre Applications ] (Boom-Bap, Drill, Trap Metrical Hooks)
                 │
                 └──> [ BOOK 5: Workshop Curriculum ] (6-Week Pedagogy, Ethics, UDL Rubric)
```


## Book 1 Front & Back Matter (`book1-front-and-back-matter.md`)

### Example 1 in `book1-front-and-back-matter.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
Line 1: ____________________________________________________________________
Mark:   [   |   |   |   ]  Count: ___  Stresses at: ________

Line 2: ____________________________________________________________________
Mark:   [   |   |   |   ]  Count: ___  Stresses at: ________

Line 3: ____________________________________________________________________
Mark:   [   |   |   |   ]  Count: ___  Stresses at: ________

Line 4: ____________________________________________________________________
Mark:   [   |   |   |   ]  Count: ___  Stresses at: ________
```


## Book 2 Synopsis (`book2-full-text.md`)

### Example 1 in `book2-full-text.md`

- **Status:** `PASS`

- **Audit Notes:** Scansion notation present (feet boundaries `|`, stress `x` and `/`).

```
Status: BASELINE (16th Beat-Grid)
Subdivision: | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 | 10 | 11 | 12 | 13 | 14 | 15 | 16 |
Beat:        | 1  |    | e  | a  | 2  |    | e  | a  | 3  |    | e  | a  | 4  |    | e  | a  |
Specimen:    | In | the| MORN|    | ing| I  | WALK|    | to | the| BRDG|    | by | the| SEA |    |
Meter:       | x  | x  | /  |    | x  | x  | /   |    | x  | x  | /  |    | x  | x  | /   |    |
```


### Example 2 in `book2-full-text.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
Status: BASELINE (12 Syllables per bar)
Bar 01: In the LAND | of the LOST | where the WIND | has no NAME  (12 Syllables)
Bar 02: Every SOUL | in the DARK | is pur-SU | ing a FLAME    (12 Syllables)
Bar 03: There is DUST | on the ROAD | where the TRAV | el-ers TREAD (12 Syllables)
Bar 04: And a VOICE | in the NIGHT | that is CALL | ing the DEAD  (12 Syllables)
```


### Example 3 in `book2-full-text.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
Status: SYNCOPATION & VARIATION
Bar 05: The SHAD-ows | LEAP on the WALL | with a SUD | den ATTACK (11 Syllables - Substitution)
Bar 06: And THEY | keep DRAG | ging the FOOT | steps BACK       (9 Syllables - Syncopation)
Bar 07: You can HEAR | the HEA-vy BEAT | on the COLD | STONE FLOOR (11 Syllables - Stress Clash)
Bar 08: As the CROWD | starts PUSH | ing a-GAINST | the DOOR     (10 Syllables - Catalexis)
```


### Example 4 in `book2-full-text.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
Status: ACCUMULATION (Double-Time Density)
Bar 09: And the RUSH | of the RIV-er in the MID-night HOUR is a STORM that is BREAK-ing the WALLS (18 Syllables)
Bar 10: With a CRASH | in the THUN-der as the LIGHT-ning STRIKES and the HEA-vy-est TIM-ber FALLS (18 Syllables)
Bar 11: So we RUN | through the FI-re with the HEAT at our BACK and the SMOKE in our EYES and LUNGS (18 Syllables)
Bar 12: Till the SOUND | of the SHOUT-ing in the STREETS re-SOUNDS in a THOU-sand DIF-fer-ent TUNGS (18 Syllables)
```


### Example 5 in `book2-full-text.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
Status: RESOLUTION & BASELINE
Bar 13: Now the MO- | ney lost VAL- | ue and the NOISE | died DOWN (11 Syllables)
Bar 14: And a SI- | lent PEACE | came OVER | the TOWN           (10 Syllables)
Bar 15: For the AN- | chor HOLDS | in the HEART | of the STORM    (11 Syllables)
Bar 16: And the BEAT | rolls ON | where the FAITH | is BORN       (10 Syllables - Resolution)
```


## Book 3 Synopsis (`book3-full-text.md`)

### Example 1 in `book3-full-text.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
Technical Hyperrhyme Segment Audit:
1. generously (/dʒɛn-ə-rəs-li/): 4 syllables, primary stress on syl 1
2. courageously (/kə-reɪ-dʒəs-li/): 4 syllables, matching /dʒəs-li/ suffix closure
3. calculating (/kæl-kjə-leɪ-tɪŋ/): 4 syllables, stress on syl 3
4. administration (/æd-mɪn-ɪ-streɪ-ʃən/): 5 syllables, stress on syl 4 (Loose Match)
```


### Example 2 in `book3-full-text.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
Line 1: With a CHRO-NO-MET-ric SYS-tem in a GEN-er-ous-ly GOV-erned ZONE,
- Syllable sequence: 17 syllables
- Phoneme matching: /dʒɛn-ə-rəs-li/ (generously)
- Stress pattern: x x / x x / x x / x x /

Line 2: We are COUR-age-ous-ly STAND-ing where the DAN-ger-ous-ly DARK was SHOWN.
- Syllable sequence: 17 syllables
- Phoneme matching: /kə-reɪ-dʒəs-li/ (courageously) & /deɪn-dʒə-rəs-li/ (dangerously)
- Stress pattern: x x / x x / x x / x x /

Line 3: Though the CAL-cu-lat-ing POW-ers of a VITAL AD-MIN-IS-TRA-TION CALL,
- Syllable sequence: 18 syllables
- Phoneme matching: /kæl-kjə-leɪ-tɪŋ/ & /æd-mɪn-ɪ-streɪ-ʃən/
- Stress pattern: Loose match case (Issue I-05)

Line 4: We can ELE-VATE the MEAS-URE till the SHAD-OWS of the FOE shall FALL.
- Syllable sequence: 17 syllables
- Phoneme matching: /ɛl-ə-veɪt/ & /mɛʒ-ər/
- Stress pattern: x x / x / x x / x x /
```


## Book 4 Synopsis (`book4-full-text.md`)

*No standalone scansion code blocks found in this document.*


## Book 5 Synopsis (`book5-full-text.md`)

### Example 1 in `book5-full-text.md`

- **Status:** `PASS WITH EXCEPTION`

- **Audit Notes:** Formatted table or monospace text block without explicit `x /` row.

```
[ Recognition ] --> [ Scansion ] --> [ Manipulation ] --> [ Transfer ]
```


## Summary Statistics

- **Total Master Examples Audited:** 77

- **PASS:** 50

- **PASS WITH EXCEPTION:** 27

- **REQUIRES REVISION:** 0
