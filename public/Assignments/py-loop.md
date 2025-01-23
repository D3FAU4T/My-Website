<h1 class="page-title">Python Assignment</h1>

<h2 class="summary" data-summary="Objective" id="objective">Objective:</h2>

Solve the following questions and upload in google classroom

## Deadline: 11th September 2024

<div class="status">
    <h3>Status: </h3>
    <div class="flag">
        <p>Turned-in</p>
        <span class="material-symbols-outlined">done_all</span>
    </div>
</div>

### **Questions:**

<br>

<h2 class="color-accent summary" data-summary="Loop concept and it's types" id="q1">1. Discuss the concept of loops in Python. What are the types of loops supported in Python, and when would you use each type? Provide examples to illustrate.</h2>

**Ans:** In Python, loops are used to execute a block of code repeatedly until a certain condition is met. Python mainly supports two main types of loops: for loop and while loop, each having it's own use case.

<br>

### For loop

The for loop in python is used to iterate over a sequence (List, Tuple, Dictionary, Set, String). This loop is useful if you know the number of iterations beforehand.

<br>

### Example

```py
vowels = [ 'a', 'e'. 'i', 'o', 'u' ]
for char in vowels:
    print(char)
```

<br>

### Output

```bash
a
e
i
o
u
```

<br>

### While loop

The while loop in python is used to execute a block of code as long as a condition is true. This loop is useful when the number of iterations is not known beforehand and depends on some condition.

<br>

### Example

```py
user_num = int(input("? Enter an integer\n> "))
index = 1
while index <= user_num:
    print(index)
    index += 1
```

<br>

### Output

```bash
? Enter an integer
> 5
1
2
3
4
5
```

<br>

<h2 class="color-accent summary" data-summary="For loop vs While loop" id="q2">2. Explain the <code>for</code> loop in Python. How does it differ from the <code>while</code> loop, and what are the advantages of using a <code>for</code> loop over a <code>while</code> loop?
</h2>

**Ans:** The for loop in python is used to iterate over a sequence (List, Tuple, Dictionary, Set or String) or any other iterable object. During each iteration, an item from the sequence is assigned to a variable, and the block of code inside the loop is executed.

<br>

### Example

```py
fruits = [ "apple", "banana", "cherry" ]
for fruit in fruits:
    print(fruit)
```

<br>

### Output

```bash
apple
banana
cherry
```

<br>

### Difference between for loop and while loop

| Aspect | For loop | While loop |
| --- | --- | --- |
| Iteration Control | Iterates over a sequence of elements | Repeats as long as condition is true |
| Use cases | Ideal for iterating over a collection. (List, Tuple, Dict, etc) | Suitable for scenarios where the loop should continue until condition is met |
| Initialisation and Condition | Initialisation and iteration are automatically handled by the loop | Requires explicit initialisation and condition checking |

<br>

### Advantages of for loop over while loop

- **Simplicity:** for loops are generally and more readable when iterating over a sequence.
- **Less error-prone:** Since the iteration is handled automatically, there is less chance of creating infinite loop or off-by-one error which are more common with while loops
- **Conciseness:** for loop often result in concise code, especially when working with sequence.

<br>

<h2 class="color-accent summary" data-summary="For loop process and sequence types" id="q3">3. Describe the process of iterating over a sequence using a <code>for</code> loop in Python. Discuss different sequence types that can be iterated over using a <code>for</code> loop.</h2>

**Ans:** In Python, a for loop is used to iterate over a sequence of elements. This sequence can be a list, tuple, dictionary, set or string. The for loop assigns each element in the sequence to a variable and executes a block of code for each element.

<br>

### Syntax

```py
for variable in sequence:
    # Code to execute for each item
```

<br>

### Different Sequence Types

1. **List:** A list is an ordered mutable collection of items that can be of any type

    ### Example

    ```py
    fruits = [ "apple", "banana", "cherry" ]
    for fruit in fruits:
        print(fruit)
    ```

    <br>

    ### Output

    ```bash
    apple
    banana
    cherry
    ```

2. **Tuple:** A tuple is similar to a list but it is immutable, meaning it's elements can't be changed after creation.

    ### Example

    ```py
    numbers = ( 1, 2, 3 )
    for num in numbers:
        print(num)
    ```

    <br>

    ### Output

    ```bash
    1
    2
    3
    ```

3. **Dictionary:** A dictionary is an unordered collection of key-value pairs. Both keys and values are iterable.

    ### Example

    ```py
    student_scores = {
        "Generic Name 1": 85,
        "Generic Name 2": 30,
        "Generic Name 3": 78
    }
    
    for key, value in student_scores.items():
        print(f"{key} got {value} points")
    ```

    <br>

    ### Output

    ```bash
    Generic Name 1 got 85 points
    Generic Name 2 got 30 points
    Generic Name 3 got 78 points
    ```

