#include <bits/stdc++.h>

using namespace std;

/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

string isValid(string s) {
    unordered_map<char, int>m;int count=0;
    if(s.length()==1) return "YES";
    for(auto i:s)
    m[i]++;
    auto it=m.begin();
    int x=it->second;it++;
    while(it!=m.end())
    {
        int y=it->second;it++;
        if(abs(x-y)>1||count>1) return "NO";
        if(x!=y) count++;
        x=y;
    }
    return "YES";
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string s;
    getline(cin, s);

    string result = isValid(s);

    fout << result << "\n";

    fout.close();

    return 0;
}
