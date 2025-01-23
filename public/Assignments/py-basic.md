<h1 class="page-title">Python Assignment</h1>

<h2 class="summary" data-summary="Objective" id="objective">Objective:</h2>

Solve the following questions and upload in google classroom

## Deadline: 26th July 2024

<div class="status">
    <h3>Status: </h3>
    <div class="flag">
        <p>Turned-in</p>
        <span class="material-symbols-outlined">done_all</span>
    </div>
</div>

### **Questions:**

<h2 class="color-accent summary" data-summary="Input number of days and output in seconds" id="q1">
<strong>1. Please write a program which asks the user for a number of days. The program then prints out the number of seconds in the amount of days given.</strong>
</h2>

<br>

```py
# Ask the user for the number of days -> Type: str
num_days = input("Enter the number of days: ")

# Check if the entered value is a digit and executes if condition is false
if not num_days.isdigit():
    print("You must enter an integer here")
    exit(1) # Exit the program with error

# Convert the entered value to integer -> Type: int
num_days = int(num_days)

# Print the number of days in seconds
print(f"{num_days} days in seconds: {num_days * 24 * 60 * 60 }\n")
```

### Output

```bash
Enter the number of days: 7
7 days in seconds: 604800
```

<br>

<h2 class="color-accent summary" data-summary="Input 3 numbers and output product of them" id="q2">
<strong>2. This program asks the user for three numbers. The program then prints out their product, that is, the numbers multiplied by each other.</strong>
</h2>

<br>

```py
# Importing a built-in 'math' module.
import math

# Using try-except block to handle exceptions and errors
try:
    # Creating an empty list to store the numbers
    numbers: list[float] = []

    # Looping through 3 times
    for ind in range(3):
        # Appending the numbers to the list
        numbers.append(float(input(f"Enter number {ind + 1}: ")))

    # Printing the product of all the given numbers using math.prod() method
    print(f"Product of all given numbers: {math.prod(numbers)}\n")

except ValueError:
    # Printing an error message if the user enters a non-integer or non-float value
    print("You must enter an integer or a float in all of the three options here")
```

### Output

```bash
Enter number 1: 2
Enter number 2: 4
Enter number 3: 8
Product of all given numbers: 64.0
```

<br>

<h2 class="color-accent summary" data-summary="Input 4 numbers and output sum and mean" id="q3">
    <strong>3. Please write a program which asks the user for four numbers. The program then prints out the sum and the mean of the numbers.</strong>
</h2>

<br>

```py
# Using try-except block to handle exceptions and errors
try:
    # Creating an empty list to store the numbers
    numbers: list[float] = []

    # Looping through 4 times
    for ind in range(4):
        # Appending the numbers to the list
        numbers.append(float(input(f"Enter number {ind + 1}: ")))

    # Printing the sum and the mean of the given numbers
    # sum() is a built-in function that returns the sum of all the elements in the list
    # len() is a built-in function that returns the length of the list
    print(f"Sum of the given numbers: {sum(numbers)}")
    print(f"Mean of the given numbers: {sum(numbers) / len(numbers)}\n")

except ValueError:
    # Printing an error message if the user enters a non-integer or non-float value
    print("You must enter an integer or a float in all of the four options here")
```

### Output

```bash
Enter number 1: 2
Enter number 2: 4
Enter number 3: 8
Enter number 4: 16
Mean of the given numbers: 30.0
Product of all given numbers: 7.5
```

<br>

<h2 class="color-accent summary" data-summary="Input data and estimate daily and weekly expenditure" id="q4">
    <strong>4. Please write a program which estimates a user's typical food expenditure. The program asks the user how many times a week they eat at the student cafeteria. Then it asks for the price of a typical student lunch, and for money spent on groceries during the week. Based on this information the program calculates the user's typical food expenditure both weekly and daily.</strong>
</h2>

<br>

```py
# Using try-except block to handle exceptions and errors
try:
    # Creating a dictionary to store the input data
    data = {
        "eats_x_times_a_week": int(input("Enter the number of times you eat at student cafeteria per week: ")),
        "price_of_student_lunch": float(input("Enter the price of a typical student lunch: ")),
        "spent_on_groceries_weekly": float(input("Enter the price spent on groceries weekly: "))
    }

    # Defining a custom helper function to get the data from the dictionary
    def fetch(id: str) -> int | float:
        return data.get(id)

    # Calculating the weekly and daily expenditure
    weekly_eat_expenditure: float = fetch("eats_x_times_a_week") * fetch("price_of_student_lunch")
    daily_total: float = fetch("price_of_student_lunch") + (fetch("spent_on_groceries_weekly") / 7)
    weekly_total: float = fetch("spent_on_groceries_weekly") + weekly_eat_expenditure

    # Daily expenditure summary
    print("Summary:\n\nDaily:\n")
    print(f"Student Lunch: Rs. {round(fetch("price_of_student_lunch"), 2)}")
    print(f"Groceries: Rs. {round(fetch("spent_on_groceries_weekly") / 7, 2)}")
    print(f"Grand total: Rs. {round(daily_total, 2)}\n\nWeekly:\n")

    # Weekly expenditure summary
    print(f"Student Lunch: Rs. {round(weekly_eat_expenditure, 2)}")
    print(f"Groceries: Rs. {round(fetch("spent_on_groceries_weekly"), 2)}")
    print(f"Grand total: Rs. {round(weekly_total, 2)}\n")

except ValueError:
    # Printing an error message if the user enters a non-integer or non-float value
    print("You must enter an integer or a float in the given options wisely")
```