4. **Set:** A set is an unordered collection of unique items. Sets are mutable but it doesn't support indexing.

    ### Example

    ```py
    unique_numbers = { 1, 2, 3, 4 }
    for num in unique_numbers:
        print(num)
    ```

    <br>

    ### Output

    ```bash
    1
    2
    3
    4
    ```

5. **String:** A string is an iterable sequence of characters

    ### Example

    ```py
    message = "Hello"
    for char in message:
        print(char)
    ```

    <br>

    ### Output

    ```bash
    H
    e
    l
    l
    o
    ```

<br>

<h2 class="color-accent summary" data-summary="Range Function" id="q4">4. Explain the <code>range()</code> function in Python. How is it used to generate sequences of numbers, and how can it be combined with a <code>for</code> loop? Provide examples.</h2>

**Ans:** The `range()` function in Python is used to generate a sequence of numbers. It can take one, two or three arguments

- **`range(stop)`**: Generates a number from `0` upto, but not including `stop`

    ### Example

    ```py
    for index in range(5):
        print(index)
    ```

    <br>

    ### Output

    ```bash
    0
    1
    2
    3
    4
    ```

- **`range(start, stop)`**: Generates number from `start` upto but not including `stop`

    ### Example

    ```py
    for index in range(2, 5):
        print(index)
    ```

    <br>

    ### Output

    ```bash
    2
    3
    4
    ```

- **`range(start, stop, step)`**: Generates number from `start` upto but not including `stop` incrementing by `step`

    ### Example

    ```py
    for index in range(2, 10, 3):
        print(index)
    ```

    <br>

    ### Output

    ```bash
    2
    5
    8
    ```

<br>

<h2 class="color-accent summary" data-summary="Nested Loop" id="q5">5. Discuss the concept of nested loops in Python. Provide examples demonstrating how to use nested loops to iterate over multi-dimensional data structures.</h2>

**Ans:** A nested loop in Python is a loop inside another loop. The "inner loop" will be executed completely for each iteration of the "outer loop". Nested loops are particularly useful when working with multi-dimensional data structures i.e. list of lists.

<br>

### Example

```py

matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
]

for row in matrix:
    for elem in row:
        print(elem, end='\t')
    print() # New Line
```

<br>

### Output

```bash
1   2   3
4   5   6
7   8   9
```

<br>

<h2 class="color-accent summary" data-summary="List concept and characteristics" id="q6">6. Explain the concept of lists in python. How are lists defined and what are their key characteristics? Provide example to illustrate.</h2>

**Ans:** A list in Python is a collection of items that are ordered and mutable. Lists are one of the most versatile data types in python allowing you to store a sequence of items in a single variable. They are defined using square brackets \[ \] or by using list() class.

### Characteristics of list

- **Ordered**: Lists maintain the order of elements. When you add elements, they are stored in a specific order, and this order is preserved when you access them.
- **Mutable**: Lists are mutable, meaning you can change their content without changing their identity. You can add, remove, or modify elements in a list.
- **Heterogeneous**: Lists can contain elements of different types. For example, you can have a list that contains integers, strings, and even other lists.
- **Indexable**: You can access elements of a list using an index. Indices start at 0, meaning the first element is accessed with index 0, the second with index 1, and so on.
- **Dynamic**: The size of a list can change dynamically. You can add as many elements as you want without declaring the size of the list upfront.
- **Supports various operations**: Lists support a variety of operations such as slicing, concatenation, repetition, and list comprehensions.

<br>

### Example

- Creating a list:

    ```py
    mixed_list = [ "apple", 42, True, 3.14, 42, True ]
    mixed_list_class = list("apple")
    # [ 'a', 'p', 'p', 'l', 'e' ]
    ```

- Accessing `3.14` in mixed list:

    ```py
    print(mixed_list[3])
    ```

- Modifying a list:

    ```py
    mixed_list[4] = 420
    print(mixed_list)
    # [ 'apple', 42, True, 3.14, 420, True ]
    ```

<br>

<h2 class="color-accent summary" data-summary="List vs Tuple" id="q7">7. Discuss the difference between lists and tuples in python. When would you choose to use a list over a tuple and vice versa.</h3>

**Ans:**

### Tuple vs List

