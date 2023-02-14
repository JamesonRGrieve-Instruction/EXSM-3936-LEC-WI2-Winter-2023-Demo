async function main() {
   recursiveExample();

   let myVar = 1;
   while (myVar <= 10)
   {
        output(myVar);
   }
}
function recursiveExample(current = 1)
{
    output(current);
    if (current < 10)
    {
        recursiveExample(current+1);
    }
}

/*
main()
|
-> recursiveExample()
    |
    -> recursiveExample(2)
        |
        -> recursiveExample(3)
            |
            -> recursiveExample(4)
                |
                -> recursiveExample(5)
                    |
                    -> recursiveExample(6)
                        |
                        -> recursiveExample(7)
                            |
                            -> recursiveExample(8)
                                |
                                -> recursiveExample(9)
                                    |
                                    -> recursiveExample(10)
                                        |
                                    <-
                                <-
                            <-
                        <-
                    <-
                <-
            <-
        <-
    <-
<-
*/


/*
List all the files in this folder.
Output all the files to the console.
List all the folders in this folder.
For each folder in this folder, run this method recursively.

foreach file in thisFolder.getAllFiles()
{
    output file
}
foreach folder in thisFolder.getAllFolders()
{
    foreach file in thisFolder.getAllFiles()
    {
        output file
    }
    foreach folder in thisFolder.getAllFolders()    
    {
        foreach file in thisFolder.getAllFiles()
        {
            output file
        }
    }
}

/Folder/Another/Folder/More/EvenMore/test.txt
^ This would require 5 levels of nested loops to detect. And if don't know how many levels, how many nested loops do we add to out code "just in case"?

If we implement it recursively, we don't have any nested loops because it will add method calls to the stack until it hits the end. So we only have to repeat ourselves once to get a dynamic level of recursion / depth.
*/
