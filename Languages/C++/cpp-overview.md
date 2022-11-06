---
sidebar_position: 2
---
# C++ overview & Basic syntax

:::tip
C++ is a **statically typed**, **compiled, general-purpose**, case-sensitive, free-form programming language that supports procedural, object-oriented, and generic programming.
:::

## Object-Oriented Programming
C++ fully supports object-oriented programming, including the four pillars of object-oriented development −

* Encapsulation
* Data hiding
* Inheritance
* Polymorphism

:::tip  most common question
    explain object orinted programming , and its four pillar?  
:::

## Use of C++
1. C++ is used by hundreds of thousands of programmers in essentially every **application domain**.
2. C++ is being highly used to write device drivers and other software that rely on **direct manipulation** of hardware under realtime constraints.
3. C++ is widely used for **teaching and research** because it is clean enough for successful teaching of basic concepts.
4. Anyone who has used either an **Apple Macintosh** or a PC running **Windows** has indirectly used C++ because the primary user interfaces of these systems are written in C++.

## Environment Setup 

recommended code editor: **vs code**

## C++ Program Structure

```cpp
#include <iostream>
using namespace std;

// main() is where program execution begins.
int main() {
   cout << "Hello World"; // prints Hello World
   return 0;
}
```

Let us look at the various parts of the above program −

* The C++ language defines several headers, which contain information that is either necessary or useful to your program. For this program, the header `<iostream>` is needed.
* The line `using namespace std;` tells the compiler to use the std namespace. Namespaces are a relatively recent addition to C++.
* The next line `'// main() is where program execution begins.'` is a single-line comment available in C++. Single-line comments begin with // and stop at the end of the line.
* The line `int main()` is the main function where program execution begins.
* The next line `cout << "Hello World";` causes the message "Hello World" to be displayed on the screen.

* The next line `return 0;` terminates main( )function and causes it to return the value 0 to the calling process.

## Compile and Execute C++ Program

Let's look at how to save the file, compile and run the program. Please follow the steps given below −

1. Open a text editor and add the code as above.

2. Save the file as: `hello.cpp`

3. Open a command prompt and go to the directory where you saved the file.

4. Type `'g++ hello.cpp'` and press enter to compile your code. If there are no errors in your code the command prompt will take you to the next line and would generate a.out executable file.

5. Now, type `'a.out'` to run your program.

6. You will be able to see `' Hello World '` printed on the window.

```bash
$ g++ hello.cpp
$ ./a.out
Hello World
```

---