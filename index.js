/** uncomment one of these **/
import OpenAI from "openai"
import { HfInference } from '@huggingface/inference'
// openai.api_key = process.env.OPENAI_API_KEY
const apiKey = process.env.OPENAI_API_KEY
console.log(process.env.OPENAI_API_KEY)
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true })
const hf = new HfInference(process.env.HUGGING_FACE_TOKEN)

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
  //open doors
    document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
    document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
    document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"
})