let a="Hello World"
let b=[]
let upeer='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lower='abcdefghijklmnopqrstuvwxyz'

for(let i=0;i<=a.length;i++)
{
    if(upeer.indexOf(a[i])!==-1)

    {
        b.push(a[i].toLowerCase())
    }
    else if(lower.indexOf(a[i])!==-1)
    {
        b.push(a[i].toUpperCase())

    }
    else
    {
        b.push(a[i])
    }
}
console.log(b.join(''))