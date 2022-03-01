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
/*
* This function prints contents of linked list
starting from the given node
*/
function printList() {
    var tnode = head;
    while (tnode != null) {
        document.write(`<br><button onclick="deleteNode(tnode.data)">${tnode.data}</button><br>`);
        tnode = tnode.next;
    }

    document.write(`<h5>Añadir:</h5><input id="texting">
     <button type="button" onclick="pushing()">Enviar</button>
     <button type="button"  onclick="document.reset(),printList()">Ver lista</button>
     <button onclick="document.reset(),printList()">Cargar</button>`);
    console.log(head)
}



function pushing(){
    push(document.getElementById("texting").value);
    document.getElementById("texting").onreset;
}
//Problemas al eleminar un elemento de la lista al darle click
/**push("harrison")
push("harrison2")
push("harrison3")
const aux = head;
console.log(aux)
deleteNode("harrison2")
console.log(head)*/
