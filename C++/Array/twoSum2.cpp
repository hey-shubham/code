#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    vector<int> arr = {1, 2, 4, 6, 18, 25};
    int target = 10;

    int start = 0;
    int end = arr.size() - 1;

    while (start < end)
    {
        if (arr[start] + arr[end] == target)
        {
            cout << "Pair Found: ";
            cout << arr[start] << " " << arr[end] << endl;
            return 0;
        }
        else if (arr[start] + arr[end] < target)
        {
            start++;
        }
        else
        {
            end--;
        }
    }

    return 0;
}