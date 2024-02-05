CREATE DATABASE userapi;

\c userapi

CREATE TABLE "user" (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);