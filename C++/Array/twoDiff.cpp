#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    vector<int> arr = {5,3,2,10,50,80};
    sort(arr.begin(),arr.end());
    int target = 45;

    int start = 0;
    int end = 1;
    

    while ( end < arr.size() )
    {
        if (arr[end] - arr[start] == target)
        {
            cout << "Pair Found: ";
            cout << arr[start] << " " << arr[end] << endl;
            return 0;
        }
        else if (arr[end] - arr[start] < target)
        {
            end++;
        }
        else
        {
            start++;
        }
    }

    return 0;
}