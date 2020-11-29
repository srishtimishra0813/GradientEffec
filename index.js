        var x,y;
        document.write("this should count from 1 to 1000, and instead of printing the multiples of 3 or 5 or 3 and 5 it should print words\n");
        for (x=1; x<=100; x++)
        {
                if (x%3==0)
                {
                    document.write("fizz\n");
                }
                if (x%5==0)
                {
                    document.write("buzz\n");
                }
                if (x%3==0 && x%5==0)
                {
                    document.write("FizzBuzz\n");
                }
                document.write("%d\n",x);
            
        }
return 0;
    
