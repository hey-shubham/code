#include<bits/stdc++.h>
using namespace std;

int main(){

    int arr1[] = {1,2,3,4,5,6,7,8,9,10};
    int arr2[] = {1,2,3,4,5,6,7,9,10};

    int n = sizeof(arr1)/sizeof(arr1[0]);
    int sum1 = n*(n+1)/2;

    int sum2 = 0;
    
    for(int i=0;i<n-1;i++){
        sum2+=arr2[i];
    }

    cout<<sum1-sum2;
    return 0 ;

}