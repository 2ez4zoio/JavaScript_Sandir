function funçãoRecursiva (num){
    if (num <= 0){
        return;
    }
    console.log(num);
    funçãoRecursiva(num - 1);
}

funçãoRecursiva(5);