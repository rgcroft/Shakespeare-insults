// Shakespearean Insults Database
// Organized by category with play citations

const insultsData = {
    personal: [
        { text: "Thou knotty, pated fool", play: "Henry IV, Part I" },
        { text: "I was seeking for a fool when I found you.", play: "As You Like It" },
        { text: "Degenerate and base art thou", play: "Henry VI, Part II" },
        { text: "Pray you, stand farther from me.", play: "Midsummer Night's Dream" },
        { text: "Away, you three-inch fool", play: "The Taming of the Shrew" },
        { text: "Methinks he looks like a man new out of his bed", play: "All's Well That Ends Well" },
        { text: "O, those deliberate fools!", play: "The Merchant of Venice" },
        { text: "You have little honesty as honour", play: "Henry VI, Part III" },
        { text: "You scullion, you rampallian, you fustilurian!", play: "Henry IV, Part II" }
    ],
    
    intellect: [
        { text: "You beardless job-heads", play: "The Taming of the Shrew" },
        { text: "Woe I like thee, I'd throw away myself.", play: "Timon of Athens" },
        { text: "Longwinded", play: "Love's Labour's Lost" },
        { text: "The words are blunt and so art thou", play: "Henry VI, Part II" },
        { text: "Thou art a Castañan Rung Otans!", play: "The Merry Wives of Windsor" }
    ],
    
    rogues: [
        { text: "You scullion, you rampallian, you fustilurian!", play: "Henry IV, Part II" }
    ],
    
    knaves: [
        { text: "Your abilities are too infant-like for doing much alone", play: "Coriolanus" },
        { text: "Remorseless, treacherous, lecherous, kindless", play: "King Lear" },
        { text: "Pestilent complete knave", play: "Othello" },
        { text: "Rascally knave, a very filthy rogue", play: "The Merry Wives of Windsor" },
        { text: "Sly and constant knave", play: "Cymbeline" }
    ],
    
    villains: [
        { text: "You mountain of mad flesh", play: "Henry IV, Part I" },
        { text: "Away, thou rag, thou quantity, thou remnant", play: "The Taming of the Shrew" },
        { text: "You hatch of bad eggs", play: "Troilus and Cressida" },
        { text: "Frosty-spirited rogue", play: "Henry IV, Part I" },
        { text: "Hedge-pudding", play: "The Merry Wives of Windsor" },
        { text: "A goodly apple rotten at the heart", play: "The Merchant of Venice" }
    ],
    
    traitors: [
        { text: "Recreant and most degenerate traitor", play: "Richard II" },
        { text: "There's no more faith in thee than in a stewed prune", play: "Henry IV, Part I" }
    ],
    
    fiends: [
        { text: "Out, hypocritical fiend", play: "Henry IV, Part I" },
        { text: "Vile fiend and shameless courtesan", play: "Twelfth Night" },
        { text: "Honey-fed knave", play: "Henry IV" }
    ],
    
    fools: [
        { text: "Damned epicurean rascal", play: "The Merry Wives of Windsor" },
        { text: "You foolish rheum!", play: "The Taming of the Shrew" }
    ],
    
    creatures: [
        { text: "Vigorous worm", play: "Henry V, Part I" },
        { text: "Thou art a boil, A plague-sore, or embossed carbuncle", play: "King Lear" },
        { text: "You rancour blossom", play: "A Midsummer Night's Dream" },
        { text: "Thou bloody, man-eating tiger", play: "Henry VI, Part III" },
        { text: "Show thyself a dog, a cur", play: "Timon of Athens" },
        { text: "Thou hast in thy skull no more brain than I have in mine elbows", play: "Troilus and Cressida" },
        { text: "Poisonous bunch-backed toad", play: "Richard III" },
        { text: "Thou disease of a friend", play: "Timon of Athens" },
        { text: "They are arrant and luxurious mountain goat", play: "Henry V" }
    ],
    
    animals: [
        { text: "What a dog!", play: "Henry IV, Part I" },
        { text: "I do wish thou wert a dog, That I might love thee something", play: "Timon of Athens" },
        { text: "Rooting hog", play: "Richard III" },
        { text: "Thou lump of foul deformity", play: "Richard III" },
        { text: "Like-kind in a fogbound", play: "Love's Labour's Lost" },
        { text: "A very fish", play: "Romeo and Juliet" },
        { text: "Fresh egg!", play: "Troilus and Cressida" },
        { text: "Where gett'st thou that goose look", play: "Macbeth" },
        { text: "On, ye giddy goose!", play: "Henry IV, Part II" },
        { text: "Pigeon-livered", play: "Hamlet" },
        { text: "Thou elvish-marked, abortive, rooting hog", play: "Richard III" }
    ],
    
    disease: [
        { text: "Thou art a boil, A plague-sore, or embossed carbuncle", play: "King Lear" },
        { text: "You rancour blossom", play: "A Midsummer Night's Dream" },
        { text: "Bloody, bawdy villain!", play: "Hamlet" },
        { text: "Would thou wert clean enough to spit upon", play: "Timon of Athens" }
    ],
    
    bodily: [
        { text: "Thy lips grow foul.", play: "Love's Labour's Lost" },
        { text: "Most foul, spotted traitor", play: "King Lear" },
        { text: "Thou thing of no bowels, thou!", play: "Troilus and Cressida" },
        { text: "Thou lump of foul deformity", play: "Richard III" },
        { text: "Go shake your ears", play: "A Midsummer Night's Dream" },
        { text: "Thou damned and luxurious mountain goat", play: "Henry V" },
        { text: "Thou painted maypole", play: "A Midsummer Night's Night" }
    ],
    
    bodyparts: [
        { text: "Your bum is the greatest thing about you", play: "Measure for Measure" },
        { text: "Peace, ye fat-guts!", play: "Henry IV, Part I" },
        { text: "Thy lips grow foul.", play: "Love's Labour's Lost" },
        { text: "Most foul, spotted traitor", play: "King Lear" },
        { text: "Thou thing of no bowels, thou!", play: "Troilus and Cressida" },
        { text: "Thou hast in thy skull no more brain than I have in mine elbows", play: "Troilus and Cressida" },
        { text: "He has not so much brain as ear-wax", play: "Troilus and Cressida" },
        { text: "Thine face is not worth sunburning", play: "Henry V, Part I" },
        { text: "He has no more directions in the true disciplines of the wars than a puppy dog", play: "Henry V, Part I" },
        { text: "Thou dost infect mine eyes", play: "Richard III" },
        { text: "More of your conversation would infect my brain", play: "Coriolanus" }
    ],
    
    food: [
        { text: "Not worth a gooseberry.", play: "Henry IV, Part I" },
        { text: "O thou invisible spirit of wine, if thou hast no name to be known by, let us call thee devil.", play: "Othello" },
        { text: "Such a dish of skim-milk", play: "Henry IV, Part I" },
        { text: "You egg!", play: "Macbeth" },
        { text: "You Banbury cheese", play: "The Merry Wives of Windsor" },
        { text: "A plague o' both your houses!", play: "Romeo and Juliet" },
        { text: "You carbonado, like an icicle on a Dutchman's beard", play: "As You Like It" },
        { text: "Thou whoreson cullionly barber-monger", play: "King Lear" },
        { text: "Huge bombard of sack", play: "Henry IV, Part I" }
    ],
    
    fashion: [
        { text: "You're a villainous loaf", play: "Hamlet" },
        { text: "Scurvy politician", play: "Hamlet" },
        { text: "Thou art unfit for any place but hell.", play: "Richard III" },
        { text: "You naughty, mocking-worded beggar", play: "Love's Labour's Lost" },
        { text: "Precarious wretch", play: "Measure for Measure" }
    ],
    
    individuals: [
        { text: "Sanctimonious pirate", play: "Measure for Measure" },
        { text: "You naughty, mocking-worded beggar", play: "Love's Labour's Lost" },
        { text: "You youngling", play: "Richard III" },
        { text: "Scurvy politician", play: "Hamlet" }
    ],
    
    objects: [
        { text: "You vile standing tuck", play: "Henry IV, Part I" },
        { text: "Frosh and musty stone", play: "The Taming of the Shrew" },
        { text: "The food is such As hath been belched on by infected lungs", play: "Pericles" },
        { text: "You are not worth the dust which the rude wind Blows in your face", play: "King Lear" },
        { text: "Thou blot, canker-blossom!", play: "A Midsummer Night's Dream" },
        { text: "Thou thinkle, Thou marble-hearted fiend", play: "King Lear" },
        { text: "His breath stinks with eating toasted cheese", play: "Henry VI, Part II" },
        { text: "You blocks, you worse than senseless things!", play: "Julius Caesar" },
        { text: "How now, woodweed", play: "Henry IV, Part I" },
        { text: "Thou elvish, thou taper-stealer", play: "Twelfth Night" },
        { text: "You, minion, are too saucy", play: "Two Gentleman of Verona" }
    ]
};

