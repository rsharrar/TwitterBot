import {getSecret, getKey, getToken, getTokenSecret} from "./keys";
import Twit from "twit";
import { stringify } from "querystring";

let user = new Twit({
    consumer_key: getKey(),
    consumer_secret: getSecret(),
    access_token: getToken(),
    access_token_secret: getTokenSecret()
})

function twitterPost(postText) {
    user.post('statuses/update', {status: postText}, function(err, data, response){
        console.log("Posted: ",data.text)
    })
}

function schmeseIt(word){
    let frontText = ''
    if(word){
        if(word[0] === word[0].toUpperCase()){
            frontText = 'Schm'
        }else{
            frontText = 'schm'
        }

        let wordLen = word.length
        for(let i = 0; i < wordLen; i++){
            if((word[i] == 'a') || 
            (word[i] == 'a') || 
            (word[i] == 'e') || 
            (word[i] == 'i') || 
            (word[i] == 'o') || 
            (word[i] == 'u') || 
            (word[i] == 'y')){
                let backText = word.substring(i,(wordLen))
                let output = frontText + backText
                return output
            }
        }
        return word
    }
}

user.get('statuses/user_timeline', {id: 'realDonaldTrump', count: 4, tweet_mode: 'extended'}, function(err,data,response){
    console.log(data)
    console.log(data[0]['full_text']);
    console.log(data[1]['full_text']);
    let inputText = data[0]['full_text'];
    let inputarray = inputText.split(" ");
    let outputText = [];
    for(let i = 0; i < inputarray.length; i++){
        outputText.push(schmeseIt(inputarray[i]))
    }
    twitterPost(outputText)
})