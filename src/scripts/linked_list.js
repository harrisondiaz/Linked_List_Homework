var head; // head of list

/* Linked list Node */
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

/**
 *  Inserts a new Node at front of the list.
 */
function push(new_data) {
    /*
    * 1 & 2: Allocate the Node & Put in the data
    */
    var new_node = new Node(new_data);

    /* 3. Make next of new Node as head */
    new_node.next = head;

    /* 4. Move the head to point to new Node */
    head = new_node;
}

function insertAfter(prev_node , new_data) {
    if (prev_node == null) {
        document.write(
            "The given previous node cannot be null"
        );
        return;
    }

    var new_node = new Node(new_data);

    new_node.next = prev_node.next;


    prev_node.next = new_node;
}

/*
* Appends a new node at the end.
This method is defined inside LinkedList class
* shown above
*/
function append(new_data) {

    var new_node = new Node(new_data);


    if (head == null) {
        head = new Node(new_data);
        return;
    }


    new_node.next = null;

    var last = head;
    while (last.next != null)
        last = last.next;


    last.next = new_node;
    return;
}

/*
* Given a key, deletes the first occurrence of key in linked list
*/
function deleteNode(key) {
    // Store head node
    var temp = head, prev = null;

    // If head node itself holds the key to be deleted
    if (temp != null && temp.data == key) {
        head = temp.next; // Changed head
        return;
    }

    // Search for the key to be deleted, keep track of
    // the previous node as we need to change temp.next
    while (temp != null && temp.data != key) {
        prev = temp;
        temp = temp.next;
    }

    // If key was not present in linked list
    if (temp == null)
        return;

    // Unlink the node from linked list
    prev.next = temp.next;
}
function removeElement(element){
    var current = this.head;
    var prev = null;

    // iterate over the list
    while (current != null) {
        // comparing element with current
        // element if found then remove the
        // and return true
        if (current.element === element) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
        }
        prev = current;
        current = current.next;
    }

}
push("Daniel")
push("Andres")
push("Santiago")
push("Jhoi")
push("Luky")
/*
* This function prints contents of linked list
starting from the given node
*/
function printList() {
    var tnode = head;
    var phrase = "";
    while (tnode != null) {
        phrase += (`<br><button onclick="deleting(${tnode.data.value})">${tnode.data}</button><br>`);
        tnode = tnode.next;
    }

    document.getElementById("list").innerHTML = phrase;
    console.log(head)
}
function indexOf(element){
    var count = 0;
    var current = this.head;

    // iterate over the list
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.element == element){
            console.log(count)
            return count;
        }else {
            count++;
            current = current.next;
        }
    }

    // not found
    return -1;
}

function removeFrom(index){
    if (index < 0 || index >= this.size)
        return console.log("Please Enter a valid index");
    else {
        var curr, prev, it = 0;
        curr = this.head;
        prev = curr;

        // deleting first element
        if (index === 0) {
            this.head = curr.next;
        } else {
            // iterate over the list to the
            // position to removce an element
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // remove the element
            prev.next = curr.next;
        }
        this.size--;

        // return the remove element
        return curr.element;
    }
}
/**function deleting(idName) {
    console.log("hi")
    removeElement(idName);
    document.getElementById("list").innerText = "";
    printList();

}*/
function deleting(idName) {
    console.log("hi")
    removeFrom(indexOf(idName));
    document.getElementById("list").innerText = "";
    printList();

}
function pushing(){
    push(document.getElementById("texting").value);
    document.getElementById("texting").innerText="";
    document.getElementById("list").innerText = "";

}
//Problemas al eleminar un elemento de la lista al darle click
window.onload = () => printList();