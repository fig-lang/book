You can write server-side applications with FigLang, FigCli has a command called `server` That will listen to the address and port you specified,
each time a request arrives the CLI will run the script and pass the HTTP request content to the main function.

### Server command
Here is an example usage of the `server` command:

`fig server ./test.fig --addr localhost:8080`

### Example server-side code
Here is an example source code of using the server feature in FigCli, It's just like an ordinary Fig program but the main function will get one parameter, Which will contain the content of the HTTP request as `char[]` or a string.

`test.fig`:

```rust
import server;

export fn main (req: char[]): char[] {
    let headers = "Content-Type: text/html
Connection: Closed";

    let res = new_response("200", "OK", headers, "<h1>Hello World</h1>");

    return res;
}
```

The `main` function must return the HTTP response as a `char[]` or string. The return will be your app's response to the request.

