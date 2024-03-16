Arrays in Fig allow you to store and manipulate collections of elements. This document outlines the basic operations and usage of arrays in Fig.

## Creating Arrays

Arrays in Fig can be created using square brackets `[]`, enclosing a comma-separated list of elements:

```rust
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
```

## Accessing Elements

You can access elements of an array using square brackets [] with the index of the element you want to access. Array indices are zero-based:

```rust
let numbers = [1, 2, 3, 4, 5];
let firstNumber = numbers[0]; // Accesses the first element (1)
let secondNumber = numbers[1]; // Accesses the second element (2)
```
## Modifying Elements

You can modify elements of an array by assigning a new value to a specific index:

```rust

let numbers = [1, 2, 3, 4, 5];
numbers[0] = 10; // Modifies the first element to 10
```

## Array Length

The length of an array can be obtained using the len function from the standard library:

```rust
import std;

export fn main() {
    let numbers = [1, 2, 3, 4, 5];
    let length = len(numbers); // Returns the length of the array (5)
}
```
