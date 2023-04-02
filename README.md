# Grid Structure

- Page in md size:
- ![](./images/page_layout.png)

```
<span style="color:orange">
  <span style="color:lightblue">Page smaller than md only has one column, greater than md has 4 cols and 2 rows</span>
  <div class="grid gap-6 grid-cols-1 md:grid-cols-4 md:grid-rows-2">
    <span style="color:lightblue">Page greater than md, box1 occupy 2 cols and 1 row</span>
    <box1 class="md:col-span-2"></box1>
    <box2></box2>
    <span style="color:lightblue">Page greater than md, box3 occupy 1 col and 2 rows</span>
    <box3 class="hidden md:row-span-2 md:block"></box3>
    <box4></box4>
    <span style="color:lightblue">Page greater than md, box5 occupy 2 cols and stay in the same row</span>
    <box5 class="md:col-span-2"></box5>
    <box6 class="md:hidden"></box6>
  </div>
</span>
```
