import random

def is_valid_guess(user_input):
    return user_input.isdigit() and 1 <= int(user_input) <= 100


def get_user_input(prompt_message):
    return input(prompt_message)


def evaluate_guess(guessed_number, target_number):
    if guessed_number < target_number:
        return "LOW"
    elif guessed_number > target_number:
        return "HIGH"
    else:
        return "CORRECT"


def play_number_guessing_game():
    target_number = random.randint(1, 100)
    has_guessed_correctly = False
    guess_count = 0

    user_input = get_user_input("Guess a number between 1 and 100: ")

    while not has_guessed_correctly:
        if not is_valid_guess(user_input):
            user_input = get_user_input(
                "I wont count this one Please enter a number between 1 to 100: "
            )
            continue

        guess_count += 1
        guessed_number = int(user_input)

        result = evaluate_guess(guessed_number, target_number)

        if result == "LOW":
            user_input = get_user_input("Too low. Guess again")
        elif result == "HIGH":
            user_input = get_user_input("Too High. Guess again")
        else:
            print("You guessed it in", guess_count, "guesses!")
            has_guessed_correctly = True


def main():
    play_number_guessing_game()


main()

