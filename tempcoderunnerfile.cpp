#include<iostream>
using namespace std ;
int main()
{
    int t ;
    cin>>t ;
    int x,y ;
    while(t--)
    {
        cin>>x>>y ;
        if(y>=x )
        cout<<0<<endl ;
        else
        cout<<(x-y)<<endl;
    }

}