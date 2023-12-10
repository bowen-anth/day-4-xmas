/** uncomment one of these **/
import OpenAI from "openai"
import { HfInference } from '@huggingface/inference'
const hf = new HfInference(HUGGING_FACE_TOKEN)
const apiKey = OPENAI_API_KEY

const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

// chat gpt api call for getJoke
async function getJoke() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Tell me a Christmas Joke" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
  document.querySelector('#joke-display').textContent = completion.choices[0].message.content
}

getJoke();

 //HF api call for joke
const textToGenerate = "One of my favorite Christmas jokes about Santa is"
const response = await hf.textGeneration({
    inputs: textToGenerate,
    model: "HuggingFaceH4/zephyr-7b-beta"
})
console.log("HF:", response)

document.getElementById('window-container').addEventListener('click', function () {
/**
 * 🎄 Challenge:
 * 1. When clicked, the doors should open
 *    to reveal a festive joke.
 * 
 * 🎁 hint.md for help!
 **/
 

    
    document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
    document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
    document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"
})