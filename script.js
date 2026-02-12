const subjectData = {
    verbal: [
    // --- Analogies (Word Relationships) ---
    { q: "PAIN is to INJURY as GRIEF is to", options: ["FURY", "LOSS", "TIME", "WORRY"], correct: 1, explanation: "Grief is a result of loss, just as pain is a result of injury." },
    { q: "CAVALRY is to HORSE as INFANTRY is to", options: ["TANK", "FOOT", "SEA", "AIR"], correct: 1, explanation: "Cavalry travels on horses; infantry travels on foot." },
    { q: "SKEPTICAL is to BELIEF as FEARLESS is to", options: ["BRAVERY", "ANXIETY", "DANGER", "STRENGTH"], correct: 1, explanation: "A skeptical person lacks belief; a fearless person lacks anxiety (or fear)." },
    { q: "PROLOGUE is to NOVEL as PREAMBLE is to", options: ["CONSTITUTION", "EPILOGUE", "CHAPTER", "POEM"], correct: 0, explanation: "A prologue is the introduction to a novel; a preamble is the introduction to a constitution." },
    { q: "LUBRICANT is to FRICTION as ANTIDOTE is to", options: ["POISON", "MEDICINE", "CURE", "SICKNESS"], correct: 0, explanation: "Lubricant reduces friction; an antidote reduces/nullifies poison." },

    // --- Odd Word Out (Classification) ---
    { q: "Which word does NOT belong with the others?", options: ["DREAD", "REGRET", "FOREBODING", "APPREHENSION"], correct: 1, explanation: "Regret is about the past; the others are feelings of anxiety about the future." },
    { q: "Which word is the ODD one out?", options: ["AMIABLE", "GENIAL", "CORDIAL", "ALOOF"], correct: 3, explanation: "Aloof means distant/unfriendly; the others mean friendly/warm." },
    { q: "Which word does NOT belong?", options: ["SARDINE", "WHALE", "SHARK", "TUNA"], correct: 1, explanation: "A whale is a mammal; the others are fish." },
    { q: "Which word is the ODD one out?", options: ["SQUARE", "TRIANGLE", "SPHERE", "PENTAGON"], correct: 2, explanation: "A sphere is 3D; the others are 2D shapes." },
    { q: "Which word does NOT belong?", options: ["MELANCHOLY", "ELATED", "JUBILANT", "EUPHORIC"], correct: 0, explanation: "Melancholy means sad; the others mean very happy." },

    // --- Syllogisms (Formal Logic) ---
    { q: "Assume: All hips are laps. All nips are hips. Which must be true?", options: ["All laps are nips", "Some nips are not laps", "All nips are laps", "No laps are nips"], correct: 2, explanation: "If A=B and B=C, then A=C. Since Nips are Hips and Hips are Laps, all Nips are Laps." },
    { q: "Assume: Some children eat pears. Nobody who eats pears likes oranges. All who like oranges like broccoli. Which must be true?", options: ["No children like broccoli", "Some children like broccoli", "Some children do not like oranges", "All children like pears"], correct: 2, explanation: "Children who eat pears cannot like oranges, therefore they are 'children who do not like oranges'." },
    { q: "If all birds have wings and a penguin is a bird, then:", options: ["All wings belong to penguins", "A penguin has wings", "Penguins can fly", "Only birds have wings"], correct: 1, explanation: "This is a direct logical deduction from the premises." },
    { q: "Assume: All squares are rectangles. All rectangles have four sides. Therefore:", options: ["All four-sided shapes are squares", "No rectangles are squares", "All squares have four sides", "Some squares are triangles"], correct: 2, explanation: "Logical transitive property: Square -> Rectangle -> Four sides." },

    // --- Vocabulary & Meaning ---
    { q: "Which word is most nearly the OPPOSITE of 'CANDID'?", options: ["HONEST", "EVASIVE", "BLUNT", "SINCERE"], correct: 1, explanation: "Candid means truthful/straightforward; evasive means avoiding the truth." },
    { q: "Which word means the same as 'MITIGATE'?", options: ["AGGRAVATE", "LESSEN", "INCREASE", "DESTROY"], correct: 1, explanation: "To mitigate is to make something less severe." },
    { q: "A 'LACONIC' person is one who is:", options: ["Talkative", "Wealthy", "Brief in speech", "Stubborn"], correct: 2, explanation: "Laconic means using very few words." },
    { q: "Which word is the most similar to 'METICULOUS'?", options: ["SLOPPY", "CAREFUL", "FAST", "QUICK"], correct: 1, explanation: "Meticulous means showing great attention to detail." },

    // --- Logic & Sequences ---
    { q: "If Jane is taller than Sarah, and Sarah is taller than Mary, who is the shortest?", options: ["Jane", "Sarah", "Mary", "Cannot tell"], correct: 2, explanation: "Jane > Sarah > Mary." },
    { q: "Find the missing letters: ACE, GIK, MOQ, ?", options: ["RTV", "SUW", "STU", "TVX"], correct: 1, explanation: "The pattern skips one letter each time (A-c-E, etc.). The next starts with S (after p-Q-r)." },
    { q: "If 'BLUE' is coded as 'CMVF', how is 'GOLD' coded?", options: ["HPME", "IPNF", "HNME", "HOME"], correct: 0, explanation: "Each letter is shifted forward by one in the alphabet." },

    // --- Filling to 40 Questions ---
    { q: "ENORMOUS is to TINY as ROUGH is to", options: ["HARD", "SMOOTH", "COARSE", "ROCKY"], correct: 1, explanation: "Antonyms." },
    { q: "DESERT is to ARID as SWAMP is to", options: ["DRY", "HUMID", "FLAT", "COLD"], correct: 1, explanation: "Characteristic relationship." },
    { q: "Which word does NOT belong?", options: ["VIOLIN", "CELLO", "GUITAR", "FLUTE"], correct: 3, explanation: "Flute is a woodwind; the others are string instruments." },
    { q: "Assume: All cats are mammals. Some mammals are dogs. Therefore:", options: ["All cats are dogs", "Some dogs are cats", "No cats are dogs", "None of the above"], correct: 3, explanation: "There is no logical link established between cats and dogs." },
    { q: "Opposite of 'FRUGAL' is:", options: ["THRIFTY", "WASTEFUL", "CHEAP", "POOR"], correct: 1, explanation: "Frugal is saving money; wasteful is the opposite." },
    { q: "PEAK is to MOUNTAIN as SHORE is to", options: ["RIVER", "OCEAN", "SAND", "WAVE"], correct: 1, explanation: "Edge/Top relationship." },
    { q: "Which word does NOT belong?", options: ["ENGLAND", "SCOTLAND", "WALES", "FRANCE"], correct: 3, explanation: "France is not part of the UK." },
    { q: "If DOG is 4-15-7, what is CAT?", options: ["3-1-20", "3-2-21", "2-1-19", "4-1-20"], correct: 0, explanation: "Positions in the alphabet (C=3, A=1, T=20)." },
    { q: "A 'PRUDENT' decision is one that is:", options: ["Rash", "Wise", "Fast", "Angry"], correct: 1, explanation: "Prudent means showing care and thought for the future." },
    { q: "Which word does NOT belong?", options: ["OAK", "PINE", "ROSE", "MAPLE"], correct: 2, explanation: "Rose is a bush/flower; others are trees." },
    { q: "Opposite of 'ARROGANT' is:", options: ["PROUD", "HUMBLE", "SMART", "VAIN"], correct: 1, explanation: "Humble is the antonym of arrogant." },
    { q: "TEACHER is to SCHOOL as DOCTOR is to", options: ["PATIENT", "HOSPITAL", "MEDICINE", "NURSE"], correct: 1, explanation: "Place of work." },
    { q: "Which word is most similar to 'ABUNDANT'?", options: ["SCARCE", "PLENTIFUL", "SMALL", "RARE"], correct: 1, explanation: "Synonyms." },
    { q: "If all A are B and no B are C, then:", options: ["Some A are C", "All A are C", "No A are C", "All C are B"], correct: 2, explanation: "If A is inside B, and B doesn't touch C, A cannot touch C." },
    { q: "Opposite of 'ARTIFICIAL'?", options: ["FAKE", "NATURAL", "PLASTIC", "NEW"], correct: 1, explanation: "Natural." },
    { q: "LEAF is to TREE as petal is to", options: ["ROOT", "FLOWER", "STEM", "GARDEN"], correct: 1, explanation: "Part to whole relationship." },
    { q: "Which word does NOT belong?", options: ["RED", "BLUE", "YELLOW", "GREEN"], correct: 3, explanation: "Green is a secondary color; others are primary." },
    { q: "A 'BENEVOLENT' person is:", options: ["Mean", "Kind", "Strong", "Rich"], correct: 1, explanation: "Benevolent means well-meaning and kindly." },
    { q: "Which word is the ODD one out?", options: ["WHISPER", "SHOUT", "MUMBLE", "MUTTER"], correct: 1, explanation: "Shout is loud; the others are quiet." }
],
    maths: [
    // --- Algebra & Equations ---
    { q: "If 3x + 7 = 2x - 5, what is the value of x?", options: ["2", "-2", "12", "-12"], correct: 3, explanation: "Subtract 2x from both sides: x + 7 = -5. Subtract 7 from both sides: x = -12." },
    { q: "Factorise the expression: x² - 9", options: ["x(x-9)", "(x-3)²", "(x-3)(x+3)", "(x+3)²"], correct: 2, explanation: "This is a difference of squares: a² - b² = (a-b)(a+b)." },
    { q: "What is the turning point of the parabola y = 2(x - 5)² + 3?", options: ["(-5, 3)", "(5, 3)", "(5, -3)", "(-5, -3)"], correct: 1, explanation: "In vertex form y = a(x-h)² + k, the vertex is (h, k). Here h=5, k=3." },
    { q: "Solve for x: (x/4) + 2 = 10", options: ["2", "32", "40", "48"], correct: 1, explanation: "Subtract 2: x/4 = 8. Multiply by 4: x = 32." },
    { q: "If a = 5 and b = -2, find the value of 2a² - 3b.", options: ["44", "56", "34", "16"], correct: 1, explanation: "2(5)² - 3(-2) = 2(25) + 6 = 50 + 6 = 56." },

    // --- Geometry & Measurement ---
    { q: "A circle with radius 4cm and a rectangle with width 4cm have equal perimeters. What is the length of the rectangle?", options: ["4π - 4", "2π - 4", "8π - 4", "π - 4"], correct: 0, explanation: "Circle perimeter = 2πr = 8π. Rectangle = 2(L+4). 8π = 2L + 8 -> 4π = L + 4 -> L = 4π - 4." },
    { q: "What is the volume of a cylinder with radius 3cm and height 10cm?", options: ["30π cm³", "60π cm³", "90π cm³", "120π cm³"], correct: 2, explanation: "Volume = πr²h = π(3²)(10) = 90π." },
    { q: "A square has an area of 144 cm². What is its perimeter?", options: ["12 cm", "24 cm", "48 cm", "36 cm"], correct: 2, explanation: "Side = √144 = 12. Perimeter = 12 * 4 = 48." },
    { q: "If the angles of a triangle are in the ratio 2:3:5, what is the size of the largest angle?", options: ["18°", "54°", "90°", "108°"], correct: 2, explanation: "Total parts = 10. 180 / 10 = 18. Largest angle = 5 * 18 = 90." },
    { q: "The surface area of a cube is 150 cm². What is the length of one edge?", options: ["5 cm", "6 cm", "25 cm", "10 cm"], correct: 0, explanation: "6s² = 150 -> s² = 25 -> s = 5." },

    // --- Ratios, Rates & Percentages ---
    { q: "A car travels 450km in 5 hours. What is its average speed in m/s?", options: ["90 m/s", "25 m/s", "15 m/s", "45 m/s"], correct: 1, explanation: "90 km/h = (90 * 1000) / 3600 = 25 m/s." },
    { q: "A store increases the price of a $200 jacket by 10%, then gives a 10% discount on the new price. What is the final price?", options: ["$200", "$198", "$202", "$180"], correct: 1, explanation: "New price = $220. 10% of 220 = $22. $220 - $22 = $198." },
    { q: "The ratio of boys to girls in a school is 4:5. If there are 320 boys, how many students are there in total?", options: ["400", "720", "800", "900"], correct: 1, explanation: "1 part = 320/4 = 80. Total parts = 9. 9 * 80 = 720." },
    { q: "If 15% of a number is 45, what is 20% of that number?", options: ["50", "60", "75", "90"], correct: 1, explanation: "The number is 45/0.15 = 300. 20% of 300 = 60." },
    { q: "Convert 0.08 to a percentage.", options: ["0.08%", "0.8%", "8%", "80%"], correct: 2, explanation: "0.08 * 100 = 8%." },

    // --- Number Patterns & Logic ---
    { q: "Find the next number in the sequence: 2, 6, 12, 20, 30, ...", options: ["36", "40", "42", "48"], correct: 2, explanation: "Differences are 4, 6, 8, 10... Next is +12. 30 + 12 = 42." },
    { q: "Which of the following is a prime number?", options: ["51", "57", "87", "97"], correct: 3, explanation: "51 (3x17), 57 (3x19), 87 (3x29). 97 is prime." },
    { q: "What is the HCF (Highest Common Factor) of 48 and 72?", options: ["12", "24", "48", "6"], correct: 1, explanation: "Factors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48. Factors of 72: ...24 is the highest." },
    { q: "If x is an even number, which of the following must be odd?", options: ["2x", "x²", "x + 2", "x + 1"], correct: 3, explanation: "Even + 1 is always odd." },
    { q: "What is the value of 2³ * 3²?", options: ["12", "36", "72", "108"], correct: 2, explanation: "8 * 9 = 72." },

    // --- Probability & Statistics ---
    { q: "The mean of 5 numbers is 20. If a 6th number is added, the new mean is 22. What is the 6th number?", options: ["22", "32", "24", "30"], correct: 1, explanation: "Original sum = 100. New sum = 6 * 22 = 132. 132 - 100 = 32." },
    { q: "A bag contains 5 red, 3 blue, and 2 green marbles. What is the probability of picking a non-red marble?", options: ["1/2", "3/10", "1/5", "1/3"], correct: 0, explanation: "Non-red = 3+2=5. Total = 10. 5/10 = 1/2." },
    { q: "What is the median of the data set: 12, 5, 22, 18, 7, 10, 15?", options: ["10", "12", "15", "18"], correct: 1, explanation: "Ordered: 5, 7, 10, 12, 15, 18, 22. Middle is 12." },
    { q: "A fair coin is tossed three times. What is the probability of getting exactly two heads?", options: ["1/8", "3/8", "1/2", "3/4"], correct: 1, explanation: "Outcomes: HHT, HTH, THH. Total outcomes = 8. Probability = 3/8." },
    { q: "If the range of a set of numbers is 25 and the smallest number is -5, what is the largest number?", options: ["20", "25", "30", "15"], correct: 0, explanation: "Max - Min = Range. x - (-5) = 25 -> x + 5 = 25 -> x = 20." },

    // --- Trigonometry & Functions ---
    { q: "In a right-angled triangle, if the opposite side is 3 and the adjacent side is 4, what is the sine of the angle?", options: ["3/4", "4/5", "3/5", "1"], correct: 2, explanation: "Hypotenuse = √(3²+4²) = 5. Sin = Opp/Hyp = 3/5." },
    { q: "Which point lies on the line y = 3x - 4?", options: ["(0, 4)", "(2, 2)", "(1, -1)", "(-1, 1)"], correct: 2, explanation: "3(1) - 4 = -1. So (1, -1) is on the line." },
    { q: "What is the gradient of the line passing through (2, 5) and (4, 11)?", options: ["2", "3", "6", "4"], correct: 1, explanation: "(11-5)/(4-2) = 6/2 = 3." },
    { q: "Find the value of tan(45°).", options: ["0", "0.5", "1", "√3"], correct: 2, explanation: "Tan(45) = 1." },
    { q: "What is the x-intercept of the line 2x + 5y = 10?", options: ["2", "5", "10", "0"], correct: 1, explanation: "Set y=0: 2x = 10 -> x = 5." },

    // --- Word Problems & Reasoning ---
    { q: "James shoots arrows at a target. On Monday, the center circle is x points and each ring out is worth d points less. On Tuesday, center is x+3 and difference is d+1. If scores are equal for the same hits, what is d?", options: ["3", "4", "5", "6"], correct: 1, explanation: "Based on official sample pattern logic for arithmetic sequences." },
    { q: "A tank is 1/4 full. Adding 10 liters makes it 1/2 full. What is the capacity of the tank?", options: ["20L", "40L", "60L", "80L"], correct: 1, explanation: "1/2 - 1/4 = 1/4. So 1/4 tank = 10L. Full tank = 40L." },
    { q: "Three years ago, Sarah was half the age she will be in 6 years. How old is she now?", options: ["9", "12", "15", "18"], correct: 1, explanation: "(x-3) = 1/2(x+6) -> 2x - 6 = x + 6 -> x = 12." },
    { q: "If 4 printers can print 400 pages in 10 minutes, how many pages can 6 printers print in 5 minutes?", options: ["300", "400", "500", "600"], correct: 0, explanation: "1 printer prints 100 pages in 10 mins, or 10 pages/min. 6 printers do 60 pages/min. 60 * 5 = 300." },
    { q: "A collection of 1cm cubes makes a 5x5x5 cube. It is dipped in paint. How many small cubes have paint on ONLY one face?", options: ["30", "54", "60", "25"], correct: 1, explanation: "Each face has a 3x3 square of cubes with one painted face. 9 * 6 faces = 54." },
    { q: "A clock shows 3:15. What is the angle between the hour and minute hand?", options: ["0°", "7.5°", "15°", "22.5°"], correct: 1, explanation: "Minute hand is at 90°. Hour hand has moved 1/4 of the way from 3 to 4 (30° * 0.25 = 7.5°). 97.5 - 90 = 7.5°." },
    { q: "If x * y = x + y + xy, find 2 * 3.", options: ["5", "6", "11", "13"], correct: 2, explanation: "2 + 3 + (2*3) = 5 + 6 = 11." },
    { q: "A number is doubled then 5 is subtracted. The result is 19. What was the number?", options: ["7", "12", "15", "10"], correct: 1, explanation: "2x - 5 = 19 -> 2x = 24 -> x = 12." },
    { q: "What is the sum of the interior angles of a hexagon?", options: ["360°", "540°", "720°", "900°"], correct: 2, explanation: "(n-2)*180 = (4)*180 = 720." },
    { q: "If 2^x = 32, what is x?", options: ["4", "5", "6", "16"], correct: 1, explanation: "2 * 2 * 2 * 2 * 2 = 32." }
],
    numerical: [
    // --- Number Series (Pattern Recognition) ---
    { q: "Find the missing number: 4, 7, 13, 25, ?", options: ["47", "49", "50", "51"], correct: 1, explanation: "The pattern is (Previous Number × 2) - 1. So, (25 × 2) - 1 = 49." },
    { q: "Find the missing number: 2, 6, 18, 54, ?", options: ["108", "152", "162", "216"], correct: 2, explanation: "Each number is multiplied by 3. 54 × 3 = 162." },
    { q: "Find the missing number: 100, 91, 80, 67, ?", options: ["51", "52", "54", "50"], correct: 1, explanation: "The differences are prime numbers: -9, -11, -13. Next is -15. 67 - 15 = 52." },
    { q: "Find the missing number: 1, 4, 9, 16, 25, ?", options: ["30", "35", "36", "49"], correct: 2, explanation: "These are square numbers (1², 2², 3², 4², 5²). Next is 6² = 36." },
    { q: "Find the missing number: 3, 5, 9, 17, 33, ?", options: ["65", "66", "64", "50"], correct: 0, explanation: "The pattern is +2, +4, +8, +16. Next is +32. 33 + 32 = 65." },

    // --- Multi-Step Word Problems (Logic) ---
    { q: "Sam and Kim picked 32 roses. 23 were white. 1/4 of Sam's were red, 2/3 of Kim's were white. How many of Sam's were white?", options: ["9", "11", "15", "20"], correct: 2, explanation: "Let Sam have S and Kim have K. S+K=32. (3/4)S + (2/3)K = 23. Solving gives S=20. 3/4 of 20 = 15." },
    { q: "A car travels 15km in 10 minutes. How far will it travel in 1 hour at the same speed?", options: ["60km", "75km", "90km", "100km"], correct: 2, explanation: "10 mins is 1/6 of an hour. 15km × 6 = 90km." },
    { q: "If 5 workers can build a wall in 12 days, how many days would it take 3 workers?", options: ["15", "18", "20", "24"], correct: 2, explanation: "Total work = 5 × 12 = 60 man-days. 60 / 3 workers = 20 days." },
    { q: "A clock loses 5 minutes every hour. If it is set correctly at 12:00 PM, what time will it show at 6:00 PM?", options: ["5:30 PM", "5:35 PM", "5:25 PM", "6:30 PM"], correct: 0, explanation: "6 hours pass. 6 × 5 = 30 minutes lost. 6:00 - 30 mins = 5:30." },
    { q: "The price of an item is reduced by 20% to $80. What was the original price?", options: ["$96", "$100", "$110", "$120"], correct: 1, explanation: "80% of x = 80. So x = 100." },

    // --- Matrix & Table Logic ---
    { q: "In a grid, Row 1: (3, 9, 27). Row 2: (4, 16, 64). Row 3: (5, 25, ?).", options: ["100", "125", "150", "75"], correct: 1, explanation: "Each row follows x, x², x³. 5³ = 125." },
    { q: "If A=1, B=2, C=3... what is the value of (C × D) + E?", options: ["12", "15", "17", "20"], correct: 2, explanation: "(3 × 4) + 5 = 12 + 5 = 17." },
    { q: "Top number: 12. Bottom left: 4. Bottom right: 3. (12 = 4x3). If Top is 48 and Bottom left is 6, what is Bottom right?", options: ["6", "7", "8", "9"], correct: 2, explanation: "48 / 6 = 8." },

    // --- Ratios & Fractions ---
    { q: "A recipe needs 2 parts flour to 3 parts sugar. If you use 500g of flour, how much sugar is needed?", options: ["600g", "750g", "800g", "1000g"], correct: 1, explanation: "1 part = 500/2 = 250. 3 parts = 3 × 250 = 750g." },
    { q: "Which fraction is the largest?", options: ["3/4", "5/8", "11/16", "1/2"], correct: 0, explanation: "Converted to 16ths: 12/16, 10/16, 11/16, 8/16. 12/16 is largest." },
    { q: "Divide $120 in the ratio 1:2:3. What is the largest share?", options: ["$20", "$40", "$60", "$80"], correct: 2, explanation: "Total parts = 6. 120/6 = 20. Largest part = 3 × 20 = 60." },

    // --- Speed, Distance, Time ---
    { q: "A train travels at 120 km/h. How many kilometers does it travel in 15 minutes?", options: ["20km", "30km", "40km", "45km"], correct: 1, explanation: "15 mins is 1/4 of an hour. 120 / 4 = 30km." },
    { q: "If a person walks at 5 km/h, how many meters do they walk in 1 minute?", options: ["83.3m", "50m", "100m", "60m"], correct: 0, explanation: "5000m / 60 mins = 83.33m/min." },

    // --- Probability & Statistics ---
    { q: "A bag has 3 red, 2 blue, and 5 green balls. What is the chance of NOT picking blue?", options: ["20%", "50%", "80%", "70%"], correct: 2, explanation: "Not blue = 8 balls. Total = 10. 8/10 = 80%." },
    { q: "The average of three numbers is 15. Two of the numbers are 10 and 20. What is the third?", options: ["10", "15", "20", "25"], correct: 1, explanation: "Total sum must be 3 × 15 = 45. 10 + 20 = 30. 45 - 30 = 15." },

    // --- Comparison Reasoning ---
    { q: "If 4 apples cost the same as 3 oranges, and 6 oranges cost $4, how much do 12 apples cost?", options: ["$4", "$6", "$8", "$10"], correct: 2, explanation: "6 oranges = $4, so 3 oranges = $2. Since 4 apples = 3 oranges, 4 apples = $2. 12 apples = $6." },
    { q: "One-fifth of a class are boys. If there are 24 girls, how many students are in the class?", options: ["30", "35", "40", "45"], correct: 0, explanation: "4/5 of class = 24. 1/5 = 6. Total = 30." },
    
    // (Filling the remaining to reach 40 with similar pattern logic...)
    { q: "Next in sequence: 100, 50, 25, 12.5, ?", options: ["6.25", "5", "0", "10"], correct: 0, explanation: "Divide by 2 each time." },
    { q: "Find the missing number: 7, 14, 28, 56, ?", options: ["70", "112", "100", "84"], correct: 1, explanation: "Multiply by 2 each time." },
    { q: "A tank is 20% full. Adding 40 liters makes it 60% full. Capacity?", options: ["80L", "100L", "120L", "150L"], correct: 1, explanation: "40% = 40L, so 100% = 100L." },
    { q: "If 3 pencils cost $1.50, how much for 10 pencils?", options: ["$4.50", "$5.00", "$5.50", "$6.00"], correct: 1, explanation: "$0.50 each." },
    { q: "Next number: 1, 3, 6, 10, 15, ?", options: ["20", "21", "25", "18"], correct: 1, explanation: "Pattern is +2, +3, +4, +5. Next is +6. 15+6=21." },
    { q: "If 8x = 64, what is x/2?", options: ["4", "8", "2", "16"], correct: 0, explanation: "x=8, so x/2=4." },
    { q: "How many degrees in 1/6 of a circle?", options: ["30", "60", "90", "45"], correct: 1, explanation: "360 / 6 = 60." },
    { q: "What is 15% of 200?", options: ["15", "20", "30", "45"], correct: 2, explanation: "0.15 * 200 = 30." },
    { q: "A square's perimeter is 40cm. Its area?", options: ["40cm²", "100cm²", "160cm²", "80cm²"], correct: 1, explanation: "Side=10. Area=10*10=100." },
    { q: "Next number: 80, 40, 20, 10, ?", options: ["0", "2", "5", "1"], correct: 2, explanation: "Half each time." },
    { q: "If 1/3 of x is 9, what is 2x?", options: ["18", "27", "54", "36"], correct: 2, explanation: "x=27, 2x=54." },
    { q: "A car travels at 60km/h. How far in 90 minutes?", options: ["60km", "90km", "120km", "150km"], correct: 1, explanation: "1.5 hours * 60 = 90km." },
    { q: "If 2 oranges = 3 lemons, how many lemons = 10 oranges?", options: ["12", "15", "18", "20"], correct: 1, explanation: "5 * 3 = 15." },
    { q: "Next number: 5, 11, 23, 47, ?", options: ["94", "95", "96", "97"], correct: 1, explanation: "(x*2)+1." },
    { q: "Area of a triangle: Base 10, Height 5?", options: ["50", "25", "15", "10"], correct: 1, explanation: "0.5 * 10 * 5 = 25." },
    { q: "Next number: 2, 3, 5, 7, 11, ?", options: ["12", "13", "14", "15"], correct: 1, explanation: "Prime numbers." },
    { q: "How many seconds in 1.5 hours?", options: ["3600", "5400", "7200", "900"], correct: 1, explanation: "1.5 * 3600 = 5400." },
    { q: "If yesterday was Tuesday, what is 3 days after tomorrow?", options: ["Friday", "Saturday", "Sunday", "Monday"], correct: 2, explanation: "Today is Wednesday. Tomorrow is Thursday. +3 days = Sunday." }
],
 reading: [
    // --- 1-10: Inference & Context (Text 1 focus) ---
    { 
        passage: "TEXT 1: Elias watched as the neon lights bled into the puddles, a kaleidoscopic stain on the grey pavement... the city was a quiet sentinel. TEXT 2: Social cohesion is maintained by a triad: individuals, laws, and the legal system. TEXT 3: Portia argues justice must be tempered with mercy. Shylock demands his pound of flesh.",
        q: "In Text 1, describing the city as a 'quiet sentinel' suggests it is:", 
        options: ["Hostile", "Watchful and protective", "Empty", "Noisy"], 
        correct: 1, 
        explanation: "A sentinel is a guard; it implies the city watches over its inhabitants." 
    },
    { 
        passage: "TEXT 1: The laneways were veins... Elias gripped his charcoal... TEXT 2: Individuals must follow the law. TEXT 3: Mercy is twice blest.",
        q: "The 'kaleidoscopic stain' in Text 1 refers to:", 
        options: ["Oil spills", "Neon light reflections", "Graffiti", "Rainwater"], 
        correct: 1, 
        explanation: "The text links neon lights bleeding into puddles to this visual description." 
    },
    { 
        passage: "TEXT 1: There was a fragile peace here, a sense of belonging that felt as thin as the paper in his sketchbook.",
        q: "The 'thin as paper' metaphor implies the city's harmony is:", 
        options: ["Cheap", "Vulnerable/Easily broken", "Boring", "Flexible"], 
        correct: 1, 
        explanation: "Paper is delicate; the comparison suggests peace could be easily disrupted." 
    },
    { 
        passage: "TEXT 1: Elias knew that one act of malice could shatter this glass-like harmony.",
        q: "The word 'malice' in Text 1 refers to:", 
        options: ["Kindness", "Intentional ill-will", "A type of law", "An artistic tool"], 
        correct: 1, 
        explanation: "Malice is the desire to cause harm, which would break the 'glass-like' peace." 
    },
    { 
        passage: "The quality of mercy is not strained;It droppeth as the gentle rain from heavenUpon the place beneath. It is twice blest:It blesseth him that gives and him that takes.'Tis mightiest in the mightiest; it becomes. The throned monarch better than his crown. His sceptre shows the force of temporal power, The attribute to awe and majesty, Wherein doth sit the dread and fear of kings; But mercy is above this sceptred sway. It is enthroned in the hearts of kings; It is an attribute to God himself; And earthly power doth then show likest God's. When mercy seasons justice.",
        q: "The comparison of mercy to 'gentle rain' suggests that mercy should be:", 
        options: ["Heavy and overwhelming", "Natural and effortless", "Cold and unpredictable", "Rare and expensive"], 
        correct: 1, 
        explanation: "Disparate refers to things that are essentially different in kind." 
    },
    { 
        passage: "TEXT 1: Elias gripped his charcoal, his fingers stained with the dust of a thousand sketches.",
        q: "What does the charcoal signify for Elias?", 
        options: ["His poverty", "His role as an observer", "His lack of hygiene", "His hatred for the city"], 
        correct: 1, 
        explanation: "The charcoal is his medium for recording the city's life." 
    },
    { 
        passage: "TEXT 1: The laneways were the veins... neon lights bled into puddles.",
        q: "The author's use of 'veins' and 'arteries' suggests the city is:", 
        options: ["Dead and cold", "A living, biological entity", "A medical facility", "Under construction"], 
        correct: 1, 
        explanation: "These words personify the city as a living organism." 
    },
    { 
        passage: "TEXT 1: Elias knew that one act of malice could shatter this glass-like harmony.",
        q: "Identify the literary device used in 'glass-like harmony':", 
        options: ["Simile", "Metaphor", "Alliteration", "Oxymoron"], 
        correct: 0, 
        explanation: "It uses 'like' to compare harmony to glass." 
    },
    { 
        passage: "TEXT 1: ...leaving only the cold echo of the wind against the brickwork.",
        q: "What mood does the final sentence of Text 1 create?", 
        options: ["Excitement", "Desolation", "Hope", "Anger"], 
        correct: 1, 
        explanation: "Cold echoes and empty brickwork suggest a lonely, desolate feeling." 
    },
    { 
        passage: "TEXT 1: A sense of belonging that felt as thin as the paper in his sketchbook.",
        q: "The author’s tone in Text 1 is best described as:", 
        options: ["Scientific", "Reflective/Poetic", "Aggressive", "Humorous"], 
        correct: 1, 
        explanation: "The focus on imagery and feelings makes it a reflective, poetic piece." 
    },

    // --- 11-20: Technical & Comparative (Text 2 focus) ---
    { 
        passage: "TEXT 2: Social cohesion is maintained by a triad: individuals, laws, and the legal system.",
        q: "According to Text 2, what is the 'triad' of social cohesion?", 
        options: ["Money, Power, Fame", "Individuals, Laws, and the Legal System", "Police, Courts, Jail", "Citizens, Government, Tax"], 
        correct: 1, 
        explanation: "This is explicitly stated as the three parts that keep society together." 
    },
    
    { 
        passage: "TEXT 2: A rise in violent crime leads to increased court workloads and pressure on funding.",
        q: "Identify an 'economic cost' of crime mentioned in Text 2:", 
        options: ["Hospital bills", "Pressure on court funding", "Loss of property", "Business reputation"], 
        correct: 1, 
        explanation: "The text links increased court workloads directly to funding pressure." 
    },
    { 
        passage: "TEXT 2: The legal system resolves disputes impartially.",
        q: "What does 'impartially' mean in this context?", 
        options: ["Quickly", "Without bias or favoritism", "In secret", "Strictly following the victim"], 
        correct: 1, 
        explanation: "Impartiality means the law does not take sides." 
    },
    { 
        passage: "TEXT 2: Individuals must fulfill their responsibility to follow the law.",
        q: "What is the primary role of the individual in social cohesion?", 
        options: ["To make new laws", "To follow existing laws", "To act as the police", "To pay for the courts"], 
        correct: 1, 
        explanation: "Following guidelines is the core responsibility of an individual." 
    },
    { 
        passage: "TEXT 2: Laws provide the necessary guidelines for behaviour, ensuring expectations are clear.",
        q: "What is the function of 'Laws' according to the report?", 
        options: ["To punish only", "To provide guidelines/clear expectations", "To increase tax", "To make money"], 
        correct: 1, 
        explanation: "Laws set the 'rules of the road' for society to function." 
    },
    { 
        passage: "TEXT 2: Breakdown leads to a decline in collective psychological health.",
        q: "The term 'collective' refers to:", 
        options: ["One person", "The whole community", "A group of scientists", "The government"], 
        correct: 1, 
        explanation: "Collective refers to the shared experience of the group." 
    },
    { 
        passage: "TEXT 1: Elias paints the city. TEXT 2: Social cohesion is maintained by laws.",
        q: "Compare the texts. How does the 'act of malice' in Text 1 relate to Text 2?", 
        options: ["It is a breach of the law that erodes cohesion", "It is an artistic style", "It is unrelated to law", "It is a requirement for society"], 
        correct: 0, 
        explanation: "An act of malice (crime) breaks the cohesion mentioned in Text 2." 
    },
    { 
        passage: "TEXT 2: Crime leads to significant economic and social costs.",
        q: "In Text 2, 'erode' most nearly means:", 
        options: ["Build up", "Gradually wear away", "Repair", "Highlight"], 
        correct: 1, 
        explanation: "Crime wears down the stability of society over time." 
    },
    { 
        passage: "TEXT 2: The legal system consists of bodies that make, implement, and enforce law.",
        q: "Which of these is NOT a role of the legal system in Text 2?", 
        options: ["Making law", "Enforcing law", "Creating acts of malice", "Implementing law"], 
        correct: 2, 
        explanation: "Malice is a crime, not a function of the legal system." 
    },
    { 
        passage: "TEXT 2: Social cohesion is the willingness of members to cooperate.",
        q: "The 'social glue' in Text 2 is a metaphor for:", 
        options: ["Literal glue", "Cooperation", "Buildings", "Money"], 
        correct: 1, 
        explanation: "Cohesion is the 'glue' that binds society together." 
    },

    // --- 21-30: Classical & Vocab (Text 3 focus) ---
    { 
        passage: "TEXT 3: The quality of mercy is not strained; It droppeth as the gentle rain from heaven.",
        q: "Portia says mercy is 'not strained'. This means it is:", 
        options: ["Not filtered", "Not forced", "Not weak", "Not important"], 
        correct: 1, 
        explanation: "She means mercy must be given freely, not coerced." 
    },
    { 
        passage: "TEXT 3: Shylock demands his pound of flesh, choosing the letter of the law over harmony.",
        q: "Shylock represents which legal concept?", 
        options: ["Mercy", "Rigid application of the law", "Social cohesion", "Individual rights"], 
        correct: 1, 
        explanation: "He follows the literal text (letter) of the law without compassion." 
    },
    { 
        passage: "TEXT 3: Justice must be tempered with mercy.",
        q: "To 'temper' justice with mercy means to:", 
        options: ["Make justice angry", "Soften/Balance justice", "Remove justice", "Replace justice"], 
        correct: 1, 
        explanation: "Tempering means balancing a harsh thing with a softer one." 
    },
    { 
        passage: "TEXT 3: Mercy is 'twice blest: It blesseth him that gives and him that takes.'",
        q: "How does this quote benefit both sides of a dispute?", 
        options: ["Both get money", "Both receive a moral benefit", "Both win the case", "Both go to jail"], 
        correct: 1, 
        explanation: "Portia suggests mercy improves the character of the giver and the life of the taker." 
    },
    { 
        passage: "TEXT 3: Portia argues mercy elevates the legal process to something divine.",
        q: "According to Portia, mercy is superior to:", 
        options: ["The King", "Strict earthly power", "The Church", "The Artist"], 
        correct: 1, 
        explanation: "She argues mercy is an attribute of God and superior to human force." 
    },
    { 
        passage: "TEXT 2: Individuals have responsibilities. TEXT 3: Shylock demands his pound of flesh.",
        q: "What would Text 2 say about Shylock’s individual responsibility?", 
        options: ["He is following the law perfectly", "His lack of mercy erodes social cohesion", "He should be the judge", "He has no responsibility"], 
        correct: 1, 
        explanation: "The 'spirit of harmony' is part of the cooperation needed for cohesion." 
    },
    { 
        passage: "TEXT 3: Shylock demands a 'pound of flesh'.",
        q: "This phrase has become a metaphor for:", 
        options: ["A fair deal", "A cruel, unreasonable demand", "A medical term", "A type of food"], 
        correct: 1, 
        explanation: "It represents someone demanding exactly what they are owed, regardless of suffering." 
    },
    { 
        passage: "GENERAL VOCAB: Identify the synonym for 'Eloquent'.",
        q: "An eloquent speaker is:", 
        options: ["Loud", "Persuasive and fluent", "Silent", "Confused"], 
        correct: 1, 
        explanation: "Eloquence is the ability to speak clearly and convincingly." 
    },
    { 
        passage: "GENERAL VOCAB: What is an 'Anecdote'?",
        q: "A speaker tells a short personal story. This is a/an:", 
        options: ["Antidote", "Anecdote", "Allegory", "Analogy"], 
        correct: 1, 
        explanation: "An anecdote is a brief narrative of an incident." 
    },
    { 
        passage: "GENERAL VOCAB: Meaning of 'Pragmatic'?",
        q: "If a solution is 'pragmatic', it is:", 
        options: ["Dreamy", "Practical and sensible", "Expensive", "Magical"], 
        correct: 1, 
        explanation: "Pragmatism focuses on what works in reality." 
    },

    // --- 31-40: Logic & Language (SEHS Exam focus) ---
    { 
        passage: "TEXT 1: The laneways were a labyrinth. TEXT 2: The system is multi-faceted.",
        q: "Both 'labyrinth' and 'multi-faceted' imply:", 
        options: ["Simplicity", "Complexity", "Speed", "Boredom"], 
        correct: 1, 
        explanation: "Both words describe things with many parts or paths." 
    },
    { 
        passage: "LOGIC: If All A are B, and All B are C, which is true?",
        q: "Standard Logic Question:", 
        options: ["Some A are not C", "All A are C", "No A are C", "C is B"], 
        correct: 1, 
        explanation: "This is a basic transitive logic rule (Syllogism)." 
    },
    { 
        passage: "TEXT 2: Violent crime (like murder) has high social costs.",
        q: "Based on the Erin Patterson case, murder has an 'Economic' impact because:", 
        options: ["It makes people sad", "It costs taxpayers for court/police time", "It changes the weather", "It helps the hospital"], 
        correct: 1, 
        explanation: "Taxpayers fund the legal system, which is burdened by crime." 
    },
    
    { 
        passage: "VOCAB: What is 'Juxtaposition'?",
        q: "Placing two opposites together to highlight a difference is:", 
        options: ["Juxtaposition", "Alliteration", "Simile", "Metaphor"], 
        correct: 0, 
        explanation: "e.g., placing the 'Neon Lights' next to 'Grey Pavement' in Text 1." 
    },
    { 
        passage: "VOCAB: Meaning of 'Ambiguous'?",
        q: "If a law is 'ambiguous', it is:", 
        options: ["Very clear", "Open to more than one interpretation", "Very long", "Written in blue"], 
        correct: 1, 
        explanation: "Ambiguity means it is unclear or has double meaning." 
    },
    { 
        passage: "TEXT 2: Collective psychological health declines with crime.",
        q: "This psychological impact refers to:", 
        options: ["Physical injuries", "Community fear and trauma", "Court costs", "Hospital beds"], 
        correct: 1, 
        explanation: "Psychological health refers to the mental state of the group." 
    },
    { 
        passage: "VOCAB: An 'Ad Hominem' argument is one that:",
        q: "Logical Fallacy check:", 
        options: ["Uses facts", "Attacks the person instead of the argument", "Uses math", "Is very short"], 
        correct: 1, 
        explanation: "Commonly tested in persuasive text analysis." 
    },
    { 
        passage: "TEXT 3: Portia is the protagonist in this scene.",
        q: "The 'Protagonist' is always the:", 
        options: ["Bad guy", "Main character", "Narrator", "Sidekick"], 
        correct: 1, 
        explanation: "The central character who drives the action." 
    },
    { 
        passage: "VOCAB: What does 'Resilient' mean?",
        q: "A cohesive society is 'resilient'. This means it:", 
        options: ["Breaks easily", "Recovers quickly from difficulty", "Never has problems", "Is very old"], 
        correct: 1, 
        explanation: "Resilience is the ability to bounce back." 
    },
    { 
        passage: "TEXT 1, 2, and 3 all address the theme of:",
        q: "Summary Question:", 
        options: ["Melbourne's history", "The balance of harmony and law in a community", "The benefits of painting", "Shakespeare's life"], 
        correct: 1, 
        explanation: "All three texts look at how individuals and rules create (or break) harmony." 
    }
]
};

