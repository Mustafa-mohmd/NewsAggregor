from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from users_db import users, create_user, authenticate_user

app = Flask(__name__, static_folder='frontend')
CORS(app)

# Serve frontend HTML pages
@app.route('/')
def serve_home():
    return send_from_directory(app.static_folder, 'home1.html')

@app.route('/<path:path>')
def serve_static_file(path):
    return send_from_directory(app.static_folder, path)

# Signup route
@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    if not data:
        return jsonify({'success': False, 'message': 'Invalid JSON payload'}), 400

    name = data.get('name')
    email = data.get('email', '').strip().lower()
    password = data.get('password')

    if email in users:
        return jsonify({'success': False, 'message': 'Email already exists'}), 400

    create_user(name, email, password)
    return jsonify({'success': True, 'message': 'Signup successful'})

# Login route
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data:
        return jsonify({'success': False, 'message': 'Invalid JSON payload'}), 400

    email = data.get('email', '').strip().lower()
    password = data.get('password')

    # Dummy login check
    if email == 'admin@admin.com' and password == 'Adminpassword':
        return jsonify({
            'success': True,
            'message': 'Login successful',
            'user': {
                'email': email,
                'name': 'Admin'
            }
        })

    # Normal user check
    if authenticate_user(email, password):
        return jsonify({
            'success': True,
            'message': 'Login successful',
            'user': {
                'email': email,
                'name': users[email]['name']
            }
        })
    else:
        return jsonify({'success': False, 'message': 'Invalid email or password'}), 401

if __name__ == '__main__':
    app.run(debug=True)
