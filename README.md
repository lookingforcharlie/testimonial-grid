# Grid Structure

- Page in md size:
- ![](./images/page_layout.png)

```
<div class="grid gap-6 grid-cols-1 md:grid-cols-4 md:grid-rows-2">
  <box1 class="md:col-span-2"></box1>
  <box2></box2>
  <box3 class="hidden md:row-span-2 md:block"></box3>
  <box4></box4>
  <box5 class="md:col-span-2"></box5>
  <box6 class="md:hidden"></box6>
</div>
```