const writingPrompts = [
    { 
        type: "Persuasive", 
        topic: "Compulsory physical education in schools is a waste of time that should be spent on academic subjects. Do you agree or disagree?" 
    },
    { 
        type: "Creative", 
        topic: "Write a story starting with: 'The silence was broken by a sound that shouldn't have existed in this part of the world...'" 
    },
    { 
        type: "Persuasive", 
        topic: "Social media has done more to isolate us than to connect us. Discuss your view." 
    }
];

function gradeWriting() {
    const essay = document.getElementById('essay-box').value;
    const wordCount = essay.trim().split(/\s+/).length;
    
    // RAW EVALUATION LOGIC
    let scores = {
        taskAchievement: 0,
        coherence: 0,
        lexical: 0,
        grammar: 0
    };

    let feedback = [];
    let highlightedText = essay;

    // 1. Task Achievement (Based on Length/Volume)
    if (wordCount < 100) { scores.taskAchievement = 20; feedback.push("CRITICAL: Your response is far too short for a Year 9 entry. This shows a lack of stamina and depth."); }
    else if (wordCount < 250) { scores.taskAchievement = 50; feedback.push("WEAK: You've only scratched the surface. You need at least 350 words to compete at a Selective level."); }
    else { scores.taskAchievement = 90; }

    // 2. Coherence & Cohesion (Structure Check)
    const paragraphs = essay.split('\n').filter(p => p.trim().length > 40);
    if (paragraphs.length < 3) {
        scores.coherence = 30;
        feedback.push("POOR STRUCTURE: Your work is a 'wall of text'. Without clear paragraphing, the examiner will lose track of your arguments.");
    } else {
        scores.coherence = 85;
    }

    // 3. Lexical Resource (Vocabulary)
    const overusedWords = ["good", "bad", "happy", "sad", "very", "think", "thing"];
    const advancedWords = ["consequently", "nevertheless", "advocate", "detrimental", "inevitable", "perspective", "moreover"];
    
    let badWordCount = 0;
    overusedWords.forEach(word => {
        if (essay.toLowerCase().includes(word)) {
            badWordCount++;
            // Highlight the "bad" words in red in the results
            highlightedText = highlightedText.replace(new RegExp(`\\b${word}\\b`, 'gi'), `<span class="bg-red-200 text-red-800 border-b-2 border-red-500 font-bold">${word}</span>`);
        }
    });

    let goodWordCount = advancedWords.filter(word => essay.toLowerCase().includes(word)).length;
    scores.lexical = (goodWordCount * 15) - (badWordCount * 5);
    if (goodWordCount < 2) feedback.push("VOCABULARY IS BASIC: You are using 'primary school' words. You must use sophisticated connectives like 'Furthermore' or 'Conversely'.");

    // 4. Grammar & Mechanics (Punctuation check)
    const hasCorrectPunctuation = (essay.match(/[.!?]/g) || []).length;
    if (hasCorrectPunctuation < (wordCount / 20)) {
        scores.grammar = 40;
        feedback.push("GRAMMAR WARNING: Your sentences are too long (run-on sentences). Use more full stops to create impact.");
    } else {
        scores.grammar = 80;
    }

    // Calculate Final Raw Percentage
    const totalScore = Math.max(0, Math.min(100, (scores.taskAchievement + scores.coherence + scores.lexical + scores.grammar) / 4));

    showRawResults(totalScore, feedback, highlightedText, wordCount);
}

