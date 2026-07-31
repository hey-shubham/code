#include<bits/stdc++.h>
using namespace std;

int searchElement(int arr[], int n, int target)
{
    int start = 0;
    int end = n - 1;

    while(start <= end)
    {
        int mid = start + (end - start) / 2;

        // Element Found
        if(arr[mid] == target)
        {
            return mid;
        }

        // Left Side Sorted
        else if(arr[mid] >= arr[start])
        {
            if(arr[start] <= target && target <= arr[mid])
            {
                end = mid - 1;
            }
            else
            {
                start = mid + 1;
            }
        }

        // Right Side Sorted
        else
        {
            if(arr[mid] <= target && target <= arr[end])
            {
                start = mid + 1;
            }
            else
            {
                end = mid - 1;
            }
        }
    }

    return -1;
}

int main()
{
    int arr[] = {7,8,9,10,1,2,3,4,5,6};

    int n = sizeof(arr) / sizeof(arr[0]);

    int target;

    cout << "Enter Target : ";
    cin >> target;

    int ans = searchElement(arr, n, target);

    if(ans == -1)
    {
        cout << "Element Not Found";
    }
    else
    {
        cout << "Element Found at Index : " << ans;
    }

    return 0;
}


