from flask import Flask, jsonify
from pymongo import MongoClient
from random import randint

app = Flask(__name__)

# MongoDB configuration
mongo_uri = "mongodb+srv://<password>@cluster0.njyzgch.mongodb.net/"
try:
    client = MongoClient(mongo_uri)
    db = client.question_bank  # database name
    collection = db.arctic_collections  # collection name

except Exception as e:
    print(f"Error connecting to MongoDB: {e}")
    exit(1)

@app.route('/random_question', methods=['GET'])
def get_random_question():
    try:
        # Count the total number of documents in the collection
        total_questions = collection.count_documents({})

        if total_questions == 0:
            return jsonify({"message": "No questions found"})

        # Generate a random index within the range of total documents
        random_index = randint(0, total_questions - 1)

        # Retrieve a random question using the random index
        random_question = collection.find().limit(1).skip(random_index)

        # Convert the result to a JSON response
        result = {"random_question": {
            "question": random_question[0]['question'],
            "option1": random_question[0]['option1'],
            "option2": random_question[0]['option2'],
            "correctOption": random_question[0]['correctOption']
        }} #if random_question.count() > 0 else {"message": "No questions found"}
       
        return jsonify(result)

    except Exception as e:
        print(f"Error retrieving random questions from MongoDB: {e}")
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == '__main__':
    app.run(debug=True)
