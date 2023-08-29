//quotes from API
let apiQuotes=[];
const quotetext=document.getElementById('quote');
const button=document.getElementById('new-quote');
const authortext=document.getElementById('author');
const twitter=document.getElementById('twitter');
let abhi="Abhishek The Great";

function newQuote()
{
    const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    if(quote.author.length==0)
    {
        authortext.textContent=abhi;
    }
    else
    {
        let last=parseInt(quote.author.length-10);
        console.log(last);
        authortext.textContent = quote.author.substring(0,last);
    }
    if(quote.text.length>50)
    {
        quotetext.classList.add('long-quote');
    }
    else
    {
        quotetext.classList.remove('long-quote');
    }
    quotetext.textContent = quote.text;
}
function newtweet()
{
    const abhi ='https://twitter.com/intent/tweet?text=' + quotetext.textContent;
    window.open(abhi, '_blank');
}
async function getQuotes()
{
    const apiUrl='https://type.fit/api/quotes';
    try
    {
        const response=await fetch(apiUrl);
        apiQuotes=await response.json();
        newQuote();
    }
    catch(error)
    {
        //catch error here
    }
}
button.addEventListener('click',newQuote);
twitter.addEventListener('click',newtweet);
getQuotes();