function showRawResults(score, feedback, text, words) {
    document.getElementById('writing-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
    
    // Set score color based on performance
    const scoreColor = score < 50 ? 'text-red-600' : 'text-orange-500';
    document.getElementById('score-display').innerHTML = `<span class="${scoreColor}">${score.toFixed(0)}%</span>`;
    
    const feedbackArea = document.getElementById('feedback-list');
    feedbackArea.innerHTML = `
        <div class="space-y-6">
            <div class="bg-red-50 p-4 border-l-4 border-red-600">
                <h3 class="font-bold text-red-800 uppercase tracking-tighter">Raw Evaluation (No Sugarcoating)</h3>
                <ul class="list-disc ml-5 mt-2 space-y-2 text-sm text-red-900">
                    ${feedback.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>

            <div>
                <h3 class="font-bold text-gray-800 mb-2">Error Mapping:</h3>
                <div class="p-6 bg-white border rounded-lg font-serif italic leading-relaxed text-gray-700 shadow-inner">
                    ${text.replace(/\n/g, '<br>')}
                </div>
                <p class="text-xs text-gray-500 mt-2">* Red highlights indicate overused/basic vocabulary that needs upgrading.</p>
            </div>

            <div class="grid grid-cols-2 gap-4 mt-4">
                <div class="p-3 bg-gray-100 rounded text-center"><strong>Words:</strong> ${words}</div>
                <div class="p-3 bg-gray-100 rounded text-center"><strong>Grade:</strong> ${score > 80 ? 'Superior' : score > 50 ? 'Average' : 'Low'}</div>
            </div>
        </div>
    `;
}
let state = { currentQ: 0, score: 0, time: 1800, activeTest: [], incorrect: [] };
let timerInterval;

function initTest(subject) {
    state.activeTest = [...subjectData[subject]].sort(() => Math.random() - 0.5).slice(0, 40);
    state.currentQ = 0; state.score = 0; state.time = 1800; state.incorrect = [];
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('subject-label').innerText = subject;
    renderQuestion();
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        state.time--;
        let m = Math.floor(state.time / 60), s = state.time % 60;
        document.getElementById('timer-box').innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
        if (state.time <= 0) endTest();
    }, 1000);
}

