let arr=[1,5,3,5,1,5,1,1]
let f=0
let c=0
let item;
for(let i=0;i<arr.length;i++)
{
    for(let j=i;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        c++
        if(f<c)
        {
            f=c
            item=arr[i]
        }
    }
    c=0
}
console.log(item)