| Aspect | List | Tuple |
| --- | --- | --- |
| Mutability | Lists are mutable. | Tuples are immutable. |
| Syntax | Defined with \[ \] or list() | Defined with () or tuple() |
| Performance | Generally slower due to mutable and extra memory for dynamic resizing. | Generally faster due to immutability. |
| Methods | List has more built-in methods because of mutability. | Tuples has fewer built-in methods due to immutability. |

<br>

### When to use which one

#### We should use list when we have

- A collection of items that change a lot over time.
- Need to perform operations like appending, removing or sorting
- Need more built-in functions for manipulation

#### We should use tuple when we have

- We need a collection of constant items
- We want to ensure data integrity by preventing modification.
- We need more memory-efficient datasets.

<br>

<h2 class="color-accent summary" data-summary="List creation and populating" id="q8">8. Describe the process for creating and initialising a list in Python. Discuss different methods for populating a list with elements.</h2>

**Ans:** A list can be created by using square brackets `[]` or by using `list()` class.

<br>

### Example

```py
mixed_list = [ "list", 3, 4.29, True ]
str_list = list("apple")
```

<br>

### Populating a list

The different methods for populating a list with elements:

- **Append**: Adds its argument as a single element to the end of a list.
- **Extend**: Adds each element of its argument (which must be an iterable) to the list.

<br>

### Example

```py
num_list = [ 1, 2, 3 ]
num_list.append(True) # Append method
print(num_list) # [ 1, 2, 3, True ]
num_list.extend([ False, 3.14 ]) # Extend method
print(num_list) # [ 1, 2, 3, True, False, 3.14 ]
```

<h2 class="color-accent summary" data-summary="Indexing and Slicing" id="q9">9. Explain the concept of list indexing and slicing in Python. Provide examples to demonstrate how to access individual elements and sublist within a list.</h2>

**Ans:** List indexing allows you to access individual elements in a list using their position (index). Python uses zero-based indexing meaning first element is at index `0`, second is at `1` and so on. You can also use negative indexing meaning `-1` will be the last element, `-2` will be the second last element.

<br>

### Example

```py
lst = [ 25, 30, [ 90, 40 ], 60, True ]
print(lst[3]) # 60
print(lst[2][1]) # 90
print(lst[-4]) # 30
```

<br>

### List slicing

Slicing allows you to access a sublist by specifying a range of indices. The logic is same as range function's start, stop and step

### Example

```py
numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
print(numbers[2:6])   # [ 2, 3, 4, 5 ]
print(numbers[2::2])   # [ 2, 4, 6, 8 ]
print(numbers[:5])   # [ 0, 1, 2, 3, 4 ]
print(numbers[5:])   # [ 5, 6, 7, 8, 9 ]
```

<h2 class="color-accent summary" data-summary="List methods and examples" id="q10">10. Discuss the various methods available for modifying list in python including adding, removing and modifying elements. Provide examples for at least 5 different methods.</h2>

**Ans:**

### Append

Adds a single element to the end of the list

### Example

```py
my_list = [ 1, 2, 3 ]
my_list.append(4)
print(my_list) # [ 1, 2, 3, 4 ]
```

<br>

### Extend

Adds multiple elements (from an iterable) to the end of the list

### Example

```py
my_list = [ 1, 2, 3 ]
my_list.extend([ 4, 5, 6 ])
print(my_list) # [ 1, 2, 3, 4, 5, 6 ]
```

<br>

### Insert

Inserts an element at a specified index

### Example

```py
my_list = [ 1, 2, 4 ]
my_list.insert(2, 3)
print(my_list) # [ 1, 2, 3, 4 ]
```

<br>

### Remove

Removes the first occurrence of a specified element

### Example

```py
my_list = [ 1, 2, 3, 4, 3 ]
my_list.remove(3)
print(my_list) # [ 1, 2, 4, 3 ]
```

<br>

### Pop

Removes and returns the element at a specified index (default is the last element)

### Example

```py
my_list = [ 1, 2, 3, 4 ]
element = my_list.pop(2)
print(element) # 3
print(my_list) # [ 1, 2, 4 ]
```

<br>

### List comprehensions

Modifies all the elements in the list based on a specified expression or condition

### Example

```py

my_list = [ 1, 2, 3, 4 ]
new_list = [ x * 2 for x in my_list ]
print(new_list) # [ 2, 4, 6, 8 ]
```

<br>

### Clear

Removes all elements from the list, making it empty

### Example

```py
my_list = [ 1, 2, 3, 4 ]
my_list.clear()
print(my_list)  # [ ]
```

<br>

