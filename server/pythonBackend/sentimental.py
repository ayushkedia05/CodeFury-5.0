from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import pymongo

# server = pymongo.MongoClient("mongodb://localhost:27017/")
# database = server["database_name"]
# collection = database["collection_name"]
# document = collection.find_one({"_id": "103"})
# collection.update_one({"_id": "102"}, {"$set": {"SentimentScore": sentimentScore}})
sid_obj = SentimentIntensityAnalyzer()

lines = []
with open(r"./drAgrawal.txt", 'r', encoding="utf8") as f:
    lines = f.readlines()
    
compoundValue = 0
negative = 0
positive = 0
neutral = 0
for line in lines:

    sentiment_dict = sid_obj.polarity_scores(line)
    x =sentiment_dict['compound']

    compoundValue += x
    if x >= 0.05: positive += 1
    elif x <= -0.05: negative -= 1
    else: neutral += 0.1


sentimentScore = ((positive/(positive-negative))*10)
print(positive) 
print(negative) 
print(neutral) 

print(sentimentScore)