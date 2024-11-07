let adjectives = ['marvelous', 'amazing', 'wonderful', 'incredible', 'blessed', 'happy', 'funny', 'prosperous', 'nice', 'great'];
let verbs = ['enjoy', 'have'];
let times = ['day', 'night', 'morning', 'evening', 'afternoon', 'life', 'workshif', 'shiff'];
let vowels = ['a', 'e', 'i', 'o', 'u'];
let random = (arr) =>{
    let num = (arr.length)
    let i = Math.floor(Math.random()*num);
    return (arr[i]);
}

let pGenerator = () =>{
    let adj = random(adjectives);
    let vowelDetector = (adj) =>{
        const vowel = vowels.some(lett => lett === adj[0]);
        return vowel ? 'an' : 'a';
    } 
    
    console.log(`I hope you ${random(verbs)} ${vowelDetector(adj)} ${adj} ${random(times)}!`);
}
pGenerator();