### Output

```bash
Enter the number of times you eat at student cafeteria per week: 7
Enter the price of a typical student lunch: 10
Enter the price spent on groceries weekly: 70
Summary:

Daily:

Student Lunch: Rs. 10.0
Groceries: Rs. 10.0
Grand total: Rs. 20.0

Weekly:

Student Lunch: Rs. 70.0
Groceries: Rs. 70.0
Grand total: Rs. 140.0
```

<br>

<h2 class="color-accent summary" data-summary="Separate students into desired number of groups" id="q5">
    <strong>5. Please write a program which asks for the number of students on a course and the desired group size. The program will then print out the number of groups formed from the students on the course. If the division is not even, one of the groups may have fewer members than specified.</strong>
</h2>

<br>

```py
# Importing a built-in 'math' module.
import math

# Using try-except block to handle exceptions and errors
try:
    # Asking the user for the number of students on a course and the desired group size
    num_of_students = int(input("How many students on the course? "))
    group_size = int(input("Desired group size? "))

    # Calculating the number of groups formed from the students on the course
    groups = num_of_students / group_size

    # Checking if the division is even or not
    fract, integral = math.modf(groups)

    if fract != 0:
        # If the division is not even, one of the groups may have fewer members than specified
        print(f"Number of groups formed: {int(integral)}")
        print(f"Note: Last group may have {math.ceil(fract)} student(s) only")
    else:
        # If the division is even, all the groups will have the same number of members
        print(f"Number of groups formed: {int(integral)}")

except ValueError:
    # Printing an error message if the user enters a non-integer value
    print("Entered input is not of type integer")
```

### Output

```bash
How many students on the course? 8
Desired group size? 4
Number of groups formed: 2
```

<br>

<h2 class="color-accent summary" data-summary="Input 2 digit number and split the number of digits" id="q6">
    <strong>6. Please write a program which asks the user for a two digit number and split digits of number.</strong>
</h2>

<br>

```py
# Ask the user for a two digit number -> Type: str
digit = input("Enter a two digit integer: ")

# Check if the entered value is a digit and is of length 2
if len(digit) != 2 or not digit.isdigit():
    # Print an error message if the condition is false
    print("Entered input is not 2 in length or not an integer")
    exit(1) # Exit the program with error

else:
    # Otherwise split the digits of the number
    print(f"First Digit: {digit[0]}")
    print(f"Last Digit: {digit[1]}\n")
```

### Output

```bash
Enter a two digit integer: 69
First Digit: 6
Last Digit: 9
```

<br>

<h2 class="color-accent summary" data-summary="Input 2 digit number and reverse it" id="q7">
    <strong>7. Please write a program which asks the user for a two digit number and reverse given number.</strong>
</h2>

<br>

```py
# Ask the user for a two digit number -> Type: str
digit = input("Enter a two digit integer: ")

# Check if the entered value is a digit and is of length 2
if len(digit) != 2 or not digit.isdigit():
    # Print an error message if the condition is false
    print("Entered input is not 2 in length or not an integer")
    exit(1) # Exit the program with error

else:
    # Reverse the given number using str methods
    reversed_num = ''.join(reversed(digit))

    # Print the reversed number
    print(f"Reversed of given number: {reversed_num}\n")
```

### Output

```bash
Enter a two digit integer: 69
Reversed of given number: 96
```

<br>

<h2 class="color-accent summary" data-summary="Input 3 digit number and split the number of digits" id="q8">
    <strong>8. Please write a program which asks the user for a and split digits of number</strong>
</h2>

<br>

```py
# Ask the user for a three digit number -> Type: str
digit = input("Enter a three-digit integer: ")

# Check if the entered value is a digit and is of length 3
if len(digit) != 3 or not digit.isdigit():
    # Print an error message if the condition is false
    print("Entered input is not 3 in length or not an integer")
    exit(1) # Exit the program with error

else:
    # Otherwise split the digits of the number and print the result
    splitted = [char for char in digit]
    print(f"Splitted list: {splitted}\n")
```

### Output

```bash
Enter a three-digit integer: 420
Splitted list: ['4', '2', '0']
```

<br>

<h2 class="color-accent summary" data-summary="Input 3 digit number and add first and last digit" id="q9">
    <strong>9. Please write a program which asks the user for a and add only 1st and last digit.</strong>
</h2>

<br>

```py
# Ask the user for a three digit number -> Type: str
digit = input("Enter a three-digit integer: ")

# Check if the entered value is a digit and is of length 3
if len(digit) != 3 or not digit.isdigit():
    # Print an error message if the condition is false
    print("Entered input is not 3 in length or not an integer")
    exit(1) # Exit the program with error

else:
    # Otherwise split the digits of the number and print the result
    splitted = [char for char in digit] # List comprehension syntax
    print(f"Addition of first and last digit: {int(splitted[0]) + int(splitted[2])}\n")
```

### Output

```bash
Enter a three-digit integer: 420
Addition of first and last digit: 4
```

<br>