// Get all insults from all categories
function getAllInsults() {
    let allInsults = [];
    for (let category in insultsData) {
        allInsults = allInsults.concat(insultsData[category].map(insult => ({
            ...insult,
            category: category
        })));
    }
    return allInsults;
}

// Get random insult from a specific category
function getInsultByCategory(category) {
    if (category === 'random') {
        const allInsults = getAllInsults();
        return allInsults[Math.floor(Math.random() * allInsults.length)];
    }
    
    const categoryInsults = insultsData[category];
    if (categoryInsults && categoryInsults.length > 0) {
        const insult = categoryInsults[Math.floor(Math.random() * categoryInsults.length)];
        return { ...insult, category: category };
    }
    
    return null;
}

// Get category display name
function getCategoryDisplayName(category) {
    const names = {
        personal: "Personal Attributes",
        intellect: "Intellect",
        rogues: "Rogues",
        knaves: "Knaves",
        villains: "Villains",
        traitors: "Traitors",
        fiends: "Fiends",
        fools: "Fools & Rascals",
        creatures: "Creatures",
        animals: "Animals",
        disease: "Disease",
        bodily: "Bodily Qualities",
        bodyparts: "Body Parts",
        food: "Food & Drink",
        fashion: "Fashion",
        individuals: "Types of Individuals",
        objects: "Inanimate Objects"
    };
    return names[category] || category;
}
