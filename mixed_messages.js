
let versesLists = {
oldTestamentVerses : ['The grass withers, the flower fades, but the word of our God will stand forever. \n- Isaiah 40:8',
'Hear, O Israel: The Lord our God, the Lord is one. You shall love the Lord your God with all your heart and with all your soul and with all your might. - Deuteronomy 6:4-5',
'And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise. - Deuteronomy 6:6-7',
'Surely he has borne our griefs, and carried our sorrows; yet we esteemed him stricken, smitten by God, and afflicted. But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed. - Isaiah 53:4-5',
'All we like sheep have gone astray; we have turned—every one—to his own way; and the Lord has laid on him the iniquity of us all. - Isaiah 53:6',
],
// addOT(newOTVerse){
//     this.oldTestamentVerses.push(newOTVerse);
// },
psalmVerses : ['You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore. - Psalm 16:11', 
'Bless the Lord, O my soul, and all that is within me, bless his holy name! Bless the Lord, O my soul, and forget not all his benefits, who forgives all your iniquity, who heals all your diseases, who redeems your life from the pit, who crowns you with steadfast love and mercy... - Psalm 103:1-4', 
'He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. I will say to the Lord, “My refuge and my fortress, my God, in whom I trust.” - Psalm 91:1-2',
'Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God. - Psalm 42.11',
'One thing have I asked of the Lord, that will I seek after: that I may dwell in the house of the Lord all the days of my life, to gaze upon the beauty of the Lord and to inquire[a] in his temple. - Psalm 27:4'
],
// addPsalm(newPsalmVerse){
//     this.psalmVerses.push(newPsalmVerse);
// },
newTestamentVerses : ['Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear. - Ephesians 4:29',
'Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come. - 2 Corinthians 5:17',
'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law. - Galatians 5:22-23',
'...for God gave us a spirit not of fear but of power and love and self-control. - 2 Timothy 1:7',
'He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed. - 1 Peter 2:24'
],
// addNT(newNTVerse){
//     this.newTestamentVerses.push(newNTVerse);
// }
}


let randomIndexGenerator = (list) => {
    return Math.floor(Math.random()*list.length)
}

let versesOfTheDay = []

for (let verseList in versesLists) {
    let tempIndex = randomIndexGenerator(versesLists[verseList]);
    switch (verseList) {
        case 'oldTestamentVerses':
            // versesOfTheDay.push('The OT verse of the day:');
            versesOfTheDay.push(`The OT verse of the day: \n ${versesLists[verseList][tempIndex]} \n`);
            break;
        case 'psalmVerses':
            versesOfTheDay.push(`The Psalm verse of the day: \n ${versesLists[verseList][tempIndex]}\n`);
            break;
        case 'newTestamentVerses':
            versesOfTheDay.push(`The NT verse of the day: \n ${versesLists[verseList][tempIndex]}\n`)
            break;
        default:
            return "Program error";
            break;

    };
}
let otVerse = versesLists.oldTestamentVerses[randomIndexGenerator(versesLists.oldTestamentVerses)]
let ntVerse = versesLists.newTestamentVerses[randomIndexGenerator(versesLists.newTestamentVerses)]
let psalmVerse = versesLists.psalmVerses[randomIndexGenerator(versesLists.psalmVerses)]
// console.log(otVerse)
// console.log(ntVerse)
// console.log(psalmVerse)

function printVOD(arr){
    console.log(arr.join('\n'));
}

printVOD(versesOfTheDay)
// console.log(versesOfTheDay)