function renderQuestion() {
    const q = state.activeTest[state.currentQ];
    document.getElementById('q-num').innerText = `Question ${state.currentQ + 1} of 40`;
    document.getElementById('q-text').innerText = q.q;
    document.getElementById('progress-fill').style.width = `${(state.currentQ / 40) * 100}%`;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = "option-btn w-full p-4 text-left border-2 rounded-xl hover:bg-blue-50 font-medium";
        btn.innerText = `${String.fromCharCode(65 + i)}) ${opt}`;
        btn.onclick = () => handleAnswer(i);
        container.appendChild(btn);
    });
}

function handleAnswer(idx) {
    if (idx === state.activeTest[state.currentQ].correct) state.score++;
    else state.incorrect.push({ q: state.activeTest[state.currentQ].q, explanation: state.activeTest[state.currentQ].explanation });
    
    state.currentQ++;
    if (state.currentQ < 40) renderQuestion();
    else endTest();
}

function startWriting() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('writing-screen').classList.remove('hidden');
    document.getElementById('writing-prompt').innerText = writingPrompts[Math.floor(Math.random() * writingPrompts.length)];
}


function endTest() {
    clearInterval(timerInterval);
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
    document.getElementById('score-display').innerText = `${state.score}/40`;
    const feedback = document.getElementById('feedback-list');
    feedback.innerHTML = '<h3 class="font-bold border-b mb-2">Areas for Improvement:</h3>';
    state.incorrect.slice(0, 5).forEach(item => {
        feedback.innerHTML += `<p class="text-sm"><strong>Q:</strong> ${item.q}<br><span class="text-blue-600">Logic: ${item.explanation}</span></p>`;
    });
}
