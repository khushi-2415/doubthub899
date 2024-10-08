from flask import Flask, render_template, request, redirect, url_for, flash
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Required for flashing messages

# MongoDB connection
client = MongoClient("mongodb+srv://KhushiSharma:Khushi4433@khushi2415.mj1rt.mongodb.net/?retryWrites=true&w=majority&appName=khushi2415")
db = client.doubthub # Replace 'my_database' with your database name

@app.route('/')
def home():
    return render_template('homepage.html')  # Create a home.html template

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        
        # Hash the password
        hashed_password = generate_password_hash(password, method='sha256')
        
        # Insert into MongoDB
        db.users.insert_one({
            'name': name,
            'email': email,
            'password': hashed_password
        })
        
        flash('Registration successful! Please log in.', 'success')
        return redirect(url_for('login'))  # Redirect to login page after registration

    return render_template('Userregister.html')  # Create a register.html template

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        user = db.users.find_one({'email': email})
        
        if user and check_password_hash(user['password'], password):
            flash('Login successful!', 'success')
            return redirect(url_for('home'))  # Redirect to home page after login
        else:
            flash('Login failed. Check your email and password.', 'danger')

    return render_template('loginpage.html')  # Create a login.html template

if __name__ == '__main__':
    app.run(debug=True)
