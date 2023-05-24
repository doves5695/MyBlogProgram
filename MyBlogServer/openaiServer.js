// let express = require('express')
// let dotenv = require('dotenv')
// let cors = require('cors')
// const { Configuration, OpenAIApi } = require("openai");
// const bodyParser = require("body-parser");
//
//
// dotenv.config()
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_KEY,
// });
// const openai = new OpenAIApi(configuration)
//
// console.log(process.env.OPENAI_KEY)
//
// const app = express()
// app.use(cors())
// app.use(bodyParser.json())
// app.post('/', async  (req,res) => {
//     try {
//         const question = req.body.question;
//
//         const response = await openai.createCompletion({
//             model: "text-davinci-003",
//             prompt: `${question}`,
//             temperature: 0, // Higher values means the model will take more risks.
//             max_tokens: 7, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
//             top_p: 1, // alternative to sampling with temperature, called nucleus sampling
//             frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
//             presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
//         });
//         console.log(response)
//         res.status(200).send({
//             bot: response.data.choices[0].text,
//         });
//     } catch (error) {
//         console.log(error)
//         res.status(500).send( error || "Something was wrong" );
//     }
// });
//
// // app.listen(4500, () => {
// //     console.log('App is running')
// // })
