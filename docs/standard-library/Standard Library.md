The Fig standard library provides essential functions for performing common tasks, such as string manipulation, memory management, and I/O operations. This document outlines the available functions and their usage.

## I/O Functions

### `print_str(s: char[])`

Prints a string to the standard output.

### `print_char(c: char)`

Prints a single character to the standard output.

### `print_int(i: i32)`

Prints an integer to the standard output.

### `print_float(f: f32)`

Prints a floating-point number to the standard output.

### `read_file(path: char[]): char[]`

Reads the contents of a file and returns it as a string.

## Memory Management

### `malloc(size: i32): i32[]`

Allocates a block of memory of the specified size and returns a pointer to the allocated memory.

## String Manipulation

### `len(str_ptr: char[]): i32`

Returns the length of a null-terminated string.

### `copy_str(str: char[]): char[]`

Creates a copy of a null-terminated string.

### `cmp_string(lhs: char[], rhs: char[]): bool`

Compares two null-terminated strings and returns true if they are equal, false otherwise.

### `add_string(lhs: char[], rhs: char[]): char[]`

Concatenates two null-terminated strings and returns the resulting string.

## Example Usage
```rust
import std;

fn main() {
    let l = len("Hello, World!");
    print_int(l);
}
```
