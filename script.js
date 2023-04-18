const quoteText = document.querySelector('.quote');
const quoteBtn = document.querySelector('button');
const authorName = document.querySelector('.author .name');
const soundBtn = document.querySelector('.sound');
const copyBtn = document.querySelector('.copy');
const twitterBtn = document.querySelector('.twitter');

const randomQuote = () => {
    console.log('cliced');
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'loading Qoute...';
    // fetching random Quotes-data from the API and parsing it into Js object
    fetch('https://api.quotable.io/random')
    .then(res => 
        res.json())
    .then(req => {
        console.log(req);
        quoteText.innerText = req.content;
        authorName.innerText = req.author;
        quoteBtn.innerText='New Quote'
        quoteBtn.classList.remove('loading')
    })
}

soundBtn.addEventListener('click', ()=> {
    // The SpeechSynthesisUtterance is a web speech api that represents a speech request
    let sprechen = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`)
    // speak method of speechsysthesis speaks the utterance 
    speechSynthesis.speak(sprechen);
})  

copyBtn.addEventListener('click', ()=> {
    // Copying the quote text on copyBtn click
    navigator.clipboard.writeText(`${quoteText.innerText}`)
})  

twitterBtn.addEventListener('click', ()=> {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open( tweetUrl, '_blank');
})  
quoteBtn.addEventListener('click', randomQuote)