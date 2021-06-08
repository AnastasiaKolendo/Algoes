var getIntersectionNode = function(headA, headB) {
    //     let pA = headA;
    //     let pB = headB;
        
    //     while (pA != pB){
    //         pA = pA == null? headB : pA.next;
    //         pB = pB == null ? headA : pB.next;
    //     }
        
    //     return pA;
        
        let size1 = 0;
        let size2 = 0;
        
        let curr1 = headA;
        let curr2 = headB;
        
        size1++;
        size2++;
        
        while(curr1.next){
            curr1 = curr1.next;
            size1++;
        }
        
        while(curr2.next){
            curr2 = curr2.next;
            size2++;
        }
        
        if(size1 >= size2){
            let diff = size1 - size2;
            console.log('here')
            let curr1 = headA;
            let i = 0;
            
            while(i < diff){
                curr1 = curr1.next;
                i++
            }
            
            curr2 = headB;
            
            while(curr1 && curr2){
                if(curr1 == curr2){
                    return curr1;
                }
                curr2 = curr2.next
                curr1 = curr1.next
            }
            
        }
    
        if(size1 <= size2){
            let diff = size2 - size1;
            let curr2 = headB;
            
            let i = 0;
            
            while(i < diff){
                curr2 = curr2.next;
                i++
            }
            
            curr1 = headA;
            
            while(curr2 && curr1){
                if(curr1 == curr2){
                    return curr1;
                }
                curr2 = curr2.next
                curr1 = curr1.next
            }
            
        }
        return null
        
    };