const TweetTransformer = (src_tweet, entities) => {
	if (entities.hashtags.length>0) {
		entities.hashtags.map((tag)=> {
			src_tweet = process_hashtag(src_tweet, tag);
		});
	}
	if (entities.urls.length>0) {
		entities.urls.map((url)=> {
			src_tweet = process_urls(src_tweet, url);
		});
	}
    console.log(src_tweet);
    return src_tweet;
}

const process_urls = (src_tweet, url) => {
	const left = src_tweet.slice(0,url.indices[0]);
	const mid = `<a href=${url.url}>`+url.url+`</a>`;
	const right = src_tweet.slice(url.indices[1]);
	return left + mid + right;
}

const process_hashtag = (src_tweet, tag) => {
	const left = src_tweet.slice(0,tag.indices[0]);
	const mid = '<strong>'+tag.text+'</strong>';
	const right = src_tweet.slice(tag.indices[1]);
	return left + mid + right;
}

export default TweetTransformer;