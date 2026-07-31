## Notes on C++

- C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.

## Key Features of C++:

- Object-Oriented Programming (OOP): C++ supports classes and objects, enabling encapsulation, inheritance, and polymorphism.

- Standard Template Library (STL): C++ provides a rich set of template classes and functions for data structures and algorithms.

- Memory Management: C++ allows for dynamic memory allocation and deallocation using operators like `new` and `delete`.

## Syntax Overview:

- Variables: C++ supports various data types such as int, float, double, char, and bool.

- Control Structures: C++ includes control structures like if-else statements, loops (for, while, do-while), and switch-case statements.

- Functions: C++ allows the definition of functions with return types, parameters, and function overloading.

## Boilerplate Code Example:

```cpp
#include <iostream>
using namespace std;

int main() {
    // Your code here
    return 0;
}
```

## All in One C++ libraries:

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    // Your code here
    return 0;
}
```


## Common C++ Libraries:

- `<iostream>`: For input and output operations.
- `<vector>`: For using the vector container.
- `<algorithm>`: For using standard algorithms like sort, search, etc.
- `<string>`: For string manipulation and operations.

## Arrays and Vectors:

- Arrays: Fixed-size collections of elements of the same type. Example: `int arr[5];`
- Vectors: Dynamic arrays that can grow or shrink in size. Example: `vector<int> vec;`

Array code example:

```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    for(int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

Vector code example:

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> vec = {1, 2, 3, 4, 5};
    for(int i = 0; i < vec.size(); i++) {
        cout << vec[i] << " ";
    }
    return 0;
}
```

## STL (Standard Template Library):

- The STL provides a collection of template classes and functions for common data structures (like vectors, lists, queues, stacks) and algorithms (like sorting, searching).

Usage example of STL vector:

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<int> vec = {5, 3, 8, 1, 2};
    
    // Sorting the vector
    sort(vec.begin(), vec.end());
    
    // Displaying the sorted vector
    for(int i = 0; i < vec.size(); i++) {
        cout << vec[i] << " ";
    }
    return 0;
}
```
