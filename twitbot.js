import {getSecret, getKey, getToken, getTokenSecret} from "./keys";
import Twit from "twit";
import { writeFile } from "fs";

let toText;

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

user.get('statuses/user_timeline', {id: 'realDonaldTrump', count: 4, tweet_mode: 'extended'}, function(err,data,response){
    console.log(data[0]['full_text']);
    console.log(data[1]['full_text']);
    toText = data;
    //writeFile('./output.txt', JSON.stringify(toText), function(){console.log('done')});
})

//twitterPost("test2");