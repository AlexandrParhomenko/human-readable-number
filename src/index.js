module.exports = function toReadable(num) {
        len = num.toString().length;
        const one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const two = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const three = [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        switch (len) {
            case (1):
            {
                return one[num];
            }

            case (2): {
                if (num % 10 === 0) {
                    return three[Math.floor(num/10)];
                } else if (num>9 && num <20){
                    return two[num % 10];
                } else return three[Math.floor(num/10)] +' '+ one[num%10];
            }
            case (3): {
                if (num % 100 === 0) {
                    return one[num/100]+' hundred';
                } else if (((num %100)%10)===0){
                    return one[Math.floor(num/100)]+' hundred '+three[Math.floor((num%100)/10)];
                } else if (num%100>9 && num%100 <20) {
                    return one[Math.floor(num/100)]+' hundred '+two[((num%100)%10)];
                } else if (Math.floor((num % 100)/10)===0) {
                    return one[Math.floor(num/100)]+' hundred '+one[((num % 100)%10)];
                } else return one[Math.floor(num/100)]+' hundred '+three[Math.floor((num%100)/10)]+' '+one[((num % 100)%10)];
            }
        }

}
