from pymongo import MongoClient

# Replace with your actual MongoDB connection string
client = MongoClient("mongodb+srv://KhushiSharma:Khushi4433@khushi2415.mj1rt.mongodb.net/?retryWrites=true&w=majority&appName=khushi2415")
# Access a specific database
db = client.doubthub  # replace 'my_database' with your database name

# Access a specific collection
collection = db.users  # replace 'my_collection' with your collection name

# Insert some data into the collection
collection.insert_one({"name": "DoubtHub", "type": "project"})

# Find and print one document from the collection
result = collection.find_one({"name": "DoubtHub"})
print(result)