"use strict";

// Search slideshow
(function ($) {
  var jsav = new JSAV("searchCON");
  var pseudo = jsav.code({url: "../../../SourceCode/Processing/Binary/BST.pde",
                       lineNumbers: false,
                       startAfter: "/* *** ODSATag: findhelp *** */",
                       endBefore: "/* *** ODSAendTag: findhelp *** */"});

  var bt = jsav.ds.bintree({top: 10, left: 10, visible: true, nodegap: 15});
  bt.root(37);
  var rt = bt.root();
  rt.left(24);
  rt.left().left(7);
  rt.left().left().left(2);
  rt.left().right(32);
  rt.right(42);
  rt.right().left(42);
  rt.right().left().left(40);
  rt.right().right(120);
  bt.layout();

  var rt1 = jsav.pointer("rt", bt.root(), {anchor: "right top", top: 0});

  jsav.umsg("Consider searching for the record with key value 32 in this tree. We call the findhelp method with a pointer to the BST root (the node with key value 37).");
  pseudo.highlight(0);
  jsav.displayInit();

  jsav.umsg("Check what rt is pointing to. It is not null.");
  pseudo.unhighlight(0);
  pseudo.highlight(1);
  jsav.step();

  jsav.umsg("Check the value at the root. We find that it is greater than what we are looking for.");
  pseudo.unhighlight(1);
  pseudo.highlight(2);
  jsav.step();

  jsav.umsg("So we want to visit the left child.");
  pseudo.unhighlight(2);
  pseudo.highlight(3);
  jsav.step();

  jsav.umsg("We make a recursive call with the left child as the new rt.");
  pseudo.unhighlight(3);
  pseudo.highlight(0);
  rt1.target(bt.root().left(), {anchor: "left top"});
  jsav.step();

  jsav.umsg("Check what rt is pointing to. It is not null.");
  pseudo.unhighlight(0);
  pseudo.highlight(1);
  jsav.step();

  jsav.umsg("Check the value at the root. We find that it is less than what we are looking for.");
  pseudo.unhighlight(1);
  pseudo.highlight(6);
  jsav.step();

  jsav.umsg("So we want to visit the right child.");
  jsav.step();

  jsav.umsg("We make a recursive call with the right child as the new rt.");
  pseudo.unhighlight(6);
  pseudo.highlight(0);
  rt1.target(bt.root().left().right(), {anchor: "right top"});
  jsav.step();

  jsav.umsg("Check what rt is pointing to. It is not null.");
  pseudo.unhighlight(0);
  pseudo.highlight(1);
  jsav.step();

  jsav.umsg("Check the value at the root. This is the record that we are looking for.");
  pseudo.unhighlight(1);
  pseudo.highlight(4);
  jsav.step();

  jsav.umsg("Now we will start unwinding the recursion, passing the record with key value 32 back up to the caller.");
  pseudo.unhighlight(4);
  pseudo.highlight(5);
  jsav.step();

  jsav.umsg("Pop the recursion, now rt is back to the node with value 24.");
  rt1.target(bt.root().left(), {anchor: "left top"});
  pseudo.unhighlight(6);
  pseudo.highlight(5);
  jsav.step();

  jsav.umsg("Pop the recursion, now rt is back to the node with value 37.");
  rt1.target(bt.root(), {anchor: "right top"});
  pseudo.unhighlight(5);
  pseudo.highlight(3);
  jsav.step();

  jsav.umsg("Pop the recursion one final time to return the record back to the original caller of findhelp.");
  pseudo.unhighlight(3);
  pseudo.highlight(7);
  jsav.step();

  jsav.recorded();

}(jQuery));

