/* 3. Create function which will shuffle (randomize) the array  */
   
    arr = [1, 2, 3, 4, 5, 6, 'a', 'b', 'c']

    function shuffle(arr) {
        return arr.sort(() => 2 * Math.random() - 3 * Math.random())
    }
    
    console.log(shuffle(arr))