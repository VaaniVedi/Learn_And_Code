import random

def is_valid_guess(user_input):
    return user_input.isdigit() and 1 <= int(user_input) <= 100

def get_valid_guess():
    user_input = input("Guess a number between 1 and 100: ")
    while not is_valid_guess(user_input):
        user_input = input("Invalid input. Enter a number between 1 and 100: ")
    return int(user_input)

def play_guessing_game():
    target_number = random.randint(1, 100)
    attempt_count = 0

    while True:
        guessed_number = get_valid_guess()
        attempt_count += 1

        if guessed_number < target_number:
            print("Too low. Guess again.")
        elif guessed_number > target_number:
            print("Too high. Guess again.")
        else:
            print(f"You guessed it in {attempt_count} guesses!")
            break

play_guessing_game()