// Insert slideshow
(function ($) {
  var jsav = new JSAV("insertCON");
  var pseudo = jsav.code({url: "../../../SourceCode/Processing/Binary/BST.pde",
                       lineNumbers: false,
                       startAfter: "/* *** ODSATag: inserthelp *** */",
                       endBefore: "/* *** ODSAendTag: inserthelp *** */"});

  var bt = jsav.ds.bintree({visible: true, nodegap: 15});
  bt.root(37);
  var rt = bt.root();
  rt.left(24);
  rt.left().left(7);
  rt.left().left().left(2);
  rt.left().right(32);
  rt.right(42);
  rt.right().left(42);
  rt.right().left().left(40);
  rt.right().right(120);
  var newnode = rt.left().right().left(30, {visible: "false"});
  newnode.css("color", "red");
  newnode.css("border-color", "red");
  var parent = newnode.parent();
  var newedge = parent.edgeToLeft();
  newedge.hide();
  newedge.css("stroke", "red");
  newedge.css("stroke-width", 3);
  bt.layout();

  var rt1 = jsav.pointer("rt", bt.root(), {anchor: "right top", top: 0});

  jsav.umsg("Consider inserting a record with key value 30 in this tree. We call the findhelp method with a pointer to the BST root (the node with value 37).");
  pseudo.highlight(0);
  jsav.displayInit();

  jsav.umsg("Check what rt is pointing to. It is not null.");
  pseudo.unhighlight(0);
  pseudo.highlight(1);
  jsav.step();

  jsav.umsg("Check the value at the root. We find that it is greater than what we are looking for.");
  pseudo.unhighlight(1);
  pseudo.highlight(2);
  jsav.step();

  jsav.umsg("So we want to visit the left child.");
  pseudo.unhighlight(2);
  pseudo.highlight(3);
  jsav.step();

  jsav.umsg("We make a recursive call with the left child as the new rt.");
  pseudo.unhighlight(3);
  pseudo.highlight(0);
  rt1.target(bt.root().left(), {anchor: "left top"});
  jsav.step();

  jsav.umsg("Check what rt is pointing to. It is not null.");
  pseudo.unhighlight(0);
  pseudo.highlight(1);
  jsav.step();

  jsav.umsg("Check the value at the root. We find that it is less than what we are looking for.");
  pseudo.unhighlight(1);
  pseudo.highlight(4);
  jsav.step();

  jsav.umsg("So we want to visit the right child.");
  jsav.step();

  jsav.umsg("We make a recursive call with the right child as the new rt.");
  pseudo.unhighlight(4);
  pseudo.highlight(0);
  rt1.target(bt.root().left().right(), {anchor: "right top"});
  jsav.step();

  jsav.umsg("Check what rt is pointing to. It is not null.");
  pseudo.unhighlight(0);
  pseudo.highlight(1);
  jsav.step();

  jsav.umsg("Check the value at the root. We find that it is greater than what we are looking for.");
  pseudo.unhighlight(1);
  pseudo.highlight(2);
  jsav.step();

  jsav.umsg("So we want to visit the left child.");
  pseudo.unhighlight(2);
  pseudo.highlight(3);
  jsav.step();

  jsav.umsg("We make a recursive call with the left child as the new rt.");
  pseudo.unhighlight(3);
  pseudo.highlight(0);
  rt1.css({visible: "true"});
  jsav.step();

  jsav.umsg("Check what rt is pointing to. This time it is null! So make a new node.");
  pseudo.unhighlight(0);
  pseudo.highlight(1);
  newnode.show();
  newedge.hide();
  rt1.target(newnode, {anchor: "left top"});
  jsav.step();

  jsav.umsg("At this point we have hit the base case on the recursive process. So now we will return out of the current instance of inserthelp.");
  jsav.step();

  jsav.umsg("Unwinding the recursion one level brings us the node with value 32, which is to the parent of the new node that we just created. We now re-assign its left pointer to point to the return value from the call to inserthelp (the new node that we had just created).");

  newnode = newnode.parent();
  newedge.show();
  rt1.target(newnode, {anchor: "left top"});
  jsav.step();

  jsav.umsg("Unwinding the recursion another level brings us the node with value 24. We now re-assign its right pointer to point to the return value from the call to inserthelp.");
  newedge = newnode.edgeToParent();
  newnode = newnode.parent();
  newedge.css("stroke", "red");
  newedge.css("stroke-width", 3);
  rt1.target(newnode, {anchor: "left top"});
  jsav.step();

  jsav.umsg("Unwinding the recursion another level brings us the node with value 37. We now re-assign its right pointer to point to the return value from the call to inserthelp.");
  newedge = newnode.edgeToParent();
  newnode = newnode.parent();
  newedge.css("stroke", "red");
  newedge.css("stroke-width", 3);
  rt1.target(newnode, {anchor: "left top"});
  jsav.step();

  jsav.umsg("Finally we return from initial call to inserthelp, returning a pointer to the node with value 37 (the root of the original tree). We now re-assign the BST's root pointer.");
  rt1.hide();
  var root1 = jsav.pointer("root", bt.root(), {anchor: "right top", top: 0});
  jsav.step();

  jsav.recorded();

}(jQuery));
