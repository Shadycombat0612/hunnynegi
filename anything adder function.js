function one()
{
    return "1";
}

function two()
{
    return "2";
}

function add()
{
    var sum=0;
    for (var i=0 ; i<arguments.length ; i++)
    {
        if (isNaN(arguments[i][0]))
        {
            sum = sum + (isNaN(parseInt(arguments[i])) ? 0 : parseInt(arguments[i]));
        }
        else
        {
            for (var j=0 ; j<arguments[i].length ; j++)
            {
                sum = sum + (isNaN(parseInt(arguments[i][j])) ? 0 : parseInt(arguments[i][j]));
            }
        }
    }
    return sum;
}
console.log(add(2, "1",3, [5,6,6,5,"a"]))