For official and accurate information, refer to [Python Documentation](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

<br>

<h2 class="color-accent summary" data-summary="Shallow Copy vs Deep Copy" id="q11">11. Explain the difference between shallow copy and deep copy of lists in python. When would you use each type of copy, how are they implemented?</h2>

**Ans:**

### Shallow Copy vs Deep Copy

| Aspect | Shallow Copy | Deep Copy |
| --- | --- | --- |
| Definition | Creates a new list with references to the original list's objects. | Creates a new list with entirely new copies of the original list's objects. |
| Use case | Use when you need a new list with the same elements and don't plan to modify nested objects. | Use when you need a completely independent copy of the list, including nested objects. |
| Methods | You can use copy() method or the list() constructor with original list as an argument to create shallow copies | You can use deepcopy() method from the copy module to make deep copies |

<br>

## Implementation

### Shallow Copy

```py
import copy

original_list = [ 1, [ 2, 3 ], 4 ]
shallow_copy = copy.copy(original_list)
# Or using slicing
shallow_copy = original_list[:]

shallow_copy[1][0] = 99 # This will also change the original List
print(original_list) # [ 1, [ 99, 3 ], 4 ]
```

<br>

### Deep Copy

```py
import copy
original_list = [ 1, [ 2, 3 ], 4 ]
deep_copy = copy.deepcopy(original_list)

deep_copy[1][0] = 99 # This will not affect the original_list
print(original_list) # [ 1, [ 2, 3 ], 4 ]
```
  
<br>

### When to use which one

| Shallow Copy | Deep Copy |
| --- | --- |
| When the list elements are simple (e.g., integers, strings) and don't contain other mutable objects. | When the list contains nested lists or other mutable objects. |
| When you are okay with changes to nested objects in the copied list reflecting in the original list. | When you want complete independence from the original list and need to ensure that modifications to the copied list don't affect the original. |
| Example: Creating a new list for temporary modifications or iteration without altering the original list's simple elements. | Example: Duplicating a complex data structure where changes to one should not affect the other. |

<br>

<h2 class="color-accent summary" data-summary="List Comprehension" id="q12">12. Describe list comprehension in Python. Provide example.</h2>

**Ans:** List comprehension is an effective and concise way to create list. It generates new list by applying expression to existing iterable.

### Syntax

```pseudo
variable = [ expression for item in iterable if condition ]
```

<br>

### Example

```py
numbers = [ 1, 2, 3, 4, 5 ]
even_squared_list = [ num ** 2 for num in numbers if num % 2 == 0 ]
print(even_squared_list) # [ 4, 16 ]
```

<br>

<h2 class="color-accent summary" data-summary="Nested List" id="q13">13. Explain the concept of nested list in Python. Provide example.</h2>

**Ans:** Nested list are a list inside another list. They are useful when working with multi-dimensional data structure.

<br>

### Example

```py
matrix = [
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ]
]

print(matrix[1][2])
```

### Output

```bash
7
```

<br>

<h2 class="color-accent summary" data-summary="Sorting vs Reversing a list" id="q14">14. Discuss the difference between sorting and reversing list in Python. Provide example.</h2>

**Ans:**

### Sorting vs Reversing a List

| Aspect | Sorting a List | Reversing a List |
| --- | --- | --- |
| Definition | Arranges elements in ascending or descending order. | Reverses the order of elements in the list. |
| Function | sort() or sorted() | reverse() or reversed() |
| Effect | Alters the sequence of elements to follow a specified order. | Alters the sequence of elements to be in the reverse order from the original list. |
| In-place / Out-of-Place | sort() modifies the original list;  <br>sorted() creates a new sorted list. | reverse() modifies the original list;  <br>reversed() provides an iterator for the reversed sequence without modifying the original list. |
| Use Case | Use when elements need to be ordered (e.g., numerically or alphabetically). | Use when you need elements in the opposite order from the current sequence. |

<br>  

## Example

### Sorting

```py
my_list = [3, 1, 4, 2]
my_list.sort()  # In-place sorting
print(my_list)  # [1, 2, 3, 4]

# Using sorted() to create a new sorted list
original_list = [3, 1, 4, 2]
sorted_list = sorted(original_list)
print(original_list)  # [3, 1, 4, 2]
print(sorted_list)  # [1, 2, 3, 4]
```

<br>

### Reversing

```py

my_list = [1, 2, 3, 4]
my_list.reverse()  # In-place reversing
print(my_list)  # [4, 3, 2, 1]

# Using reversed() to create an iterator for the reversed sequence
original_list = [1, 2, 3, 4]
reversed_list = list(reversed(original_list))
print(original_list)  # [1, 2, 3, 4]
print(reversed_list)  # [4, 3, 2, 1]
```

<br>
