function add(...k){
        let m=0;
        for(let i=0;i<k.length;i++){
                m+=k[i];
        }console.log(m);
        sub();

        function sub(...k){
                let n=0;
                for(let i=0;i<k.length;i++){
                        n-=k[i];
                }console.log(n);
                mul();

                function mul(...k){
                        let o=1;
                        for(let i=1;i<=k.length;i++){
                                o=o*k[i];
                        }console.log(o);
                        div();

                        function div(...k){
                                let d=0;
                                for(let i=0;i<k.length;i++){
                                        d=d/k[i];
                                }console.log(n);
                        }
                }
        }
}
add(1,2,3,4,5,6,7,8);