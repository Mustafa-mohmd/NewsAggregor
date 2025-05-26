# users_db.py

# This is an in-memory user database. It will reset every time the server restarts.
users = {}

def create_user(name, email, password):
    if email in users:
        return False  # User already exists
    users[email] = {
        'name': name,
        'email': email,
        'password': password  # In production, you'd hash this!
    }
    return True

def authenticate_user(email, password):
    user = users.get(email)
    if user and user['password'] == password:
        return True
    return False

def get_user(email):
    return users.get(email)

def user_exists(email):
    return email in users
