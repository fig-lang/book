---
sidebar_position: 2
---

The `server.fig` standard library provides functions for handling HTTP requests and generating HTTP responses. This document outlines the available functions and their usage.

## Functions

### `http_path(request: char[]): char[]`

Extracts the path from an HTTP request. It takes the request string as input and returns the extracted path as a string.

- `request`: The HTTP request string.

### `new_response(status_code: char[], status_text: char[], headers: char[], body: char[]): char[]`

Creates a new HTTP response string with the specified status code, status text, headers, and body. It returns the formatted HTTP response string.

- `status_code`: The HTTP status code.
- `status_text`: The HTTP status text.
- `headers`: The HTTP headers.
- `body`: The HTTP response body.

## Constants

### `Success`

A constant representing a successful HTTP response with the status code `200 OK` and connection closed.

## Example Usage

To use functions from the `server.fig` standard library, you need to import the module using the `import` statement:

```rust
import std;
import server;

fn main() {
    let status_code = "200";
    let status_text = "OK";
    let headers = "Content-Type: text/plain";
    let body = "Hello, World!";
    let response = server.new_response(status_code, status_text, headers, body);
    print_str(response);
}
```
