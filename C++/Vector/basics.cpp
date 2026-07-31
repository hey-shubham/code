// STL- Standard Template Library
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    vector<int> v; // Create a vector of integers

    // Adding elements to the vector
    v.push_back(10);
    v.push_back(20);
    v.push_back(30);

    // Accessing elements using index
    cout << "First element: " << v[0] << endl; // Output: 10
    cout << "Second element: " << v[1] << endl; // Output: 20
    cout << "Third element: " << v[2] << endl; // Output: 30

    // Initializing a vector with a specific size and default value
    vector<int> v2(5, 100); // Vector of size 5, all elements initialized to 100
    // printing the elements of v2
    cout << "Elements in v2: ";
    for (const auto& elem : v2) {
        cout << elem << " ";
    }
    cout << endl;


    // Initializing a vector using array
    vector<int> arr = {1, 2, 3, 4, 5};

    // printing the elements of the vector using a traditional for loop
    cout << "Elements in the vector: ";
    for (size_t i = 0; i < v.size(); ++i) {
        cout << v[i] << " ";
    }
    cout << endl;

    // printing the elements of the vector using a range-based for loop
    cout << "Elements in the vector: ";
    for (const auto& elem : v) {
        cout << elem << " ";
    }
    cout << endl;

    // begin() and end() methods to get iterators to the beginning and end of the vector
    cout << "Elements in the vector using iterators: ";
    for (auto it = v.begin(); it != v.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;

    // Sort the vector in ascending order
    sort(v.begin(), v.end());

    // printing the sorted elements of the vector
    cout << "Sorted elements in the vector: ";
    for (const auto& elem : v) {
        cout << elem << " ";
    }
    cout << endl;

    // sort the vector in descending order
    sort(v.begin(), v.end(), greater<int>());
    cout << "Elements in the vector (descending): ";
    for (const auto& elem : v) {
        cout << elem << " ";
    }
    cout << endl;
    

    // at() method to access elements with bounds checking
    cout << "Element at index 1 using at(): " << v.at(1) << endl; // Output: 20
    
    // front() and back() methods to access the first and last elements
    cout << "First element using front(): " << v.front() << endl; // Output: 10
    cout << "Last element using back(): " << v.back() << endl; // Output: 30
    

    // printing the size of the vector
    cout << "Size of the vector: " << v.size() << endl; // Output: 3

    // printing the capacity of the vector
    cout << "Capacity of the vector: " << v.capacity() << endl; // Output: 4 (or more, depending on implementation)

    // Removing the last element from the vector
    v.pop_back();

    // printing the size of the vector after removing an element
    cout << "Size of the vector after pop_back(): " << v.size() << endl; // Output: 2



    return 0;
}