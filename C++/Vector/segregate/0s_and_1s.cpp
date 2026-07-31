#include<bits/stdc++.h>

using namespace std;

int main(){

    vector<int>n;
    n.push_back(1);
    n.push_back(0);
    n.push_back(1);
    n.push_back(0);
    n.push_back(1);
    n.push_back(0);

    
    sort(n.begin(),n.end());
    
    for(int i=0; i<n.size();i++){
        cout<< n[i] <<" ";
    }
}