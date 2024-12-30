-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(100) NOT NULL,
    address VARCHAR(100),
    role VARCHAR(100) NOT NULL,
    photo VARCHAR(100) NOT NULL,
    deleted_at TIMESTAMP DEFAULT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Attendance Table
CREATE TABLE IF NOT EXISTS attendance (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    date DATE DEFAULT CURRENT_DATE,
    location_in VARCHAR(255),
    location_out VARCHAR(255),
    ip VARCHAR(45),
    photo_in VARCHAR(255),
    photo_out VARCHAR(255),
    clock_in TIMESTAMP DEFAULT null,
    clock_out TIMESTAMP DEFAULT null
);

-- Create index on users
CREATE INDEX idx_users_id ON users USING HASH(id);

-- Create index on attendace
CREATE INDEX idx_attendance_id ON attendance USING HASH(id);
CREATE INDEX idx_users_id_on_attendance ON attendance USING HASH(user_id);
