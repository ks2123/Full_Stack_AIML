-- 04_SQL_and_MySQL: Production Schema DDL for AI Job Simulator

CREATE DATABASE IF NOT EXISTS ai_job_simulator;
USE ai_job_simulator;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('ADMIN', 'CANDIDATE') DEFAULT 'CANDIDATE',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_users_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Simulation Days Table
CREATE TABLE IF NOT EXISTS simulation_days (
    id INT AUTO_INCREMENT PRIMARY KEY,
    day_number INT NOT NULL UNIQUE,
    title VARCHAR(150) NOT NULL,
    prompt_scenario TEXT NOT NULL,
    target_deliverable TEXT NOT NULL,
    difficulty ENUM('EASY', 'MEDIUM', 'HARD') DEFAULT 'MEDIUM',
    INDEX idx_sim_day_num (day_number)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. User Submissions Table
CREATE TABLE IF NOT EXISTS user_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    simulation_day_id INT NOT NULL,
    submission_url VARCHAR(512) NOT NULL,
    grade_score DECIMAL(5,2) DEFAULT NULL,
    feedback_text TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_submission_user FOREIGN KEY (user_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_submission_day FOREIGN KEY (simulation_day_id) 
        REFERENCES simulation_days(id) ON DELETE CASCADE,
    INDEX idx_user_sim (user_id, simulation_day_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Salary Predictions Table (ML Engine Log)
CREATE TABLE IF NOT EXISTS salary_predictions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    years_of_experience DECIMAL(4,1) NOT NULL,
    primary_skill VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    predicted_salary_usd DECIMAL(10,2) NOT NULL,
    model_version VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_prediction_user FOREIGN KEY (user_id) 
        REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_prediction_user (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
